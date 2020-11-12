//get user input
//find add or subtract
//display value
//show red text when negative



function math(operation, total) {
    let increment = document.getElementById('increment').value;
    let totalDisplay = document.getElementById('total')
    total = parseInt(totalDisplay.innerText);
    if (checkValue(increment)) {
        if (operation === 'add') {
            total = addValue(increment, total);
        } else if (operation === 'subtract') {
            total = subtractValue(increment, total);
        }
        if (total < 0) {
            totalDisplay.style.color = 'red';
        } else {
            totalDisplay.style.color = 'black';
        }
        totalDisplay.innerText = total;
    }
}

function addValue(inc, total) {
    total = total + parseInt(inc);
    return total;
}

function subtractValue(inc, total) {

    total = total - inc;
    return total;
}

function checkValue(inc) {
    //check for only numbers
    let check = /^[0-9]+$/;
    if (!inc.match(check)) {
        document.getElementById('error').classList.toggle('hide');
        setTimeout(function() {
            document.getElementById('error').classList.toggle('hide');
        }, 1500);
        return false;
    } else {
        return true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('increment').addEventListener('click', function(e) {
        e.target.value = '';
    });
    document.getElementById('add').addEventListener('click', function() {
        math('add');
    });
    document.getElementById('subtract').addEventListener('click', function() {
        math('subtract');
    });

})