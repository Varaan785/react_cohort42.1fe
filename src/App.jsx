// 3 шаг - импортироуем компонент Lesson_02
import Lesson_02 from './lessons/lesson02/Lesson_02';

import './App.css';
import HomeWork02fep from './homeworks/homework02fep/HomeWork02fep';

// Правила компонентов:
// 1. Названия пишем с большой буквы
// 2. Компонент - это функция и она должна возрващать JSX
// 3. JSX - синтаксический сахар, позволяющий возращать HTML элементы из компонента, а также прописывать логику прямо в HTML

function App() {
  return (
    <div className="App">
      {/* 4 шаг - возвращаем компонент Lesson_02 из компонента App */}
      <HomeWork02fep />
    </div>
  );
}

export default App;