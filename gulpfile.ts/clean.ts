import * as del from 'delete';
import { path } from './constants';


function cleanScssDebug(cb)
{
    del([path.distDebugFiles, !path.distReleaseFiles], cb);
}

function cleanScssRelease(cb)
{
    del([path.distReleaseFiles], cb);
}

export { cleanScssDebug, cleanScssRelease };