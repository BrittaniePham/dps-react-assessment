import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Home extends Component {
  state = { assignmentMarkdown: '' };

  componentDidMount() {
    axios.get('/api/assignment_details')
      .then(res => {
        this.setState({ assignmentMarkdown: res.data.file })
      })
      .catch( error => {
        console.log(error.response);
    });
  }

  render() {
    return(
      <Segment basic>
        <Segment basic textAlign='center'>
          <Image style={styles.centered} size='medium' src={'http://moneyinc.com/wp-content/uploads/2017/10/Beer.jpg'} alt='DevPoint Studios Logo' />
          <Header as='h1' style={styles.header}>Beers & Breweries</Header>
        </Segment>
        <Grid>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment inverted>
              <Link to='/beers'
                style={styles.header}>
                  Beers:
              </Link>
              <Divider />
            </Segment>
          </Grid.Column>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment inverted>
            <Link to='/breweries'
              style={styles.header}>
                Breweries:
            </Link>
              <Divider />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  iframe: {
    width: '100%',
    height: '100vh'
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40',
  }
}

export default Home;
