// let count=0;
// let table = document.getElementById("table");
// var cells = table.getElementsByTagName("td");
// function selectedRow(){           
//     for(var i = 0; i < table.rows.length; i++)
//     {
//         for(var j=0;j<3;j++){
//         table.rows[i].cells[j].onclick = function()
//         {
//             count++;
//             if(count%2!=0)
//             this.classList.toggle("player_selected");
//             else
//             this.classList.toggle("computer_selected");
//         };
//     }
//     }
// }
// //selectedRow();

// function win(board) {
//     //determines if a player has won, returns 0 otherwise.
//     var wins= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//     var i;
//     for(i = 0; i < 8; ++i) {
//         if(board[wins[i][0]] != 0 &&
//            board[wins[i][0]] == board[wins[i][1]] &&
//            board[wins[i][0]] == board[wins[i][2]])
//             return board[wins[i][2]];
//     }
//     return 0;
// }
// var time1;
// function minimax(board,player) {
//     //How is the position like for player (their turn) on board?
//     var winner = win(board);
//     if(winner != 0) return winner*player;
//     var move = -1;
//     var score = -2;//Losing moves are preferred to no move
//     var i;
//     for(i = 0; i < 9; ++i) {//For all moves,
//         if(board[i] == 0) {//If legal,
//             board[i] = player;//Try the move
//             var thisScore = -minimax(board, player*-1);
//             if(thisScore > score) {
//                 score = thisScore;
//                 move = i;
//             }//Pick the one that's worst for the opponent
//             board[i] = 0;//Reset board after try
//         }
//     }
//     if(move == -1) return 0;
//     return score;
// }

// function computerMove(board){
//     var move = -1;
//     var score = -2;
//     var i;
//     for(i = 0; i < 9; ++i) {
//         if(board[i] == 0) {
//             board[i] = 1;
//             var tempScore = -minimax(board, -1);
//             board[i] = 0;
//             if(tempScore > score) {
//                 score = tempScore;
//                 move = i;
//             }
//         }
//     }
//     //returns a score based on minimax tree at a given node.
//     console.log("move",move);
//     var rowidx=Math.floor(move/3);
//     var colidx=move%3;
//     table.rows[rowidx].cells[colidx].classList.toggle("computer_selected");
//     board[move] = 1;
// }

// let flag=0;

// function playerMove(board){
//     var move = 8;
//     var rowIndex=-1;
//     var cellIndex=-1;
//     for(var i = 0; i < 9; i++){
//         // Cell Object
//         var cell = cells[i];
//         // Track with onclick
//         // rowIndex=-1;
//         // cellIndex=-1;
//         cell.onclick = function(){
//             // Track my location;
//             // example: I'm in table row 1 and I'm the 2th cell of this row
//             cellIndex  = this.cellIndex;  
//             rowIndex = this.parentNode.rowIndex;
//             table.rows[rowIndex].cells[cellIndex].classList.toggle("player_selected");
//             console.log("rowidx",rowIndex,"colidx",cellIndex)
//             board[rowIndex*cellIndex-1]=-1;
//         }
//         // if(rowIndex!=-1) 
//         // break;
//     }
//     console.log("move",move);
//     //console.log("rowidx",rowIndex,"colidx",cellIndex)
//     //table.rows[rowIndex].cells[cellIndex].classList.toggle("player_selected");
//     board[move] = -1;
//     //return 0;
// }
// function print_data(x){
//     console.log(x);
// }
// function main(){
//     //computer first therefore player=2 else player=1
//     var board= [0,0,0,0,0,0,0,0,0];
//     var player=2;
//     for(var turn = 0; turn < 9 && win(board) === 0; ++turn) {
//         if((turn+player) % 2 === 0){
//             console.log("computer turn");
//             //computerMove(board);
//             computerMove(board);
//            //print_data(1024);
//         }
//         else {
//             console.log("player turn");
//             //print_data(1024)
//             //const intervalID = setInterval(playerMove(board),1000);
//             playerMove(board);
//         }
//     }
//     var k=win(board);
//     if(k===0) {
//         alert("draw");
//     }
//     else if(k==1){
//            alert("You lose.\n");
//     }
//     else{
//         alert("You win. Inconceivable!\n");
//     }
// }
// main();



