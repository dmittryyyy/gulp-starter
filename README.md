Gulp-Starter

- используются препроцессоры Pug и SCSS
- используется транспайлер Babel для поддержки современного JavaScript (ES6) в браузерах
- используется Webpack для сборки JavaScript-модулей
- возможность выгрузки проекта GitHub Pages

Установка:
- установите NodeJS
- установите глобально:
Yarn: npm i -g yarn
Gulp: npm i -g gulp
скачайте сборку с помощью Git: git clone https://github.com/dmittryyyy/gulp-starter.git
скачайте необходимые зависимости:
npm i или yarn i
- чтобы начать работу, введите команду: gulp (режим разработки)
- чтобы собрать проект, введите команду: gulp --production (режим сборки)
Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером. 
Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

- чтобы выгрузить проект на GitHub Pages: gulp deploy

