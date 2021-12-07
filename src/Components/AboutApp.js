import { Box } from '@mui/system'
import React from 'react'
import Robert from '../assets/Robert.jpg'
const AboutApp = () => {
    return (
        <Box>
            <img src={Robert} alt="Robert" className="authorImage"/>
        </Box>
    )
}

export default AboutApp
