import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() elementName: string;
  @Input() elementActif: boolean;
  elementDescription: string = 'Mon élément n est pas allumé';

  constructor() { 
    this.elementActif=true;
    this.elementName="test";
  }
  onActive() {
    if(this.elementActif == true)
    {
      this.elementActif = false;
    }
    else
    {
      this.elementActif = true;
    }
  }
  ngOnInit(): void {
    
  }

}