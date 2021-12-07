const addinput = document.querySelector(".addinput");
const addbtn = document.querySelector(".addbtn");
const tbody = document.querySelector(".tbody");
const formselect = document.querySelector(".form-select");
let level = new Levels();
// console.log("dddd")

// addbtn.addEventListener("click", (e) => {
//     tbody.innerHTML += ` <tr>
//         <th scope="row">#</th>
//         <td>${addinput.value}</td>
//     </tr>`
//     console.log(addinput.value);


// })

// JSON server


// show in table
const renderLevels = async() => {
    let getdata = level.getFulldata()
    getdata.then(dat=>{
    dat.forEach(post => {
        tbody.innerHTML += `<tr>
        <th scope="row">${post.id}</th>
        <td>${post.level}</td>
        <td>${post.min_score}</td>
        <td>${post.max_score}</td>
        <td><button value="${post.id}" class="detbtn btn btn-danger">DELETE</button></td>
    </tr>
        `
    })
    //delete
    const detbtn = document.querySelectorAll(".detbtn");
        detbtn.forEach(item => {
            console.log(item);
            item.addEventListener('click', async(e) => {
                 level.deleteData(item.value)
            })
        })
    })
}
window.addEventListener('DOMContentLoaded', () => renderLevels());
// create
const form = document.querySelector("form");
const createLevel = async(e) => {
    e.preventDefault();
level.addData(form.level.value,form.min_score.value,form.max_score.value)
}
form.addEventListener('submit', createLevel)

