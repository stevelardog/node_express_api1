import { v4 as uuidv4 } from 'uuid';

let users = []; // let means changing 


export const getUser = (req, res) =>{
    
    res.send(users);
}

export const createUser =  (req, res) =>{
    const user = req.body;

    users.push({ ...user, id: uuidv4()}); // spread..... caling user and now adding an unique ID with uuid

    res.send(`User with the name ${user.firstName} added to the database!`); //template string 
}

export const getId = (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id = id);

    res.send(foundUser);
}

export const deleteId = (req, res) =>{ // delete a user from our db
    const {id} = req.params;  //requesting id

    users = users.filter((user) => user.id != id); // filter out users that are NOT the id

    res.send(`User with the id ${id} deleted from the database`);
} 

export const editUser = (req, res) => {
    const {id} = req.params;//requesting id
    const { firstName, lastName, age} = req.body; //taking info from user body
    
    const user = users.find((user) => user.id = id); //declare variable user finds the user according to the req paramaters

    if(firstName) {
        user.firstName = firstName;
    }
    if(lastName) {
        user.lastName = lastName;
    }
    if(age) {
        user.age = age;
    }

    res.send(`User with the id ${id} has been updated`);
}