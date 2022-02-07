<h2>Типы:</h2>
* <strong>number</strong> для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
* <strong>bigint</strong> для целых чисел произвольной длины.
* <strong>boolean</strong> для true/false.
* <strong>string</strong> для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
* <strong>null</strong> для неизвестных значений – отдельный тип, имеющий одно значение null. (Для null возвращается "object" – это ошибка в языке, на самом деле это не объект)
* <strong>undefined</strong> для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
* <strong>object</strong> для более сложных структур данных.
* <strong>symbol</strong> для уникальных идентификаторов.

<h2>Сравнения:</h2>
* `alert( null === undefined ); // false`
* ```
  alert( null > 0 );  // (1) false
  alert( null == 0 ); // (2) false
  alert( null >= 0 ); // (3) true
  ```
* ```
  alert( undefined > 0 ); // false (1)
  alert( undefined < 0 ); // false (2)
  alert( undefined == 0 ); // false (3)
  ```
* `null` равен только `undefined` и наоборот

<h2>Области видимости:</h2>
* Глобальная - window
* Функциональная
* Блочная

<h2>Функции:</h2>
* Если функция объявлена как отдельная инструкция в основном потоке кода, то это Function Declaration.
* Если функция была создана как часть выражения, то считается, что эта функция объявлена при помощи Function Expression.
* Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
* Функции, объявленные при помощи Function Expression, создаются, только когда поток выполнения достигает их.

<h2>Символы:</h2>
* `Object.getOwnPropertySymbols(obj)` – с его помощью можно получить все свойства объекта с ключами-символами.
* `Reflect.ownKeys(obj)`, который возвращает все ключи объекта, включая символьные.

<h2>Сборка мусора:</h2>
* Сборщик мусора «помечает» (запоминает) все корневые объекты.
* Затем он идёт по их ссылкам и помечает все найденные объекты.
* Затем он идёт по ссылкам помеченных объектов и помечает объекты, на которые есть ссылка от них. Все объекты запоминаются, чтобы в будущем не посещать один и тот же объект дважды.
* …И так далее, пока не будут посещены все ссылки (достижимые от корней).
* Все непомеченные объекты удаляются.

<h2>Преобразование к примитивам:</h2>
* 3 hint: `number`, `string`, `default(true)`
* ```
  obj[Symbol.toPrimitive] = function(hint) {
  // должен вернуть примитивное значение
  // hint равно чему-то одному из: "string", "number" или "default"
  };
  ```
  
<h2>Call, bind, apply:</h2>


<h2>Каррирование:</h2>
https://learn.javascript.ru/currying-partials