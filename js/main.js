const image = document.querySelector('#form-image');
const photoInput = document.querySelector('#photo-input');
const placeHolderImage = './images/placeholder-image-square.jpg'
const form = document.querySelector('#form');
const h4 = document.getElementById('no-entries');
photoInput.addEventListener('input', function (e) {
  const imageUrl = photoInput.value;
  image.src = photoInput.value;
});
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const note = {};
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];
    note[element.name] = element.value;
  }
    note.entryId = data.nextEntryId;
    data.nextEntryId++;
    data.entries.push(note);
    image.src = placeHolderImage;
    form.reset();
    generateDomTree();
});
function renderEntry(entry) {
  const li = document.createElement('li');
  const divHalfColumn1 = document.createElement('div');
  divHalfColumn1.setAttribute('class', 'column-half');
  divHalfColumn1.setAttribute('id', 'div1');
  const divHalfColumn2 = document.createElement('div');
  divHalfColumn2.setAttribute('class', 'column-half');
  divHalfColumn2.setAttribute('id', 'div2');
  const img = document.createElement('img');
  img.setAttribute('src', entry.url);
  const h2 = document.createElement('div');
  h2.textContent = entry.title;
  const p = document.createElement('p');
  p.textContent = entry.notes;
  li.append(divHalfColumn1);
  divHalfColumn1.append(img);
  li.append(divHalfColumn2);
  divHalfColumn2.append(h2);
  divHalfColumn2.append(p);
  return li;
}
const entryListContainer = document.querySelector('ul');

document.addEventListener('DOMContentLoaded', generateDomTree);
function generateDomTree(event, view) {
  if (!view) {
    view = sessionStorage.getItem('view');
  }
  viewSwap(view);
  entryListContainer.innerHTML = '';
  for (let i = data.entries.length - 1; i >= 0; i--) {
    const entry = data.entries[i];
    const entryElement = renderEntry(entry);
    entryListContainer.appendChild(entryElement);
  }

  if (data.entries.length === 0) {
    toggleNoEntries(true);
  } else {
    toggleNoEntries(false);
  }
}

function toggleNoEntries(show) {
  if (show) {
    h4.classList.remove('hidden');
  } else {
    h4.className = 'hidden';
  }
}

function viewSwap(view) {
  const form = document.getElementById('form');
  const entries = document.getElementById('entriesDiv');

  if (view === 'entries') {
    form.className = 'hidden';
    entries.classList.remove('hidden');
  } else if (view === 'entry-form') {
    form.classList.remove('hidden');
    entries.className = 'hidden';
  }

  sessionStorage.setItem('view', view);
}

function entriesView() {
  let view = '';
  if (form.className === 'hidden') {
    view = 'entry-form';
  } else {
    view = 'entries';
  }
  viewSwap(view);
}

const entriesNav = document.getElementById('navbar-entries');
const newButton = document.getElementById('new-button');

entriesNav.addEventListener('click', entriesView);
newButton.addEventListener('click', entriesView);
