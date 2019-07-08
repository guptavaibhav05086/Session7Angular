import { Component, OnInit } from '@angular/core';
import { ComponentLevelService} from '../component-level.service'

@Component({
  selector: 'app-demo-service2',
  templateUrl: './demo-service2.component.html',
  styleUrls: ['./demo-service2.component.css'],
  providers:[ComponentLevelService]
})
export class DemoService2Component implements OnInit {

  constructor(private service : ComponentLevelService) { }

  ngOnInit() {
    console.log(this.service.getStates());
  }

}
