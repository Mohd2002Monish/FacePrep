import React from "react";

function Card({ usersInfo }) {
  return (
    <div className="contact-list">
      {usersInfo.map((user, index) => (
        <div key={index} className="card">
          <img
            src={user.picture.large}
            alt={user.name.first}
            className="avatar"
          />
          <div className="details">
            <h2>{`${user.name.first} ${user.name.last}`}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
