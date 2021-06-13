import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = sayHello(name);
    console.log("ell");
    console.log("ell123");
}

showHello("greeting", "TypeScript");