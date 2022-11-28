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

  constructor(){}

// Initialize game 
  ngOnInit(){
    this.newGame();
    this.xIsNext = true;
    this.winner = null;
  }

// initialize 9 square as null
  newGame() {
    this.squares = Array(9).fill(null);
  }

  // get player
  get player(){
    return this.xIsNext ? 'X' : 'O';
  }


  
}
