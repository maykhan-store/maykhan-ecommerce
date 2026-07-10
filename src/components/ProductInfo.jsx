import { Link } from "react-router-dom";


function ProductInfo({ product }) {


  return (

    <div className="product-info">


      <h1>
        {product.name}
      </h1>


      <h2>
        ₹{product.price}
      </h2>


      <p>
        {product.description}
      </p>



      {
        product.features &&
        product.features.length > 0 &&

        <>

          <h3>
            Features
          </h3>


          <ul>

            {
              product.features.map(
                (item,index)=>(

                  <li key={index}>
                    ✓ {item}
                  </li>

                )
              )
            }

          </ul>

        </>

      }



      {
        product.specifications &&
        Object.keys(product.specifications).length > 0 &&

        <>

          <h3>
            Specifications
          </h3>


          <table>

            <tbody>

              {
                Object.entries(
                  product.specifications
                )
                .map(([key,value])=>(

                  <tr key={key}>

                    <td>
                      {key}
                    </td>

                    <td>
                      {value}
                    </td>

                  </tr>

                ))

              }

            </tbody>

          </table>

        </>

      }



      <Link to={`/checkout/${product.id}`}>

        <button>
          Buy Now
        </button>

      </Link>


    </div>

  );

}


export default ProductInfo;