
$( window ).load(function() {
  var x = document.getElementById("myAudio"); 
  x.play();   
});

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
  $('.pause').css('display','block');
  $('.play').css('display','none');  
} 

function pauseAudio() { 
  x.pause(); 
  $('.play').css('display','block');
  $('.pause').css('display','none');
} 

var y = document.getElementById("hohoho"); 

function playHohoho() { 
  y.play(); 
   
} 

var click_numbers = 0;
$('.square').on('click',function(){
    click_numbers ++;
    //$('#click-num').html('Click no. '+click_numbers);
    if (click_numbers == $(this).attr('order')){
        $('#status-'+click_numbers).html('OK');
        $('.line.'+click_numbers).css('display','block');
    }
    else
    {
         $('#status-'+click_numbers).html('NOT OK');
         $('.gif').css('display','block');
         $('.start').css('display','block');
         pauseAudio();
        
    }
    if (click_numbers === 3 && click_numbers == $(this).attr('order')){     
        click_numbers=0;
        $('.gif2').css('display','block');
        $('.card').css('display','block');
        pauseAudio();
        playHohoho();
    }
});

function start(){
  click_numbers=0;
  $('.gif').css('display','none');
  $('.line').css('display','none');
  $('.start').css('display','none');
}