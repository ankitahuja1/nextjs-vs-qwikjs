import { $ } from "@builder.io/qwik";

interface DeepNodeProps {
  depth: number;
  onClick: () => void;
}

export default function DeepNodeComponent({ depth }: DeepNodeProps) {
  const generateNestedNodes = (currentDepth: number) => {
    if (currentDepth === 0) {
      return (
        <span
        onClick$={$(()=> alert('something') )}
          style={{ padding: '1px', border: '1px dotted gray', cursor: 'pointer' }}
        >
          D: 1
        </span>
      );
    }

    return (
      <span
      onClick$={$(()=> alert('something') )}
        style={{ padding: '1px', border: '1px dotted gray', cursor: 'pointer' }}
      >
        D: {41 - currentDepth}
        {generateNestedNodes(currentDepth - 1)}
      </span>
    );
  };


  return <div>{generateNestedNodes(depth)}</div>;
}
