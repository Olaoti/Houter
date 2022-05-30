import React from "react";
import "./Blogs.css";
import Head from "../SectionHead/Head";
import tt1 from "../Assets/tt1.png";
import tt2 from "../Assets/tt2.png";
import tt3 from "../Assets/tt3.png";
import tt4 from "../Assets/tt4.png";
import rhh1 from "../Assets/rhh1.png";
import rhh2 from "../Assets/rhh2.png";
import rhh3 from "../Assets/rhh3.png";
import rhh4 from "../Assets/rhh4.png";
const Blogs = () => {
  const blogInfos = [
    {
      id: 1,
      bImg: tt4,
      beImg: rhh4,
      beName: "Danielle Russel",
      beInfo: "The things we need to check when we want to buy a house",
      time: "4 min read",
      date: "25 Apr 2021",
    },
    {
      id: 2,
      bImg: tt2,
      beImg: rhh2,
      beName: "Courtney Henry",
      beInfo: "7 Ways to distinguish the quality of the house we want to buy",
      time: "6 min read",
      date: "24 Apr 2021",
    },
    {
      id: 3,
      bImg: tt3,
      beImg: rhh3,
      beName: "Danielle Russel",
      beInfo: " The best way to know the quality of the house we want to buy ",
      time: "2 min read",
      date: "25 Apr 2021",
    },
  ];
  return (
    <div className="blogs">
      <Head
        headClass="head center"
        className="smallhead middle"
        smallHead="Our Recommendations"
        biggerHead="Find out more about selling and buying homes"
      />
      <div className="btn">More artikel</div>
      <div className="blogsGrid">
        <div className="leftGrid">
          {blogInfos.map((blog) => (
            <div key={blog.id}>
              <img src={blog.bImg} alt="" />
              <div className="inner">
                <div className="innerTop">
                  <img src={blog.beImg} alt="" />
                  <span>{blog.beName}</span>
                </div>
                <div className="info">{blog.beInfo}</div>
                <div className="innerDown">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14 14C13.9075 14.0927 13.7976 14.1663 13.6766 14.2164C13.5557 14.2666 13.426 14.2924 13.295 14.2924C13.164 14.2924 13.0343 14.2666 12.9134 14.2164C12.7924 14.1663 12.6825 14.0927 12.59 14L9.3 10.71C9.20551 10.6174 9.13034 10.5069 9.07885 10.3851C9.02735 10.2632 9.00055 10.1323 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9.59L14 12.59C14.39 12.98 14.39 13.61 14 14Z"
                      fill="#888B97"
                    />
                  </svg>

                  <span>{blog.time}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rightGrid">
          <img src={tt1} className="image" alt="" />
          <div className="inner">
            <div className="innerTop">
              <img src={rhh1} alt="" />
              <span>Cameron Williamson</span>
            </div>
            <div className="info">12 Things to know before buying a house</div>
            <div className="tinyBody">
              Want to buy a house but are unsure about what we should know, here
              I will try to explain what we should know and check when we want
              to buy a house
            </div>
            <div className="innerDown">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14 14C13.9075 14.0927 13.7976 14.1663 13.6766 14.2164C13.5557 14.2666 13.426 14.2924 13.295 14.2924C13.164 14.2924 13.0343 14.2666 12.9134 14.2164C12.7924 14.1663 12.6825 14.0927 12.59 14L9.3 10.71C9.20551 10.6174 9.13034 10.5069 9.07885 10.3851C9.02735 10.2632 9.00055 10.1323 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9.59L14 12.59C14.39 12.98 14.39 13.61 14 14Z"
                  fill="#888B97"
                />
              </svg>

              <span>8 min read</span>
              <span>25 April, 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
