(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return ! 1
    };
    NEJ.P = function(FC8u) {
        if (!FC8u || !FC8u.length) return null;
        var bei4m = window;
        for (var a = FC8u.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; bei4m = bei4m[a[i]] = bei4m[a[i]] || {},
        i++);
        return bei4m
    };
    NEJ.Q = function(bM7F, FC8u) {
        bM7F = bM7F || NEJ.O;
        var bw7p = FC8u.split(".");
        for (var i = 0,
        l = bw7p.length; i < l; i++) {
            bM7F = bM7F[bw7p[i]];
            if (!bM7F) break
        }
        return bM7F
    };
    NEJ.C = function() {
        var bBM1x = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bBP1x = function(C7v, bB7u) {
            for (var x in bB7u) if (C7v == bB7u[x]) return x;
            return null
        };
        var bAg0x = {
            cA8s: 0,
            bo7h: 1,
            bC7v: 2,
            bW7P: 3,
            bJ7C: 4,
            fj9a: 5,
            kz1x: 6,
            ez9q: 7
        },
        xm5r = {
            cG8y: 0,
            bq7j: 1,
            bH7A: 2,
            ci8a: 3,
            bS7L: 4,
            gN9E: 5,
            lP1x: 6,
            gl9c: 7
        };
        return function() {
            var fZ9Q = function() {
                this.bCJ1x();
                return this.cA8s.apply(this, arguments)
            };
            fZ9Q.prototype.bCJ1x = NEJ.F;
            fZ9Q.prototype.cA8s = NEJ.F;
            fZ9Q.M7F = function(CT7M, bDk1x) {
                if (bBM1x(CT7M)) return;
                if (bDk1x == null || !!bDk1x) NEJ.X(this, CT7M, bBM1x);
                this.cqQ0x = CT7M;
                this.cu8m = CT7M.prototype;
                var bI7B = function() {};
                bI7B.prototype = CT7M.prototype;
                this.prototype = new bI7B;
                var Jh9Y = this.prototype;
                Jh9Y.constructor = this;
                var cl8d;
                for (var x in bAg0x) {
                    cl8d = bBP1x(bAg0x[x], xm5r);
                    if (!cl8d || !this.cu8m[x]) continue;
                    Jh9Y[x] = function(X7Q) {
                        return function() {
                            this[X7Q].apply(this, arguments)
                        }
                    } (cl8d)
                }
                var Js9j = {};
                for (var x in xm5r) {
                    cl8d = bBP1x(xm5r[x], bAg0x);
                    if (!cl8d || !this.cu8m[cl8d]) continue;
                    Js9j[cl8d] = CT7M;
                    Jh9Y[x] = function(X7Q) {
                        return function() {
                            var m6g, bI7B = this.bsE8w[X7Q],
                            bik5p = bI7B.prototype[X7Q];
                            this.bsE8w[X7Q] = bI7B.cqQ0x || CT7M;
                            if ( !! bik5p) m6g = bik5p.apply(this, arguments);
                            this.bsE8w[X7Q] = CT7M;
                            return m6g
                        }
                    } (cl8d)
                }
                Jh9Y.bCJ1x = function() {
                    this.bsE8w = NEJ.X({},
                    Js9j)
                };
                Jh9Y.cPV6P = Jh9Y.cG8y;
                return Jh9Y
            };
            return fZ9Q
        }
    } ();
    NEJ.X = function(gJ9A, bT7M, ej8b) {
        if (!gJ9A || !bT7M) return gJ9A;
        ej8b = ej8b || NEJ.F;
        for (var x in bT7M) {
            if (bT7M.hasOwnProperty(x) && !ej8b(bT7M[x], x)) gJ9A[x] = bT7M[x]
        }
        return gJ9A
    };
    NEJ.EX = function(gJ9A, bT7M) {
        if (!gJ9A || !bT7M) return gJ9A;
        for (var x in gJ9A) {
            if (gJ9A.hasOwnProperty(x) && bT7M[x] != null) gJ9A[x] = bT7M[x]
        }
        return gJ9A
    };
    var ME0x = Function.prototype;
    ME0x.eO9F = function(lT1x, xK5P) {
        var f = NEJ.F,
        xK5P = xK5P || f,
        lT1x = lT1x || f,
        dB8t = this;
        return function() {
            var d6d = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            lT1x(d6d);
            if (!d6d.stopped) {
                d6d.value = dB8t.apply(this, d6d.args);
                xK5P(d6d)
            }
            return d6d.value
        }
    };
    ME0x.f6b = function() {
        var bi7b = arguments,
        gJ9A = arguments[0],
        bmo6i = this;
        return function() {
            var uN5S = NEJ.R.slice.call(bi7b, 1);
            NEJ.R.push.apply(uN5S, arguments);
            return bmo6i.apply(gJ9A || window, uN5S)
        }
    };
    ME0x.ey9p = function() {
        var bi7b = arguments,
        gJ9A = NEJ.R.shift.call(bi7b),
        bmo6i = this;
        return function() {
            NEJ.R.push.apply(arguments, bi7b);
            return bmo6i.apply(gJ9A || window, arguments)
        }
    };
    var ME0x = String.prototype;
    if (!ME0x.trim) {
        ME0x.trim = function() {
            var dl8d = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(dl8d, "")
            }
        } ()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    P7I = c6e("nej.p"),
    vB5G = window.navigator.platform,
    vy5D = window.navigator.userAgent;
    var lI1x = {
        mac: vB5G,
        win: vB5G,
        linux: vB5G,
        ipad: vy5D,
        ipod: vy5D,
        iphone: vB5G,
        android: vy5D
    };
    P7I.Kb9S = lI1x;
    for (var x in lI1x) lI1x[x] = (new RegExp(x, "i")).test(lI1x[x]);
    lI1x.ios = lI1x.ipad || lI1x.iphone || lI1x.ipod;
    lI1x.tablet = lI1x.ipad;
    lI1x.desktop = lI1x.mac || lI1x.win || lI1x.linux && !lI1x.android;
    var iW1x = {
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
    P7I.dz8r = iW1x;
    if (/msie\s+(.*?);/i.test(vy5D) || /trident\/.+rv:([\d\.]+)/i.test(vy5D)) {
        iW1x.engine = "trident";
        iW1x.browser = "ie";
        iW1x.version = RegExp.$1;
        iW1x.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var mX2x = {
            6 : "2.0",
            7 : "3.0",
            8 : "4.0",
            9 : "5.0",
            10 : "6.0",
            11 : "7.0"
        };
        iW1x.release = mX2x[document.documentMode] || mX2x[parseInt(iW1x.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(vy5D)) {
        iW1x.engine = "webkit";
        iW1x.release = RegExp.$1 || "";
        iW1x.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(vy5D)) {
        iW1x.engine = "gecko";
        iW1x.release = RegExp.$1 || "";
        iW1x.browser = "firefox";
        iW1x.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(vy5D)) iW1x.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(vy5D)) {
        iW1x.engine = "presto";
        iW1x.release = RegExp.$1 || "";
        iW1x.browser = "opera";
        iW1x.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(vy5D)) iW1x.version = RegExp.$1 || ""
    }
    if (iW1x.browser == "unknow") {
        var mX2x = ["chrome", "maxthon", "safari"];
        for (var i = 0,
        l = mX2x.length,
        X7Q; i < l; i++) {
            X7Q = mX2x[i] == "safari" ? "version": mX2x[i];
            if ((new RegExp(X7Q + "/(.*?)(?=\\s|$)", "i")).test(vy5D)) {
                iW1x.browser = mX2x[i];
                iW1x.version = RegExp.$1.trim();
                break
            }
        }
    }
    P7I.bEs1x = {};
    var bif5k = iW1x.engine != "trident";
    P7I.om2x = {
        gecko: iW1x.engine != "gecko",
        webkit: iW1x.engine != "webkit",
        presto: iW1x.engine != "presto",
        trident0: bif5k || iW1x.release > "2.0",
        trident1: bif5k || iW1x.release < "6.0",
        trident2: bif5k || iW1x.release > "3.0",
        trident: bif5k || iW1x.release >= "6.0"
    }
})(); (function() {
    var iP1x = NEJ.P("nej.c"),
    S7L = {};
    var bvd9U = function() {
        var dl8d = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(Z7S) {
            Z7S = Z7S || "";
            if (dl8d.test(Z7S)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    } ();
    var Pt0x = function() {
        var bEv1x = function(j6d, bB7u) {
            if (!j6d || !j6d.length) return;
            for (var i = 0,
            l = j6d.length,
            km1x; i < l; i++) {
                km1x = j6d[i];
                if (km1x.indexOf("://") > 0) bB7u[bvd9U(km1x)] = km1x
            }
        };
        var bk7d = {
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
        return function(bT7M) {
            iP1x.Ke9V("root", bT7M.root || "/res/");
            var bmO6I, gs9j = iP1x.A7t("root");
            for (var x in bk7d) {
                bmO6I = bk7d[x];
                iP1x.Ke9V(x, bT7M[bmO6I.name] || gs9j + bmO6I.dft)
            }
            var Fm8e = bT7M.p_csrf;
            if (Fm8e == !0) {
                Fm8e = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            iP1x.Ke9V("csrf", NEJ.EX({
                cookie: "",
                param: ""
            },
            Fm8e));
            S7L.frames = {};
            bEv1x(bT7M.p_frame, S7L.frames);
            S7L.flashs = {};
            bEv1x(bT7M.p_flash, S7L.flashs)
        }
    } ();
    iP1x.Ke9V = function(L7E, C7v) {
        S7L[L7E] = C7v
    };
    iP1x.A7t = function(L7E) {
        return S7L[L7E]
    };
    iP1x.cmS0x = function(Z7S) {
        var tC4G = bvd9U(Z7S);
        return S7L.frames[tC4G] || tC4G + "/res/nej_proxy_frame.html"
    };
    iP1x.czp2x = function(Z7S) {
        return S7L.flashs[bvd9U(Z7S)]
    };
    Pt0x(window.NEJ_CONF || NEJ.O)
})(); (function() {
    var c6e = NEJ.P,
    P7I = c6e("nej.p"),
    iP1x = c6e("nej.c"),
    bT7M = window.NEJ_CONF || NEJ.O;
    if (P7I.om2x.trident) return;
    iP1x.Ke9V("storage.swf", bT7M.storage || iP1x.A7t("root") + "nej_storage.swf");
    if (P7I.dz8r.release < "4.0") {
        iP1x.Ke9V("blank.png", bT7M.blank || iP1x.A7t("root") + "nej_blank.gif")
    }
    var j6d = bT7M.xdr,
    gS9J = /^(https?:\/\/.*?)(?=\/|$)/i,
    kC1x = /[\/?=&]/i;
    var bFr1x = function(Z7S) {
        return (gS9J.test(Z7S) ? RegExp.$1: "").toLowerCase()
    };
    if ( !! j6d && !!j6d.length) for (var i = j6d.length - 1,
    Z7S, L7E; i >= 0; i--) {
        Z7S = j6d[i];
        L7E = bFr1x(Z7S);
        if ( !! L7E) iP1x.Ke9V(L7E, Z7S)
    }
    iP1x.cPH6B = function(Z7S) {
        var L7E = bFr1x(Z7S);
        if (!L7E) {
            if (kC1x.test(Z7S)) {
                L7E = location.protocol + "//" + location.host
            } else if (Z7S.indexOf("://") < 0) {
                L7E = location.protocol + "//" + Z7S
            } else {
                L7E = Z7S
            }
        }
        return iP1x.A7t(L7E) || L7E + "/res/nej_xdomain.html"
    }
})(); (function() {
    var c6e = NEJ.P,
    iP1x = c6e("nej.c"),
    P7I = c6e("nej.g"),
    gV9M = +(new Date);
    P7I.cPD6x = 1e4 - gV9M;
    P7I.bpb7U = 10001 - gV9M;
    P7I.cPC6w = 10002 - gV9M;
    P7I.bGo2x = 10003 - gV9M;
    P7I.ccz7s = 10004 - gV9M;
    P7I.cPw6q = 10005 - gV9M;
    P7I.byu0x = 10006 - gV9M;
    P7I.cdx8p = 10007 - gV9M;
    P7I.BH7A = "Content-Type";
    P7I.cPr5w = "text/plain";
    P7I.GU8M = "multipart/form-data";
    P7I.chG8y = "application/x-www-form-urlencoded";
    P7I.bka6U = iP1x.A7t("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})(); (function() {
    var c6e = NEJ.P,
    fL9C = NEJ.R,
    P7I = c6e("nej.p"),
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    bh7a = c6e("nej.h");
    var kG1x = P7I.dz8r.prefix,
    bHw2x = P7I.bEs1x,
    cjm9d = {
        scale: "scale({x|1},{y|1})",
        rotate: "rotate({a})",
        translate: "translate({x},{y})"
    },
    cjE9v = {
        scale: "scale3d({x|1},{y|1},{z|1})",
        rotate: "rotate3d({x},{y},{z},{a})",
        translate: "translate3d({x},{y},{z})"
    },
    XM2x = {
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
    var Pt0x = function() {
        var ok2x = bh7a.bHV2x();
        bHw2x.css3d = !!ok2x && ok2x.m41 != null;
        var dl8d = /-([a-z])/g;
        for (var x in XM2x) {
            XM2x[bHW2x(x)] = XM2x[x]
        }
    };
    var bHW2x = function() {
        var dl8d = /-([a-z])/g;
        return function(X7Q) {
            X7Q = X7Q || "";
            return X7Q.replace(dl8d,
            function($1, $2) {
                return $2.toUpperCase()
            })
        }
    } ();
    var bIk2x = function(X7Q) {
        return (!bHw2x.css3d ? cjm9d: cjE9v)[X7Q]
    };
    var bIm2x = function() {
        var dl8d = /\s+/;
        return function(fZ9Q) {
            fZ9Q = (fZ9Q || "").trim();
            return !! fZ9Q ? fZ9Q.split(dl8d) : null
        }
    } ();
    var bhF5K = function(G7z, u7n, fZ9Q) {
        G7z = a6g.A7t(G7z);
        if (!G7z) return;
        k6e.be7X(bIm2x(fZ9Q),
        function(en8f) {
            G7z.classList[u7n](en8f)
        })
    };
    bh7a.Km9d = function(j6d) {
        return fL9C.slice.call(j6d, 0)
    };
    bh7a.bBj0x = function(G7z) {
        return bh7a.Km9d(G7z.children)
    };
    bh7a.bBn1x = function(G7z, fZ9Q) {
        return bh7a.Km9d(G7z.getElementsByClassName(fZ9Q))
    };
    bh7a.bBp1x = function(G7z, Kn9e) {
        bhF5K(G7z, "add", Kn9e)
    };
    bh7a.bjC5H = function(G7z, Kp9g) {
        bhF5K(G7z, "remove", Kp9g)
    };
    bh7a.RD1x = function(G7z, Kp9g, Kn9e) {
        bhF5K(G7z, "remove", Kp9g);
        bhF5K(G7z, "add", Kn9e)
    };
    bh7a.bkp6j = function(G7z, fZ9Q) {
        G7z = a6g.A7t(G7z);
        if (!G7z) return ! 1;
        var j6d = G7z.classList;
        if (!j6d || !j6d.length) return ! 1;
        return k6e.do8g(bIm2x(fZ9Q),
        function(en8f) {
            return j6d.contains(en8f)
        }) >= 0
    };
    bh7a.blk6e = function(G7z, en8f) {};
    bh7a.blo6i = function(G7z) {};
    bh7a.bmi6c = function(gC9t, ny2x) {
        gC9t.selectionEnd = ny2x.end || 0;
        gC9t.selectionStart = ny2x.start || 0;
        gC9t.focus()
    };
    bh7a.bon7g = function(gC9t) {
        return {
            end: gC9t.selectionEnd,
            start: gC9t.selectionStart
        }
    };
    bh7a.bop7i = function() {
        var HQ8I = function(en8f, d6d) {
            var G7z = h6b.Y7R(d6d);
            if (!G7z.value) a6g.y7r(G7z, en8f)
        };
        var Kr9i = function(en8f, d6d) {
            a6g.w7p(h6b.Y7R(d6d), en8f)
        };
        return function(G7z, fq9h, en8f) {
            if (fq9h == 1) {
                h6b.s6m(G7z, "blur", HQ8I.f6b(null, en8f))
            }
            if (fq9h == 1 || fq9h == -1) {
                h6b.s6m(G7z, "focus", Kr9i.f6b(null, en8f))
            }
        }
    } ();
    bh7a.bsQ8I = function(I7B) {
        return (new XMLSerializer).serializeToString(I7B) || ""
    };
    bh7a.btO9F = function(Fl8d) {
        var gs9j = (new DOMParser).parseFromString(Fl8d, "text/xml").documentElement;
        return gs9j.nodeName == "parsererror" ? null: gs9j
    };
    bh7a.buH9y = function(G7z) {};
    bh7a.oP2x = function(G7z) {
        return null
    };
    bh7a.bwA9r = function(G7z) {
        return null
    };
    bh7a.bwG9x = function(dW8O) {};
    bh7a.byj0x = function() {
        var bi7b = bh7a.Km9d(arguments);
        bi7b[0] = a6g.A7t(bi7b[0]);
        if (!bi7b[0]) return null;
        bi7b[1] = (bi7b[1] || "").toLowerCase();
        if (!bi7b[1]) return null;
        return bi7b
    };
    bh7a.DZ7S = function() {
        var yg5l = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        },
        jH1x = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var cpz0x = function(u7n) {
            return (kG1x.evt || kG1x.pro) + u7n
        };
        return function() {
            var bi7b = bh7a.byj0x.apply(bh7a, arguments);
            if (!bi7b) return;
            var bhw5B = jH1x[bi7b[1]],
            bhu5z = yg5l[bi7b[1]];
            if ( !! bhw5B) {
                bi7b[4] = bi7b[1];
                bi7b[1] = cpz0x(bhw5B)
            } else if ( !! bhu5z) {
                var X7Q = "on" + bi7b[1];
                if (! (X7Q in bi7b[0])) {
                    bi7b[4] = bi7b[1];
                    bi7b[1] = bhu5z
                }
            }
            return bi7b
        }
    } ();
    bh7a.bAj0x = function() {
        var bi7b = arguments;
        bi7b[0].addEventListener(bi7b[1], bi7b[2], !!bi7b[3])
    };
    bh7a.bht5y = function() {
        var bi7b = arguments;
        bi7b[0].removeEventListener(bi7b[1], bi7b[2], !!bi7b[3])
    };
    bh7a.bAI0x = function(G7z, u7n, e6c) {
        var d6d = document.createEvent("Event");
        d6d.initEvent(u7n, !0, !0);
        NEJ.X(d6d, e6c);
        G7z.dispatchEvent(d6d)
    };
    bh7a.bHV2x = function() {
        var gS9J = /\((.*?)\)/,
        kC1x = /\s*,\s*/,
        j6d = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var bhs5x = function(ok2x) {
            var iE1x = {};
            if (gS9J.test(ok2x || "")) {
                k6e.be7X(RegExp.$1.split(kC1x),
                function(C7v, r6l) {
                    iE1x[j6d[r6l]] = C7v || ""
                })
            }
            return iE1x
        };
        return function(ok2x) {
            if ( !! window.CSSMatrix) return new CSSMatrix(ok2x);
            var X7Q = kG1x.clz + "CSSMatrix";
            if ( !! window[X7Q]) return new window[X7Q](ok2x || "");
            return bhs5x(ok2x)
        }
    } ();
    bh7a.bIP2x = function() {
        var dl8d = /\{(.*?)\}/g;
        return function(X7Q, bB7u) {
            bB7u = bB7u || o;
            var pI2x = bIk2x(X7Q);
            return ! pI2x ? "": pI2x.replace(dl8d,
            function($1, $2) {
                var bw7p = $2.split("|");
                return bB7u[bw7p[0]] || bw7p[1] || "0"
            })
        }
    } ();
    bh7a.bjP5U = function(G7z, X7Q, C7v) {
        G7z.style[bh7a.bIQ2x(X7Q)] = C7v
    };
    bh7a.bIQ2x = function() {
        var dl8d = /^[a-z]/,
        bke6Y = kG1x.css;
        var csD1x = function(X7Q) {
            return X7Q.replace(dl8d,
            function($1) {
                return bke6Y + $1.toUpperCase()
            })
        };
        return function(X7Q) {
            X7Q = bHW2x(X7Q);
            var csJ1x = bh7a.ctn1x(X7Q, XM2x);
            return csJ1x ? csD1x(X7Q) : X7Q
        }
    } ();
    bh7a.ctn1x = function() {
        var dl8d = /^([a-z]+?)[A-Z]/;
        return function(X7Q, bB7u) {
            if (!bB7u[X7Q]) {
                if (dl8d.test(X7Q)) X7Q = RegExp.$1
            }
            return !! bB7u[X7Q]
        }
    } ();
    bh7a.ctv1x = function() {
        var dl8d = /\$<(.*?)>/gi,
        bke6Y = "-" + kG1x.css.toLowerCase() + "-";
        return function(kY1x) {
            return kY1x.replace(dl8d,
            function($1, $2) {
                var fE9v = $2,
                bw7p = fE9v.split("|"),
                pI2x = bIk2x(bw7p[0]);
                if ( !! pI2x) {
                    return bh7a.bIP2x(bw7p[0], k6e.hd9U(bw7p[1]))
                }
                return ! bh7a.cty1x(fE9v, XM2x) ? fE9v: bke6Y + fE9v
            })
        }
    } ();
    bh7a.cty1x = function(X7Q, bB7u) {
        return !! bB7u[X7Q]
    };
    bh7a.bmN6H = function(cm8e, kY1x) {
        cm8e.textContent = kY1x
    };
    bh7a.bnT7M = function(cm8e, kY1x) {
        var Bm7f = cm8e.sheet,
        br7k = Bm7f.cssRules.length;
        Bm7f.insertRule(kY1x, br7k);
        return Bm7f.cssRules[br7k]
    };
    bh7a.cOy5D = function(G7z, e6c) {};
    bh7a.bhg5l = function(bhb5g) {
        return (bhb5g || "").toLowerCase() != "transparent"
    };
    bh7a.cwg1x = function(G7z) {};
    bh7a.brg8Y = function(G7z, X7Q) {
        if ( !! G7z.getAttribute) return G7z.getAttribute(X7Q);
        return ""
    };
    bh7a.bgZ5e = function(eY9P) {
        a6g.cS8K(eY9P)
    };
    Pt0x()
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    P7I = c6e("nej.p"),
    bh7a = c6e("nej.h");
    if (P7I.om2x.trident0) return;
    var gV9M = +(new Date);
    S7L = {};
    bh7a.blk6e = bh7a.blk6e.eO9F(function(d6d) {
        d6d.stopped = !0;
        var bi7b = d6d.args,
        D7w = a6g.mc2x(bi7b[0]),
        L7E = "hover-" + D7w;
        if (!D7w || !!S7L[L7E]) return;
        S7L[L7E] = !0;
        h6b.s6m(D7w, "mouseenter", a6g.w7p.f6b(a6g, D7w, bi7b[1]));
        h6b.s6m(D7w, "mouseleave", a6g.y7r.f6b(a6g, D7w, bi7b[1]))
    });
    bh7a.blo6i = function() {
        var cOw5B = function() {};
        return bh7a.blo6i.eO9F(function(d6d) {
            d6d.stopped = !0;
            var G7z = d6d.args[0],
            D7w = "fixed-" + a6g.mc2x(G7z);
            if ( !! S7L[D7w]) return;
            var bk7d = {};
            S7L[D7w] = bk7d
        })
    } ();
    bh7a.buH9y = bh7a.buH9y.eO9F(function(d6d) {
        d6d.stopped = !0;
        var G7z = d6d.args[0],
        cm8e = G7z.style,
        bJM3x = a6g.pA2x();
        cm8e.width = bJM3x.scrollWidth + "px";
        cm8e.height = bJM3x.scrollHeight + "px"
    });
    bh7a.oP2x = bh7a.oP2x.eO9F(function(d6d) {
        d6d.stopped = !0;
        var G7z = d6d.args[0],
        lM1x = S7L[G7z.msk];
        if (!lM1x) {
            G7z.msk = gV9M++;
            lM1x = a6g.dn8f("iframe");
            lM1x.style.position = "absolute";
            S7L[G7z.msk] = lM1x
        }
        d6d.value = lM1x;
        var cm8e = lM1x.style;
        cm8e.top = (parseInt(a6g.dm8e(G7z, "top")) || 0) + "px";
        cm8e.left = (parseInt(a6g.dm8e(G7z, "left")) || 0) + "px";
        cm8e.width = G7z.offsetWidth + "px";
        cm8e.height = G7z.offsetHeight + "px";
        G7z.insertAdjacentElement("beforeBegin", lM1x)
    });
    bh7a.bwA9r = bh7a.bwA9r.eO9F(function(d6d) {
        d6d.stopped = !0;
        var lM1x = S7L[d6d.args[0].msk];
        if ( !! lM1x) a6g.nf2x(lM1x)
    })
})(); (function() {
    var c6e = NEJ.P,
    P7I = c6e("nej.p"),
    a6g = c6e("nej.e"),
    bh7a = c6e("nej.h");
    if (P7I.om2x.trident1) return;
    bh7a.DZ7S = function() {
        var yg5l = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return bh7a.DZ7S.eO9F(function(d6d) {
            var bi7b = bh7a.byj0x.apply(bh7a, d6d.args);
            if (!bi7b) {
                d6d.stopped = !0;
                return
            }
            var u7n = yg5l[bi7b[1]];
            if ( !! u7n && ("on" + u7n).toLowerCase() in bi7b[0]) {
                bi7b[4] = bi7b[1];
                bi7b[1] = u7n;
                d6d.stopped = !0;
                d6d.value = bi7b
            }
        })
    } ();
    bh7a.bhg5l = function(bhb5g) {
        return ! 0
    };
    bh7a.bgZ5e = bh7a.bgZ5e.eO9F(function(d6d) {
        d6d.stopped = !0;
        var eY9P = d6d.args[0];
        a6g.bb7U(eY9P, "display", "none");
        try {
            eY9P.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch(ex) {}
    })
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    P7I = c6e("nej.p"),
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    bh7a = c6e("nej.h"),
    bxb0x = {};
    if (P7I.om2x.trident) return;
    bh7a.Km9d = bh7a.Km9d.eO9F(function(d6d) {
        d6d.stopped = !0;
        var j6d = d6d.args[0];
        if (!j6d) {
            d6d.value = null;
            return
        }
        var r6l = 0,
        m6g = [];
        while ( !! j6d[r6l]) {
            m6g.push(j6d[r6l++])
        }
        d6d.value = m6g
    });
    bh7a.bBj0x = bh7a.bBj0x.eO9F(function(d6d) {
        d6d.stopped = !0;
        var bw7p = [];
        k6e.be7X(d6d.args[0].childNodes,
        function(g6a) {
            if (g6a.nodeType == 1) bw7p.push(g6a)
        });
        d6d.value = bw7p
    });
    bh7a.bBn1x = bh7a.bBn1x.eO9F(function(d6d) {
        var G7z = d6d.args[0];
        if ( !! G7z.getElementsByClassName) return;
        d6d.stopped = !0;
        var m6g = [],
        Xo2x = new RegExp("(\\s|^)(?:" + d6d.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k6e.be7X(G7z.getElementsByTagName("*"),
        function(g6a) {
            if (Xo2x.test(g6a.className)) m6g.push(g6a)
        });
        d6d.value = m6g
    });
    bh7a.bmi6c = bh7a.bmi6c.eO9F(function(d6d) {
        var gC9t = d6d.args[0],
        ny2x = d6d.args[1];
        if (gC9t.selectionStart == null) {
            d6d.stopped = !0;
            var di8a = gC9t.createTextRange();
            di8a.collapse(!0);
            di8a.moveStart("character", ny2x.start);
            di8a.moveEnd("character", ny2x.end - ny2x.start);
            di8a.select();
            gC9t.focus()
        }
    });
    bh7a.bon7g = bh7a.bon7g.eO9F(function(d6d) {
        var gC9t = d6d.args[0];
        gC9t.focus();
        if (gC9t.selectionStart == null) {
            d6d.stopped = !0;
            var bJN3x = document.selection.createRange();
            var bLr3x = gC9t.createTextRange();
            bLr3x.moveToBookmark(bJN3x.getBookmark());
            var bzn0x = gC9t.createTextRange();
            bzn0x.collapse(!0);
            bzn0x.setEndPoint("EndToStart", bLr3x);
            var hj9a = bzn0x.text.length;
            d6d.value = {
                start: hj9a,
                end: hj9a + bJN3x.text.length
            }
        }
    });
    bh7a.bsQ8I = bh7a.bsQ8I.eO9F(function(d6d) {
        if ( !! window.XMLSerializer) return;
        d6d.stopped = !0;
        var G7z = d6d.args[0];
        d6d.value = G7z.xml != null ? G7z.xml: G7z.outHTML
    });
    bh7a.btO9F = function() {
        var XJ2x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var cIB4F = function() {
            try {
                for (var i = 0,
                l = XJ2x.length; i < l; i++) return new ActiveXObject(XJ2x[i])
            } catch(ex) {
                return null
            }
        };
        return bh7a.btO9F.eO9F(function(d6d) {
            if ( !! window.DOMParser) return;
            d6d.stopped = !0;
            var oH2x = cIB4F();
            if ( !! oH2x && oH2x.loadXML(d6d.args[0]) && !oH2x.parseError.errorCode) d6d.value = oH2x.documentElement
        })
    } ();
    bh7a.DZ7S = function() {
        var jH1x = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in jH1x) bxb0x[jH1x[x]] = !0;
        var cJT4X = function(G7z, u7n) {
            if ("on" + u7n in G7z) return null;
            return jH1x[u7n] || ""
        };
        var cKg4k = function(u7n, dB8t) {
            var cE8w = dB8t;
            switch (u7n) {
            case "readystatechange":
                cE8w = function(d6d) {
                    var G7z = h6b.Y7R(d6d) || this;
                    if (G7z.readyState == "loaded" || G7z.readyState == "complete") {
                        d6d.target = G7z;
                        dB8t.call(G7z, d6d)
                    }
                };
                break;
            case "propertychange":
                cE8w = function(d6d) {
                    var G7z = h6b.Y7R(d6d) || this;
                    if ("value" in G7z && d6d.propertyName == "value") {
                        d6d.target = G7z;
                        dB8t.call(G7z, d6d)
                    }
                };
                break
            }
            return cE8w
        };
        return bh7a.DZ7S.eO9F(function(d6d) {
            var bi7b = bh7a.byj0x.apply(bh7a, d6d.args);
            if (!bi7b) {
                d6d.stopped = !0;
                return
            }
            var u7n = cJT4X(bi7b[0], bi7b[1]);
            if ( !! u7n) {
                d6d.stopped = !0;
                bi7b[4] = bi7b[1];
                bi7b[1] = u7n;
                if ( !! bi7b[2]) {
                    bi7b[5] = bi7b[2];
                    bi7b[2] = cKg4k(bi7b[1], bi7b[2])
                }
                d6d.value = bi7b
            }
        },
        function(d6d) {
            var bi7b = d6d.value;
            if (!bi7b[0] || !k6e.gZ9Q(bi7b[2])) return;
            if (!k6e.gZ9Q(bi7b[5])) bi7b[5] = bi7b[2];
            bi7b[2] = bi7b[2].f6b(bi7b[0])
        })
    } ();
    bh7a.bAj0x = bh7a.bAj0x.eO9F(function(d6d) {
        var bi7b = d6d.args;
        if ( !! bxb0x[bi7b[1]] || !document.addEventListener) {
            d6d.stopped = !0;
            bi7b[0].attachEvent("on" + bi7b[1], bi7b[2])
        }
    });
    bh7a.bht5y = bh7a.bht5y.eO9F(function(d6d) {
        var bi7b = d6d.args;
        if ( !! bxb0x[bi7b[1]] || !document.removeEventListener) {
            d6d.stopped = !0;
            bi7b[0].detachEvent("on" + bi7b[1], bi7b[2])
        }
    });
    bh7a.bAI0x = bh7a.bAI0x.eO9F(function(d6d) {
        if (!document.createEvent) {
            d6d.stopped = !0;
            var bi7b = d6d.args,
            bLD3x = document.createEventObject();
            NEJ.X(bLD3x, bi7b[2]);
            try {
                bi7b[0].fireEvent("on" + bi7b[1], bLD3x)
            } catch(ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    bh7a.bjP5U = bh7a.bjP5U.eO9F(function(d6d) {
        var bi7b = d6d.args,
        X7Q = bi7b[1].toLowerCase();
        if (X7Q == "opacity" && !(X7Q in document.body.style)) {
            bi7b[1] = "filter";
            bi7b[2] = "alpha(opacity=" + bi7b[2] * 100 + ")"
        }
    });
    bh7a.bmN6H = function() {
        var fC9t = 30;
        return bh7a.bmN6H.eO9F(function(d6d) {
            var G7z = d6d.args[0];
            if (!G7z.styleSheet) return;
            d6d.stopped = !0;
            var kY1x = d6d.args[1];
            var j6d = document.styleSheets;
            if (j6d.length > fC9t) {
                G7z = j6d[fC9t];
                kY1x = G7z.cssText + kY1x
            } else {
                G7z = G7z.styleSheet
            }
            G7z.cssText = kY1x
        })
    } ();
    bh7a.bnT7M = bh7a.bnT7M.eO9F(function(d6d) {
        var bi7b = d6d.args,
        Bm7f = bi7b[0].sheet;
        if ( !! Bm7f) return;
        d6d.stopped = !0;
        var Bm7f = bi7b[0].styleSheet,
        br7k = Bm7f.rules.length,
        bw7p = bi7b[1].split(/[\{\}]/);
        Bm7f.addRule(bw7p[0], bw7p[1], br7k);
        d6d.value = Bm7f.rules[br7k]
    });
    bh7a.bop7i = function() {
        var HQ8I = function(en8f, d6d) {
            a6g.y7r(h6b.Y7R(d6d), en8f)
        };
        return bh7a.bop7i.eO9F(function(d6d) {
            if (P7I.dz8r.release >= "4.0") return;
            var bi7b = d6d.args;
            if (bi7b[1] != 1) {
                h6b.s6m(bi7b[0], "blur", HQ8I.f6b(null, bi7b[2]));
                bi7b[1] = -1
            }
        })
    } ();
    bh7a.bhg5l = function(bhb5g) {
        return ! 0
    };
    bh7a.brg8Y = bh7a.brg8Y.eO9F(function(d6d) {
        var bi7b = d6d.args,
        g6a = (bi7b[0].attributes || bc7V)[bi7b[1]];
        if ( !! g6a) {
            d6d.stopped = !0;
            d6d.value = g6a.value
        }
    },
    function(d6d) {
        var bi7b = d6d.args;
        if (bi7b[1] == "maxlength" && d6d.value == 2147483647) d6d.value = ""
    });
    if (P7I.dz8r.release < 5) {
        bh7a.bwG9x = function() {
            var eo8g, eY9P, kB1x = [],
            bjv5A = "cb-" + +(new Date),
            bs7l = '<script>parent.nej.h["' + bjv5A + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bLL3x = function() {
                eo8g = window.clearTimeout(eo8g);
                if (!kB1x.length) return;
                var dW8O = kB1x.shift();
                try {
                    var yr6l = eY9P.contentWindow.document;
                    yr6l.open();
                    yr6l.write("<head><title>");
                    yr6l.write(document.title);
                    yr6l.write("</title>");
                    yr6l.write(bs7l.replace("#<HASH>", encodeURIComponent(dW8O)));
                    yr6l.write("</head><body></body>");
                    if (location.hostname != document.domain) yr6l.domain = document.domain;
                    yr6l.close();
                    bh7a[bjv5A] = !1
                } catch(ex) {
                    console.log(ex.message || ex);
                    kB1x.unshift(dW8O)
                }
                eo8g = window.setTimeout(bLL3x, 50)
            };
            return bh7a.bwG9x.eO9F(function(d6d) {
                d6d.stopped = !0;
                var dW8O = d6d.args[0];
                if ( !! bh7a[bjv5A] || !eY9P && !dW8O) return;
                kB1x.push(dW8O);
                if (!eY9P) eY9P = a6g.bgM5R();
                bLL3x()
            })
        } ()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch(e) {}
})(); (function() {
    var c6e = NEJ.P,
    h6b = c6e("nej.v"),
    bh7a = c6e("nej.h"),
    P7I = c6e("nej.p"),
    bgL5Q = P7I.bEs1x;
    if (P7I.om2x.gecko) return;
    var Pt0x = function() {
        bgL5Q.css3d = bgL5Q.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function(jI1x, G7z) {
            if (!jI1x || !G7z) return;
            switch (jI1x) {
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
        if (! ("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText",
            function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText",
            function(bs7l) {
                this.textContent = bs7l
            })
        }
    };
    bh7a.DZ7S = function() {
        var gS9J = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return bh7a.DZ7S.eO9F(function(d6d) {
            var bi7b = d6d.args;
            if (gS9J.test(bi7b[1] || "")) {
                d6d.stopped = !0;
                d6d.value = bi7b
            }
        })
    } ();
    bh7a.cwg1x = function() {
        var caA7t = function(d6d) {
            h6b.bg7Z(d6d);
            h6b.Y7R(d6d).control.click()
        };
        return function(G7z) {
            h6b.s6m(G7z, "click", caA7t)
        }
    } ();
    Pt0x()
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    bh7a = c6e("nej.h");
    var bgK5P = function() {
        var mX2x = !!document.body.classList;
        return function() {
            return mX2x
        }
    } ();
    var bLN3x = function() {
        var dl8d = /\s+/g;
        return function(fZ9Q) {
            fZ9Q = (fZ9Q || "").trim();
            return ! fZ9Q ? null: new RegExp("(\\s|^)(?:" + fZ9Q.replace(dl8d, "|") + ")(?=\\s|$)", "g")
        }
    } ();
    bh7a.RD1x = bh7a.RD1x.eO9F(function(d6d) {
        if (bgK5P()) return;
        d6d.stopped = !0;
        var bi7b = d6d.args,
        G7z = a6g.A7t(bi7b[0]);
        if (!G7z || !bi7b[1] && !bi7b[2]) return;
        var fZ9Q = G7z.className || "";
        var Kn9e = " " + (bi7b[2] || ""),
        Kp9g = bLN3x((bi7b[1] || "") + Kn9e); !! Kp9g && (fZ9Q = fZ9Q.replace(Kp9g, "$1"));
        G7z.className = (fZ9Q + Kn9e).replace(/\s+/g, " ").trim()
    });
    bh7a.bBp1x = bh7a.bBp1x.eO9F(function(d6d) {
        if (bgK5P()) return;
        d6d.stopped = !0;
        var bi7b = d6d.args;
        bh7a.RD1x(bi7b[0], "", bi7b[1])
    });
    bh7a.bjC5H = bh7a.bjC5H.eO9F(function(d6d) {
        if (bgK5P()) return;
        d6d.stopped = !0;
        var bi7b = d6d.args;
        bh7a.RD1x(bi7b[0], bi7b[1], "")
    });
    bh7a.bkp6j = bh7a.bkp6j.eO9F(function(d6d) {
        if (bgK5P()) return;
        d6d.stopped = !0;
        var bi7b = d6d.args,
        G7z = a6g.A7t(bi7b[0]);
        if (!G7z) {
            d6d.value = !1;
            return
        }
        var dl8d = bLN3x(bi7b[1]);
        d6d.value = !dl8d ? !1 : dl8d.test(G7z.className || "")
    })
})(); (function() {
    var c6e = NEJ.P,
    P7I = c6e("nej.p"),
    bh7a = c6e("nej.h");
    if (P7I.om2x.webkit) return;
    bh7a.bhg5l = function(bhb5g) {
        return ! 0
    }
})(); (function() {
    var c6e = NEJ.P,
    bh7a = c6e("nej.h"),
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    dg8Y = c6e("nej.x"),
    S7L = {};
    var bLP3x = function(G7z) {
        G7z = a6g.A7t(G7z);
        if (!G7z || !S7L[G7z.id]) return;
        var bgF5K = !0,
        D7w = G7z.id;
        k6e.eQ9H(S7L[D7w],
        function() {
            bgF5K = !1;
            return ! 0
        });
        if (bgF5K) delete S7L[D7w]
    };
    h6b.s6m = dg8Y.s6m = function() {
        var caG7z = function() {
            var bi7b = bh7a.DZ7S.apply(bh7a, arguments);
            if (!bi7b || !bi7b[2]) return;
            var wj5o = a6g.mc2x(bi7b[0]),
            pq2x = S7L[wj5o] || {};
            S7L[wj5o] = pq2x;
            wj5o = bi7b[4] || bi7b[1];
            var DT7M = pq2x[wj5o] || [];
            pq2x[wj5o] = DT7M;
            DT7M.push({
                type: bi7b[1],
                func: bi7b[2],
                capt: !!bi7b[3],
                sfun: bi7b[5] || bi7b[2]
            });
            return bi7b.slice(0, 4)
        };
        return function() {
            var bi7b = caG7z.apply(null, arguments);
            if ( !! bi7b) bh7a.bAj0x.apply(bh7a, bi7b);
            return this
        }
    } ();
    h6b.nu2x = dg8Y.nu2x = function() {
        var caI7B = function() {
            var uN5S = arguments,
            wj5o = a6g.mc2x(uN5S[0]),
            pq2x = S7L[wj5o],
            u7n = (uN5S[1] || "").toLowerCase(),
            d6d = uN5S[2];
            if (!pq2x || !u7n || !d6d) return;
            pq2x = pq2x[u7n];
            if (!pq2x) return;
            var caJ7C = !!uN5S[3],
            r6l = k6e.do8g(pq2x,
            function(jH1x) {
                return d6d == jH1x.sfun && caJ7C == jH1x.capt
            });
            if (r6l < 0) return;
            var jH1x = pq2x.splice(r6l, 1)[0];
            return ! jH1x ? null: [a6g.A7t(wj5o), jH1x.type, jH1x.func, jH1x.capt]
        };
        return function() {
            var bi7b = caI7B.apply(null, arguments);
            if ( !! bi7b) {
                bh7a.bht5y.apply(bh7a, bi7b);
                bLP3x(bi7b[0])
            }
            return this
        }
    } ();
    h6b.ht0x = dg8Y.ht0x = function() {
        var bLQ3x = function() {
            var uN5S = arguments,
            wj5o = a6g.mc2x(uN5S[0]),
            pq2x = S7L[wj5o],
            DT7M = (uN5S[1] || "").toLowerCase();
            if (!pq2x || !DT7M) return;
            var G7z = a6g.A7t(wj5o);
            k6e.oc2x(pq2x[DT7M],
            function(jH1x, r6l, j6d) {
                bh7a.bht5y(G7z, jH1x.type, jH1x.func, jH1x.capt);
                j6d.splice(r6l, 1)
            });
            delete pq2x[DT7M]
        };
        var caL7E = function(G7z) {
            G7z = a6g.A7t(G7z);
            if (!G7z) return;
            var D7w = G7z.id;
            k6e.eQ9H(S7L[D7w],
            function(j6d, u7n) {
                bLQ3x(D7w, u7n)
            });
            delete S7L[D7w]
        };
        return function(G7z, u7n) { ! u7n ? caL7E(G7z) : bLQ3x(G7z, u7n);
            bLP3x(G7z);
            return this
        }
    } ();
    h6b.Y7R = function() {
        var bsf8X;
        var KP9G = function(X7Q, G7z) {
            var bw7p = X7Q.split(":");
            if (bw7p.length > 1) {
                if (!bsf8X) bsf8X = {
                    c: a6g.bG7z,
                    d: a6g.t7m,
                    a: a6g.hc9T
                };
                var KQ9H = bsf8X[bw7p[0]];
                if ( !! KQ9H) return !! KQ9H(G7z, bw7p[1]);
                X7Q = bw7p[1]
            }
            return !! a6g.hc9T(G7z, X7Q) || !!a6g.t7m(G7z, X7Q) || a6g.bG7z(G7z, X7Q)
        };
        return function(d6d) {
            if (!d6d) return null;
            var G7z = d6d.target || d6d.srcElement,
            ej8b = arguments[1];
            if (!ej8b) return G7z;
            if (k6e.fO9F(ej8b)) ej8b = KP9G.f6b(null, ej8b);
            if (k6e.gZ9Q(ej8b)) {
                while (G7z) {
                    if ( !! ej8b(G7z)) return G7z;
                    G7z = G7z.parentNode
                }
                return null
            }
            return G7z
        }
    } ();
    h6b.bg7Z = function(d6d) {
        h6b.us4w(d6d);
        h6b.cr8j(d6d);
        return this
    };
    h6b.us4w = function(d6d) {
        if ( !! d6d) { !! d6d.stopPropagation ? d6d.stopPropagation() : d6d.cancelBubble = !0
        }
        return this
    };
    h6b.cr8j = function(d6d) {
        if ( !! d6d) { !! d6d.preventDefault ? d6d.preventDefault() : d6d.returnValue = !1
        }
        return this
    };
    h6b.cNP5U = function() {
        var rZ3x = !1;
        var cbY7R = function() {
            if (rZ3x) return;
            rZ3x = !0;
            h6b.s6m(document, "click", cbZ7S, !0)
        };
        var cbZ7S = function(d6d) {
            var G7z = h6b.Y7R(d6d),
            ccd7W = a6g.t7m(G7z, "stopped");
            if (ccd7W == "true") {
                h6b.bg7Z(d6d);
                a6g.t7m(G7z, "stopped", "false")
            }
        };
        return function(d6d) {
            if (!d6d) return;
            if (d6d.type == "click") {
                h6b.bg7Z(d6d);
                return
            }
            cbY7R();
            a6g.t7m(h6b.Y7R(d6d), "stopped", "true")
        }
    } ();
    h6b.jV1x = function(d6d) {
        return d6d.pageX != null ? d6d.pageX: d6d.clientX + a6g.pA2x().scrollLeft
    };
    h6b.mz2x = function(d6d) {
        return d6d.pageY != null ? d6d.pageY: d6d.clientY + a6g.pA2x().scrollTop
    };
    h6b.z7s = dg8Y.z7s = function(G7z, u7n, e6c) {
        var bi7b = bh7a.DZ7S(G7z, u7n);
        if ( !! bi7b) bh7a.bAI0x(bi7b[0], bi7b[1], e6c);
        return this
    };
    c6e("dbg").dumpEV = function() {
        return S7L
    };
    dg8Y.isChange = !0
})(); (function() {
    var o = !0,
    w = null; (function(B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a" [0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                    b = "function" == typeof d && l;
                    if (b) { (f = function() {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date( - 864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date( - 621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date( - 1))
                        } catch(n) {
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
                                } catch(g) {}
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch(i) {}
                            }
                        }
                    } catch(O) {
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
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON: D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date( - 0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch(P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor,
            J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            z = function(a, f) {
                return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
            };
            if (! (p = {}.hasOwnProperty)) p = function(a) {
                var f = {},
                c;
                if ((f.__proto__ = w, f.__proto__ = {
                    toString: 1
                },
                f).toString != m) p = function(a) {
                    var f = this.__proto__,
                    a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                };
                else {
                    c = f.constructor;
                    p = function(a) {
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
            C = function(a, f) {
                var c = 0,
                b, h, n; (b = function() {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ?
                function(a, f) {
                    var c = {},
                    b = m.call(a) == "[object Function]",
                    d;
                    for (d in a) ! (b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                }: function(a, f) {
                    var c = m.call(a) == "[object Function]",
                    b,
                    d;
                    for (b in a) ! (c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b); (d || p.call(a, b = "constructor")) && f(b)
                };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) {
                        var c = m.call(a) == "[object Function]",
                        b,
                        d;
                        if (d = !c) if (d = typeof a.constructor != "function") {
                            d = typeof a.hasOwnProperty;
                            d = d == "object" ? !!a.hasOwnProperty: !K[d]
                        }
                        d = d ? a.hasOwnProperty: p;
                        for (b in a) ! (c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {
                    92 : "\\\\",
                    34 : '\\"',
                    8 : "\\b",
                    12 : "\\f",
                    10 : "\\n",
                    13 : "\\r",
                    9 : "\\t"
                },
                u = function(a, f) {
                    return ("000000" + (f || 0)).slice( - a)
                },
                G = function(a) {
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
                E = function(a, b, c, d, h, n, e) {
                    var g = b[a],
                    i,
                    j,
                    k,
                    l,
                    q,
                    s,
                    v,
                    x,
                    y;
                    try {
                        g = b[a]
                    } catch(A) {}
                    if (typeof g == "object" && g) {
                        i = m.call(g);
                        if (i == "[object Date]" && !p.call(g, "toJSON")) if (g > -1 / 0 && g < 1 / 0) {
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
                            g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-": "+") + u(6, i < 0 ? -i: i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                        } else g = w;
                        else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                    }
                    c && (g = c.call(b, a, g));
                    if (g === w) return "null";
                    i = m.call(g);
                    if (i == "[object Boolean]") return "" + g;
                    if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g: "null";
                    if (i == "[object String]") return G("" + g);
                    if (typeof g == "object") {
                        for (a = e.length; a--;) if (e[a] === g) throw TypeError();
                        e.push(g);
                        x = [];
                        b = n;
                        n = n + h;
                        if (i == "[object Array]") {
                            j = 0;
                            for (a = g.length; j < a; y || (y = o), j++) {
                                i = E(j, g, c, d, h, n, e);
                                x.push(i === r ? "null": i)
                            }
                            a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]": "[" + x.join(",") + "]": "[]"
                        } else {
                            C(d || g,
                            function(a) {
                                var b = E(a, g, c, d, h, n, e);
                                b !== r && x.push(G(a) + ":" + (h ? " ": "") + b);
                                y || (y = o)
                            });
                            a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}": "{" + x.join(",") + "}": "{}"
                        }
                        e.pop();
                        return a
                    }
                };
                k.stringify = function(a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b) if (m.call(b) == "[object Function]") h = b;
                    else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0,
                        g = b.length,
                        i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c) if (m.call(c) == "[object Number]") {
                        if ((c = c - c % 1) > 0) {
                            d = "";
                            for (c > 10 && (c = 10); d.length < c; d = d + " ");
                        }
                    } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c: c.slice(0, 10));
                    return E("", (i = {},
                    i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                N = {
                    92 : "\\",
                    34 : '"',
                    47 : "/",
                    98 : "\b",
                    116 : "\t",
                    110 : "\n",
                    102 : "\f",
                    114 : "\r"
                },
                b,
                A,
                j = function() {
                    b = A = w;
                    throw SyntaxError()
                },
                q = function() {
                    for (var a = A,
                    f = a.length,
                    c, d, h, k, e; b < f;) {
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
                                    e = a.charCodeAt(++b); (e == 43 || e == 45) && b++;
                                    for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                    h == b && j();
                                    b = h
                                }
                                return + a.slice(d, b)
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
                F = function(a) {
                    var b, c;
                    a == "$" && j();
                    if (typeof a == "string") {
                        if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                        if (a == "[") {
                            for (b = [];; c || (c = o)) {
                                a = q();
                                if (a == "]") break;
                                if (c) if (a == ",") {
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
                                if (c) if (a == ",") {
                                    a = q();
                                    a == "}" && j()
                                } else j(); (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                b[a.slice(1)] = F(q())
                            }
                            return b
                        }
                        j()
                    }
                    return a
                },
                I = function(a, b, c) {
                    c = H(a, b, c);
                    c === r ? delete a[b] : a[b] = c
                },
                H = function(a, b, c) {
                    var d = a[b],
                    h;
                    if (typeof d == "object" && d) if (m.call(d) == "[object Array]") for (h = d.length; h--;) I(d, h, c);
                    else C(d,
                    function(a) {
                        I(d, a, c)
                    });
                    return c.call(a, b, d)
                };
                k.parse = function(a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {},
                    d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function() {
            return k
        })
    })(this)
})(); (function() {
    var c6e = NEJ.P,
    P7I = c6e("nej.p");
    if (P7I.om2x.trident0) return;
    JSON.parse = JSON.parse.eO9F(function(d6d) {
        var cP8H = d6d.args[0] || "";
        if (cP8H.length >= 5e5) {
            d6d.stopped = !0;
            d6d.value = eval("(" + cP8H + ")")
        }
    })
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    et8l = c6e("nej.g"),
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    bh7a = c6e("nej.h"),
    dg8Y = c6e("nej.x"),
    KT9K,
    byJ0x = {},
    S7L = document.createDocumentFragment();
    a6g.mc2x = dg8Y.mc2x = function(G7z) {
        G7z = a6g.A7t(G7z);
        if (!G7z) return;
        var D7w = !!G7z.id ? G7z.id: "auto-id-" + k6e.RR1x(16);
        G7z.id = D7w;
        if (a6g.A7t(D7w) != G7z) byJ0x[D7w] = G7z;
        return D7w
    };
    a6g.A7t = dg8Y.A7t = function(G7z) {
        var g6a = byJ0x["" + G7z];
        if ( !! g6a) return g6a;
        if (!k6e.fO9F(G7z) && !k6e.uE4I(G7z)) return G7z;
        return document.getElementById(G7z)
    };
    a6g.dj8b = dg8Y.dj8b = function(G7z, en8f) {
        G7z = a6g.A7t(G7z);
        if (!G7z) return null;
        var j6d = bh7a.bBj0x(G7z);
        if ( !! en8f) k6e.oc2x(j6d,
        function(g6a, r6l) {
            if (!a6g.bG7z(g6a, en8f)) j6d.splice(r6l, 1)
        });
        return j6d
    };
    a6g.F7y = dg8Y.F7y = function(G7z, fZ9Q) {
        G7z = a6g.A7t(G7z);
        return ! G7z ? null: bh7a.bBn1x(G7z, fZ9Q.trim())
    };
    a6g.bMZ3x = dg8Y.bMZ3x = function(G7z) {
        G7z = a6g.A7t(G7z);
        if ( !! G7z) {
            G7z = G7z.parentNode;
            while ( !! G7z) {
                if (G7z.scrollHeight > G7z.clientHeight) break;
                G7z = G7z.parentNode
            }
            if ( !! G7z) return G7z
        }
        var pq2x = document.body.scrollHeight,
        DT7M = document.documentElement.scrollHeight;
        return DT7M >= pq2x ? document.documentElement: document.body
    };
    a6g.pA2x = function() {
        var bNh3x = function(j6d) {
            var m6g = 0;
            k6e.be7X(j6d,
            function(eF9w) {
                if (!eF9w) return;
                if (!m6g) {
                    m6g = eF9w
                } else {
                    m6g = Math.min(m6g, eF9w)
                }
            });
            return m6g
        };
        return function(yr6l) {
            var KV9M = yr6l || document,
            ES8K = KV9M.body,
            EV8N = KV9M.documentElement,
            m6g = {
                scrollTop: Math.max(ES8K.scrollTop, EV8N.scrollTop),
                scrollLeft: Math.max(ES8K.scrollLeft, EV8N.scrollLeft),
                clientWidth: bNh3x([ES8K.clientWidth, ES8K.offsetWidth, EV8N.clientWidth, EV8N.offsetWidth]),
                clientHeight: bNh3x([ES8K.clientHeight, ES8K.offsetHeight, EV8N.clientHeight, EV8N.offsetHeight])
            };
            m6g.scrollWidth = Math.max(m6g.clientWidth, ES8K.scrollWidth, EV8N.scrollWidth);
            m6g.scrollHeight = Math.max(m6g.clientHeight, ES8K.scrollHeight, EV8N.scrollHeight);
            return m6g
        }
    } ();
    a6g.cNy5D = function(fC9t, qa3x) {
        var m6g = NEJ.X({},
        qa3x),
        bNi3x = fC9t.width / fC9t.height,
        bgk5p = qa3x.width / qa3x.height;
        if (bNi3x > bgk5p && qa3x.height > fC9t.height) {
            m6g.height = fC9t.height;
            m6g.width = m6g.height * bgk5p
        }
        if (bNi3x < bgk5p && qa3x.width > fC9t.width) {
            m6g.width = fC9t.width;
            m6g.height = m6g.width / bgk5p
        }
        return m6g
    };
    a6g.cNu5z = function() {
        var dl8d = /\s+/;
        var vQ5V = {
            left: function() {
                return 0
            },
            center: function(gp9g, qa3x) {
                return (gp9g.width - qa3x.width) / 2
            },
            right: function(gp9g, qa3x) {
                return gp9g.width - qa3x.width
            },
            top: function() {
                return 0
            },
            middle: function(gp9g, qa3x) {
                return (gp9g.height - qa3x.height) / 2
            },
            bottom: function(gp9g, qa3x) {
                return gp9g.height - qa3x.height
            }
        };
        return function(gp9g, qa3x, ou2x) {
            var m6g = {},
            bw7p = (ou2x || "").split(dl8d),
            gL9C = vQ5V[bw7p[1]] || vQ5V.middle,
            hn9e = vQ5V[bw7p[0]] || vQ5V.center;
            m6g.top = gL9C(gp9g, qa3x);
            m6g.left = hn9e(gp9g, qa3x);
            return m6g
        }
    } ();
    a6g.uT5Y = dg8Y.uT5Y = function(G7z, en8f) {
        bh7a.blk6e(G7z, en8f || a6g.t7m(G7z, "hover") || "js-hover");
        return this
    };
    a6g.Lb9S = dg8Y.Lb9S = function(G7z) {
        G7z = a6g.A7t(G7z);
        if (!G7z) return;
        bh7a.blo6i(G7z)
    };
    a6g.cdY8Q = dg8Y.cdY8Q = function() {
        var S7L = {},
        bOq3x = 2;
        var chg8Y = function(D7w, en8f, d6d) {
            S7L[D7w] = [h6b.jV1x(d6d), h6b.mz2x(d6d)];
            a6g.w7p(D7w, en8f)
        };
        var ciR9I = function(D7w, en8f, d6d) {
            var bO7H = S7L[D7w];
            if (!k6e.eh8Z(bO7H)) return;
            var cjP9G = Math.abs(h6b.jV1x(d6d) - bO7H[0]),
            cko9f = Math.abs(h6b.mz2x(d6d) - bO7H[1]);
            if (cjP9G > bOq3x || cko9f > bOq3x) bnI7B(D7w, en8f)
        };
        var bnI7B = function(D7w, en8f) {
            if (k6e.eh8Z(S7L[D7w])) {
                S7L[D7w] = -1;
                a6g.y7r(D7w, en8f)
            }
        };
        return function(G7z, en8f) {
            var D7w = a6g.mc2x(G7z);
            if (!D7w || S7L[D7w] != null) return;
            S7L[D7w] = -1;
            en8f = en8f || a6g.t7m(D7w, "highlight") || "js-highlight";
            h6b.s6m(D7w, "touchstart", chg8Y.f6b(null, D7w, en8f));
            h6b.s6m(document, "touchmove", ciR9I.f6b(null, D7w, en8f));
            h6b.s6m(document, "touchend", bnI7B.f6b(null, D7w, en8f));
            h6b.s6m(document, "touchcancel", bnI7B.f6b(null, D7w, en8f))
        }
    } ();
    a6g.Cu7n = dg8Y.Cu7n = function() {
        var ckq9h = function(D7w, en8f, ckG9x) {
            var G7z = a6g.A7t(D7w),
            d6d = {
                clazz: en8f,
                target: G7z
            };
            if (a6g.bG7z(G7z, en8f)) {
                d6d.toggled = !1;
                a6g.y7r(G7z, en8f)
            } else {
                d6d.toggled = !0;
                a6g.w7p(G7z, en8f)
            }
            ckG9x.call(null, d6d)
        };
        return function(G7z, e6c) {
            G7z = a6g.A7t(G7z);
            if ( !! G7z) {
                var iE1x = {
                    ontoggle: bu7n,
                    clazz: "js-toggle",
                    element: G7z.parentNode
                };
                if (k6e.fO9F(e6c)) {
                    var g6a = a6g.A7t(e6c); !! g6a ? iE1x.element = g6a: iE1x.clazz = e6c
                } else {
                    NEJ.EX(iE1x, e6c);
                    iE1x.element = a6g.A7t(iE1x.element)
                }
                var D7w = a6g.mc2x(iE1x.element);
                h6b.s6m(G7z, "click", ckq9h.f6b(null, D7w, iE1x.clazz, iE1x.ontoggle || bu7n))
            }
            return this
        }
    } ();
    a6g.mU2x = dg8Y.mU2x = function(G7z, e6c) {
        G7z = a6g.A7t(G7z);
        if (!G7z) return;
        var fq9h = 0,
        en8f = "js-focus";
        if (k6e.uE4I(e6c)) {
            fq9h = e6c
        } else if (k6e.fO9F(e6c)) {
            en8f = e6c
        } else if (k6e.mn2x(e6c)) {
            fq9h = e6c.mode || fq9h;
            en8f = e6c.clazz || en8f
        }
        var C7v = parseInt(a6g.t7m(G7z, "mode"));
        if (!isNaN(C7v)) fq9h = C7v;
        C7v = a6g.t7m(G7z, "focus");
        if ( !! C7v) en8f = C7v;
        bh7a.bop7i(G7z, fq9h, en8f);
        return this
    };
    a6g.dn8f = function() {
        var bB7u = {
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
        return function(fK9B, fZ9Q, bI7B) {
            var G7z = document.createElement(fK9B);
            NEJ.X(G7z, bB7u[fK9B.toLowerCase()]);
            if ( !! fZ9Q) G7z.className = fZ9Q;
            bI7B = a6g.A7t(bI7B);
            if ( !! bI7B) bI7B.appendChild(G7z);
            return G7z
        }
    } ();
    a6g.bgM5R = function() {
        var clO9F = function() {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var clP9G = function(X7Q) {
            X7Q = X7Q.trim();
            if (!X7Q) return a6g.dn8f("iframe");
            var eY9P;
            try {
                eY9P = document.createElement('<iframe name="' + X7Q + '"></iframe>');
                eY9P.frameBorder = 0
            } catch(e) {
                eY9P = a6g.dn8f("iframe");
                eY9P.name = X7Q
            }
            return eY9P
        };
        return function(e6c) {
            e6c = e6c || bc7V;
            var eY9P = clP9G(e6c.name || "");
            if (!e6c.visible) eY9P.style.display = "none";
            if (k6e.gZ9Q(e6c.onload)) h6b.s6m(eY9P, "load",
            function(d6d) {
                if (!eY9P.src) return;
                h6b.ht0x(eY9P, "load");
                e6c.onload(d6d)
            });
            var bI7B = e6c.parent;
            if (k6e.gZ9Q(bI7B)) {
                try {
                    bI7B(eY9P)
                } catch(e) {}
            } else { (a6g.A7t(bI7B) || document.body).appendChild(eY9P)
            }
            var da8S = e6c.src || clO9F();
            window.setTimeout(function() {
                eY9P.src = da8S
            },
            0);
            return eY9P
        }
    } ();
    a6g.cS8K = dg8Y.cS8K = function() {
        var bQT5Y = function(As6m) {
            As6m.src = et8l.bka6U
        };
        var bQX5c = function(eI9z) {
            eI9z.src = "about:blank"
        };
        return function(G7z, cnv0x) {
            G7z = a6g.A7t(G7z);
            if (!G7z) return this;
            if (!cnv0x) h6b.ht0x(G7z);
            delete byJ0x[G7z.id];
            var fK9B = G7z.tagName;
            if (fK9B == "IFRAME") {
                bQX5c(G7z)
            } else if (fK9B == "IMG") {
                bQT5Y(G7z)
            } else if ( !! G7z.getElementsByTagName) {
                k6e.be7X(G7z.getElementsByTagName("img"), bQT5Y);
                k6e.be7X(G7z.getElementsByTagName("iframe"), bQX5c)
            }
            if ( !! G7z.parentNode) {
                G7z.parentNode.removeChild(G7z)
            }
            return this
        }
    } ();
    a6g.nf2x = dg8Y.nf2x = function(G7z) {
        G7z = a6g.A7t(G7z);
        if ( !! G7z) S7L.appendChild(G7z);
        return this
    };
    a6g.bRZ5e = dg8Y.bRZ5e = function(G7z) {
        G7z = a6g.A7t(G7z);
        if (!G7z) return;
        k6e.oc2x(G7z.childNodes,
        function(g6a) {
            a6g.cS8K(g6a)
        })
    };
    a6g.Lk9b = dg8Y.Lk9b = function() {
        var en8f, gS9J = /\s+/;
        var coJ0x = function() {
            if ( !! en8f) return;
            en8f = a6g.ve5j(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a6g.bSc5h()
        };
        return function(G7z, e6c) {
            G7z = a6g.A7t(G7z);
            if (!G7z) return;
            coJ0x();
            e6c = e6c || bc7V;
            var bI7B = G7z.parentNode;
            if (!a6g.bG7z(bI7B, en8f)) {
                bI7B = a6g.dn8f("span", en8f);
                G7z.insertAdjacentElement("beforeBegin", bI7B);
                bI7B.appendChild(G7z)
            }
            var bSe5j = e6c.nid || "",
            g6a = a6g.F7y(bI7B, bSe5j || en8f + "-show")[0];
            if (!g6a) {
                var em8e = ((e6c.clazz || "") + " " + bSe5j).trim();
                em8e = en8f + "-show" + (!em8e ? "": " ") + em8e;
                g6a = a6g.dn8f(e6c.tag || "span", em8e);
                bI7B.appendChild(g6a)
            }
            var em8e = e6c.clazz;
            if ( !! em8e) {
                em8e = (em8e || "").trim().split(gS9J)[0] + "-parent";
                a6g.w7p(bI7B, em8e)
            }
            return g6a
        }
    } ();
    a6g.t7m = dg8Y.t7m = function() {
        var bul9c = {},
        fK9B = "data-",
        dl8d = /\-(.{1})/gi;
        var Hl8d = function(G7z) {
            var D7w = a6g.mc2x(G7z);
            if ( !! bul9c[D7w]) return;
            var bB7u = {};
            k6e.be7X(G7z.attributes,
            function(g6a) {
                var L7E = g6a.nodeName;
                if (L7E.indexOf(fK9B) != 0) return;
                L7E = L7E.replace(fK9B, "").replace(dl8d,
                function($1, $2) {
                    return $2.toUpperCase()
                });
                bB7u[L7E] = g6a.nodeValue || ""
            });
            bul9c[D7w] = bB7u
        };
        return function(G7z, L7E, C7v) {
            G7z = a6g.A7t(G7z);
            if (!G7z) return null;
            var bfY5d = G7z.dataset;
            if (!bfY5d) {
                Hl8d(G7z);
                bfY5d = bul9c[G7z.id]
            }
            if (C7v !== undefined) bfY5d[L7E] = C7v;
            return bfY5d[L7E]
        }
    } ();
    a6g.hc9T = dg8Y.hc9T = function(G7z, X7Q, C7v) {
        G7z = a6g.A7t(G7z);
        if (!G7z) return "";
        if (C7v !== undefined && !!G7z.setAttribute) G7z.setAttribute(X7Q, C7v);
        return bh7a.brg8Y(G7z, X7Q)
    };
    a6g.oC2x = function(dZ8R) {
        var tA4E = document.createElement("div");
        tA4E.innerHTML = dZ8R;
        var j6d = a6g.dj8b(tA4E);
        return j6d.length > 1 ? tA4E: j6d[0]
    };
    a6g.coO0x = dg8Y.coO0x = function(G7z) {
        G7z = a6g.A7t(G7z);
        return ! G7z ? "": bh7a.bsQ8I(G7z)
    };
    a6g.bSf5k = function(Fl8d) {
        Fl8d = (Fl8d || "").trim();
        return ! Fl8d ? null: bh7a.btO9F(Fl8d)
    };
    a6g.coT0x = function(cI8A, u7n) {
        cI8A = cI8A || "";
        switch (u7n) {
        case "xml":
            cI8A = a6g.bSf5k(cI8A);
            break;
        case "json":
            try {
                cI8A = JSON.parse(cI8A)
            } catch(ex) {
                cI8A = null
            }
            break
        }
        return cI8A
    };
    a6g.ik0x = dg8Y.ik0x = function() {
        var coU0x = function(G7z) {
            return G7z == document.body || G7z == document.documentElement
        };
        return function(el8d, nY2x) {
            el8d = a6g.A7t(el8d);
            if (!el8d) return null;
            nY2x = a6g.A7t(nY2x) || null;
            var m6g = {
                x: 0,
                y: 0
            },
            bxg0x,
            du8m,
            bfW5b;
            while ( !! el8d && el8d != nY2x) {
                bxg0x = coU0x(el8d);
                du8m = bxg0x ? 0 : el8d.scrollLeft;
                bfW5b = parseInt(a6g.dm8e(el8d, "borderLeftWidth")) || 0;
                m6g.x += el8d.offsetLeft + bfW5b - du8m;
                du8m = bxg0x ? 0 : el8d.scrollTop;
                bfW5b = parseInt(a6g.dm8e(el8d, "borderTopWidth")) || 0;
                m6g.y += el8d.offsetTop + bfW5b - du8m;
                el8d = el8d.offsetParent
            }
            return m6g
        }
    } ();
    a6g.nW2x = dg8Y.nW2x = function(G7z) {
        var bj7c = a6g.ik0x(G7z);
        window.scrollTo(bj7c.x, bj7c.y);
        return this
    };
    a6g.cMt5y = function(ok2x) {
        ok2x = (ok2x || "").trim();
        return bh7a.bHV2x(ok2x)
    };
    a6g.cpa0x = dg8Y.cpa0x = function(G7z, X7Q, bB7u) {
        G7z = a6g.A7t(G7z);
        if (!G7z) return this;
        var C7v = bh7a.bIP2x(X7Q, bB7u);
        if (!C7v) return this;
        a6g.bb7U(G7z, "transform", C7v);
        return this
    };
    a6g.fl9c = dg8Y.fl9c = function(G7z, bB7u) {
        G7z = a6g.A7t(G7z);
        if ( !! G7z) k6e.eQ9H(bB7u,
        function(C7v, X7Q) {
            a6g.bb7U(G7z, X7Q, C7v)
        });
        return this
    };
    a6g.cpw0x = dg8Y.cpw0x = function(gC9t, e6c) {
        gC9t = a6g.A7t(gC9t);
        if (!gC9t) return {
            start: 0,
            end: 0
        };
        if (k6e.uE4I(e6c)) e6c = {
            start: e6c,
            end: e6c
        };
        if (e6c != null) {
            if (e6c.end == null) e6c.end = e6c.start || 0;
            bh7a.bmi6c(gC9t, e6c)
        } else {
            e6c = bh7a.bon7g(gC9t)
        }
        return e6c
    };
    a6g.bb7U = dg8Y.bb7U = function(G7z, X7Q, C7v) {
        G7z = a6g.A7t(G7z);
        if ( !! G7z) bh7a.bjP5U(G7z, X7Q, C7v);
        return this
    };
    a6g.dm8e = dg8Y.dm8e = function(G7z, X7Q) {
        G7z = a6g.A7t(G7z);
        if (!G7z) return "";
        var hu0x = !window.getComputedStyle ? G7z.currentStyle || bc7V: window.getComputedStyle(G7z, null);
        return hu0x[bh7a.bIQ2x(X7Q)] || ""
    };
    a6g.bUf6Z = function() {
        var dl8d = /[\s\r\n]+/gi;
        return function(cm8e) {
            cm8e = (cm8e || "").trim().replace(dl8d, " ");
            if (!cm8e) return;
            var g6a = a6g.dn8f("style");
            document.head.appendChild(g6a);
            bh7a.bmN6H(g6a, bh7a.ctv1x(cm8e));
            return g6a
        }
    } ();
    a6g.bUh6b = function(Ab6V) {
        try {
            Ab6V = Ab6V.trim();
            if ( !! Ab6V) return (new Function(Ab6V))()
        } catch(ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a6g.ve5j = function() {
        var dl8d = /#<.*?>/g,
        gV9M = +(new Date);
        return function(kY1x) {
            if (!KT9K) KT9K = [];
            var fZ9Q = "auto-" + gV9M++;
            KT9K.push(kY1x.replace(dl8d, fZ9Q));
            return fZ9Q
        }
    } ();
    a6g.bSc5h = function() {
        if ( !! KT9K) {
            a6g.bUf6Z(KT9K.join(""));
            KT9K = null
        }
        return this
    };
    a6g.cLT5Y = function(cm8e, kY1x) {
        cm8e = a6g.A7t(cm8e);
        return ! cm8e ? null: bh7a.bnT7M(cm8e, kY1x)
    };
    a6g.w7p = dg8Y.w7p = function() {
        bh7a.bBp1x.apply(bh7a, arguments);
        return this
    };
    a6g.y7r = dg8Y.y7r = function() {
        bh7a.bjC5H.apply(bh7a, arguments);
        return this
    };
    a6g.fz9q = dg8Y.fz9q = function() {
        bh7a.RD1x.apply(bh7a, arguments);
        return this
    };
    a6g.bG7z = dg8Y.bG7z = function() {
        return bh7a.bkp6j.apply(bh7a, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    dg8Y.isChange = !0
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    fL9C = NEJ.R,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    bh7a = c6e("nej.h"),
    k6e = c6e("nej.u");
    var GR8J = function(i6c, u7n) {
        try {
            u7n = u7n.toLowerCase();
            if (i6c === null) return u7n == "null";
            if (i6c === undefined) return u7n == "undefined";
            return bc7V.toString.call(i6c).toLowerCase() == "[object " + u7n + "]"
        } catch(e) {
            return ! 1
        }
    };
    k6e.gZ9Q = function(i6c) {
        return GR8J(i6c, "function")
    };
    k6e.fO9F = function(i6c) {
        return GR8J(i6c, "string")
    };
    k6e.uE4I = function(i6c) {
        return GR8J(i6c, "number")
    };
    k6e.cLS5X = function(i6c) {
        return GR8J(i6c, "boolean")
    };
    k6e.GY8Q = function(i6c) {
        return GR8J(i6c, "date")
    };
    k6e.eh8Z = function(i6c) {
        return GR8J(i6c, "array")
    };
    k6e.mn2x = function(i6c) {
        return GR8J(i6c, "object")
    };
    k6e.fN9E = function() {
        var dl8d = /[^\x00-\xfff]/g;
        return function(bs7l) {
            return ("" + (bs7l || "")).replace(dl8d, "**").length
        }
    } ();
    k6e.do8g = function(j6d, p6j) {
        var ej8b = k6e.gZ9Q(p6j) ? p6j: function(C7v) {
            return C7v === p6j
        },
        r6l = k6e.eQ9H(j6d, ej8b);
        return r6l != null ? r6l: -1
    };
    k6e.cLR5W = function() {
        var bUv6p;
        var TN1x = function(j6d, px2x, pt2x) {
            if (px2x > pt2x) return - 1;
            var IU9L = Math.ceil((px2x + pt2x) / 2),
            m6g = bUv6p(j6d[IU9L], IU9L, j6d);
            if (m6g == 0) return IU9L;
            if (m6g < 0) return TN1x(j6d, px2x, IU9L - 1);
            return TN1x(j6d, IU9L + 1, pt2x)
        };
        return function(j6d, KQ9H) {
            bUv6p = KQ9H || bu7n;
            return TN1x(j6d, 0, j6d.length - 1)
        }
    } ();
    k6e.oc2x = function(j6d, cE8w, O7H) {
        if (!j6d || !j6d.length || !k6e.gZ9Q(cE8w)) return null;
        for (var i = j6d.length - 1; i >= 0; i--) if ( !! cE8w.call(O7H, j6d[i], i, j6d)) return i;
        return null
    };
    k6e.be7X = function(j6d, cE8w, O7H) {
        if (!j6d || !j6d.length || !k6e.gZ9Q(cE8w)) return this;
        if ( !! j6d.forEach) {
            j6d.forEach(cE8w, O7H);
            return this
        }
        for (var i = 0,
        l = j6d.length; i < l; i++) cE8w.call(O7H, j6d[i], i, j6d);
        return this
    };
    k6e.eQ9H = function(j6d, cE8w, O7H) {
        if (!j6d || !k6e.gZ9Q(cE8w)) return null;
        if (j6d.length != null) {
            if (j6d.length > 0) for (var i = 0,
            l = j6d.length; i < l; i++) if ( !! cE8w.call(O7H, j6d[i], i, j6d)) return i
        }
        if (k6e.mn2x(j6d)) {
            for (var x in j6d) if (j6d.hasOwnProperty(x) && !!cE8w.call(O7H, j6d[x], x, j6d)) return x
        }
        return null
    };
    k6e.cve1x = function(jD1x, cvs1x, e6c) {
        jD1x = jD1x || [];
        e6c = e6c || bc7V;
        var bUM6G = !!e6c.union,
        yy6s = !!e6c.begin,
        bfN4R = e6c.compare,
        cvR1x = bUM6G && yy6s ? k6e.oc2x: k6e.be7X;
        cvR1x(cvs1x,
        function(p6j) {
            if ( !! bfN4R) bfN4R = bfN4R.ey9p(p6j);
            var r6l = k6e.do8g(jD1x, bfN4R || p6j);
            if (r6l >= 0) jD1x.splice(r6l, 1);
            if (bUM6G) jD1x[yy6s ? "unshift": "push"](p6j)
        });
        return jD1x
    };
    k6e.CF7y = function(bB7u, bs7l) {
        if (!bB7u || !bs7l || !bs7l.replace) return bs7l || "";
        return bs7l.replace(bB7u.r,
        function($1) {
            var m6g = bB7u[!bB7u.i ? $1.toLowerCase() : $1];
            return m6g != null ? m6g: $1
        })
    };
    k6e.dL8D = function() {
        var bB7u = {
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
        return function(bs7l) {
            return k6e.CF7y(bB7u, bs7l)
        }
    } ();
    k6e.CY7R = function() {
        var bB7u = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(bs7l) {
            return k6e.CF7y(bB7u, bs7l)
        }
    } ();
    k6e.ir0x = function() {
        var bB7u = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        },
        cwQ2x = ["上午", "下午"],
        cwS2x = ["A.M.", "P.M."],
        bmx6r = ["日", "一", "二", "三", "四", "五", "六"],
        cxb2x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        cxo2x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var UF2x = function(hs0x) {
            hs0x = parseInt(hs0x) || 0;
            return (hs0x < 10 ? "0": "") + hs0x
        };
        var cxp2x = function(qr3x) {
            return qr3x < 12 ? 0 : 1
        };
        return function(bA7t, Lq9h, cxL2x) {
            if (!bA7t || !Lq9h) return "";
            bA7t = k6e.bfy4C(bA7t);
            bB7u.yyyy = bA7t.getFullYear();
            bB7u.yy = ("" + bB7u.yyyy).substr(2);
            bB7u.M = bA7t.getMonth() + 1;
            bB7u.MM = UF2x(bB7u.M);
            bB7u.eM = cxo2x[bB7u.M - 1];
            bB7u.cM = cxb2x[bB7u.M - 1];
            bB7u.d = bA7t.getDate();
            bB7u.dd = UF2x(bB7u.d);
            bB7u.H = bA7t.getHours();
            bB7u.HH = UF2x(bB7u.H);
            bB7u.m = bA7t.getMinutes();
            bB7u.mm = UF2x(bB7u.m);
            bB7u.s = bA7t.getSeconds();
            bB7u.ss = UF2x(bB7u.s);
            bB7u.ms = bA7t.getMilliseconds();
            bB7u.w = bmx6r[bA7t.getDay()];
            var bVK6E = cxp2x(bB7u.H);
            bB7u.ct = cwQ2x[bVK6E];
            bB7u.et = cwS2x[bVK6E];
            if ( !! cxL2x) {
                bB7u.H = bB7u.H % 12
            }
            return k6e.CF7y(bB7u, Lq9h)
        }
    } ();
    k6e.bfy4C = function(bA7t) {
        var df8X = bA7t;
        if (k6e.fO9F(bA7t)) df8X = new Date(Date.parse(bA7t));
        if (!k6e.GY8Q(bA7t)) df8X = new Date(bA7t);
        return df8X
    };
    k6e.Lb9S = function(cxZ2x, cyj2x) {
        return (new Number(cxZ2x)).toFixed(cyj2x)
    };
    k6e.bql8d = function() {
        var gS9J = /([^\/:])\/.*$/,
        kC1x = /\/[^\/]+$/,
        HE8w = /[#\?]/,
        bqu8m = location.href.split(/[?#]/)[0],
        tO4S = document.createElement("a");
        var brc8U = function(jE1x) {
            return (jE1x || "").indexOf("://") > 0
        };
        var bWe6Y = function(jE1x) {
            return (jE1x || "").split(HE8w)[0].replace(kC1x, "/")
        };
        var cyT2x = function(jE1x, gs9j) {
            if (jE1x.indexOf("/") == 0) return gs9j.replace(gS9J, "$1") + jE1x;
            return bWe6Y(gs9j) + jE1x
        };
        bqu8m = bWe6Y(bqu8m);
        return function(jE1x, gs9j) {
            jE1x = (jE1x || "").trim();
            if (!brc8U(gs9j)) gs9j = bqu8m;
            if (!jE1x) return gs9j;
            if (brc8U(jE1x)) return jE1x;
            jE1x = cyT2x(jE1x, gs9j);
            tO4S.href = jE1x;
            jE1x = tO4S.href;
            return brc8U(jE1x) ? jE1x: tO4S.getAttribute("href", 4)
        }
    } ();
    k6e.cyV2x = function() {
        var dl8d = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(Z7S) {
            if (dl8d.test(Z7S || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    } ();
    k6e.bWh6b = function(I7B, iE1x) {
        if (!I7B) return iE1x;
        var X7Q = I7B.tagName.toLowerCase(),
        j6d = a6g.dj8b(I7B);
        if (!j6d || !j6d.length) {
            iE1x[X7Q] = I7B.textContent || I7B.text || "";
            return iE1x
        }
        var cl8d = {};
        iE1x[X7Q] = cl8d;
        k6e.be7X(j6d,
        function(g6a) {
            k6e.bWh6b(g6a, cl8d)
        });
        return iE1x
    };
    k6e.cKV5a = function(Fl8d) {
        try {
            return k6e.bWh6b(a6g.bSf5k(Fl8d), {})
        } catch(ex) {
            return null
        }
    };
    k6e.Vb2x = function(iC1x, VB2x) {
        var iE1x = {};
        k6e.be7X((iC1x || "").split(VB2x),
        function(X7Q) {
            var bfo4s = X7Q.split("=");
            if (!bfo4s || !bfo4s.length) return;
            var L7E = bfo4s.shift();
            if (!L7E) return;
            iE1x[decodeURIComponent(L7E)] = decodeURIComponent(bfo4s.join("="))
        });
        return iE1x
    };
    k6e.wT5Y = function(gJ9A, VB2x, cAx2x) {
        if (!gJ9A) return "";
        var bw7p = [];
        for (var x in gJ9A) {
            bw7p.push(encodeURIComponent(x) + "=" + ( !! cAx2x ? encodeURIComponent(gJ9A[x]) : gJ9A[x]))
        }
        return bw7p.join(VB2x || ",")
    };
    k6e.hd9U = function(bx7q) {
        return k6e.Vb2x(bx7q, "&")
    };
    k6e.cD8v = function(gJ9A) {
        return k6e.wT5Y(gJ9A, "&", !0)
    };
    k6e.cKI5N = function(gJ9A) {
        return bh7a.Km9d(gJ9A)
    };
    k6e.cKG5L = function(j6d, ej8b) {
        var m6g = {};
        k6e.be7X(j6d,
        function(p6j) {
            var L7E = p6j;
            if ( !! ej8b) {
                L7E = ej8b(p6j)
            }
            m6g[L7E] = p6j
        });
        return m6g
    };
    k6e.cKF5K = function(hs0x, go9f) {
        var cDk3x = ("" + hs0x).length,
        cDC3x = Math.max(1, parseInt(go9f) || 0),
        du8m = cDC3x - cDk3x;
        if (du8m > 0) {
            hs0x = (new Array(du8m + 1)).join("0") + hs0x
        }
        return "" + hs0x
    };
    k6e.bfk4o = function(gJ9A, X7Q) {
        if (!k6e.eh8Z(X7Q)) {
            try {
                delete gJ9A[X7Q]
            } catch(e) {
                gJ9A[X7Q] = undefined
            }
            return this
        }
        k6e.be7X(X7Q, k6e.bfk4o.f6b(k6e, gJ9A));
        return this
    };
    k6e.RR1x = function() {
        var bYb6V = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(br7k) {
            br7k = br7k || 10;
            var m6g = [];
            for (var i = 0,
            bYG7z; i < br7k; ++i) {
                bYG7z = Math.floor(Math.random() * bYb6V.length);
                m6g.push(bYb6V.charAt(bYG7z))
            }
            return m6g.join("")
        }
    } ();
    k6e.ED8v = function(fS9J, fC9t) {
        return Math.floor(Math.random() * (fC9t - fS9J) + fS9J)
    };
    k6e.oD2x = function(br7k) {
        br7k = Math.max(0, Math.min(br7k || 8, 30));
        var fS9J = Math.pow(10, br7k - 1),
        fC9t = fS9J * 10;
        return k6e.ED8v(fS9J, fC9t).toString()
    };
    k6e.bfj4n = function() {
        var gV9M = +(new Date);
        return function() {
            return "" + gV9M++
        }
    } ()
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    fL9C = NEJ.R,
    bu7n = NEJ.F,
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ut"),
    pX3x;
    if ( !! P7I.cL8D) return;
    P7I.cL8D = NEJ.C();
    pX3x = P7I.cL8D.prototype;
    P7I.cL8D.B7u = function(e6c) {
        e6c = e6c || {};
        var cJ8B = !!this.CB7u && this.CB7u.shift();
        if (!cJ8B) {
            cJ8B = new this(e6c);
            this.cGi4m = (this.cGi4m || 0) + 1
        }
        cJ8B.bo7h(e6c);
        return cJ8B
    };
    P7I.cL8D.V7O = function() {
        var WQ2x = function(p6j, r6l, j6d) {
            p6j.V7O();
            j6d.splice(r6l, 1)
        };
        return function(cJ8B) {
            if (!cJ8B) return null;
            if (!k6e.eh8Z(cJ8B)) {
                if (! (cJ8B instanceof this)) {
                    var fZ9Q = cJ8B.constructor;
                    if ( !! fZ9Q.V7O) fZ9Q.V7O(cJ8B);
                    return null
                }
                if (cJ8B == this.fs9j) delete this.fs9j;
                if (cJ8B == this.Da7T) delete this.Da7T;
                cJ8B.bC7v();
                if (!this.CB7u) this.CB7u = [];
                if (k6e.do8g(this.CB7u, cJ8B) < 0) {
                    this.CB7u.push(cJ8B)
                }
                return null
            }
            k6e.oc2x(cJ8B, WQ2x, this)
        }
    } ();
    P7I.cL8D.fP9G = function(e6c) {
        e6c = e6c || {};
        if (!this.fs9j) this.fs9j = this.B7u(e6c);
        return this.fs9j
    };
    P7I.cL8D.bZn7g = function(e6c, sZ3x) {
        e6c = e6c || {};
        if ( !! sZ3x && !!this.Da7T) {
            this.Da7T.V7O();
            delete this.Da7T
        }
        if (!this.Da7T) {
            this.Da7T = this.B7u(e6c)
        } else {
            this.Da7T.bo7h(e6c)
        }
        return this.Da7T
    };
    pX3x.cA8s = function() {
        var gV9M = +(new Date);
        return function() {
            this.id = gV9M++;
            this.mE2x = {};
            this.bZM7F = {}
        }
    } ();
    pX3x.bo7h = function(e6c) {
        this.byQ0x(e6c)
    };
    pX3x.bC7v = function() {
        this.ht0x();
        this.LD9u()
    };
    pX3x.bY7R = function() {
        var gV9M = +(new Date);
        var cIw4A = function(bi7b) {
            if (!bi7b || bi7b.length < 3) return;
            this.bZM7F["de-" + gV9M++] = bi7b;
            h6b.s6m.apply(h6b, bi7b)
        };
        return function(j6d) {
            k6e.be7X(j6d, cIw4A, this)
        }
    } ();
    pX3x.LD9u = function() {
        var cJa4e = function(bi7b, L7E, bB7u) {
            delete bB7u[L7E];
            h6b.nu2x.apply(h6b, bi7b)
        };
        return function() {
            k6e.eQ9H(this.bZM7F, cJa4e)
        }
    } ();
    pX3x.cNo5t = function(ej8b) {
        ej8b = ej8b || bu7n;
        k6e.eQ9H(this,
        function(Jo9f, L7E, bB7u) {
            if ( !! Jo9f && !!Jo9f.V7O && !ej8b(Jo9f)) {
                delete bB7u[L7E];
                Jo9f.V7O()
            }
        })
    };
    pX3x.V7O = function() {
        this.constructor.V7O(this)
    };
    pX3x.bzR0x = function(u7n) {
        var d6d = this.mE2x[u7n.toLowerCase()];
        return !! d6d && d6d !== bu7n
    };
    pX3x.s6m = function(u7n, d6d) {
        this.zf6Z.apply(this, arguments);
        return this
    };
    pX3x.nu2x = function(u7n, d6d) {
        var u7n = (u7n || "").toLowerCase(),
        cw8o = this.mE2x[u7n];
        if (!k6e.eh8Z(cw8o)) {
            if (cw8o == d6d) delete this.mE2x[u7n];
            return
        }
        k6e.oc2x(cw8o,
        function(eG9x, r6l, j6d) {
            if (eG9x == d6d) j6d.splice(r6l, 1)
        })
    };
    pX3x.zf6Z = function(u7n, d6d) {
        if ( !! u7n && k6e.gZ9Q(d6d)) this.mE2x[u7n.toLowerCase()] = d6d;
        return this
    };
    pX3x.byQ0x = function() {
        var cKl4p = function(d6d, u7n) {
            this.zf6Z(u7n, d6d)
        };
        return function(cw8o) {
            k6e.eQ9H(cw8o, cKl4p, this);
            return this
        }
    } ();
    pX3x.ht0x = function() {
        var bAD0x = function(d6d, u7n) {
            this.ht0x(u7n)
        };
        return function(u7n) {
            var u7n = (u7n || "").toLowerCase();
            if ( !! u7n) {
                delete this.mE2x[u7n]
            } else {
                k6e.eQ9H(this.mE2x, bAD0x, this)
            }
            return this
        }
    } ();
    pX3x.bAE0x = function(u7n, d6d) {
        if (!u7n || !k6e.gZ9Q(d6d)) return this;
        u7n = u7n.toLowerCase();
        var cw8o = this.mE2x[u7n];
        if (!cw8o) {
            this.mE2x[u7n] = d6d;
            return this
        }
        if (!k6e.eh8Z(cw8o)) {
            this.mE2x[u7n] = [cw8o]
        }
        this.mE2x[u7n].push(d6d);
        return this
    };
    pX3x.z7s = function(u7n) {
        var d6d = this.mE2x[(u7n || "").toLowerCase()];
        if (!d6d) return this;
        var bi7b = fL9C.slice.call(arguments, 1);
        if (!k6e.eh8Z(d6d)) return d6d.apply(this, bi7b);
        k6e.be7X(d6d,
        function(dB8t) {
            try {
                dB8t.apply(this, bi7b)
            } catch(ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        },
        this);
        return this
    };
    P7I.beU4Y = function() {
        var S7L = {};
        return function(D7w, fZ9Q, e6c) {
            var fv9m = fZ9Q.cKj4n;
            if (!fv9m) {
                fv9m = k6e.RR1x(10);
                fZ9Q.cKj4n = fv9m
            }
            var L7E = D7w + "-" + fv9m,
            cJ8B = S7L[L7E];
            if ( !! e6c && !cJ8B) {
                cJ8B = fZ9Q.B7u(e6c);
                cJ8B.V7O = cJ8B.V7O.eO9F(function(d6d) {
                    delete S7L[L7E];
                    delete cJ8B.V7O
                });
                S7L[L7E] = cJ8B
            }
            return cJ8B
        }
    } ()
})(); (function() {
    var o = NEJ.O,
    u = NEJ.P("nej.u"),
    j = NEJ.P("nej.j");
    j.gQ9H = function() {
        var df8X = new Date,
        cKe4i = +df8X,
        biE5J = 864e5;
        var cKd4h = function(X7Q) {
            var sz3x = document.cookie,
            ui4m = "\\b" + X7Q + "=",
            beQ4U = sz3x.search(ui4m);
            if (beQ4U < 0) return "";
            beQ4U += ui4m.length - 2;
            var yW6Q = sz3x.indexOf(";", beQ4U);
            if (yW6Q < 0) yW6Q = sz3x.length;
            return sz3x.substring(beQ4U, yW6Q) || ""
        };
        return function(X7Q, i6c) {
            if (i6c === undefined) return cKd4h(X7Q);
            if (u.fO9F(i6c)) {
                if ( !! i6c) {
                    document.cookie = X7Q + "=" + i6c + ";";
                    return i6c
                }
                i6c = {
                    expires: -100
                }
            }
            i6c = i6c || o;
            var sz3x = X7Q + "=" + (i6c.value || "") + ";";
            delete i6c.value;
            if (i6c.expires !== undefined) {
                df8X.setTime(cKe4i + i6c.expires * biE5J);
                i6c.expires = df8X.toGMTString()
            }
            sz3x += u.wT5Y(i6c, ";");
            document.cookie = sz3x
        }
    } ()
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    iP1x = c6e("nej.c"),
    et8l = c6e("nej.g"),
    a6g = c6e("nej.e"),
    v7o = c6e("nej.j"),
    H7A = c6e("nej.ut"),
    P7I = c6e("nej.ut.j"),
    k6e = c6e("nej.u"),
    b6f;
    if ( !! P7I.LS9J) return;
    P7I.LS9J = NEJ.C();
    b6f = P7I.LS9J.M7F(H7A.cL8D);
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.qB3x = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.qB3x, e6c);
        var Fm8e = iP1x.A7t("csrf");
        if ((/^\/[^\/]/.test(this.qB3x.url) || this.qB3x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!Fm8e.cookie && !!Fm8e.param) {
            var bx7q = encodeURIComponent(Fm8e.param) + "=" + encodeURIComponent(v7o.gQ9H(Fm8e.cookie) || ""),
            VB2x = this.qB3x.url.indexOf("?") < 0 ? "?": "&";
            this.qB3x.url += VB2x + bx7q
        }
        this.beG4K = e6c.headers || {};
        var bs7l = this.beG4K[et8l.BH7A];
        if (bs7l == null) this.beG4K[et8l.BH7A] = et8l.chG8y
    };
    b6f.bC7v = function() {
        this.bH7A();
        delete this.DO7H;
        delete this.qB3x;
        delete this.beG4K
    };
    b6f.cKc4g = function(bs7l) {
        var bB7u = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.qB3x.noescape) {
            return k6e.CF7y(bB7u, bs7l)
        } else {
            return bs7l
        }
    };
    b6f.xs5x = function(d6d) {
        var dy8q = d6d.status;
        if (dy8q == -1) {
            this.z7s("onerror", {
                code: et8l.bGo2x,
                message: "请求[" + this.qB3x.url + "]超时！"
            });
            return
        }
        if (("" + dy8q).indexOf("2") != 0) {
            this.z7s("onerror", {
                data: dy8q,
                code: et8l.byu0x,
                message: "服务器返回异常状态[" + dy8q + "]!",
                extData: d6d.result
            });
            return
        }
        this.z7s("onload", a6g.coT0x(this.cKc4g(d6d.result), this.qB3x.type))
    };
    b6f.co8g = bu7n;
    b6f.blQ6K = function(i6c) {
        var Z7S = this.qB3x.url;
        if (!Z7S) {
            this.z7s("onerror", {
                code: et8l.bpb7U,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.qB3x.data = i6c == null ? null: i6c;
            var d6d = {
                request: this.qB3x,
                headers: this.beG4K
            };
            try {
                this.z7s("onbeforerequest", d6d)
            } catch(ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.co8g(d6d)
        } catch(e) {
            this.z7s("onerror", {
                code: et8l.byu0x,
                message: "请求[" + Z7S + "]失败:" + e.message + "！"
            })
        }
        return this
    };
    b6f.kN1x = bu7n
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    bh7a = c6e("nej.h"),
    et8l = c6e("nej.g"),
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ut.j"),
    S7L = {},
    Po0x;
    if ( !! P7I.beB4F) return;
    P7I.beB4F = NEJ.C();
    Po0x = P7I.beB4F.M7F(P7I.LS9J);
    Po0x.bC7v = function() {
        this.bH7A();
        window.clearTimeout(this.dM8E);
        delete this.dM8E;
        try {
            this.sE3x.onreadystatechange = bu7n;
            this.sE3x.abort()
        } catch(e) {}
        delete this.sE3x
    };
    Po0x.co8g = function() {
        var cJX4b = function(C7v, L7E) {
            this.sE3x.setRequestHeader(L7E, C7v)
        };
        return function(e6c) {
            var gx9o = e6c.request,
            pD2x = e6c.headers;
            this.sE3x = bh7a.bna6U();
            if (pD2x[et8l.BH7A] === et8l.GU8M) {
                delete pD2x[et8l.BH7A];
                this.sE3x.upload.onprogress = this.gF9w.f6b(this, 1);
                if (gx9o.data.tagName === "FORM") gx9o.data = new FormData(gx9o.data)
            }
            this.sE3x.onreadystatechange = this.gF9w.f6b(this, 2);
            if (gx9o.timeout != 0) {
                this.dM8E = window.setTimeout(this.gF9w.f6b(this, 3), gx9o.timeout)
            }
            this.sE3x.open(gx9o.method, gx9o.url, !gx9o.sync);
            k6e.eQ9H(pD2x, cJX4b, this);
            if ( !! this.qB3x.cookie && "withCredentials" in this.sE3x) this.sE3x.withCredentials = !0;
            this.sE3x.send(gx9o.data)
        }
    } ();
    Po0x.gF9w = function(u7n) {
        switch (u7n) {
        case 1:
            this.z7s("onuploading", arguments[1]);
            break;
        case 2:
            if (this.sE3x.readyState == 4) this.xs5x({
                status: this.sE3x.status,
                result: this.sE3x.responseText || ""
            });
            break;
        case 3:
            this.xs5x({
                status:
                -1
            });
            break
        }
    };
    Po0x.kN1x = function() {
        this.xs5x({
            status: 0
        });
        return this
    }
})(); (function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Ps0x = {},
    bez4D = [],
    cad7W = /\s+/g,
    gV9M = +(new Date),
    LU9L,
    bT7M,
    ic0x;
    var FB8t = function() {
        var gS9J = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
        kC1x = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
        HE8w = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
        boM7F = /^new\s+/,
        cJV4Z = /['"]/;
        var cJR4V = function(C7v) {
            if (gS9J.test(C7v)) return;
            C7v = C7v.split(".")[0].trim();
            if (!C7v || cJV4Z.test(C7v)) return;
            C7v = C7v.replace(boM7F, "");
            try {
                if (HE8w.test(C7v)) return;
                ic0x[C7v] = 1
            } catch(e) {}
        };
        return function(bs7l) {
            bs7l = bs7l || "";
            if (!bs7l || gS9J.test(bs7l)) return;
            var bw7p = bs7l.split(kC1x);
            for (var i = 0,
            l = bw7p.length; i < l; i++) cJR4V(bw7p[i])
        }
    } ();
    var cJJ4N = function(dO8G) {
        if (dO8G[2] != "in") throw "bad for loop statement: " + dO8G.join(" ");
        bez4D.push(dO8G[1]);
        FB8t(dO8G[3]);
        return "var __HASH__" + dO8G[1] + " = " + dO8G[3] + "," + dO8G[1] + "," + dO8G[1] + "_count=0;" + "if (!!__HASH__" + dO8G[1] + ")" + "for(var " + dO8G[1] + "_key in __HASH__" + dO8G[1] + "){" + dO8G[1] + " = __HASH__" + dO8G[1] + "[" + dO8G[1] + "_key];" + "if (typeof(" + dO8G[1] + ')=="function") continue;' + dO8G[1] + "_count++;"
    };
    var cJI4M = function() {
        var dO8G = bez4D[bez4D.length - 1];
        return "}; if(!__HASH__" + dO8G + "||!" + dO8G + "_count){"
    };
    var cJE4I = function() {
        bez4D.pop();
        return "};"
    };
    var cJD4H = function(dO8G) {
        if (dO8G[2] != "as") throw "bad for list loop statement: " + dO8G.join(" ");
        var Pu0x = dO8G[1].split("..");
        if (Pu0x.length > 1) {
            FB8t(Pu0x[0]);
            FB8t(Pu0x[1]);
            return "for(var " + dO8G[3] + "," + dO8G[3] + "_index=0," + dO8G[3] + "_beg=" + Pu0x[0] + "," + dO8G[3] + "_end=" + Pu0x[1] + "," + dO8G[3] + "_length=parseInt(" + dO8G[3] + "_end-" + dO8G[3] + "_beg+1);" + dO8G[3] + "_index<" + dO8G[3] + "_length;" + dO8G[3] + "_index++){" + dO8G[3] + " = " + dO8G[3] + "_beg+" + dO8G[3] + "_index;"
        } else {
            FB8t(dO8G[1]);
            return "for(var __LIST__" + dO8G[3] + " = " + dO8G[1] + "," + dO8G[3] + "," + dO8G[3] + "_index=0," + dO8G[3] + "_length=__LIST__" + dO8G[3] + ".length;" + dO8G[3] + "_index<" + dO8G[3] + "_length;" + dO8G[3] + "_index++){" + dO8G[3] + " = __LIST__" + dO8G[3] + "[" + dO8G[3] + "_index];"
        }
    };
    var cJC4G = function(dO8G) {
        if (!dO8G || !dO8G.length) return;
        dO8G.shift();
        var X7Q = dO8G[0].split("(")[0];
        return "var " + X7Q + " = function" + dO8G.join("").replace(X7Q, "") + "{var __OUT=[];"
    };
    var cJz4D = function(dO8G) {
        if (!dO8G[1]) throw "bad include statement: " + dO8G.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var bqN8F = function(kG1x, dO8G) {
        FB8t(dO8G.slice(1).join(" "));
        return kG1x
    };
    var cJx4B = function(dO8G) {
        return bqN8F("if(", dO8G)
    };
    var cJw4A = function(dO8G) {
        return bqN8F("}else if(", dO8G)
    };
    var cJq4u = function(dO8G) {
        return bqN8F("var ", dO8G)
    };
    bT7M = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cJx4B,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cJw4A,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cJJ4N,
                pmin: 3
            },
            forelse: {
                pfix: cJI4M
            },
            "/for": {
                pfix: cJE4I
            },
            list: {
                pfix: cJD4H,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: cJq4u,
                sfix: ";"
            },
            macro: {
                pfix: cJC4G
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    LU9L = !0
                }
            },
            "/trim": {
                pfix: function() {
                    LU9L = null
                }
            },
            inline: {
                pfix: cJz4D,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(kG1x) {
                return (kG1x || "") + "" + gV9M
            },
            "default": function(C7v, kS1x) {
                return C7v || kS1x
            }
        }
    };
    var cJp4t = function() {
        var cJo4s = /\\([\{\}])/g;
        return function(bs7l, jY1x) {
            bs7l = bs7l.replace(cJo4s, "$1");
            var dO8G = bs7l.slice(1, -1).split(cad7W),
            bk7d = bT7M.def[dO8G[0]];
            if (!bk7d) {
                bep4t(bs7l, jY1x);
                return
            }
            if ( !! bk7d.pmin && bk7d.pmin >= dO8G.length) throw "Statement needs more parameters:" + bs7l;
            jY1x.push( !! bk7d.pfix && typeof bk7d.pfix != "string" ? bk7d.pfix(dO8G) : bk7d.pfix || "");
            if ( !! bk7d.sfix) {
                if (dO8G.length <= 1) {
                    if ( !! bk7d.pdft) jY1x.push(bk7d.pdft)
                } else {
                    for (var i = 1,
                    l = dO8G.length; i < l; i++) {
                        if (i > 1) jY1x.push(" ");
                        jY1x.push(dO8G[i])
                    }
                }
                jY1x.push(bk7d.sfix)
            }
        }
    } ();
    var bZZ7S = function(LY9P, jY1x) {
        if (!LY9P || !LY9P.length) return;
        if (LY9P.length == 1) {
            var bso8g = LY9P.pop();
            FB8t(bso8g);
            jY1x.push(bso8g == "" ? '""': bso8g);
            return
        }
        var bss8k = LY9P.pop().split(":");
        jY1x.push("__MDF['" + bss8k.shift() + "'](");
        bZZ7S(LY9P, jY1x);
        if (bss8k.length > 0) {
            var bi7b = bss8k.join(":");
            FB8t(bi7b);
            jY1x.push("," + bi7b)
        }
        jY1x.push(")")
    };
    var bep4t = function(bs7l, jY1x) {
        if (!bs7l) return;
        var yF6z = bs7l.split("\n");
        if (!yF6z || !yF6z.length) return;
        for (var i = 0,
        l = yF6z.length,
        hU0x; i < l; i++) {
            hU0x = yF6z[i];
            if ( !! LU9L) {
                hU0x = hU0x.trim();
                if (!hU0x) continue
            }
            cJh4l(hU0x, jY1x);
            if ( !! LU9L && i < l - 1) jY1x.push("__OUT.push('\\n');")
        }
    };
    var cJh4l = function() {
        var cIW4a = /\|\|/g,
        cIR4V = /#@@#/g;
        return function(bs7l, jY1x) {
            var PK0x = "}",
            PS0x = -1,
            br7k = bs7l.length,
            yy6s, ex9o, Mf0x, bec4g, PY0x;
            while (PS0x + PK0x.length < br7k) {
                yy6s = "${";
                ex9o = "}";
                Mf0x = bs7l.indexOf(yy6s, PS0x + PK0x.length);
                if (Mf0x < 0) break;
                if (bs7l.charAt(Mf0x + 2) == "%") {
                    yy6s = "${%";
                    ex9o = "%}"
                }
                bec4g = bs7l.indexOf(ex9o, Mf0x + yy6s.length);
                if (bec4g < 0) break;
                bea4e(bs7l.substring(PS0x + PK0x.length, Mf0x), jY1x);
                PY0x = bs7l.substring(Mf0x + yy6s.length, bec4g).replace(cIW4a, "#@@#").split("|");
                for (var i = 0,
                l = PY0x.length; i < l; PY0x[i] = PY0x[i].replace(cIR4V, "||"), i++);
                jY1x.push("__OUT.push(");
                bZZ7S(PY0x, jY1x);
                jY1x.push(");");
                PK0x = ex9o;
                PS0x = bec4g
            }
            bea4e(bs7l.substring(PS0x + PK0x.length), jY1x)
        }
    } ();
    var bea4e = function() {
        var bB7u = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cIQ4U = function(bs7l) {
            return (bs7l || "").replace(bB7u.r,
            function($1) {
                return bB7u[$1] || $1
            })
        };
        return function(bs7l, jY1x) {
            if (!bs7l) return;
            jY1x.push("__OUT.push('" + cIQ4U(bs7l) + "');")
        }
    } ();
    var cIM4Q = function() {
        var cIH4L = /\t/g,
        cIG4K = /\n/g,
        cID4H = /\r\n?/g;
        var bZS7L = function(bs7l, yy6s) {
            var r6l = bs7l.indexOf("}", yy6s + 1);
            while (bs7l.charAt(r6l - 1) == "\\") {
                r6l = bs7l.indexOf("}", r6l + 1)
            }
            return r6l
        };
        var cIz4D = function() {
            var bw7p = [],
            Jx9o = arguments[0];
            for (var x in Jx9o) {
                x = (x || "").trim();
                if (!x) continue;
                bw7p.push(x + "=$v('" + x + "')")
            }
            return bw7p.length > 0 ? "var " + bw7p.join(",") + ";": ""
        };
        return function(bs7l) {
            ic0x = {};
            bs7l = bs7l.replace(cID4H, "\n").replace(cIH4L, "    ");
            var sM3x = ["if(!__CTX) return '';", ""];
            sM3x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            sM3x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            sM3x.push("__OUT=[];");
            var JX9O = -1,
            br7k = bs7l.length;
            var nF2x, Ml0x, Qo1x, Qr1x, CU7N, Qt1x, byr0x, Qu1x;
            while (JX9O + 1 < br7k) {
                nF2x = JX9O;
                nF2x = bs7l.indexOf("{", nF2x + 1);
                while (nF2x >= 0) {
                    Ml0x = bZS7L(bs7l, nF2x);
                    Qo1x = bs7l.substring(nF2x, Ml0x);
                    Qr1x = Qo1x.match(bT7M.blk);
                    if ( !! Qr1x) {
                        CU7N = Qr1x[1].length + 1;
                        Qt1x = bs7l.indexOf("}", nF2x + CU7N);
                        if (Qt1x >= 0) {
                            byr0x = Qt1x - nF2x - CU7N <= 0 ? "{/" + Qr1x[1] + "}": Qo1x.substr(CU7N + 1);
                            CU7N = bs7l.indexOf(byr0x, Qt1x + 1);
                            if (CU7N >= 0) {
                                bep4t(bs7l.substring(JX9O + 1, nF2x), sM3x);
                                Qu1x = bs7l.substring(Qt1x + 1, CU7N);
                                switch (Qr1x[1]) {
                                case "cdata":
                                    bea4e(Qu1x, sM3x);
                                    break;
                                case "minify":
                                    bea4e(Qu1x.replace(cIG4K, " ").replace(cad7W, " "), sM3x);
                                    break;
                                case "eval":
                                    if ( !! Qu1x) sM3x.push("__OUT.push((function(){" + Qu1x + "})());");
                                    break
                                }
                                nF2x = JX9O = CU7N + byr0x.length - 1
                            }
                        }
                    } else if (bs7l.charAt(nF2x - 1) != "$" && bs7l.charAt(nF2x - 1) != "\\" && Qo1x.substr(Qo1x.charAt(1) == "/" ? 2 : 1).search(bT7M.tag) == 0) {
                        break
                    }
                    nF2x = bs7l.indexOf("{", nF2x + 1)
                }
                if (nF2x < 0) break;
                Ml0x = bZS7L(bs7l, nF2x);
                if (Ml0x < 0) break;
                bep4t(bs7l.substring(JX9O + 1, nF2x), sM3x);
                cJp4t(bs7l.substring(nF2x, Ml0x + 1), sM3x);
                JX9O = Ml0x
            }
            bep4t(bs7l.substring(JX9O + 1), sM3x);
            sM3x.push(';return __OUT.join("");');
            sM3x[1] = cIz4D(ic0x);
            ic0x = null;
            return new Function("__CTX", "__MDF", sM3x.join(""))
        }
    } ();
    TrimPath.seed = function() {
        return gV9M
    };
    TrimPath.merge = function() {
        var Qv1x = {};
        TrimPath.dump = function() {
            return {
                func: Qv1x,
                text: Ps0x
            }
        };
        return function(fv9m, i6c, jQ1x) {
            try {
                i6c = i6c || {};
                if (!Qv1x[fv9m] && !Ps0x[fv9m]) return "";
                if (!Qv1x[fv9m]) {
                    Qv1x[fv9m] = cIM4Q(Ps0x[fv9m]);
                    delete Ps0x[fv9m]
                }
                if ( !! jQ1x) {
                    for (var x in bT7M.ext) if (!jQ1x[x]) jQ1x[x] = bT7M.ext[x]
                }
                return Qv1x[fv9m](i6c, jQ1x || bT7M.ext)
            } catch(ex) {
                return ex.message || ""
            }
        }
    } ();
    TrimPath.parse = function() {
        var cIy4C = +(new Date);
        return function(bs7l, fv9m) {
            if (!bs7l) return "";
            fv9m = fv9m || "ck_" + cIy4C++;
            Ps0x[fv9m] = bs7l;
            return fv9m
        }
    } ()
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    dY8Q = {},
    bZR7K = {};
    a6g.Mq0x = TrimPath.seed;
    a6g.ce7X = function() {
        var bZQ7J = function(D7w) {
            return ! a6g.is1x ? "": a6g.is1x(D7w)
        };
        return function(fv9m, i6c, jQ1x) {
            i6c = NEJ.X(NEJ.X({},
            bZR7K), i6c);
            i6c.inline = bZQ7J;
            jQ1x = NEJ.X(NEJ.X({},
            dY8Q), jQ1x);
            jQ1x.rand = k6e.oD2x;
            jQ1x.format = k6e.ir0x;
            jQ1x.escape = k6e.dL8D;
            jQ1x.inline = bZQ7J;
            return TrimPath.merge(fv9m, i6c, jQ1x)
        }
    } ();
    a6g.eD9u = function(bs7l, cIf4j) {
        if (!bs7l) return "";
        var fv9m, G7z = a6g.A7t(bs7l);
        if ( !! G7z) {
            fv9m = G7z.id;
            bs7l = G7z.value || G7z.innerText;
            if (!cIf4j) a6g.cS8K(G7z)
        }
        return TrimPath.parse(bs7l, fv9m)
    };
    a6g.dF8x = function(bI7B, fv9m, i6c, jQ1x) {
        bI7B = a6g.A7t(bI7B);
        if ( !! bI7B) bI7B.innerHTML = a6g.ce7X(fv9m, i6c, jQ1x);
        return this
    };
    a6g.cKs4w = function(bB7u) {
        NEJ.X(dY8Q, bB7u)
    };
    a6g.cIa4e = function(bB7u) {
        NEJ.X(bZR7K, bB7u)
    };
    c6e("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
})(); (function() {
    var dC8u = NEJ.P("nej.p"),
    P7I = window,
    lI1x = dC8u.Kb9S,
    bZJ7C = lI1x.ipad || lI1x.iphone;
    if (!bZJ7C && !!P7I.requestAnimationFrame && !!P7I.cancelRequestAnimationFrame) return;
    var kG1x = dC8u.dz8r.prefix.pro;
    if (!bZJ7C && !!P7I[kG1x + "RequestAnimationFrame"] && !!P7I[kG1x + "CancelRequestAnimationFrame"]) {
        P7I.requestAnimationFrame = P7I[kG1x + "RequestAnimationFrame"];
        P7I.cancelRequestAnimationFrame = P7I[kG1x + "CancelRequestAnimationFrame"];
        return
    }
    var bdG4K = lI1x.desktop ? 80 : lI1x.ios ? 50 : 30;
    P7I.requestAnimationFrame = function(cE8w) {
        return window.setTimeout(function() {
            try {
                cE8w( + (new Date))
            } catch(ex) {}
        },
        1e3 / bdG4K)
    };
    P7I.cancelRequestAnimationFrame = function(D7w) {
        window.clearTimeout(D7w);
        return this
    }
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    k6e = c6e("nej.u"),
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    bh7a = c6e("nej.h"),
    dg8Y = c6e("nej.x"),
    bdE4I = c6e("nej.ut.j.cb"),
    gB9s;
    if ( !! a6g.sQ3x) return;
    a6g.sQ3x = dg8Y.sQ3x = function() {
        var S7L = {},
        gS9J = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d6d) {
            var D7w = decodeURIComponent(d6d.target),
            u7n = d6d.type.toLowerCase();
            var dB8t = S7L[D7w + "-on" + u7n];
            if ( !! dB8t) {
                try {
                    dB8t(d6d)
                } catch(e) {}
                return
            }
            var cH8z = S7L[D7w + "-tgt"];
            if ( !! cH8z && gS9J.test(u7n)) {
                bZH7A(cH8z, d6d)
            }
        };
        var bAS0x = function(e6c) {
            var bI7B = a6g.A7t(e6c.parent) || document.body,
            dZ8R = a6g.ce7X(gB9s, e6c);
            bI7B.insertAdjacentHTML(!e6c.hidden ? "beforeEnd": "afterBegin", dZ8R)
        };
        var bZH7A = function(D7w, d6d) {
            var u7n = d6d.type.toLowerCase();
            requestAnimationFrame(function() {
                h6b.z7s(D7w, u7n)
            })
        };
        var cHQ4U = function(ih0x) {
            return !! ih0x && !!ih0x.inited && !!ih0x.inited()
        };
        var QI1x = function(D7w) {
            var bw7p = [document.embeds[D7w], a6g.A7t(D7w), document[D7w], window[D7w]],
            r6l = k6e.eQ9H(bw7p, cHQ4U),
            ih0x = bw7p[r6l],
            biq5v = D7w + "-count";
            S7L[biq5v]++;
            if ( !! ih0x || S7L[biq5v] > 100) {
                S7L[D7w](ih0x);
                delete S7L[D7w];
                delete S7L[biq5v];
                return
            }
            window.setTimeout(QI1x.f6b(null, D7w), 300)
        };
        var cHP4T = function(e6c) {
            var D7w = e6c.id,
            cp8h = e6c.params;
            if (!cp8h) {
                cp8h = {};
                e6c.params = cp8h
            }
            var ic0x = cp8h.flashvars || "";
            ic0x += (!ic0x ? "": "&") + ("id=" + D7w);
            if (!e6c.hidden && ( !! e6c.target || bh7a.bhg5l(cp8h.wmode))) {
                var iq0x = a6g.mc2x(e6c.target) || a6g.mc2x(e6c.parent),
                bdC4G = k6e.bfj4n();
                bdE4I["cb" + bdC4G] = bZH7A.f6b(null, iq0x);
                ic0x += "&onevent=nej.ut.j.cb.cb" + bdC4G;
                S7L[D7w + "-tgt"] = iq0x
            }
            cp8h.flashvars = ic0x;
            k6e.eQ9H(e6c,
            function(C7v, L7E) {
                if (k6e.gZ9Q(C7v) && L7E != "onready") {
                    S7L[D7w + "-" + L7E] = C7v
                }
            })
        };
        return function(e6c) {
            e6c = NEJ.X({},
            e6c);
            if (!e6c.src) return;
            var D7w = "flash_" + k6e.bfj4n();
            e6c.id = D7w;
            cHP4T(e6c);
            bAS0x(e6c);
            if (!e6c.onready) return;
            S7L[D7w] = e6c.onready;
            S7L[D7w + "-count"] = 0;
            QI1x(D7w)
        }
    } ();
    gB9s = a6g.eD9u('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    dg8Y.isChange = !0
})(); (function() {
    var c6e = NEJ.P,
    iP1x = c6e("nej.c"),
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ut.j"),
    bdE4I = c6e("nej.ut.j.cb"),
    S7L = {},
    gV9M = +(new Date),
    biU5Z;
    if ( !! P7I.bjc5h) return;
    bdE4I["ld" + gV9M] = function(L7E, cI8A) {
        var kn1x = S7L[L7E];
        if (!kn1x) return;
        delete S7L[L7E];
        kn1x.xs5x({
            status: 200,
            result: cI8A
        })
    };
    bdE4I["er" + gV9M] = function(L7E, dy8q) {
        var kn1x = S7L[L7E];
        if (!kn1x) return;
        delete S7L[L7E];
        kn1x.xs5x({
            status: dy8q || 0
        })
    };
    P7I.bjc5h = NEJ.C();
    biU5Z = P7I.bjc5h.M7F(P7I.LS9J);
    biU5Z.co8g = function(e6c) {
        var ih0x = S7L.flash;
        if (k6e.eh8Z(ih0x)) {
            ih0x.push(this.co8g.f6b(this, e6c));
            return
        }
        if (!ih0x) {
            S7L.flash = [this.co8g.f6b(this, e6c)];
            a6g.sQ3x({
                hidden: !0,
                src: iP1x.A7t("ajax.swf"),
                onready: function(ih0x) {
                    if (!ih0x) return;
                    var j6d = S7L.flash;
                    S7L.flash = ih0x;
                    k6e.oc2x(j6d,
                    function(dB8t) {
                        try {
                            dB8t()
                        } catch(e) {}
                    })
                }
            });
            return
        }
        this.DO7H = "swf-" + k6e.oD2x();
        S7L[this.DO7H] = this;
        var i6c = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        },
        e6c.request);
        i6c.key = this.DO7H;
        i6c.headers = e6c.headers;
        i6c.onerror = "nej.ut.j.cb.er" + gV9M;
        i6c.onloaded = "nej.ut.j.cb.ld" + gV9M;
        var bZG7z = iP1x.czp2x(i6c.url);
        if ( !! bZG7z) i6c.policyURL = bZG7z;
        ih0x.request(i6c)
    };
    biU5Z.kN1x = function() {
        delete S7L[this.DO7H];
        this.xs5x({
            status: 0
        });
        return this
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bh7a = c6e("nej.h");
    bh7a.bZF7y = function() {
        var dl8d = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(lq1x) {
            lq1x = lq1x || "";
            if (dl8d.test(lq1x)) return RegExp.$1;
            return "*"
        }
    } ();
    bh7a.bjS5X = function(i6c) {
        return i6c
    };
    bh7a.bjZ6T = function(bdB4F, e6c) {
        if (!bdB4F.postMessage) return;
        e6c = e6c || bc7V;
        bdB4F.postMessage(bh7a.bjS5X(e6c.data), bh7a.bZF7y(e6c.origin))
    }
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ut"),
    b6f;
    if ( !! P7I.fQ9H) return;
    P7I.fQ9H = NEJ.C();
    b6f = P7I.fQ9H.M7F(P7I.cL8D);
    b6f.cA8s = function() {
        this.T7M = {};
        this.cG8y()
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.QL1x = a6g.A7t(e6c.element) || window;
        this.bZE7x(e6c.event);
        this.cHF4J();
        this.z7s("oninit")
    };
    b6f.bC7v = function() {
        var JV9M = function(C7v, L7E, bB7u) {
            if (!k6e.eh8Z(C7v)) {
                k6e.bfk4o(this.QL1x, L7E)
            }
            delete bB7u[L7E]
        };
        return function() {
            this.bH7A();
            k6e.eQ9H(this.T7M, JV9M, this);
            delete this.QL1x
        }
    } ();
    b6f.bdx4B = function(G7z, u7n) {
        G7z = a6g.A7t(G7z);
        return G7z == this.QL1x && (!u7n || !!this.T7M["on" + u7n])
    };
    b6f.bZE7x = function(d6d) {
        if (k6e.fO9F(d6d)) {
            var X7Q = "on" + d6d;
            if (!this.T7M[X7Q]) {
                this.T7M[X7Q] = this.cHE4I.f6b(this, d6d)
            }
            this.bZB7u(d6d);
            return
        }
        if (k6e.eh8Z(d6d)) {
            k6e.be7X(d6d, this.bZE7x, this)
        }
    };
    b6f.bZB7u = function(u7n) {
        var d6d = "on" + u7n,
        dB8t = this.QL1x[d6d],
        bZA7t = this.T7M[d6d];
        if (dB8t != bZA7t) {
            this.bdu4y(u7n);
            if ( !! dB8t && dB8t != bu7n) this.bZz7s(u7n, dB8t);
            this.QL1x[d6d] = bZA7t
        }
    };
    b6f.bZz7s = function(u7n, dB8t, cHy4C) {
        var j6d = this.T7M[u7n];
        if (!j6d) {
            j6d = [];
            this.T7M[u7n] = j6d
        }
        if (k6e.gZ9Q(dB8t)) { ! cHy4C ? j6d.push(dB8t) : j6d.unshift(dB8t)
        }
    };
    b6f.bdu4y = function(u7n, dB8t) {
        var j6d = this.T7M[u7n];
        if (!j6d || !j6d.length) return;
        if (!dB8t) {
            delete this.T7M[u7n];
            return
        }
        k6e.oc2x(j6d,
        function(C7v, r6l, My0x) {
            if (dB8t === C7v) {
                My0x.splice(r6l, 1);
                return ! 0
            }
        })
    };
    b6f.cHE4I = function(u7n, d6d) {
        d6d = d6d || {
            noargs: !0
        };
        d6d.type = u7n;
        this.z7s("ondispatch", d6d);
        if ( !! d6d.stopped) return;
        k6e.be7X(this.T7M[u7n],
        function(dB8t) {
            try {
                dB8t(d6d)
            } catch(ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b6f.cHF4J = function() {
        var blS6M = function(d6d) {
            var bi7b = d6d.args,
            u7n = bi7b[1].toLowerCase();
            if (this.bdx4B(bi7b[0], u7n)) {
                d6d.stopped = !0;
                this.bZB7u(u7n);
                this.bZz7s(u7n, bi7b[2], bi7b[3]);
                this.z7s("oneventadd", {
                    type: u7n,
                    listener: bi7b[2]
                })
            }
        };
        var cHx4B = function(d6d) {
            var bi7b = d6d.args,
            u7n = bi7b[1].toLowerCase();
            if (this.bdx4B(bi7b[0], u7n)) {
                d6d.stopped = !0;
                this.bdu4y(u7n, bi7b[2])
            }
        };
        var bAD0x = function(d6d) {
            var bi7b = d6d.args,
            u7n = (bi7b[1] || "").toLowerCase();
            if (this.bdx4B(bi7b[0])) {
                if ( !! u7n) {
                    this.bdu4y(u7n);
                    return
                }
                k6e.eQ9H(this.T7M,
                function(C7v, L7E) {
                    if (k6e.eh8Z(C7v)) {
                        this.bdu4y(L7E)
                    }
                },
                this)
            }
        };
        var cHo4s = function(d6d) {
            var bi7b = d6d.args,
            u7n = bi7b[1].toLowerCase();
            if (this.bdx4B(bi7b[0], u7n)) {
                d6d.stopped = !0;
                bi7b[0]["on" + u7n].apply(bi7b[0], bi7b.slice(2))
            }
        };
        return function() {
            if ( !! this.cHl4p) return;
            this.cHl4p = true;
            h6b.s6m = h6b.s6m.eO9F(blS6M.f6b(this));
            h6b.nu2x = h6b.nu2x.eO9F(cHx4B.f6b(this));
            h6b.ht0x = h6b.ht0x.eO9F(bAD0x.f6b(this));
            h6b.z7s = h6b.z7s.eO9F(cHo4s.f6b(this))
        }
    } ()
})(); (function() {
    var c6e = NEJ.P,
    P7I = c6e("nej.p"),
    bh7a = c6e("nej.h"),
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    H7A = c6e("nej.ut");
    if (P7I.om2x.trident) return;
    if ( !! window.postMessage) {
        bh7a.bjS5X = bh7a.bjS5X.eO9F(function(d6d) {
            d6d.stopped = !0;
            d6d.value = JSON.stringify(d6d.args[0])
        });
        return
    }
    var L7E = "MSG|",
    kB1x = [];
    var cHk4o = function() {
        var X7Q = unescape(window.name || "").trim();
        if (!X7Q || X7Q.indexOf(L7E) != 0) return;
        window.name = "";
        var m6g = k6e.Vb2x(X7Q.replace(L7E, ""), "|"),
        lq1x = (m6g.origin || "").toLowerCase();
        if ( !! lq1x && lq1x != "*" && location.href.toLowerCase().indexOf(lq1x) != 0) return;
        h6b.z7s(window, "message", {
            data: JSON.parse(m6g.data || "null"),
            source: window.frames[m6g.self] || m6g.self,
            origin: bh7a.bZF7y(m6g.ref || document.referrer)
        })
    };
    var cHj4n = function() {
        var bdk4o;
        var cHh4l = function(bB7u, r6l, j6d) {
            if (k6e.do8g(bdk4o, bB7u.w) < 0) {
                bdk4o.push(bB7u.w);
                j6d.splice(r6l, 1);
                bB7u.w.name = bB7u.d
            }
        };
        return function() {
            bdk4o = [];
            k6e.oc2x(kB1x, cHh4l);
            bdk4o = null
        }
    } ();
    bh7a.bjZ6T = function() {
        var cHf4j = function(i6c) {
            var m6g = {};
            i6c = i6c || bc7V;
            m6g.origin = i6c.origin || "";
            m6g.ref = location.href;
            m6g.self = i6c.source;
            m6g.data = JSON.stringify(i6c.data);
            return L7E + k6e.wT5Y(m6g, "|", !0)
        };
        return bh7a.bjZ6T.eO9F(function(d6d) {
            d6d.stopped = !0;
            var bi7b = d6d.args;
            kB1x.unshift({
                w: bi7b[0],
                d: escape(cHf4j(bi7b[1]))
            })
        })
    } ();
    H7A.fQ9H.B7u({
        element: window,
        event: "message"
    });
    window.setInterval(cHj4n, 100);
    window.setInterval(cHk4o, 20)
})(); (function() {
    var c6e = NEJ.P,
    bh7a = c6e("nej.h"),
    a6g = c6e("nej.e"),
    v7o = c6e("nej.j");
    v7o.cGZ4d = function() {
        var fx9o = window.name || "_parent",
        cGW4a = {
            gL9C: window.top,
            fx9o: window,
            bI7B: window.parent
        };
        return function(cH8z, e6c) {
            if (typeof cH8z == "string") {
                cH8z = cGW4a[cH8z] || window.frames[cH8z];
                if (!cH8z) return this
            }
            var i6c = NEJ.X({
                origin: "*",
                source: fx9o
            },
            e6c);
            bh7a.bjZ6T(cH8z, i6c);
            return this
        }
    } ()
})(); (function() {
    var c6e = NEJ.P,
    iP1x = c6e("nej.c"),
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    v7o = c6e("nej.j"),
    P7I = c6e("nej.ut.j"),
    S7L = {},
    bcY4c;
    if ( !! P7I.bnS7L) return;
    P7I.bnS7L = NEJ.C();
    bcY4c = P7I.bnS7L.M7F(P7I.LS9J);
    bcY4c.cA8s = function() {
        var fn9e = "NEJ-AJAX-DATA:",
        Hl8d = !1;
        var bnU7N = function(d6d) {
            var i6c = d6d.data;
            if (i6c.indexOf(fn9e) != 0) return;
            i6c = JSON.parse(i6c.replace(fn9e, ""));
            var kn1x = S7L[i6c.key];
            if (!kn1x) return;
            delete S7L[i6c.key];
            i6c.result = decodeURIComponent(i6c.result || "");
            kn1x.xs5x(i6c)
        };
        var bnX7Q = function() {
            if (!Hl8d) {
                Hl8d = !0;
                h6b.s6m(window, "message", bnU7N)
            }
        };
        return function() {
            this.cG8y();
            bnX7Q()
        }
    } ();
    bcY4c.co8g = function(e6c) {
        var gx9o = e6c.request,
        kn1x = iP1x.cmS0x(gx9o.url),
        eI9z = S7L[kn1x];
        if (k6e.eh8Z(eI9z)) {
            eI9z.push(this.co8g.f6b(this, e6c));
            return
        }
        if (!eI9z) {
            S7L[kn1x] = [this.co8g.f6b(this, e6c)];
            a6g.bgM5R({
                src: kn1x,
                visible: !1,
                onload: function(d6d) {
                    var j6d = S7L[kn1x];
                    S7L[kn1x] = h6b.Y7R(d6d).contentWindow;
                    k6e.oc2x(j6d,
                    function(dB8t) {
                        try {
                            dB8t()
                        } catch(e) {}
                    })
                }
            });
            return
        }
        this.DO7H = "frm-" + k6e.oD2x();
        S7L[this.DO7H] = this;
        var i6c = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        },
        gx9o);
        i6c.key = this.DO7H;
        i6c.headers = e6c.headers;
        v7o.cGZ4d(S7L[kn1x], {
            data: i6c
        })
    };
    bcY4c.kN1x = function() {
        delete S7L[this.DO7H];
        this.xs5x({
            status: 0
        });
        return this
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    et8l = c6e("nej.g"),
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    v7o = c6e("nej.j"),
    P7I = c6e("nej.ut.j"),
    S7L = {},
    JZ9Q;
    if ( !! P7I.boc7V) return;
    P7I.boc7V = NEJ.C();
    JZ9Q = P7I.boc7V.M7F(P7I.LS9J);
    JZ9Q.cA8s = function() {
        var fn9e = "NEJ-UPLOAD-RESULT:",
        Hl8d = !1;
        var bnU7N = function(d6d) {
            var i6c = d6d.data;
            if (i6c.indexOf(fn9e) != 0) return;
            i6c = JSON.parse(i6c.replace(fn9e, ""));
            var kn1x = S7L[i6c.key];
            if (!kn1x) return;
            delete S7L[i6c.key];
            kn1x.xs5x(decodeURIComponent(i6c.result))
        };
        var bnX7Q = function() {
            if (!Hl8d) {
                Hl8d = !0;
                h6b.s6m(window, "message", bnU7N)
            }
        };
        return function() {
            this.cG8y();
            bnX7Q()
        }
    } ();
    JZ9Q.bC7v = function() {
        this.bH7A();
        a6g.cS8K(this.bok7d);
        delete this.bok7d;
        window.clearTimeout(this.dM8E);
        delete this.dM8E
    };
    JZ9Q.xs5x = function(cI8A) {
        var Q7J;
        try {
            Q7J = JSON.parse(cI8A);
            this.z7s("onload", Q7J)
        } catch(e) {
            this.z7s("onerror", {
                code: et8l.ccz7s,
                message: cI8A
            })
        }
    };
    JZ9Q.co8g = function() {
        var cGV4Z = function() {
            var ns2x, cI8A;
            try {
                var ns2x = this.bok7d.contentWindow.document.body,
                cI8A = ns2x.innerText || ns2x.textContent
            } catch(e) {
                return
            }
            this.xs5x(cI8A)
        };
        var bov7o = function(Z7S, fq9h, sz3x) {
            v7o.bl7e(Z7S, {
                type: "json",
                method: "POST",
                cookie: sz3x,
                mode: parseInt(fq9h) || 0,
                onload: function(i6c) {
                    if (!this.dM8E) return;
                    this.z7s("onuploading", i6c);
                    this.dM8E = window.setTimeout(bov7o.f6b(this, Z7S, fq9h, sz3x), 1e3)
                }.f6b(this),
                onerror: function(bZ7S) {
                    if (!this.dM8E) return;
                    this.dM8E = window.setTimeout(bov7o.f6b(this, Z7S, fq9h, sz3x), 1e3)
                }.f6b(this)
            })
        };
        return function(e6c) {
            var gx9o = e6c.request,
            pD2x = e6c.headers,
            fy9p = gx9o.data,
            X7Q = "fom-" + k6e.oD2x();
            S7L[X7Q] = this;
            fy9p.target = X7Q;
            fy9p.method = "POST";
            fy9p.enctype = et8l.GU8M;
            fy9p.encoding = et8l.GU8M;
            var Z7S = fy9p.action || "",
            ml2x = Z7S.indexOf("?") <= 0 ? "?": "&";
            fy9p.action = Z7S + ml2x + "_proxy_=form";
            this.bok7d = a6g.bgM5R({
                name: X7Q,
                onload: function(d6d) {
                    var eI9z = h6b.Y7R(d6d);
                    h6b.s6m(eI9z, "load", cGV4Z.f6b(this));
                    fy9p.submit();
                    var bZo7h = (fy9p.nej_query || bc7V).value;
                    if (!bZo7h) return;
                    var fq9h = (fy9p.nej_mode || bc7V).value,
                    sz3x = (fy9p.nej_cookie || bc7V).value == "true";
                    this.dM8E = window.setTimeout(bov7o.f6b(this, bZo7h, fq9h, sz3x), 100)
                }.f6b(this)
            })
        }
    } ();
    JZ9Q.kN1x = function() {
        this.z7s("onerror", {
            code: et8l.cdx8p,
            message: "客户端终止文件上传"
        });
        return this
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bh7a = c6e("nej.h"),
    P7I = c6e("nej.ut.j");
    bh7a.bna6U = function() {
        return new XMLHttpRequest
    };
    bh7a.bpG8y = function(fq9h, bcU4Y, e6c) {
        var bB7u = !!bcU4Y ? {
            2 : P7I.boc7V
        }: {
            2 : P7I.bnS7L,
            3 : P7I.bjc5h
        };
        return (bB7u[fq9h] || P7I.beB4F).B7u(e6c)
    }
})(); (function() {
    var c6e = NEJ.P,
    P7I = c6e("nej.p"),
    bh7a = c6e("nej.h");
    if (P7I.om2x.trident) return;
    bh7a.bna6U = function() {
        var XJ2x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cGR4V = function() {
            for (var i = 0,
            l = XJ2x.length; i < l; i++) {
                try {
                    return new ActiveXObject(XJ2x[i])
                } catch(e) {}
            }
            return null
        };
        return bh7a.bna6U.eO9F(function(d6d) {
            if ( !! window.XMLHttpRequest) return;
            d6d.stopped = !0;
            d6d.value = cGR4V()
        })
    } ();
    bh7a.bpG8y = function() {
        var Js9j = {
            0 : 2,
            1 : 3
        };
        return bh7a.bpG8y.eO9F(function(d6d) {
            var bi7b = d6d.args,
            fq9h = bi7b[0] || 0;
            bi7b[0] = !!bi7b[1] ? 2 : Js9j[fq9h] || fq9h
        })
    } ()
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    bh7a = c6e("nej.h"),
    et8l = c6e("nej.g"),
    k6e = c6e("nej.u"),
    v7o = c6e("nej.j"),
    P7I = c6e("nej.ut.j"),
    oV2x = {},
    KP9G = bu7n;
    v7o.kN1x = function(fv9m) {
        var S7L = oV2x[fv9m];
        if (!S7L) return this;
        S7L.req.kN1x();
        return this
    };
    v7o.bcS4W = function(ej8b) {
        KP9G = ej8b || bu7n;
        return this
    };
    v7o.bl7e = function() {
        var kd1x = (location.protocol + "//" + location.host).toLowerCase();
        var cGQ4U = function(Z7S) {
            var lq1x = k6e.cyV2x(Z7S);
            return !! lq1x && lq1x != kd1x
        };
        var cGP4T = function(pD2x) {
            return (pD2x || bc7V)[et8l.BH7A] == et8l.GU8M
        };
        var cGO4S = function(e6c) {
            var bcU4Y = cGP4T(e6c.headers);
            if (!cGQ4U(e6c.url) && !bcU4Y) return P7I.beB4F.B7u(e6c);
            return bh7a.bpG8y(e6c.mode, bcU4Y, e6c)
        };
        var JV9M = function(fv9m) {
            var S7L = oV2x[fv9m];
            if (!S7L) return;
            if ( !! S7L.req) S7L.req.V7O();
            delete oV2x[fv9m]
        };
        var bZm7f = function(fv9m, u7n) {
            var S7L = oV2x[fv9m];
            if (!S7L) return;
            JV9M(fv9m);
            try {
                var d6d = {
                    type: u7n,
                    result: arguments[2]
                };
                KP9G(d6d);
                if (!d6d.stopped)(S7L[u7n] || bu7n)(d6d.result)
            } catch(ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var zM6G = function(fv9m, i6c) {
            bZm7f(fv9m, "onload", i6c)
        };
        var CR7K = function(fv9m, bZ7S) {
            bZm7f(fv9m, "onerror", bZ7S)
        };
        return function(Z7S, e6c) {
            e6c = e6c || {};
            var fv9m = k6e.oD2x(),
            S7L = {
                onload: e6c.onload || bu7n,
                onerror: e6c.onerror || bu7n
            };
            oV2x[fv9m] = S7L;
            e6c.onload = zM6G.f6b(null, fv9m);
            e6c.onerror = CR7K.f6b(null, fv9m);
            if ( !! e6c.query) {
                var ml2x = Z7S.indexOf("?") < 0 ? "?": "&",
                bx7q = e6c.query;
                if (k6e.mn2x(bx7q)) bx7q = k6e.cD8v(bx7q);
                if ( !! bx7q) Z7S += ml2x + bx7q
            }
            e6c.url = Z7S;
            S7L.req = cGO4S(e6c);
            S7L.req.blQ6K(e6c.data);
            return fv9m
        }
    } ();
    v7o.ii0x = function(fy9p, e6c) {
        var dR8J = {
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
        NEJ.EX(dR8J, e6c);
        dR8J.data = fy9p;
        dR8J.method = "POST";
        dR8J.timeout = 0;
        dR8J.headers[et8l.BH7A] = et8l.GU8M;
        return v7o.bl7e(fy9p.action, dR8J)
    }
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    et8l = c6e("nej.g"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    P7I = c6e("nej.ut.j"),
    nv2x,
    hk9b = 6e4;
    if ( !! P7I.RI1x) return;
    P7I.RI1x = NEJ.C();
    nv2x = P7I.RI1x.M7F(H7A.cL8D);
    nv2x.cA8s = function() {
        this.cG8y();
        this.RK1x = {
            onerror: this.cGI4M.f6b(this),
            onloaded: this.cGH4L.f6b(this)
        };
        if (!this.constructor.T7M) this.constructor.T7M = {
            loaded: {}
        }
    };
    nv2x.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.MJ0x = e6c.version;
        this.bsl8d = e6c.timeout;
        this.RK1x.version = this.MJ0x;
        this.RK1x.timeout = this.bsl8d
    };
    nv2x.bZk7d = function(L7E) {
        delete this.constructor.T7M[L7E]
    };
    nv2x.Do7h = function(L7E) {
        return this.constructor.T7M[L7E]
    };
    nv2x.bZj7c = function(L7E, i6c) {
        this.constructor.T7M[L7E] = i6c
    };
    nv2x.bcH4L = bu7n;
    nv2x.bZi7b = function(gx9o) {
        h6b.ht0x(gx9o)
    };
    nv2x.bsV8N = function(gx9o) {
        gx9o.src = this.lt1x;
        document.head.appendChild(gx9o)
    };
    nv2x.DI7B = function() {
        var S7L = this.Do7h(this.lt1x);
        if (!S7L) return;
        window.clearTimeout(S7L.timer);
        this.bZi7b(S7L.request);
        delete S7L.bind;
        delete S7L.timer;
        delete S7L.request;
        this.bZk7d(this.lt1x);
        this.Do7h("loaded")[this.lt1x] = !0
    };
    nv2x.bcF4J = function(X7Q) {
        var S7L = this.Do7h(this.lt1x);
        if (!S7L) return;
        var j6d = S7L.bind;
        this.DI7B();
        if ( !! j6d && j6d.length > 0) {
            var cJ8B;
            while (j6d.length) {
                cJ8B = j6d.shift();
                try {
                    cJ8B.z7s(X7Q, arguments[1])
                } catch(ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cJ8B.V7O()
            }
        }
    };
    nv2x.dT8L = function(bZ7S) {
        this.bcF4J("onerror", bZ7S)
    };
    nv2x.bZf7Y = function() {
        this.bcF4J("onloaded")
    };
    nv2x.cGp4t = function(Z7S) {
        this.constructor.B7u(this.RK1x).ML0x(Z7S)
    };
    nv2x.bZd7W = function(bZ7S) {
        var S7L = this.Do7h(this.yZ6T);
        if (!S7L) return;
        if ( !! bZ7S) S7L.error++;
        S7L.loaded++;
        if (S7L.loaded < S7L.total) return;
        this.bZk7d(this.yZ6T);
        this.z7s(S7L.error > 0 ? "onerror": "onloaded")
    };
    nv2x.cGI4M = function(bZ7S) {
        this.bZd7W(!0)
    };
    nv2x.cGH4L = function() {
        this.bZd7W()
    };
    nv2x.ML0x = function(Z7S) {
        Z7S = k6e.bql8d(Z7S);
        if (!Z7S) {
            this.z7s("onerror", {
                code: et8l.bpb7U,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.lt1x = Z7S;
        if ( !! this.MJ0x) this.lt1x += (this.lt1x.indexOf("?") < 0 ? "?": "&") + this.MJ0x;
        if (this.Do7h("loaded")[this.lt1x]) {
            try {
                this.z7s("onloaded")
            } catch(ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.V7O();
            return this
        }
        var S7L = this.Do7h(this.lt1x),
        gx9o;
        if ( !! S7L) {
            S7L.bind.unshift(this);
            S7L.timer = window.clearTimeout(S7L.timer)
        } else {
            gx9o = this.bcH4L();
            S7L = {
                request: gx9o,
                bind: [this]
            };
            this.bZj7c(this.lt1x, S7L);
            h6b.s6m(gx9o, "load", this.bZf7Y.f6b(this));
            h6b.s6m(gx9o, "error", this.dT8L.f6b(this, {
                code: et8l.byu0x,
                message: "无法加载指定资源文件[" + this.lt1x + "]！"
            }))
        }
        if (this.bsl8d != 0) S7L.timer = window.setTimeout(this.dT8L.f6b(this, {
            code: et8l.bGo2x,
            message: "指定资源文件[" + this.lt1x + "]载入超时！"
        }), this.bsl8d || hk9b);
        if ( !! gx9o) this.bsV8N(gx9o);
        this.z7s("onloading");
        return this
    };
    nv2x.bZc7V = function(j6d) {
        if (!j6d || !j6d.length) {
            this.z7s("onerror", {
                code: et8l.bpb7U,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.yZ6T = k6e.oD2x();
        var S7L = {
            error: 0,
            loaded: 0,
            total: j6d.length
        };
        this.bZj7c(this.yZ6T, S7L);
        for (var i = 0,
        l = j6d.length; i < l; i++) {
            if (!j6d[i]) {
                S7L.total--;
                continue
            }
            this.cGp4t(j6d[i])
        }
        this.z7s("onloading");
        return this
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    bh7a = c6e("nej.h"),
    P7I = c6e("nej.ut.j"),
    RU1x;
    if ( !! P7I.buU9L) return;
    P7I.buU9L = NEJ.C();
    RU1x = P7I.buU9L.M7F(P7I.RI1x);
    RU1x.bcH4L = function() {
        var eY9P = a6g.dn8f("iframe");
        eY9P.width = 0;
        eY9P.height = 0;
        eY9P.style.display = "none";
        return eY9P
    };
    RU1x.bsV8N = function(gx9o) {
        gx9o.src = this.lt1x;
        document.body.appendChild(gx9o)
    };
    RU1x.dT8L = function(bZ7S) {
        var eY9P = (this.Do7h(this.lt1x) || bc7V).request;
        this.bcF4J("onerror", bZ7S);
        bh7a.bgZ5e(eY9P)
    };
    RU1x.bZf7Y = function() {
        var ns2x = null,
        eY9P = (this.Do7h(this.lt1x) || bc7V).request;
        try {
            ns2x = eY9P.contentWindow.document.body
        } catch(ex) {}
        this.bcF4J("onloaded", ns2x);
        bh7a.bgZ5e(eY9P)
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    P7I = c6e("nej.ut.j"),
    bva9R;
    if ( !! P7I.bcy4C) return;
    P7I.bcy4C = NEJ.C();
    bva9R = P7I.bcy4C.M7F(P7I.RI1x);
    bva9R.bcH4L = function() {
        return a6g.dn8f("link")
    };
    bva9R.bsV8N = function(gx9o) {
        gx9o.href = this.lt1x;
        document.head.appendChild(gx9o)
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    P7I = c6e("nej.ut.j"),
    bcx4B;
    if ( !! P7I.bcw4A) return;
    P7I.bcw4A = NEJ.C();
    bcx4B = P7I.bcw4A.M7F(P7I.RI1x);
    bcx4B.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.bZb7U = e6c.async;
        this.bvw9n = e6c.charset;
        this.RK1x.async = !1;
        this.RK1x.charset = this.bvw9n
    };
    bcx4B.bcH4L = function() {
        var gx9o = a6g.dn8f("script");
        if (this.bZb7U != null) gx9o.async = !!this.bZb7U;
        if (this.bvw9n != null) gx9o.charset = this.bvw9n;
        return gx9o
    };
    bcx4B.bZi7b = function(gx9o) {
        a6g.cS8K(gx9o)
    }
})(); (function() {
    var c6e = NEJ.P,
    v7o = c6e("nej.j"),
    P7I = c6e("nej.ut.j");
    v7o.cGk4o = function(Z7S, e6c) {
        P7I.bcw4A.B7u(e6c).ML0x(Z7S);
        return this
    };
    v7o.cGj4n = function(j6d, e6c) {
        P7I.bcw4A.B7u(e6c).bZc7V(j6d);
        return this
    };
    v7o.cKu4y = function(Z7S, e6c) {
        P7I.bcy4C.B7u(e6c).ML0x(Z7S);
        return this
    };
    v7o.cGh4l = function(j6d, e6c) {
        P7I.bcy4C.B7u(e6c).bZc7V(j6d);
        return this
    };
    v7o.bZa7T = function(Z7S, e6c) {
        P7I.buU9L.B7u(e6c).ML0x(Z7S);
        return this
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    v7o = c6e("nej.j"),
    H7A = c6e("nej.ut"),
    S7L = {},
    uc4g = +(new Date) + "-";
    a6g.cW8O = function() {
        var ck8c = 0;
        var RV1x = function() {
            if (ck8c > 0) return;
            ck8c = 0;
            h6b.z7s(document, "templateready");
            h6b.ht0x(document, "templateready")
        };
        var bct4x = function(gC9t, e6c) {
            var da8S = a6g.t7m(gC9t, "src");
            if (!da8S) return;
            e6c = e6c || bc7V;
            var gs9j = e6c.root;
            if (!gs9j) {
                gs9j = gC9t.ownerDocument.location.href
            } else {
                gs9j = k6e.bql8d(gs9j)
            }
            da8S = da8S.split(",");
            k6e.be7X(da8S,
            function(C7v, r6l, j6d) {
                j6d[r6l] = k6e.bql8d(C7v, gs9j)
            });
            return da8S
        };
        var cGf4j = function(gC9t, e6c) {
            if (!gC9t) return;
            var da8S = bct4x(gC9t, e6c);
            if ( !! da8S) v7o.cGh4l(da8S, {
                version: a6g.t7m(gC9t, "version")
            });
            a6g.bUf6Z(gC9t.value)
        };
        var cGb4f = function(C7v) {
            ck8c--;
            a6g.bUh6b(C7v);
            RV1x()
        };
        var cGa4e = function(gC9t, e6c) {
            if (!gC9t) return;
            var da8S = bct4x(gC9t, e6c),
            fE9v = gC9t.value;
            if ( !! da8S) {
                ck8c++;
                var e6c = {
                    version: a6g.t7m(gC9t, "version"),
                    onloaded: cGb4f.f6b(null, fE9v)
                };
                window.setTimeout(v7o.cGj4n.f6b(v7o, da8S, e6c), 0);
                return
            }
            a6g.bUh6b(fE9v)
        };
        var cFX4b = function(ns2x) {
            ck8c--;
            a6g.cW8O(ns2x);
            RV1x()
        };
        var cFW4a = function(gC9t, e6c) {
            if (!gC9t) return;
            var da8S = bct4x(gC9t, e6c)[0];
            if ( !! da8S) {
                ck8c++;
                var e6c = {
                    version: a6g.t7m(gC9t, "version"),
                    onloaded: cFX4b
                };
                window.setTimeout(v7o.bZa7T.f6b(v7o, da8S, e6c), 0)
            }
        };
        var cFU4Y = function(D7w, cI8A) {
            ck8c--;
            a6g.MY0x(D7w, cI8A || "");
            RV1x()
        };
        var cFS4W = function(gC9t, e6c) {
            if (!gC9t || !gC9t.id) return;
            var D7w = gC9t.id,
            da8S = bct4x(gC9t, e6c)[0];
            if ( !! da8S) {
                ck8c++;
                var Z7S = da8S + (da8S.indexOf("?") < 0 ? "?": "&") + (a6g.t7m(gC9t, "version") || ""),
                e6c = {
                    type: "text",
                    method: "GET",
                    onload: cFU4Y.f6b(null, D7w)
                };
                window.setTimeout(v7o.bl7e.f6b(v7o, Z7S, e6c), 0)
            }
        };
        var cFR4V = function(g6a, e6c) {
            var u7n = g6a.name.toLowerCase();
            switch (u7n) {
            case "jst":
                a6g.eD9u(g6a, !0);
                return;
            case "txt":
                a6g.MY0x(g6a.id, g6a.value || "");
                return;
            case "ntp":
                a6g.jJ1x(g6a.value || "", g6a.id);
                return;
            case "js":
                cGa4e(g6a, e6c);
                return;
            case "css":
                cGf4j(g6a, e6c);
                return;
            case "html":
                cFW4a(g6a, e6c);
                return;
            case "res":
                cFS4W(g6a, e6c);
                return
            }
        };
        H7A.fQ9H.B7u({
            element: document,
            event: "templateready",
            oneventadd: RV1x
        });
        return function(G7z, e6c) {
            G7z = a6g.A7t(G7z);
            if ( !! G7z) {
                var j6d = G7z.tagName == "TEXTAREA" ? [G7z] : G7z.getElementsByTagName("textarea");
                k6e.be7X(j6d,
                function(g6a) {
                    cFR4V(g6a, e6c)
                });
                a6g.cS8K(G7z, !0)
            }
            RV1x();
            return this
        }
    } ();
    a6g.MY0x = function(L7E, C7v) {
        S7L[L7E] = C7v || "";
        return this
    };
    a6g.is1x = function(L7E) {
        return S7L[L7E] || ""
    };
    a6g.jJ1x = function(G7z, L7E) {
        L7E = L7E || k6e.oD2x();
        G7z = a6g.A7t(G7z) || G7z;
        a6g.MY0x(uc4g + L7E, G7z);
        a6g.nf2x(G7z);
        return L7E
    };
    a6g.dE8w = function(L7E) {
        if (!L7E) return null;
        L7E = uc4g + L7E;
        var C7v = a6g.is1x(L7E);
        if (!C7v) return null;
        if (k6e.fO9F(C7v)) {
            C7v = a6g.oC2x(C7v);
            a6g.MY0x(L7E, C7v)
        }
        return C7v.cloneNode(!0)
    };
    a6g.Cf7Y = function() {
        var KP9G = function(C7v, L7E) {
            return L7E == "offset" || L7E == "limit"
        };
        return function(j6d, p6j, e6c) {
            var bw7p = [];
            if (!j6d || !j6d.length || !p6j) return bw7p;
            e6c = e6c || bc7V;
            var dv8n = j6d.length,
            ko1x = parseInt(e6c.offset) || 0,
            ex9o = Math.min(dv8n, ko1x + (parseInt(e6c.limit) || dv8n)),
            cy8q = {
                total: j6d.length,
                range: [ko1x, ex9o]
            };
            NEJ.X(cy8q, e6c, KP9G);
            for (var i = ko1x,
            cJ8B; i < ex9o; i++) {
                cy8q.index = i;
                cy8q.data = j6d[i];
                cJ8B = p6j.B7u(cy8q);
                var D7w = cJ8B.IQ9H();
                S7L[D7w] = cJ8B;
                cJ8B.V7O = cJ8B.V7O.eO9F(function(D7w, cJ8B) {
                    delete S7L[D7w];
                    delete cJ8B.V7O
                }.f6b(null, D7w, cJ8B));
                bw7p.push(cJ8B)
            }
            return bw7p
        }
    } ();
    a6g.bYV7O = function(D7w) {
        return S7L[D7w]
    };
    a6g.cKv4z = function(em8e, e6c) {
        e6c = e6c || bc7V;
        a6g.cW8O(e6c.tid || "template-box");
        h6b.s6m(document, "templateready",
        function() {
            em8e.B7u().z7s("onshow", e6c)
        })
    };
    c6e("dbg").dumpTC = function() {
        return S7L
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    P7I = c6e("nej.ui"),
    b6f;
    if ( !! P7I.er8j) return;
    P7I.er8j = NEJ.C();
    b6f = P7I.er8j.M7F(H7A.cL8D);
    b6f.cA8s = function() {
        this.cG8y();
        a6g.bSc5h();
        this.ch7a();
        this.bW7P()
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.cFI4M(e6c.clazz);
        this.bYQ7J(e6c.parent)
    };
    b6f.bC7v = function() {
        this.bH7A();
        this.bYP7I();
        delete this.gw9n;
        a6g.nf2x(this.o6i);
        a6g.y7r(this.o6i, this.bAu0x);
        delete this.bAu0x
    };
    b6f.ch7a = bu7n;
    b6f.bW7P = function() {
        if (!this.cf7Y) this.Nf0x();
        this.o6i = a6g.dE8w(this.cf7Y);
        if (!this.o6i) this.o6i = a6g.dn8f("div", this.ms2x);
        a6g.w7p(this.o6i, this.ms2x)
    };
    b6f.Nf0x = bu7n;
    b6f.cFI4M = function(en8f) {
        this.bAu0x = en8f || "";
        a6g.w7p(this.o6i, this.bAu0x)
    };
    b6f.cFD3x = function() {
        if (!this.ms2x) return;
        a6g.w7p(this.gw9n, this.ms2x + "-parent")
    };
    b6f.bYP7I = function() {
        if (!this.ms2x) return;
        a6g.y7r(this.gw9n, this.ms2x + "-parent")
    };
    b6f.mj2x = function() {
        return this.o6i
    };
    b6f.bYQ7J = function(bI7B) {
        if (!this.o6i) return this;
        this.bYP7I();
        if (k6e.gZ9Q(bI7B)) {
            this.gw9n = bI7B(this.o6i)
        } else {
            this.gw9n = a6g.A7t(bI7B);
            if ( !! this.gw9n) this.gw9n.appendChild(this.o6i)
        }
        this.cFD3x();
        return this
    };
    b6f.J7C = function() {
        if (!this.gw9n || !this.o6i || this.o6i.parentNode == this.gw9n) return this;
        this.gw9n.appendChild(this.o6i);
        return this
    };
    b6f.bt7m = function() {
        a6g.nf2x(this.o6i);
        return this
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    bh7a = c6e("nej.h"),
    P7I = c6e("nej.ui"),
    yC6w,
    bYN7G;
    if ( !! P7I.SU1x) return;
    P7I.SU1x = NEJ.C();
    yC6w = P7I.SU1x.M7F(P7I.er8j);
    bYN7G = P7I.SU1x.cu8m;
    yC6w.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.zf6Z("oncontentready", e6c.oncontentready || this.cFB3x.f6b(this));
        this.cFx3x = !!e6c.nohack;
        this.cFw3x = !!e6c.destroyable;
        this.No0x(e6c.content)
    };
    yC6w.bC7v = function() {
        this.z7s("onbeforerecycle");
        this.bH7A();
        this.bbU3x();
        this.No0x("");
        a6g.fl9c(this.o6i, {
            top: "",
            left: ""
        })
    };
    yC6w.cFB3x = bu7n;
    yC6w.Np0x = bu7n;
    yC6w.bbU3x = function() {
        a6g.nf2x(this.o6i);
        if ( !! this.oP2x) {
            this.oP2x = bh7a.bwA9r(this.o6i);
            delete this.oP2x
        }
    };
    yC6w.No0x = function(bs7l) {
        if (!this.o6i || !this.DD7w || bs7l == null) return this;
        bs7l = bs7l || "";
        k6e.fO9F(bs7l) ? this.DD7w.innerHTML = bs7l: this.DD7w.appendChild(bs7l);
        this.z7s("oncontentready", this.DD7w);
        return this
    };
    yC6w.he9V = function(bj7c) {
        var C7v = bj7c.top;
        if (C7v != null) {
            C7v += "px";
            a6g.bb7U(this.o6i, "top", C7v);
            a6g.bb7U(this.oP2x, "top", C7v)
        }
        var C7v = bj7c.left;
        if (C7v != null) {
            C7v += "px";
            a6g.bb7U(this.o6i, "left", C7v);
            a6g.bb7U(this.oP2x, "left", C7v)
        }
        return this
    };
    yC6w.J7C = function() {
        a6g.bb7U(this.o6i, "visibility", "hidden");
        bYN7G.J7C.apply(this, arguments);
        this.Np0x();
        a6g.bb7U(this.o6i, "visibility", "");
        if (!this.cFx3x) {
            this.oP2x = bh7a.oP2x(this.o6i)
        }
        return this
    };
    yC6w.bt7m = function() {
        this.cFw3x ? this.V7O() : this.bbU3x();
        return this
    }
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    k6e = c6e("nej.u"),
    a6g = c6e("nej.e"),
    P7I = c6e("nej.ui"),
    DN7G;
    if ( !! P7I.bbN3x) return;
    P7I.bbN3x = NEJ.C();
    DN7G = P7I.bbN3x.M7F(P7I.er8j);
    DN7G.bo7h = function(e6c) {
        this.Tn1x();
        this.bq7j(this.cFv3x(e6c));
        this.cj8b.onbeforerecycle = this.V7O.f6b(this);
        this.ps2x = this.bkf6Z()
    };
    DN7G.bC7v = function() {
        this.z7s("onbeforerecycle");
        this.bH7A();
        delete this.cj8b;
        a6g.nf2x(this.o6i);
        var ym6g = this.ps2x;
        if ( !! ym6g) {
            delete this.ps2x;
            ym6g.V7O()
        }
    };
    DN7G.bkf6Z = bu7n;
    DN7G.cFv3x = function(e6c) {
        var m6g = {};
        k6e.eQ9H(e6c,
        function(p6j, L7E) {
            this.cj8b.hasOwnProperty(L7E) ? this.cj8b[L7E] = p6j: m6g[L7E] = p6j
        },
        this);
        return m6g
    };
    DN7G.Tn1x = function() {
        this.cj8b = {
            clazz: "",
            parent: null,
            content: this.o6i,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    DN7G.J7C = function() {
        if ( !! this.ps2x) this.ps2x.J7C();
        this.z7s("onaftershow");
        return this
    };
    DN7G.bt7m = function() {
        if ( !! this.ps2x) this.ps2x.bt7m();
        return this
    }
})(); (function() {
    var c6e = NEJ.P,
    et8l = c6e("nej.g"),
    bh7a = c6e("nej.h"),
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    P7I = c6e("nej.ui"),
    Tq1x,
    bYM7F;
    if ( !! P7I.Nq0x) return;
    var jv1x = a6g.ve5j(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + et8l.bka6U + ");}");
    P7I.Nq0x = NEJ.C();
    Tq1x = P7I.Nq0x.M7F(P7I.er8j);
    bYM7F = P7I.Nq0x.cu8m;
    Tq1x.bo7h = function(e6c) {
        this.bq7j(e6c);
        var bs7l = e6c.content || "&nbsp;";
        k6e.fO9F(bs7l) ? this.o6i.innerHTML = bs7l: this.o6i.appendChild(bs7l)
    };
    Tq1x.bC7v = function() {
        this.bH7A();
        this.o6i.innerHTML = "&nbsp;"
    };
    Tq1x.ch7a = function() {
        this.ms2x = jv1x
    };
    Tq1x.J7C = function() {
        bh7a.buH9y(this.o6i);
        bYM7F.J7C.apply(this, arguments);
        return this
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    P7I = c6e("nej.ut"),
    yl5q;
    if ( !! P7I.vT5Y) return;
    P7I.vT5Y = NEJ.C();
    yl5q = P7I.vT5Y.M7F(P7I.cL8D);
    yl5q.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.cFo3x = !!e6c.overflow;
        this.o6i = a6g.A7t(e6c.body);
        this.Eq7j = a6g.A7t(e6c.view) || a6g.bMZ3x(this.o6i);
        this.bYF7y = a6g.A7t(e6c.mbar) || this.o6i;
        this.bbD3x = parseInt(e6c.direction) || 0;
        if ( !! e6c.isRelative) {
            this.o6i.style.position = "relative";
            this.blt6n = true;
            this.blu6o()
        }
        this.bY7R([[document, "mouseup", this.blC6w.f6b(this)], [document, "mousemove", this.blL6F.f6b(this)], [this.bYF7y, "mousedown", this.Ty1x.f6b(this)]])
    };
    yl5q.blu6o = function() {
        if ( !! this.blt6n) {
            this.Nw0x = a6g.ik0x(this.o6i, this.Eq7j);
            this.Nw0x.x -= parseInt(a6g.dm8e(this.o6i, "left")) || 0;
            this.Nw0x.y -= parseInt(a6g.dm8e(this.o6i, "top")) || 0
        }
    };
    yl5q.bC7v = function() {
        this.bH7A();
        delete this.o6i;
        delete this.bYF7y;
        delete this.Eq7j
    };
    yl5q.bmg6a = function() {
        return {
            x: Math.max(this.Eq7j.clientWidth, this.Eq7j.scrollWidth) - this.o6i.offsetWidth,
            y: Math.max(this.Eq7j.clientHeight, this.Eq7j.scrollHeight) - this.o6i.offsetHeight
        }
    };
    yl5q.Ty1x = function(d6d) {
        h6b.bg7Z(d6d);
        if ( !! this.im0x) return;
        this.im0x = {
            x: h6b.jV1x(d6d),
            y: h6b.mz2x(d6d)
        };
        this.bYD7w = this.bmg6a();
        this.z7s("ondragstart", d6d)
    };
    yl5q.blL6F = function(d6d) {
        if (!this.im0x) return;
        var bj7c = {
            x: h6b.jV1x(d6d),
            y: h6b.mz2x(d6d)
        };
        var qP3x = bj7c.x - this.im0x.x,
        qT3x = bj7c.y - this.im0x.y,
        C7v = {
            top: (parseInt(a6g.dm8e(this.o6i, "top")) || 0) + qT3x,
            left: (parseInt(a6g.dm8e(this.o6i, "left")) || 0) + qP3x
        };
        if (this.blt6n) {
            this.blu6o();
            C7v.top = C7v.top + this.Nw0x.y;
            C7v.left = C7v.left + this.Nw0x.x
        }
        this.im0x = bj7c;
        this.he9V(C7v)
    };
    yl5q.blC6w = function(d6d) {
        if (!this.im0x) return;
        delete this.bYD7w;
        delete this.im0x;
        this.z7s("ondragend", this.bmp6j())
    };
    yl5q.he9V = function(d6d) {
        if (!this.cFo3x) {
            var bYC7v = this.bYD7w || this.bmg6a();
            d6d.top = Math.min(bYC7v.y, Math.max(0, d6d.top));
            d6d.left = Math.min(bYC7v.x, Math.max(0, d6d.left))
        }
        var cm8e = this.o6i.style;
        if (this.blt6n) {
            this.blu6o();
            d6d.top = d6d.top - this.Nw0x.y;
            d6d.left = d6d.left - this.Nw0x.x
        }
        if (this.bbD3x == 0 || this.bbD3x == 2) cm8e.top = d6d.top + "px";
        if (this.bbD3x == 0 || this.bbD3x == 1) cm8e.left = d6d.left + "px";
        this.z7s("onchange", d6d);
        return this
    };
    yl5q.bmp6j = function() {
        return {
            left: parseInt(a6g.dm8e(this.o6i, "left")) || 0,
            top: parseInt(a6g.dm8e(this.o6i, "top")) || 0
        }
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = NEJ.P("nej.e"),
    h6b = NEJ.P("nej.v"),
    k6e = NEJ.P("nej.u"),
    H7A = NEJ.P("nej.ut"),
    P7I = NEJ.P("nej.ui"),
    jv1x,
    gB9s,
    b6f,
    K7D;
    if ( !! P7I.bbx3x) return;
    P7I.bbx3x = NEJ.C();
    b6f = P7I.bbx3x.M7F(P7I.SU1x);
    K7D = P7I.bbx3x.cu8m;
    b6f.cA8s = function() {
        this.tx3x = {};
        this.lr1x = {
            onchange: this.blL6F.f6b(this)
        };
        this.cG8y()
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.cFg3x(e6c.mask);
        this.cFd3x(e6c.align);
        this.Fj8b(e6c.title);
        if (!e6c.draggable) return;
        this.jp1x = H7A.vT5Y.B7u(this.lr1x)
    };
    b6f.bC7v = function() {
        this.bH7A();
        delete this.rH3x;
        delete this.TI1x;
        if ( !! this.Cg7Z) {
            this.Cg7Z.V7O();
            delete this.Cg7Z
        }
        if ( !! this.jp1x) {
            this.jp1x.V7O();
            delete this.jp1x
        }
    };
    b6f.ch7a = function() {
        this.ms2x = jv1x;
        this.cf7Y = gB9s
    };
    b6f.bW7P = function() {
        this.ci8a();
        var j6d = a6g.dj8b(this.o6i);
        this.DD7w = j6d[1];
        this.lr1x.mbar = j6d[0];
        this.lr1x.body = this.o6i;
        h6b.s6m(j6d[2], "mousedown", this.cFc3x.f6b(this));
        h6b.s6m(this.lr1x.mbar, "mousedown", this.Ty1x.f6b(this));
        this.bYz7s = a6g.dj8b(this.lr1x.mbar)[0]
    };
    b6f.cFc3x = function(d6d) {
        h6b.bg7Z(d6d);
        this.z7s("onclose", d6d);
        if (!d6d.stopped) {
            this.bt7m()
        }
    };
    b6f.Ty1x = function(d6d) {
        h6b.z7s(document, "click")
    };
    b6f.blL6F = function(d6d) {
        if (!this.oP2x) return;
        a6g.fl9c(this.oP2x, {
            top: d6d.top + "px",
            left: d6d.left + "px"
        })
    };
    b6f.Np0x = function() {
        var eG9x = [function() {
            return 0
        },
        function(ow2x, np2x, bj7c, L7E) {
            if (L7E == "top" && window.top != window.self) {
                var bbv3x = 0,
                Jp9g = 0;
                if (top.g_topBarHeight) bbv3x = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight) Jp9g = top.g_bottomBarHeight;
                if (ow2x.top <= bbv3x) {
                    var boK7D = Math.max(0, (np2x.height - (bbv3x - ow2x.top) - Jp9g - bj7c.height) / 2);
                    return boK7D + bbv3x
                } else {
                    var boK7D = Math.max(0, (np2x.height - Jp9g - bj7c.height) / 2);
                    return boK7D + ow2x.top
                }
            }
            return Math.max(0, ow2x[L7E] + (np2x[iO1x[L7E]] - bj7c[iO1x[L7E]]) / 2)
        },
        function(ow2x, np2x, bj7c, L7E) {
            return ow2x[L7E] + (np2x[iO1x[L7E]] - bj7c[iO1x[L7E]])
        }],
        cEZ3x = ["left", "top"],
        iO1x = {
            left: "width",
            top: "height"
        };
        return function() {
            var C7v = {},
            cm8e = this.o6i.style,
            jU1x = a6g.pA2x(),
            ow2x = {
                left: jU1x.scrollLeft,
                top: jU1x.scrollTop
            },
            np2x = {
                width: jU1x.clientWidth,
                height: jU1x.clientHeight
            },
            bj7c = {
                width: this.o6i.offsetWidth,
                height: this.o6i.offsetHeight
            },
            du8m = {
                left: jU1x.clientWidth - this.o6i.offsetWidth,
                top: jU1x.clientHeight - this.o6i.offsetHeight
            };
            k6e.be7X(cEZ3x,
            function(L7E, r6l) {
                var dB8t = eG9x[this.rH3x[r6l]];
                if (!dB8t) return;
                C7v[L7E] = dB8t(ow2x, np2x, bj7c, L7E)
            },
            this);
            this.he9V(C7v)
        }
    } ();
    b6f.cEX3x = function() {
        if (!this.Cg7Z) {
            if (!this.TI1x) return;
            this.tx3x.parent = this.gw9n;
            this.Cg7Z = this.TI1x.B7u(this.tx3x)
        }
        this.Cg7Z.J7C()
    };
    b6f.bbU3x = function() {
        if ( !! this.Cg7Z) this.Cg7Z.bt7m();
        K7D.bbU3x.apply(this, arguments)
    };
    b6f.cFg3x = function(lM1x) {
        if ( !! lM1x) {
            if (lM1x instanceof P7I.Nq0x) {
                this.Cg7Z = lM1x;
                return
            }
            if (k6e.gZ9Q(lM1x)) {
                this.TI1x = lM1x;
                return
            }
            this.TI1x = P7I.Nq0x;
            if (k6e.fO9F(lM1x)) this.tx3x.clazz = lM1x;
            return
        }
        this.TI1x = null
    };
    b6f.Fj8b = function(ev9m, dZ8R) {
        if ( !! this.bYz7s) {
            var bik5p = !dZ8R ? "innerText": "innerHTML";
            this.bYz7s[bik5p] = ev9m || "标题"
        }
        return this
    };
    b6f.cFd3x = function() {
        var dl8d = /\s+/,
        cEW3x = {
            left: 0,
            center: 1,
            right: 2,
            auto: 3
        },
        cET3x = {
            top: 0,
            middle: 1,
            bottom: 2,
            auto: 3
        };
        return function(ou2x) {
            this.rH3x = (ou2x || "").split(dl8d);
            var cl8d = cEW3x[this.rH3x[0]];
            if (cl8d == null) cl8d = 1;
            this.rH3x[0] = cl8d;
            var cl8d = cET3x[this.rH3x[1]];
            if (cl8d == null) cl8d = 1;
            this.rH3x[1] = cl8d;
            return this
        }
    } ();
    b6f.J7C = function() {
        K7D.J7C.apply(this, arguments);
        this.cEX3x();
        return this
    };
    jv1x = a6g.ve5j(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gB9s = a6g.jJ1x('<div class="' + jv1x + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})(); (function() {
    var c6e = NEJ.P,
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ui"),
    bpe7X;
    if ( !! P7I.bbs3x) return;
    P7I.bbs3x = NEJ.C();
    bpe7X = P7I.bbs3x.M7F(P7I.bbN3x);
    bpe7X.bkf6Z = function() {
        return P7I.bbx3x.B7u(this.cj8b)
    };
    bpe7X.Tn1x = function() {
        P7I.bbs3x.cu8m.Tn1x.apply(this, arguments);
        this.cj8b.mask = null;
        this.cj8b.title = "标题";
        this.cj8b.align = "";
        this.cj8b.draggable = !1;
        this.cj8b.onclose = null
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    bd7W = c6e("nej.ui"),
    n6h = c6e("nm.l"),
    b6f,
    K7D;
    n6h.ep8h = NEJ.C();
    b6f = n6h.ep8h.M7F(bd7W.bbs3x);
    b6f.bo7h = function(e6c) {
        e6c.clazz = "m-layer z-show " + (e6c.clazz || "");
        e6c.nohack = true;
        e6c.draggable = true;
        this.bq7j(e6c)
    };
    b6f.ed8V = function(g6a, bF7y) {
        if (!g6a) return;
        a6g.bb7U(g6a, "display", !bF7y ? "none": "");
        g6a.lastChild.innerText = bF7y || ""
    };
    b6f.ee8W = function(gU9L, de8W, TO1x, TP1x) {
        var em8e = "js-lock";
        if (de8W === undefined) return a6g.bG7z(gU9L, em8e); ! de8W ? a6g.y7r(gU9L, em8e) : a6g.w7p(gU9L, em8e);
        gU9L.firstChild.innerText = !de8W ? TO1x: TP1x
    };
    n6h.ep8h.J7C = function(e6c) {
        e6c = e6c || {};
        if (e6c.mask === undefined) e6c.mask = "m-mask";
        if (e6c.parent === undefined) e6c.parent = document.body;
        if (e6c.draggable === undefined) e6c.draggable = true; !! this.fs9j && this.fs9j.V7O();
        this.fs9j = this.B7u(e6c);
        this.fs9j.J7C(e6c);
        return this.fs9j
    };
    n6h.ep8h.bt7m = function() { !! this.fs9j && this.fs9j.V7O()
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    n6h = c6e("nm.l"),
    b6f,
    K7D;
    n6h.bqR8J = NEJ.C();
    b6f = n6h.bqR8J.M7F(n6h.ep8h);
    K7D = n6h.bqR8J.cu8m;
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        if (e6c.bubble === undefined) e6c.bubble = true;
        this.TQ1x = e6c.bubble;
        this.rL3x = e6c.message || ""
    };
    b6f.ch7a = function() {
        this.cf7Y = a6g.jJ1x('<div class="lyct f-cb f-tc"></div>')
    };
    b6f.bW7P = function() {
        this.ci8a();
        h6b.s6m(this.o6i, "click", this.cM8E.f6b(this))
    };
    b6f.cM8E = function(d6d) {
        var g6a = h6b.Y7R(d6d, "d:action");
        if (!g6a) return;
        if (g6a.href) h6b.cr8j(d6d);
        if (a6g.t7m(g6a, "action") == "close") this.bt7m();
        if (this.TQ1x === !1) h6b.us4w(d6d);
        this.z7s("onaction", a6g.t7m(g6a, "action"))
    };
    b6f.J7C = function() {
        K7D.J7C.call(this);
        this.o6i.innerHTML = this.rL3x
    };
    var gV9M = a6g.eD9u('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l6f.nJ2x = function() {
        var eo8g;
        var cJ8B;
        var brv8n = function(eN9E, W7P) {
            if (k6e.gZ9Q(eN9E, "function") && eN9E(W7P) != -1) cJ8B.V7O()
        };
        var DJ7C = function() { !! cJ8B && cJ8B.bt7m()
        };
        return function(e6c) {
            clearTimeout(eo8g);
            e6c = e6c || {};
            e6c.title = e6c.title || "提示";
            e6c.clazz = e6c.clazz || "";
            e6c.parent = e6c.parent || document.body;
            e6c.buttons = e6c.buttons || [];
            e6c.message = a6g.ce7X(gV9M, e6c);
            e6c.onaction = brv8n.f6b(null, e6c.action);
            if (e6c.mask === undefined) e6c.mask = true;
            if (e6c.draggable === undefined) e6c.draggable = true; !! cJ8B && cJ8B.V7O();
            cJ8B = n6h.bqR8J.B7u(e6c);
            cJ8B.J7C();
            if (e6c.autoclose) eo8g = setTimeout(DJ7C.f6b(null), 2e3);
            return cJ8B
        }
    } ();
    l6f.eU9L = function(e6c) {
        e6c = e6c || {};
        e6c.clazz = e6c.clazz || "m-layer-w1";
        e6c.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e6c.btntxt || "确定"
        }];
        var cJ8B = l6f.nJ2x(e6c);
        return cJ8B
    };
    l6f.hG0x = function(e6c) {
        e6c = e6c || {};
        e6c.clazz = e6c.clazz || "m-layer-w2";
        e6c.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e6c.btnok || "确定",
            style: e6c.okstyle || ""
        },
        {
            klass: "u-btn2-1",
            action: "close",
            text: e6c.btncc || "取消",
            style: e6c.ccstyle || ""
        }];
        var cJ8B = l6f.nJ2x(e6c);
        return cJ8B
    }
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u");
    a6g.cES3x = function() {
        var gS9J = /[\r\n]/gi,
        S7L = {};
        var cER3x = function(cP8H) {
            return (cP8H || "").replace(gS9J, "aa").length
        };
        var bYx7q = function(D7w) {
            var bk7d = S7L[D7w],
            bYw7p = a6g.A7t(D7w),
            rM3x = a6g.A7t(D7w + "-counter");
            if (!bYw7p || !bk7d) return;
            var d6d = {
                input: bYw7p.value
            };
            d6d.length = bk7d.onlength(d6d.input);
            d6d.delta = bk7d.max - d6d.length;
            bk7d.onchange(d6d);
            rM3x.innerHTML = d6d.value || "剩余" + d6d.delta + "个字"
        };
        return function(G7z, e6c) {
            var D7w = a6g.mc2x(G7z);
            if (!D7w || !!S7L[D7w]) return;
            var bk7d = NEJ.X({},
            e6c);
            bk7d.onchange = bk7d.onchange || bu7n;
            bk7d.onlength = cER3x;
            if (!bk7d.max) {
                var bYv7o = parseInt(a6g.hc9T(D7w, "maxlength")),
                bYu7n = parseInt(a6g.t7m(D7w, "maxLength"));
                bk7d.max = bYv7o || bYu7n || 100;
                if (!bYv7o && !!bYu7n) bk7d.onlength = k6e.fN9E
            }
            S7L[D7w] = bk7d;
            h6b.s6m(D7w, "input", bYx7q.f6b(null, D7w));
            var g6a = a6g.Lk9b(D7w, {
                nid: bk7d.nid || "js-counter",
                clazz: bk7d.clazz
            });
            bk7d.xid = D7w + "-counter";
            g6a.id = bk7d.xid;
            bYx7q(D7w)
        }
    } ()
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    bh7a = c6e("nej.h");
    bh7a.bsX8P = function(G7z, en8f) {}
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    P7I = c6e("nej.p"),
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    bh7a = c6e("nej.h");
    if (P7I.om2x.trident) return;
    bh7a.bsX8P = function() {
        var S7L = {};
        var Kr9i = function(d6d) {
            var cT8L = h6b.Y7R(d6d);
            if ( !! cT8L.value) return;
            a6g.bb7U(a6g.Lk9b(cT8L), "display", "none")
        };
        var HQ8I = function(d6d) {
            var cT8L = h6b.Y7R(d6d);
            if ( !! cT8L.value) return;
            a6g.bb7U(a6g.Lk9b(cT8L), "display", "")
        };
        var cEL3x = function(cT8L, en8f) {
            var D7w = a6g.mc2x(cT8L),
            jy1x = a6g.Lk9b(cT8L, {
                tag: "label",
                clazz: en8f
            });
            jy1x.htmlFor = D7w;
            var cI8A = a6g.hc9T(cT8L, "placeholder") || "";
            jy1x.innerText = cI8A == "null" ? "": cI8A;
            var ca7T = cT8L.offsetHeight + "px";
            a6g.fl9c(jy1x, {
                left: 0,
                display: !cT8L.value ? "": "none"
            })
        };
        return bh7a.bsX8P.eO9F(function(d6d) {
            d6d.stopped = !0;
            var bi7b = d6d.args,
            cT8L = a6g.A7t(bi7b[0]);
            if ( !! S7L[cT8L.id]) return;
            cEL3x(cT8L, bi7b[1]);
            S7L[cT8L.id] = !0;
            h6b.s6m(cT8L, "blur", HQ8I.f6b(null));
            h6b.s6m(cT8L, "focus", Kr9i.f6b(null))
        })
    } ()
})(); (function() {
    var c6e = NEJ.P,
    bh7a = c6e("nej.h"),
    a6g = c6e("nej.e"),
    dg8Y = c6e("nej.x");
    a6g.hf9W = dg8Y.hf9W = function(G7z, en8f) {
        bh7a.bsX8P(G7z, a6g.t7m(G7z, "holder") || en8f || "js-placeholder");
        return this
    };
    dg8Y.isChange = !0
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ut"),
    io0x;
    if ( !! P7I.TX1x) return;
    P7I.TX1x = NEJ.C();
    io0x = P7I.TX1x.M7F(P7I.cL8D);
    io0x.cA8s = function() {
        this.cG8y();
        this.Hb8T = {
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
    io0x.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.gI9z = document.forms[e6c.form] || a6g.A7t(e6c.form);
        this.bY7R([[this.gI9z, "keypress", this.cEK3x.f6b(this)]]);
        this.rL3x = e6c.message || {};
        this.rL3x.pass = this.rL3x.pass || "&nbsp;";
        var fq9h = this.qu3x(this.gI9z, "focusMode", 1);
        if (!isNaN(fq9h)) {
            this.bYs6m = {
                mode: fq9h,
                clazz: e6c.focus
            }
        }
        this.EJ8B = e6c.holder;
        this.Hb8T.tp.clazz = "js-mhd " + (e6c.tip || "js-tip");
        this.Hb8T.ok.clazz = "js-mhd " + (e6c.pass || "js-pass");
        this.Hb8T.er.clazz = "js-mhd " + (e6c.error || "js-error");
        this.bYq6k = e6c.invalid || "js-invalid";
        this.cEG3x(e6c);
        this.gR9I();
        if ( !! this.ER8J) this.ER8J.focus()
    };
    io0x.bC7v = function() {
        this.bH7A();
        delete this.rL3x;
        delete this.ER8J;
        delete this.HM8E;
        delete this.gI9z;
        delete this.bYp6j;
        delete this.Uc1x
    };
    io0x.qu3x = function(g6a, yD6x, u7n) {
        var C7v = a6g.t7m(g6a, yD6x);
        switch (u7n) {
        case 1:
            return parseInt(C7v);
        case 2:
            return (C7v || "").toLowerCase() == "true";
        case 3:
            return this.bwy9p(C7v)
        }
        return C7v
    };
    io0x.EX8P = function(C7v, u7n) {
        if (u7n == "date") return this.bwy9p(C7v);
        return parseInt(C7v)
    };
    io0x.bba3x = function() {
        var kC1x = /^button|submit|reset|image|hidden|file$/i;
        return function(g6a) {
            g6a = this.A7t(g6a) || g6a;
            var u7n = g6a.type;
            return !! g6a.name && !kC1x.test(g6a.type || "")
        }
    } ();
    io0x.cED3x = function() {
        var kC1x = /^hidden$/i;
        return function(g6a) {
            if (this.bba3x(g6a)) return ! 0;
            g6a = this.A7t(g6a) || g6a;
            var u7n = g6a.type || "";
            return kC1x.test(u7n)
        }
    } ();
    io0x.bwy9p = function() {
        var dl8d = /[-\/]/;
        var cEC3x = function(C7v) {
            if (!C7v) return "";
            C7v = C7v.split(dl8d);
            C7v.push(C7v.shift());
            return C7v.join("/")
        };
        return function(C7v) {
            if ((C7v || "").toLowerCase() == "now") return + (new Date);
            return Date.parse(cEC3x(C7v))
        }
    } ();
    io0x.cEK3x = function(d6d) {
        if (d6d.keyCode != 13) return;
        this.z7s("onenter", d6d)
    };
    io0x.cEB3x = function(D7w, X7Q) {
        var tE4I = this.Uc1x[X7Q],
        C7v = this.qu3x(D7w, X7Q);
        if (!C7v || !tE4I) return;
        this.baZ3x(D7w, tE4I);
        this.bxh0x(D7w, X7Q, C7v)
    };
    io0x.cEA3x = function(D7w, X7Q) {
        try {
            var bYo6i = this.qu3x(D7w, X7Q);
            if (!bYo6i) return;
            var C7v = new RegExp(bYo6i);
            this.bxh0x(D7w, X7Q, C7v);
            this.baZ3x(D7w, this.Uc1x[X7Q])
        } catch(e) {}
    };
    io0x.cEw3x = function(D7w, X7Q) {
        var tE4I = this.Uc1x[X7Q];
        if ( !! tE4I && this.qu3x(D7w, X7Q, 2)) this.baZ3x(D7w, tE4I)
    };
    io0x.bxQ0x = function(D7w, X7Q, C7v) {
        C7v = parseInt(C7v);
        if (isNaN(C7v)) return;
        this.bxh0x(D7w, X7Q, C7v);
        this.baZ3x(D7w, this.Uc1x[X7Q])
    };
    io0x.bYm6g = function(D7w, X7Q) {
        this.bxQ0x(D7w, X7Q, this.qu3x(D7w, X7Q))
    };
    io0x.bYk6e = function(D7w, X7Q) {
        this.bxQ0x(D7w, X7Q, a6g.hc9T(D7w, X7Q))
    };
    io0x.bYg6a = function(D7w, X7Q, u7n) {
        var C7v = this.EX8P(this.qu3x(D7w, X7Q), this.qu3x(D7w, "type"));
        this.bxQ0x(D7w, X7Q, C7v)
    };
    io0x.cEn3x = function() {
        var gS9J = /^input|textarea$/i;
        var Kr9i = function(d6d) {
            this.qK3x(h6b.Y7R(d6d))
        };
        var HQ8I = function(d6d) {
            var g6a = h6b.Y7R(d6d);
            if (!this.qu3x(g6a, "ignore", 2)) {
                this.bYe6Y(g6a)
            }
        };
        return function(g6a) {
            if (this.qu3x(g6a, "autoFocus", 2)) this.ER8J = g6a;
            var rR3x = a6g.hc9T(g6a, "placeholder");
            if ( !! rR3x && rR3x != "null") a6g.hf9W(g6a, this.EJ8B);
            if ( !! this.bYs6m && gS9J.test(g6a.tagName)) a6g.mU2x(g6a, this.bYs6m);
            var D7w = a6g.mc2x(g6a);
            this.cEw3x(D7w, "required");
            this.cEB3x(D7w, "type");
            this.cEA3x(D7w, "pattern");
            this.bYk6e(D7w, "maxlength");
            this.bYk6e(D7w, "minlength");
            this.bYm6g(D7w, "maxLength");
            this.bYm6g(D7w, "minLength");
            this.bYg6a(D7w, "min");
            this.bYg6a(D7w, "max");
            var X7Q = g6a.name;
            this.rL3x[X7Q + "-tip"] = this.qu3x(g6a, "tip");
            this.rL3x[X7Q + "-error"] = this.qu3x(g6a, "message");
            this.qK3x(g6a);
            var bp7i = this.HM8E[D7w],
            i6c = (bp7i || bc7V).data || bc7V,
            Ug2x = this.qu3x(g6a, "counter", 2);
            if (Ug2x && (i6c.maxlength || i6c.maxLength)) {
                a6g.cES3x(D7w, {
                    nid: this.Hb8T.tp.nid,
                    clazz: "js-counter"
                })
            }
            if ( !! bp7i && gS9J.test(g6a.tagName)) {
                this.bY7R([[g6a, "focus", Kr9i.f6b(this)], [g6a, "blur", HQ8I.f6b(this)]])
            } else if (this.qu3x(g6a, "focus", 2)) {
                this.bY7R([[g6a, "focus", Kr9i.f6b(this)]])
            }
        }
    } ();
    io0x.cEG3x = function() {
        var Ja9R = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return ! v || !isNaN(this.bwy9p(v))
            }
        };
        var cEj3x = {
            required: function(g6a) {
                var u7n = g6a.type,
                cEi3x = !g6a.value,
                cEh3x = (u7n == "checkbox" || u7n == "radio") && !g6a.checked;
                if (cEh3x || cEi3x) return - 1
            },
            type: function(g6a, e6c) {
                var dl8d = this.bYp6j[e6c.type],
                fE9v = g6a.value.trim(),
                cEe3x = !!dl8d.test && !dl8d.test(fE9v),
                cEd3x = k6e.gZ9Q(dl8d) && !dl8d.call(this, fE9v);
                if (cEe3x || cEd3x) return - 2
            },
            pattern: function(g6a, e6c) {
                if (!e6c.pattern.test(g6a.value)) return - 3
            },
            maxlength: function(g6a, e6c) {
                if (g6a.value.length > e6c.maxlength) return - 4
            },
            minlength: function(g6a, e6c) {
                if (g6a.value.length < e6c.minlength) return - 5
            },
            maxLength: function(g6a, e6c) {
                if (k6e.fN9E(g6a.value) > e6c.maxLength) return - 4
            },
            minLength: function(g6a, e6c) {
                if (k6e.fN9E(g6a.value) < e6c.minLength) return - 5
            },
            min: function(g6a, e6c) {
                var hs0x = this.EX8P(g6a.value, e6c.type);
                if (isNaN(hs0x) || hs0x < e6c.min) return - 6
            },
            max: function(g6a, e6c) {
                var hs0x = this.EX8P(g6a.value, e6c.type);
                if (isNaN(hs0x) || hs0x > e6c.max) return - 7
            }
        };
        return function(e6c) {
            this.bYp6j = NEJ.X(NEJ.X({},
            Ja9R), e6c.type);
            this.Uc1x = NEJ.X(NEJ.X({},
            cEj3x), e6c.attr)
        }
    } ();
    io0x.baZ3x = function(D7w, Ar6l) {
        if (!k6e.gZ9Q(Ar6l)) return;
        var bp7i = this.HM8E[D7w];
        if (!bp7i || !bp7i.func) {
            bp7i = bp7i || {};
            bp7i.func = [];
            this.HM8E[D7w] = bp7i
        }
        bp7i.func.push(Ar6l)
    };
    io0x.bxh0x = function(D7w, X7Q, C7v) {
        if (!X7Q) return;
        var bp7i = this.HM8E[D7w];
        if (!bp7i || !bp7i.data) {
            bp7i = bp7i || {};
            bp7i.data = {};
            this.HM8E[D7w] = bp7i
        }
        bp7i.data[X7Q] = C7v
    };
    io0x.bYe6Y = function(g6a) {
        g6a = this.A7t(g6a) || g6a;
        var bp7i = this.HM8E[a6g.mc2x(g6a)];
        if (!g6a || !bp7i || !this.bba3x(g6a)) return ! 0;
        var m6g;
        k6e.eQ9H(bp7i.func,
        function(eG9x) {
            m6g = eG9x.call(this, g6a, bp7i.data);
            return m6g != null
        },
        this);
        if (m6g == null) {
            var d6d = {
                target: g6a,
                form: this.gI9z
            };
            this.z7s("oncheck", d6d);
            m6g = d6d.value
        }
        var d6d = {
            target: g6a,
            form: this.gI9z
        };
        if (m6g != null) {
            d6d.code = m6g;
            this.z7s("oninvalid", d6d);
            if (!d6d.stopped) {
                this.cEc3x(g6a, d6d.value || this.rL3x[g6a.name + m6g])
            }
        } else {
            this.z7s("onvalid", d6d);
            if (!d6d.stopped) this.cEa3x(g6a, d6d.value)
        }
        return m6g == null
    };
    io0x.Av6p = function() {
        var cDY3x = function(bhw5B, bhu5z) {
            return bhw5B == bhu5z ? "block": "none"
        };
        var cDX3x = function(g6a, u7n, bF7y) {
            var rR3x = bYa6U.call(this, g6a, u7n);
            if (!rR3x && !!bF7y) rR3x = a6g.Lk9b(g6a, this.Hb8T[u7n]);
            return rR3x
        };
        var bYa6U = function(g6a, u7n) {
            var rR3x;
            if (u7n == "tp") rR3x = a6g.A7t(g6a.name + "-tip");
            if (!rR3x) rR3x = a6g.F7y(g6a.parentNode, this.Hb8T[u7n].nid)[0];
            return rR3x
        };
        return function(g6a, bF7y, u7n) {
            g6a = this.A7t(g6a) || g6a;
            if (!g6a) return;
            u7n == "er" ? a6g.w7p(g6a, this.bYq6k) : a6g.y7r(g6a, this.bYq6k);
            var rR3x = cDX3x.call(this, g6a, u7n, bF7y);
            if ( !! rR3x && !!bF7y) rR3x.innerHTML = bF7y;
            k6e.eQ9H(this.Hb8T,
            function(C7v, L7E) {
                a6g.bb7U(bYa6U.call(this, g6a, L7E), "display", cDY3x(u7n, L7E))
            },
            this)
        }
    } ();
    io0x.qK3x = function(g6a, bF7y) {
        this.Av6p(g6a, bF7y || this.rL3x[g6a.name + "-tip"], "tp");
        return this
    };
    io0x.cEa3x = function(g6a, bF7y) {
        this.Av6p(g6a, bF7y || this.rL3x[g6a.name + "-pass"] || this.rL3x.pass, "ok");
        return this
    };
    io0x.cEc3x = function(g6a, bF7y) {
        this.Av6p(g6a, bF7y || this.rL3x[g6a.name + "-error"], "er");
        return this
    };
    io0x.js1x = function() {
        var gS9J = /^(?:radio|checkbox)$/i;
        var cDV3x = function(C7v) {
            return C7v == null ? "": C7v
        };
        var bXY6S = function(C7v, g6a) {
            if (gS9J.test(g6a.type || "")) {
                g6a.checked = C7v == g6a.value
            } else {
                g6a.value = cDV3x(C7v)
            }
        };
        return function(X7Q, C7v) {
            var g6a = this.A7t(X7Q);
            if (!g6a) return this;
            if (g6a.tagName == "SELECT" || !g6a.length) {
                bXY6S(C7v, g6a)
            } else {
                k6e.be7X(g6a, bXY6S.f6b(null, C7v))
            }
            return this
        }
    } ();
    io0x.A7t = function(X7Q) {
        return this.gI9z.elements[X7Q]
    };
    io0x.cKB5G = function() {
        return this.gI9z
    };
    io0x.baE3x = function() {
        var gS9J = /^radio|checkbox$/i,
        kC1x = /^number|date$/;
        var cDO3x = function(bB7u, g6a) {
            var X7Q = g6a.name,
            C7v = g6a.value,
            bp7i = bB7u[X7Q],
            u7n = this.qu3x(g6a, "type");
            if (kC1x.test(u7n)) C7v = this.EX8P(C7v, u7n);
            if (gS9J.test(g6a.type) && !g6a.checked) {
                C7v = this.qu3x(g6a, "value");
                if (!C7v) return
            }
            if ( !! bp7i) {
                if (!k6e.eh8Z(bp7i)) {
                    bp7i = [bp7i];
                    bB7u[X7Q] = bp7i
                }
                bp7i.push(C7v)
            } else {
                bB7u[X7Q] = C7v
            }
        };
        return function() {
            var m6g = {};
            k6e.be7X(this.gI9z.elements,
            function(g6a) {
                if (this.cED3x(g6a)) cDO3x.call(this, m6g, g6a)
            },
            this);
            return m6g
        }
    } ();
    io0x.YC3x = function() {
        var cDN3x = function(g6a) {
            if (this.bba3x(g6a)) this.qK3x(g6a)
        };
        return function() {
            this.gI9z.reset();
            k6e.be7X(this.gI9z.elements, cDN3x, this);
            return this
        }
    } ();
    io0x.cKC5H = function() {
        this.gI9z.submit();
        return this
    };
    io0x.gR9I = function() {
        var cDJ3x = function(g6a) {
            if (this.bba3x(g6a)) this.cEn3x(g6a)
        };
        return function() {
            this.HM8E = {};
            k6e.be7X(this.gI9z.elements, cDJ3x, this);
            return this
        }
    } ();
    io0x.cDI3x = function(g6a) {
        g6a = this.A7t(g6a) || g6a;
        if ( !! g6a) return this.bYe6Y(g6a);
        var m6g = !0;
        k6e.be7X(this.gI9z.elements,
        function(g6a) {
            var it1x = this.cDI3x(g6a);
            m6g = m6g && it1x
        },
        this);
        return m6g
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    H7A = c6e("nej.ut"),
    k6e = c6e("nej.u"),
    l6f = c6e("nm.x"),
    n6h = c6e("nm.l"),
    b6f,
    K7D;
    n6h.bay3x = NEJ.C();
    b6f = n6h.bay3x.M7F(n6h.ep8h);
    K7D = n6h.bay3x.cu8m;
    b6f.bW7P = function() {
        this.ci8a();
        h6b.s6m(this.o6i, "click", this.cM8E.f6b(this));
        h6b.s6m(document, "mousewheel", this.Dm7f.f6b(this));
        if ( !! document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.Dm7f.f6b(this))
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        if (e6c.jst) {
            this.o6i.innerHTML = a6g.ce7X(e6c.jst, e6c.data)
        } else if (e6c.ntp) {
            this.o6i.appendChild(a6g.dE8w(e6c.ntp))
        } else if (e6c.txt) {
            this.o6i.innerHTML = a6g.is1x(e6c.txt)
        } else if (e6c.html) {
            this.o6i.innerHTML = e6c.html
        }
        var UO2x = this.o6i.getElementsByTagName("form");
        if (UO2x.length) {
            this.gI9z = H7A.TX1x.B7u({
                form: UO2x[0]
            })
        }
        this.FJ8B = a6g.dj8b(this.o6i)[0]
    };
    b6f.bC7v = function() {
        this.z7s("ondestroy");
        this.bH7A();
        this.o6i.innerHTML = "";
        delete this.FJ8B
    };
    b6f.cM8E = function(d6d) {
        var g6a = h6b.Y7R(d6d, "d:action"),
        i6c = this.gI9z ? this.gI9z.baE3x() : null,
        d6d = {
            action: a6g.t7m(g6a, "action")
        };
        if (i6c) d6d.data = i6c;
        if (d6d.action) {
            this.z7s("onaction", d6d);
            if (d6d.stopped) return;
            this.bt7m()
        }
    };
    b6f.Dm7f = function(d6d) {
        if (!this.FJ8B) return;
        h6b.bg7Z(d6d);
        var du8m = d6d.wheelDelta || -d6d.detail;
        this.FJ8B.scrollTop -= du8m
    };
    l6f.ku1x = function(e6c) {
        e6c.destroyable = e6c.destroyable || true;
        e6c.title = e6c.title || "提示";
        e6c.draggable = true;
        e6c.parent = e6c.parent || document.body;
        e6c.mask = e6c.mask || true;
        var ym6g = n6h.bay3x.B7u(e6c);
        ym6g.J7C();
        return ym6g
    }
})(); (function() {
    var p = NEJ.P("nej.u");
    var bXW6Q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    UV2x = {},
    FR8J = {};
    for (var i = 0,
    l = bXW6Q.length,
    c; i < l; i++) {
        c = bXW6Q.charAt(i);
        UV2x[i] = c;
        FR8J[c] = i
    }
    var cDG3x = function(iV1x) {
        var r6l = 0,
        c, m6g = [];
        while (r6l < iV1x.length) {
            c = iV1x[r6l];
            if (c < 128) {
                m6g.push(String.fromCharCode(c));
                r6l++
            } else if (c > 191 && c < 224) {
                m6g.push(String.fromCharCode((c & 31) << 6 | iV1x[r6l + 1] & 63));
                r6l += 2
            } else {
                m6g.push(String.fromCharCode((c & 15) << 12 | (iV1x[r6l + 1] & 63) << 6 | iV1x[r6l + 2] & 63));
                r6l += 3
            }
        }
        return m6g.join("")
    };
    var cDF3x = function() {
        var hU0x = /\r\n/g;
        return function(i6c) {
            i6c = i6c.replace(hU0x, "\n");
            var m6g = [],
            mX2x = String.fromCharCode(237);
            if (mX2x.charCodeAt(0) < 0) for (var i = 0,
            l = i6c.length,
            c; i < l; i++) {
                c = i6c.charCodeAt(i);
                c > 0 ? m6g.push(c) : m6g.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0,
            l = i6c.length,
            c; i < l; i++) {
                c = i6c.charCodeAt(i);
                if (c < 128) m6g.push(c);
                else if (c > 127 && c < 2048) m6g.push(c >> 6 | 192, c & 63 | 128);
                else m6g.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return m6g
        }
    } ();
    var NZ0x = function(iV1x) {
        var r6l = 0,
        m6g = [],
        fq9h = iV1x.length % 3;
        if (fq9h == 1) iV1x.push(0, 0);
        if (fq9h == 2) iV1x.push(0);
        while (r6l < iV1x.length) {
            m6g.push(UV2x[iV1x[r6l] >> 2], UV2x[(iV1x[r6l] & 3) << 4 | iV1x[r6l + 1] >> 4], UV2x[(iV1x[r6l + 1] & 15) << 2 | iV1x[r6l + 2] >> 6], UV2x[iV1x[r6l + 2] & 63]);
            r6l += 3
        }
        if (fq9h == 1) m6g[m6g.length - 1] = m6g[m6g.length - 2] = "=";
        if (fq9h == 2) m6g[m6g.length - 1] = "=";
        return m6g.join("")
    };
    var bXV6P = function() {
        var sZ3x = /\n|\r|=/g;
        return function(i6c) {
            var r6l = 0,
            m6g = [];
            i6c = i6c.replace(sZ3x, "");
            for (var i = 0,
            l = i6c.length; i < l; i += 4) m6g.push(FR8J[i6c.charAt(i)] << 2 | FR8J[i6c.charAt(i + 1)] >> 4, (FR8J[i6c.charAt(i + 1)] & 15) << 4 | FR8J[i6c.charAt(i + 2)] >> 2, (FR8J[i6c.charAt(i + 2)] & 3) << 6 | FR8J[i6c.charAt(i + 3)]);
            var br7k = m6g.length,
            fq9h = i6c.length % 4;
            if (fq9h == 2) m6g = m6g.slice(0, br7k - 2);
            if (fq9h == 3) m6g = m6g.slice(0, br7k - 1);
            return m6g
        }
    } ();
    p.cKD5I = function(i6c) {
        return cDG3x(bXV6P(i6c))
    };
    p.cDB3x = function(i6c) {
        var iV1x = bXV6P(i6c),
        dv8n = iV1x.length,
        iP1x;
        var r6l = 0;
        while (iP1x = iV1x[r6l]) {
            if (iP1x > 128) {
                iV1x[r6l] = iP1x - 256
            }
            r6l++
        }
        return iV1x
    };
    p.cDA3x = function(i6c) {
        try {
            return window.btoa(i6c)
        } catch(ex) {
            return NZ0x(cDF3x(i6c))
        }
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    h6b = c6e("nej.v"),
    a6g = c6e("nej.e"),
    v7o = c6e("nej.j"),
    P7I = c6e("nej.p"),
    k6e = c6e("nej.u"),
    n6h = c6e("nm.l"),
    x7q = c6e("nm.w"),
    bD7w = c6e("nej.ui"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    b6f,
    K7D;
    var TYPE_MAP = {
        13 : "playlist",
        17 : "program",
        18 : "song",
        19 : "album"
    };
    n6h.bXU6O = NEJ.C();
    b6f = n6h.bXU6O.M7F(n6h.ep8h);
    b6f.ch7a = function() {
        this.cf7Y = "m-download-layer"
    };
    b6f.bW7P = function() {
        this.ci8a();
        var j6d = a6g.F7y(this.o6i, "j-flag");
        this.bjH5M = j6d[0];
        this.bjJ5O = j6d[1];
        this.bXS6M = j6d[2];
        v7o.bl7e("/client/version/get", {
            type: "json",
            onload: this.cDt3x.f6b(this)
        });
        if (P7I.Kb9S.mac) {
            a6g.y7r(this.bjH5M.parentNode, "f-hide");
            a6g.w7p(this.bjJ5O.parentNode, "f-hide");
            a6g.w7p(this.bXS6M, "f-hide")
        } else {
            a6g.w7p(this.bjH5M.parentNode, "f-hide");
            a6g.y7r(this.bjJ5O.parentNode, "f-hide");
            a6g.y7r(this.bXS6M, "f-hide")
        }
    };
    b6f.bo7h = function(e6c) {
        e6c.clazz = " m-layer-down";
        e6c.parent = e6c.parent || document.body;
        e6c.title = "下载";
        e6c.draggable = !0;
        e6c.destroyalbe = !0;
        e6c.mask = true;
        this.bq7j(e6c);
        this.bY7R([[this.o6i, "click", this.bU7N.f6b(this)]]);
        this.eH9y = TYPE_MAP[e6c.type];
        this.hp0x = e6c.id
    };
    b6f.bC7v = function() {
        this.bH7A()
    };
    b6f.Ea7T = function() {
        this.bt7m()
    };
    b6f.GD8v = function(d6d) {
        this.z7s("onok", C7v);
        this.bt7m()
    };
    b6f.bU7N = function(d6d) {
        var g6a = h6b.Y7R(d6d, "d:action");
        switch (a6g.t7m(g6a, "action")) {
        case "download":
            this.bt7m();
            window.open(a6g.t7m(g6a, "src"));
            break;
        case "orpheus":
            this.bt7m();
            location.href = "orpheus://" + k6e.cDA3x(JSON.stringify({
                type: this.eH9y,
                id: this.hp0x,
                cmd: "download"
            }));
            break
        }
    };
    b6f.cDt3x = function(d6d) {
        if ((d6d || bc7V).code == 200) {
            this.MJ0x = d6d.data;
            this.bjH5M.innerText = "V" + this.MJ0x.mac;
            this.bjJ5O.innerText = "V" + this.MJ0x.pc
        }
    };
    l6f.Oi0x = function(e6c) {
        n6h.bXU6O.B7u(e6c).J7C()
    }
})(); (function() {
    var c6e = NEJ.P,
    l6f = c6e("nm.x");
    var FullscreenApi = {};
    var apiMap = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]];
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
    l6f.GG8y = FullscreenApi
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    k6e = c6e("nej.u"),
    q6k = c6e("nm.d"),
    bT7M = {};
    q6k.A7t = function(L7E) {
        return bT7M[L7E]
    };
    q6k.mS2x = function(L7E, bk7d) {
        bT7M[L7E] = bk7d
    };
    q6k.ft9k = function(i6c) {
        k6e.eQ9H(i6c,
        function(p6j, L7E) {
            var bk7d = bT7M[L7E] || {};
            NEJ.X(bk7d, p6j);
            bT7M[L7E] = bk7d
        })
    }
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    bh7a = c6e("nej.h");
    bh7a.bag3x = function(L7E) {
        return localStorage.getItem(L7E)
    };
    bh7a.baf3x = function(L7E, C7v) {
        localStorage.setItem(L7E, C7v)
    };
    bh7a.bkw6q = function(L7E) {
        localStorage.removeItem(L7E)
    };
    bh7a.bkF6z = function() {
        localStorage.clear()
    };
    bh7a.cDo3x = function() {
        var m6g = [];
        for (var i = 0,
        l = localStorage.length; i < l; i++) m6g.push(localStorage.key(i));
        return m6g
    };
    bh7a.bkO6I = function() { (document.onstorageready || bu7n)()
    };
    bh7a.bkT6N = function() {
        return ! 0
    }
})(); (function() {
    var c6e = NEJ.P,
    P7I = c6e("nej.p"),
    iP1x = c6e("nej.c"),
    bh7a = c6e("nej.h"),
    uz4D;
    if (P7I.om2x.trident || !!window.localStorage) return;
    var cDn3x = function() {
        var tA4E, eo8g;
        var bAS0x = function() {
            tA4E = document.createElement("div");
            NEJ.X(tA4E.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", tA4E);
            tA4E.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + iP1x.A7t("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var QI1x = function() {
            eo8g = window.clearTimeout(eo8g);
            var ih0x = tA4E.getElementsByTagName("object")[0];
            if ( !! ih0x.initStorage) {
                delete tA4E;
                uz4D = ih0x;
                uz4D.initStorage("nej-storage"); (document.onstorageready || bu7n)();
                return
            }
            eo8g = window.setTimeout(QI1x, 500)
        };
        return function() {
            if ( !! uz4D) return;
            bAS0x();
            QI1x()
        }
    } ();
    bh7a.bag3x = bh7a.bag3x.eO9F(function(d6d) {
        d6d.stopped = !0;
        if (!uz4D) return;
        d6d.value = uz4D.getItem(d6d.args[0])
    });
    bh7a.baf3x = bh7a.baf3x.eO9F(function(d6d) {
        d6d.stopped = !0;
        if (!uz4D) return;
        var bi7b = d6d.args;
        uz4D.setItem(bi7b[0], bi7b[1])
    });
    bh7a.bkw6q = bh7a.bkw6q.eO9F(function(d6d) {
        d6d.stopped = !0;
        if (!uz4D) return;
        uz4D.removeItem(d6d.args[0])
    });
    bh7a.bkF6z = bh7a.bkF6z.eO9F(function(d6d) {
        d6d.stopped = !0;
        if ( !! uz4D) uz4D.clear()
    });
    bh7a.bkO6I = bh7a.bkO6I.eO9F(function(d6d) {
        d6d.stopped = !0;
        cDn3x()
    });
    bh7a.bkT6N = bh7a.bkT6N.eO9F(function(d6d) {
        d6d.stopped = !0;
        d6d.value = !!uz4D
    })
})(); (function() {
    var c6e = NEJ.P,
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    bh7a = c6e("nej.h"),
    v7o = c6e("nej.j"),
    H7A = c6e("nej.ut"),
    S7L = {};
    v7o.vZ5e = function(L7E, C7v) {
        var bXR6L = JSON.stringify(C7v);
        try {
            bh7a.baf3x(L7E, bXR6L)
        } catch(ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bXR6L != bh7a.bag3x(L7E)) S7L[L7E] = C7v;
        return this
    };
    v7o.uw4A = function(L7E) {
        var i6c = JSON.parse(bh7a.bag3x(L7E) || "null");
        return i6c == null ? S7L[L7E] : i6c
    };
    v7o.bXQ6K = function(L7E, C7v) {
        var i6c = v7o.uw4A(L7E);
        if (i6c == null) {
            i6c = C7v;
            v7o.vZ5e(L7E, i6c)
        }
        return i6c
    };
    v7o.Oj0x = function(L7E) {
        delete S7L[L7E];
        bh7a.bkw6q(L7E);
        return this
    };
    v7o.cKE5J = function() {
        var blx6r = function(p6j, L7E, bB7u) {
            delete bB7u[L7E]
        };
        return function() {
            k6e.eQ9H(S7L, blx6r);
            bh7a.bkF6z();
            return this
        }
    } ();
    v7o.cKH5M = function(m6g) {
        m6g = m6g || {};
        k6e.be7X(bh7a.cDo3x(),
        function(L7E) {
            m6g[L7E] = v7o.uw4A(L7E)
        });
        return m6g
    };
    H7A.fQ9H.B7u({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (bh7a.bkT6N()) {
                document.onstorageready()
            }
        }
    });
    var cDh3x = function() {
        var cCW3x = function(C7v, L7E, bB7u) {
            bh7a.baf3x(L7E, JSON.stringify(C7v));
            delete bB7u[L7E]
        };
        return function() {
            k6e.eQ9H(S7L, cCW3x)
        }
    } ();
    h6b.s6m(document, "storageready", cDh3x);
    bh7a.bkO6I()
})(); (function() {
    var c6e = NEJ.P,
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ut"),
    Oq0x;
    if ( !! P7I.blT6N) return;
    P7I.blT6N = NEJ.C();
    Oq0x = P7I.blT6N.M7F(P7I.cL8D);
    Oq0x.cA8s = function() {
        var gV9M = +(new Date),
        ob2x = "dat-" + gV9M;
        return function() {
            this.cG8y();
            var S7L = this.constructor[ob2x];
            if (!S7L) {
                S7L = {};
                this.constructor[ob2x] = S7L
            }
            this.T7M = S7L
        }
    } ();
    Oq0x.A7t = function(L7E) {
        return this.T7M[L7E]
    };
    Oq0x.mS2x = function(L7E, C7v) {
        var od2x = this.T7M[L7E];
        this.T7M[L7E] = C7v;
        h6b.z7s(localCache, "cachechange", {
            key: L7E,
            type: "set",
            oldValue: od2x,
            newValue: C7v
        });
        return this
    };
    Oq0x.cS8K = function(L7E) {
        var od2x = this.T7M[L7E];
        k6e.bfk4o(this.T7M, L7E);
        h6b.z7s(localCache, "cachechange", {
            key: L7E,
            type: "delete",
            oldValue: od2x,
            newValue: undefined
        });
        return od2x
    };
    Oq0x.ZZ3x = function(FC8u) {
        return NEJ.Q(this.T7M, FC8u)
    };
    window.localCache = P7I.blT6N.B7u();
    P7I.fQ9H.B7u({
        element: localCache,
        event: "cachechange"
    })
})(); (function() {
    var c6e = NEJ.P,
    fL9C = NEJ.R,
    bu7n = NEJ.F,
    k6e = c6e("nej.u"),
    v7o = c6e("nej.j"),
    P7I = c6e("nej.ut"),
    ob2x = "dat-" + +(new Date),
    oe2x;
    if ( !! P7I.bmm6g) return;
    P7I.bmm6g = NEJ.C();
    oe2x = P7I.bmm6g.M7F(P7I.cL8D);
    oe2x.cA8s = function() {
        this.cG8y();
        this.T7M = this.constructor[ob2x];
        if (!this.T7M) {
            this.T7M = {};
            this.T7M[ob2x + "-l"] = {};
            this.constructor[ob2x] = this.T7M
        }
    };
    oe2x.tr3x = function(L7E) {
        return this.T7M[L7E]
    };
    oe2x.qt3x = function(L7E, C7v) {
        this.T7M[L7E] = C7v
    };
    oe2x.mf2x = function(L7E, kS1x) {
        var i6c = this.tr3x(L7E);
        if (i6c == null) {
            i6c = kS1x;
            this.qt3x(L7E, i6c)
        }
        return i6c
    };
    oe2x.cCV3x = function(L7E) {
        if (L7E != null) {
            delete this.T7M[L7E];
            return
        }
        k6e.eQ9H(this.T7M,
        function(p6j, L7E) {
            if (L7E == ob2x + "-l") return;
            this.cCV3x(L7E)
        },
        this)
    };
    oe2x.cKJ5O = function(L7E) {
        if ( !! v7o.Oj0x) return v7o.Oj0x(L7E)
    };
    oe2x.cCN3x = function(L7E) {
        if ( !! v7o.uw4A) return v7o.uw4A(L7E)
    };
    oe2x.cCM3x = function(L7E, C7v) {
        if ( !! v7o.vZ5e) v7o.vZ5e(L7E, C7v)
    };
    oe2x.Ie8W = function(L7E, kS1x) {
        var i6c = this.VN2x(L7E);
        if (i6c == null) {
            i6c = kS1x;
            this.yf5k(L7E, i6c)
        }
        return i6c
    };
    oe2x.VN2x = function(L7E) {
        var i6c = this.tr3x(L7E);
        if (i6c != null) return i6c;
        i6c = this.cCN3x(L7E);
        if (i6c != null) this.qt3x(L7E, i6c);
        return i6c
    };
    oe2x.yf5k = function(L7E, C7v) {
        this.cCM3x(L7E, C7v);
        this.qt3x(L7E, C7v)
    };
    oe2x.bXG6A = function(L7E) {
        if (L7E != null) {
            delete this.T7M[L7E];
            if ( !! v7o.Oj0x) v7o.Oj0x(L7E);
            return
        }
        k6e.eQ9H(this.T7M,
        function(p6j, L7E) {
            if (L7E == ob2x + "-l") return;
            this.bXG6A(L7E)
        },
        this)
    };
    oe2x.cKK5P = function() {
        this.bXG6A();
        return this
    };
    oe2x.cKL5Q = function(L7E) {
        var i6c = this.T7M[ob2x + "-l"];
        delete i6c[L7E]
    };
    oe2x.bnD7w = function(L7E) {
        var i6c = this.T7M[ob2x + "-l"],
        bi7b = fL9C.slice.call(arguments, 1);
        k6e.be7X(i6c[L7E],
        function(cE8w) {
            try {
                cE8w.apply(null, bi7b)
            } catch(ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete i6c[L7E]
    };
    oe2x.bnE7x = function(L7E, cE8w) {
        cE8w = cE8w || bu7n;
        var j6d = this.T7M[ob2x + "-l"][L7E];
        if (!j6d) {
            j6d = [cE8w];
            this.T7M[ob2x + "-l"][L7E] = j6d;
            return ! 1
        }
        j6d.push(cE8w);
        return ! 0
    };
    oe2x.cCC3x = function(j6d, bj7c, go9f) {
        if (!j6d) return ! 1;
        bj7c = parseInt(bj7c) || 0;
        go9f = parseInt(go9f) || 0;
        if (!go9f) {
            if (!j6d.loaded) return ! 1;
            go9f = j6d.length
        }
        if ( !! j6d.loaded) go9f = Math.min(go9f, j6d.length - bj7c);
        for (var i = 0; i < go9f; i++) if (!j6d[bj7c + i]) return ! 1;
        return ! 0
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ut"),
    b6f,
    K7D;
    if ( !! P7I.VT2x) return;
    P7I.VT2x = NEJ.C();
    b6f = P7I.VT2x.M7F(P7I.bmm6g);
    K7D = P7I.VT2x.cu8m;
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.yZ6T = e6c.key || "id";
        this.bf7Y = e6c.data || bc7V;
        this.cCB3x = !!e6c.autogc;
        this.cCA3x(e6c.id)
    };
    b6f.bC7v = function() {
        this.bH7A();
        if ( !! this.dM8E) {
            this.bXD6x()
        }
    };
    b6f.cCA3x = function(D7w) {
        var S7L;
        if ( !! D7w) {
            S7L = this.T7M[D7w];
            if (!S7L) {
                S7L = {};
                this.T7M[D7w] = S7L
            }
        }
        S7L = S7L || this.T7M;
        S7L.hash = S7L.hash || {};
        this.Wd2x = S7L
    };
    b6f.bXD6x = function() {
        this.dM8E = window.clearTimeout(this.dM8E);
        var bB7u = {};
        k6e.eQ9H(this.Wd2x,
        function(j6d, L7E) {
            if (L7E == "hash") return;
            if (!k6e.eh8Z(j6d)) return;
            k6e.be7X(j6d,
            function(p6j) {
                if (!p6j) return;
                bB7u[p6j[this.yZ6T]] = !0
            },
            this)
        },
        this);
        k6e.eQ9H(this.ZP3x(),
        function(p6j, D7w, dW8O) {
            if (!bB7u[D7w]) {
                delete dW8O[D7w]
            }
        })
    };
    b6f.cCx3x = function() {
        if ( !! this.dM8E) {
            this.dM8E = window.clearTimeout(this.dM8E)
        }
        this.dM8E = window.setTimeout(this.bXD6x.f6b(this), 150)
    };
    b6f.Cz7s = function(p6j, ZN3x) {
        p6j = this.bXC6w(p6j, ZN3x) || p6j;
        if (!p6j) return null;
        var L7E = p6j[this.yZ6T];
        if (L7E != null) {
            var gK9B = this.ZP3x()[L7E];
            if ( !! gK9B) p6j = NEJ.X(gK9B, p6j);
            this.ZP3x()[L7E] = p6j
        }
        delete p6j.bXB6v;
        return p6j
    };
    b6f.bXC6w = bu7n;
    b6f.box7q = function(L7E, p6j) {
        if (!p6j) return;
        if (!k6e.eh8Z(p6j)) {
            var j6d = this.hL0x(L7E),
            p6j = this.Cz7s(p6j, L7E);
            if ( !! p6j) j6d.unshift(p6j);
            return
        }
        k6e.oc2x(p6j, this.box7q.f6b(this, L7E))
    };
    b6f.Wl2x = function(L7E, cF8x) {
        var j6d = this.hL0x(L7E);
        j6d.length = Math.max(j6d.length, cF8x);
        this.boR7K(L7E);
        return this
    };
    b6f.lR1x = function(L7E) {
        return this.hL0x(L7E).length
    };
    b6f.boR7K = function(L7E, pz2x) {
        this.hL0x(L7E).loaded = pz2x != !1;
        return this
    };
    b6f.ZL3x = function(L7E) {
        return !! this.hL0x(L7E).loaded
    };
    b6f.tp3x = function(L7E, j6d) {
        this.we5j(L7E);
        this.bpg7Z({
            key: L7E,
            offset: 0,
            limit: j6d.length + 1
        },
        {
            list: j6d,
            total: j6d.length
        })
    };
    b6f.hL0x = function() {
        var Jv9m = function(L7E) {
            return (L7E || "") + (!L7E ? "": "-") + "list"
        };
        return function(L7E) {
            var L7E = Jv9m(L7E),
            j6d = this.Wd2x[L7E];
            if (!j6d) {
                j6d = [];
                this.Wd2x[L7E] = j6d
            }
            return j6d
        }
    } ();
    b6f.ZP3x = function() {
        var dW8O = this.Wd2x.hash;
        if (!dW8O) {
            dW8O = {};
            this.Wd2x.hash = dW8O
        }
        return dW8O
    };
    b6f.bpp7i = function() {
        var Jv9m = function(e6c) {
            return "r-" + e6c.key
        };
        return function(e6c) {
            var ju1x = NEJ.X({},
            e6c),
            oJ2x = Jv9m(ju1x);
            if (!this.bnE7x(oJ2x, this.z7s.f6b(this))) {
                ju1x.rkey = oJ2x;
                ju1x.onload = this.cCt3x.f6b(this, ju1x);
                this.z7s("dopullrefresh", ju1x)
            }
            return this
        }
    } ();
    b6f.cCt3x = function(e6c, j6d) {
        this.box7q(e6c.key, j6d);
        this.bnD7w(e6c.rkey, "onpullrefresh", e6c)
    };
    b6f.me2x = function() {
        var Jv9m = function(e6c) {
            return "r-" + e6c.key + "-" + e6c.offset + "-" + e6c.limit
        };
        return function(e6c) {
            e6c = e6c || bc7V;
            var ju1x = {
                key: "" + e6c.key || "",
                ext: e6c.ext || null,
                data: e6c.data || null,
                offset: parseInt(e6c.offset) || 0,
                limit: parseInt(e6c.limit) || 0
            },
            j6d = this.hL0x(ju1x.key);
            if (this.cCC3x(j6d, ju1x.offset, ju1x.limit)) {
                this.z7s("onlistload", ju1x);
                return this
            }
            var oJ2x = Jv9m(ju1x);
            if (!this.bnE7x(oJ2x, this.z7s.f6b(this))) {
                ju1x.rkey = oJ2x;
                ju1x.onload = this.bpg7Z.f6b(this, ju1x);
                this.z7s("doloadlist", ju1x)
            }
            return this
        }
    } ();
    b6f.bpg7Z = function() {
        var JV9M = function(p6j, r6l, j6d) {
            if ( !! p6j) {
                return ! 0
            }
            j6d.splice(r6l, 1)
        };
        return function(e6c, m6g) {
            e6c = e6c || bc7V;
            var L7E = e6c.key,
            bj7c = e6c.offset,
            bXA6u = this.hL0x(L7E);
            var j6d = m6g || [];
            if (!k6e.eh8Z(j6d)) {
                j6d = m6g.result || m6g.list || [];
                var cF8x = parseInt(m6g.total);
                if (!isNaN(cF8x) || cF8x > j6d.length) {
                    this.Wl2x(L7E, cF8x)
                }
            }
            k6e.be7X(j6d,
            function(p6j, r6l) {
                bXA6u[bj7c + r6l] = this.Cz7s(p6j, L7E)
            },
            this);
            if (j6d.length < e6c.limit) {
                this.boR7K(L7E);
                k6e.oc2x(bXA6u, JV9M)
            }
            this.bnD7w(e6c.rkey, "onlistload", e6c)
        }
    } ();
    b6f.we5j = function() {
        var JV9M = function(p6j, r6l, j6d) {
            j6d.splice(r6l, 1)
        };
        return function(L7E) {
            var j6d = this.hL0x(L7E);
            k6e.oc2x(j6d, JV9M);
            this.boR7K(L7E, !1);
            if (this.cCB3x) {
                this.cCx3x()
            }
            return this
        }
    } ();
    b6f.bXz6t = function(p6j, ZN3x) {
        return ! p6j.bXB6v
    };
    b6f.eS9J = function(D7w) {
        return this.ZP3x()[D7w]
    };
    b6f.cKM5R = function(D7w) {
        var p6j = this.eS9J(D7w);
        if ( !! p6j) p6j.bXB6v = !0
    };
    b6f.ZI3x = function() {
        var Jv9m = function(e6c) {
            return "r-" + e6c.key + "-" + e6c.id
        };
        return function(e6c) {
            e6c = e6c || bc7V;
            var D7w = e6c[this.yZ6T],
            ju1x = {
                id: D7w,
                ext: e6c.ext,
                data: e6c.data || {},
                key: "" + e6c.key || ""
            };
            p6j = this.eS9J(D7w);
            ju1x.data[this.yZ6T] = D7w;
            if ( !! p6j && this.bXz6t(p6j, ju1x.key)) {
                this.z7s("onitemload", ju1x);
                return this
            }
            var oJ2x = Jv9m(ju1x);
            if (!this.bnE7x(oJ2x, this.z7s.f6b(this))) {
                ju1x.rkey = oJ2x;
                ju1x.onload = this.cCn3x.f6b(this, ju1x);
                this.z7s("doloaditem", ju1x)
            }
            return this
        }
    } ();
    b6f.cCn3x = function(e6c, p6j) {
        e6c = e6c || bc7V;
        this.Cz7s(p6j, e6c.key);
        this.bnD7w(e6c.rkey, "onitemload", e6c)
    };
    b6f.jG1x = function(e6c) {
        e6c = NEJ.X({},
        e6c);
        e6c.onload = this.AQ7J.f6b(this, e6c);
        this.z7s("doadditem", e6c)
    };
    b6f.AQ7J = function(e6c, p6j) {
        var L7E = e6c.key;
        p6j = this.Cz7s(p6j, L7E);
        if ( !! p6j) {
            var fn9e = 0,
            j6d = this.hL0x(L7E);
            if (!e6c.push) {
                fn9e = -1;
                var bj7c = e6c.offset || 0;
                j6d.splice(bj7c, 0, p6j)
            } else if (j6d.loaded) {
                fn9e = 1;
                j6d.push(p6j)
            } else {
                j6d.length++
            }
        }
        var d6d = {
            key: L7E,
            flag: fn9e,
            data: p6j,
            action: "add",
            ext: e6c.ext
        };
        this.z7s("onitemadd", d6d);
        return d6d
    };
    b6f.Oz0x = function(e6c) {
        e6c = NEJ.X({},
        e6c);
        e6c.onload = this.bqO8G.f6b(this, e6c);
        this.z7s("dodeleteitem", e6c)
    };
    b6f.bqO8G = function(e6c, bXu6o) {
        var p6j, L7E = e6c.key;
        if ( !! bXu6o) {
            p6j = this.eS9J(e6c.id) || null;
            var D7w = e6c.id,
            cCf3x = this.yZ6T,
            j6d = this.hL0x(L7E),
            r6l = k6e.do8g(j6d,
            function(gK9B) {
                return !! gK9B && gK9B[cCf3x] == D7w
            });
            if (r6l >= 0) j6d.splice(r6l, 1)
        }
        var d6d = {
            key: L7E,
            data: p6j,
            action: "delete",
            ext: e6c.ext
        };
        this.z7s("onitemdelete", d6d);
        return d6d
    };
    b6f.ZE3x = function(e6c) {
        e6c = NEJ.X({},
        e6c);
        e6c.onload = this.cBG3x.f6b(this, e6c);
        this.z7s("doupdateitem", e6c)
    };
    b6f.cBG3x = function(e6c, p6j) {
        var L7E = e6c.key;
        if ( !! p6j) p6j = this.Cz7s(p6j, L7E);
        var d6d = {
            key: L7E,
            data: p6j,
            action: "update",
            ext: e6c.ext
        };
        this.z7s("onitemupdate", d6d);
        return d6d
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ut"),
    b6f;
    if ( !! P7I.bre8W) return;
    P7I.bre8W = NEJ.C();
    b6f = P7I.bre8W.M7F(P7I.VT2x);
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.byQ0x({
            doloadlist: this.ZB3x.f6b(this),
            doloaditem: this.brj8b.f6b(this),
            doadditem: this.bXk6e.f6b(this),
            dodeleteitem: this.ZA3x.f6b(this),
            doupdateitem: this.Zx3x.f6b(this),
            dopullrefresh: this.bXi6c.f6b(this)
        })
    };
    b6f.ZB3x = bu7n;
    b6f.bXi6c = bu7n;
    b6f.brj8b = bu7n;
    b6f.bXk6e = bu7n;
    b6f.ZA3x = bu7n;
    b6f.Zx3x = bu7n
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    v7o = c6e("nej.j"),
    H7A = c6e("nej.ut"),
    l6f = c6e("nm.x"),
    q6k = c6e("nm.d"),
    b6f,
    K7D;
    q6k.hO0x = NEJ.C();
    b6f = q6k.hO0x.M7F(H7A.bre8W);
    b6f.co8g = function() {
        var zc6W = location.protocol + "//" + location.host;
        var cBA3x = function(bw7p, i6c) {
            var bB7u = {
                conf: {},
                data: {},
                urls: []
            };
            k6e.be7X(bw7p,
            function(L7E, r6l, j6d) {
                var bk7d = q6k.A7t(L7E);
                if (!bk7d) return;
                var bsd8V = bXb6V(bk7d.url, i6c[L7E]);
                bB7u.urls.push(bsd8V);
                bB7u.conf[bsd8V] = bk7d;
                bB7u.data[bsd8V] = JSON.stringify(i6c[L7E] == null ? "": i6c[L7E])
            });
            return bB7u
        };
        var bXb6V = function(Z7S, i6c) {
            return Z7S.replace(/\{(.*?)\}/gi,
            function($1, $2) {
                return i6c[$2] || $1
            })
        };
        var bWZ6T = function(bk7d, e6c, d6d) {
            h6b.z7s(window, "requesterror", d6d);
            if ( !! d6d.stopped) return;
            var DV7O = bk7d.onerror || e6c.onerror;
            if (k6e.fO9F(DV7O)) {
                this.z7s(DV7O, d6d, e6c)
            } else { (DV7O || bu7n).call(this, d6d, e6c)
            }
            var d6d = {
                result: d6d,
                option: e6c
            };
            this.z7s("onerror", d6d);
            if (!d6d.stopped)(bk7d.onmessage || bu7n).call(this, d6d.result.code, d6d.result)
        };
        var bWY6S = function(Q7J, bk7d, e6c) {
            var m6g = Q7J;
            if (k6e.gZ9Q(bk7d.format)) {
                m6g = bk7d.format.call(this, Q7J, e6c)
            }
            return m6g
        };
        var zM6G = function(Q7J, bk7d, e6c, xm5r) {
            if (k6e.gZ9Q(bk7d.beforeload)) {
                bk7d.beforeload.call(this, Q7J, e6c, bk7d)
            }
            if (Q7J && Q7J.code != null && Q7J.code != 200) {
                bWZ6T.call(this, bk7d, e6c, {
                    key: e6c.key,
                    code: Q7J.code,
                    message: Q7J.message || "",
                    captchaId: Q7J.captchaId,
                    ext: Q7J
                });
                return
            }
            var m6g = Q7J;
            if (!xm5r) {
                m6g = bWY6S.call(this, Q7J, bk7d, e6c)
            } else if (k6e.gZ9Q(bk7d.format)) {
                var bsy8q = [];
                k6e.be7X(xm5r.urls,
                function(Z7S) {
                    bsy8q.push(bWY6S.call(this, Q7J[Z7S], xm5r.conf[Z7S], e6c))
                },
                this);
                bsy8q.push(e6c);
                m6g = bk7d.format.apply(this, bsy8q)
            }
            var oO2x = bk7d.onload || e6c.onload,
            bWV6P = bk7d.finaly || e6c.finaly || bu7n;
            if (k6e.fO9F(oO2x)) {
                bWV6P.call(this, this.z7s(oO2x, m6g), e6c)
            } else {
                bWV6P.call(this, (oO2x || bu7n).call(this, m6g), e6c)
            }
        };
        var CR7K = function(bk7d, e6c, bZ7S) {
            bWZ6T.call(this, bk7d, e6c, {
                key: e6c.key,
                code: bZ7S.code || -1,
                message: bZ7S.message || ""
            })
        };
        return function(bk7d, e6c) {
            if (k6e.fO9F(bk7d)) {
                bk7d = q6k.A7t(bk7d)
            }
            delete e6c.value; (bk7d.filter || bu7n).call(this, e6c, bk7d);
            var Q7J = e6c.value;
            if ( !! Q7J) {
                zM6G.call(this, Q7J, bk7d, e6c);
                return
            }
            var Z7S, i6c = e6c.data || bc7V,
            AU7N = {
                cookie: !0,
                type: bk7d.rtype || "json",
                method: bk7d.type || "POST",
                onerror: CR7K.f6b(this, bk7d, e6c),
                noescape: bk7d.noescape
            };
            if (k6e.eh8Z(bk7d.url)) {
                var xm5r = cBA3x(bk7d.url, i6c);
                Z7S = zc6W + "/api/batch";
                AU7N.data = k6e.cD8v(xm5r.data);
                AU7N.onload = zM6G.ey9p(this, bk7d, e6c, xm5r);
                AU7N.headers = {
                    "batch-method": "POST"
                };
                delete xm5r.data
            } else {
                var kG1x = bk7d.url.indexOf(":") < 0 ? zc6W: "";
                Z7S = bXb6V(kG1x + bk7d.url, i6c);
                AU7N.data = k6e.cD8v(e6c.data);
                AU7N.onload = zM6G.ey9p(this, bk7d, e6c)
            }
            if (AU7N.method == "GET") AU7N.query = AU7N.data;
            return v7o.bl7e(Z7S, AU7N)
        }
    } ();
    b6f.Gn8f = function() {
        var gS9J = /^get|list|pull$/i;
        return function(bWU6O, e6c) {
            var L7E = e6c.key,
            bk7d = q6k.A7t(L7E.split("-")[0] + "-" + bWU6O);
            if (gS9J.test(bWU6O) && L7E.indexOf("post-") < 0) bk7d.type = "GET";
            this.co8g(bk7d, e6c)
        }
    } ();
    b6f.cKP5U = function(L7E, j6d) {
        var cF8x = j6d.length;
        this.bpg7Z({
            key: L7E,
            offset: 0,
            limit: cF8x + 1
        },
        {
            list: j6d,
            total: cF8x
        })
    };
    b6f.ZB3x = function(e6c) {
        this.Gn8f("list", e6c)
    };
    b6f.brj8b = function(e6c) {
        this.Gn8f("get", e6c)
    };
    b6f.bXi6c = function(e6c) {
        this.Gn8f("pull", e6c)
    };
    b6f.bXk6e = function(e6c) {
        this.Gn8f("add", e6c)
    };
    b6f.ZA3x = function(e6c) {
        this.Gn8f("del", e6c)
    };
    b6f.Zx3x = function(e6c) {
        this.Gn8f("update", e6c)
    };
    b6f.cAY3x = function(p6j) {
        this.Cz7s(p6j)
    };
    H7A.fQ9H.B7u({
        element: window,
        event: "requesterror"
    })
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    h6b = c6e("nej.v"),
    H7A = c6e("nej.ut"),
    q6k = c6e("nm.d"),
    btA9r = {},
    b6f,
    K7D;
    var wp5u = function(m6g, e6c) {
        m6g.conf = e6c.conf;
        return m6g
    };
    q6k.ft9k({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(Q7J, e6c) {
                return wp5u({
                    mv: Q7J
                },
                e6c)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(m6g, e6c) {
                if ( !! m6g.songs && m6g.songs.length > 0) m6g.song = m6g.songs[0];
                else m6g.song = btA9r;
                delete m6g.songs;
                return wp5u(m6g, e6c)
            },
            filter: function(e6c) {
                e6c.data.ids = "[" + e6c.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: wp5u
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: wp5u
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(m6g, e6c) {
                m6g.playlist = m6g.result;
                delete m6g.result;
                return wp5u(m6g, e6c)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: wp5u
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: wp5u
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: wp5u
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e6c) {
                var j6d = e6c.data.id.split("-");
                e6c.data.radioId = j6d[0];
                e6c.data.asc = j6d[1] == 2;
                e6c.data.limit = 1e3;
                delete e6c.data.id
            },
            format: function(Q7J, e6c) {
                var cAV3x = {
                    id: e6c.data.radioId,
                    programs: Q7J.programs
                };
                return wp5u({
                    djradio: cAV3x
                },
                e6c)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: wp5u
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e6c) {
                e6c.data.lv = 0;
                e6c.data.tv = 0
            },
            format: function(m6g, e6c) {
                var yA6u = {
                    lyric: "",
                    nolyric: true
                };
                if (m6g.code == 200 && m6g.lrc && m6g.lrc.lyric) {
                    yA6u.lyric = m6g.lrc.lyric;
                    yA6u.nolyric = false
                } else {
                    yA6u.nolyric = true
                }
                return wp5u({
                    lyric: yA6u
                },
                e6c)
            }
        }
    });
    q6k.yw6q = NEJ.C();
    b6f = q6k.yw6q.M7F(q6k.hO0x);
    b6f.cAS3x = function(u7n, cY8Q) {
        return this.tr3x(this.Zm3x(u7n, cY8Q))
    };
    b6f.WP2x = function(u7n, cY8Q, e6c) {
        e6c = e6c || {};
        var i6c = this.tr3x(this.Zm3x(u7n, cY8Q));
        if (i6c && (u7n != 13 && u7n != 19 || e6c.conf && e6c.conf.useCache)) {
            this.z7s("onresourceload", u7n, cY8Q, i6c, e6c.conf);
            return
        }
        e6c.data = {
            id: cY8Q
        };
        e6c.onload = this.cAR2x.f6b(this, u7n, cY8Q);
        e6c.onerror = this.cAI2x.f6b(this, u7n, cY8Q);
        this.co8g("res-" + this.EA7t(u7n) + "-get", e6c)
    };
    b6f.cAR2x = function(u7n, cY8Q, m6g) {
        var i6c = m6g[this.EA7t(u7n)];
        this.qt3x(this.Zm3x(u7n, cY8Q), i6c);
        this.z7s("onresourceload", u7n, cY8Q, i6c, m6g.conf)
    };
    b6f.cAI2x = function(u7n, cY8Q, m6g, e6c) {
        if (m6g.code != 404) {
            this.z7s("onresourceerror", u7n, cY8Q, m6g.code);
            return
        }
        this.qt3x(this.Zm3x(u7n, cY8Q), btA9r);
        this.z7s("onresourceload", u7n, cY8Q, btA9r, e6c.conf)
    };
    b6f.cKR5W = function(u7n, e6c) {
        this.co8g("res-" + this.EA7t(u7n) + "-play", e6c)
    };
    b6f.Zm3x = function(u7n, cY8Q) {
        return "res-" + this.EA7t(u7n) + "-" + cY8Q
    };
    b6f.EA7t = function(u7n) {
        var bB7u = {
            2 : "hotSongs",
            13 : "playlist",
            17 : "program",
            18 : "song",
            19 : "album",
            21 : "mv",
            41 : "lyric",
            70 : "djradio"
        };
        return bB7u[u7n]
    };
    q6k.yw6q.OE0x = function(u7n, cY8Q) {
        if (!this.fs9j) this.fs9j = q6k.yw6q.B7u({});
        return this.fs9j.cAS3x(u7n, cY8Q)
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    buR9I = /^[1-9][0-9]*$/,
    b6f,
    K7D;
    var LOCAL_LOG_KEY = "local-log";
    q6k.ft9k({
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
    q6k.hW0x = NEJ.C();
    b6f = q6k.hW0x.M7F(q6k.hO0x);
    b6f.eZ9Q = function(W7P, bk7d) {
        if (!W7P || !bk7d) return;
        if (k6e.fO9F(bk7d)) {
            try {
                bk7d = JSON.parse(bk7d)
            } catch(_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a6g)
                }
            }
        }
        if (!k6e.mn2x(bk7d)) return;
        this.co8g("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: W7P,
                    json: bk7d
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + W7P + ", json=" + JSON.stringify(bk7d))
        }
    };
    b6f.Zj3x = function(oY2x) {
        if (!k6e.eh8Z(oY2x)) return;
        this.co8g("bi-batch-log", {
            data: {
                logs: JSON.stringify(oY2x)
            }
        })
    };
    b6f.bWL6F = function(bk7d) {
        if (!bk7d || !bk7d.type || !bk7d.rid) return;
        var pb2x = bk7d.type;
        if (buR9I.test(pb2x)) {
            pb2x = this.EA7t(pb2x)
        }
        if (!pb2x) return;
        if (pb2x == "playlist") pb2x = "list";
        this.eZ9Q("search", {
            type: pb2x,
            id: bk7d.rid || null,
            keyword: bk7d.keyword || null
        })
    };
    b6f.WV2x = function() {
        var cAu2x = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bk7d) {
            if (!bk7d || !bk7d.type || !bk7d.rid) return;
            if (bk7d.play === undefined) bk7d.play = true;
            var pb2x = bk7d.type;
            if (buR9I.test(pb2x)) {
                pb2x = this.EA7t(pb2x)
            }
            if (!pb2x) return;
            if (pb2x == "playlist") pb2x = "list";
            var Q7J = {
                id: bk7d.rid,
                type: pb2x
            };
            if (pb2x == "song" && bk7d.source) {
                Q7J.source = this.bWK6E(bk7d.source);
                if ( !! bk7d.sourceid) Q7J.sourceid = bk7d.sourceid
            }
            this.eZ9Q(!bk7d.play ? "addto": "play", Q7J);
            if (pb2x == "song" && bk7d.hash && bk7d.hash.match(cAu2x)) {
                this.eZ9Q(!bk7d.play ? "addto": "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    } ();
    b6f.bvz9q = function(D7w, bA7t, el8d, Hj8b) {
        var Q7J = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cAn2x = {
            1 : "ui",
            2 : "playend",
            3 : "interrupt",
            4 : "exception"
        };
        Q7J.id = D7w;
        Q7J.time = Math.round(bA7t);
        Q7J.end = k6e.fO9F(Hj8b) ? Hj8b: cAn2x[Hj8b] || "";
        if (el8d && el8d.fid) {
            Q7J.source = this.bWK6E(el8d.fid);
            Q7J.sourceId = el8d.fdata
        }
        this.eZ9Q("play", Q7J)
    };
    b6f.bWI6C = function(u7n, cY8Q) {
        if (!u7n || !cY8Q) return;
        if (buR9I.test(u7n)) u7n = this.EA7t(u7n);
        if (u7n != "playlist" && u7n != "dj") return;
        var bk7d = q6k.A7t("plus-" + u7n + "-count");
        if (!bk7d) return ! 1;
        this.co8g(bk7d, {
            data: {
                id: cY8Q
            }
        });
        var S7L = this.mf2x("play-hist-" + u7n, []);
        if (k6e.do8g(S7L, cY8Q) < 0) {
            S7L.push(cY8Q);
            return ! 0
        }
        return ! 1
    };
    b6f.EA7t = function(u7n) {
        var bB7u = {
            1 : "user",
            2 : "artist",
            13 : "playlist",
            17 : "dj",
            18 : "song",
            19 : "album",
            21 : "mv",
            31 : "toplist"
        };
        return bB7u[u7n]
    };
    b6f.bWK6E = function(OL0x) {
        var bB7u = {
            1 : "user",
            2 : "artist",
            13 : "list",
            17 : "dj",
            18 : "song",
            19 : "album",
            21 : "mv",
            31 : "toplist",
            32 : "search",
            33 : "search",
            34 : "event",
            35 : "msg"
        };
        return bB7u[OL0x]
    };
    b6f.bWF6z = function(hA0x) {
        var oY2x = this.Ie8W(LOCAL_LOG_KEY, []);
        oY2x.unshift(hA0x);
        if (oY2x.length > 200) {
            oY2x.length = 200
        }
        this.yf5k(LOCAL_LOG_KEY, oY2x)
    };
    b6f.cAh2x = function() {
        return this.VN2x(LOCAL_LOG_KEY)
    };
    b6f.ew9n = function(Q7J) {
        this.eZ9Q("play", Q7J)
    };
    var bWC6w = q6k.hW0x.fP9G();
    l6f.sX3x = function() {
        bWC6w.eZ9Q.apply(bWC6w, arguments)
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    h6b = c6e("nej.v"),
    v7o = c6e("nej.j"),
    H7A = c6e("nej.ut"),
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    n6h = c6e("nm.l"),
    l6f = c6e("nm.x"),
    q6k = c6e("nm.d");
    var FullscreenApi = l6f.GG8y || {};
    if (!q6k.yw6q) return;
    var S7L = q6k.yw6q.B7u({
        onresourceload: cAc2x
    });
    var wN5S = q6k.hW0x.fP9G();
    function cAc2x(u7n, cY8Q, i6c, bk7d) {
        var j6d = [];
        switch (parseInt(u7n)) {
        case 2:
            j6d = i6c;
            break;
        case 13:
            j6d = i6c.tracks;
            break;
        case 18:
            j6d.push(i6c);
            break;
        case 19:
            j6d = i6c.songs;
            break;
        case 21:
            if (i6c.mp && i6c.mp.fee && i6c.mp.pl <= 0) {
                l6f.Zd3x(i6c.data.id, i6c.mp.fee);
                return
            }
            break
        }
        if (l6f.ON0x(j6d, true, null, u7n == 19 ? {
            source: "album",
            sourceid: cY8Q
        }: null) == 0) {
            return
        }
        l6f.eU9L({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bk7d.message
        })
    }
    function cAb2x(d6d, oQ2x, Ba7T, dY8Q) {
        dY8Q = dY8Q || {};
        if (d6d.action == "ok") {
            if (Ba7T) {
                location.dispatch2("/payfee?songId=" + Ba7T)
            } else {
                location.dispatch2("/payfee?fee=" + oQ2x || 1)
            }
            wN5S.eZ9Q("click", {
                type: "tobuyvip",
                name: "box",
                source: dY8Q.source || "song",
                sourceid: dY8Q.sourceid || Ba7T || 0
            })
        } else if (d6d.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + Ba7T);
            wN5S.eZ9Q("click", {
                type: "tobuyone",
                name: "box",
                source: dY8Q.source || "song",
                sourceid: dY8Q.sourceid || Ba7T || 0
            })
        }
    }
    function Xn2x(bF7y) {
        l6f.eU9L({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bF7y,
            btntxt: "知道了"
        })
    }
    function Xv2x(bF7y, Q7J) {
        Xn2x((Q7J || bc7V).toast || bF7y)
    }
    l6f.iU1x = function(bF7y, D7w, u7n, cAa2x, bm7f) {
        bF7y = bF7y || "由于版权保护，您所在的地区暂时无法使用。";
        if (cAa2x && bm7f && bm7f.privilege && bm7f.privilege.toast) {
            v7o.bl7e("/api/song/toast", {
                query: {
                    id: bm7f.id
                },
                type: "json",
                onload: Xv2x.f6b(this, bF7y),
                onerror: Xv2x.f6b(this, bF7y)
            })
        } else if (D7w && u7n) {
            S7L.WP2x(u7n, D7w, {
                conf: {
                    message: bF7y,
                    useCache: u7n != 18
                }
            })
        } else {
            Xn2x(bF7y)
        }
    };
    l6f.wS5X = function(oQ2x, Ba7T, u7n, dY8Q, oh2x) {
        var bT7M, pI2x = "m-popup-info",
        byh0x = "单首购买",
        byi0x = "马上去开通",
        cQ8I = "唱片公司要求，当前歌曲须付费使用。",
        bWB6v = true;
        try {
            bT7M = top.api.feeMessage || {}
        } catch(e) {
            bT7M = {}
        }
        if (oQ2x == 1 || oQ2x == 8 || oQ2x == 16) {
            if (u7n == "song") {
                pI2x = "m-popup-song-buy";
                cQ8I = bT7M["vip2"] || cQ8I;
                byi0x = bT7M["vip2button"] || "包月购买";
                byh0x = bT7M["vip2link"] || byh0x;
                if (oh2x && oh2x.flag !== undefined) {
                    var bw7p = oh2x.flag.toString(2).split("");
                    if (parseInt(bw7p.pop(), 10) == 1) {
                        bWB6v = false
                    }
                }
            } else {
                cQ8I = bT7M["vip"] || cQ8I
            }
        } else if (oQ2x == 4) {
            cQ8I = bT7M["album"] || cQ8I;
            byi0x = "立即订购"
        } else {
            cQ8I = bT7M["unknow"] || cQ8I
        }
        l6f.ku1x({
            clazz: "m-layer-w5",
            html: a6g.ce7X(pI2x, {
                songTxt: byh0x,
                tip: cQ8I,
                oktext: byi0x,
                cctext: "以后再说",
                showSongText: bWB6v
            }),
            onaction: cAb2x.ey9p(null, oQ2x, Ba7T, dY8Q)
        })
    };
    l6f.bWA6u = function(hN0x, gy9p) {
        l6f.hG0x({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(u7n) {
                if (u7n == "ok") {
                    l6f.Oi0x({
                        id: hN0x,
                        type: gy9p
                    })
                }
            }
        })
    };
    l6f.Zd3x = function(kL1x, oQ2x) {
        var bT7M, cQ8I = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bT7M = top.api.feeMessage || {}
        } catch(e) {
            bT7M = {}
        }
        if (oQ2x == 1 || oQ2x == 8) {
            cQ8I = bT7M["vip"] || cQ8I
        } else if (oQ2x == 4) {
            cQ8I = bT7M["album"] || cQ8I
        } else {
            cQ8I = bT7M["unknow"] || cQ8I
        }
        return l6f.ku1x({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a6g.ce7X("m-popup-info", {
                tip: cQ8I,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function(d6d) {
                if (d6d.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + kL1x);
                    wN5S.eZ9Q("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: kL1x || 0
                    })
                }
            }
        })
    };
    l6f.ON0x = function() {
        function compareFee(czQ2x, czP2x) {
            var bB7u = {
                1 : 99,
                8 : 99,
                4 : 88,
                16 : 99
            };
            return (bB7u[czQ2x] || 0) - (bB7u[czP2x] || 0)
        }
        return function(j6d, cQ8I, sS3x, dY8Q) {
            sS3x = sS3x || {};
            var Ar6l = [],
            Pf0x = {},
            bWz6t = 0,
            bWy6s = 0,
            Pj0x = null;
            if (!j6d || !j6d.length) return Ar6l;
            k6e.be7X(j6d,
            function(bm7f) {
                var fJ9A = l6f.qF3x(bm7f);
                if (fJ9A == 0) {
                    Ar6l.push(bm7f)
                } else if (fJ9A == 10) {
                    if (bm7f.privilege) {
                        bm7f.fee = bm7f.privilege.fee
                    }
                    if (compareFee(bm7f.fee, Pf0x.fee) > 0) {
                        Pf0x = bm7f
                    }
                } else if (fJ9A == 11) {++bWz6t;
                    if (!sS3x.play) Ar6l.push(bm7f)
                } else if (fJ9A == 1e3) {++bWy6s;
                    if (!sS3x.download) Ar6l.push(bm7f)
                } else if (fJ9A == 100) {
                    Pj0x = bm7f
                }
            });
            if (Ar6l.length == 0 && cQ8I) {
                if (bWz6t == j6d.length) {
                    var uo4s = j6d[0].privilege || {};
                    if (uo4s.payed) {
                        l6f.iU1x("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l6f.wS5X(uo4s.fee, null, null, dY8Q)
                    }
                } else if (bWy6s == j6d.length) {
                    l6f.iU1x("因版权方要求，该歌曲不支持下载")
                } else if (Pf0x.id) {
                    l6f.wS5X(Pf0x.fee, Pf0x.id, null, dY8Q, Pf0x.privilege)
                } else {
                    if (Pj0x && j6d.length == 1 && Pj0x.privilege && Pj0x.privilege.st < 0 && Pj0x.privilege.toast) {
                        l6f.iU1x(null, null, null, true, Pj0x)
                    } else {
                        l6f.iU1x()
                    }
                }
            }
            return Ar6l
        }
    } ();
    l6f.qF3x = function(bm7f) {
        if (!bm7f) return 0;
        var fJ9A = bm7f.privilege;
        if (bm7f.program) return 0;
        if (window.GAbroad) return 100;
        if (fJ9A) {
            if (fJ9A.st != null && fJ9A.st < 0) {
                return 100
            }
            if (fJ9A.fee > 0 && fJ9A.fee != 8 && fJ9A.payed == 0 && fJ9A.pl <= 0) return 10;
            if (fJ9A.fee == 16) return 11;
            if ((fJ9A.fee == 0 || fJ9A.payed) && fJ9A.pl > 0 && fJ9A.dl == 0) return 1e3;
            if (fJ9A.pl == 0 && fJ9A.dl == 0) return 100;
            return 0
        } else {
            var dy8q = bm7f.status != null ? bm7f.status: bm7f.st != null ? bm7f.st: 0;
            if (bm7f.status >= 0) return 0;
            if (bm7f.fee > 0) return 10;
            return 100
        }
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    fL9C = NEJ.R,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    x7q = c6e("nm.w"),
    b6f;
    if ( !! x7q.byR0x) return;
    var cl8d = ~ [];
    cl8d = {
        kh1x: ++cl8d,
        bzi0x: (![] + "")[cl8d],
        cX8P: ++cl8d,
        mC2x: (![] + "")[cl8d],
        ye5j: (cl8d[cl8d] + "")[cl8d],
        un4r: ++cl8d,
        bdv4z: ({} + "")[cl8d],
        bzB0x: (cl8d[cl8d] + "")[cl8d],
        ul4p: (![] + "")[cl8d],
        mr2x: ++cl8d,
        kW1x: (!"" + "")[cl8d],
        hb9S: ++cl8d,
        eu8m: ++cl8d,
        Pi0x: ({} + "")[cl8d],
        iR1x: ++cl8d,
        iz1x: ++cl8d,
        cKW5b: ++cl8d,
        cKX5c: ++cl8d
    };
    cl8d.Ph0x = (cl8d.Ph0x = cl8d + "")[cl8d.eu8m] + (cl8d.DP7I = cl8d.Ph0x[cl8d.cX8P]) + (cl8d.sK3x = (cl8d.Yu3x + "")[cl8d.cX8P]) + (cl8d.czJ2x = (!cl8d + "")[cl8d.mr2x]) + (cl8d.nL2x = cl8d.Ph0x[cl8d.iR1x]) + (cl8d.Yu3x = (!"" + "")[cl8d.cX8P]) + (cl8d.bWw6q = (!"" + "")[cl8d.un4r]) + cl8d.Ph0x[cl8d.eu8m] + cl8d.nL2x + cl8d.DP7I + cl8d.Yu3x;
    cl8d.sK3x = cl8d.Yu3x + (!"" + "")[cl8d.mr2x] + cl8d.nL2x + cl8d.bWw6q + cl8d.Yu3x + cl8d.sK3x;
    cl8d.tX4b = cl8d.kh1x[cl8d.Ph0x][cl8d.Ph0x];
    x7q.byR0x = cl8d
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    h6b = c6e("nej.v"),
    a6g = c6e("nej.e"),
    P7I = c6e("nej.ui"),
    b6f;
    if ( !! P7I.YF3x) return;
    var jv1x = a6g.ve5j(".#<uispace>{position:absolute;background:#fff;}");
    P7I.YF3x = NEJ.C();
    b6f = P7I.YF3x.M7F(P7I.SU1x);
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.bY7R([[document, "click", this.tT4X.f6b(this)]]);
        this.czG2x = !!e6c.nostop;
        this.bWt6n = {
            top: e6c.top,
            left: e6c.left
        }
    };
    b6f.bC7v = function() {
        delete this.Bf7Y;
        delete this.biD5I;
        delete this.rH3x;
        delete this.bWs6m;
        delete this.YJ3x;
        delete this.bWt6n;
        this.bH7A()
    };
    b6f.ch7a = function() {
        this.ms2x = jv1x
    };
    b6f.bW7P = function() {
        this.ci8a();
        this.DD7w = this.o6i;
        h6b.s6m(this.o6i, "click", this.czC2x.f6b(this))
    };
    b6f.tT4X = function(d6d) {
        if (d6d.button != 2) this.bt7m()
    };
    b6f.czC2x = function(d6d) {
        if (this.czG2x) return;
        h6b.us4w(d6d);
        var G7z = h6b.Y7R(d6d);
        if (G7z.tagName == "A") h6b.cr8j(d6d)
    };
    b6f.czA2x = function() {
        var dl8d = /\s+/i;
        return function(ou2x) {
            ou2x = (ou2x || "").trim().toLowerCase().split(dl8d);
            ou2x[0] = ou2x[0] || "bottom";
            ou2x[1] = ou2x[1] || "left";
            this.rH3x = ou2x
        }
    } ();
    b6f.czz2x = function(ou2x) {
        var m6g = {},
        nE2x = this.biD5I,
        cKY5d = a6g.pA2x(),
        cz8r = this.o6i.offsetWidth,
        ca7T = this.o6i.offsetHeight;
        switch (ou2x[0]) {
        case "top":
            m6g.top = nE2x.top - ca7T;
            m6g.left = ou2x[1] == "right" ? nE2x.left + nE2x.width - cz8r: nE2x.left;
            break;
        case "left":
            m6g.left = nE2x.left - cz8r;
            m6g.top = ou2x[1] == "bottom" ? nE2x.top + nE2x.height - ca7T: nE2x.top;
            break;
        case "right":
            m6g.left = nE2x.left + nE2x.width;
            m6g.top = ou2x[1] == "bottom" ? nE2x.top + nE2x.height - ca7T: nE2x.top;
            break;
        default:
            m6g.top = nE2x.top + nE2x.height;
            m6g.left = ou2x[1] == "right" ? nE2x.left + nE2x.width - cz8r: nE2x.left;
            break
        }
        return m6g
    };
    b6f.Np0x = function() {
        if (!this.bWs6m) {
            this.he9V(this.bWt6n);
            return
        }
        if ( !! this.YJ3x) {
            this.he9V(this.Bf7Y);
            return
        }
        if ( !! this.biD5I) this.he9V(this.czz2x(this.rH3x))
    };
    b6f.czx2x = function(G7z, du8m, d6d) {
        du8m = du8m || bc7V;
        var bWq6k = a6g.pA2x(),
        dg8Y = h6b.jV1x(d6d) + (du8m.left || 0),
        hT0x = h6b.mz2x(d6d) + (du8m.top || 0),
        cz8r = G7z.offsetWidth + (du8m.right || 0),
        ca7T = G7z.offsetHeight + (du8m.bottom || 0),
        Pd0x = bWq6k.scrollWidth,
        bjy5D = bWq6k.scrollHeight,
        bjz5E = dg8Y + cz8r,
        bjA5F = hT0x + ca7T;
        switch (this.rH3x[0]) {
        case "top":
            hT0x = bjA5F > bjy5D ? hT0x - ca7T: hT0x;
            if (this.rH3x[1] == "right") {
                dg8Y = dg8Y - cz8r < 0 ? 0 : dg8Y - cz8r
            } else {
                dg8Y = bjz5E > Pd0x ? Pd0x - cz8r: dg8Y
            }
            break;
        case "left":
            dg8Y = bjz5E > Pd0x ? Pd0x - cz8r: dg8Y;
            if (this.rH3x[1] == "top") {
                hT0x = bjA5F > bjy5D ? hT0x - ca7T: hT0x
            } else {
                hT0x = hT0x - ca7T < 0 ? hT0x: hT0x - ca7T
            }
            break;
        case "right":
            dg8Y = dg8Y - cz8r < 0 ? 0 : dg8Y - cz8r;
            if (this.rH3x[1] == "top") {
                hT0x = bjA5F > bjy5D ? hT0x - ca7T: hT0x
            } else {
                hT0x = hT0x - ca7T < 0 ? hT0x: hT0x - ca7T
            }
            break;
        default:
            hT0x = hT0x - ca7T < 0 ? hT0x: hT0x - ca7T;
            if (this.rH3x[1] == "left") {
                dg8Y = bjz5E > Pd0x ? Pd0x - cz8r: dg8Y
            } else {
                dg8Y = dg8Y - cz8r < 0 ? 0 : dg8Y - cz8r
            }
            break
        }
        return {
            top: hT0x,
            left: dg8Y
        }
    };
    b6f.bjB5G = function() {
        var czv2x = function(G7z, du8m) {
            G7z = a6g.A7t(G7z);
            if (!G7z) return;
            du8m = du8m || bc7V;
            var bj7c = a6g.ik0x(G7z);
            return {
                top: bj7c.y - (du8m.top || 0),
                left: bj7c.x - (du8m.left || 0),
                width: G7z.offsetWidth + (du8m.right || 0),
                height: G7z.offsetHeight + (du8m.bottom || 0)
            }
        };
        return function(e6c) {
            e6c = e6c || bc7V;
            this.YJ3x = e6c.event;
            this.czA2x(e6c.align);
            if ( !! this.YJ3x) this.Bf7Y = this.czx2x(e6c.target, e6c.delta, this.YJ3x);
            this.biD5I = czv2x(e6c.target, e6c.delta);
            this.bWs6m = !!e6c.fitable;
            this.J7C();
            return this
        }
    } ()
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ui"),
    b6f,
    K7D;
    if ( !! P7I.Ev7o) return;
    P7I.Ev7o = NEJ.C();
    b6f = P7I.Ev7o.M7F(P7I.bbN3x);
    K7D = P7I.Ev7o.cu8m;
    P7I.Ev7o.cKZ5e = function() {
        var czs2x = function(d6d, D7w, fZ9Q, kQ1x, Yc2x) {
            var cJ8B, L7E = D7w + "-i",
            S7L = fZ9Q.Bn7g,
            bWo6i = !!kQ1x.noclear,
            bWn6h = !!kQ1x.toggled;
            if (k6e.gZ9Q(kQ1x.onbeforeclick)) {
                var YL3x = kQ1x.noclear,
                czo2x = kQ1x.toggled;
                try {
                    kQ1x.onbeforeclick(kQ1x)
                } catch(e) {}
                bWo6i = !!kQ1x.noclear;
                bWn6h = !!kQ1x.toggled;
                kQ1x.toggled = czo2x;
                kQ1x.noclear = YL3x
            }
            var Jo9f = S7L[L7E];
            if (bWn6h && !!Jo9f) {
                Jo9f.bt7m();
                return
            }
            h6b.bg7Z(d6d);
            if (!bWo6i) {
                h6b.z7s(document, "click");
                cJ8B = fZ9Q.B7u(kQ1x)
            } else {
                cJ8B = fZ9Q.bZn7g(kQ1x, !0)
            }
            S7L[L7E] = cJ8B;
            cJ8B.zf6Z("onbeforerecycle",
            function() {
                delete S7L[L7E]
            });
            cJ8B.bjB5G(Yc2x)
        };
        return function(g6a, e6c) {
            g6a = a6g.A7t(g6a);
            if (!g6a) return this;
            if (!this.Bn7g) this.Bn7g = {};
            var D7w = a6g.mc2x(g6a);
            if ( !! this.Bn7g[D7w]) return this;
            e6c = NEJ.X({},
            e6c);
            var Yc2x = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            },
            e6c);
            Yc2x.target = D7w;
            e6c.destroyable = !0;
            if (!e6c.fixed) {
                Yc2x.fitable = !0;
                e6c.parent = document.body
            }
            this.Bn7g[D7w] = [D7w, e6c.event || "click", czs2x.ey9p(null, D7w, this, e6c, Yc2x)];
            h6b.s6m.apply(h6b, this.Bn7g[D7w]);
            return this
        }
    } ();
    P7I.Ev7o.cLa5f = function(g6a) {
        if (!this.Bn7g) return this;
        var D7w = a6g.mc2x(g6a),
        d6d = this.Bn7g[D7w];
        if (!d6d) return this;
        delete this.Bn7g[D7w];
        h6b.nu2x.apply(h6b, d6d);
        var cJ8B = this.Bn7g[D7w + "-i"];
        if ( !! cJ8B) cJ8B.bt7m();
        return this
    };
    b6f.bkf6Z = function() {
        return P7I.YF3x.B7u(this.cj8b)
    };
    b6f.Tn1x = function() {
        K7D.Tn1x.apply(this, arguments);
        this.cj8b.top = null;
        this.cj8b.left = null;
        this.cj8b.nostop = !1
    };
    b6f.bjB5G = function(e6c) {
        if ( !! this.ps2x) this.ps2x.bjB5G(e6c);
        return this
    }
})(); (function() {
    var c6e = NEJ.P,
    bd7W = c6e("nej.ui"),
    n6h = c6e("nm.l"),
    b6f,
    K7D;
    n6h.bkh6b = NEJ.C();
    b6f = n6h.bkh6b.M7F(bd7W.Ev7o);
    b6f.bo7h = function(e6c) {
        e6c.nohack = true;
        this.bq7j(e6c)
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    n6h = c6e("nm.l"),
    l6f = c6e("nm.x"),
    b6f,
    K7D;
    var FullscreenApi = l6f.GG8y || {};
    n6h.ba7T = NEJ.C();
    b6f = n6h.ba7T.M7F(n6h.bkh6b);
    K7D = n6h.ba7T.cu8m;
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.eH9y = e6c.type || 1
    };
    b6f.bW7P = function() {
        this.ci8a();
        this.o6i = a6g.oC2x(this.czl2x());
        var j6d = a6g.dj8b(this.o6i);
        this.sl3x = j6d[0];
        this.cO8G = j6d[1]
    };
    b6f.czl2x = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b6f.Np0x = function() {
        var C7v = {},
        cm8e = this.o6i.style,
        jU1x = a6g.pA2x(),
        ow2x = {
            left: jU1x.scrollLeft,
            top: jU1x.scrollTop
        },
        du8m = {
            left: jU1x.clientWidth - this.o6i.offsetWidth,
            top: jU1x.clientHeight - this.o6i.offsetHeight
        };
        C7v.top = Math.max(0, ow2x.top + du8m.top / 2);
        C7v.left = Math.max(0, ow2x.left + du8m.left / 2);
        this.ps2x.he9V(C7v)
    };
    b6f.J7C = function(e6c) {
        K7D.J7C.call(this);
        this.Np0x();
        this.eH9y == 1 ? a6g.fz9q(this.sl3x, "u-icn-32", "u-icn-31") : a6g.fz9q(this.sl3x, "u-icn-31", "u-icn-32");
        this.cO8G.innerHTML = e6c.tip || ""
    };
    window.g_showTipCard = n6h.ba7T.J7C = function() {
        var eo8g;
        return function(e6c) {
            clearTimeout(eo8g);
            if (e6c.parent === undefined) e6c.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e6c.autoclose === undefined) e6c.autoclose = true;
            e6c.clazz = "m-sysmsg"; !! this.fs9j && this.fs9j.V7O();
            this.fs9j = this.B7u(e6c);
            this.fs9j.J7C(e6c);
            if (e6c.autoclose) eo8g = setTimeout(this.bt7m.f6b(this), 2e3)
        }.f6b(n6h.ba7T)
    } ();
    n6h.ba7T.bt7m = function() { !! this.fs9j && this.fs9j.bt7m()
    }
})(); (function() {
    var c6e = NEJ.P,
    v7o = c6e("nej.j"),
    k6e = c6e("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v7o.bl7e = v7o.bl7e.eO9F(function(d6d) {
            e6c = d6d.args[1];
            e6c.query = e6c.query || {};
            if (k6e.fO9F(e6c.query)) e6c.query = k6e.hd9U(e6c.query);
            e6c.query.ref = "mail"
        })
    }
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    fL9C = NEJ.R,
    H7A = c6e("nej.ut"),
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    v7o = c6e("nej.j"),
    q6k = c6e("nm.d"),
    n6h = c6e("nm.l"),
    L7E = "playlist-tracks_",
    b6f;
    q6k.ft9k({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(Q7J, e6c) {
                this.czi2x(Q7J.playlist);
                return {
                    total: 0,
                    list: fL9C
                }
            },
            onerror: function() {
                this.z7s("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(Q7J, e6c) {
                var nX2x = Q7J.playlist;
                nX2x.creator = GUser;
                nX2x.isHost = !0;
                nX2x.typeFlag = "playlist";
                return nX2x
            },
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.ix1x, "listchange", d6d)
            },
            onmessage: function() {
                var mN2x = {
                    507 : "歌单数量超过上限！",
                    405 : "你操作太快了，请休息一会再试！",
                    406 : "你操作太快了，请休息一会再试！"
                };
                return function(cg7Z) {
                    n6h.ba7T.J7C({
                        tip: mN2x[cg7Z] || "创建失败",
                        type: 2
                    })
                }
            } ()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e6c) {
                e6c.id = e6c.data.pid
            },
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.ix1x, "listchange", d6d)
            },
            onmessage: function() {
                var mN2x = {
                    404 : "歌单不存在！",
                    405 : "你操作太快了，请休息一会再试！",
                    406 : "你操作太快了，请休息一会再试！"
                };
                return function(cg7Z) {
                    n6h.ba7T.J7C({
                        tip: mN2x[cg7Z] || "删除失败",
                        type: 2
                    })
                }
            } ()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e6c) {
                var dY8Q = e6c.ext || {};
                e6c.ext = NEJ.X(dY8Q, e6c.data);
                e6c.data = {
                    id: e6c.ext.id
                }
            },
            format: function(Q7J, e6c) {
                n6h.ba7T.J7C({
                    tip: "收藏成功" + (Q7J.point > 0 ? ' 获得<em class="s-fc6">' + Q7J.point + "积分</em>": "")
                });
                var p6j = e6c.ext;
                p6j.subscribedCount++;
                return p6j
            },
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.czh2x, "listchange", d6d);
                h6b.z7s(q6k.czh2x, "itemchange", {
                    attr: "subscribedCount",
                    data: d6d.data
                })
            },
            onmessage: function() {
                var mN2x = {
                    404 : "歌单不存在！",
                    501 : "歌单已经收藏！",
                    506 : "歌单收藏数量超过上限！"
                };
                return function(cg7Z) {
                    n6h.ba7T.J7C({
                        type: 2,
                        tip: mN2x[cg7Z] || "收藏失败，请稍后再试！"
                    })
                }
            } ()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e6c) {
                e6c.id = e6c.data.id = e6c.data.pid
            },
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.ix1x, "listchange", d6d)
            },
            onmessage: function() {
                var mN2x = {
                    404 : "歌单不存在！",
                    405 : "你操作太快了，请休息一会再试！",
                    406 : "你操作太快了，请休息一会再试！"
                };
                return function(cg7Z) {
                    n6h.ba7T.J7C({
                        tip: mN2x[cg7Z],
                        type: 2
                    })
                }
            } ()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e6c) {
                var i6c = e6c.data,
                YO3x = {};
                YO3x["playlist-update-name"] = {
                    id: i6c.id,
                    name: i6c.name
                };
                YO3x["playlist-update-tag"] = {
                    id: i6c.id,
                    tags: i6c.tags.join(";")
                };
                YO3x["playlist-update-desc"] = {
                    id: i6c.id,
                    desc: i6c.description
                };
                e6c.data = YO3x;
                e6c.ext = i6c
            },
            format: function(X7Q, sm3x, XW2x, e6c) {
                if (X7Q.code == 200 && sm3x.code == 200 && XW2x.code == 200) {
                    e6c.ext.allSuccess = true;
                    n6h.ba7T.J7C({
                        tip: "保存成功"
                    })
                } else if (X7Q.code == 407 || sm3x.code == 407 || XW2x.code == 407) {
                    e6c.ext.allSuccess = false;
                    n6h.ba7T.J7C({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e6c.ext.allSuccess = false;
                    n6h.ba7T.J7C({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eS9J(e6c.ext.id)
            },
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.ix1x, "listchange", d6d)
            },
            onmessage: function(cg7Z) {
                n6h.ba7T.J7C({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(Q7J, e6c) {
                var p6j = this.eS9J(e6c.ext.id);
                if (Q7J.code == 200) p6j.name = e6c.ext.name;
                return Q7J
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(Q7J, e6c) {
                var p6j = this.eS9J(e6c.ext.id);
                if (Q7J.code == 200) p6j.tags = e6c.ext.tags;
                return Q7J
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(Q7J, e6c) {
                var p6j = this.eS9J(e6c.ext.id);
                if (Q7J.code == 200) p6j.description = e6c.ext.description;
                return Q7J
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e6c) {
                e6c.url = e6c.data.url;
                delete e6c.data.url
            },
            format: function(Q7J, e6c) {
                n6h.ba7T.J7C({
                    tip: "保存成功"
                });
                var p6j = this.eS9J(e6c.data.id);
                p6j.coverImgUrl = e6c.url;
                e6c.ext = p6j;
                return p6j
            },
            onmessage: function(cg7Z) {
                n6h.ba7T.J7C({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.ix1x, "itemchange", {
                    attr: "coverImgUrl",
                    data: e6c.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(Q7J, e6c) {
                var nX2x = this.eS9J(e6c.data.id);
                if (!nX2x) return;
                nX2x.playCount++;
                h6b.z7s(q6k.ix1x, "itemchange", {
                    attr: "playcount",
                    data: nX2x
                })
            }
        }
    });
    q6k.ix1x = NEJ.C();
    b6f = q6k.ix1x.M7F(q6k.hO0x);
    b6f.cA8s = function() {
        this.cG8y()
    };
    b6f.bWl6f = function() {
        var ds8k = GUser.userId;
        this.me2x({
            limit: 1001,
            key: "playlist_my-" + ds8k,
            data: {
                offset: 0,
                limit: 1001,
                uid: ds8k
            }
        })
    };
    b6f.czi2x = function(j6d) {
        var ds8k = GUser.userId,
        jt1x = [],
        bWk6e = [];
        k6e.be7X(j6d,
        function(p6j) {
            p6j.typeFlag = "playlist";
            if (p6j.creator && p6j.creator.userId == ds8k) {
                if (p6j.specialType == 5) p6j.name = "我喜欢的音乐";
                p6j.isHost = !0;
                jt1x.push(p6j)
            } else {
                bWk6e.push(p6j)
            }
        });
        this.tp3x("playlist_new-" + ds8k, jt1x);
        this.tp3x("playlist_fav-" + ds8k, bWk6e)
    };
    b6f.cyZ2x = function(i6c) {
        this.co8g("playlist-update-cover", {
            data: i6c
        })
    };
    b6f.cLc5h = function() {
        var XQ2x = this.cyX2x.A7t("host-plist");
        if (XQ2x.length == 0) {
            return
        }
        if (XQ2x.length == 1 && XQ2x[0].trackCount <= 0) {
            return
        }
        for (var i = 0,
        len = XQ2x.length; i < len; i++) {
            var p6j = XQ2x[i];
            if (p6j.trackCount > 0) return p6j.id
        }
        return this.cyX2x.A7t("host-plist")[0].id
    };
    b6f.cyW2x = function(D7w) {
        if (GUser && GUser.userId > 0) {
            this.co8g("playlist-upcount", {
                data: {
                    id: D7w
                }
            })
        }
    };
    b6f.Hd8V = function() {
        if (GUser && GUser.userId > 0) {
            return ! 0
        } else {
            top.login();
            return ! 1
        }
    };
    b6f.cLd5i = function() {
        return GUser.userId
    };
    b6f.He8W = function(p6j) {
        if (p6j.userId == GUser.userId && p6j.specialType == 5) p6j.name = "我喜欢的音乐";
        h6b.z7s(this.constructor, "itemchange", {
            data: this.Cz7s(p6j)
        });
        return p6j
    };
    H7A.fQ9H.B7u({
        element: q6k.ix1x,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})(); (function() {
    var c6e = NEJ.P,
    fL9C = NEJ.R,
    bu7n = NEJ.F,
    bc7V = NEJ.O,
    H7A = c6e("nej.ut"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    l6f = c6e("nm.x"),
    q6k = c6e("nm.d"),
    n6h = c6e("nm.l"),
    b6f,
    K7D;
    q6k.ft9k({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(Q7J) {
                return Q7J.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e6c) {
                e6c.data.limit = 1e3;
                delete e6c.data.id
            },
            format: function(Q7J, e6c) {
                var bWg6a = [],
                qO3x = Q7J.programs;
                if (qO3x) {
                    for (var i = 0,
                    l = qO3x.length; i < l; i++) {
                        if (qO3x[i].programFeeType < 10 || qO3x[i].buyed) {
                            bWg6a.push(qO3x[i])
                        }
                    }
                }
                return bWg6a
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(Q7J, e6c) {
                return Q7J.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e6c) {
                e6c.ext = e6c.data;
                e6c.data = {
                    id: e6c.ext.id
                };
                e6c.id = e6c.data.id
            },
            format: function(Q7J, e6c) {
                n6h.ba7T.J7C({
                    tip: "收藏成功"
                });
                var p6j = e6c.ext;
                p6j.subscribedCount++;
                p6j.subscribed = !0;
                return p6j
            },
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.so3x, "listchange", d6d)
            },
            onmessage: function() {
                var mN2x = {
                    404 : "节目不存在！",
                    501 : "节目已收藏！"
                };
                return function(cg7Z) {
                    n6h.ba7T.J7C({
                        type: 2,
                        tip: mN2x[cg7Z] || "收藏失败！"
                    })
                }
            } ()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.so3x, "listchange", d6d)
            },
            onmessage: function() {
                var mN2x = {
                    404 : "节目不存在！",
                    502 : "没有收藏此节目！"
                };
                return function(cg7Z) {
                    l6f.bme6Y({
                        txt: mN2x[cg7Z] || "取消收藏失败！"
                    })
                }
            } ()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e6c) {
                var p6j = this.eS9J(e6c.data.id) || bc7V;
                e6c.ext = (p6j.listenerCount || 0) + 1
            },
            format: function(Q7J, e6c) {
                var p6j = this.eS9J(e6c.data.id);
                if ( !! p6j) {
                    p6j.listenerCount = Math.max(e6c.ext, p6j.listenerCount || 0)
                }
            },
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.so3x, "itemchange", {
                    attr: "playCount",
                    data: this.eS9J(e6c.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e6c) {
                e6c.data = {
                    threadId: "A_DJ_1_" + e6c.id
                }
            },
            format: function(Q7J, e6c) {
                var p6j = e6c.ext.data || this.eS9J(e6c.id);
                p6j.liked = true;
                p6j.likedCount++;
                e6c.ext.data = p6j;
                try {
                    top.player.setLike(p6j)
                } catch(e) {}
                return p6j
            },
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.so3x, "itemchange", {
                    attr: "likedCount",
                    data: e6c.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e6c) {
                e6c.data = {
                    threadId: "A_DJ_1_" + e6c.id
                }
            },
            format: function(Q7J, e6c) {
                var p6j = e6c.ext.data || this.eS9J(e6c.id);
                p6j.liked = false;
                p6j.likedCount--;
                e6c.ext.data = p6j;
                try {
                    top.player.setLike(p6j)
                } catch(e) {}
                return p6j
            },
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.so3x, "itemchange", {
                    attr: "likedCount",
                    data: e6c.ext.data
                })
            }
        }
    });
    q6k.so3x = NEJ.C();
    b6f = q6k.so3x.M7F(q6k.hO0x);
    b6f.cLe5j = function() {
        var ds8k = GUser.userId;
        this.me2x({
            limit: 1001,
            key: "program_fav-" + ds8k,
            data: {
                offset: 0,
                limit: 1e3,
                uid: ds8k
            }
        })
    };
    b6f.cLf5k = function(dd8V) {
        var oy2x = dd8V[this.yZ6T];
        l6f.cyR2x(4,
        function(S7L) {
            S7L.tp3x("track_program-" + oy2x, dd8V.songs)
        });
        delete dd8V.songs;
        var bR7K = dd8V.mainSong;
        l6f.cyR2x(4,
        function(S7L) {
            S7L.tp3x("track_program_main-" + oy2x, !bR7K ? [] : [bR7K])
        });
        dd8V.mainSong = (bR7K || bc7V).id
    };
    b6f.cLg5l = function(D7w) {
        var dd8V = this.eS9J(D7w),
        ds8k = localCache.ZZ3x("host.profile.userId");
        return !! dd8V && dd8V.dj.userId == ds8k
    };
    b6f.cLh5m = function(D7w) {
        return ! 1
    };
    b6f.He8W = function(p6j) {
        h6b.z7s(this.constructor, "itemchange", {
            attr: "detail",
            data: this.Cz7s(p6j)
        });
        return p6j
    };
    b6f.cyW2x = function(D7w) {
        this.co8g("program-update-count", {
            data: {
                id: D7w
            }
        })
    };
    l6f.bWd6X = function(e6c) {
        var S7L = q6k.so3x.B7u({
            onitemadd: function() { (e6c.onsuccess || bu7n)()
            },
            onerror: function() { (e6c.onerror || bu7n)()
            }
        });
        if (e6c.data.liked) {
            S7L.xu5z(e6c.data)
        } else {
            S7L.qb3x(e6c.data)
        }
    };
    b6f.qb3x = function(dd8V) {
        if (!l6f.hh9Y()) return;
        var cy8q = {
            ext: {}
        };
        if (k6e.mn2x(dd8V)) {
            cy8q.id = dd8V.id;
            cy8q.ext.data = dd8V
        } else {
            cy8q.id = dd8V
        }
        this.co8g("program-like", cy8q)
    };
    b6f.xu5z = function(dd8V) {
        if (!l6f.hh9Y()) return;
        var cy8q = {
            ext: {}
        };
        if (k6e.mn2x(dd8V)) {
            cy8q.id = dd8V.id;
            cy8q.ext.data = dd8V
        } else {
            cy8q.id = dd8V
        }
        this.co8g("program-unlike", cy8q)
    };
    H7A.fQ9H.B7u({
        element: q6k.so3x,
        event: ["listchange", "itemchange"]
    })
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    fL9C = NEJ.R,
    H7A = c6e("nej.ut"),
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    v7o = c6e("nej.j"),
    q6k = c6e("nm.d"),
    n6h = c6e("nm.l"),
    l6f = c6e("nm.x"),
    L7E = "playlist-tracks_",
    l6f = c6e("nm.x"),
    b6f;
    q6k.ft9k({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e6c) {
                e6c.data.c = JSON.stringify([{
                    id: e6c.data.id
                }])
            },
            format: function(Q7J, e6c) {
                var bm7f = l6f.Bs7l(Q7J.songs[0]);
                bm7f.privilege = Q7J.privileges[0];
                return bm7f
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e6c) {
                e6c.data.n = 1e3
            },
            format: function(Q7J, e6c) {
                var hS0x = [];
                this.tP4T.He8W(Q7J.playlist);
                k6e.be7X(Q7J.playlist.tracks,
                function(bR7K, r6l) {
                    var bWc6W = l6f.Bs7l(bR7K);
                    bWc6W.privilege = Q7J.privileges[r6l];
                    hS0x.push(bWc6W)
                },
                this);
                return hS0x
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(Q7J, e6c) {
                var hS0x = [];
                k6e.be7X(Q7J.songs,
                function(bm7f) {
                    hS0x.push(l6f.Bs7l(bm7f))
                });
                return hS0x
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e6c) {
                var bB7u = {},
                i6c = e6c.data,
                cyL2x = this.hL0x(e6c.key) || [];
                HS8K = [];
                k6e.be7X(cyL2x,
                function(bR7K) {
                    var D7w = k6e.mn2x(bR7K) ? bR7K.id: bR7K;
                    bB7u[D7w] = true
                });
                e6c.ext = [];
                k6e.be7X(i6c.tracks,
                function(bR7K) {
                    var D7w = k6e.mn2x(bR7K) ? bR7K.id: bR7K;
                    if (!bB7u[D7w]) {
                        HS8K.push(D7w);
                        bB7u[D7w] = true;
                        e6c.ext.push(bR7K)
                    }
                });
                i6c.trackIds = JSON.stringify(HS8K);
                i6c.op = "add";
                if (!HS8K.length) {
                    e6c.value = {
                        code: 502
                    }
                }
            },
            format: function(Q7J, e6c) {
                n6h.ba7T.J7C({
                    tip: "已添加至歌单"
                });
                var nX2x = this.tP4T.eS9J(e6c.data.pid);
                if ( !! Q7J.coverImgUrl) nX2x.coverImgUrl = Q7J.coverImgUrl;
                k6e.oc2x(e6c.ext,
                function(bR7K) {
                    this.AQ7J(e6c, k6e.mn2x(bR7K) ? bR7K: null);
                    if ( !! nX2x) nX2x.trackCount++
                },
                this);
                h6b.z7s(q6k.ix1x, "itemchange", {
                    data: nX2x || {},
                    cmd: "add"
                });
                this.z7s("onaddsuccess");
                return null
            },
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.tK4O, "listchange", {
                    key: e6c.key,
                    action: "refresh"
                });
                var oy2x = e6c.data.pid,
                cF8x = this.lR1x(e6c.key)
            },
            onmessage: function() {
                var mN2x = {
                    502 : "歌曲已存在！",
                    505 : "歌单已满！"
                };
                return function(cg7Z) {
                    setTimeout(function() {
                        n6h.ba7T.J7C({
                            tip: mN2x[cg7Z] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    },
                    0)
                }
            } ()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e6c) {
                var i6c = e6c.data;
                e6c.ext = i6c.trackIds;
                i6c.trackIds = JSON.stringify(i6c.trackIds);
                i6c.op = "del"
            },
            format: function(Q7J, e6c) {
                var nX2x = this.tP4T.eS9J(e6c.data.pid);
                k6e.be7X(e6c.ext,
                function(D7w) {
                    this.bqO8G({
                        id: D7w,
                        key: "track_playlist-" + e6c.data.pid
                    },
                    !0);
                    if ( !! nX2x) nX2x.trackCount = Math.max(0, nX2x.trackCount - 1)
                },
                this);
                h6b.z7s(q6k.ix1x, "itemchange", {
                    data: nX2x || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(d6d, e6c) {
                h6b.z7s(q6k.tK4O, "listchange", {
                    key: e6c.key,
                    action: "refresh"
                })
            },
            onmessage: function(cg7Z) {
                l6f.bme6Y({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(Q7J, e6c) {
                return this.bWb6V.He8W(Q7J.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(Q7J, e6c) {
                var j6d = [];
                if (e6c.data.type == -1) {
                    if (Q7J.weekData && Q7J.weekData.length) {
                        e6c.data.type = 1
                    } else {
                        e6c.data.type = 0
                    }
                }
                if (e6c.data.type == 1) {
                    j6d = this.bWa6U(Q7J.weekData)
                } else {
                    j6d = this.bWa6U(Q7J.allData)
                }
                return j6d
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(Q7J, e6c) {
                var oY2x = [],
                j6d = Q7J.recommend || [];
                k6e.be7X(j6d,
                function(bm7f, r6l) {
                    oY2x.push({
                        action: "recommendimpress",
                        json: {
                            alg: bm7f.alg,
                            scene: "user-song",
                            position: r6l,
                            id: bm7f.id
                        }
                    })
                });
                this.lv1x.Zj3x(oY2x);
                e6c.limit = j6d.length;
                return j6d
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e6c) {
                e6c.data.lv = 0;
                e6c.data.tv = 0
            },
            format: function(m6g, e6c) {
                return m6g
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    q6k.tK4O = NEJ.C();
    b6f = q6k.tK4O.M7F(q6k.hO0x);
    b6f.cA8s = function() {
        this.cG8y();
        this.tP4T = q6k.ix1x.B7u();
        this.bWb6V = q6k.so3x.B7u();
        this.lv1x = q6k.hW0x.B7u()
    };
    b6f.bWa6U = function(j6d) {
        var m6g = [],
        fC9t = 0;
        k6e.be7X(j6d,
        function(p6j, r6l) {
            var bm7f = l6f.Bs7l(p6j.song);
            if (r6l == 0) {
                fC9t = p6j.score
            }
            bm7f.max = fC9t;
            bm7f.playCount = p6j.playCount;
            bm7f.score = p6j.score;
            m6g.push(bm7f)
        });
        return m6g
    };
    H7A.fQ9H.B7u({
        element: q6k.tK4O,
        event: ["listchange"]
    })
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    cx8p = c6e("nm.pc");
    var bnA7t = {
        playlist: "A_PL_0_",
        dj: "A_DJ_1_",
        program: "A_DJ_1_",
        album: "R_AL_3_",
        song: "R_SO_4_"
    };
    var pc2x = function(bT7M) {
        var zc6W = "orpheus://orpheus";
        window.top.postMessage(JSON.stringify(bT7M), zc6W)
    };
    var cyI2x = function(mF2x) {
        var lq1x = "http://" + location.host + "/",
        XN2x = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
        dV8N = XN2x.exec(mF2x);
        if (!dV8N) return cyH2x(mF2x);
        var gy9p = dV8N[2],
        hN0x = dV8N[3],
        ds8k = dV8N[4] || "",
        jA1x = "";
        switch (gy9p) {
        case "album":
            jA1x = "#/m/album/comment/?rid=" + bnA7t[gy9p] + hN0x + "&id=" + hN0x;
            break;
        case "playlist":
            jA1x = "#/m/playlist/comment/?rid=" + bnA7t[gy9p] + hN0x + "&id=" + hN0x;
            break;
        case "song":
        case "dj":
        case "program":
            jA1x = "#/m/song?rid=" + bnA7t[gy9p] + hN0x;
            break;
        case "event":
            jA1x = "#/m/friend/event/?id=" + hN0x + "&uid=" + ds8k;
            break;
        case "user/home":
            jA1x = "#/m/personal/?uid=" + hN0x;
            break;
        case "mv":
            jA1x = "#/m2/mv/?id=" + hN0x;
            break;
        case "activity":
            jA1x = "#/m/friend/activity?id=" + hN0x;
            break;
        case "video":
            jA1x = "#/m2/mv/?id=" + hN0x + "&type=1";
            break;
        default:
            jA1x = "#/m/" + gy9p + "/?id=" + hN0x
        }
        return lq1x + jA1x
    };
    var cyH2x = function(mF2x) {
        var cyG2x = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dV8N = cyG2x.exec(mF2x);
        if (dV8N) return "http://v.youku.com/v_show/id_" + dV8N[1];
        return mF2x
    };
    cx8p.ew9n = function(gy9p, hN0x) {
        pc2x({
            name: "play",
            args: {
                type: gy9p,
                id: hN0x
            }
        })
    };
    cx8p.fT9K = function() {
        pc2x({
            name: "pause"
        })
    };
    cx8p.Dr7k = function(mF2x) {
        pc2x({
            name: "open",
            args: {
                link: cyI2x(mF2x)
            }
        })
    };
    cx8p.lz1x = function(gy9p, hN0x, cI8A) {
        pc2x({
            name: "share",
            args: {
                type: gy9p,
                id: hN0x,
                shareContent: cI8A
            }
        })
    };
    cx8p.bVW6Q = function(gy9p, hN0x) {
        pc2x({
            name: "comment",
            args: {
                type: gy9p,
                id: hN0x
            }
        })
    };
    cx8p.cyz2x = function() {
        pc2x({
            name: "init"
        })
    };
    cx8p.Dy7r = function(ca7T) {
        pc2x({
            name: "setHeight",
            args: {
                height: ca7T
            }
        })
    };
    cx8p.ia0x = function(bF7y, U7N) {
        pc2x({
            name: "toast",
            args: {
                message: bF7y || "",
                state: U7N
            }
        })
    };
    cx8p.Ji9Z = function(mF2x) {
        pc2x({
            name: "login",
            args: {
                link: mF2x
            }
        })
    };
    cx8p.bVV6P = function(DE7x) {
        pc2x({
            name: "topbar",
            args: {
                show: !!DE7x
            }
        })
    };
    cx8p.cyv2x = function(bp7i) {
        pc2x({
            name: "refreshtopbar",
            args: {
                info: bp7i
            }
        })
    };
    cx8p.cyt2x = function(bw7p, r6l) {
        pc2x({
            name: "big",
            args: {
                arr: bw7p,
                index: r6l
            }
        })
    };
    cx8p.Oi0x = function(cB8t) {
        pc2x({
            name: "download",
            args: {
                img: cB8t
            }
        })
    };
    cx8p.bVS6M = function(cyp2x) {
        pc2x({
            name: "scrollable",
            args: {
                scrollable: cyp2x
            }
        })
    }
})(); (function() {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d,
                a = 0; a < g.length; a++) if (f.charAt(c) == g[a]) {
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
    g = (new J).d; (function() {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
        J = [g("YPU7UcUUUlYkU0VkUU")],
        b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
        c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
        Ja = [e("40UlUlUx4kUlYkUsU7")]; (function() {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465]; (function() {
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
                    if (null != h) for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
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
                    if (l == a[541]) l = h[c],
                    d = a[15],
                    e.push(f[l >>> a[16] & a[153]]),
                    e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                    e.push(g),
                    e.push(g);
                    else if (l == a[16]) l = h[c],
                    d = h[c + a[541]],
                    h = a[15],
                    e.push(f[l >>> a[16] & a[153]]),
                    e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                    e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                    e.push(g);
                    else if (l == a[19]) l = h[c],
                    d = h[c + a[541]],
                    h = h[c + a[16]],
                    e.push(f[l >>> a[16] & a[153]]),
                    e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                    e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                    e.push(f[h & a[153]]);
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
                    for (var c = [], l = h.length, d = a[15]; d < l; d++) if (h.charAt(d) == b[27]) if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
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
                        } catch(k) {}
                        return f.join(b[56])
                    }
                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a,
                            g.appendChild(k),
                            c.height = k.offsetHeight,
                            c.width = k.offsetWidth,
                            g[b[307]](k),
                            c
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
                        return function(c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return ! 0
                            }
                            return ! 1
                        }
                    }
                    function f() {
                        var a = null,
                        h = null,
                        d = [];
                        try {
                            h = C[b[167]](c[79]),
                            a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch(l) {}
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch(g) {}
                        try {
                            d.push(e(a, h))
                        } catch(k) {}
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
                            return h[c[63]](la, l),
                            h[b[341]](la),
                            h[b[177]](t, X),
                            h[b[177]](t, la),
                            h[c[45]](t),
                            h[b[309]](t),
                            t.n = h[c[92]](t, b[205]),
                            t.m = h[c[62]](t, c[29]),
                            h[c[74]](t.o),
                            h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]),
                            h[J[0]](t.m, a[541], a[541]),
                            h[b[139]](h[b[259]], a[15], g.l),
                            M(d[b[149]]())
                        } catch($a) {
                            return b[324]
                        }
                    }
                    function g() {
                        var h = C[b[167]](b[155]),
                        d = [],
                        f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h),
                            h.style.color = f[l],
                            d.push(f[l]),
                            d.push(window[c[154]](h).getPropertyValue(c[36])),
                            C[b[258]][b[307]](h)
                        } catch(e) {
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
                        } catch(l) {
                            return b[237]
                        }
                    }
                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch(a) {
                            return b[31]
                        }
                    }
                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                        d = [],
                        f = {};
                        d.push(p(y[b[4]],
                        function(h) {
                            f[h.name] = a[541];
                            var d = p(h,
                            function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        },
                        this).join(b[25]));
                        d.push(p(h,
                        function(a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a,
                            function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        },
                        this).join(b[56]));
                        return d.join(b[56])
                    }
                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]],
                        function(a) {
                            try {
                                return new window[b[355]](a),
                                a
                            } catch(h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }
                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a,
                        function(a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }
                    function E(b, h) {
                        if (null !== b) if (z && b.forEach === z) b.forEach(h, void 0);
                        else if (b.length === +b.length) for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else for (c in b) if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
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
                    typeof h == b[264] ? n.e = h: (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() {
                        var h = [],
                        l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch(X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch(z) {
                                p = !0
                            }
                            h.push(p);
                            h.push( !! window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch(r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()),
                                n.b && h.push(f())
                            } catch(E) {
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
                    d,
                    f,
                    e,
                    g,
                    k,
                    m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74],
                    ++m,
                    k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                    k = k << a[56] | k >>> a[60],
                    k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                    e ^= k,
                    e = e << a[50] | e >>> a[64],
                    e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405],
                    e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                    case a[19]:
                        k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                    case a[16]:
                        k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                    case a[541]:
                        k ^= h.charCodeAt(m) & a[299],
                        k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                        k = k << a[56] | k >>> a[60],
                        k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                        e ^= k
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
                            p = q || q === a[15] ? p + q: p + a[541];
                            E++
                        } catch(n) {
                            p += a[541],
                            E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch(A) {
                            u++,
                            H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch(y) {
                        d = [],
                        d.push(h),
                        d.push(U(N, b[35]).join(b[0])),
                        d.push(U(T, b[35]).join(b[0]))
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
                    if (r(a) || r(a.f) || r(a.c)) return ! 1;
                    try {
                        if (r(window[a.f])) return ! 1
                    } catch(b) {
                        return ! 1
                    }
                    return ! 0
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
                        if (!r(q)) for (h = a[15]; h < q.length; h++) {
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
                        } catch(f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch(k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch(C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch(F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch(E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch(I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch(A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch(G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch(D) {
                                                            w = !1
                                                        }
                                                        e = w ? null: v(q, b[171])
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
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null: v(q, b[311])
                    } catch(c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null: v(q, b[265])
                    } catch(d) {
                        a = null
                    }
                    return r(a) ? null: a.c
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
                        for (var e = e + b[142], f = a[15]; f < d.length; f++) if (h.hasOwnProperty(d[f])) {
                            var g = b[29] + d[f] + b[262],
                            k;
                            k = b[0] + h[d[f]];
                            k = null == k || void 0 == k ? k: k.replace(/'/g, c[96]).replace(/"/g, b[24]);
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
                    if (null == a || void 0 == a || a == b[0]) return ! 1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch(c) {
                        return ! 1
                    }
                }
                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null: parseInt(c[1])
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
                    if (! (null == K || void 0 == K || K.length <= a[15])) for (var c = a[15]; c < K.length; c++) {
                        var d = K[c]; (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
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
                    } catch(C) {
                        t[b[182]] = Fa(b[41], a[43]),
                        t[b[159]] = b[42],
                        h = !1
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
                            J = n % F <= F - ha ? F - n % F - ha: F * a[16] - n % F - ha,
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
                        for (var u = I.length,
                        L = a[15]; L < u; L++) {
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
                                for (var u = [], R = a[15]; R < G.length;) if (R + ya <= G.length) u.push(k(G, R, ya)),
                                R += ya;
                                else {
                                    u.push(k(G, R, G.length - R));
                                    break
                                }
                                ka = u.join(b[0])
                            } catch(ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch(ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }),
                        h = !1
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
                    toString: function() {
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
                d = function(b, c) {
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
                A = function(d, e) {
                    if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                    e = e.split(b[56]);
                    for (var f = a[15]; f < e.length; f++) {
                        var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                        if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                    }
                    return null
                } (O, A),
                pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                K = function(c) {
                    var d = [];
                    if (!c) return d;
                    c = c.split(b[38]);
                    for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                    return d
                } (O);
                K.push(null);
                K.push(b[38] + O); (function(d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia(); (function() {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1;
                    else {
                        var c;
                        if (c = Ua()) a = ga(a),
                        c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})(); (function() {})(); (function() {
    var bVQ6K;
    var xy5D = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cyb2x = 0;
    var bVI6C = 0;
    var bVH6B = 1;
    var bVC6w = 0;
    var bpk7d = "";
    var bVB6v = "";
    var bVz6t = "";
    var YS3x = "";
    var YT3x = "";
    var bpN8F = "";
    var bVv6p = 0;
    var bVu6o = "";
    var OV0x = "";
    var JT9K = 0;
    var bpV8N = ntes_get_domain();
    var bpW8O = null;
    var cLu5z = "//analytics.163.com";
    var cxf2x = function() {};
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
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bpV8N
    }
    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bpV8N
    }
    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bpV8N
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
        return - 1
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
                    } catch(e) {}
                }
            }
        }
        return f
    }
    var cxe2x = 0;
    var Xz2x = 8;
    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * Xz2x))
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
        var a = (1 << Xz2x) - 1;
        for (var b = 0; b < d.length * Xz2x; b += Xz2x) {
            c[b >> 5] |= (d.charCodeAt(b / Xz2x) & a) << b % 32
        }
        return c
    }
    function binl2hex(c) {
        var b = cxe2x ? "0123456789ABCDEF": "0123456789abcdef";
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
        YS3x = "-";
        bpN8F = "-";
        YT3x = "-";
        var c = window.self,
        b = window.screen,
        a = window.navigator;
        if (c.screen) {
            YS3x = b.width + "x" + b.height;
            bpN8F = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                YS3x = f.width + "x" + f.height
            }
        }
        if (a.language) {
            YT3x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                YT3x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bVv6p = g.getTime() / 1e3
    }
    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }
    function cLy5D(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
        a,
        d = f || cxf2x;
        a = window[e] = new Image;
        a.onload = function() {
            window[e] = null;
            d()
        };
        a.onerror = function() {
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
        var e = k || bVQ6K;
        bpk7d = escape(a || document.location);
        bVB6v = escape(m || document.title);
        bVz6t = l === true ? "": escape(l || document.referrer);
        bVu6o = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bpW8O == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bpW8O = ntes_get_cookie("__ntes__test__cookies") == b ? true: false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bpk7d.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bpW8O) {
                xy5D = fetch_visitor_hash();
                bVI6C = 1;
                ntes_set_cookie_long("_ntes_nnid", xy5D + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", xy5D)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            xy5D = h.substr(0, o);
            JT9K = h.substr(o + 1, p - o - 1);
            if (JT9K == 0) {
                JT9K = (new Date).getTime();
                f = true
            }
            if (!xy5D) {
                xy5D = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", xy5D + "," + JT9K);
                ntes_set_cookie_long("_ntes_nuid", xy5D)
            }
            if (JT9K != 0 && b - JT9K > 365 * 86400 * 1e3) {
                JT9K = 0;
                ntes_set_cookie_long("_ntes_nnid", xy5D + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", xy5D)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q),
            r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "": r: s
        }
        OV0x = c("P_INFO", "P_OINFO");
        OV0x = OV0x ? OV0x.substr(0, OV0x.indexOf("|")) : "";
        bVC6w = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", xy5D, "&_nvtm=", cyb2x, "&_nvsf=", bVH6B, "&_nvfi=", bVI6C, "&_nlag=", YT3x, "&_nlmf=", bVv6p, "&_nres=", YS3x, "&_nscd=", bpN8F, "&_nstm=", bVC6w, "&_nurl=", bpk7d, "&_ntit=", bVB6v, "&_nref=", bVz6t, "&_nfla=", bVu6o, "&_nssn=", OV0x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bVH6B = 0;
        neteaseTracker.callback = null
    }
    bVQ6K = "iad";
    neteaseTracker()
})(); (function() {})();
var CryptoJS = CryptoJS ||
function(u, p) {
    var d = {},
    l = d.lib = {},
    s = function() {},
    t = l.Base = {
        extend: function(a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function() {
                c.$super.init.apply(this, arguments)
            });
            c.init.prototype = c;
            c.$super = this;
            return c
        },
        create: function() {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        },
        init: function() {},
        mixIn: function(a) {
            for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    },
    r = l.WordArray = t.extend({
        init: function(a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c: 4 * a.length
        },
        toString: function(a) {
            return (a || v).stringify(this)
        },
        concat: function(a) {
            var c = this.words,
            e = a.words,
            j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
            else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
            else c.push.apply(c, e);
            this.sigBytes += a;
            return this
        },
        clamp: function() {
            var a = this.words,
            c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        },
        random: function(a) {
            for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
            return new r.init(c, a)
        }
    }),
    w = d.enc = {},
    v = w.Hex = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length,
            e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e, c / 2)
        }
    },
    b = w.Latin1 = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length,
            e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e, c)
        }
    },
    x = w.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch(c) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    },
    q = l.BufferedBlockAlgorithm = t.extend({
        reset: function() {
            this.i6c = new r.init;
            this.bVd6X = 0
        },
        YX3x: function(a) {
            "string" == typeof a && (a = x.parse(a));
            this.i6c.concat(a);
            this.bVd6X += a.sigBytes
        },
        Bw7p: function(a) {
            var c = this.i6c,
            e = c.words,
            j = c.sigBytes,
            k = this.blockSize,
            b = j / (4 * k),
            b = a ? u.ceil(b) : u.max((b | 0) - this.bVh6b, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k) this.bVc6W(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q, j)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.i6c = this.i6c.clone();
            return a
        },
        bVh6b: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this.bqG8y()
        },
        update: function(a) {
            this.YX3x(a);
            this.Bw7p();
            return this
        },
        finalize: function(a) {
            a && this.YX3x(a);
            return this.YZ3x()
        },
        blockSize: 16,
        bqv8n: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        cwE2x: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
} (Math); (function() {
    var u = CryptoJS,
    p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words,
            p = d.sigBytes,
            t = this.bB7u;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length,
            s = this.bB7u,
            t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        },
        bB7u: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})(); (function(u) {
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
    for (var t = CryptoJS,
    r = t.lib,
    w = r.WordArray,
    v = r.Hasher,
    r = t.algo,
    b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bqG8y: function() {
            this.dW8O = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bVc6W: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dW8O.words,
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
        YZ3x: function() {
            var b = this.i6c,
            n = b.words,
            a = 8 * this.bVd6X,
            c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.Bw7p();
            b = this.dW8O;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a],
            n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dW8O = this.dW8O.clone();
            return b
        }
    });
    t.MD5 = v.bqv8n(r);
    t.HmacMD5 = v.cwE2x(r)
})(Math); (function() {
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
        init: function(d) {
            this.cfg = this.cfg.extend(d)
        },
        compute: function(d, r) {
            for (var p = this.cfg,
            s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++) n = s.finalize(n),
                s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher ||
function(u) {
    var p = CryptoJS,
    d = p.lib,
    l = d.Base,
    s = d.WordArray,
    t = d.BufferedBlockAlgorithm,
    r = p.enc.Base64,
    w = p.algo.EvpKDF,
    v = d.Cipher = t.extend({
        cfg: l.extend(),
        createEncryptor: function(e, a) {
            return this.create(this.bqK8C, e, a)
        },
        createDecryptor: function(e, a) {
            return this.create(this.cwC2x, e, a)
        },
        init: function(e, a, b) {
            this.cfg = this.cfg.extend(b);
            this.bVa6U = e;
            this.L7E = a;
            this.reset()
        },
        reset: function() {
            t.reset.call(this);
            this.bqG8y()
        },
        process: function(e) {
            this.YX3x(e);
            return this.Bw7p()
        },
        finalize: function(e) {
            e && this.YX3x(e);
            return this.YZ3x()
        },
        keySize: 4,
        ivSize: 4,
        bqK8C: 1,
        cwC2x: 2,
        bqv8n: function(e) {
            return {
                encrypt: function(b, k, d) {
                    return ("string" == typeof k ? c: a).encrypt(e, b, k, d)
                },
                decrypt: function(b, k, d) {
                    return ("string" == typeof k ? c: a).decrypt(e, b, k, d)
                }
            }
        }
    });
    d.StreamCipher = v.extend({
        YZ3x: function() {
            return this.Bw7p(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
    x = function(e, a, b) {
        var c = this.bUZ6T;
        c ? this.bUZ6T = u: c = this.bUY6S;
        for (var d = 0; d < b; d++) e[a + d] ^= c[d]
    },
    q = (d.BlockCipherMode = l.extend({
        createEncryptor: function(e, a) {
            return this.Encryptor.create(e, a)
        },
        createDecryptor: function(e, a) {
            return this.Decryptor.create(e, a)
        },
        init: function(e, a) {
            this.bUV6P = e;
            this.bUZ6T = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bUV6P,
            c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bUY6S = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bUV6P,
            c = b.blockSize,
            d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bUY6S = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b,
            c = c - a.sigBytes % c,
            d = c << 24 | c << 16 | c << 8 | c,
            l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg,
            b = a.iv,
            a = a.mode;
            if (this.bVa6U == this.bqK8C) var c = a.createEncryptor;
            else c = a.createDecryptor,
            this.bVh6b = 1;
            this.fq9h = c.call(a, this, b && b.words)
        },
        bVc6W: function(a, b) {
            this.fq9h.processBlock(a, b)
        },
        YZ3x: function() {
            var a = this.cfg.padding;
            if (this.bVa6U == this.bqK8C) {
                a.pad(this.i6c, this.blockSize);
                var b = this.Bw7p(!0)
            } else b = this.Bw7p(!0),
            a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function(a) {
            this.mixIn(a)
        },
        toString: function(a) {
            return (a || this.formatter).stringify(this)
        }
    }),
    b = (p.format = {}).OpenSSL = {
        stringify: function(a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        },
        parse: function(a) {
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
        encrypt: function(a, b, c, d) {
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
        decrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.bhs5x(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        },
        bhs5x: function(a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    }),
    p = (p.kdf = {}).OpenSSL = {
        execute: function(a, b, c, d) {
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
        encrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        },
        decrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.bhs5x(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
} (); (function() {
    for (var u = CryptoJS,
    p = u.lib.BlockCipher,
    d = u.algo,
    l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0,
    j = 0,
    c = 0; 256 > c; c++) {
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
        bqG8y: function() {
            for (var a = this.L7E,
            c = a.words,
            d = a.sigBytes / 4,
            a = 4 * ((this.cwn2x = d + 6) + 1), e = this.cwm2x = [], j = 0; j < a; j++) if (j < d) e[j] = c[j];
            else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k
            }
            c = this.cwl2x = [];
            for (d = 0; d < a; d++) j = a - d,
            k = d % 4 ? e[j] : e[j - 4],
            c[d] = 4 > d || 4 >= j ? k: b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        },
        encryptBlock: function(a, b) {
            this.bUU6O(a, b, this.cwm2x, t, r, w, v, l)
        },
        decryptBlock: function(a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bUU6O(a, c, this.cwl2x, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        },
        bUU6O: function(a, b, c, d, e, j, l, f) {
            for (var m = this.cwn2x,
            g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
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
    u.AES = p.bqv8n(d)
})();
function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a),
    this.d = biFromHex(b),
    this.m = biFromHex(c),
    this.chunkSize = 2 * biHighIndex(this.m),
    this.radix = 16,
    this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return (10 > a ? "0": "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array,
    d = b.length,
    e = 0; d > e;) c[e] = b.charCodeAt(e),
    e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++],
        j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e),
        l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix),
        g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "),
    d = "";
    for (e = 0; e < c.length; ++e) for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)),
    d
}
function setMaxDigits(a) {
    maxDigits = a,
    ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt,
    bigOne = new BigInt,
    bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null: ZERO_ARRAY.slice(0),
    this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)++c;
    if (c == a.length) d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))),
        c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0),
    b.isNeg = a.isNeg,
    b
}
function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal,
    a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c),
    digit = d[1].digits[0],
    e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-": "") + reverseStr(e)
}
function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b),
    d += String(c[1].digits[0]);
    return (a.isNeg ? "-": "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15,
    c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b],
    a >>>= 4;
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
    return h = a >= b && c >= a ? a - b: a >= f && g >= a ? 10 + a - f: a >= d && e >= a ? 10 + a - d: 0
}
function hexToDigit(a) {
    var d, b = 0,
    c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4,
    b |= charToHex(a.charCodeAt(d));
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
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g),
    i = charToHex(h),
    j = biMultiplyDigit(f, i),
    e = biAdd(e, j),
    f = biMultiplyDigit(f, b);
    return e.isNeg = c,
    e
}
function biDump(a) {
    return (a.isNeg ? "-": "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg,
    c = biSubtract(a, b),
    b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d,
        c.digits[f] = 65535 & e,
        d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg,
    c = biAdd(a, b),
    b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e,
        c.digits[f] = 65535 & d,
        c.digits[f] < 0 && (c.digits[f] += biRadix),
        e = 0 - Number(0 > d);
        if ( - 1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e,
            c.digits[f] = 65535 & d,
            c.digits[f] < 0 && (c.digits[f] += biRadix),
            e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)--b;
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
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d,
        c.digits[i] = h & maxDigitVal,
        d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg,
    c
}
function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d,
    result.digits[f] = e & maxDigitVal,
    d = e >>> biRadixBits;
    return result.digits[1 + c] = d,
    result
}
function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
    d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal,
    d.isNeg = a.isNeg,
    d
}
function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
    d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e,
    d.isNeg = a.isNeg,
    d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
    c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b),
    c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b),
    c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c) if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
    d = biNumBits(b),
    e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)),
    new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1),
    ++i,
    ++d,
    h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);)++f.digits[j - h],
    g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal: Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;)--f.digits[l - h - 1],
        r = f.digits[l - h - 1] * (p * biRadix | q),
        s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1),
        g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
        g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i),
    f.isNeg = a.isNeg != e,
    a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)),
    0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
    new Array(f, g)
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
    for (var c = bigOne,
    d = a;;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne,
    e = a,
    f = b;;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a),
    this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1,
    this.mu = biDivide(b, this.modulus),
    this.bkplus1 = new BigInt,
    this.bkplus1.digits[this.k + 1] = 1,
    this.modulo = BarrettMu_modulo,
    this.multiplyMod = BarrettMu_multiplyMod,
    this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1),
    c = biMultiply(b, this.mu),
    d = biDivideByRadixPower(c, this.k + 1),
    e = biModuloByRadixPower(a, this.k + 1),
    f = biMultiply(d, this.modulus),
    g = biModuloByRadixPower(f, this.k + 1),
    h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus),
    i = biCompare(h, this.modulus) >= 0;
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
setMaxDigits(20),
dpl10 = 15,
lr10 = biFromNumber(1e15),
hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"),
hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535),
lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535); !
function() {
    // 随机函数, 随机获取十六个字符
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length,
        e = Math.floor(e),
        c += b.charAt(e);
        return c
    }
    // 加密函数
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
    // encSecKey 参数的获取
    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131),
        d = new RSAKeyPair(b, "", c),
        e = encryptedString(d, a)
    }
    //   window.asrsea = d 加密函数
    function d(d, e, f, g) {
        window.console.info(d);
        var h = {},
        i = a(16);
        return h.encText = b(d, g),
        h.encText = b(h.encText, i),
        h.encSecKey = c(i, e, f),
        h
    }
    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d),
        f
    }
    window.asrsea = d,
    window.ecnonasr = e
} (); (function() {
    var c6e = NEJ.P,
    et8l = c6e("nej.g"),
    v7o = c6e("nej.j"),
    k6e = c6e("nej.u"),
    Xi2x = c6e("nm.x.ek");
    Xi2x.emj = {
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
    Xi2x.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})(); (function() {
    var c6e = NEJ.P,
    et8l = c6e("nej.g"),
    v7o = c6e("nej.j"),
    k6e = c6e("nej.u"),
    Xi2x = c6e("nm.x.ek"),
    l6f = c6e("nm.x");
    if (v7o.bl7e.redefine) return;
    window.GEnc = true;
    var brk8c = function(cwj1x) {
        var m6g = [];
        k6e.be7X(cwj1x,
        function(cwi1x) {
            m6g.push(Xi2x.emj[cwi1x])
        });
        return m6g.join("")
    };
    var cwd1x = v7o.bl7e;
    v7o.bl7e = function(Z7S, e6c) {
        var i6c = {},
        e6c = NEJ.X({},
        e6c),
        ml2x = Z7S.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(Z7S) && !(e6c.headers && e6c.headers[et8l.BH7A] == et8l.GU8M) && !e6c.noEnc) {
            if (ml2x != -1) {
                i6c = k6e.hd9U(Z7S.substring(ml2x + 1));
                Z7S = Z7S.substring(0, ml2x)
            }
            if (e6c.query) {
                i6c = NEJ.X(i6c, k6e.fO9F(e6c.query) ? k6e.hd9U(e6c.query) : e6c.query)
            }
            if (e6c.data) {
                i6c = NEJ.X(i6c, k6e.fO9F(e6c.data) ? k6e.hd9U(e6c.data) : e6c.data)
            }
            i6c["csrf_token"] = v7o.gQ9H("__csrf");
            Z7S = Z7S.replace("api", "weapi");
            e6c.method = "post";
            delete e6c.query;
            // window.console.info(i6c)
            // window.console.info("brk8c:"+brk8c(["流泪", "强"]))
            // window.console.info(brk8c(Xi2x.md))
            // window.console.info(brk8c(["爱心", "女孩", "惊恐", "大笑"]))
            var bUR6L = window.asrsea(JSON.stringify(i6c), brk8c(["流泪", "强"]), brk8c(Xi2x.md), brk8c(["爱心", "女孩", "惊恐", "大笑"]));
           // window.console.info(bUR6L);
            e6c.data = k6e.cD8v({
                params: bUR6L.encText,
                encSecKey: bUR6L.encSecKey
            })
        }
        cwd1x(Z7S, e6c)
    };
    v7o.bl7e.redefine = true
})(); (function() {
    window.setTimeout(function() {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
        var getNode = function(tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue) return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0,
                ii = nodes.length; i < ii; i++) {
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
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif": "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL)); (new Image).src = pushHref + "?" + params.join("&")
    },
    3e3)
})(); (function() {})(); (function() {})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    dC8u = c6e("nej.p"),
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    v7o = c6e("nej.j"),
    dI8A = c6e("nm.u"),
    l6f = c6e("nm.x"),
    q6k = c6e("nm.d"),
    n6h = c6e("nm.l"),
    cx8p = c6e("nm.pc"),
    bry8q = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
    i6c = {
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
        18 : "186",
        "圈": "312",
        "叉": "313"
    },
    cwb1x = function() {
        if (h6b && h6b.z7s) {
            h6b.dispatchEventalias = h6b.z7s
        }
    };
    cwb1x();
    l6f.brK8C = function(bR7K) {
        if (!bR7K || bR7K.copyrightId === undefined || !!bR7K.program) return false;
        if (window.GAbroad) {
            bR7K.fee = 0;
            return true
        }
        if (bR7K.status < 0) return true;
        var Xg2x;
        if (typeof GCopyrights !== "undefined") Xg2x = GCopyrights;
        try {
            if (!Xg2x && !!top.GCopyrights) Xg2x = top.GCopyrights
        } catch(e) {}
        if (Xg2x) {
            var r6l = k6e.do8g(Xg2x, bR7K.copyrightId);
            if (r6l >= 0) return true
        }
        return false
    };
    l6f.brU8M = function() {
        var EB8t = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
        yg5l = {
            2 : "artist",
            13 : "playlist",
            17 : "dj",
            19 : "album",
            18 : "song",
            31 : "toplist",
            32 : "searchsong",
            33 : "searchlyric",
            34 : "event",
            70 : "djradio",
            24 : "day",
            50 : "record"
        },
        cwa1x = {
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
        var cvZ1x = function(L7E, i6c, EF8x) {
            switch (L7E) {
            case "event":
                i6c = i6c.split("|");
                return "/event?id=" + i6c[0] + "&uid=" + i6c[1];
            case "searchsong":
            case "searchlyric":
                var u7n = L7E == "searchsong" ? 1 : 1006;
                return "/search/m/?s=" + encodeURIComponent(i6c) + "&type=" + u7n;
            case "toplist":
                return "/discover/toplist?id=" + i6c + "&_hash=songlist-" + EF8x;
            case "day":
                return "/discover/recommend/taste" + "?_hash=songlist-" + EF8x;;
            case "record":
                i6c = i6c.split("|");
                return "/user/songs/rank?id=" + i6c[0] + "&cat=" + i6c[1];
                break;
            default:
                return "/" + L7E + "?id=" + i6c + "&_hash=songlist-" + EF8x
            }
        };
        return function(el8d, EF8x) {
            if (!el8d) return null;
            var OL0x = el8d.fid || (el8d.type != 18 ? el8d.type: null),
            bsg8Y = el8d.fdata || el8d.rid,
            bUQ6K = el8d.page || el8d.fhref;
            var L7E = yg5l[OL0x];
            if (!L7E) {
                var Bz7s = (bUQ6K || "").match(EB8t);
                if (Bz7s) L7E = Bz7s[1]
            }
            if (!L7E) return null;
            return {
                title: cwa1x[L7E],
                link: !yg5l[OL0x] ? bUQ6K: cvZ1x(L7E, bsg8Y, EF8x),
                fid: OL0x,
                fdata: bsg8Y
            }
        }
    } ();
    l6f.Zf3x = function(kS1x) {
        var dt8l = kS1x;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dt8l = GUser;
        return dt8l
    };
    l6f.hh9Y = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l6f.OK0x = function() {
        var EB8t = /#(.*?)$/;
        return function(gL9C) {
            var kd1x = gL9C === false ? location: top.location;
            return EB8t.test(kd1x.href) ? RegExp.$1: ""
        }
    } ();
    l6f.EN8F = function() {
        var EO8G = a6g.dn8f("audio"),
        cvW1x = EO8G.canPlayType && EO8G.canPlayType("audio/mpeg");
        if (cvW1x) return 2;
        var cvV1x = l6f.bta9R().supported;
        if (cvV1x) return 1;
        return 0
    };
    l6f.bta9R = function() {
        var gJ9A, btc9T = !1,
        btk9b = "";
        if (dC8u.dz8r.browser == "ie") {
            try {
                gJ9A = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch(e) {
                gJ9A = null
            }
            if (gJ9A) {
                btc9T = !0;
                btk9b = gJ9A.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gJ9A = navigator.plugins["Shockwave Flash"];
                if (gJ9A) {
                    btc9T = !0;
                    btk9b = gJ9A.description
                }
            }
        }
        return {
            supported: btc9T,
            version: btk9b
        }
    };
    l6f.sn3x = function() {
        return "网易云音乐"
    };
    l6f.cvS1x = function() {
        return i6c
    };
    l6f.bUO6I = function(cI8A) {
        var D7w = i6c[cI8A];
        return D7w == null ? "": bry8q.replace("{ID}", D7w)
    };
    l6f.xX5c = function(bs7l, em8e, EY8Q) {
        if (!bs7l) return "";
        if ( !! EY8Q) {
            bs7l = l6f.cvO1x(bs7l)
        }
        return l6f.Zl3x(l6f.cvN1x(bs7l, em8e))
    };
    l6f.Zp3x = function() {
        var XN2x = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        },
        bud9U = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        },
        cvM1x = {
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
        cvK1x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cvJ1x = function(dP8H, buq9h) {
            dP8H = OD0x(dP8H);
            if ( !! buq9h) {
                dP8H = dP8H.replace(XN2x.MLINE, "\n\n").replace(XN2x.LING, "</br>")
            }
            dP8H = l6f.Zl3x(dP8H);
            return dP8H
        };
        var OD0x = function(bs7l) {
            return k6e.CF7y(cvM1x, bs7l)
        };
        return function(dP8H, e6c, dJ8B) {
            e6c = e6c || {};
            dJ8B = dJ8B || {};
            dJ8B.actHash = {};
            var cvI1x = !!e6c.parseLink,
            cvH1x = !!e6c.parseAct,
            cvG1x = e6c.linkTpl || bud9U.LINK,
            cvF1x = e6c.atTpl || bud9U.AT,
            cvE1x = e6c.atUrl || "/user/home?nickname=",
            cvC1x = e6c.actTpl || bud9U.ACT,
            buq9h = !!e6c.keepSpace,
            buY9P = e6c.linkKlass || "s-fc7";
            cLK5P = e6c.actBiJson || "";
            if (!dP8H) return "";
            dP8H = dP8H.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lZ2x = cvK1x[cvI1x + 2 * cvH1x],
            dl8d = XN2x[lZ2x],
            bw7p = null,
            kq1x = null,
            gE9v = 0,
            cLL5Q = "",
            cLM5R = "";
            var qi3x = [];
            dl8d.lastIndex = 0;
            while (bw7p = dl8d.exec(dP8H)) {
                var dV8N = {
                    html: "",
                    before: bw7p.index - 1,
                    after: bw7p.index + bw7p[0].length
                };
                if (bw7p[1]) {
                    var kq1x = bw7p[2].replace(/[^\x00-\xff]/g, "**");
                    if (kq1x.length < 4 || kq1x.length > 32) {} else {
                        var Ha8S = a6g.eD9u(cvF1x);
                        dV8N.html = a6g.ce7X(Ha8S, {
                            value: OD0x(bw7p[2]),
                            url: encodeURI(cvE1x + bw7p[2]),
                            klass: buY9P
                        });
                        qi3x.push(dV8N)
                    }
                } else if (bw7p.length > 8 && bw7p[4]) {
                    var Ha8S = a6g.eD9u(cvG1x);
                    dV8N.html = a6g.ce7X(Ha8S, {
                        value: OD0x(bw7p[4]),
                        url: bw7p[4],
                        klass: buY9P
                    });
                    qi3x.push(dV8N)
                } else {
                    var bUK6E = lZ2x == "ACT_NOLINK" ? 4 : 9;
                    var Ha8S = a6g.eD9u(cvC1x);
                    dV8N.html = a6g.ce7X(Ha8S, {
                        value: OD0x(bw7p[bUK6E]),
                        klass: buY9P
                    });
                    qi3x.push(dV8N);
                    dJ8B.actHash[bw7p[bUK6E].slice(1, -1)] = true
                }
            }
            var bvD9u = qi3x.length,
            kS1x = {
                before: dP8H.length - 1,
                after: 0
            },
            bvM9D = "";
            for (var i = 0; i <= bvD9u; i++) {
                var hj9a, ex9o;
                hj9a = (qi3x[i - 1] || kS1x).after;
                ex9o = (qi3x[i] || kS1x).before;
                if (ex9o >= hj9a && hj9a >= 0 && ex9o <= dP8H.length - 1) {
                    bvM9D += cvJ1x(dP8H.substring(hj9a, ex9o + 1), buq9h)
                }
                if (qi3x[i]) {
                    bvM9D += qi3x[i].html
                }
            }
            return bvM9D
        }
    } ();
    l6f.cvO1x = function() {
        var dl8d = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function(bs7l) {
            return (bs7l || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(dl8d,
            function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    } ();
    l6f.cvN1x = function() {
        var dl8d = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eG9x = function(kq1x, em8e) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(kq1x) + '" class="' + (em8e || "") + '">@' + kq1x + "</a>"
        };
        return function(bs7l, em8e) {
            return (bs7l || "").replace(dl8d,
            function($0, $1) {
                return eG9x($1, em8e)
            })
        }
    } ();
    l6f.Zl3x = function() {
        var dl8d = /\[(.*?)\]/g;
        return function(bs7l) {
            return (bs7l || "").replace(dl8d,
            function($1, $2) {
                var Z7S = l6f.bUO6I($2);
                return ! Z7S ? $1: '<img src="' + Z7S + '"/>'
            })
        }
    } ();
    l6f.Cu7n = function(G7z, em8e) {
        a6g.bG7z(G7z, em8e) ? a6g.y7r(G7z, em8e) : a6g.w7p(G7z, em8e)
    };
    l6f.OA0x = function(cH8z, lq1x) {
        cH8z = a6g.A7t(cH8z);
        lq1x = a6g.A7t(lq1x);
        if (!cH8z || !lq1x) return ! 1;
        for (lq1x = lq1x.parentNode; !! lq1x && lq1x != cH8z; lq1x = lq1x.parentNode);
        return lq1x == cH8z
    };
    l6f.lG1x = function() {
        var bUJ6D = function(hs0x) {
            return (hs0x < 10 ? "0": "") + hs0x
        };
        return function(ib0x) {
            ib0x = parseInt(ib0x) || 0;
            if (!ib0x) return "00:00";
            var BI7B = Math.floor(ib0x % 60),
            cvu1x = Math.floor(ib0x / 60);
            return bUJ6D(cvu1x) + ":" + bUJ6D(BI7B)
        }
    } ();
    l6f.BL7E = function(gh9Y, yd5i) {
        if (!gh9Y || gh9Y.length == 0) return "";
        yd5i = yd5i || "/";
        var bw7p = [];
        for (var i = gh9Y.length - 1; i >= 0; i--) {
            bw7p.unshift(gh9Y[i].name)
        }
        return bw7p.join(yd5i)
    };
    l6f.tD4H = function() {
        var Wt2x = function(iv1x, em8e, cH8z, ZK3x) {
            var eG9x = ZK3x ? l6f.bwR0x: k6e.dL8D;
            if (!iv1x || !iv1x.name) return "";
            if (!iv1x.id) return '<span class="' + em8e + '">' + eG9x(iv1x.name) + "</span>";
            return "<a" + (cH8z ? ' target="_blank"': "") + ' class="' + em8e + '" href="/artist?id=' + iv1x.id + '" hidefocus="true">' + eG9x(iv1x.name) + "</a>"
        };
        return function(gh9Y, X7Q, yd5i, cH8z, bUI6C, ZK3x) {
            if (!gh9Y || !gh9Y.length) return "";
            yd5i = yd5i || "/";
            X7Q = X7Q || "";
            Ox0x = "";
            var ev9m = [];
            for (var i = 0,
            j6d = [], vr5w = [], fY9P; i < gh9Y.length; ++i) {
                ev9m.push(gh9Y[i].name);
                if (!gh9Y[i] || gh9Y[i].id <= 0) {
                    vr5w.push(gh9Y[i]);
                    continue
                }
                if (k6e.gZ9Q(X7Q)) {
                    fY9P = X7Q(gh9Y[i])
                } else {
                    fY9P = Wt2x(gh9Y[i], X7Q, cH8z, ZK3x)
                }
                if (fY9P && bUI6C && gh9Y[i].tns && gh9Y[i].tns.length > 0) {
                    Ox0x = k6e.dL8D(gh9Y[i].tns[0]);
                    fY9P += '<span class="s-fc8" title="' + Ox0x + '"> - (' + Ox0x + ")</span>"
                } !! fY9P && j6d.push(fY9P)
            }
            for (var i = 0,
            fY9P; i < vr5w.length; ++i) {
                if (k6e.gZ9Q(X7Q)) {
                    fY9P = X7Q(vr5w[i])
                } else {
                    fY9P = Wt2x(vr5w[i], X7Q, cH8z, ZK3x)
                }
                if (fY9P && bUI6C && vr5w[i].tns && vr5w[i].tns.length > 0) {
                    Ox0x = k6e.dL8D(vr5w[i].tns[0]);
                    fY9P += '<span class="s-fc8" title="' + Ox0x + '"> - (' + Ox0x + ")</span>"
                } !! fY9P && j6d.push(fY9P)
            }
            return '<span title="' + ev9m.join(yd5i) + '">' + j6d.join(yd5i) + "</span>"
        }
    } ();
    l6f.BR7K = function(fG9x, qA3x) {
        qA3x = qA3x || "86";
        return !! fG9x && (qA3x == "86" ? /^\d{11}$/: /^\d+$/).test(fG9x)
    };
    l6f.cLN5S = function(fG9x) {
        if (!l6f.BR7K(fG9x)) return fG9x;
        return fG9x.substring(0, 3) + "****" + fG9x.substr(7)
    };
    l6f.kD1x = function() {
        var dl8d = /^\s+$/g;
        return function(iC1x) {
            return ! iC1x || dl8d.test(iC1x)
        }
    } ();
    l6f.Wo2x = function() {
        var bxK0x = /[^\x00-\xfff]/g;
        return function(iC1x) {
            var cvr1x = iC1x.match(bxK0x) || [],
            dv8n = cvr1x.length;
            return iC1x.length + dv8n
        }
    } ();
    l6f.Dd7W = function() {
        var bxK0x = /[^\x00-\xfff]/;
        return function(iC1x, eF9w) {
            for (var i = 0,
            len = iC1x.length; i < len && eF9w > 0; i++) {
                if (bxK0x.test(iC1x.charAt(i))) {
                    eF9w -= 2;
                    if (eF9w < 0) {
                        break
                    }
                } else {
                    eF9w -= 1
                }
            }
            return iC1x.substring(0, i)
        }
    } ();
    l6f.Df7Y = function(iC1x, eF9w, Ug2x) {
        eF9w = eF9w || 10;
        Ug2x = Ug2x || nej.p.dz8r.engine == "trident" && parseInt(nej.p.dz8r.release) < 5;
        if (Ug2x && l6f.Wo2x(iC1x) > eF9w) {
            return l6f.Dd7W(iC1x, eF9w) + "..."
        } else {
            return iC1x
        }
    };
    l6f.bUH6B = function(g6a) {
        return g6a === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(g6a.type || g6a.href || ~g6a.tabIndex)
    };
    l6f.cvn1x = function(d6d, cH8z) {
        if (!d6d || !cH8z) return ! 0;
        var g6a, u7n = d6d.type.toLowerCase();
        if (u7n == "mouseout") {
            g6a = d6d.relatedTarget || d6d.toElement
        } else if (u7n == "mouseover") {
            g6a = d6d.relatedTarget || d6d.fromElement
        }
        return ! g6a || g6a !== cH8z && !l6f.OA0x(cH8z, g6a)
    };
    l6f.uT5Y = function() {
        S7L = {};
        return function(g6a, en8f) {
            var D7w = a6g.mc2x(g6a),
            L7E = "hover-" + D7w;
            if (!en8f || !D7w || !!S7L[L7E]) return;
            S7L[L7E] = !0;
            h6b.s6m(D7w, "mouseover",
            function() {
                var byd0x = a6g.F7y(g6a, "hshow") || [];
                var byf0x = a6g.F7y(g6a, "icn-dislike") || [];
                a6g.w7p(D7w, "z-hover");
                a6g.bb7U(byd0x[0], "display", "block");
                a6g.bb7U(byf0x[0], "display", "block")
            });
            h6b.s6m(D7w, "mouseout",
            function() {
                var byd0x = a6g.F7y(g6a, "hshow") || [];
                var byf0x = a6g.F7y(g6a, "icn-dislike") || [];
                a6g.y7r(D7w, "z-hover");
                a6g.bb7U(byd0x[0], "display", "none");
                a6g.bb7U(byf0x[0], "display", "none")
            })
        }
    } ();
    l6f.bUE6y = function() {
        var bB7u = {
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
        return function(iC1x) {
            return k6e.CF7y(bB7u, iC1x)
        }
    } ();
    l6f.BU7N = function(bA7t) {
        if (k6e.GY8Q(bA7t)) bA7t = bA7t.getTime();
        var fh9Y = new Date,
        kI1x = fh9Y.getTime() - bA7t;
        if (kI1x <= 6e4) return "刚刚";
        var oj2x = fh9Y.getHours() * 36e5 + fh9Y.getMinutes() * 6e4 + fh9Y.getSeconds() * 1e3;
        if (kI1x <= oj2x) {
            if (kI1x < 36e5) {
                var IB9s = Math.floor(kI1x / 6e4);
                return IB9s + "分钟前"
            }
            return k6e.ir0x(bA7t, "HH:mm")
        } else {
            if (kI1x < oj2x + 864e5) {
                return "昨天" + k6e.ir0x(bA7t, "HH:mm")
            } else {
                var gX9O = fh9Y.getFullYear(),
                Wi2x = new Date(gX9O, 0, 1);
                var oj2x = fh9Y.getTime() - Wi2x.getTime();
                if (kI1x < oj2x) {
                    return k6e.ir0x(bA7t, "M月d日 HH:mm")
                }
                return k6e.ir0x(bA7t, "yyyy年M月d日")
            }
        }
    };
    l6f.cvj1x = function(bA7t) {
        if (k6e.GY8Q(bA7t)) bA7t = bA7t.getTime();
        var fh9Y = new Date,
        kI1x = fh9Y.getTime() - bA7t;
        var oj2x = fh9Y.getHours() * 36e5 + fh9Y.getMinutes() * 6e4 + fh9Y.getSeconds() * 1e3;
        if (kI1x <= oj2x) {
            return "今天" + k6e.ir0x(bA7t, "HH:mm")
        } else {
            if (kI1x < oj2x + 864e5) {
                return "昨天" + k6e.ir0x(bA7t, "HH:mm")
            } else {
                return k6e.ir0x(bA7t, "yy-MM-dd HH:mm")
            }
        }
    };
    l6f.cvi1x = function(bA7t) {
        if (k6e.GY8Q(bA7t)) bA7t = bA7t.getTime();
        var fh9Y = new Date,
        kI1x = fh9Y.getTime() - bA7t;
        if (kI1x <= 6e4) return "刚刚";
        var oj2x = fh9Y.getHours() * 36e5 + fh9Y.getMinutes() * 6e4 + fh9Y.getSeconds() * 1e3;
        if (kI1x <= oj2x) {
            if (kI1x < 36e5) {
                var IB9s = Math.floor(kI1x / 6e4);
                return IB9s + "分钟前"
            }
            return k6e.ir0x(bA7t, "HH:mm")
        } else {
            if (kI1x < oj2x + 864e5) {
                return "昨天" + k6e.ir0x(bA7t, "HH:mm")
            } else if (kI1x < oj2x + 864e5 * 6) {
                var gX9O = fh9Y.getFullYear(),
                Wi2x = new Date(gX9O, 0, 1);
                var oj2x = fh9Y.getTime() - Wi2x.getTime();
                if (kI1x < oj2x) {
                    return k6e.ir0x(bA7t, "M月d日 HH:mm")
                }
                return k6e.ir0x(bA7t, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l6f.ZO3x = function() {
        var dl8d = /\{(.*?)\}/gi;
        return function(pI2x, i6c) {
            return (pI2x || "").replace(dl8d,
            function($1, $2) {
                var C7v = i6c[$2];
                return C7v == null ? $1: C7v
            })
        }
    } ();
    l6f.ft9k = function() {
        var bi7b = Array.prototype.slice.call(arguments, 0),
        pI2x = bi7b.shift();
        if (pI2x) {
            return pI2x.replace(/{(\d+)}/g,
            function($1, $2) {
                return $2 < bi7b.length ? bi7b[$2] : $1
            })
        }
        return ""
    };
    l6f.Ov0x = function(j6d, em8e, kG1x) {
        return "";
        kG1x = kG1x || " - ";
        if (j6d && j6d.length) {
            return kG1x + ( !! em8e ? '<span class="' + em8e + '">' + j6d[0] + "</span>": j6d[0])
        }
        return ""
    };
    l6f.bUC6w = function() {
        if (window.getSelection) {
            var sT3x = window.getSelection();
            if (sT3x && sT3x.focusNode && sT3x.focusNode.tagName) {
                var uX5c = a6g.dj8b(sT3x.focusNode);
                for (var i = 0,
                Ca7T; i < uX5c.length; ++i) {
                    Ca7T = uX5c[i].tagName;
                    if (!Ca7T) continue;
                    Ca7T = Ca7T.toLowerCase();
                    if (Ca7T == "textarea" || Ca7T == "input") return ! 0
                }
            }
        } else if (document.selection) {
            var di8a = document.selection.createRange();
            if (di8a) {
                var g6a = di8a.parentElement();
                if (g6a && g6a.tagName) {
                    var Ca7T = g6a.tagName.toLowerCase();
                    if (Ca7T == "textarea" || Ca7T == "input") return ! 0
                }
            }
        }
        return ! 1
    };
    l6f.DG7z = function(fR9I) {
        if (/^[A-Z]\:\\/i.test(fR9I)) {
            fR9I = fR9I.split("\\")
        } else {
            fR9I = fR9I.split("/")
        }
        fR9I = fR9I[fR9I.length - 1];
        return fR9I
    };
    l6f.cvg1x = function() {
        var Ja9R = [13, 17, 34, 19, 18, 21];
        return function(D7w) {
            var bw7p = (D7w || "").split("_");
            return {
                type: Ja9R[bw7p[2]] || -1,
                id: bw7p[3] || ""
            }
        }
    } ();
    l6f.bUB6v = function(gJ9A) {
        if (!gJ9A) {
            return true
        }
        for (var k in gJ9A) {
            return false
        }
        return true
    };
    l6f.bzg0x = function(dt8l) {
        if (!dt8l) {
            return ""
        }
        if (4 == dt8l.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dt8l.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dt8l.expertTags && dt8l.expertTags.length || !l6f.bUB6v(dt8l.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l6f.Wb2x = function(hw0x) {
        if (!hw0x) return "";
        var dv8n = hw0x.length,
        iF1x = [];
        iF1x[0] = dv8n / 3 | 0;
        iF1x[1] = iF1x[0] + ((dv8n - iF1x[0]) / 2 | 0);
        return hw0x.substring(0, iF1x[0]) + hw0x.substring(iF1x[0], iF1x[1]).replace(/\d/g, "*") + hw0x.substring(iF1x[1], dv8n)
    };
    l6f.cLO5T = function(r6l, cF8x) {
        return (r6l % cF8x + cF8x) % cF8x
    };
    l6f.bzs0x = function() {
        var Ja9R = {
            0 : "playlist",
            1 : "program",
            2 : "event",
            3 : "album",
            4 : "song",
            5 : "mv",
            6 : "topic",
            62 : "video"
        };
        return function(D7w) {
            var bw7p = (D7w || "").split("_"),
            m6g = {
                type: Ja9R[bw7p[2]] || -1,
                id: bw7p[3] || ""
            };
            if (m6g.type == "event") {
                m6g.uid = bw7p[4] || "";
                return "/" + m6g.type + "?id=" + m6g.id + "&uid=" + m6g.uid
            }
            return "/" + m6g.type + "?id=" + m6g.id
        }
    } ();
    l6f.bzu0x = function() {
        var Ja9R = {
            0 : "歌单",
            1 : "电台节目",
            2 : "动态",
            3 : "专辑",
            4 : "单曲",
            5 : "MV",
            6 : "专栏文章",
            62 : "视频"
        };
        return function(D7w) {
            var bw7p = (D7w || "").split("_");
            return Ja9R[bw7p[2]] || "资源"
        }
    } ();
    l6f.cvd1x = function(bx7q) {
        var qs = bx7q.length > 0 ? bx7q.substring(1) : "",
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
    l6f.bzy0x = function(oW2x, VX2x) {
        var ZT3x = 0,
        dy8q = new Array;
        k6e.be7X(oW2x,
        function(Z7S, r6l) {
            var cB8t = a6g.dn8f("img");
            cB8t.src = Z7S;
            h6b.s6m(cB8t, "load",
            function(r6l, d6d) {
                dy8q[r6l] = 1;
                ZT3x++;
                if (ZT3x == oW2x.length) VX2x(oW2x, dy8q)
            }.f6b(this, r6l));
            h6b.s6m(cB8t, "error",
            function(d6d, r6l) {
                dy8q[r6l] = 0;
                ZT3x++;
                if (ZT3x == oW2x.length) VX2x(oW2x, dy8q)
            }.f6b(this, r6l))
        })
    };
    l6f.Os0x = function(j6d, ej8b) {
        var m6g = [];
        k6e.be7X(j6d,
        function(p6j, r6l, O7H) {
            m6g.push(ej8b(p6j, r6l, O7H))
        });
        return m6g
    };
    l6f.bcS4W = function(j6d, ej8b, O7H) {
        var m6g = [];
        k6e.be7X(j6d,
        function(p6j, r6l) {
            if (ej8b.call(O7H, p6j, r6l, j6d)) {
                m6g.push(p6j)
            }
        });
        return m6g
    };
    l6f.bUA6u = function(bs7l) {
        return k6e.dL8D((bs7l || "").replace(/\s{2,}/g, " ").trim())
    };
    var cvb1x = {
        r: /\<|\>/g,
        "<": "&lt;",
        ">": "&gt;"
    };
    l6f.cva1x = function(bs7l) {
        return k6e.CF7y(cvb1x, bs7l)
    };
    l6f.bzS0x = function(bm7f) {
        if (bm7f.transNames && bm7f.transNames.length) {
            return bm7f.transNames[0]
        } else if (bm7f.alias && bm7f.alias.length) {
            return bm7f.alias[0]
        }
    };
    l6f.bzU0x = function(XW2x) {
        if (XW2x) {
            return XW2x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l6f.bUz6t = function(g6a) {
        var g6a = a6g.A7t(g6a),
        cI8A = g6a && g6a.getElementsByTagName("textarea")[0],
        L7E = a6g.t7m(g6a, "key"),
        VP2x = a6g.t7m(g6a, "simple") == "1",
        bAh0x = a6g.t7m(g6a, "pvnamed") == "1",
        VO2x = q6k.tK4O.fP9G();
        if (! (g6a && cI8A && L7E)) return;
        var uv4z, bAn0x, baa3x;
        uv4z = a6g.F7y(a6g.A7t("m-playlist"), "j-img");
        k6e.be7X(uv4z,
        function(jm1x) {
            if (!baa3x && a6g.t7m(jm1x, "key")) {
                baa3x = a6g.t7m(jm1x, "key");
                jm1x.removeAttribute("data-key")
            }
        });
        uv4z = a6g.F7y(a6g.A7t("m-playlist"), "m-info");
        k6e.be7X(uv4z,
        function(jm1x) {
            if (!bAn0x && jm1x.id && jm1x.id.indexOf("auto-id-") == 0) {
                bAn0x = jm1x.id.slice(8, 12)
            }
        });
        var C7v = cI8A.value || cI8A.defaultValue;
        if (baa3x) {
            C7v = decodeURIComponent(k6e.bUy6s(C7v, "param=" + bAn0x + baa3x))
        }
        C7v = JSON.parse(C7v);
        if (bAh0x) {
            l6f.bUx6r(C7v)
        }
        if (VP2x) {
            C7v = l6f.Bs7l(C7v)
        }
        VO2x.tp3x(L7E, C7v);
        g6a.innerHTML = "";
        return L7E
    };
    l6f.cuU1x = function(ri3x) {
        if (!ri3x.onbeforelistload) {
            ri3x.onbeforelistload = function(d6d) {
                d6d.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!ri3x.onemptylist) {
            ri3x.onemptylist = function(d6d) {
                d6d.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (ri3x.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return ri3x
    };
    l6f.bUx6r = function(hS0x) {
        k6e.be7X(hS0x,
        function(bR7K) {
            bR7K.privilege = bR7K.pv;
            delete bR7K.pv
        })
    };
    l6f.Bs7l = function(iK1x) {
        if (k6e.eh8Z(iK1x)) {
            var dJ8B = [];
            k6e.be7X(iK1x,
            function(VP2x) {
                dJ8B.push(bUw6q(VP2x))
            });
            return dJ8B
        } else {
            return bUw6q(iK1x)
        }
        function bUw6q(iK1x) {
            if (!iK1x) return null;
            var dJ8B = {
                album: iK1x.al,
                alias: iK1x.alia || iK1x.ala || [],
                artists: iK1x.ar || [],
                commentThreadId: "R_SO_4_" + iK1x.id,
                copyrightId: iK1x.cp || 0,
                duration: iK1x.dt || 0,
                id: iK1x.id,
                mvid: iK1x.mv || 0,
                name: iK1x.name || "",
                cd: iK1x.cd,
                position: iK1x.no || 0,
                ringtone: iK1x.rt,
                rtUrl: iK1x.rtUrl,
                status: iK1x.st || 0,
                pstatus: iK1x.pst || 0,
                fee: iK1x.fee || 0,
                version: iK1x.v || 0,
                eq: iK1x.eq,
                songType: iK1x.t || 0,
                mst: iK1x.mst,
                score: iK1x.pop || 0,
                ftype: iK1x.ftype,
                rtUrls: iK1x.rtUrls,
                transNames: iK1x.tns,
                privilege: iK1x.privilege,
                lyrics: iK1x.lyrics
            };
            return dJ8B
        }
    };
    l6f.cLP5U = function() {
        var g6a = a6g.oC2x('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(g6a);
        h6b.s6m(g6a, "click",
        function(d6d) {
            h6b.bg7Z(d6d);
            a6g.cS8K(g6a)
        })
    };
    l6f.iZ1x = function(ck8c) {
        if (ck8c < 1e5) {
            return ck8c
        } else if (ck8c < 1e8) {
            return Math.floor(ck8c / 1e3) / 10 + "万"
        } else {
            return Math.floor(ck8c / 1e7) / 10 + "亿"
        }
    };
    l6f.xt5y = function(ck8c, cI8A) {
        return "<i>" + (ck8c ? "(" + ck8c + ")": cI8A) + "</i>"
    };
    l6f.bUu6o = function(u7n, iy1x) {
        var e6c = {};
        if (!k6e.mn2x(iy1x)) {
            return e6c
        }
        switch (parseInt(u7n)) {
        case 17:
            e6c.title = iy1x.name;
            e6c.author = (iy1x.radio || []).name;
            e6c.picUrl = iy1x.coverUrl;
            e6c.category = iy1x.radio.category;
            break;
        case 19:
            e6c.title = iy1x.name;
            e6c.author = l6f.BL7E(iy1x.artists);
            e6c.authors = l6f.BL7E(iy1x.artists, " / ");
            e6c.picUrl = iy1x.picUrl;
            break;
        case 13:
            e6c.title = iy1x.name;
            e6c.author = (iy1x.creator || []).nickname;
            e6c.picUrl = iy1x.coverImgUrl;
            break;
        case 18:
            e6c.title = iy1x.name;
            e6c.author = l6f.BL7E(iy1x.artists);
            e6c.picUrl = (iy1x.album || []).picUrl;
            break;
        case 20:
            e6c.title = iy1x.name;
            e6c.author = "";
            e6c.picUrl = iy1x.img1v1Url;
            break;
        case 21:
            e6c.title = iy1x.name;
            e6c.author = iy1x.artistName;
            e6c.authors = l6f.BL7E(iy1x.artists, " / ");
            e6c.picUrl = iy1x.newCover || iy1x.cover;
            break;
        case 70:
            e6c.title = iy1x.name;
            e6c.author = (iy1x.dj || []).nickname;
            e6c.picUrl = iy1x.picUrl;
            e6c.category = iy1x.category;
            break;
        default:
            break
        }
        return e6c
    };
    l6f.bUt6n = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l6f.VL2x = function(eG9x, oR2x, e6c) {
        var bM7F, bi7b, m6g;
        var hk9b = null;
        var xa5f = 0;
        if (!e6c) e6c = {};
        var BZ7S = function() {
            xa5f = e6c.leading === false ? 0 : +(new Date);
            hk9b = null;
            m6g = eG9x.apply(bM7F, bi7b);
            if (!hk9b) bM7F = bi7b = null
        };
        return function() {
            var fh9Y = +(new Date);
            if (!xa5f && e6c.leading === false) xa5f = fh9Y;
            var FH8z = oR2x - (fh9Y - xa5f);
            bM7F = this;
            bi7b = arguments;
            if (FH8z <= 0 || FH8z > oR2x) {
                if (hk9b) {
                    clearTimeout(hk9b);
                    hk9b = null
                }
                xa5f = fh9Y;
                m6g = eG9x.apply(bM7F, bi7b);
                if (!hk9b) bM7F = bi7b = null
            } else if (!hk9b && e6c.trailing !== false) {
                hk9b = setTimeout(BZ7S, FH8z)
            }
            return m6g
        }
    };
    l6f.Oo0x = function(eG9x, oR2x, pM3x) {
        var hk9b, bi7b, bM7F, Ew7p, m6g;
        var BZ7S = function() {
            var gE9v = new Date - Ew7p;
            if (gE9v < oR2x && gE9v >= 0) {
                hk9b = setTimeout(BZ7S, oR2x - gE9v)
            } else {
                hk9b = null;
                if (!pM3x) {
                    m6g = eG9x.apply(bM7F, bi7b);
                    if (!hk9b) bM7F = bi7b = null
                }
            }
        };
        return function() {
            bM7F = this;
            bi7b = arguments;
            Ew7p = new Date;
            var VI2x = pM3x && !hk9b;
            if (!hk9b) hk9b = setTimeout(BZ7S, oR2x);
            if (VI2x) {
                m6g = eG9x.apply(bM7F, bi7b);
                bM7F = bi7b = null
            }
            return m6g
        }
    };
    l6f.VH2x = function(g6a, hC0x) {
        if (g6a) {
            var g6a = g6a.firstElementChild;
            if (g6a) {
                g6a.firstElementChild && (g6a = g6a.firstElementChild);
                g6a.setAttribute("xlink:href", "/style/pc/svg/" + hC0x)
            }
        }
    };
    l6f.bUs6m = function(ev9m) {
        if (!ev9m || !ev9m.length) {
            return
        }
        ev9m = /^#(.+?)#$/.exec(ev9m)[1];
        ev9m = ev9m.replace(/\s/g, " ");
        v7o.bl7e("/api/act/detail", {
            type: "json",
            method: "post",
            data: k6e.cD8v({
                actname: ev9m
            }),
            onload: function(Q7J) {
                if (!Q7J || Q7J.code != 200 || !Q7J.act) {
                    n6h.ba7T.J7C({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + Q7J.act.actId)
                }
            },
            onerror: function(bZ7S) {
                n6h.ba7T.J7C({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    };
    l6f.cuO1x = function(ev9m) {
        if (!ev9m || !ev9m.length) {
            return
        }
        var VG2x = location.host;
        ev9m = /^#(.+?)#$/.exec(ev9m)[1];
        ev9m = ev9m.replace(/\s/g, " ");
        v7o.bl7e("/api/act/detail", {
            type: "json",
            method: "post",
            data: k6e.cD8v({
                actname: ev9m
            }),
            onload: function(Q7J) {
                if (!Q7J || Q7J.code != 200 || !Q7J.act) {
                    cx8p.ia0x("该话题暂未创建")
                } else {
                    cx8p.Dr7k(VG2x + "/activity?id=" + Q7J.act.actId)
                }
            },
            onerror: function(bZ7S) {
                cx8p.ia0x("操作失败，请稍后再试")
            }
        })
    };
    l6f.bjo5t = function(BW7P, td3x) {
        if (!BW7P || !td3x) return false;
        if (BW7P == td3x) return true;
        return l6f.bjo5t(BW7P, td3x.parentNode)
    };
    a6g.cN8F = function(bI7B, jj1x) {
        if (!bI7B) return null;
        if (!jj1x) return bI7B.firstChild;
        return a6g.F7y(bI7B, jj1x)[0]
    };
    l6f.bUr6l = function(iC1x) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(iC1x)
    };
    l6f.bUq6k = function(iC1x, VD2x) {
        VD2x = VD2x || "86";
        if (VD2x == "86") return /^\d{11}$/.test(iC1x);
        return /^\d+$/.test(iC1x)
    };
    l6f.cLQ5V = function(wb5g) {
        if (!wb5g) {
            return "0b"
        }
        var cuK1x = ["Bytes", "KB", "MB", "GB"];
        var bd7W = Math.floor(Math.log(wb5g) / Math.log(1024));
        return (wb5g / Math.pow(1024, Math.floor(bd7W))).toFixed(bd7W == 1 ? 0 : 1) + cuK1x[bd7W]
    };
    l6f.bUo6i = function(dP8H, fC9t, cuI1x) {
        if (!dP8H) return dP8H;
        var dv8n = k6e.fN9E(dP8H);
        if (dv8n <= fC9t) return dP8H;
        var bjK5P = dv8n - dP8H.length,
        bjM5R = dP8H.length - bjK5P;
        var fS9J = Math.ceil(fC9t / 2),
        cuE1x = fC9t,
        bUm6g = 0;
        if (bjK5P < fS9J) fS9J = fC9t - bjK5P;
        if (bjM5R < fC9t) fC9t = bjM5R + Math.ceil((fC9t - bjM5R) / 2);
        while (fS9J <= fC9t) {
            bUm6g = k6e.fN9E(dP8H.substr(0, fS9J));
            var bjU6O = cuE1x - bUm6g;
            if (bjU6O == 0) break;
            if (bjU6O == 1) {
                var cuC1x = k6e.fN9E(dP8H.charAt(fS9J));
                if (cuC1x == 1) {
                    fS9J++;
                    break
                } else {
                    break
                }
            }
            fS9J += Math.floor(bjU6O / 2)
        }
        return dP8H.substr(0, fS9J) + ( !! cuI1x ? "": "...")
    };
    l6f.cuB1x = function(br7k) {
        br7k = br7k || 10;
        var cP8H = "";
        for (var i = 0; i < br7k; i++) {
            cP8H += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cP8H
    };
    var cuA1x = /([A-Za-z0-9 \.\-\(\)\!\?])/,
    cuz1x = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
    cuy1x = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bUl6f = function(cuw1x) {
        var br7k = k6e.ED8v(1, 5),
        cuq1x = Math.random() < .5,
        jt1x = "";
        if (cuw1x) {
            if (cuq1x) {
                while (br7k >= 0) {
                    jt1x += cuy1x[k6e.ED8v(0, 500)];
                    br7k--
                }
            } else {
                jt1x = l6f.cuB1x(br7k)
            }
        } else {
            jt1x = k6e.RR1x(br7k)
        }
        return '<div class="soil">' + jt1x + "</div>"
    };
    l6f.bwR0x = function(es8k) {
        es8k = k6e.CY7R(es8k);
        try {
            var br7k = es8k.length,
            r6l = k6e.ED8v(1, br7k - 1);
            while (r6l < br7k) {
                if (cuz1x.test(es8k.charAt(r6l))) {
                    return k6e.dL8D(es8k.slice(0, r6l)) + bUl6f(true) + k6e.dL8D(es8k.slice(r6l))
                } else if (cuA1x.test(es8k.charAt(r6l))) {
                    return k6e.dL8D(es8k.slice(0, r6l)) + bUl6f() + k6e.dL8D(es8k.slice(r6l))
                } else {
                    r6l++
                }
            }
            return k6e.dL8D(es8k)
        } catch(e) {
            return k6e.dL8D(es8k)
        }
    };
    l6f.ban3x = function(lH1x, nm2x) {
        return "//nos.netease.com/" + lH1x + "/" + nm2x
    };
    l6f.cup1x = function(fR9I) {
        var dV8N = /(.+)(\.[^\.]+$)/.exec(fR9I);
        return dV8N ? {
            filename: dV8N[1],
            suffix: dV8N[2]
        }: {
            filename: fR9I || "",
            suffix: ""
        }
    };
    l6f.bUa6U = function(bw7p, ctK1x) {
        var dJ8B = [];
        k6e.be7X(bw7p,
        function(gK9B) {
            dJ8B.push(ctK1x(gK9B))
        });
        return dJ8B
    };
    var ctJ1x = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l6f.bTU6O = function(BO7H) {
        var i6c = NEJ.X({},
        BO7H);
        k6e.eQ9H(BO7H,
        function(p6j, L7E) {
            var bTT6N = ctJ1x[L7E];
            if (bTT6N) {
                i6c[bTT6N] = p6j
            }
        });
        var Vh2x = BO7H.creator || [];
        if (!k6e.eh8Z(Vh2x)) {
            Vh2x = [Vh2x]
        }
        if (Vh2x) {
            i6c.artists = [];
            k6e.be7X(Vh2x,
            function(p6j) {
                i6c.artists.push({
                    name: p6j.nickname || p6j.userName,
                    id: p6j.userId
                })
            })
        }
        if ( !! BO7H.aliaName) {
            i6c.alias = [BO7H.aliaName]
        }
        if ( !! BO7H.transName) {
            i6c.transNames = [BO7H.transName]
        }
        return i6c
    };
    l6f.ctp1x = function(Z7S) {
        return (Z7S || "").replace(/^https?:/, "")
    };
    l6f.He8W = function(cP8H) {
        if (!k6e.fO9F(cP8H)) return cP8H;
        var dJ8B = null;
        try {
            dJ8B = JSON.parse(cP8H)
        } catch(_e) {}
        return dJ8B
    };
    var cto1x = '<span class="s-fc7 f-tdn">${value}</span>';
    l6f.ctm1x = function(cI8A, vk5p, e6c) {
        e6c = e6c || {};
        if (!vk5p) {
            return k6e.dL8D(cI8A)
        }
        cI8A = k6e.CY7R(cI8A);
        var qi3x = [],
        bw7p = null,
        Xo2x = new RegExp(l6f.bUE6y(vk5p), "gi"),
        pI2x = e6c.tpl || cto1x;
        while (bw7p = Xo2x.exec(cI8A)) {
            var dV8N = {
                html: "",
                before: bw7p.index - 1,
                after: bw7p.index + bw7p[0].length
            };
            var Ha8S = a6g.eD9u(pI2x);
            dV8N.html = a6g.ce7X(Ha8S, {
                value: k6e.dL8D(bw7p[0])
            });
            qi3x.push(dV8N)
        }
        var bvD9u = qi3x.length,
        kS1x = {
            before: cI8A.length - 1,
            after: 0
        },
        dJ8B = "";
        for (var i = 0; i <= bvD9u; i++) {
            var hj9a, ex9o;
            hj9a = (qi3x[i - 1] || kS1x).after;
            ex9o = (qi3x[i] || kS1x).before;
            if (ex9o >= hj9a && hj9a >= 0 && ex9o <= cI8A.length - 1) {
                dJ8B += k6e.dL8D(cI8A.substring(hj9a, ex9o + 1))
            }
            if (qi3x[i]) {
                dJ8B += qi3x[i].html
            }
        }
        return dJ8B
    };
    l6f.kR1x = function() {
        if (!window.WM) {
            var g6a = document.createElement("script");
            var tC4G = window.location.hostname;
            var cMh5m = window.location.protocol;
            a6g.hc9T(g6a, "type", "text/javascript");
            a6g.hc9T(g6a, "src", "https://acstatic-dun.126.net/tool.min.js");
            g6a.onload = function(data) {
                initWatchman({
                    productNumber: "YD00000558929251",
                    onload: function(instance) {
                        window.WM = instance
                    }
                })
            };
            document.body.appendChild(g6a)
        }
    };
    l6f.mo2x = function(oO2x) {
        if (window.WM) {
            window.WM.getToken("bd5d2f973ef74cd2a61325a412ae54d9", oO2x)
        }
    };
    l6f.Co7h = function(oO2x) {
        if (window.WM) {
            window.WM.getToken("0b0cdd23ed1144a0b78de049edc09824", oO2x)
        }
    }
})(); (function() {
    var k6e = NEJ.P("nej.u");
    function ctg1x() {
        var Cr7k = function(iw1x) {
            if (iw1x < -128) {
                return Cr7k(128 - ( - 128 - iw1x))
            } else if (iw1x >= -128 && iw1x <= 127) {
                return iw1x
            } else if (iw1x > 127) {
                return Cr7k( - 129 + iw1x - 127)
            } else {
                throw new Error("1001")
            }
        };
        var csW1x = function(iw1x, bj7c) {
            return Cr7k(iw1x + bj7c)
        };
        var csU1x = function(bav3x, blw6q) {
            if (bav3x == null) {
                return null
            }
            if (blw6q == null) {
                return bav3x
            }
            var rV3x = [];
            var csQ1x = blw6q.length;
            for (var i = 0,
            br7k = bav3x.length; i < br7k; i++) {
                rV3x[i] = csW1x(bav3x[i], blw6q[i % csQ1x])
            }
            return rV3x
        };
        var csN1x = function(baw3x) {
            if (baw3x == null) {
                return baw3x
            }
            var rV3x = [];
            var csM1x = baw3x.length;
            for (var i = 0,
            br7k = csM1x; i < br7k; i++) {
                rV3x[i] = Cr7k(0 - baw3x[i])
            }
            return rV3x
        };
        var csL1x = function(blP6J, UL2x) {
            blP6J = Cr7k(blP6J);
            UL2x = Cr7k(UL2x);
            return Cr7k(blP6J ^ UL2x)
        };
        var bTz5E = function(UG2x, blV6P) {
            if (UG2x == null || blV6P == null || UG2x.length != blV6P.length) {
                return UG2x
            }
            var rV3x = [];
            var csG1x = UG2x.length;
            for (var i = 0,
            br7k = csG1x; i < br7k; i++) {
                rV3x[i] = csL1x(UG2x[i], blV6P[i])
            }
            return rV3x
        };
        var bTy5D = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var csE1x = function(dC8u) {
            var NN0x = [];
            NN0x.push(bTy5D[dC8u >>> 4 & 15]);
            NN0x.push(bTy5D[dC8u & 15]);
            return NN0x.join("")
        };
        var bTx5C = function(wb5g) {
            var br7k = wb5g.length;
            if (wb5g == null || br7k < 0) {
                return new String("")
            }
            var NN0x = [];
            for (var i = 0; i < br7k; i++) {
                NN0x.push(csE1x(wb5g[i]))
            }
            return NN0x.join("")
        };
        var bTv5A = function(baN3x) {
            if (baN3x == null || baN3x.length == 0) {
                return baN3x
            }
            var bml6f = new String(baN3x);
            var rV3x = [];
            var br7k = bml6f.length / 2;
            var bj7c = 0;
            for (var i = 0; i < br7k; i++) {
                var pt2x = parseInt(bml6f.charAt(bj7c++), 16) << 4;
                var px2x = parseInt(bml6f.charAt(bj7c++), 16);
                rV3x[i] = Cr7k(pt2x + px2x)
            }
            return rV3x
        };
        var bTu5z = function(cP8H) {
            if (cP8H == null || cP8H == undefined) {
                return cP8H
            }
            var Uo2x = encodeURIComponent(cP8H);
            var wb5g = [];
            var bTt5y = Uo2x.length;
            for (var i = 0; i < bTt5y; i++) {
                if (Uo2x.charAt(i) == "%") {
                    if (i + 2 < bTt5y) {
                        wb5g.push(bTv5A(Uo2x.charAt(++i) + "" + Uo2x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    wb5g.push(Uo2x.charCodeAt(i))
                }
            }
            return wb5g
        };
        var csw1x = function(yi5n) {
            var bd7W = 0;
            bd7W += (yi5n[0] & 255) << 24;
            bd7W += (yi5n[1] & 255) << 16;
            bd7W += (yi5n[2] & 255) << 8;
            bd7W += yi5n[3] & 255;
            return bd7W
        };
        var cMi5n = function(bd7W) {
            var yi5n = [];
            yi5n[0] = bd7W >>> 24 & 255;
            yi5n[1] = bd7W >>> 16 & 255;
            yi5n[2] = bd7W >>> 8 & 255;
            yi5n[3] = bd7W & 255;
            return yi5n
        };
        var cst1x = function(da8S, bmA6u, br7k) {
            var dJ8B = [];
            if (da8S == null || da8S.length == 0) {
                return dJ8B
            }
            if (da8S.length < br7k) {
                throw new Error("1003")
            }
            for (var i = 0; i < br7k; i++) {
                dJ8B[i] = da8S[bmA6u + i]
            }
            return dJ8B
        };
        var bmC6w = function(da8S, bmA6u, tb3x, css1x, br7k) {
            if (da8S == null || da8S.length == 0) {
                return tb3x
            }
            if (tb3x == null) {
                throw new Error("1004")
            }
            if (da8S.length < br7k) {
                throw new Error("1003")
            }
            for (var i = 0; i < br7k; i++) {
                tb3x[css1x + i] = da8S[bmA6u + i]
            }
            return tb3x
        };
        var csq1x = function(br7k) {
            var bw7p = [];
            for (var i = 0; i < br7k; i++) {
                bw7p[i] = 0
            }
            return bw7p
        };
        var csl1x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var NI0x = 64;
        var baV3x = 64;
        var bTn5s = 4;
        var crZ1x = function(si3x) {
            var bTl5q = [];
            if (si3x == null || si3x == undefined || si3x.length == 0) {
                return csq1x(baV3x)
            }
            if (si3x.length >= baV3x) {
                return cst1x(si3x, 0, baV3x)
            } else {
                for (var i = 0; i < baV3x; i++) {
                    bTl5q[i] = si3x[i % si3x.length]
                }
            }
            return bTl5q
        };
        var crT1x = function(bbh3x) {
            if (bbh3x == null || bbh3x.length % NI0x != 0) {
                throw new Error("1005")
            }
            var bnl6f = [];
            var bj7c = 0;
            var crQ1x = bbh3x.length / NI0x;
            for (var i = 0; i < crQ1x; i++) {
                bnl6f[i] = [];
                for (var j = 0; j < NI0x; j++) {
                    bnl6f[i][j] = bbh3x[bj7c++]
                }
            }
            return bnl6f
        };
        var crP1x = function(bTi5n) {
            var pt2x = bTi5n >>> 4 & 15;
            var px2x = bTi5n & 15;
            var bj7c = pt2x * 16 + px2x;
            return csl1x[bj7c]
        };
        var bTg5l = function(bnz6t) {
            if (bnz6t == null) {
                return null
            }
            var bTe5j = [];
            for (var i = 0,
            br7k = bnz6t.length; i < br7k; i++) {
                bTe5j[i] = crP1x(bnz6t[i])
            }
            return bTe5j
        };
        var bTd5i = function(Nx0x, si3x) {
            if (Nx0x == null) {
                return null
            }
            if (Nx0x.length == 0) {
                return []
            }
            if (Nx0x.length % NI0x != 0) {
                throw new Error("1005")
            }
            si3x = crZ1x(si3x);
            var bnG7z = si3x;
            var bnH7A = crT1x(Nx0x);
            var TJ1x = [];
            var crD1x = bnH7A.length;
            for (var i = 0; i < crD1x; i++) {
                var bnK7D = bTg5l(bnH7A[i]);
                bnK7D = bTg5l(bnK7D);
                var bnN7G = bTz5E(bnK7D, bnG7z);
                var crz1x = csU1x(bnN7G, csN1x(bnG7z));
                bnN7G = bTz5E(crz1x, si3x);
                bmC6w(bnN7G, 0, TJ1x, i * NI0x, NI0x);
                bnG7z = bnH7A[i]
            }
            var bSY5d = [];
            bmC6w(TJ1x, TJ1x.length - bTn5s, bSY5d, 0, bTn5s);
            var br7k = csw1x(bSY5d);
            if (br7k > TJ1x.length) {
                throw new Error("1006")
            }
            var rV3x = [];
            bmC6w(TJ1x, 0, rV3x, 0, br7k);
            return rV3x
        };
        var crn0x = function(bbA3x, L7E) {
            if (bbA3x == null) {
                return null
            }
            var bSX5c = new String(bbA3x);
            if (bSX5c.length == 0) {
                return []
            }
            var Nx0x = bTv5A(bSX5c);
            if (L7E == null || L7E == undefined) {
                throw new Error("1007")
            }
            var si3x = bTu5z(L7E);
            return bTd5i(Nx0x, si3x)
        };
        this.crl0x = function(bbA3x, L7E) {
            var bnY7R = crn0x(bbA3x, L7E);
            var Iw9n = new String(bTx5C(bnY7R));
            var By7r = [];
            var boh7a = Iw9n.length / 2;
            var bj7c = 0;
            for (var i = 0; i < boh7a; i++) {
                By7r.push("%");
                By7r.push(Iw9n.charAt(bj7c++));
                By7r.push(Iw9n.charAt(bj7c++))
            }
            return By7r.join("")
        };
        k6e.bUy6s = function(boi7b, L7E) {
            return k6e.crd0x(k6e.cDB3x(boi7b), L7E)
        };
        k6e.crd0x = function(boi7b, L7E) {
            var bnY7R = bTd5i(boi7b, bTu5z(L7E));
            var Iw9n = new String(bTx5C(bnY7R));
            var By7r = [];
            var boh7a = Iw9n.length / 2;
            var bj7c = 0;
            for (var i = 0; i < boh7a; i++) {
                By7r.push("%");
                By7r.push(Iw9n.charAt(bj7c++));
                By7r.push(Iw9n.charAt(bj7c++))
            }
            return By7r.join("")
        }
    }
    window.settmusic = (new ctg1x).crl0x
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    H7A = c6e("nej.ut"),
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    v7o = c6e("nej.j"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    L7E = "Search-tracks_",
    b6f;
    q6k.ft9k({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(Q7J) {
                return Q7J
            },
            onerror: function(Q7J, e6c) {
                if (Q7J.code == 407) {
                    e6c.onForbidden()
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
            filter: function(e6c, bk7d) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cqZ0x(parseInt(e6c.data.type)) || "suggest",
                    keyword: e6c.data.s,
                    offset: e6c.offset
                })
            },
            format: function(Q7J, e6c) {
                if (Q7J.abroad) {
                    try {
                        Q7J.result = JSON.parse(decodeURIComponent(settmusic(Q7J.result, q6k.sk)))
                    } catch(e) {}
                }
                Q7J.result = Q7J.result || {};
                var j6d, cF8x, if0x = [],
                qH3x = e6c.data.s || "",
                go9f = e6c.data.limit,
                u7n = parseInt(e6c.data.type) || 1,
                m6g = Q7J.result;
                switch (u7n) {
                case 1:
                    j6d = this.bSS5X(m6g.songs, e6c.data.hlpretag, e6c.data.hlposttag);
                    cF8x = m6g.songCount;
                    break;
                case 10:
                    j6d = m6g.albums;
                    cF8x = m6g.albumCount;
                    break;
                case 100:
                    j6d = m6g.artists;
                    cF8x = m6g.artistCount;
                    break;
                case 1e3:
                    j6d = m6g.playlists;
                    cF8x = m6g.playlistCount;
                    break;
                case 1002:
                    j6d = m6g.userprofiles;
                    cF8x = m6g.userprofileCount;
                    break;
                case 1004:
                    j6d = m6g.mvs;
                    cF8x = m6g.mvCount;
                    break;
                case 1014:
                    j6d = l6f.bUa6U(m6g.videos, l6f.bTU6O);
                    cF8x = m6g.videoCount;
                    break;
                case 1006:
                    j6d = this.bSS5X(m6g.songs, e6c.data.hlpretag, e6c.data.hlposttag);
                    cF8x = m6g.songCount;
                    break;
                case 1009:
                    var sr3x = m6g.djRadios;
                    if ( !! sr3x) {
                        k6e.be7X(sr3x,
                        function(C7v, r6l, cqV0x) {
                            C7v.xid = C7v.id;
                            C7v.id = C7v.id + "_rad"
                        });
                        if (sr3x.length) {
                            this.tp3x("radio_search-" + e6c.data.s, sr3x)
                        }
                    }
                    cF8x = Math.min(m6g.djprogramCount, 500);
                    j6d = m6g.djprograms || [];
                    if (e6c.data.isPub) {
                        k6e.oc2x(sr3x,
                        function(C7v, r6l, cqV0x) {
                            C7v.stype = 1;
                            j6d.unshift(C7v)
                        });
                        cF8x = Math.min(j6d.length, 500)
                    }
                    break
                }
                this.z7s("onsearchload", Q7J);
                if (j6d && j6d.length) {
                    for (var i = 0; i < go9f; i++) {
                        if (i < j6d.length) {
                            if0x.push(j6d[i])
                        } else {
                            if0x.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cF8x || 0, qH3x.length < 3 ? 500 : 5e3),
                    list: if0x
                }
            },
            onerror: function(Q7J, e6c) {
                e6c.onload(e6c, []);
                if (k6e.gZ9Q(e6c.onerror)) {
                    e6c.onerror(Q7J)
                }
            }
        }
    });
    q6k.IL9C = NEJ.C();
    b6f = q6k.IL9C.M7F(q6k.hO0x);
    b6f.cA8s = function() {
        this.cG8y()
    };
    b6f.cqT0x = function(L7E, e6c) {
        if (!L7E) return;
        if ( !! this.bSQ5V) v7o.kN1x(this.bSQ5V);
        this.bSQ5V = this.co8g("search-suggest", NEJ.X({
            data: {
                s: L7E,
                limit: 8
            }
        },
        e6c))
    };
    b6f.cqM0x = function(L7E, e6c) {
        if (!L7E) return;
        this.co8g("search-multimatch", NEJ.X({
            data: {
                s: L7E
            }
        },
        e6c))
    };
    b6f.bSS5X = function() {
        var cqK0x = function(hU0x, bSO5T, bSN5S) {
            var cqF0x = hU0x.match(new RegExp(bSO5T + "(.+?)" + bSN5S, "gi")),
            ck8c = 0;
            k6e.be7X(cqF0x,
            function(p6j) {
                ck8c += p6j.replace(new RegExp(bSO5T, "g"), "").replace(new RegExp(bSN5S, "g"), "").length
            });
            return ck8c
        };
        return function(jl1x, cqE0x, cqD0x) {
            var bSL5Q = [];
            k6e.be7X(jl1x,
            function(bm7f, bd7W) {
                bm7f = l6f.Bs7l(bm7f);
                var bbH3x = bm7f.lyrics || [],
                dv8n = bbH3x.length,
                ko1x = 0,
                cF8x = 4,
                bbI3x = {
                    l: 0,
                    v: 0
                },
                bpc7V;
                if (dv8n > 4) {
                    k6e.be7X(bbH3x,
                    function(hU0x, r6l) {
                        var bSK5P = cqK0x(hU0x, cqE0x, cqD0x);
                        if (bSK5P > bbI3x.v) {
                            bbI3x.v = bSK5P;
                            bbI3x.l = r6l
                        }
                    });
                    ko1x = bbI3x.l;
                    ko1x = Math.max(ko1x, 0);
                    bpc7V = dv8n - ko1x - 4;
                    if (bpc7V < 0) ko1x += bpc7V;
                    bm7f.lrcAbstractEnd = ko1x + cF8x - 1
                } else {
                    bm7f.lrcAbstractEnd = dv8n - 1
                }
                bm7f.lrcAbstractStart = ko1x;
                bm7f.indexId = (bbH3x && bbH3x.length ? "L": "NL") + bm7f.id;
                bSL5Q.push(bm7f)
            });
            return bSL5Q
        }
    } ();
    b6f.cqZ0x = function(u7n) {
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
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    v7o = c6e("nej.j"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    E7x = c6e("nm.m"),
    n6h = c6e("nm.l"),
    dx8p = c6e("nm.i"),
    N7G = c6e("nm.m.sch"),
    b6f,
    K7D;
    var bbL3x = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    N7G.Tl1x = NEJ.C();
    b6f = N7G.Tl1x.M7F(H7A.cL8D);
    b6f.cA8s = function(g6a) {
        this.cG8y();
        this.bW7P(g6a);
        this.T7M = q6k.IL9C.fP9G()
    };
    b6f.bW7P = function(g6a) {
        this.o6i = g6a;
        var j6d = a6g.F7y(g6a, "j-flag");
        this.ff9W = j6d[0];
        this.bpC7v = j6d[1];
        this.cC8u = j6d[2];
        this.nG2x = j6d[3];
        h6b.s6m(this.ff9W, "input", this.gv9m.f6b(this));
        h6b.s6m(this.ff9W, "keyup", this.gv9m.f6b(this));
        h6b.s6m(this.ff9W, "focus", this.hi9Z.f6b(this));
        h6b.s6m(this.bpC7v, "click", this.hi9Z.f6b(this));
        h6b.s6m(this.ff9W, "blur", this.bpQ8I.f6b(this));
        h6b.s6m(this.cC8u, "click", this.bbM3x.f6b(this));
        h6b.s6m(this.o6i, "keydown", this.bpS8K.f6b(this));
        h6b.s6m(this.o6i, "keypress", this.bbO3x.f6b(this));
        h6b.s6m(this.nG2x, "mouseover", this.Ti1x.f6b(this));
        h6b.s6m(this.nG2x, "mouseout", this.Ti1x.f6b(this));
        if (this.ff9W.value) {
            this.ff9W.value = ""
        }
        if (this.ff9W.style.opacity != null) {
            this.ff9W.style.opacity = 1
        }
    };
    b6f.gv9m = function(d6d) {
        if (d6d.type == "keyup" && d6d.keyCode == 8 || d6d.keyCode == 46) {
            this.JL9C()
        } else if (d6d.type == "input" || d6d.type == "propertychange") {
            setTimeout(this.JL9C.f6b(this), 0)
        }
    };
    b6f.hi9Z = function() {
        this.Br7k(this.bpC7v, !1);
        a6g.w7p(this.o6i, "m-srch-fcs");
        this.ff9W.focus();
        this.JL9C();
        a6g.w7p((a6g.F7y("g-topbar", "j-showoff") || [])[0], "f-hide")
    };
    b6f.bpQ8I = function() {
        if (!this.ff9W.value) {
            this.Br7k(this.bpC7v, !0)
        }
        var JN9E = a6g.F7y(this.nG2x, "slt");
        if (this.bbP3x(this.nG2x) && JN9E.length > 0 && a6g.t7m(JN9E[0], "type")) {
            var hC0x = JN9E[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hC0x)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.ff9W.value
                })
            }
            this.bqb8T(JN9E[0].href)
        }
        this.Br7k(this.nG2x, !1);
        a6g.y7r(this.o6i, "m-srch-fcs")
    };
    b6f.Br7k = function(g6a, mL2x) {
        a6g.bb7U(g6a, "display", !mL2x ? "none": "")
    };
    b6f.bbP3x = function(g6a) {
        return a6g.dm8e(g6a, "display") != "none"
    };
    b6f.JL9C = function() {
        var cqt0x = function(iC1x) {
            iC1x = k6e.CY7R(iC1x);
            var eF9w = this.o6i.clientWidth > 250 ? 41 : 17;
            if (l6f.Wo2x(iC1x) > eF9w) {
                iC1x = l6f.Dd7W(iC1x, eF9w) + "..."
            }
            return k6e.dL8D(iC1x)
        };
        var bbR3x = function(m6g) {
            return m6g.songs && m6g.songs.length || m6g.albums && m6g.albums.length || m6g.artists && m6g.artists.length || m6g.playlists && m6g.playlists.length
        };
        var oO2x = function(vk5p, d6d) {
            if (!l6f.bUH6B(this.ff9W) || l6f.kD1x(this.ff9W.value)) {
                this.Br7k(this.nG2x, !1);
                return
            }
            d6d.keyword = k6e.dL8D(vk5p);
            var dZ8R = a6g.ce7X("m-search-suggest", d6d, {
                mark: l6f.ctm1x.ey9p(this, vk5p),
                cutStr: cqt0x.f6b(this)
            }),
            uD4H = d6d.result.order;
            this.nG2x.innerHTML = dZ8R;
            this.Br7k(this.nG2x, bbR3x(d6d.result) ? !0 : !1);
            if ( !! uD4H && !!uD4H.length && bbL3x[uD4H[0]]) {
                this.bqj8b = {
                    keyword: vk5p,
                    type: bbL3x[uD4H[0]]
                }
            }
        };
        var cqp0x = function() {
            this.Br7k(this.nG2x, !1);
            return
        };
        return function() {
            var C7v = this.ff9W.value;
            if (l6f.kD1x(C7v)) {
                this.Br7k(this.nG2x, !1);
                return
            }
            this.T7M.cqT0x(C7v, {
                onload: oO2x.f6b(this, C7v),
                onForbidden: cqp0x.f6b(this)
            })
        }
    } ();
    b6f.bbO3x = function(d6d) {
        if (d6d.keyCode != 13) return;
        var JN9E = a6g.F7y(this.nG2x, "slt");
        if (this.bbP3x(this.nG2x) && JN9E.length > 0) {
            this.bqb8T(JN9E[0].href);
            this.Br7k(this.nG2x, !1);
            return
        }
        this.bbM3x();
        this.Br7k(this.nG2x, !1)
    };
    b6f.bpS8K = function(d6d) {
        if (!this.bbP3x(this.nG2x)) return;
        var j6d = a6g.F7y(this.nG2x, "xtag"),
        dv8n = j6d.length,
        r6l = k6e.do8g(j6d,
        function(p6j) {
            return a6g.bG7z(p6j, "slt")
        });
        switch (d6d.keyCode) {
        case 38:
            if (r6l >= 0) a6g.y7r(j6d[r6l], "slt");
            a6g.w7p(j6d[r6l <= 0 ? dv8n - 1 : r6l - 1], "slt");
            break;
        case 40:
            if (r6l >= 0) a6g.y7r(j6d[r6l], "slt");
            a6g.w7p(j6d[(r6l + 1) % dv8n], "slt");
            break
        }
    };
    b6f.Ti1x = function(d6d) {
        if (!this.bbP3x(this.nG2x)) return;
        var Te1x, G7z = h6b.Y7R(d6d),
        j6d = a6g.F7y(this.nG2x, "xtag");
        if (G7z.tagName.toLowerCase() == "a") Te1x = G7z;
        else if (G7z.parentNode.tagName.toLowerCase() == "a") Te1x = G7z.parentNode;
        if (!Te1x) return;
        k6e.be7X(j6d,
        function(p6j) {
            a6g.y7r(p6j, "slt");
            a6g.t7m(p6j, "type", "")
        });
        if (d6d.type == "mouseout") return;
        a6g.w7p(Te1x, "slt");
        a6g.t7m(Te1x, "type", "mouse")
    };
    b6f.bbM3x = function() {
        var dW8O = location.hash,
        r6l = dW8O.indexOf("?"),
        bx7q = k6e.hd9U(dW8O.substring(r6l + 1));
        bx7q.s = this.ff9W.value;
        if (l6f.kD1x(bx7q.s)) return;
        if (!bx7q.type && this.bqj8b && this.bqj8b.keyword == bx7q.s) {
            bx7q.type = this.bqj8b.type
        }
        this.bqb8T("/search/#/?" + k6e.cD8v(bx7q));
        this.ff9W.blur()
    };
    b6f.bqb8T = function(Z7S) {
        if (location.dispatch2) {
            location.dispatch2(Z7S)
        } else {
            location.href = Z7S
        }
    };
    N7G.Tl1x.cql0x = function() {
        var j6d = a6g.F7y(document.body, "j-suggest");
        k6e.be7X(j6d,
        function(p6j) {
            new N7G.Tl1x(p6j)
        })
    };
    N7G.Tl1x.cql0x()
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    H7A = c6e("nej.ut"),
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    v7o = c6e("nej.j"),
    q6k = c6e("nm.d"),
    b6f;
    q6k.ft9k({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(Q7J) {
                return {
                    total: Q7J.size || 0,
                    list: Q7J.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(Q7J) {
                return {
                    total: Q7J.size || 0,
                    list: Q7J.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(Q7J) {
                return Q7J.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(Q7J, e6c) {
                if (e6c.offset == 0) {
                    var qv3x = Q7J.data[0];
                    this.z7s("onfirstload", qv3x);
                    Q7J.data.splice(0, 1);
                    return Q7J.data
                } else {
                    return Q7J.data
                }
            }
        }
    });
    q6k.Ft8l = NEJ.C();
    b6f = q6k.Ft8l.M7F(q6k.hO0x);
    b6f.cA8s = function() {
        this.cG8y()
    };
    b6f.bqD8v = function() {
        var uc4g = "LOCAL_FLAG";
        return function(u7n, cqk0x) {
            var i6c = this.Ie8W(uc4g, {});
            if (i6c[u7n]) {
                return true
            } else {
                if (!cqk0x) {
                    i6c[u7n] = true;
                    this.yf5k(uc4g, i6c)
                }
                return false
            }
        }
    } ()
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ut"),
    bqF8x;
    if ( !! P7I.oF2x) return;
    P7I.oF2x = NEJ.C();
    bqF8x = P7I.oF2x.M7F(P7I.cL8D);
    bqF8x.bo7h = function() {
        var cqj0x = function(d6d) {
            d6d.matched = d6d.source == d6d.target
        };
        return function(e6c) {
            e6c.oncheck = e6c.oncheck || cqj0x;
            this.bq7j(e6c);
            this.bV7O = e6c.list;
            this.iN1x = e6c.dataset || "id";
            this.ly1x = e6c.selected || "js-selected"
        }
    } ();
    bqF8x.oK2x = function(C7v) {
        var G7z, d6d = {
            target: C7v
        };
        k6e.be7X(this.bV7O,
        function(g6a) {
            delete d6d.matched;
            d6d.source = a6g.t7m(g6a, this.iN1x);
            this.z7s("oncheck", d6d);
            if (!d6d.matched) {
                a6g.y7r(g6a, this.ly1x)
            } else {
                G7z = g6a;
                a6g.w7p(g6a, this.ly1x)
            }
        },
        this);
        return G7z
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    P7I = c6e("nej.ut"),
    qf3x;
    if ( !! P7I.dk8c) return;
    P7I.dk8c = NEJ.C();
    qf3x = P7I.dk8c.M7F(P7I.cL8D);
    qf3x.cA8s = function() {
        this.jb1x = {};
        this.cG8y();
        this.bJ7C()
    };
    qf3x.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.bqW8O = e6c.umi || "";
        this.Ez7s = e6c.dispatcher;
        this.Nj0x = e6c.composite || bc7V;
        this.byQ0x({
            onshow: this.fj9a.f6b(this),
            onhide: this.kz1x.f6b(this),
            onrefresh: this.ez9q.f6b(this),
            onmessage: this.sk3x.f6b(this),
            onbeforehide: this.cqg0x.f6b(this)
        })
    };
    qf3x.bC7v = function() {
        delete this.bqW8O;
        this.jb1x = {};
        this.bH7A()
    };
    qf3x.xe5j = function(d6d) {
        if ( !! d6d) d6d.stopped = !0
    };
    qf3x.bJ7C = bu7n;
    qf3x.fj9a = bu7n;
    qf3x.kz1x = bu7n;
    qf3x.ez9q = bu7n;
    qf3x.sk3x = bu7n;
    qf3x.cqg0x = bu7n;
    qf3x.nK2x = function(nY2x, bF7y, fq9h) {
        this.Ez7s.brl8d({
            to: nY2x,
            mode: fq9h || 0,
            data: bF7y,
            from: this.bqW8O
        })
    };
    qf3x.cMm5r = function(u7n, i6c) {
        this.Ez7s.EG8y(u7n, {
            from: this.bqW8O,
            data: i6c
        })
    };
    qf3x.cMn5s = function() {
        this.Ez7s.nP2x.apply(this.Ez7s, arguments)
    };
    qf3x.cqd0x = function() {
        return this.jb1x
    };
    a6g.bcb3x = function() {
        if ( !! window.dispatcher) {
            dispatcher.bSD5I.apply(dispatcher, arguments)
        }
    }
})(); (function() {
    var c6e = NEJ.P,
    bu7n = NEJ.F,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ut"),
    Be7X;
    if ( !! P7I.dp8h) return;
    P7I.dp8h = NEJ.C();
    Be7X = P7I.dp8h.M7F(P7I.dk8c);
    Be7X.cpX0x = function(e6c) {
        var bI7B;
        if (!bI7B) {
            var i6c = e6c.input || bc7V;
            bI7B = a6g.A7t(i6c.parent)
        }
        if (!bI7B) {
            var i6c = e6c.data || bc7V;
            bI7B = a6g.A7t(i6c.parent)
        }
        if (!bI7B) {
            bI7B = a6g.A7t(e6c.parent)
        }
        return bI7B
    };
    Be7X.fj9a = function(e6c) {
        var bI7B = this.cpX0x(e6c);
        if ( !! bI7B && !!this.o6i) bI7B.appendChild(this.o6i);
        this.gN9E(e6c);
        this.bSC5H("onshow", e6c);
        this.ez9q(e6c)
    };
    Be7X.ez9q = function(e6c) {
        this.gl9c(e6c);
        this.bSC5H("onrefresh", e6c)
    };
    Be7X.kz1x = function() {
        this.lP1x();
        this.cpU0x();
        a6g.nf2x(this.o6i)
    };
    Be7X.bSB5G = function() {
        var gS9J = /^onshow|onrefresh|delay$/;
        return function(cn8f) {
            return gS9J.test(cn8f)
        }
    } ();
    Be7X.bSA5F = bu7n;
    Be7X.bSC5H = function() {
        var bSz5E = function(bx7q, e6c, cn8f, oy2x) {
            if (this.bSB5G(oy2x)) return;
            if ( !! bx7q) cn8f += (cn8f.indexOf("?") > 1 ? "&": "?") + bx7q;
            var cT8L = this.bSA5F(oy2x, e6c) || {};
            cT8L.location = e6c;
            cT8L.parent = this.jb1x[oy2x];
            this.Ez7s.iS1x(cn8f, {
                input: cT8L
            })
        };
        return function(u7n, e6c) {
            if (!e6c.nodelay) {
                if ( !! this.Nj0x.delay) return;
                var bSy5D = this.Nj0x[u7n] || bc7V;
                if (bSy5D.delay) return
            }
            var bx7q = k6e.cD8v(e6c.param) || "";
            if (u7n == "onrefresh") {
                k6e.eQ9H(this.Nj0x, bSz5E.f6b(this, bx7q, e6c))
            }
            k6e.eQ9H(bSy5D, bSz5E.f6b(this, bx7q, e6c))
        }
    } ();
    Be7X.cpU0x = function() {
        var DJ7C = function(cn8f, oy2x) {
            if (!this.bSB5G(oy2x)) this.Ez7s.bt7m(cn8f)
        };
        return function() {
            k6e.eQ9H(this.Nj0x, DJ7C, this);
            k6e.eQ9H(this.Nj0x.onshow, DJ7C, this);
            k6e.eQ9H(this.Nj0x.onrefresh, DJ7C, this)
        }
    } ()
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    H7A = c6e("nej.ut"),
    v7o = c6e("nej.j"),
    k6e = c6e("nej.u"),
    E7x = c6e("nm.m"),
    l6f = c6e("nm.x"),
    q6k = c6e("nm.d"),
    b6f,
    K7D;
    E7x.SH1x = NEJ.C();
    b6f = E7x.SH1x.M7F(H7A.cL8D);
    b6f.cA8s = function() {
        this.cG8y();
        this.o6i = a6g.A7t("g-topbar");
        var j6d = a6g.F7y(this.o6i, "j-tflag");
        this.bsm8e = j6d[0];
        this.Gj8b = j6d[1];
        this.bSx5C = j6d[2];
        this.bst8l = j6d[3];
        this.cpM0x = H7A.oF2x.B7u({
            list: this.bsm8e.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bsC8u = H7A.oF2x.B7u({
            list: this.bst8l.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bY7R([[this.o6i, "click", this.SB1x.f6b(this)], [this.Gj8b, "click", this.cM8E.f6b(this)], [this.Gj8b, "mouseout", this.bSw5B.f6b(this, 0)], [this.Gj8b, "mouseover", this.bSw5B.f6b(this, 1)]]);
        window.scrollTopbar = this.cpB0x.f6b(this);
        window.matchNav = this.bSs5x.f6b(this);
        window.polling = this.wV5a.f6b(this);
        this.bsW8O = q6k.Ft8l.B7u();
        this.cpy0x();
        this.MX0x();
        var bx7q = k6e.hd9U(location.href.split("?")[1]) || {};
        if (bx7q.market) {
            a6g.A7t("topbar-download-link").href = "/download?market=" + bx7q.market
        }
        var btb9S = a6g.F7y(this.o6i, "j-showoff");
        if (btb9S && !this.bsW8O.bqD8v("newMvSearch")) {
            a6g.y7r(btb9S[0], "f-hide");
            window.setTimeout(function() {
                a6g.w7p(btb9S[0], "f-hide")
            },
            5e3)
        }
        l6f.kR1x()
    };
    b6f.wV5a = function(d6d) {
        var dW8O = l6f.OK0x();
        if (!/^\/msg/.test(dW8O)) {
            var yB6v = 0;
            yB6v += d6d.comment;
            yB6v += d6d.forward;
            yB6v += d6d.msg;
            yB6v += d6d.notice;
            if (yB6v > 0) {
                yB6v = yB6v > 99 ? "99+": yB6v;
                this.Su1x.innerText = yB6v;
                this.MU0x.innerText = yB6v;
                a6g.y7r(this.Su1x, "f-hide");
                a6g.y7r(this.MU0x, "f-hide");
                this.bcl4p = true
            } else {
                a6g.w7p(this.Su1x, "f-hide");
                a6g.w7p(this.MU0x, "f-hide");
                this.bcl4p = false
            }
            var fg9X = "/at";
            if (d6d.notice) fg9X = "/notify";
            if (d6d.comment) fg9X = "/comment";
            if (d6d.msg > 0) fg9X = "/private";
            if (d6d.forward > 0) fg9X = "/at";
            this.MU0x.parentNode.href = "/msg/#" + fg9X
        } else {
            this.MU0x.parentNode.href = "javascript:;";
            a6g.w7p(this.Su1x, "f-hide");
            a6g.w7p(this.MU0x, "f-hide");
            this.bcl4p = false
        }
        var j6d = a6g.F7y(this.bsm8e, "j-t");
        if (!/^\/friend/.test(dW8O)) {
            if (j6d && j6d.length) {
                a6g.bb7U(j6d[0], "display", d6d.event > 0 ? "": "none")
            }
        } else {
            a6g.bb7U(j6d[0], "display", "none")
        }
    };
    b6f.cM8E = function(d6d) {
        var g6a = h6b.Y7R(d6d, "d:action");
        if (g6a) {
            switch (a6g.t7m(g6a, "action")) {
            case "login":
                h6b.cr8j(d6d);
                var u7n = a6g.t7m(g6a, "type");
                if (u7n) {
                    if (u7n == "sina" || u7n == "tencent") {
                        this.Cc7V = g6a.href;
                        l6f.Co7h(this.lA1x.f6b(this));
                        this.Sp1x = top.open()
                    } else top.login(u7n == "mobile" ? 0 : 3)
                } else {
                    top.login()
                }
                break;
            case "logout":
                h6b.cr8j(d6d);
                top.logout();
                break;
            case "viewStore":
                if (!this.bsW8O.bqD8v("storeNew")) {
                    a6g.w7p(this.cMq5v, "f-vhide")
                }
                break;
            case "viewLevel":
                if (!this.bsW8O.bqD8v("levelNew")) {
                    a6g.w7p(this.cMr5w, "f-vhide")
                }
                break
            }
        }
    };
    b6f.lA1x = function(cq8i) {
        this.Cc7V += "&checkToken=" + cq8i || "";
        this.Sp1x.location.href = this.Cc7V
    };
    b6f.SB1x = function(d6d) {
        var g6a = h6b.Y7R(d6d, "d:action");
        if (!g6a) return;
        var W7P = a6g.t7m(g6a, "action");
        switch (W7P) {
        case "bilog":
            var btV9M = a6g.t7m(g6a, "logAction"),
            btY9P = a6g.t7m(g6a, "logJson");
            window.log(btV9M, btY9P);
            break
        }
    };
    b6f.bSw5B = function(MS0x, d6d) {
        if (this.bub9S) {
            this.bub9S.style.display = !MS0x ? "none": ""; (MS0x || !this.bcl4p ? a6g.w7p: a6g.y7r).call(window, this.Su1x, "f-hide")
        }
    };
    b6f.cpB0x = function(gr9i) {
        a6g.bb7U(this.o6i, "top", -gr9i + "px")
    };
    b6f.bSs5x = function(fg9X, cpu0x) {
        this.cpM0x.oK2x(fg9X);
        if (fg9X == "discover") {
            a6g.w7p(this.bSx5C, "f-hide");
            a6g.y7r(this.bst8l, "f-hide");
            window.g_topBarHeight = 105;
            this.bsC8u.oK2x(cpu0x)
        } else {
            a6g.y7r(this.bSx5C, "f-hide");
            a6g.w7p(this.bst8l, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b6f.cpy0x = function() {
        var eI9z = a6g.A7t("g_iframe");
        if (!eI9z) return;
        var gL9C = eI9z.contentWindow.document.getElementById("g_top");
        this.bSs5x(a6g.t7m(gL9C, "module"), a6g.t7m(gL9C, "sub"))
    };
    var bcm4q = {},
    bSp5u = /\/\/\w+/,
    cps0x = {
        avatarUrl: function(a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bSp5u, "") !== b.replace(bSp5u, "")
        },
        userId: true,
        nickname: true,
        reward: true,
        topic: true,
        djStatus: true
    };
    b6f.cpq0x = function(wJ5O) {
        var ot2x = k6e.do8g(cps0x,
        function(C7v, L7E) {
            if (k6e.gZ9Q(C7v)) {
                return C7v(wJ5O[L7E], bcm4q[L7E])
            } else {
                return wJ5O[L7E] !== bcm4q[L7E]
            }
        });
        bcm4q = wJ5O;
        return wJ5O[ot2x]
    };
    b6f.MX0x = function() {
        var dt8l = GUser || {},
        cpp0x = GUserAcc || {};
        if (dt8l && dt8l.userId) {
            var bSn5s = NEJ.X(dt8l, cpp0x);
            if (this.cpq0x(bSn5s)) {
                a6g.dF8x(this.Gj8b, "m-topbar-user-login", bSn5s)
            }
        } else {
            bcm4q = {};
            this.Gj8b.innerHTML = a6g.is1x("m-topbar-user-unlogin");
            var j6d = a6g.F7y(this.bsm8e, "j-t");
            a6g.bb7U(j6d[0], "display", "none")
        }
        a6g.y7r(this.Gj8b, "f-hide");
        this.bcl4p = false;
        var j6d = a6g.F7y(this.Gj8b, "j-uflag");
        if (dt8l && dt8l.userId) {
            this.Su1x = j6d.shift();
            this.bub9S = j6d.shift();
            this.MU0x = j6d.shift()
        } else {
            this.bub9S = j6d.shift()
        }
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    h6b = c6e("nej.v"),
    H7A = c6e("nej.ut"),
    q6k = c6e("nm.d"),
    b6f,
    K7D;
    q6k.ft9k({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(Q7J) {
                h6b.z7s(q6k.tI4M, "message", Q7J)
            }
        }
    });
    q6k.tI4M = NEJ.C();
    b6f = q6k.tI4M.M7F(q6k.hO0x);
    b6f.bcp4t = function() {
        this.co8g("polling-get", {})
    };
    b6f.wA5F = function() {
        var eo8g;
        return function() {
            if ( !! eo8g) return;
            eo8g = window.setInterval(this.bcp4t.f6b(this), 1e5);
            this.bcp4t()
        }
    } ();
    H7A.fQ9H.B7u({
        event: "message",
        element: q6k.tI4M
    })
})();
var io = "undefined" === typeof module ? {}: module.exports; (function() { (function(exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) {
            var uri = io.util.parseUri(host),
            uuri,
            socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain: global.location.hostname);
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
            return socket.of(uri.path.length > 1 ? uri.path: "")
        }
    })("object" === typeof module ? module.exports: this.io = {},
    this); (function(exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) {
            var m = re.exec(str || ""),
            uri = {},
            i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function(uri) {
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
        util.query = function(base, addition) {
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
        util.chunkQuery = function(qs) {
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
        util.load = function(fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function(element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function(xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch(e) {}
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function() {
                pageLoaded = true
            })
        }
        util.defer = function(fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function() {
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
        util.mixin = function(ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function(ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray ||
        function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function(arr, arr2) {
            var ret = [],
            longest = arr.length > arr2.length ? arr: arr2,
            shortest = arr.length > arr2.length ? arr2: arr;
            for (var i = 0,
            l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function(arr, o, i) {
            for (var j = arr.length,
            i = i < 0 ? i + j < 0 ? 0 : i + j: i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        };
        util.toArray = function(enu) {
            var arr = [];
            for (var i = 0,
            l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest &&
        function() {
            try {
                var a = new XMLHttpRequest
            } catch(e) {
                return false
            }
            return a.withCredentials != undefined
        } ();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io: module.exports, this); (function(exports, io) {
        exports.EventEmitter = EventEmitter;
        function EventEmitter() {}
        EventEmitter.prototype.on = function(name, fn) {
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
        EventEmitter.prototype.once = function(name, fn) {
            var self = this;
            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function(name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0,
                    l = list.length; i < l; i++) {
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
        EventEmitter.prototype.removeAllListeners = function(name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function(name) {
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
        EventEmitter.prototype.emit = function(name) {
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
                for (var i = 0,
                l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io: module.exports, "undefined" != typeof io ? io: module.parent.exports); (function(exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};
        function f(n) {
            return n < 10 ? "0" + n: n
        }
        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z": null
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
            return escapable.test(string) ? '"' + string.replace(escapable,
            function(a) {
                var c = meta[a];
                return typeof c === "string" ? c: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
            }) + '"': '"' + string + '"'
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
                    v = partial.length === 0 ? "[]": gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]": "[" + partial.join(",") + "]";
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
                                partial.push(quote(k) + (gap ? ": ": ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": ": ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}": gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}": "{" + partial.join(",") + "}";
                gap = mind;
                return v
            }
        }
        JSON.stringify = function(value, replacer, space) {
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
        JSON.parse = function(text, reviver) {
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
                text = text.replace(cx,
                function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                },
                "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io: module.exports, typeof JSON !== "undefined" ? JSON: undefined); (function(exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
        indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) {
            var type = indexOf(packets, packet.type),
            id = packet.id || "",
            endpoint = packet.endpoint || "",
            ack = packet.ack,
            data = null;
            switch (packet.type) {
            case "error":
                var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                adv = packet.advice ? indexOf(advice, packet.advice) : "";
                if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv: "");
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
            var encoded = [type, id + (ack == "data" ? "+": ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function(packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0,
            l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) {
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
                } catch(e) {}
                packet.args = packet.args || [];
                break;
            case "json":
                try {
                    packet.data = JSON.parse(data)
                } catch(e) {}
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
                        } catch(e) {}
                    }
                }
                break;
            case "disconnect":
            case "heartbeat":
                break
            }
            return packet
        };
        parser.decodePayload = function(data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1,
                length = ""; i < data.length; i++) {
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
    })("undefined" != typeof io ? io: module.exports, "undefined" != typeof io ? io: module.parent.exports); (function(exports, io) {
        exports.Transport = Transport;
        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() {
            return true
        };
        Transport.prototype.onData = function(data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0,
                    l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function(packet) {
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
        Transport.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function() {
                    self.onDisconnect()
                },
                this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function() {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function() {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function() {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function(packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function(heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        };
        Transport.prototype.onOpen = function() {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function() {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function() {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function(socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io: module.exports, "undefined" != typeof io ? io: module.parent.exports); (function(exports, io, global) {
        exports.Socket = Socket;
        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document: false,
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
                io.util.on(global, "beforeunload",
                function() {
                    self.disconnectSync()
                },
                false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) {
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
        Socket.prototype.publish = function() {
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
        Socket.prototype.handshake = function(fn) {
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
            var url = ["http" + (options.secure ? "s": "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false; ! self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function(override) {
            var transports = override || this.transports,
            match;
            for (var i = 0,
            transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function(fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function() {
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
                    self.transport.ready(self,
                    function() {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function() {
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
                            },
                            self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect",
                function() {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() {
                self.transport.onClose()
            },
            this.heartbeatTimeout)
        };
        Socket.prototype.packet = function(data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function(v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function() {
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
        Socket.prototype.disconnectSync = function() {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s": "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function() {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function() {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function() {
            this.open = true
        };
        Socket.prototype.onClose = function() {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function(packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function(err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason: err)
        };
        Socket.prototype.onDisconnect = function(reason) {
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
        Socket.prototype.reconnect = function() {
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
                if (self.reconnectionAttempts++>=maxAttempts) {
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
    })("undefined" != typeof io ? io: module.exports, "undefined" != typeof io ? io: module.parent.exports, this); (function(exports, io) {
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
        SocketNamespace.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function(packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function(data, fn) {
            var packet = {
                type: this.flags.json ? "json": "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function(name) {
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
        SocketNamespace.prototype.disconnect = function() {
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
        SocketNamespace.prototype.onPacket = function(packet) {
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
        Flag.prototype.send = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io: module.exports, "undefined" != typeof io ? io: module.parent.exports); (function(exports, io, global) {
        exports.websocket = WS;
        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() {
            var query = io.util.query(this.socket.options.query),
            self = this,
            Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function(ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function() {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function(e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function(data) {
                var self = this;
                setTimeout(function() {
                    self.websocket.send(data)
                },
                0);
                return this
            }
        } else {
            WS.prototype.send = function(data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function(arr) {
            for (var i = 0,
            l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function() {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function(e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function() {
            return this.socket.options.secure ? "wss": "ws"
        };
        WS.check = function() {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function() {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport: module.exports, "undefined" != typeof io ? io: module.parent.exports, this); (function(exports, io) {
        exports.flashsocket = Flashsocket;
        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() {
            var self = this,
            args = arguments;
            WebSocket.bcq4u(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function() {
            var self = this,
            args = arguments;
            WebSocket.bcq4u(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function() {
            WebSocket.Sf1x.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() {
                var options = socket.options,
                port = options["flash policy port"],
                path = ["http" + (options.secure ? "s": "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure": "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.buT9K();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function() {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function() {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport: module.exports, "undefined" != typeof io ? io: module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function() {
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
            l,
            Q,
            E,
            B,
            J = false,
            a = false,
            n,
            G,
            m = true,
            M = function() {
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
                        } catch(Z) {}
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
            } (),
            k = function() {
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
                        j.attachEvent(x,
                        function() {
                            if (j.readyState == "complete") {
                                j.detachEvent(x, arguments.callee);
                                f()
                            }
                        });
                        if (O == top) { (function() {
                                if (J) {
                                    return
                                }
                                try {
                                    j.documentElement.doScroll("left")
                                } catch(X) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                    }
                    if (M.wk) { (function() {
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
            } ();
            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch(aa) {
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
                                O.onload = function() {
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
                    var Y = 0; (function() {
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
                return ! a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
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
                        ae.style.display = "none"; (function() {
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
                    Y.style.display = "none"; (function() {
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
                                if (! (ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
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
                        X.style.display = "none"; (function() {
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
                } catch(Y) {}
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
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true: false
            }
            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad: "screen";
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
                var Y = X ? "visible": "hidden";
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
            var d = function() {
                if (M.ie && M.win) {
                    window.attachEvent("onunload",
                    function() {
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
            } ();
            return {
                registerObject: function(ab, X, aa, Z) {
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
                getObjectById: function(X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function() {
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
                switchOffAutoHideShow: function() {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function() {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function(Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function(X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function(aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function(aa) {
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
                expressInstallCallback: function() {
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
        } ()
    } (function() {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function() {},
                error: function() {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.hp0x = WebSocket.cpf0x++;
            WebSocket.bSj5o[self.hp0x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.mE2x = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.bcq4u(function() {
                    WebSocket.qS3x.create(self.hp0x, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            },
            0)
        };
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.qS3x.send(this.hp0x, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.qS3x.close(this.hp0x)
        };
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (! (type in this.mE2x)) {
                this.mE2x[type] = []
            }
            this.mE2x[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (! (type in this.mE2x)) return;
            var events = this.mE2x[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.mE2x[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.coZ0x = function(flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bSi5n(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bSi5n("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.coX0x("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bSi5n = function(type) {
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
        WebSocket.prototype.coX0x = function(type, data) {
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
        WebSocket.qS3x = null;
        WebSocket.bSj5o = {};
        WebSocket.Sf1x = [];
        WebSocket.cpf0x = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.bcq4u(function() {
                WebSocket.qS3x.loadManualPolicyFile(url)
            })
        };
        WebSocket.buT9K = function() {
            if (WebSocket.qS3x) return;
            if (WebSocket.coW0x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.coW0x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.coV0x()) {
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
            },
            null,
            function(e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cMu5z = function() {
            setTimeout(function() {
                WebSocket.qS3x = document.getElementById("webSocketFlash");
                WebSocket.qS3x.setCallerUrl(location.href);
                WebSocket.qS3x.setDebug( !! window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Sf1x.length; ++i) {
                    WebSocket.Sf1x[i]()
                }
                WebSocket.Sf1x = []
            },
            0)
        };
        WebSocket.cMv5A = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.qS3x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bSj5o[events[i].webSocketId].coZ0x(events[i])
                    }
                } catch(e) {
                    console.error(e)
                }
            },
            0);
            return true
        };
        WebSocket.cMw5B = function(message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.ed8V = function(message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.bcq4u = function(task) {
            if (WebSocket.qS3x) {
                task()
            } else {
                WebSocket.Sf1x.push(task)
            }
        };
        WebSocket.coV0x = function() {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true: false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load",
                function() {
                    WebSocket.buT9K()
                },
                false)
            } else {
                window.attachEvent("onload",
                function() {
                    WebSocket.buT9K()
                })
            }
        }
    })(); (function(exports, io, global) {
        exports.XHR = XHR;
        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function(payload) {
            var msgs = [];
            for (var i = 0,
            l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function(data) {
            this.post(data);
            return this
        };
        function empty() {}
        XHR.prototype.post = function(data) {
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
        XHR.prototype.close = function() {
            this.onClose();
            return this
        };
        XHR.prototype.request = function(method) {
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
                } catch(e) {}
            }
            return req
        };
        XHR.prototype.scheme = function() {
            return this.socket.options.secure ? "https": "http"
        };
        XHR.check = function(socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                socketProtocol = socket && socket.options && socket.options.secure ? "https:": "http:",
                isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch(e) {}
            return false
        };
        XHR.xdomainCheck = function(socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport: module.exports, "undefined" != typeof io ? io: module.parent.exports, this); (function(exports, io) {
        exports.htmlfile = HTMLFile;
        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() {
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
            io.util.on(window, "unload",
            function() {
                self.destroy()
            })
        };
        HTMLFile.prototype.c6e = function(data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch(e) {}
        };
        HTMLFile.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch(e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function() {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function(socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch(e) {}
            }
            return false
        };
        HTMLFile.xdomainCheck = function() {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport: module.exports, "undefined" != typeof io ? io: module.parent.exports); (function(exports, io, global) {
        exports["xhr-polling"] = XHRPolling;
        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() {
            return false
        };
        XHRPolling.prototype.open = function() {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };
        function empty() {}
        XHRPolling.prototype.get = function() {
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
        XHRPolling.prototype.onClose = function() {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch(e) {}
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function(socket, fn) {
            var self = this;
            io.util.defer(function() {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport: module.exports, "undefined" != typeof io ? io: module.parent.exports, this); (function(exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;
        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) {
                self.c6e(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) {
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
                } catch(e) {
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
            } catch(e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function() {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function() {
            var self = this,
            script = document.createElement("script"),
            query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                },
                100)
            }
        };
        JSONPPolling.prototype.c6e = function(msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function(socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function() {
                fn.call(self)
            })
        };
        JSONPPolling.check = function() {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function() {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport: module.exports, "undefined" != typeof io ? io: module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([],
        function() {
            return io
        })
    }
})(); (function() {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function(arr) {
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
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!this.cw8o) this.cw8o = {};
        this.CJ7C = n
    };
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.cw8o || !this.cw8o.error || isArray(this.cw8o.error) && !this.cw8o.error.length) {
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
        if (!this.cw8o) return false;
        var handler = this.cw8o[type];
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
            for (var i = 0,
            l = listeners.length; i < l; i++) {
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
    EventEmitter.prototype.addListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.cw8o) this.cw8o = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener: listener);
        if (!this.cw8o[type]) {
            this.cw8o[type] = listener
        } else if (isArray(this.cw8o[type])) {
            this.cw8o[type].push(listener)
        } else {
            this.cw8o[type] = [this.cw8o[type], listener]
        }
        if (isArray(this.cw8o[type]) && !this.cw8o[type].warned) {
            var m;
            if (this.CJ7C !== undefined) {
                m = this.CJ7C
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.cw8o[type].length > m) {
                this.cw8o[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.cw8o[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
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
    EventEmitter.prototype.removeListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.cw8o || !this.cw8o[type]) return this;
        var list = this.cw8o[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0,
            length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.cw8o[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.cw8o = {};
            return this
        }
        var events = this.cw8o && this.cw8o[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.cw8o[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function(type) {
        if (!this.cw8o) this.cw8o = {};
        if (!this.cw8o[type]) this.cw8o[type] = [];
        if (!isArray(this.cw8o[type])) {
            this.cw8o[type] = [this.cw8o[type]]
        }
        return this.cw8o[type]
    }
})(); (function() {
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
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
    pomelo.init = function(host, port, reconnect, cb) {
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
        socket.on("connect",
        function() {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect",
        function() {
            pomelo.emit("reconnect")
        });
        socket.on("message",
        function(data) {
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
        socket.on("error",
        function(err) {
            cb(err)
        });
        socket.on("disconnect",
        function(reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function(method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function(method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function(method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function(msgs) {
        for (var i = 0,
        l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function() {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function(msg) {
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
                heartbeat_timer = setInterval(function() {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                },
                heartbeat_interval)
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
    var filterMessage = function(message) {
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
    var checkMessage = function(ids) {
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
    pomelo.register = function(opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function(opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function(opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function(opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function(opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function() {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function(domain, msgs) {
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
})(); (function() {
    eval(function(p, a, c, k, e, d) {
        e = function(c) {
            return (c < a ? "": e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        };
        if (!"".replace(/^/, String)) {
            while (c--) d[e(c)] = k[c] || e(c);
            k = [function(e) {
                return d[e]
            }];
            e = function() {
                return "\\w+"
            };
            c = 1
        }
        while (c--) if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        return p
    } ("g 1=e;0.d=f(){3(1)h;1=c;3(a.9=='8.b.q'){0.4={2:'p.o.t.s',7:'6',5:'r'}}k{0.4={2:'j.i.n.m',7:'6',5:'l'}}}", 30, 30, "window|inited|pushHost|if|MUSIC_CONFIG|pushKey|6003|pushPort|music|host|location|163|true|initPushConfig|false|function|var|return|58|123|else|7bde08fbeb884e0e8459b1304df970cd|233|180|push|web|com|3b97981848064bbabeaaf2fb1eab7368|net|126".split("|"), 0, {}))
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    l6f = c6e("nm.x"),
    dI8A = c6e("nm.u"),
    q6k = c6e("nm.d"),
    RZ1x = c6e("pomelo"),
    U7N = 0,
    b6f,
    K7D;
    q6k.ft9k({
        "polling-init": {
            url: "/api/push/init",
            format: function(Q7J) {
                U7N = 2;
                var tS4W = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey
                },
                i6c = Q7J.account || bc7V,
                ds8k = GUser.userId;
                RZ1x.init(tS4W.host, tS4W.port, true, this.coP0x.f6b(this, {
                    user: ds8k,
                    nonce: i6c.nonce,
                    domain: tS4W.domain,
                    productKey: tS4W.key,
                    signature: i6c.signature,
                    expire_time: i6c.expireTime
                }))
            },
            onerror: function() {
                return this.bvG9x()
            }
        }
    });
    q6k.CN7G = NEJ.C();
    b6f = q6k.CN7G.M7F(q6k.hO0x);
    b6f.cA8s = function() {
        var rZ3x = !1;
        return function(e6c) {
            if (!rZ3x) {
                rZ3x = !0
            }
            this.cG8y(e6c);
            RZ1x.on("specify", this.sk3x.f6b(this));
            RZ1x.on("broadcast", this.sk3x.f6b(this))
        }
    } ();
    b6f.sk3x = function(d6d) {
        k6e.be7X(d6d,
        function(bF7y) {
            h6b.z7s(q6k.CN7G, "message", bF7y)
        },
        this)
    };
    b6f.bvG9x = function() {
        var bA7t = 500;
        return function() {
            U7N = 0;
            RZ1x.disconnect();
            if (bA7t > 6e4) bA7t = 500;
            bA7t *= 2
        }
    } ();
    b6f.coP0x = function(e6c, bZ7S) {
        if ( !! bZ7S) {
            return this.bvG9x()
        }
        U7N = 3;
        RZ1x.registerAndBind(e6c,
        function(m6g) {
            if (m6g.code != 200) {
                return this.bvG9x()
            }
            U7N = 4
        }.f6b(this))
    };
    b6f.cMx5C = function() {
        dI8A.coL0x.fP9G().cMy5D()
    };
    b6f.cMz5E = function() {
        dI8A.coL0x.fP9G().cMA5F()
    };
    b6f.bwd9U = function() {
        var rZ3x = !1;
        return function() {
            if (rZ3x) return;
            rZ3x = !0;
            if (window.initPushConfig) {
                try {
                    window.initPushConfig()
                } catch(e) {}
            }
            this.co8g("polling-init", {})
        }
    } ();
    H7A.fQ9H.B7u({
        event: "message",
        element: q6k.CN7G
    })
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    v7o = c6e("nej.j"),
    dC8u = c6e("nej.p"),
    k6e = c6e("nej.u"),
    n6h = c6e("nm.l"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    cx8p = c6e("api"),
    b6f,
    K7D;
    var gB9s = a6g.jJ1x('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n6h.bwf9W = NEJ.C();
    b6f = n6h.bwf9W.M7F(n6h.ep8h);
    K7D = n6h.bwf9W.cu8m;
    b6f.bo7h = function(e6c) {
        e6c.title = "意见反馈";
        this.bq7j(e6c)
    };
    b6f.ch7a = function() {
        this.cf7Y = gB9s
    };
    b6f.bW7P = function() {
        this.ci8a();
        this.hK0x = {};
        var MM0x = a6g.F7y;
        var Ht8l = h6b.s6m;
        this.hK0x.submit_btn = MM0x(this.o6i, "u-btn2")[0];
        this.hK0x.cancle_btn = MM0x(this.o6i, "u-btn2")[1];
        this.hK0x.prompt_msg = MM0x(this.o6i, "u-err")[0];
        this.hK0x.zs = MM0x(this.o6i, "zs")[0];
        a6g.bb7U(this.hK0x.zs, "display", "none");
        this.hK0x.fb_txt = MM0x(this.o6i, "u-txt")[0];
        this.hK0x.contact = MM0x(this.o6i, "u-txt")[1];
        a6g.hf9W(this.hK0x.fb_txt, "holder");
        a6g.hf9W(this.hK0x.contact, "holder");
        if (a6g.bG7z(this.hK0x.fb_txt.parentNode, "holder-parent")) {
            a6g.bb7U(this.hK0x.fb_txt.parentNode, "display", "block")
        }
        if (a6g.bG7z(this.hK0x.contact.parentNode, "holder-parent")) {
            a6g.bb7U(this.hK0x.contact.parentNode, "display", "block")
        }
        Ht8l(this.hK0x.submit_btn, "click", this.coI0x.f6b(this));
        Ht8l(this.hK0x.cancle_btn, "click", this.coH0x.f6b(this));
        Ht8l(this.hK0x.prompt_msg, "msgShow", this.coG0x.f6b(this));
        Ht8l(this.hK0x.fb_txt, "keyup", this.wq5v.f6b(this));
        Ht8l(this.hK0x.fb_txt, "input", this.eW9N.f6b(this));
        Ht8l(this.hK0x.contact, "keyup", this.coF0x.f6b(this));
        Ht8l(this.hK0x.contact, "input", this.bSb5g.f6b(this));
        this.lv1x = q6k.hW0x.B7u()
    };
    b6f.coI0x = function(d6d) {
        h6b.bg7Z(d6d);
        if (this.cV8N()) return;
        var bs7l = this.hK0x.fb_txt.value.trim();
        var br7k = bs7l.length;
        var e6c = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bSa5f = this.hK0x.contact.value.trim();
        var bcA4E = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l6f.bta9R(),
            contact: bSa5f
        };
        var i6c = {
            content: bs7l,
            client: "web",
            xInfo: JSON.stringify(bcA4E)
        },
        oY2x = this.lv1x.cAh2x();
        if (oY2x && oY2x.length) {
            i6c.log = oY2x.join("\n")
        }
        if (br7k == 0) {
            this.hK0x.prompt_msg.innerHTML = "反馈内容不能为空";
            a6g.bb7U(this.hK0x.prompt_msg, "display", "block");
            return
        }
        if (bSa5f.length > 100) {
            this.hK0x.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a6g.bb7U(this.hK0x.prompt_msg, "display", "block");
            return
        }
        this.cV8N(true);
        e6c.data = k6e.cD8v(i6c);
        e6c.onload = this.coC0x.f6b(this);
        e6c.onerror = this.jo1x.f6b(this);
        v7o.bl7e("/api/feedback/web", e6c)
    };
    b6f.eW9N = function(d6d) {
        var br7k = this.hK0x.fb_txt.value.trim().length;
        if (br7k > 0) a6g.bb7U(this.hK0x.prompt_msg, "display", "none");
        dC8u.dz8r.browser == "ie" && dC8u.dz8r.version < "7.0" ? setTimeout(this.gv9m.f6b(this), 0) : this.gv9m()
    };
    b6f.wq5v = function(d6d) {
        if (d6d.keyCode === 8) this.gv9m()
    };
    b6f.gv9m = function() {
        var br7k = this.hK0x.fb_txt.value.trim().length;
        this.hK0x.zs.innerHTML = !br7k ? "0/140": br7k + "/140"
    };
    b6f.bSb5g = function(d6d) {
        var br7k = this.hK0x.contact.value.trim().length;
        if (br7k > 0) a6g.bb7U(this.hK0x.prompt_msg, "display", "none")
    };
    b6f.coF0x = function(d6d) {
        if (d6d.keyCode === 8) this.bSb5g()
    };
    b6f.coH0x = function(d6d) {
        h6b.cr8j(d6d);
        this.bt7m()
    };
    b6f.coG0x = function(d6d) {
        var g6a = h6b.Y7R(d6d);
        g6a.innerHTML = "请输入反馈内容"
    };
    b6f.cMB5G = function(cMC5H) {
        var g6a = h6b.Y7R(d6d);
        g6a.innerHTML = ""
    };
    b6f.coC0x = function(m6g) {
        this.cV8N(false);
        this.bt7m();
        n6h.ba7T.J7C({
            tip: "意见发送成功",
            autoclose: true
        })
    };
    b6f.jo1x = function(m6g) {
        this.cV8N(false);
        n6h.ba7T.J7C({
            tip: "意见发送失败",
            autoclose: true
        })
    };
    b6f.cV8N = function(de8W) {
        return this.ee8W(this.hK0x.submit_btn, de8W, "发送意见", "发送中...")
    };
    b6f.J7C = function() {
        K7D.J7C.call(this);
        this.cV8N(false);
        this.hK0x.fb_txt.value = "";
        this.hK0x.contact.value = "";
        a6g.bb7U(this.hK0x.prompt_msg, "display", "none");
        this.gv9m()
    };
    l6f.cox0x = function(e6c) {
        e6c = e6c || {};
        if (e6c.title === undefined) e6c.title = "意见反馈";
        n6h.bwf9W.J7C(e6c)
    };
    cx8p.feedback = l6f.feedback = l6f.cox0x
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    P7I = c6e("nej.ui"),
    b6f;
    if ( !! P7I.AT7M) return;
    P7I.AT7M = NEJ.C();
    b6f = P7I.AT7M.M7F(P7I.er8j);
    b6f.cA8s = function() {
        this.hp0x = this.bRY5d();
        this.cG8y()
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.ct8l = e6c.index;
        this.gM9D = e6c.total;
        this.hP0x = e6c.range;
        this.gR9I(e6c.data)
    };
    b6f.bC7v = function() {
        this.bH7A();
        delete this.bf7Y;
        delete this.ct8l;
        delete this.gM9D;
        delete this.hP0x
    };
    b6f.iT1x = bu7n;
    b6f.bRY5d = function() {
        var gV9M = +(new Date);
        return function() {
            return "itm-" + ++gV9M
        }
    } ();
    b6f.IQ9H = function() {
        return this.hp0x
    };
    b6f.hr0x = function() {
        return this.bf7Y
    };
    b6f.gR9I = function(i6c) {
        this.bf7Y = i6c || {};
        this.iT1x(this.bf7Y)
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    P7I = c6e("nej.ui"),
    b6f,
    K7D;
    if ( !! P7I.wh5m) return;
    P7I.wh5m = NEJ.C();
    b6f = P7I.wh5m.M7F(P7I.AT7M);
    K7D = P7I.wh5m.cu8m;
    b6f.bo7h = function(e6c) {
        this.cou0x = e6c.pkey || "id";
        this.bq7j(e6c)
    };
    b6f.Ih8Z = function(i6c) {
        this.z7s("ondelete", {
            ext: i6c,
            id: this.IQ9H(),
            data: this.hr0x(),
            body: this.mj2x()
        })
    };
    b6f.uk4o = function(i6c) {
        this.z7s("onupdate", {
            ext: i6c,
            id: this.IQ9H(),
            data: this.hr0x(),
            body: this.mj2x()
        })
    };
    b6f.gR9I = function(i6c) {
        K7D.gR9I.apply(this, arguments);
        this.hp0x = this.bf7Y[this.cou0x] || this.bRY5d()
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    fL9C = NEJ.R,
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ui"),
    b6f,
    jv1x,
    bxN0x;
    if ( !! P7I.bxP0x) return;
    P7I.bxP0x = NEJ.C();
    b6f = P7I.bxP0x.M7F(P7I.er8j);
    b6f.bo7h = function(e6c) {
        this.bcE4I = NEJ.X({},
        e6c);
        this.ge9V = NEJ.X({},
        e6c);
        delete this.bcE4I.onchange;
        this.ge9V.onchange = this.gn9e.f6b(this);
        this.bq7j(e6c);
        this.cot0x({
            number: e6c.number,
            label: e6c.label || bc7V
        })
    };
    b6f.bC7v = function() {
        this.bH7A();
        if ( !! this.lQ1x) {
            this.lQ1x.V7O();
            delete this.lQ1x
        }
        delete this.bcE4I;
        delete this.ge9V;
        this.cor0x();
        this.o6i.innerHTML = "&nbsp;"
    };
    b6f.ch7a = function() {
        this.ms2x = jv1x
    };
    b6f.cot0x = function(i6c) {
        a6g.dF8x(this.o6i, bxN0x, i6c);
        var gV9M = a6g.Mq0x();
        this.ge9V.list = a6g.F7y(this.o6i, "js-i-" + gV9M);
        this.ge9V.pbtn = (a6g.F7y(this.o6i, "js-p-" + gV9M) || fL9C)[0];
        this.ge9V.nbtn = (a6g.F7y(this.o6i, "js-n-" + gV9M) || fL9C)[0]
    };
    b6f.bW7P = function() {
        this.ci8a()
    };
    b6f.cMD5I = function(i6c) {
        return a6g.ce7X(bxN0x, i6c)
    };
    b6f.gn9e = function(d6d) {
        if (this.RO1x) return;
        var r6l = d6d.index,
        cF8x = d6d.total;
        this.RO1x = !0;
        this.RN1x(r6l, cF8x);
        k6e.be7X(this.bcJ4N,
        function(up4t) {
            up4t.RN1x(r6l, cF8x)
        });
        this.RO1x = !1;
        this.z7s("onchange", d6d)
    };
    b6f.f6b = function(bI7B) {
        bI7B = a6g.A7t(bI7B);
        if (!bI7B) return this;
        var cy8q = NEJ.X({},
        this.bcE4I);
        cy8q.parent = bI7B;
        cy8q.index = this.uq4u();
        cy8q.total = this.lR1x();
        var up4t = this.constructor.B7u(cy8q);
        up4t.zf6Z("onchange", this.ge9V.onchange);
        if (!this.bcJ4N) this.bcJ4N = [];
        this.bcJ4N.push(up4t);
        return this
    };
    b6f.cor0x = function() {
        var blx6r = function(up4t, r6l, j6d) {
            up4t.V7O();
            j6d.splice(r6l, 1)
        };
        return function() {
            k6e.oc2x(this.bcJ4N, blx6r)
        }
    } ();
    b6f.la1x = function(r6l) {
        if (!this.lQ1x) return;
        this.lQ1x.la1x(r6l)
    };
    b6f.uq4u = function() {
        if (!this.lQ1x) return 1;
        return this.lQ1x.uq4u()
    };
    b6f.lR1x = function() {
        if (!this.lQ1x) return 1;
        return this.lQ1x.lR1x()
    };
    b6f.RN1x = function(r6l, cF8x) {
        if (!this.lQ1x) return;
        this.lQ1x.RN1x(r6l, cF8x)
    };
    b6f.byo0x = function(cF8x) {
        if (!this.lQ1x) return;
        this.lQ1x.byo0x(cF8x)
    };
    jv1x = a6g.ve5j(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bxN0x = a6g.eD9u('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    P7I = c6e("nej.ut"),
    b6f;
    if ( !! P7I.bcK4O) return;
    P7I.bcK4O = NEJ.C();
    b6f = P7I.bcK4O.M7F(P7I.cL8D);
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.bcL4P = e6c.pbtn;
        this.cC8u = e6c.nbtn;
        this.bcO4S = e6c.sbtn;
        this.bcQ4U = e6c.ebtn;
        this.iN1x = e6c.event || "click";
        this.ly1x = e6c.selected || "js-selected";
        this.oE2x = e6c.disabled || "js-disabled";
        this.coo0x(e6c.list);
        this.RN1x(e6c.index || 1, e6c.total || 1)
    };
    b6f.bC7v = function() {
        this.bH7A();
        delete this.bV7O;
        delete this.iN1x;
        delete this.bcL4P;
        delete this.cC8u;
        delete this.bcO4S;
        delete this.bcQ4U;
        delete this.bRT5Y;
        delete this.gM9D;
        delete this.ct8l;
        delete this.ly1x;
        delete this.oE2x
    };
    b6f.coo0x = function() {
        var byA0x = function(g6a) {
            this.bV7O.push(g6a);
            this.bY7R([[g6a, this.iN1x, this.cv8n.ey9p(this, 0)]])
        };
        return function(j6d) {
            this.bV7O = [];
            this.bY7R([[this.bcL4P, "click", this.cv8n.ey9p(this, -1)], [this.cC8u, "click", this.cv8n.ey9p(this, 1)], [this.bcO4S, "click", this.cv8n.ey9p(this, -2)], [this.bcQ4U, "click", this.cv8n.ey9p(this, 2)]]);
            k6e.be7X(j6d, byA0x, this)
        }
    } ();
    b6f.IT9K = function(g6a, r6l) {
        if (r6l == null) {
            g6a.innerText = "";
            a6g.bb7U(g6a, "display", "none");
            a6g.y7r(g6a, this.ly1x)
        } else {
            g6a.innerText = r6l;
            a6g.bb7U(g6a, "display", "");
            r6l == this.ct8l ? a6g.w7p(g6a, this.ly1x) : a6g.y7r(g6a, this.ly1x)
        }
    };
    b6f.byE0x = function() {
        if (this.ct8l <= 1) {
            a6g.w7p(this.bcL4P, this.oE2x);
            a6g.w7p(this.bcO4S, this.oE2x)
        } else {
            a6g.y7r(this.bcL4P, this.oE2x);
            a6g.y7r(this.bcO4S, this.oE2x)
        }
        if (this.ct8l >= this.gM9D) {
            a6g.w7p(this.cC8u, this.oE2x);
            a6g.w7p(this.bcQ4U, this.oE2x)
        } else {
            a6g.y7r(this.cC8u, this.oE2x);
            a6g.y7r(this.bcQ4U, this.oE2x)
        }
    };
    b6f.bcR4V = bu7n;
    b6f.byH0x = function() {
        this.bcR4V();
        this.byE0x();
        this.z7s("onchange", {
            last: this.bRT5Y,
            total: this.gM9D,
            index: this.ct8l,
            ext: this.byI0x
        })
    };
    b6f.bRS5X = function(r6l) {
        r6l = parseInt(r6l);
        if (isNaN(r6l) || this.gM9D == null) return ! 1;
        r6l = Math.max(1, Math.min(r6l, this.gM9D));
        this.bRT5Y = this.ct8l;
        this.ct8l = r6l;
        return ! 0
    };
    b6f.byO0x = function(cF8x) {
        cF8x = parseInt(cF8x);
        if (isNaN(cF8x) || cF8x < 1) return ! 1;
        this.gM9D = cF8x;
        return ! 0
    };
    b6f.cv8n = function(d6d, fn9e) {
        h6b.cr8j(d6d);
        var G7z = h6b.Y7R(d6d);
        if (!G7z || a6g.bG7z(G7z, this.ly1x) || a6g.bG7z(G7z, this.oE2x)) return;
        var r6l = G7z.innerText;
        switch (fn9e) {
        case 1:
        case - 1 : r6l = this.ct8l + fn9e;
            break;
        case 2:
            r6l = this.gM9D;
            break;
        case - 2 : r6l = 1;
            break
        }
        this.la1x(r6l)
    };
    b6f.uq4u = function() {
        return this.ct8l
    };
    b6f.la1x = function(r6l) {
        var col0x = this.ct8l;
        this.bRS5X(r6l);
        if (col0x != this.ct8l) this.byH0x();
        return this
    };
    b6f.lR1x = function() {
        return this.gM9D
    };
    b6f.Wl2x = function(cF8x) {
        if (this.byO0x(cF8x) && this.ct8l != null) {
            this.ct8l = 1;
            this.byH0x()
        }
        return this
    };
    b6f.byo0x = function(cF8x) {
        if (this.byO0x(cF8x)) {
            this.bcR4V();
            this.byE0x()
        }
        return this
    };
    b6f.RN1x = function(r6l, cF8x) {
        if (!this.byO0x(cF8x) || !this.bRS5X(r6l)) return this;
        this.byH0x();
        return this
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    dg8Y = c6e("nej.x"),
    P7I = c6e("nej.ut"),
    b6f;
    if ( !! P7I.Rz1x) return;
    P7I.Rz1x = NEJ.C();
    b6f = P7I.Rz1x.M7F(P7I.bcK4O);
    b6f.cA8s = function() {
        this.cG8y();
        var g6a = a6g.dn8f("span", "zdot");
        g6a.innerText = "...";
        this.bcV4Z = [g6a.cloneNode(true), g6a]
    };
    b6f.bC7v = function() {
        this.bH7A();
        this.bRR5W()
    };
    b6f.bRR5W = function() {
        a6g.nf2x(this.bcV4Z[0]);
        a6g.nf2x(this.bcV4Z[1])
    };
    b6f.bcR4V = function() {
        this.byI0x = {
            last: !1,
            first: !1,
            list: this.bV7O
        };
        this.bRR5W();
        this.IT9K(this.bV7O[0], 1);
        var bO7H = 1,
        br7k = this.bV7O.length;
        if (this.gM9D < br7k) {
            for (var rY3x; bO7H < br7k; bO7H++) {
                rY3x = bO7H + 1;
                this.IT9K(this.bV7O[bO7H], rY3x > this.gM9D ? null: rY3x)
            }
            return
        }
        if (this.ct8l > 1) {
            var ck8c = Math.floor((br7k - 2) / 2),
            coj0x = this.gM9D - br7k + 2,
            hj9a = Math.max(2, this.ct8l - ck8c);
            if (this.gM9D >= br7k) {
                hj9a = Math.min(hj9a, coj0x)
            }
            if (hj9a > 2) {
                this.bV7O[0].insertAdjacentElement("afterEnd", this.bcV4Z[0]);
                this.byI0x.first = !0
            }
            for (var r6l;; bO7H++) {
                r6l = hj9a + bO7H - 1;
                if (r6l > this.ct8l) break;
                this.IT9K(this.bV7O[bO7H], r6l)
            }
        }
        if (this.ct8l < this.gM9D) {
            var r6l, hj9a = this.ct8l + 1;
            for (var i = 0,
            l = br7k - 2;; i++, bO7H++) {
                r6l = hj9a + i;
                if (bO7H > l || r6l > this.gM9D) break;
                this.IT9K(this.bV7O[bO7H], r6l)
            }
            if (r6l < this.gM9D) {
                this.bV7O[bO7H].insertAdjacentElement("beforeBegin", this.bcV4Z[1]);
                this.byI0x.last = !0
            }
            if (r6l <= this.gM9D) {
                this.IT9K(this.bV7O[bO7H++], this.gM9D)
            }
        }
        for (; bO7H < br7k; bO7H++) {
            this.IT9K(this.bV7O[bO7H])
        }
    };
    a6g.cof0x = dg8Y.cof0x = function(bI7B, e6c) {
        var D7w = a6g.mc2x(bI7B);
        if (!D7w) return null;
        if (!P7I.beU4Y(D7w, P7I.Rz1x)) {
            e6c = e6c || {};
            var j6d = !e6c.clazz ? a6g.dj8b(D7w) : a6g.F7y(D7w, e6c.clazz);
            e6c.pbtn = j6d.shift();
            e6c.nbtn = j6d.pop();
            e6c.list = j6d;
            delete e6c.clazz
        }
        return P7I.beU4Y(D7w, P7I.Rz1x, e6c || bc7V)
    };
    dg8Y.isChange = !0
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    fL9C = NEJ.R,
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    P7I = c6e("nej.ui"),
    b6f,
    K7D,
    gB9s;
    if ( !! P7I.Rs1x) return;
    P7I.Rs1x = NEJ.C();
    b6f = P7I.Rs1x.M7F(P7I.bxP0x);
    K7D = P7I.Rs1x.cu8m;
    b6f.bo7h = function(e6c) {
        e6c.number = parseInt(e6c.number) || 9;
        this.bq7j(e6c);
        this.lQ1x = H7A.Rz1x.B7u(this.ge9V)
    };
    b6f.gn9e = function(d6d) {
        if ( !! this.bcE4I.noend) {
            var bRO5T = d6d.ext || bc7V,
            j6d = bRO5T.list || fL9C;
            if (bRO5T.last) {
                a6g.bb7U(j6d[j6d.length - 1], "display", "none")
            }
        }
        K7D.gn9e.apply(this, arguments)
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    bd7W = c6e("nej.ui"),
    P7I = c6e("nej.ut"),
    b6f;
    if ( !! P7I.bda4e) return;
    P7I.bda4e = NEJ.C();
    b6f = P7I.bda4e.M7F(P7I.cL8D);
    b6f.bo7h = function(e6c) {
        this.jn1x = {};
        this.bq7j(e6c);
        this.iI1x = a6g.A7t(e6c.parent);
        this.fu9l = {
            parent: this.iI1x
        };
        this.pV3x = parseInt(e6c.limit) || 10;
        this.AH6B = parseInt(e6c.first) || this.pV3x;
        this.cod0x(e6c.item);
        this.coc0x(e6c.cache || bc7V);
        this.coa0x(e6c.pager || bc7V);
        this.gR9I()
    };
    b6f.bC7v = function() {
        this.z7s("onbeforerecycle");
        this.Rp1x();
        this.bH7A();
        if (this.jn1x.clear) {
            this.T7M.we5j(this.jn1x.key)
        }
        this.T7M.V7O();
        if ( !! this.jR1x) {
            this.jR1x.V7O();
            delete this.jR1x
        }
        delete this.bRN5S;
        delete this.ge9V;
        delete this.bdb4f;
        delete this.T7M;
        delete this.iI1x;
        delete this.Rm1x;
        delete this.fu9l;
        delete this.jn1x
    };
    b6f.bRM5R = function() {
        var dl8d = /\{(.*?)\}/gi,
        cnV0x = function(pI2x, i6c) {
            return (pI2x || "{id}{seed}").replace(dl8d,
            function($1, $2) {
                var C7v = i6c[$2];
                return C7v == null ? $1: C7v
            })
        };
        return function(D7w) {
            var L7E = cnV0x(this.fu9l.jstIdTempalte, {
                id: D7w,
                seed: a6g.Mq0x()
            });
            if (!this.fu9l.jstIdType) {
                return a6g.A7t(L7E)
            } else if (this.fu9l.jstIdType == 1) {
                return (a6g.F7y(this.iI1x, L7E) || [])[0]
            }
        }
    } ();
    b6f.Ec7V = function(bO7H, bj7c, go9f, br7k) {
        var m6g = {
            index: 1,
            total: 1
        };
        if (bj7c >= bO7H) {
            m6g.index = Math.floor((bj7c - bO7H) / go9f) + 2
        }
        if (br7k > bO7H) {
            m6g.total = Math.ceil((br7k - bO7H) / go9f) + 1
        }
        return m6g
    };
    b6f.bRL5Q = function(L7E) {
        delete this.Rm1x;
        this.MB0x = L7E;
        this.bY7R([[this.iI1x, "click", this.cnP0x.f6b(this)]])
    };
    b6f.cod0x = function(p6j) {
        if (k6e.fO9F(p6j)) {
            this.bRL5Q(p6j);
            return
        }
        NEJ.X(this.fu9l, p6j);
        var em8e = this.fu9l.klass;
        delete this.fu9l.klass;
        if (k6e.fO9F(em8e)) {
            this.bRL5Q(em8e);
            return
        }
        delete this.MB0x;
        this.Rm1x = em8e;
        this.fu9l.ondelete = this.z7s.f6b(this, "ondelete");
        this.fu9l.onupdate = this.z7s.f6b(this, "onupdate")
    };
    b6f.coc0x = function(S7L) {
        var em8e = S7L.klass,
        kQ1x = NEJ.X({},
        S7L);
        this.jn1x.key = kQ1x.lkey;
        this.jn1x.data = kQ1x.data || {};
        this.jn1x.clear = !!kQ1x.clear;
        this.fu9l.pkey = kQ1x.key || "id";
        kQ1x.onlistload = this.bAm0x.f6b(this);
        kQ1x.onpullrefresh = this.cnO0x.f6b(this);
        if ( !! em8e && "onlistchange" in em8e) {
            this.bY7R([[em8e, "listchange", this.bAo0x.f6b(this)]])
        } else {
            kQ1x.onitemadd = this.bdg4k.f6b(this);
            kQ1x.onitemdelete = this.bdh4l.f6b(this);
            kQ1x.onitemupdate = this.bRE5J.f6b(this)
        }
        this.T7M = (em8e || P7I.VT2x).B7u(kQ1x);
        if (S7L.total != null) {
            this.T7M.Wl2x(this.jn1x.key, S7L.total)
        }
        if ( !! S7L.list) {
            this.T7M.tp3x(this.jn1x.key, S7L.list)
        }
    };
    b6f.coa0x = function(up4t) {
        this.bRN5S = up4t.klass || bd7W.Rs1x;
        this.ge9V = NEJ.X({},
        up4t);
        if (k6e.eh8Z(up4t.parent)) {
            this.ge9V.parent = up4t.parent[0];
            this.Ra1x = up4t.parent.slice(1);
            if (!this.Ra1x || !this.Ra1x.length) {
                delete this.Ra1x
            }
        }
        delete this.ge9V.klass
    };
    b6f.Rp1x = function() {
        var gS9J = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.z7s("onbeforelistclear", {
                parent: this.iI1x
            });
            if ( !! this.fV9M && this.fV9M.length > 0) {
                this.fV9M = this.Rm1x.V7O(this.fV9M);
                delete this.fV9M
            }
            if (gS9J.test(this.iI1x.tagName)) {
                a6g.bRZ5e(this.iI1x)
            } else {
                this.iI1x.innerHTML = ""
            }
        }
    } ();
    b6f.bAL0x = function(bds4w) {
        if ( !! this.ge9V.fixed) return;
        a6g.bb7U(this.ge9V.parent, "display", bds4w);
        k6e.be7X(this.Ra1x,
        function(bI7B) {
            a6g.bb7U(bI7B, "display", bds4w)
        },
        this)
    };
    b6f.bAT0x = function() {
        var r6l = this.ge9V.index || 1;
        delete this.ge9V.index;
        if ( !! this.jR1x) {
            r6l = this.jR1x.uq4u()
        }
        this.Eo7h({
            last: r6l,
            index: r6l
        })
    };
    b6f.Eo7h = function(d6d) {
        this.z7s("onpagechange", d6d)
    };
    b6f.bRD5I = function(bj7c) {
        this.jn1x.offset = bj7c;
        this.ZB3x()
    };
    b6f.bRC5H = function(e6c) {
        return e6c
    };
    b6f.ZB3x = function() {
        this.QU1x();
        var i6c = this.jn1x.data;
        i6c.offset = this.jn1x.offset;
        var qv3x = i6c.offset == 0;
        i6c.total = qv3x;
        this.jn1x.limit = qv3x ? this.AH6B: this.pV3x;
        i6c.limit = this.jn1x.limit;
        this.T7M.me2x(this.bRC5H(NEJ.X({},
        this.jn1x)))
    };
    b6f.bAm0x = function(e6c) {
        if (e6c.key != this.jn1x.key || e6c.offset != this.jn1x.offset) return;
        this.bdy4C();
        var j6d = this.T7M.hL0x(e6c.key);
        if (!j6d || !j6d.length) {
            this.bBq1x();
            return
        }
        var go9f = e6c.limit,
        bj7c = e6c.offset;
        if (this.bBv1x(j6d, bj7c, go9f)) return;
        this.z7s("onbeforelistrender", {
            list: j6d,
            offset: bj7c,
            parent: this.iI1x
        });
        if ( !! this.MB0x) {
            this.fu9l.xlist = j6d;
            this.fu9l.beg = bj7c;
            this.fu9l.end = Math.min(j6d.length, bj7c + go9f) - 1;
            this.fu9l.act = "list";
            var dZ8R = a6g.ce7X(this.MB0x, this.fu9l);
            this.QN1x(dZ8R)
        } else {
            this.fu9l.limit = go9f;
            this.fu9l.offset = bj7c;
            var hH0x = a6g.Cf7Y(j6d, this.Rm1x, this.fu9l);
            this.QM1x(hH0x)
        }
        this.z7s("onafterlistrender", {
            list: j6d,
            offset: bj7c,
            parent: this.iI1x
        })
    };
    b6f.cnO0x = function(e6c) {
        if (!this.bdb4f) return;
        delete this.bdb4f;
        this.bdy4C("onafterpullrefresh");
        this.gR9I()
    };
    b6f.bRB5G = function(r6l, cF8x) {
        if ( !! this.jR1x) {
            var yW6Q = this.jR1x.uq4u(),
            cnG0x = this.jR1x.lR1x();
            if (yW6Q > cF8x || cF8x != cnG0x) {
                this.jR1x.V7O();
                delete this.jR1x;
                this.Eo7h({
                    last: yW6Q,
                    index: Math.min(r6l, cF8x)
                });
                return ! 0
            }
        } else {
            this.ge9V.index = r6l;
            this.ge9V.total = cF8x;
            this.jR1x = this.bRN5S.B7u(this.ge9V);
            this.jR1x.zf6Z("onchange", this.Eo7h.f6b(this));
            k6e.be7X(this.Ra1x,
            function(bI7B) {
                this.jR1x.f6b(bI7B)
            },
            this)
        }
    };
    b6f.bdA4E = function() {
        var gV9M = +(new Date);
        return function(i6c) {
            var D7w = i6c[this.fu9l.pkey];
            if (!D7w) {
                i6c["dirty-data"] = !0;
                i6c[this.fu9l.pkey] = "dirty-" + gV9M++
            }
            return i6c
        }
    } ();
    b6f.bdD4H = function(i6c) {
        var D7w = i6c[this.fu9l.pkey];
        if ( !! i6c["dirty-data"]) {
            delete i6c["dirty-data"];
            delete i6c[this.fu9l.pkey]
        }
        return D7w
    };
    b6f.bdF4J = function() {
        var cnE0x = function(dG8y, ns2x) {
            this.iI1x.insertAdjacentElement(dG8y, ns2x)
        };
        return function(dG8y, i6c) {
            var My0x = [i6c];
            if ( !! this.MB0x) {
                this.fu9l.xlist = My0x;
                this.fu9l.beg = 0;
                this.fu9l.end = 0;
                this.fu9l.act = "add";
                this.QN1x(a6g.ce7X(this.MB0x, this.fu9l), dG8y)
            } else {
                this.fu9l.limit = 1;
                this.fu9l.offset = 0;
                this.fu9l.parent = cnE0x.f6b(this, dG8y);
                var hH0x = a6g.Cf7Y(My0x, this.Rm1x, this.fu9l);
                this.fu9l.parent = this.iI1x;
                this.QM1x(hH0x)
            }
        }
    } ();
    b6f.QU1x = bu7n;
    b6f.bdy4C = function(X7Q) {
        var d6d = {
            parent: this.iI1x
        };
        this.z7s(X7Q || "onafterlistload", d6d);
        if (!d6d.stopped) {
            a6g.nf2x(this.cO8G)
        }
    };
    b6f.bBv1x = bu7n;
    b6f.bdJ4N = function(bF7y, dG8y) {
        if (k6e.fO9F(bF7y)) {
            if (!this.cO8G) this.cO8G = a6g.dn8f("div");
            this.cO8G.innerHTML = bF7y
        } else {
            this.cO8G = bF7y
        }
        this.iI1x.insertAdjacentElement(dG8y || "beforeEnd", this.cO8G)
    };
    b6f.Av6p = function(X7Q, kS1x, dG8y) {
        var d6d = {
            parent: this.iI1x
        };
        this.z7s(X7Q, d6d);
        if (!d6d.stopped) {
            this.bdJ4N(d6d.value || kS1x, dG8y)
        }
    };
    b6f.bBq1x = bu7n;
    b6f.QN1x = bu7n;
    b6f.QM1x = bu7n;
    b6f.cnP0x = function() {
        var gS9J = /^(?:delete|update)$/;
        return function(d6d) {
            var g6a = h6b.Y7R(d6d, "d:action");
            if (!g6a) return;
            var W7P = a6g.t7m(g6a, "action");
            if (!gS9J.test(W7P)) return;
            var D7w = a6g.t7m(g6a, "id");
            if (!D7w) return;
            var p6j = this.T7M.eS9J(D7w);
            if (!p6j) return;
            h6b.bg7Z(d6d);
            this.z7s("on" + W7P, {
                data: p6j,
                id: p6j[this.fu9l.pkey],
                body: a6g.A7t(this.bRM5R(D7w))
            })
        }
    } ();
    b6f.bdg4k = bu7n;
    b6f.ZA3x = function(d6d) {
        var i6c = d6d.data || {},
        e6c = {
            data: i6c,
            key: this.jn1x.key,
            id: i6c[this.fu9l.pkey]
        };
        this.z7s("onbeforedelete", e6c);
        this.T7M.Oz0x(e6c)
    };
    b6f.bdh4l = bu7n;
    b6f.Zx3x = function(d6d) {
        var i6c = d6d.data || {},
        e6c = {
            data: i6c,
            key: this.jn1x.key
        };
        this.z7s("onbeforeupdate", e6c);
        this.T7M.ZE3x(e6c)
    };
    b6f.bRE5J = function(d6d) {
        this.QB1x(d6d, "onafterupdate");
        if (d6d.stopped) return;
        var D7w = d6d.data[this.fu9l.pkey];
        if ( !! this.fV9M) {
            var p6j = a6g.bYV7O(D7w);
            if ( !! p6j) p6j.gR9I(d6d.data)
        } else {
            var g6a = a6g.A7t(D7w + "" + a6g.Mq0x());
            if (!g6a) return;
            var j6d = this.T7M.hL0x(d6d.key),
            r6l = k6e.do8g(j6d, d6d.data);
            if (r6l < 0) return;
            this.fu9l.list = j6d;
            this.fu9l.beg = r6l;
            this.fu9l.end = r6l;
            this.fu9l.act = "update";
            var dZ8R = a6g.ce7X(this.MB0x, this.fu9l);
            g6a.insertAdjacentHTML("afterEnd", dZ8R);
            a6g.cS8K(g6a)
        }
    };
    b6f.QB1x = function(d6d, X7Q) {
        var p6j = d6d.data;
        if (!p6j || p6j[this.fu9l.pkey] == null) {
            this.z7s("onerror", d6d);
            d6d.stopped = !0
        }
        if (!d6d.stopped) {
            this.z7s(X7Q, d6d)
        }
    };
    b6f.biI5N = bu7n;
    b6f.biJ5O = bu7n;
    b6f.bAo0x = function(d6d) {
        if (d6d.key != this.jn1x.key) return;
        switch (d6d.action) {
        case "add":
            this.bdg4k(d6d);
            break;
        case "delete":
            this.bdh4l(d6d);
            break;
        case "update":
            this.bRE5J(d6d);
            break;
        case "refresh":
            this.gR9I();
            break;
        case "unshift":
            this.biJ5O(d6d.offset, d6d.limit);
            break;
        case "append":
            this.biI5N(d6d.offset, d6d.limit);
            break
        }
    };
    b6f.qN3x = function(p6j) {
        this.Zx3x({
            data: p6j
        })
    };
    b6f.nb2x = function(p6j) {
        this.ZA3x({
            data: p6j
        })
    };
    b6f.vh5m = function(p6j) {
        this.T7M.jG1x({
            data: p6j,
            key: this.jn1x.key
        })
    };
    b6f.vi5n = function() {
        return this.T7M
    };
    b6f.biX5c = function(i6c) {
        this.bdF4J("afterBegin", this.bdA4E(i6c));
        return this.bdD4H(i6c)
    };
    b6f.bRA5F = function(i6c) {
        this.bdF4J("beforeEnd", this.bdA4E(i6c));
        return this.bdD4H(i6c)
    };
    b6f.gR9I = function() {
        this.Rp1x();
        this.bAT0x()
    };
    b6f.cME5J = function() {
        this.T7M.we5j(this.jn1x.key);
        this.gR9I()
    };
    b6f.bpp7i = function() {
        if ( !! this.bdb4f) return;
        this.bdb4f = !0;
        this.Av6p("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        var j6d = this.T7M.hL0x(this.jn1x.key);
        if (j6d && j6d[0]) {
            this.jn1x.data.aftertime = j6d[0].eventTime || ""
        }
        this.T7M.bpp7i({
            key: this.jn1x.key,
            data: this.jn1x.data
        })
    };
    b6f.lR1x = function() {
        return this.T7M.lR1x(this.jn1x.key)
    };
    b6f.bRz5E = function() {
        return this.jR1x
    };
    b6f.ZL3x = function() {
        return this.T7M.ZL3x(this.jn1x.key)
    };
    b6f.cnw0x = function() {
        return this.fV9M
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    fL9C = NEJ.R,
    k6e = c6e("nej.u"),
    a6g = c6e("nej.e"),
    P7I = c6e("nej.ut"),
    b6f,
    K7D;
    if ( !! P7I.kH1x) return;
    P7I.kH1x = NEJ.C();
    b6f = P7I.kH1x.M7F(P7I.bda4e);
    K7D = P7I.kH1x.cu8m;
    b6f.Ec7V = function(bj7c, br7k) {
        return K7D.Ec7V.call(this, this.AH6B, bj7c, this.pV3x, br7k)
    };
    b6f.bjk5p = function(r6l) {
        var bj7c = 0;
        if (r6l > 1) bj7c = this.AH6B + (r6l - 2) * this.pV3x;
        return bj7c
    };
    b6f.Eo7h = function(d6d) {
        K7D.Eo7h.apply(this, arguments);
        if (!d6d.stopped) {
            this.bRD5I(this.bjk5p(d6d.index))
        }
    };
    b6f.QU1x = function() {
        this.Rp1x();
        this.Av6p("onbeforelistload", "列表加载中...")
    };
    b6f.bdy4C = function() {
        K7D.bdy4C.apply(this, arguments);
        this.Rp1x()
    };
    b6f.bBv1x = function(j6d, bj7c, go9f) {
        var bp7i = this.Ec7V(bj7c, j6d.length);
        if (this.bRB5G(bp7i.index, bp7i.total)) return ! 0;
        this.bAL0x(bp7i.total > 1 ? "": "none")
    };
    b6f.bBq1x = function() {
        this.Av6p("onemptylist", "没有列表数据！")
    };
    b6f.bdJ4N = function(bF7y, dG8y) {
        if (!dG8y && k6e.fO9F(bF7y)) {
            this.iI1x.innerHTML = bF7y;
            return
        }
        K7D.bdJ4N.apply(this, arguments)
    };
    b6f.QN1x = function(dZ8R) {
        this.iI1x.innerHTML = dZ8R
    };
    b6f.QM1x = function(hH0x) {
        this.fV9M = hH0x
    };
    b6f.bdg4k = function(d6d) {
        this.QB1x(d6d, "onafteradd");
        if (!d6d.stopped) this.gR9I()
    };
    b6f.bdh4l = function(d6d) {
        this.QB1x(d6d, "onafterdelete");
        if (!d6d.stopped) this.gR9I()
    };
    b6f.biI5N = function(bj7c, go9f) {
        var r6l = 1;
        if ( !! this.jR1x) {
            r6l = this.jR1x.uq4u()
        }
        var ko1x = this.bjk5p(r6l),
        ex9o = ko1x + (r6l > 1 ? this.pV3x: this.AH6B);
        if (bj7c >= ex9o && !!this.jR1x) {
            var bp7i = this.Ec7V(0, this.lR1x());
            this.jR1x.byo0x(bp7i.total);
            this.bAL0x(bp7i.total > 1 ? "": "none")
        } else {
            this.gR9I()
        }
    };
    b6f.biJ5O = function(bj7c, go9f) {
        var r6l = 1;
        if ( !! this.jR1x) {
            r6l = this.jR1x.uq4u()
        }
        var ko1x = this.bjk5p(r6l),
        bp7i = this.Ec7V(ko1x, this.lR1x());
        this.Eo7h({
            last: r6l,
            index: bp7i.index
        })
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    H7A = c6e("nej.ut"),
    k6e = c6e("nej.u"),
    l6f = c6e("nm.x"),
    q6k = c6e("nm.d"),
    x7q = c6e("nm.w"),
    fC9t = 40,
    b6f,
    K7D;
    x7q.bdL4P = NEJ.C();
    b6f = x7q.bdL4P.M7F(H7A.cL8D);
    K7D = x7q.bdL4P.cu8m;
    b6f.cA8s = function() {
        this.cG8y()
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.Qy1x = e6c.inputer;
        this.bjq5v = e6c.tipper;
        this.bY7R([[this.Qy1x, "input", this.eW9N.f6b(this)]])
    };
    b6f.bC7v = function() {
        this.bH7A();
        this.Mn0x(null, null)
    };
    b6f.eW9N = function(d6d) {
        if (d6d && d6d.type == "keyup" && (d6d.keyCode != 8 || d6d.keyCode != 68)) return;
        var X7Q = this.Qy1x.value,
        cMF5K;
        if (l6f.Wo2x(X7Q) > fC9t) {
            this.Qy1x.value = l6f.Dd7W(X7Q, fC9t);
            this.Mn0x("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.f6b(this))
        } else if (X7Q.indexOf("#") >= 0 || X7Q.indexOf("@") >= 0) {
            this.Mn0x("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Mn0x(null, null);
            this.z7s("onchange", {
                value: X7Q
            })
        }
    };
    b6f.cnt0x = function() {
        this.eW9N()
    };
    b6f.Mn0x = function() {
        var D7w = 0;
        return function(dP8H, bRv5A) {
            if ( !! D7w) window.clearTimeout(D7w);
            if (!dP8H) {
                a6g.w7p(this.bjq5v, "f-vhide");
                this.bRu5z = !1;
                return
            }
            this.bjq5v.innerHTML = '<i class="u-icn u-icn-25"></i>' + dP8H;
            a6g.y7r(this.bjq5v, "f-vhide");
            this.bRu5z = !0;
            if (k6e.gZ9Q(bRv5A)) D7w = window.setTimeout(function() {
                this.Mn0x(null, null);
                bRv5A()
            }.f6b(this), 1e3)
        }
    } ();
    b6f.bRs5x = function() {
        if (this.bRu5z) return ! 1;
        if (l6f.kD1x(this.Qy1x.value)) {
            this.Mn0x("歌单名不能为空");
            return ! 1
        }
        return ! 0
    };
    b6f.gm9d = function() {
        return this.Qy1x.value
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    h6b = c6e("nej.v"),
    a6g = c6e("nej.e"),
    v7o = c6e("nej.j"),
    n6h = c6e("nm.l"),
    x7q = c6e("nm.w"),
    bD7w = c6e("nej.ui"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    b6f,
    K7D;
    n6h.bdP4T = NEJ.C();
    b6f = n6h.bdP4T.M7F(n6h.ep8h);
    K7D = n6h.bdP4T.cu8m;
    b6f.cA8s = function() {
        this.cG8y()
    };
    b6f.bW7P = function() {
        this.ci8a();
        var j6d = a6g.F7y(this.o6i, "j-flag");
        this.bdR4V = {
            inputer: j6d[0],
            tipper: j6d[1]
        };
        this.iG1x = {
            onerror: this.bRp5u.f6b(this),
            onitemadd: this.bRp5u.f6b(this)
        };
        this.md2x = j6d[2];
        h6b.s6m(j6d[2], "click", this.FZ8R.f6b(this));
        h6b.s6m(j6d[3], "click", this.Ea7T.f6b(this));
        h6b.s6m(this.o6i, "keypress", this.bRo5t.f6b(this))
    };
    b6f.ch7a = function() {
        this.cf7Y = "m-wgt-create"
    };
    b6f.bo7h = function(e6c) {
        e6c.clazz = " m-layer-w2";
        e6c.parent = e6c.parent || document.body;
        e6c.title = "新建歌单";
        e6c.draggable = !0;
        e6c.destroyalbe = !0;
        e6c.mask = true;
        this.bq7j(e6c);
        this.bdR4V.inputer.value = e6c.name || "";
        this.vw5B = x7q.bdL4P.B7u(this.bdR4V);
        this.vw5B.cnt0x();
        this.T7M = q6k.ix1x.B7u(this.iG1x);
        setTimeout(function() {
            this.bdR4V.inputer.focus()
        }.f6b(this), 0)
    };
    b6f.bC7v = function() {
        this.bH7A();
        if (this.vw5B) {
            this.vw5B.V7O();
            delete this.vw5B
        }
        this.vu5z(!1);
        this.bdR4V.inputer.value = ""
    };
    b6f.vu5z = function(Qe0x) {
        this.pN3x = Qe0x;
        if (Qe0x) {
            this.md2x.innerHTML = "<i>新建中...</i>";
            a6g.w7p(this.md2x, "u-btn2-dis")
        } else {
            this.md2x.innerHTML = "<i>新 建</i>";
            a6g.y7r(this.md2x, "u-btn2-dis")
        }
    };
    b6f.FZ8R = function() {
        if (this.pN3x || !this.vw5B.bRs5x()) return;
        var cy8q = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.vw5B.gm9d()
            },
            offset: 1
        };
        this.T7M.jG1x(cy8q);
        this.vu5z(!0)
    };
    b6f.bRp5u = function(d6d) {
        var cg7Z = (d6d.result || bc7V).code;
        if (!cg7Z) {
            this.z7s("onsuccess", d6d.data)
        } else {
            this.z7s("onerror", d6d)
        }
        this.bt7m()
    };
    b6f.Ea7T = function() {
        this.bt7m()
    };
    b6f.bRo5t = function(d6d) {
        if (d6d.keyCode == 13) this.FZ8R()
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    v7o = c6e("nej.j"),
    l6f = c6e("nm.x"),
    q6k = c6e("nm.d"),
    n6h = c6e("nm.l"),
    b6f,
    K7D;
    n6h.bjT6N = NEJ.C();
    b6f = n6h.bjT6N.M7F(n6h.ep8h);
    K7D = n6h.bjT6N.cu8m;
    b6f.cA8s = function() {
        this.cG8y()
    };
    b6f.bW7P = function() {
        this.ci8a();
        var j6d = a6g.F7y(this.o6i, "j-flag");
        this.je1x = {
            limit: 301,
            parent: j6d[1],
            cache: {
                klass: q6k.ix1x,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bjX6R.f6b(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l6f.Df7Y,
                escape: k6e.dL8D
            }
        };
        this.iG1x = {
            onsuccess: this.bdY4c.f6b(this),
            onerror: this.dT8L.f6b(this)
        };
        h6b.s6m(j6d[0], "click", this.FZ8R.f6b(this));
        h6b.s6m(j6d[1], "click", this.ld1x.f6b(this))
    };
    b6f.ch7a = function() {
        this.cf7Y = "m-wgt-subscribe"
    };
    b6f.bo7h = function(e6c) {
        e6c.parent = e6c.parent || document.body;
        e6c.clazz = " m-layer-w2";
        e6c.title = "添加到歌单";
        e6c.draggable = !0;
        e6c.mask = !0;
        this.bq7j(e6c);
        this.bdZ4d = (e6c.tracks || []).reverse();
        this.je1x.item.size = this.bdZ4d.length;
        this.iG1x.name = e6c.name || "";
        this.bRn5s = q6k.tK4O.B7u({
            onaddsuccess: this.Fi8a.f6b(this)
        });
        this.tP4T = q6k.ix1x.B7u({
            onlistload: this.cnb0x.f6b(this)
        });
        this.tP4T.bWl6f();
        k6e.be7X(this.bdZ4d,
        function(p6j, r6l, j6d) {
            if (!k6e.mn2x(p6j)) {
                j6d[r6l] = this.bRn5s.eS9J(p6j) || p6j
            }
        },
        this)
    };
    b6f.cnb0x = function() {
        if (this.dQ8I) this.dQ8I.V7O();
        this.dQ8I = H7A.kH1x.B7u(this.je1x)
    };
    b6f.FZ8R = function() {
        this.bt7m();
        if (this.Gp8h) this.Gp8h.V7O();
        this.Gp8h = n6h.bdP4T.B7u(this.iG1x);
        this.Gp8h.J7C()
    };
    b6f.ld1x = function() {
        var cna0x = function(g6a) {
            while (g6a && g6a != document) {
                if (g6a.tagName.toLowerCase() == "li") {
                    return g6a
                }
                g6a = g6a.parentNode
            }
        };
        return function(d6d) {
            h6b.cr8j(d6d);
            var G7z = h6b.Y7R(d6d),
            Ai6c = cna0x(G7z);
            if ( !! Ai6c && !a6g.bG7z(Ai6c, "dis")) {
                this.bdY4c({
                    id: a6g.t7m(Ai6c, "id")
                })
            }
        }
    } ();
    b6f.bdY4c = function(d6d) {
        var D7w = d6d.id;
        if (!D7w || !this.bdZ4d.length) return;
        this.bRn5s.jG1x({
            key: "track_playlist-" + D7w,
            data: {
                tracks: this.bdZ4d,
                pid: D7w
            }
        });
        this.bt7m()
    };
    b6f.Fi8a = function() {
        this.z7s("onsuccess");
        n6h.ba7T.J7C({
            tip: "收藏成功"
        })
    };
    b6f.dT8L = function(d6d) {
        this.bt7m();
        this.z7s("onerror", d6d);
        var cQ8I = "收藏失败";
        switch (d6d.code) {
        case 405:
            cQ8I = "操作过于频繁，先休息一下再试吧";
            break;
        case 507:
            cQ8I = "歌单数量超过限制";
            break;
        case 502:
            cQ8I = "歌曲已经存在"
        }
        n6h.ba7T.J7C({
            tip: cQ8I,
            type: 2
        })
    };
    b6f.bjX6R = function() {
        this.bt7m();
        n6h.ba7T.J7C({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    };
    l6f.nP2x = function(e6c) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n6h.bjT6N.J7C(e6c)
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    dC8u = c6e("nej.p"),
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    v7o = c6e("nej.j"),
    k6e = c6e("nej.u"),
    l6f = c6e("nm.x");
    var bkm6g, pz2x, Z7S = decodeURIComponent(location.href),
    kn1x = /.+(https?:\/\/.+\/proxy.html)/.test(Z7S) ? RegExp.$1: "";
    if ( !! kn1x) {
        v7o.vZ5e("mail_proxy_url", kn1x)
    } else {
        kn1x = v7o.uw4A("mail_proxy_url") || "about:blank"
    }
    bkm6g = a6g.bgM5R({
        src: kn1x,
        onload: function() {
            pz2x = true
        }
    });
    var bRm5r = function() {
        v7o.gQ9H("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var cmW0x = function() {
        if (dC8u.dz8r.browser == "ie" && parseInt(dC8u.dz8r.version) < 9) {
            l6f.eU9L({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l6f.Md9U = function(u7n, D7w, W7P) {
        if (!cmW0x()) return;
        bRm5r();
        if (W7P == "stop") {
            if (!pz2x) throw "proxy not loaded";
            bRm5r();
            bkm6g.contentWindow.location.replace(kn1x + "#" + k6e.cD8v({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bkm6g.contentWindow.location.replace(kn1x + "#" + k6e.cD8v({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: u7n,
                    id: D7w,
                    s: +(new Date),
                    action: W7P
                })
            }))
        }
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    v7o = c6e("nej.j"),
    k6e = c6e("nej.u"),
    l6f = c6e("nm.x"),
    n6h = c6e("nm.l"),
    q6k = c6e("nm.d");
    var lv1x = q6k.hW0x.B7u();
    var pT3x = q6k.tK4O.B7u({
        onlistload: cmV0x,
        onitemload: cmT0x,
        onerror: dT8L
    });
    var Gw8o = q6k.so3x.B7u({
        onlistload: cmL0x,
        onitemload: cmK0x,
        onerror: dT8L
    });
    var bRj5o = {};
    function xN5S(d6d) {
        var g6a = h6b.Y7R(d6d, "d:resAction"),
        W7P = a6g.t7m(g6a, "resAction");
        if (g6a && (W7P == "play" || W7P == "addto")) {
            var u7n = parseInt(a6g.t7m(g6a, "resType"));
            bRg5l({
                action: W7P,
                type: u7n,
                id: a6g.t7m(g6a, "resId"),
                from: a6g.t7m(g6a, "resFrom"),
                data: a6g.t7m(g6a, "resData"),
                order: a6g.t7m(g6a, "resOrder"),
                node: g6a
            });
            if (u7n != 13) bRf5k(g6a)
        }
    }
    function bRg5l(bT7M) {
        var W7P = bT7M.action,
        u7n = bT7M.type,
        D7w = bT7M.id,
        el8d = bT7M.from,
        i6c = bT7M.data,
        uD4H = bT7M.order,
        e6c = {
            limit: 1e3,
            offset: 0,
            data: {
                id: D7w
            },
            ext: {
                id: D7w,
                action: W7P,
                type: u7n,
                from: el8d,
                data: i6c,
                node: bT7M.node
            }
        };
        if (W7P != "play" && W7P != "addto" || !u7n) return;
        if (window.GRef && GRef == "mail") {
            l6f.Md9U(u7n, D7w, W7P);
            return
        }
        switch (u7n) {
        case 13:
            e6c.key = "track_playlist-" + D7w;
            pT3x.me2x(e6c);
            break;
        case 17:
            e6c.key = "program";
            e6c.id = D7w;
            Gw8o.ZI3x(e6c);
            if (W7P == "play") {
                v7o.bl7e("/api/dj/program/listen", {
                    query: {
                        id: D7w
                    }
                })
            }
            break;
        case 18:
            e6c.key = "track";
            e6c.id = D7w;
            pT3x.ZI3x(e6c);
            break;
        case 19:
            e6c.key = "track_album-" + D7w;
            pT3x.me2x(e6c);
            break;
        case 24:
            e6c.key = "track_day";
            pT3x.me2x(e6c);
            break;
        case 2:
            e6c.key = "track_artist_top-" + D7w;
            pT3x.me2x(e6c);
            break;
        case 70:
            e6c.key = "program_djradio-" + D7w + "-" + uD4H;
            e6c.data.radioId = D7w;
            e6c.data.asc = uD4H == 2;
            Gw8o.me2x(e6c);
            break
        }
    }
    function bRe5j(j6d) {
        var m6g = [];
        k6e.be7X(j6d,
        function(p6j) {
            if (p6j.mainSong) {
                p6j.mainSong.program = p6j;
                m6g.push(p6j.mainSong);
                p6j.localupdatetime = +(new Date);
                pT3x.cAY3x(p6j.mainSong);
                p6j.mainTrackId = p6j.mainSong.id;
                delete p6j.mainSong
            } else {
                var bRd5i = pT3x.eS9J(p6j.mainTrackId);
                bRd5i && m6g.push(bRd5i)
            }
        });
        return m6g
    }
    function bej4n(j6d, e6c) {
        var sZ3x = e6c.action == "play" && e6c.type != 17 && e6c.type != 18,
        gu9l = e6c.action == "play";
        if (!j6d.length) return;
        if (e6c.type == 19) {
            j6d = l6f.ON0x(j6d, true, {
                play: true
            },
            {
                source: "album",
                sourceid: e6c.id
            })
        } else {
            j6d = l6f.ON0x(j6d, true, {
                play: true
            })
        }
        k6e.be7X(j6d,
        function(p6j) {
            p6j.source = l6f.brU8M({
                fid: e6c.from,
                fdata: e6c.data,
                type: e6c.type,
                rid: e6c.id
            },
            p6j.id)
        });
        top.player.addTo(j6d, sZ3x, gu9l);
        lv1x.WV2x({
            rid: e6c.id,
            type: e6c.type,
            hash: l6f.OK0x(),
            play: gu9l,
            source: e6c.from,
            sourceid: e6c.data
        })
    }
    function cmV0x(d6d) {
        var dY8Q = d6d.ext || {};
        j6d = pT3x.hL0x(d6d.key);
        bej4n(j6d, dY8Q);
        if (dY8Q.type == 13 && dY8Q.action == "play" && j6d && j6d.length > 0) {
            bRf5k(dY8Q.node);
            v7o.bl7e("/api/playlist/update/playcount", {
                query: {
                    id: dY8Q.id
                }
            })
        }
    }
    function cmT0x(d6d) {
        var j6d = [pT3x.eS9J(d6d.id)],
        bm7f = j6d[0],
        rj3x = l6f.qF3x(bm7f),
        uo4s = bm7f.privilege || {};
        if (rj3x == 10) {
            l6f.wS5X(uo4s.fee || bm7f.fee, bm7f.id, "song", null, uo4s)
        } else if (rj3x == 100) {
            l6f.iU1x(null, null, null, true, bm7f)
        } else if (rj3x == 11) {
            l6f.bWA6u(bm7f.id, 18)
        } else {
            bej4n(j6d, d6d.ext)
        }
    }
    function cmL0x(d6d) {
        var j6d = bRe5j(Gw8o.hL0x(d6d.key));
        bej4n(j6d, d6d.ext)
    }
    function cmK0x(d6d) {
        var j6d = bRe5j([Gw8o.eS9J(d6d.id)]);
        bej4n(j6d, d6d.ext)
    }
    function dT8L() {
        top.player.tipPlay("无法播放，音乐已下线")
    }
    function bRf5k(g6a) {
        var u7n = a6g.t7m(g6a, "resType"),
        D7w = a6g.t7m(g6a, "resId"),
        L7E = u7n + "-" + D7w;
        if (bRj5o[L7E]) return;
        var bRa5f = a6g.A7t("play-count"),
        bla6U = a6g.F7y(g6a.parentNode, "nb"),
        PJ0x = null;
        if (bRa5f) {
            PJ0x = bRa5f
        } else {
            PJ0x = !!bla6U && !!bla6U[0] ? bla6U[0] : null
        }
        if (PJ0x) {
            var ck8c = PJ0x.innerHTML;
            if (/^\d+$/.test(ck8c)) {
                PJ0x.innerText = +ck8c + 1
            }
            bRj5o[L7E] = true
        }
    }
    l6f.cmt9k = function(g6a) {
        h6b.s6m(g6a || document.body, "click", xN5S.f6b(this))
    };
    l6f.cmr9i = function(W7P, u7n, D7w) {
        bRg5l({
            action: W7P,
            type: u7n,
            id: D7w
        })
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    v7o = c6e("nej.j"),
    H7A = c6e("nej.ut"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    b6f,
    K7D;
    q6k.ft9k({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function(m6g, e6c) {
                this.cmp9g(m6g, e6c)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(m6g, e6c) {
                this.z7s("onshareall", e6c.result)
            },
            onerror: function(m6g, e6c) {
                this.z7s("onshareall", e6c.result)
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
            format: function(m6g, e6c) {
                e6c.options.picUrl = m6g.picUrl;
                this.bQY5d(e6c.options, e6c.result)
            },
            onerror: function(m6g, e6c) {
                this.z7s("onshareall", e6c.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(Q7J, e6c) {
                this.qt3x("vid_info-" + e6c.data.nosKey, Q7J);
                return Q7J
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function(e6c) {},
            format: function(m6g, e6c) {
                e6c.data = e6c.data2;
                this.co8g("share-all", e6c)
            },
            onerror: "onshareerror"
        }
    });
    q6k.bln6h = NEJ.C();
    b6f = q6k.bln6h.M7F(q6k.hO0x);
    b6f.cml9c = function() {
        var vO5T = function(Q7J, e6c) {
            e6c.times++;
            if (e6c.times > 10) {
                this.z7s("onvinfoerror", e6c.key, Q7J)
            } else {
                setTimeout(eG9x.f6b(this, e6c), e6c.times * 1e3)
            }
        };
        var Aa6U = function(Q7J, e6c) {
            this.z7s("onvinfo", e6c.key, Q7J)
        };
        var eG9x = function(e6c) {
            var Z7S = e6c.url;
            v7o.bl7e(Z7S + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: Aa6U.ey9p(this, e6c),
                onerror: vO5T.ey9p(this, e6c)
            })
        };
        return function(e6c) {
            e6c.times = 0;
            eG9x.call(this, e6c)
        }
    } ();
    b6f.cMG5L = function() {
        var Fo8g;
        var vO5T = function(Q7J, e6c) {
            if (Q7J.code > 0) {
                clearInterval(this.GT8L);
                this.z7s("onviderror", e6c.data.nosKey)
            }
        };
        var Aa6U = function(L7E, Q7J) {
            if (Q7J.vid && Q7J.covers) {
                clearInterval(this.GT8L);
                this.z7s("onvid", L7E, Q7J)
            }
        };
        var eG9x = function(e6c) {
            if ( + (new Date) - Fo8g > 60 * 60 * 1e3) {
                clearInterval(this.GT8L);
                this.z7s("onviderror", e6c.data.nosKey);
                return
            }
            e6c.onload = Aa6U.f6b(this, e6c.data.nosKey);
            e6c.onerror = vO5T.f6b(this);
            this.co8g("vid-get", e6c)
        };
        return function(e6c) {
            if (!e6c || !e6c.data) return;
            Fo8g = +(new Date);
            this.GT8L = clearInterval(this.GT8L);
            this.GT8L = setInterval(eG9x.f6b(this, e6c), 1e4);
            eG9x.apply(this, arguments)
        }
    } ();
    b6f.cmf9W = function() {
        this.GT8L = clearInterval(this.GT8L)
    };
    b6f.cmp9g = function(m6g, oo2x) {
        if (m6g.event && oo2x.snsTypes) {
            if (oo2x.pics) {
                var bQV5a = [];
                for (var i = 0,
                len = oo2x.pics.length; i < len; i++) {
                    bQV5a[i] = oo2x.pics[i].originId
                }
                this.co8g("share_img_compound", {
                    data: {
                        picIds: bQV5a.join(",")
                    },
                    options: oo2x,
                    result: m6g
                })
            } else {
                oo2x.picUrl = oo2x.picUrl;
                this.bQY5d(oo2x, m6g)
            }
        } else {
            this.z7s("onshareall", m6g)
        }
        var wN5S = q6k.hW0x.B7u();
        wN5S.eZ9Q(oo2x.isPub ? "pubevent": "shareevent", {
            id: m6g.id
        })
    };
    b6f.bQY5d = function(oo2x, m6g) {
        var cy8q = {},
        d6d = m6g.event || {};
        cy8q.eventid = d6d.id;
        cy8q.eventtype = d6d.type;
        oo2x.picUrl && (cy8q.picUrl = oo2x.picUrl);
        cy8q.snsTypes = oo2x.snsTypes;
        cy8q.msg = oo2x.data.msg || "";
        cy8q.type = oo2x.data.type;
        oo2x.data.id && (cy8q.id = oo2x.data.id);
        if (cy8q.eventtype == 41) {
            var Q7J = l6f.He8W(d6d.json);
            cy8q.eventtype = 39;
            if (cy8q.msg) {
                cy8q.msg += "  "
            }
            cy8q.msg += "分享" + Q7J.video.creator.nickname + "的视频《" + Q7J.video.title + "》";
            delete cy8q.id
        }
        this.co8g("share-sns", {
            data: cy8q,
            result: m6g
        })
    };
    b6f.cmd9U = function(e6c) {
        var i6c = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            checkToken: "",
            uuid: "publish-" + +(new Date) + k6e.oD2x(5)
        };
        i6c = NEJ.EX(i6c, e6c);
        if (i6c.id < 0) {
            delete i6c.id;
            i6c.type = "noresource"
        }
        if (!i6c.threadId) {
            delete i6c.threadId
        }
        if (!i6c.actId) {
            delete i6c.actId
        }
        if (!i6c.pics) {
            delete i6c.pics
        } else {
            i6c.pics = JSON.stringify(i6c.pics)
        }
        this.co8g("share-all", {
            data: i6c,
            snsTypes: e6c.snsTypes,
            picUrl: e6c.picUrl,
            pics: e6c.pics,
            isPub: e6c.isPub
        })
    };
    b6f.cmb9S = function(e6c) {
        this.co8g("share-private", e6c)
    };
    b6f.cma9R = function(e6c) {
        this.co8g("video-submit", e6c)
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    n6h = c6e("nm.l"),
    b6f,
    K7D;
    var clZ9Q = {
        40 : !0
    };
    q6k.ft9k({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e6c) {
                e6c.data.getcounts = true;
                e6c.data.pagesize = e6c.data.limit;
                if (e6c.data.offset == 0) {
                    e6c.data.lasttime = -1
                }
                delete e6c.data.offset
            },
            format: function(Q7J, e6c) {
                Q7J.event = l6f.bcS4W(Q7J.event,
                function(p6j, r6l) {
                    return ! clZ9Q[p6j.type]
                });
                this.clS9J(Q7J.event);
                e6c.data.lasttime = Q7J.lasttime;
                if (Q7J.event.length) {
                    Q7J.event.length = e6c.limit
                }
                return {
                    list: Q7J.event,
                    total: Q7J.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(Q7J, e6c) {
                return {
                    list: Q7J.events,
                    total: Q7J.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e6c) {
                e6c.data.pagesize = 20
            },
            format: function(Q7J, e6c) {
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
            filter: function(e6c) {
                if (e6c.data.offset == 0) {
                    e6c.data.time = -1
                }
                delete e6c.data.offset;
                e6c.data.getcounts = true
            },
            format: function(Q7J, e6c) {
                e6c.data.time = Q7J.lasttime;
                var j6d = Q7J.events;
                if (Q7J.more && j6d.length < e6c.data.limit) {
                    j6d = this.LZ9Q(j6d, e6c.data.limit)
                }
                return {
                    list: j6d,
                    total: Q7J.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(m6g, e6c) {
                m6g.conf = e6c.conf;
                return m6g
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e6c, bk7d) {
                if (e6c.like) {
                    if (e6c.comment) {
                        bk7d.url = "/api/v1/comment/like"
                    } else {
                        bk7d.url = "/api/resource/like"
                    }
                    bk7d.onload = "oneventlike";
                    bk7d.onerror = "oneventlikeerr"
                } else {
                    if (e6c.comment) {
                        bk7d.url = "/api/v1/comment/unlike"
                    } else {
                        bk7d.url = "/api/resource/unlike"
                    }
                    bk7d.onload = "oneventunlike";
                    bk7d.onerror = "oneventunlikeerr"
                }
            },
            format: function(m6g, e6c) {
                m6g.eid = e6c.eid;
                m6g.origin = e6c.origin;
                m6g.ext = e6c.ext;
                return m6g
            },
            onmessage: function(cg7Z, m6g) {
                if (cg7Z == 250) {
                    n6h.ba7T.J7C({
                        tip: m6g.message || m6g.msg || "点赞异常",
                        type: 2
                    });
                    return
                }
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(m6g, e6c) {
                m6g.id = e6c.data.id;
                return m6g
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e6c, bk7d) {
                if (e6c.data.type == "nointer") {
                    bk7d.url = "/api/event/rcmd/reject"
                } else if (e6c.data.transcoding) {
                    bk7d.url = "/api/event/video/transcoding/delete"
                } else {
                    bk7d.url = "/api/event/delete"
                }
            },
            format: function(m6g, e6c) {
                m6g.id = e6c.data.id;
                return m6g
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(m6g, e6c) {
                m6g.id = e6c.data.id;
                return m6g
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e6c) {
                e6c.data.lasttime = e6c.data.lasttime || -1;
                e6c.data.pagesize = e6c.data.limit;
                e6c.data.getcounts = true;
                delete e6c.data.offset
            },
            format: function(Q7J, e6c) {
                e6c.data.lasttime = Q7J.lasttime;
                var j6d = Q7J.events;
                if (Q7J.more) j6d = this.LZ9Q(j6d, e6c.data.pagesize);
                return {
                    list: j6d,
                    total: Q7J.size
                }
            },
            onerror: "onlisterror"
        }
    });
    q6k.zY6S = NEJ.C();
    b6f = q6k.zY6S.M7F(q6k.hO0x);
    b6f.cA8s = function() {
        this.cG8y()
    };
    b6f.blN6H = function(u7n, cY8Q) {
        return u7n + "-" + cY8Q
    };
    b6f.cMI5N = function(e6c) {
        this.co8g("ievent-get", e6c)
    };
    b6f.cMJ5O = function(e6c) {
        this.co8g("ievent-new-get", e6c)
    };
    b6f.cMK5P = function(e6c) {
        this.co8g("ievent-user-get", e6c)
    };
    b6f.cML5Q = function(u7n, cY8Q) {
        return this.tr3x(this.blN6H(u7n, cY8Q))
    };
    b6f.cMM5R = function(LW9N, e6c) {
        if (!LW9N || !LW9N.length) return;
        e6c = e6c || {};
        var bB7u = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0,
        HS8K = [], bQM5R = [], i6c; i < LW9N.length; ++i) {
            i6c = LW9N[i];
            i6c = this.tr3x(this.blN6H(i6c.type, i6c.id));
            if (!i6c) {
                HS8K.push(LW9N[i].id);
                bQM5R.push(bB7u[LW9N[i].type] || 0)
            }
        }
        if (!HS8K.length) {
            this.z7s("oneventresload", e6c.conf);
            return
        }
        e6c.data = {
            ids: JSON.stringify(HS8K),
            types: JSON.stringify(bQM5R)
        };
        e6c.onload = this.clF9w.f6b(this);
        this.co8g("ievent-res-get", e6c)
    };
    b6f.clF9w = function(m6g) {
        if (m6g.code != 200) {
            this.z7s("oneventreserror", m6g.code);
            return
        }
        var bB7u = {
            1 : "playlist",
            2 : "song",
            3 : "mv",
            4 : "album",
            5 : "program"
        };
        for (var i = 0,
        j6d = m6g.results; i < j6d.length; ++i) {
            this.qt3x(this.blN6H(bB7u[j6d[i].type], j6d[i].id), j6d[i])
        }
        this.z7s("oneventresload", m6g.conf)
    };
    b6f.bQL5Q = function(i6c) {
        var L7E = "event-list";
        this.box7q(L7E, i6c);
        this.z7s("onitemadd", {
            key: L7E,
            action: "add",
            data: i6c,
            flag: -1
        })
    };
    b6f.qb3x = function(e6c) {
        this.co8g("ievent-like", e6c)
    };
    b6f.nb2x = function(e6c) {
        this.co8g("ievent-delete", e6c)
    };
    b6f.LZ9Q = function(j6d, go9f) {
        for (var i = j6d.length; i < go9f; i++) j6d.push(null);
        return j6d
    };
    b6f.clS9J = function(j6d) {
        var m6g = [];
        if (!j6d || !j6d.length) return;
        k6e.be7X(j6d,
        function(d6d) {
            d6d.biData = this.bQJ5O(d6d)
        },
        this)
    };
    b6f.bQJ5O = function() {
        var bbL3x = {
            32 : "comment",
            33 : "activity",
            34 : "recomment_artist"
        },
        cly9p = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d6d) {
            var Q7J = {
                id: d6d.id,
                sourceid: d6d.user.userId,
                alg: d6d.rcmdInfo ? d6d.rcmdInfo.alg: null,
                contentType: bbL3x[d6d.type] || (k6e.do8g(cly9p, d6d.type) != -1 ? "user_event": "other")
            };
            return Q7J
        }
    } ();
    b6f.Hi8a = function(clw9n, d6d) {
        var Q7J = this.bQJ5O(d6d);
        Q7J.actionType = clw9n;
        if (window.log) log("eventclick", Q7J)
    };
    b6f.cMO5T = function(e6c) {
        this.co8g("event_latest-list", e6c)
    }
})(); (function(factory) {
    window.SparkMD5 = factory()
})(function(undefined) {
    "use strict";
    var add32 = function(a, b) {
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
        i,
        length,
        tail,
        tmp,
        lo,
        hi;
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
        i,
        length,
        tail,
        tmp,
        lo,
        hi;
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
        add32 = function(x, y) {
            var lsw = (x & 65535) + (y & 65535),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) { (function() {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function(from, to) {
                var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;
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
        return returnUInt8Array ? arr: buff
    }
    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result: result.buffer
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
    SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function(contents) {
        this.ts3x += contents;
        this.br7k += contents.length;
        var length = this.ts3x.length,
        i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dW8O, md5blk(this.ts3x.substring(i - 64, i)))
        }
        this.ts3x = this.ts3x.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function(raw) {
        var buff = this.ts3x,
        length = buff.length,
        i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.pY3x(tail, length);
        ret = hex(this.dW8O);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function() {
        this.ts3x = "";
        this.br7k = 0;
        this.dW8O = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function() {
        return {
            buff: this.ts3x,
            length: this.br7k,
            hash: this.dW8O
        }
    };
    SparkMD5.prototype.setState = function(state) {
        this.ts3x = state.buff;
        this.br7k = state.length;
        this.dW8O = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function() {
        delete this.dW8O;
        delete this.ts3x;
        delete this.br7k
    };
    SparkMD5.prototype.pY3x = function(tail, length) {
        var i = length,
        tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dW8O, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.br7k * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dW8O, tail)
    };
    SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content),
        ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function() {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this.ts3x.buffer, arr, true),
        length = buff.length,
        i;
        this.br7k += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dW8O, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.ts3x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this.ts3x,
        length = buff.length,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        i,
        ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.pY3x(tail, length);
        ret = hex(this.dW8O);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function() {
        this.ts3x = new Uint8Array(0);
        this.br7k = 0;
        this.dW8O = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.pY3x = SparkMD5.prototype.pY3x;
    SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
        ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
}); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    v7o = c6e("nej.j"),
    et8l = c6e("nej.g"),
    k6e = c6e("nej.u"),
    fY9P = c6e("nej.n"),
    H7A = c6e("nej.ut"),
    l6f = c6e("nm.x"),
    q6k = c6e("nm.d"),
    iH1x = c6e("nm.x.nos"),
    x7q = c6e("nm.w");
    var clu9l = 1024 * 256,
    clt9k = 1024 * 1024 * 2,
    rB3x = {
        TOKEN_ERROR: -100,
        DNS_ERROR: -101
    },
    bQI5N = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice: bu7n,
    rA3x = {
        MD5_DONE: .2,
        TOKEN_GET: .22,
        DNS_GET: .24,
        UPLOADED: 1
    },
    kb1x = {
        AUDIO: "audio",
        IMAGE: "image",
        TXT: "txt",
        RAR: "rar",
        OTHER: "other",
        VIDEO: "video"
    };
    var oV2x = {};
    var wN5S = q6k.hW0x.B7u();
    iH1x.cMP5U = function() {
        return kb1x
    };
    var clp9g = function() {
        return k6e.oD2x(6) + +(new Date)
    };
    var LT9K = function(jd1x, e6c) {
        if (!oV2x[e6c.taskId]) {
            return
        } (e6c.onuploading || bu7n).call(this, jd1x)
    };
    var bmv6p = function(S7L) {
        var cll9c = S7L.md5,
        db8T = S7L.file,
        clk9b = cll9c + db8T.size;
        return "nos_file_hash_" + clk9b
    };
    var clj9a = function(S7L) {
        var L7E = bmv6p(S7L),
        i6c = v7o.bXQ6K(L7E, "{}");
        try {
            i6c = JSON.parse(i6c)
        } catch(e) {
            i6c = {}
        }
        return i6c
    };
    var cli9Z = function(S7L, e6c) {
        if (!S7L.md5) {
            return
        }
        var L7E = bmv6p(S7L),
        i6c = v7o.bXQ6K(L7E, "{}");
        try {
            i6c = JSON.parse(i6c)
        } catch(e) {
            i6c = {}
        }
        NEJ.X(i6c, e6c);
        v7o.vZ5e(L7E, JSON.stringify(i6c))
    };
    var clh9Y = function(S7L) {
        var L7E = bmv6p(S7L);
        v7o.Oj0x(L7E)
    };
    var clg9X = function(S7L, eN9E) {
        var Z7S = S7L.urls[Math.min(S7L.urlIndex, S7L.urls.length - 1)],
        db8T = S7L.file,
        lH1x = S7L.bucket,
        nm2x = S7L.objectKey,
        cq8i = S7L.token,
        bM7F = S7L.context,
        pD2x = {},
        Yt3x = bQI5N.call(db8T, S7L.beg, S7L.end),
        bx7q = {
            offset: S7L.beg,
            complete: S7L.lastChunk || false,
            version: "1.0"
        };
        if (bM7F) {
            bx7q.context = bM7F
        }
        pD2x["x-nos-token"] = cq8i;
        pD2x[et8l.BH7A] = db8T.type;
        S7L.reqId = v7o.bl7e(Z7S + "/" + lH1x + "/" + nm2x, {
            type: "json",
            method: "POST",
            headers: pD2x,
            query: bx7q,
            data: Yt3x,
            onload: eN9E.onload,
            onerror: eN9E.onerror
        })
    };
    var clf9W = function(m6g, S7L, e6c) {
        m6g = {
            code: 200,
            fileName: e6c.file.name,
            size: e6c.file.size,
            type: e6c.file.type,
            bucket: S7L.bucket,
            docId: S7L.docId,
            objectKey: S7L.objectKey,
            url: "//nos.netease.com/" + S7L.bucket + "/" + S7L.objectKey,
            taskId: e6c.taskId
        };
        clh9Y(S7L);
        if (!oV2x[e6c.taskId]) {
            return
        }
        delete oV2x[e6c.taskId];
        wN5S.eZ9Q("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(m6g)
        }); (e6c.onsuccess || bu7n).call(this, m6g)
    };
    var cld9U = function(m6g, e6c) { (e6c.onerror || bu7n).call(this, m6g)
    };
    var clc9T = function(m6g, S7L, e6c) {
        S7L.context = m6g.context;
        S7L.beg = m6g.offset;
        var jd1x = S7L.beg / S7L.file.size;
        cli9Z(S7L, {
            bucket: S7L.bucket,
            objectKey: S7L.objectKey,
            token: S7L.token,
            context: S7L.context,
            beg: S7L.beg,
            updateTime: +(new Date)
        });
        jd1x = rA3x.DNS_GET + (rA3x.UPLOADED - rA3x.DNS_GET) * jd1x;
        LT9K(jd1x, e6c);
        if (S7L.lastChunk) {
            clf9W(m6g, S7L, e6c)
        } else {
            beL4P(S7L, e6c)
        }
    };
    var clb9S = function(m6g, S7L, e6c) {
        wN5S.eZ9Q("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: m6g.data,
            body: m6g.extData,
            ext: JSON.stringify(S7L),
            timging: +(new Date) - S7L.chuckUploadStartTime
        });
        if (S7L.urlIndex < Math.max(S7L.urls.length - 1, 5)) {
            S7L.urlIndex++;
            beL4P(S7L, e6c)
        } else {
            cld9U(m6g, e6c)
        }
    };
    var beL4P = function(S7L, e6c) {
        if (!S7L || S7L.step == -1) {
            return
        }
        S7L.end = S7L.beg + clu9l;
        if (S7L.end >= S7L.file.size) {
            S7L.end = S7L.file.size;
            S7L.lastChunk = true
        }
        S7L.chuckUploadStartTime = +(new Date);
        clg9X(S7L, {
            onload: clc9T.ey9p(this, S7L, e6c),
            onerror: clb9S.ey9p(this, S7L, e6c)
        })
    };
    var cla9R = function(m6g, S7L, e6c) {
        S7L.beg = m6g.offset;
        var jd1x = S7L.beg / S7L.file.size;
        jd1x = rA3x.DNS_GET + (rA3x.UPLOADED - rA3x.DNS_GET) * jd1x;
        LT9K(jd1x, e6c);
        beL4P(S7L, e6c)
    };
    var ckZ9Q = function(m6g, S7L, e6c) {
        S7L.beg = 0;
        delete S7L.context;
        bnd6X(S7L, e6c)
    };
    var bQG5L = function(XB2x, S7L, e6c) {
        S7L.lastChunk = false;
        S7L.urls = XB2x;
        S7L.urlIndex = 0;
        LT9K(rA3x.DNS_GET, e6c);
        if (S7L.fromExist) {
            delete S7L.fromExist;
            var Z7S = S7L.urls[Math.min(S7L.urlIndex, S7L.urls.length - 1)],
            lH1x = S7L.bucket,
            nm2x = S7L.objectKey,
            cq8i = S7L.token,
            bM7F = S7L.context,
            pD2x = {},
            bx7q = {
                context: bM7F,
                version: "1.0"
            };
            pD2x["x-nos-token"] = cq8i;
            S7L.reqId = v7o.bl7e(Z7S + "/" + lH1x + "/" + nm2x + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: pD2x,
                query: bx7q,
                onload: cla9R.ey9p(this, S7L, e6c),
                onerror: ckZ9Q.ey9p(this, S7L, e6c)
            })
        } else {
            S7L.beg = 0;
            beL4P(S7L, e6c)
        }
    };
    var ckX9O = function(m6g, S7L, e6c) {
        m6g.code = rB3x.DNS_ERROR; (e6c.onerror || bu7n).call(this, m6g)
    };
    var bQF5K = function(i6c, e6c) {
        var m6g = i6c.result || {},
        lH1x = m6g.bucket,
        nm2x = m6g.objectKey,
        cq8i = m6g.token,
        S7L = oV2x[e6c.taskId];
        if (!lH1x || !nm2x || !cq8i || !S7L) {
            m6g.code = rB3x.TOKEN_ERROR; (e6c.onerror || bu7n).call(this, m6g);
            return
        }
        S7L.bucket = lH1x;
        S7L.objectKey = nm2x;
        S7L.docId = m6g.docId;
        S7L.token = cq8i;
        LT9K(rA3x.TOKEN_GET, e6c);
        if (location.protocol == "https:") {
            bQG5L(["//nosup-hz1.127.net"], S7L, e6c)
        } else {
            S7L.reqId = iH1x.ckV9M({
                bucket: lH1x,
                onload: bQG5L.ey9p(this, S7L, e6c),
                onerror: ckX9O.ey9p(this, S7L, e6c)
            })
        }
        S7L.step = 1
    };
    var ckU9L = function(m6g, e6c) {
        m6g.code = rB3x.TOKEN_ERROR; (e6c.onerror || bu7n).call(this, m6g)
    };
    var bnd6X = function(S7L, e6c) {
        var db8T = e6c.file,
        fa9R = db8T.name || "",
        dY8Q = fa9R.split(".").pop();
        iH1x.beO4S(NEJ.X({
            filename: fa9R,
            ext: dY8Q,
            onload: bQF5K.ey9p(this, e6c),
            onerror: ckU9L.ey9p(this, e6c)
        },
        e6c,
        function(p6j) {
            return k6e.gZ9Q(p6j) || k6e.mn2x(p6j)
        }))
    };
    var ckT9K = function(S7L, e6c) {
        if (!S7L || S7L.step == -1) {
            return
        }
        S7L.md5 = S7L.spark.end();
        var LI9z = clj9a(S7L) || {},
        lH1x = LI9z.bucket,
        nm2x = LI9z.objectKey,
        cq8i = LI9z.token;
        if (!lH1x || !nm2x || !cq8i) {
            bnd6X(S7L, e6c)
        } else {
            S7L.context = LI9z.context;
            S7L.beg = LI9z.beg;
            S7L.fromExist = true;
            bQF5K({
                result: LI9z
            },
            e6c)
        }
    };
    var ckS9J = function(HZ8R, S7L, e6c) {
        if (!S7L || S7L.step == -1) {
            return
        }
        S7L.beg = S7L.end;
        var jd1x = S7L.beg / S7L.file.size;
        jd1x = 0 + rA3x.MD5_DONE * jd1x;
        LT9K(jd1x, e6c);
        S7L.spark.append(HZ8R.result);
        if (S7L.lastChunk) {
            ckT9K(S7L, e6c)
        } else {
            bQC4G(S7L, e6c)
        }
    };
    var ckO9F = function(m6g, S7L, e6c) {
        S7L.md5 = "";
        bnd6X(S7L, e6c)
    };
    var bQC4G = function(S7L, e6c) {
        if (!S7L || S7L.step == -1) {
            return
        }
        S7L.end = S7L.beg + clt9k;
        if (S7L.end >= S7L.file.size) {
            S7L.end = S7L.file.size;
            S7L.lastChunk = true
        }
        var HZ8R = new FileReader;
        HZ8R.onload = ckS9J.f6b(this, HZ8R, S7L, e6c);
        HZ8R.onerror = ckO9F.f6b(this, HZ8R, S7L, e6c);
        HZ8R.readAsArrayBuffer(bQI5N.call(S7L.file, S7L.beg, S7L.end))
    };
    iH1x.ii0x = function(e6c) {
        var db8T = e6c.file,
        fa9R = db8T.name || "",
        dY8Q = fa9R.split(".").pop(),
        Ia8S = clp9g();
        e6c.taskId = Ia8S;
        oV2x[Ia8S] = {
            step: 0
        };
        LT9K(0, e6c);
        var S7L = oV2x[Ia8S];
        S7L.id = Ia8S;
        S7L.file = db8T;
        S7L.beg = 0;
        S7L.lastChunk = false;
        S7L.spark = new SparkMD5.ArrayBuffer;
        var ckN9E = e6c.onerror || bu7n;
        e6c.onerror = function() {
            if (!oV2x[Ia8S]) {
                return
            }
            delete oV2x[Ia8S];
            ckN9E.apply(this, arguments)
        };
        wN5S.eZ9Q("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bQC4G(S7L, e6c);
        return Ia8S
    };
    iH1x.kN1x = function(D7w) {
        var S7L = oV2x[D7w];
        if (S7L) {
            if (S7L.step == 0) {
                delete oV2x[D7w]
            } else {
                S7L.step = -1;
                if (S7L.reqId) {
                    v7o.kN1x(S7L.reqId)
                }
                delete oV2x[D7w]
            }
        }
    };
    iH1x.beO4S = function() {
        var zM6G = function(m6g, e6c) { (e6c.onload || bu7n).call(this, m6g)
        };
        var CR7K = function(m6g, e6c) { (e6c.onerror || bu7n).call(this, m6g)
        };
        var bQB4F = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function(e6c) {
            var beT4X = e6c.returnBody || bQB4F;
            if (k6e.mn2x(beT4X)) {
                try {
                    JSON.stringify(beT4X)
                } catch(e) {
                    beT4X = bQB4F
                }
            }
            return v7o.bl7e("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e6c.filename || "",
                    ext: e6c.ext || "",
                    type: e6c.type || kb1x.OTHER,
                    bucket: e6c.bucket || "",
                    local: e6c.local || false,
                    nos_product: e6c.nosProduct || 0,
                    return_body: beT4X
                },
                onload: zM6G.ey9p(this, e6c),
                onerror: CR7K.ey9p(this, e6c)
            })
        }
    } ();
    iH1x.ckV9M = function() {
        var ckL9C = "//wanproxy.127.net/lbs";
        var zM6G = function(m6g, e6c) {
            if (m6g.lbs) {}
            var XB2x = m6g.upload;
            if (!XB2x || !XB2x.length) {
                CR7K(m6g, e6c)
            } (e6c.onload || bu7n).call(this, XB2x)
        };
        var CR7K = function(m6g, e6c) { (e6c.onerror || bu7n).call(this, m6g)
        };
        return function(e6c) {
            var lH1x = e6c.bucket;
            return v7o.bl7e(ckL9C, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: lH1x
                },
                onload: zM6G.ey9p(this, e6c),
                onerror: CR7K.ey9p(this, e6c)
            })
        }
    } ();
    iH1x.beV4Z = function() {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && ( !! Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    v7o = c6e("nej.j"),
    cd7W = c6e("nej.ut"),
    bD7w = c6e("nej.ui"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    iH1x = c6e("nm.x.nos"),
    E7x = c6e("nm.m"),
    n6h = c6e("nm.l"),
    x7q = c6e("nm.w"),
    b6f,
    K7D;
    var gB9s = a6g.jJ1x('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    x7q.LF9w = NEJ.C();
    b6f = x7q.LF9w.M7F(bD7w.er8j);
    b6f.ch7a = function() {
        this.cf7Y = gB9s
    };
    b6f.bW7P = function() {
        this.ci8a();
        this.bK7D = this.o6i;
        this.hM0x = a6g.F7y(this.o6i, "j-file")[0];
        h6b.s6m(this.hM0x, "change", this.rg3x.f6b(this))
    };
    b6f.bo7h = function(e6c) {
        e6c = e6c || {};
        this.bq7j(e6c);
        this.hM0x.id = e6c.inputId || "";
        this.hM0x.accept = e6c.accept || "*";
        this.zk6e = e6c
    };
    b6f.beX4b = function() {
        return a6g.mc2x(this.hM0x)
    };
    b6f.rg3x = function(d6d) {
        if (this.hM0x.value == "") return;
        var ll1x = this.hM0x.value.split("\\"),
        fa9R = ll1x.length > 0 ? ll1x[ll1x.length - 1] : ll1x[0],
        pn2x = (this.hM0x.files || [{}])[0];
        var cp8h = {
            files: this.hM0x.files,
            filename: fa9R,
            size: pn2x.size,
            cancelUpload: false
        };
        this.z7s("onchange", cp8h);
        if (cp8h.cancelUpload) {
            this.hM0x.value = "";
            return
        }
        if (cp8h.stopped) {
            return
        }
        this.Xb2x()
    };
    b6f.Xb2x = function() {
        if (this.hM0x.value == "") return;
        var ll1x = this.hM0x.value.split("\\"),
        fa9R = ll1x.length > 0 ? ll1x[ll1x.length - 1] : ll1x[0],
        dY8Q = (fa9R.split(".") || []).pop(),
        pn2x = (this.hM0x.files || [{}])[0],
        Iz9q = (pn2x.type || "").split("/").shift();
        if (pn2x.size > 100 * 1024 * 1024) {
            return this.mM2x("onerror", {
                code: -200
            })
        }
        this.z7s("onuploading", 0);
        this.bQA4E = iH1x.beO4S(NEJ.X({
            onload: this.WS2x.ey9p(this, fa9R),
            onerror: this.mM2x.f6b(this)
        },
        this.zk6e,
        function(p6j) {
            return k6e.gZ9Q(p6j) || k6e.mn2x(p6j)
        }))
    };
    b6f.WS2x = function(bQ7J, fa9R) {
        var m6g = bQ7J.result || {},
        lH1x = m6g.bucket,
        nm2x = m6g.objectKey,
        cq8i = m6g.token;
        if (!lH1x || !nm2x || !cq8i) {
            bQ7J.code = -100;
            this.mM2x.call(this, bQ7J);
            return
        }
        var pn2x = (this.hM0x.files || [{}])[0];
        var if0x = a6g.dj8b(this.bK7D);
        if0x[0].value = nm2x;
        if0x[1].value = cq8i;
        if0x[2].value = "json";
        if (pn2x.type && pn2x.type.indexOf("audio") == 0) {
            if0x[3].value = "audio/mpeg"
        } else {
            if0x[3].value = pn2x.type || ""
        }
        this.bK7D.action = "//nos.netease.com/" + lH1x;
        this.IG9x = m6g;
        this.rv3x = fa9R;
        this.z7s("onuploading", .2);
        this.ii0x()
    };
    b6f.ii0x = function() {
        this.bQA4E = v7o.ii0x(this.bK7D, {
            type: "json",
            onload: this.wC5H.f6b(this),
            onerror: this.mM2x.f6b(this),
            onuploading: this.bfd4h.f6b(this)
        })
    };
    b6f.kN1x = function() {
        v7o.kN1x(this.bQA4E);
        this.bK7D.reset()
    };
    b6f.wC5H = function(bQ7J) {
        var cq8i = this.IG9x,
        fa9R = this.rv3x,
        pn2x = (this.hM0x.files || [{}])[0],
        kS1x = {
            code: 200,
            fileName: fa9R,
            size: pn2x.size,
            bucket: cq8i.bucket,
            docId: cq8i.docId,
            objectKey: cq8i.objectKey,
            url: "//nos.netease.com/" + cq8i.bucket + "/" + cq8i.objectKey
        };
        if (!bQ7J) {
            bQ7J = kS1x
        }
        if (!bQ7J.code || bQ7J.code == 200) {
            this.z7s("onsuccess", NEJ.X(kS1x, bQ7J))
        } else {
            this.z7s("onerror", bQ7J)
        }
        this.bK7D.reset()
    };
    b6f.mM2x = function(bQ7J) {
        this.z7s("onerror", bQ7J);
        this.bK7D.reset()
    };
    b6f.bfd4h = function(jd1x) {
        this.z7s("onuploading", .2 + jd1x.loaded / jd1x.total * .8)
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    v7o = c6e("nej.j"),
    cd7W = c6e("nej.ut"),
    bD7w = c6e("nej.ui"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    iH1x = c6e("nm.x.nos"),
    E7x = c6e("nm.m"),
    n6h = c6e("nm.l"),
    x7q = c6e("nm.w"),
    b6f,
    K7D;
    x7q.WM2x = NEJ.C();
    b6f = x7q.WM2x.M7F(cd7W.cL8D);
    b6f.bo7h = function(e6c) {
        e6c = e6c || {};
        this.bq7j(e6c);
        this.bfi4m = x7q.LF9w.B7u(NEJ.X({
            parent: e6c.parent,
            onchange: this.rg3x.f6b(this),
            onuploading: this.z7s.f6b(this, "onuploading"),
            onsuccess: this.z7s.f6b(this, "onsuccess"),
            onerror: this.z7s.f6b(this, "onerror")
        },
        e6c,
        function(p6j) {
            return k6e.gZ9Q(p6j) || k6e.mn2x(p6j)
        }));
        if (e6c.multiple && iH1x.beV4Z()) {
            a6g.hc9T(this.bfi4m.beX4b(), "multiple", true)
        }
        this.zk6e = e6c
    };
    b6f.rg3x = function(e6c) {
        var fa9R = e6c.filename,
        dY8Q = (fa9R.split(".") || []).pop();
        this.bQz4D = (e6c.files || [{}])[0];
        this.z7s("onchange", e6c);
        if (iH1x.beV4Z() && !e6c.stopped && !e6c.cancelUpload) {
            this.Xb2x(true);
            e6c.stopped = true
        }
    };
    b6f.beX4b = function() {
        return this.bfi4m.beX4b()
    };
    b6f.ckI9z = function() {
        return this.bQz4D
    };
    b6f.Xb2x = function(fn9e, db8T) {
        db8T = db8T || this.bQz4D;
        if (iH1x.beV4Z()) {
            this.bQy4C = iH1x.ii0x(NEJ.X({
                file: db8T,
                local: this.zk6e.bucket && this.zk6e.bucket.length,
                onuploading: this.z7s.f6b(this, "onuploading"),
                onsuccess: this.z7s.f6b(this, "onsuccess"),
                onerror: this.z7s.f6b(this, "onerror")
            },
            this.zk6e,
            function(p6j) {
                return k6e.gZ9Q(p6j) || k6e.mn2x(p6j)
            }));
            return this.bQy4C
        } else if (!fn9e) {
            this.bfi4m.Xb2x()
        }
    };
    b6f.kN1x = function(D7w) {
        D7w = D7w || this.bQy4C;
        if (D7w) {
            iH1x.kN1x(D7w)
        }
        this.bfi4m.kN1x()
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    et8l = c6e("nej.g"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    v7o = c6e("nej.j"),
    fY9P = c6e("nej.n"),
    H7A = c6e("nej.ut"),
    bd7W = c6e("nej.ui"),
    x7q = c6e("nm.w"),
    n6h = c6e("nm.l"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    N7G = c6e("nm.x.f"),
    iH1x = c6e("nm.x.nos"),
    b6f,
    K7D,
    boA7t = {
        0 : "",
        "-1": "不能添加重复图片",
        "-10": "最多只能添加9张",
        "-3": "请选择不超过5M的图片"
    },
    boC7v = 5 * 1024 * 1024,
    cMQ5V = 80,
    bfl4p = /\.(bmp|jpg|jpeg|png|gif)$/i;
    x7q.bQx4B = NEJ.C();
    b6f = x7q.bQx4B.M7F(H7A.vT5Y);
    b6f.bmg6a = function() {
        return {
            x: this.Eq7j.clientWidth - this.o6i.offsetWidth,
            y: this.Eq7j.clientHeight - this.o6i.offsetHeight
        }
    };
    x7q.boG7z = NEJ.C();
    b6f = x7q.boG7z.M7F(bd7W.er8j);
    b6f.ch7a = function() {
        this.cf7Y = "m-xwgt-share-upload"
    };
    b6f.bW7P = function() {
        this.ci8a();
        var j6d = a6g.F7y(this.o6i, "j-flag");
        this.bfm4q = j6d.shift();
        this.Lx9o = j6d.shift();
        this.VJ2x = j6d.shift();
        this.bQw4A = {
            onchange: this.bQv4z.ey9p(this, 0),
            onerror: this.dT8L.f6b(this),
            onsuccess: this.ss3x.f6b(this),
            multiple: true,
            parent: this.Lx9o,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.boS7L = {
            onchange: this.bQv4z.ey9p(this, 1),
            onerror: this.dT8L.f6b(this),
            onsuccess: this.ss3x.f6b(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.ckC9t = x7q.WM2x.B7u(this.bQw4A)
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.boS7L.parent = e6c.button;
        this.Lv9m && this.Lv9m.V7O();
        this.Lv9m = x7q.WM2x.B7u(this.boS7L);
        this.o6i.style.display = "none";
        if ( !! this.fp9g) {
            for (var i = this.fp9g.length - 1; i >= 0; i--) {
                a6g.cS8K(this.fp9g[i].element, false);
                if (this.fp9g[i].dragger) this.fp9g[i].dragger.V7O()
            }
        }
        this.fp9g = [];
        if (this.DX7Q) {
            clearTimeout(this.DX7Q)
        }
        this.bfp4t(0);
        this.Vr2x = 0;
        this.bY7R([[this.bQw4A.parent, "click", this.bQu4y.f6b(this)], [this.boS7L.parent, "click", this.bQu4y.f6b(this)]])
    };
    b6f.bC7v = function() {
        h6b.ht0x(this.sY3x, "click");
        if ( !! this.fp9g) {
            for (var i = this.fp9g.length - 1; i >= 0; i--) {
                a6g.cS8K(this.fp9g[i].element, false);
                if (this.fp9g[i].dragger) this.fp9g[i].dragger.V7O()
            }
        }
        this.fp9g = [];
        if (this.DX7Q) {
            clearTimeout(this.DX7Q)
        }
        this.DX7Q = 0;
        this.Lv9m && this.Lv9m.V7O();
        delete this.Lv9m;
        this.bH7A()
    };
    b6f.bQu4y = function(d6d) {
        if (!iH1x.beV4Z() && this.fp9g.doing) {
            h6b.bg7Z(d6d)
        }
    };
    b6f.bQv4z = function(e6c, r6l) {
        var mi2x = e6c.files,
        hI0x;
        e6c.stopped = true;
        if (!mi2x) {
            if (e6c.filename) {
                mi2x = [{
                    name: e6c.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0,
        len = mi2x.length; i < len; i++) {
            if (!bfl4p.test(mi2x[i].name)) {
                this.bpi7b({
                    path: mi2x[i].name,
                    index: r6l,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (mi2x[i].size > boC7v) {
                this.bpj7c( - 3);
                this.bpi7b({
                    path: mi2x[i].name,
                    index: r6l,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bpi7b({
                    path: mi2x[i].name,
                    file: mi2x[i],
                    index: r6l,
                    status: 0
                })
            }
        }
    };
    b6f.bpi7b = function(uZ5e) {
        if (this.fp9g.length >= 9) {
            this.bpj7c( - 10, 3e3, this.bQt4x.f6b(this));
            return
        }
        this.ckz9q(uZ5e);
        this.fp9g.push(uZ5e);
        if ( !! this.fp9g.length) {
            this.o6i.style.display = ""
        }
        if (this.fp9g.length >= 9) {
            this.Lx9o.style.display = "none"
        } else {
            this.Lx9o.style.display = ""
        }
        this.Lt9k()
    };
    b6f.Lt9k = function() {
        var bpo7h = -1,
        bQs4w = 0;
        for (var i = 0,
        l = this.fp9g.length; i < l; i++) {
            if (this.fp9g[i].status == 1) {
                return
            }
            if (this.fp9g[i].status == 0 && bpo7h < 0) {
                bpo7h = i
            }
            if (this.fp9g[i].status == 2 || this.fp9g[i].status < 0) {
                bQs4w++
            }
        }
        var p6j = this.fp9g[bpo7h];
        if (p6j) { (p6j.index == 0 ? this.ckC9t: this.Lv9m).Xb2x(false, p6j.file);
            p6j.status = 1;
            this.fp9g.doing = p6j;
            this.z7s("onstartupload", {})
        } else if (bQs4w == this.fp9g.length) {
            this.z7s("onfinishupload", {})
        }
    };
    b6f.bpq7j = function() {
        return this.fp9g.doing || {}
    };
    b6f.dT8L = function(d6d) {
        var uZ5e = this.bpq7j();
        uZ5e.status = -4;
        uZ5e.fail = "上传<br>失败";
        this.bQr4v(uZ5e);
        this.fp9g.doing = null;
        this.Lt9k()
    };
    b6f.ss3x = function(d6d) {
        var uZ5e = this.bpq7j(),
        dV8N = d6d.fileName.match(bfl4p);
        uZ5e.picUrl = d6d.url;
        v7o.bl7e("/upload/event/img/v1", {
            query: {
                imgid: d6d.docId,
                format: dV8N[1]
            },
            type: "json",
            onload: this.bQq4u.f6b(this),
            onerror: this.bQq4u.f6b(this)
        })
    };
    b6f.bQq4u = function(d6d) {
        if (d6d && d6d.code == 200 && d6d.picInfo) {
            var uZ5e = this.bpq7j();
            uZ5e.status = 2;
            var bp7i = NEJ.X({},
            d6d.picInfo);
            bp7i.originId = bp7i.originIdStr;
            bp7i.squareId = bp7i.squareIdStr;
            bp7i.rectangleId = bp7i.rectangleIdStr;
            bp7i.pcSquareId = bp7i.pcSquareIdStr;
            bp7i.pcRectangleId = bp7i.pcRectangleIdStr;
            bp7i.originJpgId = bp7i.originJpgIdStr || bp7i.originJpgId;
            uZ5e.picInfo = bp7i;
            this.bQr4v(uZ5e);
            this.fp9g.doing = null;
            this.Lt9k()
        } else {
            this.dT8L(d6d)
        }
    };
    b6f.bpj7c = function(r6l, ib0x, eN9E) {
        if (this.Vr2x < r6l) {
            return
        }
        if (this.DX7Q) {
            clearTimeout(this.DX7Q);
            this.DX7Q = 0
        }
        if (ib0x) {
            this.VJ2x.innerText = boA7t[r6l * 1];
            this.Vr2x = r6l;
            this.DX7Q = setTimeout(this.bfp4t.f6b(this, r6l, eN9E), ib0x)
        } else {
            this.VJ2x.innerText = boA7t[r6l];
            this.Vr2x = r6l
        }
        this.VJ2x.style.display = ""
    };
    b6f.bfp4t = function(r6l, eN9E) {
        if (r6l && this.Vr2x !== r6l) {
            return
        }
        this.Vr2x = 0;
        this.VJ2x.innerText = boA7t[0];
        this.VJ2x.style.display = "none";
        eN9E && eN9E()
    };
    b6f.ckz9q = function(db8T) {
        var i6c = {};
        if (db8T.fail) {
            i6c.fail = db8T.fail
        }
        var dZ8R = a6g.ce7X("m-xwgt-share-upload-preview", i6c);
        db8T.element = a6g.oC2x(dZ8R);
        h6b.s6m(a6g.F7y(db8T.element, "del")[0], "mousedown", this.cku9l.f6b(this, db8T), false);
        this.bfm4q.insertBefore(db8T.element, this.bfm4q.lastElementChild);
        db8T.dragger = x7q.bQx4B.B7u({
            view: this.bfm4q.parentNode,
            body: db8T.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Ty1x.f6b(this, db8T),
            onchange: this.ckt9k.f6b(this, db8T),
            ondragend: this.blC6w.f6b(this, db8T)
        })
    };
    b6f.bQr4v = function(db8T) {
        if (!db8T || !db8T.element) {
            return false
        }
        var i6c = {};
        if (db8T.fail) {
            i6c.fail = db8T.fail
        } else {
            i6c.url = db8T.picUrl
        }
        a6g.w7p(db8T.element, "z-fail");
        db8T.element.firstChild.outerHTML = a6g.ce7X("m-xwgt-share-upload-preview-img", i6c)
    };
    b6f.Ty1x = function(p6j, dG8y) {
        a6g.w7p(p6j.element, "z-sel")
    };
    b6f.ckt9k = function(p6j, dG8y) {
        var cMT5Y, gE9v = this.fp9g.length - 1,
        ot2x;
        for (var i = gE9v; i >= 0; i--) {
            a6g.y7r(this.fp9g[i].element, "z-jump");
            if (this.fp9g[i] == p6j) {
                ot2x = i
            } else {
                a6g.fl9c(this.fp9g[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var UU2x = {
            x: 46 + 92 * (ot2x % 5) + dG8y.left,
            y: 46 + 92 * (ot2x / 5 >> 0) + dG8y.top
        };
        var bpK8C = UU2x.x / 92 >> 0,
        bpL8D = UU2x.y / 92 >> 0,
        zy6s = Math.max(0, Math.min(gE9v, bpL8D * 5 + bpK8C));
        if (zy6s == ot2x) {
            return
        }
        var ckp9g = zy6s < ot2x;
        for (var i = Math.min(zy6s, ot2x); i <= Math.max(zy6s, ot2x); i++) {
            if (i !== ot2x) {
                var bQm4q = i % 5;
                if (ckp9g) {
                    if (bQm4q == 4) {
                        a6g.fl9c(this.fp9g[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a6g.fl9c(this.fp9g[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bQm4q == 0) {
                        a6g.fl9c(this.fp9g[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a6g.fl9c(this.fp9g[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    };
    b6f.blC6w = function(p6j, dG8y) {
        var cMV5a, gE9v = this.fp9g.length - 1,
        ot2x;
        for (var i = gE9v; i >= 0; i--) {
            a6g.fl9c(this.fp9g[i].element, {
                left: "",
                top: ""
            });
            if (this.fp9g[i] == p6j) {
                ot2x = i
            }
        }
        a6g.y7r(p6j.element, "z-sel");
        var UU2x = {
            x: 46 + 92 * (ot2x % 5) + dG8y.left,
            y: 46 + 92 * (ot2x / 5 >> 0) + dG8y.top
        };
        var bpK8C = UU2x.x / 92 >> 0,
        bpL8D = UU2x.y / 92 >> 0,
        zy6s = Math.max(0, Math.min(gE9v, bpL8D * 5 + bpK8C));
        if (zy6s == ot2x) {
            return
        }
        this.bfm4q.insertBefore(p6j.element, (this.fp9g[zy6s + (zy6s > ot2x ? 1 : 0)] || {}).element || this.Lx9o);
        this.fp9g.splice(ot2x, 1);
        this.fp9g.splice(zy6s, 0, p6j)
    };
    b6f.cku9l = function(p6j, d6d) {
        a6g.cS8K(p6j.element, false);
        if (p6j.dragger) p6j.dragger.V7O();
        delete p6j.dragger;
        var r6l = -1;
        for (var i = this.fp9g.length - 1; i >= 0; i--) {
            if (this.fp9g[i] == p6j) {
                r6l = i;
                break
            }
        }
        this.fp9g.splice(r6l, r6l >= 0 ? 1 : 0);
        delete p6j;
        if (this.fp9g.length >= 9) {
            this.Lx9o.style.display = "none"
        } else {
            this.Lx9o.style.display = ""
        }
        if (!this.fp9g.length) {
            this.o6i.style.display = "none";
            this.bfp4t(0)
        } else {
            this.bQt4x()
        }
        if (this.fp9g.doing == p6j) {
            this.fp9g.doing = null
        }
        this.Lt9k()
    };
    b6f.bQt4x = function() {
        var bQk4o = false;
        for (var i = 0,
        len = this.fp9g.length; i < len; i++) {
            if (this.fp9g[i].status == -3) {
                bQk4o = true
            }
        }
        if (bQk4o) {
            this.bpj7c( - 3)
        } else {
            this.bfp4t( - 3)
        }
    };
    b6f.UP2x = function() {
        var dJ8B = [];
        for (var i = this.fp9g.length - 1; i >= 0; i--) {
            if (this.fp9g[i].status == 2) {
                dJ8B.unshift(this.fp9g[i].picInfo)
            }
        }
        return dJ8B
    };
    H7A.fQ9H.B7u({
        element: x7q.boG7z,
        event: ["onstartupload", "onfinishupload"]
    })
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    fL9C = NEJ.R,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    bd7W = c6e("nej.ui"),
    P7I = c6e("nej.ut"),
    b6f,
    K7D;
    if ( !! P7I.nD2x) return;
    P7I.nD2x = NEJ.C();
    b6f = P7I.nD2x.M7F(P7I.bda4e);
    K7D = P7I.nD2x.cu8m;
    b6f.bo7h = function(e6c) {
        this.cki9Z(e6c.more);
        this.JC9t = a6g.A7t(e6c.sbody);
        this.ckh9Y = e6c.fixScrollPosition;
        this.bY7R([[this.JC9t, "scroll", this.ckg9X.f6b(this)]]);
        var du8m = e6c.delta;
        if (du8m == null) du8m = 30;
        this.UM2x = Math.max(0, du8m);
        var ck8c = parseInt(e6c.count) || 0;
        this.kc1x = Math.max(0, ck8c);
        var hs0x = parseInt(e6c.number) || 0;
        if (hs0x > 1 && hs0x <= ck8c) {
            this.EX8P = hs0x
        }
        this.bq7j(e6c)
    };
    b6f.bC7v = function() {
        this.bH7A();
        delete this.Eu7n;
        delete this.JC9t;
        delete this.uy4C;
        delete this.bfC4G
    };
    b6f.Ec7V = function(bj7c, br7k) {
        var bO7H = this.AH6B + (this.kc1x - 1) * this.pV3x,
        go9f = this.kc1x * this.pV3x;
        return K7D.Ec7V.call(this, bO7H, bj7c, go9f, br7k)
    };
    b6f.cki9Z = function(bfD4H) {
        this.Eu7n = a6g.A7t(bfD4H);
        this.bY7R([[this.Eu7n, "click", this.pj2x.f6b(this)]])
    };
    b6f.bqh8Z = function(G7z) {
        G7z = G7z || {};
        if (this.uy4C || !G7z) return;
        if (!G7z.scrollHeight) G7z = a6g.pA2x();
        var bj7c = a6g.ik0x(this.iI1x, this.ckh9Y ? G7z: null),
        du8m = bj7c.y + this.iI1x.offsetHeight - G7z.scrollTop - G7z.clientHeight,
        bqi8a = G7z.scrollHeight <= G7z.clientHeight;
        if (du8m <= this.UM2x || bqi8a && !this.uy4C) {
            this.pj2x()
        }
    };
    b6f.ckg9X = function(d6d) {
        if (this.uy4C) return;
        this.bqh8Z(h6b.Y7R(d6d))
    };
    b6f.Eo7h = function(d6d) {
        K7D.Eo7h.apply(this, arguments);
        if (!d6d.stopped) {
            this.Rp1x();
            var bj7c = 0;
            if (d6d.index > 1) {
                bj7c = this.AH6B + ((d6d.index - 1) * this.kc1x - 1) * this.pV3x
            }
            this.im0x = bj7c;
            this.pj2x()
        }
    };
    b6f.bRC5H = function(e6c) {
        if ( !! this.EX8P) {
            var du8m = e6c.offset > 0 ? this.pV3x: this.AH6B,
            go9f = du8m + this.pV3x * (this.EX8P - 1);
            this.im0x = e6c.offset + go9f;
            e6c.data.limit = go9f;
            e6c.limit = go9f;
            delete this.EX8P
        }
        return e6c
    };
    b6f.bAm0x = function(e6c) {
        delete this.bfC4G;
        K7D.bAm0x.apply(this, arguments);
        this.bQj4n()
    };
    b6f.bAo0x = function(d6d) {
        if (d6d.key != this.jn1x.key) return;
        switch (d6d.action) {
        case "refresh":
        case "append":
            delete this.bfC4G;
            break
        }
        K7D.bAo0x.apply(this, arguments)
    };
    b6f.QU1x = function() {
        this.Av6p("onbeforelistload", "列表加载中...");
        a6g.bb7U(this.Eu7n, "display", "none")
    };
    b6f.bBv1x = function(j6d, bj7c, go9f) {
        var br7k = j6d.length,
        bqk8c = j6d.loaded ? bj7c + go9f >= br7k: bj7c + go9f > br7k;
        this.im0x = Math.min(this.im0x, br7k);
        a6g.bb7U(this.Eu7n, "display", bqk8c ? "none": "");
        if (bqk8c) this.uy4C = !0;
        if (this.kc1x > 0) {
            var bp7i = this.Ec7V(bj7c, j6d.length);
            if (this.bRB5G(bp7i.index, bp7i.total)) return ! 0;
            var du8m = this.AH6B - this.pV3x,
            hs0x = this.kc1x * this.pV3x;
            this.uy4C = (bj7c + go9f - du8m) % hs0x == 0 || bqk8c;
            a6g.bb7U(this.Eu7n, "display", this.uy4C ? "none": "");
            this.bAL0x(this.uy4C && bp7i.total > 1 ? "": "none")
        }
    };
    b6f.bBq1x = function() {
        this.im0x = 0;
        this.uy4C = !0;
        this.Av6p("onemptylist", "没有列表数据！")
    };
    b6f.QN1x = function(dZ8R, dG8y) {
        this.iI1x.insertAdjacentHTML(dG8y || "beforeEnd", dZ8R)
    };
    b6f.QM1x = function(hH0x) {
        this.fV9M = this.fV9M || [];
        if (k6e.eh8Z(hH0x)) {
            fL9C.push.apply(this.fV9M, hH0x)
        } else {
            this.fV9M.push(hH0x)
        }
    };
    b6f.bdg4k = function(d6d) {
        a6g.nf2x(this.cO8G);
        this.QB1x(d6d, "onafteradd");
        var fn9e = d6d.flag;
        if (d6d.stopped || !fn9e) return;
        if (this.kc1x > 0) {
            this.bAT0x();
            return
        }
        this.im0x += 1;
        fn9e == -1 ? this.biX5c(d6d.data) : this.bRA5F(d6d.data)
    };
    b6f.bdh4l = function(d6d) {
        this.QB1x(d6d, "onafterdelete");
        if (d6d.stopped) return;
        if (this.kc1x > 0) {
            this.bAT0x();
            return
        }
        var D7w = d6d.data[this.fu9l.pkey];
        if ( !! this.fV9M) {
            var p6j = a6g.bYV7O(D7w),
            r6l = k6e.do8g(this.fV9M, p6j);
            if (r6l >= 0) {
                this.fV9M.splice(r6l, 1);
                this.im0x -= 1
            }
            if ( !! p6j) p6j.V7O()
        } else {
            var g6a = a6g.A7t(this.bRM5R(D7w));
            if ( !! g6a) this.im0x -= 1;
            a6g.cS8K(g6a)
        }
        if (this.im0x <= 0) this.pj2x()
    };
    b6f.biI5N = function(bj7c, go9f) {
        if (bj7c != this.im0x) return;
        if (this.ZL3x()) {
            this.uy4C = !1;
            this.bQj4n()
        }
    };
    b6f.biJ5O = function(bj7c, go9f) {
        if (bj7c != 0) return;
        var My0x = this.T7M.hL0x(this.jn1x.key);
        for (var i = go9f - 1; i >= 0; i--) {
            this.biX5c(My0x[i])
        }
    };
    b6f.bQj4n = function() {
        var G7z = this.JC9t;
        if (!G7z || this.uy4C) return;
        this.bqh8Z(this.JC9t)
    };
    b6f.gR9I = function() {
        delete this.uy4C;
        K7D.gR9I.apply(this, arguments)
    };
    b6f.pj2x = function() {
        if ( !! this.bfC4G) return;
        this.bfC4G = !0;
        var bj7c = this.im0x;
        this.im0x += bj7c == 0 ? this.AH6B: this.pV3x;
        this.bRD5I(bj7c)
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    dg8Y = c6e("nej.x"),
    P7I = c6e("nej.ut"),
    b6f;
    if ( !! P7I.JP9G) return;
    P7I.JP9G = NEJ.C();
    b6f = P7I.JP9G.M7F(P7I.cL8D);
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.iN1x = e6c.event || "click";
        this.ly1x = e6c.selected || "js-selected";
        this.oE2x = e6c.disabled || "js-disabled";
        this.bQg4k = !!e6c.inverse;
        this.cjY9P(e6c.list);
        this.Ut2x(e6c.index || 0)
    };
    b6f.bC7v = function() {
        var cjX9O = function(g6a) {
            this.bqw8o(g6a, !1)
        };
        return function() {
            this.bH7A();
            k6e.be7X(this.bV7O, cjX9O, this);
            delete this.bV7O;
            delete this.iN1x;
            delete this.ct8l;
            delete this.oE2x;
            delete this.ly1x;
            delete this.bQg4k
        }
    } ();
    b6f.cjY9P = function() {
        var byA0x = function(p6j) {
            if (!p6j) return;
            this.bV7O.push(p6j);
            var r6l = this.bV7O.length - 1,
            dB8t = this.bqB8t[r6l];
            if (!dB8t) {
                dB8t = this.Ut2x.f6b(this, r6l);
                this.bqB8t[r6l] = dB8t
            }
            this.bY7R([[p6j, this.iN1x, dB8t]])
        };
        return function(j6d) {
            this.bV7O = [];
            if (!this.bqB8t) this.bqB8t = [];
            k6e.be7X(j6d, byA0x, this)
        }
    } ();
    b6f.bqw8o = function(G7z, cjV9M) { !! cjV9M && !this.bQg4k ? a6g.w7p(G7z, this.ly1x) : a6g.y7r(G7z, this.ly1x)
    };
    b6f.Ut2x = function(r6l, Ur2x, i6c) {
        var G7z = this.bV7O[r6l];
        if (Ur2x != !0 && (r6l == this.ct8l || !G7z || a6g.bG7z(G7z, this.oE2x))) {
            h6b.cr8j(arguments[1]);
            return this
        }
        var d6d = {
            index: r6l,
            last: this.ct8l,
            list: this.me2x(),
            data: i6c || a6g.t7m(G7z, "value")
        };
        this.ct8l = r6l;
        G7z = this.bV7O[d6d.last];
        if ( !! G7z) this.bqw8o(G7z, !1);
        G7z = this.bV7O[this.ct8l];
        this.bqw8o(G7z, !0);
        this.z7s("onchange", d6d);
        if (!d6d.nostop) h6b.cr8j(arguments[1]);
        return this
    };
    b6f.uq4u = function() {
        return this.ct8l
    };
    b6f.me2x = function() {
        return this.bV7O
    };
    a6g.cjR9I = dg8Y.cjR9I = function(bI7B, e6c) {
        var D7w = a6g.mc2x(bI7B);
        if (!D7w) return null;
        if (!P7I.beU4Y(D7w, P7I.JP9G)) {
            e6c = e6c || {};
            e6c.list = !e6c.clazz ? a6g.dj8b(D7w) : a6g.F7y(D7w, e6c.clazz);
            delete e6c.clazz
        }
        return P7I.beU4Y(D7w, P7I.JP9G, e6c || bc7V)
    };
    dg8Y.isChange = !0
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    k6e = c6e("nej.u"),
    v7o = c6e("nej.j"),
    l6f = c6e("nm.x");
    var SETTING_KEY = "player-setting";
    var nI2x = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    nI2x = v7o.uw4A(SETTING_KEY) || nI2x;
    l6f.bqH8z = function() {
        return nI2x
    };
    l6f.JY9P = function(Fp8h) {
        if (Fp8h) {
            nI2x = Fp8h;
            v7o.vZ5e(SETTING_KEY, Fp8h)
        }
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    l6f = c6e("nm.x"),
    q6k = c6e("nm.d"),
    hA0x = c6e("nm.w.player.log");
    var lv1x = q6k.hW0x.B7u();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var hB0x = function(u7n, bF7y, rj3x) {
        var cI8A = l6f.ft9k("{0} {1} {2}", k6e.ir0x(new Date, "yyyy-MM-dd HH:mm:ss"), u7n, bF7y);
        if (rj3x == LogLevel.ERROR) {
            lv1x.eZ9Q("playerror", {
                message: bF7y
            })
        }
        if (rj3x >= LogLevel.INFO) {
            lv1x.bWF6z(cI8A)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cI8A)
        }
    };
    hA0x.cb7U = function() {
        hB0x("PLAY_ERROR", l6f.ft9k.apply(null, arguments), LogLevel.ERROR)
    };
    hA0x.qs3x = function() {
        hB0x("PLAY_INFO", l6f.ft9k.apply(null, arguments), LogLevel.INFO)
    };
    hA0x.cMW5b = function() {
        hB0x("PLAY_DEBUG", l6f.ft9k.apply(null, arguments), LogLevel.DEBUG)
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    H7A = c6e("nej.ut"),
    k6e = c6e("nej.u"),
    x7q = c6e("nm.w"),
    eN9E = c6e("flash.cb");
    var cw8o = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Fu8m, bfK4O, xl5q;
    x7q.cjL9C = function(u7n, cE8w) {
        if (u7n != "flash") {
            if (!Fu8m) {
                Fu8m = a6g.dn8f("audio");
                k6e.be7X(cw8o,
                function(u7n) {
                    h6b.s6m(Fu8m, u7n, onMediaCallBack)
                })
            }
            if (Fu8m && Fu8m.canPlayType && Fu8m.canPlayType("audio/mpeg")) {
                cE8w(new MediaWrap("audio"));
                return
            }
        }
        if (!bfK4O) {
            a6g.sQ3x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(ih0x) {
                    bfK4O = ih0x;
                    k6e.be7X(cw8o,
                    function(u7n) {
                        eN9E[u7n] = onMediaCallBack;
                        bfK4O.addCallback(u7n, "flash.cb." + u7n)
                    });
                    cE8w(new MediaWrap("flash"))
                }.f6b(this)
            })
        } else {
            cE8w(new MediaWrap("flash"))
        }
    };
    function MediaWrap(Fy8q) {
        var gO9F;
        H7A.fQ9H.B7u({
            element: this,
            event: cw8o.concat(["interrupt", "recover"])
        });
        gO9F = Fy8q == "audio" ? Fu8m: bfK4O;
        this.type = Fy8q;
        this.destroy = function() {};
        this.setSrc = function(Z7S) {
            if (xl5q != this) {
                var gE9v = xl5q;
                if (gE9v) {
                    gE9v.interrupt()
                }
                xl5q = this
            }
            if (Fy8q == "flash") {
                gO9F.setSrc(Z7S)
            } else {
                gO9F.src = Z7S
            }
        };
        this.play = function() {
            if (xl5q != this) {
                var gE9v = xl5q;
                if (gE9v) {
                    gE9v.interrupt();
                    xl5q = this;
                    this.recover()
                } else {
                    xl5q = this
                }
            }
            if (Fy8q == "flash") {
                gO9F.as_play()
            } else {
                gO9F.play()
            }
        };
        this.pause = function() {
            if (xl5q != this) return;
            if (Fy8q == "flash") {
                gO9F.as_pause()
            } else {
                gO9F.pause()
            }
        };
        this.load = function() {
            if (xl5q != this) return;
            if (Fy8q == "flash") {
                gO9F.as_load()
            } else {
                gO9F.load()
            }
        };
        this.interrupt = function() {
            onMediaCallBack({
                type: "interrupt"
            })
        };
        this.recover = function() {
            onMediaCallBack({
                type: "recover"
            })
        };
        this.getMedia = function() {
            return gO9F
        };
        var pr2x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k6e.be7X(pr2x,
        function(X7Q) {
            var Uf1x = "get" + X7Q,
            TY1x = "set" + X7Q;
            if (Fy8q == "flash") {
                if (!this[Uf1x]) {
                    this[Uf1x] = function() {
                        return gO9F[Uf1x]()
                    }
                }
                if (!this[TY1x]) {
                    this[TY1x] = function(value) {
                        gO9F[TY1x](value)
                    }
                }
            } else {
                var bPZ4d = X7Q.slice(0, 1).toLowerCase() + X7Q.slice(1);
                if (!this[Uf1x]) {
                    this[Uf1x] = function() {
                        return gO9F[bPZ4d]
                    }
                }
                if (!this[TY1x]) {
                    this[TY1x] = function(value) {
                        gO9F[bPZ4d] = value
                    }
                }
            }
        },
        this)
    }
    function onMediaCallBack(d6d) {
        if (xl5q) {
            h6b.z7s(xl5q, d6d.type, d6d)
        }
    }
})(); (function() {
    var c6e = NEJ.P,
    h6b = c6e("nej.v"),
    v7o = c6e("nej.j"),
    H7A = c6e("nej.ut"),
    dC8u = c6e("nej.p"),
    x7q = c6e("nm.w"),
    l6f = c6e("nm.x"),
    hA0x = c6e("nm.w.player.log"),
    b6f;
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
    var bPY4c = false;
    x7q.gg9X = NEJ.C();
    b6f = x7q.gg9X.M7F(H7A.cL8D);
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.cU8M = {};
        this.bfQ4U(e6c.media);
        v7o.bl7e("/api/cdns", {
            type: "json",
            onload: function(d6d) {
                if (d6d.code) {
                    this.rm3x = d6d.data
                }
            }.f6b(this)
        })
    };
    b6f.bC7v = function() {
        this.bH7A();
        delete this.cU8M
    };
    b6f.bfR4V = function(bm7f) {
        if (!bm7f) return;
        var rl3x = this.cU8M.volume;
        if (this.ec8U) {
            this.ec8U.pause()
        }
        this.cU8M = {
            time: 0,
            id: bm7f.id,
            duration: bm7f.duration / 1e3,
            play: this.cU8M.play,
            stalledRetryCount: 0
        };
        if (rl3x != null) {
            this.cU8M.volume = rl3x
        }
        this.cU8M.loadState = LoadState.LOAD_START;
        this.bPX4b(bm7f.id);
        hA0x.qs3x("play song id: {0}", bm7f.id)
    };
    b6f.ew9n = function() {
        if (this.cU8M.error) {
            this.cU8M.error = null;
            if (this.cU8M.error == ErrorType.INFO_GET_ERR || this.bPW4a()) {
                this.bPV4Z()
            } else {
                this.TB1x()
            }
        } else {
            if (this.ec8U) {
                this.ec8U.play()
            }
        }
        this.cU8M.play = true;
        this.qZ3x("play")
    };
    b6f.fT9K = function() {
        if (this.ec8U) {
            this.ec8U.pause()
        }
        this.cU8M.play = false;
        this.qZ3x("pause")
    };
    b6f.pG2x = function(bA7t) {
        if (this.ec8U) {
            this.ec8U.setCurrentTime(bA7t)
        }
        this.cU8M.time = bA7t;
        hA0x.qs3x("seek to: {0}", bA7t)
    };
    b6f.brW8O = function() {
        return this.cU8M.duration || 0
    };
    b6f.xA5F = function() {
        return !! this.cU8M.play
    };
    b6f.ng2x = function(Tu1x) {
        this.cU8M.volume = Tu1x;
        if (this.ec8U) {
            this.ec8U.setVolume(Tu1x)
        }
    };
    b6f.bfX5c = function() {
        return this.cU8M.time
    };
    b6f.bfQ4U = function(u7n) {
        x7q.cjL9C(u7n,
        function(gO9F) {
            this.ec8U = gO9F;
            hA0x.qs3x("media loaded: {0}", gO9F.type);
            this.bY7R([[this.ec8U, "loadedmetadata", this.cjz9q.f6b(this)], [this.ec8U, "ended", this.cjy9p.f6b(this)], [this.ec8U, "waiting", this.zm6g.f6b(this)], [this.ec8U, "play", this.xF5K.f6b(this)], [this.ec8U, "pause", this.bsn8f.f6b(this)], [this.ec8U, "playing", this.Th1x.f6b(this)], [this.ec8U, "timeupdate", this.cjv9m.f6b(this)], [this.ec8U, "progress", this.rk3x.f6b(this)], [this.ec8U, "stalled", this.bsu8m.f6b(this)], [this.ec8U, "interrupt", this.fT9K.f6b(this)], [this.ec8U, "recover", this.cju9l.f6b(this)], [this.ec8U, "error", this.dT8L.f6b(this)]]);
            if (this.cU8M) {
                if (this.cU8M.loadState == LoadState.LOAD_START || this.cU8M.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bsB8t();
                    if (this.cU8M.volume != null) {
                        this.ec8U.setVolume(this.cU8M.volume)
                    }
                }
            }
        }.f6b(this))
    };
    b6f.cjq9h = function(u7n) {
        this.LD9u();
        this.ec8U.destroy();
        this.cU8M.loadState = LoadState.IN_SWITCH_MEDIA;
        this.zm6g();
        this.bfQ4U(u7n);
        hA0x.qs3x("switch media")
    };
    b6f.cMX5c = function() {
        return this.ec8U
    };
    b6f.bPX4b = function() {
        this.zm6g();
        v7o.bl7e("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cU8M.id]),
                br: DEFAULT_BR
            },
            onload: this.bPQ4U.f6b(this),
            onerror: this.bPQ4U.f6b(this)
        })
    };
    b6f.bPQ4U = function(d6d) {
        if (d6d.code == 200 && d6d.data && d6d.data.length) {
            var bp7i = d6d.data[0];
            if (!bp7i.url) {
                this.cU8M.error = ErrorType.INFO_GET_ERR;
                this.qZ3x("error", {
                    code: this.cU8M.error
                });
                return
            }
            this.cU8M.playUrl = bp7i.url;
            this.cU8M.expireTime = (new Date).getTime() + bp7i.expi * 1e3;
            this.bsB8t()
        } else {
            this.cU8M.error = ErrorType.INFO_GET_ERR;
            this.qZ3x("error", {
                code: this.cU8M.error
            });
            hA0x.cb7U("info load error")
        }
    };
    b6f.bsB8t = function() {
        if (this.ec8U) {
            var Z7S = this.cU8M.playUrl;
            if (this.cU8M.time > 0 && (this.cU8M.loadState == LoadState.IN_RE_GET_URL || this.cU8M.loadState == LoadState.IN_RE_GET_URL)) {
                Z7S += "#t=" + this.cU8M.time
            }
            this.ec8U.setSrc(Z7S);
            hA0x.qs3x("load mp3: {0},loadState: {1}.", Z7S, this.cU8M.loadState)
        }
    };
    b6f.bPP4T = function() {
        if (/#t=(\d+)$/.test(this.ec8U.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b6f.TB1x = function() {
        var bA7t = parseInt(this.cU8M.time) || 0,
        cjk9b = this.bPP4T();
        if (bA7t === cjk9b) {
            this.ec8U.load()
        } else {
            this.ec8U.setSrc(this.cU8M.playUrl + "#t=" + bA7t)
        }
        this.cU8M.loadState = LoadState.IN_RELOAD;
        this.zm6g();
        hA0x.qs3x("reload from: {0}", bA7t)
    };
    b6f.bPV4Z = function() {
        this.cU8M.loadState = LoadState.IN_RE_GET_URL;
        this.bPX4b()
    };
    b6f.bPM4Q = function() {
        var tC4G = getHost(this.cU8M.playUrl);
        if (tC4G) {
            for (var i = 0; i < this.rm3x.length; i++) {
                var iF1x = this.rm3x[i] || [],
                r6l = iF1x.indexOf(tC4G);
                if (r6l >= 0 && iF1x.length > 1) {
                    return iF1x[(r6l + 1) % iF1x.length]
                }
            }
        }
        function getHost(Z7S) {
            if (CDN_HOST_REG.test(Z7S)) return RegExp.$1
        }
    };
    b6f.cjf9W = function() {
        this.cU8M.playUrl = this.cU8M.playUrl.replace(CDN_HOST_REG, this.bPM4Q());
        this.cU8M.loadState = LoadState.IN_SWITCH_CDN;
        this.bsB8t();
        this.zm6g()
    };
    b6f.cjz9q = function() {
        if (this.cU8M.loadState == LoadState.LOAD_START) {
            this.cU8M.loadState = LoadState.LOADED_META;
            if (this.ec8U.type == "audio") {
                this.cU8M.duration = this.ec8U.getDuration()
            }
            this.qZ3x("loadedmeta", {
                duration: this.cU8M.duration
            })
        } else {
            this.cU8M.loadState = LoadState.LOADED_META
        }
        if (this.cU8M.play) {
            this.ec8U.play()
        } else {
            this.ec8U.pause()
        }
        if (this.cU8M.time && parseInt(this.cU8M.time) != this.bPP4T()) {
            this.ec8U.setCurrentTime(this.cU8M.time)
        }
        this.Lh9Y();
        this.Th1x();
        bPY4c = true;
        hA0x.qs3x("loaded meta")
    };
    b6f.cjy9p = function() {
        this.cU8M.ended = true;
        this.qZ3x("ended")
    };
    b6f.zm6g = function() {
        if (!this.cU8M.waiting) {
            this.cU8M.waiting = true;
            this.cU8M.waitTimestamp = +(new Date);
            this.qZ3x("waiting")
        }
    };
    b6f.Th1x = function() {
        this.cU8M.waiting = false;
        this.cU8M.waitTimestamp = 0;
        this.qZ3x("playing")
    };
    b6f.xF5K = function() {
        this.qZ3x("play")
    };
    b6f.bsn8f = function() {
        this.qZ3x("pause")
    };
    b6f.cjv9m = function() {
        if (this.cU8M.loadState != LoadState.LOADED_META) return;
        var bA7t = this.ec8U.getCurrentTime();
        if (this.cU8M.waiting && bA7t > this.cU8M.time) {
            this.Th1x()
        }
        this.cU8M.time = bA7t;
        this.qZ3x("timeupdate", {
            time: this.cU8M.time,
            duration: this.cU8M.duration
        })
    };
    b6f.rk3x = function(d6d) {
        if (this.cU8M.loadState != LoadState.LOADED_META) return;
        var m6g = {};
        if (d6d.data) {
            m6g.total = d6d.data.total;
            m6g.loaded = d6d.data.loaded
        } else {
            var hR0x = this.ec8U.getBuffered(),
            bA7t = this.ec8U.getCurrentTime(),
            pz2x = 0;
            for (var i = 0; i < hR0x.length; i++) {
                if (bA7t > hR0x.start(i) && bA7t < hR0x.end(i)) {
                    pz2x = hR0x.end(i);
                    break
                }
            }
            m6g.total = this.cU8M.duration;
            m6g.loaded = Math.min(pz2x, m6g.total)
        }
        this.qZ3x("progress", m6g)
    };
    b6f.Lh9Y = function() {
        if (this.cU8M.retry) {
            clearTimeout(this.cU8M.retry.tid);
            this.cU8M.retry = null
        }
    };
    b6f.dT8L = function() {
        var bZ7S = this.ec8U.getError();
        hA0x.cb7U("media error code: {0}, netState: {1}", bZ7S.code, this.ec8U.getNetworkState());
        if (bZ7S.code == MediaError.MEDIA_ERR_NETWORK || bZ7S.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Fp8h = l6f.bqH8z();
            if (!this.cU8M.retry) {
                this.cU8M.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cU8M.retry.tid)
            }
            if (this.cU8M.retry.level == RetryLevel.NONE) {
                if (this.bPW4a()) {
                    this.cU8M.retry.level = RetryLevel.GET_URL;
                    this.bPV4Z();
                    hA0x.qs3x("Url expired, get url.")
                } else {
                    this.cU8M.retry.level = RetryLevel.RELOAD;
                    this.cU8M.retry.tid = setTimeout(this.TB1x.f6b(this), 3e3);
                    hA0x.qs3x("Reload mp3 3s later.")
                }
            } else if (this.cU8M.retry.level == RetryLevel.GET_URL) {
                this.cU8M.retry.level = RetryLevel.RELOAD;
                this.cU8M.retry.tid = setTimeout(this.TB1x.f6b(this), 3e3);
                hA0x.qs3x("Reload mp3 3s later.")
            } else if (this.cU8M.retry.level == RetryLevel.RELOAD) {
                this.cU8M.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bPM4Q()) {
                    this.cU8M.retry.tid = setTimeout(this.cjf9W.f6b(this), 5e3);
                    hA0x.qs3x("Switch CDN 5s later.")
                } else {
                    this.cU8M.retry.tid = setTimeout(this.TB1x.f6b(this), 5e3);
                    hA0x.qs3x("Reload mp3 5s later.")
                }
            } else if (!bPY4c && this.ec8U.type == "audio" && !Fp8h.useFlash && !dC8u.Kb9S.mac && l6f.bta9R().supported) {
                Fp8h.useFlash = true;
                l6f.JY9P(Fp8h);
                this.cjq9h("flash")
            } else {
                this.Lh9Y();
                this.fT9K();
                this.cU8M.error = ErrorType.NET_ERR;
                this.qZ3x("error", {
                    code: this.cU8M.error
                });
                hA0x.cb7U("error can not retry.")
            }
        } else {
            this.Lh9Y();
            this.fT9K();
            this.cU8M.error = ErrorType.UNKNOWN_ERR;
            this.qZ3x("error", {
                code: this.cU8M.error
            });
            hA0x.cb7U("error can not retry.")
        }
    };
    b6f.bsu8m = function() {
        var iq0x = 0,
        bPL4P = 5e3;
        return function() {
            this.zm6g();
            clearTimeout(iq0x);
            setTimeout(function() {
                var fh9Y = +(new Date);
                if (this.cU8M.waiting && fh9Y - this.cU8M.waitTimestamp >= bPL4P && this.cU8M.stalledRetryCount < MAX_STALLED_RETRY) {
                    hA0x.qs3x("stalled too long retry.");
                    this.cU8M.stalledRetryCount++;
                    this.TB1x()
                }
            }.f6b(this), bPL4P);
            hA0x.qs3x("stalled")
        }
    } ();
    b6f.bPW4a = function() {
        var fh9Y = +(new Date);
        return fh9Y > this.cU8M.expireTime
    };
    b6f.cju9l = function() {
        var bA7t = parseInt(this.cU8M.time) || 0;
        this.ec8U.setSrc(this.cU8M.playUrl + "#t=" + bA7t);
        this.cU8M.loadState = LoadState.IN_RELOAD;
        this.zm6g();
        hA0x.qs3x("recover from: {0}", bA7t)
    };
    b6f.qZ3x = function(W7P, i6c) {
        h6b.z7s(x7q.gg9X, "playaction", {
            action: W7P,
            data: i6c || {}
        })
    };
    H7A.fQ9H.B7u({
        element: x7q.gg9X,
        event: ["playaction"]
    })
})(); (function() {
    if (! (window == top)) {
        return
    }
    var c6e = NEJ.P,
    h6b = c6e("nej.v"),
    H7A = c6e("nej.ut"),
    x7q = c6e("nm.w"),
    b6f;
    x7q.Gi8a = NEJ.C();
    b6f = x7q.Gi8a.M7F(x7q.gg9X);
    K7D = x7q.Gi8a.cu8m;
    b6f.cA8s = function() {
        this.cG8y()
    };
    b6f.cjd9U = function(bR7K) {
        this.bfR4V(bR7K);
        this.ew9n()
    };
    b6f.bsY9P = function() {
        this.fT9K()
    };
    b6f.xN5S = function(d6d) {
        if (d6d.action == "play") {
            this.fT9K()
        }
    };
    b6f.qZ3x = function(W7P, i6c) {
        h6b.z7s(x7q.Gi8a, "tmpplayaction", {
            action: W7P,
            data: i6c || {},
            tmp: true
        })
    };
    b6f.tZ4d = function() {
        return this.cU8M
    };
    H7A.fQ9H.B7u({
        element: x7q.Gi8a,
        event: ["tmpplayaction"]
    })
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    fY9P = c6e("nej.n"),
    v7o = c6e("nej.j"),
    H7A = c6e("nej.ut"),
    bd7W = c6e("nej.ui"),
    x7q = c6e("nm.w"),
    n6h = c6e("nm.l"),
    lm1x = c6e("nm.c"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    b6f,
    K7D,
    bgf5k = [{
        item: "m-publish-search-single",
        type: 1
    },
    {
        item: "m-publish-search-artist",
        type: 100
    },
    {
        item: "m-publish-search-album",
        type: 10
    },
    {
        item: "m-publish-search-mv",
        type: 1004
    },
    {
        item: "m-publish-search-playlist",
        type: 1e3
    },
    {
        item: "m-publish-search-djRadio",
        type: 1009
    }];
    var btf9W = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    x7q.bth9Y = NEJ.C();
    b6f = x7q.bth9Y.M7F(bd7W.er8j);
    b6f.cA8s = function(e6c) {
        this.cG8y(e6c);
        var j6d = a6g.F7y(this.o6i, "j-flag");
        this.cMY5d = j6d.shift();
        this.cja9R = j6d.shift();
        this.Ld9U = j6d.shift();
        this.btr9i = j6d.shift();
        this.btx9o = [j6d.shift(), j6d.shift(), j6d.shift(), j6d.shift(), j6d.shift(), j6d.shift()];
        this.bgh5m = j6d.shift();
        this.bPI4M = j6d.shift();
        this.sU3x = {
            list: this.btx9o,
            selected: "z-curr",
            onchange: this.bPH4L.f6b(this)
        };
        h6b.s6m(this.Ld9U, "input", this.bgi5n.f6b(this));
        h6b.s6m(this.Ld9U, "propertychange", this.bgi5n.f6b(this));
        h6b.s6m(this.Ld9U, "keyup", this.bgi5n.f6b(this));
        h6b.s6m(this.cja9R, "click", this.bgi5n.f6b(this));
        h6b.s6m(this.bgh5m, "click", this.cM8E.f6b(this));
        h6b.s6m(this.bPI4M, "click",
        function() {
            this.z7s("oncancel", {})
        }.f6b(this));
        this.T7M = q6k.IL9C.fP9G();
        this.SG1x = top.nm.w.Gi8a.fP9G();
        H7A.fQ9H.B7u({
            element: top.nm.w.Gi8a,
            event: ["tmpplayaction"]
        });
        this.tx3x = {
            limit: 100,
            offset: 0,
            parent: this.bgh5m,
            onbeforelistload: this.rt3x.f6b(this)
        };
        q6k.sk = "fuck" + a6g.t7m(this.btr9i, "xname") + "458";
        h6b.s6m(top.nm.w.Gi8a, "tmpplayaction", this.xN5S.f6b(this))
    };
    b6f.ch7a = function() {
        this.cf7Y = "m-xwgt-publish-search"
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        if ( !! this.CA7t) {
            this.CA7t.V7O();
            delete this.CA7t
        }
        this.sU3x.index = btf9W[e6c.type || "song"];
        this.CA7t = H7A.JP9G.B7u(this.sU3x);
        this.Ld9U.value = "";
        this.Ld9U.focus();
        this.wP5U = "";
        this.cMZ5e = 0;
        if (e6c.showMV == true) {
            this.btx9o[btf9W["mv"]].parentNode.style.display = "";
            a6g.w7p(this.btr9i, "srchtab-1")
        } else {
            this.btx9o[btf9W["mv"]].parentNode.style.display = "none";
            a6g.y7r(this.btr9i, "srchtab-1")
        }
        if ( !! this.dQ8I) {
            this.dQ8I = this.dQ8I.V7O()
        }
        if (e6c.hideBack) {
            a6g.w7p(this.bPI4M.parentNode, "f-hide")
        }
    };
    b6f.bC7v = function() {
        this.SG1x.bsY9P();
        this.bH7A()
    };
    b6f.bgi5n = function() {
        var value = this.Ld9U.value.trim();
        if (value && value.length) {
            if (value != this.wP5U) {
                this.wP5U = value;
                this.bPH4L({
                    index: this.CA7t.uq4u()
                })
            }
        } else {
            if (this.dQ8I) {
                this.dQ8I = this.dQ8I.V7O()
            }
        }
        this.wP5U = value
    };
    b6f.cM8E = function() {
        var ciW9N = function(G7z) {
            return a6g.bG7z(G7z, "sitm") || a6g.bG7z(G7z, "itm") || a6g.bG7z(G7z, "mv-item")
        },
        ciV9M = function(G7z) {
            return a6g.bG7z(G7z, "ply")
        },
        bPF4J = function() {
            n6h.ba7T.J7C({
                type: 2,
                tip: "因合作方要求，该资源需付费使用"
            })
        },
        ciN9E = function() {
            n6h.ba7T.J7C({
                type: 2,
                tip: "因合作方要求，该资源需下载后播放"
            })
        },
        bui9Z = function(bm7f) {
            if (bm7f && bm7f.privilege && bm7f.privilege.toast) {
                v7o.bl7e("/api/song/toast", {
                    query: {
                        id: bm7f.id
                    },
                    type: "json",
                    onload: Xv2x.f6b(this),
                    onerror: Xv2x.f6b(this)
                })
            } else {
                Xn2x()
            }
        },
        Xv2x = function(Q7J) {
            Xn2x((Q7J || bc7V).toast)
        },
        Xn2x = function(bF7y) {
            n6h.ba7T.J7C({
                type: 2,
                tip: bF7y || "因合作方要求，该资源暂时下架>_<"
            })
        };
        return function(d6d) {
            var wH5M = h6b.Y7R(d6d, ciV9M),
            j6d = h6b.Y7R(d6d, ciW9N),
            dy8q = this.SG1x.tZ4d();
            if ( !! j6d) {
                h6b.bg7Z(d6d);
                this.Sy1x = a6g.t7m(j6d, "id");
                this.St1x = a6g.t7m(j6d, "type");
                if (this.St1x == 18) {
                    var bR7K = this.T7M.eS9J(this.Sy1x),
                    rj3x = l6f.qF3x(bR7K);
                    if (!wH5M) {
                        if (rj3x == 10) {
                            bPF4J();
                            return
                        } else if (rj3x == 100) {
                            bui9Z(bR7K);
                            return
                        }
                    } else {
                        if (rj3x == 10) {
                            bPF4J();
                            return
                        } else if (rj3x == 100) {
                            bui9Z(bR7K);
                            return
                        } else if (rj3x == 11) {
                            ciN9E();
                            return
                        } else {
                            a6g.y7r(this.CI7B, "z-pause z-loading");
                            if (wH5M == this.CI7B && dy8q.play && !dy8q.ended) {
                                this.SG1x.bsY9P()
                            } else {
                                this.CI7B = wH5M;
                                this.SG1x.cjd9U(bR7K)
                            }
                            return
                        }
                    }
                } else if (this.St1x == 70) {
                    if (a6g.bG7z(j6d, "z-noprogram")) {
                        n6h.ba7T.J7C({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.ciM9D()
            }
        }
    } ();
    b6f.ciM9D = function() {
        var iy1x = this.T7M.eS9J(this.Sy1x),
        tN4R = l6f.bUu6o(this.St1x, iy1x);
        tN4R.title = tN4R.title || "";
        tN4R.author = tN4R.author || "";
        tN4R.picUrl = tN4R.picUrl || "";
        tN4R.authors = tN4R.authors || "";
        if (this.St1x == 70) {
            this.Sy1x = this.Sy1x.slice(0, -4)
        }
        this.z7s("onfinish", {
            id: this.Sy1x,
            type: this.St1x,
            data: tN4R
        })
    };
    b6f.xN5S = function(d6d) {
        var i6c = d6d.data;
        if (!this.CI7B) {
            return
        }
        switch (d6d.action) {
        case "play":
            a6g.fz9q(this.CI7B, "z-pause z-play", "z-loading");
            break;
        case "pause":
        case "ended":
            a6g.y7r(this.CI7B, "z-pause z-loading");
            break;
        case "error":
            n6h.ba7T.J7C({
                type:
                2,
                tip: "试听遇到问题，播放失败"
            });
            a6g.y7r(this.CI7B, "z-pause z-loading");
            break;
        case "playing":
            a6g.fz9q(this.CI7B, "z-loading", "z-pause");
            break;
        case "waiting":
            a6g.fz9q(this.CI7B, "z-pause", "z-loading");
            break
        }
    };
    b6f.ciL9C = function(d6d) {
        if (d6d.result.code == 407) {
            this.bgh5m.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.bgh5m.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b6f.bPH4L = function(d6d) {
        if (!this.wP5U || d6d.index < 0 || d6d.index > 5) {
            return
        }
        this.SG1x.bsY9P();
        var bk7d = bgf5k[d6d.index],
        e6c = NEJ.X({},
        this.tx3x);
        e6c.cache = {
            klass: q6k.IL9C,
            clear: true,
            onerror: this.ciL9C.f6b(this)
        };
        e6c.cache.lkey = "search-publish-" + bk7d.type + "-" + this.wP5U;
        e6c.item = {
            klass: bk7d.item,
            getRestrictLevel: l6f.qF3x,
            dur2time: l6f.lG1x
        };
        if (!e6c.cache.data) {
            e6c.cache.data = {}
        }
        e6c.cache.data.s = this.wP5U;
        e6c.cache.data.type = bk7d.type;
        e6c.cache.data.isPub = true;
        if (bk7d.type == 1) {
            e6c.cache.data.hlpretag = '<span class="s-fc7">';
            e6c.cache.data.hlposttag = "</span>"
        }
        e6c.onemptylist = this.ciK9B.f6b(this, this.wP5U);
        if ( !! this.GK8C) this.T7M.we5j(this.GK8C);
        if ( !! this.dQ8I) {
            this.dQ8I = this.dQ8I.V7O()
        }
        this.dQ8I = H7A.nD2x.B7u(e6c);
        this.GK8C = e6c.cache.lkey
    };
    b6f.rt3x = function(d6d) {
        d6d.value = a6g.is1x("m-publish-search-loading")
    };
    b6f.ciK9B = function(L7E, d6d) {
        a6g.dF8x(d6d.parent, "m-publish-emtpy-message", {
            key: L7E
        });
        d6d.stopped = true
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    dC8u = c6e("nej.p"),
    v7o = c6e("nej.j"),
    cd7W = c6e("nej.ut"),
    bD7w = c6e("nej.ui"),
    x7q = c6e("nm.w"),
    b6f,
    K7D;
    var ciI9z = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    x7q.GL8D = NEJ.C();
    b6f = x7q.GL8D.M7F(bD7w.er8j);
    var gB9s = a6g.eD9u("m-wgt-receiverInput");
    var ciH9y = a6g.eD9u("m-wgt-receiverList");
    var jv1x = a6g.ve5j(ciI9z);
    var ciG9x = a6g.eD9u('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b6f.cA8s = function(e6c) {
        this.bf7Y = [];
        this.xJ5O = e6c.receiver || null;
        this.ciF9w = e6c.unique || false;
        this.gP9G = e6c.err;
        this.bPD4H(this.bPC4G, e6c.uid);
        this.cG8y(e6c)
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.Sg1x();
        this.Se1x();
        this.bgp5u();
        if (e6c.receiver) this.buW9N(e6c.receiver.nickname, e6c.receiver.userId);
        a6g.bb7U(this.EJ8B, "display", "block");
        a6g.bb7U(this.buX9O, "cursor", "text");
        a6g.bb7U(this.EJ8B, "cursor", "text")
    };
    b6f.ch7a = function() {
        var i6c = this.bPB4F();
        this.cf7Y = a6g.jJ1x(a6g.ce7X(gB9s, {
            receiver: this.xJ5O,
            users: i6c
        }));
        this.ms2x = jv1x
    };
    b6f.bW7P = function() {
        this.ci8a();
        var bP7I = a6g.F7y(this.o6i, "j-flag");
        var hH0x = a6g.F7y(this.o6i, "j-item");
        this.buX9O = bP7I[0];
        this.bPA4E = bP7I[1];
        this.eq8i = bP7I[2];
        this.EJ8B = bP7I[3];
        this.bgr5w = bP7I[4];
        this.bvf9W = bP7I[5];
        this.fV9M = hH0x;
        a6g.w7p(this.fV9M[0], "j-selected");
        h6b.s6m(this.eq8i, "keyup", this.bvh9Y.f6b(this));
        h6b.s6m(this.eq8i, "keydown", this.RG1x.f6b(this));
        h6b.s6m(this.eq8i, "focus", this.kA1x.f6b(this));
        h6b.s6m(this.bgr5w, "click", this.ciq9h.f6b(this));
        h6b.s6m(this.buX9O, "click", this.cip9g.f6b(this));
        h6b.s6m(document.body, "click", this.py2x.f6b(this));
        h6b.s6m(this.eq8i, "input", this.eW9N.f6b(this));
        h6b.s6m(this.eq8i, "blur", this.pa2x.f6b(this))
    };
    b6f.bC7v = function(e6c) {
        h6b.nu2x(document.body, "click", this.py2x.f6b(this));
        this.bH7A();
        this.bgp5u();
        this.cio9f();
        this.py2x()
    };
    b6f.bvh9Y = function(d6d) {
        h6b.bg7Z(d6d);
        var ks1x = d6d.keyCode || d6d.which;
        var bs7l = this.eq8i.value;
        var br7k = this.fV9M.length;
        var tz4D = a6g.F7y(this.o6i, "j-selected")[0];
        switch (ks1x) {
        case 13:
            var lJ1x = a6g.hc9T(tz4D, "data-username");
            var ie0x = a6g.hc9T(tz4D, "data-userId");
            this.buW9N(lJ1x, ie0x);
            this.py2x();
            this.eq8i.value = "";
            break;
        case 38:
            var r6l = a6g.hc9T(tz4D, "data-index") - 1 < 0 ? br7k - 1 : a6g.hc9T(tz4D, "data-index") - 1;
            a6g.y7r(tz4D, "j-selected");
            a6g.w7p(this.fV9M[r6l], "j-selected");
            break;
        case 40:
            var r6l = parseInt(a6g.hc9T(tz4D, "data-index")) + 1 >= br7k ? 0 : parseInt(a6g.hc9T(tz4D, "data-index")) + 1;
            a6g.y7r(tz4D, "j-selected");
            a6g.w7p(this.fV9M[r6l], "j-selected");
            break;
        default:
            this.xL5Q()
        }
    };
    b6f.RG1x = function(d6d) {
        var ks1x = d6d.keyCode || d6d.which;
        var bs7l = this.eq8i.value;
        var r6l = a6g.F7y(this.o6i, "j-receiver").length - 1;
        if (ks1x === 8 && bs7l === "") this.cin9e(r6l)
    };
    b6f.eW9N = function(d6d) {
        var bs7l = this.eq8i.value;
        if (bs7l.length > 10) {
            this.eq8i.value = bs7l.substring(0, 10);
            return
        }
        dC8u.dz8r.browser == "ie" && dC8u.dz8r.version < "7.0" ? setTimeout(this.bvQ9H.f6b(this), 0) : this.bvQ9H();
        this.Se1x()
    };
    b6f.kA1x = function() {
        if (this.bf7Y[0]) this.xL5Q();
        else this.bPD4H(this.cim9d);
        a6g.bb7U(this.EJ8B, "display", "none")
    };
    b6f.pa2x = function() {
        var br7k = a6g.F7y(this.o6i, "j-receiver").length;
        if (this.eq8i.value.trim() == "" && br7k <= 0) a6g.bb7U(this.EJ8B, "display", "block")
    };
    b6f.buW9N = function(lJ1x, ie0x) {
        var KU9L = this.Ry1x();
        if (KU9L.length >= 10) {
            this.ed8V();
            return
        }
        var bd7W;
        for (bd7W = 0; bd7W < KU9L.length; bd7W++) {
            if (KU9L[bd7W] == ie0x) {
                this.py2x();
                return
            }
        }
        if (!lJ1x || !ie0x) return;
        var g6a = a6g.dE8w(a6g.jJ1x(a6g.ce7X(ciG9x, {
            username: lJ1x,
            userId: ie0x
        })));
        var bI7B = this.bPA4E.parentNode;
        if (this.ciF9w) {
            this.bgp5u()
        }
        bI7B.insertBefore(g6a, this.bPA4E);
        this.eq8i.value = "";
        var br7k = a6g.F7y(this.o6i, "j-receiver").length;
        if (br7k > 1) a6g.bb7U(this.EJ8B, "display", "none");
        this.bvQ9H();
        this.Se1x()
    };
    b6f.bgp5u = function() {
        var Rx1x = a6g.F7y(this.o6i, "j-receiver");
        var bd7W;
        if (Rx1x.length > 0) {
            for (bd7W = 0; bd7W < Rx1x.length; bd7W++) {
                a6g.cS8K(Rx1x[bd7W], false)
            }
        }
    };
    b6f.cio9f = function() {
        this.eq8i.value = ""
    };
    b6f.cin9e = function(r6l) {
        this.ed8V(!0);
        var Rx1x = a6g.F7y(this.o6i, "j-receiver");
        a6g.cS8K(Rx1x[r6l], false);
        this.Se1x()
    };
    b6f.xL5Q = function() {
        var bs7l = this.eq8i.value;
        var bx7q = bs7l.trim().toLowerCase();
        var i6c;
        bx7q = bx7q.replace(/\[/g, "\\[");
        bx7q = bx7q.replace(/\]/g, "\\]");
        i6c = this.bPB4F(bx7q);
        this.cij9a(i6c)
    };
    b6f.py2x = function(d6d) {
        a6g.bb7U(this.bgr5w, "display", "none")
    };
    b6f.ed8V = function(dR8J) {
        if (dR8J && this.gP9G) {
            a6g.bb7U(this.gP9G, "display", "none");
            return
        }
        if (this.gP9G) a6g.bb7U(this.gP9G, "display", "block")
    };
    b6f.ciq9h = function(d6d) {
        h6b.cr8j(d6d);
        var bN7G = d6d.target || d6d.srcElement;
        if (a6g.bG7z(bN7G, "j-flag")) return;
        var bI7B = bN7G.nodeName.toLowerCase() == "a" ? bN7G.parentNode: bN7G.parentNode.parentNode;
        var lJ1x = a6g.hc9T(bI7B, "data-username");
        var ie0x = a6g.hc9T(bI7B, "data-userId");
        this.buW9N(lJ1x, ie0x);
        this.py2x();
        a6g.bb7U(this.EJ8B, "display", "none")
    };
    b6f.cip9g = function(d6d) {
        h6b.bg7Z(d6d);
        var bN7G = d6d.target || d6d.srcElement;
        if (a6g.bG7z(bN7G.parentNode, "j-receiver")) {
            a6g.cS8K(bN7G.parentNode, false);
            this.ed8V(!0);
            this.Se1x()
        } else this.eq8i.focus()
    };
    b6f.bvQ9H = function() {
        this.bvf9W.innerHTML = this.eq8i.value;
        var cz8r = this.bvf9W.offsetWidth + 2;
        a6g.bb7U(this.eq8i, "width", cz8r + "px")
    };
    b6f.Se1x = function() {
        var bgt5y = a6g.ik0x(this.eq8i, this.o6i).y;
        var bPw4A = Math.floor((bgt5y - 8) / 27);
        if (bPw4A < 0) return;
        a6g.bb7U(this.buX9O, "height", 19 + bPw4A * 29 + "px")
    };
    b6f.Sg1x = function() {
        var qg3x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < qg3x.length; i++) {
            a6g.bb7U(this.bvf9W, qg3x[i], a6g.dm8e(this.eq8i, qg3x[i]))
        }
    };
    b6f.bPD4H = function(cE8w, D7w) {
        var ds8k = D7w ? D7w: window.GUser.userId;
        var Z7S = "/api/user/getfollows/" + ds8k;
        var gx9o = v7o.bl7e(Z7S, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cE8w.f6b(this),
            onerror: function(i6c) {
                this.bf7Y = []
            },
            onbeforerequest: function(i6c) {}
        })
    };
    b6f.bPC4G = function(i6c) {
        this.bf7Y = JSON.parse(i6c).follow || [];
        var D7w = GUser.userId;
        for (var i = 0; i < this.bf7Y.length; i++) {
            if (this.bf7Y[i].userId == D7w) {
                this.bf7Y.splice(i, 1);
                continue
            }
            this.bf7Y[i].avatarUrl = this.bf7Y[i].avatarUrl + "?param=30y30"
        }
    };
    b6f.cim9d = function(i6c) {
        if (this.bf7Y[0]) return;
        this.bPC4G(i6c);
        this.xL5Q()
    };
    b6f.bPB4F = function(bx7q) {
        var bx7q = bx7q ? bx7q: "";
        this.bf7Y = this.bf7Y[0] ? this.bf7Y: [];
        var br7k = this.bf7Y.length;
        var QW1x = this.Ry1x();
        var vp5u = [];
        var QV1x, QT1x, bww9n;
        if (!this.bf7Y[0]) return vp5u;
        for (var bd7W = 0; bd7W < br7k; bd7W++) {
            bww9n = false;
            for (var v7o = 0; v7o < QW1x.length; v7o++) {
                if (this.bf7Y[bd7W].userId == QW1x[v7o]) {
                    bww9n = true;
                    break
                }
            }
            if (bww9n) continue;
            QV1x = this.bf7Y[bd7W].nickname.toLowerCase().search(bx7q);
            QT1x = this.bf7Y[bd7W].py ? this.bf7Y[bd7W].py.toLowerCase().search(bx7q) : -1;
            if (QV1x !== -1 || QT1x != -1) vp5u.push(this.bf7Y[bd7W])
        }
        return vp5u
    };
    b6f.cij9a = function(i6c) {
        a6g.dF8x(this.bgr5w, ciH9y, {
            users: i6c
        });
        a6g.w7p(a6g.F7y(this.o6i, "j-item")[0], "j-selected");
        this.fV9M = a6g.F7y(this.o6i, "j-item");
        a6g.bb7U(this.bgr5w, "display", "block")
    };
    b6f.Ry1x = function() {
        var vp5u = a6g.F7y(this.o6i, "j-receiver") || [];
        var ie0x = [];
        for (var i = 0; i < vp5u.length; i++) {
            ie0x.push(a6g.hc9T(vp5u[i], "data-id"))
        }
        return ie0x
    };
    b6f.cNd5i = function() {
        var ie0x = this.Ry1x();
        var vp5u = [];
        for (var i = 0; i < ie0x.length; i++) {
            for (var j = 0; j < this.bf7Y.length; j++) {
                if (ie0x[i] == this.bf7Y[j].userId) vp5u.push(this.bf7Y[j])
            }
        }
        return vp5u
    };
    b6f.cie9V = function() {
        this.bgp5u()
    };
    x7q.GL8D.J7C = function(e6c) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n6h.pQ3x.J7C({
                title: "登录"
            });
            return
        }
        e6c = e6c || {};
        if (e6c.parent === undefined) e6c.parent = document.body; !! this.fs9j && this.fs9j.V7O();
        this.fs9j = this.B7u(e6c)
    };
    x7q.GL8D.bt7m = function() { !! this.fs9j && this.fs9j.V7O()
    };
    x7q.GL8D.Hx8p = function() {
        return this.py2x()
    };
    x7q.GL8D.cNe5j = function() {
        return this.xL5Q()
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    k6e = c6e("nej.u"),
    h6b = c6e("nej.v"),
    l6f = c6e("nm.x"),
    n6h = c6e("nm.l"),
    b6f,
    K7D;
    n6h.KR9I = NEJ.C();
    b6f = n6h.KR9I.M7F(n6h.bkh6b);
    K7D = n6h.KR9I.cu8m;
    b6f.bo7h = function() {
        var Hz8r;
        var cic9T = function(C7v, L7E) {
            Hz8r = Hz8r || [];
            if (L7E != "18") Hz8r.push({
                key: L7E,
                value: C7v
            })
        };
        return function(e6c) {
            this.bq7j(e6c);
            if (e6c.upwards) {
                a6g.w7p(this.o6i, "m-emts-up")
            } else {
                a6g.y7r(this.o6i, "m-emts-up")
            }
            if (e6c.rightwards) {
                a6g.w7p(this.o6i, "m-emts-right")
            } else {
                a6g.y7r(this.o6i, "m-emts-right")
            }
            if (!Hz8r) {
                var bB7u = l6f.cvS1x();
                k6e.eQ9H(bB7u, cic9T)
            }
            var br7k = Hz8r.length;
            Hz8r.splice(br7k - 2, 0, {
                key: "18",
                value: "186"
            });
            this.bgz5E = Hz8r;
            this.cib9S = !!e6c.autoHide
        }
    } ();
    b6f.ch7a = function() {
        this.cf7Y = "ntp-portrait"
    };
    b6f.bW7P = function() {
        this.ci8a();
        var j6d = a6g.F7y(this.o6i, "j-flag");
        this.bL7E = j6d[0];
        this.cia9R = j6d[1];
        this.chV9M = j6d[2];
        this.chQ8I = j6d[3];
        h6b.s6m(this.bL7E, "click", this.Ax6r.f6b(this));
        h6b.s6m(this.cia9R, "click", this.HH8z.f6b(this, 1));
        h6b.s6m(this.chQ8I, "click", this.HH8z.f6b(this, 2))
    };
    b6f.bxd0x = function(r6l) {
        this.bgH5M = r6l;
        var bj7c = (r6l - 1) * 50;
        var j6d = this.bgz5E.slice(bj7c, Math.min(bj7c + 50, this.bgz5E.length));
        this.bL7E.innerHTML = a6g.ce7X("jst-portrait", {
            plist: j6d
        },
        {
            purl: l6f.bUO6I
        });
        this.chV9M.innerText = r6l + "/" + Math.ceil(this.bgz5E.length / 50)
    };
    b6f.HH8z = function(r6l) {
        var chO8G = Math.ceil(this.bgz5E.length / 50);
        if (r6l == 1 && this.bgH5M == 1 || r6l == 2 && this.bgH5M == chO8G) return;
        r6l == 1 ? this.bxd0x(this.bgH5M - 1) : this.bxd0x(this.bgH5M + 1)
    };
    b6f.Ax6r = function(d6d) {
        var G7z = h6b.Y7R(d6d, "d:text");
        if (!G7z) return;
        var d6d = {
            url: a6g.t7m(G7z, "url"),
            text: a6g.t7m(G7z, "text")
        };
        this.z7s("onselect", d6d);
        if (this.cib9S && !d6d.stopped) {
            this.bt7m()
        }
    };
    b6f.J7C = function() {
        K7D.J7C.call(this);
        this.bxd0x(1)
    }
})(); (function() {
    var c6e = NEJ.P,
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    dC8u = c6e("nej.p"),
    bh7a = c6e("nej.h"),
    H7A = c6e("nej.ut"),
    kC1x = /^[#?]+/,
    HE8w = /#(.*?)$/,
    Ay6s = window,
    bxn0x = !history.pushState || dC8u.Kb9S.android || !history.auto;
    var bgI5N = function(Z7S, bxv0x) {
        Ay6s.history[!bxv0x ? "pushState": "replaceState"](null, document.title, Z7S)
    };
    var bgJ5O = function() {
        return location.parse(Ay6s.location.href)
    };
    bgI5N = bgI5N.eO9F(function(d6d) {
        if (!bxn0x) return;
        var bi7b = d6d.args;
        d6d.stopped = !0;
        Z7S = bi7b[0].replace(kC1x, ""); ! bi7b[1] ? Ay6s.location.hash = Z7S: Ay6s.location.replace("#" + Z7S)
    });
    bgJ5O = bgJ5O.eO9F(function(d6d) {
        if (!bxn0x) return;
        d6d.stopped = !0;
        var dW8O = HE8w.test(Ay6s.location.href) ? RegExp.$1: "";
        d6d.value = location.parse(dW8O.replace(kC1x, ""))
    });
    location.redirect = function(Z7S, bxv0x) {
        bgI5N(Z7S, bxv0x);
        return this
    };
    location.active = function() {
        var eo8g, Z7S, kd1x, de8W, VX2x;
        var bxA0x = function(hC0x) {
            if ( !! de8W) {
                de8W = !1;
                return
            }
            var d6d = {
                oldValue: kd1x,
                newValue: bgJ5O()
            };
            if ( !! location.ignored) {
                location.ignored = !1
            } else {
                h6b.z7s(location, "beforeurlchange", d6d);
                if (d6d.stopped) {
                    if ( !! kd1x) {
                        de8W = !0;
                        bgI5N(kd1x.href, !0)
                    }
                    return
                }
            }
            Z7S = Ay6s.location.href;
            kd1x = d6d.newValue;
            h6b.z7s(location, "urlchange", kd1x);
            bh7a.bwG9x(kd1x.href)
        };
        var bPn4r = function() {
            if (Z7S != Ay6s.location.href) bxA0x();
            eo8g = requestAnimationFrame(bPn4r)
        };
        return function(bM7F) {
            if ( !! VX2x) return this;
            VX2x = !0;
            Ay6s = bM7F || window;
            if (bxn0x && "onhashchange" in window && dC8u.om2x.trident2) {
                h6b.s6m(Ay6s, "hashchange", bxA0x);
                bxA0x()
            } else if (!eo8g) {
                eo8g = requestAnimationFrame(bPn4r)
            }
            return this
        }
    } ();
    location.parse = function() {
        var gS9J = /^https?:\/\/.*?\//i,
        kC1x = /[?#]/;
        return function(Z7S) {
            var m6g = {
                href: Z7S
            };
            Z7S = (Z7S || "").replace(gS9J, "/").split(kC1x);
            var ck8c = 1;
            if (Z7S[0] == "/" && (Z7S[1] || "").indexOf("/") == 0) ck8c = 2;
            m6g.path = Z7S.splice(0, ck8c).join("?");
            m6g.query = k6e.hd9U(Z7S.join("&"));
            return m6g
        }
    } ();
    location.same = function(Z7S) {
        return bgJ5O().href == Z7S
    };
    H7A.fQ9H.B7u({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    gD9u = c6e("nm.ut");
    gD9u.vL5Q = function(es8k) {
        var hv0x = {
            text: "",
            start: 0,
            end: 0
        };
        if (es8k.setSelectionRange) {
            hv0x.start = es8k.selectionStart;
            hv0x.end = es8k.selectionEnd;
            hv0x.text = hv0x.start != hv0x.end ? es8k.value.substring(hv0x.start, hv0x.end) : ""
        } else if (document.selection) {
            var i, bgR5W = document.selection.createRange(),
            AF6z = document.body.createTextRange();
            AF6z.moveToElementText(es8k);
            hv0x.text = bgR5W.text;
            hv0x.bookmark = bgR5W.getBookmark();
            for (i = 0; AF6z.compareEndPoints("StartToStart", bgR5W) < 0 && bgR5W.moveStart("character", -1) !== 0; i++) {
                if (es8k.value.charAt(i) == "\n") {
                    i++
                }
            }
            hv0x.start = i;
            hv0x.end = hv0x.text.length + hv0x.start
        }
        return hv0x
    };
    gD9u.bgS5X = function(es8k, hv0x) {
        var AF6z;
        if (!hv0x) {
            hv0x = {
                text: "",
                start: 0,
                end: 0
            }
        }
        es8k.focus();
        if (es8k.setSelectionRange) {
            es8k.setSelectionRange(hv0x.start, hv0x.end)
        } else if (es8k.createTextRange) {
            AF6z = es8k.createTextRange();
            if (es8k.value.length === hv0x.start) {
                AF6z.collapse(false);
                AF6z.select()
            } else {
                AF6z.moveToBookmark(hv0x.bookmark);
                AF6z.select()
            }
        }
    };
    gD9u.KI9z = function(es8k, hv0x, cI8A) {
        var hv0x = hv0x || {
            text: "",
            start: 0,
            end: 0
        };
        var bxR0x, bPj4n, AF6z, Yv3x, bPd4h, bPc4g, HY8Q;
        this.bgS5X(es8k, hv0x);
        if (es8k.setSelectionRange) {
            bxR0x = es8k.value;
            bPj4n = bxR0x.substring(0, hv0x.start) + cI8A + bxR0x.substring(hv0x.end);
            bPd4h = bPc4g = hv0x.start + cI8A.length;
            HY8Q = es8k.scrollTop;
            es8k.value = bPj4n;
            if (es8k.scrollTop != HY8Q) {
                es8k.scrollTop = HY8Q
            }
            es8k.setSelectionRange(bPd4h, bPc4g)
        } else if (es8k.createTextRange) {
            Yv3x = document.selection.createRange();
            Yv3x.text = cI8A;
            Yv3x.setEndPoint("StartToEnd", Yv3x);
            Yv3x.select()
        }
        h6b.z7s(es8k, "keyup")
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    dC8u = c6e("nej.p"),
    k6e = c6e("nej.u"),
    cd7W = c6e("nej.ut"),
    x7q = c6e("nm.w"),
    gD9u = c6e("nm.ut"),
    b6f;
    x7q.bPb4f = NEJ.C();
    b6f = x7q.bPb4f.M7F(cd7W.cL8D);
    b6f.cA8s = function(e6c) {
        this.cG8y(e6c)
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.gG9x = e6c.txt;
        this.Ib8T = e6c.sgtsContainer;
        this.bPa4e = e6c.sgtsList[0];
        this.bgV5a = e6c.sgtsItem;
        this.pf2x = e6c.rangeData;
        this.KE9v = e6c.atIndex;
        a6g.w7p(this.bgV5a[0], "selected-item");
        this.If8X()
    };
    b6f.bC7v = function() {
        this.bH7A();
        h6b.nu2x(document.body, "keyup", this.bOZ4d.f6b(this));
        h6b.nu2x(document.body, "click", this.bOY4c.f6b(this))
    };
    b6f.If8X = function() {
        this.bY7R([[document.body, "keyup", this.bOZ4d.f6b(this)], [document.body, "click", this.bOY4c.f6b(this)], [this.gG9x, "keydown", this.bOX4b.f6b(this)], [this.gG9x, "keypress", this.bOX4b.f6b(this)], [this.bPa4e, "click", this.bOW4a.f6b(this)], [this.bPa4e, "mouseover", this.Ik9b.f6b(this)]])
    };
    b6f.Ik9b = function(d6d) {
        var bN7G = h6b.Y7R(d6d);
        var p6j = a6g.F7y(this.Ib8T, "selected-item");
        if (a6g.bG7z(bN7G, "j-sgt")) {
            a6g.y7r(p6j[0], "selected-item");
            a6g.w7p(bN7G, "selected-item")
        }
    };
    b6f.bOZ4d = function(d6d) {
        var p6j = a6g.F7y(this.Ib8T, "selected-item");
        var br7k = this.bgV5a.length;
        var ks1x = d6d.keyCode || d6d.which;
        var r6l, i6c;
        switch (ks1x) {
        case 38:
            r6l = a6g.hc9T(p6j[0], "data-index") - 1 < 0 ? br7k - 1 : a6g.hc9T(p6j[0], "data-index") - 1;
            a6g.y7r(p6j[0], "selected-item");
            a6g.w7p(this.bgV5a[r6l], "selected-item");
            break;
        case 40:
            r6l = parseInt(a6g.hc9T(p6j[0], "data-index")) + 1 >= br7k ? 0 : parseInt(a6g.hc9T(p6j[0], "data-index")) + 1;
            a6g.y7r(p6j[0], "selected-item");
            a6g.w7p(this.bgV5a[r6l], "selected-item");
            break;
        case 13:
            this.bOW4a(d6d);
            break;
        case 27:
            this.py2x();
            break;
        case 32:
            var bs7l = this.gG9x.value;
            var r6l = gD9u.vL5Q(this.gG9x);
            if (bs7l.charAt(r6l.start - 1) !== " ") return;
            this.py2x();
            break
        }
    };
    b6f.bOX4b = function(d6d) {
        var ks1x = d6d.keyCode || d6d.which;
        if (ks1x === 13 || ks1x === 38 || ks1x === 40) {
            h6b.cr8j(d6d);
            d6d.keyCode = 0;
            d6d.which = 0;
            d6d.returnvalue = false
        }
    };
    b6f.bOY4c = function(d6d) {
        var bN7G = d6d.target || d6d.srcElement;
        if (bN7G === this.gG9x) return;
        this.py2x()
    };
    b6f.bOW4a = function(d6d) {
        h6b.bg7Z(d6d);
        var p6j = a6g.F7y(this.Ib8T, "selected-item")[0];
        var tz4D = d6d.target || d6d.srcElement;
        var u7n = d6d.type;
        if (a6g.bG7z(tz4D, "lst")) return;
        if (u7n == "click") {
            a6g.y7r(p6j, "selected-item");
            a6g.w7p(tz4D, "selected-item")
        } else tz4D = p6j;
        var i6c = tz4D.innerHTML + " ";
        this.py2x();
        var hv0x = this.pf2x;
        hv0x.start = this.KE9v + 1;
        if (dC8u.dz8r.browser == "ie" && dC8u.dz8r.version < "9.0") {
            this.gG9x.value = this.gG9x.value.substring(0, hv0x.start) + this.gG9x.value.substring(hv0x.end, this.gG9x.value.length);
            hv0x.end = hv0x.start
        }
        gD9u.KI9z(this.gG9x, hv0x, i6c);
        h6b.z7s(this.gG9x, "keyup")
    };
    b6f.py2x = function(d6d) {
        if ( !! this.Ib8T) a6g.bb7U(this.Ib8T, "display", "none");
        this.V7O()
    };
    b6f.xL5Q = function(d6d) {
        if ( !! this.Ib8T) a6g.bb7U(this.Ib8T, "display", "block")
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    v7o = c6e("nej.j"),
    x7q = c6e("nm.w"),
    cd7W = c6e("nej.ut"),
    bD7w = c6e("nej.ui"),
    b6f;
    var cht8l = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var chp8h = a6g.eD9u("m-wgt-atlist");
    var jv1x = a6g.ve5j(cht8l);
    x7q.bOS4W = NEJ.C();
    b6f = x7q.bOS4W.M7F(bD7w.er8j);
    b6f.cA8s = function(e6c) {
        this.ge9V = {};
        this.cG8y()
    };
    b6f.bo7h = function(e6c) {
        this.ge9V.txt = a6g.A7t(e6c.target);
        this.ge9V.data = e6c.data;
        this.ge9V.offset = e6c.offset;
        this.ge9V.rangeData = e6c.rangeData;
        this.ge9V.atIndex = e6c.atIndex;
        this.chj8b(e6c);
        this.bq7j(e6c);
        this.ge9V.sgtsContainer = this.o6i;
        this.ge9V.sgtsList = a6g.F7y(this.o6i, "lst");
        this.ge9V.sgtsItem = a6g.F7y(this.o6i, "f-thide");
        this.YC3x(e6c);
        this.chh8Z = x7q.bPb4f.B7u(this.ge9V)
    };
    b6f.bC7v = function(e6c) {
        this.bH7A();
        this.chh8Z.V7O()
    };
    b6f.ch7a = function() {
        this.ms2x = jv1x
    };
    b6f.bW7P = function() {
        this.ci8a()
    };
    b6f.chj8b = function(e6c) {
        this.o6i = a6g.dE8w(a6g.jJ1x(a6g.ce7X(chp8h, e6c.data)))
    };
    b6f.YC3x = function(e6c) {
        var bOR4V = a6g.F7y(this.o6i, "selected-item")[0];
        if (bOR4V) a6g.y7r(bOR4V, "selected-item");
        var dg8Y = e6c.offset.x + "px";
        var hT0x = e6c.offset.y + "px";
        a6g.bb7U(this.o6i, "left", dg8Y);
        a6g.bb7U(this.o6i, "top", hT0x)
    }
})(); (function() {
    var c6e = NEJ.P,
    v7o = c6e("nej.j"),
    gD9u = c6e("nm.ut");
    gD9u.bOQ4U = function(bs7l) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var dl8d = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var KC9t = bs7l.match(dl8d) || [];
        for (var bd7W = 0; bd7W < KC9t.length; bd7W++) {
            KC9t[bd7W] = KC9t[bd7W].split("@")[1]
        }
        KC9t = KC9t.reverse();
        var ie0x = GUser.userId;
        var chb8T = v7o.uw4A("mentioners" + ie0x) || [];
        var kl1x = KC9t.concat(chb8T);
        if (kl1x.length > 10) kl1x = kl1x.slice(0, 10);
        v7o.vZ5e("mentioners" + ie0x, kl1x)
    };
    gD9u.cha8S = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var ie0x = GUser.userId;
        return v7o.uw4A("mentioners" + ie0x) || []
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    dC8u = c6e("nej.p"),
    v7o = c6e("nej.j"),
    k6e = c6e("nej.u"),
    cd7W = c6e("nej.ut"),
    x7q = c6e("nm.w"),
    gD9u = c6e("nm.ut"),
    l6f = c6e("nm.x"),
    b6f;
    var FullscreenApi = l6f.GG8y || {};
    x7q.bOP4T = NEJ.C();
    b6f = x7q.bOP4T.M7F(cd7W.cL8D);
    b6f.cA8s = function(e6c) {
        this.cG8y(e6c);
        this.bOO4S()
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.gG9x = e6c.txt;
        this.o6i = e6c.body;
        this.bON4R = e6c.before;
        this.RO1x = e6c.flag;
        this.cgS8K = e6c.after;
        this.sf3x = [];
        if (dC8u.dz8r.browser != "ie") {
            setTimeout(function() {
                this.mw2x()
            }.f6b(this), 0)
        }
        this.If8X()
    };
    b6f.bC7v = function() {
        this.bH7A();
        if (this.wO5T) this.wO5T.V7O();
        delete this.wO5T
    };
    b6f.If8X = function() {
        this.bY7R([[this.gG9x, "keyup", this.bOK4O.f6b(this, this.gG9x)], [this.gG9x, "click", this.bOK4O.f6b(this, this.gG9x)], [this.gG9x, "focus", this.mw2x.f6b(this)]])
    };
    b6f.mw2x = function(d6d) {
        this.pf2x = gD9u.vL5Q(this.gG9x)
    };
    b6f.bOO4S = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var ds8k = window.GUser.userId;
        var Z7S = "/api/user/getfollows/" + ds8k;
        var gx9o = v7o.bl7e(Z7S, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(i6c) {
                window.GFollowers = JSON.parse(i6c).follow
            }.f6b(this),
            onerror: function(i6c) {},
            onbeforerequest: function(i6c) {}
        })
    };
    b6f.bOG4K = function(index) {
        var C7v = this.gG9x.value,
        bj7c, byV0x, byW0x, UT2x;
        this.bON4R.innerHTML = k6e.dL8D(C7v.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var mX2x = a6g.F7y(this.bON4R, "j-test");
        for (var bd7W = 0; bd7W < mX2x.length; bd7W++) {
            mX2x[bd7W].innerText = " "
        }
        this.RO1x.innerHTML = C7v.charAt(index);
        this.cgS8K.innerHTML = k6e.dL8D(C7v.substr(index + 1, C7v.length));
        UT2x = parseInt(a6g.dm8e(this.gG9x, "lineHeight"));
        a6g.bb7U(this.o6i, "display", "block");
        byV0x = a6g.ik0x(this.RO1x, this.o6i);
        byW0x = a6g.ik0x(this.gG9x);
        a6g.bb7U(this.o6i, "display", "none");
        var dg8Y = byV0x.x + byW0x.x;
        var hT0x = byV0x.y + byW0x.y + UT2x;
        bj7c = {
            x: dg8Y,
            y: hT0x
        };
        this.cgL8D(bj7c)
    };
    b6f.bOK4O = function(es8k, d6d) {
        h6b.cr8j(d6d);
        var es8k = es8k;
        var C7v = es8k.value;
        var br7k = C7v.length;
        var r6l = gD9u.vL5Q(es8k).start;
        var bOF4J = 0;
        var ks1x = d6d.keyCode || d6d.which;
        var kl1x;
        this.pf2x = gD9u.vL5Q(es8k);
        var bOE4I = false;
        for (var i = 1; i < 20; i++) {
            kl1x = r6l - i;
            if (C7v.charAt(kl1x) === " ") break;
            if (C7v.charAt(kl1x) === "@") {
                bOE4I = true;
                this.KE9v = bOF4J = kl1x;
                break
            }
        }
        if (bOE4I && d6d.shiftKey === false && ks1x !== 38 && ks1x !== 40) {
            if (ks1x !== 27 && ks1x !== 13) {
                this.wO5T ? this.wO5T.V7O() : null;
                this.bOG4K(bOF4J)
            }
        } else if (ks1x !== 38 && ks1x !== 40 && d6d.keyCode !== 32) {
            this.wO5T ? this.wO5T.V7O() : null
        }
    };
    b6f.cgL8D = function(bj7c) {
        var bj7c = bj7c;
        var i6c = this.wZ5e();
        var e6c = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bj7c,
            data: i6c,
            target: this.gG9x,
            rangeData: this.pf2x,
            atIndex: this.KE9v
        };
        this.wO5T ? this.wO5T.V7O() : null;
        this.wO5T = x7q.bOS4W.B7u(e6c)
    };
    b6f.wZ5e = function() {
        var cgH8z = gD9u.vL5Q(this.gG9x).start;
        var cgE8w = this.KE9v + 1;
        var bOC4G = gD9u.cha8S() || [];
        var bOA4E = [];
        var bx7q = this.gG9x.value.substring(cgE8w, cgH8z).toLowerCase();
        bx7q = bx7q.replace(/\[/g, "\\[");
        bx7q = bx7q.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.sf3x = window.GFollowers[0] ? window.GFollowers: []
        } else this.sf3x = [];
        if (!this.sf3x[0]) this.bOO4S();
        for (var bd7W = 0; bd7W < bOC4G.length; bd7W++) {
            for (var v7o = 0; v7o < this.sf3x.length; v7o++) {
                if (this.sf3x[v7o].nickname == bOC4G[bd7W]) bOA4E.push(this.sf3x[v7o])
            }
        }
        this.sf3x = k6e.cve1x(this.sf3x, bOA4E, {
            union: true,
            begin: true
        });
        var cgw8o = this.sf3x.length;
        var bhe5j = [];
        var QV1x, QT1x;
        if (!this.sf3x[0]) return {
            suggests: bhe5j
        };
        for (var i = 0; i < cgw8o; i++) {
            QV1x = this.sf3x[i].nickname.toLowerCase().search(bx7q);
            QT1x = this.sf3x[i].py ? this.sf3x[i].py.toLowerCase().search(bx7q) : -1;
            if (QV1x !== -1 || QT1x != -1) bhe5j.push(this.sf3x[i]);
            if (bhe5j.length === 10) break
        }
        return {
            suggests: bhe5j
        }
    };
    b6f.SX1x = function() {
        var hv0x = this.pf2x || {
            text: "",
            start: 0,
            end: 0
        };
        h6b.z7s(this.gG9x, "focus");
        gD9u.KI9z(this.gG9x, hv0x, "@");
        this.pf2x = gD9u.vL5Q(this.gG9x);
        this.KE9v = hv0x.start;
        this.bOG4K(this.KE9v)
    };
    b6f.Hx8p = function() {
        if (this.wO5T) this.wO5T.V7O()
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    v7o = c6e("nej.j"),
    x7q = c6e("nm.w"),
    cd7W = c6e("nej.ut"),
    bD7w = c6e("nej.ui"),
    b6f;
    var cgv8n = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cgu8m = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gB9s = a6g.jJ1x(cgu8m);
    var jv1x = a6g.ve5j(cgv8n);
    x7q.SM1x = NEJ.C();
    b6f = x7q.SM1x.M7F(bD7w.er8j);
    b6f.cA8s = function(e6c) {
        this.ge9V = {};
        this.cG8y()
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c);
        this.ge9V.txt = a6g.A7t(e6c.target);
        this.Sg1x();
        this.SJ1x = x7q.bOP4T.B7u(this.ge9V)
    };
    b6f.bC7v = function(e6c) {
        this.bH7A();
        this.SJ1x.V7O()
    };
    b6f.ch7a = function() {
        this.cf7Y = gB9s;
        this.ms2x = jv1x
    };
    b6f.bW7P = function() {
        this.ci8a();
        var j6d = a6g.dj8b(a6g.A7t(this.o6i));
        this.ge9V.body = this.o6i;
        this.ge9V.before = j6d[0];
        this.ge9V.flag = j6d[1];
        this.ge9V.after = j6d[2]
    };
    b6f.Sg1x = function() {
        var qg3x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < qg3x.length; i++) {
            if (qg3x[i] === "width" && a6g.dm8e(this.ge9V.txt, qg3x[i]) == "100%") {
                var cgr8j = this.ge9V.txt.offsetWidth;
                if (!cgr8j) {
                    setTimeout(function() {
                        a6g.bb7U(this.o6i, qg3x[i], this.ge9V.txt.offsetWidth + "px")
                    }.f6b(this), 300)
                } else {
                    a6g.bb7U(this.o6i, qg3x[i], this.ge9V.txt.offsetWidth + "px")
                }
                continue
            }
            a6g.bb7U(this.o6i, qg3x[i], a6g.dm8e(this.ge9V.txt, qg3x[i]))
        }
    };
    b6f.SX1x = function() {
        this.SJ1x.SX1x()
    };
    b6f.Hx8p = function() {
        this.SJ1x.Hx8p()
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    fL9C = NEJ.R,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    lm1x = c6e("nm.c"),
    S7L = {},
    b6f;
    if ( !! lm1x.bzE0x) return;
    lm1x.bzE0x = NEJ.C();
    b6f = lm1x.bzE0x.M7F(H7A.cL8D);
    b6f.cA8s = function() {
        this.cG8y()
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c)
    };
    b6f.bC7v = function() {
        this.bH7A()
    };
    b6f.IO9F = function(fv9m, cE8w, bhA5F) {
        if (S7L[fv9m]) {
            this.gq9h("register commonJST[" + fv9m + "] duplicate");
            return
        }
        if (!k6e.gZ9Q(cE8w)) {
            cE8w = ctl.comJST.cgp8h(fv9m, cE8w, bhA5F)
        }
        S7L[fv9m] = cE8w
    };
    b6f.cgo8g = function(bhD5I) {
        if (k6e.eh8Z(bhD5I)) {
            k6e.be7X(bhD5I,
            function(p6j) {
                ctl.comJST.IO9F.apply(this, p6j)
            },
            this)
        } else if (k6e.mn2x(bhD5I)) {
            k6e.eQ9H(bhD5I,
            function(fE9v, L7E) {
                ctl.comJST.IO9F(L7E, fE9v)
            })
        }
    };
    b6f.cgp8h = function(fv9m, xg5l, bhA5F) {
        xg5l = xg5l || {};
        NEJ.X(xg5l, {
            comJST: this.oi2x
        });
        if (xg5l.resetDataName && !k6e.eh8Z(xg5l.resetDataName)) {
            xg5l.resetDataName = [xg5l.resetDataName]
        }
        return function() {
            var i6c = arguments[0],
            jQ1x = arguments[1];
            if (xg5l.resetDataName) {
                var kl1x = {};
                for (var i = 0,
                ii = xg5l.resetDataName.length; i < ii; i++) {
                    kl1x[xg5l.resetDataName[i]] = arguments[i]
                }
                i6c = kl1x;
                jQ1x = arguments[ii]
            }
            NEJ.X(i6c, xg5l, ej8b);
            if (bhA5F) {
                jQ1x = jQ1x || {};
                NEJ.X(jQ1x, bhA5F)
            }
            return a6g.ce7X(fv9m, i6c, jQ1x)
        }
    };
    b6f.oi2x = function(fv9m) {
        if (!S7L[fv9m]) {
            this.gq9h("commonJST[" + fv9m + "] is unregister");
            return ""
        } else {
            return S7L[fv9m].apply(null, fL9C.slice.call(arguments, 1))
        }
    };
    b6f.dump = function() {
        return S7L
    };
    b6f.gq9h = function(cgk8c) {
        if (console && console.log) {
            console.log(cgk8c)
        }
    };
    var ej8b = function(fE9v, L7E) {
        return L7E == "resetDataName"
    };
    c6e("ctl").comJST = lm1x.bzE0x.fP9G();
    a6g.cIa4e({
        comJST: c6e("ctl").comJST.oi2x
    })
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    bu7n = NEJ.F,
    fL9C = NEJ.R,
    a6g = c6e("nej.e"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    lm1x = c6e("nm.c"),
    l6f = c6e("nm.x"),
    S7L = {},
    b6f;
    if ( !! lm1x.bzZ0x) return;
    lm1x.bzZ0x = NEJ.C();
    b6f = lm1x.bzZ0x.M7F(H7A.cL8D);
    b6f.cA8s = function() {
        this.cG8y();
        var e6c = {
            "com-mv-artists": function(gh9Y, en8f, Qk1x, bAb0x) {
                return a6g.ce7X("com-mv-artists", {
                    artists: gh9Y,
                    clazz: en8f,
                    boxClazz: bAb0x,
                    mark: Qk1x ||
                    function(cP8H) {
                        return cP8H
                    },
                    escape: k6e.dL8D,
                    comJST: ctl.comJST.oi2x
                })
            },
            "com-album-artists": function(gh9Y, en8f, Qk1x, bAb0x) {
                return a6g.ce7X("com-album-artists", {
                    artists: gh9Y,
                    clazz: en8f,
                    boxClazz: bAb0x,
                    mark: Qk1x ||
                    function(cP8H) {
                        return cP8H
                    },
                    escape: k6e.dL8D,
                    comJST: ctl.comJST.oi2x
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k6e.dL8D
            },
            "com-user-type": function(dt8l, en8f, lT1x, xK5P, bOu4y) {
                return a6g.ce7X("com-user-type", {
                    x: dt8l,
                    clazz: en8f || "",
                    clazz2: typeof bOu4y == "undefined" ? "icn": bOu4y,
                    before: lT1x || "",
                    after: xK5P || "",
                    isEmptyObject: l6f.bUB6v
                })
            }
        };
        for (var D7w in e6c) {
            ctl.comJST.IO9F(D7w, e6c[D7w])
        }
    };
    b6f.bo7h = function(e6c) {
        this.bq7j(e6c)
    };
    b6f.bC7v = function() {
        this.bH7A()
    };
    c6e("ctl").comJSTUtil = lm1x.bzZ0x.fP9G()
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    a6g = c6e("nej.e"),
    dC8u = c6e("nej.p"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    v7o = c6e("nej.j"),
    x7q = c6e("nm.w"),
    gD9u = c6e("nm.ut"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    n6h = c6e("nm.l"),
    bAe0x = [2, 3],
    em8e = ["sn", "db"],
    b6f,
    K7D,
    cge8W = {
        13 : "playlist",
        17 : "djprogram",
        18 : "song",
        19 : "album",
        20 : "artist",
        21 : "mv",
        24 : "topic",
        25 : "activity",
        70 : "djradio",
        38 : "concert",
        39 : "video",
        41 : "cloudvideo"
    },
    bhE5J = {
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
    bOs3x = {
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
    cgb8T = {
        0 : 13,
        1 : 17,
        3 : 19,
        4 : 18,
        5 : 21,
        6 : 24,
        14 : 70,
        17 : 20
    },
    IZ9Q = {
        pubEventWithPics: false,
        pubEventWithoutResource: false,
        pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
    },
    FullscreenApi = l6f.GG8y || {};
    n6h.pH2x = NEJ.C();
    b6f = n6h.pH2x.M7F(n6h.ep8h);
    K7D = n6h.pH2x.cu8m;
    b6f.bo7h = function(e6c) {
        if (e6c.onclose === undefined) {
            e6c.onclose = this.bOr3x.f6b(this)
        }
        this.bq7j(e6c);
        this.Bu7n = e6c.isPub;
        this.ji1x = e6c.rid || -1;
        this.eH9y = e6c.type || -1;
        this.bAt0x = e6c.purl;
        this.PC0x = e6c.name || "";
        this.PA0x = e6c.author || "";
        this.bAB0x = e6c.authors || "";
        this.bhG5L = e6c.actId;
        this.bhI5N = e6c.actName;
        this.bOp3x = e6c.title;
        this.bhJ5O = {};
        this.cfW8O = e6c.mesg || "";
        this.cfU8M = e6c.placeholder || "说点什么吧";
        this.bAP0x = e6c.hideTip;
        this.cfT8L = e6c.videoJumpUrl;
        var j6d, fh9Y = +(new Date);
        try {
            j6d = top.localCache.A7t("user") || {}
        } catch(e) {
            j6d = {}
        }
        for (var i = 0,
        j6d = j6d.bindings || [], cq8i; i < j6d.length; ++i) {
            cq8i = !j6d[i].tokenJsonStr ? null: JSON.parse(j6d[i].tokenJsonStr);
            if (!cq8i || cq8i.expires_in === undefined) continue;
            var bhN5S = parseInt(cq8i.expires_in),
            bhP5U = parseInt(j6d[i].refreshTime),
            cfK8C = (bhN5S + bhP5U) * 1e3 - 5 * 60 * 1e3;
            if (cfK8C > fh9Y) this.bhJ5O[j6d[i].type] = !0
        }
        this.xJ5O = x7q.GL8D.B7u({
            parent: this.bhQ5V,
            err: this.bOl3x
        });
        if (this.hQ0x) {
            this.hQ0x.V7O()
        }
        this.hQ0x = x7q.SM1x.B7u({
            parent: document.body,
            target: this.eE9v
        });
        if (this.eH9y == 24 || this.eH9y == 21 || this.eH9y == 41 || this.Jr9i()) {
            this.BF7y.style.display = "none"
        } else {
            this.BF7y.style.display = "";
            this.pU3x = x7q.boG7z.B7u({
                parent: this.bio5t,
                button: this.BF7y,
                onstartupload: this.bOj3x.f6b(this, true),
                onfinishupload: this.bOj3x.f6b(this, false)
            })
        }
        if (this.Jr9i()) {
            this.qW3x.innerText = "";
            a6g.w7p(this.qW3x, "info-video");
            a6g.w7p(this.bis5x, "f-hide")
        } else {
            a6g.y7r(this.bis5x, "f-hide")
        }
    };
    b6f.bC7v = function() {
        this.bH7A();
        if (this.xJ5O) {
            this.xJ5O.V7O();
            delete this.xJ5O
        }
        if (this.hQ0x) {
            this.hQ0x.V7O();
            delete this.hQ0x
        }
        if (this.pU3x) {
            this.pU3x.V7O();
            delete this.pU3x
        }
        if (this.nj2x) {
            this.nj2x.V7O();
            delete this.nj2x
        }
    };
    b6f.ch7a = function() {
        this.cf7Y = "m-wgt-sharewin"
    };
    b6f.bW7P = function() {
        this.ci8a();
        this.bOb3x = a6g.dj8b(this.o6i)[0];
        var bv7o = a6g.F7y(this.o6i, "j-flag");
        this.rU3x = bv7o.shift();
        this.bOl3x = bv7o.shift();
        this.bhQ5V = bv7o.shift();
        this.eE9v = bv7o.shift();
        this.qW3x = bv7o.shift();
        this.biz5E = bv7o.shift();
        this.cfw8o = bv7o.shift();
        this.BF7y = bv7o.shift();
        this.cO8G = bv7o.shift();
        this.bio5t = bv7o.shift();
        this.ET8L = bv7o.shift();
        this.cNq5v = bv7o.shift();
        this.bis5x = bv7o.shift();
        this.ea8S = bv7o.shift();
        this.bhT5Y = a6g.F7y(this.bis5x, "j-t");
        this.CA7t = H7A.JP9G.B7u({
            list: a6g.dj8b(this.rU3x),
            selected: "z-slt",
            onchange: this.biF5K.f6b(this)
        });
        if (dC8u.dz8r.browser == "ie" && dC8u.dz8r.version < "8.0") {
            a6g.bb7U(this.bhQ5V, "position", "relative");
            a6g.bb7U(this.bhQ5V, "zIndex", "10")
        }
        h6b.s6m(window, "snsbind", this.Si1x.f6b(this));
        h6b.s6m(this.eE9v, "input", this.eW9N.f6b(this));
        h6b.s6m(this.eE9v, "keyup", this.wq5v.f6b(this));
        h6b.s6m(this.o6i, "click", this.cM8E.f6b(this));
        this.T7M = q6k.bln6h.B7u();
        this.T7M.s6m("onshareall", this.bhY5d.f6b(this, 0));
        this.T7M.s6m("onshareerror", this.jo1x.f6b(this));
        this.T7M.s6m("onshareprivate", this.bhY5d.f6b(this, 1));
        this.bib5g = q6k.zY6S.B7u();
        this.gq9h = q6k.hW0x.B7u();
        try {
            this.Rf1x = top.api.sharePermission
        } catch(e) {}
        if (!this.Rf1x) {
            this.Rf1x = IZ9Q;
            v7o.bl7e("/api/event/user/permission", {
                type: "json",
                onload: function(d6d) {
                    if (d6d.code == 200) {
                        this.Rf1x = NEJ.EX(IZ9Q, d6d)
                    }
                }.f6b(this)
            })
        }
        l6f.kR1x()
    };
    b6f.biF5K = function(d6d) {
        d6d.index == 0 ? a6g.y7r(this.bOb3x, "m-plshare") : a6g.w7p(this.bOb3x, "m-plshare");
        this.bhQ5V.style.display = d6d.index == 0 ? "none": "";
        this.cfw8o.style.display = d6d.index == 0 ? "": "none";
        this.BF7y.style.display = d6d.index == 0 ? "": "none";
        if (this.eH9y == 24 || this.eH9y == 21) {
            this.BF7y.style.display = "none"
        }
        this.bOl3x.style.display = "none";
        this.eE9v.value = "";
        this.cb7U();
        this.JI9z();
        if (d6d.index == 0) {
            var cz8r = a6g.dm8e(this.eE9v, "width");
            if (cz8r == "auto" || !cz8r) {
                return
            } else {
                if (this.hQ0x) {
                    this.hQ0x.V7O()
                }
                this.hQ0x = x7q.SM1x.B7u({
                    parent: document.body,
                    target: this.eE9v
                })
            }
            this.bio5t.style.display = ""
        } else {
            if (this.hQ0x) {
                this.hQ0x.V7O();
                delete this.hQ0x
            }
            this.bio5t.style.display = "none"
        }
    };
    b6f.cM8E = function(d6d) {
        var g6a = h6b.Y7R(d6d, "d:action");
        if (!g6a) return;
        if (a6g.t7m(g6a, "action") == "search") {
            h6b.cr8j(d6d)
        } else if (a6g.t7m(g6a, "default") === undefined) {
            h6b.cr8j(d6d)
        }
        switch (a6g.t7m(g6a, "action")) {
        case "txt":
            this.mw2x();
            break;
        case "search":
            if (this.Jr9i()) {
                top.location.href = this.cfT8L
            } else if (this.Bu7n && this.eH9y != 24) {
                if (this.nj2x) {
                    this.nj2x.V7O()
                }
                this.nj2x = x7q.bth9Y.B7u({
                    parent: this.o6i.parentNode,
                    onfinish: this.biM5R.f6b(this),
                    oncancel: this.cfo8g.f6b(this)
                });
                this.biR5W = true;
                this.o6i.style.display = "none";
                this.JJ9A(this.ji1x < 0 ? "添加音乐": "更换音乐")
            }
            break;
        case "at":
            h6b.us4w(d6d); !! this.hE0x && this.hE0x.bt7m();
            this.hQ0x.SX1x();
            this.gv9m();
            break;
        case "emot":
            h6b.us4w(d6d); !! this.hQ0x && this.hQ0x.Hx8p();
            if (!this.hE0x) {
                this.hE0x = n6h.KR9I.B7u({
                    parent: this.biz5E
                });
                this.hE0x.s6m("onselect", this.Ax6r.f6b(this))
            }
            this.hE0x.J7C();
            break;
        case "upload":
            break;
        case "sns":
            h6b.bg7Z(d6d);
            var biV5a, bx7q, u7n = a6g.t7m(g6a, "type");
            if (!this.bhJ5O[u7n]) {
                biV5a = g6a.href.split("?");
                bx7q = k6e.hd9U(biV5a[1]);
                bx7q["csrf_token"] = v7o.gQ9H("__csrf");
                top.open(biV5a[0] + "?" + k6e.cD8v(bx7q));
                return
            }
            var bB7u = {
                2 : "sn",
                3 : "db",
                4 : "rr"
            };
            l6f.Cu7n(g6a, "u-slg-" + bB7u[u7n] + "-gray");
            break;
        case "close":
            !!this.hE0x && this.hE0x.bt7m();
            this.bOr3x();
            break;
        case "share":
            h6b.bg7Z(d6d);
            if (this.Jr9i()) {
                if (!a6g.bG7z(g6a, "u-btn2-2-dis")) {
                    this.cfm8e()
                }
            } else if (a6g.bG7z(g6a, "u-btn2-2-dis")) {
                if (!this.Rf1x.pubEventWithoutResource && this.ji1x < 0) {
                    this.cfe8W()
                } else {}
            } else if (this.ji1x < 0 && !this.eE9v.value && this.pU3x && this.pU3x.UP2x().length == 0) {
                n6h.ba7T.J7C({
                    type: 2,
                    tip: "请输入内容"
                })
            } else {
                this.cfd8V()
            }
            break
        }
    };
    b6f.cfe8W = function() {
        var jT1x = 0,
        bjd5i = function() {
            if (jT1x % 2) {
                a6g.y7r(this.qW3x, "z-show")
            } else {
                a6g.w7p(this.qW3x, "z-show")
            }
            jT1x++;
            if (jT1x > 5) {
                clearInterval(eo8g)
            }
        },
        eo8g;
        return function() {
            jT1x = 0;
            clearInterval(eo8g);
            eo8g = setInterval(bjd5i.f6b(this), 200)
        }
    } ();
    b6f.Si1x = function(m6g) {
        m6g = m6g.result;
        this.bhJ5O[m6g.type] = !0;
        var r6l = k6e.do8g(bAe0x, m6g.type),
        cm8e = "u-slg-" + em8e[r6l] + "-gray";
        a6g.y7r(this.bhT5Y[r6l], cm8e)
    };
    b6f.biM5R = function(bp7i) {
        var i6c = bp7i.data;
        this.ji1x = bp7i.id;
        this.eH9y = bp7i.type;
        this.o6i.style.display = "";
        this.JJ9A(this.bOp3x);
        this.nj2x && this.nj2x.V7O();
        this.biR5W = false;
        this.bAt0x = i6c.picUrl;
        this.PC0x = i6c.title || "";
        this.PA0x = i6c.author || "";
        this.bAB0x = i6c.authors || "";
        this.cfc8U();
        this.bie5j()
    };
    b6f.cfo8g = function() {
        this.nj2x && this.nj2x.V7O();
        this.o6i.style.display = "";
        this.JJ9A(this.bOp3x);
        this.biR5W = false;
        this.bie5j()
    };
    b6f.Ax6r = function(d6d) {
        var bs7l = "[" + d6d.text + "]";
        gD9u.KI9z(this.eE9v, this.pf2x, bs7l);
        this.gv9m()
    };
    b6f.eW9N = function(d6d) {
        dC8u.dz8r.browser == "ie" && dC8u.dz8r.version < "7.0" ? setTimeout(this.gv9m.f6b(this), 0) : this.gv9m()
    };
    b6f.wq5v = function(d6d) {
        this.mw2x();
        if (d6d.keyCode == 8) this.gv9m()
    };
    b6f.gv9m = function() {
        this.mw2x();
        this.JI9z()
    };
    b6f.JI9z = function() {
        var br7k = Math.ceil(k6e.fN9E(this.eE9v.value.trim()) / 2);
        this.cO8G.innerText = 140 - br7k;
        br7k > 140 ? a6g.fz9q(this.cO8G, "s-fc4", "s-fc6") : a6g.fz9q(this.cO8G, "s-fc6", "s-fc4")
    };
    b6f.cfd8V = function() {
        if (this.cV8N()) return;
        if (k6e.fN9E(this.eE9v.value.trim()) > 280) {
            this.cb7U("字数超过140个字符");
            return
        }
        l6f.mo2x(this.cfa8S.f6b(this))
    };
    b6f.cfa8S = function(cq8i) {
        var u7n = this.CA7t.uq4u(),
        i6c;
        if (u7n == 0) {
            for (var i = 0,
            Kd9U = []; i < this.bhT5Y.length; ++i) {
                if (!a6g.bG7z(this.bhT5Y[i], "u-slg-" + em8e[i] + "-gray")) Kd9U.push(bAe0x[i])
            }
            this.cV8N(!0);
            i6c = {
                id: this.ji1x,
                msg: this.eE9v.value.trim(),
                type: this.big5l(this.eH9y),
                picUrl: this.bAt0x,
                snsTypes: Kd9U.join(","),
                isPub: this.Bu7n,
                checkToken: cq8i || ""
            };
            if (this.bhG5L > 0) {
                i6c.actId = this.bhG5L;
                if (this.bhI5N) {
                    i6c.msg = "#" + this.bhI5N + "#" + i6c.msg
                }
            }
            var pd2x = this.pU3x && this.pU3x.UP2x();
            if (pd2x && pd2x.length) {
                i6c.pics = pd2x
            }
            this.T7M.cmd9U(i6c)
        } else {
            var vp5u = this.xJ5O.Ry1x();
            if (vp5u.length <= 0) {
                this.cb7U("请至少选择一位好友");
                return
            }
            this.T7M.cmb9S({
                data: {
                    id: this.ji1x,
                    msg: this.eE9v.value.trim(),
                    type: this.big5l(this.eH9y == 41 ? 39 : this.eH9y),
                    userIds: "[" + vp5u.join(",") + "]",
                    checkToken: cq8i || ""
                }
            })
        }
    };
    b6f.cfm8e = function() {
        if (this.cV8N()) {
            return
        }
        this.gq9h.eZ9Q("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k6e.fN9E(this.eE9v.value.trim()) > 280) {
            this.cb7U("字数超过140个字符");
            return
        }
        l6f.mo2x(this.ceW8O.bind(this))
    };
    b6f.ceW8O = function(cq8i) {
        this.cV8N(!0);
        var i6c = {
            msg: this.eE9v.value.trim() || "",
            type: "video",
            checkToken: cq8i || ""
        },
        ceV8N = {
            videoId: this.ji1x
        };
        if (this.bhG5L > 0) {
            i6c.actId = this.bhG5L;
            if (this.bhI5N) {
                i6c.msg = "#" + this.bhI5N + "#" + i6c.msg
            }
        }
        i6c.videoinfo = JSON.stringify(ceV8N);
        this.T7M.cma9R({
            data: {
                videoId: this.ji1x,
                commit: true
            },
            data2: i6c,
            snsTypes: ""
        })
    };
    b6f.bhY5d = function(u7n, m6g) {
        this.cV8N(!1);
        this.bt7m();
        if (!this.bAP0x) {
            if (this.Jr9i()) {
                n6h.ba7T.J7C({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n6h.ba7T.J7C({
                    tip: "分享成功" + (m6g.point > 0 ? ' 获得<em class="s-fc6">' + m6g.point + "积分</em>": ""),
                    autoclose: true
                })
            }
        }
        h6b.z7s(n6h.pH2x, "sharesuccess", {
            isPrivate: u7n,
            rid: this.ji1x,
            rtype: this.eH9y,
            data: m6g.event
        });
        this.z7s("onshare")
    };
    b6f.jo1x = function(m6g) {
        this.cV8N(!1);
        var bF7y = "分享失败";
        if (m6g.code) {
            switch (m6g.code) {
            case 250:
                bF7y = m6g.message || m6g.msg || (this.Bu7n ? "发布异常": "分享异常");
                break;
            case 404:
                bF7y = "分享的资源不存在";
                break;
            case 407:
                bF7y = "输入内容包含有关键字";
                break;
            case 408:
                bF7y = "分享太快了，过会再分享吧";
                break;
            case 315:
                bF7y = m6g.message || "根据对方设置，你没有该操作权限";
                break;
            case 329:
                return l6f.eU9L({
                    clazz:
                    "m-layer-w2",
                    btntxt: "知道了",
                    message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                })
            }
        }
        this.cb7U(bF7y)
    };
    b6f.mw2x = function() {
        this.pf2x = gD9u.vL5Q(this.eE9v)
    };
    b6f.cb7U = function(bF7y) {
        this.ed8V(this.ea8S, bF7y)
    };
    b6f.cV8N = function(de8W) {
        return this.ee8W(this.ET8L, de8W, "分享", "分享中...")
    };
    b6f.big5l = function(iw1x) {
        return cge8W[iw1x] || ""
    };
    b6f.ceT8L = function() {
        var es8k, wU5Z = this.big5l(this.eH9y);
        this.qW3x.style.display = "";
        if (this.ji1x < 0) {
            this.qW3x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.PC0x) {
                this.qW3x.style.display = "none";
                return
            }
            var bil5q = this.Bu7n && this.eH9y != 24;
            es8k = (bhE5J[wU5Z] ? bhE5J[wU5Z] + "：": "") + this.PC0x + (bOs3x[wU5Z] || " ") + (wU5Z == "mv" || wU5Z == "album" ? this.bAB0x || this.PA0x: this.PA0x);
            a6g.dF8x(this.qW3x, "m-xwgt-share-infobar", {
                canChange: bil5q,
                info: es8k
            });
            if (bil5q) {
                a6g.y7r(this.qW3x, "z-dis")
            } else {
                a6g.w7p(this.qW3x, "z-dis")
            }
        }
        a6g.y7r(this.qW3x, "info-video")
    };
    b6f.cfc8U = function() {
        var wU5Z = this.big5l(this.eH9y),
        es8k = (bhE5J[wU5Z] ? bhE5J[wU5Z] + "：": "") + this.PC0x + (bOs3x[wU5Z] || " ") + (wU5Z == "mv" || wU5Z == "album" ? this.bAB0x || this.PA0x: this.PA0x);
        bil5q = this.Bu7n && this.eH9y != 24;
        if (this.Jr9i()) {} else {
            a6g.y7r(this.qW3x, "info-video");
            a6g.dF8x(this.qW3x, "m-xwgt-share-infobar", {
                canChange: bil5q,
                isPub: this.Bu7n,
                info: es8k
            })
        }
    };
    b6f.ceS8K = function() {
        var Ka9R = this.eE9v.value;
        if (this.Bu7n) {
            if ( !! this.biR5W) {
                return !! Ka9R && !!Ka9R.length || !!this.pU3x && this.pU3x.UP2x().length > 0
            } else {
                return ! (this.ji1x < 0) || !!Ka9R && !!Ka9R.length || !!this.pU3x && this.pU3x.UP2x().length > 0
            }
        } else {
            return !! Ka9R && !!Ka9R.length || !!this.pU3x && this.pU3x.UP2x().length > 0
        }
    };
    b6f.bie5j = function() {
        var bNP3x = false;
        if (!this.Bu7n || this.Rf1x.pubEventWithoutResource || !(this.ji1x < 0)) {
            bNP3x = true
        }
        if (bNP3x) {
            a6g.y7r(this.ET8L, "u-btn2-2-dis")
        } else {
            a6g.w7p(this.ET8L, "u-btn2-2-dis")
        }
    };
    b6f.bOj3x = function(bjw5B) {
        if (bjw5B) {
            a6g.w7p(this.ET8L, "u-btn2-2-dis")
        } else {
            this.bie5j()
        }
    };
    b6f.bOr3x = function(d6d) {
        if (d6d) {
            d6d.stopped = true
        }
        if (this.ceS8K()) {
            l6f.hG0x({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function(W7P) {
                    if (W7P == "ok") {
                        this.z7s("forceclose", {});
                        this.bt7m();
                        h6b.z7s(n6h.pH2x, "shareclose", {})
                    }
                }.f6b(this)
            })
        } else {
            this.z7s("forceclose", {});
            this.bt7m();
            h6b.z7s(n6h.pH2x, "shareclose", {})
        }
    };
    b6f.JJ9A = function(ev9m, dZ8R) {
        this.ps2x.Fj8b(ev9m, dZ8R)
    };
    b6f.baC3x = function(u7n) {
        this.gq9h.eZ9Q("page", {
            type: u7n
        })
    };
    b6f.Jr9i = function() {
        return this.eH9y == 39
    };
    b6f.J7C = function() {
        var ceF8x = function(p6j, r6l) {
            var cm8e = "u-slg-" + em8e[r6l] + "-gray"; ! this.bhJ5O[bAe0x[r6l]] ? a6g.w7p(p6j, cm8e) : a6g.y7r(p6j, cm8e)
        };
        return function() {
            K7D.J7C.call(this);
            this.o6i.style.display = "";
            this.cb7U();
            this.cV8N(!1);
            this.CA7t.Ut2x(0);
            this.eE9v.focus();
            this.eE9v.value = this.cfW8O || "";
            this.eE9v.placeholder = this.cfU8M || "";
            if (!this.Jr9i()) {
                this.ceT8L()
            } else {
                a6g.w7p(this.qW3x, "info-video");
                a6g.dF8x(this.qW3x, "m-xwgt-share-videobar", {
                    title: this.PC0x,
                    picUrl: this.bAt0x
                })
            }
            this.gv9m();
            this.xJ5O.cie9V();
            k6e.be7X(this.bhT5Y, ceF8x, this);
            this.mw2x();
            if (this.Bu7n) {
                this.rU3x.style.display = "none"
            } else {
                this.rU3x.style.display = ""
            }
            this.bie5j()
        }
    } ();
    b6f.bt7m = function(d6d) {
        K7D.bt7m.call(this); !! this.hE0x && this.hE0x.bt7m();
        if (this.xJ5O) {
            this.xJ5O.V7O();
            delete this.xJ5O
        }
        if (this.hQ0x) {
            this.hQ0x.V7O();
            delete this.hQ0x
        }
        if (this.pU3x) {
            this.pU3x.V7O();
            delete this.pU3x
        }
        if (this.bNI3x) {
            this.bNI3x = this.bNI3x.V7O()
        }
        if (this.nj2x) {
            this.nj2x.V7O();
            delete this.nj2x
        }
    };
    l6f.lz1x = function(e6c) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e6c.title === undefined) {
            e6c.title = "分享"
        }
        if (e6c.actId && e6c.type != 39) {
            var u7n = cgb8T[e6c.resourceType],
            bX7Q = e6c.resourceJson,
            iy1x;
            if (k6e.fO9F(bX7Q)) {
                try {
                    bX7Q = JSON.parse(bX7Q)
                } catch(e) {}
            }
            if (u7n) {
                iy1x = l6f.bUu6o(u7n, bX7Q);
                e6c.name = iy1x.title;
                e6c.author = iy1x.author;
                e6c.picUrl = iy1x.picUrl;
                e6c.type = u7n;
                e6c.rid = (bX7Q || []).id
            }
        }
        n6h.pH2x.J7C(e6c)
    };
    H7A.fQ9H.B7u({
        element: n6h.pH2x,
        event: ["sharesuccess", "shareclose"]
    })
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    h6b = c6e("nej.v"),
    a6g = c6e("nej.e"),
    v7o = c6e("nej.j"),
    n6h = c6e("nm.l"),
    x7q = c6e("nm.w"),
    bD7w = c6e("nej.ui"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    b6f,
    K7D;
    n6h.bij5o = NEJ.C();
    b6f = n6h.bij5o.M7F(n6h.ep8h);
    K7D = n6h.bij5o.cu8m;
    b6f.cA8s = function() {
        this.cG8y()
    };
    b6f.bW7P = function() {
        this.ci8a();
        var j6d = a6g.F7y(this.o6i, "j-flag");
        h6b.s6m(j6d[0], "click", this.GD8v.f6b(this))
    };
    b6f.ch7a = function() {
        this.cf7Y = "m-import-ok"
    };
    b6f.bo7h = function(e6c) {
        e6c.parent = e6c.parent || document.body;
        e6c.title = "歌曲同步完成";
        this.bq7j(e6c)
    };
    b6f.bC7v = function() {
        this.bH7A()
    };
    b6f.GD8v = function(d6d) {
        this.bt7m();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b6f.Ea7T = function() {
        this.bt7m()
    };
    b6f.bRo5t = function(d6d) {
        if (d6d.keyCode == 13) this.FZ8R()
    }
})(); (function() {
    var c6e = NEJ.P,
    bc7V = NEJ.O,
    h6b = c6e("nej.v"),
    a6g = c6e("nej.e"),
    v7o = c6e("nej.j"),
    P7I = c6e("nej.p"),
    k6e = c6e("nej.u"),
    n6h = c6e("nm.l"),
    x7q = c6e("nm.w"),
    bD7w = c6e("nej.ui"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    b6f,
    K7D;
    n6h.bNH3x = NEJ.C();
    b6f = n6h.bNH3x.M7F(n6h.ep8h);
    b6f.ch7a = function() {
        this.cf7Y = "m-programtips-layer"
    };
    b6f.bW7P = function() {
        this.ci8a();
        this.bV7O = a6g.F7y(this.o6i, "j-flag")
    };
    b6f.bo7h = function(e6c) {
        if (e6c.inner) {
            var innerNode = a6g.F7y(this.o6i, "wrap-p")[0];
            if (innerNode) {
                innerNode.innerHTML = e6c.inner
            }
        }
        e6c.clazz = " m-layer-programtips " + (e6c.clazz || "");
        e6c.parent = e6c.parent || document.body;
        e6c.title = e6c.title || "付费内容提示";
        e6c.draggable = !0;
        e6c.destroyalbe = !0;
        e6c.mask = true;
        this.bq7j(e6c);
        this.hp0x = e6c.id;
        this.cew8o = e6c.radiotype;
        this.lt1x = location.protocol + "//" + (this.bjE5J() || "music.163.com") + "/m/" + this.cew8o + "?id=" + this.hp0x;
        this.lt1x = e6c.url || this.lt1x;
        this.cev8n()
    };
    b6f.bC7v = function() {
        this.bH7A()
    };
    b6f.Ea7T = function() {
        this.bt7m()
    };
    b6f.GD8v = function(d6d) {
        this.z7s("onok", C7v);
        this.bt7m()
    };
    l6f.Ta1x = function(e6c) {
        n6h.bNH3x.B7u(e6c).J7C()
    };
    b6f.cev8n = function() {
        v7o.bl7e("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k6e.cD8v({
                url: this.lt1x,
                size: 180
            }),
            onload: function(i6c) {
                if (i6c.code == 200) {
                    this.ceu8m(i6c.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.f6b(this)
        })
    };
    b6f.bjE5J = function() {
        var VG2x = location.host;
        if (VG2x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b6f.ceu8m = function(kv1x) {
        this.bV7O[0].style.backgroundImage = "url(" + kv1x + ")"
    }
})(); (function() {
    var c6e = NEJ.P,
    a6g = c6e("nej.e"),
    dC8u = c6e("nej.p"),
    h6b = c6e("nej.v"),
    k6e = c6e("nej.u"),
    H7A = c6e("nej.ut"),
    v7o = c6e("nej.j"),
    q6k = c6e("nm.d"),
    l6f = c6e("nm.x"),
    E7x = c6e("nm.m"),
    n6h = c6e("nm.l"),
    N7G = c6e("nm.m.f"),
    b6f,
    K7D;
    E7x.dk8c = NEJ.C();
    b6f = E7x.dk8c.M7F(H7A.dp8h);
    b6f.bJ7C = function() {
        var rZ3x = !1;
        return function() {
            if (rZ3x) return;
            rZ3x = !0;
            this.bS7L();
            if (top == self) {
                return
            }
            this.ue4i = a6g.A7t("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bND3x()
            }
            H7A.fQ9H.B7u({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bY7R([[window, "scroll", this.Fe8W.f6b(this)], [document, "keyup", this.cep8h.f6b(this)], [document.body, "click", this.tT4X.f6b(this)], [document, "mouseup", this.cej8b.f6b(this)], [this.ue4i, "click", this.QQ1x.f6b(this)], [q6k.tI4M, "message", this.wV5a.f6b(this)]]);
            l6f.cmt9k(document.body);
            this.Fe8W();
            if (this.EZ8R !== false && typeof GUser !== "undefined" && GUser.userId > 0) q6k.tI4M.fP9G().wA5F();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dC8u.dz8r.browser == "ie" && parseInt(dC8u.dz8r.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hu0x = top.player.getPlaying();
                    if (hu0x && hu0x.track && hu0x.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hu0x.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch(e) {}
            window.share = this.BP7I.f6b(this);
            this.kJ1x = q6k.hW0x.B7u();
            window.log = this.hB0x.f6b(this);
            var ui4m = location.search;
            if (ui4m) {
                var bx7q = ui4m.substr(ui4m.indexOf("?") + 1),
                gJ9A = k6e.hd9U(bx7q);
                if (gJ9A && gJ9A["_hash"]) location.hash = gJ9A["_hash"]
            }
        }
    } ();
    b6f.cep8h = function(d6d) {
        var g6a = h6b.Y7R(d6d);
        try {
            if (d6d.keyCode == 80 && l6f.bUC6w() || ["textarea", "input"].indexOf(g6a.tagName.toLowerCase()) >= 0) return;
            h6b.z7s(top.document, "keyup", {
                ctrlKey: d6d.ctrlKey,
                keyCode: d6d.keyCode
            })
        } catch(e) {}
    };
    b6f.tT4X = function(d6d) {
        var g6a = h6b.Y7R(d6d);
        if (g6a && g6a.tagName == "INPUT") return;
        var g6a = h6b.Y7R(d6d, "d:pid");
        if (g6a) {
            h6b.cr8j(d6d);
            var oy2x = a6g.t7m(g6a, "pid"),
            EW8O = a6g.t7m(g6a, "ptype"),
            W7P = a6g.t7m(g6a, "action") || "play";
            switch (W7P) {
            case "subscribe":
                l6f.nP2x({
                    tracks:
                    [oy2x]
                });
                break
            }
        }
        g6a = h6b.Y7R(d6d, "d:resAction");
        if (g6a && g6a.className.indexOf("-dis") == -1) {
            var cY8Q = a6g.t7m(g6a, "resId"),
            u7n = a6g.t7m(g6a, "resType"),
            bkb6V = a6g.t7m(g6a, "resRadiotype"),
            bkc6W = a6g.t7m(g6a, "resRadioid"),
            el8d = a6g.t7m(g6a, "resFrom"),
            i6c = a6g.t7m(g6a, "resData"),
            W7P = a6g.t7m(g6a, "resAction"),
            bui9Z = a6g.t7m(g6a, "resCopyright"),
            bhU5Z = a6g.t7m(g6a, "resAuditstatus");
            if (W7P != "log" && W7P != "bilog") h6b.cr8j(d6d);
            switch (W7P) {
            case "log":
                i6c = (i6c || "").split("|");
                if ( !! i6c[0]) {
                    var bk7d = {
                        id: cY8Q,
                        alg: i6c[2] || "itembased",
                        scene: i6c[3],
                        position: i6c[1] || 0
                    };
                    if ( !! i6c[4]) bk7d.srcid = i6c[4];
                    window.log(i6c[0], bk7d)
                }
                break;
            case "bilog":
                var btV9M = a6g.t7m(g6a, "logAction"),
                btY9P = a6g.t7m(g6a, "logJson");
                window.log(btV9M, btY9P);
                break;
            case "share":
                if (bhU5Z && bhU5Z == 1) {
                    l6f.iU1x("由于版权问题，该节目暂时无法分享。")
                } else {
                    share(cY8Q, u7n, a6g.t7m(g6a, "resPic"), a6g.t7m(g6a, "resName"), a6g.t7m(g6a, "resAuthor"), a6g.t7m(g6a, "resAuthors"))
                }
                break;
            case "fav":
            case "subscribe":
                if (u7n == 18) {
                    var rj3x = a6g.t7m(g6a, "resLevel"),
                    oQ2x = a6g.t7m(g6a, "resFee");
                    if (rj3x == 10) {
                        l6f.wS5X(oQ2x, cY8Q, "song");
                        break
                    }
                    l6f.nP2x({
                        tracks: [cY8Q]
                    })
                }
                break;
            case "download":
                l6f.Oi0x({
                    id:
                    cY8Q,
                    type: u7n
                });
                break;
            case "programtips":
                if (bhU5Z && bhU5Z == 1) {
                    l6f.iU1x("由于版权问题，该节目暂时无法分享。")
                } else {
                    l6f.Ta1x({
                        id: bkc6W,
                        radiotype: bkb6V
                    })
                }
                break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d6d)
        } catch(e) {}
    };
    b6f.cej8b = function(d6d) {
        try {
            h6b.z7s(top.document, "mouseup")
        } catch(e) {}
    };
    b6f.Fe8W = function() {
        var cei8a = function() {
            var ca7T = window.innerHeight;
            if (!k6e.uE4I(ca7T)) ca7T = (document.documentElement || document.body).clientHeight;
            return ca7T
        };
        return function(d6d) {
            if (!this.ue4i) return;
            var bhS5X = cei8a(),
            gr9i = document.documentElement.scrollTop || document.body.scrollTop;
            a6g.bb7U(this.ue4i, "display", gr9i > 0 ? "": "none");
            if (dC8u.dz8r.browser == "ie" && dC8u.dz8r.version < "7.0") {
                var gL9C = Math.min(document.body.clientHeight, bhS5X + gr9i) - 204;
                a6g.bb7U(this.ue4i, "top", gL9C + "px")
            }
        }
    } ();
    b6f.QQ1x = function(d6d) {
        h6b.cr8j(d6d);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b6f.BP7I = function() {
        var bkg6a = function(d6d) {
            h6b.z7s(window, "share", d6d)
        };
        return function(cY8Q, u7n, BJ7C, X7Q, Jn9e, Jm9d) {
            l6f.lz1x({
                rid: cY8Q,
                type: u7n,
                purl: BJ7C,
                name: X7Q,
                author: Jn9e,
                authors: Jm9d,
                onshare: bkg6a.f6b(this)
            })
        }
    } ();
    b6f.hB0x = function(W7P, bk7d) {
        try {
            top.log(W7P, bk7d)
        } catch(e) {
            if (W7P.indexOf("new|") == 0) {
                return this.kJ1x.eZ9Q(W7P.slice(4), bk7d)
            }
            switch (W7P) {
            case "play":
                this.kJ1x.ew9n(bk7d);
                break;
            case "search":
                this.kJ1x.bWL6F(bk7d);
                break;
            default:
                this.kJ1x.eZ9Q(W7P, bk7d)
            }
        }
    };
    b6f.bND3x = function() {
        var bhO5T, bkl6f = false,
        bw7p = [45, 60];
        var ceg8Y = function(bF7y) {
            if (bF7y.title != "MailBoxImport") return;
            var Q7J = JSON.parse(bF7y.content || "null") || bc7V;
            if (Q7J.status == 10) {
                n6h.bij5o.B7u().J7C();
                window.clearTimeout(bhO5T)
            }
        };
        var oO2x = function(d6d) {
            if (d6d.code == 200) {
                if (d6d.status == 1) {
                    h6b.s6m(q6k.CN7G, "message", ceg8Y.f6b(this));
                    q6k.CN7G.B7u().bwd9U();
                    bkl6f = true
                } else {
                    if (bkl6f) {
                        if (d6d.status == 10) {
                            n6h.bij5o.B7u().J7C();
                            h6b.ht0x(q6k.CN7G, "message");
                            window.clearTimeout(bhO5T);
                            bkl6f = false
                        }
                    } else {
                        window.clearTimeout(bhO5T)
                    }
                }
            }
        };
        return function() {
            var uF4J = bw7p.shift() * 1e3;
            v7o.bl7e("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: oO2x.f6b(this)
            });
            if (uF4J) {
                bhO5T = window.setTimeout(arguments.callee, uF4J)
            }
        }
    } ();
    b6f.wV5a = function(d6d) {
        try {
            top.polling(d6d)
        } catch(e) {}
    }
})()