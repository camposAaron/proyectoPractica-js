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
    
    $('#calendar').datepicker();



    //validator 
    $('#formContact').validate({
        rules:{
            years:{
                required: true,
                number: true,
                maxlength:3
            }
        },
        messages:{
            years:{
                required: "La edad es requerida",
                number: "solo se aceptan numeros",
                maxlength:"solo digitos menores a 3"
            }
        }
        
    });

   
});