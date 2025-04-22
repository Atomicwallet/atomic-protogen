import { calculateOutputHash, outDir, getOutputHash, outputHashLocation } from "./lib.mjs"

(async () => {
  let lastOutputHash

  lastOutputHash = getOutputHash(outputHashLocation)

  console.log('Expected proto folder output hash is', lastOutputHash)

  const outputHash = await calculateOutputHash(outDir)

  console.log('Proto folder output hash is', outputHash)

  if (lastOutputHash && lastOutputHash !== outputHash) {
    throw new Error('Output hash is different')
  }

  console.log('Hashes are equal')
})()
  .catch((error) => {
    console.error(error)

    process.exit(1)
  })
