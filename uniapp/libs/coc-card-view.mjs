import { watch as be, computed as G, unref as A, onMounted as ir, nextTick as Ue, ref as Z, readonly as wo, getCurrentInstance as bo, getCurrentScope as _o, onScopeDispose as So, shallowRef as ko, defineComponent as F, openBlock as _, createElementBlock as x, createElementVNode as m, createBlock as H, resolveDynamicComponent as Pa, normalizeClass as L, withCtx as O, renderSlot as mt, resolveComponent as ve, createVNode as k, createTextVNode as De, toDisplayString as M, createCommentVNode as B, inject as Ye, Fragment as re, renderList as se, withDirectives as Be, pushScopeId as Re, popScopeId as Oe, reactive as Ce, withKeys as Cr, withModifiers as It, vModelText as Ia, onUnmounted as Ao, normalizeStyle as Ln, Transition as lr, vShow as xa, onActivated as $o, provide as At, KeepAlive as Po } from "vue";
import { ClickOutside as Io, ElMessage as de, ElMessageBox as Ea } from "element-plus";
var xo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Eo(t) {
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
var ur = Error, cr = EvalError, pr = RangeError, dr = ReferenceError, mn = SyntaxError, et = TypeError, fr = URIError, Do = function() {
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
    var l = Object.getOwnPropertyDescriptor(e, n);
    if (l.value !== a || l.enumerable !== !0)
      return !1;
  }
  return !0;
}, Rr = typeof Symbol < "u" && Symbol, Co = Do, yn = function() {
  return typeof Rr != "function" || typeof Symbol != "function" || typeof Rr("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Co();
}, Or = {
  foo: {}
}, Ro = Object, hn = function() {
  return { __proto__: Or }.foo === Or.foo && !({ __proto__: null } instanceof Ro);
}, Oo = "Function.prototype.bind called on incompatible ", Fo = Object.prototype.toString, Mo = Math.max, Vo = "[object Function]", Fr = function(e, n) {
  for (var r = [], a = 0; a < e.length; a += 1)
    r[a] = e[a];
  for (var o = 0; o < n.length; o += 1)
    r[o + e.length] = n[o];
  return r;
}, To = function(e, n) {
  for (var r = [], a = n, o = 0; a < e.length; a += 1, o += 1)
    r[o] = e[a];
  return r;
}, Uo = function(t, e) {
  for (var n = "", r = 0; r < t.length; r += 1)
    n += t[r], r + 1 < t.length && (n += e);
  return n;
}, Bo = function(e) {
  var n = this;
  if (typeof n != "function" || Fo.apply(n) !== Vo)
    throw new TypeError(Oo + n);
  for (var r = To(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var p = n.apply(
        this,
        Fr(r, arguments)
      );
      return Object(p) === p ? p : this;
    }
    return n.apply(
      e,
      Fr(r, arguments)
    );
  }, l = Mo(0, n.length - r.length), s = [], i = 0; i < l; i++)
    s[i] = "$" + i;
  if (a = Function("binder", "return function (" + Uo(s, ",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, No = Bo, Ft = Function.prototype.bind || No, jo = Function.prototype.call, zo = Object.prototype.hasOwnProperty, Lo = Ft, mr = Lo.call(jo, zo), N, Wo = ur, Go = cr, Ho = pr, qo = dr, yt = mn, ct = et, Jo = fr, Da = Function, bn = function(t) {
  try {
    return Da('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, qe = Object.getOwnPropertyDescriptor;
if (qe)
  try {
    qe({}, "");
  } catch {
    qe = null;
  }
var _n = function() {
  throw new ct();
}, Ko = qe ? function() {
  try {
    return arguments.callee, _n;
  } catch {
    try {
      return qe(arguments, "callee").get;
    } catch {
      return _n;
    }
  }
}() : _n, nt = yn(), Qo = hn(), fe = Object.getPrototypeOf || (Qo ? function(t) {
  return t.__proto__;
} : null), lt = {}, Xo = typeof Uint8Array > "u" || !fe ? N : fe(Uint8Array), Je = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? N : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? N : ArrayBuffer,
  "%ArrayIteratorPrototype%": nt && fe ? fe([][Symbol.iterator]()) : N,
  "%AsyncFromSyncIteratorPrototype%": N,
  "%AsyncFunction%": lt,
  "%AsyncGenerator%": lt,
  "%AsyncGeneratorFunction%": lt,
  "%AsyncIteratorPrototype%": lt,
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
  "%Error%": Wo,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Go,
  "%Float32Array%": typeof Float32Array > "u" ? N : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? N : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? N : FinalizationRegistry,
  "%Function%": Da,
  "%GeneratorFunction%": lt,
  "%Int8Array%": typeof Int8Array > "u" ? N : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? N : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? N : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": nt && fe ? fe(fe([][Symbol.iterator]())) : N,
  "%JSON%": typeof JSON == "object" ? JSON : N,
  "%Map%": typeof Map > "u" ? N : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !nt || !fe ? N : fe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? N : Promise,
  "%Proxy%": typeof Proxy > "u" ? N : Proxy,
  "%RangeError%": Ho,
  "%ReferenceError%": qo,
  "%Reflect%": typeof Reflect > "u" ? N : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? N : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !nt || !fe ? N : fe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? N : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": nt && fe ? fe(""[Symbol.iterator]()) : N,
  "%Symbol%": nt ? Symbol : N,
  "%SyntaxError%": yt,
  "%ThrowTypeError%": Ko,
  "%TypedArray%": Xo,
  "%TypeError%": ct,
  "%Uint8Array%": typeof Uint8Array > "u" ? N : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? N : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? N : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? N : Uint32Array,
  "%URIError%": Jo,
  "%WeakMap%": typeof WeakMap > "u" ? N : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? N : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? N : WeakSet
};
if (fe)
  try {
    null.error;
  } catch (t) {
    var Zo = fe(fe(t));
    Je["%Error.prototype%"] = Zo;
  }
var Yo = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = bn("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = bn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = bn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = t("%AsyncGenerator%");
    a && fe && (n = fe(a.prototype));
  }
  return Je[e] = n, n;
}, Mr = {
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
}, Mt = Ft, nn = mr, ei = Mt.call(Function.call, Array.prototype.concat), ti = Mt.call(Function.apply, Array.prototype.splice), Vr = Mt.call(Function.call, String.prototype.replace), rn = Mt.call(Function.call, String.prototype.slice), ni = Mt.call(Function.call, RegExp.prototype.exec), ri = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ai = /\\(\\)?/g, oi = function(e) {
  var n = rn(e, 0, 1), r = rn(e, -1);
  if (n === "%" && r !== "%")
    throw new yt("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new yt("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Vr(e, ri, function(o, l, s, i) {
    a[a.length] = s ? Vr(i, ai, "$1") : l || o;
  }), a;
}, ii = function(e, n) {
  var r = e, a;
  if (nn(Mr, r) && (a = Mr[r], r = "%" + a[0] + "%"), nn(Je, r)) {
    var o = Je[r];
    if (o === lt && (o = Yo(r)), typeof o > "u" && !n)
      throw new ct("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new yt("intrinsic " + e + " does not exist!");
}, yr = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new ct("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new ct('"allowMissing" argument must be a boolean');
  if (ni(/^%?[^%]*%?$/, e) === null)
    throw new yt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = oi(e), a = r.length > 0 ? r[0] : "", o = ii("%" + a + "%", n), l = o.name, s = o.value, i = !1, u = o.alias;
  u && (a = u[0], ti(r, ei([0, 1], u)));
  for (var p = 1, d = !0; p < r.length; p += 1) {
    var c = r[p], f = rn(c, 0, 1), h = rn(c, -1);
    if ((f === '"' || f === "'" || f === "`" || h === '"' || h === "'" || h === "`") && f !== h)
      throw new yt("property names with quotes must have matching quotes");
    if ((c === "constructor" || !d) && (i = !0), a += "." + c, l = "%" + a + "%", nn(Je, l))
      s = Je[l];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new ct("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (qe && p + 1 >= r.length) {
        var y = qe(s, c);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        d = nn(s, c), s = s[c];
      d && !i && (Je[l] = s);
    }
  }
  return s;
}, Ca = { exports: {} }, j, li = ur, si = cr, ui = pr, ci = dr, ht = mn, pt = et, pi = fr, Ra = Function, Sn = function(t) {
  try {
    return Ra('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Ke = Object.getOwnPropertyDescriptor;
if (Ke)
  try {
    Ke({}, "");
  } catch {
    Ke = null;
  }
var kn = function() {
  throw new pt();
}, di = Ke ? function() {
  try {
    return arguments.callee, kn;
  } catch {
    try {
      return Ke(arguments, "callee").get;
    } catch {
      return kn;
    }
  }
}() : kn, rt = yn(), fi = hn(), me = Object.getPrototypeOf || (fi ? function(t) {
  return t.__proto__;
} : null), st = {}, mi = typeof Uint8Array > "u" || !me ? j : me(Uint8Array), Qe = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? j : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? j : ArrayBuffer,
  "%ArrayIteratorPrototype%": rt && me ? me([][Symbol.iterator]()) : j,
  "%AsyncFromSyncIteratorPrototype%": j,
  "%AsyncFunction%": st,
  "%AsyncGenerator%": st,
  "%AsyncGeneratorFunction%": st,
  "%AsyncIteratorPrototype%": st,
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
  "%Error%": li,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": si,
  "%Float32Array%": typeof Float32Array > "u" ? j : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? j : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? j : FinalizationRegistry,
  "%Function%": Ra,
  "%GeneratorFunction%": st,
  "%Int8Array%": typeof Int8Array > "u" ? j : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? j : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? j : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": rt && me ? me(me([][Symbol.iterator]())) : j,
  "%JSON%": typeof JSON == "object" ? JSON : j,
  "%Map%": typeof Map > "u" ? j : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !rt || !me ? j : me((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? j : Promise,
  "%Proxy%": typeof Proxy > "u" ? j : Proxy,
  "%RangeError%": ui,
  "%ReferenceError%": ci,
  "%Reflect%": typeof Reflect > "u" ? j : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? j : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !rt || !me ? j : me((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? j : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": rt && me ? me(""[Symbol.iterator]()) : j,
  "%Symbol%": rt ? Symbol : j,
  "%SyntaxError%": ht,
  "%ThrowTypeError%": di,
  "%TypedArray%": mi,
  "%TypeError%": pt,
  "%Uint8Array%": typeof Uint8Array > "u" ? j : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? j : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? j : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? j : Uint32Array,
  "%URIError%": pi,
  "%WeakMap%": typeof WeakMap > "u" ? j : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? j : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? j : WeakSet
};
if (me)
  try {
    null.error;
  } catch (t) {
    var yi = me(me(t));
    Qe["%Error.prototype%"] = yi;
  }
var hi = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = Sn("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = Sn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = Sn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = t("%AsyncGenerator%");
    a && me && (n = me(a.prototype));
  }
  return Qe[e] = n, n;
}, Tr = {
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
}, Vt = Ft, an = mr, vi = Vt.call(Function.call, Array.prototype.concat), gi = Vt.call(Function.apply, Array.prototype.splice), Ur = Vt.call(Function.call, String.prototype.replace), on = Vt.call(Function.call, String.prototype.slice), wi = Vt.call(Function.call, RegExp.prototype.exec), bi = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, _i = /\\(\\)?/g, Si = function(e) {
  var n = on(e, 0, 1), r = on(e, -1);
  if (n === "%" && r !== "%")
    throw new ht("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new ht("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Ur(e, bi, function(o, l, s, i) {
    a[a.length] = s ? Ur(i, _i, "$1") : l || o;
  }), a;
}, ki = function(e, n) {
  var r = e, a;
  if (an(Tr, r) && (a = Tr[r], r = "%" + a[0] + "%"), an(Qe, r)) {
    var o = Qe[r];
    if (o === st && (o = hi(r)), typeof o > "u" && !n)
      throw new pt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new ht("intrinsic " + e + " does not exist!");
}, Ai = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new pt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new pt('"allowMissing" argument must be a boolean');
  if (wi(/^%?[^%]*%?$/, e) === null)
    throw new ht("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = Si(e), a = r.length > 0 ? r[0] : "", o = ki("%" + a + "%", n), l = o.name, s = o.value, i = !1, u = o.alias;
  u && (a = u[0], gi(r, vi([0, 1], u)));
  for (var p = 1, d = !0; p < r.length; p += 1) {
    var c = r[p], f = on(c, 0, 1), h = on(c, -1);
    if ((f === '"' || f === "'" || f === "`" || h === '"' || h === "'" || h === "`") && f !== h)
      throw new ht("property names with quotes must have matching quotes");
    if ((c === "constructor" || !d) && (i = !0), a += "." + c, l = "%" + a + "%", an(Qe, l))
      s = Qe[l];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new pt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Ke && p + 1 >= r.length) {
        var y = Ke(s, c);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        d = an(s, c), s = s[c];
      d && !i && (Qe[l] = s);
    }
  }
  return s;
}, An, Br;
function $i() {
  if (Br) return An;
  Br = 1;
  var t, e = ur, n = cr, r = pr, a = dr, o = mn, l = et, s = fr, i = Function, u = function(X) {
    try {
      return i('"use strict"; return (' + X + ").constructor;")();
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
    throw new l();
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
  }() : d, f = yn(), h = hn(), y = Object.getPrototypeOf || (h ? function(X) {
    return X.__proto__;
  } : null), w = {}, S = typeof Uint8Array > "u" || !y ? t : y(Uint8Array), E = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
    "%ArrayIteratorPrototype%": f && y ? y([][Symbol.iterator]()) : t,
    "%AsyncFromSyncIteratorPrototype%": t,
    "%AsyncFunction%": w,
    "%AsyncGenerator%": w,
    "%AsyncGeneratorFunction%": w,
    "%AsyncIteratorPrototype%": w,
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
    "%GeneratorFunction%": w,
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
    "%TypedArray%": S,
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
  if (y)
    try {
      null.error;
    } catch (X) {
      var b = y(y(X));
      E["%Error.prototype%"] = b;
    }
  var v = function X(W) {
    var K;
    if (W === "%AsyncFunction%")
      K = u("async function () {}");
    else if (W === "%GeneratorFunction%")
      K = u("function* () {}");
    else if (W === "%AsyncGeneratorFunction%")
      K = u("async function* () {}");
    else if (W === "%AsyncGenerator%") {
      var R = X("%AsyncGeneratorFunction%");
      R && (K = R.prototype);
    } else if (W === "%AsyncIteratorPrototype%") {
      var D = X("%AsyncGenerator%");
      D && y && (K = y(D.prototype));
    }
    return E[W] = K, K;
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
  }, g = Ft, P = mr, I = g.call(Function.call, Array.prototype.concat), T = g.call(Function.apply, Array.prototype.splice), C = g.call(Function.call, String.prototype.replace), V = g.call(Function.call, String.prototype.slice), q = g.call(Function.call, RegExp.prototype.exec), Q = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Y = /\\(\\)?/g, J = function(W) {
    var K = V(W, 0, 1), R = V(W, -1);
    if (K === "%" && R !== "%")
      throw new o("invalid intrinsic syntax, expected closing `%`");
    if (R === "%" && K !== "%")
      throw new o("invalid intrinsic syntax, expected opening `%`");
    var D = [];
    return C(W, Q, function(ne, ae, ee, ce) {
      D[D.length] = ee ? C(ce, Y, "$1") : ae || ne;
    }), D;
  }, ie = function(W, K) {
    var R = W, D;
    if (P($, R) && (D = $[R], R = "%" + D[0] + "%"), P(E, R)) {
      var ne = E[R];
      if (ne === w && (ne = v(R)), typeof ne > "u" && !K)
        throw new l("intrinsic " + W + " exists, but is not available. Please file an issue!");
      return {
        alias: D,
        name: R,
        value: ne
      };
    }
    throw new o("intrinsic " + W + " does not exist!");
  };
  return An = function(W, K) {
    if (typeof W != "string" || W.length === 0)
      throw new l("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof K != "boolean")
      throw new l('"allowMissing" argument must be a boolean');
    if (q(/^%?[^%]*%?$/, W) === null)
      throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var R = J(W), D = R.length > 0 ? R[0] : "", ne = ie("%" + D + "%", K), ae = ne.name, ee = ne.value, ce = !1, Fe = ne.alias;
    Fe && (D = Fe[0], T(R, I([0, 1], Fe)));
    for (var te = 1, Pe = !0; te < R.length; te += 1) {
      var ke = R[te], ze = V(ke, 0, 1), tt = V(ke, -1);
      if ((ze === '"' || ze === "'" || ze === "`" || tt === '"' || tt === "'" || tt === "`") && ze !== tt)
        throw new o("property names with quotes must have matching quotes");
      if ((ke === "constructor" || !Pe) && (ce = !0), D += "." + ke, ae = "%" + D + "%", P(E, ae))
        ee = E[ae];
      else if (ee != null) {
        if (!(ke in ee)) {
          if (!K)
            throw new l("base intrinsic for " + W + " exists, but the property is not available.");
          return;
        }
        if (p && te + 1 >= R.length) {
          var Bt = p(ee, ke);
          Pe = !!Bt, Pe && "get" in Bt && !("originalValue" in Bt.get) ? ee = Bt.get : ee = ee[ke];
        } else
          Pe = P(ee, ke), ee = ee[ke];
        Pe && !ce && (E[ae] = ee);
      }
    }
    return ee;
  }, An;
}
var $n, Nr;
function hr() {
  if (Nr) return $n;
  Nr = 1;
  var t = $i(), e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return $n = e, $n;
}
var Pi = "Function.prototype.bind called on incompatible ", Pn = Array.prototype.slice, Ii = Object.prototype.toString, xi = "[object Function]", Ei = function(e) {
  var n = this;
  if (typeof n != "function" || Ii.call(n) !== xi)
    throw new TypeError(Pi + n);
  for (var r = Pn.call(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var p = n.apply(
        this,
        r.concat(Pn.call(arguments))
      );
      return Object(p) === p ? p : this;
    } else
      return n.apply(
        e,
        r.concat(Pn.call(arguments))
      );
  }, l = Math.max(0, n.length - r.length), s = [], i = 0; i < l; i++)
    s.push("$" + i);
  if (a = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, Di = Ei, Ci = Function.prototype.bind || Di, Ri = "Function.prototype.bind called on incompatible ", In = Array.prototype.slice, Oi = Object.prototype.toString, Fi = "[object Function]", Mi = function(e) {
  var n = this;
  if (typeof n != "function" || Oi.call(n) !== Fi)
    throw new TypeError(Ri + n);
  for (var r = In.call(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var p = n.apply(
        this,
        r.concat(In.call(arguments))
      );
      return Object(p) === p ? p : this;
    } else
      return n.apply(
        e,
        r.concat(In.call(arguments))
      );
  }, l = Math.max(0, n.length - r.length), s = [], i = 0; i < l; i++)
    s.push("$" + i);
  if (a = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
    var u = function() {
    };
    u.prototype = n.prototype, a.prototype = new u(), u.prototype = null;
  }
  return a;
}, Vi = Mi, Ti = Function.prototype.bind || Vi, Ui = Ti, Bi = Ui.call(Function.call, Object.prototype.hasOwnProperty), z, vt = SyntaxError, Oa = Function, dt = TypeError, xn = function(t) {
  try {
    return Oa('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Xe = Object.getOwnPropertyDescriptor;
if (Xe)
  try {
    Xe({}, "");
  } catch {
    Xe = null;
  }
var En = function() {
  throw new dt();
}, Ni = Xe ? function() {
  try {
    return arguments.callee, En;
  } catch {
    try {
      return Xe(arguments, "callee").get;
    } catch {
      return En;
    }
  }
}() : En, at = yn(), ji = hn(), ye = Object.getPrototypeOf || (ji ? function(t) {
  return t.__proto__;
} : null), ut = {}, zi = typeof Uint8Array > "u" || !ye ? z : ye(Uint8Array), Ze = {
  "%AggregateError%": typeof AggregateError > "u" ? z : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? z : ArrayBuffer,
  "%ArrayIteratorPrototype%": at && ye ? ye([][Symbol.iterator]()) : z,
  "%AsyncFromSyncIteratorPrototype%": z,
  "%AsyncFunction%": ut,
  "%AsyncGenerator%": ut,
  "%AsyncGeneratorFunction%": ut,
  "%AsyncIteratorPrototype%": ut,
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
  "%Function%": Oa,
  "%GeneratorFunction%": ut,
  "%Int8Array%": typeof Int8Array > "u" ? z : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? z : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? z : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": at && ye ? ye(ye([][Symbol.iterator]())) : z,
  "%JSON%": typeof JSON == "object" ? JSON : z,
  "%Map%": typeof Map > "u" ? z : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !at || !ye ? z : ye((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
  "%SetIteratorPrototype%": typeof Set > "u" || !at || !ye ? z : ye((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? z : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": at && ye ? ye(""[Symbol.iterator]()) : z,
  "%Symbol%": at ? Symbol : z,
  "%SyntaxError%": vt,
  "%ThrowTypeError%": Ni,
  "%TypedArray%": zi,
  "%TypeError%": dt,
  "%Uint8Array%": typeof Uint8Array > "u" ? z : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? z : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? z : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? z : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? z : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? z : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? z : WeakSet
};
if (ye)
  try {
    null.error;
  } catch (t) {
    var Li = ye(ye(t));
    Ze["%Error.prototype%"] = Li;
  }
var Wi = function t(e) {
  var n;
  if (e === "%AsyncFunction%")
    n = xn("async function () {}");
  else if (e === "%GeneratorFunction%")
    n = xn("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    n = xn("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var r = t("%AsyncGeneratorFunction%");
    r && (n = r.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = t("%AsyncGenerator%");
    a && ye && (n = ye(a.prototype));
  }
  return Ze[e] = n, n;
}, jr = {
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
}, Tt = Ci, ln = Bi, Gi = Tt.call(Function.call, Array.prototype.concat), Hi = Tt.call(Function.apply, Array.prototype.splice), zr = Tt.call(Function.call, String.prototype.replace), sn = Tt.call(Function.call, String.prototype.slice), qi = Tt.call(Function.call, RegExp.prototype.exec), Ji = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ki = /\\(\\)?/g, Qi = function(e) {
  var n = sn(e, 0, 1), r = sn(e, -1);
  if (n === "%" && r !== "%")
    throw new vt("invalid intrinsic syntax, expected closing `%`");
  if (r === "%" && n !== "%")
    throw new vt("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return zr(e, Ji, function(o, l, s, i) {
    a[a.length] = s ? zr(i, Ki, "$1") : l || o;
  }), a;
}, Xi = function(e, n) {
  var r = e, a;
  if (ln(jr, r) && (a = jr[r], r = "%" + a[0] + "%"), ln(Ze, r)) {
    var o = Ze[r];
    if (o === ut && (o = Wi(r)), typeof o > "u" && !n)
      throw new dt("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: r,
      value: o
    };
  }
  throw new vt("intrinsic " + e + " does not exist!");
}, Zi = function(e, n) {
  if (typeof e != "string" || e.length === 0)
    throw new dt("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new dt('"allowMissing" argument must be a boolean');
  if (qi(/^%?[^%]*%?$/, e) === null)
    throw new vt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var r = Qi(e), a = r.length > 0 ? r[0] : "", o = Xi("%" + a + "%", n), l = o.name, s = o.value, i = !1, u = o.alias;
  u && (a = u[0], Hi(r, Gi([0, 1], u)));
  for (var p = 1, d = !0; p < r.length; p += 1) {
    var c = r[p], f = sn(c, 0, 1), h = sn(c, -1);
    if ((f === '"' || f === "'" || f === "`" || h === '"' || h === "'" || h === "`") && f !== h)
      throw new vt("property names with quotes must have matching quotes");
    if ((c === "constructor" || !d) && (i = !0), a += "." + c, l = "%" + a + "%", ln(Ze, l))
      s = Ze[l];
    else if (s != null) {
      if (!(c in s)) {
        if (!n)
          throw new dt("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Xe && p + 1 >= r.length) {
        var y = Xe(s, c);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? s = y.get : s = s[c];
      } else
        d = ln(s, c), s = s[c];
      d && !i && (Ze[l] = s);
    }
  }
  return s;
}, Yi = Zi, Yt = Yi("%Object.getOwnPropertyDescriptor%", !0);
if (Yt)
  try {
    Yt([], "length");
  } catch {
    Yt = null;
  }
var Fa = Yt, Lr = hr(), el = mn, ot = et, Wr = Fa, tl = function(e, n, r) {
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
  var a = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, l = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, i = !!Wr && Wr(e, n);
  if (Lr)
    Lr(e, n, {
      configurable: l === null && i ? i.configurable : !l,
      enumerable: a === null && i ? i.enumerable : !a,
      value: r,
      writable: o === null && i ? i.writable : !o
    });
  else if (s || !a && !o && !l)
    e[n] = r;
  else
    throw new el("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Wn = hr(), Ma = function() {
  return !!Wn;
};
Ma.hasArrayLengthDefineBug = function() {
  if (!Wn)
    return null;
  try {
    return Wn([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var nl = Ma, rl = Ai, Gr = tl, al = nl(), Hr = Fa, qr = et, ol = rl("%Math.floor%"), il = function(e, n) {
  if (typeof e != "function")
    throw new qr("`fn` is not a function");
  if (typeof n != "number" || n < 0 || n > 4294967295 || ol(n) !== n)
    throw new qr("`length` must be a positive 32-bit integer");
  var r = arguments.length > 2 && !!arguments[2], a = !0, o = !0;
  if ("length" in e && Hr) {
    var l = Hr(e, "length");
    l && !l.configurable && (a = !1), l && !l.writable && (o = !1);
  }
  return (a || o || !r) && (al ? Gr(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n,
    !0,
    !0
  ) : Gr(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    n
  )), e;
};
(function(t) {
  var e = Ft, n = yr, r = il, a = et, o = n("%Function.prototype.apply%"), l = n("%Function.prototype.call%"), s = n("%Reflect.apply%", !0) || e.call(l, o), i = hr(), u = n("%Math.max%");
  t.exports = function(c) {
    if (typeof c != "function")
      throw new a("a function is required");
    var f = s(e, l, arguments);
    return r(
      f,
      1 + u(0, c.length - (arguments.length - 1)),
      !0
    );
  };
  var p = function() {
    return s(e, o, arguments);
  };
  i ? i(t.exports, "apply", { value: p }) : t.exports.apply = p;
})(Ca);
var ll = Ca.exports, Va = yr, Ta = ll, sl = Ta(Va("String.prototype.indexOf")), ul = function(e, n) {
  var r = Va(e, !!n);
  return typeof r == "function" && sl(e, ".prototype.") > -1 ? Ta(r) : r;
};
const cl = {}, pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cl
}, Symbol.toStringTag, { value: "Module" })), dl = /* @__PURE__ */ Eo(pl);
var vr = typeof Map == "function" && Map.prototype, Dn = Object.getOwnPropertyDescriptor && vr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, un = vr && Dn && typeof Dn.get == "function" ? Dn.get : null, Jr = vr && Map.prototype.forEach, gr = typeof Set == "function" && Set.prototype, Cn = Object.getOwnPropertyDescriptor && gr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, cn = gr && Cn && typeof Cn.get == "function" ? Cn.get : null, Kr = gr && Set.prototype.forEach, fl = typeof WeakMap == "function" && WeakMap.prototype, xt = fl ? WeakMap.prototype.has : null, ml = typeof WeakSet == "function" && WeakSet.prototype, Et = ml ? WeakSet.prototype.has : null, yl = typeof WeakRef == "function" && WeakRef.prototype, Qr = yl ? WeakRef.prototype.deref : null, hl = Boolean.prototype.valueOf, vl = Object.prototype.toString, gl = Function.prototype.toString, wl = String.prototype.match, wr = String.prototype.slice, Te = String.prototype.replace, bl = String.prototype.toUpperCase, Xr = String.prototype.toLowerCase, Ua = RegExp.prototype.test, Zr = Array.prototype.concat, Ee = Array.prototype.join, _l = Array.prototype.slice, Yr = Math.floor, Gn = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Rn = Object.getOwnPropertySymbols, Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, gt = typeof Symbol == "function" && typeof Symbol.iterator == "object", ge = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === gt || !0) ? Symbol.toStringTag : null, Ba = Object.prototype.propertyIsEnumerable, ea = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function ta(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Ua.call(/e/, e))
    return e;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var r = t < 0 ? -Yr(-t) : Yr(t);
    if (r !== t) {
      var a = String(r), o = wr.call(e, a.length + 1);
      return Te.call(a, n, "$&_") + "." + Te.call(Te.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Te.call(e, n, "$&_");
}
var qn = dl, na = qn.custom, ra = ja(na) ? na : null, Sl = function t(e, n, r, a) {
  var o = n || {};
  if (Ve(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Ve(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var l = Ve(o, "customInspect") ? o.customInspect : !0;
  if (typeof l != "boolean" && l !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Ve(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Ve(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = o.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return La(e, o);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var i = String(e);
    return s ? ta(e, i) : i;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return s ? ta(e, u) : u;
  }
  var p = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof r > "u" && (r = 0), r >= p && p > 0 && typeof e == "object")
    return Jn(e) ? "[Array]" : "[Object]";
  var d = Nl(o, r);
  if (typeof a > "u")
    a = [];
  else if (za(a, e) >= 0)
    return "[Circular]";
  function c(Q, Y, J) {
    if (Y && (a = _l.call(a), a.push(Y)), J) {
      var ie = {
        depth: o.depth
      };
      return Ve(o, "quoteStyle") && (ie.quoteStyle = o.quoteStyle), t(Q, ie, r + 1, a);
    }
    return t(Q, o, r + 1, a);
  }
  if (typeof e == "function" && !aa(e)) {
    var f = Cl(e), h = Nt(e, c);
    return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (h.length > 0 ? " { " + Ee.call(h, ", ") + " }" : "");
  }
  if (ja(e)) {
    var y = gt ? Te.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Hn.call(e);
    return typeof e == "object" && !gt ? $t(y) : y;
  }
  if (Tl(e)) {
    for (var w = "<" + Xr.call(String(e.nodeName)), S = e.attributes || [], E = 0; E < S.length; E++)
      w += " " + S[E].name + "=" + Na(kl(S[E].value), "double", o);
    return w += ">", e.childNodes && e.childNodes.length && (w += "..."), w += "</" + Xr.call(String(e.nodeName)) + ">", w;
  }
  if (Jn(e)) {
    if (e.length === 0)
      return "[]";
    var b = Nt(e, c);
    return d && !Bl(b) ? "[" + Kn(b, d) + "]" : "[ " + Ee.call(b, ", ") + " ]";
  }
  if ($l(e)) {
    var v = Nt(e, c);
    return !("cause" in Error.prototype) && "cause" in e && !Ba.call(e, "cause") ? "{ [" + String(e) + "] " + Ee.call(Zr.call("[cause]: " + c(e.cause), v), ", ") + " }" : v.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Ee.call(v, ", ") + " }";
  }
  if (typeof e == "object" && l) {
    if (ra && typeof e[ra] == "function" && qn)
      return qn(e, { depth: p - r });
    if (l !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (Rl(e)) {
    var $ = [];
    return Jr && Jr.call(e, function(Q, Y) {
      $.push(c(Y, e, !0) + " => " + c(Q, e));
    }), oa("Map", un.call(e), $, d);
  }
  if (Ml(e)) {
    var g = [];
    return Kr && Kr.call(e, function(Q) {
      g.push(c(Q, e));
    }), oa("Set", cn.call(e), g, d);
  }
  if (Ol(e))
    return On("WeakMap");
  if (Vl(e))
    return On("WeakSet");
  if (Fl(e))
    return On("WeakRef");
  if (Il(e))
    return $t(c(Number(e)));
  if (El(e))
    return $t(c(Gn.call(e)));
  if (xl(e))
    return $t(hl.call(e));
  if (Pl(e))
    return $t(c(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === xo)
    return "{ [object globalThis] }";
  if (!Al(e) && !aa(e)) {
    var P = Nt(e, c), I = ea ? ea(e) === Object.prototype : e instanceof Object || e.constructor === Object, T = e instanceof Object ? "" : "null prototype", C = !I && ge && Object(e) === e && ge in e ? wr.call(Ne(e), 8, -1) : T ? "Object" : "", V = I || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", q = V + (C || T ? "[" + Ee.call(Zr.call([], C || [], T || []), ": ") + "] " : "");
    return P.length === 0 ? q + "{}" : d ? q + "{" + Kn(P, d) + "}" : q + "{ " + Ee.call(P, ", ") + " }";
  }
  return String(e);
};
function Na(t, e, n) {
  var r = (n.quoteStyle || e) === "double" ? '"' : "'";
  return r + t + r;
}
function kl(t) {
  return Te.call(String(t), /"/g, "&quot;");
}
function Jn(t) {
  return Ne(t) === "[object Array]" && (!ge || !(typeof t == "object" && ge in t));
}
function Al(t) {
  return Ne(t) === "[object Date]" && (!ge || !(typeof t == "object" && ge in t));
}
function aa(t) {
  return Ne(t) === "[object RegExp]" && (!ge || !(typeof t == "object" && ge in t));
}
function $l(t) {
  return Ne(t) === "[object Error]" && (!ge || !(typeof t == "object" && ge in t));
}
function Pl(t) {
  return Ne(t) === "[object String]" && (!ge || !(typeof t == "object" && ge in t));
}
function Il(t) {
  return Ne(t) === "[object Number]" && (!ge || !(typeof t == "object" && ge in t));
}
function xl(t) {
  return Ne(t) === "[object Boolean]" && (!ge || !(typeof t == "object" && ge in t));
}
function ja(t) {
  if (gt)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Hn)
    return !1;
  try {
    return Hn.call(t), !0;
  } catch {
  }
  return !1;
}
function El(t) {
  if (!t || typeof t != "object" || !Gn)
    return !1;
  try {
    return Gn.call(t), !0;
  } catch {
  }
  return !1;
}
var Dl = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Ve(t, e) {
  return Dl.call(t, e);
}
function Ne(t) {
  return vl.call(t);
}
function Cl(t) {
  if (t.name)
    return t.name;
  var e = wl.call(gl.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function za(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var n = 0, r = t.length; n < r; n++)
    if (t[n] === e)
      return n;
  return -1;
}
function Rl(t) {
  if (!un || !t || typeof t != "object")
    return !1;
  try {
    un.call(t);
    try {
      cn.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Ol(t) {
  if (!xt || !t || typeof t != "object")
    return !1;
  try {
    xt.call(t, xt);
    try {
      Et.call(t, Et);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Fl(t) {
  if (!Qr || !t || typeof t != "object")
    return !1;
  try {
    return Qr.call(t), !0;
  } catch {
  }
  return !1;
}
function Ml(t) {
  if (!cn || !t || typeof t != "object")
    return !1;
  try {
    cn.call(t);
    try {
      un.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function Vl(t) {
  if (!Et || !t || typeof t != "object")
    return !1;
  try {
    Et.call(t, Et);
    try {
      xt.call(t, xt);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Tl(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function La(t, e) {
  if (t.length > e.maxStringLength) {
    var n = t.length - e.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return La(wr.call(t, 0, e.maxStringLength), e) + r;
  }
  var a = Te.call(Te.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Ul);
  return Na(a, "single", e);
}
function Ul(t) {
  var e = t.charCodeAt(0), n = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + bl.call(e.toString(16));
}
function $t(t) {
  return "Object(" + t + ")";
}
function On(t) {
  return t + " { ? }";
}
function oa(t, e, n, r) {
  var a = r ? Kn(n, r) : Ee.call(n, ", ");
  return t + " (" + e + ") {" + a + "}";
}
function Bl(t) {
  for (var e = 0; e < t.length; e++)
    if (za(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Nl(t, e) {
  var n;
  if (t.indent === "	")
    n = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    n = Ee.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: n,
    prev: Ee.call(Array(e + 1), n)
  };
}
function Kn(t, e) {
  if (t.length === 0)
    return "";
  var n = `
` + e.prev + e.base;
  return n + Ee.call(t, "," + n) + `
` + e.prev;
}
function Nt(t, e) {
  var n = Jn(t), r = [];
  if (n) {
    r.length = t.length;
    for (var a = 0; a < t.length; a++)
      r[a] = Ve(t, a) ? e(t[a], t) : "";
  }
  var o = typeof Rn == "function" ? Rn(t) : [], l;
  if (gt) {
    l = {};
    for (var s = 0; s < o.length; s++)
      l["$" + o[s]] = o[s];
  }
  for (var i in t)
    Ve(t, i) && (n && String(Number(i)) === i && i < t.length || gt && l["$" + i] instanceof Symbol || (Ua.call(/[^\w$]/, i) ? r.push(e(i, t) + ": " + e(t[i], t)) : r.push(i + ": " + e(t[i], t))));
  if (typeof Rn == "function")
    for (var u = 0; u < o.length; u++)
      Ba.call(t, o[u]) && r.push("[" + e(o[u]) + "]: " + e(t[o[u]], t));
  return r;
}
var Wa = yr, _t = ul, jl = Sl, zl = et, jt = Wa("%WeakMap%", !0), zt = Wa("%Map%", !0), Ll = _t("WeakMap.prototype.get", !0), Wl = _t("WeakMap.prototype.set", !0), Gl = _t("WeakMap.prototype.has", !0), Hl = _t("Map.prototype.get", !0), ql = _t("Map.prototype.set", !0), Jl = _t("Map.prototype.has", !0), br = function(t, e) {
  for (var n = t, r; (r = n.next) !== null; n = r)
    if (r.key === e)
      return n.next = r.next, r.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = r, r;
}, Kl = function(t, e) {
  var n = br(t, e);
  return n && n.value;
}, Ql = function(t, e, n) {
  var r = br(t, e);
  r ? r.value = n : t.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: n
  };
}, Xl = function(t, e) {
  return !!br(t, e);
}, Zl = function() {
  var e, n, r, a = {
    assert: function(o) {
      if (!a.has(o))
        throw new zl("Side channel does not contain " + jl(o));
    },
    get: function(o) {
      if (jt && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Ll(e, o);
      } else if (zt) {
        if (n)
          return Hl(n, o);
      } else if (r)
        return Kl(r, o);
    },
    has: function(o) {
      if (jt && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Gl(e, o);
      } else if (zt) {
        if (n)
          return Jl(n, o);
      } else if (r)
        return Xl(r, o);
      return !1;
    },
    set: function(o, l) {
      jt && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new jt()), Wl(e, o, l)) : zt ? (n || (n = new zt()), ql(n, o, l)) : (r || (r = { key: {}, next: null }), Ql(r, o, l));
    }
  };
  return a;
}, Yl = String.prototype.replace, es = /%20/g, Fn = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, _r = {
  default: Fn.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return Yl.call(t, es, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Fn.RFC1738,
  RFC3986: Fn.RFC3986
}, ts = _r, Mn = Object.prototype.hasOwnProperty, Ge = Array.isArray, Ie = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), ns = function(e) {
  for (; e.length > 1; ) {
    var n = e.pop(), r = n.obj[n.prop];
    if (Ge(r)) {
      for (var a = [], o = 0; o < r.length; ++o)
        typeof r[o] < "u" && a.push(r[o]);
      n.obj[n.prop] = a;
    }
  }
}, Ga = function(e, n) {
  for (var r = n && n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < e.length; ++a)
    typeof e[a] < "u" && (r[a] = e[a]);
  return r;
}, rs = function t(e, n, r) {
  if (!n)
    return e;
  if (typeof n != "object") {
    if (Ge(e))
      e.push(n);
    else if (e && typeof e == "object")
      (r && (r.plainObjects || r.allowPrototypes) || !Mn.call(Object.prototype, n)) && (e[n] = !0);
    else
      return [e, n];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(n);
  var a = e;
  return Ge(e) && !Ge(n) && (a = Ga(e, r)), Ge(e) && Ge(n) ? (n.forEach(function(o, l) {
    if (Mn.call(e, l)) {
      var s = e[l];
      s && typeof s == "object" && o && typeof o == "object" ? e[l] = t(s, o, r) : e.push(o);
    } else
      e[l] = o;
  }), e) : Object.keys(n).reduce(function(o, l) {
    var s = n[l];
    return Mn.call(o, l) ? o[l] = t(o[l], s, r) : o[l] = s, o;
  }, a);
}, as = function(e, n) {
  return Object.keys(n).reduce(function(r, a) {
    return r[a] = n[a], r;
  }, e);
}, os = function(t, e, n) {
  var r = t.replace(/\+/g, " ");
  if (n === "iso-8859-1")
    return r.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(r);
  } catch {
    return r;
  }
}, is = function(e, n, r, a, o) {
  if (e.length === 0)
    return e;
  var l = e;
  if (typeof e == "symbol" ? l = Symbol.prototype.toString.call(e) : typeof e != "string" && (l = String(e)), r === "iso-8859-1")
    return escape(l).replace(/%u[0-9a-f]{4}/gi, function(p) {
      return "%26%23" + parseInt(p.slice(2), 16) + "%3B";
    });
  for (var s = "", i = 0; i < l.length; ++i) {
    var u = l.charCodeAt(i);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || o === ts.RFC1738 && (u === 40 || u === 41)) {
      s += l.charAt(i);
      continue;
    }
    if (u < 128) {
      s = s + Ie[u];
      continue;
    }
    if (u < 2048) {
      s = s + (Ie[192 | u >> 6] + Ie[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      s = s + (Ie[224 | u >> 12] + Ie[128 | u >> 6 & 63] + Ie[128 | u & 63]);
      continue;
    }
    i += 1, u = 65536 + ((u & 1023) << 10 | l.charCodeAt(i) & 1023), s += Ie[240 | u >> 18] + Ie[128 | u >> 12 & 63] + Ie[128 | u >> 6 & 63] + Ie[128 | u & 63];
  }
  return s;
}, ls = function(e) {
  for (var n = [{ obj: { o: e }, prop: "o" }], r = [], a = 0; a < n.length; ++a)
    for (var o = n[a], l = o.obj[o.prop], s = Object.keys(l), i = 0; i < s.length; ++i) {
      var u = s[i], p = l[u];
      typeof p == "object" && p !== null && r.indexOf(p) === -1 && (n.push({ obj: l, prop: u }), r.push(p));
    }
  return ns(n), e;
}, ss = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, us = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, cs = function(e, n) {
  return [].concat(e, n);
}, ps = function(e, n) {
  if (Ge(e)) {
    for (var r = [], a = 0; a < e.length; a += 1)
      r.push(n(e[a]));
    return r;
  }
  return n(e);
}, Ha = {
  arrayToObject: Ga,
  assign: as,
  combine: cs,
  compact: ls,
  decode: os,
  encode: is,
  isBuffer: us,
  isRegExp: ss,
  maybeMap: ps,
  merge: rs
}, qa = Zl, en = Ha, Dt = _r, ds = Object.prototype.hasOwnProperty, Ja = {
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
}, xe = Array.isArray, fs = Array.prototype.push, Ka = function(t, e) {
  fs.apply(t, xe(e) ? e : [e]);
}, ms = Date.prototype.toISOString, ia = Dt.default, pe = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: en.encode,
  encodeValuesOnly: !1,
  format: ia,
  formatter: Dt.formatters[ia],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return ms.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, ys = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Vn = {}, hs = function t(e, n, r, a, o, l, s, i, u, p, d, c, f, h, y, w, S, E) {
  for (var b = e, v = E, $ = 0, g = !1; (v = v.get(Vn)) !== void 0 && !g; ) {
    var P = v.get(e);
    if ($ += 1, typeof P < "u") {
      if (P === $)
        throw new RangeError("Cyclic object value");
      g = !0;
    }
    typeof v.get(Vn) > "u" && ($ = 0);
  }
  if (typeof p == "function" ? b = p(n, b) : b instanceof Date ? b = f(b) : r === "comma" && xe(b) && (b = en.maybeMap(b, function(R) {
    return R instanceof Date ? f(R) : R;
  })), b === null) {
    if (l)
      return u && !w ? u(n, pe.encoder, S, "key", h) : n;
    b = "";
  }
  if (ys(b) || en.isBuffer(b)) {
    if (u) {
      var I = w ? n : u(n, pe.encoder, S, "key", h);
      return [y(I) + "=" + y(u(b, pe.encoder, S, "value", h))];
    }
    return [y(n) + "=" + y(String(b))];
  }
  var T = [];
  if (typeof b > "u")
    return T;
  var C;
  if (r === "comma" && xe(b))
    w && u && (b = en.maybeMap(b, u)), C = [{ value: b.length > 0 ? b.join(",") || null : void 0 }];
  else if (xe(p))
    C = p;
  else {
    var V = Object.keys(b);
    C = d ? V.sort(d) : V;
  }
  var q = i ? n.replace(/\./g, "%2E") : n, Q = a && xe(b) && b.length === 1 ? q + "[]" : q;
  if (o && xe(b) && b.length === 0)
    return Q + "[]";
  for (var Y = 0; Y < C.length; ++Y) {
    var J = C[Y], ie = typeof J == "object" && typeof J.value < "u" ? J.value : b[J];
    if (!(s && ie === null)) {
      var X = c && i ? J.replace(/\./g, "%2E") : J, W = xe(b) ? typeof r == "function" ? r(Q, X) : Q : Q + (c ? "." + X : "[" + X + "]");
      E.set(e, $);
      var K = qa();
      K.set(Vn, E), Ka(T, t(
        ie,
        W,
        r,
        a,
        o,
        l,
        s,
        i,
        r === "comma" && w && xe(b) ? null : u,
        p,
        d,
        c,
        f,
        h,
        y,
        w,
        S,
        K
      ));
    }
  }
  return T;
}, vs = function(e) {
  if (!e)
    return pe;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var n = e.charset || pe.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = Dt.default;
  if (typeof e.format < "u") {
    if (!ds.call(Dt.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    r = e.format;
  }
  var a = Dt.formatters[r], o = pe.filter;
  (typeof e.filter == "function" || xe(e.filter)) && (o = e.filter);
  var l;
  if (e.arrayFormat in Ja ? l = e.arrayFormat : "indices" in e ? l = e.indices ? "indices" : "repeat" : l = pe.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var s = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : pe.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : pe.addQueryPrefix,
    allowDots: s,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : pe.allowEmptyArrays,
    arrayFormat: l,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : pe.charsetSentinel,
    commaRoundTrip: e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? pe.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : pe.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : pe.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : pe.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : pe.encodeValuesOnly,
    filter: o,
    format: r,
    formatter: a,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : pe.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : pe.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : pe.strictNullHandling
  };
}, gs = function(t, e) {
  var n = t, r = vs(e), a, o;
  typeof r.filter == "function" ? (o = r.filter, n = o("", n)) : xe(r.filter) && (o = r.filter, a = o);
  var l = [];
  if (typeof n != "object" || n === null)
    return "";
  var s = Ja[r.arrayFormat], i = s === "comma" && r.commaRoundTrip;
  a || (a = Object.keys(n)), r.sort && a.sort(r.sort);
  for (var u = qa(), p = 0; p < a.length; ++p) {
    var d = a[p];
    r.skipNulls && n[d] === null || Ka(l, hs(
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
  var c = l.join(r.delimiter), f = r.addQueryPrefix === !0 ? "?" : "";
  return r.charsetSentinel && (r.charset === "iso-8859-1" ? f += "utf8=%26%2310003%3B&" : f += "utf8=%E2%9C%93&"), c.length > 0 ? f + c : "";
}, wt = Ha, Qn = Object.prototype.hasOwnProperty, ws = Array.isArray, oe = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !0,
  decoder: wt.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, bs = function(t) {
  return t.replace(/&#(\d+);/g, function(e, n) {
    return String.fromCharCode(parseInt(n, 10));
  });
}, Qa = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, _s = "utf8=%26%2310003%3B", Ss = "utf8=%E2%9C%93", ks = function(e, n) {
  var r = { __proto__: null }, a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, l = a.split(n.delimiter, o), s = -1, i, u = n.charset;
  if (n.charsetSentinel)
    for (i = 0; i < l.length; ++i)
      l[i].indexOf("utf8=") === 0 && (l[i] === Ss ? u = "utf-8" : l[i] === _s && (u = "iso-8859-1"), s = i, i = l.length);
  for (i = 0; i < l.length; ++i)
    if (i !== s) {
      var p = l[i], d = p.indexOf("]="), c = d === -1 ? p.indexOf("=") : d + 1, f, h;
      c === -1 ? (f = n.decoder(p, oe.decoder, u, "key"), h = n.strictNullHandling ? null : "") : (f = n.decoder(p.slice(0, c), oe.decoder, u, "key"), h = wt.maybeMap(
        Qa(p.slice(c + 1), n),
        function(w) {
          return n.decoder(w, oe.decoder, u, "value");
        }
      )), h && n.interpretNumericEntities && u === "iso-8859-1" && (h = bs(h)), p.indexOf("[]=") > -1 && (h = ws(h) ? [h] : h);
      var y = Qn.call(r, f);
      y && n.duplicates === "combine" ? r[f] = wt.combine(r[f], h) : (!y || n.duplicates === "last") && (r[f] = h);
    }
  return r;
}, As = function(t, e, n, r) {
  for (var a = r ? e : Qa(e, n), o = t.length - 1; o >= 0; --o) {
    var l, s = t[o];
    if (s === "[]" && n.parseArrays)
      l = n.allowEmptyArrays && a === "" ? [] : [].concat(a);
    else {
      l = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var i = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, u = n.decodeDotInKeys ? i.replace(/%2E/g, ".") : i, p = parseInt(u, 10);
      !n.parseArrays && u === "" ? l = { 0: a } : !isNaN(p) && s !== u && String(p) === u && p >= 0 && n.parseArrays && p <= n.arrayLimit ? (l = [], l[p] = a) : u !== "__proto__" && (l[u] = a);
    }
    a = l;
  }
  return a;
}, $s = function(e, n, r, a) {
  if (e) {
    var o = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, l = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, i = r.depth > 0 && l.exec(o), u = i ? o.slice(0, i.index) : o, p = [];
    if (u) {
      if (!r.plainObjects && Qn.call(Object.prototype, u) && !r.allowPrototypes)
        return;
      p.push(u);
    }
    for (var d = 0; r.depth > 0 && (i = s.exec(o)) !== null && d < r.depth; ) {
      if (d += 1, !r.plainObjects && Qn.call(Object.prototype, i[1].slice(1, -1)) && !r.allowPrototypes)
        return;
      p.push(i[1]);
    }
    return i && p.push("[" + o.slice(i.index) + "]"), As(p, n, r, a);
  }
}, Ps = function(e) {
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
  var a = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : oe.allowDots : !!e.allowDots;
  return {
    allowDots: a,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : oe.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : oe.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : oe.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : oe.arrayLimit,
    charset: n,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : oe.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : oe.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : oe.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : oe.decoder,
    delimiter: typeof e.delimiter == "string" || wt.isRegExp(e.delimiter) ? e.delimiter : oe.delimiter,
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
}, Is = function(t, e) {
  var n = Ps(e);
  if (t === "" || t === null || typeof t > "u")
    return n.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var r = typeof t == "string" ? ks(t, n) : t, a = n.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = Object.keys(r), l = 0; l < o.length; ++l) {
    var s = o[l], i = $s(s, r[s], n, typeof t == "string");
    a = wt.merge(a, i, n);
  }
  return n.allowSparse === !0 ? a : wt.compact(a);
}, xs = gs, Es = Is, Ds = _r, Cs = {
  formats: Ds,
  parse: Es,
  stringify: xs
};
const Rs = /* @__PURE__ */ sr(Cs), Sr = [
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
], Xa = {
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
}, Za = [
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
function Xn(t) {
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
], Fs = [
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
], Zn = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "七",
  8: "八",
  9: "九"
}, Ms = {
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
  t.forEach((a) => {
    n.set(a.name, a);
  });
  const r = e.map((a) => {
    const [o, l] = a[0], s = a[1].map(([i, u]) => ({
      name: i,
      pinyin: u
    }));
    return {
      name: o,
      pinyin: l,
      jobs: s
    };
  });
  return {
    jobs: n,
    jobGroups: r
  };
}
const Ut = Vs(Os, Fs);
function kr(t, e) {
  const n = {
    text: "",
    point: 0
  }, r = Ut.jobs.get(t || "");
  if (!r) return n;
  const a = [];
  return r.point.forEach((o) => {
    const l = [], s = [];
    o.forEach(([u, p]) => {
      l.push(`${Ms[u]}×${p}`), e && s.push((e[u] || 0) * p);
    });
    let i = l.join(" 或 ");
    l.length > 1 && (i = `(${i})`), a.push(i), n.point += Math.max(...s);
  }), n.text = a.join(" + "), n;
}
const Lt = {
  取悦: 0,
  话术: 1,
  恐吓: 2,
  说服: 3
};
function Ts(t, e) {
  if (!t || t.length === 0)
    return { skillPoints: t ?? [], proSkills: e ?? [] };
  const n = [];
  let r = !1;
  const a = /* @__PURE__ */ new Map();
  for (const [i, u] of t)
    if (typeof i == "string" && i in Lt) {
      r = !0;
      const p = Lt[i];
      a.set(p, i), n.push([["社交", i, p], u]);
    } else
      n.push([i, u]);
  if (!r)
    return { skillPoints: t, proSkills: e ?? [] };
  const o = [];
  if (e)
    for (const i of e)
      if (typeof i == "string" && i in Lt) {
        const u = Lt[i];
        o.push(["社交", i, u]);
      } else
        o.push(i);
  const s = [...a.keys()].sort((i, u) => i - u).map((i) => a.get(i));
  return {
    skillPoints: n,
    proSkills: o,
    showingChildSkillsPatch: { 社交: s }
  };
}
function Us(t, e, n) {
  const r = { ...t };
  if (!r.pro && e) {
    const { point: a } = kr(e, n);
    a > 0 && (r.pro = `${a}`);
  }
  return !r.interest && (n != null && n.int) && (r.interest = `${n.int * 2}`), r;
}
function Bs(t) {
  var e, n, r;
  return {
    mental: {
      hardened: ((e = t == null ? void 0 : t.mental) == null ? void 0 : e.hardened) ?? !1,
      permanentMadness: ((n = t == null ? void 0 : t.mental) == null ? void 0 : n.permanentMadness) ?? !1,
      indefiniteMadness: ((r = t == null ? void 0 : t.mental) == null ? void 0 : r.indefiniteMadness) ?? !1
    }
  };
}
function Ns(t) {
  return {
    currency: (t == null ? void 0 : t.currency) ?? (t == null ? void 0 : t.cash) ?? "",
    assets: (t == null ? void 0 : t.assets) ?? "",
    items: (t == null ? void 0 : t.items) ?? "",
    magicItems: (t == null ? void 0 : t.magicItems) ?? "",
    magics: (t == null ? void 0 : t.magics) ?? "",
    touches: (t == null ? void 0 : t.touches) ?? ""
  };
}
function He(t, e) {
  const n = Bs(t == null ? void 0 : t.status), r = Ns(t == null ? void 0 : t.assets), { skillPoints: a, proSkills: o, showingChildSkillsPatch: l } = Ts(
    t == null ? void 0 : t.skillPoints,
    t == null ? void 0 : t.proSkills
  ), s = Us(
    t == null ? void 0 : t.pointValues,
    t == null ? void 0 : t.job,
    t == null ? void 0 : t.attributes
  ), i = {
    name: "",
    playerName: "",
    time: "",
    job: "",
    age: "",
    gender: "",
    location: "",
    attributes: {},
    battleAttributes: {},
    weapons: [Xn(Sr[0])],
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
    pointValues: s,
    proSkills: o,
    skillPoints: a,
    assets: r,
    status: n
  };
  return e ? { pc: i, showingChildSkillsPatch: l } : i;
}
const vn = [
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
    name: "计算机使用Ω",
    displayName: "计算机",
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
], Yn = {
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
}, js = {
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
  操纵: [
    "汽车驾驶",
    "骑术",
    "驾驶"
    /* '操作重型机械' */
  ],
  其它: [""]
}, zs = [
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
function Ls({
  skills: t,
  groups: e,
  groupOrder: n
}) {
  const r = /* @__PURE__ */ new Map();
  return t.forEach((o) => {
    r.set(o.name, o);
  }), n.map((o) => {
    const s = e[o].map((i) => r.get(i));
    return {
      groupName: o,
      groupSkills: s
    };
  });
}
const er = Ls({
  skills: vn,
  groups: js,
  groupOrder: zs
}), bt = {
  母语: (t) => t.attributes.edu || 0,
  闪避: (t) => Math.floor((t.attributes.dex || 0) / 2)
}, tn = /* @__PURE__ */ new Map();
vn.forEach((t) => {
  var n;
  t.init && tn.set(t.name, t.init);
  const e = Yn[t.name];
  e && e.forEach((r) => {
    t.init && tn.set(r, t.init);
  }), (n = t.group) != null && n.skills && t.group.skills.forEach((r) => {
    r.init && tn.set(r.name, r.init);
  });
});
function Ws(t, e) {
  return t ? e && t in bt ? bt[t](e) : tn.get(t) ?? 0 : 0;
}
function Ya(t) {
  const e = {};
  return vn.forEach((n) => {
    n.group && (e[n.name] = [...n.group.show]);
  }), t && (t.showingChildSkills = e), e;
}
function Gs(t, e) {
  const { attributes: n, deriveAttributes: r, skillPoints: a } = t, {
    str: o = 0,
    con: l = 0,
    siz: s = 0,
    dex: i = 0,
    app: u = 0,
    int: p = 0,
    pow: d = 0,
    edu: c = 0,
    luc: f = 0
  } = n, {
    hp: h = { start: 0 },
    mp: y = { start: 0 },
    sanity: w = { now: 0, start: 0 }
  } = r || {}, S = w.now == null || w.now === "" ? w.start : w.now, E = `${t.name}-力量${o}str${o}敏捷${i}dex${i}体质${l}con${l}外貌${u}app${u}智力${p}灵感${p}int${p}意志${d}pow${d}体型${s}siz${s}教育${c}edu${c}幸运${f}运气${f}luck${f}`, b = `hp${h.start}体力${h.start}mp${y.start}魔法${y.start}san${S}理智${S}理智值${S}san值${S}`;
  let v = "";
  const $ = {};
  return a.forEach(([g, P]) => {
    var q;
    let I, T, C;
    Array.isArray(g) ? ([I, , C] = g, T = (q = e.showingChildSkills[I]) == null ? void 0 : q[C]) : I = g;
    const V = T ? `${I}-${T}` : I;
    $[V] = P;
  }), vn.forEach((g) => {
    var Q;
    const { name: P, displayName: I, init: T, group: C } = g;
    let V = bt[P] ? bt[P](t) : T;
    const q = I ?? P;
    if (C) {
      let Y = 0;
      if ((Q = e.showingChildSkills[P]) == null || Q.forEach((J) => {
        var K, R;
        if (!J) return;
        const ie = `${P}-${J}`, X = $[ie];
        if (P && (V = ((R = (K = g.group) == null ? void 0 : K.skills.find((D) => D.name === J)) == null ? void 0 : R.init) || V), X) {
          const { b: D = P ? V : 0, p: ne = 0, i: ae = 0, g: ee = 0 } = X;
          Y = D + ne + ae + ee;
        } else C.show.includes(J) && (Y = V);
        J != "步/霰" && (v += `${J}${Y}`);
        const W = Yn[J];
        W && (v += W.map((D) => `${D}${Y}`).join("")), delete $[ie];
      }), P === "母语")
        if (Y)
          v += `母语${Y}`;
        else {
          const J = $[P];
          if (J) {
            const { b: ie = P ? V : 0, p: X = 0, i: W = 0, g: K = 0 } = J;
            v += `母语${ie + X + W + K}`;
          } else
            v += `母语${V}`;
        }
    } else {
      const Y = $[P];
      let J = 0;
      if (Y) {
        const { b: X = P ? V : 0, p: W = 0, i: K = 0, g: R = 0 } = Y;
        J = X + W + K + R;
      } else
        J = V;
      v += `${q}${J}`;
      const ie = Yn[P];
      ie && (v += ie.map((X) => `${X}${J}`).join("")), delete $[P];
    }
  }), `${E}${b}${v}`;
}
const Hs = {
  limitp: 80,
  limiti: 70
};
function eo(t) {
  const e = { ...Hs, ...t };
  return {
    showingChildSkills: Ya(),
    // 显式 undefined，确保 Object.assign 时清除残留的 jobSkills
    jobSkills: void 0,
    skillLimits: {
      pro: e.limitp,
      interest: e.limiti
    }
  };
}
function Pt(t) {
  return eo(t);
}
function qs(t) {
  Object.assign(t, eo());
}
function Js(t) {
  be(
    () => t.value.attributes,
    () => {
      var u, p, d, c, f, h;
      let e = "", n = "";
      const { con: r, siz: a, pow: o } = t.value.attributes || {};
      r && a && (e = `${Math.floor((r + a) / 10)}`), o && (n = `${Math.floor(o / 5)}`);
      const l = (p = (u = t.value.deriveAttributes) == null ? void 0 : u.sanity) == null ? void 0 : p.now, s = (c = (d = t.value.deriveAttributes) == null ? void 0 : d.hp) == null ? void 0 : c.now, i = (h = (f = t.value.deriveAttributes) == null ? void 0 : f.mp) == null ? void 0 : h.now;
      t.value.deriveAttributes = {
        sanity: {
          start: `${o || ""}`,
          now: l
        },
        hp: {
          start: e,
          now: s ?? e
        },
        mp: {
          start: n,
          now: i ?? n
        }
      };
    },
    { deep: !0 }
  );
}
function Ks(t) {
  return {
    wealth: [-1, -1],
    text: "",
    multiSkills: [],
    multiSkillTexts: [],
    ...t
  };
}
function to(t) {
  const { jobs: e } = Ut, n = Ks(), r = e.get(t), a = /* @__PURE__ */ new Map();
  if (!r) return n;
  n.wealth = [...r.wealth], r.skills.forEach((l) => {
    if (typeof l == "string")
      a.set(l, 0);
    else if (Array.isArray(l))
      n.multiSkills.push(
        l.map((s) => {
          if (typeof s == "string") return s;
          const [i, u] = Object.entries(s)[0];
          return { name: i, childName: u };
        })
      );
    else {
      const [s, i] = Object.entries(l)[0];
      let u = s;
      const p = s.includes("(");
      p && (u = u.split("(")[0]);
      let d = u;
      i && (d = `${u}(${i})`), p && (d = s), a.set(
        d,
        p || i ? 0 : (a.get(d) || 0) + 1
      );
    }
  });
  const o = 8 - r.skills.length;
  return n.text = [
    ...a.entries(),
    ...o ? [["其他个人或时代特长", o]] : []
  ].map(
    ([l, s]) => `${l}${s ? `(任${Zn[`${s}`]})` : ""}`
  ).join("、"), n.multiSkillTexts = Qs(n), n;
}
function Qs(t) {
  const e = [];
  return t.multiSkills.forEach((r) => {
    const a = e.findIndex(([o]) => o.every((s, i) => {
      const u = r[i];
      return typeof s == "string" ? s === u : typeof u == "string" ? !1 : s.name === u.name && s.childName === u.childName;
    }));
    a === -1 ? e.push([r, 1, Zn[`${r.length}`]]) : e[a][1] += 1;
  }), e.map((r) => {
    const o = r[0].map((l) => {
      let s = l;
      return typeof l != "string" && (s = `${l.name}:${l.childName || "任一"}`, l.name === "母语" && (s = "母语")), s;
    });
    return `${r[2]}选${Zn[`${r[1]}`]}(${o})`;
  });
}
function Xs(t, e) {
  const { jobs: n } = Ut, { viewData: r, pageData: a } = e, o = G(() => to(t.value.job));
  return be(
    () => t.value.job,
    () => {
      const l = n.get(t.value.job);
      if (!l || a.importing) return;
      r.jobSkills = [...l.skills], Ya(r), t.value.proSkills = [];
      const s = {};
      l.skills.forEach((i) => {
        if (typeof i == "string")
          t.value.proSkills.push(i);
        else if (!Array.isArray(i)) {
          const [u, p] = Object.entries(i)[0];
          let d = u;
          u.includes("(") && (d = d.split("(")[0]);
          const f = r.showingChildSkills[d];
          if (!f) return;
          let h = -1;
          if (p)
            h = f.findIndex((y) => y === p), h === -1 && (h = f.findIndex((y) => !y), f[h] = p);
          else {
            const y = s[d] || 0;
            let w = y;
            h = f.findIndex((S) => S ? !1 : w-- === 0), s[d] = y + 1;
          }
          if (h === -1) return;
          t.value.proSkills.push([d, p, h]);
        }
      }), delete r.jobSkills;
    }
  ), o;
}
function Zs(t) {
  return _o() ? (So(t), !0) : !1;
}
function Ct(t) {
  return typeof t == "function" ? t() : A(t);
}
const Ys = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const eu = Object.prototype.toString, tu = (t) => eu.call(t) === "[object Object]", tr = () => {
};
function no(t, e) {
  function n(...r) {
    return new Promise((a, o) => {
      Promise.resolve(t(() => e.apply(this, r), { fn: e, thisArg: this, args: r })).then(a).catch(o);
    });
  }
  return n;
}
const ro = (t) => t();
function nu(t, e = {}) {
  let n, r, a = tr;
  const o = (s) => {
    clearTimeout(s), a(), a = tr;
  };
  return (s) => {
    const i = Ct(t), u = Ct(e.maxWait);
    return n && o(n), i <= 0 || u !== void 0 && u <= 0 ? (r && (o(r), r = null), Promise.resolve(s())) : new Promise((p, d) => {
      a = e.rejectOnCancel ? d : p, u && !r && (r = setTimeout(() => {
        n && o(n), r = null, p(s());
      }, u)), n = setTimeout(() => {
        r && o(r), r = null, p(s());
      }, i);
    });
  };
}
function ru(t = ro) {
  const e = Z(!0);
  function n() {
    e.value = !1;
  }
  function r() {
    e.value = !0;
  }
  const a = (...o) => {
    e.value && t(...o);
  };
  return { isActive: wo(e), pause: n, resume: r, eventFilter: a };
}
function au(t) {
  return bo();
}
function ou(t, e = 200, n = {}) {
  return no(
    nu(e, n),
    t
  );
}
function iu(t, e, n = {}) {
  const {
    eventFilter: r = ro,
    ...a
  } = n;
  return be(
    t,
    no(
      r,
      e
    ),
    a
  );
}
function lu(t, e, n = {}) {
  const {
    eventFilter: r,
    ...a
  } = n, { eventFilter: o, pause: l, resume: s, isActive: i } = ru(r);
  return { stop: iu(
    t,
    e,
    {
      ...a,
      eventFilter: o
    }
  ), pause: l, resume: s, isActive: i };
}
function su(t, e = !0, n) {
  au() ? ir(t, n) : e ? t() : Ue(t);
}
function uu(t) {
  var e;
  const n = Ct(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const nr = Ys ? window : void 0;
function la(...t) {
  let e, n, r, a;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, a] = t, e = nr) : [e, n, r, a] = t, !e)
    return tr;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], l = () => {
    o.forEach((p) => p()), o.length = 0;
  }, s = (p, d, c, f) => (p.addEventListener(d, c, f), () => p.removeEventListener(d, c, f)), i = be(
    () => [uu(e), Ct(a)],
    ([p, d]) => {
      if (l(), !p)
        return;
      const c = tu(d) ? { ...d } : d;
      o.push(
        ...n.flatMap((f) => r.map((h) => s(p, f, h, c)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    i(), l();
  };
  return Zs(u), u;
}
const Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gt = "__vueuse_ssr_handlers__", cu = /* @__PURE__ */ pu();
function pu() {
  return Gt in Wt || (Wt[Gt] = Wt[Gt] || {}), Wt[Gt];
}
function du(t, e) {
  return cu[t] || e;
}
function fu(t) {
  return t == null ? "any" : t instanceof Set ? "set" : t instanceof Map ? "map" : t instanceof Date ? "date" : typeof t == "boolean" ? "boolean" : typeof t == "string" ? "string" : typeof t == "object" ? "object" : Number.isNaN(t) ? "any" : "number";
}
const mu = {
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
}, sa = "vueuse-storage";
function ua(t, e, n, r = {}) {
  var a;
  const {
    flush: o = "pre",
    deep: l = !0,
    listenToStorageChanges: s = !0,
    writeDefaults: i = !0,
    mergeDefaults: u = !1,
    shallow: p,
    window: d = nr,
    eventFilter: c,
    onError: f = (C) => {
      console.error(C);
    },
    initOnMounted: h
  } = r, y = (p ? ko : Z)(typeof e == "function" ? e() : e);
  if (!n)
    try {
      n = du("getDefaultStorage", () => {
        var C;
        return (C = nr) == null ? void 0 : C.localStorage;
      })();
    } catch (C) {
      f(C);
    }
  if (!n)
    return y;
  const w = Ct(e), S = fu(w), E = (a = r.serializer) != null ? a : mu[S], { pause: b, resume: v } = lu(
    y,
    () => g(y.value),
    { flush: o, deep: l, eventFilter: c }
  );
  d && s && su(() => {
    la(d, "storage", I), la(d, sa, T), h && I();
  }), h || I();
  function $(C, V) {
    d && d.dispatchEvent(new CustomEvent(sa, {
      detail: {
        key: t,
        oldValue: C,
        newValue: V,
        storageArea: n
      }
    }));
  }
  function g(C) {
    try {
      const V = n.getItem(t);
      if (C == null)
        $(V, null), n.removeItem(t);
      else {
        const q = E.write(C);
        V !== q && (n.setItem(t, q), $(V, q));
      }
    } catch (V) {
      f(V);
    }
  }
  function P(C) {
    const V = C ? C.newValue : n.getItem(t);
    if (V == null)
      return i && w != null && n.setItem(t, E.write(w)), w;
    if (!C && u) {
      const q = E.read(V);
      return typeof u == "function" ? u(q, w) : S === "object" && !Array.isArray(q) ? { ...w, ...q } : q;
    } else return typeof V != "string" ? V : E.read(V);
  }
  function I(C) {
    if (!(C && C.storageArea !== n)) {
      if (C && C.key == null) {
        y.value = w;
        return;
      }
      if (!(C && C.key !== t)) {
        b();
        try {
          (C == null ? void 0 : C.newValue) !== E.write(y.value) && (y.value = P(C));
        } catch (V) {
          f(V);
        } finally {
          C ? Ue(v) : v();
        }
      }
    }
  }
  function T(C) {
    I(C.detail);
  }
  return y;
}
var ao = /* @__PURE__ */ ((t) => (t.SoxFE = "$sox-trpg", t))(ao || {}), oo = /* @__PURE__ */ ((t) => (t.Home = "$home", t.COCCard = "$coc-card", t.ERPCard = "$erp-card", t))(oo || {});
function yu(t) {
  const {
    namespace: e = ao.SoxFE,
    app: n,
    versionChecker: r = (E, b) => (b.value = null, -1),
    defaults: a = {}
  } = t, o = window.localStorage, l = `${e}#${n}`, s = `${e}##versionChecker`, i = ua(l, a, o, {
    mergeDefaults: !0
  }), u = ua(s, {}, o), p = u.value[l], d = r(p, i);
  u.value[n] = d;
  function c() {
    return i.value;
  }
  function f() {
    return Object.keys(c()).length;
  }
  function h(E) {
    return i.value[E];
  }
  function y(E, b) {
    i.value[E] = b;
  }
  function w(E) {
    delete i.value[E];
  }
  function S() {
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
    listItems: c,
    countItems: f,
    getItem: h,
    setItem: y,
    removeItem: w,
    clear: S
  };
}
const hu = yu({
  app: oo.COCCard,
  versionChecker() {
    return 1.1;
  }
});
function Ar() {
  return hu;
}
const Rt = "$sox-trpg#$coc-card:card:";
function Ht(t, e, n) {
  try {
    const r = {
      pc: JSON.parse(JSON.stringify(e)),
      viewData: JSON.parse(JSON.stringify(n)),
      lastModified: Date.now()
    };
    localStorage.setItem(Rt + t, JSON.stringify(r));
  } catch (r) {
    console.error(`[CardStorage] Save failed for ${t}:`, r);
  }
}
function qt(t) {
  try {
    const e = localStorage.getItem(Rt + t);
    return e ? JSON.parse(e) : null;
  } catch (e) {
    return console.error(`[CardStorage] Load failed for ${t}:`, e), null;
  }
}
function ca(t) {
  try {
    localStorage.removeItem(Rt + t);
  } catch (e) {
    console.error(`[CardStorage] Delete failed for ${t}:`, e);
  }
}
function vu(t) {
  let e = 0;
  const n = [];
  for (let r = 0; r < localStorage.length; r++) {
    const a = localStorage.key(r);
    if (a && a.startsWith(Rt)) {
      const o = a.substring(Rt.length);
      t.has(o) || n.push(a);
    }
  }
  return n.forEach((r) => {
    localStorage.removeItem(r), e++;
  }), e > 0 && console.log(`[CardStorage] Cleaned ${e} orphaned cards`), e;
}
function pn() {
  var t;
  return typeof screen < "u" && ((t = screen == null ? void 0 : screen.orientation) != null && t.type) ? screen.orientation.type.startsWith("portrait") ? "mobile" : "desktop" : window.innerWidth > window.innerHeight ? "desktop" : "mobile";
}
const Ot = Z(pn());
window.addEventListener("resize", () => {
  Ot.value = pn();
});
typeof screen < "u" && (screen != null && screen.orientation) ? screen.orientation.addEventListener("change", () => {
  Ot.value = pn();
}) : window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    Ot.value = pn();
  }, 100);
});
function rr() {
  return Ot.value === "desktop";
}
const le = Ar();
function Tn() {
  try {
    return crypto.randomUUID();
  } catch {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
  }
}
function gu(t, e, n) {
  const r = G(() => [...le.getItem("cardMetaList") ?? []].sort(($, g) => $.createdAt - g.createdAt)), a = G(
    () => le.getItem("activeCardId") ?? ""
  ), o = G(
    () => r.value.find((v) => v.id === a.value)
  );
  function l() {
    const v = a.value;
    if (!v || n.importing) return;
    Ht(v, t.value, e);
    const $ = [...r.value], g = $.findIndex((P) => P.id === v);
    g !== -1 && ($[g] = {
      ...$[g],
      name: t.value.name || "未命名角色卡",
      lastModified: Date.now()
    }, le.setItem("cardMetaList", $));
  }
  const s = ou(() => {
    n.importing || l();
  }, 300);
  function i(v) {
    l();
    const $ = Tn(), g = {
      id: $,
      name: "未命名角色卡",
      saveName: v || `存档 ${r.value.length + 1}`,
      lastModified: Date.now(),
      createdAt: Date.now()
    }, P = [...r.value, g];
    le.setItem("cardMetaList", P), le.setItem("activeCardId", $);
    const I = He(), T = Pt();
    return Ht($, I, T), t.value = I, Object.assign(e, T), $;
  }
  function u(v) {
    const $ = qt(v);
    if (!$) return !1;
    n.importing = !0;
    const { pc: g, showingChildSkillsPatch: P } = He($.pc, !0);
    if (t.value = g, Object.assign(e, Pt(), $.viewData), P)
      for (const [I, T] of Object.entries(P))
        e.showingChildSkills[I] = T;
    return setTimeout(() => {
      n.importing = !1;
    }, 50), !0;
  }
  function p(v) {
    v !== a.value && (l(), qt(v) && (le.setItem("activeCardId", v), u(v)));
  }
  function d(v) {
    const $ = r.value.filter((g) => g.id !== v);
    le.setItem("cardMetaList", $), ca(v), v === a.value && ($.length > 0 ? p($[0].id) : i());
  }
  function c(v) {
    const $ = qt(v);
    if (!$) return null;
    l();
    const g = Tn(), P = r.value.find((q) => q.id === v), I = {
      id: g,
      name: $.pc.name || "未命名角色卡",
      saveName: `${(P == null ? void 0 : P.saveName) || "存档"} (副本)`,
      lastModified: Date.now(),
      createdAt: Date.now()
    }, T = [...r.value, I];
    le.setItem("cardMetaList", T), Ht(g, $.pc, $.viewData), le.setItem("activeCardId", g), n.importing = !0;
    const { pc: C, showingChildSkillsPatch: V } = He($.pc, !0);
    if (t.value = C, Object.keys($.viewData).forEach((q) => {
      const Q = q;
      e[Q] = $.viewData[Q];
    }), V)
      for (const [q, Q] of Object.entries(V))
        e.showingChildSkills[q] = Q;
    return setTimeout(() => {
      n.importing = !1;
    }, 50), g;
  }
  function f(v, $) {
    const g = [...r.value], P = g.findIndex((I) => I.id === v);
    P !== -1 && (g[P] = { ...g[P], saveName: $ }, le.setItem("cardMetaList", g));
  }
  function h() {
    n.importing = !0, t.value = He(), Object.assign(e, Pt()), le.removeItem("autoSaved"), setTimeout(() => {
      n.importing = !1, l();
    }, 50);
  }
  function y() {
    r.value.forEach((v) => ca(v.id)), le.setItem("cardMetaList", []), i();
  }
  function w() {
    const v = le.getItem("cardMetaList");
    if (v && v.length > 0) {
      const g = [...v].sort((T, C) => T.createdAt - C.createdAt);
      le.setItem("cardMetaList", g);
      const P = new Set(g.map((T) => T.id));
      if (vu(P), rr()) {
        i();
        return;
      }
      const I = a.value || g[0].id;
      if (le.setItem("activeCardId", I), !u(I)) {
        const T = g.find((C) => qt(C.id) != null);
        T ? (le.setItem("activeCardId", T.id), u(T.id)) : i();
      }
      return;
    }
    const $ = le.getItem("autoSaved");
    if ($ != null && $.pc) {
      const g = Tn(), P = {
        id: g,
        name: $.pc.name || "未命名角色卡",
        saveName: "迁移的存档",
        lastModified: $.lastModified || Date.now(),
        createdAt: Date.now()
      };
      if (le.setItem("cardMetaList", [P]), le.setItem("activeCardId", g), Ht(g, $.pc, $.viewData || Pt()), le.removeItem("autoSaved"), rr()) {
        i();
        return;
      }
      u(g);
      return;
    }
    i();
  }
  let S = null;
  function E() {
    S = be(
      () => [t.value, e],
      () => {
        n.importing || s();
      },
      { deep: !0 }
    );
  }
  function b() {
    S == null || S();
  }
  return typeof window < "u" && window.addEventListener("beforeunload", l), {
    metaList: r,
    activeCardId: a,
    currentMeta: o,
    createCard: i,
    switchCard: p,
    deleteCard: d,
    duplicateCard: c,
    renameCard: f,
    resetCurrentCard: h,
    clearAllCards: y,
    flushSave: l,
    init: w,
    startAutoSave: E,
    stopAutoSave: b
  };
}
var $r = { exports: {} };
$r.exports;
(function(t) {
  var e = function() {
    var n = String.fromCharCode, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", o = {};
    function l(i, u) {
      if (!o[i]) {
        o[i] = {};
        for (var p = 0; p < i.length; p++)
          o[i][i.charAt(p)] = p;
      }
      return o[i][u];
    }
    var s = {
      compressToBase64: function(i) {
        if (i == null) return "";
        var u = s._compress(i, 6, function(p) {
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
        for (var u = s.compress(i), p = new Uint8Array(u.length * 2), d = 0, c = u.length; d < c; d++) {
          var f = u.charCodeAt(d);
          p[d * 2] = f >>> 8, p[d * 2 + 1] = f % 256;
        }
        return p;
      },
      //decompress from uint8array (UCS-2 big endian format)
      decompressFromUint8Array: function(i) {
        if (i == null)
          return s.decompress(i);
        for (var u = new Array(i.length / 2), p = 0, d = u.length; p < d; p++)
          u[p] = i[p * 2] * 256 + i[p * 2 + 1];
        var c = [];
        return u.forEach(function(f) {
          c.push(n(f));
        }), s.decompress(c.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(i) {
        return i == null ? "" : s._compress(i, 6, function(u) {
          return a.charAt(u);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(i) {
        return i == null ? "" : i == "" ? null : (i = i.replace(/ /g, "+"), s._decompress(i.length, 32, function(u) {
          return l(a, i.charAt(u));
        }));
      },
      compress: function(i) {
        return s._compress(i, 16, function(u) {
          return n(u);
        });
      },
      _compress: function(i, u, p) {
        if (i == null) return "";
        var d, c, f = {}, h = {}, y = "", w = "", S = "", E = 2, b = 3, v = 2, $ = [], g = 0, P = 0, I;
        for (I = 0; I < i.length; I += 1)
          if (y = i.charAt(I), Object.prototype.hasOwnProperty.call(f, y) || (f[y] = b++, h[y] = !0), w = S + y, Object.prototype.hasOwnProperty.call(f, w))
            S = w;
          else {
            if (Object.prototype.hasOwnProperty.call(h, S)) {
              if (S.charCodeAt(0) < 256) {
                for (d = 0; d < v; d++)
                  g = g << 1, P == u - 1 ? (P = 0, $.push(p(g)), g = 0) : P++;
                for (c = S.charCodeAt(0), d = 0; d < 8; d++)
                  g = g << 1 | c & 1, P == u - 1 ? (P = 0, $.push(p(g)), g = 0) : P++, c = c >> 1;
              } else {
                for (c = 1, d = 0; d < v; d++)
                  g = g << 1 | c, P == u - 1 ? (P = 0, $.push(p(g)), g = 0) : P++, c = 0;
                for (c = S.charCodeAt(0), d = 0; d < 16; d++)
                  g = g << 1 | c & 1, P == u - 1 ? (P = 0, $.push(p(g)), g = 0) : P++, c = c >> 1;
              }
              E--, E == 0 && (E = Math.pow(2, v), v++), delete h[S];
            } else
              for (c = f[S], d = 0; d < v; d++)
                g = g << 1 | c & 1, P == u - 1 ? (P = 0, $.push(p(g)), g = 0) : P++, c = c >> 1;
            E--, E == 0 && (E = Math.pow(2, v), v++), f[w] = b++, S = String(y);
          }
        if (S !== "") {
          if (Object.prototype.hasOwnProperty.call(h, S)) {
            if (S.charCodeAt(0) < 256) {
              for (d = 0; d < v; d++)
                g = g << 1, P == u - 1 ? (P = 0, $.push(p(g)), g = 0) : P++;
              for (c = S.charCodeAt(0), d = 0; d < 8; d++)
                g = g << 1 | c & 1, P == u - 1 ? (P = 0, $.push(p(g)), g = 0) : P++, c = c >> 1;
            } else {
              for (c = 1, d = 0; d < v; d++)
                g = g << 1 | c, P == u - 1 ? (P = 0, $.push(p(g)), g = 0) : P++, c = 0;
              for (c = S.charCodeAt(0), d = 0; d < 16; d++)
                g = g << 1 | c & 1, P == u - 1 ? (P = 0, $.push(p(g)), g = 0) : P++, c = c >> 1;
            }
            E--, E == 0 && (E = Math.pow(2, v), v++), delete h[S];
          } else
            for (c = f[S], d = 0; d < v; d++)
              g = g << 1 | c & 1, P == u - 1 ? (P = 0, $.push(p(g)), g = 0) : P++, c = c >> 1;
          E--, E == 0 && (E = Math.pow(2, v), v++);
        }
        for (c = 2, d = 0; d < v; d++)
          g = g << 1 | c & 1, P == u - 1 ? (P = 0, $.push(p(g)), g = 0) : P++, c = c >> 1;
        for (; ; )
          if (g = g << 1, P == u - 1) {
            $.push(p(g));
            break;
          } else P++;
        return $.join("");
      },
      decompress: function(i) {
        return i == null ? "" : i == "" ? null : s._decompress(i.length, 32768, function(u) {
          return i.charCodeAt(u);
        });
      },
      _decompress: function(i, u, p) {
        var d = [], c = 4, f = 4, h = 3, y = "", w = [], S, E, b, v, $, g, P, I = { val: p(0), position: u, index: 1 };
        for (S = 0; S < 3; S += 1)
          d[S] = S;
        for (b = 0, $ = Math.pow(2, 2), g = 1; g != $; )
          v = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = p(I.index++)), b |= (v > 0 ? 1 : 0) * g, g <<= 1;
        switch (b) {
          case 0:
            for (b = 0, $ = Math.pow(2, 8), g = 1; g != $; )
              v = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = p(I.index++)), b |= (v > 0 ? 1 : 0) * g, g <<= 1;
            P = n(b);
            break;
          case 1:
            for (b = 0, $ = Math.pow(2, 16), g = 1; g != $; )
              v = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = p(I.index++)), b |= (v > 0 ? 1 : 0) * g, g <<= 1;
            P = n(b);
            break;
          case 2:
            return "";
        }
        for (d[3] = P, E = P, w.push(P); ; ) {
          if (I.index > i)
            return "";
          for (b = 0, $ = Math.pow(2, h), g = 1; g != $; )
            v = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = p(I.index++)), b |= (v > 0 ? 1 : 0) * g, g <<= 1;
          switch (P = b) {
            case 0:
              for (b = 0, $ = Math.pow(2, 8), g = 1; g != $; )
                v = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = p(I.index++)), b |= (v > 0 ? 1 : 0) * g, g <<= 1;
              d[f++] = n(b), P = f - 1, c--;
              break;
            case 1:
              for (b = 0, $ = Math.pow(2, 16), g = 1; g != $; )
                v = I.val & I.position, I.position >>= 1, I.position == 0 && (I.position = u, I.val = p(I.index++)), b |= (v > 0 ? 1 : 0) * g, g <<= 1;
              d[f++] = n(b), P = f - 1, c--;
              break;
            case 2:
              return w.join("");
          }
          if (c == 0 && (c = Math.pow(2, h), h++), d[P])
            y = d[P];
          else if (P === f)
            y = E + E.charAt(0);
          else
            return null;
          w.push(y), d[f++] = E + y.charAt(0), c--, E = y, c == 0 && (c = Math.pow(2, h), h++);
        }
      }
    };
    return s;
  }();
  t != null ? t.exports = e : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return e;
  });
})($r);
var wu = $r.exports;
const pa = /* @__PURE__ */ sr(wu);
var bu = function() {
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
}, _u = bu, da = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, Su = "Copy to clipboard: #{key}, Enter";
function ku(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function Au(t, e) {
  var n, r, a, o, l, s, i = !1;
  e || (e = {}), n = e.debug || !1;
  try {
    a = _u(), o = document.createRange(), l = document.getSelection(), s = document.createElement("span"), s.textContent = t, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(p) {
      if (p.stopPropagation(), e.format)
        if (p.preventDefault(), typeof p.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = da[e.format] || da.default;
          window.clipboardData.setData(d, t);
        } else
          p.clipboardData.clearData(), p.clipboardData.setData(e.format, t);
      e.onCopy && (p.preventDefault(), e.onCopy(p.clipboardData));
    }), document.body.appendChild(s), o.selectNodeContents(s), l.addRange(o);
    var u = document.execCommand("copy");
    if (!u)
      throw new Error("copy command was unsuccessful");
    i = !0;
  } catch (p) {
    n && console.error("unable to copy using execCommand: ", p), n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), i = !0;
    } catch (d) {
      n && console.error("unable to copy using clipboardData: ", d), n && console.error("falling back to prompt"), r = ku("message" in e ? e.message : Su), window.prompt(r, t);
    }
  } finally {
    l && (typeof l.removeRange == "function" ? l.removeRange(o) : l.removeAllRanges()), s && document.body.removeChild(s), a();
  }
  return i;
}
var $u = Au;
const ar = /* @__PURE__ */ sr($u);
/*! Element Plus Icons Vue v2.3.1 */
var Pu = /* @__PURE__ */ F({
  name: "CloseBold",
  __name: "close-bold",
  setup(t) {
    return (e, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), Iu = Pu, xu = /* @__PURE__ */ F({
  name: "CopyDocument",
  __name: "copy-document",
  setup(t) {
    return (e, n) => (_(), x("svg", {
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
}), Eu = xu, Du = /* @__PURE__ */ F({
  name: "Delete",
  __name: "delete",
  setup(t) {
    return (e, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
      })
    ]));
  }
}), Cu = Du, Ru = /* @__PURE__ */ F({
  name: "Dessert",
  __name: "dessert",
  setup(t) {
    return (e, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416m287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48m339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736M384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64"
      })
    ]));
  }
}), Ou = Ru, Fu = /* @__PURE__ */ F({
  name: "DocumentCopy",
  __name: "document-copy",
  setup(t) {
    return (e, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M128 320v576h576V320zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32M960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32M256 672h320v64H256zm0-192h320v64H256z"
      })
    ]));
  }
}), Mu = Fu, Vu = /* @__PURE__ */ F({
  name: "Download",
  __name: "download",
  setup(t) {
    return (e, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z"
      })
    ]));
  }
}), Tu = Vu, Uu = /* @__PURE__ */ F({
  name: "FolderOpened",
  __name: "folder-opened",
  setup(t) {
    return (e, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896"
      })
    ]));
  }
}), Bu = Uu, Nu = /* @__PURE__ */ F({
  name: "More",
  __name: "more",
  setup(t) {
    return (e, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96"
      })
    ]));
  }
}), ju = Nu, zu = /* @__PURE__ */ F({
  name: "Plus",
  __name: "plus",
  setup(t) {
    return (e, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), Lu = zu, Wu = /* @__PURE__ */ F({
  name: "Reading",
  __name: "reading",
  setup(t) {
    return (e, n) => (_(), x("svg", {
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
}), Gu = Wu, Hu = /* @__PURE__ */ F({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (e, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), qu = Hu, Ju = /* @__PURE__ */ F({
  name: "Select",
  __name: "select",
  setup(t) {
    return (e, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
      })
    ]));
  }
}), Ku = Ju, Qu = /* @__PURE__ */ F({
  name: "Upload",
  __name: "upload",
  setup(t) {
    return (e, n) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z"
      })
    ]));
  }
}), io = Qu;
const Xu = /* @__PURE__ */ F({
  __name: "ActionButton",
  props: {
    fullWidth: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    tag: { default: "button" }
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => (_(), H(Pa(e.tag), {
      class: L(["action-button", {
        "action-button-full-width": e.fullWidth
      }]),
      onClick: n[0] || (n[0] = (r) => e.$emit("click", r)),
      disabled: e.disabled
    }, {
      default: O(() => [
        mt(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "disabled"]));
  }
}), U = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, a] of e)
    n[r] = a;
  return n;
}, Zu = /* @__PURE__ */ U(Xu, [["__scopeId", "data-v-b309c855"]]), Yu = /* @__PURE__ */ F({
  __name: "ControlButton",
  props: {
    label: {},
    icon: {}
  },
  emits: ["click"],
  setup(t) {
    return (e, n) => {
      const r = ve("el-icon");
      return _(), H(Zu, {
        class: "control-button",
        onClick: n[0] || (n[0] = (a) => e.$emit("click", a))
      }, {
        default: O(() => [
          k(r, { size: "0.9em" }, {
            default: O(() => [
              (_(), H(Pa(e.icon)))
            ]),
            _: 1
          }),
          De(" " + M(e.label), 1)
        ]),
        _: 1
      });
    };
  }
}), Le = /* @__PURE__ */ U(Yu, [["__scopeId", "data-v-7ceba4b3"]]), ec = { class: "control-dialog-header" }, tc = { class: "control-dialog-title" }, nc = { class: "control-dialog-header-actions" }, ft = /* @__PURE__ */ F({
  __name: "ControlDialog",
  props: {
    title: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (e, n) => {
      const r = ve("el-dialog");
      return _(), H(r, {
        class: "coc-card-control-dialog",
        "append-to-body": "",
        "align-center": "",
        modelValue: e.$props.modelValue,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => e.$emit("update:modelValue", a))
      }, {
        header: O(() => [
          m("div", ec, [
            m("span", tc, M(e.$props.title), 1),
            m("div", nc, [
              mt(e.$slots, "header-actions")
            ])
          ])
        ]),
        default: O(() => [
          mt(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["modelValue"]);
    };
  }
});
function rc(t, e) {
  if (window.downloadAndSaveFile)
    window.downloadAndSaveFile(t, e);
  else {
    const n = document.createElement("a");
    n.href = t, n.download = e, n.click();
  }
}
function ac(t, e = "image") {
  rc(t, e);
}
const oc = { class: "downloader-item" }, ic = { class: "downloader-item-preview" }, lc = ["src"], sc = {
  key: 1,
  class: "downloader-item-file"
}, uc = { key: 2 }, cc = { class: "downloader-item-info" }, pc = { class: "downloader-item-title" }, dc = { class: "preview-full-image-container" }, fc = ["src"], mc = /* @__PURE__ */ F({
  __name: "DownloaderItem",
  props: {
    title: {},
    previewImage: {},
    refreshable: { type: Boolean },
    download: {}
  },
  emits: ["refresh", "downloaded"],
  setup(t, { emit: e }) {
    const n = t, r = e, a = Z(!1), o = G(() => {
      if (!n.download) return "";
      const { name: i, type: u } = n.download;
      return `${i}${n.title}.${u}`;
    });
    function l() {
      if (!n.download) return;
      const { url: i } = n.download;
      ac(i, o.value), r("downloaded");
    }
    function s() {
      a.value = !0;
    }
    return (i, u) => {
      var p;
      return _(), x("div", oc, [
        m("div", ic, [
          i.previewImage ? (_(), x("img", {
            key: 0,
            class: "downloader-item-image",
            src: i.previewImage,
            onClick: s
          }, null, 8, lc)) : ((p = i.download) == null ? void 0 : p.type) === "txt" ? (_(), x("div", sc, M(o.value), 1)) : (_(), x("div", uc, "预览图加载失败，这不应该，请尝试刷新"))
        ]),
        m("div", cc, [
          m("div", pc, M(i.title), 1),
          m("div", {
            class: "downloader-item-button",
            onClick: l
          }, " 下载 "),
          i.refreshable ? (_(), x("div", {
            key: 0,
            class: "downloader-item-button",
            onClick: u[0] || (u[0] = (d) => i.$emit("refresh"))
          }, " 重新生成 ")) : B("", !0)
        ]),
        k(ft, {
          modelValue: a.value,
          "onUpdate:modelValue": u[1] || (u[1] = (d) => a.value = d),
          title: "预览大图"
        }, {
          default: O(() => [
            m("div", dc, [
              i.previewImage ? (_(), x("img", {
                key: 0,
                class: "preview-full-image",
                src: i.previewImage
              }, null, 8, fc)) : B("", !0)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), Un = /* @__PURE__ */ U(mc, [["__scopeId", "data-v-712d81a0"]]);
function ue() {
  return Ye("pc");
}
function $e() {
  return Ye("pageData");
}
function gn() {
  return Ye("viewData");
}
function lo() {
  return Ye("suggestion");
}
const yc = { class: "jobs-container" }, hc = { class: "job-card-header" }, vc = ["onClick"], gc = { class: "job-card-row" }, wc = { key: 0 }, bc = { class: "job-card-row" }, _c = /* @__PURE__ */ F({
  __name: "JobList",
  props: {
    label: {}
  },
  setup(t) {
    const { jobGroups: e, jobs: n } = Ut, r = ue(), a = Z([]), o = G(() => e.map((s) => ({
      name: s.name,
      items: s.jobs.map((i) => {
        const u = n.get(i.name), p = to(u.name), d = p.multiSkillTexts.map((h) => `${h}、`).join("") + p.text, { point: c, text: f } = kr(
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
    function l(s) {
      r && (r.value.job = s);
    }
    return (s, i) => {
      const u = ve("el-icon"), p = ve("el-collapse-item"), d = ve("el-collapse");
      return _(), x("div", null, [
        k(d, {
          class: "job-list",
          modelValue: a.value,
          "onUpdate:modelValue": i[0] || (i[0] = (c) => a.value = c)
        }, {
          default: O(() => [
            (_(!0), x(re, null, se(o.value, (c) => (_(), H(p, {
              key: c.name,
              title: c.name,
              name: c.name
            }, {
              default: O(() => [
                m("div", yc, [
                  (_(!0), x(re, null, se(c.items, (f) => (_(), x("div", {
                    key: f.name,
                    class: "job-card"
                  }, [
                    m("div", hc, [
                      m("span", null, M(f.name), 1),
                      m("span", null, "信用评级：" + M(f.wealth[0]) + "~" + M(f.wealth[1]), 1),
                      m("a", {
                        class: "job-card-action-use",
                        onClick: () => l(f.name)
                      }, [
                        k(u, { size: "0.9em" }, {
                          default: O(() => [
                            k(A(io))
                          ]),
                          _: 1
                        }),
                        De(" 使用 ")
                      ], 8, vc)
                    ]),
                    m("div", gc, [
                      m("span", null, "职业点数：" + M(f.pointText), 1),
                      f.pointValue ? (_(), x("span", wc, " (当前结果: " + M(f.pointValue) + ") ", 1)) : B("", !0)
                    ]),
                    m("div", bc, "本职技能：" + M(f.skillText), 1)
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
}), Sc = /* @__PURE__ */ U(_c, [["__scopeId", "data-v-b7a2614c"]]), kc = { class: "weapons-container" }, Ac = { class: "weapon-card-header" }, $c = { class: "weapon-card-row" }, Pc = { class: "weapon-card-row" }, Ic = { class: "weapon-card-row weapon-card-row-4" }, xc = ["onClick"], Ec = /* @__PURE__ */ F({
  __name: "WeaponList",
  props: {
    label: {}
  },
  setup(t) {
    const e = Io, n = ue(), r = Z([]), a = G(() => {
      const c = new Map(
        Sr.map((f) => [
          f.name,
          {
            ...f,
            range: `${Number(f.range)}` === f.range ? `${f.range}m` : f.range
          }
        ])
      );
      return Za.map(([f, h]) => ({
        name: h,
        groupKey: f,
        items: Xa[f].map((y) => c.get(y))
      }));
    });
    function o(c) {
      return `${Number(c)}` === c ? `${c}m` : c || "N/A";
    }
    const l = Z([]), s = Z(-1), i = Z(!1);
    function u(c) {
      const f = c.target, h = l.value.findIndex((y) => y.el === f);
      h !== -1 && (s.value = h, i.value = !0);
    }
    function p() {
      i.value = !1;
    }
    function d(c, f) {
      !n || !f || (n.value.weapons[c] = f);
    }
    return (c, f) => {
      var E;
      const h = ve("el-icon"), y = ve("el-collapse-item"), w = ve("el-collapse"), S = ve("el-popover");
      return _(), x("div", null, [
        k(w, {
          class: "weapon-list",
          modelValue: r.value,
          "onUpdate:modelValue": f[0] || (f[0] = (b) => r.value = b)
        }, {
          default: O(() => [
            (_(!0), x(re, null, se(a.value, (b) => (_(), H(y, {
              key: b.groupKey,
              title: b.name,
              name: b.groupKey
            }, {
              default: O(() => [
                m("div", kc, [
                  (_(!0), x(re, null, se(b.items, (v) => (_(), x("div", {
                    key: v.name,
                    class: "weapon-card"
                  }, [
                    m("div", Ac, [
                      m("span", null, "【" + M(v.name) + "】" + M(v.skill), 1),
                      Be((_(), x("a", {
                        class: "job-card-action job-card-action-use",
                        ref_for: !0,
                        ref: ($) => {
                          l.value.push({
                            el: $,
                            weapon: v
                          });
                        },
                        onClick: u
                      }, [
                        k(h, {
                          size: "0.9em",
                          class: "job-card-action-use-icon"
                        }, {
                          default: O(() => [
                            k(A(io))
                          ]),
                          _: 1
                        }),
                        De(" 使用 ")
                      ])), [
                        [A(e), p]
                      ])
                    ]),
                    m("div", $c, [
                      m("span", null, "伤害：" + M(v.dam), 1),
                      m("span", null, "次数：" + M(v.round || "N/A"), 1),
                      m("span", null, M(v.tho ? "贯穿" : "非贯穿"), 1)
                    ]),
                    m("div", Pc, [
                      m("span", null, "射程：" + M(o(v.range)), 1),
                      m("span", null, "装弹量：" + M(v.num || "N/A"), 1),
                      m("span", null, "故障率：" + M(v.err || "N/A"), 1)
                    ]),
                    m("div", Ic, [
                      m("span", null, "年代：" + M(v.time), 1),
                      m("span", null, "价格：" + M(v.price || "N/A"), 1)
                    ])
                  ]))), 128))
                ])
              ]),
              _: 2
            }, 1032, ["title", "name"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        k(S, {
          placement: "left-start",
          "popper-class": "weapon-card-places-container",
          trigger: "click",
          "virtual-triggering": "",
          visible: i.value,
          width: 200,
          "virtual-ref": (E = l.value[s.value]) == null ? void 0 : E.el
        }, {
          default: O(() => [
            (_(), x(re, null, se(5, (b) => m("a", {
              key: b,
              class: "job-card-action",
              onClick: (v) => {
                var $;
                return d(b - 1, ($ = l.value[s.value]) == null ? void 0 : $.weapon);
              }
            }, M(b), 9, xc)), 64))
          ]),
          _: 1
        }, 8, ["visible", "virtual-ref"])
      ]);
    };
  }
}), Dc = /* @__PURE__ */ U(Ec, [["__scopeId", "data-v-d9cdfa7f"]]), Cc = (t) => (Re("data-v-c3fb6b3e"), t = t(), Oe(), t), Rc = { class: "modal-body" }, Oc = { class: "group" }, Fc = /* @__PURE__ */ Cc(() => /* @__PURE__ */ m("div", null, "录卡指令", -1)), Mc = /* @__PURE__ */ F({
  __name: "DiceMaid",
  setup(t) {
    const e = ue(), n = gn(), r = G(
      () => ".st " + (e && n ? Gs(e.value, n) : "")
    ), a = Z(!1);
    function o() {
      a.value = !0;
    }
    function l(i) {
      var u;
      (u = i.target) == null || u.select();
    }
    function s() {
      ar(r.value), de.success("已复制录卡指令");
    }
    return (i, u) => {
      const p = ve("el-input");
      return _(), x(re, null, [
        k(Le, {
          label: "骰娘",
          icon: A(Ou),
          onClick: o
        }, null, 8, ["icon"]),
        k(ft, {
          title: "骰娘相关",
          modelValue: a.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => a.value = d)
        }, {
          default: O(() => [
            m("div", Rc, [
              m("div", Oc, [
                m("div", { class: "label" }, [
                  Fc,
                  m("div", null, [
                    m("a", {
                      class: "link",
                      onClick: s
                    }, " 复制 ")
                  ])
                ]),
                k(p, {
                  type: "textarea",
                  rows: 5,
                  value: r.value,
                  readonly: "",
                  onFocus: l
                }, null, 8, ["value"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), Vc = /* @__PURE__ */ U(Mc, [["__scopeId", "data-v-c3fb6b3e"]]);
function Tc(t, e) {
  if (t.match(/^[a-z]+:\/\//i))
    return t;
  if (t.match(/^\/\//))
    return window.location.protocol + t;
  if (t.match(/^[a-z]+:/i))
    return t;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), a = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(a), e && (r.href = e), a.href = t, a.href;
}
const Uc = /* @__PURE__ */ (() => {
  let t = 0;
  const e = () => (
    // eslint-disable-next-line no-bitwise
    `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4)
  );
  return () => (t += 1, `u${e()}${t}`);
})();
function Me(t) {
  const e = [];
  for (let n = 0, r = t.length; n < r; n++)
    e.push(t[n]);
  return e;
}
function dn(t, e) {
  const r = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function Bc(t) {
  const e = dn(t, "border-left-width"), n = dn(t, "border-right-width");
  return t.clientWidth + e + n;
}
function Nc(t) {
  const e = dn(t, "border-top-width"), n = dn(t, "border-bottom-width");
  return t.clientHeight + e + n;
}
function so(t, e = {}) {
  const n = e.width || Bc(t), r = e.height || Nc(t);
  return { width: n, height: r };
}
function jc() {
  let t, e;
  try {
    e = process;
  } catch {
  }
  const n = e && e.env ? e.env.devicePixelRatio : null;
  return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
}
const Se = 16384;
function zc(t) {
  (t.width > Se || t.height > Se) && (t.width > Se && t.height > Se ? t.width > t.height ? (t.height *= Se / t.width, t.width = Se) : (t.width *= Se / t.height, t.height = Se) : t.width > Se ? (t.height *= Se / t.width, t.width = Se) : (t.width *= Se / t.height, t.height = Se));
}
function fn(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.decode = () => e(r), r.onload = () => e(r), r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = t;
  });
}
async function Lc(t) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
}
async function Wc(t, e, n) {
  const r = "http://www.w3.org/2000/svg", a = document.createElementNS(r, "svg"), o = document.createElementNS(r, "foreignObject");
  return a.setAttribute("width", `${e}`), a.setAttribute("height", `${n}`), a.setAttribute("viewBox", `0 0 ${e} ${n}`), o.setAttribute("width", "100%"), o.setAttribute("height", "100%"), o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("externalResourcesRequired", "true"), a.appendChild(o), o.appendChild(t), Lc(a);
}
const _e = (t, e) => {
  if (t instanceof e)
    return !0;
  const n = Object.getPrototypeOf(t);
  return n === null ? !1 : n.constructor.name === e.name || _e(n, e);
};
function Gc(t) {
  const e = t.getPropertyValue("content");
  return `${t.cssText} content: '${e.replace(/'|"/g, "")}';`;
}
function Hc(t) {
  return Me(t).map((e) => {
    const n = t.getPropertyValue(e), r = t.getPropertyPriority(e);
    return `${e}: ${n}${r ? " !important" : ""};`;
  }).join(" ");
}
function qc(t, e, n) {
  const r = `.${t}:${e}`, a = n.cssText ? Gc(n) : Hc(n);
  return document.createTextNode(`${r}{${a}}`);
}
function fa(t, e, n) {
  const r = window.getComputedStyle(t, n), a = r.getPropertyValue("content");
  if (a === "" || a === "none")
    return;
  const o = Uc();
  try {
    e.className = `${e.className} ${o}`;
  } catch {
    return;
  }
  const l = document.createElement("style");
  l.appendChild(qc(o, n, r)), e.appendChild(l);
}
function Jc(t, e) {
  fa(t, e, ":before"), fa(t, e, ":after");
}
const ma = "application/font-woff", ya = "image/jpeg", Kc = {
  woff: ma,
  woff2: ma,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: ya,
  jpeg: ya,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function Qc(t) {
  const e = /\.([^./]*?)$/g.exec(t);
  return e ? e[1] : "";
}
function Pr(t) {
  const e = Qc(t).toLowerCase();
  return Kc[e] || "";
}
function Xc(t) {
  return t.split(/,/)[1];
}
function or(t) {
  return t.search(/^(data:)/) !== -1;
}
function Zc(t, e) {
  return `data:${e};base64,${t}`;
}
async function uo(t, e, n) {
  const r = await fetch(t, e);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const a = await r.blob();
  return new Promise((o, l) => {
    const s = new FileReader();
    s.onerror = l, s.onloadend = () => {
      try {
        o(n({ res: r, result: s.result }));
      } catch (i) {
        l(i);
      }
    }, s.readAsDataURL(a);
  });
}
const Bn = {};
function Yc(t, e, n) {
  let r = t.replace(/\?.*/, "");
  return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? `[${e}]${r}` : r;
}
async function Ir(t, e, n) {
  const r = Yc(t, e, n.includeQueryParams);
  if (Bn[r] != null)
    return Bn[r];
  n.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (/* @__PURE__ */ new Date()).getTime());
  let a;
  try {
    const o = await uo(t, n.fetchRequestInit, ({ res: l, result: s }) => (e || (e = l.headers.get("Content-Type") || ""), Xc(s)));
    a = Zc(o, e);
  } catch (o) {
    a = n.imagePlaceholder || "";
    let l = `Failed to fetch resource: ${t}`;
    o && (l = typeof o == "string" ? o : o.message), l && console.warn(l);
  }
  return Bn[r] = a, a;
}
async function ep(t) {
  const e = t.toDataURL();
  return e === "data:," ? t.cloneNode(!1) : fn(e);
}
async function tp(t, e) {
  if (t.currentSrc) {
    const o = document.createElement("canvas"), l = o.getContext("2d");
    o.width = t.clientWidth, o.height = t.clientHeight, l == null || l.drawImage(t, 0, 0, o.width, o.height);
    const s = o.toDataURL();
    return fn(s);
  }
  const n = t.poster, r = Pr(n), a = await Ir(n, r, e);
  return fn(a);
}
async function np(t) {
  var e;
  try {
    if (!((e = t == null ? void 0 : t.contentDocument) === null || e === void 0) && e.body)
      return await wn(t.contentDocument.body, {}, !0);
  } catch {
  }
  return t.cloneNode(!1);
}
async function rp(t, e) {
  return _e(t, HTMLCanvasElement) ? ep(t) : _e(t, HTMLVideoElement) ? tp(t, e) : _e(t, HTMLIFrameElement) ? np(t) : t.cloneNode(!1);
}
const ap = (t) => t.tagName != null && t.tagName.toUpperCase() === "SLOT";
async function op(t, e, n) {
  var r, a;
  let o = [];
  return ap(t) && t.assignedNodes ? o = Me(t.assignedNodes()) : _e(t, HTMLIFrameElement) && (!((r = t.contentDocument) === null || r === void 0) && r.body) ? o = Me(t.contentDocument.body.childNodes) : o = Me(((a = t.shadowRoot) !== null && a !== void 0 ? a : t).childNodes), o.length === 0 || _e(t, HTMLVideoElement) || await o.reduce((l, s) => l.then(() => wn(s, n)).then((i) => {
    i && e.appendChild(i);
  }), Promise.resolve()), e;
}
function ip(t, e) {
  const n = e.style;
  if (!n)
    return;
  const r = window.getComputedStyle(t);
  r.cssText ? (n.cssText = r.cssText, n.transformOrigin = r.transformOrigin) : Me(r).forEach((a) => {
    let o = r.getPropertyValue(a);
    a === "font-size" && o.endsWith("px") && (o = `${Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1}px`), _e(t, HTMLIFrameElement) && a === "display" && o === "inline" && (o = "block"), a === "d" && e.getAttribute("d") && (o = `path(${e.getAttribute("d")})`), n.setProperty(a, o, r.getPropertyPriority(a));
  });
}
function lp(t, e) {
  _e(t, HTMLTextAreaElement) && (e.innerHTML = t.value), _e(t, HTMLInputElement) && e.setAttribute("value", t.value);
}
function sp(t, e) {
  if (_e(t, HTMLSelectElement)) {
    const n = e, r = Array.from(n.children).find((a) => t.value === a.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function up(t, e) {
  return _e(e, Element) && (ip(t, e), Jc(t, e), lp(t, e), sp(t, e)), e;
}
async function cp(t, e) {
  const n = t.querySelectorAll ? t.querySelectorAll("use") : [];
  if (n.length === 0)
    return t;
  const r = {};
  for (let o = 0; o < n.length; o++) {
    const s = n[o].getAttribute("xlink:href");
    if (s) {
      const i = t.querySelector(s), u = document.querySelector(s);
      !i && u && !r[s] && (r[s] = await wn(u, e, !0));
    }
  }
  const a = Object.values(r);
  if (a.length) {
    const o = "http://www.w3.org/1999/xhtml", l = document.createElementNS(o, "svg");
    l.setAttribute("xmlns", o), l.style.position = "absolute", l.style.width = "0", l.style.height = "0", l.style.overflow = "hidden", l.style.display = "none";
    const s = document.createElementNS(o, "defs");
    l.appendChild(s);
    for (let i = 0; i < a.length; i++)
      s.appendChild(a[i]);
    t.appendChild(l);
  }
  return t;
}
async function wn(t, e, n) {
  return !n && e.filter && !e.filter(t) ? null : Promise.resolve(t).then((r) => rp(r, e)).then((r) => op(t, r, e)).then((r) => up(t, r)).then((r) => cp(r, e));
}
const co = /url\((['"]?)([^'"]+?)\1\)/g, pp = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, dp = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function fp(t) {
  const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g");
}
function mp(t) {
  const e = [];
  return t.replace(co, (n, r, a) => (e.push(a), n)), e.filter((n) => !or(n));
}
async function yp(t, e, n, r, a) {
  try {
    const o = n ? Tc(e, n) : e, l = Pr(e);
    let s;
    return a || (s = await Ir(o, l, r)), t.replace(fp(e), `$1${s}$3`);
  } catch {
  }
  return t;
}
function hp(t, { preferredFontFormat: e }) {
  return e ? t.replace(dp, (n) => {
    for (; ; ) {
      const [r, , a] = pp.exec(n) || [];
      if (!a)
        return "";
      if (a === e)
        return `src: ${r};`;
    }
  }) : t;
}
function po(t) {
  return t.search(co) !== -1;
}
async function fo(t, e, n) {
  if (!po(t))
    return t;
  const r = hp(t, n);
  return mp(r).reduce((o, l) => o.then((s) => yp(s, l, e, n)), Promise.resolve(r));
}
async function Jt(t, e, n) {
  var r;
  const a = (r = e.style) === null || r === void 0 ? void 0 : r.getPropertyValue(t);
  if (a) {
    const o = await fo(a, null, n);
    return e.style.setProperty(t, o, e.style.getPropertyPriority(t)), !0;
  }
  return !1;
}
async function vp(t, e) {
  await Jt("background", t, e) || await Jt("background-image", t, e), await Jt("mask", t, e) || await Jt("mask-image", t, e);
}
async function gp(t, e) {
  const n = _e(t, HTMLImageElement);
  if (!(n && !or(t.src)) && !(_e(t, SVGImageElement) && !or(t.href.baseVal)))
    return;
  const r = n ? t.src : t.href.baseVal, a = await Ir(r, Pr(r), e);
  await new Promise((o, l) => {
    t.onload = o, t.onerror = l;
    const s = t;
    s.decode && (s.decode = o), s.loading === "lazy" && (s.loading = "eager"), n ? (t.srcset = "", t.src = a) : t.href.baseVal = a;
  });
}
async function wp(t, e) {
  const r = Me(t.childNodes).map((a) => mo(a, e));
  await Promise.all(r).then(() => t);
}
async function mo(t, e) {
  _e(t, Element) && (await vp(t, e), await gp(t, e), await wp(t, e));
}
function bp(t, e) {
  const { style: n } = t;
  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
  const r = e.style;
  return r != null && Object.keys(r).forEach((a) => {
    n[a] = r[a];
  }), t;
}
const ha = {};
async function va(t) {
  let e = ha[t];
  if (e != null)
    return e;
  const r = await (await fetch(t)).text();
  return e = { url: t, cssText: r }, ha[t] = e, e;
}
async function ga(t, e) {
  let n = t.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, o = (n.match(/url\([^)]+\)/g) || []).map(async (l) => {
    let s = l.replace(r, "$1");
    return s.startsWith("https://") || (s = new URL(s, t.url).href), uo(s, e.fetchRequestInit, ({ result: i }) => (n = n.replace(l, `url(${i})`), [l, i]));
  });
  return Promise.all(o).then(() => n);
}
function wa(t) {
  if (t == null)
    return [];
  const e = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let r = t.replace(n, "");
  const a = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const i = a.exec(r);
    if (i === null)
      break;
    e.push(i[0]);
  }
  r = r.replace(a, "");
  const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, l = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", s = new RegExp(l, "gi");
  for (; ; ) {
    let i = o.exec(r);
    if (i === null) {
      if (i = s.exec(r), i === null)
        break;
      o.lastIndex = s.lastIndex;
    } else
      s.lastIndex = o.lastIndex;
    e.push(i[0]);
  }
  return e;
}
async function _p(t, e) {
  const n = [], r = [];
  return t.forEach((a) => {
    if ("cssRules" in a)
      try {
        Me(a.cssRules || []).forEach((o, l) => {
          if (o.type === CSSRule.IMPORT_RULE) {
            let s = l + 1;
            const i = o.href, u = va(i).then((p) => ga(p, e)).then((p) => wa(p).forEach((d) => {
              try {
                a.insertRule(d, d.startsWith("@import") ? s += 1 : a.cssRules.length);
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
      } catch (o) {
        const l = t.find((s) => s.href == null) || document.styleSheets[0];
        a.href != null && r.push(va(a.href).then((s) => ga(s, e)).then((s) => wa(s).forEach((i) => {
          l.insertRule(i, a.cssRules.length);
        })).catch((s) => {
          console.error("Error loading remote stylesheet", s);
        })), console.error("Error inlining remote css file", o);
      }
  }), Promise.all(r).then(() => (t.forEach((a) => {
    if ("cssRules" in a)
      try {
        Me(a.cssRules || []).forEach((o) => {
          n.push(o);
        });
      } catch (o) {
        console.error(`Error while reading CSS rules from ${a.href}`, o);
      }
  }), n));
}
function Sp(t) {
  return t.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => po(e.style.getPropertyValue("src")));
}
async function kp(t, e) {
  if (t.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Me(t.ownerDocument.styleSheets), r = await _p(n, e);
  return Sp(r);
}
async function Ap(t, e) {
  const n = await kp(t, e);
  return (await Promise.all(n.map((a) => {
    const o = a.parentStyleSheet ? a.parentStyleSheet.href : null;
    return fo(a.cssText, o, e);
  }))).join(`
`);
}
async function $p(t, e) {
  const n = e.fontEmbedCSS != null ? e.fontEmbedCSS : e.skipFonts ? null : await Ap(t, e);
  if (n) {
    const r = document.createElement("style"), a = document.createTextNode(n);
    r.appendChild(a), t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r);
  }
}
async function Pp(t, e = {}) {
  const { width: n, height: r } = so(t, e), a = await wn(t, e, !0);
  return await $p(a, e), await mo(a, e), bp(a, e), await Wc(a, n, r);
}
async function Ip(t, e = {}) {
  const { width: n, height: r } = so(t, e), a = await Pp(t, e), o = await fn(a), l = document.createElement("canvas"), s = l.getContext("2d"), i = e.pixelRatio || jc(), u = e.canvasWidth || n, p = e.canvasHeight || r;
  return l.width = u * i, l.height = p * i, e.skipAutoScale || zc(l), l.style.width = `${u}`, l.style.height = `${p}`, e.backgroundColor && (s.fillStyle = e.backgroundColor, s.fillRect(0, 0, l.width, l.height)), s.drawImage(o, 0, 0, l.width, l.height), l;
}
async function xp(t, e = {}) {
  return (await Ip(t, e)).toDataURL("image/jpeg", e.quality || 1);
}
const Kt = 210 * 8, Qt = 297 * 8;
async function ba(t) {
  if (!t) return "";
  const e = await xp(t, {
    pixelRatio: 2,
    quality: 1,
    skipFonts: !0
  }), n = await Ep(e), r = Math.min(Kt / n.naturalWidth, Qt / n.naturalHeight), a = Math.round(n.naturalWidth * r), o = Math.round(n.naturalHeight * r), l = Math.round((Kt - a) / 2), s = Math.round((Qt - o) / 2), i = document.createElement("canvas");
  i.width = Kt, i.height = Qt;
  const u = i.getContext("2d");
  return u.fillStyle = "#fff", u.fillRect(0, 0, Kt, Qt), u.drawImage(n, l, s, a, o), i.toDataURL("image/jpeg", 0.5);
}
function Ep(t) {
  return new Promise((e, n) => {
    const r = new Image();
    r.onload = () => e(r), r.onerror = n, r.src = t;
  });
}
async function Dp({
  paperEls: t,
  paperKey: e
}) {
  return new Promise((n) => {
    Ue(async () => {
      const r = {};
      (e === void 0 || e === "front") && (r.front = await ba(t.front)), (e === void 0 || e === "back") && (r.back = await ba(t.back)), n(r);
    });
  });
}
function Cp(t) {
  const e = Ce({
    front: "",
    back: ""
  });
  async function n(r) {
    if (!t.front || !t.back) throw "Setup Error: `paperEls` not exists";
    return Dp({
      paperEls: t,
      paperKey: r
    }).then((a) => (Object.assign(e, a), e));
  }
  return {
    paperImages: e,
    printPaper: n
  };
}
const Rp = (t) => (Re("data-v-86631343"), t = t(), Oe(), t), Op = { class: "card-tabs" }, Fp = /* @__PURE__ */ Rp(() => /* @__PURE__ */ m("span", { class: "card-tab-new-text" }, "新建", -1)), Mp = ["onClick", "onDblclick"], Vp = {
  key: 1,
  class: "card-tab-name"
}, Tp = ["onClick"], Up = ["onClick"], Bp = /* @__PURE__ */ F({
  __name: "CardManager",
  props: {
    metaList: {},
    activeCardId: {}
  },
  emits: ["create-card", "switch-card", "delete-card", "duplicate-card", "rename-card"],
  setup(t, { emit: e }) {
    const n = e, r = $e(), a = Z(null), o = Z("");
    async function l(d) {
      try {
        await Ea.confirm("确定要删除该角色卡吗？此操作不可撤销。", "警告", {
          confirmButtonText: "删除",
          cancelButtonText: "取消",
          type: "warning"
        }), n("delete-card", d);
      } catch {
      }
    }
    function s(d) {
      a.value = d.id, o.value = d.saveName;
    }
    function i() {
      a.value && o.value.trim() && n("rename-card", a.value, o.value.trim()), a.value = null;
    }
    function u(d) {
      return d.name && d.name !== "未命名角色卡" ? d.name : d.saveName;
    }
    function p() {
      a.value = null;
    }
    return (d, c) => {
      var h;
      const f = ve("el-icon");
      return _(), x("div", {
        class: L(["card-manager", { "printing-image": (h = A(r)) == null ? void 0 : h.printing }])
      }, [
        m("div", Op, [
          m("div", {
            class: "card-tab card-tab-new",
            onClick: c[0] || (c[0] = (y) => n("create-card"))
          }, [
            k(f, { size: 14 }, {
              default: O(() => [
                k(A(Lu))
              ]),
              _: 1
            }),
            Fp
          ]),
          (_(!0), x(re, null, se(d.metaList, (y) => (_(), x("div", {
            key: y.id,
            class: L(["card-tab", { "card-tab-active": y.id === d.activeCardId }]),
            onClick: (w) => n("switch-card", y.id),
            onDblclick: (w) => s(y)
          }, [
            a.value === y.id ? Be((_(), x("input", {
              key: 0,
              class: "card-tab-input",
              "onUpdate:modelValue": c[1] || (c[1] = (w) => o.value = w),
              onBlur: i,
              onKeyup: [
                Cr(i, ["enter"]),
                Cr(p, ["escape"])
              ],
              onClick: c[2] || (c[2] = It(() => {
              }, ["stop"]))
            }, null, 544)), [
              [Ia, o.value]
            ]) : (_(), x("span", Vp, M(u(y)), 1)),
            m("span", {
              class: "card-tab-btn",
              onClick: It((w) => n("duplicate-card", y.id), ["stop"]),
              title: "复制"
            }, [
              k(f, { size: 10 }, {
                default: O(() => [
                  k(A(Eu))
                ]),
                _: 1
              })
            ], 8, Tp),
            m("span", {
              class: L(["card-tab-btn card-tab-delete", { "card-tab-delete-mobile": y.id !== d.activeCardId }]),
              onClick: It((w) => l(y.id), ["stop"]),
              title: "删除"
            }, [
              k(f, { size: 12 }, {
                default: O(() => [
                  k(A(Cu))
                ]),
                _: 1
              })
            ], 10, Up)
          ], 42, Mp))), 128))
        ])
      ], 2);
    };
  }
}), Np = /* @__PURE__ */ U(Bp, [["__scopeId", "data-v-86631343"]]);
async function jp(t) {
  var e;
  if (typeof window < "u" && ((e = window.uni) != null && e.share))
    try {
      return await window.uni.share({ content: t }), !0;
    } catch (n) {
      return console.warn("uni.share 失败:", n), de.error("分享失败"), !1;
    }
  if (typeof navigator < "u" && navigator.share)
    try {
      return await navigator.share({ text: t }), !0;
    } catch (n) {
      const r = n;
      return (r == null ? void 0 : r.name) !== "AbortError" ? (de.error("分享失败"), !1) : !0;
    }
  return de.info("当前环境不支持系统分享"), !1;
}
function St() {
  const t = $e();
  return G(() => !(t != null && t.printing) && Ot.value === "mobile");
}
const zp = (t) => (Re("data-v-03b88ecd"), t = t(), Oe(), t), Lp = { class: "control-section" }, Wp = { class: "main-controls" }, Gp = { class: "more-controls" }, Hp = { class: "downloader-body" }, qp = { class: "downloader-items" }, Jp = { class: "in-out-modal-body" }, Kp = { class: "in-out-modal-panel" }, Qp = { class: "in-out-modal-actions" }, Xp = { class: "in-out-modal-panel" }, Zp = { class: "in-out-modal-actions" }, Yp = { class: "archive-header-actions" }, ed = /* @__PURE__ */ zp(() => /* @__PURE__ */ m("span", { class: "archive-toggle-label" }, "覆盖模式", -1)), td = /* @__PURE__ */ F({
  __name: "ControlSection",
  props: {
    paperEls: {}
  },
  emits: ["switch-paper"],
  setup(t, { expose: e, emit: n }) {
    const r = t, a = n, o = Ar(), l = G({
      get: () => o.getItem("importOverwriteMode") ?? !0,
      set: (R) => o.setItem("importOverwriteMode", R)
    }), s = ue(), i = gn(), u = $e(), p = St(), d = Z(window.innerHeight > window.innerWidth);
    function c() {
      d.value = window.innerHeight > window.innerWidth;
    }
    ir(() => window.addEventListener("resize", c)), Ao(() => window.removeEventListener("resize", c));
    const f = G(
      () => p.value || !(u != null && u.printing) && d.value
    ), h = Ye("cardManager"), y = Z(""), w = G(() => {
      const R = JSON.stringify({
        pc: s == null ? void 0 : s.value,
        viewData: {
          ...i
          // showingChildSkills,
        }
      });
      return pa.compressToEncodedURIComponent(R);
    }), S = G(() => {
      const R = new Blob([w.value], { type: "text/plain;charset=utf-8" });
      return URL.createObjectURL(R);
    }), E = Z(!1), b = Z(!1), v = Z(!1), $ = Z("features"), g = Z(!1);
    function P() {
      a("switch-paper");
    }
    const { paperImages: I, printPaper: T } = Cp(r.paperEls), C = G(() => {
      const { name: R, playerName: D } = (s == null ? void 0 : s.value) || {}, ne = "", ae = [R, D].filter((ee) => ee).join("-");
      return `${ne}${ae}${ae ? "-" : ""}`;
    });
    function V(R) {
      if (u) {
        if (u.printing) {
          de.info("已经在运行啦，请不要同时多次生成图片");
          return;
        }
        u.printing = !0, de.info({
          message: "图片生成中，页面会有轻微抖动，请稍候…",
          duration: 1e3,
          onClose() {
            T(R).then(() => {
              b.value = !0, u.printing = !1;
            });
          }
        });
      }
    }
    function q() {
      v.value = !v.value;
    }
    function Q() {
      if (!s || !i) return;
      const R = Ye("cardManager", null);
      R ? R.resetCurrentCard() : (s.value = Ce(He()), qs(i), Ue(() => {
        o.removeItem("autoSaved");
      })), de.info("已重置人物卡"), v.value = !1;
    }
    function Y() {
      E.value = !0;
    }
    function J() {
      ar(w.value), de.success("已复制到剪贴板");
    }
    async function ie() {
      ar(w.value), await jp(w.value);
    }
    function X() {
      const R = pa.decompressFromEncodedURIComponent(y.value), D = JSON.parse(R);
      if (D && D.viewData && D.pc && i && s)
        try {
          l.value || h.createCard(), u && (u.importing = !0);
          const { pc: ne, showingChildSkillsPatch: ae } = He(D.pc, !0);
          if (s.value = ne, Object.keys(D.viewData).forEach((ee) => {
            const ce = ee;
            i[ce] = D.viewData[ce];
          }), ae)
            for (const [ee, ce] of Object.entries(ae))
              i.showingChildSkills[ee] = ce;
          de.success(
            l.value ? "已覆盖当前角色卡" : "已导入到新存档"
          ), E.value = !1, v.value = !1;
        } catch {
          de.error("数据有误，无法导入。页面可能因此受损，建议刷新");
        }
      else
        de.error("数据有误，无法导入");
      u && (u.importing = !1);
    }
    async function W() {
      try {
        const R = await navigator.clipboard.readText();
        R ? (y.value = R, de.success("已读取剪贴板内容")) : de.info("剪贴板为空");
      } catch {
        de.error("无法读取剪贴板，请检查权限");
      }
    }
    async function K() {
      try {
        await Ea.confirm(
          "确定要清空所有存档吗？此操作不可撤销，所有角色卡数据将被删除。",
          "警告",
          {
            confirmButtonText: "清空",
            cancelButtonText: "取消",
            type: "warning"
          }
        ), h.clearAllCards(), de.success("已清空所有存档");
      } catch {
      }
    }
    return e({ inData: y, applyInData: X, copyOutData: J }), (R, D) => {
      const ne = ve("el-tab-pane"), ae = ve("el-tabs"), ee = ve("el-input"), ce = ve("el-button"), Fe = ve("el-switch");
      return _(), x("div", Lp, [
        m("div", Wp, [
          k(Le, {
            label: "数据",
            icon: A(Mu),
            onClick: Y
          }, null, 8, ["icon"]),
          k(Vc),
          k(Le, {
            label: "更多",
            icon: A(ju),
            onClick: q
          }, null, 8, ["icon"]),
          k(Le, {
            label: "翻面",
            icon: A(Gu),
            onClick: P
          }, null, 8, ["icon"])
        ]),
        v.value ? (_(), H(ae, {
          key: 0,
          class: "more-container",
          modelValue: $.value,
          "onUpdate:modelValue": D[2] || (D[2] = (te) => $.value = te)
        }, {
          default: O(() => [
            k(ne, {
              class: "more-pane",
              label: "更多功能",
              name: "features"
            }, {
              default: O(() => [
                m("div", Gp, [
                  k(Le, {
                    label: "重置人物卡",
                    icon: A(qu),
                    onClick: Q
                  }, null, 8, ["icon"]),
                  k(Le, {
                    label: "保存",
                    icon: A(Tu),
                    onClick: D[0] || (D[0] = () => V())
                  }, null, 8, ["icon"]),
                  k(Le, {
                    label: "存档管理",
                    icon: A(Bu),
                    onClick: D[1] || (D[1] = (te) => g.value = !0)
                  }, null, 8, ["icon"])
                ])
              ]),
              _: 1
            }),
            k(ne, {
              class: "more-pane more-pane-less",
              label: "职业列表",
              name: "jobs"
            }, {
              default: O(() => [
                k(Sc)
              ]),
              _: 1
            }),
            k(ne, {
              class: "more-pane more-pane-less",
              label: "武器列表",
              name: "weapons"
            }, {
              default: O(() => [
                k(Dc)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : B("", !0),
        k(ft, {
          modelValue: b.value,
          "onUpdate:modelValue": D[5] || (D[5] = (te) => b.value = te),
          title: "下载图片/数据"
        }, {
          default: O(() => [
            m("div", Hp, [
              m("div", qp, [
                k(Un, {
                  title: "正面",
                  refreshable: "",
                  previewImage: A(I).front,
                  download: {
                    url: A(I).front,
                    name: C.value,
                    type: "jpg"
                  },
                  onRefresh: D[3] || (D[3] = () => V("front"))
                }, null, 8, ["previewImage", "download"]),
                k(Un, {
                  title: "背面",
                  refreshable: "",
                  previewImage: A(I).back,
                  download: {
                    url: A(I).back,
                    name: C.value,
                    type: "jpg"
                  },
                  onRefresh: D[4] || (D[4] = () => V("back"))
                }, null, 8, ["previewImage", "download"]),
                k(Un, {
                  title: "车卡数据",
                  download: {
                    url: S.value,
                    name: "COC",
                    type: "txt"
                  }
                }, null, 8, ["download"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        k(ft, {
          modelValue: E.value,
          "onUpdate:modelValue": D[7] || (D[7] = (te) => E.value = te),
          title: "数据",
          onClosed: D[8] || (D[8] = (te) => y.value = "")
        }, {
          default: O(() => [
            m("div", Jp, [
              m("div", Kp, [
                k(ee, {
                  type: "textarea",
                  value: w.value,
                  rows: 16,
                  readonly: !0,
                  resize: "none"
                }, null, 8, ["value"]),
                m("div", Qp, [
                  k(ce, {
                    type: "primary",
                    onClick: J
                  }, {
                    default: O(() => [
                      De(" 复制以上内容 ")
                    ]),
                    _: 1
                  }),
                  f.value ? (_(), H(ce, {
                    key: 0,
                    type: "primary",
                    onClick: ie
                  }, {
                    default: O(() => [
                      De(" 分享 ")
                    ]),
                    _: 1
                  })) : B("", !0)
                ])
              ]),
              m("div", Xp, [
                k(ee, {
                  type: "textarea",
                  modelValue: y.value,
                  "onUpdate:modelValue": D[6] || (D[6] = (te) => y.value = te),
                  rows: 16,
                  placeholder: "将文本粘贴到这里",
                  resize: "none"
                }, null, 8, ["modelValue"]),
                m("div", Zp, [
                  k(ce, {
                    type: "primary",
                    onClick: X
                  }, {
                    default: O(() => [
                      De(" 导入以上内容 ")
                    ]),
                    _: 1
                  }),
                  k(ce, {
                    type: "primary",
                    onClick: W
                  }, {
                    default: O(() => [
                      De(" 读取剪贴板 ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        k(ft, {
          modelValue: g.value,
          "onUpdate:modelValue": D[11] || (D[11] = (te) => g.value = te),
          title: "存档管理"
        }, {
          "header-actions": O(() => [
            m("div", Yp, [
              ed,
              k(Fe, {
                modelValue: l.value,
                "onUpdate:modelValue": D[9] || (D[9] = (te) => l.value = te),
                size: "small"
              }, null, 8, ["modelValue"]),
              k(ce, {
                type: "danger",
                size: "small",
                plain: "",
                onClick: K
              }, {
                default: O(() => [
                  De(" 清空存档 ")
                ]),
                _: 1
              })
            ])
          ]),
          default: O(() => [
            k(Np, {
              metaList: A(h).metaList.value,
              activeCardId: A(h).activeCardId.value,
              onCreateCard: A(h).createCard,
              onSwitchCard: A(h).switchCard,
              onDeleteCard: A(h).deleteCard,
              onDuplicateCard: A(h).duplicateCard,
              onRenameCard: D[10] || (D[10] = (te, Pe) => A(h).renameCard(te, Pe))
            }, null, 8, ["metaList", "activeCardId", "onCreateCard", "onSwitchCard", "onDeleteCard", "onDuplicateCard"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), _a = /* @__PURE__ */ U(td, [["__scopeId", "data-v-03b88ecd"]]), nd = /* @__PURE__ */ F({
  __name: "PaperLayout",
  props: {
    setRef: {}
  },
  setup(t) {
    const e = $e();
    return (n, r) => {
      var a;
      return _(), x("div", {
        class: L(["paper theme-light", {
          "printing-image": (a = A(e)) == null ? void 0 : a.printing
        }])
      }, [
        m("div", {
          class: "paper-content",
          ref: n.setRef
        }, [
          mt(n.$slots, "default", {}, void 0, !0)
        ], 512)
      ], 2);
    };
  }
}), yo = /* @__PURE__ */ U(nd, [["__scopeId", "data-v-73873656"]]), rd = { class: "paper-section" }, ad = { class: "heading" }, od = { class: "title" }, id = { class: "subtitle" }, ld = { class: "body" }, sd = /* @__PURE__ */ F({
  __name: "PaperSection",
  props: {
    title: {},
    subTitle: {},
    centered: { type: Boolean, default: !0 }
  },
  setup(t) {
    return (e, n) => (_(), x("div", rd, [
      m("div", {
        class: L(["header", {
          "header-centered": e.centered
        }])
      }, [
        mt(e.$slots, "header", {}, () => [
          m("h1", ad, [
            m("span", od, M(e.title), 1),
            m("span", id, M(e.subTitle), 1)
          ])
        ], !0)
      ], 2),
      m("div", ld, [
        mt(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), we = /* @__PURE__ */ U(sd, [["__scopeId", "data-v-a68d9331"]]), ud = { class: "label" }, cd = { class: "label-title" }, pd = {
  key: 0,
  class: "label-hint"
}, dd = ["placeholder", "readonly", "value"], fd = /* @__PURE__ */ F({
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
    const e = t, n = $e(), r = Ce({
      width: `${e.char}em`
    });
    return (a, o) => {
      var l, s;
      return _(), x("div", {
        class: L(["writable-row", {
          "writable-row-with-hint": !!a.hint,
          "printing-image": (l = A(n)) == null ? void 0 : l.printing
        }])
      }, [
        m("div", ud, [
          m("div", cd, M(a.label), 1),
          a.hint ? (_(), x("div", pd, M(a.hint), 1)) : B("", !0)
        ]),
        m("input", {
          type: "text",
          class: "input",
          style: Ln(r),
          placeholder: (s = A(n)) != null && s.printing ? "" : a.placeholder,
          readonly: a.readonly,
          value: a.modelValue,
          onInput: o[0] || (o[0] = (i) => a.$emit("update:modelValue", i.target.value)),
          onFocus: o[1] || (o[1] = (i) => a.$emit("focus")),
          onBlur: o[2] || (o[2] = (i) => a.$emit("blur"))
        }, null, 44, dd)
      ], 2);
    };
  }
}), he = /* @__PURE__ */ U(fd, [["__scopeId", "data-v-1b667523"]]), md = { class: "flatten-tree" }, yd = { class: "group-label" }, hd = { class: "options" }, vd = ["onClick"], gd = /* @__PURE__ */ F({
  __name: "FlattenTree",
  props: {
    tree: {}
  },
  emits: ["select"],
  setup(t) {
    return (e, n) => (_(), x("div", md, [
      (_(!0), x(re, null, se(e.tree, (r) => (_(), x("div", {
        class: "group",
        key: r.key
      }, [
        m("div", yd, M(r.label), 1),
        m("div", hd, [
          (_(!0), x(re, null, se(r.children, (a) => (_(), x("a", {
            class: "option",
            key: a.key,
            onClick: (o) => e.$emit("select", a, r)
          }, M(a.label), 9, vd))), 128))
        ])
      ]))), 128))
    ]));
  }
}), ho = /* @__PURE__ */ U(gd, [["__scopeId", "data-v-3998604b"]]), xr = {
  mounted(t, e) {
    t._clickOutsideEvent = function(n) {
      t === n.target || t.contains(n.target) || e.value(n, t);
    }, document.addEventListener("click", t._clickOutsideEvent);
  },
  unmounted: function(e) {
    document.removeEventListener("click", e._clickOutsideEvent);
  }
}, wd = { class: "info-row" }, bd = { class: "info-row info-row--time-job" }, _d = { class: "rel" }, Sd = {
  key: 0,
  class: "job-selector"
}, kd = { class: "job-selector-header" }, Ad = { class: "info-row" }, $d = { class: "info-col" }, Pd = { class: "info-col" }, Id = /* @__PURE__ */ F({
  __name: "InvestigatorSection",
  setup(t) {
    const e = ue(), n = $e(), { jobGroups: r } = Ut, a = Z(!1), o = Z("");
    function l() {
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
    const i = St(), u = G(() => {
      const d = o.value;
      return r.reduce((f, h) => {
        const { name: y, pinyin: w, jobs: S } = h, E = i.value ? y.replace(/\//g, " ") : y, b = S.reduce(
          (v, $) => ((!d || y.includes(d) || w.includes(d) || $.name.includes(d) || $.pinyin.includes(d)) && v.push({ label: $.name, key: $.name }), v),
          []
        );
        return b.length && f.push({
          label: E,
          key: y,
          children: b
        }), f;
      }, []);
    });
    function p(d) {
      e && (e.value.job = d, s());
    }
    return (d, c) => A(e) ? (_(), H(we, {
      key: 0,
      title: "调查员"
    }, {
      default: O(() => {
        var f;
        return [
          m("div", {
            class: L(["info-section", {
              "printing-image": (f = A(n)) == null ? void 0 : f.printing
            }])
          }, [
            m("div", wd, [
              k(he, {
                label: "姓名",
                char: 5.5,
                modelValue: A(e).name,
                "onUpdate:modelValue": c[0] || (c[0] = (h) => A(e).name = h)
              }, null, 8, ["modelValue"]),
              k(he, {
                label: "玩家",
                char: 5.5,
                modelValue: A(e).playerName,
                "onUpdate:modelValue": c[1] || (c[1] = (h) => A(e).playerName = h)
              }, null, 8, ["modelValue"])
            ]),
            m("div", bd, [
              k(he, {
                label: "时代",
                modelValue: A(e).time,
                "onUpdate:modelValue": c[2] || (c[2] = (h) => A(e).time = h)
              }, null, 8, ["modelValue"]),
              Be((_(), x("div", _d, [
                k(he, {
                  label: "职业",
                  modelValue: A(e).job,
                  "onUpdate:modelValue": c[3] || (c[3] = (h) => A(e).job = h),
                  onFocus: l
                }, null, 8, ["modelValue"]),
                k(lr, { name: "slide-up" }, {
                  default: O(() => [
                    a.value ? (_(), x("div", Sd, [
                      m("div", kd, [
                        Be(m("input", {
                          class: "job-search-input",
                          type: "text",
                          placeholder: "输入职业名称或拼音可以进行搜索",
                          "onUpdate:modelValue": c[4] || (c[4] = (h) => o.value = h)
                        }, null, 512), [
                          [Ia, o.value]
                        ])
                      ]),
                      k(ho, {
                        tree: u.value,
                        onSelect: c[5] || (c[5] = (h) => p(h.label))
                      }, null, 8, ["tree"])
                    ])) : B("", !0)
                  ]),
                  _: 1
                })
              ])), [
                [A(xr), s]
              ])
            ]),
            m("div", Ad, [
              m("div", $d, [
                k(he, {
                  label: "年龄",
                  char: 4,
                  modelValue: A(e).age,
                  "onUpdate:modelValue": c[6] || (c[6] = (h) => A(e).age = h)
                }, null, 8, ["modelValue"]),
                k(he, {
                  label: "性别",
                  char: 4,
                  modelValue: A(e).gender,
                  "onUpdate:modelValue": c[7] || (c[7] = (h) => A(e).gender = h)
                }, null, 8, ["modelValue"])
              ]),
              m("div", Pd, [
                k(he, {
                  label: "住地",
                  char: 5,
                  modelValue: A(e).location,
                  "onUpdate:modelValue": c[8] || (c[8] = (h) => A(e).location = h)
                }, null, 8, ["modelValue"]),
                k(he, {
                  label: "故乡",
                  char: 5,
                  modelValue: A(e).hometown,
                  "onUpdate:modelValue": c[9] || (c[9] = (h) => A(e).hometown = h)
                }, null, 8, ["modelValue"])
              ])
            ])
          ], 2)
        ];
      }),
      _: 1
    })) : B("", !0);
  }
}), xd = /* @__PURE__ */ U(Id, [["__scopeId", "data-v-7dfee973"]]), Ed = (t) => (Re("data-v-2ab95738"), t = t(), Oe(), t), Dd = { class: "info-section" }, Cd = { class: "attributes-grid" }, Rd = { class: "attributes-group attributes-group--left" }, Od = /* @__PURE__ */ Ed(() => /* @__PURE__ */ m("div", { class: "divider" }, null, -1)), Fd = { class: "attributes-group attributes-group--right" }, Md = { class: "attributes-actions" }, Vd = {
  key: 0,
  class: "ponits-sum"
}, Td = {
  key: 0,
  class: "ponits-sum ponits-sum--mobile"
}, Ud = /* @__PURE__ */ F({
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
    ], a = [...n, ...r], o = G(() => {
      if (!e) return 0;
      const { str: s, con: i, dex: u, app: p, pow: d, siz: c, edu: f, int: h } = e.value.attributes, y = [s, i, u, p, d, c, f, h];
      return y.every((S) => S) ? y.reduce((S, E) => S + (E || 0), 0) : 0;
    });
    function l(s, i) {
      e && (e.value.attributes[s] = i ? +i : void 0);
    }
    return (s, i) => A(e) ? (_(), H(we, {
      key: 0,
      title: "属性"
    }, {
      default: O(() => [
        m("div", Dd, [
          m("div", Cd, [
            (_(), x(re, null, se(a, (u) => {
              var p;
              return k(he, {
                key: u.key,
                label: u.label,
                modelValue: `${((p = A(e)) == null ? void 0 : p.attributes[u.key]) ?? ""}`,
                "onUpdate:modelValue": (d) => l(u.key, d)
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
            }), 64))
          ]),
          m("div", Rd, [
            (_(), x(re, null, se(n, (u) => {
              var p;
              return k(he, {
                key: u.key,
                label: u.label,
                modelValue: `${((p = A(e)) == null ? void 0 : p.attributes[u.key]) ?? ""}`,
                "onUpdate:modelValue": (d) => l(u.key, d)
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
            }), 64))
          ]),
          Od,
          m("div", Fd, [
            (_(), x(re, null, se(r, (u) => {
              var p;
              return k(he, {
                key: u.key,
                label: u.label,
                modelValue: `${((p = A(e)) == null ? void 0 : p.attributes[u.key]) ?? ""}`,
                "onUpdate:modelValue": (d) => l(u.key, d)
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
            }), 64)),
            m("div", Md, [
              o.value ? (_(), x("div", Vd, "总点数 " + M(o.value), 1)) : B("", !0)
            ])
          ]),
          o.value ? (_(), x("div", Td, "总点数 " + M(o.value), 1)) : B("", !0)
        ])
      ]),
      _: 1
    })) : B("", !0);
  }
}), Bd = /* @__PURE__ */ U(Ud, [["__scopeId", "data-v-2ab95738"]]), Nd = /* @__PURE__ */ F({
  __name: "AvatarSection",
  setup(t) {
    const e = Z(!1);
    return (n, r) => {
      const a = ve("AvatarModalContent");
      return _(), H(ft, {
        class: "coc-card-avatar-modal",
        title: "设置形象",
        modelValue: e.value,
        "onUpdate:modelValue": r[1] || (r[1] = (o) => e.value = o)
      }, {
        default: O(() => [
          k(a, {
            onFinished: r[0] || (r[0] = (o) => e.value = !1)
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), jd = /* @__PURE__ */ U(Nd, [["__scopeId", "data-v-67a8d568"]]), zd = { class: "status-checkbox" }, Ld = ["checked"], Wd = { class: "label" }, Gd = /* @__PURE__ */ F({
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
    return (a, o) => (_(), x("label", zd, [
      m("input", {
        type: "checkbox",
        class: "checkbox",
        checked: a.checked,
        onChange: r
      }, null, 40, Ld),
      m("div", Wd, M(a.label), 1)
    ]));
  }
}), Xt = /* @__PURE__ */ U(Gd, [["__scopeId", "data-v-a1461803"]]), Hd = { class: "san-status-section" }, qd = /* @__PURE__ */ F({
  __name: "DeriveSections",
  setup(t) {
    const e = ue();
    return (n, r) => A(e) ? (_(), H(we, {
      key: 0,
      title: "精神状态"
    }, {
      default: O(() => {
        var a, o;
        return [
          m("div", Hd, [
            k(Xt, {
              label: "精神固化",
              checked: !!((o = (a = A(e).status) == null ? void 0 : a.mental) != null && o.hardened),
              onCheck: r[0] || (r[0] = (l) => {
                A(e) && (A(e).status.mental.hardened = l);
              })
            }, null, 8, ["checked"]),
            k(Xt, { label: "临时疯狂" }),
            k(Xt, { label: "永久疯狂" }),
            k(Xt, { label: "不定性疯狂" })
          ])
        ];
      }),
      _: 1
    })) : B("", !0);
  }
}), Jd = /* @__PURE__ */ U(qd, [["__scopeId", "data-v-64ff3fdc"]]), vo = (t) => (Re("data-v-1c2f875c"), t = t(), Oe(), t), Kd = {
  key: 0,
  class: "suggestion-content"
}, Qd = /* @__PURE__ */ vo(() => /* @__PURE__ */ m("span", null, "默认本职技能：", -1)), Xd = { class: "multi-skill-text" }, Zd = /* @__PURE__ */ vo(() => /* @__PURE__ */ m("span", null, "、", -1)), Yd = /* @__PURE__ */ F({
  __name: "HintSection",
  setup(t) {
    const e = lo(), n = $e();
    return (r, a) => {
      var o, l;
      return _(), x("div", {
        class: L(["hint-section", {
          "printing-image": (o = A(n)) == null ? void 0 : o.printing
        }])
      }, [
        (l = A(e)) != null && l.text ? (_(), x("div", Kd, [
          Qd,
          (_(!0), x(re, null, se(A(e).multiSkillTexts, (s) => (_(), x(re, { key: s }, [
            m("span", Xd, M(s), 1),
            Zd
          ], 64))), 128)),
          m("span", null, M(A(e).text), 1)
        ])) : B("", !0)
      ], 2);
    };
  }
}), ef = /* @__PURE__ */ U(Yd, [["__scopeId", "data-v-1c2f875c"]]), tf = ["checked"], nf = /* @__PURE__ */ F({
  __name: "SoxCheckbox",
  props: {
    checked: { type: Boolean, default: !1 },
    xOnFalse: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["check", "change"],
  setup(t, { emit: e }) {
    const n = t, r = e, a = Z(n.checked);
    be(
      () => n.checked,
      () => {
        a.value = n.checked;
      }
    );
    function o(l) {
      if (n.disabled) return;
      const s = l.target.checked;
      a.value = s, r("check", s, l), r("change", l);
    }
    return (l, s) => {
      const i = ve("el-icon");
      return _(), x("label", {
        class: L(["sox-checkbox", { disabled: n.disabled }])
      }, [
        k(i, { size: "0.9em" }, {
          default: O(() => [
            a.value ? (_(), H(A(Ku), { key: 0 })) : B("", !0),
            !a.value && l.xOnFalse ? (_(), H(A(Iu), { key: 1 })) : B("", !0)
          ]),
          _: 1
        }),
        m("input", {
          type: "checkbox",
          class: "sox-checkbox-input",
          checked: a.value,
          onChange: o
        }, null, 40, tf)
      ], 2);
    };
  }
}), Er = /* @__PURE__ */ U(nf, [["__scopeId", "data-v-2b1a3a86"]]), rf = { class: "skill-td-label" }, af = { class: "skill-td-checkbox-label" }, of = {
  key: 0,
  class: "child-skill-display"
}, lf = { key: 0 }, sf = ["value"], uf = {
  key: 1,
  class: "child-skill-options"
}, cf = ["onClick"], pf = {
  key: 1,
  class: "skill-td-label-comments"
}, df = /* @__PURE__ */ F({
  __name: "SkillTdLabel",
  props: {
    skillName: {},
    displaySkillName: {},
    comments: {},
    childSkillData: {}
  },
  emits: ["selectChildSkill"],
  setup(t, { emit: e }) {
    const n = t, r = ue(), a = $e(), o = Ye("viewData"), l = e, s = Z(!1), i = Z(null), u = Z(null), p = G(() => o == null ? void 0 : o.showingChildSkills[n.skillName]), d = G(() => {
      var b, v;
      return !!((v = (b = n.childSkillData) == null ? void 0 : b.list) != null && v.length);
    }), c = G(() => {
      var b, v;
      return ((v = p.value) == null ? void 0 : v[((b = n.childSkillData) == null ? void 0 : b.place) ?? -1]) ?? "";
    }), f = G(() => ["母语", "外语"].includes(n.skillName) ? [
      ...(o == null ? void 0 : o.showingChildSkills.母语) || [],
      ...(o == null ? void 0 : o.showingChildSkills.外语) || []
    ] : p.value), h = G(() => !r || !o ? !1 : r.value.proSkills.some((b) => {
      var P;
      if (typeof b == "string")
        return b === n.skillName;
      const [v, $, g] = b;
      return v === n.skillName && g === ((P = n.childSkillData) == null ? void 0 : P.place);
    }));
    function y(b) {
      if (!(!n.childSkillData || !p.value)) {
        if (h.value && r) {
          const v = r.value.proSkills.find(([$, g, P]) => {
            var I;
            return $ === n.skillName && P === ((I = n.childSkillData) == null ? void 0 : I.place);
          });
          v && typeof v != "string" && (v[1] = b);
        }
        p.value[n.childSkillData.place] = b;
      }
    }
    function w(b) {
      y(b.name), l("selectChildSkill", b), s.value = !1;
    }
    function S() {
      const b = i.value, v = u.value;
      !b || !v || (b.style.width = `${Math.max(v.offsetWidth + 2, 24)}px`);
    }
    be(c, () => Ue(S)), be(() => a == null ? void 0 : a.printing, () => Ue(S)), ir(() => Ue(S));
    function E(b) {
      if (r)
        if (b) {
          let v = n.skillName;
          n.childSkillData && (v = [n.skillName, n.childSkillData.name, n.childSkillData.place]), r.value.proSkills.push(v);
        } else
          r.value.proSkills = r.value.proSkills.filter((v) => {
            if (!n.childSkillData) return v !== n.skillName;
            const [$, g, P] = v;
            return $ !== n.skillName || P !== n.childSkillData.place;
          });
    }
    return (b, v) => {
      var $, g, P;
      return _(), x("div", rf, [
        m("label", af, [
          k(Er, {
            checked: h.value,
            onCheck: E
          }, null, 8, ["checked"])
        ]),
        m("div", null, M(b.displaySkillName), 1),
        b.childSkillData ? (_(), x("div", of, [
          b.skillName ? (_(), x("div", lf, ":")) : B("", !0),
          Be((_(), x("div", {
            class: L(["child-skill-input-container", { "child-skill-input-container--auto": d.value }])
          }, [
            m("input", {
              ref_key: "childInputRef",
              ref: i,
              type: "text",
              class: L(["child-skill-input", { "child-skill-input--auto": d.value }]),
              value: ($ = p.value) == null ? void 0 : $[b.childSkillData.place],
              onInput: v[0] || (v[0] = (I) => y(I.target.value)),
              onFocus: v[1] || (v[1] = (I) => s.value = !0)
            }, null, 42, sf),
            d.value ? (_(), x("span", {
              key: 0,
              ref_key: "mirrorRef",
              ref: u,
              class: "child-skill-mirror"
            }, M((g = p.value) == null ? void 0 : g[b.childSkillData.place]), 513)) : B("", !0),
            (P = b.childSkillData.list) != null && P.length ? Be((_(), x("div", uf, [
              (_(!0), x(re, null, se(b.childSkillData.list, (I) => {
                var T;
                return _(), x("div", {
                  key: I.name,
                  class: L(["child-skill-option", {
                    "child-skill-option-existed": (T = f.value) == null ? void 0 : T.includes(I.name)
                  }]),
                  onClick: (C) => w(I)
                }, M(I.name), 11, cf);
              }), 128))
            ], 512)), [
              [xa, s.value]
            ]) : B("", !0)
          ], 2)), [
            [A(xr), () => s.value = !1]
          ])
        ])) : B("", !0),
        b.comments ? (_(), x("div", pf, M(b.comments), 1)) : B("", !0)
      ]);
    };
  }
}), ff = /* @__PURE__ */ U(df, [["__scopeId", "data-v-6f87bf16"]]), mf = ["value", "readonly", "tabindex"], yf = /* @__PURE__ */ F({
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
    return (a, o) => (_(), x("input", {
      type: "text",
      class: "base-td-input",
      value: a.value,
      readonly: a.readonly,
      tabindex: a.readonly ? "-1" : void 0,
      onInput: o[0] || (o[0] = (l) => a.$emit("input", l.target.value)),
      onFocus: o[1] || (o[1] = (l) => a.readonly ? void 0 : r)
    }, null, 40, mf));
  }
}), We = /* @__PURE__ */ U(yf, [["__scopeId", "data-v-542bd3ff"]]), hf = { class: "skill-td-input" }, vf = /* @__PURE__ */ F({
  __name: "SkillTdInput",
  props: {
    value: { default: "" },
    checkable: { type: Boolean, default: !1 },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["input", "check"],
  setup(t) {
    return (e, n) => (_(), x("div", hf, [
      e.checkable ? (_(), H(Er, {
        key: 0,
        class: "skill-td-input-checkbox",
        checked: e.checked,
        onCheck: n[0] || (n[0] = (r) => e.$emit("check", r))
      }, null, 8, ["checked"])) : B("", !0),
      k(We, {
        class: "skill-td-input-input",
        value: e.value,
        onInput: n[1] || (n[1] = (r) => e.$emit("input", r))
      }, null, 8, ["value"])
    ]));
  }
}), Zt = /* @__PURE__ */ U(vf, [["__scopeId", "data-v-349e4cf4"]]), kt = (t) => (Re("data-v-08077392"), t = t(), Oe(), t), gf = { class: "skill-table" }, wf = /* @__PURE__ */ kt(() => /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, null, -1)), bf = /* @__PURE__ */ kt(() => /* @__PURE__ */ m("th", { class: "skill-th th-deep th-skill" }, [
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
    /* @__PURE__ */ De(" 技能 ")
  ])
], -1)), _f = /* @__PURE__ */ kt(() => /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, "职业", -1)), Sf = /* @__PURE__ */ kt(() => /* @__PURE__ */ m("th", { class: "skill-th th-light" }, "兴趣", -1)), kf = /* @__PURE__ */ kt(() => /* @__PURE__ */ m("th", { class: "skill-th th-deep" }, [
  /* @__PURE__ */ m("div", { class: "th-grow" }, "成长")
], -1)), Af = /* @__PURE__ */ kt(() => /* @__PURE__ */ m("th", { class: "skill-th th-light" }, "基准", -1)), $f = ["rowspan"], Pf = {
  key: 0,
  class: "init-placeholder"
}, If = { class: "init-placeholder-content" }, xf = { key: 1 }, Ef = {
  key: 0,
  class: "mobile-init-hint"
}, Df = {
  key: 1,
  class: "total-separation"
}, Cf = {
  key: 2,
  class: "total-value"
}, Rf = /* @__PURE__ */ F({
  __name: "SkillTable",
  props: {
    data: {},
    suggestion: {}
  },
  setup(t) {
    const e = t, n = ue(), r = gn(), a = $e();
    function o(p, d) {
      return p.reduce((f, h) => {
        const y = h.groupSkills.reduce(
          (w, S, E) => {
            const b = h.groupName === "特殊";
            let v = S.init;
            n && S.name in bt && (v = bt[S.name](n.value));
            const $ = b || E === 0, g = S.name, P = s(g), I = (P == null ? void 0 : P[1]) || {}, [T, C] = (d == null ? void 0 : d.wealth) ?? [-1, -1], V = !!(n && n.value.job), q = g === "信用评级" && V && T >= 0 && C >= 0 ? `(${T}~${C})` : "", Q = u(I, v);
            let Y = {
              key: S.name,
              skillName: S.name,
              displaySkillName: S.displayName ?? S.name,
              skillKey: S.name,
              comments: q,
              init: v,
              initPlaceholder: S.initPlaceholder,
              points: I,
              total: Q,
              totalSeparation: [Q, ~~(Q / 2), ~~(Q / 5)],
              showTotal: Q > 0 && (Q !== v || Q === I.b),
              ...$ ? {
                isGroupStart: $,
                groupName: h.groupName,
                groupSize: h.groupSkills.length
              } : {},
              ...b ? { isSpecialGroup: b, groupSize: 1 } : {}
            }, J = [...w], ie = [Y];
            if (S.group) {
              const X = S.group.show.length, W = J.find((K) => K.isGroupStart) || Y;
              W.groupSize += X - 1, ie = S.group.show.map((K, R) => {
                var Pe, ke, ze;
                const D = ((Pe = r == null ? void 0 : r.showingChildSkills[S.name]) == null ? void 0 : Pe[R]) ?? K, ne = (ke = S.group) == null ? void 0 : ke.skills.find(({ name: tt }) => tt === D);
                let ae = (ne == null ? void 0 : ne.init) ?? Y.init;
                const ee = [S.name, D, R], ce = s(ee), Fe = (ce == null ? void 0 : ce[1]) || {};
                n && !S.name && (ae = Ws(D, n.value));
                const te = u(Fe, ae);
                return {
                  ...Y,
                  // group info
                  isGroupStart: R ? !1 : Y.isGroupStart,
                  // skill info
                  key: `${S.name}:_:${R}`,
                  skillKey: ee,
                  init: ae,
                  points: Fe,
                  total: te,
                  totalSeparation: [te, ~~(te / 2), ~~(te / 5)],
                  showTotal: te > 0 && (te !== ae || te === Fe.b),
                  // child skill info
                  childSkillData: {
                    name: D,
                    place: R,
                    list: (ze = S.group) == null ? void 0 : ze.skills
                  }
                };
              });
            }
            return [...J, ...ie];
          },
          []
        );
        return [...f, ...y];
      }, []);
    }
    const l = G(() => o(e.data, e.suggestion));
    function s(p) {
      if (n)
        return n.value.skillPoints.find((d) => {
          const [c] = d;
          if (typeof p == "string")
            return p === c;
          const [f, h, y] = c, [w, S, E] = p;
          return f === w && y === E;
        });
    }
    function i(p, d, c) {
      if (!n) return;
      let f = s(p);
      f || (f = [typeof p == "string" ? p : [...p], {}], n.value.skillPoints.push(f));
      const h = f[1];
      if (typeof c == "boolean")
        h.c = c;
      else {
        const y = d;
        c ? h[y] = Number(c) : delete h[y];
      }
    }
    function u(p, d) {
      const { b: c, p: f = 0, i: h = 0, g: y = 0 } = p;
      return (c ?? d) + Number(f) + Number(h) + Number(y);
    }
    return (p, d) => {
      var c;
      return _(), x("table", gf, [
        m("thead", null, [
          m("tr", null, [
            wf,
            bf,
            m("th", {
              class: L(["skill-th th-light", { "col-base": !((c = A(a)) != null && c.printing) }])
            }, "基础", 2),
            _f,
            Sf,
            kf,
            Af
          ])
        ]),
        m("tbody", null, [
          (_(!0), x(re, null, se(l.value, (f, h) => {
            var y, w, S, E;
            return _(), x("tr", {
              key: f.skillName
            }, [
              f.isGroupStart ? (_(), x("td", {
                key: 0,
                rowspan: f.groupSize,
                class: L(["skill-td td-group-name", {
                  "td-group-name-visible": !f.isSpecialGroup,
                  "td-color-1": f.isSpecialGroup && h % 2,
                  "td-color-2": f.isSpecialGroup && (h + 1) % 2
                }])
              }, M(f.isSpecialGroup ? "" : f.groupName), 11, $f)) : B("", !0),
              m("td", {
                class: L(["skill-td td-skill-name", {
                  "td-skill-name-special": f.isSpecialGroup,
                  "td-color-1": h % 2,
                  "td-color-2": (h + 1) % 2
                }])
              }, [
                k(ff, {
                  skillName: f.skillName,
                  displaySkillName: f.displaySkillName,
                  comments: f.comments,
                  childSkillData: f.childSkillData
                }, null, 8, ["skillName", "displaySkillName", "comments", "childSkillData"])
              ], 2),
              m("td", {
                class: L(["skill-td", {
                  "col-base": !((y = A(a)) != null && y.printing),
                  "td-color-0": h % 2,
                  "td-color-1": (h + 1) % 2
                }])
              }, [
                !f.init && f.initPlaceholder ? (_(), x("div", Pf, [
                  m("span", If, M(f.initPlaceholder), 1)
                ])) : f.groupName !== "其它" ? (_(), x("span", xf, M(f.init), 1)) : (_(), H(Zt, {
                  key: 2,
                  value: `${f.points.b ?? ""}`,
                  onInput: (b) => i(f.skillKey, "b", b)
                }, null, 8, ["value", "onInput"]))
              ], 2),
              m("td", {
                class: L(["skill-td", {
                  "td-color-1": h % 2,
                  "td-color-2": (h + 1) % 2
                }])
              }, [
                k(Zt, {
                  value: `${f.points.p ?? ""}`,
                  onInput: (b) => i(f.skillKey, "p", b)
                }, null, 8, ["value", "onInput"])
              ], 2),
              m("td", {
                class: L(["skill-td", {
                  "td-color-0": h % 2,
                  "td-color-1": (h + 1) % 2
                }])
              }, [
                k(Zt, {
                  value: `${f.points.i ?? ""}`,
                  onInput: (b) => i(f.skillKey, "i", b)
                }, null, 8, ["value", "onInput"])
              ], 2),
              m("td", {
                class: L(["skill-td", {
                  "td-color-1": h % 2,
                  "td-color-2": (h + 1) % 2
                }])
              }, [
                k(Zt, {
                  checkable: !0,
                  checked: f.points.c,
                  value: `${f.points.g ?? ""}`,
                  onInput: (b) => i(f.skillKey, "g", b),
                  onCheck: (b) => i(f.skillKey, "c", b)
                }, null, 8, ["checked", "value", "onInput", "onCheck"])
              ], 2),
              m("td", {
                class: L(["skill-td", {
                  "td-color-0": h % 2,
                  "td-color-1": (h + 1) % 2
                }])
              }, [
                !f.showTotal && !((w = A(a)) != null && w.printing) ? (_(), x("span", Ef, M(f.points.b ?? f.init ?? f.initPlaceholder), 1)) : B("", !0),
                (S = A(a)) != null && S.showTotalSeparation && !((E = A(a)) != null && E.printing) ? (_(), x("span", Df, [
                  (_(!0), x(re, null, se(f.totalSeparation, (b, v) => (_(), x("span", {
                    key: v,
                    class: "total-sep"
                  }, M(b), 1))), 128))
                ])) : f.showTotal ? (_(), x("span", Cf, M(f.total), 1)) : B("", !0)
              ], 2)
            ]);
          }), 128))
        ])
      ]);
    };
  }
}), Sa = /* @__PURE__ */ U(Rf, [["__scopeId", "data-v-08077392"]]), Dr = (t) => (Re("data-v-8d100236"), t = t(), Oe(), t), Of = { class: "header skill-section-header" }, Ff = { class: "header-left points-container" }, Mf = { class: "point-container" }, Vf = {
  key: 0,
  class: "point-rest"
}, Tf = { class: "point-container" }, Uf = {
  key: 0,
  class: "point-rest"
}, Bf = /* @__PURE__ */ Dr(() => /* @__PURE__ */ m("h1", { class: "heading" }, [
  /* @__PURE__ */ m("span", { class: "title" }, "技能表")
], -1)), Nf = { class: "header-right points-container" }, jf = /* @__PURE__ */ Dr(() => /* @__PURE__ */ m("div", null, "初始技能上限", -1)), zf = { class: "point-container" }, Lf = { class: "point-container" }, Wf = { class: "skill-section-body" }, Gf = /* @__PURE__ */ Dr(() => /* @__PURE__ */ m("div", { class: "divider" }, null, -1)), ka = 6, Hf = /* @__PURE__ */ F({
  __name: "SkillSection",
  setup(t) {
    const e = ue(), n = lo(), r = $e(), a = gn();
    function o() {
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
    const l = Ce(o()), s = G(() => {
      let d = 0, c = 0;
      return e == null || e.value.skillPoints.forEach(([f, h]) => {
        d += h.p || 0, c += h.i || 0;
      }), {
        proPoint: l.pro.point - d,
        interestPoint: l.interest.point - c
      };
    });
    function i(d, c = "") {
      const f = l[d];
      if (f.str = c, f.str) {
        const h = Number(f.str);
        f.point = Number.isNaN(h) ? 0 : h;
      } else
        f.point = 0;
    }
    function u(d, c) {
      e && e.value.pointValues[d] !== c && (e.value.pointValues[d] = c);
    }
    function p(d, c) {
      const f = Number(c);
      a && a.skillLimits[d] !== f && (a.skillLimits[d] = f);
    }
    return be(
      () => ({
        job: e == null ? void 0 : e.value.job,
        attributes: e == null ? void 0 : e.value.attributes
      }),
      ({ job: d, attributes: c }) => {
        const { point: f } = kr(d, c), h = e == null ? void 0 : e.value.pointValues.pro;
        f && i("pro", h ?? `${f > 0 ? f : ""}`);
        const y = c == null ? void 0 : c.int, w = y ? `${y * 2}` : "", S = e == null ? void 0 : e.value.pointValues.interest;
        w && i("interest", S ?? w);
      },
      { deep: !0 }
    ), be(
      () => ({
        pointValues: e == null ? void 0 : e.value.pointValues,
        pro: e == null ? void 0 : e.value.pointValues.pro,
        interest: e == null ? void 0 : e.value.pointValues.interest
      }),
      ({ pointValues: d, pro: c, interest: f }, { pointValues: h, pro: y, interest: w }) => {
        if (d !== h) {
          i("pro", c ?? ""), i("interest", f ?? "");
          return;
        }
        c !== y && i("pro", c), f !== w && i("interest", f);
      },
      { deep: !0 }
    ), (d, c) => {
      var f;
      return _(), H(we, {
        class: L(["skill-section", {
          "printing-image": (f = A(r)) == null ? void 0 : f.printing
        }])
      }, {
        header: O(() => {
          var h, y, w;
          return [
            m("div", Of, [
              m("div", Ff, [
                m("div", Mf, [
                  k(he, {
                    class: "point-writer",
                    label: "职业点数",
                    placeholder: (h = A(e)) != null && h.job ? "问KP" : "",
                    char: 3,
                    modelValue: l.pro.str,
                    "onUpdate:modelValue": c[0] || (c[0] = (S) => u("pro", S))
                  }, null, 8, ["placeholder", "modelValue"]),
                  l.pro.point > 0 ? (_(), x("div", Vf, " 剩余: " + M(s.value.proPoint), 1)) : B("", !0)
                ]),
                m("div", Tf, [
                  k(he, {
                    class: "point-writer",
                    label: "兴趣点数",
                    char: 3,
                    modelValue: l.interest.str,
                    "onUpdate:modelValue": c[1] || (c[1] = (S) => u("interest", S))
                  }, null, 8, ["modelValue"]),
                  l.interest.point > 0 ? (_(), x("div", Uf, " 剩余: " + M(s.value.interestPoint), 1)) : B("", !0)
                ])
              ]),
              Bf,
              m("div", Nf, [
                jf,
                m("div", zf, [
                  k(he, {
                    class: "point-writer",
                    label: "本职",
                    char: 2,
                    modelValue: `${((y = A(a)) == null ? void 0 : y.skillLimits.pro) || ""}`,
                    "onUpdate:modelValue": c[2] || (c[2] = (S) => p("pro", S))
                  }, null, 8, ["modelValue"])
                ]),
                m("div", Lf, [
                  k(he, {
                    class: "point-writer",
                    label: "兴趣",
                    char: 2,
                    modelValue: `${((w = A(a)) == null ? void 0 : w.skillLimits.interest) || ""}`,
                    "onUpdate:modelValue": c[3] || (c[3] = (S) => p("interest", S))
                  }, null, 8, ["modelValue"])
                ])
              ])
            ])
          ];
        }),
        default: O(() => [
          m("div", Wf, [
            k(Sa, {
              data: A(er).slice(0, ka),
              suggestion: A(n)
            }, null, 8, ["data", "suggestion"]),
            Gf,
            k(Sa, {
              data: A(er).slice(ka)
            }, null, 8, ["data"])
          ])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), qf = /* @__PURE__ */ U(Hf, [["__scopeId", "data-v-8d100236"]]), Jf = ["value", "disabled"], Kf = ["value"], Qf = /* @__PURE__ */ F({
  __name: "BaseTdSelect",
  props: {
    value: { default: "" },
    options: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["change"],
  setup(t) {
    return (e, n) => (_(), x("select", {
      class: "base-td-select",
      value: e.value,
      disabled: e.disabled,
      onChange: n[0] || (n[0] = (r) => e.$emit("change", r.target.value))
    }, [
      (_(!0), x(re, null, se(e.options, (r) => (_(), x("option", {
        key: r.value,
        value: r.value
      }, M(r.label), 9, Kf))), 128))
    ], 40, Jf));
  }
}), Xf = /* @__PURE__ */ U(Qf, [["__scopeId", "data-v-2c9c2276"]]);
function Zf(t = !1) {
  const e = Z(t);
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
const Yf = { class: "weapon-section-row" }, em = { class: "show-in-print" }, tm = {
  key: 0,
  class: "wp-point-placeholder"
}, nm = /* @__PURE__ */ F({
  __name: "WeaponSectionRow",
  props: {
    index: {},
    weapon: {},
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["input", "focus"],
  setup(t) {
    const e = t, n = ue();
    function r(y, w) {
      const S = y % 2 ? 0 : 1, E = w % 2 ? 0 : 1;
      return `td-color-${S + E}`;
    }
    function a(y) {
      var v;
      const [w, S] = y.split(")")[0].split("("), E = ((v = s.value.find(($) => $.name === y)) == null ? void 0 : v.init) || 0;
      let b = 0;
      return n == null || n.value.skillPoints.some(($) => {
        const g = (
          // 投掷
          !S && w === $[0] || // 格斗 or 射击
          S && typeof $[0] != "string" && w === $[0][0] && S === $[0][1]
        );
        if (g) {
          const { p: P = 0, i: I = 0, g: T = 0 } = $[1];
          b = P + I + T;
        }
        return g;
      }), {
        initPoint: E,
        result: b ? `${E + b}` : ""
      };
    }
    const o = G(() => e.weapon || Xn()), l = G(() => a(o.value.skill)), s = G(() => er.find(({ groupName: w }) => w === "战斗").groupSkills.filter(({ name: w }) => w !== "闪避" && w !== "武术").reduce((w, S) => {
      const { name: E, init: b, group: v } = S, $ = v ? v.skills.filter(({ name: g }) => g !== "武术").map((g) => ({
        name: `${E}(${g.name})`,
        init: g.init || b
      })) : [{ name: E, init: b }];
      return [...w, ...$];
    }, [])), i = G(() => [
      { value: "", label: "" },
      ...s.value.map(({ name: y }) => ({
        value: y,
        label: y
      }))
    ]), {
      value: u,
      setTrue: p,
      setFalse: d
    } = Zf(), c = G(() => Za.map(([y, w]) => ({
      key: y,
      label: w,
      children: Xa[y].map((S) => ({
        key: S,
        label: S
      }))
    })));
    function f(y) {
      if (!n) return;
      n.value.weapons[e.index] || (n.value.weapons[e.index] = Xn());
      const w = n.value.weapons[e.index];
      y.hasOwnProperty("skill") && y.skill === "" && (y = {
        ...y,
        name: "",
        dam: "",
        range: "",
        tho: 0,
        round: "",
        num: "",
        err: ""
      }), Object.assign(w, y);
    }
    function h(y) {
      const w = Sr.find((v) => v.name === y);
      if (!w) return;
      const { price: S, time: E, ...b } = w;
      f({
        ...b
      }), d();
    }
    return (y, w) => (_(), x("div", Yf, [
      m("div", {
        class: L(["wp-td", {
          [r(y.index, 0)]: !0
        }])
      }, [
        Be((_(), x("div", {
          class: "weapon-td-name",
          onClick: w[4] || (w[4] = () => !e.readonly && A(p)())
        }, [
          k(We, {
            value: o.value.name,
            readonly: e.readonly,
            onInput: w[0] || (w[0] = (S) => f({ name: S })),
            onFocus: w[1] || (w[1] = () => !e.readonly && A(p)())
          }, null, 8, ["value", "readonly"]),
          k(lr, { name: "slide-down" }, {
            default: O(() => [
              Be(m("div", {
                class: "weapon-selector",
                onClick: w[3] || (w[3] = It(() => {
                }, ["stop"]))
              }, [
                k(ho, {
                  tree: c.value,
                  onSelect: w[2] || (w[2] = (S) => h(S.label))
                }, null, 8, ["tree"])
              ], 512), [
                [xa, A(u)]
              ])
            ]),
            _: 1
          })
        ])), [
          [A(xr), A(d)]
        ])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "has-skill": !!o.value.skill,
          [r(y.index, 1)]: !0
        }])
      }, [
        m("span", em, M(o.value.skill), 1),
        k(Xf, {
          class: "hide-in-print",
          value: o.value.skill,
          options: i.value,
          disabled: e.readonly,
          onChange: w[5] || (w[5] = (S) => f({ skill: S }))
        }, null, 8, ["value", "options", "disabled"])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 2)]: !0
        }])
      }, [
        De(M(l.value.result) + " ", 1),
        !l.value.result && l.value.initPoint ? (_(), x("span", tm, M(l.value.initPoint), 1)) : B("", !0)
      ], 2),
      m("div", {
        class: L(["wp-td", {
          [r(y.index, 3)]: !0
        }])
      }, [
        k(We, {
          value: o.value.dam,
          readonly: e.readonly,
          onInput: w[6] || (w[6] = (S) => f({ dam: S }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 4)]: !0
        }])
      }, [
        k(We, {
          value: o.value.range,
          readonly: e.readonly,
          onInput: w[7] || (w[7] = (S) => f({ range: S }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 5)]: !0
        }])
      }, [
        k(Er, {
          xOnFalse: !!o.value.name,
          checked: !!o.value.tho,
          disabled: e.readonly,
          onCheck: w[8] || (w[8] = (S) => f({ tho: +S }))
        }, null, 8, ["xOnFalse", "checked", "disabled"])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 6)]: !0
        }])
      }, [
        k(We, {
          value: o.value.round,
          readonly: e.readonly,
          onInput: w[9] || (w[9] = (S) => f({ round: S }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 7)]: !0
        }])
      }, [
        k(We, {
          value: o.value.num,
          readonly: e.readonly,
          onInput: w[10] || (w[10] = (S) => f({ num: S }))
        }, null, 8, ["value", "readonly"])
      ], 2),
      m("div", {
        class: L(["wp-td", {
          "col-mobile-hide": !0,
          [r(y.index, 8)]: !0
        }])
      }, [
        k(We, {
          value: o.value.err,
          readonly: e.readonly,
          onInput: w[11] || (w[11] = (S) => f({ err: S }))
        }, null, 8, ["value", "readonly"])
      ], 2)
    ]));
  }
}), rm = /* @__PURE__ */ U(nm, [["__scopeId", "data-v-e366836e"]]), je = (t) => (Re("data-v-52ff68fb"), t = t(), Oe(), t), am = { class: "weapon-section-body" }, om = { class: "weapon-section-row" }, im = { class: "wp-th th-deep" }, lm = /* @__PURE__ */ je(() => /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "技能", -1)), sm = /* @__PURE__ */ je(() => /* @__PURE__ */ m("div", { class: "wp-th th-deep col-mobile-hide" }, "%", -1)), um = /* @__PURE__ */ je(() => /* @__PURE__ */ m("div", { class: "wp-th th-light" }, "伤害", -1)), cm = /* @__PURE__ */ je(() => /* @__PURE__ */ m("div", { class: "wp-th th-deep col-mobile-hide" }, "射程", -1)), pm = /* @__PURE__ */ je(() => /* @__PURE__ */ m("div", { class: "wp-th th-light col-mobile-hide" }, "贯穿", -1)), dm = /* @__PURE__ */ je(() => /* @__PURE__ */ m("div", { class: "wp-th th-deep col-mobile-hide" }, "次数", -1)), fm = /* @__PURE__ */ je(() => /* @__PURE__ */ m("div", { class: "wp-th th-light col-mobile-hide" }, "装弹量", -1)), mm = /* @__PURE__ */ je(() => /* @__PURE__ */ m("div", { class: "wp-th th-deep col-mobile-hide" }, "故障", -1)), ym = /* @__PURE__ */ F({
  __name: "WeaponSection",
  setup(t) {
    const e = ue(), n = St(), r = G(() => Array.from({ length: 4 }).map((a, o) => (e == null ? void 0 : e.value.weapons[o]) || void 0));
    return (a, o) => (_(), H(we, { title: "武器" }, {
      default: O(() => [
        m("div", am, [
          m("div", om, [
            m("div", im, M(A(n) ? "名称" : "武器名称"), 1),
            lm,
            sm,
            um,
            cm,
            pm,
            dm,
            fm,
            mm
          ]),
          (_(!0), x(re, null, se(r.value, (l, s) => (_(), H(rm, {
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
}), hm = /* @__PURE__ */ U(ym, [["__scopeId", "data-v-52ff68fb"]]), vm = {
  key: 0,
  class: "battle-section-body"
}, gm = /* @__PURE__ */ F({
  __name: "BattleSection",
  setup(t) {
    const e = ue();
    return be(
      () => e == null ? void 0 : e.value.attributes,
      () => {
        if (!e) return;
        const { str: n, siz: r, dex: a } = e.value.attributes, o = Number(e.value.age);
        if (n && r) {
          const l = n + r;
          if (l < 65)
            e.value.battleAttributes.db = "-2", e.value.battleAttributes.size = "-2";
          else if (l < 85)
            e.value.battleAttributes.db = "-1", e.value.battleAttributes.size = "-1";
          else if (l < 125)
            e.value.battleAttributes.db = "0", e.value.battleAttributes.size = "0";
          else if (l < 165)
            e.value.battleAttributes.db = "1D4", e.value.battleAttributes.size = "1";
          else if (l < 205)
            e.value.battleAttributes.db = "1D6", e.value.battleAttributes.size = "2";
          else {
            const s = Math.floor((l - 205) / 80) + 2;
            e.value.battleAttributes.db = `${s}D6`, e.value.battleAttributes.size = `${s + 1}`;
          }
        }
        if (n && r && a) {
          let l = 8;
          if (n < r && a < r ? l = 7 : n > r && a > r ? l = 9 : l = 8, o >= 40) {
            const s = Math.floor((o - 40) / 10) + 1;
            l -= s;
          }
          e.value.battleAttributes.mov = `${l}`;
        }
      },
      { deep: !0 }
    ), (n, r) => (_(), H(we, { title: "战斗" }, {
      default: O(() => [
        A(e) ? (_(), x("div", vm, [
          k(he, {
            label: "DB",
            modelValue: A(e).battleAttributes.db,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => A(e).battleAttributes.db = a),
            char: 4
          }, null, 8, ["modelValue"]),
          k(he, {
            label: "体格",
            modelValue: A(e).battleAttributes.size,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => A(e).battleAttributes.size = a),
            char: 4
          }, null, 8, ["modelValue"]),
          k(he, {
            label: "移动力",
            modelValue: A(e).battleAttributes.mov,
            "onUpdate:modelValue": r[2] || (r[2] = (a) => A(e).battleAttributes.mov = a),
            char: 4
          }, null, 8, ["modelValue"])
        ])) : B("", !0)
      ]),
      _: 1
    }));
  }
}), wm = /* @__PURE__ */ U(gm, [["__scopeId", "data-v-67319d57"]]), bm = { class: "writable-unit" }, _m = { class: "label" }, Sm = ["value", "readonly"], km = /* @__PURE__ */ F({
  __name: "WritableUnit",
  props: {
    label: {},
    modelValue: { default: "" },
    readonly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(t) {
    return (e, n) => (_(), x("div", bm, [
      m("div", _m, M(e.label), 1),
      m("input", {
        type: "text",
        class: "input",
        value: e.modelValue,
        readonly: e.readonly,
        onInput: n[0] || (n[0] = (r) => e.$emit("update:modelValue", r.target.value))
      }, null, 40, Sm)
    ]));
  }
}), it = /* @__PURE__ */ U(km, [["__scopeId", "data-v-75e07f49"]]), Am = {}, $m = (t) => (Re("data-v-be8afd85"), t = t(), Oe(), t), Pm = { class: "writable-divider" }, Im = /* @__PURE__ */ $m(() => /* @__PURE__ */ m("div", { class: "writable-divider-line" }, null, -1)), xm = [
  Im
];
function Em(t, e) {
  return _(), x("div", Pm, xm);
}
const Nn = /* @__PURE__ */ U(Am, [["render", Em], ["__scopeId", "data-v-be8afd85"]]), Dm = { class: "section-row" }, Cm = { class: "derive-column sanity-column" }, Rm = { class: "units-section" }, Om = { class: "derive-column hp-mp-column" }, Fm = { class: "units-section" }, Mm = { class: "units-section" }, Vm = { class: "section-row" }, Tm = /* @__PURE__ */ F({
  __name: "PaperFront",
  props: {
    setRef: {}
  },
  setup(t) {
    const e = ue(), n = St();
    function r(o, l, s) {
      !e || !e.value.deriveAttributes || (e.value.deriveAttributes[o][l] = s || void 0);
    }
    const a = G(() => {
      var p;
      if (!e || !e.value.attributes.pow) return "";
      const o = (p = e.value.skillPoints.find(([d]) => d === "克苏鲁神话")) == null ? void 0 : p[1], { p: l = 0, i: s = 0, g: i = 0 } = o || {};
      return `${99 - (o ? l + s + i : 0)}`;
    });
    return (o, l) => (_(), H(yo, { setRef: o.setRef }, {
      default: O(() => [
        m("div", Dm, [
          k(xd, { class: "investigator-section" }),
          k(Bd, { class: "attributes-section" }),
          m("div", Cm, [
            k(we, { title: "理智值" }, {
              default: O(() => {
                var s, i, u;
                return [
                  m("div", Rm, [
                    k(it, {
                      label: A(n) ? "当前" : "当前理智",
                      modelValue: `${((u = (i = (s = A(e)) == null ? void 0 : s.deriveAttributes) == null ? void 0 : i.sanity) == null ? void 0 : u.now) ?? ""}`,
                      "onUpdate:modelValue": l[0] || (l[0] = (p) => r("sanity", "now", p))
                    }, null, 8, ["label", "modelValue"]),
                    k(Nn),
                    k(it, {
                      label: A(n) ? "最大" : "最大理智",
                      modelValue: a.value,
                      readonly: ""
                    }, null, 8, ["label", "modelValue"])
                  ])
                ];
              }),
              _: 1
            }),
            k(Jd)
          ]),
          m("div", Om, [
            k(we, { title: "生命值" }, {
              default: O(() => {
                var s, i, u, p, d, c;
                return [
                  m("div", Fm, [
                    k(it, {
                      label: "当前生命",
                      modelValue: `${((u = (i = (s = A(e)) == null ? void 0 : s.deriveAttributes) == null ? void 0 : i.hp) == null ? void 0 : u.now) ?? ""}`,
                      "onUpdate:modelValue": l[1] || (l[1] = (f) => r("hp", "now", f))
                    }, null, 8, ["modelValue"]),
                    k(Nn),
                    k(it, {
                      label: "最大生命",
                      modelValue: `${((c = (d = (p = A(e)) == null ? void 0 : p.deriveAttributes) == null ? void 0 : d.hp) == null ? void 0 : c.start) ?? ""}`,
                      "onUpdate:modelValue": l[2] || (l[2] = (f) => r("hp", "start", f))
                    }, null, 8, ["modelValue"])
                  ])
                ];
              }),
              _: 1
            }),
            k(we, { title: "魔法值" }, {
              default: O(() => {
                var s, i, u, p, d, c;
                return [
                  m("div", Mm, [
                    k(it, {
                      label: "当前魔法",
                      modelValue: `${((u = (i = (s = A(e)) == null ? void 0 : s.deriveAttributes) == null ? void 0 : i.mp) == null ? void 0 : u.now) ?? ""}`,
                      "onUpdate:modelValue": l[3] || (l[3] = (f) => r("mp", "now", f))
                    }, null, 8, ["modelValue"]),
                    k(Nn),
                    k(it, {
                      label: "最大魔法",
                      modelValue: `${((c = (d = (p = A(e)) == null ? void 0 : p.deriveAttributes) == null ? void 0 : d.mp) == null ? void 0 : c.start) ?? ""}`,
                      "onUpdate:modelValue": l[4] || (l[4] = (f) => r("mp", "start", f))
                    }, null, 8, ["modelValue"])
                  ])
                ];
              }),
              _: 1
            })
          ]),
          k(jd)
        ]),
        k(ef),
        k(qf),
        m("div", Vm, [
          k(hm, { class: "col-0" }),
          k(wm)
        ])
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), Aa = /* @__PURE__ */ U(Tm, [["__scopeId", "data-v-dcc6fc63"]]), go = (t) => (Re("data-v-c5341c4d"), t = t(), Oe(), t), Um = { class: "label" }, Bm = ["rows", "placeholder", "value", "maxlength", "readonly"], Nm = /* @__PURE__ */ go(() => /* @__PURE__ */ m("div", { class: "line-row" }, null, -1)), jm = /* @__PURE__ */ go(() => /* @__PURE__ */ m("div", { class: "line" }, null, -1)), zm = /* @__PURE__ */ F({
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
    const n = t, r = e, a = $e(), o = G(() => {
      const i = n.label.length, u = n.size === "small" ? i / 0.8 : i;
      return {
        textIndent: u ? `${u + 0.4}em` : void 0
      };
    }), l = Z(null);
    function s(i = !1) {
      const u = l.value;
      u && Ue(() => {
        u.scrollHeight > u.clientHeight && (r("oversize"), i || s(!0));
      });
    }
    return be(
      () => [n.modelValue, a == null ? void 0 : a.printing],
      () => s()
    ), $o(() => {
      s();
    }), (i, u) => {
      var p, d;
      return _(), x("div", {
        class: L(["writable-area", {
          "printing-image": (p = A(a)) == null ? void 0 : p.printing
        }])
      }, [
        m("div", Um, M(i.label), 1),
        m("textarea", {
          class: L(["input", {
            "input-size-small": n.size === "small"
          }]),
          ref_key: "inputEl",
          ref: l,
          style: Ln(o.value),
          rows: i.rows,
          placeholder: (d = A(a)) != null && d.printing ? "" : i.placeholder,
          value: i.modelValue,
          maxlength: i.maxlength,
          readonly: i.readonly,
          onInput: u[0] || (u[0] = (c) => i.$emit("update:modelValue", c.target.value))
        }, null, 46, Bm),
        m("div", {
          class: L(["lines", {
            "lines-size-small": n.size === "small"
          }])
        }, [
          Nm,
          (_(!0), x(re, null, se(i.rows, (c) => (_(), x("div", {
            class: "line-row",
            key: c
          }, [
            c === 1 && i.label ? (_(), x("div", {
              key: 0,
              class: "line-row-label",
              style: Ln({
                width: `${i.label.length}em`
              })
            }, null, 4)) : B("", !0),
            jm
          ]))), 128))
        ], 2)
      ], 2);
    };
  }
}), Ae = /* @__PURE__ */ U(zm, [["__scopeId", "data-v-c5341c4d"]]), Lm = { class: "story-section-body" }, Wm = { class: "story-section-column col-2" }, Gm = { class: "story-section-column col-3" }, jn = 3, zn = 4, Hm = /* @__PURE__ */ F({
  __name: "StorySection",
  setup(t) {
    const e = ue(), n = $e(), r = Ce([
      { label: "形象描述", fieldName: "app" },
      { label: "思想与信念", fieldName: "belief" },
      { label: "重要之人", fieldName: "IPerson" },
      { label: "意义非凡之地", fieldName: "IPlace" },
      { label: "宝贵之物", fieldName: "IItem" },
      { label: "伤口与疤痕", fieldName: "scar" },
      { label: "精神症状", fieldName: "mad" },
      { label: "特质", fieldName: "trait" }
    ]), a = Ce([]), o = St(), l = Ce({ fieldName: "desc", size: "base" }), s = G(() => {
      const p = r.length - a.length, d = p * ~~(l.size === "base" ? jn : zn), c = l.size === "base" ? 0 : ~~(p / 6), f = d + c;
      return o.value ? Math.ceil(f / 2) : f;
    }), i = Z();
    function u(p) {
      var d;
      (d = i.value) == null || d.close(), n != null && n.printing || (p.size === "small" ? i.value = de.error("文字内容超出可显示的尺寸，如需打印，建议删减内容") : i.value = de.warning("检测到内容较多，已为您调整文字为小尺寸")), p.size = "small";
    }
    return be(
      () => e == null ? void 0 : e.value.stories,
      () => {
        [...r, ...a, l].forEach((p) => {
          p.fieldName && !(e != null && e.value.stories[p.fieldName]) && (p.size = "base");
        });
      },
      {
        deep: !0
      }
    ), (p, d) => A(e) ? (_(), H(we, {
      key: 0,
      title: "背景故事"
    }, {
      default: O(() => [
        m("div", Lm, [
          m("div", Wm, [
            (_(!0), x(re, null, se(r, (c) => (_(), H(Ae, {
              key: c.fieldName,
              label: c.label,
              modelValue: A(e).stories[c.fieldName],
              "onUpdate:modelValue": (f) => A(e).stories[c.fieldName] = f,
              rows: c.size === "small" ? zn : jn,
              size: c.size,
              onOversize: () => u(c)
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rows", "size", "onOversize"]))), 128))
          ]),
          m("div", Gm, [
            (_(!0), x(re, null, se(a, (c) => (_(), H(Ae, {
              key: c.fieldName,
              label: c.label,
              modelValue: A(e).stories[c.fieldName],
              "onUpdate:modelValue": (f) => A(e).stories[c.fieldName] = f,
              rows: c.size === "small" ? zn : jn,
              size: c.size
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "rows", "size"]))), 128)),
            k(Ae, {
              label: "个人介绍",
              modelValue: A(e).stories.desc,
              "onUpdate:modelValue": d[0] || (d[0] = (c) => A(e).stories.desc = c),
              rows: s.value,
              size: l.size,
              onOversize: d[1] || (d[1] = () => u(l))
            }, null, 8, ["modelValue", "rows", "size"])
          ])
        ])
      ]),
      _: 1
    })) : B("", !0);
  }
}), qm = /* @__PURE__ */ U(Hm, [["__scopeId", "data-v-0b316270"]]), Jm = { class: "section-body" }, Km = /* @__PURE__ */ F({
  __name: "AssetsSection",
  setup(t) {
    const e = ue();
    return (n, r) => A(e) ? (_(), H(we, {
      key: 0,
      title: "资产"
    }, {
      default: O(() => [
        m("div", Jm, [
          k(Ae, {
            label: "货币",
            rows: 1,
            maxlength: 15,
            modelValue: A(e).assets.currency,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => A(e).assets.currency = a)
          }, null, 8, ["modelValue"]),
          k(Ae, {
            label: "资产",
            rows: 6,
            maxlength: 17 * 6 - 2,
            modelValue: A(e).assets.assets,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => A(e).assets.assets = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : B("", !0);
  }
}), Qm = /* @__PURE__ */ U(Km, [["__scopeId", "data-v-883c9fa2"]]), Xm = { class: "section-body" }, Zm = /* @__PURE__ */ F({
  __name: "ItemSection",
  setup(t) {
    const e = ue();
    return (n, r) => A(e) ? (_(), H(we, {
      key: 0,
      title: "背包"
    }, {
      default: O(() => [
        m("div", Xm, [
          k(Ae, {
            label: "",
            rows: 7,
            maxlength: 18 * 7,
            modelValue: A(e).assets.items,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => A(e).assets.items = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : B("", !0);
  }
}), Ym = /* @__PURE__ */ U(Zm, [["__scopeId", "data-v-e88640cd"]]), ey = { class: "section-body" }, ty = /* @__PURE__ */ F({
  __name: "MythosSection",
  setup(t) {
    const e = ue();
    return (n, r) => A(e) ? (_(), H(we, {
      key: 0,
      title: "克苏鲁神话"
    }, {
      default: O(() => [
        m("div", ey, [
          k(Ae, {
            label: "魔法物品与典籍",
            rows: 2,
            maxlength: 18 * 2 - 8,
            modelValue: A(e).assets.magicItems,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => A(e).assets.magicItems = a)
          }, null, 8, ["modelValue"]),
          k(Ae, {
            label: "法术",
            rows: 2,
            maxlength: 18 * 2 - 3,
            modelValue: A(e).assets.magics,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => A(e).assets.magics = a)
          }, null, 8, ["modelValue"]),
          k(Ae, {
            label: "第三类接触",
            rows: 3,
            maxlength: 18 * 3 - 6,
            modelValue: A(e).assets.touches,
            "onUpdate:modelValue": r[2] || (r[2] = (a) => A(e).assets.touches = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : B("", !0);
  }
}), ny = /* @__PURE__ */ U(ty, [["__scopeId", "data-v-4e6eefe2"]]), ry = { class: "section-body" }, ay = /* @__PURE__ */ F({
  __name: "FriendSection",
  setup(t) {
    const e = ue(), n = St(), r = G(() => n.value ? 6 : 11);
    return (a, o) => A(e) ? (_(), H(we, {
      key: 0,
      title: "人物关系"
    }, {
      default: O(() => [
        m("div", ry, [
          k(Ae, {
            label: "",
            rows: r.value,
            modelValue: A(e).friends,
            "onUpdate:modelValue": o[0] || (o[0] = (l) => A(e).friends = l)
          }, null, 8, ["rows", "modelValue"])
        ])
      ]),
      _: 1
    })) : B("", !0);
  }
}), oy = /* @__PURE__ */ U(ay, [["__scopeId", "data-v-64107825"]]), iy = { class: "section-body" }, ly = /* @__PURE__ */ F({
  __name: "ExperienceSection",
  setup(t) {
    const e = ue();
    return (n, r) => A(e) ? (_(), H(we, {
      key: 0,
      title: "经历过的模组"
    }, {
      default: O(() => [
        m("div", iy, [
          k(Ae, {
            label: "",
            rows: 11,
            modelValue: A(e).experiencedModules,
            "onUpdate:modelValue": r[0] || (r[0] = (a) => A(e).experiencedModules = a)
          }, null, 8, ["modelValue"]),
          k(Ae, {
            label: "",
            rows: 11,
            modelValue: A(e).experiencedModules2,
            "onUpdate:modelValue": r[1] || (r[1] = (a) => A(e).experiencedModules2 = a)
          }, null, 8, ["modelValue"])
        ])
      ]),
      _: 1
    })) : B("", !0);
  }
}), sy = /* @__PURE__ */ U(ly, [["__scopeId", "data-v-9f6f9604"]]), uy = { class: "section-row" }, cy = { class: "section-row col-2" }, py = { class: "section-row" }, dy = /* @__PURE__ */ F({
  __name: "PaperBack",
  props: {
    setRef: {}
  },
  setup(t) {
    return (e, n) => (_(), H(yo, { setRef: e.setRef }, {
      default: O(() => [
        k(qm),
        m("div", uy, [
          m("div", cy, [
            k(Ym, { class: "col-0" }),
            k(Qm, { class: "col-0" })
          ]),
          k(ny, { class: "col-1" })
        ]),
        m("div", py, [
          k(sy, { class: "col-2" }),
          k(oy, { class: "col-1" })
        ])
      ]),
      _: 1
    }, 8, ["setRef"]));
  }
}), $a = /* @__PURE__ */ U(dy, [["__scopeId", "data-v-f32b0249"]]), fy = { class: "page theme-dark" }, my = { class: "papers-animation-container papers-editing web-only" }, yy = { class: "sticky-footer web-only" }, hy = /* @__PURE__ */ F({
  __name: "AppView",
  setup(t) {
    const e = Rs.parse(location.search.slice(1)), n = Z(He()), r = Ar(), a = Ce(Pt(e)), o = Ce({
      paperInFront: e.turn !== "back",
      printing: e.debug === "true",
      importing: !1,
      showTotalSeparation: e.sep === "true" || r.getItem("showTotalSeparation") || !1
    }), l = Z(_a);
    be(
      () => o.showTotalSeparation,
      (w) => {
        r.setItem("showTotalSeparation", w);
      }
    ), Js(n);
    const s = Xs(n, {
      viewData: a,
      pageData: o
    }), i = gu(n, a, o);
    i.init(), i.startAutoSave(), At("pc", n), At("viewData", a), At("pageData", o), At("suggestion", s), At("cardManager", i);
    const u = Ce({}), p = (w) => {
      w.preventDefault();
    }, d = (w) => {
      if (w.preventDefault(), !w.dataTransfer) {
        console.error("数据传输对象为空");
        return;
      }
      const S = w.dataTransfer.files;
      if (S.length > 0) {
        const E = S[0];
        if (E.type === "text/plain") {
          const b = new FileReader();
          b.onload = (v) => {
            const $ = v.target.result;
            c($);
          }, b.readAsText(E);
        } else
          console.error("不支持的文件类型");
      }
    }, c = (w) => {
      de.success("导入卡数据中"), l.value && (l.value.inData = w, l.value.applyInData(), l.value.inData = "");
    }, f = G(() => rr());
    async function h() {
      try {
        const w = await navigator.clipboard.readText();
        c(w);
      } catch {
        de.error("无法读取剪贴板");
      }
    }
    function y() {
      var w;
      (w = l.value) == null || w.copyOutData();
    }
    return (w, S) => (_(), x("main", fy, [
      m("div", {
        class: L(["paper-container theme-light", { "is-mobile": !o.printing }]),
        onDrop: d,
        onDragover: It(p, ["prevent"])
      }, [
        m("div", my, [
          k(lr, { name: "swipe-paper" }, {
            default: O(() => [
              (_(), H(Po, null, [
                o.paperInFront ? (_(), H(Aa, { key: 0 })) : (_(), H($a, { key: 1 }))
              ], 1024))
            ]),
            _: 1
          })
        ]),
        m("div", {
          class: L(["papers-animation-container papers-printing", {
            "papers-printing-active": o.printing
          }])
        }, [
          k(Aa, {
            setRef: (E) => {
              u.front = E;
            }
          }, null, 8, ["setRef"]),
          k($a, {
            setRef: (E) => {
              u.back = E;
            }
          }, null, 8, ["setRef"])
        ], 2)
      ], 34),
      m("div", yy, [
        k(_a, {
          ref_key: "controlSectionRef",
          ref: l,
          paperEls: u,
          isFull: f.value,
          onSwitchPaper: S[0] || (S[0] = () => o.paperInFront = !o.paperInFront)
        }, null, 8, ["paperEls", "isFull"])
      ]),
      f.value ? (_(), x("button", {
        key: 0,
        class: "fab-clipboard fab-copy-export web-only",
        title: "一键复制导出数据",
        onClick: y
      }, " 出 ")) : B("", !0),
      f.value ? (_(), x("button", {
        key: 1,
        class: "fab-clipboard web-only",
        title: "读取剪贴板",
        onClick: h
      }, " 入 ")) : B("", !0)
    ]));
  }
}), wy = /* @__PURE__ */ U(hy, [["__scopeId", "data-v-1ada3550"]]);
export {
  wy as default
};
