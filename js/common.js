'use strict';

$(document).ready(function () {
    var $boxHeader = $('.box-header');
    var $dropdownMenu = $('.menu-03');
    var $dropdownBg = $('.box-header-submenu');
    var $imgLogo = $('.img-logo');
    var $menuList = $('.box-header-menu li a, .box-header-etc li button, .box-header-submenu li a');

    //화면 스크롤 메뉴 포커스 효과
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 20) {
            $boxHeader.addClass('active');
            $imgLogo.addClass('active');
            $menuList.addClass('active');
        } else {
            $boxHeader.removeClass('active');
            $imgLogo.removeClass('active');
            $menuList.removeClass('active');
        }
    });

    //스크롤 상태에서 새로고침 시 포커스 효과
    if ($(window).scrollTop() >= 20) {
        $boxHeader.addClass('active');
        $imgLogo.addClass('active');
        $menuList.addClass('active');
    }

    //상단 메뉴 포커스 효과
    $boxHeader.mouseenter(function (e) {
        $boxHeader.addClass('active');
        $imgLogo.addClass('active');
        $menuList.addClass('active');
    }).focusin(function () {
        $boxHeader.mouseenter();
    });

    $boxHeader.mouseleave(function (e) {
        if ($(window).scrollTop() >= 20) {

        } else {
            $boxHeader.removeClass('active');
            $imgLogo.removeClass('active');
            $menuList.removeClass('active');
            $dropdownBg.removeClass('active');
        }
    }).focusout(function () {
        $boxHeader.mouseleave();
    });

    //2단 메뉴 드롭다운
    $dropdownMenu.mouseenter(function (e) {
        $dropdownMenu.stop().animate();
        $dropdownBg.stop().animate({height: 60}, 300);
        $dropdownBg.addClass('active');
    }).focusin(function () {
        $dropdownMenu.mouseenter();

    });

    $dropdownMenu.mouseleave(function (e) {
        $dropdownMenu.stop().animate();
        setTimeout(function () {
            $dropdownBg.stop().animate({height: 0}, 300);
        }, 3000);

    }).focusout(function () {
        $dropdownMenu.mouseleave();
        $dropdownBg.removeClass('active');

    });

    $dropdownBg.mouseenter(function (e) {
        $dropdownMenu.stop().animate();
        $dropdownBg.stop().animate({height: 60}, 300);
        $dropdownBg.addClass('active');
        $boxHeader.addClass('active');
        $imgLogo.addClass('active');
        $menuList.addClass('active');

    }).focusin(function () {
        $dropdownMenu.mouseenter();

    });

    $dropdownBg.mouseleave(function (e) {
        $dropdownMenu.stop().animate();
        $dropdownBg.stop().animate({height: 0}, 300);
        $dropdownBg.removeClass('active');

        if ($(window).scrollTop() === 0) {
            $boxHeader.removeClass('active');
            $imgLogo.removeClass('active');
            $menuList.removeClass('active');

        }
    }).focusout(function () {
        $dropdownMenu.mouseleave();

    });

    //모달 팝업 레이어
    $('button.menu-05').click(function (event) {
        event.stopPropagation();
        $('.box-modal').toggle();

        $('.box-modal-relationl').hide();
        $('.relation img').removeClass('active');

        $('.box-modal-lang').hide();
        $('.lang img').removeClass('active');
    });

    //footer 모달 팝업 레이어-01
    $('button.btn-relation').click(function (event) {
        event.stopPropagation();
        $('.box-modal-relationl').toggle();

        $('.box-modal').hide();

        $('.box-modal-lang').hide();
        $('.lang img').removeClass('active');

        if ($(".relation img").hasClass("active") === true) {
            $(".relation img").removeClass('active');
        } else {
            $(".relation img").addClass('active');
        }
    });

    //footer 모달 팝업 레이어-02
    $('button.btn-lang').click(function (event) {
        event.stopPropagation();
        $('.box-modal-lang').toggle();

        $('.box-modal').hide();

        $('.box-modal-relationl').hide();
        $('.relation img').removeClass('active');

        if ($(".lang img").hasClass("active") === true) {
            $(".lang img").removeClass('active');
        } else {
            $(".lang img").addClass('active');
        }
    });

    $(document).click(function () {
        $('.box-modal').hide();

        $('.box-modal-relationl').hide();
        $('.relation img').removeClass('active');

        $('.box-modal-lang').hide();
        $('.lang img').removeClass('active');
    });

    //box-slide
    var left_indent = 0;
    var right_indent = 0;
    var ltem_width = 0;

    $(window).resize(function () { // 이거 왜 작동 안하지?
        boxSlide();
    }).resize();

    function boxSlide() {
        $('.box-slide > div').css('width', $(window).width());
        ltem_width = $('.box-slide > div').outerWidth(true); //슬라이드될 박스 너비값
        $('.box-slide').css('left', -ltem_width + 'px'); //늘어난 만큼 -로 위치 설정
    }

    $('.box-slide > div:first').before($('.box-slide > div:last')); //맨 마지막 슬라이드될 박스를 맨 앞으로 이동시켜둠

    $(document).on("click", ".btn-prev", function () {
        left_indent = parseInt($('.box-slide').css('left')) + ltem_width;

        $('.box-slide').animate({'left': left_indent + 'px'}, 200, function () {
            $('.box-slide > div:first').before($('.box-slide > div:last'));
            // $('.box-slide > div:last').insertBefore($('.box-slide > div:first'));
            $('.box-slide').css('left', -ltem_width + 'px');
        });
    });

    $(document).on("click", ".btn-next", function () {
        right_indent = parseInt($('.box-slide').css('left')) - ltem_width;

        $('.box-slide').animate({'left': right_indent + 'px'}, 200, function () {
            $('.box-slide > div:last').after($('.box-slide > div:first'));
            // $('.box-slide > div:first').insertAfter($('.box-slide > div:last'));
            $('.box-slide').css('left', -ltem_width + 'px');
        });
    });

    //content random img
    var images = ['img-random-01.gif', 'img-random-02.gif', 'img-random-03.gif', 'img-random-04.gif', 'img-random-05.gif'];
    $('.box-content-01 .description').html("<img src='../img/" + images[Math.floor(Math.random() * images.length)] + "'>");

    var colorList = ['#ffbdbd', '#c2dcfc', '#d4d1cc', '#caf3dc', '#eb6c6c'];
    $('.box-content-01').css('background-color', colorList[Math.floor(Math.random() * colorList.length)]);

    var textList = ['<div>공개하고<br>공유합니다.</div>', '<div>신뢰하고,<br>충돌하며<br>헌신합니다.</div>', '<div>일에<br>몰입할 수 있는<br>방식은<br>서로 다릅니다.</div>', '<div>다른 부서의<br>일도 우리의<br>일입니다.</div>', '<div>회고합니다.</div>'];
    var randomNum = Math.floor(Math.random() * textList.length);

    $('.box-content-03 .description').html(textList[randomNum]);

    if (randomNum === 0) {
        $('.box-content-03 .description > div').css('top', '30%');
    } else if (randomNum === 1) {
        $('.box-content-03 .description > div').css('top', '22%');
    } else if (randomNum === 2) {
        $('.box-content-03 .description > div').css('top', '15%');
    } else if (randomNum === 3) {
        $('.box-content-03 .description > div').css('top', '22%');
    } else if (randomNum === 4) {
        $('.box-content-03 .description > div').css('top', '33%');
    }

});
