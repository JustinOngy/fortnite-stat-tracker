import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const News = () => {
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

  const apiKey = "b4fd8a72-a527-4ce0-b529-fdb0bf81a74b"; 

  fetch("https://api.fortnitetracker.com/v1/powerrankings/pc/NAE/Ninja", {
    headers: {
      "TRN-Api-Key": apiKey,
      Accept: "application/json",
      "Accept-Encoding": "gzip",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Request successful!");
      console.log("Response data:");
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <Navbar />
      <main className="news-bg p-10  min-h-screen">
        <div className="max-w-6xl mx-auto ">
          <h1 className="text-3xl font-bold text-center mb-10">Latest News</h1>
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
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {article.title}
                  </h2>
                  <h7 className="text-gray-700 text-xl mb-4">
                    {article.body ||
                      "This is a short description of the news article."}
                  </h7>
                  <br />

                  <Link href="/news">
                    <h7>Read more... </h7>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default News;
