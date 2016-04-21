(function () {
    var previousScroll = 0;
    
    $(window).scroll(function () {
       var currentScroll = $(this).scrollTop();
       if (currentScroll > previousScroll){
           var scroll_distance = $(window).scrollTop();
			var inclination_factor = (Math.sin((scroll_distance*Math.PI/400)-Math.PI/2) +1)/2;
			moveBotArm(inclination_factor);
			moveMedArm(inclination_factor);
			moveHand(inclination_factor);
			moveStickyDiv(inclination_factor);
       }
       else {
       		moveBotArm(0);
			moveMedArm(0);
			moveHand(0);
			moveStickyDiv(0);
       }
       j=0;
       for (var i = 400 ; i <=2800; i+=800) {
       	j++
       	val = ((i/400)-j)+1;
       	if (previousScroll< i && currentScroll>=i){
	       		$('#section_'+ val +'_text').fadeOut( "fast" );
	       		hide('#section_'+ val +'_text');
	       		$('#section_'+ val +'_title').fadeOut( "fast" );
	       		hide('#section_'+ val +'_title');
	       		show('#section_'+ (val+1) +'_text');
	       		show('#section_'+ (val+1) +'_title');
	       }
	    else if(previousScroll>i && currentScroll<=i){
	    		$('#section_'+ (val+1) +'_text').fadeOut( "fast" );
	       		hide('#section_'+ (val+1) +'_text');
	       		show('#section_'+ val +'_text');

				$('#section_'+ (val+1) +'_title').fadeOut( "fast" );
	       		hide('#section_'+ (val+1) +'_title');
	       		show('#section_'+ val +'_title');	    }
       };
       
       previousScroll = currentScroll;
    });
}());

function hide(id) {
    $(id).css({visibility:"hidden",display:"none"});
}

function show(id) {
    $(id).css({visibility:"visible", display:"block"});
}
function moveBotArm(inclination_factor){ 
	var rotation = 45 * inclination_factor;
	$('#arm_bottom').css({ transform: 'rotate('+rotation+'deg)', 'transform-origin' : '40% 84%' ,'-ms-transform': 'rotate('+rotation+'deg)','-ms-transform-origin': '40% 84%','-webkit-transform': 'rotate('+rotation+'deg)', '-webkit-transform-origin': '40% 84%'});
	$('#right_sticky1').css({ transform: 'rotate(-'+rotation+'deg)', 'transform-origin' : '40% 84%' ,'-ms-transform': 'rotate(-'+rotation+'deg)','-ms-transform-origin': '40% 84%','-webkit-transform': '-rotate('+rotation+'deg)', '-webkit-transform-origin': '40% 84%'});

}
function moveMedArm(inclination_factor){
	var distance_left = inclination_factor*107 + 80;
	var distance_top = inclination_factor*84 + 261;
	var rotation = 90 * inclination_factor;
	$('#left_sticky2').css({  left:distance_left+'px', top:distance_top+'px', transform: 'rotate('+rotation+'deg)', 'transform-origin' : '20% 50%' ,'-ms-transform': 'rotate('+rotation+'deg)','-ms-transform-origin': '20% 50%','-webkit-transform': 'rotate('+rotation+'deg)', '-webkit-transform-origin': '20% 50%'});
	$('#right_sticky2').css({  right:distance_left+'px', top:distance_top+'px', transform: 'rotate(-'+rotation+'deg)', 'transform-origin' : '80% 50%' ,'-ms-transform': 'rotate(-'+rotation+'deg)','-ms-transform-origin': '80% 50%','-webkit-transform': 'rotate(-'+rotation+'deg)', '-webkit-transform-origin': '80% 50%'});

}
function moveHand(inclination_factor){
	var distance_left = inclination_factor*25 + 195;
	var distance_top = inclination_factor*180 + 245;
	var rotation = 140 * inclination_factor;
	$('#left_sticky3').css({  left:distance_left+'px', top:distance_top+'px'});
	$('#robotic_hand').css({ transform: 'rotate('+rotation+'deg)', 'transform-origin' : '0% 50%' ,'-ms-transform': 'rotate('+rotation+'deg)','-ms-transform-origin': '0% 50%','-webkit-transform': 'rotate('+rotation+'deg)', '-webkit-transform-origin': '0% 50%'});
	$('#right_sticky3').css({  right:distance_left+'px', top:distance_top+'px',  transform: 'rotate(-'+rotation+'deg)', 'transform-origin' : '100% 50%' ,'-ms-transform': 'rotate(-'+rotation+'deg)','-ms-transform-origin': '100% 50%','-webkit-transform': 'rotate(-'+rotation+'deg)', '-webkit-transform-origin': '100% 50%'});

}

function moveStickyDiv(inclination_factor){
	var distance_left =  270;
	var distance_top = inclination_factor*430 + 200;
	var distance_top2 = inclination_factor*30 + 200;
	var rotation = 170 * inclination_factor;
	$('#sticky_div').css({  left:distance_left+'px', top:distance_top+'px'});
	$('#sticky_div').css({ transform: 'rotate('+rotation+'deg)', 'transform-origin' : '0% 0%' ,'-ms-transform': 'rotate('+rotation+'deg)','-ms-transform-origin': '0% 0%','-webkit-transform': 'rotate('+rotation+'deg)', '-webkit-transform-origin': '0% 0%'});
	$('#right_sticky_div').css({  right:distance_left+'px', top:distance_top+'px'});
	$('#right_sticky_div').css({ transform: 'rotate(-'+rotation+'deg)', 'transform-origin' : '100% 0%' ,'-ms-transform': 'rotate(-'+rotation+'deg)','-ms-transform-origin': '100% 0%','-webkit-transform': 'rotate(-'+rotation+'deg)', '-webkit-transform-origin': '100% 0%'});

}

$(document).ready(function () {
	hide("#section_2_text");
	hide("#section_3_text");
	hide("#section_4_text");
	hide("#section_5_text");
	hide("#section_2_title");
	hide("#section_3_title");
	hide("#section_4_title");
	hide("#section_5_title");
});