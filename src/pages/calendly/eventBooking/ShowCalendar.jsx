import React, { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ReactCalendar.css";
import { UserDetails } from "./UserDetails";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import repository from "../../../api/repository";
import { setRegisterInfo } from "../../../redux/app/appSlice";

export const ShowCalendar = () => {
  const [showTime, setShowTime] = useState(false);
  const [value, setValue] = useState(new Date());
  const [times, setTimes] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState('');


  const [selectdData, setSelectdData] = useState({
    date: '',
    duration: 0,
    start_time: "",
    end_time:"",
    event_slug: "",
    user_slug: "",
    name:"",
    email:"",
  });
 

  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const date = new Date();

  const onChange = (value) => {
    
    let date = new Date(value + 'UTC').toISOString().split('T')[0];

    console.log({date, t:  new Date(value).toISOString()});
    setTimes(event?.available_times[date]);
    setSelectdData(prev => ({
      ...prev,
      date
    }))
    setSelectedIdx("");
    setValue(value);
    setShowTime(true);
  };
  const { events } = useSelector((store) => store.app);
  const [event, setEvent] = useState({});

  const { user_slug, event_slug } = useParams();


  useEffect(() => {
    

    async function getEvent() {
      let eventData = null;
      if (events.length > 0) {
        eventData = events.find((ele) => ele.slug === event_slug);
      } else {
        const res = await repository.get(`events/${user_slug}/${event_slug}`);
        eventData = res.data.data;
       
        console.log({ e: res.data.data });
      }

      setEvent(eventData);
      

    }

    getEvent();

    setSelectdData(prev => ({
      ...prev,
      event_slug,
      user_slug
    }))
  }, []);

  const handleClick = (idx) => {

    setSelectedIdx(idx)
    console.log({idx});
    console.log(times[idx]);

    setSelectdData(prev => ({
      ...prev,
      start_time: times[idx][0],
      end_time: times[idx][1]
    }))
    // setSelectTime(times[idx]);
  };

  const nextHandler = (e) => {
    e.preventDefault();
    console.log({S:selectdData, event});
    setSelectdData(prev => ({
      ...prev,
      duration: event?.duration
    }))

    let data = {...selectdData};
    data['duration'] = event?.duration
    dispatch(setRegisterInfo(data));

    navigate("/events/schedule");
  }

  return (
    <div className="calendarContainer">
      <div>
        <UserDetails data={event} />
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <Calendar
            onChange={onChange}
            minDate={new Date(event?.start_date)}
            maxDate={new Date(event?.end_date)}
            value={value}
            // defaultValue={[new Date(event?.start_date), new Date(event?.end_date)]}
          />
        </div>
        {showTime && (
          <div style={{ padding: "2%", height:"10px"}}>
            <div style={{ marginBottom: "5%" }}>{value.toString()}</div>
            <div
              style={{
                display: "flex",
                width: "250px",
                height: "350px",
                overflow:"auto",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
                }}>
                
                   {(() => {
                    const arr = [];
                    times.forEach((time, idx) => {
                      arr.push(
                        <button
                        onClick={() => handleClick(idx)}
                        style={{
                          background: idx === selectedIdx ? "green":"blue",
                          width: "100px",
                          borderRadius: "10px",
                          color: "white",
                          padding: "5px",
                        }}
                      >
                        {time[0]} - {time[1]}
                      </button>
                      );
                    });
                    return arr;
                  })()}
              
              </div>

            </div>
            <Link 
            onClick={nextHandler}
            // to={`/events/${user_slug}/${event_slug}/meetingschedule`}
            to={`#`}

            >
              <button
                style={{
                  marginTop: "45%",
                  padding: "2%",
                  marginLeft: "10px",
                  border: "1px solid blue",
                  width: "100px",
                  borderRadius: "10px",
                  background: "blue",
                  color: "white",
                }}
                type="submit"
              >
                Next
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

// <button style={{background:"blue",width:"100px",borderRadius:"10px",color:"white"}}>Time</button>
//             <button style={{background:"blue",width:"100px",borderRadius:"10px",color:"white"}}>Confirm</button>
