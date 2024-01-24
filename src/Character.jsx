import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { useState } from "react";
import CharacterDropdown from "./CharacterDropdown";

/**
 * Functional component representing the display of a character.
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.character - The character object to be displayed.
 * @returns {JSX.Element} The JSX representation of the component.
 */
export default function Character({ character }) {
  // State to manage the dropdown visibility
  const [openFilms, setOpenFilms] = useState(false);
  const [openTVShows, setOpenTVShows] = useState(false);
  const [openShortFilms, setOpenShortFilms] = useState(false);
  const [openVideoGames, setOpenVideoGames] = useState(false);

  /**
   * Toggle the visibility of the Films dropdown.
   */
  const handleFilmsClick = () => {
    setOpenFilms(!openFilms);
  };

  /**
   * Toggle the visibility of the TV Shows dropdown.
   */
  const handleTVShowsClick = () => {
    setOpenTVShows(!openTVShows);
  };

  /**
   * Toggle the visibility of the Short Films dropdown.
   */
  const handleShortFilmsClick = () => {
    setOpenShortFilms(!openShortFilms);
  };

  /**
   * Toggle the visibility of the Video Games dropdown.
   */
  const handleVideoGamesClick = () => {
    setOpenVideoGames(!openVideoGames);
  };

  // JSX representation of the component
  return (
    <Card key={character.id} style={{ minWidth: 345, marginBottom: 16 }}>
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
            <CharacterDropdown
              open={openFilms}
              handleClick={handleFilmsClick}
              text={"Films"}
              list={character.films}
            />
          )}

          {/* Display sub list of TV shows */}
          {character.tvShows.length > 0 && (
            <CharacterDropdown
              open={openTVShows}
              handleClick={handleTVShowsClick}
              text={"TV Shows"}
              list={character.tvShows}
            />
          )}

          {/* Display sub list of Short Films */}
          {character.shortFilms.length > 0 && (
            <CharacterDropdown
              open={openShortFilms}
              handleClick={handleShortFilmsClick}
              text={"Short Films"}
              list={character.shortFilms}
            />
          )}

          {/* Display sub list of Video Games */}
          {character.videoGames.length > 0 && (
            <CharacterDropdown
              open={openVideoGames}
              handleClick={handleVideoGamesClick}
              text={"Video Games"}
              list={character.videoGames}
            />
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

// Prop type validation
Character.propTypes = {
  character: PropTypes.object.isRequired,
};
