import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default class MovieItem extends Component {
  render () {
    return (
      <Card>
        <Image src='./avatar.png' />
        <Card.Content>
          <Card.Header>
            2001 - A Space Odyssey
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2015
            </span>
          </Card.Meta>  
          <Card.Description>
            A space time LSD travel
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            300mi watches
          </a>
        </Card.Content>
      </Card>
    );
  }
}