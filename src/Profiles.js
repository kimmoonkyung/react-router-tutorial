import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
import RouterHookSample from './RouterHookSample';

function Profiles() {
    const a = '9ood 9ay';

    return (
        <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink
                        to="/profiles/nsn"
                        activeStyle={{ background: 'black', color: 'white' }}
                    >
                        노승내
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profiles/ask"
                        activeStyle={{ background: 'black', color: 'white' }}
                        activeClassName="active"
                    >
                        짐승균
                    </NavLink>
                </li>
            </ul>

            <Route
                path="/profiles"
                exact
                render={() => <div> {a} 사용자를 선택해주세요</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
            <RouterHookSample />
        </div>
    );
}

export default Profiles;
