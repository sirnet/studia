    var burgerList = document.getElementById("burger__List");
    var firstItem = document.getElementById("first");
    var secondItem = document.getElementById("second");
    var thirdItem = document.getElementById("third");
    var fourthItem = document.getElementById("fourth");
    var clientClick = document.getElementById("client");
    
    var i=0;
    burgerList.onclick =  function(){
        if (i ==0) {
            firstItem.classList.add("visually-hidden");
            secondItem.classList.add("second--active");
            thirdItem.classList.add("third--active");
            fourthItem.classList.add("visually-hidden");
            i=1;
        }
        else {
            firstItem.classList.remove("visually-hidden");
            secondItem.classList.remove("second--active");
            thirdItem.classList.remove("third--active");
            fourthItem.classList.remove("visually-hidden");
            i=0;
        }
    } 



var select = true;
var formClick = document.querySelectorAll('.form__content');

$('.form__content').click(function(){
        $(this).toggleClass('active');
        //$('.form__content').not(this).removeClass('active');
});


clientClick.onclick =  function(){
    document.getElementById("client").innerHTML="ШУТКА, ВСЕ - ЛЮБИМЫЕ";
}
