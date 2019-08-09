$(document).ready(function () {
    $('#userform').submit(function(){
        event.preventDefault()
        let text = $('#userword').val()
    
        $.ajax({
            url: 'http://localhost:3000/beers/recommended',
            method : 'POST',
            data : {
                text
            }
        })
        .done(function(data){
            console.log(data)
        })
        .fail(function(err){
            console.log(err)
        })
    })


    $('.idbeers').on('click',function(){
        let id = $(this).text()
        event.preventDefault()
        $.ajax({
            
        })

    })


  });
  
  
  
