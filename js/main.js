'use strict'
$(document).ready(function(){

    //Slider
    $('.slider').bxSlider({
        auto: true,
        pager: true,
        speed: 3000
    });

    //Posts

    var posts = [
        {
            title: "Prueba titulo 1",
            date: 'Publicado el '+moment().format('D')+" de "+moment().format('MMMM')+" del "+moment().format("YYYY"),
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perspiciatis impedit,"+
            "molestiae ut placeat corrupti doloremque possimus voluptas, cumque voluptatum et eligendi"
        },
        {
            title: "Prueba titulo 2",
            date: 'Publicado el '+moment().format('D')+" de "+moment().format('MMMM')+" del "+moment().format("YYYY"),
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perspiciatis impedit,"+
            "molestiae ut placeat corrupti doloremque possimus voluptas, cumque voluptatum et eligendi"
        },
        {
            title: "Prueba titulo 3",
            date: 'Publicado el '+moment().format('D')+" de "+moment().format('MMMM')+" del "+moment().format("YYYY"),
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perspiciatis impedit,"+
            "molestiae ut placeat corrupti doloremque possimus voluptas, cumque voluptatum et eligendi"
        },
        {
            title: "Prueba titulo 4",
            date: 'Publicado el '+moment().format('D')+" de "+moment().format('MMMM')+" del "+moment().format("YYYY"),
            content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perspiciatis impedit,"+
            "molestiae ut placeat corrupti doloremque possimus voluptas, cumque voluptatum et eligendi"
        }
    ]
    
   
    posts.forEach((item, index)=>{
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


/*
    <article class="post">
    <h2>Titulo del Articulo</h3>

        <div class="badget">
            <label>Ver más</label>
        </div>

     
        <span>Publicado el martes 15 de diciembre del 2020</span>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perspiciatis impedit,
            molestiae ut placeat corrupti doloremque possimus voluptas, cumque voluptatum et eligendi
            fugit nobis. Mollitia neque dolor quasi impedit eos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, perspiciatis impedit,
            molestiae ut placeat corrupti doloremque possimus voluptas, cumque voluptatum et eligendi

        </p>
    </article>
*/
    

});

