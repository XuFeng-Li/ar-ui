import f, { Fragment, useState } from 'react';
import { simplifyFileName, trimSpace, isFn } from '@tytools/util';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {

  var g = 60103;
  exports.Fragment = 60107;

  if ("function" === typeof Symbol && Symbol.for) {
    var h = Symbol.for;
    g = h("react.element");
    exports.Fragment = h("react.fragment");
  }

  var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      n = Object.prototype.hasOwnProperty,
      p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

  function q(c, a, k) {
    var b,
        d = {},
        e = null,
        l = null;
    void 0 !== k && (e = "" + k);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (l = a.ref);

    for (b in a) n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);

    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return {
      $$typeof: g,
      type: c,
      key: e,
      ref: l,
      props: d,
      _owner: m.current
    };
  }

  exports.jsx = q;
  exports.jsxs = q;
});

/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var reactJsxRuntime_development = createCommonjsModule(function (module, exports) {

  if (process.env.NODE_ENV !== "production") {
    (function () {

      var React = f;
      var _assign = objectAssign; // ATTENTION
      // When adding new symbols to this file,
      // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var REACT_ELEMENT_TYPE = 0xeac7;
      var REACT_PORTAL_TYPE = 0xeaca;
      exports.Fragment = 0xeacb;
      var REACT_STRICT_MODE_TYPE = 0xeacc;
      var REACT_PROFILER_TYPE = 0xead2;
      var REACT_PROVIDER_TYPE = 0xeacd;
      var REACT_CONTEXT_TYPE = 0xeace;
      var REACT_FORWARD_REF_TYPE = 0xead0;
      var REACT_SUSPENSE_TYPE = 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = 0xead8;
      var REACT_MEMO_TYPE = 0xead3;
      var REACT_LAZY_TYPE = 0xead4;
      var REACT_BLOCK_TYPE = 0xead9;
      var REACT_SERVER_BLOCK_TYPE = 0xeada;
      var REACT_FUNDAMENTAL_TYPE = 0xead5;
      var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
      var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

      if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        exports.Fragment = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        symbolFor('react.scope');
        symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
      }

      var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';

      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') {
          return null;
        }

        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

        if (typeof maybeIterator === 'function') {
          return maybeIterator;
        }

        return null;
      }

      var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

      function error(format) {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          printWarning('error', format, args);
        }
      }

      function printWarning(level, format, args) {
        // When changing this logic, you might want to also
        // update consoleWithStackDev.www.js as well.
        {
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame.getStackAddendum();

          if (stack !== '') {
            format += '%s';
            args = args.concat([stack]);
          }

          var argsWithFormat = args.map(function (item) {
            return '' + item;
          }); // Careful: RN currently depends on this prefix

          argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          // eslint-disable-next-line react-internal/no-production-logging

          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


      var enableScopeAPI = false; // Experimental Create Event Handle API.

      function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') {
          return true;
        } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


        if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
          return true;
        }

        if (typeof type === 'object' && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
            return true;
          }
        }

        return false;
      }

      function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || '';
        return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
      }

      function getContextName(type) {
        return type.displayName || 'Context';
      }

      function getComponentName(type) {
        if (type == null) {
          // Host root, text node or just invalid type.
          return null;
        }

        {
          if (typeof type.tag === 'number') {
            error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
          }
        }

        if (typeof type === 'function') {
          return type.displayName || type.name || null;
        }

        if (typeof type === 'string') {
          return type;
        }

        switch (type) {
          case exports.Fragment:
            return 'Fragment';

          case REACT_PORTAL_TYPE:
            return 'Portal';

          case REACT_PROFILER_TYPE:
            return 'Profiler';

          case REACT_STRICT_MODE_TYPE:
            return 'StrictMode';

          case REACT_SUSPENSE_TYPE:
            return 'Suspense';

          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList';
        }

        if (typeof type === 'object') {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + '.Consumer';

            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + '.Provider';

            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, 'ForwardRef');

            case REACT_MEMO_TYPE:
              return getComponentName(type.type);

            case REACT_BLOCK_TYPE:
              return getComponentName(type._render);

            case REACT_LAZY_TYPE:
              {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;

                try {
                  return getComponentName(init(payload));
                } catch (x) {
                  return null;
                }
              }
          }
        }

        return null;
      } // Helpers to patch console.logs to avoid logging during side-effect free
      // replaying on render function. This currently only patches the object
      // lazily which won't cover if the log function was extracted eagerly.
      // We could also eagerly patch the method.


      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;

      function disabledLog() {}

      disabledLog.__reactDisabledLog = true;

      function disableLogs() {
        {
          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            }; // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
            /* eslint-enable react-internal/no-production-logging */
          }

          disabledDepth++;
        }
      }

      function reenableLogs() {
        {
          disabledDepth--;

          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            }; // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              log: _assign({}, props, {
                value: prevLog
              }),
              info: _assign({}, props, {
                value: prevInfo
              }),
              warn: _assign({}, props, {
                value: prevWarn
              }),
              error: _assign({}, props, {
                value: prevError
              }),
              group: _assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: _assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: _assign({}, props, {
                value: prevGroupEnd
              })
            });
            /* eslint-enable react-internal/no-production-logging */
          }

          if (disabledDepth < 0) {
            error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
          }
        }
      }

      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;

      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === undefined) {
            // Extract the VM specific prefix used by each line.
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || '';
            }
          } // We use the prefix to ensure our stacks line up with native stack frames.


          return '\n' + prefix + name;
        }
      }

      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }

      function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) {
          return '';
        }

        {
          var frame = componentFrameCache.get(fn);

          if (frame !== undefined) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
          // for warnings.

          ReactCurrentDispatcher.current = null;
          disableLogs();
        }

        try {
          // This should throw.
          if (construct) {
            // Something should be setting the props in the constructor.
            var Fake = function () {
              throw Error();
            }; // $FlowFixMe


            Object.defineProperty(Fake.prototype, 'props', {
              set: function () {
                // We use a throwing setter instead of frozen or non-writable props
                // because that won't throw in a non-strict mode function.
                throw Error();
              }
            });

            if (typeof Reflect === 'object' && Reflect.construct) {
              // We construct a different control for this case to include any extra
              // frames added by the construct call.
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }

              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }

              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }

            fn();
          }
        } catch (sample) {
          // This is inlined manually because closure doesn't do it for us.
          if (sample && control && typeof sample.stack === 'string') {
            // This extracts the first frame from the sample that isn't also in the control.
            // Skipping one frame that we assume is the frame that calls the two.
            var sampleLines = sample.stack.split('\n');
            var controlLines = control.stack.split('\n');
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;

            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              // We expect at least one stack frame to be shared.
              // Typically this will be the root most one. However, stack frames may be
              // cut off due to maximum stack limits. In this case, one maybe cut off
              // earlier than the other. We assume that the sample is longer or the same
              // and there for cut off earlier. So we should find the root most frame in
              // the sample somewhere in the control.
              c--;
            }

            for (; s >= 1 && c >= 0; s--, c--) {
              // Next we find the first one that isn't the same which should be the
              // frame that called our sample function and the control.
              if (sampleLines[s] !== controlLines[c]) {
                // In V8, the first line is describing the message but other VMs don't.
                // If we're about to return the first line, and the control is also on the same
                // line, that's a pretty good indicator that our sample threw at same line as
                // the control. I.e. before we entered the sample frame. So we ignore this result.
                // This can happen if you passed a class to function component, or non-function.
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--; // We may still have similar intermediate frames from the construct call.
                    // The next one that isn't the same should be our match though.

                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                      var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                      {
                        if (typeof fn === 'function') {
                          componentFrameCache.set(fn, _frame);
                        }
                      } // Return the line we found.

                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }

                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.


        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        {
          if (typeof fn === 'function') {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }

      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }

      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }

      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return '';
        }

        if (typeof type === 'function') {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }

        if (typeof type === 'string') {
          return describeBuiltInComponentFrame(type);
        }

        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame('Suspense');

          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame('SuspenseList');
        }

        if (typeof type === 'object') {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);

            case REACT_MEMO_TYPE:
              // Memo may contain any component type so we recursively resolve it.
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

            case REACT_BLOCK_TYPE:
              return describeFunctionComponentFrame(type._render);

            case REACT_LAZY_TYPE:
              {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;

                try {
                  // Lazy may contain any component type so we recursively resolve it.
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
              }
          }
        }

        return '';
      }

      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }

      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          // $FlowFixMe This is okay but Flow doesn't know it.
          var has = Function.call.bind(Object.prototype.hasOwnProperty);

          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
              // fail the render phase where it didn't fail before. So we log it.
              // After these have been cleaned up, we'll let them throw.

              try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                  var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                  err.name = 'Invariant Violation';
                  throw err;
                }

                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
              } catch (ex) {
                error$1 = ex;
              }

              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
              }

              if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }

      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      var didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }

      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== undefined;
      }

      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== undefined;
      }

      function warnIfStringRefCannotBeAutoConverted(config, self) {
        {
          if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);

            if (!didWarnAboutStringRefs[componentName]) {
              error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }

      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function () {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
            }
          };

          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }

      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function () {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
            }
          };

          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, instanceof check
       * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} props
       * @param {*} key
       * @param {string|object} ref
       * @param {*} owner
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @internal
       */


      var ReactElement = function (type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.

          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          }); // self and source are DEV only properties.

          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          }); // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.

          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });

          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      /**
       * https://github.com/reactjs/rfcs/pull/107
       * @param {*} type
       * @param {object} props
       * @param {string} key
       */


      function jsxDEV(type, config, maybeKey, source, self) {
        {
          var propName; // Reserved names are extracted

          var props = {};
          var key = null;
          var ref = null; // Currently, key can be spread in as a prop. This causes a potential
          // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
          // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
          // but as an intermediary step, we will use jsxDEV for everything except
          // <div {...props} key="Hi" />, because we aren't currently able to tell if
          // key is explicitly declared to be undefined or not.

          if (maybeKey !== undefined) {
            key = '' + maybeKey;
          }

          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
          } // Remaining properties are added to a new props object


          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          } // Resolve default props


          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;

            for (propName in defaultProps) {
              if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
              }
            }
          }

          if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }

            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }

          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }

      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }

      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a ReactElement.
       * @final
       */

      function isValidElement(object) {
        {
          return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }

      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentName(ReactCurrentOwner$1.current.type);

            if (name) {
              return '\n\nCheck the render method of `' + name + '`.';
            }
          }

          return '';
        }
      }

      function getSourceInfoErrorAddendum(source) {
        {
          if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
          }

          return '';
        }
      }
      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */


      var ownerHasKeyUseWarning = {};

      function getCurrentComponentErrorInfo(parentType) {
        {
          var info = getDeclarationErrorAddendum();

          if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }

          return info;
        }
      }
      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */


      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }

          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }

          ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
          // property, it may be the creator of the child that's responsible for
          // assigning it a key.

          var childOwner = '';

          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            // Give the component that originally created this child.
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }

          setCurrentlyValidatingElement$1(element);
          error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */


      function validateChildKeys(node, parentType) {
        {
          if (typeof node !== 'object') {
            return;
          }

          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];

              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            // This element was passed in a valid location.
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);

            if (typeof iteratorFn === 'function') {
              // Entry iterators used to provide implicit keys,
              // but now we print a separate warning for them later.
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;

                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */


      function validatePropTypes(element) {
        {
          var type = element.type;

          if (type === null || type === undefined || typeof type === 'string') {
            return;
          }

          var propTypes;

          if (typeof type === 'function') {
            propTypes = type.propTypes;
          } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }

          if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
          } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

            var _name = getComponentName(type);

            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
          }

          if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
            error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
          }
        }
      }
      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */


      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (key !== 'children' && key !== 'key') {
              setCurrentlyValidatingElement$1(fragment);
              error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }

          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
          }
        }
      }

      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
          // succeed and there will likely be errors in render.

          if (!validType) {
            var info = '';

            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
            }

            var sourceInfo = getSourceInfoErrorAddendum(source);

            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }

            var typeString;

            if (type === null) {
              typeString = 'null';
            } else if (Array.isArray(type)) {
              typeString = 'array';
            } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
              info = ' Did you accidentally export a JSX literal instead of a component?';
            } else {
              typeString = typeof type;
            }

            error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
          }

          var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
          // TODO: Drop this when these are no longer allowed as the type argument.

          if (element == null) {
            return element;
          } // Skip key warning if the type isn't valid since our key validation logic
          // doesn't expect a non-string/function type and can throw confusing errors.
          // We don't want exception behavior to differ between dev and prod.
          // (Rendering will throw with a helpful message and as soon as the type is
          // fixed, the key warnings will appear.)


          if (validType) {
            var children = props.children;

            if (children !== undefined) {
              if (isStaticChildren) {
                if (Array.isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    validateChildKeys(children[i], type);
                  }

                  if (Object.freeze) {
                    Object.freeze(children);
                  }
                } else {
                  error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }

          if (type === exports.Fragment) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }

          return element;
        }
      } // These two functions exist to still get child warnings in dev
      // even with the prod transform. This means that jsxDEV is purely
      // opt-in behavior for better messages but that we won't stop
      // giving you warnings if you use production apis.


      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }

      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }

      var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
      // for now we can ship identical prod functions

      var jsxs = jsxWithValidationStatic;
      exports.jsx = jsx;
      exports.jsxs = jsxs;
    })();
  }
});

