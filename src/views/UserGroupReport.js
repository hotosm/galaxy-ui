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
import { SpinnerIcon } from "../assets/svgIcons";
import { getDataRecency } from "../queries/getDataRecency";
import { formatDurationOutput } from "../utils/timeUtils";

const userGroupPage = [
  { pageTitle: "User Group Report", pageURL: "/user-report" },
];

export const UserGroupReport = () => {
  const { userGroupFormData, setUserGroupFormData } = useContext(FormContext);
  const [formError, setFormError] = useState(null);
  const [userIds, setUserIds] = useState([]);
  const [users, setUsers] = useState();
  const [lastUpdateTime, setLastUpdateTime] = useState(null);

  const { mutate, data, isLoading, error } = useMutation(getUserIds);

  useEffect(() => {
    if (error) {
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
    if (userIds) {
      fetchUserStats(userIds);
      const params = {
        source: "insight",
        output: "user_statistics",
      };
      getDataRecency(params).then((res) => {
        setLastUpdateTime(res["time_difference"]);
      });
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
      />
      {isLoading && (
        <div className="mx-auto text-center w-1/4 p-1 mt-5">
          <SpinnerIcon className="animate-spin w-5 h-5 mr-2 mb-1 inline text-red" />
          Loading...
        </div>
      )}
      {data && (
        <UserGroupResultsTable
          columns={UserGroupColumnHeadings}
          data={aggregateUserGroupData(users)}
          userDataCheck={userIds && userIds.length > 0}
          loading={userIds.length !== users.length}
          lastUpdateTime={formatDurationOutput(lastUpdateTime)}
        />
      )}
    </div>
  );
};
