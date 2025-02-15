export interface EditableDynamicComponent {
  id: number;
  componentName: keyof JSX.IntrinsicElements;
  innerText?: string;
}
