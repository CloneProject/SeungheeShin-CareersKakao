'use strict';

$(document).ready(function () {
    var $boxHeader = $('.box-header');
    var $dropdownMenu = $('.menu-03');
    var $dropdownBg = $('.box-header-submenu');
    var $imgLogo = $('.img-logo');
    var $menuList = $('.box-header-menu li a, .box-header-etc li button, .box-header-submenu li a');

    //화면 스크롤 메뉴 포커스 효과
    $(window).scroll(function() {
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
        $boxHeader.addClass('active');
        $imgLogo.addClass('active');
        $menuList.addClass('active');
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
    });

});