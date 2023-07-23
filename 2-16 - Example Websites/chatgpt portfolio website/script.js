// Smooth scroll to anchor links
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
  
  // Toggle mobile menu
$('.hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $('nav').toggleClass('active');
  });

  // Open gallery images in lightbox
$('.gallery-item').on('click', function() {
    var imgSrc = $(this).find('img').attr('src');
    $('body').append('<div class="lightbox"><img src="' + imgSrc + '"></div>');
  });
  
  // Close lightbox on click
  $('body').on('click', '.lightbox', function() {
    $(this).remove();
  });
  