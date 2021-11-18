const getTotalValue = (color) => {
    console.log(color)
    const countInput = document.querySelector(`#${color}-count`);
    const costInput = document.querySelector(`#${color}-cost`);
    const totalValueEl = document.querySelector(`.${color}-total`);

    const totalsArray = Array.from(document.querySelectorAll('.total'));
    const allTotal = document.querySelector('.all-total');

    totalValueEl.innerHTML = countInput.value * costInput.value;
    allTotal.innerHTML = totalsArray.reduce((acc, el) => acc + +el.innerHTML, 0)
}

const inputsArr = Array.from(document.querySelectorAll('input'));


inputsArr.forEach(element => {
    element.addEventListener('input', () => getTotalValue(element.name.split('-')[0]))
})


