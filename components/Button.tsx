export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="transition-[box-shadow, colors] text-preset-4 md:text-preset-4-lg flex size-5 items-center justify-center rounded-full bg-white uppercase text-blue-900 ring-white/10 ring-offset-0 duration-500 hover:text-blue-900/50 hover:shadow-button hover:ring-button md:size-7"
    >
      {children}
    </button>
  );
}
