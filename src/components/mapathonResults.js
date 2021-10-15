import React from 'react';

const FeatureList = ({ title, features }) => {
    return (
        <div className="w-auto">
            <h2 className="text-lg py-2">
                {title}:
            </h2>
            {features && features.length > 0 ? (
                <ul>
                {features && features.map((item, n) =>
                    <li key={n}>
                        <p>{item.feature}: {item.count}</p>  
                    </li>
                )}
            </ul>
            ): (
                <p>None</p>
            )}  
        </div>
    )
}

export const MapathonSummaryResults = ({data}) => {
    const { mappedFeatures, totalContributors } = data;
    
    return (
        <div className="flex flex-col place-items-center mt-5 w-3/4 mx-auto">
            {/* {totalContributors && ( */}
                <div className="p-4">
                    <p className="text-lg">
                        Total Unique Contributors: <span className="font-semibold">{totalContributors}</span>
                    </p>
                </div>
            {/* )} */}
            {mappedFeatures && (
                <div className="flex justify-between w-1/2">
                    <FeatureList
                        title={"Features Created"} 
                        features={mappedFeatures.filter((f) => f.action === 'create')} 
                    />
                    <FeatureList
                        title={"Features Modified"}
                        features={mappedFeatures.filter((f) => f.action === 'modify')} 
                    />
            </div>
            )} 
        </div>
    )
}
