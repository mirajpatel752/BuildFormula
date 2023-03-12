import { Row } from "antd";
import React, { useState, useEffect } from "react";

const Showfild = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
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
        if (!user.name || !user.username) return;
        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
        resetAddUser();
      }}
    >
      <br />
      <label>First Name</label> <br />
      <input
        type="text"
        name="name"
        className="input-box-task"
        value={user.name}
        onChange={(event) => handleInputChange(event, true)}
      />
      <br /> <br />
      <label>Last Name</label> <br />
      <input
        type="text"
        name="username"
        className="input-box-task"
        value={user.username}
        onChange={(event) => handleInputChange(event, true)}
      />
      <br /><br />
      <label>image</label> <br />
      <input
        type="file"
        id="img"
        name="img"
        accept="image/*"

        onChange={(event) => handleInputChange(event, false)}
      />
      <br />
      <br /> 
      <label>Email</label> <br />
      <input
        type="text"
        name="username"
        className="input-box-task"
        value={user.username}
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
