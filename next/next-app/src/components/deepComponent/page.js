const generateNestedNodes = (depth, onClick) => {
  if (depth === 0) {
    return (
      <span style={{ padding: '1px', border: '1px dotted gray', cursor: 'pointer' }}>
        D: 1
      </span>
    );
  }

  return (
    <span style={{ padding: '1px', border: '1px dotted gray', cursor: 'pointer' }}>
      D: {41 - depth}
      {generateNestedNodes(depth - 1, onClick)}
    </span>
  );
};

const DeepNodeComponent = ({ onClick }) => {
  return <div>{generateNestedNodes(10, onClick)}</div>;
};

export default DeepNodeComponent;
