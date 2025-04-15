
import FlexBetween from "@/components/FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";

type Props = {};

function Navbar({}: Props) {
  const [selected, setSelected] = useState("dashboard");
  const { palette } = useTheme();
  return (
    <FlexBetween mb={".25rem"} p=".5rem 0" color={palette.grey[300]}>
      <FlexBetween gap={".75rem"}>
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize={"16px"}>
          Financeer
        </Typography>
      </FlexBetween>
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
}

export default Navbar;
