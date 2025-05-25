import React from "react";
import { teams } from "../data/teams";

type Props = {
    value: string;
    onChange: (team: string) => void;
};

export const TeamSelector: React.FC<Props> = ({ value, onChange }) => (
    <select value={value} onChange={e => onChange(e.target.value)}>
        {teams.map(team => (
            <option key={team.name} value={team.name}>
                {team.name}
            </option>
        ))}
    </select>
);
