import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Quiz App 🎉</h1>
          <p>Test your knowledge with a fun quiz!</p>
          <p>
          This quiz platform is designed to test your general knowledge across 
          different topics. Each quiz contains multiple-choice questions where 
          you can challenge yourself and track your score.  
          At the end, you’ll get instant results showing how well you did. 🚀
        </p>
      <button onClick={() => navigate("/quiz")}>
        Get Started
      </button>
    </div>
  );
};

export default Home;
