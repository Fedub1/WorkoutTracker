// const router = require("express.Router"());
const Exercise = require("../models/exercise.js");
module.exports = function(app) {

 
app.get("/api/workouts", (req, res) => {
  Exercise.find()
      .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})


app.post("/api/workouts", (req, res) => {
  Exercise.create({})
  .then(dbExercise => {
    res.json(dbExercise);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

app.put("/api/workouts/:id", (req, res => {
Exercise.findByIdAndUpdate({_id:
  req.params.id}, {dbexercise:req.body})
 .then((dbExercise) => {
   res.json(dbExercise);
})
  .catch(err => {
    res.status(400).json(err);
  });
}));}
