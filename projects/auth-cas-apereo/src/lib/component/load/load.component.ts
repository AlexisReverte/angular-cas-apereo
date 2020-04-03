import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cas-apereo-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  @Input()
  isLoad: boolean;

  constructor() { }

  ngOnInit() {
  }

}
