$( document ).ready(function() {
    $("#passcodePage").hide()
	$("body").css("display", "none");
    $("body").fadeIn(200);
	$("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(200, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
    $('.num').click(function () {
        var num = $(this);
        var text = $.trim(num.find('.txt').clone().children().remove().end().text());
        var passbox = $('#passbox');
        $(passbox).val(passbox.val() + text);
    });
});

function unlock() {
    if($('#passbox').val() == password) {
        $('#passcodePage').animate({
          opacity: "0"
        }, 500 );
        setTimeout(function(){
            $('#passcodePage').hide()
        
        }, 500);
        setTimeout(function(){
            $('#passbox').val('')
            window.open("https://github.com/ItsMurf/BlueFrame","_self")
        }, 500);
    }
    else {
        console.log("yes")
        $('#passbox').animate({
          backgroundColor: "#ff6060",
          color: "#fff",
        }, 500 );
        setTimeout(function(){
            $('#passbox').animate({
              backgroundColor: "white"
            }, 500 );

        }, 500);
        setTimeout(function(){
            $('#passbox').val('')
            $('#passbox').css('color', 'black')
        }, 1000);
    }
}
function enter(event) {
    if (event.which == 13) {
        unlock()
    }
}
password = "*0"