import React from "react";
import { Line } from "react-chartjs-2";

export default function UserChart() {
  return (
    <div className="chart">
      Income & Expences
      <Line
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Income",
              data: [12, 8, 3, 5, 2,10,12,42,23,45,65,34],
              backgroundColor: [
                "green",
                "blue",
              ],
              borderColor: [
                "black",
              ],
              borderWidth: 1
            },{
              label:"Expenses",
              data:[12, 8, 3, 5, 2,13,42,12,63,5,35,14],
              backgroundColor: [
                "red",
              ],
              borderColor: [
                "gray",
              ],
              borderWidth: 1
            }
          ],
        }}
        width={300}
        height={150}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
                stacked: true
            }]
        }
        }}
      ></Line>
    </div>
  );
}


