const incomeid=document.getElementById('income');
const foodid=document.getElementById('food');
const rentid=document.getElementById('rent');
const clothesid=document.getElementById('clothe');
const accountid=document.getElementById('account');
const expenseid=document.getElementById('expense');
const balanceid=document.getElementById('balance');
const saveid=document.getElementById('save');
const amountid=document.getElementById('amount');
const remainid=document.getElementById('remain');

const im=parseInt(foodid.value);
const rent=parseInt(rentid.value);
const clo=parseInt(clothesid.value);
const sum=im+rent+clo;

const inco=parseInt(incomeid.value);
const exp=expenseid.innerText;
const sub=inco-exp;

function getData(){
    const im=parseInt(foodid.value);
const rent=parseInt(rentid.value);
const clo=parseInt(clothesid.value);
const sum=im+rent+clo;
expenseid.innerText=sum;

const inco=parseInt(incomeid.value);
const exp=expenseid.innerText;
const sub=inco-exp;
balanceid.innerText=sub;
}

function getSave(){
const sa=parseInt(saveid.value);

const im=parseInt(foodid.value);
const rent=parseInt(rentid.value);
const clo=parseInt(clothesid.value);
const sum=im+rent+clo;

const inco=parseInt(incomeid.value);
const exp=expenseid.innerText;
const sub=inco-exp;

const result=(sub/100)*sa;
amountid.innerText=result;

const total=inco-(sum+result);
remainid.innerText=total;
}