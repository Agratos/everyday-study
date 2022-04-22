import { useState, useCallback, useEffect } from 'react';

const useSeparationOfSelect = (list,select) =>  {
    let test = 0;

    useEffect(() => {
        test += 1;
       
    },[select])
    console.log(test);

    return test
}

export default useSeparationOfSelect;