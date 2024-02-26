import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Button,
  Text,
  Input,
  InputLeftElement,
  InputGroup,
  Select,
} from "@chakra-ui/react";
import { Search2Icon, HamburgerIcon } from "@chakra-ui/icons";
import useUser from "../utils/functions/user";
import Dropdown from "./dropdowns/Dropdown";
import DropdownLoggedIn from "./dropdowns/DropdownLoggedin";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  IconButton,
} from "@chakra-ui/icons";

const Navbar = () => {
  const user = useUser();

  console.log(user);

  return (
    <>
      <Head>
        <title>AirBnb</title>
      </Head>
      <Grid
        templateColumns={"repeat(6,1fr)"}
        bg={"white"}
        borderStyle={"solid"}
        borderColor={"gray"}
        alignItems="center"
      >
        {/* BOX ES COMO UN DIV EN CHAKRA UI =) */}
        <GridItem colSpan={1}>
          <Box m={[2, 3]}>
            {/* passHref permite que el href de la ruta sea pasado al componente hijo
              es una forma de hacer referencia a un enlace
          */}
            <Link href={"/"} passHref>
              <Image
                src="../images/Airbnb_Logo.png"
                alt="logo"
                width={40}
                pos="relative"
              />
            </Link>
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Box
            display={"flex"}
            pos={"relative"}
            justifyContent={"center"}
            rounded={"lg"}
            border="2px"
            borderColor="blue.500"
          >
            <Box>
              <Button
                w={"full"}
                bg="black"
                _hover={{ bg: "blue.500" }}
                leftIcon={<HamburgerIcon />}
              >
                Filter
              </Button>
            </Box>
            <Box width={"100%"}>
              <InputGroup color={"black"}>
                <InputLeftElement pointerEvents="none">
                  <Search2Icon />
                </InputLeftElement>
                <Input
                  type="search"
                  color={"black"}
                  placeholder="Lugar"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                />
              </InputGroup>
            </Box>
            <Box width={"100%"}>
              <InputGroup color={"black"}>
                <Input
                  placeholder="Fecha"
                  _placeholder={{ opacity: 1, color: "gray.500" }}
                  type="date"
                />
              </InputGroup>
            </Box>
            <Box width={"100%"}>
              <InputGroup color={"black"}>
                <Select placeholder="Huéspedes">
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </Select>
              </InputGroup>
            </Box>
            <Box>
              <Button w={"full"} bg="black" _hover={{ bg: "blue.500" }}>
                Buscar
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"grey.500"}
          >
            <Button size={"lg"} ml={4} bg="blue.500" _hover={{ bg: "blue.300" }}>
              Pon tu casa en Airbnb
            </Button>
          </Box>
          <Box>{() => {}}</Box>
        </GridItem>
        <GridItem colSpan={1}>
          {/* {() => {
            if (user?._id == null) {
              return ( */}
              <Box display={'flex'} justifyContent={'space-evenly'}> 
                  <Button
                  display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    bg={"grey"}
                    color={"white"}
                    _hover={{ bg: "blue.300" }}
                    href={"/login"}
                    passHref
                  >
                    Sign in
                  </Button>
                  <Link href="/signup" passHref>
                  <Button
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}

                    _hover={{ bg: "pink.300" }}
                  >
                    Sign up
                  </Button>
                  </Link>
                </Box>
             {/*  );
            } else {
              return (
                <Box>
                  <Button
                    display={"inline-flex"}
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}
                    href={"#"}
                    onClick={() => signOut()}
                    _hover={{ bg: "pink.300" }}
                  >
                    Sign Out
                  </Button>
                </Box>
              );
            } */}
        </GridItem>
      </Grid>
    </>
  );
};

export default Navbar;
