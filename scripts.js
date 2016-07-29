var images = ['benson', 'death', 'eileen', 'garretbobby', 'gary', 'highfiveghost', 'margaret', 'mordecai', 'mrmaellard', 'muscleman', 'pops', 'rigby', 'sensai', 'skips', 'starla', 'thomas'];
var rando = Math.floor(Math.random() * 32) + 1;

var cardsArray = $.merge(images, images);
shuffle(cardsArray);

$(document).ready(function(){
    var mgHTML = '';
    var mgHTML2 = '';
    for (var i = 0; i < 16; i++) {
        mgHTML += '<div class="mg-tile col-sm-3">';
            mgHTML += '<div class="mg-tile-inner">';
                mgHTML += '<div class="mg-tile-front"><img src="images/' + cardsArray[i] + '.png"></div>';
                mgHTML += '<div class="mg-tile-back"></div>';
            mgHTML += '</div>';
        mgHTML += '</div>';
    }
    $('.mg-contents-left').html(mgHTML);

    for (var j = 16; j < 32; j++) {
        mgHTML2 += '<div class="mg-tile col-sm-3">';
            mgHTML2 += '<div class="mg-tile-inner">';
                mgHTML2 += '<div class="mg-tile-front"><img src="images/' + cardsArray[j] + '.png"></div>';
                mgHTML2 += '<div class="mg-tile-back"></div>';
            mgHTML2 += '</div>';
        mgHTML2 += '</div>';
    }
    $('.mg-contents-right').html(mgHTML2);
    
    $('.mg-tile-inner').click(function(){
        $(this).toggleClass('flip');
        var cardsUp = $('.mg-tile-inner.flip');
        if(cardsUp.find('img')[0].src == cardsUp.find('img')[1].src){
            cardsUp.addClass('matched');
            cardsUp.off("click");
        }else{
            setTimeout(function(){
                cardsUp.removeClass('flip');
            }, 500);
        }
    });
});

    function shuffle(array){
        var shuff = array.length, temp, index;
        while(shuff > 0){
            index = Math.floor(Math.random() * shuff);
            shuff--;
            temp = array[shuff];
            array[shuff] = array[index];
            array[index] = temp;
        }
        return array;
    }
