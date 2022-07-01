import { io } from 'socket.io-client';
 
export const socket = io('http://localhost:8000');
// export let socketID = '';
// socket.on('connect', () => {
//     socketID = socket.id
// })




// import { io } from "socket.io-client";
// import { useAppSelector } from "./redux/app/hooks";
// import { RootState } from "./redux/app/store";
// const phone = useAppSelector((state: RootState) => state.persistedReducer.authSlice.phone)
// export const socket = io("http://localhost:8000", {
//   query: {
//     id: phone,
//   },
// });

// // export const socket = io('http://localhost:8000');
// export let socketId = "";
// socket.on("connect", () => {
//   socketId = socket.id;
// });

 