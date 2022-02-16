import express from 'express'
import { createUser, getUser, deleteUser, showUsers, updateUser } from '../controllers/users.js'

const router = express.Router();


// All routes here are starting with /users
router.get('/', showUsers)

router.post('/', createUser) 

// Find User by ID
router.get('/:id', getUser)

// Delete user ID
router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;
