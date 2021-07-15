 // 找到解析函数，t及为加密源码，观察代码，发现s和a.a.decode函数是该函数需要的，下一步需要找s,a.a.decode函数
function o(t) {
            return s("5e5062e82f15fe4ca9d24bc5", decode(t), 0, 0, "012345677890123", 1)
}

//选中，a.a.decode, 找到函数a.a.decode，通过观察我们只需要里面的a里面的decode函数，为了方便代码调用，重新命名函数
function decode(t) {
    // 执行js代码，报错未声明变量f，找到f继续断点查看f，刷新网页，发现f是一串字符，声明该变量
    var f = "/[\\t\\n\\f\\r ]/g"

    // 执行js代码，发现c也没有被声明，重复上述步骤
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    var e = (t = String(t).replace(f, "")).length;
    e % 4 == 0 && (e = (t = t.replace(/==?$/, "")).length),
    (e % 4 == 1 || /[^+a-zA-Z0-9/]/.test(t)) && l("Invalid character: the string to be decoded is not correctly encoded.");
    for (var n, r, i = 0, o = "", a = -1; ++a < e; )
        r = c.indexOf(t.charAt(a)),
        n = i % 4 ? 64 * n + r : r,
        i++ % 4 && (o += String.fromCharCode(255 & n >> (-2 * i & 6)));
    return o
}

