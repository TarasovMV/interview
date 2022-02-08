<h2>Виды директив</h2>
* **компонент** (является прямым наследником директивы)
* **структурные**
  * ngIf
  * ngSwitch
  * ngFor
  * ng-content
  * ng-template
  * ng-container
* **атрибутов**
  * ngClass
  * ngStyle
  * hidden

<h2>Обработчики ошибок</h2>
* **ErrorHandler** - глобальные ошибки приложения
* **HttpInterceptor** - Ошибки HttpClient

<h2>Инкапсуляция стилей</h2>
https://habr.com/ru/post/588969/
* **ViewEncapsulation.Emulated** (по умолчанию) - добавления к селекторам стилей уникального атрибута компонента
* **ViewEncapsulation.None** - без инкапсуляции (как глобальные)
* **ViewEncapsulation.ShadowDom** - реализует честную инкапсуляцию через ShadowDOM, но в одну и туже область ShadowDOM могут попадать стили и из Emulated

<h2>Router</h2>
**router-outlet** - шаблон необходимый для динамического отображения компонентов. Основной параметр - name (по умолчанию: primary).
Так будет выглядеть адресная строка при использовании именованных url: `http://localhost:4200/(outlet-a:page-red//outlet-b:page-green//outlet-c:page-blue)`

**Guards:**
* Resolve
* canActivate
* canLoad
* canDeactivate
* canActivateChild

<h2>NgRx vs NgXs</h2>

<h2>Webpack</h2>
Вебпак — это сборщик модулей. Он анализирует модули приложения, создает граф зависимостей, затем собирает модули в правильном порядке в один или более бандл (bundle), на который может ссылаться файл «index.html».

Основные параметры настройки:
* точка входа - **entry** (обычно index.js)
* точка выхода - **output**
* загрузчики - **loaders**
  * svg-inline-loader
  * css-loader и style-loader
  * babel-loader
  * source-map-loader
  * es-lint-loader
  * file-loader
  * url-loader
* плагины - **plugins**
  * HtmlWebpackPlugin - создание index.html
  * EnvironmentPlugin (DefinePlugin) - переменные среды
  * CommonChunkPlugin - общие зависимости в common.js
  * UglifyjsPlugin - сжатие кода
