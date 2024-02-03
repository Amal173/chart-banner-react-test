import React, { useState } from "react";
import BriefcaseIcon from "../../Assets/Briefcase.png";
import StatBoardIcon from "../../Assets/StatBoard.png";
import MenuIcon from "../../Assets/Circled Menu.png";
import SupportIcon from "../../Assets/Support.png";
import PuzzleIcon from "../../Assets/Puzzle.png";
import HelpIcon from "../../Assets/Help.png";
import ShutdownIcon from "../../Assets/Shutdown.png";
import ProfileImage from "../../Assets/Rectangle 10.png";
import LineChart from "../LineChart/LineChart";
import PieChart from "../PieChart/PieChart";
import Table from "../Table/Table";
import Profile from "../Profile/Profile";
import Pagination from "../Pagination/Pagination";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './Dashbord.css';

const Dashbord = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home_screen">
      <div className="dashboard">
        <div className="title_logo">
          <div className="icon">
            <img src={BriefcaseIcon} alt="" />
          </div>
          <div className="title">
            <img src={StatBoardIcon} alt="" />
          </div>
        </div>
        <div className="options">
          <ul>
            <li>
              <div>
                <img src={MenuIcon} alt="" />
              </div>
              <p>Dashboard</p>
            </li>
            <li>
              <div>
                <img src={SupportIcon} alt="" />
              </div>
              <p>Support</p>
            </li>
            <li>
              <div>
                <img src={PuzzleIcon} alt="" />
              </div>
              <p>Plugins</p>
            </li>
            <li>
              <div>
                <img src={HelpIcon} alt="" />
              </div>
              <p>Help</p>
            </li>
          </ul>
        </div>
        <div className="logout">
          <button>
            <p>Logout</p>
            <div>
              <img src={ShutdownIcon} alt="" />
            </div>
          </button>
        </div>
      </div>
      <div className="chart_shower">
        <div className="head">
          <div className="hanburger">
            <div className="hanburg_logo">
              {!isMenuOpen ? (
                <i className="material-symbols-outlined" onClick={toggleMenu}>
                  menu
                </i>
              ) : (
                <i class="material-symbols-outlined" onClick={toggleMenu}>
                  close
                </i>
              )}

              <div className="title_logo">
                <div className="icon">
                  <img src={BriefcaseIcon} alt="" />
                </div>
                <div className="title">
                  <img src={StatBoardIcon} alt="" />
                </div>
              </div>
            </div>
            {isMenuOpen ? (
              <div className="hanburger_menu">
                <div className="options">
                  <ul>
                    <li>
                      <div>
                        <img src={MenuIcon} alt="" />
                      </div>
                      <p>Dashboard</p>
                    </li>
                    <li>
                      <div>
                        <img src={SupportIcon} alt="" />
                      </div>
                      <p>Support</p>
                    </li>
                    <li>
                      <div>
                        <img src={PuzzleIcon} alt="" />
                      </div>
                      <p>Plugins</p>
                    </li>
                    <li>
                      <div>
                        <img src={HelpIcon} alt="" />
                      </div>
                      <p>Help</p>
                    </li>
                    <li>
                      <div>
                        <img src={ShutdownIcon} alt="" />
                      </div>
                      <p>Logout</p>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
          <div className="wishes">
            <p>Good Morning !<span> <WbSunnyIcon></WbSunnyIcon></span></p>
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <div className="profile">
            <div className="profile_data">
              <h3>John Doe</h3>
              <p>john@doe.com</p>
            </div>
            <div className="profile_img">
              <img src={ProfileImage} alt="" />
            </div>
          </div>
        </div>
        <div className="graph_table">
          <div className="graphs">
            <div className="lineGraph">
              <LineChart />
            </div>
            <div className="pieChart">
              <div className="pie_chart_setter">
                <PieChart />
              </div>
            </div>
          </div>
          <div className="table_profile">
            <div className="table">
              <Table />
              <div className="pagination">
                <Pagination />
              </div>
            </div>
            <div className="profile">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
