import { useRef, useState } from "react";

export const useDownloadFile = ({
  fetchFile,
  getFileName,
}) => {
  const ref = useRef(null);
  const [fileData, setFileData] = useState();
  const [fileName, setFileName] = useState();
  const [fileError, setFileError] = useState(null)

  const download = async () => {
    try {
      const { data } = await fetchFile();
      setFileData(data);
      setFileName(getFileName());
      ref.current?.click();
    } catch (error) {
      if(error.response.status === 500) {
        setFileError(error.response.data);
      } else {
        setFileError(error.response.data.detail[0]['msg']);
      }
    }
  };

  return { download, ref, fileData, fileName, fileError };
};
