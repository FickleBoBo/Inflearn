import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
import { useState } from "react";

import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

import Register from "./components/Register";

import HookExam from "./components/HookExam";

function App() {
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };

  return (
    <>
      {/* <Header />
      <Main />
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
        <Header />
      </Button>
      <Footer /> */}

      {/* <Bulb />
      <Counter /> */}

      <Register />

      <HookExam />
    </>
  );
}

export default App;
