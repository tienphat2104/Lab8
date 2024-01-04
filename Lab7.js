document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

const actionbtn = document.querySelector('.action-btn')
const actionbtnIcon = document.querySelector('.action-btn i')
const dropDrowMenu = document.querySelector('.dropdrow-menu')

actionbtn.onclick = function(){
    dropDrowMenu.classList.toggle('open')
    const isOpen = dropDrowMenu.classList.contains('open')


    actionbtnIcon.classList = isOpen
    ? 'fa fa-times'
    : 'fa fa-bars'
}