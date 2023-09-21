import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styleAbout from './style.css?inline';

export default component$(() => {

    useStylesScoped$(styleAbout);

  return (
  <article>
    <h1>Mentor Qwik</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In veritatis inventore vero architecto voluptatum, accusantium quasi cumque nihil ut aliquam repellat impedit laudantium, necessitatibus, fuga praesentium perferendis quas pariatur voluptatem?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus aspernatur rem exercitationem ab laborum corrupti rerum molestiae, dolorum facilis, inventore praesentium asperiores incidunt aliquam. Alias sed voluptatem possimus quod!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ad, autem sapiente officiis mollitia quas, exercitationem nemo asperiores incidunt repellat esse quaerat aliquam deleniti unde labore architecto quibusdam dolore dolorum.</p>
    <a href="/">Home</a>
  </article>)
});