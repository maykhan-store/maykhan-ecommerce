import { useState } from "react";

import { addOrder } from "../admin/services/orderService";
import { useAuth } from "../context/AuthContext";


function OrderForm({ product }) {
const { currentUser } = useAuth();

  const [customer, setCustomer] = useState({

    name: "",
    mobile: "",
    address: "",
    city: "",
    pincode: "",
    quantity: 1

  });



  const [loading, setLoading] = useState(false);



  function handleChange(e) {

    setCustomer({

      ...customer,

      [e.target.name]: e.target.value

    });

  }





  async function placeOrder() {


    try {


      setLoading(true);



      const orderData = {


        customerName: customer.name,
        customerEmail: currentUser?.email || "Guest",

        mobile: customer.mobile,

        address: customer.address,

        city: customer.city,

        pincode: customer.pincode,


        productId: product.id,

        productName: product.name,

        price: product.price,


        quantity: Number(customer.quantity),


        total:
          Number(product.price) *
          Number(customer.quantity),


        status: "Pending"


      };



      // Save order to Firestore

      await addOrder(orderData);



      const message = `

NEW ORDER - MAYKHAN

Product:
${product.name}

Price:
₹${product.price}

Quantity:
${customer.quantity}

Total:
₹${orderData.total}

Customer Name:
${customer.name}

Mobile:
${customer.mobile}

Address:
${customer.address}

City:
${customer.city}

Pincode:
${customer.pincode}

`;



      const whatsappNumber =
        "916300643960";



      const url =

      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;



      window.open(url, "_blank");



    }


    catch(error){


      console.error(error);


      alert(
        "Order failed. Please try again."
      );


    }


    finally{


      setLoading(false);


    }


  }





  return (


    <div className="order-box">


      <h2>
        Customer Details
      </h2>



      <input

        name="name"

        placeholder="Full Name"

        onChange={handleChange}

      />



      <input

        name="mobile"

        placeholder="Mobile Number"

        onChange={handleChange}

      />



      <textarea

        name="address"

        placeholder="Full Address"

        onChange={handleChange}

      />



      <input

        name="city"

        placeholder="City"

        onChange={handleChange}

      />



      <input

        name="pincode"

        placeholder="Pincode"

        onChange={handleChange}

      />



      <input

        type="number"

        name="quantity"

        min="1"

        value={customer.quantity}

        onChange={handleChange}

      />



      <button

        onClick={placeOrder}

        disabled={loading}

      >

        {
          loading
          ?
          "Saving Order..."
          :
          "Order On WhatsApp"
        }


      </button>



    </div>


  );


}


export default OrderForm;