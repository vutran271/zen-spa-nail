import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Footer from "..components/Footer";

function Career() {
  return (
    <React.Fragment>
      <TopBar />
      <NavBar />
      <section>
        <div style={{ textAlign: "center" }}>
          <h1>Position available: Receptionist and Nails technition</h1>
          <br />
          <div>
            <h3>Job details</h3>
          </div>
          <br />
          <p>
            <b>Job Type</b>
          </p>
          Full-time Part-time
          <p>
            <b>Qualifications</b>
          </p>
          High school or equivalent (Preferred)
          <p>
            <b>Full Job Description</b>
          </p>
          <p>
            About us Friendly atmosphere with lots of room for growth.
            Friendliness and team player is what we are looking for! <br />
            Upscale salon looking for a part time or full time receptionist.
            Experience preferred but willing to train. Must be dependable, can
            multitask and willing to learn. Upbeat personality and friendliness
            is a must! There is lots of room for growth!
          </p>
          <p>
            <b>Schedule:</b>
          </p>
          <p>10 hour shift Monday to Friday Weekend availability</p>
          <p>
            <b>Education:</b>
          </p>
          High school or equivalent (Preferred) <br />
          <b>Work Location:</b> <br />
          One location <br />
          <b>Work Remotely:</b>
          <br />
          No <br></br>
          <b> Text to apply: </b>
          (980)-228-0423
        </div>
      </section>
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default Career;
