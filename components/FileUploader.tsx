import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
} from "react";
import { TRecipe } from "../types/types";

const FileUploader = ({
  setRecipe,
  hasRecipe,
}: {
  setRecipe: Dispatch<SetStateAction<TRecipe | undefined>>;
  hasRecipe: boolean;
}) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const handleFileRead = useCallback(
    (e: ProgressEvent<FileReader>) => {
      const fileContent = e.target?.result;

      if (Boolean(fileContent)) {
        setRecipe(JSON.parse(fileContent as string) as TRecipe);
      }
    },
    [setRecipe],
  );

  const handleFileChosen = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target?.files?.[0];
      if (!file) {
        return;
      }
      const fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    },
    [handleFileRead],
  );

  return (
    <div className="mt-16">
      <input
        className="hidden"
        ref={inputEl}
        type="file"
        aria-label="file"
        id="file"
        accept=".json"
        onChange={handleFileChosen}
      />
      <button
        className="border-red-400 border-2 px-4 py-2 rounded-md cursor-pointer"
        onClick={() => inputEl?.current?.click()}
      >
        {hasRecipe ? "Upload another recipe" : "Upload your recipe"}
      </button>
    </div>
  );
};

export default FileUploader;
