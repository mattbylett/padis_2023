/* @preserve
 * Leaflet 1.9.2, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports)
        : "function" == typeof define && define.amd
        ? define(["exports"], e)
        : e(
              ((t =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : t || self).leaflet = {})
          );
})(this, function (t) {
    "use strict";
    function e(t) {
        for (var e, i, n = 1, o = arguments.length; n < o; n++)
            for (e in (i = arguments[n])) t[e] = i[e];
        return t;
    }
    var i =
        Object.create ||
        function (t) {
            return (n.prototype = t), new n();
        };
    function n() {}
    function o(t, e) {
        var i,
            n = Array.prototype.slice;
        return t.bind
            ? t.bind.apply(t, n.call(arguments, 1))
            : ((i = n.call(arguments, 2)),
              function () {
                  return t.apply(
                      e,
                      i.length ? i.concat(n.call(arguments)) : arguments
                  );
              });
    }
    var s = 0;
    function r(t) {
        return "_leaflet_id" in t || (t._leaflet_id = ++s), t._leaflet_id;
    }
    function a(t, e, i) {
        var n,
            o,
            s = function () {
                (n = !1), o && (r.apply(i, o), (o = !1));
            },
            r = function () {
                n
                    ? (o = arguments)
                    : (t.apply(i, arguments), setTimeout(s, e), (n = !0));
            };
        return r;
    }
    function h(t, e, i) {
        var n = e[1],
            o = n - (e = e[0]);
        return t === n && i ? t : ((((t - e) % o) + o) % o) + e;
    }
    function l() {
        return !1;
    }
    function u(t, e) {
        return !1 === e
            ? t
            : ((e = Math.pow(10, void 0 === e ? 6 : e)), Math.round(t * e) / e);
    }
    function c(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    }
    function d(t) {
        return c(t).split(/\s+/);
    }
    function p(t, e) {
        for (var n in (Object.prototype.hasOwnProperty.call(t, "options") ||
            (t.options = t.options ? i(t.options) : {}),
        e))
            t.options[n] = e[n];
        return t.options;
    }
    function _(t, e, i) {
        var n,
            o = [];
        for (n in t)
            o.push(
                encodeURIComponent(i ? n.toUpperCase() : n) +
                    "=" +
                    encodeURIComponent(t[n])
            );
        return (e && -1 !== e.indexOf("?") ? "&" : "?") + o.join("&");
    }
    var m = /\{ *([\w_ -]+) *\}/g;
    function f(t, e) {
        return t.replace(m, function (t, i) {
            if (void 0 === (i = e[i]))
                throw new Error("No value provided for variable " + t);
            return "function" == typeof i ? i(e) : i;
        });
    }
    var g =
        Array.isArray ||
        function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
        };
    function v(t, e) {
        for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
        return -1;
    }
    var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function x(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t];
    }
    var b = 0;
    function w(t) {
        var e = +new Date(),
            i = Math.max(0, 16 - (e - b));
        return (b = e + i), window.setTimeout(t, i);
    }
    var P = window.requestAnimationFrame || x("RequestAnimationFrame") || w,
        T =
            window.cancelAnimationFrame ||
            x("CancelAnimationFrame") ||
            x("CancelRequestAnimationFrame") ||
            function (t) {
                window.clearTimeout(t);
            };
    function S(t, e, i) {
        if (!i || P !== w) return P.call(window, o(t, e));
        t.call(e);
    }
    function C(t) {
        t && T.call(window, t);
    }
    var M = {
        __proto__: null,
        extend: e,
        create: i,
        bind: o,
        get lastId() {
            return s;
        },
        stamp: r,
        throttle: a,
        wrapNum: h,
        falseFn: l,
        formatNum: u,
        trim: c,
        splitWords: d,
        setOptions: p,
        getParamString: _,
        template: f,
        isArray: g,
        indexOf: v,
        emptyImageUrl: y,
        requestFn: P,
        cancelFn: T,
        requestAnimFrame: S,
        cancelAnimFrame: C,
    };
    function A() {}
    (A.extend = function (t) {
        function n() {
            p(this),
                this.initialize && this.initialize.apply(this, arguments),
                this.callInitHooks();
        }
        var o,
            s = (n.__super__ = this.prototype),
            r = i(s);
        for (o in (((r.constructor = n).prototype = r), this))
            Object.prototype.hasOwnProperty.call(this, o) &&
                "prototype" !== o &&
                "__super__" !== o &&
                (n[o] = this[o]);
        if ((t.statics && e(n, t.statics), t.includes)) {
            var a = t.includes;
            if ("undefined" != typeof L && L && L.Mixin) {
                a = g(a) ? a : [a];
                for (var h = 0; h < a.length; h++)
                    a[h] === L.Mixin.Events &&
                        console.warn(
                            "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
                            new Error().stack
                        );
            }
            e.apply(null, [r].concat(t.includes));
        }
        return (
            e(r, t),
            delete r.statics,
            delete r.includes,
            r.options &&
                ((r.options = s.options ? i(s.options) : {}),
                e(r.options, t.options)),
            (r._initHooks = []),
            (r.callInitHooks = function () {
                if (!this._initHooksCalled) {
                    s.callInitHooks && s.callInitHooks.call(this),
                        (this._initHooksCalled = !0);
                    for (var t = 0, e = r._initHooks.length; t < e; t++)
                        r._initHooks[t].call(this);
                }
            }),
            n
        );
    }),
        (A.include = function (t) {
            var i = this.prototype.options;
            return (
                e(this.prototype, t),
                t.options &&
                    ((this.prototype.options = i),
                    this.mergeOptions(t.options)),
                this
            );
        }),
        (A.mergeOptions = function (t) {
            return e(this.prototype.options, t), this;
        }),
        (A.addInitHook = function (t) {
            var e = Array.prototype.slice.call(arguments, 1),
                i =
                    "function" == typeof t
                        ? t
                        : function () {
                              this[t].apply(this, e);
                          };
            return (
                (this.prototype._initHooks = this.prototype._initHooks || []),
                this.prototype._initHooks.push(i),
                this
            );
        });
    var z = {
            on: function (t, e, i) {
                if ("object" == typeof t) for (var n in t) this._on(n, t[n], e);
                else
                    for (var o = 0, s = (t = d(t)).length; o < s; o++)
                        this._on(t[o], e, i);
                return this;
            },
            off: function (t, e, i) {
                if (arguments.length)
                    if ("object" == typeof t)
                        for (var n in t) this._off(n, t[n], e);
                    else {
                        t = d(t);
                        for (
                            var o = 1 === arguments.length, s = 0, r = t.length;
                            s < r;
                            s++
                        )
                            o ? this._off(t[s]) : this._off(t[s], e, i);
                    }
                else delete this._events;
                return this;
            },
            _on: function (t, e, i, n) {
                "function" != typeof e
                    ? console.warn("wrong listener type: " + typeof e)
                    : !1 === this._listens(t, e, i) &&
                      ((e = { fn: e, ctx: (i = i === this ? void 0 : i) }),
                      n && (e.once = !0),
                      (this._events = this._events || {}),
                      (this._events[t] = this._events[t] || []),
                      this._events[t].push(e));
            },
            _off: function (t, e, i) {
                var n, o, s;
                if (this._events && (n = this._events[t]))
                    if (1 === arguments.length) {
                        if (this._firingCount)
                            for (o = 0, s = n.length; o < s; o++) n[o].fn = l;
                        delete this._events[t];
                    } else
                        "function" != typeof e
                            ? console.warn("wrong listener type: " + typeof e)
                            : !1 !== (e = this._listens(t, e, i)) &&
                              ((i = n[e]),
                              this._firingCount &&
                                  ((i.fn = l),
                                  (this._events[t] = n = n.slice())),
                              n.splice(e, 1));
            },
            fire: function (t, i, n) {
                if (this.listens(t, n)) {
                    var o = e({}, i, {
                        type: t,
                        target: this,
                        sourceTarget: (i && i.sourceTarget) || this,
                    });
                    if (this._events) {
                        var s = this._events[t];
                        if (s) {
                            this._firingCount = this._firingCount + 1 || 1;
                            for (var r = 0, a = s.length; r < a; r++) {
                                var h = s[r],
                                    l = h.fn;
                                h.once && this.off(t, l, h.ctx),
                                    l.call(h.ctx || this, o);
                            }
                            this._firingCount--;
                        }
                    }
                    n && this._propagateEvent(o);
                }
                return this;
            },
            listens: function (t, e, i, n) {
                "string" != typeof t &&
                    console.warn('"string" type argument expected');
                var o = e,
                    s =
                        ("function" != typeof e &&
                            ((n = !!e), (i = o = void 0)),
                        this._events && this._events[t]);
                if (s && s.length && !1 !== this._listens(t, o, i)) return !0;
                if (n)
                    for (var r in this._eventParents)
                        if (this._eventParents[r].listens(t, e, i, n))
                            return !0;
                return !1;
            },
            _listens: function (t, e, i) {
                if (this._events) {
                    var n = this._events[t] || [];
                    if (!e) return !!n.length;
                    i === this && (i = void 0);
                    for (var o = 0, s = n.length; o < s; o++)
                        if (n[o].fn === e && n[o].ctx === i) return o;
                }
                return !1;
            },
            once: function (t, e, i) {
                if ("object" == typeof t)
                    for (var n in t) this._on(n, t[n], e, !0);
                else
                    for (var o = 0, s = (t = d(t)).length; o < s; o++)
                        this._on(t[o], e, i, !0);
                return this;
            },
            addEventParent: function (t) {
                return (
                    (this._eventParents = this._eventParents || {}),
                    (this._eventParents[r(t)] = t),
                    this
                );
            },
            removeEventParent: function (t) {
                return (
                    this._eventParents && delete this._eventParents[r(t)], this
                );
            },
            _propagateEvent: function (t) {
                for (var i in this._eventParents)
                    this._eventParents[i].fire(
                        t.type,
                        e({ layer: t.target, propagatedFrom: t.target }, t),
                        !0
                    );
            },
        },
        I =
            ((z.addEventListener = z.on),
            (z.removeEventListener = z.clearAllEventListeners = z.off),
            (z.addOneTimeEventListener = z.once),
            (z.fireEvent = z.fire),
            (z.hasEventListeners = z.listens),
            A.extend(z));
    function k(t, e, i) {
        (this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
    }
    var E =
        Math.trunc ||
        function (t) {
            return 0 < t ? Math.floor(t) : Math.ceil(t);
        };
    function O(t, e, i) {
        return t instanceof k
            ? t
            : g(t)
            ? new k(t[0], t[1])
            : null == t
            ? t
            : "object" == typeof t && "x" in t && "y" in t
            ? new k(t.x, t.y)
            : new k(t, e, i);
    }
    function Z(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
                this.extend(i[n]);
    }
    function B(t, e) {
        return !t || t instanceof Z ? t : new Z(t, e);
    }
    function R(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
                this.extend(i[n]);
    }
    function D(t, e) {
        return t instanceof R ? t : new R(t, e);
    }
    function F(t, e, i) {
        if (isNaN(t) || isNaN(e))
            throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        (this.lat = +t), (this.lng = +e), void 0 !== i && (this.alt = +i);
    }
    function N(t, e, i) {
        return t instanceof F
            ? t
            : g(t) && "object" != typeof t[0]
            ? 3 === t.length
                ? new F(t[0], t[1], t[2])
                : 2 === t.length
                ? new F(t[0], t[1])
                : null
            : null == t
            ? t
            : "object" == typeof t && "lat" in t
            ? new F(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
            : void 0 === e
            ? null
            : new F(t, e, i);
    }
    (k.prototype = {
        clone: function () {
            return new k(this.x, this.y);
        },
        add: function (t) {
            return this.clone()._add(O(t));
        },
        _add: function (t) {
            return (this.x += t.x), (this.y += t.y), this;
        },
        subtract: function (t) {
            return this.clone()._subtract(O(t));
        },
        _subtract: function (t) {
            return (this.x -= t.x), (this.y -= t.y), this;
        },
        divideBy: function (t) {
            return this.clone()._divideBy(t);
        },
        _divideBy: function (t) {
            return (this.x /= t), (this.y /= t), this;
        },
        multiplyBy: function (t) {
            return this.clone()._multiplyBy(t);
        },
        _multiplyBy: function (t) {
            return (this.x *= t), (this.y *= t), this;
        },
        scaleBy: function (t) {
            return new k(this.x * t.x, this.y * t.y);
        },
        unscaleBy: function (t) {
            return new k(this.x / t.x, this.y / t.y);
        },
        round: function () {
            return this.clone()._round();
        },
        _round: function () {
            return (
                (this.x = Math.round(this.x)),
                (this.y = Math.round(this.y)),
                this
            );
        },
        floor: function () {
            return this.clone()._floor();
        },
        _floor: function () {
            return (
                (this.x = Math.floor(this.x)),
                (this.y = Math.floor(this.y)),
                this
            );
        },
        ceil: function () {
            return this.clone()._ceil();
        },
        _ceil: function () {
            return (
                (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
            );
        },
        trunc: function () {
            return this.clone()._trunc();
        },
        _trunc: function () {
            return (this.x = E(this.x)), (this.y = E(this.y)), this;
        },
        distanceTo: function (t) {
            var e = (t = O(t)).x - this.x;
            t = t.y - this.y;
            return Math.sqrt(e * e + t * t);
        },
        equals: function (t) {
            return (t = O(t)).x === this.x && t.y === this.y;
        },
        contains: function (t) {
            return (
                (t = O(t)),
                Math.abs(t.x) <= Math.abs(this.x) &&
                    Math.abs(t.y) <= Math.abs(this.y)
            );
        },
        toString: function () {
            return "Point(" + u(this.x) + ", " + u(this.y) + ")";
        },
    }),
        (Z.prototype = {
            extend: function (t) {
                var e, i;
                if (t) {
                    if (t instanceof k || "number" == typeof t[0] || "x" in t)
                        e = i = O(t);
                    else if (((e = (t = B(t)).min), (i = t.max), !e || !i))
                        return this;
                    this.min || this.max
                        ? ((this.min.x = Math.min(e.x, this.min.x)),
                          (this.max.x = Math.max(i.x, this.max.x)),
                          (this.min.y = Math.min(e.y, this.min.y)),
                          (this.max.y = Math.max(i.y, this.max.y)))
                        : ((this.min = e.clone()), (this.max = i.clone()));
                }
                return this;
            },
            getCenter: function (t) {
                return O(
                    (this.min.x + this.max.x) / 2,
                    (this.min.y + this.max.y) / 2,
                    t
                );
            },
            getBottomLeft: function () {
                return O(this.min.x, this.max.y);
            },
            getTopRight: function () {
                return O(this.max.x, this.min.y);
            },
            getTopLeft: function () {
                return this.min;
            },
            getBottomRight: function () {
                return this.max;
            },
            getSize: function () {
                return this.max.subtract(this.min);
            },
            contains: function (t) {
                var e, i;
                return (
                    (t = ("number" == typeof t[0] || t instanceof k ? O : B)(
                        t
                    )) instanceof Z
                        ? ((e = t.min), (i = t.max))
                        : (e = i = t),
                    e.x >= this.min.x &&
                        i.x <= this.max.x &&
                        e.y >= this.min.y &&
                        i.y <= this.max.y
                );
            },
            intersects: function (t) {
                t = B(t);
                var e = this.min,
                    i = this.max,
                    n = t.min,
                    o = (t = t.max).x >= e.x && n.x <= i.x;
                t = t.y >= e.y && n.y <= i.y;
                return o && t;
            },
            overlaps: function (t) {
                t = B(t);
                var e = this.min,
                    i = this.max,
                    n = t.min,
                    o = (t = t.max).x > e.x && n.x < i.x;
                t = t.y > e.y && n.y < i.y;
                return o && t;
            },
            isValid: function () {
                return !(!this.min || !this.max);
            },
            pad: function (t) {
                var e = this.min,
                    i = this.max,
                    n = Math.abs(e.x - i.x) * t;
                t = Math.abs(e.y - i.y) * t;
                return B(O(e.x - n, e.y - t), O(i.x + n, i.y + t));
            },
            equals: function (t) {
                return (
                    !!t &&
                    ((t = B(t)),
                    this.min.equals(t.getTopLeft()) &&
                        this.max.equals(t.getBottomRight()))
                );
            },
        }),
        (R.prototype = {
            extend: function (t) {
                var e,
                    i,
                    n = this._southWest,
                    o = this._northEast;
                if (t instanceof F) i = e = t;
                else {
                    if (!(t instanceof R))
                        return t ? this.extend(N(t) || D(t)) : this;
                    if (((e = t._southWest), (i = t._northEast), !e || !i))
                        return this;
                }
                return (
                    n || o
                        ? ((n.lat = Math.min(e.lat, n.lat)),
                          (n.lng = Math.min(e.lng, n.lng)),
                          (o.lat = Math.max(i.lat, o.lat)),
                          (o.lng = Math.max(i.lng, o.lng)))
                        : ((this._southWest = new F(e.lat, e.lng)),
                          (this._northEast = new F(i.lat, i.lng))),
                    this
                );
            },
            pad: function (t) {
                var e = this._southWest,
                    i = this._northEast,
                    n = Math.abs(e.lat - i.lat) * t;
                t = Math.abs(e.lng - i.lng) * t;
                return new R(
                    new F(e.lat - n, e.lng - t),
                    new F(i.lat + n, i.lng + t)
                );
            },
            getCenter: function () {
                return new F(
                    (this._southWest.lat + this._northEast.lat) / 2,
                    (this._southWest.lng + this._northEast.lng) / 2
                );
            },
            getSouthWest: function () {
                return this._southWest;
            },
            getNorthEast: function () {
                return this._northEast;
            },
            getNorthWest: function () {
                return new F(this.getNorth(), this.getWest());
            },
            getSouthEast: function () {
                return new F(this.getSouth(), this.getEast());
            },
            getWest: function () {
                return this._southWest.lng;
            },
            getSouth: function () {
                return this._southWest.lat;
            },
            getEast: function () {
                return this._northEast.lng;
            },
            getNorth: function () {
                return this._northEast.lat;
            },
            contains: function (t) {
                t = (
                    "number" == typeof t[0] || t instanceof F || "lat" in t
                        ? N
                        : D
                )(t);
                var e,
                    i,
                    n = this._southWest,
                    o = this._northEast;
                return (
                    t instanceof R
                        ? ((e = t.getSouthWest()), (i = t.getNorthEast()))
                        : (e = i = t),
                    e.lat >= n.lat &&
                        i.lat <= o.lat &&
                        e.lng >= n.lng &&
                        i.lng <= o.lng
                );
            },
            intersects: function (t) {
                t = D(t);
                var e = this._southWest,
                    i = this._northEast,
                    n = t.getSouthWest(),
                    o = (t = t.getNorthEast()).lat >= e.lat && n.lat <= i.lat;
                t = t.lng >= e.lng && n.lng <= i.lng;
                return o && t;
            },
            overlaps: function (t) {
                t = D(t);
                var e = this._southWest,
                    i = this._northEast,
                    n = t.getSouthWest(),
                    o = (t = t.getNorthEast()).lat > e.lat && n.lat < i.lat;
                t = t.lng > e.lng && n.lng < i.lng;
                return o && t;
            },
            toBBoxString: function () {
                return [
                    this.getWest(),
                    this.getSouth(),
                    this.getEast(),
                    this.getNorth(),
                ].join(",");
            },
            equals: function (t, e) {
                return (
                    !!t &&
                    ((t = D(t)),
                    this._southWest.equals(t.getSouthWest(), e) &&
                        this._northEast.equals(t.getNorthEast(), e))
                );
            },
            isValid: function () {
                return !(!this._southWest || !this._northEast);
            },
        });
    var U = {
            latLngToPoint: function (t, e) {
                return (
                    (t = this.projection.project(t)),
                    (e = this.scale(e)),
                    this.transformation._transform(t, e)
                );
            },
            pointToLatLng: function (t, e) {
                return (
                    (e = this.scale(e)),
                    (t = this.transformation.untransform(t, e)),
                    this.projection.unproject(t)
                );
            },
            project: function (t) {
                return this.projection.project(t);
            },
            unproject: function (t) {
                return this.projection.unproject(t);
            },
            scale: function (t) {
                return 256 * Math.pow(2, t);
            },
            zoom: function (t) {
                return Math.log(t / 256) / Math.LN2;
            },
            getProjectedBounds: function (t) {
                var e;
                return this.infinite
                    ? null
                    : ((e = this.projection.bounds),
                      (t = this.scale(t)),
                      new Z(
                          this.transformation.transform(e.min, t),
                          this.transformation.transform(e.max, t)
                      ));
            },
            infinite: !(F.prototype = {
                equals: function (t, e) {
                    return (
                        !!t &&
                        ((t = N(t)),
                        Math.max(
                            Math.abs(this.lat - t.lat),
                            Math.abs(this.lng - t.lng)
                        ) <= (void 0 === e ? 1e-9 : e))
                    );
                },
                toString: function (t) {
                    return (
                        "LatLng(" + u(this.lat, t) + ", " + u(this.lng, t) + ")"
                    );
                },
                distanceTo: function (t) {
                    return j.distance(this, N(t));
                },
                wrap: function () {
                    return j.wrapLatLng(this);
                },
                toBounds: function (t) {
                    var e =
                        (t = (180 * t) / 40075017) /
                        Math.cos((Math.PI / 180) * this.lat);
                    return D(
                        [this.lat - t, this.lng - e],
                        [this.lat + t, this.lng + e]
                    );
                },
                clone: function () {
                    return new F(this.lat, this.lng, this.alt);
                },
            }),
            wrapLatLng: function (t) {
                var e = this.wrapLng ? h(t.lng, this.wrapLng, !0) : t.lng;
                return new F(
                    this.wrapLat ? h(t.lat, this.wrapLat, !0) : t.lat,
                    e,
                    t.alt
                );
            },
            wrapLatLngBounds: function (t) {
                var e = t.getCenter(),
                    i = this.wrapLatLng(e),
                    n = e.lat - i.lat;
                e = e.lng - i.lng;
                return 0 == n && 0 == e
                    ? t
                    : ((i = t.getSouthWest()),
                      (t = t.getNorthEast()),
                      new R(
                          new F(i.lat - n, i.lng - e),
                          new F(t.lat - n, t.lng - e)
                      ));
            },
        },
        j = e({}, U, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function (t, e) {
                var i = Math.PI / 180,
                    n = t.lat * i,
                    o = e.lat * i,
                    s = Math.sin(((e.lat - t.lat) * i) / 2);
                (e = Math.sin(((e.lng - t.lng) * i) / 2)),
                    (t = s * s + Math.cos(n) * Math.cos(o) * e * e),
                    (i = 2 * Math.atan2(Math.sqrt(t), Math.sqrt(1 - t)));
                return this.R * i;
            },
        }),
        G = {
            R: (G = 6378137),
            MAX_LATITUDE: 85.0511287798,
            project: function (t) {
                var e = Math.PI / 180,
                    i = this.MAX_LATITUDE;
                (i = Math.max(Math.min(i, t.lat), -i)), (i = Math.sin(i * e));
                return new k(
                    this.R * t.lng * e,
                    (this.R * Math.log((1 + i) / (1 - i))) / 2
                );
            },
            unproject: function (t) {
                var e = 180 / Math.PI;
                return new F(
                    (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
                    (t.x * e) / this.R
                );
            },
            bounds: new Z([-(G *= Math.PI), -G], [G, G]),
        };
    function q(t, e, i, n) {
        g(t)
            ? ((this._a = t[0]),
              (this._b = t[1]),
              (this._c = t[2]),
              (this._d = t[3]))
            : ((this._a = t), (this._b = e), (this._c = i), (this._d = n));
    }
    function W(t, e, i, n) {
        return new q(t, e, i, n);
    }
    q.prototype = {
        transform: function (t, e) {
            return this._transform(t.clone(), e);
        },
        _transform: function (t, e) {
            return (
                (t.x = (e = e || 1) * (this._a * t.x + this._b)),
                (t.y = e * (this._c * t.y + this._d)),
                t
            );
        },
        untransform: function (t, e) {
            return new k(
                (t.x / (e = e || 1) - this._b) / this._a,
                (t.y / e - this._d) / this._c
            );
        },
    };
    var H = e({}, j, {
            code: "EPSG:3857",
            projection: G,
            transformation: W((H = 0.5 / (Math.PI * G.R)), 0.5, -H, 0.5),
        }),
        V = e({}, H, { code: "EPSG:900913" });
    function K(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function J(t, e) {
        for (var i, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
            for (i = 0, n = (o = t[a]).length; i < n; i++)
                r += (i ? "L" : "M") + (s = o[i]).x + " " + s.y;
            r += e ? (Mt.svg ? "z" : "x") : "";
        }
        return r || "M0 0";
    }
    var Y = document.documentElement.style,
        Q = "ActiveXObject" in window,
        X = Q && !document.addEventListener,
        $ = "msLaunchUri" in navigator && !("documentMode" in document),
        tt = Ct("webkit"),
        et = Ct("android"),
        it = Ct("android 2") || Ct("android 3"),
        nt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
        ot =
            ((nt = et && Ct("Google") && nt < 537 && !("AudioNode" in window)),
            !!window.opera),
        st = !$ && Ct("chrome"),
        rt = Ct("gecko") && !tt && !ot && !Q,
        at = !st && Ct("safari"),
        ht = Ct("phantom"),
        lt = "OTransition" in Y,
        ut = 0 === navigator.platform.indexOf("Win"),
        ct = Q && "transition" in Y,
        dt =
            "WebKitCSSMatrix" in window &&
            "m11" in new window.WebKitCSSMatrix() &&
            !it,
        pt =
            ((Y = "MozPerspective" in Y),
            !window.L_DISABLE_3D && (ct || dt || Y) && !lt && !ht),
        _t = (Wi = "undefined" != typeof orientation || Ct("mobile")) && tt,
        mt = Wi && dt,
        ft = !window.PointerEvent && window.MSPointerEvent,
        gt = !(!window.PointerEvent && !ft),
        vt = "ontouchstart" in window || !!window.TouchEvent,
        yt = !window.L_NO_TOUCH && (vt || gt),
        xt = Wi && ot,
        bt = Wi && rt,
        wt =
            1 <
            (window.devicePixelRatio ||
                window.screen.deviceXDPI / window.screen.logicalXDPI),
        Lt = (function () {
            var t = !1;
            try {
                var e = Object.defineProperty({}, "passive", {
                    get: function () {
                        t = !0;
                    },
                });
                window.addEventListener("testPassiveEventSupport", l, e),
                    window.removeEventListener("testPassiveEventSupport", l, e);
            } catch (t) {}
            return t;
        })(),
        Pt = !!document.createElement("canvas").getContext,
        Tt = !(!document.createElementNS || !K("svg").createSVGRect),
        St =
            !!Tt &&
            (((St = document.createElement("div")).innerHTML = "<svg/>"),
            "http://www.w3.org/2000/svg" ===
                (St.firstChild && St.firstChild.namespaceURI));
    function Ct(t) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
    }
    var Mt = {
            ie: Q,
            ielt9: X,
            edge: $,
            webkit: tt,
            android: et,
            android23: it,
            androidStock: nt,
            opera: ot,
            chrome: st,
            gecko: rt,
            safari: at,
            phantom: ht,
            opera12: lt,
            win: ut,
            ie3d: ct,
            webkit3d: dt,
            gecko3d: Y,
            any3d: pt,
            mobile: Wi,
            mobileWebkit: _t,
            mobileWebkit3d: mt,
            msPointer: ft,
            pointer: gt,
            touch: yt,
            touchNative: vt,
            mobileOpera: xt,
            mobileGecko: bt,
            retina: wt,
            passiveEvents: Lt,
            canvas: Pt,
            svg: Tt,
            vml:
                !Tt &&
                (function () {
                    try {
                        var t = document.createElement("div"),
                            e =
                                ((t.innerHTML = '<v:shape adj="1"/>'),
                                t.firstChild);
                        return (
                            (e.style.behavior = "url(#default#VML)"),
                            e && "object" == typeof e.adj
                        );
                    } catch (t) {
                        return !1;
                    }
                })(),
            inlineSvg: St,
            mac: 0 === navigator.platform.indexOf("Mac"),
            linux: 0 === navigator.platform.indexOf("Linux"),
        },
        At = Mt.msPointer ? "MSPointerDown" : "pointerdown",
        zt = Mt.msPointer ? "MSPointerMove" : "pointermove",
        It = Mt.msPointer ? "MSPointerUp" : "pointerup",
        kt = Mt.msPointer ? "MSPointerCancel" : "pointercancel",
        Et = { touchstart: At, touchmove: zt, touchend: It, touchcancel: kt },
        Ot = {
            touchstart: function (t, e) {
                e.MSPOINTER_TYPE_TOUCH &&
                    e.pointerType === e.MSPOINTER_TYPE_TOUCH &&
                    Ae(e),
                    Nt(t, e);
            },
            touchmove: Nt,
            touchend: Nt,
            touchcancel: Nt,
        },
        Zt = {},
        Bt = !1;
    function Rt(t) {
        Zt[t.pointerId] = t;
    }
    function Dt(t) {
        Zt[t.pointerId] && (Zt[t.pointerId] = t);
    }
    function Ft(t) {
        delete Zt[t.pointerId];
    }
    function Nt(t, e) {
        if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
            for (var i in ((e.touches = []), Zt)) e.touches.push(Zt[i]);
            (e.changedTouches = [e]), t(e);
        }
    }
    var Ut,
        jt,
        Gt,
        qt,
        Wt,
        Ht,
        Vt = le([
            "transform",
            "webkitTransform",
            "OTransform",
            "MozTransform",
            "msTransform",
        ]),
        Kt = le([
            "webkitTransition",
            "transition",
            "OTransition",
            "MozTransition",
            "msTransition",
        ]),
        Jt =
            "webkitTransition" === Kt || "OTransition" === Kt
                ? Kt + "End"
                : "transitionend";
    function Yt(t) {
        return "string" == typeof t ? document.getElementById(t) : t;
    }
    function Qt(t, e) {
        var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
        return "auto" ===
            (i =
                (i && "auto" !== i) || !document.defaultView
                    ? i
                    : (t = document.defaultView.getComputedStyle(t, null))
                    ? t[e]
                    : null)
            ? null
            : i;
    }
    function Xt(t, e, i) {
        return (
            ((t = document.createElement(t)).className = e || ""),
            i && i.appendChild(t),
            t
        );
    }
    function $t(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
    }
    function te(t) {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
    }
    function ee(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t);
    }
    function ie(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function ne(t, e) {
        return void 0 !== t.classList
            ? t.classList.contains(e)
            : 0 < (t = ae(t)).length &&
                  new RegExp("(^|\\s)" + e + "(\\s|$)").test(t);
    }
    function oe(t, e) {
        var i;
        if (void 0 !== t.classList)
            for (var n = d(e), o = 0, s = n.length; o < s; o++)
                t.classList.add(n[o]);
        else ne(t, e) || re(t, ((i = ae(t)) ? i + " " : "") + e);
    }
    function se(t, e) {
        void 0 !== t.classList
            ? t.classList.remove(e)
            : re(t, c((" " + ae(t) + " ").replace(" " + e + " ", " ")));
    }
    function re(t, e) {
        void 0 === t.className.baseVal
            ? (t.className = e)
            : (t.className.baseVal = e);
    }
    function ae(t) {
        return void 0 ===
            (t = t.correspondingElement ? t.correspondingElement : t).className
                .baseVal
            ? t.className
            : t.className.baseVal;
    }
    function he(t, e) {
        if ("opacity" in t.style) t.style.opacity = e;
        else if ("filter" in t.style) {
            var i = !1,
                n = "DXImageTransform.Microsoft.Alpha";
            try {
                i = t.filters.item(n);
            } catch (t) {
                if (1 === e) return;
            }
            (e = Math.round(100 * e)),
                i
                    ? ((i.Enabled = 100 !== e), (i.Opacity = e))
                    : (t.style.filter +=
                          " progid:" + n + "(opacity=" + e + ")");
        }
    }
    function le(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
            if (t[i] in e) return t[i];
        return !1;
    }
    function ue(t, e, i) {
        (e = e || new k(0, 0)),
            (t.style[Vt] =
                (Mt.ie3d
                    ? "translate(" + e.x + "px," + e.y + "px)"
                    : "translate3d(" + e.x + "px," + e.y + "px,0)") +
                (i ? " scale(" + i + ")" : ""));
    }
    function ce(t, e) {
        (t._leaflet_pos = e),
            Mt.any3d
                ? ue(t, e)
                : ((t.style.left = e.x + "px"), (t.style.top = e.y + "px"));
    }
    function de(t) {
        return t._leaflet_pos || new k(0, 0);
    }
    function pe() {
        ye(window, "dragstart", Ae);
    }
    function _e() {
        be(window, "dragstart", Ae);
    }
    function me(t) {
        for (; -1 === t.tabIndex; ) t = t.parentNode;
        t.style &&
            (fe(),
            (Ht = (Wt = t).style.outline),
            (t.style.outline = "none"),
            ye(window, "keydown", fe));
    }
    function fe() {
        Wt &&
            ((Wt.style.outline = Ht),
            (Ht = Wt = void 0),
            be(window, "keydown", fe));
    }
    function ge(t) {
        for (
            ;
            !(
                ((t = t.parentNode).offsetWidth && t.offsetHeight) ||
                t === document.body
            );

        );
        return t;
    }
    function ve(t) {
        var e = t.getBoundingClientRect();
        return {
            x: e.width / t.offsetWidth || 1,
            y: e.height / t.offsetHeight || 1,
            boundingClientRect: e,
        };
    }
    function ye(t, e, i, n) {
        if (e && "object" == typeof e) for (var o in e) Pe(t, o, e[o], i);
        else
            for (var s = 0, r = (e = d(e)).length; s < r; s++)
                Pe(t, e[s], i, n);
        return this;
    }
    (qt =
        "onselectstart" in document
            ? ((Gt = function () {
                  ye(window, "selectstart", Ae);
              }),
              function () {
                  be(window, "selectstart", Ae);
              })
            : ((jt = le([
                  "userSelect",
                  "WebkitUserSelect",
                  "OUserSelect",
                  "MozUserSelect",
                  "msUserSelect",
              ])),
              (Gt = function () {
                  var t;
                  jt &&
                      ((t = document.documentElement.style),
                      (Ut = t[jt]),
                      (t[jt] = "none"));
              }),
              function () {
                  jt &&
                      ((document.documentElement.style[jt] = Ut),
                      (Ut = void 0));
              })),
        (Q = {
            __proto__: null,
            TRANSFORM: Vt,
            TRANSITION: Kt,
            TRANSITION_END: Jt,
            get: Yt,
            getStyle: Qt,
            create: Xt,
            remove: $t,
            empty: te,
            toFront: ee,
            toBack: ie,
            hasClass: ne,
            addClass: oe,
            removeClass: se,
            setClass: re,
            getClass: ae,
            setOpacity: he,
            testProp: le,
            setTransform: ue,
            setPosition: ce,
            getPosition: de,
            get disableTextSelection() {
                return Gt;
            },
            get enableTextSelection() {
                return qt;
            },
            disableImageDrag: pe,
            enableImageDrag: _e,
            preventOutline: me,
            restoreOutline: fe,
            getSizedParentNode: ge,
            getScale: ve,
        });
    var xe = "_leaflet_events";
    function be(t, e, i, n) {
        if (1 === arguments.length) we(t), delete t[xe];
        else if (e && "object" == typeof e) for (var o in e) Te(t, o, e[o], i);
        else if (((e = d(e)), 2 === arguments.length))
            we(t, function (t) {
                return -1 !== v(e, t);
            });
        else for (var s = 0, r = e.length; s < r; s++) Te(t, e[s], i, n);
        return this;
    }
    function we(t, e) {
        for (var i in t[xe]) {
            var n = i.split(/\d/)[0];
            (e && !e(n)) || Te(t, n, null, null, i);
        }
    }
    var Le = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel",
    };
    function Pe(t, e, i, n) {
        var o,
            s,
            a = e + r(i) + (n ? "_" + r(n) : "");
        (t[xe] && t[xe][a]) ||
            ((s = o =
                function (e) {
                    return i.call(n || t, e || window.event);
                }),
            !Mt.touchNative && Mt.pointer && 0 === e.indexOf("touch")
                ? (o = (function (t, e, i) {
                      return (
                          "touchstart" !== e ||
                              Bt ||
                              (document.addEventListener(At, Rt, !0),
                              document.addEventListener(zt, Dt, !0),
                              document.addEventListener(It, Ft, !0),
                              document.addEventListener(kt, Ft, !0),
                              (Bt = !0)),
                          Ot[e]
                              ? ((i = Ot[e].bind(this, i)),
                                t.addEventListener(Et[e], i, !1),
                                i)
                              : (console.warn("wrong event specified:", e),
                                L.Util.falseFn)
                      );
                  })(t, e, o))
                : Mt.touch && "dblclick" === e
                ? (o = (function (t, e) {
                      t.addEventListener("dblclick", e);
                      var i,
                          n = 0;
                      function o(t) {
                          var o;
                          1 !== t.detail
                              ? (i = t.detail)
                              : "mouse" === t.pointerType ||
                                (t.sourceCapabilities &&
                                    !t.sourceCapabilities.firesTouchEvents) ||
                                ((o = Ie(t)).some(function (t) {
                                    return (
                                        t instanceof HTMLLabelElement &&
                                        t.attributes.for
                                    );
                                }) &&
                                    !o.some(function (t) {
                                        return (
                                            t instanceof HTMLInputElement ||
                                            t instanceof HTMLSelectElement
                                        );
                                    })) ||
                                ((o = Date.now()) - n <= 200
                                    ? 2 == ++i &&
                                      e(
                                          (function (t) {
                                              var e,
                                                  i,
                                                  n = {};
                                              for (i in t)
                                                  (e = t[i]),
                                                      (n[i] =
                                                          e && e.bind
                                                              ? e.bind(t)
                                                              : e);
                                              return (
                                                  ((t = n).type = "dblclick"),
                                                  (n.detail = 2),
                                                  (n.isTrusted = !1),
                                                  (n._simulated = !0),
                                                  n
                                              );
                                          })(t)
                                      )
                                    : (i = 1),
                                (n = o));
                      }
                      return (
                          t.addEventListener("click", o),
                          { dblclick: e, simDblclick: o }
                      );
                  })(t, o))
                : "addEventListener" in t
                ? "touchstart" === e ||
                  "touchmove" === e ||
                  "wheel" === e ||
                  "mousewheel" === e
                    ? t.addEventListener(
                          Le[e] || e,
                          o,
                          !!Mt.passiveEvents && { passive: !1 }
                      )
                    : "mouseenter" === e || "mouseleave" === e
                    ? t.addEventListener(
                          Le[e],
                          (o = function (e) {
                              (e = e || window.event), Ze(t, e) && s(e);
                          }),
                          !1
                      )
                    : t.addEventListener(e, s, !1)
                : t.attachEvent("on" + e, o),
            (t[xe] = t[xe] || {}),
            (t[xe][a] = o));
    }
    function Te(t, e, i, n, o) {
        var s, a;
        (o = o || e + r(i) + (n ? "_" + r(n) : "")),
            (i = t[xe] && t[xe][o]) &&
                (!Mt.touchNative && Mt.pointer && 0 === e.indexOf("touch")
                    ? ((n = t),
                      (a = i),
                      Et[(s = e)]
                          ? n.removeEventListener(Et[s], a, !1)
                          : console.warn("wrong event specified:", s))
                    : Mt.touch && "dblclick" === e
                    ? ((n = i),
                      (a = t).removeEventListener("dblclick", n.dblclick),
                      a.removeEventListener("click", n.simDblclick))
                    : "removeEventListener" in t
                    ? t.removeEventListener(Le[e] || e, i, !1)
                    : t.detachEvent("on" + e, i),
                (t[xe][o] = null));
    }
    function Se(t) {
        return (
            t.stopPropagation
                ? t.stopPropagation()
                : t.originalEvent
                ? (t.originalEvent._stopped = !0)
                : (t.cancelBubble = !0),
            this
        );
    }
    function Ce(t) {
        return Pe(t, "wheel", Se), this;
    }
    function Me(t) {
        return (
            ye(t, "mousedown touchstart dblclick contextmenu", Se),
            (t._leaflet_disable_click = !0),
            this
        );
    }
    function Ae(t) {
        return (
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this
        );
    }
    function ze(t) {
        return Ae(t), Se(t), this;
    }
    function Ie(t) {
        if (t.composedPath) return t.composedPath();
        for (var e = [], i = t.target; i; ) e.push(i), (i = i.parentNode);
        return e;
    }
    function ke(t, e) {
        var i, n;
        return e
            ? ((n = (i = ve(e)).boundingClientRect),
              new k(
                  (t.clientX - n.left) / i.x - e.clientLeft,
                  (t.clientY - n.top) / i.y - e.clientTop
              ))
            : new k(t.clientX, t.clientY);
    }
    var Ee =
        Mt.linux && Mt.chrome
            ? window.devicePixelRatio
            : Mt.mac
            ? 3 * window.devicePixelRatio
            : 0 < window.devicePixelRatio
            ? 2 * window.devicePixelRatio
            : 1;
    function Oe(t) {
        return Mt.edge
            ? t.wheelDeltaY / 2
            : t.deltaY && 0 === t.deltaMode
            ? -t.deltaY / Ee
            : t.deltaY && 1 === t.deltaMode
            ? 20 * -t.deltaY
            : t.deltaY && 2 === t.deltaMode
            ? 60 * -t.deltaY
            : t.deltaX || t.deltaZ
            ? 0
            : t.wheelDelta
            ? (t.wheelDeltaY || t.wheelDelta) / 2
            : t.detail && Math.abs(t.detail) < 32765
            ? 20 * -t.detail
            : t.detail
            ? (t.detail / -32765) * 60
            : 0;
    }
    function Ze(t, e) {
        var i = e.relatedTarget;
        if (!i) return !0;
        try {
            for (; i && i !== t; ) i = i.parentNode;
        } catch (t) {
            return !1;
        }
        return i !== t;
    }
    X = {
        __proto__: null,
        on: ye,
        off: be,
        stopPropagation: Se,
        disableScrollPropagation: Ce,
        disableClickPropagation: Me,
        preventDefault: Ae,
        stop: ze,
        getPropagationPath: Ie,
        getMousePosition: ke,
        getWheelDelta: Oe,
        isExternalTarget: Ze,
        addListener: ye,
        removeListener: be,
    };
    var Be = I.extend({
            run: function (t, e, i, n) {
                this.stop(),
                    (this._el = t),
                    (this._inProgress = !0),
                    (this._duration = i || 0.25),
                    (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
                    (this._startPos = de(t)),
                    (this._offset = e.subtract(this._startPos)),
                    (this._startTime = +new Date()),
                    this.fire("start"),
                    this._animate();
            },
            stop: function () {
                this._inProgress && (this._step(!0), this._complete());
            },
            _animate: function () {
                (this._animId = S(this._animate, this)), this._step();
            },
            _step: function (t) {
                var e = +new Date() - this._startTime,
                    i = 1e3 * this._duration;
                e < i
                    ? this._runFrame(this._easeOut(e / i), t)
                    : (this._runFrame(1), this._complete());
            },
            _runFrame: function (t, e) {
                (t = this._startPos.add(this._offset.multiplyBy(t))),
                    e && t._round(),
                    ce(this._el, t),
                    this.fire("step");
            },
            _complete: function () {
                C(this._animId), (this._inProgress = !1), this.fire("end");
            },
            _easeOut: function (t) {
                return 1 - Math.pow(1 - t, this._easeOutPower);
            },
        }),
        Re = I.extend({
            options: {
                crs: H,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0,
            },
            initialize: function (t, e) {
                (e = p(this, e)),
                    (this._handlers = []),
                    (this._layers = {}),
                    (this._zoomBoundLayers = {}),
                    (this._sizeChanged = !0),
                    this._initContainer(t),
                    this._initLayout(),
                    (this._onResize = o(this._onResize, this)),
                    this._initEvents(),
                    e.maxBounds && this.setMaxBounds(e.maxBounds),
                    void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
                    e.center &&
                        void 0 !== e.zoom &&
                        this.setView(N(e.center), e.zoom, { reset: !0 }),
                    this.callInitHooks(),
                    (this._zoomAnimated =
                        Kt &&
                        Mt.any3d &&
                        !Mt.mobileOpera &&
                        this.options.zoomAnimation),
                    this._zoomAnimated &&
                        (this._createAnimProxy(),
                        ye(this._proxy, Jt, this._catchTransitionEnd, this)),
                    this._addLayers(this.options.layers);
            },
            setView: function (t, i, n) {
                return (
                    (i = void 0 === i ? this._zoom : this._limitZoom(i)),
                    (t = this._limitCenter(N(t), i, this.options.maxBounds)),
                    (n = n || {}),
                    this._stop(),
                    this._loaded &&
                    !n.reset &&
                    !0 !== n &&
                    (void 0 !== n.animate &&
                        ((n.zoom = e({ animate: n.animate }, n.zoom)),
                        (n.pan = e(
                            { animate: n.animate, duration: n.duration },
                            n.pan
                        ))),
                    this._zoom !== i
                        ? this._tryAnimatedZoom &&
                          this._tryAnimatedZoom(t, i, n.zoom)
                        : this._tryAnimatedPan(t, n.pan))
                        ? (clearTimeout(this._sizeTimer), this)
                        : (this._resetView(t, i, n.pan && n.pan.noMoveStart),
                          this)
                );
            },
            setZoom: function (t, e) {
                return this._loaded
                    ? this.setView(this.getCenter(), t, { zoom: e })
                    : ((this._zoom = t), this);
            },
            zoomIn: function (t, e) {
                return (
                    (t = t || (Mt.any3d ? this.options.zoomDelta : 1)),
                    this.setZoom(this._zoom + t, e)
                );
            },
            zoomOut: function (t, e) {
                return (
                    (t = t || (Mt.any3d ? this.options.zoomDelta : 1)),
                    this.setZoom(this._zoom - t, e)
                );
            },
            setZoomAround: function (t, e, i) {
                var n = this.getZoomScale(e),
                    o = this.getSize().divideBy(2);
                (t = (t instanceof k ? t : this.latLngToContainerPoint(t))
                    .subtract(o)
                    .multiplyBy(1 - 1 / n)),
                    (n = this.containerPointToLatLng(o.add(t)));
                return this.setView(n, e, { zoom: i });
            },
            _getBoundsCenterZoom: function (t, e) {
                (e = e || {}), (t = t.getBounds ? t.getBounds() : D(t));
                var i = O(e.paddingTopLeft || e.padding || [0, 0]),
                    n = O(e.paddingBottomRight || e.padding || [0, 0]),
                    o = this.getBoundsZoom(t, !1, i.add(n));
                return (o =
                    "number" == typeof e.maxZoom
                        ? Math.min(e.maxZoom, o)
                        : o) ===
                    1 / 0
                    ? { center: t.getCenter(), zoom: o }
                    : ((e = n.subtract(i).divideBy(2)),
                      (n = this.project(t.getSouthWest(), o)),
                      (i = this.project(t.getNorthEast(), o)),
                      {
                          center: this.unproject(
                              n.add(i).divideBy(2).add(e),
                              o
                          ),
                          zoom: o,
                      });
            },
            fitBounds: function (t, e) {
                if ((t = D(t)).isValid())
                    return (
                        (t = this._getBoundsCenterZoom(t, e)),
                        this.setView(t.center, t.zoom, e)
                    );
                throw new Error("Bounds are not valid.");
            },
            fitWorld: function (t) {
                return this.fitBounds(
                    [
                        [-90, -180],
                        [90, 180],
                    ],
                    t
                );
            },
            panTo: function (t, e) {
                return this.setView(t, this._zoom, { pan: e });
            },
            panBy: function (t, e) {
                var i;
                return (
                    (e = e || {}),
                    (t = O(t).round()).x || t.y
                        ? (!0 === e.animate || this.getSize().contains(t)
                              ? (this._panAnim ||
                                    ((this._panAnim = new Be()),
                                    this._panAnim.on(
                                        {
                                            step: this._onPanTransitionStep,
                                            end: this._onPanTransitionEnd,
                                        },
                                        this
                                    )),
                                e.noMoveStart || this.fire("movestart"),
                                !1 !== e.animate
                                    ? (oe(this._mapPane, "leaflet-pan-anim"),
                                      (i = this._getMapPanePos()
                                          .subtract(t)
                                          .round()),
                                      this._panAnim.run(
                                          this._mapPane,
                                          i,
                                          e.duration || 0.25,
                                          e.easeLinearity
                                      ))
                                    : (this._rawPanBy(t),
                                      this.fire("move").fire("moveend")))
                              : this._resetView(
                                    this.unproject(
                                        this.project(this.getCenter()).add(t)
                                    ),
                                    this.getZoom()
                                ),
                          this)
                        : this.fire("moveend")
                );
            },
            flyTo: function (t, e, i) {
                if (!1 === (i = i || {}).animate || !Mt.any3d)
                    return this.setView(t, e, i);
                this._stop();
                var n = this.project(this.getCenter()),
                    o = this.project(t),
                    s = this.getSize(),
                    r = this._zoom,
                    a =
                        ((t = N(t)),
                        (e = void 0 === e ? r : e),
                        Math.max(s.x, s.y)),
                    h = a * this.getZoomScale(r, e),
                    l = o.distanceTo(n) || 1,
                    u = 1.42,
                    c = u * u;
                function d(t) {
                    return (
                        (t =
                            (h * h - a * a + (t ? -1 : 1) * c * c * l * l) /
                            (2 * (t ? h : a) * c * l)),
                        (t = Math.sqrt(t * t + 1) - t) < 1e-9
                            ? -18
                            : Math.log(t)
                    );
                }
                function p(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2;
                }
                function _(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2;
                }
                var m = d(0);
                var f = Date.now(),
                    g = (d(1) - m) / u,
                    v = i.duration ? 1e3 * i.duration : 1e3 * g * 0.8;
                return (
                    this._moveStart(!0, i.noMoveStart),
                    function i() {
                        var s = (Date.now() - f) / v,
                            h = (1 - Math.pow(1 - s, 1.5)) * g;
                        s <= 1
                            ? ((this._flyToFrame = S(i, this)),
                              this._move(
                                  this.unproject(
                                      n.add(
                                          o.subtract(n).multiplyBy(
                                              (function (t) {
                                                  return (
                                                      (a *
                                                          (_(m) *
                                                              (p(
                                                                  (t =
                                                                      m + u * t)
                                                              ) /
                                                                  _(t)) -
                                                              p(m))) /
                                                      c
                                                  );
                                              })(h) / l
                                          )
                                      ),
                                      r
                                  ),
                                  this.getScaleZoom(
                                      a / ((s = h), a * (_(m) / _(m + u * s))),
                                      r
                                  ),
                                  { flyTo: !0 }
                              ))
                            : this._move(t, e)._moveEnd(!0);
                    }.call(this),
                    this
                );
            },
            flyToBounds: function (t, e) {
                return (
                    (t = this._getBoundsCenterZoom(t, e)),
                    this.flyTo(t.center, t.zoom, e)
                );
            },
            setMaxBounds: function (t) {
                return (
                    (t = D(t)),
                    this.listens("moveend", this._panInsideMaxBounds) &&
                        this.off("moveend", this._panInsideMaxBounds),
                    t.isValid()
                        ? ((this.options.maxBounds = t),
                          this._loaded && this._panInsideMaxBounds(),
                          this.on("moveend", this._panInsideMaxBounds))
                        : ((this.options.maxBounds = null), this)
                );
            },
            setMinZoom: function (t) {
                var e = this.options.minZoom;
                return (
                    (this.options.minZoom = t),
                    this._loaded &&
                    e !== t &&
                    (this.fire("zoomlevelschange"),
                    this.getZoom() < this.options.minZoom)
                        ? this.setZoom(t)
                        : this
                );
            },
            setMaxZoom: function (t) {
                var e = this.options.maxZoom;
                return (
                    (this.options.maxZoom = t),
                    this._loaded &&
                    e !== t &&
                    (this.fire("zoomlevelschange"),
                    this.getZoom() > this.options.maxZoom)
                        ? this.setZoom(t)
                        : this
                );
            },
            panInsideBounds: function (t, e) {
                this._enforcingBounds = !0;
                var i = this.getCenter();
                t = this._limitCenter(i, this._zoom, D(t));
                return (
                    i.equals(t) || this.panTo(t, e),
                    (this._enforcingBounds = !1),
                    this
                );
            },
            panInside: function (t, e) {
                var i = O((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                    n = O(e.paddingBottomRight || e.padding || [0, 0]),
                    o = this.project(this.getCenter()),
                    s =
                        ((t = this.project(t)),
                        (i = B([
                            (s = this.getPixelBounds()).min.add(i),
                            s.max.subtract(n),
                        ])).getSize());
                return (
                    i.contains(t) ||
                        ((this._enforcingBounds = !0),
                        (n = t.subtract(i.getCenter())),
                        (i = i.extend(t).getSize().subtract(s)),
                        (o.x += n.x < 0 ? -i.x : i.x),
                        (o.y += n.y < 0 ? -i.y : i.y),
                        this.panTo(this.unproject(o), e),
                        (this._enforcingBounds = !1)),
                    this
                );
            },
            invalidateSize: function (t) {
                if (!this._loaded) return this;
                t = e({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
                var i = this.getSize(),
                    n =
                        ((this._sizeChanged = !0),
                        (this._lastCenter = null),
                        this.getSize()),
                    s = i.divideBy(2).round(),
                    r = n.divideBy(2).round();
                return (s = s.subtract(r)).x || s.y
                    ? (t.animate && t.pan
                          ? this.panBy(s)
                          : (t.pan && this._rawPanBy(s),
                            this.fire("move"),
                            t.debounceMoveend
                                ? (clearTimeout(this._sizeTimer),
                                  (this._sizeTimer = setTimeout(
                                      o(this.fire, this, "moveend"),
                                      200
                                  )))
                                : this.fire("moveend")),
                      this.fire("resize", { oldSize: i, newSize: n }))
                    : this;
            },
            stop: function () {
                return (
                    this.setZoom(this._limitZoom(this._zoom)),
                    this.options.zoomSnap || this.fire("viewreset"),
                    this._stop()
                );
            },
            locate: function (t) {
                var i, n;
                return (
                    (t = this._locateOptions =
                        e({ timeout: 1e4, watch: !1 }, t)),
                    "geolocation" in navigator
                        ? ((i = o(this._handleGeolocationResponse, this)),
                          (n = o(this._handleGeolocationError, this)),
                          t.watch
                              ? (this._locationWatchId =
                                    navigator.geolocation.watchPosition(
                                        i,
                                        n,
                                        t
                                    ))
                              : navigator.geolocation.getCurrentPosition(
                                    i,
                                    n,
                                    t
                                ))
                        : this._handleGeolocationError({
                              code: 0,
                              message: "Geolocation not supported.",
                          }),
                    this
                );
            },
            stopLocate: function () {
                return (
                    navigator.geolocation &&
                        navigator.geolocation.clearWatch &&
                        navigator.geolocation.clearWatch(this._locationWatchId),
                    this._locateOptions && (this._locateOptions.setView = !1),
                    this
                );
            },
            _handleGeolocationError: function (t) {
                var e;
                this._container._leaflet_id &&
                    ((e = t.code),
                    (t =
                        t.message ||
                        (1 === e
                            ? "permission denied"
                            : 2 === e
                            ? "position unavailable"
                            : "timeout")),
                    this._locateOptions.setView &&
                        !this._loaded &&
                        this.fitWorld(),
                    this.fire("locationerror", {
                        code: e,
                        message: "Geolocation error: " + t + ".",
                    }));
            },
            _handleGeolocationResponse: function (t) {
                if (this._container._leaflet_id) {
                    var e,
                        i,
                        n = new F(t.coords.latitude, t.coords.longitude),
                        o = n.toBounds(2 * t.coords.accuracy),
                        s = this._locateOptions,
                        r =
                            (s.setView &&
                                ((e = this.getBoundsZoom(o)),
                                this.setView(
                                    n,
                                    s.maxZoom ? Math.min(e, s.maxZoom) : e
                                )),
                            { latlng: n, bounds: o, timestamp: t.timestamp });
                    for (i in t.coords)
                        "number" == typeof t.coords[i] && (r[i] = t.coords[i]);
                    this.fire("locationfound", r);
                }
            },
            addHandler: function (t, e) {
                return (
                    e &&
                        ((e = this[t] = new e(this)),
                        this._handlers.push(e),
                        this.options[t] && e.enable()),
                    this
                );
            },
            remove: function () {
                if (
                    (this._initEvents(!0),
                    this.options.maxBounds &&
                        this.off("moveend", this._panInsideMaxBounds),
                    this._containerId !== this._container._leaflet_id)
                )
                    throw new Error(
                        "Map container is being reused by another instance"
                    );
                try {
                    delete this._container._leaflet_id,
                        delete this._containerId;
                } catch (t) {
                    (this._container._leaflet_id = void 0),
                        (this._containerId = void 0);
                }
                for (var t in (void 0 !== this._locationWatchId &&
                    this.stopLocate(),
                this._stop(),
                $t(this._mapPane),
                this._clearControlPos && this._clearControlPos(),
                this._resizeRequest &&
                    (C(this._resizeRequest), (this._resizeRequest = null)),
                this._clearHandlers(),
                this._loaded && this.fire("unload"),
                this._layers))
                    this._layers[t].remove();
                for (t in this._panes) $t(this._panes[t]);
                return (
                    (this._layers = []),
                    (this._panes = []),
                    delete this._mapPane,
                    delete this._renderer,
                    this
                );
            },
            createPane: function (t, e) {
                return (
                    (e = Xt(
                        "div",
                        "leaflet-pane" +
                            (t
                                ? " leaflet-" + t.replace("Pane", "") + "-pane"
                                : ""),
                        e || this._mapPane
                    )),
                    t && (this._panes[t] = e),
                    e
                );
            },
            getCenter: function () {
                return (
                    this._checkIfLoaded(),
                    this._lastCenter && !this._moved()
                        ? this._lastCenter.clone()
                        : this.layerPointToLatLng(this._getCenterLayerPoint())
                );
            },
            getZoom: function () {
                return this._zoom;
            },
            getBounds: function () {
                var t = this.getPixelBounds();
                return new R(
                    this.unproject(t.getBottomLeft()),
                    this.unproject(t.getTopRight())
                );
            },
            getMinZoom: function () {
                return void 0 === this.options.minZoom
                    ? this._layersMinZoom || 0
                    : this.options.minZoom;
            },
            getMaxZoom: function () {
                return void 0 === this.options.maxZoom
                    ? void 0 === this._layersMaxZoom
                        ? 1 / 0
                        : this._layersMaxZoom
                    : this.options.maxZoom;
            },
            getBoundsZoom: function (t, e, i) {
                (t = D(t)), (i = O(i || [0, 0]));
                var n = this.getZoom() || 0,
                    o = this.getMinZoom(),
                    s = this.getMaxZoom(),
                    r = t.getNorthWest(),
                    a =
                        ((t = t.getSouthEast()),
                        (i = this.getSize().subtract(i)),
                        (t = B(
                            this.project(t, n),
                            this.project(r, n)
                        ).getSize()),
                        (r = Mt.any3d ? this.options.zoomSnap : 1),
                        i.x / t.x);
                (i = i.y / t.y),
                    (t = e ? Math.max(a, i) : Math.min(a, i)),
                    (n = this.getScaleZoom(t, n));
                return (
                    r &&
                        ((n = Math.round(n / (r / 100)) * (r / 100)),
                        (n = e ? Math.ceil(n / r) * r : Math.floor(n / r) * r)),
                    Math.max(o, Math.min(s, n))
                );
            },
            getSize: function () {
                return (
                    (this._size && !this._sizeChanged) ||
                        ((this._size = new k(
                            this._container.clientWidth || 0,
                            this._container.clientHeight || 0
                        )),
                        (this._sizeChanged = !1)),
                    this._size.clone()
                );
            },
            getPixelBounds: function (t, e) {
                return new Z(
                    (t = this._getTopLeftPoint(t, e)),
                    t.add(this.getSize())
                );
            },
            getPixelOrigin: function () {
                return this._checkIfLoaded(), this._pixelOrigin;
            },
            getPixelWorldBounds: function (t) {
                return this.options.crs.getProjectedBounds(
                    void 0 === t ? this.getZoom() : t
                );
            },
            getPane: function (t) {
                return "string" == typeof t ? this._panes[t] : t;
            },
            getPanes: function () {
                return this._panes;
            },
            getContainer: function () {
                return this._container;
            },
            getZoomScale: function (t, e) {
                var i = this.options.crs;
                return (
                    (e = void 0 === e ? this._zoom : e), i.scale(t) / i.scale(e)
                );
            },
            getScaleZoom: function (t, e) {
                var i = this.options.crs;
                (e = void 0 === e ? this._zoom : e),
                    (t = i.zoom(t * i.scale(e)));
                return isNaN(t) ? 1 / 0 : t;
            },
            project: function (t, e) {
                return (
                    (e = void 0 === e ? this._zoom : e),
                    this.options.crs.latLngToPoint(N(t), e)
                );
            },
            unproject: function (t, e) {
                return (
                    (e = void 0 === e ? this._zoom : e),
                    this.options.crs.pointToLatLng(O(t), e)
                );
            },
            layerPointToLatLng: function (t) {
                return (t = O(t).add(this.getPixelOrigin())), this.unproject(t);
            },
            latLngToLayerPoint: function (t) {
                return this.project(N(t))
                    ._round()
                    ._subtract(this.getPixelOrigin());
            },
            wrapLatLng: function (t) {
                return this.options.crs.wrapLatLng(N(t));
            },
            wrapLatLngBounds: function (t) {
                return this.options.crs.wrapLatLngBounds(D(t));
            },
            distance: function (t, e) {
                return this.options.crs.distance(N(t), N(e));
            },
            containerPointToLayerPoint: function (t) {
                return O(t).subtract(this._getMapPanePos());
            },
            layerPointToContainerPoint: function (t) {
                return O(t).add(this._getMapPanePos());
            },
            containerPointToLatLng: function (t) {
                return (
                    (t = this.containerPointToLayerPoint(O(t))),
                    this.layerPointToLatLng(t)
                );
            },
            latLngToContainerPoint: function (t) {
                return this.layerPointToContainerPoint(
                    this.latLngToLayerPoint(N(t))
                );
            },
            mouseEventToContainerPoint: function (t) {
                return ke(t, this._container);
            },
            mouseEventToLayerPoint: function (t) {
                return this.containerPointToLayerPoint(
                    this.mouseEventToContainerPoint(t)
                );
            },
            mouseEventToLatLng: function (t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
            },
            _initContainer: function (t) {
                if (!(t = this._container = Yt(t)))
                    throw new Error("Map container not found.");
                if (t._leaflet_id)
                    throw new Error("Map container is already initialized.");
                ye(t, "scroll", this._onScroll, this),
                    (this._containerId = r(t));
            },
            _initLayout: function () {
                var t = this._container,
                    e =
                        ((this._fadeAnimated =
                            this.options.fadeAnimation && Mt.any3d),
                        oe(
                            t,
                            "leaflet-container" +
                                (Mt.touch ? " leaflet-touch" : "") +
                                (Mt.retina ? " leaflet-retina" : "") +
                                (Mt.ielt9 ? " leaflet-oldie" : "") +
                                (Mt.safari ? " leaflet-safari" : "") +
                                (this._fadeAnimated ? " leaflet-fade-anim" : "")
                        ),
                        Qt(t, "position"));
                "absolute" !== e &&
                    "relative" !== e &&
                    "fixed" !== e &&
                    (t.style.position = "relative"),
                    this._initPanes(),
                    this._initControlPos && this._initControlPos();
            },
            _initPanes: function () {
                var t = (this._panes = {});
                (this._paneRenderers = {}),
                    (this._mapPane = this.createPane(
                        "mapPane",
                        this._container
                    )),
                    ce(this._mapPane, new k(0, 0)),
                    this.createPane("tilePane"),
                    this.createPane("overlayPane"),
                    this.createPane("shadowPane"),
                    this.createPane("markerPane"),
                    this.createPane("tooltipPane"),
                    this.createPane("popupPane"),
                    this.options.markerZoomAnimation ||
                        (oe(t.markerPane, "leaflet-zoom-hide"),
                        oe(t.shadowPane, "leaflet-zoom-hide"));
            },
            _resetView: function (t, e, i) {
                ce(this._mapPane, new k(0, 0));
                var n = !this._loaded,
                    o =
                        ((this._loaded = !0),
                        (e = this._limitZoom(e)),
                        this.fire("viewprereset"),
                        this._zoom !== e);
                this._moveStart(o, i)._move(t, e)._moveEnd(o),
                    this.fire("viewreset"),
                    n && this.fire("load");
            },
            _moveStart: function (t, e) {
                return (
                    t && this.fire("zoomstart"),
                    e || this.fire("movestart"),
                    this
                );
            },
            _move: function (t, e, i, n) {
                void 0 === e && (e = this._zoom);
                var o = this._zoom !== e;
                return (
                    (this._zoom = e),
                    (this._lastCenter = t),
                    (this._pixelOrigin = this._getNewPixelOrigin(t)),
                    n
                        ? i && i.pinch && this.fire("zoom", i)
                        : ((o || (i && i.pinch)) && this.fire("zoom", i),
                          this.fire("move", i)),
                    this
                );
            },
            _moveEnd: function (t) {
                return t && this.fire("zoomend"), this.fire("moveend");
            },
            _stop: function () {
                return (
                    C(this._flyToFrame),
                    this._panAnim && this._panAnim.stop(),
                    this
                );
            },
            _rawPanBy: function (t) {
                ce(this._mapPane, this._getMapPanePos().subtract(t));
            },
            _getZoomSpan: function () {
                return this.getMaxZoom() - this.getMinZoom();
            },
            _panInsideMaxBounds: function () {
                this._enforcingBounds ||
                    this.panInsideBounds(this.options.maxBounds);
            },
            _checkIfLoaded: function () {
                if (!this._loaded)
                    throw new Error("Set map center and zoom first.");
            },
            _initEvents: function (t) {
                this._targets = {};
                var e = t ? be : ye;
                e(
                    (this._targets[r(this._container)] = this)._container,
                    "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
                    this._handleDOMEvent,
                    this
                ),
                    this.options.trackResize &&
                        e(window, "resize", this._onResize, this),
                    Mt.any3d &&
                        this.options.transform3DLimit &&
                        (t ? this.off : this.on).call(
                            this,
                            "moveend",
                            this._onMoveEnd
                        );
            },
            _onResize: function () {
                C(this._resizeRequest),
                    (this._resizeRequest = S(function () {
                        this.invalidateSize({ debounceMoveend: !0 });
                    }, this));
            },
            _onScroll: function () {
                (this._container.scrollTop = 0),
                    (this._container.scrollLeft = 0);
            },
            _onMoveEnd: function () {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >=
                    this.options.transform3DLimit &&
                    this._resetView(this.getCenter(), this.getZoom());
            },
            _findEventTargets: function (t, e) {
                for (
                    var i,
                        n = [],
                        o = "mouseout" === e || "mouseover" === e,
                        s = t.target || t.srcElement,
                        a = !1;
                    s;

                ) {
                    if (
                        (i = this._targets[r(s)]) &&
                        ("click" === e || "preclick" === e) &&
                        this._draggableMoved(i)
                    ) {
                        a = !0;
                        break;
                    }
                    if (i && i.listens(e, !0)) {
                        if (o && !Ze(s, t)) break;
                        if ((n.push(i), o)) break;
                    }
                    if (s === this._container) break;
                    s = s.parentNode;
                }
                return n.length || a || o || !this.listens(e, !0) ? n : [this];
            },
            _isClickDisabled: function (t) {
                for (; t && t !== this._container; ) {
                    if (t._leaflet_disable_click) return !0;
                    t = t.parentNode;
                }
            },
            _handleDOMEvent: function (t) {
                var e,
                    i = t.target || t.srcElement;
                !this._loaded ||
                    i._leaflet_disable_events ||
                    ("click" === t.type && this._isClickDisabled(i)) ||
                    ("mousedown" === (e = t.type) && me(i),
                    this._fireDOMEvent(t, e));
            },
            _mouseEvents: [
                "click",
                "dblclick",
                "mouseover",
                "mouseout",
                "contextmenu",
            ],
            _fireDOMEvent: function (t, i, n) {
                "click" === t.type &&
                    (((h = e({}, t)).type = "preclick"),
                    this._fireDOMEvent(h, h.type, n));
                var o = this._findEventTargets(t, i);
                if (n) {
                    for (var s = [], r = 0; r < n.length; r++)
                        n[r].listens(i, !0) && s.push(n[r]);
                    o = s.concat(o);
                }
                if (o.length) {
                    "contextmenu" === i && Ae(t);
                    var a,
                        h = o[0],
                        l = { originalEvent: t };
                    for (
                        "keypress" !== t.type &&
                            "keydown" !== t.type &&
                            "keyup" !== t.type &&
                            ((a =
                                h.getLatLng && (!h._radius || h._radius <= 10)),
                            (l.containerPoint = a
                                ? this.latLngToContainerPoint(h.getLatLng())
                                : this.mouseEventToContainerPoint(t)),
                            (l.layerPoint = this.containerPointToLayerPoint(
                                l.containerPoint
                            )),
                            (l.latlng = a
                                ? h.getLatLng()
                                : this.layerPointToLatLng(l.layerPoint))),
                            r = 0;
                        r < o.length;
                        r++
                    )
                        if (
                            (o[r].fire(i, l, !0),
                            l.originalEvent._stopped ||
                                (!1 === o[r].options.bubblingMouseEvents &&
                                    -1 !== v(this._mouseEvents, i)))
                        )
                            return;
                }
            },
            _draggableMoved: function (t) {
                return (
                    ((t = t.dragging && t.dragging.enabled() ? t : this)
                        .dragging &&
                        t.dragging.moved()) ||
                    (this.boxZoom && this.boxZoom.moved())
                );
            },
            _clearHandlers: function () {
                for (var t = 0, e = this._handlers.length; t < e; t++)
                    this._handlers[t].disable();
            },
            whenReady: function (t, e) {
                return (
                    this._loaded
                        ? t.call(e || this, { target: this })
                        : this.on("load", t, e),
                    this
                );
            },
            _getMapPanePos: function () {
                return de(this._mapPane) || new k(0, 0);
            },
            _moved: function () {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0]);
            },
            _getTopLeftPoint: function (t, e) {
                return (
                    t && void 0 !== e
                        ? this._getNewPixelOrigin(t, e)
                        : this.getPixelOrigin()
                ).subtract(this._getMapPanePos());
            },
            _getNewPixelOrigin: function (t, e) {
                var i = this.getSize()._divideBy(2);
                return this.project(t, e)
                    ._subtract(i)
                    ._add(this._getMapPanePos())
                    ._round();
            },
            _latLngToNewLayerPoint: function (t, e, i) {
                return (
                    (i = this._getNewPixelOrigin(i, e)),
                    this.project(t, e)._subtract(i)
                );
            },
            _latLngBoundsToNewLayerBounds: function (t, e, i) {
                return (
                    (i = this._getNewPixelOrigin(i, e)),
                    B([
                        this.project(t.getSouthWest(), e)._subtract(i),
                        this.project(t.getNorthWest(), e)._subtract(i),
                        this.project(t.getSouthEast(), e)._subtract(i),
                        this.project(t.getNorthEast(), e)._subtract(i),
                    ])
                );
            },
            _getCenterLayerPoint: function () {
                return this.containerPointToLayerPoint(
                    this.getSize()._divideBy(2)
                );
            },
            _getCenterOffset: function (t) {
                return this.latLngToLayerPoint(t).subtract(
                    this._getCenterLayerPoint()
                );
            },
            _limitCenter: function (t, e, i) {
                var n, o;
                return !i ||
                    ((n = this.project(t, e)),
                    (o = this.getSize().divideBy(2)),
                    (o = new Z(n.subtract(o), n.add(o))),
                    (o = this._getBoundsOffset(o, i, e)).round().equals([0, 0]))
                    ? t
                    : this.unproject(n.add(o), e);
            },
            _limitOffset: function (t, e) {
                var i;
                return e
                    ? ((i = new Z(
                          (i = this.getPixelBounds()).min.add(t),
                          i.max.add(t)
                      )),
                      t.add(this._getBoundsOffset(i, e)))
                    : t;
            },
            _getBoundsOffset: function (t, e, i) {
                return (
                    (i = (e = B(
                        this.project(e.getNorthEast(), i),
                        this.project(e.getSouthWest(), i)
                    )).min.subtract(t.min)),
                    (e = e.max.subtract(t.max)),
                    new k(this._rebound(i.x, -e.x), this._rebound(i.y, -e.y))
                );
            },
            _rebound: function (t, e) {
                return 0 < t + e
                    ? Math.round(t - e) / 2
                    : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
            },
            _limitZoom: function (t) {
                var e = this.getMinZoom(),
                    i = this.getMaxZoom(),
                    n = Mt.any3d ? this.options.zoomSnap : 1;
                return (
                    n && (t = Math.round(t / n) * n),
                    Math.max(e, Math.min(i, t))
                );
            },
            _onPanTransitionStep: function () {
                this.fire("move");
            },
            _onPanTransitionEnd: function () {
                se(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
            },
            _tryAnimatedPan: function (t, e) {
                return (
                    (t = this._getCenterOffset(t)._trunc()),
                    !(
                        (!0 !== (e && e.animate) &&
                            !this.getSize().contains(t)) ||
                        (this.panBy(t, e), 0)
                    )
                );
            },
            _createAnimProxy: function () {
                var t = (this._proxy = Xt(
                    "div",
                    "leaflet-proxy leaflet-zoom-animated"
                ));
                this._panes.mapPane.appendChild(t),
                    this.on(
                        "zoomanim",
                        function (t) {
                            var e = Vt,
                                i = this._proxy.style[e];
                            ue(
                                this._proxy,
                                this.project(t.center, t.zoom),
                                this.getZoomScale(t.zoom, 1)
                            ),
                                i === this._proxy.style[e] &&
                                    this._animatingZoom &&
                                    this._onZoomTransitionEnd();
                        },
                        this
                    ),
                    this.on("load moveend", this._animMoveEnd, this),
                    this._on("unload", this._destroyAnimProxy, this);
            },
            _destroyAnimProxy: function () {
                $t(this._proxy),
                    this.off("load moveend", this._animMoveEnd, this),
                    delete this._proxy;
            },
            _animMoveEnd: function () {
                var t = this.getCenter(),
                    e = this.getZoom();
                ue(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
            },
            _catchTransitionEnd: function (t) {
                this._animatingZoom &&
                    0 <= t.propertyName.indexOf("transform") &&
                    this._onZoomTransitionEnd();
            },
            _nothingToAnimate: function () {
                return !this._container.getElementsByClassName(
                    "leaflet-zoom-animated"
                ).length;
            },
            _tryAnimatedZoom: function (t, e, i) {
                if (!this._animatingZoom) {
                    if (
                        ((i = i || {}),
                        !this._zoomAnimated ||
                            !1 === i.animate ||
                            this._nothingToAnimate() ||
                            Math.abs(e - this._zoom) >
                                this.options.zoomAnimationThreshold)
                    )
                        return !1;
                    var n = this.getZoomScale(e);
                    n = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                    if (!0 !== i.animate && !this.getSize().contains(n))
                        return !1;
                    S(function () {
                        this._moveStart(!0, !1)._animateZoom(t, e, !0);
                    }, this);
                }
                return !0;
            },
            _animateZoom: function (t, e, i, n) {
                this._mapPane &&
                    (i &&
                        ((this._animatingZoom = !0),
                        (this._animateToCenter = t),
                        (this._animateToZoom = e),
                        oe(this._mapPane, "leaflet-zoom-anim")),
                    this.fire("zoomanim", { center: t, zoom: e, noUpdate: n }),
                    this._tempFireZoomEvent ||
                        (this._tempFireZoomEvent =
                            this._zoom !== this._animateToZoom),
                    this._move(
                        this._animateToCenter,
                        this._animateToZoom,
                        void 0,
                        !0
                    ),
                    setTimeout(o(this._onZoomTransitionEnd, this), 250));
            },
            _onZoomTransitionEnd: function () {
                this._animatingZoom &&
                    (this._mapPane && se(this._mapPane, "leaflet-zoom-anim"),
                    (this._animatingZoom = !1),
                    this._move(
                        this._animateToCenter,
                        this._animateToZoom,
                        void 0,
                        !0
                    ),
                    this._tempFireZoomEvent && this.fire("zoom"),
                    delete this._tempFireZoomEvent,
                    this.fire("move"),
                    this._moveEnd(!0));
            },
        });
    function De(t) {
        return new Ne(t);
    }
    var Fe,
        Ne = A.extend({
            options: { position: "topright" },
            initialize: function (t) {
                p(this, t);
            },
            getPosition: function () {
                return this.options.position;
            },
            setPosition: function (t) {
                var e = this._map;
                return (
                    e && e.removeControl(this),
                    (this.options.position = t),
                    e && e.addControl(this),
                    this
                );
            },
            getContainer: function () {
                return this._container;
            },
            addTo: function (t) {
                this.remove(), (this._map = t);
                var e = (this._container = this.onAdd(t)),
                    i = this.getPosition();
                t = t._controlCorners[i];
                return (
                    oe(e, "leaflet-control"),
                    -1 !== i.indexOf("bottom")
                        ? t.insertBefore(e, t.firstChild)
                        : t.appendChild(e),
                    this._map.on("unload", this.remove, this),
                    this
                );
            },
            remove: function () {
                return (
                    this._map &&
                        ($t(this._container),
                        this.onRemove && this.onRemove(this._map),
                        this._map.off("unload", this.remove, this),
                        (this._map = null)),
                    this
                );
            },
            _refocusOnMap: function (t) {
                this._map &&
                    t &&
                    0 < t.screenX &&
                    0 < t.screenY &&
                    this._map.getContainer().focus();
            },
        }),
        Ue =
            (Re.include({
                addControl: function (t) {
                    return t.addTo(this), this;
                },
                removeControl: function (t) {
                    return t.remove(), this;
                },
                _initControlPos: function () {
                    var t = (this._controlCorners = {}),
                        e = "leaflet-",
                        i = (this._controlContainer = Xt(
                            "div",
                            e + "control-container",
                            this._container
                        ));
                    function n(n, o) {
                        t[n + o] = Xt("div", e + n + " " + e + o, i);
                    }
                    n("top", "left"),
                        n("top", "right"),
                        n("bottom", "left"),
                        n("bottom", "right");
                },
                _clearControlPos: function () {
                    for (var t in this._controlCorners)
                        $t(this._controlCorners[t]);
                    $t(this._controlContainer),
                        delete this._controlCorners,
                        delete this._controlContainer;
                },
            }),
            Ne.extend({
                options: {
                    collapsed: !0,
                    position: "topright",
                    autoZIndex: !0,
                    hideSingleBase: !1,
                    sortLayers: !1,
                    sortFunction: function (t, e, i, n) {
                        return i < n ? -1 : n < i ? 1 : 0;
                    },
                },
                initialize: function (t, e, i) {
                    for (var n in (p(this, i),
                    (this._layerControlInputs = []),
                    (this._layers = []),
                    (this._lastZIndex = 0),
                    (this._handlingClick = !1),
                    t))
                        this._addLayer(t[n], n);
                    for (n in e) this._addLayer(e[n], n, !0);
                },
                onAdd: function (t) {
                    this._initLayout(),
                        this._update(),
                        (this._map = t).on(
                            "zoomend",
                            this._checkDisabledLayers,
                            this
                        );
                    for (var e = 0; e < this._layers.length; e++)
                        this._layers[e].layer.on(
                            "add remove",
                            this._onLayerChange,
                            this
                        );
                    return this._container;
                },
                addTo: function (t) {
                    return (
                        Ne.prototype.addTo.call(this, t),
                        this._expandIfNotCollapsed()
                    );
                },
                onRemove: function () {
                    this._map.off("zoomend", this._checkDisabledLayers, this);
                    for (var t = 0; t < this._layers.length; t++)
                        this._layers[t].layer.off(
                            "add remove",
                            this._onLayerChange,
                            this
                        );
                },
                addBaseLayer: function (t, e) {
                    return (
                        this._addLayer(t, e), this._map ? this._update() : this
                    );
                },
                addOverlay: function (t, e) {
                    return (
                        this._addLayer(t, e, !0),
                        this._map ? this._update() : this
                    );
                },
                removeLayer: function (t) {
                    return (
                        t.off("add remove", this._onLayerChange, this),
                        (t = this._getLayer(r(t))) &&
                            this._layers.splice(this._layers.indexOf(t), 1),
                        this._map ? this._update() : this
                    );
                },
                expand: function () {
                    oe(this._container, "leaflet-control-layers-expanded"),
                        (this._section.style.height = null);
                    var t =
                        this._map.getSize().y -
                        (this._container.offsetTop + 50);
                    return (
                        t < this._section.clientHeight
                            ? (oe(
                                  this._section,
                                  "leaflet-control-layers-scrollbar"
                              ),
                              (this._section.style.height = t + "px"))
                            : se(
                                  this._section,
                                  "leaflet-control-layers-scrollbar"
                              ),
                        this._checkDisabledLayers(),
                        this
                    );
                },
                collapse: function () {
                    return (
                        se(this._container, "leaflet-control-layers-expanded"),
                        this
                    );
                },
                _initLayout: function () {
                    var t = "leaflet-control-layers",
                        e = (this._container = Xt("div", t)),
                        i = this.options.collapsed,
                        n =
                            (e.setAttribute("aria-haspopup", !0),
                            Me(e),
                            Ce(e),
                            (this._section = Xt("section", t + "-list"))),
                        o =
                            (i &&
                                (this._map.on("click", this.collapse, this),
                                ye(
                                    e,
                                    {
                                        mouseenter: function () {
                                            ye(n, "click", Ae),
                                                this.expand(),
                                                setTimeout(function () {
                                                    be(n, "click", Ae);
                                                });
                                        },
                                        mouseleave: this.collapse,
                                    },
                                    this
                                )),
                            (this._layersLink = Xt("a", t + "-toggle", e)));
                    (o.href = "#"),
                        (o.title = "Layers"),
                        o.setAttribute("role", "button"),
                        ye(o, "click", Ae),
                        ye(o, "focus", this.expand, this),
                        i || this.expand(),
                        (this._baseLayersList = Xt("div", t + "-base", n)),
                        (this._separator = Xt("div", t + "-separator", n)),
                        (this._overlaysList = Xt("div", t + "-overlays", n)),
                        e.appendChild(n);
                },
                _getLayer: function (t) {
                    for (var e = 0; e < this._layers.length; e++)
                        if (this._layers[e] && r(this._layers[e].layer) === t)
                            return this._layers[e];
                },
                _addLayer: function (t, e, i) {
                    this._map && t.on("add remove", this._onLayerChange, this),
                        this._layers.push({ layer: t, name: e, overlay: i }),
                        this.options.sortLayers &&
                            this._layers.sort(
                                o(function (t, e) {
                                    return this.options.sortFunction(
                                        t.layer,
                                        e.layer,
                                        t.name,
                                        e.name
                                    );
                                }, this)
                            ),
                        this.options.autoZIndex &&
                            t.setZIndex &&
                            (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
                        this._expandIfNotCollapsed();
                },
                _update: function () {
                    if (this._container) {
                        te(this._baseLayersList),
                            te(this._overlaysList),
                            (this._layerControlInputs = []);
                        for (
                            var t, e, i, n = 0, o = 0;
                            o < this._layers.length;
                            o++
                        )
                            (i = this._layers[o]),
                                this._addItem(i),
                                (e = e || i.overlay),
                                (t = t || !i.overlay),
                                (n += i.overlay ? 0 : 1);
                        this.options.hideSingleBase &&
                            (this._baseLayersList.style.display = (t =
                                t && 1 < n)
                                ? ""
                                : "none"),
                            (this._separator.style.display =
                                e && t ? "" : "none");
                    }
                    return this;
                },
                _onLayerChange: function (t) {
                    this._handlingClick || this._update();
                    var e = this._getLayer(r(t.target));
                    (t = e.overlay
                        ? "add" === t.type
                            ? "overlayadd"
                            : "overlayremove"
                        : "add" === t.type
                        ? "baselayerchange"
                        : null) && this._map.fire(t, e);
                },
                _createRadioElement: function (t, e) {
                    return (
                        (t =
                            '<input type="radio" class="leaflet-control-layers-selector" name="' +
                            t +
                            '"' +
                            (e ? ' checked="checked"' : "") +
                            "/>"),
                        ((e = document.createElement("div")).innerHTML = t),
                        e.firstChild
                    );
                },
                _addItem: function (t) {
                    var e,
                        i = document.createElement("label"),
                        n = this._map.hasLayer(t.layer),
                        o =
                            (((n =
                                (t.overlay
                                    ? (((e =
                                          document.createElement(
                                              "input"
                                          )).type = "checkbox"),
                                      (e.className =
                                          "leaflet-control-layers-selector"),
                                      (e.defaultChecked = n))
                                    : (e = this._createRadioElement(
                                          "leaflet-base-layers_" + r(this),
                                          n
                                      )),
                                this._layerControlInputs.push(e),
                                (e.layerId = r(t.layer)),
                                ye(e, "click", this._onInputClick, this),
                                document.createElement("span"))).innerHTML =
                                " " + t.name),
                            document.createElement("span"));
                    return (
                        i.appendChild(o),
                        o.appendChild(e),
                        o.appendChild(n),
                        (t.overlay
                            ? this._overlaysList
                            : this._baseLayersList
                        ).appendChild(i),
                        this._checkDisabledLayers(),
                        i
                    );
                },
                _onInputClick: function () {
                    var t,
                        e,
                        i = this._layerControlInputs,
                        n = [],
                        o = [];
                    this._handlingClick = !0;
                    for (var s = i.length - 1; 0 <= s; s--)
                        (t = i[s]),
                            (e = this._getLayer(t.layerId).layer),
                            t.checked ? n.push(e) : t.checked || o.push(e);
                    for (s = 0; s < o.length; s++)
                        this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                    for (s = 0; s < n.length; s++)
                        this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                    (this._handlingClick = !1), this._refocusOnMap();
                },
                _checkDisabledLayers: function () {
                    for (
                        var t,
                            e,
                            i = this._layerControlInputs,
                            n = this._map.getZoom(),
                            o = i.length - 1;
                        0 <= o;
                        o--
                    )
                        (t = i[o]),
                            (e = this._getLayer(t.layerId).layer),
                            (t.disabled =
                                (void 0 !== e.options.minZoom &&
                                    n < e.options.minZoom) ||
                                (void 0 !== e.options.maxZoom &&
                                    n > e.options.maxZoom));
                },
                _expandIfNotCollapsed: function () {
                    return (
                        this._map && !this.options.collapsed && this.expand(),
                        this
                    );
                },
            })),
        je = Ne.extend({
            options: {
                position: "topleft",
                zoomInText: '<span aria-hidden="true">+</span>',
                zoomInTitle: "Zoom in",
                zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
                zoomOutTitle: "Zoom out",
            },
            onAdd: function (t) {
                var e = "leaflet-control-zoom",
                    i = Xt("div", e + " leaflet-bar"),
                    n = this.options;
                return (
                    (this._zoomInButton = this._createButton(
                        n.zoomInText,
                        n.zoomInTitle,
                        e + "-in",
                        i,
                        this._zoomIn
                    )),
                    (this._zoomOutButton = this._createButton(
                        n.zoomOutText,
                        n.zoomOutTitle,
                        e + "-out",
                        i,
                        this._zoomOut
                    )),
                    this._updateDisabled(),
                    t.on(
                        "zoomend zoomlevelschange",
                        this._updateDisabled,
                        this
                    ),
                    i
                );
            },
            onRemove: function (t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this);
            },
            disable: function () {
                return (this._disabled = !0), this._updateDisabled(), this;
            },
            enable: function () {
                return (this._disabled = !1), this._updateDisabled(), this;
            },
            _zoomIn: function (t) {
                !this._disabled &&
                    this._map._zoom < this._map.getMaxZoom() &&
                    this._map.zoomIn(
                        this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)
                    );
            },
            _zoomOut: function (t) {
                !this._disabled &&
                    this._map._zoom > this._map.getMinZoom() &&
                    this._map.zoomOut(
                        this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)
                    );
            },
            _createButton: function (t, e, i, n, o) {
                return (
                    ((i = Xt("a", i, n)).innerHTML = t),
                    (i.href = "#"),
                    (i.title = e),
                    i.setAttribute("role", "button"),
                    i.setAttribute("aria-label", e),
                    Me(i),
                    ye(i, "click", ze),
                    ye(i, "click", o, this),
                    ye(i, "click", this._refocusOnMap, this),
                    i
                );
            },
            _updateDisabled: function () {
                var t = this._map,
                    e = "leaflet-disabled";
                se(this._zoomInButton, e),
                    se(this._zoomOutButton, e),
                    this._zoomInButton.setAttribute("aria-disabled", "false"),
                    this._zoomOutButton.setAttribute("aria-disabled", "false"),
                    (!this._disabled && t._zoom !== t.getMinZoom()) ||
                        (oe(this._zoomOutButton, e),
                        this._zoomOutButton.setAttribute(
                            "aria-disabled",
                            "true"
                        )),
                    (!this._disabled && t._zoom !== t.getMaxZoom()) ||
                        (oe(this._zoomInButton, e),
                        this._zoomInButton.setAttribute(
                            "aria-disabled",
                            "true"
                        ));
            },
        }),
        Ge =
            (Re.mergeOptions({ zoomControl: !0 }),
            Re.addInitHook(function () {
                this.options.zoomControl &&
                    ((this.zoomControl = new je()),
                    this.addControl(this.zoomControl));
            }),
            Ne.extend({
                options: {
                    position: "bottomleft",
                    maxWidth: 100,
                    metric: !0,
                    imperial: !0,
                },
                onAdd: function (t) {
                    var e = "leaflet-control-scale",
                        i = Xt("div", e),
                        n = this.options;
                    return (
                        this._addScales(n, e + "-line", i),
                        t.on(
                            n.updateWhenIdle ? "moveend" : "move",
                            this._update,
                            this
                        ),
                        t.whenReady(this._update, this),
                        i
                    );
                },
                onRemove: function (t) {
                    t.off(
                        this.options.updateWhenIdle ? "moveend" : "move",
                        this._update,
                        this
                    );
                },
                _addScales: function (t, e, i) {
                    t.metric && (this._mScale = Xt("div", e, i)),
                        t.imperial && (this._iScale = Xt("div", e, i));
                },
                _update: function () {
                    var t = (e = this._map).getSize().y / 2,
                        e = e.distance(
                            e.containerPointToLatLng([0, t]),
                            e.containerPointToLatLng([this.options.maxWidth, t])
                        );
                    this._updateScales(e);
                },
                _updateScales: function (t) {
                    this.options.metric && t && this._updateMetric(t),
                        this.options.imperial && t && this._updateImperial(t);
                },
                _updateMetric: function (t) {
                    var e = this._getRoundNum(t);
                    this._updateScale(
                        this._mScale,
                        e < 1e3 ? e + " m" : e / 1e3 + " km",
                        e / t
                    );
                },
                _updateImperial: function (t) {
                    var e, i;
                    5280 < (t = 3.2808399 * t)
                        ? ((i = this._getRoundNum((e = t / 5280))),
                          this._updateScale(this._iScale, i + " mi", i / e))
                        : ((i = this._getRoundNum(t)),
                          this._updateScale(this._iScale, i + " ft", i / t));
                },
                _updateScale: function (t, e, i) {
                    (t.style.width =
                        Math.round(this.options.maxWidth * i) + "px"),
                        (t.innerHTML = e);
                },
                _getRoundNum: function (t) {
                    var e = Math.pow(10, (Math.floor(t) + "").length - 1);
                    return (
                        e *
                        (10 <= (t = t / e)
                            ? 10
                            : 5 <= t
                            ? 5
                            : 3 <= t
                            ? 3
                            : 2 <= t
                            ? 2
                            : 1)
                    );
                },
            })),
        qe = Ne.extend({
            options: {
                position: "bottomright",
                prefix:
                    '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
                    (Mt.inlineSvg
                        ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> '
                        : "") +
                    "Leaflet</a>",
            },
            initialize: function (t) {
                p(this, t), (this._attributions = {});
            },
            onAdd: function (t) {
                for (var e in (((t.attributionControl = this)._container = Xt(
                    "div",
                    "leaflet-control-attribution"
                )),
                Me(this._container),
                t._layers))
                    t._layers[e].getAttribution &&
                        this.addAttribution(t._layers[e].getAttribution());
                return (
                    this._update(),
                    t.on("layeradd", this._addAttribution, this),
                    this._container
                );
            },
            onRemove: function (t) {
                t.off("layeradd", this._addAttribution, this);
            },
            _addAttribution: function (t) {
                t.layer.getAttribution &&
                    (this.addAttribution(t.layer.getAttribution()),
                    t.layer.once(
                        "remove",
                        function () {
                            this.removeAttribution(t.layer.getAttribution());
                        },
                        this
                    ));
            },
            setPrefix: function (t) {
                return (this.options.prefix = t), this._update(), this;
            },
            addAttribution: function (t) {
                return (
                    t &&
                        (this._attributions[t] || (this._attributions[t] = 0),
                        this._attributions[t]++,
                        this._update()),
                    this
                );
            },
            removeAttribution: function (t) {
                return (
                    t &&
                        this._attributions[t] &&
                        (this._attributions[t]--, this._update()),
                    this
                );
            },
            _update: function () {
                if (this._map) {
                    var t,
                        e = [];
                    for (t in this._attributions)
                        this._attributions[t] && e.push(t);
                    var i = [];
                    this.options.prefix && i.push(this.options.prefix),
                        e.length && i.push(e.join(", ")),
                        (this._container.innerHTML = i.join(
                            ' <span aria-hidden="true">|</span> '
                        ));
                }
            },
        }),
        We =
            (($ =
                (Re.mergeOptions({ attributionControl: !0 }),
                Re.addInitHook(function () {
                    this.options.attributionControl && new qe().addTo(this);
                }),
                (Ne.Layers = Ue),
                (Ne.Zoom = je),
                (Ne.Scale = Ge),
                (Ne.Attribution = qe),
                (De.layers = function (t, e, i) {
                    return new Ue(t, e, i);
                }),
                (De.zoom = function (t) {
                    return new je(t);
                }),
                (De.scale = function (t) {
                    return new Ge(t);
                }),
                (De.attribution = function (t) {
                    return new qe(t);
                }),
                A.extend({
                    initialize: function (t) {
                        this._map = t;
                    },
                    enable: function () {
                        return (
                            this._enabled ||
                                ((this._enabled = !0), this.addHooks()),
                            this
                        );
                    },
                    disable: function () {
                        return (
                            this._enabled &&
                                ((this._enabled = !1), this.removeHooks()),
                            this
                        );
                    },
                    enabled: function () {
                        return !!this._enabled;
                    },
                }))),
            (tt =
                (($.addTo = function (t, e) {
                    return t.addHandler(e, this), this;
                }),
                { Events: z })),
            Mt.touch ? "touchstart mousedown" : "mousedown"),
        He = I.extend({
            options: { clickTolerance: 3 },
            initialize: function (t, e, i, n) {
                p(this, n),
                    (this._element = t),
                    (this._dragStartTarget = e || t),
                    (this._preventOutline = i);
            },
            enable: function () {
                this._enabled ||
                    (ye(this._dragStartTarget, We, this._onDown, this),
                    (this._enabled = !0));
            },
            disable: function () {
                this._enabled &&
                    (He._dragging === this && this.finishDrag(!0),
                    be(this._dragStartTarget, We, this._onDown, this),
                    (this._enabled = !1),
                    (this._moved = !1));
            },
            _onDown: function (t) {
                var e, i;
                this._enabled &&
                    ((this._moved = !1),
                    ne(this._element, "leaflet-zoom-anim") ||
                        (t.touches && 1 !== t.touches.length
                            ? He._dragging === this && this.finishDrag()
                            : He._dragging ||
                              t.shiftKey ||
                              (1 !== t.which && 1 !== t.button && !t.touches) ||
                              ((He._dragging = this)._preventOutline &&
                                  me(this._element),
                              pe(),
                              Gt(),
                              this._moving ||
                                  (this.fire("down"),
                                  (i = t.touches ? t.touches[0] : t),
                                  (e = ge(this._element)),
                                  (this._startPoint = new k(
                                      i.clientX,
                                      i.clientY
                                  )),
                                  (this._startPos = de(this._element)),
                                  (this._parentScale = ve(e)),
                                  (i = "mousedown" === t.type),
                                  ye(
                                      document,
                                      i ? "mousemove" : "touchmove",
                                      this._onMove,
                                      this
                                  ),
                                  ye(
                                      document,
                                      i ? "mouseup" : "touchend touchcancel",
                                      this._onUp,
                                      this
                                  )))));
            },
            _onMove: function (t) {
                var e;
                this._enabled &&
                    (t.touches && 1 < t.touches.length
                        ? (this._moved = !0)
                        : (!(e = new k(
                              (e =
                                  t.touches && 1 === t.touches.length
                                      ? t.touches[0]
                                      : t).clientX,
                              e.clientY
                          )._subtract(this._startPoint)).x &&
                              !e.y) ||
                          Math.abs(e.x) + Math.abs(e.y) <
                              this.options.clickTolerance ||
                          ((e.x /= this._parentScale.x),
                          (e.y /= this._parentScale.y),
                          Ae(t),
                          this._moved ||
                              (this.fire("dragstart"),
                              (this._moved = !0),
                              oe(document.body, "leaflet-dragging"),
                              (this._lastTarget = t.target || t.srcElement),
                              window.SVGElementInstance &&
                                  this._lastTarget instanceof
                                      window.SVGElementInstance &&
                                  (this._lastTarget =
                                      this._lastTarget.correspondingUseElement),
                              oe(this._lastTarget, "leaflet-drag-target")),
                          (this._newPos = this._startPos.add(e)),
                          (this._moving = !0),
                          (this._lastEvent = t),
                          this._updatePosition()));
            },
            _updatePosition: function () {
                var t = { originalEvent: this._lastEvent };
                this.fire("predrag", t),
                    ce(this._element, this._newPos),
                    this.fire("drag", t);
            },
            _onUp: function () {
                this._enabled && this.finishDrag();
            },
            finishDrag: function (t) {
                se(document.body, "leaflet-dragging"),
                    this._lastTarget &&
                        (se(this._lastTarget, "leaflet-drag-target"),
                        (this._lastTarget = null)),
                    be(document, "mousemove touchmove", this._onMove, this),
                    be(
                        document,
                        "mouseup touchend touchcancel",
                        this._onUp,
                        this
                    ),
                    _e(),
                    qt(),
                    this._moved &&
                        this._moving &&
                        this.fire("dragend", {
                            noInertia: t,
                            distance: this._newPos.distanceTo(this._startPos),
                        }),
                    (this._moving = !1),
                    (He._dragging = !1);
            },
        });
    function Ve(t, e) {
        if (e && t.length) {
            var i = (t = (function (t, e) {
                    for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
                        (function (t, e) {
                            var i = e.x - t.x;
                            return i * i + (e = e.y - t.y) * e;
                        })(t[n], t[o]) > e && (i.push(t[n]), (o = n));
                    return o < s - 1 && i.push(t[s - 1]), i;
                })(t, (e *= e))),
                n = i.length,
                o = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(
                    n
                );
            (o[0] = o[n - 1] = 1),
                (function t(e, i, n, o, s) {
                    var r,
                        a,
                        h,
                        l = 0;
                    for (a = o + 1; a <= s - 1; a++)
                        l < (h = Xe(e[a], e[o], e[s], !0)) &&
                            ((r = a), (l = h));
                    n < l && ((i[r] = 1), t(e, i, n, o, r), t(e, i, n, r, s));
                })(i, o, e, 0, n - 1);
            var s,
                r = [];
            for (s = 0; s < n; s++) o[s] && r.push(i[s]);
            return r;
        }
        return t.slice();
    }
    function Ke(t, e, i) {
        return Math.sqrt(Xe(t, e, i, !0));
    }
    function Je(t, e, i, n, o) {
        var s,
            r,
            a,
            h = n ? Fe : Qe(t, i),
            l = Qe(e, i);
        for (Fe = l; ; ) {
            if (!(h | l)) return [t, e];
            if (h & l) return !1;
            (a = Qe((r = Ye(t, e, (s = h || l), i, o)), i)),
                s === h ? ((t = r), (h = a)) : ((e = r), (l = a));
        }
    }
    function Ye(t, e, i, n, o) {
        var s,
            r,
            a = e.x - t.x,
            h = ((e = e.y - t.y), n.min);
        n = n.max;
        return (
            8 & i
                ? ((s = t.x + (a * (n.y - t.y)) / e), (r = n.y))
                : 4 & i
                ? ((s = t.x + (a * (h.y - t.y)) / e), (r = h.y))
                : 2 & i
                ? ((s = n.x), (r = t.y + (e * (n.x - t.x)) / a))
                : 1 & i && ((s = h.x), (r = t.y + (e * (h.x - t.x)) / a)),
            new k(s, r, o)
        );
    }
    function Qe(t, e) {
        var i = 0;
        return (
            t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2),
            t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8),
            i
        );
    }
    function Xe(t, e, i, n) {
        var o = e.x,
            s = ((e = e.y), i.x - o),
            r = i.y - e,
            a = s * s + r * r;
        return (
            0 < a &&
                (1 < (a = ((t.x - o) * s + (t.y - e) * r) / a)
                    ? ((o = i.x), (e = i.y))
                    : 0 < a && ((o += s * a), (e += r * a))),
            (s = t.x - o),
            (r = t.y - e),
            n ? s * s + r * r : new k(o, e)
        );
    }
    function $e(t) {
        return !g(t[0]) || ("object" != typeof t[0][0] && void 0 !== t[0][0]);
    }
    function ti(t) {
        return (
            console.warn(
                "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
            ),
            $e(t)
        );
    }
    function ei(t, e) {
        var i, n, o, s, r;
        if (!t || 0 === t.length) throw new Error("latlngs not passed");
        $e(t) ||
            (console.warn(
                "latlngs are not flat! Only the first ring will be used"
            ),
            (t = t[0]));
        var a,
            h = [];
        for (a in t) h.push(e.project(N(t[a])));
        for (var l = h.length, u = 0, c = 0; u < l - 1; u++)
            c += h[u].distanceTo(h[u + 1]) / 2;
        if (0 === c) r = h[0];
        else
            for (i = u = 0; u < l - 1; u++)
                if (
                    ((n = h[u]), (o = h[u + 1]), c < (i += s = n.distanceTo(o)))
                ) {
                    r = [
                        o.x - (s = (i - c) / s) * (o.x - n.x),
                        o.y - s * (o.y - n.y),
                    ];
                    break;
                }
        return e.unproject(O(r));
    }
    function ii(t, e, i) {
        for (
            var n, o, s, r, a, h, l, u = [1, 4, 2, 8], c = 0, d = t.length;
            c < d;
            c++
        )
            t[c]._code = Qe(t[c], e);
        for (s = 0; s < 4; s++) {
            for (
                h = u[s], n = [], c = 0, o = (d = t.length) - 1;
                c < d;
                o = c++
            )
                (r = t[c]),
                    (a = t[o]),
                    r._code & h
                        ? a._code & h ||
                          (((l = Ye(a, r, h, e, i))._code = Qe(l, e)),
                          n.push(l))
                        : (a._code & h &&
                              (((l = Ye(a, r, h, e, i))._code = Qe(l, e)),
                              n.push(l)),
                          n.push(r));
            t = n;
        }
        return t;
    }
    function ni(t, e) {
        var i, n, o, s, r, a;
        if (!t || 0 === t.length) throw new Error("latlngs not passed");
        $e(t) ||
            (console.warn(
                "latlngs are not flat! Only the first ring will be used"
            ),
            (t = t[0]));
        var h,
            l = [];
        for (h in t) l.push(e.project(N(t[h])));
        for (
            var u = l.length, c = (s = r = 0), d = 0, p = u - 1;
            d < u;
            p = d++
        )
            (i = l[d]),
                (n = l[p]),
                (o = i.y * n.x - n.y * i.x),
                (s += (i.x + n.x) * o),
                (r += (i.y + n.y) * o),
                (c += 3 * o);
        return (a = 0 === c ? l[0] : [s / c, r / c]), e.unproject(O(a));
    }
    et = {
        __proto__: null,
        simplify: Ve,
        pointToSegmentDistance: Ke,
        closestPointOnSegment: function (t, e, i) {
            return Xe(t, e, i);
        },
        clipSegment: Je,
        _getEdgeIntersection: Ye,
        _getBitCode: Qe,
        _sqClosestPointOnSegment: Xe,
        isFlat: $e,
        _flat: ti,
        polylineCenter: ei,
    };
    (it = { __proto__: null, clipPolygon: ii, polygonCenter: ni }),
        (nt = {
            project: function (t) {
                return new k(t.lng, t.lat);
            },
            unproject: function (t) {
                return new F(t.y, t.x);
            },
            bounds: new Z([-180, -90], [180, 90]),
        }),
        (ot = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new Z(
                [-20037508.34279, -15496570.73972],
                [20037508.34279, 18764656.23138]
            ),
            project: function (t) {
                var e = Math.PI / 180,
                    i = this.R,
                    n = t.lat * e,
                    o = this.R_MINOR / i,
                    s = (o = Math.sqrt(1 - o * o)) * Math.sin(n);
                (s =
                    Math.tan(Math.PI / 4 - n / 2) /
                    Math.pow((1 - s) / (1 + s), o / 2)),
                    (n = -i * Math.log(Math.max(s, 1e-10)));
                return new k(t.lng * e * i, n);
            },
            unproject: function (t) {
                for (
                    var e,
                        i = 180 / Math.PI,
                        n = this.R,
                        o = this.R_MINOR / n,
                        s = Math.sqrt(1 - o * o),
                        r = Math.exp(-t.y / n),
                        a = Math.PI / 2 - 2 * Math.atan(r),
                        h = 0,
                        l = 0.1;
                    h < 15 && 1e-7 < Math.abs(l);
                    h++
                )
                    (e = s * Math.sin(a)),
                        (e = Math.pow((1 - e) / (1 + e), s / 2)),
                        (a += l = Math.PI / 2 - 2 * Math.atan(r * e) - a);
                return new F(a * i, (t.x * i) / n);
            },
        }),
        (st = {
            __proto__: null,
            LonLat: nt,
            Mercator: ot,
            SphericalMercator: G,
        }),
        (at = e({}, j, {
            code: "EPSG:3395",
            projection: ot,
            transformation: W((rt = 0.5 / (Math.PI * ot.R)), 0.5, -rt, 0.5),
        }));
    var oi = e({}, j, {
            code: "EPSG:4326",
            projection: nt,
            transformation: W(1 / 180, 1, -1 / 180, 0.5),
        }),
        si =
            ((ht = e({}, U, {
                projection: nt,
                transformation: W(1, 0, -1, 0),
                scale: function (t) {
                    return Math.pow(2, t);
                },
                zoom: function (t) {
                    return Math.log(t) / Math.LN2;
                },
                distance: function (t, e) {
                    var i = e.lng - t.lng;
                    e = e.lat - t.lat;
                    return Math.sqrt(i * i + e * e);
                },
                infinite: !0,
            })),
            (lt =
                ((U.Earth = j),
                (U.EPSG3395 = at),
                (U.EPSG3857 = H),
                (U.EPSG900913 = V),
                (U.EPSG4326 = oi),
                (U.Simple = ht),
                I.extend({
                    options: {
                        pane: "overlayPane",
                        attribution: null,
                        bubblingMouseEvents: !0,
                    },
                    addTo: function (t) {
                        return t.addLayer(this), this;
                    },
                    remove: function () {
                        return this.removeFrom(this._map || this._mapToAdd);
                    },
                    removeFrom: function (t) {
                        return t && t.removeLayer(this), this;
                    },
                    getPane: function (t) {
                        return this._map.getPane(
                            t ? this.options[t] || t : this.options.pane
                        );
                    },
                    addInteractiveTarget: function (t) {
                        return (this._map._targets[r(t)] = this);
                    },
                    removeInteractiveTarget: function (t) {
                        return delete this._map._targets[r(t)], this;
                    },
                    getAttribution: function () {
                        return this.options.attribution;
                    },
                    _layerAdd: function (t) {
                        var e,
                            i = t.target;
                        i.hasLayer(this) &&
                            ((this._map = i),
                            (this._zoomAnimated = i._zoomAnimated),
                            this.getEvents &&
                                ((e = this.getEvents()),
                                i.on(e, this),
                                this.once(
                                    "remove",
                                    function () {
                                        i.off(e, this);
                                    },
                                    this
                                )),
                            this.onAdd(i),
                            this.fire("add"),
                            i.fire("layeradd", { layer: this }));
                    },
                }))),
            Re.include({
                addLayer: function (t) {
                    var e;
                    if (t._layerAdd)
                        return (
                            (e = r(t)),
                            this._layers[e] ||
                                (((this._layers[e] = t)._mapToAdd = this),
                                t.beforeAdd && t.beforeAdd(this),
                                this.whenReady(t._layerAdd, t)),
                            this
                        );
                    throw new Error("The provided object is not a Layer.");
                },
                removeLayer: function (t) {
                    var e = r(t);
                    return (
                        this._layers[e] &&
                            (this._loaded && t.onRemove(this),
                            delete this._layers[e],
                            this._loaded &&
                                (this.fire("layerremove", { layer: t }),
                                t.fire("remove")),
                            (t._map = t._mapToAdd = null)),
                        this
                    );
                },
                hasLayer: function (t) {
                    return r(t) in this._layers;
                },
                eachLayer: function (t, e) {
                    for (var i in this._layers) t.call(e, this._layers[i]);
                    return this;
                },
                _addLayers: function (t) {
                    for (
                        var e = 0, i = (t = t ? (g(t) ? t : [t]) : []).length;
                        e < i;
                        e++
                    )
                        this.addLayer(t[e]);
                },
                _addZoomLimit: function (t) {
                    (isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
                        ((this._zoomBoundLayers[r(t)] = t),
                        this._updateZoomLevels());
                },
                _removeZoomLimit: function (t) {
                    (t = r(t)),
                        this._zoomBoundLayers[t] &&
                            (delete this._zoomBoundLayers[t],
                            this._updateZoomLevels());
                },
                _updateZoomLevels: function () {
                    var t,
                        e = 1 / 0,
                        i = -1 / 0,
                        n = this._getZoomSpan();
                    for (t in this._zoomBoundLayers) {
                        var o = this._zoomBoundLayers[t].options;
                        (e = void 0 === o.minZoom ? e : Math.min(e, o.minZoom)),
                            (i =
                                void 0 === o.maxZoom
                                    ? i
                                    : Math.max(i, o.maxZoom));
                    }
                    (this._layersMaxZoom = i === -1 / 0 ? void 0 : i),
                        (this._layersMinZoom = e === 1 / 0 ? void 0 : e),
                        n !== this._getZoomSpan() &&
                            this.fire("zoomlevelschange"),
                        void 0 === this.options.maxZoom &&
                            this._layersMaxZoom &&
                            this.getZoom() > this._layersMaxZoom &&
                            this.setZoom(this._layersMaxZoom),
                        void 0 === this.options.minZoom &&
                            this._layersMinZoom &&
                            this.getZoom() < this._layersMinZoom &&
                            this.setZoom(this._layersMinZoom);
                },
            }),
            lt.extend({
                initialize: function (t, e) {
                    var i, n;
                    if ((p(this, e), (this._layers = {}), t))
                        for (i = 0, n = t.length; i < n; i++)
                            this.addLayer(t[i]);
                },
                addLayer: function (t) {
                    var e = this.getLayerId(t);
                    return (
                        (this._layers[e] = t),
                        this._map && this._map.addLayer(t),
                        this
                    );
                },
                removeLayer: function (t) {
                    return (
                        (t = t in this._layers ? t : this.getLayerId(t)),
                        this._map &&
                            this._layers[t] &&
                            this._map.removeLayer(this._layers[t]),
                        delete this._layers[t],
                        this
                    );
                },
                hasLayer: function (t) {
                    return (
                        ("number" == typeof t ? t : this.getLayerId(t)) in
                        this._layers
                    );
                },
                clearLayers: function () {
                    return this.eachLayer(this.removeLayer, this);
                },
                invoke: function (t) {
                    var e,
                        i,
                        n = Array.prototype.slice.call(arguments, 1);
                    for (e in this._layers)
                        (i = this._layers[e])[t] && i[t].apply(i, n);
                    return this;
                },
                onAdd: function (t) {
                    this.eachLayer(t.addLayer, t);
                },
                onRemove: function (t) {
                    this.eachLayer(t.removeLayer, t);
                },
                eachLayer: function (t, e) {
                    for (var i in this._layers) t.call(e, this._layers[i]);
                    return this;
                },
                getLayer: function (t) {
                    return this._layers[t];
                },
                getLayers: function () {
                    var t = [];
                    return this.eachLayer(t.push, t), t;
                },
                setZIndex: function (t) {
                    return this.invoke("setZIndex", t);
                },
                getLayerId: r,
            })),
        ri = si.extend({
            addLayer: function (t) {
                return this.hasLayer(t)
                    ? this
                    : (t.addEventParent(this),
                      si.prototype.addLayer.call(this, t),
                      this.fire("layeradd", { layer: t }));
            },
            removeLayer: function (t) {
                return this.hasLayer(t)
                    ? ((t =
                          t in this._layers
                              ? this._layers[t]
                              : t).removeEventParent(this),
                      si.prototype.removeLayer.call(this, t),
                      this.fire("layerremove", { layer: t }))
                    : this;
            },
            setStyle: function (t) {
                return this.invoke("setStyle", t);
            },
            bringToFront: function () {
                return this.invoke("bringToFront");
            },
            bringToBack: function () {
                return this.invoke("bringToBack");
            },
            getBounds: function () {
                var t,
                    e = new R();
                for (t in this._layers) {
                    var i = this._layers[t];
                    e.extend(i.getBounds ? i.getBounds() : i.getLatLng());
                }
                return e;
            },
        }),
        ai = A.extend({
            options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0],
                crossOrigin: !1,
            },
            initialize: function (t) {
                p(this, t);
            },
            createIcon: function (t) {
                return this._createIcon("icon", t);
            },
            createShadow: function (t) {
                return this._createIcon("shadow", t);
            },
            _createIcon: function (t, e) {
                var i = this._getIconUrl(t);
                if (i)
                    return (
                        (i = this._createImg(
                            i,
                            e && "IMG" === e.tagName ? e : null
                        )),
                        this._setIconStyles(i, t),
                        (!this.options.crossOrigin &&
                            "" !== this.options.crossOrigin) ||
                            (i.crossOrigin =
                                !0 === this.options.crossOrigin
                                    ? ""
                                    : this.options.crossOrigin),
                        i
                    );
                if ("icon" === t)
                    throw new Error(
                        "iconUrl not set in Icon options (see the docs)."
                    );
                return null;
            },
            _setIconStyles: function (t, e) {
                var i = this.options,
                    n = O(
                        (n =
                            "number" == typeof (n = i[e + "Size"]) ? [n, n] : n)
                    ),
                    o = O(
                        ("shadow" === e && i.shadowAnchor) ||
                            i.iconAnchor ||
                            (n && n.divideBy(2, !0))
                    );
                (t.className =
                    "leaflet-marker-" + e + " " + (i.className || "")),
                    o &&
                        ((t.style.marginLeft = -o.x + "px"),
                        (t.style.marginTop = -o.y + "px")),
                    n &&
                        ((t.style.width = n.x + "px"),
                        (t.style.height = n.y + "px"));
            },
            _createImg: function (t, e) {
                return ((e = e || document.createElement("img")).src = t), e;
            },
            _getIconUrl: function (t) {
                return (
                    (Mt.retina && this.options[t + "RetinaUrl"]) ||
                    this.options[t + "Url"]
                );
            },
        }),
        hi = ai.extend({
            options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41],
            },
            _getIconUrl: function (t) {
                return (
                    "string" != typeof hi.imagePath &&
                        (hi.imagePath = this._detectIconPath()),
                    (this.options.imagePath || hi.imagePath) +
                        ai.prototype._getIconUrl.call(this, t)
                );
            },
            _stripUrl: function (t) {
                function e(t, e, i) {
                    return (e = e.exec(t)) && e[i];
                }
                return (
                    (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) &&
                    e(t, /^(.*)marker-icon\.png$/, 1)
                );
            },
            _detectIconPath: function () {
                var t = Xt("div", "leaflet-default-icon-path", document.body),
                    e = Qt(t, "background-image") || Qt(t, "backgroundImage");
                return (
                    document.body.removeChild(t),
                    (e = this._stripUrl(e))
                        ? e
                        : (t = document.querySelector(
                              'link[href$="leaflet.css"]'
                          ))
                        ? t.href.substring(
                              0,
                              t.href.length - "leaflet.css".length - 1
                          )
                        : ""
                );
            },
        }),
        li = $.extend({
            initialize: function (t) {
                this._marker = t;
            },
            addHooks: function () {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new He(t, t, !0)),
                    this._draggable
                        .on(
                            {
                                dragstart: this._onDragStart,
                                predrag: this._onPreDrag,
                                drag: this._onDrag,
                                dragend: this._onDragEnd,
                            },
                            this
                        )
                        .enable(),
                    oe(t, "leaflet-marker-draggable");
            },
            removeHooks: function () {
                this._draggable
                    .off(
                        {
                            dragstart: this._onDragStart,
                            predrag: this._onPreDrag,
                            drag: this._onDrag,
                            dragend: this._onDragEnd,
                        },
                        this
                    )
                    .disable(),
                    this._marker._icon &&
                        se(this._marker._icon, "leaflet-marker-draggable");
            },
            moved: function () {
                return this._draggable && this._draggable._moved;
            },
            _adjustPan: function (t) {
                var e = this._marker,
                    i = e._map,
                    n = this._marker.options.autoPanSpeed,
                    o = this._marker.options.autoPanPadding,
                    s = de(e._icon),
                    r = i.getPixelBounds(),
                    a = i.getPixelOrigin();
                (a = B(
                    r.min._subtract(a).add(o),
                    r.max._subtract(a).subtract(o)
                )).contains(s) ||
                    ((o = O(
                        (Math.max(a.max.x, s.x) - a.max.x) /
                            (r.max.x - a.max.x) -
                            (Math.min(a.min.x, s.x) - a.min.x) /
                                (r.min.x - a.min.x),
                        (Math.max(a.max.y, s.y) - a.max.y) /
                            (r.max.y - a.max.y) -
                            (Math.min(a.min.y, s.y) - a.min.y) /
                                (r.min.y - a.min.y)
                    ).multiplyBy(n)),
                    i.panBy(o, { animate: !1 }),
                    this._draggable._newPos._add(o),
                    this._draggable._startPos._add(o),
                    ce(e._icon, this._draggable._newPos),
                    this._onDrag(t),
                    (this._panRequest = S(this._adjustPan.bind(this, t))));
            },
            _onDragStart: function () {
                (this._oldLatLng = this._marker.getLatLng()),
                    this._marker.closePopup && this._marker.closePopup(),
                    this._marker.fire("movestart").fire("dragstart");
            },
            _onPreDrag: function (t) {
                this._marker.options.autoPan &&
                    (C(this._panRequest),
                    (this._panRequest = S(this._adjustPan.bind(this, t))));
            },
            _onDrag: function (t) {
                var e = this._marker,
                    i = e._shadow,
                    n = de(e._icon),
                    o = e._map.layerPointToLatLng(n);
                i && ce(i, n),
                    (e._latlng = o),
                    (t.latlng = o),
                    (t.oldLatLng = this._oldLatLng),
                    e.fire("move", t).fire("drag", t);
            },
            _onDragEnd: function (t) {
                C(this._panRequest),
                    delete this._oldLatLng,
                    this._marker.fire("moveend").fire("dragend", t);
            },
        }),
        ui = lt.extend({
            options: {
                icon: new hi(),
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "Marker",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                shadowPane: "shadowPane",
                bubblingMouseEvents: !1,
                autoPanOnFocus: !0,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10,
            },
            initialize: function (t, e) {
                p(this, e), (this._latlng = N(t));
            },
            onAdd: function (t) {
                (this._zoomAnimated =
                    this._zoomAnimated && t.options.markerZoomAnimation),
                    this._zoomAnimated &&
                        t.on("zoomanim", this._animateZoom, this),
                    this._initIcon(),
                    this.update();
            },
            onRemove: function (t) {
                this.dragging &&
                    this.dragging.enabled() &&
                    ((this.options.draggable = !0),
                    this.dragging.removeHooks()),
                    delete this.dragging,
                    this._zoomAnimated &&
                        t.off("zoomanim", this._animateZoom, this),
                    this._removeIcon(),
                    this._removeShadow();
            },
            getEvents: function () {
                return { zoom: this.update, viewreset: this.update };
            },
            getLatLng: function () {
                return this._latlng;
            },
            setLatLng: function (t) {
                var e = this._latlng;
                return (
                    (this._latlng = N(t)),
                    this.update(),
                    this.fire("move", { oldLatLng: e, latlng: this._latlng })
                );
            },
            setZIndexOffset: function (t) {
                return (this.options.zIndexOffset = t), this.update();
            },
            getIcon: function () {
                return this.options.icon;
            },
            setIcon: function (t) {
                return (
                    (this.options.icon = t),
                    this._map && (this._initIcon(), this.update()),
                    this._popup &&
                        this.bindPopup(this._popup, this._popup.options),
                    this
                );
            },
            getElement: function () {
                return this._icon;
            },
            update: function () {
                var t;
                return (
                    this._icon &&
                        this._map &&
                        ((t = this._map
                            .latLngToLayerPoint(this._latlng)
                            .round()),
                        this._setPos(t)),
                    this
                );
            },
            _initIcon: function () {
                var t,
                    e = this.options,
                    i =
                        "leaflet-zoom-" +
                        (this._zoomAnimated ? "animated" : "hide"),
                    n = !1,
                    o = !1;
                (t =
                    ((t = e.icon.createIcon(this._icon)) !== this._icon &&
                        (this._icon && this._removeIcon(),
                        (n = !0),
                        e.title && (t.title = e.title),
                        "IMG" === t.tagName && (t.alt = e.alt || "")),
                    oe(t, i),
                    e.keyboard &&
                        ((t.tabIndex = "0"), t.setAttribute("role", "button")),
                    (this._icon = t),
                    e.riseOnHover &&
                        this.on({
                            mouseover: this._bringToFront,
                            mouseout: this._resetZIndex,
                        }),
                    this.options.autoPanOnFocus &&
                        ye(t, "focus", this._panOnFocus, this),
                    e.icon.createShadow(this._shadow))) !== this._shadow &&
                    (this._removeShadow(), (o = !0)),
                    t && (oe(t, i), (t.alt = "")),
                    (this._shadow = t),
                    e.opacity < 1 && this._updateOpacity(),
                    n && this.getPane().appendChild(this._icon),
                    this._initInteraction(),
                    t &&
                        o &&
                        this.getPane(e.shadowPane).appendChild(this._shadow);
            },
            _removeIcon: function () {
                this.options.riseOnHover &&
                    this.off({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex,
                    }),
                    this.options.autoPanOnFocus &&
                        be(this._icon, "focus", this._panOnFocus, this),
                    $t(this._icon),
                    this.removeInteractiveTarget(this._icon),
                    (this._icon = null);
            },
            _removeShadow: function () {
                this._shadow && $t(this._shadow), (this._shadow = null);
            },
            _setPos: function (t) {
                this._icon && ce(this._icon, t),
                    this._shadow && ce(this._shadow, t),
                    (this._zIndex = t.y + this.options.zIndexOffset),
                    this._resetZIndex();
            },
            _updateZIndex: function (t) {
                this._icon && (this._icon.style.zIndex = this._zIndex + t);
            },
            _animateZoom: function (t) {
                (t = this._map
                    ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
                    .round()),
                    this._setPos(t);
            },
            _initInteraction: function () {
                var t;
                this.options.interactive &&
                    (oe(this._icon, "leaflet-interactive"),
                    this.addInteractiveTarget(this._icon),
                    li &&
                        ((t = this.options.draggable),
                        this.dragging &&
                            ((t = this.dragging.enabled()),
                            this.dragging.disable()),
                        (this.dragging = new li(this)),
                        t && this.dragging.enable()));
            },
            setOpacity: function (t) {
                return (
                    (this.options.opacity = t),
                    this._map && this._updateOpacity(),
                    this
                );
            },
            _updateOpacity: function () {
                var t = this.options.opacity;
                this._icon && he(this._icon, t),
                    this._shadow && he(this._shadow, t);
            },
            _bringToFront: function () {
                this._updateZIndex(this.options.riseOffset);
            },
            _resetZIndex: function () {
                this._updateZIndex(0);
            },
            _panOnFocus: function () {
                var t,
                    e,
                    i = this._map;
                i &&
                    ((t = (e = this.options.icon.options).iconSize
                        ? O(e.iconSize)
                        : O(0, 0)),
                    (e = e.iconAnchor ? O(e.iconAnchor) : O(0, 0)),
                    i.panInside(this._latlng, {
                        paddingTopLeft: e,
                        paddingBottomRight: t.subtract(e),
                    }));
            },
            _getPopupAnchor: function () {
                return this.options.icon.options.popupAnchor;
            },
            _getTooltipAnchor: function () {
                return this.options.icon.options.tooltipAnchor;
            },
        }),
        ci = lt.extend({
            options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: 0.2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0,
            },
            beforeAdd: function (t) {
                this._renderer = t.getRenderer(this);
            },
            onAdd: function () {
                this._renderer._initPath(this),
                    this._reset(),
                    this._renderer._addPath(this);
            },
            onRemove: function () {
                this._renderer._removePath(this);
            },
            redraw: function () {
                return this._map && this._renderer._updatePath(this), this;
            },
            setStyle: function (t) {
                return (
                    p(this, t),
                    this._renderer &&
                        (this._renderer._updateStyle(this),
                        this.options.stroke &&
                            t &&
                            Object.prototype.hasOwnProperty.call(t, "weight") &&
                            this._updateBounds()),
                    this
                );
            },
            bringToFront: function () {
                return (
                    this._renderer && this._renderer._bringToFront(this), this
                );
            },
            bringToBack: function () {
                return (
                    this._renderer && this._renderer._bringToBack(this), this
                );
            },
            getElement: function () {
                return this._path;
            },
            _reset: function () {
                this._project(), this._update();
            },
            _clickTolerance: function () {
                return (
                    (this.options.stroke ? this.options.weight / 2 : 0) +
                    (this._renderer.options.tolerance || 0)
                );
            },
        }),
        di = ci.extend({
            options: { fill: !0, radius: 10 },
            initialize: function (t, e) {
                p(this, e),
                    (this._latlng = N(t)),
                    (this._radius = this.options.radius);
            },
            setLatLng: function (t) {
                var e = this._latlng;
                return (
                    (this._latlng = N(t)),
                    this.redraw(),
                    this.fire("move", { oldLatLng: e, latlng: this._latlng })
                );
            },
            getLatLng: function () {
                return this._latlng;
            },
            setRadius: function (t) {
                return (this.options.radius = this._radius = t), this.redraw();
            },
            getRadius: function () {
                return this._radius;
            },
            setStyle: function (t) {
                var e = (t && t.radius) || this._radius;
                return (
                    ci.prototype.setStyle.call(this, t), this.setRadius(e), this
                );
            },
            _project: function () {
                (this._point = this._map.latLngToLayerPoint(this._latlng)),
                    this._updateBounds();
            },
            _updateBounds: function () {
                var t = this._radius,
                    e = this._radiusY || t,
                    i = this._clickTolerance();
                t = [t + i, e + i];
                this._pxBounds = new Z(
                    this._point.subtract(t),
                    this._point.add(t)
                );
            },
            _update: function () {
                this._map && this._updatePath();
            },
            _updatePath: function () {
                this._renderer._updateCircle(this);
            },
            _empty: function () {
                return (
                    this._radius &&
                    !this._renderer._bounds.intersects(this._pxBounds)
                );
            },
            _containsPoint: function (t) {
                return (
                    t.distanceTo(this._point) <=
                    this._radius + this._clickTolerance()
                );
            },
        }),
        pi = di.extend({
            initialize: function (t, i, n) {
                if (
                    (p(
                        this,
                        (i = "number" == typeof i ? e({}, n, { radius: i }) : i)
                    ),
                    (this._latlng = N(t)),
                    isNaN(this.options.radius))
                )
                    throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius;
            },
            setRadius: function (t) {
                return (this._mRadius = t), this.redraw();
            },
            getRadius: function () {
                return this._mRadius;
            },
            getBounds: function () {
                var t = [this._radius, this._radiusY || this._radius];
                return new R(
                    this._map.layerPointToLatLng(this._point.subtract(t)),
                    this._map.layerPointToLatLng(this._point.add(t))
                );
            },
            setStyle: ci.prototype.setStyle,
            _project: function () {
                var t,
                    e,
                    i,
                    n,
                    o,
                    s = this._latlng.lng,
                    r = this._latlng.lat,
                    a = this._map,
                    h = a.options.crs;
                h.distance === j.distance
                    ? ((n = Math.PI / 180),
                      (o = this._mRadius / j.R / n),
                      (t = a.project([r + o, s])),
                      (e = a.project([r - o, s])),
                      (e = t.add(e).divideBy(2)),
                      (i = a.unproject(e).lat),
                      (n =
                          Math.acos(
                              (Math.cos(o * n) -
                                  Math.sin(r * n) * Math.sin(i * n)) /
                                  (Math.cos(r * n) * Math.cos(i * n))
                          ) / n),
                      (!isNaN(n) && 0 !== n) ||
                          (n = o / Math.cos((Math.PI / 180) * r)),
                      (this._point = e.subtract(a.getPixelOrigin())),
                      (this._radius = isNaN(n)
                          ? 0
                          : e.x - a.project([i, s - n]).x),
                      (this._radiusY = e.y - t.y))
                    : ((o = h.unproject(
                          h.project(this._latlng).subtract([this._mRadius, 0])
                      )),
                      (this._point = a.latLngToLayerPoint(this._latlng)),
                      (this._radius =
                          this._point.x - a.latLngToLayerPoint(o).x)),
                    this._updateBounds();
            },
        }),
        _i = ci.extend({
            options: { smoothFactor: 1, noClip: !1 },
            initialize: function (t, e) {
                p(this, e), this._setLatLngs(t);
            },
            getLatLngs: function () {
                return this._latlngs;
            },
            setLatLngs: function (t) {
                return this._setLatLngs(t), this.redraw();
            },
            isEmpty: function () {
                return !this._latlngs.length;
            },
            closestLayerPoint: function (t) {
                for (
                    var e = 1 / 0,
                        i = null,
                        n = Xe,
                        o = 0,
                        s = this._parts.length;
                    o < s;
                    o++
                )
                    for (
                        var r = this._parts[o], a = 1, h = r.length;
                        a < h;
                        a++
                    ) {
                        var l,
                            u,
                            c = n(t, (l = r[a - 1]), (u = r[a]), !0);
                        c < e && ((e = c), (i = n(t, l, u)));
                    }
                return i && (i.distance = Math.sqrt(e)), i;
            },
            getCenter: function () {
                if (this._map)
                    return ei(this._defaultShape(), this._map.options.crs);
                throw new Error(
                    "Must add layer to map before using getCenter()"
                );
            },
            getBounds: function () {
                return this._bounds;
            },
            addLatLng: function (t, e) {
                return (
                    (e = e || this._defaultShape()),
                    (t = N(t)),
                    e.push(t),
                    this._bounds.extend(t),
                    this.redraw()
                );
            },
            _setLatLngs: function (t) {
                (this._bounds = new R()),
                    (this._latlngs = this._convertLatLngs(t));
            },
            _defaultShape: function () {
                return $e(this._latlngs) ? this._latlngs : this._latlngs[0];
            },
            _convertLatLngs: function (t) {
                for (var e = [], i = $e(t), n = 0, o = t.length; n < o; n++)
                    i
                        ? ((e[n] = N(t[n])), this._bounds.extend(e[n]))
                        : (e[n] = this._convertLatLngs(t[n]));
                return e;
            },
            _project: function () {
                var t = new Z();
                (this._rings = []),
                    this._projectLatlngs(this._latlngs, this._rings, t),
                    this._bounds.isValid() &&
                        t.isValid() &&
                        ((this._rawPxBounds = t), this._updateBounds());
            },
            _updateBounds: function () {
                var t = new k((t = this._clickTolerance()), t);
                this._rawPxBounds &&
                    (this._pxBounds = new Z([
                        this._rawPxBounds.min.subtract(t),
                        this._rawPxBounds.max.add(t),
                    ]));
            },
            _projectLatlngs: function (t, e, i) {
                var n,
                    o,
                    s = t[0] instanceof F,
                    r = t.length;
                if (s) {
                    for (o = [], n = 0; n < r; n++)
                        (o[n] = this._map.latLngToLayerPoint(t[n])),
                            i.extend(o[n]);
                    e.push(o);
                } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], e, i);
            },
            _clipPoints: function () {
                var t = this._renderer._bounds;
                if (
                    ((this._parts = []),
                    this._pxBounds && this._pxBounds.intersects(t))
                )
                    if (this.options.noClip) this._parts = this._rings;
                    else
                        for (
                            var e,
                                i,
                                n,
                                o,
                                s = this._parts,
                                r = 0,
                                a = 0,
                                h = this._rings.length;
                            r < h;
                            r++
                        )
                            for (
                                e = 0, i = (o = this._rings[r]).length;
                                e < i - 1;
                                e++
                            )
                                (n = Je(o[e], o[e + 1], t, e, !0)) &&
                                    ((s[a] = s[a] || []),
                                    s[a].push(n[0]),
                                    (n[1] === o[e + 1] && e !== i - 2) ||
                                        (s[a].push(n[1]), a++));
            },
            _simplifyPoints: function () {
                for (
                    var t = this._parts,
                        e = this.options.smoothFactor,
                        i = 0,
                        n = t.length;
                    i < n;
                    i++
                )
                    t[i] = Ve(t[i], e);
            },
            _update: function () {
                this._map &&
                    (this._clipPoints(),
                    this._simplifyPoints(),
                    this._updatePath());
            },
            _updatePath: function () {
                this._renderer._updatePoly(this);
            },
            _containsPoint: function (t, e) {
                var i,
                    n,
                    o,
                    s,
                    r,
                    a,
                    h = this._clickTolerance();
                if (this._pxBounds && this._pxBounds.contains(t))
                    for (i = 0, s = this._parts.length; i < s; i++)
                        for (
                            n = 0, o = (r = (a = this._parts[i]).length) - 1;
                            n < r;
                            o = n++
                        )
                            if ((e || 0 !== n) && Ke(t, a[o], a[n]) <= h)
                                return !0;
                return !1;
            },
        });
    _i._flat = ti;
    var mi = _i.extend({
            options: { fill: !0 },
            isEmpty: function () {
                return !this._latlngs.length || !this._latlngs[0].length;
            },
            getCenter: function () {
                if (this._map)
                    return ni(this._defaultShape(), this._map.options.crs);
                throw new Error(
                    "Must add layer to map before using getCenter()"
                );
            },
            _convertLatLngs: function (t) {
                var e = (t = _i.prototype._convertLatLngs.call(this, t)).length;
                return (
                    2 <= e &&
                        t[0] instanceof F &&
                        t[0].equals(t[e - 1]) &&
                        t.pop(),
                    t
                );
            },
            _setLatLngs: function (t) {
                _i.prototype._setLatLngs.call(this, t),
                    $e(this._latlngs) && (this._latlngs = [this._latlngs]);
            },
            _defaultShape: function () {
                return (
                    $e(this._latlngs[0]) ? this._latlngs : this._latlngs[0]
                )[0];
            },
            _clipPoints: function () {
                var t = this._renderer._bounds,
                    e = new k((e = this.options.weight), e);
                t = new Z(t.min.subtract(e), t.max.add(e));
                if (
                    ((this._parts = []),
                    this._pxBounds && this._pxBounds.intersects(t))
                )
                    if (this.options.noClip) this._parts = this._rings;
                    else
                        for (var i, n = 0, o = this._rings.length; n < o; n++)
                            (i = ii(this._rings[n], t, !0)).length &&
                                this._parts.push(i);
            },
            _updatePath: function () {
                this._renderer._updatePoly(this, !0);
            },
            _containsPoint: function (t) {
                var e,
                    i,
                    n,
                    o,
                    s,
                    r,
                    a,
                    h,
                    l = !1;
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (o = 0, a = this._parts.length; o < a; o++)
                    for (
                        s = 0, r = (h = (e = this._parts[o]).length) - 1;
                        s < h;
                        r = s++
                    )
                        (i = e[s]),
                            (n = e[r]),
                            i.y > t.y != n.y > t.y &&
                                t.x <
                                    ((n.x - i.x) * (t.y - i.y)) / (n.y - i.y) +
                                        i.x &&
                                (l = !l);
                return l || _i.prototype._containsPoint.call(this, t, !0);
            },
        }),
        fi = ri.extend({
            initialize: function (t, e) {
                p(this, e), (this._layers = {}), t && this.addData(t);
            },
            addData: function (t) {
                var e,
                    i,
                    n,
                    o = g(t) ? t : t.features;
                if (o) {
                    for (e = 0, i = o.length; e < i; e++)
                        ((n = o[e]).geometries ||
                            n.geometry ||
                            n.features ||
                            n.coordinates) &&
                            this.addData(n);
                    return this;
                }
                var s,
                    r = this.options;
                return (r.filter && !r.filter(t)) || !(s = gi(t, r))
                    ? this
                    : ((s.feature = Pi(t)),
                      (s.defaultOptions = s.options),
                      this.resetStyle(s),
                      r.onEachFeature && r.onEachFeature(t, s),
                      this.addLayer(s));
            },
            resetStyle: function (t) {
                return void 0 === t
                    ? this.eachLayer(this.resetStyle, this)
                    : ((t.options = e({}, t.defaultOptions)),
                      this._setLayerStyle(t, this.options.style),
                      this);
            },
            setStyle: function (t) {
                return this.eachLayer(function (e) {
                    this._setLayerStyle(e, t);
                }, this);
            },
            _setLayerStyle: function (t, e) {
                t.setStyle &&
                    ("function" == typeof e && (e = e(t.feature)),
                    t.setStyle(e));
            },
        });
    function gi(t, e) {
        var i,
            n,
            o,
            s,
            r = "Feature" === t.type ? t.geometry : t,
            a = r ? r.coordinates : null,
            h = [],
            l = e && e.pointToLayer,
            u = (e && e.coordsToLatLng) || yi;
        if (!a && !r) return null;
        switch (r.type) {
            case "Point":
                return vi(l, t, (i = u(a)), e);
            case "MultiPoint":
                for (o = 0, s = a.length; o < s; o++)
                    (i = u(a[o])), h.push(vi(l, t, i, e));
                return new ri(h);
            case "LineString":
            case "MultiLineString":
                return (
                    (n = xi(a, "LineString" === r.type ? 0 : 1, u)),
                    new _i(n, e)
                );
            case "Polygon":
            case "MultiPolygon":
                return (
                    (n = xi(a, "Polygon" === r.type ? 1 : 2, u)), new mi(n, e)
                );
            case "GeometryCollection":
                for (o = 0, s = r.geometries.length; o < s; o++) {
                    var c = gi(
                        {
                            geometry: r.geometries[o],
                            type: "Feature",
                            properties: t.properties,
                        },
                        e
                    );
                    c && h.push(c);
                }
                return new ri(h);
            case "FeatureCollection":
                for (o = 0, s = r.features.length; o < s; o++) {
                    var d = gi(r.features[o], e);
                    d && h.push(d);
                }
                return new ri(h);
            default:
                throw new Error("Invalid GeoJSON object.");
        }
    }
    function vi(t, e, i, n) {
        return t ? t(e, i) : new ui(i, n && n.markersInheritOptions && n);
    }
    function yi(t) {
        return new F(t[1], t[0], t[2]);
    }
    function xi(t, e, i) {
        for (var n, o = [], s = 0, r = t.length; s < r; s++)
            (n = e ? xi(t[s], e - 1, i) : (i || yi)(t[s])), o.push(n);
        return o;
    }
    function bi(t, e) {
        return void 0 !== (t = N(t)).alt
            ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)]
            : [u(t.lng, e), u(t.lat, e)];
    }
    function wi(t, e, i, n) {
        for (var o = [], s = 0, r = t.length; s < r; s++)
            o.push(e ? wi(t[s], $e(t[s]) ? 0 : e - 1, i, n) : bi(t[s], n));
        return !e && i && o.push(o[0]), o;
    }
    function Li(t, i) {
        return t.feature ? e({}, t.feature, { geometry: i }) : Pi(i);
    }
    function Pi(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type
            ? t
            : { type: "Feature", properties: {}, geometry: t };
    }
    function Ti(t, e) {
        return new fi(t, e);
    }
    (ut = {
        toGeoJSON: function (t) {
            return Li(this, {
                type: "Point",
                coordinates: bi(this.getLatLng(), t),
            });
        },
    }),
        ui.include(ut),
        pi.include(ut),
        di.include(ut),
        _i.include({
            toGeoJSON: function (t) {
                var e = !$e(this._latlngs);
                return Li(this, {
                    type: (e ? "Multi" : "") + "LineString",
                    coordinates: wi(this._latlngs, e ? 1 : 0, !1, t),
                });
            },
        }),
        mi.include({
            toGeoJSON: function (t) {
                var e = !$e(this._latlngs),
                    i = e && !$e(this._latlngs[0]);
                t = wi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
                return Li(this, {
                    type: (i ? "Multi" : "") + "Polygon",
                    coordinates: (t = e ? t : [t]),
                });
            },
        }),
        si.include({
            toMultiPoint: function (t) {
                var e = [];
                return (
                    this.eachLayer(function (i) {
                        e.push(i.toGeoJSON(t).geometry.coordinates);
                    }),
                    Li(this, { type: "MultiPoint", coordinates: e })
                );
            },
            toGeoJSON: function (t) {
                var e,
                    i,
                    n =
                        this.feature &&
                        this.feature.geometry &&
                        this.feature.geometry.type;
                return "MultiPoint" === n
                    ? this.toMultiPoint(t)
                    : ((e = "GeometryCollection" === n),
                      (i = []),
                      this.eachLayer(function (n) {
                          n.toGeoJSON &&
                              ((n = n.toGeoJSON(t)),
                              e
                                  ? i.push(n.geometry)
                                  : "FeatureCollection" === (n = Pi(n)).type
                                  ? i.push.apply(i, n.features)
                                  : i.push(n));
                      }),
                      e
                          ? Li(this, {
                                geometries: i,
                                type: "GeometryCollection",
                            })
                          : { type: "FeatureCollection", features: i });
            },
        });
    ct = Ti;
    var Si = lt.extend({
            options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: "",
            },
            initialize: function (t, e, i) {
                (this._url = t), (this._bounds = D(e)), p(this, i);
            },
            onAdd: function () {
                this._image ||
                    (this._initImage(),
                    this.options.opacity < 1 && this._updateOpacity()),
                    this.options.interactive &&
                        (oe(this._image, "leaflet-interactive"),
                        this.addInteractiveTarget(this._image)),
                    this.getPane().appendChild(this._image),
                    this._reset();
            },
            onRemove: function () {
                $t(this._image),
                    this.options.interactive &&
                        this.removeInteractiveTarget(this._image);
            },
            setOpacity: function (t) {
                return (
                    (this.options.opacity = t),
                    this._image && this._updateOpacity(),
                    this
                );
            },
            setStyle: function (t) {
                return t.opacity && this.setOpacity(t.opacity), this;
            },
            bringToFront: function () {
                return this._map && ee(this._image), this;
            },
            bringToBack: function () {
                return this._map && ie(this._image), this;
            },
            setUrl: function (t) {
                return (
                    (this._url = t), this._image && (this._image.src = t), this
                );
            },
            setBounds: function (t) {
                return (this._bounds = D(t)), this._map && this._reset(), this;
            },
            getEvents: function () {
                var t = { zoom: this._reset, viewreset: this._reset };
                return (
                    this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                );
            },
            setZIndex: function (t) {
                return (this.options.zIndex = t), this._updateZIndex(), this;
            },
            getBounds: function () {
                return this._bounds;
            },
            getElement: function () {
                return this._image;
            },
            _initImage: function () {
                var t = "IMG" === this._url.tagName,
                    e = (this._image = t ? this._url : Xt("img"));
                oe(e, "leaflet-image-layer"),
                    this._zoomAnimated && oe(e, "leaflet-zoom-animated"),
                    this.options.className && oe(e, this.options.className),
                    (e.onselectstart = l),
                    (e.onmousemove = l),
                    (e.onload = o(this.fire, this, "load")),
                    (e.onerror = o(this._overlayOnError, this, "error")),
                    (!this.options.crossOrigin &&
                        "" !== this.options.crossOrigin) ||
                        (e.crossOrigin =
                            !0 === this.options.crossOrigin
                                ? ""
                                : this.options.crossOrigin),
                    this.options.zIndex && this._updateZIndex(),
                    t
                        ? (this._url = e.src)
                        : ((e.src = this._url), (e.alt = this.options.alt));
            },
            _animateZoom: function (t) {
                var e = this._map.getZoomScale(t.zoom);
                t = this._map._latLngBoundsToNewLayerBounds(
                    this._bounds,
                    t.zoom,
                    t.center
                ).min;
                ue(this._image, t, e);
            },
            _reset: function () {
                var t = this._image,
                    e = new Z(
                        this._map.latLngToLayerPoint(
                            this._bounds.getNorthWest()
                        ),
                        this._map.latLngToLayerPoint(
                            this._bounds.getSouthEast()
                        )
                    ),
                    i = e.getSize();
                ce(t, e.min),
                    (t.style.width = i.x + "px"),
                    (t.style.height = i.y + "px");
            },
            _updateOpacity: function () {
                he(this._image, this.options.opacity);
            },
            _updateZIndex: function () {
                this._image &&
                    void 0 !== this.options.zIndex &&
                    null !== this.options.zIndex &&
                    (this._image.style.zIndex = this.options.zIndex);
            },
            _overlayOnError: function () {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t &&
                    this._url !== t &&
                    ((this._url = t), (this._image.src = t));
            },
            getCenter: function () {
                return this._bounds.getCenter();
            },
        }),
        Ci = Si.extend({
            options: {
                autoplay: !0,
                loop: !0,
                keepAspectRatio: !0,
                muted: !1,
                playsInline: !0,
            },
            _initImage: function () {
                var t = "VIDEO" === this._url.tagName,
                    e = (this._image = t ? this._url : Xt("video"));
                if (
                    (oe(e, "leaflet-image-layer"),
                    this._zoomAnimated && oe(e, "leaflet-zoom-animated"),
                    this.options.className && oe(e, this.options.className),
                    (e.onselectstart = l),
                    (e.onmousemove = l),
                    (e.onloadeddata = o(this.fire, this, "load")),
                    t)
                ) {
                    for (
                        var i = e.getElementsByTagName("source"), n = [], s = 0;
                        s < i.length;
                        s++
                    )
                        n.push(i[s].src);
                    this._url = 0 < i.length ? n : [e.src];
                } else {
                    g(this._url) || (this._url = [this._url]),
                        !this.options.keepAspectRatio &&
                            Object.prototype.hasOwnProperty.call(
                                e.style,
                                "objectFit"
                            ) &&
                            (e.style.objectFit = "fill"),
                        (e.autoplay = !!this.options.autoplay),
                        (e.loop = !!this.options.loop),
                        (e.muted = !!this.options.muted),
                        (e.playsInline = !!this.options.playsInline);
                    for (var r = 0; r < this._url.length; r++) {
                        var a = Xt("source");
                        (a.src = this._url[r]), e.appendChild(a);
                    }
                }
            },
        }),
        Mi = Si.extend({
            _initImage: function () {
                var t = (this._image = this._url);
                oe(t, "leaflet-image-layer"),
                    this._zoomAnimated && oe(t, "leaflet-zoom-animated"),
                    this.options.className && oe(t, this.options.className),
                    (t.onselectstart = l),
                    (t.onmousemove = l);
            },
        }),
        Ai = lt.extend({
            options: {
                interactive: !1,
                offset: [0, 0],
                className: "",
                pane: void 0,
                content: "",
            },
            initialize: function (t, e) {
                t && (t instanceof L.LatLng || g(t))
                    ? ((this._latlng = N(t)), p(this, e))
                    : (p(this, t), (this._source = e)),
                    this.options.content &&
                        (this._content = this.options.content);
            },
            openOn: function (t) {
                return (
                    (t = arguments.length ? t : this._source._map).hasLayer(
                        this
                    ) || t.addLayer(this),
                    this
                );
            },
            close: function () {
                return this._map && this._map.removeLayer(this), this;
            },
            toggle: function (t) {
                return (
                    this._map
                        ? this.close()
                        : (arguments.length
                              ? (this._source = t)
                              : (t = this._source),
                          this._prepareOpen(),
                          this.openOn(t._map)),
                    this
                );
            },
            onAdd: function (t) {
                (this._zoomAnimated = t._zoomAnimated),
                    this._container || this._initLayout(),
                    t._fadeAnimated && he(this._container, 0),
                    clearTimeout(this._removeTimeout),
                    this.getPane().appendChild(this._container),
                    this.update(),
                    t._fadeAnimated && he(this._container, 1),
                    this.bringToFront(),
                    this.options.interactive &&
                        (oe(this._container, "leaflet-interactive"),
                        this.addInteractiveTarget(this._container));
            },
            onRemove: function (t) {
                t._fadeAnimated
                    ? (he(this._container, 0),
                      (this._removeTimeout = setTimeout(
                          o($t, void 0, this._container),
                          200
                      )))
                    : $t(this._container),
                    this.options.interactive &&
                        (se(this._container, "leaflet-interactive"),
                        this.removeInteractiveTarget(this._container));
            },
            getLatLng: function () {
                return this._latlng;
            },
            setLatLng: function (t) {
                return (
                    (this._latlng = N(t)),
                    this._map && (this._updatePosition(), this._adjustPan()),
                    this
                );
            },
            getContent: function () {
                return this._content;
            },
            setContent: function (t) {
                return (this._content = t), this.update(), this;
            },
            getElement: function () {
                return this._container;
            },
            update: function () {
                this._map &&
                    ((this._container.style.visibility = "hidden"),
                    this._updateContent(),
                    this._updateLayout(),
                    this._updatePosition(),
                    (this._container.style.visibility = ""),
                    this._adjustPan());
            },
            getEvents: function () {
                var t = {
                    zoom: this._updatePosition,
                    viewreset: this._updatePosition,
                };
                return (
                    this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                );
            },
            isOpen: function () {
                return !!this._map && this._map.hasLayer(this);
            },
            bringToFront: function () {
                return this._map && ee(this._container), this;
            },
            bringToBack: function () {
                return this._map && ie(this._container), this;
            },
            _prepareOpen: function (t) {
                if (!(i = this._source)._map) return !1;
                if (i instanceof ri) {
                    var e,
                        i = null,
                        n = this._source._layers;
                    for (e in n)
                        if (n[e]._map) {
                            i = n[e];
                            break;
                        }
                    if (!i) return !1;
                    this._source = i;
                }
                if (!t)
                    if (i.getCenter) t = i.getCenter();
                    else if (i.getLatLng) t = i.getLatLng();
                    else {
                        if (!i.getBounds)
                            throw new Error(
                                "Unable to get source layer LatLng."
                            );
                        t = i.getBounds().getCenter();
                    }
                return this.setLatLng(t), this._map && this.update(), !0;
            },
            _updateContent: function () {
                if (this._content) {
                    var t = this._contentNode,
                        e =
                            "function" == typeof this._content
                                ? this._content(this._source || this)
                                : this._content;
                    if ("string" == typeof e) t.innerHTML = e;
                    else {
                        for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
                        t.appendChild(e);
                    }
                    this.fire("contentupdate");
                }
            },
            _updatePosition: function () {
                var t, e, i;
                this._map &&
                    ((e = this._map.latLngToLayerPoint(this._latlng)),
                    (t = O(this.options.offset)),
                    (i = this._getAnchor()),
                    this._zoomAnimated
                        ? ce(this._container, e.add(i))
                        : (t = t.add(e).add(i)),
                    (e = this._containerBottom = -t.y),
                    (i = this._containerLeft =
                        -Math.round(this._containerWidth / 2) + t.x),
                    (this._container.style.bottom = e + "px"),
                    (this._container.style.left = i + "px"));
            },
            _getAnchor: function () {
                return [0, 0];
            },
        }),
        zi =
            (Re.include({
                _initOverlay: function (t, e, i, n) {
                    var o = e;
                    return (
                        o instanceof t || (o = new t(n).setContent(e)),
                        i && o.setLatLng(i),
                        o
                    );
                },
            }),
            lt.include({
                _initOverlay: function (t, e, i, n) {
                    var o = i;
                    return (
                        o instanceof t
                            ? (p(o, n), (o._source = this))
                            : (o = e && !n ? e : new t(n, this)).setContent(i),
                        o
                    );
                },
            }),
            Ai.extend({
                options: {
                    pane: "popupPane",
                    offset: [0, 7],
                    maxWidth: 300,
                    minWidth: 50,
                    maxHeight: null,
                    autoPan: !0,
                    autoPanPaddingTopLeft: null,
                    autoPanPaddingBottomRight: null,
                    autoPanPadding: [5, 5],
                    keepInView: !1,
                    closeButton: !0,
                    autoClose: !0,
                    closeOnEscapeKey: !0,
                    className: "",
                },
                openOn: function (t) {
                    return (
                        !(t = arguments.length
                            ? t
                            : this._source._map).hasLayer(this) &&
                            t._popup &&
                            t._popup.options.autoClose &&
                            t.removeLayer(t._popup),
                        (t._popup = this),
                        Ai.prototype.openOn.call(this, t)
                    );
                },
                onAdd: function (t) {
                    Ai.prototype.onAdd.call(this, t),
                        t.fire("popupopen", { popup: this }),
                        this._source &&
                            (this._source.fire(
                                "popupopen",
                                { popup: this },
                                !0
                            ),
                            this._source instanceof ci ||
                                this._source.on("preclick", Se));
                },
                onRemove: function (t) {
                    Ai.prototype.onRemove.call(this, t),
                        t.fire("popupclose", { popup: this }),
                        this._source &&
                            (this._source.fire(
                                "popupclose",
                                { popup: this },
                                !0
                            ),
                            this._source instanceof ci ||
                                this._source.off("preclick", Se));
                },
                getEvents: function () {
                    var t = Ai.prototype.getEvents.call(this);
                    return (
                        (void 0 !== this.options.closeOnClick
                            ? this.options.closeOnClick
                            : this._map.options.closePopupOnClick) &&
                            (t.preclick = this.close),
                        this.options.keepInView &&
                            (t.moveend = this._adjustPan),
                        t
                    );
                },
                _initLayout: function () {
                    var t = "leaflet-popup",
                        e = (this._container = Xt(
                            "div",
                            t +
                                " " +
                                (this.options.className || "") +
                                " leaflet-zoom-animated"
                        )),
                        i = (this._wrapper = Xt(
                            "div",
                            t + "-content-wrapper",
                            e
                        ));
                    (this._contentNode = Xt("div", t + "-content", i)),
                        Me(e),
                        Ce(this._contentNode),
                        ye(e, "contextmenu", Se),
                        (this._tipContainer = Xt(
                            "div",
                            t + "-tip-container",
                            e
                        )),
                        (this._tip = Xt("div", t + "-tip", this._tipContainer)),
                        this.options.closeButton &&
                            ((i = this._closeButton =
                                Xt("a", t + "-close-button", e)).setAttribute(
                                "role",
                                "button"
                            ),
                            i.setAttribute("aria-label", "Close popup"),
                            (i.href = "#close"),
                            (i.innerHTML =
                                '<span aria-hidden="true">&#215;</span>'),
                            ye(
                                i,
                                "click",
                                function (t) {
                                    Ae(t), this.close();
                                },
                                this
                            ));
                },
                _updateLayout: function () {
                    var t = this._contentNode,
                        e = t.style,
                        i =
                            ((e.width = ""),
                            (e.whiteSpace = "nowrap"),
                            t.offsetWidth),
                        n =
                            ((i = Math.min(i, this.options.maxWidth)),
                            (i =
                                ((i = Math.max(i, this.options.minWidth)),
                                (e.width = i + 1 + "px"),
                                (e.whiteSpace = ""),
                                (e.height = ""),
                                t.offsetHeight)),
                            this.options.maxHeight);
                    (n && n < i ? ((e.height = n + "px"), oe) : se)(
                        t,
                        "leaflet-popup-scrolled"
                    ),
                        (this._containerWidth = this._container.offsetWidth);
                },
                _animateZoom: function (t) {
                    t = this._map._latLngToNewLayerPoint(
                        this._latlng,
                        t.zoom,
                        t.center
                    );
                    var e = this._getAnchor();
                    ce(this._container, t.add(e));
                },
                _adjustPan: function (t) {
                    var e, i, n, o, s, r, a, h;
                    this.options.autoPan &&
                        (this._map._panAnim && this._map._panAnim.stop(),
                        (e = this._map),
                        (i =
                            parseInt(Qt(this._container, "marginBottom"), 10) ||
                            0),
                        (i = this._container.offsetHeight + i),
                        (h = this._containerWidth),
                        (n = new k(
                            this._containerLeft,
                            -i - this._containerBottom
                        ))._add(de(this._container)),
                        (n = e.layerPointToContainerPoint(n)),
                        (s = O(this.options.autoPanPadding)),
                        (o = O(this.options.autoPanPaddingTopLeft || s)),
                        (s = O(this.options.autoPanPaddingBottomRight || s)),
                        (r = e.getSize()),
                        (a = 0),
                        n.x + h + s.x > r.x && (a = n.x + h - r.x + s.x),
                        n.x - a - o.x < (h = 0) && (a = n.x - o.x),
                        n.y + i + s.y > r.y && (h = n.y + i - r.y + s.y),
                        n.y - h - o.y < 0 && (h = n.y - o.y),
                        (a || h) &&
                            e
                                .fire("autopanstart")
                                .panBy([a, h], {
                                    animate: t && "moveend" === t.type,
                                }));
                },
                _getAnchor: function () {
                    return O(
                        this._source && this._source._getPopupAnchor
                            ? this._source._getPopupAnchor()
                            : [0, 0]
                    );
                },
            })),
        Ii =
            (Re.mergeOptions({ closePopupOnClick: !0 }),
            Re.include({
                openPopup: function (t, e, i) {
                    return this._initOverlay(zi, t, e, i).openOn(this), this;
                },
                closePopup: function (t) {
                    return (
                        (t = arguments.length ? t : this._popup) && t.close(),
                        this
                    );
                },
            }),
            lt.include({
                bindPopup: function (t, e) {
                    return (
                        (this._popup = this._initOverlay(
                            zi,
                            this._popup,
                            t,
                            e
                        )),
                        this._popupHandlersAdded ||
                            (this.on({
                                click: this._openPopup,
                                keypress: this._onKeyPress,
                                remove: this.closePopup,
                                move: this._movePopup,
                            }),
                            (this._popupHandlersAdded = !0)),
                        this
                    );
                },
                unbindPopup: function () {
                    return (
                        this._popup &&
                            (this.off({
                                click: this._openPopup,
                                keypress: this._onKeyPress,
                                remove: this.closePopup,
                                move: this._movePopup,
                            }),
                            (this._popupHandlersAdded = !1),
                            (this._popup = null)),
                        this
                    );
                },
                openPopup: function (t) {
                    return (
                        this._popup &&
                            this._popup._prepareOpen(t || this._latlng) &&
                            this._popup.openOn(this._map),
                        this
                    );
                },
                closePopup: function () {
                    return this._popup && this._popup.close(), this;
                },
                togglePopup: function () {
                    return this._popup && this._popup.toggle(this), this;
                },
                isPopupOpen: function () {
                    return !!this._popup && this._popup.isOpen();
                },
                setPopupContent: function (t) {
                    return this._popup && this._popup.setContent(t), this;
                },
                getPopup: function () {
                    return this._popup;
                },
                _openPopup: function (t) {
                    var e;
                    this._popup &&
                        this._map &&
                        (ze(t),
                        (e = t.layer || t.target),
                        this._popup._source !== e || e instanceof ci
                            ? ((this._popup._source = e),
                              this.openPopup(t.latlng))
                            : this._map.hasLayer(this._popup)
                            ? this.closePopup()
                            : this.openPopup(t.latlng));
                },
                _movePopup: function (t) {
                    this._popup.setLatLng(t.latlng);
                },
                _onKeyPress: function (t) {
                    13 === t.originalEvent.keyCode && this._openPopup(t);
                },
            }),
            Ai.extend({
                options: {
                    pane: "tooltipPane",
                    offset: [0, 0],
                    direction: "auto",
                    permanent: !1,
                    sticky: !1,
                    opacity: 0.9,
                },
                onAdd: function (t) {
                    Ai.prototype.onAdd.call(this, t),
                        this.setOpacity(this.options.opacity),
                        t.fire("tooltipopen", { tooltip: this }),
                        this._source &&
                            (this.addEventParent(this._source),
                            this._source.fire(
                                "tooltipopen",
                                { tooltip: this },
                                !0
                            ));
                },
                onRemove: function (t) {
                    Ai.prototype.onRemove.call(this, t),
                        t.fire("tooltipclose", { tooltip: this }),
                        this._source &&
                            (this.removeEventParent(this._source),
                            this._source.fire(
                                "tooltipclose",
                                { tooltip: this },
                                !0
                            ));
                },
                getEvents: function () {
                    var t = Ai.prototype.getEvents.call(this);
                    return (
                        this.options.permanent || (t.preclick = this.close), t
                    );
                },
                _initLayout: function () {
                    var t =
                        "leaflet-tooltip " +
                        (this.options.className || "") +
                        " leaflet-zoom-" +
                        (this._zoomAnimated ? "animated" : "hide");
                    (this._contentNode = this._container = Xt("div", t)),
                        this._container.setAttribute("role", "tooltip"),
                        this._container.setAttribute(
                            "id",
                            "leaflet-tooltip-" + r(this)
                        );
                },
                _updateLayout: function () {},
                _adjustPan: function () {},
                _setPosition: function (t) {
                    var e,
                        i = this._map,
                        n = this._container,
                        o = i.latLngToContainerPoint(i.getCenter()),
                        s =
                            ((i = i.layerPointToContainerPoint(t)),
                            this.options.direction),
                        r = n.offsetWidth,
                        a = n.offsetHeight,
                        h = O(this.options.offset),
                        l = this._getAnchor();
                    i =
                        "top" === s
                            ? ((e = r / 2), a)
                            : "bottom" === s
                            ? ((e = r / 2), 0)
                            : ((e =
                                  "center" === s
                                      ? r / 2
                                      : "right" === s
                                      ? 0
                                      : "left" === s
                                      ? r
                                      : i.x < o.x
                                      ? ((s = "right"), 0)
                                      : ((s = "left"), r + 2 * (h.x + l.x))),
                              a / 2);
                    (t = t.subtract(O(e, i, !0)).add(h).add(l)),
                        se(n, "leaflet-tooltip-right"),
                        se(n, "leaflet-tooltip-left"),
                        se(n, "leaflet-tooltip-top"),
                        se(n, "leaflet-tooltip-bottom"),
                        oe(n, "leaflet-tooltip-" + s),
                        ce(n, t);
                },
                _updatePosition: function () {
                    var t = this._map.latLngToLayerPoint(this._latlng);
                    this._setPosition(t);
                },
                setOpacity: function (t) {
                    (this.options.opacity = t),
                        this._container && he(this._container, t);
                },
                _animateZoom: function (t) {
                    (t = this._map._latLngToNewLayerPoint(
                        this._latlng,
                        t.zoom,
                        t.center
                    )),
                        this._setPosition(t);
                },
                _getAnchor: function () {
                    return O(
                        this._source &&
                            this._source._getTooltipAnchor &&
                            !this.options.sticky
                            ? this._source._getTooltipAnchor()
                            : [0, 0]
                    );
                },
            })),
        ki =
            (Re.include({
                openTooltip: function (t, e, i) {
                    return this._initOverlay(Ii, t, e, i).openOn(this), this;
                },
                closeTooltip: function (t) {
                    return t.close(), this;
                },
            }),
            lt.include({
                bindTooltip: function (t, e) {
                    return (
                        this._tooltip &&
                            this.isTooltipOpen() &&
                            this.unbindTooltip(),
                        (this._tooltip = this._initOverlay(
                            Ii,
                            this._tooltip,
                            t,
                            e
                        )),
                        this._initTooltipInteractions(),
                        this._tooltip.options.permanent &&
                            this._map &&
                            this._map.hasLayer(this) &&
                            this.openTooltip(),
                        this
                    );
                },
                unbindTooltip: function () {
                    return (
                        this._tooltip &&
                            (this._initTooltipInteractions(!0),
                            this.closeTooltip(),
                            (this._tooltip = null)),
                        this
                    );
                },
                _initTooltipInteractions: function (t) {
                    var e, i;
                    (!t && this._tooltipHandlersAdded) ||
                        ((e = t ? "off" : "on"),
                        (i = {
                            remove: this.closeTooltip,
                            move: this._moveTooltip,
                        }),
                        this._tooltip.options.permanent
                            ? (i.add = this._openTooltip)
                            : ((i.mouseover = this._openTooltip),
                              (i.mouseout = this.closeTooltip),
                              (i.click = this._openTooltip),
                              this._map
                                  ? this._addFocusListeners()
                                  : (i.add = this._addFocusListeners)),
                        this._tooltip.options.sticky &&
                            (i.mousemove = this._moveTooltip),
                        this[e](i),
                        (this._tooltipHandlersAdded = !t));
                },
                openTooltip: function (t) {
                    return (
                        this._tooltip &&
                            this._tooltip._prepareOpen(t) &&
                            (this._tooltip.openOn(this._map),
                            this.getElement
                                ? this._setAriaDescribedByOnLayer(this)
                                : this.eachLayer &&
                                  this.eachLayer(
                                      this._setAriaDescribedByOnLayer,
                                      this
                                  )),
                        this
                    );
                },
                closeTooltip: function () {
                    if (this._tooltip) return this._tooltip.close();
                },
                toggleTooltip: function () {
                    return this._tooltip && this._tooltip.toggle(this), this;
                },
                isTooltipOpen: function () {
                    return this._tooltip.isOpen();
                },
                setTooltipContent: function (t) {
                    return this._tooltip && this._tooltip.setContent(t), this;
                },
                getTooltip: function () {
                    return this._tooltip;
                },
                _addFocusListeners: function () {
                    this.getElement
                        ? this._addFocusListenersOnLayer(this)
                        : this.eachLayer &&
                          this.eachLayer(this._addFocusListenersOnLayer, this);
                },
                _addFocusListenersOnLayer: function (t) {
                    var e = t.getElement();
                    e &&
                        (ye(
                            e,
                            "focus",
                            function () {
                                (this._tooltip._source = t), this.openTooltip();
                            },
                            this
                        ),
                        ye(e, "blur", this.closeTooltip, this));
                },
                _setAriaDescribedByOnLayer: function (t) {
                    (t = t.getElement()) &&
                        t.setAttribute(
                            "aria-describedby",
                            this._tooltip._container.id
                        );
                },
                _openTooltip: function (t) {
                    !this._tooltip ||
                        !this._map ||
                        (this._map.dragging && this._map.dragging.moving()) ||
                        ((this._tooltip._source = t.layer || t.target),
                        this.openTooltip(
                            this._tooltip.options.sticky ? t.latlng : void 0
                        ));
                },
                _moveTooltip: function (t) {
                    var e = t.latlng;
                    this._tooltip.options.sticky &&
                        t.originalEvent &&
                        ((t = this._map.mouseEventToContainerPoint(
                            t.originalEvent
                        )),
                        (t = this._map.containerPointToLayerPoint(t)),
                        (e = this._map.layerPointToLatLng(t))),
                        this._tooltip.setLatLng(e);
                },
            }),
            ai.extend({
                options: {
                    iconSize: [12, 12],
                    html: !1,
                    bgPos: null,
                    className: "leaflet-div-icon",
                },
                createIcon: function (t) {
                    t =
                        t && "DIV" === t.tagName
                            ? t
                            : document.createElement("div");
                    var e = this.options;
                    return (
                        e.html instanceof Element
                            ? (te(t), t.appendChild(e.html))
                            : (t.innerHTML = !1 !== e.html ? e.html : ""),
                        e.bgPos &&
                            ((e = O(e.bgPos)),
                            (t.style.backgroundPosition =
                                -e.x + "px " + -e.y + "px")),
                        this._setIconStyles(t, "icon"),
                        t
                    );
                },
                createShadow: function () {
                    return null;
                },
            }));
    ai.Default = hi;
    var Ei = lt.extend({
            options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: Mt.mobile,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2,
            },
            initialize: function (t) {
                p(this, t);
            },
            onAdd: function () {
                this._initContainer(),
                    (this._levels = {}),
                    (this._tiles = {}),
                    this._resetView();
            },
            beforeAdd: function (t) {
                t._addZoomLimit(this);
            },
            onRemove: function (t) {
                this._removeAllTiles(),
                    $t(this._container),
                    t._removeZoomLimit(this),
                    (this._container = null),
                    (this._tileZoom = void 0);
            },
            bringToFront: function () {
                return (
                    this._map &&
                        (ee(this._container), this._setAutoZIndex(Math.max)),
                    this
                );
            },
            bringToBack: function () {
                return (
                    this._map &&
                        (ie(this._container), this._setAutoZIndex(Math.min)),
                    this
                );
            },
            getContainer: function () {
                return this._container;
            },
            setOpacity: function (t) {
                return (this.options.opacity = t), this._updateOpacity(), this;
            },
            setZIndex: function (t) {
                return (this.options.zIndex = t), this._updateZIndex(), this;
            },
            isLoading: function () {
                return this._loading;
            },
            redraw: function () {
                var t;
                return (
                    this._map &&
                        (this._removeAllTiles(),
                        (t = this._clampZoom(this._map.getZoom())) !==
                            this._tileZoom &&
                            ((this._tileZoom = t), this._updateLevels()),
                        this._update()),
                    this
                );
            },
            getEvents: function () {
                var t = {
                    viewprereset: this._invalidateAll,
                    viewreset: this._resetView,
                    zoom: this._resetView,
                    moveend: this._onMoveEnd,
                };
                return (
                    this.options.updateWhenIdle ||
                        (this._onMove ||
                            (this._onMove = a(
                                this._onMoveEnd,
                                this.options.updateInterval,
                                this
                            )),
                        (t.move = this._onMove)),
                    this._zoomAnimated && (t.zoomanim = this._animateZoom),
                    t
                );
            },
            createTile: function () {
                return document.createElement("div");
            },
            getTileSize: function () {
                var t = this.options.tileSize;
                return t instanceof k ? t : new k(t, t);
            },
            _updateZIndex: function () {
                this._container &&
                    void 0 !== this.options.zIndex &&
                    null !== this.options.zIndex &&
                    (this._container.style.zIndex = this.options.zIndex);
            },
            _setAutoZIndex: function (t) {
                for (
                    var e,
                        i = this.getPane().children,
                        n = -t(-1 / 0, 1 / 0),
                        o = 0,
                        s = i.length;
                    o < s;
                    o++
                )
                    (e = i[o].style.zIndex),
                        i[o] !== this._container && e && (n = t(n, +e));
                isFinite(n) &&
                    ((this.options.zIndex = n + t(-1, 1)),
                    this._updateZIndex());
            },
            _updateOpacity: function () {
                if (this._map && !Mt.ielt9) {
                    he(this._container, this.options.opacity);
                    var t,
                        e = +new Date(),
                        i = !1,
                        n = !1;
                    for (t in this._tiles) {
                        var o,
                            s = this._tiles[t];
                        s.current &&
                            s.loaded &&
                            ((o = Math.min(1, (e - s.loaded) / 200)),
                            he(s.el, o),
                            o < 1
                                ? (i = !0)
                                : (s.active ? (n = !0) : this._onOpaqueTile(s),
                                  (s.active = !0)));
                    }
                    n && !this._noPrune && this._pruneTiles(),
                        i &&
                            (C(this._fadeFrame),
                            (this._fadeFrame = S(this._updateOpacity, this)));
                }
            },
            _onOpaqueTile: l,
            _initContainer: function () {
                this._container ||
                    ((this._container = Xt(
                        "div",
                        "leaflet-layer " + (this.options.className || "")
                    )),
                    this._updateZIndex(),
                    this.options.opacity < 1 && this._updateOpacity(),
                    this.getPane().appendChild(this._container));
            },
            _updateLevels: function () {
                var t = this._tileZoom,
                    e = this.options.maxZoom;
                if (void 0 !== t) {
                    for (var i in this._levels)
                        (i = Number(i)),
                            this._levels[i].el.children.length || i === t
                                ? ((this._levels[i].el.style.zIndex =
                                      e - Math.abs(t - i)),
                                  this._onUpdateLevel(i))
                                : ($t(this._levels[i].el),
                                  this._removeTilesAtZoom(i),
                                  this._onRemoveLevel(i),
                                  delete this._levels[i]);
                    var n = this._levels[t],
                        o = this._map;
                    return (
                        n ||
                            (((n = this._levels[t] = {}).el = Xt(
                                "div",
                                "leaflet-tile-container leaflet-zoom-animated",
                                this._container
                            )),
                            (n.el.style.zIndex = e),
                            (n.origin = o
                                .project(o.unproject(o.getPixelOrigin()), t)
                                .round()),
                            (n.zoom = t),
                            this._setZoomTransform(
                                n,
                                o.getCenter(),
                                o.getZoom()
                            ),
                            n.el.offsetWidth,
                            this._onCreateLevel(n)),
                        (this._level = n)
                    );
                }
            },
            _onUpdateLevel: l,
            _onRemoveLevel: l,
            _onCreateLevel: l,
            _pruneTiles: function () {
                if (this._map) {
                    var t,
                        e,
                        i,
                        n = this._map.getZoom();
                    if (n > this.options.maxZoom || n < this.options.minZoom)
                        this._removeAllTiles();
                    else {
                        for (t in this._tiles)
                            (i = this._tiles[t]).retain = i.current;
                        for (t in this._tiles)
                            (i = this._tiles[t]).current &&
                                !i.active &&
                                ((e = i.coords),
                                this._retainParent(e.x, e.y, e.z, e.z - 5) ||
                                    this._retainChildren(
                                        e.x,
                                        e.y,
                                        e.z,
                                        e.z + 2
                                    ));
                        for (t in this._tiles)
                            this._tiles[t].retain || this._removeTile(t);
                    }
                }
            },
            _removeTilesAtZoom: function (t) {
                for (var e in this._tiles)
                    this._tiles[e].coords.z === t && this._removeTile(e);
            },
            _removeAllTiles: function () {
                for (var t in this._tiles) this._removeTile(t);
            },
            _invalidateAll: function () {
                for (var t in this._levels)
                    $t(this._levels[t].el),
                        this._onRemoveLevel(Number(t)),
                        delete this._levels[t];
                this._removeAllTiles(), (this._tileZoom = void 0);
            },
            _retainParent: function (t, e, i, n) {
                i -= 1;
                var o =
                    (((o = new k(
                        +(t = Math.floor(t / 2)),
                        +(e = Math.floor(e / 2))
                    )).z = i),
                    this._tileCoordsToKey(o));
                return (o = this._tiles[o]) && o.active
                    ? (o.retain = !0)
                    : (o && o.loaded && (o.retain = !0),
                      n < i && this._retainParent(t, e, i, n));
            },
            _retainChildren: function (t, e, i, n) {
                for (var o = 2 * t; o < 2 * t + 2; o++)
                    for (var s = 2 * e; s < 2 * e + 2; s++) {
                        var r =
                            (((r = new k(o, s)).z = i + 1),
                            this._tileCoordsToKey(r));
                        (r = this._tiles[r]) && r.active
                            ? (r.retain = !0)
                            : (r && r.loaded && (r.retain = !0),
                              i + 1 < n &&
                                  this._retainChildren(o, s, i + 1, n));
                    }
            },
            _resetView: function (t) {
                (t = t && (t.pinch || t.flyTo)),
                    this._setView(
                        this._map.getCenter(),
                        this._map.getZoom(),
                        t,
                        t
                    );
            },
            _animateZoom: function (t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate);
            },
            _clampZoom: function (t) {
                var e = this.options;
                return void 0 !== e.minNativeZoom && t < e.minNativeZoom
                    ? e.minNativeZoom
                    : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t
                    ? e.maxNativeZoom
                    : t;
            },
            _setView: function (t, e, i, n) {
                var o = Math.round(e),
                    s =
                        ((o =
                            (void 0 !== this.options.maxZoom &&
                                o > this.options.maxZoom) ||
                            (void 0 !== this.options.minZoom &&
                                o < this.options.minZoom)
                                ? void 0
                                : this._clampZoom(o)),
                        this.options.updateWhenZooming && o !== this._tileZoom);
                (n && !s) ||
                    ((this._tileZoom = o),
                    this._abortLoading && this._abortLoading(),
                    this._updateLevels(),
                    this._resetGrid(),
                    void 0 !== o && this._update(t),
                    i || this._pruneTiles(),
                    (this._noPrune = !!i)),
                    this._setZoomTransforms(t, e);
            },
            _setZoomTransforms: function (t, e) {
                for (var i in this._levels)
                    this._setZoomTransform(this._levels[i], t, e);
            },
            _setZoomTransform: function (t, e, i) {
                var n = this._map.getZoomScale(i, t.zoom);
                e = t.origin
                    .multiplyBy(n)
                    .subtract(this._map._getNewPixelOrigin(e, i))
                    .round();
                Mt.any3d ? ue(t.el, e, n) : ce(t.el, e);
            },
            _resetGrid: function () {
                var t = this._map,
                    e = t.options.crs,
                    i = (this._tileSize = this.getTileSize()),
                    n = this._tileZoom,
                    o = this._map.getPixelWorldBounds(this._tileZoom);
                o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
                    (this._wrapX = e.wrapLng &&
                        !this.options.noWrap && [
                            Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
                            Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y),
                        ]),
                    (this._wrapY = e.wrapLat &&
                        !this.options.noWrap && [
                            Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
                            Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y),
                        ]);
            },
            _onMoveEnd: function () {
                this._map && !this._map._animatingZoom && this._update();
            },
            _getTiledPixelBounds: function (t) {
                var e = (i = this._map)._animatingZoom
                        ? Math.max(i._animateToZoom, i.getZoom())
                        : i.getZoom(),
                    i =
                        ((e = i.getZoomScale(e, this._tileZoom)),
                        (t = i.project(t, this._tileZoom).floor()),
                        i.getSize().divideBy(2 * e));
                return new Z(t.subtract(i), t.add(i));
            },
            _update: function (t) {
                if ((n = this._map)) {
                    var e = this._clampZoom(n.getZoom());
                    if (
                        (void 0 === t && (t = n.getCenter()),
                        void 0 !== this._tileZoom)
                    ) {
                        var i,
                            n = this._getTiledPixelBounds(t),
                            o = this._pxBoundsToTileRange(n),
                            s = o.getCenter(),
                            r = [],
                            a =
                                ((n = this.options.keepBuffer),
                                new Z(
                                    o.getBottomLeft().subtract([n, -n]),
                                    o.getTopRight().add([n, -n])
                                ));
                        if (
                            !(
                                isFinite(o.min.x) &&
                                isFinite(o.min.y) &&
                                isFinite(o.max.x) &&
                                isFinite(o.max.y)
                            )
                        )
                            throw new Error(
                                "Attempted to load an infinite number of tiles"
                            );
                        for (i in this._tiles) {
                            var h = this._tiles[i].coords;
                            (h.z === this._tileZoom &&
                                a.contains(new k(h.x, h.y))) ||
                                (this._tiles[i].current = !1);
                        }
                        if (1 < Math.abs(e - this._tileZoom))
                            this._setView(t, e);
                        else {
                            for (var l = o.min.y; l <= o.max.y; l++)
                                for (var u = o.min.x; u <= o.max.x; u++) {
                                    var c,
                                        d = new k(u, l);
                                    (d.z = this._tileZoom),
                                        this._isValidTile(d) &&
                                            ((c =
                                                this._tiles[
                                                    this._tileCoordsToKey(d)
                                                ])
                                                ? (c.current = !0)
                                                : r.push(d));
                                }
                            if (
                                (r.sort(function (t, e) {
                                    return t.distanceTo(s) - e.distanceTo(s);
                                }),
                                0 !== r.length)
                            ) {
                                this._loading ||
                                    ((this._loading = !0),
                                    this.fire("loading"));
                                var p = document.createDocumentFragment();
                                for (u = 0; u < r.length; u++)
                                    this._addTile(r[u], p);
                                this._level.el.appendChild(p);
                            }
                        }
                    }
                }
            },
            _isValidTile: function (t) {
                var e = this._map.options.crs;
                if (!e.infinite) {
                    var i = this._globalTileRange;
                    if (
                        (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) ||
                        (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
                    )
                        return !1;
                }
                return (
                    !this.options.bounds ||
                    ((e = this._tileCoordsToBounds(t)),
                    D(this.options.bounds).overlaps(e))
                );
            },
            _keyToBounds: function (t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t));
            },
            _tileCoordsToNwSe: function (t) {
                var e = this._map,
                    i = this.getTileSize(),
                    n = t.scaleBy(i);
                i = n.add(i);
                return [e.unproject(n, t.z), e.unproject(i, t.z)];
            },
            _tileCoordsToBounds: function (t) {
                return (
                    (t = new R((t = this._tileCoordsToNwSe(t))[0], t[1])),
                    this.options.noWrap ? t : this._map.wrapLatLngBounds(t)
                );
            },
            _tileCoordsToKey: function (t) {
                return t.x + ":" + t.y + ":" + t.z;
            },
            _keyToTileCoords: function (t) {
                var e = new k(+(t = t.split(":"))[0], +t[1]);
                return (e.z = +t[2]), e;
            },
            _removeTile: function (t) {
                var e = this._tiles[t];
                e &&
                    ($t(e.el),
                    delete this._tiles[t],
                    this.fire("tileunload", {
                        tile: e.el,
                        coords: this._keyToTileCoords(t),
                    }));
            },
            _initTile: function (t) {
                oe(t, "leaflet-tile");
                var e = this.getTileSize();
                (t.style.width = e.x + "px"),
                    (t.style.height = e.y + "px"),
                    (t.onselectstart = l),
                    (t.onmousemove = l),
                    Mt.ielt9 &&
                        this.options.opacity < 1 &&
                        he(t, this.options.opacity);
            },
            _addTile: function (t, e) {
                var i = this._getTilePos(t),
                    n = this._tileCoordsToKey(t),
                    s = this.createTile(
                        this._wrapCoords(t),
                        o(this._tileReady, this, t)
                    );
                this._initTile(s),
                    this.createTile.length < 2 &&
                        S(o(this._tileReady, this, t, null, s)),
                    ce(s, i),
                    (this._tiles[n] = { el: s, coords: t, current: !0 }),
                    e.appendChild(s),
                    this.fire("tileloadstart", { tile: s, coords: t });
            },
            _tileReady: function (t, e, i) {
                e && this.fire("tileerror", { error: e, tile: i, coords: t });
                var n = this._tileCoordsToKey(t);
                (i = this._tiles[n]) &&
                    ((i.loaded = +new Date()),
                    this._map._fadeAnimated
                        ? (he(i.el, 0),
                          C(this._fadeFrame),
                          (this._fadeFrame = S(this._updateOpacity, this)))
                        : ((i.active = !0), this._pruneTiles()),
                    e ||
                        (oe(i.el, "leaflet-tile-loaded"),
                        this.fire("tileload", { tile: i.el, coords: t })),
                    this._noTilesToLoad() &&
                        ((this._loading = !1),
                        this.fire("load"),
                        Mt.ielt9 || !this._map._fadeAnimated
                            ? S(this._pruneTiles, this)
                            : setTimeout(o(this._pruneTiles, this), 250)));
            },
            _getTilePos: function (t) {
                return t
                    .scaleBy(this.getTileSize())
                    .subtract(this._level.origin);
            },
            _wrapCoords: function (t) {
                var e = new k(
                    this._wrapX ? h(t.x, this._wrapX) : t.x,
                    this._wrapY ? h(t.y, this._wrapY) : t.y
                );
                return (e.z = t.z), e;
            },
            _pxBoundsToTileRange: function (t) {
                var e = this.getTileSize();
                return new Z(
                    t.min.unscaleBy(e).floor(),
                    t.max.unscaleBy(e).ceil().subtract([1, 1])
                );
            },
            _noTilesToLoad: function () {
                for (var t in this._tiles)
                    if (!this._tiles[t].loaded) return !1;
                return !0;
            },
        }),
        Oi = Ei.extend({
            options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1,
                referrerPolicy: !1,
            },
            initialize: function (t, e) {
                (this._url = t),
                    (e = p(this, e)).detectRetina && Mt.retina && 0 < e.maxZoom
                        ? ((e.tileSize = Math.floor(e.tileSize / 2)),
                          e.zoomReverse
                              ? (e.zoomOffset--,
                                (e.minZoom = Math.min(
                                    e.maxZoom,
                                    e.minZoom + 1
                                )))
                              : (e.zoomOffset++,
                                (e.maxZoom = Math.max(
                                    e.minZoom,
                                    e.maxZoom - 1
                                ))),
                          (e.minZoom = Math.max(0, e.minZoom)))
                        : e.zoomReverse
                        ? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
                        : (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
                    "string" == typeof e.subdomains &&
                        (e.subdomains = e.subdomains.split("")),
                    this.on("tileunload", this._onTileRemove);
            },
            setUrl: function (t, e) {
                return (
                    this._url === t && void 0 === e && (e = !0),
                    (this._url = t),
                    e || this.redraw(),
                    this
                );
            },
            createTile: function (t, e) {
                var i = document.createElement("img");
                return (
                    ye(i, "load", o(this._tileOnLoad, this, e, i)),
                    ye(i, "error", o(this._tileOnError, this, e, i)),
                    (!this.options.crossOrigin &&
                        "" !== this.options.crossOrigin) ||
                        (i.crossOrigin =
                            !0 === this.options.crossOrigin
                                ? ""
                                : this.options.crossOrigin),
                    "string" == typeof this.options.referrerPolicy &&
                        (i.referrerPolicy = this.options.referrerPolicy),
                    (i.alt = ""),
                    (i.src = this.getTileUrl(t)),
                    i
                );
            },
            getTileUrl: function (t) {
                var i = {
                    r: Mt.retina ? "@2x" : "",
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._getZoomForUrl(),
                };
                return (
                    this._map &&
                        !this._map.options.crs.infinite &&
                        ((t = this._globalTileRange.max.y - t.y),
                        this.options.tms && (i.y = t),
                        (i["-y"] = t)),
                    f(this._url, e(i, this.options))
                );
            },
            _tileOnLoad: function (t, e) {
                Mt.ielt9 ? setTimeout(o(t, this, null, e), 0) : t(null, e);
            },
            _tileOnError: function (t, e, i) {
                var n = this.options.errorTileUrl;
                n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
            },
            _onTileRemove: function (t) {
                t.tile.onload = null;
            },
            _getZoomForUrl: function () {
                var t = this._tileZoom,
                    e = this.options.maxZoom;
                return (
                    (t = this.options.zoomReverse ? e - t : t) +
                    this.options.zoomOffset
                );
            },
            _getSubdomain: function (t) {
                return (
                    (t = Math.abs(t.x + t.y) % this.options.subdomains.length),
                    this.options.subdomains[t]
                );
            },
            _abortLoading: function () {
                var t, e, i;
                for (t in this._tiles)
                    this._tiles[t].coords.z !== this._tileZoom &&
                        (((i = this._tiles[t].el).onload = l),
                        (i.onerror = l),
                        i.complete ||
                            ((i.src = y),
                            (e = this._tiles[t].coords),
                            $t(i),
                            delete this._tiles[t],
                            this.fire("tileabort", { tile: i, coords: e })));
            },
            _removeTile: function (t) {
                var e = this._tiles[t];
                if (e)
                    return (
                        e.el.setAttribute("src", y),
                        Ei.prototype._removeTile.call(this, t)
                    );
            },
            _tileReady: function (t, e, i) {
                if (this._map && (!i || i.getAttribute("src") !== y))
                    return Ei.prototype._tileReady.call(this, t, e, i);
            },
        });
    function Zi(t, e) {
        return new Oi(t, e);
    }
    var Bi = Oi.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1,
            version: "1.1.1",
        },
        options: { crs: null, uppercase: !1 },
        initialize: function (t, i) {
            this._url = t;
            var n,
                o = e({}, this.defaultWmsParams);
            for (n in i) n in this.options || (o[n] = i[n]);
            t = (i = p(this, i)).detectRetina && Mt.retina ? 2 : 1;
            var s = this.getTileSize();
            (o.width = s.x * t), (o.height = s.y * t), (this.wmsParams = o);
        },
        onAdd: function (t) {
            (this._crs = this.options.crs || t.options.crs),
                (this._wmsVersion = parseFloat(this.wmsParams.version));
            var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
            (this.wmsParams[e] = this._crs.code),
                Oi.prototype.onAdd.call(this, t);
        },
        getTileUrl: function (t) {
            var e = this._tileCoordsToNwSe(t),
                i =
                    ((e = (i = B(
                        (i = this._crs).project(e[0]),
                        i.project(e[1])
                    )).min),
                    i.max);
            e = (
                1.3 <= this._wmsVersion && this._crs === oi
                    ? [e.y, e.x, i.y, i.x]
                    : [e.x, e.y, i.x, i.y]
            ).join(",");
            return (
                (i = Oi.prototype.getTileUrl.call(this, t)) +
                _(this.wmsParams, i, this.options.uppercase) +
                (this.options.uppercase ? "&BBOX=" : "&bbox=") +
                e
            );
        },
        setParams: function (t, i) {
            return e(this.wmsParams, t), i || this.redraw(), this;
        },
    });
    (Oi.WMS = Bi),
        (Zi.wms = function (t, e) {
            return new Bi(t, e);
        });
    var Ri = lt.extend({
            options: { padding: 0.1 },
            initialize: function (t) {
                p(this, t), r(this), (this._layers = this._layers || {});
            },
            onAdd: function () {
                this._container ||
                    (this._initContainer(),
                    this._zoomAnimated &&
                        oe(this._container, "leaflet-zoom-animated")),
                    this.getPane().appendChild(this._container),
                    this._update(),
                    this.on("update", this._updatePaths, this);
            },
            onRemove: function () {
                this.off("update", this._updatePaths, this),
                    this._destroyContainer();
            },
            getEvents: function () {
                var t = {
                    viewreset: this._reset,
                    zoom: this._onZoom,
                    moveend: this._update,
                    zoomend: this._onZoomEnd,
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
            },
            _onAnimZoom: function (t) {
                this._updateTransform(t.center, t.zoom);
            },
            _onZoom: function () {
                this._updateTransform(
                    this._map.getCenter(),
                    this._map.getZoom()
                );
            },
            _updateTransform: function (t, e) {
                var i = this._map.getZoomScale(e, this._zoom),
                    n = this._map
                        .getSize()
                        .multiplyBy(0.5 + this.options.padding),
                    o = this._map.project(this._center, e);
                n = n
                    .multiplyBy(-i)
                    .add(o)
                    .subtract(this._map._getNewPixelOrigin(t, e));
                Mt.any3d ? ue(this._container, n, i) : ce(this._container, n);
            },
            _reset: function () {
                for (var t in (this._update(),
                this._updateTransform(this._center, this._zoom),
                this._layers))
                    this._layers[t]._reset();
            },
            _onZoomEnd: function () {
                for (var t in this._layers) this._layers[t]._project();
            },
            _updatePaths: function () {
                for (var t in this._layers) this._layers[t]._update();
            },
            _update: function () {
                var t = this.options.padding,
                    e = this._map.getSize(),
                    i = this._map
                        .containerPointToLayerPoint(e.multiplyBy(-t))
                        .round();
                (this._bounds = new Z(
                    i,
                    i.add(e.multiplyBy(1 + 2 * t)).round()
                )),
                    (this._center = this._map.getCenter()),
                    (this._zoom = this._map.getZoom());
            },
        }),
        Di = Ri.extend({
            options: { tolerance: 0 },
            getEvents: function () {
                var t = Ri.prototype.getEvents.call(this);
                return (t.viewprereset = this._onViewPreReset), t;
            },
            _onViewPreReset: function () {
                this._postponeUpdatePaths = !0;
            },
            onAdd: function () {
                Ri.prototype.onAdd.call(this), this._draw();
            },
            _initContainer: function () {
                var t = (this._container = document.createElement("canvas"));
                ye(t, "mousemove", this._onMouseMove, this),
                    ye(
                        t,
                        "click dblclick mousedown mouseup contextmenu",
                        this._onClick,
                        this
                    ),
                    ye(t, "mouseout", this._handleMouseOut, this),
                    (t._leaflet_disable_events = !0),
                    (this._ctx = t.getContext("2d"));
            },
            _destroyContainer: function () {
                C(this._redrawRequest),
                    delete this._ctx,
                    $t(this._container),
                    be(this._container),
                    delete this._container;
            },
            _updatePaths: function () {
                if (!this._postponeUpdatePaths) {
                    for (var t in ((this._redrawBounds = null), this._layers))
                        this._layers[t]._update();
                    this._redraw();
                }
            },
            _update: function () {
                var t, e, i, n;
                (this._map._animatingZoom && this._bounds) ||
                    (Ri.prototype._update.call(this),
                    (t = this._bounds),
                    (e = this._container),
                    (i = t.getSize()),
                    (n = Mt.retina ? 2 : 1),
                    ce(e, t.min),
                    (e.width = n * i.x),
                    (e.height = n * i.y),
                    (e.style.width = i.x + "px"),
                    (e.style.height = i.y + "px"),
                    Mt.retina && this._ctx.scale(2, 2),
                    this._ctx.translate(-t.min.x, -t.min.y),
                    this.fire("update"));
            },
            _reset: function () {
                Ri.prototype._reset.call(this),
                    this._postponeUpdatePaths &&
                        ((this._postponeUpdatePaths = !1), this._updatePaths());
            },
            _initPath: function (t) {
                this._updateDashArray(t),
                    (t = (this._layers[r(t)] = t)._order =
                        { layer: t, prev: this._drawLast, next: null }),
                    this._drawLast && (this._drawLast.next = t),
                    (this._drawLast = t),
                    (this._drawFirst = this._drawFirst || this._drawLast);
            },
            _addPath: function (t) {
                this._requestRedraw(t);
            },
            _removePath: function (t) {
                var e = (i = t._order).next,
                    i = i.prev;
                e ? (e.prev = i) : (this._drawLast = i),
                    i ? (i.next = e) : (this._drawFirst = e),
                    delete t._order,
                    delete this._layers[r(t)],
                    this._requestRedraw(t);
            },
            _updatePath: function (t) {
                this._extendRedrawBounds(t),
                    t._project(),
                    t._update(),
                    this._requestRedraw(t);
            },
            _updateStyle: function (t) {
                this._updateDashArray(t), this._requestRedraw(t);
            },
            _updateDashArray: function (t) {
                if ("string" == typeof t.options.dashArray) {
                    for (
                        var e,
                            i = t.options.dashArray.split(/[, ]+/),
                            n = [],
                            o = 0;
                        o < i.length;
                        o++
                    ) {
                        if (((e = Number(i[o])), isNaN(e))) return;
                        n.push(e);
                    }
                    t.options._dashArray = n;
                } else t.options._dashArray = t.options.dashArray;
            },
            _requestRedraw: function (t) {
                this._map &&
                    (this._extendRedrawBounds(t),
                    (this._redrawRequest =
                        this._redrawRequest || S(this._redraw, this)));
            },
            _extendRedrawBounds: function (t) {
                var e;
                t._pxBounds &&
                    ((e = (t.options.weight || 0) + 1),
                    (this._redrawBounds = this._redrawBounds || new Z()),
                    this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                    this._redrawBounds.extend(t._pxBounds.max.add([e, e])));
            },
            _redraw: function () {
                (this._redrawRequest = null),
                    this._redrawBounds &&
                        (this._redrawBounds.min._floor(),
                        this._redrawBounds.max._ceil()),
                    this._clear(),
                    this._draw(),
                    (this._redrawBounds = null);
            },
            _clear: function () {
                var t,
                    e = this._redrawBounds;
                e
                    ? ((t = e.getSize()),
                      this._ctx.clearRect(e.min.x, e.min.y, t.x, t.y))
                    : (this._ctx.save(),
                      this._ctx.setTransform(1, 0, 0, 1, 0, 0),
                      this._ctx.clearRect(
                          0,
                          0,
                          this._container.width,
                          this._container.height
                      ),
                      this._ctx.restore());
            },
            _draw: function () {
                var t,
                    e,
                    i = this._redrawBounds;
                this._ctx.save(),
                    i &&
                        ((e = i.getSize()),
                        this._ctx.beginPath(),
                        this._ctx.rect(i.min.x, i.min.y, e.x, e.y),
                        this._ctx.clip()),
                    (this._drawing = !0);
                for (var n = this._drawFirst; n; n = n.next)
                    (t = n.layer),
                        (!i || (t._pxBounds && t._pxBounds.intersects(i))) &&
                            t._updatePath();
                (this._drawing = !1), this._ctx.restore();
            },
            _updatePoly: function (t, e) {
                if (this._drawing) {
                    var i,
                        n,
                        o,
                        s,
                        r = t._parts,
                        a = r.length,
                        h = this._ctx;
                    if (a) {
                        for (h.beginPath(), i = 0; i < a; i++) {
                            for (n = 0, o = r[i].length; n < o; n++)
                                (s = r[i][n]),
                                    h[n ? "lineTo" : "moveTo"](s.x, s.y);
                            e && h.closePath();
                        }
                        this._fillStroke(h, t);
                    }
                }
            },
            _updateCircle: function (t) {
                var e, i, n, o;
                this._drawing &&
                    !t._empty() &&
                    ((e = t._point),
                    (i = this._ctx),
                    (n = Math.max(Math.round(t._radius), 1)),
                    1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) &&
                        (i.save(), i.scale(1, o)),
                    i.beginPath(),
                    i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
                    1 != o && i.restore(),
                    this._fillStroke(i, t));
            },
            _fillStroke: function (t, e) {
                var i = e.options;
                i.fill &&
                    ((t.globalAlpha = i.fillOpacity),
                    (t.fillStyle = i.fillColor || i.color),
                    t.fill(i.fillRule || "evenodd")),
                    i.stroke &&
                        0 !== i.weight &&
                        (t.setLineDash &&
                            t.setLineDash(
                                (e.options && e.options._dashArray) || []
                            ),
                        (t.globalAlpha = i.opacity),
                        (t.lineWidth = i.weight),
                        (t.strokeStyle = i.color),
                        (t.lineCap = i.lineCap),
                        (t.lineJoin = i.lineJoin),
                        t.stroke());
            },
            _onClick: function (t) {
                for (
                    var e,
                        i,
                        n = this._map.mouseEventToLayerPoint(t),
                        o = this._drawFirst;
                    o;
                    o = o.next
                )
                    (e = o.layer).options.interactive &&
                        e._containsPoint(n) &&
                        ((("click" === t.type || "preclick" === t.type) &&
                            this._map._draggableMoved(e)) ||
                            (i = e));
                this._fireEvent(!!i && [i], t);
            },
            _onMouseMove: function (t) {
                var e;
                !this._map ||
                    this._map.dragging.moving() ||
                    this._map._animatingZoom ||
                    ((e = this._map.mouseEventToLayerPoint(t)),
                    this._handleMouseHover(t, e));
            },
            _handleMouseOut: function (t) {
                var e = this._hoveredLayer;
                e &&
                    (se(this._container, "leaflet-interactive"),
                    this._fireEvent([e], t, "mouseout"),
                    (this._hoveredLayer = null),
                    (this._mouseHoverThrottled = !1));
            },
            _handleMouseHover: function (t, e) {
                if (!this._mouseHoverThrottled) {
                    for (var i, n, s = this._drawFirst; s; s = s.next)
                        (i = s.layer).options.interactive &&
                            i._containsPoint(e) &&
                            (n = i);
                    n !== this._hoveredLayer &&
                        (this._handleMouseOut(t),
                        n &&
                            (oe(this._container, "leaflet-interactive"),
                            this._fireEvent([n], t, "mouseover"),
                            (this._hoveredLayer = n))),
                        this._fireEvent(
                            !!this._hoveredLayer && [this._hoveredLayer],
                            t
                        ),
                        (this._mouseHoverThrottled = !0),
                        setTimeout(
                            o(function () {
                                this._mouseHoverThrottled = !1;
                            }, this),
                            32
                        );
                }
            },
            _fireEvent: function (t, e, i) {
                this._map._fireDOMEvent(e, i || e.type, t);
            },
            _bringToFront: function (t) {
                var e,
                    i,
                    n = t._order;
                n &&
                    ((e = n.next),
                    (i = n.prev),
                    e &&
                        ((e.prev = i)
                            ? (i.next = e)
                            : e && (this._drawFirst = e),
                        (n.prev = this._drawLast),
                        ((this._drawLast.next = n).next = null),
                        (this._drawLast = n),
                        this._requestRedraw(t)));
            },
            _bringToBack: function (t) {
                var e,
                    i,
                    n = t._order;
                n &&
                    ((e = n.next),
                    (i = n.prev) &&
                        ((i.next = e)
                            ? (e.prev = i)
                            : i && (this._drawLast = i),
                        (n.prev = null),
                        (n.next = this._drawFirst),
                        (this._drawFirst.prev = n),
                        (this._drawFirst = n),
                        this._requestRedraw(t)));
            },
        });
    function Fi(t) {
        return Mt.canvas ? new Di(t) : null;
    }
    var Ni = (function () {
            try {
                return (
                    document.namespaces.add(
                        "lvml",
                        "urn:schemas-microsoft-com:vml"
                    ),
                    function (t) {
                        return document.createElement(
                            "<lvml:" + t + ' class="lvml">'
                        );
                    }
                );
            } catch (t) {}
            return function (t) {
                return document.createElement(
                    "<" +
                        t +
                        ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
                );
            };
        })(),
        Ui =
            ((dt = {
                _initContainer: function () {
                    this._container = Xt("div", "leaflet-vml-container");
                },
                _update: function () {
                    this._map._animatingZoom ||
                        (Ri.prototype._update.call(this), this.fire("update"));
                },
                _initPath: function (t) {
                    var e = (t._container = Ni("shape"));
                    oe(
                        e,
                        "leaflet-vml-shape " + (this.options.className || "")
                    ),
                        (e.coordsize = "1 1"),
                        (t._path = Ni("path")),
                        e.appendChild(t._path),
                        this._updateStyle(t),
                        (this._layers[r(t)] = t);
                },
                _addPath: function (t) {
                    var e = t._container;
                    this._container.appendChild(e),
                        t.options.interactive && t.addInteractiveTarget(e);
                },
                _removePath: function (t) {
                    var e = t._container;
                    $t(e),
                        t.removeInteractiveTarget(e),
                        delete this._layers[r(t)];
                },
                _updateStyle: function (t) {
                    var e = t._stroke,
                        i = t._fill,
                        n = t.options,
                        o = t._container;
                    (o.stroked = !!n.stroke),
                        (o.filled = !!n.fill),
                        n.stroke
                            ? ((e = e || (t._stroke = Ni("stroke"))),
                              o.appendChild(e),
                              (e.weight = n.weight + "px"),
                              (e.color = n.color),
                              (e.opacity = n.opacity),
                              n.dashArray
                                  ? (e.dashStyle = g(n.dashArray)
                                        ? n.dashArray.join(" ")
                                        : n.dashArray.replace(/( *, *)/g, " "))
                                  : (e.dashStyle = ""),
                              (e.endcap = n.lineCap.replace("butt", "flat")),
                              (e.joinstyle = n.lineJoin))
                            : e && (o.removeChild(e), (t._stroke = null)),
                        n.fill
                            ? ((i = i || (t._fill = Ni("fill"))),
                              o.appendChild(i),
                              (i.color = n.fillColor || n.color),
                              (i.opacity = n.fillOpacity))
                            : i && (o.removeChild(i), (t._fill = null));
                },
                _updateCircle: function (t) {
                    var e = t._point.round(),
                        i = Math.round(t._radius),
                        n = Math.round(t._radiusY || i);
                    this._setPath(
                        t,
                        t._empty()
                            ? "M0 0"
                            : "AL " +
                                  e.x +
                                  "," +
                                  e.y +
                                  " " +
                                  i +
                                  "," +
                                  n +
                                  " 0,23592600"
                    );
                },
                _setPath: function (t, e) {
                    t._path.v = e;
                },
                _bringToFront: function (t) {
                    ee(t._container);
                },
                _bringToBack: function (t) {
                    ie(t._container);
                },
            }),
            Mt.vml ? Ni : K),
        ji = Ri.extend({
            _initContainer: function () {
                (this._container = Ui("svg")),
                    this._container.setAttribute("pointer-events", "none"),
                    (this._rootGroup = Ui("g")),
                    this._container.appendChild(this._rootGroup);
            },
            _destroyContainer: function () {
                $t(this._container),
                    be(this._container),
                    delete this._container,
                    delete this._rootGroup,
                    delete this._svgSize;
            },
            _update: function () {
                var t, e, i;
                (this._map._animatingZoom && this._bounds) ||
                    (Ri.prototype._update.call(this),
                    (e = (t = this._bounds).getSize()),
                    (i = this._container),
                    (this._svgSize && this._svgSize.equals(e)) ||
                        ((this._svgSize = e),
                        i.setAttribute("width", e.x),
                        i.setAttribute("height", e.y)),
                    ce(i, t.min),
                    i.setAttribute(
                        "viewBox",
                        [t.min.x, t.min.y, e.x, e.y].join(" ")
                    ),
                    this.fire("update"));
            },
            _initPath: function (t) {
                var e = (t._path = Ui("path"));
                t.options.className && oe(e, t.options.className),
                    t.options.interactive && oe(e, "leaflet-interactive"),
                    this._updateStyle(t),
                    (this._layers[r(t)] = t);
            },
            _addPath: function (t) {
                this._rootGroup || this._initContainer(),
                    this._rootGroup.appendChild(t._path),
                    t.addInteractiveTarget(t._path);
            },
            _removePath: function (t) {
                $t(t._path),
                    t.removeInteractiveTarget(t._path),
                    delete this._layers[r(t)];
            },
            _updatePath: function (t) {
                t._project(), t._update();
            },
            _updateStyle: function (t) {
                var e = t._path;
                t = t.options;
                e &&
                    (t.stroke
                        ? (e.setAttribute("stroke", t.color),
                          e.setAttribute("stroke-opacity", t.opacity),
                          e.setAttribute("stroke-width", t.weight),
                          e.setAttribute("stroke-linecap", t.lineCap),
                          e.setAttribute("stroke-linejoin", t.lineJoin),
                          t.dashArray
                              ? e.setAttribute("stroke-dasharray", t.dashArray)
                              : e.removeAttribute("stroke-dasharray"),
                          t.dashOffset
                              ? e.setAttribute(
                                    "stroke-dashoffset",
                                    t.dashOffset
                                )
                              : e.removeAttribute("stroke-dashoffset"))
                        : e.setAttribute("stroke", "none"),
                    t.fill
                        ? (e.setAttribute("fill", t.fillColor || t.color),
                          e.setAttribute("fill-opacity", t.fillOpacity),
                          e.setAttribute("fill-rule", t.fillRule || "evenodd"))
                        : e.setAttribute("fill", "none"));
            },
            _updatePoly: function (t, e) {
                this._setPath(t, J(t._parts, e));
            },
            _updateCircle: function (t) {
                var e = t._point,
                    i = Math.max(Math.round(t._radius), 1),
                    n =
                        "a" +
                        i +
                        "," +
                        (Math.max(Math.round(t._radiusY), 1) || i) +
                        " 0 1,0 ";
                e = t._empty()
                    ? "M0 0"
                    : "M" +
                      (e.x - i) +
                      "," +
                      e.y +
                      n +
                      2 * i +
                      ",0 " +
                      n +
                      2 * -i +
                      ",0 ";
                this._setPath(t, e);
            },
            _setPath: function (t, e) {
                t._path.setAttribute("d", e);
            },
            _bringToFront: function (t) {
                ee(t._path);
            },
            _bringToBack: function (t) {
                ie(t._path);
            },
        });
    function Gi(t) {
        return Mt.svg || Mt.vml ? new ji(t) : null;
    }
    Mt.vml && ji.include(dt),
        Re.include({
            getRenderer: function (t) {
                return (
                    (t =
                        (t =
                            t.options.renderer ||
                            this._getPaneRenderer(t.options.pane) ||
                            this.options.renderer ||
                            this._renderer) ||
                        (this._renderer = this._createRenderer())),
                    this.hasLayer(t) || this.addLayer(t),
                    t
                );
            },
            _getPaneRenderer: function (t) {
                var e;
                return (
                    "overlayPane" !== t &&
                    void 0 !== t &&
                    (void 0 === (e = this._paneRenderers[t]) &&
                        ((e = this._createRenderer({ pane: t })),
                        (this._paneRenderers[t] = e)),
                    e)
                );
            },
            _createRenderer: function (t) {
                return (this.options.preferCanvas && Fi(t)) || Gi(t);
            },
        });
    var qi = mi.extend({
        initialize: function (t, e) {
            mi.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
        },
        setBounds: function (t) {
            return this.setLatLngs(this._boundsToLatLngs(t));
        },
        _boundsToLatLngs: function (t) {
            return [
                (t = D(t)).getSouthWest(),
                t.getNorthWest(),
                t.getNorthEast(),
                t.getSouthEast(),
            ];
        },
    });
    (ji.create = Ui),
        (ji.pointsToPath = J),
        (fi.geometryToLayer = gi),
        (fi.coordsToLatLng = yi),
        (fi.coordsToLatLngs = xi),
        (fi.latLngToCoords = bi),
        (fi.latLngsToCoords = wi),
        (fi.getFeature = Li),
        (fi.asFeature = Pi),
        Re.mergeOptions({ boxZoom: !0 });
    (Y = $.extend({
        initialize: function (t) {
            (this._map = t),
                (this._container = t._container),
                (this._pane = t._panes.overlayPane),
                (this._resetStateTimeout = 0),
                t.on("unload", this._destroy, this);
        },
        addHooks: function () {
            ye(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function () {
            be(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function () {
            return this._moved;
        },
        _destroy: function () {
            $t(this._pane), delete this._pane;
        },
        _resetState: function () {
            (this._resetStateTimeout = 0), (this._moved = !1);
        },
        _clearDeferredResetState: function () {
            0 !== this._resetStateTimeout &&
                (clearTimeout(this._resetStateTimeout),
                (this._resetStateTimeout = 0));
        },
        _onMouseDown: function (t) {
            if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
            this._clearDeferredResetState(),
                this._resetState(),
                Gt(),
                pe(),
                (this._startPoint = this._map.mouseEventToContainerPoint(t)),
                ye(
                    document,
                    {
                        contextmenu: ze,
                        mousemove: this._onMouseMove,
                        mouseup: this._onMouseUp,
                        keydown: this._onKeyDown,
                    },
                    this
                );
        },
        _onMouseMove: function (t) {
            this._moved ||
                ((this._moved = !0),
                (this._box = Xt("div", "leaflet-zoom-box", this._container)),
                oe(this._container, "leaflet-crosshair"),
                this._map.fire("boxzoomstart")),
                (this._point = this._map.mouseEventToContainerPoint(t));
            var e = (t = new Z(this._point, this._startPoint)).getSize();
            ce(this._box, t.min),
                (this._box.style.width = e.x + "px"),
                (this._box.style.height = e.y + "px");
        },
        _finish: function () {
            this._moved &&
                ($t(this._box), se(this._container, "leaflet-crosshair")),
                qt(),
                _e(),
                be(
                    document,
                    {
                        contextmenu: ze,
                        mousemove: this._onMouseMove,
                        mouseup: this._onMouseUp,
                        keydown: this._onKeyDown,
                    },
                    this
                );
        },
        _onMouseUp: function (t) {
            (1 !== t.which && 1 !== t.button) ||
                (this._finish(),
                this._moved &&
                    (this._clearDeferredResetState(),
                    (this._resetStateTimeout = setTimeout(
                        o(this._resetState, this),
                        0
                    )),
                    (t = new R(
                        this._map.containerPointToLatLng(this._startPoint),
                        this._map.containerPointToLatLng(this._point)
                    )),
                    this._map
                        .fitBounds(t)
                        .fire("boxzoomend", { boxZoomBounds: t })));
        },
        _onKeyDown: function (t) {
            27 === t.keyCode &&
                (this._finish(),
                this._clearDeferredResetState(),
                this._resetState());
        },
    })),
        Re.addInitHook("addHandler", "boxZoom", Y),
        Re.mergeOptions({ doubleClickZoom: !0 }),
        (pt = $.extend({
            addHooks: function () {
                this._map.on("dblclick", this._onDoubleClick, this);
            },
            removeHooks: function () {
                this._map.off("dblclick", this._onDoubleClick, this);
            },
            _onDoubleClick: function (t) {
                var e = this._map,
                    i = e.getZoom(),
                    n = e.options.zoomDelta;
                i = t.originalEvent.shiftKey ? i - n : i + n;
                "center" === e.options.doubleClickZoom
                    ? e.setZoom(i)
                    : e.setZoomAround(t.containerPoint, i);
            },
        }));
    var Wi =
            (Re.addInitHook("addHandler", "doubleClickZoom", pt),
            Re.mergeOptions({
                dragging: !0,
                inertia: !0,
                inertiaDeceleration: 3400,
                inertiaMaxSpeed: 1 / 0,
                easeLinearity: 0.2,
                worldCopyJump: !1,
                maxBoundsViscosity: 0,
            }),
            $.extend({
                addHooks: function () {
                    var t;
                    this._draggable ||
                        ((t = this._map),
                        (this._draggable = new He(t._mapPane, t._container)),
                        this._draggable.on(
                            {
                                dragstart: this._onDragStart,
                                drag: this._onDrag,
                                dragend: this._onDragEnd,
                            },
                            this
                        ),
                        this._draggable.on(
                            "predrag",
                            this._onPreDragLimit,
                            this
                        ),
                        t.options.worldCopyJump &&
                            (this._draggable.on(
                                "predrag",
                                this._onPreDragWrap,
                                this
                            ),
                            t.on("zoomend", this._onZoomEnd, this),
                            t.whenReady(this._onZoomEnd, this))),
                        oe(
                            this._map._container,
                            "leaflet-grab leaflet-touch-drag"
                        ),
                        this._draggable.enable(),
                        (this._positions = []),
                        (this._times = []);
                },
                removeHooks: function () {
                    se(this._map._container, "leaflet-grab"),
                        se(this._map._container, "leaflet-touch-drag"),
                        this._draggable.disable();
                },
                moved: function () {
                    return this._draggable && this._draggable._moved;
                },
                moving: function () {
                    return this._draggable && this._draggable._moving;
                },
                _onDragStart: function () {
                    var t,
                        e = this._map;
                    e._stop(),
                        this._map.options.maxBounds &&
                        this._map.options.maxBoundsViscosity
                            ? ((t = D(this._map.options.maxBounds)),
                              (this._offsetLimit = B(
                                  this._map
                                      .latLngToContainerPoint(t.getNorthWest())
                                      .multiplyBy(-1),
                                  this._map
                                      .latLngToContainerPoint(t.getSouthEast())
                                      .multiplyBy(-1)
                                      .add(this._map.getSize())
                              )),
                              (this._viscosity = Math.min(
                                  1,
                                  Math.max(
                                      0,
                                      this._map.options.maxBoundsViscosity
                                  )
                              )))
                            : (this._offsetLimit = null),
                        e.fire("movestart").fire("dragstart"),
                        e.options.inertia &&
                            ((this._positions = []), (this._times = []));
                },
                _onDrag: function (t) {
                    var e, i;
                    this._map.options.inertia &&
                        ((e = this._lastTime = +new Date()),
                        (i = this._lastPos =
                            this._draggable._absPos || this._draggable._newPos),
                        this._positions.push(i),
                        this._times.push(e),
                        this._prunePositions(e)),
                        this._map.fire("move", t).fire("drag", t);
                },
                _prunePositions: function (t) {
                    for (
                        ;
                        1 < this._positions.length && 50 < t - this._times[0];

                    )
                        this._positions.shift(), this._times.shift();
                },
                _onZoomEnd: function () {
                    var t = this._map.getSize().divideBy(2),
                        e = this._map.latLngToLayerPoint([0, 0]);
                    (this._initialWorldOffset = e.subtract(t).x),
                        (this._worldWidth = this._map
                            .getPixelWorldBounds()
                            .getSize().x);
                },
                _viscousLimit: function (t, e) {
                    return t - (t - e) * this._viscosity;
                },
                _onPreDragLimit: function () {
                    var t, e;
                    this._viscosity &&
                        this._offsetLimit &&
                        ((t = this._draggable._newPos.subtract(
                            this._draggable._startPos
                        )),
                        (e = this._offsetLimit),
                        t.x < e.min.x &&
                            (t.x = this._viscousLimit(t.x, e.min.x)),
                        t.y < e.min.y &&
                            (t.y = this._viscousLimit(t.y, e.min.y)),
                        t.x > e.max.x &&
                            (t.x = this._viscousLimit(t.x, e.max.x)),
                        t.y > e.max.y &&
                            (t.y = this._viscousLimit(t.y, e.max.y)),
                        (this._draggable._newPos =
                            this._draggable._startPos.add(t)));
                },
                _onPreDragWrap: function () {
                    var t = this._worldWidth,
                        e = Math.round(t / 2),
                        i = this._initialWorldOffset,
                        n =
                            (((o = this._draggable._newPos.x) - e + i) % t) +
                            e -
                            i,
                        o = ((o + e + i) % t) - e - i;
                    t = Math.abs(n + i) < Math.abs(o + i) ? n : o;
                    (this._draggable._absPos = this._draggable._newPos.clone()),
                        (this._draggable._newPos.x = t);
                },
                _onDragEnd: function (t) {
                    var e,
                        i,
                        n,
                        o,
                        s = this._map,
                        r = s.options,
                        a = !r.inertia || t.noInertia || this._times.length < 2;
                    s.fire("dragend", t),
                        !a &&
                        (this._prunePositions(+new Date()),
                        (t = this._lastPos.subtract(this._positions[0])),
                        (a = (this._lastTime - this._times[0]) / 1e3),
                        (e = r.easeLinearity),
                        (a = (t = t.multiplyBy(e / a)).distanceTo([0, 0])),
                        (i = Math.min(r.inertiaMaxSpeed, a)),
                        (t = t.multiplyBy(i / a)),
                        (n = i / (r.inertiaDeceleration * e)),
                        (o = t.multiplyBy(-n / 2).round()).x || o.y)
                            ? ((o = s._limitOffset(o, s.options.maxBounds)),
                              S(function () {
                                  s.panBy(o, {
                                      duration: n,
                                      easeLinearity: e,
                                      noMoveStart: !0,
                                      animate: !0,
                                  });
                              }))
                            : s.fire("moveend");
                },
            })),
        Hi =
            ((_t =
                (Re.addInitHook("addHandler", "dragging", Wi),
                Re.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 }),
                $.extend({
                    keyCodes: {
                        left: [37],
                        right: [39],
                        down: [40],
                        up: [38],
                        zoomIn: [187, 107, 61, 171],
                        zoomOut: [189, 109, 54, 173],
                    },
                    initialize: function (t) {
                        (this._map = t),
                            this._setPanDelta(t.options.keyboardPanDelta),
                            this._setZoomDelta(t.options.zoomDelta);
                    },
                    addHooks: function () {
                        var t = this._map._container;
                        t.tabIndex <= 0 && (t.tabIndex = "0"),
                            ye(
                                t,
                                {
                                    focus: this._onFocus,
                                    blur: this._onBlur,
                                    mousedown: this._onMouseDown,
                                },
                                this
                            ),
                            this._map.on(
                                {
                                    focus: this._addHooks,
                                    blur: this._removeHooks,
                                },
                                this
                            );
                    },
                    removeHooks: function () {
                        this._removeHooks(),
                            be(
                                this._map._container,
                                {
                                    focus: this._onFocus,
                                    blur: this._onBlur,
                                    mousedown: this._onMouseDown,
                                },
                                this
                            ),
                            this._map.off(
                                {
                                    focus: this._addHooks,
                                    blur: this._removeHooks,
                                },
                                this
                            );
                    },
                    _onMouseDown: function () {
                        var t, e, i;
                        this._focused ||
                            ((i = document.body),
                            (t = document.documentElement),
                            (e = i.scrollTop || t.scrollTop),
                            (i = i.scrollLeft || t.scrollLeft),
                            this._map._container.focus(),
                            window.scrollTo(i, e));
                    },
                    _onFocus: function () {
                        (this._focused = !0), this._map.fire("focus");
                    },
                    _onBlur: function () {
                        (this._focused = !1), this._map.fire("blur");
                    },
                    _setPanDelta: function (t) {
                        for (
                            var e = (this._panKeys = {}),
                                i = this.keyCodes,
                                n = 0,
                                o = i.left.length;
                            n < o;
                            n++
                        )
                            e[i.left[n]] = [-1 * t, 0];
                        for (n = 0, o = i.right.length; n < o; n++)
                            e[i.right[n]] = [t, 0];
                        for (n = 0, o = i.down.length; n < o; n++)
                            e[i.down[n]] = [0, t];
                        for (n = 0, o = i.up.length; n < o; n++)
                            e[i.up[n]] = [0, -1 * t];
                    },
                    _setZoomDelta: function (t) {
                        for (
                            var e = (this._zoomKeys = {}),
                                i = this.keyCodes,
                                n = 0,
                                o = i.zoomIn.length;
                            n < o;
                            n++
                        )
                            e[i.zoomIn[n]] = t;
                        for (n = 0, o = i.zoomOut.length; n < o; n++)
                            e[i.zoomOut[n]] = -t;
                    },
                    _addHooks: function () {
                        ye(document, "keydown", this._onKeyDown, this);
                    },
                    _removeHooks: function () {
                        be(document, "keydown", this._onKeyDown, this);
                    },
                    _onKeyDown: function (t) {
                        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                            var e,
                                i = t.keyCode,
                                n = this._map;
                            if (i in this._panKeys)
                                (n._panAnim && n._panAnim._inProgress) ||
                                    ((e = this._panKeys[i]),
                                    t.shiftKey && (e = O(e).multiplyBy(3)),
                                    n.panBy(e),
                                    n.options.maxBounds &&
                                        n.panInsideBounds(n.options.maxBounds));
                            else if (i in this._zoomKeys)
                                n.setZoom(
                                    n.getZoom() +
                                        (t.shiftKey ? 3 : 1) * this._zoomKeys[i]
                                );
                            else {
                                if (
                                    27 !== i ||
                                    !n._popup ||
                                    !n._popup.options.closeOnEscapeKey
                                )
                                    return;
                                n.closePopup();
                            }
                            ze(t);
                        }
                    },
                }))),
            (mt =
                (Re.addInitHook("addHandler", "keyboard", _t),
                Re.mergeOptions({
                    scrollWheelZoom: !0,
                    wheelDebounceTime: 40,
                    wheelPxPerZoomLevel: 60,
                }),
                $.extend({
                    addHooks: function () {
                        ye(
                            this._map._container,
                            "wheel",
                            this._onWheelScroll,
                            this
                        ),
                            (this._delta = 0);
                    },
                    removeHooks: function () {
                        be(
                            this._map._container,
                            "wheel",
                            this._onWheelScroll,
                            this
                        );
                    },
                    _onWheelScroll: function (t) {
                        var e = Oe(t),
                            i = this._map.options.wheelDebounceTime;
                        (this._delta += e),
                            (this._lastMousePos =
                                this._map.mouseEventToContainerPoint(t)),
                            this._startTime || (this._startTime = +new Date()),
                            (e = Math.max(
                                i - (+new Date() - this._startTime),
                                0
                            ));
                        clearTimeout(this._timer),
                            (this._timer = setTimeout(
                                o(this._performZoom, this),
                                e
                            )),
                            ze(t);
                    },
                    _performZoom: function () {
                        var t = this._map,
                            e = t.getZoom(),
                            i = this._map.options.zoomSnap || 0,
                            n =
                                (t._stop(),
                                this._delta /
                                    (4 *
                                        this._map.options.wheelPxPerZoomLevel));
                        (n =
                            (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) /
                            Math.LN2),
                            (i = i ? Math.ceil(n / i) * i : n),
                            (n =
                                t._limitZoom(e + (0 < this._delta ? i : -i)) -
                                e);
                        (this._delta = 0),
                            (this._startTime = null),
                            n &&
                                ("center" === t.options.scrollWheelZoom
                                    ? t.setZoom(e + n)
                                    : t.setZoomAround(
                                          this._lastMousePos,
                                          e + n
                                      ));
                    },
                }))),
            (ft =
                (Re.addInitHook("addHandler", "scrollWheelZoom", mt),
                Re.mergeOptions({
                    tapHold: Mt.touchNative && Mt.safari && Mt.mobile,
                    tapTolerance: 15,
                }),
                $.extend({
                    addHooks: function () {
                        ye(
                            this._map._container,
                            "touchstart",
                            this._onDown,
                            this
                        );
                    },
                    removeHooks: function () {
                        be(
                            this._map._container,
                            "touchstart",
                            this._onDown,
                            this
                        );
                    },
                    _onDown: function (t) {
                        var e;
                        clearTimeout(this._holdTimeout),
                            1 === t.touches.length &&
                                ((e = t.touches[0]),
                                (this._startPos = this._newPos =
                                    new k(e.clientX, e.clientY)),
                                (this._holdTimeout = setTimeout(
                                    o(function () {
                                        this._cancel(),
                                            this._isTapValid() &&
                                                (ye(document, "touchend", Ae),
                                                ye(
                                                    document,
                                                    "touchend touchcancel",
                                                    this._cancelClickPrevent
                                                ),
                                                this._simulateEvent(
                                                    "contextmenu",
                                                    e
                                                ));
                                    }, this),
                                    600
                                )),
                                ye(
                                    document,
                                    "touchend touchcancel contextmenu",
                                    this._cancel,
                                    this
                                ),
                                ye(document, "touchmove", this._onMove, this));
                    },
                    _cancelClickPrevent: function t() {
                        be(document, "touchend", Ae),
                            be(document, "touchend touchcancel", t);
                    },
                    _cancel: function () {
                        clearTimeout(this._holdTimeout),
                            be(
                                document,
                                "touchend touchcancel contextmenu",
                                this._cancel,
                                this
                            ),
                            be(document, "touchmove", this._onMove, this);
                    },
                    _onMove: function (t) {
                        (t = t.touches[0]),
                            (this._newPos = new k(t.clientX, t.clientY));
                    },
                    _isTapValid: function () {
                        return (
                            this._newPos.distanceTo(this._startPos) <=
                            this._map.options.tapTolerance
                        );
                    },
                    _simulateEvent: function (t, e) {
                        ((t = new MouseEvent(t, {
                            bubbles: !0,
                            cancelable: !0,
                            view: window,
                            screenX: e.screenX,
                            screenY: e.screenY,
                            clientX: e.clientX,
                            clientY: e.clientY,
                        }))._simulated = !0),
                            e.target.dispatchEvent(t);
                    },
                }))),
            (gt =
                (Re.addInitHook("addHandler", "tapHold", ft),
                Re.mergeOptions({
                    touchZoom: Mt.touch,
                    bounceAtZoomLimits: !0,
                }),
                $.extend({
                    addHooks: function () {
                        oe(this._map._container, "leaflet-touch-zoom"),
                            ye(
                                this._map._container,
                                "touchstart",
                                this._onTouchStart,
                                this
                            );
                    },
                    removeHooks: function () {
                        se(this._map._container, "leaflet-touch-zoom"),
                            be(
                                this._map._container,
                                "touchstart",
                                this._onTouchStart,
                                this
                            );
                    },
                    _onTouchStart: function (t) {
                        var e,
                            i,
                            n = this._map;
                        !t.touches ||
                            2 !== t.touches.length ||
                            n._animatingZoom ||
                            this._zooming ||
                            ((e = n.mouseEventToContainerPoint(t.touches[0])),
                            (i = n.mouseEventToContainerPoint(t.touches[1])),
                            (this._centerPoint = n.getSize()._divideBy(2)),
                            (this._startLatLng = n.containerPointToLatLng(
                                this._centerPoint
                            )),
                            "center" !== n.options.touchZoom &&
                                (this._pinchStartLatLng =
                                    n.containerPointToLatLng(
                                        e.add(i)._divideBy(2)
                                    )),
                            (this._startDist = e.distanceTo(i)),
                            (this._startZoom = n.getZoom()),
                            (this._moved = !1),
                            (this._zooming = !0),
                            n._stop(),
                            ye(document, "touchmove", this._onTouchMove, this),
                            ye(
                                document,
                                "touchend touchcancel",
                                this._onTouchEnd,
                                this
                            ),
                            Ae(t));
                    },
                    _onTouchMove: function (t) {
                        if (
                            t.touches &&
                            2 === t.touches.length &&
                            this._zooming
                        ) {
                            var e = this._map,
                                i = e.mouseEventToContainerPoint(t.touches[0]),
                                n = e.mouseEventToContainerPoint(t.touches[1]),
                                s = i.distanceTo(n) / this._startDist;
                            if (
                                ((this._zoom = e.getScaleZoom(
                                    s,
                                    this._startZoom
                                )),
                                !e.options.bounceAtZoomLimits &&
                                    ((this._zoom < e.getMinZoom() && s < 1) ||
                                        (this._zoom > e.getMaxZoom() &&
                                            1 < s)) &&
                                    (this._zoom = e._limitZoom(this._zoom)),
                                "center" === e.options.touchZoom)
                            ) {
                                if (
                                    ((this._center = this._startLatLng), 1 == s)
                                )
                                    return;
                            } else {
                                if (
                                    ((i = i
                                        ._add(n)
                                        ._divideBy(2)
                                        ._subtract(this._centerPoint)),
                                    1 == s && 0 === i.x && 0 === i.y)
                                )
                                    return;
                                this._center = e.unproject(
                                    e
                                        .project(
                                            this._pinchStartLatLng,
                                            this._zoom
                                        )
                                        .subtract(i),
                                    this._zoom
                                );
                            }
                            this._moved ||
                                (e._moveStart(!0, !1), (this._moved = !0)),
                                C(this._animRequest),
                                (n = o(
                                    e._move,
                                    e,
                                    this._center,
                                    this._zoom,
                                    { pinch: !0, round: !1 },
                                    void 0
                                )),
                                (this._animRequest = S(n, this, !0)),
                                Ae(t);
                        }
                    },
                    _onTouchEnd: function () {
                        this._moved && this._zooming
                            ? ((this._zooming = !1),
                              C(this._animRequest),
                              be(
                                  document,
                                  "touchmove",
                                  this._onTouchMove,
                                  this
                              ),
                              be(
                                  document,
                                  "touchend touchcancel",
                                  this._onTouchEnd,
                                  this
                              ),
                              this._map.options.zoomAnimation
                                  ? this._map._animateZoom(
                                        this._center,
                                        this._map._limitZoom(this._zoom),
                                        !0,
                                        this._map.options.zoomSnap
                                    )
                                  : this._map._resetView(
                                        this._center,
                                        this._map._limitZoom(this._zoom)
                                    ))
                            : (this._zooming = !1);
                    },
                }))),
            Re.addInitHook("addHandler", "touchZoom", gt),
            (Re.BoxZoom = Y),
            (Re.DoubleClickZoom = pt),
            (Re.Drag = Wi),
            (Re.Keyboard = _t),
            (Re.ScrollWheelZoom = mt),
            (Re.TapHold = ft),
            (Re.TouchZoom = gt),
            (t.Bounds = Z),
            (t.Browser = Mt),
            (t.CRS = U),
            (t.Canvas = Di),
            (t.Circle = pi),
            (t.CircleMarker = di),
            (t.Class = A),
            (t.Control = Ne),
            (t.DivIcon = ki),
            (t.DivOverlay = Ai),
            (t.DomEvent = X),
            (t.DomUtil = Q),
            (t.Draggable = He),
            (t.Evented = I),
            (t.FeatureGroup = ri),
            (t.GeoJSON = fi),
            (t.GridLayer = Ei),
            (t.Handler = $),
            (t.Icon = ai),
            (t.ImageOverlay = Si),
            (t.LatLng = F),
            (t.LatLngBounds = R),
            (t.Layer = lt),
            (t.LayerGroup = si),
            (t.LineUtil = et),
            (t.Map = Re),
            (t.Marker = ui),
            (t.Mixin = tt),
            (t.Path = ci),
            (t.Point = k),
            (t.PolyUtil = it),
            (t.Polygon = mi),
            (t.Polyline = _i),
            (t.Popup = zi),
            (t.PosAnimation = Be),
            (t.Projection = st),
            (t.Rectangle = qi),
            (t.Renderer = Ri),
            (t.SVG = ji),
            (t.SVGOverlay = Mi),
            (t.TileLayer = Oi),
            (t.Tooltip = Ii),
            (t.Transformation = q),
            (t.Util = M),
            (t.VideoOverlay = Ci),
            (t.bind = o),
            (t.bounds = B),
            (t.canvas = Fi),
            (t.circle = function (t, e, i) {
                return new pi(t, e, i);
            }),
            (t.circleMarker = function (t, e) {
                return new di(t, e);
            }),
            (t.control = De),
            (t.divIcon = function (t) {
                return new ki(t);
            }),
            (t.extend = e),
            (t.featureGroup = function (t, e) {
                return new ri(t, e);
            }),
            (t.geoJSON = Ti),
            (t.geoJson = ct),
            (t.gridLayer = function (t) {
                return new Ei(t);
            }),
            (t.icon = function (t) {
                return new ai(t);
            }),
            (t.imageOverlay = function (t, e, i) {
                return new Si(t, e, i);
            }),
            (t.latLng = N),
            (t.latLngBounds = D),
            (t.layerGroup = function (t, e) {
                return new si(t, e);
            }),
            (t.map = function (t, e) {
                return new Re(t, e);
            }),
            (t.marker = function (t, e) {
                return new ui(t, e);
            }),
            (t.point = O),
            (t.polygon = function (t, e) {
                return new mi(t, e);
            }),
            (t.polyline = function (t, e) {
                return new _i(t, e);
            }),
            (t.popup = function (t, e) {
                return new zi(t, e);
            }),
            (t.rectangle = function (t, e) {
                return new qi(t, e);
            }),
            (t.setOptions = p),
            (t.stamp = r),
            (t.svg = Gi),
            (t.svgOverlay = function (t, e, i) {
                return new Mi(t, e, i);
            }),
            (t.tileLayer = Zi),
            (t.tooltip = function (t, e) {
                return new Ii(t, e);
            }),
            (t.transformation = W),
            (t.version = "1.9.2"),
            (t.videoOverlay = function (t, e, i) {
                return new Ci(t, e, i);
            }),
            window.L);
    (t.noConflict = function () {
        return (window.L = Hi), this;
    }),
        (window.L = t);
}),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module
            ? e(exports, require("leaflet"))
            : "function" == typeof define && define.amd
            ? define(["exports", "leaflet"], e)
            : e(
                  (((t =
                      "undefined" != typeof globalThis
                          ? globalThis
                          : t || self).L = t.L || {}),
                  (t.L.esri = {})),
                  t.L
              );
    })(this, function (t, e) {
        "use strict";
        var i =
                window.XMLHttpRequest &&
                "withCredentials" in new window.XMLHttpRequest(),
            n = "" === document.documentElement.style.pointerEvents,
            o = { cors: i, pointerEvents: n },
            s = { attributionWidthOffset: 55 },
            r = 0;
        function a(t) {
            var e = "";
            for (var i in ((t.f = t.f || "json"), t))
                if (Object.prototype.hasOwnProperty.call(t, i)) {
                    var n,
                        o = t[i],
                        s = Object.prototype.toString.call(o);
                    e.length && (e += "&"),
                        (n =
                            "[object Array]" === s
                                ? "[object Object]" ===
                                  Object.prototype.toString.call(o[0])
                                    ? JSON.stringify(o)
                                    : o.join(",")
                                : "[object Object]" === s
                                ? JSON.stringify(o)
                                : "[object Date]" === s
                                ? o.valueOf()
                                : o),
                        (e +=
                            encodeURIComponent(i) +
                            "=" +
                            encodeURIComponent(n));
                }
            return e;
        }
        function h(t, i) {
            var n = new window.XMLHttpRequest();
            return (
                (n.onerror = function (o) {
                    (n.onreadystatechange = e.Util.falseFn),
                        t.call(
                            i,
                            {
                                error: {
                                    code: 500,
                                    message: "XMLHttpRequest error",
                                },
                            },
                            null
                        );
                }),
                (n.onreadystatechange = function () {
                    var o, s;
                    if (4 === n.readyState) {
                        try {
                            o = JSON.parse(n.responseText);
                        } catch (t) {
                            (o = null),
                                (s = {
                                    code: 500,
                                    message:
                                        "Could not parse response as JSON. This could also be caused by a CORS or XMLHttpRequest error.",
                                });
                        }
                        !s && o.error && ((s = o.error), (o = null)),
                            (n.onerror = e.Util.falseFn),
                            t.call(i, s, o);
                    }
                }),
                (n.ontimeout = function () {
                    this.onerror();
                }),
                n
            );
        }
        function l(t, e, i, n) {
            var o = h(i, n);
            return (
                o.open("POST", t),
                null != n &&
                    void 0 !== n.options &&
                    (o.timeout = n.options.timeout),
                o.setRequestHeader(
                    "Content-Type",
                    "application/x-www-form-urlencoded; charset=UTF-8"
                ),
                o.send(a(e)),
                o
            );
        }
        function u(t, e, i, n) {
            var o = h(i, n);
            return (
                o.open("GET", t + "?" + a(e), !0),
                null != n &&
                    void 0 !== n.options &&
                    ((o.timeout = n.options.timeout),
                    n.options.withCredentials && (o.withCredentials = !0)),
                o.send(null),
                o
            );
        }
        function c(t, e, i, n) {
            var s = a(e),
                r = h(i, n),
                l = (t + "?" + s).length;
            if (
                (l <= 2e3 && o.cors
                    ? r.open("GET", t + "?" + s)
                    : l > 2e3 &&
                      o.cors &&
                      (r.open("POST", t),
                      r.setRequestHeader(
                          "Content-Type",
                          "application/x-www-form-urlencoded; charset=UTF-8"
                      )),
                null != n &&
                    void 0 !== n.options &&
                    ((r.timeout = n.options.timeout),
                    n.options.withCredentials && (r.withCredentials = !0)),
                l <= 2e3 && o.cors)
            )
                r.send(null);
            else {
                if (!(l > 2e3 && o.cors))
                    return l <= 2e3 && !o.cors
                        ? d(t, e, i, n)
                        : void _(
                              "a request to " +
                                  t +
                                  " was longer then 2000 characters and this browser cannot make a cross-domain post request. Please use a proxy https://developers.arcgis.com/esri-leaflet/api-reference/request/"
                          );
                r.send(s);
            }
            return r;
        }
        function d(t, i, n, o) {
            window._EsriLeafletCallbacks = window._EsriLeafletCallbacks || {};
            var s = "c" + r;
            (i.callback = "window._EsriLeafletCallbacks." + s),
                (window._EsriLeafletCallbacks[s] = function (t) {
                    if (!0 !== window._EsriLeafletCallbacks[s]) {
                        var e,
                            i = Object.prototype.toString.call(t);
                        "[object Object]" !== i &&
                            "[object Array]" !== i &&
                            ((e = {
                                error: {
                                    code: 500,
                                    message:
                                        "Expected array or object as JSONP response",
                                },
                            }),
                            (t = null)),
                            !e && t.error && ((e = t), (t = null)),
                            n.call(o, e, t),
                            (window._EsriLeafletCallbacks[s] = !0);
                    }
                });
            var h = e.DomUtil.create("script", null, document.body);
            return (
                (h.type = "text/javascript"),
                (h.src = t + "?" + a(i)),
                (h.id = s),
                (h.onerror = function (t) {
                    t &&
                        !0 !== window._EsriLeafletCallbacks[s] &&
                        (n.call(o, {
                            error: {
                                code: 500,
                                message: "An unknown error occurred",
                            },
                        }),
                        (window._EsriLeafletCallbacks[s] = !0));
                }),
                e.DomUtil.addClass(h, "esri-leaflet-jsonp"),
                r++,
                {
                    id: s,
                    url: h.src,
                    abort: function () {
                        window._EsriLeafletCallbacks._callback[s]({
                            code: 0,
                            message: "Request aborted.",
                        });
                    },
                }
            );
        }
        var p = o.cors ? u : d;
        function _() {
            console && console.warn && console.warn.apply(console, arguments);
        }
        (p.CORS = u), (p.JSONP = d);
        var m = { request: c, get: p, post: l },
            f = function (t, e, i, n) {
                var o =
                        (n[0] - i[0]) * (t[1] - i[1]) -
                        (n[1] - i[1]) * (t[0] - i[0]),
                    s =
                        (e[0] - t[0]) * (t[1] - i[1]) -
                        (e[1] - t[1]) * (t[0] - i[0]),
                    r =
                        (n[1] - i[1]) * (e[0] - t[0]) -
                        (n[0] - i[0]) * (e[1] - t[1]);
                if (0 !== r) {
                    var a = o / r,
                        h = s / r;
                    if (a >= 0 && a <= 1 && h >= 0 && h <= 1) return !0;
                }
                return !1;
            },
            g = function (t, e) {
                for (var i = 0; i < t.length - 1; i++)
                    for (var n = 0; n < e.length - 1; n++)
                        if (f(t[i], t[i + 1], e[n], e[n + 1])) return !0;
                return !1;
            },
            v = function (t) {
                return (
                    (function (t, e) {
                        for (var i = 0; i < t.length; i++)
                            if (t[i] !== e[i]) return !1;
                        return !0;
                    })(t[0], t[t.length - 1]) || t.push(t[0]),
                    t
                );
            },
            y = function (t) {
                for (
                    var e, i = 0, n = 0, o = t.length, s = t[n];
                    n < o - 1;
                    n++
                )
                    (i += ((e = t[n + 1])[0] - s[0]) * (e[1] + s[1])), (s = e);
                return i >= 0;
            },
            x = function (t) {
                var e = {};
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                return e;
            },
            b = function (t, e) {
                var i = g(t, e),
                    n = (function (t, e) {
                        for (
                            var i = !1, n = -1, o = t.length, s = o - 1;
                            ++n < o;
                            s = n
                        )
                            ((t[n][1] <= e[1] && e[1] < t[s][1]) ||
                                (t[s][1] <= e[1] && e[1] < t[n][1])) &&
                                e[0] <
                                    ((t[s][0] - t[n][0]) * (e[1] - t[n][1])) /
                                        (t[s][1] - t[n][1]) +
                                        t[n][0] &&
                                (i = !i);
                        return i;
                    })(t, e[0]);
                return !(i || !n);
            },
            w = function t(e, i) {
                var n = {};
                if (e.features) {
                    (n.type = "FeatureCollection"), (n.features = []);
                    for (var o = 0; o < e.features.length; o++)
                        n.features.push(t(e.features[o], i));
                }
                if (
                    ("number" == typeof e.x &&
                        "number" == typeof e.y &&
                        ((n.type = "Point"),
                        (n.coordinates = [e.x, e.y]),
                        "number" == typeof e.z && n.coordinates.push(e.z)),
                    e.points &&
                        ((n.type = "MultiPoint"),
                        (n.coordinates = e.points.slice(0))),
                    e.paths &&
                        (1 === e.paths.length
                            ? ((n.type = "LineString"),
                              (n.coordinates = e.paths[0].slice(0)))
                            : ((n.type = "MultiLineString"),
                              (n.coordinates = e.paths.slice(0)))),
                    e.rings &&
                        (n = (function (t) {
                            for (
                                var e, i, n, o = [], s = [], r = 0;
                                r < t.length;
                                r++
                            ) {
                                var a = v(t[r].slice(0));
                                if (!(a.length < 4))
                                    if (y(a)) {
                                        var h = [a.slice().reverse()];
                                        o.push(h);
                                    } else s.push(a.slice().reverse());
                            }
                            for (var l = []; s.length; ) {
                                n = s.pop();
                                var u = !1;
                                for (e = o.length - 1; e >= 0; e--)
                                    if (((i = o[e][0]), b(i, n))) {
                                        o[e].push(n), (u = !0);
                                        break;
                                    }
                                u || l.push(n);
                            }
                            for (; l.length; ) {
                                n = l.pop();
                                var c = !1;
                                for (e = o.length - 1; e >= 0; e--)
                                    if (((i = o[e][0]), g(i, n))) {
                                        o[e].push(n), (c = !0);
                                        break;
                                    }
                                c || o.push([n.reverse()]);
                            }
                            return 1 === o.length
                                ? { type: "Polygon", coordinates: o[0] }
                                : { type: "MultiPolygon", coordinates: o };
                        })(e.rings.slice(0))),
                    "number" == typeof e.xmin &&
                        "number" == typeof e.ymin &&
                        "number" == typeof e.xmax &&
                        "number" == typeof e.ymax &&
                        ((n.type = "Polygon"),
                        (n.coordinates = [
                            [
                                [e.xmax, e.ymax],
                                [e.xmin, e.ymax],
                                [e.xmin, e.ymin],
                                [e.xmax, e.ymin],
                                [e.xmax, e.ymax],
                            ],
                        ])),
                    (e.geometry || e.attributes) &&
                        ((n.type = "Feature"),
                        (n.geometry = e.geometry ? t(e.geometry) : null),
                        (n.properties = e.attributes ? x(e.attributes) : null),
                        e.attributes))
                )
                    try {
                        n.id = (function (t, e) {
                            for (
                                var i = e
                                        ? [e, "OBJECTID", "FID"]
                                        : ["OBJECTID", "FID"],
                                    n = 0;
                                n < i.length;
                                n++
                            ) {
                                var o = i[n];
                                if (
                                    o in t &&
                                    ("string" == typeof t[o] ||
                                        "number" == typeof t[o])
                                )
                                    return t[o];
                            }
                            throw Error("No valid id attribute found");
                        })(e.attributes, i);
                    } catch (t) {}
                return (
                    JSON.stringify(n.geometry) === JSON.stringify({}) &&
                        (n.geometry = null),
                    e.spatialReference &&
                        e.spatialReference.wkid &&
                        4326 !== e.spatialReference.wkid &&
                        console.warn(
                            "Object converted in non-standard crs - " +
                                JSON.stringify(e.spatialReference)
                        ),
                    n
                );
            },
            L = function (t) {
                var e = [],
                    i = t.slice(0),
                    n = v(i.shift().slice(0));
                if (n.length >= 4) {
                    y(n) || n.reverse(), e.push(n);
                    for (var o = 0; o < i.length; o++) {
                        var s = v(i[o].slice(0));
                        s.length >= 4 && (y(s) && s.reverse(), e.push(s));
                    }
                }
                return e;
            },
            P = function t(e, i) {
                i = i || "OBJECTID";
                var n,
                    o = { wkid: 4326 },
                    s = {};
                switch (e.type) {
                    case "Point":
                        (s.x = e.coordinates[0]),
                            (s.y = e.coordinates[1]),
                            e.coordinates[2] && (s.z = e.coordinates[2]),
                            (s.spatialReference = o);
                        break;
                    case "MultiPoint":
                        (s.points = e.coordinates.slice(0)),
                            e.coordinates[0][2] && (s.hasZ = !0),
                            (s.spatialReference = o);
                        break;
                    case "LineString":
                        (s.paths = [e.coordinates.slice(0)]),
                            e.coordinates[0][2] && (s.hasZ = !0),
                            (s.spatialReference = o);
                        break;
                    case "MultiLineString":
                        (s.paths = e.coordinates.slice(0)),
                            e.coordinates[0][0][2] && (s.hasZ = !0),
                            (s.spatialReference = o);
                        break;
                    case "Polygon":
                        (s.rings = L(e.coordinates.slice(0))),
                            e.coordinates[0][0][2] && (s.hasZ = !0),
                            (s.spatialReference = o);
                        break;
                    case "MultiPolygon":
                        (s.rings = (function (t) {
                            for (var e = [], i = 0; i < t.length; i++)
                                for (
                                    var n = L(t[i]), o = n.length - 1;
                                    o >= 0;
                                    o--
                                ) {
                                    var s = n[o].slice(0);
                                    e.push(s);
                                }
                            return e;
                        })(e.coordinates.slice(0))),
                            e.coordinates[0][0][0][2] && (s.hasZ = !0),
                            (s.spatialReference = o);
                        break;
                    case "Feature":
                        e.geometry && (s.geometry = t(e.geometry, i)),
                            (s.attributes = e.properties
                                ? x(e.properties)
                                : {}),
                            e.id && (s.attributes[i] = e.id);
                        break;
                    case "FeatureCollection":
                        for (s = [], n = 0; n < e.features.length; n++)
                            s.push(t(e.features[n], i));
                        break;
                    case "GeometryCollection":
                        for (s = [], n = 0; n < e.geometries.length; n++)
                            s.push(t(e.geometries[n], i));
                }
                return s;
            },
            T =
                '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>';
        /* @preserve
         * @terraformer/arcgis - v2.0.7 - MIT
         * Copyright (c) 2012-2021 Environmental Systems Research Institute, Inc.
         * Thu Jul 22 2021 13:58:30 GMT-0700 (Pacific Daylight Time)
         */ function S(t, e) {
            return P(t, e);
        }
        function C(t, e) {
            return w(t, e);
        }
        function M(t) {
            if (
                "NaN" !== t.xmin &&
                "NaN" !== t.ymin &&
                "NaN" !== t.xmax &&
                "NaN" !== t.ymax
            ) {
                var i = e.latLng(t.ymin, t.xmin),
                    n = e.latLng(t.ymax, t.xmax);
                return e.latLngBounds(i, n);
            }
            return null;
        }
        function A(t) {
            return {
                xmin: (t = e.latLngBounds(t)).getSouthWest().lng,
                ymin: t.getSouthWest().lat,
                xmax: t.getNorthEast().lng,
                ymax: t.getNorthEast().lat,
                spatialReference: { wkid: 4326 },
            };
        }
        var z = /^(OBJECTID|FID|OID|ID)$/i;
        function I(t) {
            var e;
            if (t.objectIdFieldName) e = t.objectIdFieldName;
            else if (t.fields) {
                for (var i = 0; i <= t.fields.length - 1; i++)
                    if ("esriFieldTypeOID" === t.fields[i].type) {
                        e = t.fields[i].name;
                        break;
                    }
                if (!e)
                    for (i = 0; i <= t.fields.length - 1; i++)
                        if (t.fields[i].name.match(z)) {
                            e = t.fields[i].name;
                            break;
                        }
            }
            return e;
        }
        function k(t) {
            for (var e in t.attributes) if (e.match(z)) return e;
        }
        function E(t, e) {
            var i,
                n = t.features || t.results,
                o = n && n.length;
            i = e || I(t);
            var s = { type: "FeatureCollection", features: [] };
            if (o)
                for (var r = n.length - 1; r >= 0; r--) {
                    var a = C(n[r], i || k(n[r]));
                    s.features.push(a);
                }
            return s;
        }
        function O(t) {
            return "/" !== (t = e.Util.trim(t))[t.length - 1] && (t += "/"), t;
        }
        function Z(t) {
            if (-1 !== t.url.indexOf("?")) {
                t.requestParams = t.requestParams || {};
                var e = t.url.substring(t.url.indexOf("?") + 1);
                (t.url = t.url.split("?")[0]),
                    (t.requestParams = JSON.parse(
                        '{"' +
                            decodeURI(e)
                                .replace(/"/g, '\\"')
                                .replace(/&/g, '","')
                                .replace(/=/g, '":"') +
                            '"}'
                    ));
            }
            return (t.url = O(t.url.split("?")[0])), t;
        }
        function B(t) {
            return /^(?!.*utility\.arcgis\.com).*\.arcgis\.com.*FeatureServer/i.test(
                t
            );
        }
        function R(t) {
            var e;
            switch (t) {
                case "Point":
                    e = "esriGeometryPoint";
                    break;
                case "MultiPoint":
                    e = "esriGeometryMultipoint";
                    break;
                case "LineString":
                case "MultiLineString":
                    e = "esriGeometryPolyline";
                    break;
                case "Polygon":
                case "MultiPolygon":
                    e = "esriGeometryPolygon";
            }
            return e;
        }
        function D(t) {
            return t.getSize().x - s.attributionWidthOffset + "px";
        }
        function F(t) {
            if (t.attributionControl) {
                if (
                    (t.attributionControl._esriAttributionLayerCount ||
                        (t.attributionControl._esriAttributionLayerCount = 0),
                    0 === t.attributionControl._esriAttributionLayerCount)
                ) {
                    if (!t.attributionControl._esriAttributionAddedOnce) {
                        var i = document.createElement("style");
                        (i.type = "text/css"),
                            (i.innerHTML =
                                ".esri-truncated-attribution:hover {white-space: normal;}"),
                            document
                                .getElementsByTagName("head")[0]
                                .appendChild(i);
                        var n = document.createElement("style");
                        (n.type = "text/css"),
                            (n.innerHTML =
                                ".esri-truncated-attribution {vertical-align: -3px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;display: inline-block;transition: 0s white-space;transition-delay: 1s;max-width: " +
                                D(t) +
                                ";}"),
                            document
                                .getElementsByTagName("head")[0]
                                .appendChild(n),
                            t.on("resize", function (e) {
                                t.attributionControl &&
                                    (t.attributionControl._container.style.maxWidth =
                                        D(e.target));
                            }),
                            (t.attributionControl._esriAttributionAddedOnce =
                                !0);
                    }
                    t.attributionControl.setPrefix(
                        T +
                            ' | Powered by <a href="https://www.esri.com">Esri</a>'
                    ),
                        e.DomUtil.addClass(
                            t.attributionControl._container,
                            "esri-truncated-attribution:hover"
                        ),
                        e.DomUtil.addClass(
                            t.attributionControl._container,
                            "esri-truncated-attribution"
                        );
                }
                t.attributionControl._esriAttributionLayerCount =
                    t.attributionControl._esriAttributionLayerCount + 1;
            }
        }
        function N(t) {
            t.attributionControl &&
                (t.attributionControl._esriAttributionLayerCount &&
                    1 === t.attributionControl._esriAttributionLayerCount &&
                    (t.attributionControl.setPrefix(T),
                    e.DomUtil.removeClass(
                        t.attributionControl._container,
                        "esri-truncated-attribution:hover"
                    ),
                    e.DomUtil.removeClass(
                        t.attributionControl._container,
                        "esri-truncated-attribution"
                    )),
                (t.attributionControl._esriAttributionLayerCount =
                    t.attributionControl._esriAttributionLayerCount - 1));
        }
        function U(t) {
            var i = { geometry: null, geometryType: null };
            return t instanceof e.LatLngBounds
                ? ((i.geometry = A(t)),
                  (i.geometryType = "esriGeometryEnvelope"),
                  i)
                : (t.getLatLng && (t = t.getLatLng()),
                  t instanceof e.LatLng &&
                      (t = { type: "Point", coordinates: [t.lng, t.lat] }),
                  t instanceof e.GeoJSON &&
                      ((t = t.getLayers()[0].feature.geometry),
                      (i.geometry = S(t)),
                      (i.geometryType = R(t.type))),
                  t.toGeoJSON && (t = t.toGeoJSON()),
                  "Feature" === t.type && (t = t.geometry),
                  "Point" === t.type ||
                  "LineString" === t.type ||
                  "Polygon" === t.type ||
                  "MultiPolygon" === t.type
                      ? ((i.geometry = S(t)), (i.geometryType = R(t.type)), i)
                      : void _(
                            "invalid geometry passed to spatial query. Should be L.LatLng, L.LatLngBounds, L.Marker or a GeoJSON Point, Line, Polygon or MultiPolygon object"
                        ));
        }
        function j(t, i) {
            o.cors &&
                c(
                    t,
                    {},
                    e.Util.bind(function (t, n) {
                        if (!t) {
                            i._esriAttributions = [];
                            for (var o = 0; o < n.contributors.length; o++)
                                for (
                                    var s = n.contributors[o], r = 0;
                                    r < s.coverageAreas.length;
                                    r++
                                ) {
                                    var a = s.coverageAreas[r],
                                        h = e.latLng(a.bbox[0], a.bbox[1]),
                                        l = e.latLng(a.bbox[2], a.bbox[3]);
                                    i._esriAttributions.push({
                                        attribution: s.attribution,
                                        score: a.score,
                                        bounds: e.latLngBounds(h, l),
                                        minZoom: a.zoomMin,
                                        maxZoom: a.zoomMax,
                                    });
                                }
                            i._esriAttributions.sort(function (t, e) {
                                return e.score - t.score;
                            }),
                                G({ target: i });
                        }
                    }, this)
                );
        }
        function G(t) {
            var i = t.target,
                n = i._esriAttributions;
            if (i && i.attributionControl) {
                var o = i.attributionControl._container.querySelector(
                    ".esri-dynamic-attribution"
                );
                if (o && n) {
                    for (
                        var s = "",
                            r = i.getBounds(),
                            a = e.latLngBounds(
                                r.getSouthWest().wrap(),
                                r.getNorthEast().wrap()
                            ),
                            h = i.getZoom(),
                            l = 0;
                        l < n.length;
                        l++
                    ) {
                        var u = n[l],
                            c = u.attribution;
                        !s.match(c) &&
                            u.bounds.intersects(a) &&
                            h >= u.minZoom &&
                            h <= u.maxZoom &&
                            (s += ", " + c);
                    }
                    (s = s.substr(2)),
                        (o.innerHTML = s),
                        (o.style.maxWidth = D(i)),
                        i.fire("attributionupdated", { attribution: s });
                }
            }
        }
        var q = {
                warn: _,
                cleanUrl: O,
                getUrlParams: Z,
                isArcgisOnline: B,
                geojsonTypeToArcGIS: R,
                responseToFeatureCollection: E,
                geojsonToArcGIS: S,
                arcgisToGeoJSON: C,
                boundsToExtent: A,
                extentToBounds: M,
                calcAttributionWidth: D,
                setEsriAttribution: F,
                _setGeometry: U,
                _getAttributionData: j,
                _updateMapAttribution: G,
                _findIdAttributeFromFeature: k,
                _findIdAttributeFromResponse: I,
            },
            W = e.Class.extend({
                options: { proxy: !1, useCors: i },
                generateSetter: function (t, i) {
                    return e.Util.bind(function (e) {
                        return (this.params[t] = e), this;
                    }, i);
                },
                initialize: function (t) {
                    if (
                        (t.request && t.options
                            ? ((this._service = t),
                              e.Util.setOptions(this, t.options))
                            : (e.Util.setOptions(this, t),
                              (this.options.url = O(t.url))),
                        (this.params = e.Util.extend({}, this.params || {})),
                        this.setters)
                    )
                        for (var i in this.setters) {
                            var n = this.setters[i];
                            this[i] = this.generateSetter(n, this);
                        }
                },
                token: function (t) {
                    return (
                        this._service
                            ? this._service.authenticate(t)
                            : (this.params.token = t),
                        this
                    );
                },
                apikey: function (t) {
                    return this.token(t);
                },
                format: function (t) {
                    return (this.params.returnUnformattedValues = !t), this;
                },
                request: function (t, i) {
                    return (
                        this.options.requestParams &&
                            e.Util.extend(
                                this.params,
                                this.options.requestParams
                            ),
                        this._service
                            ? this._service.request(
                                  this.path,
                                  this.params,
                                  t,
                                  i
                              )
                            : this._request(
                                  "request",
                                  this.path,
                                  this.params,
                                  t,
                                  i
                              )
                    );
                },
                _request: function (t, e, i, n, o) {
                    var s = this.options.proxy
                        ? this.options.proxy + "?" + this.options.url + e
                        : this.options.url + e;
                    return ("get" !== t && "request" !== t) ||
                        this.options.useCors
                        ? m[t](s, i, n, o)
                        : m.get.JSONP(s, i, n, o);
                },
            }),
            H = W.extend({
                setters: {
                    offset: "resultOffset",
                    limit: "resultRecordCount",
                    fields: "outFields",
                    precision: "geometryPrecision",
                    featureIds: "objectIds",
                    returnGeometry: "returnGeometry",
                    returnM: "returnM",
                    transform: "datumTransformation",
                    token: "token",
                },
                path: "query",
                params: {
                    returnGeometry: !0,
                    where: "1=1",
                    outSR: 4326,
                    outFields: "*",
                },
                within: function (t) {
                    return (
                        this._setGeometryParams(t),
                        (this.params.spatialRel = "esriSpatialRelContains"),
                        this
                    );
                },
                intersects: function (t) {
                    return (
                        this._setGeometryParams(t),
                        (this.params.spatialRel = "esriSpatialRelIntersects"),
                        this
                    );
                },
                contains: function (t) {
                    return (
                        this._setGeometryParams(t),
                        (this.params.spatialRel = "esriSpatialRelWithin"),
                        this
                    );
                },
                crosses: function (t) {
                    return (
                        this._setGeometryParams(t),
                        (this.params.spatialRel = "esriSpatialRelCrosses"),
                        this
                    );
                },
                touches: function (t) {
                    return (
                        this._setGeometryParams(t),
                        (this.params.spatialRel = "esriSpatialRelTouches"),
                        this
                    );
                },
                overlaps: function (t) {
                    return (
                        this._setGeometryParams(t),
                        (this.params.spatialRel = "esriSpatialRelOverlaps"),
                        this
                    );
                },
                bboxIntersects: function (t) {
                    return (
                        this._setGeometryParams(t),
                        (this.params.spatialRel =
                            "esriSpatialRelEnvelopeIntersects"),
                        this
                    );
                },
                indexIntersects: function (t) {
                    return (
                        this._setGeometryParams(t),
                        (this.params.spatialRel =
                            "esriSpatialRelIndexIntersects"),
                        this
                    );
                },
                nearby: function (t, i) {
                    return (
                        (t = e.latLng(t)),
                        (this.params.geometry = [t.lng, t.lat]),
                        (this.params.geometryType = "esriGeometryPoint"),
                        (this.params.spatialRel = "esriSpatialRelIntersects"),
                        (this.params.units = "esriSRUnit_Meter"),
                        (this.params.distance = i),
                        (this.params.inSR = 4326),
                        this
                    );
                },
                where: function (t) {
                    return (this.params.where = t), this;
                },
                between: function (t, e) {
                    return (
                        (this.params.time = [t.valueOf(), e.valueOf()]), this
                    );
                },
                simplify: function (t, e) {
                    var i = Math.abs(
                        t.getBounds().getWest() - t.getBounds().getEast()
                    );
                    return (
                        (this.params.maxAllowableOffset =
                            (i / t.getSize().y) * e),
                        this
                    );
                },
                orderBy: function (t, e) {
                    return (
                        (e = e || "ASC"),
                        (this.params.orderByFields = this.params.orderByFields
                            ? this.params.orderByFields + ","
                            : ""),
                        (this.params.orderByFields += [t, e].join(" ")),
                        this
                    );
                },
                run: function (t, e) {
                    return (
                        this._cleanParams(),
                        this.options.isModern ||
                        (B(this.options.url) &&
                            void 0 === this.options.isModern)
                            ? ((this.params.f = "geojson"),
                              this.request(function (i, n) {
                                  this._trapSQLerrors(i), t.call(e, i, n, n);
                              }, this))
                            : this.request(function (i, n) {
                                  this._trapSQLerrors(i),
                                      t.call(e, i, n && E(n), n);
                              }, this)
                    );
                },
                count: function (t, e) {
                    return (
                        this._cleanParams(),
                        (this.params.returnCountOnly = !0),
                        this.request(function (e, i) {
                            t.call(this, e, i && i.count, i);
                        }, e)
                    );
                },
                ids: function (t, e) {
                    return (
                        this._cleanParams(),
                        (this.params.returnIdsOnly = !0),
                        this.request(function (e, i) {
                            t.call(this, e, i && i.objectIds, i);
                        }, e)
                    );
                },
                bounds: function (t, e) {
                    return (
                        this._cleanParams(),
                        (this.params.returnExtentOnly = !0),
                        this.request(function (i, n) {
                            n && n.extent && M(n.extent)
                                ? t.call(e, i, M(n.extent), n)
                                : ((i = { message: "Invalid Bounds" }),
                                  t.call(e, i, null, n));
                        }, e)
                    );
                },
                distinct: function () {
                    return (
                        (this.params.returnGeometry = !1),
                        (this.params.returnDistinctValues = !0),
                        this
                    );
                },
                pixelSize: function (t) {
                    var i = e.point(t);
                    return (this.params.pixelSize = [i.x, i.y]), this;
                },
                layer: function (t) {
                    return (this.path = t + "/query"), this;
                },
                _trapSQLerrors: function (t) {
                    t &&
                        "400" === t.code &&
                        _(
                            "one common syntax error in query requests is encasing string values in double quotes instead of single quotes"
                        );
                },
                _cleanParams: function () {
                    delete this.params.returnIdsOnly,
                        delete this.params.returnExtentOnly,
                        delete this.params.returnCountOnly;
                },
                _setGeometryParams: function (t) {
                    this.params.inSR = 4326;
                    var e = U(t);
                    (this.params.geometry = e.geometry),
                        (this.params.geometryType = e.geometryType);
                },
            });
        function V(t) {
            return new H(t);
        }
        var K = W.extend({
            setters: {
                contains: "contains",
                text: "searchText",
                fields: "searchFields",
                spatialReference: "sr",
                sr: "sr",
                layers: "layers",
                returnGeometry: "returnGeometry",
                maxAllowableOffset: "maxAllowableOffset",
                precision: "geometryPrecision",
                dynamicLayers: "dynamicLayers",
                returnZ: "returnZ",
                returnM: "returnM",
                gdbVersion: "gdbVersion",
                token: "token",
            },
            path: "find",
            params: {
                sr: 4326,
                contains: !0,
                returnGeometry: !0,
                returnZ: !0,
                returnM: !1,
            },
            layerDefs: function (t, e) {
                return (
                    (this.params.layerDefs = this.params.layerDefs
                        ? this.params.layerDefs + ";"
                        : ""),
                    (this.params.layerDefs += [t, e].join(":")),
                    this
                );
            },
            simplify: function (t, e) {
                var i = Math.abs(
                    t.getBounds().getWest() - t.getBounds().getEast()
                );
                return (
                    (this.params.maxAllowableOffset = (i / t.getSize().y) * e),
                    this
                );
            },
            run: function (t, e) {
                return this.request(function (i, n) {
                    t.call(e, i, n && E(n), n);
                }, e);
            },
        });
        function J(t) {
            return new K(t);
        }
        var Y = W.extend({
                path: "identify",
                between: function (t, e) {
                    return (
                        (this.params.time = [t.valueOf(), e.valueOf()]), this
                    );
                },
            }),
            Q = Y.extend({
                setters: {
                    layers: "layers",
                    precision: "geometryPrecision",
                    tolerance: "tolerance",
                    returnGeometry: "returnGeometry",
                },
                params: {
                    sr: 4326,
                    layers: "all",
                    tolerance: 3,
                    returnGeometry: !0,
                },
                on: function (t) {
                    var e = A(t.getBounds()),
                        i = t.getSize();
                    return (
                        (this.params.imageDisplay = [i.x, i.y, 96]),
                        (this.params.mapExtent = [
                            e.xmin,
                            e.ymin,
                            e.xmax,
                            e.ymax,
                        ]),
                        this
                    );
                },
                at: function (t) {
                    return (
                        2 === t.length && (t = e.latLng(t)),
                        this._setGeometryParams(t),
                        this
                    );
                },
                layerDef: function (t, e) {
                    return (
                        (this.params.layerDefs = this.params.layerDefs
                            ? this.params.layerDefs + ";"
                            : ""),
                        (this.params.layerDefs += [t, e].join(":")),
                        this
                    );
                },
                simplify: function (t, e) {
                    var i = Math.abs(
                        t.getBounds().getWest() - t.getBounds().getEast()
                    );
                    return (
                        (this.params.maxAllowableOffset =
                            (i / t.getSize().y) * e),
                        this
                    );
                },
                run: function (t, e) {
                    return this.request(function (i, n) {
                        if (i) t.call(e, i, void 0, n);
                        else {
                            var o = E(n);
                            n.results = n.results.reverse();
                            for (var s = 0; s < o.features.length; s++)
                                o.features[s].layerId = n.results[s].layerId;
                            t.call(e, void 0, o, n);
                        }
                    });
                },
                _setGeometryParams: function (t) {
                    var e = U(t);
                    (this.params.geometry = e.geometry),
                        (this.params.geometryType = e.geometryType);
                },
            });
        function X(t) {
            return new Q(t);
        }
        var $ = Y.extend({
            setters: {
                setMosaicRule: "mosaicRule",
                setRenderingRule: "renderingRule",
                setPixelSize: "pixelSize",
                returnCatalogItems: "returnCatalogItems",
                returnGeometry: "returnGeometry",
            },
            params: { returnGeometry: !1 },
            at: function (t) {
                return (
                    (t = e.latLng(t)),
                    (this.params.geometry = JSON.stringify({
                        x: t.lng,
                        y: t.lat,
                        spatialReference: { wkid: 4326 },
                    })),
                    (this.params.geometryType = "esriGeometryPoint"),
                    this
                );
            },
            getMosaicRule: function () {
                return this.params.mosaicRule;
            },
            getRenderingRule: function () {
                return this.params.renderingRule;
            },
            getPixelSize: function () {
                return this.params.pixelSize;
            },
            run: function (t, e) {
                return this.request(function (i, n) {
                    t.call(e, i, n && this._responseToGeoJSON(n), n);
                }, this);
            },
            _responseToGeoJSON: function (t) {
                var e = t.location,
                    i = t.catalogItems,
                    n = t.catalogItemVisibilities,
                    o = {
                        pixel: {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [e.x, e.y],
                            },
                            crs: {
                                type: "EPSG",
                                properties: { code: e.spatialReference.wkid },
                            },
                            properties: {
                                OBJECTID: t.objectId,
                                name: t.name,
                                value: t.value,
                            },
                            id: t.objectId,
                        },
                    };
                if (
                    (t.properties &&
                        t.properties.Values &&
                        (o.pixel.properties.values = t.properties.Values),
                    i &&
                        i.features &&
                        ((o.catalogItems = E(i)),
                        n && n.length === o.catalogItems.features.length))
                )
                    for (var s = n.length - 1; s >= 0; s--)
                        o.catalogItems.features[
                            s
                        ].properties.catalogItemVisibility = n[s];
                return o;
            },
        });
        function tt(t) {
            return new $(t);
        }
        var et = e.Evented.extend({
                options: { proxy: !1, useCors: i, timeout: 0 },
                initialize: function (t) {
                    (t = t || {}),
                        (this._requestQueue = []),
                        (this._authenticating = !1),
                        e.Util.setOptions(this, t),
                        (this.options.url = O(this.options.url));
                },
                get: function (t, e, i, n) {
                    return this._request("get", t, e, i, n);
                },
                post: function (t, e, i, n) {
                    return this._request("post", t, e, i, n);
                },
                request: function (t, e, i, n) {
                    return this._request("request", t, e, i, n);
                },
                metadata: function (t, e) {
                    return this._request("get", "", {}, t, e);
                },
                authenticate: function (t) {
                    return (
                        (this._authenticating = !1),
                        (this.options.token = t),
                        this._runQueue(),
                        this
                    );
                },
                getTimeout: function () {
                    return this.options.timeout;
                },
                setTimeout: function (t) {
                    this.options.timeout = t;
                },
                _request: function (t, i, n, o, s) {
                    this.fire(
                        "requeststart",
                        { url: this.options.url + i, params: n, method: t },
                        !0
                    );
                    var r = this._createServiceCallback(t, i, n, o, s);
                    if (
                        (this.options.token && (n.token = this.options.token),
                        this.options.requestParams &&
                            e.Util.extend(n, this.options.requestParams),
                        !this._authenticating)
                    ) {
                        var a = this.options.proxy
                            ? this.options.proxy + "?" + this.options.url + i
                            : this.options.url + i;
                        return ("get" !== t && "request" !== t) ||
                            this.options.useCors
                            ? m[t](a, n, r, s)
                            : m.get.JSONP(a, n, r, s);
                    }
                    this._requestQueue.push([t, i, n, o, s]);
                },
                _createServiceCallback: function (t, i, n, o, s) {
                    return e.Util.bind(function (r, a) {
                        !r ||
                            (499 !== r.code && 498 !== r.code) ||
                            ((this._authenticating = !0),
                            this._requestQueue.push([t, i, n, o, s]),
                            this.fire(
                                "authenticationrequired",
                                {
                                    authenticate: e.Util.bind(
                                        this.authenticate,
                                        this
                                    ),
                                },
                                !0
                            ),
                            (r.authenticate = e.Util.bind(
                                this.authenticate,
                                this
                            ))),
                            o.call(s, r, a),
                            r
                                ? this.fire(
                                      "requesterror",
                                      {
                                          url: this.options.url + i,
                                          params: n,
                                          message: r.message,
                                          code: r.code,
                                          method: t,
                                      },
                                      !0
                                  )
                                : this.fire(
                                      "requestsuccess",
                                      {
                                          url: this.options.url + i,
                                          params: n,
                                          response: a,
                                          method: t,
                                      },
                                      !0
                                  ),
                            this.fire(
                                "requestend",
                                {
                                    url: this.options.url + i,
                                    params: n,
                                    method: t,
                                },
                                !0
                            );
                    }, this);
                },
                _runQueue: function () {
                    for (var t = this._requestQueue.length - 1; t >= 0; t--) {
                        var e = this._requestQueue[t];
                        this[e.shift()].apply(this, e);
                    }
                    this._requestQueue = [];
                },
            }),
            it = et.extend({
                identify: function () {
                    return X(this);
                },
                find: function () {
                    return J(this);
                },
                query: function () {
                    return V(this);
                },
            });
        function nt(t) {
            return new it(t);
        }
        var ot = et.extend({
            query: function () {
                return V(this);
            },
            identify: function () {
                return tt(this);
            },
        });
        function st(t) {
            return new ot(t);
        }
        var rt = et.extend({
            options: { idAttribute: "OBJECTID" },
            query: function () {
                return V(this);
            },
            addFeature: function (t, e, i) {
                this.addFeatures(t, e, i);
            },
            addFeatures: function (t, e, i) {
                for (
                    var n = t.features ? t.features : [t], o = n.length - 1;
                    o >= 0;
                    o--
                )
                    delete n[o].id;
                return (
                    (t = S(t)),
                    (t = n.length > 1 ? t : [t]),
                    this.post(
                        "addFeatures",
                        { features: t },
                        function (t, n) {
                            var o =
                                n && n.addResults
                                    ? n.addResults.length > 1
                                        ? n.addResults
                                        : n.addResults[0]
                                    : void 0;
                            e && e.call(i, t || n.addResults[0].error, o);
                        },
                        i
                    )
                );
            },
            updateFeature: function (t, e, i) {
                this.updateFeatures(t, e, i);
            },
            updateFeatures: function (t, e, i) {
                var n = t.features ? t.features : [t];
                return (
                    (t = S(t, this.options.idAttribute)),
                    (t = n.length > 1 ? t : [t]),
                    this.post(
                        "updateFeatures",
                        { features: t },
                        function (t, n) {
                            var o =
                                n && n.updateResults
                                    ? n.updateResults.length > 1
                                        ? n.updateResults
                                        : n.updateResults[0]
                                    : void 0;
                            e && e.call(i, t || n.updateResults[0].error, o);
                        },
                        i
                    )
                );
            },
            deleteFeature: function (t, e, i) {
                this.deleteFeatures(t, e, i);
            },
            deleteFeatures: function (t, e, i) {
                return this.post(
                    "deleteFeatures",
                    { objectIds: t },
                    function (t, n) {
                        var o =
                            n && n.deleteResults
                                ? n.deleteResults.length > 1
                                    ? n.deleteResults
                                    : n.deleteResults[0]
                                : void 0;
                        e && e.call(i, t || n.deleteResults[0].error, o);
                    },
                    i
                );
            },
        });
        function at(t) {
            return new rt(t);
        }
        var ht = "https:" !== window.location.protocol ? "http:" : "https:",
            lt = e.TileLayer.extend({
                statics: {
                    TILES: {
                        Streets: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 19,
                                subdomains: ["server", "services"],
                                attribution: "USGS, NOAA",
                                attributionUrl:
                                    "https://static.arcgis.com/attribution/World_Street_Map",
                            },
                        },
                        Topographic: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 19,
                                subdomains: ["server", "services"],
                                attribution: "USGS, NOAA",
                                attributionUrl:
                                    "https://static.arcgis.com/attribution/World_Topo_Map",
                            },
                        },
                        Oceans: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 16,
                                subdomains: ["server", "services"],
                                attribution: "USGS, NOAA",
                                attributionUrl:
                                    "https://static.arcgis.com/attribution/Ocean_Basemap",
                            },
                        },
                        OceansLabels: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 16,
                                subdomains: ["server", "services"],
                                pane: n ? "esri-labels" : "tilePane",
                                attribution: "",
                            },
                        },
                        NationalGeographic: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 16,
                                subdomains: ["server", "services"],
                                attribution:
                                    "National Geographic, DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, increment P Corp.",
                            },
                        },
                        DarkGray: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 16,
                                subdomains: ["server", "services"],
                                attribution:
                                    "HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors",
                            },
                        },
                        DarkGrayLabels: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 16,
                                subdomains: ["server", "services"],
                                pane: n ? "esri-labels" : "tilePane",
                                attribution: "",
                            },
                        },
                        Gray: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 16,
                                subdomains: ["server", "services"],
                                attribution:
                                    "HERE, DeLorme, MapmyIndia, &copy; OpenStreetMap contributors",
                            },
                        },
                        GrayLabels: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 16,
                                subdomains: ["server", "services"],
                                pane: n ? "esri-labels" : "tilePane",
                                attribution: "",
                            },
                        },
                        Imagery: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 19,
                                subdomains: ["server", "services"],
                                attribution:
                                    "DigitalGlobe, GeoEye, i-cubed, USDA, USGS, AEX, Getmapping, Aerogrid, IGN, IGP, swisstopo, and the GIS User Community",
                                attributionUrl:
                                    "https://static.arcgis.com/attribution/World_Imagery",
                            },
                        },
                        ImageryLabels: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 19,
                                subdomains: ["server", "services"],
                                pane: n ? "esri-labels" : "tilePane",
                                attribution: "",
                            },
                        },
                        ImageryTransportation: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 19,
                                subdomains: ["server", "services"],
                                pane: n ? "esri-labels" : "tilePane",
                                attribution: "",
                            },
                        },
                        ShadedRelief: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 13,
                                subdomains: ["server", "services"],
                                attribution: "USGS",
                            },
                        },
                        ShadedReliefLabels: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places_Alternate/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 12,
                                subdomains: ["server", "services"],
                                pane: n ? "esri-labels" : "tilePane",
                                attribution: "",
                            },
                        },
                        Terrain: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 13,
                                subdomains: ["server", "services"],
                                attribution: "USGS, NOAA",
                            },
                        },
                        TerrainLabels: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 13,
                                subdomains: ["server", "services"],
                                pane: n ? "esri-labels" : "tilePane",
                                attribution: "",
                            },
                        },
                        USATopo: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 15,
                                subdomains: ["server", "services"],
                                attribution:
                                    "USGS, National Geographic Society, i-cubed",
                            },
                        },
                        ImageryClarity: {
                            urlTemplate:
                                ht +
                                "//clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 19,
                                attribution:
                                    "Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",
                            },
                        },
                        Physical: {
                            urlTemplate:
                                ht +
                                "//{s}.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 8,
                                subdomains: ["server", "services"],
                                attribution: "U.S. National Park Service",
                            },
                        },
                        ImageryFirefly: {
                            urlTemplate:
                                ht +
                                "//fly.maptiles.arcgis.com/arcgis/rest/services/World_Imagery_Firefly/MapServer/tile/{z}/{y}/{x}",
                            options: {
                                minZoom: 1,
                                maxZoom: 19,
                                attribution:
                                    "Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",
                                attributionUrl:
                                    "https://static.arcgis.com/attribution/World_Imagery",
                            },
                        },
                    },
                },
                initialize: function (t, i) {
                    var n;
                    if ("object" == typeof t && t.urlTemplate && t.options)
                        n = t;
                    else {
                        if ("string" != typeof t || !lt.TILES[t])
                            throw new Error(
                                'L.esri.BasemapLayer: Invalid parameter. Use one of "Streets", "Topographic", "Oceans", "OceansLabels", "NationalGeographic", "Physical", "Gray", "GrayLabels", "DarkGray", "DarkGrayLabels", "Imagery", "ImageryLabels", "ImageryTransportation", "ImageryClarity", "ImageryFirefly", ShadedRelief", "ShadedReliefLabels", "Terrain", "TerrainLabels" or "USATopo"'
                            );
                        n = lt.TILES[t];
                    }
                    var o = e.Util.extend(n.options, i);
                    e.Util.setOptions(this, o),
                        this.options.ignoreDeprecationWarning ||
                            console.warn(
                                "WARNING: L.esri.BasemapLayer uses data services that are in mature support and are not being updated. Please use L.esri.Vector.vectorBasemapLayer instead. More info: https://esriurl.com/esri-leaflet-basemap"
                            ),
                        this.options.token &&
                            -1 === n.urlTemplate.indexOf("token=") &&
                            (n.urlTemplate += "?token=" + this.options.token),
                        this.options.proxy &&
                            (n.urlTemplate =
                                this.options.proxy + "?" + n.urlTemplate),
                        e.TileLayer.prototype.initialize.call(
                            this,
                            n.urlTemplate,
                            o
                        );
                },
                onAdd: function (t) {
                    F(t),
                        "esri-labels" === this.options.pane && this._initPane(),
                        this.options.attributionUrl &&
                            j(
                                (this.options.proxy
                                    ? this.options.proxy + "?"
                                    : "") + this.options.attributionUrl,
                                t
                            ),
                        t.on("moveend", G),
                        e.TileLayer.prototype.onAdd.call(this, t);
                },
                onRemove: function (t) {
                    N(t),
                        t.off("moveend", G),
                        e.TileLayer.prototype.onRemove.call(this, t);
                },
                _initPane: function () {
                    if (!this._map.getPane(this.options.pane)) {
                        var t = this._map.createPane(this.options.pane);
                        (t.style.pointerEvents = "none"),
                            (t.style.zIndex = 500);
                    }
                },
                getAttribution: function () {
                    if (this.options.attribution)
                        var t =
                            '<span class="esri-dynamic-attribution">' +
                            this.options.attribution +
                            "</span>";
                    return t;
                },
            }),
            ut = e.TileLayer.extend({
                options: {
                    zoomOffsetAllowance: 0.1,
                    errorTileUrl:
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEABAMAAACuXLVVAAAAA1BMVEUzNDVszlHHAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAAAAAAAAAB6mUWpAAAADZJREFUeJztwQEBAAAAgiD/r25IQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7waBAAABw08RwAAAAABJRU5ErkJggg==",
                },
                statics: {
                    MercatorZoomLevels: {
                        0: 156543.033928,
                        1: 78271.5169639999,
                        2: 39135.7584820001,
                        3: 19567.8792409999,
                        4: 9783.93962049996,
                        5: 4891.96981024998,
                        6: 2445.98490512499,
                        7: 1222.99245256249,
                        8: 611.49622628138,
                        9: 305.748113140558,
                        10: 152.874056570411,
                        11: 76.4370282850732,
                        12: 38.2185141425366,
                        13: 19.1092570712683,
                        14: 9.55462853563415,
                        15: 4.77731426794937,
                        16: 2.38865713397468,
                        17: 1.19432856685505,
                        18: 0.597164283559817,
                        19: 0.298582141647617,
                        20: 0.14929107082381,
                        21: 0.07464553541191,
                        22: 0.0373227677059525,
                        23: 0.0186613838529763,
                    },
                },
                initialize: function (t) {
                    (t = Z((t = e.Util.setOptions(this, t)))),
                        (this.tileUrl =
                            (t.proxy ? t.proxy + "?" : "") +
                            t.url +
                            "tile/{z}/{y}/{x}" +
                            (t.requestParams &&
                            Object.keys(t.requestParams).length > 0
                                ? e.Util.getParamString(t.requestParams)
                                : "")),
                        -1 !== t.url.indexOf("{s}") &&
                            t.subdomains &&
                            (t.url = t.url.replace("{s}", t.subdomains[0])),
                        (this.service = nt(t)),
                        this.service.addEventParent(this),
                        new RegExp(/tiles.arcgis(online)?\.com/g).test(t.url) &&
                            ((this.tileUrl = this.tileUrl.replace(
                                "://tiles",
                                "://tiles{s}"
                            )),
                            (t.subdomains = ["1", "2", "3", "4"])),
                        this.options.token &&
                            (this.tileUrl += "?token=" + this.options.token),
                        e.TileLayer.prototype.initialize.call(
                            this,
                            this.tileUrl,
                            t
                        );
                },
                getTileUrl: function (t) {
                    var i = this._getZoomForUrl();
                    return e.Util.template(
                        this.tileUrl,
                        e.Util.extend(
                            {
                                s: this._getSubdomain(t),
                                x: t.x,
                                y: t.y,
                                z:
                                    this._lodMap && this._lodMap[i]
                                        ? this._lodMap[i]
                                        : i,
                            },
                            this.options
                        )
                    );
                },
                createTile: function (t, i) {
                    var n = document.createElement("img");
                    return (
                        e.DomEvent.on(
                            n,
                            "load",
                            e.Util.bind(this._tileOnLoad, this, i, n)
                        ),
                        e.DomEvent.on(
                            n,
                            "error",
                            e.Util.bind(this._tileOnError, this, i, n)
                        ),
                        this.options.crossOrigin && (n.crossOrigin = ""),
                        (n.alt = ""),
                        !this._lodMap ||
                        (this._lodMap && this._lodMap[this._getZoomForUrl()])
                            ? (n.src = this.getTileUrl(t))
                            : this.once(
                                  "lodmap",
                                  function () {
                                      n.src = this.getTileUrl(t);
                                  },
                                  this
                              ),
                        n
                    );
                },
                onAdd: function (t) {
                    F(t),
                        this._lodMap ||
                            this.metadata(function (i, n) {
                                if (!i && n.spatialReference) {
                                    var o =
                                        n.spatialReference.latestWkid ||
                                        n.spatialReference.wkid;
                                    if (
                                        (!this.options.attribution &&
                                            t.attributionControl &&
                                            n.copyrightText &&
                                            ((this.options.attribution =
                                                n.copyrightText),
                                            t.attributionControl.addAttribution(
                                                this.getAttribution()
                                            )),
                                        t.options.crs !== e.CRS.EPSG3857 ||
                                            (102100 !== o && 3857 !== o))
                                    )
                                        (t.options.crs &&
                                            t.options.crs.code &&
                                            t.options.crs.code.indexOf(o) >
                                                -1) ||
                                            _(
                                                "L.esri.TiledMapLayer is using a non-mercator spatial reference. Support may be available through Proj4Leaflet https://developers.arcgis.com/esri-leaflet/samples/non-mercator-projection/"
                                            );
                                    else {
                                        this._lodMap = {};
                                        for (
                                            var s = n.tileInfo.lods,
                                                r = ut.MercatorZoomLevels,
                                                a = 0;
                                            a < s.length;
                                            a++
                                        ) {
                                            var h = s[a];
                                            for (var l in r) {
                                                var u = r[l];
                                                if (
                                                    this._withinPercentage(
                                                        h.resolution,
                                                        u,
                                                        this.options
                                                            .zoomOffsetAllowance
                                                    )
                                                ) {
                                                    this._lodMap[l] = h.level;
                                                    break;
                                                }
                                            }
                                        }
                                        this.fire("lodmap");
                                    }
                                }
                            }, this),
                        e.TileLayer.prototype.onAdd.call(this, t);
                },
                onRemove: function (t) {
                    N(t), e.TileLayer.prototype.onRemove.call(this, t);
                },
                metadata: function (t, e) {
                    return this.service.metadata(t, e), this;
                },
                identify: function () {
                    return this.service.identify();
                },
                find: function () {
                    return this.service.find();
                },
                query: function () {
                    return this.service.query();
                },
                authenticate: function (t) {
                    var e = "?token=" + t;
                    return (
                        (this.tileUrl = this.options.token
                            ? this.tileUrl.replace(/\?token=(.+)/g, e)
                            : this.tileUrl + e),
                        (this.options.token = t),
                        this.service.authenticate(t),
                        this
                    );
                },
                _withinPercentage: function (t, e, i) {
                    return Math.abs(t / e - 1) < i;
                },
            }),
            ct = e.ImageOverlay.extend({
                onAdd: function (t) {
                    (this._topLeft = t.getPixelBounds().min),
                        e.ImageOverlay.prototype.onAdd.call(this, t);
                },
                _reset: function () {
                    this._map.options.crs === e.CRS.EPSG3857
                        ? e.ImageOverlay.prototype._reset.call(this)
                        : e.DomUtil.setPosition(
                              this._image,
                              this._topLeft.subtract(this._map.getPixelOrigin())
                          );
                },
            }),
            dt = e.Layer.extend({
                options: {
                    opacity: 1,
                    position: "front",
                    f: "image",
                    useCors: i,
                    attribution: null,
                    interactive: !1,
                    alt: "",
                },
                onAdd: function (t) {
                    F(t),
                        this.options.zIndex && (this.options.position = null),
                        (this._update = e.Util.throttle(
                            this._update,
                            this.options.updateInterval,
                            this
                        )),
                        t.on("moveend", this._update, this),
                        this._currentImage &&
                        this._currentImage._bounds.equals(this._map.getBounds())
                            ? t.addLayer(this._currentImage)
                            : this._currentImage &&
                              (this._map.removeLayer(this._currentImage),
                              (this._currentImage = null)),
                        this._update(),
                        this._popup &&
                            (this._map.on("click", this._getPopupData, this),
                            this._map.on(
                                "dblclick",
                                this._resetPopupState,
                                this
                            )),
                        this.metadata(function (e, i) {
                            !e &&
                                !this.options.attribution &&
                                t.attributionControl &&
                                i.copyrightText &&
                                ((this.options.attribution = i.copyrightText),
                                t.attributionControl.addAttribution(
                                    this.getAttribution()
                                ));
                        }, this);
                },
                onRemove: function (t) {
                    N(t),
                        this._currentImage &&
                            this._map.removeLayer(this._currentImage),
                        this._popup &&
                            (this._map.off("click", this._getPopupData, this),
                            this._map.off(
                                "dblclick",
                                this._resetPopupState,
                                this
                            )),
                        this._map.off("moveend", this._update, this);
                },
                bindPopup: function (t, i) {
                    return (
                        (this._shouldRenderPopup = !1),
                        (this._lastClick = !1),
                        (this._popup = e.popup(i)),
                        (this._popupFunction = t),
                        this._map &&
                            (this._map.on("click", this._getPopupData, this),
                            this._map.on(
                                "dblclick",
                                this._resetPopupState,
                                this
                            )),
                        this
                    );
                },
                unbindPopup: function () {
                    return (
                        this._map &&
                            (this._map.closePopup(this._popup),
                            this._map.off("click", this._getPopupData, this),
                            this._map.off(
                                "dblclick",
                                this._resetPopupState,
                                this
                            )),
                        (this._popup = !1),
                        this
                    );
                },
                bringToFront: function () {
                    return (
                        (this.options.position = "front"),
                        this._currentImage &&
                            (this._currentImage.bringToFront(),
                            this._setAutoZIndex(Math.max)),
                        this
                    );
                },
                bringToBack: function () {
                    return (
                        (this.options.position = "back"),
                        this._currentImage &&
                            (this._currentImage.bringToBack(),
                            this._setAutoZIndex(Math.min)),
                        this
                    );
                },
                setZIndex: function (t) {
                    return (
                        (this.options.zIndex = t),
                        this._currentImage && this._currentImage.setZIndex(t),
                        this
                    );
                },
                _setAutoZIndex: function (t) {
                    if (this._currentImage) {
                        for (
                            var e,
                                i = this._currentImage.getPane().children,
                                n = -t(-1 / 0, 1 / 0),
                                o = 0,
                                s = i.length;
                            o < s;
                            o++
                        )
                            (e = i[o].style.zIndex),
                                i[o] !== this._currentImage._image &&
                                    e &&
                                    (n = t(n, +e));
                        isFinite(n) &&
                            ((this.options.zIndex = n + t(-1, 1)),
                            this.setZIndex(this.options.zIndex));
                    }
                },
                getAttribution: function () {
                    return this.options.attribution;
                },
                getOpacity: function () {
                    return this.options.opacity;
                },
                setOpacity: function (t) {
                    return (
                        (this.options.opacity = t),
                        this._currentImage && this._currentImage.setOpacity(t),
                        this
                    );
                },
                getTimeRange: function () {
                    return [this.options.from, this.options.to];
                },
                setTimeRange: function (t, e) {
                    return (
                        (this.options.from = t),
                        (this.options.to = e),
                        this._update(),
                        this
                    );
                },
                metadata: function (t, e) {
                    return this.service.metadata(t, e), this;
                },
                authenticate: function (t) {
                    return this.service.authenticate(t), this;
                },
                redraw: function () {
                    this._update();
                },
                _renderImage: function (t, e, i) {
                    if (this._map) {
                        if ((i && (t = "data:" + i + ";base64," + t), !t))
                            return;
                        var n = new ct(t, e, {
                                opacity: 0,
                                crossOrigin: this.options.withCredentials
                                    ? "use-credentials"
                                    : this.options.useCors,
                                alt: this.options.alt,
                                pane: this.options.pane || this.getPane(),
                                interactive: this.options.interactive,
                            }).addTo(this._map),
                            o = function () {
                                this._map.removeLayer(n),
                                    this.fire("error"),
                                    n.off("load", s, this);
                            },
                            s = function (t) {
                                if ((n.off("error", o, this), this._map)) {
                                    var i = t.target,
                                        s = this._currentImage;
                                    i._bounds.equals(e) &&
                                    i._bounds.equals(this._map.getBounds())
                                        ? ((this._currentImage = i),
                                          "front" === this.options.position
                                              ? this.bringToFront()
                                              : "back" ===
                                                    this.options.position &&
                                                this.bringToBack(),
                                          this.options.zIndex &&
                                              this.setZIndex(
                                                  this.options.zIndex
                                              ),
                                          this._map && this._currentImage._map
                                              ? this._currentImage.setOpacity(
                                                    this.options.opacity
                                                )
                                              : this._currentImage._map.removeLayer(
                                                    this._currentImage
                                                ),
                                          s &&
                                              this._map &&
                                              this._map.removeLayer(s),
                                          s && s._map && s._map.removeLayer(s))
                                        : this._map.removeLayer(i);
                                }
                                this.fire("load", { bounds: e });
                            };
                        n.once("error", o, this), n.once("load", s, this);
                    }
                },
                _update: function () {
                    if (this._map) {
                        var t = this._map.getZoom(),
                            i = this._map.getBounds();
                        if (
                            !(
                                this._animatingZoom ||
                                (this._map._panTransition &&
                                    this._map._panTransition._inProgress)
                            )
                        )
                            if (
                                t > this.options.maxZoom ||
                                t < this.options.minZoom
                            )
                                this._currentImage &&
                                    (this._currentImage._map.removeLayer(
                                        this._currentImage
                                    ),
                                    (this._currentImage = null));
                            else {
                                var n = this._buildExportParams();
                                e.Util.extend(n, this.options.requestParams),
                                    n
                                        ? (this._requestExport(n, i),
                                          this.fire("loading", { bounds: i }))
                                        : this._currentImage &&
                                          (this._currentImage._map.removeLayer(
                                              this._currentImage
                                          ),
                                          (this._currentImage = null));
                            }
                    }
                },
                _renderPopup: function (t, i, n, o) {
                    if (
                        ((t = e.latLng(t)),
                        this._shouldRenderPopup && this._lastClick.equals(t))
                    ) {
                        var s = this._popupFunction(i, n, o);
                        s &&
                            this._popup
                                .setLatLng(t)
                                .setContent(s)
                                .openOn(this._map);
                    }
                },
                _resetPopupState: function (t) {
                    (this._shouldRenderPopup = !1),
                        (this._lastClick = t.latlng);
                },
                _calculateBbox: function () {
                    var t = this._map.getPixelBounds(),
                        i = this._map.unproject(t.getBottomLeft()),
                        n = this._map.unproject(t.getTopRight()),
                        o = this._map.options.crs.project(n),
                        s = this._map.options.crs.project(i),
                        r = e.bounds(o, s);
                    return [
                        r.getBottomLeft().x,
                        r.getBottomLeft().y,
                        r.getTopRight().x,
                        r.getTopRight().y,
                    ].join(",");
                },
                _calculateImageSize: function () {
                    var t = this._map.getPixelBounds(),
                        e = this._map.getSize(),
                        i = this._map.unproject(t.getBottomLeft()),
                        n = this._map.unproject(t.getTopRight()),
                        o = this._map.latLngToLayerPoint(n).y,
                        s = this._map.latLngToLayerPoint(i).y;
                    return (o > 0 || s < e.y) && (e.y = s - o), e.x + "," + e.y;
                },
            }),
            pt = dt.extend({
                options: {
                    updateInterval: 150,
                    format: "jpgpng",
                    transparent: !0,
                    f: "image",
                },
                query: function () {
                    return this.service.query();
                },
                identify: function () {
                    return this.service.identify();
                },
                initialize: function (t) {
                    (t = Z(t)),
                        (this.service = st(t)),
                        this.service.addEventParent(this),
                        e.Util.setOptions(this, t);
                },
                setPixelType: function (t) {
                    return (this.options.pixelType = t), this._update(), this;
                },
                getPixelType: function () {
                    return this.options.pixelType;
                },
                setBandIds: function (t) {
                    return (
                        e.Util.isArray(t)
                            ? (this.options.bandIds = t.join(","))
                            : (this.options.bandIds = t.toString()),
                        this._update(),
                        this
                    );
                },
                getBandIds: function () {
                    return this.options.bandIds;
                },
                setNoData: function (t, i) {
                    return (
                        e.Util.isArray(t)
                            ? (this.options.noData = t.join(","))
                            : (this.options.noData = t.toString()),
                        i && (this.options.noDataInterpretation = i),
                        this._update(),
                        this
                    );
                },
                getNoData: function () {
                    return this.options.noData;
                },
                getNoDataInterpretation: function () {
                    return this.options.noDataInterpretation;
                },
                setRenderingRule: function (t) {
                    (this.options.renderingRule = t), this._update();
                },
                getRenderingRule: function () {
                    return this.options.renderingRule;
                },
                setMosaicRule: function (t) {
                    (this.options.mosaicRule = t), this._update();
                },
                getMosaicRule: function () {
                    return this.options.mosaicRule;
                },
                _getPopupData: function (t) {
                    var i = e.Util.bind(function (i, n, o) {
                            i ||
                                setTimeout(
                                    e.Util.bind(function () {
                                        this._renderPopup(t.latlng, i, n, o);
                                    }, this),
                                    300
                                );
                        }, this),
                        n = this.identify().at(t.latlng);
                    this.options.mosaicRule &&
                        n.setMosaicRule(this.options.mosaicRule),
                        n.run(i),
                        (this._shouldRenderPopup = !0),
                        (this._lastClick = t.latlng);
                },
                _buildExportParams: function () {
                    var t = parseInt(
                            this._map.options.crs.code.split(":")[1],
                            10
                        ),
                        e = {
                            bbox: this._calculateBbox(),
                            size: this._calculateImageSize(),
                            format: this.options.format,
                            transparent: this.options.transparent,
                            bboxSR: t,
                            imageSR: t,
                        };
                    return (
                        this.options.from &&
                            this.options.to &&
                            (e.time =
                                this.options.from.valueOf() +
                                "," +
                                this.options.to.valueOf()),
                        this.options.pixelType &&
                            (e.pixelType = this.options.pixelType),
                        this.options.interpolation &&
                            (e.interpolation = this.options.interpolation),
                        this.options.compressionQuality &&
                            (e.compressionQuality =
                                this.options.compressionQuality),
                        this.options.bandIds &&
                            (e.bandIds = this.options.bandIds),
                        (0 === this.options.noData || this.options.noData) &&
                            (e.noData = this.options.noData),
                        this.options.noDataInterpretation &&
                            (e.noDataInterpretation =
                                this.options.noDataInterpretation),
                        this.service.options.token &&
                            (e.token = this.service.options.token),
                        this.options.renderingRule &&
                            (e.renderingRule = JSON.stringify(
                                this.options.renderingRule
                            )),
                        this.options.mosaicRule &&
                            (e.mosaicRule = JSON.stringify(
                                this.options.mosaicRule
                            )),
                        e
                    );
                },
                _requestExport: function (t, i) {
                    if ("json" === this.options.f)
                        this.service.request(
                            "exportImage",
                            t,
                            function (t, e) {
                                t ||
                                    (this.options.token &&
                                        (e.href +=
                                            "?token=" + this.options.token),
                                    this.options.proxy &&
                                        (e.href =
                                            this.options.proxy + "?" + e.href),
                                    this._renderImage(e.href, i));
                            },
                            this
                        );
                    else {
                        t.f = "image";
                        var n =
                            this.options.url +
                            "exportImage" +
                            e.Util.getParamString(t);
                        this.options.proxy &&
                            (n = this.options.proxy + "?" + n),
                            this._renderImage(n, i);
                    }
                },
            }),
            _t = dt.extend({
                options: {
                    updateInterval: 150,
                    layers: !1,
                    layerDefs: !1,
                    timeOptions: !1,
                    format: "png32",
                    transparent: !0,
                    f: "json",
                },
                initialize: function (t) {
                    (t = Z(t)),
                        (this.service = nt(t)),
                        this.service.addEventParent(this),
                        e.Util.setOptions(this, t);
                },
                getDynamicLayers: function () {
                    return this.options.dynamicLayers;
                },
                setDynamicLayers: function (t) {
                    return (
                        (this.options.dynamicLayers = t), this._update(), this
                    );
                },
                getLayers: function () {
                    return this.options.layers;
                },
                setLayers: function (t) {
                    return (this.options.layers = t), this._update(), this;
                },
                getLayerDefs: function () {
                    return this.options.layerDefs;
                },
                setLayerDefs: function (t) {
                    return (this.options.layerDefs = t), this._update(), this;
                },
                getTimeOptions: function () {
                    return this.options.timeOptions;
                },
                setTimeOptions: function (t) {
                    return (this.options.timeOptions = t), this._update(), this;
                },
                query: function () {
                    return this.service.query();
                },
                identify: function () {
                    return this.service.identify();
                },
                find: function () {
                    return this.service.find();
                },
                _getPopupData: function (t) {
                    var i,
                        n = e.Util.bind(function (i, n, o) {
                            i ||
                                setTimeout(
                                    e.Util.bind(function () {
                                        this._renderPopup(t.latlng, i, n, o);
                                    }, this),
                                    300
                                );
                        }, this);
                    if (
                        ((i = this.options.popup
                            ? this.options.popup.on(this._map).at(t.latlng)
                            : this.identify().on(this._map).at(t.latlng)).params
                            .maxAllowableOffset || i.simplify(this._map, 0.5),
                        (this.options.popup &&
                            this.options.popup.params &&
                            this.options.popup.params.layers) ||
                            (this.options.layers
                                ? i.layers(
                                      "visible:" + this.options.layers.join(",")
                                  )
                                : i.layers("visible")),
                        this.options.layerDefs &&
                            "string" != typeof this.options.layerDefs &&
                            !i.params.layerDefs)
                    )
                        for (var o in this.options.layerDefs)
                            Object.prototype.hasOwnProperty.call(
                                this.options.layerDefs,
                                o
                            ) && i.layerDef(o, this.options.layerDefs[o]);
                    i.run(n),
                        (this._shouldRenderPopup = !0),
                        (this._lastClick = t.latlng);
                },
                _buildExportParams: function () {
                    var t = parseInt(
                            this._map.options.crs.code.split(":")[1],
                            10
                        ),
                        e = {
                            bbox: this._calculateBbox(),
                            size: this._calculateImageSize(),
                            dpi: 96,
                            format: this.options.format,
                            transparent: this.options.transparent,
                            bboxSR: t,
                            imageSR: t,
                        };
                    if (
                        (this.options.dynamicLayers &&
                            (e.dynamicLayers = this.options.dynamicLayers),
                        this.options.layers)
                    ) {
                        if (0 === this.options.layers.length) return;
                        e.layers = "show:" + this.options.layers.join(",");
                    }
                    return (
                        this.options.layerDefs &&
                            (e.layerDefs =
                                "string" == typeof this.options.layerDefs
                                    ? this.options.layerDefs
                                    : JSON.stringify(this.options.layerDefs)),
                        this.options.timeOptions &&
                            (e.timeOptions = JSON.stringify(
                                this.options.timeOptions
                            )),
                        this.options.from &&
                            this.options.to &&
                            (e.time =
                                this.options.from.valueOf() +
                                "," +
                                this.options.to.valueOf()),
                        this.service.options.token &&
                            (e.token = this.service.options.token),
                        this.options.proxy && (e.proxy = this.options.proxy),
                        this.options.disableCache && (e._ts = Date.now()),
                        e
                    );
                },
                _requestExport: function (t, i) {
                    if ("json" === this.options.f)
                        this.service.request(
                            "export",
                            t,
                            function (t, e) {
                                t ||
                                    (this.options.token &&
                                        e.href &&
                                        (e.href +=
                                            "?token=" + this.options.token),
                                    this.options.proxy &&
                                        e.href &&
                                        (e.href =
                                            this.options.proxy + "?" + e.href),
                                    e.href
                                        ? this._renderImage(e.href, i)
                                        : this._renderImage(
                                              e.imageData,
                                              i,
                                              e.contentType
                                          ));
                            },
                            this
                        );
                    else {
                        t.f = "image";
                        var n =
                            this.options.url +
                            "export" +
                            e.Util.getParamString(t);
                        this.options.proxy &&
                            (n = this.options.proxy + "?" + n),
                            this._renderImage(n, i);
                    }
                },
            }),
            mt = e.Layer.extend({
                options: {
                    cellSize: 512,
                    updateWhenIdle: e.Browser.mobile,
                    updateInterval: 150,
                    noWrap: !1,
                    keepBuffer: 1.5,
                },
                initialize: function (t) {
                    e.Util.setOptions(this, t);
                },
                onAdd: function (t) {
                    (this._cells = {}),
                        (this._activeCells = {}),
                        this._resetView(),
                        this._update();
                },
                onRemove: function (t) {
                    this._removeAllCells(), (this._cellZoom = void 0);
                },
                isLoading: function () {
                    return this._loading;
                },
                redraw: function () {
                    return (
                        this._map && (this._removeAllCells(), this._update()),
                        this
                    );
                },
                getEvents: function () {
                    var t = {
                        viewprereset: this._invalidateAll,
                        viewreset: this._resetView,
                        zoom: this._resetView,
                        moveend: this._onMoveEnd,
                    };
                    return (
                        this.options.updateWhenIdle ||
                            (this._onMove ||
                                (this._onMove = e.Util.throttle(
                                    this._onMoveEnd,
                                    this.options.updateInterval,
                                    this
                                )),
                            (t.move = this._onMove)),
                        t
                    );
                },
                createCell: function () {
                    return document.createElement("div");
                },
                removeCell: function () {},
                reuseCell: function () {},
                cellLeave: function () {},
                cellEnter: function () {},
                getCellSize: function () {
                    var t = this.options.cellSize;
                    return t instanceof e.Point ? t : new e.Point(t, t);
                },
                _pruneCells: function () {
                    if (this._map) {
                        var t, e;
                        for (t in this._cells)
                            (e = this._cells[t]).retain = e.current;
                        for (t in this._cells)
                            if ((e = this._cells[t]).current && !e.active) {
                                var i = e.coords;
                                this._retainParent(i.x, i.y, i.z, i.z - 5) ||
                                    this._retainChildren(
                                        i.x,
                                        i.y,
                                        i.z,
                                        i.z + 2
                                    );
                            }
                        for (t in this._cells)
                            this._cells[t].retain || this._removeCell(t);
                    }
                },
                _removeAllCells: function () {
                    for (var t in this._cells) this._removeCell(t);
                },
                _invalidateAll: function () {
                    this._removeAllCells(), (this._cellZoom = void 0);
                },
                _retainParent: function (t, i, n, o) {
                    var s = Math.floor(t / 2),
                        r = Math.floor(i / 2),
                        a = n - 1,
                        h = new e.Point(+s, +r);
                    h.z = +a;
                    var l = this._cellCoordsToKey(h),
                        u = this._cells[l];
                    return u && u.active
                        ? ((u.retain = !0), !0)
                        : (u && u.loaded && (u.retain = !0),
                          a > o && this._retainParent(s, r, a, o));
                },
                _retainChildren: function (t, i, n, o) {
                    for (var s = 2 * t; s < 2 * t + 2; s++)
                        for (var r = 2 * i; r < 2 * i + 2; r++) {
                            var a = new e.Point(s, r);
                            a.z = n + 1;
                            var h = this._cellCoordsToKey(a),
                                l = this._cells[h];
                            l && l.active
                                ? (l.retain = !0)
                                : (l && l.loaded && (l.retain = !0),
                                  n + 1 < o &&
                                      this._retainChildren(s, r, n + 1, o));
                        }
                },
                _resetView: function (t) {
                    var e = t && (t.pinch || t.flyTo);
                    e ||
                        this._setView(
                            this._map.getCenter(),
                            this._map.getZoom(),
                            e,
                            e
                        );
                },
                _setView: function (t, e, i, n) {
                    var o = Math.round(e);
                    n ||
                        ((this._cellZoom = o),
                        this._abortLoading && this._abortLoading(),
                        this._resetGrid(),
                        void 0 !== o && this._update(t),
                        i || this._pruneCells(),
                        (this._noPrune = !!i));
                },
                _resetGrid: function () {
                    var t = this._map,
                        e = t.options.crs,
                        i = (this._cellSize = this.getCellSize()),
                        n = this._cellZoom,
                        o = this._map.getPixelWorldBounds(this._cellZoom);
                    o && (this._globalCellRange = this._pxBoundsToCellRange(o)),
                        (this._wrapX = e.wrapLng &&
                            !this.options.noWrap && [
                                Math.floor(
                                    t.project([0, e.wrapLng[0]], n).x / i.x
                                ),
                                Math.ceil(
                                    t.project([0, e.wrapLng[1]], n).x / i.y
                                ),
                            ]),
                        (this._wrapY = e.wrapLat &&
                            !this.options.noWrap && [
                                Math.floor(
                                    t.project([e.wrapLat[0], 0], n).y / i.x
                                ),
                                Math.ceil(
                                    t.project([e.wrapLat[1], 0], n).y / i.y
                                ),
                            ]);
                },
                _onMoveEnd: function (t) {
                    (t && (t.pinch || t.flyTo)) ||
                        !this._map ||
                        this._map._animatingZoom ||
                        this._update();
                },
                _getCelldPixelBounds: function (t) {
                    var i = this._map,
                        n = i._animatingZoom
                            ? Math.max(i._animateToZoom, i.getZoom())
                            : i.getZoom(),
                        o = i.getZoomScale(n, this._cellZoom),
                        s = i.project(t, this._cellZoom).floor(),
                        r = i.getSize().divideBy(2 * o);
                    return new e.Bounds(s.subtract(r), s.add(r));
                },
                _update: function (t) {
                    var i = this._map;
                    if (i) {
                        var n = Math.round(i.getZoom());
                        void 0 === t && (t = i.getCenter());
                        var o = this._getCelldPixelBounds(t),
                            s = this._pxBoundsToCellRange(o),
                            r = s.getCenter(),
                            a = [],
                            h = this.options.keepBuffer,
                            l = new e.Bounds(
                                s.getBottomLeft().subtract([h, -h]),
                                s.getTopRight().add([h, -h])
                            );
                        if (
                            !(
                                isFinite(s.min.x) &&
                                isFinite(s.min.y) &&
                                isFinite(s.max.x) &&
                                isFinite(s.max.y)
                            )
                        )
                            throw new Error(
                                "Attempted to load an infinite number of cells"
                            );
                        for (var u in this._cells) {
                            var c = this._cells[u].coords;
                            (c.z === this._cellZoom &&
                                l.contains(new e.Point(c.x, c.y))) ||
                                (this._cells[u].current = !1);
                        }
                        if (Math.abs(n - this._cellZoom) > 1)
                            this._setView(t, n);
                        else {
                            for (var d = s.min.y; d <= s.max.y; d++)
                                for (var p = s.min.x; p <= s.max.x; p++) {
                                    var _ = new e.Point(p, d);
                                    if (
                                        ((_.z = this._cellZoom),
                                        this._isValidCell(_))
                                    ) {
                                        var m =
                                            this._cells[
                                                this._cellCoordsToKey(_)
                                            ];
                                        m ? (m.current = !0) : a.push(_);
                                    }
                                }
                            if (
                                (a.sort(function (t, e) {
                                    return t.distanceTo(r) - e.distanceTo(r);
                                }),
                                0 !== a.length)
                            )
                                for (
                                    this._loading || (this._loading = !0),
                                        p = 0;
                                    p < a.length;
                                    p++
                                ) {
                                    var f = this._cellCoordsToKey(a[p]),
                                        g = this._keyToCellCoords(f);
                                    this._activeCells[g]
                                        ? this._reuseCell(a[p])
                                        : this._createCell(a[p]);
                                }
                        }
                    }
                },
                _isValidCell: function (t) {
                    var i = this._map.options.crs;
                    if (!i.infinite) {
                        var n = this._globalCellRange;
                        if (
                            (!i.wrapLng && (t.x < n.min.x || t.x > n.max.x)) ||
                            (!i.wrapLat && (t.y < n.min.y || t.y > n.max.y))
                        )
                            return !1;
                    }
                    if (!this.options.bounds) return !0;
                    var o = this._cellCoordsToBounds(t);
                    return e.toLatLngBounds(this.options.bounds).overlaps(o);
                },
                _keyToBounds: function (t) {
                    return this._cellCoordsToBounds(this._keyToCellCoords(t));
                },
                _cellCoordsToNwSe: function (t) {
                    var e = this._map,
                        i = this.getCellSize(),
                        n = t.scaleBy(i),
                        o = n.add(i);
                    return [e.unproject(n, t.z), e.unproject(o, t.z)];
                },
                _cellCoordsToBounds: function (t) {
                    var i = this._cellCoordsToNwSe(t),
                        n = new e.LatLngBounds(i[0], i[1]);
                    return (
                        this.options.noWrap ||
                            (n = this._map.wrapLatLngBounds(n)),
                        n
                    );
                },
                _cellCoordsToKey: function (t) {
                    return t.x + ":" + t.y + ":" + t.z;
                },
                _keyToCellCoords: function (t) {
                    var i = t.split(":"),
                        n = new e.Point(+i[0], +i[1]);
                    return (n.z = +i[2]), n;
                },
                _removeCell: function (t) {
                    var e = this._cells[t];
                    if (e) {
                        var i = this._keyToCellCoords(t),
                            n = this._wrapCoords(i),
                            o = this._cellCoordsToBounds(this._wrapCoords(i));
                        (e.current = !1),
                            delete this._cells[t],
                            (this._activeCells[t] = e),
                            this.cellLeave(o, n, t),
                            this.fire("cellleave", {
                                key: t,
                                coords: n,
                                bounds: o,
                            });
                    }
                },
                _reuseCell: function (t) {
                    var e = this._cellCoordsToKey(t);
                    (this._cells[e] = this._activeCells[e]),
                        (this._cells[e].current = !0);
                    var i = this._wrapCoords(t),
                        n = this._cellCoordsToBounds(this._wrapCoords(t));
                    this.cellEnter(n, i, e),
                        this.fire("cellenter", {
                            key: e,
                            coords: i,
                            bounds: n,
                        });
                },
                _createCell: function (t) {
                    var i = this._cellCoordsToKey(t),
                        n = this._wrapCoords(t),
                        o = this._cellCoordsToBounds(this._wrapCoords(t));
                    this.createCell(o, n, i),
                        this.fire("cellcreate", {
                            key: i,
                            coords: n,
                            bounds: o,
                        }),
                        (this._cells[i] = { coords: t, current: !0 }),
                        e.Util.requestAnimFrame(this._pruneCells, this);
                },
                _cellReady: function (t, e, i) {
                    var n = this._cellCoordsToKey(t);
                    (i = this._cells[n]) &&
                        ((i.loaded = +new Date()), (i.active = !0));
                },
                _getCellPos: function (t) {
                    return t.scaleBy(this.getCellSize());
                },
                _wrapCoords: function (t) {
                    var i = new e.Point(
                        this._wrapX ? e.Util.wrapNum(t.x, this._wrapX) : t.x,
                        this._wrapY ? e.Util.wrapNum(t.y, this._wrapY) : t.y
                    );
                    return (i.z = t.z), i;
                },
                _pxBoundsToCellRange: function (t) {
                    var i = this.getCellSize();
                    return new e.Bounds(
                        t.min.unscaleBy(i).floor(),
                        t.max.unscaleBy(i).ceil().subtract([1, 1])
                    );
                },
            });
        function ft(t) {
            this.values = [].concat(t || []);
        }
        (ft.prototype.query = function (t) {
            var e = this.getIndex(t);
            return this.values[e];
        }),
            (ft.prototype.getIndex = function (t) {
                this.dirty && this.sort();
                for (var e, i, n = 0, o = this.values.length - 1; n <= o; )
                    if (
                        ((e = ((n + o) / 2) | 0),
                        +(i = this.values[Math.round(e)]).value < +t)
                    )
                        n = e + 1;
                    else {
                        if (!(+i.value > +t)) return e;
                        o = e - 1;
                    }
                return Math.abs(~o);
            }),
            (ft.prototype.between = function (t, e) {
                var i = this.getIndex(t),
                    n = this.getIndex(e);
                if (0 === i && 0 === n) return [];
                for (; this.values[i - 1] && this.values[i - 1].value === t; )
                    i--;
                for (; this.values[n + 1] && this.values[n + 1].value === e; )
                    n++;
                return (
                    this.values[n] &&
                        this.values[n].value === e &&
                        this.values[n + 1] &&
                        n++,
                    this.values.slice(i, n)
                );
            }),
            (ft.prototype.insert = function (t) {
                return this.values.splice(this.getIndex(t.value), 0, t), this;
            }),
            (ft.prototype.bulkAdd = function (t, e) {
                return (
                    (this.values = this.values.concat([].concat(t || []))),
                    e ? this.sort() : (this.dirty = !0),
                    this
                );
            }),
            (ft.prototype.sort = function () {
                return (
                    this.values
                        .sort(function (t, e) {
                            return +e.value - +t.value;
                        })
                        .reverse(),
                    (this.dirty = !1),
                    this
                );
            });
        var gt = mt.extend({
                options: {
                    attribution: null,
                    where: "1=1",
                    fields: ["*"],
                    from: !1,
                    to: !1,
                    timeField: !1,
                    timeFilterMode: "server",
                    simplifyFactor: 0,
                    precision: 6,
                    fetchAllFeatures: !1,
                },
                initialize: function (t) {
                    if (
                        (mt.prototype.initialize.call(this, t),
                        (t = Z(t)),
                        (t = e.Util.setOptions(this, t)),
                        (this.service = at(t)),
                        this.service.addEventParent(this),
                        "*" !== this.options.fields[0])
                    ) {
                        for (
                            var i = !1, n = 0;
                            n < this.options.fields.length;
                            n++
                        )
                            this.options.fields[n].match(
                                /^(OBJECTID|FID|OID|ID)$/i
                            ) && (i = !0);
                        !1 === i &&
                            _(
                                "no known esriFieldTypeOID field detected in fields Array.  Please add an attribute field containing unique IDs to ensure the layer can be drawn correctly."
                            );
                    }
                    this.options.timeField.start && this.options.timeField.end
                        ? ((this._startTimeIndex = new ft()),
                          (this._endTimeIndex = new ft()))
                        : this.options.timeField &&
                          (this._timeIndex = new ft()),
                        (this._cache = {}),
                        (this._currentSnapshot = []),
                        (this._activeRequests = 0);
                },
                onAdd: function (t) {
                    return (
                        F(t),
                        this.service.metadata(function (e, i) {
                            if (!e) {
                                var n = i.supportedQueryFormats,
                                    o = !1;
                                (!1 === this.service.options.isModern ||
                                    this.options.fetchAllFeatures) &&
                                    (o = !0),
                                    !o &&
                                        n &&
                                        -1 !== n.indexOf("geoJSON") &&
                                        (this.service.options.isModern = !0),
                                    i.objectIdField &&
                                        (this.service.options.idAttribute =
                                            i.objectIdField),
                                    !this.options.attribution &&
                                        t.attributionControl &&
                                        i.copyrightText &&
                                        ((this.options.attribution =
                                            i.copyrightText),
                                        t.attributionControl.addAttribution(
                                            this.getAttribution()
                                        ));
                            }
                        }, this),
                        t.on("zoomend", this._handleZoomChange, this),
                        mt.prototype.onAdd.call(this, t)
                    );
                },
                onRemove: function (t) {
                    return (
                        N(t),
                        t.off("zoomend", this._handleZoomChange, this),
                        mt.prototype.onRemove.call(this, t)
                    );
                },
                getAttribution: function () {
                    return this.options.attribution;
                },
                createCell: function (t, e) {
                    this._visibleZoom() && this._requestFeatures(t, e);
                },
                _requestFeatures: function (t, i, n, o) {
                    this._activeRequests++, (o = o || 0);
                    var s = this.options.where;
                    return (
                        1 === this._activeRequests &&
                            this.fire("loading", { bounds: t }, !0),
                        this._buildQuery(t, o).run(function (r, a, h) {
                            h &&
                                h.exceededTransferLimit &&
                                this.fire("drawlimitexceeded"),
                                this.options.where === s &&
                                    (!r &&
                                        a &&
                                        a.features.length &&
                                        e.Util.requestAnimFrame(
                                            e.Util.bind(function () {
                                                this._addFeatures(
                                                    a.features,
                                                    i
                                                ),
                                                    this._postProcessFeatures(
                                                        t
                                                    );
                                            }, this)
                                        ),
                                    r ||
                                        !a ||
                                        a.features.length ||
                                        this._postProcessFeatures(t),
                                    r && this._postProcessFeatures(t),
                                    n && n.call(this, r, a),
                                    h &&
                                        (h.exceededTransferLimit ||
                                            (h.properties &&
                                                h.properties
                                                    .exceededTransferLimit)) &&
                                        this.options.fetchAllFeatures &&
                                        this._requestFeatures(
                                            t,
                                            i,
                                            n,
                                            o + a.features.length
                                        ));
                        }, this)
                    );
                },
                _postProcessFeatures: function (t) {
                    this._activeRequests--,
                        this._activeRequests <= 0 &&
                            this.fire("load", { bounds: t });
                },
                _cacheKey: function (t) {
                    return t.z + ":" + t.x + ":" + t.y;
                },
                _addFeatures: function (t, e) {
                    if (e) {
                        var i = this._cacheKey(e);
                        this._cache[i] = this._cache[i] || [];
                    }
                    for (var n = t.length - 1; n >= 0; n--) {
                        var o = t[n].id;
                        -1 === this._currentSnapshot.indexOf(o) &&
                            this._currentSnapshot.push(o),
                            void 0 !== i &&
                                -1 === this._cache[i].indexOf(o) &&
                                this._cache[i].push(o);
                    }
                    this.options.timeField && this._buildTimeIndexes(t),
                        this.createLayers(t);
                },
                _buildQuery: function (t, i) {
                    var n = this.service
                        .query()
                        .intersects(t)
                        .where(this.options.where)
                        .fields(this.options.fields)
                        .precision(this.options.precision);
                    return (
                        this.options.fetchAllFeatures &&
                            !isNaN(parseInt(i)) &&
                            (n = n.offset(i)),
                        (n.params.resultType = "tile"),
                        this.options.requestParams &&
                            e.Util.extend(n.params, this.options.requestParams),
                        this.options.simplifyFactor &&
                            n.simplify(this._map, this.options.simplifyFactor),
                        "server" === this.options.timeFilterMode &&
                            this.options.from &&
                            this.options.to &&
                            n.between(this.options.from, this.options.to),
                        n
                    );
                },
                setWhere: function (t, i, n) {
                    this.options.where = t && t.length ? t : "1=1";
                    for (
                        var o = [],
                            s = [],
                            r = 0,
                            a = null,
                            h = e.Util.bind(function (h, l) {
                                if ((h && (a = h), l))
                                    for (
                                        var u = l.features.length - 1;
                                        u >= 0;
                                        u--
                                    )
                                        s.push(l.features[u].id);
                                --r <= 0 &&
                                    this._visibleZoom() &&
                                    t === this.options.where &&
                                    ((this._currentSnapshot = s),
                                    e.Util.requestAnimFrame(
                                        e.Util.bind(function () {
                                            this.removeLayers(o),
                                                this.addLayers(s),
                                                i && i.call(n, a);
                                        }, this)
                                    ));
                            }, this),
                            l = this._currentSnapshot.length - 1;
                        l >= 0;
                        l--
                    )
                        o.push(this._currentSnapshot[l]);
                    for (var u in ((this._cache = {}), this._cells)) {
                        r++;
                        var c = this._keyToCellCoords(u),
                            d = this._cellCoordsToBounds(c);
                        this._requestFeatures(d, c, h);
                    }
                    return this;
                },
                getWhere: function () {
                    return this.options.where;
                },
                getTimeRange: function () {
                    return [this.options.from, this.options.to];
                },
                setTimeRange: function (t, i, n, o) {
                    var s = this.options.from,
                        r = this.options.to,
                        a = 0,
                        h = null,
                        l = e.Util.bind(function (e) {
                            e && (h = e),
                                this._filterExistingFeatures(s, r, t, i),
                                a--,
                                n && a <= 0 && n.call(o, h);
                        }, this);
                    if (
                        ((this.options.from = t),
                        (this.options.to = i),
                        this._filterExistingFeatures(s, r, t, i),
                        "server" === this.options.timeFilterMode)
                    )
                        for (var u in this._cells) {
                            a++;
                            var c = this._keyToCellCoords(u),
                                d = this._cellCoordsToBounds(c);
                            this._requestFeatures(d, c, l);
                        }
                    return this;
                },
                refresh: function () {
                    this.setWhere(this.options.where);
                },
                _filterExistingFeatures: function (t, i, n, o) {
                    var s =
                            t && i
                                ? this._getFeaturesInTimeRange(t, i)
                                : this._currentSnapshot,
                        r = this._getFeaturesInTimeRange(n, o);
                    if (r.indexOf)
                        for (var a = 0; a < r.length; a++) {
                            var h = s.indexOf(r[a]);
                            h >= 0 && s.splice(h, 1);
                        }
                    e.Util.requestAnimFrame(
                        e.Util.bind(function () {
                            this.removeLayers(s), this.addLayers(r);
                        }, this)
                    );
                },
                _getFeaturesInTimeRange: function (t, e) {
                    var i,
                        n = [];
                    if (
                        this.options.timeField.start &&
                        this.options.timeField.end
                    ) {
                        var o = this._startTimeIndex.between(t, e),
                            s = this._endTimeIndex.between(t, e);
                        i = o.concat(s);
                    } else {
                        if (!this._timeIndex)
                            return (
                                _(
                                    "You must set timeField in the layer constructor in order to manipulate the start and end time filter."
                                ),
                                []
                            );
                        i = this._timeIndex.between(t, e);
                    }
                    for (var r = i.length - 1; r >= 0; r--) n.push(i[r].id);
                    return n;
                },
                _buildTimeIndexes: function (t) {
                    var e, i;
                    if (
                        this.options.timeField.start &&
                        this.options.timeField.end
                    ) {
                        var n = [],
                            o = [];
                        for (e = t.length - 1; e >= 0; e--)
                            (i = t[e]),
                                n.push({
                                    id: i.id,
                                    value: new Date(
                                        i.properties[
                                            this.options.timeField.start
                                        ]
                                    ),
                                }),
                                o.push({
                                    id: i.id,
                                    value: new Date(
                                        i.properties[this.options.timeField.end]
                                    ),
                                });
                        this._startTimeIndex.bulkAdd(n),
                            this._endTimeIndex.bulkAdd(o);
                    } else {
                        var s = [];
                        for (e = t.length - 1; e >= 0; e--)
                            (i = t[e]),
                                s.push({
                                    id: i.id,
                                    value: new Date(
                                        i.properties[this.options.timeField]
                                    ),
                                });
                        this._timeIndex.bulkAdd(s);
                    }
                },
                _featureWithinTimeRange: function (t) {
                    if (!this.options.from || !this.options.to) return !0;
                    var e = +this.options.from.valueOf(),
                        i = +this.options.to.valueOf();
                    if ("string" == typeof this.options.timeField) {
                        var n = +t.properties[this.options.timeField];
                        return n >= e && n <= i;
                    }
                    if (
                        this.options.timeField.start &&
                        this.options.timeField.end
                    ) {
                        var o = +t.properties[this.options.timeField.start],
                            s = +t.properties[this.options.timeField.end];
                        return (
                            (o >= e && o <= i) ||
                            (s >= e && s <= i) ||
                            (o <= e && s >= i)
                        );
                    }
                },
                _visibleZoom: function () {
                    if (!this._map) return !1;
                    var t = this._map.getZoom();
                    return !(
                        t > this.options.maxZoom || t < this.options.minZoom
                    );
                },
                _handleZoomChange: function () {
                    if (this._visibleZoom())
                        for (var t in this._cells) {
                            var e = this._cells[t].coords,
                                i = this._cacheKey(e);
                            this._cache[i] && this.addLayers(this._cache[i]);
                        }
                    else
                        this.removeLayers(this._currentSnapshot),
                            (this._currentSnapshot = []);
                },
                authenticate: function (t) {
                    return this.service.authenticate(t), this;
                },
                metadata: function (t, e) {
                    return this.service.metadata(t, e), this;
                },
                query: function () {
                    return this.service.query();
                },
                _getMetadata: function (t) {
                    this._metadata
                        ? t(void 0, this._metadata)
                        : this.metadata(
                              e.Util.bind(function (e, i) {
                                  (this._metadata = i), t(e, this._metadata);
                              }, this)
                          );
                },
                addFeature: function (t, e, i) {
                    this.addFeatures(t, e, i);
                },
                addFeatures: function (t, i, n) {
                    this._getMetadata(
                        e.Util.bind(function (o, s) {
                            if (o) i && i.call(this, o, null);
                            else {
                                var r = t.features ? t.features : [t];
                                this.service.addFeatures(
                                    t,
                                    e.Util.bind(function (t, e) {
                                        if (!t) {
                                            for (
                                                var o = r.length - 1;
                                                o >= 0;
                                                o--
                                            )
                                                (r[o].properties[
                                                    s.objectIdField
                                                ] =
                                                    r.length > 1
                                                        ? e[o].objectId
                                                        : e.objectId),
                                                    (r[o].id =
                                                        r.length > 1
                                                            ? e[o].objectId
                                                            : e.objectId);
                                            this._addFeatures(r);
                                        }
                                        i && i.call(n, t, e);
                                    }, this)
                                );
                            }
                        }, this)
                    );
                },
                updateFeature: function (t, e, i) {
                    this.updateFeatures(t, e, i);
                },
                updateFeatures: function (t, e, i) {
                    var n = t.features ? t.features : [t];
                    this.service.updateFeatures(
                        t,
                        function (t, o) {
                            if (!t) {
                                for (var s = n.length - 1; s >= 0; s--)
                                    this.removeLayers([n[s].id], !0);
                                this._addFeatures(n);
                            }
                            e && e.call(i, t, o);
                        },
                        this
                    );
                },
                deleteFeature: function (t, e, i) {
                    this.deleteFeatures(t, e, i);
                },
                deleteFeatures: function (t, e, i) {
                    return this.service.deleteFeatures(
                        t,
                        function (t, n) {
                            var o = n.length ? n : [n];
                            if (!t && o.length > 0)
                                for (var s = o.length - 1; s >= 0; s--)
                                    this.removeLayers([o[s].objectId], !0);
                            e && e.call(i, t, n);
                        },
                        this
                    );
                },
            }),
            vt = gt.extend({
                options: { cacheLayers: !0 },
                initialize: function (t) {
                    t.apikey && (t.token = t.apikey),
                        gt.prototype.initialize.call(this, t),
                        (this._originalStyle = this.options.style),
                        (this._layers = {});
                },
                onRemove: function (t) {
                    for (var e in this._layers)
                        t.removeLayer(this._layers[e]),
                            this.fire(
                                "removefeature",
                                {
                                    feature: this._layers[e].feature,
                                    permanent: !1,
                                },
                                !0
                            );
                    return gt.prototype.onRemove.call(this, t);
                },
                createNewLayer: function (t) {
                    var i = e.GeoJSON.geometryToLayer(t, this.options);
                    return i && (i.defaultOptions = i.options), i;
                },
                _updateLayer: function (t, i) {
                    var n = [],
                        o =
                            this.options.coordsToLatLng ||
                            e.GeoJSON.coordsToLatLng;
                    switch (
                        (i.properties && (t.feature.properties = i.properties),
                        i.geometry.type)
                    ) {
                        case "Point":
                            (n = e.GeoJSON.coordsToLatLng(
                                i.geometry.coordinates
                            )),
                                t.setLatLng(n);
                            break;
                        case "LineString":
                            (n = e.GeoJSON.coordsToLatLngs(
                                i.geometry.coordinates,
                                0,
                                o
                            )),
                                t.setLatLngs(n);
                            break;
                        case "MultiLineString":
                        case "Polygon":
                            (n = e.GeoJSON.coordsToLatLngs(
                                i.geometry.coordinates,
                                1,
                                o
                            )),
                                t.setLatLngs(n);
                            break;
                        case "MultiPolygon":
                            (n = e.GeoJSON.coordsToLatLngs(
                                i.geometry.coordinates,
                                2,
                                o
                            )),
                                t.setLatLngs(n);
                    }
                    this.redraw(t.feature.id);
                },
                createLayers: function (t) {
                    for (var e = t.length - 1; e >= 0; e--) {
                        var i,
                            n = t[e],
                            o = this._layers[n.id];
                        !this._visibleZoom() ||
                            !o ||
                            this._map.hasLayer(o) ||
                            (this.options.timeField &&
                                !this._featureWithinTimeRange(n)) ||
                            (this._map.addLayer(o),
                            this.fire(
                                "addfeature",
                                { feature: o.feature },
                                !0
                            )),
                            o &&
                                (o.setLatLngs || o.setLatLng) &&
                                this._updateLayer(o, n),
                            o ||
                                ((i = this.createNewLayer(n))
                                    ? ((i.feature = n),
                                      i.addEventParent(this),
                                      this.options.onEachFeature &&
                                          this.options.onEachFeature(
                                              i.feature,
                                              i
                                          ),
                                      (this._layers[i.feature.id] = i),
                                      this.setFeatureStyle(
                                          i.feature.id,
                                          this.options.style
                                      ),
                                      this.fire(
                                          "createfeature",
                                          { feature: i.feature },
                                          !0
                                      ),
                                      this._visibleZoom() &&
                                          (!this.options.timeField ||
                                              (this.options.timeField &&
                                                  this._featureWithinTimeRange(
                                                      n
                                                  ))) &&
                                          this._map.addLayer(i))
                                    : _("invalid GeoJSON encountered"));
                    }
                },
                addLayers: function (t) {
                    for (var e = t.length - 1; e >= 0; e--) {
                        var i = this._layers[t[e]];
                        !i ||
                            (this.options.timeField &&
                                !this._featureWithinTimeRange(i.feature)) ||
                            (this._map.addLayer(i),
                            this.fire(
                                "addfeature",
                                { feature: i.feature },
                                !0
                            ));
                    }
                },
                removeLayers: function (t, e) {
                    for (var i = t.length - 1; i >= 0; i--) {
                        var n = t[i],
                            o = this._layers[n];
                        o &&
                            (this.fire(
                                "removefeature",
                                { feature: o.feature, permanent: e },
                                !0
                            ),
                            this._map.removeLayer(o)),
                            o && e && delete this._layers[n];
                    }
                },
                cellEnter: function (t, i) {
                    this._visibleZoom() &&
                        !this._zooming &&
                        this._map &&
                        e.Util.requestAnimFrame(
                            e.Util.bind(function () {
                                var t = this._cacheKey(i),
                                    e = this._cellCoordsToKey(i),
                                    n = this._cache[t];
                                this._activeCells[e] && n && this.addLayers(n);
                            }, this)
                        );
                },
                cellLeave: function (t, i) {
                    this._zooming ||
                        e.Util.requestAnimFrame(
                            e.Util.bind(function () {
                                if (this._map) {
                                    var t = this._cacheKey(i),
                                        e = this._cellCoordsToKey(i),
                                        n = this._cache[t],
                                        o = this._map.getBounds();
                                    if (!this._activeCells[e] && n) {
                                        for (
                                            var s = !0, r = 0;
                                            r < n.length;
                                            r++
                                        ) {
                                            var a = this._layers[n[r]];
                                            a &&
                                                a.getBounds &&
                                                o.intersects(a.getBounds()) &&
                                                (s = !1);
                                        }
                                        s &&
                                            this.removeLayers(
                                                n,
                                                !this.options.cacheLayers
                                            ),
                                            !this.options.cacheLayers &&
                                                s &&
                                                (delete this._cache[t],
                                                delete this._cells[e],
                                                delete this._activeCells[e]);
                                    }
                                }
                            }, this)
                        );
                },
                resetStyle: function () {
                    return (
                        (this.options.style = this._originalStyle),
                        this.eachFeature(function (t) {
                            this.resetFeatureStyle(t.feature.id);
                        }, this),
                        this
                    );
                },
                setStyle: function (t) {
                    return (
                        (this.options.style = t),
                        this.eachFeature(function (e) {
                            this.setFeatureStyle(e.feature.id, t);
                        }, this),
                        this
                    );
                },
                resetFeatureStyle: function (t) {
                    var i = this._layers[t],
                        n = this._originalStyle || e.Path.prototype.options;
                    return (
                        i &&
                            (e.Util.extend(i.options, i.defaultOptions),
                            this.setFeatureStyle(t, n)),
                        this
                    );
                },
                setFeatureStyle: function (t, e) {
                    var i = this._layers[t];
                    return (
                        "function" == typeof e && (e = e(i.feature)),
                        i.setStyle && i.setStyle(e),
                        this
                    );
                },
                eachActiveFeature: function (t, e) {
                    if (this._map) {
                        var i = this._map.getBounds();
                        for (var n in this._layers)
                            -1 !==
                                this._currentSnapshot.indexOf(
                                    this._layers[n].feature.id
                                ) &&
                                (("function" ==
                                    typeof this._layers[n].getLatLng &&
                                    i.contains(this._layers[n].getLatLng())) ||
                                    ("function" ==
                                        typeof this._layers[n].getBounds &&
                                        i.intersects(
                                            this._layers[n].getBounds()
                                        ))) &&
                                t.call(e, this._layers[n]);
                    }
                    return this;
                },
                eachFeature: function (t, e) {
                    for (var i in this._layers) t.call(e, this._layers[i]);
                    return this;
                },
                getFeature: function (t) {
                    return this._layers[t];
                },
                bringToBack: function () {
                    this.eachFeature(function (t) {
                        t.bringToBack && t.bringToBack();
                    });
                },
                bringToFront: function () {
                    this.eachFeature(function (t) {
                        t.bringToFront && t.bringToFront();
                    });
                },
                redraw: function (t) {
                    return t && this._redraw(t), this;
                },
                _redraw: function (t) {
                    var i = this._layers[t],
                        n = i.feature;
                    if (
                        i &&
                        i.setIcon &&
                        this.options.pointToLayer &&
                        this.options.pointToLayer
                    ) {
                        var o = this.options.pointToLayer(
                            n,
                            e.latLng(
                                n.geometry.coordinates[1],
                                n.geometry.coordinates[0]
                            )
                        ).options.icon;
                        i.setIcon(o);
                    }
                    if (i && i.setStyle && this.options.pointToLayer) {
                        var s = this.options.pointToLayer(
                            n,
                            e.latLng(
                                n.geometry.coordinates[1],
                                n.geometry.coordinates[0]
                            )
                        ).options;
                        this.setFeatureStyle(n.id, s);
                    }
                    i &&
                        i.setStyle &&
                        this.options.style &&
                        this.resetStyle(n.id);
                },
            });
        (t.BasemapLayer = lt),
            (t.DynamicMapLayer = _t),
            (t.FeatureLayer = vt),
            (t.FeatureLayerService = rt),
            (t.FeatureManager = gt),
            (t.Find = K),
            (t.Identify = Y),
            (t.IdentifyFeatures = Q),
            (t.IdentifyImage = $),
            (t.ImageMapLayer = pt),
            (t.ImageService = ot),
            (t.MapService = it),
            (t.Query = H),
            (t.RasterLayer = dt),
            (t.Service = et),
            (t.Support = o),
            (t.Task = W),
            (t.TiledMapLayer = ut),
            (t.Util = q),
            (t.VERSION = "3.0.8"),
            (t.basemapLayer = function (t, e) {
                return new lt(t, e);
            }),
            (t.dynamicMapLayer = function (t, e) {
                return new _t(t, e);
            }),
            (t.featureLayer = function (t) {
                return new vt(t);
            }),
            (t.featureLayerService = at),
            (t.find = J),
            (t.get = p),
            (t.identify = function (t) {
                return new Y(t);
            }),
            (t.identifyFeatures = X),
            (t.identifyImage = tt),
            (t.imageMapLayer = function (t, e) {
                return new pt(t, e);
            }),
            (t.imageService = st),
            (t.mapService = nt),
            (t.options = s),
            (t.post = l),
            (t.query = V),
            (t.request = c),
            (t.service = function (t) {
                return (t = Z(t)), new et(t);
            }),
            (t.task = function (t) {
                return (t = Z(t)), new W(t);
            }),
            (t.tiledMapLayer = function (t, e) {
                return new ut(t, e);
            }),
            Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module
            ? e(exports, require("leaflet"), require("esri-leaflet"))
            : "function" == typeof define && define.amd
            ? define(["exports", "leaflet", "esri-leaflet"], e)
            : e(
                  (((t =
                      "undefined" != typeof globalThis
                          ? globalThis
                          : t || self).L = t.L || {}),
                  (t.L.esri = t.L.esri || {}),
                  (t.L.esri.Geocoding = {})),
                  t.L,
                  t.L.esri
              );
    })(this, function (t, e, i) {
        "use strict";
        var n =
                "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/",
            o = i.Task.extend({
                path: "findAddressCandidates",
                params: {
                    outSr: 4326,
                    forStorage: !1,
                    outFields: "*",
                    maxLocations: 20,
                },
                setters: {
                    address: "address",
                    neighborhood: "neighborhood",
                    city: "city",
                    subregion: "subregion",
                    region: "region",
                    postal: "postal",
                    country: "country",
                    text: "singleLine",
                    category: "category",
                    token: "token",
                    apikey: "apikey",
                    key: "magicKey",
                    fields: "outFields",
                    forStorage: "forStorage",
                    maxLocations: "maxLocations",
                    countries: "sourceCountry",
                },
                initialize: function (t) {
                    ((t = t || {}).url = t.url || n),
                        i.Task.prototype.initialize.call(this, t);
                },
                within: function (t) {
                    return (
                        (t = e.latLngBounds(t)),
                        (this.params.searchExtent = i.Util.boundsToExtent(t)),
                        this
                    );
                },
                nearby: function (t, i) {
                    var n = e.latLng(t);
                    return (
                        (this.params.location = n.lng + "," + n.lat),
                        i &&
                            (this.params.distance = Math.min(
                                Math.max(i, 2e3),
                                5e4
                            )),
                        this
                    );
                },
                run: function (t, e) {
                    return (
                        this.options.token &&
                            (this.params.token = this.options.token),
                        this.options.apikey &&
                            (this.params.token = this.options.apikey),
                        this.options.customParam &&
                            ((this.params[this.options.customParam] =
                                this.params.singleLine),
                            delete this.params.singleLine),
                        this.request(function (i, n) {
                            var o = this._processGeocoderResponse,
                                s = i ? void 0 : o(n);
                            t.call(e, i, { results: s }, n);
                        }, this)
                    );
                },
                _processGeocoderResponse: function (t) {
                    for (var n = [], o = 0; o < t.candidates.length; o++) {
                        var s = t.candidates[o];
                        if (s.extent) var r = i.Util.extentToBounds(s.extent);
                        n.push({
                            text: s.address,
                            bounds: r,
                            score: s.score,
                            latlng: e.latLng(s.location.y, s.location.x),
                            properties: s.attributes,
                        });
                    }
                    return n;
                },
            });
        function s(t) {
            return new o(t);
        }
        var r = i.Task.extend({
            path: "reverseGeocode",
            params: { outSR: 4326, returnIntersection: !1 },
            setters: {
                distance: "distance",
                language: "langCode",
                intersection: "returnIntersection",
                apikey: "apikey",
            },
            initialize: function (t) {
                ((t = t || {}).url = t.url || n),
                    i.Task.prototype.initialize.call(this, t);
            },
            latlng: function (t) {
                var i = e.latLng(t);
                return (this.params.location = i.lng + "," + i.lat), this;
            },
            run: function (t, i) {
                return (
                    this.options.token &&
                        (this.params.token = this.options.token),
                    this.options.apikey &&
                        (this.params.token = this.options.apikey),
                    this.request(function (n, o) {
                        var s;
                        (s = n
                            ? void 0
                            : {
                                  latlng: e.latLng(o.location.y, o.location.x),
                                  address: o.address,
                              }),
                            t.call(i, n, s, o);
                    }, this)
                );
            },
        });
        function a(t) {
            return new r(t);
        }
        var h = i.Task.extend({
            path: "suggest",
            params: {},
            setters: {
                text: "text",
                category: "category",
                countries: "countryCode",
                maxSuggestions: "maxSuggestions",
            },
            initialize: function (t) {
                (t = t || {}).url || ((t.url = n), (t.supportsSuggest = !0)),
                    i.Task.prototype.initialize.call(this, t);
            },
            within: function (t) {
                var n = (t = e.latLngBounds(t)).getCenter(),
                    o = t.getNorthWest();
                return (
                    (this.params.location = n.lng + "," + n.lat),
                    (this.params.distance = Math.min(
                        Math.max(n.distanceTo(o), 2e3),
                        5e4
                    )),
                    (this.params.searchExtent = i.Util.boundsToExtent(t)),
                    this
                );
            },
            nearby: function (t, i) {
                var n = e.latLng(t);
                return (
                    (this.params.location = n.lng + "," + n.lat),
                    i &&
                        (this.params.distance = Math.min(
                            Math.max(i, 2e3),
                            5e4
                        )),
                    this
                );
            },
            run: function (t, e) {
                if (this.options.supportsSuggest)
                    return this.request(function (i, n) {
                        t.call(e, i, n, n);
                    }, this);
                console.warn(
                    "this geocoding service does not support asking for suggestions"
                );
            },
        });
        function l(t) {
            return new h(t);
        }
        var u = i.Service.extend({
                initialize: function (t) {
                    (t = t || {}).apikey && (t.token = t.apikey),
                        t.url
                            ? (i.Service.prototype.initialize.call(this, t),
                              this._confirmSuggestSupport())
                            : ((t.url = n),
                              (t.supportsSuggest = !0),
                              i.Service.prototype.initialize.call(this, t));
                },
                geocode: function () {
                    return s(this);
                },
                reverse: function () {
                    return a(this);
                },
                suggest: function () {
                    return l(this);
                },
                _confirmSuggestSupport: function () {
                    this.metadata(function (t, e) {
                        t ||
                            (e.capabilities &&
                            e.capabilities.indexOf("Suggest") > -1
                                ? (this.options.supportsSuggest = !0)
                                : (this.options.supportsSuggest = !1),
                            (this.options.customParam =
                                e.singleLineAddressField.name));
                    }, this);
                },
            }),
            c = e.Evented.extend({
                options: {
                    zoomToResult: !0,
                    useMapBounds: 12,
                    searchBounds: null,
                },
                initialize: function (t, i) {
                    if (
                        (e.Util.setOptions(this, i),
                        (this._control = t),
                        !i || !i.providers || !i.providers.length)
                    )
                        throw new Error(
                            "You must specify at least one provider"
                        );
                    this._providers = i.providers;
                },
                _geocode: function (t, i, n) {
                    var o,
                        s = 0,
                        r = [],
                        a = e.Util.bind(function (e, i) {
                            s--,
                                e ||
                                    (i && (r = r.concat(i)),
                                    s <= 0 &&
                                        ((o = this._boundsFromResults(r)),
                                        this.fire(
                                            "results",
                                            {
                                                results: r,
                                                bounds: o,
                                                latlng: o
                                                    ? o.getCenter()
                                                    : void 0,
                                                text: t,
                                            },
                                            !0
                                        ),
                                        this.options.zoomToResult &&
                                            o &&
                                            this._control._map.fitBounds(o),
                                        this.fire("load")));
                        }, this);
                    if (i) s++, n.results(t, i, this._searchBounds(), a);
                    else
                        for (var h = 0; h < this._providers.length; h++)
                            s++,
                                this._providers[h].results(
                                    t,
                                    i,
                                    this._searchBounds(),
                                    a
                                );
                },
                _suggest: function (t) {
                    var i = this._providers.length,
                        n = 0,
                        o = e.Util.bind(function (t, o) {
                            return e.Util.bind(function (e, s) {
                                if (((i -= 1), (n += s.length), e))
                                    return (
                                        this._control._clearProviderSuggestions(
                                            o
                                        ),
                                        void this._control._finalizeSuggestions(
                                            i,
                                            n
                                        )
                                    );
                                if (s.length)
                                    for (var r = 0; r < s.length; r++)
                                        s[r].provider = o;
                                else this._control._renderSuggestions(s);
                                o._lastRender !== t &&
                                    this._control._clearProviderSuggestions(o),
                                    s.length &&
                                        this._control._input.value === t &&
                                        ((o._lastRender = t),
                                        this._control._renderSuggestions(s)),
                                    this._control._finalizeSuggestions(i, n);
                            }, this);
                        }, this);
                    this._pendingSuggestions = [];
                    for (var s = 0; s < this._providers.length; s++) {
                        var r = this._providers[s],
                            a = r.suggestions(t, this._searchBounds(), o(t, r));
                        this._pendingSuggestions.push(a);
                    }
                },
                _searchBounds: function () {
                    return null !== this.options.searchBounds
                        ? this.options.searchBounds
                        : !1 === this.options.useMapBounds
                        ? null
                        : !0 === this.options.useMapBounds ||
                          this.options.useMapBounds <=
                              this._control._map.getZoom()
                        ? this._control._map.getBounds()
                        : null;
                },
                _boundsFromResults: function (t) {
                    if (t.length) {
                        for (
                            var i = e.latLngBounds([0, 0], [0, 0]),
                                n = [],
                                o = [],
                                s = t.length - 1;
                            s >= 0;
                            s--
                        ) {
                            var r = t[s];
                            o.push(r.latlng),
                                r.bounds &&
                                    r.bounds.isValid() &&
                                    !r.bounds.equals(i) &&
                                    n.push(r.bounds);
                        }
                        for (
                            var a = e.latLngBounds(o), h = 0;
                            h < n.length;
                            h++
                        )
                            a.extend(n[h]);
                        return a;
                    }
                },
                _getAttribution: function () {
                    for (
                        var t = [], e = this._providers, i = 0;
                        i < e.length;
                        i++
                    )
                        e[i].options.attribution &&
                            t.push(e[i].options.attribution);
                    return t.join(", ");
                },
            });
        function d(t, e) {
            return new c(t, e);
        }
        var p = u.extend({
            options: { label: "Places and Addresses", maxResults: 5 },
            suggestions: function (t, e, i) {
                var n = this.suggest().text(t);
                return (
                    e && n.within(e),
                    this.options.nearby && n.nearby(this.options.nearby),
                    this.options.countries &&
                        n.countries(this.options.countries),
                    this.options.categories &&
                        n.category(this.options.categories),
                    n.maxSuggestions(this.options.maxResults),
                    n.run(function (t, e, n) {
                        var o = [];
                        if (!t)
                            for (
                                ;
                                n.suggestions.length &&
                                o.length <= this.options.maxResults - 1;

                            ) {
                                var s = n.suggestions.shift();
                                s.isCollection ||
                                    o.push({
                                        text: s.text,
                                        unformattedText: s.text,
                                        magicKey: s.magicKey,
                                    });
                            }
                        i(t, o);
                    }, this)
                );
            },
            results: function (t, e, i, n) {
                var o = this.geocode().text(t);
                return (
                    e && o.key(e),
                    o.maxLocations(this.options.maxResults),
                    i && o.within(i),
                    this.options.forStorage && o.forStorage(!0),
                    this.options.nearby && o.nearby(this.options.nearby),
                    this.options.countries &&
                        o.countries(this.options.countries),
                    this.options.categories &&
                        o.category(this.options.categories),
                    o.run(function (t, e) {
                        n(t, e.results);
                    }, this)
                );
            },
        });
        function _(t) {
            return new p(t);
        }
        var m = e.Control.extend({
                includes: e.Evented.prototype,
                options: {
                    position: "topleft",
                    collapseAfterResult: !0,
                    expanded: !1,
                    allowMultipleResults: !0,
                    placeholder: "Search for places or addresses",
                    title: "Location Search",
                },
                initialize: function (t) {
                    e.Util.setOptions(this, t),
                        (t && t.providers && t.providers.length) ||
                            (t || (t = {}), (t.providers = [_()])),
                        (this._geosearchCore = d(this, t)),
                        (this._geosearchCore._providers = t.providers),
                        this._geosearchCore.addEventParent(this);
                    for (
                        var i = 0;
                        i < this._geosearchCore._providers.length;
                        i++
                    )
                        this._geosearchCore._providers[i].addEventParent(this);
                    (this._geosearchCore._pendingSuggestions = []),
                        e.Control.prototype.initialize.call(this, t);
                },
                _renderSuggestions: function (t) {
                    var i, n, o;
                    t.length > 0 && (this._suggestions.style.display = "block");
                    for (var s = [], r = 0; r < t.length; r++) {
                        var a = t[r];
                        if (
                            (!o &&
                                this._geosearchCore._providers.length > 1 &&
                                i !== a.provider.options.label &&
                                (((o = e.DomUtil.create(
                                    "div",
                                    "geocoder-control-header",
                                    a.provider._contentsElement
                                )).textContent = a.provider.options.label),
                                (o.innerText = a.provider.options.label),
                                (i = a.provider.options.label)),
                            n ||
                                (n = e.DomUtil.create(
                                    "ul",
                                    "geocoder-control-list",
                                    a.provider._contentsElement
                                )),
                            -1 === s.indexOf(a.text))
                        ) {
                            var h = e.DomUtil.create(
                                "li",
                                "geocoder-control-suggestion",
                                n
                            );
                            (h.innerHTML = a.text),
                                (h.provider = a.provider),
                                (h["data-magic-key"] = a.magicKey),
                                (h.unformattedText = a.unformattedText);
                        } else
                            for (var l = 0; l < n.childNodes.length; l++)
                                n.childNodes[l].innerHTML === a.text &&
                                    (n.childNodes[l]["data-magic-key"] +=
                                        "," + a.magicKey);
                        s.push(a.text);
                    }
                    this.getPosition().indexOf("top") > -1 &&
                        (this._suggestions.style.maxHeight =
                            this._map.getSize().y -
                            this._suggestions.offsetTop -
                            this._wrapper.offsetTop -
                            10 +
                            "px"),
                        this.getPosition().indexOf("bottom") > -1 &&
                            this._setSuggestionsBottomPosition();
                },
                _setSuggestionsBottomPosition: function () {
                    (this._suggestions.style.maxHeight =
                        this._map.getSize().y -
                        this._map._controlCorners[this.getPosition()]
                            .offsetHeight -
                        this._wrapper.offsetHeight +
                        "px"),
                        (this._suggestions.style.top =
                            -this._suggestions.offsetHeight -
                            this._wrapper.offsetHeight +
                            20 +
                            "px");
                },
                _boundsFromResults: function (t) {
                    if (t.length) {
                        for (
                            var i = e.latLngBounds([0, 0], [0, 0]),
                                n = [],
                                o = [],
                                s = t.length - 1;
                            s >= 0;
                            s--
                        ) {
                            var r = t[s];
                            o.push(r.latlng),
                                r.bounds &&
                                    r.bounds.isValid() &&
                                    !r.bounds.equals(i) &&
                                    n.push(r.bounds);
                        }
                        for (
                            var a = e.latLngBounds(o), h = 0;
                            h < n.length;
                            h++
                        )
                            a.extend(n[h]);
                        return a;
                    }
                },
                clear: function () {
                    this._clearAllSuggestions(),
                        this.options.collapseAfterResult &&
                            ((this._input.value = ""),
                            (this._lastValue = ""),
                            (this._input.placeholder = ""),
                            e.DomUtil.removeClass(
                                this._wrapper,
                                "geocoder-control-expanded"
                            )),
                        !this._map.scrollWheelZoom.enabled() &&
                            this._map.options.scrollWheelZoom &&
                            this._map.scrollWheelZoom.enable();
                },
                _clearAllSuggestions: function () {
                    this._suggestions.style.display = "none";
                    for (var t = 0; t < this.options.providers.length; t++)
                        this._clearProviderSuggestions(
                            this.options.providers[t]
                        );
                },
                _clearProviderSuggestions: function (t) {
                    t._contentsElement.innerHTML = "";
                },
                _finalizeSuggestions: function (t, i) {
                    t ||
                        (e.DomUtil.removeClass(
                            this._input,
                            "geocoder-control-loading"
                        ),
                        this.getPosition().indexOf("bottom") > -1 &&
                            this._setSuggestionsBottomPosition(),
                        i || this._clearAllSuggestions());
                },
                _setupClick: function () {
                    e.DomUtil.addClass(
                        this._wrapper,
                        "geocoder-control-expanded"
                    ),
                        this._input.focus();
                },
                disable: function () {
                    (this._input.disabled = !0),
                        e.DomUtil.addClass(
                            this._input,
                            "geocoder-control-input-disabled"
                        ),
                        e.DomEvent.removeListener(
                            this._wrapper,
                            "click",
                            this._setupClick,
                            this
                        );
                },
                enable: function () {
                    (this._input.disabled = !1),
                        e.DomUtil.removeClass(
                            this._input,
                            "geocoder-control-input-disabled"
                        ),
                        e.DomEvent.addListener(
                            this._wrapper,
                            "click",
                            this._setupClick,
                            this
                        );
                },
                getAttribution: function () {
                    for (var t = [], e = 0; e < this._providers.length; e++)
                        this._providers[e].options.attribution &&
                            t.push(this._providers[e].options.attribution);
                    return t.join(", ");
                },
                geocodeSuggestion: function (t) {
                    var e = t.target || t.srcElement;
                    e.classList.contains("geocoder-control-suggestions") ||
                        e.classList.contains("geocoder-control-header") ||
                        (e.classList.length < 1 && (e = e.parentNode),
                        this._geosearchCore._geocode(
                            e.unformattedText,
                            e["data-magic-key"],
                            e.provider
                        ),
                        this.clear());
                },
                onAdd: function (t) {
                    i.Util.setEsriAttribution(t),
                        (this._map = t),
                        (this._wrapper = e.DomUtil.create(
                            "div",
                            "geocoder-control"
                        )),
                        (this._input = e.DomUtil.create(
                            "input",
                            "geocoder-control-input leaflet-bar",
                            this._wrapper
                        )),
                        (this._input.title = this.options.title),
                        this.options.expanded &&
                            (e.DomUtil.addClass(
                                this._wrapper,
                                "geocoder-control-expanded"
                            ),
                            (this._input.placeholder =
                                this.options.placeholder)),
                        (this._suggestions = e.DomUtil.create(
                            "div",
                            "geocoder-control-suggestions leaflet-bar",
                            this._wrapper
                        ));
                    for (var n = 0; n < this.options.providers.length; n++)
                        this.options.providers[n]._contentsElement =
                            e.DomUtil.create("div", null, this._suggestions);
                    var o = this._geosearchCore._getAttribution();
                    return (
                        t.attributionControl &&
                            t.attributionControl.addAttribution(o),
                        e.DomEvent.addListener(
                            this._input,
                            "focus",
                            function (t) {
                                (this._input.placeholder =
                                    this.options.placeholder),
                                    e.DomUtil.addClass(
                                        this._wrapper,
                                        "geocoder-control-expanded"
                                    );
                            },
                            this
                        ),
                        e.DomEvent.addListener(
                            this._wrapper,
                            "click",
                            this._setupClick,
                            this
                        ),
                        e.DomEvent.addListener(
                            this._suggestions,
                            "mousedown",
                            this.geocodeSuggestion,
                            this
                        ),
                        e.DomEvent.addListener(
                            this._input,
                            "blur",
                            function (t) {
                                this.clear();
                            },
                            this
                        ),
                        e.DomEvent.addListener(
                            this._input,
                            "keydown",
                            function (t) {
                                var i = (t.target || t.srcElement).value;
                                e.DomUtil.addClass(
                                    this._wrapper,
                                    "geocoder-control-expanded"
                                );
                                for (
                                    var n,
                                        o = this._suggestions.querySelectorAll(
                                            ".geocoder-control-suggestion"
                                        ),
                                        s = this._suggestions.querySelectorAll(
                                            ".geocoder-control-selected"
                                        )[0],
                                        r = 0;
                                    r < o.length;
                                    r++
                                )
                                    if (o[r] === s) {
                                        n = r;
                                        break;
                                    }
                                switch (t.keyCode) {
                                    case 13:
                                        s
                                            ? ((this._input.value =
                                                  s.innerText),
                                              this._geosearchCore._geocode(
                                                  s.unformattedText,
                                                  s["data-magic-key"],
                                                  s.provider
                                              ),
                                              this.clear())
                                            : this.options
                                                  .allowMultipleResults &&
                                              i.length >= 2
                                            ? (this._geosearchCore._geocode(
                                                  this._input.value,
                                                  void 0
                                              ),
                                              this.clear())
                                            : 1 === o.length
                                            ? (e.DomUtil.addClass(
                                                  o[0],
                                                  "geocoder-control-selected"
                                              ),
                                              this._geosearchCore._geocode(
                                                  o[0].innerHTML,
                                                  o[0]["data-magic-key"],
                                                  o[0].provider
                                              ))
                                            : (this.clear(),
                                              this._input.blur()),
                                            e.DomEvent.preventDefault(t);
                                        break;
                                    case 38:
                                        s &&
                                            e.DomUtil.removeClass(
                                                s,
                                                "geocoder-control-selected"
                                            );
                                        var a = o[n - 1];
                                        s && a
                                            ? e.DomUtil.addClass(
                                                  a,
                                                  "geocoder-control-selected"
                                              )
                                            : e.DomUtil.addClass(
                                                  o[o.length - 1],
                                                  "geocoder-control-selected"
                                              ),
                                            e.DomEvent.preventDefault(t);
                                        break;
                                    case 40:
                                        s &&
                                            e.DomUtil.removeClass(
                                                s,
                                                "geocoder-control-selected"
                                            );
                                        var h = o[n + 1];
                                        s && h
                                            ? e.DomUtil.addClass(
                                                  h,
                                                  "geocoder-control-selected"
                                              )
                                            : e.DomUtil.addClass(
                                                  o[0],
                                                  "geocoder-control-selected"
                                              ),
                                            e.DomEvent.preventDefault(t);
                                        break;
                                    default:
                                        for (
                                            var l = 0;
                                            l <
                                            this._geosearchCore
                                                ._pendingSuggestions.length;
                                            l++
                                        ) {
                                            var u =
                                                this._geosearchCore
                                                    ._pendingSuggestions[l];
                                            u && u.abort && !u.id && u.abort();
                                        }
                                }
                            },
                            this
                        ),
                        e.DomEvent.addListener(
                            this._input,
                            "keyup",
                            e.Util.throttle(
                                function (t) {
                                    var i = t.which || t.keyCode,
                                        n = (t.target || t.srcElement).value;
                                    if (n.length < 2)
                                        return (
                                            (this._lastValue =
                                                this._input.value),
                                            this._clearAllSuggestions(),
                                            void e.DomUtil.removeClass(
                                                this._input,
                                                "geocoder-control-loading"
                                            )
                                        );
                                    27 !== i
                                        ? 13 !== i &&
                                          38 !== i &&
                                          40 !== i &&
                                          this._input.value !==
                                              this._lastValue &&
                                          ((this._lastValue =
                                              this._input.value),
                                          e.DomUtil.addClass(
                                              this._input,
                                              "geocoder-control-loading"
                                          ),
                                          this._geosearchCore._suggest(n))
                                        : this._clearAllSuggestions();
                                },
                                50,
                                this
                            ),
                            this
                        ),
                        e.DomEvent.disableClickPropagation(this._wrapper),
                        e.DomEvent.addListener(
                            this._suggestions,
                            "mouseover",
                            function (e) {
                                t.scrollWheelZoom.enabled() &&
                                    t.options.scrollWheelZoom &&
                                    t.scrollWheelZoom.disable();
                            }
                        ),
                        e.DomEvent.addListener(
                            this._suggestions,
                            "mouseout",
                            function (e) {
                                !t.scrollWheelZoom.enabled() &&
                                    t.options.scrollWheelZoom &&
                                    t.scrollWheelZoom.enable();
                            }
                        ),
                        this._geosearchCore.on(
                            "load",
                            function (t) {
                                e.DomUtil.removeClass(
                                    this._input,
                                    "geocoder-control-loading"
                                ),
                                    this.clear(),
                                    this._input.blur();
                            },
                            this
                        ),
                        this._wrapper
                    );
                },
            }),
            f = i.FeatureLayerService.extend({
                options: {
                    label: "Feature Layer",
                    maxResults: 5,
                    bufferRadius: 1e3,
                    searchMode: "contain",
                    formatSuggestion: function (t) {
                        return t.properties[this.options.searchFields[0]];
                    },
                },
                initialize: function (t) {
                    t.apikey && (t.token = t.apikey),
                        i.FeatureLayerService.prototype.initialize.call(
                            this,
                            t
                        ),
                        "string" == typeof this.options.searchFields &&
                            (this.options.searchFields = [
                                this.options.searchFields,
                            ]),
                        (this._suggestionsQuery = this.query()),
                        (this._resultsQuery = this.query());
                },
                suggestions: function (t, e, i) {
                    var n = this._suggestionsQuery
                        .where(this._buildQuery(t))
                        .returnGeometry(!1);
                    return (
                        e && n.intersects(e),
                        this.options.idField &&
                            n.fields(
                                [this.options.idField].concat(
                                    this.options.searchFields
                                )
                            ),
                        n.run(function (t, e, n) {
                            if (t) i(t, []);
                            else {
                                this.options.idField = n.objectIdFieldName;
                                for (
                                    var o = [], s = e.features.length - 1;
                                    s >= 0;
                                    s--
                                ) {
                                    var r = e.features[s];
                                    o.push({
                                        text: this.options.formatSuggestion.call(
                                            this,
                                            r
                                        ),
                                        unformattedText:
                                            r.properties[
                                                this.options.searchFields[0]
                                            ],
                                        magicKey: r.id,
                                    });
                                }
                                i(t, o.slice(0, this.options.maxResults));
                            }
                        }, this)
                    );
                },
                results: function (t, i, n, o) {
                    var s = this._resultsQuery;
                    return (
                        i
                            ? (delete s.params.where, s.featureIds([i]))
                            : s.where(this._buildQuery(t)),
                        n && s.within(n),
                        s.run(
                            e.Util.bind(function (t, e) {
                                for (
                                    var i = [], n = 0;
                                    n < e.features.length;
                                    n++
                                ) {
                                    var s = e.features[n];
                                    if (s) {
                                        var r = this._featureBounds(s),
                                            a = {
                                                latlng: r.getCenter(),
                                                bounds: r,
                                                text: this.options.formatSuggestion.call(
                                                    this,
                                                    s
                                                ),
                                                properties: s.properties,
                                                geojson: s,
                                            };
                                        i.push(a),
                                            delete this._resultsQuery.params
                                                .objectIds;
                                    }
                                }
                                o(t, i);
                            }, this)
                        )
                    );
                },
                orderBy: function (t, e) {
                    this._suggestionsQuery.orderBy(t, e);
                },
                _buildQuery: function (t) {
                    for (
                        var e = [], i = this.options.searchFields.length - 1;
                        i >= 0;
                        i--
                    ) {
                        var n = 'upper("' + this.options.searchFields[i] + '")';
                        if ("contain" === this.options.searchMode)
                            e.push(n + " LIKE upper('%" + t + "%')");
                        else if ("startWith" === this.options.searchMode)
                            e.push(n + " LIKE upper('" + t + "%')");
                        else if ("endWith" === this.options.searchMode)
                            e.push(n + " LIKE upper('%" + t + "')");
                        else {
                            if ("strict" !== this.options.searchMode)
                                throw new Error(
                                    'L.esri.Geocoding.featureLayerProvider: Invalid parameter for "searchMode". Use one of "contain", "startWith", "endWith", or "strict"'
                                );
                            e.push(n + " LIKE upper('" + t + "')");
                        }
                    }
                    return this.options.where
                        ? this.options.where + " AND (" + e.join(" OR ") + ")"
                        : e.join(" OR ");
                },
                _featureBounds: function (t) {
                    var i = e.geoJson(t);
                    if ("Point" === t.geometry.type) {
                        var n = i.getBounds().getCenter(),
                            o =
                                ((this.options.bufferRadius / 40075017) * 360) /
                                Math.cos((180 / Math.PI) * n.lat),
                            s = (this.options.bufferRadius / 40075017) * 360;
                        return e.latLngBounds(
                            [n.lat - s, n.lng - o],
                            [n.lat + s, n.lng + o]
                        );
                    }
                    return i.getBounds();
                },
            }),
            g = i.MapService.extend({
                options: {
                    layers: [0],
                    label: "Map Service",
                    bufferRadius: 1e3,
                    maxResults: 5,
                    formatSuggestion: function (t) {
                        return (
                            t.properties[t.displayFieldName] +
                            " <small>" +
                            t.layerName +
                            "</small>"
                        );
                    },
                },
                initialize: function (t) {
                    t.apikey && (t.token = t.apikey),
                        i.MapService.prototype.initialize.call(this, t),
                        this._getIdFields();
                },
                suggestions: function (t, e, i) {
                    return this.find()
                        .text(t)
                        .fields(this.options.searchFields)
                        .returnGeometry(!1)
                        .layers(this.options.layers)
                        .run(function (t, e, n) {
                            var o = [];
                            if (!t) {
                                var s = Math.min(
                                    this.options.maxResults,
                                    e.features.length
                                );
                                n.results = n.results.reverse();
                                for (var r = 0; r < s; r++) {
                                    var a = e.features[r],
                                        h = n.results[r],
                                        l = h.layerId,
                                        u = this._idFields[l];
                                    (a.layerId = l),
                                        (a.layerName = this._layerNames[l]),
                                        (a.displayFieldName =
                                            this._displayFields[l]),
                                        u &&
                                            o.push({
                                                text: this.options.formatSuggestion.call(
                                                    this,
                                                    a
                                                ),
                                                unformattedText:
                                                    a.properties[
                                                        a.displayFieldName
                                                    ],
                                                magicKey:
                                                    h.attributes[u] + ":" + l,
                                            });
                                }
                            }
                            i(t, o.reverse());
                        }, this);
                },
                results: function (t, e, i, n) {
                    var o,
                        s = [];
                    if (e && !e.includes(",")) {
                        var r = e.split(":")[0],
                            a = e.split(":")[1];
                        o = this.query().layer(a).featureIds(r);
                    } else
                        o = this.find()
                            .text(t)
                            .fields(this.options.searchFields)
                            .layers(this.options.layers);
                    return o.run(function (t, e, i) {
                        if (!t) {
                            i.results && (i.results = i.results.reverse());
                            for (var o = 0; o < e.features.length; o++) {
                                var r = e.features[o];
                                if (
                                    ((a = a || i.results[o].layerId),
                                    r && void 0 !== a)
                                ) {
                                    var h = this._featureBounds(r);
                                    (r.layerId = a),
                                        (r.layerName = this._layerNames[a]),
                                        (r.displayFieldName =
                                            this._displayFields[a]);
                                    var l = {
                                        latlng: h.getCenter(),
                                        bounds: h,
                                        text: this.options.formatSuggestion.call(
                                            this,
                                            r
                                        ),
                                        properties: r.properties,
                                        geojson: r,
                                    };
                                    s.push(l);
                                }
                            }
                        }
                        n(t, s.reverse());
                    }, this);
                },
                _featureBounds: function (t) {
                    var i = e.geoJson(t);
                    if ("Point" === t.geometry.type) {
                        var n = i.getBounds().getCenter(),
                            o =
                                ((this.options.bufferRadius / 40075017) * 360) /
                                Math.cos((180 / Math.PI) * n.lat),
                            s = (this.options.bufferRadius / 40075017) * 360;
                        return e.latLngBounds(
                            [n.lat - s, n.lng - o],
                            [n.lat + s, n.lng + o]
                        );
                    }
                    return i.getBounds();
                },
                _layerMetadataCallback: function (t) {
                    return e.Util.bind(function (e, i) {
                        if (!e) {
                            (this._displayFields[t] = i.displayField),
                                (this._layerNames[t] = i.name);
                            for (var n = 0; n < i.fields.length; n++) {
                                var o = i.fields[n];
                                if ("esriFieldTypeOID" === o.type) {
                                    this._idFields[t] = o.name;
                                    break;
                                }
                            }
                        }
                    }, this);
                },
                _getIdFields: function () {
                    (this._idFields = {}),
                        (this._displayFields = {}),
                        (this._layerNames = {});
                    for (var t = 0; t < this.options.layers.length; t++) {
                        var e = this.options.layers[t];
                        this.get(e, {}, this._layerMetadataCallback(e));
                    }
                },
            }),
            v = u.extend({
                options: { label: "Geocode Server", maxResults: 5 },
                suggestions: function (t, e, i) {
                    if (this.options.supportsSuggest) {
                        var n = this.suggest().text(t);
                        return (
                            e && n.within(e),
                            n.run(function (t, e, n) {
                                var o = [];
                                if (!t)
                                    for (
                                        ;
                                        n.suggestions.length &&
                                        o.length <= this.options.maxResults - 1;

                                    ) {
                                        var s = n.suggestions.shift();
                                        s.isCollection ||
                                            o.push({
                                                text: s.text,
                                                unformattedText: s.text,
                                                magicKey: s.magicKey,
                                            });
                                    }
                                i(t, o);
                            }, this)
                        );
                    }
                    return i(null, []), !1;
                },
                results: function (t, e, i, n) {
                    var o = this.geocode().text(t);
                    return (
                        e && o.key(e),
                        o.maxLocations(this.options.maxResults),
                        i && o.within(i),
                        o.run(function (t, e) {
                            n(t, e.results);
                        }, this)
                    );
                },
            });
        (t.ArcgisOnlineProvider = p),
            (t.FeatureLayerProvider = f),
            (t.Geocode = o),
            (t.GeocodeService = u),
            (t.GeocodeServiceProvider = v),
            (t.Geosearch = m),
            (t.GeosearchCore = c),
            (t.MapServiceProvider = g),
            (t.ReverseGeocode = r),
            (t.Suggest = h),
            (t.VERSION = "3.1.3"),
            (t.WorldGeocodingServiceUrl = n),
            (t.arcgisOnlineProvider = _),
            (t.featureLayerProvider = function (t) {
                return new f(t);
            }),
            (t.geocode = s),
            (t.geocodeService = function (t) {
                return new u(t);
            }),
            (t.geocodeServiceProvider = function (t) {
                return new v(t);
            }),
            (t.geosearch = function (t) {
                return new m(t);
            }),
            (t.geosearchCore = d),
            (t.mapServiceProvider = function (t) {
                return new g(t);
            }),
            (t.reverseGeocode = a),
            (t.suggest = l),
            Object.defineProperty(t, "__esModule", { value: !0 });
    });
