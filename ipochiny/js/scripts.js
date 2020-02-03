

$(document).ready(function(){
$("img, a").on("dragstart", function(event) { event.preventDefault(); });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    center:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});


    $(".devices-tab a").click(function (e) {
        e.preventDefault();
        $('.devices-tab a').each(function () {
            $(this).removeClass('active');
        }); // удаляем все классы текущей категории
        $(this).addClass('active');

        $('.model-tabs ul').fadeOut(0).addClass('hide-list');
        $('.model-tabs ul[data-pid=' + $(this).attr('data-cid') + ']').fadeIn(300).removeClass('hide-list');
        $('.price-content').fadeOut(0).addClass('hide-list');
        $('.price-content[data-pid=' + $(this).attr('data-cid') + ']').fadeIn(300).removeClass('hide-list');

    });

    $(document).on('click', '.pricing_model_button', function (event) {
        event.preventDefault();

        $('.model-tabs ul li').each(function () {
            $(this).removeClass('active');
        }); // удаляем все классы текущей категории
        $(this).parent().addClass('active');

        //history.replaceState({ foo: "bar" },"Jesus saves",$(this).attr('data-shortname'));    

        $('.price-content').fadeOut(0).addClass('hide-list');
        $('.price-content[data-pid=' + $(this).attr('data-cid') + ']').fadeIn(300).removeClass('hide-list');
    });

$(document).ready(function() {
        $('input[type="tel"]').mask("+7(999) 999-99-99");
});

$(document).ready(function(){
  //при нажатию на любую кнопку, имеющую класс .btn
  $(".cta-button, .callback, .price-content a, .modal-backdrop").click(function(e) {
    //открыть модальное окно с id="myModal"
    e.preventDefault();
    $("#mainModal").modal('toggle');
    $('body').css('overflow','hidden');
  });
});