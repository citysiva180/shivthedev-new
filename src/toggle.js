import React from "react";
import { Flex, Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
export default function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex align="center" justify="center" direction="column">
        {/* <Button size="lg" onClick={() => toggleColorMode()}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button> */}
        <IconButton
          aria-label="Search database"
          icon={colorMode === "light" ? <SunIcon /> : <MoonIcon></MoonIcon>}
          onClick={() => toggleColorMode()}
        ></IconButton>
      </Flex>
    </div>
  );
}
