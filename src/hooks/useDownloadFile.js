import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setDownloadError } from "../features/form/formSlice";

export const useDownloadFile = ({ fetchFile, getFileName }) => {
  const ref = useRef(null);

  const dispatch = useDispatch();
  const [fileData, setFileData] = useState();
  const [fileName, setFileName] = useState();

  const download = async () => {
    try {
      const { data } = await fetchFile();
      setFileData(data);
      setFileName(getFileName());
      dispatch(setDownloadError(null));
      ref.current?.click();
    } catch (error) {
      if (error.response.status === 500) {
        dispatch(setDownloadError(error.response.data));
      } else {
        dispatch(setDownloadError(error.response.data.detail[0]["msg"]));
      }
    }
  };

  return { download, ref, fileData, fileName };
};
