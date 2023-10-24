const chalk = require('chalk');
const notes = require('./notes.js');
const yargs =require('yargs');

// const msg = getNotes();

// customization
yargs.command({
    command:'add',
    describe: 'Adding a new note',
    builder:{
        title:{
            describe: 'Note title', 
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'

        }
    },
    handler: function(argv){
        // console.log(`Title: ${argv.title}`)
        // console.log(`Body: ${argv.body}`)
        notes.addNote(argv.title,argv.body)

    }
})
// console.log(yargs.argv)
yargs.command({
    command: 'remove',
    describe:'Removing a new note',
    handler: function(){
        console.log('Removing a new note')
    }
})
yargs.command({
    command:'list',
    describe:'Listing all notes',
    handler: function(){
        console.log('Listig all nontes')
    }
})

yargs.command({
    command:'read',
    describe:'Reading your note',
    hadnler: function(){
        console.log('Reading a note')
    }
})
const addNote = function(title, body){
    const notes = loadNotes()
    // console.log(notes)
    notes.push({
        title: title,
        body: body
        })
        saveNotes(notes)

   
  }
  const saveNotes = function(notes){
    const dataJSON = JSON.stringify(saveNotes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function() {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
           }
           catch(e) {
            return []
         }
         
   
 }
 
yargs.parse()
