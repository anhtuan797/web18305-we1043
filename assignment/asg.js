const form =document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e =>{
    e.preventDefault();
    ValidityState();
});
const setError = (Element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

}
const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
   
        const expression = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i
        return expression.test(String(email).toLowerCase());
      }
    

const ValidateInputs = () => {
    const usernameValue = username.ariaValueMax.trim();
    const emailValue = email.ariaValueMax.trim();
    const password = password.ariaValueMax.trim();
    const password2 = password2.ariaValueMax.trim();
    if(usernameValue === ''){
        setSuccess(username, 'Username is required');

    }else{
        setSuccess(username);
    }
    if(emailValue === ''){
        setError(email, 'Email bat buoc');


    }else if (!isValidEmail(emailValue)){
        setError(email, 'Yeu cau mot Email hop le');
    }else{
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Mat khau bat buoc');
    }else if (passwordValue.length < 8){
            setError(password, 'Yeu cau mat khau lon hon 8 ky tu.');
        }else{
            setSuccess(password);
        }
        if(password2Value === ''){
            setError(password2, 'Vui long xac nhan mat khau');

        }else if(password2Value !== passwordValue) {
            setError(password2, "Mat khau khong khop");
        }else{
            setSuccess(password2);
        } 
        };
