function getGreeting(){
    url ='http://localhost:2000/allGreetings'
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
       })
}

function getGreeting(){
    url ='http://localhost:2000/allGreetings'
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
       })
}

function postGreeting(){
    url ='http://localhost:2000/allGreetings'
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
       })
}

function deleteGreeting(){
    url ='http://localhost:2000//greeting/:greetingId'
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
       })
}
getData();