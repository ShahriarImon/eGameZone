import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";
import GameGrid from "../Components/Main/GameGrid/GameGrid";
import Genres from "../Components/LeftBar/Genres";
import { Suspense } from "react";
import SkeletonGC from "../Components/Main/GameGrid/GameCard/SkeletonGC";
import SkeletonGenre from "../Components/LeftBar/Compo/GenreCard/compo/SkeletonGenre";
import ErrorBoundary from "../Hooks/Error Boundary/ErrorBoundary";
import { InfoIcon } from "@chakra-ui/icons";
import ErrorMSG from "../Hooks/Error Boundary/ErrorSMS";
import FilterBoard from "../Components/Main/FilterBoard/FilterBoard";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Grid
        templateAreas={{
          base: `"header" "main" `,
          lg: `"header header"
  "left main" `,
        }}
        templateColumns={{
          base: `1fr`,
          lg: "250px 1fr",
        }}
        gap="1"
        fontWeight="bold"
      >
        <GridItem area={"header"}>
          <ErrorBoundary
            fallback={
              <h4 style={{ padding: "20px" }}>
                <InfoIcon color="#d90d0d" /> Error in navbar
              </h4>
            }
          >
            <Navbar />
          </ErrorBoundary>
        </GridItem>
        <Show above="lg">
          <GridItem area={"left"} marginTop={5}>
            <ErrorBoundary fallback={<ErrorMSG errorPlace={"genres"} />}>
              <Suspense fallback={<SkeletonGenre />}>
                <Genres />
              </Suspense>
            </ErrorBoundary>
          </GridItem>
        </Show>
        <GridItem area={"main"} marginTop={5}>
          <FilterBoard />
          <ErrorBoundary fallback={<ErrorMSG errorPlace={"games"} />}>
            <Suspense fallback={<SkeletonGC />}>
              <GameGrid />
            </Suspense>
          </ErrorBoundary>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Home;
