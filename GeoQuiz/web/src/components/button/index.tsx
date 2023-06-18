interface Props<T extends React.ElementType> {
  as?: T;
  className?: string;
  children?: React.ReactNode;
}

const Button = <T extends React.ElementType = "button">({
  as,
  className,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const Component = as || "button";

  return (
    <Component
      className={[
        "mx-auto my-6 flex justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
        className,
      ].join(" ")}
      {...props}
    />
  );
};

export default Button;
