import DeepNodeComponent from "@/components/deepComponent/page";

const App = () => {
  const handleClick = () => {
    alert("code test");
  };
  const renderDeepNodeComponents = () => {
    const components = [];
    for (let i = 0; i < 1000; i++) {
      components.push(<DeepNodeComponent onClick={handleClick} key={i} />);
    }
    return components;
  };

  return <div>{renderDeepNodeComponents()}</div>;
};

export default App;
