interface IIngredients {
    unit: string
    name: string
    qty: number
    comments?: string
}

export interface IRecipe {
    name: string
    ingredients: IIngredients[]
    comments?: string
}