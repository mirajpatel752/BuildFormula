import React from "react";

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <br /><br />
        <th>Last Name</th>
        <br /><br />
        <th>Email</th>
        <br /><br />
        <th>phone</th>
        <br /><br />
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.fname}</td><br />
            <td>{user.lname}</td><br />
            <td>{user.email}</td><br />
            <td>{user.phone}</td><br />
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </button>
              <br /><br />
              <button
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
