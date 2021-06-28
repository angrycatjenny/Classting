import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAnswersRequestAction,
  resetAllRequestAction,
  setQuestionsRequestAction,
} from "../../redux/reducers/quiz.js";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";
import "../../assets/css/global.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Loading from "../../components/Loading/Loading.js";
import * as api from "../../controller/api.js";

const Analysis = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState(null);
  const [correctCnt, setCorrectCnt] = useState(0);
  const [pieData, setPieData] = useState(null);

  const COLORS = ["#ff3769", "#5e7e9b"];
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
    const data = [
      { name: "정답", value: cnt },
      { name: "오답", value: quiz.total - cnt },
    ];
    setPieData(data);
    setAnswers(quiz.answers);
  }, []);

  useEffect(() => {
    if (answers) {
      setIsLoading(false);
    }
  }, [answers]);

  const restartQuiz = () => {
    dispatch(resetAnswersRequestAction());
    history.push("/quiz");
    return;
  };

  const newQuiz = () => {
    dispatch(resetAllRequestAction());
    startQuiz();
    return;
  };

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

  const renderPieChart = () => {
    return (
      <div className="questionBox">
        <PieChart width={200} height={200}>
          <Pie
            dataKey="value"
            data={pieData}
            innerRadius={95}
            outerRadius={100}
            style={{ border: "1px solid blue" }}
          >
            {pieData.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
  };

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
          {pieData && renderPieChart()}
          <div className="flexBox">
            <button className="defaultButton newButton" onClick={restartQuiz}>
              Restart
            </button>
            <button className="defaultButton newButton" onClick={newQuiz}>
              New Quiz
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Analysis;
