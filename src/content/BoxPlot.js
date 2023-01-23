import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
} from "@progress/kendo-react-charts";
import "hammerjs";
const data = [{
    "lower": 1.7,
    "q1": 2.65,
    "median": 3.3,
    "q3": 4.05,
    "upper": 5,
    "mean": 3.4,
    "year": "2005"
}, {
    "lower": 1.4,
    "q1": 2.25,
    "median": 3.3,
    "q3": 4.65,
    "upper": 5.7,
    "mean": 3.4,
    "year": "2006"
}, {
    "lower": 1.9,
    "q1": 2.85,
    "median": 4,
    "q3": 4.45,
    "upper": 6.1,
    "mean": 3.9,
    "outliers": [1, 1.2],
    "year": "2007"
}, {
    "lower": 1.5,
    "q1": 2.35,
    "median": 4.1,
    "q3": 5.225,
    "upper": 5.7,
    "mean": 3.9,
    "outliers": [9, 9.5],
    "year": "2008"
}, {
    "lower": 1.8,
    "q1": 2.325,
    "median": 3.35,
    "q3": 4,
    "upper": 5.4,
    "mean": 3.3,
    "outliers": [1, 6],
    "year": "2009"
}, {
    "lower": 1.8,
    "q1": 2.75,
    "median": 3.35,
    "q3": 3.825,
    "upper": 4.9,
    "mean": 3.4,
    "year": "2010"
}, {
    "lower": 1.7,
    "q1": 2.275,
    "median": 3.2,
    "q3": 3.825,
    "upper": 5.5,
    "mean": 3.2,
    "outliers": [0.5, 6.7],
    "year": "2011"
}, {
    "lower": 1.2,
    "q1": 1.95,
    "median": 2.45,
    "q3": 3.075,
    "upper": 3.5,
    "mean": 2.5,
    "year": "2012"
}, {
    "lower": 1.3,
    "q1": 1.9,
    "median": 3.05,
    "q3": 3.425,
    "upper": 4,
    "mean": 2.7,
    "outliers": [7, 8.5],
    "year": "2013"
}]


const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Monthly Mean Temperatures (&deg;F)" />
        <ChartSeries>
            <ChartSeriesItem
                type="boxPlot"
                lowerField="lower"
                q1Field="q1"
                medianField="median"
                q3Field="q3"
                upperField="upper"
                outliersField="outliers"
                meanField="mean"
                categoryField="year"
                data={data}
            />
        </ChartSeries>
    </Chart>
);
export default ChartContainer;