'use-strict'

const ValidationModule = (() => {
    const mod = {}
    mod.inputs = () => {
        const formInputs = document.querySelectorAll("#form > input");
        formInputs.forEach((input, index) => {
            input.addEventListener('keydown', (event) => {
                if (input.value.length < 2){
                    input.classList.add('error');
                    // console.log('The input: ' + input.value + ' is less than required!')
                }else{
                    input.classList.remove('error');
                    // console.log('The input: ' + input.value + ' is ok!')
                }
            })
        })
    }
    return mod;
})() 

export { ValidationModule }