document.getElementById('add-border').addEventListener('click', function () {
    const friensContainer = document.querySelector('#friends-container')
    friensContainer.style.border = '3px solid green'
})

function addbackground() {
    const friends = document.querySelectorAll('.friend')
    for (const friend of friends) {
        friend.style.backgroundColor = 'red'
    }
}

document.querySelector('#add-friend').addEventListener('click', function () {
    const container = document.querySelector('#friends-container')
    const friendDiv = document.createElement('div')
    friendDiv.classList.add('friend')
    friendDiv.innerHTML = `
            <h3 class="friend-name"> New Friend</h3>
            <p>Quasi, modi.</p>
    
    `
    container.appendChild(friendDiv)
})