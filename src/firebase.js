import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  where,
  onSnapshot,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { async } from "@firebase/util";


const firebaseConfig = {
  apiKey: "AIzaSyD9ggAKx-O8ApwYQMSwdwhLwp96xLsczOM",
  authDomain: "foodmenu-36a8a.firebaseapp.com",
  projectId: "foodmenu-36a8a",
  storageBucket: "foodmenu-36a8a.appspot.com",
  messagingSenderId: "487539890597",
  appId: "1:487539890597:web:0ee2d311e812338c3f704c",
  measurementId: "G-0B0VT59HJR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore();
const storage = getStorage(app);


 export async function getMenuItems() {
    const docSnap = await getDocs(collection(firestore, "menus"));
    return docSnap.docs.map((d) => d.data());  
}

export const getImageURL= (props)=>{
const starsRef = ref(storage, `foodImage/${props}`);
console.log(starsRef +"starRef");
 getDownloadURL(starsRef)
  
.then((url)=>{
  console.log(url);
});
  

}