let key = document.querySelector('.keys');
let resultDisplay = document.querySelector('.displayResult');
let displayExp = document.querySelector('.displayExp');

let data = {
    operands: [],
    operators: [],
    total: 0,
    tempNum: 0,
    tmpNumStr: '',
    exp: '',
    
}

key.addEventListener('click', function(e){
    
    let input = e.target.textContent;
    let tmpNum = Number(input)
    data.exp += input;
    
    
    
    let x = data.operators.length;

        

    if(tmpNum >= 0 || input == '.')
    {
        data.tmpNumStr += input;
        console.log(data.tmpNumStr)
    }

    else if (input == 'Clear')
    {
        data.operands = [];
        data.operators = [];
        data.total = 0;
        data.tempNum = 0;
        data.tmpNumStr = '';
        data.exp =''
    }

    else if (input =='Delete')
    {
        if(data.tmpNumStr)
        {
            data.tmpNumStr = data.tmpNumStr.slice(0, -1);
        }
        else 
        {
            data.operands.slice(0, -1)
        }
    }


    else 
    {
        
        
        let tempNum = Number(data.tmpNumStr);

        if(data.tmpNumStr != '')
        {
            data.operands.push(tempNum);
        }
            
        console.log(data.operands);
        

        if(x == 0)
        {
            data.total = tempNum
        }

        else if (data.operators[x-1] == '+')
        {
            add(tempNum);
        }

        else if (data.operators[x-1] == '-')
        {
            sub(tempNum);
        }

        else if (data.operators[x-1] == 'X')
        {
            multiply(tempNum);    
        }
        else if (data.operators[x-1] == '÷')
        {
            divide(tempNum);
        }
        
        if (input != '=')
        {
            data.operators.push(input);
        }
        console.log(data.operators);
        console.log(data.total)
        data.tmpNumStr = '';

        if (input == '=')
        {
            data.exp = data.total
            if (data.operators[x-1] == '÷' || data.operators[x-1] == 'X')
            {
                data.tmpNumStr = '1';
            }
        }
        
        
        
        
    }
    if (data.operands.length < data.operators.length && data.operators[x - 1] != '=')
        {
            console.log('ERROR');
            resultDisplay.textContent = 'ERROR! Clear To Continue';

        }
    else {
        resultDisplay.textContent = data.total;
        displayExp.textContent = data.exp;
    }
    

})

function add(num) {
    data.total += num;
    ;
}

function sub(num) {
    data.total -= num;
    
}

function multiply(num) {
    data.total *= num;
}

function divide(num) {
    data.total = data.total/ num;
}

