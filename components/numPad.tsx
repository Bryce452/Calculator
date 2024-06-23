import styles from '@/styles/numpad.module.css' 

export default function CalculatorNumpad(): JSX.Element {


    const numpadVars = [
        {value: 1, type: 'number'},
        {value: 2, type: 'number'},
        {value: 3, type: 'number'},
        {value: 4, type: 'number'},
        {value: 5, type: 'number'},
        {value: 6, type: 'number'},
        {value: 7, type: 'number'},
        {value: 8, type: 'number'},
        {value: 9, type: 'number'},
        {value: 0, type: 'number'},
        {value: '+', type: 'operator'},
        {value: '-', type: 'operator'},
        {value: '*', type: 'operator'},
        {value: '/', type: 'operator'},
    ]
//                                  value / posistion in array
    const NumpadItems = numpadVars.map((item, index) => {
        return (
            <div key={index} className={styles.numpad_item}>
                {item.value === typeof 'number'
                ? <div className={styles.numpad_item_number}>{item.value}</div>
                : <div className={styles.numpad_item_operator}>{item.value}</div>
                }
            </div>
        )
    })

    return (
        <div className={styles.numpad_container}>
            {NumpadItems}
        </div>
    )

}