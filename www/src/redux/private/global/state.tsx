import { PaletteMode } from "@mui/material";

export default interface globalState {
  // mode: ThemePalette
  mode: PaletteMode;
  error: string | null;
  loading: boolean;
  developmentUrl: String;
  productionUrl: String;
}
