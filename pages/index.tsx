import {useState} from "react";
import type {NextPage} from 'next'
import Head from 'next/head'
import FileUploader from "../components/FileUploader";
import RecipeRenderer from "../components/RecipeRenderer";
import Footer from "../components/Footer";

const Home: NextPage = () => {
    const [recipe, setRecipe] = useState();

    return (
        <div>
            <Head>
                <title>Recipetron</title>
                <meta name="description" content="Cook more, easily"/>
                <link rel="icon"
                      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥩</text></svg>"/>
            </Head>

            <main className="flex justify-center items-center h-screen text-center">
                <div className="pb-32 align-center">
                    <h1 className="text-5xl mb-16">
                        Welcome to <span className="text-red-800">Recipetron</span>
                    </h1>

                    {recipe && <RecipeRenderer {...recipe}/>}

                    <FileUploader setRecipe={setRecipe} hasRecipe={!!recipe}/>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default Home
