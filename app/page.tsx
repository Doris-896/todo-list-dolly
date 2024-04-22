// import Image from "next/image";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center ">
      <Box className="w-500 bg-white rounded-md flex flex-col justify-start items-start p-12">
        <Typography className="font-sans font-bold text-6xl mb-6">
          Todo App
        </Typography>

        <Box className="my-4 flex min-w-full">
          <TextField
            placeholder="Add your new todo"
            className="w-full mr-2 font-sans font-normal text-2xl rounded-md"  
          />
          <Fab
            color="primary"
            size="medium"
            aria-label="add"
            className="bg-purple-500 text-white rounded-md min-w-12"
          >
            <AddIcon />
          </Fab>
        </Box>

        <Box className="my-2 min-w-full">
          <Box className="my-2 flex min-w-full">
            <Typography className="font-sans font-normal text-xl bg-gray-200 p-3 w-full mr-2 rounded-md">
              Hello World
            </Typography>
            <Fab
              color="primary"
              size="medium"
              className="bg-purple-500 text-white rounded-md min-w-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </Fab>
          </Box>

          <Box className="my-2 flex min-w-full">
            <Typography className="font-sans font-normal text-xl bg-gray-200 p-3 w-full mr-2 rounded-md">
              Grow up
            </Typography>
            <Fab
              color="primary"
              size="medium"
              className="bg-purple-500 text-white rounded-md min-w-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </Fab>
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
