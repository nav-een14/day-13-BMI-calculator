import { useState } from "react";
import "./App.css";


function App(){

    const [weight,setWeight] = useState("");
    const [height,setHeight] = useState("");
    const [bmi,setBmi] = useState(null);
    const [message,setMessage] = useState("");


    const calculateBMI = () => {


        if(weight === "" || height === ""){

            alert("Enter weight and height");

            return;
        }


        const heightMeter =
        height / 100;


        const result =
        weight / (heightMeter * heightMeter);


        setBmi(result.toFixed(2));


        if(result < 18.5){

            setMessage("Underweight");

        }

        else if(result < 25){

            setMessage("Normal Weight");

        }

        else if(result < 30){

            setMessage("Overweight");

        }

        else{

            setMessage("Obese");

        }

    };


    const reset = ()=>{

        setWeight("");

        setHeight("");

        setBmi(null);

        setMessage("");

    };


    return(

        <div className="container">


            <h1>BMI Calculator</h1>


            <input

            type="number"

            placeholder="Weight (kg)"

            value={weight}

            onChange={(e)=>
            setWeight(e.target.value)}

            />


            <input

            type="number"

            placeholder="Height (cm)"

            value={height}

            onChange={(e)=>
            setHeight(e.target.value)}

            />


            <button onClick={calculateBMI}>

                Calculate

            </button>


            <button onClick={reset}>

                Reset

            </button>



            {

            bmi &&

            <div className="result">

                <h2>
                    BMI: {bmi}
                </h2>

                <h3>
                    {message}
                </h3>

            </div>

            }


        </div>

    );

}


export default App;