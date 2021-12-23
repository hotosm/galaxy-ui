import React from "react";
import { useEffect, useState } from "react";
import { addHours } from "date-fns";
import { useMutation } from 'react-query';
import { TableResults as UserGroupResults } from "../components/formResults";
import { UserGroupReportForm } from "../components/userGroupReport/UserForm";
import { getUserIds, getUserStats } from "../queries/getUserStats";


export const UserGroupReport = () => {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    startDate: addHours(new Date(), -1),
    endDate: new Date(),
    usernames: "",
    mapathonHashtags: ""
  });

  const { mutate, data, isLoading, error } = useMutation(getUserIds);

  useEffect(() => {
    if(data) {
      data.map((i) => getUserStats(i.userId, formData).then((res) => setUsers(oldUsersArray => [...oldUsersArray, {...i, stats: res}])))
    }
  }, [data])
  
  console.log(data)

  console.log(users)
  
  const headings = [
    "Mapper", "Buildings Created", "Buildings Modified", "Kms of Highway Created", "Kms of Highway Modified", "Data Quality Issues"
  ];
    
  return (
    <div>
      <UserGroupReportForm
        fetch={mutate} 
        formData={formData}
        setFormData={setFormData}
        error={error ? 'Server Error' : null}
      />
      {isLoading && (<div className="mx-auto text-center w-1/4 p-1 mt-5">Loading...</div>)}
      {users.length > 0 && <UserGroupResults
        data={users}
        headings={headings}
      />
}
    </div>
  )

}