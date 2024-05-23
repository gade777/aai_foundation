import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import { FaRoadCircleExclamation } from "react-icons/fa6";
import AddStaff from "./components/addStaff/AddStaff";

import AddStaffList from "./components/addStaffList/AddStaffList";
import AddPendingList from "./components/addpendinglist/AddPendingLIst";
import SearchDonor from "./components/searchDonor/SearchDonor";
import AddDonor from "./components/addDonor/AddDonor";
import SearchVisitor from "./components/searchVisitor/SearchVisitor";
import AddVisitor from "./components/addVisitor/AddVisitor";
import SearchDonation from "./components/searchDonation/SearchDonation";
import AddDonation from "./components/addDonation/AddDonation";
import AddBucket from "./components/addBucket/AddBucket";
import SearchBucket from "./components/searchBucket/SearchBucket";
import AddEmail from "./components/addEmail/AddEmail";
import EmailList from "./components/emailList/EmailList";
import AddTask from "./components/addTask/AddTask";
import PendingTask from "./components/pendingTask/PendingTask";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/addstaff" element={<AddStaff/>}/>
            <Route path="/addStaffList" element={<AddStaffList/>}/>
            <Route path="/addpendinglist" element={<AddPendingList/>}/>
            <Route path="/searchDonor" element={<SearchDonor/>}/>
            <Route path="/addDonor" element={<AddDonor/>}/>
            <Route path="/searchVisitor" element={<SearchVisitor/>}/>
            <Route path="/addVisitor" element={<AddVisitor/>}/>
            <Route path="/searchDonation" element={<SearchDonation/>}/>
            <Route path="/addDonation" element={<AddDonation/>}/>
            <Route path="/addBucket" element={<AddBucket/>}/>
            <Route path="/searchBucket" element={<SearchBucket/>}/>
            <Route path="/addTask" element={<AddTask/>}/>
            <Route path="/pendingTask" element={<PendingTask/>}/>
            <Route path="/addEmail" element={<AddEmail/>}/>
            <Route path="/emailList" element={<EmailList/>}/>
          </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;
