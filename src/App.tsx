// import { useState } from "react";
import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Compoents/Navbar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div style={{ width: "100%" }}>
      <Grid
        templateAreas={{
          base: `"header" "main" `,
          lg: `"header header"
        "left main" `,
        }}
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={"header"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"left"} bg={"green"}>
            Left
          </GridItem>
        </Show>{" "}
        <GridItem area={"main"} bg={"coral"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
