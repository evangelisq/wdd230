document.getElementById('add-chapter').addEventListener('click', () => {
    const bookChapterInput = document.getElementById('book-chapter');
    const bookChapter = bookChapterInput.value.trim();

    if (bookChapter) {
        const newListItem =document.createElement('li');
        newListItem.innerHTML = `${bookChapter} <button class = "remove-btn">❌ </button>`;

        document.getElementById('chapter-list').appendChild(newListItem);

        bookChapterInput.value ='';
        }else {
            alert ('Please inter a valid book and chapter');
        }
});

document.getElementById{'chapter-list'}.addEventListener('click', (event)=> {
    if (event.target.classlist.contains('remove-btn')) {
        event.target.parentELement.remove();
    }
});