import axios from "axios";
const requestURL = "https://opentdb.com/api.php";

export function getQuizData(data) {
  let query = requestURL.concat(`?amount=${data.amount}`);
  if (data.category) {
    query = query.concat(`&category=${data.category}`);
  }
  if (data.difficulty) {
    query = query.concat(`&difficulty=${data.difficulty}`);
  }
  query = query.concat(`&type=multiple`);
  return axios.get(query);
}
