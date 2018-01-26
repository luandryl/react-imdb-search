import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import MovieItem from './MovieItem'
import axios from 'axios'
import './movies.css'

export default class Movies extends Component {
  
  constructor () {
    super()
    this.state = {
      movies: []
    }
  }

  componentWillMount = () => {
    let urlApi = 'http://www.omdbapi.com/?apikey=e75caa77&'
    axios.get(urlApi + 's=' + this.props.searchString)
      .then(({data}) => this.setState({movies: data.Search}))
  }

  render () {
    let cards = this.state.movies.map((m) => {
      return <MovieItem movie={m}/>
    })
    return (
      <div className='movies_wrapper'>
        <div className='close_div'>
          <Button secondary animated='vertical' onClick={this.props.closeComponent}>
            <Button.Content hidden>Close</Button.Content>
            <Button.Content visible>
              <Icon name='close' />
            </Button.Content>
          </Button>
        </div>
        <Card.Group>
          {cards}
        </Card.Group>
      </div>
    );
  }
}