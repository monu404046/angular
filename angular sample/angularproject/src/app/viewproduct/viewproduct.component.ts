import { Component, OnInit, inject } from '@angular/core';
import { MessageService } from '../message.service';
import { Inject, Injectable } from '@angular/core';
import{LOCAL_STORAGE,StorageServiceModule} from 'angular-webstorage-service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private ms: MessageService) { }       //,private ms: MessageService

  sdata;
  ngOnInit() {
  this.ms.getData().subscribe(data=>{
    this.sdata = data;
    })
  }
  edit(){
    this.ms.editData().subscribe(data=>{

    })
  }

}
