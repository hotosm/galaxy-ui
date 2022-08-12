/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext } from "react";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { UserGroupResultsTable } from "../components/userGroup/userGroupResults";
import { UserGroupReportForm } from "../components/userGroup/userGroupForm";
import { FormContext } from "../context/formContext";
import { getUserIds, getUserStats } from "../queries/getUserStats";
import { MiniNavBar } from "../components/nav/navbar";
import { UserGroupColumnHeadings } from "../components/userGroup/constants";
import { aggregateUserGroupData } from "../utils/userGroupUtils";

const userGroupPage = [
  { pageTitle: "User Group Report", pageURL: "/user-report" },
];

export const UserGroupReport = () => {
  const { userGroupFormData, setUserGroupFormData } = useContext(FormContext);
  const [formError, setFormError] = useState(null);
  const [userIds, setUserIds] = useState([]);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  const { mutate, data, isLoading, error } = useMutation(getUserIds);

  useEffect(() => {
    if (error) {
      setLoading(false);
      if (error.response.status === 500) {
        setFormError(error.response.data);
      } else {
        setFormError(error.response.data.detail[0]["msg"]);
      }
    }
  }, [error]);

  useEffect(() => {
    if (data) setUserIds(data);
  }, [data]);

  const fetchUserStats = useCallback(
    (ids) => {
      setLoading(true);
      setUsers([]);
      ids.map((i) =>
        getUserStats(i.userId, userGroupFormData)
          .then((res) => {
            setUsers((oldUsersArray) => [
              ...oldUsersArray,
              { ...i, stats: res },
            ]);
          })
          .catch((error) => {
            if (error.response.status === 500) {
              setFormError(error.response.data);
            } else {
              setFormError(error.response.data.detail[0]["msg"]);
            }
          })
      );
    },
    [userGroupFormData]
  );

  useEffect(() => {
    if (isLoading) {
      setLoading(isLoading);
    }
  }, [isLoading]);

  useEffect(() => {
    if (userIds) {
      fetchUserStats(userIds);
      setLoading(false);
    }
  }, [userIds]);

  return (
    <div>
      <MiniNavBar pages={userGroupPage} />
      <UserGroupReportForm
        fetch={mutate}
        formData={userGroupFormData}
        setFormData={setUserGroupFormData}
        setUsers={setUsers}
        formError={formError}
        setFormError={setFormError}
        setLoading={setLoading}
        loading={loading}
      />
      {data && (
        <UserGroupResultsTable
          columns={UserGroupColumnHeadings}
          data={aggregateUserGroupData(users)}
          userDataCheck={userIds && userIds.length > 0}
          tableLoading={userIds.length !== users.length}
        />
      )}
    </div>
  );
};
