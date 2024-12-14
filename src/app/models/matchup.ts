export interface Matchup {
	roster_id: number;
	matchup_id: number;
	points: number;
	custom_points?: number;
	players: string[];
	starters: string[];
	players_points: {[playerid: string]: number};
	starters_points: number[];
}