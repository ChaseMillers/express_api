import { v4 as uuidv4 } from 'uuid' // used for generating ID


let users = [
    {
        name: "John",
        lastName: "Doe",
        age: 25,
        id: "123456"
    },
]

export const showUsers = (req, res) => {
    console.log(users)
    res.send(users);
}


export const getUser = (req, res) =>{
    // anything after Colon is the variable passed from front end. 
    const { id } = req.params

    const findUser = users.find(user => user.id === id)

    res.send(findUser)
}


export const createUser = (req, res) =>{
    
    // user['id'] = uuidv4()
    const user = {...req.body, id: uuidv4() }
    users.push( user )
   
    res.send(user)
}


export const deleteUser = (req, res) => {

    const { id } = req.params
    
    // If user id dosn't match props id, then keep  it.
    users = users.filter(user => user.id != id)

    res.send(`User ID ${id} Was Deleted`)
}

export const updateUser = (req, res) => {

    const { id } = req.params
    const { name, lastName, age } = req.body;

    const user = users.find(user => user.id === id);

    if (name) user.name = name;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(user)

}