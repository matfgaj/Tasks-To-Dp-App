input = document.getElementById('add');
btnAdd = document.getElementById('addBtn');
Container = document.querySelector('ul');
ListElement = document.getElementsByClassName('listElement');
deleteBtns = Array.from(document.getElementsByClassName('deleteBtn'));
filterInput = document.getElementById('filter');
left = document.querySelector('h1 span');
page = document.querySelector('.container');
let arr = [];
let count = 0;
let basic = 60;



const Reorganize = () => {
    Container.textContent = "";
    arr.forEach((task, id) => {
        console.log(id);
        Container.innerHTML += `<li class="listElement" data-key='${id+1}'>${task}<button class="deleteBtn">Delete Task</button></li>`;
        let btns = document.querySelectorAll('.listElement button');
        for (btn of btns) {
            btn.addEventListener('click', RemoveTask)
        };
    })
}

const filterarr = (e) => {
    let searchedText = e.target.value.toLowerCase();
    let tasks = arr;
    console.log(arr);
    console.log(tasks);
    tasks = tasks.filter(li => li.includes(searchedText));
    Container.textContent = "";
    tasks.forEach((task, id) => {
        Container.innerHTML += `<li class="listElement" data-key='${id+1}'>${task}<button class="deleteBtn">Delete Task</button></li>`;
    });
    console.log(tasks);
}

const RemoveTask = (e) => {
    e.preventDefault();
    let index = e.target.parentNode.dataset.key;
    arr.splice((index - 1), 1);
    e.target.parentNode.remove();
    Reorganize();
    left.textContent = `${arr.length}`;
}


const AddTask = (e) => {
            count++;
            console.log(document.querySelector('ul').style.height.value);

            if (count >= 8) {
                basic += 6.5;
                Container.style.height = `${basic}vh`;
                Container.style.backgroundColor = `#eee5de`;
                console.log(Container.style.height);
                console.log(basic);
                console.log(count);
            }
    let newTask = input.value;
    e.preventDefault();
    if (!(input.value == '')) {
        arr.push(newTask);
        Container.innerHTML += `<li class= "listElement">${newTask}<button class="deleteBtn">Delete Task</button></li>`;
        input.value = "";
        Container.lastChild.dataset.key = arr.length;
        let btns = document.querySelectorAll('.listElement button');
        for (btn of btns) {
            btn.addEventListener('click', RemoveTask)
        };
        left.textContent = `${arr.length}`;
    } else return
}

filterInput.addEventListener('input', filterarr);

btnAdd.addEventListener('click', AddTask);