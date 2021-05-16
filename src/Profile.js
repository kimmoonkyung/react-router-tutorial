import React from 'react';
import WithRouterSample from './WithRouterSample';

const profileData = {
    nsn: {
        name: '노승내',
        description: '짐승균의 애인',
    },
    ask: {
        name: '짐승균',
        description: '노충내의 애인',
    },
};

function Profile({ match }) {
    const { username } = match.params;
    // <Route path="/profiles/:username"
    const profile = profileData[username];

    if (!profile) {
        return <div>존재하지 않는 사용자 입니다.</div>;
    }

    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample />
        </div>
    );
}

export default Profile;
