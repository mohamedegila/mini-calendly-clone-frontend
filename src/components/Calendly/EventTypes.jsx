import React from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import { useSelector } from "react-redux";

const EventTypes = () => {
  const {isAuth, user} =  useSelector((state)=>state.auth)
  return (
    <div className="mx-3">

      <div className="flex justify-between">
        <div className="flex gap-10">
          <h3>{isAuth  ? `${user.username}` : "Username"}</h3>
          
          <h3>{isAuth ? `${user.email}` : "email"}</h3>
          
        </div>
        <div>
        <Link to='/add_event' className="w-20 rounded text-base text-blue-600">
            + New Event Type
          </Link>
         
        </div>
      </div>
      <hr style={{marginTop:"10px"}} />
      <div className="flex gap-10">
        <EventCard/>
      </div>

    </div>
  );
};

export default EventTypes;
