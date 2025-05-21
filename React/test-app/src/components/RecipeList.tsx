import { useEffect, useState } from "react";

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    cookTimeMinutes: number;
    cuisine: string;
    image: string;
}

const RecipeList = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean | null>(null);


    const fetchRecipes = async () => {

        try {
            const response = await fetch("https://dummyjson.com/recipes");

            if (!response.ok) {
                throw new Error("An error occurred while fetching data.");
            }

            const data: Recipe = await response.json();
            let recipeData: Recipe[] = data.recipes;
            setRecipes(recipeData);
            setLoading(false)
        } catch (error: any) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRecipes();
    }, []);

    // console.log(data);
    if (loading) {
        return (
            <div className="container text-center"><h1 className="text-danger">Loading...</h1></div>
        );
    }

    if (error) {
        return (
            <div className="container text-center"><h1 className="text-danger fw-bold">{error}</h1></div>
        );
    }
    return (
        <div>
            <h1 className="text-info fw-bold">Latest Recipes</h1>
            <div className="row g-3">
                {recipes.map((recipe) => (
                    <div className="col-md-4 ">
                        <div className="card" key={recipe.id}>
                            <img src={recipe.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <h6 className="text-info">Cuisine: {recipe.cuisine}</h6>
                                <p className="card-text">Time to cook: {recipe.cookTimeMinutes} minutes</p>
                                <ul>
                                    {/* {recipe.ingredients} */}
                                </ul>
                            </div>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    );
};
export default RecipeList;