import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DashBoard } from "./pages/dashboard";
import { Auth } from "./pages/dashboard/auth";
import { SignedIn, UserButton  } from "@clerk/clerk-react";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";

function App() {

  return (
    <Router>
      <div className="app-container">
      <div className="navbar">
          <Link to="/"> Dashboard</Link>
          <Link to="/auth"> Sign-In</Link>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
        <Routes>
          <Route path="/" element={
            <FinancialRecordsProvider>
              <DashBoard /> 
            </FinancialRecordsProvider>} />
          <Route path="/auth" element={<Auth />} />
        </Routes>

      </div>
    </Router>

   
  )
}

export default App
