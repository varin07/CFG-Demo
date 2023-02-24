import React from 'react'
import {Button} from './Button'
import './FindPoliProvider.css'


function FindPoliProvider() {
    return (
        <div className='findpoli-container'>            
            <h1>FINDING POLICIES</h1>
            <p>Here you can use our various databases to find anti-bullying and harassment policies for various LEAs</p>
            <p style={{marginTop: '40px', marginBottom: '16px'}}> Find policies in the GLSEN's Internal Database</p>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' to='/internal-resources'>
                    Internal Database
                </Button>
            <p style={{marginTop: '40px', marginBottom: '16px'}}> Find policies in the our external Database</p>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' to='/external-rescourses'>
                    External Database
                </Button>
        </div>

    )
}

export default FindPoliProvider
