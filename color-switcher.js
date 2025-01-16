//const buttonGray=document.getElementById("button1");
//const buttonWhite=document.getElementById("button2");

var r=document.querySelector(":root");

function setFunctionGray() {
    r.style.setProperty("--white","gray");
    r.style.setProperty("--blur-level","5px");
}
function setFunctionWhite() {
    r.style.setProperty("--white","white");
}
function setFunctionBlue() {
    r.style.setProperty("--white","blue");
}
function setFunctionYellow() {
    r.style.setProperty("--white","yellow");
}

const animals = [
    {
    type: 'mouse',
    size: 'small',
    weight: 1
    },
    {
    type: 'dog',
    size: 'small',
    weight: 10
    },
    {
    type: 'lion',
    size: 'medium',
    weight: 150
    },
    {
    type: 'elephant',
    size: 'big',
    weight: 5000
    },
    {
    type: 'tiger',
    size: 'medium',
    weight: 400
    },
    {
    type: 'bat',
    size: 'small',
    weight: 8
    },
    {
    type: 'pig',
    size: 'small',
    weight: 40
    }
];
console.log(animals);
const types=animals.filter(animal=>animal.type);
console.log(types);

const animalWeightAndSizes=animals.map(animal=>({
    weight:animal.weight,
    size:animal.size
}));
console.log(animalWeightAndSizes);

const newArray=animalWeightAndSizes.map(({weight,size})=>({ [weight]:size}));
console.log(newArray);

const sizeArray=animals.filter(animal=>animal.size==="small");
console.log(sizeArray);

const weightLessThanArray=animals.filter(animal=>(animal.weight<100));
console.log(weightLessThanArray);

const weightGreaterThanArray=animals.filter(animal=>(animal.weight>100));
console.log(weightGreaterThanArray);

const sumWeight=animals.reduce((sum,animal)=>sum+animal.weight,0);
console.log("Sum: " + sumWeight);


const averageWeight=animals.reduce((sum,animal)=>sum+animal.weight);
console.log("Average: " + averageWeight);
/*buttonGray.addEventListener("click", ()=>{
    document.body.style.backgroundColor="gray";
});*/


