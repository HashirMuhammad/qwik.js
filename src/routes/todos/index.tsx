import { component$, useResource$ } from "@builder.io/qwik";
import { Resource } from '@builder.io/qwik'
import { Link } from "@builder.io/qwik-city";
import { type } from "os";

type todoType = {
    "userId" : number
    "id" : number
    "title" : string
    "completed" : boolean
}

export default component$(() => {
    const todoData = useResource$(async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limt=10");
        const data = response.json();
        return data;
    })

    return (
        <div>
            <h1>Our Todo List</h1>
            <Resource
                value={todoData}
                onPending={() => <h1>Loading</h1>}
                onResolved={data => data.map((el: todoType, index: number) => <h1><Link href={`/todos/${index+1}`}> Title: {el.title}</Link></h1>)}
            />
        </div>
    );
    
});