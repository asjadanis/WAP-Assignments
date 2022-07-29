$(document).ready(function () {
  let gameWon = false;
  let gameStart = false;
  let gameOver = false;
  let gameReset = false;

  const intialStartPos = $("#start").position();

  function detectCollison(rectone, recttwo) {
    var r1 = $(rectone);
    var r2 = $(recttwo);

    var r1x = r1.offset().left;
    var r1w = r1.width();
    var r1y = r1.offset().top;
    var r1h = r1.height();

    var r2x = r2.offset().left;
    var r2w = r2.width();
    var r2y = r2.offset().top;
    var r2h = r2.height();

    if (
      r1y + r1h <= r2y ||
      r1y >= r2y + r2h ||
      r1x >= r2x + r2w ||
      r1x + r1w <= r2x
    ) {
      return false;
    } else {
      return true;
    }
  }

  $(".boundary").mouseover(function () {
    if (gameStart && !gameOver) {
      $(".boundary").addClass("youlose");
      gameOver = true;
      gameStat = false;
      return alert("You Lost!");
    }
  });

  $("#start").click(function () {
    if (gameOver) {
      $(".boundary").removeClass("youlose");
      $("#start").css("top", intialStartPos.top);
      $("#start").css("left", intialStartPos.left);
      gameOver = false;
      gameStart = false;
      return;
    }

    if (!gameStart) {
      gameStart = true;
    }
  });

  $("#maze").mousemove(function (e) {
    if (gameStart) {
      var relX = e.pageX - $(this).offset().left;
      var relY = e.pageY - $(this).offset().top - 16;

      if (!gameOver) {
        $("#start").css("top", relY);
        $("#start").css("left", relX);
      }

      const isWon = detectCollison("#start", "#end");
      const isLost1 = detectCollison("#start", "#boundary1");
      const isLost2 = detectCollison("#start", "#boundary2");
      const isLost3 = detectCollison("#start", "#boundary3");
      const isLost4 = detectCollison("#start", "#boundary4");
      const isLost5 = detectCollison("#start", "#boundary5");
      if (isWon && !gameOver) {
        gameOver = true;
        gameStart = false;
        return alert("You Won!");
      }
      if ((isLost1 || isLost2 || isLost3 || isLost4 || isLost5) && !gameOver) {
        gameOver = true;
        gameStart = false;
        $(".boundary").addClass("youlose");
        return alert("You Lost!");
      }
    }
  });
});
