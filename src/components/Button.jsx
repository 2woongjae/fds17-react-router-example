import React from "react";
import { withRouter } from "react-router-dom";

function Button(props) {
  return (
    <button
      onClick={() => {
        // 2초 후에 페이지 이동
        setTimeout(() => {
          // 페이지 이동
          // window.location.assign("/");
          props.history.push("/");
        }, 2000);
      }}
    >
      나의 이쁜 버튼
    </button>
  );
}

const NewButton = withRouter(Button);

export default NewButton;

// Route => Login
// Login => A => B => C => Button

// H O C => 고차 컴포넌트
// HOC 의 시대는 갔다.
// hooks 의 시대가 왔다.

// 고차 컴포넌트
// function
// 매개변수를 컴포넌트로 받고,
// 리턴을 컴포넌트로 해준다
