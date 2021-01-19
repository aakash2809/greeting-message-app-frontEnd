function getGreeting(){
    url ='http://localhost:2000/allGreetings'
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
       })
}

getData();