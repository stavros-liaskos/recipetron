import { TIngredients } from "../types/types";
import { memo, useCallback, useState } from "react";

const Ingredients = ({ ingredients }: { ingredients: TIngredients[] }) => {
  const [multiplier, setMultiplier] = useState(1);

  const handleMultiplierChange = useCallback((qty: number, value: string) => {
    setMultiplier(parseFloat(value) / qty);
  }, []);

  return (
    <tbody>
      {ingredients.map(({ qty, unit, name, comments }, key) => (
        <tr key={key} className="border-black border-b-2">
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <input
              className="text-center"
              type="number"
              min={0.1}
              step={qty % 1 ? 0.01 : 0.1}
              onChange={(e) => handleMultiplierChange(qty, e.target.value)}
              value={(qty * multiplier).toFixed(2).replace(/(\.0+|0+)$/, "")}
            />
          </td>
          <td>{unit}</td>
          <td>{name}</td>
          <td>{comments}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default memo(Ingredients);
