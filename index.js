// Add your code here
const sumbitData = {
    method:"POST",
    headers: {
        "Content-Type":'application/json',
        "Accept":'application/json'
    },
    body:JSON.stringify({
        name:"Alton",
        Email:"afo@gmail.com"
    })
}
fetch("http://localhost:3000/users",submitData);
