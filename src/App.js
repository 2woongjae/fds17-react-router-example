import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

// => Component
// 대분자로 시작하면, 클래스거나 컴포넌트거나
// 소무나로 시작하면, 변수거나 함수거나

// 남이 만든 컴포넌트 => 사용법을 숙지
// 컴포넌트의 사용법은 곧 => props 를 어떻게 설정하냐

import "./App.css";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;

// ===
// react-router-dom 의 매칭 알고리즘에 의해

// 정해진 경로는 다 만들수 있다.
// 정해지지 않은 경로 => Dynamic Routing

// switch 문
// 만약에 각 비교문이 포함 관계에 있다면
// 순서에 따라 결과가 달라진다.
// / /about
// /about /

// 50 일때 하가 나와야 해요

// if (x < 100) {
//   하
// } else if (x < 1000) {
//   허
// }

// if (x < 1000) {
//   허
// } else if (x < 100) {
//   하
// }
