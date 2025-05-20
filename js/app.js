let list = []

function add(){
    nameFriend = document.getElementById('nome-amigo');
    listFriends = document.getElementById('lista-amigos');

    if (nameFriend.value == ''){
        alert('Informe o nome do amigo!');
        return;
    }

    if(list.includes(nameFriend.value)) {
        alert('Amigo já adicionado!');
        return;
    }

     list.push(nameFriend.value);
   
    if(listFriends.textContent == ''){
        listFriends.textContent = nameFriend.value;
    } else {
        listFriends.textContent = listFriends.textContent + ', ' + nameFriend.value;
    }
    nameFriend.value = '';
}

function sortear() {
    if (list.length < 4) {
        alert('Informe um número de amigos maior que 4.');
        return;
    }

    shuffle(list);

    let sorteio = document.getElementById('lista-sorteio');

    for (i = 0; i < list.length; i ++) {

        if(i == list.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + list[i] + ' --> ' + list[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + list[i] + ' --> ' + list[i + 1] + '<br>';
        }

    }
}

function shuffle(lista) {
    for (let i = lista.length; i; i--) {
        const iRandom = Math.floor(Math.random() * i);
        [lista[i - 1], lista[iRandom]] = [lista[iRandom], lista[i - 1]];
    }
}

function restart() {
    list = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('nome-amigo').innerHTML = '';
}