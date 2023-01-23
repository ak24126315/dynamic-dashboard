import React from 'react'

import * as ReactDOM from "react-dom";
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartSeries,
  ChartSeriesItem,
} from "@progress/kendo-react-charts";
import "hammerjs";
const data=[
  { "name": "JP Morgan", "pre": 116, "post": 64 },
  { "name": "HSBC", "pre": 165, "post": 85 },
  { "name": "Credit Suisse", "pre": 215, "post": 97 },
  { "name": "Goldman Sachs", "pre": 75, "post": 27 },
  { "name": "Morgan Stanley", "pre": 100, "post": 16 },
  { "name": "Societe Generale", "pre": 49, "post": 26 },
  { "name": "UBS", "pre": 80, "post": 35 },
  { "name": "BNP Paribas", "pre": 116, "post": 32 },
  { "name": "Unicredit", "pre": 108, "post": 26 },
  { "name": "Credit Agricole", "pre": 90, "post": 17 },
  { "name": "Deutsche Bank", "pre": 67, "post": 10 },
  { "name": "Barclays", "pre": 76, "post": 7 },
  { "name": "Citigroup",  "pre": 91, "post": 19 },
  { "name": "RBS", "pre": 255, "post": 5 }
]


export const Radar = () => {
  return (
    <Chart className="Radar">
    <ChartTitle text="Market Value of Major Banks /bln/" />
    <ChartSeries>
      <ChartSeriesItem
        type="radarLine"
        data={data}
        field="pre"
        categoryField="name"
        name="Market value as of 2007"
      />
      <ChartSeriesItem
        type="radarLine"
        data={data}
        field="post"
        categoryField="name"
        name="Market value as of 2009"
      />
    </ChartSeries>
    <ChartValueAxis>
      <ChartValueAxisItem
        labels={{
          format: "C0",
        }}
      />
    </ChartValueAxis>
    <ChartLegend position="bottom" />
  </Chart>
  )
}
