let nickName = ["Crusher", "the Scientist", "Twinkle-toes", "the coder", "the jester", "the sloth", "Quick-Silver"]
let firstName = document.getElementById("FirstName").value;
let lastName = document.getElementById("LastName").value;


document.getElementById("random").addEventListener("click", randomName)
document.getElementById("all").addEventListener("click", allName)


function randomName() {
    for(let i=0 ; i< nickName.length; i++) {
        document.getElementById(`Name${i}`).innerHTML = ""
    }

    let rm = Math.floor(Math.random()*nickName.length);
    document.getElementById("Name0").innerHTML = firstName + " " + nickName[rm] + " " + lastName;
}

function allName() {
    for(let i=0 ; i< nickName.length; i++){
        document.getElementById(`Name${i}`).innerHTML = firstName + " " + nickName[i] + " " + lastName;
    }
}