var jsxRuntime = createCommonjsModule(function (module) {

  if (process.env.NODE_ENV === 'production') {
    module.exports = reactJsxRuntime_production_min;
  } else {
    module.exports = reactJsxRuntime_development;
  }
});

const isZero = (val) => {
    if (val === undefined)
        return false;
    return `${val}` === '0';
};
const SquareMeterInfo = (_a) => {
    var props = __rest(_a, []);
    const { info } = props;
    return (jsxRuntime.jsxs("span", { children: [info || '---', "\u00A0", info && '???'] }, void 0));
};
const defaultKayMap = {
    bedroomNum: 'bedroomNum',
    livingRoomNum: 'livingRoomNum',
    kitchenNum: 'kitchenNum',
    bathroomNum: 'bathroomNum',
    balconyNum: 'balconyNum'
};
const HouseType = (_a) => {
    var props = __rest(_a, []);
    const { data, map = {} } = props;
    if (!data || typeof data === 'object') {
        return (jsxRuntime.jsx("span", {}, void 0));
    }
    const keyMap = Object.assign(Object.assign({}, defaultKayMap), map);
    const bedroom = data[keyMap.bedroomNum] || isZero(data[keyMap.bedroomNum]) ? data[keyMap.bedroomNum] : '--';
    const livingRoom = data[keyMap.livingRoomNum] || isZero(data[keyMap.livingRoomNum]) ? data[keyMap.livingRoomNum] : '--';
    const kitchen = data[keyMap.kitchenNum] || isZero(data[keyMap.kitchenNum]) ? data[keyMap.kitchenNum] : '--';
    const bathroom = data[keyMap.bathroomNum] || isZero(data[keyMap.bathroomNum]) ? data[keyMap.bathroomNum] : '--';
    const balconyNum = data[keyMap.balconyNum] || isZero(data[keyMap.balconyNum]) ? data[keyMap.balconyNum] : '--';
    return (jsxRuntime.jsx("span", { children: `${bedroom}???${livingRoom}???${kitchen}???${bathroom}???${balconyNum}??????` }, void 0));
};
const defaultAreaKayMap = {
    provinceName: 'provinceName',
    cityName: 'cityName',
    districtName: 'districtName'
};
const defaultAreaKayMapTwo = {
    provinceName: 'province',
    cityName: 'city',
    districtName: 'district'
};
const AreaInfo = (_a) => {
    var props = __rest(_a, []);
    const { data, map = {}, address, mode = 'keyNoName' } = props;
    let keyMap = Object.assign(Object.assign({}, defaultAreaKayMap), map);
    if (mode === 'keyNoName') {
        keyMap = Object.assign(Object.assign({}, defaultAreaKayMapTwo), map);
    }
    const province = data[keyMap.provinceName] ? data[keyMap.provinceName] : '--';
    const city = data[keyMap.cityName] ? data[keyMap.cityName] : '--';
    const district = data[keyMap.districtName] ? data[keyMap.districtName] : ''; // ???????????????
    return (jsxRuntime.jsxs("span", { children: [`${province}${city}${district}`, "\u00A0\u00A0", address || ''] }, void 0));
};
const UpLoadInfo = (_a) => {
    var props = __rest(_a, []);
    const { noHref, style = {} } = props;
    let { data } = props;
    if (!data || !data.length)
        return null;
    if (typeof data === 'string')
        data = [data];
    return (jsxRuntime.jsx(Fragment, { children: data.map((ele, i) => {
            let extendStyle = Object.create({});
            if (i) {
                extendStyle.marginLeft = '15px';
            }
            extendStyle = Object.assign(Object.assign({}, extendStyle), style);
            if (noHref) {
                extendStyle.target = '_blank';
            }
            return (jsxRuntime.jsx("a", Object.assign({ href: noHref ? 'javascript:void(0);' : ele, rel: "noopener noreferrer" }, { children: jsxRuntime.jsx("img", { src: ele, alt: 'pic', width: '86px', style: Object.assign({}, extendStyle) }, void 0) }), -i));
        }) }, void 0));
};
const VideoList = (_a) => {
    var props = __rest(_a, []);
    const { style = {} } = props;
    let { list } = props;
    if (!list || !list.length)
        return null;
    if (typeof list === 'string')
        list = [list];
    return (jsxRuntime.jsx(Fragment, { children: list.map((ele, i) => {
            let extendStyle = Object.create({});
            extendStyle.width = 160;
            extendStyle.height = 120;
            extendStyle.style = Object.create({});
            if (i) {
                extendStyle.style.marginLeft = '15px';
            }
            extendStyle = Object.assign(Object.assign({}, extendStyle), style);
            return (jsxRuntime.jsx("video", { style: Object.assign({ display: 'inline-block' }, extendStyle), src: ele, controls: true }, ele));
        }) }, void 0));
};
const MainPic = (_a) => {
    var props = __rest(_a, []);
    const { style = {}, url, isPrivate } = props;
    const { width = 100, height = 86 } = style;
    const w = `${width}`.replace(/px/, '');
    const h = `${height}`.replace(/px/, '');
    if (url && isPrivate) {
        return (jsxRuntime.jsx("a", Object.assign({ href: url, rel: "noopener noreferrer", target: "_blank" }, { children: jsxRuntime.jsx("img", { src: `${url}`, alt: 'pic', height: '100px', width: '86px', style: Object.assign({}, style) }, void 0) }), void 0));
    }
    if (url) {
        return (jsxRuntime.jsx("a", Object.assign({ href: url, rel: "noopener noreferrer", target: "_blank" }, { children: jsxRuntime.jsx("img", { src: `${url}?x-oss-process=image/resize,m_fixed,h_${h},w_${w}`, alt: 'pic', height: '100px', width: '86px', style: Object.assign({}, style) }, void 0) }), void 0));
    }
    return (jsxRuntime.jsx("a", Object.assign({ href: 'javascript:void(0);', rel: "noopener noreferrer", target: "_blank" }, { children: jsxRuntime.jsx("img", { src: 'https://asman-img.oss-cn-hangzhou.aliyuncs.com/noPic_0e7bffac7958f603a8b37fe3cda07499.png', alt: 'pic', height: '100px', width: '86px', style: Object.assign({}, style) }, void 0) }), void 0));
};
const UploadPreview = (_a) => {
    var props = __rest(_a, []);
    const { value, height } = props;
    // eslint-disable-next-line prefer-const
    let { list = [], params = {}, style = {}, innerStyle = {} } = props, rest = __rest(props, ["list", "params", "style", "innerStyle"]);
    if (!list || !list.length) {
        list = value;
    }
    if (!list)
        return null;
    const showImagePreview = () => {
        const tempWindow = window;
        // eslint-disable-next-line no-underscore-dangle
        tempWindow['g_app']['_store'].dispatch({
            type: 'global/showImagePreviewVisiable',
            payload: { list, params }
        });
        // eslint-disable-next-line no-underscore-dangle
        // window.g_app._store.dispatch({
        //   type: 'global/showImagePreviewVisiable',
        //   payload: {list, params}
        // });
    };
    innerStyle = height == null ? Object.assign({}, innerStyle) : Object.assign(Object.assign({}, innerStyle), { height });
    return (jsxRuntime.jsxs("div", Object.assign({}, rest, { style: Object.assign({}, style), className: 'poi tc', onClick: () => {
            showImagePreview();
        } }, { children: [params.type === 'video' ? jsxRuntime.jsx(VideoList, { list: list[0], style: Object.assign({}, innerStyle) }, void 0) :
                jsxRuntime.jsx(UpLoadInfo, { style: Object.assign({}, innerStyle), noHref: true, data: list[0] }, void 0),
            jsxRuntime.jsxs("div", Object.assign({ className: 'bc tc' }, { children: ["\u5171", list.length, params.type === 'video' ? '?????????' : '?????????'] }), void 0)] }), void 0));
};
const UrlLink = (_a) => {
    var props = __rest(_a, []);
    let { list } = props;
    if (!list || list.length <= 0)
        return null;
    if (typeof list === 'string') {
        list = [list];
    }
    // eslint-disable-next-line consistent-return
    return (jsxRuntime.jsx(Fragment, { children: list.map(ele => {
            const url = simplifyFileName(ele, 1);
            return jsxRuntime.jsx("div", { children: jsxRuntime.jsx("a", Object.assign({ href: ele, rel: "noopener noreferrer", target: "_blank" }, { children: url }), void 0) }, void 0);
        }) }, void 0));
};
const BlankLink = (_a) => {
    var props = __rest(_a, []);
    const { href, title } = props;
    return jsxRuntime.jsx("a", Object.assign({ href: href, rel: "noopener noreferrer", target: "_blank" }, { children: title || href }), void 0);
};
const TitleInfo = (_a) => {
    var props = __rest(_a, []);
    const { len, info } = props, rest = __rest(props, ["len", "info"]);
    let tit = info;
    if (info.length && len && info.length >= len) {
        tit = `${tit.substring(0, len)}...`;
    }
    return jsxRuntime.jsx("span", Object.assign({}, rest, { title: info }, { children: tit }), void 0);
};
const BuleWrapper = (_a) => {
    var props = __rest(_a, []);
    const { info, text, color = '#0066FF' } = props;
    if (!info)
        return null;
    return jsxRuntime.jsxs("span", { children: [jsxRuntime.jsx("span", Object.assign({ style: { color } }, { children: info }), void 0), text] }, void 0);
};
const Bule = (_a) => {
    var props = __rest(_a, []);
    const { info, color = '#0066FF' } = props;
    if (!info)
        return null;
    return jsxRuntime.jsx("span", Object.assign({ style: { color } }, { children: info }), void 0);
};
const Red = (_a) => {
    var props = __rest(_a, []);
    const { info, color = '#FF0000' } = props;
    if (!info)
        return null;
    return jsxRuntime.jsx("span", Object.assign({ style: { color } }, { children: info }), void 0);
};
const getColorWrapper = (props) => {
    const { info } = props;
    return info ? jsxRuntime.jsx(BuleWrapper, Object.assign({}, props), void 0) : null;
};
const ShowMoreInfo = (props) => {
    const { info, len } = props;
    let initValue = '';
    let needSubstring = false;
    if (info && info.length > len) {
        initValue = `${info.substring(0, len)}...`;
        needSubstring = true;
    }
    else {
        initValue = info || '';
    }
    const [showInfo, setShowInfo] = useState(initValue);
    const isShowAll = () => showInfo === info;
    const showMore = () => {
        setShowInfo(isShowAll() ? initValue : (info || ''));
    };
    return (jsxRuntime.jsxs("span", { children: [showInfo, " ", needSubstring ?
                jsxRuntime.jsx("span", Object.assign({ className: 'likeA', onClick: () => showMore() }, { children: isShowAll() ? '??????' : '??????' }), void 0) : null, " "] }, void 0));
};
/**
 * xx???xxx??????xxxx
 * @param {*} props
 */
