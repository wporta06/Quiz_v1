class Specialitys {
    getFulldata = async() => {
        let url = 'http://localhost:3000/specialitys?order=desc';
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const posts = await res.json();
        //console.log(posts)
        return posts
    }
    addData = async(name) => {
        let url = 'http://localhost:3000/specialitys';
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name
            })
        });
    }
    deleteData = async(id) => {
        let url = `http://localhost:3000/specialitys/${id}`;
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
    oneData = async(id) => {
        let url = `http://localhost:3000/specialitys/${id}`;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const posts = await res.json();
        console.log(posts)
        return posts
    }
    updateData = async(id, name) => {
        let url = `http://localhost:3000/specialitys/${id}`;
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name
            })
        });
    }
}

// let obj =new Specialitys();
// obj.updateData(2,"svt")
class Teachers {
    getFulldata = async() => {
        let url = 'http://localhost:3000/teachers?order=desc';
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const posts = await res.json();
        console.log(posts)
        return posts
    }
    addData = async(name, id_s) => {
        let url = 'http://localhost:3000/teachers';
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                id_s: id_s
            })
        });
    }
    deleteData = async(id) => {
        let url = `http://localhost:3000/teachers/${id}`;
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
    oneData = async(id) => {
        let url = `http://localhost:3000/teachers/${id}`;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const posts = await res.json();
        console.log(posts)
        return posts
    }
    updateData = async(id, name, id_s) => {
        let url = `http://localhost:3000/teachers/${id}`;
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                id_s: id_s
            })
        });
    }
}

class Levels {
    getFulldata = async() => {
        let url = 'http://localhost:3000/levels?order=desc';
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const posts = await res.json();
        console.log(posts)
        return posts
    }
    addData = async(name, min, max) => {
        let url = 'http://localhost:3000/levels';
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                level: name,
                min_score: min,
                max_score: max
            })
        });
    }
    deleteData = async(id) => {
        let url = `http://localhost:3000/levels/${id}`;
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
    oneData = async(id) => {
        let url = `http://localhost:3000/levels/${id}`;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const posts = await res.json();
        console.log(posts)
        return posts
    }
    updateData = async(id, name, min, max) => {
        let url = `http://localhost:3000/levels/${id}`;
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                level: name,
                min_score: min,
                max_score: max

            })
        });
    }
}

class Questions {
    getFulldata = async() => {
        let url = 'http://localhost:3000/questions?order=desc';
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const posts = await res.json();
        console.log(posts)
        return posts
    }
    addData = async(id_t, id_sub, score, question, answer, ci) => {
        let url = 'http://localhost:3000/questions';
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

                id_t: id_t,
                id_sub: id_sub,
                score: score,
                question: question,
                answer: answer,
                correctindex: ci
            })
        });
    }
    deleteData = async(id) => {
        let url = `http://localhost:3000/questions/${id}`;
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
    oneData = async(id) => {
        let url = `http://localhost:3000/questions/${id}`;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const posts = await res.json();
        console.log(posts)
        return posts
    }
    updateData = async(id, id_t, id_sub, id_score, question, answer, ci) => {
        let url = `http://localhost:3000/questions/${id}`;
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id_t: id_t,
                id_sub: id_sub,
                id_score: id_score,
                question: question,
                answer: answer,
                correctindex: ci

            })
        });
    }
}


class Subjects {
    getFulldata = async() => {
        let url = ' http://localhost:3000/subjects?order=desc';
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const posts = await res.json();
        //console.log(posts)
        return posts
    }
    addDataofparent = async(name) => {
        let url = ' http://localhost:3000/subjects';
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                type: "parent",
                name: name
            })
        });
    }
    addDataofchild = async(name, id_ofparent, childs_id) => {
        let url = ' http://localhost:3000/subjects';
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                type: "child",
                name: name,
                childofparent: id_ofparent,
                childs_id: childs_id
            })
        });
    }
    deleteData = async(id) => {
        let url = ` http://localhost:3000/subjects/${id}`;
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
    oneData = async(id) => {
        let url = ` http://localhost:3000/subjects/${id}`;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const posts = await res.json();
        console.log(posts)
        return posts
    }
    updateDataofchild = async(id, name, id_ofparent, childs_id) => {
        let url = ` http://localhost:3000/subjects/${id}`;
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                childs_id: childs_id
            })
        });
    }
    updateDataofparent = async(id, name, childs_id) => {
        let url = ` http://localhost:3000/subjects/${id}`;
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                childofparent: id_ofparent,
                childs_id: childs_id
            })
        });
    }

    store = async(id, name, sup_subject) => {
        let url = ' http://localhost:3000/subjects';
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                name: name,
                sup_subject: sup_subject
            })
        });
    }

    count = async() => {
        let url = ' http://localhost:3000/subjects';
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const subjects = await res.json();
        // subjects.then((data) => {
        //     return data;
        // });
        //console.log(posts)
        return subjects.length;
    }

    index = async() => {
        let url = 'http://localhost:3000/subjects?order=desc';
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const subjects = await res.json();
        //console.log(posts)
        return subjects;
    }

    delete = async(id) => {
        let url = ` http://localhost:3000/subjects/${id}`;
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }
}