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
    
});