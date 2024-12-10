const numKey = document.querySelectorAll('.num');
const myKeyPad = document.querySelector('.keyPad');
const txtDisplay = document.querySelector('.txtDisplay');
txtDisplay.value = 0;
myKeyPad.addEventListener('click',(event) => 
    {
        
        handleKeyPress(event.target.textContent)
    
    })


function handleKeyPress(keyPressed)
{
    keyPressed2Screen(keyPressed);
}


function  keyPressed2Screen(keyPressed)
{
    if (txtDisplay.value =='ERROR')
        txtDisplay.value = 0; 
    switch(keyPressed)
    {
        case '=':
        {
            let result = eval(txtDisplay.value)
            if (result =='Infinity') 
                txtDisplay.value = 'ERROR';
                else
                txtDisplay.value = result; ;
            break;
        }
        case 'CLR':
        {
            txtDisplay.value = 0;
            break;
        }
        case 'DEL':
            {
                if(txtDisplay.value != 0 )
                txtDisplay.value = txtDisplay.value.substr(0, txtDisplay.value.length-1);
            if(txtDisplay.value.length ==0)
                txtDisplay.value =0;
                break;  
            }
        default:
            {
                if(txtDisplay.value == 0 )
                    txtDisplay.value = keyPressed;
                else
                    txtDisplay.value += keyPressed;


            }
    }
        
    
}

