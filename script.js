const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper(people) {
      for (let person of people) {
          if (person.profession === 'developer') {
              console.log(person);
          }
      }
  }
  
  // 2. Add Data
  function addData(people) {
      const name = prompt('Enter a name:');
      const age = parseInt(prompt('Enter age:'));
      const profession = prompt('Enter profession:');
      const newData = { name, age, profession };
      people.push(newData);
  }
  
  // 3. Remove Admins
  function removeAdmin(people) {
      const admins = people.filter(person => person.profession !== 'admin');
      people.length = 0;
      people.push(...admins);
  }
  
  // 4. Concatenate Array
  function concatenateArray(arr1, arr2) {
      const result = [...arr1, ...arr2];
      console.log(result);
  }
  
  // 5. Average Age
  function averageAge(people) {
      const totalAge = people.reduce((sum, person) => sum + person.age, 0);
      const avgAge = totalAge / people.length;
      console.log(`Average Age: ${avgAge}`);
  }
  
  // 6. Age Check
  function checkAgeAbove25(people) {
      const isAbove25 = people.some(person => person.age > 25);
      console.log(`At least one person is older than 25: ${isAbove25}`);
  }
  
  // 7. Unique Professions
  function uniqueProfessions(people) {
      const professions = new Set();
      for (let person of people) {
          professions.add(person.profession);
      }
      console.log(Array.from(professions));
  }
  
  // 8. Sort by Age
  function sortByAge(people) {
      people.sort((a, b) => a.age - b.age);
  }
  
  // 9. Update Profession
  function updateJohnsProfession(people) {
      const john = people.find(person => person.name.toLowerCase() === 'john');
      if (john) {
          john.profession = 'manager';
      }
  }
  
  // 10. Profession Count
  function getTotalProfessions(people) {
      const developerCount = people.filter(person => person.profession === 'developer').length;
      const adminCount = people.filter(person => person.profession === 'admin').length;
      console.log(`Total Developers: ${developerCount}`);
      console.log(`Total Admins: ${adminCount}`);
  }