const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  /** test: Should be able to return the same literal provided in the input object key 'partitionKey'
   * if literal character length is not above 256
   */
  it("Returns the same literal provided in the input object key 'partitionKey' if literal character length is not above 256", () => {
    const literal=234513;
    const trivialKey = deterministicPartitionKey({partitionKey: literal});
    expect(trivialKey).toBe(JSON.stringify(literal));
  });

  /** test: Should be able to return the correct hashed value if provided input is not an object
   * or is an object but does not contain the object key 'partitionKey' whose literal character length is not above 256
   */
  it("Returns the correct hashed value if provided input is not an object or is an object but does not contain the object key 'partitionKey' whose literal character length is not above 256", () => {
    const literal=234513;
    const trivialKey = deterministicPartitionKey(literal);
    const hashedCandidateToMatch = crypto.createHash("sha3-512")
        .update(JSON.stringify(literal))
        .digest("hex");
    expect(trivialKey).toBe(hashedCandidateToMatch);
  });
});
