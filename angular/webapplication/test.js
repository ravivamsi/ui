const uuidv1 = require('uuid/v1');
const uuidv3 = require('uuid/v3');
const uuidv4 = require('uuid/v4');
const uuidv5 = require('uuid/v5');
const guid = require('aguid');
const NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

console.log('Version 1 UUID             : '+uuidv1());
console.log('Version 3 DNS UUID         : '+uuidv3('devasset.com', uuidv3.DNS));
console.log('Version 3 URL UUID         : '+uuidv3('http://www.devasset.com', uuidv3.URL));
console.log('Version 4 UUID             : '+uuidv4());
console.log('Version 5 DNS UUID         : '+uuidv5('devasset.com', uuidv5.DNS));
console.log('Version 5 URL UUID         : '+uuidv5('http://www.devasset.com', uuidv5.URL));
console.log('Version 5 Namespace UUID   : '+uuidv5('http://www.devasset.com', NAMESPACE));
console.log('GUID                       : '+guid());
