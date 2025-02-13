const fibonacci = (num) => {
    function recurse(n){
      if(n==0){
        return 0;
      }
      if(n==1){
        return 1;
      }
      return recurse(n-1) + recurse(n-2);
    }
    return recurse(num);
}

module.exports = {fibonacci}
