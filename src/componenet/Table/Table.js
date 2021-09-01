import React from 'react'
import { useState } from 'react';


const Table = props =>
{

    const [showAllTable, setshowAllTable] = useState(false);
    return <> 
     <h2>{props.title}</h2>
                  <table className="">
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th>Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!showAllTable &&
                        props.mappedFeatures.slice(0, 10).map(
                          (item) =>(
                              <tr key={item.key + item.action}>
                                <td>{item.key}</td>
                                <td>{item.count}</td>
                              </tr>
                            )
                        )}
                      {showAllTable &&
                        props.mappedFeatures.map(
                          (item) => (
                              <tr key={item.key + item.action}>
                                <td>{item.key}</td>
                                <td>{item.count}</td>
                              </tr>
                            )
                        )}
                    </tbody>
                  </table>

                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      setshowAllTable(!showAllTable);
                    }}
                  >
                    {showAllTable ? "Show less" : "Show all"}
                  </a>
    </>
}

export default Table;