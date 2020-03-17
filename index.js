// init
let list = document.querySelector('#my-todo')

const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']

for (let todo of todos) {

  addItem(todo)

}

function addItem(text, time) {

  let newItem = document.createElement('li')

  newItem.innerHTML = `
    <div class="wrapper">
  <div class="circle-wrapper">
    <div class="left">
      <div class="leftcircle" style="animation-duration: ${(time * 60)}s"></div>
    </div>
    <div class="right">
      <div class="rightcircle" style="animation-duration: ${(time * 60 / 2)}s"></div>
    </div>
    
  </div>
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
</div>
  `

  list.appendChild(newItem)
}

// write your code here



// get element & declare
const todoTitle = document.createElement('h4')

todoTitle.innerHTML = 'Todo'

const doneTitle = document.createElement('h4')

const div = document.querySelector('.m-5')

const ul = document.createElement('ul')

div.insertBefore(todoTitle, list)

div.appendChild(doneTitle)

ul.id = 'done'

ul.classList.add('list-unstyled')

div.appendChild(ul)

const done = document.querySelector('#done')

let newTodo = document.querySelector('#newTodo')

let newTime = document.querySelector('#newTime')

let addBtn = document.querySelector('#addBtn')

//各種監聽
addBtn.addEventListener('click', newItemList)

list.addEventListener('click', del)

done.addEventListener('click', del)

newTodo.addEventListener('keypress', function (e) {

  if (e.keyCode === 13) {

    newItemList()

  }
})

//你各位function
function newItemList() {

  let item = newTodo.value

  let time = newTime.value

  if ((item !== '') && (time !== '')) {

    addItem(item, time)

    newTodo.value = ''

    newTime.value = ''

    delTitle()
  }
}

function del(e) {

  let li = e.target.parentElement

  if (e.target.classList.contains('delete')) {

    li.remove()

    delTitle()

  } else if (e.target.tagName === 'LABEL') {

    // 先插入toggle元素 再刪除todo元素
    haveUDone(e.target, li)

  }

}

function haveUDone(x, y) {

  x.classList.toggle('checked')

  if (x.classList.contains('checked')) {

    ul.innerHTML += `<li> ${y.innerHTML} </li>`

    y.remove()

    delTitle()

  } else {

    list.innerHTML += `<li> ${y.innerHTML} </li>`

    y.remove()

    delTitle()

  }
}

function delTitle() {

  if (list.innerText === '') {

    todoTitle.innerHTML = ''

  } else {

    todoTitle.innerHTML = 'Todo'
  }

  if (ul.innerText === '') {

    doneTitle.innerHTML = ''

  } else {

    doneTitle.innerHTML = 'Done'

  }
}

