import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { AngularFirestore} from '@angular/fire/firestore';

console.log(environment);

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    ReactiveFormsModule
  ],
  providers: [HttpService, AngularFireDatabase, AngularFirestore, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
