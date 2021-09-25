const FileUploader = ({setRecipe, hasRecipe}: { setRecipe: Function, hasRecipe: boolean }) => {
    let fileReader: FileReader;

    const handleFileRead = () => {
        const content = fileReader.result;
        content && setRecipe(JSON.parse(content as string));
    };

    const handleFileChosen = (file: any) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    return <div className='mt-16'>
        <span className="pr-8">{hasRecipe ? "Upload another recipe" : "Upload your recipe"}:</span>

        <input
            type='file'
            id='file'
            accept='.json'
            onChange={e => handleFileChosen(e?.target?.files?.[0])}
        />
    </div>;
}

export default FileUploader