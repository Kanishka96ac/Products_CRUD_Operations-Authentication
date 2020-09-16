import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userDetails;
  // userArr = [];



  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res => {

        // var userArr = [];

        // userArr= this.userDetails;
        // userArr = res['user'];


        // console.log("User Details");

        // console.log(userArr);

        // var tempArr = [];
        // var userdataArr = [];

        // for(let i=0; i < userArr.length; i++){
        //   tempArr = userArr[i];
        //   userdataArr.push({
        //     firstName: tempArr[0],
        //     email: tempArr[1],
        //     lastName: tempArr[2],

        //   })
        //   console.log("User Data list");
        //   console.log(userdataArr[0]);

        // }

        this.userDetails = res['user'];
      },
      err => {
        console.log(err);

      }
    );
  }


  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }


}
