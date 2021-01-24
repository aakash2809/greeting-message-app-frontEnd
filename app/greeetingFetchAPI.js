const serverUrl = 'http://localhost:2000';

delGreeting = (greetingId) => {
    document.querySelector('.delete-form-popup').style.display = 'flex';
    document.getElementById("deleteRecord").addEventListener('click',()=>{
        deleteGreeting(greetingId);
    });
}

putGreeting = (greetingId) => {
    document.querySelector('.update-form-popup').style.display = 'flex';
    console.log(document.getElementById("updateRecord"));
    document.getElementById("updateRecord").addEventListener('click',()=>{
        updateGreeting(greetingId);
    });
 }

document.getElementById("closeDeleteGreetingForm").addEventListener('click', () => {
    document.querySelector('.delete-form-popup').style.display = 'none';
})

document.getElementById("closeUpdateGreetingForm").addEventListener('click', () => {
    document.querySelector('.update-form-popup').style.display = 'none';
})

document.getElementById("addNewgreeting").addEventListener('click', () => {
    document.querySelector('.form-popup').style.display = 'flex';
  })

  document.getElementById("closeAddGreetingForm").addEventListener('click', () => {
    document.querySelector('.form-popup').style.display = 'none';
  })

/**
 * @description Get all available greetings
*/
getAllGreetings = () => {
    url = `${serverUrl}/allGreetings`;
    fetch(url).then((response) => {
        return response.json();
    }).then((greetingData) => {
        greetingData.data.reverse();
        const html = greetingData.data.map(greeting => {
            return `<div class="greeting-element">
            <pre>${greeting.name}</pre>
            <pre>${greeting.message}</pre>
            <pre>${(greeting.createdAt).substring(0, 10)}</pre>
            <img src="../app/assets/edit.png" id="" class="panel-icon" onclick="putGreeting('${greeting._id}')">
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

/**
 * @description delete greeting requested from greeting panel
*/
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

/**
 * @description update greeting requested from greeting panel
*/
updateGreeting = (greetingId) => {
    document.getElementById('updateGreeting').addEventListener('submit', (e) => {
        var name = document.getElementById('updateName').value;      
        var message = document.getElementById('updateMsg').value;       
    let id = greetingId;
    url = `${serverUrl}/updateGreeting/${id}`;
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({ name: name, message: message }),
    }).then((response) => {
        console.log(response)
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

