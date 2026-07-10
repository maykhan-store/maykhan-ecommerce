import {
  createContext,
  useState,
  useEffect
} from "react";


export const WishlistContext =
createContext();



export function WishlistProvider({children}){


const [wishlist,setWishlist] = useState(()=>{


const saved =
localStorage.getItem(
"wishlist"
);


return saved
?
JSON.parse(saved)
:
[];

});




useEffect(()=>{


localStorage.setItem(

"wishlist",

JSON.stringify(wishlist)

);


},[wishlist]);





function addWishlist(product){


const exists =
wishlist.find(
item=>item.id===product.id
);



if(!exists){


setWishlist([
...wishlist,
product
]);


}


}





function removeWishlist(id){


setWishlist(

wishlist.filter(
item=>item.id!==id
)

);


}




return (

<WishlistContext.Provider

value={{

wishlist,

addWishlist,

removeWishlist

}}

>

{children}

</WishlistContext.Provider>

)


}