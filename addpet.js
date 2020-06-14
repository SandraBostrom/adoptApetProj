const adoptList = document.querySelector('#adopt-list');
const form = document.querySelector('#adopt-form');

function renderAdopt(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let type = document.createElement('span');
    let cross = document.createElement("div");
    

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    type.textContent = doc.data().type;
    cross.textContent="X";

    li.appendChild(name);
    li.appendChild(type);
    li.appendChild(cross);

    adoptList.appendChild(li);

    
    cross.addEventListener("click", (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute("data-id");
        db.collection("adopt").doc(id).delete();
    })
}


db.collection('adopt').orderBy("type").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderAdopt(doc);
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('adopt').add({
        name: form.name.value,
        type: form.type.value
    });
    form.name.value = '';
    form.type.value = '';
})