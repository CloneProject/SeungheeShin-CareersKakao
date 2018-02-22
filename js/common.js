'use strict';

$(document).ready(function () {

    //헤더 포커스 효과 시작
    var $boxHeader = $('.box-header');
    var $dropdownMenu = $('.menu-03');
    var $dropdownBg = $('.box-header-submenu');
    var $imgLogo = $('.img-logo');
    var $menuList = $('.box-header-menu li a, .box-header-etc li button, .box-header-submenu li a');

    //화면 스크롤 시
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

    //스크롤 상태에서 브라우저 새로고침 시
    if ($(window).scrollTop() >= 20) {
        $boxHeader.addClass('active');
        $imgLogo.addClass('active');
        $menuList.addClass('active');
    }

    //상단 메뉴 mouseenter
    $boxHeader.mouseenter(function (e) {
        $boxHeader.addClass('active');
        $imgLogo.addClass('active');
        $menuList.addClass('active');
    }).focusin(function () {
        $boxHeader.mouseenter();
    });

    //상단 메뉴 mouseleave
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

    //드롭다운 메뉴 mouseenter
    $dropdownMenu.mouseenter(function (e) {
        $dropdownMenu.stop().animate();
        $dropdownBg.stop().animate({height: 60}, 300);
        $dropdownBg.addClass('active');
    }).focusin(function () {
        $dropdownMenu.mouseenter();
    });

    //드롭다운 메뉴 mouseleave
    $dropdownMenu.mouseleave(function (e) {
        $dropdownMenu.stop().animate();
        setTimeout(function () {
            $dropdownBg.stop().animate({height: 0}, 300);
        }, 3000);
    }).focusout(function () {
        $dropdownMenu.mouseleave();
        $dropdownBg.removeClass('active');
    });

    //드롭다운 메뉴 배경 mouseenter
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

    //드롭다운 메뉴 배경 mouseleave
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
    }); //헤더 포커스 효과 끝

    //모달 팝업 레이어 시작
    var btnMene05 = $('button.menu-05');
    var btnRelation = $('button.btn-relation');
    var btnLang = $('button.btn-lang');
    var boxModal = $('.box-modal');
    var boxModalRelationl = $('.box-modal-relationl');
    var boxModalLang = $('.box-modal-lang');
    var imgRelation = $('.relation img');
    var imgLang = $('.lang img');

    //header 모달 팝업 레이어
    btnMene05.click(function (event) {
        event.stopPropagation();
        boxModal.toggle();
        boxModalRelationl.hide();
        imgRelation.removeClass('active');
        boxModalLang.hide();
        imgLang.removeClass('active');
    });

    //footer 모달 팝업 레이어-01
    btnRelation.click(function (event) {
        event.stopPropagation();
        boxModalRelationl.toggle();
        boxModal.hide();
        boxModalLang.hide();
        imgLang.removeClass('active');
        if (imgRelation.hasClass("active") === true) {
            imgRelation.removeClass('active');
        } else {
            imgRelation.addClass('active');
        }
    });

    //footer 모달 팝업 레이어-02
    btnLang.click(function (event) {
        event.stopPropagation();
        boxModalLang.toggle();
        boxModal.hide();
        boxModalRelationl.hide();
        imgRelation.removeClass('active');
        if (imgLang.hasClass("active") === true) {
            imgLang.removeClass('active');
        } else {
            imgLang.addClass('active');
        }
    });

    $(document).click(function () {
        boxModal.hide();
        boxModalRelationl.hide();
        imgRelation.removeClass('active');
        boxModalLang.hide();
        imgLang.removeClass('active');
    }); //모달 팝업 레이어 끝

    //box-slide 시작
    var left_indent = 0;
    var right_indent = 0;
    var ltem_width = 0;
    var slideBox = $('.box-slide');
    var boxSlideDiv = $('.box-slide > div');
    var boxSlideDivFirst = $('.box-slide > div:first');
    var boxSlideDivLast = $('.box-slide > div:last');

    $(window).resize(function () {
        boxSlide();
    }).resize();

    function boxSlide() {
        boxSlideDiv.css('width', $(window).width());
        ltem_width = boxSlideDiv.outerWidth(true); //슬라이드될 박스 너비값
        slideBox.css('left', -ltem_width + 'px'); //늘어난 만큼 -로 위치 설정
    }

    boxSlideDivFirst.before(boxSlideDivLast); //맨 마지막 슬라이드될 박스를 맨 앞으로 이동시켜둠

    $(document).on("click", ".btn-prev", function () {
        left_indent = parseInt(slideBox.css('left')) + ltem_width;

        slideBox.animate({'left': left_indent + 'px'}, 200, function () {
            boxSlideDivFirst.before(boxSlideDivLast);
            // $('.box-slide > div:last').insertBefore($('.box-slide > div:first'));
            slideBox.css('left', -ltem_width + 'px');
        });
    });

    $(document).on("click", ".btn-next", function () {
        right_indent = parseInt(slideBox.css('left')) - ltem_width;

        slideBox.animate({'left': right_indent + 'px'}, 200, function () {
            boxSlideDivLast.after(boxSlideDivFirst);
            // $('.box-slide > div:first').insertAfter($('.box-slide > div:last'));
            slideBox.css('left', -ltem_width + 'px');
        });
    }); //box-slide 끝

    //새로고침 콘텐츠 시작
    var content01 = $('.box-content-01');
    var content01Desc = $('.box-content-01 .description');
    var content03Desc = $('.box-content-03 .description')
    var content03DescDiv = $('.box-content-03 .description > div')

    //content random img
    var images = ['img-random-01.gif', 'img-random-02.gif', 'img-random-03.gif', 'img-random-04.gif', 'img-random-05.gif'];
    content01Desc.html("<img src='../img/" + images[Math.floor(Math.random() * images.length)] + "'>");

    var colorList = ['#ffbdbd', '#c2dcfc', '#d4d1cc', '#caf3dc', '#eb6c6c'];
    content01.css('background-color', colorList[Math.floor(Math.random() * colorList.length)]);

    var textList = ['<div>공개하고<br>공유합니다.</div>', '<div>신뢰하고,<br>충돌하며<br>헌신합니다.</div>', '<div>일에<br>몰입할 수 있는<br>방식은<br>서로 다릅니다.</div>', '<div>다른 부서의<br>일도 우리의<br>일입니다.</div>', '<div>회고합니다.</div>'];
    var randomNum = Math.floor(Math.random() * textList.length);

    content03Desc.html(textList[randomNum]);

    if (randomNum === 0) {
        content03DescDiv.css('top', '30%');
    } else if (randomNum === 1) {
        content03DescDiv.css('top', '22%');
    } else if (randomNum === 2) {
        content03DescDiv.css('top', '15%');
    } else if (randomNum === 3) {
        content03DescDiv.css('top', '22%');
    } else if (randomNum === 4) {
        content03DescDiv.css('top', '33%');
    } //새로고침 콘텐츠 끝

});
