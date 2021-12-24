#!/usr/bin/env zx

try {
  // $.verbose = false;

  // await $`cat package.json | grep name`
  // let branch = await $`git branch --show-current`
  // console.log(branch.stdout)

  const instances = await $`aws ec2 describe-instances`;
  console.log({instances})

} catch (p) {
  console.log(`Exit code: ${p.exitCode}`)
  console.log(`Error: ${p.stderr}`)
}

