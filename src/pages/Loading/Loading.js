import React from 'react';

const Loading = () => {
    return (
        <div class="container d-flex align-items-center justify-center min-h-screen bg-red-400">
            <strong>Loading...</strong>
            <div class="spinner-border" role="status" aria-hidden="true"></div>
        </div>
    );
};

export default Loading;