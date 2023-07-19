import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
    <Link
      to="https://github.com/Sarthak-Seth/yt-clone"
      style={{ display: "flex", alignItems: "left" }}
    >
      <img
        src={
          "https://www.pngfind.com/pngs/m/150-1507275_how-to-write-an-open-source-javascript-library.png"
        }
        alt="logo"
        height={20}
      />
    </Link>
  </Stack>
);

export default Navbar;
