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

  const startQuiz = () => {
    setIsLoading(true);
    api
      .getQuizData({ amount: 10 })
      .then((res) => {
        const results = res.data.results;
        let options = [];
        results.map((result) => {
          const selectArr = [
            ...result.incorrect_answers,
            result.correct_answer,
          ];
          options = [...options, randomItem(selectArr)];
        });
        dispatch(setQuestionsRequestAction({ questions: results, options }));
        setIsLoading(false);
        history.push("/quiz");
      })
      .catch((e) => {
        console.log(e, "e");
      });
  };

  const randomItem = (options) => {
    return options.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  };

  return (
    <div className="center">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="center">
          <button className="quizButton" onClick={startQuiz}>
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
