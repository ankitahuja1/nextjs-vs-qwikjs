import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {


  return (
    <footer>
      <div class="container">
        <a href="https://ahujaankit.com/" target="_blank" class={styles.anchor}>
          <span style={{ color: "black" }}>
            Developed for Resumability vs Hydration Performance Testing
          </span>
        </a>
      </div>
    </footer>
  );
});
