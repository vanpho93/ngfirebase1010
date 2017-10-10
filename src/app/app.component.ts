import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth]
})
export class AppComponent implements OnInit {
  user: Observable<User>;
  constructor(private firebaseAuth: AngularFireAuth) {}

  ngOnInit() {
    this.user = this.firebaseAuth.authState;
  }

  signIn() {
    this.firebaseAuth.auth.signInAnonymously();
  }
}
