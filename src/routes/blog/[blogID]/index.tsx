import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
    const loc = useLocation().params.blogID
    return <div>this is blog id: {loc}</div>
})