import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
    const loc = useLocation().params
    return <div>this is blog id {loc.blogID} and comment id {loc.commentID}</div>
})