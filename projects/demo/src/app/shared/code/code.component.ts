import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'demo-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
})
export class CodeComponent implements OnInit {
  @Input() htmlCode: string;
  @Input() typescriptCode: string;

  constructor() {}

  ngOnInit() {}
}
