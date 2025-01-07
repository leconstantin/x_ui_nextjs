export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
      <div className="block sm:hidden">xsm</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden xxl:hidden">
        sm
      </div>
      <div className="hidden md:block lg:hidden xl:hidden xxl:hidden">md</div>
      <div className="hidden lg:block xl:hidden xxl:hidden">lg</div>
      <div className="hidden xl:block xxl:hidden">xl</div>
      <div className="hidden xxl:block">xxl</div>
    </div>
  );
}
