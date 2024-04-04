import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ url, title, description }) => {
    console.log("tittli",title)
  const truncateDescription = (text, limit) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    } else {
      return text;
    }
  };
  const truncatedDescription = truncateDescription(description, 15);

  // Function to extract ID from URL
  const extractIdFromUrl = (url) => {
    const cleanedUrl = url.split("?")[0];
    const parts = cleanedUrl.split("/");
    return parts[parts.length - 1];
  };


  const handleReadMoreClick = () => {
    // Save title and description to local storage
    localStorage.setItem('newsTitle', title);
    localStorage.setItem('newsDescription', description);
    localStorage.setItem('newsImage',url);
  };


  return (
    <div className="card" style={{ width: "20rem" }}>
      <img src={url} className="card-img-top" alt="..." loading="lazy" />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{truncatedDescription}...</p>
        <Link
          to={{
            pathname: `/news-detail/${extractIdFromUrl(url)}`,
          }}
          onClick={handleReadMoreClick}
          className="btn btn-primary"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Cards;
