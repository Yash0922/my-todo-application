import { Box, useColorMode } from "@chakra-ui/react";

import React from "react";

import { ShowTask } from "./ShowTask";

const TaskItem = (props) => {
     const { colorMode } = useColorMode();
     
   
     return (
          <Box bgGradient="linear(to-br, #E80A89, #F15B2A)" borderRadius="md" p="3px">
               <Box border="3px solid" borderColor="transparent" bg={colorMode === "dark" ? "black" : "white"} borderRadius="md" width={["96vw", "sm", "md", "lg", "xl"]} p="2">
                    <Box>
                         <ShowTask {...props} />
                        
                         {/* && priority === props.priority */}
                    </Box>
               </Box>
          </Box>
     );
};

export default TaskItem;
