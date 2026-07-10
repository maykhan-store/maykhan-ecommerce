import { useEffect, useState } from "react";

import { useAuth } from "../context/AuthContext";

import { getCustomerOrders } from "../admin/services/orderService";

function MyOrders() {

  const { currentUser } = useAuth();

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    async function loadOrders() {

      if (!currentUser) return;

      const data = await getCustomerOrders(currentUser.email);

      setOrders(data);

    }

    loadOrders();

  }, [currentUser]);

  return (

    <div style={{ padding: "40px" }}>

      <h1>My Orders</h1>

      {orders.length === 0 ? (

        <p>No orders yet.</p>

      ) : (

        orders.map(order => (

          <div
            key={order.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "8px"
            }}
          >

            <h3>{order.productName}</h3>

            <p>Quantity: {order.quantity}</p>

            <p>Total: ₹{order.total}</p>

            <p>Status: {order.status}</p>

          </div>

        ))

      )}

    </div>

  );

}

export default MyOrders;