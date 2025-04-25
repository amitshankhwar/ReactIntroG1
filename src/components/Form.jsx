import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleChange(e) {
    e.preventDefault();
    setShowPassword(!showPassword);
    console.log(showPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all the fields");
      return;
    }

    console.log({ name, email, password });
  }

  return (
    <form action="">
      <div>
        <label htmlFor="">Name : </label>
        <input
          onChange={(e) => {
            handleName(e);
          }}
          type="text"
          placeholder="enter name"
        />
      </div>
      <div>
        <label htmlFor="">Email : </label>
        <input
          onChange={(e) => {
            handleEmail(e);
          }}
          type="email"
          placeholder="enter email"
        />
      </div>
      <div>
        <label htmlFor="">Password : </label>
        <input
          onChange={(e) => {
            handlePassword(e);
          }}
          type={showPassword ? "text" : "password"}
          placeholder="enter password"
        />
        <button onClick={handleChange}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
      </div>
      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
