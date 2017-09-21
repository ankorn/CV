import React from 'react';

import './cv.css';

export default function CV() {
  return (
    <div className="cv">
      <p>Меня зовут Антон, мне 27. Моя мечта – работать в команде и делать сногсшибательные программные продукты.</p>
      <p>С начала прошлого года я изучал .NET Framework и C# на <a href="http://edu.cbsystematics.com">cbsystematics.com</a>, партнёрском портале Microsoft. Меньше года назад я прошёл предложенное этим порталом тестирование по программе «C# Professional», подробный результат тестирования <a href="https://drive.google.com/open?id=0B_pwbXHhSvR1UUN0dEFOd3VaM2s">тут</a>.</p>
      <p>Последние полгода я изучаю технологии для создания пользовательских интерфейсов веб приложений. Чистый JS я изучал по учебнику <a href="http://learn.javascript.ru/">Ильи Кантора</a>.</p>
      <p>В мае я закончил <a href="http://learn.javascript.ru/courses/js">курс JavaScript/DOM/интерфейсы</a>. В его рамках я создал с помощью HTML, CSS и JS чат, использующий realtime базу данных Firebase для хранения сообщений. После строго типизированного объектно-ориентированного C# JavaScript показался невероятным – столь же мощным и выразительным, сколь странным. К концу курса чат перерос в SPA, количество зависимостей росло, и я наблюдал, в какой степени простая компонентная архитектура решает эту проблему. Стало понятно, какие задачи стоят перед современным фреймворком. На чат можно посмотреть <a href="https://ankorn.github.io/Chat/">здесь</a>, на его исходный код – <a href="https://github.com/ankorn/Chat">здесь</a>.</p>
      <p>В июне я закончил <a href="http://learn.javascript.ru/courses/react">курс по React</a>. Я использовал Redux, Immutable.js и React Router 4 для создания <a href="https://github.com/ankorn/js_ru_08_06_17/tree/HT8">прототипа новостного сайта</a>. Экосистема React, растворённый в ней способ мышления – это то, на изучении чего я сосредоточен сейчас.</p>
      <p>В августе я сделал этот сайт, используя всё, чему научился. <a href="https://github.com/ankorn/CV">Исходный код</a>.</p>
      <p>При разработке этих проектов я использовал Git, Node.js, Webpack 3, ESLint с конфигом Airbnb.</p>
      <p>Книги, которые повлияли на моё обучение: Code Complete, GoF, SICP.</p>
      <p>Книга, которую я разбираю сейчас: Алгоритмы, Стивен Скиена.</p>
      <p>Мой английский на уровне intermediate.</p>
    </div>
  );
}
