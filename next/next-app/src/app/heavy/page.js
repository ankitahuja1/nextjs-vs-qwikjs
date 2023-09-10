'use client'
const ButtonGrid = () => {
//   const handleClick = (row, col) => {
//     alert(`Button clicked at row ${row}, col ${col}`);
//   };

  const rows = 5000;
  const cols = 10;
  return (
    <div>
      {Array.from({ length: rows }, (_, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {Array.from({ length: cols }, (_, colIndex) => (
            <button
            style={{padding:"10px", margin:"10px"}}
              key={colIndex}
              onClick={() =>alert(rowIndex + " " + colIndex) }
            >
              Click
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonGrid;
