import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function Character({ character }) {
  const [openFilms, setOpenFilms] = useState(false);
  const [openTVShows, setOpenTVShows] = useState(false);
  const [openShortFilms, setOpenShortFilms] = useState(false);
  const [openVideoGames, setOpenVideoGames] = useState(false);

  const handleFilmsClick = () => {
    setOpenFilms(!openFilms);
  };

  const handleTVShowsClick = () => {
    setOpenTVShows(!openTVShows);
  };

  const handleShortFilmsClick = () => {
    setOpenShortFilms(!openShortFilms);
  };

  const handleVideoGamesClick = () => {
    setOpenVideoGames(!openVideoGames);
  };

  return (
    <Card style={{ minWidth: 345, marginBottom: 16 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="character-avatar">
            <img
              src={character.imageUrl}
              alt={character.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Avatar>
        }
        title={character.name}
        titleTypographyProps={{ variant: "h5" }}
      />
      <CardContent>
        <Typography variant="h6">Appeared In</Typography>
        <List component="nav" aria-labelledby="media-list" style={{ mt: 1 }}>
          {/* Display sub list of films */}
          {character.films.length > 0 && (
            <>
              <ListItemButton onClick={handleFilmsClick}>
                <ListItemText primary="Films" />
                {openFilms ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openFilms} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {character.films.length > 0 &&
                    character.films.map((film, index) => (
                      <ListItem sx={{ ml: 2 }} key={index}>
                        <ListItemText primary={film} />
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            </>
          )}

          {/* Display sub list of TV shows */}
          {character.tvShows.length > 0 && (
            <>
              <ListItemButton onClick={handleTVShowsClick}>
                <ListItemText primary="TV Shows" />
                {openTVShows ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openTVShows} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {character.tvShows.length > 0 &&
                    character.tvShows.map((tvShow, index) => (
                      <ListItem sx={{ ml: 2 }} key={index}>
                        <ListItemText primary={tvShow} />
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            </>
          )}

          {/* Display sub list of Short Films */}
          {character.shortFilms.length > 0 && (
            <>
              <ListItemButton onClick={handleShortFilmsClick}>
                <ListItemText primary="Short Films" />
                {openShortFilms ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openShortFilms} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {character.shortFilms.length > 0 &&
                    character.shortFilms.map((shortFilm, index) => (
                      <ListItem sx={{ ml: 2 }} key={index}>
                        <ListItemText primary={shortFilm} />
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            </>
          )}

          {/* Display sub list of Video Games */}
          {character.videoGames.length > 0 && (
            <>
              <ListItemButton onClick={handleVideoGamesClick}>
                <ListItemText primary="Video Games" />
                {openVideoGames ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openVideoGames} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {character.videoGames.length > 0 &&
                    character.videoGames.map((videoGame, index) => (
                      <ListItem sx={{ ml: 2 }} key={index}>
                        <ListItemText primary={videoGame} />
                      </ListItem>
                    ))}
                </List>
              </Collapse>
            </>
          )}
        </List>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="outlined"
          color="secondary"
          href={character.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
};
