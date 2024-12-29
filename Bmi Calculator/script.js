
function calculateBMI() {

      const height = document.getElementById('height').value;
  
      const weight = document.getElementById('weight').value;
  
  
  
      if (height > 0 && weight > 0) {
  
          const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  document.getElementById('result').style.textAlign = 'center';
      document.getElementById('result').innerHTML = `Your BMI is <strong>${bmi}</strong> <br>`;
            
            if (bmi < 18.5) {
                  document.getElementById('result').innerHTML += 'You are <span style="color: yellow; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">UNDERWEIGHT!</span>';
            }
            else if (bmi >= 18.5 && bmi <= 24.9) {
  
              document.getElementById('result').innerHTML += 'You are <span style="color: green; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">HEALTHY!</span>';
            }
            else if (bmi >= 25 && bmi <= 29.9) {
  
              document.getElementById('result').innerHTML += 'You are <span style="color: red; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">OVERWEIGHT!!</span>';
            }
            else {
  
              document.getElementById('result').innerHTML += 'You are <span style="color: red; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;">OBESE!!!!</span>';
            }
  
      } else {
  
          document.getElementById('result').innerText = 'Please enter valid height and weight';
  
      }
}