// let count=0;
// let table = document.getElementById("table");
// var cells = table.getElementsByTagName("td");
// var board;
// function selectedRow(){           
//     for(var i = 0; i < table.rows.length; i++)
//     {
//         for(var j=0;j<3;j++){
//         table.rows[i].cells[j].onclick = function()
//         {
//             count++;
//             if(count%2!=0)
//             this.classList.toggle("player_selected");
//             else
//             this.classList.toggle("computer_selected");
//         };
//     }
//     }
// }
// //selectedRow();

// function win(board) {
//     //determines if a player has won, returns 0 otherwise.
//     var wins= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//     var i;
//     for(i = 0; i < 8; ++i) {
//         if(board[wins[i][0]] != 0 &&
//            board[wins[i][0]] == board[wins[i][1]] &&
//            board[wins[i][0]] == board[wins[i][2]])
//             return board[wins[i][2]];
//     }
//     return 0;
// }
// function minimax(board,player) {
//     //how is the position like for player (their turn) on board?
//     var winner = win(board);
//     if(winner != 0) return winner*player;
//     var move = -1;
//     var score = -2;//losing moves are preferred to no move
//     var i;
//     for(i = 0; i < 9; ++i) {//for all moves,
//         if(board[i] == 0) {//if legal,
//             board[i] = player;//try the move
//             var thisScore = -minimax(board, player*-1);
//             if(thisScore > score) {
//                 score = thisScore;
//                 move = i;
//             }//pick the one that's worst for the opponent
//             board[i] = 0;//reset board after try
//         }
//     }
//     if(move == -1) return 0;
//     return score;
// }

// function computerMove(board){
//     var move = -1;
//     var score = -2;
//     var i;
//     for(i = 0; i < 9; ++i){
//         if(board[i] == 0){
//             board[i] = 1;
//             var tempScore = -minimax(board, -1);
//             board[i] = 0;
//             if(tempScore > score) {
//                 score = tempScore;
//                 move = i;
//             }
//         }
//     }
//     //returns a score based on minimax tree at a given node.
//     console.log("move",move);
//     return move;
// }

// let flag=0;
// function wait(ms){
//     var start = new Date().getTime();
//     var end = start;
//     while(end < start + ms) {
//       end = new Date().getTime();
//    }
//  }
// function playerMove(board){
//     var move = 0;
//     // var cell,rowIndex=-1,cellIndex=-1;
//     // let i=0;
//     // for(i=0;i<9;i++){
//     //     cell=cells[i];
//     //     cell.onclick=function(){
//     //         // track my location;
//     //         // example: I'm in table row 2 and I'm the 2th cell of this row
//     //     cellIndex=this.cellIndex;
//     //     rowIndex=this.parentNode.rowIndex;
//     //     console.log("rowidx",rowIndex,"colidx",cellIndex);
//     //     table.rows[rowIndex].cells[cellIndex].classList.toggle("player_selected");
//     //     board[rowIndex*cellIndex-1]=-1;
//     //     }
//     // }
//     $(document).on("click", "#table td", function(e) {
//         var data = $(this).attr('id');
//         move=data;
//         console.log("move",move);
//         $(this).css("background-color","black");
//         board[move] = -1;
//    }); 
// }
// function main(){
//     //computer first therefore player=2 else player=1
//     board= [0,0,0,0,0,0,0,0,0];
//     var player=2;
//     for(var turn = 0; turn < 9 && win(board) === 0; ++turn) {
//         if((turn+player) % 2 === 0){
//             console.log("computer turn");
//             var move=computerMove(board);
//             var rowidx=Math.floor(move/3);
//             var colidx=move%3;
//             table.rows[rowidx].cells[colidx].classList.toggle("computer_selected");
//             board[move] = 1;
             
