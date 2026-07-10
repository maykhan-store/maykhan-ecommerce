import ProductCard from "./ProductCard";


function RelatedProducts({ products = [], currentId }) {


  const related = products
    .filter(
      item => item.id !== currentId
    )
    .slice(0, 4);



  if (related.length === 0) {

    return null;

  }



  return (

    <section>


      <h2>

        Related Products

      </h2>



      <div className="products">


        {
          related.map(product => (


            <ProductCard

              key={product.id}

              product={product}

            />


          ))
        }


      </div>



    </section>

  );


}


export default RelatedProducts; 