import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false)
  function handleToggleCollapse() {
    setCollapsed((t) => !t)
  }
    return (
      <div className="app">
        <div className="app-title">
          {title} <button onClick={handleToggleCollapse}>Toggle</button>
        </div>
        {!collapsed && <div className="app-content">{children}</div>}
        
        
      </div>
    );
  }