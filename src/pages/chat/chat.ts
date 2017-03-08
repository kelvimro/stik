import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface Tjson {
    id?: number;
    name?: string;
    msg?: string;
}


@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html'
})


export class ChatPage {

    userName: string;   
    counter: number;
    datajson;


    constructor(public navCtrl: NavController) {
        console.log("test");
        this.counter = 0;
        this.datajson =
            {
                id: 1,
                name: "Rachel",
                msg: "Olá tudo bem?"
            }, {
                id: 2,
                name: "Amanda",
                msg: "Uhull Festa no AP"
            }, {
                id: 3,
                name: "Joyce",
                msg: "Carai chamando todo mundo msm?!"
            };
    }

}
