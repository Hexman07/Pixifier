import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onPost } from "../features/pixify/pixifySlice";
import ClipLoader from "react-spinners/ClipLoader";


export default CreatePost;
