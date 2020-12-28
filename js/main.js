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

    //Selector de tema

    $('#to-green').click(function(){
        $('#theme').attr('href','styles/green.css');
    });

    $('#to-blue').click(function(){
        $('#theme').attr('href','styles/blue.css');
    });

    $('#to-red').click(function(){
        $('#theme').attr('href','styles/red.css');
    })


    //Scroll show event function
   $(window).scroll(function(e){

    var scrollPercent = 100 * $(window).scrollTop()/($(document).height() - $(window).height());
    console.log(scrollPercent +'%');

     
        
       if(scrollPercent >= 50)
        $('#scrollTopButton').fadeIn("slow");
       else{
        $('#scrollTopButton').fadeOut("slow");
       }if(scrollPercent == 100){
           $('#scrollTopButton').css('top','75%');
       }else{
        $('#scrollTopButton').css('top','93%');
       }
      
       
    

        
   })

   
   $('#scrollTopButton').click(function(e){
       e.preventDefault();
       $('html, body').animate({
            scrollTop: 0
       },500);
   })

    
   
});

