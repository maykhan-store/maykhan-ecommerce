import { useAuth } from "../context/AuthContext";

function MyAccount() {

  const { currentUser, logout } = useAuth();

  return (

    <div style={{ padding: "40px" }}>

      <h1>My Account</h1>

      <p>Email: {currentUser?.email}</p>

      <button onClick={logout}>
        Logout
      </button>

    </div>

  );

}

export default MyAccount;