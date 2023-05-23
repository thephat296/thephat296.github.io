$(document).ready(function () {
  $("#lookup-btn").click(getDefinitions);
});

function getDefinitions() {
  var word = $("#word-input").val().trim();
  if (word == "") return;
  $.ajax({
    url: "http://localhost:3000",
    type: "GET",
    data: { word },
    dataType: "json",
    success: displayDefinitions,
    error: noDefinition,
  });
}

function displayDefinitions(definitions) {
  var $definitionsDiv = $("#definitions");
  $definitionsDiv.empty();
  if (definitions.length > 0) {
    for (var i = 0; i < definitions.length; i++) {
      $definitionsDiv.append(
        `<p> ${i + 1}(${definitions[i].wordtype}) :: ${definitions[i].definition}</p><br/>`
      );
    }
  } else {
    $definitionsDiv.append("<p>No definitions found.</p>");
  }
}

function noDefinition(error) {
  alert("Internal Server Error!");
}
