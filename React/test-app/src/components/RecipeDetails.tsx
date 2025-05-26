import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}
type RecipeDetailsParam = {
    id: string;
}

const RecipeDetails = () => {
    const params = useParams<RecipeDetailsParam>();

    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setIsloading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadRecipe = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/recipes/${params.id}`);
                if (!response.ok) {
                    throw new Error("Failed to load data");
                }
                const data = await response.json();
                setRecipe(data);
            } catch (err: any) {
                setError(err.message || "An Error occurred")
            } finally {
                setIsloading(false);
            }
        }
        if (params.id) loadRecipe();
    }, [params.id]);


    if (loading) {
        return (
            <div className="text-center">
                <h2 className="text-danger"> Loading...</h2>
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center">
                <h2 className="text-danger">Error: {error}</h2>
            </div>
        )
    }

    if (!recipe) {
        return null;
    }

    return (
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="card">
                    <img src={recipe.image} alt={recipe.name} className="card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title">{recipe.name}</h2>
                        <p>
                            <strong>Cuisine:</strong> {recipe.cuisine} |{" "}
                            <strong>Difficulty:</strong> {recipe.difficulty}
                        </p>
                        <p>
                            <strong>Prep Time:</strong> {recipe.prepTimeMinutes} min |{" "}
                            <strong>Cook Time:</strong> {recipe.cookTimeMinutes} min
                        </p>
                        <p>
                            <strong>Servings:</strong> {recipe.servings} |{" "}
                            <strong>Calories/Serving:</strong> {recipe.caloriesPerServing}
                        </p>
                        <p>
                            <strong>Rating:</strong> {recipe.rating} ⭐ ({recipe.reviewCount}{" "}
                            reviews)
                        </p>
                        <div>
                            <strong>Tags:</strong>{" "}
                            {recipe.tags.map((tag) => (
                                <span key={tag} className="badge bg-secondary me-1">{tag}</span>
                            ))}
                        </div>
                        <div className="mt-3">
                            <strong>Ingredients:</strong>
                            <ul>
                                {recipe.ingredients.map((ing, idx) => (
                                    <li key={idx}>{ing}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-3">
                            <strong>Instructions:</strong>
                            <ol>
                                {recipe.instructions.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                ))}
                            </ol>
                        </div>
                        <div>
                            <strong>Meal Type:</strong> {recipe.mealType.join(", ")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default RecipeDetails
