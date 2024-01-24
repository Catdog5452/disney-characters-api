import useFetchCharacters from "./useFetchCharacters";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Character from "./Character";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LoadingPreview from "./LoadingPreview";
import ErrorMessage from "./ErrorMessage";
import FilterComponent from "./Filter";

export default function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const [filterType, setFilterType] = useState("name");
  const [filterQuery, setFilterQuery] = useState("");
  const { characters, totalPages, loading, error } = useFetchCharacters(
    params,
    page
  );

  const handleClear = () => {
    setFilterQuery("");
    setFilterType("name");
    setParams({});
  };

  useEffect(() => {
    setParams({ [filterType]: filterQuery });
    setPage(1);
  }, [filterType, filterQuery]);

  return (
    <Box>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h3" sx={{ mt: 2, mb: 2, mx: "auto" }}>
            Disney Characters
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
        <FilterComponent
          filterType={filterType}
          setFilterType={setFilterType}
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />

        {error && (
          <Typography variant="caption">Error. Try Refreshing.</Typography>
        )}

        {loading && <LoadingPreview />}

        {characters.length != 0 ? (
          characters.length > 1 ? (
            characters.map((character) => (
              <Character key={character.id} character={character} />
            ))
          ) : (
            <Character key={characters} character={characters} />
          )
        ) : (
          <ErrorMessage handleClear={handleClear} />
        )}
      </Box>
    </Box>
  );
}
