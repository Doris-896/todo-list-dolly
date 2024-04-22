// import Image from "next/image";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center">
      {/*justify-center: căn giữa chiều ngang, item-center: căn giữa chiều dọc*/}
      {/*sao khi zoom thì nó không tự cănn chỉnh màn hình mà bị mất chữ luôn*/}
      <Box
        sx={{
          width: 700,
          height: 1000,
          borderRadius: 3,
          bgcolor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start", // Align content to the top
          alignItems: "flex-start", // Align items to the left
          padding: "50px", // Add padding for space
        }}
      >
        <h1 className="font-sans font-bold text-6xl my-6">Todo App</h1>

        <div className="my-4 flex min-w-full">
          <TextField
            id="Add your new todo"
            label="Add your new todo"
            className="w-full mr-2"
          />
          <Fab
            color="primary"
            size="medium"
            aria-label="add"
            className="bg-purple-500 text-white rounded-md min-w-12"
          >
            <AddIcon />
          </Fab>
        </div>

        <div className="my-2 min-w-full">
          <div className="my-2 flex min-w-full">
            <TextField
              id="Add your new todo"
              label="Add your new todo"
              fullWidth
              sx={{ marginRight: "8px" }}
            />
            <Fab
              color="primary"
              size="medium"
              className="bg-purple-500 text-white rounded-md min-w-12"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
            </Fab>
          </div>

          <div className="my-2 flex min-w-full">
            <TextField
              id="Add your new todo"
              label="Add your new todo"
              fullWidth
              sx={{ marginRight: "8px" }}
            />
            <Fab
              color="primary"
              size="medium"
              className="bg-purple-500 text-white rounded-md min-w-12"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
            </Fab>
          </div>
        </div>

        <div className="my-4 item-center flex">
          <p className="font-sans font-semibold text-xl flex-grow">
            You have ... pending tasks
            {/*nếu có 1 task thì ghi task phải làm sao*/}
          </p>
          <Button
            variant="contained"
            size="medium"
            className="bg-purple-500 text-white rounded-md ml-5"
          >
            Clear All
          </Button>
        </div>
      </Box>
    </main>
  );
}
