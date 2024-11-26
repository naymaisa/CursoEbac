const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Função para compilar Sass
function compilaSass() {
    return gulp.src('./source/styles/*.scss')  // Caminho dos arquivos .scss
        .pipe(sass().on('error', sass.logError))  // Compilação Sass e tratamento de erro
        .pipe(gulp.dest('./build/styles'));  // Destino dos arquivos compilados
}

// Função padrão
function funcaoPadrao(callback) {
    console.log("Executando via Gulp");
    callback();  // Sinaliza que a tarefa foi concluída
}

// Função que diz oi
function dizOi(callback) {
    console.log("Ola Gulp");
    dizTchau();
    callback();  // Sinaliza que a tarefa foi concluída
}

// Função que diz tchau
function dizTchau() {
    console.log("Tchau Gulp");
}

// Exportando as tarefas
exports.default = gulp.series(funcaoPadrao, dizOi);  // A execução de tarefas será em série
exports.dizOi = dizOi;
exports.sass = compilaSass;
