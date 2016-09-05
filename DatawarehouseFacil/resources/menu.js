function calculateScrollingDirection(e) {
    return newScrollPosition = $(this).scrollTop(), 0 != e ? (scrollDifferential = e - newScrollPosition, scrollDirection = scrollDifferential > 0 ? "up" : "down") : scrollDirection = "down", [scrollDirection, newScrollPosition]
}

function calculateColorChangePoints(e) {
    colorChangeUp = new Array, colorChangeDown = new Array, e.each(function() {
        id = $(this).attr("id"), itemHeight = $(this).hasClass("fa") ? parseInt($(this).css("font-size")) : $(this).height(), itemOffset = parseInt("auto" == $(this).css("top") ? $(this).parent().css("top") : $(this).css("top")), colorChangeUp[id] = itemOffset, colorChangeDown[id] = itemOffset + itemHeight
    });
    var n = new Array;
    return n.up = colorChangeUp, n.down = colorChangeDown, n
}

function changeColor(e, n, t, r, s, o, a, l) {
    e.each("down" == n ? function() {
        id = $(this).attr("id"), $(this).css(t > r - s[id] ? $(this).hasClass("background") ? {
            "background-color": a
        } : {
            color: a
        } : $(this).hasClass("background") ? {
            "background-color": l
        } : {
            color: l
        })
    } : function() {
        id = $(this).attr("id"), $(this).css(t > r - o[id] ? $(this).hasClass("background") ? {
            "background-color": a
        } : {
            color: a
        } : $(this).hasClass("background") ? {
            "background-color": l
        } : {
            color: l
        })
    })
}

! function(e, n, t) {
        e.fn.scrollUp = function(n) {
            e.data(t.body, "scrollUp") || (e.data(t.body, "scrollUp", !0), e.fn.scrollUp.init(n))
        }, e.fn.scrollUp.init = function(r) {
            var s = e.fn.scrollUp.settings = e.extend({}, e.fn.scrollUp.defaults, r),
                o = s.scrollTitle ? s.scrollTitle : s.scrollText,
                a = e("<a/>", {
                    id: s.scrollName,
                    href: "#top",
                    title: o
                }).appendTo("body");
            s.scrollImg || a.html(s.scrollText), a.css({
                display: "none",
                position: "fixed",
                zIndex: s.zIndex
            }), s.activeOverlay && e("<div/>", {
                id: s.scrollName + "-active"
            }).css({
                position: "absolute",
                top: s.scrollDistance + "px",
                width: "100%",
                borderTop: "1px dotted" + s.activeOverlay,
                zIndex: s.zIndex
            }).appendTo("body"), scrollEvent = e(n).scroll(function() {
                switch (scrollDis = "top" === s.scrollFrom ? s.scrollDistance : e(t).height() - e(n).height() - s.scrollDistance, s.animation) {
                    case "fade":
                        e(e(n).scrollTop() > scrollDis ? a.fadeIn(s.animationInSpeed) : a.fadeOut(s.animationOutSpeed));
                        break;
                    case "slide":
                        e(e(n).scrollTop() > scrollDis ? a.slideDown(s.animationInSpeed) : a.slideUp(s.animationOutSpeed));
                        break;
                    default:
                        e(e(n).scrollTop() > scrollDis ? a.show(0) : a.hide(0))
                }
            }), a.click(function(n) {
                n.preventDefault(), e("html, body").animate({
                    scrollTop: 0
                }, s.scrollSpeed, s.easingType)
            })
        }, e.fn.scrollUp.defaults = {
            scrollName: "scrollUp",
            scrollDistance: 300,
            scrollFrom: "top",
            scrollSpeed: 300,
            easingType: "linear",
            animation: "fade",
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: "Scroll to top",
            scrollTitle: !1,
            scrollImg: !1,
            activeOverlay: !1,
            zIndex: 2147483647
        }, e.fn.scrollUp.destroy = function(r) {
            e.removeData(t.body, "scrollUp"), e("#" + e.fn.scrollUp.settings.scrollName).remove(), e("#" + e.fn.scrollUp.settings.scrollName + "-active").remove(), e.fn.jquery.split(".")[1] >= 7 ? e(n).off("scroll", r) : e(n).unbind("scroll", r)
        }, e.scrollUp = e.fn.scrollUp
    }(jQuery, window, document);
var IN_GLOBAL_SCOPE = !0;
window.PR_SHOULD_USE_CONTINUATION = !0;

$(document).ready(function() {
    function e() {
        $(".navLinks").slideToggle($(".navLinks").is(":visible") ? 300 : 300)
    }

    function n(e) {
        e.toggleClass("open closed")
    }
    $(".iconBars").on("click", function(t) {
        t.preventDefault(), e(), n($(this))
    })
}), 

$(function() {
    $.scrollUp({
        scrollDistance: 400,
        animationInSpeed: 400,
        animationOutSpeed: 400,
        scrollSpeed: 700,
        scrollText: "<i class='fa fa-chevron-up'></i>"
    })
}), 

$(window).load(function() {
    var e = $(this).scrollTop(),
        n = $("#anchor-point").offset().top,
        t = $(".jumbotron1").css("background-color"),
        r = "#fff";
    elements = $(".colorChange");
    var s = calculateColorChangePoints(elements),
        o = s.down,
        a = s.up;
    changeColor(elements, "down", e, n, o, a, t, r), $(document).scroll(function() {
        results = calculateScrollingDirection(e), scrollDirection = results[0], e = results[1], changeColor(elements, scrollDirection, e, n, o, a, t, r)
    }), window.onresize = function() {
        $("#anchor-point").offset().top != n && (s = calculateColorChangePoints(elements), o = s.down, a = s.up), n = $("#anchor-point").offset().top
    }
});