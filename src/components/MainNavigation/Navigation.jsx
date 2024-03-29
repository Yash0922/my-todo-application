import React from "react";
import { Box, Flex, IconButton, Text, useColorMode } from "@chakra-ui/react";

import {  FaMoon, FaSun } from "react-icons/fa";
import TaskCategory from "./TaskCategory";
import { Outlet } from "react-router-dom";





const Navigation = () => {
     const { colorMode, toggleColorMode } = useColorMode();
    
     
     return (
          <>
               <Box
                    as="header"
                    m="auto"
                    w="100vw"
                    // sx={{ boxShadow: " 15px 4px 10px #b1b9b3" }}
               >
                    <Flex alignItems="center" mx={["sm", "xl"]}>
                         <Box fontSize={["2xl", "3xl"]} fontWeight={["bold", "extrabold"]} flex="1" textAlign={"center"} m={5} ml={20}>
                              <Text>My Routine</Text>
                         </Box>
                         <Box>
                              <IconButton fontSize={["xl", "2xl"]} px="5" bg="none" onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />} />
                         </Box>
                    </Flex>
                    <TaskCategory />
               </Box>
               <Outlet />
          </>
     );
};

export default Navigation;
