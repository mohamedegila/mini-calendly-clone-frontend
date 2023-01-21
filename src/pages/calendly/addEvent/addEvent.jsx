import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./addEvent.module.css";

import { useSelector, useDispatch } from "react-redux";

export const AddEvent = () => {
  const { events } = useSelector((state) => state.app);
  // const currentUser = useSelector((store)=>store.authReducer.currentUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [today] = useState(new Date().toJSON().split("T")[0]);
  const [endOfyear] = useState("2023-12-31");
  const [isCustom, setIscustom] = useState(false);


  const [postData, setPostData] = useState({
    name: "",
    start_date: "",
    start_time: "",

    end_date: "",
    end_time: "",

    location: "",
    description: "",
    link: "calendly.com/",
    duration: "",
    id: Date.now(),
  });
  const { name, location, start_date, start_time, end_date, end_time, link, description, duration } = postData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if(name === 'durationType'){
  
      if(value === 'custom')
        setIscustom(true)
      else
        setIscustom(false)

        setPostData(prev =>({
          ...prev,
          duration: value,
        }))
    }else{
    setPostData({ ...postData, [name]: value });

    }

    console.log(today,name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addEventData(postData)).then(dispatch(getEventData()));
    console.log({postData});
    setPostData({
      name: "",
      location: "",
      start_date: "",
      start_time: "",
      end_date: "",
      end_time: "",
      link: "",
      description: "",
      duration: "",
    });

    setIscustom(false)
    // navigate("/calendly", { replace: true });
  };

  return (
    <div className="m-auto mt-2">
      <div className="m-auto mb-2 p-4 ">
        <div className="flex justify-between">
          <Link
            to="/calendly"
            style={{
              border: "1px solid #006bff",
              color: "#006bff",
              width: "100px",
              padding: "5px",
              borderRadius: "50px",
            }}
          >
            Back
          </Link>
          <h2 size="md" fontWeight="semibold">
            Add One-on-One Event Type
          </h2>
        </div>
      </div>
      <div className="rounded border-2 text-start">
        <div className="flex justify-between p-2">
          <div>
            <div>
              <span
                style={{
                  width: "30px",
                  height: "30px",
                  background: "violet",
                  borderRadius: "50px",
                }}
              ></span>
              <div>
                <h4 className="text-sm">What event is this?</h4>
                <p>No location given</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <form style={{ padding: "5%" }} onSubmit={handleSubmit}>
          <div spacing={8}>
            <div>
              <div className="p-2">
                <label>Event name*</label>
              </div>
              <input
                className="border-2 rounded w-full p-2"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <div className="mb-2">
                <label>Location</label>
              </div>
              <select
                className="w-full border-2 rounded p-2"
                name="location"
                value={location}
                onChange={handleChange}
                required
              >
                <option value="">Select location</option>
                <option value="Zoom">Zoom</option>
              </select>
            </div>
            <div>
              <div className="mb-2">
                <label>Description/Instructions</label>
              </div>
              <textarea
                className="w-full border-2 rounded p-2"
                width="400px"
                height="200px"
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Write a summary and any details your invitee should know about the event"
                required
              />
            </div>
          </div>

          {/* pavan code start */}

          <div className={style.time_main}>
            {/* box1 */}
            <div className={style.time_main_box1}>
              <div className={style.time_main_box1_a}>
                <div>{/* <CalendarIcon /> */}</div>
                <div>
                  <p>When can people book this event?</p>
                  <p style={{ color: "grey", fontSize: "14px" }}>
                    30 min, 60 rolling calendar days
                  </p>
                </div>
              </div>
              <div></div>
            </div>

            {/* box2 */}
            <div className={style.time_main_box2}>
              <div className={style.time_main_box2_a}>
                <div>
                  {" "}
                  <p>Date range</p>
                </div>
                <div>
                  <p className="text-xs"> Invitees can schedule...</p>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  {/* <div style={{padding:"5px 0px"}}><input type="radio" style={{width:"50px", height:"50%" }}/></div> */}
                  <p className="mt-2">Start_Date </p>
                  <br />
                  <br />
                  <input
                    className="border-2 rounded p-2 w-full"
                    type="date"
                    min={today}
                    max={endOfyear}
                    name="start_date"
                    value={start_date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  {/* <div style={{padding:"5px 0px"}}><input type="radio" style={{width:"50px", height:"50%" }}/></div> */}
                  <p className="mt-2">End_Date</p>
                  <br />
                  <br />
                  <input
                    className="border-2 rounded p-2 w-full"
                    type="date"
                    name="end_date"
                    min={start_date}
                    max={endOfyear}
                    value={end_date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={style.time_main_box2_b}>
                <p>
                  Set a range of dates when you can accept <br /> meetings.
                </p>
              </div>
            </div>

            {/* box-3 */}

            <div className={style.time_main_box3}>
              <div className={style.time_main_box3_a}>
                <div>
                  {" "}
                  <p>Duration</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <select
                      name="durationType"
                      value={duration}
                      onChange={handleChange}
                      style={{
                        outline: "none",
                        border: "1px solid grey",
                        borderRadius: "5px",
                        padding: "7px 5px",
                        width: "100%",
                      }}
                      required
                    >
                      <option value="15">15min</option>
                      <option value="30">30min</option>
                      <option value="45">45min</option>
                      <option value="60">60min</option>
                      <option value="custom">Custom</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={style.time_main_box3_b}>
                
                    <div style={{ display: "flex", gap: "10px" }}>
                      {/* <div style={{padding:"5px 0px"}}><input type="radio" style={{width:"50px", height:"50%" }}/></div> */}
                      <p className="mt-2">Start_time</p>

                      <input
                        className="border-2 rounded p-2 w-full"
                        type="time"
                        name="start_time"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                      {/* <div style={{padding:"5px 0px"}}><input type="radio" style={{width:"50px", height:"50%" }}/></div> */}
                      <p className="mt-2">End_time</p>

                      <input
                        className="border-2 rounded p-2 w-full"
                        type="time"
                        name="end_time"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {
                      isCustom && (
                        <>
                         <div style={{ display: "flex", gap: "10px" }}>
                      {/* <div style={{padding:"5px 0px"}}><input type="radio" style={{width:"50px", height:"50%" }}/></div> */}
                      <p className="mt-2">duration [in min]</p>

                      <input
                        className="border-2 rounded p-2 w-full"
                        type="text"
                        name="duration"
                        onChange={handleChange}
                        required
                      />
                    </div>
                        </>
                      )
                    }
                   

                
              </div>
            </div>

            {/* box-4 */}

            <div className={style.time_main_box4}>
              {/* <button className="mr-2">Cancel</button> */}

              <button
                type="submit"
                style={{
                  borderRadius: "30px",
                  color: "white",
                  padding: "5px 15px",
                  fontWeight: "bold",
                  backgroundColor: "#006bff",
                }}
              >
                Create
              </button>
            </div>
          </div>

          {/* pavan code end */}
        </form>
      </div>
    </div>
  );
};
