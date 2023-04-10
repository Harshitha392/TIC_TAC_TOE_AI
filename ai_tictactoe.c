//function to return true or false on having empty spaces
//function to check who is winning
//function to display a grid
//function to decide the best possible move
void display(){

}
int main(){
  printf("you :'O' computer:'X'");
  int choice;
  int state = {0, 0, 0}, {0, 0, 0}, {0, 0, 0};
  printf("do you want to play first or second:(1 or 2):");
  scanf("%d",&choice);
  int chance;
  for(chance=0;chance<3 &&;chance++){
   for(chance=0;chance<3;chance++){
   if(is_someone_winning==0){
   if(chance+choice)%2==0){
   computer_turn();
   }
   else{
    player_turn();
   }
  }
   }
  }
  switch is_someone_winning(){
  case 0:
      printf("it's a draw!!");
      break;
  case 1:
      printf("You loose!!");
      break;
  case -1:
      printf("You win!!");
      break;
  }
}
void player_move(){
  int x,y;
  int move=0;
  while(move<9){
  printf("enter position x,y:");
  scanf("%d %d",&x,&y);
  if(state[x][y]==0){
    state[x][y]=-1;
  }
  }
}
void computer_move(int i){

}
char symbol({int i){
 switch(i){
  case 1:
      return 'X';
      break;
  case -1:
      return 'O';
      break;
  case 0:
      return ' ';
 }
}
void display(){
  printf("%d %d %d\n",symbol(state[0][0]),symbol(state[0][1]),symbol(state[0][2]));
  printf("%d %d %d\n",symbol(state[1][0]),symbol(state[1][1]),symbol(state[1][2]));
  printf("%d %d %d",symbol(state[2][0]),symbol(state[2][1]),symbol(state[2][2]));
}
int is_someone_winning(){

}
int minimax(){

}

