import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import {useRouter} from "next/router";
import styles from "./RecipeDetails.module.css";
import { getRecipeById } from '../../services/recipeService';



export default function RecipeDetails() {
    const [recipe, setRecipe] = useState<any>({});

    const router = useRouter()
    const { recipeId } = router.query

    useEffect(() => {
        if (!recipeId) {
            return
        }

        async function getRecipe () {
            try {
                const response = await getRecipeById(recipeId);
                setRecipe(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        getRecipe()

    }, [recipeId]);


    const { _id, title, description, preparation_time, ingredients, steps } = recipe;


    return (
        <div className={styles.recipe_view}>
            <div className={styles.recipe_buttons_logged_in}>
            <button className={styles.favorites_button}>♡</button>
                <button className={styles.edit_recipe_button}>edit</button>
                <button className={styles.primary_button}>Delete recipe</button>
            </div>
            {_id && (
                <div key={_id} className={styles.recipe}>
                    <div className={styles.main_recipe_banner}>
                        <Link href={'/'}><img className={styles.recipe_img} src={recipe.coverUrl} alt="recipe-image"/></Link>
                        <div className={styles.title_banner}>
                        <div className={styles.recipe_view_title}>
                            <Link style={{ textDecoration: 'none', color: 'black' }} href={`/recipe/${_id}`}>{title}</Link>
                        </div>
                        <div className={styles.recipe_view_description}><Link style={{ textDecoration: 'none', color: 'black' }} href={`/recipe/${_id}`}>{description}</Link></div>
                        <div className={styles.recipe_view_time}><Link style={{ textDecoration: 'none', color: 'black' }} href={`/recipe/${_id}`}>Preparation time: {preparation_time} min</Link></div>
                        <div className={styles.recipe_view_tags}><Link style={{ textDecoration: 'none', color: 'black' }} href={`/recipe/${_id}`}>{recipe.tags.map((tag: any) => <span
                            className={styles.recipe_view_tag}> #{tag} </span>)}</Link></div>
                    </div>
                    </div>
                    <div className={styles.recipe_view_text}>
                        <div className={styles.recipe_view_ingredients}>
                            Ingredients:
                            <Link style={{ textDecoration: 'none', color: 'black' }} href={`/recipe/${_id}`}>
                                <ul>
                                    {ingredients.map((ingredient: string) => (
                                        <li key={ingredient}>{ingredient}</li>
                                    ))}
                                </ul>
                            </Link>
                        </div>
                        <div className={styles.recipe_view_steps}>
                            Steps to follow:
                            <Link style={{ textDecoration: 'none', color: 'black' }} href={`/recipe/${_id}`}>
                                <ol>
                                    {steps.map((step: string) => (
                                        <li key={step}>{step}</li>
                                    ))}
                                </ol>
                            </Link>
                        </div>
                    </div>


                </div>

            )}
        </div>
    );
}
