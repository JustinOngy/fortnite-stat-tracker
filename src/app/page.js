"use client";
import React, { useState } from "react";
import Image from "next/image";
import StatsBox from "../../components/StatsBox";
import "/src/app/globals.css";
import ProfileBanner from "../../components/ProfileBanner";
import Selector from "../../components/Selector";
export default function Home() {
  const [gamertag, setGamertag] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [playerStats, setPlayerStats] = useState({
    wins: "",
    kills: "",
    matchesPlayed: "",
    level: "",
    username: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const apiKey = process.env.NEXT_PUBLIC_FORTNITE_API_KEY;
      const response = await fetch(
        `https://fortnite-api.com/v2/stats/br/v2?name=${gamertag}&accountType=epic&timeWindow=lifetime&image=none`,
        {
          method: "GET",
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        const modes = ["solo", "duo", "squad"];
        const stats = modes.reduce((acc, mode) => {
          const modeData = data.data.stats.all[mode];
          if (modeData) {
            acc[mode] = {
              matches: modeData.matches || 0,
              wins: modeData.wins || 0,
              winPercentage: modeData.matches
                ? ((modeData.wins / modeData.matches) * 100).toFixed(2)
                : "0",
              kills: modeData.kills || 0,
              deaths: modeData.deaths || 0,
              kd: modeData.kd.toFixed(2) || "0",
              kpm: modeData.matches
                ? (modeData.kills / modeData.matches).toFixed(2)
                : "0.00",
            };
          } else {
            acc[mode] = {
              matches: 0,
              wins: 0,
              winPercentage: "0",
              kills: 0,
              deaths: 0,
              kd: "0",
              kpm: "0",
            };
          }
          return acc;
        }, {});

        setPlayerStats({
          wins: data.data.stats.all.overall.wins,
          kills: data.data.stats.all.overall.kills,
          matches: data.data.stats.all.overall.matches,
          top3: data.data.stats.all.overall.top3,
          username: data.data.account.name,
          level: data.data.battlePass.level,
          progress: data.data.battlePass.progress,
          stats,
        });
      } else {
        setError("User does not exist or is private. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="main-bg flex min-h-screen flex-col items-center justify-between text-white bg-gradient-to-br from-blue-800 to-purple-900">
        <div className=" w-full p-10  mb-0 rounded-lg ">
          <h2 className=" text-center text-3xl font-bold mb-4">
            FORTNITE PLAYER STATS
          </h2>
          <form onSubmit={handleSubmit} className="mt-4 flex justify-center">
            <input
              type="text"
              value={gamertag}
              onChange={(e) => setGamertag(e.target.value)}
              className="form-input mt-1 block max-w-[1000px] w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Gamertag"
              id="gamertag"
            />
            <button type="submit" className="flex items-center justify-center">
              <img
                src="/submit.png"
                alt="Submit"
                className="hover:opacity-75 h-14"
              />
            </button>
          </form>
          {loading ? (
            <p className="text-center mt-5 text-2xl">Loading...</p>
          ) : error ? (
            <p className="text-red-500 text-center mt-5 text-2xl ">{error}</p>
          ) : playerStats.username ? (
            <>
              <ProfileBanner
                username={playerStats.username}
                level={playerStats.level}
                progress={playerStats.progress}
                wins={playerStats.wins}
                top3={playerStats.top3}
                kills={playerStats.kills}
                matches={playerStats.matches}
              />

              <Selector />
              <div>
                <StatsBox title="solo" stats={playerStats.stats.solo} />
                <StatsBox title="duos" stats={playerStats.stats.duo} />
                <StatsBox title="squads" stats={playerStats.stats.squad} />
              </div>
            </>
          ) : null}
        </div>
      </main>
    </>
  );
}
