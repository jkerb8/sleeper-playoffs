export interface Roster {
	league_id: string;
	roster_id: number;
	owner_id: string;
	players: string[];
	starters: string[];
	reserve: string[];
}