import React from "react";
import { useState } from "react";
import "./UserCard.css";

const UserCard = () => {
  let [color, setColor] = useState({
    bgColor: "white",
    textColor: "black",
    title: "Check to Switch Dark Mode",
  });

  const changeTheme = () => {
    if (color.textColor === "black") {
      setColor({
        bgColor: "black",
        textColor: "white",
        title: "Uncheck to switch Light Mode",
      });
    } else {
      setColor({
        bgColor: "white",
        textColor: "black",
        title: "Check to switch Dark Mode",
      });
    }
  };

  const [user, setUser] = useState({
    name: "Shivam",
    Email: "shivamkumar0170951@gmail.com",
    Gender: "Male",
    image:
      "https://i1.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-17-1.jpg?fit=800%2C1200&ssl=1",
  });

  const changeToGeekster = () => {
    setUser({
      name: "Geekster",
      Email: "Geekster@gmail.com",
      Gender: "Male",
      image:
        "https://th.bing.com/th?id=OIP.HsFYzdBwLvwZw9yVdYg3MgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    });
  };

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: color.bgColor, color: color.textColor }}
      >
        <div className="col1">
          <img src={user.image} alt="logo" />
        </div>
        <div className="col2">
          <dl>
            <dt>Name</dt>
            <dd>{user.name}</dd>
            <dt>Email</dt>
            <dd>{user.Email}</dd>
            <dt>Gender</dt>
            <dd>{user.Gender}</dd>
            <dt>
              <b>Description</b>
            </dt>
            <dd>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Adipisci, ratione suscipit ipsam incidunt deserunt cupiditate.
                Nobis beatae fugiat facere alias cupiditate optio adipisicing elit.
                Adipisci, ratione suscipit ipsam incidunt deserunt cupiditate.
                Nobis beatae fugiat facere alias cupiditate optio adipisicing elit.
                Adipisci, ratione suscipit ipsam incidunt deserunt cupiditate.
                Nobis beatae fugiat facere alias cupiditate optio
              </p>
            </dd>
            <input type="checkbox" onChange={changeTheme}/>
            <label>{color.title}</label>
          </dl>
        </div>
      </div>
      <div className="but">
        <button >Shivam</button>&nbsp;&nbsp;&nbsp;
        <button onClick={changeToGeekster}>Geekster</button>
      </div>
    </>
  );
};

export default UserCard;
