import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartApp from "./pages/StartApp";

// Simple placeholder components for missing routes
const Login = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    Login Page - Coming Soon
  </div>
);
const CompanyList = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    Company List - Coming Soon
  </div>
);
const CompanyDetails = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    Company Details - Coming Soon
  </div>
);
const Portfolio = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    Portfolio - Coming Soon
  </div>
);
const Valuations = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    Valuations - Coming Soon
  </div>
);
const Fundamentals = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    Fundamentals - Coming Soon
  </div>
);
const QuarterlyResults = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    Quarterly Results - Coming Soon
  </div>
);
const HistoricalFinancials = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    Historical Financials - Coming Soon
  </div>
);
const FinancialReports = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    Financial Reports - Coming Soon
  </div>
);
const Analytics = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    Analytics - Coming Soon
  </div>
);
const HelpSupport = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    Help & Support - Coming Soon
  </div>
);
const Settings = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    Settings - Coming Soon
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<StartApp />} />
        <Route path="/" element={<StartApp />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
        <Route path="/company/details" element={<CompanyDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/valuations" element={<Valuations />} />
        <Route path="/fundamentals" element={<Fundamentals />} />
        <Route path="/quarterly-results" element={<QuarterlyResults />} />
        <Route
          path="/historical-financials"
          element={<HistoricalFinancials />}
        />
        <Route path="/reports" element={<FinancialReports />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/help" element={<HelpSupport />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
