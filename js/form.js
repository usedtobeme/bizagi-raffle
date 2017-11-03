document.addEventListener("DOMContentLoaded", function(event) {
  var form = document.getElementById('register');
  var code = document.getElementById('code');

  code.onchange = function(e) {
    firebase.database().ref('/valid_codes' + e.target.value).once('value').then(function(snap) {
      if (!snap.val()) {
        alert('The code you are using is not invalid.');
      }
    });
  };

  form.onsubmit = function(e) {
    e.preventDefault();
    axios.post('https://us-central1-bizagiraffle.cloudfunctions.net/addEntrie')
      .then(function(response) {
        console.log(response);
      })
  }
});
