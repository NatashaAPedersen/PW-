//$(function(){
  //  $('.filter').click(function(){
    //    $(this).addClass('active').siblings().removeClass('ative');
      //  let valor= $(this).attr('data-nombre');
        //if (valor == 'todos'){
          //  $('.work').show('1000');
        //} else {
           // $('.work').not('.' + valor).hide('1000');
          //  $('.work').filter('.' + valor).show('1000');
        //}
    //});
//});

$(".filter").click(function(){
  
    $(this).addClass('is-active');
    $(this).siblings().removeClass('is-active');
      let valor= $(this).attr('data-nombre');
        if (valor == 'todos'){
            $('.work').show('1000');
        } else {
            $('.work').not('.'+ valor).hide('1000');
            $('.work').filter('.'+ valor).show('1000');
        }

        let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;

        window.addEventListener('resize', function(){
        let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;
        });

        $('#enlace-inicio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
        });
        $('#enlace-equipo').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: equipo 
            },600);
        });
        $('#enlace-servicio').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: servicio 
            }, 600);
        });
        $('#enlace-trabajo').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: trabajo 
            }, 600);
        });
        $('#enlace-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto 
            }, 600);
        });
    });
  