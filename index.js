var click_numbers = 0;
$('.square').on('click',function(){
    click_numbers ++;
    $('#click-num').html('Click no. '+click_numbers);
    if (click_numbers == $(this).attr('order')){
        $('#status-'+click_numbers).html('OK');
        $('.line.'+click_numbers).css('display','block');
    }
    else
    {
         $('#status-'+click_numbers).html('NOT OK');
         $('.gif').css('display','block');
         $('.start').css('display','block');
    }
    if (click_numbers === 3){
      $('.gif2').css('display','block');
        click_numbers=0;
    }
});

function start(){
  varclick_numbers=0;
  $('.gif').css('display','none');
  $('.line').css('display','none');
  $('.start').css('display','none');
}