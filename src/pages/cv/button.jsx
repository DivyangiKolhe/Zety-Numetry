import React from "react";
import './cv.css';

function Button({ className }){
    return<>
    
    <div className={`create-btn ${className}`}>
        <button>Create Your CV Now</button>
    </div>
    </>
}
export default Button;