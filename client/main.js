function onSignIn(googleUser) {
    
    let idToken = googleUser.getAuthResponse().id_token

    axios
    .post(`http://localhost:3000/signin`, { idToken })
    .then(function({ data }) {
      

      localStorage.setItem('accessToken', data);
      
      
    })
    .catch(function(err) {
      console.log(err);
    });
}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut( ).then(function () {
        console.log('User signed out.');
    })
    .catch(err=>{
        console.log(err)
    });
}