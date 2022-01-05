/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { addHours } from "date-fns";
import { useMutation } from 'react-query';
import  { UserGroupResults } from "../components/userGroup/userGroupResults";
import { UserGroupReportForm } from "../components/userGroup/userGroupForm";
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

  const fetchUserStats = useCallback((ids) => {
    ids.map((i) => getUserStats(i.userId, formData)
      .then((res) => {
        setUsers(oldUsersArray => [...oldUsersArray, {...i, stats: res}])
      })
    )
  }, [formData])

  useEffect(() => {
    if(data) {
      fetchUserStats(data)
    }
  }, [data])

  
  const headings = [
    "Mapper", "Buildings Created", "Buildings Modified", "Highways Created", "Highways Modified", "Data Quality Issues"
  ];
    
  return (
    <div>
      <UserGroupReportForm
        fetch={mutate} 
        formData={formData}
        setFormData={setFormData}
        setUsers={setUsers}
        error={error ? 'Server Error' : null}
      />
      {isLoading && (<div className="mx-auto text-center w-1/4 p-1 mt-5">Loading...</div>)}
      {users.length > 0 && (
        <UserGroupResults
          data={users}
          headings={headings}
          startDate={formData.startDate}
          endDate={formData.endDate}
        />
      )}
    </div>
  )
};
