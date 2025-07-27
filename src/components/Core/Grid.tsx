interface GridProps {
  children: React.ReactNode,
}

const Grid = ({ children } : GridProps) => {
  return(
    <div className="mx-5 grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
      {children}
    </div>
  );
};

export default Grid;