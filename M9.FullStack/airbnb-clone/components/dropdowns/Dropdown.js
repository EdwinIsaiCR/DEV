import {
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react'
import { AddIcon, HamburgerIcon, ExternalLinkIcon, RepeatIcon, EditIcon, IconButton } from "@chakra-ui/icons";
import CreateAccount from "../Account/CreateAccount";
import Login from "../Account/Login"
import React, { useEffect, useState } from "react";

export default function Dropdown(props) {
  const [Loginbar, setLoginbar] = useState(props?.LoginModel ?? false);
  const [createAccount, setCreateAccount] = useState(false);
  return (
    <Box
    display={'flex'}
    justifyContent={'center'}>
    
      <Menu>
        <MenuButton
        _hover={{ bg: 'gray.500' }}
          as={Button}
          bg={"black"}
          aria-label='Options'
        ><HamburgerIcon /></MenuButton>
        <MenuList>
      <MenuItem icon={<AddIcon />} onClick={() => setCreateAccount(!createAccount)}>
            CreateAccount
          </MenuItem>
        </MenuList>
      </Menu>
      <Login Loginbar={Loginbar} setLoginbar={setLoginbar}></Login>
      <CreateAccount
        Loginbar={createAccount}
        setCreateAccount={setCreateAccount}
      ></CreateAccount>
    </Box>
  );
}
