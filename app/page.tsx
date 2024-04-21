// import Image from "next/image";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center">
      {/*justify-center: căn giữa chiều ngang, item-center: căn giữa chiều dọc*/}
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

        <div className="flex-row my-4 flex">
          <TextField id="Add your new todo" label="Add your new todo" size-full/>
          <Fab
            color="primary"
            size="medium"
            aria-label="add"
            style={{ backgroundColor: "#ba68c8", color: "#fff", width: "100%", borderRadius: 0}}
            size-full
          >
            <AddIcon />
          </Fab>
        </div>


        <div>
          <div className="flex-row my-1">
            <TextField />
            <Fab
              color="primary"
              size="medium"
              aria-label="add"
              variant="extended"

              style={{ backgroundColor: "#ba68c8", color: "#fff" }}
            >
              <AddIcon />
            </Fab>
          </div>

         

          <div className="flex-row my-1">
            <TextField id="Add your new todo" label="Add your new todo" flex />
            <Fab
              color="primary"
              size="medium"
              aria-label="add"
              style={{ backgroundColor: "#ba68c8", color: "#fff" }}
            >
              <AddIcon />
            </Fab>
          </div>
        </div>

        <div className="my-4 item-center flex">
          <p className="font-sans font-semibold text-xl flex-grow">
            You have ... pending tasks            {/*nếu có 1 task thì ghi task phải làm sao*/}
          </p>
          <Button
            variant="contained"
            style={{ backgroundColor: "#ba68c8", color: "#fff", marginLeft: "10px"}}
            size="medium"
          >
            {/*tại sao phải cho vào ngoặc style?*/}
            Clear All
          </Button>
        </div>
      </Box>
    </main>
  );
}
