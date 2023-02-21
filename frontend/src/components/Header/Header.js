import React from "react";
import "./Header.scss";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  return (
    <div className="header">
      <div>
        <IconButton>
          <MenuIcon />
        </IconButton>
        {/* Header */}
      </div>
    </div>
  );
}

export default Header;
