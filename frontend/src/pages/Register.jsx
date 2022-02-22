import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <div className="form-group">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </form>
        </div>
        <div className="form-group">
          <form>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
              required
            />
          </form>
        </div>
        <div className="form-group">
          <form>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </form>
        </div>
        <div className="form-group">
          <form>
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={handleChange}
              required
            />
          </form>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default Register;
