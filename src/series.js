import React, { useState } from "react";
import { FormattedMessage } from 'react-intl';
import Serie from "./serie";

function Series(props) {
    const url=props.url;
    let [series, setSeries] = useState([]);
    d3.json(url).then(data => {
        setSeries=data
    });

  

  let renderSeries = () => {
    return (
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"><FormattedMessage id="Name"/></th>
      <th scope="col"><FormattedMessage id="Channel"/></th>
      <th scope="col"><FormattedMessage id="Seasons"/></th>
      <th scope="col"><FormattedMessage id="Description"/></th>
      <th scope="col"><FormattedMessage id="Webpage"/></th>
      <th scope="col"><FormattedMessage id="Poster"/></th>
    </tr>
  </thead>
  <tbody>   
  {series.map( (e,i) => <Serie key={i} serie={e}/>)}
  </tbody>
</table>
    );
  };

  return (
    <div className="p-4">
      {renderSeries()}
    </div>
  );
}

export default Series;