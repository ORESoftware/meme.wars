'use strict';

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Item {
  name: string;
  description: string;
  url: string;
  html: string;
  markdown: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  // private dataURL: string = "https://www.techiediaries.com/api/data.json";
  
  private dataURL: string = "https://api.mysportsfeeds.com/v2.0/pull/nba/2017-playoff/games/20170501-HOU-SAS/playbyplay.json";

// {
//   type: "GET",
//   url: {pull-url},
//   dataType: 'json',
//   async: false,
//   headers: {
//     "Authorization": "Basic " + btoa({apikey_token} + ":" + MYSPORTSFEEDS)
//   },
//   data: '{ "comment" }',
//   success: function (){
//     alert('Thanks for your comment!');
//   }
// }
//
  constructor(private  hc: HttpClient) {
  }
  
  fetch(): Observable<Item[]> {
    // return <Observable<Item[]>>this.hc.get(this.dataURL);
  
    return <Observable<Item[]>>this.hc.get(this.dataURL, { headers: new HttpHeaders({'Authorization': 'Basic ' + btoa('dpekar:MYSPORTSFEEDS')})})
  }
}
