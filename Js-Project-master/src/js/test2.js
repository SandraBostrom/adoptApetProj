const adoptList = document.querySelector('#adopt-list');
const form = document.querySelector('#add-pet-form');

// create element & render cafe
function renderAdopt(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;

    li.appendChild(name);
    li.appendChild(city);

    adoptList.appendChild(li);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('adoptionlist').add({
        name: form.name.value,
        city: form.city.value
    });
    form.name.value = '';
    form.city.value = '';
});