/*Portfolio filter*/
function smoothShow() {
    jQuery(".counter-value").each(function() {
        if (jQuery(window).width() > 700) {
            var e = jQuery(this).visible(false);
            if (jQuery(this).hasClass("anim")) {} else if (e) {
                jQuery(this).addClass("anim");
                var t = parseInt(jQuery(this).attr("data-from"));
                var n = parseInt(jQuery(this).attr("data-to"));
                var r = parseInt(jQuery(this).attr("data-speed"));
                jQuery(this).count(t, n, r)
            }
        } else {
            var n = parseInt(jQuery(this).attr("data-to"));
            jQuery(this).html(n)
        }
    });
    jQuery(".sr-animation").each(function() {
        if (jQuery(window).width() > 700) {
            var e = jQuery(this).visible(true);
            var t = jQuery(this).attr("data-delay");
            if (!t) {
                t = 0
            }
            if (jQuery(this).hasClass("animated")) {} else if (e) {
                jQuery(this).delay(t).queue(function() {
                    jQuery(this).addClass("animated")
                })
            }
        } else {
            jQuery(this).addClass("animated")
        }
    });
    jQuery(".skill").each(function() {
        var e = jQuery(this).visible(true);
        var t = jQuery(this).find(".skill-bar .skill-active ").attr("data-perc");
        if (jQuery(this).hasClass("anim")) {} else if (e) {
            var n = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
            jQuery(this).addClass("anim");
            jQuery(this).find(".skill-bar .skill-active ").animate({
                width: t + "%"
            }, 2e3, "easeInOutQuart", function() {
                jQuery(this).find(".tooltip").delay(n).animate({
                    top: "-28px",
                    opacity: 1
                }, 500)
            }).css("overflow", "visible")
        }
    })
}

function flexInit(e) {
    if (jQuery().flexslider) {
        jQuery(e + " .flexslider").flexslider({
            animation: "slide",
            slideshowSpeed: 7e3,
            animationDuration: 1e3,
            slideshow: false,
            directionNav: false,
            controlNav: true,
            smoothHeight: true,
            touch: true,
            video: true,
            randomize: false
        })
    }
}

jQuery(window).load(function(e) {
    function i() {
        var e = jQuery("#menu-responsive").width() + 10;
        jQuery("#menu-responsive").animate({
            right: "-" + e + "px"
        }, 800, "easeInOutQuart")
    }
    jQuery("#page-loader .page-loader-inner").delay(1e3).fadeOut(500, function() {
        jQuery("#page-loader").fadeOut(500)
    });
    flexInit("body");
    if (jQuery().isotope) {
        jQuery(".masonry").each(function() {
            var e = jQuery(this);
            e.imagesLoaded(function() {
                e.isotope({
                    itemSelector: ".masonry-item",
                    transformsEnabled: true
                })
            })
        });
        jQuery(".filter li a").click(function() {
            var e = jQuery(this).parents("ul.filter").data("related-grid");
            jQuery(this).parents("ul.filter").find("li a").removeClass("active");
            jQuery(this).addClass("active");
            var t = jQuery(this).attr("data-option-value");
            jQuery("#" + e).isotope({
                filter: t
            }, function() {});
            return false
        });

        function t() {
            jQuery(".masonry.portfolio-entries").each(function() {
                $container = jQuery(this);
                var e = $container.data("maxitemwidth");
                if (!e) {
                    e = 370
                }
                var t = $container.width();
                var t = t / 110 * 100;
                var n = parseInt($container.children("div").css("marginRight"));
                var r = Math.ceil(t / e);
                var i = (r - 1) * n;
                var s = i / r;
                var o = Math.floor(t / r - s + 1);
                $container.css({
                    width: "110%"
                });
                $container.children("div").css({
                    width: o + "px"
                });
                if ($container.children("div").hasClass("isotope-item")) {
                    $container.isotope("reLayout")
                }
            })
        }
        t();
        jQuery(window).resize(function() {
            t()
        })
    }
    
    smoothShow()
});
jQuery(window).scroll(function() {
    smoothShow()
})


/*Zoom portfolio-item*/
$(function(){

    var zoomedItem = $("#zoomed-item");
    var zoomBody = $("#zoom-body");
    
    $(".load-content").click(function (e) {
        var image = $(this).children(); /*Находим изображение, которое нужно увеичить*/
        var src = image.attr("src"); /*Берем его атрибуты*/

        zoomBody.empty(); /*Очищаем тело модального окна*/
        zoomBody.append("<img src='" + src + "'class= 'img-responsive'/>"); /*Вставляем изображение в модальное окно*/

        src = null; /*Обнуляем переменную*/
    });

});