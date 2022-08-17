 $(document).ready(function(){
  $('.scroll-to-block').click(function(e){
    e.preventDefault();
    let target = $(this).data('block');
    $('html, body').animate({
      scrollTop:$(target).offset().top
    },700)
  })
  // sliders
		$('.slider').slick({
			  infinite: true,
			  slidesToShow: 3,
			  slidesToScroll:3,
			  arrows:true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
                   },
      
          }]
  
		});
		$('.categories_slider').slick({
      slidesToShow: 3,
      slidesToScroll:3,
      arrows:true,
      dots:true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
                 },
    
        }]

  });
  });
