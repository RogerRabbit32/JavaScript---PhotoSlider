const entities = [
    {
        city: 'Rostov-On-Don <br> LCD Admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request',
        img: './Admiral.png'
    },
    {
        city: 'Sochi <br> Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request',
        img: './Thieves.png'
    },
    {
        city: 'Rostov-On-Don <br> Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request',
        img: './Patriotic.png'
    }
]

const current_city = document.querySelector('#city')
const current_area = document.querySelector('#area')
const current_repair_time = document.querySelector('#repair-time')
const current_repair_cost = document.querySelector('#repair-cost')
const current_image = document.querySelector('#picture')

const setEntity = (index) => {
    // fade out the current image
    current_image.classList.add('fade')
    // wait for the transition to complete
    current_image.addEventListener('transitionend', () => {
        // set the new image source
        current_image.setAttribute('src', `${entities[index].img}`);
        // fade in the new image
        current_image.classList.remove('fade')
    }, {once: true})

    document.querySelectorAll('.info').forEach(info => info.classList.add('fade'))
    document.querySelectorAll('.info').forEach(info => info.addEventListener('transitionend', () =>
    {
        current_city.innerHTML = entities[index].city
        current_area.innerText = entities[index].area
        current_repair_time.innerText = entities[index].time
        current_repair_cost.innerText = entities[index].cost
        info.classList.remove('fade')
    }))


    // remove "active" class from all nav elements
    admiral.classList.remove("active");
    thieves.classList.remove("active");
    patriotic.classList.remove("active");
    // add "active" class to the currently active nav element
    if (index === 0) {
        admiral.classList.add("active");
    } else if (index === 1) {
        thieves.classList.add("active");
    } else if (index === 2) {
        patriotic.classList.add("active");
    }
    document.querySelectorAll('.circle').forEach(circle => circle.classList.remove('active'));
    document.querySelector(`#circle${index + 1}`).classList.add('active');
}

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const admiral = document.querySelector('#Admiral')
const thieves = document.querySelector('#Thieves')
const patriotic = document.querySelector('#Patriotic')

let currentIndex = 0

prev.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = entities.length
    }
    setEntity(currentIndex - 1);
    currentIndex -= 1;
})
next.addEventListener('click', () => {
    if (currentIndex === entities.length - 1) {
        currentIndex = -1
    }
    setEntity(currentIndex + 1);
    currentIndex += 1;
})

admiral.addEventListener('click', () => {
    currentIndex = 0;
    setEntity(currentIndex)
})
thieves.addEventListener('click', () => {
    currentIndex = 1;
    setEntity(currentIndex)
})
patriotic.addEventListener('click', () => {
    currentIndex = 2;
    setEntity(currentIndex)
})


setEntity(currentIndex)
