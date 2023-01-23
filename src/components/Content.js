import "@progress/kendo-theme-material/dist/all.css";
import { TileLayout } from "@progress/kendo-react-layout";
import { useMemo, useState } from "react";
import "../App.css";
import ActiveEquipments from "../content/ActiveEquipments";
import Covid from "../content/Covid";
import BloodPressure from "../content/BloodPressure";
import TotalEquipments from "../content/TotalEquipments";
import { Switch } from "@progress/kendo-react-inputs";
import { Radar } from "../content/Radar";
import RadialGauge from "../content/RadialGauge";
import BoxPlot from "../content/BoxPlot";
import AgeGroups from "../content/AgeGroups";
import Percentage from "../content/Percentage";
import Temperature from "../content/Temperature";
//import QR from "../content/QR";
const initialPositions = [
  {
    widgetId: "1",
    col: 1,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    widgetId: "2",
    col: 3,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    widgetId: "3",
    col: 4,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    widgetId: "4",
    col: 1,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    widgetId: "5",
    col: 5,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    widgetId: "6",
    col: 3,
    colSpan: 3,
    rowSpan: 2,
  },
  {
    widgetId: "7",
    col: 1,
    colSpan: 3,
    rowSpan: 2,
  },
  {
    widgetId: "8",
    col: 4,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    widgetId: "9",
    col: 5,
    colSpan: 1,
    rowSpan: 1,
  },
  /*
  {
    widgetId: "10",
    col: 1,
    colSpan: 2,
    rowSpan: 2,
  },
  */


];

const getPositions = initialPositions => {
  // Try to get positions from local storage
  // If we have none in the storage then default to initial positions
  return (
    JSON.parse(localStorage.getItem("dashboard-positions")) || initialPositions
  );
};

const widgetsConfig = [
  {
    id: "1",
    header: "Covid Status",
    body: <Covid />,
    active: true,
  },
  {
    id: "2",
    header: "Active Equipments",
    body: <ActiveEquipments />,
    active: true,
  },
  {
    id: "3",
    header: "Total Equipments",
    body: <TotalEquipments />,
    active: true,
  },
  {
    id: "4",
    header: "Blood Pressure",
    body: <BloodPressure />,
    active: true,
  },
  {
    id: "5",
    header: "RadialGauge ",
    body: <RadialGauge  />,
    active: true,
  },
  {
    id: "6",
    header: "Temperatures ",
    body: <BoxPlot />,
    active: true,
  },
  {
    id: "7",
    header: "Age Groups",
    body: <AgeGroups />,
    active: true,
  },
  {
    id: "8",
    header: "Percentage",
    body: <Percentage />,
    active: true,
  },
  {
    id: "9",
    header: "Temperature",
    body: <Temperature />,
    active: true,
  },
  /*
  {
    id: "10",
    header: "QR Code",
    body: <QR />,
    active: true,
  },
  */
];

function App() {
  const [positions, setPositions] = useState(getPositions(initialPositions));
  const [widgets, setWidgets] = useState(widgetsConfig);

  // Filter out widgets that are inactive
  const activeWidgets = useMemo(() => {
    return widgets.reduce((acc, widget) => {
      // Bail out if widget is not active
      if (!widget.active) return acc;
      // Widget is active, so add it
      acc.push(widget);
      return acc;
    }, []);
  }, [widgets]);

  // Get positions only for active widgets
  // We use position.widgetId to get only active widgets
  const filteredPositions = useMemo(() => {
    return positions.filter(position => {
      // Find a matching widget using the id in the position id and return its active value
      return activeWidgets.find(widget => widget.id === position.widgetId)
        ?.active;
    });
  }, [activeWidgets, positions]);

  const handleReposition = e => {
    setPositions(e.value);
    localStorage.setItem("dashboard-positions", JSON.stringify(e.value));
  };

  const onResetLayout = () => {
    setPositions(initialPositions);
    localStorage.setItem(
      "dashboard-positions",
      JSON.stringify(initialPositions)
    );
  };

  const onToggleWidget = e => {
    const { id } = e.target.props;
    const { value } = e.target;
    const updatedWidgets = widgets.map(widget => {
      if (widget.id === id) {
        return {
          ...widget,
          active: value,
        };
      }
      return widget;
    });

    setWidgets(updatedWidgets);
  };

  return (
    <>
    <div className="App">
      <div className="k-display-flex">
      
        <TileLayout
          columns={5}
          rowHeight={240}
          positions={filteredPositions}
          gap={{ rows: 10, columns: 10 }}
          items={activeWidgets}
          onReposition={handleReposition}
          className="tileLayout"
        />
        
        <aside className="k-ml-4 dashboardAside">
          <div className="k-mb-6">
            <button className="k-button" onClick={onResetLayout}>
              Reset layout
            </button>
          </div>
          <div>
            <h2 className="k-mb-4">Toggle Widgets</h2>
            <div>
              {widgets.map(widget => {
                return (
                  <div className="k-mb-2" key={widget.id}>
                    <Switch
                      checked={widget.active}
                      onChange={onToggleWidget}
                      id={widget.id}
                    />
                    <label className="k-ml-3">{widget.header}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
    </>
  );
}

export default App;
