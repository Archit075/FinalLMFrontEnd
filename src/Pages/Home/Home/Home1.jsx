import React from "react";
import Header from "../../../AllHeaders/HNavbar";
import Footer from "../../../Footer/Footer";
import video11 from "../Home/video11.mp4";

function Home1() {
  return (
    <div>
      <Header />
      <div style= {{width: "50%", height: "30%",float: "left"}}>
      <iframe
                    loop="1"
                    control="0"
                    className="shadow-1-strong rounded"
                    src={video11}
                    allow="autoplay"
                    title="YouTube video"
                    allowFullScreen
                    data-gtm-yt-inspected-2340190_699="true"
                    id="388567449"
                  ></iframe>
      </div>
      <div style={{width: "50%", height: "30%",float:"right"}}>
        <div >#left content in here</div>

        <div >#right content in there</div>
      </div>

      <Footer />
    </div>
  );
}

export default Home1;
