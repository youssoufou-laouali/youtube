import React, { Component } from 'react'
import { Paper, Typography } from '@material-ui/core'

 class VideoDetail extends Component {

    render() {
        const { video }= this.props
        if(!video)return <div> Chargement ...</div> 
            const src= `https://www.youtube.com/embed/${video.id.videoId}`
    
        return (
            
            <React.Fragment>
                <Paper elevation={6} style={{ height: '60vh'}}>
                    <iframe frameBorder='0' height='100%' width='100%' title={video.snippet.thumbnails.title} src={src} />
                </Paper>
                <Paper elevation={6} style={{ padding:'15px' }}>
                    <Typography variant='h4'>{video.snippet.title} - {video.snippet.channelTitle} </Typography>
                    <Typography variant='subtitle1' > {video.snippet.channelTitle} </Typography>
                    <Typography varient='subtitle2' > {video.snippet.description} </Typography>
                </Paper>
            </React.Fragment>
        )
        
        
        
    }
}
export default VideoDetail