const btns = document.querySelectorAll('.button')
const addInput = document.getElementById('add-input')
const addBtn = document.getElementById('add-btn')
let arr = [];
btns.forEach((btn,index) => {
    btn.onclick = () => {
        document.querySelector(`.question-${index}`).classList.toggle('active')
    }
})
addBtn.onclick = () => {
    arr.push(parseFloat(addInput.value))
    document.querySelector('.main-arr').style.display = 'block'
    document.querySelector('.main-arr').innerHTML = 'Mảng hiện tại:' +arr;
}
function sumOfPosNum () {
    const result = arr.reduce((sum,cur) => {
        if(cur > 0) {
            return sum + cur;
        }
        else {
            return sum;
        }
    },0)
    document.querySelector('.result-1').innerHTML = 'Tổng số dương trong mảng: ' + result;
}
function countPosNum () {
    let count = 0;
    arr.forEach((item) => {
        if(item > 0 ) {
            count++;
        }
    })
    document.querySelector('.result-2').innerHTML = `Có ${count} số dương trong mảng`;
}
function minOfArr () {
    let min = arr[0];
    arr.forEach((item) => {
        if(item <= min) {
            min = item;
        }
    })
    document.querySelector('.result-3').innerHTML = `Số nhỏ nhất trong mảng : ${min}`;
}
function minPosNumOfArr () {
    let min;
    arr.forEach((item) => {
        if(item > 0) {
            if(min === undefined || item <= min) {
                min = item
            }
        }
    })
    document.querySelector('.result-4').innerHTML = `Số dương nhỏ nhất trong mảng : ${min}`;
}
function findLastEvenNum () {
    let index = -1;
    for(let i=arr.length - 1;i>=0;i--) {
        if(arr[i]%2 === 0) {
            document.querySelector('.result-5').innerHTML = `Số chẵn cuối trong mảng : ${arr[i]}`;
            break;
        }
        else {
            document.querySelector('.result-5').innerHTML = `Số chẵn cuối trong mảng : ${index}`;
        }
    }
}
function swapNum () {
    let firstNum = document.getElementById('first-num').value - 1;
    let secondtNum = document.getElementById('second-num').value - 1 ;
    let temp = arr[firstNum];
    arr[firstNum] = arr[secondtNum];
    arr[secondtNum] = temp;
    document.querySelector('.result-6').innerHTML = `Dãy sau khi đổi : ${arr}`
}
function sortArr () {
    arr.sort(function(a,b) {
        return a-b;
    })
    document.querySelector('.result-7').innerHTML = `Dãy sau khi đổi : ${arr}`
}
function findPerfectNum () {
    let resultBlock = arr.reduce((result,current) => {
        if (result !== -1) {
            return result;
          }
          if (checkPerfectNum(current)) {
            return current;
          }
          return -1;
        }, -1);
    document.querySelector('.result-8').innerHTML = `Số nguyên tố đầu tiên của dãy : ${resultBlock}`
}
function checkPerfectNum (num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
    }
    return true;
}
let newArr = []
function addNewArray () {
    let newValue = parseFloat(document.getElementById('new-num').value)
    newArr.push(newValue)
    document.querySelector('.my-array').innerHTML = newArr;
}
function countIntNum () {
    let count = 0 ;
    newArr.forEach((num) => {
        if(Number.isInteger(num)) {
            count++;
        }
    })
    document.querySelector('.result-9').innerHTML = `Có ${count} số nguyên trong dãy`
}
function countPosAndNevNum () {
    let countPositiveNum = 0;
    let countNegativeNum = 0;
    arr.forEach((num) => {
        if(num < 0) {
            countNegativeNum++;
        }
        if(num > 0) {
            countPositiveNum++
        }
    })
    document.querySelector('.result-10').innerHTML = `Có ${countNegativeNum} số âm và ${countPositiveNum} số dương trong dãy`;
}