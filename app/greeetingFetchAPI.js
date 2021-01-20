
/**
 * Get all available greetings
*/
getAllGreetings = () =>{
    url ='http://localhost:2000/allGreetings'
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        const html = data.data.map(user=>{
            return `<div class = "greeting-element">
            <p>GreetingId:${user._id}</p>
            <p>Name:${user.name}</p>
            <p>Message:${user.message}</p>
            <p>Created At:${user.createdAt}</p>
           </div>` 
        })
               
    document.querySelector("#app").insertAdjacentHTML("afterbegin", html); 
    }).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
}

getAllGreetings();
