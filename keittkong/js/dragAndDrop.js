let accesoriesContainer = {
    "had-2" : "slot-1",
    "had-3" : "slot-2",
    "had-4" : "slot-3",
    "had-1" : "slot-4",
    "glasses-1" : "slot-5",
    "glasses-2" : "slot-6",
    "glasses-3" : "slot-7",
    "glasses-4" : "slot-8",
    "bigote-1" : "slot-9",
    "bigote-2" : "slot-10",
    "bow-tie-1" : "slot-11",
    "bow-tie-2" : "slot-12",
};

function isPhone(){
    if (window.innerWidth <= 1200) {
        return true;
    }
    return false;
}

function putInPhoneAccesory(ev){
    if (isPhone()) {
        let data = ev.target.id;
        transferPhoneProccess(data);
    }
}

function transferPhoneProccess(data){
    let bigote = "bigote";
    let glasses = "glasses";
    let had = "had";
    let bowTie = "bow-tie";
    if (_casePhoneBigote(data)) {
        _translateAccesory(bigote, data);
    }
    if (_casePhoneGlasses(data)) {
        _translateAccesory(glasses, data);
    }
    if (_casePhoneHad(data)) {
        _translateAccesory(had, data);
    }
    if (_casePhoneBowTie(data)) {
        _translateAccesory(bowTie, data);
    }
}

function _casePhoneBigote(data){
    let bigoteComparative = "bigote";
    if(data.includes(bigoteComparative)){
        return true;
    }
    return false;
}

function _casePhoneBowTie(data, ev){
    let bowTieComparative = "bow-tie";
    if(data.includes(bowTieComparative)){
        return true;
    }
    return false;
}

function _casePhoneGlasses(data, ev){
    let glassesComparative = "glasses";
    if(data.includes(glassesComparative)){
        return true;
    }
    return false;
}

function _casePhoneHad(data, ev){
    let hadComparative = "had";
    if(data.includes(hadComparative)){
        return true;
    }
    return false;
}

function allowDrop(ev){
    ev.preventDefault();
}

function removeAccesoryProccess(ev){
    let box = document.getElementById(ev.target.id+"-box");
    if (box.children.length > 0) {
        _removeAccesory(box);
        return;
    }
}

function _removeAccesory(box){
    let accesoryToRemove = box.children[0];
    let slot = document.getElementById(accesoriesContainer[accesoryToRemove.id]);
    slot.appendChild(accesoryToRemove);
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
    let data = ev.dataTransfer.getData("text");
    let bigote = "bigote";
    let glasses = "glasses";
    let had = "had";
    let bowTie = "bow-tie";
    if (_caseBigote(data, ev)) {
        _translateAccesory(bigote, data);
    }
    if (_caseGlasses(data, ev)) {
        _translateAccesory(glasses, data);
    }
    if (_caseHad(data, ev)) {
        _translateAccesory(had, data);
    }
    if (_caseBowTie(data, ev)) {
        _translateAccesory(bowTie, data);
    }
    
}

function _translateAccesory(accesory, data){
    let box = document.getElementById(accesory+"-box");
    console.log(box.children.length);
    if (box.children.length == 0) {
        _putAccesory(box, data);
        return;
    }
    _replaceAccesory(box, data);
    return;
}

function _putAccesory(box, data){
    box.appendChild(document.getElementById(data));
}

function _replaceAccesory(box, data){
    let oldAccesory = box.children[0];
    let slot = document.getElementById(accesoriesContainer[oldAccesory.id]);
    slot.appendChild(document.getElementById(oldAccesory.id));
    box.appendChild(document.getElementById(data));
}
//Cambiar por mustache
function _caseBigote(data, ev){
    let bigoteComparative = "bigote";
    if(data.includes(bigoteComparative)){
        if(ev.target.id === bigoteComparative){
            return true;
        }
    }
    return false;
}

function _caseBowTie(data, ev){
    let bowTieComparative = "bow-tie";
    if(data.includes(bowTieComparative)){
        if(ev.target.id === bowTieComparative){
            return true;
        }
    }
    return false;
}

function _caseGlasses(data, ev){
    let glassesComparative = "glasses";
    if(data.includes(glassesComparative)){
        if(ev.target.id === glassesComparative){
            return true;
        }
    }
    return false;
}

function _caseHad(data, ev){
    let hadComparative = "had";
    if(data.includes(hadComparative)){
        if(ev.target.id === hadComparative){
            return true;
        }
    }
    return false;
}
