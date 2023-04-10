let count=0;
let table = document.getElementById("table");
var cells = table.getElementsByTagName("td");
var mSize = 5;
var mBoard = new Array(5);
var lastMove;
var position,dummy;
var depth;
var moves;
var today = new Date();
var score,mtimepassed;
var mBestMove=0;
for(var i=0;i<5;i++){
    mBoard[i]=['_','_','_','_','_'];
}
function playerMove(){
    $(document).on("click", "#table td", function(e) {
        var data = $(this).attr('id');
        var player_move=data;
        console.log("move",player_move);
        var rowidx=Math.floor(player_move/5);
        var colidx=player_move%5;
        position=player_move;
        mBoard[rowidx][colidx]='O';
        lastMove=position;
        var computer_move=19;
        $(this).text("O");
        computer_move=iterativeDeepSearch();
        console.log("computer move");
        console.log(computer_move);
        var rowidx=Math.floor(computer_move/5);
        var colidx=computer_move%5;
        var ele=document.getElementById(computer_move);
       $(ele).text("X");
       mBoard[rowidx][colidx]='X';
       var gameResult1=checkGameState();
       if(gameResult1=='notEnd')
       playerMove();
       else if(gameResult1=='Tie')
       alert("its draw");
       else if(gameResult1=='X')
       console.log("computer won");
       else
       console.log("You won");
    });
}

function checkIfRubricEmpty(mBoard,position){
    var rowidx=Math.floor(position/5);
    var colidx=position%5;
    if(mBoard[rowidx][colidx]=='_')
    return true;
    return false;
}

function generate(){
    var possibleMoves=[];
    for(var i=0;i<25;i++){
        if(checkIfRubricEmpty(mBoard,i)){
            possibleMoves.push(i);
        }
    }
    console.log(possibleMoves);
    return possibleMoves;
}

function calculateLine(line){
    var xSum=0,oSum=0,EmptySum=0;
    var len1=line.length;
    for(var i=0;i<len1;i++){
        if(line[i]=='X')
        xSum++;
        else if(line[i]=='O')
        oSum++;
        else
        EmptySum++;
    }
    return [oSum,xSum,EmptySum];
}

function getScoreLine(line){
    score=0;
    var oSum,xSum,EmptySum;
    var result;
    result=calculateLine(line);
    oSum=result[0];
    xSum=result[1];
    EmptySum=result[2];
    if(xSum==0 && oSum!=0){
        if(oSum==5){
            score=score+11**(oSum-1);
        }
        score=score+10**(oSum-1);
    }
    if(oSum==0 && xSum!=0){
        score=score-(10**(xSum-1));
    }
    EmptySum=result[2];
    return score;
}

function getRow(mBoard,position_idx){
    return mBoard[position_idx];
}
function getColumn(mBoard,position_idx){
    var col=[];
    for(var i=0;i<5;i++){
        col.push(mBoard[position_idx][i]);
    }
    return col;
}
function getDiagonal(mBoard){
    var diagonal1=[];
    for(var i=0;i<5;i++){
        diagonal1.push(mBoard[i][i]);
    }
    var diagonal2=[];
    var j=0;
    for(var i=4;i>=0;i--){
        diagonal2.push(mBoard[i][j]);
        j++;
    }
    return [diagonal1,diagonal2];
}

