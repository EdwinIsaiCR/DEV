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
    Divider,
    Button,
  } from '@chakra-ui/react'
import { AddIcon, HamburgerIcon, ExternalLinkIcon, RepeatIcon, EditIcon, IconButton } from "@chakra-ui/icons";
import CreateAccount from "../Account/CreateAccount";
import Login from "../Account/Login"
import React, { useEffect, useState } from "react";
import { signOut, useSession, signIn } from 'next-auth/react';
import useUser from 'utils/functions/user';

export default function DropdownLoggedIn(props) {
  const [Loginbar, setLoginbar] = useState(props?.LoginModel ?? false);
  const [createAccount, setCreateAccount] = useState(false);
  const user = useUser()
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
            Estas logeado
          </MenuItem>
          <MenuDivider/>
          <MenuItem>
            {user?.email}
          </MenuItem>
          <MenuItem onClick={() => signOut()}> Cerrar sesion
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