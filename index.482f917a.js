// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bBItS":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c8e33be6482f917a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"02IhW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateOnWaypoint", ()=>animateOnWaypoint);
parcelHelpers.export(exports, "getGitHubRepos", ()=>getGitHubRepos);
var _index = require("../../node_modules/@octokit/core/dist-web/index");
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
function animateOnWaypoint(selector, animation, offset, group = "default") {
    $(selector).waypoint({
        handler: function() {
            if ($(this.element).isInViewport()) $(this.element).addClass(animation);
            else $(this.element).removeClass(animation);
        },
        offset: offset,
        group: group
    });
}
async function getGitHubRepos() {
    const octokit = new (0, _index.Octokit)();
    try {
        const { data: repos  } = await octokit.request("GET /users/{username}/repos", {
            username: "Pao89",
            sort: "created"
        });
        const reposInfo = repos.filter((repo)=>!repo.name.includes("github.io")).map((repo)=>{
            return {
                name: repo.name,
                url: repo.html_url
            };
        });
        for (const repo of reposInfo){
            const { data  } = await octokit.request(`GET /repos/Pao89/${repo.name}/languages`);
            repo.languages = Object.keys(data);
        }
        return reposInfo;
    } catch (err) {
        console.err("Could not load github repos, ", err);
    }
}
exports.default = $;

},{"../../node_modules/@octokit/core/dist-web/index":"eNEbT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eNEbT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Octokit", ()=>Octokit);
var _universalUserAgent = require("universal-user-agent");
var _beforeAfterHook = require("before-after-hook");
var _request = require("@octokit/request");
var _graphql = require("@octokit/graphql");
var _authToken = require("@octokit/auth-token");
const VERSION = "4.2.0";
class Octokit {
    constructor(options = {}){
        const hook = new (0, _beforeAfterHook.Collection)();
        const requestDefaults = {
            baseUrl: (0, _request.request).endpoint.DEFAULTS.baseUrl,
            headers: {},
            request: Object.assign({}, options.request, {
                // @ts-ignore internal usage only, no need to type
                hook: hook.bind(null, "request")
            }),
            mediaType: {
                previews: [],
                format: ""
            }
        };
        // prepend default user agent with `options.userAgent` if set
        requestDefaults.headers["user-agent"] = [
            options.userAgent,
            `octokit-core.js/${VERSION} ${(0, _universalUserAgent.getUserAgent)()}`
        ].filter(Boolean).join(" ");
        if (options.baseUrl) requestDefaults.baseUrl = options.baseUrl;
        if (options.previews) requestDefaults.mediaType.previews = options.previews;
        if (options.timeZone) requestDefaults.headers["time-zone"] = options.timeZone;
        this.request = (0, _request.request).defaults(requestDefaults);
        this.graphql = (0, _graphql.withCustomRequest)(this.request).defaults(requestDefaults);
        this.log = Object.assign({
            debug: ()=>{},
            info: ()=>{},
            warn: console.warn.bind(console),
            error: console.error.bind(console)
        }, options.log);
        this.hook = hook;
        // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
        //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
        // (2) If only `options.auth` is set, use the default token authentication strategy.
        // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
        // TODO: type `options.auth` based on `options.authStrategy`.
        if (!options.authStrategy) {
            if (!options.auth) // (1)
            this.auth = async ()=>({
                    type: "unauthenticated"
                });
            else {
                // (2)
                const auth = (0, _authToken.createTokenAuth)(options.auth);
                // @ts-ignore  ¯\_(ツ)_/¯
                hook.wrap("request", auth.hook);
                this.auth = auth;
            }
        } else {
            const { authStrategy , ...otherOptions } = options;
            const auth = authStrategy(Object.assign({
                request: this.request,
                log: this.log,
                // we pass the current octokit instance as well as its constructor options
                // to allow for authentication strategies that return a new octokit instance
                // that shares the same internal state as the current one. The original
                // requirement for this was the "event-octokit" authentication strategy
                // of https://github.com/probot/octokit-auth-probot.
                octokit: this,
                octokitOptions: otherOptions
            }, options.auth));
            // @ts-ignore  ¯\_(ツ)_/¯
            hook.wrap("request", auth.hook);
            this.auth = auth;
        }
        // apply plugins
        // https://stackoverflow.com/a/16345172
        const classConstructor = this.constructor;
        classConstructor.plugins.forEach((plugin)=>{
            Object.assign(this, plugin(this, options));
        });
    }
    static defaults(defaults) {
        const OctokitWithDefaults = class extends this {
            constructor(...args){
                const options = args[0] || {};
                if (typeof defaults === "function") {
                    super(defaults(options));
                    return;
                }
                super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent ? {
                    userAgent: `${options.userAgent} ${defaults.userAgent}`
                } : null));
            }
        };
        return OctokitWithDefaults;
    }
    /**
     * Attach a plugin (or many) to your Octokit instance.
     *
     * @example
     * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
     */ static plugin(...newPlugins) {
        var _a;
        const currentPlugins = this.plugins;
        const NewOctokit = (_a = class extends this {
        }, _a.plugins = currentPlugins.concat(newPlugins.filter((plugin)=>!currentPlugins.includes(plugin))), _a);
        return NewOctokit;
    }
}
Octokit.VERSION = VERSION;
Octokit.plugins = [];

},{"universal-user-agent":"keCNn","before-after-hook":"3Jq8N","@octokit/request":"9G7B5","@octokit/graphql":"dxxEz","@octokit/auth-token":"fT4nE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"keCNn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUserAgent", ()=>getUserAgent);
var process = require("59c2c68bdf2fa815");
function getUserAgent() {
    if (typeof navigator === "object" && "userAgent" in navigator) return navigator.userAgent;
    if (typeof process === "object" && "version" in process) return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
    return "<environment undetectable>";
}

},{"59c2c68bdf2fa815":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"3Jq8N":[function(require,module,exports) {
var register = require("c71fe00be221bbf5");
var addHook = require("99c0643bbc5821ee");
var removeHook = require("db2c6ea9ad73cf1f");
// bind with array of arguments: https://stackoverflow.com/a/21792913
var bind = Function.bind;
var bindable = bind.bind(bind);
function bindApi(hook, state, name) {
    var removeHookRef = bindable(removeHook, null).apply(null, name ? [
        state,
        name
    ] : [
        state
    ]);
    hook.api = {
        remove: removeHookRef
    };
    hook.remove = removeHookRef;
    [
        "before",
        "error",
        "after",
        "wrap"
    ].forEach(function(kind) {
        var args = name ? [
            state,
            kind,
            name
        ] : [
            state,
            kind
        ];
        hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args);
    });
}
function HookSingular() {
    var singularHookName = "h";
    var singularHookState = {
        registry: {}
    };
    var singularHook = register.bind(null, singularHookState, singularHookName);
    bindApi(singularHook, singularHookState, singularHookName);
    return singularHook;
}
function HookCollection() {
    var state = {
        registry: {}
    };
    var hook = register.bind(null, state);
    bindApi(hook, state);
    return hook;
}
var collectionHookDeprecationMessageDisplayed = false;
function Hook() {
    if (!collectionHookDeprecationMessageDisplayed) {
        console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
        collectionHookDeprecationMessageDisplayed = true;
    }
    return HookCollection();
}
Hook.Singular = HookSingular.bind();
Hook.Collection = HookCollection.bind();
module.exports = Hook;
// expose constructors as a named property for TypeScript
module.exports.Hook = Hook;
module.exports.Singular = Hook.Singular;
module.exports.Collection = Hook.Collection;

},{"c71fe00be221bbf5":"eu8kX","99c0643bbc5821ee":"gkrn0","db2c6ea9ad73cf1f":"a1RoV"}],"eu8kX":[function(require,module,exports) {
module.exports = register;
function register(state, name, method, options) {
    if (typeof method !== "function") throw new Error("method for before hook must be a function");
    if (!options) options = {};
    if (Array.isArray(name)) return name.reverse().reduce(function(callback, name) {
        return register.bind(null, state, name, callback, options);
    }, method)();
    return Promise.resolve().then(function() {
        if (!state.registry[name]) return method(options);
        return state.registry[name].reduce(function(method, registered) {
            return registered.hook.bind(null, method, options);
        }, method)();
    });
}

},{}],"gkrn0":[function(require,module,exports) {
module.exports = addHook;
function addHook(state, kind, name, hook) {
    var orig = hook;
    if (!state.registry[name]) state.registry[name] = [];
    if (kind === "before") hook = function(method, options) {
        return Promise.resolve().then(orig.bind(null, options)).then(method.bind(null, options));
    };
    if (kind === "after") hook = function(method, options) {
        var result;
        return Promise.resolve().then(method.bind(null, options)).then(function(result_) {
            result = result_;
            return orig(result, options);
        }).then(function() {
            return result;
        });
    };
    if (kind === "error") hook = function(method, options) {
        return Promise.resolve().then(method.bind(null, options)).catch(function(error) {
            return orig(error, options);
        });
    };
    state.registry[name].push({
        hook: hook,
        orig: orig
    });
}

},{}],"a1RoV":[function(require,module,exports) {
module.exports = removeHook;
function removeHook(state, name, method) {
    if (!state.registry[name]) return;
    var index = state.registry[name].map(function(registered) {
        return registered.orig;
    }).indexOf(method);
    if (index === -1) return;
    state.registry[name].splice(index, 1);
}

},{}],"9G7B5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "request", ()=>request);
var _endpoint = require("@octokit/endpoint");
var _universalUserAgent = require("universal-user-agent");
var _isPlainObject = require("is-plain-object");
var _nodeFetch = require("node-fetch");
var _nodeFetchDefault = parcelHelpers.interopDefault(_nodeFetch);
var _requestError = require("@octokit/request-error");
const VERSION = "6.2.3";
function getBufferResponse(response) {
    return response.arrayBuffer();
}
function fetchWrapper(requestOptions) {
    const log = requestOptions.request && requestOptions.request.log ? requestOptions.request.log : console;
    if ((0, _isPlainObject.isPlainObject)(requestOptions.body) || Array.isArray(requestOptions.body)) requestOptions.body = JSON.stringify(requestOptions.body);
    let headers = {};
    let status;
    let url;
    const fetch = requestOptions.request && requestOptions.request.fetch || globalThis.fetch || /* istanbul ignore next */ (0, _nodeFetchDefault.default);
    return fetch(requestOptions.url, Object.assign({
        method: requestOptions.method,
        body: requestOptions.body,
        headers: requestOptions.headers,
        redirect: requestOptions.redirect
    }, // `requestOptions.request.agent` type is incompatible
    // see https://github.com/octokit/types.ts/pull/264
    requestOptions.request)).then(async (response)=>{
        url = response.url;
        status = response.status;
        for (const keyAndValue of response.headers)headers[keyAndValue[0]] = keyAndValue[1];
        if ("deprecation" in headers) {
            const matches = headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/);
            const deprecationLink = matches && matches.pop();
            log.warn(`[@octokit/request] "${requestOptions.method} ${requestOptions.url}" is deprecated. It is scheduled to be removed on ${headers.sunset}${deprecationLink ? `. See ${deprecationLink}` : ""}`);
        }
        if (status === 204 || status === 205) return;
        // GitHub API returns 200 for HEAD requests
        if (requestOptions.method === "HEAD") {
            if (status < 400) return;
            throw new (0, _requestError.RequestError)(response.statusText, status, {
                response: {
                    url,
                    status,
                    headers,
                    data: undefined
                },
                request: requestOptions
            });
        }
        if (status === 304) throw new (0, _requestError.RequestError)("Not modified", status, {
            response: {
                url,
                status,
                headers,
                data: await getResponseData(response)
            },
            request: requestOptions
        });
        if (status >= 400) {
            const data = await getResponseData(response);
            const error = new (0, _requestError.RequestError)(toErrorMessage(data), status, {
                response: {
                    url,
                    status,
                    headers,
                    data
                },
                request: requestOptions
            });
            throw error;
        }
        return getResponseData(response);
    }).then((data)=>{
        return {
            status,
            url,
            headers,
            data
        };
    }).catch((error)=>{
        if (error instanceof (0, _requestError.RequestError)) throw error;
        else if (error.name === "AbortError") throw error;
        throw new (0, _requestError.RequestError)(error.message, 500, {
            request: requestOptions
        });
    });
}
async function getResponseData(response) {
    const contentType = response.headers.get("content-type");
    if (/application\/json/.test(contentType)) return response.json();
    if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) return response.text();
    return getBufferResponse(response);
}
function toErrorMessage(data) {
    if (typeof data === "string") return data;
    // istanbul ignore else - just in case
    if ("message" in data) {
        if (Array.isArray(data.errors)) return `${data.message}: ${data.errors.map(JSON.stringify).join(", ")}`;
        return data.message;
    }
    // istanbul ignore next - just in case
    return `Unknown error: ${JSON.stringify(data)}`;
}
function withDefaults(oldEndpoint, newDefaults) {
    const endpoint = oldEndpoint.defaults(newDefaults);
    const newApi = function(route, parameters) {
        const endpointOptions = endpoint.merge(route, parameters);
        if (!endpointOptions.request || !endpointOptions.request.hook) return fetchWrapper(endpoint.parse(endpointOptions));
        const request = (route, parameters)=>{
            return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
        };
        Object.assign(request, {
            endpoint,
            defaults: withDefaults.bind(null, endpoint)
        });
        return endpointOptions.request.hook(request, endpointOptions);
    };
    return Object.assign(newApi, {
        endpoint,
        defaults: withDefaults.bind(null, endpoint)
    });
}
const request = withDefaults((0, _endpoint.endpoint), {
    headers: {
        "user-agent": `octokit-request.js/${VERSION} ${(0, _universalUserAgent.getUserAgent)()}`
    }
});

},{"@octokit/endpoint":"E17jw","universal-user-agent":"keCNn","is-plain-object":"5FM20","node-fetch":"biJx9","@octokit/request-error":"53iRR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"E17jw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "endpoint", ()=>endpoint);
var _isPlainObject = require("is-plain-object");
var _universalUserAgent = require("universal-user-agent");
function lowercaseKeys(object) {
    if (!object) return {};
    return Object.keys(object).reduce((newObj, key)=>{
        newObj[key.toLowerCase()] = object[key];
        return newObj;
    }, {});
}
function mergeDeep(defaults, options) {
    const result = Object.assign({}, defaults);
    Object.keys(options).forEach((key)=>{
        if ((0, _isPlainObject.isPlainObject)(options[key])) {
            if (!(key in defaults)) Object.assign(result, {
                [key]: options[key]
            });
            else result[key] = mergeDeep(defaults[key], options[key]);
        } else Object.assign(result, {
            [key]: options[key]
        });
    });
    return result;
}
function removeUndefinedProperties(obj) {
    for(const key in obj)if (obj[key] === undefined) delete obj[key];
    return obj;
}
function merge(defaults, route, options) {
    if (typeof route === "string") {
        let [method, url] = route.split(" ");
        options = Object.assign(url ? {
            method,
            url
        } : {
            url: method
        }, options);
    } else options = Object.assign({}, route);
    // lowercase header names before merging with defaults to avoid duplicates
    options.headers = lowercaseKeys(options.headers);
    // remove properties with undefined values before merging
    removeUndefinedProperties(options);
    removeUndefinedProperties(options.headers);
    const mergedOptions = mergeDeep(defaults || {}, options);
    // mediaType.previews arrays are merged, instead of overwritten
    if (defaults && defaults.mediaType.previews.length) mergedOptions.mediaType.previews = defaults.mediaType.previews.filter((preview)=>!mergedOptions.mediaType.previews.includes(preview)).concat(mergedOptions.mediaType.previews);
    mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map((preview)=>preview.replace(/-preview/, ""));
    return mergedOptions;
}
function addQueryParameters(url, parameters) {
    const separator = /\?/.test(url) ? "&" : "?";
    const names = Object.keys(parameters);
    if (names.length === 0) return url;
    return url + separator + names.map((name)=>{
        if (name === "q") return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
        return `${name}=${encodeURIComponent(parameters[name])}`;
    }).join("&");
}
const urlVariableRegex = /\{[^}]+\}/g;
function removeNonChars(variableName) {
    return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}
