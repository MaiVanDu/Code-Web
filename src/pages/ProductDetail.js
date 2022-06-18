import React, { useState } from "react";

const InputCustom = ({
  fieldName,
  type,
  placeholder,
  formRegister,
  onHandleChangeField,
}) => {
  console.log(fieldName);
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={formRegister?.key}
      onChange={(e) => onHandleChangeField(e.target.value, fieldName)}
      className="Input"
    />
  );
};
function App(props) {
  // Test value
  const users = [
    {
      username: "admin1",
      email: "admin1@admin.com",
      name: "admin1",
      phone: "014789632",
      password: "12345678",
    },
    {
      username: "admin2",
      email: "admin2@admin.com",
      name: "admin2",
      phone: "014789632",
      password: "12345678",
    },
  ];

  const user = users.map((user) => {
    return user;
  });

  // Object stuff
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  // const [matchPassword, setMatchPassword] = useState("");

  const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    phone: "",
  });

  // handle onClick
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.value;
    console.log(data);
  };

  const onHandleChangeField = (value, key) => {
    console.log(key, value);
    setFormRegister((prevData) => {
      return {
        ...prevData,
        [key]: value,
      };
    });
  };

  console.log(formRegister);

  return (
    <div>
      <h1>Đăng Ký</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <InputCustom
            fieldName="username"
            type="text"
            placeholder="Username"
            formRegister={formRegister}
            onHandleChangeField={onHandleChangeField}
          />
        </div>
        <div className="form-group">
          <InputCustom
            fieldName="email"
            type="text"
            placeholder="Email"
            formRegister={formRegister}
            onHandleChangeField={onHandleChangeField}
          />
        </div>
        <div className="form-group">
          <InputCustom
            fieldName="phone"
            type="text"
            placeholder="Phone"
            formRegister={formRegister}
            onHandleChangeField={onHandleChangeField}
          />
        </div>
        <button type="submit">Đăng Ký</button>
        <div>
          <p>Bạn đã có tài khoản?</p>
          <a href="#" onClick={props.onClick}>
            Đăng nhập
          </a>
        </div>
      </form>
    </div>
  );
}

export default App;
