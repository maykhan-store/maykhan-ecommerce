import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

import { db } from "../../firebase";

const productsRef = collection(db, "products");

// Get all products
export async function getProducts() {

  const snapshot = await getDocs(productsRef);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

}

// Get one product
export async function getProduct(id) {

  const snapshot = await getDoc(
    doc(db, "products", id)
  );

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data()
  };

}

// Add
export async function addProduct(product) {

  return await addDoc(productsRef, product);

}

// Update
export async function updateProduct(id, product) {

  return await updateDoc(
    doc(db, "products", id),
    product
  );

}

// Delete
export async function deleteProduct(id) {

  return await deleteDoc(
    doc(db, "products", id)
  );

}