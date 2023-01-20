import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Actions } from "../auth/components/actions";
import styles from "./home.module.css";
import img from "../../assets/Homepage-Hero-new.webp";

export const Home = () => {
  const [data] = useState({
    type: 'signup',
    first_message: "Easy Scheduling",
    second_message: "ahead",
    info_message:
      "Calendly is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work.",
    actions: {
      url: "/signup",
      btnName: "signup",
      message: "Create your free account. No credit card required."
    },
  });



  return (
    <>
      <div class="isolate bg-white">
        <Navbar isNavLink={true}/>
      
        <main>
          <div>
            <div className="flex text-start">
              <Actions data={data} />
              <div
                className={[styles.infoSection, styles.alignSections].join(" ")}
              >
                <img width="100%" src={img} alt="" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
