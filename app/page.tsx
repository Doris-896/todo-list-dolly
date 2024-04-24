import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center ">
      {/*Tại sao chỗ này bỏ flex thì ô sẽ kéo dài hết chiều ngang của màn?*/}
      <Box className="w-500 bg-white rounded-md flex flex-col p-12">
        <Typography className="font-sans font-bold text-6xl mb-6">
          Todo App
        </Typography>

        <Box className="my-4 flex min-w-full">
          <TextField
            placeholder="Add your new todo"
            className="w-full mr-2 font-sans font-normal text-2xl rounded-md "
          />
          <Button
            variant="contained"
            size="large"
            className="bg-purple-500 text-white rounded-md p-2"
          >
            <AddIcon />
          </Button>
        </Box>

        <Box className="my-2 min-w-full items-center">
          <Box className="my-2 flex">
            <Typography className="font-sans font-normal text-xl bg-gray-200 p-3 w-full mr-2 rounded-md">
              Hello World
            </Typography>
            <DeleteIcon className="bg-purple-500 text-white rounded-md size-12 p-2" />
          </Box>

          <Box className="my-2 flex">
            <Typography className="font-sans font-normal text-xl bg-gray-200 p-3 w-full mr-2 rounded-md">
              Grow up
            </Typography>
            <DeleteIcon className="bg-purple-500 text-white rounded-md size-12 p-2" />
          </Box>
        </Box>

        <div className="my-4 item-center flex justify-between min-w-full">
          <Typography className="font-sans font-medium text-2xl flex-grow">
            You have ... pending tasks
          </Typography>
          <Button
            variant="contained"
            size="large"
            className="bg-purple-500 rounded-md text-white font-sans font-semibold text-lg ml-5"
          >
            Clear All
          </Button>
        </div>
      </Box>
    </main>
  );
}
