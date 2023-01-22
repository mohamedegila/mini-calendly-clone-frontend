import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.module.css';

const EventCard = () => {


  const {events} = useSelector((state)=>state.app)

  const copyHandler = (url) =>{
    console.log({url});
    navigator.clipboard.writeText(`${process.env.REACT_APP_FRONTEND_URL}${url}`);
    toast.success("copied successfully", {
      autoClose: 1000,
    })
  }


  return (
    <>
    {
      events.length===0 ? "No Events" :
      events.map((el)=>(
        <div className={styles.card} key={el.id}>
          
        <div className="mb-4">
          <h1 className="text-xl font-medium">
            {el.name} Meeeting
          </h1>
          <p className="font-normal text-slate-200" >
          {el.duration}-Min One-on-One
          </p>

          <Link to={`${el.url}`} color={"blue.500"}>
            View booking page
          </Link>
          <hr/>
          <div className="flex mt-2 justfy-center">
          <button className="border-2 rounded text-sm text-blue-500 p-2"
          onClick={() => copyHandler(el.url)}
          >
            Copy Link
          </button>
          </div>
        </div>
        
      </div>
      ))
     } 
    </>
  );
};

export default EventCard;
