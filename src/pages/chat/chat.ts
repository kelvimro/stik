import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { dataService } from '../../app/services/dataService';
import {mensagem} from '../../app/model/mensagem';

@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
    providers: [dataService]
})


export class ChatPage implements OnInit {

    userName: string;
    user: string;
    msg: string;
    counter: number;
    datajson;
    datarparsed: mensagem[];
    tempMsg: mensagem;

    constructor(public navCtrl: NavController, private serv: dataService) {


    }

    ngOnInit() {
        
        this.serv.getData();        
    }

    teste() {
        console.log("Teste click");
    }

}
