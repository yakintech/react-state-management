import React from 'react'

function CheckboxStateSample() {

    const changeEvent = (target) => {

        console.log('Target', target.value);

    }

    return (<>
        <div>

            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={(e) => changeEvent(e.target)} />
            <label for="vehicle1"> I have a bike</label><br></br>

            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2"> I have a car</label><br></br>

            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> I have a boat</label><br></br>
        </div>
    </>
    )
}

export default CheckboxStateSample