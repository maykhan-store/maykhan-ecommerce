import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("adminLogin");
    navigate("/admin");
  }

  return (

    <aside className="sidebar">

      <h2 className="sidebar-logo">
        MAYKHAN
      </h2>

      <nav>

        <Link to="/admin/dashboard">
          🏠 Dashboard
        </Link>

        <Link to="/admin/products">
          📦 Products
        </Link>

        <Link to="/admin/add-product">
          ➕ Add Product
        </Link>

        <Link to="/admin/orders">
          📋 Orders
        </Link>

        <Link to="/admin/settings">
          ⚙ Settings
        </Link>

      </nav>

      <button
        className="logout-btn"
        onClick={logout}
      >
        Logout
      </button>

    </aside>

  );

}

export default Sidebar;