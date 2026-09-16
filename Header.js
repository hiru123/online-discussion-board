import React from 'react';

function Header (props) {
  return (
    <>
    <img src= {props.profileImg}</img>
    <h1>{props.userName}</h1>
    </>
  );
}
export default Header;
