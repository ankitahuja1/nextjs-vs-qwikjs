import { $ } from "@builder.io/qwik";

const ButtonGrid = () => {
//   const handleClick = (row: any, col: any) => {
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
              key={colIndex}
              onClick$={$(() => alert(rowIndex + " " + colIndex ))}
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
