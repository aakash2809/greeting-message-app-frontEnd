
/**
 * Get all available greetings
*/
getAllGreetings = () => {
    url = 'http://localhost:2000/allGreetings'
    fetch(url).then((response) => {
        console.log(response);
        return response.json();    
    }).then((greetingData) => {
        console.log(greetingData);
        const html = greetingData.data.map(greeting => {
            return `<div class="greeting-element">
            <pre>${greeting.name}</pre>
            <pre>${greeting.message}</pre>
            <pre>${greeting.time}</pre>
            <img src="../app/assets/edit.png" class="panel-icon" onclick='prompt()'>
            <img  src="../app/assets/trash.png" class="panel-icon" onclick="confirm('Delete Greeting?')">
           </div>`
        })
        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    }).catch((err) => console.log(err));
}


postGreeting = () => {
    document.getElementById('addGreeting').addEventListener('submit', (e) => {
        
       var name = document.getElementById('name').value;
       var message = document.getElementById('msg').value;
       console.log(name);
       console.log(message);
        console.log(e.target);//console actual form 
        url = 'http://localhost:2000/addGreeting'
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ name:name , message: message }),
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((greetingData) => {
            console.log(greetingData);
        }).catch((err) => {
            console.log(err);
        })
    })
}

getAllGreetings();
postGreeting();