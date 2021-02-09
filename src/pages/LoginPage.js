/* eslint-disable */
import React from 'react';

const LoginPage= () => {
    const nav = {
        background: 'white',
        width: '100%',
        height: '54px',
        border: 'solid 1px #dbdbdb',
    };

    const navImg = {
        float: 'left',
        paddingTop: '10px',
        paddingLeft: '18%',
        height:'40px'
    }

    const inputBox = {
        float: 'left',
        paddingTop: '15px',
        paddingLeft: '16%',
        width: '215px',
    }

    const input = {
        width: '100%',
        height: '25px',
        backgroundColor: '#fafafa',
        border: 'solid 1px #dbdbdb',
        borderRadius: '4px',
    }

    const navIconBox = {
        width: '300px',
        float: 'left',
        paddingTop: '10px',
        paddingLeft: '10%'
    }

    const navIconImg1 = {
        float: 'left',
        width: '38px',
        marginLeft: '22px'
    }

    const navIconImg2 = {
        float: 'left',
        width: '38px',
        marginLeft: '22px'
    }

    const navIconImg3 = {
        float: 'left',
        width: '38px',
        marginLeft: '22px'
    }

    const navIconImg4 = {
        float: 'left',
        width: '38px',
        marginLeft: '22px'
    }

    return(
        <div style={nav}>
            <img style={navImg} src={process.env.PUBLIC_URL + '/img/image2.jpg'}></img>
            <div style={inputBox}>
                <input style={input} placeholder="검색"></input>
            </div>
            <div style={navIconBox}>
                <img style={navIconImg1} src={process.env.PUBLIC_URL + '/img/home.jpg'}></img>
                <img style={navIconImg2} src={process.env.PUBLIC_URL + '/img/compass.jpg'}></img>
                <img style={navIconImg3} src={process.env.PUBLIC_URL + '/img/heart.jpg'}></img>
                <img style={navIconImg4} src={process.env.PUBLIC_URL + '/img/profile.jpg'}></img>
            </div>
        </div>
    )
}

export default LoginPage;