import React from 'react';

export function Error({error}) {
    return (
        <div className="bg-red-light mt-5 mx-auto w-1/4 text-base p-4">
            <h5 className="font-semibold mb-2">It was not possible to run this query.</h5>
            {error === "Missing fields" && (
                <>
                    <p className="">Please fill in <span className="font-semibold">one</span> of the following to continue: </p>
                    <li>Tasking Manager Project IDs</li>
                    <li>Mapathon Hashtags</li>
                </>
            )}
            {error === 'Invalid IDs' && (
                <p>Please input numerical values for the TM Project IDs.</p>
            )}
            {error === 'Invalid Time' && (
                <p>Time difference should be less than or equal to 24 hours.</p>
            )}
            {error === 'Server Error' && (
                <p>There was a server error while executing this query. Please try again later.</p>
            )}
        </div>
    )
}
