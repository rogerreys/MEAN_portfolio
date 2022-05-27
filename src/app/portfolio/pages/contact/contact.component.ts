import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../interface/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  contacts: Contacts[]=[
    { nickname: "/roger-rys", url: "https://www.linkedin.com/in/roger-rys/", img: "asset/img/linkedIn.png", altImg:"linkedin"},
    { nickname: "/Roger-Rys", url: "https://github.com/Roger-Rys", img: "asset/img/github.png", altImg:"GitHub"},
    { nickname: "roger.reyesm97", url: "", img: "asset/img/gmail.png", altImg:"Gmail"},
    { nickname: "/Roger_Ryes", url: "https://twitter.com/Roger_Ryes", img: "asset/img/twitter.png", altImg:"Twitter"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
