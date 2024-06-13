type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button" | undefined;
};
export function MyButton(props: Props) {
  return (
    <button
      className={`bg-ziel2 hover:bg-ziel2/80 text-white rounded-xl p-4 hover:px-10 duration-300 ease-out hover:shadow-lg ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
