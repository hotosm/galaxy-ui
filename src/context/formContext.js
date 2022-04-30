import React, { useReducer, useEffect } from "react";
import { addHours, parseISO, addDays } from "date-fns";

import * as safeStorage from "../utils/safeStorage";

let reducer = (data, newData) => {
  return { ...data, ...newData };
};

const initialMapathonData = {
  startDate: addHours(new Date(), -1),
  endDate: new Date(),
  TMProjectIds: "",
  mapathonHashtags: "",
};

const initialUserGroupData = {
  startDate: addDays(new Date(), -29),
  endDate: new Date(),
  TMProjectIds: "",
  mapathonHashtags: "",
  usernames: "",
};

const localMapathonData = JSON.parse(safeStorage.getItem("mapathonData"));
if (localMapathonData) {
  localMapathonData.startDate = parseISO(localMapathonData.startDate);
  localMapathonData.endDate = parseISO(localMapathonData.endDate);
}

const FormContext = React.createContext();

function FormContextProvider(props) {
  const [userGroupFormData, setUserGroupFormData] = useReducer(
    reducer,
    initialUserGroupData
  );
  const [mapathonFormData, setMapathonFormData] = useReducer(
    reducer,
    localMapathonData || initialMapathonData
  );

  useEffect(() => {
    localStorage.setItem("mapathonData", JSON.stringify(mapathonFormData));
  }, [mapathonFormData]);

  return (
    <FormContext.Provider
      value={{
        mapathonFormData,
        setMapathonFormData,
        userGroupFormData,
        setUserGroupFormData,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}

export { FormContext, FormContextProvider };
