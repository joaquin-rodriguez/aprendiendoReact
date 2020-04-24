import React from 'react'

function Ian() {
    let stupid = document.getElementById("is").value;
    alert("Ian is " + stupid);

};


function Diss() {
    return (
        <div>
            <h1>Ian is </h1>
            <form>
                <input type={Text} id={"is"} />
            </form>
            <button onClick={Ian}>Submit</button>
        </div>
    );
}



export default Diss;