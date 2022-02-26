//Data Require
const {people} = require('../data')

//Functions
const getPeople = (req, res) => {

    res.status(200).json({sucess: true, data: people})
}

const createPerson = (req, res) => {

    const {name} = req.body
    console.log(name)

    if(!name){
        res.status(400).json({success: false, msg: 'Please provide name value'})
    } else {
        res.status(201).json({success: true, person: name})
    }
}

const updatePerson = (req, res) => {

    const {id} = req.params
    const {name} = req.body
    const person = people.find((person) => { person.id === Number(id) })
    console.log(id, name, people)

    if(!name){
        return res
            .status(400).json({success: false, msg: 'Please provide name value'})
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
    
}

const deletePerson = (req, res) => {

    const {id} = req.params
    const person = people.find((person) => person.id === Number(id))
    const newPeople = people.filter((person) => person.id !== Number(id))
    console.log(id, people, newPeople)

    if(!person){
        return res
            .status(400).json({ success: false, msg: `No person with id ${id}`})
    }
    return res
        .status(200).json({ success: true, data: newPeople})
}

//Export
module.exports = {
    getPeople, 
    createPerson, 
    updatePerson, 
    deletePerson
}