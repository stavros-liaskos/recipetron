import {useState} from "react";
import {IRecipe} from "../types/types";

const RecipeRenderer = ({name, ingredients, comments}: IRecipe) => {
    const [multiplier, setMultiplier] = useState(1);

    if (!name || !ingredients || !ingredients.length) {
        return null;
    }

    return (
        (<div className="flex justify-center flex-col">
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
                <tbody>
                {ingredients.map(({qty, unit, name, comments}, key) => (
                    <tr key={key} className="border-black border-b-2">
                        <td><input type="checkbox"/></td>
                        <td>
                            <input className="text-center" type="number" min={0.1}
                                   step={qty % 1 ? 0.01 : 0.1}
                                   onChange={
                                       e => setMultiplier(parseFloat(e.target.value) / qty)}
                                   value={(qty * multiplier).toFixed(2).replace(/(\.0+|0+)$/, '')}/>

                        </td>
                        <td>{unit}</td>
                        <td>{name}</td>
                        <td>{comments}</td>
                    </tr>
                ))}</tbody>
            </table>
                {comments && <p className="bg-cyan-600 text-slate-100 p-6 border-2 rounded"><span className="mr-4">ℹ️</span>{comments}</p>}
        </div>)
    );
}

export default RecipeRenderer