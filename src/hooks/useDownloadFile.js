import { useRef, useState } from "react";

export const useDownloadFile = ({
  fetchFile,
  onError,
  getFileName,
}) => {
  const ref = useRef(null);
  const [fileData, setFileData] = useState();;
  const [fileName, setFileName] = useState();

  const download = async () => {
    try {
      const { data } = await fetchFile();
      setFileData(data);
      setFileName(getFileName());
      ref.current?.click();
    } catch (error) {
      onError();
    }
  };

  return { download, ref, fileData, fileName };
};
