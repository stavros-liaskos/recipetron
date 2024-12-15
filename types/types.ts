export type TIngredients = {
  unit: string;
  name: string;
  qty: number;
  comments?: string;
};

export type TRecipe = {
  name: string;
  ingredients: TIngredients[];
  comments?: string;
};
