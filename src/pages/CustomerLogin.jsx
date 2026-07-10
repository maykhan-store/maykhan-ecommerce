import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function CustomerLogin() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      navigate("/account");

    } catch (error) {

      alert("Invalid email or password.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="auth-container">

      <h1>Customer Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>

          {loading ? "Signing In..." : "Login"}

        </button>

      </form>

      <p>

        Don't have an account?

        <Link to="/register"> Register</Link>

      </p>

    </div>

  );

}

export default CustomerLogin;