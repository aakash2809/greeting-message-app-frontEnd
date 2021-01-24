const serverUrl = 'http://localhost:2000';

delGreeting = (greetingId) => {
    //console.log(greetingId);
    //deleteGreeting(greetingId);
    document.querySelector('.delete-form-popup').style.display = 'flex';
    document.getElementById("deleteRecord").addEventListener('click',()=>{
        deleteGreeting(greetingId);
    });
}
function a(){
    console.log("hi");
}
putGreeting = () => {
    document.querySelector('.update-form-popup').style.display = 'flex';
}

document.getElementById("closeDeleteGreetingForm").addEventListener('click', () => {
    document.querySelector('.delete-form-popup').style.display = 'none';
})

document.getElementById("closeUpdateGreetingForm").addEventListener('click', () => {
    document.querySelector('.update-form-popup').style.display = 'none';
})

/**
 * @description Get all available greetings
*/
getAllGreetings = () => {
    url = `${serverUrl}/allGreetings`;
    fetch(url).then((response) => {
        return response.json();
    }).then((greetingData) => {
        console.log(greetingData.data);
        greetingData.data.reverse();
        const html = greetingData.data.map(greeting => {
            return `<div class="greeting-element">
            <pre>${greeting.name}</pre>
            <pre>${greeting.message}</pre>
            <pre>${(greeting.createdAt).substring(0, 10)}</pre>
            <img src="../app/assets/edit.png" id="" class="panel-icon" onclick="putGreeting()">
            <img  src="../app/assets/trash.png" id="a" class="panel-icon" onclick="delGreeting('${greeting._id}')">
           </div>`
        })

        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    }).catch((err) => console.log(err));
}

/**
 * @description POST greeting (data post by popup form)
*/
postGreeting = () => {
    document.getElementById('addGreeting').addEventListener('submit', (e) => {
        var name = document.getElementById('name').value;
        var message = document.getElementById('msg').value;
        url = `${serverUrl}/addGreeting`;
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ name: name, message: message }),
        }).then((response) => {
            return response.json();
        }).then((greetingData) => {
            console.log(greetingData);
        }).catch((err) => {
            console.log(err);
        })
    })
}

deleteGreeting = (greetingId) => {
    let id = greetingId;
    url = `${serverUrl}/greeting/${id}`;
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "DELETE",
    }).then((response) => {
        console.log(response)
        return response.json();
    }).then((greetingData) => {
        console.log(greetingData);
    }).catch((err) => {
        console.log(err);
    })
}

updateGreeting = () => {
    let id = '600bacb3a717ad0c682a65b'
    url = `${serverUrl}/updateGreeting/${id}`;

    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({ name: 'Hrithik', message: 'Hello' }),
    }).then((response) => {
        console.log(response)
        return response.json();
    }).then((greetingData) => {
        console.log(greetingData);
    }).catch((err) => {
        console.log(err);
    })
}
getAllGreetings();
postGreeting();
//deleteGreeting();
//updateGreeting();
