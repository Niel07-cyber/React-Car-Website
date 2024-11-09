$(document).ready(function() {
    $('.hero_slide').fullpage({
        fixedElements: '.renault_nav',
        autoScrolling:true,
        scrollHorizontally: false,
        fitToSection:true,
        navigation: true,
        navigationPosition: 'left',
        responsiveHeight: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
    });

    // var myFullpage = new fullpage('#fullpage', {
    //     anchors: ['firstPage', 'secondPage', '3rdPage'],
    //     sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    //     scrollBar: true
    // });





    // CAPTURE PAGE SLIDE HERE


    $('.capture_slide').fullpage({
        fixedElements: '.renault_nav',
        anchors: ['Overview','Exterior','Interior','Technology','Safety','PriceAndSpecifications','Reviews'],
        navigationTooltips: ['Overview','Exterior','Interior','Technology','Safety','Price & Specifications','Reviews'],
        showActiveTooltip: true,
        autoScrolling:true,
        scrollHorizontally: false,
        fitToSection:true,
        navigation: true,
        navigationPosition: 'left',
        responsiveHeight: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        showActiveTooltip: true,
        scrollOverflow: true,
        // normalScrollElements: '.scrollable',
        slideSelector:'slide',
        // scrollingSpeed: 100,
    });



    // CONCEPT CAR 

    $('.concept_car_slide').fullpage({
        fixedElements: '.renault_nav',
        anchors: ['Overview','EZ-Ultimo','EZ-PRO','EZ-GO','R.S._2027','SYMBIOZ','Trezor'],
        navigationTooltips: ['Overview','EZ-Ultimo Concept','EZ-PRO Concept','EZ-GO Concept','R.S. 2027 Vision','SYMBIOZ Concept','Trezor Concept'],
        showActiveTooltip: true,
        autoScrolling:true,
        scrollHorizontally: false,
        fitToSection:true,
        navigation: true,
        navigationPosition: 'left',
        responsiveHeight: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        showActiveTooltip: true,
        scrollOverflow: true,
        // normalScrollElements: '.scrollable',
        slideSelector:'slide',
        // scrollingSpeed: 100,
    });




    // CONCEPT CAR 

    $('.motor_sport').fullpage({
        fixedElements: '.renault_nav',
        anchors: ['Overview','F1-Timeline','Sporting-Technologies'],
        navigationTooltips: ['Overview','F1-Timeline','Sporting-Technologies'],
        showActiveTooltip: true,
        autoScrolling:true,
        scrollHorizontally: false,
        fitToSection:true,
        navigation: true,
        navigationPosition: 'left',
        responsiveHeight: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        showActiveTooltip: true,
        scrollOverflow: true,
        // normalScrollElements: '.scrollable',
        slideSelector:'slide',
        // scrollingSpeed: 100,

        afterLoad: function(anchorLink, index){
            // var iscroll = $('.fp-scroller');

            // function getScroll(){
            //    console.log(iscroll.scrollX);
            //    console.log(iscroll.scrollY);
            // }
            // getScroll();
        }
    });




    // DEALS AND NEWS SLIDER


    $('.deals_news_slide').fullpage({
        fixedElements: '.renault_nav',
        anchors: ['Promo','Renault_Honor','3_hour_test_drive'],
        navigationTooltips: ['Promo','Renault Honor','3 hour test drive'],
        showActiveTooltip: true,
        autoScrolling:true,
        scrollHorizontally: false,
        fitToSection:true,
        navigation: true,
        navigationPosition: 'left',
        responsiveHeight: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        showActiveTooltip: true,
        scrollOverflow: true,
        // normalScrollElements: '.scrollable',
        slideSelector:'slide',
        // scrollingSpeed: 100,
    });



    // CAPTURE PAGE SLIDE HERE


    $('.subscription_slide').fullpage({
        fixedElements: '.renault_nav',
        anchors: ['Overview','Models_Available','Subscription_Plans','Why_Subscribe', 'Subscription_FAQs'],
        navigationTooltips: ['Overview','Models Available','Subscription Plans','Why Subscribe', 'Subscription FAQs'],
        showActiveTooltip: true,
        autoScrolling:true,
        scrollHorizontally: false,
        fitToSection:true,
        navigation: true,
        navigationPosition: 'left',
        responsiveHeight: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        showActiveTooltip: true,
        scrollOverflow: true,
        // normalScrollElements: '.scrollable',
        slideSelector:'slide',
        // scrollingSpeed: 100,
    });



    

     // CLICKING ON TOOLtIPS SHOW ITS SLIDE

    $( "#fp-nav > ul > li > div" ).each(function(index){
      $(this).click(function() { document.location.href=$(this).parent().children(0).get(0).hash; });
    })


   



    // LEARN MORE BUTTON FUNCTION IS HERE

    $('.learn_more_btn').click(function (e) {
        let target = $(this).data('target');

        console.log(target);
        $(target).toggleClass('learn_more_open');
           console.log($('.fp-section.active').find('.fp-scrollable').data('iscrollInstance'))
        if ($(target).hasClass('learn_more_open')) { //show

            var iscroll_obj = $('.fp-section.active').find('.fp-scrollable')[0].fp_iscrollInstance;
            // iscroll_obj.scrollTo(0, -($(window).height()), 600);
            
            $('#fp-nav').hide();
            $('.fp-section.active').find('.scroll_main_top_banner_hide').hide();
            $('.close_section_btn').fadeIn('slow')   
        } else {
            // iscroll_obj.scrollTo(0, +($(window).height()), 600);
            $('#fp-nav').show();
            $('.close_section_btn').hide()  
        }

        fullpage_api.reBuild();
        if ($(target).hasClass('learn_more_open')) {
            fullpage_api.setAllowScrolling(false);
        }
        else {
            fullpage_api.setAllowScrolling(true);
        }


        

        $('.close_section_btn').click(function(){
            $('.fp-section.active').find('.scroll_main_top_banner_hide').show();
            iscroll_obj.scrollTo(0, +($(window).height()), 50);
            console.log(target);
            $(target).removeClass('learn_more_open');
            $(this).fadeOut('slow');
            fullpage_api.reBuild();
            fullpage_api.setAllowScrolling(true);
            $('#fp-nav').show();
        })
    });

    //CONCEPT CAR SLIDE
    $('.concept_car_in_slide').slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay:true,
    }); 


    // CAR GALLARY SLIDER HERE

    $('.gallary_slide_center_mode_1').slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        centerPadding: '30vh',
        dots: true,
        infinite: true,
        autoplay:true,

        // dotsClass: 'car_gallary_slide_dot',
        appendDots: '.car_gallary_slide_dot_1',
    });

    $('.gallary_slide_center_mode_2').slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        centerPadding: '30vh',
        dots: true,
        infinite: true,
        autoplay:true,

        // dotsClass: 'car_gallary_slide_dot',
        appendDots: '.car_gallary_slide_dot_2',
    });

    $('.gallary_slide_center_mode_3').slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        centerPadding: '30vh',
        dots: true,
        infinite: true,
        autoplay:true,

        // dotsClass: 'car_gallary_slide_dot',
        appendDots: '.car_gallary_slide_dot_3',
    });

    $('.gallary_slide_center_mode_4').slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        centerPadding: '30vh',
        dots: true,
        infinite: true,
        autoplay:true,

        // dotsClass: 'car_gallary_slide_dot',
        appendDots: '.car_gallary_slide_dot_4',
    });
                    

    // var myFullpage = new fullpage('.capture_slide', {
    //     licenseKey: '',
    //     fixedElements: '.renault_nav',
    //     navigation: true,
    //     navigationPosition: 'left',
    //     anchors: ['Overview','Exterior','Interior','Technology','Safety','CapturTrophy','PriceAndSpecifications','Reviews'],
    //     slidesNavigation: true,
    //     slidesNavPosition: 'bottom',
    //     responsiveHeight: true,
    //     scrollOverflow:true,
    //     scrollBar: false,
    //     controlArrows: false,
    //     loopHorizontal: false,
    //     scrollOverflow: true,
    //     normalScrollElements: '.navbar-collapse',
    // });




    // SHOW CUSTOM FILE UPLOAD FIELD VALUE

    $(".upload_custom").on("change", function() {

      var fileName = $(this).val().split("\\").pop();
      console.log($(this).parent())
      $(this).parent().parent().next(".show_file_name").text(fileName);
    });



    // SIDE NAV CODE IS HERE

    $('[data-toggle="offcanvas"]').on('click', function (e) {
        $('.offcanvas-collapse').toggleClass('open');
        console.log(e.target)
    })


    $('.next_sec').click(function (e) {
        fullpage_api.moveSectionDown();
        this.blur();
    });




    //BLOG OTHER POST SLIDER
    $('.blog_slider').slick({
        slidesToShow: 3,
        dots: false,
        infinite: true,
        autoplay:true,
        nextArrow: '.next_btn',
        prevArrow: '.prev_btn'
    }); 



    // CANGE TEXT COLOR BY ITS BACKGROUND

    // var imgLink = function(el) {
    //     var style = window.getComputedStyle(el),
    //         img = imgUrl(style.backgroundImage);

    //     if (img) {
    //         getImage.src = img;
    //     }
    // };

    // var img = $('.banner').css('background-image');
    // console.log(img)

    // var getImage = new Image();

    // getImage.onload = function() {
    //     var rgb = getAverageColourAsRGB(getImage),
    //         color = 'rgb(' + (255 - rgb.r) + ', ' + (255 - rgb.g) + ', ' + (255 - rgb.b) + ')',
    //         style = '';

    //     // $(j).attr('style', ' color: ' + color + ';');
    // };


    

    // var getAverageColourAsRGB = function(img) {
    //         var canvas = document.createElement('canvas'),
    //             context = canvas.getContext && canvas.getContext('2d'),
    //             rgb = {
    //                 r: 102,
    //                 g: 102,
    //                 b: 102
    //             }, // Set a base colour as a fallback for non-compliant browsers
    //             pixelInterval = 5, // Rather than inspect every single pixel in the image inspect every 5th pixel
    //             count = 0,
    //             i = -4,
    //             data, length;

    //         // return the base colour for non-compliant browsers
    //         if (!context) {
    //             return rgb;
    //         }

    //         // set the height and width of the canvas element to that of the image
    //         var height = canvas.height = img.height() || img.height,
    //             width = canvas.width = img.width() || img.width;

    //         context.drawImage(img, 0, 0);

    //         try {
    //             data = context.getImageData(0, 0, width, height);
    //         } catch (e) {
    //             // catch errors - usually due to cross domain security issues
    //             alert(e);
    //             return rgb;
    //         }

    //         data = data.data;
    //         length = data.length;
    //         while ((i += pixelInterval * 4) < length) {
    //             count++;
    //             rgb.r += data[i];
    //             rgb.g += data[i + 1];
    //             rgb.b += data[i + 2];
    //         }

    //         // floor the average values to give correct rgb values (ie: round number values)
    //         rgb.r = Math.floor(rgb.r / count);
    //         rgb.g = Math.floor(rgb.g / count);
    //         rgb.b = Math.floor(rgb.b / count);

    //         return rgb;
    //         console.log(rgb)
    //     };



    //     getAverageColourAsRGB();


    



    // UPDATE HEIGHT ON ACCORDION OPEN

    $('.accordion').on('shown.bs.collapse', function () {
        
        var windowHeight = $(window).height();
        var accordionHeight = $('.accordion .show.collapse').height();    
        var updatedHeight = windowHeight + accordionHeight;
        $('input#faqheight').val(accordionHeight);    
        $('input#windowheight').val(updatedHeight);
        // $('.fp-table').css('height', updatedHeight);
        // $('.fp-tableCell').css('height', updatedHeight);
        // $('.fp-scrollable.active').css('height', updatedHeight);
    });

    $('.accordion').on('hidden.bs.collapse', function () {
        var prevWindowHeight = $('input#windowheight').val();
        var prevAccordionHeight = $('input#faqheight').val();
        var newHeight = prevWindowHeight - prevAccordionHeight ;

        // $('.fp-table').css('height', newHeight);
        // $('.fp-tableCell').css('height', newHeight);
        // $('.fp-scrollable,').css('height', newHeight);
    });




    






    // $('.status').mouseover(function(){
    //     var x = $(this).position();
    //     console.log("Top: " + x.top + " Left: " + x.left);
    //     $('.progress').css({
    //         'width': x.left +'px'
    //     })
    // })

    // $('.status').mouseleave(function(){
    //     var x = $('.current').position();
    //     console.log("Top: " + x.top + " Left: " + x.left);
    //     $('.progress').css({
    //         'width': x.left +'px'
    //     })
    // })



    $('.in_form_tab').click(function(event){
        $(this).siblings('.in_form_tab').removeClass('active')
        // console.log('hello')
        $(this).addClass('active')

        var showId = $(this).attr('data-tab')


        var hide = $(this).siblings().attr('data-tab');
        $(hide).addClass('d-none fade')
        $(showId).removeClass('d-none fade')
    })


    

    $('input[name=loan_needed]').change(function(){
        var val = $(this).val();

        if (val == 1) {
           $('#bank_loan_needed').removeClass('d-none')
           $('#back_button_to_company_or_individual').addClass('d-none')
        } else if (val == 0){
            $('#back_button_to_company_or_individual').removeClass('d-none')
            $('#bank_loan_needed').addClass('d-none')
        } else {
            ('#back_button_to_company_or_individual').addClass('d-none')
            $('#bank_loan_needed').addClass('d-none')
        }
    })


    $('input[name=trade_vehicle]').change(function(){
        var val = $(this).val();

        if (val == 1) {
           $('#for_trade_in_vehicle').removeClass('d-none')
        } else if (val == 0){
            $('#for_trade_in_vehicle').addClass('d-none')
        } else {
            $('#for_trade_in_vehicle').addClass('d-none')
        }
    })



    $('.loan-label input[type=checkbox]').change(function(){
        var val = $(this).val();

        var hiddenAdd =$(this).parent().parent().next('.diff_add')
        console.log(hiddenAdd)

        if (val == 1) {
            $(hiddenAdd).removeClass('d-none')
        } else {
            $(hiddenAdd).addClass('d-none')
        }

        if ($('.show_hide_check').is(':checked') == false) {
            $(hiddenAdd).addClass('d-none')
        }

        $('.loan-label input[type=checkbox]').not(this).prop('checked', false);
    })







    $('input.promotion_main_checkbox').on('change', function(e){
      var promoId = parseInt($(this).attr('promo-id'));

      // fetch all promotion ids
       var allPromotionIds =  $('#all_promotion_ids').val();

       if(allPromotionIds != '') {
         var arrayIds = allPromotionIds.split(',');
         var arrayLength = arrayIds.length;


         for (i = 0; i < arrayLength; i++) {
          var promoUncheckId = parseInt(arrayIds[i]);
           if(promoUncheckId != promoId) {
              $( '.promotion_checkboxes_'+promoUncheckId ).each(function(e) {
                 $('.promotion_checkboxes_'+promoUncheckId).prop('checked', false);
               });
              $( '.promotion_radiobutton_'+promoUncheckId ).each(function(e) {
               $('.promotion_radiobutton_'+promoUncheckId).prop('checked', false);
             });
              $('#promotions-'+promoUncheckId).prop('checked', false);
           }
         }
       }

      if($(this).prop('checked') == true) {
        var promoId = $(this).attr('promo-id');
        $( '.promotion_checkboxes_'+promoId ).each(function(e) {
            $(this).prop('checked', true);
          });
         $( '.promotion_radiobutton_'+promoId ).each(function(e) {
          $(this).prop('checked', true);
        });
      } else {
          $( '.promotion_checkboxes_'+promoId ).each(function(e) {
            $(this).prop('checked', false);
          });
         $( '.promotion_radiobutton_'+promoId ).each(function(e) {
          $(this).prop('checked', false);
        });
      }
    });




    // Color Checkbox on Change Js to Handle single Check
    $('input.color-checkbox').on('change',function(){
     var th = $(this), name = th.prop('name'); 
     if(th.is(':checked')){
         $(':checkbox[name="'  + name + '"]').not($(this)).prop('checked',false);   
      }
    });



    $('input.package-checkbox').on('change',function(){
        var th = $(this), 
        name = th.prop('id');

        var spaceChar = name.indexOf(" ");

        var str = name.substring(0, spaceChar);
        var attr  =  '';
        var strAtrr  =  '';
        var spaceCharAttr  =  '';

        if ($.trim(str) == 'Tinting') {
          // $(':checkbox[id="'  + name + '"]').not($(this)).prop('checked', false);
          $.each($('input.package-checkbox'), function() {
              attr    =   $(this).attr('id');

               spaceCharAttr = attr.indexOf(" ");

               strAttr = attr.substring(0, spaceCharAttr);

              if ($.trim(strAttr) == 'Tinting') { 
                 
                if (attr == name) { 
                 
                } else {
                  
                  $(this).prop('checked', false);
                }

              }
          });
        }
    });

});












