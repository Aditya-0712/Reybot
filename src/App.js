import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing Page/Landing";

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </Router>
    );
}

export default App;