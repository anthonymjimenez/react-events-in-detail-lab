// Code DelayedButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component { 
    render() {
        return (
            <button onClick={(event) => {
              event.persist()
           
             setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
            }} />
        )
    }


}
