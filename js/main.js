/*
* Namespace used to avoid collitions
*/
var robocol = {};

robocol.full_screen = false;
robocol.top_img = null;
robocol.bot_img = null;
robocol.rgt_img = null;
robocol.lft_img = null;
robocol.set_full_screen = function () {
    robocol.full_screen = true;
}

robocol.remove_full_screen = function () {
    robocol.full_screen = false;
}



/*
* Execute logo animation on scroll
*/
$(window).scroll(function() {
	shakeRobocol();
});

/** Hide the publicity of the stiky footer **/

function hidePublicity() {
    $(".botom_sitcky").css({visibility:"hidden",display:"none"});
}

function hideThanks(){
    $(".thank_you").css({visibility:"hidden",display:"none"});
}
/*
* Send email whith javascript 
*/

$('#button_email').click(function() {
    var email = $('#contact_email').val();
    var name = $('#contact_name').val();
    var message = $('#contact_message').val();
    var subject = $('#contact_subject').val();
    var complete = 'Un mensaje de : ' + name +', con correo : ' + email + ' : ' + message;
    console.log(complete + ' '+ subject);
  $.ajax({type: 'POST',
  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
  data: {
    'key': 'Ivi7uwNydLvIYbnr9bnH1A',
    'message': {
      'from_email': 'am.cardenas927@gmail.com',
      'to': [
          {
            'email': 'am.cardenas927@gmail.com',
            'name': 'Ana M Cardenas',
            'type': 'to'
          },
          {
            'email': 'am.cardenas926@uniandes.edu.co',
            'name': 'Ana',
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': subject,
      'html': complete
    }
  }
 }).done(function(response) {
  $('.field input').each(function() {$(this).val('')});
  $('.field textarea').each(function() {$(this).val('')});
   $(".thank_you").css({visibility:"visible",display:"block"});
 });
});

/** Animation for the logo **/
function shakeRobocol(){
    var distance = $(window).scrollTop() / 10 + 1;
    var opcity = 10 - (distance/1.3);
    var height = distance ;
    var theta = $(window).scrollTop() / 50 % Math.PI;
    //Rotate and translate the gear
    $('#leftgear').css({ transform: 'translate(-'+distance+'em, '+height+'em) rotate(' + theta + 'rad)' , opacity : opcity  });
    //Apply transformation to center the moon image
    $('#moonImg').css({ transform: 'translate(8em, '+height+'em)', opacity : opcity });
    $('#robotica').css({ transform: 'translate(-12em, '+height+'em)', opacity : opcity });
}
function showCarrousel(id) {
    $(id).carousel(0);
    robocol.set_full_screen();
}

$(document).bind('keyup', function(e) {
    if (robocol.full_screen) {
              if (e.keyCode == 27) { 
            hideCarrousel() ;
        }
        if(e.which == 39){
            $('.carousel').carousel('next');
        }
        else if(e.which == 37){
            $('.carousel').carousel('prev');
        }
    }
});
/*
* Hide the carrousel
*/
function hideCarrousel() {
    // robocol.remove_full_screen();
    // $('html, body').animate({
    //     scrollTop: ($("#work").offset().top-80)
    // }, 2000);
    //  return false;
}

function initPortfolio () {
    var portfolio = $('#portfolio');
    var items = $('.items', portfolio); 
    var filters = $('.filters li a', portfolio); 

    items.imagesLoaded(function() {
        items.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows',
            transitionDuration: '0.7s'
        });
    });
    
    filters.click(function(){
        var el = $(this);
        filters.removeClass('active');
        el.addClass('active');
        var selector = el.attr('data-filter');
        items.isotope({ filter: selector });
        return false;
    });   
}
function initAnimations() {
    $('.animated').appear(function () {
        var el = $(this);
        var animation = el.data('animation');
        var delay = el.data('delay');
        if (delay) {
            setTimeout(function () {
                el.addClass(animation);
                el.addClass('showing');
                el.removeClass('hiding');
            }, delay);
        } else {
            el.addClass(animation);
            el.addClass('showing');
            el.removeClass('hiding');
        }
    }, {
        accY: -60
    });

    // Service hover animation
    $('.service').hover(function(){
        $('i', this).addClass('animated tada');
    },function(){   
        $('i', this).removeClass('animated tada');
    });
}

