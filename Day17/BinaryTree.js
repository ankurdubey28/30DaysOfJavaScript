class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new Node(val);
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.val < root.val) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    inorder(root) {
        if (root === null) return;
        this.inorder(root.left);
        console.log(root.val);
        this.inorder(root.right);
    }

    preorder(root) {
        if (root === null) return;
        console.log(root.val);
        this.preorder(root.left);
        this.preorder(root.right);
    }

    postorder(root) {
        if (root === null) return;
        this.postorder(root.left);
        this.postorder(root.right);
        console.log(root.val);
    }

    search(val, root) {
        if (root === null) return false;
        if (val < root.val) {
            return this.search(val, root.left);
        } else if (val > root.val) {
            return this.search(val, root.right);
        } else {
            console.log("Found:", root.val);
            return true;
        }
    }
}

const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);

console.log("Inorder Traversal:");
tree.inorder(tree.root);

console.log("Preorder Traversal:");
tree.preorder(tree.root);

console.log("Postorder Traversal:");
tree.postorder(tree.root);

console.log("Searching for 3:");
tree.search(3, tree.root);
