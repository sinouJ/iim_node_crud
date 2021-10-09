export default {
    getTodos: async (todo) => {
        const data = await fetch('http://localhost:4443/api/todos');
        const res = await data.json();
        return await res;
    },
    postTodo: async (todo) => {
        const data = await fetch('http://localhost:4443/api/todos/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': `Bearer ${todo.token}`
            },
            body: JSON.stringify({title: todo.title, description: todo.description})
        })
        const res = await data.json()
        return await res
    },
    checkTodo: async (todo) => {
        const data = await fetch('http://localhost:4443/api/todos/complete', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: todo.id,
                completed: todo.completed
            })
        })
        const res = await data.json()
        return await res
    }
}