$(window).resize(function(){
    $('#desastre_title').removeClass('active');
    $('#desastre_title').blur();
    $('#mision_title').removeClass('active');
    $('#mision_title').blur();
    $('#urc_title').removeClass('active');
    $('#urc_title').blur();
    $('#todo_combo').click();
});
$(document).ready(function () {
    initPortfolio();
    initAnimations();
    shakeRobocol();
    //Disable send option unless input is filled
    $('.field input').keyup(function() {
        var empty = false;
        $('.field input').each(function() {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });

        if (empty) {
            $('#button_email').attr('disabled', 'disabled');
        } else {
            $('#button_email').attr('disabled', false);
        }
    });
});


$(window).scroll(function() {
    if ($(this).scrollTop() > $("#meet_team").offset().top - 700) {
        $(".botom_sitcky").animate({bottom:'0px'},300);
    }
});


$('.urc, .domobotics, .desastres').hover(function() { 
    var id = $(this).find(">:first-child").attr( "id");
    var bottom = document.elementFromPoint(document.getElementById(id).getBoundingClientRect().left,document.getElementById(id).getBoundingClientRect().top+(document.getElementById(id).clientHeight));
    if(bottom && bottom.className.indexOf("overlay") > -1) {
        var src = bottom.parentNode.children[0].src;
        src = src.replace('0.png','2.png');
        bottom.parentNode.children[0].src = src;
    }
    robocol.bot_img = bottom;
    var top =document.elementFromPoint(document.getElementById(id).getBoundingClientRect().left,document.getElementById(id).getBoundingClientRect().top-(document.getElementById(id).clientHeight));
    if(top && top.className.indexOf("overlay") > -1) {
        var src = top.parentNode.children[0].src;
        src = src.replace('0.png','4.png');
        top.parentNode.children[0].src = src;
    }
    robocol.top_img = top;
    var right =document.elementFromPoint(document.getElementById(id).getBoundingClientRect().left+(document.getElementById(id).clientWidth+1),document.getElementById(id).getBoundingClientRect().top);
    if(right && right.className.indexOf("overlay") > -1) {
        var src = right.parentNode.children[0].src;
        src = src.replace('0.png','1.png');
        right.parentNode.children[0].src = src;
    }
    robocol.rgt_img = right;
    var left =document.elementFromPoint(document.getElementById(id).getBoundingClientRect().left-(document.getElementById(id).clientWidth),document.getElementById(id).getBoundingClientRect().top);
    if(left && left.className.indexOf("overlay") > -1) {
        var src = left.parentNode.children[0].src;
        src = src.replace('0.png','3.png');
        left.parentNode.children[0].src = src;
    }
    robocol.lft_img = left;
}, function() {
    if (robocol.bot_img && robocol.bot_img.className.indexOf("overlay") > -1) {
        var src = robocol.bot_img.parentNode.children[0].src;
        src = src.replace('2.png','0.png');
        robocol.bot_img.parentNode.children[0].src = src;
    }
    
    if (robocol.top_img && robocol.top_img.className.indexOf("overlay") > -1){
        var src = robocol.top_img.parentNode.children[0].src;
        src = src.replace('4.png','0.png');
        robocol.top_img.parentNode.children[0].src = src;
    }
    
    if (robocol.rgt_img && robocol.rgt_img.className.indexOf("overlay")> -1){
        src = robocol.rgt_img.parentNode.children[0].src;
        src = src.replace('1.png','0.png');
        robocol.rgt_img.parentNode.children[0].src = src;
    }
    
    if(robocol.lft_img && robocol.lft_img.className.indexOf("overlay")> -1){
        src = robocol.lft_img.parentNode.children[0].src;
        src = src.replace('3.png','0.png');
        robocol.lft_img.parentNode.children[0].src = src;
    }
    
    })
