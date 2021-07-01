import core from './core';
import util from './util';
import Cache from './cache';
import CacheResult from './cache-result';
declare const BobCore: {
    util: {
        error: typeof import("./util").error;
        isString: (val: any) => boolean;
        isArray: (val: any) => boolean;
        isNil: (val: any) => boolean;
        isArrayAndLenGt: (val: any, len?: number) => boolean;
        isPlainObject: (val: any) => boolean;
        deepClone: typeof import("./util").deepClone;
        getType: typeof import("./util").getType;
        asyncTo: typeof import("./util").asyncTo;
    };
    Cache: typeof Cache;
    CacheResult: typeof CacheResult;
    $http: Bob.Http;
    $info: Bob.Info;
    $log: Bob.Log;
    $data: Bob.Data;
    $file: Bob.File;
    getOption: (key: string) => string;
};
export default BobCore;
export { core, util, Cache, CacheResult };
