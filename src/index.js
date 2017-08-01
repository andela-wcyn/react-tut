import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Christine',
    lastName: 'Nagadya',
    avatarUrl: 'https://cdn-images-1.medium.com/fit/c/200/200/1*8mD3SXvJfI74lDbWUBfAEQ.png'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>

)

const div_el = <div tabIndex="0"></div>;

const image_el = <img src={user.avatarUrl}></img>
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
    getGreeting(user),
    document.getElementById('root')
)