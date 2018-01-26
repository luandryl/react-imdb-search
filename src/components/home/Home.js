import React, { Component } from 'react';
import { Container, Header, Divider, Form, Button } from 'semantic-ui-react'
import './home.css'

class Home extends Component {

  constructor () {
    super();
    this.state = {
      movieSearch: ''
    }
  }

  inputHandler = e => { this.setState({movieSearch: e.target.value}) }

  render() {
    return (
      <div className='main_wrapper'>
        <Header as='h1'> IMDB Search </Header>
        <Divider />
        <Container>
          <Form>
            <Form.Field>
              <input value={this.state.movieSearch} onChange={this.inputHandler} placeholder='Type a Movie title' />
            </Form.Field>
            <Button primary type='submit'>Go Find</Button>
          </Form>
        </Container>  
      </div>
    );
  }
}

export default Home;
