


const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{

    let cardId= document.getElementById('name-surname').value;
    let cardMonth= document.getElementById('date-month').value;
    let cardYear=document.getElementById('date-year').value;
    let cardNumber=document.getElementById('card-number').value;
    let cardcvc=document.getElementById('cvc').value;

    let cardName=document.getElementById('card-full-name');
    cardName.innerText = cardId;
    let cardDate=document.getElementById('card-date');
    cardDate.innerText = (cardMonth + '/' +cardYear);
    let cardNumbers=document.getElementById('card-numbers');
    cardNumbers.innerText = cardNumber;
    let cardCvc=document.getElementById('card-cvc');
    cardCvc.innerText = cardcvc;
});