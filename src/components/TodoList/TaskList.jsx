import { Box, Center, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { NoTask } from "./NoTask";
import { useSelector,useDispatch } from "react-redux";
import TaskItem from "./TaskItem";
import { useEffect } from "react";

import axios from "axios";
import { getTodo, } from "../Redux/Action";
function TaskList() {

     const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);
  const fdata = useSelector((store) => {
    return store.fdata;
  });
  const [filterData, setFilterData] = useState([]);

  
//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/tasks");
//       setTasks(response.data.tasks);
//     } catch (error) {
//       console.error(error);
//     }
//   };
const data = useSelector((store) => {
     return store.todo;
   });
  useEffect(() => {
   dispatch(getTodo())
  
  }, []);

  //  console.log("f------->", fdata, data);

  useEffect(() => {
    setFilterData(fdata);
  }, [fdata]);

  // console.log("--d-=-=das-ddsad=?>",filterData.result,filterData.result.length);
  return (
    <Box m="auto" py="2" mx="2">
      <Center>
        <Flex direction="column" gap="5">
          {filterData.result && filterData.result.length > 0
            ? filterData.result.map((item) => (
                <TaskItem key={item._id} id={item._id} {...item} />
              ))
            : data?.tasks?.map((item) => (
                <TaskItem key={item._id} id={item._id} {...item} />
              ))}
          {
                                  data?.tasks?.length===0 &&  <NoTask />
                              }
        </Flex>
      </Center>
    </Box>
  );
}

export default TaskList;
