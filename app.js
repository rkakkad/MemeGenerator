const form = document.querySelector('form');
let columns = document.querySelectorAll('.column');
let rows = document.querySelectorAll('.row');
let row = rows[rows.length- 1];


for (let row of rows) {
    row.addEventListener('click', function(e) {
        if(e.target.classList.contains('hoverImage')) {
            let parentHoverImage = e.target.parentNode;
            let parentMiddle = parentHoverImage.parentNode;
            let parentColumn = parentMiddle.parentNode;
            let parentRow = parentColumn.parentNode;
            parentRow.removeChild(parentColumn);

        } else {
            console.log('clicked memeImage');
            let parentColumn = e.target.parentNode;
            console.log(parentColumn);
            let parentRow = parentColumn.parentNode;
            parentRow.removeChild(parentColumn);
            }
    })

    row.addEventListener('mouseover', function(e) {
        let mouseOverMeme=e.target;
    })
}     

const addMeme = function(imgUrl, topText, bottomText) {
    // create column with the class
    let column = document.createElement('div');
    column.classList.add('column');

    // create hte meme image 
    let img = document.createElement('img');
    img.classList.add('memeImage');
    img.setAttribute('src', imgUrl);

    // create the top Text div
    let divTopText = document.createElement('div');
    divTopText.classList.add('top-text');
    divTopText.innerText=topText;

    // create the bottom text div
    let divBottomText = document.createElement('div');
    divBottomText.classList.add('bottom-text');
    divBottomText.innerText=bottomText;

    // create the div for the hover image
    let divMiddle = document.createElement('div');
    divMiddle.classList.add('middle');
    let divInMiddle = document.createElement('div');
    let hoverImage = document.createElement('img');
    hoverImage.classList.add('hoverImage');
    hoverImage.setAttribute('src', 'img/delete.png');

    // append all children to the the image element
    divInMiddle.appendChild(hoverImage);
    divMiddle.appendChild(divInMiddle);

    // append all the elements to teh column
    column.appendChild(img);
    column.appendChild(divTopText);
    column.append(divBottomText);
    column.appendChild(divMiddle);

    // append the column to the row;
    row.appendChild(column);

}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    let imgUrl = document.querySelector('input[name="imgUrl"]').value;
    let topText = document.querySelector('input[name="topText"]').value;
    let bottomText = document.querySelector('input[name="bottomText"]').value;
    addMeme(imgUrl,topText,bottomText);
    let inputBoxes = document.querySelectorAll('.inputBox');
    for(let inputBox of inputBoxes) {
        inputBox.value='';
    } 
})