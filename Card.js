import React from 'react';
import Header from './Header';
import Body from './Body';

function Card (props)
{
  return(
    <>
    <Header profileImg={props.commentObject.profileImg} userName={props.commentObject.userName}  />
    <Body comment={props.commentObject.comment}/>

    </>
  )
}
export default Card;
