import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLikedPosts } from "../features/pixify/pixifySlice";
import ClipLoader from "react-spinners/ClipLoader";
import Card from "../components/Card";
import LoadMore from "../components/LoadMore";

export default LikedPosts;
