import { src, dest } from 'gulp';
import * as sass from 'gulp-sass';
import * as autoprefixer from 'autoprefixer';
import * as postcss from 'gulp-postcss';
import * as sourcemaps from 'gulp-sourcemaps';
import * as gulpif from 'gulp-if';
import * as rename from 'gulp-rename';
import { path } from './constants';


function buildScss(isDebug = true) {

    const sassOptions = {
        outputStyle: isDebug ? 'expanded' : 'compressed'
    };

    return src(path.src)
        .pipe(gulpif(isDebug, sourcemaps.init()))
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({
                browsers: ["last 2 versions"]
            })
        ]))
        .pipe(gulpif(isDebug, sourcemaps.write()))
        .pipe(rename({
            extname: isDebug ? '.css' : '.min.css'
        }))
        .pipe(dest(path.dist));

}

const buildScssDebug = () => buildScss(true);
const buildScssRelease = () => buildScss(false);

export { buildScssDebug, buildScssRelease };