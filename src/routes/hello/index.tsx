import { component$, event$, useSignal } from '@builder.io/qwik';

export default component$(() => {
    // let name = useSignal("hashir")
    // return <h1>Hello world {name}</h1>
    const input1 = useSignal("");
    const count = useSignal(0)

    return <div>
        <h3>on change event</h3>
        <input type="text"onInput$={event => input1.value = (event.target as HTMLInputElement).value} />
        <p>{input1}</p>
        <h3>On Click</h3>
        <button onClick$={() => count.value +=1}>+</button>
        <h3>{count}</h3>
        <button onClick$={() => count.value -=1}>-</button>
    </div>
})