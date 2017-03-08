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
    user : string;
    msg : string;  
    counter: number;
    datajson;


    constructor(public navCtrl: NavController) {
        console.log("test");
        this.counter = 3;
        this.datajson =[
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
            }];
    }

    teste(){
        console.log("Teste click");
        this.counter++;
        this.datajson.id = this.counter;
        this.datajson.name = this.user+" "+this.counter;
        this.datajson.msg = this.msg+" "+this.counter*2;
    }

}
