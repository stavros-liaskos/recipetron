import { useState } from "react";
import type { NextPage } from "next";
import FileUploader from "../components/FileUploader";
import RecipeRenderer from "../components/RecipeRenderer";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import { TRecipe } from "../types/types";

const Home: NextPage = () => {
  const [recipe, setRecipe] = useState<TRecipe>();

  return (
    <div>
      <Meta />

      <main className="flex justify-center items-center h-screen text-center">
        <div className="pb-32 align-center">
          <h1 className="text-5xl mb-16">
            Welcome to <span className="text-red-800">Recipetron</span>
          </h1>

          {recipe && <RecipeRenderer {...recipe} />}

          <FileUploader setRecipe={setRecipe} hasRecipe={!!recipe} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
