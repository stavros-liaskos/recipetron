import {useState} from "react";
import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FileUploader from "../components/fileUploader";
import RecipeRenderer from "../components/recipeRenderer";

const Home: NextPage = () => {
    const [recipe, setRecipe] = useState();

    return (
        <div>
            <Head>
                <title>Recipetron 🥩</title>
                <meta name="description" content="Cook more, easily"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="flex justify-center h-full">
                <div className="my-32 align-center">
                    <h1 className="text-5xl mb-16">
                        Welcome to <span className="text-red-800">Recipetron</span>
                    </h1>

                    {recipe && <RecipeRenderer {...recipe}/>}

                    <FileUploader setRecipe={setRecipe} hasRecipe={!!recipe}/>
                </div>
            </main>

            <footer className="fixed bottom-0 left-0 right-0 flex justify-center border-t-2 py-8">
                <a
                    href="https://github.com/stavros-liaskos/recipetron"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by 🥩 and <Image alt="github"
                                             src="https://github.githubassets.com/images/icons/emoji/octocat.png"
                                             height="20" width="20"/>
                </a>
            </footer>
        </div>
    )
}

export default Home
