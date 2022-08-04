import React, { useState } from 'react'

function RadioButtonStateSample() {

    const [radioValue, setradioValue] = useState('css');
    const [fileValue, setfileValue] = useState(null)

    const getRadioValue = () => {

        console.log('Radio Value', radioValue);

    }

    return (<>
    <input type='file' value={fileValue} onChange={(e) => setfileValue(e.target.value)} />

        <div onChange={(e) => setradioValue(e.target.value)}>
            <input type="radio" id="html" name="fav_language" value="html" />
            <label for="html">HTML</label><br></br>

            <input type="radio" id="css" name="fav_language" value="css" />
            <label for="css">CSS</label><br></br>

            <input  type="radio" id="javascript" name="fav_language" value="javascript" />
            <label for="javascript">JavaScript</label>
            
            <button onClick={() => getRadioValue()}>Get RadioButton Value</button>

        </div>
    </>
    )
}

export default RadioButtonStateSample