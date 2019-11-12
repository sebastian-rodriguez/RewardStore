import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

// components
import { HeaderWrapper, Logo, User } from './styled'

//assets
import logo from './../../assets/aerolab-logo.svg'
import coin from './../../assets/icons/coin.svg'
import loadingPoints from './../../assets/spinners/three-dots2.svg'
import loadingUser from './../../assets/spinners/oval.svg'

//actions
import { getUser, addPoints } from '../../store'

class Header extends Component {

    handleAddPoints(points){
        const { getUserInfo, addPoints } = this.props;

        addPoints(points);
        getUserInfo();
    }

    componentDidMount(){
        const { getUserInfo } = this.props;

        try {
            this.setState({ loadingUser: true })
            getUserInfo()
        } catch (error) {
            console.log(error)
        }finally{
            this.setState({ loadingUser: false });
        }
    }

    render(){
        
        const { user, history, updatingUserInfo } = this.props
        
        return(
            <HeaderWrapper>
                <Logo onClick={ () => history.push('/')}>
                    <img src={ logo } alt="logo"></img>
                </Logo>
                <User>
                    { !updatingUserInfo ? <p className="userName" onClick={ () => history.push('/purchases') }>{ user && user.name }</p> : <img src={ loadingUser } alt="loading"/> }
                    <div className="creditsContainer" onClick={ () => this.handleAddPoints(user && user.points) }>
                        { !updatingUserInfo ? <p className="credits">{ user && user.points }</p> : <img src={ loadingPoints } alt="loading"/> }
                        <img src={ coin } alt="icon" width="25px" height="25px"></img>
                    </div>
                </User>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        updatingUserInfo: state.updatingUserInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: () => dispatch(getUser()),
        addPoints: () => dispatch(addPoints())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))