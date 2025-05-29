import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    difficulty: string;
    cuisine: string;
    image: string;
}

const RECORDS_PER_PAGE = 10;

const RecipeListSSPage = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [totalRecipes, setTotalRecipes] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);


    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean | null>(null);


    const fetchRecipes = async () => {

        try {
            const skip = (currentPage - 1);
            let apiUrl = `https://dummyjson.com/recipes?limit=${RECORDS_PER_PAGE}&skip=${skip}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error("An error occurred while fetching data.");
            }

            const data = await response.json();
            let recipeData: Recipe[] = data.recipes;
            setRecipes(recipeData);
            setLoading(false)
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRecipes();
    }, [currentPage]);

    const totalPages = Math.ceil(totalRecipes / RECORDS_PER_PAGE);
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
                                <p className="card-text">Difficulty {recipe.difficulty} </p>
                            </div>
                            <div className="card-footer">
                                <Link to={`/recipes/${recipe.id}`}>
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>

                ))}
            </div>


        </div>
    );
};
export default RecipeListSSPage;