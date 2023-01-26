
//Two Sum Problem
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) { // function to find the two numbers that add up to the target
    for (let i = 0; i < nums.length; i++) {     // first loop to iterate through the array while -
        for ( let j = i + 1; j < nums.length; j++) {  // second loop to iterate through the array so
            if (nums[i] + nums[j] === target) { // if the sum of the two numbers is equal to the target
                return [i, j];  // return the index of the two numbers
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));


//Challenge Project: Mysterious Organism

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (num, arr) => {
    return {
    specimenNum: num, // the number of the specimen
    dna: arr, // the specimen's DNA
    mutate() { // method to mutate the specimen's DNA
      let i = Math.floor(Math.random() * this.dna.length); // random index of the dna array
      let oldBase = this.dna[i]; // the base at the random index
      let altBases = ['A', 'T', 'C', 'G']; // array of all possible bases
      altBases.splice(altBases.indexOf(oldBase), 1); // remove the old base from the array
      let mutatedBase = altBases[Math.floor(Math.random() * 3)]; // random base from the array
      return this.dna.splice(i, 1, mutatedBase);  // replace the old base with the new base
      },
      compareDNA(dna) { // method to compare the specimen's DNA with another specimen's DNA
        let compared = 0; // variable to count the number of bases that are the same
          for (let i = 0; i < this.dna.length; i++) { // loop to iterate through the dna array
            if (this.dna[i] === dna[i]) { // if the base at the current index is the same as the base at the same index in the other specimen's dna
                  compared++; // add one to the compared variable
              }
          }
        let percentage = compared.length / this.dna.length * 100; // calculate the percentage of bases that are the same
        return `${this.specimenNum} and ${dna.specimenNum} have ${percentage}% DNA in common.`; // return the percentage of bases that are the same
        },
        willLikelySurvive() { 
            let yes = 0; // variable to count the number of C's and G's  
            for (let i = 0; i < this.dna.length; i++) { 
                if (this.dna[i] === 'C' || this.dna[i] === 'G') { // if the base at the current index is a C or a G
                    yes++; // add one to the yes variable 
                }
            }
            let percentage = yes / this.dna.length * 100; // calculate the percentage of C's and G's
            if (percentage >= 60) { // if the percentage is greater than or equal to 60
                return true;
            } else { // if the percentage is less than 60
                return false;
        }
    },
  };
    };

    const create30 = () => {
        let arr = [];
        let i = 1;
        while (arr.length < 30) {
            let specimen = pAequorFactory(i, mockUpStrand());
            if (specimen.willLikelySurvive()) {
                arr.push(specimen);
            }
            i++;
        }
        return arr;
    };

    console.log(create30());


  
  
  
  