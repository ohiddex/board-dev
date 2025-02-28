// backgroung changer 
document.getElementById("many-color").addEventListener('click',function(){
    const manyColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = manyColor;
})

function displayDate() {
    const today = new Date();
    const weekdayOptions = { weekday: 'short' };
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const day = today.toLocaleDateString('en-US', weekdayOptions);
    const date = today.toLocaleDateString('en-US', dateOptions);

    document.getElementById('date').innerText = `${day} ${date}`;
}
displayDate();





