import React, { Component } from 'react';
import React, { useState } from 'react';

class ChooseSport extends React.Component {
    ChooseSport = ({show}) => {
    const [sport,setSport]=useState("");
    function getFormData(e)
    {
        console.warn(sport)
        e.preventDefault()
    }
    return (
        <div className="App">

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Choose Sport</h1>
        <form onSubmit={getFormData}>
        
        <br />

        <select onChange={(e)=>setSport(e.target.value)}>
                <option>Choose Sport</option>

                <option>Football</option>
                <option>Baseball</option>
                <option>Softball</option>
                <option>Volleyball</option>
                <option>Mens Lacrosse</option>
                <option>Womens Lacrosse</option>
                <option>Mens Soccer</option>
                <option>Womens Soccer</option>
                <option>Mens Track and Field</option>
                <option>Womens Track and Field</option>
                <option>Mens Basketball</option>
                <option>Womens Basketball</option>
                <option>Mens Cross Country</option>
                <option>Womens Cross Country</option>
                <option>Field Hockey</option>
                <option>Equestrian</option>
                <option>Golf</option>
                <option>Tennis</option>
                
            </select>

                <br />
                <br />


                <br />
                <br />

        <button type="submit">Submit</button>

        </form>
        </div>
    );
    }
}
export default ChooseSport;