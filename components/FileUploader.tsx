import {Dispatch, SetStateAction, useRef} from "react";

const FileUploader = ({setRecipe, hasRecipe}: { setRecipe:  Dispatch<SetStateAction<unknown>>, hasRecipe: boolean }) => {
    const inputEl = useRef<HTMLInputElement>(null);
    let fileReader: FileReader;

    const handleFileRead = () => {
        const content = fileReader.result;
        if (Boolean(content)){
            setRecipe(JSON.parse(content as string));
        }
    };

    const handleFileChosen = (file?: File) => {
        if (!file) {
            return
        }
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    return <div className='mt-16'>
        <input
            className="hidden"
            ref={inputEl}
            type='file'
            id='file'
            accept='.json'
            onChange={e => handleFileChosen(e?.target?.files?.[0])}
        />
        <button className="border-red-400 border-2 px-4 py-2 rounded-md cursor-pointer"
                onClick={() => inputEl?.current?.click()}>{hasRecipe ? "Upload another recipe" : "Upload your recipe"}
        </button>
    </div>;
}

export default FileUploader