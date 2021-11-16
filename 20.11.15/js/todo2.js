function outer() {

    let arr = []
let idx = 0

    function add(todo) {
        todo.idx = idx++
        arr.push(todo)

        const localStorageStr = JSON.stringify(arr)

        localStorage.setItem("todoList", localStorageStr)
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
        console.log(localStorageList)

        return localStorageList
    }
    function  changeAll(){
        for (let i = 0; i < arr.length; i++) {
            arr[i].complete = !arr[i].complete
        }
    }
    const obj = {add, removeTodo, getTodo, getAll, changeAll}

    return obj

}