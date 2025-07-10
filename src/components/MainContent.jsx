import React from 'react'

const MainContent = () => {
    const name = "John Doe";
    const age = 30;
    const multiply =(a,b) =>a*b;
    const specialClass = "special-class";
  return (
    <div>
        <main>
            <h2>Main Content</h2>
            <p>This is the main content area of the website.</p>
            <p>Here you can find various articles, tutorials, and resources.</p>
            <p>2+2 = 4 is different from 2 + 2 in curly braces</p>
            <p>2 + 2 = {2 + 2} the result is 4 which is in curly braces</p>
           {/* comment */}
            <p>My name is {name} and I am {age} years old.</p>
            <p>Multiplication of 2 and 3 is {multiply(2,3)}</p>
            <p className={specialClass}>This is a special class</p>
        </main>
    </div>
  )
}

export default MainContent
