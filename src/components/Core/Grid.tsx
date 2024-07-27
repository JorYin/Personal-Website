

interface GridProps {
  children: React.ReactNode,

}

const Grid = ({ children } : GridProps) => {
  return(
    <div className="mx-5 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
      {children}
    </div>
  );
};

export default Grid;