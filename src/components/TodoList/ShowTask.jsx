import React ,{useEffect,useState}from "react";
import { Text, Flex, Button,  Badge } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../Redux/Action";
import { getTodo ,toggleMark} from "../Redux/Action";
export const ShowTask = (props) => {
     const dispatch=useDispatch()

     const del =(i)=>{
          console.log(i)
          dispatch(deleteTodo(i))
          
         
        }
     //    useEffect(() => {
     //      dispatch(getTodo())
     //     }, [del]);
         const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
     const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
     const currentDate = new Date().toLocaleString('en-US', options);
     setCurrentDate(currentDate);
  }, []);
     
     return (
          <Flex gap={[1, 1, 2, 3]} flexDir="column">
               <Flex gap={[1, 1, 2, 3]} justifyContent="center">
                    
                   
                    <Badge>{currentDate}</Badge>
               </Flex>

               <Flex gap={[3]} my={2}>
                    <Text flex="1" fontWeight={["semibold", "bold"]}>
                         {props.name}
                    </Text>

                    <Button variant="primary" size={["xs", "sm", "md"]} id={props._id} style={{cursor:"pointer",color:props.complete?"green":"white",fontWeight:props.complete?"700":"700"}} onClick={()=>dispatch(toggleMark(props._id))}>
                    {props.complete?" Completed":" Incomplete"}
                    </Button>

                    <Button variant="primary" size={["xs", "sm", "md"]}onClick={()=>del(props._id)} >
                         DELETE
                    </Button>
               </Flex>
          </Flex>
     );
};
