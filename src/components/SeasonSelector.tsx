import React from "react";
import { teams } from "../data/teams";

type Props = {
    team: string;
    value: string;
    onChange: (season: string) => void;
};

export const SeasonSelector: React.FC<Props> = ({ team, value, onChange }) => {
    const selectedTeam = teams.find(t => t.name.fullName === team);
    if (!selectedTeam) return null;
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            {selectedTeam.seasons.map(season => (
                <option key={season.year} value={season.year}>
                    {season.year}
                </option>
            ))}
        </select>
    );
};
