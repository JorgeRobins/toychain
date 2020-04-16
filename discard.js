const Toychain = require('./index')

// DEMO XPRIV
const xpriv = "xprv9s21ZrQH143K4WqdoZtETcEoUnSCmaMQdDpCjoRHC4AX5eRg4BcQuxzQMeAWk9N2VRPDJVeSdtNpPdJnkwEfrYVAjNnmN9aW6ZbERL8JAKU";

const chain = new Toychain({ xpriv: xpriv })
const items = chain.get()

// DEMO Discard

// Error message 'Please provide a root tx hash to dicard'
// chain.discard()

// Provide a root tx hash to delete that tx node and all of its children
// chain.discard("57d765d6f666531b7459867474f27ddb87a70bf6b821303ab9f10cb6075f6924")