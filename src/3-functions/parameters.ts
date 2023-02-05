function optionalParameterFunction(need: any, optional?: any): void {

    if (optional != null) {
        return optional;
    } else {
        return need;
    }

    return;
}

function defaultParameterFunction(defaulted: string = "Default parameter!"): string {

    return defaulted;
}

console.log(optionalParameterFunction("No optional parameter!"));
console.log(optionalParameterFunction("No optional parameter!", "Optional parameter!"));

console.log(defaultParameterFunction("No default parameter!"));
console.log(defaultParameterFunction());