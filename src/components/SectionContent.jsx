const colSpanClasses = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
};

const SectionContent = ({ colSpan = 6, children }) => {
  const colSpanClass = colSpanClasses[colSpan] || "col-span-6";

  return (
    <div className={`${colSpanClass} bg-gray-800/60 min-h-[100px] rounded-lg dark:shadow-none outline outline-[1px] dark:-outline-offset-1 dark:outline-white/10 text-white p-5`}>
      {children}
    </div>
  );
};


export default SectionContent;
