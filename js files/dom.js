const headingH2 = document.getElementsByTagName('h2');
for (const h2 of headingH2) {
    h2.style.color = 'lightblue';
}

const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = 'tomato';
backpack.style.padding = '20px';
backpack.style.borderRadius = '10px'


const cards = document.querySelectorAll('.card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

const btns = document.getElementById('btn').addEventListener('click', function () {
    console.log("button was clicked");
})


const inputField = document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    const submitBtn = document.getElementById('submit-btn');
    if (event.target.value === "email") {
        submitBtn.removeAttribute('disabled', true);
    }
    else {
        submitBtn.setAttribute('disabled', true);
    }
})



const subscribe = document.querySelector('#subscribe').addEventListener('dblclick', function () {
    const bgChange = document.getElementById('subscribe');
    bgChange.style.backgroundColor = 'tomato'
})

const buttons = document.getElementsByClassName('buy-now');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        event.target.style = "display: none"
    })
}
