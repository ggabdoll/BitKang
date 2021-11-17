function outer() {

    let arr =JSON.parse(localStorage.getItem("todoList"))
let idx = 1

    function add(todo) {

        todo.idx = idx++
        arr.push(todo)

        const localStorageStr = JSON.stringify(arr)

        localStorage.setItem("todoList", localStorageStr)
    }

    function getCurrentList() {
        const currentList = localStorage.getItem("todoList")

        return currentList
    }

    function removeTodo(num){
        console.log("remove Todo....")

       const result = arr.filter(todo => todo.idx !== num)

        arr = result
    }

    function getTodo(idx){
        console.log("get Todo.......")
    }

    function getAll(){

        const localStorageList = JSON.parse(localStorage.getItem("todoList"))
localStorage.setItem("todoList",JSON.stringify(localStorageList))
        return localStorageList
    }

    function  changeAll(){
        for (let i = 0; i < arr.length; i++) {
            arr[i].complete = !arr[i].complete
        }
    }
    const obj = {add, removeTodo, getTodo, getAll, changeAll, getCurrentList}

    return obj

}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('.menuDiv');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('.menuDiv');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '.menuDiv',
            offset: 72,
        });
    };
});