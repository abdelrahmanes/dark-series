/*global $, alert, console*/

$(function(){

    'use strict';
    // Adjust Header Height
    var myHeader = $('.header');
    var mySlider = $('.bxslider');

    myHeader.height($(window).height());
    $(window).resize(function (){
        myHeader.height($(window).height());
    
        mySlider.each(function (){

            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) /2 );
        
        });
    });

    //Links Add Active Class

    $('.links li a').click(function(){

        $(this).parent().addClass('active').siblings().removeClass('active');

    });
    //Adjust Bxslider List Item Center

    mySlider.each(function (){

        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) /2 );

    });

    //Trigger The Bx Slider
    mySlider.bxSlider({
        pager:false 
    });

    //smooth scroll to div
    $('.links li a').click(function(){

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    //Our Auto Slider Code
    (function autoSlider(){

        $('.slider .active').each(function(){

            if(!$(this).is(':last-child')){

                $(this).delay(3000).fadeOut(1000, function(){

                    $(this).removeClass('active').next().addClass('active').fadeIn();

                    autoSlider();
                });

            } else{

                $(this).delay(3000).fadeOut(1000,function(){

                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();

                });

            }

        });

    }());



});