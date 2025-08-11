// import React from "react";
// import { FiSearch } from "react-icons/fi";
// import { MdVideoCall, MdNotifications, MdMenu } from "react-icons/md";

// const Navbar = () => {
//   return (
//     <>
//       <header className="navbar">
//         {/* Left Section */}
//         <div className="navLeft">
//           <MdMenu size={26} className="menuIcon" />
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
//             alt="YouTube Logo"
//             className="logo"
//           />
//         </div>

//         {/* Center Section (Search Bar) */}
//         <div className="navCenter">
//           <div className="searchContainer">
//             <input type="text" placeholder="Search" className="searchInput" />
//             <button className="searchButton">
//               <FiSearch size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="navRight">
//           <button className="iconBtn">
//             <MdVideoCall size={24} />
//           </button>
//           <button className="iconBtn">
//             <MdNotifications size={24} />
//           </button>
//           <img
//             src="https://www.w3schools.com/howto/img_avatar.png"
//             alt="Profile"
//             className="profile"
//           />
//         </div>
//       </header>

//       {/* Inline CSS */}
//       <style>{`
//         .navbar {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding: 6px 16px;
//           background-color: #fff;
//           color: #000;
//           border-bottom: 1px solid #ddd;
//         }

//         .navLeft {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//         }

//         .menuIcon {
//           cursor: pointer;
//         }

//         .navLeft .logo {
//           height: 24px;
//           cursor: pointer;
//         }

//         .navCenter {
//           display: flex;
//           flex: 1;
//           justify-content: center;
//         }

//         /* Search Container */
//         .searchContainer {
//           display: flex;
//           align-items: center;
//           border: 1px solid #ccc;
//           border-radius: 40px;
//           overflow: hidden;
//           width: 100%;
//           max-width: 600px;
//           background-color: #fff;
//         }

//         .searchInput {
//           flex: 1;
//           padding: 8px 12px;
//           border: none;
//           outline: none;
//           font-size: 14px;
//           background-color: transparent;
//         }

//         .searchContainer:focus-within {
//           border-color: #1c62b9; /* YouTube blue focus */
//         }

//         .searchButton {
//           background-color: #f8f8f8;
//           border: none;
//           padding: 8px 16px;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-left: 1px solid #ccc;
//         }

//         .searchButton:hover {
//           background-color: #f0f0f0;
//         }

//         .navRight {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//         }

//         .iconBtn {
//           background: none;
//           border: none;
//           font-size: 20px;
//           color: black;
//           cursor: pointer;
//         }

//         .iconBtn:hover {
//           color: #555;
//         }

//         .profile {
//           height: 32px;
//           width: 32px;
//           border-radius: 50%;
//           cursor: pointer;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;


import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdVideoCall, MdNotifications, MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <header className="navbar">
        {/* Left Section */}
        <div className="navLeft">
          <MdMenu size={26} className="menuIcon" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className="logo"
          />
        </div>

        {/* Center Section (Search Bar) */}
        <div className="navCenter">
          <div className="searchContainer">
            <input type="text" placeholder="Search" className="searchInput" />
            <button className="searchButton">
              <FiSearch size={20} />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="navRight">
          <button className="iconBtn">
            <MdVideoCall size={24} />
          </button>
          <button className="iconBtn">
            <MdNotifications size={24} />
          </button>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Profile"
            className="profile"
          />
        </div>
      </header>

      <style>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 16px;
          background-color: #fff;
          color: #000;
          border-bottom: 1px solid #ddd;
          flex-wrap: nowrap;
        }

        .navLeft {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        .menuIcon {
          cursor: pointer;
        }

        .navLeft .logo {
          height: 24px;
          cursor: pointer;
        }

        .navCenter {
          display: flex;
          flex: 1;
          justify-content: center;
          min-width: 0; /* for input shrinking */
          padding: 0 8px;
        }

        /* Search Container */
        .searchContainer {
          display: flex;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 40px;
          overflow: hidden;
          width: 100%;
          max-width: 600px;
          background-color: #fff;
        }

        .searchInput {
          flex: 1;
          padding: 8px 12px;
          border: none;
          outline: none;
          font-size: 14px;
          background-color: transparent;
          min-width: 0; /* allow shrinking */
        }

        .searchContainer:focus-within {
          border-color: #1c62b9; /* YouTube blue focus */
        }

        .searchButton {
          background-color: #f8f8f8;
          border: none;
          padding: 8px 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          border-left: 1px solid #ccc;
          flex-shrink: 0;
        }

        .searchButton:hover {
          background-color: #f0f0f0;
        }

        .navRight {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        .iconBtn {
          background: none;
          border: none;
          font-size: 20px;
          color: black;
          cursor: pointer;
          padding: 6px;
        }

        .iconBtn:hover {
          color: #555;
        }

        .profile {
          height: 32px;
          width: 32px;
          border-radius: 50%;
          cursor: pointer;
        }

        /* Responsive for smaller screens */
        @media (max-width: 768px) {
          .navCenter {
            padding: 0 6px;
          }
          .searchContainer {
            max-width: 400px;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 6px 8px;
          }

          .navLeft {
            gap: 12px;
          }

          .navLeft .logo {
            height: 20px;
          }

          .navCenter {
            flex: 1;
            padding: 0 6px;
          }

          .searchContainer {
            max-width: 100%;
          }

          .searchInput {
            font-size: 13px;
          }

          .searchButton {
            padding: 6px 12px;
          }

          .navRight {
            gap: 12px;
          }

          .iconBtn {
            font-size: 18px;
            padding: 4px;
          }

          .profile {
            height: 28px;
            width: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
