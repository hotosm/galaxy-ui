import React from 'react';

const FeatureList = ({ title, features }) => {
    return (
        <div className="w-auto">
            <h2 className="text-lg py-2">
                {title}:
            </h2>
            <ul>
                {features && features.map((item, n) =>
                    <li key={n}>
                        <p>{item.key}: {item.count}</p>  
                    </li>
                )}
            </ul>
        </div>
    )
}

export const MapathonSummaryResults = ({data}) => {
    const { mappedFeatures, contributorsCount } = data;
    
    return (
        <div className="flex flex-col place-items-center mt-10 w-3/4 mx-auto">
            {contributorsCount && (
                <div className="p-4">
                    <p className="text-lg">
                        Total Unique Contributors: <span className="font-medium">{contributorsCount}</span>
                    </p>
                </div>
            )}
            {mappedFeatures && (
                <div className="flex justify-between w-1/2">
                    <FeatureList
                        title={"Features Added"} 
                        features={mappedFeatures.filter((f) => f.action === 'added')} 
                    />
                    <FeatureList
                        title={"Features Modified"}
                        features={mappedFeatures.filter((f) => f.action === 'modified')} 
                    />
            </div>
            )} 
        </div>
    )
}
