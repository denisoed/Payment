$(document).ready(function(){

    function checkLuhn(value) {
        var nCheck = 0,
            nDigit = 0,
            bEven = false;
        value = value.replace(/\D/g, "");

        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);

            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }

            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) == 0;
    }

    $('input').keyup(function(e){
        if (e.keyCode == 8) {
            if($(this).val().length == 0){
                $(this).prev().focus();
            }
        }
        if($(this).val().length==$(this).attr("maxlength")){
            $(this).next().focus();
        }
    });
    
    $('.first-input').keyup(function() {
        if ($('.title_img').children().length <= 2) {
            if (this.value[0] == 5 && this.value.length <= 1) {
                $('.title_img').append('<img src="img/master-card.svg" alt="Card">');
            } else if(this.value[0] == 4 && this.value.length <= 1) {
                $('.title_img').append('<img src="img/visa.svg" alt="Card">');
            }
        } else if (this.value.length == 0) {
            $('.title_img').children('img').remove();
        }
    });
});