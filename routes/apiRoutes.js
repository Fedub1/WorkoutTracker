
const Workout = require("../models/workout.js");

module.exports = function(app) {

 
app.get("/api/workouts", function (req, res) {
  Workout.find()
      .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
})


app.post("/api/workouts/range", function(req, res) {
  Workout.create({})
  .then((workout => 
    res.json(workout))
   .catch(err => {
    res.json(err);
  }),
);

app.put("/api/workouts/:id", ({body, params}, res => {
Workout.findByIdAndUpdate(
  params.id, {$push: {exercises:body}},
  {new: true, runValidators: true}
)
 .then((workout) => 
   res.json(workout))

  .catch((err) => {
    res.status(400).json(err);
  });
}));})}
