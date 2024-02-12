let input = prompt("what would you like to do?");
const todos =['Collect Chicken Eggs', 'Clear Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input==='list') {
        console.log('********************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('********************')
    } else if (input==='new') {
        const newTodo = prompt('Ok, what is the new todo?')
        todos.push(newTodo)
        console.log(`${newTodo} added to the list!`)  
    } else if (input ==='delete') {
        const index = parseInt(prompt('Ok, inter an index to delete'));
       if (!number.isNaN(index)) {
            const deleted = todos.splice(index,1);
            console.log(`ok, deleteed $[deleted[0]]`)
       } else {
        console.log('Unknown index')
       }
    }
    input =prompt("what you like to do?")

}
console.log("OK QUIT THE APP! ")
