import { series } from 'gulp';
import { buildScssDebug, buildScssRelease } from './build';
import { watchScssDebug, watchScssRelease } from './watch';
import { cleanScssDebug, cleanScssRelease } from './clean';

const build = series(cleanScssDebug, buildScssDebug);
const buildRelease = series(cleanScssRelease, buildScssRelease);

export {
    cleanScssDebug as clean,
    cleanScssRelease as cleanRelease,
    build,
    buildRelease,
    watchScssDebug as watch,
    watchScssRelease as watchRelease
};