

document.getElementById('close-eye').addEventListener('click' , () => {

    document.getElementById('close-eye').style.display = 'none';
    document.getElementById('open-eye').style.display = 'inline-block';
    document.getElementById('pass').type = 'text';
})

document.getElementById('open-eye').addEventListener('click' , () => {

    document.getElementById('close-eye').style.display = 'inline-block';
    document.getElementById('open-eye').style.display = 'none';
    document.getElementById('pass').type = 'password';
})