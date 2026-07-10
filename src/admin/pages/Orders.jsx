import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import {
  getOrders,
  updateOrderStatus,
  deleteOrder
} from "../services/orderService";

import "../admin.css";


function Orders() {


  const [orders, setOrders] = useState([]);


  const [loading, setLoading] = useState(true);




  async function loadOrders() {


    try {


      const data = await getOrders();


      setOrders(data);


    }


    catch(error){


      console.error(error);


      alert("Unable to load orders");


    }


    finally{


      setLoading(false);


    }


  }





  useEffect(() => {


    loadOrders();


  }, []);






  async function changeStatus(id,status){


    await updateOrderStatus(
      id,
      status
    );


    loadOrders();


  }







  async function handleDelete(id){


    if(
      window.confirm(
        "Delete this order?"
      )
    ){


      await deleteOrder(id);


      loadOrders();


    }


  }






  return (


    <div className="admin-layout">


      <Sidebar />



      <main className="admin-main">


        <h1>
          Orders
        </h1>




        {

          loading ? (

            <h2>
              Loading Orders...
            </h2>


          ) : orders.length === 0 ? (


            <h2>
              No Orders Found
            </h2>


          ) : (


            orders.map(order => (


              <div
                className="admin-product"
                key={order.id}
              >



                <h2>
                  {order.productName}
                </h2>



                <p>
                  Customer:
                  <b>
                    {" "}{order.customerName}
                  </b>
                </p>



                <p>
                  Mobile:
                  {" "}{order.mobile}
                </p>



                <p>
                  Address:
                  {" "}{order.address},
                  {" "}{order.city}
                  {" "}{order.pincode}
                </p>




                <p>
                  Quantity:
                  {" "}{order.quantity}
                </p>



                <p>
                  Total:
                  {" "}₹{order.total}
                </p>




                <p>
                  Status:
                  {" "}
                  <b>
                    {order.status}
                  </b>
                </p>




                <select

                  value={order.status}

                  onChange={(e)=>
                    changeStatus(
                      order.id,
                      e.target.value
                    )
                  }

                >

                  <option>
                    Pending
                  </option>

                  <option>
                    Confirmed
                  </option>

                  <option>
                    Shipped
                  </option>

                  <option>
                    Delivered
                  </option>

                  <option>
                    Cancelled
                  </option>


                </select>




                <br />



                <button

                  onClick={()=>
                    handleDelete(order.id)
                  }

                >

                  Delete Order

                </button>



              </div>


            ))


          )

        }



      </main>


    </div>


  );

}


export default Orders;