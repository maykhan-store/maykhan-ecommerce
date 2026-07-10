import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import OrderForm from "../components/OrderForm";

import { getProduct } from "../admin/services/firestoreProductService";

function Checkout() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    async function loadProduct() {

      const data = await getProduct(id);

      setProduct(data);

    }

    loadProduct();

  }, [id]);

  if (!product) {

    return (
      <div className="checkout">
        <h2>Loading...</h2>
      </div>
    );

  }

  return (

    <div className="checkout">

      <h1>Checkout</h1>

      <div className="checkout-product">

        <img
          src={product.image}
          alt={product.name}
        />

        <div>

          <h2>{product.name}</h2>

          <h3>₹{product.price}</h3>

        </div>

      </div>

      <OrderForm product={product} />

    </div>

  );

}

export default Checkout;