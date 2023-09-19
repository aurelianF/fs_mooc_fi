const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
let name;// = process.argv[3]
let number;// = process.argv[4]
// const url = mongodb+srv : basileu1::${password}@cluster0.kwdxku3.mongodb.net/?retryWrites=true&w=majority

const url = `mongodb+srv://basileu1:${password}@cluster0.kwdxku3.mongodb.net/?retryWrites=true&w=majority1`;
// const uri = "mongodb+srv://basileu1:<password>@cluster0.kwdxku3.mongodb.net/?retryWrites=true&w=majority";
// const url2 = `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

// console.log(`process.argv.length = ${process.argv.length}`);
if (process.argv.length === 3) {
  // query for all
  Person.find({}).then(result => {
    console.log("phonebook:");
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`);
    })
    mongoose.connection.close()
  })
} else if (process.argv.length == 4) {
  name = process.argv[3]
  number = null

  const note = new Person({
    name: name,
    number: number,
  })


  note.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}
else if (process.argv.length == 5) {
  name = process.argv[3]
  number = process.argv[4]

  const note = new Person({
    name: name,
    number: number,
  })


  note.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}
else if (process.argv.length > 5) {
  // treat name as multiple strings
  for (var i = 3; i < process.argv.length - 2; i++) {
    name += `${process.argv[i]} `;
  }
  name += `${process.argv[process.argv.length - 2]} `; // add last name w/o trailing space
  number = process.argv[process.argv.length -1]
  // console.log(`Name: ${name} Number: ${number}`);
  const note = new Person({
    name: name,
    number: number,
  })

  note.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close()
  })
}

