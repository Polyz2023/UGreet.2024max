// index.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const web = express();
const { auth, firestore, storage } = require('./firebase'); 
const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");
const { doc, setDoc, getDoc, collection, getDocs } = require('firebase/firestore');
const { ref, uploadString, getDownloadURL } = require('firebase/storage');
const { getIdToken } = require('firebase/auth');

const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(`Email: ${email}, Regex: ${emailRegex}, Result: ${emailRegex.test(email)}`);
    return emailRegex.test(email);
}

const uploadImageToStorage = async (IMGbase64) => {
    const storageRef = ref(storage, `images/${Date.now()}.png`); 
    await uploadString(storageRef, IMGbase64, 'data_url'); 
    const url = await getDownloadURL(storageRef); 
    return url; 
};

const CreateUSer = async (email, password, username, IMGbase64) => {
    try {
        if (!isValidEmail(email)) {
            throw new Error('Неверный формат email');
        }

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const CurrentNewUser = userCredential.user.uid;

        const IMGUrl = await uploadImageToStorage(IMGbase64);


        await setDoc(doc(firestore, 'users', CurrentNewUser), {
            username: username,
            IMGUser: IMGUrl,
            Posts: [{
                name: `First post  ${username}.`,
                IMGBASE64: IMGUrl,
                Descryption: `Hi, i am a new user ${username} in UGreet!.`,
                PUID: `PUID_${Math.floor(Math.random() * (1000000 - 1)) + 1000000}_PUID`
            }]
        });

        return userCredential.user;
    } catch (error) {
        console.error('Ошибка регистрации:', error);
        throw error;
    }
}

const SignInUser = async (email, password) => {
    try {
        if (!isValidEmail(email)) {
            throw new Error('Неверный формат email');
        }
        
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const idToken = await user.getIdToken();
        
        return { user, idToken };
    } catch (error) {
        console.error('Ошибка входа:', error);
        throw error;
    }
}

const GetUserData = async (uid) => {
    try{
        const userDocRef = doc(firestore, 'users', uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            console.log("Данные пользователя из Firestore:", userData);
            return userData;
        } else {
            console.log("Пользователь с таким user_id не найден в Firestore");
        }
    } catch (error) {
        console.error("Ошибка при получении данных пользователя из Firestore:", error);
    }
}

const CreateUserPost = async (uid, postdata) => {
    try {
        const userData = await GetUserData(uid);
        
        if (!userData.Posts) {
            userData.Posts = []; 
        }
        
        userData.Posts.push(postdata); 
        console.log("New post successfully added to Firestore:", userData.Posts);
        
        const userDocRef = doc(firestore, 'users', uid);
        await setDoc(userDocRef, userData, { merge: true });
        
        console.log("User data updated in Firestore.");
    } catch (error) {
        console.log("Error setting post to user: ", error);
    }
};

const GetRandomUser = async () => {
    try {
        const usersCollectionRef = collection(firestore, 'users'); // Получаем ссылку на коллекцию 'users'
        const usersSnapshot = await getDocs(usersCollectionRef); // Получаем все документы коллекции
        
        const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        if (users.length === 0) {
            throw new Error('Нет пользователей в базе данных');
        }

        const randomIndex = Math.floor(Math.random() * users.length);
        return users[randomIndex];
    } catch (error) {
        console.error('Ошибка при получении случайного пользователя:', error);
        throw error;
    }
};

const GetRandomPostFromUser = (user) => {
    try {
        if (!user.Posts || user.Posts.length === 0) {
            throw new Error('У пользователя нет постов');
        }

        const randomIndex = Math.floor(Math.random() * user.Posts.length);

        return user.Posts[randomIndex];
    } catch (error) {
        console.error('Ошибка при получении случайного поста:', error);
        throw error;
    }
};

const GetPostByPUID = async (puid) => {
    try {
        const usersCollectionRef = collection(firestore, 'users');
        const usersSnapshot = await getDocs(usersCollectionRef);

        let foundPost = null;

        for (const userDoc of usersSnapshot.docs) {
            const userData = userDoc.data();
            const post = userData.Posts.find(post => post.PUID === puid);
            
            if (post) {
                foundPost = { ...post, userId: userDoc.id };
                break;
            }
        }

        if (foundPost) {
            console.log("Пост найден:", foundPost);
            return foundPost;
        } else {
            throw new Error('Пост с таким PUID не найден');
        }
    } catch (error) {
        console.error('Ошибка при получении поста по PUID:', error);
        throw error;
    }
};

const GetAllPosts = async () => {
    try{
        const usersCollectionRef = collection(firestore, 'users');
        const usersSnapshot = await getDocs(usersCollectionRef);

        let AllPosts = [];

        usersSnapshot.forEach((userDoc) => {
            const userData = userDoc.data();

            AllPosts = [...AllPosts, ...userData.Posts.map(post=>({...post}))];
        });

        console.log("All posts getted");
        return AllPosts;
    } catch (error){
        console.log("Error to get all posts: " + error);
    }
}

web.use(bodyParser.json({ limit: '50mb' }));
web.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
web.use(cors());
web.use(express.static(path.join(__dirname, 'dist')));

web.post("/register", async (req, res) => {
    try {
        const { email, password, username, IMGbase64 } = req.body;
        console.log('Полученные данные для регистрации:', req.body);

        const user = await CreateUSer(email, password, username, IMGbase64);
        res.status(200).json({ message: "User created successfully", user });
        console.log(`Successfully created new user: ${user}`); 
    } catch (error) {
        console.log(`Crushed server at /register: ${error}`);
        res.status(500).json({ error: error.message }); 
    }
});

web.post("/signin", async (req, res)=>{
    try {
        console.log('Полученные данные:', req.body);
        const { email, password } = req.body;
        const { user, idToken } = await SignInUser(email, password);
        res.status(200).json({ message: "Login successful", user, token: idToken });
        console.log("token: "+idToken);
    } catch (error) {
        console.error(`Error at /login: ${error}`);
        res.status(500).json({ error: error.message });
    }
});

web.post('/account/getdata', async (req, res) => {
    const { user_id } = req.body;
    
    try {
        const userData = await GetUserData(user_id); 
        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json({ message: 'Пользователь не найден' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера', error });
    }
});

web.post('/account/newpost', async (req, res)=>{
    const {UID, name, PUID, Descryption, IMGBASE64} = req.body;
    const resp = await CreateUserPost(UID, {name, Descryption, PUID, IMGBASE64});
});

web.post('/account/posts/randompost', async (req, res)=>{
    try {
        const randomUser = await GetRandomUser();

        const randomPost = GetRandomPostFromUser(randomUser);

        res.status(200).json({ message: "Random user and post found", user: randomUser, post: randomPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

web.post('/account/posts/getbypuid', async (req, res) => {
    const { PUID } = req.body;

    try {
        const post = await GetPostByPUID(PUID);
        res.status(200).json({ message: "Пост найден", post });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

web.post('/account/posts/getall', async (req, res) => {
    try{
        const AllPosts = await GetAllPosts();
        res.status(200).json({message:"All posts getted", posts:AllPosts});
        console.log("LOOOOOOOg")
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

web.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


const PORT = process.env.PORT || 8452;
web.listen(PORT, () => {
    console.log(`Server built successfully on port ${PORT}, and server: http://localhost:${PORT}`);
});
