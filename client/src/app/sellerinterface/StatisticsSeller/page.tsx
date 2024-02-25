"use client"
import React from "react";
import { TEChart } from "tw-elements-react";

function StatisticsSeller() {
  return (
    <div>
     
      <div style={{ display: 'flex' }}> 
        <div style={{ marginRight: '200px', flex: 1, marginTop:'100px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '50px' }}> 
              <h1 style={{ fontSize: '24px', textAlign: 'center' }}>Daily Statistics</h1>
              <div>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                          <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                              <th scope="col" className="px-6 py-4">#</th>
                              <th scope="col" className="px-6 py-4">Daily Visits</th>
                              <th scope="col" className="px-6 py-4">Products Sold</th>
                              <th scope="col" className="px-6 py-4">Products Liked</th>
                              <th scope="col" className="px-6 py-4">Products out of stock</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">8PM To 16PM </td>
                              <td className="whitespace-nowrap px-6 py-4">200</td>
                              <td className="whitespace-nowrap px-6 py-4">20</td>
                              <td className="whitespace-nowrap px-6 py-4">15</td>
                              <td className="whitespace-nowrap px-6 py-4">31</td>
                            </tr>
                            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">16PM To Midnight</td>
                              <td className="whitespace-nowrap px-6 py-4">411</td>
                              <td className="whitespace-nowrap px-6 py-4">9</td>
                              <td className="whitespace-nowrap px-6 py-4">11</td>
                              <td className="whitespace-nowrap px-6 py-4">26</td>
                            </tr>
                            <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">Midnight To 8AM</td>
                              <td className="whitespace-nowrap px-6 py-4">255</td>
                              <td className="whitespace-nowrap px-6 py-4">12</td>
                              <td className="whitespace-nowrap px-6 py-4">6</td>
                              <td className="whitespace-nowrap px-6 py-4">19</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: '50px'}}></div>
              </div>
              <h1 style={{ fontSize: '24px', textAlign: 'center' }}>Weekly Products Sold</h1>
              <TEChart
                style={{ width: '700px', marginBottom: '50px'  }}
                type="bar"
                data={{
                  labels: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  datasets: [
                    {
                      label: "Traffic",
                      data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
                    },
                  ],
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}> 
              <h1 style={{ fontSize: '24px', textAlign: 'center' }}>Monthly Products Sold</h1>
              <TEChart
                style={{ width: '700px' }}
                type="bar"
                darkTicksColor="#ff0000"
                darkGridLinesColor="#ffff00"
                darkLabelColor="#ff00ff"
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                  ],
                  datasets: [
                    {
                      label: "Traffic",
                      data: [4200, 3250, 4790, 1425, 4123, 1985, 2251],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsSeller;

