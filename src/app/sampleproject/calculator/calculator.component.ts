import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calucator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  text: string = '';
  result: any = '0';

  constructor() {
  }

  ngOnInit(): void {
  }

  append(str: string): void {
    this.text += str;
  }

  exeMath(): void {
    const replacedText = this.text.replace('x','*');
    replacedText.trim();
    this.result = eval(replacedText);
    this.text = this.result;
  }

  subText() {
    if(this.text.toString().length >= 1){
      this.text = this.text.toString().substring(0,this.text.length-1)
    }else
    console.log('you have nothing left to clear');
  }
}


