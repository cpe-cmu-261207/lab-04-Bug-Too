
console.log("start script")


var task = [];
var donetask = [];
// Define fields and buttons
const taskfield = document.querySelector('#taskfield')
const addbutton = document.querySelector('#addbutton')


// When press addbutton check task field blank or if not updateUI and store data
addbutton.addEventListener("click", () => {
    if (taskfield.value === "") {
        alert("Task cannot be empty");
        return;
    }
    let input = taskfield.value;
    //adddata(input);
    addtaskupdateUI(input);
    taskfield.value = "";
});

// When press Enter check task field blank or if not updateUI and store data
taskfield.addEventListener("keyup", (ev) => {
    if (ev.key === "Enter") {
        if (taskfield.value === "") {
            alert("Task cannot be empty");
            return;
        }
        let input = taskfield.value;
        taskfield.value = "";
        addtaskupdateUI(input);
        //adddata(input);

    }
});





const hovercard = (event) => {
    // Container
    const buttoncontainer = document.createElement('div');
    buttoncontainer.setAttribute('class', 'col-span-1 flex justify-center');

    for (let index = 0; index < event.target.childNodes.length - 1; index++) {
        event.target.removeChild(event.target.childNodes[index + 1]);
    }
    //flex grow
    const blankspace = document.createElement("div");
    blankspace.setAttribute('class', 'flex-grow')
    event.target.append(blankspace);

    // Done and Delete Button : will not appear if already done
    if (event.target.firstChild.style.textDecoration != "line-through") {
        const donediv = document.createElement('div');
        donediv.setAttribute('class', "align-self-center");

        //Done button
        const doneButton = document.createElement('button');
        doneButton.setAttribute('class', 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full');
        doneButton.setAttribute('style', 'outline:0;');
        doneButton.innerHTML = "✔️"
        //doneButton.addEventListener('click', clickdone);
        buttoncontainer.append(doneButton);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ');
        deleteButton.setAttribute('style', 'outline:0;');
        deleteButton.innerHTML = "❌"
        //deleteButton.addEventListener('click', clickdelete);
        buttoncontainer.append(deleteButton);

    }


    event.target.append(blankspace);
    event.target.append(buttoncontainer);
}

const leavecard = (event) => {
    if (event.target.childNodes.length > 0) {
        
        for (let index = 0; index < event.target.childNodes.length - 1; index++) {
            event.target.removeChild(event.target.childNodes[index + 1]);
        }
        //flex grow
        const blankspace = document.createElement("div");
        blankspace.setAttribute('class', 'flex-grow')
        event.target.append(blankspace);

    } 
}





const addtaskupdateUI = (input) => {
    //Create Element
    const card = document.createElement("div");
    const data = document.createElement("span");
    const buttons = document.createElement("div");

    //Assign Data
    data.innerHTML = input;

    //flex grow
    const blankspace = document.createElement("div");
    blankspace.setAttribute('class', 'flex-grow')



    //card decoration
    card.className = " flex items-center  border-b-2 border-white py-2 max-w-3xl mx-auto ";

    card.append(data);
    card.append(blankspace);
    card.append(buttons);

    //hover card
    card.addEventListener('mouseenter', hovercard)
    card.addEventListener('mouseleave', leavecard)


    //insertBefore card
    if (currentlist.childElementCount == 0) {
        currentlist.append(card);
    } else {
        currentlist.insertBefore(card, currentlist.firstChild);
    }
    console.log(currentlist.childElementCount)
 


}

