import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import VideoItem from './VideoItem'


export default class VideoList extends Component {
     
    render() {
        const { videos, onVideoSelect }= this.props
        const liste = videos.map((v, index) => <VideoItem onVideoSelect={onVideoSelect} key={index} video={v} />)
        return (
            <Grid container spacing={3}>
                {liste}
            </Grid>
            
        )
    }
}
