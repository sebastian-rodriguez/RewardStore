import React, { Component } from 'react'

// childs components  
import HeroWrapper from './styled'

class Hero extends Component{
    render(){
        const { title } = this.props
        
        return(
            <HeroWrapper>
                <h1 className="title">{ title }</h1>  
            </HeroWrapper>
        )
    }
}

export default Hero