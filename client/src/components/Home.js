import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image } from 'semantic-ui-react';
import axios from 'axios';

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
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                  Beers:
              </Header>
              <Divider />
            </Segment>
          </Grid.Column>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment inverted>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                  Breweries:
              </Header>
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
    color: '#2ecc40'
  }
}

export default Home;
