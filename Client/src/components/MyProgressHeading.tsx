import React, { type ReactNode } from 'react';

export interface MyProgressHeadingProps {
    title: string;
    subtitle: string;
    description: string;
    // 1. Add the icon prop (optional, so it doesn't break existing usage)
    icon?: ReactNode;
}

export default function MyProgressHeading({ title, subtitle, description, icon }: MyProgressHeadingProps) {

    return (
        <div className="bg-surface-dark rounded-xl p-6 border-2 border-border-dark">
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-text-muted-dark text-base font-medium">{title}</h2>

                {icon && (
                    <div>
                        {icon}
                    </div>
                )}
            </div>

            <h3 className="text-text-dark text-xl font-semibold mb-1">{subtitle}</h3>
            {subtitle.includes('%') && (
                <div className="w-full bg-background-dark rounded-full h-2 mt-2 mb-2">

                    <div
                        className="bg-accent-dark h-2 rounded-full transition-all duration-500"
                        style={{ width: subtitle }}
                    ></div>

                </div>
            )}
            <p className="text-text-muted-dark text-sm">{description}</p>
        </div>
    );
}