$(document).ready(function () {
  $("#loader").hide();
  $(document)
    .ajaxStart(() => $("#loader").show())
    .ajaxStop(() => $("#loader").hide());
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
  if (definitions.length == 0) {
    return $definitionsDiv.append("<p>No definitions found.</p>");
  }
  definitions.forEach((definition, index) => {
    $definitionsDiv.append(
      `<p> ${index + 1}(${definition.wordtype}) :: ${
        definition.definition
      }</p><br/>`
    );
  });
}

function noDefinition(error) {
  console.log("No Definition: " + error);
  alert("Internal Server Error!");
}
