#!/bin/bash

function create_or_checkout_branch {
    local BRANCH_NAME=$1
    
    # Check if the branch already exists using git branch and grep
    if git branch --list $BRANCH_NAME | grep -q $BRANCH_NAME; then
        # Branch exists
        echo "Branch $BRANCH_NAME already exists, checking out to $CURRENT_BRANCH."
    else
        # Branch does not exist, create and checkout
        git checkout -b $BRANCH_NAME
        echo "Branch $BRANCH_NAME created and checked out."
    fi
}

create_or_checkout_branch "webg-apple-v8"