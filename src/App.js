import React, { Component } from 'react';
import { Container, Header, Divider, Form, Button } from 'semantic-ui-react'
import Movies from './components/movies/Movies'
import './home.css'

class App extends Component {

  constructor () {
    super();
    this.state = {
      movieSearch: '',
      movies: [],
      isMoviesResults: false
    }
  }

  inputHandler = e => { this.setState({movieSearch: e.target.value}) }

  search = () => {
    if (this.state.movieSearch.length > 0) {
      this.setState({isMoviesResults: !this.state.isMoviesResults})
    }
  }

  closeSearch = () => {this.setState({isMoviesResults: !this.state.isMoviesResults})}

  render() {
    return (
      <div>
        {this.state.isMoviesResults === false ? ( 
          <div className='main_wrapper'>
            <Header as='h1'> IMDB Search </Header>
            <Divider />
            <Container>
              <Form>
                <Form.Field>
                  <input value={this.state.movieSearch} onChange={this.inputHandler} placeholder='Type a Movie title' />
                </Form.Field>
                <Button primary type='submit' onClick={this.search}>Go Find</Button>
              </Form>
            </Container>  
          </div>
        ) : (
          <Movies searchString={this.state.movieSearch} closeComponent={this.closeSearch}/>
        )}
      </div>
    );
  }
}

export default App;
