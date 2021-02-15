import React, {useState, useEffect} from "react"
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"

const MyNavbar = () => {
  const [keyword, setKeyword] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={handleChange}
          className="mr-sm-2"
        />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  )
}

export default MyNavbar
