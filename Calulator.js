// Helper functions to get data for each d orbital  
  const getD2Data = () => {
    const symbols = ['F', 'D', 'P', 'G', 'S'];
    const mults = [3, 1, 3, 1, 1];
    return {
      termSymbols: symbols,
      multiplicities: mults
    };
  }
  
  const getD3Data = () => {
    const symbols = ['F', 'P', 'G', 'P', 'H', 'D', 'F', 'D'];
    const mults = [4, 4, 2, 2, 2, 2, 2, 2];
    return {
      termSymbols: symbols,
      multiplicities: mults
    };
  }

  const getD4Data = () => {
    const symbols = ['D', 'H', 'P', 'F', 'G', 'I', 'D', 'G', 'S', 'D', 'F', 'F', 'P', 'G'];
    const mults = [5, 3, 3, 3, 3, 1, 3, 1, 1, 1, 1, 3, 3, 1];
    return {
      termSymbols: symbols,
      multiplicities: mults
    };
  }
  const getD5Data = () => {
    const symbols = ['S', 'G', 'P', 'D', 'I', 'F', 'D', 'F', 'G', 'H', 'F', 'S', 'D'];
    const mults = ['6', '4', '4', '4', '2', '4', '2', '2', '2', '2', '2', '2', '2'];
    return {
      termSymbols: symbols,
      multiplicities: mults
    };
  }

  const getD6Data = () => {
    const symbols = ['D', 'H', 'P', 'F', 'G', 'D', 'F', 'P', 'I', 'G', 'S', 'D', 'F', 'G'];
    const mults = ['5', '3', '3', '3', '3', '3', '3', '3', '1', '1', '1', '1', '1', '1'];
    return {
      termSymbols: symbols,
      multiplicities: mults
    };
  }

  const getD7Data = () => {
    const symbols = ['F', 'P', 'G', 'P', 'H', 'D', 'F', 'D'];
    const mults = [4, 4, 2, 2, 2, 2, 2, 2];
    return {
      termSymbols: symbols,
      multiplicities: mults
    };
  }
  
  const getD8Data = () => {
    const symbols = ['F', 'D', 'P', 'G', 'S'];
    const mults = ['3', '1', '3', '1', '1'];
    return {
      termSymbols: symbols,
      multiplicities: mults
    };
  }
 
  // Validate input
  const validateInput = n => {
    if(n < 2 || n > 8) {
      throw Error('n must be between 2 and 8');
    }
  }
  
  // Calculate roots
  const calculateRoots = (termSymbols, multiplicities) => {
  
    const roots = {};
    const lValues = {'S': 0, 'P': 1, 'D': 2, 'F': 3, 'G': 4, 'H': 5};
  
    termSymbols.forEach((term, index) => {
      const mult = multiplicities[index];
      const contribution = 2 * (lValues[term] || 0) + 1;
      roots[mult] = (roots[mult] || 0) + contribution;
    });
  
    return roots;
  
  }
  
  // Print roots
  const printRoots = roots => {
    let output = "Here are the CI roots:<br>";
    for(let mult in roots) {
        output += `Multiplicity ${mult}: ${roots[mult]} roots<br>`;
    }
    return output; 
  }
  
  // Main function
  function rootForD(n) {
  
    validateInput(n);  
  
    const dOrbitalData = [
      getD2Data(),
      getD3Data(),
      getD4Data(),
      getD5Data(),
      getD6Data(),
      getD7Data(),
      getD8Data() 
      //...other d orbitals
    ];
  
    const {termSymbols, multiplicities} = dOrbitalData[n-2];
    
    const roots = calculateRoots(termSymbols, multiplicities);
  
    printRoots(roots);
  
    return roots; 
  }

  function calculate() {
    const n = parseInt(document.getElementById('userInput').value);
    const roots = rootForD(n);
    const readableOutput = printRoots(roots);
    
    console.log(readableOutput);
    document.getElementById('output').innerHTML = readableOutput

    //document.getElementById('output').innerHTML = JSON.stringify(roots);
  }

  