import logo from "./logo.svg";
import "./App.css";
import JsxSyntax from "./REACT_241118_01_JSXGrammer";
import GreetingComponent from "./REACT_241118_02_GreetingComponent";
import WelcomeProps from "./REACT_241118_03_WelcomeProps";
import Articles from "./REACT_241118_04_Articles";
import MyComponent from "./REACT_241118_05_MyComponent";
import BoxComponent from "./REACT_241118_06_BoxComponent";
import Counter from "./REACT_241119_01_ClassComponent";
import Say from "./REACT_241119_02_Say";
import Clock from "./REACT_241119_03_Clock";
import EventPractice from "./REACT_241119_04_EventPractice";
import DropdownComponent from "./REACT_241119_05_DropdownComponent";
import RadioButton from "./REACT_241119_06_RadioButton";
import TableMap from "./REACT_241119_07_TableMap";
import UserList from "./REACT_241120_01_UserList";
import TodoList from "./REACT_241120_02_TodoList";
import HooksPractice from "./REACT_241120_03_HooksPractice";
import InfoEffect from "./REACT_241120_04_InfoEffect";

// REACT_241118_01_JSX문법.js에서 Default로 export했던거랑 Mapping됨
// 하위컴포넌트를 import해오기

function App() {
  const name = "fffff";
  const member = true;
  return (
    <>
      {/*
      <h1>여기는 App.js입니다.</h1>
      <JsxSyntax />
      <GreetingComponent /> 
      <WelcomeProps name="PHAM" job="NewJeans" addr="SEOUL" isAdult={true} />
      <WelcomeProps name="KIM" job="NewJeans" addr="INCHEON" isAdult={true} />
      <WelcomeProps name="MO" job="NewJeans" addr="SUWON" isAdult={true} />
      <WelcomeProps name="KANG" job="NewJeans" addr="JEJU" isAdult={false} />
      <WelcomeProps name="LEE" job="NewJeans" addr="DAEJEON" isAdult={false} />
      <Articles />
      <MyComponent name = "PHAM" age = {20} />
      <BoxComponent>📦 BOX 1</BoxComponent>
      <BoxComponent>📦 BOX 2</BoxComponent>
      <Counter />
      <Say />
      <Clock />
      <EventPractice />
      <DropdownComponent />
      <RadioButton />
      <TableMap />
      <UserList />
      <TodoList />
      <HooksPractice />
      <InfoEffect />
      */}
    </>
  );
}

export default App;
