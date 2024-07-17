import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter03/Library';
import Clock from './chapter04/Clock';
import CommentList from './chapter05/CommentList';
import NotificationList from './chapter06/NotificationList';
import Accommodate from './chapter07/Accommodate'
import ConfirmButton from './chapter08/ConfirmButton';
import LandingPage from './chapter09/LandingPage';
import AttendanceBook from './chapter10/AttendanceBook';
import SignUp from './chapter11/SignUp';
import Calculator from './chapter12/Calculator';
import ProfileCard from './chapter13/ProfileCard';
import DarkOrLight from './chapter14/DarkOrLight';
import Blocks from './chapter15/Blocks';


// 자바 18버전에서부터 지원되는 렌더링 방식
// Concurrent Mode를 사용하기 위해 루트를 미리 정의하고 렌더링 하는 방식
const root = ReactDOM.createRoot(document.getElementById('root'));
// chap03 출력
// root.render(
//   <React.StrictMode>
//     <Library/>
//   </React.StrictMode>
// );

// chapt04 출력
// 이 방식은 리액트 17버전까지만 지원하던 방식
//   setInterval(()=>{
//     ReactDOM.render(
//       <React.StrictMode>
//         <Clock />
//       </React.StrictMode>,
//       document.getElementById('root')  
//   );
//  },1000);

// 18버전으로 맞게 수정
// 18버전부터는 index.js에서 관리하는 것이 아닌
// clock 컴포넌트 자체에서 상태를 관리
// 이 코드로 실행시 시간은 나오나 갱신x 갱신하려면 훅을 통해 클락 컴포넌트에서 관리해야함
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );

// 챕터5 출력
// root.render(
//   <React.StrictMode>
//     <CommentList/>
//   </React.StrictMode>
// );

// 챕터6 출력
// root.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>
// )

// 챕터 7 출력
// root.render(
//   <React.StrictMode>
//     <Accommodate />
//   </React.StrictMode>
// )

// 챕터8 출력
// root.render(
//   <React.StrictMode>
//     <ConfirmButton />
//   </React.StrictMode>
// )

// 챕터9 출력
// root.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>
// )

// 챕터10 출력
// root.render(
//   <React.StrictMode>
//     <AttendanceBook />
//   </React.StrictMode>
// )

// 챕터11 출력
// root.render(
//   <React.StrictMode>
//     <SignUp />
//   </React.StrictMode>
// )

// 챕터12 출력
// root.render(
//   <React.StrictMode>
//     <Calculator />
//   </React.StrictMode>
// )

// 챕터13 출력
// root.render(
//   <React.StrictMode>
//     <ProfileCard />
//   </React.StrictMode>
// )

// 챕터14 출력
// root.render(
//   <React.StrictMode>
//     <DarkOrLight />
//   </React.StrictMode>
// )

root.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
