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

    //상단 메뉴 포커스 효과
    $boxHeader.mouseenter(function (e) {
        $boxHeader.addClass('active');
        $imgLogo.addClass('active');
        $menuList.addClass('active');
    }).focusin(function () {
        $boxHeader.mouseenter();
    });

    $boxHeader.mouseleave(function (e) {
        $boxHeader.removeClass('active');
        $imgLogo.removeClass('active');
        $menuList.removeClass('active');
    }).focusout(function () {
        $boxHeader.mouseleave();
    });

    //상단 메뉴 드롭다운
    $dropdownMenu.mouseenter(function (e) {
        $dropdownMenu.stop().animate();
        $dropdownBg.stop().animate({height: 60}, 300);
        $dropdownBg.addClass('active');
    }).focusin(function () {
        $dropdownMenu.mouseenter();
    });

    $dropdownMenu.mouseleave(function (e) {
        $dropdownMenu.stop().animate();
        $dropdownBg.stop().animate({height: 0}, 300);
        $dropdownBg.removeClass('active');
    }).focusout(function () {
        $dropdownMenu.mouseleave();
    });

    $dropdownBg.mouseenter(function (e) {
        $dropdownMenu.stop().animate();
        $dropdownBg.stop().animate({height: 60}, 300);
        $dropdownBg.addClass('active');
    }).focusin(function () {
        $dropdownMenu.mouseenter();
    });

    $dropdownBg.mouseleave(function (e) {
        $dropdownMenu.stop().animate();
        $dropdownBg.stop().animate({height: 0}, 300);
        $dropdownBg.removeClass('active');
    }).focusout(function () {
        $dropdownMenu.mouseleave();

    //모달 팝업 레이어
    $('button.menu-05').click(function(event){
        event.stopPropagation();
        $('.box-modal').toggle();
    });

    $(document).click(function(){
        $('.box-modal').hide();
    });

    //footer 모달 팝업 레이어-01
    $('button.btn-relation').click(function(event){
        event.stopPropagation();
        $('.box-modal-relationl').toggle();

        if ($(".relation img").hasClass("active") === true) {
            $(".relation img").removeClass('active');
        } else {
            $(".relation img").addClass('active');
        }
    });

    $(document).click(function(){
        $('.box-modal-relationl').hide();
        $('.relation img').removeClass('active');
    });

    //footer 모달 팝업 레이어-02
    $('button.btn-lang').click(function(event){
        event.stopPropagation();
        $('.box-modal-lang').toggle();

        if ($(".lang img").hasClass("active") === true) {
            $(".lang img").removeClass('active');
        } else {
            $(".lang img").addClass('active');
        }
    });

    $(document).click(function(){
        $('.box-modal-lang').hide();
        $('.lang img').removeClass('active');
    });

    //box-slide
    $('.box-slide > div').css('width', $(window).width());
    $(window).resize(function () { // 이거 왜 작동 안하지?
        $('.box-slide > div').css('width', $(window).width());
    }).resize();

    var ltem_width = $('.box-slide > div').outerWidth(true); //슬라이드될 박스 너비값
    $('.box-slide > div:first').before($('.box-slide > div:last')); //맨 마지막 슬라이드될 박스를 맨 앞으로 이동시켜둠
    $('.box-slide').css('left', -ltem_width + 'px'); //늘어난 만큼 -로 위치 설정

    $('.btn-prev').click(function () {
        var left_indent = parseInt($('.box-slide').css('left')) + ltem_width;

        $('.box-slide').animate({'left': left_indent + 'px'}, 200, function () {
            $('.box-slide > div:first').before($('.box-slide > div:last'));
            // $('.box-slide > div:last').insertBefore($('.box-slide > div:first'));
            $('.box-slide').css('left', -ltem_width + 'px');
        });
    });

    $('.btn-next').click(function () {
        var left_indent = parseInt($('.box-slide').css('left')) - ltem_width;

        $('.box-slide').animate({'left': left_indent + 'px'}, 200, function () {
            $('.box-slide > div:last').after($('.box-slide > div:first'));
            // $('.box-slide > div:first').insertAfter($('.box-slide > div:last'));
            $('.box-slide').css('left', -ltem_width + 'px');
        });
    });

    //content random img
    var images = ['img-random-01.gif', 'img-random-02.gif', 'img-random-03.gif', 'img-random-04.gif', 'img-random-05.gif'];
    $('.box-content-01 .description').html("<img src='/img/" + images[Math.floor(Math.random() * images.length)] + "'>");

});