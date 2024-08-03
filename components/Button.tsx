export default function Button({ children }: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <button className="transition-[box-shadow, colors] ring-offset-0	 duration-500 hover:shadow-button hover:ring-button ring-white/10 hover:text-blue-900/50 text-preset-4 uppercase text-blue-900 size-[144px] md:size-[272px] rounded-full bg-white flex justify-center items-center">{children}</button>
   )
}