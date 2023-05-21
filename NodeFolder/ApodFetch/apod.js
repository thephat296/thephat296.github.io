$(document).ready(function () {
  $("#loader").hide();
  $("#view_button").click(getAPOD);
});
function getAPOD() {
  $("#loader").show();
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=IdVHUxSca8QkQTefVJCiAYq3gti3voLfzISYKyVa&date=" +
      $("#date").val()
  )
    .then((response) => response.json())
    .then((data) => {
      $("#loader").hide();
      showInfo(data);
    })
    .catch((error) => {
      $("#loader").hide();
      noInfo(error);
    });
}

function showInfo(data) {
  $("#pic").attr("src", data.url);
  $(".apod-title").text(data.title);
}
function noInfo(error) {
  alert(error.responseText);
}
