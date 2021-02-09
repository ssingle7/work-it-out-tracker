# Work it out tracker 👟

## Description

Track your workouts with Fitness Tracker. The app will keep track of every exercise in your workout. The app dashboard will display weekly summary graphs of all workouts done in a week. 
## Installation

1. Clone repository. 
2. Check in routes/api-routes and comment in block of code if you want the database to be pre-populated with dummy values
3. npm install
4. node server.js

Running seeders/seed.js is optional to have a pre-populated database.

## Usage
### Screenshots

1. Homepage displaying last workout

![Site](fitnesstracker.PNG)


2. Last Week's Summary

![Site](workoutdashboard.PNG)


Please check out the launched app on Heroku [here](https://still-bayou-21852.herokuapp.com/)!

### Snippets


1. Adding to an array type

```javascript

    // add exercise
    Router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  Workout.findByIdAndUpdate(
    id,
    {
      $push: { exercises: req.body },
    },
    { new: true }
  ).then((workout) => {
    res.json(workout);
  });
});

    
```
* This function will add an exercise to the array of exercises that belong to the workout with the given id. Here we will locate the workout with the given ID and update its fields. We will increase the total duration of the workout by the duration of the exercise being inserted. We will push the exercise to the array of exercises.


## Credits

* Tutor 

* Classmates
### Built With

</br>
<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HMTL" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
    <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/-Javascript-yellow?style=for-the-badge" alt="Javascript" /></a>
    <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-Node-orange?style=for-the-badge" alt="Node" /></a>
    <a href="https://www.npmjs.com/package/express"><img src="https://img.shields.io/badge/-Express-blue?style=for-the-badge" alt="Express" /></a>
    <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/-MongoDB-blue?style=for-the-badge" alt="MongoDB" /></a>
</p>

## License


</br>
<p align="center">
    <img align="center" src="https://img.shields.io/github/license/kqarlos/fitness-tracker?style=for-the-badge" alt="MIT license" />
</p>

Copyright (c) [2020] [Selena Singleton]

