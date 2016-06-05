'use strict';
if (!window.console) window.console = {};
if (!window.console.memory) window.console.memory = function() {};
if (!window.console.debug) window.console.debug = function() {};
if (!window.console.error) window.console.error = function() {};
if (!window.console.info) window.console.info = function() {};
if (!window.console.log) window.console.log = function() {};


$(function() {
    function changeColor(section) {
        if (section == 1) {
            $('.header, .slider-ctrl-wrapper').addClass('white');
            $('.header, .slider-ctrl-wrapper').removeClass('red');
            $('.header, .slider-ctrl-wrapper').removeClass('gold');
            $('#fp-nav').removeClass('red');
        } else if (section == 2) {
            $('.header, .slider-ctrl-wrapper').addClass('red');
            $('.header, .slider-ctrl-wrapper').removeClass('white');
            $('.header, .slider-ctrl-wrapper').removeClass('gold');
            $('#fp-nav').addClass('red');
        } else {
            $('.header, .slider-ctrl-wrapper').addClass('gold');
            $('.header, .slider-ctrl-wrapper').removeClass('white');
            $('.header, .slider-ctrl-wrapper').removeClass('red');
            $('#fp-nav').removeClass('red');
        }
    }

    //Мне стыдно за то что сверху =)

    $('.fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        scrollBar: true,
        verticalCentered: true,
        onLeave: function(index, nextIndex, direction) {
            changeColor(nextIndex);
        },
        afterLoad: function(anchorLink, index) {
            changeColor(index);
        }
    });

    $('.js-move-slider').on('click', function(e) {
        e.preventDefault();
        var direction = $(this).attr('data-direction');

        if (direction == 'up') {
            $('.fullpage').fullpage.moveSectionUp();
        } else {
            $('.fullpage').fullpage.moveSectionDown();
        }
    })

    //3d паралакс на часах

    var offsetX = 0;
    var offsetY = 0;

    var realOffsetX = 0;
    var realOffsetY = 0;

    var width = $(window).outerWidth()
    var height = $(window).outerHeight()

    var multiply = 15;

    $('.section').mousemove(function(event) {
        var img = $(this).find('.js-img');
        realOffsetX = 0.5 - event.offsetX / width;
        realOffsetY = 0.5 - event.offsetY / height;
        offsetX += (realOffsetX - offsetX) * 0.9;
        offsetY += (realOffsetY - offsetY) * 0.9;
        img.css({
            'transform': 'scale(1.01) translateY(' + -offsetX + 'px) rotateX(' + -offsetY * multiply + 'deg) rotateY(' + offsetX * -multiply + 'deg) '
        })
    });
});


$(window).on('load resize', function() {
    setTimeout(function() {
        $('#loading').fadeOut(400);
    }, 1000)
})
