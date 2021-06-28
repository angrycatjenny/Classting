export const initialState = {
  questions: null,
  options: null,
  answers: null,
  total: null,
  min: null,
  sec: null,
};

export const SET_QUESTIONS_REQUEST = "SET_QUESTIONS_REQUEST";
export const SET_ANSWERS_REQUEST = "SET_ANSWERS_REQUEST";
export const SET_TIME = "SET_TIME";
export const RESET_ALL = "RESET_ALL";
export const RESET_ANSWERS = "RESET_ANSWERS";

export const setQuestionsRequestAction = (data) => ({
  type: SET_QUESTIONS_REQUEST,
  data,
});
export const setAnswersRequestAction = (data) => ({
  type: SET_ANSWERS_REQUEST,
  data,
});
export const setTimeRequestAction = (data) => ({
  type: SET_TIME,
  data,
});
export const resetAnswersRequestAction = () => ({
  type: RESET_ANSWERS,
});
export const resetAllRequestAction = () => ({
  type: RESET_ALL,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS_REQUEST:
      return {
        ...state,
        questions: action.data.questions,
        total: action.data.questions.length,
        options: action.data.options,
      };
    case SET_ANSWERS_REQUEST:
      return {
        ...state,
        answers: action.data,
      };
    case SET_TIME:
      return {
        ...state,
        min: action.data.min,
        sec: action.data.sec,
      };
    case RESET_ALL:
      return {
        ...state,
        questions: null,
        options: null,
        answers: null,
        total: null,
        min: null,
        sec: null,
      };
    case RESET_ANSWERS:
      return {
        ...state,
        answers: null,
        min: null,
        sec: null,
      };
    default:
      return state;
  }
};

export default reducer;
