# azure-resume
My own Azure resume following [ACG Project video.](https://youtu.be/ieYrBWmkfno)

## First Step
- Frontend folder contains the website for the resume.
- main.js contains visitor counter code

```js
window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})


const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fectch(functionApi).then(response => {
        return response.json()  
    }).then(response => {
        console.log("Website called functionApi");
        count = response.out;
        document.getElementById("counter").innerText = count;
    }).catch(function(error)){
        console.log(error);
    }
}
```
