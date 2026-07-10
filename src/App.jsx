import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useEffect, useState } from "react";

import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard"; 
import Categories from "./components/Categories";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import MyOrders from "./pages/MyOrders";
import WhatsAppButton from "./components/WhatsAppButton";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Products from "./admin/pages/Products";
import AddProduct from "./admin/pages/AddProduct";
import EditProduct from "./admin/pages/EditProduct";
import ProtectedRoute from "./admin/ProtectedRoute";
import Orders from "./admin/pages/Orders";
import Wishlist from "./pages/Wishlist";
import CustomerLogin from "./pages/CustomerLogin";
import About from "./pages/About";
import MyAccount from "./pages/MyAccount";

import CustomerProtectedRoute from "./components/CustomerProtectedRoute";
import { getProducts } from "./admin/services/firestoreProductService";

function Home({ 
 products,
 search,
 category,
 setCategory,
 sort,
 setSort
}){


  const filteredProducts = products.filter(product => {


    const searchText =
      search.toLowerCase();



    const matchesSearch =

      product.name
      ?.toLowerCase()
      .includes(searchText)

      ||

      product.category
      ?.toLowerCase()
      .includes(searchText)

      ||

      product.description
      ?.toLowerCase()
      .includes(searchText);



    const matchesCategory =

      category === "All"

      ||

      product.category === category;



    return (
      matchesSearch &&
      matchesCategory
    );


  });
  let sortedProducts = [...filteredProducts];

const featuredProducts = sortedProducts.filter(
  (product) => product.featured
);
if(sort === "low"){

  sortedProducts.sort(
    (a,b)=>a.price-b.price
  );

}


if(sort === "high"){

  sortedProducts.sort(
    (a,b)=>b.price-a.price
  );

} 




  return (

    <>


      <Hero />



      <div className="category-filter">


        <button
          onClick={() => setCategory("All")}
        >
          All
        </button>


        <button
          onClick={() => setCategory("Toys")}
        >
          Toys
        </button>


        <button
          onClick={() => setCategory("Mobile Accessories")}
        >
          Mobile Accessories
        </button>


        <button
          onClick={() => setCategory("Packaging")}
        >
          Packaging
        </button>


        <button
          onClick={() => setCategory("Electronics")}
        >
          Electronics
        </button>


      </div>




      <h2 style={{ padding: "40px 8% 20px" }}>
  ⭐ Featured Products
</h2>

<div className="products">
  {featuredProducts.length > 0 ? (
    featuredProducts.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))
  ) : (
    <h3>No Featured Products</h3>
  )}
</div>

<h2 style={{ padding: "40px 8% 20px" }}>
  📦 All Products
</h2>

<div className="products">
  {filteredProducts.length === 0 ? (
    <h3>No Products Found</h3>
  ) : (
    sortedProducts.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))
  )}
</div>



      <Categories />

      <Features />


    </>

  );

}

function App() {

const [products,setProducts] = useState([]);

const [search,setSearch] = useState("");
  const [category,setCategory] = useState("All");
  const [sort,setSort] = useState("default");
useEffect(()=>{


async function loadProducts(){


const data =
await getProducts();


setProducts(data);


}


loadProducts();


},[]);

  return (

    <BrowserRouter>

     <Navbar
 search={search}
 setSearch={setSearch}
/>

      <Routes>

        <Route
 path="/"
 element={
   
<Home

products={products}

search={search}

category={category}

setCategory={setCategory}

sort={sort}

setSort={setSort}

/>
 }
/>

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
<Route
  path="/register"
  element={<Register />}
/>
<Route
  path="/my-orders"
  element={
    <CustomerProtectedRoute>
      <MyOrders />
    </CustomerProtectedRoute>
  }
/>
        <Route
          path="/checkout/:id"
          element={<Checkout />}
        />
        <Route
  path="/about"
  element={<About />}
/>


<Route path="/contact" element={<Contact />} />
        <Route
  path="/login"
  element={<CustomerLogin />}
/>
<Route
  path="/contact"
  element={<Contact />}
/>
<Route
  path="/account"
  element={
    <CustomerProtectedRoute>
      <MyAccount />
    </CustomerProtectedRoute>
  }
/>

<Route

path="/wishlist"

element={<Wishlist/>}

/>
        <Route
          path="/admin"
          element={<Login />}
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
<Route
 path="/admin/orders"
 element={
   <ProtectedRoute>
     <Orders />
   </ProtectedRoute>
 }
/>
        <Route
          path="/admin/add-product"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-product/:id"
          element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />
      <WhatsAppButton />

    </BrowserRouter>

  );

}

export default App; 