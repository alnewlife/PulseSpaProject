$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1300,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow_left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow_right.png"></button>',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               arrows: false,
               dots: false
            }
         }
      ]
   });

   $(function () {

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
         $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      $('.catalog-item__link').each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
         })
      });

      $('.catalog-item__back').each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
         })
      });

   });
   (jQuery);

   //Modal

   $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn('slow');
   });
   $('.modal__close').on('click', function () {
      $('.overlay, #consultatuon, #thanks, #order').fadeOut('slow');
   });

   $('.button_mini').each(function (i) {
      $(this).on('click', function () {
         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
         $('.overlay, #order').fadeIn('slow');
      })

   });

});