const HouseDesc = (_a) => {
    var props = __rest(_a, []);
    const { buildingNo, unitNo, roomNo } = props;
    return (jsxRuntime.jsx("span", { children: `${buildingNo || '--'}???${unitNo || '--'}??????${roomNo || '--'}???` }, void 0));
};
const SomeRed = (props) => {
    const { info, keyWord } = props;
    if (!info || !keyWord)
        return info;
    const aTrimkey = trimSpace(keyWord);
    const subIndex = info.indexOf(aTrimkey);
    if (subIndex === -1)
        return info;
    const start = info.substring(0, subIndex);
    const end = info.substring(subIndex + aTrimkey.length);
    return (jsxRuntime.jsxs("span", { children: [start, jsxRuntime.jsx("span", Object.assign({ style: { color: 'red' } }, { children: keyWord }), void 0), end] }, void 0));
};
const LRInfo = (_a) => {
    var props = __rest(_a, []);
    const { title, info, width, hasColon = true, onClick, len } = props;
    let { titleStyle = {} } = props;
    if (len) {
        titleStyle = Object.assign(Object.assign({}, titleStyle), { width: `${30 + 12 * len}px`, textAlign: 'right' });
    }
    const titleProps = {
        style: width ? Object.assign(Object.assign({}, titleStyle), { width, textAlign: 'right' }) : Object.assign({}, titleStyle)
    };
    let infoProps = {};
    if (isFn(onClick)) {
        infoProps = { onClick };
    }
    if (!title) {
        return jsxRuntime.jsx("div", Object.assign({}, infoProps, { children: info }), void 0);
    }
    return (jsxRuntime.jsxs("div", Object.assign({ className: 'df' }, { children: [jsxRuntime.jsxs("div", Object.assign({ className: 'g0' }, titleProps, { children: [title || ' -- ', "\u00A0", hasColon ? ':' : '', " \u00A0"] }), void 0),
            jsxRuntime.jsx("div", Object.assign({ className: 'df flex1' }, infoProps, { children: info !== 0 ? info || '---' : info }), void 0)] }), void 0));
};
const BuildingArea = (_a) => {
    var props = __rest(_a, []);
    const { data } = props;
    const { buildingName, houseCode, buildingNo, unitNo, roomNo } = data || {};
    return jsxRuntime.jsxs("span", { children: [`${buildingName || '--'}${houseCode ? `${houseCode}??????` : ''}`, jsxRuntime.jsx("br", {}, void 0), " ", buildingNo ? `${buildingNo || '--'}???${unitNo || '--'}??????${roomNo || '--'}???` : ''] }, void 0);
};

export { AreaInfo, BlankLink, BuildingArea, Bule, BuleWrapper, HouseDesc, HouseType, LRInfo, MainPic, Red, ShowMoreInfo, SomeRed, SquareMeterInfo, TitleInfo, UpLoadInfo, UploadPreview, UrlLink, VideoList, getColorWrapper };
