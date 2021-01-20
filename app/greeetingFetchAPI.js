
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
            <pre>GreetingId:${greeting._id}</pre>
            <pre>Name:${greeting.name}</pre>
            <pre>Message:${greeting.message}</pre>
            <pre>Created At:${greeting.createdAt}</pre>
           </div>`
        })
        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    }).catch((err) => console.log("Can’t access " + url));
}

getAllGreetings();
