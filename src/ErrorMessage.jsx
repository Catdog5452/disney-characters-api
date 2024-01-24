import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import PropTypes from "prop-types";

export default function ErrorMessage({ handleClear }) {
  return (
    <Card style={{ minWidth: 345, mb: 2 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="character-avatar">
            <Skeleton variant="circular" width={40} height={40} />
          </Avatar>
        }
        title="No Results Found"
        titleTypographyProps={{ variant: "h5" }}
      />
      <CardContent>
        <Typography variant="h6">
          <Skeleton variant="text" width={200} />
        </Typography>
        <Skeleton variant="rectangular" width={"100%"} height={200} />
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={() => {
            handleClear();
          }}
          variant="outlined"
          color="warning"
        >
          Clear Search
        </Button>
      </CardActions>
    </Card>
  );
}

ErrorMessage.propTypes = {
  handleClear: PropTypes.func.isRequired,
};