import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  where
} from "firebase/firestore";

import { db } from "../../firebase";

const ordersRef = collection(db, "orders");


// Add Order

export async function addOrder(order) {

  return await addDoc(ordersRef, {
    ...order,
    createdAt: serverTimestamp()
  });

}


// Get All Orders (Admin)

export async function getOrders() {

  const snapshot = await getDocs(ordersRef);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

}


// Get Customer Orders

export async function getCustomerOrders(email) {

  const q = query(
    ordersRef,
    where("customerEmail", "==", email)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

}


// Update Order Status

export async function updateOrderStatus(id, status) {

  await updateDoc(
    doc(db, "orders", id),
    {
      status
    }
  );

}


// Delete Order

export async function deleteOrder(id) {

  await deleteDoc(
    doc(db, "orders", id)
  );

}