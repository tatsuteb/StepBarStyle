import { watch, WatchOptions, series } from 'gulp';
import { buildScssDebug, buildScssRelease } from './build';
import { cleanScssDebug, cleanScssRelease } from './clean';
import { path } from './constants';


function watchScss(isDebug = true) {

    const watchOptions: WatchOptions = {
        ignoreInitial: false
    };

    const clean = isDebug ? cleanScssDebug : cleanScssRelease;
    const build = isDebug ? buildScssDebug : buildScssRelease;

    return watch(path.srcAllFiles, watchOptions, series(clean, build));

}

const watchScssDebug = () => watchScss();
const watchScssRelease = () => watchScss(true);

export { watchScssDebug, watchScssRelease };