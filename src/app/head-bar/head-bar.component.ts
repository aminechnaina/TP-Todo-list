import { Component } from '@angular/core';
import { TodoService } from '../service-name.service';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent {
constructor(public todoService:TodoService,
            public authService:AuthService,
            private router:Router){
              if(localStorage.getItem("token"))
              authService.btnSignValue='Sign Out'
            else
            authService.btnSignValue='Sign In'
            }
            SignOut(){
              localStorage.removeItem("token")
              window.location.reload()
              this.router.navigateByUrl('/signin')
            }
          }


