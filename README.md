# Front-End сборка
Что внутри
<ul>
  <li>Bootstrap 4 grid</li>
  <li>Gulp</li>
  <li>Минификатор картинок</li>
  <li>Спрайт генератор</li>
  <li>библиотека миксинов bourbon.io</li>
</ul>

# Установка
Перед началалом роботы - установим все пакеты и зависимости

```bash
npm i
```

также поставим gulp =) :
```bash
npm i gulp -g
```

# Начало работы


Для запуска сборки:
```bash
gulp
```

Для запуска спрайт-генератор:

сначала ложим наши спрайты(иконки etc.) в папку:

```bash
./dev/img/spite/
```

после чего пишем:
```bash
gulp make-sprite
```

после этого спрайты доступны как миксины в - sprite.scss

# Проект запускается на локальном сервере:

```bash
localhost:1337
```

# Пакеты которые есть в проекте

```json
 "devDependencies": {
   "csscomb": "^3.1.8",
   "gulp": "^3.9.0",
   "gulp-autoprefixer": "^3.1.0",
   "gulp-concat": "^2.6.0",
   "gulp-connect": "^2.2.0",
   "gulp-file-include": "^0.13.7",
   "gulp-imagemin": "^3.0.1",
   "gulp-minify-css": "^1.2.1",
   "gulp-plumber": "^1.0.1",
   "gulp-postcss": "^6.0.1",
   "gulp-replace": "^0.5.4",
   "gulp-sass": "^2.1.1",
   "gulp-sourcemaps": "^1.6.0",
   "gulp-uglify": "^1.4.2",
   "gulp-watch": "^4.3.5",
   "gulp.spritesmith": "^6.0.1",
   "imagemin-pngquant": "^4.2.2",
   "less-plugin-autoprefix": "^1.5.1",
   "node-bourbon": "^4.2.3"
 },
 "dependencies": {
   "bourbon": "^4.2.6",
   "imagemin-pngquant": "^4.2.2"
 }
```
