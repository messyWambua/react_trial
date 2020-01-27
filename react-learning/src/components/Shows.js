import React, { Component } from "react";
import { connect } from "react-redux";

import { Link as RouterLink } from 'react-router-dom';
import { withStyles, GridList, GridListTile, GridListTileBar, CircularProgress} from "../styles/materialUI"
import { fetchShows } from  "../store/actions/allShowsActions";
import placeholderMovie from "../images/film-placeholder.jpg";


const Link1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  zoom: {
    zIndex: 2,
    transition: 'transform .2s',
    transform: 'scale(1.2)'
  },
  loader: {
    position: 'absolute',
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }
});

export class Shows extends Component {
constructor(props) {
  super(props);
  this.state = {
    hover: false
  };
  this.hoverOff = this.hoverOff.bind(this);
}

hoverOn(id){
  this.setState({
    hover: id
  });
}

hoverOff(){
  this.setState({
    hover: false
  });
}

componentDidMount() {
  this.props.fetchShows();
}

renderLoading() {
  const  { classes } = this.props;
  return (
    <div className={classes.loader}>
      <CircularProgress color="inherit" size="100" data-test='spinner' />
    </div>
  );
}

renderShows() {
  const  { shows, classes } = this.props;
  return(
    <div className={classes.root}>
      <GridList cellHeight={400} cols={6} spacing={10} className={classes.gridList}>
        {shows.map(tile => (
          <GridListTile
          data-test='shows-cards-test'
          className={this.state.hover === tile.id ? classes.zoom : ""}
          onMouseEnter={this.hoverOn.bind(this, tile.id)}
          onMouseLeave={this.hoverOff}
          component={Link1}
          to={{ pathname: `/shows/${tile.show.id}`}} 
          key={tile.id}
          >
            <img src={tile.show.image? tile.show.image.medium : placeholderMovie } alt={tile.show.name} />
            <GridListTileBar
              title={tile.show.name}
              subtitle={<span>season: {tile.season}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

render() {
  return (
    <div>
      {this.props.loading ? this.renderLoading() : this.renderShows()}
    </div>
  );
}
}

const mapStateToProps = state => ({
  shows: state.shows.shows,
  loading: state.shows.loading
});

export default connect(
  mapStateToProps, 
  { fetchShows }
  )(withStyles(styles)(Shows));
