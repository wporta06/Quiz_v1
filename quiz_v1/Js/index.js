const addinput = document.querySelector(".addinput");
const tbody = document.querySelector(".tbody");
let speciality = new Specialitys();
// JSON server

// show
const renderPosts = async() => {
        const getdata = speciality.getFulldata();
        getdata.then(dat => {
            dat.forEach(post => {
                tbody.innerHTML += `<tr>
        <th scope="row">${post.id}</th>
        <td>${post.name}</td>
        <td><button value="${post.id}" class="detbtn btn btn-danger">DELETE</button></td>
         </tr>
        `
            })
            const detbtn = document.querySelectorAll(".detbtn");
            detbtn.forEach(item => {
                console.log(item);
                item.addEventListener('click', async(e) => {
                    speciality.deleteData(item.value);
                })
            })
        })
    }
    // create
const form = document.querySelector("form");
const createPost = async(e) => {
    e.preventDefault();
    speciality.addData(form.namee.value)
}
form.addEventListener('submit', createPost)
    //load doM
window.addEventListener('DOMContentLoaded', () => renderPosts());