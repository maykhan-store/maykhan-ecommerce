import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";  
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../admin.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


    async function login(e) {

  e.preventDefault();

  try {

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    localStorage.setItem("adminLogin", "true");

    navigate("/admin/dashboard");

  } catch (error) {

    alert("Invalid email or password");

    console.error(error);

  }

  }

  return (

    <div className="login-page">

      <form className="login-box" onSubmit={login}>

        <h1>MAYKHAN Admin</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;