import {
  useParams,
  useNavigate
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";


import Sidebar from "../components/Sidebar";

import ProductForm from "../components/ProductForm";


import {

  getProduct,

  updateProduct

} from "../services/firestoreProductService";


import "../admin.css";


function EditProduct() {


  const { id } = useParams();

  const navigate = useNavigate();


  const [product, setProduct] = useState(null);



  useEffect(() => {


    async function loadProduct() {


      const data = await getProduct(id);


      setProduct(data);


    }


    loadProduct();


  }, [id]);




  async function save(updatedData) {


    try {


      await updateProduct(

        id,

        updatedData

      );


      alert("Product Updated Successfully");


      navigate("/admin/products");


    }

    catch(error){


      console.error(error);


      alert("Update Failed");


    }


  }





  if (!product) {


    return (

      <h2>

        Loading Product...

      </h2>

    );


  }




  return (


    <div className="admin-layout">


      <Sidebar />


      <main className="admin-main">


        <h1>

          Edit Product

        </h1>



        <ProductForm

          initialData={product}

          onSave={save}

        />


      </main>


    </div>


  );


}


export default EditProduct;