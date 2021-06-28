import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnswersRequestAction,
  setTimeRequestAction,
} from "../../redux/reducers/quiz.js";
import * as api from "../../controller/api.js";
import "../../assets/css/global.css";
import Loading from "../../components/Loading/Loading.js";

const Quiz = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [totalQuest, setTotalQuest] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState("");
  const [isShowResult, setIsShowResult] = useState(false);
  const [options, setOptions] = useState(null);

  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => ({ quiz: state.quiz }));

  useEffect(() => {
    setIsLoading(true);
    if (!quiz.questions && !quiz.total && !quiz.options) {
      history.push("/");
      return;
    } else {
      setQuestions(quiz.questions);
      setTotalQuest(quiz.total);
      setOptions(quiz.options);
    }
    setIsLoading(false);
  }, []);

  const renderQuestion = (step) => {
    return (
      <div className="quizBox">
        <div className="flexBox">
          <span className="title">Question {step + 1}</span>
          <div style={{ marginLeft: "15px" }}>
            <span
              style={{
                background: "pink",
                borderRadius: "8px",
                padding: "4px 8px",
                marginRight: "5px",
              }}
            >
              {questions[step].difficulty}
            </span>
            <span
              style={{
                background: "yellow",
                borderRadius: "8px",
                padding: "4px 8px",
              }}
              dangerouslySetInnerHTML={{ __html: questions[step].category }}
            />
          </div>
        </div>

        <div className="questionBox">
          <span
            className="question"
            dangerouslySetInnerHTML={{ __html: questions[step].question }}
          />
          {options[step].map((option, idx) => {
            return (
              <div className="questionBox">
                <input type="radio" name="option" value={option} />
                <span
                  style={{ fontSize: "18px" }}
                  dangerouslySetInnerHTML={{ __html: option }}
                />
              </div>
            );
          })}
        </div>
        <button className="defaultButton">Next</button>
      </div>
    );
  };

  return (
    <div className="center">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {questions?.map((question, idx) => {
            return (
              <div>{idx === activeStep && <>{renderQuestion(idx)}</>}</div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Quiz;
