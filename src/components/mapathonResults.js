import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import messages from './messages';

const FeatureList = ({ title, features }) => {
    return (
        <div className="w-auto">
            <h2 className="text-2xl py-2">
                {title}:
            </h2>
            {features && features.length > 0 ? (
                <ul>
                {features && features.map((item, n) =>
                    <li key={n}>
                        <p className="text-xl">{item.feature}: {item.count}</p>  
                    </li>
                )}
            </ul>
            ): (
                <p>
                    <FormattedMessage {...messages.mapathonSummaryZeroFeatures}/>
                </p>
            )}  
        </div>
    )
};

export const MapathonSummaryResults = ({data}) => {
    const intl = useIntl();
    const { mappedFeatures, totalContributors } = data;
    
    return (
        <div className="flex flex-col place-items-center mt-5 w-3/4 mx-auto">
            {/* {totalContributors && ( */}
                <div className="p-4">
                    <h3 className="text-2xl">
                        <FormattedMessage {...messages.mapathonSummaryContributors}/> 
                        <span className="font-semibold text-2xl">: {totalContributors}</span>
                    </h3>
                </div>
            {/* )} */}
            {mappedFeatures && (
                <div className="flex justify-between w-1/2">
                    <FeatureList
                        title={intl.formatMessage(messages.mapathonSummaryCreatedFeatures)} 
                        features={mappedFeatures.filter((f) => f.action === 'create')} 
                    />
                    <FeatureList
                        title={intl.formatMessage(messages.mapathonSummaryModifiedFeatures)}
                        features={mappedFeatures.filter((f) => f.action === 'modify')} 
                    />
            </div>
            )} 
        </div>
    )
}
