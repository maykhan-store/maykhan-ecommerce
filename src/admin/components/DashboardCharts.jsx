import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";


function DashboardCharts({orders}) {


  const statusData = [

    {
      name:"Pending",
      value:
      orders.filter(
        o=>o.status==="Pending"
      ).length
    },


    {
      name:"Confirmed",
      value:
      orders.filter(
        o=>o.status==="Confirmed"
      ).length
    },


    {
      name:"Delivered",
      value:
      orders.filter(
        o=>o.status==="Delivered"
      ).length
    },


    {
      name:"Cancelled",
      value:
      orders.filter(
        o=>o.status==="Cancelled"
      ).length
    }

  ];



  const salesData =
    orders.map(order => ({

      name:
      order.productName.substring(0,12),

      amount:
      Number(order.total || 0)

    }));




return (

<div className="charts">


<div className="chart-box">

<h2>
Order Status
</h2>


<ResponsiveContainer
width="100%"
height={300}
>

<PieChart>

<Pie

data={statusData}

dataKey="value"

outerRadius={100}

label

>

{
statusData.map(
(entry,index)=>(

<Cell key={index}/>

)
)
}

</Pie>

</PieChart>

</ResponsiveContainer>


</div>





<div className="chart-box">


<h2>
Sales
</h2>


<ResponsiveContainer

width="100%"

height={300}

>


<BarChart data={salesData}>


<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>


<Bar

dataKey="amount"

/>


</BarChart>


</ResponsiveContainer>


</div>


</div>

)


}


export default DashboardCharts;