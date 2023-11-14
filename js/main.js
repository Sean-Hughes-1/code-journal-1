const image = document.querySelector('#form-image');
const photoInput = document.querySelector('#photo-input');
const placeHolderImage = './images/placeholder-image-square.jpg'
const form = document.querySelector('#form');
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
});
