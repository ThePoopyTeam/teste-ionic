import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { IntroPageModule } from '../pages/intro/intro.module';
import { LoginPageModule } from '../pages/login/login.module';
import { MapsPageModule } from '../pages/maps/maps.module';
import { Geolocation } from '@ionic-native/geolocation';
import { CadastroBanheiroPageModule } from '../pages/cadastro-banheiro/cadastro-banheiro.module';
import { PaginaBanheiroPageModule } from '../pages/pagina-banheiro/pagina-banheiro.module';

import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogmeMapsClusterProvider } from '../providers/googme-maps-cluster/googme-maps-cluster';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { UsersProvider } from '../providers/users/users';
import { IonicStorageModule } from '@ionic/storage';

import { GoogleMaps } from '@ionic-native/google-maps';
import { BathroomsProvider } from '../providers/bathrooms/bathrooms';
import { SocialSharing } from '@ionic-native/social-sharing';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export const firebaseConfig = {
  apiKey: "AIzaSyAAA-CoZcaF2tT2DKPCTnQPepP2tgIoSSQ",
  authDomain: "mypoopyproject-198f6.firebaseapp.com",
  databaseURL: "https://mypoopyproject-198f6.firebaseio.com",
  projectId: "mypoopyproject-198f6",
  storageBucket: "mypoopyproject-198f6.appspot.com",
  messagingSenderId: "192689498859"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule, 
    LoginPageModule,
    MapsPageModule,
    CadastroBanheiroPageModule,
    PaginaBanheiroPageModule,
    HttpClientModule,
    HttpModule,
    // FontAwesomeModule,
    IonicStorageModule.forRoot(),
    //login com o google
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AndroidPermissions,
    Geolocation,
    ConnectivityProvider,
    GoogmeMapsClusterProvider,
    Facebook,
    GooglePlus,
    UsersProvider,
    GoogleMaps,
    BathroomsProvider,
    SocialSharing
  ]
})
export class AppModule {}
