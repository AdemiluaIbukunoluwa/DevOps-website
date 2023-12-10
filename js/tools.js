let isHidden = true
// the id of the info that is currentky being shown
let shownId = null;

function showInfo(id){
    shownId = id
    let info = document.getElementById(id)
    info.style.display = 'block'
    isHidden = false
}

function hideInfo(id){
    document.getElementById(id).style.display = 'none'
    isHidden = true
}


function InfoStatus(id){
    if(isHidden){
        showInfo(id)
    }
    else if(!isHidden){
        hideInfo(shownId)
        showInfo(id)
    }
}