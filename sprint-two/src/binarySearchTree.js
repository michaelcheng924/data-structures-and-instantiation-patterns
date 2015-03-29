var BinarySearchTree = function(value){

  // Prototypal instantiation patter
  var tree = Object.create(BinarySearchTree.prototype);

  // Value is used for comparisons
  tree.value = value;

  // Initialize left and right values to null
  tree.left = null;
  tree.right = null;

  return tree;
};

BinarySearchTree.prototype.insert = function(value){

  // Recursively walk down tree to correct spot
  var walkTree = function(tree) {

    // Compare inserted value with node value
    if (value > tree.value) {

      // If value is greater and no right value exists
      if (!tree.right) {
        // Set the right value to a new subtree
        tree.right = BinarySearchTree(value);
      } else {
        // If right value exists, repeat walkTree with this node
        walkTree(tree.right);
      }
    // Repeat if value is less than node value
    } else {
      if (!tree.left) {
        tree.left = BinarySearchTree(value);
      } else {
        walkTree(tree.left);
      }
    }
  };
  // Initialize walkTree function with top node
  walkTree(this);
};

BinarySearchTree.prototype.contains = function(target){

  // Initialize contains variable to false
  var contains = false;

  // Resursively walk down tree to find target value
  var walkTree = function(tree) {
    // If node value equals target
    if (tree.value === target) {
      // Change contains to true, end function
      contains = true;
    // If right or left nodes exist
    } else if (tree.left || tree.right) {
      // Repeat walkTree for subtree nodes
      walkTree(tree.right || tree.left);
    }
  };
  // Initialize walkTree function with top node
  walkTree(this);

  // Return boolean for whether tree contains target false
  return contains;
};

BinarySearchTree.prototype.depthFirstLog = function(callback){

  // Recursively walk tree to perform callback on each node value
  var walkTree = function(tree) {

    // Perform callback on node value
    callback(tree.value);

    // If subtree nodes exist
    if (tree.left || tree.right) {
      // Repeat walkTree for each node value
      walkTree(tree.left || tree.right);
    }
  };
  // Initialize walkTree function with top node
  walkTree(this);
};