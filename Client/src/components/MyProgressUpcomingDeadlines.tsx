import React from 'react';

export default function MyProgressUpcomingDeadlines({ task }: { task: any }) {
    
    const rawTitle = task.title || "";

    const subject = rawTitle.split('-')[0]?.trim();
    const assignment = rawTitle.split('-')[1]?.trim() || "General Task";

    const d = task.deadline;
    const year = d.split('-')[0];
    const month = d.split('-')[1];
    const day = d.split('-')[2].split('T')[0];
    const dayDate = d.split('T')[1];
    const hour = dayDate.split(':')[0];
    const minute = dayDate.split(':')[1];
    const dueDate = `${day}/${month}/${year} - ${hour}:${minute}`;

    return (
        <div className="flex justify-between items-center py-2 border-2 border-border-dark bg-surface-dark rounded-lg p-4 my-4">
            <div>
                <h4 className="font-semibold text-text-dark text-sm">{subject}</h4>
                <p className="text-xs text-text-muted-dark">{assignment}</p>
            </div>

            <span className="text-xs font-medium text-red-400 bg-red-500/10 px-2 py-1 rounded text-right">
                {dueDate}
            </span>
        </div>
    );
}
