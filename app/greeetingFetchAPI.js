/**
 * @module        app
 * @file          greeetingFetchAPI.js
 * @description   fetch APIs and implement them at fron end
 * @author        Aakash Rajak <aakashrajak2809@gmail.com>
*  @since         04/01/2021
*------------------------------------------------------------------------------------------------------------------*/

const serverUrl = 'http://localhost:2000';

/**
 * @description this function shows the popup after click on delete icon of each panel
 * and it call to deleteGreeting() to delete greeting. 
 * @param greetingId to delete greeting, appended with it
*/
delGreeting = (greetingId) => {
    document.querySelector('.delete-form-popup').style.display = 'flex';
    document.getElementById('deleteRecord').addEventListener('click',()=>{
        deleteGreeting(greetingId);
        document.querySelector('.delete-form-popup').style.display = 'none';
        alert("greeting has been deleted");
    });
}

/**
 * @description this function shows the popup after click on edit icon of each panel
 * and it call to updateGreeting() to update greeting. 
 * @param greetingId to update greeting, appended with it
*/
putGreeting = (greetingId) => {
    document.querySelector('.update-form-popup').style.display = 'flex';
    console.log(document.getElementById("updateRecord"));
    document.getElementById("updateRecord").addEventListener('click',()=>{
        updateGreeting(greetingId);
    });
 }

 /**
 * @description to colse popup on click  close button of delete greeting form
*/
document.getElementById("closeDeleteGreetingForm").addEventListener('click', () => {
    document.querySelector('.delete-form-popup').style.display = 'none';
})

/**
 * @description to colse popup on click  close button of update greeting form
*/
document.getElementById("closeUpdateGreetingForm").addEventListener('click', () => {
    document.querySelector('.update-form-popup').style.display = 'none';
})

/**
 * @description to shows the popup 'add greeting form after' on click 'Add' (menu at sidebar)
*/
document.getElementById("addNewgreeting").addEventListener('click', () => {
    document.querySelector('.form-popup').style.display = 'flex';
  })

/**
 * @description to colse popup on click  close button of add greeting form
*/
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
            <div class="imgAligner">
            <img src="../app/assets/edit.png" id="" class="panel-icon" onclick="putGreeting('${greeting._id}')">
            <img  src="../app/assets/trash.png" id="a" class="panel-icon" onclick="delGreeting('${greeting._id}')">
            </div>
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
 * @param greetingId to delete greeting, appended with it
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
 * @param greetingId to update greeting, appended with it
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

