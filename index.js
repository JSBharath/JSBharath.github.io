 var ele=document.getElementById("forms");
    ele.addEventListener('submit',alertmsg);


    var hidden = 'hidden';
function alertmsg(){
    alert("Form Submitted!");
    console.log("Button submitted");
}

function fetchDept(event){

    event.preventDefault();
    setDefault();
    const val = event.target.dept.value;
    var e = document.getElementById(val);
    e.classList.toggle('hidden');
    e.classList.add('disp');
}

function setDefault(){
    const e1 = document.getElementById('Arts');
    const e2 = document.getElementById('Engineering');
    const e3 = document.getElementById('Laws');

    if(!(e1.classList.contains('hidden'))) e1.classList.add('hidden');
    if(!(e2.classList.contains('hidden'))) e2.classList.add('hidden');
    if(!(e3.classList.contains('hidden'))) e3.classList.add('hidden');
}