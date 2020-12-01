
 /*3. Once the CSS variables are set up, we can update them. To do so, first select all the inputs:*/

 const inputs = document.querySelectorAll(".controls input");
 
 /*4. Create a function that updates each property. To do so, let's set each property with "this.name" (which refers to the "name" tag inside the input) and "this.value" (which refers to the value being changed). 
 Also, let's attach the measurement unit, to do so we create a variable which refers to the "data-sizing" tag also located in the input element. To refer it we use  "this.dataset.sizing".*/

 function triggerChange() {
   const unit = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`,  this.value+unit);
 }

 /*5. Finally, let's add two events, one for the change action a another for the mousemove action, both added to the inputs variable. 
 Since querySelectorAll returns a nodelist, we must use the forEach method in order to apply the funcion in all the elements listed in the nodelist.*/

inputs.forEach(input => input.addEventListener('change', triggerChange));
inputs.forEach(input => input.addEventListener('mousemove', triggerChange));


