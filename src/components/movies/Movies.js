import React, { Component } from 'react';
import { Container, Card, Button, Icon } from 'semantic-ui-react'
import MovieItem from './MovieItem'
import './movies.css'
export default class Movies extends Component {

  render () {
    return (
      <div className='movies_wrapper'>
        <div className='close_div'>
          <Button secondary animated='vertical'>
            <Button.Content hidden>Close</Button.Content>
            <Button.Content visible>
              <Icon name='close' />
            </Button.Content>
          </Button>
        </div>
        <Card.Group>
          <MovieItem />
          <MovieItem />
        </Card.Group>
      </div>
    );
  }
}