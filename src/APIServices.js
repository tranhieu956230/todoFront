const base = 'https://todo11235.herokuapp.com';
export const getTodos = () => {
    const url = base + '/todo'
    const request = new Request(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
    });
    return fetch(request)
        .then(response => response.json());
}

export const addTodo = (text) => {
    const url = base + '/todo'
    const request = new Request(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            todo: text,
            completed: false,
        })
    });
    return fetch(request)
        .then(response => response.json());
}

export const toggleComplete = (id) => {
    const url = base + '/todo/' + id + '/toggle';
    const request = new Request(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
    
    });
    return fetch(request)
        .then(response => response.json());
}


export const deleteTodo = (id) => {
    const url = base + '/todo/' + id ;
    const request = new Request(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
    
    });
    return fetch(request)
        .then(response => response.json());
}
export const updateTodo = (id,text) => {
    const url = base + '/todo/' + id;
    const request = new Request(url,{
        headers: {
            'Content-Type' : 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
            todo: text
        })
    })
    return fetch(request)
        .then(response => response.json());
}