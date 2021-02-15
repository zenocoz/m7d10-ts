import React from "react"
import {Card, ListGroup} from "react-bootstrap"

const CityData = () => {
  return (
    <Card style={{width: "18rem"}}>
      <Card.Header>Featured</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>CITY placeholder</ListGroup.Item>
        <ListGroup.Item>TEMP placeholder</ListGroup.Item>
        <ListGroup.Item>CLOUDY/SUNNY placeholder</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default CityData
