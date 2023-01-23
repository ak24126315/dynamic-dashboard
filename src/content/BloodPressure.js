import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";

const COLORS = {
  rejected: "#B91C1C",
  applied: "#D97706",
  interviewing: "#2563EB",
};

const getPercentage = (num, total) =>
  Math.round((num / total) * 100).toFixed(2);

const numIdeal = 75;
const numLow = 24;
const numHigh = 46;
const totalPatients = numIdeal + numLow + numHigh;

const Patients = [
  {
    status: "Ideal",
    value: getPercentage(numIdeal, totalPatients),
    color: COLORS.applied,
  },
  {
    status: "Low",
    value: getPercentage(numLow, totalPatients),
    color: COLORS.interviewing,
  },
  {
    status: "High",
    value: getPercentage(numHigh, totalPatients),
    color: COLORS.rejected,
  },
];

const renderTooltip = context => {
  const { category, value } = context.point || context;
  return (
    <div>
      {category}: {value}%
    </div>
  );
};

const BloodPressure = props => {
  return (
    <div>
      <Chart style={{ minHeight: "20rem" }}>
        <ChartTitle text="Blood Pressure status - this month" />
        <ChartLegend visible={false} />
        <ChartTooltip render={renderTooltip} />
        <ChartSeries>
          <ChartSeriesItem
            type="donut"
            data={Patients}
            categoryField="status"
            field="value"
          >
            <ChartSeriesLabels
              color="#fff"
              background="none"
              content={e => e.category}
            />
          </ChartSeriesItem>
        </ChartSeries>
      </Chart>
    </div>
  );
};

export default BloodPressure;
