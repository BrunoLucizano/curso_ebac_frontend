const form = document.getElementById('form-saude');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const metaDiaria = document.getElementById('meta-diaria');
    const exeDia = document.getElementById('exe-dia');
    
if (metaDiaria.value > exeDia.value){
    alert('Se esforce mais amanhã');
    metaDiaria.value = '';
    exeDia.value = '';
}
else {
    alert('Parabéns, você conseguiu!!!');
    metaDiaria.value = '';
    exeDia.value = '';
}
})

console.log(form);