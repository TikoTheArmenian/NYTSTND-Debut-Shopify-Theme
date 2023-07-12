addDefaultCSS("https://bannerbeaver.herokuapp.com/ppp_assets/style.css");
var appearanceData,
    featureData,
    elem_ppb = document.getElementById("product-pages-banners"),
    url = window.location.href,
    script_name = document.currentScript.src,
    handle = url.split("/")[4],
    shop_name = "nytstnd.myshopify.com";
function addDefaultCSS(e) {
    var t = document.getElementsByTagName("head")[0],
        n = document.createElement("link");
    (n.rel = "stylesheet"), (n.type = "text/css"), (n.href = e), t.appendChild(n);
}
//ifSnippetNotInstalled2();
var correctNode = null;
function ifSnippetNotInstalled2() {
    if (null == elem_ppb) {
        var e = document.querySelectorAll("button[type=submit]");
        for (i = 0; i < e.length; i++)
            if (e[i].name.includes("add") || "add-to-cart" == e[i].getAttribute("data-action") || null != e[i].getAttribute("data-product-atc")) {
                correctNode = i;
                break;
            }
        (cartnode = div = document.createElement("div")), div.setAttribute("id", "product-pages-banners"), e[correctNode].parentNode.insertBefore(div, e[correctNode]), (elem_ppb = document.getElementById("product-pages-banners"));
    }
}
function appendDesignDivToAppDiv(e) {
      elem_ppb = document.getElementById("product-pages-banners")
    if (
        ((css = `margin-top:${e.banner_margin_top}px;margin-bottom:${e.banner_margin_bottom}px`),
        (cssbanner = `background-color:${e.bg_color};padding:${e.banner_padding}px 12px;border-radius:${e.border_radius}px;`),
        elem_ppb.setAttribute("style", css),
        (createDesignDiv = document.createElement("div")),
        (createDesignDiv.className = "pretty-banner-div"),
        createDesignDiv.setAttribute("style", cssbanner),
        "" != e.link &&
            createDesignDiv.addEventListener(
                "click",
                function () {
                    location.href = e.link;
                },
                !1
            ),
        1 == e.has_shadow && ((cssbanner += "box-shadow:0px 3px 8px rgba(0,0,0,0.24);"), createDesignDiv.setAttribute("style", cssbanner)),
        1 == e.has_gradient)
    ) {
        (rgbaColor = hexToRgbA(e.bg_color)), (newcolor = hexToComplimentary(e.bg_color)), (newcolorToRgba = hexToRgbA(newcolor)), (newRgba = rgbaColor.replace("1)", "0.65)"));
        var t = "background-image:linear-gradient(" + rgbaColor + ", " + newcolorToRgba + ");";
        (cssbanner = cssbanner.split(/;(.+)/)[1]), (cssbanner += t), createDesignDiv.setAttribute("style", cssbanner);
    }
    1 == e.number_of_icons && ((cssbanner += "justify-content:start"), createDesignDiv.setAttribute("style", cssbanner)),
        "no_icon" == e.icon_type && ((cssbanner += "justify-content:center"), createDesignDiv.setAttribute("style", cssbanner)),
        null != elem_ppb ? elem_ppb.appendChild(createDesignDiv) : console.log("PPP not installed");
};
function hexToRgbA(e) {
    var t;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)) return 3 == (t = e.substring(1).split("")).length && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]), "rgba(" + [((t = "0x" + t.join("")) >> 16) & 255, (t >> 8) & 255, 255 & t].join(",") + ",1)";
    throw new Error("Bad Hex");
}
function hexToComplimentary(e) {
    var t =
            "rgb(" +
            (e = e.replace("#", ""))
                .match(new RegExp("(.{" + e.length / 3 + "})", "g"))
                .map(function (t) {
                    return parseInt(e.length % 2 ? t + t : t, 16);
                })
                .join(",") +
            ")",
        n = (t = t.replace(/[^\d,]/g, "").split(","))[0],
        i = t[1],
        r = t[2];
    (n /= 255), (i /= 255), (r /= 255);
    var a,
        s,
        o = Math.max(n, i, r),
        l = Math.min(n, i, r),
        c = (o + l) / 2;
    if (o == l) a = s = 0;
    else {
        var p = o - l;
        (s = c > 0.5 ? p / (2 - o - l) : p / (o + l)),
            o == n && i >= r ? (a = (1.0472 * (i - r)) / p) : o == n && i < r ? (a = (1.0472 * (i - r)) / p + 6.2832) : o == i ? (a = (1.0472 * (r - n)) / p + 2.0944) : o == r && (a = (1.0472 * (n - i)) / p + 4.1888);
    }
    if (((a = (a / 6.2832) * 360 + 0), (a += 30) > 360 && (a -= 360), (a /= 360), 0 === s)) n = i = r = c;
    else {
        var d = function (e, t, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
            },
            b = c < 0.5 ? c * (1 + s) : c + s - c * s,
            g = 2 * c - b;
        (n = d(g, b, a + 1 / 3)), (i = d(g, b, a)), (r = d(g, b, a - 1 / 3));
    }
    return (n = Math.round(255 * n)), (i = Math.round(255 * i)), "#" + (16777216 | (t = (r = Math.round(255 * r)) | (i << 8) | (n << 16))).toString(16).substring(1);
}
setTimeout(
fetch(`https://bannerbeaver.herokuapp.com/front_end/index?shop=${shop_name}&handle=${handle}`).then(async (e) => {
    try {
        (await e.json()).forEach(function (e, t) {
            "no_icon" == e.icon_type
                ? (appendDesignDivToAppDiv(e),
                  (nthChild = "nth-child(" + (t + 1) + ")"),
                  document
                      .querySelector(".pretty-banner-div:" + nthChild)
                      .insertAdjacentHTML(
                          "afterbegin",
                          "<div class=pretty-banner-text-div><p class=pretty-banner-title style=text-align:center;color:" +
                              e.title_color +
                              ";font-size:" +
                              e.title_size +
                              "px;font-weight:" +
                              e.font_weight +
                              ">" +
                              e.title +
                              "</p><p class=pretty-banner-subtitle style=text-align:center;color:" +
                              e.subtitle_color +
                              ";font-size:" +
                              e.subtitle_size +
                              "px>" +
                              e.subtitle +
                              "</p></div>"
                      ))
                : 2 == e.number_of_icons
                ? (appendDesignDivToAppDiv(e),
                  (nthChild = "nth-child(" + (t + 1) + ")"),
                  document
                      .querySelector(".pretty-banner-div:" + nthChild)
                      .insertAdjacentHTML(
                          "afterbegin",
                          "<div class=pretty-banner-img-div style=width:" +
                              e.icon_size +
                              "px;height:" +
                              e.icon_size +
                              "px;><img class=pretty-banner-img src=" +
                              e.main_image +
                              "></div><div class=pretty-banner-text-div><p class=pretty-banner-title style=color:" +
                              e.title_color +
                              ";font-size:" +
                              e.title_size +
                              "px;font-weight:" +
                              e.font_weight +
                              ">" +
                              e.title +
                              "</p><p class=pretty-banner-subtitle style=color:" +
                              e.subtitle_color +
                              ";font-size:" +
                              e.subtitle_size +
                              "px>" +
                              e.subtitle +
                              "</p></div><div class=pretty-banner-img-div style=width:" +
                              e.icon_size +
                              "px;height:" +
                              e.icon_size +
                              "px;><img class=pretty-banner-img src=" +
                              e.main_image +
                              "></div>"
                      ))
                : (appendDesignDivToAppDiv(e),
                  (nthChild = "nth-child(" + (t + 1) + ")"),
                  document
                      .querySelector(".pretty-banner-div:" + nthChild)
                      .insertAdjacentHTML(
                          "afterbegin",
                          "<div class=pretty-banner-img-div style=width:" +
                              e.icon_size +
                              "px;height:" +
                              e.icon_size +
                              "px;><img class=pretty-banner-img src=" +
                              e.main_image +
                              "></div><div class=pretty-banner-text-div><p class=pretty-banner-title style=text-align:left;color:" +
                              e.title_color +
                              ";font-size:" +
                              e.title_size +
                              "px;font-weight:" +
                              e.font_weight +
                              ">" +
                              e.title +
                              "</p><p class=pretty-banner-subtitle style=text-align:left;color:" +
                              e.subtitle_color +
                              ";font-size:" +
                              e.subtitle_size +
                              "px>" +
                              e.subtitle +
                              "</p></div>"
                      ));
        });
    } catch (e) {
        console.log(e);
    }
}),3000);
