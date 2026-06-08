{/* Generic in TypeScript  */ }
function identity<Type>(argument: Type): Type {
    return argument;
}

function identity(arg: string): string {
    return arg;
}

function identity(arg: number): number {
    return arg;
}


//  Interface in TypeScriptfunction 
    function printLabel(labelObj: {label:string}){
        console.log(labelObj.label);
    }
    let myObj = {size:10 , label: "size 10 object"};
    printLabel(myObj);  


    interface LabeledValue{
        label: string;
    }

    function printLabel(labelObj: LabeledValue){
        console.log(labelObj.label);
    }

    // Enum in TypeScript
    enum color {
        Red = 1,
        Green =2,
        Blue = 3,
    }

    let c: color = color.Green;

    // React Props in TypeScript
    
