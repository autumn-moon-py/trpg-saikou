import { watch as be, computed as q, unref as A, onMounted as po, nextTick as Et, ref as X, readonly as fo, getCurrentInstance as mo, getCurrentScope as yo, onScopeDispose as ho, shallowRef as vo, defineComponent as R, openBlock as w, createElementBlock as P, createElementVNode as m, createBlock as J, resolveDynamicComponent as ha, normalizeClass as W, withCtx as F, renderSlot as Pt, resolveComponent as pe, createVNode as S, createTextVNode as Ze, toDisplayString as O, createCommentVNode as G, inject as Xe, Fragment as ee, renderList as re, withDirectives as Ve, pushScopeId as De, popScopeId as Ce, reactive as xe, withKeys as _r, withModifiers as St, vModelText as va, normalizeStyle as Tn, Transition as Qn, vShow as ga, onActivated as go, provide as wt, KeepAlive as bo } from "vue";
import { ClickOutside as wo, ElMessage as Se, ElMessageBox as _o } from "element-plus";
var So = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function ko(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var Xn = Error, Yn = EvalError, er = RangeError, tr = ReferenceError, ln = SyntaxError, Ye = TypeError, nr = URIError, Ao = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, n = Symbol("test"), r = Object(n);
  if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
    return !1;
  var a = 42;
  e[n] = a;
  for (n in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var o = Object.getOwnPropertySymbols(e);
  if (o.length !== 1 || o[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var i = Object.getOwnPropertyDescriptor(e, n);
    if (i.value !== a || i.enumerable !== !0)
      return !1;
  }
  return !0;
}, Sr = typeof Symbol < "u" && Symbol, $o = Ao, sn = function() {
  return typeof Sr != "function" || typeof Symbol != "function" || typeof Sr("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : $o();
}, kr = {
  foo: {}
}, Po = Object, un = function() {
  return { __proto__: kr }.foo === kr.foo && !({ __proto__: null } instanceof Po);
}, Io = "Function.prototype.bind called on incompatible ", xo = Object.prototype.toString, Eo = Math.max, Do = "[object Function]", Ar = function(e, n) {
  for (var r = [], a = 0; a < e.length; a += 1)
    r[a] = e[a];
  for (var o = 0; o < n.length; o += 1)
    r[o + e.length] = n[o];
  return r;
}, Co = function(e, n) {
  for (var r = [], a = n, o = 0; a < e.length; a += 1, o += 1)
    r[o] = e[a];
  return r;
}, Ro = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, Oo = function(e) {
  var n = this;
  if (typeof n != "function" || xo.apply(n) !== Do)
    throw new TypeError(Io + n);
  for (var r = Co(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var d = n.apply(
        this,
        Ar(r, arguments)
      );
      return Object(d) === d ? d : this;
    }
    return n.apply(
      e,
      Ar(r, arguments)
    );
  }, i = Eo(0, n.length - r.length), s = [], l = 0; l < i; l++)
    s[l] = "$" + l;
  if (a = Function("binder", "return function (" + Ro(s, ",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, Fo = Oo, Dt = Function.prototype.bind || Fo, Mo = Function.prototype.call, To = Object.prototype.hasOwnProperty, Vo = Dt, rr = Vo.call(Mo, To), N, Uo = Xn, Bo = Yn, No = er, jo = tr, ft = ln, ut = Ye, zo = nr, ba = Function, fn = function(t) {
  try {
    return ba('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Ge = Object.getOwnPropertyDescriptor;
if (Ge)
  try {
    Ge({}, "");
  } catch {
    Ge = null;
  }
var mn = function() {
  throw new ut();
}, Lo = Ge ? function() {
  try {
    return arguments.callee, mn;
  } catch {
    try {
      return Ge(arguments, "callee").get;
    } catch {
      return mn;
    }
  }
}() : mn, tt = sn(), Wo = un(), le = Object.getPrototypeOf || (Wo ? function(t) {
  return t.__proto__;
} : null), it = {}, Go = typeof Uint8Array > "u" || !le ? N : le(Uint8Array), He = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? N : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? N : ArrayBuffer,
  "%ArrayIteratorPrototype%": tt && le ? le([][Symbol.iterator]()) : N,
  "%AsyncFromSyncIteratorPrototype%": N,
  "%AsyncFunction%": it,
  "%AsyncGenerator%": it,
  "%AsyncGeneratorFunction%": it,
  "%AsyncIteratorPrototype%": it,
  "%Atomics%": typeof Atomics > "u" ? N : Atomics,
  "%BigInt%": typeof BigInt > "u" ? N : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? N : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? N : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? N : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Uo,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Bo,
  "%Float32Array%": typeof Float32Array > "u" ? N : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? N : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? N : FinalizationRegistry,
  "%Function%": ba,
  "%GeneratorFunction%": it,
  "%Int8Array%": typeof Int8Array > "u" ? N : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? N : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? N : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": tt && le ? le(le([][Symbol.iterator]())) : N,
  "%JSON%": typeof JSON == "object" ? JSON : N,
  "%Map%": typeof Map > "u" ? N : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !tt || !le ? N : le((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? N : Promise,
  "%Proxy%": typeof Proxy > "u" ? N : Proxy,
  "%RangeError%": No,
  "%ReferenceError%": jo,
  "%Reflect%": typeof Reflect > "u" ? N : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? N : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !tt || !le ? N : le((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? N : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": tt && le ? le(""[Symbol.iterator]()) : N,
  "%Symbol%": tt ? Symbol : N,
  "%SyntaxError%": ft,
  "%ThrowTypeError%": Lo,
  "%TypedArray%": Go,
  "%TypeError%": ut,
  "%Uint8Array%": typeof Uint8Array > "u" ? N : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? N : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? N : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? N : Uint32Array,
  "%URIError%": zo,
  "%WeakMap%": typeof WeakMap > "u" ? N : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? N : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? N : WeakSet
};
if (le)
  try {
    null.error;
  } catch (t) {
    var Ho = le(le(t));
    He["%Error.prototype%"] = Ho;
  }
var qo = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = fn("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = fn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = fn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = t("%AsyncGenerator%");
    a && le && (n = le(a.prototype));
  }
  return He[e] = n, n;
}, $r = {
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
}, Ct = Dt, Kt = rr, Jo = Ct.call(Function.call, Array.prototype.concat), Ko = Ct.call(Function.apply, Array.prototype.splice), Pr = Ct.call(Function.call, String.prototype.replace), Qt = Ct.call(Function.call, String.prototype.slice), Qo = Ct.call(Function.call, RegExp.prototype.exec), Zo = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Xo = /\\(\\)?/g, Yo = function(e) {
  var n = Qt(e, 0, 1), r = Qt(e, -1);
  if (n === "%" && r !== "%")
    throw new ft("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new ft("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Pr(e, Zo, function(o, i, s, l) {
    a[a.length] = s ? Pr(l, Xo, "$1") : i || o;
  }), a;
}, ei = function(e, n) {
  var r = e, a;
  if (Kt($r, r) && (a = $r[r], r = "%" + a[0] + "%"), Kt(He, r)) {
    var o = He[r];
    if (o === it && (o = qo(r)), typeof o > "u" && !n)
      throw new ut("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new ft("intrinsic " + e + " does not exist!");
}, ar = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new ut("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new ut('"allowMissing" argument must be a boolean');
  if (Qo(/^%?[^%]*%?$/, e) === null)
    throw new ft("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = Yo(e), a = r.length > 0 ? r[0] : "", o = ei("%" + a + "%", n), i = o.name, s = o.value, l = !1, u = o.alias;
  u && (a = u[0], Ko(r, Jo([0, 1], u)));
  for (var d = 1, p = !0; d < r.length; d += 1) {
    var c = r[d], f = Qt(c, 0, 1), h = Qt(c, -1);
    if ((f === '"' || f === "'" || f === "`" || h === '"' || h === "'" || h === "`") && f !== h)
      throw new ft("property names with quotes must have matching quotes");
    if ((c === "constructor" || !p) && (l = !0), a += "." + c, i = "%" + a + "%", Kt(He, i))
      s = He[i];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new ut("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Ge && d + 1 >= r.length) {
        var y = Ge(s, c);
        p = !!y, p && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        p = Kt(s, c), s = s[c];
      p && !l && (He[i] = s);
    }
  }
  return s;
}, wa = { exports: {} }, j, ti = Xn, ni = Yn, ri = er, ai = tr, mt = ln, ct = Ye, oi = nr, _a = Function, yn = function(t) {
  try {
    return _a('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, qe = Object.getOwnPropertyDescriptor;
if (qe)
  try {
    qe({}, "");
  } catch {
    qe = null;
  }
var hn = function() {
  throw new ct();
}, ii = qe ? function() {
  try {
    return arguments.callee, hn;
  } catch {
    try {
      return qe(arguments, "callee").get;
    } catch {
      return hn;
    }
  }
}() : hn, nt = sn(), li = un(), se = Object.getPrototypeOf || (li ? function(t) {
  return t.__proto__;
} : null), lt = {}, si = typeof Uint8Array > "u" || !se ? j : se(Uint8Array), Je = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? j : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? j : ArrayBuffer,
  "%ArrayIteratorPrototype%": nt && se ? se([][Symbol.iterator]()) : j,
  "%AsyncFromSyncIteratorPrototype%": j,
  "%AsyncFunction%": lt,
  "%AsyncGenerator%": lt,
  "%AsyncGeneratorFunction%": lt,
  "%AsyncIteratorPrototype%": lt,
  "%Atomics%": typeof Atomics > "u" ? j : Atomics,
  "%BigInt%": typeof BigInt > "u" ? j : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? j : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? j : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? j : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": ti,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": ni,
  "%Float32Array%": typeof Float32Array > "u" ? j : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? j : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? j : FinalizationRegistry,
  "%Function%": _a,
  "%GeneratorFunction%": lt,
  "%Int8Array%": typeof Int8Array > "u" ? j : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? j : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? j : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": nt && se ? se(se([][Symbol.iterator]())) : j,
  "%JSON%": typeof JSON == "object" ? JSON : j,
  "%Map%": typeof Map > "u" ? j : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !nt || !se ? j : se((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? j : Promise,
  "%Proxy%": typeof Proxy > "u" ? j : Proxy,
  "%RangeError%": ri,
  "%ReferenceError%": ai,
  "%Reflect%": typeof Reflect > "u" ? j : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? j : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !nt || !se ? j : se((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? j : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": nt && se ? se(""[Symbol.iterator]()) : j,
  "%Symbol%": nt ? Symbol : j,
  "%SyntaxError%": mt,
  "%ThrowTypeError%": ii,
  "%TypedArray%": si,
  "%TypeError%": ct,
  "%Uint8Array%": typeof Uint8Array > "u" ? j : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? j : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? j : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? j : Uint32Array,
  "%URIError%": oi,
  "%WeakMap%": typeof WeakMap > "u" ? j : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? j : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? j : WeakSet
};
if (se)
  try {
    null.error;
  } catch (t) {
    var ui = se(se(t));
    Je["%Error.prototype%"] = ui;
  }
var ci = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = yn("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = yn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = yn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = t("%AsyncGenerator%");
    a && se && (n = se(a.prototype));
  }
  return Je[e] = n, n;
}, Ir = {
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
}, Rt = Dt, Zt = rr, pi = Rt.call(Function.call, Array.prototype.concat), di = Rt.call(Function.apply, Array.prototype.splice), xr = Rt.call(Function.call, String.prototype.replace), Xt = Rt.call(Function.call, String.prototype.slice), fi = Rt.call(Function.call, RegExp.prototype.exec), mi = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, yi = /\\(\\)?/g, hi = function(e) {
  var n = Xt(e, 0, 1), r = Xt(e, -1);
  if (n === "%" && r !== "%")
    throw new mt("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new mt("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return xr(e, mi, function(o, i, s, l) {
    a[a.length] = s ? xr(l, yi, "$1") : i || o;
  }), a;
}, vi = function(e, n) {
  var r = e, a;
  if (Zt(Ir, r) && (a = Ir[r], r = "%" + a[0] + "%"), Zt(Je, r)) {
    var o = Je[r];
    if (o === lt && (o = ci(r)), typeof o > "u" && !n)
      throw new ct("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new mt("intrinsic " + e + " does not exist!");
}, gi = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new ct("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new ct('"allowMissing" argument must be a boolean');
  if (fi(/^%?[^%]*%?$/, e) === null)
    throw new mt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = hi(e), a = r.length > 0 ? r[0] : "", o = vi("%" + a + "%", n), i = o.name, s = o.value, l = !1, u = o.alias;
  u && (a = u[0], di(r, pi([0, 1], u)));
  for (var d = 1, p = !0; d < r.length; d += 1) {
    var c = r[d], f = Xt(c, 0, 1), h = Xt(c, -1);
    if ((f === '"' || f === "'" || f === "`" || h === '"' || h === "'" || h === "`") && f !== h)
      throw new mt("property names with quotes must have matching quotes");
    if ((c === "constructor" || !p) && (l = !0), a += "." + c, i = "%" + a + "%", Zt(Je, i))
      s = Je[i];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new ct("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (qe && d + 1 >= r.length) {
        var y = qe(s, c);
        p = !!y, p && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        p = Zt(s, c), s = s[c];
      p && !l && (Je[i] = s);
    }
  }
  return s;
}, vn, Er;
function bi() {
  if (Er) return vn;
  Er = 1;
  var t, e = Xn, n = Yn, r = er, a = tr, o = ln, i = Ye, s = nr, l = Function, u = function(Z) {
    try {
      return l('"use strict"; return (' + Z + ").constructor;")();
    } catch {
    }
  }, d = Object.getOwnPropertyDescriptor;
  if (d)
    try {
      d({}, "");
    } catch {
      d = null;
    }
  var p = function() {
    throw new i();
  }, c = d ? function() {
    try {
      return arguments.callee, p;
    } catch {
      try {
        return d(arguments, "callee").get;
      } catch {
        return p;
      }
    }
  }() : p, f = sn(), h = un(), y = Object.getPrototypeOf || (h ? function(Z) {
    return Z.__proto__;
  } : null), g = {}, v = typeof Uint8Array > "u" || !y ? t : y(Uint8Array), I = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
    "%ArrayIteratorPrototype%": f && y ? y([][Symbol.iterator]()) : t,
    "%AsyncFromSyncIteratorPrototype%": t,
    "%AsyncFunction%": g,
    "%AsyncGenerator%": g,
    "%AsyncGeneratorFunction%": g,
    "%AsyncIteratorPrototype%": g,
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
    "%Function%": l,
    "%GeneratorFunction%": g,
    "%Int8Array%": typeof Int8Array > "u" ? t : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? t : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? t : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": f && y ? y(y([][Symbol.iterator]())) : t,
    "%JSON%": typeof JSON == "object" ? JSON : t,
    "%Map%": typeof Map > "u" ? t : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !f || !y ? t : y((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? t : Promise,
    "%Proxy%": typeof Proxy > "u" ? t : Proxy,
    "%RangeError%": r,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? t : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? t : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !f || !y ? t : y((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? t : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": f && y ? y(""[Symbol.iterator]()) : t,
    "%Symbol%": f ? Symbol : t,
    "%SyntaxError%": o,
    "%ThrowTypeError%": c,
    "%TypedArray%": v,
    "%TypeError%": i,
    "%Uint8Array%": typeof Uint8Array > "u" ? t : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? t : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? t : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? t : Uint32Array,
    "%URIError%": s,
    "%WeakMap%": typeof WeakMap > "u" ? t : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? t : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? t : WeakSet
  };
  if (y)
    try {
      null.error;
    } catch (Z) {
      var b = y(y(Z));
      I["%Error.prototype%"] = b;
    }
  var k = function Z(M) {
    var K;
    if (M === "%AsyncFunction%")
      K = u("async function () {}");
    else if (M === "%GeneratorFunction%")
      K = u("function* () {}");
    else if (M === "%AsyncGeneratorFunction%")
      K = u("async function* () {}");
    else if (M === "%AsyncGenerator%") {
      var B = Z("%AsyncGeneratorFunction%");
      B && (K = B.prototype);
    } else if (M === "%AsyncIteratorPrototype%") {
      var te = Z("%AsyncGenerator%");
      te && y && (K = y(te.prototype));
    }
    return I[M] = K, K;
  }, $ = {
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
  }, _ = Dt, x = rr, E = _.call(Function.call, Array.prototype.concat), H = _.call(Function.apply, Array.prototype.splice), C = _.call(Function.call, String.prototype.replace), L = _.call(Function.call, String.prototype.slice), U = _.call(Function.call, RegExp.prototype.exec), D = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, T = /\\(\\)?/g, Q = function(M) {
    var K = L(M, 0, 1), B = L(M, -1);
    if (K === "%" && B !== "%")
      throw new o("invalid intrinsic syntax, expected closing `%`");
    if (B === "%" && K !== "%")
      throw new o("invalid intrinsic syntax, expected opening `%`");
    var te = [];
    return C(M, D, function(fe, ve, de, Re) {
      te[te.length] = de ? C(Re, T, "$1") : ve || fe;
    }), te;
  }, Y = function(M, K) {
    var B = M, te;
    if (x($, B) && (te = $[B], B = "%" + te[0] + "%"), x(I, B)) {
      var fe = I[B];
      if (fe === g && (fe = k(B)), typeof fe > "u" && !K)
        throw new i("intrinsic " + M + " exists, but is not available. Please file an issue!");
      return {
        alias: te,
        name: B,
        value: fe
      };
    }
    throw new o("intrinsic " + M + " does not exist!");
  };
  return vn = function(M, K) {
    if (typeof M != "string" || M.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof K != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (U(/^%?[^%]*%?$/, M) === null)
      throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var B = Q(M), te = B.length > 0 ? B[0] : "", fe = Y("%" + te + "%", K), ve = fe.name, de = fe.value, Re = !1, Oe = fe.alias;
    Oe && (te = Oe[0], H(B, E([0, 1], Oe)));
    for (var we = 1, Fe = !0; we < B.length; we += 1) {
      var _e = B[we], Be = L(_e, 0, 1), et = L(_e, -1);
      if ((Be === '"' || Be === "'" || Be === "`" || et === '"' || et === "'" || et === "`") && Be !== et)
        throw new o("property names with quotes must have matching quotes");
      if ((_e === "constructor" || !Fe) && (Re = !0), te += "." + _e, ve = "%" + te + "%", x(I, ve))
        de = I[ve];
      else if (de != null) {
        if (!(_e in de)) {
          if (!K)
            throw new i("base intrinsic for " + M + " exists, but the property is not available.");
          return;
        }
        if (d && we + 1 >= B.length) {
          var Mt = d(de, _e);
          Fe = !!Mt, Fe && "get" in Mt && !("originalValue" in Mt.get) ? de = Mt.get : de = de[_e];
        } else
          Fe = x(de, _e), de = de[_e];
        Fe && !Re && (I[ve] = de);
      }
    }
    return de;
  }, vn;
}
var gn, Dr;
function or() {
  if (Dr) return gn;
  Dr = 1;
  var t = bi(), e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return gn = e, gn;
}
var wi = "Function.prototype.bind called on incompatible ", bn = Array.prototype.slice, _i = Object.prototype.toString, Si = "[object Function]", ki = function(e) {
  var n = this;
  if (typeof n != "function" || _i.call(n) !== Si)
    throw new TypeError(wi + n);
  for (var r = bn.call(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var d = n.apply(
        this,
        r.concat(bn.call(arguments))
      );
      return Object(d) === d ? d : this;
    } else
      return n.apply(
        e,
        r.concat(bn.call(arguments))
      );
  }, i = Math.max(0, n.length - r.length), s = [], l = 0; l < i; l++)
    s.push("$" + l);
  if (a = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, Ai = ki, $i = Function.prototype.bind || Ai, Pi = "Function.prototype.bind called on incompatible ", wn = Array.prototype.slice, Ii = Object.prototype.toString, xi = "[object Function]", Ei = function(e) {
  var n = this;
  if (typeof n != "function" || Ii.call(n) !== xi)
    throw new TypeError(Pi + n);
  for (var r = wn.call(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var d = n.apply(
        this,
        r.concat(wn.call(arguments))
      );
      return Object(d) === d ? d : this;
    } else
      return n.apply(
        e,
        r.concat(wn.call(arguments))
      );
  }, i = Math.max(0, n.length - r.length), s = [], l = 0; l < i; l++)
    s.push("$" + l);
  if (a = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, Di = Ei, Ci = Function.prototype.bind || Di, Ri = Ci, Oi = Ri.call(Function.call, Object.prototype.hasOwnProperty), z, yt = SyntaxError, Sa = Function, pt = TypeError, _n = function(t) {
  try {
    return Sa('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Ke = Object.getOwnPropertyDescriptor;
if (Ke)
  try {
    Ke({}, "");
  } catch {
    Ke = null;
  }
var Sn = function() {
  throw new pt();
}, Fi = Ke ? function() {
  try {
    return arguments.callee, Sn;
  } catch {
    try {
      return Ke(arguments, "callee").get;
    } catch {
      return Sn;
    }
  }
}() : Sn, rt = sn(), Mi = un(), ue = Object.getPrototypeOf || (Mi ? function(t) {
  return t.__proto__;
} : null), st = {}, Ti = typeof Uint8Array > "u" || !ue ? z : ue(Uint8Array), Qe = {
  "%AggregateError%": typeof AggregateError > "u" ? z : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? z : ArrayBuffer,
  "%ArrayIteratorPrototype%": rt && ue ? ue([][Symbol.iterator]()) : z,
  "%AsyncFromSyncIteratorPrototype%": z,
  "%AsyncFunction%": st,
  "%AsyncGenerator%": st,
  "%AsyncGeneratorFunction%": st,
  "%AsyncIteratorPrototype%": st,
  "%Atomics%": typeof Atomics > "u" ? z : Atomics,
  "%BigInt%": typeof BigInt > "u" ? z : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? z : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? z : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? z : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? z : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? z : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? z : FinalizationRegistry,
  "%Function%": Sa,
  "%GeneratorFunction%": st,
  "%Int8Array%": typeof Int8Array > "u" ? z : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? z : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? z : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": rt && ue ? ue(ue([][Symbol.iterator]())) : z,
  "%JSON%": typeof JSON == "object" ? JSON : z,
  "%Map%": typeof Map > "u" ? z : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !rt || !ue ? z : ue((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? z : Promise,
  "%Proxy%": typeof Proxy > "u" ? z : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? z : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? z : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !rt || !ue ? z : ue((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? z : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": rt && ue ? ue(""[Symbol.iterator]()) : z,
  "%Symbol%": rt ? Symbol : z,
  "%SyntaxError%": yt,
  "%ThrowTypeError%": Fi,
  "%TypedArray%": Ti,
  "%TypeError%": pt,
  "%Uint8Array%": typeof Uint8Array > "u" ? z : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? z : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? z : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? z : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? z : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? z : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? z : WeakSet
};
if (ue)
  try {
    null.error;
  } catch (t) {
    var Vi = ue(ue(t));
    Qe["%Error.prototype%"] = Vi;
  }
var Ui = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = _n("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = _n("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = _n("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = t("%AsyncGenerator%");
    a && ue && (n = ue(a.prototype));
  }
  return Qe[e] = n, n;
}, Cr = {
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
}, Ot = $i, Yt = Oi, Bi = Ot.call(Function.call, Array.prototype.concat), Ni = Ot.call(Function.apply, Array.prototype.splice), Rr = Ot.call(Function.call, String.prototype.replace), en = Ot.call(Function.call, String.prototype.slice), ji = Ot.call(Function.call, RegExp.prototype.exec), zi = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Li = /\\(\\)?/g, Wi = function(e) {
  var n = en(e, 0, 1), r = en(e, -1);
  if (n === "%" && r !== "%")
    throw new yt("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new yt("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Rr(e, zi, function(o, i, s, l) {
    a[a.length] = s ? Rr(l, Li, "$1") : i || o;
  }), a;
}, Gi = function(e, n) {
  var r = e, a;
  if (Yt(Cr, r) && (a = Cr[r], r = "%" + a[0] + "%"), Yt(Qe, r)) {
    var o = Qe[r];
    if (o === st && (o = Ui(r)), typeof o > "u" && !n)
      throw new pt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new yt("intrinsic " + e + " does not exist!");
}, Hi = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new pt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new pt('"allowMissing" argument must be a boolean');
  if (ji(/^%?[^%]*%?$/, e) === null)
    throw new yt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = Wi(e), a = r.length > 0 ? r[0] : "", o = Gi("%" + a + "%", n), i = o.name, s = o.value, l = !1, u = o.alias;
  u && (a = u[0], Ni(r, Bi([0, 1], u)));
  for (var d = 1, p = !0; d < r.length; d += 1) {
    var c = r[d], f = en(c, 0, 1), h = en(c, -1);
    if ((f === '"' || f === "'" || f === "`" || h === '"' || h === "'" || h === "`") && f !== h)
      throw new yt("property names with quotes must have matching quotes");
    if ((c === "constructor" || !p) && (l = !0), a += "." + c, i = "%" + a + "%", Yt(Qe, i))
      s = Qe[i];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new pt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Ke && d + 1 >= r.length) {
        var y = Ke(s, c);
        p = !!y, p && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        p = Yt(s, c), s = s[c];
      p && !l && (Qe[i] = s);
    }
  }
  return s;
}, qi = Hi, Ht = qi("%Object.getOwnPropertyDescriptor%", !0);
if (Ht)
  try {
    Ht([], "length");
  } catch {
    Ht = null;
  }
var ka = Ht, Or = or(), Ji = ln, at = Ye, Fr = ka, Ki = function(e, n, r) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new at("`obj` must be an object or a function`");
  if (typeof n != "string" && typeof n != "symbol")
    throw new at("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new at("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new at("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new at("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new at("`loose`, if provided, must be a boolean");
  var a = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!Fr && Fr(e, n);
  if (Or)
    Or(e, n, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: a === null && l ? l.enumerable : !a,
      value: r,
      writable: o === null && l ? l.writable : !o
    });
  else if (s || !a && !o && !i)
    e[n] = r;
  else
    throw new Ji("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Vn = or(), Aa = function() {
  return !!Vn;
};
Aa.hasArrayLengthDefineBug = function() {
  if (!Vn)
    return null;
  try {
    return Vn([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Qi = Aa, Zi = gi, Mr = Ki, Xi = Qi(), Tr = ka, Vr = Ye, Yi = Zi("%Math.floor%"), el = function(e, n) {
  if (typeof e != "function")
    throw new Vr("`fn` is not a function");
  if (typeof n != "number" || n < 0 || n > 4294967295 || Yi(n) !== n)
    throw new Vr("`length` must be a positive 32-bit integer");
  var r = arguments.length > 2 && !!arguments[2], a = !0, o = !0;
  if ("length" in e && Tr) {
    var i = Tr(e, "length");
    i && !i.configurable && (a = !1), i && !i.writable && (o = !1);
  }
  return (a || o || !r) && (Xi ? Mr(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n,
    !0,
    !0
  ) : Mr(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n
  )), e;
};
(function(t) {
  var e = Dt, n = ar, r = el, a = Ye, o = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"), s = n("%Reflect.apply%", !0) || e.call(i, o), l = or(), u = n("%Math.max%");
  t.exports = function(c) {
    if (typeof c != "function")
      throw new a("a function is required");
    var f = s(e, i, arguments);
    return r(
      f,
      1 + u(0, c.length - (arguments.length - 1)),
      !0
    );
  };
  var d = function() {
    return s(e, o, arguments);
  };
  l ? l(t.exports, "apply", { value: d }) : t.exports.apply = d;
})(wa);
var tl = wa.exports, $a = ar, Pa = tl, nl = Pa($a("String.prototype.indexOf")), rl = function(e, n) {
  var r = $a(e, !!n);
  return typeof r == "function" && nl(e, ".prototype.") > -1 ? Pa(r) : r;
};
const al = {}, ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: al
}, Symbol.toStringTag, { value: "Module" })), il = /* @__PURE__ */ ko(ol);
var ir = typeof Map == "function" && Map.prototype, kn = Object.getOwnPropertyDescriptor && ir ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, tn = ir && kn && typeof kn.get == "function" ? kn.get : null, Ur = ir && Map.prototype.forEach, lr = typeof Set == "function" && Set.prototype, An = Object.getOwnPropertyDescriptor && lr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, nn = lr && An && typeof An.get == "function" ? An.get : null, Br = lr && Set.prototype.forEach, ll = typeof WeakMap == "function" && WeakMap.prototype, kt = ll ? WeakMap.prototype.has : null, sl = typeof WeakSet == "function" && WeakSet.prototype, At = sl ? WeakSet.prototype.has : null, ul = typeof WeakRef == "function" && WeakRef.prototype, Nr = ul ? WeakRef.prototype.deref : null, cl = Boolean.prototype.valueOf, pl = Object.prototype.toString, dl = Function.prototype.toString, fl = String.prototype.match, sr = String.prototype.slice, Te = String.prototype.replace, ml = String.prototype.toUpperCase, jr = String.prototype.toLowerCase, Ia = RegExp.prototype.test, zr = Array.prototype.concat, Ie = Array.prototype.join, yl = Array.prototype.slice, Lr = Math.floor, Un = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, $n = Object.getOwnPropertySymbols, Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ht = typeof Symbol == "function" && typeof Symbol.iterator == "object", me = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ht || !0) ? Symbol.toStringTag : null, xa = Object.prototype.propertyIsEnumerable, Wr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function Gr(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Ia.call(/e/, e))
    return e;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var r = t < 0 ? -Lr(-t) : Lr(t);
    if (r !== t) {
      var a = String(r), o = sr.call(e, a.length + 1);
      return Te.call(a, n, "$&_") + "." + Te.call(Te.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Te.call(e, n, "$&_");
}
var Nn = il, Hr = Nn.custom, qr = Da(Hr) ? Hr : null, hl = function t(e, n, r, a) {
  var o = n || {};
  if (Me(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Me(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = Me(o, "customInspect") ? o.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Me(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Me(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = o.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Ra(e, o);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var l = String(e);
    return s ? Gr(e, l) : l;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return s ? Gr(e, u) : u;
  }
  var d = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof r > "u" && (r = 0), r >= d && d > 0 && typeof e == "object")
    return jn(e) ? "[Array]" : "[Object]";
  var p = Fl(o, r);
  if (typeof a > "u")
    a = [];
  else if (Ca(a, e) >= 0)
    return "[Circular]";
  function c(D, T, Q) {
    if (T && (a = yl.call(a), a.push(T)), Q) {
      var Y = {
        depth: o.depth
      };
      return Me(o, "quoteStyle") && (Y.quoteStyle = o.quoteStyle), t(D, Y, r + 1, a);
    }
    return t(D, o, r + 1, a);
  }
  if (typeof e == "function" && !Jr(e)) {
    var f = $l(e), h = Tt(e, c);
    return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (h.length > 0 ? " { " + Ie.call(h, ", ") + " }" : "");
  }
  if (Da(e)) {
    var y = ht ? Te.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Bn.call(e);
    return typeof e == "object" && !ht ? _t(y) : y;
  }
  if (Cl(e)) {
    for (var g = "<" + jr.call(String(e.nodeName)), v = e.attributes || [], I = 0; I < v.length; I++)
      g += " " + v[I].name + "=" + Ea(vl(v[I].value), "double", o);
    return g += ">", e.childNodes && e.childNodes.length && (g += "..."), g += "</" + jr.call(String(e.nodeName)) + ">", g;
  }
  if (jn(e)) {
    if (e.length === 0)
      return "[]";
    var b = Tt(e, c);
    return p && !Ol(b) ? "[" + zn(b, p) + "]" : "[ " + Ie.call(b, ", ") + " ]";
  }
  if (bl(e)) {
    var k = Tt(e, c);
    return !("cause" in Error.prototype) && "cause" in e && !xa.call(e, "cause") ? "{ [" + String(e) + "] " + Ie.call(zr.call("[cause]: " + c(e.cause), k), ", ") + " }" : k.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Ie.call(k, ", ") + " }";
  }
  if (typeof e == "object" && i) {
    if (qr && typeof e[qr] == "function" && Nn)
      return Nn(e, { depth: d - r });
    if (i !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (Pl(e)) {
    var $ = [];
    return Ur && Ur.call(e, function(D, T) {
      $.push(c(T, e, !0) + " => " + c(D, e));
    }), Kr("Map", tn.call(e), $, p);
  }
  if (El(e)) {
    var _ = [];
    return Br && Br.call(e, function(D) {
      _.push(c(D, e));
    }), Kr("Set", nn.call(e), _, p);
  }
  if (Il(e))
    return Pn("WeakMap");
  if (Dl(e))
    return Pn("WeakSet");
  if (xl(e))
    return Pn("WeakRef");
  if (_l(e))
    return _t(c(Number(e)));
  if (kl(e))
    return _t(c(Un.call(e)));
  if (Sl(e))
    return _t(cl.call(e));
  if (wl(e))
    return _t(c(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === So)
    return "{ [object globalThis] }";
  if (!gl(e) && !Jr(e)) {
    var x = Tt(e, c), E = Wr ? Wr(e) === Object.prototype : e instanceof Object || e.constructor === Object, H = e instanceof Object ? "" : "null prototype", C = !E && me && Object(e) === e && me in e ? sr.call(Ue(e), 8, -1) : H ? "Object" : "", L = E || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", U = L + (C || H ? "[" + Ie.call(zr.call([], C || [], H || []), ": ") + "] " : "");
    return x.length === 0 ? U + "{}" : p ? U + "{" + zn(x, p) + "}" : U + "{ " + Ie.call(x, ", ") + " }";
  }
  return String(e);
};
function Ea(t, e, n) {
  var r = (n.quoteStyle || e) === "double" ? '"' : "'";
  return r + t + r;
}
function vl(t) {
  return Te.call(String(t), /"/g, "&quot;");
}
function jn(t) {
  return Ue(t) === "[object Array]" && (!me || !(typeof t == "object" && me in t));
}
function gl(t) {
  return Ue(t) === "[object Date]" && (!me || !(typeof t == "object" && me in t));
}
function Jr(t) {
  return Ue(t) === "[object RegExp]" && (!me || !(typeof t == "object" && me in t));
}
function bl(t) {
  return Ue(t) === "[object Error]" && (!me || !(typeof t == "object" && me in t));
}
function wl(t) {
  return Ue(t) === "[object String]" && (!me || !(typeof t == "object" && me in t));
}
function _l(t) {
  return Ue(t) === "[object Number]" && (!me || !(typeof t == "object" && me in t));
}
function Sl(t) {
  return Ue(t) === "[object Boolean]" && (!me || !(typeof t == "object" && me in t));
}
function Da(t) {
  if (ht)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Bn)
    return !1;
  try {
    return Bn.call(t), !0;
  } catch {
  }
  return !1;
}
function kl(t) {
  if (!t || typeof t != "object" || !Un)
    return !1;
  try {
    return Un.call(t), !0;
  } catch {
  }
  return !1;
}
var Al = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Me(t, e) {
  return Al.call(t, e);
}
function Ue(t) {
  return pl.call(t);
}
function $l(t) {
  if (t.name)
    return t.name;
  var e = fl.call(dl.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Ca(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var n = 0, r = t.length; n < r; n++)
    if (t[n] === e)
      return n;
  return -1;
}
function Pl(t) {
  if (!tn || !t || typeof t != "object")
    return !1;
  try {
    tn.call(t);
    try {
      nn.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Il(t) {
  if (!kt || !t || typeof t != "object")
    return !1;
  try {
    kt.call(t, kt);
    try {
      At.call(t, At);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function xl(t) {
  if (!Nr || !t || typeof t != "object")
    return !1;
  try {
    return Nr.call(t), !0;
  } catch {
  }
  return !1;
}
function El(t) {
  if (!nn || !t || typeof t != "object")
    return !1;
  try {
    nn.call(t);
    try {
      tn.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function Dl(t) {
  if (!At || !t || typeof t != "object")
    return !1;
  try {
    At.call(t, At);
    try {
      kt.call(t, kt);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Cl(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Ra(t, e) {
  if (t.length > e.maxStringLength) {
    var n = t.length - e.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Ra(sr.call(t, 0, e.maxStringLength), e) + r;
  }
  var a = Te.call(Te.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Rl);
  return Ea(a, "single", e);
}
function Rl(t) {
  var e = t.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + ml.call(e.toString(16));
}
function _t(t) {
  return "Object(" + t + ")";
}
function Pn(t) {
  return t + " { ? }";
}
function Kr(t, e, n, r) {
  var a = r ? zn(n, r) : Ie.call(n, ", ");
  return t + " (" + e + ") {" + a + "}";
}
function Ol(t) {
  for (var e = 0; e < t.length; e++)
    if (Ca(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Fl(t, e) {
  var n;
  if (t.indent === "	")
    n = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    n = Ie.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: Ie.call(Array(e + 1), n)
  };
}
function zn(t, e) {
  if (t.length === 0)
    return "";
  var n = `
` + e.prev + e.base;
  return n + Ie.call(t, "," + n) + `
` + e.prev;
}
function Tt(t, e) {
  var n = jn(t), r = [];
  if (n) {
    r.length = t.length;
    for (var a = 0; a < t.length; a++)
      r[a] = Me(t, a) ? e(t[a], t) : "";
  }
  var o = typeof $n == "function" ? $n(t) : [], i;
  if (ht) {
    i = {};
    for (var s = 0; s < o.length; s++)
      i["$" + o[s]] = o[s];
  }
  for (var l in t)
    Me(t, l) && (n && String(Number(l)) === l && l < t.length || ht && i["$" + l] instanceof Symbol || (Ia.call(/[^\w$]/, l) ? r.push(e(l, t) + ": " + e(t[l], t)) : r.push(l + ": " + e(t[l], t))));
  if (typeof $n == "function")
    for (var u = 0; u < o.length; u++)
      xa.call(t, o[u]) && r.push("[" + e(o[u]) + "]: " + e(t[o[u]], t));
  return r;
}
var Oa = ar, gt = rl, Ml = hl, Tl = Ye, Vt = Oa("%WeakMap%", !0), Ut = Oa("%Map%", !0), Vl = gt("WeakMap.prototype.get", !0), Ul = gt("WeakMap.prototype.set", !0), Bl = gt("WeakMap.prototype.has", !0), Nl = gt("Map.prototype.get", !0), jl = gt("Map.prototype.set", !0), zl = gt("Map.prototype.has", !0), ur = function(t, e) {
  for (var n = t, r; (r = n.next) !== null; n = r)
    if (r.key === e)
      return n.next = r.next, r.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = r, r;
}, Ll = function(t, e) {
  var n = ur(t, e);
  return n && n.value;
}, Wl = function(t, e, n) {
  var r = ur(t, e);
  r ? r.value = n : t.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: n
  };
}, Gl = function(t, e) {
  return !!ur(t, e);
}, Hl = function() {
  var e, n, r, a = {
    assert: function(o) {
      if (!a.has(o))
        throw new Tl("Side channel does not contain " + Ml(o));
    },
    get: function(o) {
      if (Vt && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Vl(e, o);
      } else if (Ut) {
        if (n)
          return Nl(n, o);
      } else if (r)
        return Ll(r, o);
    },
    has: function(o) {
      if (Vt && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Bl(e, o);
      } else if (Ut) {
        if (n)
          return zl(n, o);
      } else if (r)
        return Gl(r, o);
      return !1;
    },
    set: function(o, i) {
      Vt && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new Vt()), Ul(e, o, i)) : Ut ? (n || (n = new Ut()), jl(n, o, i)) : (r || (r = { key: {}, next: null }), Wl(r, o, i));
    }
  };
  return a;
}, ql = String.prototype.replace, Jl = /%20/g, In = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, cr = {
  default: In.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return ql.call(t, Jl, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: In.RFC1738,
  RFC3986: In.RFC3986
}, Kl = cr, xn = Object.prototype.hasOwnProperty, Le = Array.isArray, $e = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), Ql = function(e) {
  for (; e.length > 1; ) {
    var n = e.pop(), r = n.obj[n.prop];
    if (Le(r)) {
      for (var a = [], o = 0; o < r.length; ++o)
        typeof r[o] < "u" && a.push(r[o]);
      n.obj[n.prop] = a;
    }
  }
}, Fa = function(e, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < e.length; ++a)
    typeof e[a] < "u" && (r[a] = e[a]);
  return r;
}, Zl = function t(e, n, r) {
  if (!n)
    return e;
  if (typeof n != "object") {
    if (Le(e))
      e.push(n);
    else if (e && typeof e == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !xn.call(Object.prototype, n)) && (e[n] = !0);
    else
      return [e, n];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(n);
  var a = e;
  return Le(e) && !Le(n) && (a = Fa(e, r)), Le(e) && Le(n) ? (n.forEach(function(o, i) {
    if (xn.call(e, i)) {
      var s = e[i];
      s && typeof s == "object" && o && typeof o == "object" ? e[i] = t(s, o, r) : e.push(o);
    } else
      e[i] = o;
  }), e) : Object.keys(n).reduce(function(o, i) {
    var s = n[i];
    return xn.call(o, i) ? o[i] = t(o[i], s, r) : o[i] = s, o;
  }, a);
}, Xl = function(e, n) {
  return Object.keys(n).reduce(function(r, a) {
    return r[a] = n[a], r;
  }, e);
}, Yl = function(t, e, n) {
  var r = t.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, es = function(e, n, r, a, o) {
  if (e.length === 0)
    return e;
  var i = e;
  if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)), r === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(d) {
      return "%26%23" + parseInt(d.slice(2), 16) + "%3B";
    });
  for (var s = "", l = 0; l < i.length; ++l) {
    var u = i.charCodeAt(l);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || o === Kl.RFC1738 && (u === 40 || u === 41)) {
      s += i.charAt(l);
      continue;
    }
    if (u < 128) {
      s = s + $e[u];
      continue;
    }
    if (u < 2048) {
      s = s + ($e[192 | u >> 6] + $e[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      s = s + ($e[224 | u >> 12] + $e[128 | u >> 6 & 63] + $e[128 | u & 63]);
      continue;
    }
    l += 1, u = 65536 + ((u & 1023) << 10 | i.charCodeAt(l) & 1023), s += $e[240 | u >> 18] + $e[128 | u >> 12 & 63] + $e[128 | u >> 6 & 63] + $e[128 | u & 63];
  }
  return s;
}, ts = function(e) {
  for (var n = [{ obj: { o: e }, prop: "o" }], r = [], a = 0; a < n.length; ++a)
    for (var o = n[a], i = o.obj[o.prop], s = Object.keys(i), l = 0; l < s.length; ++l) {
      var u = s[l], d = i[u];
      typeof d == "object" && d !== null && r.indexOf(d) === -1 && (n.push({ obj: i, prop: u }), r.push(d));
    }
  return Ql(n), e;
}, ns = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, rs = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, as = function(e, n) {
  return [].concat(e, n);
}, os = function(e, n) {
  if (Le(e)) {
    for (var r = [], a = 0; a < e.length; a += 1)
      r.push(n(e[a]));
    return r;
  }
  return n(e);
}, Ma = {
  arrayToObject: Fa,
  assign: Xl,
  combine: as,
  compact: ts,
  decode: Yl,
  encode: es,
  isBuffer: rs,
  isRegExp: ns,
  maybeMap: os,
  merge: Zl
}, Ta = Hl, qt = Ma, $t = cr, is = Object.prototype.hasOwnProperty, Va = {
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
}, Pe = Array.isArray, ls = Array.prototype.push, Ua = function(t, e) {
  ls.apply(t, Pe(e) ? e : [e]);
}, ss = Date.prototype.toISOString, Qr = $t.default, oe = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: qt.encode,
  encodeValuesOnly: !1,
  format: Qr,
  formatter: $t.formatters[Qr],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return ss.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, us = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, En = {}, cs = function t(e, n, r, a, o, i, s, l, u, d, p, c, f, h, y, g, v, I) {
  for (var b = e, k = I, $ = 0, _ = !1; (k = k.get(En)) !== void 0 && !_; ) {
    var x = k.get(e);
    if ($ += 1, typeof x < "u") {
      if (x === $)
        throw new RangeError("Cyclic object value");
      _ = !0;
    }
    typeof k.get(En) > "u" && ($ = 0);
  }
  if (typeof d == "function" ? b = d(n, b) : b instanceof Date ? b = f(b) : r === "comma" && Pe(b) && (b = qt.maybeMap(b, function(B) {
    return B instanceof Date ? f(B) : B;
  })), b === null) {
    if (i)
      return u && !g ? u(n, oe.encoder, v, "key", h) : n;
    b = "";
  }
  if (us(b) || qt.isBuffer(b)) {
    if (u) {
      var E = g ? n : u(n, oe.encoder, v, "key", h);
      return [y(E) + "=" + y(u(b, oe.encoder, v, "value", h))];
    }
    return [y(n) + "=" + y(String(b))];
  }
  var H = [];
  if (typeof b > "u")
    return H;
  var C;
  if (r === "comma" && Pe(b))
    g && u && (b = qt.maybeMap(b, u)), C = [{ value: b.length > 0 ? b.join(",") || null : void 0 }];
  else if (Pe(d))
    C = d;
  else {
    var L = Object.keys(b);
    C = p ? L.sort(p) : L;
  }
  var U = l ? n.replace(/\./g, "%2E") : n, D = a && Pe(b) && b.length === 1 ? U + "[]" : U;
  if (o && Pe(b) && b.length === 0)
    return D + "[]";
  for (var T = 0; T < C.length; ++T) {
    var Q = C[T], Y = typeof Q == "object" && typeof Q.value < "u" ? Q.value : b[Q];
    if (!(s && Y === null)) {
      var Z = c && l ? Q.replace(/\./g, "%2E") : Q, M = Pe(b) ? typeof r == "function" ? r(D, Z) : D : D + (c ? "." + Z : "[" + Z + "]");
      I.set(e, $);
      var K = Ta();
      K.set(En, I), Ua(H, t(
        Y,
        M,
        r,
        a,
        o,
        i,
        s,
        l,
        r === "comma" && g && Pe(b) ? null : u,
        d,
        p,
        c,
        f,
        h,
        y,
        g,
        v,
        K
      ));
    }
  }
  return H;
}, ps = function(e) {
  if (!e)
    return oe;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = e.charset || oe.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = $t.default;
  if (typeof e.format < "u") {
    if (!is.call($t.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    r = e.format;
  }
  var a = $t.formatters[r], o = oe.filter;
  (typeof e.filter == "function" || Pe(e.filter)) && (o = e.filter);
  var i;
  if (e.arrayFormat in Va ? i = e.arrayFormat : "indices" in e ? i = e.indices ? "indices" : "repeat" : i = oe.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var s = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : oe.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : oe.addQueryPrefix,
    allowDots: s,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : oe.allowEmptyArrays,
    arrayFormat: i,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : oe.charsetSentinel,
    commaRoundTrip: e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? oe.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : oe.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : oe.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : oe.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : oe.encodeValuesOnly,
    filter: o,
    format: r,
    formatter: a,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : oe.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : oe.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : oe.strictNullHandling
  };
}, ds = function(t, e) {
  var n = t, r = ps(e), a, o;
  typeof r.filter == "function" ? (o = r.filter, n = o("", n)) : Pe(r.filter) && (o = r.filter, a = o);
  var i = [];
  if (typeof n != "object" || n === null)
    return "";
  var s = Va[r.arrayFormat], l = s === "comma" && r.commaRoundTrip;
  a || (a = Object.keys(n)), r.sort && a.sort(r.sort);
  for (var u = Ta(), d = 0; d < a.length; ++d) {
    var p = a[d];
    r.skipNulls && n[p] === null || Ua(i, cs(
      n[p],
      p,
      s,
      l,
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
  var c = i.join(r.delimiter), f = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? f += "utf8=%26%2310003%3B&" : f += "utf8=%E2%9C%93&"), c.length > 0 ? f + c : "";
}, vt = Ma, Ln = Object.prototype.hasOwnProperty, fs = Array.isArray, ne = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !0,
  decoder: vt.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, ms = function(t) {
  return t.replace(/&#(\d+);/g, function(e, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, Ba = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, ys = "utf8=%26%2310003%3B", hs = "utf8=%E2%9C%93", vs = function(e, n) {
  var r = { __proto__: null }, a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, i = a.split(n.delimiter, o), s = -1, l, u = n.charset;
  if (n.charsetSentinel)
    for (l = 0; l < i.length; ++l)
      i[l].indexOf("utf8=") === 0 && (i[l] === hs ? u = "utf-8" : i[l] === ys && (u = "iso-8859-1"), s = l, l = i.length);
  for (l = 0; l < i.length; ++l)
    if (l !== s) {
      var d = i[l], p = d.indexOf("]="), c = p === -1 ? d.indexOf("=") : p + 1, f, h;
      c === -1 ? (f = n.decoder(d, ne.decoder, u, "key"), h = n.strictNullHandling ? null : "") : (f = n.decoder(d.slice(0, c), ne.decoder, u, "key"), h = vt.maybeMap(
        Ba(d.slice(c + 1), n),
        function(g) {
          return n.decoder(g, ne.decoder, u, "value");
        }
      )), h && n.interpretNumericEntities && u === "iso-8859-1" && (h = ms(h)), d.indexOf("[]=") > -1 && (h = fs(h) ? [h] : h);
      var y = Ln.call(r, f);
      y && n.duplicates === "combine" ? r[f] = vt.combine(r[f], h) : (!y || n.duplicates === "last") && (r[f] = h);
    }
  return r;
}, gs = function(t, e, n, r) {
  for (var a = r ? e : Ba(e, n), o = t.length - 1; o >= 0; --o) {
    var i, s = t[o];
    if (s === "[]" && n.parseArrays)
      i = n.allowEmptyArrays && a === "" ? [] : [].concat(a);
    else {
      i = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, u = n.decodeDotInKeys ? l.replace(/%2E/g, ".") : l, d = parseInt(u, 10);
      !n.parseArrays && u === "" ? i = { 0: a } : !isNaN(d) && s !== u && String(d) === u && d >= 0 && n.parseArrays && d <= n.arrayLimit ? (i = [], i[d] = a) : u !== "__proto__" && (i[u] = a);
    }
    a = i;
  }
  return a;
}, bs = function(e, n, r, a) {
  if (e) {
    var o = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, l = r.depth > 0 && i.exec(o), u = l ? o.slice(0, l.index) : o, d = [];
    if (u) {
      if (!r.plainObjects && Ln.call(Object.prototype, u) && !r.allowPrototypes)
        return;
      d.push(u);
    }
    for (var p = 0; r.depth > 0 && (l = s.exec(o)) !== null && p < r.depth; ) {
      if (p += 1, !r.plainObjects && Ln.call(Object.prototype, l[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      d.push(l[1]);
    }
    return l && d.push("[" + o.slice(l.index) + "]"), gs(d, n, r, a);
  }
}, ws = function(e) {
  if (!e)
    return ne;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof e.charset > "u" ? ne.charset : e.charset, r = typeof e.duplicates > "u" ? ne.duplicates : e.duplicates;
  if (r !== "combine" && r !== "first" && r !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var a = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : ne.allowDots : !!e.allowDots;
  return {
    allowDots: a,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : ne.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : ne.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : ne.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : ne.arrayLimit,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : ne.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : ne.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : ne.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : ne.decoder,
    delimiter: typeof e.delimiter == "string" || vt.isRegExp(e.delimiter) ? e.delimiter : ne.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : ne.depth,
    duplicates: r,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : ne.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : ne.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : ne.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : ne.strictNullHandling
  };
}, _s = function(t, e) {
  var n = ws(e);
  if (t === "" || t === null || typeof t > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof t == "string" ? vs(t, n) : t, a = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = Object.keys(r), i = 0; i < o.length; ++i) {
    var s = o[i], l = bs(s, r[s], n, typeof t == "string");
    a = vt.merge(a, l, n);
  }
  return n.allowSparse === !0 ? a : vt.compact(a);
}, Ss = ds, ks = _s, As = cr, $s = {
  formats: As,
  parse: ks,
  stringify: Ss
};
const Ps = /* @__PURE__ */ Zn($s), pr = [
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
], Na = {
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
}, ja = [
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
function Wn(t) {
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
function Is(t) {
  var e, n, r;
  return {
    mental: {
      hardened: ((e = t == null ? void 0 : t.mental) == null ? void 0 : e.hardened) ?? !1,
      permanentMadness: ((n = t == null ? void 0 : t.mental) == null ? void 0 : n.permanentMadness) ?? !1,
      indefiniteMadness: ((r = t == null ? void 0 : t.mental) == null ? void 0 : r.indefiniteMadness) ?? !1
    }
  };
}
function xs(t) {
  return {
    currency: (t == null ? void 0 : t.currency) ?? (t == null ? void 0 : t.cash) ?? "",
    assets: (t == null ? void 0 : t.assets) ?? "",
    items: (t == null ? void 0 : t.items) ?? "",
    magicItems: (t == null ? void 0 : t.magicItems) ?? "",
    magics: (t == null ? void 0 : t.magics) ?? "",
    touches: (t == null ? void 0 : t.touches) ?? ""
  };
}
function We(t) {
  const e = Is(t == null ? void 0 : t.status), n = xs(t == null ? void 0 : t.assets);
  return {
    name: "",
    playerName: "",
    time: "",
    job: "",
    age: "",
    gender: "",
    location: "",
    hometown: "",
    attributes: {},
    battleAttributes: {},
    pointValues: {},
    proSkills: [],
    skillPoints: [],
    weapons: [Wn(pr[0])],
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
    ...t,
    assets: n,
    status: e
  };
}
const dr = [
  {
    name: "信誉",
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
      show: [""],
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
    name: "读唇",
    init: 1
  },
  {
    name: "人类学",
    init: 1
  },
  {
    name: "图书馆",
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
          name: "绘画",
          init: 5
        },
        {
          name: "艺术",
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
          name: "烹饪",
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
          name: "木工",
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
    name: "计算机",
    init: 5
  },
  {
    name: "格斗",
    init: 0,
    group: {
      show: ["斗殴", ""],
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
      show: ["手枪", ""],
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
      show: ["", ""],
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
    name: "中医",
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
    name: "风水",
    init: 15
  },
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
    name: "电子学",
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
], Zr = {
  信誉: ["信用", "信誉"],
  克苏鲁神话: ["克苏鲁"],
  取悦: ["魅惑"],
  汽车驾驶: ["汽车", "驾驶"],
  图书馆: ["图书馆"],
  计算机: ["计算机", "电脑"],
  "步/霰": ["步枪", "霰弹枪"],
  锁匠: ["开锁", "撬锁"],
  博物学: ["自然学"],
  导航: ["领航"],
  操作重型机械: ["重型机械", "重型操作", "重型"]
}, Es = {
  特殊: ["信誉", "克苏鲁神话"],
  探索: [
    "侦查",
    "聆听",
    "图书馆",
    "计算机",
    "潜行",
    "追踪",
    "导航"
  ],
  社交: ["社交", "心理学", "母语", "外语", "读唇"],
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
    "中医",
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
    "风水",
    "稽古",
    "神秘学",
    "考古学",
    // '人类学',
    // '估价',
    // '会计',
    // '法律',
    "历史",
    // '电子学',
    "科学"
  ],
  技术: [
    "乔装",
    "妙手",
    "锁匠",
    "机械维修",
    "电气维修",
    // '驯兽',
    "技艺",
    "生存"
  ],
  操纵: ["汽车驾驶", "驾驶"],
  其它: [""]
}, Ds = [
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
function Cs({
  skills: t,
  groups: e,
  groupOrder: n
}) {
  const r = /* @__PURE__ */ new Map();
  return t.forEach((o) => {
    r.set(o.name, o);
  }), n.map((o) => {
    const s = e[o].map((l) => r.get(l));
    return {
      groupName: o,
      groupSkills: s
    };
  });
}
const Gn = Cs({
  skills: dr,
  groups: Es,
  groupOrder: Ds
}), rn = {
  母语: (t) => t.attributes.edu || 0,
  闪避: (t) => Math.floor((t.attributes.dex || 0) / 2)
};
function za(t) {
  const e = {};
  return dr.forEach((n) => {
    n.group && (e[n.name] = [...n.group.show]);
  }), t && (t.showingChildSkills = e), e;
}
function Rs(t, e) {
  const { attributes: n, deriveAttributes: r, skillPoints: a } = t, {
    str: o = 0,
    con: i = 0,
    siz: s = 0,
    dex: l = 0,
    app: u = 0,
    int: d = 0,
    pow: p = 0,
    edu: c = 0,
    luc: f = 0
  } = n, {
    hp: h = { start: 0 },
    mp: y = { start: 0 },
    sanity: g = { now: 0, start: 0 }
  } = r || {}, v = g.now == null || g.now === "" ? g.start : g.now, I = `${t.name}-力量${o}str${o}敏捷${l}dex${l}体质${i}con${i}外貌${u}app${u}智力${d}灵感${d}int${d}意志${p}pow${p}体型${s}siz${s}教育${c}edu${c}幸运${f}运气${f}luck${f}`, b = `hp${h.start}体力${h.start}mp${y.start}魔法${y.start}san${v}理智${v}理智值${v}san值${v}`;
  let k = "";
  const $ = {};
  return a.forEach(([_, x]) => {
    var U;
    let E, H, C;
    Array.isArray(_) ? ([E, , C] = _, H = (U = e.showingChildSkills[E]) == null ? void 0 : U[C]) : E = _;
    const L = H ? `${E}-${H}` : E;
    $[L] = x;
  }), dr.forEach((_) => {
    var U;
    const { name: x, init: E, group: H } = _;
    let C = rn[x] ? rn[x](t) : E;
    const L = x.includes("Ω") ? x.slice(0, -1) : x;
    if (H) {
      let D = 0;
      if ((U = e.showingChildSkills[x]) == null || U.forEach((T) => {
        var M, K;
        if (!T) return;
        const Q = `${x}-${T}`, Y = $[Q];
        if (x && (C = ((K = (M = _.group) == null ? void 0 : M.skills.find((B) => B.name === T)) == null ? void 0 : K.init) || C), Y) {
          const { b: B = x ? C : 0, p: te = 0, i: fe = 0, g: ve = 0 } = Y;
          D = B + te + fe + ve;
        } else H.show.includes(T) && (D = C);
        T != "步/霰" && (k += `${T}${D}`);
        const Z = Zr[T];
        Z && (k += Z.map((B) => `${B}${D}`).join("")), delete $[Q];
      }), x === "母语")
        if (D)
          k += `母语${D}`;
        else {
          const T = $[x];
          if (T) {
            const { b: Q = x ? C : 0, p: Y = 0, i: Z = 0, g: M = 0 } = T;
            k += `母语${Q + Y + Z + M}`;
          } else
            k += `母语${C}`;
        }
    } else {
      const D = $[x];
      let T = 0;
      if (D) {
        const { b: Y = x ? C : 0, p: Z = 0, i: M = 0, g: K = 0 } = D;
        T = Y + Z + M + K;
      } else
        T = C;
      k += `${L}${T}`;
      const Q = Zr[x];
      Q && (k += Q.map((Y) => `${Y}${T}`).join("")), delete $[x];
    }
  }), `${I}${b}${k}`;
}
const Ne = {
  limitp: 80,
  limiti: 70
};
function La() {
  return {
    showingChildSkills: za(),
    skillLimits: {
      // TODO 技能上限
      pro: (Ne == null ? void 0 : Ne.limitp) || 80,
      interest: (Ne == null ? void 0 : Ne.limiti) || 70
    }
  };
}
function Jt(t) {
  return Object.assign(Ne, t), La();
}
function Os(t) {
  Object.assign(t, La());
}
function Fs(t) {
  be(
    () => t.value.attributes,
    () => {
      var u, d, p, c, f, h;
      let e = "", n = "";
      const { con: r, siz: a, pow: o } = t.value.attributes || {};
      r && a && (e = `${Math.floor((r + a) / 10)}`), o && (n = `${Math.floor(o / 5)}`);
      const i = (d = (u = t.value.deriveAttributes) == null ? void 0 : u.sanity) == null ? void 0 : d.now, s = (c = (p = t.value.deriveAttributes) == null ? void 0 : p.hp) == null ? void 0 : c.now, l = (h = (f = t.value.deriveAttributes) == null ? void 0 : f.mp) == null ? void 0 : h.now;
      t.value.deriveAttributes = {
        sanity: {
          start: `${o || ""}`,
          now: i
        },
        hp: {
          start: e,
          now: s ?? e
        },
        mp: {
          start: n,
          now: l ?? n
        }
      };
    },
    { deep: !0 }
  );
}
const Ms = [
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
    skills: ["会计", "法律", "图书馆", "聆听", "说服", "侦查"]
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
      { 其它: "" }
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
      { 其它: "" }
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
      "图书馆",
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
      { 其它: "" },
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
      "图书馆",
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
      "图书馆",
      "导航",
      ["取悦", "话术", "恐吓", "说服"],
      { 其它: "" }
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
      "图书馆",
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
      ["计算机", "图书馆"]
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
      { 其它: "" }
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
      "图书馆",
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
      { 其它: "" }
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
      "图书馆",
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
      "电气维修",
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
      { "技艺(生活类，如烹饪、裁缝、理发)": "" },
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
      "图书馆",
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
      "计算机",
      "电气维修",
      { 其它: "" },
      "图书馆",
      { 科学: "" },
      "侦查"
    ]
  },
  {
    name: "黑客",
    point: [[["edu", 4]]],
    wealth: [10, 70],
    skills: [
      "计算机",
      "电气维修",
      { 其它: "" },
      "图书馆",
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
      { 其它: "" },
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
      { 其它: "" }
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
      { 其它: "" },
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
      { 其它: "" },
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
      "图书馆",
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
      "图书馆",
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
      { 其它: "" }
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
      { 其它: "" },
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
      ["计算机", "图书馆"]
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
      { 其它: "" }
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
      { 其它: "" }
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
      "图书馆",
      "机械维修",
      { 其它: "" },
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
      { 其它: "" }
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
      { 其它: "" },
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
      { 其它: "" },
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
      { 其它: "" }
    ]
  },
  {
    name: "法医",
    point: [[["edu", 4]]],
    wealth: [40, 60],
    skills: [
      { 外语: "" },
      "图书馆",
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
      { 其它: "" }
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
      { 其它: "" }
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
      { 其它: "" }
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
      { 其它: "" }
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
      [{ 技艺: "艺术" }, { 技艺: "摄影" }],
      "历史",
      "图书馆",
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
      "图书馆",
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
      ["计算机", "图书馆"]
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
      { 其它: "" },
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
      "图书馆",
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      { 其它: "" }
    ]
  },
  {
    name: "图书馆管理员(原作向)",
    point: [[["edu", 4]]],
    wealth: [9, 35],
    skills: ["会计", "图书馆", { 外语: "" }, { 母语: "" }]
  },
  {
    name: "技工",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      { "技艺(木工、焊接、管道工等)": "" },
      "攀爬",
      "汽车驾驶",
      "电气维修",
      "机械维修",
      { 其它: "" }
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
      { 其它: "" }
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
      "图书馆",
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
      { 其它: "" },
      "历史",
      "图书馆",
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
      "图书馆",
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
      { 其它: "" },
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
      "图书馆",
      "心理学",
      "侦查",
      ["取悦", "话术", "恐吓", "说服"],
      [{ 格斗: "" }, { 射击: "" }, "锁匠", "计算机"]
    ]
  },
  {
    name: "教授(原作向)",
    point: [[["edu", 4]]],
    wealth: [20, 70],
    skills: ["图书馆", { 外语: "" }, { 母语: "" }, "心理学"]
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
      { 其它: "" }
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
    skills: ["会计", "图书馆", "聆听", "说服", "精神分析", "心理学"]
  },
  {
    name: "研究员",
    point: [[["edu", 4]]],
    wealth: [9, 30],
    skills: [
      "历史",
      "图书馆",
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
      { 其它: "" },
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
      ["计算机", "图书馆"],
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
      { 其它: "" },
      ["计算机", "图书馆"]
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
      { 其它: "" }
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
    skills: ["图书馆", "聆听", [{ 母语: "" }, { 外语: "" }]]
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
      { 其它: "" },
      "心理学",
      ["取悦", "话术", "恐吓", "说服"],
      { 其它: "" }
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
      { 其它: "" }
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
      ["图书馆", "计算机"],
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
      { 其它: "" }
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
      { 其它: "" }
    ]
  },
  {
    name: "饲养员",
    point: [[["edu", 4]]],
    wealth: [9, 40],
    skills: [
      { 其它: "" },
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
      "武士道",
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
      "图书馆",
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
    name: "言灵师",
    point: [[["edu", 4]]],
    wealth: [9, 20],
    skills: [
      { 技艺: "书法" },
      { 技艺: "" },
      "历史",
      { 科学: "天文学" },
      "神秘学",
      "图书馆",
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
      "图书馆",
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
      { 中医: "" },
      { 中医: "" },
      "图书馆",
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
      { 其它: "" },
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
      "计算机",
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
      { 其它: "" },
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
      { 其它: "" },
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
      { 其它: "" },
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
      { 其它: "" },
      "聆听",
      "心理学",
      "计算机",
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
      { 其它: "" },
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
      { 其它: "" }
    ]
  },
  {
    name: "厨师",
    point: [[["edu", 2]], [["dex", 2]]],
    wealth: [9, 30],
    skills: [
      { 技艺: "烹饪" },
      { 科学: "生物学" },
      { 科学: "化学" },
      { 格斗: "斗殴" },
      "博物学",
      "侦查",
      { 外语: "" }
    ]
  }
], Ts = [
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
      ["厨师", "chushi"]
    ]
  ]
], Hn = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "七",
  8: "八",
  9: "九"
}, Vs = {
  str: "力量",
  dex: "敏捷",
  con: "体质",
  app: "外貌",
  pow: "意志",
  siz: "体型",
  edu: "教育",
  int: "智力"
};
function Us(t, e) {
  const n = /* @__PURE__ */ new Map();
  t.forEach((a) => {
    n.set(a.name, a);
  });
  const r = e.map((a) => {
    const [o, i] = a[0], s = a[1].map(([l, u]) => ({
      name: l,
      pinyin: u
    }));
    return {
      name: o,
      pinyin: i,
      jobs: s
    };
  });
  return {
    jobs: n,
    jobGroups: r
  };
}
const Ft = Us(Ms, Ts);
function Wa(t, e) {
  const n = {
    text: "",
    point: 0
  }, r = Ft.jobs.get(t || "");
  if (!r) return n;
  const a = [];
  return r.point.forEach((o) => {
    const i = [], s = [];
    o.forEach(([u, d]) => {
      i.push(`${Vs[u]}×${d}`), e && s.push((e[u] || 0) * d);
    });
    let l = i.join(" 或 ");
    i.length > 1 && (l = `(${l})`), a.push(l), n.point += Math.max(...s);
  }), n.text = a.join(" + "), n;
}
function Bs(t) {
  return {
    wealth: [-1, -1],
    text: "",
    multiSkills: [],
    multiSkillTexts: [],
    ...t
  };
}
function Ga(t) {
  const { jobs: e } = Ft, n = Bs(), r = e.get(t), a = /* @__PURE__ */ new Map();
  if (!r) return n;
  n.wealth = [...r.wealth], r.skills.forEach((i) => {
    if (typeof i == "string")
      a.set(i, 0);
    else if (Array.isArray(i))
      n.multiSkills.push(
        i.map((s) => {
          if (typeof s == "string") return s;
          const [l, u] = Object.entries(s)[0];
          return { name: l, childName: u };
        })
      );
    else {
      const [s, l] = Object.entries(i)[0];
      let u = s;
      const d = s.includes("(");
      d && (u = u.split("(")[0]);
      let p = u;
      l && (p = `${u}(${l})`), d && (p = s), a.set(
        p,
        d || l ? 0 : (a.get(p) || 0) + 1
      );
    }
  });
  const o = 8 - r.skills.length;
  return n.text = [
    ...a.entries(),
    ...o ? [["其他个人或时代特长", o]] : []
  ].map(
    ([i, s]) => `${i}${s ? `(任${Hn[`${s}`]})` : ""}`
  ).join("、"), n.multiSkillTexts = Ns(n), n;
}
function Ns(t) {
  const e = [];
  return t.multiSkills.forEach((r) => {
    const a = e.findIndex(([o]) => o.every((s, l) => {
      const u = r[l];
      return typeof s == "string" ? s === u : typeof u == "string" ? !1 : s.name === u.name && s.childName === u.childName;
    }));
    a === -1 ? e.push([r, 1, Hn[`${r.length}`]]) : e[a][1] += 1;
  }), e.map((r) => {
    const o = r[0].map((i) => {
      let s = i;
      return typeof i != "string" && (s = `${i.name}:${i.childName || "任一"}`, i.name === "母语" && (s = "母语")), s;
    });
    return `${r[2]}选${Hn[`${r[1]}`]}(${o})`;
  });
}
function js(t, e) {
  const { jobs: n } = Ft, { viewData: r, pageData: a } = e, o = q(() => Ga(t.value.job));
  return be(
    () => t.value.job,
    () => {
      const i = n.get(t.value.job);
      if (!i || a.importing) return;
      r.jobSkills = [...i.skills], za(r), t.value.proSkills = [];
      const s = {};
      i.skills.forEach((l) => {
        if (typeof l == "string")
          t.value.proSkills.push(l);
        else if (!Array.isArray(l)) {
          const [u, d] = Object.entries(l)[0];
          let p = u;
          u.includes("(") && (p = p.split("(")[0]);
          const f = r.showingChildSkills[p];
          if (!f) return;
          let h = -1;
          if (d)
            h = f.findIndex((y) => y === d), h === -1 && (h = f.findIndex((y) => !y), f[h] = d);
          else {
            const y = s[p] || 0;
            let g = y;
            h = f.findIndex((v) => v ? !1 : g-- === 0), s[p] = y + 1;
          }
          if (h === -1) return;
          t.value.proSkills.push([p, d, h]);
        }
      }), delete r.jobSkills;
    }
  ), o;
}
function zs(t) {
  return yo() ? (ho(t), !0) : !1;
}
function It(t) {
  return typeof t == "function" ? t() : A(t);
}
const Ls = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ws = Object.prototype.toString, Gs = (t) => Ws.call(t) === "[object Object]", qn = () => {
};
function Ha(t, e) {
  function n(...r) {
    return new Promise((a, o) => {
      Promise.resolve(t(() => e.apply(this, r), { fn: e, thisArg: this, args: r })).then(a).catch(o);
    });
  }
  return n;
}
const qa = (t) => t();
function Hs(t, e = {}) {
  let n, r, a = qn;
  const o = (s) => {
    clearTimeout(s), a(), a = qn;
  };
  return (s) => {
    const l = It(t), u = It(e.maxWait);
    return n && o(n), l <= 0 || u !== void 0 && u <= 0 ? (r && (o(r), r = null), Promise.resolve(s())) : new Promise((d, p) => {
      a = e.rejectOnCancel ? p : d, u && !r && (r = setTimeout(() => {
        n && o(n), r = null, d(s());
      }, u)), n = setTimeout(() => {
        r && o(r), r = null, d(s());
      }, l);
    });
  };
}
function qs(t = qa) {
  const e = X(!0);
  function n() {
    e.value = !1;
  }
  function r() {
    e.value = !0;
  }
  const a = (...o) => {
    e.value && t(...o);
  };
  return { isActive: fo(e), pause: n, resume: r, eventFilter: a };
}
function Js(t) {
  return mo();
}
function Ks(t, e = 200, n = {}) {
  return Ha(
    Hs(e, n),
    t
  );
}
function Qs(t, e, n = {}) {
  const {
    eventFilter: r = qa,
    ...a
  } = n;
  return be(
    t,
    Ha(
      r,
      e
    ),
    a
  );
}
function Zs(t, e, n = {}) {
  const {
    eventFilter: r,
    ...a
  } = n, { eventFilter: o, pause: i, resume: s, isActive: l } = qs(r);
  return { stop: Qs(
    t,
    e,
    {
      ...a,
      eventFilter: o
    }
  ), pause: i, resume: s, isActive: l };
}
function Xs(t, e = !0, n) {
  Js() ? po(t, n) : e ? t() : Et(t);
}
function Ys(t) {
  var e;
  const n = It(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const Jn = Ls ? window : void 0;
function Xr(...t) {
  let e, n, r, a;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, a] = t, e = Jn) : [e, n, r, a] = t, !e)
    return qn;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], i = () => {
    o.forEach((d) => d()), o.length = 0;
  }, s = (d, p, c, f) => (d.addEventListener(p, c, f), () => d.removeEventListener(p, c, f)), l = be(
    () => [Ys(e), It(a)],
    ([d, p]) => {
      if (i(), !d)
        return;
      const c = Gs(p) ? { ...p } : p;
      o.push(
        ...n.flatMap((f) => r.map((h) => s(d, f, h, c)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), i();
  };
  return zs(u), u;
}
const Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Nt = "__vueuse_ssr_handlers__", eu = /* @__PURE__ */ tu();
function tu() {
  return Nt in Bt || (Bt[Nt] = Bt[Nt] || {}), Bt[Nt];
}
function nu(t, e) {
  return eu[t] || e;
}
function ru(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const au = {
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
}, Yr = "vueuse-storage";
function ea(t, e, n, r = {}) {
  var a;
  const {
    flush: o = "pre",
    deep: i = !0,
    listenToStorageChanges: s = !0,
    writeDefaults: l = !0,
    mergeDefaults: u = !1,
    shallow: d,
    window: p = Jn,
    eventFilter: c,
    onError: f = (C) => {
      console.error(C);
    },
    initOnMounted: h
  } = r, y = (d ? vo : X)(typeof e == "function" ? e() : e);
  if (!n)
    try {
      n = nu("getDefaultStorage", () => {
        var C;
        return (C = Jn) == null ? void 0 : C.localStorage;
      })();
    } catch (C) {
      f(C);
    }
  if (!n)
    return y;
  const g = It(e), v = ru(g), I = (a = r.serializer) != null ? a : au[v], { pause: b, resume: k } = Zs(
    y,
    () => _(y.value),
    { flush: o, deep: i, eventFilter: c }
  );
  p && s && Xs(() => {
    Xr(p, "storage", E), Xr(p, Yr, H), h && E();
  }), h || E();
  function $(C, L) {
    p && p.dispatchEvent(new CustomEvent(Yr, {
      detail: {
        key: t,
        oldValue: C,
        newValue: L,
        storageArea: n
      }
    }));
  }
  function _(C) {
    try {
      const L = n.getItem(t);
      if (C == null)
        $(L, null), n.removeItem(t);
      else {
        const U = I.write(C);
        L !== U && (n.setItem(t, U), $(L, U));
      }
    } catch (L) {
      f(L);
    }
  }
  function x(C) {
    const L = C ? C.newValue : n.getItem(t);
    if (L == null)
      return l && g != null && n.setItem(t, I.write(g)), g;
    if (!C && u) {
      const U = I.read(L);
      return typeof u == "function" ? u(U, g) : v === "object" && !Array.isArray(U) ? { ...g, ...U } : U;
    } else return typeof L != "string" ? L : I.read(L);
  }
  function E(C) {
    if (!(C && C.storageArea !== n)) {
      if (C && C.key == null) {
        y.value = g;
        return;
      }
      if (!(C && C.key !== t)) {
        b();
        try {
          (C == null ? void 0 : C.newValue) !== I.write(y.value) && (y.value = x(C));
        } catch (L) {
          f(L);
        } finally {
          C ? Et(k) : k();
        }
      }
    }
  }
  function H(C) {
    E(C.detail);
  }
  return y;
}
var Ja = /* @__PURE__ */ ((t) => (t.SoxFE = "$sox-trpg", t))(Ja || {}), Ka = /* @__PURE__ */ ((t) => (t.Home = "$home", t.COCCard = "$coc-card", t.ERPCard = "$erp-card", t))(Ka || {});
function ou(t) {
  const {
    namespace: e = Ja.SoxFE,
    app: n,
    versionChecker: r = (I, b) => (b.value = null, -1),
    defaults: a = {}
  } = t, o = window.localStorage, i = `${e}#${n}`, s = `${e}##versionChecker`, l = ea(i, a, o, {
    mergeDefaults: !0
  }), u = ea(s, {}, o), d = u.value[i], p = r(d, l);
  u.value[n] = p;
  function c() {
    return l.value;
  }
  function f() {
    return Object.keys(c()).length;
  }
  function h(I) {
    return l.value[I];
  }
  function y(I, b) {
    l.value[I] = b;
  }
  function g(I) {
    delete l.value[I];
  }
  function v() {
    l.value = null;
  }
  return {
    store: l,
    get namespace() {
      return e;
    },
    get appName() {
      return n;
    },
    get version() {
      return p;
    },
    listItems: c,
    countItems: f,
    getItem: h,
    setItem: y,
    removeItem: g,
    clear: v
  };
}
const iu = ou({
  app: Ka.COCCard,
  versionChecker() {
    return 1.1;
  }
});
function fr() {
  return iu;
}
const xt = "$sox-trpg#$coc-card:card:";
function jt(t, e, n) {
  try {
    const r = {
      pc: JSON.parse(JSON.stringify(e)),
      viewData: JSON.parse(JSON.stringify(n)),
      lastModified: Date.now()
    };
    localStorage.setItem(xt + t, JSON.stringify(r));
  } catch (r) {
    console.error(`[CardStorage] Save failed for ${t}:`, r);
  }
}
function zt(t) {
  try {
    const e = localStorage.getItem(xt + t);
    return e ? JSON.parse(e) : null;
  } catch (e) {
    return console.error(`[CardStorage] Load failed for ${t}:`, e), null;
  }
}
function lu(t) {
  try {
    localStorage.removeItem(xt + t);
  } catch (e) {
    console.error(`[CardStorage] Delete failed for ${t}:`, e);
  }
}
function su(t) {
  let e = 0;
  const n = [];
  for (let r = 0; r < localStorage.length; r++) {
    const a = localStorage.key(r);
    if (a && a.startsWith(xt)) {
      const o = a.substring(xt.length);
      t.has(o) || n.push(a);
    }
  }
  return n.forEach((r) => {
    localStorage.removeItem(r), e++;
  }), e > 0 && console.log(`[CardStorage] Cleaned ${e} orphaned cards`), e;
}
const ie = fr();
function Dn() {
  try {
    return crypto.randomUUID();
  } catch {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
  }
}
function uu(t, e, n) {
  const r = q(() => [...ie.getItem("cardMetaList") ?? []].sort((k, $) => k.createdAt - $.createdAt)), a = q(
    () => ie.getItem("activeCardId") ?? ""
  ), o = q(
    () => r.value.find((b) => b.id === a.value)
  );
  function i() {
    const b = a.value;
    if (!b || n.importing) return;
    jt(b, t.value, e);
    const k = [...r.value], $ = k.findIndex((_) => _.id === b);
    $ !== -1 && (k[$] = {
      ...k[$],
      name: t.value.name || "未命名角色卡",
      lastModified: Date.now()
    }, ie.setItem("cardMetaList", k));
  }
  const s = Ks(() => {
    n.importing || i();
  }, 300);
  function l(b) {
    i();
    const k = Dn(), $ = {
      id: k,
      name: "未命名角色卡",
      saveName: b || `存档 ${r.value.length + 1}`,
      lastModified: Date.now(),
      createdAt: Date.now()
    }, _ = [...r.value, $];
    ie.setItem("cardMetaList", _), ie.setItem("activeCardId", k);
    const x = We(), E = Jt();
    return jt(k, x, E), t.value = x, Object.assign(e, E), k;
  }
  function u(b) {
    const k = zt(b);
    return k ? (n.importing = !0, t.value = We(k.pc), Object.keys(k.viewData).forEach(($) => {
      const _ = $;
      e[_] = k.viewData[_];
    }), setTimeout(() => {
      n.importing = !1;
    }, 50), !0) : !1;
  }
  function d(b) {
    b !== a.value && (i(), zt(b) && (ie.setItem("activeCardId", b), u(b)));
  }
  function p(b) {
    const k = r.value.filter(($) => $.id !== b);
    ie.setItem("cardMetaList", k), lu(b), b === a.value && (k.length > 0 ? d(k[0].id) : l());
  }
  function c(b) {
    const k = zt(b);
    if (!k) return null;
    i();
    const $ = Dn(), _ = r.value.find((H) => H.id === b), x = {
      id: $,
      name: k.pc.name || "未命名角色卡",
      saveName: `${(_ == null ? void 0 : _.saveName) || "存档"} (副本)`,
      lastModified: Date.now(),
      createdAt: Date.now()
    }, E = [...r.value, x];
    return ie.setItem("cardMetaList", E), jt($, k.pc, k.viewData), ie.setItem("activeCardId", $), n.importing = !0, t.value = We(k.pc), Object.keys(k.viewData).forEach((H) => {
      const C = H;
      e[C] = k.viewData[C];
    }), setTimeout(() => {
      n.importing = !1;
    }, 50), $;
  }
  function f(b, k) {
    const $ = [...r.value], _ = $.findIndex((x) => x.id === b);
    _ !== -1 && ($[_] = { ...$[_], saveName: k }, ie.setItem("cardMetaList", $));
  }
  function h() {
    n.importing = !0, t.value = We(), Object.assign(e, Jt()), setTimeout(() => {
      n.importing = !1, i();
    }, 50);
  }
  function y() {
    const b = ie.getItem("cardMetaList");
    if (b && b.length > 0) {
      const $ = [...b].sort((E, H) => E.createdAt - H.createdAt);
      ie.setItem("cardMetaList", $);
      const _ = new Set($.map((E) => E.id));
      su(_);
      const x = a.value || $[0].id;
      if (ie.setItem("activeCardId", x), !u(x)) {
        const E = $.find((H) => zt(H.id) != null);
        E ? (ie.setItem("activeCardId", E.id), u(E.id)) : l();
      }
      return;
    }
    const k = ie.getItem("autoSaved");
    if (k != null && k.pc) {
      const $ = Dn(), _ = {
        id: $,
        name: k.pc.name || "未命名角色卡",
        saveName: "迁移的存档",
        lastModified: k.lastModified || Date.now(),
        createdAt: Date.now()
      };
      ie.setItem("cardMetaList", [_]), ie.setItem("activeCardId", $), jt($, k.pc, k.viewData || Jt()), ie.removeItem("autoSaved"), u($);
      return;
    }
    l();
  }
  let g = null;
  function v() {
    g = be(
      () => [t.value, e],
      () => {
        n.importing || s();
      },
      { deep: !0 }
    );
  }
  function I() {
    g == null || g();
  }
  return typeof window < "u" && window.addEventListener("beforeunload", i), {
    metaList: r,
    activeCardId: a,
    currentMeta: o,
    createCard: l,
    switchCard: d,
    deleteCard: p,
    duplicateCard: c,
    renameCard: f,
    resetCurrentCard: h,
    flushSave: i,
    init: y,
    startAutoSave: v,
    stopAutoSave: I
  };
}
var mr = { exports: {} };
mr.exports;
(function(t) {
  var e = function() {
    var n = String.fromCharCode, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", o = {};
    function i(l, u) {
      if (!o[l]) {
        o[l] = {};
        for (var d = 0; d < l.length; d++)
          o[l][l.charAt(d)] = d;
      }
      return o[l][u];
    }
    var s = {
      compressToBase64: function(l) {
        if (l == null) return "";
        var u = s._compress(l, 6, function(d) {
          return r.charAt(d);
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
      decompressFromBase64: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32, function(u) {
          return i(r, l.charAt(u));
        });
      },
      compressToUTF16: function(l) {
        return l == null ? "" : s._compress(l, 15, function(u) {
          return n(u + 32);
        }) + " ";
      },
      decompressFromUTF16: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 16384, function(u) {
          return l.charCodeAt(u) - 32;
        });
      },
      //compress into uint8array (UCS-2 big endian format)
      compressToUint8Array: function(l) {
        for (var u = s.compress(l), d = new Uint8Array(u.length * 2), p = 0, c = u.length; p < c; p++) {
          var f = u.charCodeAt(p);
          d[p * 2] = f >>> 8, d[p * 2 + 1] = f % 256;
        }
        return d;
      },
      //decompress from uint8array (UCS-2 big endian format)
      decompressFromUint8Array: function(l) {
        if (l == null)
          return s.decompress(l);
        for (var u = new Array(l.length / 2), d = 0, p = u.length; d < p; d++)
          u[d] = l[d * 2] * 256 + l[d * 2 + 1];
        var c = [];
        return u.forEach(function(f) {
          c.push(n(f));
        }), s.decompress(c.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(l) {
        return l == null ? "" : s._compress(l, 6, function(u) {
          return a.charAt(u);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(l) {
        return l == null ? "" : l == "" ? null : (l = l.replace(/ /g, "+"), s._decompress(l.length, 32, function(u) {
          return i(a, l.charAt(u));
        }));
      },
      compress: function(l) {
        return s._compress(l, 16, function(u) {
          return n(u);
        });
      },
      _compress: function(l, u, d) {
        if (l == null) return "";
        var p, c, f = {}, h = {}, y = "", g = "", v = "", I = 2, b = 3, k = 2, $ = [], _ = 0, x = 0, E;
        for (E = 0; E < l.length; E += 1)
          if (y = l.charAt(E), Object.prototype.hasOwnProperty.call(f, y) || (f[y] = b++, h[y] = !0), g = v + y, Object.prototype.hasOwnProperty.call(f, g))
            v = g;
          else {
            if (Object.prototype.hasOwnProperty.call(h, v)) {
              if (v.charCodeAt(0) < 256) {
                for (p = 0; p < k; p++)
                  _ = _ << 1, x == u - 1 ? (x = 0, $.push(d(_)), _ = 0) : x++;
                for (c = v.charCodeAt(0), p = 0; p < 8; p++)
                  _ = _ << 1 | c & 1, x == u - 1 ? (x = 0, $.push(d(_)), _ = 0) : x++, c = c >> 1;
              } else {
                for (c = 1, p = 0; p < k; p++)
                  _ = _ << 1 | c, x == u - 1 ? (x = 0, $.push(d(_)), _ = 0) : x++, c = 0;
                for (c = v.charCodeAt(0), p = 0; p < 16; p++)
                  _ = _ << 1 | c & 1, x == u - 1 ? (x = 0, $.push(d(_)), _ = 0) : x++, c = c >> 1;
              }
              I--, I == 0 && (I = Math.pow(2, k), k++), delete h[v];
            } else
              for (c = f[v], p = 0; p < k; p++)
                _ = _ << 1 | c & 1, x == u - 1 ? (x = 0, $.push(d(_)), _ = 0) : x++, c = c >> 1;
            I--, I == 0 && (I = Math.pow(2, k), k++), f[g] = b++, v = String(y);
          }
        if (v !== "") {
          if (Object.prototype.hasOwnProperty.call(h, v)) {
            if (v.charCodeAt(0) < 256) {
              for (p = 0; p < k; p++)
                _ = _ << 1, x == u - 1 ? (x = 0, $.push(d(_)), _ = 0) : x++;
              for (c = v.charCodeAt(0), p = 0; p < 8; p++)
                _ = _ << 1 | c & 1, x == u - 1 ? (x = 0, $.push(d(_)), _ = 0) : x++, c = c >> 1;
            } else {
              for (c = 1, p = 0; p < k; p++)
                _ = _ << 1 | c, x == u - 1 ? (x = 0, $.push(d(_)), _ = 0) : x++, c = 0;
              for (c = v.charCodeAt(0), p = 0; p < 16; p++)
                _ = _ << 1 | c & 1, x == u - 1 ? (x = 0, $.push(d(_)), _ = 0) : x++, c = c >> 1;
            }
            I--, I == 0 && (I = Math.pow(2, k), k++), delete h[v];
          } else
            for (c = f[v], p = 0; p < k; p++)
              _ = _ << 1 | c & 1, x == u - 1 ? (x = 0, $.push(d(_)), _ = 0) : x++, c = c >> 1;
          I--, I == 0 && (I = Math.pow(2, k), k++);
        }
        for (c = 2, p = 0; p < k; p++)
          _ = _ << 1 | c & 1, x == u - 1 ? (x = 0, $.push(d(_)), _ = 0) : x++, c = c >> 1;
        for (; ; )
          if (_ = _ << 1, x == u - 1) {
            $.push(d(_));
            break;
          } else x++;
        return $.join("");
      },
      decompress: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32768, function(u) {
          return l.charCodeAt(u);
        });
      },
      _decompress: function(l, u, d) {
        var p = [], c = 4, f = 4, h = 3, y = "", g = [], v, I, b, k, $, _, x, E = { val: d(0), position: u, index: 1 };
        for (v = 0; v < 3; v += 1)
          p[v] = v;
        for (b = 0, $ = Math.pow(2, 2), _ = 1; _ != $; )
          k = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = d(E.index++)), b |= (k > 0 ? 1 : 0) * _, _ <<= 1;
        switch (b) {
          case 0:
            for (b = 0, $ = Math.pow(2, 8), _ = 1; _ != $; )
              k = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = d(E.index++)), b |= (k > 0 ? 1 : 0) * _, _ <<= 1;
            x = n(b);
            break;
          case 1:
            for (b = 0, $ = Math.pow(2, 16), _ = 1; _ != $; )
              k = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = d(E.index++)), b |= (k > 0 ? 1 : 0) * _, _ <<= 1;
            x = n(b);
            break;
          case 2:
            return "";
        }
        for (p[3] = x, I = x, g.push(x); ; ) {
          if (E.index > l)
            return "";
          for (b = 0, $ = Math.pow(2, h), _ = 1; _ != $; )
            k = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = d(E.index++)), b |= (k > 0 ? 1 : 0) * _, _ <<= 1;
          switch (x = b) {
            case 0:
              for (b = 0, $ = Math.pow(2, 8), _ = 1; _ != $; )
                k = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = d(E.index++)), b |= (k > 0 ? 1 : 0) * _, _ <<= 1;
              p[f++] = n(b), x = f - 1, c--;
              break;
            case 1:
              for (b = 0, $ = Math.pow(2, 16), _ = 1; _ != $; )
                k = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = u, E.val = d(E.index++)), b |= (k > 0 ? 1 : 0) * _, _ <<= 1;
              p[f++] = n(b), x = f - 1, c--;
              break;
            case 2:
              return g.join("");
          }
          if (c == 0 && (c = Math.pow(2, h), h++), p[x])
            y = p[x];
          else if (x === f)
            y = I + I.charAt(0);
          else
            return null;
          g.push(y), p[f++] = I + y.charAt(0), c--, I = y, c == 0 && (c = Math.pow(2, h), h++);
        }
      }
    };
    return s;
  }();
  t != null ? t.exports = e : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return e;
  });
})(mr);
var cu = mr.exports;
const ta = /* @__PURE__ */ Zn(cu);
var pu = function() {
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
    t.type === "Caret" && t.removeAllRanges(), t.rangeCount || n.forEach(function(a) {
      t.addRange(a);
    }), e && e.focus();
  };
}, du = pu, na = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, fu = "Copy to clipboard: #{key}, Enter";
function mu(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function yu(t, e) {
  var n, r, a, o, i, s, l = !1;
  e || (e = {}), n = e.debug || !1;
  try {
    a = du(), o = document.createRange(), i = document.getSelection(), s = document.createElement("span"), s.textContent = t, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(d) {
      if (d.stopPropagation(), e.format)
        if (d.preventDefault(), typeof d.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var p = na[e.format] || na.default;
          window.clipboardData.setData(p, t);
        } else
          d.clipboardData.clearData(), d.clipboardData.setData(e.format, t);
      e.onCopy && (d.preventDefault(), e.onCopy(d.clipboardData));
    }), document.body.appendChild(s), o.selectNodeContents(s), i.addRange(o);
    var u = document.execCommand("copy");
    if (!u)
      throw new Error("copy command was unsuccessful");
    l = !0;
  } catch (d) {
    n && console.error("unable to copy using execCommand: ", d), n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), l = !0;
    } catch (p) {
      n && console.error("unable to copy using clipboardData: ", p), n && console.error("falling back to prompt"), r = mu("message" in e ? e.message : fu), window.prompt(r, t);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(o) : i.removeAllRanges()), s && document.body.removeChild(s), a();
  }
  return l;
}
var hu = yu;
const Qa = /* @__PURE__ */ Zn(hu);
/*! Element Plus Icons Vue v2.3.1 */
var vu = /* @__PURE__ */ R({
  name: "CloseBold",
  __name: "close-bold",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), gu = vu, bu = /* @__PURE__ */ R({
  name: "CopyDocument",
  __name: "copy-document",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64z"
      }),
      m("path", {
        fill: "currentColor",
        d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64"
      })
    ]));
  }
}), wu = bu, _u = /* @__PURE__ */ R({
  name: "Delete",
  __name: "delete",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
      })
    ]));
  }
}), Su = _u, ku = /* @__PURE__ */ R({
  name: "Dessert",
  __name: "dessert",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416m287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48m339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736M384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64"
      })
    ]));
  }
}), Au = ku, $u = /* @__PURE__ */ R({
  name: "DocumentCopy",
  __name: "document-copy",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M128 320v576h576V320zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32M960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32M256 672h320v64H256zm0-192h320v64H256z"
      })
    ]));
  }
}), Za = $u, Pu = /* @__PURE__ */ R({
  name: "Download",
  __name: "download",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z"
      })
    ]));
  }
}), Iu = Pu, xu = /* @__PURE__ */ R({
  name: "FolderOpened",
  __name: "folder-opened",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896"
      })
    ]));
  }
}), Eu = xu, Du = /* @__PURE__ */ R({
  name: "More",
  __name: "more",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96"
      })
    ]));
  }
}), Cu = Du, Ru = /* @__PURE__ */ R({
  name: "Plus",
  __name: "plus",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), Ou = Ru, Fu = /* @__PURE__ */ R({
  name: "Reading",
  __name: "reading",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
      }),
      m("path", {
        fill: "currentColor",
        d: "M480 192h64v704h-64z"
      })
    ]));
  }
}), Mu = Fu, Tu = /* @__PURE__ */ R({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Vu = Tu, Uu = /* @__PURE__ */ R({
  name: "Select",
  __name: "select",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), Bu = Uu, Nu = /* @__PURE__ */ R({
  name: "Upload",
  __name: "upload",
  setup(t) {
    return (e, n) => (w(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z"
      })
    ]));
  }
}), Xa = Nu;
const ju = /* @__PURE__ */ R({
  __name: "ActionButton",
  props: {
    fullWidth: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "button" }
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => (w(), J(ha(e.tag), {
      class: W(["action-button", {
        "action-button-full-width": e.fullWidth
      }]),
      onClick: n[0] || (n[0] = (r) => e.$emit("click", r)),
      disabled: e.disabled
    }, {
      default: F(() => [
        Pt(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "disabled"]));
  }
}), V = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, a] of e)
    n[r] = a;
  return n;
}, zu = /* @__PURE__ */ V(ju, [["__scopeId", "data-v-b309c855"]]), Lu = /* @__PURE__ */ R({
  __name: "ControlButton",
  props: {
    label: {},
    icon: {}
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => {
      const r = pe("el-icon");
      return w(), J(zu, {
        class: "control-button",
        onClick: n[0] || (n[0] = (a) => e.$emit("click", a))
      }, {
        default: F(() => [
          S(r, { size: "0.9em" }, {
            default: F(() => [
              (w(), J(ha(e.icon)))
            ]),
            _: 1
          }),
          Ze(" " + O(e.label), 1)
        ]),
        _: 1
      });
    };
  }
}), je = /* @__PURE__ */ V(Lu, [["__scopeId", "data-v-7ceba4b3"]]), dt = /* @__PURE__ */ R({
  __name: "ControlDialog",
  props: {
    title: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (e, n) => {
      const r = pe("el-dialog");
      return w(), J(r, {
        class: "coc-card-control-dialog",
        "append-to-body": "",
        "align-center": "",
        title: e.$props.title,
        modelValue: e.$props.modelValue,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => e.$emit("update:modelValue", a))
      }, {
        default: F(() => [
          Pt(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["title", "modelValue"]);
    };
  }
});
function Wu(t, e) {
  if (window.downloadAndSaveFile)
    window.downloadAndSaveFile(t, e);
  else {
    const n = document.createElement("a");
    n.href = t, n.download = e, n.click();
  }
}
function Gu(t, e = "image") {
  Wu(t, e);
}
const Hu = { class: "downloader-item" }, qu = { class: "downloader-item-preview" }, Ju = ["src"], Ku = {
  key: 1,
  class: "downloader-item-file"
}, Qu = { key: 2 }, Zu = { class: "downloader-item-info" }, Xu = { class: "downloader-item-title" }, Yu = { class: "preview-full-image-container" }, ec = ["src"], tc = /* @__PURE__ */ R({
  __name: "DownloaderItem",
  props: {
    title: {},
    previewImage: {},
    refreshable: { type: Boolean },
    download: {}
  },
  emits: ["refresh", "downloaded"],
  setup(t, { emit: e }) {
    const n = t, r = e, a = X(!1), o = q(() => {
      if (!n.download) return "";
      const { name: l, type: u } = n.download;
      return `${l}${n.title}.${u}`;
    });
    function i() {
      if (!n.download) return;
      const { url: l } = n.download;
      Gu(l, o.value), r("downloaded");
    }
    function s() {
      a.value = !0;
    }
    return (l, u) => {
      var d;
      return w(), P("div", Hu, [
        m("div", qu, [
          l.previewImage ? (w(), P("img", {
            key: 0,
            class: "downloader-item-image",
            src: l.previewImage,
            onClick: s
          }, null, 8, Ju)) : ((d = l.download) == null ? void 0 : d.type) === "txt" ? (w(), P("div", Ku, O(o.value), 1)) : (w(), P("div", Qu, "预览图加载失败，这不应该，请尝试刷新"))
        ]),
        m("div", Zu, [
          m("div", Xu, O(l.title), 1),
          m("div", {
            class: "downloader-item-button",
            onClick: i
          }, " 下载 "),
          l.refreshable ? (w(), P("div", {
            key: 0,
            class: "downloader-item-button",
            onClick: u[0] || (u[0] = (p) => l.$emit("refresh"))
          }, " 重新生成 ")) : G("", !0)
        ]),
        S(dt, {
          modelValue: a.value,
          "onUpdate:modelValue": u[1] || (u[1] = (p) => a.value = p),
          title: "预览大图"
        }, {
          default: F(() => [
            m("div", Yu, [
              l.previewImage ? (w(), P("img", {
                key: 0,
                class: "preview-full-image",
                src: l.previewImage
              }, null, 8, ec)) : G("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), Cn = /* @__PURE__ */ V(tc, [["__scopeId", "data-v-712d81a0"]]);
function ae() {
  return Xe("pc");
}
function Ae() {
  return Xe("pageData");
}
function cn() {
  return Xe("viewData");
}
function Ya() {
  return Xe("suggestion");
}
const nc = { class: "jobs-container" }, rc = { class: "job-card-header" }, ac = ["onClick"], oc = { class: "job-card-row" }, ic = { key: 0 }, lc = { class: "job-card-row" }, sc = /* @__PURE__ */ R({
  __name: "JobList",
  props: {
    label: {}
  },
  setup(t) {
    const { jobGroups: e, jobs: n } = Ft, r = ae(), a = X([]), o = q(() => e.map((s) => ({
      name: s.name,
      items: s.jobs.map((l) => {
        const u = n.get(l.name), d = Ga(u.name), p = d.multiSkillTexts.map((h) => `${h}、`).join("") + d.text, { point: c, text: f } = Wa(
          u.name,
          r == null ? void 0 : r.value.attributes
        );
        return {
          name: u.name,
          wealth: u.wealth,
          skillText: p,
          pointText: f,
          pointValue: c
        };
      })
    })));
    function i(s) {
      r && (r.value.job = s);
    }
    return (s, l) => {
      const u = pe("el-icon"), d = pe("el-collapse-item"), p = pe("el-collapse");
      return w(), P("div", null, [
        S(p, {
          class: "job-list",
          modelValue: a.value,
          "onUpdate:modelValue": l[0] || (l[0] = (c) => a.value = c)
        }, {
          default: F(() => [
            (w(!0), P(ee, null, re(o.value, (c) => (w(), J(d, {
              key: c.name,
              title: c.name,
              name: c.name
            }, {
              default: F(() => [
                m("div", nc, [
                  (w(!0), P(ee, null, re(c.items, (f) => (w(), P("div", {
                    key: f.name,
                    class: "job-card"
                  }, [
                    m("div", rc, [
                      m("span", null, O(f.name), 1),
                      m("span", null, "信用评级：" + O(f.wealth[0]) + "~" + O(f.wealth[1]), 1),
                      m("a", {
                        class: "job-card-action-use",
                        onClick: () => i(f.name)
                      }, [
                        S(u, { size: "0.9em" }, {
                          default: F(() => [
                            S(A(Xa))
                          ]),
                          _: 1
                        }),
                        Ze(" 使用 ")
                      ], 8, ac)
                    ]),
                    m("div", oc, [
                      m("span", null, "职业点数：" + O(f.pointText), 1),
                      f.pointValue ? (w(), P("span", ic, " (当前结果: " + O(f.pointValue) + ") ", 1)) : G("", !0)
                    ]),
                    m("div", lc, "本职技能：" + O(f.skillText), 1)
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
}), uc = /* @__PURE__ */ V(sc, [["__scopeId", "data-v-a6021bb3"]]), cc = { class: "weapons-container" }, pc = { class: "weapon-card-header" }, dc = { class: "weapon-card-row" }, fc = { class: "weapon-card-row" }, mc = { class: "weapon-card-row weapon-card-row-4" }, yc = ["onClick"], hc = /* @__PURE__ */ R({
  __name: "WeaponList",
  props: {
    label: {}
  },
  setup(t) {
    const e = wo, n = ae(), r = X([]), a = q(() => {
      const c = new Map(
        pr.map((f) => [
          f.name,
          {
            ...f,
            range: `${Number(f.range)}` === f.range ? `${f.range}m` : f.range
          }
        ])
      );
      return ja.map(([f, h]) => ({
        name: h,
        groupKey: f,
        items: Na[f].map((y) => c.get(y))
      }));
    });
    function o(c) {
      return `${Number(c)}` === c ? `${c}m` : c || "N/A";
    }
    const i = X([]), s = X(-1), l = X(!1);
    function u(c) {
      const f = c.target, h = i.value.findIndex((y) => y.el === f);
      h !== -1 && (s.value = h, l.value = !0);
    }
    function d() {
      l.value = !1;
    }
    function p(c, f) {
      !n || !f || (n.value.weapons[c] = f);
    }
    return (c, f) => {
      var I;
      const h = pe("el-icon"), y = pe("el-collapse-item"), g = pe("el-collapse"), v = pe("el-popover");
      return w(), P("div", null, [
        S(g, {
          class: "weapon-list",
          modelValue: r.value,
          "onUpdate:modelValue": f[0] || (f[0] = (b) => r.value = b)
        }, {
          default: F(() => [
            (w(!0), P(ee, null, re(a.value, (b) => (w(), J(y, {
              key: b.groupKey,
              title: b.name,
              name: b.groupKey
            }, {
              default: F(() => [
                m("div", cc, [
                  (w(!0), P(ee, null, re(b.items, (k) => (w(), P("div", {
                    key: k.name,
                    class: "weapon-card"
                  }, [
                    m("div", pc, [
                      m("span", null, "【" + O(k.name) + "】" + O(k.skill), 1),
                      Ve((w(), P("a", {
                        class: "job-card-action job-card-action-use",
                        ref_for: !0,
                        ref: ($) => {
                          i.value.push({
                            el: $,
                            weapon: k
                          });
                        },
                        onClick: u
                      }, [
                        S(h, {
                          size: "0.9em",
                          class: "job-card-action-use-icon"
                        }, {
                          default: F(() => [
                            S(A(Xa))
                          ]),
                          _: 1
                        }),
                        Ze(" 使用 ")
                      ])), [
                        [A(e), d]
                      ])
                    ]),
                    m("div", dc, [
                      m("span", null, "伤害：" + O(k.dam), 1),
                      m("span", null, "次数：" + O(k.round || "N/A"), 1),
                      m("span", null, O(k.tho ? "贯穿" : "非贯穿"), 1)
                    ]),
                    m("div", fc, [
                      m("span", null, "射程：" + O(o(k.range)), 1),
                      m("span", null, "装弹量：" + O(k.num || "N/A"), 1),
                      m("span", null, "故障率：" + O(k.err || "N/A"), 1)
                    ]),
                    m("div", mc, [
                      m("span", null, "年代：" + O(k.time), 1),
                      m("span", null, "价格：" + O(k.price || "N/A"), 1)
                    ])
                  ]))), 128))
                ])
              ]),
              _: 2
            }, 1032, ["title", "name"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        S(v, {
          placement: "left-start",
          "popper-class": "weapon-card-places-container",
          trigger: "click",
          "virtual-triggering": "",
          visible: l.value,
          width: 200,
          "virtual-ref": (I = i.value[s.value]) == null ? void 0 : I.el
        }, {
          default: F(() => [
            (w(), P(ee, null, re(5, (b) => m("a", {
              key: b,
              class: "job-card-action",
              onClick: (k) => {
                var $;
                return p(b - 1, ($ = i.value[s.value]) == null ? void 0 : $.weapon);
              }
            }, O(b), 9, yc)), 64))
          ]),
          _: 1
        }, 8, ["visible", "virtual-ref"])
      ]);
    };
  }
}), vc = /* @__PURE__ */ V(hc, [["__scopeId", "data-v-c2affb32"]]), gc = (t) => (De("data-v-2efb87e1"), t = t(), Ce(), t), bc = { class: "modal-body" }, wc = { class: "group" }, _c = /* @__PURE__ */ gc(() => /* @__PURE__ */ m("div", null, "录卡指令", -1)), Sc = /* @__PURE__ */ R({
  __name: "DiceMaid",
  setup(t) {
    const e = ae(), n = cn(), r = q(
      () => ".st " + (e && n ? Rs(e.value, n) : "")
    ), a = X(!1);
    function o() {
      a.value = !0;
    }
    function i(l) {
      var u;
      (u = l.target) == null || u.select();
    }
    function s() {
      Qa(r.value), Se.success("已复制录卡指令");
    }
    return (l, u) => {
      const d = pe("el-input");
      return w(), P(ee, null, [
        S(je, {
          label: "骰娘指令",
          icon: A(Au),
          onClick: o
        }, null, 8, ["icon"]),
        S(dt, {
          title: "骰娘相关",
          modelValue: a.value,
          "onUpdate:modelValue": u[0] || (u[0] = (p) => a.value = p)
        }, {
          default: F(() => [
            m("div", bc, [
              m("div", wc, [
                m("div", { class: "label" }, [
                  _c,
                  m("div", null, [
                    m("a", {
                      class: "link",
                      onClick: s
                    }, " 复制 ")
                  ])
                ]),
                S(d, {
                  type: "textarea",
                  rows: 5,
                  value: r.value,
                  readonly: "",
                  onFocus: i
                }, null, 8, ["value"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), kc = /* @__PURE__ */ V(Sc, [["__scopeId", "data-v-2efb87e1"]]);
function Ac(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), a = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(a), e && (r.href = e), a.href = t, a.href;
}
const $c = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function Ee(t) {
  const e = [];
  for (let n = 0, r = t.length; n < r; n++)
    e.push(t[n]);
  return e;
}
function an(t, e) {
  const r = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function Pc(t) {
  const e = an(t, "border-left-width"), n = an(t, "border-right-width");
  return t.clientWidth + e + n;
}
function Ic(t) {
  const e = an(t, "border-top-width"), n = an(t, "border-bottom-width");
  return t.clientHeight + e + n;
}
function eo(t, e = {}) {
  const n = e.width || Pc(t), r = e.height || Ic(t);
  return { width: n, height: r };
}
function xc() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const n = e && e.env ? e.env.devicePixelRatio : null;
  return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const ge = 16384;
function Ec(t) {
  (t.width > ge || t.height > ge) && (t.width > ge && t.height > ge ? t.width > t.height ? (t.height *= ge / t.width, t.width = ge) : (t.width *= ge / t.height, t.height = ge) : t.width > ge ? (t.height *= ge / t.width, t.width = ge) : (t.width *= ge / t.height, t.height = ge));
}
function on(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.decode = () => e(r), r.onload = () => e(r), r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = t;
  });
}
async function Dc(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Cc(t, e, n) {
  const r = "http://www.w3.org/2000/svg", a = document.createElementNS(r, "svg"), o = document.createElementNS(r, "foreignObject");
  return a.setAttribute("width", `${e}`), a.setAttribute("height", `${n}`), a.setAttribute("viewBox", `0 0 ${e} ${n}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), a.appendChild(o), o.appendChild(t), Dc(a);
}
const he = (t, e) => {
  if (t instanceof e)
    return !0;
  const n = Object.getPrototypeOf(t);
  return n === null ? !1 : n.constructor.name === e.name || he(n, e);
};
function Rc(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Oc(t) {
  return Ee(t).map((e) => {
    const n = t.getPropertyValue(e), r = t.getPropertyPriority(e);
    return `${e}: ${n}${r ? " !important" : ""};`;
  }).join(" ");
}
function Fc(t, e, n) {
  const r = `.${t}:${e}`, a = n.cssText ? Rc(n) : Oc(n);
  return document.createTextNode(`${r}{${a}}`);
}
function ra(t, e, n) {
  const r = window.getComputedStyle(t, n), a = r.getPropertyValue("content");
  if (a === "" || a === "none")
    return;
  const o = $c();
  try {
    e.className = `${e.className} ${o}`;
  } catch {
    return;
  }
  const i = document.createElement("style");
  i.appendChild(Fc(o, n, r)), e.appendChild(i);
}
function Mc(t, e) {
  ra(t, e, ":before"), ra(t, e, ":after");
}
const aa = "application/font-woff", oa = "image/jpeg", Tc = {
  woff: aa,
  woff2: aa,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: oa,
  jpeg: oa,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Vc(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function yr(t) {
  const e = Vc(t).toLowerCase();
  return Tc[e] || "";
}
function Uc(t) {
  return t.split(/,/)[1];
}
function Kn(t) {
  return t.search(/^(data:)/) !== -1;
}
function Bc(t, e) {
  return `data:${e};base64,${t}`;
}
async function to(t, e, n) {
  const r = await fetch(t, e);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const a = await r.blob();
  return new Promise((o, i) => {
    const s = new FileReader();
    s.onerror = i, s.onloadend = () => {
      try {
        o(n({ res: r, result: s.result }));
      } catch (l) {
        i(l);
      }
    }, s.readAsDataURL(a);
  });
}
const Rn = {};
function Nc(t, e, n) {
  let r = t.replace(/\?.*/, "");
  return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? `[${e}]${r}` : r;
}
async function hr(t, e, n) {
  const r = Nc(t, e, n.includeQueryParams);
  if (Rn[r] != null)
    return Rn[r];
  n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let a;
  try {
    const o = await to(t, n.fetchRequestInit, ({ res: i, result: s }) => (e || (e = i.headers.get("Content-Type") || ""), Uc(s)));
    a = Bc(o, e);
  } catch (o) {
    a = n.imagePlaceholder || "";
    let i = `Failed to fetch resource: ${t}`;
    o && (i = typeof o == "string" ? o : o.message), i && console.warn(i);
  }
  return Rn[r] = a, a;
}
async function jc(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : on(e);
}
async function zc(t, e) {
  if (t.currentSrc) {
    const o = document.createElement("canvas"), i = o.getContext("2d");
    o.width = t.clientWidth, o.height = t.clientHeight, i == null || i.drawImage(t, 0, 0, o.width, o.height);
    const s = o.toDataURL();
    return on(s);
  }
  const n = t.poster, r = yr(n), a = await hr(n, r, e);
  return on(a);
}
async function Lc(t) {
  var e;
  try {
    if (!((e = t == null ? void 0 : t.contentDocument) === null || e === void 0) && e.body)
      return await pn(t.contentDocument.body, {}, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function Wc(t, e) {
  return he(t, HTMLCanvasElement) ? jc(t) : he(t, HTMLVideoElement) ? zc(t, e) : he(t, HTMLIFrameElement) ? Lc(t) : t.cloneNode(!1);
}
const Gc = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
async function Hc(t, e, n) {
  var r, a;
  let o = [];
  return Gc(t) && t.assignedNodes ? o = Ee(t.assignedNodes()) : he(t, HTMLIFrameElement) && (!((r = t.contentDocument) === null || r === void 0) && r.body) ? o = Ee(t.contentDocument.body.childNodes) : o = Ee(((a = t.shadowRoot) !== null && a !== void 0 ? a : t).childNodes), o.length === 0 || he(t, HTMLVideoElement) || await o.reduce((i, s) => i.then(() => pn(s, n)).then((l) => {
    l && e.appendChild(l);
  }), Promise.resolve()), e;
}
function qc(t, e) {
  const n = e.style;
  if (!n)
    return;
  const r = window.getComputedStyle(t);
  r.cssText ? (n.cssText = r.cssText, n.transformOrigin = r.transformOrigin) : Ee(r).forEach((a) => {
    let o = r.getPropertyValue(a);
    a === "font-size" && o.endsWith("px") && (o = `${Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1}px`), he(t, HTMLIFrameElement) && a === "display" && o === "inline" && (o = "block"), a === "d" && e.getAttribute("d") && (o = `path(${e.getAttribute("d")})`), n.setProperty(a, o, r.getPropertyPriority(a));
  });
}
function Jc(t, e) {
  he(t, HTMLTextAreaElement) && (e.innerHTML = t.value), he(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function Kc(t, e) {
  if (he(t, HTMLSelectElement)) {
    const n = e, r = Array.from(n.children).find((a) => t.value === a.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function Qc(t, e) {
  return he(e, Element) && (qc(t, e), Mc(t, e), Jc(t, e), Kc(t, e)), e;
}
async function Zc(t, e) {
  const n = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (n.length === 0)
    return t;
  const r = {};
  for (let o = 0; o < n.length; o++) {
    const s = n[o].getAttribute("xlink:href");
    if (s) {
      const l = t.querySelector(s), u = document.querySelector(s);
      !l && u && !r[s] && (r[s] = await pn(u, e, !0));
    }
  }
  const a = Object.values(r);
  if (a.length) {
    const o = "http://www.w3.org/1999/xhtml", i = document.createElementNS(o, "svg");
    i.setAttribute("xmlns", o), i.style.position = "absolute", i.style.width = "0", i.style.height = "0", i.style.overflow = "hidden", i.style.display = "none";
    const s = document.createElementNS(o, "defs");
    i.appendChild(s);
    for (let l = 0; l < a.length; l++)
      s.appendChild(a[l]);
    t.appendChild(i);
  }
  return t;
}
async function pn(t, e, n) {
  return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((r) => Wc(r, e)).then((r) => Hc(t, r, e)).then((r) => Qc(t, r)).then((r) => Zc(r, e));
}
const no = /url\((['"]?)([^'"]+?)\1\)/g, Xc = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Yc = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function ep(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function tp(t) {
  const e = [];
  return t.replace(no, (n, r, a) => (e.push(a), n)), e.filter((n) => !Kn(n));
}
async function np(t, e, n, r, a) {
  try {
    const o = n ? Ac(e, n) : e, i = yr(e);
    let s;
    return a || (s = await hr(o, i, r)), t.replace(ep(e), `$1${s}$3`);
  } catch {
  }
  return t;
}
function rp(t, { preferredFontFormat: e }) {
  return e ? t.replace(Yc, (n) => {
    for (; ; ) {
      const [r, , a] = Xc.exec(n) || [];
      if (!a)
        return "";
      if (a === e)
        return `src: ${r};`;
    }
  }) : t;
}
function ro(t) {
  return t.search(no) !== -1;
}
async function ao(t, e, n) {
  if (!ro(t))
    return t;
  const r = rp(t, n);
  return tp(r).reduce((o, i) => o.then((s) => np(s, i, e, n)), Promise.resolve(r));
}
async function Lt(t, e, n) {
  var r;
  const a = (r = e.style) === null || r === void 0 ? void 0 : r.getPropertyValue(t);
  if (a) {
    const o = await ao(a, null, n);
    return e.style.setProperty(t, o, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function ap(t, e) {
  await Lt("background", t, e) || await Lt("background-image", t, e), await Lt("mask", t, e) || await Lt("mask-image", t, e);
}
async function op(t, e) {
  const n = he(t, HTMLImageElement);
  if (!(n && !Kn(t.src)) && !(he(t, SVGImageElement) && !Kn(t.href.baseVal)))
    return;
  const r = n ? t.src : t.href.baseVal, a = await hr(r, yr(r), e);
  await new Promise((o, i) => {
    t.onload = o, t.onerror = i;
    const s = t;
    s.decode && (s.decode = o), s.loading === "lazy" && (s.loading = "eager"), n ? (t.srcset = "", t.src = a) : t.href.baseVal = a;
  });
}
async function ip(t, e) {
  const r = Ee(t.childNodes).map((a) => oo(a, e));
  await Promise.all(r).then(() => t);
}
async function oo(t, e) {
  he(t, Element) && (await ap(t, e), await op(t, e), await ip(t, e));
}
function lp(t, e) {
  const { style: n } = t;
  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
  const r = e.style;
  return r != null && Object.keys(r).forEach((a) => {
    n[a] = r[a];
  }), t;
}
const ia = {};
async function la(t) {
  let e = ia[t];
  if (e != null)
    return e;
  const r = await (await fetch(t)).text();
  return e = { url: t, cssText: r }, ia[t] = e, e;
}
async function sa(t, e) {
  let n = t.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, o = (n.match(/url\([^)]+\)/g) || []).map(async (i) => {
    let s = i.replace(r, "$1");
    return s.startsWith("https://") || (s = new URL(s, t.url).href), to(s, e.fetchRequestInit, ({ result: l }) => (n = n.replace(i, `url(${l})`), [i, l]));
  });
  return Promise.all(o).then(() => n);
}
function ua(t) {
  if (t == null)
    return [];
  const e = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let r = t.replace(n, "");
  const a = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const l = a.exec(r);
    if (l === null)
      break;
    e.push(l[0]);
  }
  r = r.replace(a, "");
  const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, i = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", s = new RegExp(i, "gi");
  for (; ; ) {
    let l = o.exec(r);
    if (l === null) {
      if (l = s.exec(r), l === null)
        break;
      o.lastIndex = s.lastIndex;
    } else
      s.lastIndex = o.lastIndex;
    e.push(l[0]);
  }
  return e;
}
async function sp(t, e) {
  const n = [], r = [];
  return t.forEach((a) => {
    if ("cssRules" in a)
      try {
        Ee(a.cssRules || []).forEach((o, i) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let s = i + 1;
            const l = o.href, u = la(l).then((d) => sa(d, e)).then((d) => ua(d).forEach((p) => {
              try {
                a.insertRule(p, p.startsWith("@import") ? s += 1 : a.cssRules.length);
              } catch (c) {
                console.error("Error inserting rule from remote css", {
                  rule: p,
                  error: c
                });
              }
            })).catch((d) => {
              console.error("Error loading remote css", d.toString());
            });
            r.push(u);
          }
        });
      } catch (o) {
        const i = t.find((s) => s.href == null) || document.styleSheets[0];
        a.href != null && r.push(la(a.href).then((s) => sa(s, e)).then((s) => ua(s).forEach((l) => {
          i.insertRule(l, a.cssRules.length);
        })).catch((s) => {
          console.error("Error loading remote stylesheet", s);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(r).then(() => (t.forEach((a) => {
    if ("cssRules" in a)
      try {
        Ee(a.cssRules || []).forEach((o) => {
          n.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${a.href}`, o);
      }
  }), n));
}
function up(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => ro(e.style.getPropertyValue("src")));
}
async function cp(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Ee(t.ownerDocument.styleSheets), r = await sp(n, e);
  return up(r);
}
async function pp(t, e) {
  const n = await cp(t, e);
  return (await Promise.all(n.map((a) => {
    const o = a.parentStyleSheet ? a.parentStyleSheet.href : null;
    return ao(a.cssText, o, e);
  }))).join(`
`);
}
async function dp(t, e) {
  const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await pp(t, e);
  if (n) {
    const r = document.createElement("style"), a = document.createTextNode(n);
    r.appendChild(a), t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r);
  }
}
async function fp(t, e = {}) {
  const { width: n, height: r } = eo(t, e), a = await pn(t, e, !0);
  return await dp(a, e), await oo(a, e), lp(a, e), await Cc(a, n, r);
}
async function mp(t, e = {}) {
  const { width: n, height: r } = eo(t, e), a = await fp(t, e), o = await on(a), i = document.createElement("canvas"), s = i.getContext("2d"), l = e.pixelRatio || xc(), u = e.canvasWidth || n, d = e.canvasHeight || r;
  return i.width = u * l, i.height = d * l, e.skipAutoScale || Ec(i), i.style.width = `${u}`, i.style.height = `${d}`, e.backgroundColor && (s.fillStyle = e.backgroundColor, s.fillRect(0, 0, i.width, i.height)), s.drawImage(o, 0, 0, i.width, i.height), i;
}
async function yp(t, e = {}) {
  return (await mp(t, e)).toDataURL("image/jpeg", e.quality || 1);
}
async function ca(t) {
  return t ? await yp(t, {
    canvasWidth: 210 * 8,
    canvasHeight: 297 * 8,
    pixelRatio: 1,
    quality: 0.5,
    skipFonts: !0
  }) : "";
}
async function hp({
  paperEls: t,
  paperKey: e
}) {
  return new Promise((n) => {
    Et(async () => {
      const r = {};
      (e === void 0 || e === "front") && (r.front = await ca(t.front)), (e === void 0 || e === "back") && (r.back = await ca(t.back)), n(r);
    });
  });
}
function vp(t) {
  const e = xe({
    front: "",
    back: ""
  });
  async function n(r) {
    if (!t.front || !t.back) throw "Setup Error: `paperEls` not exists";
    return hp({
      paperEls: t,
      paperKey: r
    }).then((a) => (Object.assign(e, a), e));
  }
  return {
    paperImages: e,
    printPaper: n
  };
}
const gp = (t) => (De("data-v-bf3ed9d7"), t = t(), Ce(), t), bp = { class: "card-tabs" }, wp = /* @__PURE__ */ gp(() => /* @__PURE__ */ m("span", { class: "card-tab-new-text" }, "新建", -1)), _p = ["onClick", "onDblclick"], Sp = {
  key: 1,
  class: "card-tab-name"
}, kp = ["onClick"], Ap = ["onClick"], $p = /* @__PURE__ */ R({
  __name: "CardManager",
  props: {
    metaList: {},
    activeCardId: {}
  },
  emits: ["create-card", "switch-card", "delete-card", "duplicate-card", "rename-card"],
  setup(t, { emit: e }) {
    const n = e, r = Ae(), a = X(null), o = X("");
    async function i(p) {
      try {
        await _o.confirm("确定要删除该角色卡吗？此操作不可撤销。", "警告", {
          confirmButtonText: "删除",
          cancelButtonText: "取消",
          type: "warning"
        }), n("delete-card", p);
      } catch {
      }
    }
    function s(p) {
      a.value = p.id, o.value = p.saveName;
    }
    function l() {
      a.value && o.value.trim() && n("rename-card", a.value, o.value.trim()), a.value = null;
    }
    function u(p) {
      return p.name && p.name !== "未命名角色卡" ? p.name : p.saveName;
    }
    function d() {
      a.value = null;
    }
    return (p, c) => {
      var h;
      const f = pe("el-icon");
      return w(), P("div", {
        class: W(["card-manager", { "printing-image": (h = A(r)) == null ? void 0 : h.printing }])
      }, [
        m("div", bp, [
          m("div", {
            class: "card-tab card-tab-new",
            onClick: c[0] || (c[0] = (y) => n("create-card"))
          }, [
            S(f, { size: 14 }, {
              default: F(() => [
                S(A(Ou))
              ]),
              _: 1
            }),
            wp
          ]),
          (w(!0), P(ee, null, re(p.metaList, (y) => (w(), P("div", {
            key: y.id,
            class: W(["card-tab", { "card-tab-active": y.id === p.activeCardId }]),
            onClick: (g) => n("switch-card", y.id),
            onDblclick: (g) => s(y)
          }, [
            a.value === y.id ? Ve((w(), P("input", {
              key: 0,
              class: "card-tab-input",
              "onUpdate:modelValue": c[1] || (c[1] = (g) => o.value = g),
              onBlur: l,
              onKeyup: [
                _r(l, ["enter"]),
                _r(d, ["escape"])
              ],
              onClick: c[2] || (c[2] = St(() => {
              }, ["stop"]))
            }, null, 544)), [
              [va, o.value]
            ]) : (w(), P("span", Sp, O(u(y)), 1)),
            m("span", {
              class: "card-tab-btn",
              onClick: St((g) => n("duplicate-card", y.id), ["stop"]),
              title: "复制"
            }, [
              S(f, { size: 10 }, {
                default: F(() => [
                  S(A(wu))
                ]),
                _: 1
              })
            ], 8, kp),
            m("span", {
              class: W(["card-tab-btn card-tab-delete", { "card-tab-delete-mobile": y.id !== p.activeCardId }]),
              onClick: St((g) => i(y.id), ["stop"]),
              title: "删除"
            }, [
              S(f, { size: 12 }, {
                default: F(() => [
                  S(A(Su))
                ]),
                _: 1
              })
            ], 10, Ap)
          ], 42, _p))), 128))
        ])
      ], 2);
    };
  }
}), Pp = /* @__PURE__ */ V($p, [["__scopeId", "data-v-bf3ed9d7"]]), Ip = { class: "control-section" }, xp = { class: "main-controls" }, Ep = { class: "more-controls" }, Dp = { class: "downloader-body" }, Cp = { class: "downloader-items" }, Rp = { class: "in-out-modal-body" }, Op = { class: "in-out-modal-panel" }, Fp = { class: "in-out-modal-panel" }, Mp = /* @__PURE__ */ R({
  __name: "ControlSection",
  props: {
    paperEls: {}
  },
  emits: ["switch-paper"],
  setup(t, { expose: e, emit: n }) {
    const r = t, a = n, o = fr(), i = ae(), s = cn(), l = Ae(), u = Xe("cardManager"), d = X(""), p = q(() => {
      const U = JSON.stringify({
        pc: i == null ? void 0 : i.value,
        viewData: {
          ...s
          // showingChildSkills,
        }
      });
      return ta.compressToEncodedURIComponent(U);
    }), c = q(() => {
      const U = new Blob([p.value], { type: "text/plain;charset=utf-8" });
      return URL.createObjectURL(U);
    }), f = X(!1), h = X(!1), y = X(!1), g = X("features"), v = X(!1);
    function I() {
      a("switch-paper");
    }
    const { paperImages: b, printPaper: k } = vp(r.paperEls), $ = q(() => {
      const { name: U, playerName: D } = (i == null ? void 0 : i.value) || {}, T = "", Q = [U, D].filter((Y) => Y).join("-");
      return `${T}${Q}${Q ? "-" : ""}`;
    });
    function _(U) {
      if (l) {
        if (l.printing) {
          Se.info("已经在运行啦，请不要同时多次生成图片");
          return;
        }
        l.printing = !0, Se.info({
          message: "图片生成中，页面会有轻微抖动，请稍候…",
          duration: 1e3,
          onClose() {
            k(U).then(() => {
              h.value = !0, l.printing = !1;
            });
          }
        });
      }
    }
    function x() {
      y.value = !y.value;
    }
    function E() {
      if (!i || !s) return;
      const U = Xe("cardManager", null);
      U ? U.resetCurrentCard() : (i.value = xe(We()), Os(s), Et(() => {
        o.removeItem("autoSaved");
      })), Se.info("已重置人物卡"), y.value = !1;
    }
    function H() {
      f.value = !0;
    }
    function C() {
      Qa(p.value), Se.success("已复制到剪贴板");
    }
    function L() {
      const U = ta.decompressFromEncodedURIComponent(d.value), D = JSON.parse(U);
      if (l && (l.importing = !0), D && D.viewData && D.pc && s && i)
        try {
          i.value = We(D.pc), Object.keys(D.viewData).forEach((T) => {
            const Q = T;
            s[Q] = D.viewData[Q];
          }), Se.success("已成功导入"), f.value = !1, y.value = !1;
        } catch {
          Se.error("数据有误，无法导入。页面可能因此受损，建议刷新");
        }
      else
        Se.error("数据有误，无法导入");
      l && (l.importing = !1);
    }
    return e({ inData: d, applyInData: L }), (U, D) => {
      const T = pe("el-tab-pane"), Q = pe("el-tabs"), Y = pe("el-input"), Z = pe("el-button");
      return w(), P("div", Ip, [
        m("div", xp, [
          S(je, {
            label: "导入/导出",
            icon: A(Za),
            onClick: H
          }, null, 8, ["icon"]),
          S(kc),
          S(je, {
            label: "更多",
            icon: A(Cu),
            onClick: x
          }, null, 8, ["icon"]),
          S(je, {
            label: "翻面",
            icon: A(Mu),
            onClick: I
          }, null, 8, ["icon"])
        ]),
        y.value ? (w(), J(Q, {
          key: 0,
          class: "more-container",
          modelValue: g.value,
          "onUpdate:modelValue": D[2] || (D[2] = (M) => g.value = M)
        }, {
          default: F(() => [
            S(T, {
              class: "more-pane",
              label: "更多功能",
              name: "features"
            }, {
              default: F(() => [
                m("div", Ep, [
                  S(je, {
                    label: "重置人物卡",
                    icon: A(Vu),
                    onClick: E
                  }, null, 8, ["icon"]),
                  S(je, {
                    label: "保存",
                    icon: A(Iu),
                    onClick: D[0] || (D[0] = () => _())
                  }, null, 8, ["icon"]),
                  S(je, {
                    label: "存档管理",
                    icon: A(Eu),
                    onClick: D[1] || (D[1] = (M) => v.value = !0)
                  }, null, 8, ["icon"])
                ])
              ]),
              _: 1
            }),
            S(T, {
              class: "more-pane more-pane-less",
              label: "职业列表",
              name: "jobs"
            }, {
              default: F(() => [
                S(uc)
              ]),
              _: 1
            }),
            S(T, {
              class: "more-pane more-pane-less",
              label: "武器列表",
              name: "weapons"
            }, {
              default: F(() => [
                S(vc)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : G("", !0),
        S(dt, {
          modelValue: h.value,
          "onUpdate:modelValue": D[5] || (D[5] = (M) => h.value = M),
          title: "下载图片/数据"
        }, {
          default: F(() => [
            m("div", Dp, [
              m("div", Cp, [
                S(Cn, {
                  title: "正面",
                  refreshable: "",
                  previewImage: A(b).front,
                  download: {
                    url: A(b).front,
                    name: $.value,
                    type: "jpg"
                  },
                  onRefresh: D[3] || (D[3] = () => _("front"))
                }, null, 8, ["previewImage", "download"]),
                S(Cn, {
                  title: "背面",
                  refreshable: "",
                  previewImage: A(b).back,
                  download: {
                    url: A(b).back,
                    name: $.value,
                    type: "jpg"
                  },
                  onRefresh: D[4] || (D[4] = () => _("back"))
                }, null, 8, ["previewImage", "download"]),
                S(Cn, {
                  title: "车卡数据",
                  download: {
                    url: c.value,
                    name: "COC",
                    type: "txt"
                  }
                }, null, 8, ["download"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        S(dt, {
          modelValue: f.value,
          "onUpdate:modelValue": D[7] || (D[7] = (M) => f.value = M),
          title: "导入/导出数据",
          onClosed: D[8] || (D[8] = (M) => d.value = "")
        }, {
          default: F(() => [
            m("div", Rp, [
              m("div", Op, [
                S(Y, {
                  type: "textarea",
                  value: p.value,
                  rows: 16,
                  readonly: !0,
                  resize: "none"
                }, null, 8, ["value"]),
                S(Z, {
                  type: "primary",
                  onClick: C
                }, {
                  default: F(() => [
                    Ze(" 复制以上内容 ")
                  ]),
                  _: 1
                })
              ]),
              m("div", Fp, [
                S(Y, {
                  type: "textarea",
                  modelValue: d.value,
                  "onUpdate:modelValue": D[6] || (D[6] = (M) => d.value = M),
                  rows: 16,
                  placeholder: "将文本粘贴到这里",
                  resize: "none"
                }, null, 8, ["modelValue"]),
                S(Z, {
                  type: "primary",
                  onClick: L
                }, {
                  default: F(() => [
                    Ze(" 导入以上内容 ")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        S(dt, {
          modelValue: v.value,
          "onUpdate:modelValue": D[10] || (D[10] = (M) => v.value = M),
          title: "存档管理"
        }, {
          default: F(() => [
            S(Pp, {
              metaList: A(u).metaList.value,
              activeCardId: A(u).activeCardId.value,
              onCreateCard: A(u).createCard,
              onSwitchCard: A(u).switchCard,
              onDeleteCard: A(u).deleteCard,
              onDuplicateCard: A(u).duplicateCard,
              onRenameCard: D[9] || (D[9] = (M, K) => A(u).renameCard(M, K))
            }, null, 8, ["metaList", "activeCardId", "onCreateCard", "onSwitchCard", "onDeleteCard", "onDuplicateCard"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), pa = /* @__PURE__ */ V(Mp, [["__scopeId", "data-v-1be70f9c"]]), Tp = /* @__PURE__ */ R({
  __name: "PaperLayout",
  props: {
    setRef: {}
  },
  setup(t) {
    const e = Ae();
    return (n, r) => {
      var a;
      return w(), P("div", {
        class: W(["paper theme-light", {
          "printing-image": (a = A(e)) == null ? void 0 : a.printing
        }])
      }, [
        m("div", {
          class: "paper-content",
          ref: n.setRef
        }, [
          Pt(n.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 2);
    };
  }
}), io = /* @__PURE__ */ V(Tp, [["__scopeId", "data-v-1f20c738"]]), Vp = { class: "paper-section" }, Up = { class: "heading" }, Bp = { class: "title" }, Np = { class: "subtitle" }, jp = { class: "body" }, zp = /* @__PURE__ */ R({
  __name: "PaperSection",
  props: {
    title: {},
    subTitle: {},
    centered: { type: Boolean, default: !0 }
  },
  setup(t) {
    return (e, n) => (w(), P("div", Vp, [
      m("div", {
        class: W(["header", {
          "header-centered": e.centered
        }])
      }, [
        Pt(e.$slots, "header", {}, () => [
          m("h1", Up, [
            m("span", Bp, O(e.title), 1),
            m("span", Np, O(e.subTitle), 1)
          ])
        ], !0)
      ], 2),
      m("div", jp, [
        Pt(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), ye = /* @__PURE__ */ V(zp, [["__scopeId", "data-v-757cabe7"]]), Lp = { class: "label" }, Wp = { class: "label-title" }, Gp = {
  key: 0,
  class: "label-hint"
}, Hp = ["placeholder", "readonly", "value"], qp = /* @__PURE__ */ R({
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
    const e = t, n = Ae(), r = xe({
      width: `${e.char}em`
    });
    return (a, o) => {
      var i, s;
      return w(), P("div", {
        class: W(["writable-row", {
          "writable-row-with-hint": !!a.hint,
          "printing-image": (i = A(n)) == null ? void 0 : i.printing
        }])
      }, [
        m("div", Lp, [
          m("div", Wp, O(a.label), 1),
          a.hint ? (w(), P("div", Gp, O(a.hint), 1)) : G("", !0)
        ]),
        m("input", {
          type: "text",
          class: "input",
          style: Tn(r),
          placeholder: (s = A(n)) != null && s.printing ? "" : a.placeholder,
          readonly: a.readonly,
          value: a.modelValue,
          onInput: o[0] || (o[0] = (l) => a.$emit("update:modelValue", l.target.value)),
          onFocus: o[1] || (o[1] = (l) => a.$emit("focus")),
          onBlur: o[2] || (o[2] = (l) => a.$emit("blur"))
        }, null, 44, Hp)
      ], 2);
    };
  }
}), ce = /* @__PURE__ */ V(qp, [["__scopeId", "data-v-1b667523"]]), Jp = { class: "flatten-tree" }, Kp = { class: "group-label" }, Qp = { class: "options" }, Zp = ["onClick"], Xp = /* @__PURE__ */ R({
  __name: "FlattenTree",
  props: {
    tree: {}
  },
  emits: ["select"],
  setup(t) {
    return (e, n) => (w(), P("div", Jp, [
      (w(!0), P(ee, null, re(e.tree, (r) => (w(), P("div", {
        class: "group",
        key: r.key
      }, [
        m("div", Kp, O(r.label), 1),
        m("div", Qp, [
          (w(!0), P(ee, null, re(r.children, (a) => (w(), P("a", {
            class: "option",
            key: a.key,
            onClick: (o) => e.$emit("select", a, r)
          }, O(a.label), 9, Zp))), 128))
        ])
      ]))), 128))
    ]));
  }
}), lo = /* @__PURE__ */ V(Xp, [["__scopeId", "data-v-3998604b"]]), vr = {
  mounted(t, e) {
    t._clickOutsideEvent = function(n) {
      t === n.target || t.contains(n.target) || e.value(n, t);
    }, document.addEventListener("click", t._clickOutsideEvent), document.addEventListener("focus", t._clickOutsideEvent, !0);
  },
  unmounted: function(e) {
    document.removeEventListener("click", e._clickOutsideEvent), document.removeEventListener("focus", e._clickOutsideEvent, !0);
  }
};
function so() {
  var e, n;
  const t = navigator.userAgent;
  return t.includes("Electron") || typeof ((n = (e = window.process) == null ? void 0 : e.versions) == null ? void 0 : n.electron) == "string" ? "desktop" : /Mobile|Android|iPhone|iPad|iPod/i.test(t) ? "mobile" : "desktop";
}
const gr = X(so());
window.addEventListener("resize", () => {
  gr.value = so();
});
function dn() {
  return gr.value === "mobile";
}
function Yp() {
  return gr.value === "desktop";
}
const ed = { class: "info-row" }, td = { class: "rel full-width" }, nd = {
  key: 0,
  class: "job-selector"
}, rd = { class: "job-selector-header" }, ad = { class: "info-row" }, od = { class: "info-col" }, id = { class: "info-col" }, ld = /* @__PURE__ */ R({
  __name: "InvestigatorSection",
  setup(t) {
    const e = ae(), n = Ae(), { jobGroups: r } = Ft, a = X(!1), o = X("");
    function i() {
      a.value = !0;
    }
    function s() {
      a.value = !1;
    }
    be(
      () => a.value,
      () => {
        o.value = "";
      }
    );
    const l = q(() => !(n != null && n.printing) && dn()), u = q(() => {
      const p = o.value;
      return r.reduce((f, h) => {
        const { name: y, pinyin: g, jobs: v } = h, I = l.value ? y.replace(/\//g, " ") : y, b = v.reduce(
          (k, $) => ((!p || y.includes(p) || g.includes(p) || $.name.includes(p) || $.pinyin.includes(p)) && k.push({ label: $.name, key: $.name }), k),
          []
        );
        return b.length && f.push({
          label: I,
          key: y,
          children: b
        }), f;
      }, []);
    });
    function d(p) {
      e && (e.value.job = p, s());
    }
    return (p, c) => A(e) ? (w(), J(ye, {
      key: 0,
      title: "调查员"
    }, {
      default: F(() => {
        var f;
        return [
          m("div", {
            class: W(["info-section", {
              "printing-image": (f = A(n)) == null ? void 0 : f.printing
            }])
          }, [
            m("div", ed, [
              S(ce, {
                label: "姓名",
                char: 5.5,
                modelValue: A(e).name,
                "onUpdate:modelValue": c[0] || (c[0] = (h) => A(e).name = h)
              }, null, 8, ["modelValue"]),
              S(ce, {
                label: "玩家",
                char: 5.5,
                modelValue: A(e).playerName,
                "onUpdate:modelValue": c[1] || (c[1] = (h) => A(e).playerName = h)
              }, null, 8, ["modelValue"])
            ]),
            S(ce, {
              class: "full-width",
              label: "时代",
              modelValue: A(e).time,
              "onUpdate:modelValue": c[2] || (c[2] = (h) => A(e).time = h)
            }, null, 8, ["modelValue"]),
            Ve((w(), P("div", td, [
              S(ce, {
                label: "职业",
                modelValue: A(e).job,
                "onUpdate:modelValue": c[3] || (c[3] = (h) => A(e).job = h),
                onFocus: i
              }, null, 8, ["modelValue"]),
              S(Qn, { name: "slide-up" }, {
                default: F(() => [
                  a.value ? (w(), P("div", nd, [
                    m("div", rd, [
                      Ve(m("input", {
                        class: "job-search-input",
                        type: "text",
                        placeholder: "输入职业名称或拼音可以进行搜索",
                        "onUpdate:modelValue": c[4] || (c[4] = (h) => o.value = h)
                      }, null, 512), [
                        [va, o.value]
                      ])
                    ]),
                    S(lo, {
                      tree: u.value,
                      onSelect: c[5] || (c[5] = (h) => d(h.label))
                    }, null, 8, ["tree"])
                  ])) : G("", !0)
                ]),
                _: 1
              })
            ])), [
              [A(vr), s]
            ]),
            m("div", ad, [
              m("div", od, [
                S(ce, {
                  label: "年龄",
                  char: 4,
                  modelValue: A(e).age,
                  "onUpdate:modelValue": c[6] || (c[6] = (h) => A(e).age = h)
                }, null, 8, ["modelValue"]),
                S(ce, {
                  label: "性别",
                  char: 4,
                  modelValue: A(e).gender,
                  "onUpdate:modelValue": c[7] || (c[7] = (h) => A(e).gender = h)
                }, null, 8, ["modelValue"])
              ]),
              m("div", id, [
                S(ce, {
                  label: "住地",
                  char: 5,
                  modelValue: A(e).location,
                  "onUpdate:modelValue": c[8] || (c[8] = (h) => A(e).location = h)
                }, null, 8, ["modelValue"]),
                S(ce, {
                  label: "故乡",
                  char: 5
                })
              ])
            ])
          ], 2)
        ];
      }),
      _: 1
    })) : G("", !0);
  }
}), sd = /* @__PURE__ */ V(ld, [["__scopeId", "data-v-56a155e4"]]), ud = (t) => (De("data-v-3d65b22d"), t = t(), Ce(), t), cd = { class: "info-section" }, pd = { class: "attributes-grid" }, dd = {
  key: 0,
  class: "ponits-sum"
}, fd = { class: "attributes-group" }, md = /* @__PURE__ */ ud(() => /* @__PURE__ */ m("div", { class: "divider" }, null, -1)), yd = { class: "attributes-group" }, hd = { class: "attributes-actions" }, vd = {
  key: 0,
  class: "ponits-sum"
}, gd = /* @__PURE__ */ R({
  __name: "AttributesSection",
  setup(t) {
    const e = ae(), n = Ae(), r = [
      { key: "str", label: "力量", hint: "STR" },
      { key: "con", label: "体质", hint: "CON" },
      { key: "dex", label: "敏捷", hint: "DEX" },
      { key: "app", label: "外貌", hint: "APP" },
      { key: "pow", label: "意志", hint: "POW" }
    ], a = [
      { key: "siz", label: "体型", hint: "SIZ" },
      { key: "edu", label: "教育", hint: "知识 EDU" },
      { key: "int", label: "智力", hint: "灵感 INT" },
      { key: "luc", label: "幸运", hint: "LUK" }
    ], o = q(() => {
      if (!e) return 0;
      const { str: u, con: d, dex: p, app: c, pow: f, siz: h, edu: y, int: g } = e.value.attributes, v = [u, d, p, c, f, h, y, g];
      return v.every((b) => b) ? v.reduce((b, k) => b + (k || 0), 0) : 0;
    });
    function i(u, d) {
      e && (e.value.attributes[u] = d ? +d : void 0);
    }
    const s = q(() => !(n != null && n.printing) && dn()), l = [...r, ...a];
    return (u, d) => A(e) ? (w(), J(ye, {
      key: 0,
      title: "属性"
    }, {
      default: F(() => [
        m("div", cd, [
          s.value ? (w(), P(ee, { key: 0 }, [
            m("div", pd, [
              (w(), P(ee, null, re(l, (p) => {
                var c;
                return S(ce, {
                  key: p.key,
                  label: p.label,
                  modelValue: `${((c = A(e)) == null ? void 0 : c.attributes[p.key]) ?? ""}`,
                  "onUpdate:modelValue": (f) => i(p.key, f)
                }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
              }), 64))
            ]),
            o.value ? (w(), P("div", dd, "总点数 " + O(o.value), 1)) : G("", !0)
          ], 64)) : (w(), P(ee, { key: 1 }, [
            m("div", fd, [
              (w(), P(ee, null, re(r, (p) => {
                var c;
                return S(ce, {
                  key: p.key,
                  label: p.label,
                  modelValue: `${((c = A(e)) == null ? void 0 : c.attributes[p.key]) ?? ""}`,
                  "onUpdate:modelValue": (f) => i(p.key, f)
                }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
              }), 64))
            ]),
            md,
            m("div", yd, [
              (w(), P(ee, null, re(a, (p) => {
                var c;
                return S(ce, {
                  key: p.key,
                  label: p.label,
                  modelValue: `${((c = A(e)) == null ? void 0 : c.attributes[p.key]) ?? ""}`,
                  "onUpdate:modelValue": (f) => i(p.key, f)
                }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
              }), 64)),
              m("div", hd, [
                o.value ? (w(), P("div", vd, "总点数 " + O(o.value), 1)) : G("", !0)
              ])
            ])
          ], 64))
        ])
      ]),
      _: 1
    })) : G("", !0);
  }
}), bd = /* @__PURE__ */ V(gd, [["__scopeId", "data-v-3d65b22d"]]), wd = /* @__PURE__ */ R({
  __name: "AvatarSection",
  setup(t) {
    const e = X(!1);
    return (n, r) => {
      const a = pe("AvatarModalContent");
      return w(), J(dt, {
        class: "coc-card-avatar-modal",
        title: "设置形象",
        modelValue: e.value,
        "onUpdate:modelValue": r[1] || (r[1] = (o) => e.value = o)
      }, {
        default: F(() => [
          S(a, {
            onFinished: r[0] || (r[0] = (o) => e.value = !1)
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), _d = /* @__PURE__ */ V(wd, [["__scopeId", "data-v-67a8d568"]]), Sd = { class: "status-checkbox" }, kd = ["checked"], Ad = { class: "label" }, $d = /* @__PURE__ */ R({
  __name: "StatusCheckbox",
  props: {
    label: {},
    checked: { type: Boolean, default: !1 }
  },
  emits: ["check"],
  setup(t, { emit: e }) {
    const n = e;
    function r(a) {
      const o = a.target;
      n("check", o.checked);
    }
    return (a, o) => (w(), P("label", Sd, [
      m("input", {
        type: "checkbox",
        class: "checkbox",
        checked: a.checked,
        onChange: r
      }, null, 40, kd),
      m("div", Ad, O(a.label), 1)
    ]));
  }
}), Wt = /* @__PURE__ */ V($d, [["__scopeId", "data-v-a1461803"]]), Pd = { class: "san-status-section" }, Id = /* @__PURE__ */ R({
  __name: "DeriveSections",
  setup(t) {
    const e = ae();
    return (n, r) => A(e) ? (w(), J(ye, {
      key: 0,
      title: "精神状态"
    }, {
      default: F(() => {
        var a, o;
        return [
          m("div", Pd, [
            S(Wt, {
              label: "精神固化",
              checked: !!((o = (a = A(e).status) == null ? void 0 : a.mental) != null && o.hardened),
              onCheck: r[0] || (r[0] = (i) => {
                A(e) && (A(e).status.mental.hardened = i);
              })
            }, null, 8, ["checked"]),
            S(Wt, { label: "临时疯狂" }),
            S(Wt, { label: "永久疯狂" }),
            S(Wt, { label: "不定性疯狂" })
          ])
        ];
      }),
      _: 1
    })) : G("", !0);
  }
}), xd = /* @__PURE__ */ V(Id, [["__scopeId", "data-v-9b84aa54"]]), uo = (t) => (De("data-v-ed03bc13"), t = t(), Ce(), t), Ed = {
  key: 0,
  class: "suggestion-content"
}, Dd = /* @__PURE__ */ uo(() => /* @__PURE__ */ m("span", null, "默认本职技能：", -1)), Cd = { class: "multi-skill-text" }, Rd = /* @__PURE__ */ uo(() => /* @__PURE__ */ m("span", null, "、", -1)), Od = /* @__PURE__ */ R({
  __name: "HintSection",
  setup(t) {
    const e = Ya(), n = Ae();
    return (r, a) => {
      var o, i;
      return w(), P("div", {
        class: W(["hint-section", {
          "printing-image": (o = A(n)) == null ? void 0 : o.printing
        }])
      }, [
        (i = A(e)) != null && i.text ? (w(), P("div", Ed, [
          Dd,
          (w(!0), P(ee, null, re(A(e).multiSkillTexts, (s) => (w(), P(ee, { key: s }, [
            m("span", Cd, O(s), 1),
            Rd
          ], 64))), 128)),
          m("span", null, O(A(e).text), 1)
        ])) : G("", !0)
      ], 2);
    };
  }
}), Fd = /* @__PURE__ */ V(Od, [["__scopeId", "data-v-ed03bc13"]]), Md = ["checked"], Td = /* @__PURE__ */ R({
  __name: "SoxCheckbox",
  props: {
    checked: { type: Boolean, default: !1 },
    xOnFalse: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["check", "change"],
  setup(t, { emit: e }) {
    const n = t, r = e, a = X(n.checked);
    be(
      () => n.checked,
      () => {
        a.value = n.checked;
      }
    );
    function o(i) {
      if (n.disabled) return;
      const s = i.target.checked;
      a.value = s, r("check", s, i), r("change", i);
    }
    return (i, s) => {
      const l = pe("el-icon");
      return w(), P("label", {
        class: W(["sox-checkbox", { disabled: n.disabled }])
      }, [
        S(l, { size: "0.9em" }, {
          default: F(() => [
            a.value ? (w(), J(A(Bu), { key: 0 })) : G("", !0),
            !a.value && i.xOnFalse ? (w(), J(A(gu), { key: 1 })) : G("", !0)
          ]),
          _: 1
        }),
        m("input", {
          type: "checkbox",
          class: "sox-checkbox-input",
          checked: a.value,
          onChange: o
        }, null, 40, Md)
      ], 2);
    };
  }
}), br = /* @__PURE__ */ V(Td, [["__scopeId", "data-v-2b1a3a86"]]), Vd = { class: "skill-td-label" }, Ud = { class: "skill-td-checkbox-label" }, Bd = {
  key: 0,
  class: "child-skill-display"
}, Nd = { key: 0 }, jd = { class: "child-skill-input-container" }, zd = ["value"], Ld = {
  key: 0,
  class: "child-skill-options"
}, Wd = ["onClick"], Gd = {
  key: 1,
  class: "skill-td-label-comments"
}, Hd = /* @__PURE__ */ R({
  __name: "SkillTdLabel",
  props: {
    skillName: {},
    comments: {},
    childSkillData: {}
  },
  emits: ["selectChildSkill"],
  setup(t, { emit: e }) {
    const n = t, r = ae(), a = Xe("viewData"), o = e, i = X(!1), s = q(() => a == null ? void 0 : a.showingChildSkills[n.skillName]), l = q(() => ["母语", "外语"].includes(n.skillName) ? [
      ...(a == null ? void 0 : a.showingChildSkills.母语) || [],
      ...(a == null ? void 0 : a.showingChildSkills.外语) || []
    ] : s.value), u = q(() => !r || !a ? !1 : r.value.proSkills.some((f) => {
      var v;
      if (typeof f == "string")
        return f === n.skillName;
      const [h, y, g] = f;
      return h === n.skillName && g === ((v = n.childSkillData) == null ? void 0 : v.place);
    }));
    function d(f) {
      if (!(!n.childSkillData || !s.value)) {
        if (u.value && r) {
          const h = r.value.proSkills.find(([y, g, v]) => {
            var I;
            return y === n.skillName && v === ((I = n.childSkillData) == null ? void 0 : I.place);
          });
          h && typeof h != "string" && (h[1] = f);
        }
        s.value[n.childSkillData.place] = f;
      }
    }
    function p(f) {
      d(f.name), o("selectChildSkill", f), i.value = !1;
    }
    function c(f) {
      if (r)
        if (f) {
          let h = n.skillName;
          n.childSkillData && (h = [n.skillName, n.childSkillData.name, n.childSkillData.place]), r.value.proSkills.push(h);
        } else
          r.value.proSkills = r.value.proSkills.filter((h) => {
            if (!n.childSkillData) return h !== n.skillName;
            const [y, g, v] = h;
            return y !== n.skillName || v !== n.childSkillData.place;
          });
    }
    return (f, h) => {
      var y, g;
      return w(), P("div", Vd, [
        m("label", Ud, [
          S(br, {
            checked: u.value,
            onCheck: c
          }, null, 8, ["checked"])
        ]),
        m("div", null, O(f.skillName), 1),
        f.childSkillData ? (w(), P("div", Bd, [
          f.skillName ? (w(), P("div", Nd, ":")) : G("", !0),
          Ve((w(), P("div", jd, [
            m("input", {
              type: "text",
              class: "child-skill-input",
              value: (y = s.value) == null ? void 0 : y[f.childSkillData.place],
              onInput: h[0] || (h[0] = (v) => d(v.target.value)),
              onFocus: h[1] || (h[1] = (v) => i.value = !0)
            }, null, 40, zd),
            (g = f.childSkillData.list) != null && g.length ? Ve((w(), P("div", Ld, [
              (w(!0), P(ee, null, re(f.childSkillData.list, (v) => {
                var I;
                return w(), P("div", {
                  key: v.name,
                  class: W(["child-skill-option", {
                    "child-skill-option-existed": (I = l.value) == null ? void 0 : I.includes(v.name)
                  }]),
                  onClick: (b) => p(v)
                }, O(v.name), 11, Wd);
              }), 128))
            ], 512)), [
              [ga, i.value]
            ]) : G("", !0)
          ])), [
            [A(vr), () => i.value = !1]
          ])
        ])) : G("", !0),
        f.comments ? (w(), P("div", Gd, O(f.comments), 1)) : G("", !0)
      ]);
    };
  }
}), qd = /* @__PURE__ */ V(Hd, [["__scopeId", "data-v-bd6b4fe5"]]), Jd = ["value", "readonly", "tabindex"], Kd = /* @__PURE__ */ R({
  __name: "BaseTdInput",
  props: {
    value: { default: "" },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["input", "focus"],
  setup(t, { emit: e }) {
    const n = e;
    function r(a) {
      a.target.select(), n("focus", a);
    }
    return (a, o) => (w(), P("input", {
      type: "text",
      class: "base-td-input",
      value: a.value,
      readonly: a.readonly,
      tabindex: a.readonly ? "-1" : void 0,
      onInput: o[0] || (o[0] = (i) => a.$emit("input", i.target.value)),
      onFocus: o[1] || (o[1] = (i) => a.readonly ? void 0 : r)
    }, null, 40, Jd));
  }
}), ze = /* @__PURE__ */ V(Kd, [["__scopeId", "data-v-542bd3ff"]]), Qd = { class: "skill-td-input" }, Zd = /* @__PURE__ */ R({
  __name: "SkillTdInput",
  props: {
    value: { default: "" },
    checkable: { type: Boolean, default: !1 },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["input", "check"],
  setup(t) {
    return (e, n) => (w(), P("div", Qd, [
      e.checkable ? (w(), J(br, {
        key: 0,
        class: "skill-td-input-checkbox",
        checked: e.checked,
        onCheck: n[0] || (n[0] = (r) => e.$emit("check", r))
      }, null, 8, ["checked"])) : G("", !0),
      S(ze, {
        class: "skill-td-input-input",
        value: e.value,
        onInput: n[1] || (n[1] = (r) => e.$emit("input", r))
      }, null, 8, ["value"])
    ]));
  }
}), Gt = /* @__PURE__ */ V(Zd, [["__scopeId", "data-v-349e4cf4"]]), bt = (t) => (De("data-v-d9b95197"), t = t(), Ce(), t), Xd = { class: "skill-table" }, Yd = /* @__PURE__ */ bt(() => /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, null, -1)), ef = /* @__PURE__ */ bt(() => /* @__PURE__ */ m("th", { class: "skill-th th-deep th-skill" }, [
  /* @__PURE__ */ m("div", { class: "th-skill-label" }, [
    /* @__PURE__ */ m("div", { class: "th-skill-label-pro" }, [
      /* @__PURE__ */ m("span", {
        class: "th-skill-label-pro-text",
        style: { "transform-origin": "50% 40%" }
      }, " 本 "),
      /* @__PURE__ */ m("span", {
        class: "th-skill-label-pro-text",
        style: { "transform-origin": "0% 40%" }
      }, " 职 "),
      /* @__PURE__ */ m("span", {
        class: "th-skill-label-pro-text",
        style: { "transform-origin": "50% 10%" }
      }, " 技 "),
      /* @__PURE__ */ m("span", {
        class: "th-skill-label-pro-text",
        style: { "transform-origin": "0% 10%" }
      }, " 能 ")
    ]),
    /* @__PURE__ */ Ze(" 技能 ")
  ])
], -1)), tf = /* @__PURE__ */ bt(() => /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, "职业", -1)), nf = /* @__PURE__ */ bt(() => /* @__PURE__ */ m("th", { class: "skill-th th-light" }, "兴趣", -1)), rf = /* @__PURE__ */ bt(() => /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, [
  /* @__PURE__ */ m("div", { class: "th-grow" }, "成长")
], -1)), af = /* @__PURE__ */ bt(() => /* @__PURE__ */ m("th", { class: "skill-th th-light" }, "基准", -1)), of = ["rowspan"], lf = {
  key: 0,
  class: "init-placeholder"
}, sf = { class: "init-placeholder-content" }, uf = { key: 1 }, cf = {
  key: 0,
  class: "mobile-init-hint"
}, pf = {
  key: 1,
  class: "total-separation"
}, df = {
  key: 2,
  class: "total-value"
}, ff = /* @__PURE__ */ R({
  __name: "SkillTable",
  props: {
    data: {},
    suggestion: {}
  },
  setup(t) {
    const e = t, n = ae(), r = cn(), a = Ae();
    function o(d, p) {
      return d.reduce((f, h) => {
        const y = h.groupSkills.reduce(
          (g, v, I) => {
            const b = h.groupName === "特殊";
            let k = v.init;
            n && v.name in rn && (k = rn[v.name](n.value));
            const $ = b || I === 0, _ = v.name, x = s(_), E = (x == null ? void 0 : x[1]) || {}, [H, C] = (p == null ? void 0 : p.wealth) ?? [-1, -1], L = !!(n && n.value.job), U = _ === "信誉" && L && H >= 0 && C >= 0 ? `(${H}~${C})` : "", D = u(E, k);
            let T = {
              key: v.name,
              skillName: v.name,
              skillKey: v.name,
              comments: U,
              init: k,
              initPlaceholder: v.initPlaceholder,
              points: E,
              total: D,
              totalSeparation: [D, ~~(D / 2), ~~(D / 5)],
              showTotal: D > 0 && (D !== k || D === E.b),
              ...$ ? {
                isGroupStart: $,
                groupName: h.groupName,
                groupSize: h.groupSkills.length
              } : {},
              ...b ? { isSpecialGroup: b, groupSize: 1 } : {}
            }, Q = [...g], Y = [T];
            if (v.group) {
              const Z = v.group.show.length, M = Q.find((K) => K.isGroupStart) || T;
              M.groupSize += Z - 1, Y = v.group.show.map((K, B) => {
                var Fe, _e, Be;
                const te = ((Fe = r == null ? void 0 : r.showingChildSkills[v.name]) == null ? void 0 : Fe[B]) ?? K, fe = (_e = v.group) == null ? void 0 : _e.skills.find(({ name: et }) => et === te);
                let ve = (fe == null ? void 0 : fe.init) ?? T.init;
                const de = [v.name, te, B], Re = s(de), Oe = (Re == null ? void 0 : Re[1]) || {}, we = u(Oe, ve);
                return n && !v.name && (ve = Oe.b || 0), {
                  ...T,
                  // group info
                  isGroupStart: B ? !1 : T.isGroupStart,
                  // skill info
                  key: `${v.name}:_:${B}`,
                  skillKey: de,
                  init: ve,
                  points: Oe,
                  total: we,
                  totalSeparation: [we, ~~(we / 2), ~~(we / 5)],
                  showTotal: we > 0 && (we !== ve || we === Oe.b),
                  // child skill info
                  childSkillData: {
                    name: te,
                    place: B,
                    list: (Be = v.group) == null ? void 0 : Be.skills
                  }
                };
              });
            }
            return [...Q, ...Y];
          },
          []
        );
        return [...f, ...y];
      }, []);
    }
    const i = q(() => o(e.data, e.suggestion));
    function s(d) {
      if (n)
        return n.value.skillPoints.find((p) => {
          const [c] = p;
          if (typeof d == "string")
            return d === c;
          const [f, h, y] = c, [g, v, I] = d;
          return f === g && y === I;
        });
    }
    function l(d, p, c) {
      if (!n) return;
      let f = s(d);
      f || (f = [typeof d == "string" ? d : [...d], {}], n.value.skillPoints.push(f));
      const h = f[1];
      if (typeof c == "boolean")
        h.c = c;
      else {
        const y = p;
        c ? h[y] = Number(c) : delete h[y];
      }
    }
    function u(d, p) {
      const { b: c, p: f = 0, i: h = 0, g: y = 0 } = d;
      return (c ?? p) + Number(f) + Number(h) + Number(y);
    }
    return (d, p) => {
      var c;
      return w(), P("table", Xd, [
        m("thead", null, [
          m("tr", null, [
            Yd,
            ef,
            m("th", {
              class: W(["skill-th th-light", { "col-base": !((c = A(a)) != null && c.printing) }])
            }, "基础", 2),
            tf,
            nf,
            rf,
            af
          ])
        ]),
        m("tbody", null, [
          (w(!0), P(ee, null, re(i.value, (f, h) => {
            var y, g, v;
            return w(), P("tr", {
              key: f.skillName
            }, [
              f.isGroupStart ? (w(), P("td", {
                key: 0,
                rowspan: f.groupSize,
                class: W(["skill-td td-group-name", {
                  "td-group-name-visible": !f.isSpecialGroup,
                  "td-color-1": f.isSpecialGroup && h % 2,
                  "td-color-2": f.isSpecialGroup && (h + 1) % 2
                }])
              }, O(f.isSpecialGroup ? "" : f.groupName), 11, of)) : G("", !0),
              m("td", {
                class: W(["skill-td td-skill-name", {
                  "td-skill-name-special": f.isSpecialGroup,
                  "td-color-1": h % 2,
                  "td-color-2": (h + 1) % 2
                }])
              }, [
                S(qd, {
                  skillName: f.skillName,
                  comments: f.comments,
                  childSkillData: f.childSkillData
                }, null, 8, ["skillName", "comments", "childSkillData"])
              ], 2),
              m("td", {
                class: W(["skill-td", {
                  "col-base": !((y = A(a)) != null && y.printing),
                  "td-color-0": h % 2,
                  "td-color-1": (h + 1) % 2
                }])
              }, [
                !f.init && f.initPlaceholder ? (w(), P("div", lf, [
                  m("span", sf, O(f.initPlaceholder), 1)
                ])) : f.groupName !== "其它" ? (w(), P("span", uf, O(f.init), 1)) : (w(), J(Gt, {
                  key: 2,
                  value: `${f.points.b ?? ""}`,
                  onInput: (I) => l(f.skillKey, "b", I)
                }, null, 8, ["value", "onInput"]))
              ], 2),
              m("td", {
                class: W(["skill-td", {
                  "td-color-1": h % 2,
                  "td-color-2": (h + 1) % 2
                }])
              }, [
                S(Gt, {
                  value: `${f.points.p ?? ""}`,
                  onInput: (I) => l(f.skillKey, "p", I)
                }, null, 8, ["value", "onInput"])
              ], 2),
              m("td", {
                class: W(["skill-td", {
                  "td-color-0": h % 2,
                  "td-color-1": (h + 1) % 2
                }])
              }, [
                S(Gt, {
                  value: `${f.points.i ?? ""}`,
                  onInput: (I) => l(f.skillKey, "i", I)
                }, null, 8, ["value", "onInput"])
              ], 2),
              m("td", {
                class: W(["skill-td", {
                  "td-color-1": h % 2,
                  "td-color-2": (h + 1) % 2
                }])
              }, [
                S(Gt, {
                  checkable: !0,
                  checked: f.points.c,
                  value: `${f.points.g ?? ""}`,
                  onInput: (I) => l(f.skillKey, "g", I),
                  onCheck: (I) => l(f.skillKey, "c", I)
                }, null, 8, ["checked", "value", "onInput", "onCheck"])
              ], 2),
              m("td", {
                class: W(["skill-td", {
                  "td-color-0": h % 2,
                  "td-color-1": (h + 1) % 2
                }])
              }, [
                !f.showTotal && !((g = A(a)) != null && g.printing) ? (w(), P("span", cf, O(f.points.b ?? f.init ?? f.initPlaceholder), 1)) : G("", !0),
                (v = A(a)) != null && v.showTotalSeparation ? (w(), P("span", pf, [
                  (w(!0), P(ee, null, re(f.totalSeparation, (I, b) => (w(), P("span", {
                    key: b,
                    class: "total-sep"
                  }, O(I), 1))), 128))
                ])) : f.showTotal ? (w(), P("span", df, O(f.total), 1)) : G("", !0)
              ], 2)
            ]);
          }), 128))
        ])
      ]);
    };
  }
}), da = /* @__PURE__ */ V(ff, [["__scopeId", "data-v-d9b95197"]]), wr = (t) => (De("data-v-4d75ccdc"), t = t(), Ce(), t), mf = { class: "header skill-section-header" }, yf = { class: "header-left points-container" }, hf = { class: "point-container" }, vf = {
  key: 0,
  class: "point-rest"
}, gf = { class: "point-container" }, bf = {
  key: 0,
  class: "point-rest"
}, wf = /* @__PURE__ */ wr(() => /* @__PURE__ */ m("h1", { class: "heading" }, [
  /* @__PURE__ */ m("span", { class: "title" }, "技能表")
], -1)), _f = { class: "header-right points-container" }, Sf = /* @__PURE__ */ wr(() => /* @__PURE__ */ m("div", null, "初始技能上限", -1)), kf = { class: "point-container" }, Af = { class: "point-container" }, $f = { class: "skill-section-body" }, Pf = /* @__PURE__ */ wr(() => /* @__PURE__ */ m("div", { class: "divider" }, null, -1)), fa = 6, If = /* @__PURE__ */ R({
  __name: "SkillSection",
  setup(t) {
    const e = ae(), n = Ya(), r = Ae(), a = cn();
    function o() {
      const { pro: p, interest: c } = (e == null ? void 0 : e.value.pointValues) || {};
      return {
        pro: {
          point: Number(p || 0),
          str: p || ""
        },
        interest: {
          point: Number(c || 0),
          str: c || ""
        }
      };
    }
    const i = xe(o()), s = q(() => {
      let p = 0, c = 0;
      return e == null || e.value.skillPoints.forEach(([f, h]) => {
        p += h.p || 0, c += h.i || 0;
      }), {
        proPoint: i.pro.point - p,
        interestPoint: i.interest.point - c
      };
    });
    function l(p, c = "") {
      const f = i[p];
      if (f.str = c, f.str) {
        const h = Number(f.str);
        f.point = Number.isNaN(h) ? 0 : h;
      } else
        f.point = 0;
    }
    function u(p, c) {
      e && e.value.pointValues[p] !== c && (e.value.pointValues[p] = c);
    }
    function d(p, c) {
      const f = Number(c);
      a && a.skillLimits[p] !== f && (a.skillLimits[p] = f);
    }
    return be(
      () => ({
        job: e == null ? void 0 : e.value.job,
        attributes: e == null ? void 0 : e.value.attributes
      }),
      ({ job: p, attributes: c }) => {
        const { point: f } = Wa(p, c), h = e == null ? void 0 : e.value.pointValues.pro;
        f && l("pro", h ?? `${f > 0 ? f : ""}`);
        const y = c == null ? void 0 : c.int, g = y ? `${y * 2}` : "", v = e == null ? void 0 : e.value.pointValues.interest;
        g && l("interest", v ?? g);
      },
      { deep: !0 }
    ), be(
      () => ({
        pointValues: e == null ? void 0 : e.value.pointValues,
        pro: e == null ? void 0 : e.value.pointValues.pro,
        interest: e == null ? void 0 : e.value.pointValues.interest
      }),
      ({ pointValues: p, pro: c, interest: f }, { pointValues: h, pro: y, interest: g }) => {
        if (p !== h) {
          typeof c < "u" && l("pro", c), typeof f < "u" && l("interest", f);
          return;
        }
        c !== y && l("pro", c), f !== g && l("interest", f);
      },
      { deep: !0 }
    ), (p, c) => {
      var f;
      return w(), J(ye, {
        class: W(["skill-section", {
          "printing-image": (f = A(r)) == null ? void 0 : f.printing
        }])
      }, {
        header: F(() => {
          var h, y, g;
          return [
            m("div", mf, [
              m("div", yf, [
                m("div", hf, [
                  S(ce, {
                    class: "point-writer",
                    label: "职业点数",
                    placeholder: (h = A(e)) != null && h.job ? "问KP" : "",
                    char: 3,
                    modelValue: i.pro.str,
                    "onUpdate:modelValue": c[0] || (c[0] = (v) => u("pro", v))
                  }, null, 8, ["placeholder", "modelValue"]),
                  i.pro.point > 0 ? (w(), P("div", vf, " 剩余: " + O(s.value.proPoint), 1)) : G("", !0)
                ]),
                m("div", gf, [
                  S(ce, {
                    class: "point-writer",
                    label: "兴趣点数",
                    char: 3,
                    modelValue: i.interest.str,
                    "onUpdate:modelValue": c[1] || (c[1] = (v) => u("interest", v))
                  }, null, 8, ["modelValue"]),
                  i.interest.point > 0 ? (w(), P("div", bf, " 剩余: " + O(s.value.interestPoint), 1)) : G("", !0)
                ])
              ]),
              wf,
              m("div", _f, [
                Sf,
                m("div", kf, [
                  S(ce, {
                    class: "point-writer",
                    label: "本职",
                    char: 2,
                    modelValue: `${((y = A(a)) == null ? void 0 : y.skillLimits.pro) || ""}`,
                    "onUpdate:modelValue": c[2] || (c[2] = (v) => d("pro", v))
                  }, null, 8, ["modelValue"])
                ]),
                m("div", Af, [
                  S(ce, {
                    class: "point-writer",
                    label: "兴趣",
                    char: 2,
                    modelValue: `${((g = A(a)) == null ? void 0 : g.skillLimits.interest) || ""}`,
                    "onUpdate:modelValue": c[3] || (c[3] = (v) => d("interest", v))
                  }, null, 8, ["modelValue"])
                ])
              ])
            ])
          ];
        }),
        default: F(() => [
          m("div", $f, [
            S(da, {
              data: A(Gn).slice(0, fa),
              suggestion: A(n)
            }, null, 8, ["data", "suggestion"]),
            Pf,
            S(da, {
              data: A(Gn).slice(fa)
            }, null, 8, ["data"])
          ])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), xf = /* @__PURE__ */ V(If, [["__scopeId", "data-v-4d75ccdc"]]), Ef = ["value", "disabled"], Df = ["value"], Cf = /* @__PURE__ */ R({
  __name: "BaseTdSelect",
  props: {
    value: { default: "" },
    options: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["change"],
  setup(t) {
    return (e, n) => (w(), P("select", {
      class: "base-td-select",
      value: e.value,
      disabled: e.disabled,
      onChange: n[0] || (n[0] = (r) => e.$emit("change", r.target.value))
    }, [
      (w(!0), P(ee, null, re(e.options, (r) => (w(), P("option", {
        key: r.value,
        value: r.value
      }, O(r.label), 9, Df))), 128))
    ], 40, Ef));
  }
}), Rf = /* @__PURE__ */ V(Cf, [["__scopeId", "data-v-2c9c2276"]]);
function Of(t = !1) {
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
const Ff = { class: "weapon-section-row" }, Mf = { class: "show-in-print" }, Tf = {
  key: 0,
  class: "wp-point-placeholder"
}, Vf = /* @__PURE__ */ R({
  __name: "WeaponSectionRow",
  props: {
    index: {},
    weapon: {},
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["input", "focus"],
  setup(t) {
    const e = t, n = ae();
    function r(y, g) {
      const v = y % 2 ? 0 : 1, I = g % 2 ? 0 : 1;
      return `td-color-${v + I}`;
    }
    function a(y) {
      var k;
      const [g, v] = y.split(")")[0].split("("), I = ((k = s.value.find(($) => $.name === y)) == null ? void 0 : k.init) || 0;
      let b = 0;
      return n == null || n.value.skillPoints.some(($) => {
        const _ = (
          // 投掷
          !v && g === $[0] || // 格斗 or 射击
          v && typeof $[0] != "string" && g === $[0][0] && v === $[0][1]
        );
        if (_) {
          const { p: x = 0, i: E = 0, g: H = 0 } = $[1];
          b = x + E + H;
        }
        return _;
      }), {
        initPoint: I,
        result: b ? `${I + b}` : ""
      };
    }
    const o = q(() => e.weapon || Wn()), i = q(() => a(o.value.skill)), s = q(() => Gn.find(({ groupName: g }) => g === "战斗").groupSkills.filter(({ name: g }) => g !== "闪避" && g !== "武术").reduce((g, v) => {
      const { name: I, init: b, group: k } = v, $ = k ? k.skills.filter(({ name: _ }) => _ !== "武术").map((_) => ({
        name: `${I}(${_.name})`,
        init: _.init || b
      })) : [{ name: I, init: b }];
      return [...g, ...$];
    }, [])), l = q(() => [
      { value: "", label: "" },
      ...s.value.map(({ name: y }) => ({
        value: y,
        label: y
      }))
    ]), {
      value: u,
      setTrue: d,
      setFalse: p
    } = Of(), c = q(() => ja.map(([y, g]) => ({
      key: y,
      label: g,
      children: Na[y].map((v) => ({
        key: v,
        label: v
      }))
    })));
    function f(y) {
      if (!n) return;
      n.value.weapons[e.index] || (n.value.weapons[e.index] = Wn());
      const g = n.value.weapons[e.index];
      y.hasOwnProperty("skill") && y.skill === "" && (y = {
        ...y,
        name: "",
        dam: "",
        range: "",
        tho: 0,
        round: "",
        num: "",
        err: ""
      }), Object.assign(g, y);
    }
    function h(y) {
      const g = pr.find((k) => k.name === y);
      if (!g) return;
      const { price: v, time: I, ...b } = g;
      f({
        ...b
      }), p();
    }
    return (y, g) => (w(), P("div", Ff, [
      m("div", {
        class: W(["wp-td", {
          [r(y.index, 0)]: !0
        }])
      }, [
        Ve((w(), P("div", {
          class: "weapon-td-name",
          onClick: g[4] || (g[4] = () => !e.readonly && A(d)())
        }, [
          S(ze, {
            value: o.value.name,
            readonly: e.readonly,
            onInput: g[0] || (g[0] = (v) => f({ name: v })),
            onFocus: g[1] || (g[1] = () => !e.readonly && A(d)())
          }, null, 8, ["value", "readonly"]),
          S(Qn, { name: "slide-down" }, {
            default: F(() => [
              Ve(m("div", {
                class: "weapon-selector",
                onClick: g[3] || (g[3] = St(() => {
                }, ["stop"]))
              }, [
                S(lo, {
                  tree: c.value,
                  onSelect: g[2] || (g[2] = (v) => h(v.label))
                }, null, 8, ["tree"])
              ], 512), [
                [ga, A(u)]
              ])
            ]),
            _: 1
          })
        ])), [
          [A(vr), A(p)]
        ])
      ], 2),
      m("div", {
        class: W(["wp-td", {
          "has-skill": !!o.value.skill,
          [r(y.index, 1)]: !0
        }])
      }, [
        m("span", Mf, O(o.value.skill), 1),
        S(Rf, {
          class: "hide-in-print",
          value: o.value.skill,
          options: l.value,
          disabled: e.readonly,
          onChange: g[5] || (g[5] = (v) => f({ skill: v }))
        }, null, 8, ["value", "options", "disabled"])
      ], 2),
      m("div", {
        class: W(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 2)]: !0
        }])
      }, [
        Ze(O(i.value.result) + " ", 1),
        !i.value.result && i.value.initPoint ? (w(), P("span", Tf, O(i.value.initPoint), 1)) : G("", !0)
      ], 2),
      m("div", {
        class: W(["wp-td", {
          [r(y.index, 3)]: !0
        }])
      }, [
        S(ze, {
          value: o.value.dam,
          readonly: e.readonly,
          onInput: g[6] || (g[6] = (v) => f({ dam: v }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: W(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 4)]: !0
        }])
      }, [
        S(ze, {
          value: o.value.range,
          readonly: e.readonly,
          onInput: g[7] || (g[7] = (v) => f({ range: v }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: W(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 5)]: !0
        }])
      }, [
        S(br, {
          xOnFalse: !!o.value.name,
          checked: !!o.value.tho,
          disabled: e.readonly,
          onCheck: g[8] || (g[8] = (v) => f({ tho: +v }))
        }, null, 8, ["xOnFalse", "checked", "disabled"])
      ], 2),
      m("div", {
        class: W(["wp-td", {
          [r(y.index, 6)]: !0
        }])
      }, [
        S(ze, {
          value: o.value.round,
          readonly: e.readonly,
          onInput: g[9] || (g[9] = (v) => f({ round: v }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: W(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 7)]: !0
        }])
      }, [
        S(ze, {
          value: o.value.num,
          readonly: e.readonly,
          onInput: g[10] || (g[10] = (v) => f({ num: v }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: W(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 8)]: !0
        }])
      }, [
        S(ze, {
          value: o.value.err,
          readonly: e.readonly,
          onInput: g[11] || (g[11] = (v) => f({ err: v }))
        }, null, 8, ["value", "readonly"])
      ], 2)
    ]));
  }
}), Uf = /* @__PURE__ */ V(Vf, [["__scopeId", "data-v-6358403f"]]), Bf = (t) => (De("data-v-ea95c2bd"), t = t(), Ce(), t), Nf = { class: "weapon-section-body" }, jf = /* @__PURE__ */ Bf(() => /* @__PURE__ */ m("div", { class: "weapon-section-row" }, [
  /* @__PURE__ */ m("div", { class: "wp-th th-deep" }, "武器名称"),
  /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "技能"),
  /* @__PURE__ */ m("div", { class: "wp-th th-deep col-mobile-hide" }, "%"),
  /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "伤害"),
  /* @__PURE__ */ m("div", { class: "wp-th th-deep col-mobile-hide" }, "射程"),
  /* @__PURE__ */ m("div", { class: "wp-th th-light col-mobile-hide" }, "贯穿"),
  /* @__PURE__ */ m("div", { class: "wp-th th-deep" }, "次数"),
  /* @__PURE__ */ m("div", { class: "wp-th th-light col-mobile-hide" }, "装弹量"),
  /* @__PURE__ */ m("div", { class: "wp-th th-deep col-mobile-hide" }, "故障")
], -1)), zf = /* @__PURE__ */ R({
  __name: "WeaponSection",
  setup(t) {
    const e = ae(), n = q(() => Array.from({ length: 4 }).map((r, a) => (e == null ? void 0 : e.value.weapons[a]) || void 0));
    return (r, a) => (w(), J(ye, { title: "武器" }, {
      default: F(() => [
        m("div", Nf, [
          jf,
          (w(!0), P(ee, null, re(n.value, (o, i) => (w(), J(Uf, {
            class: "weapon-section-row",
            key: i,
            index: i,
            weapon: o,
            readonly: i === 0
          }, null, 8, ["index", "weapon", "readonly"]))), 128))
        ])
      ]),
      _: 1
    }));
  }
}), Lf = /* @__PURE__ */ V(zf, [["__scopeId", "data-v-ea95c2bd"]]), Wf = {
  key: 0,
  class: "battle-section-body"
}, Gf = /* @__PURE__ */ R({
  __name: "BattleSection",
  setup(t) {
    const e = ae();
    return be(
      () => e == null ? void 0 : e.value.attributes,
      () => {
        if (!e) return;
        const { str: n, siz: r, dex: a } = e.value.attributes, o = Number(e.value.age);
        if (n && r) {
          const i = n + r;
          if (i < 65)
            e.value.battleAttributes.db = "-2", e.value.battleAttributes.size = "-2";
          else if (i < 85)
            e.value.battleAttributes.db = "-1", e.value.battleAttributes.size = "-1";
          else if (i < 125)
            e.value.battleAttributes.db = "0", e.value.battleAttributes.size = "0";
          else if (i < 165)
            e.value.battleAttributes.db = "1D4", e.value.battleAttributes.size = "1";
          else if (i < 205)
            e.value.battleAttributes.db = "1D6", e.value.battleAttributes.size = "2";
          else {
            const s = Math.floor((i - 205) / 80) + 2;
            e.value.battleAttributes.db = `${s}D6`, e.value.battleAttributes.size = `${s + 1}`;
          }
        }
        if (n && r && a) {
          let i = 8;
          if (n < r && a < r ? i = 7 : n > r && a > r ? i = 9 : i = 8, o >= 40) {
            const s = Math.floor((o - 40) / 10) + 1;
            i -= s;
          }
          e.value.battleAttributes.mov = `${i}`;
        }
      },
      { deep: !0 }
    ), (n, r) => (w(), J(ye, { title: "战斗" }, {
      default: F(() => [
        A(e) ? (w(), P("div", Wf, [
          S(ce, {
            label: "DB",
            modelValue: A(e).battleAttributes.db,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => A(e).battleAttributes.db = a),
            char: 4
          }, null, 8, ["modelValue"]),
          S(ce, {
            label: "体格",
            modelValue: A(e).battleAttributes.size,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => A(e).battleAttributes.size = a),
            char: 4
          }, null, 8, ["modelValue"]),
          S(ce, {
            label: "移动力",
            modelValue: A(e).battleAttributes.mov,
            "onUpdate:modelValue": r[2] || (r[2] = (a) => A(e).battleAttributes.mov = a),
            char: 4
          }, null, 8, ["modelValue"])
        ])) : G("", !0)
      ]),
      _: 1
    }));
  }
}), Hf = /* @__PURE__ */ V(Gf, [["__scopeId", "data-v-67319d57"]]), qf = { class: "writable-unit" }, Jf = { class: "label" }, Kf = ["value", "readonly"], Qf = /* @__PURE__ */ R({
  __name: "WritableUnit",
  props: {
    label: {},
    modelValue: { default: "" },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (e, n) => (w(), P("div", qf, [
      m("div", Jf, O(e.label), 1),
      m("input", {
        type: "text",
        class: "input",
        value: e.modelValue,
        readonly: e.readonly,
        onInput: n[0] || (n[0] = (r) => e.$emit("update:modelValue", r.target.value))
      }, null, 40, Kf)
    ]));
  }
}), ot = /* @__PURE__ */ V(Qf, [["__scopeId", "data-v-2bab827c"]]), Zf = {}, Xf = (t) => (De("data-v-be8afd85"), t = t(), Ce(), t), Yf = { class: "writable-divider" }, em = /* @__PURE__ */ Xf(() => /* @__PURE__ */ m("div", { class: "writable-divider-line" }, null, -1)), tm = [
  em
];
function nm(t, e) {
  return w(), P("div", Yf, tm);
}
const On = /* @__PURE__ */ V(Zf, [["render", nm], ["__scopeId", "data-v-be8afd85"]]), rm = { class: "section-row" }, am = { class: "derive-column sanity-column" }, om = { class: "units-section" }, im = { class: "derive-column hp-mp-column" }, lm = { class: "units-section" }, sm = { class: "units-section" }, um = { class: "section-row" }, cm = /* @__PURE__ */ R({
  __name: "PaperFront",
  props: {
    setRef: {}
  },
  setup(t) {
    const e = ae();
    function n(a, o, i) {
      !e || !e.value.deriveAttributes || (e.value.deriveAttributes[a][o] = i || void 0);
    }
    const r = q(() => {
      var u;
      if (!e || !e.value.attributes.pow) return "";
      const a = (u = e.value.skillPoints.find(([d]) => d === "克苏鲁神话")) == null ? void 0 : u[1], { p: o = 0, i = 0, g: s = 0 } = a || {};
      return `${99 - (a ? o + i + s : 0)}`;
    });
    return (a, o) => (w(), J(io, { setRef: a.setRef }, {
      default: F(() => [
        m("div", rm, [
          S(sd, { class: "investigator-section" }),
          S(bd, { class: "attributes-section" }),
          m("div", am, [
            S(ye, { title: "理智值" }, {
              default: F(() => {
                var i, s, l;
                return [
                  m("div", om, [
                    S(ot, {
                      label: "当前理智",
                      modelValue: `${((l = (s = (i = A(e)) == null ? void 0 : i.deriveAttributes) == null ? void 0 : s.sanity) == null ? void 0 : l.now) ?? ""}`,
                      "onUpdate:modelValue": o[0] || (o[0] = (u) => n("sanity", "now", u))
                    }, null, 8, ["modelValue"]),
                    S(On),
                    S(ot, {
                      label: "最大理智",
                      modelValue: r.value,
                      readonly: ""
                    }, null, 8, ["modelValue"])
                  ])
                ];
              }),
              _: 1
            }),
            S(xd)
          ]),
          m("div", im, [
            S(ye, { title: "生命值" }, {
              default: F(() => {
                var i, s, l, u, d, p;
                return [
                  m("div", lm, [
                    S(ot, {
                      label: "当前生命",
                      modelValue: `${((l = (s = (i = A(e)) == null ? void 0 : i.deriveAttributes) == null ? void 0 : s.hp) == null ? void 0 : l.now) ?? ""}`,
                      "onUpdate:modelValue": o[1] || (o[1] = (c) => n("hp", "now", c))
                    }, null, 8, ["modelValue"]),
                    S(On),
                    S(ot, {
                      label: "最大生命",
                      modelValue: `${((p = (d = (u = A(e)) == null ? void 0 : u.deriveAttributes) == null ? void 0 : d.hp) == null ? void 0 : p.start) ?? ""}`,
                      "onUpdate:modelValue": o[2] || (o[2] = (c) => n("hp", "start", c))
                    }, null, 8, ["modelValue"])
                  ])
                ];
              }),
              _: 1
            }),
            S(ye, { title: "魔法值" }, {
              default: F(() => {
                var i, s, l, u, d, p;
                return [
                  m("div", sm, [
                    S(ot, {
                      label: "当前魔法",
                      modelValue: `${((l = (s = (i = A(e)) == null ? void 0 : i.deriveAttributes) == null ? void 0 : s.mp) == null ? void 0 : l.now) ?? ""}`,
                      "onUpdate:modelValue": o[3] || (o[3] = (c) => n("mp", "now", c))
                    }, null, 8, ["modelValue"]),
                    S(On),
                    S(ot, {
                      label: "最大魔法",
                      modelValue: `${((p = (d = (u = A(e)) == null ? void 0 : u.deriveAttributes) == null ? void 0 : d.mp) == null ? void 0 : p.start) ?? ""}`,
                      "onUpdate:modelValue": o[4] || (o[4] = (c) => n("mp", "start", c))
                    }, null, 8, ["modelValue"])
                  ])
                ];
              }),
              _: 1
            })
          ]),
          S(_d)
        ]),
        S(Fd),
        S(xf),
        m("div", um, [
          S(Lf, { class: "col-0" }),
          S(Hf)
        ])
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), ma = /* @__PURE__ */ V(cm, [["__scopeId", "data-v-6cb250d6"]]), co = (t) => (De("data-v-c5341c4d"), t = t(), Ce(), t), pm = { class: "label" }, dm = ["rows", "placeholder", "value", "maxlength", "readonly"], fm = /* @__PURE__ */ co(() => /* @__PURE__ */ m("div", { class: "line-row" }, null, -1)), mm = /* @__PURE__ */ co(() => /* @__PURE__ */ m("div", { class: "line" }, null, -1)), ym = /* @__PURE__ */ R({
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
    const n = t, r = e, a = Ae(), o = q(() => {
      const l = n.label.length, u = n.size === "small" ? l / 0.8 : l;
      return {
        textIndent: u ? `${u + 0.4}em` : void 0
      };
    }), i = X(null);
    function s(l = !1) {
      const u = i.value;
      u && Et(() => {
        u.scrollHeight > u.clientHeight && (r("oversize"), l || s(!0));
      });
    }
    return be(
      () => [n.modelValue, a == null ? void 0 : a.printing],
      () => s()
    ), go(() => {
      s();
    }), (l, u) => {
      var d, p;
      return w(), P("div", {
        class: W(["writable-area", {
          "printing-image": (d = A(a)) == null ? void 0 : d.printing
        }])
      }, [
        m("div", pm, O(l.label), 1),
        m("textarea", {
          class: W(["input", {
            "input-size-small": n.size === "small"
          }]),
          ref_key: "inputEl",
          ref: i,
          style: Tn(o.value),
          rows: l.rows,
          placeholder: (p = A(a)) != null && p.printing ? "" : l.placeholder,
          value: l.modelValue,
          maxlength: l.maxlength,
          readonly: l.readonly,
          onInput: u[0] || (u[0] = (c) => l.$emit("update:modelValue", c.target.value))
        }, null, 46, dm),
        m("div", {
          class: W(["lines", {
            "lines-size-small": n.size === "small"
          }])
        }, [
          fm,
          (w(!0), P(ee, null, re(l.rows, (c) => (w(), P("div", {
            class: "line-row",
            key: c
          }, [
            c === 1 && l.label ? (w(), P("div", {
              key: 0,
              class: "line-row-label",
              style: Tn({
                width: `${l.label.length}em`
              })
            }, null, 4)) : G("", !0),
            mm
          ]))), 128))
        ], 2)
      ], 2);
    };
  }
}), ke = /* @__PURE__ */ V(ym, [["__scopeId", "data-v-c5341c4d"]]), hm = { class: "story-section-body" }, vm = { class: "story-section-column col-2" }, gm = { class: "story-section-column col-3" }, Fn = 3, Mn = 4, bm = /* @__PURE__ */ R({
  __name: "StorySection",
  setup(t) {
    const e = ae(), n = Ae(), r = xe([
      { label: "形象描述", fieldName: "app" },
      { label: "思想与信念", fieldName: "belief" },
      { label: "重要之人", fieldName: "IPerson" },
      { label: "意义非凡之地", fieldName: "IPlace" },
      { label: "宝贵之物", fieldName: "IItem" },
      { label: "伤口与疤痕", fieldName: "scar" },
      { label: "精神症状", fieldName: "mad" },
      { label: "特质", fieldName: "trait" }
    ]), a = xe([]), o = q(() => !(n != null && n.printing) && dn()), i = xe({ fieldName: "desc", size: "base" }), s = q(() => {
      const d = r.length - a.length, p = d * ~~(i.size === "base" ? Fn : Mn), c = i.size === "base" ? 0 : ~~(d / 6), f = p + c;
      return o.value ? Math.ceil(f / 2) : f;
    }), l = X();
    function u(d) {
      var p;
      (p = l.value) == null || p.close(), n != null && n.printing || (d.size === "small" ? l.value = Se.error("文字内容超出可显示的尺寸，如需打印，建议删减内容") : l.value = Se.warning("检测到内容较多，已为您调整文字为小尺寸")), d.size = "small";
    }
    return be(
      () => e == null ? void 0 : e.value.stories,
      () => {
        [...r, ...a, i].forEach((d) => {
          d.fieldName && !(e != null && e.value.stories[d.fieldName]) && (d.size = "base");
        });
      },
      {
        deep: !0
      }
    ), (d, p) => A(e) ? (w(), J(ye, {
      key: 0,
      title: "背景故事"
    }, {
      default: F(() => [
        m("div", hm, [
          m("div", vm, [
            (w(!0), P(ee, null, re(r, (c) => (w(), J(ke, {
              key: c.fieldName,
              label: c.label,
              modelValue: A(e).stories[c.fieldName],
              "onUpdate:modelValue": (f) => A(e).stories[c.fieldName] = f,
              rows: c.size === "small" ? Mn : Fn,
              size: c.size,
              onOversize: () => u(c)
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rows", "size", "onOversize"]))), 128))
          ]),
          m("div", gm, [
            (w(!0), P(ee, null, re(a, (c) => (w(), J(ke, {
              key: c.fieldName,
              label: c.label,
              modelValue: A(e).stories[c.fieldName],
              "onUpdate:modelValue": (f) => A(e).stories[c.fieldName] = f,
              rows: c.size === "small" ? Mn : Fn,
              size: c.size
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rows", "size"]))), 128)),
            S(ke, {
              label: "个人介绍",
              modelValue: A(e).stories.desc,
              "onUpdate:modelValue": p[0] || (p[0] = (c) => A(e).stories.desc = c),
              rows: s.value,
              size: i.size,
              onOversize: p[1] || (p[1] = () => u(i))
            }, null, 8, ["modelValue", "rows", "size"])
          ])
        ])
      ]),
      _: 1
    })) : G("", !0);
  }
}), wm = /* @__PURE__ */ V(bm, [["__scopeId", "data-v-4627bb60"]]), _m = { class: "section-body" }, Sm = /* @__PURE__ */ R({
  __name: "AssetsSection",
  setup(t) {
    const e = ae();
    return (n, r) => A(e) ? (w(), J(ye, {
      key: 0,
      title: "资产"
    }, {
      default: F(() => [
        m("div", _m, [
          S(ke, {
            label: "货币",
            rows: 1,
            maxlength: 15,
            modelValue: A(e).assets.currency,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => A(e).assets.currency = a)
          }, null, 8, ["modelValue"]),
          S(ke, {
            label: "资产",
            rows: 6,
            maxlength: 17 * 6 - 2,
            modelValue: A(e).assets.assets,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => A(e).assets.assets = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : G("", !0);
  }
}), km = /* @__PURE__ */ V(Sm, [["__scopeId", "data-v-883c9fa2"]]), Am = { class: "section-body" }, $m = /* @__PURE__ */ R({
  __name: "ItemSection",
  setup(t) {
    const e = ae();
    return (n, r) => A(e) ? (w(), J(ye, {
      key: 0,
      title: "背包"
    }, {
      default: F(() => [
        m("div", Am, [
          S(ke, {
            label: "",
            rows: 7,
            maxlength: 18 * 7,
            modelValue: A(e).assets.items,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => A(e).assets.items = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : G("", !0);
  }
}), Pm = /* @__PURE__ */ V($m, [["__scopeId", "data-v-e88640cd"]]), Im = { class: "section-body" }, xm = /* @__PURE__ */ R({
  __name: "MythosSection",
  setup(t) {
    const e = ae();
    return (n, r) => A(e) ? (w(), J(ye, {
      key: 0,
      title: "克苏鲁神话"
    }, {
      default: F(() => [
        m("div", Im, [
          S(ke, {
            label: "魔法物品与典籍",
            rows: 2,
            maxlength: 18 * 2 - 8,
            modelValue: A(e).assets.magicItems,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => A(e).assets.magicItems = a)
          }, null, 8, ["modelValue"]),
          S(ke, {
            label: "法术",
            rows: 2,
            maxlength: 18 * 2 - 3,
            modelValue: A(e).assets.magics,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => A(e).assets.magics = a)
          }, null, 8, ["modelValue"]),
          S(ke, {
            label: "第三类接触",
            rows: 3,
            maxlength: 18 * 3 - 6,
            modelValue: A(e).assets.touches,
            "onUpdate:modelValue": r[2] || (r[2] = (a) => A(e).assets.touches = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : G("", !0);
  }
}), Em = /* @__PURE__ */ V(xm, [["__scopeId", "data-v-4e6eefe2"]]), Dm = { class: "section-body" }, Cm = /* @__PURE__ */ R({
  __name: "FriendSection",
  setup(t) {
    const e = ae(), n = Ae(), r = q(() => !(n != null && n.printing) && dn()), a = q(() => r.value ? 6 : 11);
    return (o, i) => A(e) ? (w(), J(ye, {
      key: 0,
      title: "人物关系"
    }, {
      default: F(() => [
        m("div", Dm, [
          S(ke, {
            label: "",
            rows: a.value,
            modelValue: A(e).friends,
            "onUpdate:modelValue": i[0] || (i[0] = (s) => A(e).friends = s)
          }, null, 8, ["rows", "modelValue"])
        ])
      ]),
      _: 1
    })) : G("", !0);
  }
}), Rm = /* @__PURE__ */ V(Cm, [["__scopeId", "data-v-f75a0080"]]), Om = { class: "section-body" }, Fm = /* @__PURE__ */ R({
  __name: "ExperienceSection",
  setup(t) {
    const e = ae();
    return (n, r) => A(e) ? (w(), J(ye, {
      key: 0,
      title: "经历过的模组"
    }, {
      default: F(() => [
        m("div", Om, [
          S(ke, {
            label: "",
            rows: 11,
            modelValue: A(e).experiencedModules,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => A(e).experiencedModules = a)
          }, null, 8, ["modelValue"]),
          S(ke, {
            label: "",
            rows: 11,
            modelValue: A(e).experiencedModules2,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => A(e).experiencedModules2 = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : G("", !0);
  }
}), Mm = /* @__PURE__ */ V(Fm, [["__scopeId", "data-v-9f6f9604"]]), Tm = { class: "section-row" }, Vm = { class: "section-row col-2" }, Um = { class: "section-row" }, Bm = /* @__PURE__ */ R({
  __name: "PaperBack",
  props: {
    setRef: {}
  },
  setup(t) {
    return (e, n) => (w(), J(io, { setRef: e.setRef }, {
      default: F(() => [
        S(wm),
        m("div", Tm, [
          m("div", Vm, [
            S(Pm, { class: "col-0" }),
            S(km, { class: "col-0" })
          ]),
          S(Em, { class: "col-1" })
        ]),
        m("div", Um, [
          S(Mm, { class: "col-2" }),
          S(Rm, { class: "col-1" })
        ])
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), ya = /* @__PURE__ */ V(Bm, [["__scopeId", "data-v-4eabd138"]]), Nm = { class: "page theme-dark" }, jm = { class: "papers-animation-container papers-editing web-only" }, zm = { class: "sticky-footer web-only" }, Lm = /* @__PURE__ */ R({
  __name: "AppView",
  setup(t) {
    const e = Ps.parse(location.search.slice(1)), n = X(We()), r = fr(), a = xe(Jt(e)), o = xe({
      paperInFront: e.turn !== "back",
      printing: e.debug === "true",
      importing: !1,
      showTotalSeparation: e.sep === "true" || r.getItem("showTotalSeparation") || !1
    }), i = X(pa);
    be(
      () => o.showTotalSeparation,
      (y) => {
        r.setItem("showTotalSeparation", y);
      }
    ), Fs(n);
    const s = js(n, {
      viewData: a,
      pageData: o
    }), l = uu(n, a, o);
    l.init(), l.startAutoSave(), wt("pc", n), wt("viewData", a), wt("pageData", o), wt("suggestion", s), wt("cardManager", l);
    const u = xe({}), d = (y) => {
      y.preventDefault();
    }, p = (y) => {
      if (y.preventDefault(), !y.dataTransfer) {
        console.error("数据传输对象为空");
        return;
      }
      const g = y.dataTransfer.files;
      if (g.length > 0) {
        const v = g[0];
        if (v.type === "text/plain") {
          const I = new FileReader();
          I.onload = (b) => {
            const k = b.target.result;
            c(k);
          }, I.readAsText(v);
        } else
          console.error("不支持的文件类型");
      }
    }, c = (y) => {
      Se.success("导入卡数据中"), i.value && (i.value.inData = y, i.value.applyInData(), i.value.inData = "");
    }, f = q(() => Yp());
    async function h() {
      try {
        const y = await navigator.clipboard.readText();
        c(y);
      } catch {
        Se.error("无法读取剪贴板");
      }
    }
    return (y, g) => {
      const v = pe("el-icon");
      return w(), P("main", Nm, [
        m("div", {
          class: W(["paper-container theme-light", { "is-mobile": !o.printing }]),
          onDrop: p,
          onDragover: St(d, ["prevent"])
        }, [
          m("div", jm, [
            S(Qn, { name: "swipe-paper" }, {
              default: F(() => [
                (w(), J(bo, null, [
                  o.paperInFront ? (w(), J(ma, { key: 0 })) : (w(), J(ya, { key: 1 }))
                ], 1024))
              ]),
              _: 1
            })
          ]),
          m("div", {
            class: W(["papers-animation-container papers-printing", {
              "papers-printing-active": o.printing
            }])
          }, [
            S(ma, {
              setRef: (I) => {
                u.front = I;
              }
            }, null, 8, ["setRef"]),
            S(ya, {
              setRef: (I) => {
                u.back = I;
              }
            }, null, 8, ["setRef"])
          ], 2)
        ], 34),
        m("div", zm, [
          S(pa, {
            ref_key: "controlSectionRef",
            ref: i,
            paperEls: u,
            isFull: f.value,
            onSwitchPaper: g[0] || (g[0] = () => o.paperInFront = !o.paperInFront)
          }, null, 8, ["paperEls", "isFull"])
        ]),
        f.value ? (w(), P("button", {
          key: 0,
          class: "fab-clipboard web-only",
          title: "读取剪贴板",
          onClick: h
        }, [
          S(v, { size: 20 }, {
            default: F(() => [
              S(A(Za))
            ]),
            _: 1
          })
        ])) : G("", !0)
      ]);
    };
  }
}), Hm = /* @__PURE__ */ V(Lm, [["__scopeId", "data-v-7c5bf5cf"]]);
export {
  Hm as default
};
