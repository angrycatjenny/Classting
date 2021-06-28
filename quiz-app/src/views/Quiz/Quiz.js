import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnswersRequestAction,
  setTimeRequestAction,
} from "../../redux/reducers/quiz.js";
import * as api from "../../controller/api.js";
import "../../assets/css/global.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
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
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const time = useRef(0);
  let timer;

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

    timer = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current += 1;
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isShowResult) {
      dispatch(setAnswersRequestAction(answers));
      dispatch(setTimeRequestAction({ min, sec }));
      clearInterval(timer);
    }
  }, [isShowResult]);

  useEffect(() => {
    if (quiz.answers) {
      history.push("/analysis");
    }
  }, [quiz.answers]);

  const renderQuestion = (step) => {
    return (
      <div className="quizBox">
        <div className="timer">
          <AccessTimeIcon />
          <span className="defaultFontSize fontWeight">
            {min}:{sec}
          </span>
        </div>
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
                <input
                  type="radio"
                  name="option"
                  value={option}
                  onChange={handleOption}
                />
                <span
                  style={{ fontSize: "18px" }}
                  dangerouslySetInnerHTML={{ __html: option }}
                />
              </div>
            );
          })}
        </div>
        <button className="defaultButton" onClick={handleNext}>
          Next
        </button>
      </div>
    );
  };

  const handleOption = (e) => {
    setSelectedOpt(e.target.value);
  };

  const handleNext = () => {
    if (activeStep === totalQuest - 1) {
      setAnswers([...answers, selectedOpt]);
      setSelectedOpt("");
      setIsShowResult(true);
      return;
    }
    if (selectedOpt) {
      setActiveStep((prevStep) => prevStep + 1);
      setAnswers([...answers, selectedOpt]);
      setSelectedOpt("");
    } else {
      alert("Please choose an answer!");
      return;
    }
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
