/**
 * Seasonal color schemes. Each entry needs a matching stylesheet at
 * `src/styles/seasons/<id>.css` (imported from `global.css`).
 *
 * To change the live season, set `ACTIVE_SEASON_ID` below and redeploy.
 * Set it to `null` to remove the seasonal toggle entirely.
 */
export const SEASONS = {
  halloween: {
    label: "Halloween",
    // 16x16 SVG paths. Drawn as an outline when off, filled when on.
    icon: { shape: "M10.5 2.2A6 6 0 1 0 13.8 10 4.8 4.8 0 0 1 10.5 2.2Z", detail: "" },
  },
  autumn: {
    label: "Autumn",
    icon: { shape: "M13.8 2.2C7.3 2.2 2.6 5.6 2.6 11.2c0 .9.1 1.7.4 2.6 6.3 0 10.8-4.7 10.8-11.6Z", detail: "M2.2 14.6 9.4 7.2" },
  },
} as const;

export type SeasonId = keyof typeof SEASONS;

export const ACTIVE_SEASON_ID: SeasonId | null = "autumn";

export const ACTIVE_SEASON = ACTIVE_SEASON_ID
  ? { id: ACTIVE_SEASON_ID, ...SEASONS[ACTIVE_SEASON_ID] }
  : null;
