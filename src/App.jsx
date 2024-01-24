import useFetchCharacters from "./useFetchCharacters";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Character from "./Character";
import LoadingPreview from "./LoadingPreview";
import ErrorMessage from "./ErrorMessage";
import FilterComponent from "./Filter";

/**
 * Main component representing the Disney Characters app.
 * @returns {JSX.Element} The JSX representation of the component.
 */
export default function App() {
  // State for filtering and pagination
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const [filterType, setFilterType] = useState("name");
  const [filterQuery, setFilterQuery] = useState("");

  // Custom hook for fetching characters
  const { characters, totalPages, loading, error } = useFetchCharacters(
    params,
    page
  );

  /**
   * Clears filters and resets the page to 1.
   */
  const handleClear = () => {
    setFilterQuery("");
    setFilterType("name");
    setParams({});
  };

  // Effect to update params and reset page when filter changes
  useEffect(() => {
    setParams({ [filterType]: filterQuery });
    setPage(1);
  }, [filterType, filterQuery]);

  // JSX representation of the component
  return (
    <Box>
      {/* Header */}
      <Box
        component={"header"}
        sx={{ flexGrow: 1, bgcolor: "primary.main", color: "white" }}
      >
        <Typography variant="h3" align="center" sx={{ p: 2 }}>
          Disney Characters
        </Typography>
      </Box>

      {/* Main content */}
      <Box sx={{ maxWidth: 600, mx: "auto", p: 1 }}>
        {/* Filter component */}
        <FilterComponent
          filterType={filterType}
          setFilterType={setFilterType}
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />

        {/* Display error message if there's an error */}
        {error && (
          <Typography variant="caption">Error. Try Refreshing.</Typography>
        )}

        {/* Display loading preview while data is being fetched */}
        {loading && <LoadingPreview />}

        {/* Display characters or error message based on data availability */}
        {characters.length !== 0 ? (
          characters.length > 1 ? (
            characters.map((character, index) => (
              <Character key={index} character={character} />
            ))
          ) : (
            <Character character={characters} />
          )
        ) : (
          <ErrorMessage handleClear={handleClear} />
        )}
      </Box>
    </Box>
  );
}
