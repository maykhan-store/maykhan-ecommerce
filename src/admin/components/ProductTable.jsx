import { Link } from "react-router-dom";

function ProductTable({ products, onDelete }) {

  return (

    <table className="product-table">

      <thead>

        <tr>

          <th>Image</th>

          <th>Name</th>

          <th>Category</th>

          <th>Price</th>

          <th>Stock</th>

          <th>Actions</th>

        </tr>

      </thead>

      <tbody>

        {products.map((product) => (

          <tr key={product.id}>

            <td>

              <img
                src={
                  product.image ||
                  "https://placehold.co/70x70"
                }
                alt={product.name}
                width="60"
              />

            </td>

            <td>{product.name}</td>

            <td>{product.category}</td>

            <td>₹{product.price}</td>

            <td>{product.stock}</td>

            <td>

              <Link
                to={`/admin/edit-product/${product.id}`}
              >
                Edit
              </Link>

              {" | "}

              <button
                onClick={() =>
                  onDelete(product.id)
                }
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}

export default ProductTable;