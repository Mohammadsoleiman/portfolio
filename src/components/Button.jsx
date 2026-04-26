const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out";

const variants = {
  primary:
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/25 hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-500/35 active:scale-[0.98]",
  ghost:
    "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white hover:scale-[1.02] hover:bg-gray-200 dark:hover:bg-gray-700",
};

export default function Button({
  as = "button",
  children,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}) {
  const Component = as;

  return (
    <Component
      type={Component === "button" ? type : undefined}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
