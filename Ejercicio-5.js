function SimpleAdding(num) { 
      
      if (num == 0 || num == 1) {
        return 1;
      }
      else {
         return num + SimpleAdding(num - 1); 
      }      
    }
       
// keep this function call here 
SimpleAdding(readline());
