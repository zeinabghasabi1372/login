import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username :string = '';
  password :string = '';
  Retypepassword :string ='';
  isPasswordmatch :boolean = false;

  public UsernameInputChanged(e: Event){
    this.username = (<HTMLInputElement>e.target).value;
  }

  public PasswordInputChanged (e: Event){
    this.password = (<HTMLInputElement>e.target).value;
  }
  public RetypeInputeChanged (e: Event){
    this.Retypepassword = (<HTMLInputElement>e.target).value;
    // if(this.password !== this.Retypepassword){
    //   this.isPasswordmatch = false;
    // }else {
    //   this.isPasswordmatch = true;
    // }
    this.isPasswordmatch = this.password !== this.Retypepassword ? false : true;
  }
}


