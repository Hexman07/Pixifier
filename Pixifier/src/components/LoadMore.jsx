import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMoreHome,
  loadMorePostedPosts,
  loadMoreLikedPosts,
} from "../features/pixify/pixifySlice";
import ClipLoader from "react-spinners/ClipLoader";



export default LoadMore;
