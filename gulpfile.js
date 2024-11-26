const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefa para compilar SASS
function compilaSass() {
    return gulp.src('source/styles/**/*.scss')  // Caminho para os arquivos .scss
        .pipe(sass().on('error', sass.logError))  // Compilação e log de erro
        .pipe(gulp.dest('build/styles'));  // Pasta de destino
}

// Tarefa para compressão de imagens
function compressaoImagens() {
    return gulp.src('source/images/*')  // Caminho para as imagens
        .pipe(imagemin())  // Compressão das imagens
        .pipe(gulp.dest('build/images'));  // Pasta de destino
}

// Tarefa para compressão de JavaScript
function compressaoJs() {
    return gulp.src('source/js/**/*.js')  // Caminho para os arquivos .js
        .pipe(uglify())  // Compressão do código JavaScript
        .pipe(gulp.dest('build/js'));  // Pasta de destino
}

// Exportando as tarefas para execução
exports.sass = compilaSass;
exports.imagens = compressaoImagens;
exports.js = compressaoJs;

// Tarefa default que executa todas as tarefas em série
exports.default = gulp.series(compilaSass, compressaoImagens, compressaoJs);
