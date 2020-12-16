import React from "react";
import qs from "query-string";
import { Redirect } from "react-router-dom";

export default function About(props) {
  console.log(props);
  const search = props.location.search;
  console.log(search); // ?id=34&name=mark
  // 1. 직접 한다.
  // 2. 직접 안한다. => 먼가 있겠죠??
  // console.log(search.split("id=")[1]);
  // 내장 객체 const searchParams = new URLSearchParams(search);
  // console.log(searchParams.get("id"), searchParams.get("name"));
  // 외부 라이브러리
  const { id } = qs.parse(search);

  if (id !== undefined) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>About</h1>
      {id === undefined || <p>id : {id}</p>}
    </div>
  );
}
