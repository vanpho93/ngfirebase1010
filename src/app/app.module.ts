import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: 'AIzaSyBhjiY4veJKZLm7pNG0LHtGHvUb8yadrXw',
  authDomain: 'ngfirebase-7dda5.firebaseapp.com',
  databaseURL: 'https://ngfirebase-7dda5.firebaseio.com',
  projectId: 'ngfirebase-7dda5',
  storageBucket: 'ngfirebase-7dda5.appspot.com',
  messagingSenderId: '942240817417'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
