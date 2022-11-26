import express from 'express';


import { createUser, getUser, getId, deleteId, editUser } from '../controllers/users.js';

const router = express.Router();

//use node index.js to start server



// all routes in here are starting with /users
router.get('/', getUser );

//method that takes a POST and puts it into our array 'users'
router.post('/', createUser);

// GET a user with a certain ID
router.get('/:id', getId);

router.delete('/:id', deleteId);

router.patch('/:id', editUser);

export default router;