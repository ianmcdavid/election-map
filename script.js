// Create Politican Object
var nominatePolitician = function(name, partyColor)
{
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  
   politician.getVoteTally = function()
    {
      this.voteTally = 0;
  
        for (var i =0; i < this.electionResults.length; i++) 
        {
          this.voteTally = this.voteTally + this.electionResults[i];
        }
    };
  return politician;
};
//Assigning colors to each politician's party... ironically
var democratic = nominatePolitician("Joe Biden", [132, 17, 11]);
var conartist = nominatePolitician("Conald Dumps", [245, 141, 136]);

//Election Results Array
democratic.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
conartist.electionResults = [4, 2, 4, 4, 2, 3, 3, 1, 2, 5, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 4, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 7, 3, 1, 2, 1, 2, 3, 1];
// Three States messed up, had to change their votes and California went to Mr. Dumps somehow...
democratic.electionResults[9] = 1;
democratic.electionResults[4] = 1;
democratic.electionResults[43] = 17;
conartist.electionResults[9] = 28;
conartist.electionResults[4] = 38;
conartist.electionResults[43] = 27;

// Function for declaring winner of each State
var setStateResults = function(state)
    {
      theStates[state].winner = null;
      
      if (democratic.electionResults[state] > conartist.electionResults[state])
        {
          theStates[state].winner = democratic;
        } else if 
          (democratic.electionResults[state] < conartist.electionResults[state])
        {  
          theStates[state].winner = conartist;
        }
      var stateWinner = theStates[state].winner;
      
      if (stateWinner !== null)
        {
          theStates[state].rgbColor = stateWinner.partyColor;
        } else {theStates[state].rgbColor = [11, 32, 57];
       }

       //Populating the State Vote Tallies in table
      var stateInfoTable = document.getElementById('stateResults');
      var header = stateInfoTable.children[0].children[0];
      var stateName = header.children[0];
      var abbreviation = header.children[1];
      var row1 = stateInfoTable.children[1].children[0];
      var name1 = row1.children[0];
      var results1 = row1.children[1];
      var row2 = stateInfoTable.children[1].children[1];
      var name2 = row2.children[0];
      var results2 = row2.children[1];
      var row3 = stateInfoTable.children[1].children[2];
      var theWinner = row3.children[1];
      
      stateName.innerText = theStates[state].nameFull;
      abbreviation.innerText = theStates[state].nameAbbrev;
      name1.innerText = democratic.name;
      results1.innerText = democratic.electionResults[state];
      name2.innerText = conartist.name;
      results2.innerText = conartist.electionResults[state];

      if (theStates[state].winner === null)
      {
      theWinner.innerText = "Tie";
      } else {
      theWinner.innerText = theStates[state].winner.name;
        
      }

    }

democratic.getVoteTally();
conartist.getVoteTally();

//Calculating winner of election
var winner = "Billionaires as usual";
var declareWinner = function()
{
 if (democratic.voteTally > conartist.voteTally)
   {
     winner = democratic.name + ", " + "America and the World!";
   } else if (democratic.voteTally < conartist.voteTally)
   {
     winner = conartist.name + " and " + "Vladimir Putin"
   } else {
     winner = "Civil War"
   }
}

declareWinner();

//Populates top table
var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];

row.children[0].innerText = democratic.name;
row.children[1].innerText = democratic.voteTally;
row.children[2].innerText = conartist.name;
row.children[3].innerText = conartist.voteTally;
row.children[5].innerText = winner;


