$(document).ready(function(){

    setInterval(function(){
        $('#reloj').html(`${moment().format('HH:mm:ss')}`);
    },1000);
});