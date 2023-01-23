const Covid = [
  {
    id: 1,
    C: "Total Patient",
    views: 350,
  },
  {
    id: 2,
    C: "Vaccinated",
    views: 151,
  },
];

const TotalCovid = props => {
  return (
    <div>
      <div className="">
        <ul className="totalCovidGrid">
          {Covid.map(C => {
            return (
              <li className="CovidBlock" key={C.id}>
                <span className="CTitle">{C.C}</span>

                <div className="CovidContainer">
                  <span className="Covid">{C.views}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TotalCovid;
