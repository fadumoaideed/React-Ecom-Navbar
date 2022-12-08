import React from "react";
import styles from "./Dropdown.module.css";

const featured = [
  "War in Ukraine",
  "Recession watch",
  "The World Ahead 2023",
  "US politics",
  "Climate change",
  "Coronavirus",
  "1843 magazine",
  "The world in brief",
];

const sections = [
  "The world this week",
  "Leaders",
  "Letters",
  "Briefing",
  "United States",
  "The Americas",
  "Asia",
  "China",
  "Middle East & Africa",
  "Europe",
  "Britain",
  "International",
  "Business",
  "Finance & economics",
  "Science & technology",
  "Culture",
  "Graphic detail",
  "Obituary",
  "Special reports",
  "Technology Quarterly",
  "Essay",
  "By Invitation",
  "Schools brief",
  "The Economist explains",
  "The Economist reads",
];

const more = [
  "Newsletters",
  "Podcasts",
  "Films",
  "Subscriber events",
  "iOS app",
  "Android app",
  "Online courses",
];

function Dropdown() {
  return (
    <div className={styles.dropdown}>
      <div className={styles.featured}>
        <h4>Featured</h4>

        {featured.map((item) => (
          <div className={styles.items}>{item}</div>
        ))}
      </div>
      <div className={styles.sections}>
        <h4>Sections</h4>

        {sections.map((item) => (
          <div className={styles.items}>{item}</div>
        ))}
      </div>
      <div className={styles.more}>
        <h4>More</h4>

        {more.map((item) => (
          <div className={styles.items}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
