import { component$, event$, $, useStore, useSignal } from '@builder.io/qwik';

interface dataTpe {
    fname: string,
    lname: string,
    email: string,

}

export default component$(() => {

    const userData = useStore({
        fname: "",
        lname: "",
        email: ""
    });

    const handleOnSubmit = $(() => {
        console.log({userData});
    });

    const isOpen = useSignal(false);

  return (
  <div>
    <h1>Contact page</h1>
    <button class=" mx-36 bg-blue-800" onClick$={() => isOpen.value = true}>Open Contact Form</button>
    {isOpen.value &&
    <div>
        <form class="flex flex-col mx-20 my-3 gap-5 p-10" preventdefault:submit onSubmit$={() => handleOnSubmit()}>
        <label for="fname" class="font-serif text-2xl">First Name</label>
        <input type="text" class="mb-5 p-5 rounded-3xl text-black" name="fanme" id="fname" placeholder='enter your first name' value={userData.fname} onInput$={(e) => userData.fname = (e.target as HTMLInputElement).value} />
        <label for="fname" class="font-serif text-2xl">Last Name</label>
        <input type="text" class="mb-5 p-5 rounded-3xl text-black" name="lanme" id="lname" placeholder='enter your last name' value={userData.lname} onInput$={(e) => userData.lname = (e.target as HTMLInputElement).value} />
        <label for="fname" class="font-serif text-2xl">Email</label>
        <input type="email" class="mb-5 p-5 rounded-3xl text-black" name="email" id="email" placeholder='enter your email' value={userData.email} onInput$={(e) => userData.email = (e.target as HTMLInputElement).value}/>
        <button type='submit' class="bg-blue-800 text-white mx-20">Submit</button>
        </form>
    </div>}
   </div>)
});
