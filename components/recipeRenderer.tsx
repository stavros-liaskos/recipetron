import {useState} from "react";
import {IRecipe} from "../types/types";

const RecipeRenderer = ({name, ingredients}: IRecipe) => {
    const [mupliplier, setMultiplier] = useState(1);

    if (!name || !ingredients || !ingredients.length) {
        return null;
    }

    return (
        <div className="flex justify-center flex-col">
            <h2 className="text-3xl underline text-center">{name}</h2>
            <input type="number" min={1} onChange={e => setMultiplier(parseFloat(e.target.value))}/>

            <table className="table-auto border-2 border-black p-4">
                <tr className="border-black border-b-2">
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Name</th>
                    <th>Comments</th>
                </tr>
                {ingredients.map(({qty, unit, name, comments}) => (
                    <tr key={name} className="border-black border-b-2">
                        <td className="text-center">{(mupliplier * qty).toFixed(2).replace(/(\.0+|0+)$/, '')}</td>
                        <td className="text-center">{unit}</td>
                        <td className="text-center">{name}</td>
                        <td className="text-center">{comments}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default RecipeRenderer