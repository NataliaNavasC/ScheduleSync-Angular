import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scheduled-session-view',
  templateUrl: './scheduled-session-view.component.html',
  styleUrls: ['./scheduled-session-view.component.scss']
})
export class ScheduledSessionViewComponent {

  constructor(private route:ActivatedRoute){
    let id = this.route.snapshot.paramMap.get("id");
    console.log(id);
  }

}
