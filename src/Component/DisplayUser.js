import React from 'react';

const DisplayUser = props => {
    const {userData} = props;
    const user = props.current;
    let favoriteMovies = userData[user].favoriteMovies.map((movie, i) => {
        return(
                <li key={i}>{movie}</li>
        )
    })
    return (
        <section className='user-section'>
            <section className='user-data'>
                <h1>{userData[user].name.first} {userData[user].name.last}</h1>
                <section className='info-section'>
                    <p><span>From:</span> {userData[user].city}, {userData[user].country}</p>
                    <p><span>Job Title:</span> {userData[user].title ? userData[user].title : 'None'}</p>
                    <p><span>Employer:</span> {userData[user].employer ? userData[user].employer : 'None'}</p>
                </section>
                <section className='movies'>
                    <p><span>Favorite Movies:</span></p>
                    <ol>{favoriteMovies}</ol>
                </section>
            </section>
            <section className='user-number'>
                <h3>{userData[user].id}/{userData.length} </h3>
            </section>
        </section>
    )
}

export default DisplayUser;