import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit{

  squares: any[];//Used to track the nine different square
  xIsNext : boolean; //Helps to determine the current player
  winner : string; //Winner is either 'X' or 'O'
  count : number;
  idxArray: any[] = [];
  max : number;
  progress : number;

  constructor(){}

// Initialize game 
  ngOnInit(){
    this.newGame();
  }

// initialize 9 square as null
  newGame() {
    // alert("new game");
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
    this.count = 0;
    this.progress = 0;
  }

  // get player
  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number){
    //if sqaure is already clicked, do nothing
    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.max = 9;
      // console.log(this.max);
      this.idxArray.push(idx)
      this.count = this.idxArray.length;
      this.progress = Math.ceil((this.count / this.max) *100);
    
    }

    this.winner = this.calculateWinner();
    
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

 

 gameProgress(){
  return 9;
 }

 
}
