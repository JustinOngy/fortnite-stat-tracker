import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

const home = () => {
  const backgroundStyle = {
    backgroundImage: "url('/fortnitehomedarken.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "#fff",
    display: "flex",
  };

  return (
    <>
      <Navbar />
      <div style={backgroundStyle} className="home-container">
        <div className="lefthand-side">
          <div className="lefthandside-container">
            <div className="lefthand-side__consoles flex">
              <Image src="nintendo-switch.svg" width={25} height={25} />
              <Image src="/xbox.svg" width={25} height={25} />
              <Image src="/playstation.svg" width={25} height={25} />
              <Image src="/monitor.png" width={25} height={25} />
            </div>
            <p className="lefthand-side__subheading">
              Avaliable for all platforms - Requires Epic Account
            </p>
            <h1 className="lefthand-side__title">FORTNITE TRACKER</h1>
            <div>
              <h8 className="lefthand-side__text">
                Experience the ultimate Fortnite companion! Our website
                revolutionizes how players track their in-game performance,
                offering real-time stats at your fingertips. Whether you're
                dominating solo, conquering duos, or leading squads, dive into
                detailed insights on kills, wins, and deaths!
              </h8>
            </div>

            <Link href="/" passHref>
              <button className="lefthand-side__button " href="/" passHref>
                Track
              </button>
            </Link>
          </div>
        </div>
        <div className="righthand-side ">
          <div className="righthandside__container">
            <div className="righthand-side__video ">
              <img src="/giphy.gif" muted />{" "}
              <div className="video-heading">
                <Link
                  href="https://www.youtube.com/watch?v=Wjij-OX9RKI"
                  target="_blank">
                  <h1 className="video-h1">
                    Watch Fortnite Season 5 Trailer ▷
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
