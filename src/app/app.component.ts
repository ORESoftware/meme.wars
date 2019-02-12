'use strict';

import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ApiService } from  './api.service';
import { Item } from  './api.service';

@Component({
  selector:  'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.scss']
})
export  class  AppComponent  implements  OnInit{
  title = 'meme-wars';
  
  header=['Quarter','Time','Team','Play','Score', 'description','Description'];
  dataSource:  Array<Item>;
  constructor(private  as:  ApiService, private ref: ChangeDetectorRef){
  }
  ngOnInit(){
    this.fetchData();
  }
  fetchData(){
    this.as.fetch().subscribe((data:  any)=>{
      
      
      this.dataSource = data.plays.reduce((a,b) => {
      
        
        if(a.fieldGoalAttempt && a.fieldGoalAttempt.result == 'SCORED'){
          b.cumulativeScore =  a.cumulativeScore + a.fieldGoalAttempt.points;
        }
        else if (a.freeThrowAttempt && a.result === 'SCORED'){
          b.cumulativeScore =  a.cumulativeScore +1;
        }
        else{
          b.cumulativeScore = a.cumulativeScore;
        }
        
        return b;
      }, [{}]
      );
      console.log(data);
      this.dataSource  =  data.plays.filter(v => (v.freeThrowAttempt || v.fieldGoalAttempt)).map(v => {
        
        const secondElapsed = v.playStatus.secondsElapsed;
        v.Time = [12 - Math.floor(secondElapsed/60),':', (12*60-secondElapsed)%60].join('');
       
        
      });
      console.log(this.dataSource && this.dataSource.length);
      this.ref.detectChanges();
      setTimeout(() => {
        this.ref.detectChanges();
      },100);
      
    }, (err)=>{
      console.log(err);
    });
  }
}
