import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = {} as any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.user);
  }

}
