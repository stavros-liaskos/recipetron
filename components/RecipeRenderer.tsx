import { TRecipe } from "../types/types";
import Ingredients from "./Ingredients";

const RecipeRenderer = ({ name, ingredients, comments }: TRecipe) => {
  if (!name || !ingredients || !ingredients.length) {
    return null;
  }

  return (
    <div className="flex justify-center flex-col">
      <h2 className="text-3xl underline text-center mb-4">{name}</h2>
      <table className="table-auto border-2 border-black p-4 mb-4">
        <thead>
          <tr className="border-black border-b-2">
            <th>Complete</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Name</th>
            <th>Comments</th>
          </tr>
        </thead>
        <Ingredients ingredients={ingredients} />
      </table>
      {comments && (
        <p className="bg-cyan-600 text-slate-100 p-6 border-2 rounded">
          <span className="mr-4">ℹ️</span>
          {comments}
        </p>
      )}
    </div>
  );
};

export default RecipeRenderer;
