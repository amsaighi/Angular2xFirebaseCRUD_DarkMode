# Getting started

Make sure you have the Angular CLI installed globally. then run ng install to resolve all dependencies (might take a minute).
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

# Building the project

Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.

# Functionality overview
The example application is Angular 8 CRUD operations – Insert, Update and Delete with Firestore. We have already implemented CRUD operations in Angular but it was in Firebase – Realtime Database. You can view a live demo over at https://angular2xfirebase.azurewebsites.net

# General functionality:

-	CRUD Articles

# General needs:

-	Angular 2X
-	Firebase
-	Ngx Translate

# The general page breakdown looks like this:

-	Home page (URL: /#/ )
-	List of employees
-	Employee form

# Add Firebase Project to Angular App
Now go to Firebase project overview. then click on web option near to android and ios icon. then copy config object.
Inside Angular app. past the copied connection details in environments/environment.ts file.
```
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
};
```