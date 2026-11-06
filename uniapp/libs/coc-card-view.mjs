import { watch as _e, computed as U, unref as P, onMounted as Pn, nextTick as ke, ref as X, readonly as ei, getCurrentInstance as ti, getCurrentScope as ni, onScopeDispose as ri, shallowRef as oi, h as Oe, defineComponent as M, openBlock as A, createElementBlock as E, createElementVNode as b, createBlock as W, resolveDynamicComponent as Ho, normalizeClass as G, withCtx as R, renderSlot as Pt, resolveComponent as fe, createVNode as $, createTextVNode as Me, toDisplayString as F, createCommentVNode as L, inject as Ue, Fragment as oe, renderList as se, withDirectives as Ke, pushScopeId as ze, popScopeId as Le, reactive as Ve, withKeys as Hr, withModifiers as zt, vModelText as qo, onUnmounted as ai, normalizeStyle as or, Transition as gr, vShow as Jo, onActivated as Ko, provide as et, KeepAlive as Rn } from "vue";
import { ElMessageBox as Ge, ClickOutside as ii, ElMessage as he } from "element-plus";
var li = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function si(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var wr = Error, br = EvalError, _r = RangeError, Sr = ReferenceError, xn = SyntaxError, pt = TypeError, kr = URIError, ui = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, n = Symbol("test"), r = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var o = 42;
  e[n] = o;
  for (n in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(e);
  if (a.length !== 1 || a[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var l = Object.getOwnPropertyDescriptor(e, n);
    if (l.value !== o || l.enumerable !== !0)
      return !1;
  }
  return !0;
}, qr = typeof Symbol < "u" && Symbol, ci = ui, In = function() {
  return typeof qr != "function" || typeof Symbol != "function" || typeof qr("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : ci();
}, Jr = {
  foo: {}
}, pi = Object, En = function() {
  return { __proto__: Jr }.foo === Jr.foo && !({ __proto__: null } instanceof pi);
}, di = "Function.prototype.bind called on incompatible ", fi = Object.prototype.toString, mi = Math.max, yi = "[object Function]", Kr = function(e, n) {
  for (var r = [], o = 0; o < e.length; o += 1)
    r[o] = e[o];
  for (var a = 0; a < n.length; a += 1)
    r[a + e.length] = n[a];
  return r;
}, hi = function(e, n) {
  for (var r = [], o = n, a = 0; o < e.length; o += 1, a += 1)
    r[a] = e[o];
  return r;
}, gi = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, vi = function(e) {
  var n = this;
  if (typeof n != "function" || fi.apply(n) !== yi)
    throw new TypeError(di + n);
  for (var r = hi(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var c = n.apply(
        this,
        Kr(r, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return n.apply(
      e,
      Kr(r, arguments)
    );
  }, l = mi(0, n.length - r.length), s = [], i = 0; i < l; i++)
    s[i] = "$" + i;
  if (o = Function("binder", "return function (" + gi(s, ",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, wi = vi, Ht = Function.prototype.bind || wi, bi = Function.prototype.call, _i = Object.prototype.hasOwnProperty, Si = Ht, Ar = Si.call(bi, _i), q, ki = wr, Ai = br, $i = _r, Pi = Sr, xt = xn, St = pt, xi = kr, Qo = Function, On = function(t) {
  try {
    return Qo('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, ot = Object.getOwnPropertyDescriptor;
if (ot)
  try {
    ot({}, "");
  } catch {
    ot = null;
  }
var Mn = function() {
  throw new St();
}, Ii = ot ? function() {
  try {
    return arguments.callee, Mn;
  } catch {
    try {
      return ot(arguments, "callee").get;
    } catch {
      return Mn;
    }
  }
}() : Mn, ft = In(), Ei = En(), ge = Object.getPrototypeOf || (Ei ? function(t) {
  return t.__proto__;
} : null), vt = {}, Ci = typeof Uint8Array > "u" || !ge ? q : ge(Uint8Array), at = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? q : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? q : ArrayBuffer,
  "%ArrayIteratorPrototype%": ft && ge ? ge([][Symbol.iterator]()) : q,
  "%AsyncFromSyncIteratorPrototype%": q,
  "%AsyncFunction%": vt,
  "%AsyncGenerator%": vt,
  "%AsyncGeneratorFunction%": vt,
  "%AsyncIteratorPrototype%": vt,
  "%Atomics%": typeof Atomics > "u" ? q : Atomics,
  "%BigInt%": typeof BigInt > "u" ? q : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? q : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? q : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? q : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": ki,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Ai,
  "%Float32Array%": typeof Float32Array > "u" ? q : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? q : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? q : FinalizationRegistry,
  "%Function%": Qo,
  "%GeneratorFunction%": vt,
  "%Int8Array%": typeof Int8Array > "u" ? q : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? q : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? q : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": ft && ge ? ge(ge([][Symbol.iterator]())) : q,
  "%JSON%": typeof JSON == "object" ? JSON : q,
  "%Map%": typeof Map > "u" ? q : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !ft || !ge ? q : ge((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? q : Promise,
  "%Proxy%": typeof Proxy > "u" ? q : Proxy,
  "%RangeError%": $i,
  "%ReferenceError%": Pi,
  "%Reflect%": typeof Reflect > "u" ? q : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? q : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !ft || !ge ? q : ge((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? q : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": ft && ge ? ge(""[Symbol.iterator]()) : q,
  "%Symbol%": ft ? Symbol : q,
  "%SyntaxError%": xt,
  "%ThrowTypeError%": Ii,
  "%TypedArray%": Ci,
  "%TypeError%": St,
  "%Uint8Array%": typeof Uint8Array > "u" ? q : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? q : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? q : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? q : Uint32Array,
  "%URIError%": xi,
  "%WeakMap%": typeof WeakMap > "u" ? q : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? q : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? q : WeakSet
};
if (ge)
  try {
    null.error;
  } catch (t) {
    var Di = ge(ge(t));
    at["%Error.prototype%"] = Di;
  }
var Ri = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = On("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = On("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = On("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && ge && (n = ge(o.prototype));
  }
  return at[e] = n, n;
}, Qr = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, qt = Ht, fn = Ar, Oi = qt.call(Function.call, Array.prototype.concat), Mi = qt.call(Function.apply, Array.prototype.splice), Xr = qt.call(Function.call, String.prototype.replace), mn = qt.call(Function.call, String.prototype.slice), Fi = qt.call(Function.call, RegExp.prototype.exec), Ti = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ni = /\\(\\)?/g, Vi = function(e) {
  var n = mn(e, 0, 1), r = mn(e, -1);
  if (n === "%" && r !== "%")
    throw new xt("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new xt("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Xr(e, Ti, function(a, l, s, i) {
    o[o.length] = s ? Xr(i, Ni, "$1") : l || a;
  }), o;
}, Ui = function(e, n) {
  var r = e, o;
  if (fn(Qr, r) && (o = Qr[r], r = "%" + o[0] + "%"), fn(at, r)) {
    var a = at[r];
    if (a === vt && (a = Ri(r)), typeof a > "u" && !n)
      throw new St("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: a
    };
  }
  throw new xt("intrinsic " + e + " does not exist!");
}, $r = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new St("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new St('"allowMissing" argument must be a boolean');
  if (Fi(/^%?[^%]*%?$/, e) === null)
    throw new xt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = Vi(e), o = r.length > 0 ? r[0] : "", a = Ui("%" + o + "%", n), l = a.name, s = a.value, i = !1, u = a.alias;
  u && (o = u[0], Mi(r, Oi([0, 1], u)));
  for (var c = 1, d = !0; c < r.length; c += 1) {
    var f = r[c], h = mn(f, 0, 1), y = mn(f, -1);
    if ((h === '"' || h === "'" || h === "`" || y === '"' || y === "'" || y === "`") && h !== y)
      throw new xt("property names with quotes must have matching quotes");
    if ((f === "constructor" || !d) && (i = !0), o += "." + f, l = "%" + o + "%", fn(at, l))
      s = at[l];
    else if (s != null) {
      if (!(f in s)) {
        if (!n)
          throw new St("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (ot && c + 1 >= r.length) {
        var m = ot(s, f);
        d = !!m, d && "get" in m && !("originalValue" in m.get) ? s = m.get : s = s[f];
      } else
        d = fn(s, f), s = s[f];
      d && !i && (at[l] = s);
    }
  }
  return s;
}, Xo = { exports: {} }, J, Bi = wr, ji = br, zi = _r, Li = Sr, It = xn, kt = pt, Wi = kr, Zo = Function, Fn = function(t) {
  try {
    return Zo('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, it = Object.getOwnPropertyDescriptor;
if (it)
  try {
    it({}, "");
  } catch {
    it = null;
  }
var Tn = function() {
  throw new kt();
}, Gi = it ? function() {
  try {
    return arguments.callee, Tn;
  } catch {
    try {
      return it(arguments, "callee").get;
    } catch {
      return Tn;
    }
  }
}() : Tn, mt = In(), Hi = En(), ve = Object.getPrototypeOf || (Hi ? function(t) {
  return t.__proto__;
} : null), wt = {}, qi = typeof Uint8Array > "u" || !ve ? J : ve(Uint8Array), lt = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? J : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? J : ArrayBuffer,
  "%ArrayIteratorPrototype%": mt && ve ? ve([][Symbol.iterator]()) : J,
  "%AsyncFromSyncIteratorPrototype%": J,
  "%AsyncFunction%": wt,
  "%AsyncGenerator%": wt,
  "%AsyncGeneratorFunction%": wt,
  "%AsyncIteratorPrototype%": wt,
  "%Atomics%": typeof Atomics > "u" ? J : Atomics,
  "%BigInt%": typeof BigInt > "u" ? J : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? J : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? J : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? J : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Bi,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": ji,
  "%Float32Array%": typeof Float32Array > "u" ? J : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? J : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? J : FinalizationRegistry,
  "%Function%": Zo,
  "%GeneratorFunction%": wt,
  "%Int8Array%": typeof Int8Array > "u" ? J : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? J : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? J : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": mt && ve ? ve(ve([][Symbol.iterator]())) : J,
  "%JSON%": typeof JSON == "object" ? JSON : J,
  "%Map%": typeof Map > "u" ? J : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !mt || !ve ? J : ve((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? J : Promise,
  "%Proxy%": typeof Proxy > "u" ? J : Proxy,
  "%RangeError%": zi,
  "%ReferenceError%": Li,
  "%Reflect%": typeof Reflect > "u" ? J : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? J : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !mt || !ve ? J : ve((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? J : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": mt && ve ? ve(""[Symbol.iterator]()) : J,
  "%Symbol%": mt ? Symbol : J,
  "%SyntaxError%": It,
  "%ThrowTypeError%": Gi,
  "%TypedArray%": qi,
  "%TypeError%": kt,
  "%Uint8Array%": typeof Uint8Array > "u" ? J : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? J : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? J : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? J : Uint32Array,
  "%URIError%": Wi,
  "%WeakMap%": typeof WeakMap > "u" ? J : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? J : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? J : WeakSet
};
if (ve)
  try {
    null.error;
  } catch (t) {
    var Ji = ve(ve(t));
    lt["%Error.prototype%"] = Ji;
  }
var Ki = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = Fn("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = Fn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = Fn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && ve && (n = ve(o.prototype));
  }
  return lt[e] = n, n;
}, Zr = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Jt = Ht, yn = Ar, Qi = Jt.call(Function.call, Array.prototype.concat), Xi = Jt.call(Function.apply, Array.prototype.splice), Yr = Jt.call(Function.call, String.prototype.replace), hn = Jt.call(Function.call, String.prototype.slice), Zi = Jt.call(Function.call, RegExp.prototype.exec), Yi = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, el = /\\(\\)?/g, tl = function(e) {
  var n = hn(e, 0, 1), r = hn(e, -1);
  if (n === "%" && r !== "%")
    throw new It("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new It("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Yr(e, Yi, function(a, l, s, i) {
    o[o.length] = s ? Yr(i, el, "$1") : l || a;
  }), o;
}, nl = function(e, n) {
  var r = e, o;
  if (yn(Zr, r) && (o = Zr[r], r = "%" + o[0] + "%"), yn(lt, r)) {
    var a = lt[r];
    if (a === wt && (a = Ki(r)), typeof a > "u" && !n)
      throw new kt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: a
    };
  }
  throw new It("intrinsic " + e + " does not exist!");
}, rl = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new kt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new kt('"allowMissing" argument must be a boolean');
  if (Zi(/^%?[^%]*%?$/, e) === null)
    throw new It("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = tl(e), o = r.length > 0 ? r[0] : "", a = nl("%" + o + "%", n), l = a.name, s = a.value, i = !1, u = a.alias;
  u && (o = u[0], Xi(r, Qi([0, 1], u)));
  for (var c = 1, d = !0; c < r.length; c += 1) {
    var f = r[c], h = hn(f, 0, 1), y = hn(f, -1);
    if ((h === '"' || h === "'" || h === "`" || y === '"' || y === "'" || y === "`") && h !== y)
      throw new It("property names with quotes must have matching quotes");
    if ((f === "constructor" || !d) && (i = !0), o += "." + f, l = "%" + o + "%", yn(lt, l))
      s = lt[l];
    else if (s != null) {
      if (!(f in s)) {
        if (!n)
          throw new kt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (it && c + 1 >= r.length) {
        var m = it(s, f);
        d = !!m, d && "get" in m && !("originalValue" in m.get) ? s = m.get : s = s[f];
      } else
        d = yn(s, f), s = s[f];
      d && !i && (lt[l] = s);
    }
  }
  return s;
}, Nn, eo;
function ol() {
  if (eo) return Nn;
  eo = 1;
  var t, e = wr, n = br, r = _r, o = Sr, a = xn, l = pt, s = kr, i = Function, u = function(Z) {
    try {
      return i('"use strict"; return (' + Z + ").constructor;")();
    } catch {
    }
  }, c = Object.getOwnPropertyDescriptor;
  if (c)
    try {
      c({}, "");
    } catch {
      c = null;
    }
  var d = function() {
    throw new l();
  }, f = c ? function() {
    try {
      return arguments.callee, d;
    } catch {
      try {
        return c(arguments, "callee").get;
      } catch {
        return d;
      }
    }
  }() : d, h = In(), y = En(), m = Object.getPrototypeOf || (y ? function(Z) {
    return Z.__proto__;
  } : null), _ = {}, v = typeof Uint8Array > "u" || !m ? t : m(Uint8Array), w = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
    "%ArrayIteratorPrototype%": h && m ? m([][Symbol.iterator]()) : t,
    "%AsyncFromSyncIteratorPrototype%": t,
    "%AsyncFunction%": _,
    "%AsyncGenerator%": _,
    "%AsyncGeneratorFunction%": _,
    "%AsyncIteratorPrototype%": _,
    "%Atomics%": typeof Atomics > "u" ? t : Atomics,
    "%BigInt%": typeof BigInt > "u" ? t : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? t : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? t : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? t : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": e,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float32Array%": typeof Float32Array > "u" ? t : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? t : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? t : FinalizationRegistry,
    "%Function%": i,
    "%GeneratorFunction%": _,
    "%Int8Array%": typeof Int8Array > "u" ? t : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? t : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? t : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": h && m ? m(m([][Symbol.iterator]())) : t,
    "%JSON%": typeof JSON == "object" ? JSON : t,
    "%Map%": typeof Map > "u" ? t : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !h || !m ? t : m((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? t : Promise,
    "%Proxy%": typeof Proxy > "u" ? t : Proxy,
    "%RangeError%": r,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? t : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? t : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !h || !m ? t : m((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? t : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": h && m ? m(""[Symbol.iterator]()) : t,
    "%Symbol%": h ? Symbol : t,
    "%SyntaxError%": a,
    "%ThrowTypeError%": f,
    "%TypedArray%": v,
    "%TypeError%": l,
    "%Uint8Array%": typeof Uint8Array > "u" ? t : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? t : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? t : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? t : Uint32Array,
    "%URIError%": s,
    "%WeakMap%": typeof WeakMap > "u" ? t : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? t : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? t : WeakSet
  };
  if (m)
    try {
      null.error;
    } catch (Z) {
      var p = m(m(Z));
      w["%Error.prototype%"] = p;
    }
  var g = function Z(z) {
    var V;
    if (z === "%AsyncFunction%")
      V = u("async function () {}");
    else if (z === "%GeneratorFunction%")
      V = u("function* () {}");
    else if (z === "%AsyncGeneratorFunction%")
      V = u("async function* () {}");
    else if (z === "%AsyncGenerator%") {
      var H = Z("%AsyncGeneratorFunction%");
      H && (V = H.prototype);
    } else if (z === "%AsyncIteratorPrototype%") {
      var te = Z("%AsyncGenerator%");
      te && m && (V = m(te.prototype));
    }
    return w[z] = V, V;
  }, k = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, S = Ht, x = Ar, I = S.call(Function.call, Array.prototype.concat), B = S.call(Function.apply, Array.prototype.splice), D = S.call(Function.call, String.prototype.replace), T = S.call(Function.call, String.prototype.slice), O = S.call(Function.call, RegExp.prototype.exec), Q = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, re = /\\(\\)?/g, ne = function(z) {
    var V = T(z, 0, 1), H = T(z, -1);
    if (V === "%" && H !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (H === "%" && V !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var te = [];
    return D(z, Q, function(N, C, Y, le) {
      te[te.length] = Y ? D(le, re, "$1") : C || N;
    }), te;
  }, ae = function(z, V) {
    var H = z, te;
    if (x(k, H) && (te = k[H], H = "%" + te[0] + "%"), x(w, H)) {
      var N = w[H];
      if (N === _ && (N = g(H)), typeof N > "u" && !V)
        throw new l("intrinsic " + z + " exists, but is not available. Please file an issue!");
      return {
        alias: te,
        name: H,
        value: N
      };
    }
    throw new a("intrinsic " + z + " does not exist!");
  };
  return Nn = function(z, V) {
    if (typeof z != "string" || z.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof V != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (O(/^%?[^%]*%?$/, z) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var H = ne(z), te = H.length > 0 ? H[0] : "", N = ae("%" + te + "%", V), C = N.name, Y = N.value, le = !1, Ie = N.alias;
    Ie && (te = Ie[0], B(H, I([0, 1], Ie)));
    for (var Pe = 1, me = !0; Pe < H.length; Pe += 1) {
      var ce = H[Pe], ee = T(ce, 0, 1), pe = T(ce, -1);
      if ((ee === '"' || ee === "'" || ee === "`" || pe === '"' || pe === "'" || pe === "`") && ee !== pe)
        throw new a("property names with quotes must have matching quotes");
      if ((ce === "constructor" || !me) && (le = !0), te += "." + ce, C = "%" + te + "%", x(w, C))
        Y = w[C];
      else if (Y != null) {
        if (!(ce in Y)) {
          if (!V)
            throw new l("base intrinsic for " + z + " exists, but the property is not available.");
          return;
        }
        if (c && Pe + 1 >= H.length) {
          var Ye = c(Y, ce);
          me = !!Ye, me && "get" in Ye && !("originalValue" in Ye.get) ? Y = Ye.get : Y = Y[ce];
        } else
          me = x(Y, ce), Y = Y[ce];
        me && !le && (w[C] = Y);
      }
    }
    return Y;
  }, Nn;
}
var Vn, to;
function Pr() {
  if (to) return Vn;
  to = 1;
  var t = ol(), e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Vn = e, Vn;
}
var al = "Function.prototype.bind called on incompatible ", Un = Array.prototype.slice, il = Object.prototype.toString, ll = "[object Function]", sl = function(e) {
  var n = this;
  if (typeof n != "function" || il.call(n) !== ll)
    throw new TypeError(al + n);
  for (var r = Un.call(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var c = n.apply(
        this,
        r.concat(Un.call(arguments))
      );
      return Object(c) === c ? c : this;
    } else
      return n.apply(
        e,
        r.concat(Un.call(arguments))
      );
  }, l = Math.max(0, n.length - r.length), s = [], i = 0; i < l; i++)
    s.push("$" + i);
  if (o = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, ul = sl, cl = Function.prototype.bind || ul, pl = "Function.prototype.bind called on incompatible ", Bn = Array.prototype.slice, dl = Object.prototype.toString, fl = "[object Function]", ml = function(e) {
  var n = this;
  if (typeof n != "function" || dl.call(n) !== fl)
    throw new TypeError(pl + n);
  for (var r = Bn.call(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var c = n.apply(
        this,
        r.concat(Bn.call(arguments))
      );
      return Object(c) === c ? c : this;
    } else
      return n.apply(
        e,
        r.concat(Bn.call(arguments))
      );
  }, l = Math.max(0, n.length - r.length), s = [], i = 0; i < l; i++)
    s.push("$" + i);
  if (o = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, yl = ml, hl = Function.prototype.bind || yl, gl = hl, vl = gl.call(Function.call, Object.prototype.hasOwnProperty), K, Et = SyntaxError, Yo = Function, At = TypeError, jn = function(t) {
  try {
    return Yo('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, st = Object.getOwnPropertyDescriptor;
if (st)
  try {
    st({}, "");
  } catch {
    st = null;
  }
var zn = function() {
  throw new At();
}, wl = st ? function() {
  try {
    return arguments.callee, zn;
  } catch {
    try {
      return st(arguments, "callee").get;
    } catch {
      return zn;
    }
  }
}() : zn, yt = In(), bl = En(), we = Object.getPrototypeOf || (bl ? function(t) {
  return t.__proto__;
} : null), bt = {}, _l = typeof Uint8Array > "u" || !we ? K : we(Uint8Array), ut = {
  "%AggregateError%": typeof AggregateError > "u" ? K : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? K : ArrayBuffer,
  "%ArrayIteratorPrototype%": yt && we ? we([][Symbol.iterator]()) : K,
  "%AsyncFromSyncIteratorPrototype%": K,
  "%AsyncFunction%": bt,
  "%AsyncGenerator%": bt,
  "%AsyncGeneratorFunction%": bt,
  "%AsyncIteratorPrototype%": bt,
  "%Atomics%": typeof Atomics > "u" ? K : Atomics,
  "%BigInt%": typeof BigInt > "u" ? K : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? K : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? K : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? K : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? K : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? K : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? K : FinalizationRegistry,
  "%Function%": Yo,
  "%GeneratorFunction%": bt,
  "%Int8Array%": typeof Int8Array > "u" ? K : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? K : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? K : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": yt && we ? we(we([][Symbol.iterator]())) : K,
  "%JSON%": typeof JSON == "object" ? JSON : K,
  "%Map%": typeof Map > "u" ? K : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !yt || !we ? K : we((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? K : Promise,
  "%Proxy%": typeof Proxy > "u" ? K : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? K : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? K : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !yt || !we ? K : we((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? K : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": yt && we ? we(""[Symbol.iterator]()) : K,
  "%Symbol%": yt ? Symbol : K,
  "%SyntaxError%": Et,
  "%ThrowTypeError%": wl,
  "%TypedArray%": _l,
  "%TypeError%": At,
  "%Uint8Array%": typeof Uint8Array > "u" ? K : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? K : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? K : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? K : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? K : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? K : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? K : WeakSet
};
if (we)
  try {
    null.error;
  } catch (t) {
    var Sl = we(we(t));
    ut["%Error.prototype%"] = Sl;
  }
var kl = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = jn("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = jn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = jn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && we && (n = we(o.prototype));
  }
  return ut[e] = n, n;
}, no = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Kt = cl, gn = vl, Al = Kt.call(Function.call, Array.prototype.concat), $l = Kt.call(Function.apply, Array.prototype.splice), ro = Kt.call(Function.call, String.prototype.replace), vn = Kt.call(Function.call, String.prototype.slice), Pl = Kt.call(Function.call, RegExp.prototype.exec), xl = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Il = /\\(\\)?/g, El = function(e) {
  var n = vn(e, 0, 1), r = vn(e, -1);
  if (n === "%" && r !== "%")
    throw new Et("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new Et("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return ro(e, xl, function(a, l, s, i) {
    o[o.length] = s ? ro(i, Il, "$1") : l || a;
  }), o;
}, Cl = function(e, n) {
  var r = e, o;
  if (gn(no, r) && (o = no[r], r = "%" + o[0] + "%"), gn(ut, r)) {
    var a = ut[r];
    if (a === bt && (a = kl(r)), typeof a > "u" && !n)
      throw new At("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: a
    };
  }
  throw new Et("intrinsic " + e + " does not exist!");
}, Dl = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new At("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new At('"allowMissing" argument must be a boolean');
  if (Pl(/^%?[^%]*%?$/, e) === null)
    throw new Et("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = El(e), o = r.length > 0 ? r[0] : "", a = Cl("%" + o + "%", n), l = a.name, s = a.value, i = !1, u = a.alias;
  u && (o = u[0], $l(r, Al([0, 1], u)));
  for (var c = 1, d = !0; c < r.length; c += 1) {
    var f = r[c], h = vn(f, 0, 1), y = vn(f, -1);
    if ((h === '"' || h === "'" || h === "`" || y === '"' || y === "'" || y === "`") && h !== y)
      throw new Et("property names with quotes must have matching quotes");
    if ((f === "constructor" || !d) && (i = !0), o += "." + f, l = "%" + o + "%", gn(ut, l))
      s = ut[l];
    else if (s != null) {
      if (!(f in s)) {
        if (!n)
          throw new At("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (st && c + 1 >= r.length) {
        var m = st(s, f);
        d = !!m, d && "get" in m && !("originalValue" in m.get) ? s = m.get : s = s[f];
      } else
        d = gn(s, f), s = s[f];
      d && !i && (ut[l] = s);
    }
  }
  return s;
}, Rl = Dl, un = Rl("%Object.getOwnPropertyDescriptor%", !0);
if (un)
  try {
    un([], "length");
  } catch {
    un = null;
  }
var ea = un, oo = Pr(), Ol = xn, ht = pt, ao = ea, Ml = function(e, n, r) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new ht("`obj` must be an object or a function`");
  if (typeof n != "string" && typeof n != "symbol")
    throw new ht("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new ht("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new ht("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new ht("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new ht("`loose`, if provided, must be a boolean");
  var o = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, l = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, i = !!ao && ao(e, n);
  if (oo)
    oo(e, n, {
      configurable: l === null && i ? i.configurable : !l,
      enumerable: o === null && i ? i.enumerable : !o,
      value: r,
      writable: a === null && i ? i.writable : !a
    });
  else if (s || !o && !a && !l)
    e[n] = r;
  else
    throw new Ol("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, ar = Pr(), ta = function() {
  return !!ar;
};
ta.hasArrayLengthDefineBug = function() {
  if (!ar)
    return null;
  try {
    return ar([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Fl = ta, Tl = rl, io = Ml, Nl = Fl(), lo = ea, so = pt, Vl = Tl("%Math.floor%"), Ul = function(e, n) {
  if (typeof e != "function")
    throw new so("`fn` is not a function");
  if (typeof n != "number" || n < 0 || n > 4294967295 || Vl(n) !== n)
    throw new so("`length` must be a positive 32-bit integer");
  var r = arguments.length > 2 && !!arguments[2], o = !0, a = !0;
  if ("length" in e && lo) {
    var l = lo(e, "length");
    l && !l.configurable && (o = !1), l && !l.writable && (a = !1);
  }
  return (o || a || !r) && (Nl ? io(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n,
    !0,
    !0
  ) : io(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n
  )), e;
};
(function(t) {
  var e = Ht, n = $r, r = Ul, o = pt, a = n("%Function.prototype.apply%"), l = n("%Function.prototype.call%"), s = n("%Reflect.apply%", !0) || e.call(l, a), i = Pr(), u = n("%Math.max%");
  t.exports = function(f) {
    if (typeof f != "function")
      throw new o("a function is required");
    var h = s(e, l, arguments);
    return r(
      h,
      1 + u(0, f.length - (arguments.length - 1)),
      !0
    );
  };
  var c = function() {
    return s(e, a, arguments);
  };
  i ? i(t.exports, "apply", { value: c }) : t.exports.apply = c;
})(Xo);
var Bl = Xo.exports, na = $r, ra = Bl, jl = ra(na("String.prototype.indexOf")), zl = function(e, n) {
  var r = na(e, !!n);
  return typeof r == "function" && jl(e, ".prototype.") > -1 ? ra(r) : r;
};
const Ll = {}, Wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ll
}, Symbol.toStringTag, { value: "Module" })), Gl = /* @__PURE__ */ si(Wl);
var xr = typeof Map == "function" && Map.prototype, Ln = Object.getOwnPropertyDescriptor && xr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, wn = xr && Ln && typeof Ln.get == "function" ? Ln.get : null, uo = xr && Map.prototype.forEach, Ir = typeof Set == "function" && Set.prototype, Wn = Object.getOwnPropertyDescriptor && Ir ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, bn = Ir && Wn && typeof Wn.get == "function" ? Wn.get : null, co = Ir && Set.prototype.forEach, Hl = typeof WeakMap == "function" && WeakMap.prototype, Nt = Hl ? WeakMap.prototype.has : null, ql = typeof WeakSet == "function" && WeakSet.prototype, Vt = ql ? WeakSet.prototype.has : null, Jl = typeof WeakRef == "function" && WeakRef.prototype, po = Jl ? WeakRef.prototype.deref : null, Kl = Boolean.prototype.valueOf, Ql = Object.prototype.toString, Xl = Function.prototype.toString, Zl = String.prototype.match, Er = String.prototype.slice, qe = String.prototype.replace, Yl = String.prototype.toUpperCase, fo = String.prototype.toLowerCase, oa = RegExp.prototype.test, mo = Array.prototype.concat, Ne = Array.prototype.join, es = Array.prototype.slice, yo = Math.floor, ir = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Gn = Object.getOwnPropertySymbols, lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Ct = typeof Symbol == "function" && typeof Symbol.iterator == "object", Se = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ct || !0) ? Symbol.toStringTag : null, aa = Object.prototype.propertyIsEnumerable, ho = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function go(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || oa.call(/e/, e))
    return e;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var r = t < 0 ? -yo(-t) : yo(t);
    if (r !== t) {
      var o = String(r), a = Er.call(e, o.length + 1);
      return qe.call(o, n, "$&_") + "." + qe.call(qe.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return qe.call(e, n, "$&_");
}
var sr = Gl, vo = sr.custom, wo = la(vo) ? vo : null, ts = function t(e, n, r, o) {
  var a = n || {};
  if (He(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (He(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var l = He(a, "customInspect") ? a.customInspect : !0;
  if (typeof l != "boolean" && l !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (He(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (He(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return ua(e, a);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var i = String(e);
    return s ? go(e, i) : i;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return s ? go(e, u) : u;
  }
  var c = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof r > "u" && (r = 0), r >= c && c > 0 && typeof e == "object")
    return ur(e) ? "[Array]" : "[Object]";
  var d = ws(a, r);
  if (typeof o > "u")
    o = [];
  else if (sa(o, e) >= 0)
    return "[Circular]";
  function f(Q, re, ne) {
    if (re && (o = es.call(o), o.push(re)), ne) {
      var ae = {
        depth: a.depth
      };
      return He(a, "quoteStyle") && (ae.quoteStyle = a.quoteStyle), t(Q, ae, r + 1, o);
    }
    return t(Q, a, r + 1, o);
  }
  if (typeof e == "function" && !bo(e)) {
    var h = cs(e), y = Qt(e, f);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (y.length > 0 ? " { " + Ne.call(y, ", ") + " }" : "");
  }
  if (la(e)) {
    var m = Ct ? qe.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : lr.call(e);
    return typeof e == "object" && !Ct ? Ft(m) : m;
  }
  if (hs(e)) {
    for (var _ = "<" + fo.call(String(e.nodeName)), v = e.attributes || [], w = 0; w < v.length; w++)
      _ += " " + v[w].name + "=" + ia(ns(v[w].value), "double", a);
    return _ += ">", e.childNodes && e.childNodes.length && (_ += "..."), _ += "</" + fo.call(String(e.nodeName)) + ">", _;
  }
  if (ur(e)) {
    if (e.length === 0)
      return "[]";
    var p = Qt(e, f);
    return d && !vs(p) ? "[" + cr(p, d) + "]" : "[ " + Ne.call(p, ", ") + " ]";
  }
  if (os(e)) {
    var g = Qt(e, f);
    return !("cause" in Error.prototype) && "cause" in e && !aa.call(e, "cause") ? "{ [" + String(e) + "] " + Ne.call(mo.call("[cause]: " + f(e.cause), g), ", ") + " }" : g.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Ne.call(g, ", ") + " }";
  }
  if (typeof e == "object" && l) {
    if (wo && typeof e[wo] == "function" && sr)
      return sr(e, { depth: c - r });
    if (l !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (ps(e)) {
    var k = [];
    return uo && uo.call(e, function(Q, re) {
      k.push(f(re, e, !0) + " => " + f(Q, e));
    }), _o("Map", wn.call(e), k, d);
  }
  if (ms(e)) {
    var S = [];
    return co && co.call(e, function(Q) {
      S.push(f(Q, e));
    }), _o("Set", bn.call(e), S, d);
  }
  if (ds(e))
    return Hn("WeakMap");
  if (ys(e))
    return Hn("WeakSet");
  if (fs(e))
    return Hn("WeakRef");
  if (is(e))
    return Ft(f(Number(e)));
  if (ss(e))
    return Ft(f(ir.call(e)));
  if (ls(e))
    return Ft(Kl.call(e));
  if (as(e))
    return Ft(f(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === li)
    return "{ [object globalThis] }";
  if (!rs(e) && !bo(e)) {
    var x = Qt(e, f), I = ho ? ho(e) === Object.prototype : e instanceof Object || e.constructor === Object, B = e instanceof Object ? "" : "null prototype", D = !I && Se && Object(e) === e && Se in e ? Er.call(Qe(e), 8, -1) : B ? "Object" : "", T = I || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", O = T + (D || B ? "[" + Ne.call(mo.call([], D || [], B || []), ": ") + "] " : "");
    return x.length === 0 ? O + "{}" : d ? O + "{" + cr(x, d) + "}" : O + "{ " + Ne.call(x, ", ") + " }";
  }
  return String(e);
};
function ia(t, e, n) {
  var r = (n.quoteStyle || e) === "double" ? '"' : "'";
  return r + t + r;
}
function ns(t) {
  return qe.call(String(t), /"/g, "&quot;");
}
function ur(t) {
  return Qe(t) === "[object Array]" && (!Se || !(typeof t == "object" && Se in t));
}
function rs(t) {
  return Qe(t) === "[object Date]" && (!Se || !(typeof t == "object" && Se in t));
}
function bo(t) {
  return Qe(t) === "[object RegExp]" && (!Se || !(typeof t == "object" && Se in t));
}
function os(t) {
  return Qe(t) === "[object Error]" && (!Se || !(typeof t == "object" && Se in t));
}
function as(t) {
  return Qe(t) === "[object String]" && (!Se || !(typeof t == "object" && Se in t));
}
function is(t) {
  return Qe(t) === "[object Number]" && (!Se || !(typeof t == "object" && Se in t));
}
function ls(t) {
  return Qe(t) === "[object Boolean]" && (!Se || !(typeof t == "object" && Se in t));
}
function la(t) {
  if (Ct)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !lr)
    return !1;
  try {
    return lr.call(t), !0;
  } catch {
  }
  return !1;
}
function ss(t) {
  if (!t || typeof t != "object" || !ir)
    return !1;
  try {
    return ir.call(t), !0;
  } catch {
  }
  return !1;
}
var us = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function He(t, e) {
  return us.call(t, e);
}
function Qe(t) {
  return Ql.call(t);
}
function cs(t) {
  if (t.name)
    return t.name;
  var e = Zl.call(Xl.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function sa(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var n = 0, r = t.length; n < r; n++)
    if (t[n] === e)
      return n;
  return -1;
}
function ps(t) {
  if (!wn || !t || typeof t != "object")
    return !1;
  try {
    wn.call(t);
    try {
      bn.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function ds(t) {
  if (!Nt || !t || typeof t != "object")
    return !1;
  try {
    Nt.call(t, Nt);
    try {
      Vt.call(t, Vt);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function fs(t) {
  if (!po || !t || typeof t != "object")
    return !1;
  try {
    return po.call(t), !0;
  } catch {
  }
  return !1;
}
function ms(t) {
  if (!bn || !t || typeof t != "object")
    return !1;
  try {
    bn.call(t);
    try {
      wn.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function ys(t) {
  if (!Vt || !t || typeof t != "object")
    return !1;
  try {
    Vt.call(t, Vt);
    try {
      Nt.call(t, Nt);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function hs(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function ua(t, e) {
  if (t.length > e.maxStringLength) {
    var n = t.length - e.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return ua(Er.call(t, 0, e.maxStringLength), e) + r;
  }
  var o = qe.call(qe.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, gs);
  return ia(o, "single", e);
}
function gs(t) {
  var e = t.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Yl.call(e.toString(16));
}
function Ft(t) {
  return "Object(" + t + ")";
}
function Hn(t) {
  return t + " { ? }";
}
function _o(t, e, n, r) {
  var o = r ? cr(n, r) : Ne.call(n, ", ");
  return t + " (" + e + ") {" + o + "}";
}
function vs(t) {
  for (var e = 0; e < t.length; e++)
    if (sa(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function ws(t, e) {
  var n;
  if (t.indent === "	")
    n = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    n = Ne.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: Ne.call(Array(e + 1), n)
  };
}
function cr(t, e) {
  if (t.length === 0)
    return "";
  var n = `
` + e.prev + e.base;
  return n + Ne.call(t, "," + n) + `
` + e.prev;
}
function Qt(t, e) {
  var n = ur(t), r = [];
  if (n) {
    r.length = t.length;
    for (var o = 0; o < t.length; o++)
      r[o] = He(t, o) ? e(t[o], t) : "";
  }
  var a = typeof Gn == "function" ? Gn(t) : [], l;
  if (Ct) {
    l = {};
    for (var s = 0; s < a.length; s++)
      l["$" + a[s]] = a[s];
  }
  for (var i in t)
    He(t, i) && (n && String(Number(i)) === i && i < t.length || Ct && l["$" + i] instanceof Symbol || (oa.call(/[^\w$]/, i) ? r.push(e(i, t) + ": " + e(t[i], t)) : r.push(i + ": " + e(t[i], t))));
  if (typeof Gn == "function")
    for (var u = 0; u < a.length; u++)
      aa.call(t, a[u]) && r.push("[" + e(a[u]) + "]: " + e(t[a[u]], t));
  return r;
}
var ca = $r, Rt = zl, bs = ts, _s = pt, Xt = ca("%WeakMap%", !0), Zt = ca("%Map%", !0), Ss = Rt("WeakMap.prototype.get", !0), ks = Rt("WeakMap.prototype.set", !0), As = Rt("WeakMap.prototype.has", !0), $s = Rt("Map.prototype.get", !0), Ps = Rt("Map.prototype.set", !0), xs = Rt("Map.prototype.has", !0), Cr = function(t, e) {
  for (var n = t, r; (r = n.next) !== null; n = r)
    if (r.key === e)
      return n.next = r.next, r.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = r, r;
}, Is = function(t, e) {
  var n = Cr(t, e);
  return n && n.value;
}, Es = function(t, e, n) {
  var r = Cr(t, e);
  r ? r.value = n : t.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: n
  };
}, Cs = function(t, e) {
  return !!Cr(t, e);
}, Ds = function() {
  var e, n, r, o = {
    assert: function(a) {
      if (!o.has(a))
        throw new _s("Side channel does not contain " + bs(a));
    },
    get: function(a) {
      if (Xt && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return Ss(e, a);
      } else if (Zt) {
        if (n)
          return $s(n, a);
      } else if (r)
        return Is(r, a);
    },
    has: function(a) {
      if (Xt && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return As(e, a);
      } else if (Zt) {
        if (n)
          return xs(n, a);
      } else if (r)
        return Cs(r, a);
      return !1;
    },
    set: function(a, l) {
      Xt && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new Xt()), ks(e, a, l)) : Zt ? (n || (n = new Zt()), Ps(n, a, l)) : (r || (r = { key: {}, next: null }), Es(r, a, l));
    }
  };
  return o;
}, Rs = String.prototype.replace, Os = /%20/g, qn = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Dr = {
  default: qn.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return Rs.call(t, Os, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: qn.RFC1738,
  RFC3986: qn.RFC3986
}, Ms = Dr, Jn = Object.prototype.hasOwnProperty, rt = Array.isArray, Fe = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), Fs = function(e) {
  for (; e.length > 1; ) {
    var n = e.pop(), r = n.obj[n.prop];
    if (rt(r)) {
      for (var o = [], a = 0; a < r.length; ++a)
        typeof r[a] < "u" && o.push(r[a]);
      n.obj[n.prop] = o;
    }
  }
}, pa = function(e, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (r[o] = e[o]);
  return r;
}, Ts = function t(e, n, r) {
  if (!n)
    return e;
  if (typeof n != "object") {
    if (rt(e))
      e.push(n);
    else if (e && typeof e == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !Jn.call(Object.prototype, n)) && (e[n] = !0);
    else
      return [e, n];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(n);
  var o = e;
  return rt(e) && !rt(n) && (o = pa(e, r)), rt(e) && rt(n) ? (n.forEach(function(a, l) {
    if (Jn.call(e, l)) {
      var s = e[l];
      s && typeof s == "object" && a && typeof a == "object" ? e[l] = t(s, a, r) : e.push(a);
    } else
      e[l] = a;
  }), e) : Object.keys(n).reduce(function(a, l) {
    var s = n[l];
    return Jn.call(a, l) ? a[l] = t(a[l], s, r) : a[l] = s, a;
  }, o);
}, Ns = function(e, n) {
  return Object.keys(n).reduce(function(r, o) {
    return r[o] = n[o], r;
  }, e);
}, Vs = function(t, e, n) {
  var r = t.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, Us = function(e, n, r, o, a) {
  if (e.length === 0)
    return e;
  var l = e;
  if (typeof e == "symbol" ? l = Symbol.prototype.toString.call(e) : typeof e != "string" && (l = String(e)), r === "iso-8859-1")
    return escape(l).replace(/%u[0-9a-f]{4}/gi, function(c) {
      return "%26%23" + parseInt(c.slice(2), 16) + "%3B";
    });
  for (var s = "", i = 0; i < l.length; ++i) {
    var u = l.charCodeAt(i);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || a === Ms.RFC1738 && (u === 40 || u === 41)) {
      s += l.charAt(i);
      continue;
    }
    if (u < 128) {
      s = s + Fe[u];
      continue;
    }
    if (u < 2048) {
      s = s + (Fe[192 | u >> 6] + Fe[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      s = s + (Fe[224 | u >> 12] + Fe[128 | u >> 6 & 63] + Fe[128 | u & 63]);
      continue;
    }
    i += 1, u = 65536 + ((u & 1023) << 10 | l.charCodeAt(i) & 1023), s += Fe[240 | u >> 18] + Fe[128 | u >> 12 & 63] + Fe[128 | u >> 6 & 63] + Fe[128 | u & 63];
  }
  return s;
}, Bs = function(e) {
  for (var n = [{ obj: { o: e }, prop: "o" }], r = [], o = 0; o < n.length; ++o)
    for (var a = n[o], l = a.obj[a.prop], s = Object.keys(l), i = 0; i < s.length; ++i) {
      var u = s[i], c = l[u];
      typeof c == "object" && c !== null && r.indexOf(c) === -1 && (n.push({ obj: l, prop: u }), r.push(c));
    }
  return Fs(n), e;
}, js = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, zs = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, Ls = function(e, n) {
  return [].concat(e, n);
}, Ws = function(e, n) {
  if (rt(e)) {
    for (var r = [], o = 0; o < e.length; o += 1)
      r.push(n(e[o]));
    return r;
  }
  return n(e);
}, da = {
  arrayToObject: pa,
  assign: Ns,
  combine: Ls,
  compact: Bs,
  decode: Vs,
  encode: Us,
  isBuffer: zs,
  isRegExp: js,
  maybeMap: Ws,
  merge: Ts
}, fa = Ds, cn = da, Ut = Dr, Gs = Object.prototype.hasOwnProperty, ma = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, n) {
    return e + "[" + n + "]";
  },
  repeat: function(e) {
    return e;
  }
}, Te = Array.isArray, Hs = Array.prototype.push, ya = function(t, e) {
  Hs.apply(t, Te(e) ? e : [e]);
}, qs = Date.prototype.toISOString, So = Ut.default, de = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: cn.encode,
  encodeValuesOnly: !1,
  format: So,
  formatter: Ut.formatters[So],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return qs.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Js = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Kn = {}, Ks = function t(e, n, r, o, a, l, s, i, u, c, d, f, h, y, m, _, v, w) {
  for (var p = e, g = w, k = 0, S = !1; (g = g.get(Kn)) !== void 0 && !S; ) {
    var x = g.get(e);
    if (k += 1, typeof x < "u") {
      if (x === k)
        throw new RangeError("Cyclic object value");
      S = !0;
    }
    typeof g.get(Kn) > "u" && (k = 0);
  }
  if (typeof c == "function" ? p = c(n, p) : p instanceof Date ? p = h(p) : r === "comma" && Te(p) && (p = cn.maybeMap(p, function(H) {
    return H instanceof Date ? h(H) : H;
  })), p === null) {
    if (l)
      return u && !_ ? u(n, de.encoder, v, "key", y) : n;
    p = "";
  }
  if (Js(p) || cn.isBuffer(p)) {
    if (u) {
      var I = _ ? n : u(n, de.encoder, v, "key", y);
      return [m(I) + "=" + m(u(p, de.encoder, v, "value", y))];
    }
    return [m(n) + "=" + m(String(p))];
  }
  var B = [];
  if (typeof p > "u")
    return B;
  var D;
  if (r === "comma" && Te(p))
    _ && u && (p = cn.maybeMap(p, u)), D = [{ value: p.length > 0 ? p.join(",") || null : void 0 }];
  else if (Te(c))
    D = c;
  else {
    var T = Object.keys(p);
    D = d ? T.sort(d) : T;
  }
  var O = i ? n.replace(/\./g, "%2E") : n, Q = o && Te(p) && p.length === 1 ? O + "[]" : O;
  if (a && Te(p) && p.length === 0)
    return Q + "[]";
  for (var re = 0; re < D.length; ++re) {
    var ne = D[re], ae = typeof ne == "object" && typeof ne.value < "u" ? ne.value : p[ne];
    if (!(s && ae === null)) {
      var Z = f && i ? ne.replace(/\./g, "%2E") : ne, z = Te(p) ? typeof r == "function" ? r(Q, Z) : Q : Q + (f ? "." + Z : "[" + Z + "]");
      w.set(e, k);
      var V = fa();
      V.set(Kn, w), ya(B, t(
        ae,
        z,
        r,
        o,
        a,
        l,
        s,
        i,
        r === "comma" && _ && Te(p) ? null : u,
        c,
        d,
        f,
        h,
        y,
        m,
        _,
        v,
        V
      ));
    }
  }
  return B;
}, Qs = function(e) {
  if (!e)
    return de;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = e.charset || de.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = Ut.default;
  if (typeof e.format < "u") {
    if (!Gs.call(Ut.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    r = e.format;
  }
  var o = Ut.formatters[r], a = de.filter;
  (typeof e.filter == "function" || Te(e.filter)) && (a = e.filter);
  var l;
  if (e.arrayFormat in ma ? l = e.arrayFormat : "indices" in e ? l = e.indices ? "indices" : "repeat" : l = de.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var s = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : de.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : de.addQueryPrefix,
    allowDots: s,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : de.allowEmptyArrays,
    arrayFormat: l,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : de.charsetSentinel,
    commaRoundTrip: e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? de.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : de.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : de.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : de.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : de.encodeValuesOnly,
    filter: a,
    format: r,
    formatter: o,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : de.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : de.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : de.strictNullHandling
  };
}, Xs = function(t, e) {
  var n = t, r = Qs(e), o, a;
  typeof r.filter == "function" ? (a = r.filter, n = a("", n)) : Te(r.filter) && (a = r.filter, o = a);
  var l = [];
  if (typeof n != "object" || n === null)
    return "";
  var s = ma[r.arrayFormat], i = s === "comma" && r.commaRoundTrip;
  o || (o = Object.keys(n)), r.sort && o.sort(r.sort);
  for (var u = fa(), c = 0; c < o.length; ++c) {
    var d = o[c];
    r.skipNulls && n[d] === null || ya(l, Ks(
      n[d],
      d,
      s,
      i,
      r.allowEmptyArrays,
      r.strictNullHandling,
      r.skipNulls,
      r.encodeDotInKeys,
      r.encode ? r.encoder : null,
      r.filter,
      r.sort,
      r.allowDots,
      r.serializeDate,
      r.format,
      r.formatter,
      r.encodeValuesOnly,
      r.charset,
      u
    ));
  }
  var f = l.join(r.delimiter), h = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), f.length > 0 ? h + f : "";
}, Dt = da, pr = Object.prototype.hasOwnProperty, Zs = Array.isArray, ie = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !0,
  decoder: Dt.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Ys = function(t) {
  return t.replace(/&#(\d+);/g, function(e, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, ha = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, eu = "utf8=%26%2310003%3B", tu = "utf8=%E2%9C%93", nu = function(e, n) {
  var r = { __proto__: null }, o = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, l = o.split(n.delimiter, a), s = -1, i, u = n.charset;
  if (n.charsetSentinel)
    for (i = 0; i < l.length; ++i)
      l[i].indexOf("utf8=") === 0 && (l[i] === tu ? u = "utf-8" : l[i] === eu && (u = "iso-8859-1"), s = i, i = l.length);
  for (i = 0; i < l.length; ++i)
    if (i !== s) {
      var c = l[i], d = c.indexOf("]="), f = d === -1 ? c.indexOf("=") : d + 1, h, y;
      f === -1 ? (h = n.decoder(c, ie.decoder, u, "key"), y = n.strictNullHandling ? null : "") : (h = n.decoder(c.slice(0, f), ie.decoder, u, "key"), y = Dt.maybeMap(
        ha(c.slice(f + 1), n),
        function(_) {
          return n.decoder(_, ie.decoder, u, "value");
        }
      )), y && n.interpretNumericEntities && u === "iso-8859-1" && (y = Ys(y)), c.indexOf("[]=") > -1 && (y = Zs(y) ? [y] : y);
      var m = pr.call(r, h);
      m && n.duplicates === "combine" ? r[h] = Dt.combine(r[h], y) : (!m || n.duplicates === "last") && (r[h] = y);
    }
  return r;
}, ru = function(t, e, n, r) {
  for (var o = r ? e : ha(e, n), a = t.length - 1; a >= 0; --a) {
    var l, s = t[a];
    if (s === "[]" && n.parseArrays)
      l = n.allowEmptyArrays && o === "" ? [] : [].concat(o);
    else {
      l = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var i = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, u = n.decodeDotInKeys ? i.replace(/%2E/g, ".") : i, c = parseInt(u, 10);
      !n.parseArrays && u === "" ? l = { 0: o } : !isNaN(c) && s !== u && String(c) === u && c >= 0 && n.parseArrays && c <= n.arrayLimit ? (l = [], l[c] = o) : u !== "__proto__" && (l[u] = o);
    }
    o = l;
  }
  return o;
}, ou = function(e, n, r, o) {
  if (e) {
    var a = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, l = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, i = r.depth > 0 && l.exec(a), u = i ? a.slice(0, i.index) : a, c = [];
    if (u) {
      if (!r.plainObjects && pr.call(Object.prototype, u) && !r.allowPrototypes)
        return;
      c.push(u);
    }
    for (var d = 0; r.depth > 0 && (i = s.exec(a)) !== null && d < r.depth; ) {
      if (d += 1, !r.plainObjects && pr.call(Object.prototype, i[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      c.push(i[1]);
    }
    return i && c.push("[" + a.slice(i.index) + "]"), ru(c, n, r, o);
  }
}, au = function(e) {
  if (!e)
    return ie;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof e.charset > "u" ? ie.charset : e.charset, r = typeof e.duplicates > "u" ? ie.duplicates : e.duplicates;
  if (r !== "combine" && r !== "first" && r !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var o = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : ie.allowDots : !!e.allowDots;
  return {
    allowDots: o,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : ie.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : ie.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : ie.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : ie.arrayLimit,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : ie.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : ie.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : ie.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : ie.decoder,
    delimiter: typeof e.delimiter == "string" || Dt.isRegExp(e.delimiter) ? e.delimiter : ie.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : ie.depth,
    duplicates: r,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : ie.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : ie.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : ie.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : ie.strictNullHandling
  };
}, iu = function(t, e) {
  var n = au(e);
  if (t === "" || t === null || typeof t > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof t == "string" ? nu(t, n) : t, o = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(r), l = 0; l < a.length; ++l) {
    var s = a[l], i = ou(s, r[s], n, typeof t == "string");
    o = Dt.merge(o, i, n);
  }
  return n.allowSparse === !0 ? o : Dt.compact(o);
}, lu = Xs, su = iu, uu = Dr, cu = {
  formats: uu,
  parse: su,
  stringify: lu
};
const pu = /* @__PURE__ */ vr(cu), Rr = [
  {
    name: "徒手格斗",
    skill: "格斗(斗殴)",
    dam: "1D3+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "弓箭",
    skill: "射击(弓弩)",
    dam: "1D6+半DB",
    tho: 0,
    range: "30",
    round: "1",
    num: "1",
    price: "7/75",
    err: "97",
    time: "1920s，现代"
  },
  {
    name: "黄铜指虎",
    skill: "格斗(斗殴)",
    dam: "1D3+1+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "1/10",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "长鞭",
    skill: "格斗(鞭)",
    dam: "1D3+半DB",
    tho: 0,
    range: "3",
    round: "1",
    num: "",
    price: "5/50",
    err: "97",
    time: "1920s"
  },
  {
    name: "燃烧的火把",
    skill: "格斗(斗殴)",
    dam: "1D6+燃烧",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "0.05/0.5",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "链锯",
    skill: "格斗(链锯)",
    dam: "2D8",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "-/300",
    err: "95",
    time: "现代"
  },
  {
    name: "包革金属棒(大头棍、护身棒)",
    skill: "格斗(斗殴)",
    dam: "1D8+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "2/15",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "大棒(棒球棒、拨火棍)",
    skill: "格斗(斗殴)",
    dam: "1D8+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "3/35",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "小型棍棒(警棍)",
    skill: "格斗(斗殴)",
    dam: "1D6+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "3/35",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "弩",
    skill: "射击(弓弩)",
    dam: "1D8+2",
    tho: 1,
    range: "50",
    round: "1/2",
    num: "1",
    price: "10/100",
    err: "96",
    time: "1920s，现代"
  },
  {
    name: "绞索",
    skill: "格斗(绞索)",
    dam: "1D6+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "0.5/3",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "手斧/手镰",
    skill: "格斗(斧)",
    dam: "1D6+1+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "3/9",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "大型刀(甘蔗刀等)",
    skill: "格斗(斗殴)",
    dam: "1D8+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "4/50",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "中型刀(切肉餐刀等)",
    skill: "格斗(斗殴)",
    dam: "1D4+2+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "2/15",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "小型刀(弹簧折叠刀等)",
    skill: "格斗(斗殴)",
    dam: "1D4+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "2/6",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "220V通电导线",
    skill: "格斗(斗殴)",
    dam: "2D8+晕",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "",
    err: "95",
    time: "现代"
  },
  {
    name: "催泪喷雾",
    skill: "格斗(斗殴)",
    dam: "晕",
    tho: 0,
    range: "2",
    round: "1",
    num: "25",
    price: "-/10",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "双节棍",
    skill: "格斗(链枷)",
    dam: "1D8+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "1/10",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "投石",
    skill: "投掷",
    dam: "1D4+半DB",
    tho: 0,
    range: "STR/5m",
    round: "1",
    num: "",
    price: "",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "手里剑",
    skill: "投掷",
    dam: "1D3+DB",
    tho: 1,
    range: "STR/5m",
    round: "1/2",
    num: "1",
    price: "750",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "矛、骑士长枪",
    skill: "格斗(矛)",
    dam: "1D8+1",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "25/150",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "投矛",
    skill: "投掷",
    dam: "1D8+半DB",
    tho: 1,
    range: "STR/5m",
    round: "1",
    num: "",
    price: "42760",
    err: "",
    time: "稀有"
  },
  {
    name: "大型剑(马刀)",
    skill: "格斗(刀剑)",
    dam: "1D8+1+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "30/75",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "中型剑(佩剑、重剑)",
    skill: "格斗(刀剑)",
    dam: "1D6+1+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "15/100",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "轻型剑(花剑、剑杖)",
    skill: "格斗(刀剑)",
    dam: "1D6+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "25/100",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "电棍",
    skill: "格斗(斗殴)",
    dam: "1D3+晕",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "-/200",
    err: "97",
    time: "现代"
  },
  {
    name: "电击枪",
    skill: "射击(手枪)",
    dam: "1D3+晕",
    tho: 0,
    range: "5",
    round: "1",
    num: "3",
    price: "-/400",
    err: "95",
    time: "现代"
  },
  {
    name: "战斗回力镖",
    skill: "投掷",
    dam: "1D8+半DB",
    tho: 0,
    range: "STR/5m",
    round: "1",
    num: "",
    price: "2/4",
    err: "",
    time: "稀有"
  },
  {
    name: "伐木斧",
    skill: "格斗(斧)",
    dam: "1D8+2+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "5/10",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "燧发手枪",
    skill: "射击(手枪)",
    dam: "1D6+1",
    tho: 1,
    range: "10",
    round: "1/4",
    num: "1",
    price: "30/300",
    err: "95",
    time: "稀有"
  },
  {
    name: ".22(5.6mm)小型自动手枪",
    skill: "射击(手枪)",
    dam: "1D6",
    tho: 1,
    range: "10",
    round: "1(3)",
    num: "6",
    price: "25/190",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".25(6.35mm)短口手枪(单管)",
    skill: "射击(手枪)",
    dam: "1D6",
    tho: 1,
    range: "3",
    round: "1",
    num: "1",
    price: "12/55",
    err: "100",
    time: "1920s"
  },
  {
    name: ".32(7.65mm)左轮",
    skill: "射击(手枪)",
    dam: "1D8",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "15/200",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".32(7.65mm)自动手枪",
    skill: "射击(手枪)",
    dam: "1D8",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "8",
    price: "20/350",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: ".357马格南左轮",
    skill: "射击(手枪)",
    dam: "1D8+1D4",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "425",
    err: "100",
    time: "现代"
  },
  {
    name: ".38(9mm)左轮",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "25/200",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".38(9mm)自动手枪",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "8",
    price: "30/375",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: "贝瑞塔M9",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "15",
    price: "-/500",
    err: "98",
    time: "现代"
  },
  {
    name: "9mm格洛克17",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "17",
    price: "-/500",
    err: "98",
    time: "现代"
  },
  {
    name: "9mm鲁格P08",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "8",
    price: "75/600",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: ".41(10.4mm)左轮",
    skill: "射击(手枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "8",
    price: "30/-",
    err: "100",
    time: "1920s稀有"
  },
  {
    name: ".44(11.2mm)马格南左轮",
    skill: "射击(手枪)",
    dam: "1D10+1D4+2",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "-/475",
    err: "100",
    time: "现代"
  },
  {
    name: ".45(11.43mm)左轮",
    skill: "射击(手枪)",
    dam: "1D10+2",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "30/300",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".45(11.43mm)自动手枪",
    skill: "射击(手枪)",
    dam: "1D10+2",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "7",
    price: "40/375",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "IMI 沙漠之鹰",
    skill: "射击(手枪)",
    dam: "1D10+1D6+3",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "7",
    price: "-/650",
    err: "94",
    time: "现代"
  },
  {
    name: ".58 (14.7mm)1855年式春田步枪",
    skill: "射击(步/霰)",
    dam: "1D10+4",
    tho: 1,
    range: "60",
    round: "1/4",
    num: "1",
    price: "25/350",
    err: "95",
    time: "稀有"
  },
  {
    name: ".22 (5.6mm)栓式枪机步枪",
    skill: "射击(步/霰)",
    dam: "1D6+1",
    tho: 1,
    range: "30",
    round: "1",
    num: "6",
    price: "13/70",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: ".30 (7.62mm)杠杆式枪机步枪",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "50",
    round: "1",
    num: "6",
    price: "19/150",
    err: "98",
    time: "1920s，现代"
  },
  {
    name: ".45 (11.43mm)马蒂尼-亨利步枪",
    skill: "射击(步/霰)",
    dam: "1D8+1D6+3",
    tho: 1,
    range: "80",
    round: "1/3",
    num: "1",
    price: "20/200",
    err: "100",
    time: "1920s"
  },
  {
    name: "莫兰上校的气动步枪③",
    skill: "射击(步/霰)",
    dam: "2D6+1",
    tho: 1,
    range: "20",
    round: "1/3",
    num: "1",
    price: "200/-",
    err: "88",
    time: "1920s"
  },
  {
    name: "加兰德M1、M2步枪",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "8",
    price: "-/400",
    err: "100",
    time: "二战及以后"
  },
  {
    name: "SKS半自动步枪(56半)",
    skill: "射击(步/霰)",
    dam: "2D6+1",
    tho: 1,
    range: "90",
    round: "1(2)",
    num: "10",
    price: "-/500",
    err: "97",
    time: "现代"
  },
  {
    name: ".303(7.7mm)李-恩菲尔德",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "5",
    price: "50/300",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".30-06(7.62mm)手动枪机步枪",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "5",
    price: "75/175",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: ".30-06(7.62mm)半自动步枪",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "5",
    price: "-/275",
    err: "100",
    time: "现代"
  },
  {
    name: ".444(11.28mm)马林步枪",
    skill: "射击(步/霰)",
    dam: "2D8+4",
    tho: 1,
    range: "110",
    round: "1",
    num: "5",
    price: "-/400",
    err: "98",
    time: "现代"
  },
  {
    name: "猎象枪(双管)",
    skill: "射击(步/霰)",
    dam: "3D6+4",
    tho: 1,
    range: "100",
    round: "1或2",
    num: "2",
    price: "400/1000",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "AK-47或AKM",
    skill: "射击(步/霰)",
    dam: "2D6+1",
    tho: 1,
    range: "100",
    round: "1(2)或全自动",
    num: "30",
    price: "200",
    err: "100",
    time: "现代"
  },
  {
    name: "AK-74",
    skill: "射击(步/霰)",
    dam: "2D6+1",
    tho: 1,
    range: "110",
    round: "1(2)或全自动",
    num: "30",
    price: "1000",
    err: "97",
    time: "现代"
  },
  {
    name: "M1918式勃朗宁自动步枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "90",
    round: "1(2)或全自动",
    num: "20",
    price: "800/1500",
    err: "100",
    time: "1920s"
  },
  {
    name: "FN FAL 突击步枪",
    skill: "射击(步/霰)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1-3发点射",
    num: "20",
    price: "1500",
    err: "97",
    time: "现代"
  },
  {
    name: "加利尔突击步枪",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "1(2)或全自动",
    num: "20",
    price: "2000",
    err: "98",
    time: "现代"
  },
  {
    name: "M16A2",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "1-3发点射",
    num: "30",
    price: "",
    err: "97",
    time: "现代"
  },
  {
    name: "M4",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "90",
    round: "1或3发点射",
    num: "30",
    price: "",
    err: "97",
    time: "现代"
  },
  {
    name: "斯泰尔AUG",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "1(2)或全自动",
    num: "30",
    price: "1100",
    err: "99",
    time: "现代"
  },
  {
    name: "贝雷塔AR70/90",
    skill: "射击(步/霰)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "1或全自动",
    num: "30",
    price: "2800",
    err: "99",
    time: "现代"
  },
  {
    name: "20号霰弹枪(双管)",
    skill: "射击(步/霰)",
    dam: "2D6/1D6/1D3",
    tho: 0,
    range: "10/20/50",
    round: "1或2",
    num: "2",
    price: "35/稀",
    err: "100",
    time: "1920s"
  },
  {
    name: "16号霰弹枪(双管)",
    skill: "射击(步/霰)",
    dam: "2D6+2/1D6+1/1D4",
    tho: 0,
    range: "10/20/50",
    round: "1或2",
    num: "2",
    price: "40/稀",
    err: "100",
    time: "1920s"
  },
  {
    name: "12号霰弹枪(双管)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1或2",
    num: "2",
    price: "40/200",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "12号霰弹枪(手压式)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1",
    num: "5",
    price: "45/100",
    err: "100",
    time: "现代"
  },
  {
    name: "12号霰弹枪(半自动)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1(2)",
    num: "5",
    price: "45/100",
    err: "100",
    time: "现代"
  },
  {
    name: "12号霰弹枪(双管,锯短)",
    skill: "射击(步/霰)",
    dam: "4D6/1D6",
    tho: 0,
    range: "5/10",
    round: "1或2",
    num: "2",
    price: "",
    err: "100",
    time: "1920s"
  },
  {
    name: "10号霰弹枪(双管)",
    skill: "射击(步/霰)",
    dam: "4D6+2/2D6+1/1D4",
    tho: 0,
    range: "10/20/50",
    round: "1或2",
    num: "2",
    price: "稀",
    err: "100",
    time: "1920s稀有"
  },
  {
    name: "12号贝里尼M3(折叠式枪托)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1(2)",
    num: "7",
    price: "-/895",
    err: "100",
    time: "现代"
  },
  {
    name: "12号SPAS (折叠式枪托)",
    skill: "射击(步/霰)",
    dam: "4D6/2D6/1D6",
    tho: 0,
    range: "10/20/50",
    round: "1",
    num: "8",
    price: "-/600",
    err: "98",
    time: "现代"
  },
  {
    name: "MP18I/M现代28II",
    skill: "射击(冲锋枪)",
    dam: "1D10",
    tho: 1,
    range: "20",
    round: "1(2)或全自动",
    num: "20/30/32",
    price: "1000/20000",
    err: "96",
    time: "1920s"
  },
  {
    name: "MP5",
    skill: "射击(冲锋枪)",
    dam: "1D10",
    tho: 1,
    range: "20",
    round: "1(2)或全自动",
    num: "15/30",
    price: "",
    err: "97",
    time: "现代"
  },
  {
    name: "MAC-11",
    skill: "射击(冲锋枪)",
    dam: "1D10",
    tho: 1,
    range: "15",
    round: "1(3)或全自动",
    num: "32",
    price: "-/750",
    err: "96",
    time: "现代"
  },
  {
    name: "蝎式",
    skill: "射击(冲锋枪)",
    dam: "1D8",
    tho: 1,
    range: "15",
    round: "1(3)或全自动",
    num: "20",
    price: "",
    err: "96",
    time: "现代"
  },
  {
    name: "汤普森",
    skill: "射击(冲锋枪)",
    dam: "1D10+2",
    tho: 1,
    range: "20",
    round: "1或全自动",
    num: "20/30/50",
    price: "200+/1600",
    err: "96",
    time: "1920s"
  },
  {
    name: "乌兹",
    skill: "射击(冲锋枪)",
    dam: "1D10",
    tho: 1,
    range: "20",
    round: "1(2)或全自动",
    num: "32",
    price: "-/1000",
    err: "98",
    time: "现代"
  },
  {
    name: "巴雷特M82",
    skill: "射击(步/霰)",
    dam: "2D10+1D8+6",
    tho: 1,
    range: "250",
    round: "1",
    num: "11",
    price: "3000",
    err: "96",
    time: "现代"
  },
  {
    name: "PTRD-41反坦克步枪",
    skill: "射击(步/霰)",
    dam: "2D10+1D10+8",
    tho: 1,
    range: "230",
    round: "1",
    num: "5",
    price: "1500",
    err: "94",
    time: "现代"
  },
  {
    name: "1882年式加特林",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "100",
    round: "全自动",
    num: "200",
    price: "2000/14000",
    err: "96",
    time: "1920s稀有"
  },
  {
    name: "勃朗宁M1917A1(7.62mm)",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "150",
    round: "全自动",
    num: "250",
    price: "3000/3万",
    err: "96",
    time: "1920s"
  },
  {
    name: "布伦轻机枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "1或全自动",
    num: "30/100",
    price: "3000/5万",
    err: "96",
    time: "1920s"
  },
  {
    name: "路易斯Ⅰ型机枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "全自动",
    num: "27/97",
    price: "3000/2万",
    err: "96",
    time: "1920s"
  },
  {
    name: "GE M134式7.62mm速射机枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "200",
    round: "全自动",
    num: "4000",
    price: "",
    err: "98",
    time: "现代"
  },
  {
    name: "FN 米尼米，弹夹/弹带",
    skill: "射击(机枪)",
    dam: "2D6",
    tho: 1,
    range: "110",
    round: "全自动",
    num: "30/200",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "维克斯.303机枪",
    skill: "射击(机枪)",
    dam: "2D6+4",
    tho: 1,
    range: "110",
    round: "全自动",
    num: "250",
    price: "",
    err: "99",
    time: "1920s"
  },
  {
    name: "莫洛托夫鸡尾酒",
    skill: "投掷",
    dam: "2D6 烧",
    tho: 1,
    range: "STRft",
    round: "1/2",
    num: "一次性",
    price: "",
    err: "95",
    time: "1920s，现代"
  },
  {
    name: "信号枪(信号弹枪)",
    skill: "射击(手枪)",
    dam: "1D10+1D3 烧",
    tho: 1,
    range: "10",
    round: "1/2",
    num: "1",
    price: "15/75",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "M79式40mm榴弹发射器",
    skill: "射击(重武器)",
    dam: "3D10/2码",
    tho: 1,
    range: "20",
    round: "1/3",
    num: "1",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "炸药棒",
    skill: "投掷",
    dam: "4D10/3码",
    tho: 1,
    range: "STRft",
    round: "1/2",
    num: "一次性",
    price: "2/5",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: "雷管",
    skill: "电气维修",
    dam: "2D10/1码",
    tho: 1,
    range: "",
    round: "",
    num: "一次性",
    price: "20/整盒",
    err: "100",
    time: "1920s，现代"
  },
  {
    name: "爆破筒",
    skill: "爆破",
    dam: "1D10/3码",
    tho: 1,
    range: "即地",
    round: "1",
    num: "一次性",
    price: "　",
    err: "95",
    time: "1920s，现代"
  },
  {
    name: "塑胶炸弹(C-4)，4盎司",
    skill: "爆破",
    dam: "6D10/3码",
    tho: 1,
    range: "即地",
    round: "1",
    num: "一次性",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "手榴弹",
    skill: "投掷",
    dam: "4D10/3码",
    tho: 1,
    range: "STRft",
    round: "1/2",
    num: "一次性",
    price: "",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: "81mm迫击炮",
    skill: "炮术",
    dam: "6D10/6码",
    tho: 1,
    range: "500",
    round: "1",
    num: "独立装弹",
    price: "",
    err: "100",
    time: "现代"
  },
  {
    name: "75mm野战火炮",
    skill: "炮术",
    dam: "10D10/2码",
    tho: 1,
    range: "500",
    round: "1/4",
    num: "独立装弹",
    price: "1500/-",
    err: "99",
    time: "1920s，现代"
  },
  {
    name: "120mm坦克主炮",
    skill: "炮术",
    dam: "10D10/2码",
    tho: 1,
    range: "2000",
    round: "1",
    num: "独立装弹",
    price: "",
    err: "100",
    time: "现代"
  },
  {
    name: "5英寸(127mm)舰炮",
    skill: "炮术",
    dam: "15D10/4码",
    tho: 1,
    range: "3000",
    round: "1",
    num: "自动上弹",
    price: "",
    err: "98",
    time: "1920s，现代"
  },
  {
    name: "反步兵地雷",
    skill: "爆破",
    dam: "4D10/5码",
    tho: 1,
    range: "即地",
    round: "1",
    num: "一次性",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "阔剑地雷",
    skill: "爆破",
    dam: "6D6/20码",
    tho: 1,
    range: "即地",
    round: "1",
    num: "一次性",
    price: "",
    err: "99",
    time: "现代"
  },
  {
    name: "火焰喷射器",
    skill: "射击(喷射器)",
    dam: "2D6+烧",
    tho: 1,
    range: "25",
    round: "1",
    num: "至少10",
    price: "",
    err: "93",
    time: "1920s，现代"
  },
  {
    name: "M72式单发轻型反坦克炮",
    skill: "射击(重武器)",
    dam: "8D10/1码",
    tho: 1,
    range: "150",
    round: "1",
    num: "1",
    price: "",
    err: "98",
    time: "现代"
  },
  {
    name: "ZP5左轮",
    skill: "射击(手枪)",
    dam: "1D8+1D4",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "6",
    price: "12",
    err: "100",
    time: "现代"
  },
  {
    name: "DK-05 P320",
    skill: "射击(手枪)",
    dam: "1D10+2",
    tho: 1,
    range: "15",
    round: "1(3)",
    num: "7",
    price: "10",
    err: "100",
    time: "现代"
  },
  {
    name: "STS 鲁格 Mark 4",
    skill: "射击(手枪)",
    dam: "1D6",
    tho: 1,
    range: "10",
    round: "1",
    num: "6",
    price: "5",
    err: "100",
    time: "现代"
  },
  {
    name: "幻影科技芒种",
    skill: "射击(步/霰)",
    dam: "1D10/1D6+DB",
    tho: 1,
    range: "20",
    round: "1",
    num: "5",
    price: "15",
    err: "95",
    time: "现代"
  },
  {
    name: "双管猎枪",
    skill: "射击(步/霰)",
    dam: "2D6/1D6",
    tho: 0,
    range: "20",
    round: "1",
    num: "2",
    price: "10",
    err: "95",
    time: "现代"
  },
  // 日本合法
  {
    name: "武士刀",
    skill: "格斗(刀剑)",
    dam: "1D10+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "40000",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "竹刀",
    skill: "格斗(刀剑)",
    dam: "击晕+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "3000",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "太刀",
    skill: "格斗(刀剑)",
    dam: "2D8+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "80000",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "胁差",
    skill: "格斗(刀剑)",
    dam: "1D6+1+DB",
    tho: 1,
    range: "接触",
    round: "1",
    num: "",
    price: "18000",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "弓道之弓",
    skill: "射击(弓弩)",
    dam: "1D6+DB",
    tho: 1,
    range: "90",
    round: "1/2",
    num: "",
    price: "70000",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "薙刀",
    skill: "格斗(刀剑)",
    dam: "1D8+DB",
    tho: 1,
    range: "10",
    round: "1",
    num: "",
    price: "50000",
    err: "",
    time: "1920s，现代"
  },
  {
    name: "撬棍",
    skill: "格斗(斗殴)",
    dam: "1D8+DB",
    tho: 0,
    range: "接触",
    round: "1",
    num: "",
    price: "1500",
    err: "",
    time: "1920s，现代"
  }
], ga = {
  // 常规
  cg: [
    "徒手格斗",
    "弓箭",
    "黄铜指虎",
    "长鞭",
    "燃烧的火把",
    "链锯",
    "包革金属棒(大头棍、护身棒)",
    "大棒(棒球棒、拨火棍)",
    "小型棍棒(警棍)",
    "弩",
    "绞索",
    "手斧/手镰",
    "大型刀(甘蔗刀等)",
    "中型刀(切肉餐刀等)",
    "小型刀(弹簧折叠刀等)",
    "220V通电导线",
    "催泪喷雾",
    "双节棍",
    "投石",
    "手里剑",
    "矛、骑士长枪",
    "投矛",
    "大型剑(马刀)",
    "中型剑(佩剑、重剑)",
    "轻型剑(花剑、剑杖)",
    "电棍",
    "电击枪",
    "战斗回力镖",
    "伐木斧"
  ],
  // 手枪
  sq: [
    "燧发手枪",
    ".22(5.6mm)小型自动手枪",
    ".25(6.35mm)短口手枪(单管)",
    ".32(7.65mm)左轮",
    ".32(7.65mm)自动手枪",
    ".357马格南左轮",
    ".38(9mm)左轮",
    ".38(9mm)自动手枪",
    "贝瑞塔M9",
    "9mm格洛克17",
    "9mm鲁格P08",
    ".41(10.4mm)左轮",
    ".44(11.2mm)马格南左轮",
    ".45(11.43mm)左轮",
    ".45(11.43mm)自动手枪",
    "IMI 沙漠之鹰",
    "ZP5左轮",
    "DK-05 P320",
    "STS 鲁格 Mark 4"
  ],
  // 半自动步枪
  bbq: [
    ".58 (14.7mm)1855年式春田步枪",
    ".22 (5.6mm)栓式枪机步枪",
    ".30 (7.62mm)杠杆式枪机步枪",
    ".45 (11.43mm)马蒂尼-亨利步枪",
    "莫兰上校的气动步枪③",
    "加兰德M1、M2步枪",
    "SKS半自动步枪(56半)",
    ".303(7.7mm)李-恩菲尔德",
    ".30-06(7.62mm)手动枪机步枪",
    ".30-06(7.62mm)半自动步枪",
    ".444(11.28mm)马林步枪",
    "猎象枪(双管)"
  ],
  // 全自动步枪
  tsq: [
    "AK-47或AKM",
    "AK-74",
    "FN FAL 突击步枪",
    "加利尔突击步枪",
    "M16A2",
    "M4",
    "斯泰尔AUG",
    "贝雷塔AR70/90"
  ],
  // 霰弹枪
  xdq: [
    "20号霰弹枪(双管)",
    "16号霰弹枪(双管)",
    "12号霰弹枪(双管)",
    "12号霰弹枪(手压式)",
    "12号霰弹枪(半自动)",
    "12号霰弹枪(双管,锯短)",
    "10号霰弹枪(双管)",
    "12号贝里尼M3(折叠式枪托)",
    "12号SPAS (折叠式枪托)",
    "幻影科技芒种",
    "双管猎枪"
  ],
  // 冲锋枪
  cfq: ["MP18I/M现代28II", "MP5", "MAC-11", "蝎式", "汤普森", "乌兹"],
  // 狙击步枪
  jjbq: ["巴雷特M82", "PTRD-41反坦克步枪"],
  // 机枪
  jq: [
    "1882年式加特林",
    "M1918式勃朗宁自动步枪",
    "勃朗宁M1917A1(7.62mm)",
    "布伦轻机枪",
    "路易斯Ⅰ型机枪",
    "GE M134式7.62mm速射机枪",
    "FN 米尼米，弹夹/弹带",
    "维克斯.303机枪"
  ],
  // 其它
  qt: [
    "莫洛托夫鸡尾酒",
    "信号枪(信号弹枪)",
    "M79式40mm榴弹发射器",
    "炸药棒",
    "雷管",
    "爆破筒",
    "塑胶炸弹(C-4)，4盎司",
    "手榴弹",
    "81mm迫击炮",
    "75mm野战火炮",
    "120mm坦克主炮",
    "5英寸(127mm)舰炮",
    "反步兵地雷",
    "阔剑地雷",
    "火焰喷射器",
    "M72式单发轻型反坦克炮"
  ],
  // 日本合法
  rbhf: [
    "武士刀",
    "竹刀",
    "太刀",
    "胁差",
    "弓道之弓",
    "薙刀",
    "手里剑",
    "撬棍"
  ]
}, va = [
  ["cg", "常规"],
  ["sq", "手枪"],
  ["bbq", "半自动步枪"],
  ["tsq", "全自动步枪"],
  ["xdq", "霰弹枪"],
  ["cfq", "冲锋枪"],
  ["jjbq", "狙击步枪"],
  ["jq", "机枪"],
  ["rbhf", "日本合法"],
  ["qt", "其它"]
];
function dr(t) {
  return {
    name: "",
    skill: "",
    dam: "",
    tho: 0,
    range: "",
    round: "",
    num: "",
    err: "",
    ...t
  };
}
const du = [
  {
    name: "",
    point: [],
    wealth: [1, 0],
    skills: []
  },
  {
    name: "会计师",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: ["会计", "法律", "图书馆使用", "聆听", "说服", "侦查"]
  },
  {
    name: "杂技演员",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [9, 20],
    skills: ["攀爬", "闪避", "投掷", "跳跃", "侦查", "游泳"]
  },
  {
    name: "戏剧演员",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 40],
    skills: [
      { 技艺: "" },
      "乔装",
      { 格斗: "" },
      "历史",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "电影演员",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [20, 90],
    skills: [
      { 技艺: "" },
      "乔装",
      "汽车驾驶",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "中介调查员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [20, 45],
    skills: [
      { 格斗: "斗殴" },
      { 射击: "" },
      "法律",
      "图书馆使用",
      "心理学",
      "潜行",
      "追踪",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "精神病医生(古典)",
    point: [[["edu", 4]]],
    wealth: [10, 60],
    skills: [
      "法律",
      "聆听",
      "医学",
      { 外语: "" },
      "精神分析",
      "心理学",
      { 科学: "生物学" },
      { 科学: "化学" }
    ]
  },
  {
    name: "动物训练师",
    point: [
      [["edu", 2]],
      [
        ["app", 2],
        ["pow", 2]
      ]
    ],
    wealth: [10, 40],
    skills: [
      "跳跃",
      "聆听",
      "博物学",
      "驯兽",
      { 科学: "动物学" },
      "潜行",
      "追踪"
    ]
  },
  {
    name: "文物学家(原作向)",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: [
      "估价",
      { 技艺: "" },
      "历史",
      "图书馆使用",
      { 外语: "" },
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "古董商",
    point: [[["edu", 4]]],
    wealth: [30, 50],
    skills: [
      "会计",
      "估价",
      "汽车驾驶",
      "历史",
      "图书馆使用",
      "导航",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "考古学家(原作向)",
    point: [[["edu", 4]]],
    wealth: [10, 40],
    skills: [
      "估价",
      "考古学",
      "历史",
      { 外语: "" },
      "图书馆使用",
      "侦查",
      "机械维修",
      ["导航", { 科学: "" }]
    ]
  },
  {
    name: "建筑师",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: [
      "会计",
      { 技艺: "" },
      "法律",
      { 母语: "" },
      "说服",
      "心理学",
      { 科学: "数学" },
      ["计算机使用Ω", "图书馆使用"]
    ]
  },
  {
    name: "艺术家",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["pow", 2]
      ]
    ],
    wealth: [9, 50],
    skills: [
      { 技艺: "" },
      { 外语: "" },
      "心理学",
      "侦查",
      ["历史", "博物学"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "精神病院护工",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [8, 20],
    skills: [
      "闪避",
      { 格斗: "斗殴" },
      "急救",
      "聆听",
      "心理学",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "运动员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 70],
    skills: [
      "攀爬",
      "跳跃",
      { 格斗: "斗殴" },
      "骑术",
      "游泳",
      "投掷",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "作家(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      { 技艺: "文学" },
      "历史",
      { 外语: "" },
      { 母语: "" },
      "心理学",
      "图书馆使用",
      ["博物学", "神秘学"]
    ]
  },
  {
    name: "酒保",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [8, 25],
    skills: [
      "会计",
      { 格斗: "斗殴" },
      "聆听",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "猎人",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [20, 50],
    skills: [
      { 射击: "" },
      "博物学",
      "导航",
      { 科学: "动物学" },
      "潜行",
      "追踪",
      ["聆听", "侦查"],
      [{ 外语: "" }, { 生存: "" }]
    ]
  },
  {
    name: "书商",
    point: [[["edu", 4]]],
    wealth: [20, 40],
    skills: [
      "会计",
      "估价",
      "汽车驾驶",
      "历史",
      "图书馆使用",
      { 母语: "" },
      { 外语: "" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "赏金猎人",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "汽车驾驶",
      "法律",
      "心理学",
      "追踪",
      "潜行",
      ["电气维修", "电子学Ω"],
      [{ 格斗: "" }, { 射击: "" }],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "拳击手、摔跤手",
    point: [[["edu", 2]], [["str", 2]]],
    wealth: [9, 60],
    skills: ["闪避", { 格斗: "斗殴" }, "恐吓", "跳跃", "心理学", "侦查"]
  },
  {
    name: "管家、佣人",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      { "技艺(生活类，如厨艺、裁缝、理发)": "" },
      "急救",
      "聆听",
      { 外语: "" },
      "心理学",
      "侦查",
      ["会计", "估价"]
    ]
  },
  {
    name: "神职人员",
    point: [[["edu", 4]]],
    wealth: [9, 60],
    skills: [
      "会计",
      "历史",
      "图书馆使用",
      "聆听",
      { 外语: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "程序员",
    point: [[["edu", 4]]],
    wealth: [10, 70],
    skills: [
      "计算机使用Ω",
      "电气维修",
      "电子学Ω",
      "图书馆使用",
      { 科学: "" },
      "侦查"
    ]
  },
  {
    name: "黑客",
    point: [[["edu", 4]]],
    wealth: [10, 70],
    skills: [
      "计算机使用Ω",
      "电气维修",
      "电子学Ω",
      "图书馆使用",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "牛仔",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 20],
    skills: [
      "闪避",
      "跳跃",
      "骑术",
      { 生存: "" },
      "投掷",
      "追踪",
      [{ 格斗: "" }, { 射击: "" }],
      ["急救", "博物学"]
    ]
  },
  {
    name: "工匠",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [10, 40],
    skills: ["会计", { 技艺: "" }, { 技艺: "" }, "机械维修", "博物学", "侦查"]
  },
  {
    name: "刺客",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [30, 60],
    skills: [
      "乔装",
      "电气维修",
      { 格斗: "" },
      { 射击: "" },
      "锁匠",
      "机械维修",
      "潜行",
      "心理学"
    ]
  },
  {
    name: "银行劫匪",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [5, 75],
    skills: [
      "汽车驾驶",
      { 格斗: "" },
      { 射击: "" },
      "恐吓",
      "锁匠",
      "操作重型机械",
      ["电气维修", "机械维修"]
    ]
  },
  {
    name: "打手、暴徒",
    point: [[["edu", 2]], [["str", 2]]],
    wealth: [5, 30],
    skills: [
      "汽车驾驶",
      { 格斗: "" },
      { 射击: "" },
      "心理学",
      "潜行",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "窃贼",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [5, 40],
    skills: [
      "估价",
      "攀爬",
      "聆听",
      "锁匠",
      "妙手",
      "潜行",
      "侦查",
      ["电气维修", "机械维修"]
    ]
  },
  {
    name: "欺诈师",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [10, 65],
    skills: [
      "估价",
      { 技艺: "表演" },
      "聆听",
      "心理学",
      "妙手",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      ["法律", { 外语: "" }]
    ]
  },
  {
    name: "独行罪犯",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [5, 65],
    skills: [
      "估价",
      "潜行",
      "心理学",
      "侦查",
      [{ 技艺: "表演" }, "乔装"],
      [{ 格斗: "" }, { 射击: "" }],
      ["锁匠", "机械维修"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "女飞贼(古典)",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [10, 80],
    skills: [
      { 技艺: "" },
      "汽车驾驶",
      "聆听",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      [{ 格斗: "斗殴" }, { 射击: "" }]
    ]
  },
  {
    name: "赃物贩子",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [20, 40],
    skills: [
      "会计",
      "估价",
      { 技艺: "伪造" },
      "历史",
      "图书馆使用",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "赝造者",
    point: [[["edu", 4]]],
    wealth: [20, 60],
    skills: [
      "会计",
      "估价",
      { 技艺: "伪造" },
      "历史",
      "图书馆使用",
      "侦查",
      "妙手"
    ]
  },
  {
    name: "走私者",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [20, 60],
    skills: [
      { 射击: "" },
      "聆听",
      "导航",
      "心理学",
      "妙手",
      "侦查",
      ["汽车驾驶", { 驾驶: "飞行器" }, { 驾驶: "船" }],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "混混",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [3, 10],
    skills: [
      "攀爬",
      { 格斗: "" },
      { 射击: "" },
      "跳跃",
      "妙手",
      "潜行",
      "投掷",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "教团首领",
    point: [[["edu", 4]]],
    wealth: [30, 60],
    skills: [
      "会计",
      "神秘学",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "除魅师(现代)",
    point: [[["edu", 4]]],
    wealth: [20, 50],
    skills: [
      "汽车驾驶",
      "历史",
      "神秘学",
      "心理学",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      [{ 格斗: "斗殴" }, { 射击: "" }]
    ]
  },
  {
    name: "设计师",
    point: [[["edu", 4]]],
    wealth: [20, 60],
    skills: [
      "会计",
      { 技艺: "摄影" },
      { 技艺: "" },
      "机械维修",
      "心理学",
      "侦查",
      ["计算机使用Ω", "图书馆使用"]
    ]
  },
  {
    name: "业余艺术爱好者(原作向)",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [50, 99],
    skills: [
      { 技艺: "" },
      { 射击: "" },
      { 外语: "" },
      "骑术",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "潜水员",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [9, 30],
    skills: [
      "潜水",
      "急救",
      "机械维修",
      { 驾驶: "船" },
      { 科学: "生物学" },
      "侦查",
      "游泳"
    ]
  },
  {
    name: "医生(原作向)",
    point: [[["edu", 4]]],
    wealth: [30, 80],
    skills: [
      "急救",
      "医学",
      { 外语: "拉丁语" },
      "心理学",
      { 科学: "生物学" },
      { 科学: "制药" }
    ]
  },
  {
    name: "流浪者",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2],
        ["str", 2]
      ]
    ],
    wealth: [0, 5],
    skills: [
      "攀爬",
      "跳跃",
      "聆听",
      "导航",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "私人司机",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [10, 40],
    skills: [
      "汽车驾驶",
      "聆听",
      "机械维修",
      "导航",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "司机",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 20],
    skills: [
      "会计",
      "汽车驾驶",
      "聆听",
      "机械维修",
      "导航",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "出租车司机",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [9, 30],
    skills: [
      "会计",
      "汽车驾驶",
      "电气维修",
      "话术",
      "机械维修",
      "导航",
      "侦查"
    ]
  },
  {
    name: "编辑",
    point: [[["edu", 4]]],
    wealth: [10, 30],
    skills: [
      "会计",
      "历史",
      { 母语: "" },
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "政府官员",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [50, 90],
    skills: [
      "取悦",
      "历史",
      "恐吓",
      "话术",
      "聆听",
      { 母语: "" },
      "说服",
      "心理学"
    ]
  },
  {
    name: "工程师",
    point: [[["edu", 4]]],
    wealth: [30, 60],
    skills: [
      { 技艺: "技术制图" },
      "电气维修",
      "图书馆使用",
      "机械维修",
      "操作重型机械",
      { 科学: "工程学" },
      { 科学: "物理" }
    ]
  },
  {
    name: "艺人",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 70],
    skills: [
      { "技艺(表演类，如表演、演唱、喜剧等)": "" },
      "乔装",
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "探险家(古典)",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2],
        ["str", 2]
      ]
    ],
    wealth: [55, 80],
    skills: [
      { 射击: "" },
      "历史",
      "跳跃",
      "博物学",
      "导航",
      { 外语: "" },
      { 生存: "" },
      ["攀爬", "游泳"]
    ]
  },
  {
    name: "农民",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      { 技艺: "耕作" },
      ["汽车驾驶", { 驾驶: "马车" }],
      "机械维修",
      "博物学",
      "操作重型机械",
      "追踪",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "司法人员",
    point: [[["edu", 4]]],
    wealth: [20, 40],
    skills: [
      "汽车驾驶",
      { 格斗: "斗殴" },
      { 射击: "" },
      "法律",
      "说服",
      "潜行",
      "侦查"
    ]
  },
  {
    name: "消防员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "攀爬",
      "闪避",
      "汽车驾驶",
      "急救",
      "跳跃",
      "机械维修",
      "操作重型机械",
      "投掷"
    ]
  },
  {
    name: "驻外记者",
    point: [[["edu", 4]]],
    wealth: [10, 40],
    skills: [
      "历史",
      { 外语: "" },
      { 母语: "" },
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "法医",
    point: [[["edu", 4]]],
    wealth: [40, 60],
    skills: [
      { 外语: "" },
      "图书馆使用",
      "医学",
      "说服",
      { 科学: "生物学" },
      { 科学: "鉴证" },
      { 科学: "制药" },
      "侦查"
    ]
  },
  {
    name: "赌徒",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [8, 50],
    skills: [
      "会计",
      { 技艺: "表演" },
      "聆听",
      "心理学",
      "妙手",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "黑帮老大",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [60, 95],
    skills: [
      { 格斗: "" },
      { 射击: "" },
      "法律",
      "聆听",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "黑帮马仔",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 20],
    skills: [
      "汽车驾驶",
      { 格斗: "" },
      { 射击: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "绅士/淑女",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [40, 90],
    skills: [
      { 技艺: "" },
      { 射击: "步/霰" },
      "历史",
      { 外语: "" },
      "导航",
      "骑术",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "游民",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [0, 5],
    skills: [
      { 技艺: "" },
      "攀爬",
      "跳跃",
      "聆听",
      "导航",
      "潜行",
      ["锁匠", "妙手"]
    ]
  },
  {
    name: "勤杂护工",
    point: [[["edu", 2]], [["str", 2]]],
    wealth: [6, 15],
    skills: [
      "电气维修",
      { 格斗: "斗殴" },
      "急救",
      "聆听",
      "机械维修",
      "心理学",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "调查记者(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      [{ 技艺: "" }, { 技艺: "摄影" }],
      "历史",
      "图书馆使用",
      { 母语: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "通讯记者(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      { 技艺: "表演" },
      "历史",
      "聆听",
      { 母语: "" },
      "心理学",
      "潜行",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "法官",
    point: [[["edu", 4]]],
    wealth: [50, 80],
    skills: [
      "历史",
      "恐吓",
      "法律",
      "图书馆使用",
      "聆听",
      { 母语: "" },
      "说服",
      "心理学"
    ]
  },
  {
    name: "实验室助理",
    point: [[["edu", 4]]],
    wealth: [10, 30],
    skills: [
      "电气维修",
      { 外语: "" },
      { 科学: "化学" },
      { 科学: "" },
      { 科学: "" },
      "侦查",
      ["计算机使用Ω", "图书馆使用"]
    ]
  },
  {
    name: "伐木工",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "攀爬",
      "闪避",
      { 格斗: "链锯" },
      "急救",
      "跳跃",
      "机械维修",
      "投掷",
      ["博物学", { 科学: "生物学" }, { 科学: "植物学" }]
    ]
  },
  {
    name: "矿工",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "攀爬",
      { 科学: "地质学" },
      "跳跃",
      "机械维修",
      "操作重型机械",
      "潜行",
      "侦查"
    ]
  },
  {
    name: "律师",
    point: [[["edu", 4]]],
    wealth: [30, 80],
    skills: [
      "会计",
      "法律",
      "图书馆使用",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "图书馆管理员(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 35],
    skills: ["会计", "图书馆使用", { 外语: "" }, { 母语: "" }]
  },
  {
    name: "技工",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      { "技艺(木匠、焊接、管道工等)": "" },
      "攀爬",
      "汽车驾驶",
      "电气维修",
      "机械维修",
      "操作重型机械"
    ]
  },
  {
    name: "军官",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [20, 70],
    skills: [
      "会计",
      { 射击: "" },
      "导航",
      "急救",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "传教士",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [0, 30],
    skills: [
      { 技艺: "" },
      "急救",
      "机械维修",
      "医学",
      "博物学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "登山家",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [30, 60],
    skills: [
      "攀爬",
      "急救",
      "跳跃",
      "聆听",
      "导航",
      { 外语: "" },
      { 生存: "高山/冰山" },
      "追踪"
    ]
  },
  {
    name: "博物馆管理员",
    point: [[["edu", 4]]],
    wealth: [10, 30],
    skills: [
      "会计",
      "估价",
      "考古学",
      "历史",
      "图书馆使用",
      "神秘学",
      { 外语: "" },
      "侦查"
    ]
  },
  {
    name: "音乐家",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["pow", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      { 技艺: "音乐" },
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "护士",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      "急救",
      "聆听",
      "医学",
      "心理学",
      { 科学: "生物学" },
      { 科学: "化学" },
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "神秘学家",
    point: [[["edu", 4]]],
    wealth: [9, 65],
    skills: [
      "人类学",
      "历史",
      "图书馆使用",
      "神秘学",
      { 外语: "" },
      { 科学: "天文学" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "旅行家",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [5, 20],
    skills: [
      { 射击: "" },
      "急救",
      "聆听",
      "博物学",
      "导航",
      "侦查",
      { 生存: "" },
      "追踪"
    ]
  },
  {
    name: "药剂师",
    point: [[["edu", 4]]],
    wealth: [35, 75],
    skills: [
      "会计",
      "急救",
      { 外语: "拉丁语" },
      "图书馆使用",
      "心理学",
      { 科学: "化学" },
      { 科学: "制药" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "摄影师",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      { 技艺: "摄影" },
      "心理学",
      { 科学: "化学" },
      "潜行",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "摄影记者",
    point: [[["edu", 4]]],
    wealth: [10, 30],
    skills: [
      { 技艺: "摄影" },
      "攀爬",
      { 外语: "" },
      "心理学",
      { 科学: "化学" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "飞行员",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [20, 70],
    skills: [
      "电气维修",
      "机械维修",
      "导航",
      "操作重型机械",
      { 驾驶: "飞行器" },
      { 科学: "天文学" }
    ]
  },
  {
    name: "特技飞行员(古典)",
    point: [[["edu", 4]]],
    wealth: [30, 60],
    skills: [
      "会计",
      "电气维修",
      "聆听",
      "机械维修",
      "导航",
      { 驾驶: "飞行器" },
      "侦查"
    ]
  },
  {
    name: "警探(原作向)",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [20, 50],
    skills: [
      { 射击: "" },
      "法律",
      "聆听",
      "心理学",
      "侦查",
      [{ 技艺: "表演" }, "乔装"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "巡警(原作向)",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      { 格斗: "斗殴" },
      { 射击: "" },
      "急救",
      "法律",
      "心理学",
      "侦查",
      ["汽车驾驶", "骑术"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "私家侦探",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      { 技艺: "摄影" },
      "乔装",
      "法律",
      "图书馆使用",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      [{ 格斗: "" }, { 射击: "" }, "锁匠", "计算机使用Ω"]
    ]
  },
  {
    name: "教授(原作向)",
    point: [[["edu", 4]]],
    wealth: [20, 70],
    skills: ["图书馆使用", { 外语: "" }, { 母语: "" }, "心理学"]
  },
  {
    name: "淘金客",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [0, 10],
    skills: [
      "攀爬",
      "急救",
      "历史",
      "机械维修",
      "导航",
      { 科学: "地质学" },
      "侦查"
    ]
  },
  {
    name: "性工作者",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [5, 50],
    skills: [
      { 技艺: "" },
      "闪避",
      "心理学",
      "妙手",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "精神病学家",
    point: [[["edu", 4]]],
    wealth: [30, 80],
    skills: [
      { 外语: "" },
      "聆听",
      "医学",
      "说服",
      "精神分析",
      "心理学",
      { 科学: "生物学" },
      { 科学: "化学" }
    ]
  },
  {
    name: "心理学家",
    point: [[["edu", 4]]],
    wealth: [10, 40],
    skills: ["会计", "图书馆使用", "聆听", "说服", "精神分析", "心理学"]
  },
  {
    name: "研究员",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      "历史",
      "图书馆使用",
      { 外语: "" },
      "侦查",
      { 科学: "" },
      { 科学: "" },
      { 科学: "" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "海军",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      { 格斗: "" },
      { 射击: "" },
      "急救",
      "导航",
      { 驾驶: "船" },
      { 生存: "海上" },
      "游泳",
      ["电气维修", "机械维修"]
    ]
  },
  {
    name: "渔民",
    point: [[["edu", 4]]],
    wealth: [20, 40],
    skills: [
      "急救",
      "机械维修",
      "博物学",
      "导航",
      { 驾驶: "船" },
      "侦查",
      "游泳",
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "推销员",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 40],
    skills: [
      "会计",
      "汽车驾驶",
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      ["潜行", "妙手"]
    ]
  },
  {
    name: "科学家",
    point: [[["edu", 4]]],
    wealth: [9, 50],
    skills: [
      { 科学: "" },
      { 科学: "" },
      { 科学: "" },
      { 外语: "" },
      { 母语: "" },
      "侦查",
      ["计算机使用Ω", "图书馆使用"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "秘书",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "会计",
      [{ 技艺: "打字" }, { 技艺: "速记" }],
      { 母语: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      ["计算机使用Ω", "图书馆使用"]
    ]
  },
  {
    name: "店老板",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [20, 40],
    skills: [
      "会计",
      "电气维修",
      "聆听",
      "机械维修",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "士兵",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [9, 30],
    skills: [
      "闪避",
      { 格斗: "" },
      { 射击: "" },
      "潜行",
      { 生存: "" },
      "急救",
      ["攀爬", "游泳"],
      ["机械维修", { 外语: "" }]
    ]
  },
  {
    name: "间谍",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [20, 60],
    skills: [
      { 射击: "" },
      "聆听",
      { 外语: "" },
      "心理学",
      "妙手",
      "潜行",
      [{ 技艺: "表演" }, "乔装"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "学生/实习生",
    point: [[["edu", 4]]],
    wealth: [5, 10],
    skills: ["图书馆使用", "聆听", [{ 母语: "" }, { 外语: "" }]]
  },
  {
    name: "替身演员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [10, 50],
    skills: [
      "攀爬",
      "闪避",
      { 格斗: "" },
      "急救",
      "跳跃",
      "游泳",
      ["电气维修", "机械维修"],
      ["潜水", "汽车驾驶", { 驾驶: "" }, "骑术"]
    ]
  },
  {
    name: "部落成员",
    point: [
      [["edu", 2]],
      [
        ["str", 2],
        ["dex", 2]
      ]
    ],
    wealth: [0, 15],
    skills: [
      "攀爬",
      "聆听",
      "博物学",
      "神秘学",
      "侦查",
      "游泳",
      { 生存: "" },
      [{ 格斗: "" }, "投掷"]
    ]
  },
  {
    name: "殡葬师",
    point: [[["edu", 4]]],
    wealth: [20, 40],
    skills: [
      "会计",
      "汽车驾驶",
      "历史",
      "神秘学",
      "心理学",
      { 科学: "生物学" },
      { 科学: "化学" },
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "工会活动家",
    point: [[["edu", 4]]],
    wealth: [5, 50],
    skills: [
      "会计",
      { 格斗: "斗殴" },
      "法律",
      "聆听",
      "操作重型机械",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "服务生",
    point: [
      [["edu", 2]],
      [
        ["dex", 2],
        ["app", 2]
      ]
    ],
    wealth: [9, 20],
    skills: [
      "会计",
      { 技艺: "" },
      "闪避",
      "聆听",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "职员/主管",
    point: [[["edu", 4]]],
    wealth: [9, 20],
    skills: [
      "会计",
      "法律",
      "聆听",
      [{ 母语: "" }, { 外语: "" }],
      ["图书馆使用", "计算机使用Ω"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "中高层管理人员",
    point: [[["edu", 4]]],
    wealth: [20, 80],
    skills: [
      "会计",
      { 外语: "" },
      "法律",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "狂热者",
    point: [
      [["edu", 2]],
      [
        ["pow", 2],
        ["app", 2]
      ]
    ],
    wealth: [0, 30],
    skills: [
      "历史",
      "心理学",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"]
    ]
  },
  {
    name: "饲养员",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      "驯兽",
      "会计",
      "闪避",
      "急救",
      "博物学",
      "医学",
      { 科学: "制药" },
      { 科学: "动物学" }
    ]
  },
  {
    name: "暴走族",
    point: [[["edu", 2]], [["str", 2], ["dex", 2]]],
    wealth: [5, 10],
    skills: [
      { 格斗: "斗殴" },
      "汽车驾驶",
      "机械维修",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "导航"
    ]
  },
  {
    name: "风水师",
    point: [[["edu", 4]]],
    wealth: [20, 50],
    skills: [
      { 技艺: "书法" },
      { 科学: "天文学" },
      { 科学: "地质学" },
      "图书馆使用",
      ["取悦", "话术", "恐吓", "说服"],
      "神秘学"
    ]
  },
  {
    name: "家传降妖人",
    point: [[["edu", 2]], [["str", 2], ["dex", 2]]],
    wealth: [9, 20],
    skills: [
      "武士道",
      { 格斗: "" },
      "博物学",
      "神秘学",
      "心理学",
      "潜行",
      { 武术: "" },
      "导航"
    ]
  },
  {
    name: "日本教授",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: [
      "信用评级",
      "图书馆使用",
      { 稽古: "" },
      { 外语: "" },
      "心理学"
    ]
  },
  {
    name: "言灵师",
    point: [[["edu", 4]]],
    wealth: [9, 20],
    skills: [
      { 技艺: "书法" },
      { 技艺: "" },
      "历史",
      { 科学: "天文学" },
      "神秘学",
      "图书馆使用",
      "母语"
    ]
  },
  {
    name: "宫司",
    point: [[["edu", 4]]],
    wealth: [20, 60],
    skills: [
      { 技艺: "书法" },
      { 技艺: "" },
      "图书馆使用",
      ["取悦", "话术", "恐吓", "说服"],
      "神秘学",
      "心理学"
    ]
  },
  {
    name: "炼丹师",
    point: [[["edu", 4]]],
    wealth: [30, 50],
    skills: [
      { 科学: "化学" },
      { 东方医学: "" },
      { 东方医学: "" },
      "图书馆使用",
      { 武术: "太极" },
      "神秘学",
      "博物学",
      { 外语: "汉语" }
    ]
  },
  {
    name: "黑帮",
    point: [[["edu", 2]], [["str", 2], ["dex", 2]]],
    wealth: [20, 60],
    skills: [
      "武士道",
      "潜行",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "闪避",
      "心理学",
      "导航",
      [{ 格斗: "" }, { 射击: "" }]
    ]
  },
  {
    name: "武术导师",
    point: [[["edu", 2]], [["str", 2], ["dex", 2]]],
    wealth: [20, 60],
    skills: [
      "会计",
      ["取悦", "话术", "恐吓", "说服"],
      "心理学",
      "急救",
      "闪避",
      { 格斗: "" },
      { 武术: "" },
      { 武术: "" }
    ]
  },
  {
    name: "忍者",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [10, 40],
    skills: [
      "潜行",
      "乔装",
      "锁匠",
      "侦查",
      "计算机使用Ω",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      { 武术: "忍术" }
    ]
  },
  {
    name: "舞者",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 70],
    skills: [
      { 技艺: "表演" },
      "乔装",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "聆听",
      "心理学"
    ]
  },
  {
    name: "冒险家教授",
    point: [[["edu", 2]], [["app", 2], ["dex", 2], ["str", 2]]],
    wealth: [55, 80],
    skills: [
      ["攀爬", "游泳"],
      { 射击: "" },
      "历史",
      "跳跃",
      "博物学",
      "导航",
      { 外语: "" },
      "生存"
    ]
  },
  {
    name: "偶像",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 70],
    skills: [
      { 技艺: "" },
      "乔装",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "聆听",
      "心理学"
    ]
  },
  {
    name: "歌手",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 70],
    skills: [
      { 技艺: "" },
      "乔装",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "聆听",
      "心理学"
    ]
  },
  {
    name: "网络明星",
    point: [[["edu", 2]], [["app", 2]]],
    wealth: [9, 70],
    skills: [
      { 技艺: "" },
      "乔装",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "聆听",
      "心理学",
      "计算机使用Ω",
      "电气维修"
    ]
  },
  {
    name: "经纪人",
    point: [[["edu", 4]]],
    wealth: [30, 70],
    skills: [
      "汽车驾驶",
      ["取悦", "话术", "恐吓", "说服"],
      ["取悦", "话术", "恐吓", "说服"],
      "潜行",
      "聆听",
      "法律"
    ]
  },
  {
    name: "机械师",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      { 技艺: "" },
      "攀爬",
      "汽车驾驶",
      "电气维修",
      "机械维修",
      "操作重型机械"
    ]
  },
  {
    name: "厨师",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [9, 30],
    skills: [
      { 技艺: "厨艺" },
      { 科学: "生物学" },
      { 科学: "化学" },
      { 格斗: "斗殴" },
      "博物学",
      "侦查",
      { 外语: "" }
    ]
  }
], fu = [
  [
    ["文艺工作", "wenyigongzuo"],
    [
      ["作家(原作向)", "zuojia"],
      ["编辑", "bianji"],
      ["设计师", "shejishi"],
      ["音乐家", "yinyuejia"],
      ["电影演员", "dianyingyanyuan"],
      ["戏剧演员", "xijuyanyuan"],
      ["替身演员", "tishenyanyuan"],
      ["杂技演员", "zajiyanyuan"],
      ["摄影师", "sheyingshi"],
      ["摄影记者", "sheyingjizhe"],
      ["艺人", "yiren"],
      ["业余艺术爱好者(原作向)", "yeyuyishuaihaozhe"]
    ]
  ],
  [
    ["工农商", "gongnongshang"],
    [
      ["工程师", "gongchengshi"],
      ["建筑师", "jianzhushi"],
      ["伐木工", "famugong"],
      ["工匠", "gongjiang"],
      ["技工", "jigong"],
      ["矿工", "kuanggong"],
      ["农民", "nongmin"],
      ["渔民", "yumin"],
      ["猎人", "lieren"],
      ["牛仔", "niuzai"],
      ["书商", "shushang"],
      ["古董商", "gudongshang"],
      ["店老板", "dianlaoban"]
    ]
  ],
  [
    ["职工", "zhigong"],
    [
      ["会计师", "kuaijishi"],
      ["中介调查员", "zhongjiediaochayuan"],
      ["职员/主管", "zhiyuanzhuguan"],
      ["中高层管理人员", "zhonggaocengguanlirenyuan"],
      ["秘书", "mishu"],
      ["推销员", "tuixiaoyuan"],
      ["图书馆管理员(原作向)", "tushuguanguanliyuanyuanzuoxiang"],
      ["博物馆管理员", "bowuguanguanliyuan"],
      ["律师", "lvshi"],
      ["程序员", "chengxuyuan"],
      ["司机", "siji"],
      ["私人司机", "sirensiji"],
      ["出租车司机", "chuzuchesiji"]
    ]
  ],
  [
    ["学者", "xuezhe"],
    [
      ["文物学家(原作向)", "wenwuxuejiayuanzuoxiang"],
      ["考古学家(原作向)", "kaoguxuejiayuanzuoxiang"],
      ["教授(原作向)", "jiaoshouyuanzuoxiang"],
      ["科学家", "kexuejia"],
      ["研究员", "yanjiuyuan"],
      ["实验室助理", "shiyanshizhuli"],
      ["学生/实习生", "xueshengshixisheng"],
      ["艺术家", "yishujia"]
    ]
  ],
  [
    ["医疗系统", "yiliaoxitong"],
    [
      ["医生(原作向)", "yishengyuanzuoxiang"],
      ["护士", "hushi"],
      ["法医", "fayi"],
      ["心理学家", "xinlixuejia"],
      ["精神病学家", "jingshenbingxuejia"],
      ["精神病医生(古典)", "jingshenbingyishenggudian"],
      ["精神病院护工", "jingshenbingyuanhugong"],
      ["药剂师", "yaojishi"]
    ]
  ],
  [
    ["运动/探险", "yundongtanxian"],
    [
      ["运动员", "yundongyuan"],
      ["拳击手、摔跤手", "shuaijiaoshouquanjishou"],
      ["潜水员", "qianshuiyuan"],
      ["调查记者(原作向)", "diaochajizheyuanzuoxiang"],
      ["通讯记者(原作向)", "tongxunjizheyuanzuoxiang"],
      ["驻外记者", "zhuwaijizhe"],
      ["登山家", "dengshanjia"],
      ["旅行家", "lvxingjia"],
      ["探险家(古典)", "tanxianjiagudian"],
      ["飞行员", "feixingyuan"],
      ["特技飞行员(古典)", "tejifeixingyuangudian"]
    ]
  ],
  [
    ["服务业", "fuwuye"],
    [
      ["酒保", "jiubao"],
      ["服务生", "fuwusheng"],
      ["管家、佣人", "guanjiayongren"],
      ["勤杂护工", "qinzahugong"],
      ["殡葬师", "binzangshi"],
      ["饲养员", "siyangyuan"],
      ["动物训练师", "dongwuxunlianshi"]
    ]
  ],
  [
    ["宗教相关", "zongjiaoxiangguan"],
    [
      ["神秘学家", "shenmixuejia"],
      ["神职人员", "shenzhirenyuan"],
      ["教团首领", "jiaotuanshouling"],
      ["传教士", "chuanjiaoshi"],
      ["除魅师(现代)", "chumeishixiandai"],
      ["狂热者", "kuangrezhe"],
      ["部落成员", "buluochengyuan"]
    ]
  ],
  [
    ["灰色/无职", "huisewuzhi"],
    [
      ["私家侦探", "sijiazhentan"],
      ["黑客", "heike"],
      ["黑帮老大", "heibanglaoda"],
      ["黑帮马仔", "heibangmazai"],
      ["性工作者", "xinggongzuozhe"],
      ["赏金猎人", "shangjinlieren"],
      ["赌徒", "dutu"],
      ["游民", "youmin"],
      ["流浪者", "liulangzhe"],
      ["淘金客", "taojinke"],
      ["绅士/淑女", "shenshishunv"]
    ]
  ],
  [
    ["罪犯", "zuifan"],
    [
      ["刺客", "cike"],
      ["银行劫匪", "yinhangjiefei"],
      ["打手、暴徒", "dashoubaotu"],
      ["窃贼", "qiezei"],
      ["欺诈师", "qizhashi"],
      ["独行罪犯", "duxingzuifan"],
      ["女飞贼(古典)", "nvfeizeigudian"],
      ["赃物贩子", "zangwufanzi"],
      ["赝造者", "yanzaozhe"],
      ["走私者", "zousizhe"],
      ["混混", "hunhun"]
    ]
  ],
  [
    ["军警政", "junjingzheng"],
    [
      ["军官", "junguan"],
      ["海军", "haijun"],
      ["间谍", "jiandie"],
      ["士兵", "shibing"],
      ["警探(原作向)", "jingtanyuanzuoxiang"],
      ["巡警(原作向)", "xunjingyuanzuoxiang"],
      ["消防员", "xiaofangyuan"],
      ["法官", "faguan"],
      ["司法人员", "sifarenyuan"],
      ["政府官员", "zhengfuguanyuan"],
      ["工会活动家", "gonghuihuodongjia"]
    ]
  ],
  [
    ["日本秘史", "ribenmishi"],
    [
      ["暴走族", "baozouzu"],
      ["风水师", "fengshuishi"],
      ["家传降妖人", "jiachuanjiangyaoren"],
      ["言灵师", "yanlingshi"],
      ["宫司", "gongsi"],
      ["炼丹师", "liandanshi"],
      ["黑帮", "heibang"],
      ["武术导师", "wushudaoshi"],
      ["忍者", "renzhe"]
    ]
  ],
  [
    ["日本现代", "ribenxiandai"],
    [
      ["舞者", "wuzhe"],
      ["冒险家教授", "maoxianjiajiaoshou"],
      ["偶像", "ouxiang"],
      ["歌手", "geshou"],
      ["网络明星", "wangluomingxing"],
      ["经纪人", "jingjiren"],
      ["机械师", "jixieshi"],
      ["厨师", "chushi"],
      ["私立七伏学园-普通科", "silisiqifuxueyuanputongke"],
      ["私立七伏学园-国际科", "silisiqifuxueyuanguojike"],
      ["私立七伏学园-艺术科", "silisiqifuxueyuanyishuke"],
      ["私立七伏学园-运动科", "silisiqifuxueyuanyundongke"]
    ]
  ]
], mu = {
  "文物学家(原作向)": {
    wealth: 30,
    skills: [
      { 技艺: "估价" },
      { 技艺: "" },
      "信用评级",
      "历史",
      { 外语: "" },
      "图书馆使用",
      "说服",
      "侦查"
    ]
  },
  艺术家: {
    wealth: 25,
    skills: [
      { 技艺: "" },
      "信用评级",
      "历史",
      { 外语: "" },
      "博物学",
      "说服",
      "心理学",
      "侦查"
    ]
  },
  运动员: {
    wealth: 20,
    skills: ["攀爬", "信用评级", { 格斗: "斗殴" }, "跳跃", "说服", "骑术", "游泳", "投掷"]
  },
  "作家(原作向)": {
    wealth: 20,
    skills: [
      { 技艺: "写作" },
      "信用评级",
      "历史",
      { 外语: "" },
      "图书馆使用",
      "博物学",
      "神秘学",
      "心理学"
    ]
  },
  神职人员: {
    wealth: 25,
    skills: [
      "信用评级",
      "历史",
      { 外语: "" },
      "图书馆使用",
      "聆听",
      "说服",
      "心理学",
      "安抚",
      { 宗教: "" }
    ]
  },
  独行罪犯: {
    wealth: 20,
    skills: [
      "信用评级",
      { 格斗: "斗殴" },
      { 射击: "手枪" },
      "法律",
      "锁匠",
      "说服",
      "心理学",
      "妙手",
      "侦查",
      "潜行"
    ]
  },
  "绅士/淑女": {
    wealth: 80,
    skills: [{ 技艺: "" }, "信用评级", { 射击: "步/霰" }, { 外语: "" }, "说服", "骑术"]
  },
  "医生(原作向)": {
    wealth: 30,
    skills: [
      "信用评级",
      "急救",
      { 外语: "拉丁语" },
      "图书馆使用",
      "医学",
      "说服",
      "心理学",
      { 科学: "生物学" },
      { 科学: "药学" }
    ]
  },
  流浪者: {
    wealth: 5,
    skills: [
      { 技艺: "" },
      "攀爬",
      "信用评级",
      { 格斗: "斗殴" },
      "跳跃",
      "聆听",
      "导航",
      "说服",
      "潜行"
    ]
  },
  工程师: {
    wealth: 30,
    skills: [
      { 技艺: "技术制图" },
      "信用评级",
      "电气维修",
      "图书馆使用",
      "机械维修",
      "操作重型机械",
      { 科学: "工程学" },
      { 科学: "物理" }
    ]
  },
  艺人: {
    wealth: 20,
    skills: [
      { 技艺: "表演" },
      { 技艺: "乔装" },
      "信用评级",
      { 外语: "" },
      "图书馆使用",
      "聆听",
      "说服",
      "心理学",
      "妙手"
    ]
  },
  农民: {
    wealth: 20,
    skills: [
      { 技艺: "农艺" },
      "信用评级",
      "汽车驾驶",
      { 射击: "步/霰" },
      "机械维修",
      "博物学",
      "操作重型机械",
      "说服",
      "追踪"
    ]
  },
  程序员: {
    wealth: 40,
    skills: [
      "计算机使用Ω",
      "信用评级",
      "电气维修",
      "电子学Ω",
      "法律",
      "图书馆使用",
      { 科学: "数学" },
      "侦查"
    ]
  },
  "调查记者(原作向)": {
    wealth: 30,
    skills: [
      { 技艺: "摄影" },
      "信用评级",
      "历史",
      "法律",
      "图书馆使用",
      "聆听",
      "说服",
      "心理学",
      "侦查"
    ]
  },
  律师: {
    wealth: 55,
    skills: ["会计", "信用评级", "历史", "法律", "图书馆使用", "说服", "心理学", "安抚"]
  },
  "图书馆管理员(原作向)": {
    wealth: 25,
    skills: [
      "会计",
      { 技艺: "艺术史" },
      "信用评级",
      "历史",
      { 外语: "" },
      "图书馆使用",
      "聆听",
      "博物学",
      "神秘学",
      { 宗教: "" },
      "潜行"
    ]
  },
  军官: {
    wealth: 40,
    skills: [
      "会计",
      "信用评级",
      { 格斗: "斗殴" },
      { 射击: "手枪" },
      { 射击: "步/霰" },
      "急救",
      { 外语: "" },
      "导航",
      "说服",
      "心理学",
      "生存"
    ]
  },
  音乐家: {
    wealth: 30,
    skills: [
      { 技艺: "音乐" },
      "信用评级",
      "历史",
      { 外语: "" },
      "图书馆使用",
      "聆听",
      "说服",
      "心理学"
    ]
  },
  神秘学家: {
    wealth: 20,
    skills: [
      { 技艺: "摄影" },
      "信用评级",
      "历史",
      { 外语: "" },
      "图书馆使用",
      "神秘学",
      "心理学",
      { 科学: "人类学" }
    ]
  },
  飞行员: {
    wealth: 50,
    skills: [
      "信用评级",
      "电气维修",
      "机械维修",
      "导航",
      "操作重型机械",
      { 驾驶: "飞行器" },
      { 科学: "天文学" }
    ]
  },
  "警探(原作向)": {
    wealth: 35,
    skills: [
      { 技艺: "" },
      "信用评级",
      "汽车驾驶",
      { 格斗: "斗殴" },
      { 射击: "手枪" },
      { 射击: "步/霰" },
      "法律",
      "聆听",
      "说服",
      "心理学",
      "侦查"
    ]
  },
  "巡警(原作向)": {
    wealth: 20,
    skills: [
      "攀爬",
      "信用评级",
      "汽车驾驶",
      { 格斗: "斗殴" },
      { 射击: "手枪" },
      { 射击: "步/霰" },
      "急救",
      "法律",
      "导航",
      "说服",
      "心理学",
      "侦查"
    ]
  },
  私家侦探: {
    wealth: 20,
    skills: [
      { 技艺: "摄影" },
      { 技艺: "乔装" },
      "信用评级",
      { 射击: "手枪" },
      "法律",
      "图书馆使用",
      "锁匠",
      "说服",
      "心理学",
      "侦查",
      "追踪"
    ]
  },
  "教授(原作向)": {
    wealth: 60,
    skills: ["信用评级", { 外语: "" }, "图书馆使用", "说服", "心理学"],
    bonus: 90
  },
  士兵: {
    wealth: 20,
    skills: [
      "攀爬",
      "信用评级",
      { 格斗: "斗殴" },
      { 射击: "手枪" },
      { 射击: "步/霰" },
      "急救",
      { 外语: "" },
      "机械维修",
      "导航",
      "潜行",
      "生存",
      "游泳"
    ]
  }
}, Bt = /* @__PURE__ */ new Set(["取悦", "话术", "恐吓", "说服", "魅惑"]);
function yu([t, e]) {
  return t < 0 || e < 0 ? Math.max(t, e) : Math.max(0, Math.min(99, Math.round((t + e) / 2 / 5) * 5));
}
function wa(t) {
  if (typeof t == "string")
    return Bt.has(t) ? "说服" : t === "估价" || t === "乔装" ? { 技艺: t } : t === "人类学" ? { 科学: "人类学" } : t;
  const [e] = Object.entries(t)[0] || [];
  if (!e) return t;
  const n = e.split("(")[0];
  return Bt.has(n) ? "说服" : n === "生存" ? "生存" : t;
}
function hu(t) {
  const e = t.map(wa).flat(), n = /* @__PURE__ */ new Set(), r = [];
  return e.forEach((o) => {
    const a = typeof o == "string" ? o : JSON.stringify(o);
    n.has(a) || (n.add(a), r.push(o));
  }), r.length === 1 ? r[0] : r;
}
function gu(t) {
  const e = /* @__PURE__ */ new Set(), n = [], r = (o) => {
    if (typeof o == "string") {
      if (e.has(o)) return;
      e.add(o);
    }
    n.push(o);
  };
  return t.forEach((o) => {
    if (Array.isArray(o)) {
      const l = hu(o), s = Array.isArray(l) ? l : [l], i = [];
      s.forEach((u) => {
        if (typeof u == "string") {
          if (e.has(u)) return;
          e.add(u);
        }
        i.push(u);
      }), i.length === 1 ? n.push(i[0]) : i.length > 1 && n.push(i);
      return;
    }
    const a = wa(o);
    Array.isArray(a) ? a.length === 1 ? r(a[0]) : n.push(a) : r(a);
  }), n;
}
function vu(t) {
  let e = 0;
  return t.forEach((n) => {
    if (typeof n == "string") {
      Bt.has(n) && e++;
      return;
    }
    if (Array.isArray(n)) {
      n.some((o) => typeof o == "string" && Bt.has(o)) && e++;
      return;
    }
    const [r] = Object.entries(n)[0] || [];
    r && (Bt.has(r.split("(")[0]) || r.split("(")[0] === "社交") && e++;
  }), e;
}
function wu(t) {
  return Math.max(0, vu(t) - 1);
}
const bu = [
  {
    name: "私立七伏学园-普通科",
    point: [],
    pointAlternatives: [
      [
        ["edu", 2],
        ["pow", 2]
      ],
      [["edu", 4]]
    ],
    wealth: [10, 10],
    skills: ["图书馆使用", { 母语: "" }, "侦查", "说服"],
    freeSkills: [
      { name: "社团活动相关技能", count: 2 },
      { name: "其他任意技能", count: 2 }
    ],
    newRulesOnly: !0
  },
  {
    name: "私立七伏学园-国际科",
    point: [],
    pointAlternatives: [
      [
        ["edu", 2],
        ["pow", 2]
      ],
      [["edu", 4]]
    ],
    wealth: [10, 10],
    skills: ["图书馆使用", { 母语: "" }, { 外语: "英语" }, "侦查"],
    freeSkills: [
      { name: "社团活动相关技能", count: 2 },
      { name: "其他任意技能", count: 2 }
    ],
    newRulesOnly: !0
  },
  {
    name: "私立七伏学园-艺术科",
    point: [],
    pointAlternatives: [
      [
        ["edu", 2],
        ["dex", 2]
      ],
      [
        ["edu", 2],
        ["pow", 2]
      ]
    ],
    wealth: [15, 15],
    skills: [{ 技艺: "" }, "博物学", "图书馆使用", "侦查", "说服"],
    freeSkills: [{ name: "其他任意技能", count: 3 }],
    newRulesOnly: !0
  },
  {
    name: "私立七伏学园-运动科",
    point: [],
    pointAlternatives: [
      [
        ["edu", 2],
        ["str", 2]
      ],
      [
        ["edu", 2],
        ["dex", 2]
      ],
      [
        ["edu", 2],
        ["con", 2]
      ]
    ],
    wealth: [10, 10],
    skills: [
      { 格斗: "" },
      { "运动(指定运动项目，自定义技能)": "" },
      "跳跃",
      "投掷",
      "攀爬",
      "说服"
    ],
    freeSkills: [
      { name: "社团活动相关技能", count: 1 },
      { name: "其他任意技能", count: 1 }
    ],
    newRulesOnly: !0
  }
], _n = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "七",
  8: "八",
  9: "九"
}, ko = {
  str: "力量",
  dex: "敏捷",
  con: "体质",
  app: "外貌",
  pow: "意志",
  siz: "体型",
  edu: "教育",
  int: "智力"
}, $e = {
  revisedMov: !1,
  revisedOccupations: !1,
  revisedSkills: !1,
  revisedInterest: !1,
  revisedStory: !1
};
function _u(t, e) {
  const n = /* @__PURE__ */ new Map();
  t.forEach((o) => {
    n.set(o.name, o);
  });
  const r = e.map((o) => {
    const [a, l] = o[0], s = o[1].map(([i, u]) => ({
      name: i,
      pinyin: u
    }));
    return {
      name: a,
      pinyin: l,
      jobs: s
    };
  });
  return {
    jobs: n,
    jobGroups: r
  };
}
const pn = _u([...du, ...bu], fu);
function Ot(t, e = $e) {
  const n = pn.jobs.get(t || "");
  if (!n || n.newRulesOnly && !e.revisedOccupations) return;
  if (!e.revisedOccupations) return n;
  const r = mu[n.name];
  if (r)
    return {
      ...n,
      wealth: [r.wealth, r.wealth],
      skills: r.skills,
      bonus: r.bonus ?? n.bonus
    };
  const o = yu(n.wealth), a = gu(n.skills), l = n.newRulesOnly ? 0 : wu(n.skills), s = (n.freeSkills ?? []).reduce(
    (c, d) => c + d.count,
    0
  ), i = Math.max(
    0,
    8 - a.length - s - l
  ), u = l > 0 ? [
    ...n.freeSkills ?? [],
    { name: "自选特长技能", count: l },
    ...i > 0 ? [{ name: "其他个人或时代特长", count: i }] : []
  ] : n.freeSkills;
  return {
    ...n,
    wealth: [o, o],
    skills: a,
    freeSkills: u
  };
}
function ba(t = $e) {
  return t.revisedOccupations ? pn.jobGroups : pn.jobGroups.map((e) => ({
    ...e,
    jobs: e.jobs.filter((n) => {
      var r;
      return !((r = pn.jobs.get(n.name)) != null && r.newRulesOnly);
    })
  })).filter((e) => e.jobs.length > 0);
}
function Or(t, e, n = $e) {
  var l;
  const r = {
    text: "",
    point: 0
  }, o = Ot(t, n);
  if (!o) return r;
  const a = [];
  if ((l = o.pointAlternatives) != null && l.length) {
    const s = [], i = [];
    o.pointAlternatives.forEach((u) => {
      const c = u.map(([d, f]) => `${ko[d]}×${f}`);
      s.push(c.join(" + ")), e && i.push(
        u.reduce((d, [f, h]) => d + (e[f] || 0) * h, 0)
      );
    }), e && (r.point = Math.max(...i)), a.push(s.join(" 或 "));
  } else
    o.point.forEach((s) => {
      const i = [], u = [];
      s.forEach(([d, f]) => {
        i.push(`${ko[d]}×${f}`), e && u.push((e[d] || 0) * f);
      });
      let c = i.join(" 或 ");
      i.length > 1 && (c = `(${c})`), a.push(c), r.point += Math.max(...u);
    });
  return o.bonus && (r.point += o.bonus, a.push(`${o.bonus}`)), r.text = a.join(" + "), r;
}
function Su(t, e) {
  if (!t || !e) return null;
  const n = t + e;
  if (n < 65) return { db: "-2", size: "-2" };
  if (n < 85) return { db: "-1", size: "-1" };
  if (n < 125) return { db: "0", size: "0" };
  if (n < 165) return { db: "1D4", size: "1" };
  if (n < 205) return { db: "1D6", size: "2" };
  const r = Math.floor((n - 205) / 80) + 2;
  return { db: `${r}D6`, size: `${r + 1}` };
}
function _a(t, e, n, r = $e) {
  if (!t || !e || !n) return null;
  if (r.revisedMov) {
    let o = 7;
    return t > e && (o += 1), n > e && (o += 1), `${o}`;
  }
  return t < e && n < e ? "7" : t > e && n > e ? "9" : "8";
}
const Qn = {
  取悦: 0,
  话术: 1,
  恐吓: 2,
  说服: 3
}, ku = ["取悦", "话术", "恐吓", "说服"];
function Au(t, e, n) {
  var i;
  const r = ((i = e == null ? void 0 : e.showingChildSkills) == null ? void 0 : i.社交) ?? [], o = ku[t], a = (u) => !(n != null && n.has(u)), l = r.indexOf(o);
  if (l !== -1 && a(l)) return l;
  const s = r.findIndex((u, c) => !u && a(c));
  if (s !== -1) return s;
  for (let u = 0; ; u++)
    if (a(u)) return u;
}
function Sa(t, e, n) {
  if (!t || t.length === 0)
    return { skillPoints: t ?? [], proSkills: e ?? [] };
  const r = [];
  let o = !1;
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map(), u = (y) => {
    const m = i.get(y);
    if (m !== void 0) return m;
    const _ = Au(Qn[y], n, s);
    return s.add(_), i.set(y, _), _;
  };
  for (const [y, m] of t)
    if (typeof y == "string" && y in Qn) {
      o = !0;
      const _ = u(y);
      a.set(_, y), r.push([["社交", y, _], m]);
    } else
      r.push([y, m]);
  if (!o)
    return { skillPoints: t, proSkills: e ?? [] };
  const c = [];
  if (e)
    for (const y of e)
      if (typeof y == "string" && y in Qn) {
        const m = u(y);
        l.set(m, y), c.push(["社交", y, m]);
      } else
        c.push(y);
  const d = new Map([...a, ...l]), f = Math.max(...d.keys()), h = Array.from(
    { length: f + 1 },
    (y, m) => d.get(m) ?? ""
  );
  return {
    skillPoints: r,
    proSkills: c,
    showingChildSkillsPatch: { 社交: h }
  };
}
const Ao = /* @__PURE__ */ new Set(["取悦", "话术", "恐吓", "说服", "魅惑"]), _t = {
  估价: { group: "技艺", child: "估价" },
  乔装: { group: "技艺", child: "乔装" },
  人类学: { group: "科学", child: "人类学" }
};
function ka(t) {
  return typeof t == "string" ? t : `${t[0]}|${t[1]}|${t[2]}`;
}
function dn(t, e) {
  ["b", "p", "i", "g"].forEach((n) => {
    const r = Number(e[n] ?? 0);
    r && (t[n] = Number(t[n] ?? 0) + r);
  }), e.c && (t.c = !0);
}
function $u(t, e, n) {
  const r = {}, o = (v) => (r[v] || (r[v] = [...(n == null ? void 0 : n.showingChildSkills[v]) ?? []]), r[v]), a = (v, w) => {
    const p = o(v), g = p.indexOf(w);
    if (g !== -1) return g;
    const k = p.indexOf("");
    return k !== -1 ? (p[k] = w, k) : (p.push(w), p.length - 1);
  };
  let l = null, s = null;
  const i = /* @__PURE__ */ new Map(), u = [];
  let c = !1;
  const d = (v, w) => v ? (dn(v, w), v) : { ...w };
  if ((t ?? []).forEach(([v, w]) => {
    if (typeof v == "string") {
      if (Ao.has(v)) {
        l = d(l, w), c = !0;
        return;
      }
      if (v === "生存") {
        s = d(s, w), c = !0;
        return;
      }
      const p = _t[v];
      if (p) {
        const g = `${p.group}|${p.child}`, k = i.get(g);
        k ? dn(k.point, w) : i.set(g, { ...p, point: { ...w } }), c = !0;
        return;
      }
    } else {
      const [p, g, k] = v;
      if (p === "社交") {
        l = d(l, w), c = !0;
        return;
      }
      if (p === "生存") {
        s = d(s, w), c = !0;
        return;
      }
      if (p === "技艺" && (g === "估价" || g === "乔装") || p === "科学" && g === "人类学") {
        const x = `${p}|${g}`, I = i.get(x);
        I ? (dn(I.point, w), I.slot === void 0 && (I.slot = k)) : i.set(x, { group: p, child: g, slot: k, point: { ...w } }), c = !0;
        return;
      }
    }
    u.push([v, w]);
  }), !c && !(e != null && e.length))
    return { skillPoints: t ?? [], proSkills: e ?? [] };
  const f = [...u];
  l && f.push(["说服", l]), s && f.push(["生存", s]);
  const h = /* @__PURE__ */ new Map();
  i.forEach(({ group: v, child: w, slot: p, point: g }) => {
    const k = p ?? a(v, w);
    o(v)[k] = w;
    const S = [v, w, k];
    h.set(w, S), f.push([S, g]);
  });
  const y = [], m = /* @__PURE__ */ new Set(), _ = (v) => {
    const w = ka(v);
    m.has(w) || (m.add(w), y.push(v));
  };
  return (e ?? []).forEach((v) => {
    if (typeof v == "string") {
      if (Ao.has(v)) {
        _("说服");
        return;
      }
      if (v === "生存") {
        _("生存");
        return;
      }
      const k = _t[v];
      if (k) {
        let S = h.get(k.child);
        if (!S) {
          const x = a(k.group, k.child);
          S = [k.group, k.child, x], h.set(k.child, S);
        }
        _(S);
        return;
      }
      _(v);
      return;
    }
    const [w, p, g] = v;
    if (w === "社交") {
      _("说服");
      return;
    }
    if (w === "生存") {
      _("生存");
      return;
    }
    if (w === "技艺" && (p === "估价" || p === "乔装") || w === "科学" && p === "人类学") {
      const k = [w, p, g];
      h.set(p, k), _(k);
      return;
    }
    _(v);
  }), {
    skillPoints: f,
    proSkills: y,
    showingChildSkillsPatch: Object.keys(r).length ? r : void 0
  };
}
function Pu(t, e, n) {
  const r = Sa(t, e, n), o = [], a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  let s = null, i = !1;
  const u = (m, _) => m ? (dn(m, _), m) : { ..._ }, c = (m, _) => {
    a.set(m, u(a.get(m) ?? null, _));
    const v = _t[m];
    if (v) {
      const w = l.get(v.group) ?? /* @__PURE__ */ new Set();
      w.add(m), l.set(v.group, w);
    }
    i = !0;
  };
  if (r.skillPoints.forEach(([m, _]) => {
    if (typeof m == "string") {
      if (m === "生存") {
        s = u(s, _), i = !0;
        return;
      }
      if (_t[m]) {
        c(m, _);
        return;
      }
      o.push([m, _]);
      return;
    }
    const [v, w] = m;
    if (v === "生存") {
      s = u(s, _), i = !0;
      return;
    }
    const p = _t[w];
    if (p && p.group === v) {
      c(w, _);
      return;
    }
    o.push([m, _]);
  }), !i) return r;
  a.forEach((m, _) => {
    o.push([_, m]);
  });
  const d = { ...r.showingChildSkillsPatch ?? {} };
  s && (o.push([["生存", "", 0], s]), d.生存 = [""]), l.forEach((m, _) => {
    const v = [
      ...d[_] ?? (n == null ? void 0 : n.showingChildSkills[_]) ?? []
    ];
    let w = !1;
    const p = v.map((g) => m.has(g) ? (w = !0, "") : g);
    w && (d[_] = p);
  });
  const f = [], h = /* @__PURE__ */ new Set(), y = (m) => {
    const _ = ka(m);
    h.has(_) || (h.add(_), f.push(m));
  };
  return r.proSkills.forEach((m) => {
    if (typeof m == "string") {
      if (m === "生存") {
        y(["生存", "", 0]);
        return;
      }
      y(m);
      return;
    }
    const [_, v] = m;
    if (_ === "生存") {
      y(["生存", "", 0]);
      return;
    }
    const w = _t[v];
    if (w && w.group === _) {
      y(v);
      return;
    }
    y(m);
  }), {
    skillPoints: o,
    proSkills: f,
    showingChildSkillsPatch: Object.keys(d).length ? d : void 0
  };
}
function xu(t, e, n, r, o) {
  const a = { ...t }, l = (c, d, f) => {
    const h = Number(c);
    return !c || Number.isNaN(h) ? Math.max(d, f) : Math.max(h, d);
  };
  if (e) {
    const { point: c } = Or(e, n, r);
    c > 0 && (a.pro = `${l(a.pro, c, o.pro)}`);
  }
  const s = n == null ? void 0 : n.edu, i = n == null ? void 0 : n.int, u = r.revisedInterest ? s && i ? s + i : 0 : i ? i * 2 : 0;
  return u && (a.interest = `${l(a.interest, u, o.interest)}`), a;
}
function Iu(t) {
  var e, n, r;
  return {
    mental: {
      hardened: ((e = t == null ? void 0 : t.mental) == null ? void 0 : e.hardened) ?? !1,
      permanentMadness: ((n = t == null ? void 0 : t.mental) == null ? void 0 : n.permanentMadness) ?? !1,
      indefiniteMadness: ((r = t == null ? void 0 : t.mental) == null ? void 0 : r.indefiniteMadness) ?? !1
    }
  };
}
function Eu(t) {
  return {
    currency: (t == null ? void 0 : t.currency) ?? (t == null ? void 0 : t.cash) ?? "",
    assets: (t == null ? void 0 : t.assets) ?? "",
    items: (t == null ? void 0 : t.items) ?? "",
    magicItems: (t == null ? void 0 : t.magicItems) ?? "",
    magics: (t == null ? void 0 : t.magics) ?? "",
    touches: (t == null ? void 0 : t.touches) ?? ""
  };
}
function Je(t, e, n = $e, r) {
  var _, v;
  const o = Iu(t == null ? void 0 : t.status), a = Eu(t == null ? void 0 : t.assets), l = n.revisedSkills ? $u(
    t == null ? void 0 : t.skillPoints,
    t == null ? void 0 : t.proSkills,
    r
  ) : (r == null ? void 0 : r.ruleFormat) === "new" ? (_ = r.ruleMigration) != null && _.revertedToOld ? {
    // 已回退过一次，禁止再次自动转换，保留新版数据
    skillPoints: (t == null ? void 0 : t.skillPoints) ?? [],
    proSkills: (t == null ? void 0 : t.proSkills) ?? []
  } : Pu(
    t == null ? void 0 : t.skillPoints,
    t == null ? void 0 : t.proSkills,
    r
  ) : Sa(
    t == null ? void 0 : t.skillPoints,
    t == null ? void 0 : t.proSkills,
    r
  ), { skillPoints: s, proSkills: i, showingChildSkillsPatch: u } = l, c = xu(
    t == null ? void 0 : t.pointValues,
    t == null ? void 0 : t.job,
    t == null ? void 0 : t.attributes,
    n,
    {
      pro: s.reduce((w, [, p]) => w + Number(p.p ?? 0), 0),
      interest: s.reduce((w, [, p]) => w + Number(p.i ?? 0), 0)
    }
  ), d = {
    name: "",
    playerName: "",
    time: "",
    job: "",
    age: "",
    gender: "",
    location: "",
    attributes: {},
    battleAttributes: {},
    weapons: [dr(Rr[0])],
    stories: {
      app: "",
      belief: "",
      IPerson: "",
      IPlace: "",
      IItem: "",
      trait: "",
      scar: "",
      mad: "",
      desc: ""
    },
    experiencedModules: "",
    experiencedModules2: "",
    friends: "",
    // override 在先，安全默认值在后，防止老存档 undefined 冲掉默认值
    ...t,
    hometown: (t == null ? void 0 : t.hometown) ?? "",
    pointValues: c,
    proSkills: i,
    skillPoints: s,
    assets: a,
    status: o
  }, { str: f, siz: h, dex: y } = d.attributes, m = _a(f, h, y, n);
  if (m && d.battleAttributes.mov !== m && (d.battleAttributes.mov = m), n.revisedStory && ((v = d.stories) != null && v.IPlace)) {
    const w = d.stories.IPlace.trim();
    w && (d.stories = {
      ...d.stories,
      IPerson: [d.stories.IPerson, w].filter((p) => p && p.trim()).join(`
`),
      IPlace: ""
    });
  }
  return e ? { pc: d, showingChildSkillsPatch: u } : d;
}
const Be = [
  {
    name: "信用评级",
    displayName: "信誉",
    init: 0
  },
  {
    name: "克苏鲁神话",
    init: 0
  },
  {
    name: "侦查",
    init: 25
  },
  {
    name: "聆听",
    init: 20
  },
  {
    name: "社交",
    init: 0,
    group: {
      show: ["", ""],
      skills: [
        { name: "取悦", init: 15 },
        { name: "话术", init: 5 },
        { name: "恐吓", init: 15 },
        { name: "说服", init: 10 }
      ]
    }
  },
  {
    name: "心理学",
    init: 10
  },
  {
    name: "母语",
    init: 0,
    initPlaceholder: "0",
    group: {
      show: [""],
      skills: [
        { name: "汉语" },
        { name: "英语" },
        { name: "日语" },
        { name: "法语" },
        { name: "俄语" },
        { name: "德语" },
        { name: "韩语" },
        { name: "粤语" },
        { name: "拉丁语" },
        { name: "荷兰语" },
        { name: "挪威语" },
        { name: "丹麦语" },
        { name: "印度语" },
        { name: "西班牙语" },
        { name: "葡萄牙语" },
        { name: "阿拉伯语" }
      ]
    }
  },
  {
    name: "外语",
    init: 1,
    group: {
      show: ["", ""],
      skills: [
        { name: "汉语" },
        { name: "英语" },
        { name: "日语" },
        { name: "法语" },
        { name: "俄语" },
        { name: "德语" },
        { name: "韩语" },
        { name: "粤语" },
        { name: "拉丁语" },
        { name: "荷兰语" },
        { name: "挪威语" },
        { name: "丹麦语" },
        { name: "印度语" },
        { name: "西班牙语" },
        { name: "葡萄牙语" },
        { name: "阿拉伯语" }
      ]
    }
  },
  {
    name: "估价",
    init: 5
  },
  {
    name: "乔装",
    init: 5
  },
  {
    name: "潜行",
    init: 20
  },
  {
    name: "追踪",
    init: 10
  },
  {
    name: "人类学",
    init: 1
  },
  {
    name: "图书馆使用",
    displayName: "图书馆",
    init: 20
  },
  {
    name: "生存",
    init: 5,
    group: {
      show: [""],
      skills: [
        {
          name: "沙漠",
          init: 5
        },
        {
          name: "森林",
          init: 5
        },
        {
          name: "荒岛",
          init: 5
        },
        {
          name: "高山",
          init: 5
        },
        {
          name: "海上",
          init: 5
        }
      ]
    }
  },
  {
    name: "攀爬",
    init: 20
  },
  {
    name: "跳跃",
    init: 20
  },
  {
    name: "游泳",
    init: 20
  },
  {
    name: "潜水",
    init: 1
  },
  {
    name: "技艺",
    init: 5,
    group: {
      show: ["", ""],
      skills: [
        {
          name: "表演",
          init: 5
        },
        {
          name: "音乐",
          init: 5
        },
        {
          name: "美术",
          init: 5
        },
        {
          name: "摄影",
          init: 5
        },
        {
          name: "写作",
          init: 5
        },
        {
          name: "书法",
          init: 5
        },
        {
          name: "打字",
          init: 5
        },
        {
          name: "速记",
          init: 5
        },
        {
          name: "伪造",
          init: 5
        },
        {
          name: "厨艺",
          init: 5
        },
        {
          name: "裁缝",
          init: 5
        },
        {
          name: "理发",
          init: 5
        },
        {
          name: "技术制图",
          init: 5
        },
        {
          name: "耕作",
          init: 5
        },
        {
          name: "木匠",
          init: 5
        },
        {
          name: "铁匠",
          init: 5
        },
        {
          name: "焊接",
          init: 5
        },
        {
          name: "管道工",
          init: 5
        },
        {
          name: "茶道",
          init: 5
        },
        {
          name: "生花",
          init: 5
        },
        {
          name: "盆栽",
          init: 5
        },
        {
          name: "石庭",
          init: 5
        },
        {
          name: "筝",
          init: 5
        },
        {
          name: "三味线",
          init: 5
        },
        {
          name: "尺八",
          init: 5
        },
        {
          name: "太鼓",
          init: 5
        },
        {
          name: "能乐",
          init: 5
        },
        {
          name: "歌舞伎",
          init: 5
        },
        {
          name: "文乐",
          init: 5
        },
        {
          name: "踊",
          init: 5
        },
        {
          name: "芸者",
          init: 5
        },
        {
          name: "俳句",
          init: 5
        },
        {
          name: "墨绘",
          init: 5
        },
        {
          name: "浮世绘",
          init: 5
        },
        {
          name: "漆器",
          init: 5
        },
        {
          name: "日本刀",
          init: 5
        },
        {
          name: "窑业",
          init: 5
        },
        {
          name: "人形",
          init: 5
        },
        {
          name: "着物",
          init: 5
        },
        {
          name: "织物",
          init: 5
        },
        {
          name: "和纸",
          init: 5
        },
        {
          name: "歌唱",
          init: 5
        },
        {
          name: "舞蹈",
          init: 5
        }
      ]
    }
  },
  {
    name: "妙手",
    init: 10
  },
  {
    name: "锁匠",
    init: 1
  },
  {
    name: "电气维修",
    init: 10
  },
  {
    name: "机械维修",
    init: 10
  },
  {
    name: "导航",
    init: 10
  },
  {
    name: "骑术",
    init: 5
  },
  {
    name: "操作重型机械",
    init: 1
  },
  {
    name: "汽车驾驶",
    init: 20
  },
  {
    name: "驾驶",
    init: 1,
    group: {
      show: [""],
      skills: [
        {
          name: "船",
          init: 1
        },
        {
          name: "马车",
          init: 1
        },
        {
          name: "飞行器",
          init: 1
        }
      ]
    }
  },
  {
    name: "驯兽",
    init: 5
  },
  {
    name: "计算机使用Ω",
    displayName: "计算机",
    init: 5
  },
  {
    name: "格斗",
    init: 0,
    group: {
      show: ["斗殴", "", ""],
      skills: [
        {
          name: "斗殴",
          init: 25
        },
        {
          name: "刀剑",
          init: 20
        },
        {
          name: "矛",
          init: 20
        },
        {
          name: "斧",
          init: 15
        },
        {
          name: "绞索",
          init: 15
        },
        {
          name: "链锯",
          init: 10
        },
        {
          name: "链枷",
          init: 10
        },
        {
          name: "鞭",
          init: 5
        }
      ]
    }
  },
  {
    init: 0,
    name: "射击",
    group: {
      show: ["手枪", "", ""],
      skills: [
        {
          name: "手枪",
          init: 20
        },
        {
          name: "步/霰",
          init: 25
        },
        {
          name: "冲锋枪",
          init: 15
        },
        {
          name: "弓弩",
          init: 15
        },
        {
          name: "机枪",
          init: 10
        },
        {
          name: "重武器",
          init: 10
        }
      ]
    }
  },
  {
    name: "闪避",
    init: 0,
    initPlaceholder: "0"
  },
  {
    name: "投掷",
    init: 20
  },
  {
    name: "武术",
    init: 15,
    group: {
      show: ["", "", ""],
      skills: [
        { name: "合气道", init: 15 },
        { name: "居合", init: 15 },
        { name: "柔术", init: 15 },
        { name: "空手道", init: 15 },
        { name: "剑道", init: 15 },
        { name: "弓道", init: 15 },
        { name: "薙刀", init: 15 },
        { name: "忍术", init: 15 },
        { name: "太极", init: 15 }
      ]
    }
  },
  {
    name: "爆破",
    init: 1
  },
  {
    name: "炮术",
    init: 1
  },
  {
    name: "急救",
    init: 30
  },
  {
    name: "医学",
    init: 1
  },
  {
    name: "精神分析",
    init: 1
  },
  {
    name: "催眠",
    init: 1
  },
  {
    name: "东方医学",
    displayName: "中医",
    init: 25,
    group: {
      show: ["", ""],
      skills: [
        { name: "针术", init: 25 },
        { name: "指压", init: 25 },
        { name: "灸术", init: 25 },
        { name: "药术", init: 25 }
      ]
    }
  },
  {
    name: "会计",
    init: 5
  },
  {
    name: "法律",
    init: 5
  },
  {
    name: "历史",
    init: 5
  },
  {
    name: "考古学",
    init: 1
  },
  {
    name: "博物学",
    init: 10
  },
  {
    name: "武士道",
    init: 10
  },
  //   {
  //     name: '通灵',
  //     init: 5,
  //     intro: '与灵体、精怪、鬼神等超自然存在进行沟通与交涉的能力，可能涉及降灵术、灵视、灵媒等技术。',
  //   },
  {
    name: "稽古",
    init: 5,
    group: {
      show: [""],
      skills: [
        { name: "茶道", init: 5 },
        { name: "书道", init: 5 },
        { name: "花道", init: 5 },
        { name: "琴道", init: 5 },
        { name: "三味线", init: 5 }
      ]
    }
  },
  {
    name: "神秘学",
    init: 5
  },
  {
    name: "电子学Ω",
    displayName: "电子学",
    init: 1
  },
  {
    name: "科学",
    init: 1,
    group: {
      show: ["", ""],
      skills: [
        {
          name: "数学",
          init: 10
        },
        {
          name: "物理",
          init: 1
        },
        {
          name: "化学",
          init: 1
        },
        {
          name: "药学",
          init: 1
        },
        {
          name: "地质学",
          init: 1
        },
        {
          name: "生物学",
          init: 1
        },
        {
          name: "动物学",
          init: 1
        },
        {
          name: "植物学",
          init: 1
        },
        {
          name: "天文学",
          init: 1
        },
        {
          name: "密码学",
          init: 1
        },
        {
          name: "气象学",
          init: 1
        },
        {
          name: "工程学",
          init: 1
        },
        {
          name: "鉴证",
          init: 1
        },
        {
          name: "制药",
          init: 1
        }
      ]
    }
  },
  {
    init: 0,
    name: "",
    group: {
      show: ["", "", "", "", "", ""],
      skills: []
    }
  }
], Mr = {
  信用评级: ["信用", "信誉"],
  克苏鲁神话: ["克苏鲁"],
  取悦: ["魅惑"],
  汽车驾驶: ["汽车", "驾驶"],
  图书馆使用: ["图书馆"],
  计算机使用Ω: ["计算机", "电脑"],
  "步/霰": ["步枪", "霰弹枪"],
  锁匠: ["开锁", "撬锁"],
  博物学: ["自然学"],
  导航: ["领航"],
  操作重型机械: ["重型机械", "重型操作", "重型"]
};
function Cu(t) {
  return JSON.parse(JSON.stringify(t));
}
function $o(t, e) {
  var n;
  (n = t == null ? void 0 : t.group) == null || n.skills.forEach((r) => {
    r.name in e && (r.init = e[r.name]);
  });
}
function We(t, e, n) {
  t != null && t.group && (t.group.skills.some((r) => r.name === e) || t.group.skills.push({ name: e, init: n }));
}
function Du() {
  const t = Be.map(Cu), e = new Map(t.map((c) => [c.name, c]));
  Object.entries({
    侦查: 25,
    聆听: 20,
    心理学: 10,
    潜行: 20,
    追踪: 10,
    图书馆使用: 20,
    攀爬: 20,
    跳跃: 20,
    游泳: 20,
    潜水: 1,
    妙手: 10,
    锁匠: 1,
    电气维修: 10,
    机械维修: 10,
    导航: 10,
    骑术: 5,
    操作重型机械: 1,
    汽车驾驶: 20,
    驯兽: 5,
    计算机使用Ω: 5,
    投掷: 20,
    急救: 30,
    医学: 1,
    精神分析: 1,
    催眠: 1,
    会计: 5,
    法律: 5,
    历史: 5,
    考古学: 1,
    博物学: 10,
    神秘学: 5,
    电子学Ω: 1,
    爆破: 1,
    炮术: 1
  }).forEach(([c, d]) => {
    const f = e.get(c);
    f && (f.init = d);
  });
  const r = e.get("博物学");
  r && (r.displayName = "自然学");
  const o = e.get("生存");
  o && (o.init = 10, delete o.group);
  const a = e.get("技艺");
  a && (a.displayName = "技艺", a.init = 5, a.group && (a.group.show = ["", "", ""], We(a, "估价", 5), We(a, "乔装", 5), We(a, "文学", 5), We(a, "艺术史", 5), We(a, "农艺", 5)));
  const l = e.get("科学");
  l != null && l.group && (l.init = 1, l.group.show = ["", "", ""], l.group.skills.forEach((c) => {
    c.init = 1;
  }), We(l, "人类学", 1), We(l, "法医学", 1)), $o(e.get("格斗"), {
    斗殴: 25,
    刀剑: 20,
    矛: 20,
    斧: 15,
    绞索: 15,
    链锯: 15,
    链枷: 15,
    鞭: 15
  });
  const s = e.get("射击");
  $o(s, {
    手枪: 20,
    "步/霰": 25,
    冲锋枪: 15,
    弓弩: 15,
    机枪: 15,
    重武器: 15,
    火焰喷射器: 15
  }), We(s, "火焰喷射器", 15);
  const i = /* @__PURE__ */ new Set(["社交", "估价", "乔装", "人类学"]), u = [];
  return t.forEach((c) => {
    if (c.name === "社交") {
      u.push({ name: "说服", init: 10 });
      return;
    }
    i.has(c.name) || u.push(c);
  }), u.push({
    name: "运动",
    init: 10,
    group: {
      show: [""],
      skills: []
    }
  }), u.push({ name: "安抚", init: 0 }), u.push({
    name: "宗教",
    init: 10,
    group: {
      show: [""],
      skills: []
    }
  }), u.push({ name: "读唇", init: 1 }), u;
}
const ct = Du(), Aa = (() => {
  const t = { ...Mr };
  return delete t.博物学, t;
})(), Ru = {
  特殊: ["信用评级", "克苏鲁神话"],
  探索: [
    "侦查",
    "聆听",
    "图书馆使用",
    "计算机使用Ω",
    "潜行",
    "追踪",
    "导航"
  ],
  社交: ["社交", "心理学", "母语", "外语"],
  战斗: [
    "闪避",
    "武术",
    "格斗",
    "射击",
    "投掷"
    // '爆破',
    // '炮术',
  ],
  医疗: [
    "急救",
    "医学",
    "东方医学",
    "精神分析"
    // '催眠',
  ],
  运动: [
    "攀爬",
    "跳跃",
    "游泳"
    // '潜水',
  ],
  知识: [
    "博物学",
    "武士道",
    // '通灵',
    "稽古",
    "神秘学",
    "考古学",
    "人类学",
    "估价",
    "会计",
    "法律",
    "历史",
    "电子学Ω",
    "科学"
  ],
  技术: [
    "乔装",
    "妙手",
    "锁匠",
    "机械维修",
    "电气维修",
    "驯兽",
    "技艺",
    "生存"
  ],
  操纵: [
    "汽车驾驶",
    "骑术",
    "驾驶"
    /* '操作重型机械' */
  ],
  其它: [""]
}, Ou = [
  "特殊",
  "探索",
  "社交",
  "战斗",
  "医疗",
  "运动",
  "知识",
  "技术",
  "操纵",
  "其它"
], Mu = {
  特殊: ["信用评级", "克苏鲁神话"],
  探索: [
    "侦查",
    "聆听",
    "图书馆使用",
    "计算机使用Ω",
    "潜行",
    "追踪",
    "导航"
  ],
  社交: ["说服", "心理学", "母语", "外语", "安抚"],
  战斗: [
    "闪避",
    "武术",
    "格斗",
    "射击",
    "投掷"
    /* '爆破', '炮术', */
  ],
  医疗: [
    "急救",
    "医学",
    "东方医学",
    "精神分析"
    /* '催眠', */
  ],
  运动: [
    "攀爬",
    "跳跃",
    "游泳",
    /* '潜水', */
    "运动"
  ],
  知识: [
    "博物学",
    "武士道",
    "稽古",
    "神秘学",
    "考古学",
    "会计",
    "法律",
    "历史",
    "电子学Ω",
    "科学",
    "宗教"
  ],
  技术: ["技艺", "妙手", "锁匠", "机械维修", "电气维修", "驯兽", "生存"],
  操纵: [
    "汽车驾驶",
    "骑术",
    "驾驶"
    /* '操作重型机械', */
  ],
  其它: [""]
}, Fu = [
  "特殊",
  "探索",
  "社交",
  "战斗",
  "医疗",
  "运动",
  "知识",
  "技术",
  "操纵",
  "其它"
];
function $a({
  skills: t,
  groups: e,
  groupOrder: n
}) {
  const r = /* @__PURE__ */ new Map();
  return t.forEach((a) => {
    r.set(a.name, a);
  }), n.map((a) => {
    const s = e[a].map((i) => r.get(i));
    return {
      groupName: a,
      groupSkills: s
    };
  });
}
const Tu = $a({
  skills: Be,
  groups: Ru,
  groupOrder: Ou
}), Nu = $a({
  skills: ct,
  groups: Mu,
  groupOrder: Fu
});
function Pa(t = $e) {
  return t.revisedSkills ? Nu : Tu;
}
function Fr(t = $e) {
  return t.revisedSkills ? ct : Be;
}
const Po = {
  母语: (t) => t.attributes.edu || 0,
  闪避: (t) => Math.floor((t.attributes.dex || 0) / 2),
  安抚: (t) => Math.floor((t.attributes.app || 0) / 5)
};
function Vu(t) {
  return t.group ? t.group.show.length : 1;
}
function Uu(t, e = 6) {
  const n = t.map(
    ({ groupSkills: s }) => s.reduce((i, u) => i + Vu(u), 0)
  ), r = n.reduce((s, i) => s + i, 0);
  let o = Math.min(e, n.length - 1), a = 1 / 0, l = 0;
  for (let s = 0; s < n.length - 1; s++) {
    l += n[s];
    const i = Math.abs(r - l * 2), u = i < a, c = i === a && Math.abs(s + 1 - e) < Math.abs(o - e);
    (u || c) && (a = i, o = s + 1);
  }
  return o;
}
function xa(t, e) {
  const n = /* @__PURE__ */ new Map();
  return t.forEach((r) => {
    var a;
    r.init && n.set(r.name, r.init);
    const o = e[r.name];
    o && o.forEach((l) => {
      r.init && n.set(l, r.init);
    }), (a = r.group) != null && a.skills && r.group.skills.forEach((l) => {
      l.init && n.set(l.name, l.init);
    });
  }), n;
}
const Bu = xa(Be, Mr), ju = xa(ct, Aa);
function jt(t, e, n = $e, r) {
  if (!t) return 0;
  if (n.revisedOccupations && t === "信用评级" && r) {
    const a = Ot(r, n);
    if (a) return a.wealth[0];
  }
  return e && t in Po ? Po[t](e) : (n.revisedSkills ? ju : Bu).get(t) ?? 0;
}
function Sn(t, e = $e) {
  const n = t.showingChildSkills ?? {};
  Fr(e).forEach((r) => {
    if (!r.group) return;
    const o = n[r.name];
    if (!o) {
      n[r.name] = [...r.group.show];
      return;
    }
    for (; o.length < r.group.show.length; ) o.push("");
  }), t.showingChildSkills = n;
}
function Ia(t, e = $e) {
  const n = e.revisedSkills ? ct : Be, r = e.revisedSkills ? Be : ct, o = {};
  return r.forEach((a) => {
    a.group && (o[a.name] = [...a.group.show]);
  }), n.forEach((a) => {
    a.group && (o[a.name] = [...a.group.show]);
  }), t && (t.showingChildSkills = o), o;
}
function zu(t, e, n = $e) {
  const { attributes: r, deriveAttributes: o, skillPoints: a, battleAttributes: l } = t, {
    str: s = 0,
    con: i = 0,
    siz: u = 0,
    dex: c = 0,
    app: d = 0,
    int: f = 0,
    pow: h = 0,
    edu: y = 0,
    luc: m = 0
  } = r, {
    hp: _ = { start: 0 },
    mp: v = { start: 0 },
    sanity: w = { now: 0, start: 0 }
  } = o || {}, p = w.now == null || w.now === "" ? w.start : w.now, g = (l == null ? void 0 : l.mov) ?? "", k = `${t.name}-力量${s}str${s}敏捷${c}dex${c}体质${i}con${i}外貌${d}app${d}智力${f}灵感${f}int${f}意志${h}pow${h}体型${u}siz${u}教育${y}edu${y}幸运${m}运气${m}luck${m}`, S = `hp${_.start}体力${_.start}mp${v.start}魔法${v.start}san${p}理智${p}理智值${p}san值${p}mov${g}移动力${g}`;
  let x = "";
  const I = {};
  a.forEach(([T, O]) => {
    var Z;
    let Q, re, ne;
    Array.isArray(T) ? ([Q, , ne] = T, re = (Z = e.showingChildSkills[Q]) == null ? void 0 : Z[ne]) : Q = T;
    const ae = re ? `${Q}-${re}` : Q;
    I[ae] = O;
  });
  const B = Fr(n), D = n.revisedSkills ? Aa : Mr;
  return B.forEach((T) => {
    var Z;
    const { name: O, displayName: Q, group: re } = T;
    let ne = jt(O, t, n, t.job);
    const ae = Q ?? O;
    if (re) {
      let z = 0;
      if ((Z = e.showingChildSkills[O]) == null || Z.forEach((V) => {
        if (!V) return;
        const H = `${O}-${V}`, te = I[H];
        if (O && (ne = jt(V, t, n, t.job) || ne), te) {
          const { b: C = O ? ne : 0, p: Y = 0, i: le = 0, g: Ie = 0 } = te;
          z = C + Y + le + Ie;
        } else re.show.includes(V) && (z = ne);
        V != "步/霰" && (x += `${V}${z}`);
        const N = D[V];
        N && (x += N.map((C) => `${C}${z}`).join("")), delete I[H];
      }), O === "母语")
        if (z)
          x += `母语${z}`;
        else {
          const V = I[O];
          if (V) {
            const { b: H = O ? ne : 0, p: te = 0, i: N = 0, g: C = 0 } = V;
            x += `母语${H + te + N + C}`;
          } else
            x += `母语${ne}`;
        }
    } else {
      const z = I[O];
      let V = 0;
      if (z) {
        const { b: te = O ? ne : 0, p: N = 0, i: C = 0, g: Y = 0 } = z;
        V = te + N + C + Y;
      } else
        V = ne;
      x += `${ae}${V}`;
      const H = D[O];
      H && (x += H.map((te) => `${te}${V}`).join("")), delete I[O];
    }
  }), `${k}${S}${x}`;
}
const Lu = {
  limitp: 80,
  limiti: 70
};
function Ea(t, e = $e) {
  const n = { ...Lu, ...t };
  return {
    showingChildSkills: Ia(void 0, e),
    // 显式 undefined，确保 Object.assign 时清除残留的 jobSkills
    jobSkills: void 0,
    skillLimits: {
      pro: n.limitp,
      interest: n.limiti
    },
    ruleFormat: e.revisedSkills ? "new" : "old",
    ruleMigration: void 0
  };
}
function Tt(t, e = $e) {
  return Ea(t, e);
}
function Wu(t, e = $e) {
  Object.assign(t, Ea(void 0, e));
}
function Ce(t) {
  const e = !!t;
  return {
    revisedMov: e,
    revisedOccupations: e,
    revisedSkills: e,
    revisedInterest: e,
    revisedStory: e
  };
}
function Gu(t) {
  _e(
    () => t.value.attributes,
    () => {
      var c, d, f, h, y, m;
      let e = "", n = "";
      const { con: r, siz: o, pow: a } = t.value.attributes || {};
      r && o && (e = `${Math.floor((r + o) / 10)}`), a && (n = `${Math.floor(a / 5)}`);
      const l = `${a || ""}`, s = (d = (c = t.value.deriveAttributes) == null ? void 0 : c.sanity) == null ? void 0 : d.now, i = (h = (f = t.value.deriveAttributes) == null ? void 0 : f.hp) == null ? void 0 : h.now, u = (m = (y = t.value.deriveAttributes) == null ? void 0 : y.mp) == null ? void 0 : m.now;
      t.value.deriveAttributes = {
        sanity: {
          start: l,
          now: s || l
        },
        hp: {
          start: e,
          now: i || e
        },
        mp: {
          start: n,
          now: u || n
        }
      };
    },
    { deep: !0 }
  );
}
function Hu(t) {
  return {
    wealth: [-1, -1],
    text: "",
    multiSkills: [],
    multiSkillTexts: [],
    ...t
  };
}
function Ca(t, e = $e) {
  var u;
  const n = Hu(), r = Ot(t, e), o = /* @__PURE__ */ new Map();
  if (!r) return n;
  const a = new Map(
    Fr(e).map((c) => [c.name, c.displayName ?? c.name])
  ), l = (c) => a.get(c) ?? c;
  n.wealth = [...r.wealth], r.skills.forEach((c) => {
    if (typeof c == "string")
      o.set(l(c), 0);
    else if (Array.isArray(c))
      n.multiSkills.push(
        c.map((d) => {
          if (typeof d == "string") return l(d);
          const [f, h] = Object.entries(d)[0];
          return { name: l(f), childName: h };
        })
      );
    else {
      const [d, f] = Object.entries(c)[0];
      let h = d;
      const y = d.includes("(");
      y && (h = h.split("(")[0]);
      let m = l(h);
      f && (m = `${l(h)}(${f})`), y && (m = `${l(h)}${d.slice(h.length)}`), o.set(
        m,
        y || f ? 0 : (o.get(m) || 0) + 1
      );
    }
  });
  const s = [...o.entries()].map(
    ([c, d]) => `${c}${d ? `(任${_n[`${d}`]})` : ""}`
  );
  return ((u = r.freeSkills) != null && u.length ? r.freeSkills : (() => {
    const c = Math.max(0, 8 - r.skills.length);
    return c ? [{ name: "其他个人或时代特长", count: c }] : [];
  })()).forEach(({ name: c, count: d }) => {
    s.push(`${c}${d ? `(任${_n[`${d}`]})` : ""}`);
  }), n.text = s.join("、"), n.multiSkillTexts = qu(n), n;
}
function qu(t) {
  const e = [];
  return t.multiSkills.forEach((r) => {
    const o = e.findIndex(([a]) => a.every((s, i) => {
      const u = r[i];
      return typeof s == "string" ? s === u : typeof u == "string" ? !1 : s.name === u.name && s.childName === u.childName;
    }));
    o === -1 ? e.push([r, 1, _n[`${r.length}`]]) : e[o][1] += 1;
  }), e.map((r) => {
    const a = r[0].map((l) => {
      let s = l;
      return typeof l != "string" && (s = `${l.name}:${l.childName || "任一"}`, l.name === "母语" && (s = "母语")), s;
    });
    return `${r[2]}选${_n[`${r[1]}`]}(${a})`;
  });
}
function Ju(t, e) {
  const { viewData: n, pageData: r, rules: o } = e, a = U(() => Ca(t.value.job, o.value));
  return _e(
    () => t.value.job,
    () => {
      const l = Ot(t.value.job, o.value);
      if (!l || r.importing) return;
      n.jobSkills = [...l.skills], Ia(n, o.value), t.value.proSkills = [];
      const s = {};
      l.skills.forEach((i) => {
        if (typeof i == "string")
          t.value.proSkills.push(i);
        else if (!Array.isArray(i)) {
          const [u, c] = Object.entries(i)[0];
          let d = u;
          u.includes("(") && (d = d.split("(")[0]);
          const h = n.showingChildSkills[d];
          if (!h) return;
          let y = -1;
          if (c)
            y = h.findIndex((m) => m === c), y === -1 && (y = h.findIndex((m) => !m), h[y] = c);
          else {
            const m = s[d] || 0;
            let _ = m;
            y = h.findIndex((v) => v ? !1 : _-- === 0), s[d] = m + 1;
          }
          if (y === -1) return;
          t.value.proSkills.push([d, c, y]);
        }
      }), delete n.jobSkills;
    }
  ), a;
}
function Ku(t) {
  return ni() ? (ri(t), !0) : !1;
}
function Lt(t) {
  return typeof t == "function" ? t() : P(t);
}
const Qu = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Xu = Object.prototype.toString, Zu = (t) => Xu.call(t) === "[object Object]", fr = () => {
};
function Da(t, e) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(t(() => e.apply(this, r), { fn: e, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
const Ra = (t) => t();
function Yu(t, e = {}) {
  let n, r, o = fr;
  const a = (s) => {
    clearTimeout(s), o(), o = fr;
  };
  return (s) => {
    const i = Lt(t), u = Lt(e.maxWait);
    return n && a(n), i <= 0 || u !== void 0 && u <= 0 ? (r && (a(r), r = null), Promise.resolve(s())) : new Promise((c, d) => {
      o = e.rejectOnCancel ? d : c, u && !r && (r = setTimeout(() => {
        n && a(n), r = null, c(s());
      }, u)), n = setTimeout(() => {
        r && a(r), r = null, c(s());
      }, i);
    });
  };
}
function ec(t = Ra) {
  const e = X(!0);
  function n() {
    e.value = !1;
  }
  function r() {
    e.value = !0;
  }
  const o = (...a) => {
    e.value && t(...a);
  };
  return { isActive: ei(e), pause: n, resume: r, eventFilter: o };
}
function tc(t) {
  return ti();
}
function nc(t, e = 200, n = {}) {
  return Da(
    Yu(e, n),
    t
  );
}
function rc(t, e, n = {}) {
  const {
    eventFilter: r = Ra,
    ...o
  } = n;
  return _e(
    t,
    Da(
      r,
      e
    ),
    o
  );
}
function oc(t, e, n = {}) {
  const {
    eventFilter: r,
    ...o
  } = n, { eventFilter: a, pause: l, resume: s, isActive: i } = ec(r);
  return { stop: rc(
    t,
    e,
    {
      ...o,
      eventFilter: a
    }
  ), pause: l, resume: s, isActive: i };
}
function ac(t, e = !0, n) {
  tc() ? Pn(t, n) : e ? t() : ke(t);
}
function ic(t) {
  var e;
  const n = Lt(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const mr = Qu ? window : void 0;
function xo(...t) {
  let e, n, r, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, o] = t, e = mr) : [e, n, r, o] = t, !e)
    return fr;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], l = () => {
    a.forEach((c) => c()), a.length = 0;
  }, s = (c, d, f, h) => (c.addEventListener(d, f, h), () => c.removeEventListener(d, f, h)), i = _e(
    () => [ic(e), Lt(o)],
    ([c, d]) => {
      if (l(), !c)
        return;
      const f = Zu(d) ? { ...d } : d;
      a.push(
        ...n.flatMap((h) => r.map((y) => s(c, h, y, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    i(), l();
  };
  return Ku(u), u;
}
const Yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, en = "__vueuse_ssr_handlers__", lc = /* @__PURE__ */ sc();
function sc() {
  return en in Yt || (Yt[en] = Yt[en] || {}), Yt[en];
}
function uc(t, e) {
  return lc[t] || e;
}
function cc(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const pc = {
  boolean: {
    read: (t) => t === "true",
    write: (t) => String(t)
  },
  object: {
    read: (t) => JSON.parse(t),
    write: (t) => JSON.stringify(t)
  },
  number: {
    read: (t) => Number.parseFloat(t),
    write: (t) => String(t)
  },
  any: {
    read: (t) => t,
    write: (t) => String(t)
  },
  string: {
    read: (t) => t,
    write: (t) => String(t)
  },
  map: {
    read: (t) => new Map(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t.entries()))
  },
  set: {
    read: (t) => new Set(JSON.parse(t)),
    write: (t) => JSON.stringify(Array.from(t))
  },
  date: {
    read: (t) => new Date(t),
    write: (t) => t.toISOString()
  }
}, Io = "vueuse-storage";
function Eo(t, e, n, r = {}) {
  var o;
  const {
    flush: a = "pre",
    deep: l = !0,
    listenToStorageChanges: s = !0,
    writeDefaults: i = !0,
    mergeDefaults: u = !1,
    shallow: c,
    window: d = mr,
    eventFilter: f,
    onError: h = (D) => {
      console.error(D);
    },
    initOnMounted: y
  } = r, m = (c ? oi : X)(typeof e == "function" ? e() : e);
  if (!n)
    try {
      n = uc("getDefaultStorage", () => {
        var D;
        return (D = mr) == null ? void 0 : D.localStorage;
      })();
    } catch (D) {
      h(D);
    }
  if (!n)
    return m;
  const _ = Lt(e), v = cc(_), w = (o = r.serializer) != null ? o : pc[v], { pause: p, resume: g } = oc(
    m,
    () => S(m.value),
    { flush: a, deep: l, eventFilter: f }
  );
  d && s && ac(() => {
    xo(d, "storage", I), xo(d, Io, B), y && I();
  }), y || I();
  function k(D, T) {
    d && d.dispatchEvent(new CustomEvent(Io, {
      detail: {
        key: t,
        oldValue: D,
        newValue: T,
        storageArea: n
      }
    }));
  }
  function S(D) {
    try {
      const T = n.getItem(t);
      if (D == null)
        k(T, null), n.removeItem(t);
      else {
        const O = w.write(D);
        T !== O && (n.setItem(t, O), k(T, O));
      }
    } catch (T) {
      h(T);
    }
  }
  function x(D) {
    const T = D ? D.newValue : n.getItem(t);
    if (T == null)
      return i && _ != null && n.setItem(t, w.write(_)), _;
    if (!D && u) {
      const O = w.read(T);
      return typeof u == "function" ? u(O, _) : v === "object" && !Array.isArray(O) ? { ..._, ...O } : O;
    } else return typeof T != "string" ? T : w.read(T);
  }
  function I(D) {
    if (!(D && D.storageArea !== n)) {
      if (D && D.key == null) {
        m.value = _;
        return;
      }
      if (!(D && D.key !== t)) {
        p();
        try {
          (D == null ? void 0 : D.newValue) !== w.write(m.value) && (m.value = x(D));
        } catch (T) {
          h(T);
        } finally {
          D ? ke(g) : g();
        }
      }
    }
  }
  function B(D) {
    I(D.detail);
  }
  return m;
}
var Oa = /* @__PURE__ */ ((t) => (t.SoxFE = "$sox-trpg", t))(Oa || {}), Ma = /* @__PURE__ */ ((t) => (t.Home = "$home", t.COCCard = "$coc-card", t.ERPCard = "$erp-card", t))(Ma || {});
function dc(t) {
  const {
    namespace: e = Oa.SoxFE,
    app: n,
    versionChecker: r = (w, p) => (p.value = null, -1),
    defaults: o = {}
  } = t, a = window.localStorage, l = `${e}#${n}`, s = `${e}##versionChecker`, i = Eo(l, o, a, {
    mergeDefaults: !0
  }), u = Eo(s, {}, a), c = u.value[l], d = r(c, i);
  u.value[n] = d;
  function f() {
    return i.value;
  }
  function h() {
    return Object.keys(f()).length;
  }
  function y(w) {
    return i.value[w];
  }
  function m(w, p) {
    i.value[w] = p;
  }
  function _(w) {
    delete i.value[w];
  }
  function v() {
    i.value = null;
  }
  return {
    store: i,
    get namespace() {
      return e;
    },
    get appName() {
      return n;
    },
    get version() {
      return d;
    },
    listItems: f,
    countItems: h,
    getItem: y,
    setItem: m,
    removeItem: _,
    clear: v
  };
}
const fc = dc({
  app: Ma.COCCard,
  versionChecker() {
    return 1.1;
  }
});
function Tr() {
  return fc;
}
const Wt = "$sox-trpg#$coc-card:card:";
function Xn(t, e, n) {
  try {
    const r = {
      pc: JSON.parse(JSON.stringify(e)),
      viewData: JSON.parse(JSON.stringify(n)),
      lastModified: Date.now()
    };
    localStorage.setItem(Wt + t, JSON.stringify(r));
  } catch (r) {
    console.error(`[CardStorage] Save failed for ${t}:`, r);
  }
}
function Zn(t) {
  try {
    const e = localStorage.getItem(Wt + t);
    return e ? JSON.parse(e) : null;
  } catch (e) {
    return console.error(`[CardStorage] Load failed for ${t}:`, e), null;
  }
}
function Co(t) {
  try {
    localStorage.removeItem(Wt + t);
  } catch (e) {
    console.error(`[CardStorage] Delete failed for ${t}:`, e);
  }
}
function mc(t) {
  let e = 0;
  const n = [];
  for (let r = 0; r < localStorage.length; r++) {
    const o = localStorage.key(r);
    if (o && o.startsWith(Wt)) {
      const a = o.substring(Wt.length);
      t.has(a) || n.push(o);
    }
  }
  return n.forEach((r) => {
    localStorage.removeItem(r), e++;
  }), e > 0 && console.log(`[CardStorage] Cleaned ${e} orphaned cards`), e;
}
function kn() {
  var t;
  return typeof screen < "u" && ((t = screen == null ? void 0 : screen.orientation) != null && t.type) ? screen.orientation.type.startsWith("portrait") ? "mobile" : "desktop" : window.innerWidth > window.innerHeight ? "desktop" : "mobile";
}
const Gt = X(kn());
window.addEventListener("resize", () => {
  Gt.value = kn();
});
typeof screen < "u" && (screen != null && screen.orientation) ? screen.orientation.addEventListener("change", () => {
  Gt.value = kn();
}) : window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    Gt.value = kn();
  }, 100);
});
function yr() {
  return Gt.value === "desktop";
}
const ye = Tr();
function Do() {
  try {
    return crypto.randomUUID();
  } catch {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
  }
}
function yc(t, e, n) {
  const r = U(() => [...ye.getItem("cardMetaList") ?? []].sort((g, k) => g.createdAt - k.createdAt)), o = U(
    () => ye.getItem("activeCardId") ?? ""
  ), a = U(
    () => r.value.find((p) => p.id === o.value)
  );
  function l() {
    const p = o.value;
    if (!p || n.importing) return;
    Xn(p, t.value, e);
    const g = [...r.value], k = g.findIndex((S) => S.id === p);
    k !== -1 && (g[k] = {
      ...g[k],
      name: t.value.name || "未命名角色卡",
      lastModified: Date.now()
    }, ye.setItem("cardMetaList", g));
  }
  const s = nc(() => {
    n.importing || l();
  }, 300);
  function i(p) {
    l();
    const g = Do(), k = {
      id: g,
      name: "未命名角色卡",
      saveName: p || `存档 ${r.value.length + 1}`,
      lastModified: Date.now(),
      createdAt: Date.now()
    }, S = [...r.value, k];
    ye.setItem("cardMetaList", S), ye.setItem("activeCardId", g);
    const x = Je(), I = Tt(void 0, Ce(n.useNewRules));
    return Xn(g, x, I), t.value = x, Object.assign(e, I), g;
  }
  function u(p) {
    var B, D;
    const g = Zn(p);
    if (!g) return !1;
    n.importing = !0;
    const k = Ce(n.useNewRules), S = ((B = g.viewData) == null ? void 0 : B.ruleFormat) === "new", { pc: x, showingChildSkillsPatch: I } = Je(
      g.pc,
      !0,
      k,
      g.viewData
    );
    if (t.value = x, Object.assign(e, Tt(void 0, k), g.viewData), !k.revisedSkills && S ? (D = e.ruleMigration) != null && D.revertedToOld ? e.ruleFormat = "new" : (e.ruleFormat = "old", e.ruleMigration = {
      ...e.ruleMigration ?? {},
      revertedToOld: !0
    }) : e.ruleFormat = k.revisedSkills ? "new" : "old", I)
      for (const [T, O] of Object.entries(I))
        e.showingChildSkills[T] = O;
    return Sn(e, k), setTimeout(() => {
      n.importing = !1;
    }, 50), !0;
  }
  function c(p) {
    p !== o.value && (l(), Zn(p) && (ye.setItem("activeCardId", p), u(p)));
  }
  function d(p) {
    const g = r.value.filter((k) => k.id !== p);
    ye.setItem("cardMetaList", g), Co(p), p === o.value && (g.length > 0 ? c(g[0].id) : i());
  }
  function f(p, g) {
    const k = [...r.value], S = k.findIndex((x) => x.id === p);
    S !== -1 && (k[S] = { ...k[S], saveName: g }, ye.setItem("cardMetaList", k));
  }
  function h() {
    n.importing = !0, t.value = Je(), Object.assign(e, Tt(void 0, Ce(n.useNewRules))), ye.removeItem("autoSaved"), setTimeout(() => {
      n.importing = !1, l();
    }, 50);
  }
  function y() {
    r.value.forEach((p) => Co(p.id)), ye.setItem("cardMetaList", []), i();
  }
  function m() {
    const p = ye.getItem("cardMetaList");
    if (p && p.length > 0) {
      const k = [...p].sort((I, B) => I.createdAt - B.createdAt);
      ye.setItem("cardMetaList", k);
      const S = new Set(k.map((I) => I.id));
      if (mc(S), yr()) {
        i();
        return;
      }
      const x = o.value || k[0].id;
      if (ye.setItem("activeCardId", x), !u(x)) {
        const I = k.find((B) => Zn(B.id) != null);
        I ? (ye.setItem("activeCardId", I.id), u(I.id)) : i();
      }
      return;
    }
    const g = ye.getItem("autoSaved");
    if (g != null && g.pc) {
      const k = Do(), S = {
        id: k,
        name: g.pc.name || "未命名角色卡",
        saveName: "迁移的存档",
        lastModified: g.lastModified || Date.now(),
        createdAt: Date.now()
      };
      if (ye.setItem("cardMetaList", [S]), ye.setItem("activeCardId", k), Xn(k, g.pc, g.viewData || Tt(void 0, Ce(n.useNewRules))), ye.removeItem("autoSaved"), yr()) {
        i();
        return;
      }
      u(k);
      return;
    }
    i();
  }
  let _ = null;
  function v() {
    _ = _e(
      () => [t.value, e],
      () => {
        n.importing || s();
      },
      { deep: !0 }
    );
  }
  function w() {
    _ == null || _();
  }
  return typeof window < "u" && window.addEventListener("beforeunload", l), {
    metaList: r,
    activeCardId: o,
    currentMeta: a,
    createCard: i,
    switchCard: c,
    deleteCard: d,
    renameCard: f,
    resetCurrentCard: h,
    clearAllCards: y,
    flushSave: l,
    init: m,
    startAutoSave: v,
    stopAutoSave: w
  };
}
const Fa = /* @__PURE__ */ new Set(["取悦", "话术", "恐吓", "魅惑"]), hc = /* @__PURE__ */ new Set([...Fa, "说服"]), Ta = {
  估价: { group: "技艺" },
  乔装: { group: "技艺" },
  人类学: { group: "科学" }
}, Na = new Set(Object.keys(Ta));
function Va(t) {
  return ["b", "p", "i", "g"].some(
    (e) => Number(t[e] ?? 0) !== 0
  );
}
function Ua(t) {
  const e = /* @__PURE__ */ new Map();
  return t.forEach((n) => {
    n.group && e.set(n.name, new Set(n.group.skills.map((r) => r.name)));
  }), e;
}
function gc(t) {
  var i, u;
  const e = /* @__PURE__ */ new Set(), n = new Set(ct.map((c) => c.name)), r = Ua(ct), o = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  return t.skillPoints.forEach(([c, d]) => {
    var y;
    if (!Va(d)) return;
    if (typeof c == "string") {
      if (Fa.has(c)) {
        o.add(c);
        return;
      }
      if (c === "生存") {
        a.add("生存");
        return;
      }
      if (Na.has(c)) {
        l.add(c);
        return;
      }
      n.has(c) || s.add(c);
      return;
    }
    const [f, h] = c;
    if (f) {
      if (f === "社交" || hc.has(f)) {
        h && h !== "说服" && o.add(h);
        return;
      }
      if (f === "生存") {
        a.add(h || "生存");
        return;
      }
      if (!n.has(f)) {
        s.add(f);
        return;
      }
      h && !((y = r.get(f)) != null && y.has(h)) && s.add(`${f}:${h}`);
    }
  }), o.size && e.add(`社交技能将合并为“说服”：${[...o].join("、")}`), a.size && e.add(`生存专精将合并为单一技能：${[...a].join("、")}`), l.size && e.add(`以下独立技能将并入对应专长：${[...l].join("、")}`), s.size && e.add(
    `以下技能在新版技能表中没有对应项，将继续按原名称显示，但不在技能下拉列表中：${[...s].join("、")}`
  ), (u = (i = t.stories) == null ? void 0 : i.IPlace) != null && u.trim() && e.add("“意义非凡之地”将并入“重要之人与之地”，之后无法自动拆分。"), [...e];
}
function vc(t, e) {
  var i, u, c, d;
  const n = /* @__PURE__ */ new Set(), r = new Set(Be.map((f) => f.name)), o = Ua(Be), a = /* @__PURE__ */ new Set();
  t.skillPoints.forEach(([f, h]) => {
    var _, v;
    if (!Va(h)) return;
    if (typeof f == "string") {
      if (f === "说服" || f === "生存" || Na.has(f)) return;
      r.has(f) || a.add(f);
      return;
    }
    const [y, m] = f;
    if (!(y === "社交" || y === "生存") && ((_ = Ta[m]) == null ? void 0 : _.group) !== y) {
      if (!r.has(y)) {
        a.add(y);
        return;
      }
      m && !((v = o.get(y)) != null && v.has(m)) && a.add(`${y}:${m}`);
    }
  }), a.size && n.add(
    `以下新版技能在旧版技能表中没有对应项，转换后可能不显示（数据仍保留）：${[...a].join("、")}`
  );
  const l = Ot(t.job, Ce(!0));
  l != null && l.newRulesOnly && n.add(
    `当前职业“${t.job}”仅新版规则可用，转换回旧版后职业提示和职业点数将不可用。`
  ), ((u = (i = t.stories) == null ? void 0 : i.IPerson) != null && u.trim() || (d = (c = t.stories) == null ? void 0 : c.IPlace) != null && d.trim()) && n.add("“重要之人与之地”无法自动拆分回“重要之人”和“意义非凡之地”。");
  const s = /* @__PURE__ */ new Map();
  return Be.forEach((f) => {
    f.group && s.set(f.name, f.group.show.length);
  }), Object.entries(e.showingChildSkills ?? {}).forEach(([f, h]) => {
    const y = s.get(f);
    if (y === void 0) return;
    const m = h.slice(y).filter(Boolean);
    m.length && n.add(
      `“${f}”的额外专精（${m.join("、")}）在旧版技能表中没有对应行，可能不显示。`
    );
  }), [...n];
}
function Ro(t, e) {
  return Oe(
    "div",
    { style: "max-height: 50vh; overflow: auto;" },
    [
      Oe("p", t),
      Oe(
        "ul",
        { style: "padding-left: 1.2em; margin: 8px 0;" },
        e.map(
          (n) => Oe("li", { style: "margin: 4px 0; line-height: 1.5;" }, n)
        )
      )
    ]
  );
}
function wc(t, e, n) {
  let r = !1;
  const o = (i) => {
    i && Object.assign(e.showingChildSkills, i);
  };
  async function a() {
    if (e.ruleFormat === "new") {
      n.useNewRules = !0;
      return;
    }
    const i = gc(t.value);
    n.importing = !0;
    try {
      const u = Je(t.value, !0, Ce(!0), e);
      t.value = u.pc, o(u.showingChildSkillsPatch), Sn(e, Ce(!0)), e.ruleFormat = "new", n.useNewRules = !0, await ke(), n.importing = !1;
    } catch (u) {
      n.importing = !1, n.useNewRules = !1, await Ge.alert(
        `切换失败：${u instanceof Error ? u.message : String(u)}。已保持旧版规则。`,
        "转换失败",
        { type: "error", confirmButtonText: "知道了" }
      ).catch(() => {
      });
      return;
    }
    i.length && await Ge.alert(
      Ro("已切换到新版规则并完成自动转换。以下内容已调整：", i),
      "转换提示",
      { type: "warning", confirmButtonText: "知道了" }
    ).catch(() => {
    });
  }
  async function l() {
    var u;
    if (e.ruleFormat !== "new") {
      n.useNewRules = !1;
      return;
    }
    if ((u = e.ruleMigration) != null && u.revertedToOld) {
      n.useNewRules = !1, await Ge.alert(
        Oe("div", [
          Oe("p", "这张卡已经自动转换回旧版一次，不能再次自动转换。"),
          Oe("p", "关闭开关不会再次修改卡数据。如需旧版卡，建议新建卡片。")
        ]),
        "无法再次转换",
        { type: "info", confirmButtonText: "知道了" }
      ).catch(() => {
      });
      return;
    }
    try {
      await Ge.confirm(
        Oe("div", [
          Oe("p", "关闭新版规则会把当前卡转换回旧版格式。"),
          Oe(
            "p",
            "转换存在数据丢失风险：安抚、宗教、读唇、运动等新版技能，以及已合并的背景故事，可能无法完整还原。"
          ),
          Oe("p", "建议先新建一张卡片，再关闭新版规则。是否继续转换？")
        ]),
        "关闭新版规则",
        {
          confirmButtonText: "继续转换",
          cancelButtonText: "取消",
          type: "warning"
        }
      );
    } catch {
      return;
    }
    const i = vc(t.value, e);
    n.importing = !0;
    try {
      const c = Je(t.value, !0, Ce(!1), e);
      t.value = c.pc, o(c.showingChildSkillsPatch), Sn(e, Ce(!1)), e.ruleFormat = "old", e.ruleMigration = {
        ...e.ruleMigration ?? {},
        revertedToOld: !0
      }, n.useNewRules = !1, await ke(), n.importing = !1;
    } catch (c) {
      n.importing = !1, n.useNewRules = !0, await Ge.alert(
        `转换失败：${c instanceof Error ? c.message : String(c)}。已保持新版规则。`,
        "转换失败",
        { type: "error", confirmButtonText: "知道了" }
      ).catch(() => {
      });
      return;
    }
    i.length && await Ge.alert(
      Ro("已转换回旧版规则。以下内容无法完整转换：", i),
      "转换提示",
      { type: "warning", confirmButtonText: "知道了" }
    ).catch(() => {
    });
  }
  async function s(i) {
    if (!(r || i === n.useNewRules)) {
      r = !0;
      try {
        i ? await a() : await l();
      } finally {
        r = !1;
      }
    }
  }
  return { requestChange: s };
}
var Nr = { exports: {} };
Nr.exports;
(function(t) {
  var e = function() {
    var n = String.fromCharCode, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", a = {};
    function l(i, u) {
      if (!a[i]) {
        a[i] = {};
        for (var c = 0; c < i.length; c++)
          a[i][i.charAt(c)] = c;
      }
      return a[i][u];
    }
    var s = {
      compressToBase64: function(i) {
        if (i == null) return "";
        var u = s._compress(i, 6, function(c) {
          return r.charAt(c);
        });
        switch (u.length % 4) {
          default:
          case 0:
            return u;
          case 1:
            return u + "===";
          case 2:
            return u + "==";
          case 3:
            return u + "=";
        }
      },
      decompressFromBase64: function(i) {
        return i == null ? "" : i == "" ? null : s._decompress(i.length, 32, function(u) {
          return l(r, i.charAt(u));
        });
      },
      compressToUTF16: function(i) {
        return i == null ? "" : s._compress(i, 15, function(u) {
          return n(u + 32);
        }) + " ";
      },
      decompressFromUTF16: function(i) {
        return i == null ? "" : i == "" ? null : s._decompress(i.length, 16384, function(u) {
          return i.charCodeAt(u) - 32;
        });
      },
      //compress into uint8array (UCS-2 big endian format)
      compressToUint8Array: function(i) {
        for (var u = s.compress(i), c = new Uint8Array(u.length * 2), d = 0, f = u.length; d < f; d++) {
          var h = u.charCodeAt(d);
          c[d * 2] = h >>> 8, c[d * 2 + 1] = h % 256;
        }
        return c;
      },
      //decompress from uint8array (UCS-2 big endian format)
      decompressFromUint8Array: function(i) {
        if (i == null)
          return s.decompress(i);
        for (var u = new Array(i.length / 2), c = 0, d = u.length; c < d; c++)
          u[c] = i[c * 2] * 256 + i[c * 2 + 1];
        var f = [];
        return u.forEach(function(h) {
          f.push(n(h));
        }), s.decompress(f.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(i) {
        return i == null ? "" : s._compress(i, 6, function(u) {
          return o.charAt(u);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(i) {
        return i == null ? "" : i == "" ? null : (i = i.replace(/ /g, "+"), s._decompress(i.length, 32, function(u) {
          return l(o, i.charAt(u));
        }));
      },
      compress: function(i) {
        return s._compress(i, 16, function(u) {
          return n(u);
        });
      },
      _compress: function(i, u, c) {
        if (i == null) return "";
        var d, f, h = {}, y = {}, m = "", _ = "", v = "", w = 2, p = 3, g = 2, k = [], S = 0, x = 0, I;
        for (I = 0; I < i.length; I += 1)
          if (m = i.charAt(I), Object.prototype.hasOwnProperty.call(h, m) || (h[m] = p++, y[m] = !0), _ = v + m, Object.prototype.hasOwnProperty.call(h, _))
            v = _;
          else {
            if (Object.prototype.hasOwnProperty.call(y, v)) {
              if (v.charCodeAt(0) < 256) {
                for (d = 0; d < g; d++)
                  S = S << 1, x == u - 1 ? (x = 0, k.push(c(S)), S = 0) : x++;
                for (f = v.charCodeAt(0), d = 0; d < 8; d++)
                  S = S << 1 | f & 1, x == u - 1 ? (x = 0, k.push(c(S)), S = 0) : x++, f = f >> 1;
              } else {
                for (f = 1, d = 0; d < g; d++)
                  S = S << 1 | f, x == u - 1 ? (x = 0, k.push(c(S)), S = 0) : x++, f = 0;
                for (f = v.charCodeAt(0), d = 0; d < 16; d++)
                  S = S << 1 | f & 1, x == u - 1 ? (x = 0, k.push(c(S)), S = 0) : x++, f = f >> 1;
              }
              w--, w == 0 && (w = Math.pow(2, g), g++), delete y[v];
            } else
              for (f = h[v], d = 0; d < g; d++)
                S = S << 1 | f & 1, x == u - 1 ? (x = 0, k.push(c(S)), S = 0) : x++, f = f >> 1;
            w--, w == 0 && (w = Math.pow(2, g), g++), h[_] = p++, v = String(m);
          }
        if (v !== "") {
          if (Object.prototype.hasOwnProperty.call(y, v)) {
            if (v.charCodeAt(0) < 256) {
              for (d = 0; d < g; d++)
                S = S << 1, x == u - 1 ? (x = 0, k.push(c(S)), S = 0) : x++;
              for (f = v.charCodeAt(0), d = 0; d < 8; d++)
                S = S << 1 | f & 1, x == u - 1 ? (x = 0, k.push(c(S)), S = 0) : x++, f = f >> 1;
            } else {
              for (f = 1, d = 0; d < g; d++)
                S = S << 1 | f, x == u - 1 ? (x = 0, k.push(c(S)), S = 0) : x++, f = 0;
              for (f = v.charCodeAt(0), d = 0; d < 16; d++)
                S = S << 1 | f & 1, x == u - 1 ? (x = 0, k.push(c(S)), S = 0) : x++, f = f >> 1;
            }
            w--, w == 0 && (w = Math.pow(2, g), g++), delete y[v];
          } else
            for (f = h[v], d = 0; d < g; d++)
              S = S << 1 | f & 1, x == u - 1 ? (x = 0, k.push(c(S)), S = 0) : x++, f = f >> 1;
          w--, w == 0 && (w = Math.pow(2, g), g++);
        }
        for (f = 2, d = 0; d < g; d++)
          S = S << 1 | f & 1, x == u - 1 ? (x = 0, k.push(c(S)), S = 0) : x++, f = f >> 1;
        for (; ; )
          if (S = S << 1, x == u - 1) {
            k.push(c(S));
            break;
          } else x++;
        return k.join("");
      },
      decompress: function(i) {
        return i == null ? "" : i == "" ? null : s._decompress(i.length, 32768, function(u) {
          return i.charCodeAt(u);
        });
      },
      _decompress: function(i, u, c) {
        var d = [], f = 4, h = 4, y = 3, m = "", _ = [], v, w, p, g, k, S, x, I = { val: c(0), position: u, index: 1 };
        for (v = 0; v < 3; v += 1)
          d[v] = v;
        for (p = 0, k = Math.pow(2, 2), S = 1; S != k; )
          g = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = c(I.index++)), p |= (g > 0 ? 1 : 0) * S, S <<= 1;
        switch (p) {
          case 0:
            for (p = 0, k = Math.pow(2, 8), S = 1; S != k; )
              g = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = c(I.index++)), p |= (g > 0 ? 1 : 0) * S, S <<= 1;
            x = n(p);
            break;
          case 1:
            for (p = 0, k = Math.pow(2, 16), S = 1; S != k; )
              g = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = c(I.index++)), p |= (g > 0 ? 1 : 0) * S, S <<= 1;
            x = n(p);
            break;
          case 2:
            return "";
        }
        for (d[3] = x, w = x, _.push(x); ; ) {
          if (I.index > i)
            return "";
          for (p = 0, k = Math.pow(2, y), S = 1; S != k; )
            g = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = c(I.index++)), p |= (g > 0 ? 1 : 0) * S, S <<= 1;
          switch (x = p) {
            case 0:
              for (p = 0, k = Math.pow(2, 8), S = 1; S != k; )
                g = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = c(I.index++)), p |= (g > 0 ? 1 : 0) * S, S <<= 1;
              d[h++] = n(p), x = h - 1, f--;
              break;
            case 1:
              for (p = 0, k = Math.pow(2, 16), S = 1; S != k; )
                g = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = c(I.index++)), p |= (g > 0 ? 1 : 0) * S, S <<= 1;
              d[h++] = n(p), x = h - 1, f--;
              break;
            case 2:
              return _.join("");
          }
          if (f == 0 && (f = Math.pow(2, y), y++), d[x])
            m = d[x];
          else if (x === h)
            m = w + w.charAt(0);
          else
            return null;
          _.push(m), d[h++] = w + m.charAt(0), f--, w = m, f == 0 && (f = Math.pow(2, y), y++);
        }
      }
    };
    return s;
  }();
  t != null ? t.exports = e : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return e;
  });
})(Nr);
var bc = Nr.exports;
const Oo = /* @__PURE__ */ vr(bc);
var _c = function() {
  var t = document.getSelection();
  if (!t.rangeCount)
    return function() {
    };
  for (var e = document.activeElement, n = [], r = 0; r < t.rangeCount; r++)
    n.push(t.getRangeAt(r));
  switch (e.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      e.blur();
      break;
    default:
      e = null;
      break;
  }
  return t.removeAllRanges(), function() {
    t.type === "Caret" && t.removeAllRanges(), t.rangeCount || n.forEach(function(o) {
      t.addRange(o);
    }), e && e.focus();
  };
}, Sc = _c, Mo = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, kc = "Copy to clipboard: #{key}, Enter";
function Ac(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function $c(t, e) {
  var n, r, o, a, l, s, i = !1;
  e || (e = {}), n = e.debug || !1;
  try {
    o = Sc(), a = document.createRange(), l = document.getSelection(), s = document.createElement("span"), s.textContent = t, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(c) {
      if (c.stopPropagation(), e.format)
        if (c.preventDefault(), typeof c.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = Mo[e.format] || Mo.default;
          window.clipboardData.setData(d, t);
        } else
          c.clipboardData.clearData(), c.clipboardData.setData(e.format, t);
      e.onCopy && (c.preventDefault(), e.onCopy(c.clipboardData));
    }), document.body.appendChild(s), a.selectNodeContents(s), l.addRange(a);
    var u = document.execCommand("copy");
    if (!u)
      throw new Error("copy command was unsuccessful");
    i = !0;
  } catch (c) {
    n && console.error("unable to copy using execCommand: ", c), n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), i = !0;
    } catch (d) {
      n && console.error("unable to copy using clipboardData: ", d), n && console.error("falling back to prompt"), r = Ac("message" in e ? e.message : kc), window.prompt(r, t);
    }
  } finally {
    l && (typeof l.removeRange == "function" ? l.removeRange(a) : l.removeAllRanges()), s && document.body.removeChild(s), o();
  }
  return i;
}
var Pc = $c;
const Ba = /* @__PURE__ */ vr(Pc);
/*! Element Plus Icons Vue v2.3.1 */
var xc = /* @__PURE__ */ M({
  name: "CloseBold",
  __name: "close-bold",
  setup(t) {
    return (e, n) => (A(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), Ic = xc, Ec = /* @__PURE__ */ M({
  name: "Delete",
  __name: "delete",
  setup(t) {
    return (e, n) => (A(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
      })
    ]));
  }
}), Cc = Ec, Dc = /* @__PURE__ */ M({
  name: "Dessert",
  __name: "dessert",
  setup(t) {
    return (e, n) => (A(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416m287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48m339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736M384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64"
      })
    ]));
  }
}), Rc = Dc, Oc = /* @__PURE__ */ M({
  name: "DocumentCopy",
  __name: "document-copy",
  setup(t) {
    return (e, n) => (A(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M128 320v576h576V320zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32M960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32M256 672h320v64H256zm0-192h320v64H256z"
      })
    ]));
  }
}), Mc = Oc, Fc = /* @__PURE__ */ M({
  name: "Download",
  __name: "download",
  setup(t) {
    return (e, n) => (A(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z"
      })
    ]));
  }
}), Tc = Fc, Nc = /* @__PURE__ */ M({
  name: "FolderOpened",
  __name: "folder-opened",
  setup(t) {
    return (e, n) => (A(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896"
      })
    ]));
  }
}), Vc = Nc, Uc = /* @__PURE__ */ M({
  name: "More",
  __name: "more",
  setup(t) {
    return (e, n) => (A(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96"
      })
    ]));
  }
}), Bc = Uc, jc = /* @__PURE__ */ M({
  name: "Plus",
  __name: "plus",
  setup(t) {
    return (e, n) => (A(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), zc = jc, Lc = /* @__PURE__ */ M({
  name: "Reading",
  __name: "reading",
  setup(t) {
    return (e, n) => (A(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
      }),
      b("path", {
        fill: "currentColor",
        d: "M480 192h64v704h-64z"
      })
    ]));
  }
}), Wc = Lc, Gc = /* @__PURE__ */ M({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (e, n) => (A(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Hc = Gc, qc = /* @__PURE__ */ M({
  name: "Select",
  __name: "select",
  setup(t) {
    return (e, n) => (A(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), Jc = qc, Kc = /* @__PURE__ */ M({
  name: "Upload",
  __name: "upload",
  setup(t) {
    return (e, n) => (A(), E("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z"
      })
    ]));
  }
}), ja = Kc;
const Qc = /* @__PURE__ */ M({
  __name: "ActionButton",
  props: {
    fullWidth: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "button" }
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => (A(), W(Ho(e.tag), {
      class: G(["action-button", {
        "action-button-full-width": e.fullWidth
      }]),
      onClick: n[0] || (n[0] = (r) => e.$emit("click", r)),
      disabled: e.disabled
    }, {
      default: R(() => [
        Pt(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "disabled"]));
  }
}), j = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, o] of e)
    n[r] = o;
  return n;
}, Xc = /* @__PURE__ */ j(Qc, [["__scopeId", "data-v-b309c855"]]), Zc = /* @__PURE__ */ M({
  __name: "ControlButton",
  props: {
    label: {},
    icon: {}
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => {
      const r = fe("el-icon");
      return A(), W(Xc, {
        class: "control-button",
        onClick: n[0] || (n[0] = (o) => e.$emit("click", o))
      }, {
        default: R(() => [
          $(r, { size: "0.9em" }, {
            default: R(() => [
              (A(), W(Ho(e.icon)))
            ]),
            _: 1
          }),
          Me(" " + F(e.label), 1)
        ]),
        _: 1
      });
    };
  }
}), tt = /* @__PURE__ */ j(Zc, [["__scopeId", "data-v-7ceba4b3"]]), Yc = { class: "control-dialog-header" }, ep = { class: "control-dialog-title" }, tp = { class: "control-dialog-header-actions" }, $t = /* @__PURE__ */ M({
  __name: "ControlDialog",
  props: {
    title: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (e, n) => {
      const r = fe("el-dialog");
      return A(), W(r, {
        class: "coc-card-control-dialog",
        "append-to-body": "",
        "align-center": "",
        modelValue: e.$props.modelValue,
        "onUpdate:modelValue": n[0] || (n[0] = (o) => e.$emit("update:modelValue", o))
      }, {
        header: R(() => [
          b("div", Yc, [
            b("span", ep, F(e.$props.title), 1),
            b("div", tp, [
              Pt(e.$slots, "header-actions")
            ])
          ])
        ]),
        default: R(() => [
          Pt(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["modelValue"]);
    };
  }
});
function np(t, e) {
  if (window.downloadAndSaveFile)
    window.downloadAndSaveFile(t, e);
  else {
    const n = document.createElement("a");
    n.href = t, n.download = e, n.click();
  }
}
function rp(t, e = "image") {
  np(t, e);
}
const op = { class: "downloader-item" }, ap = { class: "downloader-item-preview" }, ip = ["src"], lp = {
  key: 1,
  class: "downloader-item-file"
}, sp = { key: 2 }, up = { class: "downloader-item-info" }, cp = { class: "downloader-item-title" }, pp = { class: "preview-full-image-container" }, dp = ["src"], fp = /* @__PURE__ */ M({
  __name: "DownloaderItem",
  props: {
    title: {},
    previewImage: {},
    refreshable: { type: Boolean },
    download: {}
  },
  emits: ["refresh", "downloaded"],
  setup(t, { emit: e }) {
    const n = t, r = e, o = X(!1), a = U(() => {
      if (!n.download) return "";
      const { name: i, type: u } = n.download;
      return `${i}${n.title}.${u}`;
    });
    function l() {
      if (!n.download) return;
      const { url: i } = n.download;
      rp(i, a.value), r("downloaded");
    }
    function s() {
      o.value = !0;
    }
    return (i, u) => {
      var c;
      return A(), E("div", op, [
        b("div", ap, [
          i.previewImage ? (A(), E("img", {
            key: 0,
            class: "downloader-item-image",
            src: i.previewImage,
            onClick: s
          }, null, 8, ip)) : ((c = i.download) == null ? void 0 : c.type) === "txt" ? (A(), E("div", lp, F(a.value), 1)) : (A(), E("div", sp, "预览图加载失败，这不应该，请尝试刷新"))
        ]),
        b("div", up, [
          b("div", cp, F(i.title), 1),
          b("div", {
            class: "downloader-item-button",
            onClick: l
          }, " 下载 "),
          i.refreshable ? (A(), E("div", {
            key: 0,
            class: "downloader-item-button",
            onClick: u[0] || (u[0] = (d) => i.$emit("refresh"))
          }, " 重新生成 ")) : L("", !0)
        ]),
        $($t, {
          modelValue: o.value,
          "onUpdate:modelValue": u[1] || (u[1] = (d) => o.value = d),
          title: "预览大图"
        }, {
          default: R(() => [
            b("div", pp, [
              i.previewImage ? (A(), E("img", {
                key: 0,
                class: "preview-full-image",
                src: i.previewImage
              }, null, 8, dp)) : L("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), Yn = /* @__PURE__ */ j(fp, [["__scopeId", "data-v-712d81a0"]]);
function ue() {
  return Ue("pc");
}
function Re() {
  return Ue("pageData");
}
function Cn() {
  return Ue("viewData");
}
function Xe() {
  return Ue("rules");
}
function za() {
  return Ue("suggestion");
}
const mp = { class: "jobs-container" }, yp = { class: "job-card-header" }, hp = ["onClick"], gp = { class: "job-card-row" }, vp = { key: 0 }, wp = { class: "job-card-row" }, bp = /* @__PURE__ */ M({
  __name: "JobList",
  props: {
    label: {}
  },
  setup(t) {
    const e = ue(), n = Xe(), r = U(() => ba(n == null ? void 0 : n.value)), o = X([]), a = U(() => r.value.map((s) => ({
      name: s.name,
      items: s.jobs.map((i) => {
        const u = Ot(i.name, n == null ? void 0 : n.value), c = Ca(u.name, n == null ? void 0 : n.value), d = c.multiSkillTexts.map((y) => `${y}、`).join("") + c.text, { point: f, text: h } = Or(
          u.name,
          e == null ? void 0 : e.value.attributes,
          n == null ? void 0 : n.value
        );
        return {
          name: u.name,
          wealth: u.wealth,
          skillText: d,
          pointText: h,
          pointValue: f
        };
      })
    })));
    function l(s) {
      e && (e.value.job = s);
    }
    return (s, i) => {
      const u = fe("el-icon"), c = fe("el-collapse-item"), d = fe("el-collapse");
      return A(), E("div", null, [
        $(d, {
          class: "job-list",
          modelValue: o.value,
          "onUpdate:modelValue": i[0] || (i[0] = (f) => o.value = f)
        }, {
          default: R(() => [
            (A(!0), E(oe, null, se(a.value, (f) => (A(), W(c, {
              key: f.name,
              title: f.name,
              name: f.name
            }, {
              default: R(() => [
                b("div", mp, [
                  (A(!0), E(oe, null, se(f.items, (h) => (A(), E("div", {
                    key: h.name,
                    class: "job-card"
                  }, [
                    b("div", yp, [
                      b("span", null, F(h.name), 1),
                      b("span", null, " 信用评级：" + F(h.wealth[0] === h.wealth[1] ? h.wealth[0] : `${h.wealth[0]}~${h.wealth[1]}`), 1),
                      b("a", {
                        class: "job-card-action-use",
                        onClick: () => l(h.name)
                      }, [
                        $(u, { size: "0.9em" }, {
                          default: R(() => [
                            $(P(ja))
                          ]),
                          _: 1
                        }),
                        Me(" 使用 ")
                      ], 8, hp)
                    ]),
                    b("div", gp, [
                      b("span", null, "职业点数：" + F(h.pointText), 1),
                      h.pointValue ? (A(), E("span", vp, " (当前结果: " + F(h.pointValue) + ") ", 1)) : L("", !0)
                    ]),
                    b("div", wp, "本职技能：" + F(h.skillText), 1)
                  ]))), 128))
                ])
              ]),
              _: 2
            }, 1032, ["title", "name"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), _p = /* @__PURE__ */ j(bp, [["__scopeId", "data-v-3d26f34d"]]), Sp = { class: "weapons-container" }, kp = { class: "weapon-card-header" }, Ap = { class: "weapon-card-row" }, $p = { class: "weapon-card-row" }, Pp = { class: "weapon-card-row weapon-card-row-4" }, xp = ["onClick"], Ip = /* @__PURE__ */ M({
  __name: "WeaponList",
  props: {
    label: {}
  },
  setup(t) {
    const e = ii, n = ue(), r = X([]), o = U(() => {
      const f = new Map(
        Rr.map((h) => [
          h.name,
          {
            ...h,
            range: `${Number(h.range)}` === h.range ? `${h.range}m` : h.range
          }
        ])
      );
      return va.map(([h, y]) => ({
        name: y,
        groupKey: h,
        items: ga[h].map((m) => f.get(m))
      }));
    });
    function a(f) {
      return `${Number(f)}` === f ? `${f}m` : f || "N/A";
    }
    const l = X([]), s = X(-1), i = X(!1);
    function u(f) {
      const h = f.target, y = l.value.findIndex((m) => m.el === h);
      y !== -1 && (s.value = y, i.value = !0);
    }
    function c() {
      i.value = !1;
    }
    function d(f, h) {
      !n || !h || (n.value.weapons[f] = h);
    }
    return (f, h) => {
      var w;
      const y = fe("el-icon"), m = fe("el-collapse-item"), _ = fe("el-collapse"), v = fe("el-popover");
      return A(), E("div", null, [
        $(_, {
          class: "weapon-list",
          modelValue: r.value,
          "onUpdate:modelValue": h[0] || (h[0] = (p) => r.value = p)
        }, {
          default: R(() => [
            (A(!0), E(oe, null, se(o.value, (p) => (A(), W(m, {
              key: p.groupKey,
              title: p.name,
              name: p.groupKey
            }, {
              default: R(() => [
                b("div", Sp, [
                  (A(!0), E(oe, null, se(p.items, (g) => (A(), E("div", {
                    key: g.name,
                    class: "weapon-card"
                  }, [
                    b("div", kp, [
                      b("span", null, "【" + F(g.name) + "】" + F(g.skill), 1),
                      Ke((A(), E("a", {
                        class: "job-card-action job-card-action-use",
                        ref_for: !0,
                        ref: (k) => {
                          l.value.push({
                            el: k,
                            weapon: g
                          });
                        },
                        onClick: u
                      }, [
                        $(y, {
                          size: "0.9em",
                          class: "job-card-action-use-icon"
                        }, {
                          default: R(() => [
                            $(P(ja))
                          ]),
                          _: 1
                        }),
                        Me(" 使用 ")
                      ])), [
                        [P(e), c]
                      ])
                    ]),
                    b("div", Ap, [
                      b("span", null, "伤害：" + F(g.dam), 1),
                      b("span", null, "次数：" + F(g.round || "N/A"), 1),
                      b("span", null, F(g.tho ? "贯穿" : "非贯穿"), 1)
                    ]),
                    b("div", $p, [
                      b("span", null, "射程：" + F(a(g.range)), 1),
                      b("span", null, "装弹量：" + F(g.num || "N/A"), 1),
                      b("span", null, "故障率：" + F(g.err || "N/A"), 1)
                    ]),
                    b("div", Pp, [
                      b("span", null, "年代：" + F(g.time), 1),
                      b("span", null, "价格：" + F(g.price || "N/A"), 1)
                    ])
                  ]))), 128))
                ])
              ]),
              _: 2
            }, 1032, ["title", "name"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        $(v, {
          placement: "left-start",
          "popper-class": "weapon-card-places-container",
          trigger: "click",
          "virtual-triggering": "",
          visible: i.value,
          width: 200,
          "virtual-ref": (w = l.value[s.value]) == null ? void 0 : w.el
        }, {
          default: R(() => [
            (A(), E(oe, null, se(5, (p) => b("a", {
              key: p,
              class: "job-card-action",
              onClick: (g) => {
                var k;
                return d(p - 1, (k = l.value[s.value]) == null ? void 0 : k.weapon);
              }
            }, F(p), 9, xp)), 64))
          ]),
          _: 1
        }, 8, ["visible", "virtual-ref"])
      ]);
    };
  }
}), Ep = /* @__PURE__ */ j(Ip, [["__scopeId", "data-v-892bdf5a"]]), Cp = (t) => (ze("data-v-0d8c3b76"), t = t(), Le(), t), Dp = { class: "modal-body" }, Rp = { class: "group" }, Op = /* @__PURE__ */ Cp(() => /* @__PURE__ */ b("div", null, "录卡指令", -1)), Mp = /* @__PURE__ */ M({
  __name: "DiceMaid",
  setup(t) {
    const e = ue(), n = Cn(), r = Xe(), o = U(
      () => ".st " + (e && n ? zu(e.value, n, r == null ? void 0 : r.value) : "")
    ), a = X(!1);
    function l() {
      a.value = !0;
    }
    function s(u) {
      var c;
      (c = u.target) == null || c.select();
    }
    function i() {
      Ba(o.value), he.success("已复制录卡指令");
    }
    return (u, c) => {
      const d = fe("el-input");
      return A(), E(oe, null, [
        $(tt, {
          label: "骰娘",
          icon: P(Rc),
          onClick: l
        }, null, 8, ["icon"]),
        $($t, {
          title: "骰娘相关",
          modelValue: a.value,
          "onUpdate:modelValue": c[0] || (c[0] = (f) => a.value = f)
        }, {
          default: R(() => [
            b("div", Dp, [
              b("div", Rp, [
                b("div", { class: "label" }, [
                  Op,
                  b("div", null, [
                    b("a", {
                      class: "link",
                      onClick: i
                    }, " 复制 ")
                  ])
                ]),
                $(d, {
                  type: "textarea",
                  rows: 5,
                  value: o.value,
                  readonly: "",
                  onFocus: s
                }, null, 8, ["value"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), Fp = /* @__PURE__ */ j(Mp, [["__scopeId", "data-v-0d8c3b76"]]);
function Tp(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), o = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(o), e && (r.href = e), o.href = t, o.href;
}
const Np = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function je(t) {
  const e = [];
  for (let n = 0, r = t.length; n < r; n++)
    e.push(t[n]);
  return e;
}
function An(t, e) {
  const r = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function Vp(t) {
  const e = An(t, "border-left-width"), n = An(t, "border-right-width");
  return t.clientWidth + e + n;
}
function Up(t) {
  const e = An(t, "border-top-width"), n = An(t, "border-bottom-width");
  return t.clientHeight + e + n;
}
function La(t, e = {}) {
  const n = e.width || Vp(t), r = e.height || Up(t);
  return { width: n, height: r };
}
function Bp() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const n = e && e.env ? e.env.devicePixelRatio : null;
  return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const Ee = 16384;
function jp(t) {
  (t.width > Ee || t.height > Ee) && (t.width > Ee && t.height > Ee ? t.width > t.height ? (t.height *= Ee / t.width, t.width = Ee) : (t.width *= Ee / t.height, t.height = Ee) : t.width > Ee ? (t.height *= Ee / t.width, t.width = Ee) : (t.width *= Ee / t.height, t.height = Ee));
}
function $n(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.decode = () => e(r), r.onload = () => e(r), r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = t;
  });
}
async function zp(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Lp(t, e, n) {
  const r = "http://www.w3.org/2000/svg", o = document.createElementNS(r, "svg"), a = document.createElementNS(r, "foreignObject");
  return o.setAttribute("width", `${e}`), o.setAttribute("height", `${n}`), o.setAttribute("viewBox", `0 0 ${e} ${n}`), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("externalResourcesRequired", "true"), o.appendChild(a), a.appendChild(t), zp(o);
}
const xe = (t, e) => {
  if (t instanceof e)
    return !0;
  const n = Object.getPrototypeOf(t);
  return n === null ? !1 : n.constructor.name === e.name || xe(n, e);
};
function Wp(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Gp(t) {
  return je(t).map((e) => {
    const n = t.getPropertyValue(e), r = t.getPropertyPriority(e);
    return `${e}: ${n}${r ? " !important" : ""};`;
  }).join(" ");
}
function Hp(t, e, n) {
  const r = `.${t}:${e}`, o = n.cssText ? Wp(n) : Gp(n);
  return document.createTextNode(`${r}{${o}}`);
}
function Fo(t, e, n) {
  const r = window.getComputedStyle(t, n), o = r.getPropertyValue("content");
  if (o === "" || o === "none")
    return;
  const a = Np();
  try {
    e.className = `${e.className} ${a}`;
  } catch {
    return;
  }
  const l = document.createElement("style");
  l.appendChild(Hp(a, n, r)), e.appendChild(l);
}
function qp(t, e) {
  Fo(t, e, ":before"), Fo(t, e, ":after");
}
const To = "application/font-woff", No = "image/jpeg", Jp = {
  woff: To,
  woff2: To,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: No,
  jpeg: No,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Kp(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function Vr(t) {
  const e = Kp(t).toLowerCase();
  return Jp[e] || "";
}
function Qp(t) {
  return t.split(/,/)[1];
}
function hr(t) {
  return t.search(/^(data:)/) !== -1;
}
function Xp(t, e) {
  return `data:${e};base64,${t}`;
}
async function Wa(t, e, n) {
  const r = await fetch(t, e);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const o = await r.blob();
  return new Promise((a, l) => {
    const s = new FileReader();
    s.onerror = l, s.onloadend = () => {
      try {
        a(n({ res: r, result: s.result }));
      } catch (i) {
        l(i);
      }
    }, s.readAsDataURL(o);
  });
}
const er = {};
function Zp(t, e, n) {
  let r = t.replace(/\?.*/, "");
  return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? `[${e}]${r}` : r;
}
async function Ur(t, e, n) {
  const r = Zp(t, e, n.includeQueryParams);
  if (er[r] != null)
    return er[r];
  n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let o;
  try {
    const a = await Wa(t, n.fetchRequestInit, ({ res: l, result: s }) => (e || (e = l.headers.get("Content-Type") || ""), Qp(s)));
    o = Xp(a, e);
  } catch (a) {
    o = n.imagePlaceholder || "";
    let l = `Failed to fetch resource: ${t}`;
    a && (l = typeof a == "string" ? a : a.message), l && console.warn(l);
  }
  return er[r] = o, o;
}
async function Yp(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : $n(e);
}
async function ed(t, e) {
  if (t.currentSrc) {
    const a = document.createElement("canvas"), l = a.getContext("2d");
    a.width = t.clientWidth, a.height = t.clientHeight, l == null || l.drawImage(t, 0, 0, a.width, a.height);
    const s = a.toDataURL();
    return $n(s);
  }
  const n = t.poster, r = Vr(n), o = await Ur(n, r, e);
  return $n(o);
}
async function td(t) {
  var e;
  try {
    if (!((e = t == null ? void 0 : t.contentDocument) === null || e === void 0) && e.body)
      return await Dn(t.contentDocument.body, {}, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function nd(t, e) {
  return xe(t, HTMLCanvasElement) ? Yp(t) : xe(t, HTMLVideoElement) ? ed(t, e) : xe(t, HTMLIFrameElement) ? td(t) : t.cloneNode(!1);
}
const rd = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
async function od(t, e, n) {
  var r, o;
  let a = [];
  return rd(t) && t.assignedNodes ? a = je(t.assignedNodes()) : xe(t, HTMLIFrameElement) && (!((r = t.contentDocument) === null || r === void 0) && r.body) ? a = je(t.contentDocument.body.childNodes) : a = je(((o = t.shadowRoot) !== null && o !== void 0 ? o : t).childNodes), a.length === 0 || xe(t, HTMLVideoElement) || await a.reduce((l, s) => l.then(() => Dn(s, n)).then((i) => {
    i && e.appendChild(i);
  }), Promise.resolve()), e;
}
function ad(t, e) {
  const n = e.style;
  if (!n)
    return;
  const r = window.getComputedStyle(t);
  r.cssText ? (n.cssText = r.cssText, n.transformOrigin = r.transformOrigin) : je(r).forEach((o) => {
    let a = r.getPropertyValue(o);
    o === "font-size" && a.endsWith("px") && (a = `${Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1}px`), xe(t, HTMLIFrameElement) && o === "display" && a === "inline" && (a = "block"), o === "d" && e.getAttribute("d") && (a = `path(${e.getAttribute("d")})`), n.setProperty(o, a, r.getPropertyPriority(o));
  });
}
function id(t, e) {
  xe(t, HTMLTextAreaElement) && (e.innerHTML = t.value), xe(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function ld(t, e) {
  if (xe(t, HTMLSelectElement)) {
    const n = e, r = Array.from(n.children).find((o) => t.value === o.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function sd(t, e) {
  return xe(e, Element) && (ad(t, e), qp(t, e), id(t, e), ld(t, e)), e;
}
async function ud(t, e) {
  const n = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (n.length === 0)
    return t;
  const r = {};
  for (let a = 0; a < n.length; a++) {
    const s = n[a].getAttribute("xlink:href");
    if (s) {
      const i = t.querySelector(s), u = document.querySelector(s);
      !i && u && !r[s] && (r[s] = await Dn(u, e, !0));
    }
  }
  const o = Object.values(r);
  if (o.length) {
    const a = "http://www.w3.org/1999/xhtml", l = document.createElementNS(a, "svg");
    l.setAttribute("xmlns", a), l.style.position = "absolute", l.style.width = "0", l.style.height = "0", l.style.overflow = "hidden", l.style.display = "none";
    const s = document.createElementNS(a, "defs");
    l.appendChild(s);
    for (let i = 0; i < o.length; i++)
      s.appendChild(o[i]);
    t.appendChild(l);
  }
  return t;
}
async function Dn(t, e, n) {
  return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((r) => nd(r, e)).then((r) => od(t, r, e)).then((r) => sd(t, r)).then((r) => ud(r, e));
}
const Ga = /url\((['"]?)([^'"]+?)\1\)/g, cd = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, pd = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function dd(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function fd(t) {
  const e = [];
  return t.replace(Ga, (n, r, o) => (e.push(o), n)), e.filter((n) => !hr(n));
}
async function md(t, e, n, r, o) {
  try {
    const a = n ? Tp(e, n) : e, l = Vr(e);
    let s;
    return o || (s = await Ur(a, l, r)), t.replace(dd(e), `$1${s}$3`);
  } catch {
  }
  return t;
}
function yd(t, { preferredFontFormat: e }) {
  return e ? t.replace(pd, (n) => {
    for (; ; ) {
      const [r, , o] = cd.exec(n) || [];
      if (!o)
        return "";
      if (o === e)
        return `src: ${r};`;
    }
  }) : t;
}
function Ha(t) {
  return t.search(Ga) !== -1;
}
async function qa(t, e, n) {
  if (!Ha(t))
    return t;
  const r = yd(t, n);
  return fd(r).reduce((a, l) => a.then((s) => md(s, l, e, n)), Promise.resolve(r));
}
async function tn(t, e, n) {
  var r;
  const o = (r = e.style) === null || r === void 0 ? void 0 : r.getPropertyValue(t);
  if (o) {
    const a = await qa(o, null, n);
    return e.style.setProperty(t, a, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function hd(t, e) {
  await tn("background", t, e) || await tn("background-image", t, e), await tn("mask", t, e) || await tn("mask-image", t, e);
}
async function gd(t, e) {
  const n = xe(t, HTMLImageElement);
  if (!(n && !hr(t.src)) && !(xe(t, SVGImageElement) && !hr(t.href.baseVal)))
    return;
  const r = n ? t.src : t.href.baseVal, o = await Ur(r, Vr(r), e);
  await new Promise((a, l) => {
    t.onload = a, t.onerror = l;
    const s = t;
    s.decode && (s.decode = a), s.loading === "lazy" && (s.loading = "eager"), n ? (t.srcset = "", t.src = o) : t.href.baseVal = o;
  });
}
async function vd(t, e) {
  const r = je(t.childNodes).map((o) => Ja(o, e));
  await Promise.all(r).then(() => t);
}
async function Ja(t, e) {
  xe(t, Element) && (await hd(t, e), await gd(t, e), await vd(t, e));
}
function wd(t, e) {
  const { style: n } = t;
  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
  const r = e.style;
  return r != null && Object.keys(r).forEach((o) => {
    n[o] = r[o];
  }), t;
}
const Vo = {};
async function Uo(t) {
  let e = Vo[t];
  if (e != null)
    return e;
  const r = await (await fetch(t)).text();
  return e = { url: t, cssText: r }, Vo[t] = e, e;
}
async function Bo(t, e) {
  let n = t.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, a = (n.match(/url\([^)]+\)/g) || []).map(async (l) => {
    let s = l.replace(r, "$1");
    return s.startsWith("https://") || (s = new URL(s, t.url).href), Wa(s, e.fetchRequestInit, ({ result: i }) => (n = n.replace(l, `url(${i})`), [l, i]));
  });
  return Promise.all(a).then(() => n);
}
function jo(t) {
  if (t == null)
    return [];
  const e = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let r = t.replace(n, "");
  const o = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const i = o.exec(r);
    if (i === null)
      break;
    e.push(i[0]);
  }
  r = r.replace(o, "");
  const a = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, l = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", s = new RegExp(l, "gi");
  for (; ; ) {
    let i = a.exec(r);
    if (i === null) {
      if (i = s.exec(r), i === null)
        break;
      a.lastIndex = s.lastIndex;
    } else
      s.lastIndex = a.lastIndex;
    e.push(i[0]);
  }
  return e;
}
async function bd(t, e) {
  const n = [], r = [];
  return t.forEach((o) => {
    if ("cssRules" in o)
      try {
        je(o.cssRules || []).forEach((a, l) => {
          if (a.type === CSSRule.IMPORT_RULE) {
            let s = l + 1;
            const i = a.href, u = Uo(i).then((c) => Bo(c, e)).then((c) => jo(c).forEach((d) => {
              try {
                o.insertRule(d, d.startsWith("@import") ? s += 1 : o.cssRules.length);
              } catch (f) {
                console.error("Error inserting rule from remote css", {
                  rule: d,
                  error: f
                });
              }
            })).catch((c) => {
              console.error("Error loading remote css", c.toString());
            });
            r.push(u);
          }
        });
      } catch (a) {
        const l = t.find((s) => s.href == null) || document.styleSheets[0];
        o.href != null && r.push(Uo(o.href).then((s) => Bo(s, e)).then((s) => jo(s).forEach((i) => {
          l.insertRule(i, o.cssRules.length);
        })).catch((s) => {
          console.error("Error loading remote stylesheet", s);
        })), console.error("Error inlining remote css file", a);
      }
  }), Promise.all(r).then(() => (t.forEach((o) => {
    if ("cssRules" in o)
      try {
        je(o.cssRules || []).forEach((a) => {
          n.push(a);
        });
      } catch (a) {
        console.error(`Error while reading CSS rules from ${o.href}`, a);
      }
  }), n));
}
function _d(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => Ha(e.style.getPropertyValue("src")));
}
async function Sd(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = je(t.ownerDocument.styleSheets), r = await bd(n, e);
  return _d(r);
}
async function kd(t, e) {
  const n = await Sd(t, e);
  return (await Promise.all(n.map((o) => {
    const a = o.parentStyleSheet ? o.parentStyleSheet.href : null;
    return qa(o.cssText, a, e);
  }))).join(`
`);
}
async function Ad(t, e) {
  const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await kd(t, e);
  if (n) {
    const r = document.createElement("style"), o = document.createTextNode(n);
    r.appendChild(o), t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r);
  }
}
async function $d(t, e = {}) {
  const { width: n, height: r } = La(t, e), o = await Dn(t, e, !0);
  return await Ad(o, e), await Ja(o, e), wd(o, e), await Lp(o, n, r);
}
async function Pd(t, e = {}) {
  const { width: n, height: r } = La(t, e), o = await $d(t, e), a = await $n(o), l = document.createElement("canvas"), s = l.getContext("2d"), i = e.pixelRatio || Bp(), u = e.canvasWidth || n, c = e.canvasHeight || r;
  return l.width = u * i, l.height = c * i, e.skipAutoScale || jp(l), l.style.width = `${u}`, l.style.height = `${c}`, e.backgroundColor && (s.fillStyle = e.backgroundColor, s.fillRect(0, 0, l.width, l.height)), s.drawImage(a, 0, 0, l.width, l.height), l;
}
async function xd(t, e = {}) {
  return (await Pd(t, e)).toDataURL("image/jpeg", e.quality || 1);
}
const nn = 210 * 8, rn = 297 * 8;
async function zo(t) {
  if (!t) return "";
  const e = await xd(t, {
    pixelRatio: 2,
    quality: 1,
    skipFonts: !0
  }), n = await Id(e), r = Math.min(nn / n.naturalWidth, rn / n.naturalHeight), o = Math.round(n.naturalWidth * r), a = Math.round(n.naturalHeight * r), l = Math.round((nn - o) / 2), s = Math.round((rn - a) / 2), i = document.createElement("canvas");
  i.width = nn, i.height = rn;
  const u = i.getContext("2d");
  return u.fillStyle = "#fff", u.fillRect(0, 0, nn, rn), u.drawImage(n, l, s, o, a), i.toDataURL("image/jpeg", 0.5);
}
function Id(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.onload = () => e(r), r.onerror = n, r.src = t;
  });
}
async function Ed({
  paperEls: t,
  paperKey: e
}) {
  return new Promise((n) => {
    ke(async () => {
      const r = {};
      (e === void 0 || e === "front") && (r.front = await zo(t.front)), (e === void 0 || e === "back") && (r.back = await zo(t.back)), n(r);
    });
  });
}
function Cd(t) {
  const e = Ve({
    front: "",
    back: ""
  });
  async function n(r) {
    if (!t.front || !t.back) throw "Setup Error: `paperEls` not exists";
    return Ed({
      paperEls: t,
      paperKey: r
    }).then((o) => (Object.assign(e, o), e));
  }
  return {
    paperImages: e,
    printPaper: n
  };
}
const Dd = { class: "card-tabs" }, Rd = ["onClick", "onDblclick"], Od = {
  key: 1,
  class: "card-tab-name"
}, Md = ["onClick"], Fd = /* @__PURE__ */ M({
  __name: "CardManager",
  props: {
    metaList: {},
    activeCardId: {}
  },
  emits: ["switch-card", "delete-card", "rename-card"],
  setup(t, { emit: e }) {
    const n = e, r = Re(), o = X(null), a = X("");
    async function l(d) {
      try {
        await Ge.confirm("确定要删除该角色卡吗？此操作不可撤销。", "警告", {
          confirmButtonText: "删除",
          cancelButtonText: "取消",
          type: "warning"
        }), n("delete-card", d);
      } catch {
      }
    }
    function s(d) {
      o.value = d.id, a.value = d.saveName;
    }
    function i() {
      o.value && a.value.trim() && n("rename-card", o.value, a.value.trim()), o.value = null;
    }
    function u(d) {
      return d.name && d.name !== "未命名角色卡" ? d.name : d.saveName;
    }
    function c() {
      o.value = null;
    }
    return (d, f) => {
      var y;
      const h = fe("el-icon");
      return A(), E("div", {
        class: G(["card-manager", { "printing-image": (y = P(r)) == null ? void 0 : y.printing }])
      }, [
        b("div", Dd, [
          (A(!0), E(oe, null, se(d.metaList, (m) => (A(), E("div", {
            key: m.id,
            class: G(["card-tab", { "card-tab-active": m.id === d.activeCardId }]),
            onClick: (_) => n("switch-card", m.id),
            onDblclick: (_) => s(m)
          }, [
            o.value === m.id ? Ke((A(), E("input", {
              key: 0,
              class: "card-tab-input",
              "onUpdate:modelValue": f[0] || (f[0] = (_) => a.value = _),
              onBlur: i,
              onKeyup: [
                Hr(i, ["enter"]),
                Hr(c, ["escape"])
              ],
              onClick: f[1] || (f[1] = zt(() => {
              }, ["stop"]))
            }, null, 544)), [
              [qo, a.value]
            ]) : (A(), E("span", Od, F(u(m)), 1)),
            b("span", {
              class: G(["card-tab-btn card-tab-delete", { "card-tab-delete-mobile": m.id !== d.activeCardId }]),
              onClick: zt((_) => l(m.id), ["stop"]),
              title: "删除"
            }, [
              $(h, { size: 12 }, {
                default: R(() => [
                  $(P(Cc))
                ]),
                _: 1
              })
            ], 10, Md)
          ], 42, Rd))), 128))
        ])
      ], 2);
    };
  }
}), Td = /* @__PURE__ */ j(Fd, [["__scopeId", "data-v-125f77a9"]]);
async function Nd(t) {
  var e, n;
  if (typeof window < "u" && ((e = window.plus) != null && e.android))
    try {
      const r = window.plus.android.importClass("android.content.Intent"), o = new r(r.ACTION_SEND);
      o.setType("text/plain"), o.putExtra(r.EXTRA_TEXT, t);
      const a = r.createChooser(o, "分享到");
      return window.plus.android.runtimeMainActivity().startActivity(a), !0;
    } catch (r) {
      console.warn("plus.android Intent 分享失败:", r);
    }
  if (typeof window < "u" && ((n = window.uni) != null && n.shareWithSystem))
    try {
      return new Promise((r) => {
        window.uni.shareWithSystem({
          type: "text",
          summary: t,
          success: () => r(!0),
          fail: (o) => {
            console.warn("uni.shareWithSystem 失败:", o), r(!1);
          }
        });
      });
    } catch (r) {
      console.warn("uni.shareWithSystem 异常:", r);
    }
  if (typeof navigator < "u" && navigator.share)
    try {
      return await navigator.share({ text: t }), !0;
    } catch (r) {
      const o = r;
      return (o == null ? void 0 : o.name) !== "AbortError" ? (he.error("分享失败"), !1) : !0;
    }
  return he.info("已复制到剪贴板，可粘贴到其他应用分享"), !0;
}
async function Lo(t) {
  var e, n;
  if (typeof window < "u" && ((e = window.plus) != null && e.android))
    try {
      const r = window.plus.android.importClass("android.content.Context"), o = window.plus.android.runtimeMainActivity(), a = window.plus.android.invoke(o, "getSystemService", r.CLIPBOARD_SERVICE), l = window.plus.android.importClass("android.content.ClipData"), s = window.plus.android.invoke(l, "newPlainText", "text", t);
      return window.plus.android.invoke(a, "setPrimaryClip", s), !0;
    } catch (r) {
      console.warn("plus.android clipboard 写入失败:", r);
    }
  if (typeof navigator < "u" && ((n = navigator.clipboard) != null && n.writeText))
    try {
      return await navigator.clipboard.writeText(t), !0;
    } catch {
    }
  try {
    const r = document.createElement("textarea");
    return r.value = t, r.style.position = "fixed", r.style.opacity = "0", document.body.appendChild(r), r.select(), document.execCommand("copy"), document.body.removeChild(r), !0;
  } catch {
    return !1;
  }
}
async function Vd() {
  var t, e;
  if (typeof window < "u" && ((t = window.plus) != null && t.android))
    try {
      const n = window.plus.android.importClass("android.content.Context"), r = window.plus.android.runtimeMainActivity(), o = window.plus.android.invoke(r, "getSystemService", n.CLIPBOARD_SERVICE), a = window.plus.android.invoke(o, "getPrimaryClip");
      if (a) {
        const l = window.plus.android.invoke(a, "getItemCount");
        if (l && l > 0) {
          const s = window.plus.android.invoke(a, "getItemAt", 0), i = window.plus.android.invoke(s, "getText");
          if (typeof i == "string" && i) return i;
        }
      }
      return null;
    } catch (n) {
      console.warn("plus.android clipboard 读取失败:", n);
    }
  if (typeof navigator < "u" && ((e = navigator.clipboard) != null && e.readText))
    try {
      return await navigator.clipboard.readText() || null;
    } catch {
    }
  try {
    const n = document.createElement("textarea");
    n.style.position = "fixed", n.style.opacity = "0", document.body.appendChild(n), n.focus();
    const r = document.execCommand("paste"), o = n.value;
    if (document.body.removeChild(n), r && o) return o;
  } catch {
  }
  return null;
}
function dt() {
  const t = Re();
  return U(() => !(t != null && t.printing) && Gt.value === "mobile");
}
const Br = (t) => (ze("data-v-697082d9"), t = t(), Le(), t), Ud = { class: "control-section" }, Bd = { class: "main-controls" }, jd = /* @__PURE__ */ Br(() => /* @__PURE__ */ b("span", { class: "more-rules-label" }, "新版规则", -1)), zd = /* @__PURE__ */ Br(() => /* @__PURE__ */ b("span", { class: "more-rules-hint" }, "修订版职业与技能", -1)), Ld = { class: "more-controls" }, Wd = { class: "downloader-body" }, Gd = { class: "downloader-items" }, Hd = { class: "in-out-modal-body" }, qd = { class: "in-out-modal-panel" }, Jd = { class: "in-out-modal-actions" }, Kd = { class: "in-out-modal-panel" }, Qd = { class: "in-out-modal-actions" }, Xd = { class: "archive-header-actions" }, Zd = /* @__PURE__ */ Br(() => /* @__PURE__ */ b("span", { class: "archive-toggle-label" }, "覆盖", -1)), Yd = /* @__PURE__ */ M({
  __name: "ControlSection",
  props: {
    paperEls: {}
  },
  emits: ["switch-paper"],
  setup(t, { expose: e, emit: n }) {
    const r = t, o = n, a = Tr(), l = U({
      get: () => a.getItem("importOverwriteMode") ?? !0,
      set: (N) => a.setItem("importOverwriteMode", N)
    }), s = ue(), i = Cn(), u = Re(), c = dt(), d = Ue(
      "ruleSwitch",
      null
    ), f = U({
      get: () => (u == null ? void 0 : u.useNewRules) ?? !1,
      set: (N) => {
        d ? d.requestChange(N) : u && (u.useNewRules = N);
      }
    }), h = X(window.innerHeight > window.innerWidth);
    function y() {
      h.value = window.innerHeight > window.innerWidth;
    }
    Pn(() => window.addEventListener("resize", y)), ai(() => window.removeEventListener("resize", y));
    const m = U(
      () => c.value || !(u != null && u.printing) && h.value
    ), _ = Ue("cardManager"), v = X(""), w = U(() => {
      const N = JSON.stringify({
        pc: s == null ? void 0 : s.value,
        viewData: {
          ...i
          // showingChildSkills,
        }
      });
      return Oo.compressToEncodedURIComponent(N);
    }), p = U(() => {
      const N = new Blob([w.value], { type: "text/plain;charset=utf-8" });
      return URL.createObjectURL(N);
    }), g = X(!1), k = X(!1), S = X(!1), x = X("features"), I = X(!1);
    function B() {
      o("switch-paper");
    }
    const { paperImages: D, printPaper: T } = Cd(r.paperEls), O = U(() => {
      const { name: N, playerName: C } = (s == null ? void 0 : s.value) || {}, Y = "", le = [N, C].filter((Ie) => Ie).join("-");
      return `${Y}${le}${le ? "-" : ""}`;
    });
    function Q(N) {
      if (u) {
        if (u.printing) {
          he.info("已经在运行啦，请不要同时多次生成图片");
          return;
        }
        u.printing = !0, he.info({
          message: "图片生成中，页面会有轻微抖动，请稍候…",
          duration: 1e3,
          onClose() {
            T(N).then(() => {
              k.value = !0, u.printing = !1;
            });
          }
        });
      }
    }
    function re() {
      S.value = !S.value;
    }
    function ne() {
      if (!s || !i) return;
      const N = Ue("cardManager", null);
      N ? N.resetCurrentCard() : (s.value = Ve(Je()), Wu(i, Ce(u == null ? void 0 : u.useNewRules)), ke(() => {
        a.removeItem("autoSaved");
      })), he.info("已重置人物卡"), S.value = !1;
    }
    function ae() {
      g.value = !0;
    }
    async function Z() {
      await Lo(w.value) ? he.success("已复制到剪贴板") : (Ba(w.value), he.success("已复制到剪贴板"));
    }
    async function z() {
      await Lo(w.value), await Nd(w.value);
    }
    function V() {
      var Y, le;
      const N = Oo.decompressFromEncodedURIComponent(v.value), C = JSON.parse(N);
      if (C && C.viewData && C.pc && i && s)
        try {
          l.value || _.createCard(), u && (u.importing = !0);
          const Ie = ((Y = C.viewData) == null ? void 0 : Y.ruleFormat) === "new", { pc: Pe, showingChildSkillsPatch: me } = Je(
            C.pc,
            !0,
            Ce(u == null ? void 0 : u.useNewRules),
            C.viewData
          );
          s.value = Pe, Object.keys(C.viewData).forEach((ee) => {
            const pe = ee;
            i[pe] = C.viewData[pe];
          });
          const ce = Ce(u == null ? void 0 : u.useNewRules);
          if (!ce.revisedSkills && Ie ? (le = i.ruleMigration) != null && le.revertedToOld ? i.ruleFormat = "new" : (i.ruleFormat = "old", i.ruleMigration = {
            ...i.ruleMigration ?? {},
            revertedToOld: !0
          }) : i.ruleFormat = ce.revisedSkills ? "new" : "old", me)
            for (const [ee, pe] of Object.entries(me))
              i.showingChildSkills[ee] = pe;
          Sn(i, ce), he.success(
            l.value ? "已覆盖当前角色卡" : "已导入到新存档"
          ), g.value = !1, S.value = !1;
        } catch {
          he.error("数据有误，无法导入。页面可能因此受损，建议刷新");
        }
      else
        he.error("数据有误，无法导入");
      u && (u.importing = !1);
    }
    async function H() {
      const N = await Vd();
      N ? (v.value = N, he.success("已读取剪贴板内容")) : he.info("无法自动读取剪贴板，请长按输入框手动粘贴");
    }
    async function te() {
      try {
        await Ge.confirm(
          "确定要清空所有存档吗？此操作不可撤销，所有角色卡数据将被删除。",
          "警告",
          {
            confirmButtonText: "清空",
            cancelButtonText: "取消",
            type: "warning"
          }
        ), _.clearAllCards(), he.success("已清空所有存档");
      } catch {
      }
    }
    return e({ inData: v, applyInData: V, copyOutData: Z }), (N, C) => {
      const Y = fe("el-switch"), le = fe("el-tab-pane"), Ie = fe("el-tabs"), Pe = fe("el-input"), me = fe("el-button"), ce = fe("el-icon");
      return A(), E("div", Ud, [
        b("div", Bd, [
          $(tt, {
            label: "数据",
            icon: P(Mc),
            onClick: ae
          }, null, 8, ["icon"]),
          $(Fp),
          $(tt, {
            label: "更多",
            icon: P(Bc),
            onClick: re
          }, null, 8, ["icon"]),
          P(c) ? L("", !0) : (A(), W(tt, {
            key: 0,
            label: "翻面",
            icon: P(Wc),
            onClick: B
          }, null, 8, ["icon"]))
        ]),
        S.value ? (A(), W(Ie, {
          key: 0,
          class: "more-container",
          modelValue: x.value,
          "onUpdate:modelValue": C[5] || (C[5] = (ee) => x.value = ee)
        }, {
          default: R(() => [
            $(le, {
              class: "more-pane",
              label: "更多功能",
              name: "features"
            }, {
              default: R(() => [
                b("div", {
                  class: "more-rules-row",
                  onClick: C[2] || (C[2] = (ee) => f.value = !f.value)
                }, [
                  jd,
                  $(Y, {
                    modelValue: f.value,
                    "onUpdate:modelValue": C[0] || (C[0] = (ee) => f.value = ee),
                    size: "small",
                    onClick: C[1] || (C[1] = zt(() => {
                    }, ["stop"]))
                  }, null, 8, ["modelValue"]),
                  zd
                ]),
                b("div", Ld, [
                  $(tt, {
                    label: "重置人物卡",
                    icon: P(Hc),
                    onClick: ne
                  }, null, 8, ["icon"]),
                  $(tt, {
                    label: "保存",
                    icon: P(Tc),
                    onClick: C[3] || (C[3] = () => Q())
                  }, null, 8, ["icon"]),
                  $(tt, {
                    label: "存档管理",
                    icon: P(Vc),
                    onClick: C[4] || (C[4] = (ee) => I.value = !0)
                  }, null, 8, ["icon"])
                ])
              ]),
              _: 1
            }),
            $(le, {
              class: "more-pane more-pane-less",
              label: "职业列表",
              name: "jobs"
            }, {
              default: R(() => [
                $(_p)
              ]),
              _: 1
            }),
            $(le, {
              class: "more-pane more-pane-less",
              label: "武器列表",
              name: "weapons"
            }, {
              default: R(() => [
                $(Ep)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : L("", !0),
        $($t, {
          modelValue: k.value,
          "onUpdate:modelValue": C[8] || (C[8] = (ee) => k.value = ee),
          title: "下载图片/数据"
        }, {
          default: R(() => [
            b("div", Wd, [
              b("div", Gd, [
                $(Yn, {
                  title: "正面",
                  refreshable: "",
                  previewImage: P(D).front,
                  download: {
                    url: P(D).front,
                    name: O.value,
                    type: "jpg"
                  },
                  onRefresh: C[6] || (C[6] = () => Q("front"))
                }, null, 8, ["previewImage", "download"]),
                $(Yn, {
                  title: "背面",
                  refreshable: "",
                  previewImage: P(D).back,
                  download: {
                    url: P(D).back,
                    name: O.value,
                    type: "jpg"
                  },
                  onRefresh: C[7] || (C[7] = () => Q("back"))
                }, null, 8, ["previewImage", "download"]),
                $(Yn, {
                  title: "车卡数据",
                  download: {
                    url: p.value,
                    name: "COC",
                    type: "txt"
                  }
                }, null, 8, ["download"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        $($t, {
          modelValue: g.value,
          "onUpdate:modelValue": C[10] || (C[10] = (ee) => g.value = ee),
          title: "数据",
          onClosed: C[11] || (C[11] = (ee) => v.value = "")
        }, {
          default: R(() => [
            b("div", Hd, [
              b("div", qd, [
                $(Pe, {
                  type: "textarea",
                  value: w.value,
                  rows: 16,
                  readonly: !0,
                  resize: "none"
                }, null, 8, ["value"]),
                b("div", Jd, [
                  $(me, {
                    type: "primary",
                    onClick: Z
                  }, {
                    default: R(() => [
                      Me(" 复制以上内容 ")
                    ]),
                    _: 1
                  }),
                  m.value ? (A(), W(me, {
                    key: 0,
                    type: "primary",
                    onClick: z
                  }, {
                    default: R(() => [
                      Me(" 分享 ")
                    ]),
                    _: 1
                  })) : L("", !0)
                ])
              ]),
              b("div", Kd, [
                $(Pe, {
                  type: "textarea",
                  modelValue: v.value,
                  "onUpdate:modelValue": C[9] || (C[9] = (ee) => v.value = ee),
                  rows: 16,
                  placeholder: "将文本粘贴到这里",
                  resize: "none"
                }, null, 8, ["modelValue"]),
                b("div", Qd, [
                  $(me, {
                    type: "primary",
                    onClick: V
                  }, {
                    default: R(() => [
                      Me(" 导入以上内容 ")
                    ]),
                    _: 1
                  }),
                  $(me, {
                    type: "primary",
                    onClick: H
                  }, {
                    default: R(() => [
                      Me(" 读取剪贴板 ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        $($t, {
          modelValue: I.value,
          "onUpdate:modelValue": C[15] || (C[15] = (ee) => I.value = ee),
          title: "存档管理"
        }, {
          "header-actions": R(() => [
            b("div", Xd, [
              Zd,
              $(Y, {
                modelValue: l.value,
                "onUpdate:modelValue": C[12] || (C[12] = (ee) => l.value = ee),
                size: "small"
              }, null, 8, ["modelValue"]),
              $(me, {
                type: "danger",
                size: "small",
                plain: "",
                onClick: te
              }, {
                default: R(() => [
                  Me(" 清空存档 ")
                ]),
                _: 1
              }),
              $(me, {
                size: "small",
                class: "archive-btn-new",
                onClick: C[13] || (C[13] = (ee) => P(_).createCard())
              }, {
                default: R(() => [
                  $(ce, {
                    size: 12,
                    style: { "margin-right": "4px" }
                  }, {
                    default: R(() => [
                      $(P(zc))
                    ]),
                    _: 1
                  }),
                  Me("新建 ")
                ]),
                _: 1
              })
            ])
          ]),
          default: R(() => [
            $(Td, {
              metaList: P(_).metaList.value,
              activeCardId: P(_).activeCardId.value,
              onSwitchCard: P(_).switchCard,
              onDeleteCard: P(_).deleteCard,
              onRenameCard: C[14] || (C[14] = (ee, pe) => P(_).renameCard(ee, pe))
            }, null, 8, ["metaList", "activeCardId", "onSwitchCard", "onDeleteCard"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), Wo = /* @__PURE__ */ j(Yd, [["__scopeId", "data-v-697082d9"]]), ef = /* @__PURE__ */ M({
  __name: "PaperLayout",
  props: {
    setRef: {}
  },
  setup(t) {
    const e = Re();
    return (n, r) => {
      var o;
      return A(), E("div", {
        class: G(["paper theme-light", {
          "printing-image": (o = P(e)) == null ? void 0 : o.printing
        }])
      }, [
        b("div", {
          class: "paper-content",
          ref: n.setRef
        }, [
          Pt(n.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 2);
    };
  }
}), Ka = /* @__PURE__ */ j(ef, [["__scopeId", "data-v-5fd12b90"]]), tf = { class: "paper-section" }, nf = { class: "heading" }, rf = { class: "title" }, of = { class: "subtitle" }, af = { class: "body" }, lf = /* @__PURE__ */ M({
  __name: "PaperSection",
  props: {
    title: {},
    subTitle: {},
    centered: { type: Boolean, default: !0 }
  },
  setup(t) {
    return (e, n) => (A(), E("div", tf, [
      b("div", {
        class: G(["header", {
          "header-centered": e.centered
        }])
      }, [
        Pt(e.$slots, "header", {}, () => [
          b("h1", nf, [
            b("span", rf, F(e.title), 1),
            b("span", of, F(e.subTitle), 1)
          ])
        ], !0)
      ], 2),
      b("div", af, [
        Pt(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), Ae = /* @__PURE__ */ j(lf, [["__scopeId", "data-v-a68d9331"]]), sf = { class: "label" }, uf = { class: "label-title" }, cf = {
  key: 0,
  class: "label-hint"
}, pf = ["placeholder", "readonly", "value"], df = /* @__PURE__ */ M({
  __name: "WritableRow",
  props: {
    label: {},
    hint: {},
    placeholder: {},
    char: { default: 5 },
    modelValue: { default: "" },
    readonly: { type: Boolean }
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(t) {
    const e = t, n = Re(), r = Ve({
      width: `${e.char}em`
    });
    return (o, a) => {
      var l, s;
      return A(), E("div", {
        class: G(["writable-row", {
          "writable-row-with-hint": !!o.hint,
          "printing-image": (l = P(n)) == null ? void 0 : l.printing
        }])
      }, [
        b("div", sf, [
          b("div", uf, F(o.label), 1),
          o.hint ? (A(), E("div", cf, F(o.hint), 1)) : L("", !0)
        ]),
        b("input", {
          type: "text",
          class: "input",
          style: or(r),
          placeholder: (s = P(n)) != null && s.printing ? "" : o.placeholder,
          readonly: o.readonly,
          value: o.modelValue,
          onInput: a[0] || (a[0] = (i) => o.$emit("update:modelValue", i.target.value)),
          onFocus: a[1] || (a[1] = (i) => o.$emit("focus")),
          onBlur: a[2] || (a[2] = (i) => o.$emit("blur"))
        }, null, 44, pf)
      ], 2);
    };
  }
}), be = /* @__PURE__ */ j(df, [["__scopeId", "data-v-1b667523"]]), ff = { class: "flatten-tree" }, mf = { class: "group-label" }, yf = { class: "options" }, hf = ["onClick"], gf = /* @__PURE__ */ M({
  __name: "FlattenTree",
  props: {
    tree: {}
  },
  emits: ["select"],
  setup(t) {
    return (e, n) => (A(), E("div", ff, [
      (A(!0), E(oe, null, se(e.tree, (r) => (A(), E("div", {
        class: "group",
        key: r.key
      }, [
        b("div", mf, F(r.label), 1),
        b("div", yf, [
          (A(!0), E(oe, null, se(r.children, (o) => (A(), E("a", {
            class: "option",
            key: o.key,
            onClick: (a) => e.$emit("select", o, r)
          }, F(o.label), 9, hf))), 128))
        ])
      ]))), 128))
    ]));
  }
}), Qa = /* @__PURE__ */ j(gf, [["__scopeId", "data-v-3998604b"]]), jr = {
  mounted(t, e) {
    t._clickOutsideEvent = function(n) {
      t === n.target || t.contains(n.target) || e.value(n, t);
    }, document.addEventListener("click", t._clickOutsideEvent);
  },
  unmounted: function(e) {
    document.removeEventListener("click", e._clickOutsideEvent);
  }
}, vf = { class: "info-row" }, wf = { class: "info-row info-row--time-job" }, bf = { class: "rel" }, _f = {
  key: 0,
  class: "job-selector"
}, Sf = { class: "job-selector-header" }, kf = { class: "info-row" }, Af = { class: "info-col" }, $f = { class: "info-col" }, Pf = /* @__PURE__ */ M({
  __name: "InvestigatorSection",
  setup(t) {
    const e = ue(), n = Re(), r = Xe(), o = U(() => ba(r == null ? void 0 : r.value)), a = X(!1), l = X("");
    function s() {
      a.value = !0;
    }
    function i() {
      a.value = !1;
    }
    _e(
      () => a.value,
      () => {
        l.value = "";
      }
    );
    const u = dt(), c = U(() => {
      const f = l.value;
      return o.value.reduce((y, m) => {
        const { name: _, pinyin: v, jobs: w } = m, p = u.value ? _.replace(/\//g, " ") : _, g = w.reduce(
          (k, S) => ((!f || _.includes(f) || v.includes(f) || S.name.includes(f) || S.pinyin.includes(f)) && k.push({ label: S.name, key: S.name }), k),
          []
        );
        return g.length && y.push({
          label: p,
          key: _,
          children: g
        }), y;
      }, []);
    });
    function d(f) {
      e && (e.value.job = f, i());
    }
    return (f, h) => P(e) ? (A(), W(Ae, {
      key: 0,
      title: "调查员"
    }, {
      default: R(() => {
        var y;
        return [
          b("div", {
            class: G(["info-section", {
              "printing-image": (y = P(n)) == null ? void 0 : y.printing
            }])
          }, [
            b("div", vf, [
              $(be, {
                label: "姓名",
                char: 5.5,
                modelValue: P(e).name,
                "onUpdate:modelValue": h[0] || (h[0] = (m) => P(e).name = m)
              }, null, 8, ["modelValue"]),
              $(be, {
                label: "玩家",
                char: 5.5,
                modelValue: P(e).playerName,
                "onUpdate:modelValue": h[1] || (h[1] = (m) => P(e).playerName = m)
              }, null, 8, ["modelValue"])
            ]),
            b("div", wf, [
              $(be, {
                label: "时代",
                modelValue: P(e).time,
                "onUpdate:modelValue": h[2] || (h[2] = (m) => P(e).time = m)
              }, null, 8, ["modelValue"]),
              Ke((A(), E("div", bf, [
                $(be, {
                  label: "职业",
                  modelValue: P(e).job,
                  "onUpdate:modelValue": h[3] || (h[3] = (m) => P(e).job = m),
                  onFocus: s
                }, null, 8, ["modelValue"]),
                $(gr, { name: "slide-up" }, {
                  default: R(() => [
                    a.value ? (A(), E("div", _f, [
                      b("div", Sf, [
                        Ke(b("input", {
                          class: "job-search-input",
                          type: "text",
                          placeholder: "输入职业名称或拼音可以进行搜索",
                          "onUpdate:modelValue": h[4] || (h[4] = (m) => l.value = m)
                        }, null, 512), [
                          [qo, l.value]
                        ])
                      ]),
                      $(Qa, {
                        tree: c.value,
                        onSelect: h[5] || (h[5] = (m) => d(m.label))
                      }, null, 8, ["tree"])
                    ])) : L("", !0)
                  ]),
                  _: 1
                })
              ])), [
                [P(jr), i]
              ])
            ]),
            b("div", kf, [
              b("div", Af, [
                $(be, {
                  label: "年龄",
                  char: 4,
                  modelValue: P(e).age,
                  "onUpdate:modelValue": h[6] || (h[6] = (m) => P(e).age = m)
                }, null, 8, ["modelValue"]),
                $(be, {
                  label: "性别",
                  char: 4,
                  modelValue: P(e).gender,
                  "onUpdate:modelValue": h[7] || (h[7] = (m) => P(e).gender = m)
                }, null, 8, ["modelValue"])
              ]),
              b("div", $f, [
                $(be, {
                  label: "住地",
                  char: 5,
                  modelValue: P(e).location,
                  "onUpdate:modelValue": h[8] || (h[8] = (m) => P(e).location = m)
                }, null, 8, ["modelValue"]),
                $(be, {
                  label: "故乡",
                  char: 5,
                  modelValue: P(e).hometown,
                  "onUpdate:modelValue": h[9] || (h[9] = (m) => P(e).hometown = m)
                }, null, 8, ["modelValue"])
              ])
            ])
          ], 2)
        ];
      }),
      _: 1
    })) : L("", !0);
  }
}), xf = /* @__PURE__ */ j(Pf, [["__scopeId", "data-v-e33b4fc0"]]), If = (t) => (ze("data-v-625b6735"), t = t(), Le(), t), Ef = { class: "info-section" }, Cf = { class: "attributes-grid" }, Df = { class: "attributes-group attributes-group--left" }, Rf = /* @__PURE__ */ If(() => /* @__PURE__ */ b("div", { class: "divider" }, null, -1)), Of = { class: "attributes-group attributes-group--right" }, Mf = { class: "attributes-actions" }, Ff = {
  key: 0,
  class: "ponits-sum"
}, Tf = {
  key: 0,
  class: "ponits-sum ponits-sum--mobile"
}, Nf = /* @__PURE__ */ M({
  __name: "AttributesSection",
  setup(t) {
    const e = ue(), n = [
      { key: "str", label: "力量", hint: "STR" },
      { key: "con", label: "体质", hint: "CON" },
      { key: "dex", label: "敏捷", hint: "DEX" },
      { key: "app", label: "外貌", hint: "APP" },
      { key: "pow", label: "意志", hint: "POW" }
    ], r = [
      { key: "siz", label: "体型", hint: "SIZ" },
      { key: "edu", label: "教育", hint: "知识 EDU" },
      { key: "int", label: "智力", hint: "灵感 INT" },
      { key: "luc", label: "幸运", hint: "LUK" }
    ], o = [...n, ...r], a = U(() => {
      if (!e) return 0;
      const { str: s, con: i, dex: u, app: c, pow: d, siz: f, edu: h, int: y } = e.value.attributes, m = [s, i, u, c, d, f, h, y];
      return m.every((v) => v) ? m.reduce((v, w) => v + (w || 0), 0) : 0;
    });
    function l(s, i) {
      e && (e.value.attributes[s] = i ? +i : void 0);
    }
    return (s, i) => P(e) ? (A(), W(Ae, {
      key: 0,
      title: "属性"
    }, {
      default: R(() => [
        b("div", Ef, [
          b("div", Cf, [
            (A(), E(oe, null, se(o, (u) => {
              var c;
              return $(be, {
                key: u.key,
                label: u.label,
                modelValue: `${((c = P(e)) == null ? void 0 : c.attributes[u.key]) ?? ""}`,
                "onUpdate:modelValue": (d) => l(u.key, d)
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
            }), 64))
          ]),
          b("div", Df, [
            (A(), E(oe, null, se(n, (u) => {
              var c;
              return $(be, {
                key: u.key,
                label: u.label,
                modelValue: `${((c = P(e)) == null ? void 0 : c.attributes[u.key]) ?? ""}`,
                "onUpdate:modelValue": (d) => l(u.key, d)
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
            }), 64))
          ]),
          Rf,
          b("div", Of, [
            (A(), E(oe, null, se(r, (u) => {
              var c;
              return $(be, {
                key: u.key,
                label: u.label,
                modelValue: `${((c = P(e)) == null ? void 0 : c.attributes[u.key]) ?? ""}`,
                "onUpdate:modelValue": (d) => l(u.key, d)
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
            }), 64)),
            b("div", Mf, [
              a.value ? (A(), E("div", Ff, "总点数 " + F(a.value), 1)) : L("", !0)
            ])
          ]),
          a.value ? (A(), E("div", Tf, "总点数 " + F(a.value), 1)) : L("", !0)
        ])
      ]),
      _: 1
    })) : L("", !0);
  }
}), Vf = /* @__PURE__ */ j(Nf, [["__scopeId", "data-v-625b6735"]]), Uf = /* @__PURE__ */ M({
  __name: "AvatarSection",
  setup(t) {
    const e = X(!1);
    return (n, r) => {
      const o = fe("AvatarModalContent");
      return A(), W($t, {
        class: "coc-card-avatar-modal",
        title: "设置形象",
        modelValue: e.value,
        "onUpdate:modelValue": r[1] || (r[1] = (a) => e.value = a)
      }, {
        default: R(() => [
          $(o, {
            onFinished: r[0] || (r[0] = (a) => e.value = !1)
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), Bf = /* @__PURE__ */ j(Uf, [["__scopeId", "data-v-67a8d568"]]), jf = { class: "status-checkbox" }, zf = ["checked"], Lf = { class: "label" }, Wf = /* @__PURE__ */ M({
  __name: "StatusCheckbox",
  props: {
    label: {},
    checked: { type: Boolean, default: !1 }
  },
  emits: ["check"],
  setup(t, { emit: e }) {
    const n = e;
    function r(o) {
      const a = o.target;
      n("check", a.checked);
    }
    return (o, a) => (A(), E("label", jf, [
      b("input", {
        type: "checkbox",
        class: "checkbox",
        checked: o.checked,
        onChange: r
      }, null, 40, zf),
      b("div", Lf, F(o.label), 1)
    ]));
  }
}), on = /* @__PURE__ */ j(Wf, [["__scopeId", "data-v-a1461803"]]), Gf = { class: "san-status-section" }, Hf = /* @__PURE__ */ M({
  __name: "DeriveSections",
  setup(t) {
    const e = ue();
    return (n, r) => P(e) ? (A(), W(Ae, {
      key: 0,
      title: "精神状态"
    }, {
      default: R(() => {
        var o, a;
        return [
          b("div", Gf, [
            $(on, {
              label: "精神固化",
              checked: !!((a = (o = P(e).status) == null ? void 0 : o.mental) != null && a.hardened),
              onCheck: r[0] || (r[0] = (l) => {
                P(e) && (P(e).status.mental.hardened = l);
              })
            }, null, 8, ["checked"]),
            $(on, { label: "临时疯狂" }),
            $(on, { label: "永久疯狂" }),
            $(on, { label: "不定性疯狂" })
          ])
        ];
      }),
      _: 1
    })) : L("", !0);
  }
}), qf = /* @__PURE__ */ j(Hf, [["__scopeId", "data-v-8c1b21e8"]]), Xa = (t) => (ze("data-v-1c2f875c"), t = t(), Le(), t), Jf = {
  key: 0,
  class: "suggestion-content"
}, Kf = /* @__PURE__ */ Xa(() => /* @__PURE__ */ b("span", null, "默认本职技能：", -1)), Qf = { class: "multi-skill-text" }, Xf = /* @__PURE__ */ Xa(() => /* @__PURE__ */ b("span", null, "、", -1)), Zf = /* @__PURE__ */ M({
  __name: "HintSection",
  setup(t) {
    const e = za(), n = Re();
    return (r, o) => {
      var a, l;
      return A(), E("div", {
        class: G(["hint-section", {
          "printing-image": (a = P(n)) == null ? void 0 : a.printing
        }])
      }, [
        (l = P(e)) != null && l.text ? (A(), E("div", Jf, [
          Kf,
          (A(!0), E(oe, null, se(P(e).multiSkillTexts, (s) => (A(), E(oe, { key: s }, [
            b("span", Qf, F(s), 1),
            Xf
          ], 64))), 128)),
          b("span", null, F(P(e).text), 1)
        ])) : L("", !0)
      ], 2);
    };
  }
}), Yf = /* @__PURE__ */ j(Zf, [["__scopeId", "data-v-1c2f875c"]]), em = ["checked"], tm = /* @__PURE__ */ M({
  __name: "SoxCheckbox",
  props: {
    checked: { type: Boolean, default: !1 },
    xOnFalse: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["check", "change"],
  setup(t, { emit: e }) {
    const n = t, r = e, o = X(n.checked);
    _e(
      () => n.checked,
      () => {
        o.value = n.checked;
      }
    );
    function a(l) {
      if (n.disabled) return;
      const s = l.target.checked;
      o.value = s, r("check", s, l), r("change", l);
    }
    return (l, s) => {
      const i = fe("el-icon");
      return A(), E("label", {
        class: G(["sox-checkbox", { disabled: n.disabled }])
      }, [
        $(i, { size: "0.9em" }, {
          default: R(() => [
            o.value ? (A(), W(P(Jc), { key: 0 })) : L("", !0),
            !o.value && l.xOnFalse ? (A(), W(P(Ic), { key: 1 })) : L("", !0)
          ]),
          _: 1
        }),
        b("input", {
          type: "checkbox",
          class: "sox-checkbox-input",
          checked: o.value,
          onChange: a
        }, null, 40, em)
      ], 2);
    };
  }
}), zr = /* @__PURE__ */ j(tm, [["__scopeId", "data-v-2b1a3a86"]]), nm = { class: "skill-td-label" }, rm = { class: "skill-td-checkbox-label" }, om = {
  key: 0,
  class: "child-skill-display"
}, am = { key: 0 }, im = ["value"], lm = {
  key: 1,
  class: "child-skill-options"
}, sm = ["onClick"], um = {
  key: 1,
  class: "skill-td-label-comments"
}, cm = /* @__PURE__ */ M({
  __name: "SkillTdLabel",
  props: {
    skillName: {},
    displaySkillName: {},
    comments: {},
    childSkillData: {}
  },
  emits: ["selectChildSkill"],
  setup(t, { emit: e }) {
    const n = t, r = ue(), o = Re(), a = Ue("viewData"), l = e, s = X(!1), i = X(null), u = X(null), c = U(() => a == null ? void 0 : a.showingChildSkills[n.skillName]), d = U(
      () => {
        var p, g;
        return n.skillName !== "" || !!((g = (p = n.childSkillData) == null ? void 0 : p.list) != null && g.length);
      }
    ), f = U(() => {
      var p, g;
      return ((g = c.value) == null ? void 0 : g[((p = n.childSkillData) == null ? void 0 : p.place) ?? -1]) ?? "";
    }), h = U(() => ["母语", "外语"].includes(n.skillName) ? [
      ...(a == null ? void 0 : a.showingChildSkills.母语) || [],
      ...(a == null ? void 0 : a.showingChildSkills.外语) || []
    ] : c.value), y = U(() => !r || !a ? !1 : r.value.proSkills.some((p) => {
      var x;
      if (typeof p == "string")
        return p === n.skillName;
      const [g, k, S] = p;
      return g === n.skillName && S === ((x = n.childSkillData) == null ? void 0 : x.place);
    }));
    function m(p) {
      if (!(!n.childSkillData || !c.value)) {
        if (y.value && r) {
          const g = r.value.proSkills.find(([k, S, x]) => {
            var I;
            return k === n.skillName && x === ((I = n.childSkillData) == null ? void 0 : I.place);
          });
          g && typeof g != "string" && (g[1] = p);
        }
        c.value[n.childSkillData.place] = p;
      }
    }
    function _(p) {
      m(p.name), l("selectChildSkill", p), s.value = !1;
    }
    function v() {
      const p = i.value, g = u.value;
      !p || !g || (p.style.width = `${Math.max(g.offsetWidth + 2, 24)}px`);
    }
    _e(f, () => ke(v)), _e(() => o == null ? void 0 : o.printing, () => ke(v)), Pn(() => ke(v));
    function w(p) {
      if (r)
        if (p) {
          let g = n.skillName;
          n.childSkillData && (g = [n.skillName, n.childSkillData.name, n.childSkillData.place]), r.value.proSkills.push(g);
        } else
          r.value.proSkills = r.value.proSkills.filter((g) => {
            if (!n.childSkillData) return g !== n.skillName;
            const [k, S, x] = g;
            return k !== n.skillName || x !== n.childSkillData.place;
          });
    }
    return (p, g) => {
      var k, S, x;
      return A(), E("div", nm, [
        b("label", rm, [
          $(zr, {
            checked: y.value,
            onCheck: w
          }, null, 8, ["checked"])
        ]),
        b("div", null, F(p.displaySkillName), 1),
        p.childSkillData ? (A(), E("div", om, [
          p.skillName ? (A(), E("div", am, ":")) : L("", !0),
          Ke((A(), E("div", {
            class: G(["child-skill-input-container", { "child-skill-input-container--auto": d.value }])
          }, [
            b("input", {
              ref_key: "childInputRef",
              ref: i,
              type: "text",
              class: G(["child-skill-input", { "child-skill-input--auto": d.value }]),
              value: (k = c.value) == null ? void 0 : k[p.childSkillData.place],
              onInput: g[0] || (g[0] = (I) => m(I.target.value)),
              onFocus: g[1] || (g[1] = (I) => s.value = !0)
            }, null, 42, im),
            d.value ? (A(), E("span", {
              key: 0,
              ref_key: "mirrorRef",
              ref: u,
              class: "child-skill-mirror"
            }, F((S = c.value) == null ? void 0 : S[p.childSkillData.place]), 513)) : L("", !0),
            (x = p.childSkillData.list) != null && x.length ? Ke((A(), E("div", lm, [
              (A(!0), E(oe, null, se(p.childSkillData.list, (I) => {
                var B;
                return A(), E("div", {
                  key: I.name,
                  class: G(["child-skill-option", {
                    "child-skill-option-existed": (B = h.value) == null ? void 0 : B.includes(I.name)
                  }]),
                  onClick: (D) => _(I)
                }, F(I.name), 11, sm);
              }), 128))
            ], 512)), [
              [Jo, s.value]
            ]) : L("", !0)
          ], 2)), [
            [P(jr), () => s.value = !1]
          ])
        ])) : L("", !0),
        p.comments ? (A(), E("div", um, F(p.comments), 1)) : L("", !0)
      ]);
    };
  }
}), pm = /* @__PURE__ */ j(cm, [["__scopeId", "data-v-bc65bf6c"]]), dm = ["value", "readonly", "tabindex"], fm = /* @__PURE__ */ M({
  __name: "BaseTdInput",
  props: {
    value: { default: "" },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["input", "focus"],
  setup(t, { emit: e }) {
    const n = e;
    function r(o) {
      o.target.select(), n("focus", o);
    }
    return (o, a) => (A(), E("input", {
      type: "text",
      class: "base-td-input",
      value: o.value,
      readonly: o.readonly,
      tabindex: o.readonly ? "-1" : void 0,
      onInput: a[0] || (a[0] = (l) => o.$emit("input", l.target.value)),
      onFocus: a[1] || (a[1] = (l) => o.readonly ? void 0 : r)
    }, null, 40, dm));
  }
}), nt = /* @__PURE__ */ j(fm, [["__scopeId", "data-v-542bd3ff"]]), mm = { class: "skill-td-input" }, ym = /* @__PURE__ */ M({
  __name: "SkillTdInput",
  props: {
    value: { default: "" },
    checkable: { type: Boolean, default: !1 },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["input", "check"],
  setup(t) {
    return (e, n) => (A(), E("div", mm, [
      e.checkable ? (A(), W(zr, {
        key: 0,
        class: "skill-td-input-checkbox",
        checked: e.checked,
        onCheck: n[0] || (n[0] = (r) => e.$emit("check", r))
      }, null, 8, ["checked"])) : L("", !0),
      $(nt, {
        class: "skill-td-input-input",
        value: e.value,
        onInput: n[1] || (n[1] = (r) => e.$emit("input", r))
      }, null, 8, ["value"])
    ]));
  }
}), an = /* @__PURE__ */ j(ym, [["__scopeId", "data-v-349e4cf4"]]), Mt = (t) => (ze("data-v-0b1ca5a1"), t = t(), Le(), t), hm = { class: "skill-table" }, gm = /* @__PURE__ */ Mt(() => /* @__PURE__ */ b("th", { class: "skill-th th-deep" }, null, -1)), vm = /* @__PURE__ */ Mt(() => /* @__PURE__ */ b("th", { class: "skill-th th-deep th-skill" }, [
  /* @__PURE__ */ b("div", { class: "th-skill-label" }, [
    /* @__PURE__ */ b("div", { class: "th-skill-label-pro" }, [
      /* @__PURE__ */ b("span", {
        class: "th-skill-label-pro-text",
        style: { "transform-origin": "50% 40%" }
      }, " 本 "),
      /* @__PURE__ */ b("span", {
        class: "th-skill-label-pro-text",
        style: { "transform-origin": "0% 40%" }
      }, " 职 "),
      /* @__PURE__ */ b("span", {
        class: "th-skill-label-pro-text",
        style: { "transform-origin": "50% 10%" }
      }, " 技 "),
      /* @__PURE__ */ b("span", {
        class: "th-skill-label-pro-text",
        style: { "transform-origin": "0% 10%" }
      }, " 能 ")
    ]),
    /* @__PURE__ */ Me(" 技能 ")
  ])
], -1)), wm = /* @__PURE__ */ Mt(() => /* @__PURE__ */ b("th", { class: "skill-th th-deep" }, "职业", -1)), bm = /* @__PURE__ */ Mt(() => /* @__PURE__ */ b("th", { class: "skill-th th-light" }, "兴趣", -1)), _m = /* @__PURE__ */ Mt(() => /* @__PURE__ */ b("th", { class: "skill-th th-deep" }, [
  /* @__PURE__ */ b("div", { class: "th-grow" }, "成长")
], -1)), Sm = /* @__PURE__ */ Mt(() => /* @__PURE__ */ b("th", { class: "skill-th th-light" }, "基准", -1)), km = ["rowspan"], Am = {
  key: 0,
  class: "init-placeholder"
}, $m = { class: "init-placeholder-content" }, Pm = { key: 1 }, xm = {
  key: 0,
  class: "mobile-init-hint"
}, Im = {
  key: 1,
  class: "total-separation"
}, Em = {
  key: 2,
  class: "total-value"
}, Cm = /* @__PURE__ */ M({
  __name: "SkillTable",
  props: {
    data: {},
    suggestion: {}
  },
  setup(t) {
    const e = t, n = ue(), r = Cn(), o = Re(), a = Xe();
    function l(d, f, h = a == null ? void 0 : a.value) {
      return d.reduce((m, _) => {
        const v = _.groupSkills.reduce(
          (w, p, g) => {
            const k = _.groupName === "特殊", S = jt(p.name, n == null ? void 0 : n.value, h, n == null ? void 0 : n.value.job), x = k || g === 0, I = p.name, B = i(I), D = (B == null ? void 0 : B[1]) || {}, [T, O] = (f == null ? void 0 : f.wealth) ?? [-1, -1], Q = !!(n && n.value.job), re = !!(h != null && h.revisedOccupations) && T >= 0 && T === O, ne = I === "信用评级" && Q && T >= 0 && O >= 0 ? re ? "" : `(${T}~${O})` : "", ae = c(D, S);
            let Z = {
              key: p.name,
              skillName: p.name,
              displaySkillName: p.displayName ?? p.name,
              skillKey: p.name,
              comments: ne,
              init: S,
              initPlaceholder: p.initPlaceholder,
              points: D,
              total: ae,
              totalSeparation: [ae, ~~(ae / 2), ~~(ae / 5)],
              showTotal: ae > 0 && (ae !== S || ae === D.b),
              ...x ? {
                isGroupStart: x,
                groupName: _.groupName,
                groupSize: _.groupSkills.length
              } : {},
              ...k ? { isSpecialGroup: k, groupSize: 1 } : {}
            }, z = [...w], V = [Z];
            if (p.group) {
              const H = p.group.show.length, te = z.find((N) => N.isGroupStart) || Z;
              te.groupSize += H - 1, V = p.group.show.map((N, C) => {
                var Ye, Wr, Gr;
                const Y = ((Ye = r == null ? void 0 : r.showingChildSkills[p.name]) == null ? void 0 : Ye[C]) ?? N, le = (Wr = p.group) == null ? void 0 : Wr.skills.find(({ name: Ya }) => Ya === Y);
                let Pe = jt(Y, n == null ? void 0 : n.value, h, n == null ? void 0 : n.value.job) || (le == null ? void 0 : le.init) || Z.init;
                const me = [p.name, Y, C], ce = i(me), ee = (ce == null ? void 0 : ce[1]) || {};
                n && !p.name && (Pe = jt(Y, n.value, h, n.value.job));
                const pe = c(ee, Pe);
                return {
                  ...Z,
                  // group info
                  isGroupStart: C ? !1 : Z.isGroupStart,
                  // skill info
                  key: `${p.name}:_:${C}`,
                  skillKey: me,
                  init: Pe,
                  points: ee,
                  total: pe,
                  totalSeparation: [pe, ~~(pe / 2), ~~(pe / 5)],
                  showTotal: pe > 0 && (pe !== Pe || pe === ee.b),
                  // child skill info
                  childSkillData: {
                    name: Y,
                    place: C,
                    list: (Gr = p.group) == null ? void 0 : Gr.skills
                  }
                };
              });
            }
            return [...z, ...V];
          },
          []
        );
        return [...m, ...v];
      }, []);
    }
    const s = U(() => l(e.data, e.suggestion, a == null ? void 0 : a.value));
    function i(d) {
      if (n)
        return n.value.skillPoints.find((f) => {
          const [h] = f;
          if (typeof d == "string")
            return d === h;
          const [y, m, _] = h, [v, w, p] = d;
          return y === v && _ === p;
        });
    }
    function u(d, f, h) {
      if (!n) return;
      let y = i(d);
      y || (y = [typeof d == "string" ? d : [...d], {}], n.value.skillPoints.push(y));
      const m = y[1];
      if (typeof h == "boolean")
        m.c = h;
      else {
        const _ = f;
        h ? m[_] = Number(h) : delete m[_];
      }
    }
    function c(d, f) {
      const { b: h, p: y = 0, i: m = 0, g: _ = 0 } = d;
      return (h ?? f) + Number(y) + Number(m) + Number(_);
    }
    return (d, f) => {
      var h;
      return A(), E("table", hm, [
        b("thead", null, [
          b("tr", null, [
            gm,
            vm,
            b("th", {
              class: G(["skill-th th-light", { "col-base": !((h = P(o)) != null && h.printing) }])
            }, "基础", 2),
            wm,
            bm,
            _m,
            Sm
          ])
        ]),
        b("tbody", null, [
          (A(!0), E(oe, null, se(s.value, (y, m) => {
            var _, v, w, p;
            return A(), E("tr", {
              key: y.key
            }, [
              y.isGroupStart ? (A(), E("td", {
                key: 0,
                rowspan: y.groupSize,
                class: G(["skill-td td-group-name", {
                  "td-group-name-visible": !y.isSpecialGroup,
                  "td-color-1": y.isSpecialGroup && m % 2,
                  "td-color-2": y.isSpecialGroup && (m + 1) % 2
                }])
              }, F(y.isSpecialGroup ? "" : y.groupName), 11, km)) : L("", !0),
              b("td", {
                class: G(["skill-td td-skill-name", {
                  "td-skill-name-special": y.isSpecialGroup,
                  "td-color-1": m % 2,
                  "td-color-2": (m + 1) % 2
                }])
              }, [
                $(pm, {
                  skillName: y.skillName,
                  displaySkillName: y.displaySkillName,
                  comments: y.comments,
                  childSkillData: y.childSkillData
                }, null, 8, ["skillName", "displaySkillName", "comments", "childSkillData"])
              ], 2),
              b("td", {
                class: G(["skill-td", {
                  "col-base": !((_ = P(o)) != null && _.printing),
                  "td-color-0": m % 2,
                  "td-color-1": (m + 1) % 2
                }])
              }, [
                !y.init && y.initPlaceholder ? (A(), E("div", Am, [
                  b("span", $m, F(y.initPlaceholder), 1)
                ])) : y.groupName !== "其它" ? (A(), E("span", Pm, F(y.init), 1)) : (A(), W(an, {
                  key: 2,
                  value: `${y.points.b ?? ""}`,
                  onInput: (g) => u(y.skillKey, "b", g)
                }, null, 8, ["value", "onInput"]))
              ], 2),
              b("td", {
                class: G(["skill-td", {
                  "td-color-1": m % 2,
                  "td-color-2": (m + 1) % 2
                }])
              }, [
                $(an, {
                  value: `${y.points.p ?? ""}`,
                  onInput: (g) => u(y.skillKey, "p", g)
                }, null, 8, ["value", "onInput"])
              ], 2),
              b("td", {
                class: G(["skill-td", {
                  "td-color-0": m % 2,
                  "td-color-1": (m + 1) % 2
                }])
              }, [
                $(an, {
                  value: `${y.points.i ?? ""}`,
                  onInput: (g) => u(y.skillKey, "i", g)
                }, null, 8, ["value", "onInput"])
              ], 2),
              b("td", {
                class: G(["skill-td", {
                  "td-color-1": m % 2,
                  "td-color-2": (m + 1) % 2
                }])
              }, [
                $(an, {
                  checkable: !0,
                  checked: y.points.c,
                  value: `${y.points.g ?? ""}`,
                  onInput: (g) => u(y.skillKey, "g", g),
                  onCheck: (g) => u(y.skillKey, "c", g)
                }, null, 8, ["checked", "value", "onInput", "onCheck"])
              ], 2),
              b("td", {
                class: G(["skill-td", {
                  "td-color-0": m % 2,
                  "td-color-1": (m + 1) % 2
                }])
              }, [
                !y.showTotal && !((v = P(o)) != null && v.printing) ? (A(), E("span", xm, F(y.points.b ?? y.init ?? y.initPlaceholder), 1)) : L("", !0),
                (w = P(o)) != null && w.showTotalSeparation && !((p = P(o)) != null && p.printing) ? (A(), E("span", Im, [
                  (A(!0), E(oe, null, se(y.totalSeparation, (g, k) => (A(), E("span", {
                    key: k,
                    class: "total-sep"
                  }, F(g), 1))), 128))
                ])) : y.showTotal ? (A(), E("span", Em, F(y.total), 1)) : L("", !0)
              ], 2)
            ]);
          }), 128))
        ])
      ]);
    };
  }
}), Go = /* @__PURE__ */ j(Cm, [["__scopeId", "data-v-0b1ca5a1"]]), Lr = (t) => (ze("data-v-c8ec4d4a"), t = t(), Le(), t), Dm = { class: "header skill-section-header" }, Rm = { class: "header-left points-container" }, Om = { class: "point-container" }, Mm = {
  key: 0,
  class: "point-rest"
}, Fm = { class: "point-container" }, Tm = {
  key: 0,
  class: "point-rest"
}, Nm = /* @__PURE__ */ Lr(() => /* @__PURE__ */ b("h1", { class: "heading" }, [
  /* @__PURE__ */ b("span", { class: "title" }, "技能表")
], -1)), Vm = { class: "header-right points-container" }, Um = /* @__PURE__ */ Lr(() => /* @__PURE__ */ b("div", null, "初始技能上限", -1)), Bm = { class: "point-container" }, jm = { class: "point-container" }, zm = { class: "skill-section-body" }, Lm = /* @__PURE__ */ Lr(() => /* @__PURE__ */ b("div", { class: "divider" }, null, -1)), Wm = 6, Gm = /* @__PURE__ */ M({
  __name: "SkillSection",
  setup(t) {
    const e = ue(), n = za(), r = Re(), o = Cn(), a = Xe(), l = U(() => Pa(a == null ? void 0 : a.value)), s = U(
      () => Uu(l.value, Wm)
    );
    function i() {
      const { pro: y, interest: m } = (e == null ? void 0 : e.value.pointValues) || {};
      return {
        pro: {
          point: Number(y || 0),
          str: y || ""
        },
        interest: {
          point: Number(m || 0),
          str: m || ""
        }
      };
    }
    const u = Ve(i()), c = U(() => {
      let y = 0, m = 0;
      return e == null || e.value.skillPoints.forEach(([_, v]) => {
        y += v.p || 0, m += v.i || 0;
      }), {
        proPoint: u.pro.point - y,
        interestPoint: u.interest.point - m
      };
    });
    function d(y, m = "") {
      const _ = u[y];
      if (_.str = m, _.str) {
        const v = Number(_.str);
        _.point = Number.isNaN(v) ? 0 : v;
      } else
        _.point = 0;
    }
    function f(y, m) {
      e && e.value.pointValues[y] !== m && (e.value.pointValues[y] = m);
    }
    function h(y, m) {
      const _ = Number(m);
      o && o.skillLimits[y] !== _ && (o.skillLimits[y] = _);
    }
    return _e(
      () => ({
        job: e == null ? void 0 : e.value.job,
        attributes: e == null ? void 0 : e.value.attributes
      }),
      ({ job: y, attributes: m }) => {
        const { point: _ } = Or(y, m, a == null ? void 0 : a.value), v = e == null ? void 0 : e.value.pointValues.pro;
        _ && d("pro", v ?? `${_ > 0 ? _ : ""}`);
        const w = m == null ? void 0 : m.edu, p = m == null ? void 0 : m.int, g = a != null && a.value.revisedInterest ? w && p ? `${w + p}` : "" : p ? `${p * 2}` : "", k = e == null ? void 0 : e.value.pointValues.interest;
        g && d("interest", k ?? g);
      },
      { deep: !0 }
    ), _e(
      () => ({
        pointValues: e == null ? void 0 : e.value.pointValues,
        pro: e == null ? void 0 : e.value.pointValues.pro,
        interest: e == null ? void 0 : e.value.pointValues.interest
      }),
      ({ pointValues: y, pro: m, interest: _ }, { pointValues: v, pro: w, interest: p }) => {
        if (y !== v) {
          d("pro", m ?? ""), d("interest", _ ?? "");
          return;
        }
        m !== w && d("pro", m), _ !== p && d("interest", _);
      },
      { deep: !0 }
    ), (y, m) => {
      var _;
      return A(), W(Ae, {
        class: G(["skill-section", {
          "printing-image": (_ = P(r)) == null ? void 0 : _.printing
        }])
      }, {
        header: R(() => {
          var v, w, p;
          return [
            b("div", Dm, [
              b("div", Rm, [
                b("div", Om, [
                  $(be, {
                    class: "point-writer",
                    label: "职业点数",
                    placeholder: (v = P(e)) != null && v.job ? "问KP" : "",
                    char: 3,
                    modelValue: u.pro.str,
                    "onUpdate:modelValue": m[0] || (m[0] = (g) => f("pro", g))
                  }, null, 8, ["placeholder", "modelValue"]),
                  u.pro.point > 0 ? (A(), E("div", Mm, " 剩余: " + F(c.value.proPoint), 1)) : L("", !0)
                ]),
                b("div", Fm, [
                  $(be, {
                    class: "point-writer",
                    label: "兴趣点数",
                    char: 3,
                    modelValue: u.interest.str,
                    "onUpdate:modelValue": m[1] || (m[1] = (g) => f("interest", g))
                  }, null, 8, ["modelValue"]),
                  u.interest.point > 0 ? (A(), E("div", Tm, " 剩余: " + F(c.value.interestPoint), 1)) : L("", !0)
                ])
              ]),
              Nm,
              b("div", Vm, [
                Um,
                b("div", Bm, [
                  $(be, {
                    class: "point-writer",
                    label: "本职",
                    char: 2,
                    modelValue: `${((w = P(o)) == null ? void 0 : w.skillLimits.pro) || ""}`,
                    "onUpdate:modelValue": m[2] || (m[2] = (g) => h("pro", g))
                  }, null, 8, ["modelValue"])
                ]),
                b("div", jm, [
                  $(be, {
                    class: "point-writer",
                    label: "兴趣",
                    char: 2,
                    modelValue: `${((p = P(o)) == null ? void 0 : p.skillLimits.interest) || ""}`,
                    "onUpdate:modelValue": m[3] || (m[3] = (g) => h("interest", g))
                  }, null, 8, ["modelValue"])
                ])
              ])
            ])
          ];
        }),
        default: R(() => [
          b("div", zm, [
            $(Go, {
              data: l.value.slice(0, s.value),
              suggestion: P(n)
            }, null, 8, ["data", "suggestion"]),
            Lm,
            $(Go, {
              data: l.value.slice(s.value)
            }, null, 8, ["data"])
          ])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), Hm = /* @__PURE__ */ j(Gm, [["__scopeId", "data-v-c8ec4d4a"]]), qm = ["value", "disabled"], Jm = ["value"], Km = /* @__PURE__ */ M({
  __name: "BaseTdSelect",
  props: {
    value: { default: "" },
    options: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["change"],
  setup(t) {
    return (e, n) => (A(), E("select", {
      class: "base-td-select",
      value: e.value,
      disabled: e.disabled,
      onChange: n[0] || (n[0] = (r) => e.$emit("change", r.target.value))
    }, [
      (A(!0), E(oe, null, se(e.options, (r) => (A(), E("option", {
        key: r.value,
        value: r.value
      }, F(r.label), 9, Jm))), 128))
    ], 40, qm));
  }
}), Qm = /* @__PURE__ */ j(Km, [["__scopeId", "data-v-2c9c2276"]]);
function Xm(t = !1) {
  const e = X(t);
  return {
    value: e,
    setTrue() {
      e.value = !0;
    },
    setFalse() {
      e.value = !1;
    },
    setToggle() {
      e.value = !e.value;
    }
  };
}
const Zm = { class: "weapon-section-row" }, Ym = { class: "show-in-print" }, ey = {
  key: 0,
  class: "wp-point-placeholder"
}, ty = /* @__PURE__ */ M({
  __name: "WeaponSectionRow",
  props: {
    index: {},
    weapon: {},
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["input", "focus"],
  setup(t) {
    const e = t, n = ue(), r = Xe();
    function o(v, w) {
      const p = v % 2 ? 0 : 1, g = w % 2 ? 0 : 1;
      return `td-color-${p + g}`;
    }
    function a(v) {
      var S;
      const [w, p] = v.split(")")[0].split("("), g = ((S = i.value.find((x) => x.name === v)) == null ? void 0 : S.init) || 0;
      let k = 0;
      return n == null || n.value.skillPoints.some((x) => {
        const I = (
          // 投掷
          !p && w === x[0] || // 格斗 or 射击
          p && typeof x[0] != "string" && w === x[0][0] && p === x[0][1]
        );
        if (I) {
          const { p: B = 0, i: D = 0, g: T = 0 } = x[1];
          k = B + D + T;
        }
        return I;
      }), {
        initPoint: g,
        result: k ? `${g + k}` : ""
      };
    }
    const l = U(() => e.weapon || dr()), s = U(() => a(l.value.skill)), i = U(() => Pa(r == null ? void 0 : r.value).find(({ groupName: p }) => p === "战斗").groupSkills.filter(({ name: p }) => p !== "闪避" && p !== "武术").reduce((p, g) => {
      const { name: k, init: S, group: x } = g, I = x ? x.skills.filter(({ name: B }) => B !== "武术").map((B) => ({
        name: `${k}(${B.name})`,
        init: B.init || S
      })) : [{ name: k, init: S }];
      return [...p, ...I];
    }, [])), u = U(() => [
      { value: "", label: "" },
      ...i.value.map(({ name: v }) => ({
        value: v,
        label: v
      }))
    ]), {
      value: c,
      setTrue: d,
      setFalse: f
    } = Xm(), h = U(() => va.map(([v, w]) => ({
      key: v,
      label: w,
      children: ga[v].map((p) => ({
        key: p,
        label: p
      }))
    })));
    function y(v) {
      if (!n) return;
      n.value.weapons[e.index] || (n.value.weapons[e.index] = dr());
      const w = n.value.weapons[e.index];
      v.hasOwnProperty("skill") && v.skill === "" && (v = {
        ...v,
        name: "",
        dam: "",
        range: "",
        tho: 0,
        round: "",
        num: "",
        err: ""
      }), Object.assign(w, v);
    }
    function m(v) {
      const w = Rr.find((S) => S.name === v);
      if (!w) return;
      const { price: p, time: g, ...k } = w;
      y({
        ...k
      }), f();
    }
    function _(v) {
      y({ name: v }), v && f();
    }
    return (v, w) => (A(), E("div", Zm, [
      b("div", {
        class: G(["wp-td", {
          [o(v.index, 0)]: !0
        }])
      }, [
        Ke((A(), E("div", {
          class: "weapon-td-name",
          onClick: w[3] || (w[3] = () => !e.readonly && !l.value.name && P(d)())
        }, [
          $(nt, {
            value: l.value.name,
            readonly: e.readonly,
            onInput: _,
            onFocus: w[0] || (w[0] = () => !e.readonly && !l.value.name && P(d)())
          }, null, 8, ["value", "readonly"]),
          $(gr, { name: "slide-down" }, {
            default: R(() => [
              Ke(b("div", {
                class: "weapon-selector",
                onClick: w[2] || (w[2] = zt(() => {
                }, ["stop"]))
              }, [
                $(Qa, {
                  tree: h.value,
                  onSelect: w[1] || (w[1] = (p) => m(p.label))
                }, null, 8, ["tree"])
              ], 512), [
                [Jo, P(c)]
              ])
            ]),
            _: 1
          })
        ])), [
          [P(jr), P(f)]
        ])
      ], 2),
      b("div", {
        class: G(["wp-td", {
          "has-skill": !!l.value.skill,
          [o(v.index, 1)]: !0
        }])
      }, [
        b("span", Ym, F(l.value.skill), 1),
        $(Qm, {
          class: "hide-in-print",
          value: l.value.skill,
          options: u.value,
          disabled: e.readonly,
          onChange: w[4] || (w[4] = (p) => y({ skill: p }))
        }, null, 8, ["value", "options", "disabled"])
      ], 2),
      b("div", {
        class: G(["wp-td", {
          "col-mobile-hide": !0,
          [o(v.index, 2)]: !0
        }])
      }, [
        Me(F(s.value.result) + " ", 1),
        !s.value.result && s.value.initPoint ? (A(), E("span", ey, F(s.value.initPoint), 1)) : L("", !0)
      ], 2),
      b("div", {
        class: G(["wp-td", {
          [o(v.index, 3)]: !0
        }])
      }, [
        $(nt, {
          value: l.value.dam,
          readonly: e.readonly,
          onInput: w[5] || (w[5] = (p) => y({ dam: p }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      b("div", {
        class: G(["wp-td", {
          "col-mobile-hide": !0,
          [o(v.index, 4)]: !0
        }])
      }, [
        $(nt, {
          value: l.value.range,
          readonly: e.readonly,
          onInput: w[6] || (w[6] = (p) => y({ range: p }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      b("div", {
        class: G(["wp-td", {
          "col-mobile-hide": !0,
          [o(v.index, 5)]: !0
        }])
      }, [
        $(zr, {
          xOnFalse: !!l.value.name,
          checked: !!l.value.tho,
          disabled: e.readonly,
          onCheck: w[7] || (w[7] = (p) => y({ tho: +p }))
        }, null, 8, ["xOnFalse", "checked", "disabled"])
      ], 2),
      b("div", {
        class: G(["wp-td", {
          "col-mobile-hide": !0,
          [o(v.index, 6)]: !0
        }])
      }, [
        $(nt, {
          value: l.value.round,
          readonly: e.readonly,
          onInput: w[8] || (w[8] = (p) => y({ round: p }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      b("div", {
        class: G(["wp-td", {
          "col-mobile-hide": !0,
          [o(v.index, 7)]: !0
        }])
      }, [
        $(nt, {
          value: l.value.num,
          readonly: e.readonly,
          onInput: w[9] || (w[9] = (p) => y({ num: p }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      b("div", {
        class: G(["wp-td", {
          "col-mobile-hide": !0,
          [o(v.index, 8)]: !0
        }])
      }, [
        $(nt, {
          value: l.value.err,
          readonly: e.readonly,
          onInput: w[10] || (w[10] = (p) => y({ err: p }))
        }, null, 8, ["value", "readonly"])
      ], 2)
    ]));
  }
}), ny = /* @__PURE__ */ j(ty, [["__scopeId", "data-v-a29d0001"]]), Ze = (t) => (ze("data-v-52ff68fb"), t = t(), Le(), t), ry = { class: "weapon-section-body" }, oy = { class: "weapon-section-row" }, ay = { class: "wp-th th-deep" }, iy = /* @__PURE__ */ Ze(() => /* @__PURE__ */ b("div", { class: "wp-th th-light" }, "技能", -1)), ly = /* @__PURE__ */ Ze(() => /* @__PURE__ */ b("div", { class: "wp-th th-deep col-mobile-hide" }, "%", -1)), sy = /* @__PURE__ */ Ze(() => /* @__PURE__ */ b("div", { class: "wp-th th-light" }, "伤害", -1)), uy = /* @__PURE__ */ Ze(() => /* @__PURE__ */ b("div", { class: "wp-th th-deep col-mobile-hide" }, "射程", -1)), cy = /* @__PURE__ */ Ze(() => /* @__PURE__ */ b("div", { class: "wp-th th-light col-mobile-hide" }, "贯穿", -1)), py = /* @__PURE__ */ Ze(() => /* @__PURE__ */ b("div", { class: "wp-th th-deep col-mobile-hide" }, "次数", -1)), dy = /* @__PURE__ */ Ze(() => /* @__PURE__ */ b("div", { class: "wp-th th-light col-mobile-hide" }, "装弹量", -1)), fy = /* @__PURE__ */ Ze(() => /* @__PURE__ */ b("div", { class: "wp-th th-deep col-mobile-hide" }, "故障", -1)), my = /* @__PURE__ */ M({
  __name: "WeaponSection",
  setup(t) {
    const e = ue(), n = dt(), r = U(() => Array.from({ length: 4 }).map((o, a) => (e == null ? void 0 : e.value.weapons[a]) || void 0));
    return (o, a) => (A(), W(Ae, { title: "武器" }, {
      default: R(() => [
        b("div", ry, [
          b("div", oy, [
            b("div", ay, F(P(n) ? "名称" : "武器名称"), 1),
            iy,
            ly,
            sy,
            uy,
            cy,
            py,
            dy,
            fy
          ]),
          (A(!0), E(oe, null, se(r.value, (l, s) => (A(), W(ny, {
            class: "weapon-section-row",
            key: s,
            index: s,
            weapon: l,
            readonly: s === 0
          }, null, 8, ["index", "weapon", "readonly"]))), 128))
        ])
      ]),
      _: 1
    }));
  }
}), yy = /* @__PURE__ */ j(my, [["__scopeId", "data-v-52ff68fb"]]), hy = {
  key: 0,
  class: "battle-section-body"
}, gy = /* @__PURE__ */ M({
  __name: "BattleSection",
  setup(t) {
    const e = ue(), n = Xe();
    return _e(
      [() => e == null ? void 0 : e.value.attributes, () => n == null ? void 0 : n.value],
      () => {
        if (!e) return;
        const { str: r, siz: o, dex: a } = e.value.attributes, l = Su(r, o);
        l && (e.value.battleAttributes.db = l.db, e.value.battleAttributes.size = l.size);
        const s = _a(r, o, a, n == null ? void 0 : n.value);
        s && (e.value.battleAttributes.mov = s);
      },
      { deep: !0 }
    ), (r, o) => (A(), W(Ae, { title: "战斗" }, {
      default: R(() => [
        P(e) ? (A(), E("div", hy, [
          $(be, {
            label: "DB",
            modelValue: P(e).battleAttributes.db,
            "onUpdate:modelValue": o[0] || (o[0] = (a) => P(e).battleAttributes.db = a),
            char: 4
          }, null, 8, ["modelValue"]),
          $(be, {
            label: "体格",
            modelValue: P(e).battleAttributes.size,
            "onUpdate:modelValue": o[1] || (o[1] = (a) => P(e).battleAttributes.size = a),
            char: 4
          }, null, 8, ["modelValue"]),
          $(be, {
            label: "移动力",
            modelValue: P(e).battleAttributes.mov,
            "onUpdate:modelValue": o[2] || (o[2] = (a) => P(e).battleAttributes.mov = a),
            char: 4
          }, null, 8, ["modelValue"])
        ])) : L("", !0)
      ]),
      _: 1
    }));
  }
}), vy = /* @__PURE__ */ j(gy, [["__scopeId", "data-v-1a667664"]]), wy = { class: "writable-unit" }, by = { class: "label" }, _y = ["value", "readonly"], Sy = /* @__PURE__ */ M({
  __name: "WritableUnit",
  props: {
    label: {},
    modelValue: { default: "" },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (e, n) => (A(), E("div", wy, [
      b("div", by, F(e.label), 1),
      b("input", {
        type: "text",
        class: "input",
        value: e.modelValue,
        readonly: e.readonly,
        onInput: n[0] || (n[0] = (r) => e.$emit("update:modelValue", r.target.value))
      }, null, 40, _y)
    ]));
  }
}), gt = /* @__PURE__ */ j(Sy, [["__scopeId", "data-v-75e07f49"]]), ky = {}, Ay = (t) => (ze("data-v-be8afd85"), t = t(), Le(), t), $y = { class: "writable-divider" }, Py = /* @__PURE__ */ Ay(() => /* @__PURE__ */ b("div", { class: "writable-divider-line" }, null, -1)), xy = [
  Py
];
function Iy(t, e) {
  return A(), E("div", $y, xy);
}
const tr = /* @__PURE__ */ j(ky, [["render", Iy], ["__scopeId", "data-v-be8afd85"]]), Ey = { class: "section-row" }, Cy = { class: "derive-column sanity-column" }, Dy = { class: "units-section" }, Ry = { class: "derive-column hp-mp-column" }, Oy = { class: "units-section" }, My = { class: "units-section" }, Fy = { class: "section-row" }, Ty = /* @__PURE__ */ M({
  __name: "PaperFront",
  props: {
    setRef: {}
  },
  setup(t) {
    const e = ue(), n = dt();
    function r(a, l, s) {
      !e || !e.value.deriveAttributes || (e.value.deriveAttributes[a][l] = s || void 0);
    }
    const o = U(() => {
      var c;
      if (!e || !e.value.attributes.pow) return "";
      const a = (c = e.value.skillPoints.find(([d]) => d === "克苏鲁神话")) == null ? void 0 : c[1], { p: l = 0, i: s = 0, g: i = 0 } = a || {};
      return `${99 - (a ? l + s + i : 0)}`;
    });
    return (a, l) => (A(), W(Ka, { setRef: a.setRef }, {
      default: R(() => [
        b("div", Ey, [
          $(xf, { class: "investigator-section" }),
          $(Vf, { class: "attributes-section" }),
          b("div", Cy, [
            $(Ae, { title: "理智值" }, {
              default: R(() => {
                var s, i, u;
                return [
                  b("div", Dy, [
                    $(gt, {
                      label: P(n) ? "当前" : "当前理智",
                      modelValue: `${((u = (i = (s = P(e)) == null ? void 0 : s.deriveAttributes) == null ? void 0 : i.sanity) == null ? void 0 : u.now) ?? ""}`,
                      "onUpdate:modelValue": l[0] || (l[0] = (c) => r("sanity", "now", c))
                    }, null, 8, ["label", "modelValue"]),
                    $(tr),
                    $(gt, {
                      label: P(n) ? "最大" : "最大理智",
                      modelValue: o.value,
                      readonly: ""
                    }, null, 8, ["label", "modelValue"])
                  ])
                ];
              }),
              _: 1
            }),
            $(qf)
          ]),
          b("div", Ry, [
            $(Ae, { title: "生命值" }, {
              default: R(() => {
                var s, i, u, c, d, f;
                return [
                  b("div", Oy, [
                    $(gt, {
                      label: "当前生命",
                      modelValue: `${((u = (i = (s = P(e)) == null ? void 0 : s.deriveAttributes) == null ? void 0 : i.hp) == null ? void 0 : u.now) ?? ""}`,
                      "onUpdate:modelValue": l[1] || (l[1] = (h) => r("hp", "now", h))
                    }, null, 8, ["modelValue"]),
                    $(tr),
                    $(gt, {
                      label: "最大生命",
                      modelValue: `${((f = (d = (c = P(e)) == null ? void 0 : c.deriveAttributes) == null ? void 0 : d.hp) == null ? void 0 : f.start) ?? ""}`,
                      "onUpdate:modelValue": l[2] || (l[2] = (h) => r("hp", "start", h))
                    }, null, 8, ["modelValue"])
                  ])
                ];
              }),
              _: 1
            }),
            $(Ae, { title: "魔法值" }, {
              default: R(() => {
                var s, i, u, c, d, f;
                return [
                  b("div", My, [
                    $(gt, {
                      label: "当前魔法",
                      modelValue: `${((u = (i = (s = P(e)) == null ? void 0 : s.deriveAttributes) == null ? void 0 : i.mp) == null ? void 0 : u.now) ?? ""}`,
                      "onUpdate:modelValue": l[3] || (l[3] = (h) => r("mp", "now", h))
                    }, null, 8, ["modelValue"]),
                    $(tr),
                    $(gt, {
                      label: "最大魔法",
                      modelValue: `${((f = (d = (c = P(e)) == null ? void 0 : c.deriveAttributes) == null ? void 0 : d.mp) == null ? void 0 : f.start) ?? ""}`,
                      "onUpdate:modelValue": l[4] || (l[4] = (h) => r("mp", "start", h))
                    }, null, 8, ["modelValue"])
                  ])
                ];
              }),
              _: 1
            })
          ]),
          $(Bf)
        ]),
        $(Yf),
        $(Hm),
        b("div", Fy, [
          $(yy, { class: "col-0" }),
          $(vy)
        ])
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), nr = /* @__PURE__ */ j(Ty, [["__scopeId", "data-v-dcc6fc63"]]), Za = (t) => (ze("data-v-c5341c4d"), t = t(), Le(), t), Ny = { class: "label" }, Vy = ["rows", "placeholder", "value", "maxlength", "readonly"], Uy = /* @__PURE__ */ Za(() => /* @__PURE__ */ b("div", { class: "line-row" }, null, -1)), By = /* @__PURE__ */ Za(() => /* @__PURE__ */ b("div", { class: "line" }, null, -1)), jy = /* @__PURE__ */ M({
  __name: "WritableArea",
  props: {
    label: {},
    modelValue: { default: "" },
    size: { default: "base" },
    rows: { default: 3 },
    placeholder: {},
    maxlength: {},
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "oversize"],
  setup(t, { emit: e }) {
    const n = t, r = e, o = Re(), a = U(() => {
      const i = n.label.length, u = n.size === "small" ? i / 0.8 : i;
      return {
        textIndent: u ? `${u + 0.4}em` : void 0
      };
    }), l = X(null);
    function s(i = !1) {
      const u = l.value;
      u && ke(() => {
        u.scrollHeight > u.clientHeight && (r("oversize"), i || s(!0));
      });
    }
    return _e(
      () => [n.modelValue, o == null ? void 0 : o.printing],
      () => s()
    ), Ko(() => {
      s();
    }), (i, u) => {
      var c, d;
      return A(), E("div", {
        class: G(["writable-area", {
          "printing-image": (c = P(o)) == null ? void 0 : c.printing
        }])
      }, [
        b("div", Ny, F(i.label), 1),
        b("textarea", {
          class: G(["input", {
            "input-size-small": n.size === "small"
          }]),
          ref_key: "inputEl",
          ref: l,
          style: or(a.value),
          rows: i.rows,
          placeholder: (d = P(o)) != null && d.printing ? "" : i.placeholder,
          value: i.modelValue,
          maxlength: i.maxlength,
          readonly: i.readonly,
          onInput: u[0] || (u[0] = (f) => i.$emit("update:modelValue", f.target.value))
        }, null, 46, Vy),
        b("div", {
          class: G(["lines", {
            "lines-size-small": n.size === "small"
          }])
        }, [
          Uy,
          (A(!0), E(oe, null, se(i.rows, (f) => (A(), E("div", {
            class: "line-row",
            key: f
          }, [
            f === 1 && i.label ? (A(), E("div", {
              key: 0,
              class: "line-row-label",
              style: or({
                width: `${i.label.length}em`
              })
            }, null, 4)) : L("", !0),
            By
          ]))), 128))
        ], 2)
      ], 2);
    };
  }
}), De = /* @__PURE__ */ j(jy, [["__scopeId", "data-v-c5341c4d"]]), zy = { class: "story-section-body" }, ln = 3, sn = 4, Ly = /* @__PURE__ */ M({
  __name: "StorySection",
  setup(t) {
    const e = ue(), n = Re(), r = Xe(), o = U({
      get: () => {
        if (!e) return "";
        const { IPerson: v, IPlace: w } = e.value.stories;
        return [v, w].filter((p) => p && p.trim()).join(`
`);
      },
      set: (v) => {
        e && (e.value.stories.IPerson = v, e.value.stories.IPlace = "");
      }
    }), a = Ve([
      { label: "形象描述", fieldName: "app" },
      { label: "思想与信念", fieldName: "belief" },
      { label: "重要之人", fieldName: "IPerson" },
      { label: "意义非凡之地", fieldName: "IPlace" },
      { label: "宝贵之物", fieldName: "IItem" },
      { label: "伤口与疤痕", fieldName: "scar" },
      { label: "精神症状", fieldName: "mad" },
      { label: "特质", fieldName: "trait" }
    ]), l = Ve([]), s = dt(), i = Ve({ fieldName: "desc", size: "base" }), u = U(() => {
      const v = a.length - l.length, w = v * ~~(i.size === "base" ? ln : sn), p = i.size === "base" ? 0 : ~~(v / 6), g = w + p;
      return s.value ? Math.ceil(g / 2) : g;
    }), c = X(null), d = X(null), f = X(null);
    function h(v) {
      const w = v.size === "small" ? sn : ln;
      return !(r != null && r.value.revisedStory) || v.fieldName !== "trait" ? w : f.value ?? w;
    }
    async function y() {
      await ke();
      const v = c.value, w = d.value;
      if (!(r != null && r.value.revisedStory) || !v || !w) {
        f.value = null;
        return;
      }
      const p = [...v.querySelectorAll(".writable-area")], g = p.find(
        (O) => {
          var Q, re;
          return ((re = (Q = O.querySelector(".label")) == null ? void 0 : Q.textContent) == null ? void 0 : re.trim()) === "特质";
        }
      ), k = g == null ? void 0 : g.querySelector("textarea");
      if (!g || !k) return;
      const S = [...w.querySelectorAll(".writable-area")].reduce(
        (O, Q) => O + Q.getBoundingClientRect().height,
        0
      );
      if (!S) return;
      const x = p.filter((O) => O !== g).reduce((O, Q) => O + Q.getBoundingClientRect().height, 0), I = parseFloat(getComputedStyle(k).lineHeight) || 24, B = a.find((O) => O.fieldName === "trait"), D = (B == null ? void 0 : B.size) === "small" ? sn : ln, T = Math.max(
        D,
        Math.ceil((S - x) / I)
      );
      f.value !== T && (f.value = T);
    }
    _e(
      () => [
        e == null ? void 0 : e.value.stories,
        r == null ? void 0 : r.value.revisedStory,
        n == null ? void 0 : n.printing,
        i.size,
        s.value,
        a.map((v) => `${v.fieldName}:${v.size}`).join("|")
      ],
      () => {
        ke(y);
      },
      { deep: !0 }
    ), Pn(() => {
      ke(y);
    }), Ko(() => {
      ke(y);
    });
    const m = X();
    function _(v) {
      var w;
      (w = m.value) == null || w.close(), n != null && n.printing || (v.size === "small" ? m.value = he.error("文字内容超出可显示的尺寸，如需打印，建议删减内容") : m.value = he.warning("检测到内容较多，已为您调整文字为小尺寸")), v.size = "small";
    }
    return _e(
      () => e == null ? void 0 : e.value.stories,
      () => {
        [...a, ...l, i].forEach((v) => {
          v.fieldName && !(e != null && e.value.stories[v.fieldName]) && (v.size = "base");
        }), ke(y);
      },
      {
        deep: !0
      }
    ), (v, w) => P(e) ? (A(), W(Ae, {
      key: 0,
      title: "背景故事"
    }, {
      default: R(() => [
        b("div", zy, [
          b("div", {
            ref_key: "leftColumnRef",
            ref: c,
            class: "story-section-column col-2"
          }, [
            (A(!0), E(oe, null, se(a, (p) => {
              var g, k;
              return A(), E(oe, {
                key: p.fieldName
              }, [
                (g = P(r)) != null && g.revisedStory && p.fieldName === "IPerson" ? (A(), W(De, {
                  key: 0,
                  label: "重要之人与之地",
                  modelValue: o.value,
                  "onUpdate:modelValue": w[0] || (w[0] = (S) => o.value = S),
                  rows: h(p),
                  size: p.size,
                  onOversize: () => _(p)
                }, null, 8, ["modelValue", "rows", "size", "onOversize"])) : (k = P(r)) != null && k.revisedStory && p.fieldName === "IPlace" ? L("", !0) : (A(), W(De, {
                  key: 1,
                  label: p.label,
                  modelValue: P(e).stories[p.fieldName],
                  "onUpdate:modelValue": (S) => P(e).stories[p.fieldName] = S,
                  rows: h(p),
                  size: p.size,
                  onOversize: () => _(p)
                }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rows", "size", "onOversize"]))
              ], 64);
            }), 128))
          ], 512),
          b("div", {
            ref_key: "rightColumnRef",
            ref: d,
            class: "story-section-column col-3"
          }, [
            (A(!0), E(oe, null, se(l, (p) => (A(), W(De, {
              key: p.fieldName,
              label: p.label,
              modelValue: P(e).stories[p.fieldName],
              "onUpdate:modelValue": (g) => P(e).stories[p.fieldName] = g,
              rows: p.size === "small" ? sn : ln,
              size: p.size
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rows", "size"]))), 128)),
            $(De, {
              label: "个人介绍",
              modelValue: P(e).stories.desc,
              "onUpdate:modelValue": w[1] || (w[1] = (p) => P(e).stories.desc = p),
              rows: u.value,
              size: i.size,
              onOversize: w[2] || (w[2] = () => _(i))
            }, null, 8, ["modelValue", "rows", "size"])
          ], 512)
        ])
      ]),
      _: 1
    })) : L("", !0);
  }
}), Wy = /* @__PURE__ */ j(Ly, [["__scopeId", "data-v-2397cb0a"]]), Gy = { class: "section-body" }, Hy = /* @__PURE__ */ M({
  __name: "AssetsSection",
  setup(t) {
    const e = ue();
    return (n, r) => P(e) ? (A(), W(Ae, {
      key: 0,
      title: "资产"
    }, {
      default: R(() => [
        b("div", Gy, [
          $(De, {
            label: "货币",
            rows: 1,
            maxlength: 30,
            modelValue: P(e).assets.currency,
            "onUpdate:modelValue": r[0] || (r[0] = (o) => P(e).assets.currency = o)
          }, null, 8, ["modelValue"]),
          $(De, {
            label: "资产",
            rows: 6,
            maxlength: 28 * 6,
            modelValue: P(e).assets.assets,
            "onUpdate:modelValue": r[1] || (r[1] = (o) => P(e).assets.assets = o)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : L("", !0);
  }
}), qy = /* @__PURE__ */ j(Hy, [["__scopeId", "data-v-137f854b"]]), Jy = { class: "section-body" }, Ky = /* @__PURE__ */ M({
  __name: "ItemSection",
  setup(t) {
    const e = ue();
    return (n, r) => P(e) ? (A(), W(Ae, {
      key: 0,
      title: "背包"
    }, {
      default: R(() => [
        b("div", Jy, [
          $(De, {
            label: "",
            rows: 7,
            maxlength: 30 * 7,
            modelValue: P(e).assets.items,
            "onUpdate:modelValue": r[0] || (r[0] = (o) => P(e).assets.items = o)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : L("", !0);
  }
}), Qy = /* @__PURE__ */ j(Ky, [["__scopeId", "data-v-c1547d8c"]]), Xy = { class: "section-body" }, Zy = /* @__PURE__ */ M({
  __name: "MythosSection",
  setup(t) {
    const e = ue();
    return (n, r) => P(e) ? (A(), W(Ae, {
      key: 0,
      title: "克苏鲁神话"
    }, {
      default: R(() => [
        b("div", Xy, [
          $(De, {
            label: "魔法物品与典籍",
            rows: 2,
            maxlength: 28 * 2,
            modelValue: P(e).assets.magicItems,
            "onUpdate:modelValue": r[0] || (r[0] = (o) => P(e).assets.magicItems = o)
          }, null, 8, ["modelValue"]),
          $(De, {
            label: "法术",
            rows: 2,
            maxlength: 28 * 2,
            modelValue: P(e).assets.magics,
            "onUpdate:modelValue": r[1] || (r[1] = (o) => P(e).assets.magics = o)
          }, null, 8, ["modelValue"]),
          $(De, {
            label: "第三类接触",
            rows: 3,
            maxlength: 28 * 3,
            modelValue: P(e).assets.touches,
            "onUpdate:modelValue": r[2] || (r[2] = (o) => P(e).assets.touches = o)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : L("", !0);
  }
}), Yy = /* @__PURE__ */ j(Zy, [["__scopeId", "data-v-c816170f"]]), eh = { class: "section-body" }, th = /* @__PURE__ */ M({
  __name: "FriendSection",
  setup(t) {
    const e = ue(), n = dt(), r = U(() => n.value ? 6 : 11);
    return (o, a) => P(e) ? (A(), W(Ae, {
      key: 0,
      title: "人物关系"
    }, {
      default: R(() => [
        b("div", eh, [
          $(De, {
            label: "",
            rows: r.value,
            modelValue: P(e).friends,
            "onUpdate:modelValue": a[0] || (a[0] = (l) => P(e).friends = l)
          }, null, 8, ["rows", "modelValue"])
        ])
      ]),
      _: 1
    })) : L("", !0);
  }
}), nh = /* @__PURE__ */ j(th, [["__scopeId", "data-v-64107825"]]), rh = { class: "section-body" }, oh = /* @__PURE__ */ M({
  __name: "ExperienceSection",
  setup(t) {
    const e = ue();
    return (n, r) => P(e) ? (A(), W(Ae, {
      key: 0,
      title: "经历过的模组"
    }, {
      default: R(() => [
        b("div", rh, [
          $(De, {
            label: "",
            rows: 11,
            modelValue: P(e).experiencedModules,
            "onUpdate:modelValue": r[0] || (r[0] = (o) => P(e).experiencedModules = o)
          }, null, 8, ["modelValue"]),
          $(De, {
            label: "",
            rows: 11,
            modelValue: P(e).experiencedModules2,
            "onUpdate:modelValue": r[1] || (r[1] = (o) => P(e).experiencedModules2 = o)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : L("", !0);
  }
}), ah = /* @__PURE__ */ j(oh, [["__scopeId", "data-v-9f6f9604"]]), ih = { class: "section-row" }, lh = { class: "section-row col-2" }, sh = { class: "section-row" }, uh = /* @__PURE__ */ M({
  __name: "PaperBack",
  props: {
    setRef: {}
  },
  setup(t) {
    return (e, n) => (A(), W(Ka, { setRef: e.setRef }, {
      default: R(() => [
        $(Wy),
        b("div", ih, [
          b("div", lh, [
            $(Qy, { class: "col-0" }),
            $(qy, { class: "col-0" })
          ]),
          $(Yy, { class: "col-1" })
        ]),
        b("div", sh, [
          $(ah, { class: "col-2" }),
          $(nh, { class: "col-1" })
        ])
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), rr = /* @__PURE__ */ j(uh, [["__scopeId", "data-v-3c98c793"]]), ch = { class: "page theme-dark" }, ph = { class: "sticky-footer web-only" }, dh = /* @__PURE__ */ M({
  __name: "AppView",
  setup(t) {
    const e = pu.parse(location.search.slice(1)), n = Tr(), r = Ve({
      paperInFront: e.turn !== "back",
      printing: e.debug === "true",
      importing: !1,
      showTotalSeparation: e.sep === "true" || n.getItem("showTotalSeparation") || !1,
      useNewRules: e.rules === "true" || n.getItem("useNewRules") || !1
    }), o = U(() => Ce(r.useNewRules)), a = Ve(Tt(e, o.value)), l = X(Je()), s = X(Wo);
    _e(
      () => r.showTotalSeparation,
      (p) => {
        n.setItem("showTotalSeparation", p);
      }
    ), _e(
      () => r.useNewRules,
      (p) => {
        n.setItem("useNewRules", p);
      }
    );
    const i = wc(l, a, r);
    Gu(l);
    const u = Ju(l, {
      viewData: a,
      pageData: r,
      rules: o
    }), c = yc(l, a, r);
    c.init(), c.startAutoSave(), et("pc", l), et("viewData", a), et("pageData", r), et("rules", o), et("ruleSwitch", i), et("suggestion", u), et("cardManager", c);
    const d = Ve({}), f = (p) => {
      p.preventDefault();
    }, h = (p) => {
      if (p.preventDefault(), !p.dataTransfer) {
        console.error("数据传输对象为空");
        return;
      }
      const g = p.dataTransfer.files;
      if (g.length > 0) {
        const k = g[0];
        if (k.type === "text/plain") {
          const S = new FileReader();
          S.onload = (x) => {
            const I = x.target.result;
            y(I);
          }, S.readAsText(k);
        } else
          console.error("不支持的文件类型");
      }
    }, y = (p) => {
      he.success("导入卡数据中"), s.value && (s.value.inData = p, s.value.applyInData(), s.value.inData = "");
    }, m = U(() => yr()), _ = dt();
    async function v() {
      try {
        const p = await navigator.clipboard.readText();
        y(p);
      } catch {
        he.error("无法读取剪贴板");
      }
    }
    function w() {
      var p;
      (p = s.value) == null || p.copyOutData();
    }
    return (p, g) => (A(), E("main", ch, [
      b("div", {
        class: G(["paper-container theme-light", { "is-mobile": !r.printing }]),
        onDrop: h,
        onDragover: zt(f, ["prevent"])
      }, [
        b("div", {
          class: G(["papers-animation-container papers-editing web-only", { "papers-mobile-stack": P(_) }])
        }, [
          P(_) ? (A(), E(oe, { key: 0 }, [
            (A(), W(Rn, null, [
              $(nr)
            ], 1024)),
            (A(), W(Rn, null, [
              $(rr)
            ], 1024))
          ], 64)) : (A(), W(gr, {
            key: 1,
            name: "swipe-paper"
          }, {
            default: R(() => [
              (A(), W(Rn, null, [
                r.paperInFront ? (A(), W(nr, { key: 0 })) : (A(), W(rr, { key: 1 }))
              ], 1024))
            ]),
            _: 1
          }))
        ], 2),
        b("div", {
          class: G(["papers-animation-container papers-printing", {
            "papers-printing-active": r.printing
          }])
        }, [
          $(nr, {
            setRef: (k) => {
              d.front = k;
            }
          }, null, 8, ["setRef"]),
          $(rr, {
            setRef: (k) => {
              d.back = k;
            }
          }, null, 8, ["setRef"])
        ], 2)
      ], 34),
      b("div", ph, [
        $(Wo, {
          ref_key: "controlSectionRef",
          ref: s,
          paperEls: d,
          isFull: m.value,
          onSwitchPaper: g[0] || (g[0] = () => r.paperInFront = !r.paperInFront)
        }, null, 8, ["paperEls", "isFull"])
      ]),
      m.value ? (A(), E("button", {
        key: 0,
        class: "fab-clipboard fab-copy-export web-only",
        title: "一键复制导出数据",
        onClick: w
      }, " 出 ")) : L("", !0),
      m.value ? (A(), E("button", {
        key: 1,
        class: "fab-clipboard web-only",
        title: "读取剪贴板",
        onClick: v
      }, " 入 ")) : L("", !0)
    ]));
  }
}), yh = /* @__PURE__ */ j(dh, [["__scopeId", "data-v-4b00ff7e"]]);
export {
  yh as default
};
