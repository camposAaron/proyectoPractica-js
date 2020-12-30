$(document).ready(function(){

    var colorTheme = localStorage.getItem('theme');

    switch(colorTheme){
        case 'green':
            $('#theme').attr('href','styles/green.css');
         break;

         case 'red':
            $('#theme').attr('href','styles/red.css');
         break;

         case 'blue':
            $('#theme').attr('href','styles/blue.css');
         break;  
    }
    
    
    //Theme selector functions
    $('#to-green').click(function () {
        $('#theme').attr('href', 'styles/green.css');
        localStorage.setItem('theme','green');
    });

    $('#to-blue').click(function () {
        $('#theme').attr('href', 'styles/blue.css');
        localStorage.setItem('theme','blue');
    });

    $('#to-red').click(function () {
        $('#theme').attr('href', 'styles/red.css');
        localStorage.setItem('theme','red');
    });

    //according 

    $('#acordeon').accordion();

     //Login False instructions
     $('#login form').submit(function (e) {
        e.preventDefault();

        var name = $('#text-name').val();
        var email = $('#text-email').val();
        var password = $('#text-pass').val();

        if (name != undefined && name != null) {

            var formUser = {
                name: name,
                email: email,
                password: password
            }


            localStorage.setItem('formUser', JSON.stringify(formUser));

            ShowWelcomeUser();
            CleanInputs();
            
        }
    });

    function ShowWelcomeUser() {

        var userdata = JSON.parse(localStorage.getItem('formUser'));

        if (userdata.name != undefined || userdata.name != null) {
            $('#about p').html(`
                <br>
                <strong>
                <span>Bienvenido ${userdata.name} !</span>  <a href="#" id="close-sesion">Cerrar Sesion</a>
                </strong>
            `)

            $('#login').hide();

            $('#close-sesion').click(function (e){
                e.preventDefault();
                localStorage.clear();
                window.location.reload();
            })
        }
    }

    function CleanInputs(){
        $('#text-name').val('');
        $('#text-email').val('');
        $('#text-pass').val('');
    }



    try {
        ShowWelcomeUser();

    } catch (error) {
        console.log('Aun no se a cargado el Usuario al localStorage');
    }

    

    
});