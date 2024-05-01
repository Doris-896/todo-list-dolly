"use client";                                                                  //update bản mới nhất của next rồi nhưng vẫn cần đê khắc phục lỗi client component (do dùng hook useState)
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function Home() {
  const [taskName, setTaskName] = useState("");                                // State for input field
  const [tasks, setTasks] = useState([]);                                      // State for storing tasks
 
  const addTask = () => {                                                      // Function to add a task to the list
    if (taskName.trim() !== "") {
      setTasks(prev => [...prev, taskName]);                                   // Add the task to the tasks array
      setTaskName("");                                                         // Clear the input field after adding the task
      }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const handleDelete = (index) => {                                             // Function to handle task deletion
    const newTasks = tasks.filter((_, i) => i !== index);                       // Create a new array of tasks excluding the task at the specified index
    setTasks(newTasks);                                                         // Update the tasks state with the new array
  }

  const pendingTasksMessage =
    tasks.length === 0
      ? "You have no pending task"
      : `You have ${tasks.length} pending ${tasks.length === 1 ? "task" : "tasks"}`;

  return (
    <main className="w-full h-full flex justify-center items-center ">          {/*Tại sao chỗ này bỏ flex thì ô sẽ kéo dài hết chiều ngang của màn?*/}
      <Box className="w-500 bg-white rounded-md flex flex-col p-12">          {/*Tại sao chỗ này bỏ flex thì khoảng cách giữa các phần tử co lại?*/}
        <Typography 
          className="font-sans font-bold text-6xl mb-6">
          Todo App
        </Typography>

        <Box className="my-4 flex min-w-full ">
          <TextField
            className="w-full mr-2 font-sans font-normal text-2xl"
            placeholder="Add your new todo"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <Button
            className="bg-purple-500 p-2 min-w-14"
            variant="contained"
            size="large"
            onClick={addTask}
          >
            <AddIcon />
          </Button>
        </Box>
                    
        {tasks.map((task, index) => (
          <Box className="my-1 flex" key={index}>
            <Typography 
              className="font-sans font-normal text-xl bg-gray-200 p-3 w-full mr-2 rounded-md">          {/*Tại sao cho rounded-md lên dòng 33, 34 thì phần tử con VD như typography không được hưởng ké?*/}
                {task}
            </Typography>

              <Button
                className="bg-purple-500 p-2 min-w-14"
                variant="contained"
                size="large"
                onClick={() => handleDelete(index)}
              >
                <DeleteIcon />
              </Button>
           </Box>
        ))}

        <div className="my-4 flex min-w-full">
          <Typography 
            className="font-sans font-medium text-2xl">
            {pendingTasksMessage}
          </Typography>
          <Button
            className="bg-purple-500 text-white font-sans font-semibold text-lg ml-7"
            variant="contained"
            size="large"
            onClick={() => setTasks([])}                                                                  // Reset tasks state to empty array
          >
            Clear All
          </Button>
        </div>
      </Box>
    </main>
  );
}
