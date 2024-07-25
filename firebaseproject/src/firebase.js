import {initializeApp} from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyBvc6xraevElYRzxGReGKQXoloyfs8MlQo",
    authDomain: "ytapp-6405b.firebaseapp.com",
    projectId: "ytapp-6405b",
    storageBucket: "ytapp-6405b.appspot.com",
    messagingSenderId: "503151959851",
    appId: "1:503151959851:web:32efbd9c837854e0282f6e",
    databaseURL:"https://ytapp-6405b-default-rtdb.firebaseio.com/"
  };


export const app = initializeApp(firebaseConfig); 