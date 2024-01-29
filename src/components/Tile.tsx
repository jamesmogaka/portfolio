import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { ReactNode } from 'react';

//
//Define the data needed to render a complete card
export interface Iprops {
    //
    //The title of the card, i.e., Skills
    title: string;
    //
    //The list of items to be shown under a tile
    items: Array<{ name: string; icon: ReactNode }>;
}

export const Tile: React.FC<Iprops> = ({ title, items }) => {
    return (
        <Card className="flex flex-col items-center gap-10 bg-transparent backdrop-filter backdrop-blur-sm">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className=" flex flex-wrap gap-2 ">
                {items.map((item) => (
                    <div className=" flex bg-slate-300 p-1 gap-1 rounded-lg">
                        {item.icon}
                        <span className=" hidden sm:inline">{item.name}</span>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};
