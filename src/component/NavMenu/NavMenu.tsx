/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import styles from './NavMenu.module.css';

function NavMenu() {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    if (name === 'Dana') {
      document.body.style.backgroundColor = 'purple';
    }
  }, [name]);

  function Login() {
    const response = prompt('Please enter your name: ') || '';
    setName(response);
  }

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
              }}
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <path
                  className="path-foreground"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                  fill="#0D0D0D"
                  fill-rule="nonzero"
                ></path>
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
            href="#"
            onClick={() => {
              Login();
            }}
            className={styles.login}
          >
            {name ? name : 'Login'}
          </a>
        </div>
      </div>

      {isDropdownVisible && <Dropdown />}
    </div>
  );
}

export default NavMenu;
