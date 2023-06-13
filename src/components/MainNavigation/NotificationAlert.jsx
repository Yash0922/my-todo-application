import { Box, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";

const NotificationAlert = () => {
   
     return (
          <>
              
                    <Box py={3} bg="#FFD700" color="blackAlpha.900" fontSize={["xs", "sm"]} fontWeight="extrabold" fontFamily="orbitron" letterSpacing={[2, 2, 2, 3, 4]}>
                         <Center>
                              <p>Please Allow Notification Permission</p>
                         </Center>
                    </Box>
          
          </>
     );
};

export default NotificationAlert;
