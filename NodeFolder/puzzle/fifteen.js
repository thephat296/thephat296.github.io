$(document).ready(function () {
  var puzzlePieces = $("#puzzlearea div");
  var shuffleButton = $("#shufflebutton");
  var emptySpace = { top: 300, left: 300 };

  initializePuzzlePieces();

  puzzlePieces.each(function (index, piece) {
    $(piece).on("click", movePiece);
    $(piece).on("mouseover", highlightPiece);
    $(piece).on("mouseout", removeHighlight);
  });

  shuffleButton.on("click", shufflePuzzle);

  function initializePuzzlePieces() {
    puzzlePieces.each(function (index, piece) {
      var x = (index % 4) * 100;
      var y = Math.floor(index / 4) * 100;

      $(piece)
        .removeClass()
        .addClass("puzzlepiece")
        .css({
          left: x + "px",
          top: y + "px",
          backgroundPosition: -x + "px " + -y + "px",
        });
    });
  }

  function movePiece() {
    if (isMovablePiece($(this))) {
      var top = parseInt($(this).css("top"));
      var left = parseInt($(this).css("left"));

      $(this).css({ top: emptySpace.top + "px", left: emptySpace.left + "px" });
      emptySpace.top = top;
      emptySpace.left = left;
    }
  }

  function highlightPiece() {
    if (isMovablePiece($(this))) {
      $(this).addClass("movablepiece");
    }
  }

  function removeHighlight() {
    $(this).removeClass("movablepiece");
  }

  function shufflePuzzle() {
    for (var i = 0; i < 1000; i++) {
      var movablePieces = getMovablePieces();
      var randomIndex = Math.floor(Math.random() * movablePieces.length);
      var piece = movablePieces[randomIndex];
      movePiece.call(piece);
    }
  }

  function isMovablePiece(piece) {
    var top = parseInt(piece.css("top"));
    var left = parseInt(piece.css("left"));

    return (
      (top === emptySpace.top && Math.abs(left - emptySpace.left) === 100) ||
      (left === emptySpace.left && Math.abs(top - emptySpace.top) === 100)
    );
  }

  function getMovablePieces() {
    var movablePieces = [];

    puzzlePieces.each(function (index, piece) {
      if (isMovablePiece($(piece))) {
        movablePieces.push(piece);
      }
    });

    return movablePieces;
  }
});
