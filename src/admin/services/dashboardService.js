import {
  collection,
  getDocs
} from "firebase/firestore";

import { db } from "../../firebase";



export async function getDashboardStats(){


  const productsSnapshot =
    await getDocs(
      collection(db,"products")
    );


  const ordersSnapshot =
    await getDocs(
      collection(db,"orders")
    );



  const products =
    productsSnapshot.docs.map(doc=>({

      id:doc.id,

      ...doc.data()

    }));



  const orders =
    ordersSnapshot.docs.map(doc=>({

      id:doc.id,

      ...doc.data()

    }));




  const totalProducts =
    products.length;




  const totalOrders =
    orders.length;




  const pendingOrders =
    orders.filter(
      order =>
      order.status === "Pending"
    ).length;




  const deliveredOrders =
    orders.filter(
      order =>
      order.status === "Delivered"
    ).length;




  const totalSales =
    orders
    .filter(
      order =>
      order.status === "Delivered"
    )
    .reduce(
      (sum,order)=>
      sum + Number(order.total || 0),
      0
    );




  return {


    totalProducts,

    totalOrders,

    pendingOrders,

    deliveredOrders,

    totalSales,

    recentOrders:
      orders
      .slice(-5)
      .reverse()


  };


}