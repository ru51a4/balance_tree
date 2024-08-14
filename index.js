class node {
    left = null;
    right = null;
    val = null;
}
class balanceTree {
    root = null;
    col = null;
    constructor(arr, col) {
        this.col = col;
        this.root = this.createTree(arr)
    }
    createTree(arr) {
        let deep = (arr) => {
            if (!arr.length) {
                return
            }
            let _node = new node();
            var middle = arr[Math.floor((arr.length - 1) / 2)];
            _node.val = middle;
            _node.left = deep(arr.filter((c, i) => i < Math.floor((arr.length - 1) / 2)));
            _node.right = deep(arr.filter((c, i) => i > Math.floor((arr.length - 1) / 2)));
            return _node;
        }
        return deep(arr.sort((a, b) => a[this.col] - b[this.col]))
    }
    findVal(val) {
        let deep = (_node) => {
            if (_node.val?.[this.col] === val) {
                return _node
            }
            if (_node.val?.[this.col] > val) {
                return deep(_node.right)
            }
            if (_node.val?.[this.col] < val) {
                return deep(_node.left)
            }
        }
        return deep(this.root)
    }
}
let arr = [
    { name: 'Tom', age: 10 },
    { name: 'Tom1', age: 20 },
    { name: 'Tom2', age: 30 },
    { name: 'Tom3', age: 5 },
    { name: 'Tom4', age: 11 },
    { name: 'Tom5', age: 15 },
    { name: 'Tom6', age: 11 },
    { name: 'Tom7', age: 62 },
]

let tree = new balanceTree(arr, 'age')
console.log(tree.findVal(11))