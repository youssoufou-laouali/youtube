import React, { Component } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

export default class VideoItem extends Component {
   

    render() {
        const {video, onVideoSelect}=this.props
        return (
            <Grid item xs={12}>
                <Paper style={{ display :'flex', alignItems: 'center', cursor:'pointer' }} onClick={()=> onVideoSelect(video)}>
                    <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" style={{ marginRight : '20px' }} />
                    <Typography variant="subtitle1"> <strong>{video.snippet.title}</strong> </Typography>
                </Paper>
            </Grid>
        )
    }
}
