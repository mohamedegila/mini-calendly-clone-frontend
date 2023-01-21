import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import { useSelector, useDispatch } from "react-redux";
import repository from "../../api/repository";
import {events} from '../../redux/app/appSlice'

const EventTypes = () => {
  const {user} =  useSelector((state)=>state.auth)
  // const [events, setEvents]= useState([]);

  const dispatch = useDispatch();
  useEffect( () => {
    

    async function fetchEventsApi() {
      let res = await repository.get('event');
      console.log({res});
      dispatch(events(res.data.data))
      
    }

    fetchEventsApi()

  }, [events]);
  return (
    <div className="mx-3">

      <div className="flex justify-between">
        <div className="flex gap-10">
          <h3>{user  ? `${user?.user?.username}` : "Username"}</h3>
          
          <h3>{user ? `${user?.user?.email}` : "email"}</h3>
          
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
