// const addbtn = document.querySelector(".addbtn");
const tbody = document.querySelector(".tbody");
const addanwserbtn = document.querySelector(".addanwserbtn");
const anwserinput = document.querySelector(".anwserinput");
const formcheckinput = document.querySelectorAll(".form-check-input");
const createbtn = document.querySelector(".createbtn");

const teacherSelect = document.querySelector(".teacherSelect");

const levelSelect = document.querySelector(".levelSelect");
let Question = new Questions();
// console.log(formcheckinput);
let anwserindex = 0;
let correctindexvalue;
addanwserbtn.addEventListener("click", (eo) => {
    // console.log(item);
    // if (eo.value == 0) {

    console.log("dsdsfsfsf");
    // }
    anwserinput.insertAdjacentHTML('beforeend', ` <div class="anwsers input-group">
    <div>
        <span class="input-group-text" id="inputGroup-sizing-default">Anwser ${anwserindex + 1}</span>
    </div>
    <div class="cccc">
        <input type="text" class="form-control addinput" style="width:27em">
    </div class="form-check" style="margin-left:1em;margin-top: 0em;">
    <input class="form-check-input" onclick="clicked(this)" type="checkbox" value="${anwserindex}">
</div>`)

    anwserindex++

})



// function clicked(obj) {
//     if (obj.checked) {
//         console.log("yess");
//         console.log(obj.value);
//         correctindexvalue = obj.value;
//     } else {
//         console.log("noo");
//     }
//     // console.log(obj.value);
// }
// show Teacher in input
const renderTeachers = async() => {
    let uri = 'http://localhost:3000/teachers';
    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts);
    let template = '';
    posts.forEach(post => {
        template += `
        <option value="${post.id}">${post.name}</option>
        `
    })
    teacherSelect.innerHTML += template;
}
window.addEventListener('DOMContentLoaded', () => renderTeachers());


// show Levels in input
const renderLevels = async() => {
    let uri = 'http://localhost:3000/levels';
    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts);
    let template = '';
    posts.forEach(post => {
        template += `
        <option class="" value="${post.id}">${post.level}</option>
        `
    })


    levelSelect.innerHTML += template;
}
window.addEventListener('DOMContentLoaded', () => renderLevels());


// show
const renderPosts = async() => {

    // console.log(posts);

    const getdata = Question.getFulldata();
    getdata.then(dat => {
        dat.forEach(post => {
            console.log();
            let s = post.answer.length;
            tbody.innerHTML += `<tr>
            <th scope="row">${post.id}</th>
        <td>${post.question}</td>
        <td>
        
        <select class="form-select" aria-label="Default select example">
        <option value="">${post.answer}</option>
        </select>
        </td>
        <td><button value="${post.id}" class="detbtn btn btn-danger">DELETE</button></td>
        </tr>
        `
        })
        const detbtn = document.querySelectorAll(".detbtn");
        console.log(detbtn);

        detbtn.forEach(item => {

            console.log(item);
            item.addEventListener('click', async(e) => {

                Question.deleteData(item.value)

            })
        })
    })




}
window.addEventListener('DOMContentLoaded', () => renderPosts());

// create
const form = document.querySelector("form");
const anwsers = document.querySelectorAll(".anwsers");
const createPost = async(e) => {
    e.preventDefault();
    let d = anwserinput.childNodes;
    let v = [];
    d.forEach(item => {
        if (item.className == "anwsers input-group") {
            console.log(item.children[1].children[0].value);
            v.push(item.children[1].children[0].value)
                // array = new Array(v)
                // console.log(array);
        }
    })

    const doc = {

        question: form.question.value,
        answer: v,
        correctindex: correctindexvalue,
    }
    Question.addData()
}
form.addEventListener('submit', createPost)

// delete