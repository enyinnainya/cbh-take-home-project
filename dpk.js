const crypto = require("crypto");

/**
 * Function to compute the deterministic partition key
 * Returns the literal '0' if no argument is provided when calling function.
 * Returns literal passed in object key 'partitionKey' if character length is not above 256
 * Returns Crypto Hashed value of argument if the two cases above are false.
 * @param event
 * @returns {string}
 */
exports.deterministicPartitionKey = (event) => {
  //declaring and initializing constant variable MAX_PARTITION_KEY_LENGTH
  const MAX_PARTITION_KEY_LENGTH = 256;

  //declaring variable to hold the return value and defaulting it to the literal '0'
  let candidate = '0';

  //Checking if function was called with an argument and process the following logic if true
  if (event) {
    if (event.partitionKey) {
      candidate = JSON.stringify(event.partitionKey);
    } else {
      candidate = crypto.createHash("sha3-512")
          .update(JSON.stringify(event))
          .digest("hex");
    }
  }

  /*
  * checking if computed return value character length is greater than the value of the max partition key constant
  * If true, go ahead and compute the crypto hash of the value
   */
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512")
        .update(candidate)
        .digest("hex");
  }

  return candidate;
};