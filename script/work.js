const btn = document.querySelectorAll('.blur-btn');

const assignedNumber = document.getElementById('assiged-nmbr');

const navNumber = document.getElementById('nav-nmbr');

let currentNavNumber = parseInt(navNumber.innerText)

let currentAssigedNumber = parseInt(assignedNumber.innerText)




btn.forEach(btnn => {
    btnn.addEventListener('click', () => {

        alert('Board updated Successfully')
       
    btnn.disabled = true;







    const allDisabled = [...btn].every(b => b.disabled);
    if(allDisabled){
        alert('Congratulations!!! You have completed all the current task')
    }




    btnn.classList.remove('bg-btn');      
    btnn.classList.add('bg-gray-400');




    // const allDisabled = [...btn].every(b => b.disabled);
    // if (allDisabled) {
    //   alert('🎉 Congratulations! You have completed all 6 tasks!');
    // }




    if(currentAssigedNumber > 0){
        currentAssigedNumber--;
        assignedNumber.innerText = currentAssigedNumber;
    }



    if(currentNavNumber > 0)
        currentNavNumber++;
    navNumber.innerText = currentNavNumber;





                    //msg showing part
    const msg = document.getElementById('activity-msg');

    const now = new Date();
    const timeString = now.toLocaleTimeString();


    const taskContainer = btnn.closest('.mt-4');                                         //j brnn e click korsi shetar shobcheye kacher div
    const taskTitle = taskContainer.querySelector('h2.font-medium.text-lg').innerText;



    const divBox = document.createElement('div');
      divBox.classList.add('p-3', 'rounded-lg', 'bg-color','mt-4' ,'text-sm');
    
    const p = document.createElement('p');
    p.innerText = `You have completed the task ${taskTitle} at ${timeString}`;

    divBox.appendChild(p);
    msg.appendChild(divBox);




})



}
);




// color changing
const navColor = document.getElementById('nav-color');

const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];

let index = 0 ;

navColor.addEventListener('click',() =>{
    document.body.style.backgroundColor = colors[index];
    index++;

    if( index > colors.length){
         document.body.style.backgroundColor = "";
         document.body.classList.add('bg-color');
       index = 0;
    }
})






//Clear History button
            document.getElementById('clear-btn').addEventListener('click',function(){
                const msg = document.getElementById('activity-msg')
                msg.innerText='';


})