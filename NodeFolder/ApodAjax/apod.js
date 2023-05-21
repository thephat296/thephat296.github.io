$(document).ready(function () {
  $("#loader").hide();
  $(document)
    .ajaxStart(() => $("#loader").show())
    .ajaxStop(() => $("#loader").hide());
  $("#view_button").click(getAPOD);
});
function getAPOD() {
  $.ajax({
    url: "https://api.nasa.gov/planetary/apod",
    type: "GET",
    data: {
      api_key: "IdVHUxSca8QkQTefVJCiAYq3gti3voLfzISYKyVa",
      date: $("#date").val(),
    },
    dataType: "json",
    success: showInfo,
    error: noInfo,
  });
}
function showInfo(data) {
  $("#pic").attr("src", data.url);
  $(".apod-title").text(data.title);
}
function noInfo(error) {
  alert(error.responseText);
}
