import React from "react";

const home = () => {
  const backgroundStyle = {
    backgroundImage: "url('/fortnitehomedark.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "#fff",
    display: "flex",
  };

  return (
    <div style={backgroundStyle} className="home-container">
      <div className="lefthand-side">
        <div className="consoles flex">
          <div>switch</div>
          <div>xbox</div>
          <div>ps</div>
          <div>pc</div>
        </div>
        <p>avaliable on all platforms</p>
        <h1>FORTNITE TRACKER</h1>
        <p>just enter a player name.</p>
        <button>Track</button>
      </div>
      <div className="righthand-side">video</div>
    </div>
  );
};

export default home;
