function countTotalSalary(salaries) {
    let totalSalary = 0;
    const totalValues = Object.values(salaries);
    for (const value of totalValues) {
      totalSalary += value;
    }
  }
  console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));