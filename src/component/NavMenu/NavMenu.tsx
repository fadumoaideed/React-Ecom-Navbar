import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./NavMenu.module.css";
function NavMenu() {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  return (
    <div className={styles.menuDrop}>
      <div className={styles.menuContainer}>
        <ul>
          <li className={styles.menu}>
            <svg
              viewBox="0 0 24 24"
              className={styles.burger}
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setDropdownVisibility(!isDropdownVisible);
              }}>
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <path
                  className="path-foreground"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  fill="#0D0D0D"
                  fill-rule="nonzero"></path>
              </g>
            </svg>
            <a href="www.example.com"> Menu</a>
          </li>
          <li className={styles.weeklyEdition}>
            <a href="https://www.economist.com/weeklyedition">Weekly Edition</a>
          </li>
          <li className={styles.search}>
            <a href="https://www.economist.com/search"> Search</a>
          </li>
        </ul>
        <div className={styles.subscribeLogin}>
          <button className={styles.subscribe}>Subscribe</button>
          <a
            className={styles.login}
            href="https://myaccount.economist.com/s/login/?ec=302&inst=3z&startURL=%2Fsetup%2Fsecur%2FRemoteAccessAuthorizationPage.apexp%3Fsource%3DCAAAAYSRijySMDAwMDAwMDAwMDAwMDAwAAAA8HWtQ1aI3ClKnnUAYNZ09FhFqmTlDv-dehkiweDg6OIns2qiYLgsSj0dJGYzyYQQrjo1sno_pz9-WwOm9rSUy6hq1q_E14b1gw8CeqkdAtVSeWo7HdRsoHhCcO1RYcd9l73KWMBpVK_ASnjwTuClLRrJ6HX_Mgd6Lzs1VDNZaMeJ7JMCW91Vhutdq5nJEOyisFkOzFzDec34DecUm2HXHODQt3F6CxYyIYZB7TrowQm0ebQALWlHd9Hu2rJli0HRSLc0GPQosToBilSVxz-D3Ch5dHsVal_RGkmfIC9OgvDPmwFbaXUegW4j6bTyZo6Paeeqc3ei5utnB3_rwsT6rtYiTZFOwZpaJ1WqLMbq1LezKZ1cvO6rS6SnI1LHXFFf4n1b1StQvG3dgUepn5jPBmBKzDPVdpnCTbDmHliEg-c83etuzMEfyeT0MBKgVW0Oe0riXJZ89kVSB_P2GGRF2gCRsnBSk4PdgWMXBeMZIYn_mBJTUnxrZylzt0-XsfFjn_E9YCTSdobI_QG5K5C5obF0qtlwoN-qtD2gJwcSHqhNdMZ4p5n7yQElwVqYRTUfpQOjxCFShziH1xrtYdVUzBvdqQ7C3eAT2M8ln_Uu8OTmENnFToGsv8XRstfhVtvKpOaTwG0C2VB3oN8ZJ0cOiKqDcL1m37TyxE8OW4n6KArXYcm-I7pMwF23NexqUsvUszflvv_3xf684VlqLjJF8u8%253D">
            Login
          </a>
        </div>
      </div>

      {isDropdownVisible && <Dropdown />}
    </div>
  );
}

export default NavMenu;
