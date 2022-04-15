import React, { useReducer } from "react";
import { addDays } from "date-fns";

let reducer = (data, newData) => {
  return { ...data, ...newData };
};

const initialFormData = {
  startDate: addDays(new Date(), -29),
  endDate: new Date(),
  TMProjectIds: "",
  mapathonHashtags: "",
  usernames: "",
};

const UserGroupContext = React.createContext();

function UserGroupContextProvider(props) {
  const [formData, setFormData] = useReducer(reducer, initialFormData);

  return (
    <UserGroupContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {props.children}
    </UserGroupContext.Provider>
  );
}

export { UserGroupContext, UserGroupContextProvider };
