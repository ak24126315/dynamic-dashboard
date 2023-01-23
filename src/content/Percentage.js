import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CircularGauge } from '@progress/kendo-react-gauges';
const colors = [{
  to: 25,
  color: '#0058e9'
}, {
  from: 25,
  to: 50,
  color: '#37b400'
}, {
  from: 50,
  to: 75,
  color: '#ffc000'
}, {
  from: 75,
  color: '#f31700'
}];

const myStyle = {
    height: "80%",
    width: "100%"
}

const CircularGaugeComponent = () => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => {
      setValue(Math.ceil(Math.random() * 100));
    }, 1000);
  }, []);
  const arcOptions = {
    value: value,
    colors

  };

  const centerRenderer = (value, color) => {
    return <h3 style={{
      color: color
    }}>{value}%</h3>;
  };

  return <CircularGauge style={myStyle} {...arcOptions} centerRender={centerRenderer} />;
};

export default CircularGaugeComponent;