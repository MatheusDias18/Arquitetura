import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Arquitetura';
constructor(private http: HttpClient){
  
}

ngOnInit(){
  let obs = this.http.get(
    'https://api.github.com/users/MatheusDias18');
  obs.subscribe((response)=>console.log(response))
}
}

