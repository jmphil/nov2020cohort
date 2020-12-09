// class Button{

//     constructor(data1, data2, data3){
//         this.data1 = data1;
//         this.data2 = data2;
//         this.data3 = data3;
//     }
//     sum(){
//         return this.data1 + this.data2 + this.data3;

    
//     method2 () => {
        
//     }
// }


// let button = new Button()

// console.log(button.sum);

class Button{
    constructor(node, color, text) {

        this.state = {
            node: node,
            color: color,
            text: text
            count: 0
        }
        
    }

    createButton(){

        let button  = document.createElement('button');
        button.textContent = "Hello" + this.state.text;
        button.style.backgroundColor = this.state.color;

        this.state.node.appendChild(button);

    }
    render(){
        this.createButton()
    }
}