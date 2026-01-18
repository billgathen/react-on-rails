import { createRoot } from 'react-dom/client';

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <div>My React nav goes here</div>;
}

const domNode = document.getElementById('navigation');
if (domNode) {
  const root = createRoot(domNode);
  root.render(<NavigationBar />);
} else {
  console.error("Unable to find element #navigation");
}

