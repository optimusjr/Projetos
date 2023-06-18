interface Props<T extends React.ElementType> {
  as?: T;
  className?: string;
  color: string;
  children?: React.ReactNode;
}

const Button = <T extends React.ElementType = "button">({
  as,
  color,
  className,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "button";

  const baseClasses =
    "mx-auto my-6 flex justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const colorClasses = `bg-${color}-600 hover:bg-${color}-500 focus-visible:outline-${color}-600`;

  return <Component className={[colorClasses, baseClasses, className].join(" ")} {...props} />;
};

export default Button;
