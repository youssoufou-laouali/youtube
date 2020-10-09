import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import youtube from './api/youtube';
import VideoList from './components/VideoList'

class App extends Component {

  state={
    videos: [],
    video: null
  }

onVideoSelect = video => {
  this.setState({
    video
  })
  
}

  handleSubmit=async (SearchTerm) =>{
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCLxNr6Ynx8toviEgJU9ksN0frKzqHdQe8',
        q : SearchTerm
    }
    })

   
    this.setState({
      video: response.data.items[0],
      videos: response.data.items
    })
  }

  render(){
const { video, videos }= this.state

    return (
      <Grid justify="center" container spacing={10} style={{width: '100%', padding:'20px' }} >
        <Grid item xs={12}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit ={this.handleSubmit} ></SearchBar>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={video}></VideoDetail>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    );
  }
  
}

export default App;
