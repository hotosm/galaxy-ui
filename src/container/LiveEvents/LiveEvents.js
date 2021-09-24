import React, { useState } from "react";
import { useMutation } from "react-query";
import "./LiveEvents.css";
import axios from "../../axios";
import { DataGrid } from "@material-ui/data-grid";
import Table from "../../componenet/Table/Table";

const LiveEvents = (props) => {
  const [startDate, setstartDate] = useState("2021-08-27 09:00:00");
  const [endDate, setendDate] = useState("2021-08-27 11:00:00");
  const [projectsIds, setprojectsIds] = useState(
    "11224,10042,9906,1381,11203,10681,8055,8732,11193,7305,11210,10985,10988,11190,6658,5644,10913,6495,4229"
  );
  const [hashtags, sethashtags] = useState("mapandchathour2021");

  const [liveEventData, setliveEventData] = useState(null);
  const [showAllTable, setshowAllTable] = useState(false);
  const getLiveEventStats = async () => {
    try {
      console.log("calling /live_events");
      const apiEndPoint = encodeURI(
        `/live_events/${startDate}/${endDate}/${projectsIds}/${
          hashtags ? hashtags : " "
        }`
      );
      const res = await axios.get(apiEndPoint);
      console.log("res", res);
      if (res.error);
      else if (!res) {
        // there is an error
        // no result
      } else {
        setliveEventData(res.data);
        console.log("res", res);
        return res.data;
      }
    } catch (error) {
      console.log("Custom Error", error);
    }
  };
  const { mutate, isLoading } = useMutation(getLiveEventStats);
  const getData = () => {
    mutate();
    console.log("call API");
  };
  return (
    <>
      <div className="live-event-style">
        <label>Event between</label>{" "}
        <input
          type="text"
          placeholder="Start Date"
          disabled={isLoading}
          value={startDate}
          onChange={(e) => {
            setstartDate(e.target.value);
          }}
        ></input>
        <label>and</label>
        <input
          type="text"
          placeholder="End Date"
          disabled={isLoading}
          value={endDate}
          onChange={(e) => {
            setendDate(e.target.value);
          }}
        ></input>
        <div>
          <div>
            <label>
              {" "}
              Project Ids{" "}
              <div className="tooltip">
                {" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="help"
                >
                  ?
                </a>
                <span className="tooltiptext">
                  Project IDs as comma separated values. They will be used to
                  filter the changesets based HOT TM standard hashtags
                  (hotosm-project-PROJECT_ID)
                  <br />
                  <br />
                  Filtering is done on the hashtags or the comment fields of a
                  changeset
                </span>
              </div>
            </label>
            <textarea
              value={projectsIds}
              disabled={isLoading}
              onChange={(e) => {
                setprojectsIds(e.target.value);
              }}
              placeholder="Project IDs are entered here, ex: 11224,15985"
              rows="8"
            />
          </div>
          <div>
            <label>
              Hashtags{" "}
              <div className="tooltip">
                {" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="help"
                >
                  ?
                </a>
                <span className="tooltiptext">
                  Add here any hashtag that is associated with the event,
                  hashtags will be used to filter the changesets based on the
                  hashtags or comment field
                </span>
              </div>
            </label>
            <textarea
              value={hashtags}
              disabled={isLoading}
              onChange={(e) => {
                sethashtags(e.target.value);
              }}
              placeholder="#mapandchathour2021"
              rows="8"
            />
          </div>
        </div>
        <button
          onClick={getData}
          disabled={
            startDate === "" ||
            endDate === "" ||
            projectsIds === "" ||
            isLoading
          }
        >
          Refresh
        </button>
        <div>
          <p>
            Refreshing the insights might take ~ 15 seconds based on the event
            duration, number of projects and hashtags
          </p>
          {isLoading && (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </div>
        {liveEventData && !isLoading && (
          <div>
            <div>
              <h1> Total Contributors = {liveEventData.contributersCount}</h1>
              <p>
                Total number of contributors who have mapped at least a feature
                during the specified time span and used one of the projects tags
                (hotosm-project-PROJECT_ID) or an event hashtag in their
                changeset
                <br />
                HOT TM users who have checked/opened TM task and didn't map are
                not counted
              </p>
            </div>
            
            <div>             
                <div className="table-left">
                  <Table title="Event Created Features" mappedFeatures={liveEventData.mappedFeatures.filter(item=> (item.action === 'create'))} ></Table>
                </div>
                <div className="table-right">
                 <Table title="Event Modified Features" mappedFeatures={liveEventData.mappedFeatures.filter(item=> (item.action === 'modify'))} ></Table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LiveEvents;
