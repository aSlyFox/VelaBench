function getOperationsPerSecond() {
      const operations = {
        add: 0,
        subtract: 0,
        multiply: 0,
        divide: 0
      };
    
      const start = new Date().getTime();
    
      while (new Date().getTime() - start < 1000) {
        operations.add++;
        operations.subtract++;
        operations.multiply++;
        operations.divide++;
      }
    
      return operations;
    }
    
    function calculateAverage(operations) {
      const totalOperations = Object.values(operations).reduce((sum, count) => sum + count, 0);
      return totalOperations / Object.keys(operations).length;
    }
    
    const operationsPerSecond = getOperationsPerSecond();
    const averageOperationsPerSecond = calculateAverage(operationsPerSecond);
    
    console.log('每秒操作的平均次数:', averageOperationsPerSecond);
    