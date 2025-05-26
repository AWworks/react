import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    difficulty: string;
    cuisine: string;
    image: string;
}

const RECORDS_PER_PAGE = 10;

const RecipeListSearch = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean | null>(null);

    const [currentPage, setCurrentPage] = useState<number>(0)
    const [searchParam, setSearchParam] = useState<string | null>(null);

    const fetchRecipes = async () => {
        try {
            let apiUrl = `https://dummyjson.com/recipes/search?q=${searchParam}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error("An error occurred while fetching data.");
            }

            const data = await response.json();
            let recipeData: Recipe[] = data.recipes;
            setRecipes(recipeData);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false)

        }
    }

    useEffect(() => {
        fetchRecipes();
    }, [searchParam]);


    const handleSearchInputChange = (e: any) => {
        setSearchParam(e.target.value);
        console.log(`searchString: ${searchParam}`);


    }
    // console.log(data);
    if (loading) {
        return (
            <div className="container text-center"><h1 className="text-info">Loading...</h1></div>
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
            <div className="mb-3">
                <input type="text" className="form-control" id="searchRecipeInput"
                    placeholder="Type to search recipes..."
                    onChange={handleSearchInputChange} />
            </div>
            <div className="row g-3">

                {recipes.map((recipe) => (
                    <div className="col-md-4" key={recipe.id}>
                        <div className="card" >
                            <img src={recipe.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <h6 className="text-info">Cuisine: {recipe.cuisine}</h6>
                                <p className="card-text">Level: {recipe.difficulty} </p>
                                <ul>
                                    {/* {recipe.ingredients} */}
                                </ul>
                            </div>
                            <div className="card-footer">
                                {/* Link to view recipe details */}
                                <Link to={`/recipes/${recipe.id}`}>View Details</Link>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    );
};
export default RecipeListSearch;