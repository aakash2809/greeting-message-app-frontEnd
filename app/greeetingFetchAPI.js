
/**
 * Get all available greetings
*/
getAllGreetings = () => {
    url = 'http://localhost:2000/allGreetings'
    fetch(url).then((response) => {
        return response.json();
    }).then((greetingData) => {
        const html = greetingData.data.map(greeting => {
            return `<div class="greeting-element">
            <pre>Name:${greeting.name}</pre>
            <pre>Message:${greeting.message}</pre>
            <pre>Created At:${greeting.createdAt}</pre>
            <button type="submit" class="btn">Edit</button>
            <button type="submit" class="btn" onclick="alert('a')">Delete</button>
           </div>`
        })
        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    }).catch((err) => console.log(err));
}

/* postGreeting = () => {
    document.getElementById('addGreeting').onsubmit = (e) => {
        e.preventDefault();
        const data = new URLSearchParams();
        console.log(data )
        for (const pair of new FormData(e.target)) {
            console.log(pair); //console pairs of arrays
            console.log(pair[1]);
            
            data.append(pair[1]);
        }
        console.log(e.target);//console actual form 
        url = 'http://localhost:2000/addGreeting'
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data),
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((greetingData) => {
            console.log(greetingData);
        }).catch((err) => {
            console.log(err);
        })
    }
} */

postGreeting = () => {
    document.getElementById('addGreeting').addEventListener('submit', (e) => {
        e.preventDefault();
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