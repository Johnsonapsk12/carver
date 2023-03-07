! function (t, r) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define(r) : (t = "undefined" != typeof globalThis ? globalThis : t || self).MP3Tag = r()
}(this, (function () {
    "use strict";

    function t(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            r && (n = n.filter((function (r) {
                return Object.getOwnPropertyDescriptor(t, r).enumerable
            }))), e.push.apply(e, n)
        }
        return e
    }

    function r(r) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? t(Object(n), !0).forEach((function (t) {
                a(r, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function (t) {
                Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return r
    }

    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, e(t)
    }

    function n(t, r) {
        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, r) {
        for (var e = 0; e < r.length; e++) {
            var n = r[e];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function o(t, r, e) {
        return r && i(t.prototype, r), e && i(t, e), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }

    function a(t, r, e) {
        return r in t ? Object.defineProperty(t, r, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[r] = e, t
    }

    function u(t) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, u(t)
    }

    function c(t, r) {
        return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, r) {
            return t.__proto__ = r, t
        }, c(t, r)
    }

    function s() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
        } catch (t) {
            return !1
        }
    }

    function f(t, r, e) {
        return f = s() ? Reflect.construct.bind() : function (t, r, e) {
            var n = [null];
            n.push.apply(n, r);
            var i = new(Function.bind.apply(t, n));
            return e && c(i, e.prototype), i
        }, f.apply(null, arguments)
    }

    function l(t) {
        var r = "function" == typeof Map ? new Map : void 0;
        return l = function (t) {
            if (null === t || (e = t, -1 === Function.toString.call(e).indexOf("[native code]"))) return t;
            var e;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== r) {
                if (r.has(t)) return r.get(t);
                r.set(t, n)
            }

            function n() {
                return f(t, arguments, u(this).constructor)
            }
            return n.prototype = Object.create(t.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), c(n, t)
        }, l(t)
    }

    function h(t, r) {
        if (r && ("object" == typeof r || "function" == typeof r)) return r;
        if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
        return function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }

    function v(t) {
        return function (t) {
            if (Array.isArray(t)) return g(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function (t, r) {
            if (!t) return;
            if ("string" == typeof t) return g(t, r);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return g(t, r)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(t, r) {
        (null == r || r > t.length) && (r = t.length);
        for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
        return n
    }
    var p, d, y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        w = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        b = !w((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })),
        m = !w((function () {
            var t = function () {}.bind();
            return "function" != typeof t || t.hasOwnProperty("prototype")
        })),
        E = m,
        A = Function.prototype,
        S = A.bind,
        T = A.call,
        O = E && S.bind(T, T),
        x = E ? function (t) {
            return t && O(t)
        } : function (t) {
            return t && function () {
                return T.apply(t, arguments)
            }
        },
        I = function (t) {
            return null == t
        },
        k = I,
        R = TypeError,
        P = function (t) {
            if (k(t)) throw R("Can't call method on " + t);
            return t
        },
        C = P,
        L = Object,
        U = function (t) {
            return L(C(t))
        },
        j = U,
        M = x({}.hasOwnProperty),
        D = Object.hasOwn || function (t, r) {
            return M(j(t), r)
        },
        B = b,
        F = D,
        _ = Function.prototype,
        N = B && Object.getOwnPropertyDescriptor,
        V = F(_, "name"),
        G = {
            EXISTS: V,
            PROPER: V && "something" === function () {}.name,
            CONFIGURABLE: V && (!B || B && N(_, "name").configurable)
        },
        W = {},
        Y = function (t) {
            return t && t.Math == Math && t
        },
        $ = Y("object" == typeof globalThis && globalThis) || Y("object" == typeof window && window) || Y("object" == typeof self && self) || Y("object" == typeof y && y) || function () {
            return this
        }() || Function("return this")(),
        z = function (t) {
            return "function" == typeof t
        },
        H = z,
        K = "object" == typeof document && document.all,
        X = void 0 === K && void 0 !== K ? function (t) {
            return "object" == typeof t ? null !== t : H(t) || t === K
        } : function (t) {
            return "object" == typeof t ? null !== t : H(t)
        },
        J = X,
        q = $.document,
        Z = J(q) && J(q.createElement),
        Q = function (t) {
            return Z ? q.createElement(t) : {}
        },
        tt = Q,
        rt = !b && !w((function () {
            return 7 != Object.defineProperty(tt("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })),
        et = b && w((function () {
            return 42 != Object.defineProperty((function () {}), "prototype", {
                value: 42,
                writable: !1
            }).prototype
        })),
        nt = X,
        it = String,
        ot = TypeError,
        at = function (t) {
            if (nt(t)) return t;
            throw ot(it(t) + " is not an object")
        },
        ut = m,
        ct = Function.prototype.call,
        st = ut ? ct.bind(ct) : function () {
            return ct.apply(ct, arguments)
        },
        ft = $,
        lt = z,
        ht = function (t) {
            return lt(t) ? t : void 0
        },
        vt = function (t, r) {
            return arguments.length < 2 ? ht(ft[t]) : ft[t] && ft[t][r]
        },
        gt = x({}.isPrototypeOf),
        pt = vt("navigator", "userAgent") || "",
        dt = $,
        yt = pt,
        wt = dt.process,
        bt = dt.Deno,
        mt = wt && wt.versions || bt && bt.version,
        Et = mt && mt.v8;
    Et && (d = (p = Et.split("."))[0] > 0 && p[0] < 4 ? 1 : +(p[0] + p[1])), !d && yt && (!(p = yt.match(/Edge\/(\d+)/)) || p[1] >= 74) && (p = yt.match(/Chrome\/(\d+)/)) && (d = +p[1]);
    var At = d,
        St = At,
        Tt = w,
        Ot = !!Object.getOwnPropertySymbols && !Tt((function () {
            var t = Symbol();
            return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && St && St < 41
        })),
        xt = Ot && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        It = vt,
        kt = z,
        Rt = gt,
        Pt = Object,
        Ct = xt ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            var r = It("Symbol");
            return kt(r) && Rt(r.prototype, Pt(t))
        },
        Lt = String,
        Ut = function (t) {
            try {
                return Lt(t)
            } catch (t) {
                return "Object"
            }
        },
        jt = z,
        Mt = Ut,
        Dt = TypeError,
        Bt = function (t) {
            if (jt(t)) return t;
            throw Dt(Mt(t) + " is not a function")
        },
        Ft = Bt,
        _t = I,
        Nt = function (t, r) {
            var e = t[r];
            return _t(e) ? void 0 : Ft(e)
        },
        Vt = st,
        Gt = z,
        Wt = X,
        Yt = TypeError,
        $t = {
            exports: {}
        },
        zt = $,
        Ht = Object.defineProperty,
        Kt = function (t, r) {
            try {
                Ht(zt, t, {
                    value: r,
                    configurable: !0,
                    writable: !0
                })
            } catch (e) {
                zt[t] = r
            }
            return r
        },
        Xt = Kt,
        Jt = "__core-js_shared__",
        qt = $[Jt] || Xt(Jt, {}),
        Zt = qt;
    ($t.exports = function (t, r) {
        return Zt[t] || (Zt[t] = void 0 !== r ? r : {})
    })("versions", []).push({
        version: "3.25.1",
        mode: "global",
        copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.25.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
    });
    var Qt = x,
        tr = 0,
        rr = Math.random(),
        er = Qt(1..toString),
        nr = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + er(++tr + rr, 36)
        },
        ir = $,
        or = $t.exports,
        ar = D,
        ur = nr,
        cr = Ot,
        sr = xt,
        fr = or("wks"),
        lr = ir.Symbol,
        hr = lr && lr.for,
        vr = sr ? lr : lr && lr.withoutSetter || ur,
        gr = function (t) {
            if (!ar(fr, t) || !cr && "string" != typeof fr[t]) {
                var r = "Symbol." + t;
                cr && ar(lr, t) ? fr[t] = lr[t] : fr[t] = sr && hr ? hr(r) : vr(r)
            }
            return fr[t]
        },
        pr = st,
        dr = X,
        yr = Ct,
        wr = Nt,
        br = function (t, r) {
            var e, n;
            if ("string" === r && Gt(e = t.toString) && !Wt(n = Vt(e, t))) return n;
            if (Gt(e = t.valueOf) && !Wt(n = Vt(e, t))) return n;
            if ("string" !== r && Gt(e = t.toString) && !Wt(n = Vt(e, t))) return n;
            throw Yt("Can't convert object to primitive value")
        },
        mr = TypeError,
        Er = gr("toPrimitive"),
        Ar = function (t, r) {
            if (!dr(t) || yr(t)) return t;
            var e, n = wr(t, Er);
            if (n) {
                if (void 0 === r && (r = "default"), e = pr(n, t, r), !dr(e) || yr(e)) return e;
                throw mr("Can't convert object to primitive value")
            }
            return void 0 === r && (r = "number"), br(t, r)
        },
        Sr = Ar,
        Tr = Ct,
        Or = function (t) {
            var r = Sr(t, "string");
            return Tr(r) ? r : r + ""
        },
        xr = b,
        Ir = rt,
        kr = et,
        Rr = at,
        Pr = Or,
        Cr = TypeError,
        Lr = Object.defineProperty,
        Ur = Object.getOwnPropertyDescriptor,
        jr = "enumerable",
        Mr = "configurable",
        Dr = "writable";
    W.f = xr ? kr ? function (t, r, e) {
        if (Rr(t), r = Pr(r), Rr(e), "function" == typeof t && "prototype" === r && "value" in e && Dr in e && !e.writable) {
            var n = Ur(t, r);
            n && n.writable && (t[r] = e.value, e = {
                configurable: Mr in e ? e.configurable : n.configurable,
                enumerable: jr in e ? e.enumerable : n.enumerable,
                writable: !1
            })
        }
        return Lr(t, r, e)
    } : Lr : function (t, r, e) {
        if (Rr(t), r = Pr(r), Rr(e), Ir) try {
            return Lr(t, r, e)
        } catch (t) {}
        if ("get" in e || "set" in e) throw Cr("Accessors not supported");
        return "value" in e && (t[r] = e.value), t
    };
    var Br = b,
        Fr = G.EXISTS,
        _r = x,
        Nr = W.f,
        Vr = Function.prototype,
        Gr = _r(Vr.toString),
        Wr = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
        Yr = _r(Wr.exec);
    Br && !Fr && Nr(Vr, "name", {
        configurable: !0,
        get: function () {
            try {
                return Yr(Wr, Gr(this))[1]
            } catch (t) {
                return ""
            }
        }
    });
    var $r = {},
        zr = {},
        Hr = {}.propertyIsEnumerable,
        Kr = Object.getOwnPropertyDescriptor,
        Xr = Kr && !Hr.call({
            1: 2
        }, 1);
    zr.f = Xr ? function (t) {
        var r = Kr(this, t);
        return !!r && r.enumerable
    } : Hr;
    var Jr = function (t, r) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: r
            }
        },
        qr = x,
        Zr = qr({}.toString),
        Qr = qr("".slice),
        te = function (t) {
            return Qr(Zr(t), 8, -1)
        },
        re = w,
        ee = te,
        ne = Object,
        ie = x("".split),
        oe = re((function () {
            return !ne("z").propertyIsEnumerable(0)
        })) ? function (t) {
            return "String" == ee(t) ? ie(t, "") : ne(t)
        } : ne,
        ae = oe,
        ue = P,
        ce = function (t) {
            return ae(ue(t))
        },
        se = b,
        fe = st,
        le = zr,
        he = Jr,
        ve = ce,
        ge = Or,
        pe = D,
        de = rt,
        ye = Object.getOwnPropertyDescriptor;
    $r.f = se ? ye : function (t, r) {
        if (t = ve(t), r = ge(r), de) try {
            return ye(t, r)
        } catch (t) {}
        if (pe(t, r)) return he(!fe(le.f, t, r), t[r])
    };
    var we = W,
        be = Jr,
        me = b ? function (t, r, e) {
            return we.f(t, r, be(1, e))
        } : function (t, r, e) {
            return t[r] = e, t
        },
        Ee = {
            exports: {}
        },
        Ae = z,
        Se = qt,
        Te = x(Function.toString);
    Ae(Se.inspectSource) || (Se.inspectSource = function (t) {
        return Te(t)
    });
    var Oe, xe, Ie, ke = Se.inspectSource,
        Re = z,
        Pe = $.WeakMap,
        Ce = Re(Pe) && /native code/.test(String(Pe)),
        Le = $t.exports,
        Ue = nr,
        je = Le("keys"),
        Me = function (t) {
            return je[t] || (je[t] = Ue(t))
        },
        De = {},
        Be = Ce,
        Fe = $,
        _e = x,
        Ne = X,
        Ve = me,
        Ge = D,
        We = qt,
        Ye = Me,
        $e = De,
        ze = "Object already initialized",
        He = Fe.TypeError,
        Ke = Fe.WeakMap;
    if (Be || We.state) {
        var Xe = We.state || (We.state = new Ke),
            Je = _e(Xe.get),
            qe = _e(Xe.has),
            Ze = _e(Xe.set);
        Oe = function (t, r) {
            if (qe(Xe, t)) throw He(ze);
            return r.facade = t, Ze(Xe, t, r), r
        }, xe = function (t) {
            return Je(Xe, t) || {}
        }, Ie = function (t) {
            return qe(Xe, t)
        }
    } else {
        var Qe = Ye("state");
        $e[Qe] = !0, Oe = function (t, r) {
            if (Ge(t, Qe)) throw He(ze);
            return r.facade = t, Ve(t, Qe, r), r
        }, xe = function (t) {
            return Ge(t, Qe) ? t[Qe] : {}
        }, Ie = function (t) {
            return Ge(t, Qe)
        }
    }
    var tn = {
            set: Oe,
            get: xe,
            has: Ie,
            enforce: function (t) {
                return Ie(t) ? xe(t) : Oe(t, {})
            },
            getterFor: function (t) {
                return function (r) {
                    var e;
                    if (!Ne(r) || (e = xe(r)).type !== t) throw He("Incompatible receiver, " + t + " required");
                    return e
                }
            }
        },
        rn = w,
        en = z,
        nn = D,
        on = b,
        an = G.CONFIGURABLE,
        un = ke,
        cn = tn.enforce,
        sn = tn.get,
        fn = Object.defineProperty,
        ln = on && !rn((function () {
            return 8 !== fn((function () {}), "length", {
                value: 8
            }).length
        })),
        hn = String(String).split("String"),
        vn = Ee.exports = function (t, r, e) {
            "Symbol(" === String(r).slice(0, 7) && (r = "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), e && e.getter && (r = "get " + r), e && e.setter && (r = "set " + r), (!nn(t, "name") || an && t.name !== r) && (on ? fn(t, "name", {
                value: r,
                configurable: !0
            }) : t.name = r), ln && e && nn(e, "arity") && t.length !== e.arity && fn(t, "length", {
                value: e.arity
            });
            try {
                e && nn(e, "constructor") && e.constructor ? on && fn(t, "prototype", {
                    writable: !1
                }) : t.prototype && (t.prototype = void 0)
            } catch (t) {}
            var n = cn(t);
            return nn(n, "source") || (n.source = hn.join("string" == typeof r ? r : "")), t
        };
    Function.prototype.toString = vn((function () {
        return en(this) && sn(this).source || un(this)
    }), "toString");
    var gn = z,
        pn = W,
        dn = Ee.exports,
        yn = Kt,
        wn = function (t, r, e, n) {
            n || (n = {});
            var i = n.enumerable,
                o = void 0 !== n.name ? n.name : r;
            if (gn(e) && dn(e, o, n), n.global) i ? t[r] = e : yn(r, e);
            else {
                try {
                    n.unsafe ? t[r] && (i = !0) : delete t[r]
                } catch (t) {}
                i ? t[r] = e : pn.f(t, r, {
                    value: e,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return t
        },
        bn = {},
        mn = Math.ceil,
        En = Math.floor,
        An = Math.trunc || function (t) {
            var r = +t;
            return (r > 0 ? En : mn)(r)
        },
        Sn = function (t) {
            var r = +t;
            return r != r || 0 === r ? 0 : An(r)
        },
        Tn = Sn,
        On = Math.max,
        xn = Math.min,
        In = function (t, r) {
            var e = Tn(t);
            return e < 0 ? On(e + r, 0) : xn(e, r)
        },
        kn = Sn,
        Rn = Math.min,
        Pn = function (t) {
            return t > 0 ? Rn(kn(t), 9007199254740991) : 0
        },
        Cn = Pn,
        Ln = function (t) {
            return Cn(t.length)
        },
        Un = ce,
        jn = In,
        Mn = Ln,
        Dn = function (t) {
            return function (r, e, n) {
                var i, o = Un(r),
                    a = Mn(o),
                    u = jn(n, a);
                if (t && e != e) {
                    for (; a > u;)
                        if ((i = o[u++]) != i) return !0
                } else
                    for (; a > u; u++)
                        if ((t || u in o) && o[u] === e) return t || u || 0;
                return !t && -1
            }
        },
        Bn = {
            includes: Dn(!0),
            indexOf: Dn(!1)
        },
        Fn = D,
        _n = ce,
        Nn = Bn.indexOf,
        Vn = De,
        Gn = x([].push),
        Wn = function (t, r) {
            var e, n = _n(t),
                i = 0,
                o = [];
            for (e in n) !Fn(Vn, e) && Fn(n, e) && Gn(o, e);
            for (; r.length > i;) Fn(n, e = r[i++]) && (~Nn(o, e) || Gn(o, e));
            return o
        },
        Yn = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        $n = Wn,
        zn = Yn.concat("length", "prototype");
    bn.f = Object.getOwnPropertyNames || function (t) {
        return $n(t, zn)
    };
    var Hn = {};
    Hn.f = Object.getOwnPropertySymbols;
    var Kn = vt,
        Xn = bn,
        Jn = Hn,
        qn = at,
        Zn = x([].concat),
        Qn = Kn("Reflect", "ownKeys") || function (t) {
            var r = Xn.f(qn(t)),
                e = Jn.f;
            return e ? Zn(r, e(t)) : r
        },
        ti = D,
        ri = Qn,
        ei = $r,
        ni = W,
        ii = function (t, r, e) {
            for (var n = ri(r), i = ni.f, o = ei.f, a = 0; a < n.length; a++) {
                var u = n[a];
                ti(t, u) || e && ti(e, u) || i(t, u, o(r, u))
            }
        },
        oi = w,
        ai = z,
        ui = /#|\.prototype\./,
        ci = function (t, r) {
            var e = fi[si(t)];
            return e == hi || e != li && (ai(r) ? oi(r) : !!r)
        },
        si = ci.normalize = function (t) {
            return String(t).replace(ui, ".").toLowerCase()
        },
        fi = ci.data = {},
        li = ci.NATIVE = "N",
        hi = ci.POLYFILL = "P",
        vi = ci,
        gi = $,
        pi = $r.f,
        di = me,
        yi = wn,
        wi = Kt,
        bi = ii,
        mi = vi,
        Ei = function (t, r) {
            var e, n, i, o, a, u = t.target,
                c = t.global,
                s = t.stat;
            if (e = c ? gi : s ? gi[u] || wi(u, {}) : (gi[u] || {}).prototype)
                for (n in r) {
                    if (o = r[n], i = t.dontCallGetSet ? (a = pi(e, n)) && a.value : e[n], !mi(c ? n : u + (s ? "." : "#") + n, t.forced) && void 0 !== i) {
                        if (typeof o == typeof i) continue;
                        bi(o, i)
                    }(t.sham || i && i.sham) && di(o, "sham", !0), yi(e, n, o, t)
                }
        },
        Ai = {},
        Si = Wn,
        Ti = Yn,
        Oi = Object.keys || function (t) {
            return Si(t, Ti)
        },
        xi = b,
        Ii = et,
        ki = W,
        Ri = at,
        Pi = ce,
        Ci = Oi;
    Ai.f = xi && !Ii ? Object.defineProperties : function (t, r) {
        Ri(t);
        for (var e, n = Pi(r), i = Ci(r), o = i.length, a = 0; o > a;) ki.f(t, e = i[a++], n[e]);
        return t
    };
    var Li = Ei,
        Ui = b,
        ji = Ai.f;
    Li({
        target: "Object",
        stat: !0,
        forced: Object.defineProperties !== ji,
        sham: !Ui
    }, {
        defineProperties: ji
    });
    var Mi = te,
        Di = Array.isArray || function (t) {
            return "Array" == Mi(t)
        };
    Ei({
        target: "Array",
        stat: !0
    }, {
        isArray: Di
    });
    var Bi = {};
    Bi[gr("toStringTag")] = "z";
    var Fi, _i = "[object z]" === String(Bi),
        Ni = _i,
        Vi = z,
        Gi = te,
        Wi = gr("toStringTag"),
        Yi = Object,
        $i = "Arguments" == Gi(function () {
            return arguments
        }()),
        zi = Ni ? Gi : function (t) {
            var r, e, n;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (e = function (t, r) {
                try {
                    return t[r]
                } catch (t) {}
            }(r = Yi(t), Wi)) ? e : $i ? Gi(r) : "Object" == (n = Gi(r)) && Vi(r.callee) ? "Arguments" : n
        },
        Hi = zi,
        Ki = String,
        Xi = function (t) {
            if ("Symbol" === Hi(t)) throw TypeError("Cannot convert a Symbol value to a string");
            return Ki(t)
        },
        Ji = at,
        qi = function () {
            var t = Ji(this),
                r = "";
            return t.hasIndices && (r += "d"), t.global && (r += "g"), t.ignoreCase && (r += "i"), t.multiline && (r += "m"), t.dotAll && (r += "s"), t.unicode && (r += "u"), t.unicodeSets && (r += "v"), t.sticky && (r += "y"), r
        },
        Zi = w,
        Qi = $.RegExp,
        to = Zi((function () {
            var t = Qi("a", "y");
            return t.lastIndex = 2, null != t.exec("abcd")
        })),
        ro = to || Zi((function () {
            return !Qi("a", "y").sticky
        })),
        eo = to || Zi((function () {
            var t = Qi("^r", "gy");
            return t.lastIndex = 2, null != t.exec("str")
        })),
        no = {
            BROKEN_CARET: eo,
            MISSED_STICKY: ro,
            UNSUPPORTED_Y: to
        },
        io = vt("document", "documentElement"),
        oo = at,
        ao = Ai,
        uo = Yn,
        co = De,
        so = io,
        fo = Q,
        lo = Me("IE_PROTO"),
        ho = function () {},
        vo = function (t) {
            return "<script>" + t + "</" + "script>"
        },
        go = function (t) {
            t.write(vo("")), t.close();
            var r = t.parentWindow.Object;
            return t = null, r
        },
        po = function () {
            try {
                Fi = new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, r;
            po = "undefined" != typeof document ? document.domain && Fi ? go(Fi) : ((r = fo("iframe")).style.display = "none", so.appendChild(r), r.src = String("javascript:"), (t = r.contentWindow.document).open(), t.write(vo("document.F=Object")), t.close(), t.F) : go(Fi);
            for (var e = uo.length; e--;) delete po.prototype[uo[e]];
            return po()
        };
    co[lo] = !0;
    var yo = Object.create || function (t, r) {
            var e;
            return null !== t ? (ho.prototype = oo(t), e = new ho, ho.prototype = null, e[lo] = t) : e = po(), void 0 === r ? e : ao.f(e, r)
        },
        wo = w,
        bo = $.RegExp,
        mo = wo((function () {
            var t = bo(".", "s");
            return !(t.dotAll && t.exec("\n") && "s" === t.flags)
        })),
        Eo = w,
        Ao = $.RegExp,
        So = Eo((function () {
            var t = Ao("(?<a>b)", "g");
            return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
        })),
        To = st,
        Oo = x,
        xo = Xi,
        Io = qi,
        ko = no,
        Ro = $t.exports,
        Po = yo,
        Co = tn.get,
        Lo = mo,
        Uo = So,
        jo = Ro("native-string-replace", String.prototype.replace),
        Mo = RegExp.prototype.exec,
        Do = Mo,
        Bo = Oo("".charAt),
        Fo = Oo("".indexOf),
        _o = Oo("".replace),
        No = Oo("".slice),
        Vo = function () {
            var t = /a/,
                r = /b*/g;
            return To(Mo, t, "a"), To(Mo, r, "a"), 0 !== t.lastIndex || 0 !== r.lastIndex
        }(),
        Go = ko.BROKEN_CARET,
        Wo = void 0 !== /()??/.exec("")[1];
    (Vo || Wo || Go || Lo || Uo) && (Do = function (t) {
        var r, e, n, i, o, a, u, c = this,
            s = Co(c),
            f = xo(t),
            l = s.raw;
        if (l) return l.lastIndex = c.lastIndex, r = To(Do, l, f), c.lastIndex = l.lastIndex, r;
        var h = s.groups,
            v = Go && c.sticky,
            g = To(Io, c),
            p = c.source,
            d = 0,
            y = f;
        if (v && (g = _o(g, "y", ""), -1 === Fo(g, "g") && (g += "g"), y = No(f, c.lastIndex), c.lastIndex > 0 && (!c.multiline || c.multiline && "\n" !== Bo(f, c.lastIndex - 1)) && (p = "(?: " + p + ")", y = " " + y, d++), e = new RegExp("^(?:" + p + ")", g)), Wo && (e = new RegExp("^" + p + "$(?!\\s)", g)), Vo && (n = c.lastIndex), i = To(Mo, v ? e : c, y), v ? i ? (i.input = No(i.input, d), i[0] = No(i[0], d), i.index = c.lastIndex, c.lastIndex += i[0].length) : c.lastIndex = 0 : Vo && i && (c.lastIndex = c.global ? i.index + i[0].length : n), Wo && i && i.length > 1 && To(jo, i[0], e, (function () {
                for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (i[o] = void 0)
            })), i && h)
            for (i.groups = a = Po(null), o = 0; o < h.length; o++) a[(u = h[o])[0]] = i[u[1]];
        return i
    });
    var Yo = Do;
    Ei({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Yo
    }, {
        exec: Yo
    });
    var $o = m,
        zo = Function.prototype,
        Ho = zo.apply,
        Ko = zo.call,
        Xo = "object" == typeof Reflect && Reflect.apply || ($o ? Ko.bind(Ho) : function () {
            return Ko.apply(Ho, arguments)
        }),
        Jo = x,
        qo = wn,
        Zo = Yo,
        Qo = w,
        ta = gr,
        ra = me,
        ea = ta("species"),
        na = RegExp.prototype,
        ia = function (t, r, e, n) {
            var i = ta(t),
                o = !Qo((function () {
                    var r = {};
                    return r[i] = function () {
                        return 7
                    }, 7 != "" [t](r)
                })),
                a = o && !Qo((function () {
                    var r = !1,
                        e = /a/;
                    return "split" === t && ((e = {}).constructor = {}, e.constructor[ea] = function () {
                        return e
                    }, e.flags = "", e[i] = /./ [i]), e.exec = function () {
                        return r = !0, null
                    }, e[i](""), !r
                }));
            if (!o || !a || e) {
                var u = Jo(/./ [i]),
                    c = r(i, "" [t], (function (t, r, e, n, i) {
                        var a = Jo(t),
                            c = r.exec;
                        return c === Zo || c === na.exec ? o && !i ? {
                            done: !0,
                            value: u(r, e, n)
                        } : {
                            done: !0,
                            value: a(e, r, n)
                        } : {
                            done: !1
                        }
                    }));
                qo(String.prototype, t, c[0]), qo(na, i, c[1])
            }
            n && ra(na[i], "sham", !0)
        },
        oa = X,
        aa = te,
        ua = gr("match"),
        ca = function (t) {
            var r;
            return oa(t) && (void 0 !== (r = t[ua]) ? !!r : "RegExp" == aa(t))
        },
        sa = x,
        fa = w,
        la = z,
        ha = zi,
        va = ke,
        ga = function () {},
        pa = [],
        da = vt("Reflect", "construct"),
        ya = /^\s*(?:class|function)\b/,
        wa = sa(ya.exec),
        ba = !ya.exec(ga),
        ma = function (t) {
            if (!la(t)) return !1;
            try {
                return da(ga, pa, t), !0
            } catch (t) {
                return !1
            }
        },
        Ea = function (t) {
            if (!la(t)) return !1;
            switch (ha(t)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
            }
            try {
                return ba || !!wa(ya, va(t))
            } catch (t) {
                return !0
            }
        };
    Ea.sham = !0;
    var Aa = !da || fa((function () {
            var t;
            return ma(ma.call) || !ma(Object) || !ma((function () {
                t = !0
            })) || t
        })) ? Ea : ma,
        Sa = Aa,
        Ta = Ut,
        Oa = TypeError,
        xa = function (t) {
            if (Sa(t)) return t;
            throw Oa(Ta(t) + " is not a constructor")
        },
        Ia = at,
        ka = xa,
        Ra = I,
        Pa = gr("species"),
        Ca = function (t, r) {
            var e, n = Ia(t).constructor;
            return void 0 === n || Ra(e = Ia(n)[Pa]) ? r : ka(e)
        },
        La = x,
        Ua = Sn,
        ja = Xi,
        Ma = P,
        Da = La("".charAt),
        Ba = La("".charCodeAt),
        Fa = La("".slice),
        _a = function (t) {
            return function (r, e) {
                var n, i, o = ja(Ma(r)),
                    a = Ua(e),
                    u = o.length;
                return a < 0 || a >= u ? t ? "" : void 0 : (n = Ba(o, a)) < 55296 || n > 56319 || a + 1 === u || (i = Ba(o, a + 1)) < 56320 || i > 57343 ? t ? Da(o, a) : n : t ? Fa(o, a, a + 2) : i - 56320 + (n - 55296 << 10) + 65536
            }
        },
        Na = {
            codeAt: _a(!1),
            charAt: _a(!0)
        }.charAt,
        Va = function (t, r, e) {
            return r + (e ? Na(t, r).length : 1)
        },
        Ga = Or,
        Wa = W,
        Ya = Jr,
        $a = function (t, r, e) {
            var n = Ga(r);
            n in t ? Wa.f(t, n, Ya(0, e)) : t[n] = e
        },
        za = In,
        Ha = Ln,
        Ka = $a,
        Xa = Array,
        Ja = Math.max,
        qa = function (t, r, e) {
            for (var n = Ha(t), i = za(r, n), o = za(void 0 === e ? n : e, n), a = Xa(Ja(o - i, 0)), u = 0; i < o; i++, u++) Ka(a, u, t[i]);
            return a.length = u, a
        },
        Za = st,
        Qa = at,
        tu = z,
        ru = te,
        eu = Yo,
        nu = TypeError,
        iu = function (t, r) {
            var e = t.exec;
            if (tu(e)) {
                var n = Za(e, t, r);
                return null !== n && Qa(n), n
            }
            if ("RegExp" === ru(t)) return Za(eu, t, r);
            throw nu("RegExp#exec called on incompatible receiver")
        },
        ou = Xo,
        au = st,
        uu = x,
        cu = ia,
        su = at,
        fu = I,
        lu = ca,
        hu = P,
        vu = Ca,
        gu = Va,
        pu = Pn,
        du = Xi,
        yu = Nt,
        wu = qa,
        bu = iu,
        mu = Yo,
        Eu = w,
        Au = no.UNSUPPORTED_Y,
        Su = 4294967295,
        Tu = Math.min,
        Ou = [].push,
        xu = uu(/./.exec),
        Iu = uu(Ou),
        ku = uu("".slice),
        Ru = !Eu((function () {
            var t = /(?:)/,
                r = t.exec;
            t.exec = function () {
                return r.apply(this, arguments)
            };
            var e = "ab".split(t);
            return 2 !== e.length || "a" !== e[0] || "b" !== e[1]
        }));
    cu("split", (function (t, r, e) {
        var n;
        return n = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, e) {
            var n = du(hu(this)),
                i = void 0 === e ? Su : e >>> 0;
            if (0 === i) return [];
            if (void 0 === t) return [n];
            if (!lu(t)) return au(r, n, t, i);
            for (var o, a, u, c = [], s = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, l = new RegExp(t.source, s + "g");
                (o = au(mu, l, n)) && !((a = l.lastIndex) > f && (Iu(c, ku(n, f, o.index)), o.length > 1 && o.index < n.length && ou(Ou, c, wu(o, 1)), u = o[0].length, f = a, c.length >= i));) l.lastIndex === o.index && l.lastIndex++;
            return f === n.length ? !u && xu(l, "") || Iu(c, "") : Iu(c, ku(n, f)), c.length > i ? wu(c, 0, i) : c
        } : "0".split(void 0, 0).length ? function (t, e) {
            return void 0 === t && 0 === e ? [] : au(r, this, t, e)
        } : r, [function (r, e) {
            var i = hu(this),
                o = fu(r) ? void 0 : yu(r, t);
            return o ? au(o, r, i, e) : au(n, du(i), r, e)
        }, function (t, i) {
            var o = su(this),
                a = du(t),
                u = e(n, o, a, i, n !== r);
            if (u.done) return u.value;
            var c = vu(o, RegExp),
                s = o.unicode,
                f = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (Au ? "g" : "y"),
                l = new c(Au ? "^(?:" + o.source + ")" : o, f),
                h = void 0 === i ? Su : i >>> 0;
            if (0 === h) return [];
            if (0 === a.length) return null === bu(l, a) ? [a] : [];
            for (var v = 0, g = 0, p = []; g < a.length;) {
                l.lastIndex = Au ? 0 : g;
                var d, y = bu(l, Au ? ku(a, g) : a);
                if (null === y || (d = Tu(pu(l.lastIndex + (Au ? g : 0)), a.length)) === v) g = gu(a, g, s);
                else {
                    if (Iu(p, ku(a, v, g)), p.length === h) return p;
                    for (var w = 1; w <= y.length - 1; w++)
                        if (Iu(p, y[w]), p.length === h) return p;
                    g = v = d
                }
            }
            return Iu(p, ku(a, v)), p
        }]
    }), !Ru, Au);
    var Pu = gr,
        Cu = yo,
        Lu = W.f,
        Uu = Pu("unscopables"),
        ju = Array.prototype;
    null == ju[Uu] && Lu(ju, Uu, {
        configurable: !0,
        value: Cu(null)
    });
    var Mu, Du, Bu, Fu = function (t) {
            ju[Uu][t] = !0
        },
        _u = {},
        Nu = !w((function () {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })),
        Vu = D,
        Gu = z,
        Wu = U,
        Yu = Nu,
        $u = Me("IE_PROTO"),
        zu = Object,
        Hu = zu.prototype,
        Ku = Yu ? zu.getPrototypeOf : function (t) {
            var r = Wu(t);
            if (Vu(r, $u)) return r[$u];
            var e = r.constructor;
            return Gu(e) && r instanceof e ? e.prototype : r instanceof zu ? Hu : null
        },
        Xu = w,
        Ju = z,
        qu = X,
        Zu = Ku,
        Qu = wn,
        tc = gr("iterator"),
        rc = !1;
    [].keys && ("next" in (Bu = [].keys()) ? (Du = Zu(Zu(Bu))) !== Object.prototype && (Mu = Du) : rc = !0);
    var ec = !qu(Mu) || Xu((function () {
        var t = {};
        return Mu[tc].call(t) !== t
    }));
    ec && (Mu = {}), Ju(Mu[tc]) || Qu(Mu, tc, (function () {
        return this
    }));
    var nc = {
            IteratorPrototype: Mu,
            BUGGY_SAFARI_ITERATORS: rc
        },
        ic = W.f,
        oc = D,
        ac = gr("toStringTag"),
        uc = function (t, r, e) {
            t && !e && (t = t.prototype), t && !oc(t, ac) && ic(t, ac, {
                configurable: !0,
                value: r
            })
        },
        cc = nc.IteratorPrototype,
        sc = yo,
        fc = Jr,
        lc = uc,
        hc = _u,
        vc = function () {
            return this
        },
        gc = z,
        pc = String,
        dc = TypeError,
        yc = x,
        wc = at,
        bc = function (t) {
            if ("object" == typeof t || gc(t)) return t;
            throw dc("Can't set " + pc(t) + " as a prototype")
        },
        mc = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t, r = !1,
                e = {};
            try {
                (t = yc(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(e, []), r = e instanceof Array
            } catch (t) {}
            return function (e, n) {
                return wc(e), bc(n), r ? t(e, n) : e.__proto__ = n, e
            }
        }() : void 0),
        Ec = Ei,
        Ac = st,
        Sc = z,
        Tc = function (t, r, e, n) {
            var i = r + " Iterator";
            return t.prototype = sc(cc, {
                next: fc(+!n, e)
            }), lc(t, i, !1), hc[i] = vc, t
        },
        Oc = Ku,
        xc = mc,
        Ic = uc,
        kc = me,
        Rc = wn,
        Pc = _u,
        Cc = G.PROPER,
        Lc = G.CONFIGURABLE,
        Uc = nc.IteratorPrototype,
        jc = nc.BUGGY_SAFARI_ITERATORS,
        Mc = gr("iterator"),
        Dc = "keys",
        Bc = "values",
        Fc = "entries",
        _c = function () {
            return this
        },
        Nc = ce,
        Vc = Fu,
        Gc = _u,
        Wc = tn,
        Yc = W.f,
        $c = function (t, r, e, n, i, o, a) {
            Tc(e, r, n);
            var u, c, s, f = function (t) {
                    if (t === i && p) return p;
                    if (!jc && t in v) return v[t];
                    switch (t) {
                        case Dc:
                        case Bc:
                        case Fc:
                            return function () {
                                return new e(this, t)
                            }
                    }
                    return function () {
                        return new e(this)
                    }
                },
                l = r + " Iterator",
                h = !1,
                v = t.prototype,
                g = v[Mc] || v["@@iterator"] || i && v[i],
                p = !jc && g || f(i),
                d = "Array" == r && v.entries || g;
            if (d && (u = Oc(d.call(new t))) !== Object.prototype && u.next && (Oc(u) !== Uc && (xc ? xc(u, Uc) : Sc(u[Mc]) || Rc(u, Mc, _c)), Ic(u, l, !0)), Cc && i == Bc && g && g.name !== Bc && (Lc ? kc(v, "name", Bc) : (h = !0, p = function () {
                    return Ac(g, this)
                })), i)
                if (c = {
                        values: f(Bc),
                        keys: o ? p : f(Dc),
                        entries: f(Fc)
                    }, a)
                    for (s in c)(jc || h || !(s in v)) && Rc(v, s, c[s]);
                else Ec({
                    target: r,
                    proto: !0,
                    forced: jc || h
                }, c);
            return v[Mc] !== p && Rc(v, Mc, p, {
                name: i
            }), Pc[r] = p, c
        },
        zc = function (t, r) {
            return {
                value: t,
                done: r
            }
        },
        Hc = b,
        Kc = "Array Iterator",
        Xc = Wc.set,
        Jc = Wc.getterFor(Kc),
        qc = $c(Array, "Array", (function (t, r) {
            Xc(this, {
                type: Kc,
                target: Nc(t),
                index: 0,
                kind: r
            })
        }), (function () {
            var t = Jc(this),
                r = t.target,
                e = t.kind,
                n = t.index++;
            return !r || n >= r.length ? (t.target = void 0, zc(void 0, !0)) : zc("keys" == e ? n : "values" == e ? r[n] : [n, r[n]], !1)
        }), "values"),
        Zc = Gc.Arguments = Gc.Array;
    if (Vc("keys"), Vc("values"), Vc("entries"), Hc && "values" !== Zc.name) try {
        Yc(Zc, "name", {
            value: "values"
        })
    } catch (t) {}
    var Qc = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
        ts = wn,
        rs = gt,
        es = TypeError,
        ns = function (t, r) {
            if (rs(r, t)) return t;
            throw es("Incorrect invocation")
        },
        is = Sn,
        os = Pn,
        as = RangeError,
        us = function (t) {
            if (void 0 === t) return 0;
            var r = is(t),
                e = os(r);
            if (r !== e) throw as("Wrong length or index");
            return e
        },
        cs = Array,
        ss = Math.abs,
        fs = Math.pow,
        ls = Math.floor,
        hs = Math.log,
        vs = Math.LN2,
        gs = {
            pack: function (t, r, e) {
                var n, i, o, a = cs(e),
                    u = 8 * e - r - 1,
                    c = (1 << u) - 1,
                    s = c >> 1,
                    f = 23 === r ? fs(2, -24) - fs(2, -77) : 0,
                    l = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0,
                    h = 0;
                for ((t = ss(t)) != t || t === 1 / 0 ? (i = t != t ? 1 : 0, n = c) : (n = ls(hs(t) / vs), t * (o = fs(2, -n)) < 1 && (n--, o *= 2), (t += n + s >= 1 ? f / o : f * fs(2, 1 - s)) * o >= 2 && (n++, o /= 2), n + s >= c ? (i = 0, n = c) : n + s >= 1 ? (i = (t * o - 1) * fs(2, r), n += s) : (i = t * fs(2, s - 1) * fs(2, r), n = 0)); r >= 8;) a[h++] = 255 & i, i /= 256, r -= 8;
                for (n = n << r | i, u += r; u > 0;) a[h++] = 255 & n, n /= 256, u -= 8;
                return a[--h] |= 128 * l, a
            },
            unpack: function (t, r) {
                var e, n = t.length,
                    i = 8 * n - r - 1,
                    o = (1 << i) - 1,
                    a = o >> 1,
                    u = i - 7,
                    c = n - 1,
                    s = t[c--],
                    f = 127 & s;
                for (s >>= 7; u > 0;) f = 256 * f + t[c--], u -= 8;
                for (e = f & (1 << -u) - 1, f >>= -u, u += r; u > 0;) e = 256 * e + t[c--], u -= 8;
                if (0 === f) f = 1 - a;
                else {
                    if (f === o) return e ? NaN : s ? -1 / 0 : 1 / 0;
                    e += fs(2, r), f -= a
                }
                return (s ? -1 : 1) * e * fs(2, f - r)
            }
        },
        ps = U,
        ds = In,
        ys = Ln,
        ws = function (t) {
            for (var r = ps(this), e = ys(r), n = arguments.length, i = ds(n > 1 ? arguments[1] : void 0, e), o = n > 2 ? arguments[2] : void 0, a = void 0 === o ? e : ds(o, e); a > i;) r[i++] = t;
            return r
        },
        bs = $,
        ms = x,
        Es = b,
        As = Qc,
        Ss = G,
        Ts = me,
        Os = function (t, r, e) {
            for (var n in r) ts(t, n, r[n], e);
            return t
        },
        xs = w,
        Is = ns,
        ks = Sn,
        Rs = Pn,
        Ps = us,
        Cs = gs,
        Ls = Ku,
        Us = mc,
        js = bn.f,
        Ms = W.f,
        Ds = ws,
        Bs = qa,
        Fs = uc,
        _s = Ss.PROPER,
        Ns = Ss.CONFIGURABLE,
        Vs = tn.get,
        Gs = tn.set,
        Ws = "ArrayBuffer",
        Ys = "DataView",
        $s = "Wrong index",
        zs = bs.ArrayBuffer,
        Hs = zs,
        Ks = Hs && Hs.prototype,
        Xs = bs.DataView,
        Js = Xs && Xs.prototype,
        qs = Object.prototype,
        Zs = bs.Array,
        Qs = bs.RangeError,
        tf = ms(Ds),
        rf = ms([].reverse),
        ef = Cs.pack,
        nf = Cs.unpack,
        of = function (t) {
            return [255 & t]
        },
        af = function (t) {
            return [255 & t, t >> 8 & 255]
        },
        uf = function (t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        },
        cf = function (t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        },
        sf = function (t) {
            return ef(t, 23, 4)
        },
        ff = function (t) {
            return ef(t, 52, 8)
        },
        lf = function (t, r) {
            Ms(t.prototype, r, {
                get: function () {
                    return Vs(this)[r]
                }
            })
        },
        hf = function (t, r, e, n) {
            var i = Ps(e),
                o = Vs(t);
            if (i + r > o.byteLength) throw Qs($s);
            var a = Vs(o.buffer).bytes,
                u = i + o.byteOffset,
                c = Bs(a, u, u + r);
            return n ? c : rf(c)
        },
        vf = function (t, r, e, n, i, o) {
            var a = Ps(e),
                u = Vs(t);
            if (a + r > u.byteLength) throw Qs($s);
            for (var c = Vs(u.buffer).bytes, s = a + u.byteOffset, f = n(+i), l = 0; l < r; l++) c[s + l] = f[o ? l : r - l - 1]
        };
    if (As) {
        var gf = _s && zs.name !== Ws;
        if (xs((function () {
                zs(1)
            })) && xs((function () {
                new zs(-1)
            })) && !xs((function () {
                return new zs, new zs(1.5), new zs(NaN), 1 != zs.length || gf && !Ns
            }))) gf && Ns && Ts(zs, "name", Ws);
        else {
            (Hs = function (t) {
                return Is(this, Ks), new zs(Ps(t))
            }).prototype = Ks;
            for (var pf, df = js(zs), yf = 0; df.length > yf;)(pf = df[yf++]) in Hs || Ts(Hs, pf, zs[pf]);
            Ks.constructor = Hs
        }
        Us && Ls(Js) !== qs && Us(Js, qs);
        var wf = new Xs(new Hs(2)),
            bf = ms(Js.setInt8);
        wf.setInt8(0, 2147483648), wf.setInt8(1, 2147483649), !wf.getInt8(0) && wf.getInt8(1) || Os(Js, {
            setInt8: function (t, r) {
                bf(this, t, r << 24 >> 24)
            },
            setUint8: function (t, r) {
                bf(this, t, r << 24 >> 24)
            }
        }, {
            unsafe: !0
        })
    } else Ks = (Hs = function (t) {
        Is(this, Ks);
        var r = Ps(t);
        Gs(this, {
            bytes: tf(Zs(r), 0),
            byteLength: r
        }), Es || (this.byteLength = r)
    }).prototype, Js = (Xs = function (t, r, e) {
        Is(this, Js), Is(t, Ks);
        var n = Vs(t).byteLength,
            i = ks(r);
        if (i < 0 || i > n) throw Qs("Wrong offset");
        if (i + (e = void 0 === e ? n - i : Rs(e)) > n) throw Qs("Wrong length");
        Gs(this, {
            buffer: t,
            byteLength: e,
            byteOffset: i
        }), Es || (this.buffer = t, this.byteLength = e, this.byteOffset = i)
    }).prototype, Es && (lf(Hs, "byteLength"), lf(Xs, "buffer"), lf(Xs, "byteLength"), lf(Xs, "byteOffset")), Os(Js, {
        getInt8: function (t) {
            return hf(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function (t) {
            return hf(this, 1, t)[0]
        },
        getInt16: function (t) {
            var r = hf(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
            return (r[1] << 8 | r[0]) << 16 >> 16
        },
        getUint16: function (t) {
            var r = hf(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
            return r[1] << 8 | r[0]
        },
        getInt32: function (t) {
            return cf(hf(this, 4, t, arguments.length > 1 ? arguments[1] : void 0))
        },
        getUint32: function (t) {
            return cf(hf(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
        },
        getFloat32: function (t) {
            return nf(hf(this, 4, t, arguments.length > 1 ? arguments[1] : void 0), 23)
        },
        getFloat64: function (t) {
            return nf(hf(this, 8, t, arguments.length > 1 ? arguments[1] : void 0), 52)
        },
        setInt8: function (t, r) {
            vf(this, 1, t, of , r)
        },
        setUint8: function (t, r) {
            vf(this, 1, t, of , r)
        },
        setInt16: function (t, r) {
            vf(this, 2, t, af, r, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint16: function (t, r) {
            vf(this, 2, t, af, r, arguments.length > 2 ? arguments[2] : void 0)
        },
        setInt32: function (t, r) {
            vf(this, 4, t, uf, r, arguments.length > 2 ? arguments[2] : void 0)
        },
        setUint32: function (t, r) {
            vf(this, 4, t, uf, r, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat32: function (t, r) {
            vf(this, 4, t, sf, r, arguments.length > 2 ? arguments[2] : void 0)
        },
        setFloat64: function (t, r) {
            vf(this, 8, t, ff, r, arguments.length > 2 ? arguments[2] : void 0)
        }
    });
    Fs(Hs, Ws), Fs(Xs, Ys);
    var mf = {
            ArrayBuffer: Hs,
            DataView: Xs
        },
        Ef = Ei,
        Af = x,
        Sf = w,
        Tf = at,
        Of = In,
        xf = Pn,
        If = Ca,
        kf = mf.ArrayBuffer,
        Rf = mf.DataView,
        Pf = Rf.prototype,
        Cf = Af(kf.prototype.slice),
        Lf = Af(Pf.getUint8),
        Uf = Af(Pf.setUint8);
    Ef({
        target: "ArrayBuffer",
        proto: !0,
        unsafe: !0,
        forced: Sf((function () {
            return !new kf(2).slice(1, void 0).byteLength
        }))
    }, {
        slice: function (t, r) {
            if (Cf && void 0 === r) return Cf(Tf(this), t);
            for (var e = Tf(this).byteLength, n = Of(t, e), i = Of(void 0 === r ? e : r, e), o = new(If(this, kf))(xf(i - n)), a = new Rf(this), u = new Rf(o), c = 0; n < i;) Uf(u, c++, Lf(a, n++));
            return o
        }
    });
    var jf = zi,
        Mf = _i ? {}.toString : function () {
            return "[object " + jf(this) + "]"
        };
    _i || wn(Object.prototype, "toString", Mf, {
        unsafe: !0
    });
    var Df = {
            exports: {}
        },
        Bf = gr("iterator"),
        Ff = !1;
    try {
        var _f = 0,
            Nf = {
                next: function () {
                    return {
                        done: !!_f++
                    }
                },
                return: function () {
                    Ff = !0
                }
            };
        Nf[Bf] = function () {
            return this
        }, Array.from(Nf, (function () {
            throw 2
        }))
    } catch (t) {}
    var Vf, Gf, Wf, Yf = Qc,
        $f = b,
        zf = $,
        Hf = z,
        Kf = X,
        Xf = D,
        Jf = zi,
        qf = Ut,
        Zf = me,
        Qf = wn,
        tl = W.f,
        rl = gt,
        el = Ku,
        nl = mc,
        il = gr,
        ol = nr,
        al = tn.enforce,
        ul = tn.get,
        cl = zf.Int8Array,
        sl = cl && cl.prototype,
        fl = zf.Uint8ClampedArray,
        ll = fl && fl.prototype,
        hl = cl && el(cl),
        vl = sl && el(sl),
        gl = Object.prototype,
        pl = zf.TypeError,
        dl = il("toStringTag"),
        yl = ol("TYPED_ARRAY_TAG"),
        wl = "TypedArrayConstructor",
        bl = Yf && !!nl && "Opera" !== Jf(zf.opera),
        ml = !1,
        El = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        },
        Al = {
            BigInt64Array: 8,
            BigUint64Array: 8
        },
        Sl = function (t) {
            var r = el(t);
            if (Kf(r)) {
                var e = ul(r);
                return e && Xf(e, wl) ? e.TypedArrayConstructor : Sl(r)
            }
        },
        Tl = function (t) {
            if (!Kf(t)) return !1;
            var r = Jf(t);
            return Xf(El, r) || Xf(Al, r)
        };
    for (Vf in El)(Wf = (Gf = zf[Vf]) && Gf.prototype) ? al(Wf).TypedArrayConstructor = Gf : bl = !1;
    for (Vf in Al)(Wf = (Gf = zf[Vf]) && Gf.prototype) && (al(Wf).TypedArrayConstructor = Gf);
    if ((!bl || !Hf(hl) || hl === Function.prototype) && (hl = function () {
            throw pl("Incorrect invocation")
        }, bl))
        for (Vf in El) zf[Vf] && nl(zf[Vf], hl);
    if ((!bl || !vl || vl === gl) && (vl = hl.prototype, bl))
        for (Vf in El) zf[Vf] && nl(zf[Vf].prototype, vl);
    if (bl && el(ll) !== vl && nl(ll, vl), $f && !Xf(vl, dl))
        for (Vf in ml = !0, tl(vl, dl, {
                get: function () {
                    return Kf(this) ? this[yl] : void 0
                }
            }), El) zf[Vf] && Zf(zf[Vf], yl, Vf);
    var Ol = {
            NATIVE_ARRAY_BUFFER_VIEWS: bl,
            TYPED_ARRAY_TAG: ml && yl,
            aTypedArray: function (t) {
                if (Tl(t)) return t;
                throw pl("Target is not a typed array")
            },
            aTypedArrayConstructor: function (t) {
                if (Hf(t) && (!nl || rl(hl, t))) return t;
                throw pl(qf(t) + " is not a typed array constructor")
            },
            exportTypedArrayMethod: function (t, r, e, n) {
                if ($f) {
                    if (e)
                        for (var i in El) {
                            var o = zf[i];
                            if (o && Xf(o.prototype, t)) try {
                                delete o.prototype[t]
                            } catch (e) {
                                try {
                                    o.prototype[t] = r
                                } catch (t) {}
                            }
                        }
                    vl[t] && !e || Qf(vl, t, e ? r : bl && sl[t] || r, n)
                }
            },
            exportTypedArrayStaticMethod: function (t, r, e) {
                var n, i;
                if ($f) {
                    if (nl) {
                        if (e)
                            for (n in El)
                                if ((i = zf[n]) && Xf(i, t)) try {
                                    delete i[t]
                                } catch (t) {}
                        if (hl[t] && !e) return;
                        try {
                            return Qf(hl, t, e ? r : bl && hl[t] || r)
                        } catch (t) {}
                    }
                    for (n in El) !(i = zf[n]) || i[t] && !e || Qf(i, t, r)
                }
            },
            getTypedArrayConstructor: Sl,
            isView: function (t) {
                if (!Kf(t)) return !1;
                var r = Jf(t);
                return "DataView" === r || Xf(El, r) || Xf(Al, r)
            },
            isTypedArray: Tl,
            TypedArray: hl,
            TypedArrayPrototype: vl
        },
        xl = $,
        Il = w,
        kl = function (t, r) {
            if (!r && !Ff) return !1;
            var e = !1;
            try {
                var n = {};
                n[Bf] = function () {
                    return {
                        next: function () {
                            return {
                                done: e = !0
                            }
                        }
                    }
                }, t(n)
            } catch (t) {}
            return e
        },
        Rl = Ol.NATIVE_ARRAY_BUFFER_VIEWS,
        Pl = xl.ArrayBuffer,
        Cl = xl.Int8Array,
        Ll = !Rl || !Il((function () {
            Cl(1)
        })) || !Il((function () {
            new Cl(-1)
        })) || !kl((function (t) {
            new Cl, new Cl(null), new Cl(1.5), new Cl(t)
        }), !0) || Il((function () {
            return 1 !== new Cl(new Pl(2), 1, void 0).length
        })),
        Ul = X,
        jl = Math.floor,
        Ml = Number.isInteger || function (t) {
            return !Ul(t) && isFinite(t) && jl(t) === t
        },
        Dl = Sn,
        Bl = RangeError,
        Fl = function (t) {
            var r = Dl(t);
            if (r < 0) throw Bl("The argument can't be less than 0");
            return r
        },
        _l = RangeError,
        Nl = function (t, r) {
            var e = Fl(t);
            if (e % r) throw _l("Wrong offset");
            return e
        },
        Vl = Bt,
        Gl = m,
        Wl = x(x.bind),
        Yl = function (t, r) {
            return Vl(t), void 0 === r ? t : Gl ? Wl(t, r) : function () {
                return t.apply(r, arguments)
            }
        },
        $l = zi,
        zl = Nt,
        Hl = I,
        Kl = _u,
        Xl = gr("iterator"),
        Jl = function (t) {
            if (!Hl(t)) return zl(t, Xl) || zl(t, "@@iterator") || Kl[$l(t)]
        },
        ql = st,
        Zl = Bt,
        Ql = at,
        th = Ut,
        rh = Jl,
        eh = TypeError,
        nh = _u,
        ih = gr("iterator"),
        oh = Array.prototype,
        ah = zi,
        uh = x("".slice),
        ch = Ar,
        sh = TypeError,
        fh = function (t) {
            var r = ch(t, "number");
            if ("number" == typeof r) throw sh("Can't convert number to bigint");
            return BigInt(r)
        },
        lh = Yl,
        hh = st,
        vh = xa,
        gh = U,
        ph = Ln,
        dh = function (t, r) {
            var e = arguments.length < 2 ? rh(t) : r;
            if (Zl(e)) return Ql(ql(e, t));
            throw eh(th(t) + " is not iterable")
        },
        yh = Jl,
        wh = function (t) {
            return void 0 !== t && (nh.Array === t || oh[ih] === t)
        },
        bh = function (t) {
            return "Big" === uh(ah(t), 0, 3)
        },
        mh = Ol.aTypedArrayConstructor,
        Eh = fh,
        Ah = Di,
        Sh = Aa,
        Th = X,
        Oh = gr("species"),
        xh = Array,
        Ih = function (t) {
            var r;
            return Ah(t) && (r = t.constructor, (Sh(r) && (r === xh || Ah(r.prototype)) || Th(r) && null === (r = r[Oh])) && (r = void 0)), void 0 === r ? xh : r
        },
        kh = function (t, r) {
            return new(Ih(t))(0 === r ? 0 : r)
        },
        Rh = Yl,
        Ph = oe,
        Ch = U,
        Lh = Ln,
        Uh = kh,
        jh = x([].push),
        Mh = function (t) {
            var r = 1 == t,
                e = 2 == t,
                n = 3 == t,
                i = 4 == t,
                o = 6 == t,
                a = 7 == t,
                u = 5 == t || o;
            return function (c, s, f, l) {
                for (var h, v, g = Ch(c), p = Ph(g), d = Rh(s, f), y = Lh(p), w = 0, b = l || Uh, m = r ? b(c, y) : e || a ? b(c, 0) : void 0; y > w; w++)
                    if ((u || w in p) && (v = d(h = p[w], w, g), t))
                        if (r) m[w] = v;
                        else if (v) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return w;
                    case 2:
                        jh(m, h)
                } else switch (t) {
                    case 4:
                        return !1;
                    case 7:
                        jh(m, h)
                }
                return o ? -1 : n || i ? i : m
            }
        },
        Dh = {
            forEach: Mh(0),
            map: Mh(1),
            filter: Mh(2),
            some: Mh(3),
            every: Mh(4),
            find: Mh(5),
            findIndex: Mh(6),
            filterReject: Mh(7)
        },
        Bh = vt,
        Fh = W,
        _h = b,
        Nh = gr("species"),
        Vh = function (t) {
            var r = Bh(t),
                e = Fh.f;
            _h && r && !r[Nh] && e(r, Nh, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        },
        Gh = z,
        Wh = X,
        Yh = mc,
        $h = function (t, r, e) {
            var n, i;
            return Yh && Gh(n = r.constructor) && n !== e && Wh(i = n.prototype) && i !== e.prototype && Yh(t, i), t
        },
        zh = Ei,
        Hh = $,
        Kh = st,
        Xh = b,
        Jh = Ll,
        qh = Ol,
        Zh = mf,
        Qh = ns,
        tv = Jr,
        rv = me,
        ev = Ml,
        nv = Pn,
        iv = us,
        ov = Nl,
        av = Or,
        uv = D,
        cv = zi,
        sv = X,
        fv = Ct,
        lv = yo,
        hv = gt,
        vv = mc,
        gv = bn.f,
        pv = function (t) {
            var r, e, n, i, o, a, u, c, s = vh(this),
                f = gh(t),
                l = arguments.length,
                h = l > 1 ? arguments[1] : void 0,
                v = void 0 !== h,
                g = yh(f);
            if (g && !wh(g))
                for (c = (u = dh(f, g)).next, f = []; !(a = hh(c, u)).done;) f.push(a.value);
            for (v && l > 2 && (h = lh(h, arguments[2])), e = ph(f), n = new(mh(s))(e), i = bh(n), r = 0; e > r; r++) o = v ? h(f[r], r) : f[r], n[r] = i ? Eh(o) : +o;
            return n
        },
        dv = Dh.forEach,
        yv = Vh,
        wv = W,
        bv = $r,
        mv = $h,
        Ev = tn.get,
        Av = tn.set,
        Sv = tn.enforce,
        Tv = wv.f,
        Ov = bv.f,
        xv = Math.round,
        Iv = Hh.RangeError,
        kv = Zh.ArrayBuffer,
        Rv = kv.prototype,
        Pv = Zh.DataView,
        Cv = qh.NATIVE_ARRAY_BUFFER_VIEWS,
        Lv = qh.TYPED_ARRAY_TAG,
        Uv = qh.TypedArray,
        jv = qh.TypedArrayPrototype,
        Mv = qh.aTypedArrayConstructor,
        Dv = qh.isTypedArray,
        Bv = "BYTES_PER_ELEMENT",
        Fv = "Wrong length",
        _v = function (t, r) {
            Mv(t);
            for (var e = 0, n = r.length, i = new t(n); n > e;) i[e] = r[e++];
            return i
        },
        Nv = function (t, r) {
            Tv(t, r, {
                get: function () {
                    return Ev(this)[r]
                }
            })
        },
        Vv = function (t) {
            var r;
            return hv(Rv, t) || "ArrayBuffer" == (r = cv(t)) || "SharedArrayBuffer" == r
        },
        Gv = function (t, r) {
            return Dv(t) && !fv(r) && r in t && ev(+r) && r >= 0
        },
        Wv = function (t, r) {
            return r = av(r), Gv(t, r) ? tv(2, t[r]) : Ov(t, r)
        },
        Yv = function (t, r, e) {
            return r = av(r), !(Gv(t, r) && sv(e) && uv(e, "value")) || uv(e, "get") || uv(e, "set") || e.configurable || uv(e, "writable") && !e.writable || uv(e, "enumerable") && !e.enumerable ? Tv(t, r, e) : (t[r] = e.value, t)
        };
    Xh ? (Cv || (bv.f = Wv, wv.f = Yv, Nv(jv, "buffer"), Nv(jv, "byteOffset"), Nv(jv, "byteLength"), Nv(jv, "length")), zh({
        target: "Object",
        stat: !0,
        forced: !Cv
    }, {
        getOwnPropertyDescriptor: Wv,
        defineProperty: Yv
    }), Df.exports = function (t, r, e) {
        var n = t.match(/\d+$/)[0] / 8,
            i = t + (e ? "Clamped" : "") + "Array",
            o = "get" + t,
            a = "set" + t,
            u = Hh[i],
            c = u,
            s = c && c.prototype,
            f = {},
            l = function (t, r) {
                Tv(t, r, {
                    get: function () {
                        return function (t, r) {
                            var e = Ev(t);
                            return e.view[o](r * n + e.byteOffset, !0)
                        }(this, r)
                    },
                    set: function (t) {
                        return function (t, r, i) {
                            var o = Ev(t);
                            e && (i = (i = xv(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), o.view[a](r * n + o.byteOffset, i, !0)
                        }(this, r, t)
                    },
                    enumerable: !0
                })
            };
        Cv ? Jh && (c = r((function (t, r, e, i) {
            return Qh(t, s), mv(sv(r) ? Vv(r) ? void 0 !== i ? new u(r, ov(e, n), i) : void 0 !== e ? new u(r, ov(e, n)) : new u(r) : Dv(r) ? _v(c, r) : Kh(pv, c, r) : new u(iv(r)), t, c)
        })), vv && vv(c, Uv), dv(gv(u), (function (t) {
            t in c || rv(c, t, u[t])
        })), c.prototype = s) : (c = r((function (t, r, e, i) {
            Qh(t, s);
            var o, a, u, f = 0,
                h = 0;
            if (sv(r)) {
                if (!Vv(r)) return Dv(r) ? _v(c, r) : Kh(pv, c, r);
                o = r, h = ov(e, n);
                var v = r.byteLength;
                if (void 0 === i) {
                    if (v % n) throw Iv(Fv);
                    if ((a = v - h) < 0) throw Iv(Fv)
                } else if ((a = nv(i) * n) + h > v) throw Iv(Fv);
                u = a / n
            } else u = iv(r), o = new kv(a = u * n);
            for (Av(t, {
                    buffer: o,
                    byteOffset: h,
                    byteLength: a,
                    length: u,
                    view: new Pv(o)
                }); f < u;) l(t, f++)
        })), vv && vv(c, Uv), s = c.prototype = lv(jv)), s.constructor !== c && rv(s, "constructor", c), Sv(s).TypedArrayConstructor = c, Lv && rv(s, Lv, i);
        var h = c != u;
        f[i] = c, zh({
            global: !0,
            constructor: !0,
            forced: h,
            sham: !Cv
        }, f), Bv in c || rv(c, Bv, n), Bv in s || rv(s, Bv, n), yv(i)
    }) : Df.exports = function () {}, (0, Df.exports)("Uint8", (function (t) {
        return function (r, e, n) {
            return t(this, r, e, n)
        }
    }));
    var $v = Ut,
        zv = TypeError,
        Hv = U,
        Kv = In,
        Xv = Ln,
        Jv = function (t, r) {
            if (!delete t[r]) throw zv("Cannot delete property " + $v(r) + " of " + $v(t))
        },
        qv = Math.min,
        Zv = [].copyWithin || function (t, r) {
            var e = Hv(this),
                n = Xv(e),
                i = Kv(t, n),
                o = Kv(r, n),
                a = arguments.length > 2 ? arguments[2] : void 0,
                u = qv((void 0 === a ? n : Kv(a, n)) - o, n - i),
                c = 1;
            for (o < i && i < o + u && (c = -1, o += u - 1, i += u - 1); u-- > 0;) o in e ? e[i] = e[o] : Jv(e, i), i += c, o += c;
            return e
        },
        Qv = Ol,
        tg = x(Zv),
        rg = Qv.aTypedArray;
    (0, Qv.exportTypedArrayMethod)("copyWithin", (function (t, r) {
        return tg(rg(this), t, r, arguments.length > 2 ? arguments[2] : void 0)
    }));
    var eg = Dh.every,
        ng = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("every", (function (t) {
        return eg(ng(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var ig = ws,
        og = fh,
        ag = zi,
        ug = st,
        cg = w,
        sg = Ol.aTypedArray,
        fg = Ol.exportTypedArrayMethod,
        lg = x("".slice);
    fg("fill", (function (t) {
        var r = arguments.length;
        sg(this);
        var e = "Big" === lg(ag(this), 0, 3) ? og(t) : +t;
        return ug(ig, this, e, r > 1 ? arguments[1] : void 0, r > 2 ? arguments[2] : void 0)
    }), cg((function () {
        var t = 0;
        return new Int8Array(2).fill({
            valueOf: function () {
                return t++
            }
        }), 1 !== t
    })));
    var hg = Ln,
        vg = Ca,
        gg = Ol.aTypedArrayConstructor,
        pg = Ol.getTypedArrayConstructor,
        dg = function (t) {
            return gg(vg(t, pg(t)))
        },
        yg = function (t, r) {
            for (var e = 0, n = hg(r), i = new t(n); n > e;) i[e] = r[e++];
            return i
        },
        wg = dg,
        bg = Dh.filter,
        mg = function (t, r) {
            return yg(wg(t), r)
        },
        Eg = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("filter", (function (t) {
        var r = bg(Eg(this), t, arguments.length > 1 ? arguments[1] : void 0);
        return mg(this, r)
    }));
    var Ag = Dh.find,
        Sg = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("find", (function (t) {
        return Ag(Sg(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Tg = Dh.findIndex,
        Og = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("findIndex", (function (t) {
        return Tg(Og(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var xg = Dh.forEach,
        Ig = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("forEach", (function (t) {
        xg(Ig(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var kg = Bn.includes,
        Rg = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("includes", (function (t) {
        return kg(Rg(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Pg = Bn.indexOf,
        Cg = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("indexOf", (function (t) {
        return Pg(Cg(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Lg = $,
        Ug = w,
        jg = x,
        Mg = Ol,
        Dg = qc,
        Bg = gr("iterator"),
        Fg = Lg.Uint8Array,
        _g = jg(Dg.values),
        Ng = jg(Dg.keys),
        Vg = jg(Dg.entries),
        Gg = Mg.aTypedArray,
        Wg = Mg.exportTypedArrayMethod,
        Yg = Fg && Fg.prototype,
        $g = !Ug((function () {
            Yg[Bg].call([1])
        })),
        zg = !!Yg && Yg.values && Yg[Bg] === Yg.values && "values" === Yg.values.name,
        Hg = function () {
            return _g(Gg(this))
        };
    Wg("entries", (function () {
        return Vg(Gg(this))
    }), $g), Wg("keys", (function () {
        return Ng(Gg(this))
    }), $g), Wg("values", Hg, $g || !zg, {
        name: "values"
    }), Wg(Bg, Hg, $g || !zg, {
        name: "values"
    });
    var Kg = Ol.aTypedArray,
        Xg = Ol.exportTypedArrayMethod,
        Jg = x([].join);
    Xg("join", (function (t) {
        return Jg(Kg(this), t)
    }));
    var qg = w,
        Zg = function (t, r) {
            var e = [][t];
            return !!e && qg((function () {
                e.call(null, r || function () {
                    return 1
                }, 1)
            }))
        },
        Qg = Xo,
        tp = ce,
        rp = Sn,
        ep = Ln,
        np = Zg,
        ip = Math.min,
        op = [].lastIndexOf,
        ap = !!op && 1 / [1].lastIndexOf(1, -0) < 0,
        up = np("lastIndexOf"),
        cp = ap || !up ? function (t) {
            if (ap) return Qg(op, this, arguments) || 0;
            var r = tp(this),
                e = ep(r),
                n = e - 1;
            for (arguments.length > 1 && (n = ip(n, rp(arguments[1]))), n < 0 && (n = e + n); n >= 0; n--)
                if (n in r && r[n] === t) return n || 0;
            return -1
        } : op,
        sp = Xo,
        fp = cp,
        lp = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("lastIndexOf", (function (t) {
        var r = arguments.length;
        return sp(fp, lp(this), r > 1 ? [t, arguments[1]] : [t])
    }));
    var hp = Dh.map,
        vp = dg,
        gp = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("map", (function (t) {
        return hp(gp(this), t, arguments.length > 1 ? arguments[1] : void 0, (function (t, r) {
            return new(vp(t))(r)
        }))
    }));
    var pp = Bt,
        dp = U,
        yp = oe,
        wp = Ln,
        bp = TypeError,
        mp = function (t) {
            return function (r, e, n, i) {
                pp(e);
                var o = dp(r),
                    a = yp(o),
                    u = wp(o),
                    c = t ? u - 1 : 0,
                    s = t ? -1 : 1;
                if (n < 2)
                    for (;;) {
                        if (c in a) {
                            i = a[c], c += s;
                            break
                        }
                        if (c += s, t ? c < 0 : u <= c) throw bp("Reduce of empty array with no initial value")
                    }
                for (; t ? c >= 0 : u > c; c += s) c in a && (i = e(i, a[c], c, o));
                return i
            }
        },
        Ep = {
            left: mp(!1),
            right: mp(!0)
        },
        Ap = Ep.left,
        Sp = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("reduce", (function (t) {
        var r = arguments.length;
        return Ap(Sp(this), t, r, r > 1 ? arguments[1] : void 0)
    }));
    var Tp = Ep.right,
        Op = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("reduceRight", (function (t) {
        var r = arguments.length;
        return Tp(Op(this), t, r, r > 1 ? arguments[1] : void 0)
    }));
    var xp = Ol.aTypedArray,
        Ip = Ol.exportTypedArrayMethod,
        kp = Math.floor;
    Ip("reverse", (function () {
        for (var t, r = this, e = xp(r).length, n = kp(e / 2), i = 0; i < n;) t = r[i], r[i++] = r[--e], r[e] = t;
        return r
    }));
    var Rp = $,
        Pp = st,
        Cp = Ol,
        Lp = Ln,
        Up = Nl,
        jp = U,
        Mp = w,
        Dp = Rp.RangeError,
        Bp = Rp.Int8Array,
        Fp = Bp && Bp.prototype,
        _p = Fp && Fp.set,
        Np = Cp.aTypedArray,
        Vp = Cp.exportTypedArrayMethod,
        Gp = !Mp((function () {
            var t = new Uint8ClampedArray(2);
            return Pp(_p, t, {
                length: 1,
                0: 3
            }, 1), 3 !== t[1]
        })),
        Wp = Gp && Cp.NATIVE_ARRAY_BUFFER_VIEWS && Mp((function () {
            var t = new Bp(2);
            return t.set(1), t.set("2", 1), 0 !== t[0] || 2 !== t[1]
        }));
    Vp("set", (function (t) {
        Np(this);
        var r = Up(arguments.length > 1 ? arguments[1] : void 0, 1),
            e = jp(t);
        if (Gp) return Pp(_p, this, e, r);
        var n = this.length,
            i = Lp(e),
            o = 0;
        if (i + r > n) throw Dp("Wrong length");
        for (; o < i;) this[r + o] = e[o++]
    }), !Gp || Wp);
    var Yp = x([].slice),
        $p = dg,
        zp = Yp,
        Hp = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("slice", (function (t, r) {
        for (var e = zp(Hp(this), t, r), n = $p(this), i = 0, o = e.length, a = new n(o); o > i;) a[i] = e[i++];
        return a
    }), w((function () {
        new Int8Array(1).slice()
    })));
    var Kp = Dh.some,
        Xp = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("some", (function (t) {
        return Kp(Xp(this), t, arguments.length > 1 ? arguments[1] : void 0)
    }));
    var Jp = qa,
        qp = Math.floor,
        Zp = function (t, r) {
            var e = t.length,
                n = qp(e / 2);
            return e < 8 ? Qp(t, r) : td(t, Zp(Jp(t, 0, n), r), Zp(Jp(t, n), r), r)
        },
        Qp = function (t, r) {
            for (var e, n, i = t.length, o = 1; o < i;) {
                for (n = o, e = t[o]; n && r(t[n - 1], e) > 0;) t[n] = t[--n];
                n !== o++ && (t[n] = e)
            }
            return t
        },
        td = function (t, r, e, n) {
            for (var i = r.length, o = e.length, a = 0, u = 0; a < i || u < o;) t[a + u] = a < i && u < o ? n(r[a], e[u]) <= 0 ? r[a++] : e[u++] : a < i ? r[a++] : e[u++];
            return t
        },
        rd = Zp,
        ed = pt.match(/firefox\/(\d+)/i),
        nd = !!ed && +ed[1],
        id = /MSIE|Trident/.test(pt),
        od = pt.match(/AppleWebKit\/(\d+)\./),
        ad = !!od && +od[1],
        ud = x,
        cd = w,
        sd = Bt,
        fd = rd,
        ld = nd,
        hd = id,
        vd = At,
        gd = ad,
        pd = Ol.aTypedArray,
        dd = Ol.exportTypedArrayMethod,
        yd = $.Uint16Array,
        wd = yd && ud(yd.prototype.sort),
        bd = !(!wd || cd((function () {
            wd(new yd(2), null)
        })) && cd((function () {
            wd(new yd(2), {})
        }))),
        md = !!wd && !cd((function () {
            if (vd) return vd < 74;
            if (ld) return ld < 67;
            if (hd) return !0;
            if (gd) return gd < 602;
            var t, r, e = new yd(516),
                n = Array(516);
            for (t = 0; t < 516; t++) r = t % 4, e[t] = 515 - t, n[t] = t - 2 * r + 3;
            for (wd(e, (function (t, r) {
                    return (t / 4 | 0) - (r / 4 | 0)
                })), t = 0; t < 516; t++)
                if (e[t] !== n[t]) return !0
        }));
    dd("sort", (function (t) {
        return void 0 !== t && sd(t), md ? wd(this, t) : fd(pd(this), function (t) {
            return function (r, e) {
                return void 0 !== t ? +t(r, e) || 0 : e != e ? -1 : r != r ? 1 : 0 === r && 0 === e ? 1 / r > 0 && 1 / e < 0 ? 1 : -1 : r > e
            }
        }(t))
    }), !md || bd);
    var Ed = Pn,
        Ad = In,
        Sd = dg,
        Td = Ol.aTypedArray;
    (0, Ol.exportTypedArrayMethod)("subarray", (function (t, r) {
        var e = Td(this),
            n = e.length,
            i = Ad(t, n);
        return new(Sd(e))(e.buffer, e.byteOffset + i * e.BYTES_PER_ELEMENT, Ed((void 0 === r ? n : Ad(r, n)) - i))
    }));
    var Od = Xo,
        xd = Ol,
        Id = w,
        kd = Yp,
        Rd = $.Int8Array,
        Pd = xd.aTypedArray,
        Cd = xd.exportTypedArrayMethod,
        Ld = [].toLocaleString,
        Ud = !!Rd && Id((function () {
            Ld.call(new Rd(1))
        }));
    Cd("toLocaleString", (function () {
        return Od(Ld, Ud ? kd(Pd(this)) : Pd(this), kd(arguments))
    }), Id((function () {
        return [1, 2].toLocaleString() != new Rd([1, 2]).toLocaleString()
    })) || !Id((function () {
        Rd.prototype.toLocaleString.call([1, 2])
    })));
    var jd = Ol.exportTypedArrayMethod,
        Md = w,
        Dd = x,
        Bd = $.Uint8Array,
        Fd = Bd && Bd.prototype || {},
        _d = [].toString,
        Nd = Dd([].join);
    Md((function () {
        _d.call({})
    })) && (_d = function () {
        return Nd(this)
    });
    var Vd = Fd.toString != _d;
    jd("toString", _d, Vd);
    var Gd = w,
        Wd = At,
        Yd = gr("species"),
        $d = function (t) {
            return Wd >= 51 || !Gd((function () {
                var r = [];
                return (r.constructor = {})[Yd] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== r[t](Boolean).foo
            }))
        },
        zd = Ei,
        Hd = Di,
        Kd = Aa,
        Xd = X,
        Jd = In,
        qd = Ln,
        Zd = ce,
        Qd = $a,
        ty = gr,
        ry = Yp,
        ey = $d("slice"),
        ny = ty("species"),
        iy = Array,
        oy = Math.max;
    zd({
        target: "Array",
        proto: !0,
        forced: !ey
    }, {
        slice: function (t, r) {
            var e, n, i, o = Zd(this),
                a = qd(o),
                u = Jd(t, a),
                c = Jd(void 0 === r ? a : r, a);
            if (Hd(o) && (e = o.constructor, (Kd(e) && (e === iy || Hd(e.prototype)) || Xd(e) && null === (e = e[ny])) && (e = void 0), e === iy || void 0 === e)) return ry(o, u, c);
            for (n = new(void 0 === e ? iy : e)(oy(c - u, 0)), i = 0; u < c; u++, i++) u in o && Qd(n, i, o[u]);
            return n.length = i, n
        }
    });
    Ei({
        target: "ArrayBuffer",
        stat: !0,
        forced: !Ol.NATIVE_ARRAY_BUFFER_VIEWS
    }, {
        isView: Ol.isView
    });
    var ay = Vh,
        uy = "ArrayBuffer",
        cy = mf.ArrayBuffer;
    Ei({
        global: !0,
        constructor: !0,
        forced: $.ArrayBuffer !== cy
    }, {
        ArrayBuffer: cy
    }), ay(uy);
    var sy = TypeError,
        fy = Ei,
        ly = w,
        hy = Di,
        vy = X,
        gy = U,
        py = Ln,
        dy = function (t) {
            if (t > 9007199254740991) throw sy("Maximum allowed index exceeded");
            return t
        },
        yy = $a,
        wy = kh,
        by = $d,
        my = At,
        Ey = gr("isConcatSpreadable"),
        Ay = my >= 51 || !ly((function () {
            var t = [];
            return t[Ey] = !1, t.concat()[0] !== t
        })),
        Sy = by("concat"),
        Ty = function (t) {
            if (!vy(t)) return !1;
            var r = t[Ey];
            return void 0 !== r ? !!r : hy(t)
        };
    fy({
        target: "Array",
        proto: !0,
        arity: 1,
        forced: !Ay || !Sy
    }, {
        concat: function (t) {
            var r, e, n, i, o, a = gy(this),
                u = wy(a, 0),
                c = 0;
            for (r = -1, n = arguments.length; r < n; r++)
                if (Ty(o = -1 === r ? a : arguments[r]))
                    for (i = py(o), dy(c + i), e = 0; e < i; e++, c++) e in o && yy(u, c, o[e]);
                else dy(c + 1), yy(u, c++, o);
            return u.length = c, u
        }
    });
    var Oy, xy = ca,
        Iy = TypeError,
        ky = function (t) {
            if (xy(t)) throw Iy("The method doesn't accept regular expressions");
            return t
        },
        Ry = gr("match"),
        Py = function (t) {
            var r = /./;
            try {
                "/./" [t](r)
            } catch (e) {
                try {
                    return r[Ry] = !1, "/./" [t](r)
                } catch (t) {}
            }
            return !1
        },
        Cy = Ei,
        Ly = x,
        Uy = $r.f,
        jy = Pn,
        My = Xi,
        Dy = ky,
        By = P,
        Fy = Py,
        _y = Ly("".endsWith),
        Ny = Ly("".slice),
        Vy = Math.min,
        Gy = Fy("endsWith");
    Cy({
        target: "String",
        proto: !0,
        forced: !!(Gy || (Oy = Uy(String.prototype, "endsWith"), !Oy || Oy.writable)) && !Gy
    }, {
        endsWith: function (t) {
            var r = My(By(this));
            Dy(t);
            var e = arguments.length > 1 ? arguments[1] : void 0,
                n = r.length,
                i = void 0 === e ? n : Vy(jy(e), n),
                o = My(t);
            return _y ? _y(r, o, i) : Ny(r, i - o.length, i) === o
        }
    }), Ei({
        global: !0,
        constructor: !0,
        forced: !Qc
    }, {
        DataView: mf.DataView
    }), (0, Df.exports)("Uint16", (function (t) {
        return function (r, e, n) {
            return t(this, r, e, n)
        }
    }));
    var Wy = Dh.forEach,
        Yy = Zg("forEach") ? [].forEach : function (t) {
            return Wy(this, t, arguments.length > 1 ? arguments[1] : void 0)
        };
    Ei({
        target: "Array",
        proto: !0,
        forced: [].forEach != Yy
    }, {
        forEach: Yy
    });
    var $y = Q("span").classList,
        zy = $y && $y.constructor && $y.constructor.prototype,
        Hy = $,
        Ky = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        },
        Xy = zy === Object.prototype ? void 0 : zy,
        Jy = Yy,
        qy = me,
        Zy = function (t) {
            if (t && t.forEach !== Jy) try {
                qy(t, "forEach", Jy)
            } catch (r) {
                t.forEach = Jy
            }
        };
    for (var Qy in Ky) Ky[Qy] && Zy(Hy[Qy] && Hy[Qy].prototype);

    function tw(t) {
        var r = "",
            e = 0,
            n = 0,
            i = 0,
            o = 0;
        for (e += 239 === t[0] && 187 === t[1] && 191 === t[2] ? 3 : 0; e < t.length;) switch ((n = t[e++]) >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                r += String.fromCharCode(n);
                break;
            case 12:
            case 13:
                i = t[e++], r += String.fromCharCode((31 & n) << 6 | 63 & i);
                break;
            case 14:
                i = t[e++], o = t[e++], r += String.fromCharCode((15 & n) << 12 | (63 & i) << 6 | (63 & o) << 0);
                break;
            default:
                r += ""
        }
        return r
    }

    function rw(t) {
        for (var r = [], e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            n < 128 ? r.push(n) : n < 2048 ? r.push(192 | n >> 6, 128 | 63 & n) : n < 55296 || n >= 57344 ? r.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (e++, n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(e)), r.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
        }
        return r
    }

    function ew(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "windows1251",
            e = [];
        switch (r) {
            case "utf-8":
                e = rw(t);
                break;
            case "utf-16":
            case "utf-16be":
                for (var n = new ArrayBuffer(2 * t.length), i = new Uint16Array(n), o = new Uint8Array(n), a = 0; a < t.length; a++) i[a] = t.charCodeAt(a);
                e = [255, 254], o.forEach((function (t) {
                    return e.push(t)
                }));
                break;
            default:
                for (var u = 0; u < t.length; u++) e.push(t.charCodeAt(u))
        }
        return e
    }

    function nw(t) {
        return t instanceof ArrayBuffer || "undefined" != typeof Buffer && t instanceof Buffer
    }
    Zy(Xy);
    var iw = function (t) {
            ! function (t, r) {
                if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(r && r.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r && c(t, r)
            }(a, t);
            var r, e, i = (r = a, e = s(), function () {
                var t, n = u(r);
                if (e) {
                    var i = u(this).constructor;
                    t = Reflect.construct(n, arguments, i)
                } else t = n.apply(this, arguments);
                return h(this, t)
            });

            function a() {
                n(this, a);
                for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++) r[e] = arguments[e];
                return ("number" == typeof r[0] || Array.isArray(r[0])) && (r[0] = new Uint8Array(r[0])), ArrayBuffer.isView(r[0]) && (r[0] = r[0].buffer), i.call.apply(i, [this].concat(r))
            }
            return o(a, [{
                key: "getString",
                value: function (t, r) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "windows1251",
                        n = "",
                        i = this.getUint8(t, r);
                    switch (Array.isArray(i) || (i = [i]), e) {
                        case "utf8":
                        case "utf-8":
                            n = tw(i);
                            break;
                        case "utf16":
                        case "utf16be":
                        case "utf-16":
                        case "utf-16be":
                            var o = null;
                            255 === i[0] && 254 === i[1] ? o = !0 : 254 === i[0] && 255 === i[1] && (o = !1), null !== o && (t += 2, r -= 2), n = this.getUint16String(t, r, !0 === o);
                            break;
                        default:
                            n = this.getUint8String(t, r)
                    }
                    return {
                        string: n.endsWith("\0") ? n.substr(0, n.length - 1) : n,
                        length: i.length
                    }
                }
            }, {
                key: "getCString",
                value: function (t) {
                    var r, e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "windows1251",
                        i = this.byteLength - t;
                    switch (n) {
                        case "utf16":
                        case "utf16be":
                        case "utf-16":
                        case "utf-16be":
                            e = 2, r = this.getUint16(t, i);
                            break;
                        default:
                            e = 1, r = this.getUint8(t, i)
                    }
                    Array.isArray(r) || (r = [r]);
                    for (var o = 0; o < r.length; o++)
                        if (0 === r[o]) {
                            i = (o + 1) * e;
                            break
                        } return this.getString(t, i, n)
                }
            }, {
                key: "getUint8String",
                value: function (t, r) {
                    var e = this.getUint8(t, r),
                        n = "";
                    Array.isArray(e) || (e = [e]);
                    for (var i = 0; i < e.length; i++) {
                        n += String.fromCharCode(e[i])
                    }
                    return n
                }
            }, {
                key: "getUint16String",
                value: function (t, r) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = this.getUint16(t, r, e),
                        i = "";
                    Array.isArray(n) || (n = [n]);
                    for (var o = 0; o < n.length; o++) {
                        var a = String.fromCharCode(n[o]);
                        i += a
                    }
                    return i
                }
            }, {
                key: "getUint8",
                value: function (t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        e = t + r,
                        n = [];
                    if (this.byteLength - e < 0) return !1;
                    for (var i = t; i < e; i++) {
                        var o = DataView.prototype.getUint8.call(this, i);
                        n.push(o)
                    }
                    return 1 === n.length ? n[0] : n
                }
            }, {
                key: "getUint16",
                value: function (t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    r % 2 != 0 && (r -= 1);
                    var n = t + r,
                        i = [];
                    if (this.byteLength - n < 0) return !1;
                    for (var o = t; o < n; o += 2) {
                        var a = DataView.prototype.getUint16.call(this, o, e);
                        i.push(a)
                    }
                    return 1 === i.length ? i[0] : i
                }
            }], [{
                key: "isViewable",
                value: function (t) {
                    return !!(nw(t) || Array.isArray(t) || ArrayBuffer.isView(t))
                }
            }]), a
        }(l(DataView)),
        ow = x,
        aw = U,
        uw = Math.floor,
        cw = ow("".charAt),
        sw = ow("".replace),
        fw = ow("".slice),
        lw = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        hw = /\$([$&'`]|\d{1,2})/g,
        vw = Xo,
        gw = st,
        pw = x,
        dw = ia,
        yw = w,
        ww = at,
        bw = z,
        mw = I,
        Ew = Sn,
        Aw = Pn,
        Sw = Xi,
        Tw = P,
        Ow = Va,
        xw = Nt,
        Iw = function (t, r, e, n, i, o) {
            var a = e + t.length,
                u = n.length,
                c = hw;
            return void 0 !== i && (i = aw(i), c = lw), sw(o, c, (function (o, c) {
                var s;
                switch (cw(c, 0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return fw(r, 0, e);
                    case "'":
                        return fw(r, a);
                    case "<":
                        s = i[fw(c, 1, -1)];
                        break;
                    default:
                        var f = +c;
                        if (0 === f) return o;
                        if (f > u) {
                            var l = uw(f / 10);
                            return 0 === l ? o : l <= u ? void 0 === n[l - 1] ? cw(c, 1) : n[l - 1] + cw(c, 1) : o
                        }
                        s = n[f - 1]
                }
                return void 0 === s ? "" : s
            }))
        },
        kw = iu,
        Rw = gr("replace"),
        Pw = Math.max,
        Cw = Math.min,
        Lw = pw([].concat),
        Uw = pw([].push),
        jw = pw("".indexOf),
        Mw = pw("".slice),
        Dw = "$0" === "a".replace(/./, "$0"),
        Bw = !!/./ [Rw] && "" === /./ [Rw]("a", "$0"),
        Fw = !yw((function () {
            var t = /./;
            return t.exec = function () {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        }));
    dw("replace", (function (t, r, e) {
        var n = Bw ? "$" : "$0";
        return [function (t, e) {
            var n = Tw(this),
                i = mw(t) ? void 0 : xw(t, Rw);
            return i ? gw(i, t, n, e) : gw(r, Sw(n), t, e)
        }, function (t, i) {
            var o = ww(this),
                a = Sw(t);
            if ("string" == typeof i && -1 === jw(i, n) && -1 === jw(i, "$<")) {
                var u = e(r, o, a, i);
                if (u.done) return u.value
            }
            var c = bw(i);
            c || (i = Sw(i));
            var s = o.global;
            if (s) {
                var f = o.unicode;
                o.lastIndex = 0
            }
            for (var l = [];;) {
                var h = kw(o, a);
                if (null === h) break;
                if (Uw(l, h), !s) break;
                "" === Sw(h[0]) && (o.lastIndex = Ow(a, Aw(o.lastIndex), f))
            }
            for (var v, g = "", p = 0, d = 0; d < l.length; d++) {
                for (var y = Sw((h = l[d])[0]), w = Pw(Cw(Ew(h.index), a.length), 0), b = [], m = 1; m < h.length; m++) Uw(b, void 0 === (v = h[m]) ? v : String(v));
                var E = h.groups;
                if (c) {
                    var A = Lw([y], b, w, a);
                    void 0 !== E && Uw(A, E);
                    var S = Sw(vw(i, void 0, A))
                } else S = Iw(y, a, w, b, E, i);
                w >= p && (g += Mw(a, p, w) + S, p = w + y.length)
            }
            return g + Mw(a, p)
        }]
    }), !Fw || !Dw || Bw);
    var _w = x,
        Nw = wn,
        Vw = Date.prototype,
        Gw = "Invalid Date",
        Ww = "toString",
        Yw = _w(Vw.toString),
        $w = _w(Vw.getTime);
    String(new Date(NaN)) != Gw && Nw(Vw, Ww, (function () {
        var t = $w(this);
        return t == t ? Yw(this) : Gw
    }));
    var zw = st,
        Hw = D,
        Kw = gt,
        Xw = qi,
        Jw = RegExp.prototype,
        qw = function (t) {
            var r = t.flags;
            return void 0 !== r || "flags" in Jw || Hw(t, "flags") || !Kw(Jw, t) ? r : zw(Xw, t)
        },
        Zw = G.PROPER,
        Qw = wn,
        tb = at,
        rb = Xi,
        eb = w,
        nb = qw,
        ib = "toString",
        ob = RegExp.prototype.toString,
        ab = eb((function () {
            return "/a/b" != ob.call({
                source: "a",
                flags: "b"
            })
        })),
        ub = Zw && ob.name != ib;
    (ab || ub) && Qw(RegExp.prototype, ib, (function () {
        var t = tb(this);
        return "/" + rb(t.source) + "/" + rb(nb(t))
    }), {
        unsafe: !0
    });
    var cb = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        sb = P,
        fb = Xi,
        lb = x("".replace),
        hb = "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
        vb = RegExp("^" + hb + hb + "*"),
        gb = RegExp(hb + hb + "*$"),
        pb = function (t) {
            return function (r) {
                var e = fb(sb(r));
                return 1 & t && (e = lb(e, vb, "")), 2 & t && (e = lb(e, gb, "")), e
            }
        },
        db = {
            start: pb(1),
            end: pb(2),
            trim: pb(3)
        },
        yb = $,
        wb = w,
        bb = x,
        mb = Xi,
        Eb = db.trim,
        Ab = cb,
        Sb = yb.parseInt,
        Tb = yb.Symbol,
        Ob = Tb && Tb.iterator,
        xb = /^[+-]?0x/i,
        Ib = bb(xb.exec),
        kb = 8 !== Sb(Ab + "08") || 22 !== Sb(Ab + "0x16") || Ob && !wb((function () {
            Sb(Object(Ob))
        })) ? function (t, r) {
            var e = Eb(mb(t));
            return Sb(e, r >>> 0 || (Ib(xb, e) ? 16 : 10))
        } : Sb;
    Ei({
        global: !0,
        forced: parseInt != kb
    }, {
        parseInt: kb
    });
    var Rb = Bn.includes,
        Pb = Fu;
    Ei({
        target: "Array",
        proto: !0,
        forced: w((function () {
            return !Array(1).includes()
        }))
    }, {
        includes: function (t) {
            return Rb(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), Pb("includes");
    var Cb = Ei,
        Lb = Bn.indexOf,
        Ub = Zg,
        jb = x([].indexOf),
        Mb = !!jb && 1 / jb([1], 1, -0) < 0,
        Db = Ub("indexOf");

    function Bb(t, r) {
        return (t & 1 << r) > 0
    }

    function Fb(t, r) {
        return t | 1 << r
    }

    function _b(t) {
        for (var r = 0, e = 2130706432; e;) r >>= 1, r |= t & e, e >>= 8;
        return r
    }

    function Nb(t) {
        for (var r = 0, e = 127; 2147483647 ^ e;) r = t & ~e, r <<= 1, r |= t & e, e = (e + 1 << 8) - 1, t = r;
        return r
    }

    function Vb() {
        for (var t = [], r = arguments.length, e = new Array(r), n = 0; n < r; n++) e[n] = arguments[n];
        return e.forEach((function (r) {
            r.forEach ? r.forEach((function (r) {
                return t.push(r)
            })) : t.push(r)
        })), new Uint8Array(t)
    }

    function Gb(t, r) {
        for (var e = [], n = (t = t || []).length, i = r - n, o = 0; o < i; o++) e.push(0);
        for (var a = 0; a < n; a++) e.push(t[a]);
        return e
    }
    Cb({
        target: "Array",
        proto: !0,
        forced: Mb || !Db
    }, {
        indexOf: function (t) {
            var r = arguments.length > 1 ? arguments[1] : void 0;
            return Mb ? jb(this, t, r) || 0 : Lb(this, t, r)
        }
    });
    var Wb = ["Blues", "Classic Rock", "Country", "Dance", "Disco", "Funk", "Grunge", "Hip-Hop", "Jazz", "Metal", "New Age", "Oldies", "Other", "Pop", "R&B", "Reggae", "Rock", "Techno", "Industrial", "Alternative", "Ska", "Death Metal", "Pranks", "Soundtrack", "Euro-Techno", "Ambient", "Trip-Hop", "Vocal", "Jazz+Funk", "Fusion", "Trance", "Classical", "Instrumental", "Acid", "House", "Game", "Sound Clip", "Gospel", "Noise", "Alt. Rock", "Bass", "Soul", "Punk", "Space", "Meditative", "Instrumental Pop", "Instrumental Rock", "Ethnic", "Gothic", "Darkwave", "Techno-Industrial", "Electronic", "Pop-Folk", "Eurodance", "Dream", "Southern Rock", "Comedy", "Cult", "Gangsta Rap", "Top 40", "Christian Rap", "Pop/Funk", "Jungle", "Native American", "Cabaret", "New Wave", "Psychedelic", "Rave", "Showtunes", "Trailer", "Lo-Fi", "Tribal", "Acid Punk", "Acid Jazz", "Polka", "Retro", "Musical", "Rock & Roll", "Hard Rock", "Folk", "Folk-Rock", "National Folk", "Swing", "Fast-Fusion", "Bebop", "Latin", "Revival", "Celtic", "Bluegrass", "Avantgarde", "Gothic Rock", "Progressive Rock", "Psychedelic Rock", "Symphonic Rock", "Slow Rock", "Big Band", "Chorus", "Easy Listening", "Acoustic", "Humour", "Speech", "Chanson", "Opera", "Chamber Music", "Sonata", "Symphony", "Booty Bass", "Primus", "Porn Groove", "Satire", "Slow Jam", "Club", "Tango", "Samba", "Folklore", "Ballad", "Power Ballad", "Rhythmic Soul", "Freestyle", "Duet", "Punk Rock", "Drum Solo", "A Cappella", "Euro-House", "Dance Hall", "Goa", "Drum & Bass", "Club-House", "Hardcore", "Terror", "Indie", "BritPop", "Afro-Punk", "Polsk Punk", "Beat", "Christian Gangsta Rap", "Heavy Metal", "Black Metal", "Crossover", "Contemporary Christian", "Christian Rock", "Merengue", "Salsa", "Thrash Metal", "Anime", "JPop", "Synthpop", "Abstract", "Art Rock", "Baroque", "Bhangra", "Big Beat", "Breakbeat", "Chillout", "Downtempo", "Dub", "EBM", "Eclectic", "Electro", "Electroclash", "Emo", "Experimental", "Garage", "Global", "IDM", "Illbient", "Industro-Goth", "Jam Band", "Krautrock", "Leftfield", "Lounge", "Math Rock", "New Romantic", "Nu-Breakz", "Post-Punk", "Post-Rock", "Psytrance", "Shoegaze", "Space Rock", "Trop Rock", "World Music", "Neoclassical", "Audiobook", "Audio Theatre", "Neue Deutsche Welle", "Podcast", "Indie Rock", "G-Funk", "Dubstep", "Garage Rock", "Psybient"];

    function Yb(t) {
        var r = t.byteLength - 128;
        return r > -1 && "TAG" === new iw(t, r).getString(0, 3).string
    }

    function $b(t) {
        var r = new iw(t, t.byteLength - 128),
            e = r.getString(3, 30, "utf-8").string.replace(/\0/g, ""),
            n = r.getString(33, 30, "utf-8").string.replace(/\0/g, ""),
            i = r.getString(63, 30, "utf-8").string.replace(/\0/g, ""),
            o = r.getString(93, 4, "utf-8").string.replace(/\0/g, ""),
            a = r.getUint8(126).toString() || "";
        return {
            tags: {
                title: e,
                artist: n,
                album: i,
                year: o,
                track: a,
                comment: r.getString(97, null !== a ? 28 : 30, "utf-8").string.replace(/\0/g, ""),
                genre: Wb[r.getUint8(127)] || ""
            },
            details: {
                version: a ? 1 : 0,
                size: 128
            }
        }
    }

    function zb(t, r) {
        var e = t.title,
            n = t.artist,
            i = t.album,
            o = t.year,
            a = t.comment,
            u = t.track,
            c = t.genre;
        if ("string" != typeof e) throw new Error("Title is not a string");
        if (ew(e, "utf-8").length > 30) throw new Error("Title length exceeds 30 characters");
        if ("string" != typeof n) throw new Error("Artist is not a string");
        if (ew(n, "utf-8").length > 30) throw new Error("Artist length exceeds 30 characters");
        if ("string" != typeof i) throw new Error("Album is not a string");
        if (ew(i, "utf-8").length > 30) throw new Error("Album length exceeds 30 characters");
        if ("string" != typeof o) throw new Error("Year is not a string");
        if (ew(o, "utf-8").length > 4) throw new Error("Year length exceeds 4 characters");
        if ("string" != typeof a) throw new Error("Comment is not a string");
        if ("string" != typeof u) throw new Error("Track is not a string");
        if (parseInt(u) > 255 || parseInt(u) < 0) throw new Error("Track should be in range 255 - 0");
        if ("" !== u) {
            if (ew(a, "utf-8").length > 28) throw new Error("Comment length exceeds 28 characters")
        } else if (ew(a, "utf-8").length > 30) throw new Error("Comment length exceeds 30 characters");
        if ("string" != typeof c) throw new Error("Genre is not a string");
        if (r && !Wb.includes(c) && "" !== c) throw new Error("Unknown genre");
        return !0
    }

    function Hb(t) {
        var r = t.title,
            e = t.artist,
            n = t.album,
            i = t.year,
            o = t.comment,
            a = t.track,
            u = t.genre;
        for (r = ew(r, "utf-8"), e = ew(e, "utf-8"), n = ew(n, "utf-8"), i = ew(i, "utf-8"), o = ew(o, "utf-8"), u = Wb.indexOf(u); r.length < 30;) r.push(0);
        for (; e.length < 30;) e.push(0);
        for (; n.length < 30;) n.push(0);
        for (; i.length < 4;) i.push(0);
        if ("" !== a) {
            for (; o.length < 28;) o.push(0);
            o.push(0, parseInt(a))
        } else
            for (; o.length < 30;) o.push(0);
        return Vb(84, 65, 71, r, e, n, i, o, u > -1 ? u : 12).buffer
    }
    var Kb = Ee.exports,
        Xb = W,
        Jb = function (t, r, e) {
            return e.get && Kb(e.get, r, {
                getter: !0
            }), e.set && Kb(e.set, r, {
                setter: !0
            }), Xb.f(t, r, e)
        },
        qb = b,
        Zb = Jb,
        Qb = qi,
        tm = w,
        rm = $.RegExp,
        em = rm.prototype,
        nm = qb && tm((function () {
            var t = !0;
            try {
                rm(".", "d")
            } catch (r) {
                t = !1
            }
            var r = {},
                e = "",
                n = t ? "dgimsy" : "gimsy",
                i = function (t, n) {
                    Object.defineProperty(r, t, {
                        get: function () {
                            return e += n, !0
                        }
                    })
                },
                o = {
                    dotAll: "s",
                    global: "g",
                    ignoreCase: "i",
                    multiline: "m",
                    sticky: "y"
                };
            for (var a in t && (o.hasIndices = "d"), o) i(a, o[a]);
            return Object.getOwnPropertyDescriptor(em, "flags").get.call(r) !== n || e !== n
        }));
    nm && Zb(em, "flags", {
        configurable: !0,
        get: Qb
    });
    var im = Ei,
        om = ky,
        am = P,
        um = Xi,
        cm = Py,
        sm = x("".indexOf);
    im({
        target: "String",
        proto: !0,
        forced: !cm("includes")
    }, {
        includes: function (t) {
            return !!~sm(um(am(this)), um(om(t)), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var fm = U,
        lm = Oi;

    function hm(t, r) {
        var e = {};
        switch (r) {
            case 3:
                e.unsynchronisation = Bb(t, 7), e.extendedHeader = Bb(t, 6), e.experimentalIndicator = Bb(t, 5);
                break;
            case 4:
                e.unsynchronisation = Bb(t, 7), e.extendedHeader = Bb(t, 6), e.experimentalIndicator = Bb(t, 5), e.footerPresent = Bb(t, 4)
        }
        return e
    }
    Ei({
        target: "Object",
        stat: !0,
        forced: w((function () {
            lm(1)
        }))
    }, {
        keys: function (t) {
            return lm(fm(t))
        }
    });
    var vm = ["windows1251", "utf-16", "utf-16be", "utf-8"];

    function gm(t, r) {
        var e = new iw(t),
            n = vm[e.getUint8(0)],
            i = e.byteLength - 1;
        return 3 === r ? e.getCString(1, n).string.replace(/\//g, "\\\\") : e.getString(1, i, n).string.replace(/\0/g, "\\\\")
    }

    function pm(t, r) {
        var e = new iw(t),
            n = vm[e.getUint8(0)],
            i = e.byteLength - 1;
        return 3 === r ? e.getCString(1, n).string : e.getString(1, i, n).string.replace(/\0/g, "\\\\")
    }

    function dm(t, r) {
        return new iw(t).getCString(0).string
    }

    function ym(t, r) {
        var e = new iw(t),
            n = vm[e.getUint8(0)],
            i = e.getCString(4, n),
            o = i.length + 4,
            a = e.byteLength - o,
            u = e.getString(o, a, n);
        return {
            language: e.getString(1, 3).string,
            descriptor: i.string,
            text: u.string
        }
    }

    function wm(t, r) {
        var e = new iw(t),
            n = vm[e.getUint8(0)],
            i = e.byteLength - 1;
        return e.getString(1, i, n).string
    }
    var bm = st,
        mm = at,
        Em = I,
        Am = Pn,
        Sm = Xi,
        Tm = P,
        Om = Nt,
        xm = Va,
        Im = iu;
    ia("match", (function (t, r, e) {
        return [function (r) {
            var e = Tm(this),
                n = Em(r) ? void 0 : Om(r, t);
            return n ? bm(n, r, e) : new RegExp(r)[t](Sm(e))
        }, function (t) {
            var n = mm(this),
                i = Sm(t),
                o = e(r, n, i);
            if (o.done) return o.value;
            if (!n.global) return Im(n, i);
            var a = n.unicode;
            n.lastIndex = 0;
            for (var u, c = [], s = 0; null !== (u = Im(n, i));) {
                var f = Sm(u[0]);
                c[s] = f, "" === f && (n.lastIndex = xm(i, Am(n.lastIndex), a)), s++
            }
            return 0 === s ? null : c
        }]
    }));
    var km = {},
        Rm = te,
        Pm = ce,
        Cm = bn.f,
        Lm = qa,
        Um = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    km.f = function (t) {
        return Um && "Window" == Rm(t) ? function (t) {
            try {
                return Cm(t)
            } catch (t) {
                return Lm(Um)
            }
        }(t) : Cm(Pm(t))
    };
    var jm = {},
        Mm = gr;
    jm.f = Mm;
    var Dm = $,
        Bm = D,
        Fm = jm,
        _m = W.f,
        Nm = st,
        Vm = vt,
        Gm = gr,
        Wm = wn,
        Ym = Ei,
        $m = $,
        zm = st,
        Hm = x,
        Km = b,
        Xm = Ot,
        Jm = w,
        qm = D,
        Zm = gt,
        Qm = at,
        tE = ce,
        rE = Or,
        eE = Xi,
        nE = Jr,
        iE = yo,
        oE = Oi,
        aE = bn,
        uE = km,
        cE = Hn,
        sE = $r,
        fE = W,
        lE = Ai,
        hE = zr,
        vE = wn,
        gE = $t.exports,
        pE = De,
        dE = nr,
        yE = gr,
        wE = jm,
        bE = function (t) {
            var r = Dm.Symbol || (Dm.Symbol = {});
            Bm(r, t) || _m(r, t, {
                value: Fm.f(t)
            })
        },
        mE = function () {
            var t = Vm("Symbol"),
                r = t && t.prototype,
                e = r && r.valueOf,
                n = Gm("toPrimitive");
            r && !r[n] && Wm(r, n, (function (t) {
                return Nm(e, this)
            }), {
                arity: 1
            })
        },
        EE = uc,
        AE = tn,
        SE = Dh.forEach,
        TE = Me("hidden"),
        OE = "Symbol",
        xE = AE.set,
        IE = AE.getterFor(OE),
        kE = Object.prototype,
        RE = $m.Symbol,
        PE = RE && RE.prototype,
        CE = $m.TypeError,
        LE = $m.QObject,
        UE = sE.f,
        jE = fE.f,
        ME = uE.f,
        DE = hE.f,
        BE = Hm([].push),
        FE = gE("symbols"),
        _E = gE("op-symbols"),
        NE = gE("wks"),
        VE = !LE || !LE.prototype || !LE.prototype.findChild,
        GE = Km && Jm((function () {
            return 7 != iE(jE({}, "a", {
                get: function () {
                    return jE(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function (t, r, e) {
            var n = UE(kE, r);
            n && delete kE[r], jE(t, r, e), n && t !== kE && jE(kE, r, n)
        } : jE,
        WE = function (t, r) {
            var e = FE[t] = iE(PE);
            return xE(e, {
                type: OE,
                tag: t,
                description: r
            }), Km || (e.description = r), e
        },
        YE = function (t, r, e) {
            t === kE && YE(_E, r, e), Qm(t);
            var n = rE(r);
            return Qm(e), qm(FE, n) ? (e.enumerable ? (qm(t, TE) && t[TE][n] && (t[TE][n] = !1), e = iE(e, {
                enumerable: nE(0, !1)
            })) : (qm(t, TE) || jE(t, TE, nE(1, {})), t[TE][n] = !0), GE(t, n, e)) : jE(t, n, e)
        },
        $E = function (t, r) {
            Qm(t);
            var e = tE(r),
                n = oE(e).concat(XE(e));
            return SE(n, (function (r) {
                Km && !zm(zE, e, r) || YE(t, r, e[r])
            })), t
        },
        zE = function (t) {
            var r = rE(t),
                e = zm(DE, this, r);
            return !(this === kE && qm(FE, r) && !qm(_E, r)) && (!(e || !qm(this, r) || !qm(FE, r) || qm(this, TE) && this[TE][r]) || e)
        },
        HE = function (t, r) {
            var e = tE(t),
                n = rE(r);
            if (e !== kE || !qm(FE, n) || qm(_E, n)) {
                var i = UE(e, n);
                return !i || !qm(FE, n) || qm(e, TE) && e[TE][n] || (i.enumerable = !0), i
            }
        },
        KE = function (t) {
            var r = ME(tE(t)),
                e = [];
            return SE(r, (function (t) {
                qm(FE, t) || qm(pE, t) || BE(e, t)
            })), e
        },
        XE = function (t) {
            var r = t === kE,
                e = ME(r ? _E : tE(t)),
                n = [];
            return SE(e, (function (t) {
                !qm(FE, t) || r && !qm(kE, t) || BE(n, FE[t])
            })), n
        };
    Xm || (RE = function () {
        if (Zm(PE, this)) throw CE("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? eE(arguments[0]) : void 0,
            r = dE(t),
            e = function (t) {
                this === kE && zm(e, _E, t), qm(this, TE) && qm(this[TE], r) && (this[TE][r] = !1), GE(this, r, nE(1, t))
            };
        return Km && VE && GE(kE, r, {
            configurable: !0,
            set: e
        }), WE(r, t)
    }, vE(PE = RE.prototype, "toString", (function () {
        return IE(this).tag
    })), vE(RE, "withoutSetter", (function (t) {
        return WE(dE(t), t)
    })), hE.f = zE, fE.f = YE, lE.f = $E, sE.f = HE, aE.f = uE.f = KE, cE.f = XE, wE.f = function (t) {
        return WE(yE(t), t)
    }, Km && (jE(PE, "description", {
        configurable: !0,
        get: function () {
            return IE(this).description
        }
    }), vE(kE, "propertyIsEnumerable", zE, {
        unsafe: !0
    }))), Ym({
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: !Xm,
        sham: !Xm
    }, {
        Symbol: RE
    }), SE(oE(NE), (function (t) {
        bE(t)
    })), Ym({
        target: OE,
        stat: !0,
        forced: !Xm
    }, {
        useSetter: function () {
            VE = !0
        },
        useSimple: function () {
            VE = !1
        }
    }), Ym({
        target: "Object",
        stat: !0,
        forced: !Xm,
        sham: !Km
    }, {
        create: function (t, r) {
            return void 0 === r ? iE(t) : $E(iE(t), r)
        },
        defineProperty: YE,
        defineProperties: $E,
        getOwnPropertyDescriptor: HE
    }), Ym({
        target: "Object",
        stat: !0,
        forced: !Xm
    }, {
        getOwnPropertyNames: KE
    }), mE(), EE(RE, OE), pE[TE] = !0;
    var JE = Ot && !!Symbol.for && !!Symbol.keyFor,
        qE = Ei,
        ZE = vt,
        QE = D,
        tA = Xi,
        rA = $t.exports,
        eA = JE,
        nA = rA("string-to-symbol-registry"),
        iA = rA("symbol-to-string-registry");
    qE({
        target: "Symbol",
        stat: !0,
        forced: !eA
    }, {
        for: function (t) {
            var r = tA(t);
            if (QE(nA, r)) return nA[r];
            var e = ZE("Symbol")(r);
            return nA[r] = e, iA[e] = r, e
        }
    });
    var oA = Ei,
        aA = D,
        uA = Ct,
        cA = Ut,
        sA = JE,
        fA = (0, $t.exports)("symbol-to-string-registry");
    oA({
        target: "Symbol",
        stat: !0,
        forced: !sA
    }, {
        keyFor: function (t) {
            if (!uA(t)) throw TypeError(cA(t) + " is not a symbol");
            if (aA(fA, t)) return fA[t]
        }
    });
    var lA = Ei,
        hA = vt,
        vA = Xo,
        gA = st,
        pA = x,
        dA = w,
        yA = Di,
        wA = z,
        bA = X,
        mA = Ct,
        EA = Yp,
        AA = Ot,
        SA = hA("JSON", "stringify"),
        TA = pA(/./.exec),
        OA = pA("".charAt),
        xA = pA("".charCodeAt),
        IA = pA("".replace),
        kA = pA(1..toString),
        RA = /[\uD800-\uDFFF]/g,
        PA = /^[\uD800-\uDBFF]$/,
        CA = /^[\uDC00-\uDFFF]$/,
        LA = !AA || dA((function () {
            var t = hA("Symbol")();
            return "[null]" != SA([t]) || "{}" != SA({
                a: t
            }) || "{}" != SA(Object(t))
        })),
        UA = dA((function () {
            return '"\\udf06\\ud834"' !== SA("\udf06\ud834") || '"\\udead"' !== SA("\udead")
        })),
        jA = function (t, r) {
            var e = EA(arguments),
                n = r;
            if ((bA(r) || void 0 !== t) && !mA(t)) return yA(r) || (r = function (t, r) {
                if (wA(n) && (r = gA(n, this, t, r)), !mA(r)) return r
            }), e[1] = r, vA(SA, null, e)
        },
        MA = function (t, r, e) {
            var n = OA(e, r - 1),
                i = OA(e, r + 1);
            return TA(PA, t) && !TA(CA, i) || TA(CA, t) && !TA(PA, n) ? "\\u" + kA(xA(t, 0), 16) : t
        };
    SA && lA({
        target: "JSON",
        stat: !0,
        arity: 3,
        forced: LA || UA
    }, {
        stringify: function (t, r, e) {
            var n = EA(arguments),
                i = vA(LA ? jA : SA, null, n);
            return UA && "string" == typeof i ? IA(i, RA, MA) : i
        }
    });
    var DA = Hn,
        BA = U;
    Ei({
        target: "Object",
        stat: !0,
        forced: !Ot || w((function () {
            DA.f(1)
        }))
    }, {
        getOwnPropertySymbols: function (t) {
            var r = DA.f;
            return r ? r(BA(t)) : []
        }
    });
    var FA = Ei,
        _A = b,
        NA = $,
        VA = x,
        GA = D,
        WA = z,
        YA = gt,
        $A = Xi,
        zA = W.f,
        HA = ii,
        KA = NA.Symbol,
        XA = KA && KA.prototype;
    if (_A && WA(KA) && (!("description" in XA) || void 0 !== KA().description)) {
        var JA = {},
            qA = function () {
                var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : $A(arguments[0]),
                    r = YA(XA, this) ? new KA(t) : void 0 === t ? KA() : KA(t);
                return "" === t && (JA[r] = !0), r
            };
        HA(qA, KA), qA.prototype = XA, XA.constructor = qA;
        var ZA = "Symbol(test)" == String(KA("test")),
            QA = VA(XA.valueOf),
            tS = VA(XA.toString),
            rS = /^Symbol\((.*)\)[^)]+$/,
            eS = VA("".replace),
            nS = VA("".slice);
        zA(XA, "description", {
            configurable: !0,
            get: function () {
                var t = QA(this);
                if (GA(JA, t)) return "";
                var r = tS(t),
                    e = ZA ? nS(r, 7, -1) : eS(r, rS, "$1");
                return "" === e ? void 0 : e
            }
        }), FA({
            global: !0,
            constructor: !0,
            forced: !0
        }, {
            Symbol: qA
        })
    }
    var iS = Dh.every;
    Ei({
        target: "Array",
        proto: !0,
        forced: !Zg("every")
    }, {
        every: function (t) {
            return iS(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var oS, aS, uS = Ei,
        cS = st,
        sS = z,
        fS = at,
        lS = Xi,
        hS = (oS = !1, (aS = /[ac]/).exec = function () {
            return oS = !0, /./.exec.apply(this, arguments)
        }, !0 === aS.test("abc") && oS),
        vS = /./.test;
    uS({
        target: "RegExp",
        proto: !0,
        forced: !hS
    }, {
        test: function (t) {
            var r = fS(this),
                e = lS(t),
                n = r.exec;
            if (!sS(n)) return cS(vS, r, e);
            var i = cS(n, r, e);
            return null !== i && (fS(i), !0)
        }
    });
    var gS = W.f,
        pS = b,
        dS = $,
        yS = x,
        wS = vi,
        bS = $h,
        mS = me,
        ES = bn.f,
        AS = gt,
        SS = ca,
        TS = Xi,
        OS = qw,
        xS = no,
        IS = function (t, r, e) {
            e in t || gS(t, e, {
                configurable: !0,
                get: function () {
                    return r[e]
                },
                set: function (t) {
                    r[e] = t
                }
            })
        },
        kS = wn,
        RS = w,
        PS = D,
        CS = tn.enforce,
        LS = Vh,
        US = mo,
        jS = So,
        MS = gr("match"),
        DS = dS.RegExp,
        BS = DS.prototype,
        FS = dS.SyntaxError,
        _S = yS(BS.exec),
        NS = yS("".charAt),
        VS = yS("".replace),
        GS = yS("".indexOf),
        WS = yS("".slice),
        YS = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
        $S = /a/g,
        zS = /a/g,
        HS = new DS($S) !== $S,
        KS = xS.MISSED_STICKY,
        XS = xS.UNSUPPORTED_Y,
        JS = pS && (!HS || KS || US || jS || RS((function () {
            return zS[MS] = !1, DS($S) != $S || DS(zS) == zS || "/a/i" != DS($S, "i")
        })));
    if (wS("RegExp", JS)) {
        for (var qS = function (t, r) {
                var e, n, i, o, a, u, c = AS(BS, this),
                    s = SS(t),
                    f = void 0 === r,
                    l = [],
                    h = t;
                if (!c && s && f && t.constructor === qS) return t;
                if ((s || AS(BS, t)) && (t = t.source, f && (r = OS(h))), t = void 0 === t ? "" : TS(t), r = void 0 === r ? "" : TS(r), h = t, US && "dotAll" in $S && (n = !!r && GS(r, "s") > -1) && (r = VS(r, /s/g, "")), e = r, KS && "sticky" in $S && (i = !!r && GS(r, "y") > -1) && XS && (r = VS(r, /y/g, "")), jS && (o = function (t) {
                        for (var r, e = t.length, n = 0, i = "", o = [], a = {}, u = !1, c = !1, s = 0, f = ""; n <= e; n++) {
                            if ("\\" === (r = NS(t, n))) r += NS(t, ++n);
                            else if ("]" === r) u = !1;
                            else if (!u) switch (!0) {
                                case "[" === r:
                                    u = !0;
                                    break;
                                case "(" === r:
                                    _S(YS, WS(t, n + 1)) && (n += 2, c = !0), i += r, s++;
                                    continue;
                                case ">" === r && c:
                                    if ("" === f || PS(a, f)) throw new FS("Invalid capture group name");
                                    a[f] = !0, o[o.length] = [f, s], c = !1, f = "";
                                    continue
                            }
                            c ? f += r : i += r
                        }
                        return [i, o]
                    }(t), t = o[0], l = o[1]), a = bS(DS(t, r), c ? this : BS, qS), (n || i || l.length) && (u = CS(a), n && (u.dotAll = !0, u.raw = qS(function (t) {
                        for (var r, e = t.length, n = 0, i = "", o = !1; n <= e; n++) "\\" !== (r = NS(t, n)) ? o || "." !== r ? ("[" === r ? o = !0 : "]" === r && (o = !1), i += r) : i += "[\\s\\S]" : i += r + NS(t, ++n);
                        return i
                    }(t), e)), i && (u.sticky = !0), l.length && (u.groups = l)), t !== h) try {
                    mS(a, "source", "" === h ? "(?:)" : h)
                } catch (t) {}
                return a
            }, ZS = ES(DS), QS = 0; ZS.length > QS;) IS(qS, DS, ZS[QS++]);
        BS.constructor = qS, qS.prototype = BS, kS(dS, "RegExp", qS, {
            constructor: !0
        })
    }
    LS("RegExp");
    var tT = b,
        rT = no.MISSED_STICKY,
        eT = te,
        nT = Jb,
        iT = tn.get,
        oT = RegExp.prototype,
        aT = TypeError;
    tT && rT && nT(oT, "sticky", {
        configurable: !0,
        get: function () {
            if (this !== oT) {
                if ("RegExp" === eT(this)) return !!iT(this).sticky;
                throw aT("Incompatible receiver, RegExp required")
            }
        }
    });
    var uT = "(\\d{4})",
        cT = "(0[1-9]|1[0-2])",
        sT = "(0[1-9]|1\\d|2\\d|3[0-1])",
        fT = "(0\\d|1\\d|2\\d|3\\d|4\\d|5\\d)",
        lT = new RegExp("^(".concat(uT, "(-").concat(cT, "(-").concat(sT, "(T").concat("(0\\d|1\\d|2[0-3])", "(:").concat(fT, "(:").concat("(0\\d|1\\d|2\\d|3\\d|4\\d|5\\d)", ")?)?)?)?)?)$"));

    function hT(t, r) {
        for (var e = !1, n = 0; n < t.length && !e;) {
            if (vT(t[n], r)) {
                e = !0;
                break
            }
            n++
        }
        return e
    }

    function vT(t, r) {
        for (var n in t) {
            if (e(t[n]) !== e(r[n])) return !1;
            switch (e(t[n])) {
                case "object":
                    if (!vT(t[n], r[n])) return !1;
                    break;
                case "function":
                    if (void 0 === r[n] || t[n].toString() !== r[n].toString()) return !1;
                    break;
                default:
                    if (t[n] !== r[n]) return !1
            }
        }
        for (var i in r)
            if (void 0 === t[i]) return !1;
        return !0
    }

    function gT(t, r) {
        var n = {};
        for (var i in r) {
            var o = r[i],
                a = t[i];
            if (void 0 !== a)
                if ("object" === e(o)) n[i] = gT(a, o);
                else n[i] = e(o) === e(a) ? a : o;
            else n[i] = o
        }
        return n
    }
    var pT = /^(.*)$/,
        dT = /^([0-9]+)(\/[0-9]+)?$/,
        yT = /^(https?):\/\/[^\s/$.?#]+\.[^\s]*/,
        wT = /^([a-z]{3}|XXX)$/,
        bT = /(image\/[a-z0-9!#$&.+\-^_]+){0,129}/,
        mT = /^((\[\d{1,}:\d{2}\.\d{3}\]) (.*))/;

    function ET(t, r, e) {
        if ("string" != typeof t) throw new Error("Value is not a string");
        if (e && !t.match(pT)) throw new Error("Newlines are not allowed");
        return !0
    }

    function AT(t, r, e) {
        return 3 === r ? t = [t] : 4 === r && (t = t.split("\\\\")), t.forEach((function (t) {
            if (ET(t, 0, e), "string" != typeof t && "number" != typeof t) throw new Error("Value is not a string/number");
            var r = t.match(dT);
            if (e && "string" == typeof t) {
                if (null === r) throw new Error("Invalid format (eg. 1/2)");
                var n = parseInt(r[1]),
                    i = r[2] ? parseInt(r[2].substr(1)) : null;
                if (null !== i && n > i) throw new Error("Position is greater then total")
            }
        })), !0
    }

    function ST(t, r, e) {
        return 3 === r ? t = [t] : 4 === r && (t = t.split("\\\\")), t.forEach((function (t) {
            if (ET(t, 0, e), 3 === r && e && !t.match(/^(\d{4})$/)) throw new Error("Value is not 4 numeric characters");
            if (4 === r && e && !t.match(lT)) throw new Error("Time frames must follow ISO 8601")
        })), !0
    }

    function TT(t, r, e) {
        if (ET(t, 0, e), e && !t.match(yT)) throw new Error("Invalid URL");
        return !0
    }

    function OT(t, r, e) {
        var n = [];
        return t.forEach((function (t) {
            if (ET(t.language, 0, e), ET(t.descriptor, 0, e), "string" != typeof t.text) throw new Error("Text is not a string");
            if (e && !t.language.match(wT)) throw new Error("Language must follow ISO 639-2");
            var r = {
                language: t.language,
                descriptor: t.descriptor
            };
            if (e && hT(n, r)) throw new Error("Language and descriptor should not duplicate");
            n.push(r)
        })), !0
    }

    function xT(t, r, e, n) {
        for (var i = 0; i < r.length; i++) {
            var o = r[i],
                a = t[o];
            if (a) {
                if (!iw.isViewable(a)) throw new Error("".concat(n, ".").concat(o, " must be viewable"));
                if (new iw(a).byteLength > e) throw new Error("".concat(n, ".").concat(o, " exceeds bits limit"))
            }
        }
    }

    function IT(t, r, e, n) {
        var i = ew(t),
            o = new iw(4);
        o.setUint32(0, 3 === e ? r : Nb(r));
        var a = [0, 0];
        return 4 === e && n.unsynchronisation && (a[1] = Fb(a[1], 1)), 4 === e && n.dataLengthIndicator && (a[1] = Fb(a[1], 0)), Vb(i, o.getUint8(0, 4), a)
    }

    function kT(t, r) {
        var e = new iw(4),
            n = function (t) {
                for (var r = [], e = 0; e < t.length;) r.push(t[e]), 255 === t[e] && (t[e + 1] >= 224 || 0 === t[e + 1]) && r.push(0), e++;
                return r
            }(t),
            i = [];
        return 4 === r && (e.setUint32(0, Nb(t.length)), i.push.apply(i, v(e.getUint8(0, 4)))), n.forEach((function (t) {
            return i.push(t)
        })), new Uint8Array(i)
    }

    function RT(t, r) {
        var e = r.id,
            n = r.version,
            i = r.unsynch,
            o = 0,
            a = [];
        switch (n) {
            case 3:
                o = 1, a = ew(t.replace("\\\\", "/") + "\0", "utf-16");
                break;
            case 4:
                o = 3, a = ew(t.replace("\\\\", "\0") + "\0", "utf-8")
        }
        var u = Vb(o, a);
        return i && (u = kT(u, n)), Vb(IT(e, u.length, n, {
            unsynchronisation: i,
            dataLengthIndicator: i
        }), u)
    }

    function PT(t, r) {
        var e = r.id,
            n = r.version,
            i = r.unsynch,
            o = [];
        switch (n) {
            case 3:
                o = ew(t.replace("\\\\", "/") + "\0");
                break;
            case 4:
                o = ew(t.replace("\\\\", "\0") + "\0")
        }
        var a = Vb(0, o);
        return i && (a = kT(a, n)), Vb(IT(e, a.length, n, {
            unsynchronisation: i,
            dataLengthIndicator: i
        }), a)
    }

    function CT(t, r) {
        var e = r.version;
        return 3 === e ? t = t.toString().split("\\\\")[0] : 4 === e && (t = t.toString().replace("\\\\", "\0")), PT(t, r)
    }

    function LT(t, r) {
        var e = r.id,
            n = r.version,
            i = r.unsynch,
            o = ew(t + "\0");
        return i && (o = kT(o, n)), Vb(IT(e, o.length, n, {
            unsynchronisation: i,
            dataLengthIndicator: i
        }), o)
    }

    function UT(t, r) {
        var e = r.id,
            n = r.version,
            i = r.unsynch,
            o = [];
        return t.forEach((function (t) {
            var r, a, u = 0,
                c = ew(t.language);
            switch (n) {
                case 3:
                    u = 1, r = ew(t.descriptor + "\0", "utf-16"), a = ew(t.text + "\0", "utf-16");
                    break;
                case 4:
                    u = 3, r = ew(t.descriptor + "\0", "utf-8"), a = ew(t.text + "\0", "utf-8")
            }
            var s = Vb(u, c, r, a);
            i && (s = kT(s, n)), Vb(IT(e, s.length, n, {
                unsynchronisation: i,
                dataLengthIndicator: i
            }), s).forEach((function (t) {
                return o.push(t)
            }))
        })), o
    }(0, Df.exports)("Int16", (function (t) {
        return function (r, e, n) {
            return t(this, r, e, n)
        }
    }));
    var jT = {
            parse: function (t, r) {
                var e = new iw(t),
                    n = vm[e.getUint8(0)],
                    i = e.getCString(1),
                    o = e.getUint8(i.length + 1),
                    a = e.getCString(i.length + 2, n),
                    u = i.length + a.length + 2,
                    c = e.byteLength - u,
                    s = e.getUint8(u, c);
                return {
                    format: i.string,
                    type: o,
                    description: a.string,
                    data: s
                }
            },
            validate: function (t, r, e) {
                var n = [];
                return t.forEach((function (t) {
                    if (ET(t.format, 0, e), ET(t.description, 0, e), "number" != typeof t.type) throw new Error("Type is not a number");
                    if (t.type > 255 || t.type < 0) throw new Error("Type should be in range of 0 - 255");
                    if (!iw.isViewable(t.data)) throw new Error("Image data should be viewable");
                    if (e) {
                        if (t.type > 21 || t.type < 0) throw new Error("Type should be in range of 0 - 21");
                        if (!t.format.match(bT)) throw new Error("Format should be an image MIME");
                        if (t.description.length > 64) throw new Error("Description should not exceed 64");
                        if (hT(n, t.description)) throw new Error("Description should not duplicate");
                        n.push(t.description)
                    }
                })), !0
            },
            write: function (t, r) {
                var e = r.id,
                    n = r.version,
                    i = r.unsynch,
                    o = [];
                return t.forEach((function (t) {
                    var r = 0,
                        a = ew(t.format + "\0"),
                        u = new Uint8Array(t.data),
                        c = [];
                    switch (n) {
                        case 3:
                            r = 1, c = ew(t.description + "\0", "utf-16");
                            break;
                        case 4:
                            r = 3, c = ew(t.description + "\0", "utf-8")
                    }
                    var s = Vb(r, a, t.type, c, u);
                    i && (s = kT(s, n)), Vb(IT(e, s.length, n, {
                        unsynchronisation: i,
                        dataLengthIndicator: i
                    }), s).forEach((function (t) {
                        return o.push(t)
                    }))
                })), o
            },
            version: [3, 4]
        },
        MT = {
            parse: ym,
            validate: OT,
            write: UT,
            version: [3, 4]
        },
        DT = {
            parse: function (t, r) {
                var e = new iw(t),
                    n = vm[e.getUint8(0)],
                    i = e.getCString(1),
                    o = e.getCString(i.length + 1, n),
                    a = e.getCString(o.length + i.length + 1, n),
                    u = i.length + o.length + a.length + 1,
                    c = e.byteLength - u,
                    s = e.getUint8(u, c);
                return {
                    format: i.string,
                    filename: o.string,
                    description: a.string,
                    object: s
                }
            },
            validate: function (t, r, e) {
                var n = [];
                return t.forEach((function (t) {
                    if (ET(t.format, 0, e), ET(t.filename, 0, e), ET(t.description, 0, e), !iw.isViewable(t.object)) throw new Error("Object data should be viewable");
                    if (e && hT(n, t.description)) throw new Error("GEOB description should not duplicate");
                    n.push(t.description)
                })), !0
            },
            write: function (t, r) {
                var e = r.id,
                    n = r.version,
                    i = r.unsynch,
                    o = [];
                return t.forEach((function (t) {
                    var r, a, u, c = ew(t.format + "\0"),
                        s = new Uint8Array(t.object);
                    switch (n) {
                        case 3:
                            r = 1, a = ew(t.filename + "\0", "utf-16"), u = ew(t.description + "\0", "utf-16");
                            break;
                        case 4:
                            r = 3, a = ew(t.filename + "\0", "utf-8"), u = ew(t.description + "\0", "utf-8")
                    }
                    var f = Vb(r, c, a, u, s);
                    i && (f = kT(f, n)), Vb(IT(e, f.length, n, {
                        unsynchronisation: i,
                        dataLengthIndicator: i
                    }), f).forEach((function (t) {
                        return o.push(t)
                    }))
                })), o
            },
            version: [3, 4]
        },
        BT = {
            parse: function (t, r) {
                var e = new iw(t),
                    n = vm[e.getUint8(0)],
                    i = e.byteLength - 1;
                return e.getString(1, i, n).string.replace(/\0/g, "\\\\")
            },
            validate: ET,
            write: function (t, r) {
                return r.version = 4, RT(t, r)
            },
            version: [3]
        },
        FT = {
            parse: function (t, r) {
                var e = new iw(t);
                return {
                    data: e.getUint8(0, e.byteLength)
                }
            },
            validate: function (t, r, e) {
                if (!iw.isViewable(t.data)) throw new Error("Data should be viewable");
                return !0
            },
            write: function (t, r) {
                var e = r.id,
                    n = r.version,
                    i = r.unsynch;
                return i && (t.data = kT(t.data, n)), Vb(IT(e, t.data.length, n, {
                    unsynchronisation: i,
                    dataLengthIndicator: i
                }), t.data)
            },
            version: [3, 4]
        },
        _T = {
            parse: function (t, r) {
                var e = new iw(t),
                    n = vm[e.getUint8(0)],
                    i = e.getString(1, 3),
                    o = e.getCString(4),
                    a = e.getString(o.length + 4, 8),
                    u = o.length + a.length + 4,
                    c = e.byteLength - u,
                    s = e.getString(u, c, n);
                return {
                    currencyCode: i.string,
                    currencyPrice: o.string,
                    date: a.string,
                    seller: s.string
                }
            },
            validate: function (t, r, e) {
                if (ET(t.date, 0, e), ET(t.seller, 0, e), ET(t.currencyCode, 0, e), ET(t.currencyPrice, 0, e), e) {
                    if (!t.date.match("".concat(uT).concat(cT).concat(sT))) throw new Error("Date is not valid (format: YYYYMMDD)");
                    if (!t.currencyCode.match(/^([A-Z]{3})$/)) throw new Error("Currency code is not valid (eg. USD)");
                    if (!t.currencyPrice.match(/^(\d*)\.(\d+)$/)) throw new Error("Currency price is not valid (eg. 2.00)")
                }
                return !0
            },
            write: function (t, r) {
                var e, n = r.id,
                    i = r.version,
                    o = r.unsynch,
                    a = 0,
                    u = ew(t.currencyCode),
                    c = ew(t.currencyPrice + "\0"),
                    s = ew(t.date);
                switch (i) {
                    case 3:
                        a = 1, e = ew(t.seller, "utf-16");
                        break;
                    case 4:
                        a = 3, e = ew(t.seller, "utf-8")
                }
                var f = Vb(a, u, c, s, e);
                return o && (f = kT(f, i)), Vb(IT(n, f.length, i, {
                    unsynchronisation: o,
                    dataLengthIndicator: o
                }), f)
            },
            version: [3, 4]
        },
        NT = {
            parse: function (t, r) {
                var e = new iw(t),
                    n = e.getCString(0),
                    i = e.getUint8(n.length, e.byteLength - n.length);
                return {
                    ownerId: n.string,
                    data: i
                }
            },
            validate: function (t, r, e) {
                var n = [];
                return t.forEach((function (t) {
                    if (ET(t.ownerId, 0, e), !iw.isViewable(t.data)) throw new Error("Data should be viewable");
                    if (e && hT(n, t.data)) throw new Error("Data should not duplicate");
                    n.push(t.data)
                })), !0
            },
            write: function (t, r) {
                var e = r.id,
                    n = r.version,
                    i = r.unsynch,
                    o = [];
                return t.forEach((function (t) {
                    var r = Vb(ew(t.ownerId), new Uint8Array(t.data));
                    i && (r = kT(r, n)), Vb(IT(e, r.length, n, {
                        unsynchronisation: i,
                        dataLengthIndicator: i
                    }), r).forEach((function (t) {
                        return o.push(t)
                    }))
                })), o
            },
            version: [3, 4]
        },
        VT = {
            parse: function (t, r) {
                for (var e = new iw(t), n = e.getUint8(0), i = e.getUint8(1), o = [], a = Math.ceil(i / 8), u = 2; u < e.byteLength; u += a) o.push(e.getUint8(u, a));
                return {
                    bitsvolume: i,
                    incdec: {
                        right: Bb(n, 0),
                        left: Bb(n, 1),
                        rightback: Bb(n, 2),
                        leftback: Bb(n, 3),
                        center: Bb(n, 4),
                        bass: Bb(n, 5)
                    },
                    volumechange: {
                        right: void 0 !== o[0] ? o[0] : [],
                        left: void 0 !== o[1] ? o[1] : [],
                        rightback: void 0 !== o[4] ? o[4] : [],
                        leftback: void 0 !== o[5] ? o[5] : [],
                        center: void 0 !== o[8] ? o[8] : [],
                        bass: void 0 !== o[10] ? o[10] : []
                    },
                    peakvolume: {
                        right: void 0 !== o[2] ? o[2] : [],
                        left: void 0 !== o[3] ? o[3] : [],
                        rightback: void 0 !== o[6] ? o[6] : [],
                        leftback: void 0 !== o[7] ? o[7] : [],
                        center: void 0 !== o[9] ? o[9] : [],
                        bass: void 0 !== o[11] ? o[11] : []
                    }
                }
            },
            validate: function (t, r, n) {
                if ("object" !== e(t)) throw new Error("Values must be an object");
                var i = t.volumechange,
                    o = t.peakvolume,
                    a = t.bitsvolume || 16,
                    u = Math.ceil(a / 8);
                if (a && (a < 0 || a > 255)) throw new Error("Bits volume should be in the range of 0 - 255");
                if (n && 0 === a) throw new Error("Bits used for volume description may not be 0");
                var c = ["right", "left", "rightback", "leftback", "center", "bass"];
                return i && xT(i, c, u, "volumechange"), o && xT(o, c, u, "peakvolume"), !0
            },
            write: function (t, r) {
                var e = r.id,
                    n = r.version,
                    i = r.unsynch,
                    o = [],
                    a = t.bitsvolume || 16,
                    u = Math.ceil(a / 8),
                    c = 0;
                t.incdec && (t.incdec.right && (c = Fb(c, 0)), t.incdec.left && (c = Fb(c, 1)), t.incdec.rightback && (c = Fb(c, 2)), t.incdec.leftback && (c = Fb(c, 3)), t.incdec.center && (c = Fb(c, 4)), t.incdec.bass && (c = Fb(c, 5))), o.push(c), o.push(a);
                var s = t.volumechange || {},
                    f = t.peakvolume || {},
                    l = Gb(s.right, u),
                    h = Gb(s.left, u),
                    v = Gb(f.right, u),
                    g = Gb(f.left, u);
                if (l.forEach((function (t) {
                        return o.push(t)
                    })), h.forEach((function (t) {
                        return o.push(t)
                    })), v.forEach((function (t) {
                        return o.push(t)
                    })), g.forEach((function (t) {
                        return o.push(t)
                    })), s.rightback || s.leftback || f.rightback || f.leftback || s.center || f.center || s.bass || f.bass) {
                    var p = Gb(s.rightback, u),
                        d = Gb(s.leftback, u),
                        y = Gb(f.rightback, u),
                        w = Gb(f.leftback, u);
                    p.forEach((function (t) {
                        return o.push(t)
                    })), d.forEach((function (t) {
                        return o.push(t)
                    })), y.forEach((function (t) {
                        return o.push(t)
                    })), w.forEach((function (t) {
                        return o.push(t)
                    }))
                }
                if (s.center || f.center || s.bass || f.bass) {
                    var b = Gb(s.center, u),
                        m = Gb(f.center, u);
                    b.forEach((function (t) {
                        return o.push(t)
                    })), m.forEach((function (t) {
                        return o.push(t)
                    }))
                }
                if (s.bass || f.bass) {
                    var E = Gb(s.bass, u),
                        A = Gb(f.bass, u);
                    E.forEach((function (t) {
                        return o.push(t)
                    })), A.forEach((function (t) {
                        return o.push(t)
                    }))
                }
                var S = i ? kT(o) : o;
                return Vb(IT(e, S.length, n, {
                    unsynchronisation: i,
                    dataLengthIndicator: i
                }), S)
            },
            version: [3]
        },
        GT = {
            parse: function (t, r) {
                for (var e = new iw(t), n = e.getCString(0), i = [], o = n.length; o < e.byteLength;) {
                    var a = e.getUint8(o),
                        u = e.getInt16(o + 1, !0),
                        c = e.getUint8(o + 3),
                        s = Math.ceil(c / 8),
                        f = e.getUint8(o + 4, s);
                    i.push({
                        type: a,
                        volumeadjust: u,
                        bitspeak: c,
                        peakvolume: Array.isArray(f) ? f : [f]
                    }), o += 4 + s
                }
                return {
                    identification: n.string,
                    channels: i
                }
            },
            validate: function (t, r, e) {
                var n = [];
                t.forEach((function (t) {
                    if (!Array.isArray(t.channels)) throw new Error("Channels should be an array");
                    for (var r = 0; r < t.channels.length; r++) {
                        var i = t.channels[r];
                        if ("number" != typeof i.type) throw new Error("Type of channel should be a number");
                        if (e && (i.type < 0 || i.type > 8)) throw new Error("Type of channel should be in the range of 0 - 8");
                        if ("number" != typeof i.volumeadjust) throw new Error("Volume adjustment should be a number");
                        if ("number" != typeof i.bitspeak) throw new Error("Bits representing peak should be a number");
                        if (i.bitspeak < 0 || i.bitspeak > 255) throw new Error("Bits representing peak should be in range of 0 - 255");
                        if (!iw.isViewable(i.peakvolume)) throw new Error("Peak volume must be viewable");
                        if (new iw(i.peakvolume).byteLength > Math.ceil(i.bitspeak / 8)) throw new Error("Peak volume exceeds bits limit")
                    }
                    var o = {
                        identification: t.identification
                    };
                    if (e && hT(n, o)) throw new Error("RVA2 identification should be unique");
                    n.push(o)
                }))
            },
            write: function (t, r) {
                var e = r.id,
                    n = r.version,
                    i = r.unsynch,
                    o = [];
                return t.forEach((function (t) {
                    for (var r = ew(t.identification + "\0"), a = 0; a < t.channels.length; a++) {
                        var u = t.channels[a],
                            c = u.type,
                            s = new Int16Array([u.volumeadjust]),
                            f = new Uint8Array(s.buffer),
                            l = u.bitspeak,
                            h = Math.ceil(l / 8);
                        r = Vb(r, c, f, l, Gb(u.peakvolume, h))
                    }
                    Vb(IT(e, r.length, n, {
                        unsynchronisation: i,
                        dataLengthIndicator: i
                    }), r).forEach((function (t) {
                        return o.push(t)
                    }))
                })), o
            },
            version: [4]
        },
        WT = {
            parse: function (t, r) {
                return new iw(t).getUint32(0)
            }
        },
        YT = {
            parse: function (t, r) {
                var e = new iw(t);
                return {
                    group: e.getUint8(0),
                    signature: e.getUint8(1, e.byteLength - 1)
                }
            },
            validate: function (t, r, e) {
                var n = [];
                return t.forEach((function (t) {
                    if ("number" != typeof t.group) throw new Error("Group ID is not a number");
                    if (t.group < 0 || t.group > 255) throw new Error("Group ID should be in the range of 0 - 255");
                    if (!iw.isViewable(t.signature)) throw new Error("Signature should be viewable");
                    if (e && hT(n, t)) throw new Error("SIGN contents should not be identical to others");
                    n.push(t)
                })), !0
            },
            write: function (t, r) {
                var e = r.id,
                    n = r.version,
                    i = r.unsynch,
                    o = [];
                return t.forEach((function (t) {
                    var r = new Uint8Array(t.signature),
                        a = Vb(t.group, r);
                    i && (a = kT(a, n)), Vb(IT(e, a.length, n, {
                        unsynchronisation: i,
                        dataLengthIndicator: i
                    }), a).forEach((function (t) {
                        return o.push(t)
                    }))
                })), o
            },
            version: [4]
        },
        $T = {
            parse: function (t, r) {
                for (var e = new iw(t), n = vm[e.getUint8(0)], i = e.getString(1, 3).string, o = e.getUint8(4), a = e.getUint8(5), u = e.getCString(6, n), c = u.length + 6, s = e.byteLength - c, f = e.getUint8(c, s), l = "", h = 0; h < f.length; h += 4) {
                    var v = new iw(f),
                        g = v.getCString(h),
                        p = v.getUint32(h + g.length),
                        d = Math.floor(p / 6e4).toString(),
                        y = Math.floor(p % 6e4 / 1e3).toString();
                    y = 1 === y.length ? "0" + y : y;
                    for (var w = (p % 1e3).toString(); w.length < 3;) w = "0" + w;
                    l += "[".concat(d, ":").concat(y, ".").concat(w, "] ").concat(g.string), h += g.length
                }
                return {
                    language: i,
                    format: o,
                    type: a,
                    descriptor: u.string,
                    lyrics: l
                }
            },
            validate: function (t, r, e) {
                var n = [];
                return t.forEach((function (t) {
                    if (ET(t.language, 0, e), ET(t.descriptor, 0, e), "string" != typeof t.lyrics) throw new Error("Lyrics is not a string");
                    if ("number" != typeof t.type) throw new Error("Type is not a number");
                    if (t.type > 255 || t.type < 0) throw new Error("Type should be in range of 0 - 255");
                    if ("number" != typeof t.format) throw new Error("Format is not a number");
                    if (t.format > 255 || t.format < 0) throw new Error("Format should be in range of 0 - 255");
                    if (e) {
                        if (!t.language.match(wT)) throw new Error("Language must follow ISO 639-2");
                        if (t.type > 6 || t.type < 0) throw new Error("Type should be in range of 0 - 6");
                        if (t.format > 2 || t.format < 1) throw new Error("Format should be either 1 or 2");
                        if (!t.lyrics.split("\n").every((function (t) {
                                return mT.test(t)
                            }))) throw new Error("Lyrics must follow this format: [mm:ss.xxx]");
                        var r = {
                            language: t.language,
                            descriptor: t.descriptor
                        };
                        if (hT(n, r)) throw new Error("1 SYLT with same language and descriptor only");
                        n.push(r)
                    }
                })), !0
            },
            write: function (t, r) {
                var e = r.id,
                    n = r.version,
                    i = r.unsynch,
                    o = [];
                return t.forEach((function (t) {
                    var r = 0,
                        a = ew(t.language),
                        u = [];
                    switch (n) {
                        case 3:
                            r = 1, u = ew(t.descriptor + "\0", "utf-16");
                            break;
                        case 4:
                            r = 3, u = ew(t.descriptor + "\0", "utf-8")
                    }
                    var c = /^(\[\d{1,}:\d{2}\.\d{3}\]) ?(.*)/,
                        s = [];
                    t.lyrics.replace(/\r\n/, "\n").split("\n").forEach((function (t) {
                        if ("" !== t) {
                            var r = c.exec(t),
                                e = parseInt(r[1].replace(/[^0-9]/g, "")),
                                n = ew((r[2] || "") + "\n\0"),
                                i = new iw(4);
                            i.setUint32(0, e), s = Vb(s, n, i.getUint8(0, 4))
                        }
                    }));
                    var f = Vb(r, a, t.format, t.type, u, s);
                    i && (f = kT(f, n)), Vb(IT(e, f.length, n, {
                        unsynchronisation: i,
                        dataLengthIndicator: i
                    }), f).forEach((function (t) {
                        return o.push(t)
                    }))
                })), o
            },
            version: [3, 4]
        },
        zT = {
            parse: function (t, r) {
                var e = new iw(t);
                return {
                    format: e.getUint8(0),
                    data: e.getUint8(1, e.byteLength - 1)
                }
            },
            validate: function (t, r, e) {
                if (!iw.isViewable(t.data)) throw new Error("Data should be viewable");
                if ("number" != typeof t.format) throw new Error("Format is not a number");
                if (t.format > 255 || t.format < 0) throw new Error("Format should be in range of 0 - 255");
                if (e && (t.format > 2 || t.format < 1)) throw new Error("Invalid timestamp");
                return !0
            },
            write: function (t, r) {
                var e = r.id,
                    n = r.version,
                    i = r.unsynch,
                    o = Vb(t.format, t.data);
                return i && (o = kT(o, n)), Vb(IT(e, o.length, n, {
                    unsynchronisation: i,
                    dataLengthIndicator: i
                }), o)
            },
            version: [3, 4]
        },
        HT = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        KT = {
            parse: gm,
            validate: ET,
            write: PT,
            version: [3, 4]
        },
        XT = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        JT = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        qT = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        ZT = {
            parse: gm,
            validate: ST,
            write: PT,
            version: [3]
        },
        QT = {
            parse: gm,
            validate: ST,
            write: PT,
            version: [4]
        },
        tO = {
            parse: gm,
            validate: ET,
            write: PT,
            version: [3]
        },
        rO = {
            parse: gm,
            validate: ST,
            write: PT,
            version: [4]
        },
        eO = {
            parse: gm,
            validate: ST,
            write: PT,
            version: [4]
        },
        nO = {
            parse: gm,
            validate: ST,
            write: PT,
            version: [4]
        },
        iO = {
            parse: gm,
            validate: ST,
            write: PT,
            version: [4]
        },
        oO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        aO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        uO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        cO = {
            parse: gm,
            validate: ST,
            write: PT,
            version: [3]
        },
        sO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [4]
        },
        fO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        lO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        hO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        vO = {
            parse: gm,
            validate: function (t, r, e) {
                return 3 === r ? t = [t] : 4 === r && (t = t.split("\\\\")), t.forEach((function (t) {
                    if (ET(t, 0, e), e && !t.match(/^([A-Gb#mo]{1,3})$/)) throw new Error("Invalid TKEY Format (eg Cbm)")
                })), !0
            },
            write: PT,
            version: [3, 4]
        },
        gO = {
            parse: gm,
            validate: function (t, r, e) {
                return 3 === r ? t = [t] : 4 === r && (t = t.split("\\\\")), t.forEach((function (t) {
                    if (ET(t, 0, e), e && !t.match(wT)) throw new Error("Language must follow ISO 639-2")
                })), !0
            },
            write: PT,
            version: [3, 4]
        },
        pO = {
            parse: gm,
            validate: ET,
            write: PT,
            version: [3, 4]
        },
        dO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [4]
        },
        yO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        wO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [4]
        },
        bO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        mO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        EO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        AO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        SO = {
            parse: gm,
            validate: ST,
            write: PT,
            version: [3]
        },
        TO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        OO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        xO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        IO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        kO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        RO = {
            parse: pm,
            validate: AT,
            write: CT,
            version: [3, 4]
        },
        PO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [4]
        },
        CO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        LO = {
            parse: pm,
            validate: AT,
            write: CT,
            version: [3, 4]
        },
        UO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3]
        },
        jO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        MO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        DO = {
            parse: gm,
            validate: ET,
            write: PT,
            version: [3]
        },
        BO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [4]
        },
        FO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [4]
        },
        _O = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [4]
        },
        NO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [4]
        },
        VO = {
            parse: gm,
            validate: function (t, r, e) {
                return 3 === r ? t = [t] : 4 === r && (t = t.split("\\\\")), t.forEach((function (t) {
                    if (ET(t, 0, e), e && !t.match(/^([A-Z0-9]{12})$/)) throw new Error("Invalid ISRC format")
                })), !0
            },
            write: PT,
            version: [3, 4]
        },
        GO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [3, 4]
        },
        WO = {
            parse: gm,
            validate: ET,
            write: RT,
            version: [4]
        },
        YO = {
            parse: gm,
            validate: ST,
            write: PT,
            version: [3]
        },
        $O = {
            parse: function (t, r) {
                var e = new iw(t),
                    n = vm[e.getUint8(0)],
                    i = e.getCString(1, n),
                    o = i.length + 1,
                    a = e.byteLength - o,
                    u = e.getString(o, a, n);
                return {
                    description: i.string,
                    text: u.string
                }
            },
            validate: function (t, r, e) {
                var n = [];
                return t.forEach((function (t) {
                    if (ET(t.description, 0, e), ET(t.text, 0, e), e && hT(n, t.description)) throw new Error("Description should not duplicate");
                    n.push(t.description)
                })), !0
            },
            write: function (t, r) {
                var e = r.id,
                    n = r.version,
                    i = r.unsynch,
                    o = [];
                return t.forEach((function (t) {
                    var r, a, u = 0;
                    switch (n) {
                        case 3:
                            u = 1, r = ew(t.description + "\0", "utf-16"), a = ew(t.text + "\0", "utf-16");
                            break;
                        case 4:
                            u = 3, r = ew(t.description + "\0", "utf-8"), a = ew(t.text + "\0", "utf-8")
                    }
                    var c = Vb(u, r, a);
                    i && (c = kT(c, n)), Vb(IT(e, c.length, n, {
                        unsynchronisation: i,
                        dataLengthIndicator: i
                    }), c).forEach((function (t) {
                        return o.push(t)
                    }))
                })), o
            },
            version: [3, 4]
        },
        zO = {
            parse: function (t, r) {
                var e = new iw(t),
                    n = e.getCString(0),
                    i = e.getUint8(n.length, e.byteLength - n.length);
                return {
                    ownerId: n.string,
                    id: i
                }
            },
            validate: function (t, r, e) {
                var n = [];
                return t.forEach((function (t) {
                    if (ET(t.ownerId, 0, e), !iw.isViewable(t.id)) throw new Error("ID should be viewable");
                    if (e) {
                        if ("" === t.ownerId) throw new Error("ownerId should not be blank");
                        if ((t.id.byteLength || t.id.length || 0) > 64) throw new Error("ID bytelength should not exceed 64 bytes");
                        if (hT(n, t.ownerId)) throw new Error("ownerId should not duplicate");
                        n.push(t.ownerId)
                    }
                })), !0
            },
            write: function (t, r) {
                var e = r.id,
                    n = r.version,
                    i = r.unsynch,
                    o = [];
                return t.forEach((function (t) {
                    var r = Vb(ew(t.ownerId + "\0"), new Uint8Array(t.id));
                    i && (r = kT(r, n)), Vb(IT(e, r.length, n, {
                        unsynchronisation: i,
                        dataLengthIndicator: i
                    }), r).forEach((function (t) {
                        return o.push(t)
                    }))
                })), o
            },
            version: [3, 4]
        },
        HO = {
            parse: function (t, r) {
                var e = new iw(t),
                    n = vm[e.getUint8(0)];
                return {
                    language: e.getString(1, 3).string,
                    text: e.getString(4, e.byteLength - 4, n).string
                }
            },
            validate: function (t, r, e) {
                return t.forEach((function (t) {
                    if (ET(t.language, 0, e), "string" != typeof t.text) throw new Error("Text is not a string");
                    if (e && !t.language.match(wT)) throw new Error("Language must follow ISO 639-2")
                })), !0
            },
            write: function (t, r) {
                var e, n = r.id,
                    i = r.version,
                    o = r.unsynch,
                    a = [],
                    u = 0,
                    c = ew(t.language);
                switch (i) {
                    case 3:
                        u = 1, e = ew(t.text + "\0", "utf-16");
                        break;
                    case 4:
                        u = 3, e = ew(t.text + "\0", "utf-8")
                }
                var s = Vb(u, c, e);
                return o && (s = kT(s, i)), Vb(IT(n, s.length, i, {
                    unsynchronisation: o,
                    dataLengthIndicator: o
                }), s).forEach((function (t) {
                    return a.push(t)
                })), a
            },
            version: [3, 4]
        },
        KO = {
            parse: ym,
            validate: OT,
            write: UT,
            version: [3, 4]
        },
        XO = {
            parse: dm,
            validate: TT,
            write: LT,
            version: [3, 4]
        },
        JO = {
            parse: dm,
            validate: TT,
            write: LT,
            version: [3, 4]
        },
        qO = {
            parse: wm,
            validate: TT,
            write: PT,
            version: [3, 4]
        },
        ZO = {
            parse: wm,
            validate: TT,
            write: PT,
            version: [3, 4]
        },
        QO = {
            parse: dm,
            validate: TT,
            write: LT,
            version: [3, 4]
        },
        tx = {
            parse: dm,
            validate: TT,
            write: LT,
            version: [3, 4]
        },
        rx = {
            parse: dm,
            validate: TT,
            write: LT,
            version: [3, 4]
        },
        ex = {
            parse: dm,
            validate: TT,
            write: LT,
            version: [3, 4]
        },
        nx = {
            parse: dm,
            validate: TT,
            write: LT,
            version: [3, 4]
        },
        ix = {
            parse: dm,
            validate: TT,
            write: LT,
            version: [3, 4]
        },
        ox = {
            parse: function (t, r) {
                var e = new iw(t),
                    n = vm[e.getUint8(0)],
                    i = e.getCString(1, n),
                    o = i.length + 1,
                    a = e.byteLength - o,
                    u = e.getString(o, a);
                return {
                    description: i.string,
                    url: u.string
                }
            },
            validate: function (t, r, e) {
                var n = [];
                return t.forEach((function (t) {
                    if (ET(t.description, 0, e), TT(t.url, 0, e), e && hT(n, t.description)) throw new Error("Description should not duplicate");
                    n.push(t.description)
                })), !0
            },
            write: function (t, r) {
                var e = r.id,
                    n = r.version,
                    i = r.unsynch,
                    o = [];
                return t.forEach((function (t) {
                    var r, a, u = 0;
                    switch (n) {
                        case 3:
                            u = 1, r = ew(t.description + "\0", "utf-16"), a = ew(t.url + "\0");
                            break;
                        case 4:
                            u = 3, r = ew(t.description + "\0", "utf-8"), a = ew(t.url + "\0")
                    }
                    var c = Vb(u, r, a);
                    i && (c = kT(c, n)), Vb(IT(e, c.length, n, {
                        unsynchronisation: i,
                        dataLengthIndicator: i
                    }), c).forEach((function (t) {
                        return o.push(t)
                    }))
                })), o
            },
            version: [3, 4]
        },
        ax = Object.freeze({
            __proto__: null,
            APIC: jT,
            COMM: MT,
            GEOB: DT,
            IPLS: BT,
            MCDI: FT,
            OWNE: _T,
            PRIV: NT,
            RVAD: VT,
            RVA2: GT,
            SEEK: WT,
            SIGN: YT,
            SYLT: $T,
            SYTC: zT,
            TALB: HT,
            TBPM: KT,
            TCOM: XT,
            TCON: JT,
            TCOP: qT,
            TDAT: ZT,
            TDEN: QT,
            TDLY: tO,
            TDOR: rO,
            TDRC: eO,
            TDRL: nO,
            TDTG: iO,
            TENC: oO,
            TEXT: aO,
            TFLT: uO,
            TIME: cO,
            TIPL: sO,
            TIT1: fO,
            TIT2: lO,
            TIT3: hO,
            TKEY: vO,
            TLAN: gO,
            TLEN: pO,
            TMCL: dO,
            TMED: yO,
            TMOO: wO,
            TOAL: bO,
            TOFN: mO,
            TOLY: EO,
            TOPE: AO,
            TORY: SO,
            TOWN: TO,
            TPE1: OO,
            TPE2: xO,
            TPE3: IO,
            TPE4: kO,
            TPOS: RO,
            TPRO: PO,
            TPUB: CO,
            TRCK: LO,
            TRDA: UO,
            TRSN: jO,
            TRSO: MO,
            TSIZ: DO,
            TSOA: BO,
            TSOC: FO,
            TSOP: _O,
            TSOT: NO,
            TSRC: VO,
            TSSE: GO,
            TSST: WO,
            TYER: YO,
            TXXX: $O,
            UFID: zO,
            USER: HO,
            USLT: KO,
            WCOM: XO,
            WCOP: JO,
            WFED: qO,
            TGID: ZO,
            WOAF: QO,
            WOAR: tx,
            WOAS: rx,
            WORS: ex,
            WPAY: nx,
            WPUB: ix,
            WXXX: ox
        });

    function ux(t) {
        return "ID3" === new iw(t).getString(0, 3).string
    }

    function cx(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = new iw(t, r),
            i = n.getUint8(3, 2),
            o = _b(n.getUint32(6)),
            a = hm(n.getUint8(5), i[0]),
            u = {
                version: i,
                flags: a,
                size: o
            },
            c = {};
        if (3 !== i[0] && 4 !== i[0]) throw new Error("Unknown ID3v2 major version");
        for (var s = 10, f = o, l = function (t) {
                switch (e(t.value)) {
                    case "number":
                    case "string":
                        t.value = t.value.toString(), c[t.id] ? c[t.id] += "\\\\" + t.value : c[t.id] = t.value;
                        break;
                    case "object":
                        ["USER", "OWNE", "MCDI", "RVAD", "SYTC"].includes(t.id) ? c[t.id] = t.value : c[t.id] ? c[t.id].push(t.value) : c[t.id] = [t.value]
                }
            }; s < o;) {
            var h = n.getUint8(s, f),
                v = sx(h, {
                    version: i,
                    flags: a
                });
            if (!v) break;
            if (s += v.size + 10, f -= v.size + 10, "SEEK" === v.id) {
                var g = cx(t, s + v.value);
                for (var p in g) l({
                    id: p,
                    value: g[p]
                })
            } else l({
                id: v.id,
                value: v.value
            })
        }
        return {
            tags: c,
            details: u
        }
    }

    function sx(t, r) {
        var e = new iw(t);
        if (0 === e.getUint8(0)) return !1;
        var n = {},
            i = r.version,
            o = r.flags,
            a = e.getUint32(4);
        n.id = e.getUint8String(0, 4), n.flags = function (t, r) {
            var e = {};
            switch (r) {
                case 3:
                    e.tagAlterPreservation = Bb(t[0], 7), e.fileAlterPreservation = Bb(t[0], 6), e.readOnly = Bb(t[0], 5), e.compression = Bb(t[1], 7), e.encryption = Bb(t[1], 6), e.groupingIdentity = Bb(t[1], 5);
                    break;
                case 4:
                    e.tagAlterPreservation = Bb(t[0], 6), e.fileAlterPreservation = Bb(t[0], 5), e.readOnly = Bb(t[0], 4), e.groupingIdentity = Bb(t[1], 6), e.compression = Bb(t[1], 3), e.encryption = Bb(t[1], 2), e.unsynchronisation = Bb(t[1], 1), e.dataLengthIndicator = Bb(t[1], 0)
            }
            return e
        }(e.getUint8(8, 2), i[0]), n.size = 4 === i[0] ? _b(a) : a;
        var u, c = ax[n.id],
            s = 10,
            f = n.size,
            l = n.size;
        if (!c) return console.warn("Skipping unsupported frame: ".concat(n.id)), n;
        n.flags.dataLengthIndicator && (f = _b(e.getUint32(s)), s += 4, l -= 4);
        var h = o.unsynchronisation;
        if (4 === i && (h = n.flags.unsynchronisation), h) {
            var v = e.getUint8(s, l),
                g = function (t) {
                    for (var r = [], e = 0; e < t.length;) r.push(t[e]), 255 === t[e] && 0 === t[e + 1] && e++, e++;
                    return r
                }(Array.isArray(v) ? v : [v]);
            u = new Uint8Array(g)
        } else {
            var p = e.getUint8(s, f);
            u = new Uint8Array(Array.isArray(p) ? p : [p])
        }
        return n.value = c.parse(u.buffer, i[0]), n
    }

    function fx(t, r, e) {
        var n = e.version;
        if (3 !== n && 4 !== n) throw new Error("Unknown provided version");
        for (var i in t)
            if (Object.keys(ax).includes(i)) {
                var o = ax[i];
                if (r && !o.version.includes(n)) throw new Error("".concat(i, " is not supported in ID3v2.").concat(n));
                try {
                    o.validate(t[i], n, r)
                } catch (t) {
                    throw new Error("".concat(t.message, " at ").concat(i))
                }
            } return !0
    }

    function lx(t, r) {
        var e = r.version,
            n = r.padding,
            i = r.unsynch,
            o = [73, 68, 51, e, 0],
            a = 0,
            u = new iw(4),
            c = new Uint8Array(n),
            s = [];
        for (var f in t) {
            ax[f].write(t[f], {
                id: f,
                version: e,
                unsynch: i
            }).forEach((function (t) {
                return s.push(t)
            }))
        }
        return i && (a = Fb(a, 7)), u.setUint32(0, Nb(s.length)), Vb(o, a, u.getUint8(0, 4), s, c).buffer
    }
    var hx = function () {
        function t(r) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (n(this, t), !nw(r)) throw new TypeError("buffer is not ArrayBuffer/Buffer");
            this.name = "MP3Tag", this.version = "3.3.2", this.verbose = e, this.buffer = r, this.tags = {}, this.error = ""
        }
        return o(t, [{
            key: "read",
            value: function () {
                return new Promise((resolve, reject) => {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.tags = {}, this.error = "";
                    try {
                        this.tags = t.readBuffer(this.buffer, r, this.verbose)
                    } catch (t) {
                        this.error = t.message
                    }
                    resolve (this.tags)
                });
            }
        }, {
            key: "save",
            value: function () {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.error = "";
                var e = this.buffer;
                try {
                    e = t.writeBuffer(this.buffer, this.tags, r, this.verbose)
                } catch (t) {
                    this.error = t.message
                }
                return "" === this.error && (this.buffer = e), this.buffer
            }
        }, {
            key: "remove",
            value: function () {
                return this.tags = {}, this.error = "", this.buffer = this.getAudio(), !0
            }
        }, {
            key: "getAudio",
            value: function () {
                return t.getAudioBuffer(this.buffer)
            }
        }], [{
            key: "readBuffer",
            value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!nw(t)) throw new TypeError("buffer is not ArrayBuffer/Buffer");
                var i = {};
                if ((e = gT(e, {
                        id3v1: !0,
                        id3v2: !0
                    })).id3v1 && Yb(t)) {
                    n && console.log("ID3v1 found, reading...");
                    var o = $b(t),
                        a = o.tags,
                        u = o.details;
                    n && console.log("ID3v1 reading finished"), i.v1 = r({}, a), i.v1Details = u
                }
                if (e.id3v2 && ux(t)) {
                    n && console.log("ID3v2 found, reading...");
                    var c = cx(t),
                        s = c.tags,
                        f = c.details;
                    n && console.log("ID3v2 reading finished"), i.v2 = r({}, s), i.v2Details = f
                }
                return Object.defineProperties(i, {
                    title: {
                        get: function () {
                            return this.v2 && this.v2.TIT2 || this.v1 && this.v1.title || ""
                        },
                        set: function (t) {
                            this.v2 && (this.v2.TIT2 = t), this.v1 && (this.v1.title = t)
                        }
                    },
                    artist: {
                        get: function () {
                            return this.v2 && this.v2.TPE1 || this.v1 && this.v1.artist || ""
                        },
                        set: function (t) {
                            this.v2 && (this.v2.TPE1 = t), this.v1 && (this.v1.artist = t)
                        }
                    },
                    album: {
                        get: function () {
                            return this.v2 && this.v2.TALB || this.v1 && this.v1.album || ""
                        },
                        set: function (t) {
                            this.v2 && (this.v2.TALB = t), this.v1 && (this.v1.album = t)
                        }
                    },
                    year: {
                        get: function () {
                            return this.v2 && (this.v2.TYER || this.v2.TDRC) || this.v1 && this.v1.year || ""
                        },
                        set: function (t) {
                            if (this.v2) {
                                var r = this.v2Details.version[0];
                                3 === r ? this.v2.TYER = t : 4 === r && (this.v2.TDRC = t)
                            }
                            this.v1 && (this.v1.year = t)
                        }
                    },
                    comment: {
                        get: function () {
                            var t = "";
                            if (this.v2 && this.v2.COMM) {
                                var r = this.v2.COMM;
                                Array.isArray(r) && r.length > 0 && (t = r[0].text)
                            } else this.v1 && this.v1.comment && (t = this.v1.comment);
                            return t
                        },
                        set: function (t) {
                            this.v2 && (this.v2.COMM = [{
                                language: "eng",
                                descriptor: "",
                                text: t
                            }]), this.v1 && (this.v1.comment = t)
                        }
                    },
                    track: {
                        get: function () {
                            return this.v2 && this.v2.TRCK && this.v2.TRCK.split("/")[0] || this.v1 && this.v1.track || ""
                        },
                        set: function (t) {
                            this.v2 && (this.v2.TRCK = t), this.v1 && (this.v1.track = t)
                        }
                    },
                    genre: {
                        get: function () {
                            return this.v2 && this.v2.TCON || this.v1 && this.v1.genre || ""
                        },
                        set: function (t) {
                            this.v2 && (this.v2.TCON = t), this.v1 && (this.v1.genre = t)
                        }
                    }
                }), i
            }
        }, {
            key: "writeBuffer",
            value: function (r, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = e.v2Details ? e.v2Details.version[0] : 3,
                    a = new Uint8Array(t.getAudioBuffer(r));
                if ((n = gT(n, {
                        strict: !1,
                        id3v1: {
                            include: !1
                        },
                        id3v2: {
                            include: !0,
                            unsynch: !1,
                            version: o,
                            padding: 2048
                        }
                    })).id3v1.include) {
                    i && console.log("Validating ID3v1..."), zb(e.v1, n.strict), i && console.log("Writing ID3v1...");
                    var u = Hb(e.v1),
                        c = new Uint8Array(u);
                    a = Vb(a, c)
                }
                if (n.id3v2.include) {
                    i && console.log("Validating ID3v2..."), fx(e.v2, n.strict, n.id3v2), i && console.log("Writing ID3v2...");
                    var s = lx(e.v2, n.id3v2),
                        f = new Uint8Array(s);
                    a = Vb(f, a)
                }
                return a.buffer
            }
        }, {
            key: "getAudioBuffer",
            value: function (t) {
                if (!nw(t)) throw new TypeError("buffer is not ArrayBuffer/Buffer");
                Yb(t) && (t = t.slice(0, t.byteLength - 128));
                for (var r = new iw(t), e = 0, n = 0; n < r.byteLength;) {
                    if (255 === r.getUint8(n) && 251 === r.getUint8(n + 1)) {
                        e = n;
                        break
                    }
                    n++
                }
                return t.slice(e)
            }
        }]), t
    }();
    return hx
}));
