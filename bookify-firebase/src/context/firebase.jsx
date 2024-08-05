import { createContext, useContext, useEffect, useState } from "react";
import {getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from 'firebase/auth'
import {getDatabase} from 'firebase/database';
import {initializeApp} from 'firebase/app'
import {getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where} from 'firebase/firestore'
import {getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB7L760ZjD4fCLctlyLvfrYMb5TpnhKbIU",
    authDomain: "bookify-e00b9.firebaseapp.com",
    projectId: "bookify-e00b9",
    storageBucket: "bookify-e00b9.appspot.com",
    messagingSenderId: "828499039992",
    appId: "1:828499039992:web:aeeaf621ab456f0d4d8d0d"
  };


const firebaseApp=initializeApp(firebaseConfig);

export const useFirebase=()=>useContext(FirebaseContext);

const FirebaseContext=createContext(null);
const firbaseAuth=getAuth(firebaseApp);
const database=getDatabase(firebaseApp);
const googleProvider=new GoogleAuthProvider();
const firestore=getFirestore(firebaseApp);
const storage=getStorage(firebaseApp);



export const FirebaseProvider=(props)=>{  
    const[user, setUser]=useState(null);
    useEffect(()=>{
        onAuthStateChanged(firbaseAuth,(user)=>{
            if(user)setUser(user);
            else setUser(null);
        })
    },[])

    const signupUserWithEmailAndPassword=(email, password)=>
        createUserWithEmailAndPassword(firbaseAuth, email, password);

    const signinUserWithEmailAndPassword=(email, password)=>
        signInWithEmailAndPassword(firbaseAuth, email, password);

    const signInWithGoogle=()=>signInWithPopup(firbaseAuth, googleProvider);

    console.log(user)

    const handleCreateNewListing=async(name, isbn, price, cover)=>{
        const imageRef=ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
        const uploadResult=await uploadBytes(imageRef, cover);
        return await addDoc(collection(firestore, 'books'), {
            name,
            isbn,
            price,
            imageURl:uploadResult.ref.fullPath,
            userId:user.uid,
            userEmail:user.email,
            displayName:user.displayName,
            photoURL:user.photoURL
        })
    };
    const listAllBooks=()=>{
        return getDocs(collection(firestore,"books"))
    }

    const getBookById=async(id)=>{
        const docRef=doc(firestore, 'books', id);
        const result=await getDoc(docRef)
        return result;
    }
    const getImageURl=(path)=>{
        return getDownloadURL(ref(storage,path))
    }
    const placeOrder = async (bookId, qty) => {
        const collectionRef = collection(firestore, "books", bookId, "orders");
        const result = await addDoc(collectionRef, {
          userID: user.uid,
          userEmail: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          qty: Number(qty),
        });
        return result;
      };

      const fetchMyBooks = async(userId) => {
        const collectionRef = collection(firestore, "books");
        const q = query(collectionRef, where("userID", "==", userId));
    
        const result = await getDocs(q);
        return result;
      };

      const getOrders = async (bookId) => {
        const collectionRef = collection(firestore, "books", bookId, "orders");
        const result = await getDocs(collectionRef);
        return result;
      };
    
    const isLoggedIn=user ? true:false;
    return(
        <FirebaseContext.Provider value={{
        getOrders, 
        user, 
        fetchMyBooks, 
        placeOrder, 
        getBookById, 
        getImageURl, 
        listAllBooks, 
        handleCreateNewListing, 
        isLoggedIn,
        signupUserWithEmailAndPassword, 
        signinUserWithEmailAndPassword, 
        signInWithGoogle}}>

            {props.children}
        </FirebaseContext.Provider>
    );
};