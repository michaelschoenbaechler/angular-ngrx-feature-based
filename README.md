# Angular 10 Starter (NGRX, Lazy Loading Modules, Feature States) 

A simple app with basic navigation. You can find list and detail views in the user module.
The architecture is feature based, which in my opinion is a better approach than the common seen layer based architecture.

### Prerequisites
- Firebase Account with user collection (as described below)

### Run
- `npm install`
- `npm start`

go to http://localhost:4200

### Required Firebase Data

Collection: `User`

Document:
````json
{
 "id": "string",
 "firstName": "string",
 "lastName": "string"
}
````
