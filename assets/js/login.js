
$(function(){
    $('#login').on('click', function(e) {
        e.preventDefault();
    });
    $("#submit").on("click", function(){
        var user = $('#username').val();
        var pass = $('#password').val();
        
        $.ajax({
            url: 'server.php',
            method: 'POST',
            dataType: 'json',
            data: {username: user, password: pass},
            
            success: function (response) {
                if (response == 'successful') {
                    
                    location.href = 'table.php';
                }
                if (response == 'denied') {
                    alert('username: test / password: test');
                }    
            }
        });
    });
});
