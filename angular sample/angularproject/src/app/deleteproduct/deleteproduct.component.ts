import { Component, OnInit, Inject } from '@angular/core';
/* import { WebStorageService } from 'angular-webstorage-service'; */

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
val;
user;
  constructor() { }   //@Inject(localStorage) private storage:WebStorageService

  ngOnInit() {
this.user=localStorage.getItem("username")
  }
add(){
/*   this.storage.set("username",this.val) */
localStorage.setItem("username",this.val)
}

}