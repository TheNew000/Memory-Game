var cards = ['<img src="images/rigby.png">', '<img src="images/mordecai.png">'];


$(document).ready(function(){
    var gridSize = 4;
    var card = '<img src="images/rigby.png">';
    var mgHTML = '';
    for (var i = 0; i < gridSize; i++) {
        if(i < 2){card=cards[0];}
        else{card = cards[1];}
        mgHTML += '<div class="mg-tile col-sm-3">';
            mgHTML += '<div class="mg-tile-inner">';
                mgHTML += '<div class="mg-tile-front">' + card + '</div>';
                mgHTML += '<div class="mg-tile-back"></div>';
            mgHTML += '<div>';
        mgHTML += '<div>';
    }
    $('.mg-contents').html(mgHTML);
    
    $('.mg-tile-inner').click(function(){
        $(this).toggleClass('flip');
        var cardsUp = $('.mg-tile-inner.flip');
        if(cardsUp.length == 2){
            if(cardsUp[0].src == cardsUp[1].src){

            }else{
                cardsUp.removeClass('flip');
            }
        }
    });
});
