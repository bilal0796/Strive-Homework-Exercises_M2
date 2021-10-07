
document.body.style.backgroundColor="lightyellow"

const getInputNames = function () {
    let NameInputContainer = document.getElementById("NameInput")
    let inputvaribale = document.createElement("INPUT")
    inputvaribale.setAttribute("type","text")
    inputvaribale.setAttribute("placeholder","Enter Names")
    inputvaribale.id="playername"
    inputvaribale.style.backgroundColor="black"
    inputvaribale.style.borderRadius="10px"
    inputvaribale.style.paddingTop="10px"
    inputvaribale.style.textAlign="center"
    inputvaribale.style.color="White"
    inputvaribale.style.position="relative"
    inputvaribale.style.left="20px"
    NameInputContainer.appendChild(inputvaribale)
}
const readingNamedata = function () {
    let x=document.getElementById("playername")
    let createList=document.createElement("UL")
    let createlist=document.createElement("li")
    createlist.appendChild(document.createTextNode(x.value))
    createList.appendChild(createlist)
    x.appendChild(createList)
    document.getElementById("NameInput").appendChild(createList)
}
const getInputTeams = function () {
    let TeamInputContainer = document.getElementById("TeamInput")
    let inputvaribaleT = document.createElement("INPUT")
    inputvaribaleT.setAttribute("type","text")
    inputvaribaleT.setAttribute("placeholder","Enter teams")
    inputvaribaleT.id="TeamsNos"
    inputvaribaleT.style.backgroundColor="black"
    inputvaribaleT.style.borderRadius="10px"
    inputvaribaleT.style.paddingTop="10px"
    inputvaribaleT.style.textAlign="center"
    inputvaribaleT.style.color="White"
    inputvaribaleT.style.position="relative"
    inputvaribaleT.style.top="20px"
    inputvaribaleT.style.left="20px"
    TeamInputContainer.appendChild(inputvaribaleT)
}
const readingTeamdata = function () {
    let y=document.getElementById("TeamsNos")
    let TeamListcontainer=document.createElement("UL")
    let Teamlist=document.createElement("li")
    Teamlist.appendChild(document.createTextNode(y.value))
    TeamListcontainer.appendChild(Teamlist)
    y.appendChild(TeamListcontainer)
    document.getElementById("TeamInput").appendChild(TeamListcontainer)
}
window.onload=function(){
getInputNames()
getInputTeams()
}