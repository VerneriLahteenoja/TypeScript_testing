
const calculateBmi = (height: number, weight: number) => {
    const bmi = weight / (height * 2) * 100
    if (bmi >= 40) {
        console.log("Obese (Class 3)")
    } else if (bmi >= 35 && bmi <= 39.9) {
        console.log("Obese (Class 2)")
    } else if (bmi >= 30 && bmi <= 34.9) {
        console.log("Obese (Class 1)")
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log("Overweight (Pre-obese")
    } else if (bmi >= 18.5 && 24.9) {
        console.log("Normal (Healthy weight)")
    } else if (bmi >= 17 && bmi <= 18.4) {
        console.log("Underweight (Mild thinness)")
    } else if (bmi >= 16 && bmi <= 16.9) {
        console.log("Underweight (Moderate thinness)")
    } else if (bmi <= 16) {
        console.log("Underweight (Severe thinness)")
    } else {
        console.log("Something went wrong...")
    }
}

calculateBmi(175, 80)