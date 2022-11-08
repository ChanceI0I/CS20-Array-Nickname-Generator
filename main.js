let nickName = ["Crusher", "the Scientist", "Twinkle-toes", "the coder", "the jester", "the sloth", "Quick-Silver"]
let firstName = document.getElementById("FirstName").value;
let lastName = document.getElementById("LastName").value;


document.getElementById("random").addEventListener("click", randomName)
document.getElementById("all").addEventListener("click", allName)


function randomName() {
    document.getElementById("Name0").innerHTML = ""
    let rm = Math.floor(Math.random()*nickName.length);
    document.getElementById("Name0").innerHTML = firstName + " " + nickName[rm] + " " + lastName;
}

function allName() {
    let all = ""
    for(let i=0 ; i< nickName.length; i++){
        all += firstName + " " + nickName[i] + " " + lastName + "<br>"
    }
    console.log(all)
    document.getElementById("Name0").innerHTML = all;
}