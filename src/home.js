<script>
$(document).ready(() => {
    $('.body').hide() &&
    $('.topnav').hide() &&
  //init scrolling event heandler
  $(document).scroll(function(){
   
    var docScroll = $(document).scrollTop(), 
        bodyCntOffset = $(".body").offset().top - 650;
    
 
    //when rich top of boxex than fire
    if(docScroll >= bodyCntOffset ) {
      $(".body").fadeIn('slow') &&
         $('.topnav').fadeIn('slow')
    } else {
     $(".body").fadeOut('slow') &&
        $('.topnav').fadeOut('slow')
    }
  }) ** 
  $('.topnav a:hover').fadeIn()
});
</script>
