const addinput = document.querySelector(".addinput");
const addbtn = document.querySelector("#addbtn");
const tbody = document.querySelector(".tbody");
const typeselect = document.querySelector(".typeselect");
const childselect = document.querySelector(".childselect");
const parentselect = document.querySelector(".parentselect");

const subjectNameContainer = document.querySelector('#subject_name');
const subjectParentContainer = document.querySelector('#sup_subject');

let subjects = new Subjects();

let currentID;





// typeselect.addEventListener("click", (eo) => {
//     if (typeselect.value == "parent") {
//         console.log("is parent");
//         childselect.style.display = "block";
//         parentselect.style.display = "none";
//         // subjects.addDataofparent()
        
//     }
//     if (typeselect.value == "child") {
//         console.log("is child");
//         childselect.style.display = "none";
//         parentselect.style.display = "block";
//     }
// })

// console.log("yes: " + subjects.count());

subjects.count().then((data) => {
    currentID = data + 1;
});

subjects.index().then((data) => {
    console.log('yes: ' + data);
    subjectParentContainer.innerHTML = `<option value="0" selected>No Parent</option>`;
    for (let i = 0; i < currentID - 1; i++) {
        if (data[i].sup_subject == 0) {
            subjectParentContainer.innerHTML += `<option value="${data[i].id}" onclick="displayChildren(${data[i].id})">${data[i].name}</option>`;
            tbody.innerHTML += `<tr>
                                <td>${data[i].id}</td>
                                <td>${data[i].name}</td>
                                <td>root</td>
                                <td><div onclick="deleteSubject(${data[i].id})" class="btn btn-danger">Delete</div></td>
                            </tr>`;
        } else {
            tbody.innerHTML += `<tr>
                                <td>${data[i].id}</td>
                                <td>${data[i].name}</td>
                                <td>${data[data[i].sup_subject - 1].name}</td>
                                <td><div onclick="deleteSubject(${data[i].id})" class="btn btn-danger">Delete</div></td>
                            </tr>`;
        }
    }
});

deleteSubject = (id) => {
    subjects.delete(id);
}



displayChildren = (id) => {
    subjects.index().then((data) => {   
        subjectParentContainer.innerHTML = `<option value="${id}" selected>${data[id - 1].name}</option>`;
        for (let i = 0; i < currentID - 1; i++) {
            if (data[i].sup_subject === id) {
                subjectParentContainer.innerHTML += `<option value="${data[i].id}" onclick="displayChildren(${data[i].id})">${data[i].name}</option>`;
            }
        }
    });
}

addbtn.addEventListener('click', () => {
    let subjectName = subjectNameContainer.value;
    let supSubjectID = subjectParentContainer.value;
    subjects.store(currentID, subjectName, supSubjectID);
})