'use client';
import styles from '../Styles/Index.module.css'
import CalculatorNumpad  from './Numpad';
import CalculatorViewPort from './calcInput';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default function IndexInterFace(): JSX.Element {
   
   


   
   
   return (
        <main className={styles.index}>
       
       
       
       {/* display of calc */}
        <div className={styles.calculator_viewport}>
            <CalculatorViewPort /> 




        </div>
        {/* Numpad */}
        <div className={styles.calculator_input}>

            <CalculatorNumpad />



        </div>


        </main>
    )
}