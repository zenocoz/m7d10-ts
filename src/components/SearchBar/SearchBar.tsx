import React, {useState, useEffect} from "react"
import {Form, FormControl, Button} from "react-bootstrap"

export default function SearchBar() {
  const [keyword, setKeyword] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value)
  }
  return (
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
  )
}
