import React, { useEffect, useState } from "react";
import "./MeetingShedule.css";
// import Moment from "react-moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import repository from "../../../api/repository";
import { toast } from "react-toastify";
const MeetingShedule = () => {

  const navigate = useNavigate();
  
  const [addGuests] = useState(false);
  
  const {registerInfo} = useSelector((state)=> state.app);

  const [data, setData] = useState({...registerInfo})
   
  const onInputHandler = (e) => {
    let { name, value } = e.target;
    console.log( name, value);
    setData({ ...data, [name]: value });
  }

  const scheduleEventHandler = async () => {
    console.log({scheduleEventHandler: data});

    try{
      let res = await repository.eventRegister(data);


      toast.success(res.data.data.message, {
        autoClose: 2000,
      })

      navigate('/thanks');
    }catch(error){
      toast.error(error.message, {
        autoClose: 2000,
      })
    }
   
}
  

  return (
    <div>
      <div className="outerdiv-meeting">
        <div className="left-container-meeting">
          <button className="back-button">⬅</button>
          <div className="main-div-timebar">
            {/* <h4 id="h4-date" name="user">
              {currentUser.displayName}
            </h4> */}
            <h2 id="h2-date"> {registerInfo['event_slug']} Meeting</h2>
            <h4 id="h4-date">🕒 {registerInfo['duration']} Min</h4>
          </div>
          <p id="event-string-p" nme="timeslot">
          {registerInfo['date']}
          </p>

        </div>

        {/* right section */}

        <div>
          <p className="meetingp">Enter Details</p>

          {/* Name */}
          <div className="input-container-meeting">
            <label className="meeting-label">Name *</label>
            <input name="name" onInput={onInputHandler} className="input-meeting" />
          </div>

          {/* Email  */}
          <div className="input-container-meeting">
            <label>Email *</label>
            <input type="email" onInput={onInputHandler} name="email" className="input-meeting" />
          </div>
          <button
            className={addGuests ? "display-none" : "add-guest-meeting"}
            // onClick = {(e) => setAddGuests(e.target)}
          >
            Add Guests
          </button>
          <div>
            <label className="meeting-label">
              Please share anything that will help prepare for our meeting.
            </label>
            <textarea className="textarea-meeting" ></textarea>
          </div>
          <Link to="#" onClick={scheduleEventHandler}>
            <button className="schedule-event-button">Schedule Event</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeetingShedule;
