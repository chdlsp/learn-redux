import { createStore } from "redux";

// 초기상태 선언
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// 액션 타입 상수 정의
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 액션 스크립트 작성
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// 리듀서 작성 (state = initialState, action) 작성 필수
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };

    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };

    default:
      return state; // redux 에서는 default 에서 state를 그대로 리턴 해야 함
  }
}

const store = createStore(reducer);
console.log(store.getState());

// 구독(subscribe)를 위한 처리
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubcribe = store.subscribe(listener); // 구독 해제

// Action Dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("Hello"));
store.dispatch(addToList({ id: 1, text: "Wow" }));

window.store = store;
