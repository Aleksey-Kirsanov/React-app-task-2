import React from "react";

const BookMark = (props) => {

    const changeBookmark = props.changeBookmark;
    const user = props.user;
  
  return (
    <button
    onClick={() => changeBookmark(user._id)}
    className={`btn bi bi-star${user.bookmark ? '-fill' : ''}`}
  ></button>
  );
};

export default BookMark;
