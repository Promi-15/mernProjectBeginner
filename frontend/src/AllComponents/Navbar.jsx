"use client";
import React from "react";
import { Button, Container, Flex, HStack, Text, IconButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react"; // Keep only Chakra's useColorMode
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LuMoon, LuSun } from "react-icons/lu";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode(); // Use Chakra's hook
  return (
    <Container maxW={"1140px"} px={4}  >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          bgGradient={"to-bl,teal.500, purple.500"}
        >
          <Link to={"/"}>Product Store</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus />
            </Button>
          </Link>
          <IconButton
            onClick={toggleColorMode}
            variant="outline"
            size="sm"
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <LuMoon /> : <LuSun />}
          />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
