import  { useEffect } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';

function Alan(){

    useEffect(() => {
        alanBtn({
            key: 'f636c8c32d47c017f462d15992026ffe2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
              if (commandData.command === 'go:back') {
                // Call the client code that will react to the received command
              }
            }
        });
      }, []);
    
    
    return null
}


export default Alan