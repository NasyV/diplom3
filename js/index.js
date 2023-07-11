// кликабельная навигация
const list = document.querySelectorAll('.page-nav a')
list.forEach (item =>{
    item.addEventListener('click', (e) =>{
        list.forEach(el=>{el.classList.remove('page-nav__day_chosen');});
        item.classList.add('page-nav__day_chosen')
    })
})
//

// отрисовка меню
const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const today = new Date()
list.forEach((item, i) => {
const date = new Date(today)
date.setDate(date.getDate() + i)
date.setHours(0, 0, 0);
console.log(date)
item.querySelector('.page-nav__day-number').innerHTML = date.getDate()
if (today.getDate() < date.getDate()) {
    item.querySelector('.page-nav__day-week').innerHTML = days[date.getDay()]
    }
})

//даты выходного дня
