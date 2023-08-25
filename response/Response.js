const successmessage = (result) => {
  return {
    status: 'done',
    result,
  }
}

const errormessage = (error) => {
  return {
    status: 'error',
    error,
  }
}
const successmessageValidate = (result , totalPages) => {
  return {
    status: 'done',
    result,
    totalPages
  }
}


module.exports = { successmessage, errormessage ,successmessageValidate}