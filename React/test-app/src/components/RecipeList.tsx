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

const RecipeList = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean | null>(null);

    const [currentPage, setCurrentPage] = useState<number>(0)


    const fetchRecipes = async () => {

        try {
            const response = await fetch("https://dummyjson.com/recipes");

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
    }, []);

    //Calculate the number of recipes
    const totalRecipes = recipes.length;
    const totalPages = Math.ceil(totalRecipes / RECORDS_PER_PAGE);

    //Calculate start index and end index for Current page
    const startIndex = (currentPage - 1) * RECORDS_PER_PAGE;
    const endIndex = startIndex + RECORDS_PER_PAGE;

    //Slice the recipes array to get onlythe recipes for the crrent page
    const paginatedRecipes = recipes.slice(startIndex, endIndex);

    //Generate array of page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
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
            <div className="row g-3">
                {paginatedRecipes.map((recipe) => (
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
            <nav className="mt-4">
                <ul className="pagination justify-content-center">
                    {pageNumbers.map((pageNumber) => (
                        <li
                            className={
                                currentPage == pageNumber ? "page-item active" : "page-item"
                            }
                            key={pageNumber}
                        >
                            <button
                                className="page-link"
                                onClick={() => {
                                    setCurrentPage(pageNumber); // Set the current page
                                    window.scrollTo({ top: 0 }); // Scroll to top on page change
                                }}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
export default RecipeList;