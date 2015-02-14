$(function(){
    console.log('init');
  $(window).on('resize', function(e){

    $('.tile').each(function(){
      var width = $(this).width();

      $(this).find('div').text('width: ' + width);

    });
  });
});
