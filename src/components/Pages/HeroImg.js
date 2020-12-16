import { Container } from '@material-ui/core'
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function HeroImg() {
    return (
        <div>
           <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron> 
        </div>
    )
}
