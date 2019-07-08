import { Injectable } from '@angular/core';

@Injectable()
export class ComponentLevelService {

  constructor() {
    //This message will tell how many service instance are getting created
    console.log('New Service Instance Created');
   }

   getStates(){
     var states = {"isValid":true,"data":[{"_id":"5b392a56f5e5fe21a708746b","name":"Bihar","cities":[{"locations":[{"_id":"5b50f079e3333378187f5a46","name":"Indrapuri"},{"_id":"5b50f079e3333378187f5a45","name":"Danapur"}],"_id":"5b392a56f5e5fe21a7087470","name":"Patna"},{"locations":[{"_id":"5b50f079e3333378187f5a43","name":"Ramna"}],"_id":"5b392a56f5e5fe21a708746f","name":"Ara"},{"locations":[{"_id":"5b50f079e3333378187f5a41","name":"Ramna2"}],"_id":"5b392a56f5e5fe21a708746e","name":"Bihta"},{"locations":[{"_id":"5b50f079e3333378187f5a3f","name":"Ramna3"}],"_id":"5b392a56f5e5fe21a708746d","name":"Chapra"},{"locations":[{"_id":"5b50f079e3333378187f5a3d","name":"Ramna4"}],"_id":"5b392a56f5e5fe21a708746c","name":"Madhubani"}],"__v":1,"createdAt":"2018-07-19T20:11:37.973Z"},{"_id":"5b392ad73dbf7721e3c562b5","name":"Karnataka","cities":[{"locations":[{"_id":"5b50f28b64e7027919158753","name":"HSR Layout"},{"_id":"5b50f28b64e7027919158752","name":"Kormangala"}],"_id":"5b392ad73dbf7721e3c562ba","name":"Bangalore"},{"locations":[{"_id":"5b50f28b64e7027919158750","name":"Ooty"}],"_id":"5b392ad73dbf7721e3c562b9","name":"Maisoor"},{"locations":[],"_id":"5b392ad73dbf7721e3c562b8","name":"Mangalore"},{"locations":[],"_id":"5b392ad73dbf7721e3c562b7","name":"Humpi"},{"locations":[],"_id":"5b392ad73dbf7721e3c562b6","name":"Badlapur"}],"__v":1,"createdAt":"2018-07-19T20:20:27.370Z"},{"_id":"5b51a7fde006cb653b941b72","name":"Maharastra","cities":[{"locations":[{"_id":"5b51a7fde006cb653b941b79","name":"Andheri"},{"_id":"5b51a7fde006cb653b941b78","name":"juhu"}],"_id":"5b51a7fde006cb653b941b77","name":"New Mumbai"},{"locations":[],"_id":"5b51a7fde006cb653b941b76","name":"Pune"},{"locations":[],"_id":"5b51a7fde006cb653b941b75","name":"Lonavala"},{"locations":[],"_id":"5b51a7fde006cb653b941b74","name":"Sholapur"},{"locations":[],"_id":"5b51a7fde006cb653b941b73","name":"Nashik"}],"createdAt":"2018-07-20T09:14:37.734Z","__v":0}],"errors":null};
     return states;
   }
}
