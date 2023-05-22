$(document).ready(function () {
  $("#lookupBtn").click(function () {
    var word = $("#wordInput").val();
    if (word.trim() !== "") {
      $.ajax({
        url: "/lookup",
        type: "POST",
        data: { word: word },
        success: function (response) {
          displayDefinitions(response);
        },
        error: function (error) {
          console.log("Error:", error);
        },
      });
    }
  });

  function displayDefinitions(definitions) {
    var $definitionsDiv = $("#definitions");
    $definitionsDiv.empty();
    if (definitions.length > 0) {
      for (var i = 0; i < definitions.length; i++) {
        var definition = definitions[i];
        $definitionsDiv.append("<p>" + definition + "</p>");
      }
    } else {
      $definitionsDiv.append("<p>No definitions found.</p>");
    }
  }
});
