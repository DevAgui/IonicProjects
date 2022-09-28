import { Component } from '@angular/core';

export interface Person{

  id:number,
  name:string

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
 
  name = "Juan";
  id = 0;
  people:Person[]=[];

  
  addUser(name:string){

    this.people.push({id:this.id++, name});
    
  }

  removeUser(id:number){
    
    var index = this.people.findIndex(p=>p.id==id);

    if(index >= 0){

      this.people.splice(index,1);

    }

  }

  constructor() {}

}
