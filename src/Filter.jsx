import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";

export default function FilterComponent({
  filterType,
  setFilterType,
  filterQuery,
  setFilterQuery,
  page,
  totalPages,
  setPage,
}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" id="select-filter-type-label">
          Filter By
        </Typography>
        <Select
          labelId="select-filter-type-label"
          id="select-filter-type"
          sx={{ minWidth: 150, mx: 2 }}
          value={filterType}
          onChange={(e) => {
            setFilterType(e.target.value);
          }}
        >
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"films"}>Film</MenuItem>
          <MenuItem value={"tvShows"}>TV Show</MenuItem>
          <MenuItem value={"shortFilms"}>Short Film</MenuItem>
          <MenuItem value={"videoGames"}>Video Game</MenuItem>
        </Select>
        <TextField
          id="filter-query"
          label="Search"
          value={filterQuery}
          fullWidth
          onChange={(e) => {
            setFilterQuery(e.target.value);
          }}
        />
      </Box>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        sx={{
          mt: 2,
          mb: 2,
        }}
      >
        <Stack spacing={2} direction="row">
          <Typography variant="subtitle1">Page: {page}</Typography>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
          />
        </Stack>
      </Box>
    </>
  );
}

FilterComponent.propTypes = {
  filterType: PropTypes.string.isRequired,
  setFilterType: PropTypes.func.isRequired,
  filterQuery: PropTypes.string.isRequired,
  setFilterQuery: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
