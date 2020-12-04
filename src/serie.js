import React from "react";
import { Card } from "react-bootstrap";

function Serie(props) {
  return (
 <tr>
  <th scope="row">{this.props.serie.id}</th>
  <td>{this.props.serie.name}</td>
  <td>{this.props.serie.channel}</td>
  <td>{this.props.serie.seasons}</td>
  <td>{this.props.serie.description}</td>
  <td>{this.props.serie.webpage}</td>
  <td>{this.props.serie.poster}</td>
</tr>
);
}

export default Serie;