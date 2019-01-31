let audio = new Audio("speed-metal.mp3");
    

    let twoWordNames = [["Immortal ", "Ancient ", "Brutal ", "Icy ", "Malevolant ", "Absolute ", "Black ", "Epic ", "Dark ", "Divine ", "Unholy ", "Catatonic ", "Sacreligious ", "Burning ", "Ritualistic ","Sacrificial ", "Killer ","Damned ","Condemned ","Death ",,"Rotting ","Embracing ","Eradicating ","Existential ","Perilous ", "Bloody ", "Hellish ", "Hated "],
     ["Dragons ", "Maruder ", "Blood ", "Vengeance ", "Brood ", "Scar ", "Witch ", "Lord ", "Guardians ", "Beast ","Fire ", "Kings ", "Wizard ", "Relic ", "Remnant ", "Abomination ", "Murder ", "Killer ", "Death ", "Flesh ", "Undead ", "Tooth ", "Grime ", "Hunt ", "Messiah ", "Power ", "Fear ", "Decay ", "Waste ", "Nemesis ", "Brutality ", "Anubis ", "Hounds ", "Hell ", "Riders ", "Autopsy ", "Inquisition ", "Lobotomy ", "Cannibals ","Dead ", "Silence ", "Illusion ","Legion ","Axe ", "Hatchet ", "Drill ", "Rage ","Violator ", "Redemption ","Guts "]];

   let oneWordNames = ["Immortal ","Malevolance ","Ted Bundy " , "Anubis ", "Hatchet ", "Hellhound ", "Redemmer ", "Inquisitor ", "Lobotomy ", "Nemesis ", "Martyr "];

    function clearBox(elementID) {
      document.getElementById("results").innerHTML = "";
    }


   $("#two-words").on("click", function (event) {
    $("#result-dump").html("");
      audio.play();
      for (let i = 0; i < twoWordNames.length; i++) {
        for (let j = 0; j < twoWordNames[i].length; j++) {
          let result = twoWordNames[j][Math.floor(Math.random() * twoWordNames[j].length)]
          console.log(result);
          $("#result-dump").append(`<div class="jumbotron jumbotron-fluid rakkasFont bg-dark text-danger" id="results">
          <div class="container">
            <h1 class="display-4">${result}</h1>
            <p class="lead"></p>
          </div>
        </div>`)
        }
      }

      
    });


   $("#one-word").on("click", function (event) {
    $("#result-dump").html("");
      audio.play();
     
      
          let oneResult = oneWordNames[Math.floor(Math.random() * oneWordNames.length)]
          console.log(oneResult);
          $("#result-dump").append(`<div class="jumbotron jumbotron-fluid rakkasFont bg-dark text-danger" id="results">
          <div class="container">
            <h1 class="display-4">${oneResult}</h1>
            <p class="lead"></p>
          </div>
        </div>`)
      
      
    });


    $("#clear").on("click", function () {
      location.reload();
    });

