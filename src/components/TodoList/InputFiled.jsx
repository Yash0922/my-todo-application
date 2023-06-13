import { Box, Input,  FormLabel, FormControl, Center, Button, Flex, useColorMode, Checkbox, Select, Text, VStack, HStack } from "@chakra-ui/react";
import React, {useState}from "react";
import { v4 as uuid } from "uuid";
import {getTodo, postTodos} from "../Redux/Action"
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
// import { taskAction } from "../../redux-store/todoSlice";
import { searchTasks } from "../Redux/Action";
const InputFiled = () => {
     const { colorMode, toggleColorMode } = useColorMode();
     const [searchQuery , setSearchQuery] =  useState("");
     const[data,setState]=useState("");
     const dispatch=useDispatch()
     
     const SendTodo=()=>{
      dispatch(postTodos(data))
      dispatch(getTodo())
     }
     
    const searchData=(e)=>{
     setSearchQuery(e.target.value)
     dispatch(searchTasks(e.target.value))
    }

     return (
          <Box m="auto" py="5" mx="2">
               <Center>
                    <Flex flexDir="column">
                         
                              <Button variant="primary" w="100%" >
                                   ADD TODO LIST
                              </Button>
                    
     
                              <Box bgGradient="linear(to-br, #E80A89, #F15B2A)" borderRadius="md" p="3px" my={3} w={["98vw", "auto"]}>
                                   <Box
                                        px="3"
                                        border="2px solid"
                                        bgGradient="linear(to-br, #E80A89, #F15B2A)"
                                        borderRadius="md"
                                        borderColor="transparent"
                                        bg={colorMode === "dark" ? "black" : "white"}
                                   >
                                        <Box width={["100%", "sm", "md", "lg", "xl"]}>
                                             <FormControl my={10}>
                                                  <FormLabel>Enter Task</FormLabel>
                                                  <Input
                                                       m={1}
                                                        value={data}
                                                       maxLength="35"
                                                       onChange={(e)=>{setState(e.target.value)}}
                                                       type="text"
                                                       width={["100%", "sm", "md", "lg", "xl"]}
                                                       placeholder="Add Your Task"
                                                       _placeholder={{
                                                            color: colorMode === "dark" ? "white" : "black",
                                                            fontWeight: "semiBold",
                                                       }}
                                                       borderColor={colorMode === "dark" ? "white" : "black"}
                                                  />
                                                 
                                             </FormControl>

                                           
                                            
                                                 
                                             

                                             <HStack my={2}>
                                                  <Button onClick={SendTodo} variant="primary" w="50%" >
                                                       UPDATE
                                                       
                                                  </Button>
                                                  <Button variant="primary" w="50%">
                                                       CANCEL
                                                  </Button>
                                             </HStack>
                                            
                                        </Box>
                                   </Box>
                              </Box>
                              <Box bgGradient="linear(to-br, #E80A89, #F15B2A)" borderRadius="md" p="3px" my={3} w={["98vw", "auto"]}>
               <Box
                                        p="3"
                                        border="2px solid"
                                        bgGradient="linear(to-br, #E80A89, #F15B2A)"
                                        borderRadius="md"
                                        borderColor="transparent"
                                        bg={colorMode === "dark" ? "black" : "white"}
                                   >
               <FormLabel>Search Task</FormLabel>
                                                  <Input
                                                        m={1}
                                                       maxLength="35"
                                                       onChange={(e) => searchData(e)}
                                                       type="text"
                                                       width={["100%", "sm", "md", "lg", "xl"]}
                                                       placeholder="Search Task"
                                                       _placeholder={{
                                                            color: colorMode === "dark" ? "white" : "black",
                                                            fontWeight: "semiBold",
                                                       }}
                                                       borderColor={colorMode === "dark" ? "white" : "black"}
                                                     
                                                  />
                                                    </Box>
                                                  </Box>
                    </Flex>
                   
                    {/* <FormControl width={["sm", "md", "lg", "xl"]}>
                         <Flex gap="3">
                              <Input
                                   type="text"
                                   placeholder="Add Your Todo List"
                                   _placeholder={{
                                        color:
                                             colorMode === "dark"
                                                  ? "primary"
                                                  : "black",
                                        fontWeight: "bold",
                                   }}
                                   border="none"
                                  
                                   // borderColor="linear(to-br, #E80A89, #F15B2A)"
                                   value={taskValue}
                                   bgColor="linear(to-br, #E80A89, #F15B2A)"
                                   onChange={taskValueHandler}
                              />
                              <Button variant="primary" onClick={taskHandler}>
                                   <FaPlus />
                              </Button>
                         </Flex>
                    </FormControl> */}
                       
               </Center>
            
          </Box>
     );
};

export default InputFiled;
