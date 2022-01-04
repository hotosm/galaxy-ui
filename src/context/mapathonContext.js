import React, { useReducer, useEffect } from "react";
import { addHours, parseISO } from "date-fns";

import * as safeStorage from '../utils/safeStorage'

let reducer = (data, newData) => {
  return { ...data, ...newData };
};

const initialFormData = {
  startDate: addHours(new Date(), -1),
  endDate: new Date(),
  TMProjectIds: "",
  mapathonHashtags: ""
};

const localFormData = JSON.parse(safeStorage.getItem("formData"));
if (localFormData ) {
  localFormData.startDate = parseISO(localFormData.startDate)
  localFormData.endDate = parseISO(localFormData.endDate)
}

const MapathonContext = React.createContext();

function MapathonContextProvider(props) {
  const [formData, setFormData] = useReducer(reducer, localFormData || initialFormData);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <MapathonContext.Provider 
      value={{ 
        formData, 
        setFormData
      }}
    >
      {props.children}
    </MapathonContext.Provider>
  );
}

export { MapathonContext, MapathonContextProvider };
