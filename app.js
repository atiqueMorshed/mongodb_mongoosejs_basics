//jshint esversion:6
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//------------------------------------------------------------
// Closing Connection
//------------------------------------------------------------

// mongoose.connection.close();

//------------------------------------------------------------
// Insert
//------------------------------------------------------------

//Fruit
//Schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [1, "Please make sure to enter name."] // 1 or true || 0 or false
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String,
});

//Model
const Fruit = mongoose.model("Fruit", fruitSchema);

//Creating Document (column/ a row data)
const fruit = new Fruit({
  name: "Apple",
  rating: 1,
  review: "its a fucking fruit.",
});

// save Document (Data) to Collection (Table)
// fruit.save();

// Adding multiple fruits at once 
const kiwi = new Fruit({
  name: "kiwi",
  rating: 8,
  review: "good"
});

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "Good"
});

const banana = new Fruit({
  name: "Banana",
  rating: 1,
  review: "Bissiri"
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 7,
  review: "Meh"
});

// pineapple.save();

// Using Model to bulk save Documents to Collection.
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if(err)
//     console.log(err);
//   else
//     console.log("Successfully inserted Documents/ data (kiwi, orange, banana) into the Collection/ table (fruits).");
// });

///////////////////////////////////////////////////////////////

//  Creating relationships between collections

//People
//Schema
const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema // Creating RELATIONSHIPS between collections
});

//Model
const People = mongoose.model("People", peopleSchema);

//Document
const people = new People({
  name: "Amy",
  age: 69,
  favoriteFruit: pineapple // Relation between document Amy and document pineapple. 
});

//Add Document to Collection
// people.save();

//------------------------------------------------------------





//------------------------------------------------------------
// Find/ Search
//------------------------------------------------------------

// Using Model to find Documents from Collection

// Fruit.find(function(err, fruits) { // here err means the error msg AND fruits means if there are no error found, the results that we get back are kept in fruits var. | can be any variable, here we are calling fruits cause we are getting back fruits, its not related to the collections name :3 
//   mongoose.connection.close();
//   if(err)
//     console.log(err);
//   else{
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name);
//     });
//   }
// });

//------------------------------------------------------------
// Update
//------------------------------------------------------------

// Fruit
// Fruit is the model, we want to update the 3rd document to set a name field. 
// Fruit.updateOne({_id: "5ea9540012e8182ad421d251"}, {name: "Strawberry"}, function(err) { // model.updateOne({what document to target}, {update what you want}, callbackFunction(err) {});
//   if(err)
//     console.log("err", err);
//   else
//     console.log("Successfully updated name.");
// });


// People
// People.updateOne({name: "John"}, {favoriteFruit: orange}, function(err) {
//   if(err)
//     console.log(err);
//   else
//     console.log("Successfully added favoriteFruit of Orange to John");
// });

//------------------------------------------------------------
// Delete
//------------------------------------------------------------

// Fruit.deleteOne({_id: "5ea985010c9e0505c4a574f0"}, function(err) {
//   if(err)
//     console.log("err", err);
//   else
//     console.log("Successfully deleted one document/ row.");
// });

// Deleting a key/ Column from document/ Row.
// $unset

// User.update({_id: user._id}, {$unset: {field: 1 }}, callback);

// Deleting many Documents/ Rows at once

// People.deleteMany({name: "John"}, function(err) {
//   if(err)
//     console.log("err", err);
//   else
//     console.log("Successfully deleted many Documents/ Rows from Collection/ table.");
// });