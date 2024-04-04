import React, { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";
import Cards from "../../components/Cards";

const defaultImageUrl = "https://c.ndtvimg.com/2024-04/j7oep16g_taiwan-earthquake-twitter_625x300_03_April_24.jpg";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [newData, setNewsData] = useState(null);

  const getDefaultImageUrl = () => {
    return defaultImageUrl;
  };

  //Api call  author: "AP"
  const responseData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=d6d15dea697149df875079904023fe2a"
      );
      const filteredData=response?.data?.articles?.filter(item=>item.author!=="AP")
      setNewsData(filteredData);
      setLoading(false);
      console.log("data", newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    responseData();
  }, []);

  return (
    <div className="homepage-container">
      <div className="homepage-headline">Morning Chronicle -Top Headlines</div>
      {loading ? (
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              margin: "30px auto",
              gap: "20px",
            }}
          >
            {[...Array(20)].map((_, index) => (
              <div key={index} className="card" style={{ width: "20rem" }}>
                <div
                  className="skeleton-img"
                  style={{ height: "200px", backgroundColor: "#f0f0f0" }}
                ></div>
                <div className="card-body">
                  <div
                    className="skeleton-text"
                    style={{
                      height: "20px",
                      backgroundColor: "#f0f0f0",
                      marginBottom: "5px",
                    }}
                  ></div>
                  <div
                    className="skeleton-text"
                    style={{ height: "100px", backgroundColor: "#f0f0f0" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            gap: 6,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {newData?.map((el, index) => {
            return (
              <Cards
                url={el?.urlToImage || getDefaultImageUrl()}
                title={el?.title}
                description={el?.description}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
