"use client";
import { useState } from "react";

const SidebarComponent = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // 컴포넌트 반환
  return {
    showSidebar,
    handleToggleSidebar,
  };
};

export default SidebarComponent;
