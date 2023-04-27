import NewMusic from './../../components/NewMusic/index';
import './styles.scss';
import React from 'react';

Home.propTypes = {};

function Home(props) {
    return (
        <div className="home">
            <NewMusic />
        </div>
    );
}

export default Home;
