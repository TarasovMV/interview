<h2>DOM:</h2>


<h2>Shadow DOM:</h2>


<h2>Incremental DOM vs Virtual DOM:</h2>
URL: https://habr.com/ru/post/448048/

<h2>Распространение событий (Event Propagation):</h2>
* **Погружение** - событие возникает в объекте window и опускается вниз по дереву до целевого объекта через всех его предков
* **Целевая фаза** - событие достигает целевого элемента
* **Всплытие** - событие всплывает от целевого элемента (event.target) через всех его предков до window

<h2>Виды событий:</h2>
https://developer.mozilla.org/ru/docs/Web/Events

* online
* offline
* focus
* blur
* submit
* click
* keydown
* keyup
* touch

<h2>Reflow, Repaint, Composite</h2>
https://rashidovr.medium.com/reflow-repaint-composite-%D1%87%D1%82%D0%BE-%D1%8D%D1%82%D0%BE-%D0%B8-%D0%BA%D0%B0%D0%BA-%D1%8D%D1%82%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-a777c5760295
