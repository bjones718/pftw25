// select empty div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");
// put an h1 inside
//create a new Element
const heading = document.createElement ('h1');
heading.innerHTML = 'Llamas can learn simple tasks after a few repetitions.';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
 document.body.style.backgroundColor = 'green';
}


