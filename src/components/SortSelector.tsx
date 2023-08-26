import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Ordey By: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevence</MenuItem>
        <MenuItem>Date Added</MenuItem>
        <MenuItem>.</MenuItem>
        <MenuItem>..</MenuItem>
        <MenuItem>..</MenuItem>
        <MenuItem>...</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
