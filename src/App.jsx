// LESSONS
// 3 шаг - импортироуем компонент Lesson_02
import Lesson_02 from "./lessons/lesson02/Lesson_02";
import Lesson_03 from "./lessons/lesson03/Lesson_03";

// HOMEWORKS
import Homework02fep from "./homeworks/homework02fep/HomeWork02fep"
import HomeWork03fep from "./homeworks/homework03fep/homework03fep";
// CONSULTATIONS

import "./App.css";


// Правила компонентов:
// 1. Названия пишем с большой буквы
// 2. Компонент - это функция и она должна возрващать JSX
// 3. JSX - синтаксический сахар, позволяющий возращать HTML элементы из компонента, а также прописывать логику прямо в HTML

function App() {
  return (
    <div className="App">
      {/* Lessons */}
      {/* 4 шаг - возвращаем компонент Lesson_02 из компонента App */}
      {/* <Lesson_02 /> */}
      {/* <Lesson_03 /> */}
      {/* Homeworks */}
      {/* <Homework02fep /> */}
      <HomeWork03fep />
    </div>
  );
}

export default App;