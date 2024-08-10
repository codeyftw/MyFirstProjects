function onCountPressed(action){

    const countingField = document.getElementById('counting');
    let currentValue = parseInt(countingField.value);

    if(action === 'Count up') {
        countingField.value = currentValue + 1;
    }else if(action === 'Count down') {
        countingField.value = currentValue - 1;
    }else if(action === 'Reset') {
        countingField.value = 0;
    }
}
