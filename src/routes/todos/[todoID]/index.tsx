import { component$, useResource$ } from "@builder.io/qwik";
import { Resource } from '@builder.io/qwik'
import { useLocation } from "@builder.io/qwik-city";
import { type } from "os";

type todoType = {
    "userId" : number
    "id" : number
    "title" : string
    "completed" : boolean
}

export default component$(() => {
    const id = useLocation().params.todoID

    const todoData = useResource$(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const data = response.json();
        return data;
    })

    return (
        <div>
            <h1>Our Todo List</h1>
            <Resource
                value={todoData}
                onPending={() => <h1>Loading</h1>}
                onResolved={data => <h1>userid:{data.userId + " "} id:{data.id + " "} title:{data.title+ " "} completed:{data.completed + " "}</h1>}
            />
        </div>
    );
    
});