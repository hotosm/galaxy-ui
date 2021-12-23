import React from "react";
import { useMutation } from 'react-query';
import { TableResults as UserGroupResults } from "../components/formResults";
import { UserGroupReportForm } from "../components/userGroupReport/UserForm";
import { getUserIds } from "../queries/getUserStats";


export const UserGroupReport = () => {
  const { mutate, data, isLoading, error } = useMutation(getUserIds);
  const headings = [
    "Mapper", "Buildings Created", "Buildings Modified", "Kms of Highway Created", "Kms of Highway Modified", "Data Quality Issues"
  ];
    
  return (
    <div>
      <UserGroupReportForm
        fetch={mutate} 
        error={error ? 'Server Error' : null}
      />
      {isLoading && (<div className="mx-auto text-center w-1/4 p-1 mt-5">Loading...</div>)}
      {data && <UserGroupResults
        data={data}
        headings={headings}
      />
}
    </div>
  )
}