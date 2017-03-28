import { Injectable } from '@angular/core';
import {mensagem} from '../../app/model/mensagem';

@Injectable()
export class dataService {
datajson: mensagem =[
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


    constructor() { }

    public getData() {
        return this.datajson;
    }
}