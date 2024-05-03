"use client"; //update bản mới nhất của next rồi nhưng vẫn cần đê khắc phục lỗi client component (do dùng hook useState)
import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import ButtonComp from "@/components/Button";
import TextFieldComp from "@/components/TextField";

export default function Home() {
  const [taskName, setTaskName] = useState(""); // State for input field
  const [tasks, setTasks] = useState<string[]>([]); // State for storing tasks, khai báo là truyền vào sring

  const addTask = () => {
    // Function to add a task to the list
    if (taskName.trim() !== "") {
      setTasks((prev) => [...prev, taskName]); // Add the task to the tasks array
      setTaskName(""); // Clear the input field after adding the task
    }
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const handleDelete = (index: number) => {
    // Function to handle task deletion
    const newTasks = tasks.filter((_, i) => i !== index); // Create a new array of tasks excluding the task at the specified index
    setTasks(newTasks); // Update the tasks state with the new array
  };

  const pendingTasksMessage =
    tasks.length === 0
      ? "You have no pending task"
      : `You have ${tasks.length} pending ${
          tasks.length === 1 ? "task" : "tasks"
        }`;

  return (
    <main className="w-full h-full flex justify-center items-center ">
      {/*Tại sao chỗ này bỏ flex thì ô sẽ kéo dài hết chiều ngang của màn?*/}
      <Box className="w-500 bg-white rounded-md flex flex-col p-12">
        {/*Tại sao chỗ này bỏ flex thì khoảng cách giữa các phần tử co lại?*/}
        <Typography className="font-sans font-bold text-6xl mb-6">
          Todo App
        </Typography>
        <Box className="my-4 flex min-w-full ">
          <TextFieldComp
            childrenProp={"Add your new todo"}
            value={taskName}
            handleChange={(e) => setTaskName(e.target.value)}
            handleKeyDown={handleKeyDown}
          />

          <ButtonComp 
            childrenProp={<AddIcon />} 
            handleClick={addTask} 
          />
        </Box>
        {tasks.map((task, index) => (
          <Box className="my-1 flex" key={index}>
            <Typography className="font-sans font-normal text-xl bg-gray-200 p-3 w-full mr-2 rounded-md">
              {/*Tại sao cho rounded-md lên dòng 33, 34 thì phần tử con VD như typography không được hưởng ké?*/}
              {task}
            </Typography>

            <ButtonComp
              childrenProp={<DeleteIcon />}
              handleClick={() => handleDelete(index)}
            />
          </Box>
        ))}
        <div className="my-4 flex min-w-full">
          <Typography className="font-sans font-medium text-2xl">
            {pendingTasksMessage}
          </Typography>
          <ButtonComp
            childrenProp={"Clear All"}
            handleClick={() => setTasks([])}
            additionalClassname={"ml-7 "}
          />
        </div>
      </Box>
    </main>
  );
}
