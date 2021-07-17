const  {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER, PHASE_PRODUCTION_BUILD} = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

    // console.log('phase', phase)
    // console.log('default', defaultConfig)

    if ( phase === PHASE_PRODUCTION_SERVER || phase === PHASE_PRODUCTION_BUILD )
    {
        return {
            ...defaultConfig,
            poweredByHeader: false,
            env: {
                myName: 'hasan'
            }

        }
    }
    else if ( phase === PHASE_DEVELOPMENT_SERVER)
    {
        return {
            env: {
                myName: 'amir'
            }
        }
    }
}