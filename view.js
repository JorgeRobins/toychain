const Toychain = require('./index')

// DEMO XPRIV
const xpriv = "xprv9s21ZrQH143K4WqdoZtETcEoUnSCmaMQdDpCjoRHC4AX5eRg4BcQuxzQMeAWk9N2VRPDJVeSdtNpPdJnkwEfrYVAjNnmN9aW6ZbERL8JAKU";

const chain = new Toychain({ xpriv: xpriv })
const items = chain.get()
// console.log("TOYCHAIN ITEMS: ", items)

// Example of entire chain
// chain.view();

// Example of subchain by providing root tx hash
chain.view("57d765d6f666531b7459867474f27ddb87a70bf6b821303ab9f10cb6075f6924");