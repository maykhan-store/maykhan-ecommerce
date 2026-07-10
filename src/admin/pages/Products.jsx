import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import ProductTable from "../components/ProductTable";

import {
  getProducts,
  deleteProduct
} from "../services/firestoreProductService";

import "../admin.css";


function Products() {


  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);



  async function loadProducts() {


    try {


      const data = await getProducts();


      setProducts(data);


    }

    catch(error){


      console.error(error);


      alert("Unable to load products");


    }

    finally {


      setLoading(false);


    }


  }





  useEffect(() => {


    loadProducts();


  }, []);





  async function handleDelete(id) {


    const confirmDelete =
      window.confirm(
        "Delete this product?"
      );



    if(!confirmDelete) return;




    try {


      await deleteProduct(id);


      alert(
        "Product Deleted"
      );


      loadProducts();


    }

    catch(error){


      console.error(error);


      alert(
        "Delete Failed"
      );


    }


  }





  return (


    <div className="admin-layout">


      <Sidebar />



      <main className="admin-main">



        <div className="page-header">


          <h1>

            Products

          </h1>



          <Link

            className="add-btn"

            to="/admin/add-product"

          >

            + Add Product

          </Link>



        </div>




        {

          loading ? (

            <h2>

              Loading Products...

            </h2>


          ) : (


            <ProductTable

              products={products}

              onDelete={handleDelete}

            />


          )

        }



      </main>


    </div>


  );

}


export default Products;