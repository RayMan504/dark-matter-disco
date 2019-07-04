import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AudioComponent } from './audio/audio.component';
import { DanceFloorComponent } from './dance-floor/dance-floor.component';
import { DancerComponent } from './dancer/dancer.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FriendsComponent } from './friends/friends.component';
import { AudioListComponent } from './audio/audio-list/audio-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { StarsComponent } from './stars/stars.component';
import { ChatComponent } from './toolbar/chat/chat.component';
import { AudioControlsComponent } from './audio/audio-controls/audio-controls.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingsComponent } from './toolbar/settings/settings.component';
import { ColorPickerModule } from 'ngx-color-picker';


//firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './admin/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    DanceFloorComponent,
    DancerComponent,
    FriendsComponent,
    AudioListComponent,
    ToolbarComponent,
    StarsComponent,
    ChatComponent,
    AudioControlsComponent,
    SettingsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
