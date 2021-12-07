const unitValue = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ]
  
  /* Convert cidArray to object
   * Example for const unitValue 
  { 
    'ONE HUNDRED': 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01 
  }
   */ 
  const cidToObj = cidArray => {
    let obj = {}
    let copiedArray = [...cidArray] // avoid the original array changed
    copiedArray.reverse().forEach( item => {
      obj[item[0]] = item[1]
    })
    return obj
  }
  
  /* 
   * Main function
   */
  function checkCashRegister(price, cash, cid) {
    // Convert current cid and unitValue to object
    // Make them easy to access
    const cidObj = cidToObj(cid);
    const unitValueObj = cidToObj(unitValue)
  
    // Prepare values before running the loop 
    let res = { status: '', change: []}  
    let updatedCidObj = {}
    let updatedChange = cash - price
  
    // Lopp through all units
    for (let unit of Object.keys(cidObj) ) {
      let tempResAmount = Math.floor(updatedChange / unitValueObj[unit])
      let currentAmount = Math.round(cidObj[unit] / unitValueObj[unit])
  
      let resAmount = currentAmount <= tempResAmount ? currentAmount : tempResAmount;
      let resAmountValue = resAmount * unitValueObj[unit]
      
      updatedCidObj[unit] = parseFloat((cidObj[unit] - resAmountValue).toFixed(2))
      
      // Only push to res.change array if there is really an amount (>0)
      if ( resAmount > 0 ) {
        res.change.push([unit,resAmountValue])
        updatedChange = parseFloat((updatedChange - resAmountValue).toFixed(2))
      }
  
    }
  
    //Analyze and make the final decision for status and change
    if (updatedChange > 0) {
      res = {status: "INSUFFICIENT_FUNDS", change: []}
    }
    else if (Object.keys(updatedCidObj).every(unit => 0 === updatedCidObj[unit])) {
      // All units have 0 amount in updatedCidObj
      // That means no more money in drawer
      res = { status: 'CLOSED', change: cid}
    } 
    else {
      res.status = 'OPEN'
    }
  
    // Remove this comment in case want to check the result 
    // console.log(res)
  
    return res;
  }
  
  console.log(checkCashRegister(19.5, 500, [["PENNY", 400], ["NICKEL", ], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 800]]) );
  