# Angular 10 Starter (NGRX, Lazy Loading Modules, Feature States, Realtime Updates) 

A simple app with basic navigation. You can find the feature state in the user module.
The architecture is feature based, which in my opinion is a better approach than the common seen layer based architecture.

### Prerequisites
- Firebase Account with user collection (as described below)
- Change the firebase config in environment.ts

### Run
- `npm install`
- `npm start`

Go to http://localhost:4200

### Required Firestore Data

Collection: `User`

Document:
````json
{
 "id": "string",
 "firstName": "string",
 "lastName": "string"
}
````
