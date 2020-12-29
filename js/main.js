
$(document).ready(function () {

    CleanInputs();

    //Slider
    $('.slider').bxSlider({
        auto: true,
        pager: true,
        speed: 3000 
    });

    //Posts storaged in Json array
    var posts = [
        {
            title: "Prueba titulo 1",
            date: 'Publicado el ' + moment().format('D') + " de " + moment().format('MMMM') + " del " + moment().format("YYYY"),
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perspiciatis impedit," +
                "molestiae ut placeat corrupti doloremque possimus voluptas, cumque voluptatum et eligendi"
        },
        {
            title: "Prueba titulo 2",
            date: 'Publicado el ' + moment().format('D') + " de " + moment().format('MMMM') + " del " + moment().format("YYYY"),
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perspiciatis impedit," +
                "molestiae ut placeat corrupti doloremque possimus voluptas, cumque voluptatum et eligendi"
        },
        {
            title: "Prueba titulo 3",
            date: 'Publicado el ' + moment().format('D') + " de " + moment().format('MMMM') + " del " + moment().format("YYYY"),
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perspiciatis impedit," +
                "molestiae ut placeat corrupti doloremque possimus voluptas, cumque voluptatum et eligendi"
        },
        {
            title: "Prueba titulo 4",
            date: 'Publicado el ' + moment().format('D') + " de " + moment().format('MMMM') + " del " + moment().format("YYYY"),
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perspiciatis impedit," +
                "molestiae ut placeat corrupti doloremque possimus voluptas, cumque voluptatum et eligendi"
        }
    ]


    posts.forEach((item, index) => {
        var post = `   
            <article class="post">
            <h2>${item.title}</h3>
                <div class="badget">
                    <label>Ver más</label>
                </div>
                <span>${item.date}</span>
                <p>${item.content}</p>
            </article>
        `

        $('#posts').append(post);
    });

    //theme selector events

    $('#to-green').click(function () {
        $('#theme').attr('href', 'styles/green.css');
    });

    $('#to-blue').click(function () {
        $('#theme').attr('href', 'styles/blue.css');
    });

    $('#to-red').click(function () {
        $('#theme').attr('href', 'styles/red.css');
    });


    //scroll percent function
    $(window).scroll(function (e) {

        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());


        if (scrollPercent >= 50)
            $('#scrollTopButton').fadeIn("slow");
        else {
            $('#scrollTopButton').fadeOut("slow");
        } if (scrollPercent == 100) {
            $('#scrollTopButton').css('top', '75%');
        } else {
            $('#scrollTopButton').css('top', '93%');
        }
    });

    //Scroll swipe up button click event
    $('#scrollTopButton').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

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

