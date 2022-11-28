#!/usr/bin/env zx

import {genInts} from './lib/generate.mjs'

try {
  // $.verbose = false;

  // await $`cat package.json | grep name`
  // let branch = await $`git branch --show-current`
  // console.log(branch.stdout)

  // let instances = await $`aws ec2 describe-instances`;
  // instances = JSON.parse(instances);
  // console.log({instances})

  const x = await genInts(2);

} catch (p) {
  console.log(`Exit code: ${p.exitCode}`)
  console.log(`Error: ${p.stderr}`)
}

