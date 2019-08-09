$(document).ready(function () {


    $('#userform').submit(function () {
        event.preventDefault()
        let text = $('#userword').val()
        let accessToken = localStorage.getItem('accessToken')
        // console.log(text)
        $.ajax({
            url: 'http://localhost:3000/beers/recommended',
            method: 'POST',
            data: {
                text,
                accessToken 
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
                    let template = `<div class="thread" style="border: 1px solid grey; padding: 0 5px;">
                                    <p class='idbeers'>${beer.id}</p>                
                                    <h1 class="title"> ${beer.name} </h1>
                                    <h3>alcohol level : ${beer.abv}<h3>
                                    <h3>${beer.tagline}</h3>
                                    <p> ${beer.description || 'No Description'} </p>
                                    
                                               
                                    </div>`
                    $('#list-beers').append(template)
                }








                // console.log(data)
            })
            .fail(function (err) {
                console.log(err)
            })
    })


});



