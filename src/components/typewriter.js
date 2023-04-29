import React from "react"
import Typewriter from 'typewriter-effect';

function Text() {
    return (
        <Typewriter
            options={{ 
                cursor: "_",
                autoStart: true,
                loop: true, 
                strings: ['Full-Stack Developer.', 'UI Designer.', 'Logo Designer.', 'Permanent Coding Student.']
            }}
        />
    )
}  

export default Text