//选中s函数，找到s函数所在的js文件
function s(t, e, i, n, a, s) {
    var o, r, c, l, u, d, h, p, f, v, m, g, b, y, _ = new Array(16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756), C = new Array(-2146402272,-2147450880,32768,1081376,1048576,32,-2146435040,-2147450848,-2147483616,-2146402272,-2146402304,-2147483648,-2147450880,1048576,32,-2146435040,1081344,1048608,-2147450848,0,-2147483648,32768,1081376,-2146435072,1048608,-2147483616,0,1081344,32800,-2146402304,-2146435072,32800,0,1081376,-2146435040,1048576,-2147450848,-2146435072,-2146402304,32768,-2146435072,-2147450880,32,-2146402272,1081376,32,32768,-2147483648,32800,-2146402304,1048576,-2147483616,1048608,-2147450848,-2147483616,1048608,1081344,0,-2147450880,32800,-2147483648,-2146435040,-2146402272,1081344), w = new Array(520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584), x = new Array(8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928), k = new Array(256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080), T = new Array(536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312), A = new Array(2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154), L = new Array(268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696), S = function(t) {
        for (var e, i, n, a = new Array(0,4,536870912,536870916,65536,65540,536936448,536936452,512,516,536871424,536871428,66048,66052,536936960,536936964), s = new Array(0,1,1048576,1048577,67108864,67108865,68157440,68157441,256,257,1048832,1048833,67109120,67109121,68157696,68157697), o = new Array(0,8,2048,2056,16777216,16777224,16779264,16779272,0,8,2048,2056,16777216,16777224,16779264,16779272), r = new Array(0,2097152,134217728,136314880,8192,2105344,134225920,136323072,131072,2228224,134348800,136445952,139264,2236416,134356992,136454144), c = new Array(0,262144,16,262160,0,262144,16,262160,4096,266240,4112,266256,4096,266240,4112,266256), l = new Array(0,1024,32,1056,0,1024,32,1056,33554432,33555456,33554464,33555488,33554432,33555456,33554464,33555488), u = new Array(0,268435456,524288,268959744,2,268435458,524290,268959746,0,268435456,524288,268959744,2,268435458,524290,268959746), d = new Array(0,65536,2048,67584,536870912,536936448,536872960,536938496,131072,196608,133120,198656,537001984,537067520,537004032,537069568), h = new Array(0,262144,0,262144,2,262146,2,262146,33554432,33816576,33554432,33816576,33554434,33816578,33554434,33816578), p = new Array(0,268435456,8,268435464,0,268435456,8,268435464,1024,268436480,1032,268436488,1024,268436480,1032,268436488), f = new Array(0,32,0,32,1048576,1048608,1048576,1048608,8192,8224,8192,8224,1056768,1056800,1056768,1056800), v = new Array(0,16777216,512,16777728,2097152,18874368,2097664,18874880,67108864,83886080,67109376,83886592,69206016,85983232,69206528,85983744), m = new Array(0,4096,134217728,134221824,524288,528384,134742016,134746112,16,4112,134217744,134221840,524304,528400,134742032,134746128), g = new Array(0,4,256,260,0,4,256,260,1,5,257,261,1,5,257,261), b = t.length > 8 ? 3 : 1, y = new Array(32 * b), _ = new Array(0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0), C = 0, w = 0, x = 0; x < b; x++) {
            var k = t.charCodeAt(C++) << 24 | t.charCodeAt(C++) << 16 | t.charCodeAt(C++) << 8 | t.charCodeAt(C++)
              , T = t.charCodeAt(C++) << 24 | t.charCodeAt(C++) << 16 | t.charCodeAt(C++) << 8 | t.charCodeAt(C++);
            k ^= (n = 252645135 & (k >>> 4 ^ T)) << 4,
            k ^= n = 65535 & ((T ^= n) >>> -16 ^ k),
            k ^= (n = 858993459 & (k >>> 2 ^ (T ^= n << -16))) << 2,
            k ^= n = 65535 & ((T ^= n) >>> -16 ^ k),
            k ^= (n = 1431655765 & (k >>> 1 ^ (T ^= n << -16))) << 1,
            k ^= n = 16711935 & ((T ^= n) >>> 8 ^ k),
            n = (k ^= (n = 1431655765 & (k >>> 1 ^ (T ^= n << 8))) << 1) << 8 | (T ^= n) >>> 20 & 240,
            k = T << 24 | T << 8 & 16711680 | T >>> 8 & 65280 | T >>> 24 & 240,
            T = n;
            for (var A = 0; A < _.length; A++)
                _[A] ? (k = k << 2 | k >>> 26,
                T = T << 2 | T >>> 26) : (k = k << 1 | k >>> 27,
                T = T << 1 | T >>> 27),
                T &= -15,
                e = a[(k &= -15) >>> 28] | s[k >>> 24 & 15] | o[k >>> 20 & 15] | r[k >>> 16 & 15] | c[k >>> 12 & 15] | l[k >>> 8 & 15] | u[k >>> 4 & 15],
                i = d[T >>> 28] | h[T >>> 24 & 15] | p[T >>> 20 & 15] | f[T >>> 16 & 15] | v[T >>> 12 & 15] | m[T >>> 8 & 15] | g[T >>> 4 & 15],
                n = 65535 & (i >>> 16 ^ e),
                y[w++] = e ^ n,
                y[w++] = i ^ n << 16
        }
        return y
    }(t), F = 0, z = e.length, B = 0, I = 32 == S.length ? 3 : 9;
    p = 3 == I ? i ? new Array(0,32,2) : new Array(30,-2,-2) : i ? new Array(0,32,2,62,30,-2,64,96,2) : new Array(94,62,-2,32,64,2,30,-2,-2),
    2 == s ? e += "        " : 1 == s ? i && (c = 8 - z % 8,
    e += String.fromCharCode(c, c, c, c, c, c, c, c),
    8 === c && (z += 8)) : s || (e += "\0\0\0\0\0\0\0\0");
    var j = ""
      , O = "";
    for (1 == n && (f = a.charCodeAt(F++) << 24 | a.charCodeAt(F++) << 16 | a.charCodeAt(F++) << 8 | a.charCodeAt(F++),
    m = a.charCodeAt(F++) << 24 | a.charCodeAt(F++) << 16 | a.charCodeAt(F++) << 8 | a.charCodeAt(F++),
    F = 0); F < z; ) {
        for (d = e.charCodeAt(F++) << 24 | e.charCodeAt(F++) << 16 | e.charCodeAt(F++) << 8 | e.charCodeAt(F++),
        h = e.charCodeAt(F++) << 24 | e.charCodeAt(F++) << 16 | e.charCodeAt(F++) << 8 | e.charCodeAt(F++),
        1 == n && (i ? (d ^= f,
        h ^= m) : (v = f,
        g = m,
        f = d,
        m = h)),
        d ^= (c = 252645135 & (d >>> 4 ^ h)) << 4,
        d ^= (c = 65535 & (d >>> 16 ^ (h ^= c))) << 16,
        d ^= c = 858993459 & ((h ^= c) >>> 2 ^ d),
        d ^= c = 16711935 & ((h ^= c << 2) >>> 8 ^ d),
        d = (d ^= (c = 1431655765 & (d >>> 1 ^ (h ^= c << 8))) << 1) << 1 | d >>> 31,
        h = (h ^= c) << 1 | h >>> 31,
        r = 0; r < I; r += 3) {
            for (b = p[r + 1],
            y = p[r + 2],
            o = p[r]; o != b; o += y)
                l = h ^ S[o],
                u = (h >>> 4 | h << 28) ^ S[o + 1],
                c = d,
                d = h,
                h = c ^ (C[l >>> 24 & 63] | x[l >>> 16 & 63] | T[l >>> 8 & 63] | L[63 & l] | _[u >>> 24 & 63] | w[u >>> 16 & 63] | k[u >>> 8 & 63] | A[63 & u]);
            c = d,
            d = h,
            h = c
        }
        h = h >>> 1 | h << 31,
        h ^= c = 1431655765 & ((d = d >>> 1 | d << 31) >>> 1 ^ h),
        h ^= (c = 16711935 & (h >>> 8 ^ (d ^= c << 1))) << 8,
        h ^= (c = 858993459 & (h >>> 2 ^ (d ^= c))) << 2,
        h ^= c = 65535 & ((d ^= c) >>> 16 ^ h),
        h ^= c = 252645135 & ((d ^= c << 16) >>> 4 ^ h),
        d ^= c << 4,
        1 == n && (i ? (f = d,
        m = h) : (d ^= v,
        h ^= g)),
        O += String.fromCharCode(d >>> 24, d >>> 16 & 255, d >>> 8 & 255, 255 & d, h >>> 24, h >>> 16 & 255, h >>> 8 & 255, 255 & h),
        512 == (B += 8) && (j += O,
        O = "",
        B = 0)
    }
    if (j = (j += O).replace(/\0*$/g, ""),
    !i) {
        if (1 === s) {
            var $ = 0;
            (z = j.length) && ($ = j.charCodeAt(z - 1)),
            $ <= 8 && (j = j.substring(0, z - $))
        }
        j = decodeURIComponent(escape(j))
    }
    return j
}