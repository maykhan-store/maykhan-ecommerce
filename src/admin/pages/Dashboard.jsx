import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import DashboardCharts from "../components/DashboardCharts";
import {
  getDashboardStats
} from "../services/dashboardService";

import "../admin.css";


function Dashboard() {


  const [stats, setStats] = useState(null);



  useEffect(() => {


    async function loadStats(){


      const data =
        await getDashboardStats();


      setStats(data);


    }


    loadStats();


  }, []);





  if(!stats){


    return (

      <div className="admin-layout">

        <Sidebar />

        <main className="admin-main">

          <h2>
            Loading Dashboard...
          </h2>

        </main>

      </div>

    );


  }






  return (


    <div className="admin-layout">


      <Sidebar />



      <main className="admin-main">



        <Header />



        <div className="stats-grid">


          <StatCard

            title="Products"

            value={
              stats.totalProducts
            }

          />



          <StatCard

            title="Orders"

            value={
              stats.totalOrders
            }

          />



          <StatCard

            title="Pending Orders"

            value={
              stats.pendingOrders
            }

          />



          <StatCard

            title="Revenue"

            value={
              `₹${stats.totalSales}`
            }

          />



        </div>




<DashboardCharts

orders={stats.recentOrders}

/>
        <h2 className="dashboard-title">

          Recent Orders

        </h2>





        <div className="recent-orders">


        {

          stats.recentOrders.length === 0 ? (

            <p>
              No Orders Yet
            </p>


          ) : (


            stats.recentOrders.map(order => (


              <div

                className="admin-product"

                key={order.id}

              >


                <h3>

                  {order.productName}

                </h3>



                <p>

                  Customer:
                  {" "}
                  {order.customerName}

                </p>



                <p>

                  Amount:
                  {" "}
                  ₹{order.total}

                </p>



                <p>

                  Status:
                  {" "}
                  {order.status}

                </p>



              </div>


            ))


          )

        }


        </div>



      </main>


    </div>


  );


}


export default Dashboard;