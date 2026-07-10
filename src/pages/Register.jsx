import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function Register() {

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

      await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      alert("Registration successful!");

      navigate("/login");

    } catch (error) {

      alert(error.message);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="auth-container">

      <h1>Create Account</h1>

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

          {loading ? "Creating..." : "Create Account"}

        </button>

      </form>

      <p>

        Already have an account?

        <Link to="/login"> Login</Link>

      </p>

    </div>

  );

}

export default Register;