import styles from "./Disclaimer.module.css";

function Disclaimer() {
  return (
    <p className={styles.disclaimer}>
      {`This project is coded by Jovin Liu for learning and presenting purposes.`}
    </p>
  );
}

export default Disclaimer;
