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

export const MapathonSummaryResults = (data) => {
    const { mappedFeatures, contributorsCount } = data;

    let addedFeatures = mappedFeatures ? mappedFeatures.filter((f) => f.action === 'added'): [];
    let modifiedFeatures = mappedFeatures ? mappedFeatures.filter((f) => f.action === 'modified') : [];
    
    return (
        <div className="flex flex-col place-items-center mt-10 w-3/4 mx-auto">
            <div className="p-4">
                <p className="text-lg">
                    Total Unique Contributors: <span className="font-medium">{contributorsCount}</span>
                </p>
            </div>
            <div className="flex justify-between w-1/2">
                <FeatureList title={"Features Added"} features={addedFeatures} />
                <FeatureList title={"Features Modified"} features={modifiedFeatures} />
            </div>
        </div>
    )
}
