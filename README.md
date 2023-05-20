# REST_Ful

## Git : 
        git remote add origin https://github.com/JackSpaGenZ/REST_Ful.git
        git branch -M main
        git push -u origin main
        -------------------------------------------------
        git add .
        git commit -m "name commit"
        git push

## Use : 
        - typescript 
        - ts-node 
        - express 
        - morgan 
        - axios 
        - nodemon
## Abort :
        About REST API we need : add Post, Update Post (if post doesn't exist then create new Post), delete Post, get Posts (show all Posts), get Post (show a Post)
# Note about package :
## Axios :
### about : 
        is Promise-based API more powerfull than Fetch API like :
                - Request and response interception
                - Streamlined error handling
                - Protection against XSRF
                - Support for upload progress
                - Response timeout
                - The ability to cancel requests
                - Support for older browsers
                - Automatic JSON data transformation
### Example for Post request with Axios :
```
axios({
        method: 'post',
        url: '/login',
        data: {
                firstName: 'Finn',
                lastName: 'Williams'
        }
});
```
## express :
### about :
## morgan :
### about :