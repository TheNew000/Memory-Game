var images = ['benson', 'death', 'eileen', 'garretbobby', 'gary', 'highfiveghost', 'margaret', 'mordecai', 'mrmaellard', 'muscleman', 'pops', 'rigby', 'sensai', 'skips', 'starla', 'thomas'];
var rando = Math.floor(Math.random() * 32) + 1;

var cardsArray = $.merge(images, images);
shuffle(cardsArray);

$(document).ready(function(){
    var gridSize = 32;
    var mgHTML = '';
    for (var i = 0; i < gridSize; i++) {
        mgHTML += '<div class="mg-tile col-sm-2">';
            mgHTML += '<div class="mg-tile-inner">';
                mgHTML += '<div class="mg-tile-front"><img src="images/' + cardsArray[i] + '.png"></div>';
                mgHTML += '<div class="mg-tile-back"></div>';
            mgHTML += '</div>';
        mgHTML += '</div>';
    }
    $('.mg-contents').html(mgHTML);
    
    $('.mg-tile-inner').click(function(){
        $(this).toggleClass('flip');
        var cardsUp = $('.mg-tile-inner.flip');
        cardsUp.parent().addClass('background-clear');
        if(cardsUp.length == 2){
            if(cardsUp.find('img')[0].src == cardsUp.find('img')[1].src){
                cardsUp.addClass('matched');
            }else{
                setTimeout(function(){
                    cardsUp.removeClass('flip');
                    cardsUp.parent().removeClass('background-clear');
                    console.log(cardsUp.parent());
                }, 500);
            }
        }
    });
});

    function shuffle(array){
        var shuff = array.length, temp, index;
        while(shuff > 0){
            index = Math.floor(Math.random() * shuff);
            shuff--
            temp = array[shuff];
            array[shuff] = array[index];
            array[index] = temp;
        }
        return array;
    }
