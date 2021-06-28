import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAnswersRequestAction,
  resetAllRequestAction,
  setQuestionsRequestAction,
} from "../../redux/reducers/quiz.js";
import "../../assets/css/global.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Loading from "../../components/Loading/Loading.js";
import * as api from "../../controller/api.js";

const Analysis = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState(null);
  const [correctCnt, setCorrectCnt] = useState(0);

  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => ({ quiz: state.quiz }));

  useEffect(() => {
    setIsLoading(true);
    if (!quiz.questions && !quiz.total && !quiz.options) {
      history.push("/");
      return;
    }
    let cnt = 0;
    for (let i = 0; i < quiz.total; i++) {
      if (quiz.answers[i] === quiz.questions[i].correct_answer) {
        cnt++;
      }
    }
    setCorrectCnt(cnt);
    setAnswers(quiz.answers);
  }, []);

  useEffect(() => {
    if (answers) {
      setIsLoading(false);
    }
  }, [answers]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="center">
          <div className="timer">
            <AccessTimeIcon />
            <span className="defaultFontSize fontWeight">
              {quiz.min} : {quiz.sec}
            </span>
          </div>
          <div>
            <span className="defaultFontSize fontWeight correct">
              Correct:{" "}
            </span>
            <span className="defaultFontSize correct">{correctCnt}</span>
          </div>
          <div>
            <span className="defaultFontSize fontWeight wrong">Wrong: </span>
            <span className="defaultFontSize wrong">
              {quiz.total - correctCnt}
            </span>
          </div>
          <div className="flexBox">
            <button className="defaultButton newButton">Restart</button>
            <button className="defaultButton newButton">New Quiz</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Analysis;
