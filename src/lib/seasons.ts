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
    icon: { off: "🌘", on: "🌕" },
  },
  autumn: {
    label: "Autumn",
    icon: { off: "🍂", on: "🍁" },
  },
} as const;

export type SeasonId = keyof typeof SEASONS;

export const ACTIVE_SEASON_ID: SeasonId | null = "autumn";

export const ACTIVE_SEASON = ACTIVE_SEASON_ID
  ? { id: ACTIVE_SEASON_ID, ...SEASONS[ACTIVE_SEASON_ID] }
  : null;