function extractUrlVariableNames(url) {
    const matches = url.match(urlVariableRegex);
    if (!matches) return [];
    return matches.map(removeNonChars).reduce((a, b)=>a.concat(b), []);
}
function omit(object, keysToOmit) {
    return Object.keys(object).filter((option)=>!keysToOmit.includes(option)).reduce((obj, key)=>{
        obj[key] = object[key];
        return obj;
    }, {});
}
// Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/* istanbul ignore file */ function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function(part) {
        if (!/%[0-9A-Fa-f]/.test(part)) part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
        return part;
    }).join("");
}
function encodeUnreserved(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}
function encodeValue(operator, value, key) {
    value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);
    if (key) return encodeUnreserved(key) + "=" + value;
    else return value;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function isKeyOperator(operator) {
    return operator === ";" || operator === "&" || operator === "?";
}
function getValues(context, operator, key, modifier) {
    var value = context[key], result = [];
    if (isDefined(value) && value !== "") {
        if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
            value = value.toString();
            if (modifier && modifier !== "*") value = value.substring(0, parseInt(modifier, 10));
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
        } else if (modifier === "*") {
            if (Array.isArray(value)) value.filter(isDefined).forEach(function(value) {
                result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
            });
            else Object.keys(value).forEach(function(k) {
                if (isDefined(value[k])) result.push(encodeValue(operator, value[k], k));
            });
        } else {
            const tmp = [];
            if (Array.isArray(value)) value.filter(isDefined).forEach(function(value) {
                tmp.push(encodeValue(operator, value));
            });
            else Object.keys(value).forEach(function(k) {
                if (isDefined(value[k])) {
                    tmp.push(encodeUnreserved(k));
                    tmp.push(encodeValue(operator, value[k].toString()));
                }
            });
            if (isKeyOperator(operator)) result.push(encodeUnreserved(key) + "=" + tmp.join(","));
            else if (tmp.length !== 0) result.push(tmp.join(","));
        }
    } else {
        if (operator === ";") {
            if (isDefined(value)) result.push(encodeUnreserved(key));
        } else if (value === "" && (operator === "&" || operator === "?")) result.push(encodeUnreserved(key) + "=");
        else if (value === "") result.push("");
    }
    return result;
}
function parseUrl(template) {
    return {
        expand: expand.bind(null, template)
    };
}
function expand(template, context) {
    var operators = [
        "+",
        "#",
        ".",
        "/",
        ";",
        "?",
        "&"
    ];
    return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(_, expression, literal) {
        if (expression) {
            let operator = "";
            const values = [];
            if (operators.indexOf(expression.charAt(0)) !== -1) {
                operator = expression.charAt(0);
                expression = expression.substr(1);
            }
            expression.split(/,/g).forEach(function(variable) {
                var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
            });
            if (operator && operator !== "+") {
                var separator = ",";
                if (operator === "?") separator = "&";
                else if (operator !== "#") separator = operator;
                return (values.length !== 0 ? operator : "") + values.join(separator);
            } else return values.join(",");
        } else return encodeReserved(literal);
    });
}
function parse(options) {
    // https://fetch.spec.whatwg.org/#methods
    let method = options.method.toUpperCase();
    // replace :varname with {varname} to make it RFC 6570 compatible
    let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
    let headers = Object.assign({}, options.headers);
    let body;
    let parameters = omit(options, [
        "method",
        "baseUrl",
        "url",
        "headers",
        "request",
        "mediaType"
    ]);
    // extract variable names from URL to calculate remaining variables later
    const urlVariableNames = extractUrlVariableNames(url);
    url = parseUrl(url).expand(parameters);
    if (!/^http/.test(url)) url = options.baseUrl + url;
    const omittedParameters = Object.keys(options).filter((option)=>urlVariableNames.includes(option)).concat("baseUrl");
    const remainingParameters = omit(parameters, omittedParameters);
    const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);
    if (!isBinaryRequest) {
        if (options.mediaType.format) // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
        headers.accept = headers.accept.split(/,/).map((preview)=>preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`)).join(",");
        if (options.mediaType.previews.length) {
            const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
            headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map((preview)=>{
                const format = options.mediaType.format ? `.${options.mediaType.format}` : "+json";
                return `application/vnd.github.${preview}-preview${format}`;
            }).join(",");
        }
    }
    // for GET/HEAD requests, set URL query parameters from remaining parameters
    // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters
    if ([
        "GET",
        "HEAD"
    ].includes(method)) url = addQueryParameters(url, remainingParameters);
    else {
        if ("data" in remainingParameters) body = remainingParameters.data;
        else if (Object.keys(remainingParameters).length) body = remainingParameters;
    }
    // default content-type for JSON if body is set
    if (!headers["content-type"] && typeof body !== "undefined") headers["content-type"] = "application/json; charset=utf-8";
    // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
    // fetch does not allow to set `content-length` header, but we can set body to an empty string
    if ([
        "PATCH",
        "PUT"
    ].includes(method) && typeof body === "undefined") body = "";
    // Only return body/request keys if present
    return Object.assign({
        method,
        url,
        headers
    }, typeof body !== "undefined" ? {
        body
    } : null, options.request ? {
        request: options.request
    } : null);
}
function endpointWithDefaults(defaults, route, options) {
    return parse(merge(defaults, route, options));
}
function withDefaults(oldDefaults, newDefaults) {
    const DEFAULTS = merge(oldDefaults, newDefaults);
    const endpoint = endpointWithDefaults.bind(null, DEFAULTS);
    return Object.assign(endpoint, {
        DEFAULTS,
        defaults: withDefaults.bind(null, DEFAULTS),
        merge: merge.bind(null, DEFAULTS),
        parse
    });
}
const VERSION = "7.0.5";
const userAgent = `octokit-endpoint.js/${VERSION} ${(0, _universalUserAgent.getUserAgent)()}`;
// DEFAULTS has all properties set that EndpointOptions has, except url.
// So we use RequestParameters and add method as additional required property.
const DEFAULTS = {
    method: "GET",
    baseUrl: "https://api.github.com",
    headers: {
        accept: "application/vnd.github.v3+json",
        "user-agent": userAgent
    },
    mediaType: {
        format: "",
        previews: []
    }
};
const endpoint = withDefaults(null, DEFAULTS);

},{"is-plain-object":"5FM20","universal-user-agent":"keCNn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5FM20":[function(require,module,exports) {
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
function isObject(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o) {
    var ctor, prot;
    if (isObject(o) === false) return false;
    // If has modified constructor
    ctor = o.constructor;
    if (ctor === undefined) return true;
    // If has modified prototype
    prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty("isPrototypeOf") === false) return false;
    // Most likely a plain Object
    return true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"biJx9":[function(require,module,exports) {
var global = arguments[3];
"use strict";
// ref: https://github.com/tc39/proposal-global
var getGlobal = function() {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== "undefined") return self;
    if (typeof window !== "undefined") return window;
    if (typeof global !== "undefined") return global;
    throw new Error("unable to locate global object");
};
var globalObject = getGlobal();
module.exports = exports = globalObject.fetch;
// Needed for TypeScript and Webpack.
if (globalObject.fetch) exports.default = globalObject.fetch.bind(globalObject);
exports.Headers = globalObject.Headers;
exports.Request = globalObject.Request;
exports.Response = globalObject.Response;

},{}],"53iRR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RequestError", ()=>RequestError);
var _deprecation = require("deprecation");
var _once = require("once");
var _onceDefault = parcelHelpers.interopDefault(_once);
const logOnceCode = (0, _onceDefault.default)((deprecation)=>console.warn(deprecation));
const logOnceHeaders = (0, _onceDefault.default)((deprecation)=>console.warn(deprecation));
/**
 * Error with extra properties to help with debugging
 */ class RequestError extends Error {
    constructor(message, statusCode, options){
        super(message);
        // Maintains proper stack trace (only available on V8)
        /* istanbul ignore next */ if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
        this.name = "HttpError";
        this.status = statusCode;
        let headers;
        if ("headers" in options && typeof options.headers !== "undefined") headers = options.headers;
        if ("response" in options) {
            this.response = options.response;
            headers = options.response.headers;
        }
        // redact request credentials without mutating original request options
        const requestCopy = Object.assign({}, options.request);
        if (options.request.headers.authorization) requestCopy.headers = Object.assign({}, options.request.headers, {
            authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
        });
        requestCopy.url = requestCopy.url// client_id & client_secret can be passed as URL query parameters to increase rate limit
        // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
        .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]")// OAuth tokens can be passed as URL query parameters, although it is not recommended
        // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
        .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
        this.request = requestCopy;
        // deprecations
        Object.defineProperty(this, "code", {
            get () {
                logOnceCode(new (0, _deprecation.Deprecation)("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
                return statusCode;
            }
        });
        Object.defineProperty(this, "headers", {
            get () {
                logOnceHeaders(new (0, _deprecation.Deprecation)("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."));
                return headers || {};
            }
        });
    }
}

},{"deprecation":"9F8uW","once":"YXzlo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9F8uW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Deprecation", ()=>Deprecation);
class Deprecation extends Error {
    constructor(message){
        super(message); // Maintains proper stack trace (only available on V8)
        /* istanbul ignore next */ if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
        this.name = "Deprecation";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"YXzlo":[function(require,module,exports) {
var wrappy = require("e636ad71304d2324");
module.exports = wrappy(once);
module.exports.strict = wrappy(onceStrict);
once.proto = once(function() {
    Object.defineProperty(Function.prototype, "once", {
        value: function() {
            return once(this);
        },
        configurable: true
    });
    Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
            return onceStrict(this);
        },
        configurable: true
    });
});
function once(fn) {
    var f = function() {
        if (f.called) return f.value;
        f.called = true;
        return f.value = fn.apply(this, arguments);
    };
    f.called = false;
    return f;
}
function onceStrict(fn) {
    var f = function() {
        if (f.called) throw new Error(f.onceError);
        f.called = true;
        return f.value = fn.apply(this, arguments);
    };
    var name = fn.name || "Function wrapped with `once`";
    f.onceError = name + " shouldn't be called more than once";
    f.called = false;
    return f;
}

},{"e636ad71304d2324":"Rj3It"}],"Rj3It":[function(require,module,exports) {
// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy;
function wrappy(fn, cb) {
    if (fn && cb) return wrappy(fn)(cb);
    if (typeof fn !== "function") throw new TypeError("need wrapper function");
    Object.keys(fn).forEach(function(k) {
        wrapper[k] = fn[k];
    });
    return wrapper;
    function wrapper() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        var ret = fn.apply(this, args);
        var cb = args[args.length - 1];
        if (typeof ret === "function" && ret !== cb) Object.keys(cb).forEach(function(k) {
            ret[k] = cb[k];
        });
        return ret;
    }
}

},{}],"dxxEz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GraphqlResponseError", ()=>GraphqlResponseError);
parcelHelpers.export(exports, "graphql", ()=>graphql$1);
parcelHelpers.export(exports, "withCustomRequest", ()=>withCustomRequest);
var _request = require("@octokit/request");
var _universalUserAgent = require("universal-user-agent");
const VERSION = "5.0.5";
function _buildMessageForResponseErrors(data) {
    return `Request failed due to following response errors:\n` + data.errors.map((e)=>` - ${e.message}`).join("\n");
}
class GraphqlResponseError extends Error {
    constructor(request, headers, response){
        super(_buildMessageForResponseErrors(response));
        this.request = request;
        this.headers = headers;
        this.response = response;
        this.name = "GraphqlResponseError";
        // Expose the errors and response data in their shorthand properties.
        this.errors = response.errors;
        this.data = response.data;
        // Maintains proper stack trace (only available on V8)
        /* istanbul ignore next */ if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    }
}
const NON_VARIABLE_OPTIONS = [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "query",
    "mediaType"
];
const FORBIDDEN_VARIABLE_OPTIONS = [
    "query",
    "method",
    "url"
];
const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(request, query, options) {
    if (options) {
        if (typeof query === "string" && "query" in options) return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
        for(const key in options){
            if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue;
            return Promise.reject(new Error(`[@octokit/graphql] "${key}" cannot be used as variable name`));
        }
    }
    const parsedOptions = typeof query === "string" ? Object.assign({
        query
    }, options) : query;
    const requestOptions = Object.keys(parsedOptions).reduce((result, key)=>{
        if (NON_VARIABLE_OPTIONS.includes(key)) {
            result[key] = parsedOptions[key];
            return result;
        }
        if (!result.variables) result.variables = {};
        result.variables[key] = parsedOptions[key];
        return result;
    }, {});
    // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
    // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451
    const baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl;
    if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
    return request(requestOptions).then((response)=>{
        if (response.data.errors) {
            const headers = {};
            for (const key of Object.keys(response.headers))headers[key] = response.headers[key];
            throw new GraphqlResponseError(requestOptions, headers, response.data);
        }
        return response.data.data;
    });
}
function withDefaults(request, newDefaults) {
    const newRequest = request.defaults(newDefaults);
    const newApi = (query, options)=>{
        return graphql(newRequest, query, options);
    };
    return Object.assign(newApi, {
        defaults: withDefaults.bind(null, newRequest),
        endpoint: newRequest.endpoint
    });
}
const graphql$1 = withDefaults((0, _request.request), {
    headers: {
        "user-agent": `octokit-graphql.js/${VERSION} ${(0, _universalUserAgent.getUserAgent)()}`
    },
    method: "POST",
    url: "/graphql"
});
function withCustomRequest(customRequest) {
    return withDefaults(customRequest, {
        method: "POST",
        url: "/graphql"
    });
}

},{"@octokit/request":"9G7B5","universal-user-agent":"keCNn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fT4nE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTokenAuth", ()=>createTokenAuth);
const REGEX_IS_INSTALLATION_LEGACY = /^v1\./;
const REGEX_IS_INSTALLATION = /^ghs_/;
const REGEX_IS_USER_TO_SERVER = /^ghu_/;
async function auth(token) {
    const isApp = token.split(/\./).length === 3;
    const isInstallation = REGEX_IS_INSTALLATION_LEGACY.test(token) || REGEX_IS_INSTALLATION.test(token);
    const isUserToServer = REGEX_IS_USER_TO_SERVER.test(token);
    const tokenType = isApp ? "app" : isInstallation ? "installation" : isUserToServer ? "user-to-server" : "oauth";
    return {
        type: "token",
        token: token,
        tokenType
    };
}
/**
 * Prefix token for usage in the Authorization header
 *
 * @param token OAuth token or JSON Web Token
 */ function withAuthorizationPrefix(token) {
    if (token.split(/\./).length === 3) return `bearer ${token}`;
    return `token ${token}`;
}
async function hook(token, request, route, parameters) {
    const endpoint = request.endpoint.merge(route, parameters);
    endpoint.headers.authorization = withAuthorizationPrefix(token);
    return request(endpoint);
}
const createTokenAuth = function createTokenAuth(token) {
    if (!token) throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
    if (typeof token !== "string") throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
    token = token.replace(/^(token|bearer) +/i, "");
    return Object.assign(auth.bind(null, token), {
        hook: hook.bind(null, token)
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bBItS","02IhW"], "02IhW", "parcelRequiref510")

//# sourceMappingURL=index.482f917a.js.map
