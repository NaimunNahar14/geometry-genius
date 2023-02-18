//declare serial number
 let serial = 0;
document.getElementById('btn-triangle').addEventListener('click',function(){
    //Triangle Cards Operation
    serial += 1;
    //get the value
    const inputFieldB = document.getElementById('userfield-b');
    const newInputAmountBString = inputFieldB.value;
    const newInputAmountB = parseFloat(newInputAmountBString);

     const inputFieldH = document.getElementById('userfield-h');
    const newInputAmountHString = inputFieldH.value;
    const newInputAmountH = parseFloat(newInputAmountHString);
    //Triangle card 
    const Name = document.getElementById('firstcard-name').innerText;

    inputFieldB.value = '';
    inputFieldH.value = '';

    //validation for negative number and string.
    if (
        newInputAmountB == ""||
        newInputAmountH == ""||
        newInputAmountB <= 0 ||
        newInputAmountH <= 0
      ) {
        return alert("please Enter any valid number");
      } 
      else if(isNaN(newInputAmountB) || newInputAmountH < 0){
        alert('Please Enter Numbers');
    }
   
      //Triangle Calculation
    const areaOfTriangle = (0.5* newInputAmountB * newInputAmountH).toFixed(2);
    //use the display data function
    displayData(Name ,areaOfTriangle);
    //use disablebutton function
    disabledButton('btn-triangle');
  

})
document.getElementById ('btn-rectangle').addEventListener('click',function(){
    serial += 1;
    const inputFieldW = document.getElementById('userfield-w');
    const newInputAmountWString = inputFieldW.value;
    const newInputAmountW = parseFloat(newInputAmountWString);


    const inputFieldL =document.getElementById('userfield-l');
    const newInputAmountLString = inputFieldL.value;
    const newInputAmountL = parseFloat(newInputAmountLString);
    
    const Name = document.getElementById('secondcard-name').innerText;
   
     //validation for negative number.

     //validation for negative number and string.
     if (
      newInputAmountW == ""||
      newInputAmountL == ""||
      newInputAmountW <= 0 ||
      newInputAmountL <= 0
    ) {
      return alert("please Enter any valid number");
    } 
    else if(isNaN(newInputAmountW) || newInputAmountL < 0){
      alert('Please Enter Numbers');
  }
    //   calculation of Rectangle 
      const areaOfRectangle = (newInputAmountW * newInputAmountL).toFixed(2);
      inputFieldW.value = '';
      inputFieldL.value = '';
    //   use display data function
    displayData(Name ,areaOfRectangle);
    // use disable btn function
    disabledButton('btn-rectangle');


})

document.getElementById('btn-parallelogram').addEventListener('click',function(){
    serial +=1;
    const inputB = document.getElementById('input-b').innerText;
    const inputH = document.getElementById('input-h').innerText;
    const Name = document.getElementById('thridcard-name').innerText;
    // calculation of Parallelogram
    const areaOfParallelogram = (parseFloat(inputB) * parseFloat(inputH)).toFixed(2);
    // use display data function
    displayData(Name, areaOfParallelogram);
    // use disable btn function
    disabledButton('btn-parallelogram');
})

document.getElementById('btn-rhombus').addEventListener('click',function(){
    serial +=1;
    const inputD1 = document.getElementById('input-d1').innerText;
    const inputD2 = document.getElementById('input-d2').innerText;
    const Name = document.getElementById('fourthcard-name').innerText;
    // calculation of Rhombus
    const areaOfRhombus = ( 0.5 * parseFloat(inputD1) * parseFloat(inputD2)).toFixed(2);
    //use display data function
    displayData(Name, areaOfRhombus);
    //use disable btn function
    disabledButton('btn-rhombus');
})

document.getElementById('btn-pentagon').addEventListener('click',function(){
    serial +=1;
    const inputP = document.getElementById('input-p').innerText;
    const Inputb = document.getElementById('input-B').innerText;
    const Name = document.getElementById('fivecard-name').innerText;
    //calculation Pentagon 
    const areaOfPentagon = ( 0.5 * parseFloat(inputP) * parseFloat(Inputb)).toFixed(2);
    //use display data function
    displayData(Name , areaOfPentagon);
    //use disable btn function
    disabledButton('btn-pentagon');
})

document.getElementById('btn-ellipse').addEventListener('click',function(){
    serial +=1;
    const inputA = document.getElementById('input-a').innerText;
    const inputB1 = document.getElementById('input-b1').innerText;
    const Name = document.getElementById('Sixcard-name').innerText;
    //calculation Ellipse
     const areaOfEllipse = (3.1416 * parseFloat(inputA) * parseFloat(inputB1)).toFixed(2);
     //use display data function
     displayData(Name, areaOfEllipse);
     //use disable btn function
     disabledButton('btn-ellipse');

})
//Area Calculation Function
function displayData(nameOfC, resultOfC) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${nameOfC}</td>
      <td>${resultOfC}</td>
      <td>
      <button class="bg-sky-500 mt-6 mb-6 px-16 py-2 text-center text-white font-medium rounded-lg">Convert to m<sup>2</sup>  </button>
      </td>
      <td ><i class="fa fa-trash remove-item  text-red-500 cursor-pointer" aria-hidden="true"></i>
      </td>
      
    `;
    container.appendChild(tr);
  }
  // Btn Disable Function
  function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
  }
  // function randomColor() {
  //   let color = [];
  //   for (let i = 0; i < 3; i++) {
  //     color.push(Math.floor(Math.random() * 256));
  //   }
  //   return 'rgb(' + color.join(', ') + ')';
  // } 
  
  // document.addEventListener("mouseover", function(){
  //   document.body.style.backgroundColor = randomColor();
  // });
  
  // document.querySelector('circle').addEventListener('mouseover', event => {
  //       event.target.style.fill = randomColor();
  // });

  
