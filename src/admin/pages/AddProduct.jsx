import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import ProductForm from "../components/ProductForm";

import { addProduct } from "../services/firestoreProductService";

import "../admin.css";

function AddProduct() {

  const navigate = useNavigate();


async function save(product) {

  try {

    await addProduct(product);

    alert("✅ Product Added Successfully");

    navigate("/admin/products");

  } catch (error) {

    console.error(error);

    alert("Error adding product");

  }

  }

  return (

    <div className="admin-layout">

      <Sidebar />

      <main className="admin-main">

        <h1>Add Product</h1>

        <ProductForm onSave={save} />

      </main>

    </div>

  );

}

export default AddProduct;