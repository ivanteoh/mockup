!function(e, t) {
    "use strict";
    function n(e, t) {
        for (var n, r = [], i = 0; i < e.length; ++i) {
            if (n = s[e[i]] || o(e[i]), !n) throw "module definition dependecy not found: " + e[i];
            r.push(n);
        }
        t.apply(null, r);
    }
    function r(e, r, i) {
        if ("string" != typeof e) throw "invalid module definition, module id must be defined and be a string";
        if (r === t) throw "invalid module definition, dependencies must be specified";
        if (i === t) throw "invalid module definition, definition function must be specified";
        n(r, function() {
            s[e] = i.apply(null, arguments);
        });
    }
    function i(e) {
        return !!s[e];
    }
    function o(t) {
        for (var n = e, r = t.split(/[.\/]/), i = 0; i < r.length; ++i) {
            if (!n[r[i]]) return;
            n = n[r[i]];
        }
        return n;
    }
    function a(n) {
        for (var r = 0; r < n.length; r++) {
            for (var i = e, o = n[r], a = o.split(/[.\/]/), l = 0; l < a.length - 1; ++l) i[a[l]] === t && (i[a[l]] = {}), 
            i = i[a[l]];
            i[a[a.length - 1]] = s[o];
        }
    }
    var s = {}, l = "tinymce/dom/EventUtils", c = "tinymce/dom/Sizzle", u = "tinymce/dom/DomQuery", d = "tinymce/html/Styles", f = "tinymce/dom/TreeWalker", p = "tinymce/util/Tools", h = "tinymce/dom/Range", m = "tinymce/html/Entities", g = "tinymce/Env", v = "tinymce/dom/DOMUtils", y = "tinymce/dom/ScriptLoader", b = "tinymce/AddOnManager", C = "tinymce/html/Node", x = "tinymce/html/Schema", w = "tinymce/html/SaxParser", _ = "tinymce/html/DomParser", N = "tinymce/html/Writer", E = "tinymce/html/Serializer", S = "tinymce/dom/Serializer", k = "tinymce/dom/TridentSelection", T = "tinymce/util/VK", R = "tinymce/dom/ControlSelection", A = "tinymce/dom/Selection", B = "tinymce/dom/RangeUtils", L = "tinymce/Formatter", M = "tinymce/UndoManager", D = "tinymce/EnterKey", H = "tinymce/ForceBlocks", P = "tinymce/EditorCommands", O = "tinymce/util/URI", I = "tinymce/util/Class", F = "tinymce/ui/Selector", W = "tinymce/ui/Collection", z = "tinymce/ui/DomUtils", V = "tinymce/ui/Control", U = "tinymce/ui/Factory", q = "tinymce/ui/Container", $ = "tinymce/ui/DragHelper", j = "tinymce/ui/Scrollable", K = "tinymce/ui/Panel", G = "tinymce/ui/Movable", Y = "tinymce/ui/Resizable", X = "tinymce/ui/FloatPanel", J = "tinymce/ui/KeyboardNavigation", Q = "tinymce/ui/Window", Z = "tinymce/ui/MessageBox", et = "tinymce/WindowManager", tt = "tinymce/util/Quirks", nt = "tinymce/util/Observable", rt = "tinymce/Shortcuts", it = "tinymce/Editor", ot = "tinymce/util/I18n", at = "tinymce/FocusManager", st = "tinymce/EditorManager", lt = "tinymce/LegacyInput", ct = "tinymce/util/XHR", ut = "tinymce/util/JSON", dt = "tinymce/util/JSONRequest", ft = "tinymce/util/JSONP", pt = "tinymce/util/LocalStorage", ht = "tinymce/Compat", mt = "tinymce/ui/Layout", gt = "tinymce/ui/AbsoluteLayout", vt = "tinymce/ui/Tooltip", yt = "tinymce/ui/Widget", bt = "tinymce/ui/Button", Ct = "tinymce/ui/ButtonGroup", xt = "tinymce/ui/Checkbox", wt = "tinymce/ui/PanelButton", _t = "tinymce/ui/ColorButton", Nt = "tinymce/ui/ComboBox", Et = "tinymce/ui/Path", St = "tinymce/ui/ElementPath", kt = "tinymce/ui/FormItem", Tt = "tinymce/ui/Form", Rt = "tinymce/ui/FieldSet", At = "tinymce/ui/FilePicker", Bt = "tinymce/ui/FitLayout", Lt = "tinymce/ui/FlexLayout", Mt = "tinymce/ui/FlowLayout", Dt = "tinymce/ui/FormatControls", Ht = "tinymce/ui/GridLayout", Pt = "tinymce/ui/Iframe", Ot = "tinymce/ui/Label", It = "tinymce/ui/Toolbar", Ft = "tinymce/ui/MenuBar", Wt = "tinymce/ui/MenuButton", zt = "tinymce/ui/ListBox", Vt = "tinymce/ui/MenuItem", Ut = "tinymce/ui/Menu", qt = "tinymce/ui/Radio", $t = "tinymce/ui/ResizeHandle", jt = "tinymce/ui/Spacer", Kt = "tinymce/ui/SplitButton", Gt = "tinymce/ui/StackLayout", Yt = "tinymce/ui/TabPanel", Xt = "tinymce/ui/TextBox", Jt = "tinymce/ui/Throbber";
    r(l, [], function() {
        function e(e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n);
        }
        function t(e, t, n, r) {
            e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n);
        }
        function n(e, t) {
            function n() {
                return !1;
            }
            function r() {
                return !0;
            }
            var i, o = t || {}, s;
            for (i in e) "layerX" !== i && "layerY" !== i && (o[i] = e[i]);
            if (o.target || (o.target = o.srcElement || document), e && a.test(e.type) && e.pageX === s && e.clientX !== s) {
                var l = o.target.ownerDocument || document, c = l.documentElement, u = l.body;
                o.pageX = e.clientX + (c && c.scrollLeft || u && u.scrollLeft || 0) - (c && c.clientLeft || u && u.clientLeft || 0), 
                o.pageY = e.clientY + (c && c.scrollTop || u && u.scrollTop || 0) - (c && c.clientTop || u && u.clientTop || 0);
            }
            return o.preventDefault = function() {
                o.isDefaultPrevented = r, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
            }, o.stopPropagation = function() {
                o.isPropagationStopped = r, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0);
            }, o.stopImmediatePropagation = function() {
                o.isImmediatePropagationStopped = r, o.stopPropagation();
            }, o.isDefaultPrevented || (o.isDefaultPrevented = n, o.isPropagationStopped = n, 
            o.isImmediatePropagationStopped = n), o;
        }
        function r(n, r, i) {
            function o() {
                i.domLoaded || (i.domLoaded = !0, r(c));
            }
            function a() {
                "complete" === l.readyState && (t(l, "readystatechange", a), o());
            }
            function s() {
                try {
                    l.documentElement.doScroll("left");
                } catch (e) {
                    return setTimeout(s, 0), void 0;
                }
                o();
            }
            var l = n.document, c = {
                type: "ready"
            };
            return i.domLoaded ? (r(c), void 0) : (l.addEventListener ? e(n, "DOMContentLoaded", o) : (e(l, "readystatechange", a), 
            l.documentElement.doScroll && n === n.top && s()), e(n, "load", o), void 0);
        }
        function i() {
            function i(e, t) {
                var n, r, i, o;
                if (n = s[t][e.type]) for (r = 0, i = n.length; i > r; r++) if (o = n[r], o && o.func.call(o.scope, e) === !1 && e.preventDefault(), 
                e.isImmediatePropagationStopped()) return;
            }
            var a = this, s = {}, l, c, u, d, f;
            c = o + (+new Date()).toString(32), d = "onmouseenter" in document.documentElement, 
            u = "onfocusin" in document.documentElement, f = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, l = 1, a.domLoaded = !1, a.events = s, a.bind = function(t, o, p, h) {
                function m(e) {
                    i(n(e || _.event), g);
                }
                var g, v, y, b, C, x, w, _ = window;
                if (t && 3 !== t.nodeType && 8 !== t.nodeType) {
                    for (t[c] ? g = t[c] : (g = l++, t[c] = g, s[g] = {}), h = h || t, o = o.split(" "), 
                    y = o.length; y--; ) b = o[y], x = m, C = w = !1, "DOMContentLoaded" === b && (b = "ready"), 
                    a.domLoaded && "ready" === b && "complete" == t.readyState ? p.call(h, n({
                        type: b
                    })) : (d || (C = f[b], C && (x = function(e) {
                        var t, r;
                        if (t = e.currentTarget, r = e.relatedTarget, r && t.contains) r = t.contains(r); else for (;r && r !== t; ) r = r.parentNode;
                        r || (e = n(e || _.event), e.type = "mouseout" === e.type ? "mouseleave" : "mouseenter", 
                        e.target = t, i(e, g));
                    })), u || "focusin" !== b && "focusout" !== b || (w = !0, C = "focusin" === b ? "focus" : "blur", 
                    x = function(e) {
                        e = n(e || _.event), e.type = "focus" === e.type ? "focusin" : "focusout", i(e, g);
                    }), v = s[g][b], v ? "ready" === b && a.domLoaded ? p({
                        type: b
                    }) : v.push({
                        func: p,
                        scope: h
                    }) : (s[g][b] = v = [ {
                        func: p,
                        scope: h
                    } ], v.fakeName = C, v.capture = w, v.nativeHandler = x, "ready" === b ? r(t, x, a) : e(t, C || b, x, w)));
                    return t = v = 0, p;
                }
            }, a.unbind = function(e, n, r) {
                var i, o, l, u, d, f;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return a;
                if (i = e[c]) {
                    if (f = s[i], n) {
                        for (n = n.split(" "), l = n.length; l--; ) if (d = n[l], o = f[d]) {
                            if (r) for (u = o.length; u--; ) o[u].func === r && o.splice(u, 1);
                            r && 0 !== o.length || (delete f[d], t(e, o.fakeName || d, o.nativeHandler, o.capture));
                        }
                    } else {
                        for (d in f) o = f[d], t(e, o.fakeName || d, o.nativeHandler, o.capture);
                        f = {};
                    }
                    for (d in f) return a;
                    delete s[i];
                    try {
                        delete e[c];
                    } catch (p) {
                        e[c] = null;
                    }
                }
                return a;
            }, a.fire = function(e, t, r) {
                var o;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return a;
                r = n(null, r), r.type = t, r.target = e;
                do o = e[c], o && i(r, o), e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow; while (e && !r.isPropagationStopped());
                return a;
            }, a.clean = function(e) {
                var t, n, r = a.unbind;
                if (!e || 3 === e.nodeType || 8 === e.nodeType) return a;
                if (e[c] && r(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName) for (r(e), 
                n = e.getElementsByTagName("*"), t = n.length; t--; ) e = n[t], e[c] && r(e);
                return a;
            }, a.destroy = function() {
                s = {};
            }, a.cancel = function(e) {
                return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
            };
        }
        var o = "mce-data-", a = /^(?:mouse|contextmenu)|click/;
        return i.Event = new i(), i.Event.bind(window, "ready", function() {}), i;
    }), r(c, [], function() {
        function e(e) {
            return gt.test(e + "");
        }
        function n() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > N.cacheLength && delete e[t.shift()], e[n] = r, r;
            };
        }
        function i(e) {
            return e[F] = !0, e;
        }
        function o(e) {
            var t = L.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t = null;
            }
        }
        function a(e, t, n, r) {
            var i, o, a, s, l, c, u, p, h, m;
            if ((t ? t.ownerDocument || t : W) !== L && B(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (D && !r) {
                if (i = vt.exec(e)) if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n;
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && I(t, o) && o.id === a) return n.push(o), 
                    n;
                } else {
                    if (i[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = i[3]) && z.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)), 
                    n;
                }
                if (z.qsa && !H.test(e)) {
                    if (u = !0, p = F, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = d(e), (u = t.getAttribute("id")) ? p = u.replace(Ct, "\\$&") : t.setAttribute("id", p), 
                        p = "[id='" + p + "'] ", l = c.length; l--; ) c[l] = p + f(c[l]);
                        h = mt.test(e) && t.parentNode || t, m = c.join(",");
                    }
                    if (m) try {
                        return et.apply(n, h.querySelectorAll(m)), n;
                    } catch (g) {} finally {
                        u || t.removeAttribute("id");
                    }
                }
            }
            return C(e.replace(ct, "$1"), t, n, r);
        }
        function s(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function c(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function d(e, t) {
            var n, r, i, o, s, l, c, u = $[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = N.preFilter; s; ) {
                (!n || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), 
                n = !1, (r = dt.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(ct, " ")
                }), s = s.slice(n.length));
                for (o in N.filter) !(r = ht[o].exec(s)) || c[o] && !(r = c[o](r)) || (n = r.shift(), 
                i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break;
            }
            return t ? s.length : s ? a.error(e) : $(e, l).slice(0);
        }
        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
        }
        function p(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = U++;
            return t.first ? function(t, n, o) {
                for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, o);
            } : function(t, n, a) {
                var s, l, c, u = V + " " + o;
                if (a) {
                    for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
                } else for (;t = t[r]; ) if (1 === t.nodeType || i) if (c = t[F] || (t[F] = {}), 
                (l = c[r]) && l[0] === u) {
                    if ((s = l[1]) === !0 || s === _) return s === !0;
                } else if (l = c[r] = [ u ], l[1] = e(t, n, a) || _, l[1] === !0) return !0;
            };
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), 
            c && t.push(s));
            return a;
        }
        function g(e, t, n, r, o, a) {
            return r && !r[F] && (r = g(r)), o && !o[F] && (o = g(o, a)), i(function(i, a, s, l) {
                var c, u, d, f = [], p = [], h = a.length, g = i || b(t || "*", s.nodeType ? [ s ] : s, []), v = !e || !i && t ? g : m(g, f, e, s, l), y = n ? o || (i ? e : h || r) ? [] : a : v;
                if (n && n(v, y, s, l), r) for (c = m(y, p), r(c, [], s, l), u = c.length; u--; ) (d = c[u]) && (y[p[u]] = !(v[p[u]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = y.length; u--; ) (d = y[u]) && c.push(v[u] = d);
                            o(null, y = [], c, l);
                        }
                        for (u = y.length; u--; ) (d = y[u]) && (c = o ? nt.call(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d));
                    }
                } else y = m(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, l) : et.apply(a, y);
            });
        }
        function v(e) {
            for (var t, n, r, i = e.length, o = N.relative[e[0].type], a = o || N.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                return e === t;
            }, a, !0), c = p(function(e) {
                return nt.call(t, e) > -1;
            }, a, !0), u = [ function(e, n, r) {
                return !o && (r || n !== T) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
            } ]; i > s; s++) if (n = N.relative[e[s].type]) u = [ p(h(u), n) ]; else {
                if (n = N.filter[e[s].type].apply(null, e[s].matches), n[F]) {
                    for (r = ++s; i > r && !N.relative[e[r].type]; r++) ;
                    return g(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1)).replace(ct, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && f(e));
                }
                u.push(n);
            }
            return h(u);
        }
        function y(e, t) {
            var n = 0, r = t.length > 0, o = e.length > 0, s = function(i, s, l, c, u) {
                var d, f, p, h = [], g = 0, v = "0", y = i && [], b = null != u, C = T, x = i || o && N.find.TAG("*", u && s.parentNode || s), w = V += null == C ? 1 : Math.random() || .1;
                for (b && (T = s !== L && s, _ = n); null != (d = x[v]); v++) {
                    if (o && d) {
                        for (f = 0; p = e[f++]; ) if (p(d, s, l)) {
                            c.push(d);
                            break;
                        }
                        b && (V = w, _ = ++n);
                    }
                    r && ((d = !p && d) && g--, i && y.push(d));
                }
                if (g += v, r && v !== g) {
                    for (f = 0; p = t[f++]; ) p(y, h, s, l);
                    if (i) {
                        if (g > 0) for (;v--; ) y[v] || h[v] || (h[v] = Q.call(c));
                        h = m(h);
                    }
                    et.apply(c, h), b && !i && h.length > 0 && g + t.length > 1 && a.uniqueSort(c);
                }
                return b && (V = w, T = C), y;
            };
            return r ? i(s) : s;
        }
        function b(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++) a(e, t[r], n);
            return n;
        }
        function C(e, t, n, r) {
            var i, o, a, s, l, c = d(e);
            if (!r && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && D && N.relative[o[1].type]) {
                    if (t = (N.find.ID(a.matches[0].replace(wt, _t), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length);
                }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !N.relative[s = a.type]); ) if ((l = N.find[s]) && (r = l(a.matches[0].replace(wt, _t), mt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && f(o), !e) return et.apply(n, r), n;
                    break;
                }
            }
            return k(e, c)(r, t, !D, n, mt.test(e)), n;
        }
        function x() {}
        var w, _, N, E, S, k, T, R, A, B, L, M, D, H, P, O, I, F = "sizzle" + -new Date(), W = window.document, z = {}, V = 0, U = 0, q = n(), $ = n(), j = n(), K = !1, G = function() {
            return 0;
        }, Y = typeof t, X = 1 << 31, J = [], Q = J.pop, Z = J.push, et = J.push, tt = J.slice, nt = J.indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
            return -1;
        }, rt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = it.replace("w", "w#"), at = "([*^$|!~]?=)", st = "\\[" + rt + "*(" + it + ")" + rt + "*(?:" + at + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + rt + "*\\]", lt = ":(" + it + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)", ct = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"), ut = new RegExp("^" + rt + "*," + rt + "*"), dt = new RegExp("^" + rt + "*([\\x20\\t\\r\\n\\f>+~])" + rt + "*"), ft = new RegExp(lt), pt = new RegExp("^" + ot + "$"), ht = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + it + ")['\"]?\\]"),
            TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + st),
            PSEUDO: new RegExp("^" + lt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
            needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
        }, mt = /[\x20\t\r\n\f]*[+~]/, gt = /^[^{]+\{\s*\[native code/, vt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, yt = /^(?:input|select|textarea|button)$/i, bt = /^h\d$/i, Ct = /'|\\/g, xt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, wt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, _t = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n);
        };
        try {
            et.apply(J = tt.call(W.childNodes), W.childNodes), J[W.childNodes.length].nodeType;
        } catch (Nt) {
            et = {
                apply: J.length ? function(e, t) {
                    Z.apply(e, tt.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        S = a.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, B = a.setDocument = function(n) {
            var r = n ? n.ownerDocument || n : W;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, M = r.documentElement, 
            D = !S(r), z.getElementsByTagName = o(function(e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length;
            }), z.attributes = o(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t;
            }), z.getElementsByClassName = o(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 
                2 === e.getElementsByClassName("e").length) : !1;
            }), z.getByName = o(function(e) {
                e.id = F + 0, e.appendChild(L.createElement("a")).setAttribute("name", F), e.appendChild(L.createElement("i")).setAttribute("name", F), 
                M.appendChild(e);
                var t = r.getElementsByName && r.getElementsByName(F).length === 2 + r.getElementsByName(F + 0).length;
                return M.removeChild(e), t;
            }), z.sortDetached = o(function(e) {
                return e.compareDocumentPosition && 1 & e.compareDocumentPosition(L.createElement("div"));
            }), N.attrHandle = o(function(e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== Y && "#" === e.firstChild.getAttribute("href");
            }) ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2);
                },
                type: function(e) {
                    return e.getAttribute("type");
                }
            }, z.getByName ? (N.find.ID = function(e, t) {
                if (typeof t.getElementById !== Y && D) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, N.filter.ID = function(e) {
                var t = e.replace(wt, _t);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (N.find.ID = function(e, n) {
                if (typeof n.getElementById !== Y && D) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== Y && r.getAttributeNode("id").value === e ? [ r ] : t : [];
                }
            }, N.filter.ID = function(e) {
                var t = e.replace(wt, _t);
                return function(e) {
                    var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), N.find.TAG = z.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, N.find.NAME = z.getByName && function(e, t) {
                return typeof t.getElementsByName !== Y ? t.getElementsByName(name) : void 0;
            }, N.find.CLASS = z.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== Y && D ? t.getElementsByClassName(e) : void 0;
            }, P = [], H = [ ":focus" ], (z.qsa = e(r.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || H.push("\\[" + rt + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), 
                e.querySelectorAll(":checked").length || H.push(":checked");
            }), o(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && H.push("[*^$]=" + rt + "*(?:\"\"|'')"), 
                e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                H.push(",.*:");
            })), (z.matchesSelector = e(O = M.matchesSelector || M.mozMatchesSelector || M.webkitMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function(e) {
                z.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), P.push("!=", lt);
            }), H = new RegExp(H.join("|")), P = P.length && new RegExp(P.join("|")), I = e(M.contains) || M.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, G = M.compareDocumentPosition ? function(e, t) {
                if (e === t) return K = !0, 0;
                var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return n ? 1 & n || R && t.compareDocumentPosition(e) === n ? e === r || I(W, e) ? -1 : t === r || I(W, t) ? 1 : A ? nt.call(A, e) - nt.call(A, t) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, t) {
                var n, i = 0, o = e.parentNode, a = t.parentNode, l = [ e ], c = [ t ];
                if (e === t) return K = !0, 0;
                if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a) return s(e, t);
                for (n = e; n = n.parentNode; ) l.unshift(n);
                for (n = t; n = n.parentNode; ) c.unshift(n);
                for (;l[i] === c[i]; ) i++;
                return i ? s(l[i], c[i]) : l[i] === W ? -1 : c[i] === W ? 1 : 0;
            }, L) : L;
        }, a.matches = function(e, t) {
            return a(e, null, null, t);
        }, a.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== L && B(e), t = t.replace(xt, "='$1']"), z.matchesSelector && D && (!P || !P.test(t)) && !H.test(t)) try {
                var n = O.call(e, t);
                if (n || z.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (r) {}
            return a(t, L, null, [ e ]).length > 0;
        }, a.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && B(e), I(e, t);
        }, a.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== L && B(e), D && (t = t.toLowerCase()), (n = N.attrHandle[t]) ? n(e) : !D || z.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null;
        }, a.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, a.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (K = !z.detectDuplicates, R = !z.sortDetached, A = !z.sortStable && e.slice(0), 
            e.sort(G), K) {
                for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                for (;r--; ) e.splice(n[r], 1);
            }
            return e;
        }, E = a.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += E(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r]; r++) n += E(t);
            return n;
        }, N = a.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(wt, _t), e[3] = (e[4] || e[5] || "").replace(wt, _t), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ft.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    return "*" === e ? function() {
                        return !0;
                    } : (e = e.replace(wt, _t).toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    });
                },
                CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && q(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = a.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, l) {
                        var c, u, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s;
                        if (g) {
                            if (o) {
                                for (;m; ) {
                                    for (d = t; d = d[m]; ) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? g.firstChild : g.lastChild ], a && y) {
                                for (u = g[F] || (g[F] = {}), c = u[e] || [], p = c[0] === V && c[1], f = c[0] === V && c[2], 
                                d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop(); ) if (1 === d.nodeType && ++f && d === t) {
                                    u[e] = [ V, p, f ];
                                    break;
                                }
                            } else if (y && (c = (t[F] || (t[F] = {}))[e]) && c[0] === V) f = c[1]; else for (;(d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[F] || (d[F] = {}))[e] = [ V, f ]), 
                            d !== t)); ) ;
                            return f -= i, f === r || 0 === f % r && f / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var n, r = N.pseudos[e] || N.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[F] ? r(t) : r.length > 1 ? (n = [ e, e, "", t ], N.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                        for (var i, o = r(e, t), a = o.length; a--; ) i = nt.call(e, o[a]), e[i] = !(n[i] = o[a]);
                    }) : function(e) {
                        return r(e, 0, n);
                    }) : r;
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [], n = [], r = k(e.replace(ct, "$1"));
                    return r[F] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop();
                    };
                }),
                has: i(function(e) {
                    return function(t) {
                        return a(e, t).length > 0;
                    };
                }),
                contains: i(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || E(t)).indexOf(e) > -1;
                    };
                }),
                lang: i(function(e) {
                    return pt.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(wt, _t).toLowerCase(), 
                    function(t) {
                        var n;
                        do if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), 
                        n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = window.location && window.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === M;
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !N.pseudos.empty(e);
                },
                header: function(e) {
                    return bt.test(e.nodeName);
                },
                input: function(e) {
                    return yt.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first: u(function() {
                    return [ 0 ];
                }),
                last: u(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: u(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        };
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) N.pseudos[w] = l(w);
        for (w in {
            submit: !0,
            reset: !0
        }) N.pseudos[w] = c(w);
        return k = a.compile = function(e, t) {
            var n, r = [], i = [], o = j[e + " "];
            if (!o) {
                for (t || (t = d(e)), n = t.length; n--; ) o = v(t[n]), o[F] ? r.push(o) : i.push(o);
                o = j(e, y(i, r));
            }
            return o;
        }, N.pseudos.nth = N.pseudos.eq, x.prototype = N.filters = N.pseudos, N.setFilters = new x(), 
        z.sortStable = F.split("").sort(G).join("") === F, B(), [ 0, 0 ].sort(G), z.detectDuplicates = K, 
        "function" == typeof r && r.amd ? r(function() {
            return a;
        }) : window.Sizzle = a, a;
    }), r(u, [ l, c ], function(e, n) {
        function r(e) {
            return "undefined" != typeof e;
        }
        function i(e) {
            return "string" == typeof e;
        }
        function o(e) {
            var t, n, r;
            for (r = g.createElement("div"), t = g.createDocumentFragment(), r.innerHTML = e; n = r.firstChild; ) t.appendChild(n);
            return t;
        }
        function a(e, t, n) {
            var r;
            if ("string" == typeof t) t = o(t); else if (t.length) {
                for (r = 0; r < t.length; r++) a(e, t[r], n);
                return e;
            }
            for (r = e.length; r--; ) n.call(e[r], t.parentNode ? t : t);
            return e;
        }
        function s(e, t) {
            return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ");
        }
        function l(e, t) {
            var n;
            for (e = e || [], "string" == typeof e && (e = e.split(" ")), t = t || {}, n = e.length; n--; ) t[e[n]] = {};
            return t;
        }
        function c(e, t) {
            return new c.fn.init(e, t);
        }
        function u(e) {
            var t = arguments, n, r, i;
            for (r = 1; r < t.length; r++) {
                n = t[r];
                for (i in n) e[i] = n[i];
            }
            return e;
        }
        function d(e) {
            var t = [], n, r;
            for (n = 0, r = e.length; r > n; n++) t[n] = e[n];
            return t;
        }
        function f(e, t) {
            var n;
            if (t.indexOf) return t.indexOf(e);
            for (n = t.length; n--; ) if (t[n] === e) return n;
            return -1;
        }
        function p(e, t) {
            var n, r, i, o, a;
            if (e) if (n = e.length, n === o) {
                for (r in e) if (e.hasOwnProperty(r) && (a = e[r], t.call(a, a, r) === !1)) break;
            } else for (i = 0; n > i && (a = e[i], t.call(a, a, r) !== !1); i++) ;
            return e;
        }
        function h(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !c(o).is(r)); ) 1 === o.nodeType && i.push(o), 
            o = o[n];
            return i;
        }
        function m(e, t, n, r) {
            for (var i = []; e; e = e[n]) r && e.nodeType !== r || e === t || i.push(e);
            return i;
        }
        var g = document, v = Array.prototype.push, y = Array.prototype.slice, b = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, C = e.Event, x = l("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"), w = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e);
        }, _ = /^\s*|\s*$/g, N = function(e) {
            return null === e || e === t ? "" : ("" + e).replace(_, "");
        };
        return c.fn = c.prototype = {
            constructor: c,
            selector: "",
            length: 0,
            init: function(e, t) {
                var n = this, r, a;
                if (!e) return n;
                if (e.nodeType) return n.context = n[0] = e, n.length = 1, n;
                if (i(e)) {
                    if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : b.exec(e), 
                    !r) return c(t || document).find(e);
                    if (r[1]) for (a = o(e).firstChild; a; ) this.add(a), a = a.nextSibling; else {
                        if (a = g.getElementById(r[2]), a.id !== r[2]) return n.find(e);
                        n.length = 1, n[0] = a;
                    }
                } else this.add(e);
                return n;
            },
            toArray: function() {
                return d(this);
            },
            add: function(e) {
                var t = this;
                return w(e) ? v.apply(t, e) : e instanceof c ? t.add(e.toArray()) : v.call(t, e), 
                t;
            },
            attr: function(e, n) {
                var i = this;
                if ("object" == typeof e) p(e, function(e, t) {
                    i.attr(t, e);
                }); else {
                    if (!r(n)) return i[0] && 1 === i[0].nodeType ? i[0].getAttribute(e) : t;
                    this.each(function() {
                        1 === this.nodeType && this.setAttribute(e, n);
                    });
                }
                return i;
            },
            css: function(e, n) {
                var i = this;
                if ("object" == typeof e) p(e, function(e, t) {
                    i.css(t, e);
                }); else {
                    if (e = e.replace(/-(\D)/g, function(e, t) {
                        return t.toUpperCase();
                    }), !r(n)) return i[0] ? i[0].style[e] : t;
                    "number" != typeof n || x[e] || (n += "px"), i.each(function() {
                        var t = this.style;
                        "opacity" === e && this.runtimeStyle && "undefined" == typeof this.runtimeStyle.opacity && (t.filter = "" === n ? "" : "alpha(opacity=" + 100 * n + ")");
                        try {
                            t[e] = n;
                        } catch (r) {}
                    });
                }
                return i;
            },
            remove: function() {
                for (var e = this, t, n = this.length; n--; ) t = e[n], C.clean(t), t.parentNode && t.parentNode.removeChild(t);
                return this;
            },
            empty: function() {
                for (var e = this, t, n = this.length; n--; ) for (t = e[n]; t.firstChild; ) t.removeChild(t.firstChild);
                return this;
            },
            html: function(e) {
                var t = this, n;
                if (r(e)) {
                    for (n = t.length; n--; ) t[n].innerHTML = e;
                    return t;
                }
                return t[0] ? t[0].innerHTML : "";
            },
            text: function(e) {
                var t = this, n;
                if (r(e)) {
                    for (n = t.length; n--; ) t[n].innerText = t[0].textContent = e;
                    return t;
                }
                return t[0] ? t[0].innerText || t[0].textContent : "";
            },
            append: function() {
                return a(this, arguments, function(e) {
                    1 === this.nodeType && this.appendChild(e);
                });
            },
            prepend: function() {
                return a(this, arguments, function(e) {
                    1 === this.nodeType && this.insertBefore(e, this.firstChild);
                });
            },
            before: function() {
                var e = this;
                return e[0] && e[0].parentNode ? a(e, arguments, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling);
                }) : e;
            },
            after: function() {
                var e = this;
                return e[0] && e[0].parentNode ? a(e, arguments, function(e) {
                    this.parentNode.insertBefore(e, this);
                }) : e;
            },
            appendTo: function(e) {
                return c(e).append(this), this;
            },
            addClass: function(e) {
                return this.toggleClass(e, !0);
            },
            removeClass: function(e) {
                return this.toggleClass(e, !1);
            },
            toggleClass: function(e, t) {
                var n = this;
                return -1 !== e.indexOf(" ") ? p(e.split(" "), function() {
                    n.toggleClass(this, t);
                }) : n.each(function() {
                    var n = this, r;
                    s(n, e) !== t && (r = n.className, t ? n.className += r ? " " + e : e : n.className = N((" " + r + " ").replace(" " + e + " ", " ")));
                }), n;
            },
            hasClass: function(e) {
                return s(this[0], e);
            },
            each: function(e) {
                return p(this, e);
            },
            on: function(e, t) {
                return this.each(function() {
                    C.bind(this, e, t);
                });
            },
            off: function(e, t) {
                return this.each(function() {
                    C.unbind(this, e, t);
                });
            },
            show: function() {
                return this.css("display", "");
            },
            hide: function() {
                return this.css("display", "none");
            },
            slice: function() {
                return new c(y.apply(this, arguments));
            },
            eq: function(e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            replaceWith: function(e) {
                var t = this;
                return t[0] && t[0].parentNode.replaceChild(c(e)[0], t[0]), t;
            },
            wrap: function(e) {
                return e = c(e)[0], this.each(function() {
                    var t = this, n = e.cloneNode(!1);
                    t.parentNode.insertBefore(n, t), n.appendChild(t);
                });
            },
            unwrap: function() {
                return this.each(function() {
                    for (var e = this, t = e.firstChild, n; t; ) n = t, t = t.nextSibling, e.parentNode.insertBefore(n, e);
                });
            },
            clone: function() {
                var e = [];
                return this.each(function() {
                    e.push(this.cloneNode(!0));
                }), c(e);
            },
            find: function(e) {
                var t, n, r = [];
                for (t = 0, n = this.length; n > t; t++) c.find(e, this[t], r);
                return c(r);
            },
            push: v,
            sort: [].sort,
            splice: [].splice
        }, u(c, {
            extend: u,
            toArray: d,
            inArray: f,
            isArray: w,
            each: p,
            trim: N,
            makeMap: l,
            find: n,
            expr: n.selectors,
            unique: n.uniqueSort,
            text: n.getText,
            isXMLDoc: n.isXML,
            contains: n.contains,
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? c.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : c.find.matches(e, t);
            }
        }), p({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function(e) {
                return h(e, "parentNode");
            },
            parentsUntil: function(e, t) {
                return h(e, "parentNode", t);
            },
            next: function(e) {
                return m(e, "nextSibling", 1);
            },
            prev: function(e) {
                return m(e, "previousSibling", 1);
            },
            nextNodes: function(e) {
                return m(e, "nextSibling");
            },
            prevNodes: function(e) {
                return m(e, "previousSibling");
            },
            children: function(e) {
                return m(e.firstChild, "nextSibling", 1);
            },
            contents: function(e) {
                return d(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes);
            }
        }, function(e, t) {
            c.fn[e] = function(n) {
                var r = this, i;
                if (r.length > 1) throw new Error("DomQuery only supports traverse functions on a single node.");
                return r[0] && (i = t(r[0], n)), i = c(i), n && "parentsUntil" !== e ? i.filter(n) : i;
            };
        }), c.fn.filter = function(e) {
            return c.filter(e);
        }, c.fn.is = function(e) {
            return !!e && this.filter(e).length > 0;
        }, c.fn.init.prototype = c.fn, c;
    }), r(d, [], function() {
        return function(e, t) {
            function n(e, t, n, r) {
                function i(e) {
                    return e = parseInt(e, 10).toString(16), e.length > 1 ? e : "0" + e;
                }
                return "#" + i(t) + i(n) + i(r);
            }
            var r = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi, i = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi, o = /\s*([^:]+):\s*([^;]+);?/g, a = /\s+$/, s, l, c = {}, u, d = "﻿";
            for (e = e || {}, u = ("\\\" \\' \\; \\: ; : " + d).split(" "), l = 0; l < u.length; l++) c[u[l]] = d + l, 
            c[d + l] = u[l];
            return {
                toHex: function(e) {
                    return e.replace(r, n);
                },
                parse: function(t) {
                    function s(e, t) {
                        var n, r, i, o;
                        n = h[e + "-top" + t], n && (r = h[e + "-right" + t], n == r && (i = h[e + "-bottom" + t], 
                        r == i && (o = h[e + "-left" + t], i == o && (h[e + t] = o, delete h[e + "-top" + t], 
                        delete h[e + "-right" + t], delete h[e + "-bottom" + t], delete h[e + "-left" + t]))));
                    }
                    function l(e) {
                        var t = h[e], n;
                        if (t && !(t.indexOf(" ") < 0)) {
                            for (t = t.split(" "), n = t.length; n--; ) if (t[n] !== t[0]) return !1;
                            return h[e] = t[0], !0;
                        }
                    }
                    function u(e, t, n, r) {
                        l(t) && l(n) && l(r) && (h[e] = h[t] + " " + h[n] + " " + h[r], delete h[t], delete h[n], 
                        delete h[r]);
                    }
                    function d(e) {
                        return y = !0, c[e];
                    }
                    function f(e, t) {
                        return y && (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                            return c[e];
                        })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e;
                    }
                    function p(e, t, n, r, i, o) {
                        return (i = i || o) ? (i = f(i), "'" + i.replace(/\'/g, "\\'") + "'") : (t = f(t || n || r), 
                        b && (t = b.call(C, t, "style")), "url('" + t.replace(/\'/g, "\\'") + "')");
                    }
                    var h = {}, m, g, v, y, b = e.url_converter, C = e.url_converter_scope || this;
                    if (t) {
                        for (t = t.replace(/\\[\"\';:\uFEFF]/g, d).replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
                            return e.replace(/[;:]/g, d);
                        }); m = o.exec(t); ) g = m[1].replace(a, "").toLowerCase(), v = m[2].replace(a, ""), 
                        g && v.length > 0 && ("font-weight" === g && "700" === v ? v = "bold" : ("color" === g || "background-color" === g) && (v = v.toLowerCase()), 
                        v = v.replace(r, n), v = v.replace(i, p), h[g] = y ? f(v, !0) : v), o.lastIndex = m.index + m[0].length;
                        s("border", ""), s("border", "-width"), s("border", "-color"), s("border", "-style"), 
                        s("padding", ""), s("margin", ""), u("border", "border-width", "border-style", "border-color"), 
                        "medium none" === h.border && delete h.border;
                    }
                    return h;
                },
                serialize: function(e, n) {
                    function r(n) {
                        var r, o, a, l;
                        if (r = t.styles[n]) for (o = 0, a = r.length; a > o; o++) n = r[o], l = e[n], l !== s && l.length > 0 && (i += (i.length > 0 ? " " : "") + n + ": " + l + ";");
                    }
                    var i = "", o, a;
                    if (n && t && t.styles) r("*"), r(n); else for (o in e) a = e[o], a !== s && a.length > 0 && (i += (i.length > 0 ? " " : "") + o + ": " + a + ";");
                    return i;
                }
            };
        };
    }), r(f, [], function() {
        return function(e, t) {
            function n(e, n, r, i) {
                var o, a;
                if (e) {
                    if (!i && e[n]) return e[n];
                    if (e != t) {
                        if (o = e[r]) return o;
                        for (a = e.parentNode; a && a != t; a = a.parentNode) if (o = a[r]) return o;
                    }
                }
            }
            var r = e;
            this.current = function() {
                return r;
            }, this.next = function(e) {
                return r = n(r, "firstChild", "nextSibling", e);
            }, this.prev = function(e) {
                return r = n(r, "lastChild", "previousSibling", e);
            };
        };
    }), r(p, [], function() {
        function e(e, n) {
            return n ? "array" == n && g(e) ? !0 : typeof e == n : e !== t;
        }
        function n(e) {
            var t = [], n, r;
            for (n = 0, r = e.length; r > n; n++) t[n] = e[n];
            return t;
        }
        function r(e, t, n) {
            var r;
            for (e = e || [], t = t || ",", "string" == typeof e && (e = e.split(t)), n = n || {}, 
            r = e.length; r--; ) n[e[r]] = {};
            return n;
        }
        function i(e, n, r) {
            var i, o;
            if (!e) return 0;
            if (r = r || e, e.length !== t) {
                for (i = 0, o = e.length; o > i; i++) if (n.call(r, e[i], i, e) === !1) return 0;
            } else for (i in e) if (e.hasOwnProperty(i) && n.call(r, e[i], i, e) === !1) return 0;
            return 1;
        }
        function o(e, t) {
            var n = [];
            return i(e, function(e) {
                n.push(t(e));
            }), n;
        }
        function a(e, t) {
            var n = [];
            return i(e, function(e) {
                (!t || t(e)) && n.push(e);
            }), n;
        }
        function s(e, t, n) {
            var r = this, i, o, a, s, l, c = 0;
            if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e), a = e[3].match(/(^|\.)(\w+)$/i)[2], 
            o = r.createNS(e[3].replace(/\.\w+$/, ""), n), !o[a]) {
                if ("static" == e[2]) return o[a] = t, this.onCreate && this.onCreate(e[2], e[3], o[a]), 
                void 0;
                t[a] || (t[a] = function() {}, c = 1), o[a] = t[a], r.extend(o[a].prototype, t), 
                e[5] && (i = r.resolve(e[5]).prototype, s = e[5].match(/\.(\w+)$/i)[1], l = o[a], 
                o[a] = c ? function() {
                    return i[s].apply(this, arguments);
                } : function() {
                    return this.parent = i[s], l.apply(this, arguments);
                }, o[a].prototype[a] = o[a], r.each(i, function(e, t) {
                    o[a].prototype[t] = i[t];
                }), r.each(t, function(e, t) {
                    i[t] ? o[a].prototype[t] = function() {
                        return this.parent = i[t], e.apply(this, arguments);
                    } : t != a && (o[a].prototype[t] = e);
                })), r.each(t["static"], function(e, t) {
                    o[a][t] = e;
                });
            }
        }
        function l(e, t) {
            var n, r;
            if (e) for (n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
            return -1;
        }
        function c(e, n) {
            var r, i, o, a = arguments, s;
            for (r = 1, i = a.length; i > r; r++) {
                n = a[r];
                for (o in n) n.hasOwnProperty(o) && (s = n[o], s !== t && (e[o] = s));
            }
            return e;
        }
        function u(e, t, n, r) {
            r = r || this, e && (n && (e = e[n]), i(e, function(e, i) {
                return t.call(r, e, i, n) === !1 ? !1 : (u(e, t, n, r), void 0);
            }));
        }
        function d(e, t) {
            var n, r;
            for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) r = e[n], t[r] || (t[r] = {}), 
            t = t[r];
            return t;
        }
        function f(e, t) {
            var n, r;
            for (t = t || window, e = e.split("."), n = 0, r = e.length; r > n && (t = t[e[n]], 
            t); n++) ;
            return t;
        }
        function p(t, n) {
            return !t || e(t, "array") ? t : o(t.split(n || ","), m);
        }
        var h = /^\s*|\s*$/g, m = function(e) {
            return null === e || e === t ? "" : ("" + e).replace(h, "");
        }, g = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e);
        };
        return {
            trim: m,
            isArray: g,
            is: e,
            toArray: n,
            makeMap: r,
            each: i,
            map: o,
            grep: a,
            inArray: l,
            extend: c,
            create: s,
            walk: u,
            createNS: d,
            resolve: f,
            explode: p
        };
    }), r(h, [ p ], function(e) {
        function t(n) {
            function r() {
                return H.createDocumentFragment();
            }
            function i(e, t) {
                _(F, e, t);
            }
            function o(e, t) {
                _(W, e, t);
            }
            function a(e) {
                i(e.parentNode, j(e));
            }
            function s(e) {
                i(e.parentNode, j(e) + 1);
            }
            function l(e) {
                o(e.parentNode, j(e));
            }
            function c(e) {
                o(e.parentNode, j(e) + 1);
            }
            function u(e) {
                e ? (D[U] = D[V], D[q] = D[z]) : (D[V] = D[U], D[z] = D[q]), D.collapsed = F;
            }
            function d(e) {
                a(e), c(e);
            }
            function f(e) {
                i(e, 0), o(e, 1 === e.nodeType ? e.childNodes.length : e.nodeValue.length);
            }
            function p(e, t) {
                var n = D[V], r = D[z], i = D[U], o = D[q], a = t.startContainer, s = t.startOffset, l = t.endContainer, c = t.endOffset;
                return 0 === e ? w(n, r, a, s) : 1 === e ? w(i, o, a, s) : 2 === e ? w(i, o, l, c) : 3 === e ? w(n, r, l, c) : void 0;
            }
            function h() {
                N(I);
            }
            function m() {
                return N(P);
            }
            function g() {
                return N(O);
            }
            function v(e) {
                var t = this[V], r = this[z], i, o;
                3 !== t.nodeType && 4 !== t.nodeType || !t.nodeValue ? (t.childNodes.length > 0 && (o = t.childNodes[r]), 
                o ? t.insertBefore(e, o) : t.appendChild(e)) : r ? r >= t.nodeValue.length ? n.insertAfter(e, t) : (i = t.splitText(r), 
                t.parentNode.insertBefore(e, i)) : t.parentNode.insertBefore(e, t);
            }
            function y(e) {
                var t = D.extractContents();
                D.insertNode(e), e.appendChild(t), D.selectNode(e);
            }
            function b() {
                return $(new t(n), {
                    startContainer: D[V],
                    startOffset: D[z],
                    endContainer: D[U],
                    endOffset: D[q],
                    collapsed: D.collapsed,
                    commonAncestorContainer: D.commonAncestorContainer
                });
            }
            function C(e, t) {
                var n;
                if (3 == e.nodeType) return e;
                if (0 > t) return e;
                for (n = e.firstChild; n && t > 0; ) --t, n = n.nextSibling;
                return n ? n : e;
            }
            function x() {
                return D[V] == D[U] && D[z] == D[q];
            }
            function w(e, t, r, i) {
                var o, a, s, l, c, u;
                if (e == r) return t == i ? 0 : i > t ? -1 : 1;
                for (o = r; o && o.parentNode != e; ) o = o.parentNode;
                if (o) {
                    for (a = 0, s = e.firstChild; s != o && t > a; ) a++, s = s.nextSibling;
                    return a >= t ? -1 : 1;
                }
                for (o = e; o && o.parentNode != r; ) o = o.parentNode;
                if (o) {
                    for (a = 0, s = r.firstChild; s != o && i > a; ) a++, s = s.nextSibling;
                    return i > a ? -1 : 1;
                }
                for (l = n.findCommonAncestor(e, r), c = e; c && c.parentNode != l; ) c = c.parentNode;
                for (c || (c = l), u = r; u && u.parentNode != l; ) u = u.parentNode;
                if (u || (u = l), c == u) return 0;
                for (s = l.firstChild; s; ) {
                    if (s == c) return -1;
                    if (s == u) return 1;
                    s = s.nextSibling;
                }
            }
            function _(e, t, r) {
                var i, o;
                for (e ? (D[V] = t, D[z] = r) : (D[U] = t, D[q] = r), i = D[U]; i.parentNode; ) i = i.parentNode;
                for (o = D[V]; o.parentNode; ) o = o.parentNode;
                o == i ? w(D[V], D[z], D[U], D[q]) > 0 && D.collapse(e) : D.collapse(e), D.collapsed = x(), 
                D.commonAncestorContainer = n.findCommonAncestor(D[V], D[U]);
            }
            function N(e) {
                var t, n = 0, r = 0, i, o, a, s, l, c;
                if (D[V] == D[U]) return E(e);
                for (t = D[U], i = t.parentNode; i; t = i, i = i.parentNode) {
                    if (i == D[V]) return S(t, e);
                    ++n;
                }
                for (t = D[V], i = t.parentNode; i; t = i, i = i.parentNode) {
                    if (i == D[U]) return k(t, e);
                    ++r;
                }
                for (o = r - n, a = D[V]; o > 0; ) a = a.parentNode, o--;
                for (s = D[U]; 0 > o; ) s = s.parentNode, o++;
                for (l = a.parentNode, c = s.parentNode; l != c; l = l.parentNode, c = c.parentNode) a = l, 
                s = c;
                return T(a, s, e);
            }
            function E(e) {
                var t, n, i, o, a, s, l, c, u;
                if (e != I && (t = r()), D[z] == D[q]) return t;
                if (3 == D[V].nodeType) {
                    if (n = D[V].nodeValue, i = n.substring(D[z], D[q]), e != O && (o = D[V], c = D[z], 
                    u = D[q] - D[z], 0 === c && u >= o.nodeValue.length - 1 ? o.parentNode.removeChild(o) : o.deleteData(c, u), 
                    D.collapse(F)), e == I) return;
                    return i.length > 0 && t.appendChild(H.createTextNode(i)), t;
                }
                for (o = C(D[V], D[z]), a = D[q] - D[z]; o && a > 0; ) s = o.nextSibling, l = L(o, e), 
                t && t.appendChild(l), --a, o = s;
                return e != O && D.collapse(F), t;
            }
            function S(e, t) {
                var n, i, o, a, s, l;
                if (t != I && (n = r()), i = R(e, t), n && n.appendChild(i), o = j(e), a = o - D[z], 
                0 >= a) return t != O && (D.setEndBefore(e), D.collapse(W)), n;
                for (i = e.previousSibling; a > 0; ) s = i.previousSibling, l = L(i, t), n && n.insertBefore(l, n.firstChild), 
                --a, i = s;
                return t != O && (D.setEndBefore(e), D.collapse(W)), n;
            }
            function k(e, t) {
                var n, i, o, a, s, l;
                for (t != I && (n = r()), o = A(e, t), n && n.appendChild(o), i = j(e), ++i, a = D[q] - i, 
                o = e.nextSibling; o && a > 0; ) s = o.nextSibling, l = L(o, t), n && n.appendChild(l), 
                --a, o = s;
                return t != O && (D.setStartAfter(e), D.collapse(F)), n;
            }
            function T(e, t, n) {
                var i, o, a, s, l, c, u, d;
                for (n != I && (o = r()), i = A(e, n), o && o.appendChild(i), a = e.parentNode, 
                s = j(e), l = j(t), ++s, c = l - s, u = e.nextSibling; c > 0; ) d = u.nextSibling, 
                i = L(u, n), o && o.appendChild(i), u = d, --c;
                return i = R(t, n), o && o.appendChild(i), n != O && (D.setStartAfter(e), D.collapse(F)), 
                o;
            }
            function R(e, t) {
                var n = C(D[U], D[q] - 1), r, i, o, a, s, l = n != D[U];
                if (n == e) return B(n, l, W, t);
                for (r = n.parentNode, i = B(r, W, W, t); r; ) {
                    for (;n; ) o = n.previousSibling, a = B(n, l, W, t), t != I && i.insertBefore(a, i.firstChild), 
                    l = F, n = o;
                    if (r == e) return i;
                    n = r.previousSibling, r = r.parentNode, s = B(r, W, W, t), t != I && s.appendChild(i), 
                    i = s;
                }
            }
            function A(e, t) {
                var n = C(D[V], D[z]), r = n != D[V], i, o, a, s, l;
                if (n == e) return B(n, r, F, t);
                for (i = n.parentNode, o = B(i, W, F, t); i; ) {
                    for (;n; ) a = n.nextSibling, s = B(n, r, F, t), t != I && o.appendChild(s), r = F, 
                    n = a;
                    if (i == e) return o;
                    n = i.nextSibling, i = i.parentNode, l = B(i, W, F, t), t != I && l.appendChild(o), 
                    o = l;
                }
            }
            function B(e, t, r, i) {
                var o, a, s, l, c;
                if (t) return L(e, i);
                if (3 == e.nodeType) {
                    if (o = e.nodeValue, r ? (l = D[z], a = o.substring(l), s = o.substring(0, l)) : (l = D[q], 
                    a = o.substring(0, l), s = o.substring(l)), i != O && (e.nodeValue = s), i == I) return;
                    return c = n.clone(e, W), c.nodeValue = a, c;
                }
                if (i != I) return n.clone(e, W);
            }
            function L(e, t) {
                return t != I ? t == O ? n.clone(e, F) : e : (e.parentNode.removeChild(e), void 0);
            }
            function M() {
                return n.create("body", null, g()).outerText;
            }
            var D = this, H = n.doc, P = 0, O = 1, I = 2, F = !0, W = !1, z = "startOffset", V = "startContainer", U = "endContainer", q = "endOffset", $ = e.extend, j = n.nodeIndex;
            return $(D, {
                startContainer: H,
                startOffset: 0,
                endContainer: H,
                endOffset: 0,
                collapsed: F,
                commonAncestorContainer: H,
                START_TO_START: 0,
                START_TO_END: 1,
                END_TO_END: 2,
                END_TO_START: 3,
                setStart: i,
                setEnd: o,
                setStartBefore: a,
                setStartAfter: s,
                setEndBefore: l,
                setEndAfter: c,
                collapse: u,
                selectNode: d,
                selectNodeContents: f,
                compareBoundaryPoints: p,
                deleteContents: h,
                extractContents: m,
                cloneContents: g,
                insertNode: v,
                surroundContents: y,
                cloneRange: b,
                toStringIE: M
            }), D;
        }
        return t.prototype.toString = function() {
            return this.toStringIE();
        }, t;
    }), r(m, [ p ], function(e) {
        function t(e) {
            var t;
            return t = document.createElement("div"), t.innerHTML = e, t.textContent || t.innerText || e;
        }
        function n(e, t) {
            var n, r, i, a = {};
            if (e) {
                for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), 
                o[r] || (i = "&" + e[n + 1] + ";", a[r] = i, a[i] = r);
                return a;
            }
        }
        var r = e.makeMap, i, o, a, s = /[&<>\"\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = /[<>&\"\']/g, u = /&(#x|#)?([\w]+);/g, d = {
            128: "€",
            130: "‚",
            131: "ƒ",
            132: "„",
            133: "…",
            134: "†",
            135: "‡",
            136: "ˆ",
            137: "‰",
            138: "Š",
            139: "‹",
            140: "Œ",
            142: "Ž",
            145: "‘",
            146: "’",
            147: "“",
            148: "”",
            149: "•",
            150: "–",
            151: "—",
            152: "˜",
            153: "™",
            154: "š",
            155: "›",
            156: "œ",
            158: "ž",
            159: "Ÿ"
        };
        o = {
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;"
        }, a = {
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&quot;": '"',
            "&apos;": "'"
        }, i = n("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
        var f = {
            encodeRaw: function(e, t) {
                return e.replace(t ? s : l, function(e) {
                    return o[e] || e;
                });
            },
            encodeAllRaw: function(e) {
                return ("" + e).replace(c, function(e) {
                    return o[e] || e;
                });
            },
            encodeNumeric: function(e, t) {
                return e.replace(t ? s : l, function(e) {
                    return e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : o[e] || "&#" + e.charCodeAt(0) + ";";
                });
            },
            encodeNamed: function(e, t, n) {
                return n = n || i, e.replace(t ? s : l, function(e) {
                    return o[e] || n[e] || e;
                });
            },
            getEncodeFunc: function(e, t) {
                function a(e, n) {
                    return e.replace(n ? s : l, function(e) {
                        return o[e] || t[e] || "&#" + e.charCodeAt(0) + ";" || e;
                    });
                }
                function c(e, n) {
                    return f.encodeNamed(e, n, t);
                }
                return t = n(t) || i, e = r(e.replace(/\+/g, ",")), e.named && e.numeric ? a : e.named ? t ? c : f.encodeNamed : e.numeric ? f.encodeNumeric : f.encodeRaw;
            },
            decode: function(e) {
                return e.replace(u, function(e, n, r) {
                    return n ? (r = parseInt(r, 2 === n.length ? 16 : 10), r > 65535 ? (r -= 65536, 
                    String.fromCharCode(55296 + (r >> 10), 56320 + (1023 & r))) : d[r] || String.fromCharCode(r)) : a[e] || i[e] || t(e);
                });
            }
        };
        return f;
    }), r(g, [], function() {
        var e = navigator, t = e.userAgent, n, r, i, o, a, s;
        n = window.opera && window.opera.buildNumber, r = /WebKit/.test(t), i = !r && !n && /MSIE/gi.test(t) && /Explorer/gi.test(e.appName), 
        i = i && /MSIE (\w+)\./.exec(t)[1], o = !r && /Gecko/.test(t), a = -1 != t.indexOf("Mac"), 
        s = /(iPad|iPhone)/.test(t);
        var l = !s || t.match(/AppleWebKit\/(\d*)/)[1] >= 534;
        return {
            opera: n,
            webkit: r,
            ie: i,
            gecko: o,
            mac: a,
            iOS: s,
            contentEditable: l,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: 8 != i,
            range: window.getSelection && "Range" in window,
            documentMode: i ? document.documentMode || 7 : 10
        };
    }), r(v, [ c, d, l, f, h, m, g, p ], function(e, n, r, i, o, a, s, l) {
        function c(e, t) {
            var i = this, o;
            i.doc = e, i.win = window, i.files = {}, i.counter = 0, i.stdMode = !g || e.documentMode >= 8, 
            i.boxModel = !g || "CSS1Compat" == e.compatMode || i.stdMode, i.hasOuterHTML = "outerHTML" in e.createElement("a"), 
            i.settings = t = h({
                keep_values: !1,
                hex_colors: 1
            }, t), i.schema = t.schema, i.styles = new n({
                url_converter: t.url_converter,
                url_converter_scope: t.url_converter_scope
            }, t.schema), i.fixDoc(e), i.events = t.ownEvents ? new r(t.proxy) : r.Event, o = t.schema ? t.schema.getBlockElements() : {}, 
            i.isBlock = function(e) {
                if (!e) return !1;
                var t = e.nodeType;
                return t ? !(1 !== t || !o[e.nodeName]) : !!o[e];
            };
        }
        var u = l.each, d = l.is, f = l.grep, p = l.trim, h = l.extend, m = s.webkit, g = s.ie, v = /^([a-z0-9],?)+$/i, y = /^[ \t\r\n]*$/, b = l.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " ");
        return c.prototype = {
            root: null,
            props: {
                "for": "htmlFor",
                "class": "className",
                className: "className",
                checked: "checked",
                disabled: "disabled",
                maxlength: "maxLength",
                readonly: "readOnly",
                selected: "selected",
                value: "value",
                id: "id",
                name: "name",
                type: "type"
            },
            fixDoc: function(e) {
                var t = this.settings, n;
                if (g && t.schema) {
                    "abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g, function(t) {
                        e.createElement(t);
                    });
                    for (n in t.schema.getCustomElements()) e.createElement(n);
                }
            },
            clone: function(e, t) {
                var n = this, r, i;
                return !g || 1 !== e.nodeType || t ? e.cloneNode(t) : (i = n.doc, t ? r.firstChild : (r = i.createElement(e.nodeName), 
                u(n.getAttribs(e), function(t) {
                    n.setAttrib(r, t.nodeName, n.getAttrib(e, t.nodeName));
                }), r));
            },
            getRoot: function() {
                var e = this;
                return e.get(e.settings.root_element) || e.doc.body;
            },
            getViewPort: function(e) {
                var t, n;
                return e = e ? e : this.win, t = e.document, n = this.boxModel ? t.documentElement : t.body, 
                {
                    x: e.pageXOffset || n.scrollLeft,
                    y: e.pageYOffset || n.scrollTop,
                    w: e.innerWidth || n.clientWidth,
                    h: e.innerHeight || n.clientHeight
                };
            },
            getRect: function(e) {
                var t = this, n, r;
                return e = t.get(e), n = t.getPos(e), r = t.getSize(e), {
                    x: n.x,
                    y: n.y,
                    w: r.w,
                    h: r.h
                };
            },
            getSize: function(e) {
                var t = this, n, r;
                return e = t.get(e), n = t.getStyle(e, "width"), r = t.getStyle(e, "height"), -1 === n.indexOf("px") && (n = 0), 
                -1 === r.indexOf("px") && (r = 0), {
                    w: parseInt(n, 10) || e.offsetWidth || e.clientWidth,
                    h: parseInt(r, 10) || e.offsetHeight || e.clientHeight
                };
            },
            getParent: function(e, t, n) {
                return this.getParents(e, t, n, !1);
            },
            getParents: function(e, n, r, i) {
                var o = this, a, s = [];
                for (e = o.get(e), i = i === t, r = r || ("BODY" != o.getRoot().nodeName ? o.getRoot().parentNode : null), 
                d(n, "string") && (a = n, n = "*" === n ? function(e) {
                    return 1 == e.nodeType;
                } : function(e) {
                    return o.is(e, a);
                }); e && e != r && e.nodeType && 9 !== e.nodeType; ) {
                    if (!n || n(e)) {
                        if (!i) return e;
                        s.push(e);
                    }
                    e = e.parentNode;
                }
                return i ? s : null;
            },
            get: function(e) {
                var t;
                return e && this.doc && "string" == typeof e && (t = e, e = this.doc.getElementById(e), 
                e && e.id !== t) ? this.doc.getElementsByName(t)[1] : e;
            },
            getNext: function(e, t) {
                return this._findSib(e, t, "nextSibling");
            },
            getPrev: function(e, t) {
                return this._findSib(e, t, "previousSibling");
            },
            select: function(t, n) {
                var r = this;
                return e(t, r.get(n) || r.get(r.settings.root_element) || r.doc, []);
            },
            is: function(n, r) {
                var i;
                if (n.length === t) {
                    if ("*" === r) return 1 == n.nodeType;
                    if (v.test(r)) {
                        for (r = r.toLowerCase().split(/,/), n = n.nodeName.toLowerCase(), i = r.length - 1; i >= 0; i--) if (r[i] == n) return !0;
                        return !1;
                    }
                }
                return n.nodeType && 1 != n.nodeType ? !1 : e.matches(r, n.nodeType ? [ n ] : n).length > 0;
            },
            add: function(e, t, n, r, i) {
                var o = this;
                return this.run(e, function(e) {
                    var a;
                    return a = d(t, "string") ? o.doc.createElement(t) : t, o.setAttribs(a, n), r && (r.nodeType ? a.appendChild(r) : o.setHTML(a, r)), 
                    i ? a : e.appendChild(a);
                });
            },
            create: function(e, t, n) {
                return this.add(this.doc.createElement(e), e, t, n, 1);
            },
            createHTML: function(e, t, n) {
                var r = "", i;
                r += "<" + e;
                for (i in t) t.hasOwnProperty(i) && null !== t[i] && (r += " " + i + '="' + this.encode(t[i]) + '"');
                return "undefined" != typeof n ? r + ">" + n + "</" + e + ">" : r + " />";
            },
            createFragment: function(e) {
                var t, n, r = this.doc, i;
                for (i = r.createElement("div"), t = r.createDocumentFragment(), e && (i.innerHTML = e); n = i.firstChild; ) t.appendChild(n);
                return t;
            },
            remove: function(e, t) {
                return this.run(e, function(e) {
                    var n, r = e.parentNode;
                    if (!r) return null;
                    if (t) for (;n = e.firstChild; ) !g || 3 !== n.nodeType || n.nodeValue ? r.insertBefore(n, e) : e.removeChild(n);
                    return r.removeChild(e);
                });
            },
            setStyle: function(e, t, n) {
                return this.run(e, function(e) {
                    var r = this, i, o;
                    if (t) if ("string" == typeof t) {
                        i = e.style, t = t.replace(/-(\D)/g, function(e, t) {
                            return t.toUpperCase();
                        }), "number" != typeof n || b[t] || (n += "px"), "opacity" === t && e.runtimeStyle && "undefined" == typeof e.runtimeStyle.opacity && (i.filter = "" === n ? "" : "alpha(opacity=" + 100 * n + ")"), 
                        "float" == t && (t = "cssFloat" in e.style ? "cssFloat" : "styleFloat");
                        try {
                            i[t] = n;
                        } catch (a) {}
                        r.settings.update_styles && e.removeAttribute("data-mce-style");
                    } else for (o in t) r.setStyle(e, o, t[o]);
                });
            },
            getStyle: function(e, n, r) {
                if (e = this.get(e)) {
                    if (this.doc.defaultView && r) {
                        n = n.replace(/[A-Z]/g, function(e) {
                            return "-" + e;
                        });
                        try {
                            return this.doc.defaultView.getComputedStyle(e, null).getPropertyValue(n);
                        } catch (i) {
                            return null;
                        }
                    }
                    return n = n.replace(/-(\D)/g, function(e, t) {
                        return t.toUpperCase();
                    }), "float" == n && (n = g ? "styleFloat" : "cssFloat"), n.currentStyle && r ? e.currentStyle[n] : e.style ? e.style[n] : t;
                }
            },
            setStyles: function(e, t) {
                this.setStyle(e, t);
            },
            css: function(e, t, n) {
                this.setStyle(e, t, n);
            },
            removeAllAttribs: function(e) {
                return this.run(e, function(e) {
                    var t, n = e.attributes;
                    for (t = n.length - 1; t >= 0; t--) e.removeAttributeNode(n.item(t));
                });
            },
            setAttrib: function(e, t, n) {
                var r = this;
                if (e && t) return this.run(e, function(e) {
                    var i = r.settings, o = e.getAttribute(t);
                    if (null !== n) switch (t) {
                      case "style":
                        if (!d(n, "string")) return u(n, function(t, n) {
                            r.setStyle(e, n, t);
                        }), void 0;
                        i.keep_values && (n ? e.setAttribute("data-mce-style", n, 2) : e.removeAttribute("data-mce-style", 2)), 
                        e.style.cssText = n;
                        break;

                      case "class":
                        e.className = n || "";
                        break;

                      case "src":
                      case "href":
                        i.keep_values && (i.url_converter && (n = i.url_converter.call(i.url_converter_scope || r, n, t, e)), 
                        r.setAttrib(e, "data-mce-" + t, n, 2));
                        break;

                      case "shape":
                        e.setAttribute("data-mce-style", n);
                    }
                    d(n) && null !== n && 0 !== n.length ? e.setAttribute(t, "" + n, 2) : e.removeAttribute(t, 2), 
                    o != n && i.onSetAttrib && i.onSetAttrib({
                        attrElm: e,
                        attrName: t,
                        attrValue: n
                    });
                });
            },
            setAttribs: function(e, t) {
                var n = this;
                return this.run(e, function(e) {
                    u(t, function(t, r) {
                        n.setAttrib(e, r, t);
                    });
                });
            },
            getAttrib: function(e, t, n) {
                var r, i = this, o;
                if (e = i.get(e), !e || 1 !== e.nodeType) return n === o ? !1 : n;
                if (d(n) || (n = ""), /^(src|href|style|coords|shape)$/.test(t) && (r = e.getAttribute("data-mce-" + t))) return r;
                if (g && i.props[t] && (r = e[i.props[t]], r = r && r.nodeValue ? r.nodeValue : r), 
                r || (r = e.getAttribute(t, 2)), /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noshade|nowrap|readonly|selected)$/.test(t)) return e[i.props[t]] === !0 && "" === r ? t : r ? t : "";
                if ("FORM" === e.nodeName && e.getAttributeNode(t)) return e.getAttributeNode(t).nodeValue;
                if ("style" === t && (r = r || e.style.cssText, r && (r = i.serializeStyle(i.parseStyle(r), e.nodeName), 
                i.settings.keep_values && e.setAttribute("data-mce-style", r))), m && "class" === t && r && (r = r.replace(/(apple|webkit)\-[a-z\-]+/gi, "")), 
                g) switch (t) {
                  case "rowspan":
                  case "colspan":
                    1 === r && (r = "");
                    break;

                  case "size":
                    ("+0" === r || 20 === r || 0 === r) && (r = "");
                    break;

                  case "width":
                  case "height":
                  case "vspace":
                  case "checked":
                  case "disabled":
                  case "readonly":
                    0 === r && (r = "");
                    break;

                  case "hspace":
                    -1 === r && (r = "");
                    break;

                  case "maxlength":
                  case "tabindex":
                    (32768 === r || 2147483647 === r || "32768" === r) && (r = "");
                    break;

                  case "multiple":
                  case "compact":
                  case "noshade":
                  case "nowrap":
                    return 65535 === r ? t : n;

                  case "shape":
                    r = r.toLowerCase();
                    break;

                  default:
                    0 === t.indexOf("on") && r && (r = ("" + r).replace(/^function\s+\w+\(\)\s+\{\s+(.*)\s+\}$/, "$1"));
                }
                return r !== o && null !== r && "" !== r ? "" + r : n;
            },
            getPos: function(e, t) {
                var n = this, r = 0, i = 0, o, a = n.doc, s;
                if (e = n.get(e), t = t || a.body, e) {
                    if (t === a.body && e.getBoundingClientRect) return s = e.getBoundingClientRect(), 
                    t = n.boxModel ? a.documentElement : a.body, r = s.left + (a.documentElement.scrollLeft || a.body.scrollLeft) - t.clientTop, 
                    i = s.top + (a.documentElement.scrollTop || a.body.scrollTop) - t.clientLeft, {
                        x: r,
                        y: i
                    };
                    for (o = e; o && o != t && o.nodeType; ) r += o.offsetLeft || 0, i += o.offsetTop || 0, 
                    o = o.offsetParent;
                    for (o = e.parentNode; o && o != t && o.nodeType; ) r -= o.scrollLeft || 0, i -= o.scrollTop || 0, 
                    o = o.parentNode;
                }
                return {
                    x: r,
                    y: i
                };
            },
            parseStyle: function(e) {
                return this.styles.parse(e);
            },
            serializeStyle: function(e, t) {
                return this.styles.serialize(e, t);
            },
            addStyle: function(e) {
                var t = this, n = t.doc, r, i;
                if (t !== c.DOM && n === document) {
                    var o = c.DOM.addedStyles;
                    if (o = o || [], o[e]) return;
                    o[e] = !0, c.DOM.addedStyles = o;
                }
                i = n.getElementById("mceDefaultStyles"), i || (i = n.createElement("style"), i.id = "mceDefaultStyles", 
                i.type = "text/css", r = n.getElementsByTagName("head")[0], r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i)), 
                i.styleSheet ? i.styleSheet.cssText += e : i.appendChild(n.createTextNode(e));
            },
            loadCSS: function(e) {
                var t = this, n = t.doc, r;
                return t !== c.DOM && n === document ? (c.DOM.loadCSS(e), void 0) : (e || (e = ""), 
                r = n.getElementsByTagName("head")[0], u(e.split(","), function(e) {
                    var i;
                    t.files[e] || (t.files[e] = !0, i = t.create("link", {
                        rel: "stylesheet",
                        href: e
                    }), g && n.documentMode && n.recalc && (i.onload = function() {
                        n.recalc && n.recalc(), i.onload = null;
                    }), r.appendChild(i));
                }), void 0);
            },
            addClass: function(e, t) {
                return this.run(e, function(e) {
                    var n;
                    return t ? this.hasClass(e, t) ? e.className : (n = this.removeClass(e, t), e.className = n = ("" !== n ? n + " " : "") + t, 
                    n) : 0;
                });
            },
            removeClass: function(e, t) {
                var n = this, r;
                return n.run(e, function(e) {
                    var i;
                    return n.hasClass(e, t) ? (r || (r = new RegExp("(^|\\s+)" + t + "(\\s+|$)", "g")), 
                    i = e.className.replace(r, " "), i = p(" " != i ? i : ""), e.className = i, i || (e.removeAttribute("class"), 
                    e.removeAttribute("className")), i) : e.className;
                });
            },
            hasClass: function(e, t) {
                return e = this.get(e), e && t ? -1 !== (" " + e.className + " ").indexOf(" " + t + " ") : !1;
            },
            toggleClass: function(e, n, r) {
                r = r === t ? !this.hasClass(e, n) : r, this.hasClass(e, n) !== r && (r ? this.addClass(e, n) : this.removeClass(e, n));
            },
            show: function(e) {
                return this.setStyle(e, "display", "block");
            },
            hide: function(e) {
                return this.setStyle(e, "display", "none");
            },
            isHidden: function(e) {
                return e = this.get(e), !e || "none" == e.style.display || "none" == this.getStyle(e, "display");
            },
            uniqueId: function(e) {
                return (e ? e : "mce_") + this.counter++;
            },
            setHTML: function(e, t) {
                var n = this;
                return n.run(e, function(e) {
                    if (g) {
                        for (;e.firstChild; ) e.removeChild(e.firstChild);
                        try {
                            e.innerHTML = "<br />" + t, e.removeChild(e.firstChild);
                        } catch (r) {
                            var i = n.create("div");
                            i.innerHTML = "<br />" + t, u(f(i.childNodes), function(t, n) {
                                n && e.canHaveHTML && e.appendChild(t);
                            });
                        }
                    } else e.innerHTML = t;
                    return t;
                });
            },
            getOuterHTML: function(e) {
                var t, n = this;
                return (e = n.get(e)) ? 1 === e.nodeType && n.hasOuterHTML ? e.outerHTML : (t = (e.ownerDocument || n.doc).createElement("body"), 
                t.appendChild(e.cloneNode(!0)), t.innerHTML) : null;
            },
            setOuterHTML: function(e, t, n) {
                var r = this;
                return r.run(e, function(e) {
                    function i() {
                        var i, o;
                        for (o = n.createElement("body"), o.innerHTML = t, i = o.lastChild; i; ) r.insertAfter(i.cloneNode(!0), e), 
                        i = i.previousSibling;
                        r.remove(e);
                    }
                    if (1 == e.nodeType) if (n = n || e.ownerDocument || r.doc, g) try {
                        1 == e.nodeType && r.hasOuterHTML ? e.outerHTML = t : i();
                    } catch (o) {
                        i();
                    } else i();
                });
            },
            decode: a.decode,
            encode: a.encodeAllRaw,
            insertAfter: function(e, t) {
                return t = this.get(t), this.run(e, function(e) {
                    var n, r;
                    return n = t.parentNode, r = t.nextSibling, r ? n.insertBefore(e, r) : n.appendChild(e), 
                    e;
                });
            },
            replace: function(e, t, n) {
                var r = this;
                return r.run(t, function(t) {
                    return d(t, "array") && (e = e.cloneNode(!0)), n && u(f(t.childNodes), function(t) {
                        e.appendChild(t);
                    }), t.parentNode.replaceChild(e, t);
                });
            },
            rename: function(e, t) {
                var n = this, r;
                return e.nodeName != t.toUpperCase() && (r = n.create(t), u(n.getAttribs(e), function(t) {
                    n.setAttrib(r, t.nodeName, n.getAttrib(e, t.nodeName));
                }), n.replace(r, e, 1)), r || e;
            },
            findCommonAncestor: function(e, t) {
                for (var n = e, r; n; ) {
                    for (r = t; r && n != r; ) r = r.parentNode;
                    if (n == r) break;
                    n = n.parentNode;
                }
                return !n && e.ownerDocument ? e.ownerDocument.documentElement : n;
            },
            toHex: function(e) {
                return this.styles.toHex(l.trim(e));
            },
            getClasses: function() {
                function e(t) {
                    u(t.imports, function(t) {
                        e(t);
                    }), u(t.cssRules || t.rules, function(t) {
                        switch (t.type || 1) {
                          case 1:
                            t.selectorText && u(t.selectorText.split(","), function(e) {
                                e = e.replace(/^\s*|\s*$|^\s\./g, ""), !/\.mce/.test(e) && /\.[\w\-]+$/.test(e) && (o = e, 
                                e = e.replace(/.*\.([a-z0-9_\-]+).*/i, "$1"), (!i || (e = i(e, o))) && (r[e] || (n.push({
                                    "class": e
                                }), r[e] = 1)));
                            });
                            break;

                          case 3:
                            e(t.styleSheet);
                        }
                    });
                }
                var t = this, n = [], r = {}, i = t.settings.class_filter, o;
                if (t.classes) return t.classes;
                try {
                    u(t.doc.styleSheets, e);
                } catch (a) {}
                return n.length > 0 && (t.classes = n), n;
            },
            run: function(e, t, n) {
                var r = this, i;
                return "string" == typeof e && (e = r.get(e)), e ? (n = n || this, e.nodeType || !e.length && 0 !== e.length ? t.call(n, e) : (i = [], 
                u(e, function(e, o) {
                    e && ("string" == typeof e && (e = r.get(e)), i.push(t.call(n, e, o)));
                }), i)) : !1;
            },
            getAttribs: function(e) {
                var t;
                if (e = this.get(e), !e) return [];
                if (g) {
                    if (t = [], "OBJECT" == e.nodeName) return e.attributes;
                    "OPTION" === e.nodeName && this.getAttrib(e, "selected") && t.push({
                        specified: 1,
                        nodeName: "selected"
                    });
                    var n = /<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;
                    return e.cloneNode(!1).outerHTML.replace(n, "").replace(/[\w:\-]+/gi, function(e) {
                        t.push({
                            specified: 1,
                            nodeName: e
                        });
                    }), t;
                }
                return e.attributes;
            },
            isEmpty: function(e, t) {
                var n = this, r, o, a, s, l, c = 0;
                if (e = e.firstChild) {
                    s = new i(e, e.parentNode), t = t || n.schema ? n.schema.getNonEmptyElements() : null;
                    do {
                        if (a = e.nodeType, 1 === a) {
                            if (e.getAttribute("data-mce-bogus")) continue;
                            if (l = e.nodeName.toLowerCase(), t && t[l]) {
                                if ("br" === l) {
                                    c++;
                                    continue;
                                }
                                return !1;
                            }
                            for (o = n.getAttribs(e), r = e.attributes.length; r--; ) if (l = e.attributes[r].nodeName, 
                            "name" === l || "data-mce-bookmark" === l) return !1;
                        }
                        if (8 == a) return !1;
                        if (3 === a && !y.test(e.nodeValue)) return !1;
                    } while (e = s.next());
                }
                return 1 >= c;
            },
            createRng: function() {
                var e = this.doc;
                return e.createRange ? e.createRange() : new o(this);
            },
            nodeIndex: function(e, t) {
                var n = 0, r, i, o;
                if (e) for (r = e.nodeType, e = e.previousSibling, i = e; e; e = e.previousSibling) o = e.nodeType, 
                (!t || 3 != o || o != r && e.nodeValue.length) && (n++, r = o);
                return n;
            },
            split: function(e, t, n) {
                function r(e) {
                    function t(e) {
                        var t = e.previousSibling && "SPAN" == e.previousSibling.nodeName, n = e.nextSibling && "SPAN" == e.nextSibling.nodeName;
                        return t && n;
                    }
                    var n, o = e.childNodes, a = e.nodeType;
                    if (1 != a || "bookmark" != e.getAttribute("data-mce-type")) {
                        for (n = o.length - 1; n >= 0; n--) r(o[n]);
                        if (9 != a) {
                            if (3 == a && e.nodeValue.length > 0) {
                                var s = p(e.nodeValue).length;
                                if (!i.isBlock(e.parentNode) || s > 0 || 0 === s && t(e)) return;
                            } else if (1 == a && (o = e.childNodes, 1 == o.length && o[0] && 1 == o[0].nodeType && "bookmark" == o[0].getAttribute("data-mce-type") && e.parentNode.insertBefore(o[0], e), 
                            o.length || /^(br|hr|input|img)$/i.test(e.nodeName))) return;
                            i.remove(e);
                        }
                        return e;
                    }
                }
                var i = this, o = i.createRng(), a, s, l;
                return e && t ? (o.setStart(e.parentNode, i.nodeIndex(e)), o.setEnd(t.parentNode, i.nodeIndex(t)), 
                a = o.extractContents(), o = i.createRng(), o.setStart(t.parentNode, i.nodeIndex(t) + 1), 
                o.setEnd(e.parentNode, i.nodeIndex(e) + 1), s = o.extractContents(), l = e.parentNode, 
                l.insertBefore(r(a), e), n ? l.replaceChild(n, t) : l.insertBefore(t, e), l.insertBefore(r(s), e), 
                i.remove(e), n || t) : void 0;
            },
            bind: function(e, t, n, r) {
                return this.events.bind(e, t, n, r || this);
            },
            unbind: function(e, t, n) {
                return this.events.unbind(e, t, n);
            },
            fire: function(e, t, n) {
                return this.events.fire(e, t, n);
            },
            getContentEditable: function(e) {
                var t;
                return 1 != e.nodeType ? null : (t = e.getAttribute("data-mce-contenteditable"), 
                t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null);
            },
            destroy: function() {
                var e = this;
                e.win = e.doc = e.root = e.events = e.frag = null;
            },
            dumpRng: function(e) {
                return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset;
            },
            _findSib: function(e, t, n) {
                var r = this, i = t;
                if (e) for ("string" == typeof i && (i = function(e) {
                    return r.is(e, t);
                }), e = e[n]; e; e = e[n]) if (i(e)) return e;
                return null;
            }
        }, c.DOM = new c(document), c;
    }), r(y, [ v, p ], function(e, t) {
        function n() {
            function e(e, t) {
                function n() {
                    o.remove(s), a && (a.onreadystatechange = a.onload = a = null), t();
                }
                function i() {
                    "undefined" != typeof console && console.log && console.log("Failed to load: " + e);
                }
                var o = r, a, s;
                s = o.uniqueId(), a = document.createElement("script"), a.id = s, a.type = "text/javascript", 
                a.src = e, "onreadystatechange" in a ? a.onreadystatechange = function() {
                    /loaded|complete/.test(a.readyState) && n();
                } : a.onload = n, a.onerror = i, (document.getElementsByTagName("head")[0] || document.body).appendChild(a);
            }
            var t = 0, n = 1, a = 2, s = {}, l = [], c = {}, u = [], d = 0, f;
            this.isDone = function(e) {
                return s[e] == a;
            }, this.markDone = function(e) {
                s[e] = a;
            }, this.add = this.load = function(e, n, r) {
                var i = s[e];
                i == f && (l.push(e), s[e] = t), n && (c[e] || (c[e] = []), c[e].push({
                    func: n,
                    scope: r || this
                }));
            }, this.loadQueue = function(e, t) {
                this.loadScripts(l, e, t);
            }, this.loadScripts = function(t, r, l) {
                function p(e) {
                    i(c[e], function(e) {
                        e.func.call(e.scope);
                    }), c[e] = f;
                }
                var h;
                u.push({
                    func: r,
                    scope: l || this
                }), h = function() {
                    var r = o(t);
                    t.length = 0, i(r, function(t) {
                        return s[t] == a ? (p(t), void 0) : (s[t] != n && (s[t] = n, d++, e(t, function() {
                            s[t] = a, d--, p(t), h();
                        })), void 0);
                    }), d || (i(u, function(e) {
                        e.func.call(e.scope);
                    }), u.length = 0);
                }, h();
            };
        }
        var r = e.DOM, i = t.each, o = t.grep;
        return n.ScriptLoader = new n(), n;
    }), r(b, [ y, p ], function(e, n) {
        function r() {
            var e = this;
            e.items = [], e.urls = {}, e.lookup = {};
        }
        var i = n.each;
        return r.prototype = {
            get: function(e) {
                return this.lookup[e] ? this.lookup[e].instance : t;
            },
            dependencies: function(e) {
                var t;
                return this.lookup[e] && (t = this.lookup[e].dependencies), t || [];
            },
            requireLangPack: function(t) {
                var n = r.settings;
                n && n.language && n.language_load !== !1 && e.ScriptLoader.add(this.urls[t] + "/langs/" + n.language + ".js");
            },
            add: function(e, t, n) {
                return this.items.push(t), this.lookup[e] = {
                    instance: t,
                    dependencies: n
                }, t;
            },
            createUrl: function(e, t) {
                return "object" == typeof t ? t : {
                    prefix: e.prefix,
                    resource: t,
                    suffix: e.suffix
                };
            },
            addComponents: function(t, n) {
                var r = this.urls[t];
                i(n, function(t) {
                    e.ScriptLoader.add(r + "/" + t);
                });
            },
            load: function(n, o, a, s) {
                function l() {
                    var r = c.dependencies(n);
                    i(r, function(e) {
                        var n = c.createUrl(o, e);
                        c.load(n.resource, n, t, t);
                    }), a && (s ? a.call(s) : a.call(e));
                }
                var c = this, u = o;
                c.urls[n] || ("object" == typeof o && (u = o.prefix + o.resource + o.suffix), 0 !== u.indexOf("/") && -1 == u.indexOf("://") && (u = r.baseURL + "/" + u), 
                c.urls[n] = u.substring(0, u.lastIndexOf("/")), c.lookup[n] ? l() : e.ScriptLoader.add(u, l, s));
            }
        }, r.PluginManager = new r(), r.ThemeManager = new r(), r;
    }), r(C, [], function() {
        function e(e, t, n) {
            var r, i, o = n ? "lastChild" : "firstChild", a = n ? "prev" : "next";
            if (e[o]) return e[o];
            if (e !== t) {
                if (r = e[a]) return r;
                for (i = e.parent; i && i !== t; i = i.parent) if (r = i[a]) return r;
            }
        }
        function t(e, t) {
            this.name = e, this.type = t, 1 === t && (this.attributes = [], this.attributes.map = {});
        }
        var n = /^[ \t\r\n]*$/, r = {
            "#text": 3,
            "#comment": 8,
            "#cdata": 4,
            "#pi": 7,
            "#doctype": 10,
            "#document-fragment": 11
        };
        return t.prototype = {
            replace: function(e) {
                var t = this;
                return e.parent && e.remove(), t.insert(e, t), t.remove(), t;
            },
            attr: function(e, t) {
                var n = this, r, i, o;
                if ("string" != typeof e) {
                    for (i in e) n.attr(i, e[i]);
                    return n;
                }
                if (r = n.attributes) {
                    if (t !== o) {
                        if (null === t) {
                            if (e in r.map) for (delete r.map[e], i = r.length; i--; ) if (r[i].name === e) return r = r.splice(i, 1), 
                            n;
                            return n;
                        }
                        if (e in r.map) {
                            for (i = r.length; i--; ) if (r[i].name === e) {
                                r[i].value = t;
                                break;
                            }
                        } else r.push({
                            name: e,
                            value: t
                        });
                        return r.map[e] = t, n;
                    }
                    return r.map[e];
                }
            },
            clone: function() {
                var e = this, n = new t(e.name, e.type), r, i, o, a, s;
                if (o = e.attributes) {
                    for (s = [], s.map = {}, r = 0, i = o.length; i > r; r++) a = o[r], "id" !== a.name && (s[s.length] = {
                        name: a.name,
                        value: a.value
                    }, s.map[a.name] = a.value);
                    n.attributes = s;
                }
                return n.value = e.value, n.shortEnded = e.shortEnded, n;
            },
            wrap: function(e) {
                var t = this;
                return t.parent.insert(e, t), e.append(t), t;
            },
            unwrap: function() {
                var e = this, t, n;
                for (t = e.firstChild; t; ) n = t.next, e.insert(t, e, !0), t = n;
                e.remove();
            },
            remove: function() {
                var e = this, t = e.parent, n = e.next, r = e.prev;
                return t && (t.firstChild === e ? (t.firstChild = n, n && (n.prev = null)) : r.next = n, 
                t.lastChild === e ? (t.lastChild = r, r && (r.next = null)) : n.prev = r, e.parent = e.next = e.prev = null), 
                e;
            },
            append: function(e) {
                var t = this, n;
                return e.parent && e.remove(), n = t.lastChild, n ? (n.next = e, e.prev = n, t.lastChild = e) : t.lastChild = t.firstChild = e, 
                e.parent = t, e;
            },
            insert: function(e, t, n) {
                var r;
                return e.parent && e.remove(), r = t.parent || this, n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, 
                e.prev = t.prev, e.next = t, t.prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, 
                e.next = t.next, e.prev = t, t.next = e), e.parent = r, e;
            },
            getAll: function(t) {
                var n = this, r, i = [];
                for (r = n.firstChild; r; r = e(r, n)) r.name === t && i.push(r);
                return i;
            },
            empty: function() {
                var t = this, n, r, i;
                if (t.firstChild) {
                    for (n = [], i = t.firstChild; i; i = e(i, t)) n.push(i);
                    for (r = n.length; r--; ) i = n[r], i.parent = i.firstChild = i.lastChild = i.next = i.prev = null;
                }
                return t.firstChild = t.lastChild = null, t;
            },
            isEmpty: function(t) {
                var r = this, i = r.firstChild, o, a;
                if (i) do {
                    if (1 === i.type) {
                        if (i.attributes.map["data-mce-bogus"]) continue;
                        if (t[i.name]) return !1;
                        for (o = i.attributes.length; o--; ) if (a = i.attributes[o].name, "name" === a || 0 === a.indexOf("data-mce-")) return !1;
                    }
                    if (8 === i.type) return !1;
                    if (3 === i.type && !n.test(i.value)) return !1;
                } while (i = e(i, r));
                return !0;
            },
            walk: function(t) {
                return e(this, null, t);
            }
        }, t.create = function(e, n) {
            var i, o;
            if (i = new t(e, r[e] || 1), n) for (o in n) i.attr(o, n[o]);
            return i;
        }, t;
    }), r(x, [ p ], function(e) {
        function t(e, t) {
            return e ? e.split(t || " ") : [];
        }
        function n(e) {
            function n(e, n, r) {
                function i(e) {
                    var t = {}, n, r;
                    for (n = 0, r = e.length; r > n; n++) t[e[n]] = {};
                    return t;
                }
                var o, l, c, u = arguments;
                for (r = r || [], n = n || "", "string" == typeof r && (r = t(r)), l = 3; l < u.length; l++) "string" == typeof u[l] && (u[l] = t(u[l])), 
                r.push.apply(r, u[l]);
                for (e = t(e), o = e.length; o--; ) c = [].concat(s, t(n)), a[e[o]] = {
                    attributes: i(c),
                    attributesOrder: c,
                    children: i(r)
                };
            }
            function i(e, n) {
                var r, i, o, s;
                for (e = t(e), r = e.length, n = t(n); r--; ) for (i = a[e[r]], o = 0, s = n.length; s > o; o++) i.attributes[n[o]] = {}, 
                i.attributesOrder.push(n[o]);
            }
            var a = {}, s, l, c, u, d, f, p;
            return r[e] ? r[e] : (s = t("id accesskey class dir lang style tabindex title"), 
            l = t("onabort onblur oncancel oncanplay oncanplaythrough onchange onclick onclose oncontextmenu oncuechange ondblclick ondrag ondragend ondragenter ondragleave ondragover ondragstart ondrop ondurationchange onemptied onended onerror onfocus oninput oninvalid onkeydown onkeypress onkeyup onload onloadeddata onloadedmetadata onloadstart onmousedown onmousemove onmouseout onmouseover onmouseup onmousewheel onpause onplay onplaying onprogress onratechange onreset onscroll onseeked onseeking onseeking onselect onshow onstalled onsubmit onsuspend ontimeupdate onvolumechange onwaiting"), 
            c = t("address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"), 
            u = t("a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"), 
            "html4" != e && (s.push.apply(s, t("contenteditable contextmenu draggable dropzone hidden spellcheck translate")), 
            c.push.apply(c, t("article aside details dialog figure header footer hgroup section nav")), 
            u.push.apply(u, t("audio canvas command datalist mark meter output progress time wbr video ruby bdi keygen"))), 
            "html5-strict" != e && (s.push("xml:lang"), p = t("acronym applet basefont big font strike tt"), 
            u.push.apply(u, p), o(p, function(e) {
                n(e, "", u);
            }), f = t("center dir isindex noframes"), c.push.apply(c, f), d = [].concat(c, u), 
            o(f, function(e) {
                n(e, "", d);
            })), d = d || [].concat(c, u), n("html", "manifest", "head body"), n("head", "", "base command link meta noscript script style title"), 
            n("title hr noscript br"), n("base", "href target"), n("link", "href rel media hreflang type sizes hreflang"), 
            n("meta", "name http-equiv content charset"), n("style", "media type scoped"), n("script", "src async defer type charset"), 
            n("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", d), 
            n("address dt dd div caption", "", d), n("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", u), 
            n("blockquote", "cite", d), n("ol", "reversed start type", "li"), n("ul", "", "li"), 
            n("li", "value", d), n("dl", "", "dt dd"), n("a", "href target rel media hreflang type", u), 
            n("q", "cite", u), n("ins del", "cite datetime", d), n("img", "src alt usemap ismap width height"), 
            n("iframe", "src name width height", d), n("embed", "src type width height"), n("object", "data type typemustmatch name usemap form width height", d, "param"), 
            n("param", "name value"), n("map", "name", d, "area"), n("area", "alt coords shape href target rel media hreflang type"), 
            n("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" == e ? " col" : "")), 
            n("colgroup", "span", "col"), n("col", "span"), n("tbody thead tfoot", "", "tr"), 
            n("tr", "", "td th"), n("td", "colspan rowspan headers", d), n("th", "colspan rowspan headers scope abbr", d), 
            n("form", "accept-charset action autocomplete enctype method name novalidate target", d), 
            n("fieldset", "disabled form name", d, "legend"), n("label", "form for", u), n("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), 
            n("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" == e ? d : u), 
            n("select", "disabled form multiple name required size", "option optgroup"), n("optgroup", "disabled label", "option"), 
            n("option", "disabled label selected value"), n("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), 
            n("menu", "type label", d, "li"), n("noscript", "", d), "html4" != e && (n("wbr"), 
            n("ruby", "", u, "rt rp"), n("figcaption", "", d), n("mark rt rp summary bdi", "", u), 
            n("canvas", "width height", d), n("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height", d, "track source"), 
            n("audio", "src crossorigin preload autoplay mediagroup loop muted controls", d, "track source"), 
            n("source", "src type media"), n("track", "kind src srclang label default"), n("datalist", "", u, "option"), 
            n("article section nav aside header footer", "", d), n("hgroup", "", "h1 h2 h3 h4 h5 h6"), 
            n("figure", "", d, "figcaption"), n("time", "datetime", u), n("dialog", "open", d), 
            n("command", "type label icon disabled checked radiogroup command"), n("output", "for form name", u), 
            n("progress", "value max", u), n("meter", "value min max low high optimum", u), 
            n("details", "open", d, "summary"), n("keygen", "autofocus challenge disabled form keytype name")), 
            "html5-strict" != e && (i("script", "language xml:space"), i("style", "xml:space"), 
            i("object", "declare classid codebase codetype archive standby align border hspace vspace"), 
            i("param", "valuetype type"), i("a", "charset name rev shape coords"), i("br", "clear"), 
            i("applet", "codebase archive code object alt name width height align hspace vspace"), 
            i("img", "name longdesc align border hspace vspace"), i("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), 
            i("font basefont", "size color face"), i("input", "usemap align"), i("select", "onchange"), 
            i("textarea"), i("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), i("ul", "type compact"), 
            i("li", "type"), i("ol dl menu dir", "compact"), i("pre", "width xml:space"), i("hr", "align noshade size width"), 
            i("isindex", "prompt"), i("table", "summary width frame rules cellspacing cellpadding align bgcolor"), 
            i("col", "width align char charoff valign"), i("colgroup", "width align char charoff valign"), 
            i("thead", "align char charoff valign"), i("tr", "align char charoff valign bgcolor"), 
            i("th", "axis align char charoff valign nowrap bgcolor width height"), i("form", "accept"), 
            i("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), 
            i("tfoot", "align char charoff valign"), i("tbody", "align char charoff valign"), 
            i("area", "nohref"), i("body", "background bgcolor text link vlink alink")), "html4" != e && (i("input button select textarea", "autofocus"), 
            i("input textarea", "placeholder"), i("a", "download"), i("link script img", "crossorigin"), 
            i("iframe", "srcdoc sandbox seamless allowfullscreen")), o(t("a form meter progress dfn"), function(e) {
                a[e] && delete a[e].children[e];
            }), delete a.caption.children.table, r[e] = a, a);
        }
        var r = {}, i = e.makeMap, o = e.each, a = e.extend, s = e.explode, l = e.inArray;
        return function(e) {
            function c(t, n, o) {
                var s = e[t];
                return s ? s = i(s, ",", i(s.toUpperCase(), " ")) : (s = r[t], s || (s = i(n, " ", i(n.toUpperCase(), " ")), 
                s = a(s, o), r[t] = s)), s;
            }
            function u(e) {
                return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$");
            }
            function d(e) {
                var n, r, o, a, s, c, d, f, p, h, m, g, y, C, x, w, _, N, E, S = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/, k = /^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/, T = /[*?+]/;
                if (e) for (e = t(e, ","), v["@"] && (w = v["@"].attributes, _ = v["@"].attributesOrder), 
                n = 0, r = e.length; r > n; n++) if (s = S.exec(e[n])) {
                    if (C = s[1], p = s[2], x = s[3], f = s[5], g = {}, y = [], c = {
                        attributes: g,
                        attributesOrder: y
                    }, "#" === C && (c.paddEmpty = !0), "-" === C && (c.removeEmpty = !0), "!" === s[4] && (c.removeEmptyAttrs = !0), 
                    w) {
                        for (N in w) g[N] = w[N];
                        y.push.apply(y, _);
                    }
                    if (f) for (f = t(f, "|"), o = 0, a = f.length; a > o; o++) if (s = k.exec(f[o])) {
                        if (d = {}, m = s[1], h = s[2].replace(/::/g, ":"), C = s[3], E = s[4], "!" === m && (c.attributesRequired = c.attributesRequired || [], 
                        c.attributesRequired.push(h), d.required = !0), "-" === m) {
                            delete g[h], y.splice(l(y, h), 1);
                            continue;
                        }
                        C && ("=" === C && (c.attributesDefault = c.attributesDefault || [], c.attributesDefault.push({
                            name: h,
                            value: E
                        }), d.defaultValue = E), ":" === C && (c.attributesForced = c.attributesForced || [], 
                        c.attributesForced.push({
                            name: h,
                            value: E
                        }), d.forcedValue = E), "<" === C && (d.validValues = i(E, "?"))), T.test(h) ? (c.attributePatterns = c.attributePatterns || [], 
                        d.pattern = u(h), c.attributePatterns.push(d)) : (g[h] || y.push(h), g[h] = d);
                    }
                    w || "@" != p || (w = g, _ = y), x && (c.outputName = p, v[x] = c), T.test(p) ? (c.pattern = u(p), 
                    b.push(c)) : v[p] = c;
                }
            }
            function f(e) {
                v = {}, b = [], d(e), o(x, function(e, t) {
                    y[t] = e.children;
                });
            }
            function p(e) {
                var n = /^(~)?(.+)$/;
                e && o(t(e, ","), function(e) {
                    var t = n.exec(e), r = "~" === t[1], i = r ? "span" : "div", a = t[2];
                    y[a] = y[i], R[a] = i, r || (S[a.toUpperCase()] = {}, S[a] = {}), v[a] || (v[a] = v[i]), 
                    o(y, function(e) {
                        e[i] && (e[a] = e[i]);
                    });
                });
            }
            function h(e) {
                var n = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                e && o(t(e, ","), function(e) {
                    var r = n.exec(e), i, a;
                    r && (a = r[1], i = a ? y[r[2]] : y[r[2]] = {
                        "#comment": {}
                    }, i = y[r[2]], o(t(r[3], "|"), function(e) {
                        "-" === a ? delete i[e] : i[e] = {};
                    }));
                });
            }
            function m(e) {
                var t = v[e], n;
                if (t) return t;
                for (n = b.length; n--; ) if (t = b[n], t.pattern.test(e)) return t;
            }
            var g = this, v = {}, y = {}, b = [], C, x, w, _, N, E, S, k, T, R = {}, A = {};
            e = e || {}, x = n(e.schema), e.verify_html === !1 && (e.valid_elements = "*[*]"), 
            e.valid_styles && (C = {}, o(e.valid_styles, function(e, t) {
                C[t] = s(e);
            })), w = c("whitespace_elements", "pre script noscript style textarea video audio iframe object"), 
            _ = c("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), 
            N = c("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), 
            E = c("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), 
            k = c("non_empty_elements", "td th iframe video audio object", N), T = c("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"), 
            S = c("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex samp option datalist select optgroup", T), 
            o((e.special || "script noscript style textarea").split(" "), function(e) {
                A[e] = new RegExp("</" + e + "[^>]*>", "gi");
            }), e.valid_elements ? f(e.valid_elements) : (o(x, function(e, t) {
                v[t] = {
                    attributes: e.attributes,
                    attributesOrder: e.attributesOrder
                }, y[t] = e.children;
            }), "html5" != e.schema && o(t("strong/b em/i"), function(e) {
                e = t(e, "/"), v[e[1]].outputName = e[0];
            }), v.img.attributesDefault = [ {
                name: "alt",
                value: ""
            } ], o(t("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function(e) {
                v[e] && (v[e].removeEmpty = !0);
            }), o(t("p h1 h2 h3 h4 h5 h6 th td pre div address caption"), function(e) {
                v[e].paddEmpty = !0;
            }), o(t("span"), function(e) {
                v[e].removeEmptyAttrs = !0;
            })), p(e.custom_elements), h(e.valid_children), d(e.extended_valid_elements), h("+ol[ul|ol],+ul[ul|ol]"), 
            e.invalid_elements && o(s(e.invalid_elements), function(e) {
                v[e] && delete v[e];
            }), m("span") || d("span[!data-mce-type|*]"), g.children = y, g.styles = C, g.getBoolAttrs = function() {
                return E;
            }, g.getBlockElements = function() {
                return S;
            }, g.getTextBlockElements = function() {
                return T;
            }, g.getShortEndedElements = function() {
                return N;
            }, g.getSelfClosingElements = function() {
                return _;
            }, g.getNonEmptyElements = function() {
                return k;
            }, g.getWhiteSpaceElements = function() {
                return w;
            }, g.getSpecialElements = function() {
                return A;
            }, g.isValidChild = function(e, t) {
                var n = y[e];
                return !(!n || !n[t]);
            }, g.isValid = function(e, t) {
                var n, r, i = m(e);
                if (i) {
                    if (!t) return !0;
                    if (i.attributes[t]) return !0;
                    if (n = i.attributePatterns) for (r = n.length; r--; ) if (n[r].pattern.test(e)) return !0;
                }
                return !1;
            }, g.getElementRule = m, g.getCustomElements = function() {
                return R;
            }, g.addValidElements = d, g.setValidElements = f, g.addCustomElements = p, g.addValidChildren = h, 
            g.elements = v;
        };
    }), r(w, [ x, m, p ], function(e, t, n) {
        var r = n.each;
        return function(n, i) {
            var o = this, a = function() {};
            n = n || {}, o.schema = i = i || new e(), n.fix_self_closing !== !1 && (n.fix_self_closing = !0), 
            r("comment cdata text start end pi doctype".split(" "), function(e) {
                e && (o[e] = n[e] || a);
            }), o.parse = function(e) {
                function r(e) {
                    var t, n;
                    for (t = d.length; t-- && d[t].name !== e; ) ;
                    if (t >= 0) {
                        for (n = d.length - 1; n >= t; n--) e = d[n], e.valid && a.end(e.name);
                        d.length = t;
                    }
                }
                function o(e, t, n, r, i) {
                    var o, a;
                    if (t = t.toLowerCase(), n = t in b ? t : I(n || r || i || ""), x && !g && 0 !== t.indexOf("data-")) {
                        if (o = S[t], !o && k) {
                            for (a = k.length; a-- && (o = k[a], !o.pattern.test(t)); ) ;
                            -1 === a && (o = null);
                        }
                        if (!o) return;
                        if (o.validValues && !(n in o.validValues)) return;
                    }
                    f.map[t] = n, f.push({
                        name: t,
                        value: n
                    });
                }
                var a = this, s, l = 0, c, u, d = [], f, p, h, m, g, v, y, b, C, x, w, _, N, E, S, k, T, R, A, B, L, M, D, H, P, O = 0, I = t.decode, F;
                for (M = new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), 
                D = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, 
                y = i.getShortEndedElements(), L = n.self_closing_elements || i.getSelfClosingElements(), 
                b = i.getBoolAttrs(), x = n.validate, v = n.remove_internals, F = n.fix_self_closing, 
                H = i.getSpecialElements(); s = M.exec(e); ) {
                    if (l < s.index && a.text(I(e.substr(l, s.index - l))), c = s[6]) c = c.toLowerCase(), 
                    ":" === c.charAt(0) && (c = c.substr(1)), r(c); else if (c = s[7]) {
                        if (c = c.toLowerCase(), ":" === c.charAt(0) && (c = c.substr(1)), C = c in y, F && L[c] && d.length > 0 && d[d.length - 1].name === c && r(c), 
                        !x || (w = i.getElementRule(c))) {
                            if (_ = !0, x && (S = w.attributes, k = w.attributePatterns), (E = s[8]) ? (g = -1 !== E.indexOf("data-mce-type"), 
                            g && v && (_ = !1), f = [], f.map = {}, E.replace(D, o)) : (f = [], f.map = {}), 
                            x && !g) {
                                if (T = w.attributesRequired, R = w.attributesDefault, A = w.attributesForced, B = w.removeEmptyAttrs, 
                                B && !f.length && (_ = !1), A) for (p = A.length; p--; ) N = A[p], m = N.name, P = N.value, 
                                "{$uid}" === P && (P = "mce_" + O++), f.map[m] = P, f.push({
                                    name: m,
                                    value: P
                                });
                                if (R) for (p = R.length; p--; ) N = R[p], m = N.name, m in f.map || (P = N.value, 
                                "{$uid}" === P && (P = "mce_" + O++), f.map[m] = P, f.push({
                                    name: m,
                                    value: P
                                }));
                                if (T) {
                                    for (p = T.length; p-- && !(T[p] in f.map); ) ;
                                    -1 === p && (_ = !1);
                                }
                                f.map["data-mce-bogus"] && (_ = !1);
                            }
                            _ && a.start(c, f, C);
                        } else _ = !1;
                        if (u = H[c]) {
                            u.lastIndex = l = s.index + s[0].length, (s = u.exec(e)) ? (_ && (h = e.substr(l, s.index - l)), 
                            l = s.index + s[0].length) : (h = e.substr(l), l = e.length), _ && (h.length > 0 && a.text(h, !0), 
                            a.end(c)), M.lastIndex = l;
                            continue;
                        }
                        C || (E && E.indexOf("/") == E.length - 1 ? _ && a.end(c) : d.push({
                            name: c,
                            valid: _
                        }));
                    } else (c = s[1]) ? a.comment(c) : (c = s[2]) ? a.cdata(c) : (c = s[3]) ? a.doctype(c) : (c = s[4]) && a.pi(c, s[5]);
                    l = s.index + s[0].length;
                }
                for (l < e.length && a.text(I(e.substr(l))), p = d.length - 1; p >= 0; p--) c = d[p], 
                c.valid && a.end(c.name);
            };
        };
    }), r(_, [ C, x, w, p ], function(e, t, n, r) {
        var i = r.makeMap, o = r.each, a = r.explode, s = r.extend;
        return function(r, l) {
            function c(t) {
                var n, r, o, a, s, c, d, f, p, h, m, g, v, y;
                for (m = i("tr,td,th,tbody,thead,tfoot,table"), h = l.getNonEmptyElements(), g = l.getTextBlockElements(), 
                n = 0; n < t.length; n++) if (r = t[n], r.parent && !r.fixed) if (g[r.name] && "li" == r.parent.name) {
                    for (v = r.next; v && g[v.name]; ) v.name = "li", v.fixed = !0, r.parent.insert(v, r.parent), 
                    v = v.next;
                    r.unwrap(r);
                } else {
                    for (a = [ r ], o = r.parent; o && !l.isValidChild(o.name, r.name) && !m[o.name]; o = o.parent) a.push(o);
                    if (o && a.length > 1) {
                        for (a.reverse(), s = c = u.filterNode(a[0].clone()), p = 0; p < a.length - 1; p++) {
                            for (l.isValidChild(c.name, a[p].name) ? (d = u.filterNode(a[p].clone()), c.append(d)) : d = c, 
                            f = a[p].firstChild; f && f != a[p + 1]; ) y = f.next, d.append(f), f = y;
                            c = d;
                        }
                        s.isEmpty(h) ? o.insert(r, a[0], !0) : (o.insert(s, a[0], !0), o.insert(r, s)), 
                        o = a[0], (o.isEmpty(h) || o.firstChild === o.lastChild && "br" === o.firstChild.name) && o.empty().remove();
                    } else if (r.parent) {
                        if ("li" === r.name) {
                            if (v = r.prev, v && ("ul" === v.name || "ul" === v.name)) {
                                v.append(r);
                                continue;
                            }
                            if (v = r.next, v && ("ul" === v.name || "ul" === v.name)) {
                                v.insert(r, v.firstChild, !0);
                                continue;
                            }
                            r.wrap(u.filterNode(new e("ul", 1)));
                            continue;
                        }
                        l.isValidChild(r.parent.name, "div") && l.isValidChild("div", r.name) ? r.wrap(u.filterNode(new e("div", 1))) : "style" === r.name || "script" === r.name ? r.empty().remove() : r.unwrap();
                    }
                }
            }
            var u = this, d = {}, f = [], p = {}, h = {};
            r = r || {}, r.validate = "validate" in r ? r.validate : !0, r.root_name = r.root_name || "body", 
            u.schema = l = l || new t(), u.filterNode = function(e) {
                var t, n, r;
                n in d && (r = p[n], r ? r.push(e) : p[n] = [ e ]), t = f.length;
                for (;t--; ) n = f[t].name, n in e.attributes.map && (r = h[n], r ? r.push(e) : h[n] = [ e ]);
                return e;
            }, u.addNodeFilter = function(e, t) {
                o(a(e), function(e) {
                    var n = d[e];
                    n || (d[e] = n = []), n.push(t);
                });
            }, u.addAttributeFilter = function(e, t) {
                o(a(e), function(e) {
                    var n;
                    for (n = 0; n < f.length; n++) if (f[n].name === e) return f[n].callbacks.push(t), 
                    void 0;
                    f.push({
                        name: e,
                        callbacks: [ t ]
                    });
                });
            }, u.parse = function(t, o) {
                function a() {
                    function e(e) {
                        e && (t = e.firstChild, t && 3 == t.type && (t.value = t.value.replace(R, "")), 
                        t = e.lastChild, t && 3 == t.type && (t.value = t.value.replace(L, "")));
                    }
                    var t = y.firstChild, n, r;
                    if (l.isValidChild(y.name, I.toLowerCase())) {
                        for (;t; ) n = t.next, 3 == t.type || 1 == t.type && "p" !== t.name && !T[t.name] && !t.attr("data-mce-type") ? r ? r.append(t) : (r = u(I, 1), 
                        y.insert(r, t), r.append(t)) : (e(r), r = null), t = n;
                        e(r);
                    }
                }
                function u(t, n) {
                    var r = new e(t, n), i;
                    return t in d && (i = p[t], i ? i.push(r) : p[t] = [ r ]), r;
                }
                function m(e) {
                    var t, n, r;
                    for (t = e.prev; t && 3 === t.type; ) n = t.value.replace(L, ""), n.length > 0 ? (t.value = n, 
                    t = t.prev) : (r = t.prev, t.remove(), t = r);
                }
                function g(e) {
                    var t, n = {};
                    for (t in e) "li" !== t && "p" != t && (n[t] = e[t]);
                    return n;
                }
                var v, y, b, C, x, w, _, N, E, S, k, T, R, A = [], B, L, M, D, H, P, O, I;
                if (o = o || {}, p = {}, h = {}, T = s(i("script,style,head,html,body,title,meta,param"), l.getBlockElements()), 
                O = l.getNonEmptyElements(), P = l.children, k = r.validate, I = "forced_root_block" in o ? o.forced_root_block : r.forced_root_block, 
                H = l.getWhiteSpaceElements(), R = /^[ \t\r\n]+/, L = /[ \t\r\n]+$/, M = /[ \t\r\n]+/g, 
                D = /^[ \t\r\n]+$/, v = new n({
                    validate: k,
                    self_closing_elements: g(l.getSelfClosingElements()),
                    cdata: function(e) {
                        b.append(u("#cdata", 4)).value = e;
                    },
                    text: function(e, t) {
                        var n;
                        B || (e = e.replace(M, " "), b.lastChild && T[b.lastChild.name] && (e = e.replace(R, ""))), 
                        0 !== e.length && (n = u("#text", 3), n.raw = !!t, b.append(n).value = e);
                    },
                    comment: function(e) {
                        b.append(u("#comment", 8)).value = e;
                    },
                    pi: function(e, t) {
                        b.append(u(e, 7)).value = t, m(b);
                    },
                    doctype: function(e) {
                        var t;
                        t = b.append(u("#doctype", 10)), t.value = e, m(b);
                    },
                    start: function(e, t, n) {
                        var r, i, o, a, s;
                        if (o = k ? l.getElementRule(e) : {}) {
                            for (r = u(o.outputName || e, 1), r.attributes = t, r.shortEnded = n, b.append(r), 
                            s = P[b.name], s && P[r.name] && !s[r.name] && A.push(r), i = f.length; i--; ) a = f[i].name, 
                            a in t.map && (E = h[a], E ? E.push(r) : h[a] = [ r ]);
                            T[e] && m(r), n || (b = r), !B && H[e] && (B = !0);
                        }
                    },
                    end: function(t) {
                        var n, r, i, o, a;
                        if (r = k ? l.getElementRule(t) : {}) {
                            if (T[t] && !B) {
                                if (n = b.firstChild, n && 3 === n.type) if (i = n.value.replace(R, ""), i.length > 0) n.value = i, 
                                n = n.next; else for (o = n.next, n.remove(), n = o; n && 3 === n.type; ) i = n.value, 
                                o = n.next, (0 === i.length || D.test(i)) && (n.remove(), n = o), n = o;
                                if (n = b.lastChild, n && 3 === n.type) if (i = n.value.replace(L, ""), i.length > 0) n.value = i, 
                                n = n.prev; else for (o = n.prev, n.remove(), n = o; n && 3 === n.type; ) i = n.value, 
                                o = n.prev, (0 === i.length || D.test(i)) && (n.remove(), n = o), n = o;
                            }
                            if (B && H[t] && (B = !1), (r.removeEmpty || r.paddEmpty) && b.isEmpty(O)) if (r.paddEmpty) b.empty().append(new e("#text", "3")).value = " "; else if (!b.attributes.map.name && !b.attributes.map.id) return a = b.parent, 
                            b.empty().remove(), b = a, void 0;
                            b = b.parent;
                        }
                    }
                }, l), y = b = new e(o.context || r.root_name, 11), v.parse(t), k && A.length && (o.context ? o.invalid = !0 : c(A)), 
                I && ("body" == y.name || o.isRootContent) && a(), !o.invalid) {
                    for (S in p) {
                        for (E = d[S], C = p[S], _ = C.length; _--; ) C[_].parent || C.splice(_, 1);
                        for (x = 0, w = E.length; w > x; x++) E[x](C, S, o);
                    }
                    for (x = 0, w = f.length; w > x; x++) if (E = f[x], E.name in h) {
                        for (C = h[E.name], _ = C.length; _--; ) C[_].parent || C.splice(_, 1);
                        for (_ = 0, N = E.callbacks.length; N > _; _++) E.callbacks[_](C, E.name, o);
                    }
                }
                return y;
            }, r.remove_trailing_brs && u.addNodeFilter("br", function(t) {
                var n, r = t.length, i, o = s({}, l.getBlockElements()), a = l.getNonEmptyElements(), c, u, d, f, p, h;
                for (o.body = 1, n = 0; r > n; n++) if (i = t[n], c = i.parent, o[i.parent.name] && i === c.lastChild) {
                    for (d = i.prev; d; ) {
                        if (f = d.name, "span" !== f || "bookmark" !== d.attr("data-mce-type")) {
                            if ("br" !== f) break;
                            if ("br" === f) {
                                i = null;
                                break;
                            }
                        }
                        d = d.prev;
                    }
                    i && (i.remove(), c.isEmpty(a) && (p = l.getElementRule(c.name), p && (p.removeEmpty ? c.remove() : p.paddEmpty && (c.empty().append(new e("#text", 3)).value = " "))));
                } else {
                    for (u = i; c && c.firstChild === u && c.lastChild === u && (u = c, !o[c.name]); ) c = c.parent;
                    u === c && (h = new e("#text", 3), h.value = " ", i.replace(h));
                }
            }), r.allow_html_in_named_anchor || u.addAttributeFilter("id,name", function(e) {
                for (var t = e.length, n, r, i, o; t--; ) if (o = e[t], "a" === o.name && o.firstChild && !o.attr("href")) {
                    i = o.parent, n = o.lastChild;
                    do r = n.prev, i.insert(n, o), n = r; while (n);
                }
            });
        };
    }), r(N, [ m, p ], function(e, t) {
        var n = t.makeMap;
        return function(t) {
            var r = [], i, o, a, s, l;
            return t = t || {}, i = t.indent, o = n(t.indent_before || ""), a = n(t.indent_after || ""), 
            s = e.getEncodeFunc(t.entity_encoding || "raw", t.entities), l = "html" == t.element_format, 
            {
                start: function(e, t, n) {
                    var c, u, d, f;
                    if (i && o[e] && r.length > 0 && (f = r[r.length - 1], f.length > 0 && "\n" !== f && r.push("\n")), 
                    r.push("<", e), t) for (c = 0, u = t.length; u > c; c++) d = t[c], r.push(" ", d.name, '="', s(d.value, !0), '"');
                    r[r.length] = !n || l ? ">" : " />", n && i && a[e] && r.length > 0 && (f = r[r.length - 1], 
                    f.length > 0 && "\n" !== f && r.push("\n"));
                },
                end: function(e) {
                    var t;
                    r.push("</", e, ">"), i && a[e] && r.length > 0 && (t = r[r.length - 1], t.length > 0 && "\n" !== t && r.push("\n"));
                },
                text: function(e, t) {
                    e.length > 0 && (r[r.length] = t ? e : s(e));
                },
                cdata: function(e) {
                    r.push("<![CDATA[", e, "]]>");
                },
                comment: function(e) {
                    r.push("<!--", e, "-->");
                },
                pi: function(e, t) {
                    t ? r.push("<?", e, " ", t, "?>") : r.push("<?", e, "?>"), i && r.push("\n");
                },
                doctype: function(e) {
                    r.push("<!DOCTYPE", e, ">", i ? "\n" : "");
                },
                reset: function() {
                    r.length = 0;
                },
                getContent: function() {
                    return r.join("").replace(/\n$/, "");
                }
            };
        };
    }), r(E, [ N, x ], function(e, t) {
        return function(n, r) {
            var i = this, o = new e(n);
            n = n || {}, n.validate = "validate" in n ? n.validate : !0, i.schema = r = r || new t(), 
            i.writer = o, i.serialize = function(e) {
                function t(e) {
                    var n = i[e.type], s, l, c, u, d, f, p, h, m;
                    if (n) n(e); else {
                        if (s = e.name, l = e.shortEnded, c = e.attributes, a && c && c.length > 1) {
                            for (f = [], f.map = {}, m = r.getElementRule(e.name), p = 0, h = m.attributesOrder.length; h > p; p++) u = m.attributesOrder[p], 
                            u in c.map && (d = c.map[u], f.map[u] = d, f.push({
                                name: u,
                                value: d
                            }));
                            for (p = 0, h = c.length; h > p; p++) u = c[p].name, u in f.map || (d = c.map[u], 
                            f.map[u] = d, f.push({
                                name: u,
                                value: d
                            }));
                            c = f;
                        }
                        if (o.start(e.name, c, l), !l) {
                            if (e = e.firstChild) do t(e); while (e = e.next);
                            o.end(s);
                        }
                    }
                }
                var i, a;
                return a = n.validate, i = {
                    3: function(e) {
                        o.text(e.value, e.raw);
                    },
                    8: function(e) {
                        o.comment(e.value);
                    },
                    7: function(e) {
                        o.pi(e.name, e.value);
                    },
                    10: function(e) {
                        o.doctype(e.value);
                    },
                    4: function(e) {
                        o.cdata(e.value);
                    },
                    11: function(e) {
                        if (e = e.firstChild) do t(e); while (e = e.next);
                    }
                }, o.reset(), 1 != e.type || n.inner ? i[11](e) : t(e), o.getContent();
            };
        };
    }), r(S, [ v, _, m, E, C, x, g, p ], function(e, t, n, r, i, o, a, s) {
        var l = s.each, c = s.trim, u = e.DOM;
        return function(e, i) {
            var s, d, f;
            return i && (s = i.dom, d = i.schema), s = s || u, d = d || new o(e), e.entity_encoding = e.entity_encoding || "named", 
            e.remove_trailing_brs = "remove_trailing_brs" in e ? e.remove_trailing_brs : !0, 
            f = new t(e, d), f.addAttributeFilter("src,href,style", function(t, n) {
                for (var r = t.length, i, o, a = "data-mce-" + n, l = e.url_converter, c = e.url_converter_scope, u; r--; ) i = t[r], 
                o = i.attributes.map[a], o !== u ? (i.attr(n, o.length > 0 ? o : null), i.attr(a, null)) : (o = i.attributes.map[n], 
                "style" === n ? o = s.serializeStyle(s.parseStyle(o), i.name) : l && (o = l.call(c, o, n, i.name)), 
                i.attr(n, o.length > 0 ? o : null));
            }), f.addAttributeFilter("class", function(e) {
                for (var t = e.length, n, r; t--; ) n = e[t], r = n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), 
                n.attr("class", r.length > 0 ? r : null);
            }), f.addAttributeFilter("data-mce-type", function(e, t, n) {
                for (var r = e.length, i; r--; ) i = e[r], "bookmark" !== i.attributes.map["data-mce-type"] || n.cleanup || i.remove();
            }), f.addAttributeFilter("data-mce-expando", function(e, t) {
                for (var n = e.length; n--; ) e[n].attr(t, null);
            }), f.addNodeFilter("noscript", function(e) {
                for (var t = e.length, r; t--; ) r = e[t].firstChild, r && (r.value = n.decode(r.value));
            }), f.addNodeFilter("script,style", function(e, t) {
                function n(e) {
                    return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
                }
                for (var r = e.length, i, o; r--; ) i = e[r], o = i.firstChild ? i.firstChild.value : "", 
                "script" === t ? (i.attr("type", (i.attr("type") || "text/javascript").replace(/^mce\-/, "")), 
                o.length > 0 && (i.firstChild.value = "// <![CDATA[\n" + n(o) + "\n// ]]>")) : o.length > 0 && (i.firstChild.value = "<!--\n" + n(o) + "\n-->");
            }), f.addNodeFilter("#comment", function(e) {
                for (var t = e.length, n; t--; ) n = e[t], 0 === n.value.indexOf("[CDATA[") ? (n.name = "#cdata", 
                n.type = 4, n.value = n.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === n.value.indexOf("mce:protected ") && (n.name = "#text", 
                n.type = 3, n.raw = !0, n.value = unescape(n.value).substr(14));
            }), f.addNodeFilter("xml:namespace,input", function(e, t) {
                for (var n = e.length, r; n--; ) r = e[n], 7 === r.type ? r.remove() : 1 === r.type && ("input" !== t || "type" in r.attributes.map || r.attr("type", "text"));
            }), e.fix_list_elements && f.addNodeFilter("ul,ol", function(e) {
                for (var t = e.length, n, r; t--; ) n = e[t], r = n.parent, ("ul" === r.name || "ol" === r.name) && n.prev && "li" === n.prev.name && n.prev.append(n);
            }), f.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected", function(e, t) {
                for (var n = e.length; n--; ) e[n].attr(t, null);
            }), {
                schema: d,
                addNodeFilter: f.addNodeFilter,
                addAttributeFilter: f.addAttributeFilter,
                serialize: function(t, n) {
                    var i = this, o, u, p, h, m;
                    return a.ie && s.select("script,style,select,map").length > 0 ? (m = t.innerHTML, 
                    t = t.cloneNode(!1), s.setHTML(t, m)) : t = t.cloneNode(!0), o = t.ownerDocument.implementation, 
                    o.createHTMLDocument && (u = o.createHTMLDocument(""), l("BODY" == t.nodeName ? t.childNodes : [ t ], function(e) {
                        u.body.appendChild(u.importNode(e, !0));
                    }), t = "BODY" != t.nodeName ? u.body.firstChild : u.body, p = s.doc, s.doc = u), 
                    n = n || {}, n.format = n.format || "html", n.selection && (n.forced_root_block = ""), 
                    n.no_events || (n.node = t, i.onPreProcess(n)), h = new r(e, d), n.content = h.serialize(f.parse(c(n.getInner ? t.innerHTML : s.getOuterHTML(t)), n)), 
                    n.cleanup || (n.content = n.content.replace(/\uFEFF/g, "")), n.no_events || i.onPostProcess(n), 
                    p && (s.doc = p), n.node = null, n.content;
                },
                addRules: function(e) {
                    d.addValidElements(e);
                },
                setRules: function(e) {
                    d.setValidElements(e);
                },
                onPreProcess: function(e) {
                    i && i.fire("PreProcess", e);
                },
                onPostProcess: function(e) {
                    i && i.fire("PostProcess", e);
                }
            };
        };
    }), r(k, [], function() {
        function e(e) {
            function t(t, n) {
                var r, i = 0, o, a, s, l, c, u, d = -1, f;
                if (r = t.duplicate(), r.collapse(n), f = r.parentElement(), f.ownerDocument === e.dom.doc) {
                    for (;"false" === f.contentEditable; ) f = f.parentNode;
                    if (!f.hasChildNodes()) return {
                        node: f,
                        inside: 1
                    };
                    for (s = f.children, o = s.length - 1; o >= i; ) if (u = Math.floor((i + o) / 2), 
                    l = s[u], r.moveToElementText(l), d = r.compareEndPoints(n ? "StartToStart" : "EndToEnd", t), 
                    d > 0) o = u - 1; else {
                        if (!(0 > d)) return {
                            node: l
                        };
                        i = u + 1;
                    }
                    if (0 > d) for (l ? r.collapse(!1) : (r.moveToElementText(f), r.collapse(!0), l = f, 
                    a = !0), c = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", 1) && f == r.parentElement(); ) c++; else for (r.collapse(!0), 
                    c = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", -1) && f == r.parentElement(); ) c++;
                    return {
                        node: l,
                        position: d,
                        offset: c,
                        inside: a
                    };
                }
            }
            function n() {
                function n(e) {
                    var n = t(o, e), r, i, s = 0, l, c, u;
                    if (r = n.node, i = n.offset, n.inside && !r.hasChildNodes()) return a[e ? "setStart" : "setEnd"](r, 0), 
                    void 0;
                    if (i === c) return a[e ? "setStartBefore" : "setEndAfter"](r), void 0;
                    if (n.position < 0) {
                        if (l = n.inside ? r.firstChild : r.nextSibling, !l) return a[e ? "setStartAfter" : "setEndAfter"](r), 
                        void 0;
                        if (!i) return 3 == l.nodeType ? a[e ? "setStart" : "setEnd"](l, 0) : a[e ? "setStartBefore" : "setEndBefore"](l), 
                        void 0;
                        for (;l; ) {
                            if (u = l.nodeValue, s += u.length, s >= i) {
                                r = l, s -= i, s = u.length - s;
                                break;
                            }
                            l = l.nextSibling;
                        }
                    } else {
                        if (l = r.previousSibling, !l) return a[e ? "setStartBefore" : "setEndBefore"](r);
                        if (!i) return 3 == r.nodeType ? a[e ? "setStart" : "setEnd"](l, r.nodeValue.length) : a[e ? "setStartAfter" : "setEndAfter"](l), 
                        void 0;
                        for (;l; ) {
                            if (s += l.nodeValue.length, s >= i) {
                                r = l, s -= i;
                                break;
                            }
                            l = l.previousSibling;
                        }
                    }
                    a[e ? "setStart" : "setEnd"](r, s);
                }
                var o = e.getRng(), a = i.createRng(), s, l, c, u, d;
                if (s = o.item ? o.item(0) : o.parentElement(), s.ownerDocument != i.doc) return a;
                if (l = e.isCollapsed(), o.item) return a.setStart(s.parentNode, i.nodeIndex(s)), 
                a.setEnd(a.startContainer, a.startOffset + 1), a;
                try {
                    n(!0), l || n();
                } catch (f) {
                    if (-2147024809 != f.number) throw f;
                    d = r.getBookmark(2), c = o.duplicate(), c.collapse(!0), s = c.parentElement(), 
                    l || (c = o.duplicate(), c.collapse(!1), u = c.parentElement(), u.innerHTML = u.innerHTML), 
                    s.innerHTML = s.innerHTML, r.moveToBookmark(d), o = e.getRng(), n(!0), l || n();
                }
                return a;
            }
            var r = this, i = e.dom, o = !1;
            this.getBookmark = function(n) {
                function r(e) {
                    var t, n, r, o, a = [];
                    for (t = e.parentNode, n = i.getRoot().parentNode; t != n && 9 !== t.nodeType; ) {
                        for (r = t.children, o = r.length; o--; ) if (e === r[o]) {
                            a.push(o);
                            break;
                        }
                        e = t, t = t.parentNode;
                    }
                    return a;
                }
                function o(e) {
                    var n;
                    return n = t(a, e), n ? {
                        position: n.position,
                        offset: n.offset,
                        indexes: r(n.node),
                        inside: n.inside
                    } : void 0;
                }
                var a = e.getRng(), s = {};
                return 2 === n && (a.item ? s.start = {
                    ctrl: !0,
                    indexes: r(a.item(0))
                } : (s.start = o(!0), e.isCollapsed() || (s.end = o()))), s;
            }, this.moveToBookmark = function(e) {
                function t(e) {
                    var t, n, r, o;
                    for (t = i.getRoot(), n = e.length - 1; n >= 0; n--) o = t.children, r = e[n], r <= o.length - 1 && (t = o[r]);
                    return t;
                }
                function n(n) {
                    var i = e[n ? "start" : "end"], a, s, l, c;
                    i && (a = i.position > 0, s = o.createTextRange(), s.moveToElementText(t(i.indexes)), 
                    c = i.offset, c !== l ? (s.collapse(i.inside || a), s.moveStart("character", a ? -c : c)) : s.collapse(n), 
                    r.setEndPoint(n ? "StartToStart" : "EndToStart", s), n && r.collapse(!0));
                }
                var r, o = i.doc.body;
                e.start && (e.start.ctrl ? (r = o.createControlRange(), r.addElement(t(e.start.indexes)), 
                r.select()) : (r = o.createTextRange(), n(!0), n(), r.select()));
            }, this.addRange = function(t) {
                function n(e) {
                    var t, n, a, d, h;
                    a = i.create("a"), t = e ? s : c, n = e ? l : u, d = r.duplicate(), (t == f || t == f.documentElement) && (t = p, 
                    n = 0), 3 == t.nodeType ? (t.parentNode.insertBefore(a, t), d.moveToElementText(a), 
                    d.moveStart("character", n), i.remove(a), r.setEndPoint(e ? "StartToStart" : "EndToEnd", d)) : (h = t.childNodes, 
                    h.length ? (n >= h.length ? i.insertAfter(a, h[h.length - 1]) : t.insertBefore(a, h[n]), 
                    d.moveToElementText(a)) : t.canHaveHTML && (t.innerHTML = "<span>&#xFEFF;</span>", 
                    a = t.firstChild, d.moveToElementText(a), d.collapse(o)), r.setEndPoint(e ? "StartToStart" : "EndToEnd", d), 
                    i.remove(a));
                }
                var r, a, s, l, c, u, d, f = e.dom.doc, p = f.body, h, m;
                if (s = t.startContainer, l = t.startOffset, c = t.endContainer, u = t.endOffset, 
                r = p.createTextRange(), s == c && 1 == s.nodeType) {
                    if (l == u && !s.hasChildNodes()) {
                        if (s.canHaveHTML) return d = s.previousSibling, d && !d.hasChildNodes() && i.isBlock(d) ? d.innerHTML = "&#xFEFF;" : d = null, 
                        s.innerHTML = "<span>&#xFEFF;</span><span>&#xFEFF;</span>", r.moveToElementText(s.lastChild), 
                        r.select(), i.doc.selection.clear(), s.innerHTML = "", d && (d.innerHTML = ""), 
                        void 0;
                        l = i.nodeIndex(s), s = s.parentNode;
                    }
                    if (l == u - 1) try {
                        if (m = s.childNodes[l], a = p.createControlRange(), a.addElement(m), a.select(), 
                        h = e.getRng(), h.item && m === h.item(0)) return;
                    } catch (g) {}
                }
                n(!0), n(), r.select();
            }, this.getRangeAt = n;
        }
        return e;
    }), r(T, [ g ], function(e) {
        return {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            modifierPressed: function(e) {
                return e.shiftKey || e.ctrlKey || e.altKey;
            },
            metaKeyPressed: function(t) {
                return (e.mac ? t.ctrlKey || t.metaKey : t.ctrlKey) && !t.altKey;
            }
        };
    }), r(R, [ T, p, g ], function(e, t, n) {
        return function(r, i) {
            function o(e) {
                return i.settings.object_resizing === !1 ? !1 : /TABLE|IMG|DIV/.test(e.nodeName) ? "false" === e.getAttribute("data-mce-resize") ? !1 : !0 : !1;
            }
            function a(t) {
                var n, r;
                n = t.screenX - E, r = t.screenY - S, M = n * N[2] + R, D = r * N[3] + A, M = 5 > M ? 5 : M, 
                D = 5 > D ? 5 : D, (e.modifierPressed(t) || "IMG" == x.nodeName && 0 !== N[2] * N[3]) && (M = Math.round(D / B), 
                D = Math.round(M * B)), b.setStyles(w, {
                    width: M,
                    height: D
                }), N[2] < 0 && w.clientWidth <= M && b.setStyle(w, "left", k + (R - M)), N[3] < 0 && w.clientHeight <= D && b.setStyle(w, "top", T + (A - D)), 
                L || (i.fire("ObjectResizeStart", {
                    target: x,
                    width: R,
                    height: A
                }), L = !0);
            }
            function s() {
                function e(e, t) {
                    t && (x.style[e] || !i.schema.isValid(x.nodeName.toLowerCase(), e) ? b.setStyle(x, e, t) : b.setAttrib(x, e, t));
                }
                L = !1, e("width", M), e("height", D), b.unbind(H, "mousemove", a), b.unbind(H, "mouseup", s), 
                P != H && (b.unbind(P, "mousemove", a), b.unbind(P, "mouseup", s)), b.remove(w), 
                O && "TABLE" != x.nodeName || l(x), i.fire("ObjectResized", {
                    target: x,
                    width: M,
                    height: D
                }), i.nodeChanged();
            }
            function l(e, t, n) {
                var r, l, u, d, f;
                r = b.getPos(e, i.getBody()), k = r.x, T = r.y, f = e.getBoundingClientRect(), l = f.width || f.right - f.left, 
                u = f.height || f.bottom - f.top, x != e && (m(), x = e, M = D = 0), d = i.fire("ObjectSelected", {
                    target: e
                }), o(e) && !d.isDefaultPrevented() ? C(_, function(e, r) {
                    function o(t) {
                        L = !0, E = t.screenX, S = t.screenY, R = x.clientWidth, A = x.clientHeight, B = A / R, 
                        N = e, w = x.cloneNode(!0), b.addClass(w, "mce-clonedresizable"), w.contentEditable = !1, 
                        w.unSelectabe = !0, b.setStyles(w, {
                            left: k,
                            top: T,
                            margin: 0
                        }), w.removeAttribute("data-mce-selected"), i.getBody().appendChild(w), b.bind(H, "mousemove", a), 
                        b.bind(H, "mouseup", s), P != H && (b.bind(P, "mousemove", a), b.bind(P, "mouseup", s));
                    }
                    var c, d;
                    return t ? (r == t && o(n), void 0) : (c = b.get("mceResizeHandle" + r), c ? b.show(c) : (d = i.getBody(), 
                    c = b.add(d, "div", {
                        id: "mceResizeHandle" + r,
                        "data-mce-bogus": !0,
                        "class": "mce-resizehandle",
                        contentEditable: !1,
                        unSelectabe: !0,
                        style: "cursor:" + r + "-resize; margin:0; padding:0"
                    }), b.bind(c, "mousedown", function(e) {
                        e.preventDefault(), o(e);
                    })), b.setStyles(c, {
                        left: l * e[0] + k - c.offsetWidth / 2,
                        top: u * e[1] + T - c.offsetHeight / 2
                    }), void 0);
                }) : c(), x.setAttribute("data-mce-selected", "1");
            }
            function c() {
                var e, t;
                x && x.removeAttribute("data-mce-selected");
                for (e in _) t = b.get("mceResizeHandle" + e), t && (b.unbind(t), b.remove(t));
            }
            function u(e) {
                function t(e, t) {
                    do if (e === t) return !0; while (e = e.parentNode);
                }
                var n;
                return C(b.select("img[data-mce-selected],hr[data-mce-selected]"), function(e) {
                    e.removeAttribute("data-mce-selected");
                }), n = "mousedown" == e.type ? e.target : r.getNode(), n = b.getParent(n, O ? "table" : "table,img,hr"), 
                n && (g(), t(r.getStart(), n) && t(r.getEnd(), n) && (!O || n != r.getStart() && "IMG" !== r.getStart().nodeName)) ? (l(n), 
                void 0) : (c(), void 0);
            }
            function d(e, t, n) {
                e && e.attachEvent && e.attachEvent("on" + t, n);
            }
            function f(e, t, n) {
                e && e.detachEvent && e.detachEvent("on" + t, n);
            }
            function p(e) {
                var t = e.srcElement, n, r, o, a, s, c, u;
                n = t.getBoundingClientRect(), c = e.clientX - n.left, u = e.clientY - n.top;
                for (r in _) if (o = _[r], a = t.offsetWidth * o[0], s = t.offsetHeight * o[1], 
                Math.abs(a - c) < 8 && Math.abs(s - u) < 8) {
                    N = o;
                    break;
                }
                L = !0, i.getDoc().selection.empty(), l(t, r, e);
            }
            function h(e) {
                var t = e.srcElement;
                if (t != x) {
                    if (m(), 0 === t.id.indexOf("mceResizeHandle")) return e.returnValue = !1, void 0;
                    ("IMG" == t.nodeName || "TABLE" == t.nodeName) && (c(), x = t, d(t, "resizestart", p));
                }
            }
            function m() {
                f(x, "resizestart", p);
            }
            function g() {
                try {
                    i.getDoc().execCommand("enableObjectResizing", !1, !1);
                } catch (e) {}
            }
            function v(e) {
                var t;
                if (O) {
                    t = H.body.createControlRange();
                    try {
                        return t.addElement(e), t.select(), !0;
                    } catch (n) {}
                }
            }
            function y() {
                x = w = null, O && (m(), f(i.getBody(), "controlselect", h));
            }
            var b = i.dom, C = t.each, x, w, _, N, E, S, k, T, R, A, B, L, M, D, H = i.getDoc(), P = document, O = n.ie;
            _ = {
                n: [ .5, 0, 0, -1 ],
                e: [ 1, .5, 1, 0 ],
                s: [ .5, 1, 0, 1 ],
                w: [ 0, .5, -1, 0 ],
                nw: [ 0, 0, -1, -1 ],
                ne: [ 1, 0, 1, -1 ],
                se: [ 1, 1, 1, 1 ],
                sw: [ 0, 1, -1, 1 ]
            };
            var I = ".mce-content-body";
            return i.contentStyles.push(I + " div.mce-resizehandle {" + "position: absolute;" + "border: 1px solid black;" + "background: #FFF;" + "width: 5px;" + "height: 5px;" + "z-index: 10000" + "}" + I + " .mce-resizehandle:hover {" + "background: #000" + "}" + I + " img[data-mce-selected], hr[data-mce-selected] {" + "outline: 1px solid black;" + "resize: none" + "}" + I + " .mce-clonedresizable {" + "position: absolute;" + (n.gecko ? "" : "outline: 1px dashed black;") + "opacity: .5;" + "filter: alpha(opacity=50);" + "z-index: 10000" + "}"), 
            i.on("init", function() {
                O ? (i.on("ObjectResized", function(e) {
                    "TABLE" != e.target.nodeName && (c(), v(e.target));
                }), d(i.getBody(), "controlselect", h)) : g(), i.on("nodechange mousedown ResizeEditor", u), 
                i.on("keydown keyup", function(e) {
                    x && "TABLE" == x.nodeName && u(e);
                });
            }), {
                controlSelect: v,
                destroy: y
            };
        };
    }), r(A, [ f, k, R, g, p ], function(e, n, r, i, o) {
        function a(e, t, i, o) {
            var a = this;
            a.dom = e, a.win = t, a.serializer = i, a.editor = o, a.controlSelection = new r(a, o), 
            a.win.getSelection || (a.tridentSel = new n(a));
        }
        var s = o.each, l = o.grep, c = o.trim, u = i.ie, d = i.opera;
        return a.prototype = {
            setCursorLocation: function(e, t) {
                var n = this, r = n.dom.createRng();
                r.setStart(e, t), r.setEnd(e, t), n.setRng(r), n.collapse(!1);
            },
            getContent: function(e) {
                var n = this, r = n.getRng(), i = n.dom.create("body"), o = n.getSel(), a, s, l;
                return e = e || {}, a = s = "", e.get = !0, e.format = e.format || "html", e.selection = !0, 
                n.editor.fire("BeforeGetContent", e), "text" == e.format ? n.isCollapsed() ? "" : r.text || (o.toString ? o.toString() : "") : (r.cloneContents ? (l = r.cloneContents(), 
                l && i.appendChild(l)) : r.item !== t || r.htmlText !== t ? (i.innerHTML = "<br>" + (r.item ? r.item(0).outerHTML : r.htmlText), 
                i.removeChild(i.firstChild)) : i.innerHTML = r.toString(), /^\s/.test(i.innerHTML) && (a = " "), 
                /\s+$/.test(i.innerHTML) && (s = " "), e.getInner = !0, e.content = n.isCollapsed() ? "" : a + n.serializer.serialize(i, e) + s, 
                n.editor.fire("GetContent", e), e.content);
            },
            setContent: function(e, t) {
                var n = this, r = n.getRng(), i, o = n.win.document, a, s;
                if (t = t || {
                    format: "html"
                }, t.set = !0, t.selection = !0, e = t.content = e, t.no_events || n.editor.fire("BeforeSetContent", t), 
                e = t.content, r.insertNode) {
                    e += '<span id="__caret">_</span>', r.startContainer == o && r.endContainer == o ? o.body.innerHTML = e : (r.deleteContents(), 
                    0 === o.body.childNodes.length ? o.body.innerHTML = e : r.createContextualFragment ? r.insertNode(r.createContextualFragment(e)) : (a = o.createDocumentFragment(), 
                    s = o.createElement("div"), a.appendChild(s), s.outerHTML = e, r.insertNode(a))), 
                    i = n.dom.get("__caret"), r = o.createRange(), r.setStartBefore(i), r.setEndBefore(i), 
                    n.setRng(r), n.dom.remove("__caret");
                    try {
                        n.setRng(r);
                    } catch (l) {}
                } else r.item && (o.execCommand("Delete", !1, null), r = n.getRng()), /^\s+/.test(e) ? (r.pasteHTML('<span id="__mce_tmp">_</span>' + e), 
                n.dom.remove("__mce_tmp")) : r.pasteHTML(e);
                t.no_events || n.editor.fire("SetContent", t);
            },
            getStart: function() {
                var e = this, t = e.getRng(), n, r, i, o;
                if (t.duplicate || t.item) {
                    if (t.item) return t.item(0);
                    for (i = t.duplicate(), i.collapse(1), n = i.parentElement(), n.ownerDocument !== e.dom.doc && (n = e.dom.getRoot()), 
                    r = o = t.parentElement(); o = o.parentNode; ) if (o == n) {
                        n = r;
                        break;
                    }
                    return n;
                }
                return n = t.startContainer, 1 == n.nodeType && n.hasChildNodes() && (n = n.childNodes[Math.min(n.childNodes.length - 1, t.startOffset)]), 
                n && 3 == n.nodeType ? n.parentNode : n;
            },
            getEnd: function() {
                var e = this, t = e.getRng(), n, r;
                return t.duplicate || t.item ? t.item ? t.item(0) : (t = t.duplicate(), t.collapse(0), 
                n = t.parentElement(), n.ownerDocument !== e.dom.doc && (n = e.dom.getRoot()), n && "BODY" == n.nodeName ? n.lastChild || n : n) : (n = t.endContainer, 
                r = t.endOffset, 1 == n.nodeType && n.hasChildNodes() && (n = n.childNodes[r > 0 ? r - 1 : r]), 
                n && 3 == n.nodeType ? n.parentNode : n);
            },
            getBookmark: function(e, t) {
                function n(e, t) {
                    var n = 0;
                    return s(a.select(e), function(e, r) {
                        e == t && (n = r);
                    }), n;
                }
                function r(e) {
                    function t(t) {
                        var n, r, i, o = t ? "start" : "end";
                        n = e[o + "Container"], r = e[o + "Offset"], 1 == n.nodeType && "TR" == n.nodeName && (i = n.childNodes, 
                        n = i[Math.min(t ? r : r - 1, i.length - 1)], n && (r = t ? 0 : n.childNodes.length, 
                        e["set" + (t ? "Start" : "End")](n, r)));
                    }
                    return t(!0), t(), e;
                }
                function i() {
                    function e(e, n) {
                        var i = e[n ? "startContainer" : "endContainer"], a = e[n ? "startOffset" : "endOffset"], s = [], l, c, u = 0;
                        if (3 == i.nodeType) {
                            if (t) for (l = i.previousSibling; l && 3 == l.nodeType; l = l.previousSibling) a += l.nodeValue.length;
                            s.push(a);
                        } else c = i.childNodes, a >= c.length && c.length && (u = 1, a = Math.max(0, c.length - 1)), 
                        s.push(o.dom.nodeIndex(c[a], t) + u);
                        for (;i && i != r; i = i.parentNode) s.push(o.dom.nodeIndex(i, t));
                        return s;
                    }
                    var n = o.getRng(!0), r = a.getRoot(), i = {};
                    return i.start = e(n, !0), o.isCollapsed() || (i.end = e(n)), i;
                }
                var o = this, a = o.dom, l, c, u, d, f, p, h = "&#xFEFF;", m;
                if (2 == e) return p = o.getNode(), f = p.nodeName, "IMG" == f ? {
                    name: f,
                    index: n(f, p)
                } : o.tridentSel ? o.tridentSel.getBookmark(e) : i();
                if (e) return {
                    rng: o.getRng()
                };
                if (l = o.getRng(), u = a.uniqueId(), d = o.isCollapsed(), m = "overflow:hidden;line-height:0px", 
                l.duplicate || l.item) {
                    if (l.item) return p = l.item(0), f = p.nodeName, {
                        name: f,
                        index: n(f, p)
                    };
                    c = l.duplicate();
                    try {
                        l.collapse(), l.pasteHTML('<span data-mce-type="bookmark" id="' + u + '_start" style="' + m + '">' + h + "</span>"), 
                        d || (c.collapse(!1), l.moveToElementText(c.parentElement()), 0 === l.compareEndPoints("StartToEnd", c) && c.move("character", -1), 
                        c.pasteHTML('<span data-mce-type="bookmark" id="' + u + '_end" style="' + m + '">' + h + "</span>"));
                    } catch (g) {
                        return null;
                    }
                } else {
                    if (p = o.getNode(), f = p.nodeName, "IMG" == f) return {
                        name: f,
                        index: n(f, p)
                    };
                    c = r(l.cloneRange()), d || (c.collapse(!1), c.insertNode(a.create("span", {
                        "data-mce-type": "bookmark",
                        id: u + "_end",
                        style: m
                    }, h))), l = r(l), l.collapse(!0), l.insertNode(a.create("span", {
                        "data-mce-type": "bookmark",
                        id: u + "_start",
                        style: m
                    }, h));
                }
                return o.moveToBookmark({
                    id: u,
                    keep: 1
                }), {
                    id: u
                };
            },
            moveToBookmark: function(e) {
                function t(t) {
                    var n = e[t ? "start" : "end"], r, i, o, s;
                    if (n) {
                        for (o = n[0], i = c, r = n.length - 1; r >= 1; r--) {
                            if (s = i.childNodes, n[r] > s.length - 1) return;
                            i = s[n[r]];
                        }
                        3 === i.nodeType && (o = Math.min(n[0], i.nodeValue.length)), 1 === i.nodeType && (o = Math.min(n[0], i.childNodes.length)), 
                        t ? a.setStart(i, o) : a.setEnd(i, o);
                    }
                    return !0;
                }
                function n(t) {
                    var n = o.get(e.id + "_" + t), r, i, a, c, u = e.keep;
                    if (n && (r = n.parentNode, "start" == t ? (u ? (r = n.firstChild, i = 1) : i = o.nodeIndex(n), 
                    f = p = r, h = m = i) : (u ? (r = n.firstChild, i = 1) : i = o.nodeIndex(n), p = r, 
                    m = i), !u)) {
                        for (c = n.previousSibling, a = n.nextSibling, s(l(n.childNodes), function(e) {
                            3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
                        }); n = o.get(e.id + "_" + t); ) o.remove(n, 1);
                        c && a && c.nodeType == a.nodeType && 3 == c.nodeType && !d && (i = c.nodeValue.length, 
                        c.appendData(a.nodeValue), o.remove(a), "start" == t ? (f = p = c, h = m = i) : (p = c, 
                        m = i));
                    }
                }
                function r(e) {
                    return !o.isBlock(e) || e.innerHTML || u || (e.innerHTML = '<br data-mce-bogus="1" />'), 
                    e;
                }
                var i = this, o = i.dom, a, c, f, p, h, m;
                if (e) if (e.start) {
                    if (a = o.createRng(), c = o.getRoot(), i.tridentSel) return i.tridentSel.moveToBookmark(e);
                    t(!0) && t() && i.setRng(a);
                } else e.id ? (n("start"), n("end"), f && (a = o.createRng(), a.setStart(r(f), h), 
                a.setEnd(r(p), m), i.setRng(a))) : e.name ? i.select(o.select(e.name)[e.index]) : e.rng && i.setRng(e.rng);
            },
            select: function(t, n) {
                function r(t, n) {
                    var r = new e(t, t);
                    do {
                        if (3 == t.nodeType && 0 !== c(t.nodeValue).length) return n ? a.setStart(t, 0) : a.setEnd(t, t.nodeValue.length), 
                        void 0;
                        if ("BR" == t.nodeName) return n ? a.setStartBefore(t) : a.setEndBefore(t), void 0;
                    } while (t = n ? r.next() : r.prev());
                }
                var i = this, o = i.dom, a = o.createRng(), s;
                if (t) {
                    if (!n && i.controlSelection.controlSelect(t)) return;
                    s = o.nodeIndex(t), a.setStart(t.parentNode, s), a.setEnd(t.parentNode, s + 1), 
                    n && (r(t, 1), r(t)), i.setRng(a);
                }
                return t;
            },
            isCollapsed: function() {
                var e = this, t = e.getRng(), n = e.getSel();
                return !t || t.item ? !1 : t.compareEndPoints ? 0 === t.compareEndPoints("StartToEnd", t) : !n || t.collapsed;
            },
            collapse: function(e) {
                var t = this, n = t.getRng(), r;
                n.item && (r = n.item(0), n = t.win.document.body.createTextRange(), n.moveToElementText(r)), 
                n.collapse(!!e), t.setRng(n);
            },
            getSel: function() {
                var e = this.win;
                return e.getSelection ? e.getSelection() : e.document.selection;
            },
            getRng: function(e) {
                var t = this, n, r, i, o = t.win.document, a;
                if (!e && t.restoreRng) return t.restoreRng;
                if (e && t.tridentSel) return t.tridentSel.getRangeAt(0);
                try {
                    (n = t.getSel()) && (r = n.rangeCount > 0 ? n.getRangeAt(0) : n.createRange ? n.createRange() : o.createRange());
                } catch (s) {}
                if (u && r && r.setStart) {
                    try {
                        a = o.selection.createRange();
                    } catch (s) {}
                    a && a.item && (i = a.item(0), r = o.createRange(), r.setStartBefore(i), r.setEndAfter(i));
                }
                return r || (r = o.createRange ? o.createRange() : o.body.createTextRange()), r.setStart && 9 === r.startContainer.nodeType && r.collapsed && (i = t.dom.getRoot(), 
                r.setStart(i, 0), r.setEnd(i, 0)), t.selectedRange && t.explicitRange && (0 === r.compareBoundaryPoints(r.START_TO_START, t.selectedRange) && 0 === r.compareBoundaryPoints(r.END_TO_END, t.selectedRange) ? r = t.explicitRange : (t.selectedRange = null, 
                t.explicitRange = null)), r;
            },
            setRng: function(e, t) {
                var n = this, r;
                if (e.select) try {
                    e.select();
                } catch (i) {} else if (n.tridentSel) {
                    if (e.cloneRange) try {
                        return n.tridentSel.addRange(e), void 0;
                    } catch (i) {}
                } else if (r = n.getSel()) {
                    n.explicitRange = e;
                    try {
                        r.removeAllRanges();
                    } catch (i) {}
                    r.addRange(e), t === !1 && r.extend && (r.collapse(e.endContainer, e.endOffset), 
                    r.extend(e.startContainer, e.startOffset)), n.selectedRange = r.rangeCount > 0 ? r.getRangeAt(0) : null;
                }
            },
            setNode: function(e) {
                var t = this;
                return t.setContent(t.dom.getOuterHTML(e)), e;
            },
            getNode: function() {
                function e(e, t) {
                    for (var n = e; e && 3 === e.nodeType && 0 === e.length; ) e = t ? e.nextSibling : e.previousSibling;
                    return e || n;
                }
                var t = this, n = t.getRng(), r, i = n.startContainer, o = n.endContainer, a = n.startOffset, s = n.endOffset;
                return n ? n.setStart ? (r = n.commonAncestorContainer, !n.collapsed && (i == o && 2 > s - a && i.hasChildNodes() && (r = i.childNodes[a]), 
                3 === i.nodeType && 3 === o.nodeType && (i = i.length === a ? e(i.nextSibling, !0) : i.parentNode, 
                o = 0 === s ? e(o.previousSibling, !1) : o.parentNode, i && i === o)) ? i : r && 3 == r.nodeType ? r.parentNode : r) : n.item ? n.item(0) : n.parentElement() : t.dom.getRoot();
            },
            getSelectedBlocks: function(t, n) {
                var r = this, i = r.dom, o, a, s = [];
                if (a = i.getRoot(), t = i.getParent(t || r.getStart(), i.isBlock), n = i.getParent(n || r.getEnd(), i.isBlock), 
                t && t != a && s.push(t), t && n && t != n) {
                    o = t;
                    for (var l = new e(t, a); (o = l.next()) && o != n; ) i.isBlock(o) && s.push(o);
                }
                return n && t != n && n != a && s.push(n), s;
            },
            isForward: function() {
                var e = this.dom, t = this.getSel(), n, r;
                return t && t.anchorNode && t.focusNode ? (n = e.createRng(), n.setStart(t.anchorNode, t.anchorOffset), 
                n.collapse(!0), r = e.createRng(), r.setStart(t.focusNode, t.focusOffset), r.collapse(!0), 
                n.compareBoundaryPoints(n.START_TO_START, r) <= 0) : !0;
            },
            normalize: function() {
                function t(t) {
                    function a(t, n) {
                        for (var r = new e(t, f.getParent(t.parentNode, f.isBlock) || p); t = r[n ? "prev" : "next"](); ) if ("BR" === t.nodeName) return !0;
                    }
                    function s(e, t) {
                        return e.previousSibling && e.previousSibling.nodeName == t;
                    }
                    function l(t, n) {
                        var r, a;
                        for (n = n || c, r = new e(n, f.getParent(n.parentNode, f.isBlock) || p); h = r[t ? "prev" : "next"](); ) {
                            if (3 === h.nodeType && h.nodeValue.length > 0) return c = h, u = t ? h.nodeValue.length : 0, 
                            i = !0, void 0;
                            if (f.isBlock(h) || m[h.nodeName.toLowerCase()]) return;
                            a = h;
                        }
                        o && a && (c = a, i = !0, u = 0);
                    }
                    var c, u, d, f = n.dom, p = f.getRoot(), h, m, g;
                    if (c = r[(t ? "start" : "end") + "Container"], u = r[(t ? "start" : "end") + "Offset"], 
                    m = f.schema.getNonEmptyElements(), 9 === c.nodeType && (c = f.getRoot(), u = 0), 
                    c === p) {
                        if (t && (h = c.childNodes[u > 0 ? u - 1 : 0], h && (g = h.nodeName.toLowerCase(), 
                        m[h.nodeName] || "TABLE" == h.nodeName))) return;
                        if (c.hasChildNodes() && (u = Math.min(!t && u > 0 ? u - 1 : u, c.childNodes.length - 1), 
                        c = c.childNodes[u], u = 0, c.hasChildNodes() && !/TABLE/.test(c.nodeName))) {
                            h = c, d = new e(c, p);
                            do {
                                if (3 === h.nodeType && h.nodeValue.length > 0) {
                                    u = t ? 0 : h.nodeValue.length, c = h, i = !0;
                                    break;
                                }
                                if (m[h.nodeName.toLowerCase()]) {
                                    u = f.nodeIndex(h), c = h.parentNode, "IMG" != h.nodeName || t || u++, i = !0;
                                    break;
                                }
                            } while (h = t ? d.next() : d.prev());
                        }
                    }
                    o && (3 === c.nodeType && 0 === u && l(!0), 1 === c.nodeType && (h = c.childNodes[u], 
                    !h || "BR" !== h.nodeName || s(h, "A") || a(h) || a(h, !0) || l(!0, c.childNodes[u]))), 
                    t && !o && 3 === c.nodeType && u === c.nodeValue.length && l(!1), i && r["set" + (t ? "Start" : "End")](c, u);
                }
                var n = this, r, i, o;
                u || (r = n.getRng(), o = r.collapsed, t(!0), o || t(), i && (o && r.collapse(!0), 
                n.setRng(r, n.isForward())));
            },
            selectorChanged: function(e, t) {
                var n = this, r;
                return n.selectorChangedData || (n.selectorChangedData = {}, r = {}, n.editor.on("NodeChange", function(e) {
                    var t = e.element, i = n.dom, o = i.getParents(t, null, i.getRoot()), a = {};
                    s(n.selectorChangedData, function(e, t) {
                        s(o, function(n) {
                            return i.is(n, t) ? (r[t] || (s(e, function(e) {
                                e(!0, {
                                    node: n,
                                    selector: t,
                                    parents: o
                                });
                            }), r[t] = e), a[t] = e, !1) : void 0;
                        });
                    }), s(r, function(e, n) {
                        a[n] || (delete r[n], s(e, function(e) {
                            e(!1, {
                                node: t,
                                selector: n,
                                parents: o
                            });
                        }));
                    });
                })), n.selectorChangedData[e] || (n.selectorChangedData[e] = []), n.selectorChangedData[e].push(t), 
                n;
            },
            scrollIntoView: function(e) {
                var t, n, r = this, i = r.dom;
                n = i.getViewPort(r.editor.getWin()), t = i.getPos(e).y, (t < n.y || t + 25 > n.y + n.h) && r.editor.getWin().scrollTo(0, t < n.y ? t : t - n.h + 25);
            },
            destroy: function() {
                this.win = null, this.controlSelection.destroy();
            }
        }, a;
    }), r(B, [ p ], function(e) {
        function t(e) {
            this.walk = function(t, r) {
                function i(e) {
                    var t;
                    return t = e[0], 3 === t.nodeType && t === l && c >= t.nodeValue.length && e.splice(0, 1), 
                    t = e[e.length - 1], 0 === d && e.length > 0 && t === u && 3 === t.nodeType && e.splice(e.length - 1, 1), 
                    e;
                }
                function o(e, t, n) {
                    for (var r = []; e && e != n; e = e[t]) r.push(e);
                    return r;
                }
                function a(e, t) {
                    do {
                        if (e.parentNode == t) return e;
                        e = e.parentNode;
                    } while (e);
                }
                function s(e, t, n) {
                    var a = n ? "nextSibling" : "previousSibling";
                    for (m = e, g = m.parentNode; m && m != t; m = g) g = m.parentNode, v = o(m == e ? m : m[a], a), 
                    v.length && (n || v.reverse(), r(i(v)));
                }
                var l = t.startContainer, c = t.startOffset, u = t.endContainer, d = t.endOffset, f, p, h, m, g, v, y;
                if (y = e.select("td.mce-item-selected,th.mce-item-selected"), y.length > 0) return n(y, function(e) {
                    r([ e ]);
                }), void 0;
                if (1 == l.nodeType && l.hasChildNodes() && (l = l.childNodes[c]), 1 == u.nodeType && u.hasChildNodes() && (u = u.childNodes[Math.min(d - 1, u.childNodes.length - 1)]), 
                l == u) return r(i([ l ]));
                for (f = e.findCommonAncestor(l, u), m = l; m; m = m.parentNode) {
                    if (m === u) return s(l, f, !0);
                    if (m === f) break;
                }
                for (m = u; m; m = m.parentNode) {
                    if (m === l) return s(u, f);
                    if (m === f) break;
                }
                p = a(l, f) || l, h = a(u, f) || u, s(l, p, !0), v = o(p == l ? p : p.nextSibling, "nextSibling", h == u ? h.nextSibling : h), 
                v.length && r(i(v)), s(u, h);
            }, this.split = function(e) {
                function t(e, t) {
                    return e.splitText(t);
                }
                var n = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset;
                return n == i && 3 == n.nodeType ? r > 0 && r < n.nodeValue.length && (i = t(n, r), 
                n = i.previousSibling, o > r ? (o -= r, n = i = t(i, o).previousSibling, o = i.nodeValue.length, 
                r = 0) : o = 0) : (3 == n.nodeType && r > 0 && r < n.nodeValue.length && (n = t(n, r), 
                r = 0), 3 == i.nodeType && o > 0 && o < i.nodeValue.length && (i = t(i, o).previousSibling, 
                o = i.nodeValue.length)), {
                    startContainer: n,
                    startOffset: r,
                    endContainer: i,
                    endOffset: o
                };
            };
        }
        var n = e.each;
        return t.compareRanges = function(e, t) {
            if (e && t) {
                if (!e.item && !e.duplicate) return e.startContainer == t.startContainer && e.startOffset == t.startOffset;
                if (e.item && t.item && e.item(0) === t.item(0)) return !0;
                if (e.isEqual && t.isEqual && t.isEqual(e)) return !0;
            }
            return !1;
        }, t;
    }), r(L, [ f, B, p ], function(e, t, n) {
        return function(r) {
            function i(e) {
                return e.nodeType && (e = e.nodeName), !!r.schema.getTextBlockElements()[e.toLowerCase()];
            }
            function o(e, t) {
                return I.getParents(e, t, I.getRoot());
            }
            function a(e) {
                return 1 === e.nodeType && "_mce_caret" === e.id;
            }
            function s() {
                u({
                    alignleft: [ {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "left"
                        },
                        defaultBlock: "div"
                    }, {
                        selector: "img,table",
                        collapsed: !1,
                        styles: {
                            "float": "left"
                        }
                    } ],
                    aligncenter: [ {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "center"
                        },
                        defaultBlock: "div"
                    }, {
                        selector: "img",
                        collapsed: !1,
                        styles: {
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }
                    }, {
                        selector: "table",
                        collapsed: !1,
                        styles: {
                            marginLeft: "auto",
                            marginRight: "auto"
                        }
                    } ],
                    alignright: [ {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "right"
                        },
                        defaultBlock: "div"
                    }, {
                        selector: "img,table",
                        collapsed: !1,
                        styles: {
                            "float": "right"
                        }
                    } ],
                    alignjustify: [ {
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {
                            textAlign: "justify"
                        },
                        defaultBlock: "div"
                    } ],
                    bold: [ {
                        inline: "strong",
                        remove: "all"
                    }, {
                        inline: "span",
                        styles: {
                            fontWeight: "bold"
                        }
                    }, {
                        inline: "b",
                        remove: "all"
                    } ],
                    italic: [ {
                        inline: "em",
                        remove: "all"
                    }, {
                        inline: "span",
                        styles: {
                            fontStyle: "italic"
                        }
                    }, {
                        inline: "i",
                        remove: "all"
                    } ],
                    underline: [ {
                        inline: "span",
                        styles: {
                            textDecoration: "underline"
                        },
                        exact: !0
                    }, {
                        inline: "u",
                        remove: "all"
                    } ],
                    strikethrough: [ {
                        inline: "span",
                        styles: {
                            textDecoration: "line-through"
                        },
                        exact: !0
                    }, {
                        inline: "strike",
                        remove: "all"
                    } ],
                    forecolor: {
                        inline: "span",
                        styles: {
                            color: "%value"
                        },
                        wrap_links: !1
                    },
                    hilitecolor: {
                        inline: "span",
                        styles: {
                            backgroundColor: "%value"
                        },
                        wrap_links: !1
                    },
                    fontname: {
                        inline: "span",
                        styles: {
                            fontFamily: "%value"
                        }
                    },
                    fontsize: {
                        inline: "span",
                        styles: {
                            fontSize: "%value"
                        }
                    },
                    fontsize_class: {
                        inline: "span",
                        attributes: {
                            "class": "%value"
                        }
                    },
                    blockquote: {
                        block: "blockquote",
                        wrapper: 1,
                        remove: "all"
                    },
                    subscript: {
                        inline: "sub"
                    },
                    superscript: {
                        inline: "sup"
                    },
                    code: {
                        inline: "code"
                    },
                    link: {
                        inline: "a",
                        selector: "a",
                        remove: "all",
                        split: !0,
                        deep: !0,
                        onmatch: function() {
                            return !0;
                        },
                        onformat: function(e, t, n) {
                            et(n, function(t, n) {
                                I.setAttrib(e, n, t);
                            });
                        }
                    },
                    removeformat: [ {
                        selector: "b,strong,em,i,font,u,strike",
                        remove: "all",
                        split: !0,
                        expand: !1,
                        block_expand: !0,
                        deep: !0
                    }, {
                        selector: "span",
                        attributes: [ "style", "class" ],
                        remove: "empty",
                        split: !0,
                        expand: !1,
                        deep: !0
                    }, {
                        selector: "*",
                        attributes: [ "style", "class" ],
                        split: !1,
                        expand: !1,
                        deep: !0
                    } ]
                }), et("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function(e) {
                    u(e, {
                        block: e,
                        remove: "all"
                    });
                }), u(r.settings.formats);
            }
            function l() {
                r.addShortcut("ctrl+b", "bold_desc", "Bold"), r.addShortcut("ctrl+i", "italic_desc", "Italic"), 
                r.addShortcut("ctrl+u", "underline_desc", "Underline");
                for (var e = 1; 6 >= e; e++) r.addShortcut("ctrl+" + e, "", [ "FormatBlock", !1, "h" + e ]);
                r.addShortcut("ctrl+7", "", [ "FormatBlock", !1, "p" ]), r.addShortcut("ctrl+8", "", [ "FormatBlock", !1, "div" ]), 
                r.addShortcut("ctrl+9", "", [ "FormatBlock", !1, "address" ]);
            }
            function c(e) {
                return e ? O[e] : O;
            }
            function u(e, t) {
                e && ("string" != typeof e ? et(e, function(e, t) {
                    u(t, e);
                }) : (t = t.length ? t : [ t ], et(t, function(e) {
                    e.deep === X && (e.deep = !e.selector), e.split === X && (e.split = !e.selector || e.inline), 
                    e.remove === X && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, 
                    e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/));
                }), O[e] = t));
            }
            function d(e) {
                var t;
                return r.dom.getParent(e, function(e) {
                    return t = r.dom.getStyle(e, "text-decoration"), t && "none" !== t;
                }), t;
            }
            function f(e) {
                var t;
                1 === e.nodeType && e.parentNode && 1 === e.parentNode.nodeType && (t = d(e.parentNode), 
                r.dom.getStyle(e, "color") && t ? r.dom.setStyle(e, "text-decoration", t) : r.dom.getStyle(e, "textdecoration") === t && r.dom.setStyle(e, "text-decoration", null));
            }
            function p(t, n, o) {
                function s(e, t) {
                    t = t || m, e && (t.onformat && t.onformat(e, t, n, o), et(t.styles, function(t, r) {
                        I.setStyle(e, r, E(t, n));
                    }), et(t.attributes, function(t, r) {
                        I.setAttrib(e, r, E(t, n));
                    }), et(t.classes, function(t) {
                        t = E(t, n), I.hasClass(e, t) || I.addClass(e, t);
                    }));
                }
                function l() {
                    function t(t, n) {
                        var r = new e(n);
                        for (o = r.current(); o; o = r.prev()) if (o.childNodes.length > 1 || o == t || "BR" == o.tagName) return o;
                    }
                    var n = r.selection.getRng(), i = n.startContainer, a = n.endContainer;
                    if (i != a && 0 === n.endOffset) {
                        var s = t(i, a), l = 3 == s.nodeType ? s.length : s.childNodes.length;
                        n.setEnd(s, l);
                    }
                    return n;
                }
                function u(e, t, n, r, i) {
                    var o = [], a = -1, s, l = -1, c = -1, u;
                    return et(e.childNodes, function(e, t) {
                        return "UL" === e.nodeName || "OL" === e.nodeName ? (a = t, s = e, !1) : void 0;
                    }), et(e.childNodes, function(e, n) {
                        "SPAN" === e.nodeName && "bookmark" == I.getAttrib(e, "data-mce-type") && (e.id == t.id + "_start" ? l = n : e.id == t.id + "_end" && (c = n));
                    }), 0 >= a || a > l && c > a ? (et(tt(e.childNodes), i), 0) : (u = I.clone(n, K), 
                    et(tt(e.childNodes), function(e, t) {
                        (a > l && a > t || l > a && t > a) && (o.push(e), e.parentNode.removeChild(e));
                    }), a > l ? e.insertBefore(u, s) : l > a && e.insertBefore(u, s.nextSibling), r.push(u), 
                    et(o, function(e) {
                        u.appendChild(e);
                    }), u);
                }
                function d(e, r, o) {
                    var l = [], c, d, f = !0;
                    c = m.inline || m.block, d = I.create(c), s(d), W.walk(e, function(e) {
                        function p(e) {
                            var y, C, x, _, N;
                            return N = f, y = e.nodeName.toLowerCase(), C = e.parentNode.nodeName.toLowerCase(), 
                            1 === e.nodeType && J(e) && (N = f, f = "true" === J(e), _ = !0), w(y, "br") ? (v = 0, 
                            m.block && I.remove(e), void 0) : m.wrapper && g(e, t, n) ? (v = 0, void 0) : f && !_ && m.block && !m.wrapper && i(y) && z(C, c) ? (e = I.rename(e, c), 
                            s(e), l.push(e), v = 0, void 0) : m.selector && (et(h, function(t) {
                                "collapsed" in t && t.collapsed !== b || I.is(e, t.selector) && !a(e) && (s(e, t), 
                                x = !0);
                            }), !m.inline || x) ? (v = 0, void 0) : (!f || _ || !z(c, y) || !z(C, c) || !o && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || a(e) || m.inline && V(e) ? "li" == y && r ? v = u(e, r, d, l, p) : (v = 0, 
                            et(tt(e.childNodes), p), _ && (f = N), v = 0) : (v || (v = I.clone(d, K), e.parentNode.insertBefore(v, e), 
                            l.push(v)), v.appendChild(e)), void 0);
                        }
                        var v;
                        et(e, p);
                    }), m.wrap_links === !1 && et(l, function(e) {
                        function t(e) {
                            var n, r, i;
                            if ("A" === e.nodeName) {
                                for (r = I.clone(d, K), l.push(r), i = tt(e.childNodes), n = 0; n < i.length; n++) r.appendChild(i[n]);
                                e.appendChild(r);
                            }
                            et(tt(e.childNodes), t);
                        }
                        t(e);
                    }), et(l, function(e) {
                        function r(e) {
                            var t = 0;
                            return et(e.childNodes, function(e) {
                                S(e) || L(e) || t++;
                            }), t;
                        }
                        function i(e) {
                            var t, n;
                            return et(e.childNodes, function(e) {
                                return 1 != e.nodeType || L(e) || a(e) ? void 0 : (t = e, K);
                            }), t && x(t, m) && (n = I.clone(t, K), s(n), I.replace(n, e, G), I.remove(t, 1)), 
                            n || e;
                        }
                        var o;
                        if (o = r(e), (l.length > 1 || !V(e)) && 0 === o) return I.remove(e, 1), void 0;
                        if (m.inline || m.wrapper) {
                            if (m.exact || 1 !== o || (e = i(e)), et(h, function(t) {
                                et(I.select(t.inline, e), function(e) {
                                    var r;
                                    if (t.wrap_links === !1) {
                                        r = e.parentNode;
                                        do if ("A" === r.nodeName) return; while (r = r.parentNode);
                                    }
                                    R(t, n, e, t.exact ? e : null);
                                });
                            }), g(e.parentNode, t, n)) return I.remove(e, 1), e = 0, G;
                            m.merge_with_parents && I.getParent(e.parentNode, function(r) {
                                return g(r, t, n) ? (I.remove(e, 1), e = 0, G) : void 0;
                            }), e && m.merge_siblings !== !1 && (e = M(B(e), e), e = M(e, B(e, G)));
                        }
                    });
                }
                var h = c(t), m = h[0], v, y, b = !o && F.isCollapsed();
                if (m) if (o) o.nodeType ? (y = I.createRng(), y.setStartBefore(o), y.setEndAfter(o), 
                d(T(y, h), null, !0)) : d(o, null, !0); else if (b && m.inline && !I.select("td.mce-item-selected,th.mce-item-selected").length) H("apply", t, n); else {
                    var C = r.selection.getNode();
                    U || !h[0].defaultBlock || I.getParent(C, I.isBlock) || p(h[0].defaultBlock), r.selection.setRng(l()), 
                    v = F.getBookmark(), d(T(F.getRng(G), h), v), m.styles && (m.styles.color || m.styles.textDecoration) && (nt(C, f, "childNodes"), 
                    f(C)), F.moveToBookmark(v), P(F.getRng(G)), r.nodeChanged();
                }
            }
            function h(e, t, n) {
                function i(e) {
                    var n, r, o, a, s;
                    if (1 === e.nodeType && J(e) && (a = b, b = "true" === J(e), s = !0), n = tt(e.childNodes), 
                    b && !s) for (r = 0, o = p.length; o > r && !R(p[r], t, e, e); r++) ;
                    if (h.deep && n.length) {
                        for (r = 0, o = n.length; o > r; r++) i(n[r]);
                        s && (b = a);
                    }
                }
                function a(n) {
                    var r;
                    return et(o(n.parentNode).reverse(), function(n) {
                        var i;
                        r || "_start" == n.id || "_end" == n.id || (i = g(n, e, t), i && i.split !== !1 && (r = n));
                    }), r;
                }
                function s(e, n, r, i) {
                    var o, a, s, l, c, u;
                    if (e) {
                        for (u = e.parentNode, o = n.parentNode; o && o != u; o = o.parentNode) {
                            for (a = I.clone(o, K), c = 0; c < p.length; c++) if (R(p[c], t, a, a)) {
                                a = 0;
                                break;
                            }
                            a && (s && a.appendChild(s), l || (l = a), s = a);
                        }
                        !i || h.mixed && V(e) || (n = I.split(e, n)), s && (r.parentNode.insertBefore(s, r), 
                        l.appendChild(r));
                    }
                    return n;
                }
                function l(e) {
                    return s(a(e), e, e, !0);
                }
                function u(e) {
                    var t = I.get(e ? "_start" : "_end"), n = t[e ? "firstChild" : "lastChild"];
                    return L(n) && (n = n[e ? "firstChild" : "lastChild"]), I.remove(t, !0), n;
                }
                function f(e) {
                    var t, n;
                    e = T(e, p, G), h.split && (t = D(e, G), n = D(e), t != n ? (/^(TR|TD)$/.test(t.nodeName) && t.firstChild && (t = "TD" == t.nodeName ? t.firstChild || t : t.firstChild.firstChild || t), 
                    t = k(t, "span", {
                        id: "_start",
                        "data-mce-type": "bookmark"
                    }), n = k(n, "span", {
                        id: "_end",
                        "data-mce-type": "bookmark"
                    }), l(t), l(n), t = u(G), n = u()) : t = n = l(t), e.startContainer = t.parentNode, 
                    e.startOffset = q(t), e.endContainer = n.parentNode, e.endOffset = q(n) + 1), W.walk(e, function(e) {
                        et(e, function(e) {
                            i(e), 1 === e.nodeType && "underline" === r.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === d(e.parentNode) && R({
                                deep: !1,
                                exact: !0,
                                inline: "span",
                                styles: {
                                    textDecoration: "underline"
                                }
                            }, null, e);
                        });
                    });
                }
                var p = c(e), h = p[0], m, y, b = !0;
                return n ? (n.nodeType ? (y = I.createRng(), y.setStartBefore(n), y.setEndAfter(n), 
                f(y)) : f(n), void 0) : (F.isCollapsed() && h.inline && !I.select("td.mce-item-selected,th.mce-item-selected").length ? H("remove", e, t) : (m = F.getBookmark(), 
                f(F.getRng(G)), F.moveToBookmark(m), h.inline && v(e, t, F.getStart()) && P(F.getRng(!0)), 
                r.nodeChanged()), void 0);
            }
            function m(e, t, n) {
                var r = c(e);
                !v(e, t, n) || "toggle" in r[0] && !r[0].toggle ? p(e, t, n) : h(e, t, n);
            }
            function g(e, t, n, r) {
                function i(e, t, i) {
                    var o, a, s = t[i], l;
                    if (t.onmatch) return t.onmatch(e, t, i);
                    if (s) if (s.length === X) {
                        for (o in s) if (s.hasOwnProperty(o)) {
                            if (a = "attributes" === i ? I.getAttrib(e, o) : _(e, o), r && !a && !t.exact) return;
                            if ((!r || t.exact) && !w(a, N(E(s[o], n), o))) return;
                        }
                    } else for (l = 0; l < s.length; l++) if ("attributes" === i ? I.getAttrib(e, s[l]) : _(e, s[l])) return t;
                    return t;
                }
                var o = c(t), a, s, l;
                if (o && e) for (s = 0; s < o.length; s++) if (a = o[s], x(e, a) && i(e, a, "attributes") && i(e, a, "styles")) {
                    if (l = a.classes) for (s = 0; s < l.length; s++) if (!I.hasClass(e, l[s])) return;
                    return a;
                }
            }
            function v(e, t, n) {
                function r(n) {
                    return n = I.getParent(n, function(n) {
                        return !!g(n, e, t, !0);
                    }), g(n, e, t);
                }
                var i;
                return n ? r(n) : (n = F.getNode(), r(n) ? G : (i = F.getStart(), i != n && r(i) ? G : K));
            }
            function y(e, t) {
                var n, r = [], i = {};
                return n = F.getStart(), I.getParent(n, function(n) {
                    var o, a;
                    for (o = 0; o < e.length; o++) a = e[o], !i[a] && g(n, a, t) && (i[a] = !0, r.push(a));
                }, I.getRoot()), r;
            }
            function b(e) {
                var t = c(e), n, r, i, a, s;
                if (t) for (n = F.getStart(), r = o(n), a = t.length - 1; a >= 0; a--) {
                    if (s = t[a].selector, !s) return G;
                    for (i = r.length - 1; i >= 0; i--) if (I.is(r[i], s)) return G;
                }
                return K;
            }
            function C(e, t, n) {
                var i;
                return Y || (Y = {}, i = {}, r.on("NodeChange", function(e) {
                    var t = o(e.element), n = {};
                    et(Y, function(e, r) {
                        et(t, function(o) {
                            return g(o, r, {}, e.similar) ? (i[r] || (et(e, function(e) {
                                e(!0, {
                                    node: o,
                                    format: r,
                                    parents: t
                                });
                            }), i[r] = e), n[r] = e, !1) : void 0;
                        });
                    }), et(i, function(r, o) {
                        n[o] || (delete i[o], et(r, function(n) {
                            n(!1, {
                                node: e.element,
                                format: o,
                                parents: t
                            });
                        }));
                    });
                })), et(e.split(","), function(e) {
                    Y[e] || (Y[e] = [], Y[e].similar = n), Y[e].push(t);
                }), this;
            }
            function x(e, t) {
                return w(e, t.inline) ? G : w(e, t.block) ? G : t.selector ? 1 == e.nodeType && I.is(e, t.selector) : void 0;
            }
            function w(e, t) {
                return e = e || "", t = t || "", e = "" + (e.nodeName || e), t = "" + (t.nodeName || t), 
                e.toLowerCase() == t.toLowerCase();
            }
            function _(e, t) {
                return N(I.getStyle(e, t), t);
            }
            function N(e, t) {
                return ("color" == t || "backgroundColor" == t) && (e = I.toHex(e)), "fontWeight" == t && 700 == e && (e = "bold"), 
                "fontFamily" == t && (e = e.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + e;
            }
            function E(e, t) {
                return "string" != typeof e ? e = e(t) : t && (e = e.replace(/%(\w+)/g, function(e, n) {
                    return t[n] || e;
                })), e;
            }
            function S(e) {
                return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue);
            }
            function k(e, t, n) {
                var r = I.create(t, n);
                return e.parentNode.insertBefore(r, e), r.appendChild(e), r;
            }
            function T(t, n, a) {
                function s(e) {
                    function t(e) {
                        return "BR" == e.nodeName && e.getAttribute("data-mce-bogus") && !e.nextSibling;
                    }
                    var r, i, o, a, s;
                    if (r = i = e ? g : y, a = e ? "previousSibling" : "nextSibling", s = I.getRoot(), 
                    3 == r.nodeType && !S(r) && (e ? v > 0 : b < r.nodeValue.length)) return r;
                    for (;;) {
                        if (!n[0].block_expand && V(i)) return i;
                        for (o = i[a]; o; o = o[a]) if (!L(o) && !S(o) && !t(o)) return i;
                        if (i.parentNode == s) {
                            r = i;
                            break;
                        }
                        i = i.parentNode;
                    }
                    return r;
                }
                function l(e, t) {
                    for (t === X && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes(); ) e = e.childNodes[t], 
                    e && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
                    return {
                        node: e,
                        offset: t
                    };
                }
                function c(e) {
                    for (var t = e; t; ) {
                        if (1 === t.nodeType && J(t)) return "false" === J(t) ? t : e;
                        t = t.parentNode;
                    }
                    return e;
                }
                function u(t, n, i) {
                    function o(e, t) {
                        var n, r, o = e.nodeValue;
                        return "undefined" == typeof t && (t = i ? o.length : 0), i ? (n = o.lastIndexOf(" ", t), 
                        r = o.lastIndexOf(" ", t), n = n > r ? n : r, -1 === n || a || n++) : (n = o.indexOf(" ", t), 
                        r = o.indexOf(" ", t), n = -1 !== n && (-1 === r || r > n) ? n : r), n;
                    }
                    var s, l, c, u;
                    if (3 === t.nodeType) {
                        if (c = o(t, n), -1 !== c) return {
                            container: t,
                            offset: c
                        };
                        u = t;
                    }
                    for (s = new e(t, I.getParent(t, V) || r.getBody()); l = s[i ? "prev" : "next"](); ) if (3 === l.nodeType) {
                        if (u = l, c = o(l), -1 !== c) return {
                            container: l,
                            offset: c
                        };
                    } else if (V(l)) break;
                    return u ? (n = i ? 0 : u.length, {
                        container: u,
                        offset: n
                    }) : void 0;
                }
                function d(e, r) {
                    var i, a, s, l;
                    for (3 == e.nodeType && 0 === e.nodeValue.length && e[r] && (e = e[r]), i = o(e), 
                    a = 0; a < i.length; a++) for (s = 0; s < n.length; s++) if (l = n[s], !("collapsed" in l && l.collapsed !== t.collapsed) && I.is(i[a], l.selector)) return i[a];
                    return e;
                }
                function f(e, t) {
                    var r;
                    if (n[0].wrapper || (r = I.getParent(e, n[0].block)), r || (r = I.getParent(3 == e.nodeType ? e.parentNode : e, i)), 
                    r && n[0].wrapper && (r = o(r, "ul,ol").reverse()[0] || r), !r) for (r = e; r[t] && !V(r[t]) && (r = r[t], 
                    !w(r, "br")); ) ;
                    return r || e;
                }
                var p, h, m, g = t.startContainer, v = t.startOffset, y = t.endContainer, b = t.endOffset;
                if (1 == g.nodeType && g.hasChildNodes() && (p = g.childNodes.length - 1, g = g.childNodes[v > p ? p : v], 
                3 == g.nodeType && (v = 0)), 1 == y.nodeType && y.hasChildNodes() && (p = y.childNodes.length - 1, 
                y = y.childNodes[b > p ? p : b - 1], 3 == y.nodeType && (b = y.nodeValue.length)), 
                g = c(g), y = c(y), (L(g.parentNode) || L(g)) && (g = L(g) ? g : g.parentNode, g = g.nextSibling || g, 
                3 == g.nodeType && (v = 0)), (L(y.parentNode) || L(y)) && (y = L(y) ? y : y.parentNode, 
                y = y.previousSibling || y, 3 == y.nodeType && (b = y.length)), n[0].inline && (t.collapsed && (m = u(g, v, !0), 
                m && (g = m.container, v = m.offset), m = u(y, b), m && (y = m.container, b = m.offset)), 
                h = l(y, b), h.node)) {
                    for (;h.node && 0 === h.offset && h.node.previousSibling; ) h = l(h.node.previousSibling);
                    h.node && h.offset > 0 && 3 === h.node.nodeType && " " === h.node.nodeValue.charAt(h.offset - 1) && h.offset > 1 && (y = h.node, 
                    y.splitText(h.offset - 1));
                }
                return (n[0].inline || n[0].block_expand) && (n[0].inline && 3 == g.nodeType && 0 !== v || (g = s(!0)), 
                n[0].inline && 3 == y.nodeType && b !== y.nodeValue.length || (y = s())), n[0].selector && n[0].expand !== K && !n[0].inline && (g = d(g, "previousSibling"), 
                y = d(y, "nextSibling")), (n[0].block || n[0].selector) && (g = f(g, "previousSibling"), 
                y = f(y, "nextSibling"), n[0].block && (V(g) || (g = s(!0)), V(y) || (y = s()))), 
                1 == g.nodeType && (v = q(g), g = g.parentNode), 1 == y.nodeType && (b = q(y) + 1, 
                y = y.parentNode), {
                    startContainer: g,
                    startOffset: v,
                    endContainer: y,
                    endOffset: b
                };
            }
            function R(e, t, n, r) {
                var i, o, a;
                if (!x(n, e)) return K;
                if ("all" != e.remove) for (et(e.styles, function(e, i) {
                    e = N(E(e, t), i), "number" == typeof i && (i = e, r = 0), (!r || w(_(r, i), e)) && I.setStyle(n, i, ""), 
                    a = 1;
                }), a && "" === I.getAttrib(n, "style") && (n.removeAttribute("style"), n.removeAttribute("data-mce-style")), 
                et(e.attributes, function(e, i) {
                    var o;
                    if (e = E(e, t), "number" == typeof i && (i = e, r = 0), !r || w(I.getAttrib(r, i), e)) {
                        if ("class" == i && (e = I.getAttrib(n, i), e && (o = "", et(e.split(/\s+/), function(e) {
                            /mce\w+/.test(e) && (o += (o ? " " : "") + e);
                        }), o))) return I.setAttrib(n, i, o), void 0;
                        "class" == i && n.removeAttribute("className"), j.test(i) && n.removeAttribute("data-mce-" + i), 
                        n.removeAttribute(i);
                    }
                }), et(e.classes, function(e) {
                    e = E(e, t), (!r || I.hasClass(r, e)) && I.removeClass(n, e);
                }), o = I.getAttribs(n), i = 0; i < o.length; i++) if (0 !== o[i].nodeName.indexOf("_")) return K;
                return "none" != e.remove ? (A(n, e), G) : void 0;
            }
            function A(e, t) {
                function n(e, t, n) {
                    return e = B(e, t, n), !e || "BR" == e.nodeName || V(e);
                }
                var r = e.parentNode, i;
                t.block && (U ? r == I.getRoot() && (t.list_block && w(e, t.list_block) || et(tt(e.childNodes), function(e) {
                    z(U, e.nodeName.toLowerCase()) ? i ? i.appendChild(e) : i = k(e, U) : i = 0;
                })) : V(e) && !V(r) && (n(e, K) || n(e.firstChild, G, 1) || e.insertBefore(I.create("br"), e.firstChild), 
                n(e, G) || n(e.lastChild, K, 1) || e.appendChild(I.create("br")))), t.selector && t.inline && !w(t.inline, e) || I.remove(e, 1);
            }
            function B(e, t, n) {
                if (e) for (t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t]; e; e = e[t]) if (1 == e.nodeType || !S(e)) return e;
            }
            function L(e) {
                return e && 1 == e.nodeType && "bookmark" == e.getAttribute("data-mce-type");
            }
            function M(e, t) {
                function n(e, t) {
                    function n(e) {
                        var t = {};
                        return et(I.getAttribs(e), function(n) {
                            var r = n.nodeName.toLowerCase();
                            0 !== r.indexOf("_") && "style" !== r && (t[r] = I.getAttrib(e, r));
                        }), t;
                    }
                    function r(e, t) {
                        var n, r;
                        for (r in e) if (e.hasOwnProperty(r)) {
                            if (n = t[r], n === X) return K;
                            if (e[r] != n) return K;
                            delete t[r];
                        }
                        for (r in t) if (t.hasOwnProperty(r)) return K;
                        return G;
                    }
                    return e.nodeName != t.nodeName ? K : r(n(e), n(t)) ? r(I.parseStyle(I.getAttrib(e, "style")), I.parseStyle(I.getAttrib(t, "style"))) ? G : K : K;
                }
                function r(e, t) {
                    for (i = e; i; i = i[t]) {
                        if (3 == i.nodeType && 0 !== i.nodeValue.length) return e;
                        if (1 == i.nodeType && !L(i)) return i;
                    }
                    return e;
                }
                var i, o;
                if (e && t && (e = r(e, "previousSibling"), t = r(t, "nextSibling"), n(e, t))) {
                    for (i = e.nextSibling; i && i != t; ) o = i, i = i.nextSibling, e.appendChild(o);
                    return I.remove(t), et(tt(t.childNodes), function(t) {
                        e.appendChild(t);
                    }), e;
                }
                return t;
            }
            function D(t, n) {
                var i, o, a;
                return i = t[n ? "startContainer" : "endContainer"], o = t[n ? "startOffset" : "endOffset"], 
                1 == i.nodeType && (a = i.childNodes.length - 1, !n && o && o--, i = i.childNodes[o > a ? a : o]), 
                3 === i.nodeType && n && o >= i.nodeValue.length && (i = new e(i, r.getBody()).next() || i), 
                3 !== i.nodeType || n || 0 !== o || (i = new e(i, r.getBody()).prev() || i), i;
            }
            function H(t, n, o) {
                function a(e) {
                    var t = I.create("span", {
                        id: y,
                        "data-mce-bogus": !0,
                        style: b ? "color:red" : ""
                    });
                    return e && t.appendChild(r.getDoc().createTextNode($)), t;
                }
                function s(e, t) {
                    for (;e; ) {
                        if (3 === e.nodeType && e.nodeValue !== $ || e.childNodes.length > 1) return !1;
                        t && 1 === e.nodeType && t.push(e), e = e.firstChild;
                    }
                    return !0;
                }
                function l(e) {
                    for (;e; ) {
                        if (e.id === y) return e;
                        e = e.parentNode;
                    }
                }
                function u(t) {
                    var n;
                    if (t) for (n = new e(t, t), t = n.current(); t; t = n.next()) if (3 === t.nodeType) return t;
                }
                function d(e, t) {
                    var n, r;
                    if (e) r = F.getRng(!0), s(e) ? (t !== !1 && (r.setStartBefore(e), r.setEndBefore(e)), 
                    I.remove(e)) : (n = u(e), n.nodeValue.charAt(0) === $ && (n = n.deleteData(0, 1)), 
                    I.remove(e, 1)), F.setRng(r); else if (e = l(F.getStart()), !e) for (;e = I.get(y); ) d(e, !1);
                }
                function f() {
                    var e, t, r, i, s, d, f;
                    e = F.getRng(!0), i = e.startOffset, d = e.startContainer, f = d.nodeValue, t = l(F.getStart()), 
                    t && (r = u(t)), f && i > 0 && i < f.length && /\w/.test(f.charAt(i)) && /\w/.test(f.charAt(i - 1)) ? (s = F.getBookmark(), 
                    e.collapse(!0), e = T(e, c(n)), e = W.split(e), p(n, o, e), F.moveToBookmark(s)) : (t && r.nodeValue === $ ? p(n, o, t) : (t = a(!0), 
                    r = t.firstChild, e.insertNode(t), i = 1, p(n, o, t)), F.setCursorLocation(r, i));
                }
                function m() {
                    var e = F.getRng(!0), t, r, s, l, u, d, f = [], p, m;
                    for (t = e.startContainer, r = e.startOffset, u = t, 3 == t.nodeType && ((r != t.nodeValue.length || t.nodeValue === $) && (l = !0), 
                    u = u.parentNode); u; ) {
                        if (g(u, n, o)) {
                            d = u;
                            break;
                        }
                        u.nextSibling && (l = !0), f.push(u), u = u.parentNode;
                    }
                    if (d) if (l) s = F.getBookmark(), e.collapse(!0), e = T(e, c(n), !0), e = W.split(e), 
                    h(n, o, e), F.moveToBookmark(s); else {
                        for (m = a(), u = m, p = f.length - 1; p >= 0; p--) u.appendChild(I.clone(f[p], !1)), 
                        u = u.firstChild;
                        u.appendChild(I.doc.createTextNode($)), u = u.firstChild;
                        var v = I.getParent(d, i);
                        v && I.isEmpty(v) ? d.parentNode.replaceChild(m, d) : I.insertAfter(m, d), F.setCursorLocation(u, 1);
                    }
                }
                function v() {
                    var e;
                    e = l(F.getStart()), e && !I.isEmpty(e) && nt(e, function(e) {
                        1 != e.nodeType || e.id === y || I.isEmpty(e) || I.setAttrib(e, "data-mce-bogus", null);
                    }, "childNodes");
                }
                var y = "_mce_caret", b = r.settings.caret_debug;
                r._hasCaretEvents || (Z = function() {
                    var e = [], t;
                    if (s(l(F.getStart()), e)) for (t = e.length; t--; ) I.setAttrib(e[t], "data-mce-bogus", "1");
                }, Q = function(e) {
                    var t = e.keyCode;
                    d(), (8 == t || 37 == t || 39 == t) && d(l(F.getStart())), v();
                }, r.on("SetContent", function(e) {
                    e.selection && v();
                }), r._hasCaretEvents = !0), "apply" == t ? f() : m();
            }
            function P(t) {
                var n = t.startContainer, r = t.startOffset, i, o, a, s, l;
                if (3 == n.nodeType && r >= n.nodeValue.length && (r = q(n), n = n.parentNode, i = !0), 
                1 == n.nodeType) for (s = n.childNodes, n = s[Math.min(r, s.length - 1)], o = new e(n, I.getParent(n, I.isBlock)), 
                (r > s.length - 1 || i) && o.next(), a = o.current(); a; a = o.next()) if (3 == a.nodeType && !S(a)) return l = I.create("a", null, $), 
                a.parentNode.insertBefore(l, a), t.setStart(a, 0), F.setRng(t), I.remove(l), void 0;
            }
            var O = {}, I = r.dom, F = r.selection, W = new t(I), z = r.schema.isValidChild, V = I.isBlock, U = r.settings.forced_root_block, q = I.nodeIndex, $ = "﻿", j = /^(src|href|style)$/, K = !1, G = !0, Y, X, J = I.getContentEditable, Q, Z, et = n.each, tt = n.grep, nt = n.walk, rt = n.extend;
            rt(this, {
                get: c,
                register: u,
                apply: p,
                remove: h,
                toggle: m,
                match: v,
                matchAll: y,
                matchNode: g,
                canApply: b,
                formatChanged: C
            }), s(), l(), r.on("BeforeGetContent", function() {
                Z && Z();
            }), r.on("mouseup keydown", function(e) {
                Q && Q(e);
            });
        };
    }), r(M, [ g, p ], function(e, t) {
        var n = t.trim, r;
        return r = new RegExp([ "<span[^>]+data-mce-bogus[^>]+>[​﻿]+<\\/span>", "<div[^>]+data-mce-bogus[^>]+><\\/div>", '\\s?data-mce-selected="[^"]+"' ].join("|"), "gi"), 
        function(t) {
            function i() {
                return n(t.getContent({
                    format: "raw",
                    no_events: 1
                }).replace(r, ""));
            }
            function o() {
                a.typing = !1, a.add();
            }
            var a, s = 0, l = [], c, u;
            return t.on("init", function() {
                a.add();
            }), t.on("BeforeExecCommand", function(e) {
                var t = e.command;
                "Undo" != t && "Redo" != t && "mceRepaint" != t && a.beforeChange();
            }), t.on("ExecCommand", function(e) {
                var t = e.command;
                "Undo" != t && "Redo" != t && "mceRepaint" != t && a.add();
            }), t.on("ObjectResizeStart", function() {
                a.beforeChange();
            }), t.on("SaveContent ObjectResized", o), t.dom.bind(t.dom.getRoot(), "dragend", o), 
            t.dom.bind(t.getBody(), "focusout", function() {
                !t.removed && a.typing && o();
            }), t.on("KeyUp", function(n) {
                var r = n.keyCode;
                (r >= 33 && 36 >= r || r >= 37 && 40 >= r || 45 == r || 13 == r || n.ctrlKey) && (o(), 
                t.nodeChanged()), (46 == r || 8 == r || e.mac && (91 == r || 93 == r)) && t.nodeChanged(), 
                u && a.typing && (t.isDirty() || (t.isNotDirty = !l[0] || i() == l[0].content), 
                t.fire("TypingUndo"), u = !1, t.nodeChanged());
            }), t.on("KeyDown", function(e) {
                var t = e.keyCode;
                return t >= 33 && 36 >= t || t >= 37 && 40 >= t || 45 == t ? (a.typing && o(), void 0) : ((16 > t || t > 20) && 224 != t && 91 != t && !a.typing && (a.beforeChange(), 
                a.typing = !0, a.add(), u = !0), void 0);
            }), t.on("MouseDown", function() {
                a.typing && o();
            }), t.addShortcut("ctrl+z", "", "Undo"), t.addShortcut("ctrl+y,ctrl+shift+z", "", "Redo"), 
            t.on("AddUndo Undo Redo ClearUndos MouseUp", function(e) {
                e.isDefaultPrevented() || t.nodeChanged();
            }), a = {
                data: l,
                typing: !1,
                beforeChange: function() {
                    c = t.selection.getBookmark(2, !0);
                },
                add: function(e) {
                    var n, r = t.settings, o;
                    if (e = e || {}, e.content = i(), t.fire("BeforeAddUndo", {
                        level: e
                    }).isDefaultPrevented()) return null;
                    if (o = l[s], o && o.content == e.content) return null;
                    if (l[s] && (l[s].beforeBookmark = c), r.custom_undo_redo_levels && l.length > r.custom_undo_redo_levels) {
                        for (n = 0; n < l.length - 1; n++) l[n] = l[n + 1];
                        l.length--, s = l.length;
                    }
                    e.bookmark = t.selection.getBookmark(2, !0), s < l.length - 1 && (l.length = s + 1), 
                    l.push(e), s = l.length - 1;
                    var a = {
                        level: e,
                        lastLevel: o
                    };
                    return t.fire("AddUndo", a), s > 0 && (t.fire("change", a), t.isNotDirty = !1), 
                    e;
                },
                undo: function() {
                    var e;
                    return a.typing && (a.add(), a.typing = !1), s > 0 && (e = l[--s], t.setContent(e.content, {
                        format: "raw"
                    }), t.selection.moveToBookmark(e.beforeBookmark), t.fire("undo", {
                        level: e
                    })), e;
                },
                redo: function() {
                    var e;
                    return s < l.length - 1 && (e = l[++s], t.setContent(e.content, {
                        format: "raw"
                    }), t.selection.moveToBookmark(e.bookmark), t.fire("redo", {
                        level: e
                    })), e;
                },
                clear: function() {
                    l = [], s = 0, a.typing = !1, t.fire("ClearUndos");
                },
                hasUndo: function() {
                    return s > 0 || a.typing && l[0] && i() != l[0].content;
                },
                hasRedo: function() {
                    return s < l.length - 1 && !this.typing;
                },
                transact: function(e) {
                    a.beforeChange(), e(), a.add();
                }
            };
        };
    }), r(D, [ f, g ], function(e, t) {
        var n = t.ie;
        return function(t) {
            function r(r) {
                function u(e) {
                    return e && i.isBlock(e) && !/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName) && !/^(fixed|absolute)/i.test(e.style.position) && "true" !== i.getContentEditable(e);
                }
                function d(e) {
                    var t;
                    i.isBlock(e) && (t = o.getRng(), e.appendChild(i.create("span", null, " ")), o.select(e), 
                    e.lastChild.outerHTML = "", o.setRng(t));
                }
                function f(e) {
                    for (var t = e, n = [], r; t = t.firstChild; ) {
                        if (i.isBlock(t)) return;
                        1 != t.nodeType || c[t.nodeName.toLowerCase()] || n.push(t);
                    }
                    for (r = n.length; r--; ) t = n[r], !t.hasChildNodes() || t.firstChild == t.lastChild && "" === t.firstChild.nodeValue ? i.remove(t) : "A" == t.nodeName && " " === (t.innerText || t.textContent) && i.remove(t);
                }
                function p(t) {
                    var n, r, a, s = t, l;
                    if (a = i.createRng(), t.hasChildNodes()) {
                        for (n = new e(t, t); r = n.current(); ) {
                            if (3 == r.nodeType) {
                                a.setStart(r, 0), a.setEnd(r, 0);
                                break;
                            }
                            if (c[r.nodeName.toLowerCase()]) {
                                a.setStartBefore(r), a.setEndBefore(r);
                                break;
                            }
                            s = r, r = n.next();
                        }
                        r || (a.setStart(s, 0), a.setEnd(s, 0));
                    } else "BR" == t.nodeName ? t.nextSibling && i.isBlock(t.nextSibling) ? ((!R || 9 > R) && (l = i.create("br"), 
                    t.parentNode.insertBefore(l, t)), a.setStartBefore(t), a.setEndBefore(t)) : (a.setStartAfter(t), 
                    a.setEndAfter(t)) : (a.setStart(t, 0), a.setEnd(t, 0));
                    o.setRng(a), i.remove(l), o.scrollIntoView(t);
                }
                function h(e) {
                    var t = S, r, o, s;
                    if (r = e || "TABLE" == D ? i.create(e || P) : T.cloneNode(!1), s = r, a.keep_styles !== !1) do if (/^(SPAN|STRONG|B|EM|I|FONT|STRIKE|U)$/.test(t.nodeName)) {
                        if ("_mce_caret" == t.id) continue;
                        o = t.cloneNode(!1), i.setAttrib(o, "id", ""), r.hasChildNodes() ? (o.appendChild(r.firstChild), 
                        r.appendChild(o)) : (s = o, r.appendChild(o));
                    } while (t = t.parentNode);
                    return n || (s.innerHTML = '<br data-mce-bogus="1">'), r;
                }
                function m(t) {
                    var n, r, i;
                    if (3 == S.nodeType && (t ? k > 0 : k < S.nodeValue.length)) return !1;
                    if (S.parentNode == T && O && !t) return !0;
                    if (t && 1 == S.nodeType && S == T.firstChild) return !0;
                    if ("TABLE" === S.nodeName || S.previousSibling && "TABLE" == S.previousSibling.nodeName) return O && !t || !O && t;
                    for (n = new e(S, T), 3 == S.nodeType && (t && 0 === k ? n.prev() : t || k != S.nodeValue.length || n.next()); r = n.current(); ) {
                        if (1 === r.nodeType) {
                            if (!r.getAttribute("data-mce-bogus") && (i = r.nodeName.toLowerCase(), c[i] && "br" !== i)) return !1;
                        } else if (3 === r.nodeType && !/^[ \t\r\n]*$/.test(r.nodeValue)) return !1;
                        t ? n.prev() : n.next();
                    }
                    return !0;
                }
                function g(e, n) {
                    var r, o, a, s, c, d, f = P || "P";
                    if (o = i.getParent(e, i.isBlock), d = t.getBody().nodeName.toLowerCase(), !o || !u(o)) {
                        if (o = o || E, !o.hasChildNodes()) return r = i.create(f), o.appendChild(r), _.setStart(r, 0), 
                        _.setEnd(r, 0), r;
                        for (s = e; s.parentNode != o; ) s = s.parentNode;
                        for (;s && !i.isBlock(s); ) a = s, s = s.previousSibling;
                        if (a && l.isValidChild(d, f.toLowerCase())) {
                            for (r = i.create(f), a.parentNode.insertBefore(r, a), s = a; s && !i.isBlock(s); ) c = s.nextSibling, 
                            r.appendChild(s), s = c;
                            _.setStart(e, n), _.setEnd(e, n);
                        }
                    }
                    return e;
                }
                function v() {
                    function e(e) {
                        for (var t = M[e ? "firstChild" : "lastChild"]; t && 1 != t.nodeType; ) t = t[e ? "nextSibling" : "previousSibling"];
                        return t === T;
                    }
                    function t() {
                        var e = M.parentNode;
                        return "LI" == e.nodeName ? e : M;
                    }
                    var n = M.parentNode.nodeName;
                    /^(OL|UL|LI)$/.test(n) && (P = "LI"), B = P ? h(P) : i.create("BR"), e(!0) && e() ? "LI" == n ? i.insertAfter(B, t()) : i.replace(B, M) : e(!0) ? "LI" == n ? (i.insertAfter(B, t()), 
                    B.appendChild(i.doc.createTextNode(" ")), B.appendChild(M)) : M.parentNode.insertBefore(B, M) : e() ? (i.insertAfter(B, t()), 
                    d(B)) : (M = t(), N = _.cloneRange(), N.setStartAfter(T), N.setEndAfter(M), L = N.extractContents(), 
                    i.insertAfter(L, M), i.insertAfter(B, M)), i.remove(T), p(B), s.add();
                }
                function y() {
                    for (var t = new e(S, T), n; n = t.next(); ) if (c[n.nodeName.toLowerCase()] || n.length > 0) return !0;
                }
                function b() {
                    var e, t, r;
                    S && 3 == S.nodeType && k >= S.nodeValue.length && (n || y() || (e = i.create("br"), 
                    _.insertNode(e), _.setStartAfter(e), _.setEndAfter(e), t = !0)), e = i.create("br"), 
                    _.insertNode(e), n && "PRE" == D && (!R || 8 > R) && e.parentNode.insertBefore(i.doc.createTextNode("\r"), e), 
                    r = i.create("span", {}, "&nbsp;"), e.parentNode.insertBefore(r, e), o.scrollIntoView(r), 
                    i.remove(r), t ? (_.setStartBefore(e), _.setEndBefore(e)) : (_.setStartAfter(e), 
                    _.setEndAfter(e)), o.setRng(_), s.add();
                }
                function C(e) {
                    do 3 === e.nodeType && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild; while (e);
                }
                function x(e) {
                    var t = i.getRoot(), n, r;
                    for (n = e; n !== t && "false" !== i.getContentEditable(n); ) "true" === i.getContentEditable(n) && (r = n), 
                    n = n.parentNode;
                    return n !== t ? r : t;
                }
                function w(e) {
                    var t;
                    n || (e.normalize(), t = e.lastChild, (!t || /^(left|right)$/gi.test(i.getStyle(t, "float", !0))) && i.add(e, "br"));
                }
                var _ = o.getRng(!0), N, E, S, k, T, R, A, B, L, M, D, H, P, O;
                if (!_.collapsed) return t.execCommand("Delete"), void 0;
                if (!r.isDefaultPrevented() && (S = _.startContainer, k = _.startOffset, P = (a.force_p_newlines ? "p" : "") || a.forced_root_block, 
                P = P ? P.toUpperCase() : "", R = i.doc.documentMode, A = r.shiftKey, 1 == S.nodeType && S.hasChildNodes() && (O = k > S.childNodes.length - 1, 
                S = S.childNodes[Math.min(k, S.childNodes.length - 1)] || S, k = O && 3 == S.nodeType ? S.nodeValue.length : 0), 
                E = x(S))) {
                    if (s.beforeChange(), !i.isBlock(E) && E != i.getRoot()) return (!P || A) && b(), 
                    void 0;
                    if ((P && !A || !P && A) && (S = g(S, k)), T = i.getParent(S, i.isBlock), M = T ? i.getParent(T.parentNode, i.isBlock) : null, 
                    D = T ? T.nodeName.toUpperCase() : "", H = M ? M.nodeName.toUpperCase() : "", "LI" != H || r.ctrlKey || (T = M, 
                    D = H), "LI" == D) {
                        if (!P && A) return b(), void 0;
                        if (i.isEmpty(T)) return v(), void 0;
                    }
                    if ("PRE" == D && a.br_in_pre !== !1) {
                        if (!A) return b(), void 0;
                    } else if (!P && !A && "LI" != D || P && A) return b(), void 0;
                    P && T === t.getBody() || (P = P || "P", m() ? (B = /^(H[1-6]|PRE|FIGURE)$/.test(D) && "HGROUP" != H ? h(P) : h(), 
                    a.end_container_on_empty_block && u(M) && i.isEmpty(T) ? B = i.split(M, T) : i.insertAfter(B, T), 
                    p(B)) : m(!0) ? (B = T.parentNode.insertBefore(h(), T), d(B)) : (N = _.cloneRange(), 
                    N.setEndAfter(T), L = N.extractContents(), C(L), B = L.firstChild, i.insertAfter(L, T), 
                    f(B), w(T), p(B)), i.setAttrib(B, "id", ""), s.add());
                }
            }
            var i = t.dom, o = t.selection, a = t.settings, s = t.undoManager, l = t.schema, c = l.getNonEmptyElements();
            t.on("keydown", function(e) {
                13 == e.keyCode && r(e) !== !1 && e.preventDefault();
            });
        };
    }), r(H, [], function() {
        return function(e) {
            function t() {
                var t = i.getStart(), s = e.getBody(), l, c, u, d, f, p, h, m = -16777215, g, v, y, b, C;
                if (C = n.forced_root_block, t && 1 === t.nodeType && C) {
                    for (;t && t != s; ) {
                        if (a[t.nodeName]) return;
                        t = t.parentNode;
                    }
                    if (l = i.getRng(), l.setStart) {
                        c = l.startContainer, u = l.startOffset, d = l.endContainer, f = l.endOffset;
                        try {
                            v = e.getDoc().activeElement === s;
                        } catch (x) {}
                    } else l.item && (t = l.item(0), l = e.getDoc().body.createTextRange(), l.moveToElementText(t)), 
                    v = l.parentElement().ownerDocument === e.getDoc(), y = l.duplicate(), y.collapse(!0), 
                    u = -1 * y.move("character", m), y.collapsed || (y = l.duplicate(), y.collapse(!1), 
                    f = -1 * y.move("character", m) - u);
                    for (t = s.firstChild, b = s.nodeName.toLowerCase(); t; ) if ((3 === t.nodeType || 1 == t.nodeType && !a[t.nodeName]) && o.isValidChild(b, C.toLowerCase())) {
                        if (3 === t.nodeType && 0 === t.nodeValue.length) {
                            h = t, t = t.nextSibling, r.remove(h);
                            continue;
                        }
                        p || (p = r.create(C), t.parentNode.insertBefore(p, t), g = !0), h = t, t = t.nextSibling, 
                        p.appendChild(h);
                    } else p = null, t = t.nextSibling;
                    if (g && v) {
                        if (l.setStart) l.setStart(c, u), l.setEnd(d, f), i.setRng(l); else try {
                            l = e.getDoc().body.createTextRange(), l.moveToElementText(s), l.collapse(!0), l.moveStart("character", u), 
                            f > 0 && l.moveEnd("character", f), l.select();
                        } catch (x) {}
                        e.nodeChanged();
                    }
                }
            }
            var n = e.settings, r = e.dom, i = e.selection, o = e.schema, a = o.getBlockElements();
            n.forced_root_block && e.on("KeyUp NodeChange", t);
        };
    }), r(P, [ E, g, p ], function(e, n, r) {
        var i = r.each, o = r.extend, a = r.map, s = r.inArray, l = r.explode, c = n.gecko, u = n.ie, d = !0, f = !1;
        return function(n) {
            function r(e, t, n) {
                var r;
                return e = e.toLowerCase(), (r = _.exec[e]) ? (r(e, t, n), d) : f;
            }
            function p(e) {
                var t;
                return e = e.toLowerCase(), (t = _.state[e]) ? t(e) : -1;
            }
            function h(e) {
                var t;
                return e = e.toLowerCase(), (t = _.value[e]) ? t(e) : f;
            }
            function m(e, t) {
                t = t || "exec", i(e, function(e, n) {
                    i(n.toLowerCase().split(","), function(n) {
                        _[t][n] = e;
                    });
                });
            }
            function g(e, r, i) {
                return r === t && (r = f), i === t && (i = null), n.getDoc().execCommand(e, r, i);
            }
            function v(e) {
                return E.match(e);
            }
            function y(e, r) {
                E.toggle(e, r ? {
                    value: r
                } : t), n.nodeChanged();
            }
            function b(e) {
                S = w.getBookmark(e);
            }
            function C() {
                w.moveToBookmark(S);
            }
            var x = n.dom, w = n.selection, _ = {
                state: {},
                exec: {},
                value: {}
            }, N = n.settings, E = n.formatter, S;
            o(this, {
                execCommand: r,
                queryCommandState: p,
                queryCommandValue: h,
                addCommands: m
            }), m({
                "mceResetDesignMode,mceBeginUndoLevel": function() {},
                "mceEndUndoLevel,mceAddUndoLevel": function() {
                    n.undoManager.add();
                },
                "Cut,Copy,Paste": function(e) {
                    var t = n.getDoc(), r;
                    try {
                        g(e);
                    } catch (i) {
                        r = d;
                    }
                    (r || !t.queryCommandSupported(e)) && n.windowManager.alert("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                },
                unlink: function(e) {
                    w.isCollapsed() && w.select(w.getNode()), g(e), w.collapse(f);
                },
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function(e) {
                    var t = e.substring(7);
                    "full" == t && (t = "justify"), i("left,center,right,justify".split(","), function(e) {
                        t != e && E.remove("align" + e);
                    }), y("align" + t), r("mceRepaint");
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t, n;
                    g(e), t = x.getParent(w.getNode(), "ol,ul"), t && (n = t.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (b(), 
                    x.split(n, t), C()));
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                    y(e);
                },
                "ForeColor,HiliteColor,FontName": function(e, t, n) {
                    y(e, n);
                },
                FontSize: function(e, t, n) {
                    var r, i;
                    n >= 1 && 7 >= n && (i = l(N.font_size_style_values), r = l(N.font_size_classes), 
                    n = r ? r[n - 1] || n : i[n - 1] || n), y(e, n);
                },
                RemoveFormat: function(e) {
                    E.remove(e);
                },
                mceBlockQuote: function() {
                    y("blockquote");
                },
                FormatBlock: function(e, t, n) {
                    return y(n || "p");
                },
                mceCleanup: function() {
                    var e = w.getBookmark();
                    n.setContent(n.getContent({
                        cleanup: d
                    }), {
                        cleanup: d
                    }), w.moveToBookmark(e);
                },
                mceRemoveNode: function(e, t, r) {
                    var i = r || w.getNode();
                    i != n.getBody() && (b(), n.dom.remove(i, d), C());
                },
                mceSelectNodeDepth: function(e, t, r) {
                    var i = 0;
                    x.getParent(w.getNode(), function(e) {
                        return 1 == e.nodeType && i++ == r ? (w.select(e), f) : void 0;
                    }, n.getBody());
                },
                mceSelectNode: function(e, t, n) {
                    w.select(n);
                },
                mceInsertContent: function(t, r, i) {
                    function o(e) {
                        function t(e) {
                            return r[e] && 3 == r[e].nodeType;
                        }
                        var n, r, i;
                        return n = w.getRng(!0), r = n.startContainer, i = n.startOffset, 3 == r.nodeType && (i > 0 ? e = e.replace(/^&nbsp;/, " ") : t("previousSibling") || (e = e.replace(/^ /, "&nbsp;")), 
                        i < r.length ? e = e.replace(/&nbsp;(<br>|)$/, " ") : t("nextSibling") || (e = e.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), 
                        e;
                    }
                    var a, s, l, c, d, f, p, h, m, g, v, y, b, C;
                    if (/^ | $/.test(i) && (i = o(i)), a = n.parser, s = new e({}, n.schema), b = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>', 
                    f = {
                        content: i,
                        format: "html",
                        selection: !0
                    }, n.fire("BeforeSetContent", f), i = f.content, -1 == i.indexOf("{$caret}") && (i += "{$caret}"), 
                    i = i.replace(/\{\$caret\}/, b), w.isCollapsed() || n.getDoc().execCommand("Delete", !1, null), 
                    l = w.getNode(), f = {
                        context: l.nodeName.toLowerCase()
                    }, d = a.parse(i, f), v = d.lastChild, "mce_marker" == v.attr("id")) for (p = v, 
                    v = v.prev; v; v = v.walk(!0)) if (3 == v.type || !x.isBlock(v.name)) {
                        v.parent.insert(p, v, "br" === v.name);
                        break;
                    }
                    if (f.invalid) {
                        for (w.setContent(b), l = w.getNode(), c = n.getBody(), 9 == l.nodeType ? l = v = c : v = l; v !== c; ) l = v, 
                        v = v.parentNode;
                        i = l == c ? c.innerHTML : x.getOuterHTML(l), i = s.serialize(a.parse(i.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function() {
                            return s.serialize(d);
                        }))), l == c ? x.setHTML(c, i) : x.setOuterHTML(l, i);
                    } else i = s.serialize(d), v = l.firstChild, y = l.lastChild, !v || v === y && "BR" === v.nodeName ? x.setHTML(l, i) : w.setContent(i);
                    p = x.get("mce_marker"), h = x.getRect(p), m = x.getViewPort(n.getWin()), (h.y + h.h > m.y + m.h || h.y < m.y || h.x > m.x + m.w || h.x < m.x) && (C = u ? n.getDoc().documentElement : n.getBody(), 
                    C.scrollLeft = h.x, C.scrollTop = h.y - m.h + 25), g = x.createRng(), v = p.previousSibling, 
                    v && 3 == v.nodeType ? (g.setStart(v, v.nodeValue.length), u || (y = p.nextSibling, 
                    y && 3 == y.nodeType && (v.appendData(y.data), y.parentNode.removeChild(y)))) : (g.setStartBefore(p), 
                    g.setEndBefore(p)), x.remove(p), w.setRng(g), n.fire("SetContent", f), n.addVisual();
                },
                mceInsertRawHTML: function(e, t, r) {
                    w.setContent("tiny_mce_marker"), n.setContent(n.getContent().replace(/tiny_mce_marker/g, function() {
                        return r;
                    }));
                },
                mceToggleFormat: function(e, t, n) {
                    y(n);
                },
                mceSetContent: function(e, t, r) {
                    n.setContent(r);
                },
                "Indent,Outdent": function(e) {
                    var t, n, r;
                    t = N.indentation, n = /[a-z%]+$/i.exec(t), t = parseInt(t, 10), p("InsertUnorderedList") || p("InsertOrderedList") ? g(e) : (N.forced_root_block || x.getParent(w.getNode(), x.isBlock) || E.apply("div"), 
                    i(w.getSelectedBlocks(), function(i) {
                        var o;
                        "LI" != i.nodeName && (o = "rtl" == x.getStyle(i, "direction", !0) ? "paddingRight" : "paddingLeft", 
                        "outdent" == e ? (r = Math.max(0, parseInt(i.style[o] || 0, 10) - t), x.setStyle(i, o, r ? r + n : "")) : (r = parseInt(i.style[o] || 0, 10) + t + n, 
                        x.setStyle(i, o, r)));
                    }));
                },
                mceRepaint: function() {
                    if (c) try {
                        b(d), w.getSel() && w.getSel().selectAllChildren(n.getBody()), w.collapse(d), C();
                    } catch (e) {}
                },
                InsertHorizontalRule: function() {
                    n.execCommand("mceInsertContent", !1, "<hr />");
                },
                mceToggleVisualAid: function() {
                    n.hasVisual = !n.hasVisual, n.addVisual();
                },
                mceReplaceContent: function(e, t, r) {
                    n.execCommand("mceInsertContent", !1, r.replace(/\{\$selection\}/g, w.getContent({
                        format: "text"
                    })));
                },
                mceInsertLink: function(e, t, n) {
                    var r;
                    "string" == typeof n && (n = {
                        href: n
                    }), r = x.getParent(w.getNode(), "a"), n.href = n.href.replace(" ", "%20"), r && n.href || E.remove("link"), 
                    n.href && E.apply("link", n, r);
                },
                selectAll: function() {
                    var e = x.getRoot(), t = x.createRng();
                    w.getRng().setStart ? (t.setStart(e, 0), t.setEnd(e, e.childNodes.length), w.setRng(t)) : g("SelectAll");
                },
                mceNewDocument: function() {
                    n.setContent("");
                }
            }), m({
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function(e) {
                    var t = "align" + e.substring(7), n = w.isCollapsed() ? [ x.getParent(w.getNode(), x.isBlock) ] : w.getSelectedBlocks(), r = a(n, function(e) {
                        return !!E.matchNode(e, t);
                    });
                    return -1 !== s(r, d);
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) {
                    return v(e);
                },
                mceBlockQuote: function() {
                    return v("blockquote");
                },
                Outdent: function() {
                    var e;
                    if (N.inline_styles) {
                        if ((e = x.getParent(w.getStart(), x.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0) return d;
                        if ((e = x.getParent(w.getEnd(), x.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0) return d;
                    }
                    return p("InsertUnorderedList") || p("InsertOrderedList") || !N.inline_styles && !!x.getParent(w.getNode(), "BLOCKQUOTE");
                },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t = x.getParent(w.getNode(), "ul,ol");
                    return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName);
                }
            }, "state"), m({
                "FontSize,FontName": function(e) {
                    var t = 0, n;
                    return (n = x.getParent(w.getNode(), "span")) && (t = "fontsize" == e ? n.style.fontSize : n.style.fontFamily.replace(/, /g, ",").replace(/[\'\"]/g, "").toLowerCase()), 
                    t;
                }
            }, "value"), m({
                Undo: function() {
                    n.undoManager.undo();
                },
                Redo: function() {
                    n.undoManager.redo();
                }
            });
        };
    }), r(O, [ p ], function(e) {
        function t(e, i) {
            var o = this, a, s;
            return e = r(e), i = o.settings = i || {}, /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e) ? (o.source = e, 
            void 0) : (0 === e.indexOf("/") && 0 !== e.indexOf("//") && (e = (i.base_uri ? i.base_uri.protocol || "http" : "http") + "://mce_host" + e), 
            /^[\w\-]*:?\/\//.test(e) || (s = i.base_uri ? i.base_uri.path : new t(location.href).directory, 
            e = (i.base_uri && i.base_uri.protocol || "http") + "://mce_host" + o.toAbsPath(s, e)), 
            e = e.replace(/@@/g, "(mce_at)"), e = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e), 
            n([ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ], function(t, n) {
                var r = e[n];
                r && (r = r.replace(/\(mce_at\)/g, "@@")), o[t] = r;
            }), a = i.base_uri, a && (o.protocol || (o.protocol = a.protocol), o.userInfo || (o.userInfo = a.userInfo), 
            o.port || "mce_host" !== o.host || (o.port = a.port), o.host && "mce_host" !== o.host || (o.host = a.host), 
            o.source = ""), void 0);
        }
        var n = e.each, r = e.trim;
        return t.prototype = {
            setPath: function(e) {
                var t = this;
                e = /^(.*?)\/?(\w+)?$/.exec(e), t.path = e[0], t.directory = e[1], t.file = e[2], 
                t.source = "", t.getURI();
            },
            toRelative: function(e) {
                var n = this, r;
                if ("./" === e) return e;
                if (e = new t(e, {
                    base_uri: n
                }), "mce_host" != e.host && n.host != e.host && e.host || n.port != e.port || n.protocol != e.protocol) return e.getURI();
                var i = n.getURI(), o = e.getURI();
                return i == o || "/" == i.charAt(i.length - 1) && i.substr(0, i.length - 1) == o ? i : (r = n.toRelPath(n.path, e.path), 
                e.query && (r += "?" + e.query), e.anchor && (r += "#" + e.anchor), r);
            },
            toAbsolute: function(e, n) {
                return e = new t(e, {
                    base_uri: this
                }), e.getURI(this.host == e.host && this.protocol == e.protocol ? n : 0);
            },
            toRelPath: function(e, t) {
                var n, r = 0, i = "", o, a;
                if (e = e.substring(0, e.lastIndexOf("/")), e = e.split("/"), n = t.split("/"), 
                e.length >= n.length) for (o = 0, a = e.length; a > o; o++) if (o >= n.length || e[o] != n[o]) {
                    r = o + 1;
                    break;
                }
                if (e.length < n.length) for (o = 0, a = n.length; a > o; o++) if (o >= e.length || e[o] != n[o]) {
                    r = o + 1;
                    break;
                }
                if (1 === r) return t;
                for (o = 0, a = e.length - (r - 1); a > o; o++) i += "../";
                for (o = r - 1, a = n.length; a > o; o++) i += o != r - 1 ? "/" + n[o] : n[o];
                return i;
            },
            toAbsPath: function(e, t) {
                var r, i = 0, o = [], a, s;
                for (a = /\/$/.test(t) ? "/" : "", e = e.split("/"), t = t.split("/"), n(e, function(e) {
                    e && o.push(e);
                }), e = o, r = t.length - 1, o = []; r >= 0; r--) 0 !== t[r].length && "." !== t[r] && (".." !== t[r] ? i > 0 ? i-- : o.push(t[r]) : i++);
                return r = e.length - i, s = 0 >= r ? o.reverse().join("/") : e.slice(0, r).join("/") + "/" + o.reverse().join("/"), 
                0 !== s.indexOf("/") && (s = "/" + s), a && s.lastIndexOf("/") !== s.length - 1 && (s += a), 
                s;
            },
            getURI: function(e) {
                var t, n = this;
                return (!n.source || e) && (t = "", e || (n.protocol && (t += n.protocol + "://"), 
                n.userInfo && (t += n.userInfo + "@"), n.host && (t += n.host), n.port && (t += ":" + n.port)), 
                n.path && (t += n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), 
                n.source = t), n.source;
            }
        }, t;
    }), r(I, [ p ], function(e) {
        function t() {}
        var n = e.each, r = e.extend, i, o;
        return t.extend = i = function(e) {
            function t() {
                var e, t, n, r;
                if (!o && (r = this, r.init && r.init.apply(r, arguments), t = r.Mixins)) for (e = t.length; e--; ) n = t[e], 
                n.init && n.init.apply(r, arguments);
            }
            function a() {
                return this;
            }
            function s(e, t) {
                return function() {
                    var n = this, r = n._super, i;
                    return n._super = c[e], i = t.apply(n, arguments), n._super = r, i;
                };
            }
            var l = this, c = l.prototype, u, d, f;
            o = !0, u = new l(), o = !1, e.Mixins && (n(e.Mixins, function(t) {
                t = t;
                for (var n in t) "init" !== n && (e[n] = t[n]);
            }), c.Mixins && (e.Mixins = c.Mixins.concat(e.Mixins))), e.Methods && n(e.Methods.split(","), function(t) {
                e[t] = a;
            }), e.Properties && n(e.Properties.split(","), function(t) {
                var n = "_" + t;
                e[t] = function(e) {
                    var t = this, r;
                    return e !== r ? (t[n] = e, t) : t[n];
                };
            }), e.Statics && n(e.Statics, function(e, n) {
                t[n] = e;
            }), e.Defaults && c.Defaults && (e.Defaults = r({}, c.Defaults, e.Defaults));
            for (d in e) f = e[d], u[d] = "function" == typeof f && c[d] ? s(d, f) : f;
            return t.prototype = u, t.constructor = t, t.extend = i, t;
        }, t;
    }), r(F, [ I, p ], function(e, t) {
        function n(e) {
            for (var t = [], n = e.length, r; n--; ) r = e[n], r.__checked || (t.push(r), r.__checked = 1);
            for (n = t.length; n--; ) delete t[n].__checked;
            return t;
        }
        var r = /^([\w\\*]+)?(?:#([\w\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i, i = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, o = /^\s*|\s*$/g, a, s = e.extend({
            init: function(e) {
                function t(e) {
                    return e ? (e = e.toLowerCase(), function(t) {
                        return "*" === e || t.type === e;
                    }) : void 0;
                }
                function n(e) {
                    return e ? function(t) {
                        return t._name === e;
                    } : void 0;
                }
                function a(e) {
                    return e ? (e = e.split("."), function(t) {
                        for (var n = e.length; n--; ) if (!t.hasClass(e[n])) return !1;
                        return !0;
                    }) : void 0;
                }
                function s(e, t, n) {
                    return e ? function(r) {
                        var i = r[e] ? r[e]() : "";
                        return t ? "=" === t ? i === n : "*=" === t ? i.indexOf(n) >= 0 : "~=" === t ? (" " + i + " ").indexOf(" " + n + " ") >= 0 : "!=" === t ? i != n : "^=" === t ? 0 === i.indexOf(n) : "$=" === t ? i.substr(i.length - n.length) === n : !1 : !!n;
                    } : void 0;
                }
                function l(e) {
                    var t;
                    return e ? (e = /(?:not\((.+)\))|(.+)/i.exec(e), e[1] ? (t = u(e[1], []), function(e) {
                        return !d(e, t);
                    }) : (e = e[2], function(t, n, r) {
                        return "first" === e ? 0 === n : "last" === e ? n === r - 1 : "even" === e ? 0 === n % 2 : "odd" === e ? 1 === n % 2 : t[e] ? t[e]() : !1;
                    })) : void 0;
                }
                function c(e, i, c) {
                    function u(e) {
                        e && i.push(e);
                    }
                    var d;
                    return d = r.exec(e.replace(o, "")), u(t(d[1])), u(n(d[2])), u(a(d[3])), u(s(d[4], d[5], d[6])), 
                    u(l(d[7])), i.psuedo = !!d[7], i.direct = c, i;
                }
                function u(e, t) {
                    var n = [], r, o, a;
                    do if (i.exec(""), o = i.exec(e), o && (e = o[3], n.push(o[1]), o[2])) {
                        r = o[3];
                        break;
                    } while (o);
                    for (r && u(r, t), e = [], a = 0; a < n.length; a++) ">" != n[a] && e.push(c(n[a], [], ">" === n[a - 1]));
                    return t.push(e), t;
                }
                var d = this.match;
                this._selectors = u(e, []);
            },
            match: function(e, n) {
                var r, i, o, a, s, l, c, u, d, f, p, h, m;
                for (n = n || this._selectors, r = 0, i = n.length; i > r; r++) {
                    for (s = n[r], a = s.length, m = e, h = 0, o = a - 1; o >= 0; o--) for (u = s[o]; m; ) {
                        for (u.psuedo && (p = m.parent().items(), d = t.inArray(m, p), f = p.length), l = 0, 
                        c = u.length; c > l; l++) if (!u[l](m, d, f)) {
                            l = c + 1;
                            break;
                        }
                        if (l === c) {
                            h++;
                            break;
                        }
                        if (o === a - 1) break;
                        m = m.parent();
                    }
                    if (h === a) return !0;
                }
                return !1;
            },
            find: function(e) {
                function t(e, n, i) {
                    var o, a, s, l, c, u = n[i];
                    for (o = 0, a = e.length; a > o; o++) {
                        for (c = e[o], s = 0, l = u.length; l > s; s++) if (!u[s](c, o, a)) {
                            s = l + 1;
                            break;
                        }
                        if (s === l) i == n.length - 1 ? r.push(c) : c.items && t(c.items(), n, i + 1); else if (u.direct) return;
                        c.items && t(c.items(), n, i);
                    }
                }
                var r = [], i, o, l = this._selectors;
                if (e.items) {
                    for (i = 0, o = l.length; o > i; i++) t(e.items(), l[i], 0);
                    o > 1 && (r = n(r));
                }
                return a || (a = s.Collection), new a(r);
            }
        });
        return s;
    }), r(W, [ p, F, I ], function(e, t, n) {
        var r, i, o = Array.prototype.push, a = Array.prototype.slice;
        return i = {
            length: 0,
            init: function(e) {
                e && this.add(e);
            },
            add: function(t) {
                var n = this;
                return e.isArray(t) ? o.apply(n, t) : t instanceof r ? n.add(t.toArray()) : o.call(n, t), 
                n;
            },
            set: function(e) {
                var t = this, n = t.length, r;
                for (t.length = 0, t.add(e), r = t.length; n > r; r++) delete t[r];
                return t;
            },
            filter: function(e) {
                var n = this, i, o, a = [], s, l;
                for ("string" == typeof e ? (e = new t(e), l = function(t) {
                    return e.match(t);
                }) : l = e, i = 0, o = n.length; o > i; i++) s = n[i], l(s) && a.push(s);
                return new r(a);
            },
            slice: function() {
                return new r(a.apply(this, arguments));
            },
            eq: function(e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
            },
            each: function(t) {
                return e.each(this, t), this;
            },
            toArray: function() {
                return e.toArray(this);
            },
            indexOf: function(e) {
                for (var t = this, n = t.length; n-- && t[n] !== e; ) ;
                return n;
            },
            reverse: function() {
                return new r(e.toArray(this).reverse());
            },
            hasClass: function(e) {
                return this[0] ? this[0].hasClass(e) : !1;
            },
            prop: function(e, t) {
                var n = this, r, i;
                return t !== r ? (n.each(function(n) {
                    n[e] && n[e](t);
                }), n) : (i = n[0], i && i[e] ? i[e]() : void 0);
            },
            exec: function(t) {
                var n = this, r = e.toArray(arguments).slice(1);
                return n.each(function(e) {
                    e[t] && e[t].apply(e, r);
                }), n;
            }
        }, e.each("fire on off show hide addClass removeClass append prepend before after reflow".split(" "), function(t) {
            i[t] = function() {
                var n = e.toArray(arguments);
                return this.each(function(e) {
                    t in e && e[t].apply(e, n);
                }), this;
            };
        }), e.each("text name disabled active selected checked visible parent value data".split(" "), function(e) {
            i[e] = function(t) {
                return this.prop(e, t);
            };
        }), r = n.extend(i), t.Collection = r, r;
    }), r(z, [ p, v ], function(e, t) {
        return {
            id: function() {
                return t.DOM.uniqueId();
            },
            createFragment: function(e) {
                return t.DOM.createFragment(e);
            },
            getWindowSize: function() {
                return t.DOM.getViewPort();
            },
            getSize: function(e) {
                return t.DOM.getSize(e);
            },
            getPos: function(e, n) {
                return t.DOM.getPos(e, n);
            },
            getViewPort: function(e) {
                return t.DOM.getViewPort(e);
            },
            get: function(e) {
                return document.getElementById(e);
            },
            addClass: function(e, n) {
                return t.DOM.addClass(e, n);
            },
            removeClass: function(e, n) {
                return t.DOM.removeClass(e, n);
            },
            hasClass: function(e, n) {
                return t.DOM.hasClass(e, n);
            },
            toggleClass: function(e, n, r) {
                return t.DOM.toggleClass(e, n, r);
            },
            css: function(e, n, r) {
                return t.DOM.setStyle(e, n, r);
            },
            on: function(e, n, r, i) {
                return t.DOM.bind(e, n, r, i);
            },
            off: function(e, n, r) {
                return t.DOM.unbind(e, n, r);
            },
            fire: function(e, n, r) {
                return t.DOM.fire(e, n, r);
            }
        };
    }), r(V, [ I, p, W, z ], function(e, t, n, r) {
        var i = t.makeMap("focusin focusout scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave wheel keydown keypress keyup contextmenu", " "), o = {}, a = "onmousewheel" in document, s = !1, l = e.extend({
            Statics: {
                controlIdLookup: {}
            },
            classPrefix: "mce-",
            init: function(e) {
                var n = this, i, o;
                if (n.settings = e = t.extend({}, n.Defaults, e), n._id = r.id(), n._text = n._name = "", 
                n._width = n._height = 0, n._aria = {
                    role: e.role
                }, i = e.classes) for (i = i.split(" "), i.map = {}, o = i.length; o--; ) i.map[i[o]] = !0;
                n._classes = i || [], n.visible(!0), t.each("title text width height name classes visible disabled active value".split(" "), function(t) {
                    var r = e[t], i;
                    r !== i ? n[t](r) : n["_" + t] === i && (n["_" + t] = !1);
                }), n.on("click", function() {
                    return n.disabled() ? !1 : void 0;
                }), e.classes && t.each(e.classes.split(" "), function(e) {
                    n.addClass(e);
                }), n.settings = e, n._borderBox = n.parseBox(e.border), n._paddingBox = n.parseBox(e.padding), 
                n._marginBox = n.parseBox(e.margin), e.hidden && n.hide();
            },
            Properties: "parent,title,text,width,height,disabled,active,name,value",
            Methods: "renderHtml",
            getContainerElm: function() {
                return document.body;
            },
            getParentCtrl: function(e) {
                for (var t; e && !(t = l.controlIdLookup[e.id]); ) e = e.parentNode;
                return t;
            },
            parseBox: function(e) {
                var t, n = 10;
                if (e) return "number" == typeof e ? (e = e || 0, {
                    top: e,
                    left: e,
                    bottom: e,
                    right: e
                }) : (e = e.split(" "), t = e.length, 1 === t ? e[1] = e[2] = e[3] = e[0] : 2 === t ? (e[2] = e[0], 
                e[3] = e[1]) : 3 === t && (e[3] = e[1]), {
                    top: parseInt(e[0], n) || 0,
                    right: parseInt(e[1], n) || 0,
                    bottom: parseInt(e[2], n) || 0,
                    left: parseInt(e[3], n) || 0
                });
            },
            borderBox: function() {
                return this._borderBox;
            },
            paddingBox: function() {
                return this._paddingBox;
            },
            marginBox: function() {
                return this._marginBox;
            },
            measureBox: function(e, t) {
                function n(t) {
                    var n = document.defaultView;
                    return n ? (t = t.replace(/[A-Z]/g, function(e) {
                        return "-" + e;
                    }), n.getComputedStyle(e, null).getPropertyValue(t)) : e.currentStyle[t];
                }
                function r(e) {
                    var t = parseInt(n(e), 10);
                    return isNaN(t) ? 0 : t;
                }
                return {
                    top: r(t + "TopWidth"),
                    right: r(t + "RightWidth"),
                    bottom: r(t + "BottomWidth"),
                    left: r(t + "LeftWidth")
                };
            },
            initLayoutRect: function() {
                var e = this, t = e.settings, n, r, i = e.getEl(), o, a, s, l, c, u, d;
                n = e._borderBox = e._borderBox || e.measureBox(i, "border"), e._paddingBox = e._paddingBox || e.measureBox(i, "padding"), 
                e._marginBox = e._marginBox || e.measureBox(i, "margin"), u = t.minWidth, d = t.minHeight, 
                s = u || i.offsetWidth, l = d || i.offsetHeight, o = t.width, a = t.height, c = t.autoResize, 
                c = "undefined" != typeof c ? c : !o && !a, o = o || s, a = a || l;
                var f = n.left + n.right, p = n.top + n.bottom, h = t.maxWidth || 65535, m = t.maxHeight || 65535;
                return e._layoutRect = r = {
                    x: t.x || 0,
                    y: t.y || 0,
                    w: o,
                    h: a,
                    deltaW: f,
                    deltaH: p,
                    contentW: o - f,
                    contentH: a - p,
                    innerW: o - f,
                    innerH: a - p,
                    startMinWidth: u || 0,
                    startMinHeight: d || 0,
                    minW: Math.min(s, h),
                    minH: Math.min(l, m),
                    maxW: h,
                    maxH: m,
                    autoResize: c,
                    scrollW: 0
                }, e._lastLayoutRect = {}, r;
            },
            layoutRect: function(e) {
                var t = this, n = t._layoutRect, r, i, o, a, s, c;
                return n || (n = t.initLayoutRect()), e ? (o = n.deltaW, a = n.deltaH, e.x !== s && (n.x = e.x), 
                e.y !== s && (n.y = e.y), e.minW !== s && (n.minW = e.minW), e.minH !== s && (n.minH = e.minH), 
                i = e.w, i !== s && (i = i < n.minW ? n.minW : i, i = i > n.maxW ? n.maxW : i, n.w = i, 
                n.innerW = i - o), i = e.h, i !== s && (i = i < n.minH ? n.minH : i, i = i > n.maxH ? n.maxH : i, 
                n.h = i, n.innerH = i - a), i = e.innerW, i !== s && (i = i < n.minW - o ? n.minW - o : i, 
                i = i > n.maxW - o ? n.maxW - o : i, n.innerW = i, n.w = i + o), i = e.innerH, i !== s && (i = i < n.minH - a ? n.minH - a : i, 
                i = i > n.maxH - a ? n.maxH - a : i, n.innerH = i, n.h = i + a), e.contentW !== s && (n.contentW = e.contentW), 
                e.contentH !== s && (n.contentH = e.contentH), r = t._lastLayoutRect, (r.x !== n.x || r.y !== n.y || r.w !== n.w || r.h !== n.h) && (c = l.repaintControls, 
                c && c.map && !c.map[t._id] && (c.push(t), c.map[t._id] = !0), r.x = n.x, r.y = n.y, 
                r.w = n.w, r.h = n.h), t) : n;
            },
            repaint: function() {
                var e = this, t, n, r, i, o = 0, a = 0, s;
                t = e.getEl().style, r = e._layoutRect, s = e._lastRepaintRect || {}, i = e._borderBox, 
                o = i.left + i.right, a = i.top + i.bottom, r.x !== s.x && (t.left = r.x + "px", 
                s.x = r.x), r.y !== s.y && (t.top = r.y + "px", s.y = r.y), r.w !== s.w && (t.width = r.w - o + "px", 
                s.w = r.w), r.h !== s.h && (t.height = r.h - a + "px", s.h = r.h), e._hasBody && r.innerW !== s.innerW && (n = e.getEl("body").style, 
                n.width = r.innerW + "px", s.innerW = r.innerW), e._hasBody && r.innerH !== s.innerH && (n = n || e.getEl("body").style, 
                n.height = r.innerH + "px", s.innerH = r.innerH), e._lastRepaintRect = s, e.fire("repaint", {}, !1);
            },
            on: function(e, t) {
                function n(e) {
                    var t, n;
                    return function(i) {
                        return t || r.parents().each(function(r) {
                            var i = r.settings.callbacks;
                            return i && (t = i[e]) ? (n = r, !1) : void 0;
                        }), t.call(n, i);
                    };
                }
                var r = this, o, a, s, l;
                if (t) for ("string" == typeof t && (t = n(t)), s = e.toLowerCase().split(" "), 
                l = s.length; l--; ) e = s[l], o = r._bindings, o || (o = r._bindings = {}), a = o[e], 
                a || (a = o[e] = []), a.push(t), i[e] && (r._nativeEvents ? r._nativeEvents[e] = !0 : r._nativeEvents = {
                    name: !0
                }, r._rendered && r.bindPendingEvents());
                return r;
            },
            off: function(e, t) {
                var n = this, r, i = n._bindings, o, a, s, l;
                if (i) if (e) for (s = e.toLowerCase().split(" "), r = s.length; r--; ) {
                    if (e = s[r], o = i[e], !e) {
                        for (a in i) i[a].length = 0;
                        return n;
                    }
                    if (o) if (t) for (l = o.length; l--; ) o[l] === t && o.splice(l, 1); else o.length = 0;
                } else n._bindings = [];
                return n;
            },
            fire: function(e, t, n) {
                function r() {
                    return !1;
                }
                function i() {
                    return !0;
                }
                var o = this, a, s, l, c;
                if (e = e.toLowerCase(), t = t || {}, t.type || (t.type = e), t.control || (t.control = o), 
                t.preventDefault || (t.preventDefault = function() {
                    t.isDefaultPrevented = i;
                }, t.stopPropagation = function() {
                    t.isPropagationStopped = i;
                }, t.stopImmediatePropagation = function() {
                    t.isImmediatePropagationStopped = i;
                }, t.isDefaultPrevented = r, t.isPropagationStopped = r, t.isImmediatePropagationStopped = r), 
                o._bindings && (l = o._bindings[e])) for (a = 0, s = l.length; s > a && (t.isImmediatePropagationStopped() || l[a].call(o, t) !== !1); a++) ;
                if (n !== !1) for (c = o.parent(); c && !t.isPropagationStopped(); ) c.fire(e, t, !1), 
                c = c.parent();
                return t;
            },
            parents: function(e) {
                var t = this, r = new n();
                for (t = t.parent(); t; t = t.parent()) r.add(t);
                return e && (r = r.filter(e)), r;
            },
            next: function() {
                var e = this.parent().items();
                return e[e.indexOf(this) + 1];
            },
            prev: function() {
                var e = this.parent().items();
                return e[e.indexOf(this) - 1];
            },
            findCommonAncestor: function(e, t) {
                for (var n; e; ) {
                    for (n = t; n && e != n; ) n = n.parent();
                    if (e == n) break;
                    e = e.parent();
                }
                return e;
            },
            hasClass: function(e, t) {
                var n = this._classes[t || "control"];
                return e = this.classPrefix + e, n && !!n.map[e];
            },
            addClass: function(e, t) {
                var n = this, r, i;
                return e = this.classPrefix + e, r = n._classes[t || "control"], r || (r = [], r.map = {}, 
                n._classes[t || "control"] = r), r.map[e] || (r.map[e] = e, r.push(e), n._rendered && (i = n.getEl(t), 
                i && (i.className = r.join(" ")))), n;
            },
            removeClass: function(e, t) {
                var n = this, r, i, o;
                if (e = this.classPrefix + e, r = n._classes[t || "control"], r && r.map[e]) for (delete r.map[e], 
                i = r.length; i--; ) r[i] === e && r.splice(i, 1);
                return n._rendered && (o = n.getEl(t), o && (o.className = r.join(" "))), n;
            },
            toggleClass: function(e, t, n) {
                var r = this;
                return t ? r.addClass(e, n) : r.removeClass(e, n), r;
            },
            classes: function(e) {
                var t = this._classes[e || "control"];
                return t ? t.join(" ") : "";
            },
            getEl: function(e, t) {
                var n, i = e ? this._id + "-" + e : this._id;
                return n = o[i] = (t === !0 ? null : o[i]) || r.get(i);
            },
            visible: function(e) {
                var t = this, n;
                return "undefined" != typeof e ? (t._visible !== e && (t._rendered && (t.getEl().style.display = e ? "" : "none"), 
                t._visible = e, n = t.parent(), n && (n._lastRect = null), t.fire(e ? "show" : "hide")), 
                t) : t._visible;
            },
            show: function() {
                return this.visible(!0);
            },
            hide: function() {
                return this.visible(!1);
            },
            focus: function() {
                try {
                    this.getEl().focus();
                } catch (e) {}
                return this;
            },
            blur: function() {
                return this.getEl().blur(), this;
            },
            aria: function(e, t) {
                var n = this, r = n.getEl();
                return "undefined" == typeof t ? n._aria[e] : (n._aria[e] = t, n._rendered && ("label" == e && r.setAttribute("aria-labeledby", n._id), 
                r.setAttribute("role" == e ? e : "aria-" + e, t)), n);
            },
            encode: function(e, t) {
                return t !== !1 && l.translate && (e = l.translate(e)), (e || "").replace(/[&<>"]/g, function(e) {
                    return "&#" + e.charCodeAt(0) + ";";
                });
            },
            before: function(e) {
                var t = this, n = t.parent();
                return n && n.insert(e, n.items().indexOf(t), !0), t;
            },
            after: function(e) {
                var t = this, n = t.parent();
                return n && n.insert(e, n.items().indexOf(t)), t;
            },
            remove: function() {
                var e = this, t = e.getEl(), n = e.parent(), i;
                if (e.items) for (var o = e.items().toArray(), a = o.length; a--; ) o[a].remove();
                return n && n.items && (i = [], n.items().each(function(t) {
                    t !== e && i.push(t);
                }), n.items().set(i), n._lastRect = null), e._eventsRoot && e._eventsRoot == e && r.off(t), 
                delete l.controlIdLookup[e._id], t.parentNode && t.parentNode.removeChild(t), e;
            },
            renderBefore: function(e) {
                var t = this;
                return e.parentNode.insertBefore(r.createFragment(t.renderHtml()), e), t.postRender(), 
                t;
            },
            renderTo: function(e) {
                var t = this;
                return e = e || t.getContainerElm(), e.appendChild(r.createFragment(t.renderHtml())), 
                t.postRender(), t;
            },
            postRender: function() {
                var e = this, t = e.settings, n, i, o, a, s;
                for (a in t) 0 === a.indexOf("on") && e.on(a.substr(2), t[a]);
                if (e._eventsRoot) {
                    for (o = e.parent(); !s && o; o = o.parent()) s = o._eventsRoot;
                    if (s) for (a in s._nativeEvents) e._nativeEvents[a] = !0;
                }
                e.bindPendingEvents(), t.style && (n = e.getEl(), n && (n.setAttribute("style", t.style), 
                n.style.cssText = t.style)), e._visible || r.css(e.getEl(), "display", "none"), 
                e.settings.border && (i = e.borderBox(), r.css(e.getEl(), {
                    "border-top-width": i.top,
                    "border-right-width": i.right,
                    "border-bottom-width": i.bottom,
                    "border-left-width": i.left
                })), l.controlIdLookup[e._id] = e;
                for (var c in e._aria) e.aria(c, e._aria[c]);
                e.fire("postrender", {}, !1);
            },
            scrollIntoView: function(e) {
                function t(e, t) {
                    var n, r, i = e;
                    for (n = r = 0; i && i != t && i.nodeType; ) n += i.offsetLeft || 0, r += i.offsetTop || 0, 
                    i = i.offsetParent;
                    return {
                        x: n,
                        y: r
                    };
                }
                var n = this.getEl(), r = n.parentNode, i, o, a, s, l, c, u = t(n, r);
                return i = u.x, o = u.y, a = n.offsetWidth, s = n.offsetHeight, l = r.clientWidth, 
                c = r.clientHeight, "end" == e ? (i -= l - a, o -= c - s) : "center" == e && (i -= l / 2 - a / 2, 
                o -= c / 2 - s / 2), r.scrollLeft = i, r.scrollTop = o, this;
            },
            bindPendingEvents: function() {
                function e(e) {
                    var t = o.getParentCtrl(e.target);
                    t && t.fire(e.type, e);
                }
                function t() {
                    var e = d._lastHoverCtrl;
                    e && (e.fire("mouseleave", {
                        target: e.getEl()
                    }), e.parents().each(function(e) {
                        e.fire("mouseleave", {
                            target: e.getEl()
                        });
                    }), d._lastHoverCtrl = null);
                }
                function n(e) {
                    var t = o.getParentCtrl(e.target), n = d._lastHoverCtrl, r = 0, i, a, s;
                    if (t !== n) {
                        if (d._lastHoverCtrl = t, a = t.parents().toArray().reverse(), a.push(t), n) {
                            for (s = n.parents().toArray().reverse(), s.push(n), r = 0; r < s.length && a[r] === s[r]; r++) ;
                            for (i = s.length - 1; i >= r; i--) n = s[i], n.fire("mouseleave", {
                                target: n.getEl()
                            });
                        }
                        for (i = r; i < a.length; i++) t = a[i], t.fire("mouseenter", {
                            target: t.getEl()
                        });
                    }
                }
                function i(e) {
                    e.preventDefault(), "mousewheel" == e.type ? (e.deltaY = -1 / 40 * e.wheelDelta, 
                    e.wheelDeltaX && (e.deltaX = -1 / 40 * e.wheelDeltaX)) : (e.deltaX = 0, e.deltaY = e.detail), 
                    e = o.fire("wheel", e);
                }
                var o = this, l, c, u, d, f, p;
                if (o._rendered = !0, f = o._nativeEvents) {
                    for (u = o.parents().toArray(), u.unshift(o), l = 0, c = u.length; !d && c > l; l++) d = u[l]._eventsRoot;
                    for (d || (d = u[u.length - 1] || o), o._eventsRoot = d, c = l, l = 0; c > l; l++) u[l]._eventsRoot = d;
                    for (p in f) {
                        if (!f) return !1;
                        "wheel" !== p || s ? ("mouseenter" === p || "mouseleave" === p ? d._hasMouseEnter || (r.on(d.getEl(), "mouseleave", t), 
                        r.on(d.getEl(), "mouseover", n), d._hasMouseEnter = 1) : d[p] || (r.on(d.getEl(), p, e), 
                        d[p] = !0), f[p] = !1) : a ? r.on(o.getEl(), "mousewheel", i) : r.on(o.getEl(), "DOMMouseScroll", i);
                    }
                }
            },
            reflow: function() {
                return this.repaint(), this;
            }
        });
        return l;
    }), r(U, [], function() {
        var e = {}, t;
        return {
            add: function(t, n) {
                e[t.toLowerCase()] = n;
            },
            has: function(t) {
                return !!e[t.toLowerCase()];
            },
            create: function(n, r) {
                var i, o, a;
                if (!t) {
                    a = tinymce.ui;
                    for (o in a) e[o.toLowerCase()] = a[o];
                    t = !0;
                }
                if ("string" == typeof n ? (r = r || {}, r.type = n) : (r = n, n = r.type), n = n.toLowerCase(), 
                i = e[n], !i) throw new Error("Could not find control by type: " + n);
                return i = new i(r), i.type = n, i;
            }
        };
    }), r(q, [ V, W, F, U, p, z ], function(e, t, n, r, i, o) {
        var a = {};
        return e.extend({
            layout: "",
            innerClass: "container-inner",
            init: function(e) {
                var n = this;
                n._super(e), e = n.settings, n._fixed = e.fixed, n._items = new t(), n.addClass("container"), 
                n.addClass("container-body", "body"), e.containerCls && n.addClass(e.containerCls), 
                n._layout = r.create((e.layout || n.layout) + "layout"), n.settings.items && n.add(n.settings.items), 
                n._hasBody = !0;
            },
            items: function() {
                return this._items;
            },
            find: function(e) {
                return e = a[e] = a[e] || new n(e), e.find(this);
            },
            add: function(e) {
                var t = this;
                return t.items().add(t.create(e)).parent(t), t;
            },
            focus: function() {
                var e = this;
                return e.keyNav ? e.keyNav.focusFirst() : e._super(), e;
            },
            replace: function(e, t) {
                for (var n, r = this.items(), i = r.length; i--; ) if (r[i] === e) {
                    r[i] = t;
                    break;
                }
                i >= 0 && (n = t.getEl(), n && n.parentNode.removeChild(n), n = e.getEl(), n && n.parentNode.removeChild(n)), 
                t.parent(this);
            },
            create: function(t) {
                var n = this, o, a = [];
                return i.isArray(t) || (t = [ t ]), i.each(t, function(t) {
                    t && (t instanceof e || ("string" == typeof t && (t = {
                        type: t
                    }), o = i.extend({}, n.settings.defaults, t), t.type = o.type = o.type || t.type || n.settings.defaultType || (o.defaults ? o.defaults.type : null), 
                    t = r.create(o)), a.push(t));
                }), a;
            },
            renderNew: function() {
                var e = this;
                return e.items().each(function(t, n) {
                    var r, i;
                    t.parent(e), t._rendered || (r = e.getEl("body"), i = o.createFragment(t.renderHtml()), 
                    r.hasChildNodes() && n <= r.childNodes.length - 1 ? r.insertBefore(i, r.childNodes[n]) : r.appendChild(i), 
                    t.postRender());
                }), e._layout.applyClasses(e), e._lastRect = null, e;
            },
            append: function(e) {
                return this.add(e).renderNew();
            },
            prepend: function(e) {
                var t = this;
                return t.items().set(t.create(e).concat(t.items().toArray())), t.renderNew();
            },
            insert: function(e, t, n) {
                var r = this, i, o, a;
                return e = r.create(e), i = r.items(), !n && t < i.length - 1 && (t += 1), t >= 0 && t < i.length && (o = i.slice(0, t).toArray(), 
                a = i.slice(t).toArray(), i.set(o.concat(e, a))), r.renderNew();
            },
            fromJSON: function(e) {
                var t = this;
                for (var n in e) t.find("#" + n).value(e[n]);
                return t;
            },
            toJSON: function() {
                var e = this, t = {};
                return e.find("*").each(function(e) {
                    var n = e.name(), r = e.value();
                    n && "undefined" != typeof r && (t[n] = r);
                }), t;
            },
            preRender: function() {},
            renderHtml: function() {
                var e = this, t = e._layout;
                return e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '" role="' + this.settings.role + '">' + '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div>" + "</div>";
            },
            postRender: function() {
                var e = this, t;
                return e.items().exec("postRender"), e._super(), e._layout.postRender(e), e._rendered = !0, 
                e.settings.style && o.css(e.getEl(), e.settings.style), e.settings.border && (t = e.borderBox(), 
                o.css(e.getEl(), {
                    "border-top-width": t.top,
                    "border-right-width": t.right,
                    "border-bottom-width": t.bottom,
                    "border-left-width": t.left
                })), e;
            },
            initLayoutRect: function() {
                var e = this, t = e._super();
                return e._layout.recalc(e), t;
            },
            recalc: function() {
                var e = this, t = e._layoutRect, n = e._lastRect;
                return n && n.w == t.w && n.h == t.h ? void 0 : (e._layout.recalc(e), t = e.layoutRect(), 
                e._lastRect = {
                    x: t.x,
                    y: t.y,
                    w: t.w,
                    h: t.h
                }, !0);
            },
            reflow: function() {
                var t, n;
                if (this.visible()) {
                    for (e.repaintControls = [], e.repaintControls.map = {}, n = this.recalc(), t = e.repaintControls.length; t--; ) e.repaintControls[t].repaint();
                    "flow" !== this.settings.layout && "stack" !== this.settings.layout && this.repaint(), 
                    e.repaintControls = [];
                }
                return this;
            }
        });
    }), r($, [ z ], function(e) {
        function t() {
            var e = document, t, n, r, i, o, a, s, l, c = Math.max;
            return t = e.documentElement, n = e.body, r = c(t.scrollWidth, n.scrollWidth), i = c(t.clientWidth, n.clientWidth), 
            o = c(t.offsetWidth, n.offsetWidth), a = c(t.scrollHeight, n.scrollHeight), s = c(t.clientHeight, n.clientHeight), 
            l = c(t.offsetHeight, n.offsetHeight), {
                width: o > r ? i : r,
                height: l > a ? s : a
            };
        }
        return function(n, r) {
            function i() {
                return a.getElementById(r.handle || n);
            }
            var o, a = document, s, l, c, u, d, f;
            r = r || {}, l = function(n) {
                var l = t(), p, h;
                n.preventDefault(), s = n.button, p = i(), d = n.screenX, f = n.screenY, h = window.getComputedStyle ? window.getComputedStyle(p, null).getPropertyValue("cursor") : p.runtimeStyle.cursor, 
                o = a.createElement("div"), e.css(o, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: l.width,
                    height: l.height,
                    zIndex: 2147483647,
                    opacity: 1e-4,
                    background: "red",
                    cursor: h
                }), a.body.appendChild(o), e.on(a, "mousemove", u), e.on(a, "mouseup", c), r.start(n);
            }, u = function(e) {
                return e.button !== s ? c(e) : (e.deltaX = e.screenX - d, e.deltaY = e.screenY - f, 
                e.preventDefault(), r.drag(e), void 0);
            }, c = function(t) {
                e.off(a, "mousemove", u), e.off(a, "mouseup", c), o.parentNode.removeChild(o), r.stop && r.stop(t);
            }, this.destroy = function() {
                e.off(i());
            }, e.on(i(), "mousedown", l);
        };
    }), r(j, [ z, $ ], function(e, t) {
        return {
            init: function() {
                var e = this;
                e.on("repaint", e.renderScroll);
            },
            renderScroll: function() {
                function n() {
                    function t(t, a, s, l, c, u) {
                        var d, f, p, h, m, g, v, y, b;
                        if (f = i.getEl("scroll" + t)) {
                            if (y = a.toLowerCase(), b = s.toLowerCase(), i.getEl("absend") && e.css(i.getEl("absend"), y, i.layoutRect()[l] - 1), 
                            !c) return e.css(f, "display", "none"), void 0;
                            e.css(f, "display", "block"), d = i.getEl("body"), p = i.getEl("scroll" + t + "t"), 
                            h = d["client" + s] - 2 * o, h -= n && r ? f["client" + u] : 0, m = d["scroll" + s], 
                            g = h / m, v = {}, v[y] = d["offset" + a] + o, v[b] = h, e.css(f, v), v = {}, v[y] = d["scroll" + a] * g, 
                            v[b] = h * g, e.css(p, v);
                        }
                    }
                    var n, r, a;
                    a = i.getEl("body"), n = a.scrollWidth > a.clientWidth, r = a.scrollHeight > a.clientHeight, 
                    t("h", "Left", "Width", "contentW", n, "Height"), t("v", "Top", "Height", "contentH", r, "Width");
                }
                function r() {
                    function n(n, r, a, s, l) {
                        var c, u = i._id + "-scroll" + n, d = i.classPrefix;
                        i.getEl().appendChild(e.createFragment('<div id="' + u + '" class="' + d + "scrollbar " + d + "scrollbar-" + n + '">' + '<div id="' + u + 't" class="' + d + 'scrollbar-thumb"></div>' + "</div>")), 
                        i.draghelper = new t(u + "t", {
                            start: function() {
                                c = i.getEl("body")["scroll" + r], e.addClass(e.get(u), d + "active");
                            },
                            drag: function(e) {
                                var t, u, d, f, p = i.layoutRect();
                                u = p.contentW > p.innerW, d = p.contentH > p.innerH, f = i.getEl("body")["client" + a] - 2 * o, 
                                f -= u && d ? i.getEl("scroll" + n)["client" + l] : 0, t = f / i.getEl("body")["scroll" + a], 
                                i.getEl("body")["scroll" + r] = c + e["delta" + s] / t;
                            },
                            stop: function() {
                                e.removeClass(e.get(u), d + "active");
                            }
                        });
                    }
                    i.addClass("scroll"), n("v", "Top", "Height", "Y", "Width"), n("h", "Left", "Width", "X", "Height");
                }
                var i = this, o = 2;
                i.settings.autoScroll && (i._hasScroll || (i._hasScroll = !0, r(), i.on("wheel", function(e) {
                    var t = i.getEl("body");
                    t.scrollLeft += 10 * (e.deltaX || 0), t.scrollTop += 10 * e.deltaY, n();
                }), e.on(i.getEl("body"), "scroll", n)), n());
            }
        };
    }), r(K, [ q, j ], function(e, t) {
        return e.extend({
            Defaults: {
                layout: "fit",
                containerCls: "panel"
            },
            Mixins: [ t ],
            renderHtml: function() {
                var e = this, t = e._layout, n = e.settings.html;
                return e.preRender(), t.preRender(e), "undefined" == typeof n ? n = '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + t.renderHtml(e) + "</div>" : ("function" == typeof n && (n = n.call(e)), 
                e._hasBody = !1), '<div id="' + e._id + '" class="' + e.classes() + '" hideFocus="1" tabIndex="-1">' + (e._preBodyHtml || "") + n + "</div>";
            }
        });
    }), r(G, [ z ], function(e) {
        function t(t, n, r) {
            var i, o, a, s, l, c, u, d, f;
            return f = e.getViewPort(), o = e.getPos(n), a = o.x, s = o.y, t._fixed && (a -= f.x, 
            s -= f.y), i = t.getEl(), l = i.offsetWidth, c = i.offsetHeight, u = n.offsetWidth, 
            d = n.offsetHeight, r = (r || "").split(""), "b" === r[0] && (s += d), "r" === r[1] && (a += u), 
            "c" === r[0] && (s += Math.round(d / 2)), "c" === r[1] && (a += Math.round(u / 2)), 
            "b" === r[3] && (s -= c), "r" === r[4] && (a -= l), "c" === r[3] && (s -= Math.round(c / 2)), 
            "c" === r[4] && (a -= Math.round(l / 2)), {
                x: a,
                y: s,
                w: l,
                h: c
            };
        }
        return {
            testMoveRel: function(n, r) {
                for (var i = e.getViewPort(), o = 0; o < r.length; o++) {
                    var a = t(this, n, r[o]);
                    if (this._fixed) {
                        if (a.x > 0 && a.x + a.w < i.w && a.y > 0 && a.y + a.h < i.h) return r[o];
                    } else if (a.x > i.x && a.x + a.w < i.w + i.x && a.y > i.y && a.y + a.h < i.h + i.y) return r[o];
                }
                return r[0];
            },
            moveRel: function(e, n) {
                "string" != typeof n && (n = this.testMoveRel(e, n));
                var r = t(this, e, n);
                return this.moveTo(r.x, r.y);
            },
            moveBy: function(e, t) {
                var n = this, r = n.layoutRect();
                return n.moveTo(r.x + e, r.y + t), n;
            },
            moveTo: function(t, n) {
                function r(e, t, n) {
                    return 0 > e ? 0 : e + n > t ? (e = t - n, 0 > e ? 0 : e) : e;
                }
                var i = this;
                if (i.settings.constrainToViewport) {
                    var o = e.getViewPort(window), a = i.layoutRect();
                    t = r(t, o.w + o.x, a.w), n = r(n, o.h + o.y, a.h);
                }
                return i._rendered ? i.layoutRect({
                    x: t,
                    y: n
                }).repaint() : (i.settings.x = t, i.settings.y = n), i.fire("move", {
                    x: t,
                    y: n
                }), i;
            }
        };
    }), r(Y, [ z ], function(e) {
        return {
            resizeToContent: function() {
                this._layoutRect.autoResize = !0, this._lastRect = null, this.reflow();
            },
            resizeTo: function(t, n) {
                if (1 >= t || 1 >= n) {
                    var r = e.getWindowSize();
                    t = 1 >= t ? t * r.w : t, n = 1 >= n ? n * r.h : n;
                }
                return this._layoutRect.autoResize = !1, this.layoutRect({
                    minW: t,
                    minH: n,
                    w: t,
                    h: n
                }).reflow();
            },
            resizeBy: function(e, t) {
                var n = this, r = n.layoutRect();
                return n.resizeTo(r.w + e, r.h + t);
            }
        };
    }), r(X, [ K, G, Y, z ], function(e, t, n, r) {
        function i(e) {
            var t;
            for (t = s.length; t--; ) s[t] === e && s.splice(t, 1);
        }
        var o, a, s = [], l = [], c, u = e.extend({
            Mixins: [ t, n ],
            init: function(e) {
                function t() {
                    var e, t = u.zIndex || 65535, n;
                    if (l.length) for (e = 0; e < l.length; e++) l[e].modal && (t++, n = l[e]), l[e].getEl().style.zIndex = t, 
                    l[e].zIndex = t, t++;
                    var i = document.getElementById(d.classPrefix + "modal-block");
                    n ? r.css(i, "z-index", n.zIndex - 1) : i && (i.parentNode.removeChild(i), c = !1), 
                    u.currentZIndex = t;
                }
                function n(e, t) {
                    for (;e; ) {
                        if (e == t) return !0;
                        e = e.parent();
                    }
                }
                function i(e) {
                    function t(t, n) {
                        for (var r, i = 0; i < s.length; i++) if (s[i] != e) for (r = s[i].parent(); r && (r = r.parent()); ) r == e && s[i].fixed(t).moveBy(0, n).repaint();
                    }
                    var n = r.getViewPort().y;
                    e.settings.autofix && (e._fixed ? e._autoFixY > n && (e.fixed(!1).layoutRect({
                        y: e._autoFixY
                    }).repaint(), t(!1, e._autoFixY - n)) : (e._autoFixY = e.layoutRect().y, e._autoFixY < n && (e.fixed(!0).layoutRect({
                        y: 0
                    }).repaint(), t(!0, n - e._autoFixY))));
                }
                var d = this;
                d._super(e), d._eventsRoot = d, d.addClass("floatpanel"), e.autohide && (o || (o = function(e) {
                    var t, r = d.getParentCtrl(e.target);
                    for (t = s.length; t--; ) {
                        var i = s[t];
                        if (i.settings.autohide) {
                            if (r && (n(r, i) || i.parent() === r)) continue;
                            e = i.fire("autohide", {
                                target: e.target
                            }), e.isDefaultPrevented() || i.hide();
                        }
                    }
                }, r.on(document, "click", o)), s.push(d)), e.autofix && (a || (a = function() {
                    var e;
                    for (e = s.length; e--; ) i(s[e]);
                }, r.on(window, "scroll", a)), d.on("move", function() {
                    i(this);
                })), d.on("postrender show", function(e) {
                    if (e.control == d) {
                        var n, i = d.classPrefix;
                        d.modal && !c && (n = r.createFragment('<div id="' + i + 'modal-block" class="' + i + "reset " + i + 'fade"></div>'), 
                        n = n.firstChild, d.getContainerElm().appendChild(n), setTimeout(function() {
                            r.addClass(n, i + "in"), r.addClass(d.getEl(), i + "in");
                        }, 0), c = !0), l.push(d), t();
                    }
                }), d.on("close hide", function(e) {
                    if (e.control == d) {
                        for (var n = l.length; n--; ) l[n] === d && l.splice(n, 1);
                        t();
                    }
                }), d.on("show", function() {
                    d.parents().each(function(e) {
                        return e._fixed ? (d.fixed(!0), !1) : void 0;
                    });
                }), e.popover && (d._preBodyHtml = '<div class="' + d.classPrefix + 'arrow"></div>', 
                d.addClass("popover").addClass("bottom").addClass("start"));
            },
            fixed: function(e) {
                var t = this;
                if (t._fixed != e) {
                    if (t._rendered) {
                        var n = r.getViewPort();
                        e ? t.layoutRect().y -= n.y : t.layoutRect().y += n.y;
                    }
                    t.toggleClass("fixed", e), t._fixed = e;
                }
                return t;
            },
            show: function() {
                var e = this, t, n = e._super();
                for (t = s.length; t-- && s[t] !== e; ) ;
                return -1 === t && s.push(e), n;
            },
            hide: function() {
                return i(this), this._super();
            },
            hideAll: function() {
                u.hideAll();
            },
            close: function() {
                var e = this;
                return e.fire("close"), e.remove();
            },
            remove: function() {
                i(this), this._super();
            }
        });
        return u.hideAll = function() {
            for (var e = s.length; e--; ) {
                var t = s[e];
                t.settings.autohide && (t.fire("cancel", {}, !1), t.hide(), s.splice(e, 1));
            }
        }, u;
    }), r(J, [ z ], function(e) {
        return function(t) {
            function n() {
                if (!h) if (h = [], d.find) d.find("*").each(function(e) {
                    e.canFocus && h.push(e.getEl());
                }); else for (var e = d.getEl().getElementsByTagName("*"), t = 0; t < e.length; t++) e[t].id && e[t] && h.push(e[t]);
            }
            function r() {
                return document.getElementById(m);
            }
            function i(e) {
                return e = e || r(), e && e.getAttribute("role");
            }
            function o(e) {
                for (var t, n = e || r(); n = n.parentNode; ) if (t = i(n)) return t;
            }
            function a(e) {
                var t = document.getElementById(m);
                return t ? t.getAttribute("aria-" + e) : void 0;
            }
            function s() {
                var n = r();
                if (!n || "TEXTAREA" != n.nodeName && "text" != n.type) return t.onAction ? t.onAction(m) : e.fire(r(), "click", {
                    keyboard: !0
                }), !0;
            }
            function l() {
                var e;
                t.onCancel ? ((e = r()) && e.blur(), t.onCancel()) : t.root.fire("cancel");
            }
            function c(e) {
                function r(e) {
                    for (var t = d ? d.getEl() : document.body; e && e != t; ) {
                        if ("none" == e.style.display) return !1;
                        e = e.parentNode;
                    }
                    return !0;
                }
                var i = -1, o, a, l = [];
                for (n(), a = l.length, a = 0; a < h.length; a++) r(h[a]) && l.push(h[a]);
                for (a = l.length; a--; ) if (l[a].id === m) {
                    i = a;
                    break;
                }
                i += e, 0 > i ? i = l.length - 1 : i >= l.length && (i = 0), o = l[i], o.focus(), 
                m = o.id, t.actOnFocus && s();
            }
            function u() {
                var e, r;
                for (r = i(t.root.getEl()), n(), e = h.length; e--; ) if ("toolbar" == r && h[e].id === m) return h[e].focus(), 
                void 0;
                h[0].focus();
            }
            var d = t.root, f = t.enableUpDown !== !1, p = t.enableLeftRight !== !1, h = t.items, m;
            return d.on("keydown", function(e) {
                var n = 37, r = 39, u = 38, d = 40, h = 27, m = 14, g = 13, v = 32, y = 9, b;
                switch (e.keyCode) {
                  case n:
                    p && (t.leftAction ? t.leftAction() : c(-1), b = !0);
                    break;

                  case r:
                    p && ("menuitem" == i() && "menu" == o() ? a("haspopup") && s() : c(1), b = !0);
                    break;

                  case u:
                    f && (c(-1), b = !0);
                    break;

                  case d:
                    f && ("menuitem" == i() && "menubar" == o() ? s() : "button" == i() && a("haspopup") ? s() : c(1), 
                    b = !0);
                    break;

                  case y:
                    b = !0, e.shiftKey ? c(-1) : c(1);
                    break;

                  case h:
                    b = !0, l();
                    break;

                  case m:
                  case g:
                  case v:
                    b = s();
                }
                b && (e.stopPropagation(), e.preventDefault());
            }), d.on("focusin", function(e) {
                n(), m = e.target.id;
            }), {
                moveFocus: c,
                focusFirst: u,
                cancel: l
            };
        };
    }), r(Q, [ X, K, z, J, $ ], function(e, t, n, r, i) {
        var o = e.extend({
            modal: !0,
            Defaults: {
                border: 1,
                layout: "flex",
                containerCls: "panel",
                role: "dialog",
                callbacks: {
                    submit: function() {
                        this.fire("submit", {
                            data: this.toJSON()
                        });
                    },
                    close: function() {
                        this.close();
                    }
                }
            },
            init: function(e) {
                var n = this;
                n._super(e), n.addClass("window"), n._fixed = !0, e.buttons && (n.statusbar = new t({
                    layout: "flex",
                    border: "1 0 0 0",
                    spacing: 3,
                    padding: 10,
                    align: "center",
                    pack: "end",
                    defaults: {
                        type: "button"
                    },
                    items: e.buttons
                }), n.statusbar.addClass("foot"), n.statusbar.parent(n)), n.on("click", function(e) {
                    -1 != e.target.className.indexOf(n.classPrefix + "close") && n.close();
                }), n.aria("label", e.title), n._fullscreen = !1;
            },
            recalc: function() {
                var e = this, t = e.statusbar, r, i, o;
                e._fullscreen && (e.layoutRect(n.getWindowSize()), e.layoutRect().contentH = e.layoutRect().innerH), 
                e._super(), r = e.layoutRect(), e.settings.title && !e._fullscreen && (i = r.headerW, 
                i > r.w && (e.layoutRect({
                    w: i
                }), o = !0)), t && (t.layoutRect({
                    w: e.layoutRect().innerW
                }).recalc(), i = t.layoutRect().minW + r.deltaW, i > r.w && (e.layoutRect({
                    w: i
                }), o = !0)), o && e.recalc();
            },
            initLayoutRect: function() {
                var e = this, t = e._super(), r = 0, i;
                e.settings.title && !e._fullscreen && (i = e.getEl("head"), t.headerW = i.offsetWidth, 
                t.headerH = i.offsetHeight, r += t.headerH), e.statusbar && (r += e.statusbar.layoutRect().h), 
                t.deltaH += r, t.minH += r, t.h += r;
                var o = n.getWindowSize();
                return t.x = Math.max(0, o.w / 2 - t.w / 2), t.y = Math.max(0, o.h / 2 - t.h / 2), 
                t;
            },
            renderHtml: function() {
                var e = this, t = e._layout, n = e._id, r = e.classPrefix, i = e.settings, o = "", a = "", s = i.html;
                return e.preRender(), t.preRender(e), i.title && (o = '<div id="' + n + '-head" class="' + r + 'window-head">' + '<div class="' + r + 'title">' + e.encode(i.title) + "</div>" + '<button type="button" class="' + r + 'close" aria-hidden="true">&times;</button>' + '<div id="' + n + '-dragh" class="' + r + 'dragh"></div>' + "</div>"), 
                i.url && (s = '<iframe src="' + i.url + '" tabindex="-1"></iframe>'), "undefined" == typeof s && (s = t.renderHtml(e)), 
                e.statusbar && (a = e.statusbar.renderHtml()), '<div id="' + n + '" class="' + e.classes() + '" hideFocus="1" tabIndex="-1">' + o + '<div id="' + n + '-body" class="' + e.classes("body") + '">' + s + "</div>" + a + "</div>";
            },
            fullscreen: function(e) {
                var t = this, r = document.documentElement, i, o = t.classPrefix, a;
                if (e != t._fullscreen) if (n.on(window, "resize", function() {
                    var e;
                    if (t._fullscreen) if (i) t._timer || (t._timer = setTimeout(function() {
                        var e = n.getWindowSize();
                        t.moveTo(0, 0).resizeTo(e.w, e.h), t._timer = 0;
                    }, 50)); else {
                        e = new Date().getTime();
                        var r = n.getWindowSize();
                        t.moveTo(0, 0).resizeTo(r.w, r.h), new Date().getTime() - e > 50 && (i = !0);
                    }
                }), a = t.layoutRect(), t._fullscreen = e, e) {
                    t._initial = {
                        x: a.x,
                        y: a.y,
                        w: a.w,
                        h: a.h
                    }, t._borderBox = t.parseBox("0"), t.getEl("head").style.display = "none", a.deltaH -= a.headerH + 2, 
                    n.addClass(r, o + "fullscreen"), n.addClass(document.body, o + "fullscreen"), t.addClass("fullscreen");
                    var s = n.getWindowSize();
                    t.moveTo(0, 0).resizeTo(s.w, s.h);
                } else t._borderBox = t.parseBox(t.settings.border), t.getEl("head").style.display = "", 
                a.deltaH += a.headerH, n.removeClass(r, o + "fullscreen"), n.removeClass(document.body, o + "fullscreen"), 
                t.removeClass("fullscreen"), t.moveTo(t._initial.x, t._initial.y).resizeTo(t._initial.w, t._initial.h);
                return t.reflow();
            },
            postRender: function() {
                var e = this, t = [], n, o, a;
                setTimeout(function() {
                    e.addClass("in");
                }, 0), e.keyboardNavigation = new r({
                    root: e,
                    enableLeftRight: !1,
                    enableUpDown: !1,
                    items: t,
                    onCancel: function() {
                        e.close();
                    }
                }), e.find("*").each(function(e) {
                    e.canFocus && (o = o || e.settings.autofocus, n = n || e, "filepicker" == e.type ? (t.push(e.getEl("inp")), 
                    e.getEl("open") && t.push(e.getEl("open").firstChild)) : t.push(e.getEl()));
                }), e.statusbar && e.statusbar.find("*").each(function(e) {
                    e.canFocus && (o = o || e.settings.autofocus, n = n || e, t.push(e.getEl()));
                }), e._super(), e.statusbar && e.statusbar.postRender(), !o && n && n.focus(), this.dragHelper = new i(e._id + "-dragh", {
                    start: function() {
                        a = {
                            x: e.layoutRect().x,
                            y: e.layoutRect().y
                        };
                    },
                    drag: function(t) {
                        e.moveTo(a.x + t.deltaX, a.y + t.deltaY);
                    }
                }), e.on("submit", function(t) {
                    t.isDefaultPrevented() || e.close();
                });
            },
            submit: function() {
                var e = this.getParentCtrl(document.activeElement);
                return e && e.blur(), this.fire("submit", {
                    data: this.toJSON()
                });
            },
            remove: function() {
                var e = this;
                e._super(), e.dragHelper.destroy(), e.statusbar && this.statusbar.remove();
            }
        });
        return o;
    }), r(Z, [ Q ], function(e) {
        var t = e.extend({
            init: function(e) {
                e = {
                    border: 1,
                    padding: 20,
                    layout: "flex",
                    pack: "center",
                    align: "center",
                    containerCls: "panel",
                    autoScroll: !0,
                    buttons: {
                        type: "button",
                        text: "Ok",
                        action: "ok"
                    },
                    items: {
                        type: "label",
                        multiline: !0,
                        maxWidth: 500,
                        maxHeight: 200
                    }
                }, this._super(e);
            },
            Statics: {
                OK: 1,
                OK_CANCEL: 2,
                YES_NO: 3,
                YES_NO_CANCEL: 4,
                msgBox: function(n) {
                    var r, i = n.callback || function() {};
                    switch (n.buttons) {
                      case t.OK_CANCEL:
                        r = [ {
                            type: "button",
                            text: "Ok",
                            subtype: "primary",
                            onClick: function(e) {
                                e.control.parents()[1].close(), i(!0);
                            }
                        }, {
                            type: "button",
                            text: "Cancel",
                            onClick: function(e) {
                                e.control.parents()[1].close(), i(!1);
                            }
                        } ];
                        break;

                      case t.YES_NO:
                        r = [ {
                            type: "button",
                            text: "Ok",
                            subtype: "primary",
                            onClick: function(e) {
                                e.control.parents()[1].close(), i(!0);
                            }
                        } ];
                        break;

                      case t.YES_NO_CANCEL:
                        r = [ {
                            type: "button",
                            text: "Ok",
                            subtype: "primary",
                            onClick: function(e) {
                                e.control.parents()[1].close();
                            }
                        } ];
                        break;

                      default:
                        r = [ {
                            type: "button",
                            text: "Ok",
                            subtype: "primary",
                            onClick: function(e) {
                                e.control.parents()[1].close();
                            }
                        } ];
                    }
                    return new e({
                        padding: 20,
                        x: n.x,
                        y: n.y,
                        minWidth: 300,
                        minHeight: 100,
                        layout: "flex",
                        pack: "center",
                        align: "center",
                        buttons: r,
                        title: n.title,
                        items: {
                            type: "label",
                            multiline: !0,
                            maxWidth: 500,
                            maxHeight: 200,
                            text: n.text
                        },
                        onClose: n.onClose
                    }).renderTo(document.body).reflow();
                },
                alert: function(e, n) {
                    return "string" == typeof e && (e = {
                        text: e
                    }), e.callback = n, t.msgBox(e);
                },
                confirm: function(e, n) {
                    return "string" == typeof e && (e = {
                        text: e
                    }), e.callback = n, e.buttons = t.OK_CANCEL, t.msgBox(e);
                }
            }
        });
        return t;
    }), r(et, [ Q, Z ], function(e, t) {
        return function(n) {
            var r = this, i = [];
            r.windows = i, r.open = function(t, r) {
                var o;
                return t.url = t.url || t.file, t.url && (t.width = parseInt(t.width || 320, 10), 
                t.height = parseInt(t.height || 240, 10)), t.body && (t.items = {
                    defaults: t.defaults,
                    type: t.bodyType || "form",
                    items: t.body
                }), t.url || t.buttons || (t.buttons = [ {
                    text: "Ok",
                    subtype: "primary",
                    onclick: function() {
                        o.find("form")[0].submit(), o.close();
                    }
                }, {
                    text: "Cancel",
                    onclick: function() {
                        o.close();
                    }
                } ]), o = new e(t), i.push(o), o.on("close", function() {
                    for (var e = i.length; e--; ) i[e] === o && i.splice(e, 1);
                    n.focus();
                }), t.data && o.on("postRender", function() {
                    this.find("*").each(function(e) {
                        var n = e.name();
                        n in t.data && e.value(t.data[n]);
                    });
                }), o.params = r || {}, n.nodeChanged(), o.renderTo(document.body).reflow();
            }, r.alert = function(e, n, r) {
                t.alert(e, function() {
                    n.call(r || this);
                });
            }, r.confirm = function(e, n, r) {
                t.confirm(e, function(e) {
                    n.call(r || this, e);
                });
            }, r.close = function() {
                i.length && i[i.length - 1].close();
            }, r.getParams = function() {
                return i.length ? i[i.length - 1].params : null;
            }, r.setParams = function(e) {
                i.length && (i[i.length - 1].params = e);
            };
        };
    }), r(tt, [ T, B, C, m, g, p ], function(e, t, n, r, i, o) {
        return function(a) {
            function s(e, t) {
                try {
                    a.getDoc().execCommand(e, !1, t);
                } catch (n) {}
            }
            function l() {
                var e = a.getDoc().documentMode;
                return e ? e : 6;
            }
            function c(e) {
                return e.isDefaultPrevented();
            }
            function u() {
                function t(e) {
                    function t() {
                        if (3 == l.nodeType) {
                            if (e && c == l.length) return !0;
                            if (!e && 0 === c) return !0;
                        }
                    }
                    var n, r, i, s, l, c, u;
                    n = F.getRng();
                    var d = [ n.startContainer, n.startOffset, n.endContainer, n.endOffset ];
                    if (n.collapsed || (e = !0), l = n[(e ? "start" : "end") + "Container"], c = n[(e ? "start" : "end") + "Offset"], 
                    3 == l.nodeType && (r = I.getParent(n.startContainer, I.isBlock), e && (r = I.getNext(r, I.isBlock)), 
                    !r || !t() && n.collapsed || (i = I.create("em", {
                        id: "__mceDel"
                    }), H(o.grep(r.childNodes), function(e) {
                        i.appendChild(e);
                    }), r.appendChild(i))), n = I.createRng(), n.setStart(d[0], d[1]), n.setEnd(d[2], d[3]), 
                    F.setRng(n), a.getDoc().execCommand(e ? "ForwardDelete" : "Delete", !1, null), i) {
                        for (s = F.getBookmark(); u = I.get("__mceDel"); ) I.remove(u, !0);
                        F.moveToBookmark(s);
                    }
                }
                a.on("keydown", function(n) {
                    var r;
                    r = n.keyCode == O, c(n) || !r && n.keyCode != P || e.modifierPressed(n) || (n.preventDefault(), 
                    t(r));
                }), a.addCommand("Delete", function() {
                    t();
                });
            }
            function d() {
                function e(e) {
                    var t = I.create("body"), n = e.cloneContents();
                    return t.appendChild(n), F.serializer.serialize(t, {
                        format: "html"
                    });
                }
                function t(t) {
                    var n = e(t), r = I.createRng();
                    r.selectNode(a.getBody());
                    var i = e(r);
                    return n === i;
                }
                a.on("keydown", function(e) {
                    var n = e.keyCode, r;
                    if (!c(e) && (n == O || n == P)) {
                        if (r = a.selection.isCollapsed(), r && !I.isEmpty(a.getBody())) return;
                        if (q && !r) return;
                        if (!r && !t(a.selection.getRng())) return;
                        e.preventDefault(), a.setContent(""), a.selection.setCursorLocation(a.getBody(), 0), 
                        a.nodeChanged();
                    }
                });
            }
            function f() {
                a.on("keydown", function(t) {
                    !c(t) && 65 == t.keyCode && e.metaKeyPressed(t) && (t.preventDefault(), a.execCommand("SelectAll"));
                });
            }
            function p() {
                a.settings.content_editable || (I.bind(a.getDoc(), "focusin", function() {
                    F.setRng(F.getRng());
                }), I.bind(a.getDoc(), "mousedown", function(e) {
                    e.target == a.getDoc().documentElement && (a.getWin().focus(), F.setRng(F.getRng()));
                }));
            }
            function h() {
                a.on("keydown", function(e) {
                    if (!c(e) && e.keyCode === P && F.isCollapsed() && 0 === F.getRng(!0).startOffset) {
                        var t = F.getNode(), n = t.previousSibling;
                        n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (I.remove(n), e.preventDefault());
                    }
                });
            }
            function m() {
                window.Range.prototype.getClientRects || a.on("mousedown", function(e) {
                    if (!c(e) && "HTML" === e.target.nodeName) {
                        var t = a.getBody();
                        t.blur(), setTimeout(function() {
                            t.focus();
                        }, 0);
                    }
                });
            }
            function g() {
                a.on("click", function(e) {
                    e = e.target, /^(IMG|HR)$/.test(e.nodeName) && F.getSel().setBaseAndExtent(e, 0, e, 1), 
                    "A" == e.nodeName && I.hasClass(e, "mceItemAnchor") && F.select(e), a.nodeChanged();
                });
            }
            function v() {
                function e() {
                    var e = I.getAttribs(F.getStart().cloneNode(!1));
                    return function() {
                        var t = F.getStart();
                        t !== a.getBody() && (I.setAttrib(t, "style", null), H(e, function(e) {
                            t.setAttributeNode(e.cloneNode(!0));
                        }));
                    };
                }
                function t() {
                    return !F.isCollapsed() && I.getParent(F.getStart(), I.isBlock) != I.getParent(F.getEnd(), I.isBlock);
                }
                a.on("keypress", function(n) {
                    var r;
                    return c(n) || 8 != n.keyCode && 46 != n.keyCode || !t() ? void 0 : (r = e(), a.getDoc().execCommand("delete", !1, null), 
                    r(), n.preventDefault(), !1);
                }), I.bind(a.getDoc(), "cut", function(n) {
                    var r;
                    !c(n) && t() && (r = e(), setTimeout(function() {
                        r();
                    }, 0));
                });
            }
            function y() {
                var e, n;
                a.on("selectionchange", function() {
                    n && (clearTimeout(n), n = 0), n = window.setTimeout(function() {
                        var n = F.getRng();
                        e && t.compareRanges(n, e) || (a.nodeChanged(), e = n);
                    }, 50);
                });
            }
            function b() {
                document.body.setAttribute("role", "application");
            }
            function C() {
                a.on("keydown", function(e) {
                    if (!c(e) && e.keyCode === P && F.isCollapsed() && 0 === F.getRng(!0).startOffset) {
                        var t = F.getNode().previousSibling;
                        if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), 
                        !1;
                    }
                });
            }
            function x() {
                l() > 7 || (s("RespectVisibilityInDesign", !0), a.contentStyles.push(".mceHideBrInPre pre br {display: none}"), 
                I.addClass(a.getBody(), "mceHideBrInPre"), z.addNodeFilter("pre", function(e) {
                    for (var t = e.length, r, i, o, a; t--; ) for (r = e[t].getAll("br"), i = r.length; i--; ) o = r[i], 
                    a = o.prev, a && 3 === a.type && "\n" != a.value.charAt(a.value - 1) ? a.value += "\n" : o.parent.insert(new n("#text", 3), o, !0).value = "\n";
                }), V.addNodeFilter("pre", function(e) {
                    for (var t = e.length, n, r, i, o; t--; ) for (n = e[t].getAll("br"), r = n.length; r--; ) i = n[r], 
                    o = i.prev, o && 3 == o.type && (o.value = o.value.replace(/\r?\n$/, ""));
                }));
            }
            function w() {
                I.bind(a.getBody(), "mouseup", function() {
                    var e, t = F.getNode();
                    "IMG" == t.nodeName && ((e = I.getStyle(t, "width")) && (I.setAttrib(t, "width", e.replace(/[^0-9%]+/g, "")), 
                    I.setStyle(t, "width", "")), (e = I.getStyle(t, "height")) && (I.setAttrib(t, "height", e.replace(/[^0-9%]+/g, "")), 
                    I.setStyle(t, "height", "")));
                });
            }
            function _() {
                a.on("keydown", function(t) {
                    var n, r, i, o, s, l, u, d;
                    if (n = t.keyCode == O, !c(t) && (n || t.keyCode == P) && !e.modifierPressed(t) && (r = F.getRng(), 
                    i = r.startContainer, o = r.startOffset, u = r.collapsed, 3 == i.nodeType && i.nodeValue.length > 0 && (0 === o && !u || u && o === (n ? 0 : 1)))) {
                        if (l = i.previousSibling, l && "IMG" == l.nodeName) return;
                        d = a.schema.getNonEmptyElements(), t.preventDefault(), s = I.create("br", {
                            id: "__tmp"
                        }), i.parentNode.insertBefore(s, i), a.getDoc().execCommand(n ? "ForwardDelete" : "Delete", !1, null), 
                        i = F.getRng().startContainer, l = i.previousSibling, l && 1 == l.nodeType && !I.isBlock(l) && I.isEmpty(l) && !d[l.nodeName.toLowerCase()] && I.remove(l), 
                        I.remove("__tmp");
                    }
                });
            }
            function N() {
                a.on("keydown", function(t) {
                    var n, r, i, o, s;
                    if (!c(t) && t.keyCode == e.BACKSPACE && (n = F.getRng(), r = n.startContainer, 
                    i = n.startOffset, o = I.getRoot(), s = r, n.collapsed && 0 === i)) {
                        for (;s && s.parentNode && s.parentNode.firstChild == s && s.parentNode != o; ) s = s.parentNode;
                        "BLOCKQUOTE" === s.tagName && (a.formatter.toggle("blockquote", null, s), n = I.createRng(), 
                        n.setStart(r, 0), n.setEnd(r, 0), F.setRng(n));
                    }
                });
            }
            function E() {
                function e() {
                    a._refreshContentEditable(), s("StyleWithCSS", !1), s("enableInlineTableEditing", !1), 
                    W.object_resizing || s("enableObjectResizing", !1);
                }
                W.readonly || a.on("BeforeExecCommand MouseDown", e);
            }
            function S() {
                function e() {
                    H(I.select("a"), function(e) {
                        var t = e.parentNode, n = I.getRoot();
                        if (t.lastChild === e) {
                            for (;t && !I.isBlock(t); ) {
                                if (t.parentNode.lastChild !== t || t === n) return;
                                t = t.parentNode;
                            }
                            I.add(t, "br", {
                                "data-mce-bogus": 1
                            });
                        }
                    });
                }
                a.on("SetContent ExecCommand", function(t) {
                    ("setcontent" == t.type || "mceInsertLink" === t.command) && e();
                });
            }
            function k() {
                W.forced_root_block && a.on("init", function() {
                    s("DefaultParagraphSeparator", W.forced_root_block);
                });
            }
            function T() {
                a.on("Undo Redo SetContent", function(e) {
                    e.initial || a.execCommand("mceRepaint");
                });
            }
            function R() {
                a.on("keydown", function(e) {
                    var t;
                    c(e) || e.keyCode != P || (t = a.getDoc().selection.createRange(), t && t.item && (e.preventDefault(), 
                    a.undoManager.beforeChange(), I.remove(t.item(0)), a.undoManager.add()));
                });
            }
            function A() {
                var e;
                l() >= 10 && (e = "", H("p div h1 h2 h3 h4 h5 h6".split(" "), function(t, n) {
                    e += (n > 0 ? "," : "") + t + ":empty";
                }), a.contentStyles.push(e + "{padding-right: 1px !important}"));
            }
            function B() {
                l() < 9 && (z.addNodeFilter("noscript", function(e) {
                    for (var t = e.length, n, r; t--; ) n = e[t], r = n.firstChild, r && n.attr("data-mce-innertext", r.value);
                }), V.addNodeFilter("noscript", function(e) {
                    for (var t = e.length, i, o, a; t--; ) i = e[t], o = e[t].firstChild, o ? o.value = r.decode(o.value) : (a = i.attributes.map["data-mce-innertext"], 
                    a && (i.attr("data-mce-innertext", null), o = new n("#text", 3), o.value = a, o.raw = !0, 
                    i.append(o)));
                }));
            }
            function L() {
                function e(e, t) {
                    var n = i.createTextRange();
                    try {
                        n.moveToPoint(e, t);
                    } catch (r) {
                        n = null;
                    }
                    return n;
                }
                function t(t) {
                    var r;
                    t.button ? (r = e(t.x, t.y), r && (r.compareEndPoints("StartToStart", a) > 0 ? r.setEndPoint("StartToStart", a) : r.setEndPoint("EndToEnd", a), 
                    r.select())) : n();
                }
                function n() {
                    var e = r.selection.createRange();
                    a && !e.item && 0 === e.compareEndPoints("StartToEnd", e) && a.select(), I.unbind(r, "mouseup", n), 
                    I.unbind(r, "mousemove", t), a = o = 0;
                }
                var r = I.doc, i = r.body, o, a, s;
                r.documentElement.unselectable = !0, I.bind(r, "mousedown contextmenu", function(i) {
                    if ("HTML" === i.target.nodeName) {
                        if (o && n(), s = r.documentElement, s.scrollHeight > s.clientHeight) return;
                        o = 1, a = e(i.x, i.y), a && (I.bind(r, "mouseup", n), I.bind(r, "mousemove", t), 
                        I.win.focus(), a.select());
                    }
                });
            }
            function M() {
                a.on("keyup focusin", function(t) {
                    65 == t.keyCode && e.metaKeyPressed(t) || F.normalize();
                });
            }
            function D() {
                a.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}");
            }
            var H = o.each, P = e.BACKSPACE, O = e.DELETE, I = a.dom, F = a.selection, W = a.settings, z = a.parser, V = a.serializer, U = i.gecko, q = i.ie, $ = i.webkit;
            C(), N(), d(), M(), $ && (_(), u(), p(), g(), k(), i.iOS ? y() : f()), q && (h(), 
            b(), x(), w(), R(), A(), B(), L()), U && (h(), m(), v(), E(), S(), T(), D());
        };
    }), r(nt, [ p ], function(e) {
        function t() {
            return !1;
        }
        function n() {
            return !0;
        }
        var r = "__bindings", i = e.makeMap("focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave keydown keypress keyup contextmenu dragend dragover draggesture dragdrop drop drag", " ");
        return {
            fire: function(e, i, o) {
                var a = this, s, l, c, u, d;
                if (e = e.toLowerCase(), i = i || {}, i.type = e, i.target || (i.target = a), i.preventDefault || (i.preventDefault = function() {
                    i.isDefaultPrevented = n;
                }, i.stopPropagation = function() {
                    i.isPropagationStopped = n;
                }, i.stopImmediatePropagation = function() {
                    i.isImmediatePropagationStopped = n;
                }, i.isDefaultPrevented = t, i.isPropagationStopped = t, i.isImmediatePropagationStopped = t), 
                a[r] && (s = a[r][e])) for (l = 0, c = s.length; c > l && (s[l] = u = s[l], !i.isImmediatePropagationStopped()); l++) if (u.call(a, i) === !1) return i.preventDefault(), 
                i;
                if (o !== !1 && a.parent) for (d = a.parent(); d && !i.isPropagationStopped(); ) d.fire(e, i, !1), 
                d = d.parent();
                return i;
            },
            on: function(e, t) {
                var n = this, o, a, s, l;
                if (t === !1 && (t = function() {
                    return !1;
                }), t) for (s = e.toLowerCase().split(" "), l = s.length; l--; ) e = s[l], o = n[r], 
                o || (o = n[r] = {}), a = o[e], a || (a = o[e] = [], n.bindNative && i[e] && n.bindNative(e)), 
                a.push(t);
                return n;
            },
            off: function(e, t) {
                var n = this, o, a = n[r], s, l, c, u;
                if (a) if (e) for (c = e.toLowerCase().split(" "), o = c.length; o--; ) {
                    if (e = c[o], s = a[e], !e) {
                        for (l in a) a[e].length = 0;
                        return n;
                    }
                    if (s) {
                        if (t) for (u = s.length; u--; ) s[u] === t && s.splice(u, 1); else s.length = 0;
                        !s.length && n.unbindNative && i[e] && (n.unbindNative(e), delete a[e]);
                    }
                } else {
                    if (n.unbindNative) for (e in a) n.unbindNative(e);
                    n[r] = [];
                }
                return n;
            }
        };
    }), r(rt, [ p, g ], function(e, t) {
        var n = e.each, r = e.explode, i = {
            f9: 120,
            f10: 121,
            f11: 122
        };
        return function(o) {
            var a = this, s = {};
            o.on("keyup keypress keydown", function(e) {
                (e.altKey || e.ctrlKey || e.metaKey) && n(s, function(n) {
                    var r = t.mac ? e.ctrlKey || e.metaKey : e.ctrlKey;
                    if (n.ctrl == r && n.alt == e.altKey && n.shift == e.shiftKey) return e.keyCode == n.keyCode || e.charCode && e.charCode == n.charCode ? (e.preventDefault(), 
                    "keydown" == e.type && n.func.call(n.scope), !0) : void 0;
                });
            }), a.add = function(t, a, l, c) {
                var u;
                return u = l, "string" == typeof l ? l = function() {
                    o.execCommand(u, !1, null);
                } : e.isArray(u) && (l = function() {
                    o.execCommand(u[0], u[1], u[2]);
                }), n(r(t.toLowerCase()), function(e) {
                    var t = {
                        func: l,
                        scope: c || o,
                        desc: o.translate(a),
                        alt: !1,
                        ctrl: !1,
                        shift: !1
                    };
                    n(r(e, "+"), function(e) {
                        switch (e) {
                          case "alt":
                          case "ctrl":
                          case "shift":
                            t[e] = !0;
                            break;

                          default:
                            t.charCode = e.charCodeAt(0), t.keyCode = i[e] || e.toUpperCase().charCodeAt(0);
                        }
                    }), s[(t.ctrl ? "ctrl" : "") + "," + (t.alt ? "alt" : "") + "," + (t.shift ? "shift" : "") + "," + t.keyCode] = t;
                }), !0;
            };
        };
    }), r(it, [ v, b, C, S, E, A, L, M, D, H, P, O, y, l, et, x, _, tt, g, p, nt, rt ], function(e, n, r, i, o, a, s, l, c, u, d, f, p, h, m, g, v, y, b, C, x, w) {
        function _(e, t) {
            return "selectionchange" == t || "drop" == t ? e.getDoc() : !e.inline && /^mouse|click|contextmenu/.test(t) ? e.getDoc() : e.getBody();
        }
        function N(e, t, r) {
            var i = this, o, a;
            o = i.documentBaseUrl = r.documentBaseURL, a = r.baseURI, i.settings = t = T({
                id: e,
                theme: "modern",
                delta_width: 0,
                delta_height: 0,
                popup_css: "",
                plugins: "",
                document_base_url: o,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_style_values: "xx-small,x-small,small,medium,large,x-large,xx-large",
                font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                padd_empty_editor: !0,
                render_ui: !0,
                indentation: "30px",
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: "simple",
                indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,li,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,option,optgroup,datalist",
                indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,li,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,option,optgroup,datalist",
                validate: !0,
                entity_encoding: "named",
                url_converter: i.convertURL,
                url_converter_scope: i,
                ie7_compat: !0
            }, t), n.settings = t, n.baseURL = r.baseURL, i.id = t.id = e, i.isNotDirty = !0, 
            i.plugins = {}, i.documentBaseURI = new f(t.document_base_url || o, {
                base_uri: a
            }), i.baseURI = a, i.contentCSS = [], i.contentStyles = [], i.shortcuts = new w(i), 
            i.execCommands = {}, i.queryStateCommands = {}, i.queryValueCommands = {}, i.loadedCSS = {}, 
            i.suffix = r.suffix, i.editorManager = r, i.inline = t.inline, i.execCallback("setup", i);
        }
        var E = e.DOM, S = n.ThemeManager, k = n.PluginManager, T = C.extend, R = C.each, A = C.explode, B = C.inArray, L = C.trim, M = C.resolve, D = h.Event, H = b.gecko, P = b.ie, O = b.opera;
        return N.prototype = {
            render: function() {
                function e() {
                    var e = p.ScriptLoader;
                    n.language && "en" != n.language && (n.language_url = t.editorManager.baseURL + "/langs/" + n.language + ".js"), 
                    n.language_url && e.add(n.language_url), n.theme && "function" != typeof n.theme && "-" != n.theme.charAt(0) && !S.urls[n.theme] && S.load(n.theme, "themes/" + n.theme + "/theme" + i + ".js"), 
                    C.isArray(n.plugins) && (n.plugins = n.plugins.join(" ")), R(n.external_plugins, function(e, t) {
                        k.load(t, e), n.plugins += " " + t;
                    }), R(n.plugins.split(/[ ,]/), function(e) {
                        if (e = L(e), e && !k.urls[e]) if ("-" == e.charAt(0)) {
                            e = e.substr(1, e.length);
                            var t = k.dependencies(e);
                            R(t, function(e) {
                                var t = {
                                    prefix: "plugins/",
                                    resource: e,
                                    suffix: "/plugin" + i + ".js"
                                };
                                e = k.createUrl(t, e), k.load(e.resource, e);
                            });
                        } else k.load(e, {
                            prefix: "plugins/",
                            resource: e,
                            suffix: "/plugin" + i + ".js"
                        });
                    }), e.loadQueue(function() {
                        t.removed || t.init();
                    });
                }
                var t = this, n = t.settings, r = t.id, i = t.suffix;
                if (!D.domLoaded) return E.bind(window, "ready", function() {
                    t.render();
                }), void 0;
                if (t.editorManager.settings = n, t.getElement() && b.contentEditable) {
                    n.inline ? t.inline = !0 : (t.orgVisibility = t.getElement().style.visibility, t.getElement().style.visibility = "hidden");
                    var o = t.getElement().form || E.getParent(r, "form");
                    o && (t.formElement = o, n.hidden_input && !/TEXTAREA|INPUT/i.test(t.getElement().nodeName) && E.insertAfter(E.create("input", {
                        type: "hidden",
                        name: r
                    }), r), t.formEventDelegate = function(e) {
                        t.fire(e.type, e);
                    }, E.bind(o, "submit reset", t.formEventDelegate), t.on("reset", function() {
                        t.setContent(t.startContent, {
                            format: "raw"
                        });
                    }), !n.submit_patch || o.submit.nodeType || o.submit.length || o._mceOldSubmit || (o._mceOldSubmit = o.submit, 
                    o.submit = function() {
                        return t.editorManager.triggerSave(), t.isNotDirty = !0, o._mceOldSubmit(o);
                    })), t.windowManager = new m(t), "xml" == n.encoding && t.on("GetContent", function(e) {
                        e.save && (e.content = E.encode(e.content));
                    }), n.add_form_submit_trigger && t.on("submit", function() {
                        t.initialized && (t.save(), t.isNotDirty = !0);
                    }), n.add_unload_trigger && (t._beforeUnload = function() {
                        !t.initialized || t.destroyed || t.isHidden() || t.save({
                            format: "raw",
                            no_events: !0
                        });
                    }, t.editorManager.on("BeforeUnload", t._beforeUnload)), e();
                }
            },
            init: function() {
                function e(n) {
                    var r = k.get(n), i, o;
                    i = k.urls[n] || t.documentBaseUrl.replace(/\/$/, ""), n = L(n), r && -1 === B(h, n) && (R(k.dependencies(n), function(t) {
                        e(t);
                    }), o = new r(t, i), t.plugins[n] = o, o.init && (o.init(t, i), h.push(n)));
                }
                var t = this, n = t.settings, r = t.getElement(), i, o, a, s, l, c, u, d, f, p, h = [];
                if (t.editorManager.add(t), n.aria_label = n.aria_label || E.getAttrib(r, "aria-label", t.getLang("aria.rich_text_area")), 
                n.theme && ("function" != typeof n.theme ? (n.theme = n.theme.replace(/-/, ""), 
                l = S.get(n.theme), t.theme = new l(t, S.urls[n.theme]), t.theme.init && t.theme.init(t, S.urls[n.theme] || t.documentBaseUrl.replace(/\/$/, ""))) : t.theme = n.theme), 
                R(n.plugins.replace(/\-/g, "").split(/[ ,]/), e), t.fire("BeforeRenderUI"), n.render_ui && t.theme && (t.orgDisplay = r.style.display, 
                "function" != typeof n.theme ? (i = n.width || r.style.width || r.offsetWidth, o = n.height || r.style.height || r.offsetHeight, 
                a = n.min_height || 100, f = /^[0-9\.]+(|px)$/i, f.test("" + i) && (i = Math.max(parseInt(i, 10) + (l.deltaWidth || 0), 100)), 
                f.test("" + o) && (o = Math.max(parseInt(o, 10) + (l.deltaHeight || 0), a)), l = t.theme.renderUI({
                    targetNode: r,
                    width: i,
                    height: o,
                    deltaWidth: n.delta_width,
                    deltaHeight: n.delta_height
                }), n.content_editable || (E.setStyles(l.sizeContainer || l.editorContainer, {
                    wi2dth: i,
                    h2eight: o
                }), o = (l.iframeHeight || o) + ("number" == typeof o ? l.deltaHeight || 0 : ""), 
                a > o && (o = a))) : (l = n.theme(t, r), l.editorContainer.nodeType && (l.editorContainer = l.editorContainer.id = l.editorContainer.id || t.id + "_parent"), 
                l.iframeContainer.nodeType && (l.iframeContainer = l.iframeContainer.id = l.iframeContainer.id || t.id + "_iframecontainer"), 
                o = l.iframeHeight || r.offsetHeight), t.editorContainer = l.editorContainer), n.content_css && R(A(n.content_css), function(e) {
                    t.contentCSS.push(t.documentBaseURI.toAbsolute(e));
                }), n.content_style && t.contentStyles.push(n.content_style), n.content_editable) return r = s = l = null, 
                t.initContentBody();
                for (document.domain && location.hostname != document.domain && (t.editorManager.relaxedDomain = document.domain), 
                t.iframeHTML = n.doctype + "<html><head>", n.document_base_url != t.documentBaseUrl && (t.iframeHTML += '<base href="' + t.documentBaseURI.getURI() + '" />'), 
                !b.caretAfter && n.ie7_compat && (t.iframeHTML += '<meta http-equiv="X-UA-Compatible" content="IE=7" />'), 
                t.iframeHTML += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', 
                p = 0; p < t.contentCSS.length; p++) {
                    var m = t.contentCSS[p];
                    t.iframeHTML += '<link type="text/css" rel="stylesheet" href="' + m + '" />', t.loadedCSS[m] = !0;
                }
                u = n.body_id || "tinymce", -1 != u.indexOf("=") && (u = t.getParam("body_id", "", "hash"), 
                u = u[t.id] || u), d = n.body_class || "", -1 != d.indexOf("=") && (d = t.getParam("body_class", "", "hash"), 
                d = d[t.id] || ""), t.iframeHTML += '</head><body id="' + u + '" class="mce-content-body ' + d + '" ' + "onload=\"window.parent.tinymce.get('" + t.id + "').fire('load');\"><br></body></html>", 
                t.editorManager.relaxedDomain && (P || O && parseFloat(window.opera.version()) < 11) && (c = 'javascript:(function(){document.open();document.domain="' + document.domain + '";' + 'var ed = window.parent.tinymce.get("' + t.id + '");document.write(ed.iframeHTML);' + "document.close();ed.initContentBody();})()"), 
                s = E.add(l.iframeContainer, "iframe", {
                    id: t.id + "_ifr",
                    src: c || 'javascript:""',
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: t.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
                    style: {
                        width: "100%",
                        height: o,
                        display: "block"
                    }
                }), t.contentAreaContainer = l.iframeContainer, l.editorContainer && (E.get(l.editorContainer).style.display = t.orgDisplay), 
                E.get(t.id).style.display = "none", E.setAttrib(t.id, "aria-hidden", !0), t.editorManager.relaxedDomain && c || t.initContentBody(), 
                r = s = l = null;
            },
            initContentBody: function() {
                var t = this, n = t.settings, o = E.get(t.id), f = t.getDoc(), p, h;
                n.inline || (t.getElement().style.visibility = t.orgVisibility), P && t.editorManager.relaxedDomain || n.content_editable || (f.open(), 
                f.write(t.iframeHTML), f.close(), t.editorManager.relaxedDomain && (f.domain = t.editorManager.relaxedDomain)), 
                n.content_editable && (t.on("remove", function() {
                    var e = this.getBody();
                    E.removeClass(e, "mce-content-body"), E.removeClass(e, "mce-edit-focus"), E.setAttrib(e, "tabIndex", null), 
                    E.setAttrib(e, "contentEditable", null);
                }), E.addClass(o, "mce-content-body"), o.tabIndex = -1, t.contentDocument = f = n.content_document || document, 
                t.contentWindow = n.content_window || window, t.bodyElement = o, n.content_document = n.content_window = null, 
                n.root_name = o.nodeName.toLowerCase()), p = t.getBody(), p.disabled = !0, n.readonly || (p.contentEditable = t.getParam("content_editable_state", !0)), 
                p.disabled = !1, t.schema = new g(n), t.dom = new e(f, {
                    keep_values: !0,
                    url_converter: t.convertURL,
                    url_converter_scope: t,
                    hex_colors: n.force_hex_style_colors,
                    class_filter: n.class_filter,
                    update_styles: !0,
                    root_element: n.content_editable ? t.id : null,
                    schema: t.schema,
                    onSetAttrib: function(e) {
                        t.fire("SetAttrib", e);
                    }
                }), t.parser = new v(n, t.schema), t.parser.addAttributeFilter("src,href,style", function(e, n) {
                    for (var r = e.length, i, o = t.dom, a, s; r--; ) i = e[r], a = i.attr(n), s = "data-mce-" + n, 
                    i.attributes.map[s] || ("style" === n ? i.attr(s, o.serializeStyle(o.parseStyle(a), i.name)) : i.attr(s, t.convertURL(a, n, i.name)));
                }), t.parser.addNodeFilter("script", function(e) {
                    for (var t = e.length, n; t--; ) n = e[t], n.attr("type", "mce-" + (n.attr("type") || "text/javascript"));
                }), t.parser.addNodeFilter("#cdata", function(e) {
                    for (var t = e.length, n; t--; ) n = e[t], n.type = 8, n.name = "#comment", n.value = "[CDATA[" + n.value + "]]";
                }), t.parser.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function(e) {
                    for (var n = e.length, i, o = t.schema.getNonEmptyElements(); n--; ) i = e[n], i.isEmpty(o) && (i.empty().append(new r("br", 1)).shortEnded = !0);
                }), t.serializer = new i(n, t), t.selection = new a(t.dom, t.getWin(), t.serializer, t), 
                t.formatter = new s(t), t.undoManager = new l(t), t.forceBlocks = new u(t), t.enterKey = new c(t), 
                t.editorCommands = new d(t), t.fire("PreInit"), n.browser_spellcheck || n.gecko_spellcheck || (f.body.spellcheck = !1, 
                E.setAttrib(p, "spellcheck", "false")), t.fire("PostRender"), t.quirks = y(t), n.directionality && (p.dir = n.directionality), 
                n.nowrap && (p.style.whiteSpace = "nowrap"), n.protect && t.on("BeforeSetContent", function(e) {
                    R(n.protect, function(t) {
                        e.content = e.content.replace(t, function(e) {
                            return "<!--mce:protected " + escape(e) + "-->";
                        });
                    });
                }), t.on("SetContent", function() {
                    t.addVisual(t.getBody());
                }), n.padd_empty_editor && t.on("PostProcess", function(e) {
                    e.content = e.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/, "");
                }), t.load({
                    initial: !0,
                    format: "html"
                }), t.startContent = t.getContent({
                    format: "raw"
                }), t.initialized = !0, R(t._pendingNativeEvents, function(e) {
                    t.dom.bind(_(t, e), e, function(e) {
                        t.fire(e.type, e);
                    });
                }), t.fire("init"), t.focus(!0), t.nodeChanged({
                    initial: !0
                }), t.execCallback("init_instance_callback", t), t.contentStyles.length > 0 && (h = "", 
                R(t.contentStyles, function(e) {
                    h += e + "\r\n";
                }), t.dom.addStyle(h)), R(t.contentCSS, function(e) {
                    t.loadedCSS[e] || (t.dom.loadCSS(e), t.loadedCSS[e] = !0);
                }), n.auto_focus && setTimeout(function() {
                    var e = t.editorManager.get(n.auto_focus);
                    e.selection.select(e.getBody(), 1), e.selection.collapse(1), e.getBody().focus(), 
                    e.getWin().focus();
                }, 100), o = f = p = null;
            },
            focus: function(e) {
                var t, n = this, r = n.selection, i = n.settings.content_editable, o, a, s = n.getDoc(), l;
                e || (o = r.getRng(), o.item && (a = o.item(0)), n._refreshContentEditable(), i || (n.getBody().focus(), 
                n.getWin().focus()), (H || i) && (l = n.getBody(), l.setActive ? l.setActive() : l.focus(), 
                i && r.normalize()), a && a.ownerDocument == s && (o = s.body.createControlRange(), 
                o.addElement(a), o.select())), n.editorManager.activeEditor != n && ((t = n.editorManager.activeEditor) && t.fire("deactivate", {
                    relatedTarget: n
                }), n.fire("activate", {
                    relatedTarget: t
                })), n.editorManager.activeEditor = n;
            },
            execCallback: function(e) {
                var t = this, n = t.settings[e], r;
                if (n) return t.callbackLookup && (r = t.callbackLookup[e]) && (n = r.func, r = r.scope), 
                "string" == typeof n && (r = n.replace(/\.\w+$/, ""), r = r ? M(r) : 0, n = M(n), 
                t.callbackLookup = t.callbackLookup || {}, t.callbackLookup[e] = {
                    func: n,
                    scope: r
                }), n.apply(r || t, Array.prototype.slice.call(arguments, 1));
            },
            translate: function(e) {
                var t = this.settings.language || "en", n = this.editorManager.i18n;
                return e ? n[t + "." + e] || e.replace(/\{\#([^\}]+)\}/g, function(e, r) {
                    return n[t + "." + r] || "{#" + r + "}";
                }) : "";
            },
            getLang: function(e, n) {
                return this.editorManager.i18n[(this.settings.language || "en") + "." + e] || (n !== t ? n : "{#" + e + "}");
            },
            getParam: function(e, t, n) {
                var r = e in this.settings ? this.settings[e] : t, i;
                return "hash" === n ? (i = {}, "string" == typeof r ? R(r.indexOf("=") > 0 ? r.split(/[;,](?![^=;,]*(?:[;,]|$))/) : r.split(","), function(e) {
                    e = e.split("="), i[L(e[0])] = e.length > 1 ? L(e[1]) : L(e);
                }) : i = r, i) : r;
            },
            nodeChanged: function() {
                var e = this, t = e.selection, n, r, i;
                e.initialized && !e.settings.disable_nodechange && (i = e.getBody(), n = t.getStart() || i, 
                n = P && n.ownerDocument != e.getDoc() ? e.getBody() : n, "IMG" == n.nodeName && t.isCollapsed() && (n = n.parentNode), 
                r = [], e.dom.getParent(n, function(e) {
                    return e === i ? !0 : (r.push(e), void 0);
                }), e.fire("NodeChange", {
                    element: n,
                    parents: r
                }));
            },
            addButton: function(e, t) {
                var n = this;
                t.cmd && (t.onclick = function() {
                    n.execCommand(t.cmd);
                }), t.text || t.icon || (t.icon = e), n.buttons = n.buttons || {}, t.tooltip = t.tooltip || t.title, 
                n.buttons[e] = t;
            },
            addMenuItem: function(e, t) {
                var n = this;
                t.cmd && (t.onclick = function() {
                    n.execCommand(t.cmd);
                }), n.menuItems = n.menuItems || {}, n.menuItems[e] = t;
            },
            addCommand: function(e, t, n) {
                this.execCommands[e] = {
                    func: t,
                    scope: n || this
                };
            },
            addQueryStateHandler: function(e, t, n) {
                this.queryStateCommands[e] = {
                    func: t,
                    scope: n || this
                };
            },
            addQueryValueHandler: function(e, t, n) {
                this.queryValueCommands[e] = {
                    func: t,
                    scope: n || this
                };
            },
            addShortcut: function(e, t, n, r) {
                this.shortcuts.add(e, t, n, r);
            },
            execCommand: function(e, t, n, r) {
                var i = this, o = 0, a;
                return /^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e) || r && r.skip_focus || i.focus(), 
                r = T({}, r), r = i.fire("BeforeExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), r.isDefaultPrevented() ? !1 : (a = i.execCommands[e]) && a.func.call(a.scope, t, n) !== !0 ? (i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0) : (R(i.plugins, function(r) {
                    return r.execCommand && r.execCommand(e, t, n) ? (i.fire("ExecCommand", {
                        command: e,
                        ui: t,
                        value: n
                    }), o = !0, !1) : void 0;
                }), o ? o : i.theme && i.theme.execCommand && i.theme.execCommand(e, t, n) ? (i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0) : i.editorCommands.execCommand(e, t, n) ? (i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0) : (i.getDoc().execCommand(e, t, n), i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), void 0));
            },
            queryCommandState: function(e) {
                var t = this, n, r;
                if (!t._isHidden()) {
                    if ((n = t.queryStateCommands[e]) && (r = n.func.call(n.scope), r !== !0)) return r;
                    if (r = t.editorCommands.queryCommandState(e), -1 !== r) return r;
                    try {
                        return t.getDoc().queryCommandState(e);
                    } catch (i) {}
                }
            },
            queryCommandValue: function(e) {
                var n = this, r, i;
                if (!n._isHidden()) {
                    if ((r = n.queryValueCommands[e]) && (i = r.func.call(r.scope), i !== !0)) return i;
                    if (i = n.editorCommands.queryCommandValue(e), i !== t) return i;
                    try {
                        return n.getDoc().queryCommandValue(e);
                    } catch (o) {}
                }
            },
            show: function() {
                var e = this;
                E.show(e.getContainer()), E.hide(e.id), e.load(), e.fire("show");
            },
            hide: function() {
                var e = this, t = e.getDoc();
                P && t && t.execCommand("SelectAll"), e.save(), E.hide(e.getContainer()), E.setStyle(e.id, "display", e.orgDisplay), 
                e.fire("hide");
            },
            isHidden: function() {
                return !E.isHidden(this.id);
            },
            setProgressState: function(e, t) {
                this.fire("ProgressState", {
                    state: e,
                    time: t
                });
            },
            load: function(e) {
                var n = this, r = n.getElement(), i;
                return r ? (e = e || {}, e.load = !0, i = n.setContent(r.value !== t ? r.value : r.innerHTML, e), 
                e.element = r, e.no_events || n.fire("LoadContent", e), e.element = r = null, i) : void 0;
            },
            save: function(e) {
                var t = this, n = t.getElement(), r, i;
                if (n && t.initialized) return e = e || {}, e.save = !0, e.element = n, r = e.content = t.getContent(e), 
                e.no_events || t.fire("SaveContent", e), r = e.content, /TEXTAREA|INPUT/i.test(n.nodeName) ? n.value = r : (n.innerHTML = r, 
                (i = E.getParent(t.id, "form")) && R(i.elements, function(e) {
                    return e.name == t.id ? (e.value = r, !1) : void 0;
                })), e.element = n = null, t.isNotDirty = !0, r;
            },
            setContent: function(e, t) {
                var n = this, r = n.getBody(), i;
                return t = t || {}, t.format = t.format || "html", t.set = !0, t.content = e, t.no_events || n.fire("BeforeSetContent", t), 
                e = t.content, P || 0 !== e.length && !/^\s+$/.test(e) ? ("raw" !== t.format && (e = new o({}, n.schema).serialize(n.parser.parse(e, {
                    isRootContent: !0
                }))), t.content = L(e), n.dom.setHTML(r, t.content), t.no_events || n.fire("SetContent", t), 
                n.settings.content_editable && document.activeElement !== n.getBody() || n.selection.normalize(), 
                t.content) : (i = n.settings.forced_root_block, e = i && n.schema.isValidChild(r.nodeName.toLowerCase(), i.toLowerCase()) ? "<" + i + '><br data-mce-bogus="1"></' + i + ">" : '<br data-mce-bogus="1">', 
                r.innerHTML = e, n.selection.select(r, !0), n.selection.collapse(!0), n.fire("SetContent", t), 
                void 0);
            },
            getContent: function(e) {
                var t = this, n, r = t.getBody();
                return e = e || {}, e.format = e.format || "html", e.get = !0, e.getInner = !0, 
                e.no_events || t.fire("BeforeGetContent", e), n = "raw" == e.format ? r.innerHTML : "text" == e.format ? r.innerText || r.textContent : t.serializer.serialize(r, e), 
                e.content = "text" != e.format ? L(n) : n, e.no_events || t.fire("GetContent", e), 
                e.content;
            },
            insertContent: function(e) {
                this.execCommand("mceInsertContent", !1, e);
            },
            isDirty: function() {
                return !this.isNotDirty;
            },
            getContainer: function() {
                var e = this;
                return e.container || (e.container = E.get(e.editorContainer || e.id + "_parent")), 
                e.container;
            },
            getContentAreaContainer: function() {
                return this.contentAreaContainer;
            },
            getElement: function() {
                return E.get(this.settings.content_element || this.id);
            },
            getWin: function() {
                var e = this, t;
                return e.contentWindow || (t = E.get(e.id + "_ifr"), t && (e.contentWindow = t.contentWindow)), 
                e.contentWindow;
            },
            getDoc: function() {
                var e = this, t;
                return e.contentDocument || (t = e.getWin(), t && (e.contentDocument = t.document)), 
                e.contentDocument;
            },
            getBody: function() {
                return this.bodyElement || this.getDoc().body;
            },
            convertURL: function(e, t, n) {
                var r = this, i = r.settings;
                return i.urlconverter_callback ? r.execCallback("urlconverter_callback", e, n, !0, t) : !i.convert_urls || n && "LINK" == n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : i.relative_urls ? r.documentBaseURI.toRelative(e) : e = r.documentBaseURI.toAbsolute(e, i.remove_script_host);
            },
            addVisual: function(e) {
                var n = this, r = n.settings, i = n.dom, o;
                e = e || n.getBody(), n.hasVisual === t && (n.hasVisual = r.visual), R(i.select("table,a", e), function(e) {
                    var t;
                    switch (e.nodeName) {
                      case "TABLE":
                        return o = r.visual_table_class || "mce-item-table", t = i.getAttrib(e, "border"), 
                        t && "0" != t || (n.hasVisual ? i.addClass(e, o) : i.removeClass(e, o)), void 0;

                      case "A":
                        return i.getAttrib(e, "href", !1) || (t = i.getAttrib(e, "name") || e.id, o = "mce-item-anchor", 
                        t && (n.hasVisual ? i.addClass(e, o) : i.removeClass(e, o))), void 0;
                    }
                }), n.fire("VisualAid", {
                    element: e,
                    hasVisual: n.hasVisual
                });
            },
            remove: function() {
                var e = this, t = e.getContainer(), n = e.getDoc();
                e.removed || (e.removed = 1, P && n && n.execCommand("SelectAll"), e.save(), E.setStyle(e.id, "display", e.orgDisplay), 
                e.settings.content_editable || (D.unbind(e.getWin()), D.unbind(e.getDoc())), D.unbind(e.getBody()), 
                D.unbind(t), e.fire("remove"), e.editorManager.remove(e), E.remove(t));
            },
            bindNative: function(e) {
                var t = this;
                t.initialized ? t.dom.bind(_(t, e), e, function(n) {
                    t.fire(e, n);
                }) : t._pendingNativeEvents ? t._pendingNativeEvents.push(e) : t._pendingNativeEvents = [ e ];
            },
            unbindNative: function(e) {
                var t = this;
                t.initialized && t.dom.unbind(e);
            },
            destroy: function(e) {
                var t = this, n;
                t.destroyed || (H && (D.unbind(t.getDoc()), D.unbind(t.getWin()), D.unbind(t.getBody())), 
                e || (t.editorManager.off("beforeunload", t._beforeUnload), t.theme && t.theme.destroy && t.theme.destroy(), 
                t.selection.destroy(), t.dom.destroy()), n = t.formElement, n && (n.submit = n._mceOldSubmit, 
                n._mceOldSubmit = null, E.unbind(n, "submit reset", t.formEventDelegate)), t.contentAreaContainer = t.formElement = t.container = null, 
                t.settings.content_element = t.bodyElement = t.contentDocument = t.contentWindow = null, 
                t.selection && (t.selection = t.selection.win = t.selection.dom = t.selection.dom.doc = null), 
                t.destroyed = 1);
            },
            _refreshContentEditable: function() {
                var e = this, t, n;
                e._isHidden() && (t = e.getBody(), n = t.parentNode, n.removeChild(t), n.appendChild(t), 
                t.focus());
            },
            _isHidden: function() {
                var e;
                return H ? (e = this.selection.getSel(), !e || !e.rangeCount || 0 === e.rangeCount) : 0;
            }
        }, T(N.prototype, x), N;
    }), r(ot, [], function() {
        var e = {};
        return {
            add: function(t, n) {
                for (var r in n) e[r] = n[r];
            },
            translate: function(t) {
                if ("undefined" == typeof t) return t;
                if ("string" != typeof t && t.raw) return t.raw;
                if (t.push) {
                    var n = t.slice(1);
                    t = (e[t[0]] || t[0]).replace(/\{([^\}]+)\}/g, function(e, t) {
                        return n[t];
                    });
                }
                return e[t] || t;
            },
            data: e
        };
    }), r(at, [ v, g ], function(e, t) {
        function n(r) {
            function i() {
                try {
                    return document.activeElement;
                } catch (e) {
                    return document.body;
                }
            }
            function o(o) {
                function a(t) {
                    return !!e.DOM.getParent(t, n.isEditorUIElement);
                }
                var s = o.editor, l, c;
                s.on("init", function() {
                    "onbeforedeactivate" in document ? s.dom.bind(s.getBody(), "beforedeactivate", function() {
                        var e = s.getDoc().selection;
                        l = e && e.createRange ? e.createRange() : s.selection.getRng();
                    }) : s.inline && (s.on("nodechange", function() {
                        for (var e, t = document.activeElement; t; ) {
                            if (t == s.getBody()) {
                                e = !0;
                                break;
                            }
                            t = t.parentNode;
                        }
                        e && (l = s.selection.getRng());
                    }), t.webkit && (c = function() {
                        var e = s.selection.getRng();
                        e.collapsed || (l = e);
                    }, e.DOM.bind(document, "selectionchange", c), s.on("remove", function() {
                        e.DOM.unbind(document, "selectionchange", c);
                    })));
                }), s.on("focusin", function() {
                    var e = r.focusedEditor;
                    s.selection.restoreRng && (s.selection.setRng(s.selection.restoreRng), s.selection.restoreRng = null), 
                    e != s && (e && e.fire("blur", {
                        focusedEditor: s
                    }), s.fire("focus", {
                        blurredEditor: e
                    }), s.focus(!1), r.focusedEditor = s);
                }), s.on("focusout", function() {
                    s.selection.restoreRng = l, window.setTimeout(function() {
                        var e = r.focusedEditor;
                        e != s && (s.selection.restoreRng = null), a(i()) || e != s || (s.fire("blur", {
                            focusedEditor: null
                        }), r.focusedEditor = null, s.selection.restoreRng = null);
                    }, 0);
                });
            }
            r.on("AddEditor", o);
        }
        return n.isEditorUIElement = function(e) {
            return -1 !== e.className.indexOf("mce-");
        }, n;
    }), r(st, [ it, v, O, g, p, nt, ot, at ], function(e, n, r, i, o, a, s, l) {
        var c = n.DOM, u = o.explode, d = o.each, f = o.extend, p = 0, h, m = {
            majorVersion: "4",
            minorVersion: "0",
            releaseDate: "2013-06-26",
            editors: [],
            i18n: s,
            activeEditor: null,
            setup: function() {
                var e = this, t, n, i = "", o;
                if (n = document.location.href.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), 
                /[\/\\]$/.test(n) || (n += "/"), o = window.tinymce || window.tinyMCEPreInit) t = o.base || o.baseURL, 
                i = o.suffix; else for (var a = document.getElementsByTagName("script"), s = 0; s < a.length; s++) {
                    var c = a[s].src;
                    if (/tinymce(\.jquery|)(\.min|\.dev|)\.js/.test(c)) {
                        -1 != c.indexOf(".min") && (i = ".min"), t = c.substring(0, c.lastIndexOf("/"));
                        break;
                    }
                }
                e.baseURL = new r(n).toAbsolute(t), e.documentBaseURL = n, e.baseURI = new r(e.baseURL), 
                e.suffix = i, e.focusManager = new l(e);
            },
            init: function(t) {
                function n(e) {
                    var t = e.id;
                    return t || (t = e.name, t = t && !c.get(t) ? e.name : c.uniqueId(), e.setAttribute("id", t)), 
                    t;
                }
                function r(e, t, n) {
                    var r = e[t];
                    if (r) return r.apply(n || this, Array.prototype.slice.call(arguments, 2));
                }
                function i(e, t) {
                    return t.constructor === RegExp ? t.test(e.className) : c.hasClass(e, t);
                }
                var o = this, a = [], s;
                o.settings = t, c.bind(window, "ready", function() {
                    var l, h;
                    if (r(t, "onpageload"), t.types) return d(t.types, function(r) {
                        d(c.select(r.selector), function(i) {
                            var s = new e(n(i), f({}, t, r), o);
                            a.push(s), s.render(1);
                        });
                    }), void 0;
                    if (t.selector) return d(c.select(t.selector), function(r) {
                        var i = new e(n(r), t, o);
                        a.push(i), i.render(1);
                    }), void 0;
                    switch (t.mode) {
                      case "exact":
                        l = t.elements || "", l.length > 0 && d(u(l), function(n) {
                            c.get(n) ? (s = new e(n, t, o), a.push(s), s.render(!0)) : d(document.forms, function(r) {
                                d(r.elements, function(r) {
                                    r.name === n && (n = "mce_editor_" + p++, c.setAttrib(r, "id", n), s = new e(n, t, o), 
                                    a.push(s), s.render(1));
                                });
                            });
                        });
                        break;

                      case "textareas":
                      case "specific_textareas":
                        d(c.select("textarea"), function(r) {
                            t.editor_deselector && i(r, t.editor_deselector) || (!t.editor_selector || i(r, t.editor_selector)) && (s = new e(n(r), t, o), 
                            a.push(s), s.render(!0));
                        });
                    }
                    t.oninit && (l = h = 0, d(a, function(e) {
                        h++, e.initialized ? l++ : e.on("init", function() {
                            l++, l == h && r(t, "oninit");
                        }), l == h && r(t, "oninit");
                    }));
                });
            },
            get: function(e) {
                return e === t ? this.editors : this.editors[e];
            },
            add: function(e) {
                var t = this, n = t.editors;
                return n[e.id] = e, n.push(e), t.activeEditor = e, t.fire("AddEditor", {
                    editor: e
                }), h || (h = function() {
                    t.fire("BeforeUnload");
                }, c.bind(window, "beforeunload", h)), e;
            },
            createEditor: function(t, n) {
                return this.add(new e(t, n, this));
            },
            remove: function(e) {
                var t = this, n, r = t.editors, i;
                if (e) {
                    if ("string" == typeof e) return e = e.selector || e, d(c.select(e), function(e) {
                        t.remove(r[e.id]);
                    }), void 0;
                    if (i = e, !r[i.id]) return null;
                    for (delete r[i.id], n = 0; n < r.length; n++) if (r[n] == i) {
                        r.splice(n, 1);
                        break;
                    }
                    if (t.activeEditor == i && (t.activeEditor = r[0]), i && !i.removed) return i.remove(), 
                    i.destroy(), t.fire("RemoveEditor", {
                        editor: i
                    }), r.length || c.unbind(window, "beforeunload", h), i;
                } else for (n = r.length - 1; n >= 0; n--) t.remove(r[n]);
            },
            execCommand: function(t, n, r) {
                var i = this, o = i.get(r);
                switch (t) {
                  case "mceAddEditor":
                    return i.get(r) || new e(r, i.settings, i).render(), !0;

                  case "mceRemoveEditor":
                    return o && o.remove(), !0;

                  case "mceToggleEditor":
                    return o ? (o.isHidden() ? o.show() : o.hide(), !0) : (i.execCommand("mceAddEditor", 0, r), 
                    !0);
                }
                return i.activeEditor ? i.activeEditor.execCommand(t, n, r) : !1;
            },
            triggerSave: function() {
                d(this.editors, function(e) {
                    e.save();
                });
            },
            addI18n: function(e, t) {
                s.add(e, t);
            },
            translate: function(e) {
                return s.translate(e);
            }
        };
        return f(m, a), m.setup(), window.tinymce = window.tinyMCE = m, m;
    }), r(lt, [ st, p ], function(e, t) {
        var n = t.each, r = t.explode;
        e.on("AddEditor", function(e) {
            var t = e.editor;
            t.on("preInit", function() {
                function e(e, t) {
                    n(t, function(t, n) {
                        t && s.setStyle(e, n, t);
                    }), s.rename(e, "span");
                }
                function i(e) {
                    s = t.dom, l.convert_fonts_to_spans && n(s.select("font,u,strike", e.node), function(e) {
                        o[e.nodeName.toLowerCase()](s, e);
                    });
                }
                var o, a, s, l = t.settings;
                l.inline_styles && (a = r(l.font_size_legacy_values), o = {
                    font: function(t, n) {
                        e(n, {
                            backgroundColor: n.style.backgroundColor,
                            color: n.color,
                            fontFamily: n.face,
                            fontSize: a[parseInt(n.size, 10) - 1]
                        });
                    },
                    u: function(t, n) {
                        e(n, {
                            textDecoration: "underline"
                        });
                    },
                    strike: function(t, n) {
                        e(n, {
                            textDecoration: "line-through"
                        });
                    }
                }, t.on("PreProcess SetContent", i));
            });
        });
    }), r(ct, [], function() {
        return {
            send: function(e) {
                function t() {
                    !e.async || 4 == n.readyState || r++ > 1e4 ? (e.success && 1e4 > r && 200 == n.status ? e.success.call(e.success_scope, "" + n.responseText, n, e) : e.error && e.error.call(e.error_scope, r > 1e4 ? "TIMED_OUT" : "GENERAL", n, e), 
                    n = null) : setTimeout(t, 10);
                }
                var n, r = 0;
                if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, 
                e.async = e.async === !1 ? !1 : !0, e.data = e.data || "", n = new XMLHttpRequest()) {
                    if (n.overrideMimeType && n.overrideMimeType(e.content_type), n.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), 
                    e.content_type && n.setRequestHeader("Content-Type", e.content_type), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), 
                    n.send(e.data), !e.async) return t();
                    setTimeout(t, 10);
                }
            }
        };
    }), r(ut, [], function() {
        function e(t, n) {
            var r, i, o, a;
            if (n = n || '"', null === t) return "null";
            if (o = typeof t, "string" == o) return i = "\bb	t\nn\ff\rr\"\"''\\\\", n + t.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function(e, t) {
                return '"' === n && "'" === e ? e : (r = i.indexOf(t), r + 1 ? "\\" + i.charAt(r + 1) : (e = t.charCodeAt().toString(16), 
                "\\u" + "0000".substring(e.length) + e));
            }) + n;
            if ("object" == o) {
                if (t.hasOwnProperty && "[object Array]" === Object.prototype.toString.call(t)) {
                    for (r = 0, i = "["; r < t.length; r++) i += (r > 0 ? "," : "") + e(t[r], n);
                    return i + "]";
                }
                i = "{";
                for (a in t) t.hasOwnProperty(a) && (i += "function" != typeof t[a] ? (i.length > 1 ? "," + n : n) + a + n + ":" + e(t[a], n) : "");
                return i + "}";
            }
            return "" + t;
        }
        return {
            serialize: e,
            parse: function(e) {
                try {
                    return window[String.fromCharCode(101) + "val"]("(" + e + ")");
                } catch (t) {}
            }
        };
    }), r(dt, [ ut, ct, p ], function(e, t, n) {
        function r(e) {
            this.settings = i({}, e), this.count = 0;
        }
        var i = n.extend;
        return r.sendRPC = function(e) {
            return new r().send(e);
        }, r.prototype = {
            send: function(n) {
                var r = n.error, o = n.success;
                n = i(this.settings, n), n.success = function(t, i) {
                    t = e.parse(t), "undefined" == typeof t && (t = {
                        error: "JSON Parse error."
                    }), t.error ? r.call(n.error_scope || n.scope, t.error, i) : o.call(n.success_scope || n.scope, t.result);
                }, n.error = function(e, t) {
                    r && r.call(n.error_scope || n.scope, e, t);
                }, n.data = e.serialize({
                    id: n.id || "c" + this.count++,
                    method: n.method,
                    params: n.params
                }), n.content_type = "application/json", t.send(n);
            }
        }, r;
    }), r(ft, [ v ], function(e) {
        return {
            callbacks: {},
            count: 0,
            send: function(n) {
                var r = this, i = e.DOM, o = n.count !== t ? n.count : r.count, a = "tinymce_jsonp_" + o;
                r.callbacks[o] = function(e) {
                    i.remove(a), delete r.callbacks[o], n.callback(e);
                }, i.add(i.doc.body, "script", {
                    id: a,
                    src: n.url,
                    type: "text/javascript"
                }), r.count++;
            }
        };
    }), r(pt, [], function() {
        function e() {
            s = [];
            for (var e in a) s.push(e);
            i.length = s.length;
        }
        function n() {
            function n(e) {
                var n, r;
                return r = e !== t ? c + e : i.indexOf(",", c), -1 === r || r > i.length ? null : (n = i.substring(c, r), 
                c = r + 1, n);
            }
            var r, i, s, c = 0;
            a = {}, o.load(l), i = o.getAttribute(l) || "";
            do r = n(parseInt(n(), 32) || 0), null !== r && (s = n(parseInt(n(), 32) || 0), 
            a[r] = s); while (null !== r);
            e();
        }
        function r() {
            var t, n = "";
            for (var r in a) t = a[r], n += (n ? "," : "") + r.length.toString(32) + "," + r + "," + t.length.toString(32) + "," + t;
            o.setAttribute(l, n), o.save(l), e();
        }
        var i, o, a, s, l;
        return window.localStorage ? localStorage : (l = "tinymce", o = document.documentElement, 
        o.addBehavior("#default#userData"), i = {
            key: function(e) {
                return s[e];
            },
            getItem: function(e) {
                return e in a ? a[e] : null;
            },
            setItem: function(e, t) {
                a[e] = "" + t, r();
            },
            removeItem: function(e) {
                delete a[e], r();
            },
            clear: function() {
                a = {}, r();
            }
        }, n(), i);
    }), r(ht, [ v, l, y, b, p, g ], function(e, t, n, r, i, o) {
        var a = window.tinymce;
        return a.DOM = e.DOM, a.ScriptLoader = n.ScriptLoader, a.PluginManager = r.PluginManager, 
        a.ThemeManager = r.ThemeManager, a.dom = a.dom || {}, a.dom.Event = t.Event, i.each(i, function(e, t) {
            a[t] = e;
        }), i.each("isOpera isWebKit isIE isGecko isMac".split(" "), function(e) {
            a[e] = o[e.substr(2).toLowerCase()];
        }), {};
    }), r(mt, [ I, p ], function(e, t) {
        return e.extend({
            Defaults: {
                firstControlClass: "first",
                lastControlClass: "last"
            },
            init: function(e) {
                this.settings = t.extend({}, this.Defaults, e);
            },
            preRender: function(e) {
                e.addClass(this.settings.containerClass, "body");
            },
            applyClasses: function(e) {
                var t = this, n = t.settings, r, i, o;
                r = e.items().filter(":visible"), i = n.firstControlClass, o = n.lastControlClass, 
                r.each(function(e) {
                    e.removeClass(i).removeClass(o), n.controlClass && e.addClass(n.controlClass);
                }), r.eq(0).addClass(i), r.eq(-1).addClass(o);
            },
            renderHtml: function(e) {
                var t = this, n = t.settings, r, i = "";
                return r = e.items(), r.eq(0).addClass(n.firstControlClass), r.eq(-1).addClass(n.lastControlClass), 
                r.each(function(e) {
                    n.controlClass && e.addClass(n.controlClass), i += e.renderHtml();
                }), i;
            },
            recalc: function() {},
            postRender: function() {}
        });
    }), r(gt, [ mt ], function(e) {
        return e.extend({
            Defaults: {
                containerClass: "abs-layout",
                controlClass: "abs-layout-item"
            },
            recalc: function(e) {
                e.items().filter(":visible").each(function(e) {
                    var t = e.settings;
                    e.layoutRect({
                        x: t.x,
                        y: t.y,
                        w: t.w,
                        h: t.h
                    }), e.recalc && e.recalc();
                });
            },
            renderHtml: function(e) {
                return '<div id="' + e._id + '-absend" class="' + e.classPrefix + 'abs-end"></div>' + this._super(e);
            }
        });
    }), r(vt, [ V, G ], function(e, t) {
        return e.extend({
            Mixins: [ t ],
            Defaults: {
                classes: "widget tooltip tooltip-n"
            },
            text: function(e) {
                var t = this;
                return "undefined" != typeof e ? (t._value = e, t._rendered && (t.getEl().lastChild.innerHTML = t.encode(e)), 
                t) : t._value;
            },
            renderHtml: function() {
                var e = this, t = e.classPrefix;
                return '<div id="' + e._id + '" class="' + e.classes() + '" role="presentation">' + '<div class="' + t + 'tooltip-arrow"></div>' + '<div class="' + t + 'tooltip-inner">' + e.encode(e._text) + "</div>" + "</div>";
            },
            repaint: function() {
                var e = this, t, n;
                t = e.getEl().style, n = e._layoutRect, t.left = n.x + "px", t.top = n.y + "px", 
                t.zIndex = 131070;
            }
        });
    }), r(yt, [ V, vt ], function(e, t) {
        var n, r = e.extend({
            init: function(e) {
                var t = this;
                t._super(e), t.canFocus = !0, e.tooltip && r.tooltips !== !1 && t.on("mouseenter mouseleave", function(n) {
                    var r = t.tooltip().moveTo(-65535);
                    if (n.control == t && "mouseenter" == n.type) {
                        var i = r.text(e.tooltip).show().testMoveRel(t.getEl(), [ "bc-tc", "bc-tl", "bc-tr" ]);
                        r.toggleClass("tooltip-n", "bc-tc" == i), r.toggleClass("tooltip-nw", "bc-tl" == i), 
                        r.toggleClass("tooltip-ne", "bc-tr" == i), r.moveRel(t.getEl(), i);
                    } else r.hide();
                }), t.aria("label", e.tooltip);
            },
            tooltip: function() {
                var e = this;
                return n || (n = new t({
                    type: "tooltip"
                }), n.renderTo(e.getContainerElm())), n;
            },
            active: function(e) {
                var t = this, n;
                return e !== n && (t.aria("pressed", e), t.toggleClass("active", e)), t._super(e);
            },
            disabled: function(e) {
                var t = this, n;
                return e !== n && (t.aria("disabled", e), t.toggleClass("disabled", e)), t._super(e);
            },
            postRender: function() {
                var e = this, t = e.settings;
                e._rendered = !0, e._super(), e.parent() || !t.width && !t.height || (e.initLayoutRect(), 
                e.repaint()), t.autofocus && setTimeout(function() {
                    e.focus();
                }, 0);
            },
            remove: function() {
                this._super(), n && (n.remove(), n = null);
            }
        });
        return r;
    }), r(bt, [ yt ], function(e) {
        return e.extend({
            Defaults: {
                classes: "widget btn",
                role: "button"
            },
            init: function(e) {
                var t = this, n;
                t.on("click mousedown", function(e) {
                    e.preventDefault();
                }), t._super(e), n = e.size, e.subtype && t.addClass(e.subtype), n && t.addClass("btn-" + n);
            },
            repaint: function() {
                var e = this.getEl().firstChild.style;
                e.width = e.height = "100%", this._super();
            },
            renderHtml: function() {
                var e = this, t = e._id, n = e.classPrefix, r = e.settings.icon, i = "";
                return e.settings.image && (r = "none", i = " style=\"background-image: url('" + e.settings.image + "')\""), 
                r = e.settings.icon ? n + "ico " + n + "i-" + r : "", '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1">' + '<button role="presentation" type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + i + "></i>" : "") + (e._text ? (r ? " " : "") + e.encode(e._text) : "") + "</button>" + "</div>";
            }
        });
    }), r(Ct, [ q ], function(e) {
        return e.extend({
            Defaults: {
                defaultType: "button",
                role: "toolbar"
            },
            renderHtml: function() {
                var e = this, t = e._layout;
                return e.addClass("btn-group"), e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '">' + '<div id="' + e._id + '-body">' + (e.settings.html || "") + t.renderHtml(e) + "</div>" + "</div>";
            }
        });
    }), r(xt, [ yt ], function(e) {
        return e.extend({
            Defaults: {
                classes: "checkbox",
                role: "checkbox",
                checked: !1
            },
            init: function(e) {
                var t = this;
                t._super(e), t.on("click mousedown", function(e) {
                    e.preventDefault();
                }), t.on("click", function(e) {
                    e.preventDefault(), t.disabled() || t.checked(!t.checked());
                }), t.checked(t.settings.checked);
            },
            checked: function(e) {
                var t = this;
                return "undefined" != typeof e ? (e ? t.addClass("checked") : t.removeClass("checked"), 
                t._checked = e, t.aria("checked", e), t) : t._checked;
            },
            value: function(e) {
                return this.checked(e);
            },
            renderHtml: function() {
                var e = this, t = e._id, n = e.classPrefix;
                return '<div id="' + t + '" class="' + e.classes() + '" unselectable="on" aria-labeledby="' + t + '-al" tabindex="-1">' + '<i class="' + n + "ico " + n + 'i-checkbox"></i>' + '<span id="' + t + '-al" class="' + n + 'label">' + e.encode(e._text) + "</span>" + "</div>";
            }
        });
    }), r(wt, [ bt, X ], function(e, t) {
        return e.extend({
            showPanel: function() {
                var e = this, n = e.settings;
                n.panel.popover = !0, n.panel.autohide = !0, e.active(!0), e.panel ? e.panel.show() : (e.panel = new t(n.panel).on("hide", function() {
                    e.active(!1);
                }).parent(e).renderTo(e.getContainerElm()), e.panel.fire("show"), e.panel.reflow()), 
                e.panel.moveRel(e.getEl(), n.popoverAlign || "bc-tc");
            },
            hidePanel: function() {
                var e = this;
                e.panel && e.panel.hide();
            },
            postRender: function() {
                var e = this;
                return e.on("click", function(t) {
                    t.control === e && (e.panel && e.panel.visible() ? e.hidePanel() : e.showPanel());
                }), e._super();
            }
        });
    }), r(_t, [ wt, v ], function(e, t) {
        var n = t.DOM;
        return e.extend({
            init: function(e) {
                this._super(e), this.addClass("colorbutton");
            },
            color: function(e) {
                return e ? (this._color = e, this.getEl("preview").style.backgroundColor = e, this) : this._color;
            },
            renderHtml: function() {
                var e = this, t = e._id, n = e.classPrefix, r = e.settings.icon ? n + "ico " + n + "i-" + e.settings.icon : "", i = e.settings.image ? " style=\"background-image: url('" + e.settings.image + "')\"" : "";
                return '<div id="' + t + '" class="' + e.classes() + '">' + '<button role="presentation" hidefocus type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + i + "></i>" : "") + '<span id="' + t + '-preview" class="' + n + 'preview"></span>' + (e._text ? (r ? " " : "") + e._text : "") + "</button>" + '<button type="button" class="' + n + 'open" hidefocus tabindex="-1">' + ' <i class="' + n + 'caret"></i>' + "</button>" + "</div>";
            },
            postRender: function() {
                var e = this, t = e.settings.onclick;
                return e.on("click", function(r) {
                    r.control != e || n.getParent(r.target, "." + e.classPrefix + "open") || (r.stopImmediatePropagation(), 
                    t.call(e, r));
                }), delete e.settings.onclick, e._super();
            }
        });
    }), r(Nt, [ yt, z ], function(e, t) {
        return e.extend({
            init: function(e) {
                var n = this;
                n._super(e), n.addClass("combobox"), n.on("click", function(e) {
                    for (var t = e.target; t; ) t.id && -1 != t.id.indexOf("-open") && n.fire("action"), 
                    t = t.parentNode;
                }), n.on("keydown", function(e) {
                    "INPUT" == e.target.nodeName && 13 == e.keyCode && n.parents().reverse().each(function(t) {
                        return e.preventDefault(), n.fire("change"), t.submit ? (t.submit(), !1) : void 0;
                    });
                }), e.placeholder && (n.addClass("placeholder"), n.on("focusin", function() {
                    n._hasOnChange || (t.on(n.getEl("inp"), "change", function() {
                        n.fire("change");
                    }), n._hasOnChange = !0), n.hasClass("placeholder") && (n.getEl("inp").value = "", 
                    n.removeClass("placeholder"));
                }), n.on("focusout", function() {
                    0 === n.value().length && (n.getEl("inp").value = e.placeholder, n.addClass("placeholder"));
                }));
            },
            value: function(e) {
                var t = this;
                return "undefined" != typeof e ? (t._value = e, t.removeClass("placeholder"), t._rendered && (t.getEl("inp").value = e), 
                t) : t._rendered ? (e = t.getEl("inp").value, e != t.settings.placeholder ? e : "") : t._value;
            },
            disabled: function(e) {
                var t = this;
                t._super(e), t._rendered && (t.getEl("inp").disabled = e);
            },
            focus: function() {
                this.getEl("inp").focus();
            },
            repaint: function() {
                var e = this, n = e.getEl(), r = e.getEl("open"), i = e.layoutRect(), o, a;
                o = r ? i.w - r.offsetWidth - 10 : i.w - 10;
                var s = document;
                return s.all && (!s.documentMode || s.documentMode <= 8) && (a = e.layoutRect().h - 2 + "px"), 
                t.css(n.firstChild, {
                    width: o,
                    lineHeight: a
                }), e._super(), e;
            },
            postRender: function() {
                var e = this;
                return t.on(this.getEl("inp"), "change", function() {
                    e.fire("change");
                }), e._super();
            },
            renderHtml: function() {
                var e = this, t = e._id, n = e.settings, r = e.classPrefix, i = n.value || n.placeholder || "", o, a, s = "";
                return o = n.icon ? r + "ico " + r + "i-" + n.icon : "", a = e._text, (o || a) && (s = '<div id="' + t + '-open" class="' + r + "btn " + r + 'open" tabIndex="-1">' + '<button id="' + t + '-action" type="button" hidefocus tabindex="-1">' + (o ? '<i class="' + o + '"></i>' : '<i class="' + r + 'caret"></i>') + (a ? (o ? " " : "") + a : "") + "</button>" + "</div>", 
                e.addClass("has-open")), '<div id="' + t + '" class="' + e.classes() + '">' + '<input id="' + t + '-inp" class="' + r + "textbox " + r + 'placeholder" value="' + i + '" hidefocus="true">' + s + "</div>";
            }
        });
    }), r(Et, [ V, J ], function(e, t) {
        return e.extend({
            Defaults: {
                delimiter: "»"
            },
            init: function(e) {
                var t = this;
                t._super(e), t.addClass("path"), t.canFocus = !0, t.on("click", function(e) {
                    var n, r = e.target;
                    (n = r.getAttribute("data-index")) && t.fire("select", {
                        value: t.data()[n],
                        index: n
                    });
                });
            },
            focus: function() {
                var e = this;
                return e.keyNav = new t({
                    root: e,
                    enableLeftRight: !0
                }), e.keyNav.focusFirst(), e;
            },
            data: function(e) {
                var t = this;
                return "undefined" != typeof e ? (t._data = e, t.update(), t) : t._data;
            },
            update: function() {
                this.getEl().innerHTML = this._getPathHtml();
            },
            postRender: function() {
                var e = this;
                e._super(), e.data(e.settings.data);
            },
            renderHtml: function() {
                var e = this;
                return '<div id="' + e._id + '" class="' + e.classPrefix + 'path">' + e._getPathHtml() + "</div>";
            },
            _getPathHtml: function() {
                var e = this, t = e._data || [], n, r, i = "", o = e.classPrefix;
                for (n = 0, r = t.length; r > n; n++) i += (n > 0 ? '<div class="' + o + 'divider" aria-hidden="true"> ' + e.settings.delimiter + " </div>" : "") + '<div role="button" class="' + o + "path-item" + (n == r - 1 ? " " + o + "last" : "") + '" data-index="' + n + '" tabindex="-1" id="' + e._id + "-" + n + '">' + t[n].name + "</div>";
                return i || (i = '<div class="' + o + 'path-item">&nbsp;</div>'), i;
            }
        });
    }), r(St, [ Et, st ], function(e, t) {
        return e.extend({
            postRender: function() {
                function e(e) {
                    return 1 === e.nodeType && ("BR" == e.nodeName || !!e.getAttribute("data-mce-bogus"));
                }
                var n = this, r = t.activeEditor;
                return n.on("select", function(t) {
                    var n = [], i, o = r.getBody();
                    for (r.focus(), i = r.selection.getStart(); i && i != o; ) e(i) || n.push(i), i = i.parentNode;
                    r.selection.select(n[n.length - 1 - t.index]), r.nodeChanged();
                }), r.on("nodeChange", function(t) {
                    for (var i = [], o = t.parents, a = o.length; a--; ) if (1 == o[a].nodeType && !e(o[a])) {
                        var s = r.fire("ResolveName", {
                            name: o[a].nodeName.toLowerCase(),
                            target: o[a]
                        });
                        i.push({
                            name: s.name
                        });
                    }
                    n.data(i);
                }), n._super();
            }
        });
    }), r(kt, [ q ], function(e) {
        return e.extend({
            Defaults: {
                layout: "flex",
                align: "center",
                defaults: {
                    flex: 1
                }
            },
            renderHtml: function() {
                var e = this, t = e._layout, n = e.classPrefix;
                return e.addClass("formitem"), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '" hideFocus="1" tabIndex="-1">' + (e.settings.title ? '<div id="' + e._id + '-title" class="' + n + 'title">' + e.settings.title + "</div>" : "") + '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div>" + "</div>";
            }
        });
    }), r(Tt, [ q, kt ], function(e, t) {
        return e.extend({
            Defaults: {
                containerCls: "form",
                layout: "flex",
                direction: "column",
                align: "stretch",
                flex: 1,
                padding: 20,
                labelGap: 30,
                spacing: 10
            },
            preRender: function() {
                var e = this, n = e.items();
                n.each(function(n) {
                    var r, i = n.settings.label;
                    i && (r = new t({
                        layout: "flex",
                        autoResize: "overflow",
                        defaults: {
                            flex: 1
                        },
                        items: [ {
                            type: "label",
                            text: i,
                            flex: 0,
                            forId: n._id
                        } ]
                    }), r.type = "formitem", "undefined" == typeof n.settings.flex && (n.settings.flex = 1), 
                    e.replace(n, r), r.add(n));
                });
            },
            recalcLabels: function() {
                var e = this, t = 0, n = [], r, i;
                if (e.settings.labelGapCalc !== !1) for (e.items().filter("formitem").each(function(e) {
                    var r = e.items()[0], i = r.getEl().clientWidth;
                    t = i > t ? i : t, n.push(r);
                }), i = e.settings.labelGap || 0, r = n.length; r--; ) n[r].settings.minWidth = t + i;
            },
            visible: function(e) {
                var t = this._super(e);
                return e === !0 && this._rendered && this.recalcLabels(), t;
            },
            submit: function() {
                var e = this.getParentCtrl(document.activeElement);
                return e && e.blur(), this.fire("submit", {
                    data: this.toJSON()
                });
            },
            postRender: function() {
                var e = this;
                e._super(), e.recalcLabels(), e.fromJSON(e.settings.data);
            }
        });
    }), r(Rt, [ Tt ], function(e) {
        return e.extend({
            Defaults: {
                containerCls: "fieldset",
                layout: "flex",
                direction: "column",
                align: "stretch",
                flex: 1,
                padding: "25 15 5 15",
                labelGap: 30,
                spacing: 10,
                border: 1
            },
            renderHtml: function() {
                var e = this, t = e._layout, n = e.classPrefix;
                return e.preRender(), t.preRender(e), '<fieldset id="' + e._id + '" class="' + e.classes() + '" hideFocus="1" tabIndex="-1">' + (e.settings.title ? '<legend id="' + e._id + '-title" class="' + n + 'fieldset-title">' + e.settings.title + "</legend>" : "") + '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div>" + "</fieldset>";
            }
        });
    }), r(At, [ Nt ], function(e) {
        return e.extend({
            init: function(e) {
                var t = this, n = tinymce.activeEditor, r;
                e.spellcheck = !1, r = n.settings.file_browser_callback, r && (e.icon = "browse", 
                e.onaction = function() {
                    r(t.getEl("inp").id, t.getEl("inp").value, e.filetype, window);
                }), t._super(e);
            }
        });
    }), r(Bt, [ gt ], function(e) {
        return e.extend({
            recalc: function(e) {
                var t = e.layoutRect(), n = e.paddingBox();
                e.items().filter(":visible").each(function(e) {
                    e.layoutRect({
                        x: n.left,
                        y: n.top,
                        w: t.innerW - n.right - n.left,
                        h: t.innerH - n.top - n.bottom
                    }), e.recalc && e.recalc();
                });
            }
        });
    }), r(Lt, [ gt ], function(e) {
        return e.extend({
            recalc: function(e) {
                var t, n, r, i, o, a, s, l, c, u, d, f, p, h, m, g, v = [], y, b, C, x, w, _, N, E, S, k, T, R, A, B, L, M, D, H, P, O, I, F, W, z, V = Math.max, U = Math.min;
                for (r = e.items().filter(":visible"), i = e.layoutRect(), o = e._paddingBox, a = e.settings, 
                f = a.direction, s = a.align, l = a.pack, c = a.spacing || 0, ("row-reversed" == f || "column-reverse" == f) && (r = r.set(r.toArray().reverse()), 
                f = f.split("-")[0]), "column" == f ? (S = "y", N = "h", E = "minH", k = "maxH", 
                R = "innerH", T = "top", A = "bottom", B = "deltaH", L = "contentH", I = "left", 
                H = "w", M = "x", D = "innerW", P = "minW", O = "maxW", F = "right", W = "deltaW", 
                z = "contentW") : (S = "x", N = "w", E = "minW", k = "maxW", R = "innerW", T = "left", 
                A = "right", B = "deltaW", L = "contentW", I = "top", H = "h", M = "y", D = "innerH", 
                P = "minH", O = "maxH", F = "bottom", W = "deltaH", z = "contentH"), d = i[R] - o[T] - o[T], 
                _ = u = 0, t = 0, n = r.length; n > t; t++) p = r[t], h = p.layoutRect(), m = p.settings, 
                g = m.flex, d -= n - 1 > t ? c : 0, g > 0 && (u += g, h[k] && v.push(p), h.flex = g), 
                d -= h[E], y = o[I] + h[P] + o[F], y > _ && (_ = y);
                if (x = {}, x[E] = 0 > d ? i[E] - d + i[B] : i[R] - d + i[B], x[P] = _ + i[W], x[L] = i[R] - d, 
                x[z] = _, x.minW = U(x.minW, i.maxW), x.minH = U(x.minH, i.maxH), x.minW = V(x.minW, i.startMinWidth), 
                x.minH = V(x.minH, i.startMinHeight), !i.autoResize || x.minW == i.minW && x.minH == i.minH) {
                    for (C = d / u, t = 0, n = v.length; n > t; t++) p = v[t], h = p.layoutRect(), b = h[k], 
                    y = h[E] + Math.ceil(h.flex * C), y > b ? (d -= h[k] - h[E], u -= h.flex, h.flex = 0, 
                    h.maxFlexSize = b) : h.maxFlexSize = 0;
                    for (C = d / u, w = o[T], x = {}, 0 === u && ("end" == l ? w = d + o[T] : "center" == l ? (w = Math.round(i[R] / 2 - (i[R] - d) / 2) + o[T], 
                    0 > w && (w = o[T])) : "justify" == l && (w = o[T], c = Math.floor(d / (r.length - 1)))), 
                    x[M] = o[I], t = 0, n = r.length; n > t; t++) p = r[t], h = p.layoutRect(), y = h.maxFlexSize || h[E], 
                    "center" === s ? x[M] = Math.round(i[D] / 2 - h[H] / 2) : "stretch" === s ? (x[H] = V(h[P] || 0, i[D] - o[I] - o[F]), 
                    x[M] = o[I]) : "end" === s && (x[M] = i[D] - h[H] - o.top), h.flex > 0 && (y += Math.ceil(h.flex * C)), 
                    x[N] = y, x[S] = w, p.layoutRect(x), p.recalc && p.recalc(), w += y + c;
                } else if (x.w = x.minW, x.h = x.minH, e.layoutRect(x), this.recalc(e), null === e._lastRect) {
                    var q = e.parent();
                    q && (q._lastRect = null, q.recalc());
                }
            }
        });
    }), r(Mt, [ mt ], function(e) {
        return e.extend({
            Defaults: {
                containerClass: "flow-layout",
                controlClass: "flow-layout-item",
                endClass: "break"
            },
            recalc: function(e) {
                e.items().filter(":visible").each(function(e) {
                    e.recalc && e.recalc();
                });
            }
        });
    }), r(Dt, [ U, V, yt, X, p, st, g ], function(e, t, n, r, i, o, a) {
        function s(e) {
            function t(e) {
                return e.replace(/%(\w+)/g, "");
            }
            var n = o.activeEditor, r, i, a = n.dom, s = "", l, c;
            return c = n.settings.preview_styles, c === !1 ? "" : (c || (c = "font-family font-size font-weight text-decoration text-transform color background-color border border-radius"), 
            (e = n.formatter.get(e)) ? (e = e[0], r = e.block || e.inline || "span", i = a.create(r), 
            u(e.styles, function(e, n) {
                e = t(e), e && a.setStyle(i, n, e);
            }), u(e.attributes, function(e, n) {
                e = t(e), e && a.setAttrib(i, n, e);
            }), u(e.classes, function(e) {
                e = t(e), a.hasClass(i, e) || a.addClass(i, e);
            }), n.fire("PreviewFormats"), a.setStyles(i, {
                position: "absolute",
                left: -65535
            }), n.getBody().appendChild(i), l = a.getStyle(n.getBody(), "fontSize", !0), l = /px$/.test(l) ? parseInt(l, 10) : 0, 
            u(c.split(" "), function(e) {
                var t = a.getStyle(i, e, !0);
                if (!("background-color" == e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = a.getStyle(n.getBody(), e, !0), 
                "#ffffff" == a.toHex(t).toLowerCase()) || "color" == e && "#000000" == a.toHex(t).toLowerCase())) {
                    if ("font-size" == e && /em|%$/.test(t)) {
                        if (0 === l) return;
                        t = parseFloat(t, 10) / (/%$/.test(t) ? 100 : 1), t = t * l + "px";
                    }
                    "border" == e && t && (s += "padding:0 2px;"), s += e + ":" + t + ";";
                }
            }), n.fire("AfterPreviewFormats"), a.remove(i), s) : void 0);
        }
        function l(e, t) {
            return function() {
                var n = this;
                o.activeEditor.on("nodeChange", function(r) {
                    var i = o.activeEditor.formatter, a = null;
                    u(r.parents, function(n) {
                        return u(e, function(e) {
                            return t ? i.matchNode(n, t, {
                                value: e.value
                            }) && (a = e.value) : i.matchNode(n, e.value) && (a = e.value), a ? !1 : void 0;
                        }), a ? !1 : void 0;
                    }), n.value(a);
                });
            };
        }
        function c(e) {
            e = e.split(";");
            for (var t = e.length; t--; ) e[t] = e[t].split("=");
            return e;
        }
        var u = i.each;
        t.translate = function(e) {
            return o.translate(e);
        }, n.tooltips = !a.iOS, o.on("AddEditor", function(t) {
            function n() {
                function e(r) {
                    var i = [];
                    if (r) return u(r, function(r) {
                        var o = {
                            text: r.title,
                            icon: r.icon,
                            preview: !0
                        };
                        if (r.items) o.menu = e(r.items); else {
                            var a = r.format || "custom" + t++;
                            r.format || (r.name = a, n.push(r)), o.textStyle = function() {
                                return s(a);
                            }, o.onclick = function() {
                                m(a);
                            }, o.onPostRender = function() {
                                var e = this;
                                e.parent().on("show", function() {
                                    e.disabled(!g.formatter.canApply(a)), e.active(g.formatter.match(a));
                                });
                            };
                        }
                        i.push(o);
                    }), i;
                }
                var t = 0, n = [], r = [ {
                    title: "Headers",
                    items: [ {
                        title: "Header 1",
                        format: "h1"
                    }, {
                        title: "Header 2",
                        format: "h2"
                    }, {
                        title: "Header 3",
                        format: "h3"
                    }, {
                        title: "Header 4",
                        format: "h4"
                    }, {
                        title: "Header 5",
                        format: "h5"
                    }, {
                        title: "Header 6",
                        format: "h6"
                    } ]
                }, {
                    title: "Inline",
                    items: [ {
                        title: "Bold",
                        icon: "bold",
                        format: "bold"
                    }, {
                        title: "Italic",
                        icon: "italic",
                        format: "italic"
                    }, {
                        title: "Underline",
                        icon: "underline",
                        format: "underline"
                    }, {
                        title: "Strikethrough",
                        icon: "strikethrough",
                        format: "strikethrough"
                    }, {
                        title: "Superscript",
                        icon: "superscript",
                        format: "superscript"
                    }, {
                        title: "Subscript",
                        icon: "subscript",
                        format: "subscript"
                    }, {
                        title: "Code",
                        icon: "code",
                        format: "code"
                    } ]
                }, {
                    title: "Blocks",
                    items: [ {
                        title: "Paragraph",
                        format: "p"
                    }, {
                        title: "Blockquote",
                        format: "blockquote"
                    }, {
                        title: "Div",
                        format: "div"
                    }, {
                        title: "Pre",
                        format: "pre"
                    } ]
                }, {
                    title: "Alignment",
                    items: [ {
                        title: "Left",
                        icon: "alignleft",
                        format: "alignleft"
                    }, {
                        title: "Center",
                        icon: "aligncenter",
                        format: "aligncenter"
                    }, {
                        title: "Right",
                        icon: "alignright",
                        format: "alignright"
                    }, {
                        title: "Justify",
                        icon: "alignjustify",
                        format: "alignjustify"
                    } ]
                } ];
                g.on("init", function() {
                    u(n, function(e) {
                        g.formatter.register(e.name, e);
                    });
                });
                var i = e(g.settings.style_formats || r);
                return i;
            }
            function a() {
                return g.undoManager ? g.undoManager.hasUndo() : !1;
            }
            function d() {
                return g.undoManager ? g.undoManager.hasRedo() : !1;
            }
            function f() {
                var e = this;
                e.disabled(!a()), g.on("Undo Redo AddUndo TypingUndo", function() {
                    e.disabled(!a());
                });
            }
            function p() {
                var e = this;
                e.disabled(!d()), g.on("Undo Redo AddUndo TypingUndo", function() {
                    e.disabled(!d());
                });
            }
            function h() {
                var e = this;
                g.on("VisualAid", function(t) {
                    e.active(t.hasVisual);
                }), e.active(g.hasVisual);
            }
            function m(e) {
                e.control && (e = e.control.value()), e && o.activeEditor.execCommand("mceToggleFormat", !1, e);
            }
            var g = t.editor, v;
            v = n(), u({
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                strikethrough: "Strikethrough",
                subscript: "Subscript",
                superscript: "Superscript"
            }, function(e, t) {
                g.addButton(t, {
                    tooltip: e,
                    onPostRender: function() {
                        var e = this;
                        g.formatter ? g.formatter.formatChanged(t, function(t) {
                            e.active(t);
                        }) : g.on("init", function() {
                            g.formatter.formatChanged(t, function(t) {
                                e.active(t);
                            });
                        });
                    },
                    onclick: function() {
                        m(t);
                    }
                });
            }), u({
                outdent: [ "Decrease indent", "Outdent" ],
                indent: [ "Increase indent", "Indent" ],
                cut: [ "Cut", "Cut" ],
                copy: [ "Copy", "Copy" ],
                paste: [ "Paste", "Paste" ],
                help: [ "Help", "mceHelp" ],
                selectall: [ "Select all", "SelectAll" ],
                hr: [ "Insert horizontal rule", "InsertHorizontalRule" ],
                removeformat: [ "Clear formatting", "RemoveFormat" ],
                visualaid: [ "Visual aids", "mceToggleVisualAid" ],
                newdocument: [ "New document", "mceNewDocument" ]
            }, function(e, t) {
                g.addButton(t, {
                    tooltip: e[0],
                    cmd: e[1]
                });
            }), u({
                blockquote: [ "Toggle blockquote", "mceBlockQuote" ],
                numlist: [ "Numbered list", "InsertOrderedList" ],
                bullist: [ "Bulleted list", "InsertUnorderedList" ],
                subscript: [ "Subscript", "Subscript" ],
                superscript: [ "Superscript", "Superscript" ],
                alignleft: [ "Align left", "JustifyLeft" ],
                aligncenter: [ "Align center", "JustifyCenter" ],
                alignright: [ "Align right", "JustifyRight" ],
                alignjustify: [ "Justify", "JustifyFull" ]
            }, function(e, t) {
                g.addButton(t, {
                    tooltip: e[0],
                    cmd: e[1],
                    onPostRender: function() {
                        var e = this;
                        g.formatter ? g.formatter.formatChanged(t, function(t) {
                            e.active(t);
                        }) : g.on("init", function() {
                            g.formatter.formatChanged(t, function(t) {
                                e.active(t);
                            });
                        });
                    }
                });
            }), g.addButton("undo", {
                tooltip: "Undo",
                onPostRender: f,
                cmd: "undo"
            }), g.addButton("redo", {
                tooltip: "Redo",
                onPostRender: p,
                cmd: "redo"
            }), g.addMenuItem("newdocument", {
                text: "New document",
                shortcut: "Ctrl+N",
                icon: "newdocument",
                cmd: "mceNewDocument"
            }), g.addMenuItem("undo", {
                text: "Undo",
                icon: "undo",
                shortcut: "Ctrl+Z",
                onPostRender: f,
                cmd: "undo"
            }), g.addMenuItem("redo", {
                text: "Redo",
                icon: "redo",
                shortcut: "Ctrl+Y",
                onPostRender: p,
                cmd: "redo"
            }), g.addMenuItem("visualaid", {
                text: "Visual aids",
                selectable: !0,
                onPostRender: h,
                cmd: "mceToggleVisualAid"
            }), u({
                cut: [ "Cut", "Cut", "Ctrl+X" ],
                copy: [ "Copy", "Copy", "Ctrl+C" ],
                paste: [ "Paste", "Paste", "Ctrl+V" ],
                selectall: [ "Select all", "SelectAll", "Ctrl+A" ],
                bold: [ "Bold", "Bold", "Ctrl+B" ],
                italic: [ "Italic", "Italic", "Ctrl+I" ],
                underline: [ "Underline", "Underline" ],
                strikethrough: [ "Strikethrough", "Strikethrough" ],
                subscript: [ "Subscript", "Subscript" ],
                superscript: [ "Superscript", "Superscript" ],
                removeformat: [ "Clear formatting", "RemoveFormat" ]
            }, function(e, t) {
                g.addMenuItem(t, {
                    text: e[0],
                    icon: t,
                    shortcut: e[2],
                    cmd: e[1]
                });
            }), g.on("mousedown", function() {
                r.hideAll();
            }), e.add("styleselect", function(t) {
                var n = [].concat(v);
                return e.create("menubutton", i.extend({
                    text: "Formats",
                    menu: n
                }, t));
            }), e.add("formatselect", function(t) {
                var n = [], r = c(g.settings.block_formats || "Paragraph=p;Address=address;Pre=pre;Header 1=h1;Header 2=h2;Header 3=h3;Header 4=h4;Header 5=h5;Header 6=h6");
                return u(r, function(e) {
                    n.push({
                        text: {
                            raw: e[0]
                        },
                        value: e[1],
                        textStyle: function() {
                            return s(e[1]);
                        }
                    });
                }), e.create("listbox", i.extend({
                    text: {
                        raw: r[0][0]
                    },
                    values: n,
                    fixedWidth: !0,
                    onselect: m,
                    onPostRender: l(n)
                }, t));
            }), e.add("fontselect", function(t) {
                var n = "Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats", r = [], a = c(g.settings.font_formats || n);
                return u(a, function(e) {
                    r.push({
                        text: {
                            raw: e[0]
                        },
                        value: e[1],
                        textStyle: -1 == e[1].indexOf("dings") ? "font-family:" + e[1] : ""
                    });
                }), e.create("listbox", i.extend({
                    text: "Font Family",
                    tooltip: "Font Family",
                    values: r,
                    fixedWidth: !0,
                    onPostRender: l(r, "fontname"),
                    onselect: function(e) {
                        e.control.settings.value && o.activeEditor.execCommand("FontName", !1, e.control.settings.value);
                    }
                }, t));
            }), e.add("fontsizeselect", function(t) {
                var n = [], r = "8pt 10pt 12pt 14pt 18pt 24pt 36pt", a = g.settings.fontsize_formats || r;
                return u(a.split(" "), function(e) {
                    n.push({
                        text: e,
                        value: e
                    });
                }), e.create("listbox", i.extend({
                    text: "Font Sizes",
                    tooltip: "Font Sizes",
                    values: n,
                    fixedWidth: !0,
                    onPostRender: l(n, "fontsize"),
                    onclick: function(e) {
                        e.control.settings.value && o.activeEditor.execCommand("FontSize", !1, e.control.settings.value);
                    }
                }, t));
            }), g.addMenuItem("formats", {
                text: "Formats",
                menu: v
            });
        });
    }), r(Ht, [ gt ], function(e) {
        return e.extend({
            recalc: function(e) {
                var t = e.settings, n, r, i, o, a, s, l, c, u, d, f, p, h, m, g, v, y, b, C, x, w, _, N = [], E = [], S, k, T, R, A, B;
                for (t = e.settings, i = e.items().filter(":visible"), o = e.layoutRect(), r = t.columns || Math.ceil(Math.sqrt(i.length)), 
                n = Math.ceil(i.length / r), y = t.spacingH || t.spacing || 0, b = t.spacingV || t.spacing || 0, 
                C = t.alignH || t.align, x = t.alignV || t.align, g = e._paddingBox, C && "string" == typeof C && (C = [ C ]), 
                x && "string" == typeof x && (x = [ x ]), d = 0; r > d; d++) N.push(0);
                for (f = 0; n > f; f++) E.push(0);
                for (f = 0; n > f; f++) for (d = 0; r > d && (u = i[f * r + d], u); d++) c = u.layoutRect(), 
                S = c.minW, k = c.minH, N[d] = S > N[d] ? S : N[d], E[f] = k > E[f] ? k : E[f];
                for (A = o.innerW - g.left - g.right, w = 0, d = 0; r > d; d++) w += N[d] + (d > 0 ? y : 0), 
                A -= (d > 0 ? y : 0) + N[d];
                for (B = o.innerH - g.top - g.bottom, _ = 0, f = 0; n > f; f++) _ += E[f] + (f > 0 ? b : 0), 
                B -= (f > 0 ? b : 0) + E[f];
                if (w += g.left + g.right, _ += g.top + g.bottom, l = {}, l.minW = w + (o.w - o.innerW), 
                l.minH = _ + (o.h - o.innerH), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH, 
                l.minW = Math.min(l.minW, o.maxW), l.minH = Math.min(l.minH, o.maxH), l.minW = Math.max(l.minW, o.startMinWidth), 
                l.minH = Math.max(l.minH, o.startMinHeight), !o.autoResize || l.minW == o.minW && l.minH == o.minH) {
                    o.autoResize && (l = e.layoutRect(l), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH);
                    var L;
                    L = "start" == t.packV ? 0 : B > 0 ? Math.floor(B / n) : 0;
                    var M = 0, D = t.flexWidths;
                    if (D) for (d = 0; d < D.length; d++) M += D[d]; else M = r;
                    var H = A / M;
                    for (d = 0; r > d; d++) N[d] += D ? Math.ceil(D[d] * H) : H;
                    for (h = g.top, f = 0; n > f; f++) {
                        for (p = g.left, s = E[f] + L, d = 0; r > d && (u = i[f * r + d], u); d++) m = u.settings, 
                        c = u.layoutRect(), a = N[d], T = R = 0, c.x = p, c.y = h, v = m.alignH || (C ? C[d] || C[0] : null), 
                        "center" == v ? c.x = p + a / 2 - c.w / 2 : "right" == v ? c.x = p + a - c.w : "stretch" == v && (c.w = a), 
                        v = m.alignV || (x ? x[d] || x[0] : null), "center" == v ? c.y = h + s / 2 - c.h / 2 : "bottom" == v ? c.y = h + s - c.h : "stretch" == v && (c.h = s), 
                        u.layoutRect(c), p += a + y, u.recalc && u.recalc();
                        h += s + b;
                    }
                } else if (l.w = l.minW, l.h = l.minH, e.layoutRect(l), this.recalc(e), null === e._lastRect) {
                    var P = e.parent();
                    P && (P._lastRect = null, P.recalc());
                }
            }
        });
    }), r(Pt, [ yt ], function(e) {
        return e.extend({
            renderHtml: function() {
                var e = this;
                return e.addClass("iframe"), e.canFocus = !1, '<iframe id="' + e._id + '" class="' + e.classes() + '" tabindex="-1" src="' + (e.settings.url || "javascript:''") + '" frameborder="0"></iframe>';
            },
            src: function(e) {
                this.getEl().src = e;
            },
            html: function(e) {
                return this.getEl().contentWindow.document.body.innerHTML = e, this;
            }
        });
    }), r(Ot, [ yt ], function(e) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e), t.addClass("widget"), t.addClass("label"), t.canFocus = !1, e.multiline && t.addClass("autoscroll"), 
                e.strong && t.addClass("strong");
            },
            initLayoutRect: function() {
                var e = this, t = e._super();
                return e.settings.multiline && (e.getEl().offsetWidth > t.maxW && (t.minW = t.maxW, 
                e.addClass("multiline")), e.getEl().style.width = t.minW + "px", t.startMinH = t.h = t.minH = Math.min(t.maxH, e.getEl().offsetHeight)), 
                t;
            },
            disabled: function(e) {
                var t = this, n;
                return e !== n && (t.toggleClass("label-disabled", e), t._rendered && (t.getEl()[0].className = t.classes())), 
                t._super(e);
            },
            repaint: function() {
                var e = this;
                return e.settings.multiline || (e.getEl().style.lineHeight = e.layoutRect().h + "px"), 
                e._super();
            },
            text: function(e) {
                var t = this;
                return t._rendered && e && (t.getEl().innerHTML = t.encode(e)), t._super(e);
            },
            renderHtml: function() {
                var e = this, t = e.settings.forId;
                return '<label id="' + e._id + '" class="' + e.classes() + '"' + (t ? ' for="' + t : "") + '">' + e.encode(e._text) + "</label>";
            }
        });
    }), r(It, [ q, J ], function(e, t) {
        return e.extend({
            Defaults: {
                role: "toolbar",
                layout: "flow"
            },
            init: function(e) {
                var t = this;
                t._super(e), t.addClass("toolbar");
            },
            postRender: function() {
                var e = this;
                return e.items().addClass("toolbar-item"), e.keyNav = new t({
                    root: e,
                    enableLeftRight: !0
                }), e._super();
            }
        });
    }), r(Ft, [ It ], function(e) {
        return e.extend({
            Defaults: {
                role: "menubar",
                containerCls: "menubar",
                defaults: {
                    type: "menubutton"
                }
            }
        });
    }), r(Wt, [ bt, U, Ft ], function(e, t, n) {
        function r(e, t) {
            for (;e; ) {
                if (t === e) return !0;
                e = e.parentNode;
            }
            return !1;
        }
        var i = e.extend({
            init: function(e) {
                var t = this;
                t._renderOpen = !0, t._super(e), t.addClass("menubtn"), e.fixedWidth && t.addClass("fixed-width"), 
                t.aria("haspopup", !0), t.hasPopup = !0;
            },
            showMenu: function() {
                var e = this, n = e.settings, r;
                return e.menu && e.menu.visible() ? e.hideMenu() : (e.menu || (r = n.menu || [], 
                r.length ? r = {
                    type: "menu",
                    items: r
                } : r.type = r.type || "menu", e.menu = t.create(r).parent(e).renderTo(e.getContainerElm()), 
                e.fire("createmenu"), e.menu.reflow(), e.menu.on("cancel", function(t) {
                    t.control === e.menu && e.focus();
                }), e.menu.on("show hide", function(t) {
                    t.control == e.menu && e.activeMenu("show" == t.type);
                }).fire("show"), e.aria("expanded", !0)), e.menu.show(), e.menu.layoutRect({
                    w: e.layoutRect().w
                }), e.menu.moveRel(e.getEl(), [ "bl-tl", "tl-bl" ]), void 0);
            },
            hideMenu: function() {
                var e = this;
                e.menu && (e.menu.items().each(function(e) {
                    e.hideMenu && e.hideMenu();
                }), e.menu.hide(), e.aria("expanded", !1));
            },
            activeMenu: function(e) {
                this.toggleClass("active", e);
            },
            renderHtml: function() {
                var e = this, t = e._id, r = e.classPrefix, i = e.settings.icon ? r + "ico " + r + "i-" + e.settings.icon : "";
                return e.aria("role", e.parent() instanceof n ? "menuitem" : "button"), '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1">' + '<button id="' + t + '-open" role="presentation" type="button" tabindex="-1">' + (i ? '<i class="' + i + '"></i>' : "") + "<span>" + (e._text ? (i ? " " : "") + e.encode(e._text) : "") + "</span>" + ' <i class="' + r + 'caret"></i>' + "</button>" + "</div>";
            },
            postRender: function() {
                var e = this;
                return e.on("click", function(t) {
                    t.control === e && r(t.target, e.getEl()) && (e.showMenu(), t.keyboard && e.menu.items()[0].focus());
                }), e.on("mouseenter", function(t) {
                    var n = t.control, r = e.parent(), o;
                    n && r && n instanceof i && n.parent() == r && (r.items().filter("MenuButton").each(function(e) {
                        e.hideMenu && e != n && (e.menu && e.menu.visible() && (o = !0), e.hideMenu());
                    }), o && n.showMenu());
                }), e._super();
            },
            text: function(e) {
                var t = this, n, r;
                if (t._rendered) for (r = t.getEl("open").getElementsByTagName("span"), n = 0; n < r.length; n++) r[n].innerHTML = t.encode(e);
                return this._super(e);
            },
            remove: function() {
                this._super(), this.menu && this.menu.remove();
            }
        });
        return i;
    }), r(zt, [ Wt ], function(e) {
        return e.extend({
            init: function(e) {
                var t = this, n, r, i, o, a;
                if (t._values = n = e.values, n) {
                    for (r = 0; r < n.length; r++) i = n[r].selected || e.value === n[r].value, i && (o = o || n[r].text, 
                    t._value = n[r].value);
                    e.menu = n;
                }
                e.text = e.text || o || n[0].text, t._super(e), t.addClass("listbox"), t.on("select", function(n) {
                    var r = n.control;
                    a && (n.lastControl = a), e.multiple ? r.active(!r.active()) : t.value(n.control.settings.value), 
                    a = r;
                });
            },
            value: function(e) {
                function t(e, n) {
                    e.items().each(function(e) {
                        r = e.value() === n, r && (i = i || e.text()), e.active(r), e.menu && t(e.menu, n);
                    });
                }
                var n = this, r, i, o, a;
                if ("undefined" != typeof e) {
                    if (n.menu) t(n.menu, e); else for (o = n.settings.menu, a = 0; a < o.length; a++) r = o[a].value == e, 
                    r && (i = i || o[a].text), o[a].active = r;
                    n.text(i || this.settings.text);
                }
                return n._super(e);
            }
        });
    }), r(Vt, [ yt, U ], function(e, t) {
        return e.extend({
            Defaults: {
                border: 0,
                role: "menuitem"
            },
            init: function(e) {
                var t = this;
                t.hasPopup = !0, t._super(e), e = t.settings, t.addClass("menu-item"), e.menu && t.addClass("menu-item-expand"), 
                e.preview && t.addClass("menu-item-preview"), ("-" === t._text || "|" === t._text) && (t.addClass("menu-item-sep"), 
                t.aria("role", "separator"), t.canFocus = !1, t._text = "-"), e.selectable && (t.aria("role", "menuitemcheckbox"), 
                t.aria("checked", !0), t.addClass("menu-item-checkbox"), e.icon = "selected"), t.on("mousedown", function(e) {
                    e.preventDefault();
                }), t.on("mouseenter click", function(n) {
                    n.control === t && (e.menu || "click" !== n.type ? (t.showMenu(), n.keyboard && setTimeout(function() {
                        t.menu.items()[0].focus();
                    }, 0)) : (t.parent().hideAll(), t.fire("cancel"), t.fire("select")));
                }), e.menu && t.aria("haspopup", !0);
            },
            hasMenus: function() {
                return !!this.settings.menu;
            },
            showMenu: function() {
                var e = this, n = e.settings, r;
                if (e.parent().items().each(function(t) {
                    t !== e && t.hideMenu();
                }), n.menu) {
                    r = e.menu, r ? r.show() : (r = n.menu, r.length ? r = {
                        type: "menu",
                        items: r
                    } : r.type = r.type || "menu", r = e.menu = t.create(r).parent(e).renderTo(e.getContainerElm()), 
                    r.reflow(), r.fire("show"), r.on("cancel", function() {
                        e.focus();
                    }), r.on("hide", function(t) {
                        t.control === r && e.removeClass("selected");
                    })), r._parentMenu = e.parent(), r.addClass("menu-sub");
                    var i = r.testMoveRel(e.getEl(), [ "tr-tl", "br-bl", "tl-tr", "bl-br" ]);
                    r.moveRel(e.getEl(), i), i = "menu-sub-" + i, r.removeClass(r._lastRel), r.addClass(i), 
                    r._lastRel = i, e.addClass("selected"), e.aria("expanded", !0);
                }
            },
            hideMenu: function() {
                var e = this;
                return e.menu && (e.menu.items().each(function(e) {
                    e.hideMenu && e.hideMenu();
                }), e.menu.hide(), e.aria("expanded", !1)), e;
            },
            renderHtml: function() {
                var e = this, t = e._id, n = e.settings, r = e.classPrefix, i = e.encode(e._text), o = e.settings.icon;
                return o && e.parent().addClass("menu-has-icons"), o = r + "ico " + r + "i-" + (e.settings.icon || "none"), 
                '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1">' + ("-" !== i ? '<i class="' + o + '"></i>&nbsp;' : "") + ("-" !== i ? '<span id="' + t + '-text" class="' + r + 'text">' + i + "</span>" : "") + (n.shortcut ? '<div id="' + t + '-shortcut" class="' + r + 'menu-shortcut">' + n.shortcut + "</div>" : "") + (n.menu ? '<div class="' + r + 'caret"></div>' : "") + "</div>";
            },
            postRender: function() {
                var e = this, t = e.settings, n = t.textStyle;
                if ("function" == typeof n && (n = n()), n) {
                    var r = e.getEl("text");
                    r && r.setAttribute("style", n);
                }
                return e._super();
            },
            remove: function() {
                this._super(), this.menu && this.menu.remove();
            }
        });
    }), r(Ut, [ X, J, Vt ], function(e, t, n) {
        var r = e.extend({
            Defaults: {
                defaultType: "menuitem",
                border: 1,
                layout: "stack",
                role: "menu"
            },
            init: function(e) {
                var r = this;
                e.autohide = !0, e.constrainToViewport = !0, r._super(e), r.addClass("menu"), r.keyNav = new t({
                    root: r,
                    enableUpDown: !0,
                    enableLeftRight: !0,
                    leftAction: function() {
                        r.parent() instanceof n && r.keyNav.cancel();
                    },
                    onCancel: function() {
                        r.fire("cancel", {}, !1), r.hide();
                    }
                });
            },
            repaint: function() {
                return this.toggleClass("menu-align", !0), this._super(), this.getEl().style.height = "", 
                this.getEl("body").style.height = "", this;
            },
            cancel: function() {
                var e = this;
                e.hideAll(), e.fire("cancel"), e.fire("select");
            },
            hideAll: function() {
                var e = this;
                return this.find("menuitem").exec("hideMenu"), e._super();
            },
            preRender: function() {
                var e = this;
                return e.items().each(function(t) {
                    var n = t.settings;
                    return n.icon || n.selectable ? (e._hasIcons = !0, !1) : void 0;
                }), e._super();
            }
        });
        return r;
    }), r(qt, [ xt ], function(e) {
        return e.extend({
            Defaults: {
                classes: "radio",
                role: "radio"
            }
        });
    }), r($t, [ yt, $ ], function(e, t) {
        return e.extend({
            renderHtml: function() {
                var e = this, t = e.classPrefix;
                return e.addClass("resizehandle"), "both" == e.settings.direction && e.addClass("resizehandle-both"), 
                e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes() + '">' + '<i class="' + t + "ico " + t + 'i-resize"></i>' + "</div>";
            },
            postRender: function() {
                var e = this;
                e._super(), e.resizeDragHelper = new t(this._id, {
                    start: function() {
                        e.fire("ResizeStart");
                    },
                    drag: function(t) {
                        "both" != e.settings.direction && (t.deltaX = 0), e.fire("Resize", t);
                    },
                    end: function() {
                        e.fire("ResizeEnd");
                    }
                });
            }
        });
    }), r(jt, [ yt ], function(e) {
        return e.extend({
            renderHtml: function() {
                var e = this;
                return e.addClass("spacer"), e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes() + '"></div>';
            }
        });
    }), r(Kt, [ Wt, v ], function(e, t) {
        var n = t.DOM;
        return e.extend({
            Defaults: {
                classes: "widget btn splitbtn",
                role: "splitbutton"
            },
            repaint: function() {
                var e = this, t = e.getEl(), r = e.layoutRect(), i, o, a;
                return e._super(), i = t.firstChild, o = t.lastChild, n.css(i, {
                    width: r.w - o.offsetWidth,
                    height: r.h - 2
                }), n.css(o, {
                    height: r.h - 2
                }), a = i.firstChild.style, a.width = a.height = "100%", a = o.firstChild.style, 
                a.width = a.height = "100%", e;
            },
            activeMenu: function(e) {
                var t = this;
                n.toggleClass(t.getEl().lastChild, t.classPrefix + "active", e);
            },
            renderHtml: function() {
                var e = this, t = e._id, n = e.classPrefix, r = e.settings.icon ? n + "ico " + n + "i-" + e.settings.icon : "";
                return '<div id="' + t + '" class="' + e.classes() + '">' + '<button type="button" hidefocus tabindex="-1">' + (r ? '<i class="' + r + '"></i>' : "") + (e._text ? (r ? " " : "") + e._text : "") + "</button>" + '<button type="button" class="' + n + 'open" hidefocus tabindex="-1">' + (e._menuBtnText ? (r ? " " : "") + e._menuBtnText : "") + ' <i class="' + n + 'caret"></i>' + "</button>" + "</div>";
            },
            postRender: function() {
                var e = this, t = e.settings.onclick;
                return e.on("click", function(e) {
                    e.control != this || n.getParent(e.target, "." + this.classPrefix + "open") || (e.stopImmediatePropagation(), 
                    t.call(this, e));
                }), delete e.settings.onclick, e._super();
            }
        });
    }), r(Gt, [ Mt ], function(e) {
        return e.extend({
            Defaults: {
                containerClass: "stack-layout",
                controlClass: "stack-layout-item",
                endClass: "break"
            }
        });
    }), r(Yt, [ K, z ], function(e, t) {
        "use stict";
        return e.extend({
            lastIdx: 0,
            Defaults: {
                layout: "absolute",
                defaults: {
                    type: "panel"
                }
            },
            activateTab: function(e) {
                this.activeTabId && t.removeClass(this.getEl(this.activeTabId), this.classPrefix + "active"), 
                this.activeTabId = "t" + e, t.addClass(this.getEl("t" + e), this.classPrefix + "active"), 
                e != this.lastIdx && (this.items()[this.lastIdx].hide(), this.lastIdx = e), this.items()[e].show().fire("showtab"), 
                this.reflow();
            },
            renderHtml: function() {
                var e = this, t = e._layout, n = "", r = e.classPrefix;
                return e.preRender(), t.preRender(e), e.items().each(function(t, i) {
                    n += '<div id="' + e._id + "-t" + i + '" class="' + r + 'tab" unselectable="on">' + e.encode(t.settings.title) + "</div>";
                }), '<div id="' + e._id + '" class="' + e.classes() + '" hideFocus="1" tabIndex="-1">' + '<div id="' + e._id + '-head" class="' + r + 'tabs">' + n + "</div>" + '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + t.renderHtml(e) + "</div>" + "</div>";
            },
            postRender: function() {
                var e = this;
                e._super(), e.settings.activeTab = e.settings.activeTab || 0, e.activateTab(e.settings.activeTab), 
                this.on("click", function(t) {
                    var n = t.target.parentNode;
                    if (t.target.parentNode.id == e._id + "-head") for (var r = n.childNodes.length; r--; ) n.childNodes[r] == t.target && e.activateTab(r);
                });
            },
            initLayoutRect: function() {
                var e = this, t, n, r;
                n = r = 0, e.items().each(function(t, i) {
                    n = Math.max(n, t.layoutRect().minW), r = Math.max(r, t.layoutRect().minH), e.settings.activeTab != i && t.hide();
                }), e.items().each(function(e) {
                    e.settings.x = 0, e.settings.y = 0, e.settings.w = n, e.settings.h = r, e.layoutRect({
                        x: 0,
                        y: 0,
                        w: n,
                        h: r
                    });
                });
                var i = e.getEl("head").offsetHeight;
                return e.settings.minWidth = n, e.settings.minHeight = r + i, t = e._super(), t.deltaH += e.getEl("head").offsetHeight, 
                t.innerH = t.h - t.deltaH, t;
            }
        });
    }), r(Xt, [ yt, z ], function(e, t) {
        return e.extend({
            init: function(e) {
                var t = this;
                t._super(e), t._value = e.value || "", t.addClass("textbox"), e.multiline ? t.addClass("multiline") : t.on("keydown", function(e) {
                    13 == e.keyCode && t.parents().reverse().each(function(t) {
                        return e.preventDefault(), t.submit ? (t.submit(), !1) : void 0;
                    });
                });
            },
            value: function(e) {
                var t = this;
                return "undefined" != typeof e ? (t._value = e, t._rendered && (t.getEl().value = e), 
                t) : t._rendered ? t.getEl().value : t._value;
            },
            repaint: function() {
                var e = this, t, n, r, i = 0, o = 0, a;
                t = e.getEl().style, n = e._layoutRect, a = e._lastRepaintRect || {};
                var s = document;
                return !e.settings.multiline && s.all && (!s.documentMode || s.documentMode <= 8) && (t.lineHeight = n.h - o + "px"), 
                r = e._borderBox, i = r.left + r.right + 8, o = r.top + r.bottom + (e.settings.multiline ? 8 : 0), 
                n.x !== a.x && (t.left = n.x + "px", a.x = n.x), n.y !== a.y && (t.top = n.y + "px", 
                a.y = n.y), n.w !== a.w && (t.width = n.w - i + "px", a.w = n.w), n.h !== a.h && (t.height = n.h - o + "px", 
                a.h = n.h), e._lastRepaintRect = a, e.fire("repaint", {}, !1), e;
            },
            renderHtml: function() {
                var e = this, t = e._id, n = e.settings, r = e.encode(e._value, !1), i = "";
                return "spellcheck" in n && (i += ' spellcheck="' + n.spellcheck + '"'), n.maxLength && (i += ' maxlength="' + n.maxLength + '"'), 
                n.size && (i += ' size="' + n.size + '"'), n.subtype && (i += ' type="' + n.subtype + '"'), 
                n.multiline ? '<textarea id="' + t + '" class="' + e.classes() + '" ' + (n.rows ? ' rows="' + n.rows + '"' : "") + ' hidefocus="true"' + i + ">" + r + "</textarea>" : '<input id="' + t + '" class="' + e.classes() + '" value="' + r + '" hidefocus="true"' + i + ">";
            },
            postRender: function() {
                var e = this;
                return t.on(e.getEl(), "change", function(t) {
                    e.fire("change", t);
                }), e._super();
            }
        });
    }), r(Jt, [ z ], function(e) {
        return function(t) {
            var n = this, r;
            n.show = function(i) {
                return n.hide(), r = !0, window.setTimeout(function() {
                    r && t.appendChild(e.createFragment('<div class="mce-throbber"></div>'));
                }, i || 0), n;
            }, n.hide = function() {
                var e = t.lastChild;
                return e && -1 != e.className.indexOf("throbber") && e.parentNode.removeChild(e), 
                r = !1, n;
            };
        };
    }), a([ l, c, u, d, f, p, h, m, g, v, y, b, C, x, w, _, N, E, S, k, T, R, A, B, L, M, D, H, P, O, I, F, W, z, V, U, q, $, j, K, G, Y, X, J, Q, Z, et, tt, nt, rt, it, ot, at, st, lt, ct, ut, dt, ft, pt, ht, mt, gt, vt, yt, bt, Ct, xt, wt, _t, Nt, Et, St, kt, Tt, Rt, At, Bt, Lt, Mt, Dt, Ht, Pt, Ot, It, Ft, Wt, zt, Vt, Ut, qt, $t, jt, Kt, Gt, Yt, Xt, Jt ]);
}(this);

tinymce.PluginManager.add("advlist", function(t) {
    function e(t, e) {
        var n = [];
        return tinymce.each(e.split(/[ ,]/), function(t) {
            n.push({
                text: t.replace(/\-/g, " ").replace(/\b\w/g, function(t) {
                    return t.toUpperCase();
                }),
                data: "default" == t ? "" : t
            });
        }), n;
    }
    function n(e, n) {
        var i, r = t.dom, a = t.selection;
        i = r.getParent(a.getNode(), "ol,ul"), i && i.nodeName == e && n !== !1 || t.execCommand("UL" == e ? "InsertUnorderedList" : "InsertOrderedList"), 
        n = n === !1 ? o[e] : n, o[e] = n, i = r.getParent(a.getNode(), "ol,ul"), i && (r.setStyle(i, "listStyleType", n), 
        i.removeAttribute("data-mce-style")), t.focus();
    }
    function i(e) {
        var n = t.dom.getStyle(t.dom.getParent(t.selection.getNode(), "ol,ul"), "listStyleType") || "";
        e.control.items().each(function(t) {
            t.active(t.settings.data === n);
        });
    }
    var r, a, o = {};
    r = e("OL", t.getParam("advlist_number_styles", "default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman")), 
    a = e("UL", t.getParam("advlist_bullet_styles", "default,circle,disc,square")), 
    t.addButton("numlist", {
        type: "splitbutton",
        tooltip: "Numbered list",
        menu: r,
        onshow: i,
        onselect: function(t) {
            n("OL", t.control.settings.data);
        },
        onclick: function() {
            n("OL", !1);
        }
    }), t.addButton("bullist", {
        type: "splitbutton",
        tooltip: "Bullet list",
        menu: a,
        onshow: i,
        onselect: function(t) {
            n("UL", t.control.settings.data);
        },
        onclick: function() {
            n("UL", !1);
        }
    });
});

tinymce.PluginManager.add("anchor", function(e) {
    function t() {
        e.windowManager.open({
            title: "Anchor",
            body: {
                type: "textbox",
                name: "name",
                size: 40,
                label: "Name",
                value: e.selection.getNode().id
            },
            onsubmit: function(t) {
                e.execCommand("mceInsertContent", !1, e.dom.createHTML("a", {
                    id: t.data.name
                }));
            }
        });
    }
    e.addButton("anchor", {
        icon: "anchor",
        tooltip: "Anchor",
        onclick: t,
        stateSelector: "a:not([href])"
    }), e.addMenuItem("anchor", {
        icon: "anchor",
        text: "Anchor",
        context: "insert",
        onclick: t
    });
});

tinymce.PluginManager.add("autolink", function(t) {
    function e(t) {
        o(t, -1, "(", !0);
    }
    function n(t) {
        o(t, 0, "", !0);
    }
    function i(t) {
        o(t, -1, "", !1);
    }
    function o(t, e, n) {
        var i, o, r, a, s, l, c, u, d;
        if (i = t.selection.getRng(!0).cloneRange(), i.startOffset < 5) {
            if (u = i.endContainer.previousSibling, !u) {
                if (!i.endContainer.firstChild || !i.endContainer.firstChild.nextSibling) return;
                u = i.endContainer.firstChild.nextSibling;
            }
            if (d = u.length, i.setStart(u, d), i.setEnd(u, d), i.endOffset < 5) return;
            o = i.endOffset, a = u;
        } else {
            if (a = i.endContainer, 3 != a.nodeType && a.firstChild) {
                for (;3 != a.nodeType && a.firstChild; ) a = a.firstChild;
                3 == a.nodeType && (i.setStart(a, 0), i.setEnd(a, a.nodeValue.length));
            }
            o = 1 == i.endOffset ? 2 : i.endOffset - 1 - e;
        }
        r = o;
        do i.setStart(a, o >= 2 ? o - 2 : 0), i.setEnd(a, o >= 1 ? o - 1 : 0), o -= 1; while (" " != i.toString() && "" !== i.toString() && 160 != i.toString().charCodeAt(0) && o - 2 >= 0 && i.toString() != n);
        if (i.toString() == n || 160 == i.toString().charCodeAt(0) ? (i.setStart(a, o), 
        i.setEnd(a, r), o += 1) : 0 === i.startOffset ? (i.setStart(a, 0), i.setEnd(a, r)) : (i.setStart(a, o), 
        i.setEnd(a, r)), l = i.toString(), "." == l.charAt(l.length - 1) && i.setEnd(a, r - 1), 
        l = i.toString(), c = l.match(/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@)(.+)$/i), 
        c && ("www." == c[1] ? c[1] = "http://www." : /@$/.test(c[1]) && !/^mailto:/.test(c[1]) && (c[1] = "mailto:" + c[1]), 
        s = t.selection.getBookmark(), t.selection.setRng(i), t.execCommand("createlink", !1, c[1] + c[2]), 
        t.selection.moveToBookmark(s), t.nodeChanged(), tinymce.Env.webkit)) {
            t.selection.collapse(!1);
            var m = Math.min(a.length, r + 1);
            i.setStart(a, m), i.setEnd(a, m), t.selection.setRng(i);
        }
    }
    t.on("keydown", function(e) {
        return 13 == e.keyCode ? i(t) : void 0;
    }), tinymce.Env.ie || (t.on("keypress", function(n) {
        return 41 == n.which ? e(t) : void 0;
    }), t.on("keyup", function(e) {
        return 32 == e.keyCode ? n(t) : void 0;
    }));
});

tinymce.PluginManager.add("autoresize", function(e) {
    function t(a) {
        var r, o, c = e.getDoc(), s = c.body, u = c.documentElement, l = tinymce.DOM, m = n.autoresize_min_height;
        "setcontent" == a.type && a.initial || e.plugins.fullscreen && e.plugins.fullscreen.isFullscreen() || (o = tinymce.Env.ie ? s.scrollHeight : tinymce.Env.webkit && 0 === s.clientHeight ? 0 : s.offsetHeight, 
        o > n.autoresize_min_height && (m = o), n.autoresize_max_height && o > n.autoresize_max_height ? (m = n.autoresize_max_height, 
        s.style.overflowY = "auto", u.style.overflowY = "auto") : (s.style.overflowY = "hidden", 
        u.style.overflowY = "hidden", s.scrollTop = 0), m !== i && (r = m - i, l.setStyle(l.get(e.id + "_ifr"), "height", m + "px"), 
        i = m, tinymce.isWebKit && 0 > r && t(a)));
    }
    var n = e.settings, i = 0;
    e.settings.inline || (n.autoresize_min_height = parseInt(e.getParam("autoresize_min_height", e.getElement().offsetHeight), 10), 
    n.autoresize_max_height = parseInt(e.getParam("autoresize_max_height", 0), 10), 
    e.on("init", function() {
        e.dom.setStyle(e.getBody(), "paddingBottom", e.getParam("autoresize_bottom_margin", 50) + "px");
    }), e.on("change setcontent paste keyup", t), e.getParam("autoresize_on_init", !0) && e.on("load", t), 
    e.addCommand("mceAutoResize", t));
});

tinymce.PluginManager.add("autosave", function(t) {
    function e(t, e) {
        var n = {
            s: 1e3,
            m: 6e4
        };
        return t = /^(\d+)([ms]?)$/.exec("" + (t || e)), (t[2] ? n[t[2]] : 1) * parseInt(t, 10);
    }
    function n() {
        var t = parseInt(m.getItem(f + "autosave.time"), 10) || 0;
        return new Date().getTime() - t > d.autosave_retention ? (i(), !1) : !0;
    }
    function i() {
        m.removeItem(f + "autosave.draft"), m.removeItem(f + "autosave.time");
    }
    function a() {
        c && t.isDirty() && (m.setItem(f + "autosave.draft", t.getContent({
            format: "raw",
            no_events: !0
        })), m.setItem(f + "autosave.time", new Date().getTime()), t.fire("StoreDraft"));
    }
    function r() {
        n() && (t.setContent(m.getItem(f + "autosave.draft"), {
            format: "raw"
        }), i(), t.fire("RestoreDraft"));
    }
    function o() {
        c || (setInterval(function() {
            t.removed || a();
        }, d.autosave_interval), c = !0);
    }
    function s() {
        var e = this;
        e.disabled(!n()), t.on("StoreDraft RestoreDraft", function() {
            e.disabled(!n());
        }), o();
    }
    function l() {
        t.undoManager.beforeChange(), r(), t.undoManager.add();
    }
    function u() {
        var t;
        return tinymce.each(tinymce.editors, function(e) {
            e.plugins.autosave && e.plugins.autosave.storeDraft(), !t && e.isDirty() && e.getParam("autosave_ask_before_unload", !0) && (t = e.translate("You have unsaved changes are you sure you want to navigate away?"));
        }), t;
    }
    var c, d = t.settings, m = tinymce.util.LocalStorage, f = t.id;
    d.autosave_interval = e(d.autosave_interval, "30s"), d.autosave_retention = e(d.autosave_retention, "20m"), 
    t.addButton("restoredraft", {
        title: "Restore last draft",
        onclick: l,
        onPostRender: s
    }), t.addMenuItem("restoredraft", {
        text: "Restore last draft",
        onclick: l,
        onPostRender: s,
        context: "file"
    }), this.storeDraft = a, window.onbeforeunload = u;
});

!function() {
    tinymce.create("tinymce.plugins.BBCodePlugin", {
        init: function(e) {
            var t = this, n = e.getParam("bbcode_dialect", "punbb").toLowerCase();
            e.on("beforeSetContent", function(e) {
                e.content = t["_" + n + "_bbcode2html"](e.content);
            }), e.on("postProcess", function(e) {
                e.set && (e.content = t["_" + n + "_bbcode2html"](e.content)), e.get && (e.content = t["_" + n + "_html2bbcode"](e.content));
            });
        },
        getInfo: function() {
            return {
                longname: "BBCode Plugin",
                author: "Moxiecode Systems AB",
                authorurl: "http://www.tinymce.com",
                infourl: "http://www.tinymce.com/wiki.php/Plugin:bbcode"
            };
        },
        _punbb_html2bbcode: function(e) {
            function t(t, n) {
                e = e.replace(t, n);
            }
            return e = tinymce.trim(e), t(/<a.*?href=\"(.*?)\".*?>(.*?)<\/a>/gi, "[url=$1]$2[/url]"), 
            t(/<font.*?color=\"(.*?)\".*?class=\"codeStyle\".*?>(.*?)<\/font>/gi, "[code][color=$1]$2[/color][/code]"), 
            t(/<font.*?color=\"(.*?)\".*?class=\"quoteStyle\".*?>(.*?)<\/font>/gi, "[quote][color=$1]$2[/color][/quote]"), 
            t(/<font.*?class=\"codeStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi, "[code][color=$1]$2[/color][/code]"), 
            t(/<font.*?class=\"quoteStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi, "[quote][color=$1]$2[/color][/quote]"), 
            t(/<span style=\"color: ?(.*?);\">(.*?)<\/span>/gi, "[color=$1]$2[/color]"), t(/<font.*?color=\"(.*?)\".*?>(.*?)<\/font>/gi, "[color=$1]$2[/color]"), 
            t(/<span style=\"font-size:(.*?);\">(.*?)<\/span>/gi, "[size=$1]$2[/size]"), t(/<font>(.*?)<\/font>/gi, "$1"), 
            t(/<img.*?src=\"(.*?)\".*?\/>/gi, "[img]$1[/img]"), t(/<span class=\"codeStyle\">(.*?)<\/span>/gi, "[code]$1[/code]"), 
            t(/<span class=\"quoteStyle\">(.*?)<\/span>/gi, "[quote]$1[/quote]"), t(/<strong class=\"codeStyle\">(.*?)<\/strong>/gi, "[code][b]$1[/b][/code]"), 
            t(/<strong class=\"quoteStyle\">(.*?)<\/strong>/gi, "[quote][b]$1[/b][/quote]"), 
            t(/<em class=\"codeStyle\">(.*?)<\/em>/gi, "[code][i]$1[/i][/code]"), t(/<em class=\"quoteStyle\">(.*?)<\/em>/gi, "[quote][i]$1[/i][/quote]"), 
            t(/<u class=\"codeStyle\">(.*?)<\/u>/gi, "[code][u]$1[/u][/code]"), t(/<u class=\"quoteStyle\">(.*?)<\/u>/gi, "[quote][u]$1[/u][/quote]"), 
            t(/<\/(strong|b)>/gi, "[/b]"), t(/<(strong|b)>/gi, "[b]"), t(/<\/(em|i)>/gi, "[/i]"), 
            t(/<(em|i)>/gi, "[i]"), t(/<\/u>/gi, "[/u]"), t(/<span style=\"text-decoration: ?underline;\">(.*?)<\/span>/gi, "[u]$1[/u]"), 
            t(/<u>/gi, "[u]"), t(/<blockquote[^>]*>/gi, "[quote]"), t(/<\/blockquote>/gi, "[/quote]"), 
            t(/<br \/>/gi, "\n"), t(/<br\/>/gi, "\n"), t(/<br>/gi, "\n"), t(/<p>/gi, ""), t(/<\/p>/gi, "\n"), 
            t(/&nbsp;|\u00a0/gi, " "), t(/&quot;/gi, '"'), t(/&lt;/gi, "<"), t(/&gt;/gi, ">"), 
            t(/&amp;/gi, "&"), e;
        },
        _punbb_bbcode2html: function(e) {
            function t(t, n) {
                e = e.replace(t, n);
            }
            return e = tinymce.trim(e), t(/\n/gi, "<br />"), t(/\[b\]/gi, "<strong>"), t(/\[\/b\]/gi, "</strong>"), 
            t(/\[i\]/gi, "<em>"), t(/\[\/i\]/gi, "</em>"), t(/\[u\]/gi, "<u>"), t(/\[\/u\]/gi, "</u>"), 
            t(/\[url=([^\]]+)\](.*?)\[\/url\]/gi, '<a href="$1">$2</a>'), t(/\[url\](.*?)\[\/url\]/gi, '<a href="$1">$1</a>'), 
            t(/\[img\](.*?)\[\/img\]/gi, '<img src="$1" />'), t(/\[color=(.*?)\](.*?)\[\/color\]/gi, '<font color="$1">$2</font>'), 
            t(/\[code\](.*?)\[\/code\]/gi, '<span class="codeStyle">$1</span>&nbsp;'), t(/\[quote.*?\](.*?)\[\/quote\]/gi, '<span class="quoteStyle">$1</span>&nbsp;'), 
            e;
        }
    }), tinymce.PluginManager.add("bbcode", tinymce.plugins.BBCodePlugin);
}();

tinymce.PluginManager.add("charmap", function(e) {
    function t() {
        function t(e) {
            for (;e; ) {
                if ("TD" == e.nodeName) return e;
                e = e.parentNode;
            }
        }
        var i, a, r, o;
        i = '<table role="presentation" cellspacing="0" class="mce-charmap"><tbody>';
        var s = 25;
        for (r = 0; 10 > r; r++) {
            for (i += "<tr>", a = 0; s > a; a++) {
                var l = n[r * s + a], c = "g" + (r * s + a);
                i += '<td title="' + l[1] + '"><div id="' + c + '" tabIndex="-1">' + (l ? String.fromCharCode(parseInt(l[0], 10)) : "&nbsp;") + "</div></td>";
            }
            i += "</tr>";
        }
        i += "</tbody></table>";
        var u = {
            type: "container",
            html: i,
            onclick: function(t) {
                var n = t.target;
                "DIV" == n.nodeName && e.execCommand("mceInsertContent", !1, n.firstChild.nodeValue);
            },
            onmouseover: function(e) {
                var n = t(e.target);
                n && o.find("#preview").text(n.firstChild.firstChild.data);
            }
        };
        o = e.windowManager.open({
            title: "Special character",
            spacing: 10,
            padding: 10,
            items: [ u, {
                type: "label",
                name: "preview",
                text: " ",
                style: "font-size: 40px; text-align: center",
                border: 1,
                minWidth: 100,
                minHeight: 80
            } ],
            buttons: [ {
                text: "Close",
                onclick: function() {
                    o.close();
                }
            } ]
        });
    }
    var n = [ [ "160", "no-break space" ], [ "38", "ampersand" ], [ "34", "quotation mark" ], [ "162", "cent sign" ], [ "8364", "euro sign" ], [ "163", "pound sign" ], [ "165", "yen sign" ], [ "169", "copyright sign" ], [ "174", "registered sign" ], [ "8482", "trade mark sign" ], [ "8240", "per mille sign" ], [ "181", "micro sign" ], [ "183", "middle dot" ], [ "8226", "bullet" ], [ "8230", "three dot leader" ], [ "8242", "minutes / feet" ], [ "8243", "seconds / inches" ], [ "167", "section sign" ], [ "182", "paragraph sign" ], [ "223", "sharp s / ess-zed" ], [ "8249", "single left-pointing angle quotation mark" ], [ "8250", "single right-pointing angle quotation mark" ], [ "171", "left pointing guillemet" ], [ "187", "right pointing guillemet" ], [ "8216", "left single quotation mark" ], [ "8217", "right single quotation mark" ], [ "8220", "left double quotation mark" ], [ "8221", "right double quotation mark" ], [ "8218", "single low-9 quotation mark" ], [ "8222", "double low-9 quotation mark" ], [ "60", "less-than sign" ], [ "62", "greater-than sign" ], [ "8804", "less-than or equal to" ], [ "8805", "greater-than or equal to" ], [ "8211", "en dash" ], [ "8212", "em dash" ], [ "175", "macron" ], [ "8254", "overline" ], [ "164", "currency sign" ], [ "166", "broken bar" ], [ "168", "diaeresis" ], [ "161", "inverted exclamation mark" ], [ "191", "turned question mark" ], [ "710", "circumflex accent" ], [ "732", "small tilde" ], [ "176", "degree sign" ], [ "8722", "minus sign" ], [ "177", "plus-minus sign" ], [ "247", "division sign" ], [ "8260", "fraction slash" ], [ "215", "multiplication sign" ], [ "185", "superscript one" ], [ "178", "superscript two" ], [ "179", "superscript three" ], [ "188", "fraction one quarter" ], [ "189", "fraction one half" ], [ "190", "fraction three quarters" ], [ "402", "function / florin" ], [ "8747", "integral" ], [ "8721", "n-ary sumation" ], [ "8734", "infinity" ], [ "8730", "square root" ], [ "8764", "similar to" ], [ "8773", "approximately equal to" ], [ "8776", "almost equal to" ], [ "8800", "not equal to" ], [ "8801", "identical to" ], [ "8712", "element of" ], [ "8713", "not an element of" ], [ "8715", "contains as member" ], [ "8719", "n-ary product" ], [ "8743", "logical and" ], [ "8744", "logical or" ], [ "172", "not sign" ], [ "8745", "intersection" ], [ "8746", "union" ], [ "8706", "partial differential" ], [ "8704", "for all" ], [ "8707", "there exists" ], [ "8709", "diameter" ], [ "8711", "backward difference" ], [ "8727", "asterisk operator" ], [ "8733", "proportional to" ], [ "8736", "angle" ], [ "180", "acute accent" ], [ "184", "cedilla" ], [ "170", "feminine ordinal indicator" ], [ "186", "masculine ordinal indicator" ], [ "8224", "dagger" ], [ "8225", "double dagger" ], [ "192", "A - grave" ], [ "193", "A - acute" ], [ "194", "A - circumflex" ], [ "195", "A - tilde" ], [ "196", "A - diaeresis" ], [ "197", "A - ring above" ], [ "198", "ligature AE" ], [ "199", "C - cedilla" ], [ "200", "E - grave" ], [ "201", "E - acute" ], [ "202", "E - circumflex" ], [ "203", "E - diaeresis" ], [ "204", "I - grave" ], [ "205", "I - acute" ], [ "206", "I - circumflex" ], [ "207", "I - diaeresis" ], [ "208", "ETH" ], [ "209", "N - tilde" ], [ "210", "O - grave" ], [ "211", "O - acute" ], [ "212", "O - circumflex" ], [ "213", "O - tilde" ], [ "214", "O - diaeresis" ], [ "216", "O - slash" ], [ "338", "ligature OE" ], [ "352", "S - caron" ], [ "217", "U - grave" ], [ "218", "U - acute" ], [ "219", "U - circumflex" ], [ "220", "U - diaeresis" ], [ "221", "Y - acute" ], [ "376", "Y - diaeresis" ], [ "222", "THORN" ], [ "224", "a - grave" ], [ "225", "a - acute" ], [ "226", "a - circumflex" ], [ "227", "a - tilde" ], [ "228", "a - diaeresis" ], [ "229", "a - ring above" ], [ "230", "ligature ae" ], [ "231", "c - cedilla" ], [ "232", "e - grave" ], [ "233", "e - acute" ], [ "234", "e - circumflex" ], [ "235", "e - diaeresis" ], [ "236", "i - grave" ], [ "237", "i - acute" ], [ "238", "i - circumflex" ], [ "239", "i - diaeresis" ], [ "240", "eth" ], [ "241", "n - tilde" ], [ "242", "o - grave" ], [ "243", "o - acute" ], [ "244", "o - circumflex" ], [ "245", "o - tilde" ], [ "246", "o - diaeresis" ], [ "248", "o slash" ], [ "339", "ligature oe" ], [ "353", "s - caron" ], [ "249", "u - grave" ], [ "250", "u - acute" ], [ "251", "u - circumflex" ], [ "252", "u - diaeresis" ], [ "253", "y - acute" ], [ "254", "thorn" ], [ "255", "y - diaeresis" ], [ "913", "Alpha" ], [ "914", "Beta" ], [ "915", "Gamma" ], [ "916", "Delta" ], [ "917", "Epsilon" ], [ "918", "Zeta" ], [ "919", "Eta" ], [ "920", "Theta" ], [ "921", "Iota" ], [ "922", "Kappa" ], [ "923", "Lambda" ], [ "924", "Mu" ], [ "925", "Nu" ], [ "926", "Xi" ], [ "927", "Omicron" ], [ "928", "Pi" ], [ "929", "Rho" ], [ "931", "Sigma" ], [ "932", "Tau" ], [ "933", "Upsilon" ], [ "934", "Phi" ], [ "935", "Chi" ], [ "936", "Psi" ], [ "937", "Omega" ], [ "945", "alpha" ], [ "946", "beta" ], [ "947", "gamma" ], [ "948", "delta" ], [ "949", "epsilon" ], [ "950", "zeta" ], [ "951", "eta" ], [ "952", "theta" ], [ "953", "iota" ], [ "954", "kappa" ], [ "955", "lambda" ], [ "956", "mu" ], [ "957", "nu" ], [ "958", "xi" ], [ "959", "omicron" ], [ "960", "pi" ], [ "961", "rho" ], [ "962", "final sigma" ], [ "963", "sigma" ], [ "964", "tau" ], [ "965", "upsilon" ], [ "966", "phi" ], [ "967", "chi" ], [ "968", "psi" ], [ "969", "omega" ], [ "8501", "alef symbol" ], [ "982", "pi symbol" ], [ "8476", "real part symbol" ], [ "978", "upsilon - hook symbol" ], [ "8472", "Weierstrass p" ], [ "8465", "imaginary part" ], [ "8592", "leftwards arrow" ], [ "8593", "upwards arrow" ], [ "8594", "rightwards arrow" ], [ "8595", "downwards arrow" ], [ "8596", "left right arrow" ], [ "8629", "carriage return" ], [ "8656", "leftwards double arrow" ], [ "8657", "upwards double arrow" ], [ "8658", "rightwards double arrow" ], [ "8659", "downwards double arrow" ], [ "8660", "left right double arrow" ], [ "8756", "therefore" ], [ "8834", "subset of" ], [ "8835", "superset of" ], [ "8836", "not a subset of" ], [ "8838", "subset of or equal to" ], [ "8839", "superset of or equal to" ], [ "8853", "circled plus" ], [ "8855", "circled times" ], [ "8869", "perpendicular" ], [ "8901", "dot operator" ], [ "8968", "left ceiling" ], [ "8969", "right ceiling" ], [ "8970", "left floor" ], [ "8971", "right floor" ], [ "9001", "left-pointing angle bracket" ], [ "9002", "right-pointing angle bracket" ], [ "9674", "lozenge" ], [ "9824", "black spade suit" ], [ "9827", "black club suit" ], [ "9829", "black heart suit" ], [ "9830", "black diamond suit" ], [ "8194", "en space" ], [ "8195", "em space" ], [ "8201", "thin space" ], [ "8204", "zero width non-joiner" ], [ "8205", "zero width joiner" ], [ "8206", "left-to-right mark" ], [ "8207", "right-to-left mark" ], [ "173", "soft hyphen" ] ];
    e.addButton("charmap", {
        icon: "charmap",
        tooltip: "Special character",
        onclick: t
    }), e.addMenuItem("charmap", {
        icon: "charmap",
        text: "Special character",
        onclick: t,
        context: "insert"
    });
});

tinymce.PluginManager.add("code", function(e) {
    function t() {
        e.windowManager.open({
            title: "Source code",
            body: {
                type: "textbox",
                name: "code",
                multiline: !0,
                minWidth: 600,
                minHeight: 500,
                value: e.getContent({
                    source_view: !0
                }),
                spellcheck: !1
            },
            onSubmit: function(t) {
                e.setContent(t.data.code);
            }
        });
    }
    e.addButton("code", {
        icon: "code",
        tooltip: "Source code",
        onclick: t
    }), e.addMenuItem("code", {
        icon: "code",
        text: "Source code",
        context: "tools",
        onclick: t
    });
});

tinymce.PluginManager.add("contextmenu", function(e) {
    var t;
    e.on("contextmenu", function(n) {
        var i;
        if (n.preventDefault(), i = e.settings.contextmenu || "link image inserttable | cell row column deletetable", 
        t) t.show(); else {
            var o = [];
            tinymce.each(i.split(/[ ,]/), function(t) {
                var n = e.menuItems[t];
                "|" == t && (n = {
                    text: t
                }), n && (n.shortcut = "", o.push(n));
            });
            for (var a = 0; a < o.length; a++) "|" == o[a].text && (0 === a || a == o.length - 1) && o.splice(a, 1);
            t = new tinymce.ui.Menu({
                items: o,
                context: "contextmenu"
            }), t.renderTo(document.body);
        }
        var r = {
            x: n.pageX,
            y: n.pageY
        };
        e.inline || (r = tinymce.DOM.getPos(e.getContentAreaContainer()), r.x += n.clientX, 
        r.y += n.clientY), t.moveTo(r.x, r.y), e.on("remove", function() {
            t.remove(), t = null;
        });
    });
});

tinymce.PluginManager.add("directionality", function(e) {
    function t(t) {
        var n, i = e.dom, a = e.selection.getSelectedBlocks();
        a.length && (n = i.getAttrib(a[0], "dir"), tinymce.each(a, function(e) {
            i.getParent(e.parentNode, "*[dir='" + t + "']", i.getRoot()) || (n != t ? i.setAttrib(e, "dir", t) : i.setAttrib(e, "dir", null));
        }), e.nodeChanged());
    }
    function n(e) {
        var t = [];
        return tinymce.each("h1 h2 h3 h4 h5 h6 div p".split(" "), function(n) {
            t.push(n + "[dir=" + e + "]");
        }), t.join(",");
    }
    e.addCommand("mceDirectionLTR", function() {
        t("ltr");
    }), e.addCommand("mceDirectionRTL", function() {
        t("rtl");
    }), e.addButton("ltr", {
        title: "Left to right",
        cmd: "mceDirectionLTR",
        stateSelector: n("ltr")
    }), e.addButton("rtl", {
        title: "Right to left",
        cmd: "mceDirectionRTL",
        stateSelector: n("rtl")
    });
});

tinymce.PluginManager.add("emoticons", function(e, t) {
    function n() {
        var e;
        return e = '<table role="presentation" class="mce-grid">', tinymce.each(i, function(n) {
            e += "<tr>", tinymce.each(n, function(n) {
                var i = t + "/img/smiley-" + n + ".gif";
                e += '<td><a href="#" data-mce-url="' + i + '" tabindex="-1"><img src="' + i + '" style="width: 18px; height: 18px"></a></td>';
            }), e += "</tr>";
        }), e += "</table>";
    }
    var i = [ [ "cool", "cry", "embarassed", "foot-in-mouth" ], [ "frown", "innocent", "kiss", "laughing" ], [ "money-mouth", "sealed", "smile", "surprised" ], [ "tongue-out", "undecided", "wink", "yell" ] ];
    e.addButton("emoticons", {
        type: "panelbutton",
        popoverAlign: "bc-tl",
        panel: {
            autohide: !0,
            html: n,
            onclick: function(t) {
                var n = e.dom.getParent(t.target, "a");
                n && (e.insertContent('<img src="' + n.getAttribute("data-mce-url") + '" />'), this.hide());
            }
        },
        tooltip: "Emoticons"
    });
});

tinymce.PluginManager.add("fullpage", function(e) {
    function t() {
        var t = l();
        e.windowManager.open({
            title: "Document properties",
            data: t,
            defaults: {
                type: "textbox",
                size: 40
            },
            body: [ {
                name: "title",
                label: "Title"
            }, {
                name: "keywords",
                label: "Keywords"
            }, {
                name: "description",
                label: "Description"
            }, {
                name: "robots",
                label: "Robots"
            }, {
                name: "author",
                label: "Author"
            }, {
                name: "docencoding",
                label: "Encoding"
            } ],
            onSubmit: function(e) {
                n(tinymce.extend(t, e.data));
            }
        });
    }
    function l() {
        function t(e, t) {
            var l = e.attr(t);
            return l || "";
        }
        var l, n, a = i(), o = {};
        return o.fontface = e.getParam("fullpage_default_fontface", ""), o.fontsize = e.getParam("fullpage_default_fontsize", ""), 
        l = a.firstChild, 7 == l.type && (o.xml_pi = !0, n = /encoding="([^"]+)"/.exec(l.value), 
        n && (o.docencoding = n[1])), l = a.getAll("#doctype")[0], l && (o.doctype = "<!DOCTYPE" + l.value + ">"), 
        l = a.getAll("title")[0], l && l.firstChild && (o.title = l.firstChild.value), c(a.getAll("meta"), function(e) {
            var t, l = e.attr("name"), n = e.attr("http-equiv");
            l ? o[l.toLowerCase()] = e.attr("content") : "Content-Type" == n && (t = /charset\s*=\s*(.*)\s*/gi.exec(e.attr("content")), 
            t && (o.docencoding = t[1]));
        }), l = a.getAll("html")[0], l && (o.langcode = t(l, "lang") || t(l, "xml:lang")), 
        l = a.getAll("link")[0], l && "stylesheet" == l.attr("rel") && (o.stylesheet = l.attr("href")), 
        l = a.getAll("body")[0], l && (o.langdir = t(l, "dir"), o.style = t(l, "style"), 
        o.visited_color = t(l, "vlink"), o.link_color = t(l, "link"), o.active_color = t(l, "alink")), 
        o;
    }
    function n(t) {
        function l(e, t, l) {
            e.attr(t, l ? l : void 0);
        }
        function n(e) {
            o.firstChild ? o.insert(e, o.firstChild) : o.append(e);
        }
        var a, o, r, s, m, u = e.dom;
        a = i(), o = a.getAll("head")[0], o || (s = a.getAll("html")[0], o = new g("head", 1), 
        s.firstChild ? s.insert(o, s.firstChild, !0) : s.append(o)), s = a.firstChild, t.xml_pi ? (m = 'version="1.0"', 
        t.docencoding && (m += ' encoding="' + t.docencoding + '"'), 7 != s.type && (s = new g("xml", 7), 
        a.insert(s, a.firstChild, !0)), s.value = m) : s && 7 == s.type && s.remove(), s = a.getAll("#doctype")[0], 
        t.doctype ? (s || (s = new g("#doctype", 10), t.xml_pi ? a.insert(s, a.firstChild) : n(s)), 
        s.value = t.doctype.substring(9, t.doctype.length - 1)) : s && s.remove(), t.docencoding && (s = null, 
        c(a.getAll("meta"), function(e) {
            "Content-Type" == e.attr("http-equiv") && (s = e);
        }), s || (s = new g("meta", 1), s.attr("http-equiv", "Content-Type"), s.shortEnded = !0, 
        n(s)), s.attr("content", "text/html; charset=" + t.docencoding)), s = a.getAll("title")[0], 
        t.title ? s || (s = new g("title", 1), s.append(new g("#text", 3)).value = t.title, 
        n(s)) : s && s.remove(), c("keywords,description,author,copyright,robots".split(","), function(e) {
            var l, i, o = a.getAll("meta"), r = t[e];
            for (l = 0; l < o.length; l++) if (i = o[l], i.attr("name") == e) return r ? i.attr("content", r) : i.remove(), 
            void 0;
            r && (s = new g("meta", 1), s.attr("name", e), s.attr("content", r), s.shortEnded = !0, 
            n(s));
        }), s = a.getAll("link")[0], s && "stylesheet" == s.attr("rel") ? t.stylesheet ? s.attr("href", t.stylesheet) : s.remove() : t.stylesheet && (s = new g("link", 1), 
        s.attr({
            rel: "stylesheet",
            text: "text/css",
            href: t.stylesheet
        }), s.shortEnded = !0, n(s)), s = a.getAll("body")[0], s && (l(s, "dir", t.langdir), 
        l(s, "style", t.style), l(s, "vlink", t.visited_color), l(s, "link", t.link_color), 
        l(s, "alink", t.active_color), u.setAttribs(e.getBody(), {
            style: t.style,
            dir: t.dir,
            vLink: t.visited_color,
            link: t.link_color,
            aLink: t.active_color
        })), s = a.getAll("html")[0], s && (l(s, "lang", t.langcode), l(s, "xml:lang", t.langcode)), 
        o.firstChild || o.remove(), r = new tinymce.html.Serializer({
            validate: !1,
            indent: !0,
            apply_source_formatting: !0,
            indent_before: "head,html,body,meta,title,script,link,style",
            indent_after: "head,html,body,meta,title,script,link,style"
        }).serialize(a), d = r.substring(0, r.indexOf("</body>"));
    }
    function i() {
        return new tinymce.html.DomParser({
            validate: !1,
            root_name: "#document"
        }).parse(d);
    }
    function a(t) {
        function l(e) {
            return e.replace(/<\/?[A-Z]+/g, function(e) {
                return e.toLowerCase();
            });
        }
        var n, a, r, g, m = t.content, u = "", f = e.dom;
        t.selection || "raw" == t.format && d || t.source_view && e.getParam("fullpage_hide_in_source_view") || (m = m.replace(/<(\/?)BODY/gi, "<$1body"), 
        n = m.indexOf("<body"), -1 != n ? (n = m.indexOf(">", n), d = l(m.substring(0, n + 1)), 
        a = m.indexOf("</body", n), -1 == a && (a = m.length), t.content = m.substring(n + 1, a), 
        s = l(m.substring(a))) : (d = o(), s = "\n</body>\n</html>"), r = i(), c(r.getAll("style"), function(e) {
            e.firstChild && (u += e.firstChild.value);
        }), g = r.getAll("body")[0], g && f.setAttribs(e.getBody(), {
            style: g.attr("style") || "",
            dir: g.attr("dir") || "",
            vLink: g.attr("vlink") || "",
            link: g.attr("link") || "",
            aLink: g.attr("alink") || ""
        }), f.remove("fullpage_styles"), u && (f.add(e.getDoc().getElementsByTagName("head")[0], "style", {
            id: "fullpage_styles"
        }, u), g = f.get("fullpage_styles"), g.styleSheet && (g.styleSheet.cssText = u)));
    }
    function o() {
        var t, l = "", n = "";
        return e.getParam("fullpage_default_xml_pi") && (l += '<?xml version="1.0" encoding="' + e.getParam("fullpage_default_encoding", "ISO-8859-1") + '" ?>\n'), 
        l += e.getParam("fullpage_default_doctype", "<!DOCTYPE html>"), l += "\n<html>\n<head>\n", 
        (t = e.getParam("fullpage_default_title")) && (l += "<title>" + t + "</title>\n"), 
        (t = e.getParam("fullpage_default_encoding")) && (l += '<meta http-equiv="Content-Type" content="text/html; charset=' + t + '" />\n'), 
        (t = e.getParam("fullpage_default_font_family")) && (n += "font-family: " + t + ";"), 
        (t = e.getParam("fullpage_default_font_size")) && (n += "font-size: " + t + ";"), 
        (t = e.getParam("fullpage_default_text_color")) && (n += "color: " + t + ";"), l += "</head>\n<body" + (n ? ' style="' + n + '"' : "") + ">\n";
    }
    function r(t) {
        t.selection || t.source_view && e.getParam("fullpage_hide_in_source_view") || (t.content = tinymce.trim(d) + "\n" + tinymce.trim(t.content) + "\n" + tinymce.trim(s));
    }
    var d, s, c = tinymce.each, g = tinymce.html.Node;
    e.addCommand("mceFullPageProperties", t), e.addButton("fullpage", {
        title: "Document properties",
        cmd: "mceFullPageProperties"
    }), e.addMenuItem("fullpage", {
        text: "Document properties",
        cmd: "mceFullPageProperties",
        context: "file"
    }), e.on("BeforeSetContent", a), e.on("GetContent", r);
});

tinymce.PluginManager.add("fullscreen", function(e) {
    function t() {
        var e, t, n = window, i = document, a = i.body;
        return a.offsetWidth && (e = a.offsetWidth, t = a.offsetHeight), n.innerWidth && n.innerHeight && (e = n.innerWidth, 
        t = n.innerHeight), {
            w: e,
            h: t
        };
    }
    function n() {
        function n() {
            l.setStyle(c, "height", t().h - (s.clientHeight - c.clientHeight));
        }
        var s, c, u, d = document.body, m = document.documentElement;
        o = !o, s = e.getContainer().firstChild, c = e.getContentAreaContainer().firstChild, 
        u = c.style, o ? (i = u.width, a = u.height, u.width = u.height = "100%", l.addClass(d, "mce-fullscreen"), 
        l.addClass(m, "mce-fullscreen"), l.addClass(s, "mce-fullscreen"), l.bind(window, "resize", n), 
        n(), r = n) : (u.width = i, u.height = a, l.removeClass(d, "mce-fullscreen"), l.removeClass(m, "mce-fullscreen"), 
        l.removeClass(s, "mce-fullscreen"), l.unbind(window, "resize", r)), e.fire("FullscreenStateChanged", {
            state: o
        });
    }
    var i, a, r, o = !1, l = tinymce.DOM;
    if (!e.settings.inline) return e.on("init", function() {
        e.addShortcut("Ctrl+Alt+F", "", n);
    }), e.on("remove", function() {
        r && l.unbind(window, "resize", r);
    }), e.addCommand("mceFullScreen", n), e.addMenuItem("fullscreen", {
        text: "Fullscreen",
        shortcut: "Ctrl+Alt+F",
        selectable: !0,
        onClick: n,
        onPostRender: function() {
            var t = this;
            e.on("FullscreenStateChanged", function(e) {
                t.active(e.state);
            });
        },
        context: "view"
    }), e.addButton("fullscreen", {
        tooltip: "Fullscreen",
        shortcut: "Ctrl+Alt+F",
        onClick: n,
        onPostRender: function() {
            var t = this;
            e.on("FullscreenStateChanged", function(e) {
                t.active(e.state);
            });
        }
    }), {
        isFullscreen: function() {
            return o;
        }
    };
});

tinymce.PluginManager.add("hr", function(e) {
    e.addCommand("InsertHorizontalRule", function() {
        e.execCommand("mceInsertContent", !1, "<hr />");
    }), e.addButton("hr", {
        icon: "hr",
        tooltip: "Insert horizontal ruler",
        cmd: "InsertHorizontalRule"
    }), e.addMenuItem("hr", {
        icon: "hr",
        text: "Horizontal line",
        cmd: "InsertHorizontalRule",
        context: "insert"
    });
});

tinymce.PluginManager.add("image", function(e) {
    function t(e, t) {
        function n(e, n) {
            i.parentNode.removeChild(i), t({
                width: e,
                height: n
            });
        }
        var i = new Image();
        i.onload = function() {
            n(i.clientWidth, i.clientHeight);
        }, i.onerror = function() {
            n();
        }, i.src = e;
        var o = i.style;
        o.visibility = "hidden", o.position = "fixed", o.bottom = o.left = 0, o.width = o.height = "auto", 
        document.body.appendChild(i);
    }
    function n(t) {
        return function() {
            var n = e.settings.image_list;
            "string" == typeof n ? tinymce.util.XHR.send({
                url: n,
                success: function(e) {
                    t(tinymce.util.JSON.parse(e));
                }
            }) : t(n);
        };
    }
    function i(n) {
        function i() {
            var e = [ {
                text: "None",
                value: ""
            } ];
            return tinymce.each(n, function(t) {
                e.push({
                    text: t.text || t.title,
                    value: t.value || t.url,
                    menu: t.menu
                });
            }), e;
        }
        function o(e) {
            var t, n, i, o;
            t = c.find("#width")[0], n = c.find("#height")[0], i = t.value(), o = n.value(), 
            c.find("#constrain")[0].checked() && d && m && i && o && (e.control == t ? (o = Math.round(i / d * o), 
            n.value(o)) : (i = Math.round(o / m * i), t.value(i))), d = i, m = o;
        }
        function a() {
            function t(t) {
                function i() {
                    t.onload = t.onerror = null, e.selection.select(t), e.nodeChanged();
                }
                t.onload = function() {
                    n.width || n.height || g.setAttribs(t, {
                        width: t.clientWidth,
                        height: t.clientHeight
                    }), i();
                }, t.onerror = i;
            }
            var n = c.toJSON();
            "" === n.width && (n.width = null), "" === n.height && (n.height = null), "" === n.style && (n.style = null), 
            n = {
                src: n.src,
                alt: n.alt,
                width: n.width,
                height: n.height,
                style: n.style
            }, f ? g.setAttribs(f, n) : (n.id = "__mcenew", e.insertContent(g.createHTML("img", n)), 
            f = g.get("__mcenew"), g.setAttrib(f, "id", null)), t(f);
        }
        function l(e) {
            return e && (e = e.replace(/px$/, "")), e;
        }
        function r() {
            t(this.value(), function(e) {
                e.width && e.height && (d = e.width, m = e.height, c.find("#width").value(d), c.find("#height").value(m));
            });
        }
        function s() {
            function e(e) {
                return e.length > 0 && /^[0-9]+$/.test(e) && (e += "px"), e;
            }
            var t = c.toJSON(), n = g.parseStyle(t.style);
            delete n.margin, n["margin-top"] = n["margin-bottom"] = e(t.vspace), n["margin-left"] = n["margin-right"] = e(t.hspace), 
            n["border-width"] = e(t.border), c.find("#style").value(g.serializeStyle(g.parseStyle(g.serializeStyle(n))));
        }
        var c, u, d, m, h, g = e.dom, f = e.selection.getNode();
        d = g.getAttrib(f, "width"), m = g.getAttrib(f, "height"), "IMG" != f.nodeName || f.getAttribute("data-mce-object") ? f = null : u = {
            src: g.getAttrib(f, "src"),
            alt: g.getAttrib(f, "alt"),
            width: d,
            height: m
        }, n && (h = {
            name: "target",
            type: "listbox",
            label: "Image list",
            values: i(),
            onselect: function(e) {
                var t = c.find("#alt");
                (!t.value() || e.lastControl && t.value() == e.lastControl.text()) && t.value(e.control.text()), 
                c.find("#src").value(e.control.value());
            }
        });
        var p = [ {
            name: "src",
            type: "filepicker",
            filetype: "image",
            label: "Source",
            autofocus: !0,
            onchange: r
        }, h, {
            name: "alt",
            type: "textbox",
            label: "Image description"
        }, {
            type: "container",
            label: "Dimensions",
            layout: "flex",
            direction: "row",
            align: "center",
            spacing: 5,
            items: [ {
                name: "width",
                type: "textbox",
                maxLength: 3,
                size: 3,
                onchange: o
            }, {
                type: "label",
                text: "x"
            }, {
                name: "height",
                type: "textbox",
                maxLength: 3,
                size: 3,
                onchange: o
            }, {
                name: "constrain",
                type: "checkbox",
                checked: !0,
                text: "Constrain proportions"
            } ]
        } ];
        e.settings.image_advtab ? (f && (u.hspace = l(f.style.marginLeft || f.style.marginRight), 
        u.vspace = l(f.style.marginTop || f.style.marginBottom), u.border = l(f.style.borderWidth), 
        u.style = e.dom.serializeStyle(e.dom.parseStyle(e.dom.getAttrib(f, "style")))), 
        c = e.windowManager.open({
            title: "Insert/edit image",
            data: u,
            bodyType: "tabpanel",
            body: [ {
                title: "General",
                type: "form",
                items: p
            }, {
                title: "Advanced",
                type: "form",
                pack: "start",
                items: [ {
                    label: "Style",
                    name: "style",
                    type: "textbox"
                }, {
                    type: "form",
                    layout: "grid",
                    packV: "start",
                    columns: 2,
                    padding: 0,
                    alignH: [ "left", "right" ],
                    defaults: {
                        type: "textbox",
                        maxWidth: 50,
                        onchange: s
                    },
                    items: [ {
                        label: "Vertical space",
                        name: "vspace"
                    }, {
                        label: "Horizontal space",
                        name: "hspace"
                    }, {
                        label: "Border",
                        name: "border"
                    } ]
                } ]
            } ],
            onSubmit: a
        })) : c = e.windowManager.open({
            title: "Edit image",
            data: u,
            body: p,
            onSubmit: a
        });
    }
    e.addButton("image", {
        icon: "image",
        tooltip: "Insert/edit image",
        onclick: n(i),
        stateSelector: "img:not([data-mce-object])"
    }), e.addMenuItem("image", {
        icon: "image",
        text: "Insert image",
        onclick: n(i),
        context: "insert",
        prependToContext: !0
    });
});

tinymce.PluginManager.add("insertdatetime", function(e) {
    function t(t, n) {
        function i(e, t) {
            if (e = "" + e, e.length < t) for (var n = 0; n < t - e.length; n++) e = "0" + e;
            return e;
        }
        return n = n || new Date(), t = t.replace("%D", "%m/%d/%Y"), t = t.replace("%r", "%I:%M:%S %p"), 
        t = t.replace("%Y", "" + n.getFullYear()), t = t.replace("%y", "" + n.getYear()), 
        t = t.replace("%m", i(n.getMonth() + 1, 2)), t = t.replace("%d", i(n.getDate(), 2)), 
        t = t.replace("%H", "" + i(n.getHours(), 2)), t = t.replace("%M", "" + i(n.getMinutes(), 2)), 
        t = t.replace("%S", "" + i(n.getSeconds(), 2)), t = t.replace("%I", "" + ((n.getHours() + 11) % 12 + 1)), 
        t = t.replace("%p", "" + (n.getHours() < 12 ? "AM" : "PM")), t = t.replace("%B", "" + e.translate(l[n.getMonth()])), 
        t = t.replace("%b", "" + e.translate(o[n.getMonth()])), t = t.replace("%A", "" + e.translate(r[n.getDay()])), 
        t = t.replace("%a", "" + e.translate(a[n.getDay()])), t = t.replace("%%", "%");
    }
    function n(n) {
        var i = t(n);
        if (e.settings.insertdatetime_element) {
            var a;
            a = /%[HMSIp]/.test(n) ? t("%Y-%m-%dT%H:%M") : t("%Y-%m-%d"), i = '<time datetime="' + a + '">' + i + "</time>";
            var r = e.dom.getParent(e.selection.getStart(), "time");
            if (r) return e.dom.setOuterHTML(r, i), void 0;
        }
        e.insertContent(i);
    }
    var i, a = "Sun Mon Tue Wed Thu Fri Sat Sun".split(" "), r = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "), o = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), l = "January February March April May June July August September October November December".split(" "), s = [];
    e.addCommand("mceInsertDate", function() {
        n(e.getParam("insertdate_dateformat", e.translate("%Y-%m-%d")));
    }), e.addCommand("mceInsertTime", function() {
        n(e.getParam("insertdate_timeformat", e.translate("%H:%M:%S")));
    }), e.addButton("inserttime", {
        type: "splitbutton",
        title: "Insert time",
        onclick: function() {
            n(i || "%H:%M:%S");
        },
        menu: s
    }), tinymce.each(e.settings.insertdate_formats || [ "%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D" ], function(e) {
        s.push({
            text: t(e),
            onclick: function() {
                i = e, n(e);
            }
        });
    }), e.addMenuItem("insertdatetime", {
        icon: "date",
        text: "Insert date/time",
        menu: s,
        context: "insert"
    });
});

!function(e) {
    e.on("AddEditor", function(e) {
        e.editor.settings.inline_styles = !1;
    }), e.PluginManager.add("legacyoutput", function(t) {
        t.on("init", function() {
            var n = "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img", i = e.explode(t.settings.font_size_style_values), o = t.schema;
            t.formatter.register({
                alignleft: {
                    selector: n,
                    attributes: {
                        align: "left"
                    }
                },
                aligncenter: {
                    selector: n,
                    attributes: {
                        align: "center"
                    }
                },
                alignright: {
                    selector: n,
                    attributes: {
                        align: "right"
                    }
                },
                alignjustify: {
                    selector: n,
                    attributes: {
                        align: "justify"
                    }
                },
                bold: [ {
                    inline: "b",
                    remove: "all"
                }, {
                    inline: "strong",
                    remove: "all"
                }, {
                    inline: "span",
                    styles: {
                        fontWeight: "bold"
                    }
                } ],
                italic: [ {
                    inline: "i",
                    remove: "all"
                }, {
                    inline: "em",
                    remove: "all"
                }, {
                    inline: "span",
                    styles: {
                        fontStyle: "italic"
                    }
                } ],
                underline: [ {
                    inline: "u",
                    remove: "all"
                }, {
                    inline: "span",
                    styles: {
                        textDecoration: "underline"
                    },
                    exact: !0
                } ],
                strikethrough: [ {
                    inline: "strike",
                    remove: "all"
                }, {
                    inline: "span",
                    styles: {
                        textDecoration: "line-through"
                    },
                    exact: !0
                } ],
                fontname: {
                    inline: "font",
                    attributes: {
                        face: "%value"
                    }
                },
                fontsize: {
                    inline: "font",
                    attributes: {
                        size: function(t) {
                            return e.inArray(i, t.value) + 1;
                        }
                    }
                },
                forecolor: {
                    inline: "font",
                    attributes: {
                        color: "%value"
                    }
                },
                hilitecolor: {
                    inline: "font",
                    styles: {
                        backgroundColor: "%value"
                    }
                }
            }), e.each("b,i,u,strike".split(","), function(e) {
                o.addValidElements(e + "[*]");
            }), o.getElementRule("font") || o.addValidElements("font[face|size|color|style]"), 
            e.each(n.split(","), function(e) {
                var t = o.getElementRule(e);
                t && (t.attributes.align || (t.attributes.align = {}, t.attributesOrder.push("align")));
            });
        });
    });
}(tinymce);

tinymce.PluginManager.add("link", function(e) {
    function t(t) {
        return function() {
            var n = e.settings.link_list;
            "string" == typeof n ? tinymce.util.XHR.send({
                url: n,
                success: function(e) {
                    t(tinymce.util.JSON.parse(e));
                }
            }) : t(n);
        };
    }
    function n(t) {
        function n() {
            var e = [ {
                text: "None",
                value: ""
            } ];
            return tinymce.each(t, function(t) {
                e.push({
                    text: t.text || t.title,
                    value: t.value || t.url,
                    menu: t.menu
                });
            }), e;
        }
        function i(t) {
            var n = [ {
                text: "None",
                value: ""
            } ];
            return tinymce.each(e.settings.rel_list, function(e) {
                n.push({
                    text: e.text || e.title,
                    value: e.value,
                    selected: t === e.value
                });
            }), n;
        }
        function a(t) {
            var n = [ {
                text: "None",
                value: ""
            } ];
            return e.settings.target_list || n.push({
                text: "New window",
                value: "_blank"
            }), tinymce.each(e.settings.target_list, function(e) {
                n.push({
                    text: e.text || e.title,
                    value: e.value,
                    selected: t === e.value
                });
            }), n;
        }
        function r() {
            s || 0 !== f.text.length || this.parent().parent().find("#text")[0].value(this.value());
        }
        var o, l, s, c, u, d, m, f = {}, g = e.selection, h = e.dom;
        e.focus(), o = g.getNode(), l = h.getParent(o, "a[href]"), l && g.select(l), f.text = s = g.getContent({
            format: "text"
        }), f.href = l ? h.getAttrib(l, "href") : "", f.target = l ? h.getAttrib(l, "target") : "", 
        f.rel = l ? h.getAttrib(l, "rel") : "", "IMG" == o.nodeName && (f.text = s = " "), 
        t && (u = {
            type: "listbox",
            label: "Link list",
            values: n(),
            onselect: function(e) {
                var t = c.find("#text");
                (!t.value() || e.lastControl && t.value() == e.lastControl.text()) && t.value(e.control.text()), 
                c.find("#href").value(e.control.value());
            }
        }), e.settings.target_list !== !1 && (m = {
            name: "target",
            type: "listbox",
            label: "Target",
            values: a(f.target)
        }), e.settings.rel_list && (d = {
            name: "rel",
            type: "listbox",
            label: "Rel",
            values: i(f.rel)
        }), c = e.windowManager.open({
            title: "Insert link",
            data: f,
            body: [ {
                name: "href",
                type: "filepicker",
                filetype: "file",
                size: 40,
                autofocus: !0,
                label: "Url",
                onchange: r,
                onkeyup: r
            }, {
                name: "text",
                type: "textbox",
                size: 40,
                label: "Text to display",
                onchange: function() {
                    f.text = this.value();
                }
            }, u, d, m ],
            onSubmit: function(t) {
                function n(t, n) {
                    window.setTimeout(function() {
                        e.windowManager.confirm(t, n);
                    }, 0);
                }
                function i() {
                    a.text != s ? l ? (e.focus(), l.innerHTML = a.text, h.setAttribs(l, {
                        href: r,
                        target: a.target ? a.target : null,
                        rel: a.rel ? a.rel : null
                    }), g.select(l)) : e.insertContent(h.createHTML("a", {
                        href: r,
                        target: a.target ? a.target : null,
                        rel: a.rel ? a.rel : null
                    }, a.text)) : e.execCommand("mceInsertLink", !1, {
                        href: r,
                        target: a.target,
                        rel: a.rel ? a.rel : null
                    });
                }
                var a = t.data, r = a.href;
                return r ? r.indexOf("@") > 0 && -1 == r.indexOf("//") && -1 == r.indexOf("mailto:") ? (n("The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?", function(e) {
                    e && (r = "mailto:" + r), i();
                }), void 0) : /^\s*www\./i.test(r) ? (n("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?", function(e) {
                    e && (r = "http://" + r), i();
                }), void 0) : (i(), void 0) : (e.execCommand("unlink"), void 0);
            }
        });
    }
    e.addButton("link", {
        icon: "link",
        tooltip: "Insert/edit link",
        shortcut: "Ctrl+K",
        onclick: t(n),
        stateSelector: "a[href]"
    }), e.addButton("unlink", {
        icon: "unlink",
        tooltip: "Remove link",
        cmd: "unlink",
        stateSelector: "a[href]"
    }), e.addShortcut("Ctrl+K", "", n), this.showDialog = n, e.addMenuItem("link", {
        icon: "link",
        text: "Insert link",
        shortcut: "Ctrl+K",
        onclick: t(n),
        stateSelector: "a[href]",
        context: "insert",
        prependToContext: !0
    });
});

tinymce.PluginManager.add("lists", function(e) {
    var t = this;
    e.on("init", function() {
        function n(e) {
            function t(t) {
                var i, r, o;
                r = e[t ? "startContainer" : "endContainer"], o = e[t ? "startOffset" : "endOffset"], 
                1 == r.nodeType && (i = y.create("span", {
                    "data-mce-type": "bookmark"
                }), r.hasChildNodes() ? (o = Math.min(o, r.childNodes.length - 1), r.insertBefore(i, r.childNodes[o])) : r.appendChild(i), 
                r = i, o = 0), n[t ? "startContainer" : "endContainer"] = r, n[t ? "startOffset" : "endOffset"] = o;
            }
            var n = {};
            return t(!0), t(), n;
        }
        function i(e) {
            function t(t) {
                function n(e) {
                    for (var t = e.parentNode.firstChild, n = 0; t; ) {
                        if (t == e) return n;
                        (1 != t.nodeType || "bookmark" != t.getAttribute("data-mce-type")) && n++, t = t.nextSibling;
                    }
                    return -1;
                }
                var i, r, o;
                i = o = e[t ? "startContainer" : "endContainer"], r = e[t ? "startOffset" : "endOffset"], 
                1 == i.nodeType && (t ? (r = n(i), i = i.parentNode) : (r = n(i), i = i.parentNode), 
                y.remove(o)), e[t ? "startContainer" : "endContainer"] = i, e[t ? "startOffset" : "endOffset"] = r;
            }
            t(!0), t();
            var n = y.createRng();
            n.setStart(e.startContainer, e.startOffset), n.setEnd(e.endContainer, e.endOffset), 
            C.setRng(n);
        }
        function r(e) {
            return e && /^(OL|UL)$/.test(e.nodeName);
        }
        function o(e) {
            return e.parentNode.firstChild == e;
        }
        function a(e) {
            return e.parentNode.lastChild == e;
        }
        function l(t) {
            return t && !!e.schema.getTextBlockElements()[t.nodeName];
        }
        function s(t, n) {
            var i, r;
            if (e.settings.forced_root_block && (n = n || e.settings.forced_root_block), r = n ? y.create(n) : y.createFragment(), 
            t) for (;i = t.firstChild; ) r.appendChild(i);
            return e.settings.forced_root_block || r.appendChild(y.create("br")), r.hasChildNodes() || tinymce.isIE || (r.innerHTML = '<br data-mce-bogus="1">'), 
            r;
        }
        function d() {
            return tinymce.grep(C.getSelectedBlocks(), function(e) {
                return "LI" == e.nodeName;
            });
        }
        function c() {
            return tinymce.grep(C.getSelectedBlocks(), l);
        }
        function u(e, t, n) {
            var i, r;
            n = n || s(t), i = y.createRng(), i.setStartAfter(t), i.setEndAfter(e), r = i.extractContents(), 
            y.isEmpty(r) || y.insertAfter(r, e), y.isEmpty(n) || y.insertAfter(n, e), y.isEmpty(t.parentNode) && y.remove(t.parentNode), 
            y.remove(t);
        }
        function m(e) {
            var t, n;
            if (t = e.nextSibling, t && r(t) && t.nodeName == e.nodeName) {
                for (;n = t.firstChild; ) e.appendChild(n);
                y.remove(t);
            }
            if (t = e.previousSibling, t && r(t) && t.nodeName == e.nodeName) {
                for (;n = t.firstChild; ) e.insertBefore(n, e.firstChild);
                y.remove(t);
            }
        }
        function f(e) {
            tinymce.each(tinymce.grep(y.select("ol,ul", e)), function(e) {
                var t, n = e.parentNode;
                "LI" == n.nodeName && n.firstChild == e && (t = n.previousSibling, t && "LI" == t.nodeName && (t.appendChild(e), 
                y.isEmpty(n) && y.remove(n))), r(n) && (t = n.previousSibling, t && "LI" == t.nodeName && t.appendChild(e));
            });
        }
        function h() {
            var e, t = n(C.getRng(!0));
            return tinymce.each(d(), function(t) {
                var n, i;
                return n = t.previousSibling, n && "UL" == n.nodeName ? (n.appendChild(t), void 0) : n && "LI" == n.nodeName && r(n.lastChild) ? (n.lastChild.appendChild(t), 
                void 0) : (n = t.nextSibling, n && "UL" == n.nodeName ? (n.insertBefore(t, n.firstChild), 
                void 0) : (n && "LI" == n.nodeName && r(t.lastChild) || (n = t.previousSibling, 
                n && "LI" == n.nodeName && (i = y.create(t.parentNode.nodeName), n.appendChild(i), 
                i.appendChild(t)), e = !0), void 0));
            }), i(t), e;
        }
        function p() {
            function e(e) {
                y.isEmpty(e) && y.remove(e);
            }
            var t, l = n(C.getRng(!0));
            return tinymce.each(d(), function(n) {
                var i, l = n.parentNode, d = l.parentNode;
                if (o(n) && a(n)) if ("LI" == d.nodeName) y.insertAfter(n, d), e(d); else {
                    if (!r(d)) return;
                    y.remove(l, !0);
                } else if (o(n)) if ("LI" == d.nodeName) y.insertAfter(n, d), i = y.create("LI"), 
                i.appendChild(l), y.insertAfter(i, n), e(d); else {
                    if (!r(d)) return;
                    d.insertBefore(n, l);
                } else if (a(n)) if ("LI" == d.nodeName) y.insertAfter(n, d); else {
                    if (!r(d)) return;
                    y.insertAfter(n, l);
                } else {
                    if ("LI" == d.nodeName) l = d, i = s(n, "LI"); else {
                        if (!r(d)) return;
                        i = s(n, "LI");
                    }
                    u(l, n, i), f(l.parentNode);
                }
                t = !0;
            }), i(l), t;
        }
        function g(t) {
            function o() {
                function t(t) {
                    var n, i, r = e.getBody();
                    for (n = a[t ? "startContainer" : "endContainer"], i = a[t ? "startOffset" : "endOffset"], 
                    1 == n.nodeType && (n = n.childNodes[Math.min(i, n.childNodes.length - 1)] || n); n.parentNode != r; ) {
                        if (l(n)) return n;
                        if (/^(TD|TH)$/.test(n.parentNode.nodeName)) return n;
                        n = n.parentNode;
                    }
                    return n;
                }
                function n(e, t) {
                    var n, i = [];
                    if (!l(e)) {
                        for (;e && (n = e[t ? "previousSibling" : "nextSibling"], !y.isBlock(n) && n); ) e = n;
                        for (;e; ) i.push(e), e = e[t ? "nextSibling" : "previousSibling"];
                    }
                    return i;
                }
                var i, r, o = t(!0), s = t();
                r = n(o, !0), o != s && (r = r.concat(n(s).reverse())), tinymce.each(r, function(e) {
                    if (!y.isBlock(e) || "BR" == e.nodeName) {
                        if (!i || "BR" == e.nodeName) {
                            if ("BR" == e.nodeName && (!e.nextSibling || y.isBlock(e.nextSibling) && "BR" != e.nextSibling.nodeName)) return y.remove(e), 
                            !1;
                            i = y.create("p"), d.push(i), e.parentNode.insertBefore(i, e);
                        }
                        return "BR" != e.nodeName ? i.appendChild(e) : y.remove(e), e == s ? !1 : void 0;
                    }
                });
            }
            var a = C.getRng(!0), s = n(a), d = c();
            o(), tinymce.each(d, function(e) {
                var n, i;
                i = e.previousSibling, i && r(i) && i.nodeName == t ? (n = i, e = y.rename(e, "LI"), 
                i.appendChild(e)) : (n = y.create(t), e.parentNode.insertBefore(n, e), n.appendChild(e), 
                e = y.rename(e, "LI")), m(n);
            }), i(s);
        }
        function v() {
            var e = n(C.getRng(!0));
            tinymce.each(d(), function(e) {
                var t, n;
                for (t = e; t; t = t.parentNode) r(t) && (n = t);
                u(n, e);
            }), i(e);
        }
        function b(e) {
            var t = y.getParent(C.getStart(), "OL,UL");
            if (t) if (t.nodeName == e) v(e); else {
                var r = n(C.getRng(!0));
                m(y.rename(t, e)), i(r);
            } else g(e);
        }
        var y = e.dom, C = e.selection;
        t.backspaceDelete = function(e) {
            function t(e, t) {
                var n = e.startContainer, i = e.startOffset;
                if (3 == n.nodeType && (t ? i < n.data.length : i > 0)) return n;
                for (var r = new tinymce.dom.TreeWalker(e.startContainer); n = r[t ? "next" : "prev"](); ) if (3 == n.nodeType && n.data.length > 0) return n;
            }
            function o(e, t) {
                var n, i, o = e.parentNode;
                for (r(t.lastChild) && (i = t.lastChild), n = t.lastChild, n && "BR" == n.nodeName && e.hasChildNodes() && y.remove(n); n = e.firstChild; ) t.appendChild(n);
                i && t.appendChild(i), y.remove(e), y.isEmpty(o) && y.remove(o);
            }
            if (C.isCollapsed()) {
                var a = y.getParent(C.getStart(), "LI");
                if (a) {
                    var l = C.getRng(!0), s = y.getParent(t(l, e), "LI");
                    if (s && s != a) {
                        var d = n(l);
                        return e ? o(s, a) : o(a, s), i(d), !0;
                    }
                    if (!s && !e && v(a.parentNode.nodeName)) return !0;
                }
            }
        }, e.addCommand("Indent", function() {
            return h() ? void 0 : !0;
        }), e.addCommand("Outdent", function() {
            return p() ? void 0 : !0;
        }), e.addCommand("InsertUnorderedList", function() {
            b("UL");
        }), e.addCommand("InsertOrderedList", function() {
            b("OL");
        });
    }), e.on("keydown", function(e) {
        e.keyCode == tinymce.util.VK.BACKSPACE ? t.backspaceDelete() && e.preventDefault() : e.keyCode == tinymce.util.VK.DELETE && t.backspaceDelete(!0) && e.preventDefault();
    });
});

tinymce.PluginManager.add("media", function(e, t) {
    function n(e) {
        return -1 != e.indexOf(".mp3") ? "audio/mpeg" : -1 != e.indexOf(".wav") ? "audio/wav" : -1 != e.indexOf(".mp4") ? "video/mp4" : -1 != e.indexOf(".webm") ? "video/webm" : -1 != e.indexOf(".ogg") ? "video/ogg" : "";
    }
    function i() {
        function t(e) {
            var t, a, r, o;
            t = n.find("#width")[0], a = n.find("#height")[0], r = t.value(), o = a.value(), 
            n.find("#constrain")[0].checked() && i && s && r && o && (e.control == t ? (o = Math.round(r / i * o), 
            a.value(o)) : (r = Math.round(o / s * r), t.value(r))), i = r, s = o;
        }
        var n, i, s, c;
        c = l(e.selection.getNode()), i = c.width, s = c.height, n = e.windowManager.open({
            title: "Insert/edit video",
            data: c,
            bodyType: "tabpanel",
            body: [ {
                title: "General",
                type: "form",
                onShowTab: function() {
                    this.fromJSON(o(this.next().find("#embed").value()));
                },
                items: [ {
                    name: "source1",
                    type: "filepicker",
                    filetype: "media",
                    size: 40,
                    autofocus: !0,
                    label: "Source"
                }, {
                    name: "source2",
                    type: "filepicker",
                    filetype: "media",
                    size: 40,
                    label: "Alternative source"
                }, {
                    name: "poster",
                    type: "filepicker",
                    filetype: "image",
                    size: 40,
                    label: "Poster"
                }, {
                    type: "container",
                    label: "Dimensions",
                    layout: "flex",
                    direction: "row",
                    align: "center",
                    spacing: 5,
                    items: [ {
                        name: "width",
                        type: "textbox",
                        maxLength: 3,
                        size: 3,
                        onchange: t
                    }, {
                        type: "label",
                        text: "x"
                    }, {
                        name: "height",
                        type: "textbox",
                        maxLength: 3,
                        size: 3,
                        onchange: t
                    }, {
                        name: "constrain",
                        type: "checkbox",
                        checked: !0,
                        text: "Constrain proportions"
                    } ]
                } ]
            }, {
                title: "Embed",
                type: "panel",
                layout: "flex",
                direction: "column",
                align: "stretch",
                padding: 10,
                spacing: 10,
                onShowTab: function() {
                    this.find("#embed").value(r(this.parent().toJSON()));
                },
                items: [ {
                    type: "label",
                    text: "Paste your embed code below:"
                }, {
                    type: "textbox",
                    flex: 1,
                    name: "embed",
                    value: a(),
                    multiline: !0,
                    label: "Source"
                } ]
            } ],
            onSubmit: function() {
                e.insertContent(r(this.toJSON()));
            }
        });
    }
    function a() {
        var t = e.selection.getNode();
        return t.getAttribute("data-mce-object") ? e.selection.getContent() : void 0;
    }
    function r(i) {
        var a = "";
        return i.source1 || (tinymce.extend(i, o(i.embed)), i.source1) ? (i.source1 = e.convertURL(i.source1, "source"), 
        i.source2 = e.convertURL(i.source2, "source"), i.source1mime = n(i.source1), i.source2mime = n(i.source2), 
        i.poster = e.convertURL(i.poster, "poster"), i.flashPlayerUrl = e.convertURL(t + "/moxieplayer.swf", "movie"), 
        i.embed ? a = s(i.embed, i, !0) : (tinymce.each(c, function(e) {
            var t, n, a;
            if (t = e.regex.exec(i.source1)) {
                for (a = e.url, n = 0; t[n]; n++) a = a.replace("$" + n, function() {
                    return t[n];
                });
                i.source1 = a, i.type = e.type, i.width = e.w, i.height = e.h;
            }
        }), i.width = i.width || 300, i.height = i.height || 150, tinymce.each(i, function(t, n) {
            i[n] = e.dom.encode(t);
        }), "iframe" == i.type ? a += '<iframe src="' + i.source1 + '" width="' + i.width + '" height="' + i.height + '"></iframe>' : -1 != i.source1mime.indexOf("audio") ? e.settings.audio_template_callback ? a = e.settings.audio_template_callback(i) : a += '<audio controls="controls" src="' + i.source1 + '">' + (i.source2 ? '\n<source src="' + i.source2 + '"' + (i.source2mime ? ' type="' + i.source2mime + '"' : "") + " />\n" : "") + "</audio>" : a = e.settings.video_template_callback ? e.settings.video_template_callback(i) : '<video width="' + i.width + '" height="' + i.height + '"' + (i.poster ? ' poster="' + i.poster + '"' : "") + ' controls="controls">\n' + '<source src="' + i.source1 + '"' + (i.source1mime ? ' type="' + i.source1mime + '"' : "") + " />\n" + (i.source2 ? '<source src="' + i.source2 + '"' + (i.source2mime ? ' type="' + i.source2mime + '"' : "") + " />\n" : "") + "</video>"), 
        a) : "";
    }
    function o(e) {
        var t = {};
        return new tinymce.html.SaxParser({
            validate: !1,
            special: "script,noscript",
            start: function(e, n) {
                t.source1 || "param" != e || (t.source1 = n.map.movie), ("iframe" == e || "object" == e || "embed" == e || "video" == e || "audio" == e) && (t = tinymce.extend(n.map, t)), 
                "source" == e && (t.source1 ? t.source2 || (t.source2 = n.map.src) : t.source1 = n.map.src);
            }
        }).parse(e), t.source1 = t.source1 || t.src || t.data, t.source2 = t.source2 || "", 
        t.poster = t.poster || "", t;
    }
    function l(t) {
        return t.getAttribute("data-mce-object") ? o(e.serializer.serialize(t, {
            selection: !0
        })) : {};
    }
    function s(e, t, n) {
        function i(e, t) {
            var n, i, a, r;
            for (n in t) if (a = "" + t[n], e.map[n]) for (i = e.length; i--; ) r = e[i], r.name == n && (a ? (e.map[n] = a, 
            r.value = a) : (delete e.map[n], e.splice(i, 1))); else a && (e.push({
                name: n,
                value: a
            }), e.map[n] = a);
        }
        var a = new tinymce.html.Writer(), r = 0;
        return new tinymce.html.SaxParser({
            validate: !1,
            special: "script,noscript",
            comment: function(e) {
                a.comment(e);
            },
            cdata: function(e) {
                a.cdata(e);
            },
            text: function(e, t) {
                a.text(e, t);
            },
            start: function(e, o, l) {
                switch (e) {
                  case "video":
                  case "object":
                  case "img":
                  case "iframe":
                    i(o, {
                        width: t.width,
                        height: t.height
                    });
                }
                if (n) switch (e) {
                  case "video":
                    i(o, {
                        poster: t.poster,
                        src: ""
                    }), t.source2 && i(o, {
                        src: ""
                    });
                    break;

                  case "iframe":
                    i(o, {
                        src: t.source1
                    });
                    break;

                  case "source":
                    if (r++, 2 >= r && (i(o, {
                        src: t["source" + r],
                        type: t["source" + r + "mime"]
                    }), !t["source" + r])) return;
                }
                a.start(e, o, l);
            },
            end: function(e) {
                if ("video" == e && n) for (var o = 1; 2 >= o; o++) if (t["source" + o]) {
                    var l = [];
                    l.map = {}, o > r && (i(l, {
                        src: t["source" + o],
                        type: t["source" + o + "mime"]
                    }), a.start("source", l, !0));
                }
                a.end(e);
            }
        }, new tinymce.html.Schema({})).parse(e), a.getContent();
    }
    var c = [ {
        regex: /youtu\.be\/([a-z1-9.-_]+)/,
        type: "iframe",
        w: 425,
        h: 350,
        url: "http://www.youtube.com/embed/$1"
    }, {
        regex: /youtube\.com(.+)v=([^&]+)/,
        type: "iframe",
        w: 425,
        h: 350,
        url: "http://www.youtube.com/embed/$2"
    }, {
        regex: /vimeo\.com\/([0-9]+)/,
        type: "iframe",
        w: 425,
        h: 350,
        url: "http://player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc"
    }, {
        regex: /maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,
        type: "iframe",
        w: 425,
        h: 350,
        url: 'http://maps.google.com/maps/ms?msid=$2&output=embed"'
    } ];
    e.on("ResolveName", function(e) {
        var t;
        1 == e.target.nodeType && (t = e.target.getAttribute("data-mce-object")) && (e.name = t);
    }), e.on("preInit", function() {
        var t = e.schema.getSpecialElements();
        tinymce.each("video audio iframe object".split(" "), function(e) {
            t[e] = new RegExp("</" + e + "[^>]*>", "gi");
        }), e.schema.addValidElements("object[id|style|width|height|classid|codebase|*],embed[id|style|width|height|type|src|*],video[*],audio[*]");
        var n = e.schema.getBoolAttrs();
        tinymce.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "), function(e) {
            n[e] = {};
        }), e.parser.addNodeFilter("iframe,video,audio,object,embed", function(t, n) {
            for (var i, a, r, o, l, s, c, u = t.length; u--; ) {
                for (a = t[u], r = new tinymce.html.Node("img", 1), r.shortEnded = !0, s = a.attributes, 
                i = s.length; i--; ) o = s[i].name, l = s[i].value, "width" !== o && "height" !== o && "style" !== o && (("data" == o || "src" == o) && (l = e.convertURL(l, o)), 
                r.attr("data-mce-p-" + o, l));
                c = a.firstChild && a.firstChild.value, c && (r.attr("data-mce-html", escape(c)), 
                r.firstChild = null), r.attr({
                    width: a.attr("width") || "300",
                    height: a.attr("height") || ("audio" == n ? "30" : "150"),
                    style: a.attr("style"),
                    src: tinymce.Env.transparentSrc,
                    "data-mce-object": n,
                    "class": "mce-object mce-object-" + n
                }), a.replace(r);
            }
        }), e.serializer.addAttributeFilter("data-mce-object", function(e, t) {
            for (var n, i, a, r, o, l, s = e.length; s--; ) {
                for (n = e[s], i = new tinymce.html.Node(n.attr(t), 1), "audio" != n.attr(t) && i.attr({
                    width: n.attr("width"),
                    height: n.attr("height")
                }), i.attr({
                    style: n.attr("style")
                }), r = n.attributes, a = r.length; a--; ) {
                    var c = r[a].name;
                    0 === c.indexOf("data-mce-p-") && i.attr(c.substr(11), r[a].value);
                }
                o = n.attr("data-mce-html"), o && (l = new tinymce.html.Node("#text", 3), l.raw = !0, 
                l.value = unescape(o), i.append(l)), n.replace(i);
            }
        });
    }), e.on("ObjectSelected", function(e) {
        "audio" == e.target.getAttribute("data-mce-object") && e.preventDefault();
    }), e.on("objectResized", function(e) {
        var t, n = e.target;
        n.getAttribute("data-mce-object") && (t = n.getAttribute("data-mce-html"), t && (t = unescape(t), 
        n.setAttribute("data-mce-html", escape(s(t, {
            width: e.width,
            height: e.height
        })))));
    }), e.addButton("media", {
        tooltip: "Insert/edit video",
        onclick: i,
        stateSelector: "img[data-mce-object=video]"
    }), e.addMenuItem("media", {
        icon: "media",
        text: "Insert video",
        onclick: i,
        context: "insert",
        prependToContext: !0
    });
});

tinymce.PluginManager.add("nonbreaking", function(e) {
    var t = e.getParam("nonbreaking_force_tab");
    if (e.addCommand("mceNonBreaking", function() {
        e.insertContent(e.plugins.visualchars && e.plugins.visualchars.state ? '<span data-mce-bogus="1" class="mce-nbsp">&nbsp;</span>' : "&nbsp;");
    }), e.addButton("nonbreaking", {
        title: "Insert nonbreaking space",
        cmd: "mceNonBreaking"
    }), e.addMenuItem("nonbreaking", {
        text: "Nonbreaking space",
        cmd: "mceNonBreaking",
        context: "insert"
    }), t) {
        var n = +t > 1 ? +t : 3;
        e.on("keydown", function(t) {
            if (9 == t.keyCode) {
                if (t.shiftKey) return;
                t.preventDefault();
                for (var i = 0; n > i; i++) e.execCommand("mceNonBreaking");
            }
        });
    }
});

tinymce.PluginManager.add("noneditable", function(e) {
    function t() {
        function t(e) {
            var t;
            if (1 === e.nodeType) {
                if (t = e.getAttribute(s), t && "inherit" !== t) return t;
                if (t = e.contentEditable, "inherit" !== t) return t;
            }
            return null;
        }
        function n(e) {
            for (var n; e; ) {
                if (n = t(e)) return "false" === n ? e : null;
                e = e.parentNode;
            }
        }
        function i(e) {
            for (;e; ) {
                if (e.id === g) return e;
                e = e.parentNode;
            }
        }
        function o(e) {
            var t;
            if (e) for (t = new r(e, e), e = t.current(); e; e = t.next()) if (3 === e.nodeType) return e;
        }
        function a(n, i) {
            var o, a;
            return "false" === t(n) && m.isBlock(n) ? (f.select(n), void 0) : (a = m.createRng(), 
            "true" === t(n) && (n.firstChild || n.appendChild(e.getDoc().createTextNode(" ")), 
            n = n.firstChild, i = !0), o = m.create("span", {
                id: g,
                "data-mce-bogus": !0
            }, p), i ? n.parentNode.insertBefore(o, n) : m.insertAfter(o, n), a.setStart(o.firstChild, 1), 
            a.collapse(!0), f.setRng(a), o);
        }
        function l(e) {
            var t, n, a, r;
            if (e) t = f.getRng(!0), t.setStartBefore(e), t.setEndBefore(e), n = o(e), n && n.nodeValue.charAt(0) == p && (n = n.deleteData(0, 1)), 
            m.remove(e, !0), f.setRng(t); else for (a = i(f.getStart()); (e = m.get(g)) && e !== r; ) a !== e && (n = o(e), 
            n && n.nodeValue.charAt(0) == p && (n = n.deleteData(0, 1)), m.remove(e, !0)), r = e;
        }
        function d() {
            function e(e, n) {
                var i, o, a, l, s;
                if (i = c.startContainer, o = c.startOffset, 3 == i.nodeType) {
                    if (s = i.nodeValue.length, o > 0 && s > o || (n ? o == s : 0 === o)) return;
                } else {
                    if (!(o < i.childNodes.length)) return n ? null : e;
                    var d = !n && o > 0 ? o - 1 : o;
                    i = i.childNodes[d], i.hasChildNodes() && (i = i.firstChild);
                }
                for (a = new r(i, e); l = a[n ? "prev" : "next"](); ) {
                    if (3 === l.nodeType && l.nodeValue.length > 0) return;
                    if ("true" === t(l)) return l;
                }
                return e;
            }
            var i, o, s, c, d;
            l(), s = f.isCollapsed(), i = n(f.getStart()), o = n(f.getEnd()), (i || o) && (c = f.getRng(!0), 
            s ? (i = i || o, (d = e(i, !0)) ? a(d, !0) : (d = e(i, !1)) ? a(d, !1) : f.select(i)) : (c = f.getRng(!0), 
            i && c.setStartBefore(i), o && c.setEndAfter(o), f.setRng(c)));
        }
        function u(o) {
            function a(e, t) {
                for (;e = e[t ? "previousSibling" : "nextSibling"]; ) if (3 !== e.nodeType || e.nodeValue.length > 0) return e;
            }
            function s(e, t) {
                f.select(e), f.collapse(t);
            }
            function u(o) {
                function a(e) {
                    for (var t = s; t; ) {
                        if (t === e) return;
                        t = t.parentNode;
                    }
                    m.remove(e), d();
                }
                function r() {
                    var i, r, l = e.schema.getNonEmptyElements();
                    for (r = new tinymce.dom.TreeWalker(s, e.getBody()); (i = o ? r.prev() : r.next()) && !l[i.nodeName.toLowerCase()] && !(3 === i.nodeType && tinymce.trim(i.nodeValue).length > 0); ) if ("false" === t(i)) return a(i), 
                    !0;
                    return n(i) ? !0 : !1;
                }
                var l, s, c, u;
                if (f.isCollapsed()) {
                    if (l = f.getRng(!0), s = l.startContainer, c = l.startOffset, s = i(s) || s, u = n(s)) return a(u), 
                    !1;
                    if (3 == s.nodeType && (o ? c > 0 : c < s.nodeValue.length)) return !0;
                    if (1 == s.nodeType && (s = s.childNodes[c] || s), r()) return !1;
                }
                return !0;
            }
            var g, p, h, y, v = o.keyCode;
            if (h = f.getStart(), y = f.getEnd(), g = n(h) || n(y), g && (112 > v || v > 124) && v != c.DELETE && v != c.BACKSPACE) {
                if ((tinymce.isMac ? o.metaKey : o.ctrlKey) && (67 == v || 88 == v || 86 == v)) return;
                if (o.preventDefault(), v == c.LEFT || v == c.RIGHT) {
                    var b = v == c.LEFT;
                    if (e.dom.isBlock(g)) {
                        var x = b ? g.previousSibling : g.nextSibling, w = new r(x, x), C = b ? w.prev() : w.next();
                        s(C, !b);
                    } else s(g, b);
                }
            } else if (v == c.LEFT || v == c.RIGHT || v == c.BACKSPACE || v == c.DELETE) {
                if (p = i(h)) {
                    if (v == c.LEFT || v == c.BACKSPACE) if (g = a(p, !0), g && "false" === t(g)) {
                        if (o.preventDefault(), v != c.LEFT) return m.remove(g), void 0;
                        s(g, !0);
                    } else l(p);
                    if (v == c.RIGHT || v == c.DELETE) if (g = a(p), g && "false" === t(g)) {
                        if (o.preventDefault(), v != c.RIGHT) return m.remove(g), void 0;
                        s(g, !1);
                    } else l(p);
                }
                if ((v == c.BACKSPACE || v == c.DELETE) && !u(v == c.BACKSPACE)) return o.preventDefault(), 
                !1;
            }
        }
        var m = e.dom, f = e.selection, g = "mce_noneditablecaret", p = "";
        e.on("mousedown", function(n) {
            var i = e.selection.getNode();
            "false" === t(i) && i == n.target && d();
        }), e.on("mouseup keyup", d), e.on("keydown", u);
    }
    function n(t) {
        var n = a.length, i = t.content, r = tinymce.trim(o);
        if ("raw" != t.format) {
            for (;n--; ) i = i.replace(a[n], function(t) {
                var n = arguments, o = n[n.length - 2];
                return o > 0 && '"' == i.charAt(o - 1) ? t : '<span class="' + r + '" data-mce-content="' + e.dom.encode(n[0]) + '">' + e.dom.encode("string" == typeof n[1] ? n[1] : n[0]) + "</span>";
            });
            t.content = i;
        }
    }
    var i, o, a, r = tinymce.dom.TreeWalker, l = "contenteditable", s = "data-mce-" + l, c = tinymce.util.VK;
    i = " " + tinymce.trim(e.getParam("noneditable_editable_class", "mceEditable")) + " ", 
    o = " " + tinymce.trim(e.getParam("noneditable_noneditable_class", "mceNonEditable")) + " ", 
    a = e.getParam("noneditable_regexp"), a && !a.length && (a = [ a ]), e.on("PreInit", function() {
        t(), a && e.on("BeforeSetContent", n), e.parser.addAttributeFilter("class", function(e) {
            for (var t, n, a = e.length; a--; ) n = e[a], t = " " + n.attr("class") + " ", -1 !== t.indexOf(i) ? n.attr(s, "true") : -1 !== t.indexOf(o) && n.attr(s, "false");
        }), e.serializer.addAttributeFilter(s, function(e) {
            for (var t, n = e.length; n--; ) t = e[n], a && t.attr("data-mce-content") ? (t.name = "#text", 
            t.type = 3, t.raw = !0, t.value = t.attr("data-mce-content")) : (t.attr(l, null), 
            t.attr(s, null));
        }), e.parser.addAttributeFilter(l, function(e) {
            for (var t, n = e.length; n--; ) t = e[n], t.attr(s, t.attr(l)), t.attr(l, null);
        });
    });
});

tinymce.PluginManager.add("pagebreak", function(e) {
    var t, n = "mce-pagebreak", i = e.getParam("pagebreak_separator", "<!-- pagebreak -->"), a = '<img src="' + tinymce.Env.transparentSrc + '" class="' + n + '" data-mce-resize="false" />';
    t = new RegExp(i.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g, function(e) {
        return "\\" + e;
    }), "gi"), e.addCommand("mcePageBreak", function() {
        e.execCommand("mceInsertContent", 0, a);
    }), e.addButton("pagebreak", {
        title: "Page break",
        cmd: "mcePageBreak"
    }), e.addMenuItem("pagebreak", {
        text: "Page break",
        icon: "pagebreak",
        cmd: "mcePageBreak",
        context: "insert"
    }), e.on("ResolveName", function(t) {
        "IMG" == t.target.nodeName && e.dom.hasClass(t.target, n) && (t.name = "pagebreak");
    }), e.on("click", function(t) {
        t = t.target, "IMG" === t.nodeName && e.dom.hasClass(t, n) && e.selection.select(t);
    }), e.on("BeforeSetContent", function(e) {
        e.content = e.content.replace(t, a);
    }), e.on("PreInit", function() {
        e.serializer.addNodeFilter("img", function(e) {
            for (var t, n, a = e.length; a--; ) t = e[a], n = t.attr("class"), n && -1 !== n.indexOf("mce-pagebreak") && (t.type = 3, 
            t.value = i, t.raw = !0);
        });
    });
});

!function(e, t) {
    "use strict";
    function n(e, t) {
        for (var n, r = [], i = 0; i < e.length; ++i) {
            if (n = s[e[i]] || o(e[i]), !n) throw "module definition dependecy not found: " + e[i];
            r.push(n);
        }
        t.apply(null, r);
    }
    function r(e, r, i) {
        if ("string" != typeof e) throw "invalid module definition, module id must be defined and be a string";
        if (r === t) throw "invalid module definition, dependencies must be specified";
        if (i === t) throw "invalid module definition, definition function must be specified";
        n(r, function() {
            s[e] = i.apply(null, arguments);
        });
    }
    function i(e) {
        return !!s[e];
    }
    function o(t) {
        for (var n = e, r = t.split(/[.\/]/), i = 0; i < r.length; ++i) {
            if (!n[r[i]]) return;
            n = n[r[i]];
        }
        return n;
    }
    function a(n) {
        for (var r = 0; r < n.length; r++) {
            for (var i = e, o = n[r], a = o.split(/[.\/]/), l = 0; l < a.length - 1; ++l) i[a[l]] === t && (i[a[l]] = {}), 
            i = i[a[l]];
            i[a[a.length - 1]] = s[o];
        }
    }
    var s = {}, l = "tinymce/pasteplugin/Clipboard", c = "tinymce/Env", d = "tinymce/util/Tools", u = "tinymce/util/VK", f = "tinymce/pasteplugin/WordFilter", p = "tinymce/html/DomParser", m = "tinymce/html/Schema", h = "tinymce/html/Serializer", g = "tinymce/html/Node", v = "tinymce/pasteplugin/Quirks", y = "tinymce/pasteplugin/Plugin", b = "tinymce/PluginManager";
    r(l, [ c, d, u ], function(e, t, n) {
        function r() {
            return !e.gecko && ("ClipboardEvent" in window || e.webkit && "FocusEvent" in window);
        }
        return function(i) {
            function o() {
                return new Date().getTime();
            }
            function a(e) {
                return n.metaKeyPressed(e) && 86 == e.keyCode || e.shiftKey && 45 == e.keyCode;
            }
            function s(e) {
                return e.innerText || e.textContent;
            }
            function l() {
                return o() - h < 100 || "text" == m.pasteFormat;
            }
            function c(e, n) {
                return t.each(n, function(t) {
                    e = t.constructor == RegExp ? e.replace(t, "") : e.replace(t[0], t[1]);
                }), e;
            }
            function d(t) {
                var n = i.fire("PastePreProcess", {
                    content: t
                });
                t = n.content, i.settings.paste_data_images || (t = t.replace(/<img src=\"data:image[^>]+>/g, "")), 
                (i.settings.paste_remove_styles || i.settings.paste_remove_styles_if_webkit !== !1 && e.webkit) && (t = t.replace(/ style=\"[^\"]+\"/g, "")), 
                n.isDefaultPrevented() || i.insertContent(t);
            }
            function u(e) {
                e = i.dom.encode(e).replace(/\r\n/g, "\n");
                var t = i.dom.getParent(i.selection.getStart(), i.dom.isBlock);
                e = t && /^(PRE|DIV)$/.test(t.nodeName) || !i.settings.forced_root_block ? c(e, [ [ /\n/g, "<br>" ] ]) : c(e, [ [ /\n\n/g, "</p><p>" ], [ /^(.*<\/p>)(<p>)$/, "<p>$1" ], [ /\n/g, "<br />" ] ]);
                var n = i.fire("PastePreProcess", {
                    content: e
                });
                n.isDefaultPrevented() || i.insertContent(n.content);
            }
            function f() {
                var e = i.dom.getViewPort().y, t = i.dom.add(i.getBody(), "div", {
                    contentEditable: !1,
                    "data-mce-bogus": "1",
                    style: "position: absolute; top: " + e + "px; left: 0; width: 1px; height: 1px; overflow: hidden"
                }, '<div contentEditable="true" data-mce-bogus="1">X</div>');
                return i.dom.bind(t, "beforedeactivate focusin focusout", function(e) {
                    e.stopPropagation();
                }), t;
            }
            function p(e) {
                i.dom.unbind(e), i.dom.remove(e);
            }
            var m = this, h;
            i.on("keydown", function(e) {
                n.metaKeyPressed(e) && e.shiftKey && 86 == e.keyCode && (h = o());
            }), r() ? i.on("paste", function(e) {
                function t(e, t) {
                    for (var r = 0; r < n.types.length; r++) if (n.types[r] == e) return t(n.getData(e)), 
                    !0;
                }
                var n = e.clipboardData;
                n && (e.preventDefault(), l() ? t("text/plain", u) || t("text/html", d) : t("text/html", d) || t("text/plain", u));
            }) : (e.ie ? i.on("init", function() {
                var e = i.dom, t = 0;
                i.on("keydown", function(n) {
                    if (a(n) && !n.isDefaultPrevented()) {
                        var r = f();
                        t = o(), e.bind(r, "paste", function() {
                            setTimeout(function() {
                                p(r), i.selection.setRng(c), l() ? u(s(r.firstChild)) : d(r.firstChild.innerHTML);
                            }, 0);
                        });
                        var c = i.selection.getRng();
                        r.firstChild.focus(), r.firstChild.innerText = "";
                    }
                }), i.dom.bind(i.getBody(), "paste", function(n) {
                    if (o() - t > 100) {
                        var r, a = f();
                        n.preventDefault(), e.bind(a, "paste", function(e) {
                            e.stopPropagation(), r = !0;
                        });
                        var c = i.selection.getRng(), m = e.doc.body.createTextRange();
                        if (m.moveToElementText(a.firstChild), m.execCommand("Paste"), p(a), !r) return i.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."), 
                        void 0;
                        i.selection.setRng(c), l() ? u(s(a.firstChild)) : d(a.firstChild.innerHTML);
                    }
                });
            }) : (i.on("init", function() {
                i.dom.bind(i.getBody(), "paste", function(e) {
                    e.preventDefault(), i.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents.");
                });
            }), i.on("keydown", function(e) {
                if (a(e) && !e.isDefaultPrevented()) {
                    var t = f(), n = i.selection.getRng();
                    i.selection.select(t, !0), i.dom.bind(t, "paste", function(e) {
                        e.stopPropagation(), setTimeout(function() {
                            p(t), i.lastRng = n, i.selection.setRng(n);
                            var e = t.firstChild;
                            e.lastChild && "BR" == e.lastChild.nodeName && e.removeChild(e.lastChild), l() ? u(s(e)) : d(e.innerHTML);
                        }, 0);
                    });
                }
            })), i.settings.paste_data_images || i.on("drop", function(e) {
                var t = e.dataTransfer;
                t && t.files && t.files.length > 0 && e.preventDefault();
            })), i.paste_block_drop && i.on("dragend dragover draggesture dragdrop drop drag", function(e) {
                e.preventDefault(), e.stopPropagation();
            }), this.paste = d, this.pasteText = u;
        };
    }), r(f, [ d, p, m, h, g ], function(e, t, n, r, i) {
        return function(o) {
            var a = e.each;
            o.on("PastePreProcess", function(s) {
                function l(e) {
                    a(e, function(e) {
                        u = e.constructor == RegExp ? u.replace(e, "") : u.replace(e[0], e[1]);
                    });
                }
                function c(e) {
                    function t(e, t, a, s) {
                        var l = e._listLevel || o;
                        l != o && (o > l ? n && (n = n.parent.parent) : (r = n, n = null)), n && n.name == a ? n.append(e) : (r = r || n, 
                        n = new i(a, 1), s > 1 && n.attr("start", "" + s), e.wrap(n)), e.name = "li", t.value = "";
                        var c = t.next;
                        c && 3 == c.type && (c.value = c.value.replace(/^\u00a0+/, "")), l > o && r.lastChild.append(n), 
                        o = l;
                    }
                    for (var n, r, o = 1, a = e.getAll("p"), s = 0; s < a.length; s++) if (e = a[s], 
                    "p" == e.name && e.firstChild) {
                        for (var l = "", c = e.firstChild; c && !(l = c.value); ) c = c.firstChild;
                        if (/^\s*[\u2022\u00b7\u00a7\u00d8o\u25CF]\s*$/.test(l)) {
                            t(e, c, "ul");
                            continue;
                        }
                        if (/^\s*\w+\./.test(l)) {
                            var d = /([0-9])\./.exec(l), u = 1;
                            d && (u = parseInt(d[1], 10)), t(e, c, "ol", u);
                            continue;
                        }
                        n = null;
                    }
                }
                function d(t, n) {
                    if ("p" === t.name) {
                        var r = /mso-list:\w+ \w+([0-9]+)/.exec(n);
                        r && (t._listLevel = parseInt(r[1], 10));
                    }
                    if (o.getParam("paste_retain_style_properties", "none")) {
                        var i = "";
                        if (e.each(o.dom.parseStyle(n), function(e, t) {
                            switch (t) {
                              case "horiz-align":
                                return t = "text-align", void 0;

                              case "vert-align":
                                return t = "vertical-align", void 0;

                              case "font-color":
                              case "mso-foreground":
                                return t = "color", void 0;

                              case "mso-background":
                              case "mso-highlight":
                                t = "background";
                            }
                            ("all" == f || p && p[t]) && (i += t + ":" + e + ";");
                        }), i) return i;
                    }
                    return null;
                }
                var u = s.content, f, p;
                if (f = o.settings.paste_retain_style_properties, f && (p = e.makeMap(f)), o.settings.paste_enable_default_filters !== !1 && /class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(s.content)) {
                    s.wordContent = !0, l([ /<!--[\s\S]+?-->/gi, /<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi, [ /<(\/?)s>/gi, "<$1strike>" ], [ /&nbsp;/gi, " " ], [ /<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi, function(e, t) {
                        return t.length > 0 ? t.replace(/./, " ").slice(Math.floor(t.length / 2)).split("").join(" ") : "";
                    } ] ]);
                    var m = new n({
                        valid_elements: "@[style],-strong/b,-em/i,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-table,-tr,-td[colspan|rowspan],-th,-thead,-tfoot,-tbody,-a[!href]"
                    }), h = new t({}, m);
                    h.addAttributeFilter("style", function(e) {
                        for (var t = e.length, n; t--; ) n = e[t], n.attr("style", d(n, n.attr("style"))), 
                        "span" != n.name || n.attributes.length || n.unwrap();
                    });
                    var g = h.parse(u);
                    c(g), s.content = new r({}, m).serialize(g);
                }
            });
        };
    }), r(v, [ c, d ], function(e, t) {
        return function(n) {
            function r(e) {
                n.on("PastePreProcess", function(t) {
                    t.content = e(t.content);
                });
            }
            function i(e, n) {
                return t.each(n, function(t) {
                    e = t.constructor == RegExp ? e.replace(t, "") : e.replace(t[0], t[1]);
                }), e;
            }
            function o(e) {
                return e = i(e, [ /^[\s\S]*<!--StartFragment-->|<!--EndFragment-->[\s\S]*$/g, [ /<span class="Apple-converted-space">\u00a0<\/span>/g, " " ], /<br>$/ ]);
            }
            function a(e) {
                if (!s) {
                    var r = [];
                    t.each(n.schema.getBlockElements(), function(e, t) {
                        r.push(t);
                    }), s = new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?(" + r.join("|") + ")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*", "g");
                }
                return e = i(e, [ [ s, "$1" ] ]), e = i(e, [ [ /<br><br>/g, "<BR><BR>" ], [ /<br>/g, " " ], [ /<BR><BR>/g, "<br>" ] ]);
            }
            var s;
            e.webkit && r(o), e.ie && r(a);
        };
    }), r(y, [ b, l, f, v ], function(e, t, n, r) {
        var i;
        e.add("paste", function(e) {
            var o = this, a;
            o.clipboard = a = new t(e), o.quirks = new r(e), o.wordFilter = new n(e), e.settings.paste_as_text && (o.clipboard.pasteFormat = "text"), 
            e.addCommand("mceInsertClipboardContent", function(e, t) {
                t.content && o.clipboard.paste(t.content), t.text && o.clipboard.pasteText(t.text);
            }), e.addMenuItem("pastetext", {
                text: "Paste as text",
                selectable: !0,
                active: a.pasteFormat,
                onclick: function() {
                    "text" == a.pasteFormat ? (this.active(!1), a.pasteFormat = "html") : (a.pasteFormat = "text", 
                    this.active(!0), i || (e.windowManager.alert("Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off."), 
                    i = !0));
                }
            });
        });
    }), a([ l, f, v, y ]);
}(this);

tinymce.PluginManager.add("preview", function(e) {
    var t = e.settings;
    e.addCommand("mcePreview", function() {
        e.windowManager.open({
            title: "Preview",
            width: parseInt(e.getParam("plugin_preview_width", "650"), 10),
            height: parseInt(e.getParam("plugin_preview_height", "500"), 10),
            html: '<iframe src="javascript:\'\'" frameborder="0"></iframe>',
            buttons: {
                text: "Close",
                onclick: function() {
                    this.parent().parent().close();
                }
            },
            onPostRender: function() {
                var n, i = this.getEl("body").firstChild.contentWindow.document, a = "";
                tinymce.each(e.contentCSS, function(t) {
                    a += '<link type="text/css" rel="stylesheet" href="' + e.documentBaseURI.toAbsolute(t) + '">';
                });
                var r = t.body_id || "tinymce";
                -1 != r.indexOf("=") && (r = e.getParam("body_id", "", "hash"), r = r[e.id] || r);
                var o = t.body_class || "";
                -1 != o.indexOf("=") && (o = e.getParam("body_class", "", "hash"), o = o[e.id] || ""), 
                n = "<!DOCTYPE html><html><head>" + a + "</head>" + '<body id="' + r + '" class="mce-content-body ' + o + '">' + e.getContent() + "</body>" + "</html>", 
                i.open(), i.write(n), i.close();
            }
        });
    }), e.addButton("preview", {
        title: "Preview",
        cmd: "mcePreview"
    }), e.addMenuItem("preview", {
        text: "Preview",
        cmd: "mcePreview",
        context: "view"
    });
});

tinymce.PluginManager.add("print", function(e) {
    e.addCommand("mcePrint", function() {
        e.getWin().print();
    }), e.addButton("print", {
        title: "Print",
        cmd: "mcePrint"
    }), e.addMenuItem("print", {
        text: "Print",
        cmd: "mcePrint",
        icon: "print",
        shortcut: "Ctrl+P",
        context: "file"
    });
});

tinymce.PluginManager.add("save", function(e) {
    function t() {
        var t, n;
        return t = tinymce.DOM.getParent(e.id, "form"), !e.getParam("save_enablewhendirty") || e.isDirty() ? (tinymce.triggerSave(), 
        (n = e.getParam("save_onsavecallback")) ? (e.execCallback("save_onsavecallback", e) && (e.startContent = tinymce.trim(e.getContent({
            format: "raw"
        })), e.nodeChanged()), void 0) : (t ? (e.isNotDirty = !0, (!t.onsubmit || t.onsubmit()) && ("function" == typeof t.submit ? t.submit() : e.windowManager.alert("Error: Form submit field collision.")), 
        e.nodeChanged()) : e.windowManager.alert("Error: No form element found."), void 0)) : void 0;
    }
    function n() {
        var t, n = tinymce.trim(e.startContent);
        return (t = e.getParam("save_oncancelcallback")) ? (e.execCallback("save_oncancelcallback", e), 
        void 0) : (e.setContent(n), e.undoManager.clear(), e.nodeChanged(), void 0);
    }
    function i() {
        var t = this;
        e.on("nodeChange", function() {
            t.disabled(!e.isDirty());
        });
    }
    e.addCommand("mceSave", t), e.addCommand("mceCancel", n), e.addButton("save", {
        icon: "save",
        text: "Save",
        cmd: "mceSave",
        disabled: !0,
        onPostRender: i
    }), e.addButton("cancel", {
        text: "Cancel",
        icon: !1,
        cmd: "mceCancel",
        disabled: !0,
        onPostRender: i
    }), e.addShortcut("ctrl+s", "", "mceSave");
});

!function() {
    function e(e, t, n, i, a) {
        function r(e, t) {
            if (t = t || 0, !e[0]) throw "findAndReplaceDOMText cannot handle zero-length matches";
            var n = e.index;
            if (t > 0) {
                var i = e[t];
                if (!i) throw "Invalid capture group";
                n += e[0].indexOf(i), e[0] = i;
            }
            return [ n, n + e[0].length, [ e[0] ] ];
        }
        function o(e) {
            var t;
            if (3 === e.nodeType) return e.data;
            if (f[e.nodeName]) return "";
            if (t = "", (m[e.nodeName] || g[e.nodeName]) && (t += "\n"), e = e.firstChild) do t += o(e); while (e = e.nextSibling);
            return t;
        }
        function l(e, t, n) {
            var i, a, r, o, l = [], c = 0, s = e, d = t.shift(), u = 0;
            e: for (;;) {
                if ((m[s.nodeName] || g[s.nodeName]) && c++, 3 === s.nodeType && (!a && s.length + c >= d[1] ? (a = s, 
                o = d[1] - c) : i && l.push(s), !i && s.length + c > d[0] && (i = s, r = d[0] - c), 
                c += s.length), i && a) {
                    if (s = n({
                        startNode: i,
                        startNodeIndex: r,
                        endNode: a,
                        endNodeIndex: o,
                        innerNodes: l,
                        match: d[2],
                        matchIndex: u
                    }), c -= a.length - o, i = null, a = null, l = [], d = t.shift(), u++, !d) break;
                } else {
                    if (!f[s.nodeName] && s.firstChild) {
                        s = s.firstChild;
                        continue;
                    }
                    if (s.nextSibling) {
                        s = s.nextSibling;
                        continue;
                    }
                }
                for (;;) {
                    if (s.nextSibling) {
                        s = s.nextSibling;
                        break;
                    }
                    if (s.parentNode === e) break e;
                    s = s.parentNode;
                }
            }
        }
        function c(e) {
            var t;
            if ("function" != typeof e) {
                var n = e.nodeType ? e : u.createElement(e);
                t = function(e, t) {
                    var i = n.cloneNode(!1);
                    return i.setAttribute("data-mce-index", t), e && i.appendChild(u.createTextNode(e)), 
                    i;
                };
            } else t = e;
            return function(e) {
                var n, i, a, r = e.startNode, o = e.endNode, l = e.matchIndex;
                if (r === o) {
                    var c = r;
                    a = c.parentNode, e.startNodeIndex > 0 && (n = u.createTextNode(c.data.substring(0, e.startNodeIndex)), 
                    a.insertBefore(n, c));
                    var s = t(e.match[0], l);
                    return a.insertBefore(s, c), e.endNodeIndex < c.length && (i = u.createTextNode(c.data.substring(e.endNodeIndex)), 
                    a.insertBefore(i, c)), c.parentNode.removeChild(c), s;
                }
                n = u.createTextNode(r.data.substring(0, e.startNodeIndex)), i = u.createTextNode(o.data.substring(e.endNodeIndex));
                for (var d = t(r.data.substring(e.startNodeIndex), l), m = [], f = 0, g = e.innerNodes.length; g > f; ++f) {
                    var h = e.innerNodes[f], p = t(h.data, l);
                    h.parentNode.replaceChild(p, h), m.push(p);
                }
                var v = t(o.data.substring(0, e.endNodeIndex), l);
                return a = r.parentNode, a.insertBefore(n, r), a.insertBefore(d, r), a.removeChild(r), 
                a = o.parentNode, a.insertBefore(v, o), a.insertBefore(i, o), a.removeChild(o), 
                v;
            };
        }
        var s, d, u, m, f, g, h = [], p = 0;
        if (u = t.ownerDocument, m = a.getBlockElements(), f = a.getWhiteSpaceElements(), 
        g = a.getShortEndedElements(), d = o(t)) {
            if (e.global) for (;s = e.exec(d); ) h.push(r(s, i)); else s = d.match(e), h.push(r(s, i));
            return h.length && (p = h.length, l(t, h, c(n))), p;
        }
    }
    function t(t) {
        function n() {
            var e = tinymce.ui.Factory.create({
                type: "window",
                layout: "flex",
                pack: "center",
                align: "center",
                onClose: function() {
                    t.focus(), o = !1, l.unmarkAllMatches();
                },
                buttons: [ {
                    text: "Find",
                    onclick: function() {
                        e.find("form")[0].submit();
                    }
                }, {
                    text: "Replace",
                    disabled: !0,
                    onclick: function() {
                        l.replace(e.find("#replace").value()) || e.statusbar.items().slice(1).disabled(!0);
                    }
                }, {
                    text: "Replace all",
                    disabled: !0,
                    onclick: function() {
                        l.replaceAll(e.find("#replace").value()), e.statusbar.items().slice(1).disabled(!0);
                    }
                }, {
                    type: "spacer",
                    flex: 1
                }, {
                    text: "Prev",
                    disabled: !0,
                    onclick: function() {
                        l.prev();
                    }
                }, {
                    text: "Next",
                    disabled: !0,
                    onclick: function() {
                        l.next();
                    }
                } ],
                title: "Find and replace",
                items: {
                    type: "form",
                    padding: 20,
                    labelGap: 30,
                    spacing: 10,
                    onsubmit: function(t) {
                        var n, i, a, r, o;
                        return t.preventDefault(), a = e.find("#case").checked(), o = e.find("#words").checked(), 
                        r = e.find("#find").value(), r.length ? (r = r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 
                        r = o ? "\\b" + r + "\\b" : r, i = new RegExp(r, a ? "g" : "gi"), n = l.markAllMatches(i), 
                        n ? l.first() : tinymce.ui.MessageBox.alert("Could not find the specified string."), 
                        e.statusbar.items().slice(1).disabled(0 === n), void 0) : (l.unmarkAllMatches(), 
                        e.statusbar.items().slice(1).disabled(!0), void 0);
                    },
                    items: [ {
                        type: "textbox",
                        name: "find",
                        size: 40,
                        label: "Find",
                        value: t.selection.getNode().src
                    }, {
                        type: "textbox",
                        name: "replace",
                        size: 40,
                        label: "Replace with"
                    }, {
                        type: "checkbox",
                        name: "case",
                        text: "Match case",
                        label: " "
                    }, {
                        type: "checkbox",
                        name: "words",
                        text: "Whole words",
                        label: " "
                    } ]
                }
            }).renderTo().reflow();
            o = !0;
        }
        function i(e) {
            var t = e.parentNode;
            t.insertBefore(e.firstChild, e), e.parentNode.removeChild(e);
        }
        function a(e, n) {
            function i() {
                var i, o;
                for (i = n ? t.getBody()[e ? "firstChild" : "lastChild"] : l[e ? "endContainer" : "startContainer"], 
                o = new tinymce.dom.TreeWalker(i, t.getBody()); i = o.current(); ) {
                    if (1 == i.nodeType && "SPAN" == i.nodeName && null !== i.getAttribute("data-mce-index")) for (c = i.getAttribute("data-mce-index"), 
                    a = i.firstChild; i = o.current(); ) {
                        if (1 == i.nodeType && "SPAN" == i.nodeName && null !== i.getAttribute("data-mce-index")) {
                            if (i.getAttribute("data-mce-index") !== c) return;
                            r = i.firstChild;
                        }
                        o[e ? "next" : "prev"]();
                    }
                    o[e ? "next" : "prev"]();
                }
            }
            var a, r, o = t.selection, l = o.getRng(!0), c = -1;
            return e = e !== !1, i(), a && r && (t.focus(), e ? (l.setStart(a, 0), l.setEnd(r, r.length)) : (l.setStart(r, 0), 
            l.setEnd(a, a.length)), o.scrollIntoView(a.parentNode), o.setRng(l)), c;
        }
        function r(e) {
            e.parentNode.removeChild(e);
        }
        var o, l = this, c = -1;
        l.init = function(e) {
            e.addMenuItem("searchreplace", {
                text: "Find and replace",
                shortcut: "Ctrl+F",
                onclick: n,
                separator: "before",
                context: "edit"
            }), e.addButton("searchreplace", {
                tooltip: "Find and replace",
                shortcut: "Ctrl+F",
                onclick: n
            }), e.shortcuts.add("Ctrl+F", "", n);
        }, l.markAllMatches = function(n) {
            var i, a;
            return a = t.dom.create("span", {
                "class": "mce-match-marker",
                "data-mce-bogus": 1
            }), i = t.getBody(), l.unmarkAllMatches(i), e(n, i, a, !1, t.schema);
        }, l.first = function() {
            return c = a(!0, !0), -1 !== c;
        }, l.next = function() {
            return c = a(!0), -1 !== c;
        }, l.prev = function() {
            return c = a(!1), -1 !== c;
        }, l.replace = function(e, n, o) {
            var l, s, d, u, m, f;
            if (-1 === c && (c = a(n)), f = a(n), d = t.getBody(), s = tinymce.toArray(d.getElementsByTagName("span")), 
            s.length) for (l = 0; l < s.length; l++) {
                var g = s[l].getAttribute("data-mce-index");
                if (null !== g && g.length && (u = m = s[l].getAttribute("data-mce-index"), o || u === c)) for (e.length ? (s[l].firstChild.nodeValue = e, 
                i(s[l])) : r(s[l]); s[++l]; ) if (u = s[l].getAttribute("data-mce-index"), null !== g && g.length) {
                    if (u !== m) {
                        l--;
                        break;
                    }
                    r(s[l]);
                }
            }
            return -1 == f && (f = a(n, !0)), c = f, o && t.selection.setCursorLocation(t.getBody(), 0), 
            t.undoManager.add(), -1 !== c;
        }, l.replaceAll = function(e) {
            l.replace(e, !0, !0);
        }, l.unmarkAllMatches = function() {
            var e, n, a;
            for (a = t.getBody(), n = a.getElementsByTagName("span"), e = n.length; e--; ) a = n[e], 
            a.getAttribute("data-mce-index") && i(a);
        }, t.on("beforeaddundo keydown", function(e) {
            return o ? (e.preventDefault(), !1) : void 0;
        });
    }
    tinymce.PluginManager.add("searchreplace", t);
}();

!function(e, t) {
    "use strict";
    function n(e, t) {
        for (var n, r = [], i = 0; i < e.length; ++i) {
            if (n = s[e[i]] || o(e[i]), !n) throw "module definition dependecy not found: " + e[i];
            r.push(n);
        }
        t.apply(null, r);
    }
    function r(e, r, i) {
        if ("string" != typeof e) throw "invalid module definition, module id must be defined and be a string";
        if (r === t) throw "invalid module definition, dependencies must be specified";
        if (i === t) throw "invalid module definition, definition function must be specified";
        n(r, function() {
            s[e] = i.apply(null, arguments);
        });
    }
    function i(e) {
        return !!s[e];
    }
    function o(t) {
        for (var n = e, r = t.split(/[.\/]/), i = 0; i < r.length; ++i) {
            if (!n[r[i]]) return;
            n = n[r[i]];
        }
        return n;
    }
    function a(n) {
        for (var r = 0; r < n.length; r++) {
            for (var i = e, o = n[r], a = o.split(/[.\/]/), l = 0; l < a.length - 1; ++l) i[a[l]] === t && (i[a[l]] = {}), 
            i = i[a[l]];
            i[a[a.length - 1]] = s[o];
        }
    }
    var s = {}, l = "tinymce/spellcheckerplugin/DomTextMatcher", c = "tinymce/spellcheckerplugin/Plugin", d = "tinymce/PluginManager", u = "tinymce/util/Tools", f = "tinymce/ui/Menu", p = "tinymce/dom/DOMUtils", h = "tinymce/util/JSONRequest", m = "tinymce/util/URI";
    r(l, [], function() {
        return function(e, t, n) {
            function r(e) {
                if (!e[0]) throw "findAndReplaceDOMText cannot handle zero-length matches";
                var t = e.index;
                return [ t, t + e[0].length, [ e[0] ] ];
            }
            function i(e) {
                var t;
                if (3 === e.nodeType) return e.data;
                if (g[e.nodeName]) return "";
                if (t = "", (m[e.nodeName] || v[e.nodeName]) && (t += "\n"), e = e.firstChild) do t += i(e); while (e = e.nextSibling);
                return t;
            }
            function o(e, t, n) {
                var r, i, o, a, s = [], l = 0, c = e, d = t.shift(), u = 0;
                e: for (;;) {
                    if ((m[c.nodeName] || v[c.nodeName]) && l++, 3 === c.nodeType && (!i && c.length + l >= d[1] ? (i = c, 
                    a = d[1] - l) : r && s.push(c), !r && c.length + l > d[0] && (r = c, o = d[0] - l), 
                    l += c.length), r && i) {
                        if (c = n({
                            startNode: r,
                            startNodeIndex: o,
                            endNode: i,
                            endNodeIndex: a,
                            innerNodes: s,
                            match: d[2],
                            matchIndex: u
                        }), l -= i.length - a, r = null, i = null, s = [], d = t.shift(), u++, !d) break;
                    } else {
                        if (!g[c.nodeName] && c.firstChild) {
                            c = c.firstChild;
                            continue;
                        }
                        if (c.nextSibling) {
                            c = c.nextSibling;
                            continue;
                        }
                    }
                    for (;;) {
                        if (c.nextSibling) {
                            c = c.nextSibling;
                            break;
                        }
                        if (c.parentNode === e) break e;
                        c = c.parentNode;
                    }
                }
            }
            function a(e) {
                var t;
                if ("function" != typeof e) {
                    var n = e.nodeType ? e : h.createElement(e);
                    t = function(e, t) {
                        var r = n.cloneNode(!1);
                        return r.setAttribute("data-mce-index", t), e && r.appendChild(h.createTextNode(e)), 
                        r;
                    };
                } else t = e;
                return function r(e) {
                    var n, r, i, o = e.startNode, a = e.endNode, s = e.matchIndex;
                    if (o === a) {
                        var l = o;
                        i = l.parentNode, e.startNodeIndex > 0 && (n = h.createTextNode(l.data.substring(0, e.startNodeIndex)), 
                        i.insertBefore(n, l));
                        var c = t(e.match[0], s);
                        return i.insertBefore(c, l), e.endNodeIndex < l.length && (r = h.createTextNode(l.data.substring(e.endNodeIndex)), 
                        i.insertBefore(r, l)), l.parentNode.removeChild(l), c;
                    }
                    n = h.createTextNode(o.data.substring(0, e.startNodeIndex)), r = h.createTextNode(a.data.substring(e.endNodeIndex));
                    for (var d = t(o.data.substring(e.startNodeIndex), s), u = [], f = 0, p = e.innerNodes.length; p > f; ++f) {
                        var m = e.innerNodes[f], g = t(m.data, s);
                        m.parentNode.replaceChild(g, m), u.push(g);
                    }
                    var v = t(a.data.substring(0, e.endNodeIndex), s);
                    return i = o.parentNode, i.insertBefore(n, o), i.insertBefore(d, o), i.removeChild(o), 
                    i = a.parentNode, i.insertBefore(v, a), i.insertBefore(r, a), i.removeChild(a), 
                    v;
                };
            }
            function s(e) {
                var t = [];
                return l(function(n, r) {
                    e(n, r) && t.push(n);
                }), u = t, this;
            }
            function l(e) {
                for (var t = 0, n = u.length; n > t && e(u[t], t) !== !1; t++) ;
                return this;
            }
            function c(e) {
                return u.length && (p = u.length, o(t, u, a(e))), this;
            }
            var d, u = [], f, p = 0, h, m, g, v;
            if (h = t.ownerDocument, m = n.getBlockElements(), g = n.getWhiteSpaceElements(), 
            v = n.getShortEndedElements(), f = i(t), f && e.global) for (;d = e.exec(f); ) u.push(r(d));
            return {
                text: f,
                count: p,
                matches: u,
                each: l,
                filter: s,
                mark: c
            };
        };
    }), r(c, [ l, d, u, f, p, h, m ], function(e, t, n, r, i, o, a) {
        t.add("spellchecker", function(t, s) {
            function l(e) {
                for (var t in e) return !1;
                return !0;
            }
            function c(e, o) {
                var a = [], s = g[o];
                n.each(s, function(e) {
                    a.push({
                        text: e,
                        onclick: function() {
                            t.insertContent(e), u();
                        }
                    });
                }), a.push.apply(a, [ {
                    text: "-"
                }, {
                    text: "Ignore",
                    onclick: function() {
                        p(e, o);
                    }
                }, {
                    text: "Ignore all",
                    onclick: function() {
                        p(e, o, !0);
                    }
                }, {
                    text: "Finish",
                    onclick: h
                } ]), y = new r({
                    items: a,
                    context: "contextmenu",
                    onautohide: function(e) {
                        -1 != e.target.className.indexOf("spellchecker") && e.preventDefault();
                    },
                    onhide: function() {
                        y.remove(), y = null;
                    }
                }), y.renderTo(document.body);
                var l = i.DOM.getPos(t.getContentAreaContainer()), c = t.dom.getPos(e);
                l.x += c.x, l.y += c.y, y.moveTo(l.x, l.y + e.offsetHeight);
            }
            function d() {
                function n(e) {
                    return t.setProgressState(!1), l(e) ? (t.windowManager.alert("No misspellings found"), 
                    v = !1, void 0) : (g = e, i.filter(function(t) {
                        return !!e[t[2][0]];
                    }).mark(t.dom.create("span", {
                        "class": "mce-spellchecker-word",
                        "data-mce-bogus": 1
                    })), i = null, t.fire("SpellcheckStart"), void 0);
                }
                function r(e, n, r) {
                    o.sendRPC({
                        url: new a(s).toAbsolute(b.spellchecker_rpc_url),
                        method: e,
                        params: {
                            lang: b.spellchecker_language || "en",
                            words: n
                        },
                        success: function(e) {
                            r(e);
                        },
                        error: function(e, n) {
                            e = "JSON Parse error." == e ? "Non JSON response:" + n.responseText : "Error: " + e, 
                            t.windowManager.alert(e), t.setProgressState(!1), i = null, v = !1;
                        }
                    });
                }
                var i, c = [], d = {};
                if (v) return h(), void 0;
                v = !0;
                var u = t.getParam("spellchecker_wordchar_pattern") || new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`§©«®±¶·¸»¼½¾¿×÷¤”“„]+', "g");
                i = new e(u, t.getBody(), t.schema).each(function(e) {
                    var t = e[2][0];
                    if (!d[t]) {
                        if (/^\d+$/.test(t) || 1 == t.length) return;
                        c.push(t), d[t] = !0;
                    }
                }), t.setProgressState(!0);
                var f = b.spellchecker_callback || r;
                f("spellcheck", c, n);
            }
            function u() {
                t.dom.select("span.mce-spellchecker-word").length || h();
            }
            function f(e) {
                var t = e.parentNode;
                t.insertBefore(e.firstChild, e), e.parentNode.removeChild(e);
            }
            function p(e, r, i) {
                i ? n.each(t.dom.select("span.mce-spellchecker-word"), function(e) {
                    var t = e.innerText || e.textContent;
                    t == r && f(e);
                }) : f(e), u();
            }
            function h() {
                var e, n, r;
                for (v = !1, r = t.getBody(), n = r.getElementsByTagName("span"), e = n.length; e--; ) r = n[e], 
                r.getAttribute("data-mce-index") && f(r);
                t.fire("SpellcheckEnd");
            }
            function m(e) {
                var n, r, i, o = -1, a, s;
                for (e = "" + e, n = t.getBody().getElementsByTagName("span"), r = 0; r < n.length && (i = n[r], 
                "mce-spellchecker-word" != i.className || (o = i.getAttribute("data-mce-index"), 
                o === e && (o = e, a || (a = i.firstChild), s = i.firstChild), o === e || !s)); r++) ;
                var l = t.dom.createRng();
                return l.setStart(a, 0), l.setEnd(s, s.length), t.selection.setRng(l), l;
            }
            var g, v, y, b = t.settings;
            t.on("click", function(e) {
                if ("mce-spellchecker-word" == e.target.className) {
                    e.preventDefault();
                    var t = m(e.target.getAttribute("data-mce-index"));
                    c(e.target, t.toString());
                }
            }), t.addMenuItem("spellchecker", {
                text: "Spellcheck",
                context: "tools",
                onclick: d,
                selectable: !0,
                onPostRender: function() {
                    var e = this;
                    t.on("SpellcheckStart SpellcheckEnd", function() {
                        e.active(v);
                    });
                }
            }), t.addButton("spellchecker", {
                tooltip: "Spellcheck",
                onclick: d,
                onPostRender: function() {
                    var e = this;
                    t.on("SpellcheckStart SpellcheckEnd", function() {
                        e.active(v);
                    });
                }
            }), t.on("remove", function() {
                y && (y.remove(), y = null);
            });
        });
    }), a([ l, c ]);
}(this);

tinymce.PluginManager.add("tabfocus", function(e) {
    function t(e) {
        9 === e.keyCode && e.preventDefault();
    }
    function n(t) {
        function n(t) {
            function n(e) {
                return "BODY" === e.nodeName || "hidden" != e.type && "none" != e.style.display && "hidden" != e.style.visibility && n(e.parentNode);
            }
            function a(e) {
                return e.tabIndex || "INPUT" == e.nodeName || "TEXTAREA" == e.nodeName;
            }
            function u(e) {
                return !a(e) && "-1" != e.getAttribute("tabindex") && n(e);
            }
            if (o = i.select(":input:enabled,*[tabindex]:not(iframe)"), r(o, function(t, n) {
                return t.id == e.id ? (c = n, !1) : void 0;
            }), t > 0) {
                for (s = c + 1; s < o.length; s++) if (u(o[s])) return o[s];
            } else for (s = c - 1; s >= 0; s--) if (u(o[s])) return o[s];
            return null;
        }
        var c, o, u, s;
        if (9 === t.keyCode && (u = a(e.getParam("tab_focus", e.getParam("tabfocus_elements", ":prev,:next"))), 
        1 == u.length && (u[1] = u[0], u[0] = ":prev"), o = t.shiftKey ? ":prev" == u[0] ? n(-1) : i.get(u[0]) : ":next" == u[1] ? n(1) : i.get(u[1]))) {
            var l = tinymce.get(o.id || o.name);
            o.id && l ? l.focus() : window.setTimeout(function() {
                tinymce.Env.webkit || window.focus(), o.focus();
            }, 10), t.preventDefault();
        }
    }
    var i = tinymce.DOM, r = tinymce.each, a = tinymce.explode;
    e.on("init", function() {
        e.inline && tinymce.DOM.setAttrib(e.getBody(), "tabIndex", null);
    }), e.on("keyup", t), tinymce.Env.gecko ? e.on("keypress keydown", n) : e.on("keydown", n);
});

!function(e, t) {
    "use strict";
    function n(e, t) {
        for (var n, r = [], i = 0; i < e.length; ++i) {
            if (n = s[e[i]] || o(e[i]), !n) throw "module definition dependecy not found: " + e[i];
            r.push(n);
        }
        t.apply(null, r);
    }
    function r(e, r, i) {
        if ("string" != typeof e) throw "invalid module definition, module id must be defined and be a string";
        if (r === t) throw "invalid module definition, dependencies must be specified";
        if (i === t) throw "invalid module definition, definition function must be specified";
        n(r, function() {
            s[e] = i.apply(null, arguments);
        });
    }
    function i(e) {
        return !!s[e];
    }
    function o(t) {
        for (var n = e, r = t.split(/[.\/]/), i = 0; i < r.length; ++i) {
            if (!n[r[i]]) return;
            n = n[r[i]];
        }
        return n;
    }
    function a(n) {
        for (var r = 0; r < n.length; r++) {
            for (var i = e, o = n[r], a = o.split(/[.\/]/), l = 0; l < a.length - 1; ++l) i[a[l]] === t && (i[a[l]] = {}), 
            i = i[a[l]];
            i[a[a.length - 1]] = s[o];
        }
    }
    var s = {}, l = "tinymce/tableplugin/TableGrid", c = "tinymce/util/Tools", d = "tinymce/Env", u = "tinymce/tableplugin/Quirks", f = "tinymce/util/VK", p = "tinymce/tableplugin/CellSelection", m = "tinymce/dom/TreeWalker", h = "tinymce/tableplugin/Plugin", g = "tinymce/PluginManager";
    r(l, [ c, d ], function(e, t) {
        function n(e, t) {
            return parseInt(e.getAttribute(t) || 1, 10);
        }
        var r = e.each;
        return function(i, o) {
            function a() {
                var e = 0;
                R = [], r([ "thead", "tbody", "tfoot" ], function(t) {
                    var i = H.select("> " + t + " tr", o);
                    r(i, function(i, o) {
                        o += e, r(H.select("> td, > th", i), function(e, r) {
                            var i, a, s, l;
                            if (R[o]) for (;R[o][r]; ) r++;
                            for (s = n(e, "rowspan"), l = n(e, "colspan"), a = o; o + s > a; a++) for (R[a] || (R[a] = []), 
                            i = r; r + l > i; i++) R[a][i] = {
                                part: t,
                                real: a == o && i == r,
                                elm: e,
                                rowspan: s,
                                colspan: l
                            };
                        });
                    }), e += i.length;
                });
            }
            function s(e, t) {
                return e = e.cloneNode(t), e.removeAttribute("id"), e;
            }
            function l(e, t) {
                var n;
                return n = R[t], n ? n[e] : void 0;
            }
            function c(e, t, n) {
                e && (n = parseInt(n, 10), 1 === n ? e.removeAttribute(t, 1) : e.setAttribute(t, n, 1));
            }
            function d(e) {
                return e && (H.hasClass(e.elm, "mce-item-selected") || e == P);
            }
            function u() {
                var e = [];
                return r(o.rows, function(t) {
                    r(t.cells, function(n) {
                        return H.hasClass(n, "mce-item-selected") || n == P.elm ? (e.push(t), !1) : void 0;
                    });
                }), e;
            }
            function f() {
                var e = H.createRng();
                e.setStartAfter(o), e.setEndAfter(o), M.setRng(e), H.remove(o);
            }
            function p(n) {
                var o, a = {};
                return i.settings.table_clone_elements !== !1 && (a = e.makeMap((i.settings.table_clone_elements || "strong em b i span font h1 h2 h3 h4 h5 h6 p div").toUpperCase(), /[ ,]/)), 
                e.walk(n, function(e) {
                    var i;
                    return 3 == e.nodeType ? (r(H.getParents(e.parentNode, null, n).reverse(), function(e) {
                        a[e.nodeName] && (e = s(e, !1), o ? i && i.appendChild(e) : o = i = e, i = e);
                    }), i && (i.innerHTML = t.ie ? "&nbsp;" : '<br data-mce-bogus="1" />'), !1) : void 0;
                }, "childNodes"), n = s(n, !1), c(n, "rowSpan", 1), c(n, "colSpan", 1), o ? n.appendChild(o) : t.ie || (n.innerHTML = '<br data-mce-bogus="1" />'), 
                n;
            }
            function m() {
                var e = H.createRng(), t;
                return r(H.select("tr", o), function(e) {
                    0 === e.cells.length && H.remove(e);
                }), 0 === H.select("tr", o).length ? (e.setStartBefore(o), e.setEndBefore(o), M.setRng(e), 
                H.remove(o), void 0) : (r(H.select("thead,tbody,tfoot", o), function(e) {
                    0 === e.rows.length && H.remove(e);
                }), a(), t = R[Math.min(R.length - 1, A.y)], t && (M.select(t[Math.min(t.length - 1, A.x)].elm, !0), 
                M.collapse(!0)), void 0);
            }
            function h(e, t, n, r) {
                var i, o, a, s, l;
                for (i = R[t][e].elm.parentNode, a = 1; n >= a; a++) if (i = H.getNext(i, "tr")) {
                    for (o = e; o >= 0; o--) if (l = R[t + a][o].elm, l.parentNode == i) {
                        for (s = 1; r >= s; s++) H.insertAfter(p(l), l);
                        break;
                    }
                    if (-1 == o) for (s = 1; r >= s; s++) i.insertBefore(p(i.cells[0]), i.cells[0]);
                }
            }
            function g() {
                r(R, function(e, t) {
                    r(e, function(e, r) {
                        var i, o, a;
                        if (d(e) && (e = e.elm, i = n(e, "colspan"), o = n(e, "rowspan"), i > 1 || o > 1)) {
                            for (c(e, "rowSpan", 1), c(e, "colSpan", 1), a = 0; i - 1 > a; a++) H.insertAfter(p(e), e);
                            h(r, t, o - 1, i);
                        }
                    });
                });
            }
            function v(t, n, i) {
                var o, s, u, f, p, h, v, y, b, C, x;
                if (t ? (o = S(t), s = o.x, u = o.y, f = s + (n - 1), p = u + (i - 1)) : (A = B = null, 
                r(R, function(e, t) {
                    r(e, function(e, n) {
                        d(e) && (A || (A = {
                            x: n,
                            y: t
                        }), B = {
                            x: n,
                            y: t
                        });
                    });
                }), s = A.x, u = A.y, f = B.x, p = B.y), y = l(s, u), b = l(f, p), y && b && y.part == b.part) {
                    for (g(), a(), y = l(s, u).elm, c(y, "colSpan", f - s + 1), c(y, "rowSpan", p - u + 1), 
                    v = u; p >= v; v++) for (h = s; f >= h; h++) R[v] && R[v][h] && (t = R[v][h].elm, 
                    t != y && (C = e.grep(t.childNodes), r(C, function(e) {
                        y.appendChild(e);
                    }), C.length && (C = e.grep(y.childNodes), x = 0, r(C, function(e) {
                        "BR" == e.nodeName && H.getAttrib(e, "data-mce-bogus") && x++ < C.length - 1 && y.removeChild(e);
                    })), H.remove(t)));
                    m();
                }
            }
            function y(e) {
                var t, i, o, a, l, u, f, m, h;
                for (r(R, function(n, i) {
                    return r(n, function(n) {
                        return d(n) && (n = n.elm, l = n.parentNode, u = s(l, !1), t = i, e) ? !1 : void 0;
                    }), e ? !t : void 0;
                }), a = 0; a < R[0].length; a++) if (R[t][a] && (i = R[t][a].elm, i != o)) {
                    if (e) {
                        if (t > 0 && R[t - 1][a] && (m = R[t - 1][a].elm, h = n(m, "rowSpan"), h > 1)) {
                            c(m, "rowSpan", h + 1);
                            continue;
                        }
                    } else if (h = n(i, "rowspan"), h > 1) {
                        c(i, "rowSpan", h + 1);
                        continue;
                    }
                    f = p(i), c(f, "colSpan", i.colSpan), u.appendChild(f), o = i;
                }
                u.hasChildNodes() && (e ? l.parentNode.insertBefore(u, l) : H.insertAfter(u, l));
            }
            function b(e) {
                var t, i;
                r(R, function(n) {
                    return r(n, function(n, r) {
                        return d(n) && (t = r, e) ? !1 : void 0;
                    }), e ? !t : void 0;
                }), r(R, function(r, o) {
                    var a, s, l;
                    r[t] && (a = r[t].elm, a != i && (l = n(a, "colspan"), s = n(a, "rowspan"), 1 == l ? e ? (a.parentNode.insertBefore(p(a), a), 
                    h(t, o, s - 1, l)) : (H.insertAfter(p(a), a), h(t, o, s - 1, l)) : c(a, "colSpan", a.colSpan + 1), 
                    i = a));
                });
            }
            function C() {
                var t = [];
                r(R, function(i) {
                    r(i, function(i, o) {
                        d(i) && -1 === e.inArray(t, o) && (r(R, function(e) {
                            var t = e[o].elm, r;
                            r = n(t, "colSpan"), r > 1 ? c(t, "colSpan", r - 1) : H.remove(t);
                        }), t.push(o));
                    });
                }), m();
            }
            function x() {
                function e(e) {
                    var t, i, o;
                    t = H.getNext(e, "tr"), r(e.cells, function(e) {
                        var t = n(e, "rowSpan");
                        t > 1 && (c(e, "rowSpan", t - 1), i = S(e), h(i.x, i.y, 1, 1));
                    }), i = S(e.cells[0]), r(R[i.y], function(e) {
                        var t;
                        e = e.elm, e != o && (t = n(e, "rowSpan"), 1 >= t ? H.remove(e) : c(e, "rowSpan", t - 1), 
                        o = e);
                    });
                }
                var t;
                t = u(), r(t.reverse(), function(t) {
                    e(t);
                }), m();
            }
            function w() {
                var e = u();
                return H.remove(e), m(), e;
            }
            function _() {
                var e = u();
                return r(e, function(t, n) {
                    e[n] = s(t, !0);
                }), e;
            }
            function N(e, t) {
                var n = u(), i = n[t ? 0 : n.length - 1], o = i.cells.length;
                e && (r(R, function(e) {
                    var t;
                    return o = 0, r(e, function(e) {
                        e.real && (o += e.colspan), e.elm.parentNode == i && (t = 1);
                    }), t ? !1 : void 0;
                }), t || e.reverse(), r(e, function(e) {
                    var n, r = e.cells.length, a;
                    for (n = 0; r > n; n++) a = e.cells[n], c(a, "colSpan", 1), c(a, "rowSpan", 1);
                    for (n = r; o > n; n++) e.appendChild(p(e.cells[r - 1]));
                    for (n = o; r > n; n++) H.remove(e.cells[n]);
                    t ? i.parentNode.insertBefore(e, i) : H.insertAfter(e, i);
                }), H.removeClass(H.select("td.mce-item-selected,th.mce-item-selected"), "mce-item-selected"));
            }
            function S(e) {
                var t;
                return r(R, function(n, i) {
                    return r(n, function(n, r) {
                        return n.elm == e ? (t = {
                            x: r,
                            y: i
                        }, !1) : void 0;
                    }), !t;
                }), t;
            }
            function E(e) {
                A = S(e);
            }
            function k() {
                var e, t;
                return e = t = 0, r(R, function(n, i) {
                    r(n, function(n, r) {
                        var o, a;
                        d(n) && (n = R[i][r], r > e && (e = r), i > t && (t = i), n.real && (o = n.colspan - 1, 
                        a = n.rowspan - 1, o && r + o > e && (e = r + o), a && i + a > t && (t = i + a)));
                    });
                }), {
                    x: e,
                    y: t
                };
            }
            function T(e) {
                var t, n, r, i, o, a, s, l, c, d;
                if (B = S(e), A && B) {
                    for (t = Math.min(A.x, B.x), n = Math.min(A.y, B.y), r = Math.max(A.x, B.x), i = Math.max(A.y, B.y), 
                    o = r, a = i, d = n; a >= d; d++) e = R[d][t], e.real || t - (e.colspan - 1) < t && (t -= e.colspan - 1);
                    for (c = t; o >= c; c++) e = R[n][c], e.real || n - (e.rowspan - 1) < n && (n -= e.rowspan - 1);
                    for (d = n; i >= d; d++) for (c = t; r >= c; c++) e = R[d][c], e.real && (s = e.colspan - 1, 
                    l = e.rowspan - 1, s && c + s > o && (o = c + s), l && d + l > a && (a = d + l));
                    for (H.removeClass(H.select("td.mce-item-selected,th.mce-item-selected"), "mce-item-selected"), 
                    d = n; a >= d; d++) for (c = t; o >= c; c++) R[d][c] && H.addClass(R[d][c].elm, "mce-item-selected");
                }
            }
            var R, A, B, P, M = i.selection, H = M.dom;
            o = o || H.getParent(M.getStart(), "table"), a(), P = H.getParent(M.getStart(), "th,td"), 
            P && (A = S(P), B = k(), P = l(A.x, A.y)), e.extend(this, {
                deleteTable: f,
                split: g,
                merge: v,
                insertRow: y,
                insertCol: b,
                deleteCols: C,
                deleteRows: x,
                cutRows: w,
                copyRows: _,
                pasteRows: N,
                getPos: S,
                setStartCell: E,
                setEndCell: T
            });
        };
    }), r(u, [ f, d, c ], function(e, t, n) {
        function r(e, t) {
            return parseInt(e.getAttribute(t) || 1, 10);
        }
        var i = n.each;
        return function(n) {
            function o() {
                function t(t) {
                    function o(e, r) {
                        var i = e ? "previousSibling" : "nextSibling", o = n.dom.getParent(r, "tr"), s = o[i];
                        if (s) return g(n, r, s, e), t.preventDefault(), !0;
                        var d = n.dom.getParent(o, "table"), u = o.parentNode, f = u.nodeName.toLowerCase();
                        if ("tbody" === f || f === (e ? "tfoot" : "thead")) {
                            var p = a(e, d, u, "tbody");
                            if (null !== p) return l(e, p, r);
                        }
                        return c(e, o, i, d);
                    }
                    function a(e, t, r, i) {
                        var o = n.dom.select(">" + i, t), a = o.indexOf(r);
                        if (e && 0 === a || !e && a === o.length - 1) return s(e, t);
                        if (-1 === a) {
                            var l = "thead" === r.tagName.toLowerCase() ? 0 : o.length - 1;
                            return o[l];
                        }
                        return o[a + (e ? -1 : 1)];
                    }
                    function s(e, t) {
                        var r = e ? "thead" : "tfoot", i = n.dom.select(">" + r, t);
                        return 0 !== i.length ? i[0] : null;
                    }
                    function l(e, r, i) {
                        var o = d(r, e);
                        return o && g(n, i, o, e), t.preventDefault(), !0;
                    }
                    function c(e, r, i, a) {
                        var s = a[i];
                        if (s) return u(s), !0;
                        var l = n.dom.getParent(a, "td,th");
                        if (l) return o(e, l, t);
                        var c = d(r, !e);
                        return u(c), t.preventDefault(), !1;
                    }
                    function d(e, t) {
                        var r = e && e[t ? "lastChild" : "firstChild"];
                        return r && "BR" === r.nodeName ? n.dom.getParent(r, "td,th") : r;
                    }
                    function u(e) {
                        n.selection.setCursorLocation(e, 0);
                    }
                    function f() {
                        return b == e.UP || b == e.DOWN;
                    }
                    function p(e) {
                        var t = e.selection.getNode(), n = e.dom.getParent(t, "tr");
                        return null !== n;
                    }
                    function m(e) {
                        for (var t = 0, n = e; n.previousSibling; ) n = n.previousSibling, t += r(n, "colspan");
                        return t;
                    }
                    function h(e, t) {
                        var n = 0, o = 0;
                        return i(e.children, function(e, i) {
                            return n += r(e, "colspan"), o = i, n > t ? !1 : void 0;
                        }), o;
                    }
                    function g(e, t, r, i) {
                        var o = m(n.dom.getParent(t, "td,th")), a = h(r, o), s = r.childNodes[a], l = d(s, i);
                        u(l || s);
                    }
                    function v(e) {
                        var t = n.selection.getNode(), r = n.dom.getParent(t, "td,th"), i = n.dom.getParent(e, "td,th");
                        return r && r !== i && y(r, i);
                    }
                    function y(e, t) {
                        return n.dom.getParent(e, "TABLE") === n.dom.getParent(t, "TABLE");
                    }
                    var b = t.keyCode;
                    if (f() && p(n)) {
                        var C = n.selection.getNode();
                        setTimeout(function() {
                            v(C) && o(!t.shiftKey && b === e.UP, C, t);
                        }, 0);
                    }
                }
                n.on("KeyDown", function(e) {
                    t(e);
                });
            }
            function a() {
                function e(e, t) {
                    var n = t.ownerDocument, r = n.createRange(), i;
                    return r.setStartBefore(t), r.setEnd(e.endContainer, e.endOffset), i = n.createElement("body"), 
                    i.appendChild(r.cloneContents()), 0 === i.innerHTML.replace(/<(br|img|object|embed|input|textarea)[^>]*>/gi, "-").replace(/<[^>]+>/g, "").length;
                }
                n.on("KeyDown", function(t) {
                    var r, i, o = n.dom;
                    (37 == t.keyCode || 38 == t.keyCode) && (r = n.selection.getRng(), i = o.getParent(r.startContainer, "table"), 
                    i && n.getBody().firstChild == i && e(r, i) && (r = o.createRng(), r.setStartBefore(i), 
                    r.setEndBefore(i), n.selection.setRng(r), t.preventDefault()));
                });
            }
            function s() {
                n.on("KeyDown SetContent VisualAid", function() {
                    var e;
                    for (e = n.getBody().lastChild; e; e = e.previousSibling) if (3 == e.nodeType) {
                        if (e.nodeValue.length > 0) break;
                    } else if (1 == e.nodeType && !e.getAttribute("data-mce-bogus")) break;
                    e && "TABLE" == e.nodeName && (n.settings.forced_root_block ? n.dom.add(n.getBody(), n.settings.forced_root_block, null, t.ie ? "&nbsp;" : '<br data-mce-bogus="1" />') : n.dom.add(n.getBody(), "br", {
                        "data-mce-bogus": "1"
                    }));
                }), n.on("PreProcess", function(e) {
                    var t = e.node.lastChild;
                    t && ("BR" == t.nodeName || 1 == t.childNodes.length && ("BR" == t.firstChild.nodeName || " " == t.firstChild.nodeValue)) && t.previousSibling && "TABLE" == t.previousSibling.nodeName && n.dom.remove(t);
                });
            }
            function l() {
                function e(e, t, n, r) {
                    var i = 3, o = e.dom.getParent(t.startContainer, "TABLE"), a, s, l;
                    return o && (a = o.parentNode), s = t.startContainer.nodeType == i && 0 === t.startOffset && 0 === t.endOffset && r && ("TR" == n.nodeName || n == a), 
                    l = ("TD" == n.nodeName || "TH" == n.nodeName) && !r, s || l;
                }
                function t() {
                    var t = n.selection.getRng(), r = n.selection.getNode(), i = n.dom.getParent(t.startContainer, "TD,TH");
                    if (e(n, t, r, i)) {
                        i || (i = r);
                        for (var o = i.lastChild; o.lastChild; ) o = o.lastChild;
                        t.setEnd(o, o.nodeValue.length), n.selection.setRng(t);
                    }
                }
                n.on("KeyDown", function() {
                    t();
                }), n.on("MouseDown", function(e) {
                    2 != e.button && t();
                });
            }
            t.webkit && (o(), l()), t.gecko && (a(), s());
        };
    }), r(p, [ l, m, c ], function(e, t, n) {
        return function(r) {
            function i() {
                r.getBody().style.webkitUserSelect = "", c && (r.dom.removeClass(r.dom.select("td.mce-item-selected,th.mce-item-selected"), "mce-item-selected"), 
                c = !1);
            }
            var o = r.dom, a, s, l, c = !0;
            return r.on("MouseDown", function(e) {
                2 != e.button && (i(), s = o.getParent(e.target, "td,th"), l = o.getParent(s, "table"));
            }), o.bind(r.getDoc(), "mouseover", function(t) {
                var n, i, d = t.target;
                if (s && (a || d != s) && ("TD" == d.nodeName || "TH" == d.nodeName)) {
                    i = o.getParent(d, "table"), i == l && (a || (a = new e(r, i), a.setStartCell(s), 
                    r.getBody().style.webkitUserSelect = "none"), a.setEndCell(d), c = !0), n = r.selection.getSel();
                    try {
                        n.removeAllRanges ? n.removeAllRanges() : n.empty();
                    } catch (u) {}
                    t.preventDefault();
                }
            }), r.on("MouseUp", function() {
                function e(e, r) {
                    var o = new t(e, e);
                    do {
                        if (3 == e.nodeType && 0 !== n.trim(e.nodeValue).length) return r ? i.setStart(e, 0) : i.setEnd(e, e.nodeValue.length), 
                        void 0;
                        if ("BR" == e.nodeName) return r ? i.setStartBefore(e) : i.setEndBefore(e), void 0;
                    } while (e = r ? o.next() : o.prev());
                }
                var i, c = r.selection, d, u, f, p, m;
                if (s) {
                    if (a && (r.getBody().style.webkitUserSelect = ""), d = o.select("td.mce-item-selected,th.mce-item-selected"), 
                    d.length > 0) {
                        i = o.createRng(), f = d[0], m = d[d.length - 1], i.setStartBefore(f), i.setEndAfter(f), 
                        e(f, 1), u = new t(f, o.getParent(d[0], "table"));
                        do if ("TD" == f.nodeName || "TH" == f.nodeName) {
                            if (!o.hasClass(f, "mce-item-selected")) break;
                            p = f;
                        } while (f = u.next());
                        e(p), c.setRng(i);
                    }
                    r.nodeChanged(), s = a = l = null;
                }
            }), r.on("KeyUp", function() {
                i();
            }), {
                clear: i
            };
        };
    }), r(h, [ l, u, p, c, m, d, g ], function(e, t, n, r, i, o, a) {
        function s(r) {
            function i(e) {
                return e ? e.replace(/px$/, "") : "";
            }
            function a(e) {
                return /^[0-9]+$/.test(e) && (e += "px"), e;
            }
            function s(e) {
                l("left center right".split(" "), function(t) {
                    r.formatter.remove("align" + t, {}, e);
                });
            }
            function c() {
                var e = r.dom, t, n, c;
                t = r.dom.getParent(r.selection.getStart(), "table"), c = !1, n = {
                    width: i(e.getStyle(t, "width") || e.getAttrib(t, "width")),
                    height: i(e.getStyle(t, "height") || e.getAttrib(t, "height")),
                    cellspacing: e.getAttrib(t, "cellspacing"),
                    cellpadding: e.getAttrib(t, "cellpadding"),
                    border: e.getAttrib(t, "border"),
                    caption: !!e.select("caption", t)[0]
                }, l("left center right".split(" "), function(e) {
                    r.formatter.matchNode(t, "align" + e) && (n.align = e);
                }), r.windowManager.open({
                    title: "Table properties",
                    items: {
                        type: "form",
                        layout: "grid",
                        columns: 2,
                        data: n,
                        defaults: {
                            type: "textbox",
                            maxWidth: 50
                        },
                        items: [ c ? {
                            label: "Cols",
                            name: "cols",
                            disabled: !0
                        } : null, c ? {
                            label: "Rows",
                            name: "rows",
                            disabled: !0
                        } : null, {
                            label: "Width",
                            name: "width"
                        }, {
                            label: "Height",
                            name: "height"
                        }, {
                            label: "Cell spacing",
                            name: "cellspacing"
                        }, {
                            label: "Cell padding",
                            name: "cellpadding"
                        }, {
                            label: "Border",
                            name: "border"
                        }, {
                            label: "Caption",
                            name: "caption",
                            type: "checkbox"
                        }, {
                            label: "Alignment",
                            minWidth: 90,
                            name: "align",
                            type: "listbox",
                            text: "None",
                            maxWidth: null,
                            values: [ {
                                text: "None",
                                value: ""
                            }, {
                                text: "Left",
                                value: "left"
                            }, {
                                text: "Center",
                                value: "center"
                            }, {
                                text: "Right",
                                value: "right"
                            } ]
                        } ]
                    },
                    onsubmit: function() {
                        var n = this.toJSON(), i;
                        r.undoManager.transact(function() {
                            r.dom.setAttribs(t, {
                                cellspacing: n.cellspacing,
                                cellpadding: n.cellpadding,
                                border: n.border
                            }), r.dom.setStyles(t, {
                                width: a(n.width),
                                height: a(n.height)
                            }), i = e.select("caption", t)[0], i && !n.caption && e.remove(i), !i && n.caption && (i = e.create("caption"), 
                            o.ie || (i.innerHTML = '<br data-mce-bogus="1"/>'), t.insertBefore(i, t.firstChild)), 
                            s(t), n.align && r.formatter.apply("align" + n.align, {}, t), r.focus(), r.addVisual();
                        });
                    }
                });
            }
            function d(e, t) {
                r.windowManager.open({
                    title: "Merge cells",
                    body: [ {
                        label: "Cols",
                        name: "cols",
                        type: "textbox",
                        size: 10
                    }, {
                        label: "Rows",
                        name: "rows",
                        type: "textbox",
                        size: 10
                    } ],
                    onsubmit: function() {
                        var n = this.toJSON();
                        r.undoManager.transact(function() {
                            e.merge(t, n.cols, n.rows);
                        });
                    }
                });
            }
            function u() {
                var e = r.dom, t, n, o = [];
                o = r.dom.select("td.mce-item-selected,th.mce-item-selected"), t = r.dom.getParent(r.selection.getStart(), "td,th"), 
                !o.length && t && o.push(t), t = t || o[0], n = {
                    width: i(e.getStyle(t, "width") || e.getAttrib(t, "width")),
                    height: i(e.getStyle(t, "height") || e.getAttrib(t, "height")),
                    scope: e.getAttrib(t, "scope")
                }, n.type = t.nodeName.toLowerCase(), l("left center right".split(" "), function(e) {
                    r.formatter.matchNode(t, "align" + e) && (n.align = e);
                }), r.windowManager.open({
                    title: "Cell properties",
                    items: {
                        type: "form",
                        data: n,
                        layout: "grid",
                        columns: 2,
                        defaults: {
                            type: "textbox",
                            maxWidth: 50
                        },
                        items: [ {
                            label: "Width",
                            name: "width"
                        }, {
                            label: "Height",
                            name: "height"
                        }, {
                            label: "Cell type",
                            name: "type",
                            type: "listbox",
                            text: "None",
                            minWidth: 90,
                            maxWidth: null,
                            menu: [ {
                                text: "Cell",
                                value: "td"
                            }, {
                                text: "Header cell",
                                value: "th"
                            } ]
                        }, {
                            label: "Scope",
                            name: "scope",
                            type: "listbox",
                            text: "None",
                            minWidth: 90,
                            maxWidth: null,
                            menu: [ {
                                text: "None",
                                value: ""
                            }, {
                                text: "Row",
                                value: "row"
                            }, {
                                text: "Column",
                                value: "col"
                            }, {
                                text: "Row group",
                                value: "rowgroup"
                            }, {
                                text: "Column group",
                                value: "colgroup"
                            } ]
                        }, {
                            label: "Alignment",
                            name: "align",
                            type: "listbox",
                            text: "None",
                            minWidth: 90,
                            maxWidth: null,
                            values: [ {
                                text: "None",
                                value: ""
                            }, {
                                text: "Left",
                                value: "left"
                            }, {
                                text: "Center",
                                value: "center"
                            }, {
                                text: "Right",
                                value: "right"
                            } ]
                        } ]
                    },
                    onsubmit: function() {
                        var t = this.toJSON();
                        r.undoManager.transact(function() {
                            l(o, function(n) {
                                r.dom.setAttrib(n, "scope", t.scope), r.dom.setStyles(n, {
                                    width: a(t.width),
                                    height: a(t.height)
                                }), t.type && n.nodeName.toLowerCase() != t.type && (n = e.rename(n, t.type)), s(n), 
                                t.align && r.formatter.apply("align" + t.align, {}, n);
                            }), r.focus();
                        });
                    }
                });
            }
            function f() {
                var e = r.dom, t, n, o, c, d = [];
                t = r.dom.getParent(r.selection.getStart(), "table"), n = r.dom.getParent(r.selection.getStart(), "td,th"), 
                l(t.rows, function(t) {
                    l(t.cells, function(r) {
                        return e.hasClass(r, "mce-item-selected") || r == n ? (d.push(t), !1) : void 0;
                    });
                }), o = d[0], c = {
                    height: i(e.getStyle(o, "height") || e.getAttrib(o, "height")),
                    scope: e.getAttrib(o, "scope")
                }, c.type = o.parentNode.nodeName.toLowerCase(), l("left center right".split(" "), function(e) {
                    r.formatter.matchNode(o, "align" + e) && (c.align = e);
                }), r.windowManager.open({
                    title: "Row properties",
                    items: {
                        type: "form",
                        data: c,
                        columns: 2,
                        defaults: {
                            type: "textbox"
                        },
                        items: [ {
                            type: "listbox",
                            name: "type",
                            label: "Row type",
                            text: "None",
                            maxWidth: null,
                            menu: [ {
                                text: "Header",
                                value: "thead"
                            }, {
                                text: "Body",
                                value: "tbody"
                            }, {
                                text: "Footer",
                                value: "tfoot"
                            } ]
                        }, {
                            type: "listbox",
                            name: "align",
                            label: "Alignment",
                            text: "None",
                            maxWidth: null,
                            menu: [ {
                                text: "None",
                                value: ""
                            }, {
                                text: "Left",
                                value: "left"
                            }, {
                                text: "Center",
                                value: "center"
                            }, {
                                text: "Right",
                                value: "right"
                            } ]
                        }, {
                            label: "Height",
                            name: "height"
                        } ]
                    },
                    onsubmit: function() {
                        var t = this.toJSON(), n, i, o;
                        r.undoManager.transact(function() {
                            var c = t.type;
                            l(d, function(l) {
                                r.dom.setAttrib(l, "scope", t.scope), r.dom.setStyles(l, {
                                    height: a(t.height)
                                }), c != l.parentNode.nodeName.toLowerCase() && (n = e.getParent(l, "table"), i = l.parentNode, 
                                o = e.select(c, n)[0], o || (o = e.create(c), n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o)), 
                                o.appendChild(l), i.hasChildNodes() || e.remove(i)), s(l), t.align && r.formatter.apply("align" + t.align, {}, l);
                            }), r.focus();
                        });
                    }
                });
            }
            function p(e) {
                return function() {
                    r.execCommand(e);
                };
            }
            function m(e, t) {
                var n, i, a;
                for (a = "<table><tbody>", n = 0; t > n; n++) {
                    for (a += "<tr>", i = 0; e > i; i++) a += "<td>" + (o.ie ? " " : "<br>") + "</td>";
                    a += "</tr>";
                }
                a += "</tbody></table>", r.insertContent(a);
            }
            function h(e, t) {
                function n() {
                    e.disabled(!r.dom.getParent(r.selection.getStart(), t)), r.selection.selectorChanged(t, function(t) {
                        e.disabled(!t);
                    });
                }
                r.initialized ? n() : r.on("init", n);
            }
            function g() {
                h(this, "table");
            }
            function v() {
                h(this, "td,th");
            }
            function y() {
                var e = "";
                e = '<table role="presentation" class="mce-grid mce-grid-border">';
                for (var t = 0; 10 > t; t++) {
                    e += "<tr>";
                    for (var n = 0; 10 > n; n++) e += '<td><a href="#" data-mce-index="' + n + "," + t + '"></a></td>';
                    e += "</tr>";
                }
                return e += "</table>", e += '<div class="mce-text-center">0 x 0</div>';
            }
            var b, C, x = this;
            r.addMenuItem("inserttable", {
                text: "Insert table",
                icon: "table",
                context: "table",
                onhide: function() {
                    r.dom.removeClass(this.menu.items()[0].getEl().getElementsByTagName("a"), "mce-active");
                },
                menu: [ {
                    type: "container",
                    html: y(),
                    onmousemove: function(e) {
                        var t = e.target;
                        if ("A" == t.nodeName) {
                            var n = r.dom.getParent(t, "table"), i = t.getAttribute("data-mce-index");
                            if (i != this.lastPos) {
                                i = i.split(","), i[0] = parseInt(i[0], 10), i[1] = parseInt(i[1], 10);
                                for (var o = 0; 10 > o; o++) for (var a = 0; 10 > a; a++) r.dom.toggleClass(n.rows[o].childNodes[a].firstChild, "mce-active", a <= i[0] && o <= i[1]);
                                n.nextSibling.innerHTML = i[0] + 1 + " x " + (i[1] + 1), this.lastPos = i;
                            }
                        }
                    },
                    onclick: function(e) {
                        "A" == e.target.nodeName && this.lastPos && (e.preventDefault(), m(this.lastPos[0] + 1, this.lastPos[1] + 1), 
                        this.parent().cancel());
                    }
                } ]
            }), r.addMenuItem("tableprops", {
                text: "Table properties",
                context: "table",
                onPostRender: g,
                onclick: c
            }), r.addMenuItem("deletetable", {
                text: "Delete table",
                context: "table",
                onPostRender: g,
                cmd: "mceTableDelete"
            }), r.addMenuItem("cell", {
                separator: "before",
                text: "Cell",
                context: "table",
                menu: [ {
                    text: "Cell properties",
                    onclick: p("mceTableCellProps"),
                    onPostRender: v
                }, {
                    text: "Merge cells",
                    onclick: p("mceTableMergeCells"),
                    onPostRender: v
                }, {
                    text: "Split cell",
                    onclick: p("mceTableSplitCells"),
                    onPostRender: v
                } ]
            }), r.addMenuItem("row", {
                text: "Row",
                context: "table",
                menu: [ {
                    text: "Insert row before",
                    onclick: p("mceTableInsertRowBefore"),
                    onPostRender: v
                }, {
                    text: "Insert row after",
                    onclick: p("mceTableInsertRowAfter"),
                    onPostRender: v
                }, {
                    text: "Delete row",
                    onclick: p("mceTableDeleteRow"),
                    onPostRender: v
                }, {
                    text: "Row properties",
                    onclick: p("mceTableRowProps"),
                    onPostRender: v
                }, {
                    text: "-"
                }, {
                    text: "Cut row",
                    onclick: p("mceTableCutRow"),
                    onPostRender: v
                }, {
                    text: "Copy row",
                    onclick: p("mceTableCopyRow"),
                    onPostRender: v
                }, {
                    text: "Paste row before",
                    onclick: p("mceTablePasteRowBefore"),
                    onPostRender: v
                }, {
                    text: "Paste row after",
                    onclick: p("mceTablePasteRowAfter"),
                    onPostRender: v
                } ]
            }), r.addMenuItem("column", {
                text: "Column",
                context: "table",
                menu: [ {
                    text: "Insert column before",
                    onclick: p("mceTableInsertColBefore"),
                    onPostRender: v
                }, {
                    text: "Insert column after",
                    onclick: p("mceTableInsertColAfter"),
                    onPostRender: v
                }, {
                    text: "Delete column",
                    onclick: p("mceTableDeleteCol"),
                    onPostRender: v
                } ]
            });
            var w = [];
            l("inserttable tableprops deletetable | cell row column".split(" "), function(e) {
                "|" == e ? w.push({
                    text: "-"
                }) : w.push(r.menuItems[e]);
            }), r.addButton("table", {
                type: "menubutton",
                title: "Table",
                menu: w
            }), o.isIE || r.on("click", function(e) {
                e = e.target, "TABLE" === e.nodeName && (r.selection.select(e), r.nodeChanged());
            }), x.quirks = new t(r), r.on("Init", function() {
                b = r.windowManager, x.cellSelection = new n(r);
            }), l({
                mceTableSplitCells: function(e) {
                    e.split();
                },
                mceTableMergeCells: function(e) {
                    var t, n, i;
                    i = r.dom.getParent(r.selection.getStart(), "th,td"), i && (t = i.rowSpan, n = i.colSpan), 
                    r.dom.select("td.mce-item-selected,th.mce-item-selected").length ? e.merge() : d(e, i);
                },
                mceTableInsertRowBefore: function(e) {
                    e.insertRow(!0);
                },
                mceTableInsertRowAfter: function(e) {
                    e.insertRow();
                },
                mceTableInsertColBefore: function(e) {
                    e.insertCol(!0);
                },
                mceTableInsertColAfter: function(e) {
                    e.insertCol();
                },
                mceTableDeleteCol: function(e) {
                    e.deleteCols();
                },
                mceTableDeleteRow: function(e) {
                    e.deleteRows();
                },
                mceTableCutRow: function(e) {
                    C = e.cutRows();
                },
                mceTableCopyRow: function(e) {
                    C = e.copyRows();
                },
                mceTablePasteRowBefore: function(e) {
                    e.pasteRows(C, !0);
                },
                mceTablePasteRowAfter: function(e) {
                    e.pasteRows(C);
                },
                mceTableDelete: function(e) {
                    e.deleteTable();
                }
            }, function(t, n) {
                r.addCommand(n, function() {
                    var n = new e(r);
                    n && (t(n), r.execCommand("mceRepaint"), x.cellSelection.clear());
                });
            }), l({
                mceInsertTable: function() {
                    c();
                },
                mceTableRowProps: f,
                mceTableCellProps: u
            }, function(e, t) {
                r.addCommand(t, function(t, n) {
                    e(n);
                });
            });
        }
        var l = r.each;
        a.add("table", s);
    }), a([ l, u, p, h ]);
}(this);

tinymce.PluginManager.add("template", function(e) {
    function t() {
        function t(e) {
            var t = e.control.value();
            t.url ? tinymce.util.XHR.send({
                url: t.url,
                success: function(e) {
                    a = e, n.find("iframe")[0].html(e);
                }
            }) : (a = t.content, n.find("iframe")[0].html(t.content)), n.find("#description")[0].text(e.control.value().description);
        }
        var n, a, r = [];
        return e.settings.templates ? (tinymce.each(e.settings.templates, function(e) {
            r.push({
                selected: !r.length,
                text: e.title,
                value: {
                    url: e.url,
                    content: e.content,
                    description: e.description
                }
            });
        }), n = e.windowManager.open({
            title: "Insert template",
            body: [ {
                type: "listbox",
                name: "template",
                flex: 0,
                label: "Templates",
                values: r,
                onselect: t
            }, {
                type: "label",
                name: "description",
                label: "Description",
                text: " "
            }, {
                type: "iframe",
                minWidth: 600,
                minHeight: 400,
                border: 1
            } ],
            onsubmit: function() {
                i(!1, a);
            }
        }), n.find("listbox")[0].fire("select"), void 0) : (e.windowManager.alert("No templates defined"), 
        void 0);
    }
    function n(t, n) {
        function a(e, t) {
            if (e = "" + e, e.length < t) for (var n = 0; n < t - e.length; n++) e = "0" + e;
            return e;
        }
        var i = "Sun Mon Tue Wed Thu Fri Sat Sun".split(" "), r = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "), o = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), l = "January February March April May June July August September October November December".split(" ");
        return n = n || new Date(), t = t.replace("%D", "%m/%d/%Y"), t = t.replace("%r", "%I:%M:%S %p"), 
        t = t.replace("%Y", "" + n.getFullYear()), t = t.replace("%y", "" + n.getYear()), 
        t = t.replace("%m", a(n.getMonth() + 1, 2)), t = t.replace("%d", a(n.getDate(), 2)), 
        t = t.replace("%H", "" + a(n.getHours(), 2)), t = t.replace("%M", "" + a(n.getMinutes(), 2)), 
        t = t.replace("%S", "" + a(n.getSeconds(), 2)), t = t.replace("%I", "" + ((n.getHours() + 11) % 12 + 1)), 
        t = t.replace("%p", "" + (n.getHours() < 12 ? "AM" : "PM")), t = t.replace("%B", "" + e.translate(l[n.getMonth()])), 
        t = t.replace("%b", "" + e.translate(o[n.getMonth()])), t = t.replace("%A", "" + e.translate(r[n.getDay()])), 
        t = t.replace("%a", "" + e.translate(i[n.getDay()])), t = t.replace("%%", "%");
    }
    function a(t) {
        var n = e.dom, a = e.getParam("template_replace_values");
        r(n.select("*", t), function(e) {
            r(a, function(t, i) {
                n.hasClass(e, i) && "function" == typeof a[i] && a[i](e);
            });
        });
    }
    function i(t, i) {
        function o(e, t) {
            return new RegExp("\\b" + t + "\\b", "g").test(e.className);
        }
        var l, c, s = e.dom, d = e.selection.getContent();
        r(e.getParam("template_replace_values"), function(e, t) {
            "function" != typeof e && (i = i.replace(new RegExp("\\{\\$" + t + "\\}", "g"), e));
        }), l = s.create("div", null, i), c = s.select(".mceTmpl", l), c && c.length > 0 && (l = s.create("div", null), 
        l.appendChild(c[0].cloneNode(!0))), r(s.select("*", l), function(t) {
            o(t, e.getParam("template_cdate_classes", "cdate").replace(/\s+/g, "|")) && (t.innerHTML = n(e.getParam("template_cdate_format", e.getLang("template.cdate_format")))), 
            o(t, e.getParam("template_mdate_classes", "mdate").replace(/\s+/g, "|")) && (t.innerHTML = n(e.getParam("template_mdate_format", e.getLang("template.mdate_format")))), 
            o(t, e.getParam("template_selected_content_classes", "selcontent").replace(/\s+/g, "|")) && (t.innerHTML = d);
        }), a(l), e.execCommand("mceInsertContent", !1, l.innerHTML), e.addVisual();
    }
    var r = tinymce.each;
    e.addCommand("mceInsertTemplate", i), e.addButton("template", {
        title: "Insert template",
        onclick: t
    }), e.addMenuItem("template", {
        text: "Insert template",
        onclick: t,
        context: "insert"
    }), e.on("PreProcess", function(t) {
        var i = e.dom;
        r(i.select("div", t.node), function(t) {
            i.hasClass(t, "mceTmpl") && (r(i.select("*", t), function(t) {
                i.hasClass(t, e.getParam("template_mdate_classes", "mdate").replace(/\s+/g, "|")) && (t.innerHTML = n(e.getParam("template_mdate_format", e.getLang("template.mdate_format"))));
            }), a(t));
        });
    });
});

tinymce.PluginManager.add("visualblocks", function(e, t) {
    function n() {
        var t = this;
        e.on("VisualBlocks", function() {
            t.active(e.dom.hasClass(e.getBody(), "mce-visualblocks"));
        });
    }
    var i, a, o;
    window.NodeList && (e.addCommand("mceVisualBlocks", function() {
        var n, c = e.dom;
        i || (i = c.uniqueId(), n = c.create("link", {
            id: i,
            rel: "stylesheet",
            href: t + "/css/visualblocks.css"
        }), e.getDoc().getElementsByTagName("head")[0].appendChild(n)), e.on("PreviewFormats AfterPreviewFormats", function(t) {
            o && c.toggleClass(e.getBody(), "mce-visualblocks", "afterpreviewformats" == t.type);
        }), c.toggleClass(e.getBody(), "mce-visualblocks"), o = e.dom.hasClass(e.getBody(), "mce-visualblocks"), 
        a && a.active(c.hasClass(e.getBody(), "mce-visualblocks")), e.fire("VisualBlocks");
    }), e.addButton("visualblocks", {
        title: "Show blocks",
        cmd: "mceVisualBlocks",
        onPostRender: n
    }), e.addMenuItem("visualblocks", {
        text: "Show blocks",
        cmd: "mceVisualBlocks",
        onPostRender: n,
        selectable: !0,
        context: "view",
        prependToContext: !0
    }), e.on("init", function() {
        e.settings.visualblocks_default_state && e.execCommand("mceVisualBlocks", !1, null, {
            skip_focus: !0
        });
    }), e.on("remove", function() {
        e.dom.removeClass(e.getBody(), "mce-visualblocks");
    }));
});

tinymce.PluginManager.add("visualchars", function(e) {
    function t(t) {
        var n, a, o, c, s, r, l = e.getBody(), u = e.selection;
        if (i = !i, e.fire("VisualChars", {
            state: i
        }), t && (r = u.getBookmark()), i) for (a = [], tinymce.walk(l, function(e) {
            3 == e.nodeType && e.nodeValue && -1 != e.nodeValue.indexOf(" ") && a.push(e);
        }, "childNodes"), o = 0; o < a.length; o++) {
            for (c = a[o].nodeValue, c = c.replace(/(\u00a0)/g, '<span data-mce-bogus="1" class="mce-nbsp">$1</span>'), 
            s = e.dom.create("div", null, c); n = s.lastChild; ) e.dom.insertAfter(n, a[o]);
            e.dom.remove(a[o]);
        } else for (a = e.dom.select("span.mce-nbsp", l), o = a.length - 1; o >= 0; o--) e.dom.remove(a[o], 1);
        u.moveToBookmark(r);
    }
    function n() {
        var t = this;
        e.on("VisualChars", function(e) {
            t.active(e.state);
        });
    }
    var i;
    e.addCommand("mceVisualChars", t), e.addButton("visualchars", {
        title: "Show invisible characters",
        cmd: "mceVisualChars",
        onPostRender: n
    }), e.addMenuItem("visualchars", {
        text: "Show invisible characters",
        cmd: "mceVisualChars",
        onPostRender: n,
        selectable: !0,
        context: "view",
        prependToContext: !0
    }), e.on("beforegetcontent", function(e) {
        i && "raw" != e.format && !e.draft && (i = !0, t(!1));
    });
});

tinymce.PluginManager.add("wordcount", function(e) {
    function t() {
        e.theme.panel.find("#wordcount").text([ "Words: {0}", a.getCount() ]);
    }
    var n, i, a = this;
    n = e.getParam("wordcount_countregex", /[\w\u2019\x27\-]+/g), i = e.getParam("wordcount_cleanregex", /[0-9.(),;:!?%#$?\x27\x22_+=\\\/\-]*/g), 
    e.on("init", function() {
        var n = e.theme.panel && e.theme.panel.find("#statusbar")[0];
        n && window.setTimeout(function() {
            n.insert({
                type: "label",
                name: "wordcount",
                text: [ "Words: {0}", a.getCount() ],
                classes: "wordcount"
            }, 0), e.on("setcontent beforeaddundo", t), e.on("keyup", function(e) {
                32 == e.keyCode && t();
            });
        }, 0);
    }), a.getCount = function() {
        var t = e.getContent({
            format: "raw"
        }), a = 0;
        if (t) {
            t = t.replace(/\.\.\./g, " "), t = t.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " "), 
            t = t.replace(/(\w+)(&.+?;)+(\w+)/, "$1$3").replace(/&.+?;/g, " "), t = t.replace(i, "");
            var o = t.match(n);
            o && (a = o.length);
        }
        return a;
    };
});

tinymce.PluginManager.add("textcolor", function(e) {
    function t() {
        var t, n, a = [];
        for (n = e.settings.textcolor_map || [ "000000", "Black", "993300", "Burnt orange", "333300", "Dark olive", "003300", "Dark green", "003366", "Dark azure", "000080", "Navy Blue", "333399", "Indigo", "333333", "Very dark gray", "800000", "Maroon", "FF6600", "Orange", "808000", "Olive", "008000", "Green", "008080", "Teal", "0000FF", "Blue", "666699", "Grayish blue", "808080", "Gray", "FF0000", "Red", "FF9900", "Amber", "99CC00", "Yellow green", "339966", "Sea green", "33CCCC", "Turquoise", "3366FF", "Royal blue", "800080", "Purple", "999999", "Medium gray", "FF00FF", "Magenta", "FFCC00", "Gold", "FFFF00", "Yellow", "00FF00", "Lime", "00FFFF", "Aqua", "00CCFF", "Sky blue", "993366", "Brown", "C0C0C0", "Silver", "FF99CC", "Pink", "FFCC99", "Peach", "FFFF99", "Light yellow", "CCFFCC", "Pale green", "CCFFFF", "Pale cyan", "99CCFF", "Light sky blue", "CC99FF", "Plum", "FFFFFF", "White" ], 
        t = 0; t < n.length; t += 2) a.push({
            text: n[t + 1],
            color: n[t]
        });
        return a;
    }
    function n() {
        var n, a, i, r, o, l, c, s, d, u = this;
        for (n = t(), i = '<table class="mce-grid mce-grid-border mce-colorbutton-grid" role="presentation" cellspacing="0"><tbody>', 
        r = n.length - 1, o = e.settings.textcolor_rows || 5, l = e.settings.textcolor_cols || 8, 
        s = 0; o > s; s++) {
            for (i += "<tr>", c = 0; l > c; c++) d = s * l + c, d > r ? i += "<td></td>" : (a = n[d], 
            i += '<td><div id="' + u._id + "-" + d + '"' + ' data-mce-color="' + a.color + '"' + ' role="option"' + ' tabIndex="-1"' + ' style="' + (a ? "background-color: #" + a.color : "") + '"' + ' title="' + a.text + '">' + "</div>" + "</td>");
            i += "</tr>";
        }
        return i += "</tbody></table>";
    }
    function a(t) {
        var n, a = this.parent();
        (n = t.target.getAttribute("data-mce-color")) && (a.hidePanel(), n = "#" + n, a.color(n), 
        e.execCommand(a.settings.selectcmd, !1, n));
    }
    function i() {
        var t = this;
        t._color && e.execCommand(t.settings.selectcmd, !1, t._color);
    }
    e.addButton("forecolor", {
        type: "colorbutton",
        tooltip: "Text color",
        popoverAlign: "bc-tl",
        selectcmd: "ForeColor",
        panel: {
            html: n,
            onclick: a
        },
        onclick: i
    }), e.addButton("backcolor", {
        type: "colorbutton",
        tooltip: "Background color",
        popoverAlign: "bc-tl",
        selectcmd: "HiliteColor",
        panel: {
            html: n,
            onclick: a
        },
        onclick: i
    });
});

tinymce.ThemeManager.add("modern", function(e) {
    function t() {
        function t(t) {
            var i, r = [];
            if (t) return m(t.split(/[ ,]/), function(t) {
                function n() {
                    var n = e.selection;
                    "bullist" == a && n.selectorChanged("ul > li", function(e, n) {
                        for (var i, r = n.parents.length; r-- && (i = n.parents[r].nodeName, "OL" != i && "UL" != i); ) ;
                        t.active("UL" == i);
                    }), "numlist" == a && n.selectorChanged("ol > li", function(e, n) {
                        for (var i, r = n.parents.length; r-- && (i = n.parents[r].nodeName, "OL" != i && "UL" != i); ) ;
                        t.active("OL" == i);
                    }), t.settings.stateSelector && n.selectorChanged(t.settings.stateSelector, function(e) {
                        t.active(e);
                    }, !0), t.settings.disabledStateSelector && n.selectorChanged(t.settings.disabledStateSelector, function(e) {
                        t.disabled(e);
                    });
                }
                var a;
                "|" == t ? i = null : u.has(t) ? (t = {
                    type: t
                }, c.toolbar_items_size && (t.size = c.toolbar_items_size), r.push(t), i = null) : (i || (i = {
                    type: "buttongroup",
                    items: []
                }, r.push(i)), e.buttons[t] && (a = t, t = e.buttons[a], t.type = t.type || "button", 
                c.toolbar_items_size && (t.size = c.toolbar_items_size), t = u.create(t), i.items.push(t), 
                e.initialized ? n() : e.on("init", n)));
            }), n.push({
                type: "toolbar",
                layout: "flow",
                items: r
            }), !0;
        }
        for (var n = [], i = 1; 10 > i && t(c["toolbar" + i]); i++) ;
        return n.length || t(c.toolbar || h), n;
    }
    function n() {
        function t(t) {
            var n;
            return "|" == t ? {
                text: "|"
            } : n = e.menuItems[t];
        }
        function n(n) {
            var i, r, a, o, s;
            if (s = tinymce.makeMap((c.removed_menuitems || "").split(/[ ,]/)), c.menu ? (r = c.menu[n], 
            o = !0) : r = f[n], r) {
                i = {
                    text: r.title
                }, a = [], m((r.items || "").split(/[ ,]/), function(e) {
                    var n = t(e);
                    n && !s[e] && a.push(t(e));
                }), o || m(e.menuItems, function(e) {
                    e.context == n && ("before" == e.separator && a.push({
                        text: "|"
                    }), e.prependToContext ? a.unshift(e) : a.push(e), "after" == e.separator && a.push({
                        text: "|"
                    }));
                });
                for (var l = 0; l < a.length; l++) "|" == a[l].text && (0 === l || l == a.length - 1) && a.splice(l, 1);
                if (i.menu = a, !i.menu.length) return null;
            }
            return i;
        }
        var i, r = [], a = [];
        if (c.menu) for (i in c.menu) a.push(i); else for (i in f) a.push(i);
        for (var o = c.menubar ? c.menubar.split(/[ ,]/) : a, s = 0; s < o.length; s++) {
            var l = o[s];
            l = n(l), l && r.push(l);
        }
        return r;
    }
    function i(t) {
        function n(e) {
            var n = t.find(e)[0];
            n && n.focus();
        }
        e.shortcuts.add("Alt+F9", "", function() {
            n("menubar");
        }), e.shortcuts.add("Alt+F10", "", function() {
            n("toolbar");
        }), e.shortcuts.add("Alt+F11", "", function() {
            n("elementpath");
        }), t.on("cancel", function() {
            e.focus();
        });
    }
    function r(t, n) {
        function i(e) {
            return {
                width: e.clientWidth,
                height: e.clientHeight
            };
        }
        var r, a, o, s;
        r = e.getContainer(), a = e.getContentAreaContainer().firstChild, o = i(r), s = i(a), 
        t = Math.max(c.min_width || 100, t), n = Math.max(c.min_height || 100, n), t = Math.min(c.max_width || 65535, t), 
        n = Math.min(c.max_height || 65535, n), d.css(r, "width", t + (o.width - s.width)), 
        d.css(a, "width", t), d.css(a, "height", n), e.fire("ResizeEditor");
    }
    function a(t, n) {
        var i = e.getContentAreaContainer();
        l.resizeTo(i.clientWidth + t, i.clientHeight + n);
    }
    function o() {
        function r() {
            m && m.moveRel && m.visible() && !m._fixed && m.moveRel(e.getBody(), [ "tl-bl", "bl-tl" ]);
        }
        function a() {
            m && (m.show(), r(), d.addClass(e.getBody(), "mce-edit-focus"));
        }
        function o() {
            m && (m.hide(), d.removeClass(e.getBody(), "mce-edit-focus"));
        }
        function s() {
            return m ? (m.visible() || a(), void 0) : (m = l.panel = u.create({
                type: f ? "panel" : "floatpanel",
                classes: "tinymce tinymce-inline",
                layout: "flex",
                direction: "column",
                autohide: !1,
                autofix: !0,
                fixed: !!f,
                border: 1,
                items: [ c.menubar === !1 ? null : {
                    type: "menubar",
                    border: "0 0 1 0",
                    items: n()
                }, c.toolbar === !1 ? null : {
                    type: "panel",
                    name: "toolbar",
                    layout: "stack",
                    items: t()
                } ]
            }), m.renderTo(f || document.body).reflow(), i(m), a(), e.on("nodeChange", r), e.on("activate", a), 
            e.on("deactivate", o), void 0);
        }
        var m, f;
        return c.fixed_toolbar_container && (f = d.select(c.fixed_toolbar_container)[0]), 
        c.content_editable = !0, e.on("focus", s), e.on("blur", o), e.on("remove", function() {
            m && (m.remove(), m = null);
        }), {};
    }
    function s(a) {
        var o, s, m;
        return o = l.panel = u.create({
            type: "panel",
            classes: "tinymce",
            style: "visibility: hidden",
            layout: "stack",
            border: 1,
            items: [ c.menubar === !1 ? null : {
                type: "menubar",
                border: "0 0 1 0",
                items: n()
            }, c.toolbar === !1 ? null : {
                type: "panel",
                layout: "stack",
                items: t()
            }, {
                type: "panel",
                name: "iframe",
                layout: "stack",
                classes: "edit-area",
                html: "",
                border: "1 0 0 0"
            } ]
        }), c.resize !== !1 && (s = {
            type: "resizehandle",
            direction: c.resize,
            onResizeStart: function() {
                var t = e.getContentAreaContainer().firstChild;
                m = {
                    width: t.clientWidth,
                    height: t.clientHeight
                };
            },
            onResize: function(e) {
                r(m.width + e.deltaX, m.height + e.deltaY);
            }
        }), c.statusbar !== !1 && o.add({
            type: "panel",
            name: "statusbar",
            classes: "statusbar",
            layout: "flow",
            border: "1 0 0 0",
            items: [ {
                type: "elementpath"
            }, s ]
        }), o.renderBefore(a.targetNode).reflow(), c.width && tinymce.DOM.setStyle(o.getEl(), "width", c.width), 
        e.on("remove", function() {
            o.remove(), o = null;
        }), i(o), {
            iframeContainer: o.find("#iframe")[0].getEl(),
            editorContainer: o.getEl()
        };
    }
    var l = this, c = e.settings, u = tinymce.ui.Factory, m = tinymce.each, d = tinymce.DOM, f = {
        file: {
            title: "File",
            items: "newdocument"
        },
        edit: {
            title: "Edit",
            items: "undo redo | cut copy paste pastetext | selectall"
        },
        insert: {
            title: "Insert",
            items: "|"
        },
        view: {
            title: "View",
            items: "visualaid |"
        },
        format: {
            title: "Format",
            items: "bold italic underline strikethrough superscript subscript | formats | removeformat"
        },
        table: {
            title: "Table"
        },
        tools: {
            title: "Tools"
        }
    }, h = "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image";
    l.renderUI = function(t) {
        var n = c.skin !== !1 ? c.skin || "lightgray" : !1;
        return n && (tinymce.Env.documentMode <= 7 ? tinymce.DOM.loadCSS(tinymce.baseURL + "/skins/" + n + "/skin.ie7.min.css") : tinymce.DOM.loadCSS(tinymce.baseURL + "/skins/" + n + "/skin.min.css"), 
        e.contentCSS.push(tinymce.baseURL + "/skins/" + n + "/content" + (e.inline ? ".inline" : "") + ".min.css")), 
        e.on("ProgressState", function(e) {
            l.throbber = l.throbber || new tinymce.ui.Throbber(l.panel.getEl("body")), e.state ? l.throbber.show(e.time) : l.throbber.hide();
        }), c.inline ? o(t) : s(t);
    }, l.resizeTo = r, l.resizeBy = a;
});