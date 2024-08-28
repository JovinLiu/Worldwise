import styles from "./Disclaimer.module.css";

function Disclaimer() {
  return (
    <p className={styles.disclaimer}>
      {`This project is`}{" "}
      <strong className={styles.strong}>
        coded and re-designed by Jovin Liu
      </strong>{" "}
      {`for portfolio and
      presenting. The project is originated from Jonas Schmedtmann's Ultimate
      React Course`}
    </p>
  );
}

export default Disclaimer;
