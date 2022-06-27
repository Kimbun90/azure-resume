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