// console.log("wheel");
var menu_btn = document.getElementsByClassName("menu_btn");
menu_btn.item(0).addEventListener('click', menu_clicked);
function menu_clicked() {
    console.log('menu btn clicked');
    $(function () {
        $(".nav1").css({
            "display": "block"
        });
        $(".nav2").css({
            "display": "none"
        });
        $(".lang_nav_box").css({
            "display": "none"
        });
        $(".back_btn").css({
            "visibility": "hidden"
        });
        $(".lang").css({
            "display": "flex"
        });
        // var fp_viewing = $('body').attr('class');
        // var fullpage_transform_matrix = $('#fullpage').css('transform');
        // var fullpage_transform_y = fullpage_transform_matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
        // var overlay=document.getElementById('blur_overlay').className
        // var overlayarr=overlay.split(' ');
        // console.log(overlayarr.length);
    })

}

// addEventListener("mousewheel", function (e) {
//     var direction = e.deltaY > 0 ? "Scroll Down" : "Scroll Up";;

//     console.log(direction);
// });

document.getElementById("more").addEventListener('click', more_clicked);
function more_clicked() {
    $(function () {
        $(".nav1").css({
            "display": "none"
        });
        $(".nav2").css({
            "display": "block"
        });
        $(".back_btn").css({
            "visibility": "visible"
        });
        $(".lang").css({
            "display": "flex"
        });
    })
}

var back_btn = document.getElementsByClassName("back_btn");
back_btn.item(0).addEventListener('click', back_btn_clicked);
function back_btn_clicked() {
    console.log('backBtn eventlistener on');
    $(function () {
        $(".nav1").css({
            "display": "block"
        });
        $(".nav2").css({
            "display": "none"
        });
        $(".back_btn").css({
            "visibility": "hidden"
        });
        $(".lang").css({
            "display": "flex"
        });
        $(".lang_nav_box").css({
            "display": "none"
        });
    })
}
var background_width 
var background_height
var background_x
var background_y
var mouse_over_switch1=0;
var timer;
$(document).ready(
    function () {
        $(".header_nav_btn").mouseenter(
            function () {
                clearTimeout(timer);
                if (mouse_over_switch1 == 0) {
                    background_width = $(this).outerWidth();
                    background_height = $(this).outerHeight();
                    background_x = $(this).offset().left;
                    background_y = $(this).offset().top;
                    $("#header_background").css({
                        "background-color": "rgba(0, 0, 0, 0.08)",
                        "width": background_width + "px",
                        "height": background_height + "px",
                        "left": background_x + "px",
                        "top": background_y + "px",
                        "border-radius": "3px",
                        "transition": "0ms",
                        "z-index": "-1"
                    });
                    mouse_over_switch1=1;
                }
            }
        )
    $(".header_nav_btn").hover(
        function () {
            if (mouse_over_switch1 == 1) {
                background_width = $(this).outerWidth();
                background_height = $(this).outerHeight();
                background_x = $(this).offset().left;
                background_y = $(this).offset().top;
                $("#header_background").css({
                    "background-color": "rgba(0, 0, 0, 0.08)",
                    "width": background_width + "px",
                    "height": background_height + "px",
                    "left": background_x + "px",
                    "top": background_y + "px",
                    "border-radius": "3px",
                    "transition": "200ms ease-in",
                    "z-index": "-1"
                });
            }
        },
        function () {
            $("#header_background").css({
                "background-color": "rgba(0, 0, 0, 0.08)"
            });
        }
    )

    $(".header").hover(
        function () {
            // $("#header_background").css({

            // })
        },
        function () {
            $("#header_background").css({
                 "background-color": "transparent"
            });
            timer=setTimeout(function(){mouse_over_switch1=0},700);
            
        }
    )
    $("#down_arrow").click(

    )
})

var lang = document.getElementsByClassName("lang");
lang.item(0).addEventListener('click', lang_clicked);
function lang_clicked(){
    $(function () {
        $(".nav1").css({
            "display": "none"
        });
        $(".nav2").css({
            "display": "none"
        });
        $(".lang").css({
            "display": "none"
        });
        $(".lang_nav_box").css({
            "display": "block"
        });
        $(".back_btn").css({
            "visibility": "visible"
        });
    })
}


