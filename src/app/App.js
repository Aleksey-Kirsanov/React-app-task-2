import React, { useState } from "react";
import api from "./api";
import SearchStatus from "./components/searchStatus";
import User from "./components/user";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

const changeBookmark = (id) => {
    const newUsers = users.map((user) => {
    if ( user._id === id) {
      return({
        ...user,
        bookmark: !user.bookmark
      })
    }
    return user
  })
  setUsers(newUsers)
}

  return (
    <>
      <SearchStatus temp={users} />

      {users.length > 0 && (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Имя</th>
              <th scope='col'>Качества</th>
              <th scope='col'>Профессия</th>
              <th scope='col'>Встретился, раз</th>
              <th scope='col'>Оценка</th>
              <th scope='col'>Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <User
              temp={users}
              delete={handleDelete}
              bookmark={changeBookmark}
            />
          </tbody>
        </table>
      )}
    </>
  );
};

export default App;
