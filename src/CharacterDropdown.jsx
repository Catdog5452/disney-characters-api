import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";

/**
 * Component representing a dropdown list for character details.
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} props.open - Indicates whether the dropdown is open.
 * @param {function} props.handleClick - Callback function for click event.
 * @param {string} props.text - The text to be displayed in the dropdown.
 * @param {Array} props.list - The list of items to be displayed in the dropdown.
 * @returns {JSX.Element} The JSX representation of the component.
 */
export default function CharacterDropdown({ open, handleClick, text, list }) {
  return (
    <>
      {/* Dropdown header */}
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {/* Dropdown content */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {list.length > 0 &&
            list.map((item, index) => (
              <ListItem sx={{ ml: 2 }} key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
        </List>
      </Collapse>
    </>
  );
}

// Prop type validation
CharacterDropdown.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};
