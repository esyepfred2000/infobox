import React from "react";
import InfoBox from "./components/InfoBox";

const App: React.FC = () => {
    return (
        <div>
            <InfoBox 
                 title="UNV Mini Web Developer Task"
                 text="In this task, I was tasked to create a small InfoBox component using React and TypeScript that displays; a title, a short paragraph of text, and a button that links to an external URL. The button was supposed; open the linkUrl in a new tab, Use basic styling (plain CSS, inline styles, or any simple framework) and Make sure the component is responsive (works on mobile and desktop). Now here it is below, try to test it"
                 linkText="Infobox component"
                 linkUrl="https://example.com" 
            />
        </div>
    );
};

export default App;