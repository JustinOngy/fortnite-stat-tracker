import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const home = () => {
  const backgroundStyle = {
    backgroundImage: "url('/fortnitehomedarken.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
    color: "#fff",
    display: "flex",
  };

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://fortnite-api.com/v2/news");
        const data = await response.json();
        console.log(data.data);
        setArticles(data.data.br.motds);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Navbar />
      <div className="homepage-background">
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

              <Link href="/">
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
        <div className="news-section p-10">
          <div className="article-container ">
            {articles.map((article, index) => (
              <div key={index} className="article-inner-container">
                <Image
                  src={article.image || "/default-image.jpeg"}
                  alt={article.title || "Example News"}
                  width={640}
                  height={360}
                  className=" object-cover object-center"
                />
                <div className="p-10">
                  <h2 className="text-2xl font-semibold text-white">
                    {article.title}
                  </h2>
                  <h7 className="text-white text-xl ">
                    {article.body ||
                      "This is a short description of the news article."}
                  </h7>
                </div>

                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
