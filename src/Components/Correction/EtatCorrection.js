import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function EtatCorrection({ etat, onChange }) {
  let style = {
    height: "30px",

    fontSize: "16px",
    justifyContent: "Center",
  };

  if (etat === "EN ATTENTE") {
    style = { ...style, color: "#BEBEBE" };
  }

  if (etat === "CORRIGE") {
    style = { ...style, color: "#08AA08" };
  }
  if (etat === "EN DEVELOPPEMENT") {
    style = { ...style, color: "#2798C9" };
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    const newEtat = event.currentTarget.innerText;
    if (newEtat) {
      onChange(newEtat);
    }
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div style={style}>{etat}</div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>EN ATTENTE</MenuItem>
        <MenuItem onClick={handleClose}>EN DEVELOPPEMENT</MenuItem>
        <MenuItem onClick={handleClose}>CORRIGE</MenuItem>
      </Menu>
    </div>
  );
}
