import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background: "#E8E098",
    borderRadius: 4,
    border: 0,
    color: "#333",
    height: 48,
    padding: "0 20px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    "&:hover": {
      color: "white",
      backgroundColor: "#6FA2A7",
      boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

function BoutonEnregistrer({ onClick }) {
  return (
    <StyledButton
      variant="contained"
      color="primary"
      size="large"
      startIcon={<SaveIcon />}
      onClick={onClick}
    >
      Enregistrer
    </StyledButton>
  );
}

export default BoutonEnregistrer;
