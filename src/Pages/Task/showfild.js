import { Row } from "antd";
import React, { useState, useEffect } from "react";

const Showfild = (props) => {
  const initialFormState = { id: null, fname: "", lname: "",email:"",phone:"" ,};
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );
  const handleInputChange = (event, flog) => {
    const { name, value, files } = event.target;
    if (flog) {
      setUser({ ...user, [name]: value });
    } else {
      setUser({ ...user, [name]: URL.createObjectURL(files[0]) });
    }
  };


  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };


  return (
    <Row justify={"center"}>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.fname || !user.lname) return;
        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
        resetAddUser();
      }}
    >
      <br />
      <label>First Name</label> <br />
      <input
        type="text"
        name="fname"
        className="input-box-task"
        value={user.fname}
        onChange={(event) => handleInputChange(event, true)}
      />
      <br /> <br />
      <label>Last Name</label> <br />
      <input
        type="text"
        name="lname"
        className="input-box-task"
        value={user.lname}
        onChange={(event) => handleInputChange(event, true)}
      />
      <br /><br />
      <label>email</label> <br />
      <input
        type="email"
        id="img"
        name="email"
        value={user.email}
        className="input-box-task"
        onChange={(event) => handleInputChange(event, true)}
      />
      <br />
      <br /> 
      <label>phone number</label> <br />
      <input
        type="number"
        name="phone"
        className="input-box-task"
        value={user.phone}
        onChange={(event) => handleInputChange(event, true)}
      />
      <br /> <br />
      <button onClick={() => props.setAddblog(true)}>
        {props.editing ? "Update user" : "save"}
      </button>
      
      {props.editing && (
        <button onClick={resetAddUser} className="button muted-button">
          Cancel
        </button>
      )}
    </form>
    </Row>
  );
};

export default Showfild;
