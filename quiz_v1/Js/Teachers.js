const addinput = document.querySelector(".addinput");
const addbtn = document.querySelector(".addbtn");
const tbody = document.querySelector(".tbody");
const formselect = document.querySelector(".form-select");
let teacher = new Teachers();
let speciality = new Specialitys();
// console.log("dddd")

// addbtn.addEventListener("click", (e) => {
//     tbody.innerHTML += ` <tr>
//         <th scope="row">#</th>
//         <td>${addinput.value}</td>
//     </tr>`
//     console.log(addinput.value);


// })

// JSON server

// show Speciality in input
const renderPosts = async () => {
    const getdata = speciality.getFulldata();
    getdata.then(dat => {
        dat.forEach(post => {
            formselect.innerHTML += `
        <option value="${post.id}">${post.name}</option>
        `
        })
    })

}
window.addEventListener('DOMContentLoaded', () => renderPosts());

// show in table
const renderTeachers = async () => {
    const getdata = teacher.getFulldata();
    const getdata2 = speciality.getFulldata();
    getdata.then(dat => {

        dat.forEach(post1 => {

            getdata2.then(dat2 => {
                dat2.forEach(post2 => {
                    if (post1.id_s == post2.id) {
                        tbody.innerHTML += `<tr>
                        <th scope="row">${post1.id}</th>
                        <td>${post1.name}</td>
                        <td>${post2.name}  </td>
                        <td><button value="${post1.id}" class="detbtn btn btn-danger">DELETE</button></td>
                        </tr>`
                    }
                })
                //delete
                const detbtn = document.querySelectorAll(".detbtn");
                detbtn.forEach(item => {
                    console.log(item);
                    item.addEventListener('click', async (e) => {
                        teacher.deleteData(item.value)
                    })
                })
            })

        })
    })
}
window.addEventListener('DOMContentLoaded', () => renderTeachers());

// create
const form = document.querySelector("form");

const createPost = async (e) => {
    e.preventDefault();

    teacher.addData(form.namee.value, formselect.value)

}
form.addEventListener('submit', createPost)
