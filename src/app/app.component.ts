import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cube-puzzle';
  index: number[] = Array.from({ length: 16 }, (_, i) => i + 1);
  temp: number = 0;

  text: string = "Cube Puzzle";

  shuffle(){
    this.index = this.index.sort(() => Math.random() - 0.5);
  }

  move(event: Event): void {
    var element = event.target as HTMLImageElement;
    var alt = Number(element.alt);
    var emptyIndex = this.index.indexOf(16);

    // lewo
    if (alt > 0 && alt - 1 === emptyIndex) {
      this.swap(alt, emptyIndex);
    }
    // prawo
    else if (alt < 15 && alt + 1 === emptyIndex) {
      this.swap(alt, emptyIndex);
    }
    // góra
    else if (alt > 3 && alt - 4 === emptyIndex) {
      this.swap(alt, emptyIndex);
    }
    // dół
    else if (alt < 12 && alt + 4 === emptyIndex) {
      this.swap(alt, emptyIndex);
    }

    this.checkIfWin();
  }

  swap(i: number, j: number): void {
    [this.index[i], this.index[j]] = [this.index[j], this.index[i]];
  }

  checkIfWin(){
    var count = 0;
    var t = this.index[0];
    for(var i = 0; i < 16; i++){
      if(i < this.index[i]) 
      {
        count++
      };
    }
    console.log(count.toString());
    if(count == 16){
      this.text = "WIN";
    }
  }
}