function evaluate(){
    var score=0;
    for(var i=0;i<5;i++){
        var get_row=getRow(mBoard,i);
        score=score+getScoreLine(get_row);
        var get_column=getColumn(mBoard,i);
        score=score+getScoreLine(get_column);
    }
    var diagonals=getDiagonal(mBoard);
    for(var i=0;i<2;i++){
        score=score+getScoreLine(diagonals[i]);
    }
    return score;
}
function all_same(row_col,turn){
    var rowlen=row_col.length;
    for(var i=0;i<rowlen;i++){
        if(row_col[i]!=turn)
        return false;
    }
    return true;
}
function checkForWin(player){
    var turn='';
    if(player=='X')//x
    turn='X';
    else 
    turn='O';
    var row_idx,col_idx;
    row_idx=Math.floor(lastMove/5);
    col_idx=lastMove%5;
    var row_req=getRow(mBoard,row_idx);
    var col_req=getRow(mBoard,col_idx);
    if(all_same(row_req,turn)|| all_same(col_req,turn)){
        return true;
    }
    //code for diagonal checking
    return false;
}
function checkForTie(){
    for(var i=0;i<25;i++)
    {
        if(checkIfRubricEmpty(mBoard,i))
        return false;
    }
    return true;
}
function checkGameState(){
    if(checkForWin('X'))//x
    return 'X';
    if(checkForWin('O'))
    return 'O';
    if(checkForTie())
    return 'Tie';
    return 'notEnd';
}
function drawEmpty(position_idx){
    var rowidx=Math.floor(position_idx/5);
    var colidx=position_idx%5;
    mBoard[rowidx][colidx]='_';
    return mBoard;
}
function drawO(position_idx){
    var rowidx=Math.floor(position_idx/5);
    var colidx=position_idx%5;
    mBoard[rowidx][colidx]='O';
    return mBoard;
}
function drawX(position_idx){
    var rowidx=Math.floor(position_idx/5);
    var colidx=position_idx%5;
    mBoard[rowidx][colidx]='X';
    return mBoard;
}
function minmax2(depth,isMax,alpha,beta,start_time,timeLimit){
    var moves=generate();
    var score=evaluate();
    position=-1;
    console.log("moves",moves);
    console.log("score",score);
    var today1=Date.now();
    if((today1-start_time)>=timeLimit){
        mtimepassed=true;
    }
    var moves_len=moves.length;
    if(moves_len==0 || depth==0 || mtimepassed){
        gameResult = checkGameState();
        if(gameResult=='X')
        return [-1*(10**(mSize+1)),position];
        else if (gameResult=='O')
        return[(10**(mSize+1)),position];
        else if(gameResult=='Tie')
        return [0,position];
        else
        return [score,position];
    }
    if (isMax){
        var len=moves.length;
        for(var i=0;i<len;i++){
            mBoard=drawO(moves[i]);
            var result;
            result= minmax2(depth-1,!isMax,alpha,beta,start_time,timeLimit);
            score=result[0];
            var dummy=result[1];
            if(score>alpha){
                alpha=score;
                position=moves[i];
                mBestMove=moves[i];
            }
            mBoard=drawEmpty(moves[i]);
            if(beta<=alpha)
            break;
        }
        return [alpha,position];
    }
    else{
        var len=moves.length;
        for(var i=0;i<len;i++){
            mBoard=drawX(moves[i]);
            var result;
            result = minmax2(depth-1,!isMax,alpha,beta,start_time,timeLimit);
            score=result[0];
            var dummy=result[1];
            if(score<beta){
                beta=score;
                position=moves[i];
                mBestMove=moves[i];
                mBoard=drawEmpty(moves[i]);
            }
            if(alpha>=beta)
            break;
        }
        return [beta,position];
    }
}

function iterativeDeepSearch(){
    var startTime=Date.now();
    console.log("startime");
    console.log(startTime);
    var endTime=startTime + 500;
    depth=1;
    console.log("endtime");
    console.log(endTime);
    var best;
    position=-1;
    mtimepassed=false;
    var currentTime=Date.now();
    while(endTime>currentTime){
        currentTime=Date.now();
        console.log("current time");
        console.log(currentTime);
        console.log("diff between curr time and end time");
        console.log(endTime-currentTime);
        console.log("depth",depth);
        if(endTime<currentTime)
        break;
        var result=[];
        result=minmax2(depth,true,-10000000, 10000000,currentTime,endTime-currentTime);
        console.log("ids");
        console.log(result);
        best=result[0];
        position=result[1];
        depth=depth+1;
    }
    if(position==-1)
    position=mBestMove;
    return position;
}  
function start(){
        playerMove();
}

start();