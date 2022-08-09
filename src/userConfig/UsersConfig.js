
// import { db } from "../firebase-config";

import {
  addDoc, collection, deleteDoc,
  doc, getDoc, getDocs, updateDoc
} from "firebase/firestore";
import { db } from "../firebase";

const userCollectionRef = collection(db, "users");
class UsersConfig {
  addUser = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };

  updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updatedUser);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(userCollectionRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };
}

export default new UsersConfig();
