// import { useState } from 'react';

// import { CORE_CONCEPTS } from './data.js';
// import Header from './components/Header/Header.jsx';
// import CoreConcept from './components/CoreConcept.jsx';
// import TabButton from './components/TabButton.jsx';
// import { EXAMPLES } from './data.js';

// function App() {
//   const [selectedTopic, setSelectedTopic] = useState();

//   function handleSelect(selectedButton) {
//     // selectedButton => 'components', 'jsx', 'props', 'state'
//     setSelectedTopic(selectedButton);
//     // console.log(selectedTopic);
//   }

//   console.log('APP COMPONENT EXECUTING');

//   let tabContent = <p>Please select a topic.</p>;

//   if (selectedTopic) {
//     tabContent = (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Header />
//       <main>
//         <section id="core-concepts">
//           <h2>Core Concepts</h2>
//           <ul>
//             {CORE_CONCEPTS.map((conceptItem) => (
//               <CoreConcept key={conceptItem.title} {...conceptItem} />
//             ))}
//           </ul>
//         </section>
//         <section id="examples">
//           <h2>Examples</h2>
//           <menu>
//             <TabButton
//               isSelected={selectedTopic === 'components'}
//               onSelect={() => handleSelect('components')}
//             >
//               Components
//             </TabButton>
//             <TabButton
//               isSelected={selectedTopic === 'jsx'}
//               onSelect={() => handleSelect('jsx')}
//             >
//               JSX
//             </TabButton>
//             <TabButton
//               isSelected={selectedTopic === 'props'}
//               onSelect={() => handleSelect('props')}
//             >
//               Props
//             </TabButton>
//             <TabButton
//               isSelected={selectedTopic === 'state'}
//               onSelect={() => handleSelect('state')}
//             >
//               State
//             </TabButton>
//           </menu>
//           {tabContent}
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;

import reactImg from "./assets/react-core-concepts.png"
// import componentImg from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js";

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomDesc(max) {
  return Math.floor(Math.random() * max)

}

function Header() {

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[genRandomDesc(reactDescription.length)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// } //can use like this 

function CoreConcept(image, title, description) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header></Header>

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              // image={componentImg}
              // title="Components"
              // description="The core UI building blocks" //Can write like this manually

              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description} //Can write like this as well
            />
            <CoreConcept
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[3]}
            />

          </ul>
        </section>
      </main>
    </div>
  );
}


export default App;


