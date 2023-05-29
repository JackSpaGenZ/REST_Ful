/* Function for controller include : get, update, delete, add */
// Source package for controller
import { Request,Response,NextFunction, response } from "express";
import axios, {AxiosResponse} from "axios";

// create Interface Post
interface Post {
    id : number,
    title : string,
    content : string,
    author : string,
    authorId : string
};

// Get all Post 
// getAllPost include 3 parameter are req(Request), res(Response), next (NextFunction)
const getAllPosts = async (req:Request, res:Response, next:NextFunction) => {
    // create a var result type AxiosResponse to return data form json file 
    let result : AxiosResponse = await axios.get('http://localhost:3000')
    // let result : AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // to return data we create a tuple with type Post ( have 5 attribute ) 
    let posts : [Post] = result.data;
    // return by res.status().json({message : variable})
    return res.status(200).json({
        message : posts
    });
};

export default {getAllPosts};