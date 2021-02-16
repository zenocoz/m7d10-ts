import {Navbar, Nav} from "react-bootstrap"
import SearchBar from "../SearchBar/SearchBar"

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <SearchBar />
      {/* <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={handleChange}
          className="mr-sm-2"
        />
        <Button variant="outline-info">Search</Button>
      </Form> */}
    </Navbar>
  )
}

export default MyNavbar
