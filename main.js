const path = require('path');

// TODO: Use path.join to join two file path segments
if (process.argv.length < 4) {
    console.error('Usage: node joinPaths.js <segment1> <segment2>');
    process.exit(1);
  }
  
  const segment1 = process.argv[2];
  const segment2 = process.argv[3];
  
  const joinedPath = path.join(segment1, segment2);

// TODO: Print the resulting path to the console
console.log(`Joined path: ${joinedPath}`);

