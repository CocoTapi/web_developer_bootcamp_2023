let input = prompt('What would you like to do?')
const todos = ['cook dinner', 'feed Dodger']
while ( input !== 'quit' && input !== 'q'){
    if ( input === 'list'){
        console.log('************************');
        for( i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('************************');
    } else if ( input === 'new') {
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`You added ${newTodo} in the list!`);
    } else if ( input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if ( !Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`Ok, you deleted: ${deleted[0]}`);
        } else{
            console.log('Unknown index');
        }
    }
    input = prompt('What would you like to do?');
}
console.log('Okay, you quit the app!');