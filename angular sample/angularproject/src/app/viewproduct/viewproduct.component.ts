import { Component, OnInit, inject } from '@angular/core';
import { MessageService } from '../message.service';

import{Router} from '@angular/router'

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private ms: MessageService) { }       //,private ms: MessageService

  sdata;
  ngOnInit() {
  this.ms.getData().subscribe(data=>{
    console.log(data)
    this.sdata = data;
    })
  }
  edit(){
    this.ms.editData().subscribe(data=>{

    })
  }

}
