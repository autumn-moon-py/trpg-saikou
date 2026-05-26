import { watch as ge, computed as te, unref as S, onMounted as fo, nextTick as pt, ref as z, readonly as mo, getCurrentInstance as sa, getCurrentScope as ua, onScopeDispose as ca, isRef as pa, shallowRef as da, defineComponent as V, openBlock as g, createElementBlock as _, createElementVNode as m, createBlock as Z, resolveDynamicComponent as yo, normalizeClass as ee, withCtx as U, renderSlot as $t, resolveComponent as ae, createVNode as w, createTextVNode as ue, toDisplayString as F, createCommentVNode as W, inject as Pt, reactive as Ee, normalizeStyle as On, Fragment as L, renderList as Y, pushScopeId as De, popScopeId as Ie, withDirectives as Ze, h as hr, Transition as qn, vModelText as fa, vShow as ho, onActivated as ma, provide as Ct, withModifiers as ya, KeepAlive as ha } from "vue";
import { ElMessage as se, ClickOutside as va, ElMessageBox as ga } from "element-plus";
var ba = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function wa(t) {
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
var Kn = Error, Qn = EvalError, Zn = RangeError, Xn = ReferenceError, on = SyntaxError, Xe = TypeError, Yn = URIError, _a = function() {
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
    var i = Object.getOwnPropertyDescriptor(e, n);
    if (i.value !== o || i.enumerable !== !0)
      return !1;
  }
  return !0;
}, vr = typeof Symbol < "u" && Symbol, ka = _a, an = function() {
  return typeof vr != "function" || typeof Symbol != "function" || typeof vr("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : ka();
}, gr = {
  foo: {}
}, Sa = Object, ln = function() {
  return { __proto__: gr }.foo === gr.foo && !({ __proto__: null } instanceof Sa);
}, Aa = "Function.prototype.bind called on incompatible ", $a = Object.prototype.toString, Pa = Math.max, xa = "[object Function]", br = function(e, n) {
  for (var r = [], o = 0; o < e.length; o += 1)
    r[o] = e[o];
  for (var a = 0; a < n.length; a += 1)
    r[a + e.length] = n[a];
  return r;
}, Ea = function(e, n) {
  for (var r = [], o = n, a = 0; o < e.length; o += 1, a += 1)
    r[a] = e[o];
  return r;
}, Da = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, Ia = function(e) {
  var n = this;
  if (typeof n != "function" || $a.apply(n) !== xa)
    throw new TypeError(Aa + n);
  for (var r = Ea(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var p = n.apply(
        this,
        br(r, arguments)
      );
      return Object(p) === p ? p : this;
    }
    return n.apply(
      e,
      br(r, arguments)
    );
  }, i = Pa(0, n.length - r.length), s = [], l = 0; l < i; l++)
    s[l] = "$" + l;
  if (o = Function("binder", "return function (" + Da(s, ",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, Ra = Ia, xt = Function.prototype.bind || Ra, Fa = Function.prototype.call, Oa = Object.prototype.hasOwnProperty, Ca = xt, er = Ca.call(Fa, Oa), J, Ta = Kn, Va = Qn, Ma = Zn, Ua = Xn, dt = on, st = Xe, Ba = Yn, vo = Function, cn = function(t) {
  try {
    return vo('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, We = Object.getOwnPropertyDescriptor;
if (We)
  try {
    We({}, "");
  } catch {
    We = null;
  }
var pn = function() {
  throw new st();
}, ja = We ? function() {
  try {
    return arguments.callee, pn;
  } catch {
    try {
      return We(arguments, "callee").get;
    } catch {
      return pn;
    }
  }
}() : pn, tt = an(), Na = ln(), pe = Object.getPrototypeOf || (Na ? function(t) {
  return t.__proto__;
} : null), at = {}, za = typeof Uint8Array > "u" || !pe ? J : pe(Uint8Array), Ge = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? J : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? J : ArrayBuffer,
  "%ArrayIteratorPrototype%": tt && pe ? pe([][Symbol.iterator]()) : J,
  "%AsyncFromSyncIteratorPrototype%": J,
  "%AsyncFunction%": at,
  "%AsyncGenerator%": at,
  "%AsyncGeneratorFunction%": at,
  "%AsyncIteratorPrototype%": at,
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
  "%Error%": Ta,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Va,
  "%Float32Array%": typeof Float32Array > "u" ? J : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? J : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? J : FinalizationRegistry,
  "%Function%": vo,
  "%GeneratorFunction%": at,
  "%Int8Array%": typeof Int8Array > "u" ? J : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? J : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? J : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": tt && pe ? pe(pe([][Symbol.iterator]())) : J,
  "%JSON%": typeof JSON == "object" ? JSON : J,
  "%Map%": typeof Map > "u" ? J : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !tt || !pe ? J : pe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? J : Promise,
  "%Proxy%": typeof Proxy > "u" ? J : Proxy,
  "%RangeError%": Ma,
  "%ReferenceError%": Ua,
  "%Reflect%": typeof Reflect > "u" ? J : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? J : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !tt || !pe ? J : pe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? J : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": tt && pe ? pe(""[Symbol.iterator]()) : J,
  "%Symbol%": tt ? Symbol : J,
  "%SyntaxError%": dt,
  "%ThrowTypeError%": ja,
  "%TypedArray%": za,
  "%TypeError%": st,
  "%Uint8Array%": typeof Uint8Array > "u" ? J : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? J : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? J : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? J : Uint32Array,
  "%URIError%": Ba,
  "%WeakMap%": typeof WeakMap > "u" ? J : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? J : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? J : WeakSet
};
if (pe)
  try {
    null.error;
  } catch (t) {
    var La = pe(pe(t));
    Ge["%Error.prototype%"] = La;
  }
var Wa = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = cn("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = cn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = cn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && pe && (n = pe(o.prototype));
  }
  return Ge[e] = n, n;
}, wr = {
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
}, Et = xt, Gt = er, Ga = Et.call(Function.call, Array.prototype.concat), Ha = Et.call(Function.apply, Array.prototype.splice), _r = Et.call(Function.call, String.prototype.replace), Ht = Et.call(Function.call, String.prototype.slice), qa = Et.call(Function.call, RegExp.prototype.exec), Ja = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ka = /\\(\\)?/g, Qa = function(e) {
  var n = Ht(e, 0, 1), r = Ht(e, -1);
  if (n === "%" && r !== "%")
    throw new dt("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new dt("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return _r(e, Ja, function(a, i, s, l) {
    o[o.length] = s ? _r(l, Ka, "$1") : i || a;
  }), o;
}, Za = function(e, n) {
  var r = e, o;
  if (Gt(wr, r) && (o = wr[r], r = "%" + o[0] + "%"), Gt(Ge, r)) {
    var a = Ge[r];
    if (a === at && (a = Wa(r)), typeof a > "u" && !n)
      throw new st("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: a
    };
  }
  throw new dt("intrinsic " + e + " does not exist!");
}, tr = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new st("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new st('"allowMissing" argument must be a boolean');
  if (qa(/^%?[^%]*%?$/, e) === null)
    throw new dt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = Qa(e), o = r.length > 0 ? r[0] : "", a = Za("%" + o + "%", n), i = a.name, s = a.value, l = !1, u = a.alias;
  u && (o = u[0], Ha(r, Ga([0, 1], u)));
  for (var p = 1, d = !0; p < r.length; p += 1) {
    var c = r[p], f = Ht(c, 0, 1), v = Ht(c, -1);
    if ((f === '"' || f === "'" || f === "`" || v === '"' || v === "'" || v === "`") && f !== v)
      throw new dt("property names with quotes must have matching quotes");
    if ((c === "constructor" || !d) && (l = !0), o += "." + c, i = "%" + o + "%", Gt(Ge, i))
      s = Ge[i];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new st("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (We && p + 1 >= r.length) {
        var y = We(s, c);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        d = Gt(s, c), s = s[c];
      d && !l && (Ge[i] = s);
    }
  }
  return s;
}, go = { exports: {} }, K, Xa = Kn, Ya = Qn, ei = Zn, ti = Xn, ft = on, ut = Xe, ni = Yn, bo = Function, dn = function(t) {
  try {
    return bo('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, He = Object.getOwnPropertyDescriptor;
if (He)
  try {
    He({}, "");
  } catch {
    He = null;
  }
var fn = function() {
  throw new ut();
}, ri = He ? function() {
  try {
    return arguments.callee, fn;
  } catch {
    try {
      return He(arguments, "callee").get;
    } catch {
      return fn;
    }
  }
}() : fn, nt = an(), oi = ln(), de = Object.getPrototypeOf || (oi ? function(t) {
  return t.__proto__;
} : null), it = {}, ai = typeof Uint8Array > "u" || !de ? K : de(Uint8Array), qe = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? K : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? K : ArrayBuffer,
  "%ArrayIteratorPrototype%": nt && de ? de([][Symbol.iterator]()) : K,
  "%AsyncFromSyncIteratorPrototype%": K,
  "%AsyncFunction%": it,
  "%AsyncGenerator%": it,
  "%AsyncGeneratorFunction%": it,
  "%AsyncIteratorPrototype%": it,
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
  "%Error%": Xa,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Ya,
  "%Float32Array%": typeof Float32Array > "u" ? K : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? K : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? K : FinalizationRegistry,
  "%Function%": bo,
  "%GeneratorFunction%": it,
  "%Int8Array%": typeof Int8Array > "u" ? K : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? K : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? K : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": nt && de ? de(de([][Symbol.iterator]())) : K,
  "%JSON%": typeof JSON == "object" ? JSON : K,
  "%Map%": typeof Map > "u" ? K : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !nt || !de ? K : de((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? K : Promise,
  "%Proxy%": typeof Proxy > "u" ? K : Proxy,
  "%RangeError%": ei,
  "%ReferenceError%": ti,
  "%Reflect%": typeof Reflect > "u" ? K : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? K : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !nt || !de ? K : de((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? K : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": nt && de ? de(""[Symbol.iterator]()) : K,
  "%Symbol%": nt ? Symbol : K,
  "%SyntaxError%": ft,
  "%ThrowTypeError%": ri,
  "%TypedArray%": ai,
  "%TypeError%": ut,
  "%Uint8Array%": typeof Uint8Array > "u" ? K : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? K : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? K : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? K : Uint32Array,
  "%URIError%": ni,
  "%WeakMap%": typeof WeakMap > "u" ? K : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? K : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? K : WeakSet
};
if (de)
  try {
    null.error;
  } catch (t) {
    var ii = de(de(t));
    qe["%Error.prototype%"] = ii;
  }
var li = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = dn("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = dn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = dn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && de && (n = de(o.prototype));
  }
  return qe[e] = n, n;
}, kr = {
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
}, Dt = xt, qt = er, si = Dt.call(Function.call, Array.prototype.concat), ui = Dt.call(Function.apply, Array.prototype.splice), Sr = Dt.call(Function.call, String.prototype.replace), Jt = Dt.call(Function.call, String.prototype.slice), ci = Dt.call(Function.call, RegExp.prototype.exec), pi = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, di = /\\(\\)?/g, fi = function(e) {
  var n = Jt(e, 0, 1), r = Jt(e, -1);
  if (n === "%" && r !== "%")
    throw new ft("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new ft("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Sr(e, pi, function(a, i, s, l) {
    o[o.length] = s ? Sr(l, di, "$1") : i || a;
  }), o;
}, mi = function(e, n) {
  var r = e, o;
  if (qt(kr, r) && (o = kr[r], r = "%" + o[0] + "%"), qt(qe, r)) {
    var a = qe[r];
    if (a === it && (a = li(r)), typeof a > "u" && !n)
      throw new ut("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: a
    };
  }
  throw new ft("intrinsic " + e + " does not exist!");
}, yi = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new ut("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new ut('"allowMissing" argument must be a boolean');
  if (ci(/^%?[^%]*%?$/, e) === null)
    throw new ft("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = fi(e), o = r.length > 0 ? r[0] : "", a = mi("%" + o + "%", n), i = a.name, s = a.value, l = !1, u = a.alias;
  u && (o = u[0], ui(r, si([0, 1], u)));
  for (var p = 1, d = !0; p < r.length; p += 1) {
    var c = r[p], f = Jt(c, 0, 1), v = Jt(c, -1);
    if ((f === '"' || f === "'" || f === "`" || v === '"' || v === "'" || v === "`") && f !== v)
      throw new ft("property names with quotes must have matching quotes");
    if ((c === "constructor" || !d) && (l = !0), o += "." + c, i = "%" + o + "%", qt(qe, i))
      s = qe[i];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new ut("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (He && p + 1 >= r.length) {
        var y = He(s, c);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        d = qt(s, c), s = s[c];
      d && !l && (qe[i] = s);
    }
  }
  return s;
}, mn, Ar;
function hi() {
  if (Ar) return mn;
  Ar = 1;
  var t, e = Kn, n = Qn, r = Zn, o = Xn, a = on, i = Xe, s = Yn, l = Function, u = function(N) {
    try {
      return l('"use strict"; return (' + N + ").constructor;")();
    } catch {
    }
  }, p = Object.getOwnPropertyDescriptor;
  if (p)
    try {
      p({}, "");
    } catch {
      p = null;
    }
  var d = function() {
    throw new i();
  }, c = p ? function() {
    try {
      return arguments.callee, d;
    } catch {
      try {
        return p(arguments, "callee").get;
      } catch {
        return d;
      }
    }
  }() : d, f = an(), v = ln(), y = Object.getPrototypeOf || (v ? function(N) {
    return N.__proto__;
  } : null), b = {}, h = typeof Uint8Array > "u" || !y ? t : y(Uint8Array), P = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
    "%ArrayIteratorPrototype%": f && y ? y([][Symbol.iterator]()) : t,
    "%AsyncFromSyncIteratorPrototype%": t,
    "%AsyncFunction%": b,
    "%AsyncGenerator%": b,
    "%AsyncGeneratorFunction%": b,
    "%AsyncIteratorPrototype%": b,
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
    "%GeneratorFunction%": b,
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
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? t : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? t : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !f || !y ? t : y((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? t : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": f && y ? y(""[Symbol.iterator]()) : t,
    "%Symbol%": f ? Symbol : t,
    "%SyntaxError%": a,
    "%ThrowTypeError%": c,
    "%TypedArray%": h,
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
    } catch (N) {
      var k = y(y(N));
      P["%Error.prototype%"] = k;
    }
  var $ = function N(E) {
    var C;
    if (E === "%AsyncFunction%")
      C = u("async function () {}");
    else if (E === "%GeneratorFunction%")
      C = u("function* () {}");
    else if (E === "%AsyncGeneratorFunction%")
      C = u("async function* () {}");
    else if (E === "%AsyncGenerator%") {
      var M = N("%AsyncGeneratorFunction%");
      M && (C = M.prototype);
    } else if (E === "%AsyncIteratorPrototype%") {
      var ne = N("%AsyncGenerator%");
      ne && y && (C = y(ne.prototype));
    }
    return P[E] = C, C;
  }, I = {
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
  }, A = xt, x = er, D = A.call(Function.call, Array.prototype.concat), X = A.call(Function.apply, Array.prototype.splice), R = A.call(Function.call, String.prototype.replace), H = A.call(Function.call, String.prototype.slice), j = A.call(Function.call, RegExp.prototype.exec), B = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, O = /\\(\\)?/g, T = function(E) {
    var C = H(E, 0, 1), M = H(E, -1);
    if (C === "%" && M !== "%")
      throw new a("invalid intrinsic syntax, expected closing `%`");
    if (M === "%" && C !== "%")
      throw new a("invalid intrinsic syntax, expected opening `%`");
    var ne = [];
    return R(E, B, function(me, _e, ce, Re) {
      ne[ne.length] = ce ? R(Re, O, "$1") : _e || me;
    }), ne;
  }, q = function(E, C) {
    var M = E, ne;
    if (x(I, M) && (ne = I[M], M = "%" + ne[0] + "%"), x(P, M)) {
      var me = P[M];
      if (me === b && (me = $(M)), typeof me > "u" && !C)
        throw new i("intrinsic " + E + " exists, but is not available. Please file an issue!");
      return {
        alias: ne,
        name: M,
        value: me
      };
    }
    throw new a("intrinsic " + E + " does not exist!");
  };
  return mn = function(E, C) {
    if (typeof E != "string" || E.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof C != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (j(/^%?[^%]*%?$/, E) === null)
      throw new a("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var M = T(E), ne = M.length > 0 ? M[0] : "", me = q("%" + ne + "%", C), _e = me.name, ce = me.value, Re = !1, ke = me.alias;
    ke && (ne = ke[0], X(M, D([0, 1], ke)));
    for (var Ue = 1, Ce = !0; Ue < M.length; Ue += 1) {
      var be = M[Ue], et = H(be, 0, 1), Ft = H(be, -1);
      if ((et === '"' || et === "'" || et === "`" || Ft === '"' || Ft === "'" || Ft === "`") && et !== Ft)
        throw new a("property names with quotes must have matching quotes");
      if ((be === "constructor" || !Ce) && (Re = !0), ne += "." + be, _e = "%" + ne + "%", x(P, _e))
        ce = P[_e];
      else if (ce != null) {
        if (!(be in ce)) {
          if (!C)
            throw new i("base intrinsic for " + E + " exists, but the property is not available.");
          return;
        }
        if (p && Ue + 1 >= M.length) {
          var Ot = p(ce, be);
          Ce = !!Ot, Ce && "get" in Ot && !("originalValue" in Ot.get) ? ce = Ot.get : ce = ce[be];
        } else
          Ce = x(ce, be), ce = ce[be];
        Ce && !Re && (P[_e] = ce);
      }
    }
    return ce;
  }, mn;
}
var yn, $r;
function nr() {
  if ($r) return yn;
  $r = 1;
  var t = hi(), e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return yn = e, yn;
}
var vi = "Function.prototype.bind called on incompatible ", hn = Array.prototype.slice, gi = Object.prototype.toString, bi = "[object Function]", wi = function(e) {
  var n = this;
  if (typeof n != "function" || gi.call(n) !== bi)
    throw new TypeError(vi + n);
  for (var r = hn.call(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var p = n.apply(
        this,
        r.concat(hn.call(arguments))
      );
      return Object(p) === p ? p : this;
    } else
      return n.apply(
        e,
        r.concat(hn.call(arguments))
      );
  }, i = Math.max(0, n.length - r.length), s = [], l = 0; l < i; l++)
    s.push("$" + l);
  if (o = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, _i = wi, ki = Function.prototype.bind || _i, Si = "Function.prototype.bind called on incompatible ", vn = Array.prototype.slice, Ai = Object.prototype.toString, $i = "[object Function]", Pi = function(e) {
  var n = this;
  if (typeof n != "function" || Ai.call(n) !== $i)
    throw new TypeError(Si + n);
  for (var r = vn.call(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var p = n.apply(
        this,
        r.concat(vn.call(arguments))
      );
      return Object(p) === p ? p : this;
    } else
      return n.apply(
        e,
        r.concat(vn.call(arguments))
      );
  }, i = Math.max(0, n.length - r.length), s = [], l = 0; l < i; l++)
    s.push("$" + l);
  if (o = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(a), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, o.prototype = new u(), u.prototype = null;
  }
  return o;
}, xi = Pi, Ei = Function.prototype.bind || xi, Di = Ei, Ii = Di.call(Function.call, Object.prototype.hasOwnProperty), Q, mt = SyntaxError, wo = Function, ct = TypeError, gn = function(t) {
  try {
    return wo('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Je = Object.getOwnPropertyDescriptor;
if (Je)
  try {
    Je({}, "");
  } catch {
    Je = null;
  }
var bn = function() {
  throw new ct();
}, Ri = Je ? function() {
  try {
    return arguments.callee, bn;
  } catch {
    try {
      return Je(arguments, "callee").get;
    } catch {
      return bn;
    }
  }
}() : bn, rt = an(), Fi = ln(), fe = Object.getPrototypeOf || (Fi ? function(t) {
  return t.__proto__;
} : null), lt = {}, Oi = typeof Uint8Array > "u" || !fe ? Q : fe(Uint8Array), Ke = {
  "%AggregateError%": typeof AggregateError > "u" ? Q : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Q : ArrayBuffer,
  "%ArrayIteratorPrototype%": rt && fe ? fe([][Symbol.iterator]()) : Q,
  "%AsyncFromSyncIteratorPrototype%": Q,
  "%AsyncFunction%": lt,
  "%AsyncGenerator%": lt,
  "%AsyncGeneratorFunction%": lt,
  "%AsyncIteratorPrototype%": lt,
  "%Atomics%": typeof Atomics > "u" ? Q : Atomics,
  "%BigInt%": typeof BigInt > "u" ? Q : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? Q : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? Q : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? Q : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? Q : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? Q : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Q : FinalizationRegistry,
  "%Function%": wo,
  "%GeneratorFunction%": lt,
  "%Int8Array%": typeof Int8Array > "u" ? Q : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? Q : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? Q : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": rt && fe ? fe(fe([][Symbol.iterator]())) : Q,
  "%JSON%": typeof JSON == "object" ? JSON : Q,
  "%Map%": typeof Map > "u" ? Q : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !rt || !fe ? Q : fe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? Q : Promise,
  "%Proxy%": typeof Proxy > "u" ? Q : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? Q : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? Q : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !rt || !fe ? Q : fe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Q : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": rt && fe ? fe(""[Symbol.iterator]()) : Q,
  "%Symbol%": rt ? Symbol : Q,
  "%SyntaxError%": mt,
  "%ThrowTypeError%": Ri,
  "%TypedArray%": Oi,
  "%TypeError%": ct,
  "%Uint8Array%": typeof Uint8Array > "u" ? Q : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Q : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? Q : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? Q : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? Q : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? Q : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? Q : WeakSet
};
if (fe)
  try {
    null.error;
  } catch (t) {
    var Ci = fe(fe(t));
    Ke["%Error.prototype%"] = Ci;
  }
var Ti = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = gn("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = gn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = gn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = t("%AsyncGenerator%");
    o && fe && (n = fe(o.prototype));
  }
  return Ke[e] = n, n;
}, Pr = {
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
}, It = ki, Kt = Ii, Vi = It.call(Function.call, Array.prototype.concat), Mi = It.call(Function.apply, Array.prototype.splice), xr = It.call(Function.call, String.prototype.replace), Qt = It.call(Function.call, String.prototype.slice), Ui = It.call(Function.call, RegExp.prototype.exec), Bi = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ji = /\\(\\)?/g, Ni = function(e) {
  var n = Qt(e, 0, 1), r = Qt(e, -1);
  if (n === "%" && r !== "%")
    throw new mt("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new mt("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return xr(e, Bi, function(a, i, s, l) {
    o[o.length] = s ? xr(l, ji, "$1") : i || a;
  }), o;
}, zi = function(e, n) {
  var r = e, o;
  if (Kt(Pr, r) && (o = Pr[r], r = "%" + o[0] + "%"), Kt(Ke, r)) {
    var a = Ke[r];
    if (a === lt && (a = Ti(r)), typeof a > "u" && !n)
      throw new ct("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: r,
      value: a
    };
  }
  throw new mt("intrinsic " + e + " does not exist!");
}, Li = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new ct("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new ct('"allowMissing" argument must be a boolean');
  if (Ui(/^%?[^%]*%?$/, e) === null)
    throw new mt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = Ni(e), o = r.length > 0 ? r[0] : "", a = zi("%" + o + "%", n), i = a.name, s = a.value, l = !1, u = a.alias;
  u && (o = u[0], Mi(r, Vi([0, 1], u)));
  for (var p = 1, d = !0; p < r.length; p += 1) {
    var c = r[p], f = Qt(c, 0, 1), v = Qt(c, -1);
    if ((f === '"' || f === "'" || f === "`" || v === '"' || v === "'" || v === "`") && f !== v)
      throw new mt("property names with quotes must have matching quotes");
    if ((c === "constructor" || !d) && (l = !0), o += "." + c, i = "%" + o + "%", Kt(Ke, i))
      s = Ke[i];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new ct("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Je && p + 1 >= r.length) {
        var y = Je(s, c);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        d = Kt(s, c), s = s[c];
      d && !l && (Ke[i] = s);
    }
  }
  return s;
}, Wi = Li, zt = Wi("%Object.getOwnPropertyDescriptor%", !0);
if (zt)
  try {
    zt([], "length");
  } catch {
    zt = null;
  }
var _o = zt, Er = nr(), Gi = on, ot = Xe, Dr = _o, Hi = function(e, n, r) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new ot("`obj` must be an object or a function`");
  if (typeof n != "string" && typeof n != "symbol")
    throw new ot("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new ot("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new ot("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new ot("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new ot("`loose`, if provided, must be a boolean");
  var o = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, l = !!Dr && Dr(e, n);
  if (Er)
    Er(e, n, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: o === null && l ? l.enumerable : !o,
      value: r,
      writable: a === null && l ? l.writable : !a
    });
  else if (s || !o && !a && !i)
    e[n] = r;
  else
    throw new Gi("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Cn = nr(), ko = function() {
  return !!Cn;
};
ko.hasArrayLengthDefineBug = function() {
  if (!Cn)
    return null;
  try {
    return Cn([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var qi = ko, Ji = yi, Ir = Hi, Ki = qi(), Rr = _o, Fr = Xe, Qi = Ji("%Math.floor%"), Zi = function(e, n) {
  if (typeof e != "function")
    throw new Fr("`fn` is not a function");
  if (typeof n != "number" || n < 0 || n > 4294967295 || Qi(n) !== n)
    throw new Fr("`length` must be a positive 32-bit integer");
  var r = arguments.length > 2 && !!arguments[2], o = !0, a = !0;
  if ("length" in e && Rr) {
    var i = Rr(e, "length");
    i && !i.configurable && (o = !1), i && !i.writable && (a = !1);
  }
  return (o || a || !r) && (Ki ? Ir(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n,
    !0,
    !0
  ) : Ir(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n
  )), e;
};
(function(t) {
  var e = xt, n = tr, r = Zi, o = Xe, a = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"), s = n("%Reflect.apply%", !0) || e.call(i, a), l = nr(), u = n("%Math.max%");
  t.exports = function(c) {
    if (typeof c != "function")
      throw new o("a function is required");
    var f = s(e, i, arguments);
    return r(
      f,
      1 + u(0, c.length - (arguments.length - 1)),
      !0
    );
  };
  var p = function() {
    return s(e, a, arguments);
  };
  l ? l(t.exports, "apply", { value: p }) : t.exports.apply = p;
})(go);
var Xi = go.exports, So = tr, Ao = Xi, Yi = Ao(So("String.prototype.indexOf")), el = function(e, n) {
  var r = So(e, !!n);
  return typeof r == "function" && Yi(e, ".prototype.") > -1 ? Ao(r) : r;
};
const tl = {}, nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tl
}, Symbol.toStringTag, { value: "Module" })), rl = /* @__PURE__ */ wa(nl);
var rr = typeof Map == "function" && Map.prototype, wn = Object.getOwnPropertyDescriptor && rr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Zt = rr && wn && typeof wn.get == "function" ? wn.get : null, Or = rr && Map.prototype.forEach, or = typeof Set == "function" && Set.prototype, _n = Object.getOwnPropertyDescriptor && or ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Xt = or && _n && typeof _n.get == "function" ? _n.get : null, Cr = or && Set.prototype.forEach, ol = typeof WeakMap == "function" && WeakMap.prototype, kt = ol ? WeakMap.prototype.has : null, al = typeof WeakSet == "function" && WeakSet.prototype, St = al ? WeakSet.prototype.has : null, il = typeof WeakRef == "function" && WeakRef.prototype, Tr = il ? WeakRef.prototype.deref : null, ll = Boolean.prototype.valueOf, sl = Object.prototype.toString, ul = Function.prototype.toString, cl = String.prototype.match, ar = String.prototype.slice, Ve = String.prototype.replace, pl = String.prototype.toUpperCase, Vr = String.prototype.toLowerCase, $o = RegExp.prototype.test, Mr = Array.prototype.concat, xe = Array.prototype.join, dl = Array.prototype.slice, Ur = Math.floor, Tn = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, kn = Object.getOwnPropertySymbols, Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, yt = typeof Symbol == "function" && typeof Symbol.iterator == "object", ye = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === yt || !0) ? Symbol.toStringTag : null, Po = Object.prototype.propertyIsEnumerable, Br = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function jr(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || $o.call(/e/, e))
    return e;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var r = t < 0 ? -Ur(-t) : Ur(t);
    if (r !== t) {
      var o = String(r), a = ar.call(e, o.length + 1);
      return Ve.call(o, n, "$&_") + "." + Ve.call(Ve.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Ve.call(e, n, "$&_");
}
var Mn = rl, Nr = Mn.custom, zr = Eo(Nr) ? Nr : null, fl = function t(e, n, r, o) {
  var a = n || {};
  if (Te(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Te(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = Te(a, "customInspect") ? a.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Te(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Te(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = a.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Io(e, a);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var l = String(e);
    return s ? jr(e, l) : l;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return s ? jr(e, u) : u;
  }
  var p = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof r > "u" && (r = 0), r >= p && p > 0 && typeof e == "object")
    return Un(e) ? "[Array]" : "[Object]";
  var d = Rl(a, r);
  if (typeof o > "u")
    o = [];
  else if (Do(o, e) >= 0)
    return "[Circular]";
  function c(B, O, T) {
    if (O && (o = dl.call(o), o.push(O)), T) {
      var q = {
        depth: a.depth
      };
      return Te(a, "quoteStyle") && (q.quoteStyle = a.quoteStyle), t(B, q, r + 1, o);
    }
    return t(B, a, r + 1, o);
  }
  if (typeof e == "function" && !Lr(e)) {
    var f = kl(e), v = Tt(e, c);
    return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (v.length > 0 ? " { " + xe.call(v, ", ") + " }" : "");
  }
  if (Eo(e)) {
    var y = yt ? Ve.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Vn.call(e);
    return typeof e == "object" && !yt ? wt(y) : y;
  }
  if (El(e)) {
    for (var b = "<" + Vr.call(String(e.nodeName)), h = e.attributes || [], P = 0; P < h.length; P++)
      b += " " + h[P].name + "=" + xo(ml(h[P].value), "double", a);
    return b += ">", e.childNodes && e.childNodes.length && (b += "..."), b += "</" + Vr.call(String(e.nodeName)) + ">", b;
  }
  if (Un(e)) {
    if (e.length === 0)
      return "[]";
    var k = Tt(e, c);
    return d && !Il(k) ? "[" + Bn(k, d) + "]" : "[ " + xe.call(k, ", ") + " ]";
  }
  if (hl(e)) {
    var $ = Tt(e, c);
    return !("cause" in Error.prototype) && "cause" in e && !Po.call(e, "cause") ? "{ [" + String(e) + "] " + xe.call(Mr.call("[cause]: " + c(e.cause), $), ", ") + " }" : $.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + xe.call($, ", ") + " }";
  }
  if (typeof e == "object" && i) {
    if (zr && typeof e[zr] == "function" && Mn)
      return Mn(e, { depth: p - r });
    if (i !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (Sl(e)) {
    var I = [];
    return Or && Or.call(e, function(B, O) {
      I.push(c(O, e, !0) + " => " + c(B, e));
    }), Wr("Map", Zt.call(e), I, d);
  }
  if (Pl(e)) {
    var A = [];
    return Cr && Cr.call(e, function(B) {
      A.push(c(B, e));
    }), Wr("Set", Xt.call(e), A, d);
  }
  if (Al(e))
    return Sn("WeakMap");
  if (xl(e))
    return Sn("WeakSet");
  if ($l(e))
    return Sn("WeakRef");
  if (gl(e))
    return wt(c(Number(e)));
  if (wl(e))
    return wt(c(Tn.call(e)));
  if (bl(e))
    return wt(ll.call(e));
  if (vl(e))
    return wt(c(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === ba)
    return "{ [object globalThis] }";
  if (!yl(e) && !Lr(e)) {
    var x = Tt(e, c), D = Br ? Br(e) === Object.prototype : e instanceof Object || e.constructor === Object, X = e instanceof Object ? "" : "null prototype", R = !D && ye && Object(e) === e && ye in e ? ar.call(Me(e), 8, -1) : X ? "Object" : "", H = D || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", j = H + (R || X ? "[" + xe.call(Mr.call([], R || [], X || []), ": ") + "] " : "");
    return x.length === 0 ? j + "{}" : d ? j + "{" + Bn(x, d) + "}" : j + "{ " + xe.call(x, ", ") + " }";
  }
  return String(e);
};
function xo(t, e, n) {
  var r = (n.quoteStyle || e) === "double" ? '"' : "'";
  return r + t + r;
}
function ml(t) {
  return Ve.call(String(t), /"/g, "&quot;");
}
function Un(t) {
  return Me(t) === "[object Array]" && (!ye || !(typeof t == "object" && ye in t));
}
function yl(t) {
  return Me(t) === "[object Date]" && (!ye || !(typeof t == "object" && ye in t));
}
function Lr(t) {
  return Me(t) === "[object RegExp]" && (!ye || !(typeof t == "object" && ye in t));
}
function hl(t) {
  return Me(t) === "[object Error]" && (!ye || !(typeof t == "object" && ye in t));
}
function vl(t) {
  return Me(t) === "[object String]" && (!ye || !(typeof t == "object" && ye in t));
}
function gl(t) {
  return Me(t) === "[object Number]" && (!ye || !(typeof t == "object" && ye in t));
}
function bl(t) {
  return Me(t) === "[object Boolean]" && (!ye || !(typeof t == "object" && ye in t));
}
function Eo(t) {
  if (yt)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Vn)
    return !1;
  try {
    return Vn.call(t), !0;
  } catch {
  }
  return !1;
}
function wl(t) {
  if (!t || typeof t != "object" || !Tn)
    return !1;
  try {
    return Tn.call(t), !0;
  } catch {
  }
  return !1;
}
var _l = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Te(t, e) {
  return _l.call(t, e);
}
function Me(t) {
  return sl.call(t);
}
function kl(t) {
  if (t.name)
    return t.name;
  var e = cl.call(ul.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Do(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var n = 0, r = t.length; n < r; n++)
    if (t[n] === e)
      return n;
  return -1;
}
function Sl(t) {
  if (!Zt || !t || typeof t != "object")
    return !1;
  try {
    Zt.call(t);
    try {
      Xt.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Al(t) {
  if (!kt || !t || typeof t != "object")
    return !1;
  try {
    kt.call(t, kt);
    try {
      St.call(t, St);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function $l(t) {
  if (!Tr || !t || typeof t != "object")
    return !1;
  try {
    return Tr.call(t), !0;
  } catch {
  }
  return !1;
}
function Pl(t) {
  if (!Xt || !t || typeof t != "object")
    return !1;
  try {
    Xt.call(t);
    try {
      Zt.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function xl(t) {
  if (!St || !t || typeof t != "object")
    return !1;
  try {
    St.call(t, St);
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
function El(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Io(t, e) {
  if (t.length > e.maxStringLength) {
    var n = t.length - e.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Io(ar.call(t, 0, e.maxStringLength), e) + r;
  }
  var o = Ve.call(Ve.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Dl);
  return xo(o, "single", e);
}
function Dl(t) {
  var e = t.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + pl.call(e.toString(16));
}
function wt(t) {
  return "Object(" + t + ")";
}
function Sn(t) {
  return t + " { ? }";
}
function Wr(t, e, n, r) {
  var o = r ? Bn(n, r) : xe.call(n, ", ");
  return t + " (" + e + ") {" + o + "}";
}
function Il(t) {
  for (var e = 0; e < t.length; e++)
    if (Do(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Rl(t, e) {
  var n;
  if (t.indent === "	")
    n = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    n = xe.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: xe.call(Array(e + 1), n)
  };
}
function Bn(t, e) {
  if (t.length === 0)
    return "";
  var n = `
` + e.prev + e.base;
  return n + xe.call(t, "," + n) + `
` + e.prev;
}
function Tt(t, e) {
  var n = Un(t), r = [];
  if (n) {
    r.length = t.length;
    for (var o = 0; o < t.length; o++)
      r[o] = Te(t, o) ? e(t[o], t) : "";
  }
  var a = typeof kn == "function" ? kn(t) : [], i;
  if (yt) {
    i = {};
    for (var s = 0; s < a.length; s++)
      i["$" + a[s]] = a[s];
  }
  for (var l in t)
    Te(t, l) && (n && String(Number(l)) === l && l < t.length || yt && i["$" + l] instanceof Symbol || ($o.call(/[^\w$]/, l) ? r.push(e(l, t) + ": " + e(t[l], t)) : r.push(l + ": " + e(t[l], t))));
  if (typeof kn == "function")
    for (var u = 0; u < a.length; u++)
      Po.call(t, a[u]) && r.push("[" + e(a[u]) + "]: " + e(t[a[u]], t));
  return r;
}
var Ro = tr, bt = el, Fl = fl, Ol = Xe, Vt = Ro("%WeakMap%", !0), Mt = Ro("%Map%", !0), Cl = bt("WeakMap.prototype.get", !0), Tl = bt("WeakMap.prototype.set", !0), Vl = bt("WeakMap.prototype.has", !0), Ml = bt("Map.prototype.get", !0), Ul = bt("Map.prototype.set", !0), Bl = bt("Map.prototype.has", !0), ir = function(t, e) {
  for (var n = t, r; (r = n.next) !== null; n = r)
    if (r.key === e)
      return n.next = r.next, r.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = r, r;
}, jl = function(t, e) {
  var n = ir(t, e);
  return n && n.value;
}, Nl = function(t, e, n) {
  var r = ir(t, e);
  r ? r.value = n : t.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: n
  };
}, zl = function(t, e) {
  return !!ir(t, e);
}, Ll = function() {
  var e, n, r, o = {
    assert: function(a) {
      if (!o.has(a))
        throw new Ol("Side channel does not contain " + Fl(a));
    },
    get: function(a) {
      if (Vt && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return Cl(e, a);
      } else if (Mt) {
        if (n)
          return Ml(n, a);
      } else if (r)
        return jl(r, a);
    },
    has: function(a) {
      if (Vt && a && (typeof a == "object" || typeof a == "function")) {
        if (e)
          return Vl(e, a);
      } else if (Mt) {
        if (n)
          return Bl(n, a);
      } else if (r)
        return zl(r, a);
      return !1;
    },
    set: function(a, i) {
      Vt && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new Vt()), Tl(e, a, i)) : Mt ? (n || (n = new Mt()), Ul(n, a, i)) : (r || (r = { key: {}, next: null }), Nl(r, a, i));
    }
  };
  return o;
}, Wl = String.prototype.replace, Gl = /%20/g, An = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, lr = {
  default: An.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return Wl.call(t, Gl, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: An.RFC1738,
  RFC3986: An.RFC3986
}, Hl = lr, $n = Object.prototype.hasOwnProperty, Le = Array.isArray, $e = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), ql = function(e) {
  for (; e.length > 1; ) {
    var n = e.pop(), r = n.obj[n.prop];
    if (Le(r)) {
      for (var o = [], a = 0; a < r.length; ++a)
        typeof r[a] < "u" && o.push(r[a]);
      n.obj[n.prop] = o;
    }
  }
}, Fo = function(e, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (r[o] = e[o]);
  return r;
}, Jl = function t(e, n, r) {
  if (!n)
    return e;
  if (typeof n != "object") {
    if (Le(e))
      e.push(n);
    else if (e && typeof e == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !$n.call(Object.prototype, n)) && (e[n] = !0);
    else
      return [e, n];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(n);
  var o = e;
  return Le(e) && !Le(n) && (o = Fo(e, r)), Le(e) && Le(n) ? (n.forEach(function(a, i) {
    if ($n.call(e, i)) {
      var s = e[i];
      s && typeof s == "object" && a && typeof a == "object" ? e[i] = t(s, a, r) : e.push(a);
    } else
      e[i] = a;
  }), e) : Object.keys(n).reduce(function(a, i) {
    var s = n[i];
    return $n.call(a, i) ? a[i] = t(a[i], s, r) : a[i] = s, a;
  }, o);
}, Kl = function(e, n) {
  return Object.keys(n).reduce(function(r, o) {
    return r[o] = n[o], r;
  }, e);
}, Ql = function(t, e, n) {
  var r = t.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, Zl = function(e, n, r, o, a) {
  if (e.length === 0)
    return e;
  var i = e;
  if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)), r === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(p) {
      return "%26%23" + parseInt(p.slice(2), 16) + "%3B";
    });
  for (var s = "", l = 0; l < i.length; ++l) {
    var u = i.charCodeAt(l);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || a === Hl.RFC1738 && (u === 40 || u === 41)) {
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
}, Xl = function(e) {
  for (var n = [{ obj: { o: e }, prop: "o" }], r = [], o = 0; o < n.length; ++o)
    for (var a = n[o], i = a.obj[a.prop], s = Object.keys(i), l = 0; l < s.length; ++l) {
      var u = s[l], p = i[u];
      typeof p == "object" && p !== null && r.indexOf(p) === -1 && (n.push({ obj: i, prop: u }), r.push(p));
    }
  return ql(n), e;
}, Yl = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, es = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, ts = function(e, n) {
  return [].concat(e, n);
}, ns = function(e, n) {
  if (Le(e)) {
    for (var r = [], o = 0; o < e.length; o += 1)
      r.push(n(e[o]));
    return r;
  }
  return n(e);
}, Oo = {
  arrayToObject: Fo,
  assign: Kl,
  combine: ts,
  compact: Xl,
  decode: Ql,
  encode: Zl,
  isBuffer: es,
  isRegExp: Yl,
  maybeMap: ns,
  merge: Jl
}, Co = Ll, Lt = Oo, At = lr, rs = Object.prototype.hasOwnProperty, To = {
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
}, Pe = Array.isArray, os = Array.prototype.push, Vo = function(t, e) {
  os.apply(t, Pe(e) ? e : [e]);
}, as = Date.prototype.toISOString, Gr = At.default, le = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: Lt.encode,
  encodeValuesOnly: !1,
  format: Gr,
  formatter: At.formatters[Gr],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return as.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, is = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Pn = {}, ls = function t(e, n, r, o, a, i, s, l, u, p, d, c, f, v, y, b, h, P) {
  for (var k = e, $ = P, I = 0, A = !1; ($ = $.get(Pn)) !== void 0 && !A; ) {
    var x = $.get(e);
    if (I += 1, typeof x < "u") {
      if (x === I)
        throw new RangeError("Cyclic object value");
      A = !0;
    }
    typeof $.get(Pn) > "u" && (I = 0);
  }
  if (typeof p == "function" ? k = p(n, k) : k instanceof Date ? k = f(k) : r === "comma" && Pe(k) && (k = Lt.maybeMap(k, function(M) {
    return M instanceof Date ? f(M) : M;
  })), k === null) {
    if (i)
      return u && !b ? u(n, le.encoder, h, "key", v) : n;
    k = "";
  }
  if (is(k) || Lt.isBuffer(k)) {
    if (u) {
      var D = b ? n : u(n, le.encoder, h, "key", v);
      return [y(D) + "=" + y(u(k, le.encoder, h, "value", v))];
    }
    return [y(n) + "=" + y(String(k))];
  }
  var X = [];
  if (typeof k > "u")
    return X;
  var R;
  if (r === "comma" && Pe(k))
    b && u && (k = Lt.maybeMap(k, u)), R = [{ value: k.length > 0 ? k.join(",") || null : void 0 }];
  else if (Pe(p))
    R = p;
  else {
    var H = Object.keys(k);
    R = d ? H.sort(d) : H;
  }
  var j = l ? n.replace(/\./g, "%2E") : n, B = o && Pe(k) && k.length === 1 ? j + "[]" : j;
  if (a && Pe(k) && k.length === 0)
    return B + "[]";
  for (var O = 0; O < R.length; ++O) {
    var T = R[O], q = typeof T == "object" && typeof T.value < "u" ? T.value : k[T];
    if (!(s && q === null)) {
      var N = c && l ? T.replace(/\./g, "%2E") : T, E = Pe(k) ? typeof r == "function" ? r(B, N) : B : B + (c ? "." + N : "[" + N + "]");
      P.set(e, I);
      var C = Co();
      C.set(Pn, P), Vo(X, t(
        q,
        E,
        r,
        o,
        a,
        i,
        s,
        l,
        r === "comma" && b && Pe(k) ? null : u,
        p,
        d,
        c,
        f,
        v,
        y,
        b,
        h,
        C
      ));
    }
  }
  return X;
}, ss = function(e) {
  if (!e)
    return le;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = e.charset || le.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = At.default;
  if (typeof e.format < "u") {
    if (!rs.call(At.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    r = e.format;
  }
  var o = At.formatters[r], a = le.filter;
  (typeof e.filter == "function" || Pe(e.filter)) && (a = e.filter);
  var i;
  if (e.arrayFormat in To ? i = e.arrayFormat : "indices" in e ? i = e.indices ? "indices" : "repeat" : i = le.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var s = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : le.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : le.addQueryPrefix,
    allowDots: s,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : le.allowEmptyArrays,
    arrayFormat: i,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : le.charsetSentinel,
    commaRoundTrip: e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? le.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : le.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : le.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : le.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : le.encodeValuesOnly,
    filter: a,
    format: r,
    formatter: o,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : le.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : le.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : le.strictNullHandling
  };
}, us = function(t, e) {
  var n = t, r = ss(e), o, a;
  typeof r.filter == "function" ? (a = r.filter, n = a("", n)) : Pe(r.filter) && (a = r.filter, o = a);
  var i = [];
  if (typeof n != "object" || n === null)
    return "";
  var s = To[r.arrayFormat], l = s === "comma" && r.commaRoundTrip;
  o || (o = Object.keys(n)), r.sort && o.sort(r.sort);
  for (var u = Co(), p = 0; p < o.length; ++p) {
    var d = o[p];
    r.skipNulls && n[d] === null || Vo(i, ls(
      n[d],
      d,
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
}, ht = Oo, jn = Object.prototype.hasOwnProperty, cs = Array.isArray, oe = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !0,
  decoder: ht.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, ps = function(t) {
  return t.replace(/&#(\d+);/g, function(e, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, Mo = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, ds = "utf8=%26%2310003%3B", fs = "utf8=%E2%9C%93", ms = function(e, n) {
  var r = { __proto__: null }, o = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, a = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, i = o.split(n.delimiter, a), s = -1, l, u = n.charset;
  if (n.charsetSentinel)
    for (l = 0; l < i.length; ++l)
      i[l].indexOf("utf8=") === 0 && (i[l] === fs ? u = "utf-8" : i[l] === ds && (u = "iso-8859-1"), s = l, l = i.length);
  for (l = 0; l < i.length; ++l)
    if (l !== s) {
      var p = i[l], d = p.indexOf("]="), c = d === -1 ? p.indexOf("=") : d + 1, f, v;
      c === -1 ? (f = n.decoder(p, oe.decoder, u, "key"), v = n.strictNullHandling ? null : "") : (f = n.decoder(p.slice(0, c), oe.decoder, u, "key"), v = ht.maybeMap(
        Mo(p.slice(c + 1), n),
        function(b) {
          return n.decoder(b, oe.decoder, u, "value");
        }
      )), v && n.interpretNumericEntities && u === "iso-8859-1" && (v = ps(v)), p.indexOf("[]=") > -1 && (v = cs(v) ? [v] : v);
      var y = jn.call(r, f);
      y && n.duplicates === "combine" ? r[f] = ht.combine(r[f], v) : (!y || n.duplicates === "last") && (r[f] = v);
    }
  return r;
}, ys = function(t, e, n, r) {
  for (var o = r ? e : Mo(e, n), a = t.length - 1; a >= 0; --a) {
    var i, s = t[a];
    if (s === "[]" && n.parseArrays)
      i = n.allowEmptyArrays && o === "" ? [] : [].concat(o);
    else {
      i = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, u = n.decodeDotInKeys ? l.replace(/%2E/g, ".") : l, p = parseInt(u, 10);
      !n.parseArrays && u === "" ? i = { 0: o } : !isNaN(p) && s !== u && String(p) === u && p >= 0 && n.parseArrays && p <= n.arrayLimit ? (i = [], i[p] = o) : u !== "__proto__" && (i[u] = o);
    }
    o = i;
  }
  return o;
}, hs = function(e, n, r, o) {
  if (e) {
    var a = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, l = r.depth > 0 && i.exec(a), u = l ? a.slice(0, l.index) : a, p = [];
    if (u) {
      if (!r.plainObjects && jn.call(Object.prototype, u) && !r.allowPrototypes)
        return;
      p.push(u);
    }
    for (var d = 0; r.depth > 0 && (l = s.exec(a)) !== null && d < r.depth; ) {
      if (d += 1, !r.plainObjects && jn.call(Object.prototype, l[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      p.push(l[1]);
    }
    return l && p.push("[" + a.slice(l.index) + "]"), ys(p, n, r, o);
  }
}, vs = function(e) {
  if (!e)
    return oe;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = typeof e.charset > "u" ? oe.charset : e.charset, r = typeof e.duplicates > "u" ? oe.duplicates : e.duplicates;
  if (r !== "combine" && r !== "first" && r !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var o = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : oe.allowDots : !!e.allowDots;
  return {
    allowDots: o,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : oe.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : oe.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : oe.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : oe.arrayLimit,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : oe.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : oe.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : oe.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : oe.decoder,
    delimiter: typeof e.delimiter == "string" || ht.isRegExp(e.delimiter) ? e.delimiter : oe.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : oe.depth,
    duplicates: r,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : oe.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : oe.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : oe.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : oe.strictNullHandling
  };
}, gs = function(t, e) {
  var n = vs(e);
  if (t === "" || t === null || typeof t > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof t == "string" ? ms(t, n) : t, o = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = Object.keys(r), i = 0; i < a.length; ++i) {
    var s = a[i], l = hs(s, r[s], n, typeof t == "string");
    o = ht.merge(o, l, n);
  }
  return n.allowSparse === !0 ? o : ht.compact(o);
}, bs = us, ws = gs, _s = lr, ks = {
  formats: _s,
  parse: ws,
  stringify: bs
};
const Ss = /* @__PURE__ */ Jn(ks), sr = [
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
    dam: "1D3+半DB",
    tho: 1,
    range: "STR/5m",
    round: "2",
    num: "1",
    price: "0.5/3",
    err: "100",
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
  }
], Uo = {
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
  ]
}, Bo = [
  ["cg", "常规"],
  ["sq", "手枪"],
  ["bbq", "半自动步枪"],
  ["tsq", "全自动步枪"],
  ["xdq", "霰弹枪"],
  ["cfq", "冲锋枪"],
  ["jjbq", "狙击步枪"],
  ["jq", "机枪"],
  ["qt", "其它"]
];
function Nn(t) {
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
function As(t) {
  var e, n, r;
  return {
    mental: {
      hardened: ((e = t == null ? void 0 : t.mental) == null ? void 0 : e.hardened) ?? !1,
      permanentMadness: ((n = t == null ? void 0 : t.mental) == null ? void 0 : n.permanentMadness) ?? !1,
      indefiniteMadness: ((r = t == null ? void 0 : t.mental) == null ? void 0 : r.indefiniteMadness) ?? !1
    }
  };
}
function $s(t) {
  return {
    currency: (t == null ? void 0 : t.currency) ?? (t == null ? void 0 : t.cash) ?? "",
    assets: (t == null ? void 0 : t.assets) ?? "",
    items: (t == null ? void 0 : t.items) ?? "",
    magicItems: (t == null ? void 0 : t.magicItems) ?? "",
    magics: (t == null ? void 0 : t.magics) ?? "",
    touches: (t == null ? void 0 : t.touches) ?? ""
  };
}
function Wt(t) {
  const e = As(t == null ? void 0 : t.status), n = $s(t == null ? void 0 : t.assets);
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
    weapons: [Nn(sr[0])],
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
    friends: "",
    ...t,
    assets: n,
    status: e
  };
}
const ur = [
  {
    name: "信用评级",
    init: 0,
    intro: "衡量了调查员表现出来的富裕程度以及经济上的自信度。如果调查员尝试用他的经济地位来达成某个目标，那么也许使用信用评级技能会比较合适。信用评级可以被用来取代外貌APP来评估第一印象。（请将技能提升至调查员职业信用范围之内）"
  },
  {
    name: "克苏鲁神话",
    init: 0,
    intro: "“我认为，人的思维缺乏将已知事物联系起来的能力，这是世上最仁慈的事了。人类居住在幽暗的海洋中一个名为无知的小岛上，这海洋浩淼无垠、蕴藏无穷秘密，但我们并不应该航行过远，探究太深。”——H·P·爱手艺"
  },
  {
    name: "侦查",
    init: 25,
    intro: "这技能允许使用者发现密门或者秘密隔间，注意到隐藏的闯入者，发现并不明显的线索，发现重新涂过漆的汽车，意识到埋伏，注意到鼓出的口袋，或者任何类似的事情。对于调查员来说，这是一个很重要的技能。"
  },
  {
    name: "聆听",
    init: 20,
    intro: "衡量一名调查员理解声音的能力，包括偶然听到的对话，一扇关着的门后的轻声嘀咕，以及咖啡厅里的私语。KP可以用这来决定一场即将发生的遭遇的形式。甚至此外，一个较高的聆听技能可以指一名角色有着高度的泛察觉能力"
  },
  {
    name: "取悦",
    init: 15,
    intro: "取悦允许通过许多形式来使用，包括肉体魅力、诱惑、奉承或是单纯的人格魅力。取悦可能可以被用于迫使某人进行特定的行动。取悦或是心理学技能可以用于对抗取悦技能。取悦技能可以被用于讨价还价。"
  },
  {
    name: "话术",
    init: 5,
    intro: "话术特别限定于言语上的哄骗，欺骗以及误导。这技能的对立技能为心理学或者话术。经过一段时间的相信期后，对方会意识到自己被欺骗了，话术的效果总是暂时性的。也可用于砍价。"
  },
  {
    name: "恐吓",
    init: 15,
    intro: "恐吓可以以许多形式使用，包括武力威慑，心理操控，以及威胁。这通常被用来使某人害怕，并迫使其进行某种特定的行为。恐吓的对抗技能为恐吓或者心理学。同样也能拿来砍价。"
  },
  {
    name: "说服",
    init: 10,
    intro: "使用说服来通过一场论述、争辩以及讨论让目标相信一个确切的想法，概念，或者信仰。说服并不一定需要涉及真实的内容。成功的说服技能的运用将花费不少的时间：至少半小时。另外说服还可以被用于讨价还价。"
  },
  {
    name: "心理学",
    init: 10,
    intro: "对所有人来说都很通用的察觉方面的技能，允许使用者研究个人并且形成对于其他某人动机和人格的了解。在玩家的支持下，KP可能会选择进行一个心理学技能检定的暗骰，仅仅对使用这个技能的玩家声明获得的信息，真或假。"
  },
  {
    name: "母语",
    init: 0,
    initPlaceholder: "教育",
    intro: "当选择这项技能时，必须明确一门具体的语言并且写在技能的后面。在婴儿期或者童年早期，大多数人使用一门语言。",
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
    intro: "当选择这项技能时，必须明确一个具体的语言并且写在技能后面。一个人可以了解任何数量的语言。这技能代表使用者可以了解，说，读以及写一门不是他母语的语言的可能性。",
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
    init: 5,
    intro: "用来估计某种物品的价值，包括质量，使用的材料以及工艺。相关的，调查员可以准确地辨认出物品的年龄，评估它的历史关联性以及发现赝品。"
  },
  {
    name: "乔装",
    init: 5,
    intro: "使用在当调查员想要演出自己外的其它人时。使用者改变了态度，习惯，以及/或声音来进行一个乔装，以另一个人或者另一类人的形象出现。戏剧化妆品可能会有所帮助，还有伪造的身份证件。"
  },
  {
    name: "潜行",
    init: 20,
    intro: "安静地移动或躲藏的技巧，不惊扰那些可能在听或看的人们。与这项技能相关的能力意味着角色能够安静地移动或在伪装技巧上有所长。潜行也同样意味着角色可以长时间维持一定程度的谨慎冷静来使自己保持静止和隐秘。"
  },
  {
    name: "追踪",
    init: 10,
    intro: "使调查员可以凭借追踪技能来通过土壤上的脚印，或是物体通过植被时留下的印记来追踪别人，或者是交通工具以及地球上的动物。时间的经过，雨，以及土地的种类都可能会影响追踪的难度等级。"
  },
  {
    name: "读唇",
    init: 1,
    intro: "非常规技能，这个技能允许好奇的探索者不需要听到说话者的声音，就能知道他们的对话内容。必须保持视线，如果只看到一个说话者的嘴唇，对话的另外一半就听不到。读唇也可以用于与另一个人进行安静沟通（如果两人都有此技能），允许相对复杂的语意传达。"
  },
  {
    name: "人类学",
    init: 1,
    intro: "使调查员能够通过观察来辨认和理解一个人的生活方式。如过持续观察一个其他的文化一段时间，那么他可以对文化方式以及道德习惯进行简单的预测。结合心理学可以预测目标行为和信仰。"
  },
  {
    name: "图书馆使用",
    init: 20,
    intro: "图书馆使用使一名调查员能在图书馆找到一些信息，例如特定的一本书，新闻，文件或资料库，但是需要数小时的连续调查。这个技能可以定位寻找一件隐藏案例或一本稀有书籍，但是首先需要获得阅读的许可。"
  },
  {
    name: "生存",
    init: 5,
    intro: "提供专业的如何在极端环境下生存的知识和技巧。内容包括狩猎的知识，搭建住所，可能遇到的危险的知识（例如如何避开有毒性的植物）等等，取决于所处的环境。你可以花费技能点来获得任何的专业化技能。",
    group: {
      show: ["", "", ""],
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
    init: 20,
    intro: "这技能允许一名角色借助或者不借助绳索或者登山工具进行爬树、墙以及其他垂直表面。这技能也同样包括用绳索下降。许多因素将会影响难度等级。"
  },
  {
    name: "跳跃",
    init: 20,
    intro: "如果成功，调查员可以在垂直方向上跳起或跳下，或者从一个站立点或起步点水平向外跳。当从高处跌落时，一次成功的跳跃鉴定可以将跌落伤害减半。"
  },
  {
    name: "游泳",
    init: 20,
    intro: "有能力在水或者其他液体中漂浮以及移动。只有在遭遇危险时需要进行游泳技能检定，或当KP认为合适的时候。当游泳的孤注一骰失败时，可能会导致生命值损失。也可能导致人物顺着水流向下冲走，被水半淹或完全淹没。"
  },
  {
    name: "潜水",
    init: 1,
    intro: "非常规技能，使用者接受过在深海游泳的使用以及维持潜水设备的训练，水下导航，合适的下潜配重，以及应对紧急情况的方法。"
  },
  {
    name: "技艺",
    init: 5,
    intro: "该技能可能能使你制作/修理一样东西，或者制造一个复制品/赝品。对一个物品进行一次成功的鉴定可能可以提供关于该物品的相关信息",
    group: {
      show: ["", "", ""],
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
    init: 10,
    intro: "允许对物体进行视觉上的遮住，藏匿，或者掩盖，也许通过残害，衣服或者其他的干涉或促成错觉的材料。任何种类的巨大物件应当增加藏匿的难度。妙手包括偷窃，卡牌魔术，以及秘密使用手机。"
  },
  {
    name: "锁匠",
    init: 1,
    intro: "锁匠技能可以打开车门，热线自动装置，用铁撬撬开窗子，解决中国机关箱，以及穿过常规的商用警报系统。使用者可能会修锁，制作钥匙，或者在其他工具的帮助下打开锁。特别困难的锁可能会需要一个更高的难度等级。"
  },
  {
    name: "电气维修",
    init: 10,
    intro: "使调查员能够修理或者改装电气设备。在现代，这技能对现代电子器件几乎做不到什么。为了维修电气设备，可能需要特殊的部件或者工具。也可用于现代的爆破作业。"
  },
  {
    name: "机械维修",
    init: 10,
    intro: "这技能允许调查员修理破损的机器或制造一个新的。基础的木工手艺，管道项目，制作物品也同样可以。这技能可以用来打开普通的锁，但更加专业的就不能。机械维修通常与电气维修相伴，修理一个复杂的设备往往两者皆需。"
  },
  {
    name: "导航",
    init: 10,
    intro: "允许使用者认清自己的路。有着更高技能的人将熟悉各种定位装置。一名角色可以用这技能来测量并对某区域进行绘图（制图学），使用工具可以降低甚至取消难度等级。若角色对某区域十分熟悉，那么在检定上可以得到奖励。"
  },
  {
    name: "骑术",
    init: 5,
    intro: "这技能被用于驾驭马，驴子或者骡子，以及获得对这些骑乘动物的基础照料知识，如何在疾驰中或困难地形上操纵坐骑。当坐骑意外地抬起身子或失足时，骑手保持自己在坐骑上不摔落的几率等同于他的骑术技能。"
  },
  {
    name: "操作重型机械",
    init: 1,
    intro: "当驾驶以及操纵一辆坦克，挖土机或者其他巨型建造机械时需要这个技能。对于种类非常不同的机械，KP可以决定难度等级。"
  },
  {
    name: "汽车驾驶",
    init: 20,
    intro: "任何有着这技能的人都可以驾驶一辆汽车或者轻型卡车，进行常规的移动，并且处理机动车的一般毛病。如果调查员想要甩掉一名追踪者或者追踪某人，则需要一个汽车驾驶检定。"
  },
  {
    name: "驾驶",
    init: 1,
    intro: "这是操控飞行器或船只或其他的技能，汽车驾驶在上面。驾驶（飞行器）：了解并能够日益掌握一类飞行器。着陆时，就算在最佳的状况，也必须进行驾驶掷骰。失败的结果视情况而定。驾驶（船）：了解小型马达船和帆船在风中、暴风雨中、海潮中的各种行为，并可以从波浪与风的表现中读出暗礁及迫近的暴风雨。在风中，新水手连停艘小船都是困难的。",
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
    init: 5,
    intro: "非常规技能，用于命令、训练驯服动物进行简单任务的技能。这技能最常用在狗身上，但也不排除鸟、猫、猴子，或是其他（由KP判定）。"
  },
  {
    name: "计算机使用Ω",
    init: 5,
    intro: "这技能允许调查员用各种不同的电脑语言进行编程；恢复或者分析隐藏的数据；解除被加了保护的系统；探索一个复杂的网络；或者发现别人的骇入、后门程序、病毒。对电脑系统的特殊操作可能会需要这个检定。仅在现代可用。"
  },
  {
    name: "格斗",
    init: 0,
    intro: "格斗技能指的是一名角色在近距离战斗上的技能。你可以花费一定的点数来获得任何的专业化技能。",
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
    intro: "包括了各种形式的火器，也包括了弓箭和弩。",
    name: "射击",
    group: {
      show: ["手枪", "步/霰", ""],
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
    initPlaceholder: "1/2敏捷",
    intro: "允许调查员本能地闪避攻击，投掷过来的投射物以及诸如此类的。闪避可以通过经验来提升，就像其他的技能一样。如果一次攻击可以被看见，调查员可以尝试闪避开它。无法躲避子弹。"
  },
  {
    name: "投掷",
    init: 20,
    intro: "当需要用物体击中目标或者用物件的正确部分击中目标（例如小刀或者短柄小斧的刃）时，使用投掷技能。一件有着合理平衡构架的可以藏于手中大小的物品可以被投掷至多等同于STR码的距离。"
  },
  {
    name: "武术",
    init: 15,
    intro: "徒手或使用兵器的格斗技术，包含各种流派的拳法、掌法、腿法，以及武器招式的运用。",
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
    init: 1,
    intro: "非常规技能，调查员可以使用此技能安全的设置/拆除爆破装置。给予足够的时间和资源，调查员可以装设炸药来摧毁一幢建筑，清除一个被堵住的隧道，以及赋予炸药不同用处。"
  },
  {
    name: "炮术",
    init: 1,
    intro: "非常规技能，这技能呈现出对一些形式的军事训练和经历。使用者具有在战争中操作战地武器的经验。这些武器通常过于巨大以至于无法单人进行操作，并且个人无法再没有工作队支援的情况下使用这武器，或者应当提高难度等级。"
  },
  {
    name: "急救",
    init: 30,
    intro: "使用者有能力可以提供紧急的医疗处理，唤醒昏迷者。急救不能用于治疗疾病，但是只有急救技能可以拯救一名濒死角色的生命。急救可以由多人共同实施，只需一人成功即可。"
  },
  {
    name: "医学",
    init: 1,
    intro: "使用者可以诊断并治疗事故创伤，疾病，毒药。提供相关药品的信息。用本技能进行治疗最少要花费1小时，可在造成了伤害后的任何时间进行，但若未在当天进行难度将会上升。成功的医学技能可唤醒一名昏迷的角色。"
  },
  {
    name: "精神分析",
    init: 1,
    intro: "这技能指广泛的情感上的治疗。精神分析可以恢复一名调查员的理智。单独的精神分析并不能加速不定时疯狂的恢复，但允许一名角色处理他人短期内的恐惧症状。心理治疗专家的治疗可以在不定式疯狂期间内回复理智。"
  },
  {
    name: "催眠",
    init: 1,
    intro: "非常规技能，调查员可以在一名自愿并经历过高度暗示、放松的目标身上引出出神似的状态，并且可能回忆起忘却的记忆。对那些遭受了精神创伤的人，这技能可以当做催眠疗法来使用，减轻一名病人的恐惧或者躁狂。"
  },
  {
    name: "东方医学",
    init: 25,
    intro: "涵盖中医、汉方医学等东方传统医术，包括草药、针灸、推拿、经络等诊疗知识。",
    group: {
      show: ["", "", ""],
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
    init: 5,
    intro: "使调查员理解会计工作的流程。通过检查账簿，调查员可以了解过去的资金的得与失，以及这些资金流通渠道。也能发现做假账的员工，对资金的偷偷挪用，对行贿或者敲诈的款项支付，以及经济状况是否比表面陈述的更好或者更差。"
  },
  {
    name: "法律",
    init: 5,
    intro: "代表你对法律、早期事件、法庭辩术或法院程序的了解。一个法律专家可能会获得奖励以及事务所，但这可能需要几年的申请和一个较高的信用评级。在国外时，技能的难度等级相应上升，除非该角色花费时间学习该国的法律。"
  },
  {
    name: "历史",
    init: 5,
    intro: "让一名调查员能够记住一个国家，城市，区域或者个人及其相关的重要情报。一个成功的检定可以用来帮助辨认先祖所熟悉的工具，科技，或者想法，但是对当下的所知甚少。"
  },
  {
    name: "考古学",
    init: 1,
    intro: "允许辨别以及鉴定一件古董，以及用来发现赝品。使调查员获得建立以及开掘一个挖掘遗址的专业知识。推断留下遗址的生物的目的和生活方式。人类学可能对此会有所帮助。考古学还有助于辨认已消失的人类语言的书面形式。"
  },
  {
    name: "博物学",
    init: 10,
    intro: "指对于自然环境中的植物和动物生命的研究。它可以对物种，栖息地进行辨认，并能辨认踪迹、足迹和叫声，也允许对什么事物可能对某种特定物种来说很重要进行猜测。自然学可能准确也可能不准确。"
  },
  {
    name: "武士道",
    init: 10,
    intro: "涵盖武士道精神、武道哲学、流派传承与精神修养方面的理论知识，以及对各类武术招式的辨识和了解。"
  },
  //   {
  //     name: '通灵',
  //     init: 5,
  //     intro: '与灵体、精怪、鬼神等超自然存在进行沟通与交涉的能力，可能涉及降灵术、灵视、灵媒等技术。',
  //   },
  {
    name: "风水",
    init: 15,
    intro: "掌握天地之气脉流布规律，通过观察地形、建筑布局来判断气场吉凶，并加以调整的传统术数。"
  },
  {
    name: "稽古",
    init: 5,
    intro: "对古代典籍、文献、碑文、历史遗物的阅读、辨识与研究能力，可用于解读古文、考证史实。",
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
    init: 5,
    intro: "使用者可以识别神秘学道具，用语和概念，以及民间传统，并且可以辨认魔法书以及神秘学记号。理解特定的书籍可能可以增加神秘学技能的百分比。这技能不能运用于与克苏鲁神话相关的咒术，书本，以及魔法。"
  },
  {
    name: "电子学Ω",
    init: 1,
    intro: "用来发现并对电子设备的故障进行维修。允许制作简单的电子设备。这是个现代技能—在1920年代则是使用物理学以及电气维修来应对电子设备。仅在现代可用。"
  },
  {
    name: "科学",
    init: 1,
    intro: "科学专业上的理论和实践的能力，拥有这个技能的人接受过一定程度的正式的教育或者训练。对于知识的理解和认识受到时代的限制。你可以花费点数来获得任何你想要的专业技能，每个专业化技能包括了一门专门的学科。",
    group: {
      show: ["", "", ""],
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
    intro: "自定义技能",
    name: "",
    group: {
      show: ["", "", ""],
      skills: []
    }
  }
], Hr = {
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
}, Ps = {
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
  社交: ["话术", "说服", "取悦", "恐吓", "心理学", "母语", "外语", "读唇"],
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
    "精神分析",
    "催眠"
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
  操纵: ["汽车驾驶", "骑术", "驾驶", "操作重型机械"],
  其它: [""]
}, xs = [
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
function Es({
  skills: t,
  groups: e,
  groupOrder: n
}) {
  const r = /* @__PURE__ */ new Map();
  return t.forEach((a) => {
    r.set(a.name, a);
  }), n.map((a) => {
    const s = e[a].map((l) => r.get(l));
    return {
      groupName: a,
      groupSkills: s
    };
  });
}
const zn = Es({
  skills: ur,
  groups: Ps,
  groupOrder: xs
}), Yt = {
  母语: (t) => t.attributes.edu || 0,
  闪避: (t) => Math.floor((t.attributes.dex || 0) / 2)
};
function jo(t) {
  const e = {};
  return ur.forEach((n) => {
    n.group && (e[n.name] = [...n.group.show]);
  }), t && (t.showingChildSkills = e), e;
}
function Ds(t, e) {
  const { attributes: n, deriveAttributes: r, skillPoints: o } = t, {
    str: a = 0,
    con: i = 0,
    siz: s = 0,
    dex: l = 0,
    app: u = 0,
    int: p = 0,
    pow: d = 0,
    edu: c = 0,
    luc: f = 0
  } = n, {
    hp: v = { start: 0 },
    mp: y = { start: 0 },
    sanity: b = { now: 0, start: 0 }
  } = r || {}, h = b.now == null || b.now === "" ? b.start : b.now, P = `${t.name}-力量${a}str${a}敏捷${l}dex${l}体质${i}con${i}外貌${u}app${u}智力${p}灵感${p}int${p}意志${d}pow${d}体型${s}siz${s}教育${c}edu${c}幸运${f}运气${f}luck${f}`, k = `hp${v.start}体力${v.start}mp${y.start}魔法${y.start}san${h}理智${h}理智值${h}san值${h}`;
  let $ = "";
  const I = {};
  return o.forEach(([A, x]) => {
    var j;
    let D, X, R;
    Array.isArray(A) ? ([D, , R] = A, X = (j = e.showingChildSkills[D]) == null ? void 0 : j[R]) : D = A;
    const H = X ? `${D}-${X}` : D;
    I[H] = x;
  }), ur.forEach((A) => {
    var j;
    const { name: x, init: D, group: X } = A;
    let R = Yt[x] ? Yt[x](t) : D;
    const H = x.includes("Ω") ? x.slice(0, -1) : x;
    if (X) {
      let B = 0;
      if ((j = e.showingChildSkills[x]) == null || j.forEach((O) => {
        var E, C;
        if (!O) return;
        const T = `${x}-${O}`, q = I[T];
        if (x && (R = ((C = (E = A.group) == null ? void 0 : E.skills.find((M) => M.name === O)) == null ? void 0 : C.init) || R), q) {
          const { b: M = x ? R : 0, p: ne = 0, i: me = 0, g: _e = 0 } = q;
          B = M + ne + me + _e;
        } else X.show.includes(O) && (B = R);
        O != "步/霰" && ($ += `${O}${B}`);
        const N = Hr[O];
        N && ($ += N.map((M) => `${M}${B}`).join("")), delete I[T];
      }), x === "母语")
        if (B)
          $ += `母语${B}`;
        else {
          const O = I[x];
          if (O) {
            const { b: T = x ? R : 0, p: q = 0, i: N = 0, g: E = 0 } = O;
            $ += `母语${T + q + N + E}`;
          } else
            $ += `母语${R}`;
        }
    } else {
      const B = I[x];
      let O = 0;
      if (B) {
        const { b: q = x ? R : 0, p: N = 0, i: E = 0, g: C = 0 } = B;
        O = q + N + E + C;
      } else
        O = R;
      $ += `${H}${O}`;
      const T = Hr[x];
      T && ($ += T.map((q) => `${q}${O}`).join("")), delete I[x];
    }
  }), `${P}${k}${$}`;
}
const Be = {
  limitp: 80,
  limiti: 70
};
function No() {
  return {
    showingChildSkills: jo(),
    skillLimits: {
      // TODO 技能上限
      pro: (Be == null ? void 0 : Be.limitp) || 80,
      interest: (Be == null ? void 0 : Be.limiti) || 70
    }
  };
}
function Is(t) {
  return Object.assign(Be, t), No();
}
function Rs(t) {
  Object.assign(t, No());
}
function Fs(t) {
  ge(
    () => t.value.attributes,
    () => {
      var s, l;
      let e = "", n = "";
      const { con: r, siz: o, pow: a } = t.value.attributes || {};
      r && o && (e = `${Math.floor((r + o) / 10)}`), a && (n = `${Math.floor(a / 5)}`);
      const i = (l = (s = t.value.deriveAttributes) == null ? void 0 : s.sanity) == null ? void 0 : l.now;
      t.value.deriveAttributes = {
        sanity: {
          start: `${a || ""}`,
          now: i
        },
        hp: {
          start: e
        },
        mp: {
          start: n
        }
      };
    },
    { deep: !0 }
  );
}
const Os = [
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
      [{ 技艺: "艺术" }, { 技艺: "摄影" }],
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
      { "技艺(木工、焊接、管道工等)": "" },
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
      { 技艺: "烹饪" },
      { 科学: "生物学" },
      { 科学: "化学" },
      { 格斗: "斗殴" },
      "博物学",
      "侦查",
      { 外语: "" }
    ]
  }
], Cs = [
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
      ["日本教授", "ribenjiaoshou"],
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
], Ln = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六"
}, Ts = {
  str: "力量",
  dex: "敏捷",
  con: "体质",
  app: "外貌",
  pow: "意志",
  siz: "体型",
  edu: "教育",
  int: "智力"
};
function Vs(t, e) {
  const n = /* @__PURE__ */ new Map();
  t.forEach((o) => {
    n.set(o.name, o);
  });
  const r = e.map((o) => {
    const [a, i] = o[0], s = o[1].map(([l, u]) => ({
      name: l,
      pinyin: u
    }));
    return {
      name: a,
      pinyin: i,
      jobs: s
    };
  });
  return {
    jobs: n,
    jobGroups: r
  };
}
const Rt = Vs(Os, Cs);
function zo(t, e) {
  const n = {
    text: "",
    point: 0
  }, r = Rt.jobs.get(t || "");
  if (!r) return n;
  const o = [];
  return r.point.forEach((a) => {
    const i = [], s = [];
    a.forEach(([u, p]) => {
      i.push(`${Ts[u]}×${p}`), e && s.push((e[u] || 0) * p);
    });
    let l = i.join(" 或 ");
    i.length > 1 && (l = `(${l})`), o.push(l), n.point += Math.max(...s);
  }), n.text = o.join(" + "), n;
}
function Ms(t) {
  return {
    wealth: [-1, -1],
    text: "",
    multiSkills: [],
    multiSkillTexts: [],
    ...t
  };
}
function Lo(t) {
  const { jobs: e } = Rt, n = Ms(), r = e.get(t), o = /* @__PURE__ */ new Map();
  if (!r) return n;
  n.wealth = [...r.wealth], r.skills.forEach((i) => {
    if (typeof i == "string")
      o.set(i, 0);
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
      const p = s.includes("(");
      p && (u = u.split("(")[0]);
      let d = u;
      l && (d = `${u}(${l})`), p && (d = s), o.set(
        d,
        p || l ? 0 : (o.get(d) || 0) + 1
      );
    }
  });
  const a = 8 - r.skills.length;
  return n.text = [
    ...o.entries(),
    ...a ? [["其他个人或时代特长", a]] : []
  ].map(
    ([i, s]) => `${i}${s ? `(任${Ln[`${s}`]})` : ""}`
  ).join("、"), n.multiSkillTexts = Us(n), n;
}
function Us(t) {
  const e = [];
  return t.multiSkills.forEach((r) => {
    const o = e.findIndex(([a]) => a.every((s, l) => {
      const u = r[l];
      return typeof s == "string" ? s === u : typeof u == "string" ? !1 : s.name === u.name && s.childName === u.childName;
    }));
    o === -1 ? e.push([r, 1, Ln[`${r.length}`]]) : e[o][1] += 1;
  }), e.map((r) => {
    const a = r[0].map((i) => {
      let s = i;
      return typeof i != "string" && (s = `${i.name}:${i.childName || "任一"}`, i.name === "母语" && (s = "母语")), s;
    });
    return `${r[2]}选${Ln[`${r[1]}`]}(${a})`;
  });
}
function Bs(t, e) {
  const { jobs: n } = Rt, { viewData: r, pageData: o } = e, a = te(() => Lo(t.value.job));
  return ge(
    () => t.value.job,
    () => {
      const i = n.get(t.value.job);
      if (!i || o.importing) return;
      r.jobSkills = [...i.skills], jo(r), t.value.proSkills = [];
      const s = {};
      i.skills.forEach((l) => {
        if (typeof l == "string")
          t.value.proSkills.push(l);
        else if (!Array.isArray(l)) {
          const [u, p] = Object.entries(l)[0];
          let d = u;
          u.includes("(") && (d = d.split("(")[0]);
          const f = r.showingChildSkills[d];
          if (!f) return;
          let v = -1;
          if (p)
            v = f.findIndex((y) => y === p), v === -1 && (v = f.findIndex((y) => !y), f[v] = p);
          else {
            const y = s[d] || 0;
            let b = y;
            v = f.findIndex((h) => h ? !1 : b-- === 0), s[d] = y + 1;
          }
          if (v === -1) return;
          t.value.proSkills.push([d, p, v]);
        }
      }), delete r.jobSkills;
    }
  ), a;
}
function en(t) {
  return ua() ? (ca(t), !0) : !1;
}
function vt(t) {
  return typeof t == "function" ? t() : S(t);
}
const Wn = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const js = Object.prototype.toString, Ns = (t) => js.call(t) === "[object Object]", zs = () => {
};
function Ls(t, e) {
  function n(...r) {
    return new Promise((o, a) => {
      Promise.resolve(t(() => e.apply(this, r), { fn: e, thisArg: this, args: r })).then(o).catch(a);
    });
  }
  return n;
}
const Wo = (t) => t();
function Ws(t = Wo) {
  const e = z(!0);
  function n() {
    e.value = !1;
  }
  function r() {
    e.value = !0;
  }
  const o = (...a) => {
    e.value && t(...a);
  };
  return { isActive: mo(e), pause: n, resume: r, eventFilter: o };
}
function Gs(t) {
  return sa();
}
function Hs(t, e, n = {}) {
  const {
    eventFilter: r = Wo,
    ...o
  } = n;
  return ge(
    t,
    Ls(
      r,
      e
    ),
    o
  );
}
function qs(t, e, n = {}) {
  const {
    eventFilter: r,
    ...o
  } = n, { eventFilter: a, pause: i, resume: s, isActive: l } = Ws(r);
  return { stop: Hs(
    t,
    e,
    {
      ...o,
      eventFilter: a
    }
  ), pause: i, resume: s, isActive: l };
}
function Js(t, e = !0, n) {
  Gs() ? fo(t, n) : e ? t() : pt(t);
}
function Ks(t, e = 1e3, n = {}) {
  const {
    immediate: r = !0,
    immediateCallback: o = !1
  } = n;
  let a = null;
  const i = z(!1);
  function s() {
    a && (clearInterval(a), a = null);
  }
  function l() {
    i.value = !1, s();
  }
  function u() {
    const p = vt(e);
    p <= 0 || (i.value = !0, o && t(), s(), a = setInterval(t, p));
  }
  if (r && Wn && u(), pa(e) || typeof e == "function") {
    const p = ge(e, () => {
      i.value && Wn && u();
    });
    en(p);
  }
  return en(l), {
    isActive: i,
    pause: l,
    resume: u
  };
}
function Qs(t) {
  var e;
  const n = vt(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const tn = Wn ? window : void 0;
function qr(...t) {
  let e, n, r, o;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, o] = t, e = tn) : [e, n, r, o] = t, !e)
    return zs;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], i = () => {
    a.forEach((p) => p()), a.length = 0;
  }, s = (p, d, c, f) => (p.addEventListener(d, c, f), () => p.removeEventListener(d, c, f)), l = ge(
    () => [Qs(e), vt(o)],
    ([p, d]) => {
      if (i(), !p)
        return;
      const c = Ns(d) ? { ...d } : d;
      a.push(
        ...n.flatMap((f) => r.map((v) => s(p, f, v, c)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), i();
  };
  return en(u), u;
}
function Zs(t, e = {}) {
  const {
    immediate: n = !0,
    fpsLimit: r = void 0,
    window: o = tn
  } = e, a = z(!1), i = r ? 1e3 / r : null;
  let s = 0, l = null;
  function u(c) {
    if (!a.value || !o)
      return;
    s || (s = c);
    const f = c - s;
    if (i && f < i) {
      l = o.requestAnimationFrame(u);
      return;
    }
    s = c, t({ delta: f, timestamp: c }), l = o.requestAnimationFrame(u);
  }
  function p() {
    !a.value && o && (a.value = !0, s = 0, l = o.requestAnimationFrame(u));
  }
  function d() {
    a.value = !1, l != null && o && (o.cancelAnimationFrame(l), l = null);
  }
  return n && p(), en(d), {
    isActive: mo(a),
    pause: d,
    resume: p
  };
}
const Ut = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Bt = "__vueuse_ssr_handlers__", Xs = /* @__PURE__ */ Ys();
function Ys() {
  return Bt in Ut || (Ut[Bt] = Ut[Bt] || {}), Ut[Bt];
}
function eu(t, e) {
  return Xs[t] || e;
}
function tu(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const nu = {
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
}, Jr = "vueuse-storage";
function Kr(t, e, n, r = {}) {
  var o;
  const {
    flush: a = "pre",
    deep: i = !0,
    listenToStorageChanges: s = !0,
    writeDefaults: l = !0,
    mergeDefaults: u = !1,
    shallow: p,
    window: d = tn,
    eventFilter: c,
    onError: f = (R) => {
      console.error(R);
    },
    initOnMounted: v
  } = r, y = (p ? da : z)(typeof e == "function" ? e() : e);
  if (!n)
    try {
      n = eu("getDefaultStorage", () => {
        var R;
        return (R = tn) == null ? void 0 : R.localStorage;
      })();
    } catch (R) {
      f(R);
    }
  if (!n)
    return y;
  const b = vt(e), h = tu(b), P = (o = r.serializer) != null ? o : nu[h], { pause: k, resume: $ } = qs(
    y,
    () => A(y.value),
    { flush: a, deep: i, eventFilter: c }
  );
  d && s && Js(() => {
    qr(d, "storage", D), qr(d, Jr, X), v && D();
  }), v || D();
  function I(R, H) {
    d && d.dispatchEvent(new CustomEvent(Jr, {
      detail: {
        key: t,
        oldValue: R,
        newValue: H,
        storageArea: n
      }
    }));
  }
  function A(R) {
    try {
      const H = n.getItem(t);
      if (R == null)
        I(H, null), n.removeItem(t);
      else {
        const j = P.write(R);
        H !== j && (n.setItem(t, j), I(H, j));
      }
    } catch (H) {
      f(H);
    }
  }
  function x(R) {
    const H = R ? R.newValue : n.getItem(t);
    if (H == null)
      return l && b != null && n.setItem(t, P.write(b)), b;
    if (!R && u) {
      const j = P.read(H);
      return typeof u == "function" ? u(j, b) : h === "object" && !Array.isArray(j) ? { ...b, ...j } : j;
    } else return typeof H != "string" ? H : P.read(H);
  }
  function D(R) {
    if (!(R && R.storageArea !== n)) {
      if (R && R.key == null) {
        y.value = b;
        return;
      }
      if (!(R && R.key !== t)) {
        k();
        try {
          (R == null ? void 0 : R.newValue) !== P.write(y.value) && (y.value = x(R));
        } catch (H) {
          f(H);
        } finally {
          R ? pt($) : $();
        }
      }
    }
  }
  function X(R) {
    D(R.detail);
  }
  return y;
}
function ru(t = {}) {
  const {
    controls: e = !1,
    interval: n = "requestAnimationFrame"
  } = t, r = z(/* @__PURE__ */ new Date()), o = () => r.value = /* @__PURE__ */ new Date(), a = n === "requestAnimationFrame" ? Zs(o, { immediate: !0 }) : Ks(o, n, { immediate: !0 });
  return e ? {
    now: r,
    ...a
  } : r;
}
const ou = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Number.POSITIVE_INFINITY, value: 31536e6, name: "year" }
], au = {
  justNow: "just now",
  past: (t) => t.match(/\d/) ? `${t} ago` : t,
  future: (t) => t.match(/\d/) ? `in ${t}` : t,
  month: (t, e) => t === 1 ? e ? "last month" : "next month" : `${t} month${t > 1 ? "s" : ""}`,
  year: (t, e) => t === 1 ? e ? "last year" : "next year" : `${t} year${t > 1 ? "s" : ""}`,
  day: (t, e) => t === 1 ? e ? "yesterday" : "tomorrow" : `${t} day${t > 1 ? "s" : ""}`,
  week: (t, e) => t === 1 ? e ? "last week" : "next week" : `${t} week${t > 1 ? "s" : ""}`,
  hour: (t) => `${t} hour${t > 1 ? "s" : ""}`,
  minute: (t) => `${t} minute${t > 1 ? "s" : ""}`,
  second: (t) => `${t} second${t > 1 ? "s" : ""}`,
  invalid: ""
};
function iu(t) {
  return t.toISOString().slice(0, 10);
}
function lu(t, e = {}) {
  const {
    controls: n = !1,
    updateInterval: r = 3e4
  } = e, { now: o, ...a } = ru({ interval: r, controls: !0 }), i = te(() => su(new Date(vt(t)), e, vt(o)));
  return n ? {
    timeAgo: i,
    ...a
  } : i;
}
function su(t, e = {}, n = Date.now()) {
  var r;
  const {
    max: o,
    messages: a = au,
    fullDateFormatter: i = iu,
    units: s = ou,
    showSecond: l = !1,
    rounding: u = "round"
  } = e, p = typeof u == "number" ? (b) => +b.toFixed(u) : Math[u], d = +n - +t, c = Math.abs(d);
  function f(b, h) {
    return p(Math.abs(b) / h.value);
  }
  function v(b, h) {
    const P = f(b, h), k = b > 0, $ = y(h.name, P, k);
    return y(k ? "past" : "future", $, k);
  }
  function y(b, h, P) {
    const k = a[b];
    return typeof k == "function" ? k(h, P) : k.replace("{0}", h.toString());
  }
  if (c < 6e4 && !l)
    return a.justNow;
  if (typeof o == "number" && c > o)
    return i(new Date(t));
  if (typeof o == "string") {
    const b = (r = s.find((h) => h.name === o)) == null ? void 0 : r.max;
    if (b && c > b)
      return i(new Date(t));
  }
  for (const [b, h] of s.entries()) {
    if (f(d, h) <= 0 && s[b - 1])
      return v(d, s[b - 1]);
    if (c < h.max)
      return v(d, h);
  }
  return a.invalid;
}
var Go = /* @__PURE__ */ ((t) => (t.SoxFE = "$sox-trpg", t))(Go || {}), Ho = /* @__PURE__ */ ((t) => (t.Home = "$home", t.COCCard = "$coc-card", t.ERPCard = "$erp-card", t))(Ho || {});
function uu(t) {
  const {
    namespace: e = Go.SoxFE,
    app: n,
    versionChecker: r = (P, k) => (k.value = null, -1),
    defaults: o = {}
  } = t, a = window.localStorage, i = `${e}#${n}`, s = `${e}##versionChecker`, l = Kr(i, o, a, {
    mergeDefaults: !0
  }), u = Kr(s, {}, a), p = u.value[i], d = r(p, l);
  u.value[n] = d;
  function c() {
    return l.value;
  }
  function f() {
    return Object.keys(c()).length;
  }
  function v(P) {
    return l.value[P];
  }
  function y(P, k) {
    l.value[P] = k;
  }
  function b(P) {
    delete l.value[P];
  }
  function h() {
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
      return d;
    },
    listItems: c,
    countItems: f,
    getItem: v,
    setItem: y,
    removeItem: b,
    clear: h
  };
}
const cu = uu({
  app: Ho.COCCard,
  versionChecker() {
    return 1.1;
  }
});
function qo() {
  return cu;
}
var cr = { exports: {} };
cr.exports;
(function(t) {
  var e = function() {
    var n = String.fromCharCode, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", a = {};
    function i(l, u) {
      if (!a[l]) {
        a[l] = {};
        for (var p = 0; p < l.length; p++)
          a[l][l.charAt(p)] = p;
      }
      return a[l][u];
    }
    var s = {
      compressToBase64: function(l) {
        if (l == null) return "";
        var u = s._compress(l, 6, function(p) {
          return r.charAt(p);
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
        for (var u = s.compress(l), p = new Uint8Array(u.length * 2), d = 0, c = u.length; d < c; d++) {
          var f = u.charCodeAt(d);
          p[d * 2] = f >>> 8, p[d * 2 + 1] = f % 256;
        }
        return p;
      },
      //decompress from uint8array (UCS-2 big endian format)
      decompressFromUint8Array: function(l) {
        if (l == null)
          return s.decompress(l);
        for (var u = new Array(l.length / 2), p = 0, d = u.length; p < d; p++)
          u[p] = l[p * 2] * 256 + l[p * 2 + 1];
        var c = [];
        return u.forEach(function(f) {
          c.push(n(f));
        }), s.decompress(c.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(l) {
        return l == null ? "" : s._compress(l, 6, function(u) {
          return o.charAt(u);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(l) {
        return l == null ? "" : l == "" ? null : (l = l.replace(/ /g, "+"), s._decompress(l.length, 32, function(u) {
          return i(o, l.charAt(u));
        }));
      },
      compress: function(l) {
        return s._compress(l, 16, function(u) {
          return n(u);
        });
      },
      _compress: function(l, u, p) {
        if (l == null) return "";
        var d, c, f = {}, v = {}, y = "", b = "", h = "", P = 2, k = 3, $ = 2, I = [], A = 0, x = 0, D;
        for (D = 0; D < l.length; D += 1)
          if (y = l.charAt(D), Object.prototype.hasOwnProperty.call(f, y) || (f[y] = k++, v[y] = !0), b = h + y, Object.prototype.hasOwnProperty.call(f, b))
            h = b;
          else {
            if (Object.prototype.hasOwnProperty.call(v, h)) {
              if (h.charCodeAt(0) < 256) {
                for (d = 0; d < $; d++)
                  A = A << 1, x == u - 1 ? (x = 0, I.push(p(A)), A = 0) : x++;
                for (c = h.charCodeAt(0), d = 0; d < 8; d++)
                  A = A << 1 | c & 1, x == u - 1 ? (x = 0, I.push(p(A)), A = 0) : x++, c = c >> 1;
              } else {
                for (c = 1, d = 0; d < $; d++)
                  A = A << 1 | c, x == u - 1 ? (x = 0, I.push(p(A)), A = 0) : x++, c = 0;
                for (c = h.charCodeAt(0), d = 0; d < 16; d++)
                  A = A << 1 | c & 1, x == u - 1 ? (x = 0, I.push(p(A)), A = 0) : x++, c = c >> 1;
              }
              P--, P == 0 && (P = Math.pow(2, $), $++), delete v[h];
            } else
              for (c = f[h], d = 0; d < $; d++)
                A = A << 1 | c & 1, x == u - 1 ? (x = 0, I.push(p(A)), A = 0) : x++, c = c >> 1;
            P--, P == 0 && (P = Math.pow(2, $), $++), f[b] = k++, h = String(y);
          }
        if (h !== "") {
          if (Object.prototype.hasOwnProperty.call(v, h)) {
            if (h.charCodeAt(0) < 256) {
              for (d = 0; d < $; d++)
                A = A << 1, x == u - 1 ? (x = 0, I.push(p(A)), A = 0) : x++;
              for (c = h.charCodeAt(0), d = 0; d < 8; d++)
                A = A << 1 | c & 1, x == u - 1 ? (x = 0, I.push(p(A)), A = 0) : x++, c = c >> 1;
            } else {
              for (c = 1, d = 0; d < $; d++)
                A = A << 1 | c, x == u - 1 ? (x = 0, I.push(p(A)), A = 0) : x++, c = 0;
              for (c = h.charCodeAt(0), d = 0; d < 16; d++)
                A = A << 1 | c & 1, x == u - 1 ? (x = 0, I.push(p(A)), A = 0) : x++, c = c >> 1;
            }
            P--, P == 0 && (P = Math.pow(2, $), $++), delete v[h];
          } else
            for (c = f[h], d = 0; d < $; d++)
              A = A << 1 | c & 1, x == u - 1 ? (x = 0, I.push(p(A)), A = 0) : x++, c = c >> 1;
          P--, P == 0 && (P = Math.pow(2, $), $++);
        }
        for (c = 2, d = 0; d < $; d++)
          A = A << 1 | c & 1, x == u - 1 ? (x = 0, I.push(p(A)), A = 0) : x++, c = c >> 1;
        for (; ; )
          if (A = A << 1, x == u - 1) {
            I.push(p(A));
            break;
          } else x++;
        return I.join("");
      },
      decompress: function(l) {
        return l == null ? "" : l == "" ? null : s._decompress(l.length, 32768, function(u) {
          return l.charCodeAt(u);
        });
      },
      _decompress: function(l, u, p) {
        var d = [], c = 4, f = 4, v = 3, y = "", b = [], h, P, k, $, I, A, x, D = { val: p(0), position: u, index: 1 };
        for (h = 0; h < 3; h += 1)
          d[h] = h;
        for (k = 0, I = Math.pow(2, 2), A = 1; A != I; )
          $ = D.val & D.position, D.position >>= 1, D.position == 0 && (D.position = u, D.val = p(D.index++)), k |= ($ > 0 ? 1 : 0) * A, A <<= 1;
        switch (k) {
          case 0:
            for (k = 0, I = Math.pow(2, 8), A = 1; A != I; )
              $ = D.val & D.position, D.position >>= 1, D.position == 0 && (D.position = u, D.val = p(D.index++)), k |= ($ > 0 ? 1 : 0) * A, A <<= 1;
            x = n(k);
            break;
          case 1:
            for (k = 0, I = Math.pow(2, 16), A = 1; A != I; )
              $ = D.val & D.position, D.position >>= 1, D.position == 0 && (D.position = u, D.val = p(D.index++)), k |= ($ > 0 ? 1 : 0) * A, A <<= 1;
            x = n(k);
            break;
          case 2:
            return "";
        }
        for (d[3] = x, P = x, b.push(x); ; ) {
          if (D.index > l)
            return "";
          for (k = 0, I = Math.pow(2, v), A = 1; A != I; )
            $ = D.val & D.position, D.position >>= 1, D.position == 0 && (D.position = u, D.val = p(D.index++)), k |= ($ > 0 ? 1 : 0) * A, A <<= 1;
          switch (x = k) {
            case 0:
              for (k = 0, I = Math.pow(2, 8), A = 1; A != I; )
                $ = D.val & D.position, D.position >>= 1, D.position == 0 && (D.position = u, D.val = p(D.index++)), k |= ($ > 0 ? 1 : 0) * A, A <<= 1;
              d[f++] = n(k), x = f - 1, c--;
              break;
            case 1:
              for (k = 0, I = Math.pow(2, 16), A = 1; A != I; )
                $ = D.val & D.position, D.position >>= 1, D.position == 0 && (D.position = u, D.val = p(D.index++)), k |= ($ > 0 ? 1 : 0) * A, A <<= 1;
              d[f++] = n(k), x = f - 1, c--;
              break;
            case 2:
              return b.join("");
          }
          if (c == 0 && (c = Math.pow(2, v), v++), d[x])
            y = d[x];
          else if (x === f)
            y = P + P.charAt(0);
          else
            return null;
          b.push(y), d[f++] = P + y.charAt(0), c--, P = y, c == 0 && (c = Math.pow(2, v), v++);
        }
      }
    };
    return s;
  }();
  t != null ? t.exports = e : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return e;
  });
})(cr);
var pu = cr.exports;
const Qr = /* @__PURE__ */ Jn(pu);
var du = function() {
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
}, fu = du, Zr = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, mu = "Copy to clipboard: #{key}, Enter";
function yu(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function hu(t, e) {
  var n, r, o, a, i, s, l = !1;
  e || (e = {}), n = e.debug || !1;
  try {
    o = fu(), a = document.createRange(), i = document.getSelection(), s = document.createElement("span"), s.textContent = t, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(p) {
      if (p.stopPropagation(), e.format)
        if (p.preventDefault(), typeof p.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = Zr[e.format] || Zr.default;
          window.clipboardData.setData(d, t);
        } else
          p.clipboardData.clearData(), p.clipboardData.setData(e.format, t);
      e.onCopy && (p.preventDefault(), e.onCopy(p.clipboardData));
    }), document.body.appendChild(s), a.selectNodeContents(s), i.addRange(a);
    var u = document.execCommand("copy");
    if (!u)
      throw new Error("copy command was unsuccessful");
    l = !0;
  } catch (p) {
    n && console.error("unable to copy using execCommand: ", p), n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), l = !0;
    } catch (d) {
      n && console.error("unable to copy using clipboardData: ", d), n && console.error("falling back to prompt"), r = yu("message" in e ? e.message : mu), window.prompt(r, t);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(a) : i.removeAllRanges()), s && document.body.removeChild(s), o();
  }
  return l;
}
var vu = hu;
const Jo = /* @__PURE__ */ Jn(vu);
/*! Element Plus Icons Vue v2.3.1 */
var gu = /* @__PURE__ */ V({
  name: "Bicycle",
  __name: "bicycle",
  setup(t) {
    return (e, n) => (g(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384"
      }),
      m("path", {
        fill: "currentColor",
        d: "M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32"
      }),
      m("path", {
        fill: "currentColor",
        d: "M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256m0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384"
      }),
      m("path", {
        fill: "currentColor",
        d: "M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384z"
      }),
      m("path", {
        fill: "currentColor",
        d: "m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"
      })
    ]));
  }
}), bu = gu, wu = /* @__PURE__ */ V({
  name: "CloseBold",
  __name: "close-bold",
  setup(t) {
    return (e, n) => (g(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), _u = wu, ku = /* @__PURE__ */ V({
  name: "Dessert",
  __name: "dessert",
  setup(t) {
    return (e, n) => (g(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416m287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48m339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736M384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64"
      })
    ]));
  }
}), Su = ku, Au = /* @__PURE__ */ V({
  name: "DocumentCopy",
  __name: "document-copy",
  setup(t) {
    return (e, n) => (g(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M128 320v576h576V320zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32M960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32M256 672h320v64H256zm0-192h320v64H256z"
      })
    ]));
  }
}), xn = Au, $u = /* @__PURE__ */ V({
  name: "Download",
  __name: "download",
  setup(t) {
    return (e, n) => (g(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z"
      })
    ]));
  }
}), Pu = $u, xu = /* @__PURE__ */ V({
  name: "More",
  __name: "more",
  setup(t) {
    return (e, n) => (g(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96"
      })
    ]));
  }
}), Eu = xu, Du = /* @__PURE__ */ V({
  name: "Mug",
  __name: "mug",
  setup(t) {
    return (e, n) => (g(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64m64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32z"
      })
    ]));
  }
}), Iu = Du, Ru = /* @__PURE__ */ V({
  name: "Reading",
  __name: "reading",
  setup(t) {
    return (e, n) => (g(), _("svg", {
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
}), Fu = Ru, Ou = /* @__PURE__ */ V({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (e, n) => (g(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Cu = Ou, Tu = /* @__PURE__ */ V({
  name: "Scissor",
  __name: "scissor",
  setup(t) {
    return (e, n) => (g(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248"
      })
    ]));
  }
}), Vu = Tu, Mu = /* @__PURE__ */ V({
  name: "Select",
  __name: "select",
  setup(t) {
    return (e, n) => (g(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), Uu = Mu, Bu = /* @__PURE__ */ V({
  name: "Upload",
  __name: "upload",
  setup(t) {
    return (e, n) => (g(), _("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z"
      })
    ]));
  }
}), Ko = Bu;
const ju = /* @__PURE__ */ V({
  __name: "ActionButton",
  props: {
    fullWidth: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "button" }
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => (g(), Z(yo(e.tag), {
      class: ee(["action-button", {
        "action-button-full-width": e.fullWidth
      }]),
      onClick: n[0] || (n[0] = (r) => e.$emit("click", r)),
      disabled: e.disabled
    }, {
      default: U(() => [
        $t(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "disabled"]));
  }
}), G = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, o] of e)
    n[r] = o;
  return n;
}, Nu = /* @__PURE__ */ G(ju, [["__scopeId", "data-v-b309c855"]]), zu = /* @__PURE__ */ V({
  __name: "ControlButton",
  props: {
    label: {},
    icon: {}
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => {
      const r = ae("el-icon");
      return g(), Z(Nu, {
        class: "control-button",
        onClick: n[0] || (n[0] = (o) => e.$emit("click", o))
      }, {
        default: U(() => [
          w(r, { size: "0.9em" }, {
            default: U(() => [
              (g(), Z(yo(e.icon)))
            ]),
            _: 1
          }),
          ue(" " + F(e.label), 1)
        ]),
        _: 1
      });
    };
  }
}), Se = /* @__PURE__ */ G(zu, [["__scopeId", "data-v-7ceba4b3"]]), gt = /* @__PURE__ */ V({
  __name: "ControlDialog",
  props: {
    title: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (e, n) => {
      const r = ae("el-dialog");
      return g(), Z(r, {
        class: "coc-card-control-dialog",
        "append-to-body": "",
        "align-center": "",
        title: e.$props.title,
        modelValue: e.$props.modelValue,
        "onUpdate:modelValue": n[0] || (n[0] = (o) => e.$emit("update:modelValue", o))
      }, {
        default: U(() => [
          $t(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["title", "modelValue"]);
    };
  }
});
function Lu(t, e) {
  if (window.downloadAndSaveFile)
    window.downloadAndSaveFile(t, e);
  else {
    const n = document.createElement("a");
    n.href = t, n.download = e, n.click();
  }
}
function Wu(t, e = "image") {
  Lu(t, e);
}
const Gu = { class: "downloader-item" }, Hu = { class: "downloader-item-preview" }, qu = ["src"], Ju = {
  key: 1,
  class: "downloader-item-file"
}, Ku = { key: 2 }, Qu = { class: "downloader-item-info" }, Zu = { class: "downloader-item-title" }, Xu = { class: "preview-full-image-container" }, Yu = ["src"], ec = /* @__PURE__ */ V({
  __name: "DownloaderItem",
  props: {
    title: {},
    previewImage: {},
    refreshable: { type: Boolean },
    download: {}
  },
  emits: ["refresh", "downloaded"],
  setup(t, { emit: e }) {
    const n = t, r = e, o = z(!1), a = te(() => {
      if (!n.download) return "";
      const { name: l, type: u } = n.download;
      return `${l}${n.title}.${u}`;
    });
    function i() {
      if (!n.download) return;
      const { url: l } = n.download;
      Wu(l, a.value), r("downloaded");
    }
    function s() {
      o.value = !0;
    }
    return (l, u) => {
      var p;
      return g(), _("div", Gu, [
        m("div", Hu, [
          l.previewImage ? (g(), _("img", {
            key: 0,
            class: "downloader-item-image",
            src: l.previewImage,
            onClick: s
          }, null, 8, qu)) : ((p = l.download) == null ? void 0 : p.type) === "txt" ? (g(), _("div", Ju, F(a.value), 1)) : (g(), _("div", Ku, "预览图加载失败，这不应该，请尝试刷新"))
        ]),
        m("div", Qu, [
          m("div", Zu, F(l.title), 1),
          m("div", {
            class: "downloader-item-button",
            onClick: i
          }, " 下载 "),
          l.refreshable ? (g(), _("div", {
            key: 0,
            class: "downloader-item-button",
            onClick: u[0] || (u[0] = (d) => l.$emit("refresh"))
          }, " 重新生成 ")) : W("", !0)
        ]),
        w(gt, {
          modelValue: o.value,
          "onUpdate:modelValue": u[1] || (u[1] = (d) => o.value = d),
          title: "预览大图"
        }, {
          default: U(() => [
            m("div", Xu, [
              l.previewImage ? (g(), _("img", {
                key: 0,
                class: "preview-full-image",
                src: l.previewImage
              }, null, 8, Yu)) : W("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), En = /* @__PURE__ */ G(ec, [["__scopeId", "data-v-712d81a0"]]);
function ie() {
  return Pt("pc");
}
function Oe() {
  return Pt("pageData");
}
function sn() {
  return Pt("viewData");
}
function Qo() {
  return Pt("suggestion");
}
const tc = { class: "label" }, nc = { class: "label-title" }, rc = {
  key: 0,
  class: "label-hint"
}, oc = ["placeholder", "readonly", "value"], ac = /* @__PURE__ */ V({
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
    const e = t, n = Oe(), r = Ee({
      width: `${e.char}em`
    });
    return (o, a) => {
      var i, s;
      return g(), _("div", {
        class: ee(["writable-row", {
          "writable-row-with-hint": !!o.hint,
          "printing-image": (i = S(n)) == null ? void 0 : i.printing
        }])
      }, [
        m("div", tc, [
          m("div", nc, F(o.label), 1),
          o.hint ? (g(), _("div", rc, F(o.hint), 1)) : W("", !0)
        ]),
        m("input", {
          type: "text",
          class: "input",
          style: On(r),
          placeholder: (s = S(n)) != null && s.printing ? "" : o.placeholder,
          readonly: o.readonly,
          value: o.modelValue,
          onInput: a[0] || (a[0] = (l) => o.$emit("update:modelValue", l.target.value)),
          onFocus: a[1] || (a[1] = (l) => o.$emit("focus")),
          onBlur: a[2] || (a[2] = (l) => o.$emit("blur"))
        }, null, 44, oc)
      ], 2);
    };
  }
}), re = /* @__PURE__ */ G(ac, [["__scopeId", "data-v-1b667523"]]);
function Qe(t, e = 1, n = 0) {
  return Array.from({ length: e }).reduce((r) => {
    const o = Math.floor(Math.random() * t) + 1;
    return r + o;
  }, n);
}
function je(t, e = 1) {
  if (e < 1) return t;
  let n = t;
  return Qe(100) > t && (n += Qe(10)), je(n, e - 1);
}
const ic = ["str", "dex", "con", "app", "pow"], lc = ["siz", "edu", "int"], sc = ["luc"];
function Xr() {
  const t = {};
  return ic.forEach((e) => {
    t[e] = Qe(6, 3) * 5;
  }), lc.forEach((e) => {
    t[e] = Qe(6, 2, 6) * 5;
  }), sc.forEach((e) => {
    t[e] = Qe(6, 3) * 5;
  }), t;
}
function uc(t, e) {
  let n = _t(t);
  return e < 15 || (e < 20 ? (n = Ne(n, ["str", "siz"], 5), n.luc = Math.max(n.luc, Qe(6, 3) * 5)) : e < 40 ? n.edu = je(n.edu) : e < 50 ? (n = Ne(n, ["str", "con", "dex"], 5), n.app = n.app - 5, n.edu = je(n.edu, 2)) : e < 60 ? (n = Ne(n, ["str", "con", "dex"], 10), n.app = n.app - 10, n.edu = je(n.edu, 3)) : e < 70 ? (n = Ne(n, ["str", "con", "dex"], 20), n.app = n.app - 15, n.edu = je(n.edu, 4)) : e < 80 ? (n = Ne(n, ["str", "con", "dex"], 40), n.app = n.app - 20, n.edu = je(n.edu, 4)) : e < 90 && (n = Ne(n, ["str", "con", "dex"], 80), n.app = n.app - 25, n.edu = je(n.edu, 4))), n.app = Math.max(n.app, 5), n.edu = Math.min(n.edu, 99), n;
}
function Gn(t) {
  const { str: e, con: n, dex: r, app: o, pow: a, siz: i, edu: s, int: l } = t;
  return [e, n, r, o, a, i, s, l].reduce((p, d) => p + d, 0);
}
function Dn(t) {
  const { luc: e } = t;
  return Gn(t) + e;
}
function _t(t) {
  return {
    str: 0,
    dex: 0,
    con: 0,
    app: 0,
    pow: 0,
    siz: 0,
    edu: 0,
    int: 0,
    luc: 0,
    ...t
  };
}
function Ne(t, e, n) {
  const r = { ...t };
  if (e.reduce((i, s) => i + r[s], 0) < n + e.length * 5)
    return e.forEach((i) => r[i] = 5), r;
  let a = n;
  return e.forEach((i, s) => {
    if (s === e.length - 1) {
      if (r[i] - a < 5)
        return Ne(r, e, a);
      r[i] = r[i] - a;
    } else {
      let l = Qe(a + 1) - 1;
      r[i] - l < 5 && (l = r[i] - 5), a = a - l, r[i] = r[i] - l;
    }
  }), r;
}
const Ye = (t) => (De("data-v-5ee6e6e6"), t = t(), Ie(), t), cc = { class: "modal-body" }, pc = { class: "method-section" }, dc = { class: "method-section-header" }, fc = /* @__PURE__ */ Ye(() => /* @__PURE__ */ m("div", { class: "method-section-title" }, "枫笛式", -1)), mc = { class: "header-action" }, yc = { class: "method-section-content" }, hc = { class: "kaede-desc-row" }, vc = { class: "kaede-desc-col" }, gc = {
  key: 0,
  class: "kaede-value-column"
}, bc = { class: "kaede-desc-col" }, wc = {
  key: 0,
  class: "kaede-value-column"
}, _c = {
  key: 0,
  class: "column-section-content"
}, kc = { class: "column-section-content-column" }, Sc = { class: "kaede-choice-row-label" }, Ac = { class: "column-section-content-column" }, $c = { class: "kaede-choice-row-label" }, Pc = { class: "column-section-content-column-actions" }, xc = { class: "method-section" }, Ec = { class: "method-section-header" }, Dc = /* @__PURE__ */ Ye(() => /* @__PURE__ */ m("div", { class: "method-section-title" }, "天命式", -1)), Ic = { class: "header-action" }, Rc = /* @__PURE__ */ Ye(() => /* @__PURE__ */ m("div", { class: "header-action-label" }, "组数", -1)), Fc = { class: "method-section-content" }, Oc = /* @__PURE__ */ Ye(() => /* @__PURE__ */ m("div", null, "点击“生成”后，点击数据组卡片使用", -1)), Cc = ["onClick"], Tc = { class: "action-roll-result-item action-roll-result-item-sum" }, Vc = { class: "method-section" }, Mc = { class: "method-section-header" }, Uc = /* @__PURE__ */ Ye(() => /* @__PURE__ */ m("div", { class: "method-section-title" }, "购点式", -1)), Bc = { class: "header-action" }, jc = /* @__PURE__ */ Ye(() => /* @__PURE__ */ m("div", { class: "header-action-label" }, "总点数", -1)), Nc = { class: "method-section-content" }, zc = /* @__PURE__ */ Ye(() => /* @__PURE__ */ m("div", null, "点击“购点”，填写，点击“应用”", -1)), Lc = {
  key: 0,
  class: "column-section-content"
}, Wc = { class: "column-section-content-column" }, Gc = { class: "column-section-content-column" }, Hc = { class: "column-section-content-column-actions" }, qc = /* @__PURE__ */ V({
  __name: "BuyPointsModal",
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = e, r = ie();
    function o(j) {
      r != null && r.value && (Object.entries(j).forEach(([B, O]) => {
        r.value.attributes[B] = O || void 0;
      }), a());
    }
    function a() {
      n("close"), D();
    }
    const i = z(_t({})), s = z(!1), l = z(0), u = z({});
    function p() {
      D(), i.value = Xr(), u.value.luc = "luc", s.value = !0, l.value++;
    }
    function d() {
      if (Object.values(u.value).filter(
        (O) => O
      ).length < 9) {
        se.error("请完成所有选择");
        return;
      }
      const B = _t({});
      Object.entries(u.value).forEach(([O, T]) => {
        T && (B[O] = i.value[T]);
      }), o(B);
    }
    function c(j) {
      return Object.values(u.value).some(
        (B) => B === j
      );
    }
    const f = z(5), v = z(0), y = z([]);
    function b() {
      D(), y.value = Array.from(
        { length: f.value },
        () => Xr()
      ), v.value++;
    }
    function h(j) {
      o(j);
    }
    const P = z(460), k = z(!1), $ = z(_t({})), I = te(() => P.value - Dn($.value));
    function A() {
      D(), k.value = !0, $.value = _t({});
    }
    function x() {
      o($.value);
    }
    function D() {
      s.value = !1, y.value = [], k.value = !1;
    }
    const X = [
      { key: "str", label: "力量", hint: "STR" },
      { key: "con", label: "体质", hint: "CON" },
      { key: "dex", label: "敏捷", hint: "DEX" },
      { key: "app", label: "外貌", hint: "APP" },
      { key: "pow", label: "意志", hint: "POW" }
    ], R = [
      { key: "siz", label: "体型", hint: "SIZ" },
      { key: "edu", label: "教育", hint: "知识 EDU" },
      { key: "int", label: "智力", hint: "灵感 INT" }
    ], H = [{ key: "luc", label: "幸运", hint: "Luck" }];
    return (j, B) => {
      const O = ae("el-button"), T = ae("el-option"), q = ae("el-select"), N = ae("el-input");
      return g(), Z(gt, {
        title: "花式加点",
        modelValue: j.isOpen,
        "onUpdate:modelValue": a
      }, {
        default: U(() => [
          m("div", cc, [
            m("div", pc, [
              m("div", dc, [
                fc,
                m("div", mc, [
                  w(O, {
                    size: "small",
                    type: "default",
                    onClick: p
                  }, {
                    default: U(() => [
                      ue(" 生成 "),
                      l.value ? (g(), _(L, { key: 0 }, [
                        ue(" (已生成 " + F(l.value) + " 次) ", 1)
                      ], 64)) : W("", !0)
                    ]),
                    _: 1
                  })
                ])
              ]),
              m("div", yc, [
                m("div", hc, [
                  m("div", vc, [
                    ue(" 分配 5组 3D6×5 到左侧 "),
                    s.value ? (g(), _("span", gc, [
                      ue(" · "),
                      (g(), _(L, null, Y(X, (E) => m("span", {
                        key: E.key
                      }, F(i.value[E.key]), 1)), 64))
                    ])) : W("", !0)
                  ]),
                  m("div", bc, [
                    ue(" 分配 3组 (2D6+6)×5 到右侧 "),
                    s.value ? (g(), _("span", wc, [
                      ue(" · "),
                      (g(), _(L, null, Y(R, (E) => m("span", {
                        key: E.key
                      }, F(i.value[E.key]), 1)), 64))
                    ])) : W("", !0)
                  ])
                ]),
                s.value ? (g(), _("div", _c, [
                  m("div", kc, [
                    (g(), _(L, null, Y(X, (E) => m("div", {
                      key: E.key,
                      class: "kaede-choice-row"
                    }, [
                      m("div", Sc, F(E.label), 1),
                      w(q, {
                        modelValue: u.value[E.key],
                        "onUpdate:modelValue": (C) => u.value[E.key] = C,
                        placeholder: "请选择",
                        size: "small",
                        clearable: ""
                      }, {
                        default: U(() => [
                          (g(), _(L, null, Y(X, (C) => w(T, {
                            key: C.key,
                            label: i.value[C.key],
                            value: C.key,
                            disabled: c(C.key)
                          }, null, 8, ["label", "value", "disabled"])), 64))
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"])
                    ])), 64))
                  ]),
                  m("div", Ac, [
                    (g(), _(L, null, Y(R, (E) => m("div", {
                      key: E.key,
                      class: "kaede-choice-row"
                    }, [
                      m("div", $c, F(E.label), 1),
                      w(q, {
                        modelValue: u.value[E.key],
                        "onUpdate:modelValue": (C) => u.value[E.key] = C,
                        placeholder: "请选择",
                        size: "small",
                        clearable: ""
                      }, {
                        default: U(() => [
                          (g(), _(L, null, Y(R, (C) => w(T, {
                            key: C.key,
                            label: i.value[C.key],
                            value: C.key,
                            disabled: c(C.key)
                          }, null, 8, ["label", "value", "disabled"])), 64))
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"])
                    ])), 64)),
                    m("div", null, [
                      m("span", null, "总点数 " + F(S(Gn)(i.value)), 1),
                      m("span", null, "(" + F(S(Dn)(i.value)) + ")", 1)
                    ]),
                    m("div", Pc, [
                      w(O, {
                        size: "small",
                        type: "default",
                        onClick: d
                      }, {
                        default: U(() => [
                          ue(" 应用 (幸运 " + F(i.value.luc) + ") ", 1)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])) : W("", !0)
              ])
            ]),
            m("div", xc, [
              m("div", Ec, [
                Dc,
                m("div", Ic, [
                  Rc,
                  w(N, {
                    size: "small",
                    type: "number",
                    min: 1,
                    max: 10,
                    modelValue: f.value,
                    "onUpdate:modelValue": B[0] || (B[0] = (E) => f.value = E)
                  }, null, 8, ["modelValue"]),
                  w(O, {
                    size: "small",
                    type: "default",
                    onClick: b
                  }, {
                    default: U(() => [
                      ue(" 生成 "),
                      v.value ? (g(), _(L, { key: 0 }, [
                        ue(" (已生成 " + F(v.value) + " 次) ", 1)
                      ], 64)) : W("", !0)
                    ]),
                    _: 1
                  })
                ])
              ]),
              m("div", Fc, [
                Oc,
                (g(!0), _(L, null, Y(y.value, (E, C) => (g(), _("div", {
                  key: C,
                  class: "action-roll-result",
                  onClick: (M) => h(E)
                }, [
                  (g(!0), _(L, null, Y([...X, ...R, ...H], (M) => (g(), _("div", {
                    key: M.key,
                    class: "action-roll-result-item"
                  }, F(M.label) + " " + F(E[M.key]), 1))), 128)),
                  m("div", Tc, " 总点数 " + F(S(Gn)(E)) + " / 含运 " + F(S(Dn)(E)), 1)
                ], 8, Cc))), 128))
              ])
            ]),
            m("div", Vc, [
              m("div", Mc, [
                Uc,
                m("div", Bc, [
                  jc,
                  w(N, {
                    size: "small",
                    type: "number",
                    min: 0,
                    max: 720,
                    modelValue: P.value,
                    "onUpdate:modelValue": B[1] || (B[1] = (E) => P.value = E)
                  }, null, 8, ["modelValue"]),
                  w(O, {
                    size: "small",
                    type: "default",
                    onClick: A
                  }, {
                    default: U(() => [
                      ue(" 购点 "),
                      k.value ? (g(), _(L, { key: 0 }, [
                        ue(" (剩余 " + F(I.value) + ") ", 1)
                      ], 64)) : W("", !0)
                    ]),
                    _: 1
                  })
                ])
              ]),
              m("div", Nc, [
                zc,
                k.value ? (g(), _("div", Lc, [
                  m("div", Wc, [
                    (g(), _(L, null, Y(X, (E) => w(re, {
                      key: E.key,
                      label: E.label,
                      hint: E.hint,
                      modelValue: `${$.value[E.key] ?? ""}`,
                      "onUpdate:modelValue": (C) => $.value[E.key] = Number(C)
                    }, null, 8, ["label", "hint", "modelValue", "onUpdate:modelValue"])), 64))
                  ]),
                  m("div", Gc, [
                    (g(), _(L, null, Y(R, (E) => w(re, {
                      key: E.key,
                      label: E.label,
                      hint: E.hint,
                      modelValue: `${$.value[E.key] ?? ""}`,
                      "onUpdate:modelValue": (C) => $.value[E.key] = Number(C)
                    }, null, 8, ["label", "hint", "modelValue", "onUpdate:modelValue"])), 64)),
                    (g(), _(L, null, Y(H, (E) => w(re, {
                      key: E.key,
                      label: E.label,
                      hint: E.hint,
                      modelValue: `${$.value[E.key] || ""}`,
                      placeholder: "不含运请忽略",
                      "onUpdate:modelValue": (C) => $.value[E.key] = Number(C)
                    }, null, 8, ["label", "hint", "modelValue", "onUpdate:modelValue"])), 64)),
                    m("div", Hc, [
                      w(O, {
                        size: "small",
                        type: "default",
                        onClick: x
                      }, {
                        default: U(() => [
                          ue(" 应用 ")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])) : W("", !0)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), Jc = /* @__PURE__ */ G(qc, [["__scopeId", "data-v-5ee6e6e6"]]), Kc = /* @__PURE__ */ V({
  __name: "BuyPointsButton",
  setup(t) {
    const e = z(!1);
    function n() {
      e.value = !0;
    }
    return (r, o) => (g(), _(L, null, [
      w(Se, {
        label: "属性点",
        icon: S(bu),
        onClick: n
      }, null, 8, ["icon"]),
      w(Jc, {
        isOpen: e.value,
        onClose: o[0] || (o[0] = (a) => e.value = !1)
      }, null, 8, ["isOpen"])
    ], 64));
  }
}), Qc = { class: "jobs-container" }, Zc = { class: "job-card-header" }, Xc = ["onClick"], Yc = { class: "job-card-row" }, ep = { key: 0 }, tp = { class: "job-card-row" }, np = /* @__PURE__ */ V({
  __name: "JobList",
  props: {
    label: {}
  },
  setup(t) {
    const { jobGroups: e, jobs: n } = Rt, r = ie(), o = z([]), a = te(() => e.map((s) => ({
      name: s.name,
      items: s.jobs.map((l) => {
        const u = n.get(l.name), p = Lo(u.name), d = p.multiSkillTexts.map((v) => `${v}、`).join("") + p.text, { point: c, text: f } = zo(
          u.name,
          r == null ? void 0 : r.value.attributes
        );
        return {
          name: u.name,
          wealth: u.wealth,
          skillText: d,
          pointText: f,
          pointValue: c
        };
      })
    })));
    function i(s) {
      r && (r.value.job = s);
    }
    return (s, l) => {
      const u = ae("el-icon"), p = ae("el-collapse-item"), d = ae("el-collapse");
      return g(), _("div", null, [
        w(d, {
          class: "job-list",
          modelValue: o.value,
          "onUpdate:modelValue": l[0] || (l[0] = (c) => o.value = c)
        }, {
          default: U(() => [
            (g(!0), _(L, null, Y(a.value, (c) => (g(), Z(p, {
              key: c.name,
              title: c.name,
              name: c.name
            }, {
              default: U(() => [
                m("div", Qc, [
                  (g(!0), _(L, null, Y(c.items, (f) => (g(), _("div", {
                    key: f.name,
                    class: "job-card"
                  }, [
                    m("div", Zc, [
                      m("span", null, F(f.name), 1),
                      m("span", null, "信用评级：" + F(f.wealth[0]) + "~" + F(f.wealth[1]), 1),
                      m("a", {
                        class: "job-card-action-use",
                        onClick: () => i(f.name)
                      }, [
                        w(u, { size: "0.9em" }, {
                          default: U(() => [
                            w(S(Ko))
                          ]),
                          _: 1
                        }),
                        ue(" 使用 ")
                      ], 8, Xc)
                    ]),
                    m("div", Yc, [
                      m("span", null, "职业点数：" + F(f.pointText), 1),
                      f.pointValue ? (g(), _("span", ep, " (当前结果: " + F(f.pointValue) + ") ", 1)) : W("", !0)
                    ]),
                    m("div", tp, "本职技能：" + F(f.skillText), 1)
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
}), rp = /* @__PURE__ */ G(np, [["__scopeId", "data-v-a6021bb3"]]), op = { class: "weapons-container" }, ap = { class: "weapon-card-header" }, ip = { class: "weapon-card-row" }, lp = { class: "weapon-card-row" }, sp = { class: "weapon-card-row weapon-card-row-4" }, up = ["onClick"], cp = /* @__PURE__ */ V({
  __name: "WeaponList",
  props: {
    label: {}
  },
  setup(t) {
    const e = va, n = ie(), r = z([]), o = te(() => {
      const c = new Map(
        sr.map((f) => [
          f.name,
          {
            ...f,
            range: `${Number(f.range)}` === f.range ? `${f.range}m` : f.range
          }
        ])
      );
      return Bo.map(([f, v]) => ({
        name: v,
        groupKey: f,
        items: Uo[f].map((y) => c.get(y))
      }));
    });
    function a(c) {
      return `${Number(c)}` === c ? `${c}m` : c || "N/A";
    }
    const i = z([]), s = z(-1), l = z(!1);
    function u(c) {
      const f = c.target, v = i.value.findIndex((y) => y.el === f);
      v !== -1 && (s.value = v, l.value = !0);
    }
    function p() {
      l.value = !1;
    }
    function d(c, f) {
      !n || !f || (n.value.weapons[c] = f);
    }
    return (c, f) => {
      var P;
      const v = ae("el-icon"), y = ae("el-collapse-item"), b = ae("el-collapse"), h = ae("el-popover");
      return g(), _("div", null, [
        w(b, {
          class: "weapon-list",
          modelValue: r.value,
          "onUpdate:modelValue": f[0] || (f[0] = (k) => r.value = k)
        }, {
          default: U(() => [
            (g(!0), _(L, null, Y(o.value, (k) => (g(), Z(y, {
              key: k.groupKey,
              title: k.name,
              name: k.groupKey
            }, {
              default: U(() => [
                m("div", op, [
                  (g(!0), _(L, null, Y(k.items, ($) => (g(), _("div", {
                    key: $.name,
                    class: "weapon-card"
                  }, [
                    m("div", ap, [
                      m("span", null, "【" + F($.name) + "】" + F($.skill), 1),
                      Ze((g(), _("a", {
                        class: "job-card-action job-card-action-use",
                        ref_for: !0,
                        ref: (I) => {
                          i.value.push({
                            el: I,
                            weapon: $
                          });
                        },
                        onClick: u
                      }, [
                        w(v, {
                          size: "0.9em",
                          class: "job-card-action-use-icon"
                        }, {
                          default: U(() => [
                            w(S(Ko))
                          ]),
                          _: 1
                        }),
                        ue(" 使用 ")
                      ])), [
                        [S(e), p]
                      ])
                    ]),
                    m("div", ip, [
                      m("span", null, "伤害：" + F($.dam), 1),
                      m("span", null, "次数：" + F($.round || "N/A"), 1),
                      m("span", null, F($.tho ? "贯穿" : "非贯穿"), 1)
                    ]),
                    m("div", lp, [
                      m("span", null, "射程：" + F(a($.range)), 1),
                      m("span", null, "装弹量：" + F($.num || "N/A"), 1),
                      m("span", null, "故障率：" + F($.err || "N/A"), 1)
                    ]),
                    m("div", sp, [
                      m("span", null, "年代：" + F($.time), 1),
                      m("span", null, "价格：" + F($.price || "N/A"), 1)
                    ])
                  ]))), 128))
                ])
              ]),
              _: 2
            }, 1032, ["title", "name"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        w(h, {
          placement: "left-start",
          "popper-class": "weapon-card-places-container",
          trigger: "click",
          "virtual-triggering": "",
          visible: l.value,
          width: 200,
          "virtual-ref": (P = i.value[s.value]) == null ? void 0 : P.el
        }, {
          default: U(() => [
            (g(), _(L, null, Y(5, (k) => m("a", {
              key: k,
              class: "job-card-action",
              onClick: ($) => {
                var I;
                return d(k - 1, (I = i.value[s.value]) == null ? void 0 : I.weapon);
              }
            }, F(k), 9, up)), 64))
          ]),
          _: 1
        }, 8, ["visible", "virtual-ref"])
      ]);
    };
  }
}), pp = /* @__PURE__ */ G(cp, [["__scopeId", "data-v-c2affb32"]]), dp = (t) => (De("data-v-7841cf7e"), t = t(), Ie(), t), fp = { class: "modal-body" }, mp = { class: "group" }, yp = /* @__PURE__ */ dp(() => /* @__PURE__ */ m("div", null, "录卡指令", -1)), hp = /* @__PURE__ */ V({
  __name: "DiceMaid",
  setup(t) {
    const e = ie(), n = sn(), r = te(
      () => ".st " + (e && n ? Ds(e.value, n) : "")
    ), o = z(!1);
    function a() {
      o.value = !0;
    }
    function i(l) {
      var u;
      (u = l.target) == null || u.select();
    }
    function s() {
      Jo(r.value), se.success("已复制录卡指令");
    }
    return (l, u) => {
      const p = ae("el-input");
      return g(), _(L, null, [
        w(Se, {
          label: "骰娘相关",
          icon: S(Su),
          onClick: a
        }, null, 8, ["icon"]),
        w(gt, {
          title: "骰娘相关",
          modelValue: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => o.value = d)
        }, {
          default: U(() => [
            m("div", fp, [
              m("div", mp, [
                m("div", { class: "label" }, [
                  yp,
                  m("div", null, [
                    m("a", {
                      class: "link",
                      onClick: s
                    }, " 复制 ")
                  ])
                ]),
                w(p, {
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
}), vp = /* @__PURE__ */ G(hp, [["__scopeId", "data-v-7841cf7e"]]);
function gp(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), o = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(o), e && (r.href = e), o.href = t, o.href;
}
const bp = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function Fe(t) {
  const e = [];
  for (let n = 0, r = t.length; n < r; n++)
    e.push(t[n]);
  return e;
}
function nn(t, e) {
  const r = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function wp(t) {
  const e = nn(t, "border-left-width"), n = nn(t, "border-right-width");
  return t.clientWidth + e + n;
}
function _p(t) {
  const e = nn(t, "border-top-width"), n = nn(t, "border-bottom-width");
  return t.clientHeight + e + n;
}
function Zo(t, e = {}) {
  const n = e.width || wp(t), r = e.height || _p(t);
  return { width: n, height: r };
}
function kp() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const n = e && e.env ? e.env.devicePixelRatio : null;
  return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const ve = 16384;
function Sp(t) {
  (t.width > ve || t.height > ve) && (t.width > ve && t.height > ve ? t.width > t.height ? (t.height *= ve / t.width, t.width = ve) : (t.width *= ve / t.height, t.height = ve) : t.width > ve ? (t.height *= ve / t.width, t.width = ve) : (t.width *= ve / t.height, t.height = ve));
}
function rn(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.decode = () => e(r), r.onload = () => e(r), r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = t;
  });
}
async function Ap(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function $p(t, e, n) {
  const r = "http://www.w3.org/2000/svg", o = document.createElementNS(r, "svg"), a = document.createElementNS(r, "foreignObject");
  return o.setAttribute("width", `${e}`), o.setAttribute("height", `${n}`), o.setAttribute("viewBox", `0 0 ${e} ${n}`), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), a.setAttribute("x", "0"), a.setAttribute("y", "0"), a.setAttribute("externalResourcesRequired", "true"), o.appendChild(a), a.appendChild(t), Ap(o);
}
const he = (t, e) => {
  if (t instanceof e)
    return !0;
  const n = Object.getPrototypeOf(t);
  return n === null ? !1 : n.constructor.name === e.name || he(n, e);
};
function Pp(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function xp(t) {
  return Fe(t).map((e) => {
    const n = t.getPropertyValue(e), r = t.getPropertyPriority(e);
    return `${e}: ${n}${r ? " !important" : ""};`;
  }).join(" ");
}
function Ep(t, e, n) {
  const r = `.${t}:${e}`, o = n.cssText ? Pp(n) : xp(n);
  return document.createTextNode(`${r}{${o}}`);
}
function Yr(t, e, n) {
  const r = window.getComputedStyle(t, n), o = r.getPropertyValue("content");
  if (o === "" || o === "none")
    return;
  const a = bp();
  try {
    e.className = `${e.className} ${a}`;
  } catch {
    return;
  }
  const i = document.createElement("style");
  i.appendChild(Ep(a, n, r)), e.appendChild(i);
}
function Dp(t, e) {
  Yr(t, e, ":before"), Yr(t, e, ":after");
}
const eo = "application/font-woff", to = "image/jpeg", Ip = {
  woff: eo,
  woff2: eo,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: to,
  jpeg: to,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Rp(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function pr(t) {
  const e = Rp(t).toLowerCase();
  return Ip[e] || "";
}
function Fp(t) {
  return t.split(/,/)[1];
}
function Hn(t) {
  return t.search(/^(data:)/) !== -1;
}
function Op(t, e) {
  return `data:${e};base64,${t}`;
}
async function Xo(t, e, n) {
  const r = await fetch(t, e);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const o = await r.blob();
  return new Promise((a, i) => {
    const s = new FileReader();
    s.onerror = i, s.onloadend = () => {
      try {
        a(n({ res: r, result: s.result }));
      } catch (l) {
        i(l);
      }
    }, s.readAsDataURL(o);
  });
}
const In = {};
function Cp(t, e, n) {
  let r = t.replace(/\?.*/, "");
  return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? `[${e}]${r}` : r;
}
async function dr(t, e, n) {
  const r = Cp(t, e, n.includeQueryParams);
  if (In[r] != null)
    return In[r];
  n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let o;
  try {
    const a = await Xo(t, n.fetchRequestInit, ({ res: i, result: s }) => (e || (e = i.headers.get("Content-Type") || ""), Fp(s)));
    o = Op(a, e);
  } catch (a) {
    o = n.imagePlaceholder || "";
    let i = `Failed to fetch resource: ${t}`;
    a && (i = typeof a == "string" ? a : a.message), i && console.warn(i);
  }
  return In[r] = o, o;
}
async function Tp(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : rn(e);
}
async function Vp(t, e) {
  if (t.currentSrc) {
    const a = document.createElement("canvas"), i = a.getContext("2d");
    a.width = t.clientWidth, a.height = t.clientHeight, i == null || i.drawImage(t, 0, 0, a.width, a.height);
    const s = a.toDataURL();
    return rn(s);
  }
  const n = t.poster, r = pr(n), o = await dr(n, r, e);
  return rn(o);
}
async function Mp(t) {
  var e;
  try {
    if (!((e = t == null ? void 0 : t.contentDocument) === null || e === void 0) && e.body)
      return await un(t.contentDocument.body, {}, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function Up(t, e) {
  return he(t, HTMLCanvasElement) ? Tp(t) : he(t, HTMLVideoElement) ? Vp(t, e) : he(t, HTMLIFrameElement) ? Mp(t) : t.cloneNode(!1);
}
const Bp = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
async function jp(t, e, n) {
  var r, o;
  let a = [];
  return Bp(t) && t.assignedNodes ? a = Fe(t.assignedNodes()) : he(t, HTMLIFrameElement) && (!((r = t.contentDocument) === null || r === void 0) && r.body) ? a = Fe(t.contentDocument.body.childNodes) : a = Fe(((o = t.shadowRoot) !== null && o !== void 0 ? o : t).childNodes), a.length === 0 || he(t, HTMLVideoElement) || await a.reduce((i, s) => i.then(() => un(s, n)).then((l) => {
    l && e.appendChild(l);
  }), Promise.resolve()), e;
}
function Np(t, e) {
  const n = e.style;
  if (!n)
    return;
  const r = window.getComputedStyle(t);
  r.cssText ? (n.cssText = r.cssText, n.transformOrigin = r.transformOrigin) : Fe(r).forEach((o) => {
    let a = r.getPropertyValue(o);
    o === "font-size" && a.endsWith("px") && (a = `${Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1}px`), he(t, HTMLIFrameElement) && o === "display" && a === "inline" && (a = "block"), o === "d" && e.getAttribute("d") && (a = `path(${e.getAttribute("d")})`), n.setProperty(o, a, r.getPropertyPriority(o));
  });
}
function zp(t, e) {
  he(t, HTMLTextAreaElement) && (e.innerHTML = t.value), he(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function Lp(t, e) {
  if (he(t, HTMLSelectElement)) {
    const n = e, r = Array.from(n.children).find((o) => t.value === o.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function Wp(t, e) {
  return he(e, Element) && (Np(t, e), Dp(t, e), zp(t, e), Lp(t, e)), e;
}
async function Gp(t, e) {
  const n = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (n.length === 0)
    return t;
  const r = {};
  for (let a = 0; a < n.length; a++) {
    const s = n[a].getAttribute("xlink:href");
    if (s) {
      const l = t.querySelector(s), u = document.querySelector(s);
      !l && u && !r[s] && (r[s] = await un(u, e, !0));
    }
  }
  const o = Object.values(r);
  if (o.length) {
    const a = "http://www.w3.org/1999/xhtml", i = document.createElementNS(a, "svg");
    i.setAttribute("xmlns", a), i.style.position = "absolute", i.style.width = "0", i.style.height = "0", i.style.overflow = "hidden", i.style.display = "none";
    const s = document.createElementNS(a, "defs");
    i.appendChild(s);
    for (let l = 0; l < o.length; l++)
      s.appendChild(o[l]);
    t.appendChild(i);
  }
  return t;
}
async function un(t, e, n) {
  return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((r) => Up(r, e)).then((r) => jp(t, r, e)).then((r) => Wp(t, r)).then((r) => Gp(r, e));
}
const Yo = /url\((['"]?)([^'"]+?)\1\)/g, Hp = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, qp = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function Jp(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function Kp(t) {
  const e = [];
  return t.replace(Yo, (n, r, o) => (e.push(o), n)), e.filter((n) => !Hn(n));
}
async function Qp(t, e, n, r, o) {
  try {
    const a = n ? gp(e, n) : e, i = pr(e);
    let s;
    return o || (s = await dr(a, i, r)), t.replace(Jp(e), `$1${s}$3`);
  } catch {
  }
  return t;
}
function Zp(t, { preferredFontFormat: e }) {
  return e ? t.replace(qp, (n) => {
    for (; ; ) {
      const [r, , o] = Hp.exec(n) || [];
      if (!o)
        return "";
      if (o === e)
        return `src: ${r};`;
    }
  }) : t;
}
function ea(t) {
  return t.search(Yo) !== -1;
}
async function ta(t, e, n) {
  if (!ea(t))
    return t;
  const r = Zp(t, n);
  return Kp(r).reduce((a, i) => a.then((s) => Qp(s, i, e, n)), Promise.resolve(r));
}
async function jt(t, e, n) {
  var r;
  const o = (r = e.style) === null || r === void 0 ? void 0 : r.getPropertyValue(t);
  if (o) {
    const a = await ta(o, null, n);
    return e.style.setProperty(t, a, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function Xp(t, e) {
  await jt("background", t, e) || await jt("background-image", t, e), await jt("mask", t, e) || await jt("mask-image", t, e);
}
async function Yp(t, e) {
  const n = he(t, HTMLImageElement);
  if (!(n && !Hn(t.src)) && !(he(t, SVGImageElement) && !Hn(t.href.baseVal)))
    return;
  const r = n ? t.src : t.href.baseVal, o = await dr(r, pr(r), e);
  await new Promise((a, i) => {
    t.onload = a, t.onerror = i;
    const s = t;
    s.decode && (s.decode = a), s.loading === "lazy" && (s.loading = "eager"), n ? (t.srcset = "", t.src = o) : t.href.baseVal = o;
  });
}
async function ed(t, e) {
  const r = Fe(t.childNodes).map((o) => na(o, e));
  await Promise.all(r).then(() => t);
}
async function na(t, e) {
  he(t, Element) && (await Xp(t, e), await Yp(t, e), await ed(t, e));
}
function td(t, e) {
  const { style: n } = t;
  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
  const r = e.style;
  return r != null && Object.keys(r).forEach((o) => {
    n[o] = r[o];
  }), t;
}
const no = {};
async function ro(t) {
  let e = no[t];
  if (e != null)
    return e;
  const r = await (await fetch(t)).text();
  return e = { url: t, cssText: r }, no[t] = e, e;
}
async function oo(t, e) {
  let n = t.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, a = (n.match(/url\([^)]+\)/g) || []).map(async (i) => {
    let s = i.replace(r, "$1");
    return s.startsWith("https://") || (s = new URL(s, t.url).href), Xo(s, e.fetchRequestInit, ({ result: l }) => (n = n.replace(i, `url(${l})`), [i, l]));
  });
  return Promise.all(a).then(() => n);
}
function ao(t) {
  if (t == null)
    return [];
  const e = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let r = t.replace(n, "");
  const o = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const l = o.exec(r);
    if (l === null)
      break;
    e.push(l[0]);
  }
  r = r.replace(o, "");
  const a = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, i = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", s = new RegExp(i, "gi");
  for (; ; ) {
    let l = a.exec(r);
    if (l === null) {
      if (l = s.exec(r), l === null)
        break;
      a.lastIndex = s.lastIndex;
    } else
      s.lastIndex = a.lastIndex;
    e.push(l[0]);
  }
  return e;
}
async function nd(t, e) {
  const n = [], r = [];
  return t.forEach((o) => {
    if ("cssRules" in o)
      try {
        Fe(o.cssRules || []).forEach((a, i) => {
          if (a.type === CSSRule.IMPORT_RULE) {
            let s = i + 1;
            const l = a.href, u = ro(l).then((p) => oo(p, e)).then((p) => ao(p).forEach((d) => {
              try {
                o.insertRule(d, d.startsWith("@import") ? s += 1 : o.cssRules.length);
              } catch (c) {
                console.error("Error inserting rule from remote css", {
                  rule: d,
                  error: c
                });
              }
            })).catch((p) => {
              console.error("Error loading remote css", p.toString());
            });
            r.push(u);
          }
        });
      } catch (a) {
        const i = t.find((s) => s.href == null) || document.styleSheets[0];
        o.href != null && r.push(ro(o.href).then((s) => oo(s, e)).then((s) => ao(s).forEach((l) => {
          i.insertRule(l, o.cssRules.length);
        })).catch((s) => {
          console.error("Error loading remote stylesheet", s);
        })), console.error("Error inlining remote css file", a);
      }
  }), Promise.all(r).then(() => (t.forEach((o) => {
    if ("cssRules" in o)
      try {
        Fe(o.cssRules || []).forEach((a) => {
          n.push(a);
        });
      } catch (a) {
        console.error(`Error while reading CSS rules from ${o.href}`, a);
      }
  }), n));
}
function rd(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => ea(e.style.getPropertyValue("src")));
}
async function od(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Fe(t.ownerDocument.styleSheets), r = await nd(n, e);
  return rd(r);
}
async function ad(t, e) {
  const n = await od(t, e);
  return (await Promise.all(n.map((o) => {
    const a = o.parentStyleSheet ? o.parentStyleSheet.href : null;
    return ta(o.cssText, a, e);
  }))).join(`
`);
}
async function id(t, e) {
  const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await ad(t, e);
  if (n) {
    const r = document.createElement("style"), o = document.createTextNode(n);
    r.appendChild(o), t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r);
  }
}
async function ld(t, e = {}) {
  const { width: n, height: r } = Zo(t, e), o = await un(t, e, !0);
  return await id(o, e), await na(o, e), td(o, e), await $p(o, n, r);
}
async function sd(t, e = {}) {
  const { width: n, height: r } = Zo(t, e), o = await ld(t, e), a = await rn(o), i = document.createElement("canvas"), s = i.getContext("2d"), l = e.pixelRatio || kp(), u = e.canvasWidth || n, p = e.canvasHeight || r;
  return i.width = u * l, i.height = p * l, e.skipAutoScale || Sp(i), i.style.width = `${u}`, i.style.height = `${p}`, e.backgroundColor && (s.fillStyle = e.backgroundColor, s.fillRect(0, 0, i.width, i.height)), s.drawImage(a, 0, 0, i.width, i.height), i;
}
async function ud(t, e = {}) {
  return (await sd(t, e)).toDataURL("image/jpeg", e.quality || 1);
}
async function io(t) {
  return t ? await ud(t, {
    canvasWidth: 210 * 8,
    canvasHeight: 297 * 8,
    pixelRatio: 1,
    quality: 0.5,
    skipFonts: !0
  }) : "";
}
async function cd({
  paperEls: t,
  paperKey: e
}) {
  return new Promise((n) => {
    pt(async () => {
      const r = {};
      (e === void 0 || e === "front") && (r.front = await io(t.front)), (e === void 0 || e === "back") && (r.back = await io(t.back)), n(r);
    });
  });
}
function pd(t) {
  const e = Ee({
    front: "",
    back: ""
  });
  async function n(r) {
    if (!t.front || !t.back) throw "Setup Error: `paperEls` not exists";
    return cd({
      paperEls: t,
      paperKey: r
    }).then((o) => (Object.assign(e, o), e));
  }
  return {
    paperImages: e,
    printPaper: n
  };
}
function dd(t, e) {
  return lu(
    t,
    Object.assign(
      {
        controls: !0,
        messages: {
          justNow: "就在刚刚",
          past: "{0}之前",
          future: "{0}之后",
          invalid: "",
          second: "{0}秒",
          minute: "{0}分钟",
          hour: "{0}小时",
          day: "{0}天",
          week: "{0}周",
          month: "{0}个月",
          year: "{0}年"
        }
      },
      e
    )
  );
}
const fd = (t) => (De("data-v-aaa4d0a6"), t = t(), Ie(), t), md = { class: "control-section" }, yd = { class: "main-controls" }, hd = { class: "more-controls" }, vd = { class: "downloader-body" }, gd = { class: "downloader-items" }, bd = /* @__PURE__ */ fd(() => /* @__PURE__ */ m("div", { class: "downloader-hints" }, [
  /* @__PURE__ */ m("div", null, "建议 PC 端使用，移动端兼容性较差："),
  /* @__PURE__ */ m("div", null, "· 如果头像未加载，重新生成几次即可")
], -1)), wd = { class: "in-out-modal-body" }, _d = { class: "in-out-modal-panel" }, kd = { class: "in-out-modal-panel" }, Sd = /* @__PURE__ */ V({
  __name: "ControlSection",
  props: {
    paperEls: {}
  },
  emits: ["switch-paper"],
  setup(t, { expose: e, emit: n }) {
    const r = t, o = n, a = qo(), i = ie(), s = sn(), l = Oe(), u = z(""), p = te(() => {
      const O = JSON.stringify({
        pc: i == null ? void 0 : i.value,
        viewData: {
          ...s
          // showingChildSkills,
        }
      });
      return Qr.compressToEncodedURIComponent(O);
    }), d = te(() => {
      const O = new Blob([p.value], { type: "text/plain;charset=utf-8" });
      return URL.createObjectURL(O);
    }), c = z(!1), f = z(!1), v = z(!1), y = z("features");
    function b() {
      o("switch-paper");
    }
    const { paperImages: h, printPaper: P } = pd(r.paperEls), k = te(() => {
      const { name: O, playerName: T } = (i == null ? void 0 : i.value) || {}, q = "【TRPG赛高】", N = [O, T].filter((E) => E).join("-");
      return `${q}${N}${N ? "-" : ""}`;
    });
    function $(O) {
      if (l) {
        if (l.printing) {
          se.info("已经在运行啦，请不要同时多次生成图片");
          return;
        }
        l.printing = !0, se.info({
          message: "图片生成中，页面会有轻微抖动，请稍候…",
          duration: 1e3,
          onClose() {
            P(O).then(() => {
              f.value = !0, l.printing = !1;
            });
          }
        });
      }
    }
    function I() {
      v.value = !v.value;
    }
    function A() {
      if (i != null && i.value) {
        if (!i.value.age || i.value.age === "0") {
          se.error("请先在人物卡中填写年龄");
          return;
        }
        i.value.attributes = uc(i.value.attributes, Number(i.value.age || 0)), se.success("已为您进行年龄修正！");
      }
    }
    function x() {
      !i || !s || (i.value = Ee(Wt()), Rs(s), pt(() => {
        a.removeItem("autoSaved");
      }), se.info("已重置人物卡"), v.value = !1);
    }
    function D() {
      c.value = !0;
    }
    function X() {
      Jo(p.value), se.success("已复制到剪贴板");
    }
    function R() {
      const O = Qr.decompressFromEncodedURIComponent(u.value), T = JSON.parse(O);
      if (l && (l.importing = !0), T && T.viewData && T.pc && s && i)
        try {
          i.value = Wt(T.pc), Object.keys(T.viewData).forEach((q) => {
            const N = q;
            s[N] = T.viewData[N];
          }), se.success("已成功导入"), c.value = !1, v.value = !1;
        } catch {
          se.error("数据有误，无法导入。页面可能因此受损，建议刷新");
        }
      else
        se.error("数据有误，无法导入");
      l && (l.importing = !1);
    }
    function H() {
      l && (l.showTotalSeparation = !l.showTotalSeparation, se.info(
        `已切换成功率显示方式为：${l.showTotalSeparation ? "全面（普通 | 困难 | 极难）" : "极简"}`
      ), v.value = !1);
    }
    async function j() {
      try {
        const O = await navigator.clipboard.readText();
        u.value = O, R();
      } catch {
        se.error("无法读取剪贴板");
      }
    }
    function B() {
      const O = a.getItem("autoSaved");
      if (!O) {
        se.info("没有找到历史记录");
        return;
      }
      const { lastModified: T, pc: q, viewData: N } = O, { timeAgo: E } = dd(T || Date.now());
      let C;
      try {
        C = hr(L, null, [
          "是否加载您",
          hr("b", { style: { fontWeight: "bold" } }, E.value),
          "编辑的人物卡",
          q != null && q.name ? `：${q.name}` : ""
        ]);
      } catch {
        se.error("加载历史记录失败");
        return;
      }
      ga.confirm(C, "检测到编辑过的人物卡").then(() => {
        !l || !i || !s || (l.importing = !0, i.value = Wt(q), N && Object.keys(N).forEach((M) => {
          const ne = M;
          s[ne] = N[ne];
        }), pt(() => {
          l && (l.importing = !1), se.success("已加载历史记录");
        }));
      }).catch(() => {
      });
    }
    return e({ inData: u, applyInData: R }), (O, T) => {
      const q = ae("el-tab-pane"), N = ae("el-tabs"), E = ae("el-input"), C = ae("el-button");
      return g(), _("div", md, [
        m("div", yd, [
          w(Kc),
          w(Se, {
            label: "翻面",
            icon: S(Fu),
            onClick: b
          }, null, 8, ["icon"]),
          w(Se, {
            label: "保存",
            icon: S(Pu),
            onClick: T[0] || (T[0] = () => $())
          }, null, 8, ["icon"]),
          w(Se, {
            label: "读取剪贴板",
            icon: S(xn),
            onClick: j
          }, null, 8, ["icon"]),
          w(Se, {
            label: "更多",
            icon: S(Eu),
            onClick: I
          }, null, 8, ["icon"])
        ]),
        v.value ? (g(), Z(N, {
          key: 0,
          class: "more-container",
          modelValue: y.value,
          "onUpdate:modelValue": T[1] || (T[1] = (M) => y.value = M)
        }, {
          default: U(() => [
            w(q, {
              class: "more-pane",
              label: "更多功能",
              name: "features"
            }, {
              default: U(() => [
                m("div", hd, [
                  w(Se, {
                    label: "快速年龄修正",
                    icon: S(Vu),
                    onClick: A
                  }, null, 8, ["icon"]),
                  w(Se, {
                    label: "重置人物卡",
                    icon: S(Cu),
                    onClick: x
                  }, null, 8, ["icon"]),
                  w(Se, {
                    label: "导入/导出数据",
                    icon: S(xn),
                    onClick: D
                  }, null, 8, ["icon"]),
                  w(Se, {
                    label: "读取历史",
                    icon: S(xn),
                    onClick: B
                  }, null, 8, ["icon"]),
                  w(vp),
                  w(Se, {
                    label: "切换成功率模式",
                    icon: S(Iu),
                    onClick: H
                  }, null, 8, ["icon"])
                ])
              ]),
              _: 1
            }),
            w(q, {
              class: "more-pane more-pane-less",
              label: "职业列表",
              name: "jobs"
            }, {
              default: U(() => [
                w(rp)
              ]),
              _: 1
            }),
            w(q, {
              class: "more-pane more-pane-less",
              label: "武器列表",
              name: "weapons"
            }, {
              default: U(() => [
                w(pp)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : W("", !0),
        w(gt, {
          modelValue: f.value,
          "onUpdate:modelValue": T[4] || (T[4] = (M) => f.value = M),
          title: "下载图片/数据"
        }, {
          default: U(() => [
            m("div", vd, [
              m("div", gd, [
                w(En, {
                  title: "正面",
                  refreshable: "",
                  previewImage: S(h).front,
                  download: {
                    url: S(h).front,
                    name: k.value,
                    type: "jpg"
                  },
                  onRefresh: T[2] || (T[2] = () => $("front"))
                }, null, 8, ["previewImage", "download"]),
                w(En, {
                  title: "背面",
                  refreshable: "",
                  previewImage: S(h).back,
                  download: {
                    url: S(h).back,
                    name: k.value,
                    type: "jpg"
                  },
                  onRefresh: T[3] || (T[3] = () => $("back"))
                }, null, 8, ["previewImage", "download"]),
                w(En, {
                  title: "车卡数据",
                  download: {
                    url: d.value,
                    name: k.value,
                    type: "txt"
                  }
                }, null, 8, ["download"])
              ]),
              bd
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        w(gt, {
          modelValue: c.value,
          "onUpdate:modelValue": T[6] || (T[6] = (M) => c.value = M),
          title: "导入/导出数据",
          onClosed: T[7] || (T[7] = (M) => u.value = "")
        }, {
          default: U(() => [
            m("div", wd, [
              m("div", _d, [
                w(E, {
                  type: "textarea",
                  value: p.value,
                  rows: 16,
                  readonly: !0,
                  resize: "none"
                }, null, 8, ["value"]),
                w(C, {
                  type: "primary",
                  onClick: X
                }, {
                  default: U(() => [
                    ue(" 复制以上内容 ")
                  ]),
                  _: 1
                })
              ]),
              m("div", kd, [
                w(E, {
                  type: "textarea",
                  modelValue: u.value,
                  "onUpdate:modelValue": T[5] || (T[5] = (M) => u.value = M),
                  rows: 16,
                  placeholder: "将文本粘贴到这里",
                  resize: "none"
                }, null, 8, ["modelValue"]),
                w(C, {
                  type: "primary",
                  onClick: R
                }, {
                  default: U(() => [
                    ue(" 导入以上内容 ")
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), lo = /* @__PURE__ */ G(Sd, [["__scopeId", "data-v-aaa4d0a6"]]), Ad = /* @__PURE__ */ V({
  __name: "PaperLayout",
  props: {
    setRef: {}
  },
  setup(t) {
    const e = Oe();
    return (n, r) => {
      var o;
      return g(), _("div", {
        class: ee(["paper theme-light", {
          "printing-image": (o = S(e)) == null ? void 0 : o.printing
        }])
      }, [
        m("div", {
          class: "paper-content",
          ref: n.setRef
        }, [
          $t(n.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 2);
    };
  }
}), ra = /* @__PURE__ */ G(Ad, [["__scopeId", "data-v-6818b3b6"]]), $d = { class: "paper-section" }, Pd = { class: "heading" }, xd = { class: "title" }, Ed = { class: "subtitle" }, Dd = { class: "body" }, Id = /* @__PURE__ */ V({
  __name: "PaperSection",
  props: {
    title: {},
    subTitle: {},
    centered: { type: Boolean, default: !0 }
  },
  setup(t) {
    return (e, n) => (g(), _("div", $d, [
      m("div", {
        class: ee(["header", {
          "header-centered": e.centered
        }])
      }, [
        $t(e.$slots, "header", {}, () => [
          m("h1", Pd, [
            m("span", xd, F(e.title), 1),
            m("span", Ed, F(e.subTitle), 1)
          ])
        ], !0)
      ], 2),
      m("div", Dd, [
        $t(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), we = /* @__PURE__ */ G(Id, [["__scopeId", "data-v-757cabe7"]]), Rd = { class: "flatten-tree" }, Fd = { class: "group-label" }, Od = { class: "options" }, Cd = ["onClick"], Td = /* @__PURE__ */ V({
  __name: "FlattenTree",
  props: {
    tree: {}
  },
  emits: ["select"],
  setup(t) {
    return (e, n) => (g(), _("div", Rd, [
      (g(!0), _(L, null, Y(e.tree, (r) => (g(), _("div", {
        class: "group",
        key: r.key
      }, [
        m("div", Fd, F(r.label), 1),
        m("div", Od, [
          (g(!0), _(L, null, Y(r.children, (o) => (g(), _("a", {
            class: "option",
            key: o.key,
            onClick: (a) => e.$emit("select", o, r)
          }, F(o.label), 9, Cd))), 128))
        ])
      ]))), 128))
    ]));
  }
}), oa = /* @__PURE__ */ G(Td, [["__scopeId", "data-v-3998604b"]]), fr = {
  mounted(t, e) {
    t._clickOutsideEvent = function(n) {
      t === n.target || t.contains(n.target) || e.value(n, t);
    }, document.addEventListener("click", t._clickOutsideEvent), document.addEventListener("focus", t._clickOutsideEvent, !0);
  },
  unmounted: function(e) {
    document.removeEventListener("click", e._clickOutsideEvent), document.removeEventListener("focus", e._clickOutsideEvent, !0);
  }
}, Vd = { class: "info-row" }, Md = { class: "info-row" }, Ud = { class: "rel only-wide" }, Bd = {
  key: 0,
  class: "job-selector"
}, jd = { class: "job-selector-header" }, Nd = { class: "only-compact" }, zd = { class: "info-row" }, Ld = /* @__PURE__ */ V({
  __name: "InvestigatorSection",
  setup(t) {
    const e = ie(), n = Oe(), { jobGroups: r } = Rt, o = z(!1), a = z("");
    function i() {
      o.value = !0;
    }
    function s() {
      o.value = !1;
    }
    ge(
      () => o.value,
      () => {
        a.value = "";
      }
    );
    const l = te(() => {
      const p = a.value;
      return r.reduce((c, f) => {
        const { name: v, pinyin: y, jobs: b } = f, h = b.reduce(
          (P, k) => ((!p || v.includes(p) || y.includes(p) || k.name.includes(p) || k.pinyin.includes(p)) && P.push({ label: k.name, key: k.name }), P),
          []
        );
        return h.length && c.push({
          label: v,
          key: v,
          children: h
        }), c;
      }, []);
    });
    function u(p) {
      e && (e.value.job = p, s());
    }
    return (p, d) => S(e) ? (g(), Z(we, {
      key: 0,
      title: "调查员",
      subTitle: "Investigator"
    }, {
      default: U(() => {
        var c;
        return [
          m("div", {
            class: ee(["info-section", {
              "printing-image": (c = S(n)) == null ? void 0 : c.printing
            }])
          }, [
            m("div", Vd, [
              w(re, {
                label: "姓名",
                char: 5,
                modelValue: S(e).name,
                "onUpdate:modelValue": d[0] || (d[0] = (f) => S(e).name = f)
              }, null, 8, ["modelValue"]),
              w(re, {
                label: "玩家",
                char: 5,
                modelValue: S(e).playerName,
                "onUpdate:modelValue": d[1] || (d[1] = (f) => S(e).playerName = f)
              }, null, 8, ["modelValue"])
            ]),
            m("div", Md, [
              w(re, {
                label: "时代",
                char: 5,
                modelValue: S(e).time,
                "onUpdate:modelValue": d[2] || (d[2] = (f) => S(e).time = f)
              }, null, 8, ["modelValue"]),
              Ze((g(), _("div", Ud, [
                w(re, {
                  label: "职业",
                  char: 5,
                  modelValue: S(e).job,
                  "onUpdate:modelValue": d[3] || (d[3] = (f) => S(e).job = f),
                  onFocus: i
                }, null, 8, ["modelValue"]),
                w(qn, { name: "slide-up" }, {
                  default: U(() => [
                    o.value ? (g(), _("div", Bd, [
                      m("div", jd, [
                        Ze(m("input", {
                          class: "job-search-input",
                          type: "text",
                          placeholder: "输入职业名称或拼音可以进行搜索",
                          "onUpdate:modelValue": d[4] || (d[4] = (f) => a.value = f)
                        }, null, 512), [
                          [fa, a.value]
                        ])
                      ]),
                      w(oa, {
                        tree: l.value,
                        onSelect: d[5] || (d[5] = (f) => u(f.label))
                      }, null, 8, ["tree"])
                    ])) : W("", !0)
                  ]),
                  _: 1
                })
              ])), [
                [S(fr), s]
              ]),
              m("div", Nd, [
                w(re, {
                  label: "职业",
                  char: 5,
                  modelValue: S(e).job,
                  "onUpdate:modelValue": d[6] || (d[6] = (f) => S(e).job = f)
                }, null, 8, ["modelValue"])
              ])
            ]),
            m("div", zd, [
              w(re, {
                label: "年龄",
                char: 5,
                modelValue: S(e).age,
                "onUpdate:modelValue": d[7] || (d[7] = (f) => S(e).age = f)
              }, null, 8, ["modelValue"]),
              w(re, {
                label: "性别",
                char: 5,
                modelValue: S(e).gender,
                "onUpdate:modelValue": d[8] || (d[8] = (f) => S(e).gender = f)
              }, null, 8, ["modelValue"])
            ])
          ], 2)
        ];
      }),
      _: 1
    })) : W("", !0);
  }
}), Wd = /* @__PURE__ */ G(Ld, [["__scopeId", "data-v-ba7e4fb1"]]), aa = (t) => (De("data-v-0f51884b"), t = t(), Ie(), t), Gd = { class: "info-section" }, Hd = { class: "attributes-group" }, qd = /* @__PURE__ */ aa(() => /* @__PURE__ */ m("div", { class: "divider" }, null, -1)), Jd = { class: "attributes-group" }, Kd = /* @__PURE__ */ aa(() => /* @__PURE__ */ m("div", { class: "divider" }, null, -1)), Qd = { class: "attributes-group" }, Zd = {
  key: 0,
  class: "ponits-sum"
}, Xd = /* @__PURE__ */ V({
  __name: "AttributesSection",
  setup(t) {
    const e = ie(), n = [
      { key: "str", label: "力量", hint: "STR" },
      { key: "con", label: "体质", hint: "CON" },
      { key: "dex", label: "敏捷", hint: "DEX" }
    ], r = [
      { key: "app", label: "外貌", hint: "APP" },
      { key: "pow", label: "意志", hint: "POW" },
      { key: "siz", label: "体型", hint: "SIZ" }
    ], o = [
      { key: "edu", label: "教育", hint: "知识 EDU" },
      { key: "int", label: "智力", hint: "灵感 INT" },
      { key: "luc", label: "幸运", hint: "LUK" }
    ], a = te(() => {
      if (!e) return 0;
      const { str: s, con: l, dex: u, app: p, pow: d, siz: c, edu: f, int: v } = e.value.attributes, y = [s, l, u, p, d, c, f, v];
      return y.every((h) => h) ? y.reduce((h, P) => h + (P || 0), 0) : 0;
    });
    function i(s, l) {
      e && (e.value.attributes[s] = l ? +l : void 0);
    }
    return (s, l) => S(e) ? (g(), Z(we, {
      key: 0,
      title: "属性",
      subTitle: "Characteristics"
    }, {
      default: U(() => [
        m("div", Gd, [
          m("div", Hd, [
            (g(), _(L, null, Y(n, (u) => {
              var p;
              return w(re, {
                key: u.key,
                label: u.label,
                modelValue: `${((p = S(e)) == null ? void 0 : p.attributes[u.key]) ?? ""}`,
                "onUpdate:modelValue": (d) => i(u.key, d)
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
            }), 64))
          ]),
          qd,
          m("div", Jd, [
            (g(), _(L, null, Y(r, (u) => {
              var p;
              return w(re, {
                key: u.key,
                label: u.label,
                modelValue: `${((p = S(e)) == null ? void 0 : p.attributes[u.key]) ?? ""}`,
                "onUpdate:modelValue": (d) => i(u.key, d)
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
            }), 64))
          ]),
          Kd,
          m("div", Qd, [
            (g(), _(L, null, Y(o, (u) => {
              var p;
              return w(re, {
                key: u.key,
                label: u.label,
                modelValue: `${((p = S(e)) == null ? void 0 : p.attributes[u.key]) ?? ""}`,
                "onUpdate:modelValue": (d) => i(u.key, d)
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
            }), 64)),
            a.value ? (g(), _("div", Zd, "总点数 " + F(a.value), 1)) : W("", !0)
          ])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), Yd = /* @__PURE__ */ G(Xd, [["__scopeId", "data-v-0f51884b"]]), ef = { class: "derive-quick-section" }, tf = /* @__PURE__ */ V({
  __name: "DeriveQuickSection",
  setup(t) {
    const e = ie();
    function n(r, o, a) {
      !e || !e.value.deriveAttributes || (e.value.deriveAttributes[r][o] = a || void 0);
    }
    return (r, o) => S(e) ? (g(), Z(we, {
      key: 0,
      class: "derive-quick-wrapper",
      title: "衍生属性",
      subTitle: "Derived"
    }, {
      default: U(() => {
        var a, i, s, l, u, p, d, c;
        return [
          m("div", ef, [
            w(re, {
              label: "理智值",
              char: 3,
              modelValue: `${((i = (a = S(e).deriveAttributes) == null ? void 0 : a.sanity) == null ? void 0 : i.now) ?? ""}`,
              "onUpdate:modelValue": o[0] || (o[0] = (f) => n("sanity", "now", f))
            }, null, 8, ["modelValue"]),
            w(re, {
              label: "理智上限",
              char: 2,
              modelValue: `${((l = (s = S(e).deriveAttributes) == null ? void 0 : s.sanity) == null ? void 0 : l.start) ?? ""}`,
              "onUpdate:modelValue": o[1] || (o[1] = (f) => n("sanity", "start", f))
            }, null, 8, ["modelValue"]),
            w(re, {
              label: "生命值",
              char: 3,
              modelValue: `${((p = (u = S(e).deriveAttributes) == null ? void 0 : u.hp) == null ? void 0 : p.now) ?? ""}`,
              "onUpdate:modelValue": o[2] || (o[2] = (f) => n("hp", "now", f))
            }, null, 8, ["modelValue"]),
            w(re, {
              label: "魔法值",
              char: 3,
              modelValue: `${((c = (d = S(e).deriveAttributes) == null ? void 0 : d.mp) == null ? void 0 : c.now) ?? ""}`,
              "onUpdate:modelValue": o[3] || (o[3] = (f) => n("mp", "now", f))
            }, null, 8, ["modelValue"])
          ])
        ];
      }),
      _: 1
    })) : W("", !0);
  }
}), nf = /* @__PURE__ */ G(tf, [["__scopeId", "data-v-fc5b2a10"]]), rf = /* @__PURE__ */ V({
  __name: "AvatarSection",
  setup(t) {
    const e = z(!1);
    return (n, r) => {
      const o = ae("AvatarModalContent");
      return g(), Z(gt, {
        class: "coc-card-avatar-modal",
        title: "设置形象",
        modelValue: e.value,
        "onUpdate:modelValue": r[1] || (r[1] = (a) => e.value = a)
      }, {
        default: U(() => [
          w(o, {
            onFinished: r[0] || (r[0] = (a) => e.value = !1)
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), of = /* @__PURE__ */ G(rf, [["__scopeId", "data-v-67a8d568"]]), ia = (t) => (De("data-v-ed03bc13"), t = t(), Ie(), t), af = {
  key: 0,
  class: "suggestion-content"
}, lf = /* @__PURE__ */ ia(() => /* @__PURE__ */ m("span", null, "默认本职技能：", -1)), sf = { class: "multi-skill-text" }, uf = /* @__PURE__ */ ia(() => /* @__PURE__ */ m("span", null, "、", -1)), cf = /* @__PURE__ */ V({
  __name: "HintSection",
  setup(t) {
    const e = Qo(), n = Oe();
    return (r, o) => {
      var a, i;
      return g(), _("div", {
        class: ee(["hint-section", {
          "printing-image": (a = S(n)) == null ? void 0 : a.printing
        }])
      }, [
        (i = S(e)) != null && i.text ? (g(), _("div", af, [
          lf,
          (g(!0), _(L, null, Y(S(e).multiSkillTexts, (s) => (g(), _(L, { key: s }, [
            m("span", sf, F(s), 1),
            uf
          ], 64))), 128)),
          m("span", null, F(S(e).text), 1)
        ])) : W("", !0)
      ], 2);
    };
  }
}), pf = /* @__PURE__ */ G(cf, [["__scopeId", "data-v-ed03bc13"]]), df = { class: "sox-checkbox" }, ff = ["checked"], mf = /* @__PURE__ */ V({
  __name: "SoxCheckbox",
  props: {
    checked: { type: Boolean, default: !1 },
    xOnFalse: { type: Boolean, default: !1 }
  },
  emits: ["check", "change"],
  setup(t, { emit: e }) {
    const n = t, r = e, o = z(n.checked);
    ge(
      () => n.checked,
      () => {
        o.value = n.checked;
      }
    );
    function a(i) {
      const s = i.target.checked;
      o.value = s, r("check", s, i), r("change", i);
    }
    return (i, s) => {
      const l = ae("el-icon");
      return g(), _("label", df, [
        w(l, { size: "0.9em" }, {
          default: U(() => [
            o.value ? (g(), Z(S(Uu), { key: 0 })) : W("", !0),
            !o.value && i.xOnFalse ? (g(), Z(S(_u), { key: 1 })) : W("", !0)
          ]),
          _: 1
        }),
        m("input", {
          type: "checkbox",
          class: "sox-checkbox-input",
          checked: o.value,
          onChange: a
        }, null, 40, ff)
      ]);
    };
  }
}), mr = /* @__PURE__ */ G(mf, [["__scopeId", "data-v-47166167"]]), yf = { class: "skill-td-label" }, hf = { class: "skill-td-checkbox-label" }, vf = {
  key: 0,
  class: "child-skill-display"
}, gf = { key: 0 }, bf = { class: "child-skill-input-container" }, wf = ["value"], _f = {
  key: 0,
  class: "child-skill-options"
}, kf = ["onClick"], Sf = {
  key: 1,
  class: "skill-td-label-comments"
}, Af = /* @__PURE__ */ V({
  __name: "SkillTdLabel",
  props: {
    skillName: {},
    comments: {},
    childSkillData: {}
  },
  emits: ["selectChildSkill"],
  setup(t, { emit: e }) {
    const n = t, r = ie(), o = Pt("viewData"), a = e, i = z(!1), s = te(() => o == null ? void 0 : o.showingChildSkills[n.skillName]), l = te(() => ["母语", "外语"].includes(n.skillName) ? [
      ...(o == null ? void 0 : o.showingChildSkills.母语) || [],
      ...(o == null ? void 0 : o.showingChildSkills.外语) || []
    ] : s.value), u = te(() => !r || !o ? !1 : r.value.proSkills.some((f) => {
      var h;
      if (typeof f == "string")
        return f === n.skillName;
      const [v, y, b] = f;
      return v === n.skillName && b === ((h = n.childSkillData) == null ? void 0 : h.place);
    }));
    function p(f) {
      if (!(!n.childSkillData || !s.value)) {
        if (u.value && r) {
          const v = r.value.proSkills.find(([y, b, h]) => {
            var P;
            return y === n.skillName && h === ((P = n.childSkillData) == null ? void 0 : P.place);
          });
          v && typeof v != "string" && (v[1] = f);
        }
        s.value[n.childSkillData.place] = f;
      }
    }
    function d(f) {
      p(f.name), a("selectChildSkill", f), i.value = !1;
    }
    function c(f) {
      if (r)
        if (f) {
          let v = n.skillName;
          n.childSkillData && (v = [n.skillName, n.childSkillData.name, n.childSkillData.place]), r.value.proSkills.push(v);
        } else
          r.value.proSkills = r.value.proSkills.filter((v) => {
            if (!n.childSkillData) return v !== n.skillName;
            const [y, b, h] = v;
            return y !== n.skillName || h !== n.childSkillData.place;
          });
    }
    return (f, v) => {
      var y, b;
      return g(), _("div", yf, [
        m("label", hf, [
          w(mr, {
            checked: u.value,
            onCheck: c
          }, null, 8, ["checked"])
        ]),
        m("div", null, F(f.skillName), 1),
        f.childSkillData ? (g(), _("div", vf, [
          f.skillName ? (g(), _("div", gf, ":")) : W("", !0),
          Ze((g(), _("div", bf, [
            m("input", {
              type: "text",
              class: "child-skill-input",
              value: (y = s.value) == null ? void 0 : y[f.childSkillData.place],
              onInput: v[0] || (v[0] = (h) => p(h.target.value)),
              onFocus: v[1] || (v[1] = (h) => i.value = !0)
            }, null, 40, wf),
            (b = f.childSkillData.list) != null && b.length ? Ze((g(), _("div", _f, [
              (g(!0), _(L, null, Y(f.childSkillData.list, (h) => {
                var P;
                return g(), _("div", {
                  key: h.name,
                  class: ee(["child-skill-option", {
                    "child-skill-option-existed": (P = l.value) == null ? void 0 : P.includes(h.name)
                  }]),
                  onClick: (k) => d(h)
                }, F(h.name), 11, kf);
              }), 128))
            ], 512)), [
              [ho, i.value]
            ]) : W("", !0)
          ])), [
            [S(fr), () => i.value = !1]
          ])
        ])) : W("", !0),
        f.comments ? (g(), _("div", Sf, F(f.comments), 1)) : W("", !0)
      ]);
    };
  }
}), $f = /* @__PURE__ */ G(Af, [["__scopeId", "data-v-aae04eeb"]]), Pf = ["value", "readonly"], xf = /* @__PURE__ */ V({
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
    return (o, a) => (g(), _("input", {
      type: "text",
      class: "base-td-input",
      value: o.value,
      readonly: o.readonly,
      onInput: a[0] || (a[0] = (i) => o.$emit("input", i.target.value)),
      onFocus: r
    }, null, 40, Pf));
  }
}), ze = /* @__PURE__ */ G(xf, [["__scopeId", "data-v-e68e146c"]]), Ef = { class: "skill-td-input" }, Df = /* @__PURE__ */ V({
  __name: "SkillTdInput",
  props: {
    value: { default: "" },
    checkable: { type: Boolean, default: !1 },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["input", "check"],
  setup(t) {
    return (e, n) => (g(), _("div", Ef, [
      e.checkable ? (g(), Z(mr, {
        key: 0,
        class: "skill-td-input-checkbox",
        checked: e.checked,
        onCheck: n[0] || (n[0] = (r) => e.$emit("check", r))
      }, null, 8, ["checked"])) : W("", !0),
      w(ze, {
        class: "skill-td-input-input",
        value: e.value,
        onInput: n[1] || (n[1] = (r) => e.$emit("input", r))
      }, null, 8, ["value"])
    ]));
  }
}), Nt = /* @__PURE__ */ G(Df, [["__scopeId", "data-v-349e4cf4"]]), If = (t) => (De("data-v-42c61a56"), t = t(), Ie(), t), Rf = { class: "skill-table" }, Ff = /* @__PURE__ */ If(() => /* @__PURE__ */ m("thead", null, [
  /* @__PURE__ */ m("tr", null, [
    /* @__PURE__ */ m("th", { class: "skill-th th-deep" }),
    /* @__PURE__ */ m("th", { class: "skill-th th-deep th-skill" }, [
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
        /* @__PURE__ */ ue(" 技能 ")
      ])
    ]),
    /* @__PURE__ */ m("th", { class: "skill-th th-light" }, "基础%"),
    /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, "职业%"),
    /* @__PURE__ */ m("th", { class: "skill-th th-light" }, "兴趣%"),
    /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, [
      /* @__PURE__ */ m("div", { class: "th-grow" }, "成长%")
    ]),
    /* @__PURE__ */ m("th", { class: "skill-th th-light" }, "成功率%")
  ])
], -1)), Of = ["rowspan"], Cf = {
  key: 0,
  class: "init-placeholder"
}, Tf = { class: "init-placeholder-content" }, Vf = { key: 1 }, Mf = {
  key: 0,
  class: "total-separation"
}, Uf = { key: 1 }, Bf = /* @__PURE__ */ V({
  __name: "SkillTable",
  props: {
    data: {},
    suggestion: {}
  },
  setup(t) {
    const e = t, n = ie(), r = sn(), o = Oe();
    function a(p, d) {
      return p.reduce((f, v) => {
        const y = v.groupSkills.reduce(
          (b, h, P) => {
            const k = v.groupName === "特殊";
            let $ = h.init;
            n && h.name in Yt && ($ = Yt[h.name](n.value));
            const I = k || P === 0, A = h.name, x = s(A), D = (x == null ? void 0 : x[1]) || {}, [X, R] = (d == null ? void 0 : d.wealth) ?? [-1, -1], H = A === "信用评级" && X >= 0 && R >= 0 ? `(${X}~${R})` : "", j = u(D, $);
            let B = {
              key: h.name,
              skillName: h.name,
              skillKey: h.name,
              comments: H,
              init: $,
              initPlaceholder: h.initPlaceholder,
              points: D,
              total: j,
              totalSeparation: [j, ~~(j / 2), ~~(j / 5)],
              showTotal: j > 0 && (j !== $ || j === D.b),
              ...I ? {
                isGroupStart: I,
                groupName: v.groupName,
                groupSize: v.groupSkills.length
              } : {},
              ...k ? { isSpecialGroup: k, groupSize: 1 } : {}
            }, O = [...b], T = [B];
            if (h.group) {
              const q = h.group.show.length, N = O.find((E) => E.isGroupStart) || B;
              N.groupSize += q - 1, T = h.group.show.map((E, C) => {
                var Ue, Ce, be;
                const M = ((Ue = r == null ? void 0 : r.showingChildSkills[h.name]) == null ? void 0 : Ue[C]) ?? E, ne = (Ce = h.group) == null ? void 0 : Ce.skills.find(({ name: et }) => et === M);
                let me = (ne == null ? void 0 : ne.init) ?? B.init;
                const _e = [h.name, M, C], ce = s(_e), Re = (ce == null ? void 0 : ce[1]) || {}, ke = u(Re, me);
                return n && !h.name && (me = Re.b || 0), {
                  ...B,
                  // group info
                  isGroupStart: C ? !1 : B.isGroupStart,
                  // skill info
                  key: `${h.name}:_:${C}`,
                  skillKey: _e,
                  init: me,
                  points: Re,
                  total: ke,
                  totalSeparation: [ke, ~~(ke / 2), ~~(ke / 5)],
                  showTotal: ke > 0 && (ke !== me || ke === Re.b),
                  // child skill info
                  childSkillData: {
                    name: M,
                    place: C,
                    list: (be = h.group) == null ? void 0 : be.skills
                  }
                };
              });
            }
            return [...O, ...T];
          },
          []
        );
        return [...f, ...y];
      }, []);
    }
    const i = te(() => a(e.data, e.suggestion));
    function s(p) {
      if (n)
        return n.value.skillPoints.find((d) => {
          const [c] = d;
          if (typeof p == "string")
            return p === c;
          const [f, v, y] = c, [b, h, P] = p;
          return f === b && y === P;
        });
    }
    function l(p, d, c) {
      if (!n) return;
      let f = s(p);
      f || (f = [typeof p == "string" ? p : [...p], {}], n.value.skillPoints.push(f));
      const v = f[1];
      if (typeof c == "boolean")
        v.c = c;
      else {
        const y = d;
        c ? v[y] = Number(c) : delete v[y];
      }
    }
    function u(p, d) {
      const { b: c, p: f = 0, i: v = 0, g: y = 0 } = p;
      return (c ?? d) + Number(f) + Number(v) + Number(y);
    }
    return (p, d) => (g(), _("table", Rf, [
      Ff,
      m("tbody", null, [
        (g(!0), _(L, null, Y(i.value, (c, f) => {
          var v;
          return g(), _("tr", {
            key: c.skillName
          }, [
            c.isGroupStart ? (g(), _("td", {
              key: 0,
              rowspan: c.groupSize,
              class: ee(["skill-td td-group-name", {
                "td-group-name-visible": !c.isSpecialGroup,
                "td-color-1": c.isSpecialGroup && f % 2,
                "td-color-2": c.isSpecialGroup && (f + 1) % 2
              }])
            }, F(c.isSpecialGroup ? "" : c.groupName), 11, Of)) : W("", !0),
            m("td", {
              class: ee(["skill-td td-skill-name", {
                "td-skill-name-special": c.isSpecialGroup,
                "td-color-1": f % 2,
                "td-color-2": (f + 1) % 2
              }])
            }, [
              w($f, {
                skillName: c.skillName,
                comments: c.comments,
                childSkillData: c.childSkillData
              }, null, 8, ["skillName", "comments", "childSkillData"])
            ], 2),
            m("td", {
              class: ee(["skill-td", {
                "td-color-0": f % 2,
                "td-color-1": (f + 1) % 2
              }])
            }, [
              !c.init && c.initPlaceholder ? (g(), _("div", Cf, [
                m("span", Tf, F(c.initPlaceholder), 1)
              ])) : c.groupName !== "其它" ? (g(), _("span", Vf, F(c.init), 1)) : (g(), Z(Nt, {
                key: 2,
                value: `${c.points.b ?? ""}`,
                onInput: (y) => l(c.skillKey, "b", y)
              }, null, 8, ["value", "onInput"]))
            ], 2),
            m("td", {
              class: ee(["skill-td", {
                "td-color-1": f % 2,
                "td-color-2": (f + 1) % 2
              }])
            }, [
              w(Nt, {
                value: `${c.points.p ?? ""}`,
                onInput: (y) => l(c.skillKey, "p", y)
              }, null, 8, ["value", "onInput"])
            ], 2),
            m("td", {
              class: ee(["skill-td", {
                "td-color-0": f % 2,
                "td-color-1": (f + 1) % 2
              }])
            }, [
              w(Nt, {
                value: `${c.points.i ?? ""}`,
                onInput: (y) => l(c.skillKey, "i", y)
              }, null, 8, ["value", "onInput"])
            ], 2),
            m("td", {
              class: ee(["skill-td", {
                "td-color-1": f % 2,
                "td-color-2": (f + 1) % 2
              }])
            }, [
              w(Nt, {
                checkable: !0,
                checked: c.points.c,
                value: `${c.points.g ?? ""}`,
                onInput: (y) => l(c.skillKey, "g", y),
                onCheck: (y) => l(c.skillKey, "c", y)
              }, null, 8, ["checked", "value", "onInput", "onCheck"])
            ], 2),
            m("td", {
              class: ee(["skill-td", {
                "td-color-0": f % 2,
                "td-color-1": (f + 1) % 2
              }])
            }, [
              (v = S(o)) != null && v.showTotalSeparation ? (g(), _("span", Mf, [
                (g(!0), _(L, null, Y(c.totalSeparation, (y, b) => (g(), _("span", {
                  key: b,
                  class: "total-sep"
                }, F(y), 1))), 128))
              ])) : c.showTotal ? (g(), _("span", Uf, F(c.total), 1)) : W("", !0)
            ], 2)
          ]);
        }), 128))
      ])
    ]));
  }
}), so = /* @__PURE__ */ G(Bf, [["__scopeId", "data-v-42c61a56"]]), yr = (t) => (De("data-v-7b675b2e"), t = t(), Ie(), t), jf = { class: "header" }, Nf = { class: "header-left points-container" }, zf = { class: "point-container" }, Lf = {
  key: 0,
  class: "point-rest"
}, Wf = { class: "point-container" }, Gf = {
  key: 0,
  class: "point-rest"
}, Hf = /* @__PURE__ */ yr(() => /* @__PURE__ */ m("h1", { class: "heading" }, [
  /* @__PURE__ */ m("span", { class: "title" }, "技能表"),
  /* @__PURE__ */ m("span", { class: "subtitle" }, "Skill")
], -1)), qf = { class: "header-right points-container" }, Jf = /* @__PURE__ */ yr(() => /* @__PURE__ */ m("div", null, "技能成功率上限", -1)), Kf = { class: "point-container" }, Qf = { class: "point-container" }, Zf = { class: "skill-section-body" }, Xf = /* @__PURE__ */ yr(() => /* @__PURE__ */ m("div", { class: "divider" }, null, -1)), uo = 6, Yf = /* @__PURE__ */ V({
  __name: "SkillSection",
  setup(t) {
    const e = ie(), n = Qo(), r = Oe(), o = sn();
    function a() {
      const { pro: d, interest: c } = (e == null ? void 0 : e.value.pointValues) || {};
      return {
        pro: {
          point: Number(d || 0),
          str: d || ""
        },
        interest: {
          point: Number(c || 0),
          str: c || ""
        }
      };
    }
    const i = Ee(a()), s = te(() => {
      let d = 0, c = 0;
      return e == null || e.value.skillPoints.forEach(([f, v]) => {
        d += v.p || 0, c += v.i || 0;
      }), {
        proPoint: i.pro.point - d,
        interestPoint: i.interest.point - c
      };
    });
    function l(d, c = "") {
      const f = i[d];
      if (f.str = c, f.str) {
        const v = Number(f.str);
        f.point = Number.isNaN(v) ? 0 : v;
      } else
        f.point = 0;
    }
    function u(d, c) {
      e && e.value.pointValues[d] !== c && (e.value.pointValues[d] = c);
    }
    function p(d, c) {
      const f = Number(c);
      o && o.skillLimits[d] !== f && (o.skillLimits[d] = f);
    }
    return ge(
      () => ({
        job: e == null ? void 0 : e.value.job,
        attributes: e == null ? void 0 : e.value.attributes
      }),
      ({ job: d, attributes: c }) => {
        const { point: f } = zo(d, c), v = e == null ? void 0 : e.value.pointValues.pro;
        f && l("pro", v ?? `${f > 0 ? f : ""}`);
        const y = c == null ? void 0 : c.int, b = y ? `${y * 2}` : "", h = e == null ? void 0 : e.value.pointValues.interest;
        b && l("interest", h ?? b);
      },
      { deep: !0 }
    ), ge(
      () => ({
        pointValues: e == null ? void 0 : e.value.pointValues,
        pro: e == null ? void 0 : e.value.pointValues.pro,
        interest: e == null ? void 0 : e.value.pointValues.interest
      }),
      ({ pointValues: d, pro: c, interest: f }, { pointValues: v, pro: y, interest: b }) => {
        if (d !== v) {
          typeof c < "u" && l("pro", c), typeof f < "u" && l("interest", f);
          return;
        }
        c !== y && l("pro", c), f !== b && l("interest", f);
      },
      { deep: !0 }
    ), (d, c) => {
      var f;
      return g(), Z(we, {
        class: ee(["skill-section", {
          "printing-image": (f = S(r)) == null ? void 0 : f.printing
        }])
      }, {
        header: U(() => {
          var v, y, b;
          return [
            m("div", jf, [
              m("div", Nf, [
                m("div", zf, [
                  w(re, {
                    class: "point-writer",
                    label: "职业点数",
                    placeholder: (v = S(e)) != null && v.job ? "问KP" : "",
                    char: 3,
                    modelValue: i.pro.str,
                    "onUpdate:modelValue": c[0] || (c[0] = (h) => u("pro", h))
                  }, null, 8, ["placeholder", "modelValue"]),
                  i.pro.point > 0 ? (g(), _("div", Lf, " 剩余: " + F(s.value.proPoint), 1)) : W("", !0)
                ]),
                m("div", Wf, [
                  w(re, {
                    class: "point-writer",
                    label: "兴趣点数",
                    char: 3,
                    modelValue: i.interest.str,
                    "onUpdate:modelValue": c[1] || (c[1] = (h) => u("interest", h))
                  }, null, 8, ["modelValue"]),
                  i.interest.point > 0 ? (g(), _("div", Gf, " 剩余: " + F(s.value.interestPoint), 1)) : W("", !0)
                ])
              ]),
              Hf,
              m("div", qf, [
                Jf,
                m("div", Kf, [
                  w(re, {
                    class: "point-writer",
                    label: "本职",
                    char: 2,
                    modelValue: `${((y = S(o)) == null ? void 0 : y.skillLimits.pro) || ""}`,
                    "onUpdate:modelValue": c[2] || (c[2] = (h) => p("pro", h))
                  }, null, 8, ["modelValue"])
                ]),
                m("div", Qf, [
                  w(re, {
                    class: "point-writer",
                    label: "其它",
                    char: 2,
                    modelValue: `${((b = S(o)) == null ? void 0 : b.skillLimits.interest) || ""}`,
                    "onUpdate:modelValue": c[3] || (c[3] = (h) => p("interest", h))
                  }, null, 8, ["modelValue"])
                ])
              ])
            ])
          ];
        }),
        default: U(() => [
          m("div", Zf, [
            w(so, {
              data: S(zn).slice(0, uo),
              suggestion: S(n)
            }, null, 8, ["data", "suggestion"]),
            Xf,
            w(so, {
              data: S(zn).slice(uo)
            }, null, 8, ["data"])
          ])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), em = /* @__PURE__ */ G(Yf, [["__scopeId", "data-v-7b675b2e"]]), tm = (t) => (De("data-v-9df369c1"), t = t(), Ie(), t), nm = ["value", "disabled"], rm = /* @__PURE__ */ tm(() => /* @__PURE__ */ m("option", {
  value: "",
  disabled: ""
}, null, -1)), om = ["value"], am = /* @__PURE__ */ V({
  __name: "BaseTdSelect",
  props: {
    value: { default: "" },
    options: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["change"],
  setup(t) {
    return (e, n) => (g(), _("select", {
      class: "base-td-select",
      value: e.value,
      disabled: e.disabled,
      onChange: n[0] || (n[0] = (r) => e.$emit("change", r.target.value))
    }, [
      rm,
      (g(!0), _(L, null, Y(e.options, (r) => (g(), _("option", {
        key: r.value,
        value: r.value
      }, F(r.label), 9, om))), 128))
    ], 40, nm));
  }
}), im = /* @__PURE__ */ G(am, [["__scopeId", "data-v-9df369c1"]]);
function lm(t = !1) {
  const e = z(t);
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
const sm = { class: "weapon-section-row" }, um = { class: "weapon-td-name" }, cm = { class: "weapon-selector" }, pm = { class: "show-in-print" }, dm = {
  key: 0,
  class: "wp-point-placeholder"
}, fm = /* @__PURE__ */ V({
  __name: "WeaponSectionRow",
  props: {
    index: {},
    weapon: {},
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["input", "focus"],
  setup(t) {
    const e = t, n = ie();
    function r(y, b) {
      const h = y % 2 ? 0 : 1, P = b % 2 ? 0 : 1;
      return `td-color-${h + P}`;
    }
    function o(y) {
      var $;
      const [b, h] = y.split(")")[0].split("("), P = (($ = s.value.find((I) => I.name === y)) == null ? void 0 : $.init) || 0;
      let k = 0;
      return n == null || n.value.skillPoints.some((I) => {
        const A = (
          // 投掷
          !h && b === I[0] || // 格斗 or 射击
          h && typeof I[0] != "string" && b === I[0][0] && h === I[0][1]
        );
        if (A) {
          const { p: x = 0, i: D = 0, g: X = 0 } = I[1];
          k = x + D + X;
        }
        return A;
      }), {
        initPoint: P,
        result: k ? `${P + k}` : ""
      };
    }
    const a = te(() => e.weapon || Nn()), i = te(() => o(a.value.skill)), s = te(() => zn.find(({ groupName: b }) => b === "战斗").groupSkills.filter(({ name: b }) => b !== "闪避").reduce((b, h) => {
      const { name: P, init: k, group: $ } = h, I = $ ? $.skills.map((A) => ({
        name: `${P}(${A.name})`,
        init: A.init || k
      })) : [{ name: P, init: k }];
      return [...b, ...I];
    }, [])), l = te(() => [
      { value: "", label: "" },
      // 添加空选项
      ...s.value.map(({ name: y }) => ({
        value: y,
        label: y
      }))
    ]), {
      value: u,
      setTrue: p,
      setFalse: d
    } = lm(), c = te(() => Bo.map(([y, b]) => ({
      key: y,
      label: b,
      children: Uo[y].map((h) => ({
        key: h,
        label: h
      }))
    })));
    function f(y) {
      if (!n) return;
      n.value.weapons[e.index] || (n.value.weapons[e.index] = Nn());
      const b = n.value.weapons[e.index];
      y.hasOwnProperty("skill") && y.skill === "" && (y = {
        ...y,
        name: "",
        dam: "",
        range: "",
        tho: 0,
        round: "",
        num: "",
        err: ""
      }), Object.assign(b, y);
    }
    function v(y) {
      const b = sr.find(($) => $.name === y);
      if (!b) return;
      const { price: h, time: P, ...k } = b;
      f({
        ...k
      }), d();
    }
    return (y, b) => (g(), _("div", sm, [
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 0)]: !0
        }])
      }, [
        Ze((g(), _("div", um, [
          w(ze, {
            value: a.value.name,
            readonly: e.readonly,
            onInput: b[0] || (b[0] = (h) => f({ name: h })),
            onFocus: b[1] || (b[1] = () => !e.readonly && S(p)())
          }, null, 8, ["value", "readonly"]),
          w(qn, { name: "slide-down" }, {
            default: U(() => [
              Ze(m("div", cm, [
                w(oa, {
                  tree: c.value,
                  onSelect: b[2] || (b[2] = (h) => v(h.label))
                }, null, 8, ["tree"])
              ], 512), [
                [ho, S(u)]
              ])
            ]),
            _: 1
          })
        ])), [
          [S(fr), S(d)]
        ])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 1)]: !0
        }])
      }, [
        m("span", pm, F(a.value.skill), 1),
        w(im, {
          class: "hide-in-print",
          value: a.value.skill,
          options: l.value,
          disabled: e.readonly,
          onChange: b[3] || (b[3] = (h) => f({ skill: h }))
        }, null, 8, ["value", "options", "disabled"])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 2)]: !0
        }])
      }, [
        ue(F(i.value.result) + " ", 1),
        !i.value.result && i.value.initPoint ? (g(), _("span", dm, F(i.value.initPoint), 1)) : W("", !0)
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 3)]: !0
        }])
      }, [
        w(ze, {
          value: a.value.dam,
          readonly: e.readonly,
          onInput: b[4] || (b[4] = (h) => f({ dam: h }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 4)]: !0
        }])
      }, [
        w(ze, {
          value: a.value.range,
          readonly: e.readonly,
          onInput: b[5] || (b[5] = (h) => f({ range: h }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 5)]: !0
        }])
      }, [
        w(mr, {
          xOnFalse: !!a.value.name,
          checked: !!a.value.tho,
          disabled: e.readonly,
          onCheck: b[6] || (b[6] = (h) => f({ tho: +h }))
        }, null, 8, ["xOnFalse", "checked", "disabled"])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 6)]: !0
        }])
      }, [
        w(ze, {
          value: a.value.round,
          readonly: e.readonly,
          onInput: b[7] || (b[7] = (h) => f({ round: h }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 7)]: !0
        }])
      }, [
        w(ze, {
          value: a.value.num,
          readonly: e.readonly,
          onInput: b[8] || (b[8] = (h) => f({ num: h }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: ee(["wp-td", {
          [r(y.index, 8)]: !0
        }])
      }, [
        w(ze, {
          value: a.value.err,
          readonly: e.readonly,
          onInput: b[9] || (b[9] = (h) => f({ err: h }))
        }, null, 8, ["value", "readonly"])
      ], 2)
    ]));
  }
}), mm = /* @__PURE__ */ G(fm, [["__scopeId", "data-v-df6a8056"]]), ym = (t) => (De("data-v-1bad65bd"), t = t(), Ie(), t), hm = { class: "weapon-section-body" }, vm = /* @__PURE__ */ ym(() => /* @__PURE__ */ m("div", { class: "weapon-section-row" }, [
  /* @__PURE__ */ m("div", { class: "wp-th th-deep" }, "武器名称"),
  /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "使用技能"),
  /* @__PURE__ */ m("div", { class: "wp-th th-deep" }, "%"),
  /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "伤害"),
  /* @__PURE__ */ m("div", { class: "wp-th th-deep" }, "射程"),
  /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "贯穿"),
  /* @__PURE__ */ m("div", { class: "wp-th th-deep" }, "次数"),
  /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "装弹量"),
  /* @__PURE__ */ m("div", { class: "wp-th th-deep" }, "故障")
], -1)), gm = /* @__PURE__ */ V({
  __name: "WeaponSection",
  setup(t) {
    const e = ie(), n = te(() => Array.from({ length: 4 }).map((r, o) => (e == null ? void 0 : e.value.weapons[o]) || void 0));
    return (r, o) => (g(), Z(we, {
      title: "武器",
      subTitle: "Weapons"
    }, {
      default: U(() => [
        m("div", hm, [
          vm,
          (g(!0), _(L, null, Y(n.value, (a, i) => (g(), Z(mm, {
            class: "weapon-section-row",
            key: i,
            index: i,
            weapon: a,
            readonly: i === 0
          }, null, 8, ["index", "weapon", "readonly"]))), 128))
        ])
      ]),
      _: 1
    }));
  }
}), bm = /* @__PURE__ */ G(gm, [["__scopeId", "data-v-1bad65bd"]]), wm = {
  key: 0,
  class: "battle-section-body"
}, _m = /* @__PURE__ */ V({
  __name: "BattleSection",
  setup(t) {
    const e = ie();
    return ge(
      () => e == null ? void 0 : e.value.attributes,
      () => {
        if (!e) return;
        const { str: n, siz: r, dex: o } = e.value.attributes, a = Number(e.value.age);
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
        if (n && r && o) {
          let i = 8;
          if (n < r && o < r ? i = 7 : n > r && o > r ? i = 9 : i = 8, a >= 40) {
            const s = Math.floor((a - 40) / 10) + 1;
            i -= s;
          }
          e.value.battleAttributes.mov = `${i}`;
        }
      },
      { deep: !0 }
    ), (n, r) => (g(), Z(we, {
      title: "战斗",
      subTitle: "Combat"
    }, {
      default: U(() => [
        S(e) ? (g(), _("div", wm, [
          w(re, {
            label: "伤害加值",
            hint: "DB",
            modelValue: S(e).battleAttributes.db,
            "onUpdate:modelValue": r[0] || (r[0] = (o) => S(e).battleAttributes.db = o),
            char: 4
          }, null, 8, ["modelValue"]),
          w(re, {
            label: "体格",
            modelValue: S(e).battleAttributes.size,
            "onUpdate:modelValue": r[1] || (r[1] = (o) => S(e).battleAttributes.size = o),
            char: 4
          }, null, 8, ["modelValue"]),
          w(re, {
            label: "移动力",
            modelValue: S(e).battleAttributes.mov,
            "onUpdate:modelValue": r[2] || (r[2] = (o) => S(e).battleAttributes.mov = o),
            char: 4
          }, null, 8, ["modelValue"])
        ])) : W("", !0)
      ]),
      _: 1
    }));
  }
}), km = /* @__PURE__ */ G(_m, [["__scopeId", "data-v-d4bc8367"]]), Sm = { class: "section-row section-row-evenly" }, Am = { class: "section-row" }, $m = /* @__PURE__ */ V({
  __name: "PaperFront",
  props: {
    setRef: {}
  },
  setup(t) {
    return (e, n) => (g(), Z(ra, { setRef: e.setRef }, {
      default: U(() => [
        m("div", Sm, [
          w(Wd),
          w(Yd),
          w(nf),
          w(of)
        ]),
        w(pf),
        w(em),
        m("div", Am, [
          w(bm, { class: "col-0" }),
          w(km)
        ])
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), co = /* @__PURE__ */ G($m, [["__scopeId", "data-v-dafdba1a"]]), la = (t) => (De("data-v-c5341c4d"), t = t(), Ie(), t), Pm = { class: "label" }, xm = ["rows", "placeholder", "value", "maxlength", "readonly"], Em = /* @__PURE__ */ la(() => /* @__PURE__ */ m("div", { class: "line-row" }, null, -1)), Dm = /* @__PURE__ */ la(() => /* @__PURE__ */ m("div", { class: "line" }, null, -1)), Im = /* @__PURE__ */ V({
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
    const n = t, r = e, o = Oe(), a = te(() => {
      const l = n.label.length, u = n.size === "small" ? l / 0.8 : l;
      return {
        textIndent: u ? `${u + 0.4}em` : void 0
      };
    }), i = z(null);
    function s(l = !1) {
      const u = i.value;
      u && pt(() => {
        u.scrollHeight > u.clientHeight && (r("oversize"), l || s(!0));
      });
    }
    return ge(
      () => [n.modelValue, o == null ? void 0 : o.printing],
      () => s()
    ), ma(() => {
      s();
    }), (l, u) => {
      var p, d;
      return g(), _("div", {
        class: ee(["writable-area", {
          "printing-image": (p = S(o)) == null ? void 0 : p.printing
        }])
      }, [
        m("div", Pm, F(l.label), 1),
        m("textarea", {
          class: ee(["input", {
            "input-size-small": n.size === "small"
          }]),
          ref_key: "inputEl",
          ref: i,
          style: On(a.value),
          rows: l.rows,
          placeholder: (d = S(o)) != null && d.printing ? "" : l.placeholder,
          value: l.modelValue,
          maxlength: l.maxlength,
          readonly: l.readonly,
          onInput: u[0] || (u[0] = (c) => l.$emit("update:modelValue", c.target.value))
        }, null, 46, xm),
        m("div", {
          class: ee(["lines", {
            "lines-size-small": n.size === "small"
          }])
        }, [
          Em,
          (g(!0), _(L, null, Y(l.rows, (c) => (g(), _("div", {
            class: "line-row",
            key: c
          }, [
            c === 1 && l.label ? (g(), _("div", {
              key: 0,
              class: "line-row-label",
              style: On({
                width: `${l.label.length}em`
              })
            }, null, 4)) : W("", !0),
            Dm
          ]))), 128))
        ], 2)
      ], 2);
    };
  }
}), Ae = /* @__PURE__ */ G(Im, [["__scopeId", "data-v-c5341c4d"]]), Rm = { class: "story-section-body" }, Fm = { class: "story-section-column col-2" }, Om = { class: "story-section-column col-3" }, Rn = 3, Fn = 4, Cm = /* @__PURE__ */ V({
  __name: "StorySection",
  setup(t) {
    const e = ie(), n = Oe(), r = Ee([
      { label: "形象描述", fieldName: "app" },
      { label: "思想与信念", fieldName: "belief" },
      { label: "重要之人", fieldName: "IPerson" },
      { label: "意义非凡之地", fieldName: "IPlace" },
      { label: "宝贵之物", fieldName: "IItem" },
      { label: "特质", fieldName: "trait" },
      { label: "伤口与疤痕", fieldName: "scar" },
      { label: "精神症状", fieldName: "mad" }
    ]), o = Ee([]), a = Ee({ fieldName: "desc", size: "base" }), i = te(() => {
      const u = r.length - o.length, p = u * ~~(a.size === "base" ? Rn : Fn), d = a.size === "base" ? 0 : ~~(u / 6);
      return p + d;
    }), s = z();
    function l(u) {
      var p;
      (p = s.value) == null || p.close(), n != null && n.printing || (u.size === "small" ? s.value = se.error("文字内容超出可显示的尺寸，如需打印，建议删减内容") : s.value = se.warning("检测到内容较多，已为您调整文字为小尺寸")), u.size = "small";
    }
    return ge(
      () => e == null ? void 0 : e.value.stories,
      () => {
        [...r, ...o, a].forEach((u) => {
          u.fieldName && !(e != null && e.value.stories[u.fieldName]) && (u.size = "base");
        });
      },
      {
        deep: !0
      }
    ), (u, p) => S(e) ? (g(), Z(we, {
      key: 0,
      title: "背景故事",
      subTitle: "Story"
    }, {
      default: U(() => [
        m("div", Rm, [
          m("div", Fm, [
            (g(!0), _(L, null, Y(r, (d) => (g(), Z(Ae, {
              key: d.fieldName,
              label: d.label,
              modelValue: S(e).stories[d.fieldName],
              "onUpdate:modelValue": (c) => S(e).stories[d.fieldName] = c,
              rows: d.size === "small" ? Fn : Rn,
              size: d.size,
              onOversize: () => l(d)
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rows", "size", "onOversize"]))), 128))
          ]),
          m("div", Om, [
            (g(!0), _(L, null, Y(o, (d) => (g(), Z(Ae, {
              key: d.fieldName,
              label: d.label,
              modelValue: S(e).stories[d.fieldName],
              "onUpdate:modelValue": (c) => S(e).stories[d.fieldName] = c,
              rows: d.size === "small" ? Fn : Rn,
              size: d.size
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rows", "size"]))), 128)),
            w(Ae, {
              label: "个人介绍",
              modelValue: S(e).stories.desc,
              "onUpdate:modelValue": p[0] || (p[0] = (d) => S(e).stories.desc = d),
              rows: i.value,
              size: a.size,
              onOversize: p[1] || (p[1] = () => l(a))
            }, null, 8, ["modelValue", "rows", "size"])
          ])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), Tm = /* @__PURE__ */ G(Cm, [["__scopeId", "data-v-8aa0af46"]]), Vm = { class: "section-body" }, Mm = /* @__PURE__ */ V({
  __name: "AssetsSection",
  setup(t) {
    const e = ie();
    return (n, r) => S(e) ? (g(), Z(we, {
      key: 0,
      title: "资产",
      subTitle: "Cash & Assets"
    }, {
      default: U(() => [
        m("div", Vm, [
          w(Ae, {
            label: "货币",
            rows: 1,
            maxlength: 15,
            modelValue: S(e).assets.currency,
            "onUpdate:modelValue": r[0] || (r[0] = (o) => S(e).assets.currency = o)
          }, null, 8, ["modelValue"]),
          w(Ae, {
            label: "资产",
            rows: 11,
            maxlength: 17 * 11 - 2,
            modelValue: S(e).assets.assets,
            "onUpdate:modelValue": r[1] || (r[1] = (o) => S(e).assets.assets = o)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), Um = /* @__PURE__ */ G(Mm, [["__scopeId", "data-v-0f39439f"]]), Bm = { class: "section-body" }, jm = /* @__PURE__ */ V({
  __name: "ItemSection",
  setup(t) {
    const e = ie();
    return (n, r) => S(e) ? (g(), Z(we, {
      key: 0,
      title: "物品与装备",
      subTitle: "Possessions"
    }, {
      default: U(() => [
        m("div", Bm, [
          w(Ae, {
            label: "",
            rows: 12,
            maxlength: 18 * 12,
            modelValue: S(e).assets.items,
            "onUpdate:modelValue": r[0] || (r[0] = (o) => S(e).assets.items = o)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), Nm = /* @__PURE__ */ G(jm, [["__scopeId", "data-v-98403096"]]), zm = { class: "section-body" }, Lm = /* @__PURE__ */ V({
  __name: "MythosSection",
  setup(t) {
    const e = ie();
    return (n, r) => S(e) ? (g(), Z(we, {
      key: 0,
      title: "克苏鲁神话",
      subTitle: "Cthulu Mythos"
    }, {
      default: U(() => [
        m("div", zm, [
          w(Ae, {
            label: "魔法物品与典籍",
            rows: 4,
            maxlength: 18 * 4 - 8,
            modelValue: S(e).assets.magicItems,
            "onUpdate:modelValue": r[0] || (r[0] = (o) => S(e).assets.magicItems = o)
          }, null, 8, ["modelValue"]),
          w(Ae, {
            label: "法术",
            rows: 4,
            maxlength: 18 * 4 - 3,
            modelValue: S(e).assets.magics,
            "onUpdate:modelValue": r[1] || (r[1] = (o) => S(e).assets.magics = o)
          }, null, 8, ["modelValue"]),
          w(Ae, {
            label: "第三类接触",
            rows: 4,
            maxlength: 18 * 4 - 6,
            modelValue: S(e).assets.touches,
            "onUpdate:modelValue": r[2] || (r[2] = (o) => S(e).assets.touches = o)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), Wm = /* @__PURE__ */ G(Lm, [["__scopeId", "data-v-039311e6"]]), Gm = { class: "section-body" }, Hm = /* @__PURE__ */ V({
  __name: "FriendSection",
  setup(t) {
    const e = ie();
    return (n, r) => S(e) ? (g(), Z(we, {
      key: 0,
      title: "人物关系",
      subTitle: "Relationships"
    }, {
      default: U(() => [
        m("div", Gm, [
          w(Ae, {
            label: "",
            rows: 11,
            modelValue: S(e).friends,
            "onUpdate:modelValue": r[0] || (r[0] = (o) => S(e).friends = o)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), qm = /* @__PURE__ */ G(Hm, [["__scopeId", "data-v-5104331e"]]), Jm = { class: "section-body" }, Km = /* @__PURE__ */ V({
  __name: "ExperienceSection",
  setup(t) {
    const e = ie();
    return (n, r) => S(e) ? (g(), Z(we, {
      key: 0,
      title: "经历过的模组",
      subTitle: "Experienced Scenarios"
    }, {
      default: U(() => [
        m("div", Jm, [
          w(Ae, {
            label: "",
            rows: 11,
            modelValue: S(e).experiencedModules,
            "onUpdate:modelValue": r[0] || (r[0] = (o) => S(e).experiencedModules = o)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : W("", !0);
  }
}), Qm = /* @__PURE__ */ G(Km, [["__scopeId", "data-v-0ebb0cdc"]]), Zm = { class: "section-row" }, Xm = { class: "section-row col-2" }, Ym = { class: "section-row" }, ey = /* @__PURE__ */ V({
  __name: "PaperBack",
  props: {
    setRef: {}
  },
  setup(t) {
    return (e, n) => (g(), Z(ra, { setRef: e.setRef }, {
      default: U(() => [
        w(Tm),
        m("div", Zm, [
          m("div", Xm, [
            w(Nm, { class: "col-0" }),
            w(Um, { class: "col-0" })
          ]),
          w(Wm, { class: "col-1" })
        ]),
        m("div", Ym, [
          w(qm, { class: "col-2" }),
          w(Qm, { class: "col-1" })
        ])
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), po = /* @__PURE__ */ G(ey, [["__scopeId", "data-v-6e6d2d4a"]]), ty = V({
  name: "FileList",
  props: {
    processText: {
      type: Function,
      required: !0
    }
  },
  setup(t) {
    const e = z([]), n = z(null), r = () => {
      var i;
      (i = n.value) == null || i.click(), console.log("fileInput.value", n.value);
    }, o = (i) => {
      const s = i.target;
      if (s && s.files) {
        const l = Array.from(s.files);
        e.value = l.filter((u) => u.name.endsWith(".txt"));
      }
    }, a = (i) => {
      const s = new FileReader();
      s.onload = (l) => {
        var p;
        const u = (p = l.target) == null ? void 0 : p.result;
        console.log("文件内容读取完成，正在处理..."), t.processText(u);
      }, s.readAsText(i);
    };
    return fo(() => {
      r();
    }), {
      txtFiles: e,
      handleFileSelect: o,
      readFile: a,
      triggerFileSelect: r
    };
  }
}), ny = { class: "file-selector-container" }, ry = ["onClick"];
function oy(t, e, n, r, o, a) {
  return g(), _("div", ny, [
    m("input", {
      type: "file",
      webkitdirectory: "",
      directory: "",
      multiple: "",
      onChange: e[0] || (e[0] = (...i) => t.handleFileSelect && t.handleFileSelect(...i))
    }, null, 32),
    m("ul", null, [
      (g(!0), _(L, null, Y(t.txtFiles, (i) => (g(), _("li", {
        key: i.name,
        onClick: (s) => t.readFile(i)
      }, [
        m("div", null, F(i.name.split(".")[0]), 1)
      ], 8, ry))), 128))
    ])
  ]);
}
const ay = /* @__PURE__ */ G(ty, [["render", oy], ["__scopeId", "data-v-0dd05264"]]), iy = { class: "page theme-dark" }, ly = { class: "papers-animation-container papers-editing web-only" }, sy = { class: "sticky-footer web-only" }, uy = /* @__PURE__ */ V({
  __name: "AppView",
  setup(t) {
    const e = Ss.parse(location.search.slice(1)), n = z(Wt()), r = qo(), o = Ee(Is(e)), a = Ee({
      paperInFront: e.turn !== "back",
      printing: e.debug === "true",
      importing: !1,
      showTotalSeparation: e.sep === "true" || r.getItem("showTotalSeparation") || !1
    }), i = z(lo);
    ge(
      () => a.showTotalSeparation,
      (f) => {
        r.setItem("showTotalSeparation", f);
      }
    ), Fs(n);
    const s = Bs(n, {
      viewData: o,
      pageData: a
    });
    Ct("pc", n), Ct("viewData", o), Ct("pageData", a), Ct("suggestion", s);
    const l = Ee({}), u = (f) => {
      f.preventDefault();
    }, p = (f) => {
      if (f.preventDefault(), !f.dataTransfer) {
        console.error("数据传输对象为空");
        return;
      }
      const v = f.dataTransfer.files;
      if (v.length > 0) {
        const y = v[0];
        if (y.type === "text/plain") {
          const b = new FileReader();
          b.onload = (h) => {
            const P = h.target.result;
            d(P);
          }, b.readAsText(y);
        } else
          console.error("不支持的文件类型");
      }
    }, d = (f) => {
      se.success("导入卡数据中"), i.value && (i.value.inData = f, i.value.applyInData(), i.value.inData = "");
    }, c = window.innerWidth > window.innerHeight;
    return (f, v) => (g(), _(L, null, [
      m("div", null, [
        c ? (g(), Z(ay, {
          key: 0,
          processText: d
        })) : W("", !0)
      ]),
      m("main", iy, [
        m("div", {
          class: "paper-container theme-light",
          onDrop: p,
          onDragover: ya(u, ["prevent"])
        }, [
          m("div", ly, [
            w(qn, { name: "swipe-paper" }, {
              default: U(() => [
                (g(), Z(ha, null, [
                  a.paperInFront ? (g(), Z(co, { key: 0 })) : (g(), Z(po, { key: 1 }))
                ], 1024))
              ]),
              _: 1
            })
          ]),
          m("div", {
            class: ee(["papers-animation-container papers-printing", {
              "papers-printing-active": a.printing
            }])
          }, [
            w(co, {
              setRef: (y) => {
                l.front = y;
              }
            }, null, 8, ["setRef"]),
            w(po, {
              setRef: (y) => {
                l.back = y;
              }
            }, null, 8, ["setRef"])
          ], 2)
        ], 32),
        m("div", sy, [
          w(lo, {
            ref_key: "controlSectionRef",
            ref: i,
            paperEls: l,
            onSwitchPaper: v[0] || (v[0] = () => a.paperInFront = !a.paperInFront)
          }, null, 8, ["paperEls"])
        ])
      ])
    ], 64));
  }
}), dy = /* @__PURE__ */ G(uy, [["__scopeId", "data-v-fd2e3751"]]);
export {
  dy as default
};
