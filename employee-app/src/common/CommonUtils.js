/**
 *
 * @param {*} data  Any message passed to log.
 * @param {*} level whether the msg should be peristed in prod or not.
 * passing param SSR will make sure all the logs should be printed while server side rendering.
 * @returns
 */
 const ConsoleLogger = (data, mode = 'SSR') => {
    // FOR SSR based rendering, we can preserve the logs.
    if (process.env.NODE_ENV === 'production' && mode !== 'SSR') return
    console.log(data)
  }
  
  // This can be helpful if we want to publish the error metrix to server.
  
  export default ConsoleLogger
  