/* Routes to path link to get update delete request */
// Source package for controller
 
import express from 'express';
import controller from '../controllers/index';
// call router like express.Router()
const router = express.Router();

// set get request route link to controllers
router.get('/posts', controller.getAllPosts);


// export router to import form index main
export = router;
