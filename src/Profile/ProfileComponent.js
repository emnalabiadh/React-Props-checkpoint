import React from "react";

const Profile = (props) => {
  return (
    <div>
      {props.handleName(props.FullName)}
      <img src={props.image} />
      <h1>{props.FullName}</h1>
      <p>{props.bio}</p>
      <h2>{props.profession}</h2>
    </div>
  );
};

export default Profile;
