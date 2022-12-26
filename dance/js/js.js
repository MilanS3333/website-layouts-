const nav = document.getElementById('list');
// const btn = document.getElementById('option');
// nav.style.display = 'none';

// btn.addEventListener('click',hs());
// console.log(btn);
// console.log(nav);



// function hs(){
//     if(nav.style.display == 'none'){
//         nav.style.display = 'block';
//     }
//     else{
//         nav.style.display = 'none';
//     }
// }


$('#option').click(()=>{
    $('#list').toggle(1000);
})


$('#mag').click(()=>{
    $('#srh').toggle();
})
