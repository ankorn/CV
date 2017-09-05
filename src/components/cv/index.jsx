import React, { Component } from 'react';

import './cv.css';

export default class CV extends Component {
  render() {
    return (
      <div className="cv">
        <p>Меня зовут Антон, мне 27. Моя мечта - работать в команде и делать сногсшибательные программные продукты.</p>
        <p>До марта 2017 года я работал промышленным альпинистом в Самаре и Самарской области. С 20 марта по настоящее время - в «Астерос», специалистом 1-ой линии технической поддержки проекта «М.Видео».</p>
        <p>С начала прошлого года я изучал .NET Framework и C# на <a href="http://edu.cbsystematics.com">cbsystematics.com</a>, партнёрском портале Microsoft. Меньше года назад я прошёл предложенное этим порталом тестирование по программе «C# Professional», подробный результат тестирования <a href="https://drive.google.com/open?id=0B_pwbXHhSvR1UUN0dEFOd3VaM2s">тут</a>.</p>
        <p>Последние полгода я изучаю технологии для создания пользовательских интерфейсов веб приложений: HTML, CSS, JS, React, Redux. Основные курсы я проходил на <a href="http://learn.javascript.ru/">learn.javascript.ru</a>.</p>
        <p>Книги, которые повлияли на моё обучение: Code Complete, GoF, SICP.</p>
        <p>Книга, которую я разбираю сейчас: Алгоритмы, Стивен Скиена.</p>
        <p>Мой английский на уровне intermediate.</p>
      </div>
    );
  }
}
