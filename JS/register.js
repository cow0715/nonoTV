const regexHandle = ( regex, input )=>{
    const inputValue = input.value ;
    const checked = regex.test(input.value);
    if( !checked  &&  inputValue){
        input.classList.add('invalid');
        input.classList.remove('valid');
        input.nextElementSibling.style.display = 'block';
    }else{
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.nextElementSibling.style.display = 'none';
    }
}

// userid
document.getElementById('id-box').addEventListener('input', (event)=>{
    const input = event.target;  
    const regex = /^\w{5,12}(\d|\+|\$)?/gmi;
    regexHandle( regex, input );
})

// email
// document.getElementById('email-box').addEventListener('input', (event)=>{
//     const input = event.target;  
//     const regex = /[a-z\d.+-]+@[A-Z\d]+\.([a-z]{2,8})(\.[a-z]{2,8})?/gmi; 
//     regexHandle( regex, input );
// })

// 전화번호
// document.getElementById('userPhone').addEventListener('input', (event)=>{
//     const input = event.target;  
//     const regex = /\(?\d{2,3}\)?[- ]?\d{4}[- ]?\d{4}/gm;  
//     regexHandle( regex, input );
// })

// 비밀번호
document.getElementById('pw-box').addEventListener('input', (event)=>{
    const input = event.target; 
    const regex = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[%$!])\w+/gm; 
    regexHandle( regex, input );
})

// 비밀번호 재확인
document.getElementById('pw-box2').addEventListener('input', (event)=>{
    const input = event.target; 
    const pwd=document.querySelector('#pw-box');
    const repwd=document.querySelector('#pw-box2');

    if( pwd.value !== repwd.value ){
        input.classList.add('invalid');
        input.classList.remove('valid');
        input.nextElementSibling.style.display = 'block';
    }else{
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.nextElementSibling.style.display = 'none';
    }
})

document.getElementById('submitBtn').addEventListener('click', ()=>{
    const user={
        // id:서버번호생성
        userName : userName.value,
        userId : userId.value,
        userEmail : userEmail.value,
        userPhone : userPhone.value,
        userPwd : userPwd.value,
    }
    console.log( user );

    const url = 'http://localhost:3000/register';
    fetchFunc.post( url, user ).then(res=>res.json())
    .then(res=>console.log(res))
}) 