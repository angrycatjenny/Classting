import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestionsRequestAction } from "../../redux/reducers/quiz.js";
import "../Home/Home.css";
import "../../assets/css/global.css";
import * as api from "../../controller/api.js";
import Loading from "../../components/Loading/Loading.js";

const Home = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="center">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="center">
          <button className="quizButton">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="phrase">Let's Quiz!</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
