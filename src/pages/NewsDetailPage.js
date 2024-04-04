import React from "react";

const NewsDetailPage = () => {
  // Retrieve title and description from local storage
  const title = localStorage.getItem("newsTitle");
  const description = localStorage.getItem("newsDescription");
  const newsImage = localStorage.getItem("newsImage");

  return (
    <>
    <div>

      <div className="card" style={{ width: "80%" ,display:"flex",justifyContent:"center" ,margin:"20px auto"}}>
        <img
          src={newsImage}
          className="card-img-top"
          alt="..."
          loading="lazy"
          style={{ width: "50%", height: "auto" }} 
        />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default NewsDetailPage;
