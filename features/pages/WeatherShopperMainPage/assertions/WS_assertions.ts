import assert from 'soft-assert';



export async function verifyTemperatureValue(condition: boolean, actual:string, message:string,[]) {
    await assert.softAssert(condition,actual, message,[]);
    await assert.softAssertAll(); 
}


