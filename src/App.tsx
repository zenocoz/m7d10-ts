import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNavbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import {Container, Row, Col} from "react-bootstrap"

function App() {
  return (
    <Container className="container-fluid">
      <Row>
        <Col className="lg-12 md-8 sm-3 xs-2">
          <MyNavbar />
        </Col>
      </Row>

      <Row>
        <Col className="mt-3 offset-4">
          <Home />
        </Col>
      </Row>
    </Container>

    // <div className="App">
    //   <MyNavbar />
    // </div>
  )
}

export default App
