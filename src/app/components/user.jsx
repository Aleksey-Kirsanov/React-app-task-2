import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = (props) => {
  const users = props.temp;
  const handleDelete = props.delete;
  const changeBookmark = props.bookmark;

  return (
    <>
      {users.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>
            <Qualitie temp={user} />
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate} /5</td>
          <td>
            <BookMark changeBookmark={changeBookmark} user={user}/>
          </td>
          <td>
            <button
              onClick={() => handleDelete(user._id)}
              className='btn btn-danger'
            >
              delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default User;
