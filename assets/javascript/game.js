
$(document).ready(function() {

    var randomNum = randomNumGen();
    var playerNumberMatch = 0;    
    var wins = 0;
    var losses = 0;
    var stones;
  
    
    function randomNumStones() {
      return {
        red: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "./assets/images/redRuby.jpg"
        },
        blue: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "./assets/images/blueSaphire.jpg"
        },
        green: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "./assets/images/greenEmerald.jpg"
        },
        black: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "./assets/images/blackDiamond.jpg"
        }
      };
    }
  
    
    function randomNumGen() {
      return Math.floor(Math.random() * 102) + 19;
    }
  
   
    function setGame() {
      yourMatchingNumber = 0;
      stones = randomNumStones();
      randomNum = randomNumGen();
      $("#random-number-area").text(randomNum);
    }
  
    
    function updateDom(didUserWin) {
      $("#victory").empty();
  
      if (didUserWin === true) {
        $("#victory").append($("<p>").text("Winner!!"));
        setGame();
        renderMatchingNumber();
      }
     
      else if (didUserWin === false) {
        $("#victory").append($("<p>").text("Loser!!"));
        setGame();
        renderMatchingNumber();
      }
  
      var wSpan = $("<span>").text(wins);
      var lSpan = $("<span>").text(losses);
  
      var pWins = $("<p>").text("Wins: ");
      var pLosses = $("<p>").text("Losses: ");
  
      pWins.append(wSpan);
      pLosses.append(lSpan);
  
      $("#victory").append(pWins);
      $("#victory").append(pLosses);
    }
  
    
    function renderStones() {
      for (var key in stones) {
        var stoneDiv = $("<div class='stones-button' data-name='" + key + "'>");
        var stoneImg = $("<img alt='image' class='stone-img'>").attr("src", stones[key].imageUrl);
        stoneDiv.append(stoneImg);
        $("#stone-area").append(stoneDiv);
      }
    }
  
    function updateMatchingNumber(stone) {
      yourMatchingNumber += stones[stone.attr("data-name")].points;
    }
  
    function renderMatchingNumber() {
      var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
      $("#score-area").html();
      $("#score-area").html(scoreNumDiv);
    }
  
    setGame();
    updateDom();
    renderStones();
    renderMatchingNumber();
  
    $(".stones-button").on("click", function(event) {
      updateMatchingNumber($(this));
      renderMatchingNumber();
  
      if (yourMatchingNumber === randomNum) {
        wins++;
        setGame();
        updateDom(true);
      }
      else if (yourMatchingNumber > randomNum) {
        losses++;
        setGame();
        updateDom(false);
      }
    });
  
  });
  