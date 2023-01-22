import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/login";
import { Login as AuthLogin } from "../pages/auth/user/login/login";
import { Signup } from "../pages/auth/user/signup/signup";
import { AddEvent } from "../pages/calendly/addEvent/addEvent";
import { ShowCalendar } from "../pages/calendly/eventBooking/ShowCalendar";
import CalendlyHome from "../pages/calendly/home";
import MeetingShedule from "../pages/calendly/MeetingShedule/MeetingShedule";
import { ThankYou } from "../pages/calendly/thankYou";


import { Home } from "../pages/home/home";
import UserRoute from "./UserRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<AuthLogin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/calendly"
        element={
          <UserRoute>
            <CalendlyHome />
          </UserRoute>
        }
      />

      <Route
        path="/add_event"
        element={
          <UserRoute>
            <AddEvent />
          </UserRoute>
        }
      />
      <Route
          path="/events/:user_slug/:event_slug"
          element={
            // <UserRoute>
              <ShowCalendar/>
            // </UserRoute>
          }
        />
        <Route
          path="/events/schedule"
          element={
            // <UserRoute>
              <MeetingShedule/>
            // </UserRoute>
          }
        />
        <Route
          path="/thanks"
          element={
            // <UserRoute>
              <ThankYou/>
            // </UserRoute>
          }
        />
    </Routes>
  );
};
