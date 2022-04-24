import styles from '../components/Fields/Fields.module.css';

export const moveLabel = (ref:any, value:string, disabled:boolean): void => {
  const node = ref.current;
  if(!node) return;
    if(!node.previousElementSibling) return;
    if (disabled) node.previousElementSibling.classList.add(styles.top);
    if (value) node.previousElementSibling.classList.add(styles.top);

    node.onfocus = () => {
      if(!node) return;
      if(!node.previousElementSibling) return;
      node.previousElementSibling.classList.add(styles.top);
      node.previousElementSibling.classList.add(styles.focus);
      node.classList.add(styles.focus);
    };

    node.onblur = () => {
      if(!node) return;
      if(!node.previousElementSibling) return;
      if (node.value.trim().length === 0) {
        node.previousElementSibling.classList.remove(styles.top);
      }
      node.previousElementSibling.classList.remove(styles.focus);
      node.classList.remove(styles.focus);
    };
}