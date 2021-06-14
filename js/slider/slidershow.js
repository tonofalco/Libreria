window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel_lista'),{
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel_anterior',
            next: '.carousel_siguiente'
        },
        
    });
});
