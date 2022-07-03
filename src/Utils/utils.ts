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

export const getAlignTooltip = (ref: any, align: string): string => {
  if (align !== 'auto') return align;

  const node = ref.current;
  if (!node) return 'top';
  if (!node.previousElementSibling) return 'top';

  const { bottom, right, top, width } = node.previousElementSibling.getBoundingClientRect();

  if ((window.innerWidth - right) <= width) return 'left';
  if (top < (window.innerHeight - bottom)) return 'bottom';

  return 'top';
};

export const showTooltip = (ref:any, align: string): void => {
  const node = ref.current;
  if(!node) return;
  if(!node.previousElementSibling) return;

  node.previousElementSibling.classList.remove(styleTooltip.top);
  node.previousElementSibling.classList.remove(styleTooltip.right);
  node.previousElementSibling.classList.remove(styleTooltip.bottom);
  node.previousElementSibling.classList.remove(styleTooltip.left);

  node.previousElementSibling.classList.add(styleTooltip[getAlignTooltip(ref, align)]);
  node.previousElementSibling.classList.add(styleTooltip.visible);
};

export const hiddenTooltip = (ref:any): void => {
  const node = ref.current;
  if(!node) return;
  if(!node.previousElementSibling) return;

  node.previousElementSibling.classList.remove(styleTooltip.visible);
};