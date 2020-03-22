function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let count = 0
    for (let i = 0; i < expr.length; i++){
        if (expr[i] == '(') count++
        if (expr[i] == ')') count--
    }
    if (count != 0 ) throw "ExpressionError: Brackets must be paired"
    expr = expr.replace(/\s/g,"")
    if (expr.indexOf('/0') != -1) throw "TypeError: Division by zero."
    let exprNew = new Function(`return ${expr}`)
    return exprNew()
}

module.exports = {
    expressionCalculator
}