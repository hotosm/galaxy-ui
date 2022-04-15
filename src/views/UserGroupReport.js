/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext } from "react";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { UserGroupResultsTable } from "../components/userGroup/userGroupResults";
import { UserGroupReportForm } from "../components/userGroup/userGroupForm";
import { getUserIds, getUserStats } from "../queries/getUserStats";
import { MiniNavBar } from "../components/nav/navbar";
import { UserGroupColumnHeadings } from "../components/userGroup/constants";
import { UserGroupContext } from "../context/userGroupContext";
import { aggregateUserGroupData } from "../utils/userGroupUtils";

const userGroupPage = [
  { pageTitle: "User Group Report", pageURL: "/user-report" },
];

export const UserGroupReport = () => {
  const { formData, setFormData } = useContext(UserGroupContext);
  const [formError, setFormError] = useState(null);
  const [userIds, setUserIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState();

  const { mutate, data, isLoading } = useMutation(getUserIds, {
    onError: (error) => {
      if (error.response.status === 500) {
        setFormError(error.response.data);
      } else {
        setFormError(error.response.data.detail[0]["msg"]);
      }
    },
  });

  useEffect(() => {
    if (data) setUserIds(data);
  }, [data]);

  const fetchUserStats = useCallback(
    (ids) => {
      ids.map((i) =>
        getUserStats(i.userId, formData)
          .then((res) => {
            setUsers((oldUsersArray) => [
              ...oldUsersArray,
              { ...i, stats: res },
            ]);
            setLoading(true);
          })
          .catch((error) => {
            if (error.response.status === 500) {
              setFormError(error.response.data);
            } else {
              setFormError(error.response.data.detail[0]["msg"]);
            }
          })
          .finally(() => {
            setLoading(false);
          })
      );
    },
    [formData]
  );

  useEffect(() => {
    if (userIds) {
      fetchUserStats(userIds);
    }
  }, [userIds]);

  return (
    <div>
      <MiniNavBar pages={userGroupPage} />
      <UserGroupReportForm
        fetch={mutate}
        formData={formData}
        setFormData={setFormData}
        setUsers={setUsers}
        formError={formError}
        setFormError={setFormError}
      />
      {(isLoading || loading) && (
        <div className="mx-auto text-center w-1/4 p-1 mt-5">Loading...</div>
      )}
      {data && (
        <UserGroupResultsTable
          columns={UserGroupColumnHeadings}
          data={aggregateUserGroupData(users)}
          userDataCheck={userIds && userIds.length > 0}
        />
      )}
    </div>
  );
};
