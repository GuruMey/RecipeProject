import * as React from 'react';
import {useEffect} from "react";
import Link from 'next/link';
import axios from "axios";
import styles from "./RecipesGallery.module.css";
import { getAllRecipes } from '../../services/recipeService';



export default function RecipesGallery() {
    const [recipes, setRecipes] = React.useState<any>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllRecipes();
                setRecipes(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className={styles.gallery_page}>
            <div className={styles.before_gallery}>
                <h2 className={styles.gallery_page_title}>Recipes</h2>
                <input className={styles.search_input} type="text" placeholder="Search for a recipe..."/>
            </div>
            <div className={styles.gallery_main}>
                {recipes.map((recipe: any) => (
                    <div key={recipe._id} className={styles.gallery_card}>
                        <div className={styles.gallery_card_content}>
                            <img className={styles.gallery_card_img} src={recipe.coverUrl} alt="recipe-image"/>
                            <Link className={styles.gallery_card_title} href={`/recipes/${recipe._id}`}>{recipe.title}</Link>
                            <Link className={styles.gallery_card_tags}
                                  href={`/recipes/${recipe._id}`}>{recipe.tags.map((tag: any) => <span
                                className={styles.card_tags}> #{tag} </span>)}</Link></div>
                            <Link href={`/recipes/${recipe._id}`}><button className="button_primary">Open Recipe</button></Link>
                    </div>
                ))}
            </div>
        </div>
    );
}