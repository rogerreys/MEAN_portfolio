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
    { nickname: "/roger-rys", url: "https://www.linkedin.com/in/roger-rys/", img: "asset/img/linkedIn.png", altImg:"Linkedin", icon:"pi-linkedin"},
    { nickname: "/Roger-Rys", url: "https://github.com/Roger-Rys", img: "asset/img/github.png", altImg:"GitHub", icon:"pi-github"},
    { nickname: "roger.reyesm97", url: "", img: "asset/img/gmail.png", altImg:"Gmail", icon:"pi-envelope"},
    { nickname: "/Roger_Ryes", url: "https://twitter.com/Roger_Ryes", img: "asset/img/twitter.png", altImg:"Twitter", icon:"pi-twitter"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
