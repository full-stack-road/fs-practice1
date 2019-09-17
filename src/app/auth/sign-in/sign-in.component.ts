import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

//引用fortawesome
import { faHands } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  faHands = faHands;

  constructor(
    // private route: ActivatedRoute,
    private router: Router,
  ) { }

  login() {
    this.router.navigate(['../']);
  }
  ngOnInit() {
  }

}
