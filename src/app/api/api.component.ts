import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  data: any;
  nome:string =''
  img:string =''
  filmes:Array<string> = []
  perso:Array<object> = []
  array:Array<object> = []


  constructor() {}

  ngOnInit(): void {
    fetch('https://api.disneyapi.dev/character')
      .then((response) => response.json())
      .then((response) => (this.data = response.data))
      .then((response) => response.forEach((e:object) => {
        this.perso.push(e)
      }))
      .then((response) => {
        this.array = this.perso
      })
    // this.array.forEach((e:Number) => {
    //   console.log(e)
    // })

    fetch('https://api.disneyapi.dev/character/16')
      .then((response) => response.json())
      .then((response) => (this.data = response.data))
      .then((response) => {
        this.nome = response.name
        this.img = response.imageUrl
        this.filmes = response.films
      });
  }
}
