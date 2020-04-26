
const inputs = document.querySelectorAll('.controls input')
// console.log(inputs);

function handleUpdate(){
    const suffix = this.dataset.sizing || '';   //dataset забирает все data-атрибуты или '' иначе undefined для color. suffix Нужен чтобы конкатенироваться к this.value (смотреть ниже) 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //  то есть меняем setProperty(propertyName, value, priority) propertyName на value;
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)) //потому что мы вернули массив, поэтому map



