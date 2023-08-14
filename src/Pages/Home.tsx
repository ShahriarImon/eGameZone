import { Grid, GridItem, Show, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";
import GameGrid from "../Components/Main/GameGrid/GameGrid";
import Genres from "../Components/LeftBar/Genres";
import { Suspense } from "react";
import SkeletonGC from "../Components/Main/GameGrid/GameCard/SkeletonGC";
import SkeletonGenre from "../Components/LeftBar/Compo/GenreCard/compo/SkeletonGenre";
import ErrorBoundary from "../Hooks/ErrorBoundary";
import { InfoIcon } from "@chakra-ui/icons";

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
          lg: "200px 1fr",
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
          <GridItem area={"left"}>
            <ErrorBoundary
              fallback={
                <h4 style={{ padding: "20px" }}>
                  <InfoIcon color="#d90d0d" /> Error in genres
                </h4>
              }
            >
              <Suspense fallback={<SkeletonGenre />}>
                <Genres />
              </Suspense>
            </ErrorBoundary>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <ErrorBoundary
            fallback={
              <h4 style={{ padding: "20px" }}>
                <InfoIcon color="#d90d0d" /> Error in games
              </h4>
            }
          >
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