//         // console.log("computer turn");
//         // setTimeout(function(){var move1=computerMove(board);
//         //     var rowidx=Math.floor(move1/3);
//         //     var colidx=move1%3;
//         //     table.rows[rowidx].cells[colidx].classList.toggle("computer_selected");
//         //     board[move1] = 1;},3000);
//         }
//         else {
//             playerMove(board);
//             console.log("player turn");
//         }
//     }
//     var k=win(board);
//     if(k===0) {
//         alert("draw");
//     }
//     else if(k==1){
//            alert("You lose.\n");
//     }
//     else{
//         alert("You win. Inconceivable!\n");
//     }
// }
// main();

let count=0;
let table = document.getElementById("table");
var cells = table.getElementsByTagName("td");
var board;
function selectedRow(){           
    for(var i = 0; i < table.rows.length; i++)
    {
        for(var j=0;j<3;j++){
        table.rows[i].cells[j].onclick = function()
        {
            count++;
            if(count%2!=0)
            this.classList.toggle("player_selected");
            else
            this.classList.toggle("computer_selected");
        };
    }
    }
}
//selectedRow();

function win(board) {
    //determines if a player has won, returns 0 otherwise.
    var wins= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    var i;
    for(i = 0; i < 8; ++i) {
        if(board[wins[i][0]] != 0 &&
           board[wins[i][0]] == board[wins[i][1]] &&
           board[wins[i][0]] == board[wins[i][2]])
            return board[wins[i][2]];
    }
    return 0;
}
function minimax(board,player) {
    //how is the position like for player (their turn) on board?
    var winner = win(board);
    if(winner != 0) return winner*player;
    var move = -1;
    var score = -2;//losing moves are preferred to no move
    var i;
    for(i = 0; i < 9; ++i) {//for all moves,
        if(board[i] == 0) {//if legal,
            board[i] = player;//try the move
            var thisScore = -minimax(board, player*-1);
            if(thisScore > score) {
                score = thisScore;
                move = i;
            }//pick the one that's worst for the opponent
            board[i] = 0;//reset board after try
        }
    }
    if(move == -1) return 0;
    return score;
}

function computerMove(board){
    var move = -1;
    var score = -2;
    var i;
    for(i = 0; i < 9; ++i){
        if(board[i] == 0){
            board[i] = 1;
            var tempScore = -minimax(board, -1);
            board[i] = 0;
            if(tempScore > score) {
                score = tempScore;
                move = i;
            }
        }
    }
    //returns a score based on minimax tree at a given node.
    console.log("move",move);
    return move;
}

let flag=0;
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
function playerMove(board){
    var move = 0;
    $(document).on("click", "#table td", function(e) {
        var data = $(this).attr('id');
        move=data;
        console.log("move",move);
        //$(this).css("background-color","black");
        $(this).text("O");
        board[move] = -1;
      if(move1!=-1){
        var move1= computerMove(board);
        var rowidx=Math.floor(move1/3);
        var colidx=move1%3;
        var ele=document.getElementById(move1);
       $(ele).text("X"); 
        //table.rows[rowidx].cells[colidx].classList.toggle("computer_selected");
            board[move1] = 1;
        var k= win(board);
        var count1=0;
        for(var i=0;i<9;i++){
          if(board[i]!=0)
            count1++;
        }
        if(count1==9)
          alert("Draw");
        else if(k!=0){
          if(k==1){
           alert("You lose.\n");
    }
    else{
        alert("You win. Inconceivable!\n");
    }
        }
        else{
          if(count==9)
            alert("Draw");
        }
      }
   }); 
}
function main(){
    //computer first therefore player=2 else player=1
    board= [0,0,0,0,0,0,0,0,0];
    var player=2;
    playerMove(board);
}
main();