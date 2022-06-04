import styles from '../components/Fields/Fields.module.css';
import styleTooltip from '../components/Tooltip/Tooltip.module.css';

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

export const showTooltip = (ref:any, align: string): void => {
  const node = ref.current;
  if(!node) return;
  const { bottom, right, top, width } = node.firstElementChild.getBoundingClientRect();

  node.firstElementChild.classList.remove(styleTooltip.top);
  node.firstElementChild.classList.remove(styleTooltip.bottom);
  node.firstElementChild.classList.remove(styleTooltip.left);
  node.firstElementChild.classList.remove(styleTooltip.right);

  if (align !== 'auto') return node.firstElementChild.classList.add(styleTooltip[align]);
  if ((window.innerWidth - right) <= width) return node.firstElementChild.classList.add(styleTooltip.left);
  if (top < (window.innerHeight - bottom)) return node.firstElementChild.classList.add(styleTooltip.bottom);

  return node.firstElementChild.classList.add(styleTooltip.top);
};