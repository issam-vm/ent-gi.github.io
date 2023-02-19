function m() {
    if (document.getElementById('connButton2').value == 'Connexion') {
        document.getElementById('form').style.backgroundColor = '#a3caf943';
        document.getElementById('connButton2').value = 'Annuler';
        document.getElementsByClassName('login')[0].style.display = 'flex';
        document.getElementsByClassName('login')[1].className = 'connexion-bouton';
        document.getElementById('connButton').style.display = none;


    } else {
        document.getElementById('form').style.backgroundColor = '';
        document.getElementById('connButton2').value = 'Connexion';
        document.getElementById('loginButton').className = 'login';
        document.getElementsByClassName('login')[0].style.display = 'none';

    }
}
function f() {
    if (document.getElementById('connButton2').value == 'Connexion') {
        document.getElementById('form').style.backgroundColor = '#a3caf943';
        document.getElementById('connButton2').value = 'Annuler';
        document.getElementsByClassName('login')[0].style.display = 'flex';
        document.getElementsByClassName('login')[1].className = 'connexion-bouton';
        document.getElementById('connButton').style.display = none;


    }
}
