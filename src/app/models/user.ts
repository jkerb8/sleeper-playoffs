import { Matchup } from "./matchup";
import { Roster } from "./roster";

export interface User {
	user_id: string;
	avatar: string;
	display_name: string;
	is_bot: boolean;
	is_owner: boolean;
	league_id: string;
	metadata?: {
		allow_pn: string;
		allow_sms: string;
		mention_pn: string;
		team_name: string;
	},
	settings?: any;

	//not from sleeper
	roster?: Roster;
	matchupData?: {week: number, matchup: Matchup}[];
	totalPoints?: number;
}