import express from 'express';
import {
    createRecipe,
    saveRecipe,
    publishRecipe,
    editRecipe,
    deleteRecipe,
    getAllRecipes,
    getRecipe
} from "../controllers/recipeController.js";
import {authenticateUser, authorizeRoles} from "../middleware/authentication.js";
const router = express.Router();

router.get('/', getAllRecipes);
router.get('/getRecipe/:recipeId', getRecipe);
router.post('/', authenticateUser, createRecipe); // ok
router.patch('/publish/:recipeId', authenticateUser,  publishRecipe);
router.put('/editRecipe/:recipeId', authenticateUser,  editRecipe);
router.delete('/deleteRecipe/:userId', authenticateUser,  deleteRecipe);


export default router;