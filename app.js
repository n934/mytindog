const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/peopleDB",{ useNewUrlParser: true, useUnifiedTopology: true });
const peopleSchema=new mongoose.Schema({
  name: String,
  age:Number,

});
const Person=mongoose.model("People",peopleSchema);
const person=new Person({
  name:"john",
  age:32
});
person.save();
