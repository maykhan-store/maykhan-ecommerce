import {
useContext
} from "react";

import {
WishlistContext
} from "../context/WishlistContext";

import ProductCard from "../components/ProductCard";


function Wishlist(){


const {
wishlist
}=useContext(
WishlistContext
);



return (

<div>


<h1>
My Wishlist
</h1>



<div className="products">


{
wishlist.length===0

?

<h3>
No Wishlist Items
</h3>


:

wishlist.map(product=>(


<ProductCard

key={product.id}

product={product}

/>


))


}


</div>


</div>

)


}


export default Wishlist;