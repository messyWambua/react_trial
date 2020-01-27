import React, { Component } from "react";
import { connect } from "react-redux";
import AudioPlayer from 'material-ui-audio-player';
import equal from 'fast-deep-equal'

import { withStyles, withTheme, CircularProgress, Card, CardContent, Button, CardMedia, SkipNextIcon, Typography, CardActions, CardActionArea} from "../styles/materialUI"
import { fetchShow } from  "../store/actions/singleShowActions";
import { loadingAction } from "../store/actions/loadingActions";
import { convertSpeechToText } from "../store/actions/voiceActions";
import placeholderMovie from "../images/film-placeholder.jpg";
import stripHtml from "../utils/htmlToString";

const styles = () => ({
  card: {
    height: '100vh'
  },
  image: {
    position: 'relative',
        left: '50%', 
  },
  loader: {
    position: 'absolute',
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }
});

export class Show extends Component {
constructor(props) {
  super(props);
}



componentDidUpdate(prevProps) {
  if(!equal(this.props.show.id, prevProps.show.id) && Object.keys(this.props.show).length !== 0) {
      this.props.convertSpeechToText(this.props.show.summary);
  }
} 


 async componentDidMount() {
  const id = this.props.match.params.id;
  this.props.fetchShow(id);
}

renderLoading() {
  const  { classes } = this.props;
  return (
    <div>
      <CircularProgress isze="100" className={classes.loader} color="inherit" />
    </div>
  );
}

renderShows() {
  const { classes, speech, show } = this.props

  return (
    <div >
      <Card className={classes.card}>
      <CardActionArea>
        <img className={classes.image} src={show.image? show.image.medium : placeholderMovie } alt={show.name} />
        <CardContent>
        {<AudioPlayer
    elevation={1}
    width="100%"
    variation="default"
    spacing={3}
    download={true}
    order="standart"
    preload="auto"
    loop={true}
    src={speech}
  />}
          <Typography gutterBottom variant="h5" component="h2">
            {show.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {stripHtml(show.summary)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="default">
          Share
        </Button>
        <Button size="small" color="default">
          official site
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

render() {
 return(
  <div>
    {this.props.loading ? this.renderLoading() : this.renderShows()}
  </div>
 )
  
}
}

const mapStateToProps = state => ({
  show: state.show.show,
  loading: state.speech.loading,
  speech: state.speech.speech
});

export default connect(
  mapStateToProps,
  { fetchShow, loadingAction, convertSpeechToText }
  )(withStyles(styles)(Show));
