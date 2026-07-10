import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../../firebase";

const reviewsRef = collection(db, "reviews");

export async function addReview(review) {

  await addDoc(reviewsRef, {
    ...review,
    createdAt: serverTimestamp()
  });

}

export async function getProductReviews(productId) {

  const q = query(
    reviewsRef,
    where("productId", "==", productId),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

}