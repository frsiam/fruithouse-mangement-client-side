import React from 'react';

const Loading = () => {
    return (
        <div class="container d-flex align-items-center">
            <strong>Loading...</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    );
};

export default Loading;