(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (Fk7d) {
        if (!Fk7d || !Fk7d.length) return null;
        var bcq4u = window;
        for (var a = Fk7d.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; bcq4u = bcq4u[a[i]] = bcq4u[a[i]] || {}, i++);
        return bcq4u
    };
    NEJ.Q = function (bK8C, Fk7d) {
        bK8C = bK8C || NEJ.O;
        var bt8l = Fk7d.split(".");
        for (var i = 0, l = bt8l.length; i < l; i++) {
            bK8C = bK8C[bt8l[i]];
            if (!bK8C) break
        }
        return bK8C
    };
    NEJ.C = function () {
        var bzC0x = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bzE0x = function (C7v, bz8r) {
            for (var x in bz8r)
                if (C7v == bz8r[x]) return x;
            return null
        };
        var biC6w = {
                cv8n: 0,
                bm8e: 1,
                bB8t: 2,
                bV8N: 3,
                bJ8B: 4,
                ff9W: 5,
                ko1x: 6,
                eF9w: 7
            },
            wC4G = {
                cD8v: 0,
                bn8f: 1,
                bG8y: 2,
                ch8Z: 3,
                bR8J: 4,
                gT0x: 5,
                lw1x: 6,
                gq0x: 7
            };
        return function () {
            var fV9M = function () {
                this.bAu1x();
                return this.cv8n.apply(this, arguments)
            };
            fV9M.prototype.bAu1x = NEJ.F;
            fV9M.prototype.cv8n = NEJ.F;
            fV9M.N7G = function (Eg6a, bBk1x) {
                if (bzC0x(Eg6a)) return;
                if (bBk1x == null || !!bBk1x) NEJ.X(this, Eg6a, bzC0x);
                this.cDS4W = Eg6a;
                this.cr8j = Eg6a.prototype;
                var bH8z = function () {};
                bH8z.prototype = Eg6a.prototype;
                this.prototype = new bH8z;
                var Ha7T = this.prototype;
                Ha7T.constructor = this;
                var cl8d;
                for (var x in biC6w) {
                    cl8d = bzE0x(biC6w[x], wC4G);
                    if (!cl8d || !this.cr8j[x]) continue;
                    Ha7T[x] = function (W7P) {
                        return function () {
                            this[W7P].apply(this, arguments)
                        }
                    }(cl8d)
                }
                var Is8k = {};
                for (var x in wC4G) {
                    cl8d = bzE0x(wC4G[x], biC6w);
                    if (!cl8d || !this.cr8j[cl8d]) continue;
                    Is8k[cl8d] = Eg6a;
                    Ha7T[x] = function (W7P) {
                        return function () {
                            var m7f, bH8z = this.bue9V[W7P],
                                bgh5m = bH8z.prototype[W7P];
                            this.bue9V[W7P] = bH8z.cDS4W || Eg6a;
                            if (!!bgh5m) m7f = bgh5m.apply(this, arguments);
                            this.bue9V[W7P] = Eg6a;
                            return m7f
                        }
                    }(cl8d)
                }
                Ha7T.bAu1x = function () {
                    this.bue9V = NEJ.X({}, Is8k)
                };
                Ha7T.cLL6F = Ha7T.cD8v;
                return Ha7T
            };
            return fV9M
        }
    }();
    NEJ.X = function (gE0x, bT8L, ed9U) {
        if (!gE0x || !bT8L) return gE0x;
        ed9U = ed9U || NEJ.F;
        for (var x in bT8L) {
            if (bT8L.hasOwnProperty(x) && !ed9U(bT8L[x], x)) gE0x[x] = bT8L[x]
        }
        return gE0x
    };
    NEJ.EX = function (gE0x, bT8L) {
        if (!gE0x || !bT8L) return gE0x;
        for (var x in gE0x) {
            if (gE0x.hasOwnProperty(x) && bT8L[x] != null) gE0x[x] = bT8L[x]
        }
        return gE0x
    };
    var JR8J = Function.prototype;
    JR8J.eL9C = function (lK1x, xF4J) {
        var f = NEJ.F,
            xF4J = xF4J || f,
            lK1x = lK1x || f,
            dw9n = this;
        return function () {
            var d7e = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            lK1x(d7e);
            if (!d7e.stopped) {
                d7e.value = dw9n.apply(this, d7e.args);
                xF4J(d7e)
            }
            return d7e.value
        }
    };
    JR8J.f7c = function () {
        var bh8Z = arguments,
            gE0x = arguments[0],
            bmZ7S = this;
        return function () {
            var uy3x = NEJ.R.slice.call(bh8Z, 1);
            NEJ.R.push.apply(uy3x, arguments);
            return bmZ7S.apply(gE0x || window, uy3x)
        }
    };
    JR8J.ex9o = function () {
        var bh8Z = arguments,
            gE0x = NEJ.R.shift.call(bh8Z),
            bmZ7S = this;
        return function () {
            NEJ.R.push.apply(arguments, bh8Z);
            return bmZ7S.apply(gE0x || window, arguments)
        }
    };
    var JR8J = String.prototype;
    if (!JR8J.trim) {
        JR8J.trim = function () {
            var dh9Y = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(dh9Y, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        O7H = c7f("nej.p"),
        wj4n = window.navigator.platform,
        wu4y = window.navigator.userAgent;
    var lF1x = {
        mac: wj4n,
        win: wj4n,
        linux: wj4n,
        ipad: wu4y,
        ipod: wu4y,
        iphone: wj4n,
        android: wu4y
    };
    O7H.Ku8m = lF1x;
    for (var x in lF1x) lF1x[x] = (new RegExp(x, "i")).test(lF1x[x]);
    lF1x.ios = lF1x.ipad || lF1x.iphone || lF1x.ipod;
    lF1x.tablet = lF1x.ipad;
    lF1x.desktop = lF1x.mac || lF1x.win || lF1x.linux && !lF1x.android;
    var iD0x = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    O7H.ds9j = iD0x;
    if (/msie\s+(.*?);/i.test(wu4y) || /trident\/.+rv:([\d\.]+)/i.test(wu4y)) {
        iD0x.engine = "trident";
        iD0x.browser = "ie";
        iD0x.version = RegExp.$1;
        iD0x.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var nc1x = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        iD0x.release = nc1x[document.documentMode] || nc1x[parseInt(iD0x.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(wu4y)) {
        iD0x.engine = "webkit";
        iD0x.release = RegExp.$1 || "";
        iD0x.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(wu4y)) {
        iD0x.engine = "gecko";
        iD0x.release = RegExp.$1 || "";
        iD0x.browser = "firefox";
        iD0x.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(wu4y)) iD0x.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(wu4y)) {
        iD0x.engine = "presto";
        iD0x.release = RegExp.$1 || "";
        iD0x.browser = "opera";
        iD0x.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(wu4y)) iD0x.version = RegExp.$1 || ""
    }
    if (iD0x.browser == "unknow") {
        var nc1x = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = nc1x.length, W7P; i < l; i++) {
            W7P = nc1x[i] == "safari" ? "version" : nc1x[i];
            if ((new RegExp(W7P + "/(.*?)(?=\\s|$)", "i")).test(wu4y)) {
                iD0x.browser = nc1x[i];
                iD0x.version = RegExp.$1.trim();
                break
            }
        }
    }
    O7H.bCe1x = {};
    var bfY5d = iD0x.engine != "trident";
    O7H.nG2x = {
        gecko: iD0x.engine != "gecko",
        webkit: iD0x.engine != "webkit",
        presto: iD0x.engine != "presto",
        trident0: bfY5d || iD0x.release > "2.0",
        trident1: bfY5d || iD0x.release < "6.0",
        trident2: bfY5d || iD0x.release > "3.0",
        trident: bfY5d || iD0x.release >= "6.0"
    }
})();
(function () {
    var iB0x = NEJ.P("nej.c"),
        R7K = {};
    var bwt0x = function () {
        var dh9Y = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (Y7R) {
            Y7R = Y7R || "";
            if (dh9Y.test(Y7R)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Ok0x = function () {
        var bCn1x = function (j7c, bz8r) {
            if (!j7c || !j7c.length) return;
            for (var i = 0, l = j7c.length, jZ1x; i < l; i++) {
                jZ1x = j7c[i];
                if (jZ1x.indexOf("://") > 0) bz8r[bwt0x(jZ1x)] = jZ1x
            }
        };
        var bi8a = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function (bT8L) {
            iB0x.Nu9l("root", bT8L.root || "/res/");
            var bnz7s, gj0x = iB0x.B7u("root");
            for (var x in bi8a) {
                bnz7s = bi8a[x];
                iB0x.Nu9l(x, bT8L[bnz7s.name] || gj0x + bnz7s.dft)
            }
            var Bo5t = bT8L.p_csrf;
            if (Bo5t == !0) {
                Bo5t = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            iB0x.Nu9l("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, Bo5t));
            R7K.frames = {};
            bCn1x(bT8L.p_frame, R7K.frames);
            R7K.flashs = {};
            bCn1x(bT8L.p_flash, R7K.flashs)
        }
    }();
    iB0x.Nu9l = function (L7E, C7v) {
        R7K[L7E] = C7v
    };
    iB0x.B7u = function (L7E) {
        return R7K[L7E]
    };
    iB0x.ckp0x = function (Y7R) {
        var sk3x = bwt0x(Y7R);
        return R7K.frames[sk3x] || sk3x + "/res/nej_proxy_frame.html"
    };
    iB0x.cwc2x = function (Y7R) {
        return R7K.flashs[bwt0x(Y7R)]
    };
    Ok0x(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c7f = NEJ.P,
        O7H = c7f("nej.p"),
        iB0x = c7f("nej.c"),
        bT8L = window.NEJ_CONF || NEJ.O;
    if (O7H.nG2x.trident) return;
    iB0x.Nu9l("storage.swf", bT8L.storage || iB0x.B7u("root") + "nej_storage.swf");
    if (O7H.ds9j.release < "4.0") {
        iB0x.Nu9l("blank.png", bT8L.blank || iB0x.B7u("root") + "nej_blank.gif")
    }
    var j7c = bT8L.xdr,
        gM0x = /^(https?:\/\/.*?)(?=\/|$)/i,
        kw1x = /[\/?=&]/i;
    var bDy1x = function (Y7R) {
        return (gM0x.test(Y7R) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!j7c && !!j7c.length)
        for (var i = j7c.length - 1, Y7R, L7E; i >= 0; i--) {
            Y7R = j7c[i];
            L7E = bDy1x(Y7R);
            if (!!L7E) iB0x.Nu9l(L7E, Y7R)
        }
    iB0x.cLx6r = function (Y7R) {
        var L7E = bDy1x(Y7R);
        if (!L7E) {
            if (kw1x.test(Y7R)) {
                L7E = location.protocol + "//" + location.host
            } else if (Y7R.indexOf("://") < 0) {
                L7E = location.protocol + "//" + Y7R
            } else {
                L7E = Y7R
            }
        }
        return iB0x.B7u(L7E) || L7E + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c7f = NEJ.P,
        iB0x = c7f("nej.c"),
        O7H = c7f("nej.g"),
        gW0x = +(new Date);
    O7H.cLt6n = 1e4 - gW0x;
    O7H.bqc8U = 10001 - gW0x;
    O7H.cLs6m = 10002 - gW0x;
    O7H.bDZ1x = 10003 - gW0x;
    O7H.caO7H = 10004 - gW0x;
    O7H.cLm6g = 10005 - gW0x;
    O7H.bza0x = 10006 - gW0x;
    O7H.cgj9a = 10007 - gW0x;
    O7H.yH5M = "Content-Type";
    O7H.cLh6b = "text/plain";
    O7H.Ht7m = "multipart/form-data";
    O7H.clg0x = "application/x-www-form-urlencoded";
    O7H.bkK6E = iB0x.B7u("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c7f = NEJ.P,
        fD9u = NEJ.R,
        O7H = c7f("nej.p"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        bg8Y = c7f("nej.h");
    var kB1x = O7H.ds9j.prefix,
        bFV2x = O7H.bCe1x,
        cnr0x = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})"
        },
        cqh1x = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        },
        Pg0x = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var Ok0x = function () {
        var tZ3x = bg8Y.bHb2x();
        bFV2x.css3d = !!tZ3x && tZ3x.m41 != null;
        var dh9Y = /-([a-z])/g;
        for (var x in Pg0x) {
            Pg0x[bIo2x(x)] = Pg0x[x]
        }
    };
    var bIo2x = function () {
        var dh9Y = /-([a-z])/g;
        return function (W7P) {
            W7P = W7P || "";
            return W7P.replace(dh9Y, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bIE3x = function (W7P) {
        return (!bFV2x.css3d ? cnr0x : cqh1x)[W7P]
    };
    var bIF3x = function () {
        var dh9Y = /\s+/;
        return function (fV9M) {
            fV9M = (fV9M || "").trim();
            return !!fV9M ? fV9M.split(dh9Y) : null
        }
    }();
    var beN5S = function (G7z, u7n, fV9M) {
        G7z = a6g.B7u(G7z);
        if (!G7z) return;
        k7d.bd7W(bIF3x(fV9M), function (eg9X) {
            G7z.classList[u7n](eg9X)
        })
    };
    bg8Y.Kz8r = function (j7c) {
        return fD9u.slice.call(j7c, 0)
    };
    bg8Y.biR6L = function (G7z) {
        return bg8Y.Kz8r(G7z.children)
    };
    bg8Y.biX6R = function (G7z, fV9M) {
        return bg8Y.Kz8r(G7z.getElementsByClassName(fV9M))
    };
    bg8Y.bje6Y = function (G7z, Mm9d) {
        beN5S(G7z, "add", Mm9d)
    };
    bg8Y.bkj6d = function (G7z, MB9s) {
        beN5S(G7z, "remove", MB9s)
    };
    bg8Y.PC0x = function (G7z, MB9s, Mm9d) {
        beN5S(G7z, "remove", MB9s);
        beN5S(G7z, "add", Mm9d)
    };
    bg8Y.bkU6O = function (G7z, fV9M) {
        G7z = a6g.B7u(G7z);
        if (!G7z) return !1;
        var j7c = G7z.classList;
        if (!j7c || !j7c.length) return !1;
        return k7d.dm9d(bIF3x(fV9M), function (eg9X) {
            return j7c.contains(eg9X)
        }) >= 0
    };
    bg8Y.blF6z = function (G7z, eg9X) {};
    bg8Y.bmc7V = function (G7z) {};
    bg8Y.bmD7w = function (gr0x, ou2x) {
        gr0x.selectionEnd = ou2x.end || 0;
        gr0x.selectionStart = ou2x.start || 0;
        gr0x.focus()
    };
    bg8Y.box7q = function (gr0x) {
        return {
            end: gr0x.selectionEnd,
            start: gr0x.selectionStart
        }
    };
    bg8Y.boz8r = function () {
        var Fh7a = function (eg9X, d7e) {
            var G7z = h7a.X7Q(d7e);
            if (!G7z.value) a6g.y7r(G7z, eg9X)
        };
        var Ji8a = function (eg9X, d7e) {
            a6g.w7p(h7a.X7Q(d7e), eg9X)
        };
        return function (G7z, fu9l, eg9X) {
            if (fu9l == 1) {
                h7a.s7l(G7z, "blur", Fh7a.f7c(null, eg9X))
            }
            if (fu9l == 1 || fu9l == -1) {
                h7a.s7l(G7z, "focus", Ji8a.f7c(null, eg9X))
            }
        }
    }();
    bg8Y.buq9h = function (H7A) {
        return (new XMLSerializer).serializeToString(H7A) || ""
    };
    bg8Y.buM9D = function (BG6A) {
        var gj0x = (new DOMParser).parseFromString(BG6A, "text/xml").documentElement;
        return gj0x.nodeName == "parsererror" ? null : gj0x
    };
    bg8Y.bvl9c = function (G7z) {};
    bg8Y.ox2x = function (G7z) {
        return null
    };
    bg8Y.bxx0x = function (G7z) {
        return null
    };
    bg8Y.bxG0x = function (dR9I) {};
    bg8Y.byR0x = function () {
        var bh8Z = bg8Y.Kz8r(arguments);
        bh8Z[0] = a6g.B7u(bh8Z[0]);
        if (!bh8Z[0]) return null;
        bh8Z[1] = (bh8Z[1] || "").toLowerCase();
        if (!bh8Z[1]) return null;
        return bh8Z
    };
    bg8Y.Ct6n = function () {
        var xa4e = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            },
            jr0x = {
                transitionend: "TransitionEnd",
                animationend: "AnimationEnd",
                animationstart: "AnimationStart",
                animationiteration: "AnimationIteration"
            };
        var cEq4u = function (u7n) {
            return (kB1x.evt || kB1x.pro) + u7n
        };
        return function () {
            var bh8Z = bg8Y.byR0x.apply(bg8Y, arguments);
            if (!bh8Z) return;
            var beb4f = jr0x[bh8Z[1]],
                bdZ4d = xa4e[bh8Z[1]];
            if (!!beb4f) {
                bh8Z[4] = bh8Z[1];
                bh8Z[1] = cEq4u(beb4f)
            } else if (!!bdZ4d) {
                var W7P = "on" + bh8Z[1];
                if (!(W7P in bh8Z[0])) {
                    bh8Z[4] = bh8Z[1];
                    bh8Z[1] = bdZ4d
                }
            }
            return bh8Z
        }
    }();
    bg8Y.biD6x = function () {
        var bh8Z = arguments;
        bh8Z[0].addEventListener(bh8Z[1], bh8Z[2], !!bh8Z[3])
    };
    bg8Y.bdY4c = function () {
        var bh8Z = arguments;
        bh8Z[0].removeEventListener(bh8Z[1], bh8Z[2], !!bh8Z[3])
    };
    bg8Y.biP6J = function (G7z, u7n, e7d) {
        var d7e = document.createEvent("Event");
        d7e.initEvent(u7n, !0, !0);
        NEJ.X(d7e, e7d);
        G7z.dispatchEvent(d7e)
    };
    bg8Y.bHb2x = function () {
        var gM0x = /\((.*?)\)/,
            kw1x = /\s*,\s*/,
            j7c = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var bdN4R = function (tZ3x) {
            var iv0x = {};
            if (gM0x.test(tZ3x || "")) {
                k7d.bd7W(RegExp.$1.split(kw1x), function (C7v, r7k) {
                    iv0x[j7c[r7k]] = C7v || ""
                })
            }
            return iv0x
        };
        return function (tZ3x) {
            if (!!window.CSSMatrix) return new CSSMatrix(tZ3x);
            var W7P = kB1x.clz + "CSSMatrix";
            if (!!window[W7P]) return new window[W7P](tZ3x || "");
            return bdN4R(tZ3x)
        }
    }();
    bg8Y.bIN3x = function () {
        var dh9Y = /\{(.*?)\}/g;
        return function (W7P, bz8r) {
            bz8r = bz8r || o;
            var ph2x = bIE3x(W7P);
            return !ph2x ? "" : ph2x.replace(dh9Y, function ($1, $2) {
                var bt8l = $2.split("|");
                return bz8r[bt8l[0]] || bt8l[1] || "0"
            })
        }
    }();
    bg8Y.bkF6z = function (G7z, W7P, C7v) {
        G7z.style[bg8Y.bIO3x(W7P)] = C7v
    };
    bg8Y.bIO3x = function () {
        var dh9Y = /^[a-z]/,
            bkO6I = kB1x.css;
        var cEO4S = function (W7P) {
            return W7P.replace(dh9Y, function ($1) {
                return bkO6I + $1.toUpperCase()
            })
        };
        return function (W7P) {
            W7P = bIo2x(W7P);
            var cEY4c = bg8Y.bXx7q(W7P, Pg0x);
            return cEY4c ? cEO4S(W7P) : W7P
        }
    }();
    bg8Y.bXx7q = function () {
        var dh9Y = /^([a-z]+?)[A-Z]/;
        return function (W7P, bz8r) {
            if (!bz8r[W7P]) {
                if (dh9Y.test(W7P)) W7P = RegExp.$1
            }
            return !!bz8r[W7P]
        }
    }();
    bg8Y.bXy7r = function () {
        var dh9Y = /\$<(.*?)>/gi,
            bkO6I = "-" + kB1x.css.toLowerCase() + "-";
        return function (kI1x) {
            return kI1x.replace(dh9Y, function ($1, $2) {
                var fA9r = $2,
                    bt8l = fA9r.split("|"),
                    ph2x = bIE3x(bt8l[0]);
                if (!!ph2x) {
                    return bg8Y.bIN3x(bt8l[0], k7d.hf0x(bt8l[1]))
                }
                return !bg8Y.bXB7u(fA9r, Pg0x) ? fA9r : bkO6I + fA9r
            })
        }
    }();
    bg8Y.bXB7u = function (W7P, bz8r) {
        return !!bz8r[W7P]
    };
    bg8Y.bns7l = function (cj8b, kI1x) {
        cj8b.textContent = kI1x
    };
    bg8Y.bol7e = function (cj8b, kI1x) {
        var yI5N = cj8b.sheet,
            bs8k = yI5N.cssRules.length;
        yI5N.insertRule(kI1x, bs8k);
        return yI5N.cssRules[bs8k]
    };
    bg8Y.cKo5t = function (G7z, e7d) {};
    bg8Y.bdo4s = function (bdj4n) {
        return (bdj4n || "").toLowerCase() != "transparent"
    };
    bg8Y.bXC7v = function (G7z) {};
    bg8Y.bsh9Y = function (G7z, W7P) {
        if (!!G7z.getAttribute) return G7z.getAttribute(W7P);
        return ""
    };
    bg8Y.bdh4l = function (eV9M) {
        a6g.cO8G(eV9M)
    };
    Ok0x()
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        O7H = c7f("nej.p"),
        bg8Y = c7f("nej.h");
    if (O7H.nG2x.trident0) return;
    var gW0x = +(new Date);
    R7K = {};
    bg8Y.blF6z = bg8Y.blF6z.eL9C(function (d7e) {
        d7e.stopped = !0;
        var bh8Z = d7e.args,
            D7w = a6g.lQ1x(bh8Z[0]),
            L7E = "hover-" + D7w;
        if (!D7w || !!R7K[L7E]) return;
        R7K[L7E] = !0;
        h7a.s7l(D7w, "mouseenter", a6g.w7p.f7c(a6g, D7w, bh8Z[1]));
        h7a.s7l(D7w, "mouseleave", a6g.y7r.f7c(a6g, D7w, bh8Z[1]))
    });
    bg8Y.bmc7V = function () {
        var cKm5r = function () {};
        return bg8Y.bmc7V.eL9C(function (d7e) {
            d7e.stopped = !0;
            var G7z = d7e.args[0],
                D7w = "fixed-" + a6g.lQ1x(G7z);
            if (!!R7K[D7w]) return;
            var bi8a = {};
            R7K[D7w] = bi8a
        })
    }();
    bg8Y.bvl9c = bg8Y.bvl9c.eL9C(function (d7e) {
        d7e.stopped = !0;
        var G7z = d7e.args[0],
            cj8b = G7z.style,
            bJe3x = a6g.oJ2x();
        cj8b.width = bJe3x.scrollWidth + "px";
        cj8b.height = bJe3x.scrollHeight + "px"
    });
    bg8Y.ox2x = bg8Y.ox2x.eL9C(function (d7e) {
        d7e.stopped = !0;
        var G7z = d7e.args[0],
            lz1x = R7K[G7z.msk];
        if (!lz1x) {
            G7z.msk = gW0x++;
            lz1x = a6g.dk9b("iframe");
            lz1x.style.position = "absolute";
            R7K[G7z.msk] = lz1x
        }
        d7e.value = lz1x;
        var cj8b = lz1x.style;
        cj8b.top = (parseInt(a6g.di9Z(G7z, "top")) || 0) + "px";
        cj8b.left = (parseInt(a6g.di9Z(G7z, "left")) || 0) + "px";
        cj8b.width = G7z.offsetWidth + "px";
        cj8b.height = G7z.offsetHeight + "px";
        G7z.insertAdjacentElement("beforeBegin", lz1x)
    });
    bg8Y.bxx0x = bg8Y.bxx0x.eL9C(function (d7e) {
        d7e.stopped = !0;
        var lz1x = R7K[d7e.args[0].msk];
        if (!!lz1x) a6g.mO1x(lz1x)
    })
})();
(function () {
    var c7f = NEJ.P,
        O7H = c7f("nej.p"),
        a6g = c7f("nej.e"),
        bg8Y = c7f("nej.h");
    if (O7H.nG2x.trident1) return;
    bg8Y.Ct6n = function () {
        var xa4e = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return bg8Y.Ct6n.eL9C(function (d7e) {
            var bh8Z = bg8Y.byR0x.apply(bg8Y, d7e.args);
            if (!bh8Z) {
                d7e.stopped = !0;
                return
            }
            var u7n = xa4e[bh8Z[1]];
            if (!!u7n && ("on" + u7n).toLowerCase() in bh8Z[0]) {
                bh8Z[4] = bh8Z[1];
                bh8Z[1] = u7n;
                d7e.stopped = !0;
                d7e.value = bh8Z
            }
        })
    }();
    bg8Y.bdo4s = function (bdj4n) {
        return !0
    };
    bg8Y.bdh4l = bg8Y.bdh4l.eL9C(function (d7e) {
        d7e.stopped = !0;
        var eV9M = d7e.args[0];
        a6g.ba7T(eV9M, "display", "none");
        try {
            eV9M.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        O7H = c7f("nej.p"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        bg8Y = c7f("nej.h"),
        bxM0x = {};
    if (O7H.nG2x.trident) return;
    bg8Y.Kz8r = bg8Y.Kz8r.eL9C(function (d7e) {
        d7e.stopped = !0;
        var j7c = d7e.args[0];
        if (!j7c) {
            d7e.value = null;
            return
        }
        var r7k = 0,
            m7f = [];
        while (!!j7c[r7k]) {
            m7f.push(j7c[r7k++])
        }
        d7e.value = m7f
    });
    bg8Y.biR6L = bg8Y.biR6L.eL9C(function (d7e) {
        d7e.stopped = !0;
        var bt8l = [];
        k7d.bd7W(d7e.args[0].childNodes, function (g7b) {
            if (g7b.nodeType == 1) bt8l.push(g7b)
        });
        d7e.value = bt8l
    });
    bg8Y.biX6R = bg8Y.biX6R.eL9C(function (d7e) {
        var G7z = d7e.args[0];
        if (!!G7z.getElementsByClassName) return;
        d7e.stopped = !0;
        var m7f = [],
            Ri1x = new RegExp("(\\s|^)(?:" + d7e.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k7d.bd7W(G7z.getElementsByTagName("*"), function (g7b) {
            if (Ri1x.test(g7b.className)) m7f.push(g7b)
        });
        d7e.value = m7f
    });
    bg8Y.bmD7w = bg8Y.bmD7w.eL9C(function (d7e) {
        var gr0x = d7e.args[0],
            ou2x = d7e.args[1];
        if (gr0x.selectionStart == null) {
            d7e.stopped = !0;
            var de8W = gr0x.createTextRange();
            de8W.collapse(!0);
            de8W.moveStart("character", ou2x.start);
            de8W.moveEnd("character", ou2x.end - ou2x.start);
            de8W.select();
            gr0x.focus()
        }
    });
    bg8Y.box7q = bg8Y.box7q.eL9C(function (d7e) {
        var gr0x = d7e.args[0];
        gr0x.focus();
        if (gr0x.selectionStart == null) {
            d7e.stopped = !0;
            var bJf3x = document.selection.createRange();
            var bJg3x = gr0x.createTextRange();
            bJg3x.moveToBookmark(bJf3x.getBookmark());
            var bgX5c = gr0x.createTextRange();
            bgX5c.collapse(!0);
            bgX5c.setEndPoint("EndToStart", bJg3x);
            var hD0x = bgX5c.text.length;
            d7e.value = {
                start: hD0x,
                end: hD0x + bJf3x.text.length
            }
        }
    });
    bg8Y.buq9h = bg8Y.buq9h.eL9C(function (d7e) {
        if (!!window.XMLSerializer) return;
        d7e.stopped = !0;
        var G7z = d7e.args[0];
        d7e.value = G7z.xml != null ? G7z.xml : G7z.outHTML
    });
    bg8Y.buM9D = function () {
        var Ro1x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bYD7w = function () {
            try {
                for (var i = 0, l = Ro1x.length; i < l; i++) return new ActiveXObject(Ro1x[i])
            } catch (ex) {
                return null
            }
        };
        return bg8Y.buM9D.eL9C(function (d7e) {
            if (!!window.DOMParser) return;
            d7e.stopped = !0;
            var oI2x = bYD7w();
            if (!!oI2x && oI2x.loadXML(d7e.args[0]) && !oI2x.parseError.errorCode) d7e.value = oI2x.documentElement
        })
    }();
    bg8Y.Ct6n = function () {
        var jr0x = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in jr0x) bxM0x[jr0x[x]] = !0;
        var bYP7I = function (G7z, u7n) {
            if ("on" + u7n in G7z) return null;
            return jr0x[u7n] || ""
        };
        var bYT7M = function (u7n, dw9n) {
            var cC8u = dw9n;
            switch (u7n) {
                case "readystatechange":
                    cC8u = function (d7e) {
                        var G7z = h7a.X7Q(d7e) || this;
                        if (G7z.readyState == "loaded" || G7z.readyState == "complete") {
                            d7e.target = G7z;
                            dw9n.call(G7z, d7e)
                        }
                    };
                    break;
                case "propertychange":
                    cC8u = function (d7e) {
                        var G7z = h7a.X7Q(d7e) || this;
                        if ("value" in G7z && d7e.propertyName == "value") {
                            d7e.target = G7z;
                            dw9n.call(G7z, d7e)
                        }
                    };
                    break
            }
            return cC8u
        };
        return bg8Y.Ct6n.eL9C(function (d7e) {
            var bh8Z = bg8Y.byR0x.apply(bg8Y, d7e.args);
            if (!bh8Z) {
                d7e.stopped = !0;
                return
            }
            var u7n = bYP7I(bh8Z[0], bh8Z[1]);
            if (!!u7n) {
                d7e.stopped = !0;
                bh8Z[4] = bh8Z[1];
                bh8Z[1] = u7n;
                if (!!bh8Z[2]) {
                    bh8Z[5] = bh8Z[2];
                    bh8Z[2] = bYT7M(bh8Z[1], bh8Z[2])
                }
                d7e.value = bh8Z
            }
        }, function (d7e) {
            var bh8Z = d7e.value;
            if (!bh8Z[0] || !k7d.gO0x(bh8Z[2])) return;
            if (!k7d.gO0x(bh8Z[5])) bh8Z[5] = bh8Z[2];
            bh8Z[2] = bh8Z[2].f7c(bh8Z[0])
        })
    }();
    bg8Y.biD6x = bg8Y.biD6x.eL9C(function (d7e) {
        var bh8Z = d7e.args;
        if (!!bxM0x[bh8Z[1]] || !document.addEventListener) {
            d7e.stopped = !0;
            bh8Z[0].attachEvent("on" + bh8Z[1], bh8Z[2])
        }
    });
    bg8Y.bdY4c = bg8Y.bdY4c.eL9C(function (d7e) {
        var bh8Z = d7e.args;
        if (!!bxM0x[bh8Z[1]] || !document.removeEventListener) {
            d7e.stopped = !0;
            bh8Z[0].detachEvent("on" + bh8Z[1], bh8Z[2])
        }
    });
    bg8Y.biP6J = bg8Y.biP6J.eL9C(function (d7e) {
        if (!document.createEvent) {
            d7e.stopped = !0;
            var bh8Z = d7e.args,
                bJP3x = document.createEventObject();
            NEJ.X(bJP3x, bh8Z[2]);
            try {
                bh8Z[0].fireEvent("on" + bh8Z[1], bJP3x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    bg8Y.bkF6z = bg8Y.bkF6z.eL9C(function (d7e) {
        var bh8Z = d7e.args,
            W7P = bh8Z[1].toLowerCase();
        if (W7P == "opacity" && !(W7P in document.body.style)) {
            bh8Z[1] = "filter";
            bh8Z[2] = "alpha(opacity=" + bh8Z[2] * 100 + ")"
        }
    });
    bg8Y.bns7l = function () {
        var fv9m = 30;
        return bg8Y.bns7l.eL9C(function (d7e) {
            var G7z = d7e.args[0];
            if (!G7z.styleSheet) return;
            d7e.stopped = !0;
            var kI1x = d7e.args[1];
            var j7c = document.styleSheets;
            if (j7c.length > fv9m) {
                G7z = j7c[fv9m];
                kI1x = G7z.cssText + kI1x
            } else {
                G7z = G7z.styleSheet
            }
            G7z.cssText = kI1x
        })
    }();
    bg8Y.bol7e = bg8Y.bol7e.eL9C(function (d7e) {
        var bh8Z = d7e.args,
            yI5N = bh8Z[0].sheet;
        if (!!yI5N) return;
        d7e.stopped = !0;
        var yI5N = bh8Z[0].styleSheet,
            bs8k = yI5N.rules.length,
            bt8l = bh8Z[1].split(/[\{\}]/);
        yI5N.addRule(bt8l[0], bt8l[1], bs8k);
        d7e.value = yI5N.rules[bs8k]
    });
    bg8Y.boz8r = function () {
        var Fh7a = function (eg9X, d7e) {
            a6g.y7r(h7a.X7Q(d7e), eg9X)
        };
        return bg8Y.boz8r.eL9C(function (d7e) {
            if (O7H.ds9j.release >= "4.0") return;
            var bh8Z = d7e.args;
            if (bh8Z[1] != 1) {
                h7a.s7l(bh8Z[0], "blur", Fh7a.f7c(null, bh8Z[2]));
                bh8Z[1] = -1
            }
        })
    }();
    bg8Y.bdo4s = function (bdj4n) {
        return !0
    };
    bg8Y.bsh9Y = bg8Y.bsh9Y.eL9C(function (d7e) {
        var bh8Z = d7e.args,
            g7b = (bh8Z[0].attributes || bb7U)[bh8Z[1]];
        if (!!g7b) {
            d7e.stopped = !0;
            d7e.value = g7b.value
        }
    }, function (d7e) {
        var bh8Z = d7e.args;
        if (bh8Z[1] == "maxlength" && d7e.value == 2147483647) d7e.value = ""
    });
    if (O7H.ds9j.release < 5) {
        bg8Y.bxG0x = function () {
            var ej9a, eV9M, kx1x = [],
                bkd6X = "cb-" + +(new Date),
                bp8h = '<script>parent.nej.h["' + bkd6X + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bJS3x = function () {
                ej9a = window.clearTimeout(ej9a);
                if (!kx1x.length) return;
                var dR9I = kx1x.shift();
                try {
                    var xi4m = eV9M.contentWindow.document;
                    xi4m.open();
                    xi4m.write("<head><title>");
                    xi4m.write(document.title);
                    xi4m.write("</title>");
                    xi4m.write(bp8h.replace("#<HASH>", encodeURIComponent(dR9I)));
                    xi4m.write("</head><body></body>");
                    if (location.hostname != document.domain) xi4m.domain = document.domain;
                    xi4m.close();
                    bg8Y[bkd6X] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    kx1x.unshift(dR9I)
                }
                ej9a = window.setTimeout(bJS3x, 50)
            };
            return bg8Y.bxG0x.eL9C(function (d7e) {
                d7e.stopped = !0;
                var dR9I = d7e.args[0];
                if (!!bg8Y[bkd6X] || !eV9M && !dR9I) return;
                kx1x.push(dR9I);
                if (!eV9M) eV9M = a6g.bcR4V();
                bJS3x()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
})();
(function () {
    var c7f = NEJ.P,
        h7a = c7f("nej.v"),
        bg8Y = c7f("nej.h"),
        O7H = c7f("nej.p"),
        bcM4Q = O7H.bCe1x;
    if (O7H.nG2x.gecko) return;
    var Ok0x = function () {
        bcM4Q.css3d = bcM4Q.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (jv0x, G7z) {
            if (!jv0x || !G7z) return;
            switch (jv0x) {
                case "beforeEnd":
                    this.appendChild(G7z);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(G7z, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(G7z) : this.insertBefore(G7z, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(G7z) : this.parentNode.insertBefore(G7z, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bp8h) {
                this.textContent = bp8h
            })
        }
    };
    bg8Y.Ct6n = function () {
        var gM0x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return bg8Y.Ct6n.eL9C(function (d7e) {
            var bh8Z = d7e.args;
            if (gM0x.test(bh8Z[1] || "")) {
                d7e.stopped = !0;
                d7e.value = bh8Z
            }
        })
    }();
    bg8Y.bXC7v = function () {
        var bZc7V = function (d7e) {
            h7a.bf8X(d7e);
            h7a.X7Q(d7e).control.click()
        };
        return function (G7z) {
            h7a.s7l(G7z, "click", bZc7V)
        }
    }();
    Ok0x()
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        bg8Y = c7f("nej.h");
    var bcK4O = function () {
        var nc1x = !!document.body.classList;
        return function () {
            return nc1x
        }
    }();
    var bKp3x = function () {
        var dh9Y = /\s+/g;
        return function (fV9M) {
            fV9M = (fV9M || "").trim();
            return !fV9M ? null : new RegExp("(\\s|^)(?:" + fV9M.replace(dh9Y, "|") + ")(?=\\s|$)", "g")
        }
    }();
    bg8Y.PC0x = bg8Y.PC0x.eL9C(function (d7e) {
        if (bcK4O()) return;
        d7e.stopped = !0;
        var bh8Z = d7e.args,
            G7z = a6g.B7u(bh8Z[0]);
        if (!G7z || !bh8Z[1] && !bh8Z[2]) return;
        var fV9M = G7z.className || "";
        var Mm9d = " " + (bh8Z[2] || ""),
            MB9s = bKp3x((bh8Z[1] || "") + Mm9d);
        !!MB9s && (fV9M = fV9M.replace(MB9s, "$1"));
        G7z.className = (fV9M + Mm9d).replace(/\s+/g, " ").trim()
    });
    bg8Y.bje6Y = bg8Y.bje6Y.eL9C(function (d7e) {
        if (bcK4O()) return;
        d7e.stopped = !0;
        var bh8Z = d7e.args;
        bg8Y.PC0x(bh8Z[0], "", bh8Z[1])
    });
    bg8Y.bkj6d = bg8Y.bkj6d.eL9C(function (d7e) {
        if (bcK4O()) return;
        d7e.stopped = !0;
        var bh8Z = d7e.args;
        bg8Y.PC0x(bh8Z[0], bh8Z[1], "")
    });
    bg8Y.bkU6O = bg8Y.bkU6O.eL9C(function (d7e) {
        if (bcK4O()) return;
        d7e.stopped = !0;
        var bh8Z = d7e.args,
            G7z = a6g.B7u(bh8Z[0]);
        if (!G7z) {
            d7e.value = !1;
            return
        }
        var dh9Y = bKp3x(bh8Z[1]);
        d7e.value = !dh9Y ? !1 : dh9Y.test(G7z.className || "")
    })
})();
(function () {
    var c7f = NEJ.P,
        O7H = c7f("nej.p"),
        bg8Y = c7f("nej.h");
    if (O7H.nG2x.webkit) return;
    bg8Y.bdo4s = function (bdj4n) {
        return !0
    }
})();
(function () {
    var c7f = NEJ.P,
        bg8Y = c7f("nej.h"),
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        db8T = c7f("nej.x"),
        R7K = {};
    var bKB3x = function (G7z) {
        G7z = a6g.B7u(G7z);
        if (!G7z || !R7K[G7z.id]) return;
        var bcx4B = !0,
            D7w = G7z.id;
        k7d.eH9y(R7K[D7w], function () {
            bcx4B = !1;
            return !0
        });
        if (bcx4B) delete R7K[D7w]
    };
    h7a.s7l = db8T.s7l = function () {
        var cbK8C = function () {
            var bh8Z = bg8Y.Ct6n.apply(bg8Y, arguments);
            if (!bh8Z || !bh8Z[2]) return;
            var vs4w = a6g.lQ1x(bh8Z[0]),
                py2x = R7K[vs4w] || {};
            R7K[vs4w] = py2x;
            vs4w = bh8Z[4] || bh8Z[1];
            var Be5j = py2x[vs4w] || [];
            py2x[vs4w] = Be5j;
            Be5j.push({
                type: bh8Z[1],
                func: bh8Z[2],
                capt: !!bh8Z[3],
                sfun: bh8Z[5] || bh8Z[2]
            });
            return bh8Z.slice(0, 4)
        };
        return function () {
            var bh8Z = cbK8C.apply(null, arguments);
            if (!!bh8Z) bg8Y.biD6x.apply(bg8Y, bh8Z);
            return this
        }
    }();
    h7a.mL1x = db8T.mL1x = function () {
        var ccz8r = function () {
            var uy3x = arguments,
                vs4w = a6g.lQ1x(uy3x[0]),
                py2x = R7K[vs4w],
                u7n = (uy3x[1] || "").toLowerCase(),
                d7e = uy3x[2];
            if (!py2x || !u7n || !d7e) return;
            py2x = py2x[u7n];
            if (!py2x) return;
            var ccB8t = !!uy3x[3],
                r7k = k7d.dm9d(py2x, function (jr0x) {
                    return d7e == jr0x.sfun && ccB8t == jr0x.capt
                });
            if (r7k < 0) return;
            var jr0x = py2x.splice(r7k, 1)[0];
            return !jr0x ? null : [a6g.B7u(vs4w), jr0x.type, jr0x.func, jr0x.capt]
        };
        return function () {
            var bh8Z = ccz8r.apply(null, arguments);
            if (!!bh8Z) {
                bg8Y.bdY4c.apply(bg8Y, bh8Z);
                bKB3x(bh8Z[0])
            }
            return this
        }
    }();
    h7a.ho0x = db8T.ho0x = function () {
        var bLF3x = function () {
            var uy3x = arguments,
                vs4w = a6g.lQ1x(uy3x[0]),
                py2x = R7K[vs4w],
                Be5j = (uy3x[1] || "").toLowerCase();
            if (!py2x || !Be5j) return;
            var G7z = a6g.B7u(vs4w);
            k7d.nC2x(py2x[Be5j], function (jr0x, r7k, j7c) {
                bg8Y.bdY4c(G7z, jr0x.type, jr0x.func, jr0x.capt);
                j7c.splice(r7k, 1)
            });
            delete py2x[Be5j]
        };
        var ccS8K = function (G7z) {
            G7z = a6g.B7u(G7z);
            if (!G7z) return;
            var D7w = G7z.id;
            k7d.eH9y(R7K[D7w], function (j7c, u7n) {
                bLF3x(D7w, u7n)
            });
            delete R7K[D7w]
        };
        return function (G7z, u7n) {
            !u7n ? ccS8K(G7z) : bLF3x(G7z, u7n);
            bKB3x(G7z);
            return this
        }
    }();
    h7a.X7Q = function () {
        var btz9q;
        var Ns9j = function (W7P, G7z) {
            var bt8l = W7P.split(":");
            if (bt8l.length > 1) {
                if (!btz9q) btz9q = {
                    c: a6g.bE8w,
                    d: a6g.t7m,
                    a: a6g.hb0x
                };
                var Jh8Z = btz9q[bt8l[0]];
                if (!!Jh8Z) return !!Jh8Z(G7z, bt8l[1]);
                W7P = bt8l[1]
            }
            return !!a6g.hb0x(G7z, W7P) || !!a6g.t7m(G7z, W7P) || a6g.bE8w(G7z, W7P)
        };
        return function (d7e) {
            if (!d7e) return null;
            var G7z = d7e.target || d7e.srcElement,
                ed9U = arguments[1];
            if (!ed9U) return G7z;
            if (k7d.fJ9A(ed9U)) ed9U = Ns9j.f7c(null, ed9U);
            if (k7d.gO0x(ed9U)) {
                while (G7z) {
                    if (!!ed9U(G7z)) return G7z;
                    G7z = G7z.parentNode
                }
                return null
            }
            return G7z
        }
    }();
    h7a.bf8X = function (d7e) {
        h7a.tH3x(d7e);
        h7a.co8g(d7e);
        return this
    };
    h7a.tH3x = function (d7e) {
        if (!!d7e) {
            !!d7e.stopPropagation ? d7e.stopPropagation() : d7e.cancelBubble = !0
        }
        return this
    };
    h7a.co8g = function (d7e) {
        if (!!d7e) {
            !!d7e.preventDefault ? d7e.preventDefault() : d7e.returnValue = !1
        }
        return this
    };
    h7a.cJF5K = function () {
        var qM2x = !1;
        var cfL9C = function () {
            if (qM2x) return;
            qM2x = !0;
            h7a.s7l(document, "click", cfT9K, !0)
        };
        var cfT9K = function (d7e) {
            var G7z = h7a.X7Q(d7e),
                cgf9W = a6g.t7m(G7z, "stopped");
            if (cgf9W == "true") {
                h7a.bf8X(d7e);
                a6g.t7m(G7z, "stopped", "false")
            }
        };
        return function (d7e) {
            if (!d7e) return;
            if (d7e.type == "click") {
                h7a.bf8X(d7e);
                return
            }
            cfL9C();
            a6g.t7m(h7a.X7Q(d7e), "stopped", "true")
        }
    }();
    h7a.jN1x = function (d7e) {
        return d7e.pageX != null ? d7e.pageX : d7e.clientX + a6g.oJ2x().scrollLeft
    };
    h7a.mg1x = function (d7e) {
        return d7e.pageY != null ? d7e.pageY : d7e.clientY + a6g.oJ2x().scrollTop
    };
    h7a.z7s = db8T.z7s = function (G7z, u7n, e7d) {
        var bh8Z = bg8Y.Ct6n(G7z, u7n);
        if (!!bh8Z) bg8Y.biP6J(bh8Z[0], bh8Z[1], e7d);
        return this
    };
    c7f("dbg").dumpEV = function () {
        return R7K
    };
    db8T.isChange = !0
})();
(function () {
    var o = !0,
        w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a" [0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                        b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {}
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {}
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }
        var m = {}.toString,
            p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor,
                J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function (a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function (a) {
                var f = {},
                    c;
                if ((f.__proto__ = w, f.__proto__ = {
                        toString: 1
                    }, f).toString != m) p = function (a) {
                    var f = this.__proto__,
                        a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                };
                else {
                    c = f.constructor;
                    p = function (a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function (a, f) {
                var c = 0,
                    b, h, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function (a, f) {
                    var c = {},
                        b = m.call(a) == "[object Function]",
                        d;
                    for (d in a) !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function (a, f) {
                    var c = m.call(a) == "[object Function]",
                        b, d;
                    for (b in a) !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]",
                            b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a) !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    },
                    u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    },
                    G = function (a) {
                        var f = '"',
                            b = 0,
                            d = a.length,
                            h = d > 10 && s,
                            n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    },
                    E = function (a, b, c, d, h, n, e) {
                        var g = b[a],
                            i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {}
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON"))
                                if (g > -1 / 0 && g < 1 / 0) {
                                    if (z) {
                                        k = t(g / 864e5);
                                        for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                        for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                        k = 1 + k - z(i, j);
                                        l = (g % 864e5 + 864e5) % 864e5;
                                        q = t(l / 36e5) % 24;
                                        s = t(l / 6e4) % 60;
                                        v = t(l / 1e3) % 60;
                                        l = l % 1e3
                                    } else {
                                        i = g.getUTCFullYear();
                                        j = g.getUTCMonth();
                                        k = g.getUTCDate();
                                        q = g.getUTCHours();
                                        s = g.getUTCMinutes();
                                        v = g.getUTCSeconds();
                                        l = g.getUTCMilliseconds()
                                    }
                                    g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                                } else g = w;
                            else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;)
                                if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]") h = b;
                        else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ");
                            }
                        } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    },
                    b, A, j = function () {
                        b = A = w;
                        throw SyntaxError()
                    },
                    q = function () {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j();
                                        else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    },
                    F = function (a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = [];; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "]" && j()
                                        } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {};; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "}" && j()
                                        } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    },
                    I = function (a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    },
                    H = function (a, b, c) {
                        var d = a[b],
                            h;
                        if (typeof d == "object" && d)
                            if (m.call(d) == "[object Array]")
                                for (h = d.length; h--;) I(d, h, c);
                            else C(d, function (a) {
                                I(d, a, c)
                            });
                        return c.call(a, b, d)
                    };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var c7f = NEJ.P,
        O7H = c7f("nej.p");
    if (O7H.nG2x.trident0) return;
    JSON.parse = JSON.parse.eL9C(function (d7e) {
        var cQ8I = d7e.args[0] || "";
        if (cQ8I.length >= 5e5) {
            d7e.stopped = !0;
            d7e.value = eval("(" + cQ8I + ")")
        }
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        eq9h = c7f("nej.g"),
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        bg8Y = c7f("nej.h"),
        db8T = c7f("nej.x"),
        Jj8b, bgK5P = {},
        R7K = document.createDocumentFragment();
    a6g.lQ1x = db8T.lQ1x = function (G7z) {
        G7z = a6g.B7u(G7z);
        if (!G7z) return;
        var D7w = !!G7z.id ? G7z.id : "auto-id-" + k7d.SI1x(16);
        G7z.id = D7w;
        if (a6g.B7u(D7w) != G7z) bgK5P[D7w] = G7z;
        return D7w
    };
    a6g.B7u = db8T.B7u = function (G7z) {
        var g7b = bgK5P["" + G7z];
        if (!!g7b) return g7b;
        if (!k7d.fJ9A(G7z) && !k7d.tg3x(G7z)) return G7z;
        return document.getElementById(G7z)
    };
    a6g.df9W = db8T.df9W = function (G7z, eg9X) {
        G7z = a6g.B7u(G7z);
        if (!G7z) return null;
        var j7c = bg8Y.biR6L(G7z);
        if (!!eg9X) k7d.nC2x(j7c, function (g7b, r7k) {
            if (!a6g.bE8w(g7b, eg9X)) j7c.splice(r7k, 1)
        });
        return j7c
    };
    a6g.E7x = db8T.E7x = function (G7z, fV9M) {
        G7z = a6g.B7u(G7z);
        return !G7z ? null : bg8Y.biX6R(G7z, fV9M.trim())
    };
    a6g.bNx4B = db8T.bNx4B = function (G7z) {
        G7z = a6g.B7u(G7z);
        if (!!G7z) {
            G7z = G7z.parentNode;
            while (!!G7z) {
                if (G7z.scrollHeight > G7z.clientHeight) break;
                G7z = G7z.parentNode
            }
            if (!!G7z) return G7z
        }
        var py2x = document.body.scrollHeight,
            Be5j = document.documentElement.scrollHeight;
        return Be5j >= py2x ? document.documentElement : document.body
    };
    a6g.oJ2x = function () {
        var bNy4C = function (j7c) {
            var m7f = 0;
            k7d.bd7W(j7c, function (eI9z) {
                if (!eI9z) return;
                if (!m7f) {
                    m7f = eI9z
                } else {
                    m7f = Math.min(m7f, eI9z)
                }
            });
            return m7f
        };
        return function (xi4m) {
            var JJ8B = xi4m || document,
                Cu6o = JJ8B.body,
                CH6B = JJ8B.documentElement,
                m7f = {
                    scrollTop: Math.max(Cu6o.scrollTop, CH6B.scrollTop),
                    scrollLeft: Math.max(Cu6o.scrollLeft, CH6B.scrollLeft),
                    clientWidth: bNy4C([Cu6o.clientWidth, Cu6o.offsetWidth, CH6B.clientWidth, CH6B.offsetWidth]),
                    clientHeight: bNy4C([Cu6o.clientHeight, Cu6o.offsetHeight, CH6B.clientHeight, CH6B.offsetHeight])
                };
            m7f.scrollWidth = Math.max(m7f.clientWidth, Cu6o.scrollWidth, CH6B.scrollWidth);
            m7f.scrollHeight = Math.max(m7f.clientHeight, Cu6o.scrollHeight, CH6B.scrollHeight);
            return m7f
        }
    }();
    a6g.cJo5t = function (fv9m, oN2x) {
        var m7f = NEJ.X({}, oN2x),
            bNE4I = fv9m.width / fv9m.height,
            baK3x = oN2x.width / oN2x.height;
        if (bNE4I > baK3x && oN2x.height > fv9m.height) {
            m7f.height = fv9m.height;
            m7f.width = m7f.height * baK3x
        }
        if (bNE4I < baK3x && oN2x.width > fv9m.width) {
            m7f.width = fv9m.width;
            m7f.height = m7f.width / baK3x
        }
        return m7f
    };
    a6g.cJk5p = function () {
        var dh9Y = /\s+/;
        var ww4A = {
            left: function () {
                return 0
            },
            center: function (hF0x, oN2x) {
                return (hF0x.width - oN2x.width) / 2
            },
            right: function (hF0x, oN2x) {
                return hF0x.width - oN2x.width
            },
            top: function () {
                return 0
            },
            middle: function (hF0x, oN2x) {
                return (hF0x.height - oN2x.height) / 2
            },
            bottom: function (hF0x, oN2x) {
                return hF0x.height - oN2x.height
            }
        };
        return function (hF0x, oN2x, on2x) {
            var m7f = {},
                bt8l = (on2x || "").split(dh9Y),
                gG0x = ww4A[bt8l[1]] || ww4A.middle,
                hi0x = ww4A[bt8l[0]] || ww4A.center;
            m7f.top = gG0x(hF0x, oN2x);
            m7f.left = hi0x(hF0x, oN2x);
            return m7f
        }
    }();
    a6g.ug3x = db8T.ug3x = function (G7z, eg9X) {
        bg8Y.blF6z(G7z, eg9X || a6g.t7m(G7z, "hover") || "js-hover");
        return this
    };
    a6g.KH8z = db8T.KH8z = function (G7z) {
        G7z = a6g.B7u(G7z);
        if (!G7z) return;
        bg8Y.bmc7V(G7z)
    };
    a6g.ciS9J = db8T.ciS9J = function () {
        var R7K = {},
            bOG4K = 2;
        var cks0x = function (D7w, eg9X, d7e) {
            R7K[D7w] = [h7a.jN1x(d7e), h7a.mg1x(d7e)];
            a6g.w7p(D7w, eg9X)
        };
        var cky0x = function (D7w, eg9X, d7e) {
            var bM8E = R7K[D7w];
            if (!k7d.ec9T(bM8E)) return;
            var clE0x = Math.abs(h7a.jN1x(d7e) - bM8E[0]),
                clO0x = Math.abs(h7a.mg1x(d7e) - bM8E[1]);
            if (clE0x > bOG4K || clO0x > bOG4K) bof7Y(D7w, eg9X)
        };
        var bof7Y = function (D7w, eg9X) {
            if (k7d.ec9T(R7K[D7w])) {
                R7K[D7w] = -1;
                a6g.y7r(D7w, eg9X)
            }
        };
        return function (G7z, eg9X) {
            var D7w = a6g.lQ1x(G7z);
            if (!D7w || R7K[D7w] != null) return;
            R7K[D7w] = -1;
            eg9X = eg9X || a6g.t7m(D7w, "highlight") || "js-highlight";
            h7a.s7l(D7w, "touchstart", cks0x.f7c(null, D7w, eg9X));
            h7a.s7l(document, "touchmove", cky0x.f7c(null, D7w, eg9X));
            h7a.s7l(document, "touchend", bof7Y.f7c(null, D7w, eg9X));
            h7a.s7l(document, "touchcancel", bof7Y.f7c(null, D7w, eg9X))
        }
    }();
    a6g.Dr6l = db8T.Dr6l = function () {
        var cmg0x = function (D7w, eg9X, cnQ0x) {
            var G7z = a6g.B7u(D7w),
                d7e = {
                    clazz: eg9X,
                    target: G7z
                };
            if (a6g.bE8w(G7z, eg9X)) {
                d7e.toggled = !1;
                a6g.y7r(G7z, eg9X)
            } else {
                d7e.toggled = !0;
                a6g.w7p(G7z, eg9X)
            }
            cnQ0x.call(null, d7e)
        };
        return function (G7z, e7d) {
            G7z = a6g.B7u(G7z);
            if (!!G7z) {
                var iv0x = {
                    ontoggle: br8j,
                    clazz: "js-toggle",
                    element: G7z.parentNode
                };
                if (k7d.fJ9A(e7d)) {
                    var g7b = a6g.B7u(e7d);
                    !!g7b ? iv0x.element = g7b : iv0x.clazz = e7d
                } else {
                    NEJ.EX(iv0x, e7d);
                    iv0x.element = a6g.B7u(iv0x.element)
                }
                var D7w = a6g.lQ1x(iv0x.element);
                h7a.s7l(G7z, "click", cmg0x.f7c(null, D7w, iv0x.clazz, iv0x.ontoggle || br8j))
            }
            return this
        }
    }();
    a6g.mF1x = db8T.mF1x = function (G7z, e7d) {
        G7z = a6g.B7u(G7z);
        if (!G7z) return;
        var fu9l = 0,
            eg9X = "js-focus";
        if (k7d.tg3x(e7d)) {
            fu9l = e7d
        } else if (k7d.fJ9A(e7d)) {
            eg9X = e7d
        } else if (k7d.lY1x(e7d)) {
            fu9l = e7d.mode || fu9l;
            eg9X = e7d.clazz || eg9X
        }
        var C7v = parseInt(a6g.t7m(G7z, "mode"));
        if (!isNaN(C7v)) fu9l = C7v;
        C7v = a6g.t7m(G7z, "focus");
        if (!!C7v) eg9X = C7v;
        bg8Y.boz8r(G7z, fu9l, eg9X);
        return this
    };
    a6g.dk9b = function () {
        var bz8r = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function (fC9t, fV9M, bH8z) {
            var G7z = document.createElement(fC9t);
            NEJ.X(G7z, bz8r[fC9t.toLowerCase()]);
            if (!!fV9M) G7z.className = fV9M;
            bH8z = a6g.B7u(bH8z);
            if (!!bH8z) bH8z.appendChild(G7z);
            return G7z
        }
    }();
    a6g.bcR4V = function () {
        var cpV1x = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var cpX1x = function (W7P) {
            W7P = W7P.trim();
            if (!W7P) return a6g.dk9b("iframe");
            var eV9M;
            try {
                eV9M = document.createElement('<iframe name="' + W7P + '"></iframe>');
                eV9M.frameBorder = 0
            } catch (e) {
                eV9M = a6g.dk9b("iframe");
                eV9M.name = W7P
            }
            return eV9M
        };
        return function (e7d) {
            e7d = e7d || bb7U;
            var eV9M = cpX1x(e7d.name || "");
            if (!e7d.visible) eV9M.style.display = "none";
            if (k7d.gO0x(e7d.onload)) h7a.s7l(eV9M, "load", function (d7e) {
                if (!eV9M.src) return;
                h7a.ho0x(eV9M, "load");
                e7d.onload(d7e)
            });
            var bH8z = e7d.parent;
            if (k7d.gO0x(bH8z)) {
                try {
                    bH8z(eV9M)
                } catch (e) {}
            } else {
                (a6g.B7u(bH8z) || document.body).appendChild(eV9M)
            }
            var cY8Q = e7d.src || cpV1x();
            window.setTimeout(function () {
                eV9M.src = cY8Q
            }, 0);
            return eV9M
        }
    }();
    a6g.cO8G = db8T.cO8G = function () {
        var bQV5a = function (Ay5D) {
            Ay5D.src = eq9h.bkK6E
        };
        var bQW5b = function (ep9g) {
            ep9g.src = "about:blank"
        };
        return function (G7z, cqd1x) {
            G7z = a6g.B7u(G7z);
            if (!G7z) return this;
            if (!cqd1x) h7a.ho0x(G7z);
            delete bgK5P[G7z.id];
            var fC9t = G7z.tagName;
            if (fC9t == "IFRAME") {
                bQW5b(G7z)
            } else if (fC9t == "IMG") {
                bQV5a(G7z)
            } else if (!!G7z.getElementsByTagName) {
                k7d.bd7W(G7z.getElementsByTagName("img"), bQV5a);
                k7d.bd7W(G7z.getElementsByTagName("iframe"), bQW5b)
            }
            if (!!G7z.parentNode) {
                G7z.parentNode.removeChild(G7z)
            }
            return this
        }
    }();
    a6g.mO1x = db8T.mO1x = function (G7z) {
        G7z = a6g.B7u(G7z);
        if (!!G7z) R7K.appendChild(G7z);
        return this
    };
    a6g.bRl5q = db8T.bRl5q = function (G7z) {
        G7z = a6g.B7u(G7z);
        if (!G7z) return;
        k7d.nC2x(G7z.childNodes, function (g7b) {
            a6g.cO8G(g7b)
        })
    };
    a6g.Mc9T = db8T.Mc9T = function () {
        var eg9X, gM0x = /\s+/;
        var crc1x = function () {
            if (!!eg9X) return;
            eg9X = a6g.uK4O(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a6g.bRw5B()
        };
        return function (G7z, e7d) {
            G7z = a6g.B7u(G7z);
            if (!G7z) return;
            crc1x();
            e7d = e7d || bb7U;
            var bH8z = G7z.parentNode;
            if (!a6g.bE8w(bH8z, eg9X)) {
                bH8z = a6g.dk9b("span", eg9X);
                G7z.insertAdjacentElement("beforeBegin", bH8z);
                bH8z.appendChild(G7z)
            }
            var bRx5C = e7d.nid || "",
                g7b = a6g.E7x(bH8z, bRx5C || eg9X + "-show")[0];
            if (!g7b) {
                var ef9W = ((e7d.clazz || "") + " " + bRx5C).trim();
                ef9W = eg9X + "-show" + (!ef9W ? "" : " ") + ef9W;
                g7b = a6g.dk9b(e7d.tag || "span", ef9W);
                bH8z.appendChild(g7b)
            }
            var ef9W = e7d.clazz;
            if (!!ef9W) {
                ef9W = (ef9W || "").trim().split(gM0x)[0] + "-parent";
                a6g.w7p(bH8z, ef9W)
            }
            return g7b
        }
    }();
    a6g.t7m = db8T.t7m = function () {
        var buZ9Q = {},
            fC9t = "data-",
            dh9Y = /\-(.{1})/gi;
        var GM7F = function (G7z) {
            var D7w = a6g.lQ1x(G7z);
            if (!!buZ9Q[D7w]) return;
            var bz8r = {};
            k7d.bd7W(G7z.attributes, function (g7b) {
                var L7E = g7b.nodeName;
                if (L7E.indexOf(fC9t) != 0) return;
                L7E = L7E.replace(fC9t, "").replace(dh9Y, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bz8r[L7E] = g7b.nodeValue || ""
            });
            buZ9Q[D7w] = bz8r
        };
        return function (G7z, L7E, C7v) {
            G7z = a6g.B7u(G7z);
            if (!G7z) return null;
            var ZR3x = G7z.dataset;
            if (!ZR3x) {
                GM7F(G7z);
                ZR3x = buZ9Q[G7z.id]
            }
            if (C7v !== undefined) ZR3x[L7E] = C7v;
            return ZR3x[L7E]
        }
    }();
    a6g.hb0x = db8T.hb0x = function (G7z, W7P, C7v) {
        G7z = a6g.B7u(G7z);
        if (!G7z) return "";
        if (C7v !== undefined && !!G7z.setAttribute) G7z.setAttribute(W7P, C7v);
        return bg8Y.bsh9Y(G7z, W7P)
    };
    a6g.nY2x = function (dU9L) {
        var ta3x = document.createElement("div");
        ta3x.innerHTML = dU9L;
        var j7c = a6g.df9W(ta3x);
        return j7c.length > 1 ? ta3x : j7c[0]
    };
    a6g.crG1x = db8T.crG1x = function (G7z) {
        G7z = a6g.B7u(G7z);
        return !G7z ? "" : bg8Y.buq9h(G7z)
    };
    a6g.bRM5R = function (BG6A) {
        BG6A = (BG6A || "").trim();
        return !BG6A ? null : bg8Y.buM9D(BG6A)
    };
    a6g.cso1x = function (cL8D, u7n) {
        cL8D = cL8D || "";
        switch (u7n) {
            case "xml":
                cL8D = a6g.bRM5R(cL8D);
                break;
            case "json":
                try {
                    cL8D = JSON.parse(cL8D)
                } catch (ex) {
                    cL8D = null
                }
                break
        }
        return cL8D
    };
    a6g.ic0x = db8T.ic0x = function () {
        var csr1x = function (G7z) {
            return G7z == document.body || G7z == document.documentElement
        };
        return function (ei9Z, nq2x) {
            ei9Z = a6g.B7u(ei9Z);
            if (!ei9Z) return null;
            nq2x = a6g.B7u(nq2x) || null;
            var m7f = {
                    x: 0,
                    y: 0
                },
                bxX0x, dr9i, ZG3x;
            while (!!ei9Z && ei9Z != nq2x) {
                bxX0x = csr1x(ei9Z);
                dr9i = bxX0x ? 0 : ei9Z.scrollLeft;
                ZG3x = parseInt(a6g.di9Z(ei9Z, "borderLeftWidth")) || 0;
                m7f.x += ei9Z.offsetLeft + ZG3x - dr9i;
                dr9i = bxX0x ? 0 : ei9Z.scrollTop;
                ZG3x = parseInt(a6g.di9Z(ei9Z, "borderTopWidth")) || 0;
                m7f.y += ei9Z.offsetTop + ZG3x - dr9i;
                ei9Z = ei9Z.offsetParent
            }
            return m7f
        }
    }();
    a6g.ny2x = db8T.ny2x = function (G7z) {
        var bj8b = a6g.ic0x(G7z);
        window.scrollTo(bj8b.x, bj8b.y);
        return this
    };
    a6g.cIj5o = function (tZ3x) {
        tZ3x = (tZ3x || "").trim();
        return bg8Y.bHb2x(tZ3x)
    };
    a6g.csB1x = db8T.csB1x = function (G7z, W7P, bz8r) {
        G7z = a6g.B7u(G7z);
        if (!G7z) return this;
        var C7v = bg8Y.bIN3x(W7P, bz8r);
        if (!C7v) return this;
        a6g.ba7T(G7z, "transform", C7v);
        return this
    };
    a6g.fh9Y = db8T.fh9Y = function (G7z, bz8r) {
        G7z = a6g.B7u(G7z);
        if (!!G7z) k7d.eH9y(bz8r, function (C7v, W7P) {
            a6g.ba7T(G7z, W7P, C7v)
        });
        return this
    };
    a6g.csD1x = db8T.csD1x = function (gr0x, e7d) {
        gr0x = a6g.B7u(gr0x);
        if (!gr0x) return {
            start: 0,
            end: 0
        };
        if (k7d.tg3x(e7d)) e7d = {
            start: e7d,
            end: e7d
        };
        if (e7d != null) {
            if (e7d.end == null) e7d.end = e7d.start || 0;
            bg8Y.bmD7w(gr0x, e7d)
        } else {
            e7d = bg8Y.box7q(gr0x)
        }
        return e7d
    };
    a6g.ba7T = db8T.ba7T = function (G7z, W7P, C7v) {
        G7z = a6g.B7u(G7z);
        if (!!G7z) bg8Y.bkF6z(G7z, W7P, C7v);
        return this
    };
    a6g.di9Z = db8T.di9Z = function (G7z, W7P) {
        G7z = a6g.B7u(G7z);
        if (!G7z) return "";
        var hs0x = !window.getComputedStyle ? G7z.currentStyle || bb7U : window.getComputedStyle(G7z, null);
        return hs0x[bg8Y.bIO3x(W7P)] || ""
    };
    a6g.bSw6q = function () {
        var dh9Y = /[\s\r\n]+/gi;
        return function (cj8b) {
            cj8b = (cj8b || "").trim().replace(dh9Y, " ");
            if (!cj8b) return;
            var g7b = a6g.dk9b("style");
            document.head.appendChild(g7b);
            bg8Y.bns7l(g7b, bg8Y.bXy7r(cj8b));
            return g7b
        }
    }();
    a6g.bSz6t = function (yv5A) {
        try {
            yv5A = yv5A.trim();
            if (!!yv5A) return (new Function(yv5A))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a6g.uK4O = function () {
        var dh9Y = /#<.*?>/g,
            gW0x = +(new Date);
        return function (kI1x) {
            if (!Jj8b) Jj8b = [];
            var fV9M = "auto-" + gW0x++;
            Jj8b.push(kI1x.replace(dh9Y, fV9M));
            return fV9M
        }
    }();
    a6g.bRw5B = function () {
        if (!!Jj8b) {
            a6g.bSw6q(Jj8b.join(""));
            Jj8b = null
        }
        return this
    };
    a6g.cHJ5O = function (cj8b, kI1x) {
        cj8b = a6g.B7u(cj8b);
        return !cj8b ? null : bg8Y.bol7e(cj8b, kI1x)
    };
    a6g.w7p = db8T.w7p = function () {
        bg8Y.bje6Y.apply(bg8Y, arguments);
        return this
    };
    a6g.y7r = db8T.y7r = function () {
        bg8Y.bkj6d.apply(bg8Y, arguments);
        return this
    };
    a6g.fo9f = db8T.fo9f = function () {
        bg8Y.PC0x.apply(bg8Y, arguments);
        return this
    };
    a6g.bE8w = db8T.bE8w = function () {
        return bg8Y.bkU6O.apply(bg8Y, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    db8T.isChange = !0
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        fD9u = NEJ.R,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        bg8Y = c7f("nej.h"),
        k7d = c7f("nej.u");
    var HE7x = function (i7b, u7n) {
        try {
            u7n = u7n.toLowerCase();
            if (i7b === null) return u7n == "null";
            if (i7b === undefined) return u7n == "undefined";
            return bb7U.toString.call(i7b).toLowerCase() == "[object " + u7n + "]"
        } catch (e) {
            return !1
        }
    };
    k7d.gO0x = function (i7b) {
        return HE7x(i7b, "function")
    };
    k7d.fJ9A = function (i7b) {
        return HE7x(i7b, "string")
    };
    k7d.tg3x = function (i7b) {
        return HE7x(i7b, "number")
    };
    k7d.cHI5N = function (i7b) {
        return HE7x(i7b, "boolean")
    };
    k7d.HW7P = function (i7b) {
        return HE7x(i7b, "date")
    };
    k7d.ec9T = function (i7b) {
        return HE7x(i7b, "array")
    };
    k7d.lY1x = function (i7b) {
        return HE7x(i7b, "object")
    };
    k7d.fN9E = function () {
        var dh9Y = /[^\x00-\xfff]/g;
        return function (bp8h) {
            return ("" + (bp8h || "")).replace(dh9Y, "**").length
        }
    }();
    k7d.dm9d = function (j7c, p7i) {
        var ed9U = k7d.gO0x(p7i) ? p7i : function (C7v) {
                return C7v === p7i
            },
            r7k = k7d.eH9y(j7c, ed9U);
        return r7k != null ? r7k : -1
    };
    k7d.cHH5M = function () {
        var bSC6w;
        var Ul2x = function (j7c, oX2x, pn2x) {
            if (oX2x > pn2x) return -1;
            var Ib7U = Math.ceil((oX2x + pn2x) / 2),
                m7f = bSC6w(j7c[Ib7U], Ib7U, j7c);
            if (m7f == 0) return Ib7U;
            if (m7f < 0) return Ul2x(j7c, oX2x, Ib7U - 1);
            return Ul2x(j7c, Ib7U + 1, pn2x)
        };
        return function (j7c, Jh8Z) {
            bSC6w = Jh8Z || br8j;
            return Ul2x(j7c, 0, j7c.length - 1)
        }
    }();
    k7d.nC2x = function (j7c, cC8u, P7I) {
        if (!j7c || !j7c.length || !k7d.gO0x(cC8u)) return null;
        for (var i = j7c.length - 1; i >= 0; i--)
            if (!!cC8u.call(P7I, j7c[i], i, j7c)) return i;
        return null
    };
    k7d.bd7W = function (j7c, cC8u, P7I) {
        if (!j7c || !j7c.length || !k7d.gO0x(cC8u)) return this;
        if (!!j7c.forEach) {
            j7c.forEach(cC8u, P7I);
            return this
        }
        for (var i = 0, l = j7c.length; i < l; i++) cC8u.call(P7I, j7c[i], i, j7c);
        return this
    };
    k7d.eH9y = function (j7c, cC8u, P7I) {
        if (!j7c || !k7d.gO0x(cC8u)) return null;
        if (j7c.length != null) {
            if (j7c.length > 0)
                for (var i = 0, l = j7c.length; i < l; i++)
                    if (!!cC8u.call(P7I, j7c[i], i, j7c)) return i
        }
        if (k7d.lY1x(j7c)) {
            for (var x in j7c)
                if (j7c.hasOwnProperty(x) && !!cC8u.call(P7I, j7c[x], x, j7c)) return x
        }
        return null
    };
    k7d.cuv2x = function (jx0x, cuw2x, e7d) {
        jx0x = jx0x || [];
        e7d = e7d || bb7U;
        var bSS6M = !!e7d.union,
            xx4B = !!e7d.begin,
            YU3x = e7d.compare,
            cuF2x = bSS6M && xx4B ? k7d.nC2x : k7d.bd7W;
        cuF2x(cuw2x, function (p7i) {
            if (!!YU3x) YU3x = YU3x.ex9o(p7i);
            var r7k = k7d.dm9d(jx0x, YU3x || p7i);
            if (r7k >= 0) jx0x.splice(r7k, 1);
            if (bSS6M) jx0x[xx4B ? "unshift" : "push"](p7i)
        });
        return jx0x
    };
    k7d.BI6C = function (bz8r, bp8h) {
        if (!bz8r || !bp8h || !bp8h.replace) return bp8h || "";
        return bp8h.replace(bz8r.r, function ($1) {
            var m7f = bz8r[!bz8r.i ? $1.toLowerCase() : $1];
            return m7f != null ? m7f : $1
        })
    };
    k7d.dI9z = function () {
        var bz8r = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function (bp8h) {
            return k7d.BI6C(bz8r, bp8h)
        }
    }();
    k7d.BK6E = function () {
        var bz8r = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bp8h) {
            return k7d.BI6C(bz8r, bp8h)
        }
    }();
    k7d.id0x = function () {
        var bz8r = {
                i: !0,
                r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
            },
            cvd2x = ["上午", "下午"],
            cvn2x = ["A.M.", "P.M."],
            bnc7V = ["日", "一", "二", "三", "四", "五", "六"],
            cwx2x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            cxH3x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var UT2x = function (hk0x) {
            hk0x = parseInt(hk0x) || 0;
            return (hk0x < 10 ? "0" : "") + hk0x
        };
        var cxI3x = function (qi2x) {
            return qi2x < 12 ? 0 : 1
        };
        return function (bA8s, Kx8p, cyx3x) {
            if (!bA8s || !Kx8p) return "";
            bA8s = k7d.Ys3x(bA8s);
            bz8r.yyyy = bA8s.getFullYear();
            bz8r.yy = ("" + bz8r.yyyy).substr(2);
            bz8r.M = bA8s.getMonth() + 1;
            bz8r.MM = UT2x(bz8r.M);
            bz8r.eM = cxH3x[bz8r.M - 1];
            bz8r.cM = cwx2x[bz8r.M - 1];
            bz8r.d = bA8s.getDate();
            bz8r.dd = UT2x(bz8r.d);
            bz8r.H = bA8s.getHours();
            bz8r.HH = UT2x(bz8r.H);
            bz8r.m = bA8s.getMinutes();
            bz8r.mm = UT2x(bz8r.m);
            bz8r.s = bA8s.getSeconds();
            bz8r.ss = UT2x(bz8r.s);
            bz8r.ms = bA8s.getMilliseconds();
            bz8r.w = bnc7V[bA8s.getDay()];
            var bUE6y = cxI3x(bz8r.H);
            bz8r.ct = cvd2x[bUE6y];
            bz8r.et = cvn2x[bUE6y];
            if (!!cyx3x) {
                bz8r.H = bz8r.H % 12
            }
            return k7d.BI6C(bz8r, Kx8p)
        }
    }();
    k7d.Ys3x = function (bA8s) {
        var dc8U = bA8s;
        if (k7d.fJ9A(bA8s)) dc8U = new Date(Date.parse(bA8s));
        if (!k7d.HW7P(bA8s)) dc8U = new Date(bA8s);
        return dc8U
    };
    k7d.KH8z = function (czt3x, cAd3x) {
        return (new Number(czt3x)).toFixed(cAd3x)
    };
    k7d.brw8o = function () {
        var gM0x = /([^\/:])\/.*$/,
            kw1x = /\/[^\/]+$/,
            EP7I = /[#\?]/,
            brC8u = location.href.split(/[?#]/)[0],
            tW3x = document.createElement("a");
        var bsf9W = function (ju0x) {
            return (ju0x || "").indexOf("://") > 0
        };
        var bVm6g = function (ju0x) {
            return (ju0x || "").split(EP7I)[0].replace(kw1x, "/")
        };
        var cBY4c = function (ju0x, gj0x) {
            if (ju0x.indexOf("/") == 0) return gj0x.replace(gM0x, "$1") + ju0x;
            return bVm6g(gj0x) + ju0x
        };
        brC8u = bVm6g(brC8u);
        return function (ju0x, gj0x) {
            ju0x = (ju0x || "").trim();
            if (!bsf9W(gj0x)) gj0x = brC8u;
            if (!ju0x) return gj0x;
            if (bsf9W(ju0x)) return ju0x;
            ju0x = cBY4c(ju0x, gj0x);
            tW3x.href = ju0x;
            ju0x = tW3x.href;
            return bsf9W(ju0x) ? ju0x : tW3x.getAttribute("href", 4)
        }
    }();
    k7d.cCB4F = function () {
        var dh9Y = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (Y7R) {
            if (dh9Y.test(Y7R || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k7d.bWz7s = function (H7A, iv0x) {
        if (!H7A) return iv0x;
        var W7P = H7A.tagName.toLowerCase(),
            j7c = a6g.df9W(H7A);
        if (!j7c || !j7c.length) {
            iv0x[W7P] = H7A.textContent || H7A.text || "";
            return iv0x
        }
        var cl8d = {};
        iv0x[W7P] = cl8d;
        k7d.bd7W(j7c, function (g7b) {
            k7d.bWz7s(g7b, cl8d)
        });
        return iv0x
    };
    k7d.cGL5Q = function (BG6A) {
        try {
            return k7d.bWz7s(a6g.bRM5R(BG6A), {})
        } catch (ex) {
            return null
        }
    };
    k7d.VA2x = function (im0x, VD2x) {
        var iv0x = {};
        k7d.bd7W((im0x || "").split(VD2x), function (W7P) {
            var XT3x = W7P.split("=");
            if (!XT3x || !XT3x.length) return;
            var L7E = XT3x.shift();
            if (!L7E) return;
            iv0x[decodeURIComponent(L7E)] = decodeURIComponent(XT3x.join("="))
        });
        return iv0x
    };
    k7d.wz4D = function (gE0x, VD2x, cGy5D) {
        if (!gE0x) return "";
        var bt8l = [];
        for (var x in gE0x) {
            bt8l.push(encodeURIComponent(x) + "=" + (!!cGy5D ? encodeURIComponent(gE0x[x]) : gE0x[x]))
        }
        return bt8l.join(VD2x || ",")
    };
    k7d.hf0x = function (bv8n) {
        return k7d.VA2x(bv8n, "&")
    };
    k7d.cz8r = function (gE0x) {
        return k7d.wz4D(gE0x, "&", !0)
    };
    k7d.cGI5N = function (gE0x) {
        return bg8Y.Kz8r(gE0x)
    };
    k7d.cJu5z = function (j7c, ed9U) {
        var m7f = {};
        k7d.bd7W(j7c, function (p7i) {
            var L7E = p7i;
            if (!!ed9U) {
                L7E = ed9U(p7i)
            }
            m7f[L7E] = p7i
        });
        return m7f
    };
    k7d.cGJ5O = function (hk0x, gk0x) {
        var cGu5z = ("" + hk0x).length,
            cGt4x = Math.max(1, parseInt(gk0x) || 0),
            dr9i = cGt4x - cGu5z;
        if (dr9i > 0) {
            hk0x = (new Array(dr9i + 1)).join("0") + hk0x
        }
        return "" + hk0x
    };
    k7d.XN3x = function (gE0x, W7P) {
        if (!k7d.ec9T(W7P)) {
            try {
                delete gE0x[W7P]
            } catch (e) {
                gE0x[W7P] = undefined
            }
            return this
        }
        k7d.bd7W(W7P, k7d.XN3x.f7c(k7d, gE0x));
        return this
    };
    k7d.SI1x = function () {
        var bXc7V = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bs8k) {
            bs8k = bs8k || 10;
            var m7f = [];
            for (var i = 0, bXa7T; i < bs8k; ++i) {
                bXa7T = Math.floor(Math.random() * bXc7V.length);
                m7f.push(bXc7V.charAt(bXa7T))
            }
            return m7f.join("")
        }
    }();
    k7d.CP6J = function (fI9z, fv9m) {
        return Math.floor(Math.random() * (fv9m - fI9z) + fI9z)
    };
    k7d.oG2x = function (bs8k) {
        bs8k = Math.max(0, Math.min(bs8k || 8, 30));
        var fI9z = Math.pow(10, bs8k - 1),
            fv9m = fI9z * 10;
        return k7d.CP6J(fI9z, fv9m).toString()
    };
    k7d.Xz3x = function () {
        var gW0x = +(new Date);
        return function () {
            return "" + gW0x++
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        fD9u = NEJ.R,
        br8j = NEJ.F,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ut"),
        pu2x;
    if (!!O7H.cH8z) return;
    O7H.cH8z = NEJ.C();
    pu2x = O7H.cH8z.prototype;
    O7H.cH8z.A7t = function (e7d) {
        e7d = e7d || {};
        var cF8x = !!this.CT6N && this.CT6N.shift();
        if (!cF8x) {
            cF8x = new this(e7d);
            this.cGk4o = (this.cGk4o || 0) + 1
        }
        cF8x.bm8e(e7d);
        return cF8x
    };
    O7H.cH8z.T7M = function () {
        var Ww2x = function (p7i, r7k, j7c) {
            p7i.T7M();
            j7c.splice(r7k, 1)
        };
        return function (cF8x) {
            if (!cF8x) return null;
            if (!k7d.ec9T(cF8x)) {
                if (!(cF8x instanceof this)) {
                    var fV9M = cF8x.constructor;
                    if (!!fV9M.T7M) fV9M.T7M(cF8x);
                    return null
                }
                if (cF8x == this.fr9i) delete this.fr9i;
                if (cF8x == this.Dd6X) delete this.Dd6X;
                cF8x.bB8t();
                if (!this.CT6N) this.CT6N = [];
                if (k7d.dm9d(this.CT6N, cF8x) < 0) {
                    this.CT6N.push(cF8x)
                }
                return null
            }
            k7d.nC2x(cF8x, Ww2x, this)
        }
    }();
    O7H.cH8z.fR9I = function (e7d) {
        e7d = e7d || {};
        if (!this.fr9i) this.fr9i = this.A7t(e7d);
        return this.fr9i
    };
    O7H.cH8z.bWZ7S = function (e7d, sX3x) {
        e7d = e7d || {};
        if (!!sX3x && !!this.Dd6X) {
            this.Dd6X.T7M();
            delete this.Dd6X
        }
        if (!this.Dd6X) {
            this.Dd6X = this.A7t(e7d)
        } else {
            this.Dd6X.bm8e(e7d)
        }
        return this.Dd6X
    };
    pu2x.cv8n = function () {
        var gW0x = +(new Date);
        return function () {
            this.id = gW0x++;
            this.mf1x = {};
            this.bWY7R = {}
        }
    }();
    pu2x.bm8e = function (e7d) {
        this.bgO5T(e7d)
    };
    pu2x.bB8t = function () {
        this.ho0x();
        this.IW8O()
    };
    pu2x.bX8P = function () {
        var gW0x = +(new Date);
        var cGh4l = function (bh8Z) {
            if (!bh8Z || bh8Z.length < 3) return;
            this.bWY7R["de-" + gW0x++] = bh8Z;
            h7a.s7l.apply(h7a, bh8Z)
        };
        return function (j7c) {
            k7d.bd7W(j7c, cGh4l, this)
        }
    }();
    pu2x.IW8O = function () {
        var cGg4k = function (bh8Z, L7E, bz8r) {
            delete bz8r[L7E];
            h7a.mL1x.apply(h7a, bh8Z)
        };
        return function () {
            k7d.eH9y(this.bWY7R, cGg4k)
        }
    }();
    pu2x.cGM5R = function (ed9U) {
        ed9U = ed9U || br8j;
        k7d.eH9y(this, function (GN7G, L7E, bz8r) {
            if (!!GN7G && !!GN7G.T7M && !ed9U(GN7G)) {
                delete bz8r[L7E];
                GN7G.T7M()
            }
        })
    };
    pu2x.T7M = function () {
        this.constructor.T7M(this)
    };
    pu2x.bim6g = function (u7n) {
        var d7e = this.mf1x[u7n.toLowerCase()];
        return !!d7e && d7e !== br8j
    };
    pu2x.s7l = function (u7n, d7e) {
        this.xE4I.apply(this, arguments);
        return this
    };
    pu2x.mL1x = function (u7n, d7e) {
        var u7n = (u7n || "").toLowerCase(),
            ek9b = this.mf1x[u7n];
        if (!k7d.ec9T(ek9b)) {
            if (ek9b == d7e) delete this.mf1x[u7n];
            return
        }
        k7d.nC2x(ek9b, function (ez9q, r7k, j7c) {
            if (ez9q == d7e) j7c.splice(r7k, 1)
        })
    };
    pu2x.xE4I = function (u7n, d7e) {
        if (!!u7n && k7d.gO0x(d7e)) this.mf1x[u7n.toLowerCase()] = d7e;
        return this
    };
    pu2x.bgO5T = function () {
        var cGb4f = function (d7e, u7n) {
            this.xE4I(u7n, d7e)
        };
        return function (ek9b) {
            k7d.eH9y(ek9b, cGb4f, this);
            return this
        }
    }();
    pu2x.ho0x = function () {
        var biI6C = function (d7e, u7n) {
            this.ho0x(u7n)
        };
        return function (u7n) {
            var u7n = (u7n || "").toLowerCase();
            if (!!u7n) {
                delete this.mf1x[u7n]
            } else {
                k7d.eH9y(this.mf1x, biI6C, this)
            }
            return this
        }
    }();
    pu2x.biN6H = function (u7n, d7e) {
        if (!u7n || !k7d.gO0x(d7e)) return this;
        u7n = u7n.toLowerCase();
        var ek9b = this.mf1x[u7n];
        if (!ek9b) {
            this.mf1x[u7n] = d7e;
            return this
        }
        if (!k7d.ec9T(ek9b)) {
            this.mf1x[u7n] = [ek9b]
        }
        this.mf1x[u7n].push(d7e);
        return this
    };
    pu2x.z7s = function (u7n) {
        var d7e = this.mf1x[(u7n || "").toLowerCase()];
        if (!d7e) return this;
        var bh8Z = fD9u.slice.call(arguments, 1);
        if (!k7d.ec9T(d7e)) return d7e.apply(this, bh8Z);
        k7d.bd7W(d7e, function (dw9n) {
            try {
                dw9n.apply(this, bh8Z)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    O7H.WZ2x = function () {
        var R7K = {};
        return function (D7w, fV9M, e7d) {
            var fn9e = fV9M.cFZ4d;
            if (!fn9e) {
                fn9e = k7d.SI1x(10);
                fV9M.cFZ4d = fn9e
            }
            var L7E = D7w + "-" + fn9e,
                cF8x = R7K[L7E];
            if (!!e7d && !cF8x) {
                cF8x = fV9M.A7t(e7d);
                cF8x.T7M = cF8x.T7M.eL9C(function (d7e) {
                    delete R7K[L7E];
                    delete cF8x.T7M
                });
                R7K[L7E] = cF8x
            }
            return cF8x
        }
    }()
})();
(function () {
    var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gI0x = function () {
        var dc8U = new Date,
            cFU4Y = +dc8U,
            bjq6k = 864e5;
        var cFT4X = function (W7P) {
            var te3x = document.cookie,
                ti3x = "\\b" + W7P + "=",
                WU2x = te3x.search(ti3x);
            if (WU2x < 0) return "";
            WU2x += ti3x.length - 2;
            var xG4K = te3x.indexOf(";", WU2x);
            if (xG4K < 0) xG4K = te3x.length;
            return te3x.substring(WU2x, xG4K) || ""
        };
        return function (W7P, i7b) {
            if (i7b === undefined) return cFT4X(W7P);
            if (u.fJ9A(i7b)) {
                if (!!i7b) {
                    document.cookie = W7P + "=" + i7b + ";";
                    return i7b
                }
                i7b = {
                    expires: -100
                }
            }
            i7b = i7b || o;
            var te3x = W7P + "=" + (i7b.value || "") + ";";
            delete i7b.value;
            if (i7b.expires !== undefined) {
                dc8U.setTime(cFU4Y + i7b.expires * bjq6k);
                i7b.expires = dc8U.toGMTString()
            }
            te3x += u.wz4D(i7b, ";");
            document.cookie = te3x
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        iB0x = c7f("nej.c"),
        eq9h = c7f("nej.g"),
        a6g = c7f("nej.e"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        O7H = c7f("nej.ut.j"),
        k7d = c7f("nej.u"),
        b7g;
    if (!!O7H.JB8t) return;
    O7H.JB8t = NEJ.C();
    b7g = O7H.JB8t.N7G(I7B.cH8z);
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.pN2x = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.pN2x, e7d);
        var Bo5t = iB0x.B7u("csrf");
        if ((/^\/[^\/]/.test(this.pN2x.url) || this.pN2x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!Bo5t.cookie && !!Bo5t.param) {
            var bv8n = encodeURIComponent(Bo5t.param) + "=" + encodeURIComponent(v7o.gI0x(Bo5t.cookie) || ""),
                VD2x = this.pN2x.url.indexOf("?") < 0 ? "?" : "&";
            this.pN2x.url += VD2x + bv8n
        }
        this.WT2x = e7d.headers || {};
        var bp8h = this.WT2x[eq9h.yH5M];
        if (bp8h == null) this.WT2x[eq9h.yH5M] = eq9h.clg0x
    };
    b7g.bB8t = function () {
        this.bG8y();
        delete this.DB6v;
        delete this.pN2x;
        delete this.WT2x
    };
    b7g.cFS4W = function (bp8h) {
        var bz8r = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.pN2x.noescape) {
            return k7d.BI6C(bz8r, bp8h)
        } else {
            return bp8h
        }
    };
    b7g.wr4v = function (d7e) {
        var eA9r = d7e.status;
        if (eA9r == -1) {
            this.z7s("onerror", {
                code: eq9h.bDZ1x,
                message: "请求[" + this.pN2x.url + "]超时！"
            });
            return
        }
        if (("" + eA9r).indexOf("2") != 0) {
            this.z7s("onerror", {
                data: eA9r,
                code: eq9h.bza0x,
                message: "服务器返回异常状态[" + eA9r + "]!",
                extData: d7e.result
            });
            return
        }
        this.z7s("onload", a6g.cso1x(this.cFS4W(d7e.result), this.pN2x.type))
    };
    b7g.cm8e = br8j;
    b7g.bmf7Y = function (i7b) {
        var Y7R = this.pN2x.url;
        if (!Y7R) {
            this.z7s("onerror", {
                code: eq9h.bqc8U,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.pN2x.data = i7b == null ? null : i7b;
            var d7e = {
                request: this.pN2x,
                headers: this.WT2x
            };
            try {
                this.z7s("onbeforerequest", d7e)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cm8e(d7e)
        } catch (e) {
            this.z7s("onerror", {
                code: eq9h.bza0x,
                message: "请求[" + Y7R + "]失败:" + e.message + "！"
            })
        }
        return this
    };
    b7g.kF1x = br8j
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        bg8Y = c7f("nej.h"),
        eq9h = c7f("nej.g"),
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ut.j"),
        R7K = {},
        WP2x;
    if (!!O7H.Xa2x) return;
    O7H.Xa2x = NEJ.C();
    WP2x = O7H.Xa2x.N7G(O7H.JB8t);
    WP2x.bB8t = function () {
        this.bG8y();
        window.clearTimeout(this.dJ9A);
        delete this.dJ9A;
        try {
            this.tb3x.onreadystatechange = br8j;
            this.tb3x.abort()
        } catch (e) {}
        delete this.tb3x
    };
    WP2x.cm8e = function () {
        var cFN4R = function (C7v, L7E) {
            this.tb3x.setRequestHeader(L7E, C7v)
        };
        return function (e7d) {
            var gp0x = e7d.request,
                pt2x = e7d.headers;
            this.tb3x = bg8Y.bnY7R();
            if (pt2x[eq9h.yH5M] === eq9h.Ht7m) {
                delete pt2x[eq9h.yH5M];
                this.tb3x.upload.onprogress = this.gz0x.f7c(this, 1);
                if (gp0x.data.tagName === "FORM") gp0x.data = new FormData(gp0x.data)
            }
            this.tb3x.onreadystatechange = this.gz0x.f7c(this, 2);
            if (gp0x.timeout != 0) {
                this.dJ9A = window.setTimeout(this.gz0x.f7c(this, 3), gp0x.timeout)
            }
            this.tb3x.open(gp0x.method, gp0x.url, !gp0x.sync);
            k7d.eH9y(pt2x, cFN4R, this);
            if (!!this.pN2x.cookie && "withCredentials" in this.tb3x) this.tb3x.withCredentials = !0;
            this.tb3x.send(gp0x.data)
        }
    }();
    WP2x.gz0x = function (u7n) {
        switch (u7n) {
            case 1:
                this.z7s("onuploading", arguments[1]);
                break;
            case 2:
                if (this.tb3x.readyState == 4) this.wr4v({
                    status: this.tb3x.status,
                    result: this.tb3x.responseText || ""
                });
                break;
            case 3:
                this.wr4v({
                    status: -1
                });
                break
        }
    };
    WP2x.kF1x = function () {
        this.wr4v({
            status: 0
        });
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var WK2x = {},
        Xd3x = [],
        bWP7I = /\s+/g,
        gW0x = +(new Date),
        JP8H, bT8L, hW0x;
    var Hy7r = function () {
        var gM0x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            kw1x = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            EP7I = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            bpj8b = /^new\s+/,
            cFL4P = /['"]/;
        var cFH4L = function (C7v) {
            if (gM0x.test(C7v)) return;
            C7v = C7v.split(".")[0].trim();
            if (!C7v || cFL4P.test(C7v)) return;
            C7v = C7v.replace(bpj8b, "");
            try {
                if (EP7I.test(C7v)) return;
                hW0x[C7v] = 1
            } catch (e) {}
        };
        return function (bp8h) {
            bp8h = bp8h || "";
            if (!bp8h || gM0x.test(bp8h)) return;
            var bt8l = bp8h.split(kw1x);
            for (var i = 0, l = bt8l.length; i < l; i++) cFH4L(bt8l[i])
        }
    }();
    var cFz4D = function (dK9B) {
        if (dK9B[2] != "in") throw "bad for loop statement: " + dK9B.join(" ");
        Xd3x.push(dK9B[1]);
        Hy7r(dK9B[3]);
        return "var __HASH__" + dK9B[1] + " = " + dK9B[3] + "," + dK9B[1] + "," + dK9B[1] + "_count=0;" + "if (!!__HASH__" + dK9B[1] + ")" + "for(var " + dK9B[1] + "_key in __HASH__" + dK9B[1] + "){" + dK9B[1] + " = __HASH__" + dK9B[1] + "[" + dK9B[1] + "_key];" + "if (typeof(" + dK9B[1] + ')=="function") continue;' + dK9B[1] + "_count++;"
    };
    var cFy4C = function () {
        var dK9B = Xd3x[Xd3x.length - 1];
        return "}; if(!__HASH__" + dK9B + "||!" + dK9B + "_count){"
    };
    var cFu4y = function () {
        Xd3x.pop();
        return "};"
    };
    var cFt4x = function (dK9B) {
        if (dK9B[2] != "as") throw "bad for list loop statement: " + dK9B.join(" ");
        var WC2x = dK9B[1].split("..");
        if (WC2x.length > 1) {
            Hy7r(WC2x[0]);
            Hy7r(WC2x[1]);
            return "for(var " + dK9B[3] + "," + dK9B[3] + "_index=0," + dK9B[3] + "_beg=" + WC2x[0] + "," + dK9B[3] + "_end=" + WC2x[1] + "," + dK9B[3] + "_length=parseInt(" + dK9B[3] + "_end-" + dK9B[3] + "_beg+1);" + dK9B[3] + "_index<" + dK9B[3] + "_length;" + dK9B[3] + "_index++){" + dK9B[3] + " = " + dK9B[3] + "_beg+" + dK9B[3] + "_index;"
        } else {
            Hy7r(dK9B[1]);
            return "for(var __LIST__" + dK9B[3] + " = " + dK9B[1] + "," + dK9B[3] + "," + dK9B[3] + "_index=0," + dK9B[3] + "_length=__LIST__" + dK9B[3] + ".length;" + dK9B[3] + "_index<" + dK9B[3] + "_length;" + dK9B[3] + "_index++){" + dK9B[3] + " = __LIST__" + dK9B[3] + "[" + dK9B[3] + "_index];"
        }
    };
    var cFs4w = function (dK9B) {
        if (!dK9B || !dK9B.length) return;
        dK9B.shift();
        var W7P = dK9B[0].split("(")[0];
        return "var " + W7P + " = function" + dK9B.join("").replace(W7P, "") + "{var __OUT=[];"
    };
    var cFp4t = function (dK9B) {
        if (!dK9B[1]) throw "bad include statement: " + dK9B.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var brP9G = function (kB1x, dK9B) {
        Hy7r(dK9B.slice(1).join(" "));
        return kB1x
    };
    var cFn4r = function (dK9B) {
        return brP9G("if(", dK9B)
    };
    var cFm4q = function (dK9B) {
        return brP9G("}else if(", dK9B)
    };
    var cFg4k = function (dK9B) {
        return brP9G("var ", dK9B)
    };
    bT8L = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cFn4r,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cFm4q,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cFz4D,
                pmin: 3
            },
            forelse: {
                pfix: cFy4C
            },
            "/for": {
                pfix: cFu4y
            },
            list: {
                pfix: cFt4x,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: cFg4k,
                sfix: ";"
            },
            macro: {
                pfix: cFs4w
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function () {
                    JP8H = !0
                }
            },
            "/trim": {
                pfix: function () {
                    JP8H = null
                }
            },
            inline: {
                pfix: cFp4t,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function (kB1x) {
                return (kB1x || "") + "" + gW0x
            },
            "default": function (C7v, kD1x) {
                return C7v || kD1x
            }
        }
    };
    var cFf4j = function () {
        var cFe4i = /\\([\{\}])/g;
        return function (bp8h, jK1x) {
            bp8h = bp8h.replace(cFe4i, "$1");
            var dK9B = bp8h.slice(1, -1).split(bWP7I),
                bi8a = bT8L.def[dK9B[0]];
            if (!bi8a) {
                Xt3x(bp8h, jK1x);
                return
            }
            if (!!bi8a.pmin && bi8a.pmin >= dK9B.length) throw "Statement needs more parameters:" + bp8h;
            jK1x.push(!!bi8a.pfix && typeof bi8a.pfix != "string" ? bi8a.pfix(dK9B) : bi8a.pfix || "");
            if (!!bi8a.sfix) {
                if (dK9B.length <= 1) {
                    if (!!bi8a.pdft) jK1x.push(bi8a.pdft)
                } else {
                    for (var i = 1, l = dK9B.length; i < l; i++) {
                        if (i > 1) jK1x.push(" ");
                        jK1x.push(dK9B[i])
                    }
                }
                jK1x.push(bi8a.sfix)
            }
        }
    }();
    var bWL7E = function (Kq8i, jK1x) {
        if (!Kq8i || !Kq8i.length) return;
        if (Kq8i.length == 1) {
            var btD9u = Kq8i.pop();
            Hy7r(btD9u);
            jK1x.push(btD9u == "" ? '""' : btD9u);
            return
        }
        var btK9B = Kq8i.pop().split(":");
        jK1x.push("__MDF['" + btK9B.shift() + "'](");
        bWL7E(Kq8i, jK1x);
        if (btK9B.length > 0) {
            var bh8Z = btK9B.join(":");
            Hy7r(bh8Z);
            jK1x.push("," + bh8Z)
        }
        jK1x.push(")")
    };
    var Xt3x = function (bp8h, jK1x) {
        if (!bp8h) return;
        var xK4O = bp8h.split("\n");
        if (!xK4O || !xK4O.length) return;
        for (var i = 0, l = xK4O.length, hJ0x; i < l; i++) {
            hJ0x = xK4O[i];
            if (!!JP8H) {
                hJ0x = hJ0x.trim();
                if (!hJ0x) continue
            }
            cEX4b(hJ0x, jK1x);
            if (!!JP8H && i < l - 1) jK1x.push("__OUT.push('\\n');")
        }
    };
    var cEX4b = function () {
        var cEM4Q = /\|\|/g,
            cEH4L = /#@@#/g;
        return function (bp8h, jK1x) {
            var VW2x = "}",
                VS2x = -1,
                bs8k = bp8h.length,
                xx4B, fZ9Q, KF8x, XW3x, VB2x;
            while (VS2x + VW2x.length < bs8k) {
                xx4B = "${";
                fZ9Q = "}";
                KF8x = bp8h.indexOf(xx4B, VS2x + VW2x.length);
                if (KF8x < 0) break;
                if (bp8h.charAt(KF8x + 2) == "%") {
                    xx4B = "${%";
                    fZ9Q = "%}"
                }
                XW3x = bp8h.indexOf(fZ9Q, KF8x + xx4B.length);
                if (XW3x < 0) break;
                Yd3x(bp8h.substring(VS2x + VW2x.length, KF8x), jK1x);
                VB2x = bp8h.substring(KF8x + xx4B.length, XW3x).replace(cEM4Q, "#@@#").split("|");
                for (var i = 0, l = VB2x.length; i < l; VB2x[i] = VB2x[i].replace(cEH4L, "||"), i++);
                jK1x.push("__OUT.push(");
                bWL7E(VB2x, jK1x);
                jK1x.push(");");
                VW2x = fZ9Q;
                VS2x = XW3x
            }
            Yd3x(bp8h.substring(VS2x + VW2x.length), jK1x)
        }
    }();
    var Yd3x = function () {
        var bz8r = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cEG4K = function (bp8h) {
            return (bp8h || "").replace(bz8r.r, function ($1) {
                return bz8r[$1] || $1
            })
        };
        return function (bp8h, jK1x) {
            if (!bp8h) return;
            jK1x.push("__OUT.push('" + cEG4K(bp8h) + "');")
        }
    }();
    var cEC4G = function () {
        var cEx4B = /\t/g,
            cEw4A = /\n/g,
            cEt4x = /\r\n?/g;
        var bWF7y = function (bp8h, xx4B) {
            var r7k = bp8h.indexOf("}", xx4B + 1);
            while (bp8h.charAt(r7k - 1) == "\\") {
                r7k = bp8h.indexOf("}", r7k + 1)
            }
            return r7k
        };
        var cEp4t = function () {
            var bt8l = [],
                Eo6i = arguments[0];
            for (var x in Eo6i) {
                x = (x || "").trim();
                if (!x) continue;
                bt8l.push(x + "=$v('" + x + "')")
            }
            return bt8l.length > 0 ? "var " + bt8l.join(",") + ";" : ""
        };
        return function (bp8h) {
            hW0x = {};
            bp8h = bp8h.replace(cEt4x, "\n").replace(cEx4B, "    ");
            var sw3x = ["if(!__CTX) return '';", ""];
            sw3x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            sw3x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            sw3x.push("__OUT=[];");
            var Ep6j = -1,
                bs8k = bp8h.length;
            var nJ2x, Mh9Y, UM2x, UL2x, BA6u, WS2x, byX0x, UH2x;
            while (Ep6j + 1 < bs8k) {
                nJ2x = Ep6j;
                nJ2x = bp8h.indexOf("{", nJ2x + 1);
                while (nJ2x >= 0) {
                    Mh9Y = bWF7y(bp8h, nJ2x);
                    UM2x = bp8h.substring(nJ2x, Mh9Y);
                    UL2x = UM2x.match(bT8L.blk);
                    if (!!UL2x) {
                        BA6u = UL2x[1].length + 1;
                        WS2x = bp8h.indexOf("}", nJ2x + BA6u);
                        if (WS2x >= 0) {
                            byX0x = WS2x - nJ2x - BA6u <= 0 ? "{/" + UL2x[1] + "}" : UM2x.substr(BA6u + 1);
                            BA6u = bp8h.indexOf(byX0x, WS2x + 1);
                            if (BA6u >= 0) {
                                Xt3x(bp8h.substring(Ep6j + 1, nJ2x), sw3x);
                                UH2x = bp8h.substring(WS2x + 1, BA6u);
                                switch (UL2x[1]) {
                                    case "cdata":
                                        Yd3x(UH2x, sw3x);
                                        break;
                                    case "minify":
                                        Yd3x(UH2x.replace(cEw4A, " ").replace(bWP7I, " "), sw3x);
                                        break;
                                    case "eval":
                                        if (!!UH2x) sw3x.push("__OUT.push((function(){" + UH2x + "})());");
                                        break
                                }
                                nJ2x = Ep6j = BA6u + byX0x.length - 1
                            }
                        }
                    } else if (bp8h.charAt(nJ2x - 1) != "$" && bp8h.charAt(nJ2x - 1) != "\\" && UM2x.substr(UM2x.charAt(1) == "/" ? 2 : 1).search(bT8L.tag) == 0) {
                        break
                    }
                    nJ2x = bp8h.indexOf("{", nJ2x + 1)
                }
                if (nJ2x < 0) break;
                Mh9Y = bWF7y(bp8h, nJ2x);
                if (Mh9Y < 0) break;
                Xt3x(bp8h.substring(Ep6j + 1, nJ2x), sw3x);
                cFf4j(bp8h.substring(nJ2x, Mh9Y + 1), sw3x);
                Ep6j = Mh9Y
            }
            Xt3x(bp8h.substring(Ep6j + 1), sw3x);
            sw3x.push(';return __OUT.join("");');
            sw3x[1] = cEp4t(hW0x);
            hW0x = null;
            return new Function("__CTX", "__MDF", sw3x.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gW0x
    };
    TrimPath.merge = function () {
        var UF2x = {};
        TrimPath.dump = function () {
            return {
                func: UF2x,
                text: WK2x
            }
        };
        return function (fn9e, i7b, jV1x) {
            try {
                i7b = i7b || {};
                if (!UF2x[fn9e] && !WK2x[fn9e]) return "";
                if (!UF2x[fn9e]) {
                    UF2x[fn9e] = cEC4G(WK2x[fn9e]);
                    delete WK2x[fn9e]
                }
                if (!!jV1x) {
                    for (var x in bT8L.ext)
                        if (!jV1x[x]) jV1x[x] = bT8L.ext[x]
                }
                return UF2x[fn9e](i7b, jV1x || bT8L.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var cEo4s = +(new Date);
        return function (bp8h, fn9e) {
            if (!bp8h) return "";
            fn9e = fn9e || "ck_" + cEo4s++;
            WK2x[fn9e] = bp8h;
            return fn9e
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        dV9M = {},
        bWE7x = {};
    a6g.Mx9o = TrimPath.seed;
    a6g.cc8U = function () {
        var bWD7w = function (D7w) {
            return !a6g.ij0x ? "" : a6g.ij0x(D7w)
        };
        return function (fn9e, i7b, jV1x) {
            i7b = NEJ.X(NEJ.X({}, bWE7x), i7b);
            i7b.inline = bWD7w;
            jV1x = NEJ.X(NEJ.X({}, dV9M), jV1x);
            jV1x.rand = k7d.oG2x;
            jV1x.format = k7d.id0x;
            jV1x.escape = k7d.dI9z;
            jV1x.inline = bWD7w;
            return TrimPath.merge(fn9e, i7b, jV1x)
        }
    }();
    a6g.ey9p = function (bp8h, cDV4Z) {
        if (!bp8h) return "";
        var fn9e, G7z = a6g.B7u(bp8h);
        if (!!G7z) {
            fn9e = G7z.id;
            bp8h = G7z.value || G7z.innerText;
            if (!cDV4Z) a6g.cO8G(G7z)
        }
        return TrimPath.parse(bp8h, fn9e)
    };
    a6g.dA9r = function (bH8z, fn9e, i7b, jV1x) {
        bH8z = a6g.B7u(bH8z);
        if (!!bH8z) bH8z.innerHTML = a6g.cc8U(fn9e, i7b, jV1x);
        return this
    };
    a6g.cGS5X = function (bz8r) {
        NEJ.X(dV9M, bz8r)
    };
    a6g.cDQ4U = function (bz8r) {
        NEJ.X(bWE7x, bz8r)
    };
    c7f("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var dz9q = NEJ.P("nej.p"),
        O7H = window,
        lF1x = dz9q.Ku8m,
        bWw7p = lF1x.ipad || lF1x.iphone;
    if (!bWw7p && !!O7H.requestAnimationFrame && !!O7H.cancelRequestAnimationFrame) return;
    var kB1x = dz9q.ds9j.prefix.pro;
    if (!bWw7p && !!O7H[kB1x + "RequestAnimationFrame"] && !!O7H[kB1x + "CancelRequestAnimationFrame"]) {
        O7H.requestAnimationFrame = O7H[kB1x + "RequestAnimationFrame"];
        O7H.cancelRequestAnimationFrame = O7H[kB1x + "CancelRequestAnimationFrame"];
        return
    }
    var Zx3x = lF1x.desktop ? 80 : lF1x.ios ? 50 : 30;
    O7H.requestAnimationFrame = function (cC8u) {
        return window.setTimeout(function () {
            try {
                cC8u(+(new Date))
            } catch (ex) {}
        }, 1e3 / Zx3x)
    };
    O7H.cancelRequestAnimationFrame = function (D7w) {
        window.clearTimeout(D7w);
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        k7d = c7f("nej.u"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        bg8Y = c7f("nej.h"),
        db8T = c7f("nej.x"),
        ZQ3x = c7f("nej.ut.j.cb"),
        gs0x;
    if (!!a6g.sm3x) return;
    a6g.sm3x = db8T.sm3x = function () {
        var R7K = {},
            gM0x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d7e) {
            var D7w = decodeURIComponent(d7e.target),
                u7n = d7e.type.toLowerCase();
            var dw9n = R7K[D7w + "-on" + u7n];
            if (!!dw9n) {
                try {
                    dw9n(d7e)
                } catch (e) {}
                return
            }
            var cE8w = R7K[D7w + "-tgt"];
            if (!!cE8w && gM0x.test(u7n)) {
                bWu7n(cE8w, d7e)
            }
        };
        var biQ6K = function (e7d) {
            var bH8z = a6g.B7u(e7d.parent) || document.body,
                dU9L = a6g.cc8U(gs0x, e7d);
            bH8z.insertAdjacentHTML(!e7d.hidden ? "beforeEnd" : "afterBegin", dU9L)
        };
        var bWu7n = function (D7w, d7e) {
            var u7n = d7e.type.toLowerCase();
            requestAnimationFrame(function () {
                h7a.z7s(D7w, u7n)
            })
        };
        var cDG4K = function (ib0x) {
            return !!ib0x && !!ib0x.inited && !!ib0x.inited()
        };
        var TJ2x = function (D7w) {
            var bt8l = [document.embeds[D7w], a6g.B7u(D7w), document[D7w], window[D7w]],
                r7k = k7d.eH9y(bt8l, cDG4K),
                ib0x = bt8l[r7k],
                bji6c = D7w + "-count";
            R7K[bji6c]++;
            if (!!ib0x || R7K[bji6c] > 100) {
                R7K[D7w](ib0x);
                delete R7K[D7w];
                delete R7K[bji6c];
                return
            }
            window.setTimeout(TJ2x.f7c(null, D7w), 300)
        };
        var cDF4J = function (e7d) {
            var D7w = e7d.id,
                cn8f = e7d.params;
            if (!cn8f) {
                cn8f = {};
                e7d.params = cn8f
            }
            var hW0x = cn8f.flashvars || "";
            hW0x += (!hW0x ? "" : "&") + ("id=" + D7w);
            if (!e7d.hidden && (!!e7d.target || bg8Y.bdo4s(cn8f.wmode))) {
                var hY0x = a6g.lQ1x(e7d.target) || a6g.lQ1x(e7d.parent),
                    bap3x = k7d.Xz3x();
                ZQ3x["cb" + bap3x] = bWu7n.f7c(null, hY0x);
                hW0x += "&onevent=nej.ut.j.cb.cb" + bap3x;
                R7K[D7w + "-tgt"] = hY0x
            }
            cn8f.flashvars = hW0x;
            k7d.eH9y(e7d, function (C7v, L7E) {
                if (k7d.gO0x(C7v) && L7E != "onready") {
                    R7K[D7w + "-" + L7E] = C7v
                }
            })
        };
        return function (e7d) {
            e7d = NEJ.X({}, e7d);
            if (!e7d.src) return;
            var D7w = "flash_" + k7d.Xz3x();
            e7d.id = D7w;
            cDF4J(e7d);
            biQ6K(e7d);
            if (!e7d.onready) return;
            R7K[D7w] = e7d.onready;
            R7K[D7w + "-count"] = 0;
            TJ2x(D7w)
        }
    }();
    gs0x = a6g.ey9p('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    db8T.isChange = !0
})();
(function () {
    var c7f = NEJ.P,
        iB0x = c7f("nej.c"),
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ut.j"),
        ZQ3x = c7f("nej.ut.j.cb"),
        R7K = {},
        gW0x = +(new Date),
        bjw6q;
    if (!!O7H.bjz6t) return;
    ZQ3x["ld" + gW0x] = function (L7E, cL8D) {
        var kf1x = R7K[L7E];
        if (!kf1x) return;
        delete R7K[L7E];
        kf1x.wr4v({
            status: 200,
            result: cL8D
        })
    };
    ZQ3x["er" + gW0x] = function (L7E, eA9r) {
        var kf1x = R7K[L7E];
        if (!kf1x) return;
        delete R7K[L7E];
        kf1x.wr4v({
            status: eA9r || 0
        })
    };
    O7H.bjz6t = NEJ.C();
    bjw6q = O7H.bjz6t.N7G(O7H.JB8t);
    bjw6q.cm8e = function (e7d) {
        var ib0x = R7K.flash;
        if (k7d.ec9T(ib0x)) {
            ib0x.push(this.cm8e.f7c(this, e7d));
            return
        }
        if (!ib0x) {
            R7K.flash = [this.cm8e.f7c(this, e7d)];
            a6g.sm3x({
                hidden: !0,
                src: iB0x.B7u("ajax.swf"),
                onready: function (ib0x) {
                    if (!ib0x) return;
                    var j7c = R7K.flash;
                    R7K.flash = ib0x;
                    k7d.nC2x(j7c, function (dw9n) {
                        try {
                            dw9n()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.DB6v = "swf-" + k7d.oG2x();
        R7K[this.DB6v] = this;
        var i7b = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e7d.request);
        i7b.key = this.DB6v;
        i7b.headers = e7d.headers;
        i7b.onerror = "nej.ut.j.cb.er" + gW0x;
        i7b.onloaded = "nej.ut.j.cb.ld" + gW0x;
        var bWt7m = iB0x.cwc2x(i7b.url);
        if (!!bWt7m) i7b.policyURL = bWt7m;
        ib0x.request(i7b)
    };
    bjw6q.kF1x = function () {
        delete R7K[this.DB6v];
        this.wr4v({
            status: 0
        });
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bg8Y = c7f("nej.h");
    bg8Y.bWs7l = function () {
        var dh9Y = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (lm1x) {
            lm1x = lm1x || "";
            if (dh9Y.test(lm1x)) return RegExp.$1;
            return "*"
        }
    }();
    bg8Y.bkm6g = function (i7b) {
        return i7b
    };
    bg8Y.bkE6y = function (baC3x, e7d) {
        if (!baC3x.postMessage) return;
        e7d = e7d || bb7U;
        baC3x.postMessage(bg8Y.bkm6g(e7d.data), bg8Y.bWs7l(e7d.origin))
    }
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ut"),
        b7g;
    if (!!O7H.fK9B) return;
    O7H.fK9B = NEJ.C();
    b7g = O7H.fK9B.N7G(O7H.cH8z);
    b7g.cv8n = function () {
        this.S7L = {};
        this.cD8v()
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.Ti1x = a6g.B7u(e7d.element) || window;
        this.bWr7k(e7d.event);
        this.cDA4E();
        this.z7s("oninit")
    };
    b7g.bB8t = function () {
        var Fm7f = function (C7v, L7E, bz8r) {
            if (!k7d.ec9T(C7v)) {
                k7d.XN3x(this.Ti1x, L7E)
            }
            delete bz8r[L7E]
        };
        return function () {
            this.bG8y();
            k7d.eH9y(this.S7L, Fm7f, this);
            delete this.Ti1x
        }
    }();
    b7g.baP3x = function (G7z, u7n) {
        G7z = a6g.B7u(G7z);
        return G7z == this.Ti1x && (!u7n || !!this.S7L["on" + u7n])
    };
    b7g.bWr7k = function (d7e) {
        if (k7d.fJ9A(d7e)) {
            var W7P = "on" + d7e;
            if (!this.S7L[W7P]) {
                this.S7L[W7P] = this.cDu4y.f7c(this, d7e)
            }
            this.bWo7h(d7e);
            return
        }
        if (k7d.ec9T(d7e)) {
            k7d.bd7W(d7e, this.bWr7k, this)
        }
    };
    b7g.bWo7h = function (u7n) {
        var d7e = "on" + u7n,
            dw9n = this.Ti1x[d7e],
            bWn7g = this.S7L[d7e];
        if (dw9n != bWn7g) {
            this.baQ3x(u7n);
            if (!!dw9n && dw9n != br8j) this.bWm6g(u7n, dw9n);
            this.Ti1x[d7e] = bWn7g
        }
    };
    b7g.bWm6g = function (u7n, dw9n, cDq4u) {
        var j7c = this.S7L[u7n];
        if (!j7c) {
            j7c = [];
            this.S7L[u7n] = j7c
        }
        if (k7d.gO0x(dw9n)) {
            !cDq4u ? j7c.push(dw9n) : j7c.unshift(dw9n)
        }
    };
    b7g.baQ3x = function (u7n, dw9n) {
        var j7c = this.S7L[u7n];
        if (!j7c || !j7c.length) return;
        if (!dw9n) {
            delete this.S7L[u7n];
            return
        }
        k7d.nC2x(j7c, function (C7v, r7k, IV8N) {
            if (dw9n === C7v) {
                IV8N.splice(r7k, 1);
                return !0
            }
        })
    };
    b7g.cDu4y = function (u7n, d7e) {
        d7e = d7e || {
            noargs: !0
        };
        d7e.type = u7n;
        this.z7s("ondispatch", d7e);
        if (!!d7e.stopped) return;
        k7d.bd7W(this.S7L[u7n], function (dw9n) {
            try {
                dw9n(d7e)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b7g.cDA4E = function () {
        var bml7e = function (d7e) {
            var bh8Z = d7e.args,
                u7n = bh8Z[1].toLowerCase();
            if (this.baP3x(bh8Z[0], u7n)) {
                d7e.stopped = !0;
                this.bWo7h(u7n);
                this.bWm6g(u7n, bh8Z[2], bh8Z[3]);
                this.z7s("oneventadd", {
                    type: u7n,
                    listener: bh8Z[2]
                })
            }
        };
        var cDn4r = function (d7e) {
            var bh8Z = d7e.args,
                u7n = bh8Z[1].toLowerCase();
            if (this.baP3x(bh8Z[0], u7n)) {
                d7e.stopped = !0;
                this.baQ3x(u7n, bh8Z[2])
            }
        };
        var biI6C = function (d7e) {
            var bh8Z = d7e.args,
                u7n = (bh8Z[1] || "").toLowerCase();
            if (this.baP3x(bh8Z[0])) {
                if (!!u7n) {
                    this.baQ3x(u7n);
                    return
                }
                k7d.eH9y(this.S7L, function (C7v, L7E) {
                    if (k7d.ec9T(C7v)) {
                        this.baQ3x(L7E)
                    }
                }, this)
            }
        };
        var cDm4q = function (d7e) {
            var bh8Z = d7e.args,
                u7n = bh8Z[1].toLowerCase();
            if (this.baP3x(bh8Z[0], u7n)) {
                d7e.stopped = !0;
                bh8Z[0]["on" + u7n].apply(bh8Z[0], bh8Z.slice(2))
            }
        };
        return function () {
            if (!!this.cDd4h) return;
            this.cDd4h = true;
            h7a.s7l = h7a.s7l.eL9C(bml7e.f7c(this));
            h7a.mL1x = h7a.mL1x.eL9C(cDn4r.f7c(this));
            h7a.ho0x = h7a.ho0x.eL9C(biI6C.f7c(this));
            h7a.z7s = h7a.z7s.eL9C(cDm4q.f7c(this))
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        O7H = c7f("nej.p"),
        bg8Y = c7f("nej.h"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut");
    if (O7H.nG2x.trident) return;
    if (!!window.postMessage) {
        bg8Y.bkm6g = bg8Y.bkm6g.eL9C(function (d7e) {
            d7e.stopped = !0;
            d7e.value = JSON.stringify(d7e.args[0])
        });
        return
    }
    var L7E = "MSG|",
        kx1x = [];
    var cDa4e = function () {
        var W7P = unescape(window.name || "").trim();
        if (!W7P || W7P.indexOf(L7E) != 0) return;
        window.name = "";
        var m7f = k7d.VA2x(W7P.replace(L7E, ""), "|"),
            lm1x = (m7f.origin || "").toLowerCase();
        if (!!lm1x && lm1x != "*" && location.href.toLowerCase().indexOf(lm1x) != 0) return;
        h7a.z7s(window, "message", {
            data: JSON.parse(m7f.data || "null"),
            source: window.frames[m7f.self] || m7f.self,
            origin: bg8Y.bWs7l(m7f.ref || document.referrer)
        })
    };
    var cCZ4d = function () {
        var baY4c;
        var cCY4c = function (bz8r, r7k, j7c) {
            if (k7d.dm9d(baY4c, bz8r.w) < 0) {
                baY4c.push(bz8r.w);
                j7c.splice(r7k, 1);
                bz8r.w.name = bz8r.d
            }
        };
        return function () {
            baY4c = [];
            k7d.nC2x(kx1x, cCY4c);
            baY4c = null
        }
    }();
    bg8Y.bkE6y = function () {
        var cCW4a = function (i7b) {
            var m7f = {};
            i7b = i7b || bb7U;
            m7f.origin = i7b.origin || "";
            m7f.ref = location.href;
            m7f.self = i7b.source;
            m7f.data = JSON.stringify(i7b.data);
            return L7E + k7d.wz4D(m7f, "|", !0)
        };
        return bg8Y.bkE6y.eL9C(function (d7e) {
            d7e.stopped = !0;
            var bh8Z = d7e.args;
            kx1x.unshift({
                w: bh8Z[0],
                d: escape(cCW4a(bh8Z[1]))
            })
        })
    }();
    I7B.fK9B.A7t({
        element: window,
        event: "message"
    });
    window.setInterval(cCZ4d, 100);
    window.setInterval(cDa4e, 20)
})();
(function () {
    var c7f = NEJ.P,
        bg8Y = c7f("nej.h"),
        a6g = c7f("nej.e"),
        v7o = c7f("nej.j");
    v7o.cCU4Y = function () {
        var fs9j = window.name || "_parent",
            cCO4S = {
                gG0x: window.top,
                fs9j: window,
                bH8z: window.parent
            };
        return function (cE8w, e7d) {
            if (typeof cE8w == "string") {
                cE8w = cCO4S[cE8w] || window.frames[cE8w];
                if (!cE8w) return this
            }
            var i7b = NEJ.X({
                origin: "*",
                source: fs9j
            }, e7d);
            bg8Y.bkE6y(cE8w, i7b);
            return this
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        iB0x = c7f("nej.c"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        O7H = c7f("nej.ut.j"),
        R7K = {},
        bbp4t;
    if (!!O7H.boe7X) return;
    O7H.boe7X = NEJ.C();
    bbp4t = O7H.boe7X.N7G(O7H.JB8t);
    bbp4t.cv8n = function () {
        var fg9X = "NEJ-AJAX-DATA:",
            GM7F = !1;
        var boj7c = function (d7e) {
            var i7b = d7e.data;
            if (i7b.indexOf(fg9X) != 0) return;
            i7b = JSON.parse(i7b.replace(fg9X, ""));
            var kf1x = R7K[i7b.key];
            if (!kf1x) return;
            delete R7K[i7b.key];
            i7b.result = decodeURIComponent(i7b.result || "");
            kf1x.wr4v(i7b)
        };
        var bok7d = function () {
            if (!GM7F) {
                GM7F = !0;
                h7a.s7l(window, "message", boj7c)
            }
        };
        return function () {
            this.cD8v();
            bok7d()
        }
    }();
    bbp4t.cm8e = function (e7d) {
        var gp0x = e7d.request,
            kf1x = iB0x.ckp0x(gp0x.url),
            ep9g = R7K[kf1x];
        if (k7d.ec9T(ep9g)) {
            ep9g.push(this.cm8e.f7c(this, e7d));
            return
        }
        if (!ep9g) {
            R7K[kf1x] = [this.cm8e.f7c(this, e7d)];
            a6g.bcR4V({
                src: kf1x,
                visible: !1,
                onload: function (d7e) {
                    var j7c = R7K[kf1x];
                    R7K[kf1x] = h7a.X7Q(d7e).contentWindow;
                    k7d.nC2x(j7c, function (dw9n) {
                        try {
                            dw9n()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.DB6v = "frm-" + k7d.oG2x();
        R7K[this.DB6v] = this;
        var i7b = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, gp0x);
        i7b.key = this.DB6v;
        i7b.headers = e7d.headers;
        v7o.cCU4Y(R7K[kf1x], {
            data: i7b
        })
    };
    bbp4t.kF1x = function () {
        delete R7K[this.DB6v];
        this.wr4v({
            status: 0
        });
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        eq9h = c7f("nej.g"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        O7H = c7f("nej.ut.j"),
        R7K = {},
        Jg8Y;
    if (!!O7H.bom7f) return;
    O7H.bom7f = NEJ.C();
    Jg8Y = O7H.bom7f.N7G(O7H.JB8t);
    Jg8Y.cv8n = function () {
        var fg9X = "NEJ-UPLOAD-RESULT:",
            GM7F = !1;
        var boj7c = function (d7e) {
            var i7b = d7e.data;
            if (i7b.indexOf(fg9X) != 0) return;
            i7b = JSON.parse(i7b.replace(fg9X, ""));
            var kf1x = R7K[i7b.key];
            if (!kf1x) return;
            delete R7K[i7b.key];
            kf1x.wr4v(decodeURIComponent(i7b.result))
        };
        var bok7d = function () {
            if (!GM7F) {
                GM7F = !0;
                h7a.s7l(window, "message", boj7c)
            }
        };
        return function () {
            this.cD8v();
            bok7d()
        }
    }();
    Jg8Y.bB8t = function () {
        this.bG8y();
        a6g.cO8G(this.boo7h);
        delete this.boo7h;
        window.clearTimeout(this.dJ9A);
        delete this.dJ9A
    };
    Jg8Y.wr4v = function (cL8D) {
        var Q7J;
        try {
            Q7J = JSON.parse(cL8D);
            this.z7s("onload", Q7J)
        } catch (e) {
            this.z7s("onerror", {
                code: eq9h.caO7H,
                message: cL8D
            })
        }
    };
    Jg8Y.cm8e = function () {
        var cCL4P = function () {
            var nd1x, cL8D;
            try {
                var nd1x = this.boo7h.contentWindow.document.body,
                    cL8D = nd1x.innerText || nd1x.textContent
            } catch (e) {
                return
            }
            this.wr4v(cL8D)
        };
        var boN8F = function (Y7R, fu9l, te3x) {
            v7o.bk8c(Y7R, {
                type: "json",
                method: "POST",
                cookie: te3x,
                mode: parseInt(fu9l) || 0,
                onload: function (i7b) {
                    if (!this.dJ9A) return;
                    this.z7s("onuploading", i7b);
                    this.dJ9A = window.setTimeout(boN8F.f7c(this, Y7R, fu9l, te3x), 1e3)
                }.f7c(this),
                onerror: function (bY8Q) {
                    if (!this.dJ9A) return;
                    this.dJ9A = window.setTimeout(boN8F.f7c(this, Y7R, fu9l, te3x), 1e3)
                }.f7c(this)
            })
        };
        return function (e7d) {
            var gp0x = e7d.request,
                pt2x = e7d.headers,
                fl9c = gp0x.data,
                W7P = "fom-" + k7d.oG2x();
            R7K[W7P] = this;
            fl9c.target = W7P;
            fl9c.method = "POST";
            fl9c.enctype = eq9h.Ht7m;
            fl9c.encoding = eq9h.Ht7m;
            var Y7R = fl9c.action || "",
                lL1x = Y7R.indexOf("?") <= 0 ? "?" : "&";
            fl9c.action = Y7R + lL1x + "_proxy_=form";
            this.boo7h = a6g.bcR4V({
                name: W7P,
                onload: function (d7e) {
                    var ep9g = h7a.X7Q(d7e);
                    h7a.s7l(ep9g, "load", cCL4P.f7c(this));
                    fl9c.submit();
                    var bWb6V = (fl9c.nej_query || bb7U).value;
                    if (!bWb6V) return;
                    var fu9l = (fl9c.nej_mode || bb7U).value,
                        te3x = (fl9c.nej_cookie || bb7U).value == "true";
                    this.dJ9A = window.setTimeout(boN8F.f7c(this, bWb6V, fu9l, te3x), 100)
                }.f7c(this)
            })
        }
    }();
    Jg8Y.kF1x = function () {
        this.z7s("onerror", {
            code: eq9h.cgj9a,
            message: "客户端终止文件上传"
        });
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        bg8Y = c7f("nej.h"),
        O7H = c7f("nej.ut.j");
    bg8Y.bnY7R = function () {
        return new XMLHttpRequest
    };
    bg8Y.bqj8b = function (fu9l, bbz4D, e7d) {
        var bz8r = !!bbz4D ? {
            2: O7H.bom7f
        } : {
            2: O7H.boe7X,
            3: O7H.bjz6t
        };
        return (bz8r[fu9l] || O7H.Xa2x).A7t(e7d)
    }
})();
(function () {
    var c7f = NEJ.P,
        O7H = c7f("nej.p"),
        bg8Y = c7f("nej.h");
    if (O7H.nG2x.trident) return;
    bg8Y.bnY7R = function () {
        var Ro1x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cCH4L = function () {
            for (var i = 0, l = Ro1x.length; i < l; i++) {
                try {
                    return new ActiveXObject(Ro1x[i])
                } catch (e) {}
            }
            return null
        };
        return bg8Y.bnY7R.eL9C(function (d7e) {
            if (!!window.XMLHttpRequest) return;
            d7e.stopped = !0;
            d7e.value = cCH4L()
        })
    }();
    bg8Y.bqj8b = function () {
        var Is8k = {
            0: 2,
            1: 3
        };
        return bg8Y.bqj8b.eL9C(function (d7e) {
            var bh8Z = d7e.args,
                fu9l = bh8Z[0] || 0;
            bh8Z[0] = !!bh8Z[1] ? 2 : Is8k[fu9l] || fu9l
        })
    }()
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        bg8Y = c7f("nej.h"),
        eq9h = c7f("nej.g"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        O7H = c7f("nej.ut.j"),
        oe2x = {},
        Ns9j = br8j;
    v7o.kF1x = function (fn9e) {
        var R7K = oe2x[fn9e];
        if (!R7K) return this;
        R7K.req.kF1x();
        return this
    };
    v7o.bbE4I = function (ed9U) {
        Ns9j = ed9U || br8j;
        return this
    };
    v7o.bk8c = function () {
        var jQ1x = (location.protocol + "//" + location.host).toLowerCase();
        var cCG4K = function (Y7R) {
            var lm1x = k7d.cCB4F(Y7R);
            return !!lm1x && lm1x != jQ1x
        };
        var cCF4J = function (pt2x) {
            return (pt2x || bb7U)[eq9h.yH5M] == eq9h.Ht7m
        };
        var cCE4I = function (e7d) {
            var bbz4D = cCF4J(e7d.headers);
            if (!cCG4K(e7d.url) && !bbz4D) return O7H.Xa2x.A7t(e7d);
            return bg8Y.bqj8b(e7d.mode, bbz4D, e7d)
        };
        var Fm7f = function (fn9e) {
            var R7K = oe2x[fn9e];
            if (!R7K) return;
            if (!!R7K.req) R7K.req.T7M();
            delete oe2x[fn9e]
        };
        var bWa6U = function (fn9e, u7n) {
            var R7K = oe2x[fn9e];
            if (!R7K) return;
            Fm7f(fn9e);
            try {
                var d7e = {
                    type: u7n,
                    result: arguments[2]
                };
                Ns9j(d7e);
                if (!d7e.stopped)(R7K[u7n] || br8j)(d7e.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var Ab5g = function (fn9e, i7b) {
            bWa6U(fn9e, "onload", i7b)
        };
        var Cm6g = function (fn9e, bY8Q) {
            bWa6U(fn9e, "onerror", bY8Q)
        };
        return function (Y7R, e7d) {
            e7d = e7d || {};
            var fn9e = k7d.oG2x(),
                R7K = {
                    onload: e7d.onload || br8j,
                    onerror: e7d.onerror || br8j
                };
            oe2x[fn9e] = R7K;
            e7d.onload = Ab5g.f7c(null, fn9e);
            e7d.onerror = Cm6g.f7c(null, fn9e);
            if (!!e7d.query) {
                var lL1x = Y7R.indexOf("?") < 0 ? "?" : "&",
                    bv8n = e7d.query;
                if (k7d.lY1x(bv8n)) bv8n = k7d.cz8r(bv8n);
                if (!!bv8n) Y7R += lL1x + bv8n
            }
            e7d.url = Y7R;
            R7K.req = cCE4I(e7d);
            R7K.req.bmf7Y(e7d.data);
            return fn9e
        }
    }();
    v7o.ia0x = function (fl9c, e7d) {
        var dO9F = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(dO9F, e7d);
        dO9F.data = fl9c;
        dO9F.method = "POST";
        dO9F.timeout = 0;
        dO9F.headers[eq9h.yH5M] = eq9h.Ht7m;
        return v7o.bk8c(fl9c.action, dO9F)
    }
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        eq9h = c7f("nej.g"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        O7H = c7f("nej.ut.j"),
        nh1x, hd0x = 6e4;
    if (!!O7H.Si1x) return;
    O7H.Si1x = NEJ.C();
    nh1x = O7H.Si1x.N7G(I7B.cH8z);
    nh1x.cv8n = function () {
        this.cD8v();
        this.Sh1x = {
            onerror: this.cCA4E.f7c(this),
            onloaded: this.cCx4B.f7c(this)
        };
        if (!this.constructor.S7L) this.constructor.S7L = {
            loaded: {}
        }
    };
    nh1x.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.JS8K = e7d.version;
        this.bty9p = e7d.timeout;
        this.Sh1x.version = this.JS8K;
        this.Sh1x.timeout = this.bty9p
    };
    nh1x.bVZ6T = function (L7E) {
        delete this.constructor.S7L[L7E]
    };
    nh1x.Cw6q = function (L7E) {
        return this.constructor.S7L[L7E]
    };
    nh1x.bVX6R = function (L7E, i7b) {
        this.constructor.S7L[L7E] = i7b
    };
    nh1x.bcv4z = br8j;
    nh1x.bVW6Q = function (gp0x) {
        h7a.ho0x(gp0x)
    };
    nh1x.buj9a = function (gp0x) {
        gp0x.src = this.kT1x;
        document.head.appendChild(gp0x)
    };
    nh1x.CL6F = function () {
        var R7K = this.Cw6q(this.kT1x);
        if (!R7K) return;
        window.clearTimeout(R7K.timer);
        this.bVW6Q(R7K.request);
        delete R7K.bind;
        delete R7K.timer;
        delete R7K.request;
        this.bVZ6T(this.kT1x);
        this.Cw6q("loaded")[this.kT1x] = !0
    };
    nh1x.bcP4T = function (W7P) {
        var R7K = this.Cw6q(this.kT1x);
        if (!R7K) return;
        var j7c = R7K.bind;
        this.CL6F();
        if (!!j7c && j7c.length > 0) {
            var cF8x;
            while (j7c.length) {
                cF8x = j7c.shift();
                try {
                    cF8x.z7s(W7P, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cF8x.T7M()
            }
        }
    };
    nh1x.dQ9H = function (bY8Q) {
        this.bcP4T("onerror", bY8Q)
    };
    nh1x.bVV6P = function () {
        this.bcP4T("onloaded")
    };
    nh1x.cCf4j = function (Y7R) {
        this.constructor.A7t(this.Sh1x).KC8u(Y7R)
    };
    nh1x.bVS6M = function (bY8Q) {
        var R7K = this.Cw6q(this.yc5h);
        if (!R7K) return;
        if (!!bY8Q) R7K.error++;
        R7K.loaded++;
        if (R7K.loaded < R7K.total) return;
        this.bVZ6T(this.yc5h);
        this.z7s(R7K.error > 0 ? "onerror" : "onloaded")
    };
    nh1x.cCA4E = function (bY8Q) {
        this.bVS6M(!0)
    };
    nh1x.cCx4B = function () {
        this.bVS6M()
    };
    nh1x.KC8u = function (Y7R) {
        Y7R = k7d.brw8o(Y7R);
        if (!Y7R) {
            this.z7s("onerror", {
                code: eq9h.bqc8U,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.kT1x = Y7R;
        if (!!this.JS8K) this.kT1x += (this.kT1x.indexOf("?") < 0 ? "?" : "&") + this.JS8K;
        if (this.Cw6q("loaded")[this.kT1x]) {
            try {
                this.z7s("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T7M();
            return this
        }
        var R7K = this.Cw6q(this.kT1x),
            gp0x;
        if (!!R7K) {
            R7K.bind.unshift(this);
            R7K.timer = window.clearTimeout(R7K.timer)
        } else {
            gp0x = this.bcv4z();
            R7K = {
                request: gp0x,
                bind: [this]
            };
            this.bVX6R(this.kT1x, R7K);
            h7a.s7l(gp0x, "load", this.bVV6P.f7c(this));
            h7a.s7l(gp0x, "error", this.dQ9H.f7c(this, {
                code: eq9h.bza0x,
                message: "无法加载指定资源文件[" + this.kT1x + "]！"
            }))
        }
        if (this.bty9p != 0) R7K.timer = window.setTimeout(this.dQ9H.f7c(this, {
            code: eq9h.bDZ1x,
            message: "指定资源文件[" + this.kT1x + "]载入超时！"
        }), this.bty9p || hd0x);
        if (!!gp0x) this.buj9a(gp0x);
        this.z7s("onloading");
        return this
    };
    nh1x.bVQ6K = function (j7c) {
        if (!j7c || !j7c.length) {
            this.z7s("onerror", {
                code: eq9h.bqc8U,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.yc5h = k7d.oG2x();
        var R7K = {
            error: 0,
            loaded: 0,
            total: j7c.length
        };
        this.bVX6R(this.yc5h, R7K);
        for (var i = 0, l = j7c.length; i < l; i++) {
            if (!j7c[i]) {
                R7K.total--;
                continue
            }
            this.cCf4j(j7c[i])
        }
        this.z7s("onloading");
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        bg8Y = c7f("nej.h"),
        O7H = c7f("nej.ut.j"),
        Rv1x;
    if (!!O7H.bwh0x) return;
    O7H.bwh0x = NEJ.C();
    Rv1x = O7H.bwh0x.N7G(O7H.Si1x);
    Rv1x.bcv4z = function () {
        var eV9M = a6g.dk9b("iframe");
        eV9M.width = 0;
        eV9M.height = 0;
        eV9M.style.display = "none";
        return eV9M
    };
    Rv1x.buj9a = function (gp0x) {
        gp0x.src = this.kT1x;
        document.body.appendChild(gp0x)
    };
    Rv1x.dQ9H = function (bY8Q) {
        var eV9M = (this.Cw6q(this.kT1x) || bb7U).request;
        this.bcP4T("onerror", bY8Q);
        bg8Y.bdh4l(eV9M)
    };
    Rv1x.bVV6P = function () {
        var nd1x = null,
            eV9M = (this.Cw6q(this.kT1x) || bb7U).request;
        try {
            nd1x = eV9M.contentWindow.document.body
        } catch (ex) {}
        this.bcP4T("onloaded", nd1x);
        bg8Y.bdh4l(eV9M)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        O7H = c7f("nej.ut.j"),
        bwk0x;
    if (!!O7H.bcW4a) return;
    O7H.bcW4a = NEJ.C();
    bwk0x = O7H.bcW4a.N7G(O7H.Si1x);
    bwk0x.bcv4z = function () {
        return a6g.dk9b("link")
    };
    bwk0x.buj9a = function (gp0x) {
        gp0x.href = this.kT1x;
        document.head.appendChild(gp0x)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        O7H = c7f("nej.ut.j"),
        bcY4c;
    if (!!O7H.bdb4f) return;
    O7H.bdb4f = NEJ.C();
    bcY4c = O7H.bdb4f.N7G(O7H.Si1x);
    bcY4c.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.bVP6J = e7d.async;
        this.bwO0x = e7d.charset;
        this.Sh1x.async = !1;
        this.Sh1x.charset = this.bwO0x
    };
    bcY4c.bcv4z = function () {
        var gp0x = a6g.dk9b("script");
        if (this.bVP6J != null) gp0x.async = !!this.bVP6J;
        if (this.bwO0x != null) gp0x.charset = this.bwO0x;
        return gp0x
    };
    bcY4c.bVW6Q = function (gp0x) {
        a6g.cO8G(gp0x)
    }
})();
(function () {
    var c7f = NEJ.P,
        v7o = c7f("nej.j"),
        O7H = c7f("nej.ut.j");
    v7o.cCa4e = function (Y7R, e7d) {
        O7H.bdb4f.A7t(e7d).KC8u(Y7R);
        return this
    };
    v7o.cBZ4d = function (j7c, e7d) {
        O7H.bdb4f.A7t(e7d).bVQ6K(j7c);
        return this
    };
    v7o.cGU5Z = function (Y7R, e7d) {
        O7H.bcW4a.A7t(e7d).KC8u(Y7R);
        return this
    };
    v7o.cBX4b = function (j7c, e7d) {
        O7H.bcW4a.A7t(e7d).bVQ6K(j7c);
        return this
    };
    v7o.bVO6I = function (Y7R, e7d) {
        O7H.bwh0x.A7t(e7d).KC8u(Y7R);
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        R7K = {},
        tC3x = +(new Date) + "-";
    a6g.cU8M = function () {
        var cA8s = 0;
        var Rk1x = function () {
            if (cA8s > 0) return;
            cA8s = 0;
            h7a.z7s(document, "templateready");
            h7a.ho0x(document, "templateready")
        };
        var bdg4k = function (gr0x, e7d) {
            var cY8Q = a6g.t7m(gr0x, "src");
            if (!cY8Q) return;
            e7d = e7d || bb7U;
            var gj0x = e7d.root;
            if (!gj0x) {
                gj0x = gr0x.ownerDocument.location.href
            } else {
                gj0x = k7d.brw8o(gj0x)
            }
            cY8Q = cY8Q.split(",");
            k7d.bd7W(cY8Q, function (C7v, r7k, j7c) {
                j7c[r7k] = k7d.brw8o(C7v, gj0x)
            });
            return cY8Q
        };
        var cBV4Z = function (gr0x, e7d) {
            if (!gr0x) return;
            var cY8Q = bdg4k(gr0x, e7d);
            if (!!cY8Q) v7o.cBX4b(cY8Q, {
                version: a6g.t7m(gr0x, "version")
            });
            a6g.bSw6q(gr0x.value)
        };
        var cBU4Y = function (C7v) {
            cA8s--;
            a6g.bSz6t(C7v);
            Rk1x()
        };
        var cBQ3x = function (gr0x, e7d) {
            if (!gr0x) return;
            var cY8Q = bdg4k(gr0x, e7d),
                fA9r = gr0x.value;
            if (!!cY8Q) {
                cA8s++;
                var e7d = {
                    version: a6g.t7m(gr0x, "version"),
                    onloaded: cBU4Y.f7c(null, fA9r)
                };
                window.setTimeout(v7o.cBZ4d.f7c(v7o, cY8Q, e7d), 0);
                return
            }
            a6g.bSz6t(fA9r)
        };
        var cBP3x = function (nd1x) {
            cA8s--;
            a6g.cU8M(nd1x);
            Rk1x()
        };
        var cBM3x = function (gr0x, e7d) {
            if (!gr0x) return;
            var cY8Q = bdg4k(gr0x, e7d)[0];
            if (!!cY8Q) {
                cA8s++;
                var e7d = {
                    version: a6g.t7m(gr0x, "version"),
                    onloaded: cBP3x
                };
                window.setTimeout(v7o.bVO6I.f7c(v7o, cY8Q, e7d), 0)
            }
        };
        var cBL3x = function (D7w, cL8D) {
            cA8s--;
            a6g.KY8Q(D7w, cL8D || "");
            Rk1x()
        };
        var cBJ3x = function (gr0x, e7d) {
            if (!gr0x || !gr0x.id) return;
            var D7w = gr0x.id,
                cY8Q = bdg4k(gr0x, e7d)[0];
            if (!!cY8Q) {
                cA8s++;
                var Y7R = cY8Q + (cY8Q.indexOf("?") < 0 ? "?" : "&") + (a6g.t7m(gr0x, "version") || ""),
                    e7d = {
                        type: "text",
                        method: "GET",
                        onload: cBL3x.f7c(null, D7w)
                    };
                window.setTimeout(v7o.bk8c.f7c(v7o, Y7R, e7d), 0)
            }
        };
        var cBH3x = function (g7b, e7d) {
            var u7n = g7b.name.toLowerCase();
            switch (u7n) {
                case "jst":
                    a6g.ey9p(g7b, !0);
                    return;
                case "txt":
                    a6g.KY8Q(g7b.id, g7b.value || "");
                    return;
                case "ntp":
                    a6g.jz0x(g7b.value || "", g7b.id);
                    return;
                case "js":
                    cBQ3x(g7b, e7d);
                    return;
                case "css":
                    cBV4Z(g7b, e7d);
                    return;
                case "html":
                    cBM3x(g7b, e7d);
                    return;
                case "res":
                    cBJ3x(g7b, e7d);
                    return
            }
        };
        I7B.fK9B.A7t({
            element: document,
            event: "templateready",
            oneventadd: Rk1x
        });
        return function (G7z, e7d) {
            G7z = a6g.B7u(G7z);
            if (!!G7z) {
                var j7c = G7z.tagName == "TEXTAREA" ? [G7z] : G7z.getElementsByTagName("textarea");
                k7d.bd7W(j7c, function (g7b) {
                    cBH3x(g7b, e7d)
                });
                a6g.cO8G(G7z, !0)
            }
            Rk1x();
            return this
        }
    }();
    a6g.KY8Q = function (L7E, C7v) {
        R7K[L7E] = C7v || "";
        return this
    };
    a6g.ij0x = function (L7E) {
        return R7K[L7E] || ""
    };
    a6g.jz0x = function (G7z, L7E) {
        L7E = L7E || k7d.oG2x();
        G7z = a6g.B7u(G7z) || G7z;
        a6g.KY8Q(tC3x + L7E, G7z);
        a6g.mO1x(G7z);
        return L7E
    };
    a6g.dD9u = function (L7E) {
        if (!L7E) return null;
        L7E = tC3x + L7E;
        var C7v = a6g.ij0x(L7E);
        if (!C7v) return null;
        if (k7d.fJ9A(C7v)) {
            C7v = a6g.nY2x(C7v);
            a6g.KY8Q(L7E, C7v)
        }
        return C7v.cloneNode(!0)
    };
    a6g.CX6R = function () {
        var Ns9j = function (C7v, L7E) {
            return L7E == "offset" || L7E == "limit"
        };
        return function (j7c, p7i, e7d) {
            var bt8l = [];
            if (!j7c || !j7c.length || !p7i) return bt8l;
            e7d = e7d || bb7U;
            var dt9k = j7c.length,
                kk1x = parseInt(e7d.offset) || 0,
                fZ9Q = Math.min(dt9k, kk1x + (parseInt(e7d.limit) || dt9k)),
                cu8m = {
                    total: j7c.length,
                    range: [kk1x, fZ9Q]
                };
            NEJ.X(cu8m, e7d, Ns9j);
            for (var i = kk1x, cF8x; i < fZ9Q; i++) {
                cu8m.index = i;
                cu8m.data = j7c[i];
                cF8x = p7i.A7t(cu8m);
                var D7w = cF8x.GW7P();
                R7K[D7w] = cF8x;
                cF8x.T7M = cF8x.T7M.eL9C(function (D7w, cF8x) {
                    delete R7K[D7w];
                    delete cF8x.T7M
                }.f7c(null, D7w, cF8x));
                bt8l.push(cF8x)
            }
            return bt8l
        }
    }();
    a6g.bVJ6D = function (D7w) {
        return R7K[D7w]
    };
    a6g.cGV5a = function (ef9W, e7d) {
        e7d = e7d || bb7U;
        a6g.cU8M(e7d.tid || "template-box");
        h7a.s7l(document, "templateready", function () {
            ef9W.A7t().z7s("onshow", e7d)
        })
    };
    c7f("dbg").dumpTC = function () {
        return R7K
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        O7H = c7f("nej.ui"),
        b7g;
    if (!!O7H.eo9f) return;
    O7H.eo9f = NEJ.C();
    b7g = O7H.eo9f.N7G(I7B.cH8z);
    b7g.cv8n = function () {
        this.cD8v();
        a6g.bRw5B();
        this.cf8X();
        this.bV8N()
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.cBy3x(e7d.clazz);
        this.bVE6y(e7d.parent)
    };
    b7g.bB8t = function () {
        this.bG8y();
        this.bVC6w();
        delete this.go0x;
        a6g.mO1x(this.o7h);
        a6g.y7r(this.o7h, this.biF6z);
        delete this.biF6z
    };
    b7g.cf8X = br8j;
    b7g.bV8N = function () {
        if (!this.ce8W) this.Lk8c();
        this.o7h = a6g.dD9u(this.ce8W);
        if (!this.o7h) this.o7h = a6g.dk9b("div", this.mt1x);
        a6g.w7p(this.o7h, this.mt1x)
    };
    b7g.Lk8c = br8j;
    b7g.cBy3x = function (eg9X) {
        this.biF6z = eg9X || "";
        a6g.w7p(this.o7h, this.biF6z)
    };
    b7g.cBu3x = function () {
        if (!this.mt1x) return;
        a6g.w7p(this.go0x, this.mt1x + "-parent")
    };
    b7g.bVC6w = function () {
        if (!this.mt1x) return;
        a6g.y7r(this.go0x, this.mt1x + "-parent")
    };
    b7g.md1x = function () {
        return this.o7h
    };
    b7g.bVE6y = function (bH8z) {
        if (!this.o7h) return this;
        this.bVC6w();
        if (k7d.gO0x(bH8z)) {
            this.go0x = bH8z(this.o7h)
        } else {
            this.go0x = a6g.B7u(bH8z);
            if (!!this.go0x) this.go0x.appendChild(this.o7h)
        }
        this.cBu3x();
        return this
    };
    b7g.J7C = function () {
        if (!this.go0x || !this.o7h || this.o7h.parentNode == this.go0x) return this;
        this.go0x.appendChild(this.o7h);
        return this
    };
    b7g.bq8i = function () {
        a6g.mO1x(this.o7h);
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        bg8Y = c7f("nej.h"),
        O7H = c7f("nej.ui"),
        yg5l, bVA6u;
    if (!!O7H.QB0x) return;
    O7H.QB0x = NEJ.C();
    yg5l = O7H.QB0x.N7G(O7H.eo9f);
    bVA6u = O7H.QB0x.cr8j;
    yg5l.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.xE4I("oncontentready", e7d.oncontentready || this.cBr3x.f7c(this));
        this.cBq3x = !!e7d.nohack;
        this.cBm3x = !!e7d.destroyable;
        this.LK8C(e7d.content)
    };
    yg5l.bB8t = function () {
        this.z7s("onbeforerecycle");
        this.bG8y();
        this.bdX4b();
        this.LK8C("");
        a6g.fh9Y(this.o7h, {
            top: "",
            left: ""
        })
    };
    yg5l.cBr3x = br8j;
    yg5l.LN8F = br8j;
    yg5l.bdX4b = function () {
        a6g.mO1x(this.o7h);
        if (!!this.ox2x) {
            this.ox2x = bg8Y.bxx0x(this.o7h);
            delete this.ox2x
        }
    };
    yg5l.LK8C = function (bp8h) {
        if (!this.o7h || !this.Dl6f || bp8h == null) return this;
        bp8h = bp8h || "";
        k7d.fJ9A(bp8h) ? this.Dl6f.innerHTML = bp8h : this.Dl6f.appendChild(bp8h);
        this.z7s("oncontentready", this.Dl6f);
        return this
    };
    yg5l.gL0x = function (bj8b) {
        var C7v = bj8b.top;
        if (C7v != null) {
            C7v += "px";
            a6g.ba7T(this.o7h, "top", C7v);
            a6g.ba7T(this.ox2x, "top", C7v)
        }
        var C7v = bj8b.left;
        if (C7v != null) {
            C7v += "px";
            a6g.ba7T(this.o7h, "left", C7v);
            a6g.ba7T(this.ox2x, "left", C7v)
        }
        return this
    };
    yg5l.J7C = function () {
        a6g.ba7T(this.o7h, "visibility", "hidden");
        bVA6u.J7C.apply(this, arguments);
        this.LN8F();
        a6g.ba7T(this.o7h, "visibility", "");
        if (!this.cBq3x) {
            this.ox2x = bg8Y.ox2x(this.o7h)
        }
        return this
    };
    yg5l.bq8i = function () {
        this.cBm3x ? this.T7M() : this.bdX4b();
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        k7d = c7f("nej.u"),
        a6g = c7f("nej.e"),
        O7H = c7f("nej.ui"),
        Dm6g;
    if (!!O7H.bem4q) return;
    O7H.bem4q = NEJ.C();
    Dm6g = O7H.bem4q.N7G(O7H.eo9f);
    Dm6g.bm8e = function (e7d) {
        this.PY0x();
        this.bn8f(this.cBl3x(e7d));
        this.ci8a.onbeforerecycle = this.T7M.f7c(this);
        this.pl2x = this.bkL6F()
    };
    Dm6g.bB8t = function () {
        this.z7s("onbeforerecycle");
        this.bG8y();
        delete this.ci8a;
        a6g.mO1x(this.o7h);
        var Dp6j = this.pl2x;
        if (!!Dp6j) {
            delete this.pl2x;
            Dp6j.T7M()
        }
    };
    Dm6g.bkL6F = br8j;
    Dm6g.cBl3x = function (e7d) {
        var m7f = {};
        k7d.eH9y(e7d, function (p7i, L7E) {
            this.ci8a.hasOwnProperty(L7E) ? this.ci8a[L7E] = p7i : m7f[L7E] = p7i
        }, this);
        return m7f
    };
    Dm6g.PY0x = function () {
        this.ci8a = {
            clazz: "",
            parent: null,
            content: this.o7h,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    Dm6g.J7C = function () {
        if (!!this.pl2x) this.pl2x.J7C();
        this.z7s("onaftershow");
        return this
    };
    Dm6g.bq8i = function () {
        if (!!this.pl2x) this.pl2x.bq8i();
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        eq9h = c7f("nej.g"),
        bg8Y = c7f("nej.h"),
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        O7H = c7f("nej.ui"),
        PA0x, bVz6t;
    if (!!O7H.Mu9l) return;
    var iX0x = a6g.uK4O(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + eq9h.bkK6E + ");}");
    O7H.Mu9l = NEJ.C();
    PA0x = O7H.Mu9l.N7G(O7H.eo9f);
    bVz6t = O7H.Mu9l.cr8j;
    PA0x.bm8e = function (e7d) {
        this.bn8f(e7d);
        var bp8h = e7d.content || "&nbsp;";
        k7d.fJ9A(bp8h) ? this.o7h.innerHTML = bp8h : this.o7h.appendChild(bp8h)
    };
    PA0x.bB8t = function () {
        this.bG8y();
        this.o7h.innerHTML = "&nbsp;"
    };
    PA0x.cf8X = function () {
        this.mt1x = iX0x
    };
    PA0x.J7C = function () {
        bg8Y.bvl9c(this.o7h);
        bVz6t.J7C.apply(this, arguments);
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        O7H = c7f("nej.ut"),
        yl5q;
    if (!!O7H.vC4G) return;
    O7H.vC4G = NEJ.C();
    yl5q = O7H.vC4G.N7G(O7H.cH8z);
    yl5q.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.cBj3x = !!e7d.overflow;
        this.o7h = a6g.B7u(e7d.body);
        this.DA6u = a6g.B7u(e7d.view) || a6g.bNx4B(this.o7h);
        this.bVv6p = a6g.B7u(e7d.mbar) || this.o7h;
        this.beI5N = parseInt(e7d.direction) || 0;
        if (!!e7d.isRelative) {
            this.o7h.style.position = "relative";
            this.blL6F = true;
            this.blT6N()
        }
        this.bX8P([
            [document, "mouseup", this.blV7O.f7c(this)],
            [document, "mousemove", this.bma7T.f7c(this)],
            [this.bVv6p, "mousedown", this.Pp0x.f7c(this)]
        ])
    };
    yl5q.blT6N = function () {
        if (!!this.blL6F) {
            this.MC9t = a6g.ic0x(this.o7h, this.DA6u);
            this.MC9t.x -= parseInt(a6g.di9Z(this.o7h, "left")) || 0;
            this.MC9t.y -= parseInt(a6g.di9Z(this.o7h, "top")) || 0
        }
    };
    yl5q.bB8t = function () {
        this.bG8y();
        delete this.o7h;
        delete this.bVv6p;
        delete this.DA6u
    };
    yl5q.bmg7Z = function () {
        return {
            x: Math.max(this.DA6u.clientWidth, this.DA6u.scrollWidth) - this.o7h.offsetWidth,
            y: Math.max(this.DA6u.clientHeight, this.DA6u.scrollHeight) - this.o7h.offsetHeight
        }
    };
    yl5q.Pp0x = function (d7e) {
        h7a.bf8X(d7e);
        if (!!this.hZ0x) return;
        this.hZ0x = {
            x: h7a.jN1x(d7e),
            y: h7a.mg1x(d7e)
        };
        this.bVs6m = this.bmg7Z();
        this.z7s("ondragstart", d7e)
    };
    yl5q.bma7T = function (d7e) {
        if (!this.hZ0x) return;
        var bj8b = {
            x: h7a.jN1x(d7e),
            y: h7a.mg1x(d7e)
        };
        var pP2x = bj8b.x - this.hZ0x.x,
            pI2x = bj8b.y - this.hZ0x.y,
            C7v = {
                top: (parseInt(a6g.di9Z(this.o7h, "top")) || 0) + pI2x,
                left: (parseInt(a6g.di9Z(this.o7h, "left")) || 0) + pP2x
            };
        if (this.blL6F) {
            this.blT6N();
            C7v.top = C7v.top + this.MC9t.y;
            C7v.left = C7v.left + this.MC9t.x
        }
        this.hZ0x = bj8b;
        this.gL0x(C7v)
    };
    yl5q.blV7O = function (d7e) {
        if (!this.hZ0x) return;
        delete this.bVs6m;
        delete this.hZ0x;
        this.z7s("ondragend", this.bmL7E())
    };
    yl5q.gL0x = function (d7e) {
        if (!this.cBj3x) {
            var bVq6k = this.bVs6m || this.bmg7Z();
            d7e.top = Math.min(bVq6k.y, Math.max(0, d7e.top));
            d7e.left = Math.min(bVq6k.x, Math.max(0, d7e.left))
        }
        var cj8b = this.o7h.style;
        if (this.blL6F) {
            this.blT6N();
            d7e.top = d7e.top - this.MC9t.y;
            d7e.left = d7e.left - this.MC9t.x
        }
        if (this.beI5N == 0 || this.beI5N == 2) cj8b.top = d7e.top + "px";
        if (this.beI5N == 0 || this.beI5N == 1) cj8b.left = d7e.left + "px";
        this.z7s("onchange", d7e);
        return this
    };
    yl5q.bmL7E = function () {
        return {
            left: parseInt(a6g.di9Z(this.o7h, "left")) || 0,
            top: parseInt(a6g.di9Z(this.o7h, "top")) || 0
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = NEJ.P("nej.e"),
        h7a = NEJ.P("nej.v"),
        k7d = NEJ.P("nej.u"),
        I7B = NEJ.P("nej.ut"),
        O7H = NEJ.P("nej.ui"),
        iX0x, gs0x, b7g, K7D;
    if (!!O7H.beV5a) return;
    O7H.beV5a = NEJ.C();
    b7g = O7H.beV5a.N7G(O7H.QB0x);
    K7D = O7H.beV5a.cr8j;
    b7g.cv8n = function () {
        this.sJ3x = {};
        this.lc1x = {
            onchange: this.bma7T.f7c(this)
        };
        this.cD8v()
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.cAW3x(e7d.mask);
        this.cAV3x(e7d.align);
        this.DK6E(e7d.title);
        if (!e7d.draggable) return;
        this.jl0x = I7B.vC4G.A7t(this.lc1x)
    };
    b7g.bB8t = function () {
        this.bG8y();
        delete this.qT3x;
        delete this.OS0x;
        if (!!this.DN6H) {
            this.DN6H.T7M();
            delete this.DN6H
        }
        if (!!this.jl0x) {
            this.jl0x.T7M();
            delete this.jl0x
        }
    };
    b7g.cf8X = function () {
        this.mt1x = iX0x;
        this.ce8W = gs0x
    };
    b7g.bV8N = function () {
        this.ch8Z();
        var j7c = a6g.df9W(this.o7h);
        this.Dl6f = j7c[1];
        this.lc1x.mbar = j7c[0];
        this.lc1x.body = this.o7h;
        h7a.s7l(j7c[2], "mousedown", this.cAS3x.f7c(this));
        h7a.s7l(this.lc1x.mbar, "mousedown", this.Pp0x.f7c(this));
        this.bVo6i = a6g.df9W(this.lc1x.mbar)[0]
    };
    b7g.cAS3x = function (d7e) {
        h7a.bf8X(d7e);
        this.z7s("onclose", d7e);
        if (!d7e.stopped) {
            this.bq8i()
        }
    };
    b7g.Pp0x = function (d7e) {
        h7a.z7s(document, "click")
    };
    b7g.bma7T = function (d7e) {
        if (!this.ox2x) return;
        a6g.fh9Y(this.ox2x, {
            top: d7e.top + "px",
            left: d7e.left + "px"
        })
    };
    b7g.LN8F = function () {
        var ez9q = [function () {
                return 0
            }, function (of2x, ne1x, bj8b, L7E) {
                if (L7E == "top" && window.top != window.self) {
                    var bfx5C = 0,
                        It8l = 0;
                    if (top.g_topBarHeight) bfx5C = top.g_topBarHeight;
                    if (top.g_bottomBarShow && top.g_bottomBarHeight) It8l = top.g_bottomBarHeight;
                    if (of2x.top <= bfx5C) {
                        var boU8M = Math.max(0, (ne1x.height - (bfx5C - of2x.top) - It8l - bj8b.height) / 2);
                        return boU8M + bfx5C
                    } else {
                        var boU8M = Math.max(0, (ne1x.height - It8l - bj8b.height) / 2);
                        return boU8M + of2x.top
                    }
                }
                return Math.max(0, of2x[L7E] + (ne1x[iG0x[L7E]] - bj8b[iG0x[L7E]]) / 2)
            }, function (of2x, ne1x, bj8b, L7E) {
                return of2x[L7E] + (ne1x[iG0x[L7E]] - bj8b[iG0x[L7E]])
            }],
            cAP3x = ["left", "top"],
            iG0x = {
                left: "width",
                top: "height"
            };
        return function () {
            var C7v = {},
                cj8b = this.o7h.style,
                jM1x = a6g.oJ2x(),
                of2x = {
                    left: jM1x.scrollLeft,
                    top: jM1x.scrollTop
                },
                ne1x = {
                    width: jM1x.clientWidth,
                    height: jM1x.clientHeight
                },
                bj8b = {
                    width: this.o7h.offsetWidth,
                    height: this.o7h.offsetHeight
                },
                dr9i = {
                    left: jM1x.clientWidth - this.o7h.offsetWidth,
                    top: jM1x.clientHeight - this.o7h.offsetHeight
                };
            k7d.bd7W(cAP3x, function (L7E, r7k) {
                var dw9n = ez9q[this.qT3x[r7k]];
                if (!dw9n) return;
                C7v[L7E] = dw9n(of2x, ne1x, bj8b, L7E)
            }, this);
            this.gL0x(C7v)
        }
    }();
    b7g.cAO3x = function () {
        if (!this.DN6H) {
            if (!this.OS0x) return;
            this.sJ3x.parent = this.go0x;
            this.DN6H = this.OS0x.A7t(this.sJ3x)
        }
        this.DN6H.J7C()
    };
    b7g.bdX4b = function () {
        if (!!this.DN6H) this.DN6H.bq8i();
        K7D.bdX4b.apply(this, arguments)
    };
    b7g.cAW3x = function (lz1x) {
        if (!!lz1x) {
            if (lz1x instanceof O7H.Mu9l) {
                this.DN6H = lz1x;
                return
            }
            if (k7d.gO0x(lz1x)) {
                this.OS0x = lz1x;
                return
            }
            this.OS0x = O7H.Mu9l;
            if (k7d.fJ9A(lz1x)) this.sJ3x.clazz = lz1x;
            return
        }
        this.OS0x = null
    };
    b7g.DK6E = function (es9j, dU9L) {
        if (!!this.bVo6i) {
            var bgh5m = !dU9L ? "innerText" : "innerHTML";
            this.bVo6i[bgh5m] = es9j || "标题"
        }
        return this
    };
    b7g.cAV3x = function () {
        var dh9Y = /\s+/,
            cAM3x = {
                left: 0,
                center: 1,
                right: 2,
                auto: 3
            },
            cAL3x = {
                top: 0,
                middle: 1,
                bottom: 2,
                auto: 3
            };
        return function (on2x) {
            this.qT3x = (on2x || "").split(dh9Y);
            var cl8d = cAM3x[this.qT3x[0]];
            if (cl8d == null) cl8d = 1;
            this.qT3x[0] = cl8d;
            var cl8d = cAL3x[this.qT3x[1]];
            if (cl8d == null) cl8d = 1;
            this.qT3x[1] = cl8d;
            return this
        }
    }();
    b7g.J7C = function () {
        K7D.J7C.apply(this, arguments);
        this.cAO3x();
        return this
    };
    iX0x = a6g.uK4O(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gs0x = a6g.jz0x('<div class="' + iX0x + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c7f = NEJ.P,
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ui"),
        bpR8J;
    if (!!O7H.bfz5E) return;
    O7H.bfz5E = NEJ.C();
    bpR8J = O7H.bfz5E.N7G(O7H.bem4q);
    bpR8J.bkL6F = function () {
        return O7H.beV5a.A7t(this.ci8a)
    };
    bpR8J.PY0x = function () {
        O7H.bfz5E.cr8j.PY0x.apply(this, arguments);
        this.ci8a.mask = null;
        this.ci8a.title = "标题";
        this.ci8a.align = "";
        this.ci8a.draggable = !1;
        this.ci8a.onclose = null
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        bc7V = c7f("nej.ui"),
        n7g = c7f("nm.l"),
        b7g, K7D;
    n7g.el9c = NEJ.C();
    b7g = n7g.el9c.N7G(bc7V.bfz5E);
    b7g.bm8e = function (e7d) {
        e7d.clazz = "m-layer z-show " + (e7d.clazz || "");
        e7d.nohack = true;
        e7d.draggable = true;
        this.bn8f(e7d)
    };
    b7g.ea9R = function (g7b, bF8x) {
        if (!g7b) return;
        a6g.ba7T(g7b, "display", !bF8x ? "none" : "");
        g7b.lastChild.innerText = bF8x || ""
    };
    b7g.dY9P = function (gR0x, dd8V, OB0x, OA0x) {
        var ef9W = "js-lock";
        if (dd8V === undefined) return a6g.bE8w(gR0x, ef9W);
        !dd8V ? a6g.y7r(gR0x, ef9W) : a6g.w7p(gR0x, ef9W);
        gR0x.firstChild.innerText = !dd8V ? OB0x : OA0x
    };
    n7g.el9c.J7C = function (e7d) {
        e7d = e7d || {};
        if (e7d.mask === undefined) e7d.mask = "m-mask";
        if (e7d.parent === undefined) e7d.parent = document.body;
        if (e7d.draggable === undefined) e7d.draggable = true;
        !!this.fr9i && this.fr9i.T7M();
        this.fr9i = this.A7t(e7d);
        this.fr9i.J7C(e7d);
        return this.fr9i
    };
    n7g.el9c.bq8i = function () {
        !!this.fr9i && this.fr9i.T7M()
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        n7g = c7f("nm.l"),
        b7g, K7D;
    n7g.brL9C = NEJ.C();
    b7g = n7g.brL9C.N7G(n7g.el9c);
    K7D = n7g.brL9C.cr8j;
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        if (e7d.bubble === undefined) e7d.bubble = true;
        this.Ox0x = e7d.bubble;
        this.ri3x = e7d.message || ""
    };
    b7g.cf8X = function () {
        this.ce8W = a6g.jz0x('<div class="lyct f-cb f-tc"></div>')
    };
    b7g.bV8N = function () {
        this.ch8Z();
        h7a.s7l(this.o7h, "click", this.cJ8B.f7c(this))
    };
    b7g.cJ8B = function (d7e) {
        var g7b = h7a.X7Q(d7e, "d:action");
        if (!g7b) return;
        if (g7b.href) h7a.co8g(d7e);
        if (a6g.t7m(g7b, "action") == "close") this.bq8i();
        if (this.Ox0x === !1) h7a.tH3x(d7e);
        this.z7s("onaction", a6g.t7m(g7b, "action"))
    };
    b7g.J7C = function () {
        K7D.J7C.call(this);
        this.o7h.innerHTML = this.ri3x
    };
    var gW0x = a6g.ey9p('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l7e.nE2x = function () {
        var ej9a;
        var cF8x;
        var bsi9Z = function (eK9B, U7N) {
            if (k7d.gO0x(eK9B, "function") && eK9B(U7N) != -1) cF8x.T7M()
        };
        var DX6R = function () {
            !!cF8x && cF8x.bq8i()
        };
        return function (e7d) {
            clearTimeout(ej9a);
            e7d = e7d || {};
            e7d.title = e7d.title || "提示";
            e7d.clazz = e7d.clazz || "";
            e7d.parent = e7d.parent || document.body;
            e7d.buttons = e7d.buttons || [];
            e7d.message = a6g.cc8U(gW0x, e7d);
            e7d.onaction = bsi9Z.f7c(null, e7d.action);
            if (e7d.mask === undefined) e7d.mask = true;
            if (e7d.draggable === undefined) e7d.draggable = true;
            !!cF8x && cF8x.T7M();
            cF8x = n7g.brL9C.A7t(e7d);
            cF8x.J7C();
            if (e7d.autoclose) ej9a = setTimeout(DX6R.f7c(null), 2e3);
            return cF8x
        }
    }();
    l7e.eN9E = function (e7d) {
        e7d = e7d || {};
        e7d.clazz = e7d.clazz || "m-layer-w1";
        e7d.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e7d.btntxt || "确定"
        }];
        var cF8x = l7e.nE2x(e7d);
        return cF8x
    };
    l7e.hC0x = function (e7d) {
        e7d = e7d || {};
        e7d.clazz = e7d.clazz || "m-layer-w2";
        e7d.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e7d.btnok || "确定",
            style: e7d.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e7d.btncc || "取消",
            style: e7d.ccstyle || ""
        }];
        var cF8x = l7e.nE2x(e7d);
        return cF8x
    }
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u");
    a6g.cAI3x = function () {
        var gM0x = /[\r\n]/gi,
            R7K = {};
        var cAH3x = function (cQ8I) {
            return (cQ8I || "").replace(gM0x, "aa").length
        };
        var bVk6e = function (D7w) {
            var bi8a = R7K[D7w],
                bVj6d = a6g.B7u(D7w),
                rH3x = a6g.B7u(D7w + "-counter");
            if (!bVj6d || !bi8a) return;
            var d7e = {
                input: bVj6d.value
            };
            d7e.length = bi8a.onlength(d7e.input);
            d7e.delta = bi8a.max - d7e.length;
            bi8a.onchange(d7e);
            rH3x.innerHTML = d7e.value || "剩余" + d7e.delta + "个字"
        };
        return function (G7z, e7d) {
            var D7w = a6g.lQ1x(G7z);
            if (!D7w || !!R7K[D7w]) return;
            var bi8a = NEJ.X({}, e7d);
            bi8a.onchange = bi8a.onchange || br8j;
            bi8a.onlength = cAH3x;
            if (!bi8a.max) {
                var bVi6c = parseInt(a6g.hb0x(D7w, "maxlength")),
                    bVh6b = parseInt(a6g.t7m(D7w, "maxLength"));
                bi8a.max = bVi6c || bVh6b || 100;
                if (!bVi6c && !!bVh6b) bi8a.onlength = k7d.fN9E
            }
            R7K[D7w] = bi8a;
            h7a.s7l(D7w, "input", bVk6e.f7c(null, D7w));
            var g7b = a6g.Mc9T(D7w, {
                nid: bi8a.nid || "js-counter",
                clazz: bi8a.clazz
            });
            bi8a.xid = D7w + "-counter";
            g7b.id = bi8a.xid;
            bVk6e(D7w)
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        bg8Y = c7f("nej.h");
    bg8Y.buh9Y = function (G7z, eg9X) {}
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        O7H = c7f("nej.p"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        bg8Y = c7f("nej.h");
    if (O7H.nG2x.trident) return;
    bg8Y.buh9Y = function () {
        var R7K = {};
        var Ji8a = function (d7e) {
            var cT8L = h7a.X7Q(d7e);
            if (!!cT8L.value) return;
            a6g.ba7T(a6g.Mc9T(cT8L), "display", "none")
        };
        var Fh7a = function (d7e) {
            var cT8L = h7a.X7Q(d7e);
            if (!!cT8L.value) return;
            a6g.ba7T(a6g.Mc9T(cT8L), "display", "")
        };
        var cAC3x = function (cT8L, eg9X) {
            var D7w = a6g.lQ1x(cT8L),
                je0x = a6g.Mc9T(cT8L, {
                    tag: "label",
                    clazz: eg9X
                });
            je0x.htmlFor = D7w;
            var cL8D = a6g.hb0x(cT8L, "placeholder") || "";
            je0x.innerText = cL8D == "null" ? "" : cL8D;
            var cg8Y = cT8L.offsetHeight + "px";
            a6g.fh9Y(je0x, {
                left: 0,
                display: !cT8L.value ? "" : "none"
            })
        };
        return bg8Y.buh9Y.eL9C(function (d7e) {
            d7e.stopped = !0;
            var bh8Z = d7e.args,
                cT8L = a6g.B7u(bh8Z[0]);
            if (!!R7K[cT8L.id]) return;
            cAC3x(cT8L, bh8Z[1]);
            R7K[cT8L.id] = !0;
            h7a.s7l(cT8L, "blur", Fh7a.f7c(null));
            h7a.s7l(cT8L, "focus", Ji8a.f7c(null))
        })
    }()
})();
(function () {
    var c7f = NEJ.P,
        bg8Y = c7f("nej.h"),
        a6g = c7f("nej.e"),
        db8T = c7f("nej.x");
    a6g.gQ0x = db8T.gQ0x = function (G7z, eg9X) {
        bg8Y.buh9Y(G7z, a6g.t7m(G7z, "holder") || eg9X || "js-placeholder");
        return this
    };
    db8T.isChange = !0
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ut"),
        ih0x;
    if (!!O7H.NU0x) return;
    O7H.NU0x = NEJ.C();
    ih0x = O7H.NU0x.N7G(O7H.cH8z);
    ih0x.cv8n = function () {
        this.cD8v();
        this.IK8C = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    };
    ih0x.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.gB0x = document.forms[e7d.form] || a6g.B7u(e7d.form);
        this.bX8P([
            [this.gB0x, "keypress", this.cAA3x.f7c(this)]
        ]);
        this.ri3x = e7d.message || {};
        this.ri3x.pass = this.ri3x.pass || "&nbsp;";
        var fu9l = this.qt2x(this.gB0x, "focusMode", 1);
        if (!isNaN(fu9l)) {
            this.bVf6Z = {
                mode: fu9l,
                clazz: e7d.focus
            }
        }
        this.Ee6Y = e7d.holder;
        this.IK8C.tp.clazz = "js-mhd " + (e7d.tip || "js-tip");
        this.IK8C.ok.clazz = "js-mhd " + (e7d.pass || "js-pass");
        this.IK8C.er.clazz = "js-mhd " + (e7d.error || "js-error");
        this.bVe6Y = e7d.invalid || "js-invalid";
        this.cAw3x(e7d);
        this.gP0x();
        if (!!this.Ef6Z) this.Ef6Z.focus()
    };
    ih0x.bB8t = function () {
        this.bG8y();
        delete this.ri3x;
        delete this.Ef6Z;
        delete this.IN8F;
        delete this.gB0x;
        delete this.bVc6W;
        delete this.NS0x
    };
    ih0x.qt2x = function (g7b, wU4Y, u7n) {
        var C7v = a6g.t7m(g7b, wU4Y);
        switch (u7n) {
            case 1:
                return parseInt(C7v);
            case 2:
                return (C7v || "").toLowerCase() == "true";
            case 3:
                return this.bxc0x(C7v)
        }
        return C7v
    };
    ih0x.Eb6V = function (C7v, u7n) {
        if (u7n == "date") return this.bxc0x(C7v);
        return parseInt(C7v)
    };
    ih0x.bfV5a = function () {
        var kw1x = /^button|submit|reset|image|hidden|file$/i;
        return function (g7b) {
            g7b = this.B7u(g7b) || g7b;
            var u7n = g7b.type;
            return !!g7b.name && !kw1x.test(g7b.type || "")
        }
    }();
    ih0x.cAt3x = function () {
        var kw1x = /^hidden$/i;
        return function (g7b) {
            if (this.bfV5a(g7b)) return !0;
            g7b = this.B7u(g7b) || g7b;
            var u7n = g7b.type || "";
            return kw1x.test(u7n)
        }
    }();
    ih0x.bxc0x = function () {
        var dh9Y = /[-\/]/;
        var cAs3x = function (C7v) {
            if (!C7v) return "";
            C7v = C7v.split(dh9Y);
            C7v.push(C7v.shift());
            return C7v.join("/")
        };
        return function (C7v) {
            if ((C7v || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cAs3x(C7v))
        }
    }();
    ih0x.cAA3x = function (d7e) {
        if (d7e.keyCode != 13) return;
        this.z7s("onenter", d7e)
    };
    ih0x.cAr3x = function (D7w, W7P) {
        var rU3x = this.NS0x[W7P],
            C7v = this.qt2x(D7w, W7P);
        if (!C7v || !rU3x) return;
        this.bfP5U(D7w, rU3x);
        this.bxW0x(D7w, W7P, C7v)
    };
    ih0x.cAq3x = function (D7w, W7P) {
        try {
            var bVb6V = this.qt2x(D7w, W7P);
            if (!bVb6V) return;
            var C7v = new RegExp(bVb6V);
            this.bxW0x(D7w, W7P, C7v);
            this.bfP5U(D7w, this.NS0x[W7P])
        } catch (e) {}
    };
    ih0x.cAo3x = function (D7w, W7P) {
        var rU3x = this.NS0x[W7P];
        if (!!rU3x && this.qt2x(D7w, W7P, 2)) this.bfP5U(D7w, rU3x)
    };
    ih0x.byc0x = function (D7w, W7P, C7v) {
        C7v = parseInt(C7v);
        if (isNaN(C7v)) return;
        this.bxW0x(D7w, W7P, C7v);
        this.bfP5U(D7w, this.NS0x[W7P])
    };
    ih0x.bUZ6T = function (D7w, W7P) {
        this.byc0x(D7w, W7P, this.qt2x(D7w, W7P))
    };
    ih0x.bUY6S = function (D7w, W7P) {
        this.byc0x(D7w, W7P, a6g.hb0x(D7w, W7P))
    };
    ih0x.bUW6Q = function (D7w, W7P, u7n) {
        var C7v = this.Eb6V(this.qt2x(D7w, W7P), this.qt2x(D7w, "type"));
        this.byc0x(D7w, W7P, C7v)
    };
    ih0x.cAe3x = function () {
        var gM0x = /^input|textarea$/i;
        var Ji8a = function (d7e) {
            this.qj2x(h7a.X7Q(d7e))
        };
        var Fh7a = function (d7e) {
            var g7b = h7a.X7Q(d7e);
            if (!this.qt2x(g7b, "ignore", 2)) {
                this.bUS6M(g7b)
            }
        };
        return function (g7b) {
            if (this.qt2x(g7b, "autoFocus", 2)) this.Ef6Z = g7b;
            var rn3x = a6g.hb0x(g7b, "placeholder");
            if (!!rn3x && rn3x != "null") a6g.gQ0x(g7b, this.Ee6Y);
            if (!!this.bVf6Z && gM0x.test(g7b.tagName)) a6g.mF1x(g7b, this.bVf6Z);
            var D7w = a6g.lQ1x(g7b);
            this.cAo3x(D7w, "required");
            this.cAr3x(D7w, "type");
            this.cAq3x(D7w, "pattern");
            this.bUY6S(D7w, "maxlength");
            this.bUY6S(D7w, "minlength");
            this.bUZ6T(D7w, "maxLength");
            this.bUZ6T(D7w, "minLength");
            this.bUW6Q(D7w, "min");
            this.bUW6Q(D7w, "max");
            var W7P = g7b.name;
            this.ri3x[W7P + "-tip"] = this.qt2x(g7b, "tip");
            this.ri3x[W7P + "-error"] = this.qt2x(g7b, "message");
            this.qj2x(g7b);
            var bx8p = this.IN8F[D7w],
                i7b = (bx8p || bb7U).data || bb7U,
                Ov0x = this.qt2x(g7b, "counter", 2);
            if (Ov0x && (i7b.maxlength || i7b.maxLength)) {
                a6g.cAI3x(D7w, {
                    nid: this.IK8C.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bx8p && gM0x.test(g7b.tagName)) {
                this.bX8P([
                    [g7b, "focus", Ji8a.f7c(this)],
                    [g7b, "blur", Fh7a.f7c(this)]
                ])
            } else if (this.qt2x(g7b, "focus", 2)) {
                this.bX8P([
                    [g7b, "focus", Ji8a.f7c(this)]
                ])
            }
        }
    }();
    ih0x.cAw3x = function () {
        var Iy8q = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.bxc0x(v))
            }
        };
        var cAb3x = {
            required: function (g7b) {
                var u7n = g7b.type,
                    czY3x = !g7b.value,
                    czX3x = (u7n == "checkbox" || u7n == "radio") && !g7b.checked;
                if (czX3x || czY3x) return -1
            },
            type: function (g7b, e7d) {
                var dh9Y = this.bVc6W[e7d.type],
                    fA9r = g7b.value.trim(),
                    czW3x = !!dh9Y.test && !dh9Y.test(fA9r),
                    czT3x = k7d.gO0x(dh9Y) && !dh9Y.call(this, fA9r);
                if (czW3x || czT3x) return -2
            },
            pattern: function (g7b, e7d) {
                if (!e7d.pattern.test(g7b.value)) return -3
            },
            maxlength: function (g7b, e7d) {
                if (g7b.value.length > e7d.maxlength) return -4
            },
            minlength: function (g7b, e7d) {
                if (g7b.value.length < e7d.minlength) return -5
            },
            maxLength: function (g7b, e7d) {
                if (k7d.fN9E(g7b.value) > e7d.maxLength) return -4
            },
            minLength: function (g7b, e7d) {
                if (k7d.fN9E(g7b.value) < e7d.minLength) return -5
            },
            min: function (g7b, e7d) {
                var hk0x = this.Eb6V(g7b.value, e7d.type);
                if (isNaN(hk0x) || hk0x < e7d.min) return -6
            },
            max: function (g7b, e7d) {
                var hk0x = this.Eb6V(g7b.value, e7d.type);
                if (isNaN(hk0x) || hk0x > e7d.max) return -7
            }
        };
        return function (e7d) {
            this.bVc6W = NEJ.X(NEJ.X({}, Iy8q), e7d.type);
            this.NS0x = NEJ.X(NEJ.X({}, cAb3x), e7d.attr)
        }
    }();
    ih0x.bfP5U = function (D7w, AX5c) {
        if (!k7d.gO0x(AX5c)) return;
        var bx8p = this.IN8F[D7w];
        if (!bx8p || !bx8p.func) {
            bx8p = bx8p || {};
            bx8p.func = [];
            this.IN8F[D7w] = bx8p
        }
        bx8p.func.push(AX5c)
    };
    ih0x.bxW0x = function (D7w, W7P, C7v) {
        if (!W7P) return;
        var bx8p = this.IN8F[D7w];
        if (!bx8p || !bx8p.data) {
            bx8p = bx8p || {};
            bx8p.data = {};
            this.IN8F[D7w] = bx8p
        }
        bx8p.data[W7P] = C7v
    };
    ih0x.bUS6M = function (g7b) {
        g7b = this.B7u(g7b) || g7b;
        var bx8p = this.IN8F[a6g.lQ1x(g7b)];
        if (!g7b || !bx8p || !this.bfV5a(g7b)) return !0;
        var m7f;
        k7d.eH9y(bx8p.func, function (ez9q) {
            m7f = ez9q.call(this, g7b, bx8p.data);
            return m7f != null
        }, this);
        if (m7f == null) {
            var d7e = {
                target: g7b,
                form: this.gB0x
            };
            this.z7s("oncheck", d7e);
            m7f = d7e.value
        }
        var d7e = {
            target: g7b,
            form: this.gB0x
        };
        if (m7f != null) {
            d7e.code = m7f;
            this.z7s("oninvalid", d7e);
            if (!d7e.stopped) {
                this.czS3x(g7b, d7e.value || this.ri3x[g7b.name + m7f])
            }
        } else {
            this.z7s("onvalid", d7e);
            if (!d7e.stopped) this.czR3x(g7b, d7e.value)
        }
        return m7f == null
    };
    ih0x.AV5a = function () {
        var czP3x = function (beb4f, bdZ4d) {
            return beb4f == bdZ4d ? "block" : "none"
        };
        var czN3x = function (g7b, u7n, bF8x) {
            var rn3x = bUP6J.call(this, g7b, u7n);
            if (!rn3x && !!bF8x) rn3x = a6g.Mc9T(g7b, this.IK8C[u7n]);
            return rn3x
        };
        var bUP6J = function (g7b, u7n) {
            var rn3x;
            if (u7n == "tp") rn3x = a6g.B7u(g7b.name + "-tip");
            if (!rn3x) rn3x = a6g.E7x(g7b.parentNode, this.IK8C[u7n].nid)[0];
            return rn3x
        };
        return function (g7b, bF8x, u7n) {
            g7b = this.B7u(g7b) || g7b;
            if (!g7b) return;
            u7n == "er" ? a6g.w7p(g7b, this.bVe6Y) : a6g.y7r(g7b, this.bVe6Y);
            var rn3x = czN3x.call(this, g7b, u7n, bF8x);
            if (!!rn3x && !!bF8x) rn3x.innerHTML = bF8x;
            k7d.eH9y(this.IK8C, function (C7v, L7E) {
                a6g.ba7T(bUP6J.call(this, g7b, L7E), "display", czP3x(u7n, L7E))
            }, this)
        }
    }();
    ih0x.qj2x = function (g7b, bF8x) {
        this.AV5a(g7b, bF8x || this.ri3x[g7b.name + "-tip"], "tp");
        return this
    };
    ih0x.czR3x = function (g7b, bF8x) {
        this.AV5a(g7b, bF8x || this.ri3x[g7b.name + "-pass"] || this.ri3x.pass, "ok");
        return this
    };
    ih0x.czS3x = function (g7b, bF8x) {
        this.AV5a(g7b, bF8x || this.ri3x[g7b.name + "-error"], "er");
        return this
    };
    ih0x.jd0x = function () {
        var gM0x = /^(?:radio|checkbox)$/i;
        var czL3x = function (C7v) {
            return C7v == null ? "" : C7v
        };
        var bUO6I = function (C7v, g7b) {
            if (gM0x.test(g7b.type || "")) {
                g7b.checked = C7v == g7b.value
            } else {
                g7b.value = czL3x(C7v)
            }
        };
        return function (W7P, C7v) {
            var g7b = this.B7u(W7P);
            if (!g7b) return this;
            if (g7b.tagName == "SELECT" || !g7b.length) {
                bUO6I(C7v, g7b)
            } else {
                k7d.bd7W(g7b, bUO6I.f7c(null, C7v))
            }
            return this
        }
    }();
    ih0x.B7u = function (W7P) {
        return this.gB0x.elements[W7P]
    };
    ih0x.cHb5g = function () {
        return this.gB0x
    };
    ih0x.bfg5l = function () {
        var gM0x = /^radio|checkbox$/i,
            kw1x = /^number|date$/;
        var czE3x = function (bz8r, g7b) {
            var W7P = g7b.name,
                C7v = g7b.value,
                bx8p = bz8r[W7P],
                u7n = this.qt2x(g7b, "type");
            if (kw1x.test(u7n)) C7v = this.Eb6V(C7v, u7n);
            if (gM0x.test(g7b.type) && !g7b.checked) {
                C7v = this.qt2x(g7b, "value");
                if (!C7v) return
            }
            if (!!bx8p) {
                if (!k7d.ec9T(bx8p)) {
                    bx8p = [bx8p];
                    bz8r[W7P] = bx8p
                }
                bx8p.push(C7v)
            } else {
                bz8r[W7P] = C7v
            }
        };
        return function () {
            var m7f = {};
            k7d.bd7W(this.gB0x.elements, function (g7b) {
                if (this.cAt3x(g7b)) czE3x.call(this, m7f, g7b)
            }, this);
            return m7f
        }
    }();
    ih0x.Pe0x = function () {
        var czD3x = function (g7b) {
            if (this.bfV5a(g7b)) this.qj2x(g7b)
        };
        return function () {
            this.gB0x.reset();
            k7d.bd7W(this.gB0x.elements, czD3x, this);
            return this
        }
    }();
    ih0x.cHc5h = function () {
        this.gB0x.submit();
        return this
    };
    ih0x.gP0x = function () {
        var czz3x = function (g7b) {
            if (this.bfV5a(g7b)) this.cAe3x(g7b)
        };
        return function () {
            this.IN8F = {};
            k7d.bd7W(this.gB0x.elements, czz3x, this);
            return this
        }
    }();
    ih0x.czy3x = function (g7b) {
        g7b = this.B7u(g7b) || g7b;
        if (!!g7b) return this.bUS6M(g7b);
        var m7f = !0;
        k7d.bd7W(this.gB0x.elements, function (g7b) {
            var in0x = this.czy3x(g7b);
            m7f = m7f && in0x
        }, this);
        return m7f
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        l7e = c7f("nm.x"),
        n7g = c7f("nm.l"),
        b7g, K7D;
    n7g.beS5X = NEJ.C();
    b7g = n7g.beS5X.N7G(n7g.el9c);
    K7D = n7g.beS5X.cr8j;
    b7g.bV8N = function () {
        this.ch8Z();
        h7a.s7l(this.o7h, "click", this.cJ8B.f7c(this));
        h7a.s7l(document, "mousewheel", this.DF6z.f7c(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.DF6z.f7c(this))
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        if (e7d.jst) {
            this.o7h.innerHTML = a6g.cc8U(e7d.jst, e7d.data)
        } else if (e7d.ntp) {
            this.o7h.appendChild(a6g.dD9u(e7d.ntp))
        } else if (e7d.txt) {
            this.o7h.innerHTML = a6g.ij0x(e7d.txt)
        } else if (e7d.html) {
            this.o7h.innerHTML = e7d.html
        }
        var Pj0x = this.o7h.getElementsByTagName("form");
        if (Pj0x.length) {
            this.gB0x = I7B.NU0x.A7t({
                form: Pj0x[0]
            })
        }
        this.HY7R = a6g.df9W(this.o7h)[0]
    };
    b7g.bB8t = function () {
        this.z7s("ondestroy");
        this.bG8y();
        this.o7h.innerHTML = "";
        delete this.HY7R
    };
    b7g.cJ8B = function (d7e) {
        var g7b = h7a.X7Q(d7e, "d:action"),
            i7b = this.gB0x ? this.gB0x.bfg5l() : null,
            d7e = {
                action: a6g.t7m(g7b, "action")
            };
        if (i7b) d7e.data = i7b;
        if (d7e.action) {
            this.z7s("onaction", d7e);
            if (d7e.stopped) return;
            this.bq8i()
        }
    };
    b7g.DF6z = function (d7e) {
        if (!this.HY7R) return;
        h7a.bf8X(d7e);
        var dr9i = d7e.wheelDelta || -d7e.detail;
        this.HY7R.scrollTop -= dr9i
    };
    l7e.jY1x = function (e7d) {
        e7d.destroyable = e7d.destroyable || true;
        e7d.title = e7d.title || "提示";
        e7d.draggable = true;
        e7d.parent = e7d.parent || document.body;
        e7d.mask = e7d.mask || true;
        var Dp6j = n7g.beS5X.A7t(e7d);
        Dp6j.J7C();
        return Dp6j
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bUL6F = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Pt0x = {},
        HT7M = {};
    for (var i = 0, l = bUL6F.length, c; i < l; i++) {
        c = bUL6F.charAt(i);
        Pt0x[i] = c;
        HT7M[c] = i
    }
    var czw3x = function (iA0x) {
        var r7k = 0,
            c, m7f = [];
        while (r7k < iA0x.length) {
            c = iA0x[r7k];
            if (c < 128) {
                m7f.push(String.fromCharCode(c));
                r7k++
            } else if (c > 191 && c < 224) {
                m7f.push(String.fromCharCode((c & 31) << 6 | iA0x[r7k + 1] & 63));
                r7k += 2
            } else {
                m7f.push(String.fromCharCode((c & 15) << 12 | (iA0x[r7k + 1] & 63) << 6 | iA0x[r7k + 2] & 63));
                r7k += 3
            }
        }
        return m7f.join("")
    };
    var czv3x = function () {
        var hJ0x = /\r\n/g;
        return function (i7b) {
            i7b = i7b.replace(hJ0x, "\n");
            var m7f = [],
                nc1x = String.fromCharCode(237);
            if (nc1x.charCodeAt(0) < 0)
                for (var i = 0, l = i7b.length, c; i < l; i++) {
                    c = i7b.charCodeAt(i);
                    c > 0 ? m7f.push(c) : m7f.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                } else
                    for (var i = 0, l = i7b.length, c; i < l; i++) {
                        c = i7b.charCodeAt(i);
                        if (c < 128) m7f.push(c);
                        else if (c > 127 && c < 2048) m7f.push(c >> 6 | 192, c & 63 | 128);
                        else m7f.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                    }
            return m7f
        }
    }();
    var Mt9k = function (iA0x) {
        var r7k = 0,
            m7f = [],
            fu9l = iA0x.length % 3;
        if (fu9l == 1) iA0x.push(0, 0);
        if (fu9l == 2) iA0x.push(0);
        while (r7k < iA0x.length) {
            m7f.push(Pt0x[iA0x[r7k] >> 2], Pt0x[(iA0x[r7k] & 3) << 4 | iA0x[r7k + 1] >> 4], Pt0x[(iA0x[r7k + 1] & 15) << 2 | iA0x[r7k + 2] >> 6], Pt0x[iA0x[r7k + 2] & 63]);
            r7k += 3
        }
        if (fu9l == 1) m7f[m7f.length - 1] = m7f[m7f.length - 2] = "=";
        if (fu9l == 2) m7f[m7f.length - 1] = "=";
        return m7f.join("")
    };
    var bUK6E = function () {
        var sX3x = /\n|\r|=/g;
        return function (i7b) {
            var r7k = 0,
                m7f = [];
            i7b = i7b.replace(sX3x, "");
            for (var i = 0, l = i7b.length; i < l; i += 4) m7f.push(HT7M[i7b.charAt(i)] << 2 | HT7M[i7b.charAt(i + 1)] >> 4, (HT7M[i7b.charAt(i + 1)] & 15) << 4 | HT7M[i7b.charAt(i + 2)] >> 2, (HT7M[i7b.charAt(i + 2)] & 3) << 6 | HT7M[i7b.charAt(i + 3)]);
            var bs8k = m7f.length,
                fu9l = i7b.length % 4;
            if (fu9l == 2) m7f = m7f.slice(0, bs8k - 2);
            if (fu9l == 3) m7f = m7f.slice(0, bs8k - 1);
            return m7f
        }
    }();
    p.cHd5i = function (i7b) {
        return czw3x(bUK6E(i7b))
    };
    p.czr3x = function (i7b) {
        var iA0x = bUK6E(i7b),
            dt9k = iA0x.length,
            iB0x;
        var r7k = 0;
        while (iB0x = iA0x[r7k]) {
            if (iB0x > 128) {
                iA0x[r7k] = iB0x - 256
            }
            r7k++
        }
        return iA0x
    };
    p.czq3x = function (i7b) {
        try {
            return window.btoa(i7b)
        } catch (ex) {
            return Mt9k(czv3x(i7b))
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        h7a = c7f("nej.v"),
        a6g = c7f("nej.e"),
        v7o = c7f("nej.j"),
        O7H = c7f("nej.p"),
        k7d = c7f("nej.u"),
        n7g = c7f("nm.l"),
        x7q = c7f("nm.w"),
        bC8u = c7f("nej.ui"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    n7g.bUJ6D = NEJ.C();
    b7g = n7g.bUJ6D.N7G(n7g.el9c);
    b7g.cf8X = function () {
        this.ce8W = "m-download-layer"
    };
    b7g.bV8N = function () {
        this.ch8Z();
        var j7c = a6g.E7x(this.o7h, "j-flag");
        this.bjT6N = j7c[0];
        this.bjU6O = j7c[1];
        this.bUI6C = j7c[2];
        v7o.bk8c("/client/version/get", {
            type: "json",
            onload: this.czj3x.f7c(this)
        });
        if (O7H.Ku8m.mac) {
            a6g.y7r(this.bjT6N.parentNode, "f-hide");
            a6g.w7p(this.bjU6O.parentNode, "f-hide");
            a6g.w7p(this.bUI6C, "f-hide")
        } else {
            a6g.w7p(this.bjT6N.parentNode, "f-hide");
            a6g.y7r(this.bjU6O.parentNode, "f-hide");
            a6g.y7r(this.bUI6C, "f-hide")
        }
    };
    b7g.bm8e = function (e7d) {
        e7d.clazz = " m-layer-down";
        e7d.parent = e7d.parent || document.body;
        e7d.title = "下载";
        e7d.draggable = !0;
        e7d.destroyalbe = !0;
        e7d.mask = true;
        this.bn8f(e7d);
        this.bX8P([
            [this.o7h, "click", this.bS8K.f7c(this)]
        ]);
        this.eC9t = TYPE_MAP[e7d.type];
        this.he0x = e7d.id
    };
    b7g.bB8t = function () {
        this.bG8y()
    };
    b7g.Dt6n = function () {
        this.bq8i()
    };
    b7g.HG7z = function (d7e) {
        this.z7s("onok", C7v);
        this.bq8i()
    };
    b7g.bS8K = function (d7e) {
        var g7b = h7a.X7Q(d7e, "d:action");
        switch (a6g.t7m(g7b, "action")) {
            case "download":
                this.bq8i();
                window.open(a6g.t7m(g7b, "src"));
                break;
            case "orpheus":
                this.bq8i();
                location.href = "orpheus://" + k7d.czq3x(JSON.stringify({
                    type: this.eC9t,
                    id: this.he0x,
                    cmd: "download"
                }));
                break
        }
    };
    b7g.czj3x = function (d7e) {
        if ((d7e || bb7U).code == 200) {
            this.JS8K = d7e.data;
            this.bjT6N.innerText = "V" + this.JS8K.mac;
            this.bjU6O.innerText = "V" + this.JS8K.pc
        }
    };
    l7e.Md9U = function (e7d) {
        n7g.bUJ6D.A7t(e7d).J7C()
    }
})();
(function () {
    var c7f = NEJ.P,
        l7e = c7f("nm.x");
    var FullscreenApi = {};
    var apiMap = [
        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ];
    var specApi = apiMap[0];
    var browserApi;
    for (var i = 0; i < apiMap.length; i++) {
        if (apiMap[i][1] in document) {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi) {
        for (var i = 0; i < browserApi.length; i++) {
            FullscreenApi[specApi[i]] = browserApi[i]
        }
    }
    l7e.HA7t = FullscreenApi
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        k7d = c7f("nej.u"),
        q7j = c7f("nm.d"),
        bT8L = {};
    q7j.B7u = function (L7E) {
        return bT8L[L7E]
    };
    q7j.mJ1x = function (L7E, bi8a) {
        bT8L[L7E] = bi8a
    };
    q7j.fp9g = function (i7b) {
        k7d.eH9y(i7b, function (p7i, L7E) {
            var bi8a = bT8L[L7E] || {};
            NEJ.X(bi8a, p7i);
            bT8L[L7E] = bi8a
        })
    }
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        bg8Y = c7f("nej.h");
    bg8Y.beg4k = function (L7E) {
        return localStorage.getItem(L7E)
    };
    bg8Y.bed4h = function (L7E, C7v) {
        localStorage.setItem(L7E, C7v)
    };
    bg8Y.bkY6S = function (L7E) {
        localStorage.removeItem(L7E)
    };
    bg8Y.blb6V = function () {
        localStorage.clear()
    };
    bg8Y.czi3x = function () {
        var m7f = [];
        for (var i = 0, l = localStorage.length; i < l; i++) m7f.push(localStorage.key(i));
        return m7f
    };
    bg8Y.blm6g = function () {
        (document.onstorageready || br8j)()
    };
    bg8Y.bln6h = function () {
        return !0
    }
})();
(function () {
    var c7f = NEJ.P,
        O7H = c7f("nej.p"),
        iB0x = c7f("nej.c"),
        bg8Y = c7f("nej.h"),
        tq3x;
    if (O7H.nG2x.trident || !!window.localStorage) return;
    var czd3x = function () {
        var ta3x, ej9a;
        var biQ6K = function () {
            ta3x = document.createElement("div");
            NEJ.X(ta3x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", ta3x);
            ta3x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iB0x.B7u("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var TJ2x = function () {
            ej9a = window.clearTimeout(ej9a);
            var ib0x = ta3x.getElementsByTagName("object")[0];
            if (!!ib0x.initStorage) {
                delete ta3x;
                tq3x = ib0x;
                tq3x.initStorage("nej-storage");
                (document.onstorageready || br8j)();
                return
            }
            ej9a = window.setTimeout(TJ2x, 500)
        };
        return function () {
            if (!!tq3x) return;
            biQ6K();
            TJ2x()
        }
    }();
    bg8Y.beg4k = bg8Y.beg4k.eL9C(function (d7e) {
        d7e.stopped = !0;
        if (!tq3x) return;
        d7e.value = tq3x.getItem(d7e.args[0])
    });
    bg8Y.bed4h = bg8Y.bed4h.eL9C(function (d7e) {
        d7e.stopped = !0;
        if (!tq3x) return;
        var bh8Z = d7e.args;
        tq3x.setItem(bh8Z[0], bh8Z[1])
    });
    bg8Y.bkY6S = bg8Y.bkY6S.eL9C(function (d7e) {
        d7e.stopped = !0;
        if (!tq3x) return;
        tq3x.removeItem(d7e.args[0])
    });
    bg8Y.blb6V = bg8Y.blb6V.eL9C(function (d7e) {
        d7e.stopped = !0;
        if (!!tq3x) tq3x.clear()
    });
    bg8Y.blm6g = bg8Y.blm6g.eL9C(function (d7e) {
        d7e.stopped = !0;
        czd3x()
    });
    bg8Y.bln6h = bg8Y.bln6h.eL9C(function (d7e) {
        d7e.stopped = !0;
        d7e.value = !!tq3x
    })
})();
(function () {
    var c7f = NEJ.P,
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        bg8Y = c7f("nej.h"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        R7K = {};
    v7o.uM4Q = function (L7E, C7v) {
        var bUG6A = JSON.stringify(C7v);
        try {
            bg8Y.bed4h(L7E, bUG6A)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bUG6A != bg8Y.beg4k(L7E)) R7K[L7E] = C7v;
        return this
    };
    v7o.tV3x = function (L7E) {
        var i7b = JSON.parse(bg8Y.beg4k(L7E) || "null");
        return i7b == null ? R7K[L7E] : i7b
    };
    v7o.bUF6z = function (L7E, C7v) {
        var i7b = v7o.tV3x(L7E);
        if (i7b == null) {
            i7b = C7v;
            v7o.uM4Q(L7E, i7b)
        }
        return i7b
    };
    v7o.LI8A = function (L7E) {
        delete R7K[L7E];
        bg8Y.bkY6S(L7E);
        return this
    };
    v7o.cHe5j = function () {
        var blR6L = function (p7i, L7E, bz8r) {
            delete bz8r[L7E]
        };
        return function () {
            k7d.eH9y(R7K, blR6L);
            bg8Y.blb6V();
            return this
        }
    }();
    v7o.cHf5k = function (m7f) {
        m7f = m7f || {};
        k7d.bd7W(bg8Y.czi3x(), function (L7E) {
            m7f[L7E] = v7o.tV3x(L7E)
        });
        return m7f
    };
    I7B.fK9B.A7t({
        element: document,
        event: "storageready",
        oneventadd: function () {
            if (bg8Y.bln6h()) {
                document.onstorageready()
            }
        }
    });
    var cyY3x = function () {
        var cyW3x = function (C7v, L7E, bz8r) {
            bg8Y.bed4h(L7E, JSON.stringify(C7v));
            delete bz8r[L7E]
        };
        return function () {
            k7d.eH9y(R7K, cyW3x)
        }
    }();
    h7a.s7l(document, "storageready", cyY3x);
    bg8Y.blm6g()
})();
(function () {
    var c7f = NEJ.P,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ut"),
        Lr8j;
    if (!!O7H.bme7X) return;
    O7H.bme7X = NEJ.C();
    Lr8j = O7H.bme7X.N7G(O7H.cH8z);
    Lr8j.cv8n = function () {
        var gW0x = +(new Date),
            nu2x = "dat-" + gW0x;
        return function () {
            this.cD8v();
            var R7K = this.constructor[nu2x];
            if (!R7K) {
                R7K = {};
                this.constructor[nu2x] = R7K
            }
            this.S7L = R7K
        }
    }();
    Lr8j.B7u = function (L7E) {
        return this.S7L[L7E]
    };
    Lr8j.mJ1x = function (L7E, C7v) {
        var nv2x = this.S7L[L7E];
        this.S7L[L7E] = C7v;
        h7a.z7s(localCache, "cachechange", {
            key: L7E,
            type: "set",
            oldValue: nv2x,
            newValue: C7v
        });
        return this
    };
    Lr8j.cO8G = function (L7E) {
        var nv2x = this.S7L[L7E];
        k7d.XN3x(this.S7L, L7E);
        h7a.z7s(localCache, "cachechange", {
            key: L7E,
            type: "delete",
            oldValue: nv2x,
            newValue: undefined
        });
        return nv2x
    };
    Lr8j.bdK4O = function (Fk7d) {
        return NEJ.Q(this.S7L, Fk7d)
    };
    window.localCache = O7H.bme7X.A7t();
    O7H.fK9B.A7t({
        element: localCache,
        event: "cachechange"
    })
})();
(function () {
    var c7f = NEJ.P,
        fD9u = NEJ.R,
        br8j = NEJ.F,
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        O7H = c7f("nej.ut"),
        nu2x = "dat-" + +(new Date),
        nx2x;
    if (!!O7H.bmo7h) return;
    O7H.bmo7h = NEJ.C();
    nx2x = O7H.bmo7h.N7G(O7H.cH8z);
    nx2x.cv8n = function () {
        this.cD8v();
        this.S7L = this.constructor[nu2x];
        if (!this.S7L) {
            this.S7L = {};
            this.S7L[nu2x + "-l"] = {};
            this.constructor[nu2x] = this.S7L
        }
    };
    nx2x.sZ3x = function (L7E) {
        return this.S7L[L7E]
    };
    nx2x.qb2x = function (L7E, C7v) {
        this.S7L[L7E] = C7v
    };
    nx2x.lP1x = function (L7E, kD1x) {
        var i7b = this.sZ3x(L7E);
        if (i7b == null) {
            i7b = kD1x;
            this.qb2x(L7E, i7b)
        }
        return i7b
    };
    nx2x.cyL3x = function (L7E) {
        if (L7E != null) {
            delete this.S7L[L7E];
            return
        }
        k7d.eH9y(this.S7L, function (p7i, L7E) {
            if (L7E == nu2x + "-l") return;
            this.cyL3x(L7E)
        }, this)
    };
    nx2x.cHg5l = function (L7E) {
        if (!!v7o.LI8A) return v7o.LI8A(L7E)
    };
    nx2x.cyH3x = function (L7E) {
        if (!!v7o.tV3x) return v7o.tV3x(L7E)
    };
    nx2x.cyC3x = function (L7E, C7v) {
        if (!!v7o.uM4Q) v7o.uM4Q(L7E, C7v)
    };
    nx2x.Hb7U = function (L7E, kD1x) {
        var i7b = this.QP1x(L7E);
        if (i7b == null) {
            i7b = kD1x;
            this.yd5i(L7E, i7b)
        }
        return i7b
    };
    nx2x.QP1x = function (L7E) {
        var i7b = this.sZ3x(L7E);
        if (i7b != null) return i7b;
        i7b = this.cyH3x(L7E);
        if (i7b != null) this.qb2x(L7E, i7b);
        return i7b
    };
    nx2x.yd5i = function (L7E, C7v) {
        this.cyC3x(L7E, C7v);
        this.qb2x(L7E, C7v)
    };
    nx2x.bUu6o = function (L7E) {
        if (L7E != null) {
            delete this.S7L[L7E];
            if (!!v7o.LI8A) v7o.LI8A(L7E);
            return
        }
        k7d.eH9y(this.S7L, function (p7i, L7E) {
            if (L7E == nu2x + "-l") return;
            this.bUu6o(L7E)
        }, this)
    };
    nx2x.cHh5m = function () {
        this.bUu6o();
        return this
    };
    nx2x.cHi5n = function (L7E) {
        var i7b = this.S7L[nu2x + "-l"];
        delete i7b[L7E]
    };
    nx2x.bnJ7C = function (L7E) {
        var i7b = this.S7L[nu2x + "-l"],
            bh8Z = fD9u.slice.call(arguments, 1);
        k7d.bd7W(i7b[L7E], function (cC8u) {
            try {
                cC8u.apply(null, bh8Z)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete i7b[L7E]
    };
    nx2x.bnR7K = function (L7E, cC8u) {
        cC8u = cC8u || br8j;
        var j7c = this.S7L[nu2x + "-l"][L7E];
        if (!j7c) {
            j7c = [cC8u];
            this.S7L[nu2x + "-l"][L7E] = j7c;
            return !1
        }
        j7c.push(cC8u);
        return !0
    };
    nx2x.cyt3x = function (j7c, bj8b, gk0x) {
        if (!j7c) return !1;
        bj8b = parseInt(bj8b) || 0;
        gk0x = parseInt(gk0x) || 0;
        if (!gk0x) {
            if (!j7c.loaded) return !1;
            gk0x = j7c.length
        }
        if (!!j7c.loaded) gk0x = Math.min(gk0x, j7c.length - bj8b);
        for (var i = 0; i < gk0x; i++)
            if (!j7c[bj8b + i]) return !1;
        return !0
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ut"),
        b7g, K7D;
    if (!!O7H.Ry1x) return;
    O7H.Ry1x = NEJ.C();
    b7g = O7H.Ry1x.N7G(O7H.bmo7h);
    K7D = O7H.Ry1x.cr8j;
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.yc5h = e7d.key || "id";
        this.be8W = e7d.data || bb7U;
        this.cyr3x = !!e7d.autogc;
        this.cyq3x(e7d.id)
    };
    b7g.bB8t = function () {
        this.bG8y();
        if (!!this.dJ9A) {
            this.bUq6k()
        }
    };
    b7g.cyq3x = function (D7w) {
        var R7K;
        if (!!D7w) {
            R7K = this.S7L[D7w];
            if (!R7K) {
                R7K = {};
                this.S7L[D7w] = R7K
            }
        }
        R7K = R7K || this.S7L;
        R7K.hash = R7K.hash || {};
        this.RD1x = R7K
    };
    b7g.bUq6k = function () {
        this.dJ9A = window.clearTimeout(this.dJ9A);
        var bz8r = {};
        k7d.eH9y(this.RD1x, function (j7c, L7E) {
            if (L7E == "hash") return;
            if (!k7d.ec9T(j7c)) return;
            k7d.bd7W(j7c, function (p7i) {
                if (!p7i) return;
                bz8r[p7i[this.yc5h]] = !0
            }, this)
        }, this);
        k7d.eH9y(this.bcJ4N(), function (p7i, D7w, dR9I) {
            if (!bz8r[D7w]) {
                delete dR9I[D7w]
            }
        })
    };
    b7g.cyn3x = function () {
        if (!!this.dJ9A) {
            this.dJ9A = window.clearTimeout(this.dJ9A)
        }
        this.dJ9A = window.setTimeout(this.bUq6k.f7c(this), 150)
    };
    b7g.CJ6D = function (p7i, bcw4A) {
        p7i = this.bUp6j(p7i, bcw4A) || p7i;
        if (!p7i) return null;
        var L7E = p7i[this.yc5h];
        if (L7E != null) {
            var gx0x = this.bcJ4N()[L7E];
            if (!!gx0x) p7i = NEJ.X(gx0x, p7i);
            this.bcJ4N()[L7E] = p7i
        }
        delete p7i.bUo6i;
        return p7i
    };
    b7g.bUp6j = br8j;
    b7g.boI8A = function (L7E, p7i) {
        if (!p7i) return;
        if (!k7d.ec9T(p7i)) {
            var j7c = this.hH0x(L7E),
                p7i = this.CJ6D(p7i, L7E);
            if (!!p7i) j7c.unshift(p7i);
            return
        }
        k7d.nC2x(p7i, this.boI8A.f7c(this, L7E))
    };
    b7g.RV1x = function (L7E, cB8t) {
        var j7c = this.hH0x(L7E);
        j7c.length = Math.max(j7c.length, cB8t);
        this.bpg8Y(L7E);
        return this
    };
    b7g.lE1x = function (L7E) {
        return this.hH0x(L7E).length
    };
    b7g.bpg8Y = function (L7E, pm2x) {
        this.hH0x(L7E).loaded = pm2x != !1;
        return this
    };
    b7g.bco4s = function (L7E) {
        return !!this.hH0x(L7E).loaded
    };
    b7g.uJ4N = function (L7E, j7c) {
        this.wm4q(L7E);
        this.bpS8K({
            key: L7E,
            offset: 0,
            limit: j7c.length + 1
        }, {
            list: j7c,
            total: j7c.length
        })
    };
    b7g.hH0x = function () {
        var FU7N = function (L7E) {
            return (L7E || "") + (!L7E ? "" : "-") + "list"
        };
        return function (L7E) {
            var L7E = FU7N(L7E),
                j7c = this.RD1x[L7E];
            if (!j7c) {
                j7c = [];
                this.RD1x[L7E] = j7c
            }
            return j7c
        }
    }();
    b7g.bcJ4N = function () {
        var dR9I = this.RD1x.hash;
        if (!dR9I) {
            dR9I = {};
            this.RD1x.hash = dR9I
        }
        return dR9I
    };
    b7g.bqa8S = function () {
        var FU7N = function (e7d) {
            return "r-" + e7d.key
        };
        return function (e7d) {
            var iZ0x = NEJ.X({}, e7d),
                oH2x = FU7N(iZ0x);
            if (!this.bnR7K(oH2x, this.z7s.f7c(this))) {
                iZ0x.rkey = oH2x;
                iZ0x.onload = this.cyj3x.f7c(this, iZ0x);
                this.z7s("dopullrefresh", iZ0x)
            }
            return this
        }
    }();
    b7g.cyj3x = function (e7d, j7c) {
        this.boI8A(e7d.key, j7c);
        this.bnJ7C(e7d.rkey, "onpullrefresh", e7d)
    };
    b7g.lJ1x = function () {
        var FU7N = function (e7d) {
            return "r-" + e7d.key + "-" + e7d.offset + "-" + e7d.limit
        };
        return function (e7d) {
            e7d = e7d || bb7U;
            var iZ0x = {
                    key: "" + e7d.key || "",
                    ext: e7d.ext || null,
                    data: e7d.data || null,
                    offset: parseInt(e7d.offset) || 0,
                    limit: parseInt(e7d.limit) || 0
                },
                j7c = this.hH0x(iZ0x.key);
            if (this.cyt3x(j7c, iZ0x.offset, iZ0x.limit)) {
                this.z7s("onlistload", iZ0x);
                return this
            }
            var oH2x = FU7N(iZ0x);
            if (!this.bnR7K(oH2x, this.z7s.f7c(this))) {
                iZ0x.rkey = oH2x;
                iZ0x.onload = this.bpS8K.f7c(this, iZ0x);
                this.z7s("doloadlist", iZ0x)
            }
            return this
        }
    }();
    b7g.bpS8K = function () {
        var Fm7f = function (p7i, r7k, j7c) {
            if (!!p7i) {
                return !0
            }
            j7c.splice(r7k, 1)
        };
        return function (e7d, m7f) {
            e7d = e7d || bb7U;
            var L7E = e7d.key,
                bj8b = e7d.offset,
                bUn6h = this.hH0x(L7E);
            var j7c = m7f || [];
            if (!k7d.ec9T(j7c)) {
                j7c = m7f.result || m7f.list || [];
                var cB8t = parseInt(m7f.total);
                if (!isNaN(cB8t) || cB8t > j7c.length) {
                    this.RV1x(L7E, cB8t)
                }
            }
            k7d.bd7W(j7c, function (p7i, r7k) {
                bUn6h[bj8b + r7k] = this.CJ6D(p7i, L7E)
            }, this);
            if (j7c.length < e7d.limit) {
                this.bpg8Y(L7E);
                k7d.nC2x(bUn6h, Fm7f)
            }
            this.bnJ7C(e7d.rkey, "onlistload", e7d)
        }
    }();
    b7g.wm4q = function () {
        var Fm7f = function (p7i, r7k, j7c) {
            j7c.splice(r7k, 1)
        };
        return function (L7E) {
            var j7c = this.hH0x(L7E);
            k7d.nC2x(j7c, Fm7f);
            this.bpg8Y(L7E, !1);
            if (this.cyr3x) {
                this.cyn3x()
            }
            return this
        }
    }();
    b7g.bUm6g = function (p7i, bcw4A) {
        return !p7i.bUo6i
    };
    b7g.eO9F = function (D7w) {
        return this.bcJ4N()[D7w]
    };
    b7g.cHj5o = function (D7w) {
        var p7i = this.eO9F(D7w);
        if (!!p7i) p7i.bUo6i = !0
    };
    b7g.bcg4k = function () {
        var FU7N = function (e7d) {
            return "r-" + e7d.key + "-" + e7d.id
        };
        return function (e7d) {
            e7d = e7d || bb7U;
            var D7w = e7d[this.yc5h],
                iZ0x = {
                    id: D7w,
                    ext: e7d.ext,
                    data: e7d.data || {},
                    key: "" + e7d.key || ""
                };
            p7i = this.eO9F(D7w);
            iZ0x.data[this.yc5h] = D7w;
            if (!!p7i && this.bUm6g(p7i, iZ0x.key)) {
                this.z7s("onitemload", iZ0x);
                return this
            }
            var oH2x = FU7N(iZ0x);
            if (!this.bnR7K(oH2x, this.z7s.f7c(this))) {
                iZ0x.rkey = oH2x;
                iZ0x.onload = this.cyd3x.f7c(this, iZ0x);
                this.z7s("doloaditem", iZ0x)
            }
            return this
        }
    }();
    b7g.cyd3x = function (e7d, p7i) {
        e7d = e7d || bb7U;
        this.CJ6D(p7i, e7d.key);
        this.bnJ7C(e7d.rkey, "onitemload", e7d)
    };
    b7g.jq0x = function (e7d) {
        e7d = NEJ.X({}, e7d);
        e7d.onload = this.Ae5j.f7c(this, e7d);
        this.z7s("doadditem", e7d)
    };
    b7g.Ae5j = function (e7d, p7i) {
        var L7E = e7d.key;
        p7i = this.CJ6D(p7i, L7E);
        if (!!p7i) {
            var fg9X = 0,
                j7c = this.hH0x(L7E);
            if (!e7d.push) {
                fg9X = -1;
                var bj8b = e7d.offset || 0;
                j7c.splice(bj8b, 0, p7i)
            } else if (j7c.loaded) {
                fg9X = 1;
                j7c.push(p7i)
            } else {
                j7c.length++
            }
        }
        var d7e = {
            key: L7E,
            flag: fg9X,
            data: p7i,
            action: "add",
            ext: e7d.ext
        };
        this.z7s("onitemadd", d7e);
        return d7e
    };
    b7g.JF8x = function (e7d) {
        e7d = NEJ.X({}, e7d);
        e7d.onload = this.brE8w.f7c(this, e7d);
        this.z7s("dodeleteitem", e7d)
    };
    b7g.brE8w = function (e7d, bUk6e) {
        var p7i, L7E = e7d.key;
        if (!!bUk6e) {
            p7i = this.eO9F(e7d.id) || null;
            var D7w = e7d.id,
                cxW3x = this.yc5h,
                j7c = this.hH0x(L7E),
                r7k = k7d.dm9d(j7c, function (gx0x) {
                    return !!gx0x && gx0x[cxW3x] == D7w
                });
            if (r7k >= 0) j7c.splice(r7k, 1)
        }
        var d7e = {
            key: L7E,
            data: p7i,
            action: "delete",
            ext: e7d.ext
        };
        this.z7s("onitemdelete", d7e);
        return d7e
    };
    b7g.bbL4P = function (e7d) {
        e7d = NEJ.X({}, e7d);
        e7d.onload = this.cxU3x.f7c(this, e7d);
        this.z7s("doupdateitem", e7d)
    };
    b7g.cxU3x = function (e7d, p7i) {
        var L7E = e7d.key;
        if (!!p7i) p7i = this.CJ6D(p7i, L7E);
        var d7e = {
            key: L7E,
            data: p7i,
            action: "update",
            ext: e7d.ext
        };
        this.z7s("onitemupdate", d7e);
        return d7e
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ut"),
        b7g;
    if (!!O7H.brU9L) return;
    O7H.brU9L = NEJ.C();
    b7g = O7H.brU9L.N7G(O7H.Ry1x);
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.bgO5T({
            doloadlist: this.bbI4M.f7c(this),
            doloaditem: this.bsa9R.f7c(this),
            doadditem: this.bTZ6T.f7c(this),
            dodeleteitem: this.bby4C.f7c(this),
            doupdateitem: this.bbx4B.f7c(this),
            dopullrefresh: this.bTY6S.f7c(this)
        })
    };
    b7g.bbI4M = br8j;
    b7g.bTY6S = br8j;
    b7g.bsa9R = br8j;
    b7g.bTZ6T = br8j;
    b7g.bby4C = br8j;
    b7g.bbx4B = br8j
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        b7g, K7D;
    q7j.hE0x = NEJ.C();
    b7g = q7j.hE0x.N7G(I7B.brU9L);
    b7g.cm8e = function () {
        var Cd6X = location.protocol + "//" + location.host;
        var cxq2x = function (bt8l, i7b) {
            var bz8r = {
                conf: {},
                data: {},
                urls: []
            };
            k7d.bd7W(bt8l, function (L7E, r7k, j7c) {
                var bi8a = q7j.B7u(L7E);
                if (!bi8a) return;
                var btp9g = bTW6Q(bi8a.url, i7b[L7E]);
                bz8r.urls.push(btp9g);
                bz8r.conf[btp9g] = bi8a;
                bz8r.data[btp9g] = JSON.stringify(i7b[L7E] == null ? "" : i7b[L7E])
            });
            return bz8r
        };
        var bTW6Q = function (Y7R, i7b) {
            return Y7R.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return i7b[$2] || $1
            })
        };
        var bTP6J = function (bi8a, e7d, d7e) {
            h7a.z7s(window, "requesterror", d7e);
            if (!!d7e.stopped) return;
            var BX6R = bi8a.onerror || e7d.onerror;
            if (k7d.fJ9A(BX6R)) {
                this.z7s(BX6R, d7e, e7d)
            } else {
                (BX6R || br8j).call(this, d7e, e7d)
            }
            var d7e = {
                result: d7e,
                option: e7d
            };
            this.z7s("onerror", d7e);
            if (!d7e.stopped)(bi8a.onmessage || br8j).call(this, d7e.result.code, d7e.result)
        };
        var bTN6H = function (Q7J, bi8a, e7d) {
            var m7f = Q7J;
            if (k7d.gO0x(bi8a.format)) {
                m7f = bi8a.format.call(this, Q7J, e7d)
            }
            return m7f
        };
        var Ab5g = function (Q7J, bi8a, e7d, wC4G) {
            if (k7d.gO0x(bi8a.beforeload)) {
                bi8a.beforeload.call(this, Q7J, e7d, bi8a)
            }
            if (Q7J && Q7J.code != null && Q7J.code != 200) {
                bTP6J.call(this, bi8a, e7d, {
                    key: e7d.key,
                    code: Q7J.code,
                    message: Q7J.message || "",
                    captchaId: Q7J.captchaId,
                    ext: Q7J
                });
                return
            }
            var m7f = Q7J;
            if (!wC4G) {
                m7f = bTN6H.call(this, Q7J, bi8a, e7d)
            } else if (k7d.gO0x(bi8a.format)) {
                var btA9r = [];
                k7d.bd7W(wC4G.urls, function (Y7R) {
                    btA9r.push(bTN6H.call(this, Q7J[Y7R], wC4G.conf[Y7R], e7d))
                }, this);
                btA9r.push(e7d);
                m7f = bi8a.format.apply(this, btA9r)
            }
            var og2x = bi8a.onload || e7d.onload,
                bTM6G = bi8a.finaly || e7d.finaly || br8j;
            if (k7d.fJ9A(og2x)) {
                bTM6G.call(this, this.z7s(og2x, m7f), e7d)
            } else {
                bTM6G.call(this, (og2x || br8j).call(this, m7f), e7d)
            }
        };
        var Cm6g = function (bi8a, e7d, bY8Q) {
            bTP6J.call(this, bi8a, e7d, {
                key: e7d.key,
                code: bY8Q.code || -1,
                message: bY8Q.message || ""
            })
        };
        return function (bi8a, e7d) {
            if (k7d.fJ9A(bi8a)) {
                bi8a = q7j.B7u(bi8a)
            }
            delete e7d.value;
            (bi8a.filter || br8j).call(this, e7d, bi8a);
            var Q7J = e7d.value;
            if (!!Q7J) {
                Ab5g.call(this, Q7J, bi8a, e7d);
                return
            }
            var Y7R, i7b = e7d.data || bb7U,
                zT5Y = {
                    cookie: !0,
                    type: bi8a.rtype || "json",
                    method: bi8a.type || "POST",
                    onerror: Cm6g.f7c(this, bi8a, e7d),
                    noescape: bi8a.noescape
                };
            if (k7d.ec9T(bi8a.url)) {
                var wC4G = cxq2x(bi8a.url, i7b);
                Y7R = Cd6X + "/api/batch";
                zT5Y.data = k7d.cz8r(wC4G.data);
                zT5Y.onload = Ab5g.ex9o(this, bi8a, e7d, wC4G);
                zT5Y.headers = {
                    "batch-method": "POST"
                };
                delete wC4G.data
            } else {
                var kB1x = bi8a.url.indexOf(":") < 0 ? Cd6X : "";
                Y7R = bTW6Q(kB1x + bi8a.url, i7b);
                zT5Y.data = k7d.cz8r(e7d.data);
                zT5Y.onload = Ab5g.ex9o(this, bi8a, e7d)
            }
            if (zT5Y.method == "GET") zT5Y.query = zT5Y.data;
            return v7o.bk8c(Y7R, zT5Y)
        }
    }();
    b7g.Fj7c = function () {
        var gM0x = /^get|list|pull$/i;
        return function (bTJ6D, e7d) {
            var L7E = e7d.key,
                bi8a = q7j.B7u(L7E.split("-")[0] + "-" + bTJ6D);
            if (gM0x.test(bTJ6D) && L7E.indexOf("post-") < 0) bi8a.type = "GET";
            this.cm8e(bi8a, e7d)
        }
    }();
    b7g.cHm5r = function (L7E, j7c) {
        var cB8t = j7c.length;
        this.bpS8K({
            key: L7E,
            offset: 0,
            limit: cB8t + 1
        }, {
            list: j7c,
            total: cB8t
        })
    };
    b7g.bbI4M = function (e7d) {
        this.Fj7c("list", e7d)
    };
    b7g.bsa9R = function (e7d) {
        this.Fj7c("get", e7d)
    };
    b7g.bTY6S = function (e7d) {
        this.Fj7c("pull", e7d)
    };
    b7g.bTZ6T = function (e7d) {
        this.Fj7c("add", e7d)
    };
    b7g.bby4C = function (e7d) {
        this.Fj7c("del", e7d)
    };
    b7g.bbx4B = function (e7d) {
        this.Fj7c("update", e7d)
    };
    b7g.cwQ2x = function (p7i) {
        this.CJ6D(p7i)
    };
    I7B.fK9B.A7t({
        element: window,
        event: "requesterror"
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        q7j = c7f("nm.d"),
        bum9d = {},
        b7g, K7D;
    var va4e = function (m7f, e7d) {
        m7f.conf = e7d.conf;
        return m7f
    };
    q7j.fp9g({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function (Q7J, e7d) {
                return va4e({
                    mv: Q7J
                }, e7d)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function (m7f, e7d) {
                if (!!m7f.songs && m7f.songs.length > 0) m7f.song = m7f.songs[0];
                else m7f.song = bum9d;
                delete m7f.songs;
                return va4e(m7f, e7d)
            },
            filter: function (e7d) {
                e7d.data.ids = "[" + e7d.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: va4e
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: va4e
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function (m7f, e7d) {
                m7f.playlist = m7f.result;
                delete m7f.result;
                return va4e(m7f, e7d)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: va4e
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: va4e
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: va4e
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (e7d) {
                var j7c = e7d.data.id.split("-");
                e7d.data.radioId = j7c[0];
                e7d.data.asc = j7c[1] == 2;
                e7d.data.limit = 1e3;
                delete e7d.data.id
            },
            format: function (Q7J, e7d) {
                var cwN2x = {
                    id: e7d.data.radioId,
                    programs: Q7J.programs
                };
                return va4e({
                    djradio: cwN2x
                }, e7d)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: va4e
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (e7d) {
                e7d.data.lv = 0;
                e7d.data.tv = 0
            },
            format: function (m7f, e7d) {
                var xX5c = {
                    lyric: "",
                    nolyric: true
                };
                if (m7f.code == 200 && m7f.lrc && m7f.lrc.lyric) {
                    xX5c.lyric = m7f.lrc.lyric;
                    xX5c.nolyric = false
                } else {
                    xX5c.nolyric = true
                }
                return va4e({
                    lyric: xX5c
                }, e7d)
            }
        }
    });
    q7j.xW4a = NEJ.C();
    b7g = q7j.xW4a.N7G(q7j.hE0x);
    b7g.cwK2x = function (u7n, cV8N) {
        return this.sZ3x(this.ZF3x(u7n, cV8N))
    };
    b7g.TV2x = function (u7n, cV8N, e7d) {
        e7d = e7d || {};
        var i7b = this.sZ3x(this.ZF3x(u7n, cV8N));
        if (i7b && (u7n != 13 && u7n != 19 || e7d.conf && e7d.conf.useCache)) {
            this.z7s("onresourceload", u7n, cV8N, i7b, e7d.conf);
            return
        }
        e7d.data = {
            id: cV8N
        };
        e7d.onload = this.cwH2x.f7c(this, u7n, cV8N);
        e7d.onerror = this.cwG2x.f7c(this, u7n, cV8N);
        this.cm8e("res-" + this.BE6y(u7n) + "-get", e7d)
    };
    b7g.cwH2x = function (u7n, cV8N, m7f) {
        var i7b = m7f[this.BE6y(u7n)];
        this.qb2x(this.ZF3x(u7n, cV8N), i7b);
        this.z7s("onresourceload", u7n, cV8N, i7b, m7f.conf)
    };
    b7g.cwG2x = function (u7n, cV8N, m7f, e7d) {
        if (m7f.code != 404) {
            this.z7s("onresourceerror", u7n, cV8N, m7f.code);
            return
        }
        this.qb2x(this.ZF3x(u7n, cV8N), bum9d);
        this.z7s("onresourceload", u7n, cV8N, bum9d, e7d.conf)
    };
    b7g.cHo5t = function (u7n, e7d) {
        this.cm8e("res-" + this.BE6y(u7n) + "-play", e7d)
    };
    b7g.ZF3x = function (u7n, cV8N) {
        return "res-" + this.BE6y(u7n) + "-" + cV8N
    };
    b7g.BE6y = function (u7n) {
        var bz8r = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bz8r[u7n]
    };
    q7j.xW4a.Mp9g = function (u7n, cV8N) {
        if (!this.fr9i) this.fr9i = q7j.xW4a.A7t({});
        return this.fr9i.cwK2x(u7n, cV8N)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        bwg0x = /^[1-9][0-9]*$/,
        b7g, K7D;
    var LOCAL_LOG_KEY = "local-log";
    q7j.fp9g({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    q7j.hP0x = NEJ.C();
    b7g = q7j.hP0x.N7G(q7j.hE0x);
    b7g.eR9I = function (U7N, bi8a) {
        if (!U7N || !bi8a) return;
        if (k7d.fJ9A(bi8a)) {
            try {
                bi8a = JSON.parse(bi8a)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a6g)
                }
            }
        }
        if (!k7d.lY1x(bi8a)) return;
        this.cm8e("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: U7N,
                    json: bi8a
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + U7N + ", json=" + JSON.stringify(bi8a))
        }
    };
    b7g.YL3x = function (ok2x) {
        if (!k7d.ec9T(ok2x)) return;
        this.cm8e("bi-batch-log", {
            data: {
                logs: JSON.stringify(ok2x)
            }
        })
    };
    b7g.bTB6v = function (bi8a) {
        if (!bi8a || !bi8a.type || !bi8a.rid) return;
        var ol2x = bi8a.type;
        if (bwg0x.test(ol2x)) {
            ol2x = this.BE6y(ol2x)
        }
        if (!ol2x) return;
        if (ol2x == "playlist") ol2x = "list";
        this.eR9I("search", {
            type: ol2x,
            id: bi8a.rid || null,
            keyword: bi8a.keyword || null
        })
    };
    b7g.UG2x = function () {
        var cwk2x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bi8a) {
            if (!bi8a || !bi8a.type || !bi8a.rid) return;
            if (bi8a.play === undefined) bi8a.play = true;
            var ol2x = bi8a.type;
            if (bwg0x.test(ol2x)) {
                ol2x = this.BE6y(ol2x)
            }
            if (!ol2x) return;
            if (ol2x == "playlist") ol2x = "list";
            var Q7J = {
                id: bi8a.rid,
                type: ol2x
            };
            if (ol2x == "song" && bi8a.source) {
                Q7J.source = this.bTz6t(bi8a.source);
                if (!!bi8a.sourceid) Q7J.sourceid = bi8a.sourceid
            }
            this.eR9I(!bi8a.play ? "addto" : "play", Q7J);
            if (ol2x == "song" && bi8a.hash && bi8a.hash.match(cwk2x)) {
                this.eR9I(!bi8a.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b7g.bwN0x = function (D7w, bA8s, ei9Z, Ez6t) {
        var Q7J = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cwi2x = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        Q7J.id = D7w;
        Q7J.time = Math.round(bA8s);
        Q7J.end = k7d.fJ9A(Ez6t) ? Ez6t : cwi2x[Ez6t] || "";
        if (ei9Z && ei9Z.fid) {
            Q7J.source = this.bTz6t(ei9Z.fid);
            Q7J.sourceId = ei9Z.fdata
        }
        this.eR9I("play", Q7J)
    };
    b7g.bTw6q = function (u7n, cV8N) {
        if (!u7n || !cV8N) return;
        if (bwg0x.test(u7n)) u7n = this.BE6y(u7n);
        if (u7n != "playlist" && u7n != "dj") return;
        var bi8a = q7j.B7u("plus-" + u7n + "-count");
        if (!bi8a) return !1;
        this.cm8e(bi8a, {
            data: {
                id: cV8N
            }
        });
        var R7K = this.lP1x("play-hist-" + u7n, []);
        if (k7d.dm9d(R7K, cV8N) < 0) {
            R7K.push(cV8N);
            return !0
        }
        return !1
    };
    b7g.BE6y = function (u7n) {
        var bz8r = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bz8r[u7n]
    };
    b7g.bTz6t = function (LY9P) {
        var bz8r = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bz8r[LY9P]
    };
    b7g.bTv6p = function (hq0x) {
        var ok2x = this.Hb7U(LOCAL_LOG_KEY, []);
        ok2x.unshift(hq0x);
        if (ok2x.length > 200) {
            ok2x.length = 200
        }
        this.yd5i(LOCAL_LOG_KEY, ok2x)
    };
    b7g.cvY2x = function () {
        return this.QP1x(LOCAL_LOG_KEY)
    };
    b7g.er9i = function (Q7J) {
        this.eR9I("play", Q7J)
    };
    var bTr6l = q7j.hP0x.fR9I();
    l7e.sq3x = function () {
        bTr6l.eR9I.apply(bTr6l, arguments)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        n7g = c7f("nm.l"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d");
    var FullscreenApi = l7e.HA7t || {};
    if (!q7j.xW4a) return;
    var R7K = q7j.xW4a.A7t({
        onresourceload: cvS2x
    });
    var vO4S = q7j.hP0x.fR9I();

    function cvS2x(u7n, cV8N, i7b, bi8a) {
        var j7c = [];
        switch (parseInt(u7n)) {
            case 2:
                j7c = i7b;
                break;
            case 13:
                j7c = i7b.tracks;
                break;
            case 18:
                j7c.push(i7b);
                break;
            case 19:
                j7c = i7b.songs;
                break;
            case 21:
                if (i7b.mp && i7b.mp.fee && i7b.mp.pl <= 0) {
                    l7e.YB3x(i7b.data.id, i7b.mp.fee);
                    return
                }
                break
        }
        if (l7e.Lz8r(j7c, true, null, u7n == 19 ? {
                source: "album",
                sourceid: cV8N
            } : null) == 0) {
            return
        }
        l7e.eN9E({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bi8a.message
        })
    }

    function cvR2x(d7e, nW2x, zA5F, dV9M) {
        dV9M = dV9M || {};
        if (d7e.action == "ok") {
            if (zA5F) {
                location.dispatch2("/payfee?songId=" + zA5F)
            } else {
                location.dispatch2("/payfee?fee=" + nW2x || 1)
            }
            vO4S.eR9I("click", {
                type: "tobuyvip",
                name: "box",
                source: dV9M.source || "song",
                sourceid: dV9M.sourceid || zA5F || 0
            })
        } else if (d7e.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + zA5F);
            vO4S.eR9I("click", {
                type: "tobuyone",
                name: "box",
                source: dV9M.source || "song",
                sourceid: dV9M.sourceid || zA5F || 0
            })
        }
    }

    function Vf2x(bF8x) {
        l7e.eN9E({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bF8x,
            btntxt: "知道了"
        })
    }

    function Vm2x(bF8x, Q7J) {
        Vf2x((Q7J || bb7U).toast || bF8x)
    }
    l7e.iE0x = function (bF8x, D7w, u7n, cvQ2x, bl8d) {
        bF8x = bF8x || "由于版权保护，您所在的地区暂时无法使用。";
        if (cvQ2x && bl8d && bl8d.privilege && bl8d.privilege.toast) {
            v7o.bk8c("/api/song/toast", {
                query: {
                    id: bl8d.id
                },
                type: "json",
                onload: Vm2x.f7c(this, bF8x),
                onerror: Vm2x.f7c(this, bF8x)
            })
        } else if (D7w && u7n) {
            R7K.TV2x(u7n, D7w, {
                conf: {
                    message: bF8x,
                    useCache: u7n != 18
                }
            })
        } else {
            Vf2x(bF8x)
        }
    };
    l7e.wc4g = function (nW2x, zA5F, u7n, dV9M, nH2x) {
        var bT8L, ph2x = "m-popup-info",
            byD0x = "单首购买",
            byE0x = "马上去开通",
            cP8H = "唱片公司要求，当前歌曲须付费使用。",
            bTp6j = true;
        try {
            bT8L = top.api.feeMessage || {}
        } catch (e) {
            bT8L = {}
        }
        if (nW2x == 1 || nW2x == 8 || nW2x == 16) {
            if (u7n == "song") {
                ph2x = "m-popup-song-buy";
                cP8H = bT8L["vip2"] || cP8H;
                byE0x = bT8L["vip2button"] || "包月购买";
                byD0x = bT8L["vip2link"] || byD0x;
                if (nH2x && nH2x.flag !== undefined) {
                    var bt8l = nH2x.flag.toString(2).split("");
                    if (parseInt(bt8l.pop(), 10) == 1) {
                        bTp6j = false
                    }
                }
            } else {
                cP8H = bT8L["vip"] || cP8H
            }
        } else if (nW2x == 4) {
            cP8H = bT8L["album"] || cP8H;
            byE0x = "立即订购"
        } else {
            cP8H = bT8L["unknow"] || cP8H
        }
        l7e.jY1x({
            clazz: "m-layer-w5",
            html: a6g.cc8U(ph2x, {
                songTxt: byD0x,
                tip: cP8H,
                oktext: byE0x,
                cctext: "以后再说",
                showSongText: bTp6j
            }),
            onaction: cvR2x.ex9o(null, nW2x, zA5F, dV9M)
        })
    };
    l7e.bTo6i = function (hM0x, gu0x) {
        l7e.hC0x({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (u7n) {
                if (u7n == "ok") {
                    l7e.Md9U({
                        id: hM0x,
                        type: gu0x
                    })
                }
            }
        })
    };
    l7e.YB3x = function (kr1x, nW2x) {
        var bT8L, cP8H = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bT8L = top.api.feeMessage || {}
        } catch (e) {
            bT8L = {}
        }
        if (nW2x == 1 || nW2x == 8) {
            cP8H = bT8L["vip"] || cP8H
        } else if (nW2x == 4) {
            cP8H = bT8L["album"] || cP8H
        } else {
            cP8H = bT8L["unknow"] || cP8H
        }
        return l7e.jY1x({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a6g.cc8U("m-popup-info", {
                tip: cP8H,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function (d7e) {
                if (d7e.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + kr1x);
                    vO4S.eR9I("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: kr1x || 0
                    })
                }
            }
        })
    };
    l7e.Lz8r = function () {
        function compareFee(cvI2x, cvF2x) {
            var bz8r = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bz8r[cvI2x] || 0) - (bz8r[cvF2x] || 0)
        }
        return function (j7c, cP8H, sI3x, dV9M) {
            sI3x = sI3x || {};
            var AX5c = [],
                Lf8X = {},
                bTn6h = 0,
                bTm6g = 0,
                Ld8V = null;
            if (!j7c || !j7c.length) return AX5c;
            k7d.bd7W(j7c, function (bl8d) {
                var fF9w = l7e.qc2x(bl8d);
                if (fF9w == 0) {
                    AX5c.push(bl8d)
                } else if (fF9w == 10) {
                    if (bl8d.privilege) {
                        bl8d.fee = bl8d.privilege.fee
                    }
                    if (compareFee(bl8d.fee, Lf8X.fee) > 0) {
                        Lf8X = bl8d
                    }
                } else if (fF9w == 11) {
                    ++bTn6h;
                    if (!sI3x.play) AX5c.push(bl8d)
                } else if (fF9w == 1e3) {
                    ++bTm6g;
                    if (!sI3x.download) AX5c.push(bl8d)
                } else if (fF9w == 100) {
                    Ld8V = bl8d
                }
            });
            if (AX5c.length == 0 && cP8H) {
                if (bTn6h == j7c.length) {
                    var tK3x = j7c[0].privilege || {};
                    if (tK3x.payed) {
                        l7e.iE0x("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l7e.wc4g(tK3x.fee, null, null, dV9M)
                    }
                } else if (bTm6g == j7c.length) {
                    l7e.iE0x("因版权方要求，该歌曲不支持下载")
                } else if (Lf8X.id) {
                    l7e.wc4g(Lf8X.fee, Lf8X.id, null, dV9M, Lf8X.privilege)
                } else {
                    if (Ld8V && j7c.length == 1 && Ld8V.privilege && Ld8V.privilege.st < 0 && Ld8V.privilege.toast) {
                        l7e.iE0x(null, null, null, true, Ld8V)
                    } else {
                        l7e.iE0x()
                    }
                }
            }
            return AX5c
        }
    }();
    l7e.qc2x = function (bl8d) {
        if (!bl8d) return 0;
        var fF9w = bl8d.privilege;
        if (bl8d.program) return 0;
        if (window.GAbroad) return 100;
        if (fF9w) {
            if (fF9w.st != null && fF9w.st < 0) {
                return 100
            }
            if (fF9w.fee > 0 && fF9w.fee != 8 && fF9w.payed == 0 && fF9w.pl <= 0) return 10;
            if (fF9w.fee == 16) return 11;
            if ((fF9w.fee == 0 || fF9w.payed) && fF9w.pl > 0 && fF9w.dl == 0) return 1e3;
            if (fF9w.pl == 0 && fF9w.dl == 0) return 100;
            return 0
        } else {
            var eA9r = bl8d.status != null ? bl8d.status : bl8d.st != null ? bl8d.st : 0;
            if (bl8d.status >= 0) return 0;
            if (bl8d.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        fD9u = NEJ.R,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        x7q = c7f("nm.w"),
        b7g;
    if (!!x7q.bTl6f) return;
    var cl8d = ~[];
    cl8d = {
        bTj6d: ++cl8d,
        cvz2x: (![] + "")[cl8d],
        kz1x: ++cl8d,
        KW8O: (![] + "")[cl8d],
        Yj3x: (cl8d[cl8d] + "")[cl8d],
        bTi6c: ++cl8d,
        cHr5w: ({} + "")[cl8d],
        cvv2x: (cl8d[cl8d] + "")[cl8d],
        cvt2x: (![] + "")[cl8d],
        VP2x: ++cl8d,
        XP3x: (!"" + "")[cl8d],
        cHs5x: ++cl8d,
        DZ6T: ++cl8d,
        bTe6Y: ({} + "")[cl8d],
        xJ4N: ++cl8d,
        cvp2x: ++cl8d,
        cHt5y: ++cl8d,
        cHu5z: ++cl8d
    };
    cl8d.Ks8k = (cl8d.Ks8k = cl8d + "")[cl8d.DZ6T] + (cl8d.Ko8g = cl8d.Ks8k[cl8d.kz1x]) + (cl8d.Xp3x = (cl8d.HS7L + "")[cl8d.kz1x]) + (!cl8d + "")[cl8d.VP2x] + (cl8d.HH7A = cl8d.Ks8k[cl8d.xJ4N]) + (cl8d.HS7L = (!"" + "")[cl8d.kz1x]) + (cvm2x = (!"" + "")[cl8d.bTi6c]) + cl8d.Ks8k[cl8d.DZ6T] + cl8d.HH7A + cl8d.Ko8g + cl8d.HS7L;
    cl8d.Xp3x = cl8d.HS7L + (!"" + "")[cl8d.VP2x] + cl8d.HH7A + cvm2x + cl8d.HS7L + cl8d.Xp3x;
    cl8d.HS7L = cl8d.bTj6d[cl8d.Ks8k][cl8d.Ks8k];
    x7q.bTl6f = cl8d
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        h7a = c7f("nej.v"),
        a6g = c7f("nej.e"),
        O7H = c7f("nej.ui"),
        b7g;
    if (!!O7H.Xn3x) return;
    var iX0x = a6g.uK4O(".#<uispace>{position:absolute;background:#fff;}");
    O7H.Xn3x = NEJ.C();
    b7g = O7H.Xn3x.N7G(O7H.QB0x);
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.bX8P([
            [document, "click", this.ts3x.f7c(this)]
        ]);
        this.cvl2x = !!e7d.nostop;
        this.bTd6X = {
            top: e7d.top,
            left: e7d.left
        }
    };
    b7g.bB8t = function () {
        delete this.zi5n;
        delete this.bjd6X;
        delete this.qT3x;
        delete this.bTc6W;
        delete this.Xh3x;
        delete this.bTd6X;
        this.bG8y()
    };
    b7g.cf8X = function () {
        this.mt1x = iX0x
    };
    b7g.bV8N = function () {
        this.ch8Z();
        this.Dl6f = this.o7h;
        h7a.s7l(this.o7h, "click", this.cvh2x.f7c(this))
    };
    b7g.ts3x = function (d7e) {
        if (d7e.button != 2) this.bq8i()
    };
    b7g.cvh2x = function (d7e) {
        if (this.cvl2x) return;
        h7a.tH3x(d7e);
        var G7z = h7a.X7Q(d7e);
        if (G7z.tagName == "A") h7a.co8g(d7e)
    };
    b7g.cvf2x = function () {
        var dh9Y = /\s+/i;
        return function (on2x) {
            on2x = (on2x || "").trim().toLowerCase().split(dh9Y);
            on2x[0] = on2x[0] || "bottom";
            on2x[1] = on2x[1] || "left";
            this.qT3x = on2x
        }
    }();
    b7g.cve2x = function (on2x) {
        var m7f = {},
            ns2x = this.bjd6X,
            cHv5A = a6g.oJ2x(),
            cG8y = this.o7h.offsetWidth,
            cg8Y = this.o7h.offsetHeight;
        switch (on2x[0]) {
            case "top":
                m7f.top = ns2x.top - cg8Y;
                m7f.left = on2x[1] == "right" ? ns2x.left + ns2x.width - cG8y : ns2x.left;
                break;
            case "left":
                m7f.left = ns2x.left - cG8y;
                m7f.top = on2x[1] == "bottom" ? ns2x.top + ns2x.height - cg8Y : ns2x.top;
                break;
            case "right":
                m7f.left = ns2x.left + ns2x.width;
                m7f.top = on2x[1] == "bottom" ? ns2x.top + ns2x.height - cg8Y : ns2x.top;
                break;
            default:
                m7f.top = ns2x.top + ns2x.height;
                m7f.left = on2x[1] == "right" ? ns2x.left + ns2x.width - cG8y : ns2x.left;
                break
        }
        return m7f
    };
    b7g.LN8F = function () {
        if (!this.bTc6W) {
            this.gL0x(this.bTd6X);
            return
        }
        if (!!this.Xh3x) {
            this.gL0x(this.zi5n);
            return
        }
        if (!!this.bjd6X) this.gL0x(this.cve2x(this.qT3x))
    };
    b7g.cvc2x = function (G7z, dr9i, d7e) {
        dr9i = dr9i || bb7U;
        var bTa6U = a6g.oJ2x(),
            db8T = h7a.jN1x(d7e) + (dr9i.left || 0),
            hO0x = h7a.mg1x(d7e) + (dr9i.top || 0),
            cG8y = G7z.offsetWidth + (dr9i.right || 0),
            cg8Y = G7z.offsetHeight + (dr9i.bottom || 0),
            Jp8h = bTa6U.scrollWidth,
            bjG6A = bTa6U.scrollHeight,
            bjN6H = db8T + cG8y,
            bjO6I = hO0x + cg8Y;
        switch (this.qT3x[0]) {
            case "top":
                hO0x = bjO6I > bjG6A ? hO0x - cg8Y : hO0x;
                if (this.qT3x[1] == "right") {
                    db8T = db8T - cG8y < 0 ? 0 : db8T - cG8y
                } else {
                    db8T = bjN6H > Jp8h ? Jp8h - cG8y : db8T
                }
                break;
            case "left":
                db8T = bjN6H > Jp8h ? Jp8h - cG8y : db8T;
                if (this.qT3x[1] == "top") {
                    hO0x = bjO6I > bjG6A ? hO0x - cg8Y : hO0x
                } else {
                    hO0x = hO0x - cg8Y < 0 ? hO0x : hO0x - cg8Y
                }
                break;
            case "right":
                db8T = db8T - cG8y < 0 ? 0 : db8T - cG8y;
                if (this.qT3x[1] == "top") {
                    hO0x = bjO6I > bjG6A ? hO0x - cg8Y : hO0x
                } else {
                    hO0x = hO0x - cg8Y < 0 ? hO0x : hO0x - cg8Y
                }
                break;
            default:
                hO0x = hO0x - cg8Y < 0 ? hO0x : hO0x - cg8Y;
                if (this.qT3x[1] == "left") {
                    db8T = bjN6H > Jp8h ? Jp8h - cG8y : db8T
                } else {
                    db8T = db8T - cG8y < 0 ? 0 : db8T - cG8y
                }
                break
        }
        return {
            top: hO0x,
            left: db8T
        }
    };
    b7g.bjP6J = function () {
        var cuX2x = function (G7z, dr9i) {
            G7z = a6g.B7u(G7z);
            if (!G7z) return;
            dr9i = dr9i || bb7U;
            var bj8b = a6g.ic0x(G7z);
            return {
                top: bj8b.y - (dr9i.top || 0),
                left: bj8b.x - (dr9i.left || 0),
                width: G7z.offsetWidth + (dr9i.right || 0),
                height: G7z.offsetHeight + (dr9i.bottom || 0)
            }
        };
        return function (e7d) {
            e7d = e7d || bb7U;
            this.Xh3x = e7d.event;
            this.cvf2x(e7d.align);
            if (!!this.Xh3x) this.zi5n = this.cvc2x(e7d.target, e7d.delta, this.Xh3x);
            this.bjd6X = cuX2x(e7d.target, e7d.delta);
            this.bTc6W = !!e7d.fitable;
            this.J7C();
            return this
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ui"),
        b7g, K7D;
    if (!!O7H.Dq6k) return;
    O7H.Dq6k = NEJ.C();
    b7g = O7H.Dq6k.N7G(O7H.bem4q);
    K7D = O7H.Dq6k.cr8j;
    O7H.Dq6k.cHw5B = function () {
        var cuV2x = function (d7e, D7w, fV9M, kG1x, WH2x) {
            var cF8x, L7E = D7w + "-i",
                R7K = fV9M.yW5b,
                bSY6S = !!kG1x.noclear,
                bSV6P = !!kG1x.toggled;
            if (k7d.gO0x(kG1x.onbeforeclick)) {
                var Xj3x = kG1x.noclear,
                    cuN2x = kG1x.toggled;
                try {
                    kG1x.onbeforeclick(kG1x)
                } catch (e) {}
                bSY6S = !!kG1x.noclear;
                bSV6P = !!kG1x.toggled;
                kG1x.toggled = cuN2x;
                kG1x.noclear = Xj3x
            }
            var GN7G = R7K[L7E];
            if (bSV6P && !!GN7G) {
                GN7G.bq8i();
                return
            }
            h7a.bf8X(d7e);
            if (!bSY6S) {
                h7a.z7s(document, "click");
                cF8x = fV9M.A7t(kG1x)
            } else {
                cF8x = fV9M.bWZ7S(kG1x, !0)
            }
            R7K[L7E] = cF8x;
            cF8x.xE4I("onbeforerecycle", function () {
                delete R7K[L7E]
            });
            cF8x.bjP6J(WH2x)
        };
        return function (g7b, e7d) {
            g7b = a6g.B7u(g7b);
            if (!g7b) return this;
            if (!this.yW5b) this.yW5b = {};
            var D7w = a6g.lQ1x(g7b);
            if (!!this.yW5b[D7w]) return this;
            e7d = NEJ.X({}, e7d);
            var WH2x = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e7d);
            WH2x.target = D7w;
            e7d.destroyable = !0;
            if (!e7d.fixed) {
                WH2x.fitable = !0;
                e7d.parent = document.body
            }
            this.yW5b[D7w] = [D7w, e7d.event || "click", cuV2x.ex9o(null, D7w, this, e7d, WH2x)];
            h7a.s7l.apply(h7a, this.yW5b[D7w]);
            return this
        }
    }();
    O7H.Dq6k.cHy5D = function (g7b) {
        if (!this.yW5b) return this;
        var D7w = a6g.lQ1x(g7b),
            d7e = this.yW5b[D7w];
        if (!d7e) return this;
        delete this.yW5b[D7w];
        h7a.mL1x.apply(h7a, d7e);
        var cF8x = this.yW5b[D7w + "-i"];
        if (!!cF8x) cF8x.bq8i();
        return this
    };
    b7g.bkL6F = function () {
        return O7H.Xn3x.A7t(this.ci8a)
    };
    b7g.PY0x = function () {
        K7D.PY0x.apply(this, arguments);
        this.ci8a.top = null;
        this.ci8a.left = null;
        this.ci8a.nostop = !1
    };
    b7g.bjP6J = function (e7d) {
        if (!!this.pl2x) this.pl2x.bjP6J(e7d);
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bc7V = c7f("nej.ui"),
        n7g = c7f("nm.l"),
        b7g, K7D;
    n7g.bkJ6D = NEJ.C();
    b7g = n7g.bkJ6D.N7G(bc7V.Dq6k);
    b7g.bm8e = function (e7d) {
        e7d.nohack = true;
        this.bn8f(e7d)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        n7g = c7f("nm.l"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    var FullscreenApi = l7e.HA7t || {};
    n7g.Z7S = NEJ.C();
    b7g = n7g.Z7S.N7G(n7g.bkJ6D);
    K7D = n7g.Z7S.cr8j;
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.eC9t = e7d.type || 1
    };
    b7g.bV8N = function () {
        this.ch8Z();
        this.o7h = a6g.nY2x(this.cuL2x());
        var j7c = a6g.df9W(this.o7h);
        this.qW3x = j7c[0];
        this.cM8E = j7c[1]
    };
    b7g.cuL2x = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b7g.LN8F = function () {
        var C7v = {},
            cj8b = this.o7h.style,
            jM1x = a6g.oJ2x(),
            of2x = {
                left: jM1x.scrollLeft,
                top: jM1x.scrollTop
            },
            dr9i = {
                left: jM1x.clientWidth - this.o7h.offsetWidth,
                top: jM1x.clientHeight - this.o7h.offsetHeight
            };
        C7v.top = Math.max(0, of2x.top + dr9i.top / 2);
        C7v.left = Math.max(0, of2x.left + dr9i.left / 2);
        this.pl2x.gL0x(C7v)
    };
    b7g.J7C = function (e7d) {
        K7D.J7C.call(this);
        this.LN8F();
        this.eC9t == 1 ? a6g.fo9f(this.qW3x, "u-icn-32", "u-icn-31") : a6g.fo9f(this.qW3x, "u-icn-31", "u-icn-32");
        this.cM8E.innerHTML = e7d.tip || ""
    };
    window.g_showTipCard = n7g.Z7S.J7C = function () {
        var ej9a;
        return function (e7d) {
            clearTimeout(ej9a);
            if (e7d.parent === undefined) e7d.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e7d.autoclose === undefined) e7d.autoclose = true;
            e7d.clazz = "m-sysmsg";
            !!this.fr9i && this.fr9i.T7M();
            this.fr9i = this.A7t(e7d);
            this.fr9i.J7C(e7d);
            if (e7d.autoclose) ej9a = setTimeout(this.bq8i.f7c(this), 2e3)
        }.f7c(n7g.Z7S)
    }();
    n7g.Z7S.bq8i = function () {
        !!this.fr9i && this.fr9i.bq8i()
    }
})();
(function () {
    var c7f = NEJ.P,
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v7o.bk8c = v7o.bk8c.eL9C(function (d7e) {
            e7d = d7e.args[1];
            e7d.query = e7d.query || {};
            if (k7d.fJ9A(e7d.query)) e7d.query = k7d.hf0x(e7d.query);
            e7d.query.ref = "mail"
        })
    }
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        fD9u = NEJ.R,
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        q7j = c7f("nm.d"),
        n7g = c7f("nm.l"),
        L7E = "playlist-tracks_",
        b7g;
    q7j.fp9g({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function (Q7J, e7d) {
                this.cuK2x(Q7J.playlist);
                return {
                    total: 0,
                    list: fD9u
                }
            },
            onerror: function () {
                this.z7s("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function (Q7J, e7d) {
                var nM2x = Q7J.playlist;
                nM2x.creator = GUser;
                nM2x.isHost = !0;
                nM2x.typeFlag = "playlist";
                return nM2x
            },
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.io0x, "listchange", d7e)
            },
            onmessage: function () {
                var ms1x = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (bZ8R) {
                    n7g.Z7S.J7C({
                        tip: ms1x[bZ8R] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function (e7d) {
                e7d.id = e7d.data.pid
            },
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.io0x, "listchange", d7e)
            },
            onmessage: function () {
                var ms1x = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (bZ8R) {
                    n7g.Z7S.J7C({
                        tip: ms1x[bZ8R] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function (e7d) {
                var dV9M = e7d.ext || {};
                e7d.ext = NEJ.X(dV9M, e7d.data);
                e7d.data = {
                    id: e7d.ext.id
                }
            },
            format: function (Q7J, e7d) {
                n7g.Z7S.J7C({
                    tip: "收藏成功" + (Q7J.point > 0 ? ' 获得<em class="s-fc6">' + Q7J.point + "积分</em>" : "")
                });
                var p7i = e7d.ext;
                p7i.subscribedCount++;
                return p7i
            },
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.cuJ2x, "listchange", d7e);
                h7a.z7s(q7j.cuJ2x, "itemchange", {
                    attr: "subscribedCount",
                    data: d7e.data
                })
            },
            onmessage: function () {
                var ms1x = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function (bZ8R) {
                    n7g.Z7S.J7C({
                        type: 2,
                        tip: ms1x[bZ8R] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function (e7d) {
                e7d.id = e7d.data.id = e7d.data.pid
            },
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.io0x, "listchange", d7e)
            },
            onmessage: function () {
                var ms1x = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (bZ8R) {
                    n7g.Z7S.J7C({
                        tip: ms1x[bZ8R],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e7d) {
                var i7b = e7d.data,
                    Xm3x = {};
                Xm3x["playlist-update-name"] = {
                    id: i7b.id,
                    name: i7b.name
                };
                Xm3x["playlist-update-tag"] = {
                    id: i7b.id,
                    tags: i7b.tags.join(";")
                };
                Xm3x["playlist-update-desc"] = {
                    id: i7b.id,
                    desc: i7b.description
                };
                e7d.data = Xm3x;
                e7d.ext = i7b
            },
            format: function (W7P, rk3x, Wx2x, e7d) {
                if (W7P.code == 200 && rk3x.code == 200 && Wx2x.code == 200) {
                    e7d.ext.allSuccess = true;
                    n7g.Z7S.J7C({
                        tip: "保存成功"
                    })
                } else if (W7P.code == 407 || rk3x.code == 407 || Wx2x.code == 407) {
                    e7d.ext.allSuccess = false;
                    n7g.Z7S.J7C({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e7d.ext.allSuccess = false;
                    n7g.Z7S.J7C({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eO9F(e7d.ext.id)
            },
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.io0x, "listchange", d7e)
            },
            onmessage: function (bZ8R) {
                n7g.Z7S.J7C({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function (Q7J, e7d) {
                var p7i = this.eO9F(e7d.ext.id);
                if (Q7J.code == 200) p7i.name = e7d.ext.name;
                return Q7J
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function (Q7J, e7d) {
                var p7i = this.eO9F(e7d.ext.id);
                if (Q7J.code == 200) p7i.tags = e7d.ext.tags;
                return Q7J
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function (Q7J, e7d) {
                var p7i = this.eO9F(e7d.ext.id);
                if (Q7J.code == 200) p7i.description = e7d.ext.description;
                return Q7J
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function (e7d) {
                e7d.url = e7d.data.url;
                delete e7d.data.url
            },
            format: function (Q7J, e7d) {
                n7g.Z7S.J7C({
                    tip: "保存成功"
                });
                var p7i = this.eO9F(e7d.data.id);
                p7i.coverImgUrl = e7d.url;
                e7d.ext = p7i;
                return p7i
            },
            onmessage: function (bZ8R) {
                n7g.Z7S.J7C({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.io0x, "itemchange", {
                    attr: "coverImgUrl",
                    data: e7d.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function (Q7J, e7d) {
                var nM2x = this.eO9F(e7d.data.id);
                if (!nM2x) return;
                nM2x.playCount++;
                h7a.z7s(q7j.io0x, "itemchange", {
                    attr: "playcount",
                    data: nM2x
                })
            }
        }
    });
    q7j.io0x = NEJ.C();
    b7g = q7j.io0x.N7G(q7j.hE0x);
    b7g.cv8n = function () {
        this.cD8v()
    };
    b7g.bSU6O = function () {
        var do9f = GUser.userId;
        this.lJ1x({
            limit: 1001,
            key: "playlist_my-" + do9f,
            data: {
                offset: 0,
                limit: 1001,
                uid: do9f
            }
        })
    };
    b7g.cuK2x = function (j7c) {
        var do9f = GUser.userId,
            iW0x = [],
            bST6N = [];
        k7d.bd7W(j7c, function (p7i) {
            p7i.typeFlag = "playlist";
            if (p7i.creator && p7i.creator.userId == do9f) {
                if (p7i.specialType == 5) p7i.name = "我喜欢的音乐";
                p7i.isHost = !0;
                iW0x.push(p7i)
            } else {
                bST6N.push(p7i)
            }
        });
        this.uJ4N("playlist_new-" + do9f, iW0x);
        this.uJ4N("playlist_fav-" + do9f, bST6N)
    };
    b7g.cuG2x = function (i7b) {
        this.cm8e("playlist-update-cover", {
            data: i7b
        })
    };
    b7g.cHz5E = function () {
        var Wq2x = this.cuE2x.B7u("host-plist");
        if (Wq2x.length == 0) {
            return
        }
        if (Wq2x.length == 1 && Wq2x[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Wq2x.length; i < len; i++) {
            var p7i = Wq2x[i];
            if (p7i.trackCount > 0) return p7i.id
        }
        return this.cuE2x.B7u("host-plist")[0].id
    };
    b7g.cuD2x = function (D7w) {
        if (GUser && GUser.userId > 0) {
            this.cm8e("playlist-upcount", {
                data: {
                    id: D7w
                }
            })
        }
    };
    b7g.Gi7b = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b7g.cHA5F = function () {
        return GUser.userId
    };
    b7g.Gf7Y = function (p7i) {
        if (p7i.userId == GUser.userId && p7i.specialType == 5) p7i.name = "我喜欢的音乐";
        h7a.z7s(this.constructor, "itemchange", {
            data: this.CJ6D(p7i)
        });
        return p7i
    };
    I7B.fK9B.A7t({
        element: q7j.io0x,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function () {
    var c7f = NEJ.P,
        fD9u = NEJ.R,
        br8j = NEJ.F,
        bb7U = NEJ.O,
        I7B = c7f("nej.ut"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        n7g = c7f("nm.l"),
        b7g, K7D;
    q7j.fp9g({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function (Q7J) {
                return Q7J.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (e7d) {
                e7d.data.limit = 1e3;
                delete e7d.data.id
            },
            format: function (Q7J, e7d) {
                var bSR6L = [],
                    pT2x = Q7J.programs;
                if (pT2x) {
                    for (var i = 0, l = pT2x.length; i < l; i++) {
                        if (pT2x[i].programFeeType < 10 || pT2x[i].buyed) {
                            bSR6L.push(pT2x[i])
                        }
                    }
                }
                return bSR6L
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function (Q7J, e7d) {
                return Q7J.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function (e7d) {
                e7d.ext = e7d.data;
                e7d.data = {
                    id: e7d.ext.id
                };
                e7d.id = e7d.data.id
            },
            format: function (Q7J, e7d) {
                n7g.Z7S.J7C({
                    tip: "收藏成功"
                });
                var p7i = e7d.ext;
                p7i.subscribedCount++;
                p7i.subscribed = !0;
                return p7i
            },
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.rC3x, "listchange", d7e)
            },
            onmessage: function () {
                var ms1x = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function (bZ8R) {
                    n7g.Z7S.J7C({
                        type: 2,
                        tip: ms1x[bZ8R] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.rC3x, "listchange", d7e)
            },
            onmessage: function () {
                var ms1x = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function (bZ8R) {
                    l7e.blW7P({
                        txt: ms1x[bZ8R] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function (e7d) {
                var p7i = this.eO9F(e7d.data.id) || bb7U;
                e7d.ext = (p7i.listenerCount || 0) + 1
            },
            format: function (Q7J, e7d) {
                var p7i = this.eO9F(e7d.data.id);
                if (!!p7i) {
                    p7i.listenerCount = Math.max(e7d.ext, p7i.listenerCount || 0)
                }
            },
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.rC3x, "itemchange", {
                    attr: "playCount",
                    data: this.eO9F(e7d.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function (e7d) {
                e7d.data = {
                    threadId: "A_DJ_1_" + e7d.id
                }
            },
            format: function (Q7J, e7d) {
                var p7i = e7d.ext.data || this.eO9F(e7d.id);
                p7i.liked = true;
                p7i.likedCount++;
                e7d.ext.data = p7i;
                try {
                    top.player.setLike(p7i)
                } catch (e) {}
                return p7i
            },
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.rC3x, "itemchange", {
                    attr: "likedCount",
                    data: e7d.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function (e7d) {
                e7d.data = {
                    threadId: "A_DJ_1_" + e7d.id
                }
            },
            format: function (Q7J, e7d) {
                var p7i = e7d.ext.data || this.eO9F(e7d.id);
                p7i.liked = false;
                p7i.likedCount--;
                e7d.ext.data = p7i;
                try {
                    top.player.setLike(p7i)
                } catch (e) {}
                return p7i
            },
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.rC3x, "itemchange", {
                    attr: "likedCount",
                    data: e7d.ext.data
                })
            }
        }
    });
    q7j.rC3x = NEJ.C();
    b7g = q7j.rC3x.N7G(q7j.hE0x);
    b7g.cHB5G = function () {
        var do9f = GUser.userId;
        this.lJ1x({
            limit: 1001,
            key: "program_fav-" + do9f,
            data: {
                offset: 0,
                limit: 1e3,
                uid: do9f
            }
        })
    };
    b7g.cHC5H = function (da8S) {
        var oE2x = da8S[this.yc5h];
        l7e.cux2x(4, function (R7K) {
            R7K.uJ4N("track_program-" + oE2x, da8S.songs)
        });
        delete da8S.songs;
        var bP8H = da8S.mainSong;
        l7e.cux2x(4, function (R7K) {
            R7K.uJ4N("track_program_main-" + oE2x, !bP8H ? [] : [bP8H])
        });
        da8S.mainSong = (bP8H || bb7U).id
    };
    b7g.cHD5I = function (D7w) {
        var da8S = this.eO9F(D7w),
            do9f = localCache.bdK4O("host.profile.userId");
        return !!da8S && da8S.dj.userId == do9f
    };
    b7g.cHE5J = function (D7w) {
        return !1
    };
    b7g.Gf7Y = function (p7i) {
        h7a.z7s(this.constructor, "itemchange", {
            attr: "detail",
            data: this.CJ6D(p7i)
        });
        return p7i
    };
    b7g.cuD2x = function (D7w) {
        this.cm8e("program-update-count", {
            data: {
                id: D7w
            }
        })
    };
    l7e.bSM6G = function (e7d) {
        var R7K = q7j.rC3x.A7t({
            onitemadd: function () {
                (e7d.onsuccess || br8j)()
            },
            onerror: function () {
                (e7d.onerror || br8j)()
            }
        });
        if (e7d.data.liked) {
            R7K.wl4p(e7d.data)
        } else {
            R7K.pj2x(e7d.data)
        }
    };
    b7g.pj2x = function (da8S) {
        if (!l7e.gZ0x()) return;
        var cu8m = {
            ext: {}
        };
        if (k7d.lY1x(da8S)) {
            cu8m.id = da8S.id;
            cu8m.ext.data = da8S
        } else {
            cu8m.id = da8S
        }
        this.cm8e("program-like", cu8m)
    };
    b7g.wl4p = function (da8S) {
        if (!l7e.gZ0x()) return;
        var cu8m = {
            ext: {}
        };
        if (k7d.lY1x(da8S)) {
            cu8m.id = da8S.id;
            cu8m.ext.data = da8S
        } else {
            cu8m.id = da8S
        }
        this.cm8e("program-unlike", cu8m)
    };
    I7B.fK9B.A7t({
        element: q7j.rC3x,
        event: ["listchange", "itemchange"]
    })
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        fD9u = NEJ.R,
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        q7j = c7f("nm.d"),
        n7g = c7f("nm.l"),
        l7e = c7f("nm.x"),
        L7E = "playlist-tracks_",
        l7e = c7f("nm.x"),
        b7g;
    q7j.fp9g({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function (e7d) {
                e7d.data.c = JSON.stringify([{
                    id: e7d.data.id
                }])
            },
            format: function (Q7J, e7d) {
                var bl8d = l7e.Cz6t(Q7J.songs[0]);
                bl8d.privilege = Q7J.privileges[0];
                return bl8d
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function (e7d) {
                e7d.data.n = 1e3
            },
            format: function (Q7J, e7d) {
                var hG0x = [];
                this.tL3x.Gf7Y(Q7J.playlist);
                k7d.bd7W(Q7J.playlist.tracks, function (bP8H, r7k) {
                    var bSL6F = l7e.Cz6t(bP8H);
                    bSL6F.privilege = Q7J.privileges[r7k];
                    hG0x.push(bSL6F)
                }, this);
                return hG0x
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function (Q7J, e7d) {
                var hG0x = [];
                k7d.bd7W(Q7J.songs, function (bl8d) {
                    hG0x.push(l7e.Cz6t(bl8d))
                });
                return hG0x
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (e7d) {
                var bz8r = {},
                    i7b = e7d.data,
                    cun2x = this.hH0x(e7d.key) || [];
                FF7y = [];
                k7d.bd7W(cun2x, function (bP8H) {
                    var D7w = k7d.lY1x(bP8H) ? bP8H.id : bP8H;
                    bz8r[D7w] = true
                });
                e7d.ext = [];
                k7d.bd7W(i7b.tracks, function (bP8H) {
                    var D7w = k7d.lY1x(bP8H) ? bP8H.id : bP8H;
                    if (!bz8r[D7w]) {
                        FF7y.push(D7w);
                        bz8r[D7w] = true;
                        e7d.ext.push(bP8H)
                    }
                });
                i7b.trackIds = JSON.stringify(FF7y);
                i7b.op = "add";
                if (!FF7y.length) {
                    e7d.value = {
                        code: 502
                    }
                }
            },
            format: function (Q7J, e7d) {
                n7g.Z7S.J7C({
                    tip: "已添加至歌单"
                });
                var nM2x = this.tL3x.eO9F(e7d.data.pid);
                if (!!Q7J.coverImgUrl) nM2x.coverImgUrl = Q7J.coverImgUrl;
                k7d.nC2x(e7d.ext, function (bP8H) {
                    this.Ae5j(e7d, k7d.lY1x(bP8H) ? bP8H : null);
                    if (!!nM2x) nM2x.trackCount++
                }, this);
                h7a.z7s(q7j.io0x, "itemchange", {
                    data: nM2x || {},
                    cmd: "add"
                });
                this.z7s("onaddsuccess");
                return null
            },
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.wt4x, "listchange", {
                    key: e7d.key,
                    action: "refresh"
                });
                var oE2x = e7d.data.pid,
                    cB8t = this.lE1x(e7d.key)
            },
            onmessage: function () {
                var ms1x = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function (bZ8R) {
                    setTimeout(function () {
                        n7g.Z7S.J7C({
                            tip: ms1x[bZ8R] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (e7d) {
                var i7b = e7d.data;
                e7d.ext = i7b.trackIds;
                i7b.trackIds = JSON.stringify(i7b.trackIds);
                i7b.op = "del"
            },
            format: function (Q7J, e7d) {
                var nM2x = this.tL3x.eO9F(e7d.data.pid);
                k7d.bd7W(e7d.ext, function (D7w) {
                    this.brE8w({
                        id: D7w,
                        key: "track_playlist-" + e7d.data.pid
                    }, !0);
                    if (!!nM2x) nM2x.trackCount = Math.max(0, nM2x.trackCount - 1)
                }, this);
                h7a.z7s(q7j.io0x, "itemchange", {
                    data: nM2x || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function (d7e, e7d) {
                h7a.z7s(q7j.wt4x, "listchange", {
                    key: e7d.key,
                    action: "refresh"
                })
            },
            onmessage: function (bZ8R) {
                l7e.blW7P({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function (Q7J, e7d) {
                return this.bSJ6D.Gf7Y(Q7J.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function (Q7J, e7d) {
                var j7c = [];
                if (e7d.data.type == -1) {
                    if (Q7J.weekData && Q7J.weekData.length) {
                        e7d.data.type = 1
                    } else {
                        e7d.data.type = 0
                    }
                }
                if (e7d.data.type == 1) {
                    j7c = this.bSI6C(Q7J.weekData)
                } else {
                    j7c = this.bSI6C(Q7J.allData)
                }
                return j7c
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function (Q7J, e7d) {
                var ok2x = [],
                    j7c = Q7J.recommend || [];
                k7d.bd7W(j7c, function (bl8d, r7k) {
                    ok2x.push({
                        action: "recommendimpress",
                        json: {
                            alg: bl8d.alg,
                            scene: "user-song",
                            position: r7k,
                            id: bl8d.id
                        }
                    })
                });
                this.kN1x.YL3x(ok2x);
                e7d.limit = j7c.length;
                return j7c
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (e7d) {
                e7d.data.lv = 0;
                e7d.data.tv = 0
            },
            format: function (m7f, e7d) {
                return m7f
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    q7j.wt4x = NEJ.C();
    b7g = q7j.wt4x.N7G(q7j.hE0x);
    b7g.cv8n = function () {
        this.cD8v();
        this.tL3x = q7j.io0x.A7t();
        this.bSJ6D = q7j.rC3x.A7t();
        this.kN1x = q7j.hP0x.A7t()
    };
    b7g.bSI6C = function (j7c) {
        var m7f = [],
            fv9m = 0;
        k7d.bd7W(j7c, function (p7i, r7k) {
            var bl8d = l7e.Cz6t(p7i.song);
            if (r7k == 0) {
                fv9m = p7i.score
            }
            bl8d.max = fv9m;
            bl8d.playCount = p7i.playCount;
            bl8d.score = p7i.score;
            m7f.push(bl8d)
        });
        return m7f
    };
    I7B.fK9B.A7t({
        element: q7j.wt4x,
        event: ["listchange"]
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        cw8o = c7f("nm.pc");
    var bnF7y = {
        playlist: "A_PL_0_",
        dj: "A_DJ_1_",
        program: "A_DJ_1_",
        album: "R_AL_3_",
        song: "R_SO_4_"
    };
    var qS3x = function (bT8L) {
        var Cd6X = "orpheus://orpheus";
        window.top.postMessage(JSON.stringify(bT8L), Cd6X)
    };
    var cug2x = function (mv1x) {
        var lm1x = "http://" + location.host + "/",
            VH2x = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
            dS9J = VH2x.exec(mv1x);
        if (!dS9J) return cue2x(mv1x);
        var gu0x = dS9J[2],
            hM0x = dS9J[3],
            do9f = dS9J[4] || "",
            jt0x = "";
        switch (gu0x) {
            case "album":
                jt0x = "#/m/album/comment/?rid=" + bnF7y[gu0x] + hM0x + "&id=" + hM0x;
                break;
            case "playlist":
                jt0x = "#/m/playlist/comment/?rid=" + bnF7y[gu0x] + hM0x + "&id=" + hM0x;
                break;
            case "song":
            case "dj":
            case "program":
                jt0x = "#/m/song?rid=" + bnF7y[gu0x] + hM0x;
                break;
            case "event":
                jt0x = "#/m/friend/event/?id=" + hM0x + "&uid=" + do9f;
                break;
            case "user/home":
                jt0x = "#/m/personal/?uid=" + hM0x;
                break;
            case "mv":
                jt0x = "#/m2/mv/?id=" + hM0x;
                break;
            case "activity":
                jt0x = "#/m/friend/activity?id=" + hM0x;
                break;
            case "video":
                jt0x = "#/m2/mv/?id=" + hM0x + "&type=1";
                break;
            default:
                jt0x = "#/m/" + gu0x + "/?id=" + hM0x
        }
        return lm1x + jt0x
    };
    var cue2x = function (mv1x) {
        var cuc2x = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dS9J = cuc2x.exec(mv1x);
        if (dS9J) return "http://v.youku.com/v_show/id_" + dS9J[1];
        return mv1x
    };
    cw8o.er9i = function (gu0x, hM0x) {
        qS3x({
            name: "play",
            args: {
                type: gu0x,
                id: hM0x
            }
        })
    };
    cw8o.fM9D = function () {
        qS3x({
            name: "pause"
        })
    };
    cw8o.Cc6W = function (mv1x) {
        qS3x({
            name: "open",
            args: {
                link: cug2x(mv1x)
            }
        })
    };
    cw8o.kR1x = function (gu0x, hM0x, cL8D) {
        qS3x({
            name: "share",
            args: {
                type: gu0x,
                id: hM0x,
                shareContent: cL8D
            }
        })
    };
    cw8o.bSx6r = function (gu0x, hM0x) {
        qS3x({
            name: "comment",
            args: {
                type: gu0x,
                id: hM0x
            }
        })
    };
    cw8o.ctI2x = function () {
        qS3x({
            name: "init"
        })
    };
    cw8o.BY6S = function (cg8Y) {
        qS3x({
            name: "setHeight",
            args: {
                height: cg8Y
            }
        })
    };
    cw8o.iy0x = function (bF8x, V7O) {
        qS3x({
            name: "toast",
            args: {
                message: bF8x || "",
                state: V7O
            }
        })
    };
    cw8o.EY7R = function (mv1x) {
        qS3x({
            name: "login",
            args: {
                link: mv1x
            }
        })
    };
    cw8o.bSu6o = function (BR6L) {
        qS3x({
            name: "topbar",
            args: {
                show: !!BR6L
            }
        })
    };
    cw8o.ctr2x = function (bx8p) {
        qS3x({
            name: "refreshtopbar",
            args: {
                info: bx8p
            }
        })
    };
    cw8o.ctq2x = function (bt8l, r7k) {
        qS3x({
            name: "big",
            args: {
                arr: bt8l,
                index: r7k
            }
        })
    };
    cw8o.Md9U = function (cx8p) {
        qS3x({
            name: "download",
            args: {
                img: cx8p
            }
        })
    };
    cw8o.bSn6h = function (cti2x) {
        qS3x({
            name: "scrollable",
            args: {
                scrollable: cti2x
            }
        })
    }
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d,
        d = (new J).d,
        e = (new J).d,
        f = (new J).d,
        g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15],
                            l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74],
                        e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
                    else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
                    else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
                    else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else throw Error(b[146]);
                    else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23],
                            g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {}
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }
                        var d = [c[21], c[141], B[6]],
                            l = [],
                            f = c[139],
                            e = b[327],
                            g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                    g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null,
                            h = null,
                            d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76],
                                l = b[240],
                                g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](),
                                X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]),
                            d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]),
                                d = h[B[7]](b[354]),
                                f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [],
                            f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z) b.forEach(h, void 0);
                            else if (b.length === +b.length)
                            for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else
                            for (c in b)
                                if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }
                    var z = Array.prototype.forEach,
                        I = Array.prototype.map,
                        n = {
                            e: M,
                            j: !0,
                            i: !0,
                            h: !0,
                            b: !0,
                            a: !0
                        };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = [],
                            l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88],
                        d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]),
                                p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta,
                            f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                        e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262],
                                    k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                        }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0,
                        t = {
                            v: b[227]
                        },
                        l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t),
                            t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v,
                            y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y),
                            p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301],
                                z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p),
                            p = na(p, g(y)),
                            E = p = g(p),
                            I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F);
                        else {
                            var n = A.length,
                                J = a[15],
                                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p),
                                ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null;
                            else if (null == D) ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E),
                                ja = f(xa),
                                ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null;
                        else if (G.length == a[15]) ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;)
                                    if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0,
                    Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]],
                    y = window[c[6]],
                    N = a[16],
                    T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158],
                    L = a[158],
                    ha = a[23],
                    va = a[23],
                    d = function (b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    },
                    Za = b[345],
                    S = b[299],
                    V = c[100],
                    fa = a[91],
                    ea = b[275],
                    Ta = ea.length,
                    sa = a[444],
                    ta = a[396],
                    Ya = !1,
                    Xa = !1,
                    O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56],
                    A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A),
                    pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    K = function (c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1;
                    else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () {})();
(function () {
    var bSj6d;
    var uQ4U = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cte2x = 0;
    var bSe6Y = 0;
    var bSd6X = 1;
    var bSb6V = 0;
    var bpu8m = "";
    var bRX6R = "";
    var bRT6N = "";
    var Yv3x = "";
    var Yw3x = "";
    var bpT8L = "";
    var bRS5X = 0;
    var bRR5W = "";
    var Kh8Z = "";
    var Eh6b = 0;
    var bqf8X = ntes_get_domain();
    var bqg8Y = null;
    var cIk5p = "//analytics.163.com";
    var csq1x = function () {};

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bqf8X
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bqf8X
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bqf8X
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "",
            n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var csp1x = 0;
    var UE2x = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * UE2x))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << UE2x) - 1;
        for (var b = 0; b < d.length * UE2x; b += UE2x) {
            c[b >> 5] |= (d.charCodeAt(b / UE2x) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = csp1x ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        Yv3x = "-";
        bpT8L = "-";
        Yw3x = "-";
        var c = window.self,
            b = window.screen,
            a = window.navigator;
        if (c.screen) {
            Yv3x = b.width + "x" + b.height;
            bpT8L = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                Yv3x = f.width + "x" + f.height
            }
        }
        if (a.language) {
            Yw3x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Yw3x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bRS5X = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cIl5q(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || csq1x;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        };
        a.onerror = function () {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bSj6d;
        bpu8m = escape(a || document.location);
        bRX6R = escape(m || document.title);
        bRT6N = l === true ? "" : escape(l || document.referrer);
        bRR5W = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bqg8Y == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bqg8Y = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bpu8m.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bqg8Y) {
                uQ4U = fetch_visitor_hash();
                bSe6Y = 1;
                ntes_set_cookie_long("_ntes_nnid", uQ4U + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uQ4U)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            uQ4U = h.substr(0, o);
            Eh6b = h.substr(o + 1, p - o - 1);
            if (Eh6b == 0) {
                Eh6b = (new Date).getTime();
                f = true
            }
            if (!uQ4U) {
                uQ4U = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", uQ4U + "," + Eh6b);
                ntes_set_cookie_long("_ntes_nuid", uQ4U)
            }
            if (Eh6b != 0 && b - Eh6b > 365 * 86400 * 1e3) {
                Eh6b = 0;
                ntes_set_cookie_long("_ntes_nnid", uQ4U + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uQ4U)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        Kh8Z = c("P_INFO", "P_OINFO");
        Kh8Z = Kh8Z ? Kh8Z.substr(0, Kh8Z.indexOf("|")) : "";
        bSb6V = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", uQ4U, "&_nvtm=", cte2x, "&_nvsf=", bSd6X, "&_nvfi=", bSe6Y, "&_nlag=", Yw3x, "&_nlmf=", bRS5X, "&_nres=", Yv3x, "&_nscd=", bpT8L, "&_nstm=", bSb6V, "&_nurl=", bpu8m, "&_ntit=", bRX6R, "&_nref=", bRT6N, "&_nfla=", bRR5W, "&_nssn=", Kh8Z, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bSd6X = 0;
        neteaseTracker.callback = null
    }
    bSj6d = "iad";
    neteaseTracker()
})();
(function () {})();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {},
        l = d.lib = {},
        s = function () {},
        t = l.Base = {
            extend: function (a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function () {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function () {},
            mixIn: function (a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function () {
                return this.init.prototype.extend(this)
            }
        },
        r = l.WordArray = t.extend({
            init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            },
            toString: function (a) {
                return (a || v).stringify(this)
            },
            concat: function (a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            },
            clamp: function () {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            },
            clone: function () {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function (a) {
                for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
        w = d.enc = {},
        v = w.Hex = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            },
            parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        },
        b = w.Latin1 = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            },
            parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        },
        x = w.Utf8 = {
            stringify: function (a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function (a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
            reset: function () {
                this.i7b = new r.init;
                this.bRL5Q = 0
            },
            YR3x: function (a) {
                "string" == typeof a && (a = x.parse(a));
                this.i7b.concat(a);
                this.bRL5Q += a.sigBytes
            },
            BH6B: function (a) {
                var c = this.i7b,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.bRN5S, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k) this.bRK5P(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            },
            clone: function () {
                var a = t.clone.call(this);
                a.i7b = this.i7b.clone();
                return a
            },
            bRN5S: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function () {
            q.reset.call(this);
            this.brx8p()
        },
        update: function (a) {
            this.YR3x(a);
            this.BH6B();
            return this
        },
        finalize: function (a) {
            a && this.YR3x(a);
            return this.YX3x()
        },
        blockSize: 16,
        bru8m: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        csb1x: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words,
                p = d.sigBytes,
                t = this.bz8r;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function (d) {
            var l = d.length,
                s = this.bz8r,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        bz8r: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        brx8p: function () {
            this.dR9I = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bRK5P: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dR9I.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        YX3x: function () {
            var b = this.i7b,
                n = b.words,
                a = 8 * this.bRL5Q,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.BH6B();
            b = this.dR9I;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function () {
            var b = v.clone.call(this);
            b.dR9I = this.dR9I.clone();
            return b
        }
    });
    t.MD5 = v.bru8m(r);
    t.HmacMD5 = v.csb1x(r)
})(Math);
(function () {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function (d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function (d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function (e, a) {
                return this.create(this.brB8t, e, a)
            },
            createDecryptor: function (e, a) {
                return this.create(this.csa1x, e, a)
            },
            init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bRJ5O = e;
                this.L7E = a;
                this.reset()
            },
            reset: function () {
                t.reset.call(this);
                this.brx8p()
            },
            process: function (e) {
                this.YR3x(e);
                return this.BH6B()
            },
            finalize: function (e) {
                e && this.YR3x(e);
                return this.YX3x()
            },
            keySize: 4,
            ivSize: 4,
            brB8t: 1,
            csa1x: 2,
            bru8m: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        YX3x: function () {
            return this.BH6B(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
        x = function (e, a, b) {
            var c = this.bRI5N;
            c ? this.bRI5N = u : c = this.bRF5K;
            for (var d = 0; d < b; d++) e[a + d] ^= c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function (e, a) {
                return this.Encryptor.create(e, a)
            },
            createDecryptor: function (e, a) {
                return this.Decryptor.create(e, a)
            },
            init: function (e, a) {
                this.bRE5J = e;
                this.bRI5N = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bRE5J,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bRF5K = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bRE5J,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bRF5K = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function () {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this.bRJ5O == this.brB8t) var c = a.createEncryptor;
            else c = a.createDecryptor, this.bRN5S = 1;
            this.fu9l = c.call(a, this, b && b.words)
        },
        bRK5P: function (a, b) {
            this.fu9l.processBlock(a, b)
        },
        YX3x: function () {
            var a = this.cfg.padding;
            if (this.bRJ5O == this.brB8t) {
                a.pad(this.i7b, this.blockSize);
                var b = this.BH6B(!0)
            } else b = this.BH6B(!0), a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function (a) {
                this.mixIn(a)
            },
            toString: function (a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function (a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
            },
            parse: function (a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                b = this.bdN4R(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            bdN4R: function (a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function (a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                c = this.bdN4R(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({
            brx8p: function () {
                for (var a = this.L7E, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.crP1x = d + 6) + 1), e = this.crO1x = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this.crN1x = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function (a, b) {
                this.bRD5I(a, b, this.crO1x, t, r, w, v, l)
            },
            decryptBlock: function (a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.bRD5I(a, c, this.crN1x, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            bRD5I: function (a, b, c, d, e, j, l, f) {
                for (var m = this.crP1x, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p.bru8m(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "),
        d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);) ++c;
    if (c == a.length) d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15,
        c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48,
        c = b + 9,
        d = 97,
        e = d + 25,
        f = 65,
        g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0,
        c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt,
        c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0),
        d = c ? 1 : 0,
        e = new BigInt,
        f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];) --b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a),
        c = a.digits[b],
        d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt,
        e = biHighIndex(a),
        f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
        d = biNumBits(b),
        e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);) ++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;) --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a;;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b;;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1),
        c = biMultiply(b, this.mu),
        d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1),
        f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1),
        h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b;;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
    biRadixBits = 16,
    bitsPerDigit = biRadixBits,
    biRadix = 65536,
    biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix,
    maxDigitVal = biRadix - 1,
    maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
! function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b),
            d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a),
            f = CryptoJS.AES.encrypt(e, c, {
                iv: d,
                mode: CryptoJS.mode.CBC
            });
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {},
            i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }
    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c7f = NEJ.P,
        eq9h = c7f("nej.g"),
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u"),
        Ua2x = c7f("nm.x.ek");
    Ua2x.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Ua2x.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var c7f = NEJ.P,
        eq9h = c7f("nej.g"),
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u"),
        Ua2x = c7f("nm.x.ek"),
        l7e = c7f("nm.x");
    if (v7o.bk8c.redefine) return;
    window.GEnc = true;
    var brX9O = function (crL1x) {
        var m7f = [];
        k7d.bd7W(crL1x, function (crK1x) {
            m7f.push(Ua2x.emj[crK1x])
        });
        return m7f.join("")
    };
    var crH1x = v7o.bk8c;
    v7o.bk8c = function (Y7R, e7d) {
        var i7b = {},
            e7d = NEJ.X({}, e7d),
            lL1x = Y7R.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(Y7R) && !(e7d.headers && e7d.headers[eq9h.yH5M] == eq9h.Ht7m) && !e7d.noEnc) {
            if (lL1x != -1) {
                i7b = k7d.hf0x(Y7R.substring(lL1x + 1));
                Y7R = Y7R.substring(0, lL1x)
            }
            if (e7d.query) {
                i7b = NEJ.X(i7b, k7d.fJ9A(e7d.query) ? k7d.hf0x(e7d.query) : e7d.query)
            }
            if (e7d.data) {
                i7b = NEJ.X(i7b, k7d.fJ9A(e7d.data) ? k7d.hf0x(e7d.data) : e7d.data)
            }
            i7b["csrf_token"] = v7o.gI0x("__csrf");
            Y7R = Y7R.replace("api", "weapi");
            e7d.method = "post";
            delete e7d.query;
            var bRB5G = window.asrsea(JSON.stringify(i7b), brX9O(["流泪", "强"]), brX9O(Ua2x.md), brX9O(["爱心", "女孩", "惊恐", "大笑"]));
            e7d.data = k7d.cz8r({
                params: bRB5G.encText,
                encSecKey: bRB5G.encSecKey
            })
        }
        crH1x(Y7R, e7d)
    };
    v7o.bk8c.redefine = true
})();
(function () {
    window.setTimeout(function () {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
        var getNode = function (tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue) return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0, ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow") return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href) canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL) canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
})();
(function () {})();
(function () {})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        dz9q = c7f("nej.p"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        dE9v = c7f("nm.u"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        n7g = c7f("nm.l"),
        cw8o = c7f("nm.pc"),
        bsl9c = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        i7b = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        },
        crD1x = function () {
            if (h7a && h7a.z7s) {
                h7a.dispatchEventalias = h7a.z7s
            }
        };
    crD1x();
    l7e.bsp9g = function (bP8H) {
        if (!bP8H || bP8H.copyrightId === undefined || !!bP8H.program) return false;
        if (window.GAbroad) {
            bP8H.fee = 0;
            return true
        }
        if (bP8H.status < 0) return true;
        var TQ2x;
        if (typeof GCopyrights !== "undefined") TQ2x = GCopyrights;
        try {
            if (!TQ2x && !!top.GCopyrights) TQ2x = top.GCopyrights
        } catch (e) {}
        if (TQ2x) {
            var r7k = k7d.dm9d(TQ2x, bP8H.copyrightId);
            if (r7k >= 0) return true
        }
        return false
    };
    l7e.bsv9m = function () {
        var Bf5k = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            xa4e = {
                2: "artist",
                13: "playlist",
                17: "dj",
                19: "album",
                18: "song",
                31: "toplist",
                32: "searchsong",
                33: "searchlyric",
                34: "event",
                70: "djradio",
                24: "day",
                50: "record"
            },
            crC1x = {
                song: "单曲",
                album: "专辑",
                artist: "歌手",
                playlist: "歌单",
                dj: "电台节目",
                searchsong: "单曲搜索",
                searchlyric: "歌词搜索",
                toplist: "榜单",
                event: "动态",
                djradio: "电台",
                day: "每日歌曲推荐",
                record: "听歌排行榜"
            };
        var crB1x = function (L7E, i7b, TO2x) {
            switch (L7E) {
                case "event":
                    i7b = i7b.split("|");
                    return "/event?id=" + i7b[0] + "&uid=" + i7b[1];
                case "searchsong":
                case "searchlyric":
                    var u7n = L7E == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(i7b) + "&type=" + u7n;
                case "toplist":
                    return "/discover/toplist?id=" + i7b + "&_hash=songlist-" + TO2x;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + TO2x;;
                case "record":
                    i7b = i7b.split("|");
                    return "/user/songs/rank?id=" + i7b[0] + "&cat=" + i7b[1];
                    break;
                default:
                    return "/" + L7E + "?id=" + i7b + "&_hash=songlist-" + TO2x
            }
        };
        return function (ei9Z, TO2x) {
            if (!ei9Z) return null;
            var LY9P = ei9Z.fid || (ei9Z.type != 18 ? ei9Z.type : null),
                btc9T = ei9Z.fdata || ei9Z.rid,
                bRA5F = ei9Z.page || ei9Z.fhref;
            var L7E = xa4e[LY9P];
            if (!L7E) {
                var AJ5O = (bRA5F || "").match(Bf5k);
                if (AJ5O) L7E = AJ5O[1]
            }
            if (!L7E) return null;
            return {
                title: crC1x[L7E],
                link: !xa4e[LY9P] ? bRA5F : crB1x(L7E, btc9T, TO2x),
                fid: LY9P,
                fdata: btc9T
            }
        }
    }();
    l7e.bab3x = function (kD1x) {
        var dp9g = kD1x;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dp9g = GUser;
        return dp9g
    };
    l7e.gZ0x = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l7e.LJ8B = function () {
        var Bf5k = /#(.*?)$/;
        return function (gG0x) {
            var jQ1x = gG0x === false ? location : top.location;
            return Bf5k.test(jQ1x.href) ? RegExp.$1 : ""
        }
    }();
    l7e.DH6B = function () {
        var DC6w = a6g.dk9b("audio"),
            cry1x = DC6w.canPlayType && DC6w.canPlayType("audio/mpeg");
        if (cry1x) return 2;
        var crx1x = l7e.btS9J().supported;
        if (crx1x) return 1;
        return 0
    };
    l7e.btS9J = function () {
        var gE0x, bub9S = !1,
            bud9U = "";
        if (dz9q.ds9j.browser == "ie") {
            try {
                gE0x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gE0x = null
            }
            if (gE0x) {
                bub9S = !0;
                bud9U = gE0x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gE0x = navigator.plugins["Shockwave Flash"];
                if (gE0x) {
                    bub9S = !0;
                    bud9U = gE0x.description
                }
            }
        }
        return {
            supported: bub9S,
            version: bud9U
        }
    };
    l7e.sb3x = function () {
        return "网易云音乐"
    };
    l7e.crw1x = function () {
        return i7b
    };
    l7e.bRz5E = function (cL8D) {
        var D7w = i7b[cL8D];
        return D7w == null ? "" : bsl9c.replace("{ID}", D7w)
    };
    l7e.xo4s = function (bp8h, ef9W, Df6Z) {
        if (!bp8h) return "";
        if (!!Df6Z) {
            bp8h = l7e.cru1x(bp8h)
        }
        return l7e.bay3x(l7e.crt1x(bp8h, ef9W))
    };
    l7e.baz3x = function () {
        var VH2x = {
                AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
                LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
                ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
                ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
                LING: /\n/g,
                BLANK: /\s/g,
                MLINE: /([ \f\r\t\v]*\n){2,}/g
            },
            buP9G = {
                LINK: '<a href="${url}" class="${klass}">${value}</a>',
                AT: '<a href="${url}" class="${klass}">@${value}</a>',
                ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
            },
            crr1x = {
                r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                " ": "&nbsp;",
                '"': "&quot;",
                "'": "&#39;",
                "&lt;": "&lt;",
                "&gt;": "&gt;"
            },
            cro1x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var crn1x = function (dL9C, bvc9T) {
            dL9C = JM8E(dL9C);
            if (!!bvc9T) {
                dL9C = dL9C.replace(VH2x.MLINE, "\n\n").replace(VH2x.LING, "</br>")
            }
            dL9C = l7e.bay3x(dL9C);
            return dL9C
        };
        var JM8E = function (bp8h) {
            return k7d.BI6C(crr1x, bp8h)
        };
        return function (dL9C, e7d, dF9w) {
            e7d = e7d || {};
            dF9w = dF9w || {};
            dF9w.actHash = {};
            var crm1x = !!e7d.parseLink,
                crl1x = !!e7d.parseAct,
                crk1x = e7d.linkTpl || buP9G.LINK,
                crj1x = e7d.atTpl || buP9G.AT,
                cri1x = e7d.atUrl || "/user/home?nickname=",
                crh1x = e7d.actTpl || buP9G.ACT,
                bvc9T = !!e7d.keepSpace,
                bvP9G = e7d.linkKlass || "s-fc7";
            cIo5t = e7d.actBiJson || "";
            if (!dL9C) return "";
            dL9C = dL9C.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lV1x = cro1x[crm1x + 2 * crl1x],
                dh9Y = VH2x[lV1x],
                bt8l = null,
                kc1x = null,
                gA0x = 0,
                cIp5u = "",
                cIq5v = "";
            var qL2x = [];
            dh9Y.lastIndex = 0;
            while (bt8l = dh9Y.exec(dL9C)) {
                var dS9J = {
                    html: "",
                    before: bt8l.index - 1,
                    after: bt8l.index + bt8l[0].length
                };
                if (bt8l[1]) {
                    var kc1x = bt8l[2].replace(/[^\x00-\xff]/g, "**");
                    if (kc1x.length < 4 || kc1x.length > 32) {} else {
                        var Id7W = a6g.ey9p(crj1x);
                        dS9J.html = a6g.cc8U(Id7W, {
                            value: JM8E(bt8l[2]),
                            url: encodeURI(cri1x + bt8l[2]),
                            klass: bvP9G
                        });
                        qL2x.push(dS9J)
                    }
                } else if (bt8l.length > 8 && bt8l[4]) {
                    var Id7W = a6g.ey9p(crk1x);
                    dS9J.html = a6g.cc8U(Id7W, {
                        value: JM8E(bt8l[4]),
                        url: bt8l[4],
                        klass: bvP9G
                    });
                    qL2x.push(dS9J)
                } else {
                    var bRt5y = lV1x == "ACT_NOLINK" ? 4 : 9;
                    var Id7W = a6g.ey9p(crh1x);
                    dS9J.html = a6g.cc8U(Id7W, {
                        value: JM8E(bt8l[bRt5y]),
                        klass: bvP9G
                    });
                    qL2x.push(dS9J);
                    dF9w.actHash[bt8l[bRt5y].slice(1, -1)] = true
                }
            }
            var bwA0x = qL2x.length,
                kD1x = {
                    before: dL9C.length - 1,
                    after: 0
                },
                bwG0x = "";
            for (var i = 0; i <= bwA0x; i++) {
                var hD0x, fZ9Q;
                hD0x = (qL2x[i - 1] || kD1x).after;
                fZ9Q = (qL2x[i] || kD1x).before;
                if (fZ9Q >= hD0x && hD0x >= 0 && fZ9Q <= dL9C.length - 1) {
                    bwG0x += crn1x(dL9C.substring(hD0x, fZ9Q + 1), bvc9T)
                }
                if (qL2x[i]) {
                    bwG0x += qL2x[i].html
                }
            }
            return bwG0x
        }
    }();
    l7e.cru1x = function () {
        var dh9Y = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bp8h) {
            return (bp8h || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(dh9Y, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l7e.crt1x = function () {
        var dh9Y = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var ez9q = function (kc1x, ef9W) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(kc1x) + '" class="' + (ef9W || "") + '">@' + kc1x + "</a>"
        };
        return function (bp8h, ef9W) {
            return (bp8h || "").replace(dh9Y, function ($0, $1) {
                return ez9q($1, ef9W)
            })
        }
    }();
    l7e.bay3x = function () {
        var dh9Y = /\[(.*?)\]/g;
        return function (bp8h) {
            return (bp8h || "").replace(dh9Y, function ($1, $2) {
                var Y7R = l7e.bRz5E($2);
                return !Y7R ? $1 : '<img src="' + Y7R + '"/>'
            })
        }
    }();
    l7e.Dr6l = function (G7z, ef9W) {
        a6g.bE8w(G7z, ef9W) ? a6g.y7r(G7z, ef9W) : a6g.w7p(G7z, ef9W)
    };
    l7e.MP9G = function (cE8w, lm1x) {
        cE8w = a6g.B7u(cE8w);
        lm1x = a6g.B7u(lm1x);
        if (!cE8w || !lm1x) return !1;
        for (lm1x = lm1x.parentNode; !!lm1x && lm1x != cE8w; lm1x = lm1x.parentNode);
        return lm1x == cE8w
    };
    l7e.lC1x = function () {
        var bRr5w = function (hk0x) {
            return (hk0x < 10 ? "0" : "") + hk0x
        };
        return function (kO1x) {
            kO1x = parseInt(kO1x) || 0;
            if (!kO1x) return "00:00";
            var zx5C = Math.floor(kO1x % 60),
                cqX1x = Math.floor(kO1x / 60);
            return bRr5w(cqX1x) + ":" + bRr5w(zx5C)
        }
    }();
    l7e.zu5z = function (gh0x, xl4p) {
        if (!gh0x || gh0x.length == 0) return "";
        xl4p = xl4p || "/";
        var bt8l = [];
        for (var i = gh0x.length - 1; i >= 0; i--) {
            bt8l.unshift(gh0x[i].name)
        }
        return bt8l.join(xl4p)
    };
    l7e.sG3x = function () {
        var Se1x = function (il0x, ef9W, cE8w, bcl4p) {
            var ez9q = bcl4p ? l7e.bxD0x : k7d.dI9z;
            if (!il0x || !il0x.name) return "";
            if (!il0x.id) return '<span class="' + ef9W + '">' + ez9q(il0x.name) + "</span>";
            return "<a" + (cE8w ? ' target="_blank"' : "") + ' class="' + ef9W + '" href="/artist?id=' + il0x.id + '" hidefocus="true">' + ez9q(il0x.name) + "</a>"
        };
        return function (gh0x, W7P, xl4p, cE8w, bRq5v, bcl4p) {
            if (!gh0x || !gh0x.length) return "";
            xl4p = xl4p || "/";
            W7P = W7P || "";
            LD8v = "";
            var es9j = [];
            for (var i = 0, j7c = [], tJ3x = [], fY9P; i < gh0x.length; ++i) {
                es9j.push(gh0x[i].name);
                if (!gh0x[i] || gh0x[i].id <= 0) {
                    tJ3x.push(gh0x[i]);
                    continue
                }
                if (k7d.gO0x(W7P)) {
                    fY9P = W7P(gh0x[i])
                } else {
                    fY9P = Se1x(gh0x[i], W7P, cE8w, bcl4p)
                }
                if (fY9P && bRq5v && gh0x[i].tns && gh0x[i].tns.length > 0) {
                    LD8v = k7d.dI9z(gh0x[i].tns[0]);
                    fY9P += '<span class="s-fc8" title="' + LD8v + '"> - (' + LD8v + ")</span>"
                }!!fY9P && j7c.push(fY9P)
            }
            for (var i = 0, fY9P; i < tJ3x.length; ++i) {
                if (k7d.gO0x(W7P)) {
                    fY9P = W7P(tJ3x[i])
                } else {
                    fY9P = Se1x(tJ3x[i], W7P, cE8w, bcl4p)
                }
                if (fY9P && bRq5v && tJ3x[i].tns && tJ3x[i].tns.length > 0) {
                    LD8v = k7d.dI9z(tJ3x[i].tns[0]);
                    fY9P += '<span class="s-fc8" title="' + LD8v + '"> - (' + LD8v + ")</span>"
                }!!fY9P && j7c.push(fY9P)
            }
            return '<span title="' + es9j.join(xl4p) + '">' + j7c.join(xl4p) + "</span>"
        }
    }();
    l7e.zo5t = function (fG9x, pX2x) {
        pX2x = pX2x || "86";
        return !!fG9x && (pX2x == "86" ? /^\d{11}$/ : /^\d+$/).test(fG9x)
    };
    l7e.cIr5w = function (fG9x) {
        if (!l7e.zo5t(fG9x)) return fG9x;
        return fG9x.substring(0, 3) + "****" + fG9x.substr(7)
    };
    l7e.kp1x = function () {
        var dh9Y = /^\s+$/g;
        return function (im0x) {
            return !im0x || dh9Y.test(im0x)
        }
    }();
    l7e.RU1x = function () {
        var bye0x = /[^\x00-\xfff]/g;
        return function (im0x) {
            var cqU1x = im0x.match(bye0x) || [],
                dt9k = cqU1x.length;
            return im0x.length + dt9k
        }
    }();
    l7e.DJ6D = function () {
        var bye0x = /[^\x00-\xfff]/;
        return function (im0x, eI9z) {
            for (var i = 0, len = im0x.length; i < len && eI9z > 0; i++) {
                if (bye0x.test(im0x.charAt(i))) {
                    eI9z -= 2;
                    if (eI9z < 0) {
                        break
                    }
                } else {
                    eI9z -= 1
                }
            }
            return im0x.substring(0, i)
        }
    }();
    l7e.DD6x = function (im0x, eI9z, Ov0x) {
        eI9z = eI9z || 10;
        Ov0x = Ov0x || nej.p.ds9j.engine == "trident" && parseInt(nej.p.ds9j.release) < 5;
        if (Ov0x && l7e.RU1x(im0x) > eI9z) {
            return l7e.DJ6D(im0x, eI9z) + "..."
        } else {
            return im0x
        }
    };
    l7e.bRp5u = function (g7b) {
        return g7b === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(g7b.type || g7b.href || ~g7b.tabIndex)
    };
    l7e.cqS1x = function (d7e, cE8w) {
        if (!d7e || !cE8w) return !0;
        var g7b, u7n = d7e.type.toLowerCase();
        if (u7n == "mouseout") {
            g7b = d7e.relatedTarget || d7e.toElement
        } else if (u7n == "mouseover") {
            g7b = d7e.relatedTarget || d7e.fromElement
        }
        return !g7b || g7b !== cE8w && !l7e.MP9G(cE8w, g7b)
    };
    l7e.ug3x = function () {
        R7K = {};
        return function (g7b, eg9X) {
            var D7w = a6g.lQ1x(g7b),
                L7E = "hover-" + D7w;
            if (!eg9X || !D7w || !!R7K[L7E]) return;
            R7K[L7E] = !0;
            h7a.s7l(D7w, "mouseover", function () {
                var byz0x = a6g.E7x(g7b, "hshow") || [];
                var byB0x = a6g.E7x(g7b, "icn-dislike") || [];
                a6g.w7p(D7w, "z-hover");
                a6g.ba7T(byz0x[0], "display", "block");
                a6g.ba7T(byB0x[0], "display", "block")
            });
            h7a.s7l(D7w, "mouseout", function () {
                var byz0x = a6g.E7x(g7b, "hshow") || [];
                var byB0x = a6g.E7x(g7b, "icn-dislike") || [];
                a6g.y7r(D7w, "z-hover");
                a6g.ba7T(byz0x[0], "display", "none");
                a6g.ba7T(byB0x[0], "display", "none")
            })
        }
    }();
    l7e.bRo5t = function () {
        var bz8r = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function (im0x) {
            return k7d.BI6C(bz8r, im0x)
        }
    }();
    l7e.zm5r = function (bA8s) {
        if (k7d.HW7P(bA8s)) bA8s = bA8s.getTime();
        var fb9S = new Date,
            ku1x = fb9S.getTime() - bA8s;
        if (ku1x <= 6e4) return "刚刚";
        var nU2x = fb9S.getHours() * 36e5 + fb9S.getMinutes() * 6e4 + fb9S.getSeconds() * 1e3;
        if (ku1x <= nU2x) {
            if (ku1x < 36e5) {
                var FW7P = Math.floor(ku1x / 6e4);
                return FW7P + "分钟前"
            }
            return k7d.id0x(bA8s, "HH:mm")
        } else {
            if (ku1x < nU2x + 864e5) {
                return "昨天" + k7d.id0x(bA8s, "HH:mm")
            } else {
                var gX0x = fb9S.getFullYear(),
                    RQ1x = new Date(gX0x, 0, 1);
                var nU2x = fb9S.getTime() - RQ1x.getTime();
                if (ku1x < nU2x) {
                    return k7d.id0x(bA8s, "M月d日 HH:mm")
                }
                return k7d.id0x(bA8s, "yyyy年M月d日")
            }
        }
    };
    l7e.cqQ1x = function (bA8s) {
        if (k7d.HW7P(bA8s)) bA8s = bA8s.getTime();
        var fb9S = new Date,
            ku1x = fb9S.getTime() - bA8s;
        var nU2x = fb9S.getHours() * 36e5 + fb9S.getMinutes() * 6e4 + fb9S.getSeconds() * 1e3;
        if (ku1x <= nU2x) {
            return "今天" + k7d.id0x(bA8s, "HH:mm")
        } else {
            if (ku1x < nU2x + 864e5) {
                return "昨天" + k7d.id0x(bA8s, "HH:mm")
            } else {
                return k7d.id0x(bA8s, "yy-MM-dd HH:mm")
            }
        }
    };
    l7e.cqP1x = function (bA8s) {
        if (k7d.HW7P(bA8s)) bA8s = bA8s.getTime();
        var fb9S = new Date,
            ku1x = fb9S.getTime() - bA8s;
        if (ku1x <= 6e4) return "刚刚";
        var nU2x = fb9S.getHours() * 36e5 + fb9S.getMinutes() * 6e4 + fb9S.getSeconds() * 1e3;
        if (ku1x <= nU2x) {
            if (ku1x < 36e5) {
                var FW7P = Math.floor(ku1x / 6e4);
                return FW7P + "分钟前"
            }
            return k7d.id0x(bA8s, "HH:mm")
        } else {
            if (ku1x < nU2x + 864e5) {
                return "昨天" + k7d.id0x(bA8s, "HH:mm")
            } else if (ku1x < nU2x + 864e5 * 6) {
                var gX0x = fb9S.getFullYear(),
                    RQ1x = new Date(gX0x, 0, 1);
                var nU2x = fb9S.getTime() - RQ1x.getTime();
                if (ku1x < nU2x) {
                    return k7d.id0x(bA8s, "M月d日 HH:mm")
                }
                return k7d.id0x(bA8s, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l7e.bcU4Y = function () {
        var dh9Y = /\{(.*?)\}/gi;
        return function (ph2x, i7b) {
            return (ph2x || "").replace(dh9Y, function ($1, $2) {
                var C7v = i7b[$2];
                return C7v == null ? $1 : C7v
            })
        }
    }();
    l7e.fp9g = function () {
        var bh8Z = Array.prototype.slice.call(arguments, 0),
            ph2x = bh8Z.shift();
        if (ph2x) {
            return ph2x.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bh8Z.length ? bh8Z[$2] : $1
            })
        }
        return ""
    };
    l7e.Kb8T = function (j7c, ef9W, kB1x) {
        return "";
        kB1x = kB1x || " - ";
        if (j7c && j7c.length) {
            return kB1x + (!!ef9W ? '<span class="' + ef9W + '">' + j7c[0] + "</span>" : j7c[0])
        }
        return ""
    };
    l7e.bRn5s = function () {
        if (window.getSelection) {
            var tc3x = window.getSelection();
            if (tc3x && tc3x.focusNode && tc3x.focusNode.tagName) {
                var qO2x = a6g.df9W(tc3x.focusNode);
                for (var i = 0, yY5d; i < qO2x.length; ++i) {
                    yY5d = qO2x[i].tagName;
                    if (!yY5d) continue;
                    yY5d = yY5d.toLowerCase();
                    if (yY5d == "textarea" || yY5d == "input") return !0
                }
            }
        } else if (document.selection) {
            var de8W = document.selection.createRange();
            if (de8W) {
                var g7b = de8W.parentElement();
                if (g7b && g7b.tagName) {
                    var yY5d = g7b.tagName.toLowerCase();
                    if (yY5d == "textarea" || yY5d == "input") return !0
                }
            }
        }
        return !1
    };
    l7e.BU6O = function (fH9y) {
        if (/^[A-Z]\:\\/i.test(fH9y)) {
            fH9y = fH9y.split("\\")
        } else {
            fH9y = fH9y.split("/")
        }
        fH9y = fH9y[fH9y.length - 1];
        return fH9y
    };
    l7e.cqN1x = function () {
        var Iy8q = [13, 17, 34, 19, 18, 21];
        return function (D7w) {
            var bt8l = (D7w || "").split("_");
            return {
                type: Iy8q[bt8l[2]] || -1,
                id: bt8l[3] || ""
            }
        }
    }();
    l7e.bRm5r = function (gE0x) {
        if (!gE0x) {
            return true
        }
        for (var k in gE0x) {
            return false
        }
        return true
    };
    l7e.bgS5X = function (dp9g) {
        if (!dp9g) {
            return ""
        }
        if (4 == dp9g.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp9g.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp9g.expertTags && dp9g.expertTags.length || !l7e.bRm5r(dp9g.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l7e.Rc1x = function (hr0x) {
        if (!hr0x) return "";
        var dt9k = hr0x.length,
            iz0x = [];
        iz0x[0] = dt9k / 3 | 0;
        iz0x[1] = iz0x[0] + ((dt9k - iz0x[0]) / 2 | 0);
        return hr0x.substring(0, iz0x[0]) + hr0x.substring(iz0x[0], iz0x[1]).replace(/\d/g, "*") + hr0x.substring(iz0x[1], dt9k)
    };
    l7e.cIs5x = function (r7k, cB8t) {
        return (r7k % cB8t + cB8t) % cB8t
    };
    l7e.bhc5h = function () {
        var Iy8q = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function (D7w) {
            var bt8l = (D7w || "").split("_"),
                m7f = {
                    type: Iy8q[bt8l[2]] || -1,
                    id: bt8l[3] || ""
                };
            if (m7f.type == "event") {
                m7f.uid = bt8l[4] || "";
                return "/" + m7f.type + "?id=" + m7f.id + "&uid=" + m7f.uid
            }
            return "/" + m7f.type + "?id=" + m7f.id
        }
    }();
    l7e.bhd5i = function () {
        var Iy8q = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function (D7w) {
            var bt8l = (D7w || "").split("_");
            return Iy8q[bt8l[2]] || "资源"
        }
    }();
    l7e.cqI1x = function (bv8n) {
        var qs = bv8n.length > 0 ? bv8n.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l7e.bhg5l = function (oF2x, QV1x) {
        var bdv4z = 0,
            eA9r = new Array;
        k7d.bd7W(oF2x, function (Y7R, r7k) {
            var cx8p = a6g.dk9b("img");
            cx8p.src = Y7R;
            h7a.s7l(cx8p, "load", function (r7k, d7e) {
                eA9r[r7k] = 1;
                bdv4z++;
                if (bdv4z == oF2x.length) QV1x(oF2x, eA9r)
            }.f7c(this, r7k));
            h7a.s7l(cx8p, "error", function (d7e, r7k) {
                eA9r[r7k] = 0;
                bdv4z++;
                if (bdv4z == oF2x.length) QV1x(oF2x, eA9r)
            }.f7c(this, r7k))
        })
    };
    l7e.NL0x = function (j7c, ed9U) {
        var m7f = [];
        k7d.bd7W(j7c, function (p7i, r7k, P7I) {
            m7f.push(ed9U(p7i, r7k, P7I))
        });
        return m7f
    };
    l7e.bbE4I = function (j7c, ed9U, P7I) {
        var m7f = [];
        k7d.bd7W(j7c, function (p7i, r7k) {
            if (ed9U.call(P7I, p7i, r7k, j7c)) {
                m7f.push(p7i)
            }
        });
        return m7f
    };
    l7e.bRk5p = function (bp8h) {
        return k7d.dI9z((bp8h || "").replace(/\s{2,}/g, " ").trim())
    };
    var cqG1x = {
        r: /\<|\>/g,
        "<": "&lt;",
        ">": "&gt;"
    };
    l7e.cqF1x = function (bp8h) {
        return k7d.BI6C(cqG1x, bp8h)
    };
    l7e.bhv5A = function (bl8d) {
        if (bl8d.transNames && bl8d.transNames.length) {
            return bl8d.transNames[0]
        } else if (bl8d.alias && bl8d.alias.length) {
            return bl8d.alias[0]
        }
    };
    l7e.bhI5N = function (Wx2x) {
        if (Wx2x) {
            return Wx2x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l7e.bhJ5O = function (g7b) {
        var g7b = a6g.B7u(g7b),
            cL8D = g7b && g7b.getElementsByTagName("textarea")[0],
            L7E = a6g.t7m(g7b, "key"),
            bhL5Q = a6g.t7m(g7b, "simple") == "1",
            cqE1x = a6g.t7m(g7b, "pvnamed") == "1",
            bhW5b = q7j.wt4x.fR9I();
        if (!(g7b && cL8D && L7E)) return;
        var bdA4E, bie5j, bdH4L;
        bdA4E = a6g.E7x(a6g.B7u("m-playlist"), "j-img");
        k7d.bd7W(bdA4E, function (ja0x) {
            if (!bdH4L && a6g.t7m(ja0x, "key")) {
                bdH4L = a6g.t7m(ja0x, "key");
                ja0x.removeAttribute("data-key")
            }
        });
        bdA4E = a6g.E7x(a6g.B7u("m-playlist"), "m-info");
        k7d.bd7W(bdA4E, function (ja0x) {
            if (!bie5j && ja0x.id && ja0x.id.indexOf("auto-id-") == 0) {
                bie5j = ja0x.id.slice(8, 12)
            }
        });
        var C7v = cL8D.value || cL8D.defaultValue;
        if (bdH4L) {
            C7v = decodeURIComponent(k7d.cqD1x(C7v, "param=" + bie5j + bdH4L))
        }
        C7v = JSON.parse(C7v);
        if (cqE1x) {
            l7e.cqC1x(C7v)
        }
        if (bhL5Q) {
            C7v = l7e.Cz6t(C7v)
        }
        bhW5b.uJ4N(L7E, C7v);
        g7b.innerHTML = "";
        return L7E
    };
    l7e.cqB1x = function (pZ2x) {
        if (!pZ2x.onbeforelistload) {
            pZ2x.onbeforelistload = function (d7e) {
                d7e.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!pZ2x.onemptylist) {
            pZ2x.onemptylist = function (d7e) {
                d7e.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (pZ2x.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return pZ2x
    };
    l7e.cqC1x = function (hG0x) {
        k7d.bd7W(hG0x, function (bP8H) {
            bP8H.privilege = bP8H.pv;
            delete bP8H.pv
        })
    };
    l7e.Cz6t = function (iw0x) {
        if (k7d.ec9T(iw0x)) {
            var dF9w = [];
            k7d.bd7W(iw0x, function (bhL5Q) {
                dF9w.push(bRj5o(bhL5Q))
            });
            return dF9w
        } else {
            return bRj5o(iw0x)
        }

        function bRj5o(iw0x) {
            if (!iw0x) return null;
            var dF9w = {
                album: iw0x.al,
                alias: iw0x.alia || iw0x.ala || [],
                artists: iw0x.ar || [],
                commentThreadId: "R_SO_4_" + iw0x.id,
                copyrightId: iw0x.cp || 0,
                duration: iw0x.dt || 0,
                id: iw0x.id,
                mvid: iw0x.mv || 0,
                name: iw0x.name || "",
                cd: iw0x.cd,
                position: iw0x.no || 0,
                ringtone: iw0x.rt,
                rtUrl: iw0x.rtUrl,
                status: iw0x.st || 0,
                pstatus: iw0x.pst || 0,
                fee: iw0x.fee || 0,
                version: iw0x.v || 0,
                eq: iw0x.eq,
                songType: iw0x.t || 0,
                mst: iw0x.mst,
                score: iw0x.pop || 0,
                ftype: iw0x.ftype,
                rtUrls: iw0x.rtUrls,
                transNames: iw0x.tns,
                privilege: iw0x.privilege,
                lyrics: iw0x.lyrics
            };
            return dF9w
        }
    };
    l7e.cIt5y = function () {
        var g7b = a6g.nY2x('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(g7b);
        h7a.s7l(g7b, "click", function (d7e) {
            h7a.bf8X(d7e);
            a6g.cO8G(g7b)
        })
    };
    l7e.iQ0x = function (cA8s) {
        if (cA8s < 1e5) {
            return cA8s
        } else if (cA8s < 1e8) {
            return Math.floor(cA8s / 1e3) / 10 + "万"
        } else {
            return Math.floor(cA8s / 1e7) / 10 + "亿"
        }
    };
    l7e.vE4I = function (cA8s, cL8D) {
        return "<i>" + (cA8s ? "(" + cA8s + ")" : cL8D) + "</i>"
    };
    l7e.bRh5m = function (u7n, ik0x) {
        var e7d = {};
        if (!k7d.lY1x(ik0x)) {
            return e7d
        }
        switch (parseInt(u7n)) {
            case 17:
                e7d.title = ik0x.name;
                e7d.author = (ik0x.radio || []).name;
                e7d.picUrl = ik0x.coverUrl;
                e7d.category = ik0x.radio.category;
                break;
            case 19:
                e7d.title = ik0x.name;
                e7d.author = l7e.zu5z(ik0x.artists);
                e7d.authors = l7e.zu5z(ik0x.artists, " / ");
                e7d.picUrl = ik0x.picUrl;
                break;
            case 13:
                e7d.title = ik0x.name;
                e7d.author = (ik0x.creator || []).nickname;
                e7d.picUrl = ik0x.coverImgUrl;
                break;
            case 18:
                e7d.title = ik0x.name;
                e7d.author = l7e.zu5z(ik0x.artists);
                e7d.picUrl = (ik0x.album || []).picUrl;
                break;
            case 20:
                e7d.title = ik0x.name;
                e7d.author = "";
                e7d.picUrl = ik0x.img1v1Url;
                break;
            case 21:
                e7d.title = ik0x.name;
                e7d.author = ik0x.artistName;
                e7d.authors = l7e.zu5z(ik0x.artists, " / ");
                e7d.picUrl = ik0x.newCover || ik0x.cover;
                break;
            case 70:
                e7d.title = ik0x.name;
                e7d.author = (ik0x.dj || []).nickname;
                e7d.picUrl = ik0x.picUrl;
                e7d.category = ik0x.category;
                break;
            default:
                break
        }
        return e7d
    };
    l7e.bRg5l = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l7e.Qp0x = function (ez9q, oA2x, e7d) {
        var bK8C, bh8Z, m7f;
        var hd0x = null;
        var vK4O = 0;
        if (!e7d) e7d = {};
        var yr5w = function () {
            vK4O = e7d.leading === false ? 0 : +(new Date);
            hd0x = null;
            m7f = ez9q.apply(bK8C, bh8Z);
            if (!hd0x) bK8C = bh8Z = null
        };
        return function () {
            var fb9S = +(new Date);
            if (!vK4O && e7d.leading === false) vK4O = fb9S;
            var Hd7W = oA2x - (fb9S - vK4O);
            bK8C = this;
            bh8Z = arguments;
            if (Hd7W <= 0 || Hd7W > oA2x) {
                if (hd0x) {
                    clearTimeout(hd0x);
                    hd0x = null
                }
                vK4O = fb9S;
                m7f = ez9q.apply(bK8C, bh8Z);
                if (!hd0x) bK8C = bh8Z = null
            } else if (!hd0x && e7d.trailing !== false) {
                hd0x = setTimeout(yr5w, Hd7W)
            }
            return m7f
        }
    };
    l7e.KN8F = function (ez9q, oA2x, pb2x) {
        var hd0x, bh8Z, bK8C, Dw6q, m7f;
        var yr5w = function () {
            var gA0x = new Date - Dw6q;
            if (gA0x < oA2x && gA0x >= 0) {
                hd0x = setTimeout(yr5w, oA2x - gA0x)
            } else {
                hd0x = null;
                if (!pb2x) {
                    m7f = ez9q.apply(bK8C, bh8Z);
                    if (!hd0x) bK8C = bh8Z = null
                }
            }
        };
        return function () {
            bK8C = this;
            bh8Z = arguments;
            Dw6q = new Date;
            var PZ0x = pb2x && !hd0x;
            if (!hd0x) hd0x = setTimeout(yr5w, oA2x);
            if (PZ0x) {
                m7f = ez9q.apply(bK8C, bh8Z);
                bK8C = bh8Z = null
            }
            return m7f
        }
    };
    l7e.PL0x = function (g7b, hz0x) {
        if (g7b) {
            var g7b = g7b.firstElementChild;
            if (g7b) {
                g7b.firstElementChild && (g7b = g7b.firstElementChild);
                g7b.setAttribute("xlink:href", "/style/pc/svg/" + hz0x)
            }
        }
    };
    l7e.bRe5j = function (es9j) {
        if (!es9j || !es9j.length) {
            return
        }
        es9j = /^#(.+?)#$/.exec(es9j)[1];
        es9j = es9j.replace(/\s/g, " ");
        v7o.bk8c("/api/act/detail", {
            type: "json",
            method: "post",
            data: k7d.cz8r({
                actname: es9j
            }),
            onload: function (Q7J) {
                if (!Q7J || Q7J.code != 200 || !Q7J.act) {
                    n7g.Z7S.J7C({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + Q7J.act.actId)
                }
            },
            onerror: function (bY8Q) {
                n7g.Z7S.J7C({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    };
    l7e.cqs1x = function (es9j) {
        if (!es9j || !es9j.length) {
            return
        }
        var Py0x = location.host;
        es9j = /^#(.+?)#$/.exec(es9j)[1];
        es9j = es9j.replace(/\s/g, " ");
        v7o.bk8c("/api/act/detail", {
            type: "json",
            method: "post",
            data: k7d.cz8r({
                actname: es9j
            }),
            onload: function (Q7J) {
                if (!Q7J || Q7J.code != 200 || !Q7J.act) {
                    cw8o.iy0x("该话题暂未创建")
                } else {
                    cw8o.Cc6W(Py0x + "/activity?id=" + Q7J.act.actId)
                }
            },
            onerror: function (bY8Q) {
                cw8o.iy0x("操作失败，请稍后再试")
            }
        })
    };
    l7e.bjy6s = function (zl5q, sE3x) {
        if (!zl5q || !sE3x) return false;
        if (zl5q == sE3x) return true;
        return l7e.bjy6s(zl5q, sE3x.parentNode)
    };
    a6g.cI8A = function (bH8z, jc0x) {
        if (!bH8z) return null;
        if (!jc0x) return bH8z.firstChild;
        return a6g.E7x(bH8z, jc0x)[0]
    };
    l7e.bRd5i = function (im0x) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(im0x)
    };
    l7e.bRc5h = function (im0x, Pu0x) {
        Pu0x = Pu0x || "86";
        if (Pu0x == "86") return /^\d{11}$/.test(im0x);
        return /^\d+$/.test(im0x)
    };
    l7e.cIu5z = function (we4i) {
        if (!we4i) {
            return "0b"
        }
        var cqo1x = ["Bytes", "KB", "MB", "GB"];
        var bc7V = Math.floor(Math.log(we4i) / Math.log(1024));
        return (we4i / Math.pow(1024, Math.floor(bc7V))).toFixed(bc7V == 1 ? 0 : 1) + cqo1x[bc7V]
    };
    l7e.bRb5g = function (dL9C, fv9m, cqm1x) {
        if (!dL9C) return dL9C;
        var dt9k = k7d.fN9E(dL9C);
        if (dt9k <= fv9m) return dL9C;
        var bjY6S = dt9k - dL9C.length,
            bjZ6T = dL9C.length - bjY6S;
        var fI9z = Math.ceil(fv9m / 2),
            cql1x = fv9m,
            bQX5c = 0;
        if (bjY6S < fI9z) fI9z = fv9m - bjY6S;
        if (bjZ6T < fv9m) fv9m = bjZ6T + Math.ceil((fv9m - bjZ6T) / 2);
        while (fI9z <= fv9m) {
            bQX5c = k7d.fN9E(dL9C.substr(0, fI9z));
            var bki6c = cql1x - bQX5c;
            if (bki6c == 0) break;
            if (bki6c == 1) {
                var cqe1x = k7d.fN9E(dL9C.charAt(fI9z));
                if (cqe1x == 1) {
                    fI9z++;
                    break
                } else {
                    break
                }
            }
            fI9z += Math.floor(bki6c / 2)
        }
        return dL9C.substr(0, fI9z) + (!!cqm1x ? "" : "...")
    };
    l7e.cpJ1x = function (bs8k) {
        bs8k = bs8k || 10;
        var cQ8I = "";
        for (var i = 0; i < bs8k; i++) {
            cQ8I += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cQ8I
    };
    var cpz1x = /([A-Za-z0-9 \.\-\(\)\!\?])/,
        cpy1x = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        cpk1x = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bQM5R = function (cpe1x) {
        var bs8k = k7d.CP6J(1, 5),
            cpd1x = Math.random() < .5,
            iW0x = "";
        if (cpe1x) {
            if (cpd1x) {
                while (bs8k >= 0) {
                    iW0x += cpk1x[k7d.CP6J(0, 500)];
                    bs8k--
                }
            } else {
                iW0x = l7e.cpJ1x(bs8k)
            }
        } else {
            iW0x = k7d.SI1x(bs8k)
        }
        return '<div class="soil">' + iW0x + "</div>"
    };
    l7e.bxD0x = function (ev9m) {
        ev9m = k7d.BK6E(ev9m);
        try {
            var bs8k = ev9m.length,
                r7k = k7d.CP6J(1, bs8k - 1);
            while (r7k < bs8k) {
                if (cpy1x.test(ev9m.charAt(r7k))) {
                    return k7d.dI9z(ev9m.slice(0, r7k)) + bQM5R(true) + k7d.dI9z(ev9m.slice(r7k))
                } else if (cpz1x.test(ev9m.charAt(r7k))) {
                    return k7d.dI9z(ev9m.slice(0, r7k)) + bQM5R() + k7d.dI9z(ev9m.slice(r7k))
                } else {
                    r7k++
                }
            }
            return k7d.dI9z(ev9m)
        } catch (e) {
            return k7d.dI9z(ev9m)
        }
    };
    l7e.beM5R = function (lH1x, mV1x) {
        return "//nos.netease.com/" + lH1x + "/" + mV1x
    };
    l7e.cpb1x = function (fH9y) {
        var dS9J = /(.+)(\.[^\.]+$)/.exec(fH9y);
        return dS9J ? {
            filename: dS9J[1],
            suffix: dS9J[2]
        } : {
            filename: fH9y || "",
            suffix: ""
        }
    };
    l7e.bQJ5O = function (bt8l, coV1x) {
        var dF9w = [];
        k7d.bd7W(bt8l, function (gx0x) {
            dF9w.push(coV1x(gx0x))
        });
        return dF9w
    };
    var coL1x = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l7e.bQw4A = function (AH5M) {
        var i7b = NEJ.X({}, AH5M);
        k7d.eH9y(AH5M, function (p7i, L7E) {
            var bQs4w = coL1x[L7E];
            if (bQs4w) {
                i7b[bQs4w] = p7i
            }
        });
        var OR0x = AH5M.creator || [];
        if (!k7d.ec9T(OR0x)) {
            OR0x = [OR0x]
        }
        if (OR0x) {
            i7b.artists = [];
            k7d.bd7W(OR0x, function (p7i) {
                i7b.artists.push({
                    name: p7i.nickname || p7i.userName,
                    id: p7i.userId
                })
            })
        }
        if (!!AH5M.aliaName) {
            i7b.alias = [AH5M.aliaName]
        }
        if (!!AH5M.transName) {
            i7b.transNames = [AH5M.transName]
        }
        return i7b
    };
    l7e.coC1x = function (Y7R) {
        return (Y7R || "").replace(/^https?:/, "")
    };
    l7e.Gf7Y = function (cQ8I) {
        if (!k7d.fJ9A(cQ8I)) return cQ8I;
        var dF9w = null;
        try {
            dF9w = JSON.parse(cQ8I)
        } catch (_e) {}
        return dF9w
    };
    var coB1x = '<span class="s-fc7 f-tdn">${value}</span>';
    l7e.coA1x = function (cL8D, us3x, e7d) {
        e7d = e7d || {};
        if (!us3x) {
            return k7d.dI9z(cL8D)
        }
        cL8D = k7d.BK6E(cL8D);
        var qL2x = [],
            bt8l = null,
            Ri1x = new RegExp(l7e.bRo5t(us3x), "gi"),
            ph2x = e7d.tpl || coB1x;
        while (bt8l = Ri1x.exec(cL8D)) {
            var dS9J = {
                html: "",
                before: bt8l.index - 1,
                after: bt8l.index + bt8l[0].length
            };
            var Id7W = a6g.ey9p(ph2x);
            dS9J.html = a6g.cc8U(Id7W, {
                value: k7d.dI9z(bt8l[0])
            });
            qL2x.push(dS9J)
        }
        var bwA0x = qL2x.length,
            kD1x = {
                before: cL8D.length - 1,
                after: 0
            },
            dF9w = "";
        for (var i = 0; i <= bwA0x; i++) {
            var hD0x, fZ9Q;
            hD0x = (qL2x[i - 1] || kD1x).after;
            fZ9Q = (qL2x[i] || kD1x).before;
            if (fZ9Q >= hD0x && hD0x >= 0 && fZ9Q <= cL8D.length - 1) {
                dF9w += k7d.dI9z(cL8D.substring(hD0x, fZ9Q + 1))
            }
            if (qL2x[i]) {
                dF9w += qL2x[i].html
            }
        }
        return dF9w
    };
    l7e.lu1x = function () {
        if (!window.WM) {
            var g7b = document.createElement("script");
            var sk3x = window.location.hostname;
            var cIF5K = window.location.protocol;
            a6g.hb0x(g7b, "type", "text/javascript");
            a6g.hb0x(g7b, "src", "https://acstatic-dun.126.net/tool.min.js");
            g7b.onload = function (data) {
                initWatchman({
                    productNumber: "YD00000558929251",
                    onload: function (instance) {
                        window.WM = instance
                    }
                })
            };
            document.body.appendChild(g7b)
        }
    };
    l7e.nb1x = function (og2x) {
        if (window.WM) {
            window.WM.getToken("bd5d2f973ef74cd2a61325a412ae54d9", og2x)
        }
    };
    l7e.De6Y = function (og2x) {
        if (window.WM) {
            window.WM.getToken("0b0cdd23ed1144a0b78de049edc09824", og2x)
        }
    }
})();
(function () {
    var k7d = NEJ.P("nej.u");

    function cov1x() {
        var BP6J = function (iq0x) {
            if (iq0x < -128) {
                return BP6J(128 - (-128 - iq0x))
            } else if (iq0x >= -128 && iq0x <= 127) {
                return iq0x
            } else if (iq0x > 127) {
                return BP6J(-129 + iq0x - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cou1x = function (iq0x, bj8b) {
            return BP6J(iq0x + bj8b)
        };
        var cot1x = function (bfB5G, bly6s) {
            if (bfB5G == null) {
                return null
            }
            if (bly6s == null) {
                return bfB5G
            }
            var rc3x = [];
            var cos1x = bly6s.length;
            for (var i = 0, bs8k = bfB5G.length; i < bs8k; i++) {
                rc3x[i] = cou1x(bfB5G[i], bly6s[i % cos1x])
            }
            return rc3x
        };
        var coq1x = function (bfT5Y) {
            if (bfT5Y == null) {
                return bfT5Y
            }
            var rc3x = [];
            var con0x = bfT5Y.length;
            for (var i = 0, bs8k = con0x; i < bs8k; i++) {
                rc3x[i] = BP6J(0 - bfT5Y[i])
            }
            return rc3x
        };
        var com0x = function (blQ6K, Oi0x) {
            blQ6K = BP6J(blQ6K);
            Oi0x = BP6J(Oi0x);
            return BP6J(blQ6K ^ Oi0x)
        };
        var bQo4s = function (Oe0x, blU6O) {
            if (Oe0x == null || blU6O == null || Oe0x.length != blU6O.length) {
                return Oe0x
            }
            var rc3x = [];
            var coj0x = Oe0x.length;
            for (var i = 0, bs8k = coj0x; i < bs8k; i++) {
                rc3x[i] = com0x(Oe0x[i], blU6O[i])
            }
            return rc3x
        };
        var bQm4q = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var coh0x = function (dz9q) {
            var JH8z = [];
            JH8z.push(bQm4q[dz9q >>> 4 & 15]);
            JH8z.push(bQm4q[dz9q & 15]);
            return JH8z.join("")
        };
        var bQl4p = function (we4i) {
            var bs8k = we4i.length;
            if (we4i == null || bs8k < 0) {
                return new String("")
            }
            var JH8z = [];
            for (var i = 0; i < bs8k; i++) {
                JH8z.push(coh0x(we4i[i]))
            }
            return JH8z.join("")
        };
        var bQh4l = function (bgp5u) {
            if (bgp5u == null || bgp5u.length == 0) {
                return bgp5u
            }
            var bmd7W = new String(bgp5u);
            var rc3x = [];
            var bs8k = bmd7W.length / 2;
            var bj8b = 0;
            for (var i = 0; i < bs8k; i++) {
                var pn2x = parseInt(bmd7W.charAt(bj8b++), 16) << 4;
                var oX2x = parseInt(bmd7W.charAt(bj8b++), 16);
                rc3x[i] = BP6J(pn2x + oX2x)
            }
            return rc3x
        };
        var bQf4j = function (cQ8I) {
            if (cQ8I == null || cQ8I == undefined) {
                return cQ8I
            }
            var NZ0x = encodeURIComponent(cQ8I);
            var we4i = [];
            var bQe4i = NZ0x.length;
            for (var i = 0; i < bQe4i; i++) {
                if (NZ0x.charAt(i) == "%") {
                    if (i + 2 < bQe4i) {
                        we4i.push(bQh4l(NZ0x.charAt(++i) + "" + NZ0x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    we4i.push(NZ0x.charCodeAt(i))
                }
            }
            return we4i
        };
        var cnJ0x = function (xD4H) {
            var bc7V = 0;
            bc7V += (xD4H[0] & 255) << 24;
            bc7V += (xD4H[1] & 255) << 16;
            bc7V += (xD4H[2] & 255) << 8;
            bc7V += xD4H[3] & 255;
            return bc7V
        };
        var cIH5M = function (bc7V) {
            var xD4H = [];
            xD4H[0] = bc7V >>> 24 & 255;
            xD4H[1] = bc7V >>> 16 & 255;
            xD4H[2] = bc7V >>> 8 & 255;
            xD4H[3] = bc7V & 255;
            return xD4H
        };
        var cnF0x = function (cY8Q, bms7l, bs8k) {
            var dF9w = [];
            if (cY8Q == null || cY8Q.length == 0) {
                return dF9w
            }
            if (cY8Q.length < bs8k) {
                throw new Error("1003")
            }
            for (var i = 0; i < bs8k; i++) {
                dF9w[i] = cY8Q[bms7l + i]
            }
            return dF9w
        };
        var bmC7v = function (cY8Q, bms7l, rV3x, cnE0x, bs8k) {
            if (cY8Q == null || cY8Q.length == 0) {
                return rV3x
            }
            if (rV3x == null) {
                throw new Error("1004")
            }
            if (cY8Q.length < bs8k) {
                throw new Error("1003")
            }
            for (var i = 0; i < bs8k; i++) {
                rV3x[cnE0x + i] = cY8Q[bms7l + i]
            }
            return rV3x
        };
        var cnC0x = function (bs8k) {
            var bt8l = [];
            for (var i = 0; i < bs8k; i++) {
                bt8l[i] = 0
            }
            return bt8l
        };
        var cnA0x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var KX8P = 64;
        var bgj5o = 64;
        var bPX4b = 4;
        var cnt0x = function (rE3x) {
            var bPW4a = [];
            if (rE3x == null || rE3x == undefined || rE3x.length == 0) {
                return cnC0x(bgj5o)
            }
            if (rE3x.length >= bgj5o) {
                return cnF0x(rE3x, 0, bgj5o)
            } else {
                for (var i = 0; i < bgj5o; i++) {
                    bPW4a[i] = rE3x[i % rE3x.length]
                }
            }
            return bPW4a
        };
        var cno0x = function (bgg5l) {
            if (bgg5l == null || bgg5l.length % KX8P != 0) {
                throw new Error("1005")
            }
            var bnn7g = [];
            var bj8b = 0;
            var cnd0x = bgg5l.length / KX8P;
            for (var i = 0; i < cnd0x; i++) {
                bnn7g[i] = [];
                for (var j = 0; j < KX8P; j++) {
                    bnn7g[i][j] = bgg5l[bj8b++]
                }
            }
            return bnn7g
        };
        var cnc0x = function (bPR4V) {
            var pn2x = bPR4V >>> 4 & 15;
            var oX2x = bPR4V & 15;
            var bj8b = pn2x * 16 + oX2x;
            return cnA0x[bj8b]
        };
        var bPQ4U = function (bnw7p) {
            if (bnw7p == null) {
                return null
            }
            var bPM4Q = [];
            for (var i = 0, bs8k = bnw7p.length; i < bs8k; i++) {
                bPM4Q[i] = cnc0x(bnw7p[i])
            }
            return bPM4Q
        };
        var bPL4P = function (Mq9h, rE3x) {
            if (Mq9h == null) {
                return null
            }
            if (Mq9h.length == 0) {
                return []
            }
            if (Mq9h.length % KX8P != 0) {
                throw new Error("1005")
            }
            rE3x = cnt0x(rE3x);
            var bnG7z = rE3x;
            var bnH7A = cno0x(Mq9h);
            var Of0x = [];
            var cmM0x = bnH7A.length;
            for (var i = 0; i < cmM0x; i++) {
                var bnO7H = bPQ4U(bnH7A[i]);
                bnO7H = bPQ4U(bnO7H);
                var bnP7I = bQo4s(bnO7H, bnG7z);
                var cmK0x = cot1x(bnP7I, coq1x(bnG7z));
                bnP7I = bQo4s(cmK0x, rE3x);
                bmC7v(bnP7I, 0, Of0x, i * KX8P, KX8P);
                bnG7z = bnH7A[i]
            }
            var bPI4M = [];
            bmC7v(Of0x, Of0x.length - bPX4b, bPI4M, 0, bPX4b);
            var bs8k = cnJ0x(bPI4M);
            if (bs8k > Of0x.length) {
                throw new Error("1006")
            }
            var rc3x = [];
            bmC7v(Of0x, 0, rc3x, 0, bs8k);
            return rc3x
        };
        var cmF0x = function (bfX5c, L7E) {
            if (bfX5c == null) {
                return null
            }
            var bPH4L = new String(bfX5c);
            if (bPH4L.length == 0) {
                return []
            }
            var Mq9h = bQh4l(bPH4L);
            if (L7E == null || L7E == undefined) {
                throw new Error("1007")
            }
            var rE3x = bQf4j(L7E);
            return bPL4P(Mq9h, rE3x)
        };
        this.cmz0x = function (bfX5c, L7E) {
            var bod7W = cmF0x(bfX5c, L7E);
            var GO7H = new String(bQl4p(bod7W));
            var zR5W = [];
            var boh7a = GO7H.length / 2;
            var bj8b = 0;
            for (var i = 0; i < boh7a; i++) {
                zR5W.push("%");
                zR5W.push(GO7H.charAt(bj8b++));
                zR5W.push(GO7H.charAt(bj8b++))
            }
            return zR5W.join("")
        };
        k7d.cqD1x = function (boi7b, L7E) {
            return k7d.cmw0x(k7d.czr3x(boi7b), L7E)
        };
        k7d.cmw0x = function (boi7b, L7E) {
            var bod7W = bPL4P(boi7b, bQf4j(L7E));
            var GO7H = new String(bQl4p(bod7W));
            var zR5W = [];
            var boh7a = GO7H.length / 2;
            var bj8b = 0;
            for (var i = 0; i < boh7a; i++) {
                zR5W.push("%");
                zR5W.push(GO7H.charAt(bj8b++));
                zR5W.push(GO7H.charAt(bj8b++))
            }
            return zR5W.join("")
        }
    }
    window.settmusic = (new cov1x).cmz0x
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        L7E = "Search-tracks_",
        b7g;
    q7j.fp9g({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function (Q7J) {
                return Q7J
            },
            onerror: function (Q7J, e7d) {
                if (Q7J.code == 407) {
                    e7d.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function (e7d, bi8a) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cmv0x(parseInt(e7d.data.type)) || "suggest",
                    keyword: e7d.data.s,
                    offset: e7d.offset
                })
            },
            format: function (Q7J, e7d) {
                if (Q7J.abroad) {
                    try {
                        Q7J.result = JSON.parse(decodeURIComponent(settmusic(Q7J.result, q7j.sk)))
                    } catch (e) {}
                }
                Q7J.result = Q7J.result || {};
                var j7c, cB8t, hQ0x = [],
                    qH2x = e7d.data.s || "",
                    gk0x = e7d.data.limit,
                    u7n = parseInt(e7d.data.type) || 1,
                    m7f = Q7J.result;
                switch (u7n) {
                    case 1:
                        j7c = this.bPF4J(m7f.songs, e7d.data.hlpretag, e7d.data.hlposttag);
                        cB8t = m7f.songCount;
                        break;
                    case 10:
                        j7c = m7f.albums;
                        cB8t = m7f.albumCount;
                        break;
                    case 100:
                        j7c = m7f.artists;
                        cB8t = m7f.artistCount;
                        break;
                    case 1e3:
                        j7c = m7f.playlists;
                        cB8t = m7f.playlistCount;
                        break;
                    case 1002:
                        j7c = m7f.userprofiles;
                        cB8t = m7f.userprofileCount;
                        break;
                    case 1004:
                        j7c = m7f.mvs;
                        cB8t = m7f.mvCount;
                        break;
                    case 1014:
                        j7c = l7e.bQJ5O(m7f.videos, l7e.bQw4A);
                        cB8t = m7f.videoCount;
                        break;
                    case 1006:
                        j7c = this.bPF4J(m7f.songs, e7d.data.hlpretag, e7d.data.hlposttag);
                        cB8t = m7f.songCount;
                        break;
                    case 1009:
                        var rs3x = m7f.djRadios;
                        if (!!rs3x) {
                            k7d.bd7W(rs3x, function (C7v, r7k, cmt0x) {
                                C7v.xid = C7v.id;
                                C7v.id = C7v.id + "_rad"
                            });
                            if (rs3x.length) {
                                this.uJ4N("radio_search-" + e7d.data.s, rs3x)
                            }
                        }
                        cB8t = Math.min(m7f.djprogramCount, 500);
                        j7c = m7f.djprograms || [];
                        if (e7d.data.isPub) {
                            k7d.nC2x(rs3x, function (C7v, r7k, cmt0x) {
                                C7v.stype = 1;
                                j7c.unshift(C7v)
                            });
                            cB8t = Math.min(j7c.length, 500)
                        }
                        break
                }
                this.z7s("onsearchload", Q7J);
                if (j7c && j7c.length) {
                    for (var i = 0; i < gk0x; i++) {
                        if (i < j7c.length) {
                            hQ0x.push(j7c[i])
                        } else {
                            hQ0x.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cB8t || 0, qH2x.length < 3 ? 500 : 5e3),
                    list: hQ0x
                }
            },
            onerror: function (Q7J, e7d) {
                e7d.onload(e7d, []);
                if (k7d.gO0x(e7d.onerror)) {
                    e7d.onerror(Q7J)
                }
            }
        }
    });
    q7j.Iu8m = NEJ.C();
    b7g = q7j.Iu8m.N7G(q7j.hE0x);
    b7g.cv8n = function () {
        this.cD8v()
    };
    b7g.cms0x = function (L7E, e7d) {
        if (!L7E) return;
        if (!!this.bPD4H) v7o.kF1x(this.bPD4H);
        this.bPD4H = this.cm8e("search-suggest", NEJ.X({
            data: {
                s: L7E,
                limit: 8
            }
        }, e7d))
    };
    b7g.cmo0x = function (L7E, e7d) {
        if (!L7E) return;
        this.cm8e("search-multimatch", NEJ.X({
            data: {
                s: L7E
            }
        }, e7d))
    };
    b7g.bPF4J = function () {
        var cmi0x = function (hJ0x, bPA4E, bPz4D) {
            var clZ0x = hJ0x.match(new RegExp(bPA4E + "(.+?)" + bPz4D, "gi")),
                cA8s = 0;
            k7d.bd7W(clZ0x, function (p7i) {
                cA8s += p7i.replace(new RegExp(bPA4E, "g"), "").replace(new RegExp(bPz4D, "g"), "").length
            });
            return cA8s
        };
        return function (jg0x, clY0x, clV0x) {
            var bPw4A = [];
            k7d.bd7W(jg0x, function (bl8d, bc7V) {
                bl8d = l7e.Cz6t(bl8d);
                var bfv5A = bl8d.lyrics || [],
                    dt9k = bfv5A.length,
                    kk1x = 0,
                    cB8t = 4,
                    bfu5z = {
                        l: 0,
                        v: 0
                    },
                    bph8Z;
                if (dt9k > 4) {
                    k7d.bd7W(bfv5A, function (hJ0x, r7k) {
                        var bPv4z = cmi0x(hJ0x, clY0x, clV0x);
                        if (bPv4z > bfu5z.v) {
                            bfu5z.v = bPv4z;
                            bfu5z.l = r7k
                        }
                    });
                    kk1x = bfu5z.l;
                    kk1x = Math.max(kk1x, 0);
                    bph8Z = dt9k - kk1x - 4;
                    if (bph8Z < 0) kk1x += bph8Z;
                    bl8d.lrcAbstractEnd = kk1x + cB8t - 1
                } else {
                    bl8d.lrcAbstractEnd = dt9k - 1
                }
                bl8d.lrcAbstractStart = kk1x;
                bl8d.indexId = (bfv5A && bfv5A.length ? "L" : "NL") + bl8d.id;
                bPw4A.push(bl8d)
            });
            return bPw4A
        }
    }();
    b7g.cmv0x = function (u7n) {
        switch (u7n) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1014:
                return "video";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        v7o = c7f("nej.j"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        F7y = c7f("nm.m"),
        n7g = c7f("nm.l"),
        du9l = c7f("nm.i"),
        M7F = c7f("nm.m.sch"),
        b7g, K7D;
    var bfq5v = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    M7F.OJ0x = NEJ.C();
    b7g = M7F.OJ0x.N7G(I7B.cH8z);
    b7g.cv8n = function (g7b) {
        this.cD8v();
        this.bV8N(g7b);
        this.S7L = q7j.Iu8m.fR9I()
    };
    b7g.bV8N = function (g7b) {
        this.o7h = g7b;
        var j7c = a6g.E7x(g7b, "j-flag");
        this.fc9T = j7c[0];
        this.bpL8D = j7c[1];
        this.cy8q = j7c[2];
        this.nV2x = j7c[3];
        h7a.s7l(this.fc9T, "input", this.gt0x.f7c(this));
        h7a.s7l(this.fc9T, "keyup", this.gt0x.f7c(this));
        h7a.s7l(this.fc9T, "focus", this.gY0x.f7c(this));
        h7a.s7l(this.bpL8D, "click", this.gY0x.f7c(this));
        h7a.s7l(this.fc9T, "blur", this.bpX8P.f7c(this));
        h7a.s7l(this.cy8q, "click", this.bfh5m.f7c(this));
        h7a.s7l(this.o7h, "keydown", this.bpZ8R.f7c(this));
        h7a.s7l(this.o7h, "keypress", this.bfe5j.f7c(this));
        h7a.s7l(this.nV2x, "mouseover", this.Pa0x.f7c(this));
        h7a.s7l(this.nV2x, "mouseout", this.Pa0x.f7c(this));
        if (this.fc9T.value) {
            this.fc9T.value = ""
        }
        if (this.fc9T.style.opacity != null) {
            this.fc9T.style.opacity = 1
        }
    };
    b7g.gt0x = function (d7e) {
        if (d7e.type == "keyup" && d7e.keyCode == 8 || d7e.keyCode == 46) {
            this.Hf7Y()
        } else if (d7e.type == "input" || d7e.type == "propertychange") {
            setTimeout(this.Hf7Y.f7c(this), 0)
        }
    };
    b7g.gY0x = function () {
        this.yM5R(this.bpL8D, !1);
        a6g.w7p(this.o7h, "m-srch-fcs");
        this.fc9T.focus();
        this.Hf7Y();
        a6g.w7p((a6g.E7x("g-topbar", "j-showoff") || [])[0], "f-hide")
    };
    b7g.bpX8P = function () {
        if (!this.fc9T.value) {
            this.yM5R(this.bpL8D, !0)
        }
        var Hn7g = a6g.E7x(this.nV2x, "slt");
        if (this.bfa5f(this.nV2x) && Hn7g.length > 0 && a6g.t7m(Hn7g[0], "type")) {
            var hz0x = Hn7g[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hz0x)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.fc9T.value
                })
            }
            this.bqk8c(Hn7g[0].href)
        }
        this.yM5R(this.nV2x, !1);
        a6g.y7r(this.o7h, "m-srch-fcs")
    };
    b7g.yM5R = function (g7b, mr1x) {
        a6g.ba7T(g7b, "display", !mr1x ? "none" : "")
    };
    b7g.bfa5f = function (g7b) {
        return a6g.di9Z(g7b, "display") != "none"
    };
    b7g.Hf7Y = function () {
        var clS0x = function (im0x) {
            im0x = k7d.BK6E(im0x);
            var eI9z = this.o7h.clientWidth > 250 ? 41 : 17;
            if (l7e.RU1x(im0x) > eI9z) {
                im0x = l7e.DJ6D(im0x, eI9z) + "..."
            }
            return k7d.dI9z(im0x)
        };
        var beP5U = function (m7f) {
            return m7f.songs && m7f.songs.length || m7f.albums && m7f.albums.length || m7f.artists && m7f.artists.length || m7f.playlists && m7f.playlists.length
        };
        var og2x = function (us3x, d7e) {
            if (!l7e.bRp5u(this.fc9T) || l7e.kp1x(this.fc9T.value)) {
                this.yM5R(this.nV2x, !1);
                return
            }
            d7e.keyword = k7d.dI9z(us3x);
            var dU9L = a6g.cc8U("m-search-suggest", d7e, {
                    mark: l7e.coA1x.ex9o(this, us3x),
                    cutStr: clS0x.f7c(this)
                }),
                uk3x = d7e.result.order;
            this.nV2x.innerHTML = dU9L;
            this.yM5R(this.nV2x, beP5U(d7e.result) ? !0 : !1);
            if (!!uk3x && !!uk3x.length && bfq5v[uk3x[0]]) {
                this.bqv8n = {
                    keyword: us3x,
                    type: bfq5v[uk3x[0]]
                }
            }
        };
        var clN0x = function () {
            this.yM5R(this.nV2x, !1);
            return
        };
        return function () {
            var C7v = this.fc9T.value;
            if (l7e.kp1x(C7v)) {
                this.yM5R(this.nV2x, !1);
                return
            }
            this.S7L.cms0x(C7v, {
                onload: og2x.f7c(this, C7v),
                onForbidden: clN0x.f7c(this)
            })
        }
    }();
    b7g.bfe5j = function (d7e) {
        if (d7e.keyCode != 13) return;
        var Hn7g = a6g.E7x(this.nV2x, "slt");
        if (this.bfa5f(this.nV2x) && Hn7g.length > 0) {
            this.bqk8c(Hn7g[0].href);
            this.yM5R(this.nV2x, !1);
            return
        }
        this.bfh5m();
        this.yM5R(this.nV2x, !1)
    };
    b7g.bpZ8R = function (d7e) {
        if (!this.bfa5f(this.nV2x)) return;
        var j7c = a6g.E7x(this.nV2x, "xtag"),
            dt9k = j7c.length,
            r7k = k7d.dm9d(j7c, function (p7i) {
                return a6g.bE8w(p7i, "slt")
            });
        switch (d7e.keyCode) {
            case 38:
                if (r7k >= 0) a6g.y7r(j7c[r7k], "slt");
                a6g.w7p(j7c[r7k <= 0 ? dt9k - 1 : r7k - 1], "slt");
                break;
            case 40:
                if (r7k >= 0) a6g.y7r(j7c[r7k], "slt");
                a6g.w7p(j7c[(r7k + 1) % dt9k], "slt");
                break
        }
    };
    b7g.Pa0x = function (d7e) {
        if (!this.bfa5f(this.nV2x)) return;
        var Pn0x, G7z = h7a.X7Q(d7e),
            j7c = a6g.E7x(this.nV2x, "xtag");
        if (G7z.tagName.toLowerCase() == "a") Pn0x = G7z;
        else if (G7z.parentNode.tagName.toLowerCase() == "a") Pn0x = G7z.parentNode;
        if (!Pn0x) return;
        k7d.bd7W(j7c, function (p7i) {
            a6g.y7r(p7i, "slt");
            a6g.t7m(p7i, "type", "")
        });
        if (d7e.type == "mouseout") return;
        a6g.w7p(Pn0x, "slt");
        a6g.t7m(Pn0x, "type", "mouse")
    };
    b7g.bfh5m = function () {
        var dR9I = location.hash,
            r7k = dR9I.indexOf("?"),
            bv8n = k7d.hf0x(dR9I.substring(r7k + 1));
        bv8n.s = this.fc9T.value;
        if (l7e.kp1x(bv8n.s)) return;
        if (!bv8n.type && this.bqv8n && this.bqv8n.keyword == bv8n.s) {
            bv8n.type = this.bqv8n.type
        }
        this.bqk8c("/search/#/?" + k7d.cz8r(bv8n));
        this.fc9T.blur()
    };
    b7g.bqk8c = function (Y7R) {
        if (location.dispatch2) {
            location.dispatch2(Y7R)
        } else {
            location.href = Y7R
        }
    };
    M7F.OJ0x.clM0x = function () {
        var j7c = a6g.E7x(document.body, "j-suggest");
        k7d.bd7W(j7c, function (p7i) {
            new M7F.OJ0x(p7i)
        })
    };
    M7F.OJ0x.clM0x()
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        q7j = c7f("nm.d"),
        b7g;
    q7j.fp9g({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function (Q7J) {
                return {
                    total: Q7J.size || 0,
                    list: Q7J.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function (Q7J) {
                return {
                    total: Q7J.size || 0,
                    list: Q7J.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function (Q7J) {
                return Q7J.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function (Q7J, e7d) {
                if (e7d.offset == 0) {
                    var qr2x = Q7J.data[0];
                    this.z7s("onfirstload", qr2x);
                    Q7J.data.splice(0, 1);
                    return Q7J.data
                } else {
                    return Q7J.data
                }
            }
        }
    });
    q7j.Ig7Z = NEJ.C();
    b7g = q7j.Ig7Z.N7G(q7j.hE0x);
    b7g.cv8n = function () {
        this.cD8v()
    };
    b7g.bqT8L = function () {
        var tC3x = "LOCAL_FLAG";
        return function (u7n, clL0x) {
            var i7b = this.Hb7U(tC3x, {});
            if (i7b[u7n]) {
                return true
            } else {
                if (!clL0x) {
                    i7b[u7n] = true;
                    this.yd5i(tC3x, i7b)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ut"),
        brf8X;
    if (!!O7H.oo2x) return;
    O7H.oo2x = NEJ.C();
    brf8X = O7H.oo2x.N7G(O7H.cH8z);
    brf8X.bm8e = function () {
        var clJ0x = function (d7e) {
            d7e.matched = d7e.source == d7e.target
        };
        return function (e7d) {
            e7d.oncheck = e7d.oncheck || clJ0x;
            this.bn8f(e7d);
            this.bU8M = e7d.list;
            this.iK0x = e7d.dataset || "id";
            this.kL1x = e7d.selected || "js-selected"
        }
    }();
    brf8X.os2x = function (C7v) {
        var G7z, d7e = {
            target: C7v
        };
        k7d.bd7W(this.bU8M, function (g7b) {
            delete d7e.matched;
            d7e.source = a6g.t7m(g7b, this.iK0x);
            this.z7s("oncheck", d7e);
            if (!d7e.matched) {
                a6g.y7r(g7b, this.kL1x)
            } else {
                G7z = g7b;
                a6g.w7p(g7b, this.kL1x)
            }
        }, this);
        return G7z
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        O7H = c7f("nej.ut"),
        qm2x;
    if (!!O7H.dj9a) return;
    O7H.dj9a = NEJ.C();
    qm2x = O7H.dj9a.N7G(O7H.cH8z);
    qm2x.cv8n = function () {
        this.iY0x = {};
        this.cD8v();
        this.bJ8B()
    };
    qm2x.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.brI9z = e7d.umi || "";
        this.Bh5m = e7d.dispatcher;
        this.MG9x = e7d.composite || bb7U;
        this.bgO5T({
            onshow: this.ff9W.f7c(this),
            onhide: this.ko1x.f7c(this),
            onrefresh: this.eF9w.f7c(this),
            onmessage: this.rR3x.f7c(this),
            onbeforehide: this.clG0x.f7c(this)
        })
    };
    qm2x.bB8t = function () {
        delete this.brI9z;
        this.iY0x = {};
        this.bG8y()
    };
    qm2x.vV4Z = function (d7e) {
        if (!!d7e) d7e.stopped = !0
    };
    qm2x.bJ8B = br8j;
    qm2x.ff9W = br8j;
    qm2x.ko1x = br8j;
    qm2x.eF9w = br8j;
    qm2x.rR3x = br8j;
    qm2x.clG0x = br8j;
    qm2x.nS2x = function (nq2x, bF8x, fu9l) {
        this.Bh5m.brW9N({
            to: nq2x,
            mode: fu9l || 0,
            data: bF8x,
            from: this.brI9z
        })
    };
    qm2x.cIL5Q = function (u7n, i7b) {
        this.Bh5m.Br5w(u7n, {
            from: this.brI9z,
            data: i7b
        })
    };
    qm2x.cIM5R = function () {
        this.Bh5m.nT2x.apply(this.Bh5m, arguments)
    };
    qm2x.clD0x = function () {
        return this.iY0x
    };
    a6g.bex4B = function () {
        if (!!window.dispatcher) {
            dispatcher.bPr4v.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        br8j = NEJ.F,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ut"),
        zt5y;
    if (!!O7H.dq9h) return;
    O7H.dq9h = NEJ.C();
    zt5y = O7H.dq9h.N7G(O7H.dj9a);
    zt5y.clB0x = function (e7d) {
        var bH8z;
        if (!bH8z) {
            var i7b = e7d.input || bb7U;
            bH8z = a6g.B7u(i7b.parent)
        }
        if (!bH8z) {
            var i7b = e7d.data || bb7U;
            bH8z = a6g.B7u(i7b.parent)
        }
        if (!bH8z) {
            bH8z = a6g.B7u(e7d.parent)
        }
        return bH8z
    };
    zt5y.ff9W = function (e7d) {
        var bH8z = this.clB0x(e7d);
        if (!!bH8z && !!this.o7h) bH8z.appendChild(this.o7h);
        this.gT0x(e7d);
        this.bPq4u("onshow", e7d);
        this.eF9w(e7d)
    };
    zt5y.eF9w = function (e7d) {
        this.gq0x(e7d);
        this.bPq4u("onrefresh", e7d)
    };
    zt5y.ko1x = function () {
        this.lw1x();
        this.clq0x();
        a6g.mO1x(this.o7h)
    };
    zt5y.bPl4p = function () {
        var gM0x = /^onshow|onrefresh|delay$/;
        return function (ck8c) {
            return gM0x.test(ck8c)
        }
    }();
    zt5y.bPj4n = br8j;
    zt5y.bPq4u = function () {
        var bPi4m = function (bv8n, e7d, ck8c, oE2x) {
            if (this.bPl4p(oE2x)) return;
            if (!!bv8n) ck8c += (ck8c.indexOf("?") > 1 ? "&" : "?") + bv8n;
            var cT8L = this.bPj4n(oE2x, e7d) || {};
            cT8L.location = e7d;
            cT8L.parent = this.iY0x[oE2x];
            this.Bh5m.iL0x(ck8c, {
                input: cT8L
            })
        };
        return function (u7n, e7d) {
            if (!e7d.nodelay) {
                if (!!this.MG9x.delay) return;
                var bPh4l = this.MG9x[u7n] || bb7U;
                if (bPh4l.delay) return
            }
            var bv8n = k7d.cz8r(e7d.param) || "";
            if (u7n == "onrefresh") {
                k7d.eH9y(this.MG9x, bPi4m.f7c(this, bv8n, e7d))
            }
            k7d.eH9y(bPh4l, bPi4m.f7c(this, bv8n, e7d))
        }
    }();
    zt5y.clq0x = function () {
        var DX6R = function (ck8c, oE2x) {
            if (!this.bPl4p(oE2x)) this.Bh5m.bq8i(ck8c)
        };
        return function () {
            k7d.eH9y(this.MG9x, DX6R, this);
            k7d.eH9y(this.MG9x.onshow, DX6R, this);
            k7d.eH9y(this.MG9x.onrefresh, DX6R, this)
        }
    }()
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u"),
        F7y = c7f("nm.m"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        b7g, K7D;
    F7y.Qc0x = NEJ.C();
    b7g = F7y.Qc0x.N7G(I7B.cH8z);
    b7g.cv8n = function () {
        this.cD8v();
        this.o7h = a6g.B7u("g-topbar");
        var j7c = a6g.E7x(this.o7h, "j-tflag");
        this.btg9X = j7c[0];
        this.GG7z = j7c[1];
        this.bPf4j = j7c[2];
        this.btr9i = j7c[3];
        this.cli0x = I7B.oo2x.A7t({
            list: this.btg9X.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.btu9l = I7B.oo2x.A7t({
            list: this.btr9i.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bX8P([
            [this.o7h, "click", this.Qd0x.f7c(this)],
            [this.GG7z, "click", this.cJ8B.f7c(this)],
            [this.GG7z, "mouseout", this.bPe4i.f7c(this, 0)],
            [this.GG7z, "mouseover", this.bPe4i.f7c(this, 1)]
        ]);
        window.scrollTopbar = this.clf0x.f7c(this);
        window.matchNav = this.bPc4g.f7c(this);
        window.polling = this.vN4R.f7c(this);
        this.btB9s = q7j.Ig7Z.A7t();
        this.cld0x();
        this.KQ8I();
        var bv8n = k7d.hf0x(location.href.split("?")[1]) || {};
        if (bv8n.market) {
            a6g.B7u("topbar-download-link").href = "/download?market=" + bv8n.market
        }
        var btL9C = a6g.E7x(this.o7h, "j-showoff");
        if (btL9C && !this.btB9s.bqT8L("newMvSearch")) {
            a6g.y7r(btL9C[0], "f-hide");
            window.setTimeout(function () {
                a6g.w7p(btL9C[0], "f-hide")
            }, 5e3)
        }
        l7e.lu1x()
    };
    b7g.vN4R = function (d7e) {
        var dR9I = l7e.LJ8B();
        if (!/^\/msg/.test(dR9I)) {
            var xc4g = 0;
            xc4g += d7e.comment;
            xc4g += d7e.forward;
            xc4g += d7e.msg;
            xc4g += d7e.notice;
            if (xc4g > 0) {
                xc4g = xc4g > 99 ? "99+" : xc4g;
                this.Qk0x.innerText = xc4g;
                this.Lj8b.innerText = xc4g;
                a6g.y7r(this.Qk0x, "f-hide");
                a6g.y7r(this.Lj8b, "f-hide");
                this.bec4g = true
            } else {
                a6g.w7p(this.Qk0x, "f-hide");
                a6g.w7p(this.Lj8b, "f-hide");
                this.bec4g = false
            }
            var eZ9Q = "/at";
            if (d7e.notice) eZ9Q = "/notify";
            if (d7e.comment) eZ9Q = "/comment";
            if (d7e.msg > 0) eZ9Q = "/private";
            if (d7e.forward > 0) eZ9Q = "/at";
            this.Lj8b.parentNode.href = "/msg/#" + eZ9Q
        } else {
            this.Lj8b.parentNode.href = "javascript:;";
            a6g.w7p(this.Qk0x, "f-hide");
            a6g.w7p(this.Lj8b, "f-hide");
            this.bec4g = false
        }
        var j7c = a6g.E7x(this.btg9X, "j-t");
        if (!/^\/friend/.test(dR9I)) {
            if (j7c && j7c.length) {
                a6g.ba7T(j7c[0], "display", d7e.event > 0 ? "" : "none")
            }
        } else {
            a6g.ba7T(j7c[0], "display", "none")
        }
    };
    b7g.cJ8B = function (d7e) {
        var g7b = h7a.X7Q(d7e, "d:action");
        if (g7b) {
            switch (a6g.t7m(g7b, "action")) {
                case "login":
                    h7a.co8g(d7e);
                    var u7n = a6g.t7m(g7b, "type");
                    if (u7n) {
                        if (u7n == "sina" || u7n == "tencent") {
                            this.DO6I = g7b.href;
                            l7e.De6Y(this.kV1x.f7c(this));
                            this.Qn0x = top.open()
                        } else top.login(u7n == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case "logout":
                    h7a.co8g(d7e);
                    top.logout();
                    break;
                case "viewStore":
                    if (!this.btB9s.bqT8L("storeNew")) {
                        a6g.w7p(this.cIO5T, "f-vhide")
                    }
                    break;
                case "viewLevel":
                    if (!this.btB9s.bqT8L("levelNew")) {
                        a6g.w7p(this.cIP5U, "f-vhide")
                    }
                    break
            }
        }
    };
    b7g.kV1x = function (cs8k) {
        this.DO6I += "&checkToken=" + cs8k || "";
        this.Qn0x.location.href = this.DO6I
    };
    b7g.Qd0x = function (d7e) {
        var g7b = h7a.X7Q(d7e, "d:action");
        if (!g7b) return;
        var U7N = a6g.t7m(g7b, "action");
        switch (U7N) {
            case "bilog":
                var buy9p = a6g.t7m(g7b, "logAction"),
                    buC9t = a6g.t7m(g7b, "logJson");
                window.log(buy9p, buC9t);
                break
        }
    };
    b7g.bPe4i = function (Mj9a, d7e) {
        if (this.buI9z) {
            this.buI9z.style.display = !Mj9a ? "none" : "";
            (Mj9a || !this.bec4g ? a6g.w7p : a6g.y7r).call(window, this.Qk0x, "f-hide")
        }
    };
    b7g.clf0x = function (gn0x) {
        a6g.ba7T(this.o7h, "top", -gn0x + "px")
    };
    b7g.bPc4g = function (eZ9Q, ckO0x) {
        this.cli0x.os2x(eZ9Q);
        if (eZ9Q == "discover") {
            a6g.w7p(this.bPf4j, "f-hide");
            a6g.y7r(this.btr9i, "f-hide");
            window.g_topBarHeight = 105;
            this.btu9l.os2x(ckO0x)
        } else {
            a6g.y7r(this.bPf4j, "f-hide");
            a6g.w7p(this.btr9i, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b7g.cld0x = function () {
        var ep9g = a6g.B7u("g_iframe");
        if (!ep9g) return;
        var gG0x = ep9g.contentWindow.document.getElementById("g_top");
        this.bPc4g(a6g.t7m(gG0x, "module"), a6g.t7m(gG0x, "sub"))
    };
    var bdP4T = {},
        bOW4a = /\/\/\w+/,
        ckM0x = {
            avatarUrl: function (a, b) {
                a = a || "";
                b = b || "";
                return a.replace(bOW4a, "") !== b.replace(bOW4a, "")
            },
            userId: true,
            nickname: true,
            reward: true,
            topic: true,
            djStatus: true
        };
    b7g.ckL0x = function (vB4F) {
        var oB2x = k7d.dm9d(ckM0x, function (C7v, L7E) {
            if (k7d.gO0x(C7v)) {
                return C7v(vB4F[L7E], bdP4T[L7E])
            } else {
                return vB4F[L7E] !== bdP4T[L7E]
            }
        });
        bdP4T = vB4F;
        return vB4F[oB2x]
    };
    b7g.KQ8I = function () {
        var dp9g = GUser || {},
            ckK0x = GUserAcc || {};
        if (dp9g && dp9g.userId) {
            var bOV4Z = NEJ.X(dp9g, ckK0x);
            if (this.ckL0x(bOV4Z)) {
                a6g.dA9r(this.GG7z, "m-topbar-user-login", bOV4Z)
            }
        } else {
            bdP4T = {};
            this.GG7z.innerHTML = a6g.ij0x("m-topbar-user-unlogin");
            var j7c = a6g.E7x(this.btg9X, "j-t");
            a6g.ba7T(j7c[0], "display", "none")
        }
        a6g.y7r(this.GG7z, "f-hide");
        this.bec4g = false;
        var j7c = a6g.E7x(this.GG7z, "j-uflag");
        if (dp9g && dp9g.userId) {
            this.Qk0x = j7c.shift();
            this.buI9z = j7c.shift();
            this.Lj8b = j7c.shift()
        } else {
            this.buI9z = j7c.shift()
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        q7j = c7f("nm.d"),
        b7g, K7D;
    q7j.fp9g({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function (Q7J) {
                h7a.z7s(q7j.tv3x, "message", Q7J)
            }
        }
    });
    q7j.tv3x = NEJ.C();
    b7g = q7j.tv3x.N7G(q7j.hE0x);
    b7g.bdF4J = function () {
        this.cm8e("polling-get", {})
    };
    b7g.vu4y = function () {
        var ej9a;
        return function () {
            if (!!ej9a) return;
            ej9a = window.setInterval(this.bdF4J.f7c(this), 1e5);
            this.bdF4J()
        }
    }();
    I7B.fK9B.A7t({
        event: "message",
        element: q7j.tv3x
    })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host),
                uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""),
                uri = {},
                i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol,
                host = uri.host,
                port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""),
                components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {},
                params = qs.split("&"),
                i = 0,
                l = params.length,
                kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [],
                depth = typeof deep == "undefined" ? 2 : deep,
                prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function (arr, arr2) {
            var ret = [],
                longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {}
        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        };
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
            indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type),
                id = packet.id || "",
                endpoint = packet.endpoint || "",
                ack = packet.ack,
                data = null;
            switch (packet.type) {
                case "error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case "message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case "event":
                    var ev = {
                        name: packet.name
                    };
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case "json":
                    data = JSON.stringify(packet.data);
                    break;
                case "connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case "ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "",
                data = pieces[5] || "",
                packet = {
                    type: packets[pieces[1]],
                    endpoint: pieces[4] || ""
                };
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data";
                else packet.ack = true
            }
            switch (packet.type) {
                case "error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case "message":
                    packet.data = data || "";
                    break;
                case "event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {}
                    packet.args = packet.args || [];
                    break;
                case "json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {}
                    break;
                case "connect":
                    packet.qs = data || "";
                    break;
                case "ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {}
                        }
                    }
                    break;
                case "disconnect":
                case "heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {}
        Socket.prototype.handshake = function (fn) {
            var self = this,
                options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports,
                match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected,
                wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this,
                maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"],
                limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1),
                lastArg = args[args.length - 1],
                packet = {
                    type: "event",
                    name: name
                };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
                case "connect":
                    this.$emit("connect");
                    break;
                case "disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case "message":
                case "json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({
                            type: "ack",
                            ackId: packet.id
                        })
                    }
                    this.$emit.apply(this, params);
                    break;
                case "event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case "ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case "error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query),
                self = this,
                Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this,
                args = arguments;
            WebSocket.bdy4C(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this,
                args = arguments;
            WebSocket.bdy4C(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.QQ1x.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bvy9p();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l, Q, E, B, J = false,
                a = false,
                n, G, m = true,
                M = function () {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(),
                        Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah),
                        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1",
                        ag = [0, 0, 0],
                        ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new(window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {}
                        }
                    }
                    return {
                        w3: aa,
                        pv: ag,
                        wk: af,
                        ie: X,
                        win: ae,
                        mac: ac
                    }
                }(),
                k = function () {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function () {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function () {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv,
                    X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function (ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function () {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function () {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function (aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function () {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }(function () {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () {},
                error: function () {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.he0x = WebSocket.ckI0x++;
            WebSocket.bOS4W[self.he0x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.mf1x = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.bdy4C(function () {
                    WebSocket.pV2x.create(self.he0x, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.pV2x.send(this.he0x, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.pV2x.close(this.he0x)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.mf1x)) {
                this.mf1x[type] = []
            }
            this.mf1x[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.mf1x)) return;
            var events = this.mf1x[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.mf1x[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.ckE0x = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bOR4V(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bOR4V("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.ckC0x("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bOR4V = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.prototype.ckC0x = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.pV2x = null;
        WebSocket.bOS4W = {};
        WebSocket.QQ1x = [];
        WebSocket.ckI0x = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.bdy4C(function () {
                WebSocket.pV2x.loadManualPolicyFile(url)
            })
        };
        WebSocket.bvy9p = function () {
            if (WebSocket.pV2x) return;
            if (WebSocket.ckA0x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.ckA0x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.ckz0x()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cIS5X = function () {
            setTimeout(function () {
                WebSocket.pV2x = document.getElementById("webSocketFlash");
                WebSocket.pV2x.setCallerUrl(location.href);
                WebSocket.pV2x.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.QQ1x.length; ++i) {
                    WebSocket.QQ1x[i]()
                }
                WebSocket.QQ1x = []
            }, 0)
        };
        WebSocket.cIT5Y = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.pV2x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bOS4W[events[i].webSocketId].ckE0x(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cIU5Z = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.ea9R = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.bdy4C = function (task) {
            if (WebSocket.pV2x) {
                task()
            } else {
                WebSocket.QQ1x.push(task)
            }
        };
        WebSocket.ckz0x = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.bvy9p()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.bvy9p()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };

        function empty() {}
        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.c7f = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {}
        XHRPolling.prototype.get = function () {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.c7f(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"),
                    area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index,
                    iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this,
                script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c7f = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.ek9b) this.ek9b = {};
        this.bOO4S = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.ek9b || !this.ek9b.error || isArray(this.ek9b.error) && !this.ek9b.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.ek9b) return false;
        var handler = this.ek9b[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.ek9b) this.ek9b = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.ek9b[type]) {
            this.ek9b[type] = listener
        } else if (isArray(this.ek9b[type])) {
            this.ek9b[type].push(listener)
        } else {
            this.ek9b[type] = [this.ek9b[type], listener]
        }
        if (isArray(this.ek9b[type]) && !this.ek9b[type].warned) {
            var m;
            if (this.bOO4S !== undefined) {
                m = this.bOO4S
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.ek9b[type].length > m) {
                this.ek9b[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.ek9b[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.ek9b || !this.ek9b[type]) return this;
        var list = this.ek9b[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.ek9b[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.ek9b = {};
            return this
        }
        var events = this.ek9b && this.ek9b[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.ek9b[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.ek9b) this.ek9b = {};
        if (!this.ek9b[type]) this.ek9b[type] = [];
        if (!isArray(this.ek9b[type])) {
            this.ek9b[type] = [this.ek9b[type]]
        }
        return this.ek9b[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function () {
    eval(function (p, a, c, k, e, d) {
        e = function (c) {
            return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!"".replace(/^/, String)) {
            while (c--) d[e(c)] = k[c] || e(c);
            k = [function (e) {
                return d[e]
            }];
            e = function () {
                return "\\w+"
            };
            c = 1
        }
        while (c--)
            if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        return p
    }("g 1=e;0.d=f(){3(1)h;1=c;3(a.9=='8.b.q'){0.4={2:'p.o.t.s',7:'6',5:'r'}}k{0.4={2:'j.i.n.m',7:'6',5:'l'}}}", 30, 30, "window|inited|pushHost|if|MUSIC_CONFIG|pushKey|6003|pushPort|music|host|location|163|true|initPushConfig|false|function|var|return|58|123|else|7bde08fbeb884e0e8459b1304df970cd|233|180|push|web|com|3b97981848064bbabeaaf2fb1eab7368|net|126".split("|"), 0, {}))
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        l7e = c7f("nm.x"),
        dE9v = c7f("nm.u"),
        q7j = c7f("nm.d"),
        Rf1x = c7f("pomelo"),
        V7O = 0,
        b7g, K7D;
    q7j.fp9g({
        "polling-init": {
            url: "/api/push/init",
            format: function (Q7J) {
                V7O = 2;
                var tm3x = {
                        domain: "music.163.com",
                        host: MUSIC_CONFIG.pushHost,
                        port: MUSIC_CONFIG.pushPort,
                        key: MUSIC_CONFIG.pushKey
                    },
                    i7b = Q7J.account || bb7U,
                    do9f = GUser.userId;
                Rf1x.init(tm3x.host, tm3x.port, true, this.cku0x.f7c(this, {
                    user: do9f,
                    nonce: i7b.nonce,
                    domain: tm3x.domain,
                    productKey: tm3x.key,
                    signature: i7b.signature,
                    expire_time: i7b.expireTime
                }))
            },
            onerror: function () {
                return this.bwq0x()
            }
        }
    });
    q7j.BT6N = NEJ.C();
    b7g = q7j.BT6N.N7G(q7j.hE0x);
    b7g.cv8n = function () {
        var qM2x = !1;
        return function (e7d) {
            if (!qM2x) {
                qM2x = !0
            }
            this.cD8v(e7d);
            Rf1x.on("specify", this.rR3x.f7c(this));
            Rf1x.on("broadcast", this.rR3x.f7c(this))
        }
    }();
    b7g.rR3x = function (d7e) {
        k7d.bd7W(d7e, function (bF8x) {
            h7a.z7s(q7j.BT6N, "message", bF8x)
        }, this)
    };
    b7g.bwq0x = function () {
        var bA8s = 500;
        return function () {
            V7O = 0;
            Rf1x.disconnect();
            if (bA8s > 6e4) bA8s = 500;
            bA8s *= 2
        }
    }();
    b7g.cku0x = function (e7d, bY8Q) {
        if (!!bY8Q) {
            return this.bwq0x()
        }
        V7O = 3;
        Rf1x.registerAndBind(e7d, function (m7f) {
            if (m7f.code != 200) {
                return this.bwq0x()
            }
            V7O = 4
        }.f7c(this))
    };
    b7g.cIV5a = function () {
        dE9v.ckr0x.fR9I().cIW5b()
    };
    b7g.cIZ5e = function () {
        dE9v.ckr0x.fR9I().cJc5h()
    };
    b7g.bwC0x = function () {
        var qM2x = !1;
        return function () {
            if (qM2x) return;
            qM2x = !0;
            if (window.initPushConfig) {
                try {
                    window.initPushConfig()
                } catch (e) {}
            }
            this.cm8e("polling-init", {})
        }
    }();
    I7B.fK9B.A7t({
        event: "message",
        element: q7j.BT6N
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        dz9q = c7f("nej.p"),
        k7d = c7f("nej.u"),
        n7g = c7f("nm.l"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        cw8o = c7f("api"),
        b7g, K7D;
    var gs0x = a6g.jz0x('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n7g.bwF0x = NEJ.C();
    b7g = n7g.bwF0x.N7G(n7g.el9c);
    K7D = n7g.bwF0x.cr8j;
    b7g.bm8e = function (e7d) {
        e7d.title = "意见反馈";
        this.bn8f(e7d)
    };
    b7g.cf8X = function () {
        this.ce8W = gs0x
    };
    b7g.bV8N = function () {
        this.ch8Z();
        this.hL0x = {};
        var JI8A = a6g.E7x;
        var EZ7S = h7a.s7l;
        this.hL0x.submit_btn = JI8A(this.o7h, "u-btn2")[0];
        this.hL0x.cancle_btn = JI8A(this.o7h, "u-btn2")[1];
        this.hL0x.prompt_msg = JI8A(this.o7h, "u-err")[0];
        this.hL0x.zs = JI8A(this.o7h, "zs")[0];
        a6g.ba7T(this.hL0x.zs, "display", "none");
        this.hL0x.fb_txt = JI8A(this.o7h, "u-txt")[0];
        this.hL0x.contact = JI8A(this.o7h, "u-txt")[1];
        a6g.gQ0x(this.hL0x.fb_txt, "holder");
        a6g.gQ0x(this.hL0x.contact, "holder");
        if (a6g.bE8w(this.hL0x.fb_txt.parentNode, "holder-parent")) {
            a6g.ba7T(this.hL0x.fb_txt.parentNode, "display", "block")
        }
        if (a6g.bE8w(this.hL0x.contact.parentNode, "holder-parent")) {
            a6g.ba7T(this.hL0x.contact.parentNode, "display", "block")
        }
        EZ7S(this.hL0x.submit_btn, "click", this.ckm0x.f7c(this));
        EZ7S(this.hL0x.cancle_btn, "click", this.ckl0x.f7c(this));
        EZ7S(this.hL0x.prompt_msg, "msgShow", this.ckj0x.f7c(this));
        EZ7S(this.hL0x.fb_txt, "keyup", this.vb4f.f7c(this));
        EZ7S(this.hL0x.fb_txt, "input", this.eQ9H.f7c(this));
        EZ7S(this.hL0x.contact, "keyup", this.cki0x.f7c(this));
        EZ7S(this.hL0x.contact, "input", this.bOK4O.f7c(this));
        this.kN1x = q7j.hP0x.A7t()
    };
    b7g.ckm0x = function (d7e) {
        h7a.bf8X(d7e);
        if (this.cR8J()) return;
        var bp8h = this.hL0x.fb_txt.value.trim();
        var bs8k = bp8h.length;
        var e7d = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bOI4M = this.hL0x.contact.value.trim();
        var bcS4W = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l7e.btS9J(),
            contact: bOI4M
        };
        var i7b = {
                content: bp8h,
                client: "web",
                xInfo: JSON.stringify(bcS4W)
            },
            ok2x = this.kN1x.cvY2x();
        if (ok2x && ok2x.length) {
            i7b.log = ok2x.join("\n")
        }
        if (bs8k == 0) {
            this.hL0x.prompt_msg.innerHTML = "反馈内容不能为空";
            a6g.ba7T(this.hL0x.prompt_msg, "display", "block");
            return
        }
        if (bOI4M.length > 100) {
            this.hL0x.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a6g.ba7T(this.hL0x.prompt_msg, "display", "block");
            return
        }
        this.cR8J(true);
        e7d.data = k7d.cz8r(i7b);
        e7d.onload = this.ckd0x.f7c(this);
        e7d.onerror = this.jf0x.f7c(this);
        v7o.bk8c("/api/feedback/web", e7d)
    };
    b7g.eQ9H = function (d7e) {
        var bs8k = this.hL0x.fb_txt.value.trim().length;
        if (bs8k > 0) a6g.ba7T(this.hL0x.prompt_msg, "display", "none");
        dz9q.ds9j.browser == "ie" && dz9q.ds9j.version < "7.0" ? setTimeout(this.gt0x.f7c(this), 0) : this.gt0x()
    };
    b7g.vb4f = function (d7e) {
        if (d7e.keyCode === 8) this.gt0x()
    };
    b7g.gt0x = function () {
        var bs8k = this.hL0x.fb_txt.value.trim().length;
        this.hL0x.zs.innerHTML = !bs8k ? "0/140" : bs8k + "/140"
    };
    b7g.bOK4O = function (d7e) {
        var bs8k = this.hL0x.contact.value.trim().length;
        if (bs8k > 0) a6g.ba7T(this.hL0x.prompt_msg, "display", "none")
    };
    b7g.cki0x = function (d7e) {
        if (d7e.keyCode === 8) this.bOK4O()
    };
    b7g.ckl0x = function (d7e) {
        h7a.co8g(d7e);
        this.bq8i()
    };
    b7g.ckj0x = function (d7e) {
        var g7b = h7a.X7Q(d7e);
        g7b.innerHTML = "请输入反馈内容"
    };
    b7g.cJd5i = function (cJf5k) {
        var g7b = h7a.X7Q(d7e);
        g7b.innerHTML = ""
    };
    b7g.ckd0x = function (m7f) {
        this.cR8J(false);
        this.bq8i();
        n7g.Z7S.J7C({
            tip: "意见发送成功",
            autoclose: true
        })
    };
    b7g.jf0x = function (m7f) {
        this.cR8J(false);
        n7g.Z7S.J7C({
            tip: "意见发送失败",
            autoclose: true
        })
    };
    b7g.cR8J = function (dd8V) {
        return this.dY9P(this.hL0x.submit_btn, dd8V, "发送意见", "发送中...")
    };
    b7g.J7C = function () {
        K7D.J7C.call(this);
        this.cR8J(false);
        this.hL0x.fb_txt.value = "";
        this.hL0x.contact.value = "";
        a6g.ba7T(this.hL0x.prompt_msg, "display", "none");
        this.gt0x()
    };
    l7e.cka0x = function (e7d) {
        e7d = e7d || {};
        if (e7d.title === undefined) e7d.title = "意见反馈";
        n7g.bwF0x.J7C(e7d)
    };
    cw8o.feedback = l7e.feedback = l7e.cka0x
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        O7H = c7f("nej.ui"),
        b7g;
    if (!!O7H.zd5i) return;
    O7H.zd5i = NEJ.C();
    b7g = O7H.zd5i.N7G(O7H.eo9f);
    b7g.cv8n = function () {
        this.he0x = this.bOF4J();
        this.cD8v()
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.cq8i = e7d.index;
        this.gJ0x = e7d.total;
        this.hI0x = e7d.range;
        this.gP0x(e7d.data)
    };
    b7g.bB8t = function () {
        this.bG8y();
        delete this.be8W;
        delete this.cq8i;
        delete this.gJ0x;
        delete this.hI0x
    };
    b7g.iJ0x = br8j;
    b7g.bOF4J = function () {
        var gW0x = +(new Date);
        return function () {
            return "itm-" + ++gW0x
        }
    }();
    b7g.GW7P = function () {
        return this.he0x
    };
    b7g.hh0x = function () {
        return this.be8W
    };
    b7g.gP0x = function (i7b) {
        this.be8W = i7b || {};
        this.iJ0x(this.be8W)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        O7H = c7f("nej.ui"),
        b7g, K7D;
    if (!!O7H.uN4R) return;
    O7H.uN4R = NEJ.C();
    b7g = O7H.uN4R.N7G(O7H.zd5i);
    K7D = O7H.uN4R.cr8j;
    b7g.bm8e = function (e7d) {
        this.cjY0x = e7d.pkey || "id";
        this.bn8f(e7d)
    };
    b7g.Gr7k = function (i7b) {
        this.z7s("ondelete", {
            ext: i7b,
            id: this.GW7P(),
            data: this.hh0x(),
            body: this.md1x()
        })
    };
    b7g.tA3x = function (i7b) {
        this.z7s("onupdate", {
            ext: i7b,
            id: this.GW7P(),
            data: this.hh0x(),
            body: this.md1x()
        })
    };
    b7g.gP0x = function (i7b) {
        K7D.gP0x.apply(this, arguments);
        this.he0x = this.be8W[this.cjY0x] || this.bOF4J()
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        fD9u = NEJ.R,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ui"),
        b7g, iX0x, byg0x;
    if (!!O7H.byi0x) return;
    O7H.byi0x = NEJ.C();
    b7g = O7H.byi0x.N7G(O7H.eo9f);
    b7g.bm8e = function (e7d) {
        this.bcu4y = NEJ.X({}, e7d);
        this.gb0x = NEJ.X({}, e7d);
        delete this.bcu4y.onchange;
        this.gb0x.onchange = this.gm0x.f7c(this);
        this.bn8f(e7d);
        this.cjU0x({
            number: e7d.number,
            label: e7d.label || bb7U
        })
    };
    b7g.bB8t = function () {
        this.bG8y();
        if (!!this.lq1x) {
            this.lq1x.T7M();
            delete this.lq1x
        }
        delete this.bcu4y;
        delete this.gb0x;
        this.cjT0x();
        this.o7h.innerHTML = "&nbsp;"
    };
    b7g.cf8X = function () {
        this.mt1x = iX0x
    };
    b7g.cjU0x = function (i7b) {
        a6g.dA9r(this.o7h, byg0x, i7b);
        var gW0x = a6g.Mx9o();
        this.gb0x.list = a6g.E7x(this.o7h, "js-i-" + gW0x);
        this.gb0x.pbtn = (a6g.E7x(this.o7h, "js-p-" + gW0x) || fD9u)[0];
        this.gb0x.nbtn = (a6g.E7x(this.o7h, "js-n-" + gW0x) || fD9u)[0]
    };
    b7g.bV8N = function () {
        this.ch8Z()
    };
    b7g.cJg5l = function (i7b) {
        return a6g.cc8U(byg0x, i7b)
    };
    b7g.gm0x = function (d7e) {
        if (this.Sb1x) return;
        var r7k = d7e.index,
            cB8t = d7e.total;
        this.Sb1x = !0;
        this.Sd1x(r7k, cB8t);
        k7d.bd7W(this.bce4i, function (tQ3x) {
            tQ3x.Sd1x(r7k, cB8t)
        });
        this.Sb1x = !1;
        this.z7s("onchange", d7e)
    };
    b7g.f7c = function (bH8z) {
        bH8z = a6g.B7u(bH8z);
        if (!bH8z) return this;
        var cu8m = NEJ.X({}, this.bcu4y);
        cu8m.parent = bH8z;
        cu8m.index = this.tR3x();
        cu8m.total = this.lE1x();
        var tQ3x = this.constructor.A7t(cu8m);
        tQ3x.xE4I("onchange", this.gb0x.onchange);
        if (!this.bce4i) this.bce4i = [];
        this.bce4i.push(tQ3x);
        return this
    };
    b7g.cjT0x = function () {
        var blR6L = function (tQ3x, r7k, j7c) {
            tQ3x.T7M();
            j7c.splice(r7k, 1)
        };
        return function () {
            k7d.nC2x(this.bce4i, blR6L)
        }
    }();
    b7g.lp1x = function (r7k) {
        if (!this.lq1x) return;
        this.lq1x.lp1x(r7k)
    };
    b7g.tR3x = function () {
        if (!this.lq1x) return 1;
        return this.lq1x.tR3x()
    };
    b7g.lE1x = function () {
        if (!this.lq1x) return 1;
        return this.lq1x.lE1x()
    };
    b7g.Sd1x = function (r7k, cB8t) {
        if (!this.lq1x) return;
        this.lq1x.Sd1x(r7k, cB8t)
    };
    b7g.byV0x = function (cB8t) {
        if (!this.lq1x) return;
        this.lq1x.byV0x(cB8t)
    };
    iX0x = a6g.uK4O(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    byg0x = a6g.ey9p('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        O7H = c7f("nej.ut"),
        b7g;
    if (!!O7H.bcc4g) return;
    O7H.bcc4g = NEJ.C();
    b7g = O7H.bcc4g.N7G(O7H.cH8z);
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.bbX4b = e7d.pbtn;
        this.cy8q = e7d.nbtn;
        this.bbV4Z = e7d.sbtn;
        this.bbS4W = e7d.ebtn;
        this.iK0x = e7d.event || "click";
        this.kL1x = e7d.selected || "js-selected";
        this.oy2x = e7d.disabled || "js-disabled";
        this.cjR0x(e7d.list);
        this.Sd1x(e7d.index || 1, e7d.total || 1)
    };
    b7g.bB8t = function () {
        this.bG8y();
        delete this.bU8M;
        delete this.iK0x;
        delete this.bbX4b;
        delete this.cy8q;
        delete this.bbV4Z;
        delete this.bbS4W;
        delete this.bOC4G;
        delete this.gJ0x;
        delete this.cq8i;
        delete this.kL1x;
        delete this.oy2x
    };
    b7g.cjR0x = function () {
        var bzg0x = function (g7b) {
            this.bU8M.push(g7b);
            this.bX8P([
                [g7b, this.iK0x, this.ct8l.ex9o(this, 0)]
            ])
        };
        return function (j7c) {
            this.bU8M = [];
            this.bX8P([
                [this.bbX4b, "click", this.ct8l.ex9o(this, -1)],
                [this.cy8q, "click", this.ct8l.ex9o(this, 1)],
                [this.bbV4Z, "click", this.ct8l.ex9o(this, -2)],
                [this.bbS4W, "click", this.ct8l.ex9o(this, 2)]
            ]);
            k7d.bd7W(j7c, bzg0x, this)
        }
    }();
    b7g.HD7w = function (g7b, r7k) {
        if (r7k == null) {
            g7b.innerText = "";
            a6g.ba7T(g7b, "display", "none");
            a6g.y7r(g7b, this.kL1x)
        } else {
            g7b.innerText = r7k;
            a6g.ba7T(g7b, "display", "");
            r7k == this.cq8i ? a6g.w7p(g7b, this.kL1x) : a6g.y7r(g7b, this.kL1x)
        }
    };
    b7g.bgy5D = function () {
        if (this.cq8i <= 1) {
            a6g.w7p(this.bbX4b, this.oy2x);
            a6g.w7p(this.bbV4Z, this.oy2x)
        } else {
            a6g.y7r(this.bbX4b, this.oy2x);
            a6g.y7r(this.bbV4Z, this.oy2x)
        }
        if (this.cq8i >= this.gJ0x) {
            a6g.w7p(this.cy8q, this.oy2x);
            a6g.w7p(this.bbS4W, this.oy2x)
        } else {
            a6g.y7r(this.cy8q, this.oy2x);
            a6g.y7r(this.bbS4W, this.oy2x)
        }
    };
    b7g.bbO4S = br8j;
    b7g.bgA5F = function () {
        this.bbO4S();
        this.bgy5D();
        this.z7s("onchange", {
            last: this.bOC4G,
            total: this.gJ0x,
            index: this.cq8i,
            ext: this.bgB5G
        })
    };
    b7g.bOB4F = function (r7k) {
        r7k = parseInt(r7k);
        if (isNaN(r7k) || this.gJ0x == null) return !1;
        r7k = Math.max(1, Math.min(r7k, this.gJ0x));
        this.bOC4G = this.cq8i;
        this.cq8i = r7k;
        return !0
    };
    b7g.bgG5L = function (cB8t) {
        cB8t = parseInt(cB8t);
        if (isNaN(cB8t) || cB8t < 1) return !1;
        this.gJ0x = cB8t;
        return !0
    };
    b7g.ct8l = function (d7e, fg9X) {
        h7a.co8g(d7e);
        var G7z = h7a.X7Q(d7e);
        if (!G7z || a6g.bE8w(G7z, this.kL1x) || a6g.bE8w(G7z, this.oy2x)) return;
        var r7k = G7z.innerText;
        switch (fg9X) {
            case 1:
            case -1:
                r7k = this.cq8i + fg9X;
                break;
            case 2:
                r7k = this.gJ0x;
                break;
            case -2:
                r7k = 1;
                break
        }
        this.lp1x(r7k)
    };
    b7g.tR3x = function () {
        return this.cq8i
    };
    b7g.lp1x = function (r7k) {
        var cjL9C = this.cq8i;
        this.bOB4F(r7k);
        if (cjL9C != this.cq8i) this.bgA5F();
        return this
    };
    b7g.lE1x = function () {
        return this.gJ0x
    };
    b7g.RV1x = function (cB8t) {
        if (this.bgG5L(cB8t) && this.cq8i != null) {
            this.cq8i = 1;
            this.bgA5F()
        }
        return this
    };
    b7g.byV0x = function (cB8t) {
        if (this.bgG5L(cB8t)) {
            this.bbO4S();
            this.bgy5D()
        }
        return this
    };
    b7g.Sd1x = function (r7k, cB8t) {
        if (!this.bgG5L(cB8t) || !this.bOB4F(r7k)) return this;
        this.bgA5F();
        return this
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        db8T = c7f("nej.x"),
        O7H = c7f("nej.ut"),
        b7g;
    if (!!O7H.Sp1x) return;
    O7H.Sp1x = NEJ.C();
    b7g = O7H.Sp1x.N7G(O7H.bcc4g);
    b7g.cv8n = function () {
        this.cD8v();
        var g7b = a6g.dk9b("span", "zdot");
        g7b.innerText = "...";
        this.bbK4O = [g7b.cloneNode(true), g7b]
    };
    b7g.bB8t = function () {
        this.bG8y();
        this.bOA4E()
    };
    b7g.bOA4E = function () {
        a6g.mO1x(this.bbK4O[0]);
        a6g.mO1x(this.bbK4O[1])
    };
    b7g.bbO4S = function () {
        this.bgB5G = {
            last: !1,
            first: !1,
            list: this.bU8M
        };
        this.bOA4E();
        this.HD7w(this.bU8M[0], 1);
        var bM8E = 1,
            bs8k = this.bU8M.length;
        if (this.gJ0x < bs8k) {
            for (var qV3x; bM8E < bs8k; bM8E++) {
                qV3x = bM8E + 1;
                this.HD7w(this.bU8M[bM8E], qV3x > this.gJ0x ? null : qV3x)
            }
            return
        }
        if (this.cq8i > 1) {
            var cA8s = Math.floor((bs8k - 2) / 2),
                cjJ9A = this.gJ0x - bs8k + 2,
                hD0x = Math.max(2, this.cq8i - cA8s);
            if (this.gJ0x >= bs8k) {
                hD0x = Math.min(hD0x, cjJ9A)
            }
            if (hD0x > 2) {
                this.bU8M[0].insertAdjacentElement("afterEnd", this.bbK4O[0]);
                this.bgB5G.first = !0
            }
            for (var r7k;; bM8E++) {
                r7k = hD0x + bM8E - 1;
                if (r7k > this.cq8i) break;
                this.HD7w(this.bU8M[bM8E], r7k)
            }
        }
        if (this.cq8i < this.gJ0x) {
            var r7k, hD0x = this.cq8i + 1;
            for (var i = 0, l = bs8k - 2;; i++, bM8E++) {
                r7k = hD0x + i;
                if (bM8E > l || r7k > this.gJ0x) break;
                this.HD7w(this.bU8M[bM8E], r7k)
            }
            if (r7k < this.gJ0x) {
                this.bU8M[bM8E].insertAdjacentElement("beforeBegin", this.bbK4O[1]);
                this.bgB5G.last = !0
            }
            if (r7k <= this.gJ0x) {
                this.HD7w(this.bU8M[bM8E++], this.gJ0x)
            }
        }
        for (; bM8E < bs8k; bM8E++) {
            this.HD7w(this.bU8M[bM8E])
        }
    };
    a6g.cjE9v = db8T.cjE9v = function (bH8z, e7d) {
        var D7w = a6g.lQ1x(bH8z);
        if (!D7w) return null;
        if (!O7H.WZ2x(D7w, O7H.Sp1x)) {
            e7d = e7d || {};
            var j7c = !e7d.clazz ? a6g.df9W(D7w) : a6g.E7x(D7w, e7d.clazz);
            e7d.pbtn = j7c.shift();
            e7d.nbtn = j7c.pop();
            e7d.list = j7c;
            delete e7d.clazz
        }
        return O7H.WZ2x(D7w, O7H.Sp1x, e7d || bb7U)
    };
    db8T.isChange = !0
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        fD9u = NEJ.R,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        O7H = c7f("nej.ui"),
        b7g, K7D, gs0x;
    if (!!O7H.Sw1x) return;
    O7H.Sw1x = NEJ.C();
    b7g = O7H.Sw1x.N7G(O7H.byi0x);
    K7D = O7H.Sw1x.cr8j;
    b7g.bm8e = function (e7d) {
        e7d.number = parseInt(e7d.number) || 9;
        this.bn8f(e7d);
        this.lq1x = I7B.Sp1x.A7t(this.gb0x)
    };
    b7g.gm0x = function (d7e) {
        if (!!this.bcu4y.noend) {
            var bOv4z = d7e.ext || bb7U,
                j7c = bOv4z.list || fD9u;
            if (bOv4z.last) {
                a6g.ba7T(j7c[j7c.length - 1], "display", "none")
            }
        }
        K7D.gm0x.apply(this, arguments)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        bc7V = c7f("nej.ui"),
        O7H = c7f("nej.ut"),
        b7g;
    if (!!O7H.bbA4E) return;
    O7H.bbA4E = NEJ.C();
    b7g = O7H.bbA4E.N7G(O7H.cH8z);
    b7g.bm8e = function (e7d) {
        this.jm0x = {};
        this.bn8f(e7d);
        this.iu0x = a6g.B7u(e7d.parent);
        this.ft9k = {
            parent: this.iu0x
        };
        this.oM2x = parseInt(e7d.limit) || 10;
        this.zM5R = parseInt(e7d.first) || this.oM2x;
        this.cjA9r(e7d.item);
        this.cjz9q(e7d.cache || bb7U);
        this.cjx9o(e7d.pager || bb7U);
        this.gP0x()
    };
    b7g.bB8t = function () {
        this.z7s("onbeforerecycle");
        this.SH1x();
        this.bG8y();
        if (this.jm0x.clear) {
            this.S7L.wm4q(this.jm0x.key)
        }
        this.S7L.T7M();
        if (!!this.jE0x) {
            this.jE0x.T7M();
            delete this.jE0x
        }
        delete this.bOs4w;
        delete this.gb0x;
        delete this.bbl4p;
        delete this.S7L;
        delete this.iu0x;
        delete this.SM1x;
        delete this.ft9k;
        delete this.jm0x
    };
    b7g.bOr4v = function () {
        var dh9Y = /\{(.*?)\}/gi,
            cjt9k = function (ph2x, i7b) {
                return (ph2x || "{id}{seed}").replace(dh9Y, function ($1, $2) {
                    var C7v = i7b[$2];
                    return C7v == null ? $1 : C7v
                })
            };
        return function (D7w) {
            var L7E = cjt9k(this.ft9k.jstIdTempalte, {
                id: D7w,
                seed: a6g.Mx9o()
            });
            if (!this.ft9k.jstIdType) {
                return a6g.B7u(L7E)
            } else if (this.ft9k.jstIdType == 1) {
                return (a6g.E7x(this.iu0x, L7E) || [])[0]
            }
        }
    }();
    b7g.BV6P = function (bM8E, bj8b, gk0x, bs8k) {
        var m7f = {
            index: 1,
            total: 1
        };
        if (bj8b >= bM8E) {
            m7f.index = Math.floor((bj8b - bM8E) / gk0x) + 2
        }
        if (bs8k > bM8E) {
            m7f.total = Math.ceil((bs8k - bM8E) / gk0x) + 1
        }
        return m7f
    };
    b7g.bOq4u = function (L7E) {
        delete this.SM1x;
        this.JD8v = L7E;
        this.bX8P([
            [this.iu0x, "click", this.cjn9e.f7c(this)]
        ])
    };
    b7g.cjA9r = function (p7i) {
        if (k7d.fJ9A(p7i)) {
            this.bOq4u(p7i);
            return
        }
        NEJ.X(this.ft9k, p7i);
        var ef9W = this.ft9k.klass;
        delete this.ft9k.klass;
        if (k7d.fJ9A(ef9W)) {
            this.bOq4u(ef9W);
            return
        }
        delete this.JD8v;
        this.SM1x = ef9W;
        this.ft9k.ondelete = this.z7s.f7c(this, "ondelete");
        this.ft9k.onupdate = this.z7s.f7c(this, "onupdate")
    };
    b7g.cjz9q = function (R7K) {
        var ef9W = R7K.klass,
            kG1x = NEJ.X({}, R7K);
        this.jm0x.key = kG1x.lkey;
        this.jm0x.data = kG1x.data || {};
        this.jm0x.clear = !!kG1x.clear;
        this.ft9k.pkey = kG1x.key || "id";
        kG1x.onlistload = this.bhO5T.f7c(this);
        kG1x.onpullrefresh = this.cjm9d.f7c(this);
        if (!!ef9W && "onlistchange" in ef9W) {
            this.bX8P([
                [ef9W, "listchange", this.bhU5Z.f7c(this)]
            ])
        } else {
            kG1x.onitemadd = this.bbf4j.f7c(this);
            kG1x.onitemdelete = this.bbb4f.f7c(this);
            kG1x.onitemupdate = this.bOp4t.f7c(this)
        }
        this.S7L = (ef9W || O7H.Ry1x).A7t(kG1x);
        if (R7K.total != null) {
            this.S7L.RV1x(this.jm0x.key, R7K.total)
        }
        if (!!R7K.list) {
            this.S7L.uJ4N(this.jm0x.key, R7K.list)
        }
    };
    b7g.cjx9o = function (tQ3x) {
        this.bOs4w = tQ3x.klass || bc7V.Sw1x;
        this.gb0x = NEJ.X({}, tQ3x);
        if (k7d.ec9T(tQ3x.parent)) {
            this.gb0x.parent = tQ3x.parent[0];
            this.SV1x = tQ3x.parent.slice(1);
            if (!this.SV1x || !this.SV1x.length) {
                delete this.SV1x
            }
        }
        delete this.gb0x.klass
    };
    b7g.SH1x = function () {
        var gM0x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.z7s("onbeforelistclear", {
                parent: this.iu0x
            });
            if (!!this.fP9G && this.fP9G.length > 0) {
                this.fP9G = this.SM1x.T7M(this.fP9G);
                delete this.fP9G
            }
            if (gM0x.test(this.iu0x.tagName)) {
                a6g.bRl5q(this.iu0x)
            } else {
                this.iu0x.innerHTML = ""
            }
        }
    }();
    b7g.big5l = function (baV4Z) {
        if (!!this.gb0x.fixed) return;
        a6g.ba7T(this.gb0x.parent, "display", baV4Z);
        k7d.bd7W(this.SV1x, function (bH8z) {
            a6g.ba7T(bH8z, "display", baV4Z)
        }, this)
    };
    b7g.bij5o = function () {
        var r7k = this.gb0x.index || 1;
        delete this.gb0x.index;
        if (!!this.jE0x) {
            r7k = this.jE0x.tR3x()
        }
        this.Cx6r({
            last: r7k,
            index: r7k
        })
    };
    b7g.Cx6r = function (d7e) {
        this.z7s("onpagechange", d7e)
    };
    b7g.bOo4s = function (bj8b) {
        this.jm0x.offset = bj8b;
        this.bbI4M()
    };
    b7g.bOm4q = function (e7d) {
        return e7d
    };
    b7g.bbI4M = function () {
        this.Tb1x();
        var i7b = this.jm0x.data;
        i7b.offset = this.jm0x.offset;
        var qr2x = i7b.offset == 0;
        i7b.total = qr2x;
        this.jm0x.limit = qr2x ? this.zM5R : this.oM2x;
        i7b.limit = this.jm0x.limit;
        this.S7L.lJ1x(this.bOm4q(NEJ.X({}, this.jm0x)))
    };
    b7g.bhO5T = function (e7d) {
        if (e7d.key != this.jm0x.key || e7d.offset != this.jm0x.offset) return;
        this.baR3x();
        var j7c = this.S7L.hH0x(e7d.key);
        if (!j7c || !j7c.length) {
            this.bis6m();
            return
        }
        var gk0x = e7d.limit,
            bj8b = e7d.offset;
        if (this.bix6r(j7c, bj8b, gk0x)) return;
        this.z7s("onbeforelistrender", {
            list: j7c,
            offset: bj8b,
            parent: this.iu0x
        });
        if (!!this.JD8v) {
            this.ft9k.xlist = j7c;
            this.ft9k.beg = bj8b;
            this.ft9k.end = Math.min(j7c.length, bj8b + gk0x) - 1;
            this.ft9k.act = "list";
            var dU9L = a6g.cc8U(this.JD8v, this.ft9k);
            this.Tf1x(dU9L)
        } else {
            this.ft9k.limit = gk0x;
            this.ft9k.offset = bj8b;
            var hy0x = a6g.CX6R(j7c, this.SM1x, this.ft9k);
            this.Th1x(hy0x)
        }
        this.z7s("onafterlistrender", {
            list: j7c,
            offset: bj8b,
            parent: this.iu0x
        })
    };
    b7g.cjm9d = function (e7d) {
        if (!this.bbl4p) return;
        delete this.bbl4p;
        this.baR3x("onafterpullrefresh");
        this.gP0x()
    };
    b7g.bOj4n = function (r7k, cB8t) {
        if (!!this.jE0x) {
            var xG4K = this.jE0x.tR3x(),
                cjd9U = this.jE0x.lE1x();
            if (xG4K > cB8t || cB8t != cjd9U) {
                this.jE0x.T7M();
                delete this.jE0x;
                this.Cx6r({
                    last: xG4K,
                    index: Math.min(r7k, cB8t)
                });
                return !0
            }
        } else {
            this.gb0x.index = r7k;
            this.gb0x.total = cB8t;
            this.jE0x = this.bOs4w.A7t(this.gb0x);
            this.jE0x.xE4I("onchange", this.Cx6r.f7c(this));
            k7d.bd7W(this.SV1x, function (bH8z) {
                this.jE0x.f7c(bH8z)
            }, this)
        }
    };
    b7g.baM3x = function () {
        var gW0x = +(new Date);
        return function (i7b) {
            var D7w = i7b[this.ft9k.pkey];
            if (!D7w) {
                i7b["dirty-data"] = !0;
                i7b[this.ft9k.pkey] = "dirty-" + gW0x++
            }
            return i7b
        }
    }();
    b7g.baJ3x = function (i7b) {
        var D7w = i7b[this.ft9k.pkey];
        if (!!i7b["dirty-data"]) {
            delete i7b["dirty-data"];
            delete i7b[this.ft9k.pkey]
        }
        return D7w
    };
    b7g.baI3x = function () {
        var ciZ9Q = function (lj1x, nd1x) {
            this.iu0x.insertAdjacentElement(lj1x, nd1x)
        };
        return function (lj1x, i7b) {
            var IV8N = [i7b];
            if (!!this.JD8v) {
                this.ft9k.xlist = IV8N;
                this.ft9k.beg = 0;
                this.ft9k.end = 0;
                this.ft9k.act = "add";
                this.Tf1x(a6g.cc8U(this.JD8v, this.ft9k), lj1x)
            } else {
                this.ft9k.limit = 1;
                this.ft9k.offset = 0;
                this.ft9k.parent = ciZ9Q.f7c(this, lj1x);
                var hy0x = a6g.CX6R(IV8N, this.SM1x, this.ft9k);
                this.ft9k.parent = this.iu0x;
                this.Th1x(hy0x)
            }
        }
    }();
    b7g.Tb1x = br8j;
    b7g.baR3x = function (W7P) {
        var d7e = {
            parent: this.iu0x
        };
        this.z7s(W7P || "onafterlistload", d7e);
        if (!d7e.stopped) {
            a6g.mO1x(this.cM8E)
        }
    };
    b7g.bix6r = br8j;
    b7g.baB3x = function (bF8x, lj1x) {
        if (k7d.fJ9A(bF8x)) {
            if (!this.cM8E) this.cM8E = a6g.dk9b("div");
            this.cM8E.innerHTML = bF8x
        } else {
            this.cM8E = bF8x
        }
        this.iu0x.insertAdjacentElement(lj1x || "beforeEnd", this.cM8E)
    };
    b7g.AV5a = function (W7P, kD1x, lj1x) {
        var d7e = {
            parent: this.iu0x
        };
        this.z7s(W7P, d7e);
        if (!d7e.stopped) {
            this.baB3x(d7e.value || kD1x, lj1x)
        }
    };
    b7g.bis6m = br8j;
    b7g.Tf1x = br8j;
    b7g.Th1x = br8j;
    b7g.cjn9e = function () {
        var gM0x = /^(?:delete|update)$/;
        return function (d7e) {
            var g7b = h7a.X7Q(d7e, "d:action");
            if (!g7b) return;
            var U7N = a6g.t7m(g7b, "action");
            if (!gM0x.test(U7N)) return;
            var D7w = a6g.t7m(g7b, "id");
            if (!D7w) return;
            var p7i = this.S7L.eO9F(D7w);
            if (!p7i) return;
            h7a.bf8X(d7e);
            this.z7s("on" + U7N, {
                data: p7i,
                id: p7i[this.ft9k.pkey],
                body: a6g.B7u(this.bOr4v(D7w))
            })
        }
    }();
    b7g.bbf4j = br8j;
    b7g.bby4C = function (d7e) {
        var i7b = d7e.data || {},
            e7d = {
                data: i7b,
                key: this.jm0x.key,
                id: i7b[this.ft9k.pkey]
            };
        this.z7s("onbeforedelete", e7d);
        this.S7L.JF8x(e7d)
    };
    b7g.bbb4f = br8j;
    b7g.bbx4B = function (d7e) {
        var i7b = d7e.data || {},
            e7d = {
                data: i7b,
                key: this.jm0x.key
            };
        this.z7s("onbeforeupdate", e7d);
        this.S7L.bbL4P(e7d)
    };
    b7g.bOp4t = function (d7e) {
        this.Tp2x(d7e, "onafterupdate");
        if (d7e.stopped) return;
        var D7w = d7e.data[this.ft9k.pkey];
        if (!!this.fP9G) {
            var p7i = a6g.bVJ6D(D7w);
            if (!!p7i) p7i.gP0x(d7e.data)
        } else {
            var g7b = a6g.B7u(D7w + "" + a6g.Mx9o());
            if (!g7b) return;
            var j7c = this.S7L.hH0x(d7e.key),
                r7k = k7d.dm9d(j7c, d7e.data);
            if (r7k < 0) return;
            this.ft9k.list = j7c;
            this.ft9k.beg = r7k;
            this.ft9k.end = r7k;
            this.ft9k.act = "update";
            var dU9L = a6g.cc8U(this.JD8v, this.ft9k);
            g7b.insertAdjacentHTML("afterEnd", dU9L);
            a6g.cO8G(g7b)
        }
    };
    b7g.Tp2x = function (d7e, W7P) {
        var p7i = d7e.data;
        if (!p7i || p7i[this.ft9k.pkey] == null) {
            this.z7s("onerror", d7e);
            d7e.stopped = !0
        }
        if (!d7e.stopped) {
            this.z7s(W7P, d7e)
        }
    };
    b7g.biU6O = br8j;
    b7g.biW6Q = br8j;
    b7g.bhU5Z = function (d7e) {
        if (d7e.key != this.jm0x.key) return;
        switch (d7e.action) {
            case "add":
                this.bbf4j(d7e);
                break;
            case "delete":
                this.bbb4f(d7e);
                break;
            case "update":
                this.bOp4t(d7e);
                break;
            case "refresh":
                this.gP0x();
                break;
            case "unshift":
                this.biW6Q(d7e.offset, d7e.limit);
                break;
            case "append":
                this.biU6O(d7e.offset, d7e.limit);
                break
        }
    };
    b7g.qD2x = function (p7i) {
        this.bbx4B({
            data: p7i
        })
    };
    b7g.mE1x = function (p7i) {
        this.bby4C({
            data: p7i
        })
    };
    b7g.ur3x = function (p7i) {
        this.S7L.jq0x({
            data: p7i,
            key: this.jm0x.key
        })
    };
    b7g.uv3x = function () {
        return this.S7L
    };
    b7g.bjk6e = function (i7b) {
        this.baI3x("afterBegin", this.baM3x(i7b));
        return this.baJ3x(i7b)
    };
    b7g.bOf4j = function (i7b) {
        this.baI3x("beforeEnd", this.baM3x(i7b));
        return this.baJ3x(i7b)
    };
    b7g.gP0x = function () {
        this.SH1x();
        this.bij5o()
    };
    b7g.cJh5m = function () {
        this.S7L.wm4q(this.jm0x.key);
        this.gP0x()
    };
    b7g.bqa8S = function () {
        if (!!this.bbl4p) return;
        this.bbl4p = !0;
        this.AV5a("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        var j7c = this.S7L.hH0x(this.jm0x.key);
        if (j7c && j7c[0]) {
            this.jm0x.data.aftertime = j7c[0].eventTime || ""
        }
        this.S7L.bqa8S({
            key: this.jm0x.key,
            data: this.jm0x.data
        })
    };
    b7g.lE1x = function () {
        return this.S7L.lE1x(this.jm0x.key)
    };
    b7g.bOe4i = function () {
        return this.jE0x
    };
    b7g.bco4s = function () {
        return this.S7L.bco4s(this.jm0x.key)
    };
    b7g.ciQ9H = function () {
        return this.fP9G
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        fD9u = NEJ.R,
        k7d = c7f("nej.u"),
        a6g = c7f("nej.e"),
        O7H = c7f("nej.ut"),
        b7g, K7D;
    if (!!O7H.ks1x) return;
    O7H.ks1x = NEJ.C();
    b7g = O7H.ks1x.N7G(O7H.bbA4E);
    K7D = O7H.ks1x.cr8j;
    b7g.BV6P = function (bj8b, bs8k) {
        return K7D.BV6P.call(this, this.zM5R, bj8b, this.oM2x, bs8k)
    };
    b7g.bjt6n = function (r7k) {
        var bj8b = 0;
        if (r7k > 1) bj8b = this.zM5R + (r7k - 2) * this.oM2x;
        return bj8b
    };
    b7g.Cx6r = function (d7e) {
        K7D.Cx6r.apply(this, arguments);
        if (!d7e.stopped) {
            this.bOo4s(this.bjt6n(d7e.index))
        }
    };
    b7g.Tb1x = function () {
        this.SH1x();
        this.AV5a("onbeforelistload", "列表加载中...")
    };
    b7g.baR3x = function () {
        K7D.baR3x.apply(this, arguments);
        this.SH1x()
    };
    b7g.bix6r = function (j7c, bj8b, gk0x) {
        var bx8p = this.BV6P(bj8b, j7c.length);
        if (this.bOj4n(bx8p.index, bx8p.total)) return !0;
        this.big5l(bx8p.total > 1 ? "" : "none")
    };
    b7g.bis6m = function () {
        this.AV5a("onemptylist", "没有列表数据！")
    };
    b7g.baB3x = function (bF8x, lj1x) {
        if (!lj1x && k7d.fJ9A(bF8x)) {
            this.iu0x.innerHTML = bF8x;
            return
        }
        K7D.baB3x.apply(this, arguments)
    };
    b7g.Tf1x = function (dU9L) {
        this.iu0x.innerHTML = dU9L
    };
    b7g.Th1x = function (hy0x) {
        this.fP9G = hy0x
    };
    b7g.bbf4j = function (d7e) {
        this.Tp2x(d7e, "onafteradd");
        if (!d7e.stopped) this.gP0x()
    };
    b7g.bbb4f = function (d7e) {
        this.Tp2x(d7e, "onafterdelete");
        if (!d7e.stopped) this.gP0x()
    };
    b7g.biU6O = function (bj8b, gk0x) {
        var r7k = 1;
        if (!!this.jE0x) {
            r7k = this.jE0x.tR3x()
        }
        var kk1x = this.bjt6n(r7k),
            fZ9Q = kk1x + (r7k > 1 ? this.oM2x : this.zM5R);
        if (bj8b >= fZ9Q && !!this.jE0x) {
            var bx8p = this.BV6P(0, this.lE1x());
            this.jE0x.byV0x(bx8p.total);
            this.big5l(bx8p.total > 1 ? "" : "none")
        } else {
            this.gP0x()
        }
    };
    b7g.biW6Q = function (bj8b, gk0x) {
        var r7k = 1;
        if (!!this.jE0x) {
            r7k = this.jE0x.tR3x()
        }
        var kk1x = this.bjt6n(r7k),
            bx8p = this.BV6P(kk1x, this.lE1x());
        this.Cx6r({
            last: r7k,
            index: bx8p.index
        })
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        x7q = c7f("nm.w"),
        fv9m = 40,
        b7g, K7D;
    x7q.bar3x = NEJ.C();
    b7g = x7q.bar3x.N7G(I7B.cH8z);
    K7D = x7q.bar3x.cr8j;
    b7g.cv8n = function () {
        this.cD8v()
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.Tu2x = e7d.inputer;
        this.bjx6r = e7d.tipper;
        this.bX8P([
            [this.Tu2x, "input", this.eQ9H.f7c(this)]
        ])
    };
    b7g.bB8t = function () {
        this.bG8y();
        this.Lc8U(null, null)
    };
    b7g.eQ9H = function (d7e) {
        if (d7e && d7e.type == "keyup" && (d7e.keyCode != 8 || d7e.keyCode != 68)) return;
        var W7P = this.Tu2x.value,
            cJi5n;
        if (l7e.RU1x(W7P) > fv9m) {
            this.Tu2x.value = l7e.DJ6D(W7P, fv9m);
            this.Lc8U("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.f7c(this))
        } else if (W7P.indexOf("#") >= 0 || W7P.indexOf("@") >= 0) {
            this.Lc8U("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Lc8U(null, null);
            this.z7s("onchange", {
                value: W7P
            })
        }
    };
    b7g.ciM9D = function () {
        this.eQ9H()
    };
    b7g.Lc8U = function () {
        var D7w = 0;
        return function (dL9C, bOc4g) {
            if (!!D7w) window.clearTimeout(D7w);
            if (!dL9C) {
                a6g.w7p(this.bjx6r, "f-vhide");
                this.bOb4f = !1;
                return
            }
            this.bjx6r.innerHTML = '<i class="u-icn u-icn-25"></i>' + dL9C;
            a6g.y7r(this.bjx6r, "f-vhide");
            this.bOb4f = !0;
            if (k7d.gO0x(bOc4g)) D7w = window.setTimeout(function () {
                this.Lc8U(null, null);
                bOc4g()
            }.f7c(this), 1e3)
        }
    }();
    b7g.bNZ4d = function () {
        if (this.bOb4f) return !1;
        if (l7e.kp1x(this.Tu2x.value)) {
            this.Lc8U("歌单名不能为空");
            return !1
        }
        return !0
    };
    b7g.ga9R = function () {
        return this.Tu2x.value
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        h7a = c7f("nej.v"),
        a6g = c7f("nej.e"),
        v7o = c7f("nej.j"),
        n7g = c7f("nm.l"),
        x7q = c7f("nm.w"),
        bC8u = c7f("nej.ui"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    n7g.bal3x = NEJ.C();
    b7g = n7g.bal3x.N7G(n7g.el9c);
    K7D = n7g.bal3x.cr8j;
    b7g.cv8n = function () {
        this.cD8v()
    };
    b7g.bV8N = function () {
        this.ch8Z();
        var j7c = a6g.E7x(this.o7h, "j-flag");
        this.bak3x = {
            inputer: j7c[0],
            tipper: j7c[1]
        };
        this.iN0x = {
            onerror: this.bNX4b.f7c(this),
            onitemadd: this.bNX4b.f7c(this)
        };
        this.ma1x = j7c[2];
        h7a.s7l(j7c[2], "click", this.Go7h.f7c(this));
        h7a.s7l(j7c[3], "click", this.Dt6n.f7c(this));
        h7a.s7l(this.o7h, "keypress", this.bNW4a.f7c(this))
    };
    b7g.cf8X = function () {
        this.ce8W = "m-wgt-create"
    };
    b7g.bm8e = function (e7d) {
        e7d.clazz = " m-layer-w2";
        e7d.parent = e7d.parent || document.body;
        e7d.title = "新建歌单";
        e7d.draggable = !0;
        e7d.destroyalbe = !0;
        e7d.mask = true;
        this.bn8f(e7d);
        this.bak3x.inputer.value = e7d.name || "";
        this.vP4T = x7q.bar3x.A7t(this.bak3x);
        this.vP4T.ciM9D();
        this.S7L = q7j.io0x.A7t(this.iN0x);
        setTimeout(function () {
            this.bak3x.inputer.focus()
        }.f7c(this), 0)
    };
    b7g.bB8t = function () {
        this.bG8y();
        if (this.vP4T) {
            this.vP4T.T7M();
            delete this.vP4T
        }
        this.uE4I(!1);
        this.bak3x.inputer.value = ""
    };
    b7g.uE4I = function (TF2x) {
        this.pr2x = TF2x;
        if (TF2x) {
            this.ma1x.innerHTML = "<i>新建中...</i>";
            a6g.w7p(this.ma1x, "u-btn2-dis")
        } else {
            this.ma1x.innerHTML = "<i>新 建</i>";
            a6g.y7r(this.ma1x, "u-btn2-dis")
        }
    };
    b7g.Go7h = function () {
        if (this.pr2x || !this.vP4T.bNZ4d()) return;
        var cu8m = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.vP4T.ga9R()
            },
            offset: 1
        };
        this.S7L.jq0x(cu8m);
        this.uE4I(!0)
    };
    b7g.bNX4b = function (d7e) {
        var bZ8R = (d7e.result || bb7U).code;
        if (!bZ8R) {
            this.z7s("onsuccess", d7e.data)
        } else {
            this.z7s("onerror", d7e)
        }
        this.bq8i()
    };
    b7g.Dt6n = function () {
        this.bq8i()
    };
    b7g.bNW4a = function (d7e) {
        if (d7e.keyCode == 13) this.Go7h()
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        v7o = c7f("nej.j"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        n7g = c7f("nm.l"),
        b7g, K7D;
    n7g.bka6U = NEJ.C();
    b7g = n7g.bka6U.N7G(n7g.el9c);
    K7D = n7g.bka6U.cr8j;
    b7g.cv8n = function () {
        this.cD8v()
    };
    b7g.bV8N = function () {
        this.ch8Z();
        var j7c = a6g.E7x(this.o7h, "j-flag");
        this.iR0x = {
            limit: 301,
            parent: j7c[1],
            cache: {
                klass: q7j.io0x,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bkf6Z.f7c(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l7e.DD6x,
                escape: k7d.dI9z
            }
        };
        this.iN0x = {
            onsuccess: this.baa3x.f7c(this),
            onerror: this.dQ9H.f7c(this)
        };
        h7a.s7l(j7c[0], "click", this.Go7h.f7c(this));
        h7a.s7l(j7c[1], "click", this.lh1x.f7c(this))
    };
    b7g.cf8X = function () {
        this.ce8W = "m-wgt-subscribe"
    };
    b7g.bm8e = function (e7d) {
        e7d.parent = e7d.parent || document.body;
        e7d.clazz = " m-layer-w2";
        e7d.title = "添加到歌单";
        e7d.draggable = !0;
        e7d.mask = !0;
        this.bn8f(e7d);
        this.ZS3x = (e7d.tracks || []).reverse();
        this.iR0x.item.size = this.ZS3x.length;
        this.iN0x.name = e7d.name || "";
        this.bNV4Z = q7j.wt4x.A7t({
            onaddsuccess: this.Ec6W.f7c(this)
        });
        this.tL3x = q7j.io0x.A7t({
            onlistload: this.ciu9l.f7c(this)
        });
        this.tL3x.bSU6O();
        k7d.bd7W(this.ZS3x, function (p7i, r7k, j7c) {
            if (!k7d.lY1x(p7i)) {
                j7c[r7k] = this.bNV4Z.eO9F(p7i) || p7i
            }
        }, this)
    };
    b7g.ciu9l = function () {
        if (this.dM9D) this.dM9D.T7M();
        this.dM9D = I7B.ks1x.A7t(this.iR0x)
    };
    b7g.Go7h = function () {
        this.bq8i();
        if (this.GX7Q) this.GX7Q.T7M();
        this.GX7Q = n7g.bal3x.A7t(this.iN0x);
        this.GX7Q.J7C()
    };
    b7g.lh1x = function () {
        var cit9k = function (g7b) {
            while (g7b && g7b != document) {
                if (g7b.tagName.toLowerCase() == "li") {
                    return g7b
                }
                g7b = g7b.parentNode
            }
        };
        return function (d7e) {
            h7a.co8g(d7e);
            var G7z = h7a.X7Q(d7e),
                AS5X = cit9k(G7z);
            if (!!AS5X && !a6g.bE8w(AS5X, "dis")) {
                this.baa3x({
                    id: a6g.t7m(AS5X, "id")
                })
            }
        }
    }();
    b7g.baa3x = function (d7e) {
        var D7w = d7e.id;
        if (!D7w || !this.ZS3x.length) return;
        this.bNV4Z.jq0x({
            key: "track_playlist-" + D7w,
            data: {
                tracks: this.ZS3x,
                pid: D7w
            }
        });
        this.bq8i()
    };
    b7g.Ec6W = function () {
        this.z7s("onsuccess");
        n7g.Z7S.J7C({
            tip: "收藏成功"
        })
    };
    b7g.dQ9H = function (d7e) {
        this.bq8i();
        this.z7s("onerror", d7e);
        var cP8H = "收藏失败";
        switch (d7e.code) {
            case 405:
                cP8H = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cP8H = "歌单数量超过限制";
                break;
            case 502:
                cP8H = "歌曲已经存在"
        }
        n7g.Z7S.J7C({
            tip: cP8H,
            type: 2
        })
    };
    b7g.bkf6Z = function () {
        this.bq8i();
        n7g.Z7S.J7C({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    };
    l7e.nT2x = function (e7d) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n7g.bka6U.J7C(e7d)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        dz9q = c7f("nej.p"),
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u"),
        l7e = c7f("nm.x");
    var bkA6u, pm2x, Y7R = decodeURIComponent(location.href),
        kf1x = /.+(https?:\/\/.+\/proxy.html)/.test(Y7R) ? RegExp.$1 : "";
    if (!!kf1x) {
        v7o.uM4Q("mail_proxy_url", kf1x)
    } else {
        kf1x = v7o.tV3x("mail_proxy_url") || "about:blank"
    }
    bkA6u = a6g.bcR4V({
        src: kf1x,
        onload: function () {
            pm2x = true
        }
    });
    var bNS4W = function () {
        v7o.gI0x("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var cir9i = function () {
        if (dz9q.ds9j.browser == "ie" && parseInt(dz9q.ds9j.version) < 9) {
            l7e.eN9E({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l7e.MK9B = function (u7n, D7w, U7N) {
        if (!cir9i()) return;
        bNS4W();
        if (U7N == "stop") {
            if (!pm2x) throw "proxy not loaded";
            bNS4W();
            bkA6u.contentWindow.location.replace(kf1x + "#" + k7d.cz8r({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bkA6u.contentWindow.location.replace(kf1x + "#" + k7d.cz8r({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: u7n,
                    id: D7w,
                    s: +(new Date),
                    action: U7N
                })
            }))
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u"),
        l7e = c7f("nm.x"),
        n7g = c7f("nm.l"),
        q7j = c7f("nm.d");
    var kN1x = q7j.hP0x.A7t();
    var pH2x = q7j.wt4x.A7t({
        onlistload: cij9a,
        onitemload: cii9Z,
        onerror: dQ9H
    });
    var Hj7c = q7j.rC3x.A7t({
        onlistload: cig9X,
        onitemload: cie9V,
        onerror: dQ9H
    });
    var bNO4S = {};

    function xt4x(d7e) {
        var g7b = h7a.X7Q(d7e, "d:resAction"),
            U7N = a6g.t7m(g7b, "resAction");
        if (g7b && (U7N == "play" || U7N == "addto")) {
            var u7n = parseInt(a6g.t7m(g7b, "resType"));
            bNN4R({
                action: U7N,
                type: u7n,
                id: a6g.t7m(g7b, "resId"),
                from: a6g.t7m(g7b, "resFrom"),
                data: a6g.t7m(g7b, "resData"),
                order: a6g.t7m(g7b, "resOrder"),
                node: g7b
            });
            if (u7n != 13) bNM4Q(g7b)
        }
    }

    function bNN4R(bT8L) {
        var U7N = bT8L.action,
            u7n = bT8L.type,
            D7w = bT8L.id,
            ei9Z = bT8L.from,
            i7b = bT8L.data,
            uk3x = bT8L.order,
            e7d = {
                limit: 1e3,
                offset: 0,
                data: {
                    id: D7w
                },
                ext: {
                    id: D7w,
                    action: U7N,
                    type: u7n,
                    from: ei9Z,
                    data: i7b,
                    node: bT8L.node
                }
            };
        if (U7N != "play" && U7N != "addto" || !u7n) return;
        if (window.GRef && GRef == "mail") {
            l7e.MK9B(u7n, D7w, U7N);
            return
        }
        switch (u7n) {
            case 13:
                e7d.key = "track_playlist-" + D7w;
                pH2x.lJ1x(e7d);
                break;
            case 17:
                e7d.key = "program";
                e7d.id = D7w;
                Hj7c.bcg4k(e7d);
                if (U7N == "play") {
                    v7o.bk8c("/api/dj/program/listen", {
                        query: {
                            id: D7w
                        }
                    })
                }
                break;
            case 18:
                e7d.key = "track";
                e7d.id = D7w;
                pH2x.bcg4k(e7d);
                break;
            case 19:
                e7d.key = "track_album-" + D7w;
                pH2x.lJ1x(e7d);
                break;
            case 24:
                e7d.key = "track_day";
                pH2x.lJ1x(e7d);
                break;
            case 2:
                e7d.key = "track_artist_top-" + D7w;
                pH2x.lJ1x(e7d);
                break;
            case 70:
                e7d.key = "program_djradio-" + D7w + "-" + uk3x;
                e7d.data.radioId = D7w;
                e7d.data.asc = uk3x == 2;
                Hj7c.lJ1x(e7d);
                break
        }
    }

    function bNK4O(j7c) {
        var m7f = [];
        k7d.bd7W(j7c, function (p7i) {
            if (p7i.mainSong) {
                p7i.mainSong.program = p7i;
                m7f.push(p7i.mainSong);
                p7i.localupdatetime = +(new Date);
                pH2x.cwQ2x(p7i.mainSong);
                p7i.mainTrackId = p7i.mainSong.id;
                delete p7i.mainSong
            } else {
                var bNJ4N = pH2x.eO9F(p7i.mainTrackId);
                bNJ4N && m7f.push(bNJ4N)
            }
        });
        return m7f
    }

    function ZA3x(j7c, e7d) {
        var sX3x = e7d.action == "play" && e7d.type != 17 && e7d.type != 18,
            gi0x = e7d.action == "play";
        if (!j7c.length) return;
        if (e7d.type == 19) {
            j7c = l7e.Lz8r(j7c, true, {
                play: true
            }, {
                source: "album",
                sourceid: e7d.id
            })
        } else {
            j7c = l7e.Lz8r(j7c, true, {
                play: true
            })
        }
        k7d.bd7W(j7c, function (p7i) {
            p7i.source = l7e.bsv9m({
                fid: e7d.from,
                fdata: e7d.data,
                type: e7d.type,
                rid: e7d.id
            }, p7i.id)
        });
        top.player.addTo(j7c, sX3x, gi0x);
        kN1x.UG2x({
            rid: e7d.id,
            type: e7d.type,
            hash: l7e.LJ8B(),
            play: gi0x,
            source: e7d.from,
            sourceid: e7d.data
        })
    }

    function cij9a(d7e) {
        var dV9M = d7e.ext || {};
        j7c = pH2x.hH0x(d7e.key);
        ZA3x(j7c, dV9M);
        if (dV9M.type == 13 && dV9M.action == "play" && j7c && j7c.length > 0) {
            bNM4Q(dV9M.node);
            v7o.bk8c("/api/playlist/update/playcount", {
                query: {
                    id: dV9M.id
                }
            })
        }
    }

    function cii9Z(d7e) {
        var j7c = [pH2x.eO9F(d7e.id)],
            bl8d = j7c[0],
            rM3x = l7e.qc2x(bl8d),
            tK3x = bl8d.privilege || {};
        if (rM3x == 10) {
            l7e.wc4g(tK3x.fee || bl8d.fee, bl8d.id, "song", null, tK3x)
        } else if (rM3x == 100) {
            l7e.iE0x(null, null, null, true, bl8d)
        } else if (rM3x == 11) {
            l7e.bTo6i(bl8d.id, 18)
        } else {
            ZA3x(j7c, d7e.ext)
        }
    }

    function cig9X(d7e) {
        var j7c = bNK4O(Hj7c.hH0x(d7e.key));
        ZA3x(j7c, d7e.ext)
    }

    function cie9V(d7e) {
        var j7c = bNK4O([Hj7c.eO9F(d7e.id)]);
        ZA3x(j7c, d7e.ext)
    }

    function dQ9H() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bNM4Q(g7b) {
        var u7n = a6g.t7m(g7b, "resType"),
            D7w = a6g.t7m(g7b, "resId"),
            L7E = u7n + "-" + D7w;
        if (bNO4S[L7E]) return;
        var bNI4M = a6g.B7u("play-count"),
            bkX6R = a6g.E7x(g7b.parentNode, "nb"),
            TY2x = null;
        if (bNI4M) {
            TY2x = bNI4M
        } else {
            TY2x = !!bkX6R && !!bkX6R[0] ? bkX6R[0] : null
        }
        if (TY2x) {
            var cA8s = TY2x.innerHTML;
            if (/^\d+$/.test(cA8s)) {
                TY2x.innerText = +cA8s + 1
            }
            bNO4S[L7E] = true
        }
    }
    l7e.chQ9H = function (g7b) {
        h7a.s7l(g7b || document.body, "click", xt4x.f7c(this))
    };
    l7e.chP9G = function (U7N, u7n, D7w) {
        bNN4R({
            action: U7N,
            type: u7n,
            id: D7w
        })
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    q7j.fp9g({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function (m7f, e7d) {
                this.chO9F(m7f, e7d)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function (m7f, e7d) {
                this.z7s("onshareall", e7d.result)
            },
            onerror: function (m7f, e7d) {
                this.z7s("onshareall", e7d.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function (m7f, e7d) {
                e7d.options.picUrl = m7f.picUrl;
                this.bNF4J(e7d.options, e7d.result)
            },
            onerror: function (m7f, e7d) {
                this.z7s("onshareall", e7d.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function (Q7J, e7d) {
                this.qb2x("vid_info-" + e7d.data.nosKey, Q7J);
                return Q7J
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function (e7d) {},
            format: function (m7f, e7d) {
                e7d.data = e7d.data2;
                this.cm8e("share-all", e7d)
            },
            onerror: "onshareerror"
        }
    });
    q7j.blh6b = NEJ.C();
    b7g = q7j.blh6b.N7G(q7j.hE0x);
    b7g.chE9v = function () {
        var vv4z = function (Q7J, e7d) {
            e7d.times++;
            if (e7d.times > 10) {
                this.z7s("onvinfoerror", e7d.key, Q7J)
            } else {
                setTimeout(ez9q.f7c(this, e7d), e7d.times * 1e3)
            }
        };
        var yw5B = function (Q7J, e7d) {
            this.z7s("onvinfo", e7d.key, Q7J)
        };
        var ez9q = function (e7d) {
            var Y7R = e7d.url;
            v7o.bk8c(Y7R + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: yw5B.ex9o(this, e7d),
                onerror: vv4z.ex9o(this, e7d)
            })
        };
        return function (e7d) {
            e7d.times = 0;
            ez9q.call(this, e7d)
        }
    }();
    b7g.cJl5q = function () {
        var HU7N;
        var vv4z = function (Q7J, e7d) {
            if (Q7J.code > 0) {
                clearInterval(this.HV7O);
                this.z7s("onviderror", e7d.data.nosKey)
            }
        };
        var yw5B = function (L7E, Q7J) {
            if (Q7J.vid && Q7J.covers) {
                clearInterval(this.HV7O);
                this.z7s("onvid", L7E, Q7J)
            }
        };
        var ez9q = function (e7d) {
            if (+(new Date) - HU7N > 60 * 60 * 1e3) {
                clearInterval(this.HV7O);
                this.z7s("onviderror", e7d.data.nosKey);
                return
            }
            e7d.onload = yw5B.f7c(this, e7d.data.nosKey);
            e7d.onerror = vv4z.f7c(this);
            this.cm8e("vid-get", e7d)
        };
        return function (e7d) {
            if (!e7d || !e7d.data) return;
            HU7N = +(new Date);
            this.HV7O = clearInterval(this.HV7O);
            this.HV7O = setInterval(ez9q.f7c(this, e7d), 1e4);
            ez9q.apply(this, arguments)
        }
    }();
    b7g.chz9q = function () {
        this.HV7O = clearInterval(this.HV7O)
    };
    b7g.chO9F = function (m7f, oa2x) {
        if (m7f.event && oa2x.snsTypes) {
            if (oa2x.pics) {
                var bNA4E = [];
                for (var i = 0, len = oa2x.pics.length; i < len; i++) {
                    bNA4E[i] = oa2x.pics[i].originId
                }
                this.cm8e("share_img_compound", {
                    data: {
                        picIds: bNA4E.join(",")
                    },
                    options: oa2x,
                    result: m7f
                })
            } else {
                oa2x.picUrl = oa2x.picUrl;
                this.bNF4J(oa2x, m7f)
            }
        } else {
            this.z7s("onshareall", m7f)
        }
        var vO4S = q7j.hP0x.A7t();
        vO4S.eR9I(oa2x.isPub ? "pubevent" : "shareevent", {
            id: m7f.id
        })
    };
    b7g.bNF4J = function (oa2x, m7f) {
        var cu8m = {},
            d7e = m7f.event || {};
        cu8m.eventid = d7e.id;
        cu8m.eventtype = d7e.type;
        oa2x.picUrl && (cu8m.picUrl = oa2x.picUrl);
        cu8m.snsTypes = oa2x.snsTypes;
        cu8m.msg = oa2x.data.msg || "";
        cu8m.type = oa2x.data.type;
        oa2x.data.id && (cu8m.id = oa2x.data.id);
        if (cu8m.eventtype == 41) {
            var Q7J = l7e.Gf7Y(d7e.json);
            cu8m.eventtype = 39;
            if (cu8m.msg) {
                cu8m.msg += "  "
            }
            cu8m.msg += "分享" + Q7J.video.creator.nickname + "的视频《" + Q7J.video.title + "》";
            delete cu8m.id
        }
        this.cm8e("share-sns", {
            data: cu8m,
            result: m7f
        })
    };
    b7g.chw9n = function (e7d) {
        var i7b = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            checkToken: "",
            uuid: "publish-" + +(new Date) + k7d.oG2x(5)
        };
        i7b = NEJ.EX(i7b, e7d);
        if (i7b.id < 0) {
            delete i7b.id;
            i7b.type = "noresource"
        }
        if (!i7b.threadId) {
            delete i7b.threadId
        }
        if (!i7b.actId) {
            delete i7b.actId
        }
        if (!i7b.pics) {
            delete i7b.pics
        } else {
            i7b.pics = JSON.stringify(i7b.pics)
        }
        this.cm8e("share-all", {
            data: i7b,
            snsTypes: e7d.snsTypes,
            picUrl: e7d.picUrl,
            pics: e7d.pics,
            isPub: e7d.isPub
        })
    };
    b7g.chv9m = function (e7d) {
        this.cm8e("share-private", e7d)
    };
    b7g.chu9l = function (e7d) {
        this.cm8e("video-submit", e7d)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        n7g = c7f("nm.l"),
        b7g, K7D;
    var chs9j = {
        40: !0
    };
    q7j.fp9g({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function (e7d) {
                e7d.data.getcounts = true;
                e7d.data.pagesize = e7d.data.limit;
                if (e7d.data.offset == 0) {
                    e7d.data.lasttime = -1
                }
                delete e7d.data.offset
            },
            format: function (Q7J, e7d) {
                Q7J.event = l7e.bbE4I(Q7J.event, function (p7i, r7k) {
                    return !chs9j[p7i.type]
                });
                this.chp9g(Q7J.event);
                e7d.data.lasttime = Q7J.lasttime;
                if (Q7J.event.length) {
                    Q7J.event.length = e7d.limit
                }
                return {
                    list: Q7J.event,
                    total: Q7J.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function (Q7J, e7d) {
                return {
                    list: Q7J.events,
                    total: Q7J.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function (e7d) {
                e7d.data.pagesize = 20
            },
            format: function (Q7J, e7d) {
                return Q7J.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function (e7d) {
                if (e7d.data.offset == 0) {
                    e7d.data.time = -1
                }
                delete e7d.data.offset;
                e7d.data.getcounts = true
            },
            format: function (Q7J, e7d) {
                e7d.data.time = Q7J.lasttime;
                var j7c = Q7J.events;
                if (Q7J.more && j7c.length < e7d.data.limit) {
                    j7c = this.Jc8U(j7c, e7d.data.limit)
                }
                return {
                    list: j7c,
                    total: Q7J.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function (m7f, e7d) {
                m7f.conf = e7d.conf;
                return m7f
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function (e7d, bi8a) {
                if (e7d.like) {
                    if (e7d.comment) {
                        bi8a.url = "/api/v1/comment/like"
                    } else {
                        bi8a.url = "/api/resource/like"
                    }
                    bi8a.onload = "oneventlike";
                    bi8a.onerror = "oneventlikeerr"
                } else {
                    if (e7d.comment) {
                        bi8a.url = "/api/v1/comment/unlike"
                    } else {
                        bi8a.url = "/api/resource/unlike"
                    }
                    bi8a.onload = "oneventunlike";
                    bi8a.onerror = "oneventunlikeerr"
                }
            },
            format: function (m7f, e7d) {
                m7f.eid = e7d.eid;
                m7f.origin = e7d.origin;
                m7f.ext = e7d.ext;
                return m7f
            },
            onmessage: function (bZ8R, m7f) {
                if (bZ8R == 250) {
                    n7g.Z7S.J7C({
                        tip: m7f.message || m7f.msg || "点赞异常",
                        type: 2
                    });
                    return
                }
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function (m7f, e7d) {
                m7f.id = e7d.data.id;
                return m7f
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function (e7d, bi8a) {
                if (e7d.data.type == "nointer") {
                    bi8a.url = "/api/event/rcmd/reject"
                } else if (e7d.data.transcoding) {
                    bi8a.url = "/api/event/video/transcoding/delete"
                } else {
                    bi8a.url = "/api/event/delete"
                }
            },
            format: function (m7f, e7d) {
                m7f.id = e7d.data.id;
                return m7f
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function (m7f, e7d) {
                m7f.id = e7d.data.id;
                return m7f
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function (e7d) {
                e7d.data.lasttime = e7d.data.lasttime || -1;
                e7d.data.pagesize = e7d.data.limit;
                e7d.data.getcounts = true;
                delete e7d.data.offset
            },
            format: function (Q7J, e7d) {
                e7d.data.lasttime = Q7J.lasttime;
                var j7c = Q7J.events;
                if (Q7J.more) j7c = this.Jc8U(j7c, e7d.data.pagesize);
                return {
                    list: j7c,
                    total: Q7J.size
                }
            },
            onerror: "onlisterror"
        }
    });
    q7j.yz5E = NEJ.C();
    b7g = q7j.yz5E.N7G(q7j.hE0x);
    b7g.cv8n = function () {
        this.cD8v()
    };
    b7g.blG6A = function (u7n, cV8N) {
        return u7n + "-" + cV8N
    };
    b7g.cJm5r = function (e7d) {
        this.cm8e("ievent-get", e7d)
    };
    b7g.cJp5u = function (e7d) {
        this.cm8e("ievent-new-get", e7d)
    };
    b7g.cJq5v = function (e7d) {
        this.cm8e("ievent-user-get", e7d)
    };
    b7g.cJr5w = function (u7n, cV8N) {
        return this.sZ3x(this.blG6A(u7n, cV8N))
    };
    b7g.cJs5x = function (Jk8c, e7d) {
        if (!Jk8c || !Jk8c.length) return;
        e7d = e7d || {};
        var bz8r = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, FF7y = [], bNw4A = [], i7b; i < Jk8c.length; ++i) {
            i7b = Jk8c[i];
            i7b = this.sZ3x(this.blG6A(i7b.type, i7b.id));
            if (!i7b) {
                FF7y.push(Jk8c[i].id);
                bNw4A.push(bz8r[Jk8c[i].type] || 0)
            }
        }
        if (!FF7y.length) {
            this.z7s("oneventresload", e7d.conf);
            return
        }
        e7d.data = {
            ids: JSON.stringify(FF7y),
            types: JSON.stringify(bNw4A)
        };
        e7d.onload = this.chg9X.f7c(this);
        this.cm8e("ievent-res-get", e7d)
    };
    b7g.chg9X = function (m7f) {
        if (m7f.code != 200) {
            this.z7s("oneventreserror", m7f.code);
            return
        }
        var bz8r = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, j7c = m7f.results; i < j7c.length; ++i) {
            this.qb2x(this.blG6A(bz8r[j7c[i].type], j7c[i].id), j7c[i])
        }
        this.z7s("oneventresload", m7f.conf)
    };
    b7g.bNv4z = function (i7b) {
        var L7E = "event-list";
        this.boI8A(L7E, i7b);
        this.z7s("onitemadd", {
            key: L7E,
            action: "add",
            data: i7b,
            flag: -1
        })
    };
    b7g.pj2x = function (e7d) {
        this.cm8e("ievent-like", e7d)
    };
    b7g.mE1x = function (e7d) {
        this.cm8e("ievent-delete", e7d)
    };
    b7g.Jc8U = function (j7c, gk0x) {
        for (var i = j7c.length; i < gk0x; i++) j7c.push(null);
        return j7c
    };
    b7g.chp9g = function (j7c) {
        var m7f = [];
        if (!j7c || !j7c.length) return;
        k7d.bd7W(j7c, function (d7e) {
            d7e.biData = this.bNt4x(d7e)
        }, this)
    };
    b7g.bNt4x = function () {
        var bfq5v = {
                32: "comment",
                33: "activity",
                34: "recomment_artist"
            },
            cgZ9Q = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d7e) {
            var Q7J = {
                id: d7e.id,
                sourceid: d7e.user.userId,
                alg: d7e.rcmdInfo ? d7e.rcmdInfo.alg : null,
                contentType: bfq5v[d7e.type] || (k7d.dm9d(cgZ9Q, d7e.type) != -1 ? "user_event" : "other")
            };
            return Q7J
        }
    }();
    b7g.Ip8h = function (cgY9P, d7e) {
        var Q7J = this.bNt4x(d7e);
        Q7J.actionType = cgY9P;
        if (window.log) log("eventclick", Q7J)
    };
    b7g.cJt5y = function (e7d) {
        this.cm8e("event_latest-list", e7d)
    }
})();
(function (factory) {
    window.SparkMD5 = factory()
})(function (undefined) {
    "use strict";
    var add32 = function (a, b) {
            return a + b & 4294967295
        },
        hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }

    function md5blk(s) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }

    function md5blk_array(a) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function rhex(n) {
        var s = "",
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function (x, y) {
            var lsw = (x & 65535) + (y & 65535),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }

    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function (contents) {
        this.si3x += contents;
        this.bs8k += contents.length;
        var length = this.si3x.length,
            i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR9I, md5blk(this.si3x.substring(i - 64, i)))
        }
        this.si3x = this.si3x.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this.si3x,
            length = buff.length,
            i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.pc2x(tail, length);
        ret = hex(this.dR9I);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function () {
        this.si3x = "";
        this.bs8k = 0;
        this.dR9I = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function () {
        return {
            buff: this.si3x,
            length: this.bs8k,
            hash: this.dR9I
        }
    };
    SparkMD5.prototype.setState = function (state) {
        this.si3x = state.buff;
        this.bs8k = state.length;
        this.dR9I = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function () {
        delete this.dR9I;
        delete this.si3x;
        delete this.bs8k
    };
    SparkMD5.prototype.pc2x = function (tail, length) {
        var i = length,
            tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dR9I, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bs8k * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dR9I, tail)
    };
    SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function () {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this.si3x.buffer, arr, true),
            length = buff.length,
            i;
        this.bs8k += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR9I, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.si3x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this.si3x,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.pc2x(tail, length);
        ret = hex(this.dR9I);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this.si3x = new Uint8Array(0);
        this.bs8k = 0;
        this.dR9I = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.pc2x = SparkMD5.prototype.pc2x;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        eq9h = c7f("nej.g"),
        k7d = c7f("nej.u"),
        fY9P = c7f("nej.n"),
        I7B = c7f("nej.ut"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        ix0x = c7f("nm.x.nos"),
        x7q = c7f("nm.w");
    var cgW9N = 1024 * 256,
        cgV9M = 1024 * 1024 * 2,
        rA3x = {
            TOKEN_ERROR: -100,
            DNS_ERROR: -101
        },
        bNr4v = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : br8j,
        rz3x = {
            MD5_DONE: .2,
            TOKEN_GET: .22,
            DNS_GET: .24,
            UPLOADED: 1
        },
        jJ0x = {
            AUDIO: "audio",
            IMAGE: "image",
            TXT: "txt",
            RAR: "rar",
            OTHER: "other",
            VIDEO: "video"
        };
    var oe2x = {};
    var vO4S = q7j.hP0x.A7t();
    ix0x.cMg6a = function () {
        return jJ0x
    };
    var cgR9I = function () {
        return k7d.oG2x(6) + +(new Date)
    };
    var JT8L = function (iO0x, e7d) {
        if (!oe2x[e7d.taskId]) {
            return
        }(e7d.onuploading || br8j).call(this, iO0x)
    };
    var bmn7g = function (R7K) {
        var cgQ9H = R7K.md5,
            cX8P = R7K.file,
            cgP9G = cgQ9H + cX8P.size;
        return "nos_file_hash_" + cgP9G
    };
    var cgO9F = function (R7K) {
        var L7E = bmn7g(R7K),
            i7b = v7o.bUF6z(L7E, "{}");
        try {
            i7b = JSON.parse(i7b)
        } catch (e) {
            i7b = {}
        }
        return i7b
    };
    var cgN9E = function (R7K, e7d) {
        if (!R7K.md5) {
            return
        }
        var L7E = bmn7g(R7K),
            i7b = v7o.bUF6z(L7E, "{}");
        try {
            i7b = JSON.parse(i7b)
        } catch (e) {
            i7b = {}
        }
        NEJ.X(i7b, e7d);
        v7o.uM4Q(L7E, JSON.stringify(i7b))
    };
    var cgM9D = function (R7K) {
        var L7E = bmn7g(R7K);
        v7o.LI8A(L7E)
    };
    var cgL9C = function (R7K, eK9B) {
        var Y7R = R7K.urls[Math.min(R7K.urlIndex, R7K.urls.length - 1)],
            cX8P = R7K.file,
            lH1x = R7K.bucket,
            mV1x = R7K.objectKey,
            cs8k = R7K.token,
            bK8C = R7K.context,
            pt2x = {},
            UJ2x = bNr4v.call(cX8P, R7K.beg, R7K.end),
            bv8n = {
                offset: R7K.beg,
                complete: R7K.lastChunk || false,
                version: "1.0"
            };
        if (bK8C) {
            bv8n.context = bK8C
        }
        pt2x["x-nos-token"] = cs8k;
        pt2x[eq9h.yH5M] = cX8P.type;
        R7K.reqId = v7o.bk8c(Y7R + "/" + lH1x + "/" + mV1x, {
            type: "json",
            method: "POST",
            headers: pt2x,
            query: bv8n,
            data: UJ2x,
            onload: eK9B.onload,
            onerror: eK9B.onerror
        })
    };
    var cgK9B = function (m7f, R7K, e7d) {
        m7f = {
            code: 200,
            fileName: e7d.file.name,
            size: e7d.file.size,
            type: e7d.file.type,
            bucket: R7K.bucket,
            docId: R7K.docId,
            objectKey: R7K.objectKey,
            url: "//nos.netease.com/" + R7K.bucket + "/" + R7K.objectKey,
            taskId: e7d.taskId
        };
        cgM9D(R7K);
        if (!oe2x[e7d.taskId]) {
            return
        }
        delete oe2x[e7d.taskId];
        vO4S.eR9I("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(m7f)
        });
        (e7d.onsuccess || br8j).call(this, m7f)
    };
    var cgJ9A = function (m7f, e7d) {
        (e7d.onerror || br8j).call(this, m7f)
    };
    var cgI9z = function (m7f, R7K, e7d) {
        R7K.context = m7f.context;
        R7K.beg = m7f.offset;
        var iO0x = R7K.beg / R7K.file.size;
        cgN9E(R7K, {
            bucket: R7K.bucket,
            objectKey: R7K.objectKey,
            token: R7K.token,
            context: R7K.context,
            beg: R7K.beg,
            updateTime: +(new Date)
        });
        iO0x = rz3x.DNS_GET + (rz3x.UPLOADED - rz3x.DNS_GET) * iO0x;
        JT8L(iO0x, e7d);
        if (R7K.lastChunk) {
            cgK9B(m7f, R7K, e7d)
        } else {
            YC3x(R7K, e7d)
        }
    };
    var cgH9y = function (m7f, R7K, e7d) {
        vO4S.eR9I("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: m7f.data,
            body: m7f.extData,
            ext: JSON.stringify(R7K),
            timging: +(new Date) - R7K.chuckUploadStartTime
        });
        if (R7K.urlIndex < Math.max(R7K.urls.length - 1, 5)) {
            R7K.urlIndex++;
            YC3x(R7K, e7d)
        } else {
            cgJ9A(m7f, e7d)
        }
    };
    var YC3x = function (R7K, e7d) {
        if (!R7K || R7K.step == -1) {
            return
        }
        R7K.end = R7K.beg + cgW9N;
        if (R7K.end >= R7K.file.size) {
            R7K.end = R7K.file.size;
            R7K.lastChunk = true
        }
        R7K.chuckUploadStartTime = +(new Date);
        cgL9C(R7K, {
            onload: cgI9z.ex9o(this, R7K, e7d),
            onerror: cgH9y.ex9o(this, R7K, e7d)
        })
    };
    var cgE9v = function (m7f, R7K, e7d) {
        R7K.beg = m7f.offset;
        var iO0x = R7K.beg / R7K.file.size;
        iO0x = rz3x.DNS_GET + (rz3x.UPLOADED - rz3x.DNS_GET) * iO0x;
        JT8L(iO0x, e7d);
        YC3x(R7K, e7d)
    };
    var cgD9u = function (m7f, R7K, e7d) {
        R7K.beg = 0;
        delete R7K.context;
        bmY7R(R7K, e7d)
    };
    var bNn4r = function (Ve2x, R7K, e7d) {
        R7K.lastChunk = false;
        R7K.urls = Ve2x;
        R7K.urlIndex = 0;
        JT8L(rz3x.DNS_GET, e7d);
        if (R7K.fromExist) {
            delete R7K.fromExist;
            var Y7R = R7K.urls[Math.min(R7K.urlIndex, R7K.urls.length - 1)],
                lH1x = R7K.bucket,
                mV1x = R7K.objectKey,
                cs8k = R7K.token,
                bK8C = R7K.context,
                pt2x = {},
                bv8n = {
                    context: bK8C,
                    version: "1.0"
                };
            pt2x["x-nos-token"] = cs8k;
            R7K.reqId = v7o.bk8c(Y7R + "/" + lH1x + "/" + mV1x + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: pt2x,
                query: bv8n,
                onload: cgE9v.ex9o(this, R7K, e7d),
                onerror: cgD9u.ex9o(this, R7K, e7d)
            })
        } else {
            R7K.beg = 0;
            YC3x(R7K, e7d)
        }
    };
    var cgB9s = function (m7f, R7K, e7d) {
        m7f.code = rA3x.DNS_ERROR;
        (e7d.onerror || br8j).call(this, m7f)
    };
    var bNm4q = function (i7b, e7d) {
        var m7f = i7b.result || {},
            lH1x = m7f.bucket,
            mV1x = m7f.objectKey,
            cs8k = m7f.token,
            R7K = oe2x[e7d.taskId];
        if (!lH1x || !mV1x || !cs8k || !R7K) {
            m7f.code = rA3x.TOKEN_ERROR;
            (e7d.onerror || br8j).call(this, m7f);
            return
        }
        R7K.bucket = lH1x;
        R7K.objectKey = mV1x;
        R7K.docId = m7f.docId;
        R7K.token = cs8k;
        JT8L(rz3x.TOKEN_GET, e7d);
        if (location.protocol == "https:") {
            bNn4r(["//nosup-hz1.127.net"], R7K, e7d)
        } else {
            R7K.reqId = ix0x.cgz9q({
                bucket: lH1x,
                onload: bNn4r.ex9o(this, R7K, e7d),
                onerror: cgB9s.ex9o(this, R7K, e7d)
            })
        }
        R7K.step = 1
    };
    var cgy9p = function (m7f, e7d) {
        m7f.code = rA3x.TOKEN_ERROR;
        (e7d.onerror || br8j).call(this, m7f)
    };
    var bmY7R = function (R7K, e7d) {
        var cX8P = e7d.file,
            eS9J = cX8P.name || "",
            dV9M = eS9J.split(".").pop();
        ix0x.Yu3x(NEJ.X({
            filename: eS9J,
            ext: dV9M,
            onload: bNm4q.ex9o(this, e7d),
            onerror: cgy9p.ex9o(this, e7d)
        }, e7d, function (p7i) {
            return k7d.gO0x(p7i) || k7d.lY1x(p7i)
        }))
    };
    var cgx9o = function (R7K, e7d) {
        if (!R7K || R7K.step == -1) {
            return
        }
        R7K.md5 = R7K.spark.end();
        var KA8s = cgO9F(R7K) || {},
            lH1x = KA8s.bucket,
            mV1x = KA8s.objectKey,
            cs8k = KA8s.token;
        if (!lH1x || !mV1x || !cs8k) {
            bmY7R(R7K, e7d)
        } else {
            R7K.context = KA8s.context;
            R7K.beg = KA8s.beg;
            R7K.fromExist = true;
            bNm4q({
                result: KA8s
            }, e7d)
        }
    };
    var cgw9n = function (EC6w, R7K, e7d) {
        if (!R7K || R7K.step == -1) {
            return
        }
        R7K.beg = R7K.end;
        var iO0x = R7K.beg / R7K.file.size;
        iO0x = 0 + rz3x.MD5_DONE * iO0x;
        JT8L(iO0x, e7d);
        R7K.spark.append(EC6w.result);
        if (R7K.lastChunk) {
            cgx9o(R7K, e7d)
        } else {
            bNl4p(R7K, e7d)
        }
    };
    var cgu9l = function (m7f, R7K, e7d) {
        R7K.md5 = "";
        bmY7R(R7K, e7d)
    };
    var bNl4p = function (R7K, e7d) {
        if (!R7K || R7K.step == -1) {
            return
        }
        R7K.end = R7K.beg + cgV9M;
        if (R7K.end >= R7K.file.size) {
            R7K.end = R7K.file.size;
            R7K.lastChunk = true
        }
        var EC6w = new FileReader;
        EC6w.onload = cgw9n.f7c(this, EC6w, R7K, e7d);
        EC6w.onerror = cgu9l.f7c(this, EC6w, R7K, e7d);
        EC6w.readAsArrayBuffer(bNr4v.call(R7K.file, R7K.beg, R7K.end))
    };
    ix0x.ia0x = function (e7d) {
        var cX8P = e7d.file,
            eS9J = cX8P.name || "",
            dV9M = eS9J.split(".").pop(),
            EH6B = cgR9I();
        e7d.taskId = EH6B;
        oe2x[EH6B] = {
            step: 0
        };
        JT8L(0, e7d);
        var R7K = oe2x[EH6B];
        R7K.id = EH6B;
        R7K.file = cX8P;
        R7K.beg = 0;
        R7K.lastChunk = false;
        R7K.spark = new SparkMD5.ArrayBuffer;
        var cgt9k = e7d.onerror || br8j;
        e7d.onerror = function () {
            if (!oe2x[EH6B]) {
                return
            }
            delete oe2x[EH6B];
            cgt9k.apply(this, arguments)
        };
        vO4S.eR9I("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bNl4p(R7K, e7d);
        return EH6B
    };
    ix0x.kF1x = function (D7w) {
        var R7K = oe2x[D7w];
        if (R7K) {
            if (R7K.step == 0) {
                delete oe2x[D7w]
            } else {
                R7K.step = -1;
                if (R7K.reqId) {
                    v7o.kF1x(R7K.reqId)
                }
                delete oe2x[D7w]
            }
        }
    };
    ix0x.Yu3x = function () {
        var Ab5g = function (m7f, e7d) {
            (e7d.onload || br8j).call(this, m7f)
        };
        var Cm6g = function (m7f, e7d) {
            (e7d.onerror || br8j).call(this, m7f)
        };
        var bNk4o = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function (e7d) {
            var Yt3x = e7d.returnBody || bNk4o;
            if (k7d.lY1x(Yt3x)) {
                try {
                    JSON.stringify(Yt3x)
                } catch (e) {
                    Yt3x = bNk4o
                }
            }
            return v7o.bk8c("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e7d.filename || "",
                    ext: e7d.ext || "",
                    type: e7d.type || jJ0x.OTHER,
                    bucket: e7d.bucket || "",
                    local: e7d.local || false,
                    nos_product: e7d.nosProduct || 0,
                    return_body: Yt3x
                },
                onload: Ab5g.ex9o(this, e7d),
                onerror: Cm6g.ex9o(this, e7d)
            })
        }
    }();
    ix0x.cgz9q = function () {
        var cgr9i = "//wanproxy.127.net/lbs";
        var Ab5g = function (m7f, e7d) {
            if (m7f.lbs) {}
            var Ve2x = m7f.upload;
            if (!Ve2x || !Ve2x.length) {
                Cm6g(m7f, e7d)
            }(e7d.onload || br8j).call(this, Ve2x)
        };
        var Cm6g = function (m7f, e7d) {
            (e7d.onerror || br8j).call(this, m7f)
        };
        return function (e7d) {
            var lH1x = e7d.bucket;
            return v7o.bk8c(cgr9i, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: lH1x
                },
                onload: Ab5g.ex9o(this, e7d),
                onerror: Cm6g.ex9o(this, e7d)
            })
        }
    }();
    ix0x.Yr3x = function () {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        cd8V = c7f("nej.ut"),
        bC8u = c7f("nej.ui"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        ix0x = c7f("nm.x.nos"),
        F7y = c7f("nm.m"),
        n7g = c7f("nm.l"),
        x7q = c7f("nm.w"),
        b7g, K7D;
    var gs0x = a6g.jz0x('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    x7q.KM8E = NEJ.C();
    b7g = x7q.KM8E.N7G(bC8u.eo9f);
    b7g.cf8X = function () {
        this.ce8W = gs0x
    };
    b7g.bV8N = function () {
        this.ch8Z();
        this.bI8A = this.o7h;
        this.hN0x = a6g.E7x(this.o7h, "j-file")[0];
        h7a.s7l(this.hN0x, "change", this.qo2x.f7c(this))
    };
    b7g.bm8e = function (e7d) {
        e7d = e7d || {};
        this.bn8f(e7d);
        this.hN0x.id = e7d.inputId || "";
        this.hN0x.accept = e7d.accept || "*";
        this.xz4D = e7d
    };
    b7g.Yn3x = function () {
        return a6g.lQ1x(this.hN0x)
    };
    b7g.qo2x = function (d7e) {
        if (this.hN0x.value == "") return;
        var kY1x = this.hN0x.value.split("\\"),
            eS9J = kY1x.length > 0 ? kY1x[kY1x.length - 1] : kY1x[0],
            oQ2x = (this.hN0x.files || [{}])[0];
        var cn8f = {
            files: this.hN0x.files,
            filename: eS9J,
            size: oQ2x.size,
            cancelUpload: false
        };
        this.z7s("onchange", cn8f);
        if (cn8f.cancelUpload) {
            this.hN0x.value = "";
            return
        }
        if (cn8f.stopped) {
            return
        }
        this.Vp2x()
    };
    b7g.Vp2x = function () {
        if (this.hN0x.value == "") return;
        var kY1x = this.hN0x.value.split("\\"),
            eS9J = kY1x.length > 0 ? kY1x[kY1x.length - 1] : kY1x[0],
            dV9M = (eS9J.split(".") || []).pop(),
            oQ2x = (this.hN0x.files || [{}])[0],
            Fc7V = (oQ2x.type || "").split("/").shift();
        if (oQ2x.size > 100 * 1024 * 1024) {
            return this.mu1x("onerror", {
                code: -200
            })
        }
        this.z7s("onuploading", 0);
        this.bNj4n = ix0x.Yu3x(NEJ.X({
            onload: this.Vs2x.ex9o(this, eS9J),
            onerror: this.mu1x.f7c(this)
        }, this.xz4D, function (p7i) {
            return k7d.gO0x(p7i) || k7d.lY1x(p7i)
        }))
    };
    b7g.Vs2x = function (bN8F, eS9J) {
        var m7f = bN8F.result || {},
            lH1x = m7f.bucket,
            mV1x = m7f.objectKey,
            cs8k = m7f.token;
        if (!lH1x || !mV1x || !cs8k) {
            bN8F.code = -100;
            this.mu1x.call(this, bN8F);
            return
        }
        var oQ2x = (this.hN0x.files || [{}])[0];
        var hQ0x = a6g.df9W(this.bI8A);
        hQ0x[0].value = mV1x;
        hQ0x[1].value = cs8k;
        hQ0x[2].value = "json";
        if (oQ2x.type && oQ2x.type.indexOf("audio") == 0) {
            hQ0x[3].value = "audio/mpeg"
        } else {
            hQ0x[3].value = oQ2x.type || ""
        }
        this.bI8A.action = "//nos.netease.com/" + lH1x;
        this.Ff7Y = m7f;
        this.ra3x = eS9J;
        this.z7s("onuploading", .2);
        this.ia0x()
    };
    b7g.ia0x = function () {
        this.bNj4n = v7o.ia0x(this.bI8A, {
            type: "json",
            onload: this.wG4K.f7c(this),
            onerror: this.mu1x.f7c(this),
            onuploading: this.Yi3x.f7c(this)
        })
    };
    b7g.kF1x = function () {
        v7o.kF1x(this.bNj4n);
        this.bI8A.reset()
    };
    b7g.wG4K = function (bN8F) {
        var cs8k = this.Ff7Y,
            eS9J = this.ra3x,
            oQ2x = (this.hN0x.files || [{}])[0],
            kD1x = {
                code: 200,
                fileName: eS9J,
                size: oQ2x.size,
                bucket: cs8k.bucket,
                docId: cs8k.docId,
                objectKey: cs8k.objectKey,
                url: "//nos.netease.com/" + cs8k.bucket + "/" + cs8k.objectKey
            };
        if (!bN8F) {
            bN8F = kD1x
        }
        if (!bN8F.code || bN8F.code == 200) {
            this.z7s("onsuccess", NEJ.X(kD1x, bN8F))
        } else {
            this.z7s("onerror", bN8F)
        }
        this.bI8A.reset()
    };
    b7g.mu1x = function (bN8F) {
        this.z7s("onerror", bN8F);
        this.bI8A.reset()
    };
    b7g.Yi3x = function (iO0x) {
        this.z7s("onuploading", .2 + iO0x.loaded / iO0x.total * .8)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        cd8V = c7f("nej.ut"),
        bC8u = c7f("nej.ui"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        ix0x = c7f("nm.x.nos"),
        F7y = c7f("nm.m"),
        n7g = c7f("nm.l"),
        x7q = c7f("nm.w"),
        b7g, K7D;
    x7q.Vx2x = NEJ.C();
    b7g = x7q.Vx2x.N7G(cd8V.cH8z);
    b7g.bm8e = function (e7d) {
        e7d = e7d || {};
        this.bn8f(e7d);
        this.Yc3x = x7q.KM8E.A7t(NEJ.X({
            parent: e7d.parent,
            onchange: this.qo2x.f7c(this),
            onuploading: this.z7s.f7c(this, "onuploading"),
            onsuccess: this.z7s.f7c(this, "onsuccess"),
            onerror: this.z7s.f7c(this, "onerror")
        }, e7d, function (p7i) {
            return k7d.gO0x(p7i) || k7d.lY1x(p7i)
        }));
        if (e7d.multiple && ix0x.Yr3x()) {
            a6g.hb0x(this.Yc3x.Yn3x(), "multiple", true)
        }
        this.xz4D = e7d
    };
    b7g.qo2x = function (e7d) {
        var eS9J = e7d.filename,
            dV9M = (eS9J.split(".") || []).pop();
        this.bNi4m = (e7d.files || [{}])[0];
        this.z7s("onchange", e7d);
        if (ix0x.Yr3x() && !e7d.stopped && !e7d.cancelUpload) {
            this.Vp2x(true);
            e7d.stopped = true
        }
    };
    b7g.Yn3x = function () {
        return this.Yc3x.Yn3x()
    };
    b7g.cgo9f = function () {
        return this.bNi4m
    };
    b7g.Vp2x = function (fg9X, cX8P) {
        cX8P = cX8P || this.bNi4m;
        if (ix0x.Yr3x()) {
            this.bNh4l = ix0x.ia0x(NEJ.X({
                file: cX8P,
                local: this.xz4D.bucket && this.xz4D.bucket.length,
                onuploading: this.z7s.f7c(this, "onuploading"),
                onsuccess: this.z7s.f7c(this, "onsuccess"),
                onerror: this.z7s.f7c(this, "onerror")
            }, this.xz4D, function (p7i) {
                return k7d.gO0x(p7i) || k7d.lY1x(p7i)
            }));
            return this.bNh4l
        } else if (!fg9X) {
            this.Yc3x.Vp2x()
        }
    };
    b7g.kF1x = function (D7w) {
        D7w = D7w || this.bNh4l;
        if (D7w) {
            ix0x.kF1x(D7w)
        }
        this.Yc3x.kF1x()
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        eq9h = c7f("nej.g"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        fY9P = c7f("nej.n"),
        I7B = c7f("nej.ut"),
        bc7V = c7f("nej.ui"),
        x7q = c7f("nm.w"),
        n7g = c7f("nm.l"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        M7F = c7f("nm.x.f"),
        ix0x = c7f("nm.x.nos"),
        b7g, K7D, boq7j = {
            0: "",
            "-1": "不能添加重复图片",
            "-10": "最多只能添加9张",
            "-3": "请选择不超过5M的图片"
        },
        bor7k = 5 * 1024 * 1024,
        cJv5A = 80,
        XZ3x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    x7q.bNf4j = NEJ.C();
    b7g = x7q.bNf4j.N7G(I7B.vC4G);
    b7g.bmg7Z = function () {
        return {
            x: this.DA6u.clientWidth - this.o7h.offsetWidth,
            y: this.DA6u.clientHeight - this.o7h.offsetHeight
        }
    };
    x7q.bow7p = NEJ.C();
    b7g = x7q.bow7p.N7G(bc7V.eo9f);
    b7g.cf8X = function () {
        this.ce8W = "m-xwgt-share-upload"
    };
    b7g.bV8N = function () {
        this.ch8Z();
        var j7c = a6g.E7x(this.o7h, "j-flag");
        this.XY3x = j7c.shift();
        this.LF8x = j7c.shift();
        this.VE2x = j7c.shift();
        this.bNe4i = {
            onchange: this.bNc4g.ex9o(this, 0),
            onerror: this.dQ9H.f7c(this),
            onsuccess: this.sx3x.f7c(this),
            multiple: true,
            parent: this.LF8x,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.boJ8B = {
            onchange: this.bNc4g.ex9o(this, 1),
            onerror: this.dQ9H.f7c(this),
            onsuccess: this.sx3x.f7c(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cgh9Y = x7q.Vx2x.A7t(this.bNe4i)
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.boJ8B.parent = e7d.button;
        this.LR9I && this.LR9I.T7M();
        this.LR9I = x7q.Vx2x.A7t(this.boJ8B);
        this.o7h.style.display = "none";
        if (!!this.fd9U) {
            for (var i = this.fd9U.length - 1; i >= 0; i--) {
                a6g.cO8G(this.fd9U[i].element, false);
                if (this.fd9U[i].dragger) this.fd9U[i].dragger.T7M()
            }
        }
        this.fd9U = [];
        if (this.Cq6k) {
            clearTimeout(this.Cq6k)
        }
        this.XU3x(0);
        this.VT2x = 0;
        this.bX8P([
            [this.bNe4i.parent, "click", this.bNa4e.f7c(this)],
            [this.boJ8B.parent, "click", this.bNa4e.f7c(this)]
        ])
    };
    b7g.bB8t = function () {
        h7a.ho0x(this.sA3x, "click");
        if (!!this.fd9U) {
            for (var i = this.fd9U.length - 1; i >= 0; i--) {
                a6g.cO8G(this.fd9U[i].element, false);
                if (this.fd9U[i].dragger) this.fd9U[i].dragger.T7M()
            }
        }
        this.fd9U = [];
        if (this.Cq6k) {
            clearTimeout(this.Cq6k)
        }
        this.Cq6k = 0;
        this.LR9I && this.LR9I.T7M();
        delete this.LR9I;
        this.bG8y()
    };
    b7g.bNa4e = function (d7e) {
        if (!ix0x.Yr3x() && this.fd9U.doing) {
            h7a.bf8X(d7e)
        }
    };
    b7g.bNc4g = function (e7d, r7k) {
        var lZ1x = e7d.files,
            hB0x;
        e7d.stopped = true;
        if (!lZ1x) {
            if (e7d.filename) {
                lZ1x = [{
                    name: e7d.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = lZ1x.length; i < len; i++) {
            if (!XZ3x.test(lZ1x[i].name)) {
                this.bpe8W({
                    path: lZ1x[i].name,
                    index: r7k,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (lZ1x[i].size > bor7k) {
                this.bpf8X(-3);
                this.bpe8W({
                    path: lZ1x[i].name,
                    index: r7k,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bpe8W({
                    path: lZ1x[i].name,
                    file: lZ1x[i],
                    index: r7k,
                    status: 0
                })
            }
        }
    };
    b7g.bpe8W = function (tP3x) {
        if (this.fd9U.length >= 9) {
            this.bpf8X(-10, 3e3, this.bMZ4d.f7c(this));
            return
        }
        this.cfZ9Q(tP3x);
        this.fd9U.push(tP3x);
        if (!!this.fd9U.length) {
            this.o7h.style.display = ""
        }
        if (this.fd9U.length >= 9) {
            this.LF8x.style.display = "none"
        } else {
            this.LF8x.style.display = ""
        }
        this.Mr9i()
    };
    b7g.Mr9i = function () {
        var bpm8e = -1,
            bMX4b = 0;
        for (var i = 0, l = this.fd9U.length; i < l; i++) {
            if (this.fd9U[i].status == 1) {
                return
            }
            if (this.fd9U[i].status == 0 && bpm8e < 0) {
                bpm8e = i
            }
            if (this.fd9U[i].status == 2 || this.fd9U[i].status < 0) {
                bMX4b++
            }
        }
        var p7i = this.fd9U[bpm8e];
        if (p7i) {
            (p7i.index == 0 ? this.cgh9Y : this.LR9I).Vp2x(false, p7i.file);
            p7i.status = 1;
            this.fd9U.doing = p7i;
            this.z7s("onstartupload", {})
        } else if (bMX4b == this.fd9U.length) {
            this.z7s("onfinishupload", {})
        }
    };
    b7g.bpq8i = function () {
        return this.fd9U.doing || {}
    };
    b7g.dQ9H = function (d7e) {
        var tP3x = this.bpq8i();
        tP3x.status = -4;
        tP3x.fail = "上传<br>失败";
        this.bMW4a(tP3x);
        this.fd9U.doing = null;
        this.Mr9i()
    };
    b7g.sx3x = function (d7e) {
        var tP3x = this.bpq8i(),
            dS9J = d7e.fileName.match(XZ3x);
        tP3x.picUrl = d7e.url;
        v7o.bk8c("/upload/event/img/v1", {
            query: {
                imgid: d7e.docId,
                format: dS9J[1]
            },
            type: "json",
            onload: this.bMV4Z.f7c(this),
            onerror: this.bMV4Z.f7c(this)
        })
    };
    b7g.bMV4Z = function (d7e) {
        if (d7e && d7e.code == 200 && d7e.picInfo) {
            var tP3x = this.bpq8i();
            tP3x.status = 2;
            var bx8p = NEJ.X({}, d7e.picInfo);
            bx8p.originId = bx8p.originIdStr;
            bx8p.squareId = bx8p.squareIdStr;
            bx8p.rectangleId = bx8p.rectangleIdStr;
            bx8p.pcSquareId = bx8p.pcSquareIdStr;
            bx8p.pcRectangleId = bx8p.pcRectangleIdStr;
            bx8p.originJpgId = bx8p.originJpgIdStr || bx8p.originJpgId;
            tP3x.picInfo = bx8p;
            this.bMW4a(tP3x);
            this.fd9U.doing = null;
            this.Mr9i()
        } else {
            this.dQ9H(d7e)
        }
    };
    b7g.bpf8X = function (r7k, kO1x, eK9B) {
        if (this.VT2x < r7k) {
            return
        }
        if (this.Cq6k) {
            clearTimeout(this.Cq6k);
            this.Cq6k = 0
        }
        if (kO1x) {
            this.VE2x.innerText = boq7j[r7k * 1];
            this.VT2x = r7k;
            this.Cq6k = setTimeout(this.XU3x.f7c(this, r7k, eK9B), kO1x)
        } else {
            this.VE2x.innerText = boq7j[r7k];
            this.VT2x = r7k
        }
        this.VE2x.style.display = ""
    };
    b7g.XU3x = function (r7k, eK9B) {
        if (r7k && this.VT2x !== r7k) {
            return
        }
        this.VT2x = 0;
        this.VE2x.innerText = boq7j[0];
        this.VE2x.style.display = "none";
        eK9B && eK9B()
    };
    b7g.cfZ9Q = function (cX8P) {
        var i7b = {};
        if (cX8P.fail) {
            i7b.fail = cX8P.fail
        }
        var dU9L = a6g.cc8U("m-xwgt-share-upload-preview", i7b);
        cX8P.element = a6g.nY2x(dU9L);
        h7a.s7l(a6g.E7x(cX8P.element, "del")[0], "mousedown", this.cfV9M.f7c(this, cX8P), false);
        this.XY3x.insertBefore(cX8P.element, this.XY3x.lastElementChild);
        cX8P.dragger = x7q.bNf4j.A7t({
            view: this.XY3x.parentNode,
            body: cX8P.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Pp0x.f7c(this, cX8P),
            onchange: this.cfU9L.f7c(this, cX8P),
            ondragend: this.blV7O.f7c(this, cX8P)
        })
    };
    b7g.bMW4a = function (cX8P) {
        if (!cX8P || !cX8P.element) {
            return false
        }
        var i7b = {};
        if (cX8P.fail) {
            i7b.fail = cX8P.fail
        } else {
            i7b.url = cX8P.picUrl
        }
        a6g.w7p(cX8P.element, "z-fail");
        cX8P.element.firstChild.outerHTML = a6g.cc8U("m-xwgt-share-upload-preview-img", i7b)
    };
    b7g.Pp0x = function (p7i, lj1x) {
        a6g.w7p(p7i.element, "z-sel")
    };
    b7g.cfU9L = function (p7i, lj1x) {
        var cJz5E, gA0x = this.fd9U.length - 1,
            oB2x;
        for (var i = gA0x; i >= 0; i--) {
            a6g.y7r(this.fd9U[i].element, "z-jump");
            if (this.fd9U[i] == p7i) {
                oB2x = i
            } else {
                a6g.fh9Y(this.fd9U[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var Wa2x = {
            x: 46 + 92 * (oB2x % 5) + lj1x.left,
            y: 46 + 92 * (oB2x / 5 >> 0) + lj1x.top
        };
        var bpM8E = Wa2x.x / 92 >> 0,
            bpO8G = Wa2x.y / 92 >> 0,
            yR5W = Math.max(0, Math.min(gA0x, bpO8G * 5 + bpM8E));
        if (yR5W == oB2x) {
            return
        }
        var cfP9G = yR5W < oB2x;
        for (var i = Math.min(yR5W, oB2x); i <= Math.max(yR5W, oB2x); i++) {
            if (i !== oB2x) {
                var bMQ3x = i % 5;
                if (cfP9G) {
                    if (bMQ3x == 4) {
                        a6g.fh9Y(this.fd9U[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a6g.fh9Y(this.fd9U[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bMQ3x == 0) {
                        a6g.fh9Y(this.fd9U[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a6g.fh9Y(this.fd9U[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    };
    b7g.blV7O = function (p7i, lj1x) {
        var cJA5F, gA0x = this.fd9U.length - 1,
            oB2x;
        for (var i = gA0x; i >= 0; i--) {
            a6g.fh9Y(this.fd9U[i].element, {
                left: "",
                top: ""
            });
            if (this.fd9U[i] == p7i) {
                oB2x = i
            }
        }
        a6g.y7r(p7i.element, "z-sel");
        var Wa2x = {
            x: 46 + 92 * (oB2x % 5) + lj1x.left,
            y: 46 + 92 * (oB2x / 5 >> 0) + lj1x.top
        };
        var bpM8E = Wa2x.x / 92 >> 0,
            bpO8G = Wa2x.y / 92 >> 0,
            yR5W = Math.max(0, Math.min(gA0x, bpO8G * 5 + bpM8E));
        if (yR5W == oB2x) {
            return
        }
        this.XY3x.insertBefore(p7i.element, (this.fd9U[yR5W + (yR5W > oB2x ? 1 : 0)] || {}).element || this.LF8x);
        this.fd9U.splice(oB2x, 1);
        this.fd9U.splice(yR5W, 0, p7i)
    };
    b7g.cfV9M = function (p7i, d7e) {
        a6g.cO8G(p7i.element, false);
        if (p7i.dragger) p7i.dragger.T7M();
        delete p7i.dragger;
        var r7k = -1;
        for (var i = this.fd9U.length - 1; i >= 0; i--) {
            if (this.fd9U[i] == p7i) {
                r7k = i;
                break
            }
        }
        this.fd9U.splice(r7k, r7k >= 0 ? 1 : 0);
        delete p7i;
        if (this.fd9U.length >= 9) {
            this.LF8x.style.display = "none"
        } else {
            this.LF8x.style.display = ""
        }
        if (!this.fd9U.length) {
            this.o7h.style.display = "none";
            this.XU3x(0)
        } else {
            this.bMZ4d()
        }
        if (this.fd9U.doing == p7i) {
            this.fd9U.doing = null
        }
        this.Mr9i()
    };
    b7g.bMZ4d = function () {
        var bMP3x = false;
        for (var i = 0, len = this.fd9U.length; i < len; i++) {
            if (this.fd9U[i].status == -3) {
                bMP3x = true
            }
        }
        if (bMP3x) {
            this.bpf8X(-3)
        } else {
            this.XU3x(-3)
        }
    };
    b7g.Wf2x = function () {
        var dF9w = [];
        for (var i = this.fd9U.length - 1; i >= 0; i--) {
            if (this.fd9U[i].status == 2) {
                dF9w.unshift(this.fd9U[i].picInfo)
            }
        }
        return dF9w
    };
    I7B.fK9B.A7t({
        element: x7q.bow7p,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        fD9u = NEJ.R,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        bc7V = c7f("nej.ui"),
        O7H = c7f("nej.ut"),
        b7g, K7D;
    if (!!O7H.nk1x) return;
    O7H.nk1x = NEJ.C();
    b7g = O7H.nk1x.N7G(O7H.bbA4E);
    K7D = O7H.nk1x.cr8j;
    b7g.bm8e = function (e7d) {
        this.cfF9w(e7d.more);
        this.Ga7T = a6g.B7u(e7d.sbody);
        this.cfD9u = e7d.fixScrollPosition;
        this.bX8P([
            [this.Ga7T, "scroll", this.cfz9q.f7c(this)]
        ]);
        var dr9i = e7d.delta;
        if (dr9i == null) dr9i = 30;
        this.Wo2x = Math.max(0, dr9i);
        var cA8s = parseInt(e7d.count) || 0;
        this.jS1x = Math.max(0, cA8s);
        var hk0x = parseInt(e7d.number) || 0;
        if (hk0x > 1 && hk0x <= cA8s) {
            this.Eb6V = hk0x
        }
        this.bn8f(e7d)
    };
    b7g.bB8t = function () {
        this.bG8y();
        delete this.CR6L;
        delete this.Ga7T;
        delete this.tw3x;
        delete this.Xy3x
    };
    b7g.BV6P = function (bj8b, bs8k) {
        var bM8E = this.zM5R + (this.jS1x - 1) * this.oM2x,
            gk0x = this.jS1x * this.oM2x;
        return K7D.BV6P.call(this, bM8E, bj8b, gk0x, bs8k)
    };
    b7g.cfF9w = function (Xx3x) {
        this.CR6L = a6g.B7u(Xx3x);
        this.bX8P([
            [this.CR6L, "click", this.pv2x.f7c(this)]
        ])
    };
    b7g.bqt8l = function (G7z) {
        G7z = G7z || {};
        if (this.tw3x || !G7z) return;
        if (!G7z.scrollHeight) G7z = a6g.oJ2x();
        var bj8b = a6g.ic0x(this.iu0x, this.cfD9u ? G7z : null),
            dr9i = bj8b.y + this.iu0x.offsetHeight - G7z.scrollTop - G7z.clientHeight,
            bqu8m = G7z.scrollHeight <= G7z.clientHeight;
        if (dr9i <= this.Wo2x || bqu8m && !this.tw3x) {
            this.pv2x()
        }
    };
    b7g.cfz9q = function (d7e) {
        if (this.tw3x) return;
        this.bqt8l(h7a.X7Q(d7e))
    };
    b7g.Cx6r = function (d7e) {
        K7D.Cx6r.apply(this, arguments);
        if (!d7e.stopped) {
            this.SH1x();
            var bj8b = 0;
            if (d7e.index > 1) {
                bj8b = this.zM5R + ((d7e.index - 1) * this.jS1x - 1) * this.oM2x
            }
            this.hZ0x = bj8b;
            this.pv2x()
        }
    };
    b7g.bOm4q = function (e7d) {
        if (!!this.Eb6V) {
            var dr9i = e7d.offset > 0 ? this.oM2x : this.zM5R,
                gk0x = dr9i + this.oM2x * (this.Eb6V - 1);
            this.hZ0x = e7d.offset + gk0x;
            e7d.data.limit = gk0x;
            e7d.limit = gk0x;
            delete this.Eb6V
        }
        return e7d
    };
    b7g.bhO5T = function (e7d) {
        delete this.Xy3x;
        K7D.bhO5T.apply(this, arguments);
        this.bMK3x()
    };
    b7g.bhU5Z = function (d7e) {
        if (d7e.key != this.jm0x.key) return;
        switch (d7e.action) {
            case "refresh":
            case "append":
                delete this.Xy3x;
                break
        }
        K7D.bhU5Z.apply(this, arguments)
    };
    b7g.Tb1x = function () {
        this.AV5a("onbeforelistload", "列表加载中...");
        a6g.ba7T(this.CR6L, "display", "none")
    };
    b7g.bix6r = function (j7c, bj8b, gk0x) {
        var bs8k = j7c.length,
            bqw8o = j7c.loaded ? bj8b + gk0x >= bs8k : bj8b + gk0x > bs8k;
        this.hZ0x = Math.min(this.hZ0x, bs8k);
        a6g.ba7T(this.CR6L, "display", bqw8o ? "none" : "");
        if (bqw8o) this.tw3x = !0;
        if (this.jS1x > 0) {
            var bx8p = this.BV6P(bj8b, j7c.length);
            if (this.bOj4n(bx8p.index, bx8p.total)) return !0;
            var dr9i = this.zM5R - this.oM2x,
                hk0x = this.jS1x * this.oM2x;
            this.tw3x = (bj8b + gk0x - dr9i) % hk0x == 0 || bqw8o;
            a6g.ba7T(this.CR6L, "display", this.tw3x ? "none" : "");
            this.big5l(this.tw3x && bx8p.total > 1 ? "" : "none")
        }
    };
    b7g.bis6m = function () {
        this.hZ0x = 0;
        this.tw3x = !0;
        this.AV5a("onemptylist", "没有列表数据！")
    };
    b7g.Tf1x = function (dU9L, lj1x) {
        this.iu0x.insertAdjacentHTML(lj1x || "beforeEnd", dU9L)
    };
    b7g.Th1x = function (hy0x) {
        this.fP9G = this.fP9G || [];
        if (k7d.ec9T(hy0x)) {
            fD9u.push.apply(this.fP9G, hy0x)
        } else {
            this.fP9G.push(hy0x)
        }
    };
    b7g.bbf4j = function (d7e) {
        a6g.mO1x(this.cM8E);
        this.Tp2x(d7e, "onafteradd");
        var fg9X = d7e.flag;
        if (d7e.stopped || !fg9X) return;
        if (this.jS1x > 0) {
            this.bij5o();
            return
        }
        this.hZ0x += 1;
        fg9X == -1 ? this.bjk6e(d7e.data) : this.bOf4j(d7e.data)
    };
    b7g.bbb4f = function (d7e) {
        this.Tp2x(d7e, "onafterdelete");
        if (d7e.stopped) return;
        if (this.jS1x > 0) {
            this.bij5o();
            return
        }
        var D7w = d7e.data[this.ft9k.pkey];
        if (!!this.fP9G) {
            var p7i = a6g.bVJ6D(D7w),
                r7k = k7d.dm9d(this.fP9G, p7i);
            if (r7k >= 0) {
                this.fP9G.splice(r7k, 1);
                this.hZ0x -= 1
            }
            if (!!p7i) p7i.T7M()
        } else {
            var g7b = a6g.B7u(this.bOr4v(D7w));
            if (!!g7b) this.hZ0x -= 1;
            a6g.cO8G(g7b)
        }
        if (this.hZ0x <= 0) this.pv2x()
    };
    b7g.biU6O = function (bj8b, gk0x) {
        if (bj8b != this.hZ0x) return;
        if (this.bco4s()) {
            this.tw3x = !1;
            this.bMK3x()
        }
    };
    b7g.biW6Q = function (bj8b, gk0x) {
        if (bj8b != 0) return;
        var IV8N = this.S7L.hH0x(this.jm0x.key);
        for (var i = gk0x - 1; i >= 0; i--) {
            this.bjk6e(IV8N[i])
        }
    };
    b7g.bMK3x = function () {
        var G7z = this.Ga7T;
        if (!G7z || this.tw3x) return;
        this.bqt8l(this.Ga7T)
    };
    b7g.gP0x = function () {
        delete this.tw3x;
        K7D.gP0x.apply(this, arguments)
    };
    b7g.pv2x = function () {
        if (!!this.Xy3x) return;
        this.Xy3x = !0;
        var bj8b = this.hZ0x;
        this.hZ0x += bj8b == 0 ? this.zM5R : this.oM2x;
        this.bOo4s(bj8b)
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        db8T = c7f("nej.x"),
        O7H = c7f("nej.ut"),
        b7g;
    if (!!O7H.Gm7f) return;
    O7H.Gm7f = NEJ.C();
    b7g = O7H.Gm7f.N7G(O7H.cH8z);
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.iK0x = e7d.event || "click";
        this.kL1x = e7d.selected || "js-selected";
        this.oy2x = e7d.disabled || "js-disabled";
        this.bMJ3x = !!e7d.inverse;
        this.cft9k(e7d.list);
        this.Wr2x(e7d.index || 0)
    };
    b7g.bB8t = function () {
        var cfs9j = function (g7b) {
            this.bqE8w(g7b, !1)
        };
        return function () {
            this.bG8y();
            k7d.bd7W(this.bU8M, cfs9j, this);
            delete this.bU8M;
            delete this.iK0x;
            delete this.cq8i;
            delete this.oy2x;
            delete this.kL1x;
            delete this.bMJ3x
        }
    }();
    b7g.cft9k = function () {
        var bzg0x = function (p7i) {
            if (!p7i) return;
            this.bU8M.push(p7i);
            var r7k = this.bU8M.length - 1,
                dw9n = this.bqF8x[r7k];
            if (!dw9n) {
                dw9n = this.Wr2x.f7c(this, r7k);
                this.bqF8x[r7k] = dw9n
            }
            this.bX8P([
                [p7i, this.iK0x, dw9n]
            ])
        };
        return function (j7c) {
            this.bU8M = [];
            if (!this.bqF8x) this.bqF8x = [];
            k7d.bd7W(j7c, bzg0x, this)
        }
    }();
    b7g.bqE8w = function (G7z, cfp9g) {
        !!cfp9g && !this.bMJ3x ? a6g.w7p(G7z, this.kL1x) : a6g.y7r(G7z, this.kL1x)
    };
    b7g.Wr2x = function (r7k, Wt2x, i7b) {
        var G7z = this.bU8M[r7k];
        if (Wt2x != !0 && (r7k == this.cq8i || !G7z || a6g.bE8w(G7z, this.oy2x))) {
            h7a.co8g(arguments[1]);
            return this
        }
        var d7e = {
            index: r7k,
            last: this.cq8i,
            list: this.lJ1x(),
            data: i7b || a6g.t7m(G7z, "value")
        };
        this.cq8i = r7k;
        G7z = this.bU8M[d7e.last];
        if (!!G7z) this.bqE8w(G7z, !1);
        G7z = this.bU8M[this.cq8i];
        this.bqE8w(G7z, !0);
        this.z7s("onchange", d7e);
        if (!d7e.nostop) h7a.co8g(arguments[1]);
        return this
    };
    b7g.tR3x = function () {
        return this.cq8i
    };
    b7g.lJ1x = function () {
        return this.bU8M
    };
    a6g.cfn8f = db8T.cfn8f = function (bH8z, e7d) {
        var D7w = a6g.lQ1x(bH8z);
        if (!D7w) return null;
        if (!O7H.WZ2x(D7w, O7H.Gm7f)) {
            e7d = e7d || {};
            e7d.list = !e7d.clazz ? a6g.df9W(D7w) : a6g.E7x(D7w, e7d.clazz);
            delete e7d.clazz
        }
        return O7H.WZ2x(D7w, O7H.Gm7f, e7d || bb7U)
    };
    db8T.isChange = !0
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        l7e = c7f("nm.x");
    var SETTING_KEY = "player-setting";
    var nn2x = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    nn2x = v7o.tV3x(SETTING_KEY) || nn2x;
    l7e.bqX8P = function () {
        return nn2x
    };
    l7e.Gw7p = function (Gx7q) {
        if (Gx7q) {
            nn2x = Gx7q;
            v7o.uM4Q(SETTING_KEY, Gx7q)
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        l7e = c7f("nm.x"),
        q7j = c7f("nm.d"),
        hq0x = c7f("nm.w.player.log");
    var kN1x = q7j.hP0x.A7t();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var ht0x = function (u7n, bF8x, rM3x) {
        var cL8D = l7e.fp9g("{0} {1} {2}", k7d.id0x(new Date, "yyyy-MM-dd HH:mm:ss"), u7n, bF8x);
        if (rM3x == LogLevel.ERROR) {
            kN1x.eR9I("playerror", {
                message: bF8x
            })
        }
        if (rM3x >= LogLevel.INFO) {
            kN1x.bTv6p(cL8D)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cL8D)
        }
    };
    hq0x.ca8S = function () {
        ht0x("PLAY_ERROR", l7e.fp9g.apply(null, arguments), LogLevel.ERROR)
    };
    hq0x.pL2x = function () {
        ht0x("PLAY_INFO", l7e.fp9g.apply(null, arguments), LogLevel.INFO)
    };
    hq0x.cJC5H = function () {
        ht0x("PLAY_DEBUG", l7e.fp9g.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        k7d = c7f("nej.u"),
        x7q = c7f("nm.w"),
        eK9B = c7f("flash.cb");
    var ek9b = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var GF7y, Xf3x, vo4s;
    x7q.cfj8b = function (u7n, cC8u) {
        if (u7n != "flash") {
            if (!GF7y) {
                GF7y = a6g.dk9b("audio");
                k7d.bd7W(ek9b, function (u7n) {
                    h7a.s7l(GF7y, u7n, onMediaCallBack)
                })
            }
            if (GF7y && GF7y.canPlayType && GF7y.canPlayType("audio/mpeg")) {
                cC8u(new MediaWrap("audio"));
                return
            }
        }
        if (!Xf3x) {
            a6g.sm3x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function (ib0x) {
                    Xf3x = ib0x;
                    k7d.bd7W(ek9b, function (u7n) {
                        eK9B[u7n] = onMediaCallBack;
                        Xf3x.addCallback(u7n, "flash.cb." + u7n)
                    });
                    cC8u(new MediaWrap("flash"))
                }.f7c(this)
            })
        } else {
            cC8u(new MediaWrap("flash"))
        }
    };

    function MediaWrap(IQ8I) {
        var ha0x;
        I7B.fK9B.A7t({
            element: this,
            event: ek9b.concat(["interrupt", "recover"])
        });
        ha0x = IQ8I == "audio" ? GF7y : Xf3x;
        this.type = IQ8I;
        this.destroy = function () {};
        this.setSrc = function (Y7R) {
            if (vo4s != this) {
                var gA0x = vo4s;
                if (gA0x) {
                    gA0x.interrupt()
                }
                vo4s = this
            }
            if (IQ8I == "flash") {
                ha0x.setSrc(Y7R)
            } else {
                ha0x.src = Y7R
            }
        };
        this.play = function () {
            if (vo4s != this) {
                var gA0x = vo4s;
                if (gA0x) {
                    gA0x.interrupt();
                    vo4s = this;
                    this.recover()
                } else {
                    vo4s = this
                }
            }
            if (IQ8I == "flash") {
                ha0x.as_play()
            } else {
                ha0x.play()
            }
        };
        this.pause = function () {
            if (vo4s != this) return;
            if (IQ8I == "flash") {
                ha0x.as_pause()
            } else {
                ha0x.pause()
            }
        };
        this.load = function () {
            if (vo4s != this) return;
            if (IQ8I == "flash") {
                ha0x.as_load()
            } else {
                ha0x.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({
                type: "interrupt"
            })
        };
        this.recover = function () {
            onMediaCallBack({
                type: "recover"
            })
        };
        this.getMedia = function () {
            return ha0x
        };
        var pA2x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k7d.bd7W(pA2x, function (W7P) {
            var WI2x = "get" + W7P,
                WL2x = "set" + W7P;
            if (IQ8I == "flash") {
                if (!this[WI2x]) {
                    this[WI2x] = function () {
                        return ha0x[WI2x]()
                    }
                }
                if (!this[WL2x]) {
                    this[WL2x] = function (value) {
                        ha0x[WL2x](value)
                    }
                }
            } else {
                var bMI3x = W7P.slice(0, 1).toLowerCase() + W7P.slice(1);
                if (!this[WI2x]) {
                    this[WI2x] = function () {
                        return ha0x[bMI3x]
                    }
                }
                if (!this[WL2x]) {
                    this[WL2x] = function (value) {
                        ha0x[bMI3x] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d7e) {
        if (vo4s) {
            h7a.z7s(vo4s, d7e.type, d7e)
        }
    }
})();
(function () {
    var c7f = NEJ.P,
        h7a = c7f("nej.v"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        dz9q = c7f("nej.p"),
        x7q = c7f("nm.w"),
        l7e = c7f("nm.x"),
        hq0x = c7f("nm.w.player.log"),
        b7g;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bMG3x = false;
    x7q.gf0x = NEJ.C();
    b7g = x7q.gf0x.N7G(I7B.cH8z);
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.cS8K = {};
        this.WX2x(e7d.media);
        v7o.bk8c("/api/cdns", {
            type: "json",
            onload: function (d7e) {
                if (d7e.code) {
                    this.rJ3x = d7e.data
                }
            }.f7c(this)
        })
    };
    b7g.bB8t = function () {
        this.bG8y();
        delete this.cS8K
    };
    b7g.WW2x = function (bl8d) {
        if (!bl8d) return;
        var wT4X = this.cS8K.volume;
        if (this.dX9O) {
            this.dX9O.pause()
        }
        this.cS8K = {
            time: 0,
            id: bl8d.id,
            duration: bl8d.duration / 1e3,
            play: this.cS8K.play,
            stalledRetryCount: 0
        };
        if (wT4X != null) {
            this.cS8K.volume = wT4X
        }
        this.cS8K.loadState = LoadState.LOAD_START;
        this.bMD3x(bl8d.id);
        hq0x.pL2x("play song id: {0}", bl8d.id)
    };
    b7g.er9i = function () {
        if (this.cS8K.error) {
            this.cS8K.error = null;
            if (this.cS8K.error == ErrorType.INFO_GET_ERR || this.bMC3x()) {
                this.bMB3x()
            } else {
                this.WR2x()
            }
        } else {
            if (this.dX9O) {
                this.dX9O.play()
            }
        }
        this.cS8K.play = true;
        this.pS2x("play")
    };
    b7g.fM9D = function () {
        if (this.dX9O) {
            this.dX9O.pause()
        }
        this.cS8K.play = false;
        this.pS2x("pause")
    };
    b7g.ps2x = function (bA8s) {
        if (this.dX9O) {
            this.dX9O.setCurrentTime(bA8s)
        }
        this.cS8K.time = bA8s;
        hq0x.pL2x("seek to: {0}", bA8s)
    };
    b7g.bst9k = function () {
        return this.cS8K.duration || 0
    };
    b7g.uW4a = function () {
        return !!this.cS8K.play
    };
    b7g.my1x = function (WM2x) {
        this.cS8K.volume = WM2x;
        if (this.dX9O) {
            this.dX9O.setVolume(WM2x)
        }
    };
    b7g.Xb2x = function () {
        return this.cS8K.time
    };
    b7g.WX2x = function (u7n) {
        x7q.cfj8b(u7n, function (ha0x) {
            this.dX9O = ha0x;
            hq0x.pL2x("media loaded: {0}", ha0x.type);
            this.bX8P([
                [this.dX9O, "loadedmetadata", this.ceY8Q.f7c(this)],
                [this.dX9O, "ended", this.ceU8M.f7c(this)],
                [this.dX9O, "waiting", this.zh5m.f7c(this)],
                [this.dX9O, "play", this.uU4Y.f7c(this)],
                [this.dX9O, "pause", this.bsX9O.f7c(this)],
                [this.dX9O, "playing", this.WF2x.f7c(this)],
                [this.dX9O, "timeupdate", this.ceT8L.f7c(this)],
                [this.dX9O, "progress", this.rr3x.f7c(this)],
                [this.dX9O, "stalled", this.btf9W.f7c(this)],
                [this.dX9O, "interrupt", this.fM9D.f7c(this)],
                [this.dX9O, "recover", this.ceS8K.f7c(this)],
                [this.dX9O, "error", this.dQ9H.f7c(this)]
            ]);
            if (this.cS8K) {
                if (this.cS8K.loadState == LoadState.LOAD_START || this.cS8K.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bto9f();
                    if (this.cS8K.volume != null) {
                        this.dX9O.setVolume(this.cS8K.volume)
                    }
                }
            }
        }.f7c(this))
    };
    b7g.ceR8J = function (u7n) {
        this.IW8O();
        this.dX9O.destroy();
        this.cS8K.loadState = LoadState.IN_SWITCH_MEDIA;
        this.zh5m();
        this.WX2x(u7n);
        hq0x.pL2x("switch media")
    };
    b7g.cJD5I = function () {
        return this.dX9O
    };
    b7g.bMD3x = function () {
        this.zh5m();
        v7o.bk8c("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cS8K.id]),
                br: DEFAULT_BR
            },
            onload: this.bMw3x.f7c(this),
            onerror: this.bMw3x.f7c(this)
        })
    };
    b7g.bMw3x = function (d7e) {
        if (d7e.code == 200 && d7e.data && d7e.data.length) {
            var bx8p = d7e.data[0];
            if (!bx8p.url) {
                this.cS8K.error = ErrorType.INFO_GET_ERR;
                this.pS2x("error", {
                    code: this.cS8K.error
                });
                return
            }
            this.cS8K.playUrl = bx8p.url;
            this.cS8K.expireTime = (new Date).getTime() + bx8p.expi * 1e3;
            this.bto9f()
        } else {
            this.cS8K.error = ErrorType.INFO_GET_ERR;
            this.pS2x("error", {
                code: this.cS8K.error
            });
            hq0x.ca8S("info load error")
        }
    };
    b7g.bto9f = function () {
        if (this.dX9O) {
            var Y7R = this.cS8K.playUrl;
            if (this.cS8K.time > 0 && (this.cS8K.loadState == LoadState.IN_RE_GET_URL || this.cS8K.loadState == LoadState.IN_RE_GET_URL)) {
                Y7R += "#t=" + this.cS8K.time
            }
            this.dX9O.setSrc(Y7R);
            hq0x.pL2x("load mp3: {0},loadState: {1}.", Y7R, this.cS8K.loadState)
        }
    };
    b7g.bMv3x = function () {
        if (/#t=(\d+)$/.test(this.dX9O.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b7g.WR2x = function () {
        var bA8s = parseInt(this.cS8K.time) || 0,
            ceM8E = this.bMv3x();
        if (bA8s === ceM8E) {
            this.dX9O.load()
        } else {
            this.dX9O.setSrc(this.cS8K.playUrl + "#t=" + bA8s)
        }
        this.cS8K.loadState = LoadState.IN_RELOAD;
        this.zh5m();
        hq0x.pL2x("reload from: {0}", bA8s)
    };
    b7g.bMB3x = function () {
        this.cS8K.loadState = LoadState.IN_RE_GET_URL;
        this.bMD3x()
    };
    b7g.bMu3x = function () {
        var sk3x = getHost(this.cS8K.playUrl);
        if (sk3x) {
            for (var i = 0; i < this.rJ3x.length; i++) {
                var iz0x = this.rJ3x[i] || [],
                    r7k = iz0x.indexOf(sk3x);
                if (r7k >= 0 && iz0x.length > 1) {
                    return iz0x[(r7k + 1) % iz0x.length]
                }
            }
        }

        function getHost(Y7R) {
            if (CDN_HOST_REG.test(Y7R)) return RegExp.$1
        }
    };
    b7g.ceK8C = function () {
        this.cS8K.playUrl = this.cS8K.playUrl.replace(CDN_HOST_REG, this.bMu3x());
        this.cS8K.loadState = LoadState.IN_SWITCH_CDN;
        this.bto9f();
        this.zh5m()
    };
    b7g.ceY8Q = function () {
        if (this.cS8K.loadState == LoadState.LOAD_START) {
            this.cS8K.loadState = LoadState.LOADED_META;
            if (this.dX9O.type == "audio") {
                this.cS8K.duration = this.dX9O.getDuration()
            }
            this.pS2x("loadedmeta", {
                duration: this.cS8K.duration
            })
        } else {
            this.cS8K.loadState = LoadState.LOADED_META
        }
        if (this.cS8K.play) {
            this.dX9O.play()
        } else {
            this.dX9O.pause()
        }
        if (this.cS8K.time && parseInt(this.cS8K.time) != this.bMv3x()) {
            this.dX9O.setCurrentTime(this.cS8K.time)
        }
        this.Kc8U();
        this.WF2x();
        bMG3x = true;
        hq0x.pL2x("loaded meta")
    };
    b7g.ceU8M = function () {
        this.cS8K.ended = true;
        this.pS2x("ended")
    };
    b7g.zh5m = function () {
        if (!this.cS8K.waiting) {
            this.cS8K.waiting = true;
            this.cS8K.waitTimestamp = +(new Date);
            this.pS2x("waiting")
        }
    };
    b7g.WF2x = function () {
        this.cS8K.waiting = false;
        this.cS8K.waitTimestamp = 0;
        this.pS2x("playing")
    };
    b7g.uU4Y = function () {
        this.pS2x("play")
    };
    b7g.bsX9O = function () {
        this.pS2x("pause")
    };
    b7g.ceT8L = function () {
        if (this.cS8K.loadState != LoadState.LOADED_META) return;
        var bA8s = this.dX9O.getCurrentTime();
        if (this.cS8K.waiting && bA8s > this.cS8K.time) {
            this.WF2x()
        }
        this.cS8K.time = bA8s;
        this.pS2x("timeupdate", {
            time: this.cS8K.time,
            duration: this.cS8K.duration
        })
    };
    b7g.rr3x = function (d7e) {
        if (this.cS8K.loadState != LoadState.LOADED_META) return;
        var m7f = {};
        if (d7e.data) {
            m7f.total = d7e.data.total;
            m7f.loaded = d7e.data.loaded
        } else {
            var zk5p = this.dX9O.getBuffered(),
                bA8s = this.dX9O.getCurrentTime(),
                pm2x = 0;
            for (var i = 0; i < zk5p.length; i++) {
                if (bA8s > zk5p.start(i) && bA8s < zk5p.end(i)) {
                    pm2x = zk5p.end(i);
                    break
                }
            }
            m7f.total = this.cS8K.duration;
            m7f.loaded = Math.min(pm2x, m7f.total)
        }
        this.pS2x("progress", m7f)
    };
    b7g.Kc8U = function () {
        if (this.cS8K.retry) {
            clearTimeout(this.cS8K.retry.tid);
            this.cS8K.retry = null
        }
    };
    b7g.dQ9H = function () {
        var bY8Q = this.dX9O.getError();
        hq0x.ca8S("media error code: {0}, netState: {1}", bY8Q.code, this.dX9O.getNetworkState());
        if (bY8Q.code == MediaError.MEDIA_ERR_NETWORK || bY8Q.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Gx7q = l7e.bqX8P();
            if (!this.cS8K.retry) {
                this.cS8K.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cS8K.retry.tid)
            }
            if (this.cS8K.retry.level == RetryLevel.NONE) {
                if (this.bMC3x()) {
                    this.cS8K.retry.level = RetryLevel.GET_URL;
                    this.bMB3x();
                    hq0x.pL2x("Url expired, get url.")
                } else {
                    this.cS8K.retry.level = RetryLevel.RELOAD;
                    this.cS8K.retry.tid = setTimeout(this.WR2x.f7c(this), 3e3);
                    hq0x.pL2x("Reload mp3 3s later.")
                }
            } else if (this.cS8K.retry.level == RetryLevel.GET_URL) {
                this.cS8K.retry.level = RetryLevel.RELOAD;
                this.cS8K.retry.tid = setTimeout(this.WR2x.f7c(this), 3e3);
                hq0x.pL2x("Reload mp3 3s later.")
            } else if (this.cS8K.retry.level == RetryLevel.RELOAD) {
                this.cS8K.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bMu3x()) {
                    this.cS8K.retry.tid = setTimeout(this.ceK8C.f7c(this), 5e3);
                    hq0x.pL2x("Switch CDN 5s later.")
                } else {
                    this.cS8K.retry.tid = setTimeout(this.WR2x.f7c(this), 5e3);
                    hq0x.pL2x("Reload mp3 5s later.")
                }
            } else if (!bMG3x && this.dX9O.type == "audio" && !Gx7q.useFlash && !dz9q.Ku8m.mac && l7e.btS9J().supported) {
                Gx7q.useFlash = true;
                l7e.Gw7p(Gx7q);
                this.ceR8J("flash")
            } else {
                this.Kc8U();
                this.fM9D();
                this.cS8K.error = ErrorType.NET_ERR;
                this.pS2x("error", {
                    code: this.cS8K.error
                });
                hq0x.ca8S("error can not retry.")
            }
        } else {
            this.Kc8U();
            this.fM9D();
            this.cS8K.error = ErrorType.UNKNOWN_ERR;
            this.pS2x("error", {
                code: this.cS8K.error
            });
            hq0x.ca8S("error can not retry.")
        }
    };
    b7g.btf9W = function () {
        var hY0x = 0,
            bMt3x = 5e3;
        return function () {
            this.zh5m();
            clearTimeout(hY0x);
            setTimeout(function () {
                var fb9S = +(new Date);
                if (this.cS8K.waiting && fb9S - this.cS8K.waitTimestamp >= bMt3x && this.cS8K.stalledRetryCount < MAX_STALLED_RETRY) {
                    hq0x.pL2x("stalled too long retry.");
                    this.cS8K.stalledRetryCount++;
                    this.WR2x()
                }
            }.f7c(this), bMt3x);
            hq0x.pL2x("stalled")
        }
    }();
    b7g.bMC3x = function () {
        var fb9S = +(new Date);
        return fb9S > this.cS8K.expireTime
    };
    b7g.ceS8K = function () {
        var bA8s = parseInt(this.cS8K.time) || 0;
        this.dX9O.setSrc(this.cS8K.playUrl + "#t=" + bA8s);
        this.cS8K.loadState = LoadState.IN_RELOAD;
        this.zh5m();
        hq0x.pL2x("recover from: {0}", bA8s)
    };
    b7g.pS2x = function (U7N, i7b) {
        h7a.z7s(x7q.gf0x, "playaction", {
            action: U7N,
            data: i7b || {}
        })
    };
    I7B.fK9B.A7t({
        element: x7q.gf0x,
        event: ["playaction"]
    })
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c7f = NEJ.P,
        h7a = c7f("nej.v"),
        I7B = c7f("nej.ut"),
        x7q = c7f("nm.w"),
        b7g;
    x7q.HQ7J = NEJ.C();
    b7g = x7q.HQ7J.N7G(x7q.gf0x);
    K7D = x7q.HQ7J.cr8j;
    b7g.cv8n = function () {
        this.cD8v()
    };
    b7g.ceI8A = function (bP8H) {
        this.WW2x(bP8H);
        this.er9i()
    };
    b7g.btG9x = function () {
        this.fM9D()
    };
    b7g.xt4x = function (d7e) {
        if (d7e.action == "play") {
            this.fM9D()
        }
    };
    b7g.pS2x = function (U7N, i7b) {
        h7a.z7s(x7q.HQ7J, "tmpplayaction", {
            action: U7N,
            data: i7b || {},
            tmp: true
        })
    };
    b7g.tu3x = function () {
        return this.cS8K
    };
    I7B.fK9B.A7t({
        element: x7q.HQ7J,
        event: ["tmpplayaction"]
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        fY9P = c7f("nej.n"),
        v7o = c7f("nej.j"),
        I7B = c7f("nej.ut"),
        bc7V = c7f("nej.ui"),
        x7q = c7f("nm.w"),
        n7g = c7f("nm.l"),
        kX1x = c7f("nm.c"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D, Xr3x = [{
            item: "m-publish-search-single",
            type: 1
        }, {
            item: "m-publish-search-artist",
            type: 100
        }, {
            item: "m-publish-search-album",
            type: 10
        }, {
            item: "m-publish-search-mv",
            type: 1004
        }, {
            item: "m-publish-search-playlist",
            type: 1e3
        }, {
            item: "m-publish-search-djRadio",
            type: 1009
        }];
    var btN9E = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    x7q.btO9F = NEJ.C();
    b7g = x7q.btO9F.N7G(bc7V.eo9f);
    b7g.cv8n = function (e7d) {
        this.cD8v(e7d);
        var j7c = a6g.E7x(this.o7h, "j-flag");
        this.cJH5M = j7c.shift();
        this.ceA8s = j7c.shift();
        this.Kl8d = j7c.shift();
        this.btV9M = j7c.shift();
        this.btW9N = [j7c.shift(), j7c.shift(), j7c.shift(), j7c.shift(), j7c.shift(), j7c.shift()];
        this.Xw3x = j7c.shift();
        this.bMr3x = j7c.shift();
        this.sU3x = {
            list: this.btW9N,
            selected: "z-curr",
            onchange: this.bMq3x.f7c(this)
        };
        h7a.s7l(this.Kl8d, "input", this.XD3x.f7c(this));
        h7a.s7l(this.Kl8d, "propertychange", this.XD3x.f7c(this));
        h7a.s7l(this.Kl8d, "keyup", this.XD3x.f7c(this));
        h7a.s7l(this.ceA8s, "click", this.XD3x.f7c(this));
        h7a.s7l(this.Xw3x, "click", this.cJ8B.f7c(this));
        h7a.s7l(this.bMr3x, "click", function () {
            this.z7s("oncancel", {})
        }.f7c(this));
        this.S7L = q7j.Iu8m.fR9I();
        this.Wl2x = top.nm.w.HQ7J.fR9I();
        I7B.fK9B.A7t({
            element: top.nm.w.HQ7J,
            event: ["tmpplayaction"]
        });
        this.sJ3x = {
            limit: 100,
            offset: 0,
            parent: this.Xw3x,
            onbeforelistload: this.rb3x.f7c(this)
        };
        q7j.sk = "fuck" + a6g.t7m(this.btV9M, "xname") + "458";
        h7a.s7l(top.nm.w.HQ7J, "tmpplayaction", this.xt4x.f7c(this))
    };
    b7g.cf8X = function () {
        this.ce8W = "m-xwgt-publish-search"
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        if (!!this.DT6N) {
            this.DT6N.T7M();
            delete this.DT6N
        }
        this.sU3x.index = btN9E[e7d.type || "song"];
        this.DT6N = I7B.Gm7f.A7t(this.sU3x);
        this.Kl8d.value = "";
        this.Kl8d.focus();
        this.wL4P = "";
        this.cJI5N = 0;
        if (e7d.showMV == true) {
            this.btW9N[btN9E["mv"]].parentNode.style.display = "";
            a6g.w7p(this.btV9M, "srchtab-1")
        } else {
            this.btW9N[btN9E["mv"]].parentNode.style.display = "none";
            a6g.y7r(this.btV9M, "srchtab-1")
        }
        if (!!this.dM9D) {
            this.dM9D = this.dM9D.T7M()
        }
        if (e7d.hideBack) {
            a6g.w7p(this.bMr3x.parentNode, "f-hide")
        }
    };
    b7g.bB8t = function () {
        this.Wl2x.btG9x();
        this.bG8y()
    };
    b7g.XD3x = function () {
        var value = this.Kl8d.value.trim();
        if (value && value.length) {
            if (value != this.wL4P) {
                this.wL4P = value;
                this.bMq3x({
                    index: this.DT6N.tR3x()
                })
            }
        } else {
            if (this.dM9D) {
                this.dM9D = this.dM9D.T7M()
            }
        }
        this.wL4P = value
    };
    b7g.cJ8B = function () {
        var cev8n = function (G7z) {
                return a6g.bE8w(G7z, "sitm") || a6g.bE8w(G7z, "itm") || a6g.bE8w(G7z, "mv-item")
            },
            ceu8m = function (G7z) {
                return a6g.bE8w(G7z, "ply")
            },
            bMp3x = function () {
                n7g.Z7S.J7C({
                    type: 2,
                    tip: "因合作方要求，该资源需付费使用"
                })
            },
            ces8k = function () {
                n7g.Z7S.J7C({
                    type: 2,
                    tip: "因合作方要求，该资源需下载后播放"
                })
            },
            buB9s = function (bl8d) {
                if (bl8d && bl8d.privilege && bl8d.privilege.toast) {
                    v7o.bk8c("/api/song/toast", {
                        query: {
                            id: bl8d.id
                        },
                        type: "json",
                        onload: Vm2x.f7c(this),
                        onerror: Vm2x.f7c(this)
                    })
                } else {
                    Vf2x()
                }
            },
            Vm2x = function (Q7J) {
                Vf2x((Q7J || bb7U).toast)
            },
            Vf2x = function (bF8x) {
                n7g.Z7S.J7C({
                    type: 2,
                    tip: bF8x || "因合作方要求，该资源暂时下架>_<"
                })
            };
        return function (d7e) {
            var wK4O = h7a.X7Q(d7e, ceu8m),
                j7c = h7a.X7Q(d7e, cev8n),
                eA9r = this.Wl2x.tu3x();
            if (!!j7c) {
                h7a.bf8X(d7e);
                this.Wj2x = a6g.t7m(j7c, "id");
                this.Wc2x = a6g.t7m(j7c, "type");
                if (this.Wc2x == 18) {
                    var bP8H = this.S7L.eO9F(this.Wj2x),
                        rM3x = l7e.qc2x(bP8H);
                    if (!wK4O) {
                        if (rM3x == 10) {
                            bMp3x();
                            return
                        } else if (rM3x == 100) {
                            buB9s(bP8H);
                            return
                        }
                    } else {
                        if (rM3x == 10) {
                            bMp3x();
                            return
                        } else if (rM3x == 100) {
                            buB9s(bP8H);
                            return
                        } else if (rM3x == 11) {
                            ces8k();
                            return
                        } else {
                            a6g.y7r(this.Ed6X, "z-pause z-loading");
                            if (wK4O == this.Ed6X && eA9r.play && !eA9r.ended) {
                                this.Wl2x.btG9x()
                            } else {
                                this.Ed6X = wK4O;
                                this.Wl2x.ceI8A(bP8H)
                            }
                            return
                        }
                    }
                } else if (this.Wc2x == 70) {
                    if (a6g.bE8w(j7c, "z-noprogram")) {
                        n7g.Z7S.J7C({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.cer8j()
            }
        }
    }();
    b7g.cer8j = function () {
        var ik0x = this.S7L.eO9F(this.Wj2x),
            ty3x = l7e.bRh5m(this.Wc2x, ik0x);
        ty3x.title = ty3x.title || "";
        ty3x.author = ty3x.author || "";
        ty3x.picUrl = ty3x.picUrl || "";
        ty3x.authors = ty3x.authors || "";
        if (this.Wc2x == 70) {
            this.Wj2x = this.Wj2x.slice(0, -4)
        }
        this.z7s("onfinish", {
            id: this.Wj2x,
            type: this.Wc2x,
            data: ty3x
        })
    };
    b7g.xt4x = function (d7e) {
        var i7b = d7e.data;
        if (!this.Ed6X) {
            return
        }
        switch (d7e.action) {
            case "play":
                a6g.fo9f(this.Ed6X, "z-pause z-play", "z-loading");
                break;
            case "pause":
            case "ended":
                a6g.y7r(this.Ed6X, "z-pause z-loading");
                break;
            case "error":
                n7g.Z7S.J7C({
                    type: 2,
                    tip: "试听遇到问题，播放失败"
                });
                a6g.y7r(this.Ed6X, "z-pause z-loading");
                break;
            case "playing":
                a6g.fo9f(this.Ed6X, "z-loading", "z-pause");
                break;
            case "waiting":
                a6g.fo9f(this.Ed6X, "z-pause", "z-loading");
                break
        }
    };
    b7g.ceq8i = function (d7e) {
        if (d7e.result.code == 407) {
            this.Xw3x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.Xw3x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b7g.bMq3x = function (d7e) {
        if (!this.wL4P || d7e.index < 0 || d7e.index > 5) {
            return
        }
        this.Wl2x.btG9x();
        var bi8a = Xr3x[d7e.index],
            e7d = NEJ.X({}, this.sJ3x);
        e7d.cache = {
            klass: q7j.Iu8m,
            clear: true,
            onerror: this.ceq8i.f7c(this)
        };
        e7d.cache.lkey = "search-publish-" + bi8a.type + "-" + this.wL4P;
        e7d.item = {
            klass: bi8a.item,
            getRestrictLevel: l7e.qc2x,
            dur2time: l7e.lC1x
        };
        if (!e7d.cache.data) {
            e7d.cache.data = {}
        }
        e7d.cache.data.s = this.wL4P;
        e7d.cache.data.type = bi8a.type;
        e7d.cache.data.isPub = true;
        if (bi8a.type == 1) {
            e7d.cache.data.hlpretag = '<span class="s-fc7">';
            e7d.cache.data.hlposttag = "</span>"
        }
        e7d.onemptylist = this.cem8e.f7c(this, this.wL4P);
        if (!!this.Il7e) this.S7L.wm4q(this.Il7e);
        if (!!this.dM9D) {
            this.dM9D = this.dM9D.T7M()
        }
        this.dM9D = I7B.nk1x.A7t(e7d);
        this.Il7e = e7d.cache.lkey
    };
    b7g.rb3x = function (d7e) {
        d7e.value = a6g.ij0x("m-publish-search-loading")
    };
    b7g.cem8e = function (L7E, d7e) {
        a6g.dA9r(d7e.parent, "m-publish-emtpy-message", {
            key: L7E
        });
        d7e.stopped = true
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        dz9q = c7f("nej.p"),
        v7o = c7f("nej.j"),
        cd8V = c7f("nej.ut"),
        bC8u = c7f("nej.ui"),
        x7q = c7f("nm.w"),
        b7g, K7D;
    var cec8U = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    x7q.In8f = NEJ.C();
    b7g = x7q.In8f.N7G(bC8u.eo9f);
    var gs0x = a6g.ey9p("m-wgt-receiverInput");
    var ceb8T = a6g.ey9p("m-wgt-receiverList");
    var iX0x = a6g.uK4O(cec8U);
    var cea8S = a6g.ey9p('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b7g.cv8n = function (e7d) {
        this.be8W = [];
        this.xN4R = e7d.receiver || null;
        this.cdZ8R = e7d.unique || false;
        this.gH0x = e7d.err;
        this.bMm3x(this.bMj3x, e7d.uid);
        this.cD8v(e7d)
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.VL2x();
        this.VK2x();
        this.Yf3x();
        if (e7d.receiver) this.bvt9k(e7d.receiver.nickname, e7d.receiver.userId);
        a6g.ba7T(this.Ee6Y, "display", "block");
        a6g.ba7T(this.bvv9m, "cursor", "text");
        a6g.ba7T(this.Ee6Y, "cursor", "text")
    };
    b7g.cf8X = function () {
        var i7b = this.bMi3x();
        this.ce8W = a6g.jz0x(a6g.cc8U(gs0x, {
            receiver: this.xN4R,
            users: i7b
        }));
        this.mt1x = iX0x
    };
    b7g.bV8N = function () {
        this.ch8Z();
        var bO8G = a6g.E7x(this.o7h, "j-flag");
        var hy0x = a6g.E7x(this.o7h, "j-item");
        this.bvv9m = bO8G[0];
        this.bMg3x = bO8G[1];
        this.en9e = bO8G[2];
        this.Ee6Y = bO8G[3];
        this.Yl3x = bO8G[4];
        this.bvK9B = bO8G[5];
        this.fP9G = hy0x;
        a6g.w7p(this.fP9G[0], "j-selected");
        h7a.s7l(this.en9e, "keyup", this.bvM9D.f7c(this));
        h7a.s7l(this.en9e, "keydown", this.Vr2x.f7c(this));
        h7a.s7l(this.en9e, "focus", this.lv1x.f7c(this));
        h7a.s7l(this.Yl3x, "click", this.cdQ8I.f7c(this));
        h7a.s7l(this.bvv9m, "click", this.cdP8H.f7c(this));
        h7a.s7l(document.body, "click", this.oY2x.f7c(this));
        h7a.s7l(this.en9e, "input", this.eQ9H.f7c(this));
        h7a.s7l(this.en9e, "blur", this.ow2x.f7c(this))
    };
    b7g.bB8t = function (e7d) {
        h7a.mL1x(document.body, "click", this.oY2x.f7c(this));
        this.bG8y();
        this.Yf3x();
        this.cdO8G();
        this.oY2x()
    };
    b7g.bvM9D = function (d7e) {
        h7a.bf8X(d7e);
        var jW1x = d7e.keyCode || d7e.which;
        var bp8h = this.en9e.value;
        var bs8k = this.fP9G.length;
        var sH3x = a6g.E7x(this.o7h, "j-selected")[0];
        switch (jW1x) {
            case 13:
                var lt1x = a6g.hb0x(sH3x, "data-username");
                var hS0x = a6g.hb0x(sH3x, "data-userId");
                this.bvt9k(lt1x, hS0x);
                this.oY2x();
                this.en9e.value = "";
                break;
            case 38:
                var r7k = a6g.hb0x(sH3x, "data-index") - 1 < 0 ? bs8k - 1 : a6g.hb0x(sH3x, "data-index") - 1;
                a6g.y7r(sH3x, "j-selected");
                a6g.w7p(this.fP9G[r7k], "j-selected");
                break;
            case 40:
                var r7k = parseInt(a6g.hb0x(sH3x, "data-index")) + 1 >= bs8k ? 0 : parseInt(a6g.hb0x(sH3x, "data-index")) + 1;
                a6g.y7r(sH3x, "j-selected");
                a6g.w7p(this.fP9G[r7k], "j-selected");
                break;
            default:
                this.xT4X()
        }
    };
    b7g.Vr2x = function (d7e) {
        var jW1x = d7e.keyCode || d7e.which;
        var bp8h = this.en9e.value;
        var r7k = a6g.E7x(this.o7h, "j-receiver").length - 1;
        if (jW1x === 8 && bp8h === "") this.cdN8F(r7k)
    };
    b7g.eQ9H = function (d7e) {
        var bp8h = this.en9e.value;
        if (bp8h.length > 10) {
            this.en9e.value = bp8h.substring(0, 10);
            return
        }
        dz9q.ds9j.browser == "ie" && dz9q.ds9j.version < "7.0" ? setTimeout(this.bwo0x.f7c(this), 0) : this.bwo0x();
        this.VK2x()
    };
    b7g.lv1x = function () {
        if (this.be8W[0]) this.xT4X();
        else this.bMm3x(this.cdM8E);
        a6g.ba7T(this.Ee6Y, "display", "none")
    };
    b7g.ow2x = function () {
        var bs8k = a6g.E7x(this.o7h, "j-receiver").length;
        if (this.en9e.value.trim() == "" && bs8k <= 0) a6g.ba7T(this.Ee6Y, "display", "block")
    };
    b7g.bvt9k = function (lt1x, hS0x) {
        var Lo8g = this.Vi2x();
        if (Lo8g.length >= 10) {
            this.ea9R();
            return
        }
        var bc7V;
        for (bc7V = 0; bc7V < Lo8g.length; bc7V++) {
            if (Lo8g[bc7V] == hS0x) {
                this.oY2x();
                return
            }
        }
        if (!lt1x || !hS0x) return;
        var g7b = a6g.dD9u(a6g.jz0x(a6g.cc8U(cea8S, {
            username: lt1x,
            userId: hS0x
        })));
        var bH8z = this.bMg3x.parentNode;
        if (this.cdZ8R) {
            this.Yf3x()
        }
        bH8z.insertBefore(g7b, this.bMg3x);
        this.en9e.value = "";
        var bs8k = a6g.E7x(this.o7h, "j-receiver").length;
        if (bs8k > 1) a6g.ba7T(this.Ee6Y, "display", "none");
        this.bwo0x();
        this.VK2x()
    };
    b7g.Yf3x = function () {
        var Vh2x = a6g.E7x(this.o7h, "j-receiver");
        var bc7V;
        if (Vh2x.length > 0) {
            for (bc7V = 0; bc7V < Vh2x.length; bc7V++) {
                a6g.cO8G(Vh2x[bc7V], false)
            }
        }
    };
    b7g.cdO8G = function () {
        this.en9e.value = ""
    };
    b7g.cdN8F = function (r7k) {
        this.ea9R(!0);
        var Vh2x = a6g.E7x(this.o7h, "j-receiver");
        a6g.cO8G(Vh2x[r7k], false);
        this.VK2x()
    };
    b7g.xT4X = function () {
        var bp8h = this.en9e.value;
        var bv8n = bp8h.trim().toLowerCase();
        var i7b;
        bv8n = bv8n.replace(/\[/g, "\\[");
        bv8n = bv8n.replace(/\]/g, "\\]");
        i7b = this.bMi3x(bv8n);
        this.cdH8z(i7b)
    };
    b7g.oY2x = function (d7e) {
        a6g.ba7T(this.Yl3x, "display", "none")
    };
    b7g.ea9R = function (dO9F) {
        if (dO9F && this.gH0x) {
            a6g.ba7T(this.gH0x, "display", "none");
            return
        }
        if (this.gH0x) a6g.ba7T(this.gH0x, "display", "block")
    };
    b7g.cdQ8I = function (d7e) {
        h7a.co8g(d7e);
        var bQ8I = d7e.target || d7e.srcElement;
        if (a6g.bE8w(bQ8I, "j-flag")) return;
        var bH8z = bQ8I.nodeName.toLowerCase() == "a" ? bQ8I.parentNode : bQ8I.parentNode.parentNode;
        var lt1x = a6g.hb0x(bH8z, "data-username");
        var hS0x = a6g.hb0x(bH8z, "data-userId");
        this.bvt9k(lt1x, hS0x);
        this.oY2x();
        a6g.ba7T(this.Ee6Y, "display", "none")
    };
    b7g.cdP8H = function (d7e) {
        h7a.bf8X(d7e);
        var bQ8I = d7e.target || d7e.srcElement;
        if (a6g.bE8w(bQ8I.parentNode, "j-receiver")) {
            a6g.cO8G(bQ8I.parentNode, false);
            this.ea9R(!0);
            this.VK2x()
        } else this.en9e.focus()
    };
    b7g.bwo0x = function () {
        this.bvK9B.innerHTML = this.en9e.value;
        var cG8y = this.bvK9B.offsetWidth + 2;
        a6g.ba7T(this.en9e, "width", cG8y + "px")
    };
    b7g.VK2x = function () {
        var Yy3x = a6g.ic0x(this.en9e, this.o7h).y;
        var bMb3x = Math.floor((Yy3x - 8) / 27);
        if (bMb3x < 0) return;
        a6g.ba7T(this.bvv9m, "height", 19 + bMb3x * 29 + "px")
    };
    b7g.VL2x = function () {
        var qp2x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < qp2x.length; i++) {
            a6g.ba7T(this.bvK9B, qp2x[i], a6g.di9Z(this.en9e, qp2x[i]))
        }
    };
    b7g.bMm3x = function (cC8u, D7w) {
        var do9f = D7w ? D7w : window.GUser.userId;
        var Y7R = "/api/user/getfollows/" + do9f;
        var gp0x = v7o.bk8c(Y7R, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cC8u.f7c(this),
            onerror: function (i7b) {
                this.be8W = []
            },
            onbeforerequest: function (i7b) {}
        })
    };
    b7g.bMj3x = function (i7b) {
        this.be8W = JSON.parse(i7b).follow || [];
        var D7w = GUser.userId;
        for (var i = 0; i < this.be8W.length; i++) {
            if (this.be8W[i].userId == D7w) {
                this.be8W.splice(i, 1);
                continue
            }
            this.be8W[i].avatarUrl = this.be8W[i].avatarUrl + "?param=30y30"
        }
    };
    b7g.cdM8E = function (i7b) {
        if (this.be8W[0]) return;
        this.bMj3x(i7b);
        this.xT4X()
    };
    b7g.bMi3x = function (bv8n) {
        var bv8n = bv8n ? bv8n : "";
        this.be8W = this.be8W[0] ? this.be8W : [];
        var bs8k = this.be8W.length;
        var UZ2x = this.Vi2x();
        var ud3x = [];
        var UY2x, UW2x, bwM0x;
        if (!this.be8W[0]) return ud3x;
        for (var bc7V = 0; bc7V < bs8k; bc7V++) {
            bwM0x = false;
            for (var v7o = 0; v7o < UZ2x.length; v7o++) {
                if (this.be8W[bc7V].userId == UZ2x[v7o]) {
                    bwM0x = true;
                    break
                }
            }
            if (bwM0x) continue;
            UY2x = this.be8W[bc7V].nickname.toLowerCase().search(bv8n);
            UW2x = this.be8W[bc7V].py ? this.be8W[bc7V].py.toLowerCase().search(bv8n) : -1;
            if (UY2x !== -1 || UW2x != -1) ud3x.push(this.be8W[bc7V])
        }
        return ud3x
    };
    b7g.cdH8z = function (i7b) {
        a6g.dA9r(this.Yl3x, ceb8T, {
            users: i7b
        });
        a6g.w7p(a6g.E7x(this.o7h, "j-item")[0], "j-selected");
        this.fP9G = a6g.E7x(this.o7h, "j-item");
        a6g.ba7T(this.Yl3x, "display", "block")
    };
    b7g.Vi2x = function () {
        var ud3x = a6g.E7x(this.o7h, "j-receiver") || [];
        var hS0x = [];
        for (var i = 0; i < ud3x.length; i++) {
            hS0x.push(a6g.hb0x(ud3x[i], "data-id"))
        }
        return hS0x
    };
    b7g.cJJ5O = function () {
        var hS0x = this.Vi2x();
        var ud3x = [];
        for (var i = 0; i < hS0x.length; i++) {
            for (var j = 0; j < this.be8W.length; j++) {
                if (hS0x[i] == this.be8W[j].userId) ud3x.push(this.be8W[j])
            }
        }
        return ud3x
    };
    b7g.cdy8q = function () {
        this.Yf3x()
    };
    x7q.In8f.J7C = function (e7d) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n7g.pq2x.J7C({
                title: "登录"
            });
            return
        }
        e7d = e7d || {};
        if (e7d.parent === undefined) e7d.parent = document.body;
        !!this.fr9i && this.fr9i.T7M();
        this.fr9i = this.A7t(e7d)
    };
    x7q.In8f.bq8i = function () {
        !!this.fr9i && this.fr9i.T7M()
    };
    x7q.In8f.Eq6k = function () {
        return this.oY2x()
    };
    x7q.In8f.cJK5P = function () {
        return this.xT4X()
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        k7d = c7f("nej.u"),
        h7a = c7f("nej.v"),
        l7e = c7f("nm.x"),
        n7g = c7f("nm.l"),
        b7g, K7D;
    n7g.LP9G = NEJ.C();
    b7g = n7g.LP9G.N7G(n7g.bkJ6D);
    K7D = n7g.LP9G.cr8j;
    b7g.bm8e = function () {
        var Er6l;
        var cdn8f = function (C7v, L7E) {
            Er6l = Er6l || [];
            if (L7E != "18") Er6l.push({
                key: L7E,
                value: C7v
            })
        };
        return function (e7d) {
            this.bn8f(e7d);
            if (e7d.upwards) {
                a6g.w7p(this.o7h, "m-emts-up")
            } else {
                a6g.y7r(this.o7h, "m-emts-up")
            }
            if (e7d.rightwards) {
                a6g.w7p(this.o7h, "m-emts-right")
            } else {
                a6g.y7r(this.o7h, "m-emts-right")
            }
            if (!Er6l) {
                var bz8r = l7e.crw1x();
                k7d.eH9y(bz8r, cdn8f)
            }
            var bs8k = Er6l.length;
            Er6l.splice(bs8k - 2, 0, {
                key: "18",
                value: "186"
            });
            this.YE3x = Er6l;
            this.cdm8e = !!e7d.autoHide
        }
    }();
    b7g.cf8X = function () {
        this.ce8W = "ntp-portrait"
    };
    b7g.bV8N = function () {
        this.ch8Z();
        var j7c = a6g.E7x(this.o7h, "j-flag");
        this.bL8D = j7c[0];
        this.cdl8d = j7c[1];
        this.cdk8c = j7c[2];
        this.cdj8b = j7c[3];
        h7a.s7l(this.bL8D, "click", this.zD5I.f7c(this));
        h7a.s7l(this.cdl8d, "click", this.Ev6p.f7c(this, 1));
        h7a.s7l(this.cdj8b, "click", this.Ev6p.f7c(this, 2))
    };
    b7g.bxz0x = function (r7k) {
        this.YF3x = r7k;
        var bj8b = (r7k - 1) * 50;
        var j7c = this.YE3x.slice(bj8b, Math.min(bj8b + 50, this.YE3x.length));
        this.bL8D.innerHTML = a6g.cc8U("jst-portrait", {
            plist: j7c
        }, {
            purl: l7e.bRz5E
        });
        this.cdk8c.innerText = r7k + "/" + Math.ceil(this.YE3x.length / 50)
    };
    b7g.Ev6p = function (r7k) {
        var cdi8a = Math.ceil(this.YE3x.length / 50);
        if (r7k == 1 && this.YF3x == 1 || r7k == 2 && this.YF3x == cdi8a) return;
        r7k == 1 ? this.bxz0x(this.YF3x - 1) : this.bxz0x(this.YF3x + 1)
    };
    b7g.zD5I = function (d7e) {
        var G7z = h7a.X7Q(d7e, "d:text");
        if (!G7z) return;
        var d7e = {
            url: a6g.t7m(G7z, "url"),
            text: a6g.t7m(G7z, "text")
        };
        this.z7s("onselect", d7e);
        if (this.cdm8e && !d7e.stopped) {
            this.bq8i()
        }
    };
    b7g.J7C = function () {
        K7D.J7C.call(this);
        this.bxz0x(1)
    }
})();
(function () {
    var c7f = NEJ.P,
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        dz9q = c7f("nej.p"),
        bg8Y = c7f("nej.h"),
        I7B = c7f("nej.ut"),
        kw1x = /^[#?]+/,
        EP7I = /#(.*?)$/,
        zE5J = window,
        bxI0x = !history.pushState || dz9q.Ku8m.android || !history.auto;
    var YI3x = function (Y7R, bxN0x) {
        zE5J.history[!bxN0x ? "pushState" : "replaceState"](null, document.title, Y7R)
    };
    var YJ3x = function () {
        return location.parse(zE5J.location.href)
    };
    YI3x = YI3x.eL9C(function (d7e) {
        if (!bxI0x) return;
        var bh8Z = d7e.args;
        d7e.stopped = !0;
        Y7R = bh8Z[0].replace(kw1x, "");
        !bh8Z[1] ? zE5J.location.hash = Y7R : zE5J.location.replace("#" + Y7R)
    });
    YJ3x = YJ3x.eL9C(function (d7e) {
        if (!bxI0x) return;
        d7e.stopped = !0;
        var dR9I = EP7I.test(zE5J.location.href) ? RegExp.$1 : "";
        d7e.value = location.parse(dR9I.replace(kw1x, ""))
    });
    location.redirect = function (Y7R, bxN0x) {
        YI3x(Y7R, bxN0x);
        return this
    };
    location.active = function () {
        var ej9a, Y7R, jQ1x, dd8V, QV1x;
        var bxP0x = function (hz0x) {
            if (!!dd8V) {
                dd8V = !1;
                return
            }
            var d7e = {
                oldValue: jQ1x,
                newValue: YJ3x()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h7a.z7s(location, "beforeurlchange", d7e);
                if (d7e.stopped) {
                    if (!!jQ1x) {
                        dd8V = !0;
                        YI3x(jQ1x.href, !0)
                    }
                    return
                }
            }
            Y7R = zE5J.location.href;
            jQ1x = d7e.newValue;
            h7a.z7s(location, "urlchange", jQ1x);
            bg8Y.bxG0x(jQ1x.href)
        };
        var bLQ3x = function () {
            if (Y7R != zE5J.location.href) bxP0x();
            ej9a = requestAnimationFrame(bLQ3x)
        };
        return function (bK8C) {
            if (!!QV1x) return this;
            QV1x = !0;
            zE5J = bK8C || window;
            if (bxI0x && "onhashchange" in window && dz9q.nG2x.trident2) {
                h7a.s7l(zE5J, "hashchange", bxP0x);
                bxP0x()
            } else if (!ej9a) {
                ej9a = requestAnimationFrame(bLQ3x)
            }
            return this
        }
    }();
    location.parse = function () {
        var gM0x = /^https?:\/\/.*?\//i,
            kw1x = /[?#]/;
        return function (Y7R) {
            var m7f = {
                href: Y7R
            };
            Y7R = (Y7R || "").replace(gM0x, "/").split(kw1x);
            var cA8s = 1;
            if (Y7R[0] == "/" && (Y7R[1] || "").indexOf("/") == 0) cA8s = 2;
            m7f.path = Y7R.splice(0, cA8s).join("?");
            m7f.query = k7d.hf0x(Y7R.join("&"));
            return m7f
        }
    }();
    location.same = function (Y7R) {
        return YJ3x().href == Y7R
    };
    I7B.fK9B.A7t({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        gC0x = c7f("nm.ut");
    gC0x.vt4x = function (ev9m) {
        var hu0x = {
            text: "",
            start: 0,
            end: 0
        };
        if (ev9m.setSelectionRange) {
            hu0x.start = ev9m.selectionStart;
            hu0x.end = ev9m.selectionEnd;
            hu0x.text = hu0x.start != hu0x.end ? ev9m.value.substring(hu0x.start, hu0x.end) : ""
        } else if (document.selection) {
            var i, YN3x = document.selection.createRange(),
                zG5L = document.body.createTextRange();
            zG5L.moveToElementText(ev9m);
            hu0x.text = YN3x.text;
            hu0x.bookmark = YN3x.getBookmark();
            for (i = 0; zG5L.compareEndPoints("StartToStart", YN3x) < 0 && YN3x.moveStart("character", -1) !== 0; i++) {
                if (ev9m.value.charAt(i) == "\n") {
                    i++
                }
            }
            hu0x.start = i;
            hu0x.end = hu0x.text.length + hu0x.start
        }
        return hu0x
    };
    gC0x.YP3x = function (ev9m, hu0x) {
        var zG5L;
        if (!hu0x) {
            hu0x = {
                text: "",
                start: 0,
                end: 0
            }
        }
        ev9m.focus();
        if (ev9m.setSelectionRange) {
            ev9m.setSelectionRange(hu0x.start, hu0x.end)
        } else if (ev9m.createTextRange) {
            zG5L = ev9m.createTextRange();
            if (ev9m.value.length === hu0x.start) {
                zG5L.collapse(false);
                zG5L.select()
            } else {
                zG5L.moveToBookmark(hu0x.bookmark);
                zG5L.select()
            }
        }
    };
    gC0x.Mw9n = function (ev9m, hu0x, cL8D) {
        var hu0x = hu0x || {
            text: "",
            start: 0,
            end: 0
        };
        var byh0x, bLP3x, zG5L, Uy2x, bLO3x, bLL3x, EG6A;
        this.YP3x(ev9m, hu0x);
        if (ev9m.setSelectionRange) {
            byh0x = ev9m.value;
            bLP3x = byh0x.substring(0, hu0x.start) + cL8D + byh0x.substring(hu0x.end);
            bLO3x = bLL3x = hu0x.start + cL8D.length;
            EG6A = ev9m.scrollTop;
            ev9m.value = bLP3x;
            if (ev9m.scrollTop != EG6A) {
                ev9m.scrollTop = EG6A
            }
            ev9m.setSelectionRange(bLO3x, bLL3x)
        } else if (ev9m.createTextRange) {
            Uy2x = document.selection.createRange();
            Uy2x.text = cL8D;
            Uy2x.setEndPoint("StartToEnd", Uy2x);
            Uy2x.select()
        }
        h7a.z7s(ev9m, "keyup")
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        dz9q = c7f("nej.p"),
        k7d = c7f("nej.u"),
        cd8V = c7f("nej.ut"),
        x7q = c7f("nm.w"),
        gC0x = c7f("nm.ut"),
        b7g;
    x7q.bLI3x = NEJ.C();
    b7g = x7q.bLI3x.N7G(cd8V.cH8z);
    b7g.cv8n = function (e7d) {
        this.cD8v(e7d)
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.gw0x = e7d.txt;
        this.EI6C = e7d.sgtsContainer;
        this.bLH3x = e7d.sgtsList[0];
        this.YY3x = e7d.sgtsItem;
        this.oU2x = e7d.rangeData;
        this.MI9z = e7d.atIndex;
        a6g.w7p(this.YY3x[0], "selected-item");
        this.EL6F()
    };
    b7g.bB8t = function () {
        this.bG8y();
        h7a.mL1x(document.body, "keyup", this.bzk0x.f7c(this));
        h7a.mL1x(document.body, "click", this.bLE3x.f7c(this))
    };
    b7g.EL6F = function () {
        this.bX8P([
            [document.body, "keyup", this.bzk0x.f7c(this)],
            [document.body, "click", this.bLE3x.f7c(this)],
            [this.gw0x, "keydown", this.bLD3x.f7c(this)],
            [this.gw0x, "keypress", this.bLD3x.f7c(this)],
            [this.bLH3x, "click", this.bLC3x.f7c(this)],
            [this.bLH3x, "mouseover", this.EO7H.f7c(this)]
        ])
    };
    b7g.EO7H = function (d7e) {
        var bQ8I = h7a.X7Q(d7e);
        var p7i = a6g.E7x(this.EI6C, "selected-item");
        if (a6g.bE8w(bQ8I, "j-sgt")) {
            a6g.y7r(p7i[0], "selected-item");
            a6g.w7p(bQ8I, "selected-item")
        }
    };
    b7g.bzk0x = function (d7e) {
        var p7i = a6g.E7x(this.EI6C, "selected-item");
        var bs8k = this.YY3x.length;
        var jW1x = d7e.keyCode || d7e.which;
        var r7k, i7b;
        switch (jW1x) {
            case 38:
                r7k = a6g.hb0x(p7i[0], "data-index") - 1 < 0 ? bs8k - 1 : a6g.hb0x(p7i[0], "data-index") - 1;
                a6g.y7r(p7i[0], "selected-item");
                a6g.w7p(this.YY3x[r7k], "selected-item");
                break;
            case 40:
                r7k = parseInt(a6g.hb0x(p7i[0], "data-index")) + 1 >= bs8k ? 0 : parseInt(a6g.hb0x(p7i[0], "data-index")) + 1;
                a6g.y7r(p7i[0], "selected-item");
                a6g.w7p(this.YY3x[r7k], "selected-item");
                break;
            case 13:
                this.bLC3x(d7e);
                break;
            case 27:
                this.oY2x();
                break;
            case 32:
                var bp8h = this.gw0x.value;
                var r7k = gC0x.vt4x(this.gw0x);
                if (bp8h.charAt(r7k.start - 1) !== " ") return;
                this.oY2x();
                break
        }
    };
    b7g.bLD3x = function (d7e) {
        var jW1x = d7e.keyCode || d7e.which;
        if (jW1x === 13 || jW1x === 38 || jW1x === 40) {
            h7a.co8g(d7e);
            d7e.keyCode = 0;
            d7e.which = 0;
            d7e.returnvalue = false
        }
    };
    b7g.bLE3x = function (d7e) {
        var bQ8I = d7e.target || d7e.srcElement;
        if (bQ8I === this.gw0x) return;
        this.oY2x()
    };
    b7g.bLC3x = function (d7e) {
        h7a.bf8X(d7e);
        var p7i = a6g.E7x(this.EI6C, "selected-item")[0];
        var sH3x = d7e.target || d7e.srcElement;
        var u7n = d7e.type;
        if (a6g.bE8w(sH3x, "lst")) return;
        if (u7n == "click") {
            a6g.y7r(p7i, "selected-item");
            a6g.w7p(sH3x, "selected-item")
        } else sH3x = p7i;
        var i7b = sH3x.innerHTML + " ";
        this.oY2x();
        var hu0x = this.oU2x;
        hu0x.start = this.MI9z + 1;
        if (dz9q.ds9j.browser == "ie" && dz9q.ds9j.version < "9.0") {
            this.gw0x.value = this.gw0x.value.substring(0, hu0x.start) + this.gw0x.value.substring(hu0x.end, this.gw0x.value.length);
            hu0x.end = hu0x.start
        }
        gC0x.Mw9n(this.gw0x, hu0x, i7b);
        h7a.z7s(this.gw0x, "keyup")
    };
    b7g.oY2x = function (d7e) {
        if (!!this.EI6C) a6g.ba7T(this.EI6C, "display", "none");
        this.T7M()
    };
    b7g.xT4X = function (d7e) {
        if (!!this.EI6C) a6g.ba7T(this.EI6C, "display", "block")
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        x7q = c7f("nm.w"),
        cd8V = c7f("nej.ut"),
        bC8u = c7f("nej.ui"),
        b7g;
    var ccM8E = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var ccL8D = a6g.ey9p("m-wgt-atlist");
    var iX0x = a6g.uK4O(ccM8E);
    x7q.bLB3x = NEJ.C();
    b7g = x7q.bLB3x.N7G(bC8u.eo9f);
    b7g.cv8n = function (e7d) {
        this.gb0x = {};
        this.cD8v()
    };
    b7g.bm8e = function (e7d) {
        this.gb0x.txt = a6g.B7u(e7d.target);
        this.gb0x.data = e7d.data;
        this.gb0x.offset = e7d.offset;
        this.gb0x.rangeData = e7d.rangeData;
        this.gb0x.atIndex = e7d.atIndex;
        this.ccJ8B(e7d);
        this.bn8f(e7d);
        this.gb0x.sgtsContainer = this.o7h;
        this.gb0x.sgtsList = a6g.E7x(this.o7h, "lst");
        this.gb0x.sgtsItem = a6g.E7x(this.o7h, "f-thide");
        this.Pe0x(e7d);
        this.ccE8w = x7q.bLI3x.A7t(this.gb0x)
    };
    b7g.bB8t = function (e7d) {
        this.bG8y();
        this.ccE8w.T7M()
    };
    b7g.cf8X = function () {
        this.mt1x = iX0x
    };
    b7g.bV8N = function () {
        this.ch8Z()
    };
    b7g.ccJ8B = function (e7d) {
        this.o7h = a6g.dD9u(a6g.jz0x(a6g.cc8U(ccL8D, e7d.data)))
    };
    b7g.Pe0x = function (e7d) {
        var bLy3x = a6g.E7x(this.o7h, "selected-item")[0];
        if (bLy3x) a6g.y7r(bLy3x, "selected-item");
        var db8T = e7d.offset.x + "px";
        var hO0x = e7d.offset.y + "px";
        a6g.ba7T(this.o7h, "left", db8T);
        a6g.ba7T(this.o7h, "top", hO0x)
    }
})();
(function () {
    var c7f = NEJ.P,
        v7o = c7f("nej.j"),
        gC0x = c7f("nm.ut");
    gC0x.bLw3x = function (bp8h) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var dh9Y = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var MX9O = bp8h.match(dh9Y) || [];
        for (var bc7V = 0; bc7V < MX9O.length; bc7V++) {
            MX9O[bc7V] = MX9O[bc7V].split("@")[1]
        }
        MX9O = MX9O.reverse();
        var hS0x = GUser.userId;
        var ccx8p = v7o.tV3x("mentioners" + hS0x) || [];
        var kh1x = MX9O.concat(ccx8p);
        if (kh1x.length > 10) kh1x = kh1x.slice(0, 10);
        v7o.uM4Q("mentioners" + hS0x, kh1x)
    };
    gC0x.ccv8n = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var hS0x = GUser.userId;
        return v7o.tV3x("mentioners" + hS0x) || []
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        dz9q = c7f("nej.p"),
        v7o = c7f("nej.j"),
        k7d = c7f("nej.u"),
        cd8V = c7f("nej.ut"),
        x7q = c7f("nm.w"),
        gC0x = c7f("nm.ut"),
        l7e = c7f("nm.x"),
        b7g;
    var FullscreenApi = l7e.HA7t || {};
    x7q.bLv3x = NEJ.C();
    b7g = x7q.bLv3x.N7G(cd8V.cH8z);
    b7g.cv8n = function (e7d) {
        this.cD8v(e7d);
        this.bLu3x()
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.gw0x = e7d.txt;
        this.o7h = e7d.body;
        this.bLt3x = e7d.before;
        this.Sb1x = e7d.flag;
        this.cco8g = e7d.after;
        this.rh3x = [];
        if (dz9q.ds9j.browser != "ie") {
            setTimeout(function () {
                this.mk1x()
            }.f7c(this), 0)
        }
        this.EL6F()
    };
    b7g.bB8t = function () {
        this.bG8y();
        if (this.vd4h) this.vd4h.T7M();
        delete this.vd4h
    };
    b7g.EL6F = function () {
        this.bX8P([
            [this.gw0x, "keyup", this.bLq3x.f7c(this, this.gw0x)],
            [this.gw0x, "click", this.bLq3x.f7c(this, this.gw0x)],
            [this.gw0x, "focus", this.mk1x.f7c(this)]
        ])
    };
    b7g.mk1x = function (d7e) {
        this.oU2x = gC0x.vt4x(this.gw0x)
    };
    b7g.bLu3x = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var do9f = window.GUser.userId;
        var Y7R = "/api/user/getfollows/" + do9f;
        var gp0x = v7o.bk8c(Y7R, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (i7b) {
                window.GFollowers = JSON.parse(i7b).follow
            }.f7c(this),
            onerror: function (i7b) {},
            onbeforerequest: function (i7b) {}
        })
    };
    b7g.bLn3x = function (index) {
        var C7v = this.gw0x.value,
            bj8b, bgD5I, bgF5K, TR2x;
        this.bLt3x.innerHTML = k7d.dI9z(C7v.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var nc1x = a6g.E7x(this.bLt3x, "j-test");
        for (var bc7V = 0; bc7V < nc1x.length; bc7V++) {
            nc1x[bc7V].innerText = " "
        }
        this.Sb1x.innerHTML = C7v.charAt(index);
        this.cco8g.innerHTML = k7d.dI9z(C7v.substr(index + 1, C7v.length));
        TR2x = parseInt(a6g.di9Z(this.gw0x, "lineHeight"));
        a6g.ba7T(this.o7h, "display", "block");
        bgD5I = a6g.ic0x(this.Sb1x, this.o7h);
        bgF5K = a6g.ic0x(this.gw0x);
        a6g.ba7T(this.o7h, "display", "none");
        var db8T = bgD5I.x + bgF5K.x;
        var hO0x = bgD5I.y + bgF5K.y + TR2x;
        bj8b = {
            x: db8T,
            y: hO0x
        };
        this.cch8Z(bj8b)
    };
    b7g.bLq3x = function (ev9m, d7e) {
        h7a.co8g(d7e);
        var ev9m = ev9m;
        var C7v = ev9m.value;
        var bs8k = C7v.length;
        var r7k = gC0x.vt4x(ev9m).start;
        var bLm3x = 0;
        var jW1x = d7e.keyCode || d7e.which;
        var kh1x;
        this.oU2x = gC0x.vt4x(ev9m);
        var bLl3x = false;
        for (var i = 1; i < 20; i++) {
            kh1x = r7k - i;
            if (C7v.charAt(kh1x) === " ") break;
            if (C7v.charAt(kh1x) === "@") {
                bLl3x = true;
                this.MI9z = bLm3x = kh1x;
                break
            }
        }
        if (bLl3x && d7e.shiftKey === false && jW1x !== 38 && jW1x !== 40) {
            if (jW1x !== 27 && jW1x !== 13) {
                this.vd4h ? this.vd4h.T7M() : null;
                this.bLn3x(bLm3x)
            }
        } else if (jW1x !== 38 && jW1x !== 40 && d7e.keyCode !== 32) {
            this.vd4h ? this.vd4h.T7M() : null
        }
    };
    b7g.cch8Z = function (bj8b) {
        var bj8b = bj8b;
        var i7b = this.vc4g();
        var e7d = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bj8b,
            data: i7b,
            target: this.gw0x,
            rangeData: this.oU2x,
            atIndex: this.MI9z
        };
        this.vd4h ? this.vd4h.T7M() : null;
        this.vd4h = x7q.bLB3x.A7t(e7d)
    };
    b7g.vc4g = function () {
        var ccb8T = gC0x.vt4x(this.gw0x).start;
        var cca8S = this.MI9z + 1;
        var bLi3x = gC0x.ccv8n() || [];
        var bLg3x = [];
        var bv8n = this.gw0x.value.substring(cca8S, ccb8T).toLowerCase();
        bv8n = bv8n.replace(/\[/g, "\\[");
        bv8n = bv8n.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.rh3x = window.GFollowers[0] ? window.GFollowers : []
        } else this.rh3x = [];
        if (!this.rh3x[0]) this.bLu3x();
        for (var bc7V = 0; bc7V < bLi3x.length; bc7V++) {
            for (var v7o = 0; v7o < this.rh3x.length; v7o++) {
                if (this.rh3x[v7o].nickname == bLi3x[bc7V]) bLg3x.push(this.rh3x[v7o])
            }
        }
        this.rh3x = k7d.cuv2x(this.rh3x, bLg3x, {
            union: true,
            begin: true
        });
        var cbQ8I = this.rh3x.length;
        var bad3x = [];
        var UY2x, UW2x;
        if (!this.rh3x[0]) return {
            suggests: bad3x
        };
        for (var i = 0; i < cbQ8I; i++) {
            UY2x = this.rh3x[i].nickname.toLowerCase().search(bv8n);
            UW2x = this.rh3x[i].py ? this.rh3x[i].py.toLowerCase().search(bv8n) : -1;
            if (UY2x !== -1 || UW2x != -1) bad3x.push(this.rh3x[i]);
            if (bad3x.length === 10) break
        }
        return {
            suggests: bad3x
        }
    };
    b7g.TD2x = function () {
        var hu0x = this.oU2x || {
            text: "",
            start: 0,
            end: 0
        };
        h7a.z7s(this.gw0x, "focus");
        gC0x.Mw9n(this.gw0x, hu0x, "@");
        this.oU2x = gC0x.vt4x(this.gw0x);
        this.MI9z = hu0x.start;
        this.bLn3x(this.MI9z)
    };
    b7g.Eq6k = function () {
        if (this.vd4h) this.vd4h.T7M()
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        v7o = c7f("nej.j"),
        x7q = c7f("nm.w"),
        cd8V = c7f("nej.ut"),
        bC8u = c7f("nej.ui"),
        b7g;
    var cbP8H = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cbN8F = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gs0x = a6g.jz0x(cbN8F);
    var iX0x = a6g.uK4O(cbP8H);
    x7q.TB2x = NEJ.C();
    b7g = x7q.TB2x.N7G(bC8u.eo9f);
    b7g.cv8n = function (e7d) {
        this.gb0x = {};
        this.cD8v()
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d);
        this.gb0x.txt = a6g.B7u(e7d.target);
        this.VL2x();
        this.TA2x = x7q.bLv3x.A7t(this.gb0x)
    };
    b7g.bB8t = function (e7d) {
        this.bG8y();
        this.TA2x.T7M()
    };
    b7g.cf8X = function () {
        this.ce8W = gs0x;
        this.mt1x = iX0x
    };
    b7g.bV8N = function () {
        this.ch8Z();
        var j7c = a6g.df9W(a6g.B7u(this.o7h));
        this.gb0x.body = this.o7h;
        this.gb0x.before = j7c[0];
        this.gb0x.flag = j7c[1];
        this.gb0x.after = j7c[2]
    };
    b7g.VL2x = function () {
        var qp2x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < qp2x.length; i++) {
            if (qp2x[i] === "width" && a6g.di9Z(this.gb0x.txt, qp2x[i]) == "100%") {
                var cbM8E = this.gb0x.txt.offsetWidth;
                if (!cbM8E) {
                    setTimeout(function () {
                        a6g.ba7T(this.o7h, qp2x[i], this.gb0x.txt.offsetWidth + "px")
                    }.f7c(this), 300)
                } else {
                    a6g.ba7T(this.o7h, qp2x[i], this.gb0x.txt.offsetWidth + "px")
                }
                continue
            }
            a6g.ba7T(this.o7h, qp2x[i], a6g.di9Z(this.gb0x.txt, qp2x[i]))
        }
    };
    b7g.TD2x = function () {
        this.TA2x.TD2x()
    };
    b7g.Eq6k = function () {
        this.TA2x.Eq6k()
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        fD9u = NEJ.R,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        kX1x = c7f("nm.c"),
        R7K = {},
        b7g;
    if (!!kX1x.bhe5j) return;
    kX1x.bhe5j = NEJ.C();
    b7g = kX1x.bhe5j.N7G(I7B.cH8z);
    b7g.cv8n = function () {
        this.cD8v()
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d)
    };
    b7g.bB8t = function () {
        this.bG8y()
    };
    b7g.Fg7Z = function (fn9e, cC8u, baw3x) {
        if (R7K[fn9e]) {
            this.gl0x("register commonJST[" + fn9e + "] duplicate");
            return
        }
        if (!k7d.gO0x(cC8u)) {
            cC8u = ctl.comJST.cbJ8B(fn9e, cC8u, baw3x)
        }
        R7K[fn9e] = cC8u
    };
    b7g.cbI8A = function (baE3x) {
        if (k7d.ec9T(baE3x)) {
            k7d.bd7W(baE3x, function (p7i) {
                ctl.comJST.Fg7Z.apply(this, p7i)
            }, this)
        } else if (k7d.lY1x(baE3x)) {
            k7d.eH9y(baE3x, function (fA9r, L7E) {
                ctl.comJST.Fg7Z(L7E, fA9r)
            })
        }
    };
    b7g.cbJ8B = function (fn9e, uV4Z, baw3x) {
        uV4Z = uV4Z || {};
        NEJ.X(uV4Z, {
            comJST: this.nO2x
        });
        if (uV4Z.resetDataName && !k7d.ec9T(uV4Z.resetDataName)) {
            uV4Z.resetDataName = [uV4Z.resetDataName]
        }
        return function () {
            var i7b = arguments[0],
                jV1x = arguments[1];
            if (uV4Z.resetDataName) {
                var kh1x = {};
                for (var i = 0, ii = uV4Z.resetDataName.length; i < ii; i++) {
                    kh1x[uV4Z.resetDataName[i]] = arguments[i]
                }
                i7b = kh1x;
                jV1x = arguments[ii]
            }
            NEJ.X(i7b, uV4Z, ed9U);
            if (baw3x) {
                jV1x = jV1x || {};
                NEJ.X(jV1x, baw3x)
            }
            return a6g.cc8U(fn9e, i7b, jV1x)
        }
    };
    b7g.nO2x = function (fn9e) {
        if (!R7K[fn9e]) {
            this.gl0x("commonJST[" + fn9e + "] is unregister");
            return ""
        } else {
            return R7K[fn9e].apply(null, fD9u.slice.call(arguments, 1))
        }
    };
    b7g.dump = function () {
        return R7K
    };
    b7g.gl0x = function (cbG8y) {
        if (console && console.log) {
            console.log(cbG8y)
        }
    };
    var ed9U = function (fA9r, L7E) {
        return L7E == "resetDataName"
    };
    c7f("ctl").comJST = kX1x.bhe5j.fR9I();
    a6g.cDQ4U({
        comJST: c7f("ctl").comJST.nO2x
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        br8j = NEJ.F,
        fD9u = NEJ.R,
        a6g = c7f("nej.e"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        kX1x = c7f("nm.c"),
        l7e = c7f("nm.x"),
        R7K = {},
        b7g;
    if (!!kX1x.bho5t) return;
    kX1x.bho5t = NEJ.C();
    b7g = kX1x.bho5t.N7G(I7B.cH8z);
    b7g.cv8n = function () {
        this.cD8v();
        var e7d = {
            "com-mv-artists": function (gh0x, eg9X, Tg1x, bhq5v) {
                return a6g.cc8U("com-mv-artists", {
                    artists: gh0x,
                    clazz: eg9X,
                    boxClazz: bhq5v,
                    mark: Tg1x || function (cQ8I) {
                        return cQ8I
                    },
                    escape: k7d.dI9z,
                    comJST: ctl.comJST.nO2x
                })
            },
            "com-album-artists": function (gh0x, eg9X, Tg1x, bhq5v) {
                return a6g.cc8U("com-album-artists", {
                    artists: gh0x,
                    clazz: eg9X,
                    boxClazz: bhq5v,
                    mark: Tg1x || function (cQ8I) {
                        return cQ8I
                    },
                    escape: k7d.dI9z,
                    comJST: ctl.comJST.nO2x
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k7d.dI9z
            },
            "com-user-type": function (dp9g, eg9X, lK1x, xF4J, bLe3x) {
                return a6g.cc8U("com-user-type", {
                    x: dp9g,
                    clazz: eg9X || "",
                    clazz2: typeof bLe3x == "undefined" ? "icn" : bLe3x,
                    before: lK1x || "",
                    after: xF4J || "",
                    isEmptyObject: l7e.bRm5r
                })
            }
        };
        for (var D7w in e7d) {
            ctl.comJST.Fg7Z(D7w, e7d[D7w])
        }
    };
    b7g.bm8e = function (e7d) {
        this.bn8f(e7d)
    };
    b7g.bB8t = function () {
        this.bG8y()
    };
    c7f("ctl").comJSTUtil = kX1x.bho5t.fR9I()
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        a6g = c7f("nej.e"),
        dz9q = c7f("nej.p"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        v7o = c7f("nej.j"),
        x7q = c7f("nm.w"),
        gC0x = c7f("nm.ut"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        n7g = c7f("nm.l"),
        bhs5x = [2, 3],
        ef9W = ["sn", "db"],
        b7g, K7D, cbw8o = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video",
            41: "cloudvideo"
        },
        baU4Y = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频",
            cloudvideo: "视频"
        },
        bLa3x = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by ",
            cloudvideo: " by "
        },
        cbt8l = {
            0: 13,
            1: 17,
            3: 19,
            4: 18,
            5: 21,
            6: 24,
            14: 70,
            17: 20
        },
        Fp7i = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        },
        FullscreenApi = l7e.HA7t || {};
    n7g.pk2x = NEJ.C();
    b7g = n7g.pk2x.N7G(n7g.el9c);
    K7D = n7g.pk2x.cr8j;
    b7g.bm8e = function (e7d) {
        if (e7d.onclose === undefined) {
            e7d.onclose = this.bKR3x.f7c(this)
        }
        this.bn8f(e7d);
        this.zV5a = e7d.isPub;
        this.jn0x = e7d.rid || -1;
        this.eC9t = e7d.type || -1;
        this.bhM5R = e7d.purl;
        this.SX1x = e7d.name || "";
        this.SS1x = e7d.author || "";
        this.bhS5X = e7d.authors || "";
        this.baZ4d = e7d.actId;
        this.bbn4r = e7d.actName;
        this.bKP3x = e7d.title;
        this.bbo4s = {};
        this.cbd8V = e7d.mesg || "";
        this.cba8S = e7d.placeholder || "说点什么吧";
        this.bic5h = e7d.hideTip;
        this.caY8Q = e7d.videoJumpUrl;
        var j7c, fb9S = +(new Date);
        try {
            j7c = top.localCache.B7u("user") || {}
        } catch (e) {
            j7c = {}
        }
        for (var i = 0, j7c = j7c.bindings || [], cs8k; i < j7c.length; ++i) {
            cs8k = !j7c[i].tokenJsonStr ? null : JSON.parse(j7c[i].tokenJsonStr);
            if (!cs8k || cs8k.expires_in === undefined) continue;
            var bbq4u = parseInt(cs8k.expires_in),
                bbu4y = parseInt(j7c[i].refreshTime),
                caQ8I = (bbq4u + bbu4y) * 1e3 - 5 * 60 * 1e3;
            if (caQ8I > fb9S) this.bbo4s[j7c[i].type] = !0
        }
        this.xN4R = x7q.In8f.A7t({
            parent: this.bbw4A,
            err: this.bKF3x
        });
        if (this.hK0x) {
            this.hK0x.T7M()
        }
        this.hK0x = x7q.TB2x.A7t({
            parent: document.body,
            target: this.eB9s
        });
        if (this.eC9t == 24 || this.eC9t == 21 || this.eC9t == 41 || this.FB7u()) {
            this.Aa5f.style.display = "none"
        } else {
            this.Aa5f.style.display = "";
            this.pp2x = x7q.bow7p.A7t({
                parent: this.biq6k,
                button: this.Aa5f,
                onstartupload: this.bKE3x.f7c(this, true),
                onfinishupload: this.bKE3x.f7c(this, false)
            })
        }
        if (this.FB7u()) {
            this.qE2x.innerText = "";
            a6g.w7p(this.qE2x, "info-video");
            a6g.w7p(this.biw6q, "f-hide")
        } else {
            a6g.y7r(this.biw6q, "f-hide")
        }
    };
    b7g.bB8t = function () {
        this.bG8y();
        if (this.xN4R) {
            this.xN4R.T7M();
            delete this.xN4R
        }
        if (this.hK0x) {
            this.hK0x.T7M();
            delete this.hK0x
        }
        if (this.pp2x) {
            this.pp2x.T7M();
            delete this.pp2x
        }
        if (this.nf1x) {
            this.nf1x.T7M();
            delete this.nf1x
        }
    };
    b7g.cf8X = function () {
        this.ce8W = "m-wgt-sharewin"
    };
    b7g.bV8N = function () {
        this.ch8Z();
        this.bKD3x = a6g.df9W(this.o7h)[0];
        var bu8m = a6g.E7x(this.o7h, "j-flag");
        this.rg3x = bu8m.shift();
        this.bKF3x = bu8m.shift();
        this.bbw4A = bu8m.shift();
        this.eB9s = bu8m.shift();
        this.qE2x = bu8m.shift();
        this.biE6y = bu8m.shift();
        this.caI7B = bu8m.shift();
        this.Aa5f = bu8m.shift();
        this.cM8E = bu8m.shift();
        this.biq6k = bu8m.shift();
        this.Ck6e = bu8m.shift();
        this.cJR5W = bu8m.shift();
        this.biw6q = bu8m.shift();
        this.em9d = bu8m.shift();
        this.bbN4R = a6g.E7x(this.biw6q, "j-t");
        this.DT6N = I7B.Gm7f.A7t({
            list: a6g.df9W(this.rg3x),
            selected: "z-slt",
            onchange: this.biL6F.f7c(this)
        });
        if (dz9q.ds9j.browser == "ie" && dz9q.ds9j.version < "8.0") {
            a6g.ba7T(this.bbw4A, "position", "relative");
            a6g.ba7T(this.bbw4A, "zIndex", "10")
        }
        h7a.s7l(window, "snsbind", this.Sm1x.f7c(this));
        h7a.s7l(this.eB9s, "input", this.eQ9H.f7c(this));
        h7a.s7l(this.eB9s, "keyup", this.vb4f.f7c(this));
        h7a.s7l(this.o7h, "click", this.cJ8B.f7c(this));
        this.S7L = q7j.blh6b.A7t();
        this.S7L.s7l("onshareall", this.bbR4V.f7c(this, 0));
        this.S7L.s7l("onshareerror", this.jf0x.f7c(this));
        this.S7L.s7l("onshareprivate", this.bbR4V.f7c(this, 1));
        this.bbU4Y = q7j.yz5E.A7t();
        this.gl0x = q7j.hP0x.A7t();
        try {
            this.Sj1x = top.api.sharePermission
        } catch (e) {}
        if (!this.Sj1x) {
            this.Sj1x = Fp7i;
            v7o.bk8c("/api/event/user/permission", {
                type: "json",
                onload: function (d7e) {
                    if (d7e.code == 200) {
                        this.Sj1x = NEJ.EX(Fp7i, d7e)
                    }
                }.f7c(this)
            })
        }
        l7e.lu1x()
    };
    b7g.biL6F = function (d7e) {
        d7e.index == 0 ? a6g.y7r(this.bKD3x, "m-plshare") : a6g.w7p(this.bKD3x, "m-plshare");
        this.bbw4A.style.display = d7e.index == 0 ? "none" : "";
        this.caI7B.style.display = d7e.index == 0 ? "" : "none";
        this.Aa5f.style.display = d7e.index == 0 ? "" : "none";
        if (this.eC9t == 24 || this.eC9t == 21) {
            this.Aa5f.style.display = "none"
        }
        this.bKF3x.style.display = "none";
        this.eB9s.value = "";
        this.ca8S();
        this.FL7E();
        if (d7e.index == 0) {
            var cG8y = a6g.di9Z(this.eB9s, "width");
            if (cG8y == "auto" || !cG8y) {
                return
            } else {
                if (this.hK0x) {
                    this.hK0x.T7M()
                }
                this.hK0x = x7q.TB2x.A7t({
                    parent: document.body,
                    target: this.eB9s
                })
            }
            this.biq6k.style.display = ""
        } else {
            if (this.hK0x) {
                this.hK0x.T7M();
                delete this.hK0x
            }
            this.biq6k.style.display = "none"
        }
    };
    b7g.cJ8B = function (d7e) {
        var g7b = h7a.X7Q(d7e, "d:action");
        if (!g7b) return;
        if (a6g.t7m(g7b, "action") == "search") {
            h7a.co8g(d7e)
        } else if (a6g.t7m(g7b, "default") === undefined) {
            h7a.co8g(d7e)
        }
        switch (a6g.t7m(g7b, "action")) {
            case "txt":
                this.mk1x();
                break;
            case "search":
                if (this.FB7u()) {
                    top.location.href = this.caY8Q
                } else if (this.zV5a && this.eC9t != 24) {
                    if (this.nf1x) {
                        this.nf1x.T7M()
                    }
                    this.nf1x = x7q.btO9F.A7t({
                        parent: this.o7h.parentNode,
                        onfinish: this.biT6N.f7c(this),
                        oncancel: this.caF7y.f7c(this)
                    });
                    this.biV6P = true;
                    this.o7h.style.display = "none";
                    this.FN7G(this.jn0x < 0 ? "添加音乐" : "更换音乐")
                }
                break;
            case "at":
                h7a.tH3x(d7e);
                !!this.hx0x && this.hx0x.bq8i();
                this.hK0x.TD2x();
                this.gt0x();
                break;
            case "emot":
                h7a.tH3x(d7e);
                !!this.hK0x && this.hK0x.Eq6k();
                if (!this.hx0x) {
                    this.hx0x = n7g.LP9G.A7t({
                        parent: this.biE6y
                    });
                    this.hx0x.s7l("onselect", this.zD5I.f7c(this))
                }
                this.hx0x.J7C();
                break;
            case "upload":
                break;
            case "sns":
                h7a.bf8X(d7e);
                var bjc6W, bv8n, u7n = a6g.t7m(g7b, "type");
                if (!this.bbo4s[u7n]) {
                    bjc6W = g7b.href.split("?");
                    bv8n = k7d.hf0x(bjc6W[1]);
                    bv8n["csrf_token"] = v7o.gI0x("__csrf");
                    top.open(bjc6W[0] + "?" + k7d.cz8r(bv8n));
                    return
                }
                var bz8r = {
                    2: "sn",
                    3: "db",
                    4: "rr"
                };
                l7e.Dr6l(g7b, "u-slg-" + bz8r[u7n] + "-gray");
                break;
            case "close":
                !!this.hx0x && this.hx0x.bq8i();
                this.bKR3x();
                break;
            case "share":
                h7a.bf8X(d7e);
                if (this.FB7u()) {
                    if (!a6g.bE8w(g7b, "u-btn2-2-dis")) {
                        this.caE7x()
                    }
                } else if (a6g.bE8w(g7b, "u-btn2-2-dis")) {
                    if (!this.Sj1x.pubEventWithoutResource && this.jn0x < 0) {
                        this.caD7w()
                    } else {}
                } else if (this.jn0x < 0 && !this.eB9s.value && this.pp2x && this.pp2x.Wf2x().length == 0) {
                    n7g.Z7S.J7C({
                        type: 2,
                        tip: "请输入内容"
                    })
                } else {
                    this.caw7p()
                }
                break
        }
    };
    b7g.caD7w = function () {
        var uF4J = 0,
            bjj6d = function () {
                if (uF4J % 2) {
                    a6g.y7r(this.qE2x, "z-show")
                } else {
                    a6g.w7p(this.qE2x, "z-show")
                }
                uF4J++;
                if (uF4J > 5) {
                    clearInterval(ej9a)
                }
            },
            ej9a;
        return function () {
            uF4J = 0;
            clearInterval(ej9a);
            ej9a = setInterval(bjj6d.f7c(this), 200)
        }
    }();
    b7g.Sm1x = function (m7f) {
        m7f = m7f.result;
        this.bbo4s[m7f.type] = !0;
        var r7k = k7d.dm9d(bhs5x, m7f.type),
            cj8b = "u-slg-" + ef9W[r7k] + "-gray";
        a6g.y7r(this.bbN4R[r7k], cj8b)
    };
    b7g.biT6N = function (bx8p) {
        var i7b = bx8p.data;
        this.jn0x = bx8p.id;
        this.eC9t = bx8p.type;
        this.o7h.style.display = "";
        this.FN7G(this.bKP3x);
        this.nf1x && this.nf1x.T7M();
        this.biV6P = false;
        this.bhM5R = i7b.picUrl;
        this.SX1x = i7b.title || "";
        this.SS1x = i7b.author || "";
        this.bhS5X = i7b.authors || "";
        this.cav7o();
        this.bcd4h()
    };
    b7g.caF7y = function () {
        this.nf1x && this.nf1x.T7M();
        this.o7h.style.display = "";
        this.FN7G(this.bKP3x);
        this.biV6P = false;
        this.bcd4h()
    };
    b7g.zD5I = function (d7e) {
        var bp8h = "[" + d7e.text + "]";
        gC0x.Mw9n(this.eB9s, this.oU2x, bp8h);
        this.gt0x()
    };
    b7g.eQ9H = function (d7e) {
        dz9q.ds9j.browser == "ie" && dz9q.ds9j.version < "7.0" ? setTimeout(this.gt0x.f7c(this), 0) : this.gt0x()
    };
    b7g.vb4f = function (d7e) {
        this.mk1x();
        if (d7e.keyCode == 8) this.gt0x()
    };
    b7g.gt0x = function () {
        this.mk1x();
        this.FL7E()
    };
    b7g.FL7E = function () {
        var bs8k = Math.ceil(k7d.fN9E(this.eB9s.value.trim()) / 2);
        this.cM8E.innerText = 140 - bs8k;
        bs8k > 140 ? a6g.fo9f(this.cM8E, "s-fc4", "s-fc6") : a6g.fo9f(this.cM8E, "s-fc6", "s-fc4")
    };
    b7g.caw7p = function () {
        if (this.cR8J()) return;
        if (k7d.fN9E(this.eB9s.value.trim()) > 280) {
            this.ca8S("字数超过140个字符");
            return
        }
        l7e.nb1x(this.cau7n.f7c(this))
    };
    b7g.cau7n = function (cs8k) {
        var u7n = this.DT6N.tR3x(),
            i7b;
        if (u7n == 0) {
            for (var i = 0, JL8D = []; i < this.bbN4R.length; ++i) {
                if (!a6g.bE8w(this.bbN4R[i], "u-slg-" + ef9W[i] + "-gray")) JL8D.push(bhs5x[i])
            }
            this.cR8J(!0);
            i7b = {
                id: this.jn0x,
                msg: this.eB9s.value.trim(),
                type: this.bcf4j(this.eC9t),
                picUrl: this.bhM5R,
                snsTypes: JL8D.join(","),
                isPub: this.zV5a,
                checkToken: cs8k || ""
            };
            if (this.baZ4d > 0) {
                i7b.actId = this.baZ4d;
                if (this.bbn4r) {
                    i7b.msg = "#" + this.bbn4r + "#" + i7b.msg
                }
            }
            var nZ2x = this.pp2x && this.pp2x.Wf2x();
            if (nZ2x && nZ2x.length) {
                i7b.pics = nZ2x
            }
            this.S7L.chw9n(i7b)
        } else {
            var ud3x = this.xN4R.Vi2x();
            if (ud3x.length <= 0) {
                this.ca8S("请至少选择一位好友");
                return
            }
            this.S7L.chv9m({
                data: {
                    id: this.jn0x,
                    msg: this.eB9s.value.trim(),
                    type: this.bcf4j(this.eC9t == 41 ? 39 : this.eC9t),
                    userIds: "[" + ud3x.join(",") + "]",
                    checkToken: cs8k || ""
                }
            })
        }
    };
    b7g.caE7x = function () {
        if (this.cR8J()) {
            return
        }
        this.gl0x.eR9I("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k7d.fN9E(this.eB9s.value.trim()) > 280) {
            this.ca8S("字数超过140个字符");
            return
        }
        l7e.nb1x(this.caq7j.bind(this))
    };
    b7g.caq7j = function (cs8k) {
        this.cR8J(!0);
        var i7b = {
                msg: this.eB9s.value.trim() || "",
                type: "video",
                checkToken: cs8k || ""
            },
            cap7i = {
                videoId: this.jn0x
            };
        if (this.baZ4d > 0) {
            i7b.actId = this.baZ4d;
            if (this.bbn4r) {
                i7b.msg = "#" + this.bbn4r + "#" + i7b.msg
            }
        }
        i7b.videoinfo = JSON.stringify(cap7i);
        this.S7L.chu9l({
            data: {
                videoId: this.jn0x,
                commit: true
            },
            data2: i7b,
            snsTypes: ""
        })
    };
    b7g.bbR4V = function (u7n, m7f) {
        this.cR8J(!1);
        this.bq8i();
        if (!this.bic5h) {
            if (this.FB7u()) {
                n7g.Z7S.J7C({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n7g.Z7S.J7C({
                    tip: "分享成功" + (m7f.point > 0 ? ' 获得<em class="s-fc6">' + m7f.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h7a.z7s(n7g.pk2x, "sharesuccess", {
            isPrivate: u7n,
            rid: this.jn0x,
            rtype: this.eC9t,
            data: m7f.event
        });
        this.z7s("onshare")
    };
    b7g.jf0x = function (m7f) {
        this.cR8J(!1);
        var bF8x = "分享失败";
        if (m7f.code) {
            switch (m7f.code) {
                case 250:
                    bF8x = m7f.message || m7f.msg || (this.zV5a ? "发布异常" : "分享异常");
                    break;
                case 404:
                    bF8x = "分享的资源不存在";
                    break;
                case 407:
                    bF8x = "输入内容包含有关键字";
                    break;
                case 408:
                    bF8x = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bF8x = m7f.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l7e.eN9E({
                        clazz: "m-layer-w2",
                        btntxt: "知道了",
                        message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                    })
            }
        }
        this.ca8S(bF8x)
    };
    b7g.mk1x = function () {
        this.oU2x = gC0x.vt4x(this.eB9s)
    };
    b7g.ca8S = function (bF8x) {
        this.ea9R(this.em9d, bF8x)
    };
    b7g.cR8J = function (dd8V) {
        return this.dY9P(this.Ck6e, dd8V, "分享", "分享中...")
    };
    b7g.bcf4j = function (iq0x) {
        return cbw8o[iq0x] || ""
    };
    b7g.caj7c = function () {
        var ev9m, wn4r = this.bcf4j(this.eC9t);
        this.qE2x.style.display = "";
        if (this.jn0x < 0) {
            this.qE2x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.SX1x) {
                this.qE2x.style.display = "none";
                return
            }
            var bcj4n = this.zV5a && this.eC9t != 24;
            ev9m = (baU4Y[wn4r] ? baU4Y[wn4r] + "：" : "") + this.SX1x + (bLa3x[wn4r] || " ") + (wn4r == "mv" || wn4r == "album" ? this.bhS5X || this.SS1x : this.SS1x);
            a6g.dA9r(this.qE2x, "m-xwgt-share-infobar", {
                canChange: bcj4n,
                info: ev9m
            });
            if (bcj4n) {
                a6g.y7r(this.qE2x, "z-dis")
            } else {
                a6g.w7p(this.qE2x, "z-dis")
            }
        }
        a6g.y7r(this.qE2x, "info-video")
    };
    b7g.cav7o = function () {
        var wn4r = this.bcf4j(this.eC9t),
            ev9m = (baU4Y[wn4r] ? baU4Y[wn4r] + "：" : "") + this.SX1x + (bLa3x[wn4r] || " ") + (wn4r == "mv" || wn4r == "album" ? this.bhS5X || this.SS1x : this.SS1x);
        bcj4n = this.zV5a && this.eC9t != 24;
        if (this.FB7u()) {} else {
            a6g.y7r(this.qE2x, "info-video");
            a6g.dA9r(this.qE2x, "m-xwgt-share-infobar", {
                canChange: bcj4n,
                isPub: this.zV5a,
                info: ev9m
            })
        }
    };
    b7g.cai7b = function () {
        var JU8M = this.eB9s.value;
        if (this.zV5a) {
            if (!!this.biV6P) {
                return !!JU8M && !!JU8M.length || !!this.pp2x && this.pp2x.Wf2x().length > 0
            } else {
                return !(this.jn0x < 0) || !!JU8M && !!JU8M.length || !!this.pp2x && this.pp2x.Wf2x().length > 0
            }
        } else {
            return !!JU8M && !!JU8M.length || !!this.pp2x && this.pp2x.Wf2x().length > 0
        }
    };
    b7g.bcd4h = function () {
        var bKv3x = false;
        if (!this.zV5a || this.Sj1x.pubEventWithoutResource || !(this.jn0x < 0)) {
            bKv3x = true
        }
        if (bKv3x) {
            a6g.y7r(this.Ck6e, "u-btn2-2-dis")
        } else {
            a6g.w7p(this.Ck6e, "u-btn2-2-dis")
        }
    };
    b7g.bKE3x = function (bjB6v) {
        if (bjB6v) {
            a6g.w7p(this.Ck6e, "u-btn2-2-dis")
        } else {
            this.bcd4h()
        }
    };
    b7g.bKR3x = function (d7e) {
        if (d7e) {
            d7e.stopped = true
        }
        if (this.cai7b()) {
            l7e.hC0x({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function (U7N) {
                    if (U7N == "ok") {
                        this.z7s("forceclose", {});
                        this.bq8i();
                        h7a.z7s(n7g.pk2x, "shareclose", {})
                    }
                }.f7c(this)
            })
        } else {
            this.z7s("forceclose", {});
            this.bq8i();
            h7a.z7s(n7g.pk2x, "shareclose", {})
        }
    };
    b7g.FN7G = function (es9j, dU9L) {
        this.pl2x.DK6E(es9j, dU9L)
    };
    b7g.bcm4q = function (u7n) {
        this.gl0x.eR9I("page", {
            type: u7n
        })
    };
    b7g.FB7u = function () {
        return this.eC9t == 39
    };
    b7g.J7C = function () {
        var cad7W = function (p7i, r7k) {
            var cj8b = "u-slg-" + ef9W[r7k] + "-gray";
            !this.bbo4s[bhs5x[r7k]] ? a6g.w7p(p7i, cj8b) : a6g.y7r(p7i, cj8b)
        };
        return function () {
            K7D.J7C.call(this);
            this.o7h.style.display = "";
            this.ca8S();
            this.cR8J(!1);
            this.DT6N.Wr2x(0);
            this.eB9s.focus();
            this.eB9s.value = this.cbd8V || "";
            this.eB9s.placeholder = this.cba8S || "";
            if (!this.FB7u()) {
                this.caj7c()
            } else {
                a6g.w7p(this.qE2x, "info-video");
                a6g.dA9r(this.qE2x, "m-xwgt-share-videobar", {
                    title: this.SX1x,
                    picUrl: this.bhM5R
                })
            }
            this.gt0x();
            this.xN4R.cdy8q();
            k7d.bd7W(this.bbN4R, cad7W, this);
            this.mk1x();
            if (this.zV5a) {
                this.rg3x.style.display = "none"
            } else {
                this.rg3x.style.display = ""
            }
            this.bcd4h()
        }
    }();
    b7g.bq8i = function (d7e) {
        K7D.bq8i.call(this);
        !!this.hx0x && this.hx0x.bq8i();
        if (this.xN4R) {
            this.xN4R.T7M();
            delete this.xN4R
        }
        if (this.hK0x) {
            this.hK0x.T7M();
            delete this.hK0x
        }
        if (this.pp2x) {
            this.pp2x.T7M();
            delete this.pp2x
        }
        if (this.bKq3x) {
            this.bKq3x = this.bKq3x.T7M()
        }
        if (this.nf1x) {
            this.nf1x.T7M();
            delete this.nf1x
        }
    };
    l7e.kR1x = function (e7d) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e7d.title === undefined) {
            e7d.title = "分享"
        }
        if (e7d.actId && e7d.type != 39) {
            var u7n = cbt8l[e7d.resourceType],
                bW8O = e7d.resourceJson,
                ik0x;
            if (k7d.fJ9A(bW8O)) {
                try {
                    bW8O = JSON.parse(bW8O)
                } catch (e) {}
            }
            if (u7n) {
                ik0x = l7e.bRh5m(u7n, bW8O);
                e7d.name = ik0x.title;
                e7d.author = ik0x.author;
                e7d.picUrl = ik0x.picUrl;
                e7d.type = u7n;
                e7d.rid = (bW8O || []).id
            }
        }
        n7g.pk2x.J7C(e7d)
    };
    I7B.fK9B.A7t({
        element: n7g.pk2x,
        event: ["sharesuccess", "shareclose"]
    })
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        h7a = c7f("nej.v"),
        a6g = c7f("nej.e"),
        v7o = c7f("nej.j"),
        n7g = c7f("nm.l"),
        x7q = c7f("nm.w"),
        bC8u = c7f("nej.ui"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    n7g.bcp4t = NEJ.C();
    b7g = n7g.bcp4t.N7G(n7g.el9c);
    K7D = n7g.bcp4t.cr8j;
    b7g.cv8n = function () {
        this.cD8v()
    };
    b7g.bV8N = function () {
        this.ch8Z();
        var j7c = a6g.E7x(this.o7h, "j-flag");
        h7a.s7l(j7c[0], "click", this.HG7z.f7c(this))
    };
    b7g.cf8X = function () {
        this.ce8W = "m-import-ok"
    };
    b7g.bm8e = function (e7d) {
        e7d.parent = e7d.parent || document.body;
        e7d.title = "歌曲同步完成";
        this.bn8f(e7d)
    };
    b7g.bB8t = function () {
        this.bG8y()
    };
    b7g.HG7z = function (d7e) {
        this.bq8i();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b7g.Dt6n = function () {
        this.bq8i()
    };
    b7g.bNW4a = function (d7e) {
        if (d7e.keyCode == 13) this.Go7h()
    }
})();
(function () {
    var c7f = NEJ.P,
        bb7U = NEJ.O,
        h7a = c7f("nej.v"),
        a6g = c7f("nej.e"),
        v7o = c7f("nej.j"),
        O7H = c7f("nej.p"),
        k7d = c7f("nej.u"),
        n7g = c7f("nm.l"),
        x7q = c7f("nm.w"),
        bC8u = c7f("nej.ui"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        b7g, K7D;
    n7g.bKl3x = NEJ.C();
    b7g = n7g.bKl3x.N7G(n7g.el9c);
    b7g.cf8X = function () {
        this.ce8W = "m-programtips-layer"
    };
    b7g.bV8N = function () {
        this.ch8Z();
        this.bU8M = a6g.E7x(this.o7h, "j-flag")
    };
    b7g.bm8e = function (e7d) {
        if (e7d.inner) {
            var innerNode = a6g.E7x(this.o7h, "wrap-p")[0];
            if (innerNode) {
                innerNode.innerHTML = e7d.inner
            }
        }
        e7d.clazz = " m-layer-programtips " + (e7d.clazz || "");
        e7d.parent = e7d.parent || document.body;
        e7d.title = e7d.title || "付费内容提示";
        e7d.draggable = !0;
        e7d.destroyalbe = !0;
        e7d.mask = true;
        this.bn8f(e7d);
        this.he0x = e7d.id;
        this.bZO7H = e7d.radiotype;
        this.kT1x = location.protocol + "//" + (this.bjJ6D() || "music.163.com") + "/m/" + this.bZO7H + "?id=" + this.he0x;
        this.kT1x = e7d.url || this.kT1x;
        this.bZN7G()
    };
    b7g.bB8t = function () {
        this.bG8y()
    };
    b7g.Dt6n = function () {
        this.bq8i()
    };
    b7g.HG7z = function (d7e) {
        this.z7s("onok", C7v);
        this.bq8i()
    };
    l7e.bjL6F = function (e7d) {
        n7g.bKl3x.A7t(e7d).J7C()
    };
    b7g.bZN7G = function () {
        v7o.bk8c("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k7d.cz8r({
                url: this.kT1x,
                size: 180
            }),
            onload: function (i7b) {
                if (i7b.code == 200) {
                    this.bZM7F(i7b.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.f7c(this)
        })
    };
    b7g.bjJ6D = function () {
        var Py0x = location.host;
        if (Py0x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b7g.bZM7F = function (ki1x) {
        this.bU8M[0].style.backgroundImage = "url(" + ki1x + ")"
    }
})();
(function () {
    var c7f = NEJ.P,
        a6g = c7f("nej.e"),
        dz9q = c7f("nej.p"),
        h7a = c7f("nej.v"),
        k7d = c7f("nej.u"),
        I7B = c7f("nej.ut"),
        v7o = c7f("nej.j"),
        q7j = c7f("nm.d"),
        l7e = c7f("nm.x"),
        F7y = c7f("nm.m"),
        n7g = c7f("nm.l"),
        M7F = c7f("nm.m.f"),
        b7g, K7D;
    F7y.dj9a = NEJ.C();
    b7g = F7y.dj9a.N7G(I7B.dq9h);
    b7g.bJ8B = function () {
        var qM2x = !1;
        return function () {
            if (qM2x) return;
            qM2x = !0;
            this.bR8J();
            if (top == self) {
                return
            }
            this.uz3x = a6g.B7u("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bKk3x()
            }
            I7B.fK9B.A7t({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bX8P([
                [window, "scroll", this.CA6u.f7c(this)],
                [document, "keyup", this.bZI7B.f7c(this)],
                [document.body, "click", this.ts3x.f7c(this)],
                [document, "mouseup", this.bZG7z.f7c(this)],
                [this.uz3x, "click", this.RS1x.f7c(this)],
                [q7j.tv3x, "message", this.vN4R.f7c(this)]
            ]);
            l7e.chQ9H(document.body);
            this.CA6u();
            if (this.CC6w !== false && typeof GUser !== "undefined" && GUser.userId > 0) q7j.tv3x.fR9I().vu4y();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dz9q.ds9j.browser == "ie" && parseInt(dz9q.ds9j.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hs0x = top.player.getPlaying();
                    if (hs0x && hs0x.track && hs0x.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hs0x.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.Aj5o.f7c(this);
            this.kK1x = q7j.hP0x.A7t();
            window.log = this.ht0x.f7c(this);
            var ti3x = location.search;
            if (ti3x) {
                var bv8n = ti3x.substr(ti3x.indexOf("?") + 1),
                    gE0x = k7d.hf0x(bv8n);
                if (gE0x && gE0x["_hash"]) location.hash = gE0x["_hash"]
            }
        }
    }();
    b7g.bZI7B = function (d7e) {
        var g7b = h7a.X7Q(d7e);
        try {
            if (d7e.keyCode == 80 && l7e.bRn5s() || ["textarea", "input"].indexOf(g7b.tagName.toLowerCase()) >= 0) return;
            h7a.z7s(top.document, "keyup", {
                ctrlKey: d7e.ctrlKey,
                keyCode: d7e.keyCode
            })
        } catch (e) {}
    };
    b7g.ts3x = function (d7e) {
        var g7b = h7a.X7Q(d7e);
        if (g7b && g7b.tagName == "INPUT") return;
        var g7b = h7a.X7Q(d7e, "d:pid");
        if (g7b) {
            h7a.co8g(d7e);
            var oE2x = a6g.t7m(g7b, "pid"),
                CF6z = a6g.t7m(g7b, "ptype"),
                U7N = a6g.t7m(g7b, "action") || "play";
            switch (U7N) {
                case "subscribe":
                    l7e.nT2x({
                        tracks: [oE2x]
                    });
                    break
            }
        }
        g7b = h7a.X7Q(d7e, "d:resAction");
        if (g7b && g7b.className.indexOf("-dis") == -1) {
            var cV8N = a6g.t7m(g7b, "resId"),
                u7n = a6g.t7m(g7b, "resType"),
                bkb6V = a6g.t7m(g7b, "resRadiotype"),
                bkc6W = a6g.t7m(g7b, "resRadioid"),
                ei9Z = a6g.t7m(g7b, "resFrom"),
                i7b = a6g.t7m(g7b, "resData"),
                U7N = a6g.t7m(g7b, "resAction"),
                buB9s = a6g.t7m(g7b, "resCopyright"),
                bcB4F = a6g.t7m(g7b, "resAuditstatus");
            if (U7N != "log" && U7N != "bilog") h7a.co8g(d7e);
            switch (U7N) {
                case "log":
                    i7b = (i7b || "").split("|");
                    if (!!i7b[0]) {
                        var bi8a = {
                            id: cV8N,
                            alg: i7b[2] || "itembased",
                            scene: i7b[3],
                            position: i7b[1] || 0
                        };
                        if (!!i7b[4]) bi8a.srcid = i7b[4];
                        window.log(i7b[0], bi8a)
                    }
                    break;
                case "bilog":
                    var buy9p = a6g.t7m(g7b, "logAction"),
                        buC9t = a6g.t7m(g7b, "logJson");
                    window.log(buy9p, buC9t);
                    break;
                case "share":
                    if (bcB4F && bcB4F == 1) {
                        l7e.iE0x("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cV8N, u7n, a6g.t7m(g7b, "resPic"), a6g.t7m(g7b, "resName"), a6g.t7m(g7b, "resAuthor"), a6g.t7m(g7b, "resAuthors"))
                    }
                    break;
                case "fav":
                case "subscribe":
                    if (u7n == 18) {
                        var rM3x = a6g.t7m(g7b, "resLevel"),
                            nW2x = a6g.t7m(g7b, "resFee");
                        if (rM3x == 10) {
                            l7e.wc4g(nW2x, cV8N, "song");
                            break
                        }
                        l7e.nT2x({
                            tracks: [cV8N]
                        })
                    }
                    break;
                case "download":
                    l7e.Md9U({
                        id: cV8N,
                        type: u7n
                    });
                    break;
                case "programtips":
                    if (bcB4F && bcB4F == 1) {
                        l7e.iE0x("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l7e.bjL6F({
                            id: bkc6W,
                            radiotype: bkb6V
                        })
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d7e)
        } catch (e) {}
    };
    b7g.bZG7z = function (d7e) {
        try {
            h7a.z7s(top.document, "mouseup")
        } catch (e) {}
    };
    b7g.CA6u = function () {
        var bZF7y = function () {
            var cg8Y = window.innerHeight;
            if (!k7d.tg3x(cg8Y)) cg8Y = (document.documentElement || document.body).clientHeight;
            return cg8Y
        };
        return function (d7e) {
            if (!this.uz3x) return;
            var bcC4G = bZF7y(),
                gn0x = document.documentElement.scrollTop || document.body.scrollTop;
            a6g.ba7T(this.uz3x, "display", gn0x > 0 ? "" : "none");
            if (dz9q.ds9j.browser == "ie" && dz9q.ds9j.version < "7.0") {
                var gG0x = Math.min(document.body.clientHeight, bcC4G + gn0x) - 204;
                a6g.ba7T(this.uz3x, "top", gG0x + "px")
            }
        }
    }();
    b7g.RS1x = function (d7e) {
        h7a.co8g(d7e);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b7g.Aj5o = function () {
        var bkg6a = function (d7e) {
            h7a.z7s(window, "share", d7e)
        };
        return function (cV8N, u7n, Ak5p, W7P, Gp7i, Gq7j) {
            l7e.kR1x({
                rid: cV8N,
                type: u7n,
                purl: Ak5p,
                name: W7P,
                author: Gp7i,
                authors: Gq7j,
                onshare: bkg6a.f7c(this)
            })
        }
    }();
    b7g.ht0x = function (U7N, bi8a) {
        try {
            top.log(U7N, bi8a)
        } catch (e) {
            if (U7N.indexOf("new|") == 0) {
                return this.kK1x.eR9I(U7N.slice(4), bi8a)
            }
            switch (U7N) {
                case "play":
                    this.kK1x.er9i(bi8a);
                    break;
                case "search":
                    this.kK1x.bTB6v(bi8a);
                    break;
                default:
                    this.kK1x.eR9I(U7N, bi8a)
            }
        }
    };
    b7g.bKk3x = function () {
        var bcD4H, bko6i = false,
            bt8l = [45, 60];
        var bZx7q = function (bF8x) {
            if (bF8x.title != "MailBoxImport") return;
            var Q7J = JSON.parse(bF8x.content || "null") || bb7U;
            if (Q7J.status == 10) {
                n7g.bcp4t.A7t().J7C();
                window.clearTimeout(bcD4H)
            }
        };
        var og2x = function (d7e) {
            if (d7e.code == 200) {
                if (d7e.status == 1) {
                    h7a.s7l(q7j.BT6N, "message", bZx7q.f7c(this));
                    q7j.BT6N.A7t().bwC0x();
                    bko6i = true
                } else {
                    if (bko6i) {
                        if (d7e.status == 10) {
                            n7g.bcp4t.A7t().J7C();
                            h7a.ho0x(q7j.BT6N, "message");
                            window.clearTimeout(bcD4H);
                            bko6i = false
                        }
                    } else {
                        window.clearTimeout(bcD4H)
                    }
                }
            }
        };
        return function () {
            var ut3x = bt8l.shift() * 1e3;
            v7o.bk8c("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: og2x.f7c(this)
            });
            if (ut3x) {
                bcD4H = window.setTimeout(arguments.callee, ut3x)
            }
        }
    }();
    b7g.vN4R = function (d7e) {
        try {
            top.polling(d7e)
        } catch (e) {}
    }
})()