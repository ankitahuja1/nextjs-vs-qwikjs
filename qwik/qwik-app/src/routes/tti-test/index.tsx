import DeepNodeComponent from "~/components/deepComponent";


const App = () => {
  const handleClick = () => {
    alert("code test");
  };
  const renderDeepNodeComponents = () => {
    const components = [];
    for (let i = 0; i < 1000; i++) {
      components.push(<DeepNodeComponent depth={10} onClick={handleClick} key={i} />);
    }
    return components;
  };

  return <div>{renderDeepNodeComponents()}</div>;
};

export default App;

