import { Component, OnInit } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ts-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
     })
     
    $(document).keyup(function (event) {
      if (event.which === 27) {
        
        $('[data-toggle="tooltip"]').tooltip('hide');
      }
    });
  }
}
