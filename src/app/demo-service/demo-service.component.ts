import { Component, OnInit } from '@angular/core';
import { ComponentLevelService} from '../component-level.service'

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrls: ['./demo-service.component.css'],
  //Remove Provider from here to see if component has no providers it will throw an error
  providers:[ComponentLevelService]
})
export class DemoServiceComponent implements OnInit {
//This example in console you can check two instance of services are created as thes service is provided
//at component level each component will create its own instance
  constructor(private service : ComponentLevelService) { }

  ngOnInit() {
    console.log(this.service.getStates());
  }


}
