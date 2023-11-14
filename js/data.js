/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};
window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('journal-entries', dataJSON);
});

const previousDataJSON = localStorage.getItem('journal-entries');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
