/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>

char gridChar(int i) {
    switch(i) {
        case -1:
            return 'X';
        case 0:
            return ' ';
        case 1:
            return 'O';
    }
}

void draw(int b[25]) {
    printf(" %c | %c | %c | %c | %c\n",gridChar(b[0]),gridChar(b[1]),gridChar(b[2]),gridChar(b[3]),gridChar(b[4]));
    printf("---+---+---+---+---\n");
    printf(" %c | %c | %c | %c | %c\n",gridChar(b[5]),gridChar(b[6]),gridChar(b[7]),gridChar(b[8]),gridChar(b[9]));
    printf("---+---+---+---+---\n");
    printf(" %c | %c | %c | %c | %c\n",gridChar(b[10]),gridChar(b[11]),gridChar(b[12]),gridChar(b[13]),gridChar(b[14]));
    printf("---+---+---+---+---\n");
    printf(" %c | %c | %c | %c | %c\n",gridChar(b[15]),gridChar(b[16]),gridChar(b[17]),gridChar(b[18]),gridChar(b[19]));
    printf("---+---+---+---+---\n");
    printf(" %c | %c | %c | %c | %c\n",gridChar(b[20]),gridChar(b[21]),gridChar(b[22]),gridChar(b[23]),gridChar(b[24]));
    
}

int win(const int board[25]) {
    //determines if a player has won, returns 0 otherwise.
    unsigned wins[24][4] = {{0,6,12,18},{6,12,18,19},{1,7,13,19},{5,11,17,22},{0,1,2,3},{1,2,3,4},{5,6,7,8},{6,7,8,9},
        {10,11,12,13},{11,12,13,14},{15,16,17,18},{16,17,18,19},{20,21,22,23},{21,22,23,24},{0,5,6,10},{5,10,15,20},{1,6,11,16},{6,11,16,21}
        ,{2,7,12,17},{7,12,17,22},{3,8,13,18},{8,13,18,23},{4,9,14,19},{9,14,19,23}};
    int i;
    for(i = 0; i < 24; ++i) {
        if(board[wins[i][0]] != 0 &&
           board[wins[i][0]] == board[wins[i][1]] &&
           board[wins[i][0]] == board[wins[i][2]] && board[wins[i][0]] == board[wins[i][3]] && board[wins[i][0]] == board[wins[i][4]])
            return board[wins[i][2]];
    }
    return 0;
}

int minimax(int board[25], int player) {
    //How is the position like for player (their turn) on board?
    int winner = win(board);
    if(winner != 0) return winner*player;

    int move = -1;
    int score = -2;//Losing moves are preferred to no move
    int i;
    for(i = 0; i < 25; ++i) {//For all moves,
        if(board[i] == 0) {//If legal,
            board[i] = player;//Try the move
            int thisScore = -minimax(board, player*-1);
            if(thisScore > score) {
                score = thisScore;
                move = i;
            }//Pick the one that's worst for the opponent
            board[i] = 0;//Reset board after try
        }
    }
    if(move == -1) return 0;
    return score;
}

void computerMove(int board[25]) {
    int move = -1;
    int score = -2;
    int i;
    for(i = 0; i < 25; ++i) {
        if(board[i] == 0) {
            board[i] = 1;
            int tempScore = -minimax(board, -1);
            board[i] = 0;
            if(tempScore > score) {
                score = tempScore;
                move = i;
            }
        }
    }
    //returns a score based on minimax tree at a given node.
    board[move] = 1;
}

void playerMove(int board[25]) {
    int move = 0;
    do {
        printf("\nInput move ([0..24]): ");
        scanf("%d", &move);
        printf("\n");
    } while (move >= 25 || move < 0 && board[move] == 0);
    board[move] = -1;
}

int main() {
    int board[25] = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
    //computer squares are 1, player squares are -1.
    printf("Computer: O, You: X\nPlay (1)st or (2)nd? ");
    int player=0;
    scanf("%d",&player);
    printf("\n");
    unsigned turn;
    for(turn = 0; turn < 25 && win(board) == 0; ++turn) {
        if((turn+player) % 2 == 0)
            computerMove(board);
        else {
            draw(board);
            playerMove(board);
        }
    }
    switch(win(board)) {
        case 0:
            printf("A draw. How droll.\n");
            break;
        case 1:
            draw(board);
            printf("You lose.\n");
            break;
        case -1:
            printf("You win. Inconceivable!\n");
            break;
    }
}
