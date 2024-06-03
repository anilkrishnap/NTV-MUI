// // src/App.js
// "use client";
// import React from 'react';
// import GlobalStyles from '../GlobalStyle';
// import Button from '../../components/Button';

// const App = () => {
//   return (
//     <>
//       <GlobalStyles />
//       <div>
//         <h1>Welcome to My React App</h1>
//         <p>This is an example paragraph.</p>
//         <a href="#example">Example Link</a>
//         <Button >Click Me</Button>
//         <Button >Click Me</Button>
//         <Button >Click Me</Button>
//       </div>
//     </>
//   );
// };

// export default App;


// "use client";
// import React from 'react';
// import GlobalStyles from '../GlobalStyle';
// import Button from '../../components/Button';

// const App = () => {
//   return (
//     <>
//       <GlobalStyles />
//       <div>
//         <h1>Welcome to My React App</h1>
//         <p>This is an example paragraph.</p>
//         <a href="#example">Example Link</a>
//         <Button 
//           bgColor="red" 
//           color="white" 
//           padding="10px 30px" 
//           border="2px solid red" 
//           borderRadius="10px"
//           hoverBgColor="darkred"
//         >
//         Button1
//         </Button>
//         <Button 
//           bgColor="blue" 
//           color="yellow" 
//           padding="15px 25px" 
//           border="2px solid blue" 
//           borderRadius="15px"
//           hoverBgColor="darkblue"
//         >
//         Button2
//         </Button>
//         <Button 
//           bgColor="green" 
//           color="black" 
//           padding="5px 15px" 
//           border="2px solid green" 
//           borderRadius="20px"
//           hoverBgColor="darkgreen"
//         >
//         Button3
//         </Button>
//         <Button>Normal Button</Button>
//       </div>
//     </>
//   );
// };

// export default App;


"use client";
import React from 'react';
import GlobalStyles from '../GlobalStyle';
import Button from '../../components/Button';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <h1>Welcome to My React App</h1>
        <p>This is an example paragraph.</p>
        <a href="#example">Example Link</a>
        <Button variant="primary" name="Primary Button" />
        <Button variant="secondary" name="Secondary Button" />
        <Button variant="danger" name="Danger Button" />
        <Button name="default button" />
      
       
      </div>
    </>
  );
};

export default App;
