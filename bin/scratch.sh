#!/bin/bash -e

script_dir="$( cd "$(dirname "$( readlink -f "${BASH_SOURCE[0]}" )" )" && pwd )"

errcho() { echo "$@" 1>&2; }
die() { errcho "$@"; exit 1; }

echo "$PATH" | tr ":" "\n"

which aws
#aws ec2 describe-instances

