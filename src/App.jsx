// import React, { useState } from 'react'
// import video from './video.json'
// import Container from './Container'
// import Navbar from './Navbar'

// const App = () => {
//     let [state,setState]=useState(video)

//     let [vid,setVid]=useState(state[0])

//     let handlePlay=(max)=>{
//         console.log(max);

//         setVid(max.videoUrl)
        
//     }
//   return (
//     <div>
//       <Navbar></Navbar>
//       <Container fun={handlePlay} state={state} vid={vid}></Container>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react';
import video from './video.json';
import Container from './Container';
import Navbar from './Navbar';

const App = () => {
  const [state, setState] = useState(video);
  const [vid, setVid] = useState(state[0]); // full video object

  const handlePlay = (videoObj) => {
    console.log("Selected video:", videoObj);
    setVid(videoObj); // ✅ set full object, not just URL
  };

  return (
    <div>
      <Navbar />
      <Container fun={handlePlay} state={state} vid={vid} />
    </div>
  );
};

export default App;
