/* Function for controller include : get, update, delete, */
// Source package for controller
import { Request,Response,NextFunction } from "express";
import axios, {AxiosResponse} from "axios";

// create Interface Post
interface Post {
    id : number,
    title : string,
    content : string,
    author : string,
    authorId : string
}

