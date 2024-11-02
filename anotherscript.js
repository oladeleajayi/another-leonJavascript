document.querySelector("check").addEventListener('click', check)

function check() {
    const day = document.querySelector('#day').value

    //conditionals goes here

    if (day === "Tuesday" || day === "Thursday") {
        alert("class Yaaay!!!")
    } else if
        (day === "Saturday" || day === "Sunday") {
        alert("weekeeeeennnnddd")
    } else {
        alert("borrrrrrnninggg")
    }

}
