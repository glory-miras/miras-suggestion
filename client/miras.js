$(document).ready(function () {


    $('#userform').submit(function () {
        event.preventDefault()

        let text = $('#userword').val()
        // let accessToken = localStorage.getItem('accessToken')
        // console.log(text)
        $.ajax({
            url: 'http://localhost:3000/beers/recommended',
            method: 'POST',
            data: {
                text 
            }
        })
            .done(function (data) {
                $('#emotion').empty()
                let emotions = data.emotion
                // let keys = Object.keys()
                // for (let i=0; )
                
                for (let emotion in emotions){
                    console.log(emotion)
                    let template  = `<p> ${emotion} : ${Math.round(emotions[emotion]*100)}%</p>`
                    $('#emotion').append(template)
                }

                $('#list-beers').empty()
                for (let beer of data.beers) {
                    let template = `<div class="card" style="width: 18rem;">    
              
                    <div class="card-body">
                      <h2 class="idbeers">${beer.id}</h2>
                      <h5 class="card-title">${beer.name}</h5>

                      <p class="card-text">${beer.description}</p>
              
                     
              
                    </div>
              
                    </div>`
                    $('#list-beers').append(template)
                }


                $('.idbeers').on('click',function(){
                    console.log('CLICK')
                    let id = $(this).text()
                    $.ajax({
                        url:`http://localhost:3000/beers?id=${id}`,
                        method: 'GET'
                    })
                    .done(data => {
                        $('#side-right').empty()
                       
                        data.beers.forEach(beer => {
                            console.log(data)
                            $("#side-right").append(`
                    
                            <div class="card" style="width: 18rem;">
                    
                            <img src="${beer.image_url}" class="card-img-top" alt="...">
                    
                            <div class="card-body">
                    
                            <h5 class="card-title">${beer.name}</h5>
                            <p class="card-text"> ${beer.tagline}</p>
                            <p class="card-text">${beer.description}</p>
                            <p class="card-text"> ABV : ${beer.abv}</p>
                            <p class="card-text"> PH : ${beer.ph}</p>
                            <p class="card-text"> Food Pairing : ${beer.food_pairing}</p>
                            <p class="card-text"> First Brewed : ${beer.first_brewed}</p>
                    
                            
                    
                            </div>
                    
                            </div>
              
                    `)
              
                  })
                    })
                    .fail(err => {
                        console.log(err)
                    })
                })
            })
            .fail(function (err) {
                console.log(err)
            })
    })

    

   


});



