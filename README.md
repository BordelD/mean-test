# Project Installation

In order to run the project, we will need the following packages installed on your development environemment :

```
node (last stable version)
mongo (last stable version)
```



First step is to clone the project :

```
git clone GIT_URL
```


Then, you need to checkout the `develop` branch  :

```
git fetch
git checkout develop
```

The project is using both Bower and Node Package Manager, so be sure to run the following commands :

```
npm install
```

In config/default.json :

```
{
  "mongo": {
    "url": "mongodb://localhost/crudnode"
  }
}

```

Feed the database with mongo script :

```
mongo crudnode database/feed.js
```

To generate the correct files in the /public folder, we have to run a :

```
gulp 
```

# Explanation

Navigate to this URL

```
http://localhost:3000/#/
```

You will see an array, each row represent a character from a TV show and the name of the TV show.

This list come from a Mongo Database
The Database has only one collection : characters
The Mongoose model associated to this collection has two attribute : name (name of the character - string) and tvShow (name of the tv show - string)

The goals of the evolution are
 1 -  Create an TV show collection and link each character (document) to one TV SHow (document)
 2 - Implement a CRUD to character ( with impact to TV SHow)



# Objectives

### TV Show model

For the moment, tvShow is a string attribute of character model
Create tvShow model (mongoose) (attribute : name)
Modify the character model (mongoose)
Create a migration script to create TV show documents in database (from list in character collection) and link each character (document)to the associated TV show (document)

tip : think to populate character in getList. 

### Create character

Create in back an front functions to be able to create a new character.
If the user add a new character :
The front list must be updated
The new character must be saved in database
If the TV show (name) is already in database, link the new character to it.
If the TV show name is new, so create it and link the new character to it.


### Update character

Create in back an front functions to be able to update a character.
If the TV Show changes and the character was the last link to this TV show, delete the Tv show associated.

### Delete character

Create in back an front functions to be able to delete a character.
If the user delete a new character : 
The front list must be updated
The character must be removed from the database
If the character was the last link to the TV show, delete the Tv show associated.











