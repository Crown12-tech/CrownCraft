export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  ...props
}) {
  const base = "inline-flex items-center justify-center";

  const variants = {
    primary: "btn-primary",
    ghost: "btn-ghost",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}