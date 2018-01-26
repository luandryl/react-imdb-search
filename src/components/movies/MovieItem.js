import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default class MovieItem extends Component {
  render () {
    return (
      <Card>
        <Image src={this.props.movie.Poster} />
        <Card.Content>
          <Card.Header>
            {this.props.movie.Title}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Lançamento {this.props.movie.Year}
            </span>
          </Card.Meta>  
        </Card.Content>
      </Card>
    );
  }
}