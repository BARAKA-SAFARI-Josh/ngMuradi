import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "ngmradi-tuto-a34a7", appId: "1:984104137727:web:739fb2bd73792e1dbdedca", storageBucket: "ngmradi-tuto-a34a7.firebasestorage.app", apiKey: "AIzaSyDyI7FaxIRVOvo7ihwwAzWUDpGhQIBOxO0", authDomain: "ngmradi-tuto-a34a7.firebaseapp.com", messagingSenderId: "984104137727" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
